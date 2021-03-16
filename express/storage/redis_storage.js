'use strict';

const BaseStorage = require("./base_storage");

class RedisStorage extends BaseStorage {
    constructor(client) {
        super();
        this.client = client;
    }

    async get(key) {
        return await this.client.get(key);
    }

    async set(key, value) {
        return await this.client.set(key, value);
    }

    async setex(key, value, ttl) {
        return await this.client.setex(key, ttl, value);
    }

    async del(key) {
        delete this.client.del(key);
    }

    async hget(key, hashKey) {
        return await this.client.hget(key, hashKey);
    }

    async hset(key, hashKey, value) {
        return await this.client.hset(key, hashKey, value);
    }

    async hgetall(key) {
        return await this.client.hgetall(key);
    }
}

module.exports = RedisStorage;