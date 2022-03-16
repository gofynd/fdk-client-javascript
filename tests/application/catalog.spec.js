const {
  ApplicationConfig,
  ApplicationClient,
} = require("../../index.js");
const setupCookieInterceptor = require("../helpers/cookie.helper");
require('dotenv').config();
let applicationClient;

beforeAll(() => {
  setupCookieInterceptor();
  const config = new ApplicationConfig({
    domain: "https://api.fynd.com",
    applicationID: "000000000000000000000001",
    applicationToken: "9502d710-5a22-11e9-a001-57d85417c280",
  });
  applicationClient = new ApplicationClient(config);
})

afterAll(() => {
  applicationClient = null;
})

describe("Application Catalog Test Cases", () => {
  it("getProductDetailBySlug testing", async () => {
    let productDetail = await applicationClient.catalog.getProductDetailBySlug({ slug: "walrus-black-wallet-436997-db85b6" });
    expect(productDetail.slug).toBe("walrus-black-wallet-436997-db85b6");
  })
})
