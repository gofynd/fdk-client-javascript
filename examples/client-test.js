const {
  ApplicationConfig,
  ApplicationClient,
} = require("../../../../output/javascript/code/index");

const config = new ApplicationConfig({
  applicationID: "5fa24ca5756695531fa1eefb",
  applicationToken: "4twvAQZB3",
});

const applicationClient = new ApplicationClient(config);

async function getProducts() {
  try {
    const paginator =  applicationClient.catalog.getProductsPaginator()
    const res1 = await paginator.next();
    const res2 = await paginator.next();
    const res3 = await paginator.next();
    console.log(res1.items.map(item => item.name));
    console.log(res2.items.map(item => item.name));
    console.log(res3.items.map(item => item.name));
  } catch (err) {
    console.log(err);
  }
}

getProducts();
