# FDK Javascript

FDK client for Javascript

## Getting Started

Get started with the Javascript Development SDK for Fynd Platform

### Usage

```
npm install fdkjavascriptclient --save
```

Using this method, you can `require` fdkjavascriptclient like so:

```js
const {
  ApplicationConfig,
  ApplicationClient,
} = require("fdkjavascriptclient");
```

### Sample Usage:

```javascript

const config = new ApplicationConfig({
  applicationID: "APPLICATION_ID",
  applicationToken: "APPLICATION_TOKEN",
  domain: "DOMAIN_FYND_PLATFORM",
});

const applicationClient = new ApplicationClient(config);

async function getTheme() {
  try {
    const res = await applicationClient.theme.getThemeForPreview(
      "5fa24cdd29e03d7c24fc35cf"
    );
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}

getTheme();
```

### Documentation

- [Application Front](documentation/APPLICATION.md)
- [Platform](documentation/PLATFORM.md)
- [Code Examples](documentation/EXAMPLES.md)
