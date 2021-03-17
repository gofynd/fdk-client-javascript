'use strict';

const BaseStorage = require("./base_storage");

class MemoryStorage extends BaseStorage {
    constructor(prefixKey) {
        super(prefixKey);
        this.__data = {};
    }

    async get(key) {
        return this.__data[this.prefixKey + key];
    }

    async set(key, value) {
        this.__data[this.prefixKey + key] = value;
    }

    async setex(key, value, ttl) {
        //TODO: add support for ttl
        this.__data[this.prefixKey + key] = value;
    }

    async del(key) {
        delete this.__data[this.prefixKey + key];
    }

    async hget(key, hashKey) {
        let hashMap = this.__data[this.prefixKey + key];
        if(hashMap) {
            return hashMap[hashKey];
        }
        return null;
    }

    async hset(key, hashKey, value) {
        let hashMap = this.__data[this.prefixKey + key] || {};
        hashMap[hashKey] = value;
        this.__data[this.prefixKey + key] = hashMap;
    }

    async hgetall(key) {
        return this.__data[this.prefixKey + key];
    }
}

module.exports = MemoryStorage;