'use strict';

const hmacSHA256 = require("crypto-js/hmac-sha256");
const { TEST_WEBHOOK_EVENT_NAME } = require("./constants");
const { FdkWebhookProcessError, FdkWebhookHandlerNotFound, FdkWebhookRegistrationError, FdkInvalidHMacError, FdkInvalidWebhookConfig } = require("./error_code");

class WebhookRegistery {
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
        this._handlerMap = {};
        this._config = config;
        this._fdkConfig = fdkConfig;
        for (let [eventName, handlerData] of Object.entries(this._config.event_map)) {
            this._handlerMap[eventName] = handlerData;
        }
    }

    isInitialized() {
        return !!this._handlerMap;
    }

    _getEventIdMap(events) {
        return events.reduce((map, event) => {
            map[`${event.event_name}/${event.event_type}`] = event.id;
            return map;
        }, {});
    }

    async syncEvents(platformClient, config = null) {

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
        let existingEvents = [];
        subscriberConfig = subscriberConfig.items[0];

        if (!subscriberConfig) {
            subscriberConfig = {
                "name": this._fdkConfig.api_key,
                "webhook_url": `${this._fdkConfig.base_url}${this._config.api_path}`,
                "association": {
                    "company_id": platformClient.config.companyId
                    // TODO: Add allowing all apps field and check `saleschannel_events_sync` field
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
            const { id, name, webhook_url, association, status, auth_meta, event_configs } = subscriberConfig
            subscriberConfig = { id, name, webhook_url, association, status, auth_meta };
            subscriberConfig.event_id = [];
            existingEvents = event_configs.map(event => event.id);
        }
        for (let eventName of Object.keys(this._handlerMap)) {
            if (eventsMap[eventName]) {
                subscriberConfig.event_id.push(eventsMap[eventName]);
            }
        }

        try {
            if (registerNew) {
                await platformClient.webhook.registerSubscriberToEvent({ body: subscriberConfig });
            }
            else {
                const eventDiff = existingEvents.filter(eventId => !subscriberConfig.event_id.includes(eventId))
                if (eventDiff.length) {
                    await platformClient.webhook.updateSubscriberConfig({ body: subscriberConfig });
                }
            }
        }
        catch (ex) {
            throw new FdkWebhookRegistrationError(`Failed to sync webhook events. Reason: ${ex.message}`);
        }
    }

    async enableSalesChannelWebhook(platformClient, application_id) {
        try {
            let subscriberConfig = await platformClient.webhook.getSubscribersByExtensionId({ extensionId: this._fdkConfig.api_key })
            subscriberConfig = subscriberConfig.items[0];
            const arrApplicationId = subscriberConfig.association.application_id || [];
            const rmIndex = arrApplicationId.indexOf(application_id);
            if (rmIndex === -1) {
                arrApplicationId.push(application_id);
                subscriberConfig.association.application_id = arrApplicationId;
                await platformClient.webhook.updateSubscriberConfig({ body: subscriberConfig });
            }
        }
        catch(ex) {
            throw new FdkWebhookRegistrationError(`Failed to add saleschannel webhook. Reason: ${ex.message}`);
        }
    }

    async disableSalesChannelWebhook(platformClient, application_id) {
        try {
            let subscriberConfig = await platformClient.webhook.getSubscribersByExtensionId({ extensionId: this._fdkConfig.api_key })
            subscriberConfig = subscriberConfig.items[0];
            const arrApplicationId = subscriberConfig.association.application_id;
            if (arrApplicationId && arrApplicationId.length) {
                const rmIndex = arrApplicationId.indexOf(application_id);
                if (rmIndex > -1) {
                    arrApplicationId.splice(rmIndex, 1);
                    await platformClient.webhook.updateSubscriberConfig({ body: subscriberConfig });
                }
            }
        }
        catch(ex) {
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
            this.verifySignature(req);
            const { body } = req;
            const eventName = `${body.event.name}/${body.event.type}`;
            const extHandler = (this._handlerMap[eventName] || {}).handler;
            if (typeof extHandler === 'function') {
                await extHandler(eventName, req.body.payload, req.body.company_id, req.body.application_id);
            }
            else {
                if (body.event.name !== TEST_WEBHOOK_EVENT_NAME) {
                    throw new FdkWebhookHandlerNotFound(`Webhook handler not assigned: ${eventName}`);
                }
            }
        }
        catch (err) {
            throw new FdkWebhookProcessError(err.message);
        }
    }

}

module.exports = {
    WebhookRegistery
}