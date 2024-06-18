const { PublicConfig, PublicClient } = require("../../index.js");
require("dotenv").config();
const { fdkAxios } = require("../../sdk/common/AxiosHelper.js");
const MockAdapter = require("axios-mock-adapter");

const mock = new MockAdapter(fdkAxios);

beforeAll(() => {
  // setupCookieInterceptor();
  const config = new PublicConfig({
    domain: "https://api.fynd.com",
    userAgent: "chrome",
    language: "US/EN",
    currency: "rupees",
  });
  publicClient = new PublicClient(config);
  publicClient.setExtraHeaders({
    "x-public-header": { pincode: "", country: "" },
  });
  mock
    .onGet(publicClient.configuration._urls.getLocations)
    .reply(200, { items: ["Location 1"] });
  mock
    .onGet(publicClient.configuration._urls.searchApplication)
    .reply(200, { success: "true" });
});

afterAll(() => {
  publicClient = null;
});

describe("Get All Locations", () => {
  it("get locations by type country", async () => {
    let locations = await publicClient.configuration.getLocations({
      locationType: "country",
    });
    expect(locations.items.length).toBeGreaterThan(0);
  });
});

describe("Search Application", () => {
  it("search application by name", async () => {
    let locations = await publicClient.configuration.searchApplication({
      authorization: `Basic ${process.env.AUTH_HEADER}`,
      query: "pc.fyndstore.co",
    });
    expect(locations && typeof locations === "object").toBe(true);
  });
});
