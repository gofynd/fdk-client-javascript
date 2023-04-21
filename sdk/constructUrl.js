const camelCase = require("camelcase");
const constructUrl = ({ url, params }) => {
  return url
    .split("/")
    .map((word) => {
      if (word[0] === "{" && word[word.length - 1] === "}") {
        word = params[camelCase(word.slice(1, word.length - 1))];
      }
      return word;
    })
    .join("/");
};
module.exports = constructUrl;
