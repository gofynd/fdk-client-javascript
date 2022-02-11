'use strict';

const fdkHelper = require("../helpers/fdk");
const { clearData } = require("../helpers/setup_db");
const request = require("../helpers/server");
const { SESSION_COOKIE_NAME } = require("../../express/constants");
const hmacSHA256 = require("crypto-js/hmac-sha256");

function getSignature(body) {
    return hmacSHA256(JSON.stringify(body), 'API_SECRET')
}

describe("Webhook Integrations", () => {
    let webhookConfig = null;
    let cookie = "";
    beforeEach(async () => {
        webhookConfig = {
            api_path: '/v1/webhooks',
            notification_email: 'test@abc.com',
            event_map: {
                'company/product/create': {
                    version: '1',
                    handler: function () { }
                },
                'application/coupon/create': {
                    version: '1',
                    handler: function () { throw Error('test error') }
                }
            }
        }
        this.fdk_instance = await fdkHelper({
            access_mode: "offline",
            webhook_config: webhookConfig
        });
        request.app.restApp.use(this.fdk_instance.fdkHandler);
        request.app.restApp.post('/v1/webhooks', async (req, res, next)=>{
            let status = 404;
            try {
                await this.fdk_instance.webhookRegistry.processWebhook(req);
                status = 200;
            }
            catch(err) {
                console.log(err);
                status = 500;
            }
            return res.status(status).json({"success": status === 200});
        });
        
        let response = await request
            .get('/fp/install?company_id=1&install_event=true')
            .send();
        expect(response.status).toBe(302);
        cookie = response.headers['set-cookie'][0].split(",")[0].split("=")[1];
        const queryParams = response.headers['location'].split('?')[1];
        response = await request
            .get(`/fp/auth?company_id=1&install_event=true&${queryParams}`)
            .set('cookie', `${SESSION_COOKIE_NAME}_1=${cookie}`)
            .send();
        expect(response.status).toBe(302);
    });

    afterEach(async () => {
        await clearData();
    });

    it("Register webhooks", async () => {
        const reqBody = { "company_id": 1, "payload": { "test": true }, "event": {"name": "product", "type": "create", "category": "company"} };
        const res = await request
            .post(`/v1/webhooks`)
            .set('cookie', `${SESSION_COOKIE_NAME}_1=${cookie}`)
            .set('x-fp-signature', getSignature(reqBody))
            .send(reqBody);
        expect(res.status).toBe(200);
        expect(res.body.success).toBeTrue();
    });

    it("Invalid webhook path", async () => {
        const reqBody = { "company_id": 1, "payload": { "test": true }, "event": {"name": "coupon", "type": "update", "category": "application"} };
        const res = await request
            .post(`/v1/webhooks`)
            .set('cookie', `${SESSION_COOKIE_NAME}_1=${cookie}`)
            .set('x-fp-signature', getSignature(reqBody))
            .send(reqBody);
        expect(res.status).toBe(500);
    });

    it("Failed webhook handler execution", async () => {
        const reqBody = { "company_id": 1, "payload": { "test": true }, "event": {"name": "coupon", "type": "create", "category": "application"} };
        const res = await request
            .post(`/v1/webhooks`)
            .set('cookie', `${SESSION_COOKIE_NAME}_1=${cookie}`)
            .set('x-fp-signature', getSignature(reqBody))
            .send(reqBody);
        expect(res.status).toBe(500);
        expect(res.body.success).toBeFalse();
    });

    it("Sync webhooks: Add new", async () => {
        const reqBody = { "company_id": 1, "payload": { "test": true }, "event": {"name": "coupon", "type": "create", "category": "application"} };
        const newMap = {
            api_path: '/v1/webhooks',
            notification_email: 'test@abc.com',
            event_map: {
                'application/coupon/create': {
                    version: '1',
                    handler: function () { }
                }
            }
        }
        const handlerFn = spyOn(newMap.event_map['application/coupon/create'], 'handler');
        const platformClient = await this.fdk_instance.getPlatformClient('1');
        await this.fdk_instance.webhookRegistry.syncEvents(platformClient, newMap);
        const res = await request
            .post(`/v1/webhooks`)
            .set('cookie', `${SESSION_COOKIE_NAME}_1=${cookie}`)
            .set('x-fp-signature', getSignature(reqBody))
            .send(reqBody);
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