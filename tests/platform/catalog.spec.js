const { ApplicationConfig, ApplicationClient } = require("../../index.js");

let applicationClient;

beforeAll(() => {
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

describe("Platform Catalog Test Cases", () => {
  it("getProductDetailBySlug testing", async () => {
    let productDetail = await applicationClient.catalog.getProductDetailBySlug({
      slug: "urbano-fashion-dark-blue-solid-tapered-jeans-1003160-e6cc10",
    });
    expect(productDetail.slug).toBe(
      "urbano-fashion-dark-blue-solid-tapered-jeans-1003160-e6cc10"
    );
  });
});
