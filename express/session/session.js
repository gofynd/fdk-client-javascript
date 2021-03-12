'use strict';
const sha256 = require('crypto-js/sha256');
const { v4 : uuidv4, v4} = require("uuid");

class Session {
    constructor(id) {
        this.id = id;
        this.company = null;
        this.state = null;
        this.scope = null;
        this.expires = null;
        this.access_mode = 'online';
        this.accessToken = null;
        this.userInfo = null;
        this.refreshToken = null;
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