# FDK Javascript

![GitHub package.json version](https://img.shields.io/github/package-json/v/gofynd/fdk-client-javascript?style=plastic)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/gofynd/fdk-client-javascript/Node.js%20CI?style=plastic)
![GitHub](https://img.shields.io/github/license/gofynd/fdk-client-javascript?style=plastic)
[![Coverage Status](https://coveralls.io/repos/github/gofynd/fdk-client-javascript/badge.svg)](https://coveralls.io/github/gofynd/fdk-client-javascript)

FDK client for Javascript

## Getting Started

Get started with the Javascript Development SDK for Fynd Platform

### Usage

#### Node

```bash
npm install @gofynd/fdk-client-javascript
```

Using this method, you can `require` fdk-client-javascript like so:

```js
const {
  ApplicationConfig,
  ApplicationClient,
} = require("fdk-client-javascript");
```

#### Browser

you can load fdk-client-javascript's application browser bundle from CDN; `ApplicationConfig`, `ApplicationClient` and `ApplicationModels` will be attached to browser's `window` object.

```html
<script src="https://cdn.jsdelivr.net/gh/gofynd/fdk-client-javascript@<version>/dist/application.js"></script>
```

Install Specific version

```html
<script src="https://cdn.jsdelivr.net/gh/gofynd/fdk-client-javascript@1.1.0/dist/application.js"></script>
```

```js
const { ApplicationConfig, ApplicationClient } = window;
```

### Logging

For logging support user can pass `logLevel` in `ApplicationConfig` or `PlatformConfig` while declaration.

```
Available logging levels: TRACE, DEBUG, INFO, WARN, ERROR.

Default log level: ERROR
```

### Sample Usage - ApplicationClient

```javascript
const config = new ApplicationConfig({
  applicationID: "YOUR_APPLICATION_ID",
  applicationToken: "YOUR_APPLICATION_TOKEN",
  locationDetails: "LOCATION_DETAILS_OBJECT"
});

const applicationClient = new ApplicationClient(config);

applicationClient.setLocationDetails({ 
  pincode:"385001",
  country: "India",
  city:  "Ahmedabad",
  location: {longitude: "72.585022", latitude: "23.033863"}
  });


async function getProductDetails() {
  try {
    const product = await applicationClient.catalog.getProductDetailBySlug({
        slug: "product-slug"
      });
    console.log(product.name);
  } catch (err) {
    console.log(err);
  }
}

getProductDetails();
```

### Sample Usage - PlatformClient

```javascript
const { PlatformConfig, PlatformClient } = require("fdk-client-javascript");

let platformConfig = new PlatformConfig({
  companyId: "COMPANY_ID",
  apiKey: "API_KEY", 
  apiSecret: "API_SECRET", 
  domain: "DOMAIN",
  useAutoRenewTimer: true // Setting `true` will use timer based logic to refresh the access token. With `false` will issue refresh token just before any api call when it is expired. 
});

async function getData() {
  try {
    // TODO: get token using OAuth
    platformConfig.oauthClient.setToken(token.access_token);
    const client = new PlatformClient(platformConfig);

    // API's without application_id
    const tickets = await client.lead.getTickets();
    console.log("tickets", tickets);

    // API's with application_id
    const customers = await client
      .application("APPLICATION_ID")
      .user.getCustomers();
    console.log("customers", customers);
  } catch (err) {
    console.log(err);
  }
}

getData();
```

---

### Cookie

Following code snippet will read and write cookies on behalf of you <br />
Cookies will get appended in subsequent requests.

```javascript
const { FdkAxios } = require('@gofynd/fdk-client-javascript');
const { wrapper } =  require("axios-cookiejar-support");
const { CookieJar } = require("tough-cookie");


wrapper(FdkAxios);
const cookieJar = new CookieJar();
FdkAxios.defaults.jar = cookieJar;


module.exports = cookieJar
```

get the stored cookie from the CookieJar instance

```javascript
const cookieJar = require('path/to/cookieJar') // replace with actual path

let cookies = await cookieJar.getCookies("https://api.fynd.com");
```

---

### Headers

#### Adding Request Headers

To include request headers when calling a method, add `requestHeaders` object in the first argument.

```javascript
const requestHeaders = {
  "x-api-version": "1.0"
}

const options = {
  responseHeaders: true
}

const [response, headers] = await platformClient.application("<APPLICATION_ID>").theme.getAllPages({theme_id: "<THEME_ID>", requestHeaders: requestHeaders}, options);
```

#### get Response Headers

To retrieve the response headers, simply set the `responseHeaders` option to `true` when calling the desired method. Below is an example demonstrating how to achieve this:

```javascript
const options = {
  responseHeaders: true
}
const [response, headers] = await platformClient.application("<APPLICATION_ID>").theme.getAllPages({theme_id: "<THEME_ID>"}, options);

console.log("[API RESPONSE]: ", response);
console.log("[RESPONSE HEADERS]: ", headers);
```

---

### Log Curl

To print the curl command in the console for all network calls made using `applicationClient` or `platformClient`, set the logger level to debug.

```javascript
const {
  ApplicationClient, ApplicationConfig,
} = require("fdk-client-javascript");

let applicationConfig = new ApplicationConfig({
  applicationID: "YOUR_APPLICATION_ID",
  applicationToken: "YOUR_APPLICATION_TOKEN",
});

applicationConfig.setLogLevel("debug");
let applicationClient = new ApplicationClient(applicationConfig);

let response = await applicationClient.theme.getAppliedTheme(); 
console.log("Active Theme: ", response.information.name);
```

The above code will log the curl command in the console

```bash
curl --request GET "https://api.fynd.com/service/application/theme/v1.0/applied-theme" --header 'authorization: Bearer <authorization-token>' --header 'x-fp-sdk-version: 1.3.9' --header 'x-fp-date: 20230222T115108Z' --header 'x-fp-signature: v1.1:1e3ab3b02b5bc626e3c32a37ee844266ade02bbcbaafc28fc7a0e46a76a7a1a8'
Active Theme: Emerge
```

---

### TypeScript

fdk-client-javascript includes Typescript definitions.

```typescript
import { ApplicationConfig, ApplicationClient } from "fdk-client-javascript";
```

---

### Documentation

- [Application Front](documentation/application/README.md)
- [Partner Front](documentation/partner/README.md)
- [Platform Front](documentation/platform/README.md)
- [Public Front](documentation/public/README.md)

