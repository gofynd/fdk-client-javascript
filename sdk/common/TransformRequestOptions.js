exports.transformRequestOptions = (params) => {
  let options = "";

  for (const key in params) {
    if (typeof params[key] !== "object" && params[key]) {
      const encodeVal = encodeURIComponent(params[key]);
      options += `${key}=${encodeVal}&`;
    } else if (Array.isArray(params[key])) {
      params[key].forEach((el) => {
        const encodeVal = encodeURIComponent(el);
        options += `${key}=${encodeVal}&`;
      });
    } else if (typeof params[key] === "object" && params[key]) {
      options += transformRequestOptions(params[key]);
    }
  }
  return options ? options.slice(0, -1) : options;
};
