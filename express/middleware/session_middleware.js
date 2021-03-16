'use strict';
const { SESSION_COOKIE_NAME } = require('./../constants');
const SessionStorage = require("../session/session_storage");

function sessionMiddleware(strict) {
    return async (req, res, next) => {
        try {
            let sessionId = req.signedCookies[SESSION_COOKIE_NAME];
            req.fdkSession = await SessionStorage.getSession(sessionId);
    
            if(strict && !req.fdkSession) {
                return res.status(401).json({ "message": "unauthorized" });
            }
            next();
        } catch (error) {
            next(error);
        }
    };
}

module.exports = {
    sessionMiddleware : sessionMiddleware
};