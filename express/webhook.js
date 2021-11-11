'use strict';

const hmacSHA256 = require("crypto-js/hmac-sha256");
const { TEST_WEBHOOK_EVENT_NAME, ASSOCIATION_CRITERIA } = require("./constants");
const { FdkWebhookProcessError, FdkWebhookHandlerNotFound, FdkWebhookRegistrationError, FdkInvalidHMacError, FdkInvalidWebhookConfig } = require("./error_code");
const logger = require("./logger");

class WebhookRegistry {
    constructor() {
        this._handlerMap = null;
        this._config = null;
        this._fdkConfig = null;
    }

    initialize(config, fdkConfig) {
        const emailRegex = new RegExp(/^\S+@\S+\.\S+$/, 'gi');
        if (!config.notification_email || !emailRegex.test(config.notification_email)) {
            throw new FdkInvalidWebhookConfig(`Invalid or missing "notification_email"`);
        }
        if (!config.api_path || config.api_path[0] !== '/') {
            throw new FdkInvalidWebhookConfig(`Invalid or missing "api_path"`);
        }
        if (!config.event_map || !Object.keys(config.event_map).length) {
            throw new FdkInvalidWebhookConfig(`Invalid or missing "event_map"`);
        }
        config.subscribe_on_install = config.subscribe_on_install === undefined ? true : config.subscribe_on_install;
        this._handlerMap = {};
        this._config = config;
        this._fdkConfig = fdkConfig;
        for (let [eventName, handlerData] of Object.entries(this._config.event_map)) {
            this._handlerMap[eventName] = handlerData;
        }
        logger.debug('Webhook registry initialized');
    }

    isInitialized() {
        return !!this._handlerMap && this._config.subscribe_on_install;
    }

    _getEventIdMap(events) {
        return events.reduce((map, event) => {
            map[`${event.event_name}/${event.event_type}`] = event.id;
            return map;
        }, {});
    }

    get _associationCriteria() {
        return this._config.subscribed_saleschannel === 'specific' ? ASSOCIATION_CRITERIA.SPECIFIC : ASSOCIATION_CRITERIA.ALL;
    }

    get _webhookUrl() {
        return `${this._fdkConfig.base_url}${this._config.api_path}`;
    }

    _isConfigUpdated(subscriberConfig) {
        let updated = false;
        if (this._associationCriteria !== subscriberConfig.association.criteria) {
            if (this._associationCriteria === ASSOCIATION_CRITERIA.ALL) {
                subscriberConfig.association.application_id = [];
            }
            logger.debug(`Webhook association criteria updated from ${subscriberConfig.association.criteria} to ${this._associationCriteria}`);
            subscriberConfig.association.criteria = this._associationCriteria;
            updated = true;
        }

        if (this._config.notification_email !== subscriberConfig.email_id) {
            logger.debug(`Webhook notification email updated from ${subscriberConfig.email_id} to ${this._config.notification_email}`);
            subscriberConfig.email_id = this._config.notification_email;
            updated = true;
        }

        if (this._webhookUrl !== subscriberConfig.webhook_url) {
            logger.debug(`Webhook url updated from ${subscriberConfig.webhook_url} to ${this._webhookUrl}`);
            subscriberConfig.webhook_url = this._webhookUrl;
            updated = true;
        }
        return updated;
    }

    async syncEvents(platformClient, config = null) {
        logger.debug('Sync events started');
        if (config) {
            this.initialize(config, this._fdkConfig);
        }

        let subscriberConfig = null;
        let eventsMap = null;
        const promises = [];

        promises.push(platformClient.webhook.fetchAllEventConfigurations());
        promises.push(platformClient.webhook.getSubscribersByExtensionId({ extensionId: this._fdkConfig.api_key }));

        [eventsMap, subscriberConfig] = await Promise.all(promises);

        eventsMap = this._getEventIdMap(eventsMap.event_configs);
        let registerNew = false;
        let configUpdated = false;
        let existingEvents = [];
        subscriberConfig = subscriberConfig.items[0];
        
        if (!subscriberConfig) {
            subscriberConfig = {
                "name": this._fdkConfig.api_key,
                "webhook_url": this._webhookUrl,
                "association": {
                    "company_id": platformClient.config.companyId,
                    "application_id": [],
                    "criteria": this._associationCriteria
                },
                "status": "active",
                "auth_meta": {
                    "type": "hmac",
                    "secret": this._fdkConfig.api_secret
                },
                "event_id": [],
                "email_id": this._config.notification_email
            }
            registerNew = true;
        }
        else {
            logger.debug(`Webhook config on platform side for company id ${platformClient.config.companyId}: ${JSON.stringify(subscriberConfig)}`)
            const { id, name, webhook_url, association, status, auth_meta, event_configs, email_id } = subscriberConfig
            subscriberConfig = { id, name, webhook_url, association, status, auth_meta, email_id };
            subscriberConfig.event_id = [];
            existingEvents = event_configs.map(event => event.id);
            if (this._isConfigUpdated(subscriberConfig)) {
                configUpdated = true;
            }
        }
        for (let eventName of Object.keys(this._handlerMap)) {
            if (eventsMap[eventName]) {
                subscriberConfig.event_id.push(eventsMap[eventName]);
            }
        }

        try {
            if (registerNew) {
                await platformClient.webhook.registerSubscriberToEvent({ body: subscriberConfig });
                if(this._fdkConfig.debug) {
                    const event_map = Object.keys(eventsMap).reduce((map, eventName)=>{
                        map[eventsMap[eventName]] = eventName;
                        return map;
                    }, {});
                    subscriberConfig.event_id = subscriberConfig.event_id.map(id=>event_map[id]);
                    logger.debug(`Webhook config registered for company: ${platformClient.config.companyId}, config: ${JSON.stringify(subscriberConfig)}`);
                }
            }
            else {
                const eventDiff = [
                    ...subscriberConfig.event_id.filter(eventId => !existingEvents.includes(eventId)),
                    ...existingEvents.filter(eventId => !subscriberConfig.event_id.includes(eventId))
                ]

                if (eventDiff.length || configUpdated) {
                    await platformClient.webhook.updateSubscriberConfig({ body: subscriberConfig });
                    if(this._fdkConfig.debug) {
                        const event_map = Object.keys(eventsMap).reduce((map, eventName)=>{
                            map[eventsMap[eventName]] = eventName;
                            return map;
                        }, {});
                        subscriberConfig.event_id = subscriberConfig.event_id.map(id=>event_map[id]);
                        logger.debug(`Webhook config updated for company: ${platformClient.config.companyId}, config: ${JSON.stringify(subscriberConfig)}`);
                    }
                }
            }
        }
        catch (ex) {
            throw new FdkWebhookRegistrationError(`Failed to sync webhook events. Reason: ${ex.message}`);
        }
    }

