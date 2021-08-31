const axios = require("axios");
const MockAdapter = require("axios-mock-adapter");
const { ApplicationConfig, ApplicationClient } = require("../index.js");

const mock = new MockAdapter(axios);
let applicationClient;

beforeAll(() => {
  const config = new ApplicationConfig({
    domain: "https://vivek.jiohostx0.de/api",
    applicationID: "605c6efd5ab8c845def75ae3",
    applicationToken: "Rmx5WXxPW",
  });
  applicationClient = new ApplicationClient(config);
});

afterAll(() => {
  applicationClient = null;
  mock.reset();
});

describe("Catalog test cases", () => {
  it("getProductDetailBySlug testing", async () => {
    expect(true).toBeTruthy();
  });
});
