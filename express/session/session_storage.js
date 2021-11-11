'use strict';
const Session = require("./session");
const { extension } = require("./../extension");
const logger = require("../logger");

class SessionStorage {
    constructor() {
    }

    static async saveSession(session) {
        if(session.expires) {
            let ttl = (new Date() - session.expires) / 1000;
            ttl = Math.abs(Math.round(Math.min(ttl, 0)));
            return extension.storage.setex(session.id, JSON.stringify(session.toJSON()), ttl);
        } else {
            return extension.storage.set(session.id, JSON.stringify(session.toJSON()));
        }
    }

    static async getSession(sessionId) {
        let session = await extension.storage.get(sessionId);
        if(session) {
            session = JSON.parse(session);
            session = Session.cloneSession(sessionId, session, false);
        }
        else {
            logger.debug(`Session data not found for session id ${sessionId}`);
        }
        return session;
    }

    static async deleteSession(sessionId) {
        return extension.storage.del(sessionId);
    }
}

module.exports = SessionStorage;