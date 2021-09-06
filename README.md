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

> Here FdkClient access_mode should be **offline**. Cause such client can only access PlatformClient in background task.  

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
