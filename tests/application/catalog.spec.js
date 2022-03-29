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
  });
  applicationClient = new ApplicationClient(config);
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
