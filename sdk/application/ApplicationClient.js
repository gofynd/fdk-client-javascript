const axios = require("axios");
const camelCase = require("camelcase");
const {
  CatalogValidator,
  CartValidator,
  CommonValidator,
  LeadValidator,
  ThemeValidator,
  UserValidator,
  ContentValidator,
  CommunicationValidator,
  ShareValidator,
  FileStorageValidator,
  ConfigurationValidator,
  PaymentValidator,
  OrderValidator,
  RewardsValidator,
  FeedbackValidator,
  PosCartValidator,
  LogisticValidator,
  LocationValidator,
} = require("./ApplicationModels");

const APIClient = require("./ApplicationAPIClient");
const Paginator = require("../common/Paginator");
const { FDKClientValidationError } = require("../common/FDKError");

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

class ApplicationClient {
  constructor(config) {
    this.config = config;
    this.catalog = new Catalog(config);
    this.cart = new Cart(config);
    this.common = new Common(config);
    this.lead = new Lead(config);
    this.theme = new Theme(config);
    this.user = new User(config);
    this.content = new Content(config);
    this.communication = new Communication(config);
    this.share = new Share(config);
    this.fileStorage = new FileStorage(config);
    this.configuration = new Configuration(config);
    this.payment = new Payment(config);
    this.order = new Order(config);
    this.rewards = new Rewards(config);
    this.feedback = new Feedback(config);
    this.posCart = new PosCart(config);
    this.logistic = new Logistic(config);
  }

  setCookie(cookie) {
    this.config.cookie = cookie;
  }

  setLocationDetails(locationDetails) {
    const {
      error,
    } = LocationValidator.validateLocationObj().validate(locationDetails, {
      abortEarly: false,
      allowUnknown: true,
    });
    if (error) {
      throw new FDKClientValidationError(error);
    }
    this.config.locationDetails = locationDetails;
  }

  setExtraHeaders(header) {
    if (typeof header === "object") {
      this.config.extraHeaders.push(header);
    } else {
      throw new FDKClientValidationError("Context value should be an object");
    }
  }
}

