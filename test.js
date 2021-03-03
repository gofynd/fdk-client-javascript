const { ApplicationConfig, ApplicationClient } = require("../../../output/javascript/code/index");

const config = new ApplicationConfig({
  applicationID: "5fa24ca5756695531fa1eefb",
  applicationToken: "4twvAQZB3"
});

const applicationClient = new ApplicationClient(config);

async function getTheme() {
  try {
    const cart = await applicationClient.cart.getCart();
    console.log(cart);
  } catch (err) {
      console.log(err);
  }
}

getTheme();