# FDK Javascript

![GitHub package.json version](https://img.shields.io/github/package-json/v/gofynd/fdk-client-javascript?style=plastic)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/gofynd/fdk-client-javascript/Node.js%20CI?style=plastic)
![GitHub](https://img.shields.io/github/license/gofynd/fdk-client-javascript?style=plastic)
[![Coverage Status](https://coveralls.io/repos/github/gofynd/fdk-client-javascript/badge.svg)](https://coveralls.io/github/gofynd/fdk-client-javascript)

FDK client for Javascript

## Getting Started

Get started with the Javascript Development SDK for Fynd Platform

### Usage

```
npm install fdk-client-javascript --save
```

Using this method, you can `require` fdk-client-javascript like so:

```js
const {
  ApplicationConfig,
  ApplicationClient,
} = require("fdk-client-javascript");
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

### TypeScript

fdk-client-javascript includes Typescript definitions.

```typescript
import { ApplicationConfig, ApplicationClient } from "fdk-client-javascript";
```

### Documentation

- [Application Front](documentation/application/README.md)
- [Platform Front](documentation/platform/README.md)
