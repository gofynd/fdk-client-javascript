"use strict";
/*
 * Query string parse/stringify used by the SDK.
 *
 * Derived from query-string 7.1.3, with its dependencies inlined and the decode-uri-component dependency
 * replaced by the decoder below, which decodes malformed input in one linear pass. Output for well-formed
 * input is identical to query-string 7.1.3.
 *
 * Keep identical to the other copy: sdk/common/queryString.js under templates/javascript/code and templates_admin/javascript/code.
 *
 * MIT License
 *
 * Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (http://sindresorhus.com)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
 * associated documentation files (the "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the
 * following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
 * LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO
 * EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
 * USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

const decodeUriComponent = (() => {
  const isHex = (c) =>
    (c >= 48 && c <= 57) || (c >= 65 && c <= 70) || (c >= 97 && c <= 102);
  const hex = (c) => (c <= 57 ? c - 48 : (c | 32) - 87);
  const isEscape = (input, at) =>
    input.charCodeAt(at) === 37 &&
    at + 2 < input.length &&
    isHex(input.charCodeAt(at + 1)) &&
    isHex(input.charCodeAt(at + 2));
  const byteAt = (input, at) =>
    hex(input.charCodeAt(at + 1)) * 16 + hex(input.charCodeAt(at + 2));
  const isContinuation = (byte) => byte >= 0x80 && byte <= 0xbf;

  // Length of the well-formed UTF-8 sequence that starts with the escape at `at`, or 0 if there is none.
  const sequenceLength = (bytes) => {
    const lead = bytes[0];
    let length = 0;
    let low = 0x80;
    let high = 0xbf;
    if (lead < 0x80) return 1;
    if (lead >= 0xc2 && lead <= 0xdf) length = 2;
    else if (lead >= 0xe0 && lead <= 0xef) {
      length = 3;
      if (lead === 0xe0) low = 0xa0;
      if (lead === 0xed) high = 0x9f;
    } else if (lead >= 0xf0 && lead <= 0xf4) {
      length = 4;
      if (lead === 0xf0) low = 0x90;
      if (lead === 0xf4) high = 0x8f;
    } else return 0;
    if (bytes.length < length) return 0;
    if (bytes[1] < low || bytes[1] > high) return 0;
    for (let k = 2; k < length; k++) if (!isContinuation(bytes[k])) return 0;
    return length;
  };

  return (encodedURI) => {
    if (typeof encodedURI !== "string") {
      throw new TypeError(
        "Expected `encodedURI` to be of type `string`, got `" +
          typeof encodedURI +
          "`"
      );
    }
    const input = encodedURI.replace(/\+/g, " ");
    try {
      return decodeURIComponent(input);
    } catch (_) {
      // malformed escape sequences: decode what is well-formed, in one linear pass, and keep the rest as written
    }
    let output = "";
    let i = 0;
    while (i < input.length) {
      if (!isEscape(input, i)) {
        output += input[i];
        i += 1;
        continue;
      }
      let j = i;
      const bytes = [];
      while (isEscape(input, j) && bytes.length < 4) {
        bytes.push(byteAt(input, j));
        j += 3;
      }
      const length = sequenceLength(bytes);
      if (length === 0) {
        output += input.slice(i, i + 3);
        i += 3;
      } else {
        // the sequence is validated, so native decoding cannot throw here
        output += decodeURIComponent(input.slice(i, i + length * 3));
        i += length * 3;
      }
    }
    return output;
  };
})();

const strictUriEncode = (str) =>
  encodeURIComponent(str).replace(
    /[!'()*]/g,
    (x) => `%${x.charCodeAt(0).toString(16).toUpperCase()}`
  );

const splitOnFirst = (string, separator) => {
  if (!(typeof string === "string" && typeof separator === "string")) {
    throw new TypeError("Expected the arguments to be of type `string`");
  }
  if (separator === "") {
    return [string];
  }
  const separatorIndex = string.indexOf(separator);
  if (separatorIndex === -1) {
    return [string];
  }
  return [
    string.slice(0, separatorIndex),
    string.slice(separatorIndex + separator.length),
  ];
};

const isNullOrUndefined = (value) => value === null || value === undefined;

function encoderForArrayFormat(options) {
  switch (options.arrayFormat) {
    case "index":
      return (key) => (result, value) => {
        const index = result.length;

        if (
          value === undefined ||
          (options.skipNull && value === null) ||
          (options.skipEmptyString && value === "")
        ) {
          return result;
        }

        if (value === null) {
          result.push([encode(key, options), "[", index, "]"].join(""));
          return result;
        }

        result.push(
          [
            encode(key, options),
            "[",
            encode(index, options),
            "]=",
            encode(value, options),
          ].join("")
        );
        return result;
      };

    case "bracket":
      return (key) => (result, value) => {
        if (
          value === undefined ||
          (options.skipNull && value === null) ||
          (options.skipEmptyString && value === "")
        ) {
          return result;
        }

        if (value === null) {
          result.push([encode(key, options), "[]"].join(""));
          return result;
        }

        result.push(
          [encode(key, options), "[]=", encode(value, options)].join("")
        );
        return result;
      };

    case "colon-list-separator":
      return (key) => (result, value) => {
        if (
          value === undefined ||
          (options.skipNull && value === null) ||
          (options.skipEmptyString && value === "")
        ) {
          return result;
        }

        if (value === null) {
          result.push([encode(key, options), ":list="].join(""));
          return result;
        }

        result.push(
          [encode(key, options), ":list=", encode(value, options)].join("")
        );
        return result;
      };

    case "comma":
    case "separator":
    case "bracket-separator": {
      const keyValueSep =
        options.arrayFormat === "bracket-separator" ? "[]=" : "=";

      return (key) => (result, value) => {
        if (
          value === undefined ||
          (options.skipNull && value === null) ||
          (options.skipEmptyString && value === "")
        ) {
          return result;
        }

        // Translate null to an empty string so that it doesn't serialize as 'null'
        value = value === null ? "" : value;

        // The pieces of one pair are joined once with the separator by stringify, so this stays linear.
        result.push(
          result.length === 0
            ? [encode(key, options), keyValueSep, encode(value, options)].join(
                ""
              )
            : encode(value, options)
        );
        return result;
      };
    }

    default:
      return (key) => (result, value) => {
        if (
          value === undefined ||
          (options.skipNull && value === null) ||
          (options.skipEmptyString && value === "")
        ) {
          return result;
        }

        if (value === null) {
          result.push(encode(key, options));
          return result;
        }

        result.push(
          [encode(key, options), "=", encode(value, options)].join("")
        );
        return result;
      };
  }
}

// Same result as [].concat(existing, value), but appends to the array the parser already built, so repeated keys stay linear.
function appendValue(existing, value) {
  const list = Array.isArray(existing) ? existing : [existing];
  if (Array.isArray(value)) {
    for (const item of value) list.push(item);
  } else {
    list.push(value);
  }
  return list;
}

function parserForArrayFormat(options) {
  let result;

  switch (options.arrayFormat) {
    case "index":
      return (key, value, accumulator) => {
        result = /\[(\d*)\]$/.exec(key);

        key = key.replace(/\[\d*\]$/, "");

        if (!result) {
          accumulator[key] = value;
          return;
        }

        // a scalar or null already stored under this key cannot hold indexes, so it is replaced rather than thrown on
        if (typeof accumulator[key] !== "object" || accumulator[key] === null) {
          accumulator[key] = {};
        }

        accumulator[key][result[1]] = value;
      };

    case "bracket":
      return (key, value, accumulator) => {
        result = /(\[\])$/.exec(key);
        key = key.replace(/\[\]$/, "");

        if (!result) {
          accumulator[key] = value;
          return;
        }

        if (accumulator[key] === undefined) {
          accumulator[key] = [value];
          return;
        }

        accumulator[key] = appendValue(accumulator[key], value);
      };

    case "colon-list-separator":
      return (key, value, accumulator) => {
        result = /(:list)$/.exec(key);
        key = key.replace(/:list$/, "");

        if (!result) {
          accumulator[key] = value;
          return;
        }

        if (accumulator[key] === undefined) {
          accumulator[key] = [value];
          return;
        }

        accumulator[key] = appendValue(accumulator[key], value);
      };

    case "comma":
    case "separator":
      return (key, value, accumulator) => {
        const isArray =
          typeof value === "string" &&
          value.includes(options.arrayFormatSeparator);
        const isEncodedArray =
          typeof value === "string" &&
          !isArray &&
          decode(value, options).includes(options.arrayFormatSeparator);
        value = isEncodedArray ? decode(value, options) : value;
        const newValue =
          isArray || isEncodedArray
            ? value
                .split(options.arrayFormatSeparator)
                .map((item) => decode(item, options))
            : value === null
            ? value
            : decode(value, options);
        accumulator[key] = newValue;
      };

    case "bracket-separator":
      return (key, value, accumulator) => {
        const isArray = /(\[\])$/.test(key);
        key = key.replace(/\[\]$/, "");

        if (!isArray) {
          accumulator[key] = value ? decode(value, options) : value;
          return;
        }

        const arrayValue =
          value === null
            ? []
            : value
                .split(options.arrayFormatSeparator)
                .map((item) => decode(item, options));

        if (accumulator[key] === undefined) {
          accumulator[key] = arrayValue;
          return;
        }

        accumulator[key] = appendValue(accumulator[key], arrayValue);
      };

    default:
      return (key, value, accumulator) => {
        if (accumulator[key] === undefined) {
          accumulator[key] = value;
          return;
        }

        accumulator[key] = appendValue(accumulator[key], value);
      };
  }
}

function validateArrayFormatSeparator(value) {
  if (typeof value !== "string" || value.length !== 1) {
    throw new TypeError("arrayFormatSeparator must be single character string");
  }
}

function encode(value, options) {
  if (options.encode) {
    return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
  }

  return value;
}

function decode(value, options) {
  if (options.decode) {
    return decodeUriComponent(value);
  }

  return value;
}

function keysSorter(input) {
  if (Array.isArray(input)) {
    return input.sort();
  }

  if (typeof input === "object") {
    return keysSorter(Object.keys(input))
      .sort((a, b) => Number(a) - Number(b))
      .map((key) => input[key]);
  }

  return input;
}

function removeHash(input) {
  const hashStart = input.indexOf("#");
  if (hashStart !== -1) {
    input = input.slice(0, hashStart);
  }

  return input;
}

function extract(input) {
  input = removeHash(input);
  const queryStart = input.indexOf("?");
  if (queryStart === -1) {
    return "";
  }

  return input.slice(queryStart + 1);
}

function parseValue(value, options) {
  if (
    options.parseNumbers &&
    !Number.isNaN(Number(value)) &&
    typeof value === "string" &&
    value.trim() !== ""
  ) {
    value = Number(value);
  } else if (
    options.parseBooleans &&
    value !== null &&
    (value.toLowerCase() === "true" || value.toLowerCase() === "false")
  ) {
    value = value.toLowerCase() === "true";
  }

  return value;
}

function parse(query, options) {
  options = Object.assign(
    {
      decode: true,
      sort: true,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: false,
      parseBooleans: false,
    },
    options
  );

  validateArrayFormatSeparator(options.arrayFormatSeparator);

  const formatter = parserForArrayFormat(options);

  // Create an object with no prototype
  const ret = Object.create(null);

  if (typeof query !== "string") {
    return ret;
  }

  query = query.trim().replace(/^[?#&]/, "");

  if (!query) {
    return ret;
  }

  for (const param of query.split("&")) {
    if (param === "") {
      continue;
    }

    let [key, value] = splitOnFirst(
      options.decode ? param.replace(/\+/g, " ") : param,
      "="
    );

    // Missing `=` should be `null`:
    // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
    value =
      value === undefined
        ? null
        : ["comma", "separator", "bracket-separator"].includes(
            options.arrayFormat
          )
        ? value
        : decode(value, options);
    formatter(decode(key, options), value, ret);
  }

  for (const key of Object.keys(ret)) {
    const value = ret[key];
    if (typeof value === "object" && value !== null) {
      for (const k of Object.keys(value)) {
        value[k] = parseValue(value[k], options);
      }
    } else {
      ret[key] = parseValue(value, options);
    }
  }

  if (options.sort === false) {
    return ret;
  }

  return (options.sort === true
    ? Object.keys(ret).sort()
    : Object.keys(ret).sort(options.sort)
  ).reduce((result, key) => {
    const value = ret[key];
    if (Boolean(value) && typeof value === "object" && !Array.isArray(value)) {
      // Sort object keys, not values
      result[key] = keysSorter(value);
    } else {
      result[key] = value;
    }

    return result;
  }, Object.create(null));
}

exports.extract = extract;
exports.parse = parse;

exports.stringify = (object, options) => {
  if (!object) {
    return "";
  }

  options = Object.assign(
    {
      encode: true,
      strict: true,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
    },
    options
  );

  validateArrayFormatSeparator(options.arrayFormatSeparator);

  const shouldFilter = (key) =>
    (options.skipNull && isNullOrUndefined(object[key])) ||
    (options.skipEmptyString && object[key] === "");

  const formatter = encoderForArrayFormat(options);
  const joinsWithSeparator = [
    "comma",
    "separator",
    "bracket-separator",
  ].includes(options.arrayFormat);

  const objectCopy = {};

  for (const key of Object.keys(object)) {
    if (!shouldFilter(key)) {
      objectCopy[key] = object[key];
    }
  }

  const keys = Object.keys(objectCopy);

  if (options.sort !== false) {
    keys.sort(options.sort);
  }

  return keys
    .map((key) => {
      const value = object[key];

      if (value === undefined) {
        return "";
      }

      if (value === null) {
        return encode(key, options);
      }

      if (Array.isArray(value)) {
        if (value.length === 0 && options.arrayFormat === "bracket-separator") {
          return encode(key, options) + "[]";
        }

        // The formatter appends to this fresh array, so nothing is shared between keys.
        return value
          .reduce(formatter(key), [])
          .join(joinsWithSeparator ? options.arrayFormatSeparator : "&");
      }

      return encode(key, options) + "=" + encode(value, options);
    })
    .filter((x) => x.length > 0)
    .join("&");
};
