'use strict';

const BaseStorage = require("./base_storage");

class MemoryStorage extends BaseStorage {
    constructor() {
        super();
        this.__data = {};
    }

    async get(key) {
        this.__data[key];
    }

    async set(key, value) {
        this.__data[key] = value;
    }

    async setex(key, value, ttl) {
        //TODO: add support for ttl
        this.__data[key] = value;
    }

    async hget(key, hashKey) {
        let hashMap = this.__data[key];
        if(hashMap) {
            return hashMap[hashKey];
        }
        return null;
    }

    async hset(key, hashKey, value) {
        let hashMap = this.__data[key] || {};
        hashMap[hashKey] = value;
        this.__data[key] = hashMap;
    }

    async hgetall(key) {
        return this.__data[key];
    }
}

module.exports = MemoryStorage;