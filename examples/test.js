const bodyParser = require('body-parser');
const express = require('express');
const cookieParser = require('cookie-parser');
const {
    setupFdk
} = require("../express");
const { RedisStorage } = require("./../express/storage");
const extensionHandler = require("./extension.handler");
const Redis = require("ioredis");

const fs = require('fs');
const path = require('path');

const app = express();
app.use(cookieParser("ext.session"));
app.use(bodyParser.json({
    limit: '2mb'
}));    

let data = fs.readFileSync(path.join(__dirname + "/.ngrock"));
let baseUrl = data.toString() || "http://localhost:7070";
console.log(baseUrl);

const redis = new Redis();

let fdkExtension = setupFdk({
    api_key: "60b85632a11966719e7d9aed",
    api_secret: "aE7lauU_LxM1tJD",
    base_url: baseUrl,
    scopes: ["company/product"],
    callbacks: extensionHandler,
    storage: new RedisStorage(redis),
    access_mode: "offline",
    cluster: "https://api.fyndx0.de" // this is optional by default it points to prod.
});

app.use(fdkExtension.fdkHandler);
app.use('/_healthz', (req, res, next) => {
    res.json({
        "ok": "ok"
    });
});

fdkExtension.apiRoutes.get("/test/routes", async (req, res, next) => {
    try {
        let data = await req.platformClient.lead.getTickets();
        res.json(data);
    } catch (error) {
        console.error(error);
        next(error);
    }
   
});

fdkExtension.applicationProxyRoutes.get("/1234", async (req, res, next) => {
    try {
        let data = await req.platformClient.lead.getTickets();
        res.json(data);
    } catch (error) {
        console.error(error);
        next(error);
    }
   
});

// sample webhook endpoint
const webhookRouter = express.Router({  mergeParams: true });
webhookRouter.get("/webhook", async (req, res, next) => {
    try {
            // fetch company id from query params
        let companyId = req.query.companyId;
        let cluster = "https://api.fyndx0.de"; // either take it from some  env variables like "https://api.fyndx0.de"
        let  client = await fdkExtension.getPlatformClient(companyId);
        res.json({"success": true});
    } catch (err) {
        console.error(err);
        res.status(404).json({"success": false});
    }
});

app.use(webhookRouter);
app.use(fdkExtension.applicationProxyRoutes);
app.use(fdkExtension.apiRoutes);

app.use("*", async (req, res, next) => {
    res.json({"success": true});
});

app.use(function onError(err, req, res, next) {
    err = err || {};

    let statusCode = 500;
    if (err.name === 'ValidationError') {
        statusCode = 400;
    }
    if (err.name === 'CastError') {
        statusCode = 400;
    }
    if (err.statusCode) {
        statusCode = err.statusCode;
    }

    let resData = {
        message: err.errors || err.message || err,
        code: err.code,
        sentry: res.sentry
    };

    resData.stack = err.stack;
    console.log(resData);
    res.status(statusCode).json(resData);
});

app.listen(5070);