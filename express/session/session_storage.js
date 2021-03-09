'use strict';

class SessionStorage {
    constructor() {
        this.sessions = {};
    }

    async storeSession(session) {
        this.sessions[session.id] = session;
    }

    async loadSession(session) {
        return this.sessions[session.id];
    }

    async deleteSession(session) {
        delete this.sessions[session.id];
        return true;
    }
    
}

module.exports = SessionStorage;