const { PlatformConfig, PlatformClient } = require("../../index.js");
require("dotenv").config();
let platformClient;

beforeAll(async () => {
  try {
    let platformConfig = new PlatformConfig({
      companyId: 1,
      domain: "https://api.fyndx1.de",
      apiKey: process.env.API_KEY,
      apiSecret: process.env.API_SECRET,
    });
    const token = await platformConfig.oauthClient.getAccesstokenObj({
      grant_type: "client_credentials",
    });
    platformConfig.oauthClient.setToken(token);
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
    const config = await platformClient.lead.getGeneralConfig();
    expect(config).not.toBe(null);
  });
});

describe("Platform Common Test Cases", () => {
  it("search application by name", async () => {
    let locations = await platformClient.common.searchApplication({
      authorization: `Basic ${process.env.AUTH_HEADER}`,
      query: "fynd.hostx1.de",
    });
    expect(locations && typeof locations === "object").toBe(true);
  });
});
