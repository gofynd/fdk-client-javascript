'use strict';


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
    }
}

module.exports = Session;