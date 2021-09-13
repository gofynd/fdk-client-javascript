'use strict';

const fdkHelper = require("../helpers/fdk");
const { clearData } = require("../helpers/setup_db");
const request = require("../helpers/server");
const { SESSION_COOKIE_NAME } = require("../../express/constants");
const { syncEvents } = require("../../express/webhook");

describe("Webhook Integrations", () => {
    let webhookConfig = null;
    let cookie = "";
    beforeEach(async () => {
        webhookConfig = {
            api_path: '/v1/webhooks',
            notification_email: 'test@abc.com',
            event_map: {
                'extension/install': {
                    handler: function () { }
                },
                'extension/uninstall': {
                    handler: function () { }
                },
                'coupon/create': {
                    handler: function () { throw Error('test error') }
                }
            }
        }
        this.fdk_instance = await fdkHelper({
            access_mode: "offline",
            webhook_config: webhookConfig
        });
        request.app.restApp.use(this.fdk_instance.fdkHandler);
        request.app.restApp.post('/v1/webhooks', this.fdk_instance.webhookHandler.webhookHandlerView)
        
        let response = await request
            .get('/fp/install?company_id=1&install_event=true')
            .send();
        cookie = response.headers['set-cookie'][0].split(",")[0].split("=")[1];
        const queryParams = response.headers['location'].split('?')[1];
        response = await request
            .get(`/fp/auth?company_id=1&install_event=true&${queryParams}`)
            .set('cookie', `${SESSION_COOKIE_NAME}_1=${cookie}`)
            .send();
    });

    afterEach(async () => {
        await clearData();
    });

    it("Register webhooks", async () => {
        const res = await request
            .post(`/v1/webhooks`)
            .set('cookie', `${SESSION_COOKIE_NAME}_1=${cookie}`)
            .send({ "company_id": 1, "payload": { "test": true }, "event": {"name": "extension", "type": "install"} });
        expect(res.status).toBe(200);
        expect(res.body.success).toBeTrue();
    });

    it("Invalid webhook path", async () => {
        const res = await request
            .post(`/v1/webhooks`)
            .set('cookie', `${SESSION_COOKIE_NAME}_1=${cookie}`)
            .send({ "company_id": 1, "payload": { "test": true }, "event": {"name": "coupon", "type": "update"} });
        expect(res.status).toBe(404);
    });

    it("Failed webhook handler execution", async () => {
        const res = await request
            .post(`/v1/webhooks`)
            .set('cookie', `${SESSION_COOKIE_NAME}_1=${cookie}`)
            .send({ "company_id": 1, "payload": { "test": true }, "event": {"name": "coupon", "type": "create"} });
        expect(res.status).toBe(500);
        expect(res.body.success).toBeFalse();
    });

    it("Sync webhooks: Add new", async () => {
        const newMap = {
            api_path: '/v1/webhooks',
            notification_email: 'test@abc.com',
            event_map: {
                'coupon/create': {
                    handler: function () { }
                }
            }
        }
        const handlerFn = spyOn(newMap.event_map['coupon/create'], 'handler');
        const platformClient = await this.fdk_instance.getPlatformClient('1');
        await this.fdk_instance.webhookHandler.syncEvents(platformClient, newMap);
        const res = await request
            .post(`/v1/webhooks`)
            .set('cookie', `${SESSION_COOKIE_NAME}_1=${cookie}`)
            .send({ "company_id": 1, "payload": { "test": true }, "event": {"name": "coupon", "type": "create"} });
        expect(res.status).toBe(200);
        expect(handlerFn).toHaveBeenCalled();
    });

    // it("Sync webhooks: Replace existing", async () => {

    //     const res = await request
    //         .post(`/fp/webhook/test-wbhk-fail`)
    //         .set('cookie', `${SESSION_COOKIE_NAME}_1=${cookie}`)
    //         .send({ "company_id": 1, "payload": { "test": true } });
    //     expect(res.status).toBe(500);
    //     expect(res.body.success).toBeFalse();
    // });
});