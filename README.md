# fdk-extension-javascript
FDK Extension Helper Library


```
    const bodyParser = require('body-parser');
    const express = require('express');
    const cookieParser = require('cookie-parser');
    const urlJoin = require('url-join');

    const app = express();
    app.use(cookieParser());
    app.use(bodyParser.json({ limit: '2mb' }));


    let extensionHandler = {
        setup: async function(data) {
            console.log("called setup callback");
        },

        install: async function(data) {
            console.log("called install callback");
        },

        auth: async function(data) {
            console.log("called auth callback");
        },

        uninstall: async function(data) {
            console.log("called uninstall callback");
        }
    };

    let baseUrl = "https://test.extension.com";
    

    let FDKClient = setupFdk({
        name: "Transformer",
        base_url: baseUrl,
        logo : {
            small: urlJoin(baseUrl, "icon.png"),
            large: urlJoin(baseUrl, "icon.png")
        },
        scopes: ["company/products"],
        prefix_path: "/callback",
        callbacks: extensionHandler,
        contact_email: "xyz@gmail.com",
        developed_by_name: "Fynd",
        webhooks: []
    });
    app.use(FDKClient.fdkHandler);

    app.listen(8080);
```
