'use strict';

const MockAdapter = require('axios-mock-adapter');
const { FdkAxios } = require('fdk-client-javascript');
const webhook_event_configs = require('../fixtures/webhook_event_configs');
const webhook_subscriber = require('../fixtures/webhook_subscriber');

const mock = new MockAdapter(FdkAxios);
const CLUSTER_URL = "http://localdev.fyndx0.de";
const token_url = `${CLUSTER_URL}/service/panel/authentication/v1.0/company/1/oauth/token`;
const webhook_events_url = `${CLUSTER_URL}/service/platform/webhook/v1.0/company/1/events`;
const webhook_extension_subscriber_url = `${CLUSTER_URL}/service/platform/webhook/v1.0/company/1/extension/API_KEY/subscriber`;
const webhook_subscriber_url = `${CLUSTER_URL}/service/platform/webhook/v1.0/company/1/subscriber`;


mock.onPost(token_url).reply(200, {
    "access_token": "oa-f578996c66883edade7889ba4dc86a3f8dfc897a",
    "token_type": "Bearer",
    "expires_in": 7199,
    "scope": [
        "company/*",
        "app/*/*"
    ],
    "current_user": {
        "id": "d6da4dcc8fb0b8f20df44fa9"
    }
});

mock.onGet(webhook_events_url).reply(200, webhook_event_configs);
mock.onGet(webhook_extension_subscriber_url).reply(200, {items: [webhook_subscriber]});
mock.onPost(webhook_subscriber_url).reply(200, webhook_subscriber);
mock.onPut(webhook_subscriber_url).reply(200, webhook_subscriber);