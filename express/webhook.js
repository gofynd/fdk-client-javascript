'use strict';

const { omit } = require('lodash');
const WEBHOOK_HANDLERS = {};

function initialize(webhookMap, appRouter) {
    appRouter.post('/fp/webhook', webhookHandler);
    for (let [eventName, handlerData] of Object.entries(webhookMap)) {
        WEBHOOK_HANDLERS[eventName] = handlerData;
    }
}

async function webhookHandler(req, res, next) {
    let status = 404;
    try {
        const { body } = req;
        const eventName = `${body.event.name}/${body.event.type}`;
        const extHandler = WEBHOOK_HANDLERS[eventName].handler;
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

async function syncEvents(webhookMap, config, platformClient) {
    // TODO: Add verbose log in this scenario
    if (webhookMap) {
        Object.keys(WEBHOOK_HANDLERS).forEach(key => delete WEBHOOK_HANDLERS[key]);
        for (let [eventName, handlerData] of Object.entries(webhookMap)) {
            WEBHOOK_HANDLERS[eventName] = handlerData;
        }
    }
    // TODO: Get registered webhooks via extension id
    let subscriberConfig = null;
    const promises = [];
    let eventsMap = null;
    promises.push(platformClient.webhook.fetchAllEventConfigurations());
    // TODO: uncomment this after method sdk is generated
    // promises.push(platformClient.webhook.getSubscriberByExtensionId({ extension_id: config.api_key }));

    promises.push(platformClient.webhook.getSubscriberById({ subscriberId: 1 }));
    [eventsMap, subscriberConfig] = await Promise.all(promises);

    eventsMap = getEventIdMap(eventsMap.event_configs);
    let registerListener = false;
    if (!subscriberConfig) {
        subscriberConfig = {
            "name": config.api_key,
            "webhook_url": `${config.base_url}/fp/webhook`,
            "company_id": platformClient.config.company_id,
            "extension_id": config.api_key,
            "status": "active",
            "auth_meta": {
                "type": "hmac256",
                "secret": config.api_secret
            },
            "event_configs": []
        }
        registerListener = true;
    }
    else {
        const {name, webhook_url, company_id, extension_id, status, auth_meta, event_configs} = subscriberConfig
        subscriberConfig = {name, webhook_url, company_id, extension_id, status, auth_meta, event_configs};
    }
    for (let [eventName, handlerData] of Object.entries(WEBHOOK_HANDLERS)) {
        subscriberConfig.event_configs.push(eventsMap[eventName]);
    }
    subscriberConfig = omit(subscriberConfig, ['created_on', 'modified_by'])
    if (registerListener) {
        await platformClient.webhook.registerSubscriberToEvent({body: subscriberConfig});
    }
    else {
        await platformClient.webhook.updateSubscriberConfig({body: subscriberConfig});
    }
}

function getEventIdMap(events) {
    return events.reduce((map, event) => {
        map[`${event.event_name}/${event.event_type}`] = event.id;
        return map;
    }, {});
}

module.exports = {
    initialize,
    syncEvents
}