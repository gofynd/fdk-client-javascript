const { PlatformConfig, PlatformClient } = require("../../index.js");
require("dotenv").config();
const setAccesstokenObj = require("../helpers/oauth.helper");
let platformClient;

beforeAll(async () => {
  try {
    let platformConfig = new PlatformConfig({
      companyId: 1,
      domain: "https://api.fyndx0.de",
      apiKey: process.env.API_KEY,
      apiSecret: process.env.API_SECRET,
    });
    const tokenResponse = await setAccesstokenObj(platformConfig);
    platformConfig.oauthClient.setToken(tokenResponse);
    platformClient = new PlatformClient(platformConfig);
  } catch (err) {
    console.log(err);
  }
});

afterAll(() => {
  platformClient = null;
});

describe("Platform Lead Test Cases", () => {
  it("getTickets testing", async () => {
    const tickets = await platformClient.lead.getTickets();
    expect(typeof tickets.page.item_total).toBe("number");
  });
});
