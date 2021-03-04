const { ApplicationConfig, ApplicationClient } = require("../../../../output/javascript/code/index");

const config = new ApplicationConfig({
  applicationID: "5fa24ca5756695531fa1eefb",
  applicationToken: "4twvAQZB3"
});

const applicationClient = new ApplicationClient(config);

async function getProducts() {
  try {
    const products = await applicationClient.catalog.getProducts();
    console.log(products);
  } catch (err) {
      console.log(err);
  }
}

getProducts();