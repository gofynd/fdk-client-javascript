'use strict';

const hmacSHA256 = require("crypto-js/hmac-sha256");
const { fdkAxios } = require("@gofynd/fdk-client-javascript/sdk/common/AxiosHelper");
const { TEST_WEBHOOK_EVENT_NAME, ASSOCIATION_CRITERIA } = require("./constants");
const { FdkWebhookProcessError, FdkWebhookHandlerNotFound, FdkWebhookRegistrationError, FdkInvalidHMacError, FdkInvalidWebhookConfig } = require("./error_code");
const logger = require("./logger");
const { RetryManger } = require("./retry_manager");

let eventConfig = {}
class WebhookRegistry {
    constructor(retryManager) {
        this._handlerMap = null;
        this._config = null;
        this._fdkConfig = null;
        this._retryManager = retryManager;
    }

    async initialize(config, fdkConfig) {
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

        const handlerConfig = {};

        for (let [eventName, handlerData] of Object.entries(this._config.event_map)) {
            handlerConfig[eventName] = handlerData;
        }

        await this.getEventConfig(handlerConfig);                                             // get event config for required event_map in eventConfig.event_configs
        eventConfig.eventsMap = this._getEventIdMap(eventConfig.event_configs);               // generate eventIdMap from eventConfig.event_configs
        this._validateEventsMap(handlerConfig);                    
        
        if(Object.keys(eventConfig.eventsNotFound).length){
            let errors = []
            Object.keys(eventConfig.eventsNotFound).forEach((key)=>{
                errors.push(`name: ${key}, version: ${eventConfig.eventsNotFound[key]}`) 
            })
            throw new FdkInvalidWebhookConfig(`Webhooks events ${errors.join(' and ')} not found`);
        }
        this._handlerMap = handlerConfig;
        logger.debug('Webhook registry initialized');
    }

    get isInitialized() {
        return !!this._handlerMap;
    }

    get isSubscribeOnInstall(){
        return this._config.subscribe_on_install
    }

    _validateEventsMap(handlerConfig) {
        delete eventConfig.eventsNotFound
        eventConfig.eventsNotFound = {}
        Object.keys(handlerConfig).forEach((key) => {
            if(!eventConfig.eventsMap.hasOwnProperty(`${key}/${handlerConfig[key].version}`)){
                eventConfig.eventsNotFound[key] = handlerConfig[key].version            
            }
        })
    }

    _getEventIdMap(events) {
        return events.reduce((event_map, event) => {
            event_map[`${event.event_category}/${event.event_name}/${event.event_type}/${event.version}`] = event.id;
            return event_map;
        }, {});
    }

    _associationCriteria(applicationIdList) {
        if (this._config.subscribed_saleschannel === 'specific') {
            return applicationIdList.length ? ASSOCIATION_CRITERIA.SPECIFIC : ASSOCIATION_CRITERIA.EMPTY;
        }
        return ASSOCIATION_CRITERIA.ALL;
    }

    get _webhookUrl() {
        return `${this._fdkConfig.base_url}${this._config.api_path}`;
    }