    async enableSalesChannelWebhook(platformClient, applicationId) {
        if (this._config.subscribed_saleschannel !== 'specific') {
            throw new FdkWebhookRegistrationError('`subscribed_saleschannel` is not set to `specific` in webhook config');
        }
        try {
            let subscriberConfig = await platformClient.webhook.getSubscribersByExtensionId({ extensionId: this._fdkConfig.api_key })
            subscriberConfig = subscriberConfig.items[0];
            const { id, name, webhook_url, association, status, auth_meta, email_id, event_configs } = subscriberConfig;
            subscriberConfig = { id, name, webhook_url, association, status, auth_meta, email_id };
            subscriberConfig.event_id = event_configs.map(event => event.id);
            const arrApplicationId = subscriberConfig.association.application_id || [];
            const rmIndex = arrApplicationId.indexOf(applicationId);
            if (rmIndex === -1) {
                arrApplicationId.push(applicationId);
                subscriberConfig.association.application_id = arrApplicationId;
                await platformClient.webhook.updateSubscriberConfig({ body: subscriberConfig });
                logger.debug(`Webhook enabled for saleschannel: ${applicationId}`);
            }
        }
        catch (ex) {
            throw new FdkWebhookRegistrationError(`Failed to add saleschannel webhook. Reason: ${ex.message}`);
        }
    }

    async disableSalesChannelWebhook(platformClient, applicationId) {
        if (this._config.subscribed_saleschannel !== 'specific') {
            throw new FdkWebhookRegistrationError('`subscribed_saleschannel` is not set to `specific` in webhook config');
        }
        try {
            let subscriberConfig = await platformClient.webhook.getSubscribersByExtensionId({ extensionId: this._fdkConfig.api_key })
            subscriberConfig = subscriberConfig.items[0];
            const { id, name, webhook_url, association, status, auth_meta, email_id, event_id } = subscriberConfig;
            subscriberConfig = { id, name, webhook_url, association, status, auth_meta, email_id };
            subscriberConfig.event_id = event_configs.map(event => event.id);
            const arrApplicationId = subscriberConfig.association.application_id;
            if (arrApplicationId && arrApplicationId.length) {
                const rmIndex = arrApplicationId.indexOf(applicationId);
                if (rmIndex > -1) {
                    arrApplicationId.splice(rmIndex, 1);
                    await platformClient.webhook.updateSubscriberConfig({ body: subscriberConfig });
                    logger.debug(`Webhook disabled for saleschannel: ${applicationId}`);
                }
            }
        }
        catch (ex) {
            throw new FdkWebhookRegistrationError(`Failed to remove saleschannel webhook. Reason: ${ex.message}`);
        }
    }

    verifySignature(req) {
        const reqSignature = req.headers['x-fp-signature'];
        const { body } = req;
        const calcSignature = hmacSHA256(JSON.stringify(body), this._fdkConfig.api_secret).toString();
        if (reqSignature !== calcSignature) {
            throw new FdkInvalidHMacError(`Signature passed does not match calculated body signature`);
        }
    }

    async processWebhook(req) {
        try {
            const { body } = req;
            if (body.event.name === TEST_WEBHOOK_EVENT_NAME) {
                return;
            }
            this.verifySignature(req);
            const eventName = `${body.event.name}/${body.event.type}`;
            const extHandler = (this._handlerMap[eventName] || {}).handler;
            if (typeof extHandler === 'function') {
                logger.debug(`Webhook event received for company: ${req.body.company_id}, application: ${req.body.application_id || ''}, event name: ${eventName}`);
                await extHandler(eventName, req.body, req.body.company_id, req.body.application_id);
            }
            else {
                throw new FdkWebhookHandlerNotFound(`Webhook handler not assigned: ${eventName}`);
            }
        }
        catch (err) {
            throw new FdkWebhookProcessError(err.message);
        }
    }

    async getSubscribeConfig(req) {
        const subscriberConfig = await platformClient.webhook.getSubscribersByExtensionId({ extensionId: this._fdkConfig.api_key });
        return subscriberConfig.items[0];
    }

}

module.exports = {
    WebhookRegistry
}