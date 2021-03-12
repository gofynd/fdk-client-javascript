const bodyParser = require('body-parser');
const express = require('express');
const cookieParser = require('cookie-parser');
const urlJoin = require('url-join');
const {
    setupFdk
} = require("../express");
const MemorryStorage = require("./../express/storage/memory_storageOk");

const app = express();

app.use(cookieParser());
app.use(bodyParser.json({
    limit: '2mb'
}));

let extensionHandler = {
    setup: async function (data) {},

    install: async function (req, res, next) {
        res.json({"ok": "ok"});
        console.log("called install callback");
    },

    auth: async function (req, res, next) {
        res.json({"ok": "ok"});
        console.log("called auth callback");
    },

    uninstall: async function (req, res, next) {
        res.json({"ok": "ok"});
        console.log("called uninstall callback");
    }
};

let baseUrl = "https://19c689d2a7f3.ngrok.io";
console.log(baseUrl);

let FDKClient = setupFdk({
    name: "Transformer",
    base_url: baseUrl,
    logo: {
        small: urlJoin(baseUrl, "icon.png"),
        large: urlJoin(baseUrl, "icon.png")
    },
    scopes: ["company/products"],
    prefix_path: "/callback",
    callbacks: extensionHandler,
    contact_email: "xyz@gmail.com",
    developed_by_name: "Fynd",
    webhooks: [],
    storage: new MemorryStorage()
});
app.use(FDKClient.fdkHandler);
app.use('/_healthz', (req, res, next) => {
    res.json({
        "ok": "ok"
    });
});
app.listen(7070);