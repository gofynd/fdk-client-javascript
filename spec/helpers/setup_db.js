const Redis = require('ioredis');
const redisConnection = new Redis("localhost");

async function clearData() {
    const keys = await redisConnection.keys("test_fdk*");
    const promises = [];
    for(let key of keys) {
        promises.push(redisConnection.del(key));
    }
    await Promise.all(promises);
}

function connect() {
    return redisConnection.connect();
}

function disconnect() {
    return redisConnection.disconnect();
}

module.exports = {
    redisConnection,
    connect,
    disconnect,
    clearData
};