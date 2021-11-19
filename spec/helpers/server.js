'use strict';
let supertest = require('supertest');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('../utils/logger');
const bodyParser = require('body-parser');

const app = express();
app.use(cookieParser("ext.session"));
app.use(bodyParser.json({ limit: '2mb' }));
const PORT = 5070;
const server = app.listen(PORT , async () => {
    logger.info("Server started at http://localhost:" + PORT);
});
server.restApp = app;
server.shutdown = function(cb) {
    if(server.close) { server.close(cb); }
}
let request = supertest(server);
request.app = server;

module.exports = request;
