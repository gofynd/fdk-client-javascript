'use strict';
// require('../init');
// global mock import should be always first to work mocking.
// const globalMock = require("./mocks/global.mock");

const logger = require("./utils/logger");

const db = require("./helpers/setup_db");
const server = require("./helpers/server");

beforeAll(async () => {
    logger.info("beforeAll:started");
    //jasmine.addMatchers(jsonSchemaMatcher);
    console.log(db.redisConnection.status);
    if (db.redisConnection.status !== "connecting" && db.redisConnection.status !== "connected") {
        await db.connect();
    }
    logger.info("beforeAll:completed");
    // done();
}, 50000);

afterAll(async () => {
    logger.info("afterAll:started");
    // globalMock.restore();
    await db.clearData();
    server.app.close();
    await db.disconnect();
    logger.info("afterAll:completed");
    // done();
}, 20000);