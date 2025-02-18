function validateRequiredParams(params, requiredParams) {
  const errors = [];
  requiredParams.forEach((key) => {
    const value = params[key];

    // Reject missing or empty values (except for boolean false)
    if (
      value === undefined ||
      value === null ||
      (typeof value !== "boolean" && value === "")
    ) {
      errors.push(`Missing or empty required parameter: ${key}`);
    }
  });
  return errors;
}

module.exports = {
  validateRequiredParams,
};
