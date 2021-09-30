# fdk-extension-javascript

FDK Extension Helper Library

#### Initial Setup

```javascript
const bodyParser = require("body-parser");
const express = require("express");
const cookieParser = require("cookie-parser");
const { setupFdk } = require("fdk-extension-javascript/express");
const { RedisStorage } = require("fdk-extension-javascript/express/storage");
const Redis = require("ioredis");

const app = express();
app.use(cookieParser("ext.session"));
app.use(bodyParser.json({ limit: "2mb" }));

const redis = new Redis();

let extensionHandler = {
  auth: async function (data) {
    console.log("called auth callback");
  },

  uninstall: async function (data) {
    console.log("called uninstall callback");
  },
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
  cluster: "https://api.fyndx0.de", // this is optional by default it points to prod.
});
app.use(fdkClient.fdkHandler);

app.listen(8080);
```

#### How to call platform apis?

To call platform api you need to have instance of `PlatformClient`. Instance holds methods for SDK classes. All routes registered under `apiRoutes` express router will have `platformClient` under request object which is instance of `PlatformClient`.

> Here `apiRoutes` has middleware attached which allows passing such request which are called after launching extension under any company.

```javascript
fdkClient.apiRoutes.get("/test/routes", async (req, res, next) => {
  try {
    let data = await req.platformClient.lead.getTickets();
    res.json(data);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

app.use(fdkClient.apiRoutes);
```

#### How to call platform apis in background tasks?

Background tasks running under some consumer or webhook or under any queue can get platform client via method `getPlatformClient`. It will return instance of `PlatformClient` as well. 

> Here FdkClient `access_mode` should be **offline**. Cause such client can only access PlatformClient in background task.  

```javascript
function backgroundHandler(companyId) {
  try {
    const platformClient = await fdkExtension.getPlatformClient(companyId);
    let data = await platformClient.lead.getTickets();
    // Some business logic here
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(404).json({ success: false });
  }
}
```

#### How to register for webhook events?

Webhook events can be helpful to handle tasks when certan events occur on platform. You can subscribe to such events by passing `webhook_config` in setupFdk function.
 
```javascript

let fdkClient = setupFdk({
  api_key: "<API_KEY>",
  api_secret: "<API_SECRET>",
  base_url: baseUrl,
  scopes: ["company/products"],
  callbacks: extensionHandler,
  storage: new RedisStorage(redis),
  access_mode: "offline",
  cluster: "https://api.fyndx0.de",
  webhook_config: {
    api_path: "/api/v1/webhooks", // required
    notification_email: "test@abc.com", // required
    saleschannel_events_sync: 'manual', //optional
    event_map: { // required
      'extension/install': {
        handler: handleExtInstall
      },
      'extension/uninstall': {
        handler: handleExtUninstall
      },
      'coupon/create': {
        handler: handleCouponCreate
      }
    }
  }
});

```

There should be view on given api path to receive webhook call. It should be `POST` api path. Api view should call `processWebhook` method of `webhookRegistry` object available under `fdkClient` here.

> Here `processWebhook` will do payload validation with signature and calls individual handlers for event passed with webhook config. 

```javascript

app.post('/api/v1/webhooks', async (req, res, next) {
  try {
    await fdkClient.webhookRegistry.processWebhook(req);
    return res.status(200).json({"success": true});
  }
  catch(err) {
    logger.error(err);
    return res.status(500).json({"success": false});
  }
});

```

> Setting `saleschannel_events_sync` as "manual" means, you will have to manually enable saleschannel level event for individual saleschannel. Default value here is "automatic" and event will be subscribed for all sales channels. For enabling events manually use function `enableSalesChannelWebhook`. To disable receiving events for a saleschannel use function `disableSalesChannelWebhook`. 

