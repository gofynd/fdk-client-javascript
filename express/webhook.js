'use strict';

class WebhookHandler {
    constructor() {
        this._handlerMap = null;
        this._config = null;
        this._fdkConfig = null;
    }

    initialize(config, fdkConfig) {
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

    getEventIdMap(events) {
        return events.reduce((map, event) => {
            map[`${event.event_name}/${event.event_type}`] = event.id;
            return map;
        }, {});
    }

    async syncEvents(platformClient, config = null) {

        if (config) {
            this.initialize(config, this._fdkConfig);
        }
        // TODO: Get registered webhooks via extension id
        let subscriberConfig = null;
        const promises = [];
        let eventsMap = null;
        promises.push(platformClient.webhook.fetchAllEventConfigurations());
        promises.push(platformClient.webhook.getSubscribersByExtensionId({ extensionId: this._fdkConfig.api_key }));

        [eventsMap, subscriberConfig] = await Promise.all(promises);

        eventsMap = this.getEventIdMap(eventsMap.event_configs);
        let registerListener = false;
        subscriberConfig = subscriberConfig.items[0];
        if (!subscriberConfig) {
            subscriberConfig = {
                "name": this._fdkConfig.api_key,
                "webhook_url": `${this._fdkConfig.base_url}${this._config.api_path}`,
                "association": {
                    "company_id": platformClient.config.companyId
                },
                "status": "active",
                "auth_meta": {
                    "type": "hmac256",
                    "secret": this._fdkConfig.api_secret
                },
                "event_id": [],
                "email_id": this._config.notification_email
            }
            registerListener = true;
        }
        else {
            const { name, webhook_url, association, status, auth_meta } = subscriberConfig
            subscriberConfig = { name, webhook_url, association, status, auth_meta };
            subscriberConfig.event_id = [];
        }
        for (let eventName of Object.keys(this._handlerMap)) {
            subscriberConfig.event_id.push(eventsMap[eventName]);
        }

        if (registerListener) {
            await platformClient.webhook.registerSubscriberToEvent({ body: subscriberConfig });
        }
        else {
            await platformClient.webhook.updateSubscriberConfig({ body: subscriberConfig });
        }
    }

    webhookHandlerView = async (req, res, next) => {
        let status = 404;
        try {
            const { body } = req;
            const eventName = `${body.event.name}/${body.event.type}`;
            const extHandler = (this._handlerMap[eventName] || {}).handler;
            if (typeof extHandler === 'function') {
                await extHandler(eventName, req.body.company_id, req.body.payload);
                status = 200;
            }
        }
        catch (err) {
            console.log(err);
            status = 500;
        }
        return res.status(status).json({ success: status === 200 });
    }

}

const webhookHandler = new WebhookHandler();

module.exports = {
    webhookHandler
}