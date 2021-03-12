const bodyParser = require('body-parser');
const express = require('express');
const cookieParser = require('cookie-parser');
const {
    setupFdk
} = require("../express");
const { MemoryStorage } = require("./../express/storage");
const extensionHandler = require("./extension.handler");

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

let FDKExtension = setupFdk({
    name: "Transformer",
    base_url: baseUrl,
    logo: {
        small: `${baseUrl}/icon.png`,
        large: `${baseUrl}/icon.png`
    },
    scopes: ["company/products"],
    callbacks: extensionHandler,
    contact_email: "xyz@gmail.com",
    developed_by_name: "Fynd",
    storage: new MemoryStorage()
});

app.use(FDKExtension.fdkHandler);
app.use('/_healthz', (req, res, next) => {
    res.json({
        "ok": "ok"
    });
});
app.listen(5070);