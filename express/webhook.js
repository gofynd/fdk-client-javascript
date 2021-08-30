const { Router } = require("express");
let webhookRouter = Router({mergeParams: true});
const WEBHOOK_HANDLERS = {};

async function initialize(webhookMap, appRouter) {
    appRouter.use('/fp/webhook', webhookRouter);
    for ([eventName, handlerData] of Object.entries(webhookMap)) {
        WEBHOOK_HANDLERS[handlerData.path] = handlerData;
    }
    await syncEvents();
}

function webhookHandler(path, eventName) {
    return async function(req, res, next) {
        let status = 404;
        try {
            const extHandler = WEBHOOK_HANDLERS[path].handler;
            if(typeof extHandler === 'function') {
                await extHandler(eventName, req.body.company_id, req.body.payload);
                status = 200;
            }
        }
        catch(err) {
            console.log(err);
            status = 500;
        }
        return res.status(status).json({success: status === 200});
    }
}

async function syncEvents(webhookMap, router) {
    if (webhookMap) {
        // TODO: Add verbose log in this scenario
        await initialize(webhookMap, router);
        return;
    }
    // TODO: Get registered webhooks via extension id 
    // TODO: Register if webhook path is changed or new one is added or remove if removed 
    for ([eventName, handlerData] of Object.entries(WEBHOOK_HANDLERS)) {
        webhookRouter.post(`${handlerData.path}`, webhookHandler(handlerData.path, eventName));
    }
}

module.exports = {
    initialize,
    syncEvents
}