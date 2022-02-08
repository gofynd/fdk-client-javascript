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

### Sample Usage - ApplicationClient

```javascript
const config = new ApplicationConfig({
  applicationID: "YOUR_APPLICATION_ID",
  applicationToken: "YOUR_APPLICATION_TOKEN",
});

const applicationClient = new ApplicationClient(config);

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

### Logging

#### Why Logger support is added ?

Logger support is added to help developers to debug any piece of code.
fdk-client-javascript support 5 different levels of logging.

```
Ordered as mentioned.

1. TRACE
2. DEBUG
3. INFO
4. WARN
5. ERROR
```

#### Why log level is required ?

A log level is an input to the logger. By providing a log level the user will be able to retrieve all logs of that level and below.

```
Example:

For log level set to 'TRACE'.

log.trace('This is a TRACE level log.')

i.e This log level will include logs of 'TRACE' level and all levels below it. i.e 'DEBUG', 'INFO', 'WARN' & 'ERROR'.

For log level set to 'INFO'

log.info('This is a INFO level log.')

i.e This log level will include logs of 'INFO' level and all levels below it. i.e 'WARN' & 'ERROR'

```

To enable logging in fdk-client-javascript, below are the config changes that is to be added.
The configuration accepts `logLevel` as a parameter and internally sets the logging level which is provided in this.

```javascript
const { PlatformConfig, PlatformClient } = require("fdk-client-javascript");

let platformConfig = new PlatformConfig({
  companyId: "COMPANY_ID",
  apiKey: "API_KEY", 
  apiSecret: "API_SECRET", 
  domain: "DOMAIN",
  logLevel: 'ERROR' // Sets logging level to 'ERROR'
});
```

The above example is for `PlatformConfig`. Same goes for `ApplicationConfig` too.

Reference:
- [Logger](https://github.com/pimterry/loglevel)
