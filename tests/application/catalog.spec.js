const { ApplicationConfig, ApplicationClient } = require("../../index.js");
require("dotenv").config();
const { fdkAxios } = require("../../sdk/common/AxiosHelper.js");
const MockAdapter = require("axios-mock-adapter");

// Create a new instance of the mock adapter
let applicationClient;
const mock = new MockAdapter(fdkAxios);

beforeAll(() => {
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
  mock
    .onGet(applicationClient.catalog._urls.getProducts)
    .reply(200, { items: ["Test Product 1"] });
  mock
    .onGet(applicationClient.common._urls.searchApplication)
    .reply(200, { success: true });
  mock.onGet(applicationClient.content._urls.getNavigations).reply(200, {});
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

describe("Application Common Test Cases ", () => {
  it("search application by name", async () => {
    let locations = await applicationClient.common.searchApplication({
      authorization: `Basic ${process.env.AUTH_HEADER}`,
      query: "pc.fyndstore.co",
    });
    expect(locations && typeof locations === "object").toBe(true);
  });
});

describe("Application Content Test Cases ", () => {
  it("getNavigations test", async () => {
    let res = await applicationClient.content.getNavigations();
    expect(res).not.toBeNull();
  });
});