    _isConfigUpdated(subscriberConfig) {
        let updated = false;
        const configCriteria = this._associationCriteria(subscriberConfig.association.application_id);
        if (configCriteria !== subscriberConfig.association.criteria) {
            if (configCriteria === ASSOCIATION_CRITERIA.ALL) {
                subscriberConfig.association.application_id = [];
            }
            logger.debug(`Webhook association criteria updated from ${subscriberConfig.association.criteria} to ${configCriteria}`);
            subscriberConfig.association.criteria = configCriteria;
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

    async syncEvents(platformClient, config = null, enableWebhooks) {
        if (config) {
            await this.initialize(config, this._fdkConfig);
        }
        if (!this.isInitialized){
            throw new FdkInvalidWebhookConfig('Webhook registry not initialized');
        }
        logger.debug('Webhook sync events started');
        
        let subscriberConfig = await this.getSubscriberConfig(platformClient);

        let registerNew = false;
        let configUpdated = false;
        let existingEvents = [];

        if (!subscriberConfig) {
            subscriberConfig = {
                "name": this._fdkConfig.api_key,
                "webhook_url": this._webhookUrl,
                "association": {
                    "company_id": platformClient.config.companyId,
                    "application_id": [],
                    "criteria": this._associationCriteria([])
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
            if (enableWebhooks !== undefined) {
                subscriberConfig.status = enableWebhooks ? 'active' : 'inactive';
            }
        }
        else {
            logger.debug(`Webhook config on platform side for company id ${platformClient.config.companyId}: ${JSON.stringify(subscriberConfig)}`)
            const { id, name, webhook_url, association, status, auth_meta, event_configs, email_id } = subscriberConfig
            subscriberConfig = { id, name, webhook_url, association, status, auth_meta, email_id };
            subscriberConfig.event_id = [];
            existingEvents = event_configs.map(event => event.id);
            if (auth_meta.secret !== this._fdkConfig.api_secret) {
                auth_meta.secret = this._fdkConfig.api_secret;
                configUpdated = true;
            }
            if (enableWebhooks !== undefined) {
                subscriberConfig.status = enableWebhooks ? 'active' : 'inactive';
                configUpdated = true;
            }
            if (this._isConfigUpdated(subscriberConfig)) {
                configUpdated = true;
            }
        }
        for (let eventName of Object.keys(this._handlerMap)) {
            eventName = `${eventName}/${this._handlerMap[eventName].version}`
            let event_id = eventConfig.eventsMap[eventName]
            if (event_id) {
                subscriberConfig.event_id.push(event_id);
            }
        }

        try {
            if (registerNew) {
                await this.registerSubscriberConfig(platformClient, subscriberConfig);
                if (this._fdkConfig.debug) {
                    const event_map = Object.keys(eventConfig.eventsMap).reduce((map, eventName) => {
                        map[eventConfig.eventsMap[eventName]] = eventName;
                        return map;
                    }, {});
                    subscriberConfig.event_id = subscriberConfig.event_id.map(id => event_map[id]);
                    logger.debug(`Webhook config registered for company: ${platformClient.config.companyId}, config: ${JSON.stringify(subscriberConfig)}`);
                }
            }
            else {
                const eventDiff = [
                    ...subscriberConfig.event_id.filter(eventId => !existingEvents.includes(eventId)),
                    ...existingEvents.filter(eventId => !subscriberConfig.event_id.includes(eventId))
                ]

                if (eventDiff.length || configUpdated) {
                    await this.updateSubscriberConfig(platformClient, subscriberConfig);
                    if (this._fdkConfig.debug) {
                        const event_map = Object.keys(eventConfig.eventsMap).reduce((map, eventName) => {
                            map[eventConfig.eventsMap[eventName]] = eventName;
                            return map;
                        }, {});
                        subscriberConfig.event_id = subscriberConfig.event_id.map(id => event_map[id]);
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
        if (!this.isInitialized){
            await this.initialize(this._config, this._fdkConfig);
        }
        if (this._config.subscribed_saleschannel !== 'specific') {
            throw new FdkWebhookRegistrationError('`subscribed_saleschannel` is not set to `specific` in webhook config');
        }
        try {
            let subscriberConfig = await this.getSubscriberConfig(platformClient);
            if (!subscriberConfig) {
                throw new FdkWebhookRegistrationError(`Subscriber config not found`);
            }
            const { id, name, webhook_url, association, status, auth_meta, email_id, event_configs } = subscriberConfig;
            subscriberConfig = { id, name, webhook_url, association, status, auth_meta, email_id };
            subscriberConfig.event_id = event_configs.map(event => event.id);
            const arrApplicationId = subscriberConfig.association.application_id || [];
            const rmIndex = arrApplicationId.indexOf(applicationId);
            if (rmIndex === -1) {
                arrApplicationId.push(applicationId);
                subscriberConfig.association.application_id = arrApplicationId;
                subscriberConfig.association.criteria = this._associationCriteria(subscriberConfig.association.application_id);
                await this.updateSubscriberConfig(platformClient, subscriberConfig);
                logger.debug(`Webhook enabled for saleschannel: ${applicationId}`);
            }
        }
        catch (ex) {
            throw new FdkWebhookRegistrationError(`Failed to add saleschannel webhook. Reason: ${ex.message}`);
        }
    }

    async disableSalesChannelWebhook(platformClient, applicationId) {
        if (!this.isInitialized){
            await this.initialize(this._config, this._fdkConfig);
        }
        if (this._config.subscribed_saleschannel !== 'specific') {
            throw new FdkWebhookRegistrationError('`subscribed_saleschannel` is not set to `specific` in webhook config');
        }
        try {

            let subscriberConfig = await this.getSubscriberConfig(platformClient);
            if (!subscriberConfig) {
                throw new FdkWebhookRegistrationError(`Subscriber config not found`);
            }
            const { id, name, webhook_url, association, status, auth_meta, email_id, event_configs } = subscriberConfig;
            subscriberConfig = { id, name, webhook_url, association, status, auth_meta, email_id };
            subscriberConfig.event_id = event_configs.map(event => event.id);
            const arrApplicationId = subscriberConfig.association.application_id;
            if (arrApplicationId && arrApplicationId.length) {
                const rmIndex = arrApplicationId.indexOf(applicationId);
                if (rmIndex > -1) {
                    arrApplicationId.splice(rmIndex, 1);
                    subscriberConfig.association.criteria = this._associationCriteria(subscriberConfig.association.application_id);
                    await this.updateSubscriberConfig(platformClient, subscriberConfig);
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
        if (!this.isInitialized){
            await this.initialize(this._config, this._fdkConfig);
        }
        try {
            const { body } = req;
            if (body.event.name === TEST_WEBHOOK_EVENT_NAME) {
                return;
            }
            this.verifySignature(req);
            const eventName = `${body.event.name}/${body.event.type}`;
            let categoryEventName = eventName;
            if (body.event.category) {
                categoryEventName = `${body.event.category}/${eventName}`
            }

            const eventHandlerMap = (this._handlerMap[categoryEventName] || this._handlerMap[eventName] || {});
            const extHandler = eventHandlerMap.handler;

            if (typeof extHandler === 'function') {
                logger.debug(`Webhook event received for company: ${req.body.company_id}, application: ${req.body.application_id || ''}, event name: ${eventName}`);
                await extHandler(eventName, req.body, req.body.company_id, req.body.application_id);
            }
            else {
                throw new FdkWebhookHandlerNotFound(`Webhook handler not assigned: ${categoryEventName}`);
            }
        }
        catch (err) {
            throw new FdkWebhookProcessError(err.message);
        }
    }


    async registerSubscriberConfig(platformClient, subscriberConfig) {
        const uniqueKey = `registerSubscriberToEvent_${platformClient.config.companyId}_${this._fdkConfig.api_key}`;

        const retryInfo = this._retryManager.retryInfoMap.get(uniqueKey);
        if (retryInfo && !retryInfo.isRetry) {
            this._retryManager.resetRetryState(uniqueKey);
        }

        try {
            return await platformClient.webhook.registerSubscriberToEvent({body: subscriberConfig});
        } catch(err) {
            if (
                RetryManger.shouldRetryOnError(err)
                && !this._retryManager.isRetryInProgress(uniqueKey)
            ) {
                return await this._retryManager.retry(
                    uniqueKey, 
                    this.registerSubscriberConfig.bind(this), 
                    platformClient, 
                    subscriberConfig
                )
            }
        }
        throw new FdkWebhookRegistrationError(`Error while registering webhook subscriber configuration, Reason: ${err.message}`);
    }

    async updateSubscriberConfig(platformClient, subscriberConfig) {
        const uniqueKey = `updateSubscriberConfig_${platformClient.config.companyId}_${this._fdkConfig.api_key}`;

        const retryInfo = this._retryManager.retryInfoMap.get(uniqueKey);
        if (retryInfo && !retryInfo.isRetry) {
            this._retryManager.resetRetryState(uniqueKey);
        }

        try {
            return await platformClient.webhook.updateSubscriberConfig({body: subscriberConfig});
        } catch(err) {
            if (
                RetryManger.shouldRetryOnError(err)
                && !this._retryManager.isRetryInProgress(uniqueKey)
            ) {
                return await this._retryManager.retry(
                    uniqueKey, 
                    this.updateSubscriberConfig.bind(this),
                    platformClient, 
                    subscriberConfig
                );
            }
            throw new FdkWebhookRegistrationError(`Error while updating webhook subscriber configuration. Reason: ${err.message}`);
        }
    }

    async getSubscriberConfig(platformClient) {
        const uniqueKey = `getSubscribersByExtensionId_${platformClient.config.companyId}_${this._fdkConfig.api_key}`;

        const retryInfo = this._retryManager.retryInfoMap.get(uniqueKey);
        if (retryInfo && !retryInfo.isRetry) {
            this._retryManager.resetRetryState(uniqueKey);
        }

        try {
            const subscriberConfig = await platformClient.webhook.getSubscribersByExtensionId({ extensionId: this._fdkConfig.api_key });
            return subscriberConfig.items[0];
        }
        catch(err){
            if (
                RetryManger.shouldRetryOnError(err)
                && !this._retryManager.isRetryInProgress(uniqueKey)
            ) {
                return await this._retryManager.retry(
                    uniqueKey, 
                    this.getSubscriberConfig.bind(this), 
                    platformClient
                );
            }
            throw new FdkInvalidWebhookConfig(`Error while fetching webhook subscriber configuration, Reason: ${err.message}`);
        }
    }

    async getEventConfig(handlerConfig) {
        let url = `${this._fdkConfig.cluster}/service/common/webhook/v1.0/events/query-event-details`;
        const uniqueKey = `${url}_${this._fdkConfig.api_key}`;

        const retryInfo = this._retryManager.retryInfoMap.get(uniqueKey);

        if (retryInfo && !retryInfo.isRetry) {
            this._retryManager.resetRetryState(uniqueKey);
        }

        try {
            let data = [];
            Object.keys(handlerConfig).forEach((key) => {
                let eventObj = {}
                let eventDetails = key.split('/');
                if (eventDetails.length !== 3) {
                    throw new FdkInvalidWebhookConfig(`Invalid webhook event map key. Invalid key: ${key}`)
                }
                eventObj.event_category = eventDetails[0]
                eventObj.event_name = eventDetails[1];
                eventObj.event_type = eventDetails[2];
                eventObj.version = handlerConfig[key].version;
                data.push(eventObj);
            });
            
            const rawRequest = {
                method: "post",
                url: url,
                data: data,
                headers: {
                    "Content-Type": "application/json",
                },
            };
            let responseData = await fdkAxios.request(rawRequest);
            eventConfig.event_configs = responseData.event_configs;
            logger.debug(`Webhook events config received: ${logger.safeStringify(responseData)}`);
            return responseData;            
        }
        catch (err) {

            if (
                RetryManger.shouldRetryOnError(err)
                && !this._retryManager.isRetryInProgress(uniqueKey)
            ) {
                return await this._retryManager.retry(uniqueKey, this.getEventConfig.bind(this), handlerConfig);
            }

            throw new FdkInvalidWebhookConfig(`Error while fetching webhook events configuration, Reason: ${err.message}`)
        }
    }
}

module.exports = {
    WebhookRegistry
}