class Catalog {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      getProductDetailBySlug:
        "/service/application/catalog/v1.0/products/{slug}/",
      getProductSizesBySlug:
        "/service/application/catalog/v1.0/products/{slug}/sizes/",
      getProductComparisonBySlugs:
        "/service/application/catalog/v1.0/products/compare/",
      getSimilarComparisonProductBySlug:
        "/service/application/catalog/v1.0/products/{slug}/similar/compare/",
      getComparedFrequentlyProductBySlug:
        "/service/application/catalog/v1.0/products/{slug}/similar/compared-frequently/",
      getProductSimilarByIdentifier:
        "/service/application/catalog/v1.0/products/{slug}/similar/{similar_type}/",
      getProductVariantsBySlug:
        "/service/application/catalog/v1.0/products/{slug}/variants/",
      getProductStockByIds:
        "/service/application/catalog/v1.0/products/stock-status/",
      getProductStockForTimeByIds:
        "/service/application/catalog/v1.0/products/stock-status/poll/",
      getProducts: "/service/application/catalog/v1.0/products/",
      getBrands: "/service/application/catalog/v1.0/brands/",
      getBrandDetailBySlug: "/service/application/catalog/v1.0/brands/{slug}/",
      getCategories: "/service/application/catalog/v1.0/categories/",
      getCategoryDetailBySlug:
        "/service/application/catalog/v1.0/categories/{slug}/",
      getHomeProducts: "/service/application/catalog/v1.0/home/listing/",
      getDepartments: "/service/application/catalog/v1.0/departments/",
      getSearchResults: "/service/application/catalog/v1.0/auto-complete/",
      getCollections: "/service/application/catalog/v1.0/collections/",
      getCollectionItemsBySlug:
        "/service/application/catalog/v1.0/collections/{slug}/items/",
      getCollectionDetailBySlug:
        "/service/application/catalog/v1.0/collections/{slug}/",
      getFollowedListing:
        "/service/application/catalog/v1.0/follow/{collection_type}/",
      unfollowById:
        "/service/application/catalog/v1.0/follow/{collection_type}/{collection_id}/",
      followById:
        "/service/application/catalog/v1.0/follow/{collection_type}/{collection_id}/",
      getFollowerCountById:
        "/service/application/catalog/v1.0/follow/{collection_type}/{collection_id}/count/",
      getFollowIds: "/service/application/catalog/v1.0/follow/ids/",
      getStores: "/service/application/catalog/v1.0/locations/",
      getInStockLocations:
        "/service/application/catalog/v1.0/in-stock/locations/",
      getLocationDetailsById:
        "/service/application/catalog/v1.0/locations/{location_id}/",
      getProductBundlesBySlug:
        "/service/application/catalog/v1.0/product-grouping/",
      getProductPriceBySlug:
        "/service/application/catalog/v2.0/products/{slug}/sizes/{size}/price/",
      getProductSellersBySlug:
        "/service/application/catalog/v2.0/products/{slug}/sizes/{size}/sellers/",
    };
    this._urls = Object.entries(this._relativeUrls).reduce(
      (urls, [method, relativeUrl]) => {
        urls[method] = `${_conf.domain}${relativeUrl}`;
        return urls;
      },
      {}
    );
  }

  updateUrls(urls) {
    this._urls = {
      ...this._urls,
      ...urls,
    };
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a product. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/products/
   * @returns {Promise<ProductDetail>} - Success response
   * @summary: Get a product
   * @description: Use this API to retrieve a product by its slug value.
   */
  getProductDetailBySlug({ slug } = {}) {
    const { error } = CatalogValidator.getProductDetailBySlug().validate(
      { slug },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getProductDetailBySlug"],
        params: { slug },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a product. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/products/
   * @param {number} [arg.storeId] - The ID of the store that is selling the
   *   product, e.g. 1,2,3.
   * @returns {Promise<ProductSizes>} - Success response
   * @summary: Get the sizes of a product
   * @description: A product can have multiple sizes. Use this API to fetch all the available sizes of a product.
   */
  getProductSizesBySlug({ slug, storeId } = {}) {
    const { error } = CatalogValidator.getProductSizesBySlug().validate(
      { slug, storeId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["store_id"] = storeId;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getProductSizesBySlug"],
        params: { slug },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string[]} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a product. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/products/.
   * @returns {Promise<ProductsComparisonResponse>} - Success response
   * @summary: Compare products
   * @description: Use this API to compare the features of products belonging to the same category. Note that at least one slug is mandatory in the request query.
   */
  getProductComparisonBySlugs({ slug } = {}) {
    const { error } = CatalogValidator.getProductComparisonBySlugs().validate(
      { slug },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["slug"] = slug;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getProductComparisonBySlugs"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a product. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/products/
   * @returns {Promise<ProductCompareResponse>} - Success response
   * @summary: Get comparison between similar products
   * @description: Use this API to compare a given product automatically with similar products. Only one slug is needed.
   */
  getSimilarComparisonProductBySlug({ slug } = {}) {
    const {
      error,
    } = CatalogValidator.getSimilarComparisonProductBySlug().validate(
      { slug },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getSimilarComparisonProductBySlug"],
        params: { slug },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a product. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/products/
   * @returns {Promise<ProductFrequentlyComparedSimilarResponse>} - Success response
   * @summary: Get comparison between frequently compared products with the given product
   * @description: Use this API to compare a given product automatically with products that are frequently compared with it. Only one slug is needed.
   */
  getComparedFrequentlyProductBySlug({ slug } = {}) {
    const {
      error,
    } = CatalogValidator.getComparedFrequentlyProductBySlug().validate(
      { slug },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getComparedFrequentlyProductBySlug"],
        params: { slug },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a product. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/products/
   * @param {string} arg.similarType - Similarity criteria such as basic,
   *   visual, price, seller, category and spec. Visual - Products having
   *   similar patterns, Price - Products in similar price range, Seller -
   *   Products sold by the same seller, Category - Products belonging to the
   *   same category, e.g. sports shoes, Spec - Products having similar
   *   specifications, e.g. phones with same memory.
   * @returns {Promise<SimilarProductByTypeResponse>} - Success response
   * @summary: Get similar products
   * @description: Use this API to retrieve products similar to the one specified by its slug. You can search not only similar looking products, but also those that are sold by same seller, or those that belong to the same category, price, specifications, etc.
   */
  getProductSimilarByIdentifier({ slug, similarType } = {}) {
    const { error } = CatalogValidator.getProductSimilarByIdentifier().validate(
      { slug, similarType },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getProductSimilarByIdentifier"],
        params: { slug, similarType },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a product. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/products/
   * @returns {Promise<ProductVariantsResponse>} - Success response
   * @summary: Get variant of a particular product
   * @description: A product can have a different type of variants such as colour, shade, memory. Use this API to fetch all the available variants of a product using its slug.
   */
  getProductVariantsBySlug({ slug } = {}) {
    const { error } = CatalogValidator.getProductVariantsBySlug().validate(
      { slug },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getProductVariantsBySlug"],
        params: { slug },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.itemId] - The Item ID of the product (Max. 50 allowed)
   * @param {string} [arg.alu] - ALU of the product (limited upto 50 ALU
   *   identifier in a single request)
   * @param {string} [arg.skuCode] - Stock-keeping Unit of the product
   *   (limited upto 50 SKU Code in a single request)
   * @param {string} [arg.ean] - European Article Number of the product
   *   (limited upto 50 EAN identifier in a single request)
   * @param {string} [arg.upc] - Universal Product Code of the product
   *   (limited upto 50 UPC identifier in a single request)
   * @returns {Promise<ProductStockStatusResponse>} - Success response
   * @summary: Get the stock of a product
   * @description: Retrieve the available stock of the products. Use this API to retrieve stock of multiple products (up to 50) at a time.
   */
  getProductStockByIds({ itemId, alu, skuCode, ean, upc } = {}) {
    const { error } = CatalogValidator.getProductStockByIds().validate(
      { itemId, alu, skuCode, ean, upc },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["item_id"] = itemId;
    query_params["alu"] = alu;
    query_params["sku_code"] = skuCode;
    query_params["ean"] = ean;
    query_params["upc"] = upc;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getProductStockByIds"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.timestamp - Timestamp in UTC format (2020-07-23T10:27:50Z)
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @param {string} [arg.pageId] - Page ID to retrieve next set of results.
   * @returns {Promise<ProductStockPolling>} - Success response
   * @summary: Get the stock of a product
   * @description: Retrieve the available stock of the products. Use this API to get the stock status of products whose inventory is updated at the specified time
   */
  getProductStockForTimeByIds({ timestamp, pageSize, pageId } = {}) {
    const { error } = CatalogValidator.getProductStockForTimeByIds().validate(
      { timestamp, pageSize, pageId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["timestamp"] = timestamp;
    query_params["page_size"] = pageSize;
    query_params["page_id"] = pageId;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getProductStockForTimeByIds"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.timestamp - Timestamp in UTC format (2020-07-23T10:27:50Z)
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @summary: Get the stock of a product
   * @description: Retrieve the available stock of the products. Use this API to get the stock status of products whose inventory is updated at the specified time
   */
  getProductStockForTimeByIdsPaginator({ timestamp, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getProductStockForTimeByIds({
        timestamp: timestamp,
        pageSize: pageSize,
        pageId: pageId,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.q] - The search query for entering partial or full
   *   name of product, brand, category, or collection.
   * @param {string} [arg.f] - The search filter parameters. Filter parameters
   *   will be passed in f parameter as shown in the example below. Double
   *   Pipe (||) denotes the OR condition, whereas Triple-colon (:::)
   *   indicates a new filter paramater applied as an AND condition.
   * @param {boolean} [arg.filters] - This is a boolean value, True for
   *   fetching all filter parameters and False for disabling the filter parameters.
   * @param {string} [arg.sortOn] - The order in which the list of products
   *   should be sorted, e.g. popularity, price, latest and discount, in
   *   either ascending or descending order. See the supported values below.
   * @param {string} [arg.pageId] - Page ID to retrieve next set of results.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results.
   * @param {string} [arg.pageType] - Available pagination types are cursor or number.
   * @returns {Promise<ProductListingResponse>} - Success response
   * @summary: Get all the products
   * @description: Use this API to list all the products. You may choose a sort order or make arbitrary search queries by entering the product name, brand, category or collection.
   */
  getProducts({
    q,
    f,
    filters,
    sortOn,
    pageId,
    pageSize,
    pageNo,
    pageType,
  } = {}) {
    const { error } = CatalogValidator.getProducts().validate(
      { q, f, filters, sortOn, pageId, pageSize, pageNo, pageType },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["q"] = q;
    query_params["f"] = f;
    query_params["filters"] = filters;
    query_params["sort_on"] = sortOn;
    query_params["page_id"] = pageId;
    query_params["page_size"] = pageSize;
    query_params["page_no"] = pageNo;
    query_params["page_type"] = pageType;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getProducts"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.q] - The search query for entering partial or full
   *   name of product, brand, category, or collection.
   * @param {string} [arg.f] - The search filter parameters. Filter parameters
   *   will be passed in f parameter as shown in the example below. Double
   *   Pipe (||) denotes the OR condition, whereas Triple-colon (:::)
   *   indicates a new filter paramater applied as an AND condition.
   * @param {boolean} [arg.filters] - This is a boolean value, True for
   *   fetching all filter parameters and False for disabling the filter parameters.
   * @param {string} [arg.sortOn] - The order in which the list of products
   *   should be sorted, e.g. popularity, price, latest and discount, in
   *   either ascending or descending order. See the supported values below.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @summary: Get all the products
   * @description: Use this API to list all the products. You may choose a sort order or make arbitrary search queries by entering the product name, brand, category or collection.
   */
  getProductsPaginator({ q, f, filters, sortOn, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getProducts({
        q: q,
        f: f,
        filters: filters,
        sortOn: sortOn,
        pageId: pageId,
        pageSize: pageSize,
        pageNo: pageNo,
        pageType: pageType,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.department] - The name of the department. Use this
   *   parameter to filter products by a particular department. See the list
   *   of available departments below. Also, you can get available departments
   *   from the endpoint /service/application/catalog/v1.0/departments/
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @returns {Promise<BrandListingResponse>} - Success response
   * @summary: Get all the brands
   * @description: A brand is the name under which a product is sold. Use this API to list all the brands. You can also filter the brands by department.
   */
  getBrands({ department, pageNo, pageSize } = {}) {
    const { error } = CatalogValidator.getBrands().validate(
      { department, pageNo, pageSize },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["department"] = department;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getBrands"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.department] - The name of the department. Use this
   *   parameter to filter products by a particular department. See the list
   *   of available departments below. Also, you can get available departments
   *   from the endpoint /service/application/catalog/v1.0/departments/
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @summary: Get all the brands
   * @description: A brand is the name under which a product is sold. Use this API to list all the brands. You can also filter the brands by department.
   */
  getBrandsPaginator({ department, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getBrands({
        department: department,
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a brand. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/brands/.
   * @returns {Promise<BrandDetailResponse>} - Success response
   * @summary: Get metadata of a brand
   * @description: Fetch metadata of a brand such as name, information, logo, banner, etc.
   */
  getBrandDetailBySlug({ slug } = {}) {
    const { error } = CatalogValidator.getBrandDetailBySlug().validate(
      { slug },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getBrandDetailBySlug"],
        params: { slug },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.department] - The name of the department. Use this
   *   parameter to filter products by a particular department. See the list
   *   of available departments below. Also, you can get available departments
   *   from the endpoint /service/application/catalog/v1.0/departments/
   * @returns {Promise<CategoryListingResponse>} - Success response
   * @summary: List all the categories
   * @description: Use this API to list all the categories. You can also filter the categories by department.
   */
  getCategories({ department } = {}) {
    const { error } = CatalogValidator.getCategories().validate(
      { department },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["department"] = department;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getCategories"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a brand. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/brands/.
   * @returns {Promise<CategoryMetaResponse>} - Success response
   * @summary: Get metadata of a category
   * @description: Fetch metadata of a category such as name, information, logo, banner, etc.
   */
  getCategoryDetailBySlug({ slug } = {}) {
    const { error } = CatalogValidator.getCategoryDetailBySlug().validate(
      { slug },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getCategoryDetailBySlug"],
        params: { slug },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.sortOn] - The order in which the list of products
   *   should be sorted, e.g. popularity, price, latest and discount, in
   *   either ascending or descending order.
   * @param {string} [arg.pageId] - Page ID to retrieve next set of results.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @returns {Promise<HomeListingResponse>} - Success response
   * @summary: List the products
   * @description: List all the products associated with a brand, collection or category in a random order.
   */
  getHomeProducts({ sortOn, pageId, pageSize } = {}) {
    const { error } = CatalogValidator.getHomeProducts().validate(
      { sortOn, pageId, pageSize },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["sort_on"] = sortOn;
    query_params["page_id"] = pageId;
    query_params["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getHomeProducts"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.sortOn] - The order in which the list of products
   *   should be sorted, e.g. popularity, price, latest and discount, in
   *   either ascending or descending order.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @summary: List the products
   * @description: List all the products associated with a brand, collection or category in a random order.
   */
  getHomeProductsPaginator({ sortOn, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getHomeProducts({
        sortOn: sortOn,
        pageId: pageId,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<DepartmentResponse>} - Success response
   * @summary: List all the departments
   * @description: Departments are a way to categorise similar products. A product can lie in multiple departments. For example, a skirt can below to the 'Women's Fashion' Department while a handbag can lie in 'Women's Accessories' Department. Use this API to list all the departments. If successful, returns the list of departments specified in `DepartmentResponse`
   */
  getDepartments({} = {}) {
    const { error } = CatalogValidator.getDepartments().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getDepartments"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.q - The search query for entering partial or full
   *   name of a product, brand or category. For example, if the given search
   *   query `q` is *ski*, the relevant search suggestions could be *skirt*,
   *   *ski shoes*, _*skin cream* etc.
   * @returns {Promise<AutoCompleteResponse>} - Success response
   * @summary: Get relevant suggestions for a search query
   * @description: Retrieves a list of suggestions for a given search query. Each suggestion is a valid search term that's generated on the basis of query. This is particularly useful to enhance the user experience while using the search tool.
   */
  getSearchResults({ q } = {}) {
    const { error } = CatalogValidator.getSearchResults().validate(
      { q },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["q"] = q;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getSearchResults"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @param {string[]} [arg.tag] - List of tags to filter collections
   * @returns {Promise<GetCollectionListingResponse>} - Success response
   * @summary: List all the collections
   * @description: Collections are a great way to organize your products and can improve the ability for customers to find items quickly and efficiently.
   */
  getCollections({ pageNo, pageSize, tag } = {}) {
    const { error } = CatalogValidator.getCollections().validate(
      { pageNo, pageSize, tag },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["tag"] = tag;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getCollections"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @param {string[]} [arg.tag] - List of tags to filter collections
   * @summary: List all the collections
   * @description: Collections are a great way to organize your products and can improve the ability for customers to find items quickly and efficiently.
   */
  getCollectionsPaginator({ pageSize, tag } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getCollections({
        pageNo: pageNo,
        pageSize: pageSize,
        tag: tag,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a collection. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/collections/.
   * @param {string} [arg.f] - The search filter parameters. Filter parameters
   *   will be passed in f parameter as shown in the example below. Double
   *   Pipe (||) denotes the OR condition, whereas Triple-colon (:::)
   *   indicates a new filter paramater applied as an AND condition.
   * @param {boolean} [arg.filters] - This is a boolean value, True for
   *   fetching all filter parameters and False for disabling the filter parameters.
   * @param {string} [arg.sortOn] - The order in which the list of products
   *   should be sorted, e.g. popularity, price, latest and discount, in
   *   either ascending or descending order. See the supported values below.
   * @param {string} [arg.pageId] - Page ID to retrieve next set of results.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @returns {Promise<ProductListingResponse>} - Success response
   * @summary: Get the items in a collection
   * @description: Get items in a collection specified by its `slug`.
   */
  getCollectionItemsBySlug({
    slug,
    f,
    filters,
    sortOn,
    pageId,
    pageSize,
  } = {}) {
    const { error } = CatalogValidator.getCollectionItemsBySlug().validate(
      { slug, f, filters, sortOn, pageId, pageSize },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["f"] = f;
    query_params["filters"] = filters;
    query_params["sort_on"] = sortOn;
    query_params["page_id"] = pageId;
    query_params["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getCollectionItemsBySlug"],
        params: { slug },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a collection. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/collections/.
   * @param {string} [arg.f] - The search filter parameters. Filter parameters
   *   will be passed in f parameter as shown in the example below. Double
   *   Pipe (||) denotes the OR condition, whereas Triple-colon (:::)
   *   indicates a new filter paramater applied as an AND condition.
   * @param {boolean} [arg.filters] - This is a boolean value, True for
   *   fetching all filter parameters and False for disabling the filter parameters.
   * @param {string} [arg.sortOn] - The order in which the list of products
   *   should be sorted, e.g. popularity, price, latest and discount, in
   *   either ascending or descending order. See the supported values below.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @summary: Get the items in a collection
   * @description: Get items in a collection specified by its `slug`.
   */
  getCollectionItemsBySlugPaginator({
    slug,
    f,
    filters,
    sortOn,
    pageSize,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getCollectionItemsBySlug({
        slug: slug,
        f: f,
        filters: filters,
        sortOn: sortOn,
        pageId: pageId,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a collection. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/collections/.
   * @returns {Promise<CollectionDetailResponse>} - Success response
   * @summary: Get a particular collection
   * @description: Get the details of a collection by its `slug`.
   */
  getCollectionDetailBySlug({ slug } = {}) {
    const { error } = CatalogValidator.getCollectionDetailBySlug().validate(
      { slug },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getCollectionDetailBySlug"],
        params: { slug },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.collectionType - Type of collection followed, i.e.
   *   products, brands, or collections.
   * @param {string} [arg.pageId] - Page ID to retrieve next set of results.
   * @param {number} [arg.pageSize] - Page ID to retrieve next set of results.
   * @returns {Promise<GetFollowListingResponse>} - Success response
   * @summary: Get a list of followed Products, Brands, Collections
   * @description: Users can follow a product they like. This API retrieves the products the user have followed.
   */
  getFollowedListing({ collectionType, pageId, pageSize } = {}) {
    const { error } = CatalogValidator.getFollowedListing().validate(
      { collectionType, pageId, pageSize },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["page_id"] = pageId;
    query_params["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getFollowedListing"],
        params: { collectionType },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.collectionType - Type of collection followed, i.e.
   *   products, brands, or collections.
   * @param {number} [arg.pageSize] - Page ID to retrieve next set of results.
   * @summary: Get a list of followed Products, Brands, Collections
   * @description: Users can follow a product they like. This API retrieves the products the user have followed.
   */
  getFollowedListingPaginator({ collectionType, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getFollowedListing({
        collectionType: collectionType,
        pageId: pageId,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.collectionType - Type of collection followed, i.e.
   *   products, brands, or collections.
   * @param {string} arg.collectionId - The ID of the collection type.
   * @returns {Promise<FollowPostResponse>} - Success response
   * @summary: Unfollow an entity (product/brand/collection)
   * @description: You can undo a followed product, brand or collection by its ID. This action is referred as _unfollow_.
   */
  unfollowById({ collectionType, collectionId } = {}) {
    const { error } = CatalogValidator.unfollowById().validate(
      { collectionType, collectionId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "delete",
      constructUrl({
        url: this._urls["unfollowById"],
        params: { collectionType, collectionId },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.collectionType - Type of collection followed, i.e.
   *   products, brands, or collections.
   * @param {string} arg.collectionId - The ID of the collection type.
   * @returns {Promise<FollowPostResponse>} - Success response
   * @summary: Follow an entity (product/brand/collection)
   * @description: Follow a particular entity such as product, brand, collection specified by its ID.
   */
  followById({ collectionType, collectionId } = {}) {
    const { error } = CatalogValidator.followById().validate(
      { collectionType, collectionId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["followById"],
        params: { collectionType, collectionId },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.collectionType - Type of collection, i.e. products,
   *   brands, or collections.
   * @param {string} arg.collectionId - The ID of the collection type.
   * @returns {Promise<FollowerCountResponse>} - Success response
   * @summary: Get Follow Count
   * @description: Get the total count of followers for a given collection type and collection ID.
   */
  getFollowerCountById({ collectionType, collectionId } = {}) {
    const { error } = CatalogValidator.getFollowerCountById().validate(
      { collectionType, collectionId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getFollowerCountById"],
        params: { collectionType, collectionId },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.collectionType] - Type of collection, i.e. products,
   *   brands, collections.
   * @returns {Promise<FollowIdsResponse>} - Success response
   * @summary: Get the IDs of followed products, brands and collections.
   * @description: You can get the IDs of all the followed Products, Brands and Collections. Pass collection_type as query parameter to fetch specific Ids
   */
  getFollowIds({ collectionType } = {}) {
    const { error } = CatalogValidator.getFollowIds().validate(
      { collectionType },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["collection_type"] = collectionType;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getFollowIds"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results.
   * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
   * @param {string} [arg.q] - Search a store by its name or store_code.
   * @param {string} [arg.city] - Search stores by the city in which they are situated.
   * @param {number} [arg.range] - Use this to retrieve stores within a
   *   particular range in meters, e.g. 10000, to indicate a 10km range
   * @param {number} [arg.latitude] - Latitude of the location from where one
   *   wants to retreive the nearest stores, e.g. 72.8691788
   * @param {number} [arg.longitude] - Longitude of the location from where
   *   one wants to retreive the nearest stores, e.g. 19.1174114
   * @returns {Promise<StoreListingResponse>} - Success response
   * @summary: Get store meta information.
   * @description: Use this API to get a list of stores in a specific application.
   */
  getStores({ pageNo, pageSize, q, city, range, latitude, longitude } = {}) {
    const { error } = CatalogValidator.getStores().validate(
      { pageNo, pageSize, q, city, range, latitude, longitude },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["q"] = q;
    query_params["city"] = city;
    query_params["range"] = range;
    query_params["latitude"] = latitude;
    query_params["longitude"] = longitude;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getStores"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
   * @param {string} [arg.q] - Search a store by its name or store_code.
   * @param {string} [arg.city] - Search stores by the city in which they are situated.
   * @param {number} [arg.range] - Use this to retrieve stores within a
   *   particular range in meters, e.g. 10000, to indicate a 10km range
   * @param {number} [arg.latitude] - Latitude of the location from where one
   *   wants to retreive the nearest stores, e.g. 72.8691788
   * @param {number} [arg.longitude] - Longitude of the location from where
   *   one wants to retreive the nearest stores, e.g. 19.1174114
   * @summary: Get store meta information.
   * @description: Use this API to get a list of stores in a specific application.
   */
  getStoresPaginator({ pageSize, q, city, range, latitude, longitude } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getStores({
        pageNo: pageNo,
        pageSize: pageSize,
        q: q,
        city: city,
        range: range,
        latitude: latitude,
        longitude: longitude,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results.
   * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
   * @param {string} [arg.q] - Search a store by its name or store_code.
   * @param {string} [arg.city] - Search stores by the city in which they are situated.
   * @param {number} [arg.range] - Use this to retrieve stores within a
   *   particular range in meters, e.g. 10000, to indicate a 10km range
   * @param {number} [arg.latitude] - Latitude of the location from where one
   *   wants to retreive the nearest stores, e.g. 72.8691788
   * @param {number} [arg.longitude] - Longitude of the location from where
   *   one wants to retreive the nearest stores, e.g. 19.1174114
   * @returns {Promise<ApplicationStoreListing>} - Success response
   * @summary: Get store meta information.
   * @description: Use this API to get a list of stores in a specific application.
   */
  getInStockLocations({
    pageNo,
    pageSize,
    q,
    city,
    range,
    latitude,
    longitude,
  } = {}) {
    const { error } = CatalogValidator.getInStockLocations().validate(
      { pageNo, pageSize, q, city, range, latitude, longitude },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["q"] = q;
    query_params["city"] = city;
    query_params["range"] = range;
    query_params["latitude"] = latitude;
    query_params["longitude"] = longitude;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getInStockLocations"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
   * @param {string} [arg.q] - Search a store by its name or store_code.
   * @param {string} [arg.city] - Search stores by the city in which they are situated.
   * @param {number} [arg.range] - Use this to retrieve stores within a
   *   particular range in meters, e.g. 10000, to indicate a 10km range
   * @param {number} [arg.latitude] - Latitude of the location from where one
   *   wants to retreive the nearest stores, e.g. 72.8691788
   * @param {number} [arg.longitude] - Longitude of the location from where
   *   one wants to retreive the nearest stores, e.g. 19.1174114
   * @summary: Get store meta information.
   * @description: Use this API to get a list of stores in a specific application.
   */
  getInStockLocationsPaginator({
    pageSize,
    q,
    city,
    range,
    latitude,
    longitude,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getInStockLocations({
        pageNo: pageNo,
        pageSize: pageSize,
        q: q,
        city: city,
        range: range,
        latitude: latitude,
        longitude: longitude,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} arg.locationId - Unique Location ID.
   * @returns {Promise<StoreDetails>} - Success response
   * @summary: Get store meta information.
   * @description: Use this API to get meta details for a store.
   */
  getLocationDetailsById({ locationId } = {}) {
    const { error } = CatalogValidator.getLocationDetailsById().validate(
      { locationId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getLocationDetailsById"],
        params: { locationId },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.slug] - Product slug for which bundles need to be fetched.
   * @param {string} [arg.id] - Product uid
   * @returns {Promise<ProductBundle>} - Success response
   * @summary: Get product bundles
   * @description: Use this API to retrieve products bundles to the one specified by its slug.
   */
  getProductBundlesBySlug({ slug, id } = {}) {
    const { error } = CatalogValidator.getProductBundlesBySlug().validate(
      { slug, id },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["slug"] = slug;
    query_params["id"] = id;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getProductBundlesBySlug"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a product. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/products/
   * @param {string} arg.size - A string indicating the size of the product,
   *   e.g. S, M, XL. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/products/sizes
   * @param {number} [arg.storeId] - The ID of the store that is selling the
   *   product, e.g. 1,2,3.
   * @param {string} [arg.pincode] - The PIN Code of the area near which the
   *   selling locations should be searched, e.g. 400059.
   * @returns {Promise<ProductSizePriceResponseV2>} - Success response
   * @summary: Get the price of a product size at a PIN Code
   * @description: Prices may vary for different sizes of a product. Use this API to retrieve the price of a product size at all the selling locations near to a PIN Code.
   */
  getProductPriceBySlug({ slug, size, storeId, pincode } = {}) {
    const { error } = CatalogValidator.getProductPriceBySlug().validate(
      { slug, size, storeId, pincode },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["store_id"] = storeId;
    query_params["pincode"] = pincode;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getProductPriceBySlug"],
        params: { slug, size },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a product. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/products/
   * @param {string} arg.size - A string indicating the size of the product,
   *   e.g. S, M, XL. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/products/sizes
   * @param {string} [arg.pincode] - The 6-digit PIN Code of the area near
   *   which the selling locations should be searched, e.g. 400059
   * @param {string} [arg.strategy] - Sort stores on the basis of strategy.
   *   eg, fast-delivery, low-price, optimal.
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @returns {Promise<ProductSizeSellersResponseV2>} - Success response
   * @summary: Get the sellers of a product size at a PIN Code
   * @description: A product of a particular size may be sold by multiple sellers. Use this API to fetch the sellers having the stock of a particular size at a given PIN Code.
   */
  getProductSellersBySlug({
    slug,
    size,
    pincode,
    strategy,
    pageNo,
    pageSize,
  } = {}) {
    const { error } = CatalogValidator.getProductSellersBySlug().validate(
      { slug, size, pincode, strategy, pageNo, pageSize },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["pincode"] = pincode;
    query_params["strategy"] = strategy;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getProductSellersBySlug"],
        params: { slug, size },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a product. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/products/
   * @param {string} arg.size - A string indicating the size of the product,
   *   e.g. S, M, XL. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/products/sizes
   * @param {string} [arg.pincode] - The 6-digit PIN Code of the area near
   *   which the selling locations should be searched, e.g. 400059
   * @param {string} [arg.strategy] - Sort stores on the basis of strategy.
   *   eg, fast-delivery, low-price, optimal.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @summary: Get the sellers of a product size at a PIN Code
   * @description: A product of a particular size may be sold by multiple sellers. Use this API to fetch the sellers having the stock of a particular size at a given PIN Code.
   */
  getProductSellersBySlugPaginator({
    slug,
    size,
    pincode,
    strategy,
    pageSize,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getProductSellersBySlug({
        slug: slug,
        size: size,
        pincode: pincode,
        strategy: strategy,
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }
}

class Cart {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      getCart: "/service/application/cart/v1.0/detail",
      getCartLastModified: "/service/application/cart/v1.0/detail",
      addItems: "/service/application/cart/v1.0/detail",
      updateCart: "/service/application/cart/v1.0/detail",
      getItemCount: "/service/application/cart/v1.0/basic",
      getCoupons: "/service/application/cart/v1.0/coupon",
      applyCoupon: "/service/application/cart/v1.0/coupon",
      removeCoupon: "/service/application/cart/v1.0/coupon",
      getBulkDiscountOffers: "/service/application/cart/v1.0/bulk-price",
      applyRewardPoints: "/service/application/cart/v1.0/redeem/points/",
      getAddresses: "/service/application/cart/v1.0/address",
      addAddress: "/service/application/cart/v1.0/address",
      getAddressById: "/service/application/cart/v1.0/address/{id}",
      updateAddress: "/service/application/cart/v1.0/address/{id}",
      removeAddress: "/service/application/cart/v1.0/address/{id}",
      selectAddress: "/service/application/cart/v1.0/select-address",
      selectPaymentMode: "/service/application/cart/v1.0/payment",
      validateCouponForPayment:
        "/service/application/cart/v1.0/payment/validate/",
      getShipments: "/service/application/cart/v1.0/shipment",
      checkoutCart: "/service/application/cart/v1.0/checkout",
      updateCartMeta: "/service/application/cart/v1.0/meta",
      getCartShareLink: "/service/application/cart/v1.0/share-cart",
      getCartSharedItems: "/service/application/cart/v1.0/share-cart/{token}",
      updateCartWithSharedItems:
        "/service/application/cart/v1.0/share-cart/{token}/{action}",
      getPromotionOffers: "/service/application/cart/v1.0/available-promotions",
      getLadderOffers: "/service/application/cart/v1.0/available-ladder-prices",
    };
    this._urls = Object.entries(this._relativeUrls).reduce(
      (urls, [method, relativeUrl]) => {
        urls[method] = `${_conf.domain}${relativeUrl}`;
        return urls;
      },
      {}
    );
  }

  updateUrls(urls) {
    this._urls = {
      ...this._urls,
      ...urls,
    };
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.id] -
   * @param {boolean} [arg.i] -
   * @param {boolean} [arg.b] -
   * @param {number} [arg.assignCardId] -
   * @param {boolean} [arg.buyNow] -
   * @returns {Promise<CartDetailResponse>} - Success response
   * @summary: Fetch all items added to the cart
   * @description: Use this API to get details of all the items added to a cart.
   */
  getCart({ id, i, b, assignCardId, buyNow } = {}) {
    const { error } = CartValidator.getCart().validate(
      { id, i, b, assignCardId, buyNow },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["id"] = id;
    query_params["i"] = i;
    query_params["b"] = b;
    query_params["assign_card_id"] = assignCardId;
    query_params["buy_now"] = buyNow;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getCart"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.id] -
   * @returns {Promise<any>} - Success response
   * @summary: Fetch last-modified timestamp
   * @description: Use this API to fetch Last-Modified timestamp in header metadata.
   */
  getCartLastModified({ id } = {}) {
    const { error } = CartValidator.getCartLastModified().validate(
      { id },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["id"] = id;

    return APIClient.execute(
      this._conf,
      "head",
      constructUrl({
        url: this._urls["getCartLastModified"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {boolean} [arg.i] -
   * @param {boolean} [arg.b] -
   * @param {boolean} [arg.buyNow] -
   * @param {AddCartRequest} arg.body
   * @returns {Promise<AddCartDetailResponse>} - Success response
   * @summary: Add items to cart
   * @description: Use this API to add items to the cart.
   */
  addItems({ body, i, b, buyNow } = {}) {
    const { error } = CartValidator.addItems().validate(
      { body, i, b, buyNow },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["i"] = i;
    query_params["b"] = b;
    query_params["buy_now"] = buyNow;

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["addItems"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.id] -
   * @param {boolean} [arg.i] -
   * @param {boolean} [arg.b] -
   * @param {boolean} [arg.buyNow] -
   * @param {UpdateCartRequest} arg.body
   * @returns {Promise<UpdateCartDetailResponse>} - Success response
   * @summary: Update items in the cart
   * @description: <p>Use this API to update items added to the cart with the help of a request object containing attributes like item_quantity and item_size. These attributes will be fetched from the following APIs</p> <ul> <li><font color="monochrome">operation</font> Operation for current api call. <b>update_item</b> for update items. <b>remove_item</b> for removing items.</li> <li> <font color="monochrome">item_id</font>  "/platform/content/v1/products/"</li> <li> <font color="monochrome">item_size</font>   "/platform/content/v1/products/:slug/sizes/"</li> <li> <font color="monochrome">quantity</font>  item quantity (must be greater than or equal to 1)</li> <li> <font color="monochrome">article_id</font>   "/content​/v1​/products​/:identifier​/sizes​/price​/"</li> <li> <font color="monochrome">item_index</font>  item position in the cart (must be greater than or equal to 0)</li> </ul>
   */
  updateCart({ body, id, i, b, buyNow } = {}) {
    const { error } = CartValidator.updateCart().validate(
      { body, id, i, b, buyNow },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["id"] = id;
    query_params["i"] = i;
    query_params["b"] = b;
    query_params["buy_now"] = buyNow;

    return APIClient.execute(
      this._conf,
      "put",
      constructUrl({
        url: this._urls["updateCart"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.id] - The unique identifier of the cart.
   * @param {boolean} [arg.buyNow] -
   * @returns {Promise<CartItemCountResponse>} - Success response
   * @summary: Count items in the cart
   * @description: Use this API to get the total number of items present in cart.
   */
  getItemCount({ id, buyNow } = {}) {
    const { error } = CartValidator.getItemCount().validate(
      { id, buyNow },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["id"] = id;
    query_params["buy_now"] = buyNow;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getItemCount"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.id] -
   * @param {boolean} [arg.buyNow] -
   * @returns {Promise<GetCouponResponse>} - Success response
   * @summary: Fetch Coupon
   * @description: Use this API to get a list of available coupons along with their details.
   */
  getCoupons({ id, buyNow } = {}) {
    const { error } = CartValidator.getCoupons().validate(
      { id, buyNow },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["id"] = id;
    query_params["buy_now"] = buyNow;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getCoupons"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {boolean} [arg.i] -
   * @param {boolean} [arg.b] -
   * @param {boolean} [arg.p] -
   * @param {string} [arg.id] -
   * @param {boolean} [arg.buyNow] -
   * @param {ApplyCouponRequest} arg.body
   * @returns {Promise<CartDetailResponse>} - Success response
   * @summary: Apply Coupon
   * @description: Use this API to apply coupons on items in the cart.
   */
  applyCoupon({ body, i, b, p, id, buyNow } = {}) {
    const { error } = CartValidator.applyCoupon().validate(
      { body, i, b, p, id, buyNow },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["i"] = i;
    query_params["b"] = b;
    query_params["p"] = p;
    query_params["id"] = id;
    query_params["buy_now"] = buyNow;

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["applyCoupon"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.id] -
   * @param {boolean} [arg.buyNow] -
   * @returns {Promise<CartDetailResponse>} - Success response
   * @summary: Remove Coupon Applied
   * @description: Remove Coupon applied on the cart by passing uid in request body.
   */
  removeCoupon({ id, buyNow } = {}) {
    const { error } = CartValidator.removeCoupon().validate(
      { id, buyNow },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["id"] = id;
    query_params["buy_now"] = buyNow;

    return APIClient.execute(
      this._conf,
      "delete",
      constructUrl({
        url: this._urls["removeCoupon"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.itemId] - The Item ID of the product
   * @param {string} [arg.articleId] - Article Mongo ID
   * @param {number} [arg.uid] - UID of the product
   * @param {string} [arg.slug] - A short, human-readable, URL-friendly
   *   identifier of a product. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/products/
   * @returns {Promise<BulkPriceResponse>} - Success response
   * @summary: Get discount offers based on quantity
   * @description: Use this API to get a list of applicable offers along with current, next and best offer for given product. Either one of uid, item_id, slug should be present.
   */
  getBulkDiscountOffers({ itemId, articleId, uid, slug } = {}) {
    const { error } = CartValidator.getBulkDiscountOffers().validate(
      { itemId, articleId, uid, slug },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["item_id"] = itemId;
    query_params["article_id"] = articleId;
    query_params["uid"] = uid;
    query_params["slug"] = slug;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getBulkDiscountOffers"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.id] -
   * @param {boolean} [arg.i] -
   * @param {boolean} [arg.b] -
   * @param {boolean} [arg.buyNow] -
   * @param {RewardPointRequest} arg.body
   * @returns {Promise<CartDetailResponse>} - Success response
   * @summary: Apply reward points at cart
   * @description: Use this API to redeem a fixed no. of reward points by applying it to the cart.
   */
  applyRewardPoints({ body, id, i, b, buyNow } = {}) {
    const { error } = CartValidator.applyRewardPoints().validate(
      { body, id, i, b, buyNow },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["id"] = id;
    query_params["i"] = i;
    query_params["b"] = b;
    query_params["buy_now"] = buyNow;

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["applyRewardPoints"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.cartId] -
   * @param {boolean} [arg.buyNow] -
   * @param {string} [arg.mobileNo] -
   * @param {string} [arg.checkoutMode] -
   * @param {string} [arg.tags] -
   * @param {boolean} [arg.isDefault] -
   * @returns {Promise<GetAddressesResponse>} - Success response
   * @summary: Fetch address
   * @description: Use this API to get all the addresses associated with an account. If successful, returns a Address resource in the response body specified in GetAddressesResponse.attibutes listed below are optional <ul> <li> <font color="monochrome">uid</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
   */
  getAddresses({
    cartId,
    buyNow,
    mobileNo,
    checkoutMode,
    tags,
    isDefault,
  } = {}) {
    const { error } = CartValidator.getAddresses().validate(
      { cartId, buyNow, mobileNo, checkoutMode, tags, isDefault },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["cart_id"] = cartId;
    query_params["buy_now"] = buyNow;
    query_params["mobile_no"] = mobileNo;
    query_params["checkout_mode"] = checkoutMode;
    query_params["tags"] = tags;
    query_params["is_default"] = isDefault;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getAddresses"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {Address} arg.body
   * @returns {Promise<SaveAddressResponse>} - Success response
   * @summary: Add address to an account
   * @description: Use this API to add an address to an account.
   */
  addAddress({ body } = {}) {
    const { error } = CartValidator.addAddress().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["addAddress"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id -
   * @param {string} [arg.cartId] -
   * @param {boolean} [arg.buyNow] -
   * @param {string} [arg.mobileNo] -
   * @param {string} [arg.checkoutMode] -
   * @param {string} [arg.tags] -
   * @param {boolean} [arg.isDefault] -
   * @returns {Promise<Address>} - Success response
   * @summary: Fetch a single address by its ID
   * @description: Use this API to get an addresses using its ID. If successful, returns a Address resource in the response body specified in `Address`. Attibutes listed below are optional <ul> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
   */
  getAddressById({
    id,
    cartId,
    buyNow,
    mobileNo,
    checkoutMode,
    tags,
    isDefault,
  } = {}) {
    const { error } = CartValidator.getAddressById().validate(
      { id, cartId, buyNow, mobileNo, checkoutMode, tags, isDefault },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["cart_id"] = cartId;
    query_params["buy_now"] = buyNow;
    query_params["mobile_no"] = mobileNo;
    query_params["checkout_mode"] = checkoutMode;
    query_params["tags"] = tags;
    query_params["is_default"] = isDefault;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getAddressById"],
        params: { id },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - ID allotted to the selected address
   * @param {Address} arg.body
   * @returns {Promise<UpdateAddressResponse>} - Success response
   * @summary: Update address added to an account
   * @description: <p>Use this API to update an existing address in the account. Request object should contain attributes mentioned in  <font color="blue">Address </font> can be updated. These attributes are:</p> <ul> <li> <font color="monochrome">is_default_address</font></li> <li> <font color="monochrome">landmark</font></li> <li> <font color="monochrome">area</font></li> <li> <font color="monochrome">pincode</font></li> <li> <font color="monochrome">email</font></li> <li> <font color="monochrome">address_type</font></li> <li> <font color="monochrome">name</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">address</font></li> </ul>
   */
  updateAddress({ id, body } = {}) {
    const { error } = CartValidator.updateAddress().validate(
      { id, body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "put",
      constructUrl({
        url: this._urls["updateAddress"],
        params: { id },
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - ID allotted to the selected address
   * @returns {Promise<DeleteAddressResponse>} - Success response
   * @summary: Remove address associated with an account
   * @description: Use this API to delete an address by its ID. This will returns an object that will indicate whether the address was deleted successfully or not.
   */
  removeAddress({ id } = {}) {
    const { error } = CartValidator.removeAddress().validate(
      { id },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "delete",
      constructUrl({
        url: this._urls["removeAddress"],
        params: { id },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.cartId] -
   * @param {boolean} [arg.buyNow] -
   * @param {boolean} [arg.i] -
   * @param {boolean} [arg.b] -
   * @param {SelectCartAddressRequest} arg.body
   * @returns {Promise<CartDetailResponse>} - Success response
   * @summary: Select an address from available addresses
   * @description: <p>Select Address from all addresses associated with the account in order to ship the cart items to that address, otherwise default address will be selected implicitly. See `SelectCartAddressRequest` in schema of request body for the list of attributes needed to select Address from account. On successful request, this API returns a Cart object. Below address attributes are required. <ul> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">billing_address_id</font></li> <li> <font color="monochrome">uid</font></li> </ul></p>
   */
  selectAddress({ body, cartId, buyNow, i, b } = {}) {
    const { error } = CartValidator.selectAddress().validate(
      { body, cartId, buyNow, i, b },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["cart_id"] = cartId;
    query_params["buy_now"] = buyNow;
    query_params["i"] = i;
    query_params["b"] = b;

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["selectAddress"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.id] -
   * @param {boolean} [arg.buyNow] -
   * @param {UpdateCartPaymentRequest} arg.body
   * @returns {Promise<CartDetailResponse>} - Success response
   * @summary: Update cart payment
   * @description: Use this API to update cart payment.
   */
  selectPaymentMode({ body, id, buyNow } = {}) {
    const { error } = CartValidator.selectPaymentMode().validate(
      { body, id, buyNow },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["id"] = id;
    query_params["buy_now"] = buyNow;

    return APIClient.execute(
      this._conf,
      "put",
      constructUrl({
        url: this._urls["selectPaymentMode"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.id] -
   * @param {boolean} [arg.buyNow] -
   * @param {string} [arg.addressId] -
   * @param {string} [arg.paymentMode] -
   * @param {string} [arg.paymentIdentifier] -
   * @param {string} [arg.aggregatorName] -
   * @param {string} [arg.merchantCode] -
   * @returns {Promise<PaymentCouponValidate>} - Success response
   * @summary: Verify the coupon eligibility against the payment mode
   * @description: Use this API to validate a coupon against the payment mode such as NetBanking, Wallet, UPI etc.
   */
  validateCouponForPayment({
    id,
    buyNow,
    addressId,
    paymentMode,
    paymentIdentifier,
    aggregatorName,
    merchantCode,
  } = {}) {
    const { error } = CartValidator.validateCouponForPayment().validate(
      {
        id,
        buyNow,
        addressId,
        paymentMode,
        paymentIdentifier,
        aggregatorName,
        merchantCode,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["id"] = id;
    query_params["buy_now"] = buyNow;
    query_params["address_id"] = addressId;
    query_params["payment_mode"] = paymentMode;
    query_params["payment_identifier"] = paymentIdentifier;
    query_params["aggregator_name"] = aggregatorName;
    query_params["merchant_code"] = merchantCode;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["validateCouponForPayment"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {boolean} [arg.p] - This is a boolean value. Select `true` for
   *   getting a payment option in response.
   * @param {string} [arg.id] - The unique identifier of the cart
   * @param {boolean} [arg.buyNow] -
   * @param {string} [arg.addressId] - ID allotted to the selected address
   * @param {string} [arg.areaCode] - The PIN Code of the destination address,
   *   e.g. 400059
   * @returns {Promise<CartShipmentsResponse>} - Success response
   * @summary: Get delivery date and options before checkout
   * @description: Use this API to get shipment details, expected delivery date, items and price breakup of the shipment.
   */
  getShipments({ p, id, buyNow, addressId, areaCode } = {}) {
    const { error } = CartValidator.getShipments().validate(
      { p, id, buyNow, addressId, areaCode },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["p"] = p;
    query_params["id"] = id;
    query_params["buy_now"] = buyNow;
    query_params["address_id"] = addressId;
    query_params["area_code"] = areaCode;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getShipments"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CartCheckoutDetailRequest} arg.body
   * @returns {Promise<CartCheckoutResponse>} - Success response
   * @summary: Checkout all items in the cart
   * @description: Use this API to checkout all items in the cart for payment and order generation. For COD, order will be directly generated, whereas for other checkout modes, user will be redirected to a payment gateway.
   */
  checkoutCart({ body } = {}) {
    const { error } = CartValidator.checkoutCart().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["checkoutCart"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.id] -
   * @param {boolean} [arg.buyNow] -
   * @param {CartMetaRequest} arg.body
   * @returns {Promise<CartMetaResponse>} - Success response
   * @summary: Update the cart meta
   * @description: Use this API to update cart meta like checkout_mode and gstin.
   */
  updateCartMeta({ body, id, buyNow } = {}) {
    const { error } = CartValidator.updateCartMeta().validate(
      { body, id, buyNow },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["id"] = id;
    query_params["buy_now"] = buyNow;

    return APIClient.execute(
      this._conf,
      "put",
      constructUrl({
        url: this._urls["updateCartMeta"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {GetShareCartLinkRequest} arg.body
   * @returns {Promise<GetShareCartLinkResponse>} - Success response
   * @summary: Generate token for sharing the cart
   * @description: Use this API to generate a shared cart snapshot and return a shortlink token. The link can be shared with other users for getting the same items in their cart.
   */
  getCartShareLink({ body } = {}) {
    const { error } = CartValidator.getCartShareLink().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["getCartShareLink"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.token - Token of the shared short link
   * @returns {Promise<SharedCartResponse>} - Success response
   * @summary: Get details of a shared cart
   * @description: Use this API to get the shared cart details as per the token generated using the share-cart API.
   */
  getCartSharedItems({ token } = {}) {
    const { error } = CartValidator.getCartSharedItems().validate(
      { token },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getCartSharedItems"],
        params: { token },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.token - Token of the shared short link
   * @param {string} arg.action - Operation to perform on the existing cart
   *   merge or replace.
   * @returns {Promise<SharedCartResponse>} - Success response
   * @summary: Merge or replace existing cart
   * @description: Use this API to merge the shared cart with existing cart, or replace the existing cart with the shared cart. The `action` parameter is used to indicate the operation Merge or Replace.
   */
  updateCartWithSharedItems({ token, action } = {}) {
    const { error } = CartValidator.updateCartWithSharedItems().validate(
      { token, action },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["updateCartWithSharedItems"],
        params: { token, action },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.slug] - A short, human-readable, URL-friendly
   *   identifier of a product. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/products/
   * @param {number} [arg.pageSize] - Number of offers to be fetched to show
   * @param {string} [arg.promotionGroup] - Type of promotion groups
   * @returns {Promise<PromotionOffersResponse>} - Success response
   * @summary: Fetch available promotions
   * @description: Use this API to get top 5 offers available for current product
   */
  getPromotionOffers({ slug, pageSize, promotionGroup } = {}) {
    const { error } = CartValidator.getPromotionOffers().validate(
      { slug, pageSize, promotionGroup },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["slug"] = slug;
    query_params["page_size"] = pageSize;
    query_params["promotion_group"] = promotionGroup;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getPromotionOffers"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a product. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/products/
   * @param {string} [arg.storeId] - Store uid of assigned store on PDP page.
   *   If not passed default first created ladder will be returned
   * @param {string} [arg.promotionId] - Get ladder information of given
   *   promotion id explicitely
   * @param {number} [arg.pageSize] - Number of offers to be fetched to show
   * @returns {Promise<LadderPriceOffers>} - Success response
   * @summary: Fetch ladder price promotion
   * @description: Use this API to get applicable ladder price promotion for current product
   */
  getLadderOffers({ slug, storeId, promotionId, pageSize } = {}) {
    const { error } = CartValidator.getLadderOffers().validate(
      { slug, storeId, promotionId, pageSize },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["slug"] = slug;
    query_params["store_id"] = storeId;
    query_params["promotion_id"] = promotionId;
    query_params["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getLadderOffers"],
        params: {},
      }),
      query_params,
      undefined
    );
  }
}

class Common {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      searchApplication:
        "/service/common/configuration/v1.0/application/search-application",
      getLocations: "/service/common/configuration/v1.0/location",
    };
    this._urls = Object.entries(this._relativeUrls).reduce(
      (urls, [method, relativeUrl]) => {
        urls[method] = `${_conf.domain}${relativeUrl}`;
        return urls;
      },
      {}
    );
  }

  updateUrls(urls) {
    this._urls = {
      ...this._urls,
      ...urls,
    };
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.authorization] -
   * @param {string} [arg.query] - Provide application name
   * @returns {Promise<ApplicationResponse>} - Success response
   * @summary: Search Application
   * @description: Provide application name or domain url
   */
  searchApplication({ authorization, query } = {}) {
    const { error } = CommonValidator.searchApplication().validate(
      { authorization, query },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["query"] = query;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["searchApplication"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.locationType] - Provide location type to query on.
   *   Possible values : country, state, city
   * @param {string} [arg.id] - Field is optional when location_type is
   *   country. If querying for state, provide id of country. If querying for
   *   city, provide id of state.
   * @returns {Promise<Locations>} - Success response
   * @summary: Get countries, states, cities
   * @description:
   */
  getLocations({ locationType, id } = {}) {
    const { error } = CommonValidator.getLocations().validate(
      { locationType, id },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["location_type"] = locationType;
    query_params["id"] = id;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getLocations"],
        params: {},
      }),
      query_params,
      undefined
    );
  }
}

class Lead {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      getTicket: "/service/application/lead/v1.0/ticket/{id}",
      createHistory: "/service/application/lead/v1.0/ticket/{id}/history",
      createTicket: "/service/application/lead/v1.0/ticket/",
      getCustomForm: "/service/application/lead/v1.0/form/{slug}",
      submitCustomForm: "/service/application/lead/v1.0/form/{slug}/submit",
      getParticipantsInsideVideoRoom:
        "/service/application/lead/v1.0/video/room/{unique_name}/participants",
      getTokenForVideoRoom:
        "/service/application/lead/v1.0/video/room/{unique_name}/token",
    };
    this._urls = Object.entries(this._relativeUrls).reduce(
      (urls, [method, relativeUrl]) => {
        urls[method] = `${_conf.domain}${relativeUrl}`;
        return urls;
      },
      {}
    );
  }

  updateUrls(urls) {
    this._urls = {
      ...this._urls,
      ...urls,
    };
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - ID of ticket to be retrieved
   * @returns {Promise<Ticket>} - Success response
   * @summary: Get Ticket with the specific id
   * @description: Get Ticket with the specific id, this is used to view the ticket details
   */
  getTicket({ id } = {}) {
    const { error } = LeadValidator.getTicket().validate(
      { id },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getTicket"],
        params: { id },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Ticket ID for which history is created
   * @param {TicketHistoryPayload} arg.body
   * @returns {Promise<TicketHistory>} - Success response
   * @summary: Create history for specific Ticket
   * @description: Create history for specific Ticket, this history is seen on ticket detail page, this can be comment, log or rating.
   */
  createHistory({ id, body } = {}) {
    const { error } = LeadValidator.createHistory().validate(
      { id, body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["createHistory"],
        params: { id },
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {AddTicketPayload} arg.body
   * @returns {Promise<Ticket>} - Success response
   * @summary: Create Ticket
   * @description: This is used to Create Ticket.
   */
  createTicket({ body } = {}) {
    const { error } = LeadValidator.createTicket().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["createTicket"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - Slug of form whose response is getting submitted
   * @returns {Promise<CustomForm>} - Success response
   * @summary: Get specific Custom Form using it's slug
   * @description: Get specific Custom Form using it's slug, this is used to view the form.
   */
  getCustomForm({ slug } = {}) {
    const { error } = LeadValidator.getCustomForm().validate(
      { slug },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getCustomForm"],
        params: { slug },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - Slug of form whose response is getting submitted
   * @param {CustomFormSubmissionPayload} arg.body
   * @returns {Promise<SubmitCustomFormResponse>} - Success response
   * @summary: Submit Response for a specific Custom Form using it's slug
   * @description: Submit Response for a specific Custom Form using it's slug, this response is then used to create a ticket on behalf of the user.
   */
  submitCustomForm({ slug, body } = {}) {
    const { error } = LeadValidator.submitCustomForm().validate(
      { slug, body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["submitCustomForm"],
        params: { slug },
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.uniqueName - Unique name of Video Room
   * @returns {Promise<GetParticipantsInsideVideoRoomResponse>} - Success response
   * @summary: Get participants of a specific Video Room using it's unique name
   * @description: Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names.
   */
  getParticipantsInsideVideoRoom({ uniqueName } = {}) {
    const { error } = LeadValidator.getParticipantsInsideVideoRoom().validate(
      { uniqueName },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getParticipantsInsideVideoRoom"],
        params: { uniqueName },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.uniqueName - Unique name of Video Room
   * @returns {Promise<GetTokenForVideoRoomResponse>} - Success response
   * @summary: Get Token to join a specific Video Room using it's unqiue name
   * @description: Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there.
   */
  getTokenForVideoRoom({ uniqueName } = {}) {
    const { error } = LeadValidator.getTokenForVideoRoom().validate(
      { uniqueName },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getTokenForVideoRoom"],
        params: { uniqueName },
      }),
      query_params,
      undefined
    );
  }
}

class Theme {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      getAllPages: "/service/application/theme/v1.0/{theme_id}/page",
      getPage: "/service/application/theme/v1.0/{theme_id}/{page_value}",
      getAppliedTheme: "/service/application/theme/v1.0/applied-theme",
      getThemeForPreview: "/service/application/theme/v1.0/{theme_id}/preview",
    };
    this._urls = Object.entries(this._relativeUrls).reduce(
      (urls, [method, relativeUrl]) => {
        urls[method] = `${_conf.domain}${relativeUrl}`;
        return urls;
      },
      {}
    );
  }

  updateUrls(urls) {
    this._urls = {
      ...this._urls,
      ...urls,
    };
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.themeId - ID of the theme to be retrieved
   * @returns {Promise<AllAvailablePageSchema>} - Success response
   * @summary: Get all pages of a theme
   * @description: Use this API to retrieve all the available pages of a theme by its ID.
   */
  getAllPages({ themeId } = {}) {
    const { error } = ThemeValidator.getAllPages().validate(
      { themeId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getAllPages"],
        params: { themeId },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.themeId - ID of the theme to be retrieved
   * @param {string} arg.pageValue - Value of the page to be retrieved
   * @returns {Promise<AvailablePageSchema>} - Success response
   * @summary: Get page of a theme
   * @description: Use this API to retrieve a page of a theme.
   */
  getPage({ themeId, pageValue } = {}) {
    const { error } = ThemeValidator.getPage().validate(
      { themeId, pageValue },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getPage"],
        params: { themeId, pageValue },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<ThemesSchema>} - Success response
   * @summary: Get the theme currently applied to an application
   * @description: An application has multiple themes, but only one theme can be applied at a time. Use this API to retrieve the theme currently applied to the application.
   */
  getAppliedTheme({} = {}) {
    const { error } = ThemeValidator.getAppliedTheme().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getAppliedTheme"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.themeId - ID of the theme to be retrieved
   * @returns {Promise<ThemesSchema>} - Success response
   * @summary: Get a theme for a preview
   * @description: A theme can be previewed before applying it. Use this API to retrieve the preview of a theme by its ID.
   */
  getThemeForPreview({ themeId } = {}) {
    const { error } = ThemeValidator.getThemeForPreview().validate(
      { themeId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getThemeForPreview"],
        params: { themeId },
      }),
      query_params,
      undefined
    );
  }
}

class User {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      loginWithFacebook:
        "/service/application/user/authentication/v1.0/login/facebook-token",
      loginWithGoogle:
        "/service/application/user/authentication/v1.0/login/google-token",
      loginWithGoogleAndroid:
        "/service/application/user/authentication/v1.0/login/google-android",
      loginWithGoogleIOS:
        "/service/application/user/authentication/v1.0/login/google-ios",
      loginWithAppleIOS:
        "/service/application/user/authentication/v1.0/login/apple-ios",
      loginWithOTP: "/service/application/user/authentication/v1.0/login/otp",
      loginWithEmailAndPassword:
        "/service/application/user/authentication/v1.0/login/password",
      sendResetPasswordEmail:
        "/service/application/user/authentication/v1.0/login/password/reset",
      forgotPassword:
        "/service/application/user/authentication/v1.0/login/password/reset/forgot",
      sendResetToken:
        "/service/application/user/authentication/v1.0/login/password/reset/token",
      loginWithToken:
        "/service/application/user/authentication/v1.0/login/token",
      registerWithForm:
        "/service/application/user/authentication/v1.0/register/form",
      verifyEmail: "/service/application/user/authentication/v1.0/verify/email",
      verifyMobile:
        "/service/application/user/authentication/v1.0/verify/mobile",
      hasPassword: "/service/application/user/authentication/v1.0/has-password",
      updatePassword: "/service/application/user/authentication/v1.0/password",
      logout: "/service/application/user/authentication/v1.0/logout",
      sendOTPOnMobile:
        "/service/application/user/authentication/v1.0/otp/mobile/send",
      verifyMobileOTP:
        "/service/application/user/authentication/v1.0/otp/mobile/verify",
      sendOTPOnEmail:
        "/service/application/user/authentication/v1.0/otp/email/send",
      verifyEmailOTP:
        "/service/application/user/authentication/v1.0/otp/email/verify",
      getLoggedInUser: "/service/application/user/authentication/v1.0/session",
      getListOfActiveSessions:
        "/service/application/user/authentication/v1.0/sessions",
      getPlatformConfig: "/service/application/user/platform/v1.0/config",
      updateProfile: "/service/application/user/profile/v1.0/detail",
      addMobileNumber: "/service/application/user/profile/v1.0/mobile",
      deleteMobileNumber: "/service/application/user/profile/v1.0/mobile",
      setMobileNumberAsPrimary:
        "/service/application/user/profile/v1.0/mobile/primary",
      sendVerificationLinkToMobile:
        "/service/application/user/profile/v1.0/mobile/link/send",
      addEmail: "/service/application/user/profile/v1.0/email",
      deleteEmail: "/service/application/user/profile/v1.0/email",
      setEmailAsPrimary: "/service/application/user/profile/v1.0/email/primary",
      sendVerificationLinkToEmail:
        "/service/application/user/profile/v1.0/email/link/send",
    };
    this._urls = Object.entries(this._relativeUrls).reduce(
      (urls, [method, relativeUrl]) => {
        urls[method] = `${_conf.domain}${relativeUrl}`;
        return urls;
      },
      {}
    );
  }

  updateUrls(urls) {
    this._urls = {
      ...this._urls,
      ...urls,
    };
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {OAuthRequestSchema} arg.body
   * @returns {Promise<AuthSuccess>} - Success response
   * @summary: Login or Register using Facebook
   * @description: Use this API to login or register using Facebook credentials.
   */
  loginWithFacebook({ body, platform } = {}) {
    const { error } = UserValidator.loginWithFacebook().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["loginWithFacebook"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {OAuthRequestSchema} arg.body
   * @returns {Promise<AuthSuccess>} - Success response
   * @summary: Login or Register using Google
   * @description: Use this API to login or register using Google Account credentials.
   */
  loginWithGoogle({ body, platform } = {}) {
    const { error } = UserValidator.loginWithGoogle().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["loginWithGoogle"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {OAuthRequestSchema} arg.body
   * @returns {Promise<AuthSuccess>} - Success response
   * @summary: Login or Register using Google on Android
   * @description: Use this API to login or register in Android app using Google Account credentials.
   */
  loginWithGoogleAndroid({ body, platform } = {}) {
    const { error } = UserValidator.loginWithGoogleAndroid().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["loginWithGoogleAndroid"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {OAuthRequestSchema} arg.body
   * @returns {Promise<AuthSuccess>} - Success response
   * @summary: Login or Register using Google on iOS
   * @description: Use this API to login or register in iOS app using Google Account credentials.
   */
  loginWithGoogleIOS({ body, platform } = {}) {
    const { error } = UserValidator.loginWithGoogleIOS().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["loginWithGoogleIOS"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {OAuthRequestAppleSchema} arg.body
   * @returns {Promise<AuthSuccess>} - Success response
   * @summary: Login or Register using Apple on iOS
   * @description: Use this API to login or register in iOS app using Apple Account credentials.
   */
  loginWithAppleIOS({ body, platform } = {}) {
    const { error } = UserValidator.loginWithAppleIOS().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["loginWithAppleIOS"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {SendOtpRequestSchema} arg.body
   * @returns {Promise<SendOtpResponse>} - Success response
   * @summary: Login or Register with OTP
   * @description: Use this API to login or register with a One-time Password (OTP) sent via Email or SMS.
   */
  loginWithOTP({ body, platform } = {}) {
    const { error } = UserValidator.loginWithOTP().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["loginWithOTP"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {PasswordLoginRequestSchema} arg.body
   * @returns {Promise<LoginSuccess>} - Success response
   * @summary: Login or Register with password
   * @description: Use this API to login or register using an email address and password.
   */
  loginWithEmailAndPassword({ body } = {}) {
    const { error } = UserValidator.loginWithEmailAndPassword().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["loginWithEmailAndPassword"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {SendResetPasswordEmailRequestSchema} arg.body
   * @returns {Promise<ResetPasswordSuccess>} - Success response
   * @summary: Reset Password
   * @description: Use this API to reset a password using the link sent on email.
   */
  sendResetPasswordEmail({ body, platform } = {}) {
    const { error } = UserValidator.sendResetPasswordEmail().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["sendResetPasswordEmail"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {ForgotPasswordRequestSchema} arg.body
   * @returns {Promise<LoginSuccess>} - Success response
   * @summary: Forgot Password
   * @description: Use this API to reset a password using the code sent on email or SMS.
   */
  forgotPassword({ body } = {}) {
    const { error } = UserValidator.forgotPassword().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["forgotPassword"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CodeRequestBodySchema} arg.body
   * @returns {Promise<ResetPasswordSuccess>} - Success response
   * @summary: Reset Password using token
   * @description: Use this API to send code to reset password.
   */
  sendResetToken({ body } = {}) {
    const { error } = UserValidator.sendResetToken().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["sendResetToken"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {TokenRequestBodySchema} arg.body
   * @returns {Promise<LoginSuccess>} - Success response
   * @summary: Login or Register with token
   * @description: Use this API to login or register using a token for authentication.
   */
  loginWithToken({ body } = {}) {
    const { error } = UserValidator.loginWithToken().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["loginWithToken"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {FormRegisterRequestSchema} arg.body
   * @returns {Promise<RegisterFormSuccess>} - Success response
   * @summary: Registration using a form
   * @description: Use this API to perform user registration by sending form data in the request body.
   */
  registerWithForm({ body, platform } = {}) {
    const { error } = UserValidator.registerWithForm().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["registerWithForm"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CodeRequestBodySchema} arg.body
   * @returns {Promise<VerifyEmailSuccess>} - Success response
   * @summary: Verify email
   * @description: Use this API to send a verification code to verify an email.
   */
  verifyEmail({ body } = {}) {
    const { error } = UserValidator.verifyEmail().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["verifyEmail"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CodeRequestBodySchema} arg.body
   * @returns {Promise<VerifyEmailSuccess>} - Success response
   * @summary: Verify mobile
   * @description: Use this API to send a verification code to verify a mobile number.
   */
  verifyMobile({ body } = {}) {
    const { error } = UserValidator.verifyMobile().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["verifyMobile"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<HasPasswordSuccess>} - Success response
   * @summary: Check password
   * @description: Use this API to check if user has created a password for login.
   */
  hasPassword({} = {}) {
    const { error } = UserValidator.hasPassword().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["hasPassword"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {UpdatePasswordRequestSchema} arg.body
   * @returns {Promise<VerifyEmailSuccess>} - Success response
   * @summary: Update user password
   * @description: Use this API to update the password.
   */
  updatePassword({ body } = {}) {
    const { error } = UserValidator.updatePassword().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["updatePassword"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<LogoutSuccess>} - Success response
   * @summary: Logs out currently logged in user
   * @description: Use this API to check to logout a user from the app.
   */
  logout({} = {}) {
    const { error } = UserValidator.logout().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["logout"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {SendMobileOtpRequestSchema} arg.body
   * @returns {Promise<OtpSuccess>} - Success response
   * @summary: Send OTP on mobile
   * @description: Use this API to send an OTP to a mobile number.
   */
  sendOTPOnMobile({ body, platform } = {}) {
    const { error } = UserValidator.sendOTPOnMobile().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["sendOTPOnMobile"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {VerifyOtpRequestSchema} arg.body
   * @returns {Promise<VerifyOtpSuccess>} - Success response
   * @summary: Verify OTP on mobile
   * @description: Use this API to verify the OTP received on a mobile number.
   */
  verifyMobileOTP({ body, platform } = {}) {
    const { error } = UserValidator.verifyMobileOTP().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["verifyMobileOTP"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {SendEmailOtpRequestSchema} arg.body
   * @returns {Promise<EmailOtpSuccess>} - Success response
   * @summary: Send OTP on email
   * @description: Use this API to send an OTP to an email ID.
   */
  sendOTPOnEmail({ body, platform } = {}) {
    const { error } = UserValidator.sendOTPOnEmail().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["sendOTPOnEmail"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {VerifyEmailOtpRequestSchema} arg.body
   * @returns {Promise<VerifyOtpSuccess>} - Success response
   * @summary: Verify OTP on email
   * @description: Use this API to verify the OTP received on an email ID.
   */
  verifyEmailOTP({ body, platform } = {}) {
    const { error } = UserValidator.verifyEmailOTP().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["verifyEmailOTP"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<UserObjectSchema>} - Success response
   * @summary: Get logged in user
   * @description: Use this API  to get the details of a logged in user.
   */
  getLoggedInUser({} = {}) {
    const { error } = UserValidator.getLoggedInUser().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getLoggedInUser"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<SessionListSuccess>} - Success response
   * @summary: Get list of sessions
   * @description: Use this API to retrieve all active sessions of a user.
   */
  getListOfActiveSessions({} = {}) {
    const { error } = UserValidator.getListOfActiveSessions().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getListOfActiveSessions"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.name] - Name of the application, e.g. Fynd
   * @returns {Promise<PlatformSchema>} - Success response
   * @summary: Get platform configurations
   * @description: Use this API to get all the platform configurations such as mobile image, desktop image, social logins, and all other text.
   */
  getPlatformConfig({ name } = {}) {
    const { error } = UserValidator.getPlatformConfig().validate(
      { name },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["name"] = name;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getPlatformConfig"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {EditProfileRequestSchema} arg.body
   * @returns {Promise<ProfileEditSuccess>} - Success response
   * @summary: Edit Profile Details
   * @description: Use this API to update details in the user profile. Details can be first name, last name, gender, email, phone number, or profile picture.
   */
  updateProfile({ body, platform } = {}) {
    const { error } = UserValidator.updateProfile().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["updateProfile"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {EditMobileRequestSchema} arg.body
   * @returns {Promise<VerifyMobileOTPSuccess>} - Success response
   * @summary: Add mobile number to profile
   * @description: Use this API to add a new mobile number to a profile.
   */
  addMobileNumber({ body, platform } = {}) {
    const { error } = UserValidator.addMobileNumber().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "put",
      constructUrl({
        url: this._urls["addMobileNumber"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {boolean} arg.active - This is a boolean value to check if mobile
   *   number is active 1.True - Number is active 2. False - Number is inactive
   * @param {boolean} arg.primary - This is a boolean value to check if mobile
   *   number is primary number (main number) 1. True - Number is primary 2.
   *   False - Number is not primary
   * @param {boolean} arg.verified - This is a boolean value to check if
   *   mobile number is verified 1. True - Number is verified 2.False - Number
   *   is not verified yet
   * @param {string} arg.countryCode - Country code of the phone number, e.g. 91
   * @param {string} arg.phone - Phone number
   * @returns {Promise<LoginSuccess>} - Success response
   * @summary: Delete mobile number from profile
   * @description: Use this API to delete a mobile number from a profile.
   */
  deleteMobileNumber({
    active,
    primary,
    verified,
    countryCode,
    phone,
    platform,
  } = {}) {
    const { error } = UserValidator.deleteMobileNumber().validate(
      { active, primary, verified, countryCode, phone, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["platform"] = platform;
    query_params["active"] = active;
    query_params["primary"] = primary;
    query_params["verified"] = verified;
    query_params["country_code"] = countryCode;
    query_params["phone"] = phone;

    return APIClient.execute(
      this._conf,
      "delete",
      constructUrl({
        url: this._urls["deleteMobileNumber"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {SendVerificationLinkMobileRequestSchema} arg.body
   * @returns {Promise<LoginSuccess>} - Success response
   * @summary: Set mobile as primary
   * @description: Use this API to set a mobile number as primary. Primary number is a verified number used for all future communications.
   */
  setMobileNumberAsPrimary({ body } = {}) {
    const { error } = UserValidator.setMobileNumberAsPrimary().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["setMobileNumberAsPrimary"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {SendVerificationLinkMobileRequestSchema} arg.body
   * @returns {Promise<SendMobileVerifyLinkSuccess>} - Success response
   * @summary: Send verification link to mobile
   * @description: Use this API to send a verification link to a mobile number
   */
  sendVerificationLinkToMobile({ body, platform } = {}) {
    const { error } = UserValidator.sendVerificationLinkToMobile().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["sendVerificationLinkToMobile"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {EditEmailRequestSchema} arg.body
   * @returns {Promise<VerifyEmailOTPSuccess>} - Success response
   * @summary: Add email to profile
   * @description: Use this API to add a new email address to a profile
   */
  addEmail({ body, platform } = {}) {
    const { error } = UserValidator.addEmail().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "put",
      constructUrl({
        url: this._urls["addEmail"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {boolean} arg.active - This is a boolean value to check if email
   *   ID is active 1. True - Email ID is active 2.False - Email ID is inactive
   * @param {boolean} arg.primary - This is a boolean value to check if email
   *   ID is primary (main email ID) 1. True - Email ID is primary 2.False -
   *   Email ID is not primary
   * @param {boolean} arg.verified - This is a boolean value to check if email
   *   ID is verified 1. True - Email ID is verified 2.False - Email ID is not
   *   verified yet
   * @param {string} arg.email - The email ID to delete
   * @returns {Promise<LoginSuccess>} - Success response
   * @summary: Delete email from profile
   * @description: Use this API to delete an email address from a profile
   */
  deleteEmail({ active, primary, verified, email, platform } = {}) {
    const { error } = UserValidator.deleteEmail().validate(
      { active, primary, verified, email, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["platform"] = platform;
    query_params["active"] = active;
    query_params["primary"] = primary;
    query_params["verified"] = verified;
    query_params["email"] = email;

    return APIClient.execute(
      this._conf,
      "delete",
      constructUrl({
        url: this._urls["deleteEmail"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {EditEmailRequestSchema} arg.body
   * @returns {Promise<LoginSuccess>} - Success response
   * @summary: Set email as primary
   * @description: Use this API to set an email address as primary. Primary email ID is a email address used for all future communications.
   */
  setEmailAsPrimary({ body } = {}) {
    const { error } = UserValidator.setEmailAsPrimary().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["setEmailAsPrimary"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {EditEmailRequestSchema} arg.body
   * @returns {Promise<SendEmailVerifyLinkSuccess>} - Success response
   * @summary: Send verification link to email
   * @description: Use this API to send verification link to an email address.
   */
  sendVerificationLinkToEmail({ body, platform } = {}) {
    const { error } = UserValidator.sendVerificationLinkToEmail().validate(
      { body, platform },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["sendVerificationLinkToEmail"],
        params: {},
      }),
      query_params,
      body
    );
  }
}

class Content {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      getAnnouncements: "/service/application/content/v1.0/announcements",
      getBlog: "/service/application/content/v1.0/blogs/{slug}",
      getBlogs: "/service/application/content/v1.0/blogs/",
      getDataLoaders: "/service/application/content/v1.0/data-loader",
      getFaqs: "/service/application/content/v1.0/faq",
      getFaqCategories: "/service/application/content/v1.0/faq/categories",
      getFaqBySlug: "/service/application/content/v1.0/faq/{slug}",
      getFaqCategoryBySlug:
        "/service/application/content/v1.0/faq/category/{slug}",
      getFaqsByCategorySlug:
        "/service/application/content/v1.0/faq/category/{slug}/faqs",
      getLandingPage: "/service/application/content/v1.0/landing-page",
      getLegalInformation: "/service/application/content/v1.0/legal",
      getNavigations: "/service/application/content/v1.0/navigations/",
      getSEOConfiguration: "/service/application/content/v1.0/seo",
      getSlideshows: "/service/application/content/v1.0/slideshow/",
      getSlideshow: "/service/application/content/v1.0/slideshow/{slug}",
      getSupportInformation: "/service/application/content/v1.0/support",
      getTags: "/service/application/content/v1.0/tags",
      getPage: "/service/application/content/v2.0/pages/{slug}",
      getPages: "/service/application/content/v2.0/pages/",
    };
    this._urls = Object.entries(this._relativeUrls).reduce(
      (urls, [method, relativeUrl]) => {
        urls[method] = `${_conf.domain}${relativeUrl}`;
        return urls;
      },
      {}
    );
  }

  updateUrls(urls) {
    this._urls = {
      ...this._urls,
      ...urls,
    };
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<AnnouncementsResponseSchema>} - Success response
   * @summary: Get live announcements
   * @description: Announcements are useful to highlight a message or information on top of a webpage. Use this API to retrieve live announcements. Get announcements on individual pages or for all pages.
   */
  getAnnouncements({} = {}) {
    const { error } = ContentValidator.getAnnouncements().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getAnnouncements"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a blog. You can get slug value from the endpoint
   *   /service/application/content/v1.0/blogs/.
   * @param {string} [arg.rootId] - ID given to the HTML element
   * @returns {Promise<BlogSchema>} - Success response
   * @summary: Get a blog
   * @description: Use this API to get the details of a blog using its slug. Details include the title, reading time, publish status, feature image, tags, author, etc.
   */
  getBlog({ slug, rootId } = {}) {
    const { error } = ContentValidator.getBlog().validate(
      { slug, rootId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["root_id"] = rootId;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getBlog"],
        params: { slug },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results. Default value is 1.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @returns {Promise<BlogGetResponse>} - Success response
   * @summary: Get a list of blogs
   * @description: Use this API to get all the blogs.
   */
  getBlogs({ pageNo, pageSize } = {}) {
    const { error } = ContentValidator.getBlogs().validate(
      { pageNo, pageSize },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getBlogs"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @summary: Get a list of blogs
   * @description: Use this API to get all the blogs.
   */
  getBlogsPaginator({ pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getBlogs({
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<DataLoadersSchema>} - Success response
   * @summary: Get the data loaders associated with an application
   * @description: Use this API to get all selected data loaders of the application in the form of tags.
   */
  getDataLoaders({} = {}) {
    const { error } = ContentValidator.getDataLoaders().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getDataLoaders"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<FaqResponseSchema>} - Success response
   * @summary: Get a list of FAQs
   * @description: Use this API to get a list of frequently asked questions. Users will benefit from it when facing any issue with the website.
   */
  getFaqs({} = {}) {
    const { error } = ContentValidator.getFaqs().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getFaqs"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<GetFaqCategoriesSchema>} - Success response
   * @summary: Get a list of FAQ categories
   * @description: FAQs can be divided into categories. Use this API to get a list of FAQ categories.
   */
  getFaqCategories({} = {}) {
    const { error } = ContentValidator.getFaqCategories().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getFaqCategories"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of an FAQ. You can get slug value from the endpoint
   *   /service/application/content/v1.0/faq.
   * @returns {Promise<FaqSchema>} - Success response
   * @summary: Get an FAQ
   * @description: Use this API to get a particular FAQ by its slug.
   */
  getFaqBySlug({ slug } = {}) {
    const { error } = ContentValidator.getFaqBySlug().validate(
      { slug },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getFaqBySlug"],
        params: { slug },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of an FAQ category. You can get slug value from the endpoint
   *   /service/application/content/v1.0/faq/categories.
   * @returns {Promise<GetFaqCategoryBySlugSchema>} - Success response
   * @summary: Get the FAQ category
   * @description: FAQs can be divided into categories. Use this API to get the category to which an FAQ belongs.
   */
  getFaqCategoryBySlug({ slug } = {}) {
    const { error } = ContentValidator.getFaqCategoryBySlug().validate(
      { slug },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getFaqCategoryBySlug"],
        params: { slug },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of an FAQ category. You can get slug value from the endpoint
   *   /service/application/content/v1.0/faq/categories.
   * @returns {Promise<GetFaqSchema>} - Success response
   * @summary: Get FAQs using the slug of FAQ category
   * @description: FAQs can be divided into categories. Use this API to get all the FAQs belonging to a category by using the category slug.
   */
  getFaqsByCategorySlug({ slug } = {}) {
    const { error } = ContentValidator.getFaqsByCategorySlug().validate(
      { slug },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getFaqsByCategorySlug"],
        params: { slug },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<LandingPageSchema>} - Success response
   * @summary: Get the landing page
   * @description: Landing page is the first page that a prospect lands upon while visiting a website. Use this API to fetch the details of a landing page.
   */
  getLandingPage({} = {}) {
    const { error } = ContentValidator.getLandingPage().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getLandingPage"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<ApplicationLegal>} - Success response
   * @summary: Get legal information
   * @description: Use this API to get the legal information of an application, which includes Privacy Policy, Terms and Conditions, Shipping Policy and FAQs regarding the usage of the application.
   */
  getLegalInformation({} = {}) {
    const { error } = ContentValidator.getLegalInformation().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getLegalInformation"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results. Default value is 1.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @returns {Promise<NavigationGetResponse>} - Success response
   * @summary: Get the navigation
   * @description: Use this API to fetch the navigations details which includes the items of the navigation pane. It also shows the links and sub-navigations.
   */
  getNavigations({ pageNo, pageSize } = {}) {
    const { error } = ContentValidator.getNavigations().validate(
      { pageNo, pageSize },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getNavigations"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @summary: Get the navigation
   * @description: Use this API to fetch the navigations details which includes the items of the navigation pane. It also shows the links and sub-navigations.
   */
  getNavigationsPaginator({ pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getNavigations({
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<SeoComponent>} - Success response
   * @summary: Get the SEO of an application
   * @description: Use this API to get the SEO details of an application, which includes a robot.txt, meta-tags and sitemap.
   */
  getSEOConfiguration({} = {}) {
    const { error } = ContentValidator.getSEOConfiguration().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getSEOConfiguration"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results. Default value is 1.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @returns {Promise<SlideshowGetResponse>} - Success response
   * @summary: Get the slideshows
   * @description: Use this API to get a list of slideshows along with their details.
   */
  getSlideshows({ pageNo, pageSize } = {}) {
    const { error } = ContentValidator.getSlideshows().validate(
      { pageNo, pageSize },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getSlideshows"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @summary: Get the slideshows
   * @description: Use this API to get a list of slideshows along with their details.
   */
  getSlideshowsPaginator({ pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getSlideshows({
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a slideshow. You can get slug value from the endpoint
   *   /service/application/content/v1.0/slideshow/.
   * @returns {Promise<SlideshowSchema>} - Success response
   * @summary: Get a slideshow
   * @description: A slideshow is a group of images, videos or a combination of both that are shown on the website in the form of slides. Use this API to fetch a slideshow using its `slug`.
   */
  getSlideshow({ slug } = {}) {
    const { error } = ContentValidator.getSlideshow().validate(
      { slug },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getSlideshow"],
        params: { slug },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<Support>} - Success response
   * @summary: Get the support information
   * @description: Use this API to get contact details for customer support including emails and phone numbers.
   */
  getSupportInformation({} = {}) {
    const { error } = ContentValidator.getSupportInformation().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getSupportInformation"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<TagsSchema>} - Success response
   * @summary: Get the tags associated with an application
   * @description: Use this API to get all the CSS and JS injected in the application in the form of tags.
   */
  getTags({} = {}) {
    const { error } = ContentValidator.getTags().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getTags"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a page. You can get slug value from the endpoint
   *   /service/application/content/v2.0/pages/.
   * @param {string} [arg.rootId] - ID given to the HTML element
   * @returns {Promise<PageSchema>} - Success response
   * @summary: Get a page
   * @description: Use this API to get the details of a page using its slug. Details include the title, seo, publish status, feature image, tags, meta, etc.
   */
  getPage({ slug, rootId } = {}) {
    const { error } = ContentValidator.getPage().validate(
      { slug, rootId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["root_id"] = rootId;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getPage"],
        params: { slug },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results. Default value is 1.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @returns {Promise<PageGetResponse>} - Success response
   * @summary: Get all pages
   * @description: Use this API to get a list of pages.
   */
  getPages({ pageNo, pageSize } = {}) {
    const { error } = ContentValidator.getPages().validate(
      { pageNo, pageSize },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getPages"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @summary: Get all pages
   * @description: Use this API to get a list of pages.
   */
  getPagesPaginator({ pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getPages({
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }
}

class Communication {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      getCommunicationConsent:
        "/service/application/communication/v1.0/consent",
      upsertCommunicationConsent:
        "/service/application/communication/v1.0/consent",
      upsertAppPushtoken: "/service/application/communication/v1.0/pn-token",
    };
    this._urls = Object.entries(this._relativeUrls).reduce(
      (urls, [method, relativeUrl]) => {
        urls[method] = `${_conf.domain}${relativeUrl}`;
        return urls;
      },
      {}
    );
  }

  updateUrls(urls) {
    this._urls = {
      ...this._urls,
      ...urls,
    };
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<CommunicationConsent>} - Success response
   * @summary: Get communication consent
   * @description: Use this API to retrieve the consent provided by the user for receiving communication messages over Email/SMS/WhatsApp.
   */
  getCommunicationConsent({} = {}) {
    const { error } = CommunicationValidator.getCommunicationConsent().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getCommunicationConsent"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CommunicationConsentReq} arg.body
   * @returns {Promise<CommunicationConsentRes>} - Success response
   * @summary: Upsert communication consent
   * @description: Use this API to update and insert the consent provided by the user for receiving communication messages over Email/SMS/WhatsApp.
   */
  upsertCommunicationConsent({ body } = {}) {
    const {
      error,
    } = CommunicationValidator.upsertCommunicationConsent().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["upsertCommunicationConsent"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {PushtokenReq} arg.body
   * @returns {Promise<PushtokenRes>} - Success response
   * @summary: Upsert push token of a user
   * @description: Use this API to update and insert the push token of the user.
   */
  upsertAppPushtoken({ body } = {}) {
    const { error } = CommunicationValidator.upsertAppPushtoken().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["upsertAppPushtoken"],
        params: {},
      }),
      query_params,
      body
    );
  }
}

class Share {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      getApplicationQRCode: "/service/application/share/v1.0/qr/",
      getProductQRCodeBySlug:
        "/service/application/share/v1.0/qr/products/{slug}/",
      getCollectionQRCodeBySlug:
        "/service/application/share/v1.0/qr/collection/{slug}/",
      getUrlQRCode: "/service/application/share/v1.0/qr/url/",
      createShortLink: "/service/application/share/v1.0/links/short-link/",
      getShortLinkByHash:
        "/service/application/share/v1.0/links/short-link/{hash}/",
      getOriginalShortLinkByHash:
        "/service/application/share/v1.0/links/short-link/{hash}/original/",
    };
    this._urls = Object.entries(this._relativeUrls).reduce(
      (urls, [method, relativeUrl]) => {
        urls[method] = `${_conf.domain}${relativeUrl}`;
        return urls;
      },
      {}
    );
  }

  updateUrls(urls) {
    this._urls = {
      ...this._urls,
      ...urls,
    };
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<QRCodeResp>} - Success response
   * @summary: Create QR Code of an app
   * @description: Use this API to create a QR code of an app for sharing it with users who want to use the app.
   */
  getApplicationQRCode({} = {}) {
    const { error } = ShareValidator.getApplicationQRCode().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["getApplicationQRCode"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a product. You can get slug value from the endpoint.
   * @returns {Promise<QRCodeResp>} - Success response
   * @summary: Create QR Code of a product
   * @description: Use this API to create a QR code of a product for sharing it with users who want to view/purchase the product.
   */
  getProductQRCodeBySlug({ slug } = {}) {
    const { error } = ShareValidator.getProductQRCodeBySlug().validate(
      { slug },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["getProductQRCodeBySlug"],
        params: { slug },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a collection. You can get slug value from the endpoint.
   * @returns {Promise<QRCodeResp>} - Success response
   * @summary: Create QR Code of a collection
   * @description: Use this API to create a QR code of a collection of products for sharing it with users who want to view/purchase the collection.
   */
  getCollectionQRCodeBySlug({ slug } = {}) {
    const { error } = ShareValidator.getCollectionQRCodeBySlug().validate(
      { slug },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["getCollectionQRCodeBySlug"],
        params: { slug },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.url - A link or a web address
   * @returns {Promise<QRCodeResp>} - Success response
   * @summary: Create QR Code of a URL
   * @description: Use this API to create a QR code of a URL for sharing it with users who want to visit the link.
   */
  getUrlQRCode({ url } = {}) {
    const { error } = ShareValidator.getUrlQRCode().validate(
      { url },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["url"] = url;

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["getUrlQRCode"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {ShortLinkReq} arg.body
   * @returns {Promise<ShortLinkRes>} - Success response
   * @summary: Create a short link
   * @description: Use this API to create a short link that is easy to write/share/read as compared to long URLs.
   */
  createShortLink({ body } = {}) {
    const { error } = ShareValidator.createShortLink().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["createShortLink"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.hash - A string value used for converting long URL to
   *   short URL and vice-versa.
   * @returns {Promise<ShortLinkRes>} - Success response
   * @summary: Get short link by hash
   * @description: Use this API to get a short link by using a hash value.
   */
  getShortLinkByHash({ hash } = {}) {
    const { error } = ShareValidator.getShortLinkByHash().validate(
      { hash },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getShortLinkByHash"],
        params: { hash },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.hash - A string value used for converting long URL to
   *   short URL and vice-versa.
   * @returns {Promise<ShortLinkRes>} - Success response
   * @summary: Get original link by hash
   * @description: Use this API to retrieve the original link from a short-link by using a hash value.
   */
  getOriginalShortLinkByHash({ hash } = {}) {
    const { error } = ShareValidator.getOriginalShortLinkByHash().validate(
      { hash },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getOriginalShortLinkByHash"],
        params: { hash },
      }),
      query_params,
      undefined
    );
  }
}

class FileStorage {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      startUpload:
        "/service/application/assets/v1.0/namespaces/{namespace}/upload/start/",
      completeUpload:
        "/service/application/assets/v1.0/namespaces/{namespace}/upload/complete/",
      signUrls: "/service/application/assets/v1.0/sign-urls/",
    };
    this._urls = Object.entries(this._relativeUrls).reduce(
      (urls, [method, relativeUrl]) => {
        urls[method] = `${_conf.domain}${relativeUrl}`;
        return urls;
      },
      {}
    );
  }

  updateUrls(urls) {
    this._urls = {
      ...this._urls,
      ...urls,
    };
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.namespace - Name of the bucket created for storing objects.
   * @param {StartRequest} arg.body
   * @returns {Promise<StartResponse>} - Success response
   * @summary: Initiates an upload and returns a storage link that is valid for 30 minutes. You can use the storage link to make subsequent upload request with file buffer or blob.
   * @description: Use this API to perform the first step of uploading (i.e. **Start**) an arbitrarily sized buffer or blob.
   *
   * The three major steps are:
   * Start
   * Upload
   * Complete
   *
   * ### Start
   * Initiates the assets upload using `startUpload`.
   * It returns a storage link in response.
   *
   * ### Upload
   * Use the storage link to upload a file (Buffer or Blob) to the File Storage.
   * Make a `PUT` request on storage link received from `startUpload` API with the file (Buffer or Blob) in the request body.
   *
   * ### Complete
   * After successfully upload, call the `completeUpload` API to finish the upload process.
   * This operation will return the URL of the uploaded file.
   */
  startUpload({ namespace, body } = {}) {
    const { error } = FileStorageValidator.startUpload().validate(
      { namespace, body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["startUpload"],
        params: { namespace },
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.namespace - Name of the bucket created for storing objects.
   * @param {StartResponse} arg.body
   * @returns {Promise<CompleteResponse>} - Success response
   * @summary: Completes the upload process. After successfully uploading a file, call this API to finish the upload process.
   * @description: Use this API to perform the third step of uploading (i.e. **Complete**) an arbitrarily sized buffer or blob.
   *
   * The three major steps are:
   * Start
   * Upload
   * Complete
   *
   * ### Start
   * Initiates the assets upload using `startUpload`.
   * It returns a storage link in response.
   *
   * ### Upload
   * Use the storage link to upload a file (Buffer or Blob) to the File Storage.
   * Make a `PUT` request on storage link received from `startUpload` API with the file (Buffer or Blob) in the request body.
   *
   * ### Complete
   * After successfully upload, call the `completeUpload` API to finish the upload process.
   * This operation will return the URL of the uploaded file.
   */
  completeUpload({ namespace, body } = {}) {
    const { error } = FileStorageValidator.completeUpload().validate(
      { namespace, body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["completeUpload"],
        params: { namespace },
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {SignUrlRequest} arg.body
   * @returns {Promise<SignUrlResponse>} - Success response
   * @summary: Explain here
   * @description: Describe here
   */
  signUrls({ body } = {}) {
    const { error } = FileStorageValidator.signUrls().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["signUrls"],
        params: {},
      }),
      query_params,
      body
    );
  }
}

class Configuration {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      getApplication: "/service/application/configuration/v1.0/application",
      getOwnerInfo: "/service/application/configuration/v1.0/about",
      getBasicDetails: "/service/application/configuration/v1.0/detail",
      getIntegrationTokens: "/service/application/configuration/v1.0/token",
      getOrderingStores:
        "/service/application/configuration/v1.0/ordering-store/stores",
      getStoreDetailById:
        "/service/application/configuration/v1.0/ordering-store/stores/{store_id}",
      getFeatures: "/service/application/configuration/v1.0/feature",
      getContactInfo: "/service/application/configuration/v1.0/information",
      getCurrencies: "/service/application/configuration/v1.0/currencies",
      getCurrencyById: "/service/application/configuration/v1.0/currency/{id}",
      getAppCurrencies: "/service/application/configuration/v1.0/currency",
      getLanguages: "/service/application/configuration/v1.0/languages",
      getOrderingStoreCookie:
        "/service/application/configuration/v1.0/ordering-store/select",
      removeOrderingStoreCookie:
        "/service/application/configuration/v1.0/ordering-store/select",
      getAppStaffList: "/service/application/configuration/v1.0/staff/list",
      getAppStaffs: "/service/application/configuration/v1.0/staff",
    };
    this._urls = Object.entries(this._relativeUrls).reduce(
      (urls, [method, relativeUrl]) => {
        urls[method] = `${_conf.domain}${relativeUrl}`;
        return urls;
      },
      {}
    );
  }

  updateUrls(urls) {
    this._urls = {
      ...this._urls,
      ...urls,
    };
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<Application>} - Success response
   * @summary: Get current application details
   * @description: Use this API to get the current application details which includes configurations that indicate the status of the website, domain, ID, tokens, images, etc.
   */
  getApplication({} = {}) {
    const { error } = ConfigurationValidator.getApplication().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getApplication"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<ApplicationAboutResponse>} - Success response
   * @summary: Get application, owner and seller information
   * @description: Use this API to get the current application details which includes channel name, description, banner, logo, favicon, domain details, etc. This API also retrieves the seller and owner information such as address, email address, and phone number.
   */
  getOwnerInfo({} = {}) {
    const { error } = ConfigurationValidator.getOwnerInfo().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getOwnerInfo"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<ApplicationDetail>} - Success response
   * @summary: Get basic application details
   * @description: Use this API to retrieve only the basic details of the application which includes channel name, description, banner, logo, favicon, domain details, etc.
   */
  getBasicDetails({} = {}) {
    const { error } = ConfigurationValidator.getBasicDetails().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getBasicDetails"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<AppTokenResponse>} - Success response
   * @summary: Get integration tokens
   * @description: Use this API to retrieve the tokens used while integrating Firebase, MoEngage, Segment, GTM, Freshchat, Safetynet, Google Map and Facebook. **Note** - Token values are encrypted with AES encryption using a secret key. Kindly reach out to the developers for obtaining the secret key.
   */
  getIntegrationTokens({} = {}) {
    const { error } = ConfigurationValidator.getIntegrationTokens().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getIntegrationTokens"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results. Default value is 1.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each
   *   page. Default value is 10.
   * @param {string} [arg.q] - Store code or name of the ordering store.
   * @returns {Promise<OrderingStores>} - Success response
   * @summary: Get deployment stores
   * @description: Use this API to retrieve the details of all the deployment stores (the selling locations where the application will be utilized for placing orders).
   */
  getOrderingStores({ pageNo, pageSize, q } = {}) {
    const { error } = ConfigurationValidator.getOrderingStores().validate(
      { pageNo, pageSize, q },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["q"] = q;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getOrderingStores"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each
   *   page. Default value is 10.
   * @param {string} [arg.q] - Store code or name of the ordering store.
   * @summary: Get deployment stores
   * @description: Use this API to retrieve the details of all the deployment stores (the selling locations where the application will be utilized for placing orders).
   */
  getOrderingStoresPaginator({ pageSize, q } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getOrderingStores({
        pageNo: pageNo,
        pageSize: pageSize,
        q: q,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} arg.storeId - Store uid
   * @returns {Promise<OrderingStore>} - Success response
   * @summary: Get ordering store details
   * @description: Use this API to retrieve the details of given stores uid (the selling locations where the application will be utilized for placing orders).
   */
  getStoreDetailById({ storeId } = {}) {
    const { error } = ConfigurationValidator.getStoreDetailById().validate(
      { storeId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getStoreDetailById"],
        params: { storeId },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<AppFeatureResponse>} - Success response
   * @summary: Get features of application
   * @description: Use this API to retrieve the configuration of features such as product detail, landing page, options in the login/registration screen, communication opt-in, cart options and many more.
   */
  getFeatures({} = {}) {
    const { error } = ConfigurationValidator.getFeatures().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getFeatures"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<ApplicationInformation>} - Success response
   * @summary: Get application information
   * @description: Use this API to retrieve information about the social links, address and contact information of the company/seller/brand operating the application.
   */
  getContactInfo({} = {}) {
    const { error } = ConfigurationValidator.getContactInfo().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getContactInfo"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<CurrenciesResponse>} - Success response
   * @summary: Get all currencies list
   * @description: Use this API to get a list of currencies available. Moreover, get the name, code, symbol, and the decimal digits of the currencies.
   */
  getCurrencies({} = {}) {
    const { error } = ConfigurationValidator.getCurrencies().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getCurrencies"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Object ID assigned to the currency
   * @returns {Promise<Currency>} - Success response
   * @summary: Get currency by its ID
   * @description: Use this API to retrieve a currency using its ID.
   */
  getCurrencyById({ id } = {}) {
    const { error } = ConfigurationValidator.getCurrencyById().validate(
      { id },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getCurrencyById"],
        params: { id },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<AppCurrencyResponse>} - Success response
   * @summary: Get currencies enabled in the application
   * @description: Use this API to get a list of currencies allowed in the current application. Moreover, get the name, code, symbol, and the decimal digits of the currencies.
   */
  getAppCurrencies({} = {}) {
    const { error } = ConfigurationValidator.getAppCurrencies().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getAppCurrencies"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<LanguageResponse>} - Success response
   * @summary: Get list of languages
   * @description: Use this API to get a list of languages supported in the application.
   */
  getLanguages({} = {}) {
    const { error } = ConfigurationValidator.getLanguages().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getLanguages"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {OrderingStoreSelectRequest} arg.body
   * @returns {Promise<SuccessMessageResponse>} - Success response
   * @summary: Get an Ordering Store signed cookie on selection of ordering store.
   * @description: Use this API to get an Ordering Store signed cookie upon selecting an ordering store. This will be used by the cart service to verify a coupon against the selected ordering store in cart.
   */
  getOrderingStoreCookie({ body } = {}) {
    const { error } = ConfigurationValidator.getOrderingStoreCookie().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["getOrderingStoreCookie"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<SuccessMessageResponse>} - Success response
   * @summary: Unset the Ordering Store signed cookie.
   * @description: Use this API to unset the Ordering Store cookie upon changing the sales channel, by its domain URL, in the Universal Fynd Store app.
   */
  removeOrderingStoreCookie({} = {}) {
    const {
      error,
    } = ConfigurationValidator.removeOrderingStoreCookie().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "delete",
      constructUrl({
        url: this._urls["removeOrderingStoreCookie"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] -
   * @param {number} [arg.pageSize] -
   * @param {boolean} [arg.orderIncent] - This is a boolean value. Select
   *   `true` to retrieve the staff members eligible for getting incentives on orders.
   * @param {number} [arg.orderingStore] - ID of the ordering store. Helps in
   *   retrieving staff members working at a particular ordering store.
   * @param {string} [arg.user] - Mongo ID of the staff. Helps in retrieving
   *   the details of a particular staff member.
   * @returns {Promise<AppStaffListResponse>} - Success response
   * @summary: Get a list of staff.
   * @description: Use this API to get a list of staff including the names, employee code, incentive status, assigned ordering stores, and title of each staff added to the application.
   */
  getAppStaffList({ pageNo, pageSize, orderIncent, orderingStore, user } = {}) {
    const { error } = ConfigurationValidator.getAppStaffList().validate(
      { pageNo, pageSize, orderIncent, orderingStore, user },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["order_incent"] = orderIncent;
    query_params["ordering_store"] = orderingStore;
    query_params["user"] = user;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getAppStaffList"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageSize] -
   * @param {boolean} [arg.orderIncent] - This is a boolean value. Select
   *   `true` to retrieve the staff members eligible for getting incentives on orders.
   * @param {number} [arg.orderingStore] - ID of the ordering store. Helps in
   *   retrieving staff members working at a particular ordering store.
   * @param {string} [arg.user] - Mongo ID of the staff. Helps in retrieving
   *   the details of a particular staff member.
   * @summary: Get a list of staff.
   * @description: Use this API to get a list of staff including the names, employee code, incentive status, assigned ordering stores, and title of each staff added to the application.
   */
  getAppStaffListPaginator({
    pageSize,
    orderIncent,
    orderingStore,
    user,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getAppStaffList({
        pageNo: pageNo,
        pageSize: pageSize,
        orderIncent: orderIncent,
        orderingStore: orderingStore,
        user: user,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {boolean} [arg.orderIncent] - This is a boolean value. Select
   *   `true` to retrieve the staff members eligible for getting incentives on orders.
   * @param {number} [arg.orderingStore] - ID of the ordering store. Helps in
   *   retrieving staff members working at a particular ordering store.
   * @param {string} [arg.user] - Mongo ID of the staff. Helps in retrieving
   *   the details of a particular staff member.
   * @returns {Promise<AppStaffResponse>} - Success response
   * @summary: Get a list of staff.
   * @description: Use this API to get a list of staff including the names, employee code, incentive status, assigned ordering stores, and title of each staff added to the application.
   */
  getAppStaffs({ orderIncent, orderingStore, user } = {}) {
    const { error } = ConfigurationValidator.getAppStaffs().validate(
      { orderIncent, orderingStore, user },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["order_incent"] = orderIncent;
    query_params["ordering_store"] = orderingStore;
    query_params["user"] = user;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getAppStaffs"],
        params: {},
      }),
      query_params,
      undefined
    );
  }
}

class Payment {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      getAggregatorsConfig:
        "/service/application/payment/v1.0/config/aggregators/key",
      attachCardToCustomer: "/service/application/payment/v1.0/card/attach",
      getActiveCardAggregator:
        "/service/application/payment/v1.0/card/aggregator",
      getActiveUserCards: "/service/application/payment/v1.0/cards",
      deleteUserCard: "/service/application/payment/v1.0/card/remove",
      verifyCustomerForPayment:
        "/service/application/payment/v1.0/payment/customer/validation",
      verifyAndChargePayment:
        "/service/application/payment/v1.0/payment/confirm/charge",
      initialisePayment: "/service/application/payment/v1.0/payment/request",
      checkAndUpdatePaymentStatus:
        "/service/application/payment/v1.0/payment/confirm/polling",
      getPaymentModeRoutes: "/service/application/payment/v1.0/payment/options",
      getPosPaymentModeRoutes:
        "/service/application/payment/v1.0/payment/options/pos",
      getRupifiBannerDetails: "/service/application/payment/v1.0/rupifi/banner",
      getActiveRefundTransferModes:
        "/service/application/payment/v1.0/refund/transfer-mode",
      enableOrDisableRefundTransferMode:
        "/service/application/payment/v1.0/refund/transfer-mode",
      getUserBeneficiariesDetail:
        "/service/application/payment/v1.0/refund/user/beneficiary",
      verifyIfscCode: "/service/application/payment/v1.0/ifsc-code/verify",
      getOrderBeneficiariesDetail:
        "/service/application/payment/v1.0/refund/order/beneficiaries",
      verifyOtpAndAddBeneficiaryForBank:
        "/service/application/payment/v1.0/refund/verification/bank",
      addBeneficiaryDetails: "/service/application/payment/v1.0/refund/account",
      addRefundBankAccountUsingOTP:
        "/service/application/payment/v1.0/refund/account/otp",
      verifyOtpAndAddBeneficiaryForWallet:
        "/service/application/payment/v1.0/refund/verification/wallet",
      updateDefaultBeneficiary:
        "/service/application/payment/v1.0/refund/beneficiary/default",
    };
    this._urls = Object.entries(this._relativeUrls).reduce(
      (urls, [method, relativeUrl]) => {
        urls[method] = `${_conf.domain}${relativeUrl}`;
        return urls;
      },
      {}
    );
  }

  updateUrls(urls) {
    this._urls = {
      ...this._urls,
      ...urls,
    };
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.xApiToken] - Used for basic authentication.
   * @param {boolean} [arg.refresh] - This is a boolean value. Select `true`
   *   to remove temporary cache files on payment gateway and replace with the
   *   latest one.
   * @returns {Promise<AggregatorsConfigDetailResponse>} - Success response
   * @summary: Get payment gateway keys
   * @description: Use this API to retrieve the payment gateway key, secrets, merchant, SDK/API details to complete a payment at front-end.
   */
  getAggregatorsConfig({ xApiToken, refresh } = {}) {
    const { error } = PaymentValidator.getAggregatorsConfig().validate(
      { xApiToken, refresh },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["refresh"] = refresh;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getAggregatorsConfig"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {AttachCardRequest} arg.body
   * @returns {Promise<AttachCardsResponse>} - Success response
   * @summary: Attach a saved card to customer.
   * @description: Use this API to attach a customer's saved card at the payment gateway, such as Stripe, Juspay.
   */
  attachCardToCustomer({ body } = {}) {
    const { error } = PaymentValidator.attachCardToCustomer().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["attachCardToCustomer"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {boolean} [arg.refresh] -
   * @returns {Promise<ActiveCardPaymentGatewayResponse>} - Success response
   * @summary: Fetch active payment gateway for card payments
   * @description: Use this API to retrieve an active payment aggregator along with the Customer ID. This is applicable for cards payments only.
   */
  getActiveCardAggregator({ refresh } = {}) {
    const { error } = PaymentValidator.getActiveCardAggregator().validate(
      { refresh },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["refresh"] = refresh;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getActiveCardAggregator"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {boolean} [arg.forceRefresh] -
   * @returns {Promise<ListCardsResponse>} - Success response
   * @summary: Fetch the list of cards saved by the user
   * @description: Use this API to retrieve a list of cards stored by user from an active payment gateway.
   */
  getActiveUserCards({ forceRefresh } = {}) {
    const { error } = PaymentValidator.getActiveUserCards().validate(
      { forceRefresh },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["force_refresh"] = forceRefresh;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getActiveUserCards"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {DeletehCardRequest} arg.body
   * @returns {Promise<DeleteCardsResponse>} - Success response
   * @summary: Delete a card
   * @description: Use this API to delete a card added by a user on the payment gateway and clear the cache.
   */
  deleteUserCard({ body } = {}) {
    const { error } = PaymentValidator.deleteUserCard().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["deleteUserCard"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {ValidateCustomerRequest} arg.body
   * @returns {Promise<ValidateCustomerResponse>} - Success response
   * @summary: Validate customer for payment
   * @description: Use this API to check if the customer is eligible to use credit-line facilities such as Simpl Pay Later and Rupifi.
   */
  verifyCustomerForPayment({ body } = {}) {
    const { error } = PaymentValidator.verifyCustomerForPayment().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["verifyCustomerForPayment"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {ChargeCustomerRequest} arg.body
   * @returns {Promise<ChargeCustomerResponse>} - Success response
   * @summary: Verify and charge payment
   * @description: Use this API to verify and check the status of a payment transaction (server-to-server) made through aggregators like Simpl and Mswipe.
   */
  verifyAndChargePayment({ body } = {}) {
    const { error } = PaymentValidator.verifyAndChargePayment().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["verifyAndChargePayment"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {PaymentInitializationRequest} arg.body
   * @returns {Promise<PaymentInitializationResponse>} - Success response
   * @summary: Initialize a payment (server-to-server) for UPI and BharatQR
   * @description: PUse this API to inititate payment using UPI, BharatQR, wherein the UPI requests are send to the app and QR code is displayed on the screen.
   */
  initialisePayment({ body } = {}) {
    const { error } = PaymentValidator.initialisePayment().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["initialisePayment"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {PaymentStatusUpdateRequest} arg.body
   * @returns {Promise<PaymentStatusUpdateResponse>} - Success response
   * @summary: Performs continuous polling to check status of payment on the server
   * @description: Use this API to perform continuous polling at intervals to check the status of payment until timeout.
   */
  checkAndUpdatePaymentStatus({ body } = {}) {
    const { error } = PaymentValidator.checkAndUpdatePaymentStatus().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["checkAndUpdatePaymentStatus"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} arg.amount - Payable amount.
   * @param {string} arg.cartId - Identifier of the cart.
   * @param {string} arg.pincode - The PIN Code of the destination address, e.g. 400059
   * @param {string} arg.checkoutMode - Option to checkout for self or for others.
   * @param {boolean} [arg.refresh] - This is a boolean value. Select `true`
   *   to remove temporary cache files on payment gateway and replace with the
   *   latest one.
   * @param {string} [arg.cardReference] - Card reference id of user's debit
   *   or credit card.
   * @param {string} [arg.userDetails] - URIencoded JSON containing details of
   *   an anonymous user.
   * @returns {Promise<PaymentModeRouteResponse>} - Success response
   * @summary: Get applicable payment options
   * @description: Use this API to get all valid payment options for doing a payment.
   */
  getPaymentModeRoutes({
    amount,
    cartId,
    pincode,
    checkoutMode,
    refresh,
    cardReference,
    userDetails,
  } = {}) {
    const { error } = PaymentValidator.getPaymentModeRoutes().validate(
      {
        amount,
        cartId,
        pincode,
        checkoutMode,
        refresh,
        cardReference,
        userDetails,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["amount"] = amount;
    query_params["cart_id"] = cartId;
    query_params["pincode"] = pincode;
    query_params["checkout_mode"] = checkoutMode;
    query_params["refresh"] = refresh;
    query_params["card_reference"] = cardReference;
    query_params["user_details"] = userDetails;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getPaymentModeRoutes"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} arg.amount - Payable amount.
   * @param {string} arg.cartId - Identifier of the cart.
   * @param {string} arg.pincode - The PIN Code of the destination address, e.g. 400059
   * @param {string} arg.checkoutMode - Option to checkout for self or for others.
   * @param {boolean} [arg.refresh] - This is a boolean value. Select `true`
   *   to remove temporary cache files on payment gateway and replace with the
   *   latest one.
   * @param {string} [arg.cardReference] - Card reference id of user's debit
   *   or credit card.
   * @param {string} arg.orderType - The order type of shipment * HomeDelivery
   *   - If the customer wants the order home-delivered * PickAtStore - If the
   *   customer wants the handover of an order at the store itself.
   * @param {string} [arg.userDetails] - URIencoded JSON containing details of
   *   an anonymous user.
   * @returns {Promise<PaymentModeRouteResponse>} - Success response
   * @summary: Get applicable payment options for Point-of-Sale (POS)
   * @description: Use this API to get all valid payment options for doing a payment in POS.
   */
  getPosPaymentModeRoutes({
    amount,
    cartId,
    pincode,
    checkoutMode,
    orderType,
    refresh,
    cardReference,
    userDetails,
  } = {}) {
    const { error } = PaymentValidator.getPosPaymentModeRoutes().validate(
      {
        amount,
        cartId,
        pincode,
        checkoutMode,
        orderType,
        refresh,
        cardReference,
        userDetails,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["amount"] = amount;
    query_params["cart_id"] = cartId;
    query_params["pincode"] = pincode;
    query_params["checkout_mode"] = checkoutMode;
    query_params["refresh"] = refresh;
    query_params["card_reference"] = cardReference;
    query_params["order_type"] = orderType;
    query_params["user_details"] = userDetails;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getPosPaymentModeRoutes"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<RupifiBannerResponse>} - Success response
   * @summary: Get CreditLine Offer
   * @description: Get CreditLine Offer if user is tentatively approved by rupifi
   */
  getRupifiBannerDetails({} = {}) {
    const { error } = PaymentValidator.getRupifiBannerDetails().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getRupifiBannerDetails"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<TransferModeResponse>} - Success response
   * @summary: Lists the mode of refund
   * @description: Use this API to retrieve eligible refund modes (such as Netbanking) and add the beneficiary details.
   */
  getActiveRefundTransferModes({} = {}) {
    const { error } = PaymentValidator.getActiveRefundTransferModes().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getActiveRefundTransferModes"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {UpdateRefundTransferModeRequest} arg.body
   * @returns {Promise<UpdateRefundTransferModeResponse>} - Success response
   * @summary: Enable/Disable a mode for transferring a refund
   * @description: Activate or Deactivate Transfer Mode to collect Beneficiary Details for Refund
   */
  enableOrDisableRefundTransferMode({ body } = {}) {
    const {
      error,
    } = PaymentValidator.enableOrDisableRefundTransferMode().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "put",
      constructUrl({
        url: this._urls["enableOrDisableRefundTransferMode"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.orderId - A unique number used for identifying and
   *   tracking your orders.
   * @returns {Promise<OrderBeneficiaryResponse>} - Success response
   * @summary: Lists the beneficiary of a refund
   * @description: Use this API to get the details of all active beneficiary added by a user for refund.
   */
  getUserBeneficiariesDetail({ orderId } = {}) {
    const { error } = PaymentValidator.getUserBeneficiariesDetail().validate(
      { orderId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["order_id"] = orderId;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getUserBeneficiariesDetail"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.ifscCode] - A 11-digit alphanumeric code that
   *   uniquely identifies a bank branch.
   * @returns {Promise<IfscCodeResponse>} - Success response
   * @summary: Verify IFSC Code
   * @description: Use this API to check whether the 11-digit IFSC code is valid and to fetch the bank details for refund.
   */
  verifyIfscCode({ ifscCode } = {}) {
    const { error } = PaymentValidator.verifyIfscCode().validate(
      { ifscCode },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["ifsc_code"] = ifscCode;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["verifyIfscCode"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.orderId - A unique number used for identifying and
   *   tracking your orders.
   * @returns {Promise<OrderBeneficiaryResponse>} - Success response
   * @summary: Lists the beneficiary of a refund
   * @description: Use this API to get the details of all active beneficiary added by a user for refund.
   */
  getOrderBeneficiariesDetail({ orderId } = {}) {
    const { error } = PaymentValidator.getOrderBeneficiariesDetail().validate(
      { orderId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["order_id"] = orderId;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getOrderBeneficiariesDetail"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {AddBeneficiaryViaOtpVerificationRequest} arg.body
   * @returns {Promise<AddBeneficiaryViaOtpVerificationResponse>} - Success response
   * @summary: Verify the beneficiary details using OTP
   * @description: Use this API to perform an OTP validation before saving the beneficiary details added for a refund.
   */
  verifyOtpAndAddBeneficiaryForBank({ body } = {}) {
    const {
      error,
    } = PaymentValidator.verifyOtpAndAddBeneficiaryForBank().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["verifyOtpAndAddBeneficiaryForBank"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {AddBeneficiaryDetailsRequest} arg.body
   * @returns {Promise<RefundAccountResponse>} - Success response
   * @summary: Save bank details for cancelled/returned order
   * @description: Use this API to save the bank details for a returned or cancelled order to refund the amount.
   */
  addBeneficiaryDetails({ body } = {}) {
    const { error } = PaymentValidator.addBeneficiaryDetails().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["addBeneficiaryDetails"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {AddBeneficiaryDetailsOTPRequest} arg.body
   * @returns {Promise<RefundAccountResponse>} - Success response
   * @summary: Save bank details for cancelled/returned order
   * @description: Use this API to save bank details for returned/cancelled order to refund amount in his account.
   */
  addRefundBankAccountUsingOTP({ body } = {}) {
    const { error } = PaymentValidator.addRefundBankAccountUsingOTP().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["addRefundBankAccountUsingOTP"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {WalletOtpRequest} arg.body
   * @returns {Promise<WalletOtpResponse>} - Success response
   * @summary: Send OTP on adding a wallet beneficiary
   * @description: Use this API to send an OTP while adding a wallet beneficiary by mobile no. verification.
   */
  verifyOtpAndAddBeneficiaryForWallet({ body } = {}) {
    const {
      error,
    } = PaymentValidator.verifyOtpAndAddBeneficiaryForWallet().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["verifyOtpAndAddBeneficiaryForWallet"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {SetDefaultBeneficiaryRequest} arg.body
   * @returns {Promise<SetDefaultBeneficiaryResponse>} - Success response
   * @summary: Set a default beneficiary for a refund
   * @description: Use this API to set a default beneficiary for getting a refund.
   */
  updateDefaultBeneficiary({ body } = {}) {
    const { error } = PaymentValidator.updateDefaultBeneficiary().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["updateDefaultBeneficiary"],
        params: {},
      }),
      query_params,
      body
    );
  }
}

class Order {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      getOrders: "/service/application/order/v1.0/orders",
      getOrderById: "/service/application/order/v1.0/orders/{order_id}",
      getShipmentById:
        "/service/application/order/v1.0/orders/shipments/{shipment_id}",
      getShipmentReasons:
        "/service/application/order/v1.0/orders/shipments/{shipment_id}/reasons",
      updateShipmentStatus:
        "/service/application/order/v1.0/orders/shipments/{shipment_id}/status",
      trackShipment:
        "/service/application/order/v1.0/orders/shipments/{shipment_id}/track",
      getPosOrderById:
        "/service/application/order/v1.0/orders/pos-order/{order_id}",
      getCustomerDetailsByShipmentId:
        "/service/application/order/v1.0/orders/{order_id}/shipments/{shipment_id}/customer-details",
      sendOtpToShipmentCustomer:
        "/service/application/order/v1.0/orders/{order_id}/shipments/{shipment_id}/otp/send/",
      verifyOtpShipmentCustomer:
        "/service/application/order/v1.0/orders/{order_id}/shipments/{shipment_id}/otp/verify",
      getInvoiceByShipmentId:
        "/service/application/order/v1.0/orders/shipments/{shipment_id}/invoice",
    };
    this._urls = Object.entries(this._relativeUrls).reduce(
      (urls, [method, relativeUrl]) => {
        urls[method] = `${_conf.domain}${relativeUrl}`;
        return urls;
      },
      {}
    );
  }

  updateUrls(urls) {
    this._urls = {
      ...this._urls,
      ...urls,
    };
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results. Default value is 1.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each
   *   page. Default value is 10.
   * @param {string} [arg.fromDate] - The date from which the orders should be
   *   retrieved.
   * @param {string} [arg.toDate] - The date till which the orders should be retrieved.
   * @param {number} [arg.status] - A filter to retrieve orders by their
   *   current status such as *placed*, *delivered*, etc.
   * @returns {Promise<OrderList>} - Success response
   * @summary: Get all orders
   * @description: Use this API to retrieve all the orders.
   */
  getOrders({ pageNo, pageSize, fromDate, toDate, status } = {}) {
    const { error } = OrderValidator.getOrders().validate(
      { pageNo, pageSize, fromDate, toDate, status },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["from_date"] = fromDate;
    query_params["to_date"] = toDate;
    query_params["status"] = status;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getOrders"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.orderId - A unique number used for identifying and
   *   tracking your orders.
   * @returns {Promise<OrderById>} - Success response
   * @summary: Get details of an order
   * @description: Use this API to retrieve order details such as tracking details, shipment, store information using Fynd Order ID.
   */
  getOrderById({ orderId } = {}) {
    const { error } = OrderValidator.getOrderById().validate(
      { orderId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getOrderById"],
        params: { orderId },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.shipmentId - ID of the shipment. An order may contain
   *   multiple items and may get divided into one or more shipment, each
   *   having its own ID.
   * @returns {Promise<ShipmentById>} - Success response
   * @summary: Get details of a shipment
   * @description: Use this API to retrieve shipment details such as price breakup, tracking details, store information, etc. using Shipment ID.
   */
  getShipmentById({ shipmentId } = {}) {
    const { error } = OrderValidator.getShipmentById().validate(
      { shipmentId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getShipmentById"],
        params: { shipmentId },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.shipmentId - ID of the shipment. An order may contain
   *   multiple items and may get divided into one or more shipment, each
   *   having its own ID.
   * @returns {Promise<ShipmentReasons>} - Success response
   * @summary: Get reasons behind full or partial cancellation of a shipment
   * @description: Use this API to retrieve the issues that led to the cancellation of bags within a shipment.
   */
  getShipmentReasons({ shipmentId } = {}) {
    const { error } = OrderValidator.getShipmentReasons().validate(
      { shipmentId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getShipmentReasons"],
        params: { shipmentId },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.shipmentId - ID of the shipment. An order may contain
   *   multiple items and may get divided into one or more shipment, each
   *   having its own ID.
   * @param {ShipmentStatusUpdateBody} arg.body
   * @returns {Promise<ShipmentStatusUpdate>} - Success response
   * @summary: Update the shipment status
   * @description: Use this API to update the status of a shipment using its shipment ID.
   */
  updateShipmentStatus({ shipmentId, body } = {}) {
    const { error } = OrderValidator.updateShipmentStatus().validate(
      { shipmentId, body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "put",
      constructUrl({
        url: this._urls["updateShipmentStatus"],
        params: { shipmentId },
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.shipmentId - ID of the shipment. An order may contain
   *   multiple items and may get divided into one or more shipment, each
   *   having its own ID.
   * @returns {Promise<ShipmentTrack>} - Success response
   * @summary: Track shipment
   * @description: Use this API to track a shipment using its shipment ID.
   */
  trackShipment({ shipmentId } = {}) {
    const { error } = OrderValidator.trackShipment().validate(
      { shipmentId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["trackShipment"],
        params: { shipmentId },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.orderId - A unique number used for identifying and
   *   tracking your orders.
   * @returns {Promise<PosOrderById>} - Success response
   * @summary: Get POS Order
   * @description: Use this API to retrieve a POS order and all its details such as tracking details, shipment, store information using Fynd Order ID.
   */
  getPosOrderById({ orderId } = {}) {
    const { error } = OrderValidator.getPosOrderById().validate(
      { orderId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getPosOrderById"],
        params: { orderId },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.orderId - A unique number used for identifying and
   *   tracking your orders.
   * @param {string} arg.shipmentId - ID of the shipment. An order may contain
   *   multiple items and may get divided into one or more shipment, each
   *   having its own ID.
   * @returns {Promise<CustomerDetailsByShipmentId>} - Success response
   * @summary: Get Customer Details by Shipment Id
   * @description: Use this API to retrieve customer details such as mobileno using Shipment ID.
   */
  getCustomerDetailsByShipmentId({ orderId, shipmentId } = {}) {
    const { error } = OrderValidator.getCustomerDetailsByShipmentId().validate(
      { orderId, shipmentId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getCustomerDetailsByShipmentId"],
        params: { orderId, shipmentId },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.orderId - A unique number used for identifying and
   *   tracking your orders.
   * @param {string} arg.shipmentId - ID of the shipment. An order may contain
   *   multiple items and may get divided into one or more shipment, each
   *   having its own ID.
   * @returns {Promise<sendOTPApplicationResponse>} - Success response
   * @summary: Send and Resend Otp code to Order-Shipment customer
   * @description: Use this API to send OTP to the customer of the mapped Shipment.
   */
  sendOtpToShipmentCustomer({ orderId, shipmentId } = {}) {
    const { error } = OrderValidator.sendOtpToShipmentCustomer().validate(
      { orderId, shipmentId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["sendOtpToShipmentCustomer"],
        params: { orderId, shipmentId },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.orderId - A unique number used for identifying and
   *   tracking your orders.
   * @param {string} arg.shipmentId - ID of the shipment. An order may contain
   *   multiple items and may get divided into one or more shipment, each
   *   having its own ID.
   * @param {ReqBodyVerifyOTPShipment} arg.body
   * @returns {Promise<ResponseVerifyOTPShipment>} - Success response
   * @summary: Verify Otp code
   * @description: Use this API to verify OTP and create a session token with custom payload.
   */
  verifyOtpShipmentCustomer({ orderId, shipmentId, body } = {}) {
    const { error } = OrderValidator.verifyOtpShipmentCustomer().validate(
      { orderId, shipmentId, body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["verifyOtpShipmentCustomer"],
        params: { orderId, shipmentId },
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.shipmentId - ID of the shipment. An order may contain
   *   multiple items and may get divided into one or more shipment, each
   *   having its own ID.
   * @returns {Promise<ResponseGetInvoiceShipment>} - Success response
   * @summary: Get Invoice URL
   * @description: Use this API to get a generated Invoice URL for viewing or download.
   */
  getInvoiceByShipmentId({ shipmentId } = {}) {
    const { error } = OrderValidator.getInvoiceByShipmentId().validate(
      { shipmentId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getInvoiceByShipmentId"],
        params: { shipmentId },
      }),
      query_params,
      undefined
    );
  }
}

class Rewards {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      getPointsOnProduct:
        "/service/application/rewards/v1.0/catalogue/offer/order/",
      getOfferByName: "/service/application/rewards/v1.0/offers/{name}/",
      getOrderDiscount:
        "/service/application/rewards/v1.0/user/offers/order-discount/",
      getUserPoints: "/service/application/rewards/v1.0/user/points/",
      getUserPointsHistory:
        "/service/application/rewards/v1.0/user/points/history/",
      getUserReferralDetails:
        "/service/application/rewards/v1.0/user/referral/",
      redeemReferralCode:
        "/service/application/rewards/v1.0/user/referral/redeem/",
    };
    this._urls = Object.entries(this._relativeUrls).reduce(
      (urls, [method, relativeUrl]) => {
        urls[method] = `${_conf.domain}${relativeUrl}`;
        return urls;
      },
      {}
    );
  }

  updateUrls(urls) {
    this._urls = {
      ...this._urls,
      ...urls,
    };
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CatalogueOrderRequest} arg.body
   * @returns {Promise<CatalogueOrderResponse>} - Success response
   * @summary: Get the eligibility of reward points on a product
   * @description: Use this API to evaluate the amount of reward points that could be earned on any catalogue product.
   */
  getPointsOnProduct({ body } = {}) {
    const { error } = RewardsValidator.getPointsOnProduct().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["getPointsOnProduct"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.name - The name given to the offer.
   * @returns {Promise<Offer>} - Success response
   * @summary: Get offer by name
   * @description: Use this API to get the offer details and configuration by entering the name of the offer.
   */
  getOfferByName({ name } = {}) {
    const { error } = RewardsValidator.getOfferByName().validate(
      { name },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getOfferByName"],
        params: { name },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {OrderDiscountRequest} arg.body
   * @returns {Promise<OrderDiscountResponse>} - Success response
   * @summary: Calculates the discount on order-amount
   * @description: Use this API to calculate the discount on order-amount based on all the amount range configured in order_discount.
   */
  getOrderDiscount({ body } = {}) {
    const { error } = RewardsValidator.getOrderDiscount().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["getOrderDiscount"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<PointsResponse>} - Success response
   * @summary: Get reward points available with a user
   * @description: Use this API to retrieve total available points of a user for current application
   */
  getUserPoints({} = {}) {
    const { error } = RewardsValidator.getUserPoints().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getUserPoints"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.pageId] - PageID is the ID of the requested page.
   *   For first request it should be kept empty.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @returns {Promise<PointsHistoryResponse>} - Success response
   * @summary: Get all transactions of reward points
   * @description: Use this API to get a list of points transactions. The list of points history is paginated.
   */
  getUserPointsHistory({ pageId, pageSize } = {}) {
    const { error } = RewardsValidator.getUserPointsHistory().validate(
      { pageId, pageSize },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["page_id"] = pageId;
    query_params["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getUserPointsHistory"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @summary: Get all transactions of reward points
   * @description: Use this API to get a list of points transactions. The list of points history is paginated.
   */
  getUserPointsHistoryPaginator({ pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getUserPointsHistory({
        pageId: pageId,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<ReferralDetailsResponse>} - Success response
   * @summary: Get referral details of a user
   * @description: Use this API to retrieve the referral details a user has configured in the application.
   */
  getUserReferralDetails({} = {}) {
    const { error } = RewardsValidator.getUserReferralDetails().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getUserReferralDetails"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {RedeemReferralCodeRequest} arg.body
   * @returns {Promise<RedeemReferralCodeResponse>} - Success response
   * @summary: Redeems a referral code and credits reward points to users
   * @description: Use this API to enter a referral code following which, the configured points would be credited to a user's reward points account.
   */
  redeemReferralCode({ body } = {}) {
    const { error } = RewardsValidator.redeemReferralCode().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["redeemReferralCode"],
        params: {},
      }),
      query_params,
      body
    );
  }
}

class Feedback {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      createAbuseReport: "/service/application/feedback/v1.0/abuse/",
      updateAbuseReport: "/service/application/feedback/v1.0/abuse/",
      getAbuseReports:
        "/service/application/feedback/v1.0/abuse/entity/{entity_type}/entity-id/{entity_id}",
      getAttributes: "/service/application/feedback/v1.0/attributes/",
      createAttribute: "/service/application/feedback/v1.0/attributes/",
      getAttribute: "/service/application/feedback/v1.0/attributes/{slug}",
      updateAttribute: "/service/application/feedback/v1.0/attributes/{slug}",
      createComment: "/service/application/feedback/v1.0/comment/",
      updateComment: "/service/application/feedback/v1.0/comment/",
      getComments:
        "/service/application/feedback/v1.0/comment/entity/{entity_type}",
      checkEligibility:
        "/service/application/feedback/v1.0/config/entity/{entity_type}/entity-id/{entity_id}",
      deleteMedia: "/service/application/feedback/v1.0/media/",
      createMedia: "/service/application/feedback/v1.0/media/",
      updateMedia: "/service/application/feedback/v1.0/media/",
      getMedias:
        "/service/application/feedback/v1.0/media/entity/{entity_type}/entity-id/{entity_id}",
      getReviewSummaries:
        "/service/application/feedback/v1.0/rating/summary/entity/{entity_type}/entity-id/{entity_id}",
      createReview: "/service/application/feedback/v1.0/review/",
      updateReview: "/service/application/feedback/v1.0/review/",
      getReviews:
        "/service/application/feedback/v1.0/review/entity/{entity_type}/entity-id/{entity_id}",
      getTemplates: "/service/application/feedback/v1.0/template/",
      createQuestion: "/service/application/feedback/v1.0/template/qna/",
      updateQuestion: "/service/application/feedback/v1.0/template/qna/",
      getQuestionAndAnswers:
        "/service/application/feedback/v1.0/template/qna/entity/{entity_type}/entity-id/{entity_id}",
      getVotes: "/service/application/feedback/v1.0/vote/",
      createVote: "/service/application/feedback/v1.0/vote/",
      updateVote: "/service/application/feedback/v1.0/vote/",
    };
    this._urls = Object.entries(this._relativeUrls).reduce(
      (urls, [method, relativeUrl]) => {
        urls[method] = `${_conf.domain}${relativeUrl}`;
        return urls;
      },
      {}
    );
  }

  updateUrls(urls) {
    this._urls = {
      ...this._urls,
      ...urls,
    };
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {ReportAbuseRequest} arg.body
   * @returns {Promise<InsertResponse>} - Success response
   * @summary: Post a new abuse request
   * @description: Use this API to report a specific entity (question/review/comment) for abuse.
   */
  createAbuseReport({ body } = {}) {
    const { error } = FeedbackValidator.createAbuseReport().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["createAbuseReport"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {UpdateAbuseStatusRequest} arg.body
   * @returns {Promise<UpdateResponse>} - Success response
   * @summary: Update abuse details
   * @description: Use this API to update the abuse details, i.e. status and description.
   */
  updateAbuseReport({ body } = {}) {
    const { error } = FeedbackValidator.updateAbuseReport().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "put",
      constructUrl({
        url: this._urls["updateAbuseReport"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.entityId - ID of the eligible entity as specified in
   *   the entity type (question ID/review ID/comment ID).
   * @param {string} arg.entityType - Type of entity, e.g. question, review or comment.
   * @param {string} [arg.id] - Abuse id
   * @param {string} [arg.pageId] - Pagination page ID to retrieve next set of results.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @returns {Promise<ReportAbuseGetResponse>} - Success response
   * @summary: Get a list of abuse data
   * @description: Use this API to retrieve a list of abuse data from entity type and entity ID.
   */
  getAbuseReports({ entityId, entityType, id, pageId, pageSize } = {}) {
    const { error } = FeedbackValidator.getAbuseReports().validate(
      { entityId, entityType, id, pageId, pageSize },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["id"] = id;
    query_params["page_id"] = pageId;
    query_params["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getAbuseReports"],
        params: { entityId, entityType },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.entityId - ID of the eligible entity as specified in
   *   the entity type (question ID/review ID/comment ID).
   * @param {string} arg.entityType - Type of entity, e.g. question, review or comment.
   * @param {string} [arg.id] - Abuse id
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @summary: Get a list of abuse data
   * @description: Use this API to retrieve a list of abuse data from entity type and entity ID.
   */
  getAbuseReportsPaginator({ entityId, entityType, id, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getAbuseReports({
        entityId: entityId,
        entityType: entityType,
        id: id,
        pageId: pageId,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results. Default value is 1.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @returns {Promise<AttributeResponse>} - Success response
   * @summary: Get a list of attribute data
   * @description: Use this API to retrieve a list of all attribute data, e.g. quality, material, product fitting, packaging, etc.
   */
  getAttributes({ pageNo, pageSize } = {}) {
    const { error } = FeedbackValidator.getAttributes().validate(
      { pageNo, pageSize },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getAttributes"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @summary: Get a list of attribute data
   * @description: Use this API to retrieve a list of all attribute data, e.g. quality, material, product fitting, packaging, etc.
   */
  getAttributesPaginator({ pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getAttributes({
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {SaveAttributeRequest} arg.body
   * @returns {Promise<InsertResponse>} - Success response
   * @summary: Add a new attribute request
   * @description: Use this API to add a new attribute (e.g. product quality/material/value for money) with its name, slug and description.
   */
  createAttribute({ body } = {}) {
    const { error } = FeedbackValidator.createAttribute().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["createAttribute"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of an attribute. You can get slug value from the endpoint
   *   'service/application/feedback/v1.0/attributes'.
   * @returns {Promise<Attribute>} - Success response
   * @summary: Get data of a single attribute
   * @description: Use this API to retrieve a single attribute data from a given slug.
   */
  getAttribute({ slug } = {}) {
    const { error } = FeedbackValidator.getAttribute().validate(
      { slug },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getAttribute"],
        params: { slug },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of an attribute. You can get slug value from the endpoint
   *   'service/application/feedback/v1.0/attributes'.
   * @param {UpdateAttributeRequest} arg.body
   * @returns {Promise<UpdateResponse>} - Success response
   * @summary: Update details of an attribute
   * @description: Use this API update the attribute's name and description.
   */
  updateAttribute({ slug, body } = {}) {
    const { error } = FeedbackValidator.updateAttribute().validate(
      { slug, body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "put",
      constructUrl({
        url: this._urls["updateAttribute"],
        params: { slug },
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CommentRequest} arg.body
   * @returns {Promise<InsertResponse>} - Success response
   * @summary: Post a new comment
   * @description: Use this API to add a new comment for a specific entity.
   */
  createComment({ body } = {}) {
    const { error } = FeedbackValidator.createComment().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["createComment"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {UpdateCommentRequest} arg.body
   * @returns {Promise<UpdateResponse>} - Success response
   * @summary: Update the status of a comment
   * @description: Use this API to update the comment status (active or approve) along with new comment if any.
   */
  updateComment({ body } = {}) {
    const { error } = FeedbackValidator.updateComment().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "put",
      constructUrl({
        url: this._urls["updateComment"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.entityType - Type of entity, e.g. question, review or comment.
   * @param {string} [arg.id] - Comment ID
   * @param {string} [arg.entityId] - ID of the eligible entity as specified
   *   in the entity type (question ID/review ID/comment ID).
   * @param {string} [arg.userId] - User ID - a flag/filter to get comments for a user.
   * @param {string} [arg.pageId] - Pagination page ID to retrieve next set of results.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @returns {Promise<CommentGetResponse>} - Success response
   * @summary: Get a list of comments
   * @description: Use this API to retrieve a list of comments for a specific entity type, e.g. products.
   */
  getComments({ entityType, id, entityId, userId, pageId, pageSize } = {}) {
    const { error } = FeedbackValidator.getComments().validate(
      { entityType, id, entityId, userId, pageId, pageSize },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["id"] = id;
    query_params["entity_id"] = entityId;
    query_params["user_id"] = userId;
    query_params["page_id"] = pageId;
    query_params["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getComments"],
        params: { entityType },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.entityType - Type of entity, e.g. question, review or comment.
   * @param {string} [arg.id] - Comment ID
   * @param {string} [arg.entityId] - ID of the eligible entity as specified
   *   in the entity type (question ID/review ID/comment ID).
   * @param {string} [arg.userId] - User ID - a flag/filter to get comments for a user.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @summary: Get a list of comments
   * @description: Use this API to retrieve a list of comments for a specific entity type, e.g. products.
   */
  getCommentsPaginator({ entityType, id, entityId, userId, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getComments({
        entityType: entityType,
        id: id,
        entityId: entityId,
        userId: userId,
        pageId: pageId,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.entityType - Type of entity, e.g. question, rate,
   *   review, answer, or comment.
   * @param {string} arg.entityId - ID of the eligible entity as specified in
   *   the entity type.
   * @returns {Promise<CheckEligibilityResponse>} - Success response
   * @summary: Checks eligibility to rate and review, and shows the cloud media configuration
   * @description: Use this API to check whether an entity is eligible to be rated and reviewed. Moreover, it shows the cloud media configuration too.
   */
  checkEligibility({ entityType, entityId } = {}) {
    const { error } = FeedbackValidator.checkEligibility().validate(
      { entityType, entityId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["checkEligibility"],
        params: { entityType, entityId },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string[]} arg.ids - List of media ID
   * @returns {Promise<UpdateResponse>} - Success response
   * @summary: Delete Media
   * @description: Use this API to delete media for an entity ID.
   */
  deleteMedia({ ids } = {}) {
    const { error } = FeedbackValidator.deleteMedia().validate(
      { ids },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["ids"] = ids;

    return APIClient.execute(
      this._conf,
      "delete",
      constructUrl({
        url: this._urls["deleteMedia"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {AddMediaListRequest} arg.body
   * @returns {Promise<InsertResponse>} - Success response
   * @summary: Add Media
   * @description: Use this API to add media to an entity, e.g. review.
   */
  createMedia({ body } = {}) {
    const { error } = FeedbackValidator.createMedia().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["createMedia"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {UpdateMediaListRequest} arg.body
   * @returns {Promise<UpdateResponse>} - Success response
   * @summary: Update Media
   * @description: Use this API to update media (archive/approve) for an entity.
   */
  updateMedia({ body } = {}) {
    const { error } = FeedbackValidator.updateMedia().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "put",
      constructUrl({
        url: this._urls["updateMedia"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.entityType - Type of entity, e.g. question or product.
   * @param {string} arg.entityId - ID of the eligible entity as specified in
   *   the entity type(question ID/product ID).
   * @param {string} [arg.id] - ID of the media.
   * @param {string} [arg.type] - Media type.
   * @param {string} [arg.pageId] - Pagination page ID to retrieve next set of results.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @returns {Promise<MediaGetResponse>} - Success response
   * @summary: Get Media
   * @description: Use this API to retrieve all media from an entity.
   */
  getMedias({ entityType, entityId, id, type, pageId, pageSize } = {}) {
    const { error } = FeedbackValidator.getMedias().validate(
      { entityType, entityId, id, type, pageId, pageSize },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["id"] = id;
    query_params["type"] = type;
    query_params["page_id"] = pageId;
    query_params["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getMedias"],
        params: { entityType, entityId },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.entityType - Type of entity, e.g. question or product.
   * @param {string} arg.entityId - ID of the eligible entity as specified in
   *   the entity type(question ID/product ID).
   * @param {string} [arg.id] - ID of the media.
   * @param {string} [arg.type] - Media type.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @summary: Get Media
   * @description: Use this API to retrieve all media from an entity.
   */
  getMediasPaginator({ entityType, entityId, id, type, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getMedias({
        entityType: entityType,
        entityId: entityId,
        id: id,
        type: type,
        pageId: pageId,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.entityType - Type of entity, e.g. product, delivery,
   *   seller, order placed, order delivered, application, or template.
   * @param {string} arg.entityId - ID of the eligible entity as specified in
   *   the entity type.
   * @param {string} [arg.id] - Review summary identifier.
   * @param {string} [arg.pageId] - Pagination page ID to retrieve next set of results.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @returns {Promise<ReviewMetricGetResponse>} - Success response
   * @summary: Get a review summary
   * @description: Review summary gives ratings and attribute metrics of a review per entity. Use this API to retrieve the following response data: review count, rating average. 'review metrics'/'attribute rating metrics' which contains name, type, average and count.
   */
  getReviewSummaries({ entityType, entityId, id, pageId, pageSize } = {}) {
    const { error } = FeedbackValidator.getReviewSummaries().validate(
      { entityType, entityId, id, pageId, pageSize },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["id"] = id;
    query_params["page_id"] = pageId;
    query_params["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getReviewSummaries"],
        params: { entityType, entityId },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.entityType - Type of entity, e.g. product, delivery,
   *   seller, order placed, order delivered, application, or template.
   * @param {string} arg.entityId - ID of the eligible entity as specified in
   *   the entity type.
   * @param {string} [arg.id] - Review summary identifier.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @summary: Get a review summary
   * @description: Review summary gives ratings and attribute metrics of a review per entity. Use this API to retrieve the following response data: review count, rating average. 'review metrics'/'attribute rating metrics' which contains name, type, average and count.
   */
  getReviewSummariesPaginator({ entityType, entityId, id, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getReviewSummaries({
        entityType: entityType,
        entityId: entityId,
        id: id,
        pageId: pageId,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {UpdateReviewRequest} arg.body
   * @returns {Promise<UpdateResponse>} - Success response
   * @summary: Add customer reviews
   * @description: Use this API to add customer reviews for a specific entity along with the following data: attributes rating, entity rating, title, description, media resources and template ID.
   */
  createReview({ body } = {}) {
    const { error } = FeedbackValidator.createReview().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["createReview"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {UpdateReviewRequest} arg.body
   * @returns {Promise<UpdateResponse>} - Success response
   * @summary: Update customer reviews
   * @description: Use this API to update customer reviews for a specific entity along with following data: attributes rating, entity rating, title, description, media resources and template ID.
   */
  updateReview({ body } = {}) {
    const { error } = FeedbackValidator.updateReview().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "put",
      constructUrl({
        url: this._urls["updateReview"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.entityType - Type of entity, e.g. product, delivery,
   *   seller, l3, order placed, order delivered, application, or template.
   * @param {string} arg.entityId - ID of the eligible entity as specified in
   *   the entity type.
   * @param {string} [arg.id] - ID of the review.
   * @param {string} [arg.userId] - ID of the user.
   * @param {string} [arg.media] - Media type, e.g. image | video | video_file
   *   | video_link
   * @param {number[]} [arg.rating] - Rating filter, e.g. 1-5
   * @param {string[]} [arg.attributeRating] - Filter for attribute rating.
   * @param {boolean} [arg.facets] - This is a boolean value for enabling
   *   metadata (facets). Selecting *true* will enable facets.
   * @param {string} [arg.sort] - Sort by: default | top | recent
   * @param {boolean} [arg.active] - Get the active reviews.
   * @param {boolean} [arg.approve] - Get the approved reviews.
   * @param {string} [arg.pageId] - Pagination page ID to retrieve next set of results.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @returns {Promise<ReviewGetResponse>} - Success response
   * @summary: Get list of customer reviews
   * @description: Use this API to retrieve a list of customer reviews based on entity and filters provided.
   */
  getReviews({
    entityType,
    entityId,
    id,
    userId,
    media,
    rating,
    attributeRating,
    facets,
    sort,
    active,
    approve,
    pageId,
    pageSize,
  } = {}) {
    const { error } = FeedbackValidator.getReviews().validate(
      {
        entityType,
        entityId,
        id,
        userId,
        media,
        rating,
        attributeRating,
        facets,
        sort,
        active,
        approve,
        pageId,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["id"] = id;
    query_params["user_id"] = userId;
    query_params["media"] = media;
    query_params["rating"] = rating;
    query_params["attribute_rating"] = attributeRating;
    query_params["facets"] = facets;
    query_params["sort"] = sort;
    query_params["active"] = active;
    query_params["approve"] = approve;
    query_params["page_id"] = pageId;
    query_params["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getReviews"],
        params: { entityType, entityId },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.entityType - Type of entity, e.g. product, delivery,
   *   seller, l3, order placed, order delivered, application, or template.
   * @param {string} arg.entityId - ID of the eligible entity as specified in
   *   the entity type.
   * @param {string} [arg.id] - ID of the review.
   * @param {string} [arg.userId] - ID of the user.
   * @param {string} [arg.media] - Media type, e.g. image | video | video_file
   *   | video_link
   * @param {number[]} [arg.rating] - Rating filter, e.g. 1-5
   * @param {string[]} [arg.attributeRating] - Filter for attribute rating.
   * @param {boolean} [arg.facets] - This is a boolean value for enabling
   *   metadata (facets). Selecting *true* will enable facets.
   * @param {string} [arg.sort] - Sort by: default | top | recent
   * @param {boolean} [arg.active] - Get the active reviews.
   * @param {boolean} [arg.approve] - Get the approved reviews.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @summary: Get list of customer reviews
   * @description: Use this API to retrieve a list of customer reviews based on entity and filters provided.
   */
  getReviewsPaginator({
    entityType,
    entityId,
    id,
    userId,
    media,
    rating,
    attributeRating,
    facets,
    sort,
    active,
    approve,
    pageSize,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getReviews({
        entityType: entityType,
        entityId: entityId,
        id: id,
        userId: userId,
        media: media,
        rating: rating,
        attributeRating: attributeRating,
        facets: facets,
        sort: sort,
        active: active,
        approve: approve,
        pageId: pageId,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.templateId] - ID of the feedback template.
   * @param {string} [arg.entityId] - ID of the eligible entity as specified
   *   in the entity type.
   * @param {string} [arg.entityType] - Type of entity, e.g. product,
   *   delivery, seller, l3, order placed, order delivered, or application.
   * @returns {Promise<TemplateGetResponse>} - Success response
   * @summary: Get the feedback templates for a product or l3
   * @description: Use this API to retrieve the details of the following feedback template. order, delivered, application, seller, order, placed, product
   */
  getTemplates({ templateId, entityId, entityType } = {}) {
    const { error } = FeedbackValidator.getTemplates().validate(
      { templateId, entityId, entityType },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["template_id"] = templateId;
    query_params["entity_id"] = entityId;
    query_params["entity_type"] = entityType;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getTemplates"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CreateQNARequest} arg.body
   * @returns {Promise<InsertResponse>} - Success response
   * @summary: Create a new question
   * @description: Use this API to create a new question with following data- tags, text, type, choices for MCQ type questions, maximum length of answer.
   */
  createQuestion({ body } = {}) {
    const { error } = FeedbackValidator.createQuestion().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["createQuestion"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {UpdateQNARequest} arg.body
   * @returns {Promise<UpdateResponse>} - Success response
   * @summary: Update a question
   * @description: Use this API to update the status of a question, its tags and its choices.
   */
  updateQuestion({ body } = {}) {
    const { error } = FeedbackValidator.updateQuestion().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "put",
      constructUrl({
        url: this._urls["updateQuestion"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.entityType - Type of entity, e.g. product, l3, etc.
   * @param {string} arg.entityId - ID of the eligible entity as specified in
   *   the entity type.
   * @param {string} [arg.id] - QNA ID
   * @param {string} [arg.userId] - User ID
   * @param {boolean} [arg.showAnswer] - This is a boolean value. Select
   *   *true* to display answers given.
   * @param {string} [arg.pageId] - Pagination page ID to retrieve next set of results.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @returns {Promise<QNAGetResponse>} - Success response
   * @summary: Get a list of QnA
   * @description: Use this API to retrieve a list of questions and answers for a given entity.
   */
  getQuestionAndAnswers({
    entityType,
    entityId,
    id,
    userId,
    showAnswer,
    pageId,
    pageSize,
  } = {}) {
    const { error } = FeedbackValidator.getQuestionAndAnswers().validate(
      { entityType, entityId, id, userId, showAnswer, pageId, pageSize },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["id"] = id;
    query_params["user_id"] = userId;
    query_params["show_answer"] = showAnswer;
    query_params["page_id"] = pageId;
    query_params["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getQuestionAndAnswers"],
        params: { entityType, entityId },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.entityType - Type of entity, e.g. product, l3, etc.
   * @param {string} arg.entityId - ID of the eligible entity as specified in
   *   the entity type.
   * @param {string} [arg.id] - QNA ID
   * @param {string} [arg.userId] - User ID
   * @param {boolean} [arg.showAnswer] - This is a boolean value. Select
   *   *true* to display answers given.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @summary: Get a list of QnA
   * @description: Use this API to retrieve a list of questions and answers for a given entity.
   */
  getQuestionAndAnswersPaginator({
    entityType,
    entityId,
    id,
    userId,
    showAnswer,
    pageSize,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getQuestionAndAnswers({
        entityType: entityType,
        entityId: entityId,
        id: id,
        userId: userId,
        showAnswer: showAnswer,
        pageId: pageId,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.id] - Vote ID
   * @param {string} [arg.refType] - Entity type, e.g. review | comment.
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results. Default value is 1.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @returns {Promise<VoteResponse>} - Success response
   * @summary: Get a list of votes
   * @description: Use this API to retrieve a list of votes of a current logged in user. Votes can be filtered using `ref_type`, i.e. review | comment.
   */
  getVotes({ id, refType, pageNo, pageSize } = {}) {
    const { error } = FeedbackValidator.getVotes().validate(
      { id, refType, pageNo, pageSize },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["id"] = id;
    query_params["ref_type"] = refType;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getVotes"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.id] - Vote ID
   * @param {string} [arg.refType] - Entity type, e.g. review | comment.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @summary: Get a list of votes
   * @description: Use this API to retrieve a list of votes of a current logged in user. Votes can be filtered using `ref_type`, i.e. review | comment.
   */
  getVotesPaginator({ id, refType, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getVotes({
        id: id,
        refType: refType,
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {VoteRequest} arg.body
   * @returns {Promise<InsertResponse>} - Success response
   * @summary: Create a new vote
   * @description: Use this API to create a new vote, where the action could be an upvote or a downvote. This is useful when you want to give a vote (say upvote) to a review (ref_type) of a product (entity_type).
   */
  createVote({ body } = {}) {
    const { error } = FeedbackValidator.createVote().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["createVote"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {UpdateVoteRequest} arg.body
   * @returns {Promise<UpdateResponse>} - Success response
   * @summary: Update a vote
   * @description: Use this API to update a vote with a new action, i.e. either an upvote or a downvote.
   */
  updateVote({ body } = {}) {
    const { error } = FeedbackValidator.updateVote().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "put",
      constructUrl({
        url: this._urls["updateVote"],
        params: {},
      }),
      query_params,
      body
    );
  }
}

class PosCart {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      getCart: "/service/application/pos/cart/v1.0/detail",
      getCartLastModified: "/service/application/pos/cart/v1.0/detail",
      addItems: "/service/application/pos/cart/v1.0/detail",
      updateCart: "/service/application/pos/cart/v1.0/detail",
      getItemCount: "/service/application/pos/cart/v1.0/basic",
      getCoupons: "/service/application/pos/cart/v1.0/coupon",
      applyCoupon: "/service/application/pos/cart/v1.0/coupon",
      removeCoupon: "/service/application/pos/cart/v1.0/coupon",
      getBulkDiscountOffers: "/service/application/pos/cart/v1.0/bulk-price",
      applyRewardPoints: "/service/application/pos/cart/v1.0/redeem/points/",
      getAddresses: "/service/application/pos/cart/v1.0/address",
      addAddress: "/service/application/pos/cart/v1.0/address",
      getAddressById: "/service/application/pos/cart/v1.0/address/{id}",
      updateAddress: "/service/application/pos/cart/v1.0/address/{id}",
      removeAddress: "/service/application/pos/cart/v1.0/address/{id}",
      selectAddress: "/service/application/pos/cart/v1.0/select-address",
      selectPaymentMode: "/service/application/pos/cart/v1.0/payment",
      validateCouponForPayment:
        "/service/application/pos/cart/v1.0/payment/validate/",
      getShipments: "/service/application/pos/cart/v1.0/shipment",
      updateShipments: "/service/application/pos/cart/v1.0/shipment",
      checkoutCart: "/service/application/pos/cart/v1.0/checkout",
      updateCartMeta: "/service/application/pos/cart/v1.0/meta",
      getAvailableDeliveryModes:
        "/service/application/pos/cart/v1.0/available-delivery-mode",
      getStoreAddressByUid: "/service/application/pos/cart/v1.0/store-address",
      getCartShareLink: "/service/application/pos/cart/v1.0/share-cart",
      getCartSharedItems:
        "/service/application/pos/cart/v1.0/share-cart/{token}",
      updateCartWithSharedItems:
        "/service/application/pos/cart/v1.0/share-cart/{token}/{action}",
    };
    this._urls = Object.entries(this._relativeUrls).reduce(
      (urls, [method, relativeUrl]) => {
        urls[method] = `${_conf.domain}${relativeUrl}`;
        return urls;
      },
      {}
    );
  }

  updateUrls(urls) {
    this._urls = {
      ...this._urls,
      ...urls,
    };
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.id] -
   * @param {boolean} [arg.i] -
   * @param {boolean} [arg.b] -
   * @param {number} [arg.assignCardId] -
   * @param {boolean} [arg.buyNow] -
   * @returns {Promise<CartDetailResponse>} - Success response
   * @summary: Fetch all items added to the cart
   * @description: Use this API to get details of all the items added to a cart.
   */
  getCart({ id, i, b, assignCardId, buyNow } = {}) {
    const { error } = PosCartValidator.getCart().validate(
      { id, i, b, assignCardId, buyNow },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["id"] = id;
    query_params["i"] = i;
    query_params["b"] = b;
    query_params["assign_card_id"] = assignCardId;
    query_params["buy_now"] = buyNow;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getCart"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.id] -
   * @returns {Promise<any>} - Success response
   * @summary: Fetch last-modified timestamp
   * @description: Use this API to fetch Last-Modified timestamp in header metadata.
   */
  getCartLastModified({ id } = {}) {
    const { error } = PosCartValidator.getCartLastModified().validate(
      { id },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["id"] = id;

    return APIClient.execute(
      this._conf,
      "head",
      constructUrl({
        url: this._urls["getCartLastModified"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {boolean} [arg.i] -
   * @param {boolean} [arg.b] -
   * @param {boolean} [arg.buyNow] -
   * @param {AddCartRequest} arg.body
   * @returns {Promise<AddCartDetailResponse>} - Success response
   * @summary: Add items to cart
   * @description: Use this API to add items to the cart.
   */
  addItems({ body, i, b, buyNow } = {}) {
    const { error } = PosCartValidator.addItems().validate(
      { body, i, b, buyNow },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["i"] = i;
    query_params["b"] = b;
    query_params["buy_now"] = buyNow;

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["addItems"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.id] -
   * @param {boolean} [arg.i] -
   * @param {boolean} [arg.b] -
   * @param {boolean} [arg.buyNow] -
   * @param {UpdateCartRequest} arg.body
   * @returns {Promise<UpdateCartDetailResponse>} - Success response
   * @summary: Update items in the cart
   * @description: <p>Use this API to update items added to the cart with the help of a request object containing attributes like item_quantity and item_size. These attributes will be fetched from the following APIs</p> <ul> <li><font color="monochrome">operation</font> Operation for current api call. <b>update_item</b> for update items. <b>remove_item</b> for removing items.</li> <li> <font color="monochrome">item_id</font>  "/platform/content/v1/products/"</li> <li> <font color="monochrome">item_size</font>   "/platform/content/v1/products/:slug/sizes/"</li> <li> <font color="monochrome">quantity</font>  item quantity (must be greater than or equal to 1)</li> <li> <font color="monochrome">article_id</font>   "/content​/v1​/products​/:identifier​/sizes​/price​/"</li> <li> <font color="monochrome">item_index</font>  item position in the cart (must be greater than or equal to 0)</li> </ul>
   */
  updateCart({ body, id, i, b, buyNow } = {}) {
    const { error } = PosCartValidator.updateCart().validate(
      { body, id, i, b, buyNow },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["id"] = id;
    query_params["i"] = i;
    query_params["b"] = b;
    query_params["buy_now"] = buyNow;

    return APIClient.execute(
      this._conf,
      "put",
      constructUrl({
        url: this._urls["updateCart"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.id] - The unique identifier of the cart.
   * @param {boolean} [arg.buyNow] -
   * @returns {Promise<CartItemCountResponse>} - Success response
   * @summary: Count items in the cart
   * @description: Use this API to get the total number of items present in cart.
   */
  getItemCount({ id, buyNow } = {}) {
    const { error } = PosCartValidator.getItemCount().validate(
      { id, buyNow },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["id"] = id;
    query_params["buy_now"] = buyNow;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getItemCount"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.id] -
   * @param {boolean} [arg.buyNow] -
   * @returns {Promise<GetCouponResponse>} - Success response
   * @summary: Fetch Coupon
   * @description: Use this API to get a list of available coupons along with their details.
   */
  getCoupons({ id, buyNow } = {}) {
    const { error } = PosCartValidator.getCoupons().validate(
      { id, buyNow },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["id"] = id;
    query_params["buy_now"] = buyNow;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getCoupons"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {boolean} [arg.i] -
   * @param {boolean} [arg.b] -
   * @param {boolean} [arg.p] -
   * @param {string} [arg.id] -
   * @param {boolean} [arg.buyNow] -
   * @param {ApplyCouponRequest} arg.body
   * @returns {Promise<CartDetailResponse>} - Success response
   * @summary: Apply Coupon
   * @description: Use this API to apply coupons on items in the cart.
   */
  applyCoupon({ body, i, b, p, id, buyNow } = {}) {
    const { error } = PosCartValidator.applyCoupon().validate(
      { body, i, b, p, id, buyNow },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["i"] = i;
    query_params["b"] = b;
    query_params["p"] = p;
    query_params["id"] = id;
    query_params["buy_now"] = buyNow;

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["applyCoupon"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.id] -
   * @param {boolean} [arg.buyNow] -
   * @returns {Promise<CartDetailResponse>} - Success response
   * @summary: Remove Coupon Applied
   * @description: Remove Coupon applied on the cart by passing uid in request body.
   */
  removeCoupon({ id, buyNow } = {}) {
    const { error } = PosCartValidator.removeCoupon().validate(
      { id, buyNow },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["id"] = id;
    query_params["buy_now"] = buyNow;

    return APIClient.execute(
      this._conf,
      "delete",
      constructUrl({
        url: this._urls["removeCoupon"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.itemId] - The Item ID of the product
   * @param {string} [arg.articleId] - Article Mongo ID
   * @param {number} [arg.uid] - UID of the product
   * @param {string} [arg.slug] - A short, human-readable, URL-friendly
   *   identifier of a product. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/products/
   * @returns {Promise<BulkPriceResponse>} - Success response
   * @summary: Get discount offers based on quantity
   * @description: Use this API to get a list of applicable offers along with current, next and best offer for given product. Either one of uid, item_id, slug should be present.
   */
  getBulkDiscountOffers({ itemId, articleId, uid, slug } = {}) {
    const { error } = PosCartValidator.getBulkDiscountOffers().validate(
      { itemId, articleId, uid, slug },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["item_id"] = itemId;
    query_params["article_id"] = articleId;
    query_params["uid"] = uid;
    query_params["slug"] = slug;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getBulkDiscountOffers"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.id] -
   * @param {boolean} [arg.i] -
   * @param {boolean} [arg.b] -
   * @param {boolean} [arg.buyNow] -
   * @param {RewardPointRequest} arg.body
   * @returns {Promise<CartDetailResponse>} - Success response
   * @summary: Apply reward points at cart
   * @description: Use this API to redeem a fixed no. of reward points by applying it to the cart.
   */
  applyRewardPoints({ body, id, i, b, buyNow } = {}) {
    const { error } = PosCartValidator.applyRewardPoints().validate(
      { body, id, i, b, buyNow },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["id"] = id;
    query_params["i"] = i;
    query_params["b"] = b;
    query_params["buy_now"] = buyNow;

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["applyRewardPoints"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.cartId] -
   * @param {boolean} [arg.buyNow] -
   * @param {string} [arg.mobileNo] -
   * @param {string} [arg.checkoutMode] -
   * @param {string} [arg.tags] -
   * @param {boolean} [arg.isDefault] -
   * @returns {Promise<GetAddressesResponse>} - Success response
   * @summary: Fetch address
   * @description: Use this API to get all the addresses associated with an account. If successful, returns a Address resource in the response body specified in GetAddressesResponse.attibutes listed below are optional <ul> <li> <font color="monochrome">uid</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
   */
  getAddresses({
    cartId,
    buyNow,
    mobileNo,
    checkoutMode,
    tags,
    isDefault,
  } = {}) {
    const { error } = PosCartValidator.getAddresses().validate(
      { cartId, buyNow, mobileNo, checkoutMode, tags, isDefault },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["cart_id"] = cartId;
    query_params["buy_now"] = buyNow;
    query_params["mobile_no"] = mobileNo;
    query_params["checkout_mode"] = checkoutMode;
    query_params["tags"] = tags;
    query_params["is_default"] = isDefault;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getAddresses"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {Address} arg.body
   * @returns {Promise<SaveAddressResponse>} - Success response
   * @summary: Add address to an account
   * @description: Use this API to add an address to an account.
   */
  addAddress({ body } = {}) {
    const { error } = PosCartValidator.addAddress().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["addAddress"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id -
   * @param {string} [arg.cartId] -
   * @param {boolean} [arg.buyNow] -
   * @param {string} [arg.mobileNo] -
   * @param {string} [arg.checkoutMode] -
   * @param {string} [arg.tags] -
   * @param {boolean} [arg.isDefault] -
   * @returns {Promise<Address>} - Success response
   * @summary: Fetch a single address by its ID
   * @description: Use this API to get an addresses using its ID. If successful, returns a Address resource in the response body specified in `Address`. Attibutes listed below are optional <ul> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
   */
  getAddressById({
    id,
    cartId,
    buyNow,
    mobileNo,
    checkoutMode,
    tags,
    isDefault,
  } = {}) {
    const { error } = PosCartValidator.getAddressById().validate(
      { id, cartId, buyNow, mobileNo, checkoutMode, tags, isDefault },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["cart_id"] = cartId;
    query_params["buy_now"] = buyNow;
    query_params["mobile_no"] = mobileNo;
    query_params["checkout_mode"] = checkoutMode;
    query_params["tags"] = tags;
    query_params["is_default"] = isDefault;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getAddressById"],
        params: { id },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - ID allotted to the selected address
   * @param {Address} arg.body
   * @returns {Promise<UpdateAddressResponse>} - Success response
   * @summary: Update address added to an account
   * @description: <p>Use this API to update an existing address in the account. Request object should contain attributes mentioned in  <font color="blue">Address </font> can be updated. These attributes are:</p> <ul> <li> <font color="monochrome">is_default_address</font></li> <li> <font color="monochrome">landmark</font></li> <li> <font color="monochrome">area</font></li> <li> <font color="monochrome">pincode</font></li> <li> <font color="monochrome">email</font></li> <li> <font color="monochrome">address_type</font></li> <li> <font color="monochrome">name</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">address</font></li> </ul>
   */
  updateAddress({ id, body } = {}) {
    const { error } = PosCartValidator.updateAddress().validate(
      { id, body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "put",
      constructUrl({
        url: this._urls["updateAddress"],
        params: { id },
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - ID allotted to the selected address
   * @returns {Promise<DeleteAddressResponse>} - Success response
   * @summary: Remove address associated with an account
   * @description: Use this API to delete an address by its ID. This will returns an object that will indicate whether the address was deleted successfully or not.
   */
  removeAddress({ id } = {}) {
    const { error } = PosCartValidator.removeAddress().validate(
      { id },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "delete",
      constructUrl({
        url: this._urls["removeAddress"],
        params: { id },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.cartId] -
   * @param {boolean} [arg.buyNow] -
   * @param {boolean} [arg.i] -
   * @param {boolean} [arg.b] -
   * @param {SelectCartAddressRequest} arg.body
   * @returns {Promise<CartDetailResponse>} - Success response
   * @summary: Select an address from available addresses
   * @description: <p>Select Address from all addresses associated with the account in order to ship the cart items to that address, otherwise default address will be selected implicitly. See `SelectCartAddressRequest` in schema of request body for the list of attributes needed to select Address from account. On successful request, this API returns a Cart object. Below address attributes are required. <ul> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">billing_address_id</font></li> <li> <font color="monochrome">uid</font></li> </ul></p>
   */
  selectAddress({ body, cartId, buyNow, i, b } = {}) {
    const { error } = PosCartValidator.selectAddress().validate(
      { body, cartId, buyNow, i, b },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["cart_id"] = cartId;
    query_params["buy_now"] = buyNow;
    query_params["i"] = i;
    query_params["b"] = b;

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["selectAddress"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.id] -
   * @param {boolean} [arg.buyNow] -
   * @param {UpdateCartPaymentRequest} arg.body
   * @returns {Promise<CartDetailResponse>} - Success response
   * @summary: Update cart payment
   * @description: Use this API to update cart payment.
   */
  selectPaymentMode({ body, id, buyNow } = {}) {
    const { error } = PosCartValidator.selectPaymentMode().validate(
      { body, id, buyNow },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["id"] = id;
    query_params["buy_now"] = buyNow;

    return APIClient.execute(
      this._conf,
      "put",
      constructUrl({
        url: this._urls["selectPaymentMode"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.id] -
   * @param {boolean} [arg.buyNow] -
   * @param {string} [arg.addressId] -
   * @param {string} [arg.paymentMode] -
   * @param {string} [arg.paymentIdentifier] -
   * @param {string} [arg.aggregatorName] -
   * @param {string} [arg.merchantCode] -
   * @returns {Promise<PaymentCouponValidate>} - Success response
   * @summary: Verify the coupon eligibility against the payment mode
   * @description: Use this API to validate a coupon against the payment mode such as NetBanking, Wallet, UPI etc.
   */
  validateCouponForPayment({
    id,
    buyNow,
    addressId,
    paymentMode,
    paymentIdentifier,
    aggregatorName,
    merchantCode,
  } = {}) {
    const { error } = PosCartValidator.validateCouponForPayment().validate(
      {
        id,
        buyNow,
        addressId,
        paymentMode,
        paymentIdentifier,
        aggregatorName,
        merchantCode,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["id"] = id;
    query_params["buy_now"] = buyNow;
    query_params["address_id"] = addressId;
    query_params["payment_mode"] = paymentMode;
    query_params["payment_identifier"] = paymentIdentifier;
    query_params["aggregator_name"] = aggregatorName;
    query_params["merchant_code"] = merchantCode;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["validateCouponForPayment"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pickAtStoreUid] -
   * @param {number} [arg.orderingStoreId] -
   * @param {boolean} [arg.p] - This is a boolean value. Select `true` for
   *   getting a payment option in response.
   * @param {string} [arg.id] - The unique identifier of the cart
   * @param {string} [arg.addressId] - ID allotted to the selected address
   * @param {string} [arg.areaCode] - The PIN Code of the destination address,
   *   e.g. 400059
   * @param {string} [arg.orderType] - The order type of shipment HomeDelivery
   *   - If the customer wants the order home-delivered PickAtStore - If the
   *   customer wants the handover of an order at the store itself.
   * @returns {Promise<CartShipmentsResponse>} - Success response
   * @summary: Get delivery date and options before checkout
   * @description: Use this API to get shipment details, expected delivery date, items and price breakup of the shipment.
   */
  getShipments({
    pickAtStoreUid,
    orderingStoreId,
    p,
    id,
    addressId,
    areaCode,
    orderType,
  } = {}) {
    const { error } = PosCartValidator.getShipments().validate(
      {
        pickAtStoreUid,
        orderingStoreId,
        p,
        id,
        addressId,
        areaCode,
        orderType,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["pick_at_store_uid"] = pickAtStoreUid;
    query_params["ordering_store_id"] = orderingStoreId;
    query_params["p"] = p;
    query_params["id"] = id;
    query_params["address_id"] = addressId;
    query_params["area_code"] = areaCode;
    query_params["order_type"] = orderType;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getShipments"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {boolean} [arg.i] - This is a boolean value. Select `true` to
   *   retrieve all the items added in the cart.
   * @param {boolean} [arg.p] - This is a boolean value. Select `true` for
   *   getting a payment option in response.
   * @param {string} [arg.id] - The unique identifier of the cart
   * @param {string} [arg.addressId] - ID allotted to an address
   * @param {string} [arg.orderType] - The order type of shipment HomeDelivery
   *   - If the customer wants the order home-delivered PickAtStore - If the
   *   customer wants the handover of an order at the store itself.
   * @param {UpdateCartShipmentRequest} arg.body
   * @returns {Promise<CartShipmentsResponse>} - Success response
   * @summary: Update shipment delivery type and quantity before checkout
   * @description: Use this API to update the delivery type and quantity as per customer's preference for either store pick-up or home-delivery.
   */
  updateShipments({ body, i, p, id, addressId, orderType } = {}) {
    const { error } = PosCartValidator.updateShipments().validate(
      { body, i, p, id, addressId, orderType },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["i"] = i;
    query_params["p"] = p;
    query_params["id"] = id;
    query_params["address_id"] = addressId;
    query_params["order_type"] = orderType;

    return APIClient.execute(
      this._conf,
      "put",
      constructUrl({
        url: this._urls["updateShipments"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.id] -
   * @param {CartPosCheckoutDetailRequest} arg.body
   * @returns {Promise<CartCheckoutResponse>} - Success response
   * @summary: Checkout all items in the cart
   * @description: Use this API to checkout all items in the cart for payment and order generation. For COD, order will be generated directly, whereas for other checkout modes, user will be redirected to a payment gateway.
   */
  checkoutCart({ body, id } = {}) {
    const { error } = PosCartValidator.checkoutCart().validate(
      { body, id },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["id"] = id;

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["checkoutCart"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.id] -
   * @param {boolean} [arg.buyNow] -
   * @param {CartMetaRequest} arg.body
   * @returns {Promise<CartMetaResponse>} - Success response
   * @summary: Update the cart meta
   * @description: Use this API to update cart meta like checkout_mode and gstin.
   */
  updateCartMeta({ body, id, buyNow } = {}) {
    const { error } = PosCartValidator.updateCartMeta().validate(
      { body, id, buyNow },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["id"] = id;
    query_params["buy_now"] = buyNow;

    return APIClient.execute(
      this._conf,
      "put",
      constructUrl({
        url: this._urls["updateCartMeta"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.areaCode -
   * @param {string} [arg.id] -
   * @returns {Promise<CartDeliveryModesResponse>} - Success response
   * @summary: Get available delivery modes for cart
   * @description: Use this API to get the delivery modes (home-delivery/store-pickup) along with a list of pickup stores available for a given cart at a given PIN Code. User can then view the address of a pickup store with the help of store-address API.
   */
  getAvailableDeliveryModes({ areaCode, id } = {}) {
    const { error } = PosCartValidator.getAvailableDeliveryModes().validate(
      { areaCode, id },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["area_code"] = areaCode;
    query_params["id"] = id;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getAvailableDeliveryModes"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} arg.storeUid -
   * @returns {Promise<StoreDetailsResponse>} - Success response
   * @summary: Get list of stores for give uids
   * @description: Use this API to get the store details by entering the unique identifier of the pickup stores shown in the response of available-delivery-mode API.
   */
  getStoreAddressByUid({ storeUid } = {}) {
    const { error } = PosCartValidator.getStoreAddressByUid().validate(
      { storeUid },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["store_uid"] = storeUid;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getStoreAddressByUid"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {GetShareCartLinkRequest} arg.body
   * @returns {Promise<GetShareCartLinkResponse>} - Success response
   * @summary: Generate token for sharing the cart
   * @description: Use this API to generate a shared cart snapshot and return a shortlink token. The link can be shared with other users for getting the same items in their cart.
   */
  getCartShareLink({ body } = {}) {
    const { error } = PosCartValidator.getCartShareLink().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["getCartShareLink"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.token - Token of the shared short link
   * @returns {Promise<SharedCartResponse>} - Success response
   * @summary: Get details of a shared cart
   * @description: Use this API to get the shared cart details as per the token generated using the share-cart API.
   */
  getCartSharedItems({ token } = {}) {
    const { error } = PosCartValidator.getCartSharedItems().validate(
      { token },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getCartSharedItems"],
        params: { token },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.token - Token of the shared short link
   * @param {string} arg.action - Operation to perform on the existing cart
   *   merge or replace.
   * @returns {Promise<SharedCartResponse>} - Success response
   * @summary: Merge or replace existing cart
   * @description: Use this API to merge the shared cart with existing cart, or replace the existing cart with the shared cart. The `action` parameter is used to indicate the operation Merge or Replace.
   */
  updateCartWithSharedItems({ token, action } = {}) {
    const { error } = PosCartValidator.updateCartWithSharedItems().validate(
      { token, action },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["updateCartWithSharedItems"],
        params: { token, action },
      }),
      query_params,
      undefined
    );
  }
}

class Logistic {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      getTatProduct: "/service/application/logistics/v1.0",
      getPincodeZones: "/service/application/logistics/v1.0/pincode/zones",
      getPincodeCity: "/service/application/logistics/v1.0/pincode/{pincode}",
    };
    this._urls = Object.entries(this._relativeUrls).reduce(
      (urls, [method, relativeUrl]) => {
        urls[method] = `${_conf.domain}${relativeUrl}`;
        return urls;
      },
      {}
    );
  }

  updateUrls(urls) {
    this._urls = {
      ...this._urls,
      ...urls,
    };
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {GetTatProductReqBody} arg.body
   * @returns {Promise<GetTatProductResponse>} - Success response
   * @summary: Get TAT of a product
   * @description: Use this API to know the delivery turnaround time (TAT) by entering the product details along with the PIN Code of the location.
   */
  getTatProduct({ body } = {}) {
    const { error } = LogisticValidator.getTatProduct().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["getTatProduct"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {GetPincodeZonesReqBody} arg.body
   * @returns {Promise<GetPincodeZonesResponse>} - Success response
   * @summary: Get Pincode Zones
   * @description: Get to know the zones of a specefic pincode
   */
  getPincodeZones({ body } = {}) {
    const { error } = LogisticValidator.getPincodeZones().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["getPincodeZones"],
        params: {},
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.pincode - The PIN Code of the area, e.g. 400059
   * @returns {Promise<GetPincodeCityResponse>} - Success response
   * @summary: Get city from PIN Code
   * @description: Use this API to retrieve a city by its PIN Code.
   */
  getPincodeCity({ pincode } = {}) {
    const { error } = LogisticValidator.getPincodeCity().validate(
      { pincode },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getPincodeCity"],
        params: { pincode },
      }),
      query_params,
      undefined
    );
  }
}

/**
 * @param data
 * @param {string} file_name
 * @param {string} content_type
 * @param {string} namespace
 * @param {number} size
 * @param {number} tags
 */
FileStorage.prototype.upload = function ({
  data,
  file_name,
  content_type,
  namespace,
  size,
  tags,
} = {}) {
  return new Promise(async (resolve, reject) => {
    try {
      const dataObj = await this.startUpload({
        namespace,
        body: {
          file_name,
          content_type,
          size: size,
          tags: tags,
        },
      });
      if (dataObj.upload && dataObj.upload.url) {
        await axios.put(dataObj.upload.url, data, {
          withCredentials: false,
          headers: { "Content-Type": content_type },
        });
      } else {
        reject({ message: "Failed to upload file" });
      }
      delete dataObj.tags;
      const completeRes = await this.completeUpload({
        namespace,
        body: dataObj,
      });
      resolve(completeRes);
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = ApplicationClient;
