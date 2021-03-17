'use strict';

class BaseStorage {
    constructor(prefixKey) {
        if(prefixKey) {
            this.prefixKey = prefixKey + ":";
        } else {
            this.prefixKey = "";
        }
    }

    async get(key) {
        throw Error("Method not implemented");
    }

    async set(key, value) {
        throw Error("Method not implemented");
    }

    async del(key) {
        throw Error("Method not implemented");
    }

    async setex(key, value, ttl) {
        throw Error("Method not implemented");
    }

    async hget(key, hashKey) {
        throw Error("Method not implemented");
    }

    async hset(key, hashKey, value) {
        throw Error("Method not implemented");
    }

    async hgetall(key) {
        throw Error("Method not implemented");
    }
}

module.exports = BaseStorage;
