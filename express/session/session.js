'use strict';
const sha256 = require('crypto-js/sha256');
const { v4 : uuidv4, v4} = require("uuid");

class Session {
    constructor(id, isNew = true) {
        this.id = id;
        this.company_id = null;
        this.state = null;
        this.scope = null;
        this.expires = null;
        this.expires_in = null;
        this.access_token_validity = null;
        this.access_mode = 'online';
        this.access_token = null;
        this.current_user = null;
        this.refresh_token = null;
        this.isNew = isNew;
        this.extension_id = null;
    }

    static cloneSession(id, session, isNew=true) {
        let newSession = new Session(id, isNew);
        Object.assign(newSession, session);
        return newSession;
    }

    toJSON() {
        return {
            company_id: this.company_id,
            state: this.state,
            scope: this.scope,
            expires: this.expires && this.expires.getTime(),
            access_mode: this.access_mode,
            access_token: this.access_token,
            current_user: this.current_user,
            refresh_token: this.refresh_token,
            expires_in: this.expires_in,
            extension_id: this.extension_id,
            access_token_validity: this.access_token_validity
        };
    }

    updateToken(rawToken) {
        this.access_mode = rawToken.access_mode,
        this.access_token = rawToken.access_token,
        this.current_user = rawToken.current_user,
        this.refresh_token = rawToken.refresh_token,
        this.expires_in = rawToken.expires_in,
        this.access_token_validity = rawToken.access_token_validity
    }

    static generateSessionId(isOnline, options) {
        if(isOnline) {
            return v4();
        } else {
            return sha256(`${options.cluster}:${options.companyId}`).toString();
        }
    }
}

module.exports = Session;