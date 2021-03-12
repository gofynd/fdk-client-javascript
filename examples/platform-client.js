const {
  PlatformConfig,
  PlatformClient,
} = require("../../../../output/javascript/code/index");

let platformConfig = new PlatformConfig({
  companyId: 1,
  domain: "api.fyndx0.de",
});

async function getData() {
  try {
    // get token and set token
platformConfig.oauthClient.setToken("ACCESS_TOKEN");
    const client = new PlatformClient(platformConfig);

    // API's without application_id
    const tickets = await client.lead.getTickets();
    console.log("tickets", tickets);

    // API's with application_id
    const themes = await client
      .application("5fa24ca5756695531fa1eefb")
      .user.getCustomers();
    console.log("themes", themes);
  } catch (err) {
    console.log(err);
  }
}

getData();
