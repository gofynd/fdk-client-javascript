const { ApplicationConfig, ApplicationClient } = require("../../index.js");
const setupCookieInterceptor = require("../helpers/cookie.helper");
require("dotenv").config();
let applicationClient;

beforeAll(() => {
  setupCookieInterceptor();
  const config = new ApplicationConfig({
    domain: "https://api.fynd.com",
    applicationID: "000000000000000000000001",
    applicationToken: "9502d710-5a22-11e9-a001-57d85417c280",
    locationDetails: {
      pincode: "385001",
      country: "India",
      city: "Ahmedabad",
      location: { longitude: "72.585022", latitude: "23.033863" },
    },
  });
  applicationClient = new ApplicationClient(config);
  applicationClient.setLocationDetails({
    pincode: "385002",
    country: "India",
    city: "Ahmedabad",
    location: { longitude: "72.585022", latitude: "23.033863" },
  });
});

afterAll(() => {
  applicationClient = null;
});

describe("Application Catalog Test Cases", () => {
  it("getProducts testing", async () => {
    let products = await applicationClient.catalog.getProducts();
    expect(products.items.length).toBeGreaterThan(0);
  });
});
