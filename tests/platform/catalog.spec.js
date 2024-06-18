const { PlatformConfig, PlatformClient } = require("../../index.js");
require("dotenv").config();
const { fdkAxios } = require("../../sdk/common/AxiosHelper.js");
const { convertStringToBase64 } = require("../../sdk/common/utils.js");
const MockAdapter = require("axios-mock-adapter");

const mock = new MockAdapter(fdkAxios);
let platformClient;

beforeAll(async () => {
  try {
    const domain = "https://api.fyndx1.de";
    const companyId = 1;
    const apiKey = "64dcc7db66634407f85c7c0e";
    const secret = "T_DJ3T_uR6Zl-O1";
    let platformConfig = new PlatformConfig({
      companyId: companyId,
      domain: domain,
      apiKey: apiKey,
      apiSecret: secret,
    });
    mock
      .onPost(
        `${domain}/service/panel/authentication/v1.0/company/${companyId}/oauth/token`
      )
      .reply(200, convertStringToBase64(`${apiKey}:${secret}`));
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
    mock
      .onGet(
        `${domain}/service/platform/lead/v1.0/company/${companyId}/general-config`
      )
      .reply(200, { success: "true" });
    mock
      .onGet(
        `${domain}/service/common/configuration/v1.0/application/search-application`
      )
      .reply(200, { success: "true" });
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
