const {
  PlatformConfig,
  PlatformClient,
} = require("../../../../output/javascript/code/index");

const express = require("express");

const app = express();

let platformConfigExt = new PlatformConfig({
  apiKey: "603dac5406fd2a5282db7c76",
  apiSecret: "mKPAFF6fzUHryy.",
  company: 1,
  baseUrl: "api.fyndx0.de",
});

const options = {
  scope: ["read", "write"],
  redirectUri: "localhost:3000/callback",
  isOnline: true,
};

const redirectURL = platformConfigExt.oauthClient.startAuthorization(options);

app.get("/", (req, res) => {
  res.redirect(
    `${redirectURL}`
  );
});

app.get('/oauth-callback', async(req, res) => {
 const query = req.query;
 await platformConfigExt.oauthClient.verifyCallback(query)
})

app.listen(3000);
console.log("App listening on port 3000");

const platformClient = new PlatformClient(platformConfigExt);

platformClient.lead.getTickets();

// let rs = new RestClient(platformConfig);
// rs.get("<some url>");
