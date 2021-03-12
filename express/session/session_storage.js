'use strict';
const Session = require("./session");
const { extension } = require("./../extension");

class SessionStorage {
    constructor() {
    }

    static async saveSession(session) {
        let ttl = (new Date() - session.expires) / 1000;
        ttl = Math.min(ttl, 0);
        return extension.storage.setex(session.id, JSON.stringify(session.toJSON()), ttl);
    }

    static async getSession(sessionId) {
        let session = extension.storage.get(sessionId);
        if(session) {
            session = Session.cloneSession(sessionId, session, false);
        }
        return session;
    }

    static async deleteSession(sessionId) {
        return extension.storage.del(sessionId);
    }
}

module.exports = SessionStorage;