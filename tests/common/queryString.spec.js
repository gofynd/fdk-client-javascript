const querystring = require("../../sdk/common/queryString");
const fixtures = require("./queryString.fixtures.json");

describe("queryString (vendored query-string 7.1.3 with a linear-time decoder)", () => {
  describe("matches query-string 7.1.3 on its own recorded output", () => {
    fixtures.parse.forEach(([query, expected], index) => {
      it(`parse #${index}`, () => {
        expect(querystring.parse(query)).toEqual(expected);
      });
    });

    fixtures.stringify.forEach(([object, expected], index) => {
      it(`stringify #${index}`, () => {
        expect(querystring.stringify(object)).toBe(expected);
      });
    });

    fixtures.roundtrip.forEach(([query, expected], index) => {
      it(`stringify(parse()) #${index}`, () => {
        expect(querystring.stringify(querystring.parse(query))).toBe(expected);
      });
    });
  });

  describe("keeps what is not valid percent-encoding as written", () => {
    fixtures.malformed.forEach(([query, expected]) => {
      it(query, () => {
        expect(querystring.parse(query)).toEqual(expected);
      });
    });

    it("keeps a literal percent that precedes invalid bytes, which query-string 7.1.3 drops", () => {
      expect(querystring.parse("a=%25%ED%A0%80").a).toBe("%%ED%A0%80");
      expect(querystring.parse("a=%25%41%C0%AF").a).toBe("%A%C0%AF");
    });

    it("leaves invalid byte sequences as escapes instead of replacement characters", () => {
      expect(querystring.parse("a=%FE%FF").a).toBe("%FE%FF");
      expect(querystring.parse("a=%C2").a).toBe("%C2");
    });
  });

  describe("does not take super-linear time on crafted input", () => {
    const slowest = (input) => {
      const started = Date.now();
      querystring.parse(input);
      return Date.now() - started;
    };

    it("repeated invalid lead bytes", () => {
      expect(slowest("a=" + "%FA".repeat(20000))).toBeLessThan(500);
    });

    it("repeated truncated escapes", () => {
      expect(slowest("a=" + "%E0%A4%A".repeat(20000))).toBeLessThan(500);
    });

    it("repeated stray percent signs after valid escapes", () => {
      expect(slowest("a=" + "%C2%".repeat(40000))).toBeLessThan(500);
    });

    const repeated = (key, count) =>
      Array.from({ length: count }, (_, i) => `${key}=${i}`).join("&");

    it("repeated keys", () => {
      expect(slowest(repeated("a", 100000))).toBeLessThan(1000);
      expect(querystring.parse(repeated("a", 4))).toEqual({
        a: ["0", "1", "2", "3"],
      });
    });

    it("repeated keys in the array formats", () => {
      const started = Date.now();
      querystring.parse(repeated("a[]", 100000), { arrayFormat: "bracket" });
      querystring.parse(repeated("a:list", 100000), {
        arrayFormat: "colon-list-separator",
      });
      querystring.parse(repeated("a[]", 100000).replace(/=/g, "=x|"), {
        arrayFormat: "bracket-separator",
        arrayFormatSeparator: "|",
      });
      expect(Date.now() - started).toBeLessThan(3000);
      expect(
        querystring.parse("a[]=1&a[]=2&a[]=3", { arrayFormat: "bracket" })
      ).toEqual({ a: ["1", "2", "3"] });
      expect(
        querystring.parse("a[]=1|2&a[]=3", {
          arrayFormat: "bracket-separator",
          arrayFormatSeparator: "|",
        })
      ).toEqual({ a: ["1", "2", "3"] });
    });
  });

  describe("serialises large arrays in linear time", () => {
    const formats = [
      undefined,
      "bracket",
      "index",
      "colon-list-separator",
      "comma",
      "separator",
      "bracket-separator",
    ];
    const big = Array.from({ length: 100000 }, (_, i) => String(i));

    formats.forEach((arrayFormat) => {
      it(`${arrayFormat || "default"} format, 100000 items`, () => {
        const options = arrayFormat
          ? { arrayFormat, arrayFormatSeparator: "|" }
          : {};
        const started = Date.now();
        const out = querystring.stringify({ a: big }, options);
        expect(Date.now() - started).toBeLessThan(1000);
        expect(out.length).toBeGreaterThan(big.length);
      });
    });

    it("keeps the order, indexes and separators of the existing output", () => {
      const items = ["x", null, undefined, "", "y z"];
      expect(querystring.stringify({ a: items })).toBe("a=x&a&a=&a=y%20z");
      expect(
        querystring.stringify({ a: items }, { arrayFormat: "index" })
      ).toBe("a[0]=x&a[1]&a[2]=&a[3]=y%20z");
      expect(
        querystring.stringify({ a: items }, { arrayFormat: "bracket" })
      ).toBe("a[]=x&a[]&a[]=&a[]=y%20z");
      expect(
        querystring.stringify(
          { a: items },
          { arrayFormat: "colon-list-separator" }
        )
      ).toBe("a:list=x&a:list=&a:list=&a:list=y%20z");
      expect(
        querystring.stringify({ a: items }, { arrayFormat: "comma" })
      ).toBe("a=x,,,y%20z");
      expect(
        querystring.stringify(
          { a: items },
          { arrayFormat: "bracket-separator", arrayFormatSeparator: "|" }
        )
      ).toBe("a[]=x|||y%20z");
      expect(
        querystring.stringify(
          { a: items },
          { arrayFormat: "comma", skipNull: true, skipEmptyString: true }
        )
      ).toBe("a=x,y%20z");
      expect(
        querystring.stringify(
          { a: [null], b: [] },
          { arrayFormat: "comma", skipNull: true }
        )
      ).toBe("");
    });

    it("does not change the arrays it is given and keeps keys independent", () => {
      const a = ["1", "2"];
      const b = ["3"];
      expect(querystring.stringify({ a, b }, { arrayFormat: "index" })).toBe(
        "a[0]=1&a[1]=2&b[0]=3"
      );
      expect(querystring.stringify({ a, b }, { arrayFormat: "comma" })).toBe(
        "a=1,2&b=3"
      );
      expect(a).toEqual(["1", "2"]);
      expect(b).toEqual(["3"]);
    });
  });

  describe("runs where Buffer and TextDecoder do not exist (browser bundles, older runtimes)", () => {
    it("loads and decodes malformed input using only language built-ins", () => {
      const fs = require("fs");
      const path = require("path");
      const vm = require("vm");
      const source = fs.readFileSync(
        path.join(__dirname, "../../sdk/common/queryString.js"),
        "utf8"
      );
      const module_ = { exports: {} };
      // a fresh context has the language built-ins but neither Buffer nor TextDecoder
      vm.runInNewContext(
        `(function (exports, module) {${source}\n})(module.exports, module)`,
        { module: module_ }
      );
      expect(module_.exports.parse("a=%25%ED%A0%80&b=%E6%97%A5%fa").a).toBe(
        "%%ED%A0%80"
      );
      expect(module_.exports.parse("b=%E6%97%A5%fa").b).toBe("日%fa");
    });
  });

  describe("index array format with a scalar already stored under the key", () => {
    const parse = (query) => querystring.parse(query, { arrayFormat: "index" });

    it("does not throw, where query-string 7.1.3 throws a TypeError", () => {
      expect(parse("a=foo&a[0]=bar")).toEqual({ a: ["bar"] });
      expect(parse("a&a[0]=x")).toEqual({ a: ["x"] });
      expect(parse("a=&a[1]=x&a[0]=y")).toEqual({ a: ["y", "x"] });
    });

    it("still collects indexed values as before", () => {
      expect(parse("a[1]=y&a[0]=x&b[0]=z")).toEqual({
        a: ["x", "y"],
        b: ["z"],
      });
    });
  });

  describe("encoding the SDK relies on for request signing", () => {
    it("sorts keys and encodes reserved characters the same way every time", () => {
      expect(
        querystring.stringify({
          b: "1 2",
          a: "x!'()*y",
          c: ["2", "1"],
          d: null,
        })
      ).toBe("a=x%21%27%28%29%2Ay&b=1%202&c=2&c=1&d");
    });

    it("skips undefined values", () => {
      expect(querystring.stringify({ a: undefined, b: "x" })).toBe("b=x");
    });
  });
});
