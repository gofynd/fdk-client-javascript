const { PublicConfig, PublicClient } = require("../../index.js");
require("dotenv").config();

beforeAll(() => {
  // setupCookieInterceptor();
  const config = new PublicConfig({
    domain: "https://api.fynd.com",
    userAgent: "chrome",
    language: "US/EN",
    currency: "rupees",
  });
  publicClient = new PublicClient(config);
});

afterAll(() => {
  publicClient = null;
});

describe("Get All Locations", () => {
  it("getProductDetailBySlug testing", async () => {
    let locations = await publicClient.configuration.getLocations({
      locationType: "country",
    });
    expect(locations.items.length).toBeGreaterThan(0);
  });
});
