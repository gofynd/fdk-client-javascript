const { ApplicationConfig, ApplicationClient } = require("../../../output/javascript/code/index");

const config = new ApplicationConfig({
  applicationID: "5fa24ca5756695531fa1eefb",
  applicationToken: "4twvAQZB3",
  domain: "https://api.fyndx0.de",
});

const applicationClient = new ApplicationClient(config);

async function getTheme() {
  try {
    const res = await applicationClient.theme.getThemeForPreview('5fa24cdd29e03d7c24fc35cf');
    console.log(res);
  } catch (err) {
      console.log(err);
  }
}

getTheme();