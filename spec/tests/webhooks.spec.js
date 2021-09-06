'use strict';

const fdkHelper = require("../helpers/fdk");
const { clearData } = require("../helpers/setup_db");
const request = require("../helpers/server");
const { SESSION_COOKIE_NAME } = require("../../express/constants");
const { syncEvents } = require("../../express/webhook");

describe("Webhook Integrations", () => {
    let webhookMap = null;
    let cookie = "";
    beforeEach(async () => {
        webhookMap = {
            'event-1': {
                path: '/test-wbhk-1',
                handler: function () { }
            },
            'event-2': {
                path: '/test-wbhk-2',
                handler: function () { }
            },
            'fail-event': {
                path: '/test-wbhk-fail',
                handler: function () { throw Error('test error') }
            }
        }
        this.fdk_instance = await fdkHelper({
            access_mode: "offline",
            webhook_map: webhookMap
        });
        request.app.restApp.use(this.fdk_instance.fdkHandler);
        
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
            .post(`/fp/webhook/test-wbhk-1`)
            .set('cookie', `${SESSION_COOKIE_NAME}_1=${cookie}`)
            .send({ "company_id": 1, "payload": { "test": true } });
        expect(res.status).toBe(200);
        expect(res.body.success).toBeTrue();
    });

    it("Invalid webhook path", async () => {
        const res = await request
            .post(`/fp/webhook/test`)
            .set('cookie', `${SESSION_COOKIE_NAME}_1=${cookie}`)
            .send({ "company_id": 1, "payload": { "test": true } });
        expect(res.status).toBe(404);
    });

    it("Failed webhook handler execution", async () => {
        const res = await request
            .post(`/fp/webhook/test-wbhk-fail`)
            .set('cookie', `${SESSION_COOKIE_NAME}_1=${cookie}`)
            .send({ "company_id": 1, "payload": { "test": true } });
        expect(res.status).toBe(500);
        expect(res.body.success).toBeFalse();
    });

    it("Sync webhooks: Add new", async () => {
        const newMap = {
            'event-400': {
                path: '/test-wbhk-400',
                handler: function () { }
            }
        }
        const handlerFn = spyOn(newMap['event-400'], 'handler');
        const platformClient =await this.fdk_instance.getPlatformClient('1');
        await syncEvents(newMap, this.fdk_instance.extension, platformClient);
        const res = await request
            .post(`/fp/webhook/test-wbhk-400`)
            .set('cookie', `${SESSION_COOKIE_NAME}_1=${cookie}`)
            .send({ "company_id": 1, "payload": { "test": true } });
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