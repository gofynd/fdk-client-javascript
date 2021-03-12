'use strict';

const BaseStorage = require('./base_storage');
const MemoryStorage = require('./memory_storage');
const RedisStorage = require('./redis_storage');

module.exports = {
    BaseStorage,
    MemoryStorage,
    RedisStorage
};