# fdk-extension-javascript
FDK Extension Helper Library


```javascript
    const bodyParser = require('body-parser');
    const express = require('express');
    const cookieParser = require('cookie-parser');
    const { setupFdk } = require("fdk-extension-javascript/express");
    const { RedisStorage } = require("fdk-extension-javascript/express/storage");
    const Redis = require("ioredis");

    const app = express();
    app.use(cookieParser("ext.session"));
    app.use(bodyParser.json({ limit: '2mb' }));
    
    const redis = new Redis();

    let extensionHandler = {
        auth: async function(data) {
            console.log("called auth callback");
        },

        uninstall: async function(data) {
            console.log("called uninstall callback");
        }
    };

    let baseUrl = "https://test.extension.com";
    

    let fdkClient = setupFdk({
        api_key: "<API_KEY>",
        api_secret: "<API_SECRET>",
        base_url: baseUrl,
        scopes: ["company/products"],
        callbacks: extensionHandler,
        storage: new RedisStorage(redis),
        access_mode: "offline",
        cluster: "https://api.fyndx0.de" // this is optional by default it points to prod.
    });
    app.use(fdkClient.fdkHandler);

    app.listen(8080);
```
