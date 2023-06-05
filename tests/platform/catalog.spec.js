const { PlatformConfig, PlatformClient } = require("../../index.js");
require("dotenv").config();
const setAccesstokenObj = require("../helpers/oauth.helper");
let platformClient;

beforeAll(async () => {
  try {
    let platformConfig = new PlatformConfig({
      companyId: 1,
      domain: "https://api.fyndx1.de",
      apiKey: process.env.API_KEY,
      apiSecret: process.env.API_SECRET,
    });
    const tokenResponse = await setAccesstokenObj(platformConfig);
    platformConfig.oauthClient.setToken(tokenResponse);
    platformClient = new PlatformClient(platformConfig);
    platformClient.setExtraHeaders({
      "x-platform-header": {
        pincode: "",
        country: "",
        city: "",
        location: { longitude: "", latitude: "" },
      },
    });
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

describe("Platform Common Test Cases", () => {
  it("search application by name", async () => {
    let locations = await platformClient.common.searchApplication({
      authorization: `Basic ${process.env.AUTH_HEADER}`,
      query: "shoplune.hostx1.de",
    });
    expect(locations && typeof locations === "object").toBe(true);
  });
});
