'use strict';
const { SESSION_COOKIE_NAME } = require('./../constants');
const SessionStorage = require("../session/session_storage");

function sessionMiddleware(strict) {
    return async (req, res, next) => {
        let sessionId = req.signedCookies[SESSION_COOKIE_NAME];
        req.fdkSession = SessionStorage.getSession(sessionId);

        if(strict && !req.session) {
            res.statusCode(401).json({ "message": "unauthorized" });
        }
    };
}

module.exports = {
    sessionMiddleware : sessionMiddleware
};