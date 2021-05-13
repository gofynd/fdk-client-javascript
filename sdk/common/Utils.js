exports.isRequired = (name) => {
  throw new Error(`Parameter ${name} is required`);
};
