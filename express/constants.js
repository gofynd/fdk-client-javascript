'use strict';

exports.SESSION_COOKIE_NAME = "ext_session";
exports.TEST_WEBHOOK_EVENT_NAME = "ping"
exports.ASSOCIATION_CRITERIA = {
    ALL: "ALL",
    SPECIFIC: "SPECIFIC-EVENTS", // to be set when saleschannel specific events are subscribed and sales channel present
    EMPTY: "EMPTY" // to be set when saleschannel specific events are subscribed but not sales channel present
}
exports.TIMEOUT_STATUS = 504;
exports.SERVICE_UNAVAILABLE = 503;
exports.BAD_GATEWAY = 502;