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

let FDKExtension = setupFdk({
    api_key: "000001",
    api_secret: "tetsjskdjalsjdl",
    base_url: baseUrl,
    scopes: ["company/products"],
    callbacks: extensionHandler,
    storage: new RedisStorage(redis),
    access_mode: "offline",
    cluster: "https://api.fyndx0.de" // this is optional by default it points to prod.
});

app.use(FDKExtension.fdkHandler);
app.use('/_healthz', (req, res, next) => {
    res.json({
        "ok": "ok"
    });
});

FDKExtension.apiRoutes.get("/test/routes", async (req, res, next) => {
    try {
        let data = await req.platformClient.lead.getTickets();
        res.json(data);
    } catch (error) {
        console.error(error);
        next(error);
    }
   
});

FDKExtension.applicationProxyRoutes.get("/1234", async (req, res, next) => {
    try {
        let data = await req.platformClient.lead.getTickets();
        res.json(data);
    } catch (error) {
        console.error(error);
        next(error);
    }
   
});

app.use(FDKExtension.applicationProxyRoutes);
app.use(FDKExtension.apiRoutes);

// FDKExtension.apiRoutes.post("/:application_id", async (req, res, next) => {
//     try {
//         const { application_id } = req.params;
//         const { platformClient } = req;
//         const platformApiUrl = `https://api.fyndx0.de/service/platform/partners/v1.0/company/${req.fdkSession.company_id}/application/${application_id}/proxy/${platformClient.config.apiKey}`;
//         response = await APIClient.execute(platformClient.config, 'post', platformApiUrl, {}, {
//             attached_path: "chatbot-test",
//             proxy_url: `https://chatbots.extensions.fyndx0.de/proxy/application`
//         });
//         return res.json(response);
//     }
//     catch(err) {
//         next(err);
//     }
// });


// sample webhook endpoint
const webhookRouter = express.Router({  mergeParams: true });
webhookRouter.get("/webhook", async (req, res, next) => {
    // fetch company id from query params
    let companyId = req.query.companyId;
    let cluster = "https://api.fyndx0.de"; // either take it from some  env variables like "https://api.fyndx0.de"
    let  client = await FDKExtension.getPlatformClient(cluster, companyId);
    res.json({"success": true});
});

app.use(webhookRouter);

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