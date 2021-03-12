'use strict';
const sha256 = require('crypto-js/sha256');
const { v4 : uuidv4, v4} = require("uuid");

class Session {
    constructor(id, isNew = true) {
        this.id = id;
        this.cluster = null;
        this.company_id = null;
        this.state = null;
        this.scope = null;
        this.expires = null;
        this.access_mode = 'online';
        this.access_token = null;
        this.current_user = null;
        this.refresh_token = null;
        this.isNew = isNew;
    }

    static cloneSession(id, session, isNew=true) {
        let newSession = new Session(id, isNew);
        Object.assign(newSession, session);
    }

    toJSON() {
        return {
            company_id: this.company_id,
            state: this.state,
            scope: this.scope,
            expires: this.expires.getTime(),
            access_mode: this.access_mode,
            access_token: this.access_token,
            current_user: this.current_user,
            refresh_token: this.refresh_token,
            cluster: this.cluster
        };
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