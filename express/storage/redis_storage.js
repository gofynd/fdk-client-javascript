'use strict';

const BaseStorage = require("./base_storage");

class RedisStorage extends BaseStorage {
    constructor(client, prefixKey) {
        super(prefixKey);
        this.client = client;
    }

    async get(key) {
        return await this.client.get(this.prefixKey + key);
    }

    async set(key, value) {
        return await this.client.set(this.prefixKey + key, value);
    }

    async setex(key, value, ttl) {
        return await this.client.setex(this.prefixKey + key, ttl, value);
    }

    async del(key) {
        this.client.del(this.prefixKey + key);
    }

    async hget(key, hashKey) {
        return await this.client.hget(this.prefixKey + key, hashKey);
    }

    async hset(key, hashKey, value) {
        return await this.client.hset(this.prefixKey + key, hashKey, value);
    }

    async hgetall(key) {
        return await this.client.hgetall(this.prefixKey + key);
    }
}

module.exports = RedisStorage;