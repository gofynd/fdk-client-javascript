const axios = require("axios");
const {
  CatalogValidator,
  CartValidator,
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
} = require("./ApplicationModels");

const APIClient = require("./ApplicationAPIClient");
const Paginator = require("../common/Paginator");

class ApplicationClient {
  constructor(config) {
    this.catalog = new Catalog(config);
    this.cart = new Cart(config);
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
}

class Catalog {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * @summary: Get a product
    * @description: Use this API to retrieve a product by its slug value.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a product. You can get slug value from the endpoint /service/application/catalog/v1.0/products/
    
    **/
  getProductDetailBySlug({ slug } = {}) {
    const { error } = CatalogValidator.getProductDetailBySlug().validate(
      { slug },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/${slug}/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get the sizes of a product
    * @description: A product can have multiple sizes. Use this API to fetch all the available sizes of a product.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a product. You can get slug value from the endpoint /service/application/catalog/v1.0/products/
    * @param {number} [arg.storeId] - The ID of the store that is selling the product, e.g. 1,2,3.
    
    **/
  getProductSizesBySlug({ slug, storeId } = {}) {
    const { error } = CatalogValidator.getProductSizesBySlug().validate(
      { slug, storeId },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["store_id"] = storeId;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/${slug}/sizes/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get the price of a product size at a PIN Code
    * @description: Prices may vary for different sizes of a product. Use this API to retrieve the price of a product size at all the selling locations near to a PIN Code.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a product. You can get slug value from the endpoint /service/application/catalog/v1.0/products/
    * @param {string} arg.size - A string indicating the size of the product, e.g. S, M, XL. You can get slug value from the endpoint /service/application/catalog/v1.0/products/sizes
    * @param {string} arg.pincode - The PIN Code of the area near which the selling locations should be searched, e.g. 400059
    * @param {string} [arg.storeId] - The ID of the store that is selling the product, e.g. 1,2,3.
    
    **/
  getProductPriceBySlug({ slug, size, pincode, storeId } = {}) {
    const { error } = CatalogValidator.getProductPriceBySlug().validate(
      { slug, size, pincode, storeId },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["store_id"] = storeId;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/${slug}/sizes/${size}/pincode/${pincode}/price/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get the sellers of a product size at a PIN Code
    * @description: A product of a particular size may be sold by multiple sellers. Use this API to fetch the sellers having the stock of a particular size at a given PIN Code.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a product. You can get slug value from the endpoint /service/application/catalog/v1.0/products/
    * @param {string} arg.size - A string indicating the size of the product, e.g. S, M, XL. You can get slug value from the endpoint /service/application/catalog/v1.0/products/sizes
    * @param {string} arg.pincode - The 6-digit PIN Code of the area near which the selling locations should be searched, e.g. 400059
    * @param {string} [arg.strategy] - Sort stores on the basis of strategy. eg, fast-delivery, low-price, optimal.
    * @param {number} [arg.pageNo] - The page number to navigate through the given set of results.
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    **/
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
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["strategy"] = strategy;
    query["page_no"] = pageNo;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/${slug}/sizes/${size}/pincode/${pincode}/sellers/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get the sellers of a product size at a PIN Code
    * @description: A product of a particular size may be sold by multiple sellers. Use this API to fetch the sellers having the stock of a particular size at a given PIN Code.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a product. You can get slug value from the endpoint /service/application/catalog/v1.0/products/
    * @param {string} arg.size - A string indicating the size of the product, e.g. S, M, XL. You can get slug value from the endpoint /service/application/catalog/v1.0/products/sizes
    * @param {string} arg.pincode - The 6-digit PIN Code of the area near which the selling locations should be searched, e.g. 400059
    * @param {string} [arg.strategy] - Sort stores on the basis of strategy. eg, fast-delivery, low-price, optimal.
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    **/
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

  /**
    *
    * @summary: Compare products
    * @description: Use this API to compare the features of products belonging to the same category. Note that at least one slug is mandatory in the request query.
    * @param {Object} arg - arg object.
    * @param {Array<string>} arg.slug - A short, human-readable, URL-friendly identifier of a product. You can get slug value from the endpoint /service/application/catalog/v1.0/products/.
    
    **/
  getProductComparisonBySlugs({ slug } = {}) {
    const { error } = CatalogValidator.getProductComparisonBySlugs().validate(
      { slug },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["slug"] = slug;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/compare/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get comparison between similar products
    * @description: Use this API to compare a given product automatically with similar products. Only one slug is needed.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a product. You can get slug value from the endpoint /service/application/catalog/v1.0/products/
    
    **/
  getSimilarComparisonProductBySlug({ slug } = {}) {
    const {
      error,
    } = CatalogValidator.getSimilarComparisonProductBySlug().validate(
      { slug },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/${slug}/similar/compare/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get comparison between frequently compared products with the given product
    * @description: Use this API to compare a given product automatically with products that are frequently compared with it. Only one slug is needed.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a product. You can get slug value from the endpoint /service/application/catalog/v1.0/products/
    
    **/
  getComparedFrequentlyProductBySlug({ slug } = {}) {
    const {
      error,
    } = CatalogValidator.getComparedFrequentlyProductBySlug().validate(
      { slug },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/${slug}/similar/compared-frequently/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get similar products
    * @description: Use this API to retrieve products similar to the one specified by its slug. You can search not only similar looking products, but also those that are sold by same seller, or those that belong to the same category, price, specifications, etc.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a product. You can get slug value from the endpoint /service/application/catalog/v1.0/products/
    * @param {string} arg.similarType - Similarity criteria such as basic, visual, price, seller, category and spec. Visual - Products having similar patterns, Price - Products in similar price range, Seller - Products sold by the same seller, Category - Products belonging to the same category, e.g. sports shoes, Spec - Products having similar specifications, e.g. phones with same memory.
    
    **/
  getProductSimilarByIdentifier({ slug, similarType } = {}) {
    const { error } = CatalogValidator.getProductSimilarByIdentifier().validate(
      { slug, similarType },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/${slug}/similar/${similarType}/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get variant of a particular product
    * @description: A product can have a different type of variants such as colour, shade, memory. Use this API to fetch all the available variants of a product using its slug.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a product. You can get slug value from the endpoint /service/application/catalog/v1.0/products/
    
    **/
  getProductVariantsBySlug({ slug } = {}) {
    const { error } = CatalogValidator.getProductVariantsBySlug().validate(
      { slug },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/${slug}/variants/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get the stock of a product
    * @description: Retrieve the available stock of the products. Use this API to retrieve stock of multiple products (up to 50) at a time.
    * @param {Object} arg - arg object.
    * @param {string} [arg.itemId] - The Item ID of the product (Max. 50 allowed)
    * @param {string} [arg.alu] - ALU of the product (limited upto 50 ALU identifier in a single request)
    * @param {string} [arg.skuCode] - Stock-keeping Unit of the product (limited upto 50 SKU Code in a single request)
    * @param {string} [arg.ean] - European Article Number of the product (limited upto 50 EAN identifier in a single request)
    * @param {string} [arg.upc] - Universal Product Code of the product (limited upto 50 UPC identifier in a single request)
    
    **/
  getProductStockByIds({ itemId, alu, skuCode, ean, upc } = {}) {
    const { error } = CatalogValidator.getProductStockByIds().validate(
      { itemId, alu, skuCode, ean, upc },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["item_id"] = itemId;
    query["alu"] = alu;
    query["sku_code"] = skuCode;
    query["ean"] = ean;
    query["upc"] = upc;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/stock-status/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get the stock of a product
    * @description: Retrieve the available stock of the products. Use this API to get the stock status of products whose inventory is updated at the specified time
    * @param {Object} arg - arg object.
    * @param {string} arg.timestamp - Timestamp in UTC format (2020-07-23T10:27:50Z)
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    * @param {string} [arg.pageId] - Page ID to retrieve next set of results.
    
    **/
  getProductStockForTimeByIds({ timestamp, pageSize, pageId } = {}) {
    const { error } = CatalogValidator.getProductStockForTimeByIds().validate(
      { timestamp, pageSize, pageId },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["timestamp"] = timestamp;
    query["page_size"] = pageSize;
    query["page_id"] = pageId;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/stock-status/poll/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get the stock of a product
    * @description: Retrieve the available stock of the products. Use this API to get the stock status of products whose inventory is updated at the specified time
    * @param {Object} arg - arg object.
    * @param {string} arg.timestamp - Timestamp in UTC format (2020-07-23T10:27:50Z)
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    **/
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
    *
    * @summary: Get all the products
    * @description: Use this API to list all the products. You may choose a sort order or make arbitrary search queries by entering the product name, brand, category or collection.
    * @param {Object} arg - arg object.
    * @param {string} [arg.q] - The search query for entering partial or full name of product, brand, category, or collection.
    * @param {string} [arg.f] - The search filter parameters. Filter parameters will be passed in f parameter as shown in the example below. Double Pipe (||) denotes the OR condition, whereas Triple-colon (:::) indicates a new filter paramater applied as an AND condition.
    * @param {boolean} [arg.filters] - This is a boolean value, True for fetching all filter parameters and False for disabling the filter parameters.
    * @param {string} [arg.sortOn] - The order in which the list of products should be sorted, e.g. popularity, price, latest and discount, in either ascending or descending order. See the supported values below.
    * @param {string} [arg.pageId] - Page ID to retrieve next set of results.
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    * @param {number} [arg.pageNo] - The page number to navigate through the given set of results.
    * @param {string} [arg.pageType] - Available pagination types are cursor or number.
    
    **/
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
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["q"] = q;
    query["f"] = f;
    query["filters"] = filters;
    query["sort_on"] = sortOn;
    query["page_id"] = pageId;
    query["page_size"] = pageSize;
    query["page_no"] = pageNo;
    query["page_type"] = pageType;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get all the products
    * @description: Use this API to list all the products. You may choose a sort order or make arbitrary search queries by entering the product name, brand, category or collection.
    * @param {Object} arg - arg object.
    * @param {string} [arg.q] - The search query for entering partial or full name of product, brand, category, or collection.
    * @param {string} [arg.f] - The search filter parameters. Filter parameters will be passed in f parameter as shown in the example below. Double Pipe (||) denotes the OR condition, whereas Triple-colon (:::) indicates a new filter paramater applied as an AND condition.
    * @param {boolean} [arg.filters] - This is a boolean value, True for fetching all filter parameters and False for disabling the filter parameters.
    * @param {string} [arg.sortOn] - The order in which the list of products should be sorted, e.g. popularity, price, latest and discount, in either ascending or descending order. See the supported values below.
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    **/
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
    *
    * @summary: Get all the brands
    * @description: A brand is the name under which a product is sold. Use this API to list all the brands. You can also filter the brands by department.
    * @param {Object} arg - arg object.
    * @param {string} [arg.department] - The name of the department. Use this parameter to filter products by a particular department. See the list of available departments below. Also, you can get available departments from the endpoint /service/application/catalog/v1.0/departments/
    * @param {number} [arg.pageNo] - The page number to navigate through the given set of results.
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    **/
  getBrands({ department, pageNo, pageSize } = {}) {
    const { error } = CatalogValidator.getBrands().validate(
      { department, pageNo, pageSize },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["department"] = department;
    query["page_no"] = pageNo;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/brands/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get all the brands
    * @description: A brand is the name under which a product is sold. Use this API to list all the brands. You can also filter the brands by department.
    * @param {Object} arg - arg object.
    * @param {string} [arg.department] - The name of the department. Use this parameter to filter products by a particular department. See the list of available departments below. Also, you can get available departments from the endpoint /service/application/catalog/v1.0/departments/
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    **/
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
    *
    * @summary: Get metadata of a brand
    * @description: Fetch metadata of a brand such as name, information, logo, banner, etc.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a brand. You can get slug value from the endpoint /service/application/catalog/v1.0/brands/.
    
    **/
  getBrandDetailBySlug({ slug } = {}) {
    const { error } = CatalogValidator.getBrandDetailBySlug().validate(
      { slug },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/brands/${slug}/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: List all the categories
    * @description: Use this API to list all the categories. You can also filter the categories by department.
    * @param {Object} arg - arg object.
    * @param {string} [arg.department] - The name of the department. Use this parameter to filter products by a particular department. See the list of available departments below. Also, you can get available departments from the endpoint /service/application/catalog/v1.0/departments/
    
    **/
  getCategories({ department } = {}) {
    const { error } = CatalogValidator.getCategories().validate(
      { department },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["department"] = department;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/categories/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get metadata of a category
    * @description: Fetch metadata of a category such as name, information, logo, banner, etc.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a brand. You can get slug value from the endpoint /service/application/catalog/v1.0/brands/.
    
    **/
  getCategoryDetailBySlug({ slug } = {}) {
    const { error } = CatalogValidator.getCategoryDetailBySlug().validate(
      { slug },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/categories/${slug}/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: List the products
    * @description: List all the products associated with a brand, collection or category in a random order.
    * @param {Object} arg - arg object.
    * @param {string} [arg.sortOn] - The order in which the list of products should be sorted, e.g. popularity, price, latest and discount, in either ascending or descending order.
    * @param {string} [arg.pageId] - Page ID to retrieve next set of results.
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    **/
  getHomeProducts({ sortOn, pageId, pageSize } = {}) {
    const { error } = CatalogValidator.getHomeProducts().validate(
      { sortOn, pageId, pageSize },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["sort_on"] = sortOn;
    query["page_id"] = pageId;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/home/listing/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: List the products
    * @description: List all the products associated with a brand, collection or category in a random order.
    * @param {Object} arg - arg object.
    * @param {string} [arg.sortOn] - The order in which the list of products should be sorted, e.g. popularity, price, latest and discount, in either ascending or descending order.
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    **/
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
    *
    * @summary: List all the departments
    * @description: Departments are a way to categorise similar products. A product can lie in multiple departments. For example, a skirt can below to the 'Women's Fashion' Department while a handbag can lie in 'Women's Accessories' Department. Use this API to list all the departments. If successful, returns the list of departments specified in `DepartmentResponse`
    * @param {Object} arg - arg object.
    
    **/
  getDepartments({} = {}) {
    const { error } = CatalogValidator.getDepartments().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/departments/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get relevant suggestions for a search query
    * @description: Retrieves a list of suggestions for a given search query. Each suggestion is a valid search term that's generated on the basis of query. This is particularly useful to enhance the user experience while using the search tool.
    * @param {Object} arg - arg object.
    * @param {string} arg.q - The search query for entering partial or full name of a product, brand or category. For example, if the given search query `q` is _ski_, the relevant search suggestions could be _skirt_, _ski shoes_, __skin cream_ etc.
    
    **/
  getSearchResults({ q } = {}) {
    const { error } = CatalogValidator.getSearchResults().validate(
      { q },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["q"] = q;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/auto-complete/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: List all the collections
    * @description: Collections are a great way to organize your products and can improve the ability for customers to find items quickly and efficiently.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - The page number to navigate through the given set of results.
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    **/
  getCollections({ pageNo, pageSize } = {}) {
    const { error } = CatalogValidator.getCollections().validate(
      { pageNo, pageSize },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["page_no"] = pageNo;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/collections/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: List all the collections
    * @description: Collections are a great way to organize your products and can improve the ability for customers to find items quickly and efficiently.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    **/
  getCollectionsPaginator({ pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getCollections({
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
    *
    * @summary: Get the items in a collection
    * @description: Get items in a collection specified by its `slug`.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a collection. You can get slug value from the endpoint /service/application/catalog/v1.0/collections/.
    * @param {string} [arg.f] - The search filter parameters. Filter parameters will be passed in f parameter as shown in the example below. Double Pipe (||) denotes the OR condition, whereas Triple-colon (:::) indicates a new filter paramater applied as an AND condition.
    * @param {boolean} [arg.filters] - This is a boolean value, True for fetching all filter parameters and False for disabling the filter parameters.
    * @param {string} [arg.sortOn] - The order in which the list of products should be sorted, e.g. popularity, price, latest and discount, in either ascending or descending order. See the supported values below.
    * @param {string} [arg.pageId] - Page ID to retrieve next set of results.
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    **/
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
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["f"] = f;
    query["filters"] = filters;
    query["sort_on"] = sortOn;
    query["page_id"] = pageId;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/collections/${slug}/items/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get the items in a collection
    * @description: Get items in a collection specified by its `slug`.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a collection. You can get slug value from the endpoint /service/application/catalog/v1.0/collections/.
    * @param {string} [arg.f] - The search filter parameters. Filter parameters will be passed in f parameter as shown in the example below. Double Pipe (||) denotes the OR condition, whereas Triple-colon (:::) indicates a new filter paramater applied as an AND condition.
    * @param {boolean} [arg.filters] - This is a boolean value, True for fetching all filter parameters and False for disabling the filter parameters.
    * @param {string} [arg.sortOn] - The order in which the list of products should be sorted, e.g. popularity, price, latest and discount, in either ascending or descending order. See the supported values below.
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    **/
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
    *
    * @summary: Get a particular collection
    * @description: Get the details of a collection by its `slug`.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a collection. You can get slug value from the endpoint /service/application/catalog/v1.0/collections/.
    
    **/
  getCollectionDetailBySlug({ slug } = {}) {
    const { error } = CatalogValidator.getCollectionDetailBySlug().validate(
      { slug },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/collections/${slug}/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get a list of followed Products, Brands, Collections
    * @description: Users can follow a product they like. This API retrieves the products the user have followed.
    * @param {Object} arg - arg object.
    * @param {string} arg.collectionType - Type of collection followed, i.e. products, brands, or collections.
    * @param {string} [arg.pageId] - Page ID to retrieve next set of results.
    * @param {number} [arg.pageSize] - Page ID to retrieve next set of results.
    
    **/
  getFollowedListing({ collectionType, pageId, pageSize } = {}) {
    const { error } = CatalogValidator.getFollowedListing().validate(
      { collectionType, pageId, pageSize },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["page_id"] = pageId;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/follow/${collectionType}/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get a list of followed Products, Brands, Collections
    * @description: Users can follow a product they like. This API retrieves the products the user have followed.
    * @param {Object} arg - arg object.
    * @param {string} arg.collectionType - Type of collection followed, i.e. products, brands, or collections.
    * @param {number} [arg.pageSize] - Page ID to retrieve next set of results.
    
    **/
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
    *
    * @summary: Follow an entity (product/brand/collection)
    * @description: Follow a particular entity such as product, brand, collection specified by its ID.
    * @param {Object} arg - arg object.
    * @param {string} arg.collectionType - Type of collection followed, i.e. products, brands, or collections.
    * @param {string} arg.collectionId - The ID of the collection type.
    
    **/
  followById({ collectionType, collectionId } = {}) {
    const { error } = CatalogValidator.followById().validate(
      { collectionType, collectionId },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/catalog/v1.0/follow/${collectionType}/${collectionId}/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Unfollow an entity (product/brand/collection)
    * @description: You can undo a followed product, brand or collection by its ID. This action is referred as _unfollow_.
    * @param {Object} arg - arg object.
    * @param {string} arg.collectionType - Type of collection followed, i.e. products, brands, or collections.
    * @param {string} arg.collectionId - The ID of the collection type.
    
    **/
  unfollowById({ collectionType, collectionId } = {}) {
    const { error } = CatalogValidator.unfollowById().validate(
      { collectionType, collectionId },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/application/catalog/v1.0/follow/${collectionType}/${collectionId}/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get Follow Count
    * @description: Get the total count of followers for a given collection type and collection ID.
    * @param {Object} arg - arg object.
    * @param {string} arg.collectionType - Type of collection, i.e. products, brands, or collections.
    * @param {string} arg.collectionId - The ID of the collection type.
    
    **/
  getFollowerCountById({ collectionType, collectionId } = {}) {
    const { error } = CatalogValidator.getFollowerCountById().validate(
      { collectionType, collectionId },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/follow/${collectionType}/${collectionId}/count/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get the IDs of followed products, brands and collections.
    * @description: You can get the IDs of all the followed Products, Brands and Collections. Pass collection_type as query parameter to fetch specific Ids
    * @param {Object} arg - arg object.
    * @param {string} [arg.collectionType] - Type of collection, i.e. products, brands, collections.
    
    **/
  getFollowIds({ collectionType } = {}) {
    const { error } = CatalogValidator.getFollowIds().validate(
      { collectionType },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["collection_type"] = collectionType;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/follow/ids/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get store meta information.
    * @description: Use this API to get a list of stores in a specific application.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - The page number to navigate through the given set of results.
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
    * @param {string} [arg.q] - Search a store by its name or store_code.
    * @param {number} [arg.range] - Use this to retrieve stores within a particular range in meters, e.g. 10000, to indicate a 10km range
    * @param {number} [arg.latitude] - Latitude of the location from where one wants to retreive the nearest stores, e.g. 72.8691788
    * @param {number} [arg.longitude] - Longitude of the location from where one wants to retreive the nearest stores, e.g. 19.1174114
    
    **/
  getStores({ pageNo, pageSize, q, range, latitude, longitude } = {}) {
    const { error } = CatalogValidator.getStores().validate(
      { pageNo, pageSize, q, range, latitude, longitude },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["page_no"] = pageNo;
    query["page_size"] = pageSize;
    query["q"] = q;
    query["range"] = range;
    query["latitude"] = latitude;
    query["longitude"] = longitude;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/locations/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get store meta information.
    * @description: Use this API to get a list of stores in a specific application.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
    * @param {string} [arg.q] - Search a store by its name or store_code.
    * @param {number} [arg.range] - Use this to retrieve stores within a particular range in meters, e.g. 10000, to indicate a 10km range
    * @param {number} [arg.latitude] - Latitude of the location from where one wants to retreive the nearest stores, e.g. 72.8691788
    * @param {number} [arg.longitude] - Longitude of the location from where one wants to retreive the nearest stores, e.g. 19.1174114
    
    **/
  getStoresPaginator({ pageSize, q, range, latitude, longitude } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getStores({
        pageNo: pageNo,
        pageSize: pageSize,
        q: q,
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
}

class Cart {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * @summary: Fetch all Items Added to  Cart
    * @description: Get all the details of a items added to cart  by uid. If successful, returns a Cart resource in the response body specified in CartResponse
    * @param {Object} arg - arg object.
    * @param {number} [arg.uid] - 
    * @param {boolean} [arg.i] - 
    * @param {boolean} [arg.b] - 
    * @param {number} [arg.assignCardId] - 
    
    **/
  getCart({ uid, i, b, assignCardId } = {}) {
    const { error } = CartValidator.getCart().validate(
      { uid, i, b, assignCardId },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;
    query["i"] = i;
    query["b"] = b;
    query["assign_card_id"] = assignCardId;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/cart/v1.0/detail`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Fetch Last-Modified timestamp
    * @description: Fetch Last-Modified timestamp in header metadata
    * @param {Object} arg - arg object.
    * @param {number} [arg.uid] - 
    
    **/
  getCartLastModified({ uid } = {}) {
    const { error } = CartValidator.getCartLastModified().validate(
      { uid },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "head",
      `/service/application/cart/v1.0/detail`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Add Items to Cart
   * @description: <p>Add Items to cart. See `AddCartRequest` in schema of request body for the list of attributes needed to add items to a cart. On successful request, returns cart response containing details of items, coupons available etc.these attributes will be fetched from the folowing api's</p>
   * @param {Object} arg - arg object.
   * @param {boolean} [arg.i] -
   * @param {boolean} [arg.b] -
   * @param {AddCartRequest} arg.body
   **/
  addItems({ body, i, b } = {}) {
    const { error } = CartValidator.addItems().validate(
      { body, i, b },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["i"] = i;
    query["b"] = b;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/cart/v1.0/detail`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Update Items already added to Cart
   * @description: Request object containing attributes like item_quantity and item_size which can be updated .these attributes will be fetched from the folowing api's</p> <ul> <li><font color="monochrome">operation</font> Operation for current api call. <b>update_item</b> for update items. <b>remove_item</b> for removing items.</li> <li> <font color="monochrome">item_id</font>  "/platform/content/v1/products/"</li> <li> <font color="monochrome">item_size</font>   "/platform/content/v1/products/{slug}/sizes/"</li> <li> <font color="monochrome">quantity</font>  item quantity (must be greater than or equal to 1)</li> <li> <font color="monochrome">article_id</font>   "/content​/v1​/products​/{identifier}​/sizes​/price​/"</li> <li> <font color="monochrome">item_index</font>  item position in the cart (must be greater than or equal to 0)</li> </ul>
   * @param {Object} arg - arg object.
   * @param {number} [arg.uid] -
   * @param {boolean} [arg.i] -
   * @param {boolean} [arg.b] -
   * @param {UpdateCartRequest} arg.body
   **/
  updateCart({ body, uid, i, b } = {}) {
    const { error } = CartValidator.updateCart().validate(
      { body, uid, i, b },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;
    query["i"] = i;
    query["b"] = b;

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/cart/v1.0/detail`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Cart item count
    * @description: Get total count of item present in cart
    * @param {Object} arg - arg object.
    * @param {number} [arg.uid] - Cart id
    
    **/
  getItemCount({ uid } = {}) {
    const { error } = CartValidator.getItemCount().validate(
      { uid },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/cart/v1.0/basic`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Fetch Coupon
    * @description: Get all the details of a coupons applicable to cart  by uid. If successful, returns a Coupon resource in the response body specified in GetCouponResponse
    * @param {Object} arg - arg object.
    * @param {number} [arg.uid] - 
    
    **/
  getCoupons({ uid } = {}) {
    const { error } = CartValidator.getCoupons().validate(
      { uid },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/cart/v1.0/coupon`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Apply Coupon
    * @description: <p>Apply Coupons on Items added to cart. On successful request, returns cart response containing details of items ,coupons applied etc.these attributes will be consumed by  api</p> <ul> <li> <font color="monochrome">coupon_code</font></li>
</ul>
    * @param {Object} arg - arg object.
    * @param {boolean} [arg.i] - 
    * @param {boolean} [arg.b] - 
    * @param {boolean} [arg.p] - 
    * @param {number} [arg.uid] - 
    * @param {ApplyCouponRequest} arg.body
    **/
  applyCoupon({ body, i, b, p, uid } = {}) {
    const { error } = CartValidator.applyCoupon().validate(
      { body, i, b, p, uid },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["i"] = i;
    query["b"] = b;
    query["p"] = p;
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/cart/v1.0/coupon`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Remove Coupon Applied
    * @description: Remove Coupon applied on the cart by passing uid in request body.
    * @param {Object} arg - arg object.
    * @param {number} [arg.uid] - Cart id
    
    **/
  removeCoupon({ uid } = {}) {
    const { error } = CartValidator.removeCoupon().validate(
      { uid },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/application/cart/v1.0/coupon`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get discount offers based on quantity
    * @description: List applicable offers along with current, next and best offer for given product. Either one of **uid**, **item_id**, **slug** should be present*
    * @param {Object} arg - arg object.
    * @param {number} [arg.itemId] - Item id
    * @param {string} [arg.articleId] - Article mongo id
    * @param {number} [arg.uid] - Item id
    * @param {string} [arg.slug] - Item unique url from product page
    
    **/
  getBulkDiscountOffers({ itemId, articleId, uid, slug } = {}) {
    const { error } = CartValidator.getBulkDiscountOffers().validate(
      { itemId, articleId, uid, slug },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["item_id"] = itemId;
    query["article_id"] = articleId;
    query["uid"] = uid;
    query["slug"] = slug;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/cart/v1.0/bulk-price`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Fetch all Items Added to  Cart
   * @description: Get all the details of a items added to cart  by uid. If successful, returns a Cart resource in the response body specified in CartResponse
   * @param {Object} arg - arg object.
   * @param {number} [arg.uid] -
   * @param {boolean} [arg.i] -
   * @param {boolean} [arg.b] -
   * @param {RewardPointRequest} arg.body
   **/
  applyRewardPoints({ body, uid, i, b } = {}) {
    const { error } = CartValidator.applyRewardPoints().validate(
      { body, uid, i, b },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;
    query["i"] = i;
    query["b"] = b;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/cart/v1.0/redeem/points/`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Fetch Address
    * @description: Get all the addresses associated with the account. If successful, returns a Address resource in the response body specified in GetAddressesResponse.attibutes listed below are optional <ul> <li> <font color="monochrome">uid</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
    * @param {Object} arg - arg object.
    * @param {number} [arg.uid] - 
    * @param {string} [arg.mobileNo] - 
    * @param {string} [arg.checkoutMode] - 
    * @param {string} [arg.tags] - 
    * @param {boolean} [arg.isDefault] - 
    
    **/
  getAddresses({ uid, mobileNo, checkoutMode, tags, isDefault } = {}) {
    const { error } = CartValidator.getAddresses().validate(
      { uid, mobileNo, checkoutMode, tags, isDefault },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;
    query["mobile_no"] = mobileNo;
    query["checkout_mode"] = checkoutMode;
    query["tags"] = tags;
    query["is_default"] = isDefault;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/cart/v1.0/address`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Add Address to the account
   * @description: <p>Add Address to account. See `Address` in schema of request body for the list of attributes needed to add Address to account. On successful request, returns response containing address_id ,is_default_address and success message.
   * @param {Object} arg - arg object.
   * @param {Address} arg.body
   **/
  addAddress({ body } = {}) {
    const { error } = CartValidator.addAddress().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/cart/v1.0/address`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Fetch Single Address
    * @description: Get a addresses with the given id. If successful, returns a Address resource in the response body specified in `Address`.attibutes listed below are optional <ul> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
    * @param {Object} arg - arg object.
    * @param {number} arg.id - 
    * @param {number} [arg.uid] - 
    * @param {string} [arg.mobileNo] - 
    * @param {string} [arg.checkoutMode] - 
    * @param {string} [arg.tags] - 
    * @param {boolean} [arg.isDefault] - 
    
    **/
  getAddressById({ id, uid, mobileNo, checkoutMode, tags, isDefault } = {}) {
    const { error } = CartValidator.getAddressById().validate(
      { id, uid, mobileNo, checkoutMode, tags, isDefault },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;
    query["mobile_no"] = mobileNo;
    query["checkout_mode"] = checkoutMode;
    query["tags"] = tags;
    query["is_default"] = isDefault;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/cart/v1.0/address/${id}`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Update Address alreay added to account
   * @description: Request object containing attributes mentioned in  <font color="blue">Address </font> can be updated .these attributes are :</p> <ul> <li> <font color="monochrome">is_default_address</font></li> <li> <font color="monochrome">landmark</font></li> <li> <font color="monochrome">area</font></li> <li> <font color="monochrome">pincode</font></li> <li> <font color="monochrome">email</font></li> <li> <font color="monochrome">address_type</font></li> <li> <font color="monochrome">name</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">address</font></li> </ul>
   * @param {Object} arg - arg object.
   * @param {number} arg.id - Address id
   * @param {Address} arg.body
   **/
  updateAddress({ id, body } = {}) {
    const { error } = CartValidator.updateAddress().validate(
      { id, body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/cart/v1.0/address/${id}`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Remove Address Associated to the account
    * @description: Delete a Address by it's address_id. Returns an object that tells whether the address was deleted successfully
    * @param {Object} arg - arg object.
    * @param {number} arg.id - Address id
    
    **/
  removeAddress({ id } = {}) {
    const { error } = CartValidator.removeAddress().validate(
      { id },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/application/cart/v1.0/address/${id}`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Select Address from All Addresses
   * @description: <p>Select Address from all addresses associated with the account in order to ship the cart items to .that address,otherwise default address will be selected implicitly. See `SelectCartAddressRequest` in schema of request body for the list of attributes needed to select Address from account. On successful request, returns Cart object response.below are the address attributes which needs to be sent. <ul> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">billing_address_id</font></li> <li> <font color="monochrome">uid</font></li> </ul>
   * @param {Object} arg - arg object.
   * @param {number} [arg.uid] -
   * @param {boolean} [arg.i] -
   * @param {boolean} [arg.b] -
   * @param {SelectCartAddressRequest} arg.body
   **/
  selectAddress({ body, uid, i, b } = {}) {
    const { error } = CartValidator.selectAddress().validate(
      { body, uid, i, b },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;
    query["i"] = i;
    query["b"] = b;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/cart/v1.0/select-address`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Update Cart Payment
   * @description: Update Cart Payment for Your Account
   * @param {Object} arg - arg object.
   * @param {string} [arg.uid] -
   * @param {UpdateCartPaymentRequest} arg.body
   **/
  selectPaymentMode({ body, uid } = {}) {
    const { error } = CartValidator.selectPaymentMode().validate(
      { body, uid },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/cart/v1.0/payment`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get Cart Payment for valid coupon
    * @description: Validate coupon for selected payment mode
    * @param {Object} arg - arg object.
    * @param {string} [arg.uid] - 
    * @param {string} [arg.addressId] - 
    * @param {string} [arg.paymentMode] - 
    * @param {string} [arg.paymentIdentifier] - 
    * @param {string} [arg.aggregatorName] - 
    * @param {string} [arg.merchantCode] - 
    
    **/
  validateCouponForPayment({
    uid,
    addressId,
    paymentMode,
    paymentIdentifier,
    aggregatorName,
    merchantCode,
  } = {}) {
    const { error } = CartValidator.validateCouponForPayment().validate(
      {
        uid,
        addressId,
        paymentMode,
        paymentIdentifier,
        aggregatorName,
        merchantCode,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;
    query["address_id"] = addressId;
    query["payment_mode"] = paymentMode;
    query["payment_identifier"] = paymentIdentifier;
    query["aggregator_name"] = aggregatorName;
    query["merchant_code"] = merchantCode;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/cart/v1.0/payment/validate/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get delivery date and options before checkout
    * @description: Shipment break up item wise with delivery date. Actual                      delivery will be during given dates only. Items will be                      delivered in group of shipments created.
    * @param {Object} arg - arg object.
    * @param {boolean} [arg.p] - Get payment options or not
    * @param {number} [arg.uid] - Cart id
    * @param {number} [arg.addressId] - Address id
    * @param {string} [arg.areaCode] - Destination pincode.
    
    **/
  getShipments({ p, uid, addressId, areaCode } = {}) {
    const { error } = CartValidator.getShipments().validate(
      { p, uid, addressId, areaCode },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["p"] = p;
    query["uid"] = uid;
    query["address_id"] = addressId;
    query["area_code"] = areaCode;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/cart/v1.0/shipment`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Checkout Cart
   * @description: Checkout all items in cart to payment and order generation.                         For COD only order will be generated while for other checkout mode                         user will be redirected to payment gateway
   * @param {Object} arg - arg object.
   * @param {CartCheckoutRequest} arg.body
   **/
  checkoutCart({ body } = {}) {
    const { error } = CartValidator.checkoutCart().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/cart/v1.0/checkout`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Update Cart Meta
   * @description: Update cart meta like checkout_mode, gstin.
   * @param {Object} arg - arg object.
   * @param {number} [arg.uid] - Cart id received in get cart.
   * @param {CartMetaRequest} arg.body
   **/
  updateCartMeta({ body, uid } = {}) {
    const { error } = CartValidator.updateCartMeta().validate(
      { body, uid },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/cart/v1.0/meta`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Generate Cart sharing link token
   * @description: Generates shared cart snapshot and returns shortlink token
   * @param {Object} arg - arg object.
   * @param {GetShareCartLinkRequest} arg.body
   **/
  getCartShareLink({ body } = {}) {
    const { error } = CartValidator.getCartShareLink().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/cart/v1.0/share-cart`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get shared cart snapshot and cart response
    * @description: Returns shared cart response for sent token with `shared_cart_details`                    containing shared cart details in response.
    * @param {Object} arg - arg object.
    * @param {string} arg.token - Shared short link token.
    
    **/
  getCartSharedItems({ token } = {}) {
    const { error } = CartValidator.getCartSharedItems().validate(
      { token },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/cart/v1.0/share-cart/${token}`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Merge or Replace existing cart
    * @description: Merge or Replace cart based on `action` parameter with shared cart of `token`
    * @param {Object} arg - arg object.
    * @param {string} arg.token - Shared short link token.
    * @param {string} arg.action - Operation to perform on existing cart, whether to merge or replace.
    
    **/
  updateCartWithSharedItems({ token, action } = {}) {
    const { error } = CartValidator.updateCartWithSharedItems().validate(
      { token, action },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/cart/v1.0/share-cart/${token}/${action}`,
      query,
      undefined
    );
  }
}

class Lead {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * @summary: Get Ticket with the specific id
    * @description: Get Ticket with the specific id, this is used to view the ticket details
    * @param {Object} arg - arg object.
    * @param {string} arg.id - ID of ticket to be retrieved
    
    **/
  getTicket({ id } = {}) {
    const { error } = LeadValidator.getTicket().validate(
      { id },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/lead/v1.0/ticket/${id}`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Create history for specific Ticket
   * @description: Create history for specific Ticket, this history is seen on ticket detail page, this can be comment, log or rating.
   * @param {Object} arg - arg object.
   * @param {string} arg.id - Ticket ID for which history is created
   * @param {TicketHistoryPayload} arg.body
   **/
  createHistory({ id, body } = {}) {
    const { error } = LeadValidator.createHistory().validate(
      { id, body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/lead/v1.0/ticket/${id}/history`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Create Ticket
   * @description: This is used to Create Ticket.
   * @param {Object} arg - arg object.
   * @param {AddTicketPayload} arg.body
   **/
  createTicket({ body } = {}) {
    const { error } = LeadValidator.createTicket().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/lead/v1.0/ticket/`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get specific Custom Form using it's slug
    * @description: Get specific Custom Form using it's slug, this is used to view the form.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - Slug of form whose response is getting submitted
    
    **/
  getCustomForm({ slug } = {}) {
    const { error } = LeadValidator.getCustomForm().validate(
      { slug },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/lead/v1.0/form/${slug}`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Submit Response for a specific Custom Form using it's slug
   * @description: Submit Response for a specific Custom Form using it's slug, this response is then used to create a ticket on behalf of the user.
   * @param {Object} arg - arg object.
   * @param {string} arg.slug - Slug of form whose response is getting submitted
   * @param {CustomFormSubmissionPayload} arg.body
   **/
  submitCustomForm({ slug, body } = {}) {
    const { error } = LeadValidator.submitCustomForm().validate(
      { slug, body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/lead/v1.0/form/${slug}/submit`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get participants of a specific Video Room using it's unique name
    * @description: Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names.
    * @param {Object} arg - arg object.
    * @param {string} arg.uniqueName - Unique name of Video Room
    
    **/
  getParticipantsInsideVideoRoom({ uniqueName } = {}) {
    const { error } = LeadValidator.getParticipantsInsideVideoRoom().validate(
      { uniqueName },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/lead/v1.0/video/room/${uniqueName}/participants`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get Token to join a specific Video Room using it's unqiue name
    * @description: Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there.
    * @param {Object} arg - arg object.
    * @param {string} arg.uniqueName - Unique name of Video Room
    
    **/
  getTokenForVideoRoom({ uniqueName } = {}) {
    const { error } = LeadValidator.getTokenForVideoRoom().validate(
      { uniqueName },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/lead/v1.0/video/room/${uniqueName}/token`,
      query,
      undefined
    );
  }
}

class Theme {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * @summary: Get the theme currently applied to an application
    * @description: An application has multiple themes, but only one theme can be applied at a time. Use this API to retrieve the theme currently applied to the application.
    * @param {Object} arg - arg object.
    
    **/
  getAppliedTheme({} = {}) {
    const { error } = ThemeValidator.getAppliedTheme().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/theme/v1.0/applied-theme`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get a theme for a preview
    * @description: A theme can be previewed before applying it. Use this API to retrieve the preview of a theme by its ID.
    * @param {Object} arg - arg object.
    * @param {string} arg.themeId - ID of the theme to be retrieved
    
    **/
  getThemeForPreview({ themeId } = {}) {
    const { error } = ThemeValidator.getThemeForPreview().validate(
      { themeId },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/theme/v1.0/${themeId}/preview`,
      query,
      undefined
    );
  }
}

class User {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
   *
   * @summary: Login or Register using Facebook
   * @description: Use this API to login or register using Facebook credentials.
   * @param {Object} arg - arg object.
   * @param {OAuthRequestSchema} arg.body
   **/
  loginWithFacebook({ body } = {}) {
    const { error } = UserValidator.loginWithFacebook().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/login/facebook-token`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Login or Register using Google
   * @description: Use this API to login or register using Google Account credentials.
   * @param {Object} arg - arg object.
   * @param {OAuthRequestSchema} arg.body
   **/
  loginWithGoogle({ body } = {}) {
    const { error } = UserValidator.loginWithGoogle().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/login/google-token`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Login or Register using Google on Android
   * @description: Use this API to login or register in Android app using Google Account credentials.
   * @param {Object} arg - arg object.
   * @param {OAuthRequestSchema} arg.body
   **/
  loginWithGoogleAndroid({ body } = {}) {
    const { error } = UserValidator.loginWithGoogleAndroid().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/login/google-android`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Login or Register using Google on iOS
   * @description: Use this API to login or register in iOS app using Google Account credentials.
   * @param {Object} arg - arg object.
   * @param {OAuthRequestSchema} arg.body
   **/
  loginWithGoogleIOS({ body } = {}) {
    const { error } = UserValidator.loginWithGoogleIOS().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/login/google-ios`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Login or Register with OTP
   * @description: Use this API to login or register with a One-time Password (OTP) sent via Email or SMS.
   * @param {Object} arg - arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {SendOtpRequestSchema} arg.body
   **/
  loginWithOTP({ body, platform } = {}) {
    const { error } = UserValidator.loginWithOTP().validate(
      { body, platform },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/login/otp`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Login or Register with password
   * @description: Use this API to login or register using an email address and password.
   * @param {Object} arg - arg object.
   * @param {PasswordLoginRequestSchema} arg.body
   **/
  loginWithEmailAndPassword({ body } = {}) {
    const { error } = UserValidator.loginWithEmailAndPassword().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/login/password`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Reset Password
   * @description: Use this API to reset a password using the link sent on email.
   * @param {Object} arg - arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {SendResetPasswordEmailRequestSchema} arg.body
   **/
  sendResetPasswordEmail({ body, platform } = {}) {
    const { error } = UserValidator.sendResetPasswordEmail().validate(
      { body, platform },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/login/password/reset`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Forgot Password
   * @description: Use this API to reset a password using the code sent on email or SMS.
   * @param {Object} arg - arg object.
   * @param {ForgotPasswordRequestSchema} arg.body
   **/
  forgotPassword({ body } = {}) {
    const { error } = UserValidator.forgotPassword().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/login/password/reset/forgot`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Reset Password using token
   * @description: Use this API to send code to reset password.
   * @param {Object} arg - arg object.
   * @param {CodeRequestBodySchema} arg.body
   **/
  sendResetToken({ body } = {}) {
    const { error } = UserValidator.sendResetToken().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/login/password/reset/token`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Login or Register with token
   * @description: Use this API to login or register using a token for authentication.
   * @param {Object} arg - arg object.
   * @param {TokenRequestBodySchema} arg.body
   **/
  loginWithToken({ body } = {}) {
    const { error } = UserValidator.loginWithToken().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/login/token`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Registration using a form
   * @description: Use this API to perform user registration by sending form data in the request body.
   * @param {Object} arg - arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {FormRegisterRequestSchema} arg.body
   **/
  registerWithForm({ body, platform } = {}) {
    const { error } = UserValidator.registerWithForm().validate(
      { body, platform },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/register/form`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Verify email
   * @description: Use this API to send a verification code to verify an email.
   * @param {Object} arg - arg object.
   * @param {CodeRequestBodySchema} arg.body
   **/
  verifyEmail({ body } = {}) {
    const { error } = UserValidator.verifyEmail().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/verify/email`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Verify mobile
   * @description: Use this API to send a verification code to verify a mobile number.
   * @param {Object} arg - arg object.
   * @param {CodeRequestBodySchema} arg.body
   **/
  verifyMobile({ body } = {}) {
    const { error } = UserValidator.verifyMobile().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/verify/mobile`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Check password
    * @description: Use this API to check if user has created a password for login.
    * @param {Object} arg - arg object.
    
    **/
  hasPassword({} = {}) {
    const { error } = UserValidator.hasPassword().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/user/authentication/v1.0/has-password`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Update user password
   * @description: Use this API to update the password.
   * @param {Object} arg - arg object.
   * @param {UpdatePasswordRequestSchema} arg.body
   **/
  updatePassword({ body } = {}) {
    const { error } = UserValidator.updatePassword().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/password`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Logs out currently logged in user
    * @description: Use this API to check to logout a user from the app.
    * @param {Object} arg - arg object.
    
    **/
  logout({} = {}) {
    const { error } = UserValidator.logout().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/user/authentication/v1.0/logout`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Send OTP on mobile
   * @description: Use this API to send an OTP to a mobile number.
   * @param {Object} arg - arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {SendMobileOtpRequestSchema} arg.body
   **/
  sendOTPOnMobile({ body, platform } = {}) {
    const { error } = UserValidator.sendOTPOnMobile().validate(
      { body, platform },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/otp/mobile/send`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Verify OTP on mobile
   * @description: Use this API to verify the OTP received on a mobile number.
   * @param {Object} arg - arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {VerifyOtpRequestSchema} arg.body
   **/
  verifyMobileOTP({ body, platform } = {}) {
    const { error } = UserValidator.verifyMobileOTP().validate(
      { body, platform },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/otp/mobile/verify`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Send OTP on email
   * @description: Use this API to send an OTP to an email ID.
   * @param {Object} arg - arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {SendEmailOtpRequestSchema} arg.body
   **/
  sendOTPOnEmail({ body, platform } = {}) {
    const { error } = UserValidator.sendOTPOnEmail().validate(
      { body, platform },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/otp/email/send`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Verify OTP on email
   * @description: Use this API to verify the OTP received on an email ID.
   * @param {Object} arg - arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {VerifyEmailOtpRequestSchema} arg.body
   **/
  verifyEmailOTP({ body, platform } = {}) {
    const { error } = UserValidator.verifyEmailOTP().validate(
      { body, platform },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/otp/email/verify`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get logged in user
    * @description: Use this API  to get the details of a logged in user.
    * @param {Object} arg - arg object.
    
    **/
  getLoggedInUser({} = {}) {
    const { error } = UserValidator.getLoggedInUser().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/user/authentication/v1.0/session`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get list of sessions
    * @description: Use this API to retrieve all active sessions of a user.
    * @param {Object} arg - arg object.
    
    **/
  getListOfActiveSessions({} = {}) {
    const { error } = UserValidator.getListOfActiveSessions().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/user/authentication/v1.0/sessions`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get platform configurations
    * @description: Use this API to get all the platform configurations such as mobile image, desktop image, social logins, and all other text.
    * @param {Object} arg - arg object.
    * @param {string} [arg.name] - Name of the application, e.g. Fynd
    
    **/
  getPlatformConfig({ name } = {}) {
    const { error } = UserValidator.getPlatformConfig().validate(
      { name },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["name"] = name;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/user/platform/v1.0/config`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Edit Profile Details
   * @description: Use this API to update details in the user profile. Details can be first name, last name, gender, email, phone number, or profile picture.
   * @param {Object} arg - arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {EditProfileRequestSchema} arg.body
   **/
  updateProfile({ body, platform } = {}) {
    const { error } = UserValidator.updateProfile().validate(
      { body, platform },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/profile/v1.0/detail`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Add mobile number to profile
   * @description: Use this API to add a new mobile number to a profile.
   * @param {Object} arg - arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {EditMobileRequestSchema} arg.body
   **/
  addMobileNumber({ body, platform } = {}) {
    const { error } = UserValidator.addMobileNumber().validate(
      { body, platform },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/user/profile/v1.0/mobile`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Delete mobile number from profile
    * @description: Use this API to delete a mobile number from a profile.
    * @param {Object} arg - arg object.
    * @param {string} [arg.platform] - ID of the application
    * @param {boolean} arg.active - This is a boolean value to check if mobile number is active 1.True - Number is active 2. False - Number is inactive
    * @param {boolean} arg.primary - This is a boolean value to check if mobile number is primary number (main number) 1. True - Number is primary 2. False - Number is not primary
    * @param {boolean} arg.verified - This is a boolean value to check if mobile number is verified 1. True - Number is verified 2.False - Number is not verified yet
    * @param {string} arg.countryCode - Country code of the phone number, e.g. 91
    * @param {string} arg.phone - Phone number
    
    **/
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
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["platform"] = platform;
    query["active"] = active;
    query["primary"] = primary;
    query["verified"] = verified;
    query["country_code"] = countryCode;
    query["phone"] = phone;

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/application/user/profile/v1.0/mobile`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Set mobile as primary
   * @description: Use this API to set a mobile number as primary. Primary number is a verified number used for all future communications.
   * @param {Object} arg - arg object.
   * @param {SendVerificationLinkMobileRequestSchema} arg.body
   **/
  setMobileNumberAsPrimary({ body } = {}) {
    const { error } = UserValidator.setMobileNumberAsPrimary().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/profile/v1.0/mobile/primary`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Send verification link to mobile
   * @description: Use this API to send a verification link to a mobile number
   * @param {Object} arg - arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {SendVerificationLinkMobileRequestSchema} arg.body
   **/
  sendVerificationLinkToMobile({ body, platform } = {}) {
    const { error } = UserValidator.sendVerificationLinkToMobile().validate(
      { body, platform },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/profile/v1.0/mobile/link/send`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Add email to profile
   * @description: Use this API to add a new email address to a profile
   * @param {Object} arg - arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {EditEmailRequestSchema} arg.body
   **/
  addEmail({ body, platform } = {}) {
    const { error } = UserValidator.addEmail().validate(
      { body, platform },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/user/profile/v1.0/email`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Delete email from profile
    * @description: Use this API to delete an email address from a profile
    * @param {Object} arg - arg object.
    * @param {string} [arg.platform] - ID of the application
    * @param {boolean} arg.active - This is a boolean value to check if email ID is active 1. True - Email ID is active 2.False - Email ID is inactive
    * @param {boolean} arg.primary - This is a boolean value to check if email ID is primary (main email ID) 1. True - Email ID is primary 2.False - Email ID is not primary
    * @param {boolean} arg.verified - This is a boolean value to check if email ID is verified 1. True - Email ID is verified 2.False - Email ID is not verified yet
    * @param {string} arg.email - The email ID to delete
    
    **/
  deleteEmail({ active, primary, verified, email, platform } = {}) {
    const { error } = UserValidator.deleteEmail().validate(
      { active, primary, verified, email, platform },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["platform"] = platform;
    query["active"] = active;
    query["primary"] = primary;
    query["verified"] = verified;
    query["email"] = email;

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/application/user/profile/v1.0/email`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Set email as primary
   * @description: Use this API to set an email address as primary. Primary email ID is a email address used for all future communications.
   * @param {Object} arg - arg object.
   * @param {EditEmailRequestSchema} arg.body
   **/
  setEmailAsPrimary({ body } = {}) {
    const { error } = UserValidator.setEmailAsPrimary().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/profile/v1.0/email/primary`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Send verification link to email
   * @description: Use this API to send verification link to an email address.
   * @param {Object} arg - arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {EditEmailRequestSchema} arg.body
   **/
  sendVerificationLinkToEmail({ body, platform } = {}) {
    const { error } = UserValidator.sendVerificationLinkToEmail().validate(
      { body, platform },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/profile/v1.0/email/link/send`,
      query,
      body
    );
  }
}

class Content {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * @summary: Get live announcements
    * @description: Announcements are useful to highlight a message or information on top of a webpage. Use this API to retrieve live announcements. Get announcements on individual pages or for all pages.
    * @param {Object} arg - arg object.
    
    **/
  getAnnouncements({} = {}) {
    const { error } = ContentValidator.getAnnouncements().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/announcements`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get a blog
    * @description: Use this API to get the details of a blog using its slug. Details include the title, reading time, publish status, feature image, tags, author, etc.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a blog. You can get slug value from the endpoint /service/application/content/v1.0/blogs/.
    * @param {string} [arg.rootId] - ID given to the HTML element
    
    **/
  getBlog({ slug, rootId } = {}) {
    const { error } = ContentValidator.getBlog().validate(
      { slug, rootId },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["root_id"] = rootId;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/blogs/${slug}`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get a list of blogs
    * @description: Use this API to get all the blogs.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - The page number to navigate through the given set of results. Default value is 1. 
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    **/
  getBlogs({ pageNo, pageSize } = {}) {
    const { error } = ContentValidator.getBlogs().validate(
      { pageNo, pageSize },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["page_no"] = pageNo;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/blogs/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get a list of blogs
    * @description: Use this API to get all the blogs.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    **/
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
    *
    * @summary: Get a list of FAQs
    * @description: Use this API to get a list of frequently asked questions. Users will benefit from it when facing any issue with the website.
    * @param {Object} arg - arg object.
    
    **/
  getFaqs({} = {}) {
    const { error } = ContentValidator.getFaqs().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/faq`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get a list of FAQ categories
    * @description: FAQs can be divided into categories. Use this API to get a list of FAQ categories.
    * @param {Object} arg - arg object.
    
    **/
  getFaqCategories({} = {}) {
    const { error } = ContentValidator.getFaqCategories().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/faq/categories`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get an FAQ
    * @description: Use this API to get a particular FAQ by its slug.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of an FAQ. You can get slug value from the endpoint /service/application/content/v1.0/faq.
    
    **/
  getFaqBySlug({ slug } = {}) {
    const { error } = ContentValidator.getFaqBySlug().validate(
      { slug },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/faq/${slug}`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get the FAQ category
    * @description: FAQs can be divided into categories. Use this API to get the category to which an FAQ belongs.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of an FAQ category. You can get slug value from the endpoint /service/application/content/v1.0/faq/categories.
    
    **/
  getFaqCategoryBySlug({ slug } = {}) {
    const { error } = ContentValidator.getFaqCategoryBySlug().validate(
      { slug },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/faq/category/${slug}`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get FAQs using the slug of FAQ category
    * @description: FAQs can be divided into categories. Use this API to get all the FAQs belonging to a category by using the category slug.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of an FAQ category. You can get slug value from the endpoint /service/application/content/v1.0/faq/categories.
    
    **/
  getFaqsByCategorySlug({ slug } = {}) {
    const { error } = ContentValidator.getFaqsByCategorySlug().validate(
      { slug },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/faq/category/${slug}/faqs`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get the landing page
    * @description: Landing page is the first page that a prospect lands upon while visiting a website. Use this API to fetch the details of a landing page.
    * @param {Object} arg - arg object.
    
    **/
  getLandingPage({} = {}) {
    const { error } = ContentValidator.getLandingPage().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/landing-page`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get legal information
    * @description: Use this API to get the legal information of an application, which includes Privacy Policy, Terms and Conditions, Shipping Policy and FAQs regarding the usage of the application.
    * @param {Object} arg - arg object.
    
    **/
  getLegalInformation({} = {}) {
    const { error } = ContentValidator.getLegalInformation().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/legal`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get the navigation
    * @description: Use this API to fetch the navigations details which includes the items of the navigation pane. It also shows the links and sub-navigations.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - The page number to navigate through the given set of results. Default value is 1. 
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    **/
  getNavigations({ pageNo, pageSize } = {}) {
    const { error } = ContentValidator.getNavigations().validate(
      { pageNo, pageSize },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["page_no"] = pageNo;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/navigations/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get the navigation
    * @description: Use this API to fetch the navigations details which includes the items of the navigation pane. It also shows the links and sub-navigations.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    **/
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
    *
    * @summary: Get a page
    * @description: Use this API to get the details of a page using its slug. Details include the title, seo, publish status, feature image, tags, meta, etc.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a page. You can get slug value from the endpoint /service/application/content/v1.0/pages/.
    * @param {string} [arg.rootId] - ID given to the HTML element
    
    **/
  getPage({ slug, rootId } = {}) {
    const { error } = ContentValidator.getPage().validate(
      { slug, rootId },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["root_id"] = rootId;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/pages/${slug}`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get all pages
    * @description: Use this API to get a list of pages.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - The page number to navigate through the given set of results. Default value is 1. 
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    **/
  getPages({ pageNo, pageSize } = {}) {
    const { error } = ContentValidator.getPages().validate(
      { pageNo, pageSize },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["page_no"] = pageNo;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/pages/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get all pages
    * @description: Use this API to get a list of pages.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    **/
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

  /**
    *
    * @summary: Get the SEO of an application
    * @description: Use this API to get the SEO details of an application, which includes a robot.txt, meta-tags and sitemap.
    * @param {Object} arg - arg object.
    
    **/
  getSEOConfiguration({} = {}) {
    const { error } = ContentValidator.getSEOConfiguration().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/seo`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get the slideshows
    * @description: Use this API to get a list of slideshows along with their details.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - The page number to navigate through the given set of results. Default value is 1. 
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    **/
  getSlideshows({ pageNo, pageSize } = {}) {
    const { error } = ContentValidator.getSlideshows().validate(
      { pageNo, pageSize },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["page_no"] = pageNo;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/slideshow/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get the slideshows
    * @description: Use this API to get a list of slideshows along with their details.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    **/
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
    *
    * @summary: Get a slideshow
    * @description: A slideshow is a group of images, videos or a combination of both that are shown on the website in the form of slides. Use this API to fetch a slideshow using its `slug`.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a slideshow. You can get slug value from the endpoint /service/application/content/v1.0/slideshow/.
    
    **/
  getSlideshow({ slug } = {}) {
    const { error } = ContentValidator.getSlideshow().validate(
      { slug },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/slideshow/${slug}`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get the support information
    * @description: Use this API to get contact details for customer support including emails and phone numbers.
    * @param {Object} arg - arg object.
    
    **/
  getSupportInformation({} = {}) {
    const { error } = ContentValidator.getSupportInformation().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/support`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get the tags associated with an application
    * @description: Use this API to get all the CSS and JS injected in the application in the form of tags.
    * @param {Object} arg - arg object.
    
    **/
  getTags({} = {}) {
    const { error } = ContentValidator.getTags().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/tags`,
      query,
      undefined
    );
  }
}

class Communication {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * @summary: Get communication consent
    * @description: Use this API to retrieve the consent provided by the user for receiving communication messages over Email/SMS/WhatsApp.
    * @param {Object} arg - arg object.
    
    **/
  getCommunicationConsent({} = {}) {
    const { error } = CommunicationValidator.getCommunicationConsent().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/communication/v1.0/consent`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Upsert communication consent
   * @description: Use this API to update and insert the consent provided by the user for receiving communication messages over Email/SMS/WhatsApp.
   * @param {Object} arg - arg object.
   * @param {CommunicationConsentReq} arg.body
   **/
  upsertCommunicationConsent({ body } = {}) {
    const {
      error,
    } = CommunicationValidator.upsertCommunicationConsent().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/communication/v1.0/consent`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Upsert push token of a user
   * @description: Use this API to update and insert the push token of the user.
   * @param {Object} arg - arg object.
   * @param {PushtokenReq} arg.body
   **/
  upsertAppPushtoken({ body } = {}) {
    const { error } = CommunicationValidator.upsertAppPushtoken().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/communication/v1.0/pn-token`,
      query,
      body
    );
  }
}

class Share {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * @summary: Create QR Code of an app
    * @description: Use this API to create a QR code of an app for sharing it with users who want to use the app.
    * @param {Object} arg - arg object.
    
    **/
  getApplicationQRCode({} = {}) {
    const { error } = ShareValidator.getApplicationQRCode().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/share/v1.0/qr/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Create QR Code of a product
    * @description: Use this API to create a QR code of a product for sharing it with users who want to view/purchase the product.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a product. You can get slug value from the endpoint.
    
    **/
  getProductQRCodeBySlug({ slug } = {}) {
    const { error } = ShareValidator.getProductQRCodeBySlug().validate(
      { slug },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/share/v1.0/qr/products/${slug}/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Create QR Code of a collection
    * @description: Use this API to create a QR code of a collection of products for sharing it with users who want to view/purchase the collection.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a collection. You can get slug value from the endpoint.
    
    **/
  getCollectionQRCodeBySlug({ slug } = {}) {
    const { error } = ShareValidator.getCollectionQRCodeBySlug().validate(
      { slug },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/share/v1.0/qr/collection/${slug}/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Create QR Code of a URL
    * @description: Use this API to create a QR code of a URL for sharing it with users who want to visit the link.
    * @param {Object} arg - arg object.
    * @param {string} arg.url - A link or a web address
    
    **/
  getUrlQRCode({ url } = {}) {
    const { error } = ShareValidator.getUrlQRCode().validate(
      { url },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["url"] = url;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/share/v1.0/qr/url/`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Create a short link
   * @description: Use this API to create a short link that is easy to write/share/read as compared to long URLs.
   * @param {Object} arg - arg object.
   * @param {ShortLinkReq} arg.body
   **/
  createShortLink({ body } = {}) {
    const { error } = ShareValidator.createShortLink().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/share/v1.0/links/short-link/`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get short link by hash
    * @description: Use this API to get a short link by using a hash value.
    * @param {Object} arg - arg object.
    * @param {string} arg.hash - A string value used for converting long URL to short URL and vice-versa.
    
    **/
  getShortLinkByHash({ hash } = {}) {
    const { error } = ShareValidator.getShortLinkByHash().validate(
      { hash },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/share/v1.0/links/short-link/${hash}/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get original link by hash
    * @description: Use this API to retrieve the original link from a short-link by using a hash value.
    * @param {Object} arg - arg object.
    * @param {string} arg.hash - A string value used for converting long URL to short URL and vice-versa.
    
    **/
  getOriginalShortLinkByHash({ hash } = {}) {
    const { error } = ShareValidator.getOriginalShortLinkByHash().validate(
      { hash },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/share/v1.0/links/short-link/${hash}/original/`,
      query,
      undefined
    );
  }
}

class FileStorage {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * @summary: Initiates an upload and returns a storage link that is valid for 30 minutes. You can use the storage link to make subsequent upload request with file buffer or blob.
    * @description: Use this API to perform the first step of uploading (i.e. **Start**) an arbitrarily sized buffer or blob.

The three major steps are:
* Start
* Upload
* Complete

### Start
Initiates the assets upload using `startUpload`.
It returns a storage link in response.

### Upload
Use the storage link to upload a file (Buffer or Blob) to the File Storage.
Make a `PUT` request on storage link received from `startUpload` API with the file (Buffer or Blob) in the request body.

### Complete
After successfully upload, call the `completeUpload` API to finish the upload process.
This operation will return the URL of the uploaded file.

    * @param {Object} arg - arg object.
    * @param {string} arg.namespace - Name of the bucket created for storing objects.
    * @param {StartRequest} arg.body
    **/
  startUpload({ namespace, body } = {}) {
    const { error } = FileStorageValidator.startUpload().validate(
      { namespace, body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/assets/v1.0/namespaces/${namespace}/upload/start/`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Completes the upload process. After successfully uploading a file, call this API to finish the upload process.
    * @description: Use this API to perform the third step of uploading (i.e. **Complete**) an arbitrarily sized buffer or blob.

The three major steps are:
* Start
* Upload
* Complete

### Start
Initiates the assets upload using `startUpload`.
It returns a storage link in response.

### Upload
Use the storage link to upload a file (Buffer or Blob) to the File Storage.
Make a `PUT` request on storage link received from `startUpload` API with the file (Buffer or Blob) in the request body.

### Complete
After successfully upload, call the `completeUpload` API to finish the upload process.
This operation will return the URL of the uploaded file.

    * @param {Object} arg - arg object.
    * @param {string} arg.namespace - Name of the bucket created for storing objects.
    * @param {StartResponse} arg.body
    **/
  completeUpload({ namespace, body } = {}) {
    const { error } = FileStorageValidator.completeUpload().validate(
      { namespace, body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/assets/v1.0/namespaces/${namespace}/upload/complete/`,
      query,
      body
    );
  }
}

class Configuration {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * @summary: Get current application details
    * @description: Use this API to get the current application details which includes configurations that indicate the status of the website, domain, ID, tokens, images, etc.
    * @param {Object} arg - arg object.
    
    **/
  getApplication({} = {}) {
    const { error } = ConfigurationValidator.getApplication().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/configuration/v1.0/application`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get application, owner and seller information
    * @description: Use this API to get the current application details which includes channel name, description, banner, logo, favicon, domain details, etc. This API also retrieves the seller and owner information such as address, email address, and phone number.
    * @param {Object} arg - arg object.
    
    **/
  getOwnerInfo({} = {}) {
    const { error } = ConfigurationValidator.getOwnerInfo().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/configuration/v1.0/about`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get basic application details
    * @description: Use this API to retrieve only the basic details of the application which includes channel name, description, banner, logo, favicon, domain details, etc.
    * @param {Object} arg - arg object.
    
    **/
  getBasicDetails({} = {}) {
    const { error } = ConfigurationValidator.getBasicDetails().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/configuration/v1.0/detail`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get integration tokens
    * @description: Use this API to retrieve the tokens used while integrating Firebase, MoEngage, Segment, GTM, Freshchat, Safetynet, Google Map and Facebook. **Note** - Token values are encrypted with AES encryption using a secret key. Kindly reach out to the developers for obtaining the secret key.
    * @param {Object} arg - arg object.
    
    **/
  getIntegrationTokens({} = {}) {
    const { error } = ConfigurationValidator.getIntegrationTokens().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/configuration/v1.0/token`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get deployment stores
    * @description: Use this API to retrieve the details of all the deployment stores (the selling locations where the application will be utilized for placing orders).
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - The page number to navigate through the given set of results. Default value is 1.
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page. Default value is 10.
    * @param {string} [arg.q] - Store code or name of the ordering store.
    
    **/
  getOrderingStores({ pageNo, pageSize, q } = {}) {
    const { error } = ConfigurationValidator.getOrderingStores().validate(
      { pageNo, pageSize, q },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["page_no"] = pageNo;
    query["page_size"] = pageSize;
    query["q"] = q;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/configuration/v1.0/ordering-store/stores`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get deployment stores
    * @description: Use this API to retrieve the details of all the deployment stores (the selling locations where the application will be utilized for placing orders).
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page. Default value is 10.
    * @param {string} [arg.q] - Store code or name of the ordering store.
    
    **/
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
    *
    * @summary: Get features of application
    * @description: Use this API to retrieve the configuration of features such as product detail, landing page, options in the login/registration screen, communication opt-in, cart options and many more.
    * @param {Object} arg - arg object.
    
    **/
  getFeatures({} = {}) {
    const { error } = ConfigurationValidator.getFeatures().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/configuration/v1.0/feature`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get application information
    * @description: Use this API to retrieve information about the social links, address and contact information of the company/seller/brand operating the application.
    * @param {Object} arg - arg object.
    
    **/
  getContactInfo({} = {}) {
    const { error } = ConfigurationValidator.getContactInfo().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/configuration/v1.0/information`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get currencies enabled in the application
    * @description: Use this API to get a list of currencies allowed in the current application. Moreover, get the name, code, symbol, and the decimal digits of the currencies.
    * @param {Object} arg - arg object.
    
    **/
  getCurrencies({} = {}) {
    const { error } = ConfigurationValidator.getCurrencies().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/configuration/v1.0/currencies`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get currency by its ID
    * @description: Use this API to retrieve a currency using its ID.
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Object ID assigned to the currency
    
    **/
  getCurrencyById({ id } = {}) {
    const { error } = ConfigurationValidator.getCurrencyById().validate(
      { id },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/configuration/v1.0/currency/${id}`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get list of languages
    * @description: Use this API to get a list of languages supported in the application.
    * @param {Object} arg - arg object.
    
    **/
  getLanguages({} = {}) {
    const { error } = ConfigurationValidator.getLanguages().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/configuration/v1.0/languages`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Get an Ordering Store signed cookie on selection of ordering store.
   * @description: Use this API to get an Ordering Store signed cookie upon selecting an ordering store. This will be used by the cart service to verify a coupon against the selected ordering store in cart.
   * @param {Object} arg - arg object.
   * @param {OrderingStoreSelectRequest} arg.body
   **/
  getOrderingStoreCookie({ body } = {}) {
    const { error } = ConfigurationValidator.getOrderingStoreCookie().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/configuration/v1.0/ordering-store/select`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Unset the Ordering Store signed cookie.
    * @description: Use this API to unset the Ordering Store cookie upon changing the sales channel, by its domain URL, in the Universal Fynd Store app.
    * @param {Object} arg - arg object.
    
    **/
  removeOrderingStoreCookie({} = {}) {
    const {
      error,
    } = ConfigurationValidator.removeOrderingStoreCookie().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/application/configuration/v1.0/ordering-store/select`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get a list of staff.
    * @description: Use this API to get a list of staff including the names, employee code, incentive status, assigned ordering stores, and title of each staff added to the application.
    * @param {Object} arg - arg object.
    * @param {boolean} [arg.orderIncent] - This is a boolean value. Select `true` to retrieve the staff members eligible for getting incentives on orders.
    * @param {number} [arg.orderingStore] - ID of the ordering store. Helps in retrieving staff members working at a particular ordering store.
    * @param {string} [arg.user] - Mongo ID of the staff. Helps in retrieving the details of a particular staff member.
    
    **/
  getAppStaffs({ orderIncent, orderingStore, user } = {}) {
    const { error } = ConfigurationValidator.getAppStaffs().validate(
      { orderIncent, orderingStore, user },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["order_incent"] = orderIncent;
    query["ordering_store"] = orderingStore;
    query["user"] = user;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/configuration/v1.0/staff`,
      query,
      undefined
    );
  }
}

class Payment {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * @summary: Get payment gateway keys
    * @description: Use this API to retrieve the payment gateway key, secrets, merchant, SDK/API details to complete a payment at front-end.
    * @param {Object} arg - arg object.
    * @param {string} [arg.xApiToken] - Used for basic authentication.
    * @param {boolean} [arg.refresh] - This is a boolean value. Select `true` to remove temporary cache files on payment gateway and replace with the latest one.
    
    **/
  getAggregatorsConfig({ xApiToken, refresh } = {}) {
    const { error } = PaymentValidator.getAggregatorsConfig().validate(
      { xApiToken, refresh },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["refresh"] = refresh;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/payment/v1.0/config/aggregators/key`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Attach a saved card to customer.
   * @description: Use this API to attach a customer's saved card at the payment gateway, such as Stripe.
   * @param {Object} arg - arg object.
   * @param {AttachCardRequest} arg.body
   **/
  attachCardToCustomer({ body } = {}) {
    const { error } = PaymentValidator.attachCardToCustomer().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/payment/v1.0/card/attach`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Fetch active payment gateway for card payments
    * @description: Use this API to retrieve an active payment aggregator along with the Customer ID. This is applicable for cards payments only.
    * @param {Object} arg - arg object.
    * @param {boolean} [arg.refresh] - 
    
    **/
  getActiveCardAggregator({ refresh } = {}) {
    const { error } = PaymentValidator.getActiveCardAggregator().validate(
      { refresh },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["refresh"] = refresh;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/payment/v1.0/card/aggregator`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Fetch the list of cards saved by the user
    * @description: Use this API to retrieve a list of cards stored by user from an active payment gateway.
    * @param {Object} arg - arg object.
    * @param {boolean} [arg.forceRefresh] - 
    
    **/
  getActiveUserCards({ forceRefresh } = {}) {
    const { error } = PaymentValidator.getActiveUserCards().validate(
      { forceRefresh },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["force_refresh"] = forceRefresh;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/payment/v1.0/cards`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Delete a card
   * @description: Use this API to delete a card added by a user on the payment gateway and clear the cache.
   * @param {Object} arg - arg object.
   * @param {DeletehCardRequest} arg.body
   **/
  deleteUserCard({ body } = {}) {
    const { error } = PaymentValidator.deleteUserCard().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/payment/v1.0/card/remove`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Validate customer for payment
   * @description: Use this API to check if the customer is eligible to use credit-line facilities such as Simpl Pay Later and Rupifi.
   * @param {Object} arg - arg object.
   * @param {ValidateCustomerRequest} arg.body
   **/
  verifyCustomerForPayment({ body } = {}) {
    const { error } = PaymentValidator.verifyCustomerForPayment().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/payment/v1.0/payment/customer/validation`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Verify and charge payment
   * @description: Use this API to verify and check the status of a payment transaction (server-to-server) made through aggregators like Simpl and Mswipe.
   * @param {Object} arg - arg object.
   * @param {ChargeCustomerRequest} arg.body
   **/
  verifyAndChargePayment({ body } = {}) {
    const { error } = PaymentValidator.verifyAndChargePayment().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/payment/v1.0/payment/confirm/charge`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Initialize a payment (server-to-server) for UPI and BharatQR
   * @description: PUse this API to inititate payment using UPI, BharatQR, wherein the UPI requests are send to the app and QR code is displayed on the screen.
   * @param {Object} arg - arg object.
   * @param {PaymentInitializationRequest} arg.body
   **/
  initialisePayment({ body } = {}) {
    const { error } = PaymentValidator.initialisePayment().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/payment/v1.0/payment/request`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Performs continuous polling to check status of payment on the server
   * @description: Use this API to perform continuous polling at intervals to check the status of payment until timeout.
   * @param {Object} arg - arg object.
   * @param {PaymentStatusUpdateRequest} arg.body
   **/
  checkAndUpdatePaymentStatus({ body } = {}) {
    const { error } = PaymentValidator.checkAndUpdatePaymentStatus().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/payment/v1.0/payment/confirm/polling`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get applicable payment options
    * @description: Use this API to get all valid payment options for doing a payment.
    * @param {Object} arg - arg object.
    * @param {number} arg.amount - Payable amount.
    * @param {string} arg.cartId - Identifier of the cart.
    * @param {string} arg.pincode - The PIN Code of the destination address, e.g. 400059
    * @param {string} arg.checkoutMode - Option to checkout for self or for others.
    * @param {boolean} [arg.refresh] - This is a boolean value. Select `true` to remove temporary cache files on payment gateway and replace with the latest one.
    * @param {string} [arg.assignCardId] - Token of user's debit or credit card.
    * @param {string} [arg.userDetails] - URIencoded JSON containing details of an anonymous user.
    
    **/
  getPaymentModeRoutes({
    amount,
    cartId,
    pincode,
    checkoutMode,
    refresh,
    assignCardId,
    userDetails,
  } = {}) {
    const { error } = PaymentValidator.getPaymentModeRoutes().validate(
      {
        amount,
        cartId,
        pincode,
        checkoutMode,
        refresh,
        assignCardId,
        userDetails,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["amount"] = amount;
    query["cart_id"] = cartId;
    query["pincode"] = pincode;
    query["checkout_mode"] = checkoutMode;
    query["refresh"] = refresh;
    query["assign_card_id"] = assignCardId;
    query["user_details"] = userDetails;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/payment/v1.0/payment/options`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get applicable payment options for Point-of-Sale (POS)
    * @description: Use this API to get all valid payment options for doing a payment in POS.
    * @param {Object} arg - arg object.
    * @param {number} arg.amount - Payable amount.
    * @param {string} arg.cartId - Identifier of the cart.
    * @param {string} arg.pincode - The PIN Code of the destination address, e.g. 400059
    * @param {string} arg.checkoutMode - Option to checkout for self or for others.
    * @param {boolean} [arg.refresh] - This is a boolean value. Select `true` to remove temporary cache files on payment gateway and replace with the latest one.
    * @param {string} [arg.assignCardId] - Token of user's debit or credit card.
    * @param {string} arg.orderType - The order type of shipment * HomeDelivery - If the customer wants the order home-delivered * PickAtStore - If the customer wants the handover of an order at the store itself.
    * @param {string} [arg.userDetails] - URIencoded JSON containing details of an anonymous user.
    
    **/
  getPosPaymentModeRoutes({
    amount,
    cartId,
    pincode,
    checkoutMode,
    orderType,
    refresh,
    assignCardId,
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
        assignCardId,
        userDetails,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["amount"] = amount;
    query["cart_id"] = cartId;
    query["pincode"] = pincode;
    query["checkout_mode"] = checkoutMode;
    query["refresh"] = refresh;
    query["assign_card_id"] = assignCardId;
    query["order_type"] = orderType;
    query["user_details"] = userDetails;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/payment/v1.0/payment/options/pos`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get CreditLine Offer
    * @description: Get CreditLine Offer if user is tentatively approved by rupifi
    * @param {Object} arg - arg object.
    
    **/
  getRupifiBannerDetails({} = {}) {
    const { error } = PaymentValidator.getRupifiBannerDetails().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/payment/v1.0/rupifi/banner`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Lists the mode of refund
    * @description: Use this API to retrieve eligible refund modes (such as Netbanking) and add the beneficiary details.
    * @param {Object} arg - arg object.
    
    **/
  getActiveRefundTransferModes({} = {}) {
    const { error } = PaymentValidator.getActiveRefundTransferModes().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/payment/v1.0/refund/transfer-mode`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Enable/Disable a mode for transferring a refund
   * @description: Activate or Deactivate Transfer Mode to collect Beneficiary Details for Refund
   * @param {Object} arg - arg object.
   * @param {UpdateRefundTransferModeRequest} arg.body
   **/
  enableOrDisableRefundTransferMode({ body } = {}) {
    const {
      error,
    } = PaymentValidator.enableOrDisableRefundTransferMode().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/payment/v1.0/refund/transfer-mode`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Lists the beneficiary of a refund
    * @description: Use this API to get the details of all active beneficiary added by a user for refund.
    * @param {Object} arg - arg object.
    * @param {string} arg.orderId - A unique number used for identifying and tracking your orders.
    
    **/
  getUserBeneficiariesDetail({ orderId } = {}) {
    const { error } = PaymentValidator.getUserBeneficiariesDetail().validate(
      { orderId },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["order_id"] = orderId;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/payment/v1.0/refund/user/beneficiary`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Verify IFSC Code
    * @description: Use this API to check whether the 11-digit IFSC code is valid and to fetch the bank details for refund.
    * @param {Object} arg - arg object.
    * @param {string} [arg.ifscCode] - A 11-digit alphanumeric code that uniquely identifies a bank branch.
    
    **/
  verifyIfscCode({ ifscCode } = {}) {
    const { error } = PaymentValidator.verifyIfscCode().validate(
      { ifscCode },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["ifsc_code"] = ifscCode;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/payment/v1.0/ifsc-code/verify`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Lists the beneficiary of a refund
    * @description: Use this API to get the details of all active beneficiary added by a user for refund.
    * @param {Object} arg - arg object.
    * @param {string} arg.orderId - A unique number used for identifying and tracking your orders.
    
    **/
  getOrderBeneficiariesDetail({ orderId } = {}) {
    const { error } = PaymentValidator.getOrderBeneficiariesDetail().validate(
      { orderId },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["order_id"] = orderId;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/payment/v1.0/refund/order/beneficiaries`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Verify the beneficiary details using OTP
   * @description: Use this API to perform an OTP validation before saving the beneficiary details added for a refund.
   * @param {Object} arg - arg object.
   * @param {AddBeneficiaryViaOtpVerificationRequest} arg.body
   **/
  verifyOtpAndAddBeneficiaryForBank({ body } = {}) {
    const {
      error,
    } = PaymentValidator.verifyOtpAndAddBeneficiaryForBank().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/payment/v1.0/refund/verification/bank`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Save bank details for cancelled/returned order
   * @description: Use this API to save the bank details for a returned or cancelled order to refund the amount.
   * @param {Object} arg - arg object.
   * @param {AddBeneficiaryDetailsRequest} arg.body
   **/
  addBeneficiaryDetails({ body } = {}) {
    const { error } = PaymentValidator.addBeneficiaryDetails().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/payment/v1.0/refund/account`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Send OTP on adding a wallet beneficiary
   * @description: Use this API to send an OTP while adding a wallet beneficiary by mobile no. verification.
   * @param {Object} arg - arg object.
   * @param {WalletOtpRequest} arg.body
   **/
  verifyOtpAndAddBeneficiaryForWallet({ body } = {}) {
    const {
      error,
    } = PaymentValidator.verifyOtpAndAddBeneficiaryForWallet().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/payment/v1.0/refund/verification/wallet`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Set a default beneficiary for a refund
   * @description: Use this API to set a default beneficiary for getting a refund.
   * @param {Object} arg - arg object.
   * @param {SetDefaultBeneficiaryRequest} arg.body
   **/
  updateDefaultBeneficiary({ body } = {}) {
    const { error } = PaymentValidator.updateDefaultBeneficiary().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/payment/v1.0/refund/beneficiary/default`,
      query,
      body
    );
  }
}

class Order {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * @summary: Use this API to retrieve all the orders.
    * @description: Get all orders
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - The page number to navigate through the given set of results. Default value is 1.
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page. Default value is 10.
    * @param {string} [arg.fromDate] - The date from which the orders should be retrieved.
    * @param {string} [arg.toDate] - The date till which the orders should be retrieved.
    * @param {number} [arg.orderStatus] - A filter to retrieve orders by their current status such as _placed_, _delivered_, etc.
    
    **/
  getOrders({ pageNo, pageSize, fromDate, toDate, orderStatus } = {}) {
    const { error } = OrderValidator.getOrders().validate(
      { pageNo, pageSize, fromDate, toDate, orderStatus },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["page_no"] = pageNo;
    query["page_size"] = pageSize;
    query["from_date"] = fromDate;
    query["to_date"] = toDate;
    query["order_status"] = orderStatus;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/order/v1.0/orders`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Use this API to retrieve order details such as tracking details, shipment, store information using Fynd Order ID.
    * @description: Get details of an order
    * @param {Object} arg - arg object.
    * @param {string} arg.orderId - A unique number used for identifying and tracking your orders.
    
    **/
  getOrderById({ orderId } = {}) {
    const { error } = OrderValidator.getOrderById().validate(
      { orderId },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/order/v1.0/orders/${orderId}`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Use this API to retrieve shipment details such as price breakup, tracking details, store information, etc. using Shipment ID.
    * @description: Get details of a shipment
    * @param {Object} arg - arg object.
    * @param {string} arg.shipmentId - ID of the shipment. An order may contain multiple items and may get divided into one or more shipment, each having its own ID.
    
    **/
  getShipmentById({ shipmentId } = {}) {
    const { error } = OrderValidator.getShipmentById().validate(
      { shipmentId },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/order/v1.0/orders/shipments/${shipmentId}`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Use this API to retrieve the issues that led to the cancellation of bags within a shipment.
    * @description: Get reasons behind full or partial cancellation of a shipment
    * @param {Object} arg - arg object.
    * @param {string} arg.shipmentId - ID of the shipment. An order may contain multiple items and may get divided into one or more shipment, each having its own ID.
    
    **/
  getShipmentReasons({ shipmentId } = {}) {
    const { error } = OrderValidator.getShipmentReasons().validate(
      { shipmentId },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/order/v1.0/orders/shipments/${shipmentId}/reasons`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Use this API to update the status of a shipment using its shipment ID.
   * @description: Update the shipment status
   * @param {Object} arg - arg object.
   * @param {string} arg.shipmentId - ID of the shipment. An order may contain multiple items and may get divided into one or more shipment, each having its own ID.
   * @param {ShipmentStatusUpdateBody} arg.body
   **/
  updateShipmentStatus({ shipmentId, body } = {}) {
    const { error } = OrderValidator.updateShipmentStatus().validate(
      { shipmentId, body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/order/v1.0/orders/shipments/${shipmentId}/status`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Use this API to track a shipment using its shipment ID.
    * @description: Track shipment
    * @param {Object} arg - arg object.
    * @param {string} arg.shipmentId - ID of the shipment. An order may contain multiple items and may get divided into one or more shipment, each having its own ID.
    
    **/
  trackShipment({ shipmentId } = {}) {
    const { error } = OrderValidator.trackShipment().validate(
      { shipmentId },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/order/v1.0/orders/shipments/${shipmentId}/track`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Use this API to retrieve a POS order and all its details such as tracking details, shipment, store information using Fynd Order ID.
    * @description: Get POS Order
    * @param {Object} arg - arg object.
    * @param {string} arg.orderId - A unique number used for identifying and tracking your orders.
    
    **/
  getPosOrderById({ orderId } = {}) {
    const { error } = OrderValidator.getPosOrderById().validate(
      { orderId },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/order/v1.0/orders/pos-order/${orderId}`,
      query,
      undefined
    );
  }
}

class Rewards {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
   *
   * @summary: Get the eligibility of reward points on a product
   * @description: Use this API to evaluate the amount of reward points that could be earned on any catalogue product.
   * @param {Object} arg - arg object.
   * @param {CatalogueOrderRequest} arg.body
   **/
  getPointsOnProduct({ body } = {}) {
    const { error } = RewardsValidator.getPointsOnProduct().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/rewards/v1.0/catalogue/offer/order/`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get offer by name
    * @description: Use this API to get the offer details and configuration by entering the name of the offer.
    * @param {Object} arg - arg object.
    * @param {string} arg.name - The name given to the offer.
    
    **/
  getOfferByName({ name } = {}) {
    const { error } = RewardsValidator.getOfferByName().validate(
      { name },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/rewards/v1.0/offers/${name}/`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Calculates the discount on order-amount
   * @description: Use this API to calculate the discount on order-amount based on all the amount range configured in order_discount.
   * @param {Object} arg - arg object.
   * @param {OrderDiscountRequest} arg.body
   **/
  getOrderDiscount({ body } = {}) {
    const { error } = RewardsValidator.getOrderDiscount().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/rewards/v1.0/user/offers/order-discount/`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get reward points available with a user
    * @description: Use this API to retrieve total available points of a user for current application
    * @param {Object} arg - arg object.
    
    **/
  getUserPoints({} = {}) {
    const { error } = RewardsValidator.getUserPoints().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/rewards/v1.0/user/points/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get all transactions of reward points
    * @description: Use this API to get a list of points transactions. The list of points history is paginated.
    * @param {Object} arg - arg object.
    * @param {string} [arg.pageId] - PageID is the ID of the requested page. For first request it should be kept empty.
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    **/
  getUserPointsHistory({ pageId, pageSize } = {}) {
    const { error } = RewardsValidator.getUserPointsHistory().validate(
      { pageId, pageSize },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["page_id"] = pageId;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/rewards/v1.0/user/points/history/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get all transactions of reward points
    * @description: Use this API to get a list of points transactions. The list of points history is paginated.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    **/
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
    *
    * @summary: Get referral details of a user
    * @description: Use this API to retrieve the referral details a user has configured in the application.
    * @param {Object} arg - arg object.
    
    **/
  getUserReferralDetails({} = {}) {
    const { error } = RewardsValidator.getUserReferralDetails().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/rewards/v1.0/user/referral/`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Redeems a referral code and credits reward points to users
   * @description: Use this API to enter a referral code following which, the configured points would be credited to a user's reward points account.
   * @param {Object} arg - arg object.
   * @param {RedeemReferralCodeRequest} arg.body
   **/
  redeemReferralCode({ body } = {}) {
    const { error } = RewardsValidator.redeemReferralCode().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/rewards/v1.0/user/referral/redeem/`,
      query,
      body
    );
  }
}

class Feedback {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
   *
   * @summary: Post a new abuse request
   * @description: Use this API to report a specific entity (question/review/comment) for abuse.
   * @param {Object} arg - arg object.
   * @param {ReportAbuseRequest} arg.body
   **/
  createAbuseReport({ body } = {}) {
    const { error } = FeedbackValidator.createAbuseReport().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/feedback/v1.0/abuse`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Update abuse details
   * @description: Use this API to update the abuse details, i.e. status and description.
   * @param {Object} arg - arg object.
   * @param {UpdateAbuseStatusRequest} arg.body
   **/
  updateAbuseReport({ body } = {}) {
    const { error } = FeedbackValidator.updateAbuseReport().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/feedback/v1.0/abuse`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get a list of abuse data
    * @description: Use this API to retrieve a list of abuse data from entity type and entity ID.
    * @param {Object} arg - arg object.
    * @param {string} arg.entityId - ID of the eligible entity as specified in the entity type (question ID/review ID/comment ID).
    * @param {string} arg.entityType - Type of entity, e.g. question, review or comment.
    * @param {string} [arg.id] - abuse id
    * @param {string} [arg.pageId] - Pagination page ID to retrieve next set of results.
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    **/
  getAbuseReports({ entityId, entityType, id, pageId, pageSize } = {}) {
    const { error } = FeedbackValidator.getAbuseReports().validate(
      { entityId, entityType, id, pageId, pageSize },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["id"] = id;
    query["page_id"] = pageId;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/feedback/v1.0/abuse/entity/${entityType}/entity-id/${entityId}`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get a list of abuse data
    * @description: Use this API to retrieve a list of abuse data from entity type and entity ID.
    * @param {Object} arg - arg object.
    * @param {string} arg.entityId - ID of the eligible entity as specified in the entity type (question ID/review ID/comment ID).
    * @param {string} arg.entityType - Type of entity, e.g. question, review or comment.
    * @param {string} [arg.id] - abuse id
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    **/
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
    *
    * @summary: Get a list of attribute data
    * @description: Use this API to retrieve a list of all attribute data, e.g. quality, material, product fitting, packaging, etc.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - The page number to navigate through the given set of results. Default value is 1. 
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    **/
  getAttributes({ pageNo, pageSize } = {}) {
    const { error } = FeedbackValidator.getAttributes().validate(
      { pageNo, pageSize },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["page_no"] = pageNo;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/feedback/v1.0/attributes`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get a list of attribute data
    * @description: Use this API to retrieve a list of all attribute data, e.g. quality, material, product fitting, packaging, etc.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    **/
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
   *
   * @summary: Add a new attribute request
   * @description: Use this API to add a new attribute (e.g. product quality/material/value for money) with its name, slug and description.
   * @param {Object} arg - arg object.
   * @param {SaveAttributeRequest} arg.body
   **/
  createAttribute({ body } = {}) {
    const { error } = FeedbackValidator.createAttribute().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/feedback/v1.0/attributes`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get data of a single attribute
    * @description: Use this API to retrieve a single attribute data from a given slug.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of an attribute. You can get slug value from the endpoint 'service/application/feedback/v1.0/attributes'.
    
    **/
  getAttribute({ slug } = {}) {
    const { error } = FeedbackValidator.getAttribute().validate(
      { slug },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/feedback/v1.0/attributes/${slug}`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Update details of an attribute
   * @description: Use this API update the attribute's name and description.
   * @param {Object} arg - arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of an attribute. You can get slug value from the endpoint 'service/application/feedback/v1.0/attributes'.
   * @param {UpdateAttributeRequest} arg.body
   **/
  updateAttribute({ slug, body } = {}) {
    const { error } = FeedbackValidator.updateAttribute().validate(
      { slug, body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/feedback/v1.0/attributes/${slug}`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Post a new comment
   * @description: Use this API to add a new comment for a specific entity.
   * @param {Object} arg - arg object.
   * @param {CommentRequest} arg.body
   **/
  createComment({ body } = {}) {
    const { error } = FeedbackValidator.createComment().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/feedback/v1.0/comment`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Update the status of a comment
   * @description: Use this API to update the comment status (active or approve) along with new comment if any.
   * @param {Object} arg - arg object.
   * @param {UpdateCommentRequest} arg.body
   **/
  updateComment({ body } = {}) {
    const { error } = FeedbackValidator.updateComment().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/feedback/v1.0/comment`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get a list of comments
    * @description: Use this API to retrieve a list of comments for a specific entity type, e.g. products.
    * @param {Object} arg - arg object.
    * @param {string} arg.entityType - Type of entity, e.g. question, review or comment.
    * @param {string} [arg.id] - Comment ID
    * @param {string} [arg.entityId] - ID of the eligible entity as specified in the entity type (question ID/review ID/comment ID).
    * @param {string} [arg.userId] - User ID - a flag/filter to get comments for a user.
    * @param {string} [arg.pageId] - Pagination page ID to retrieve next set of results.
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    **/
  getComments({ entityType, id, entityId, userId, pageId, pageSize } = {}) {
    const { error } = FeedbackValidator.getComments().validate(
      { entityType, id, entityId, userId, pageId, pageSize },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["id"] = id;
    query["entity_id"] = entityId;
    query["user_id"] = userId;
    query["page_id"] = pageId;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/feedback/v1.0/comment/entity/${entityType}`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get a list of comments
    * @description: Use this API to retrieve a list of comments for a specific entity type, e.g. products.
    * @param {Object} arg - arg object.
    * @param {string} arg.entityType - Type of entity, e.g. question, review or comment.
    * @param {string} [arg.id] - Comment ID
    * @param {string} [arg.entityId] - ID of the eligible entity as specified in the entity type (question ID/review ID/comment ID).
    * @param {string} [arg.userId] - User ID - a flag/filter to get comments for a user.
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    **/
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
    *
    * @summary: Checks eligibility to rate and review, and shows the cloud media configuration
    * @description: Use this API to check whether an entity is eligible to be rated and reviewed. Moreover, it shows the cloud media configuration too.
    * @param {Object} arg - arg object.
    * @param {string} arg.entityType - Type of entity, e.g. question, rate, review, answer, or comment.
    * @param {string} arg.entityId - ID of the eligible entity as specified in the entity type.
    
    **/
  checkEligibility({ entityType, entityId } = {}) {
    const { error } = FeedbackValidator.checkEligibility().validate(
      { entityType, entityId },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/feedback/v1.0/config/entity/${entityType}/entity-id/${entityId}`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Delete Media
    * @description: Use this API to delete media for an entity ID.
    * @param {Object} arg - arg object.
    
    **/
  deleteMedia({} = {}) {
    const { error } = FeedbackValidator.deleteMedia().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/application/feedback/v1.0/media/`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Add Media
   * @description: Use this API to add media to an entity, e.g. review.
   * @param {Object} arg - arg object.
   * @param {AddMediaListRequest} arg.body
   **/
  createMedia({ body } = {}) {
    const { error } = FeedbackValidator.createMedia().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/feedback/v1.0/media/`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Update Media
   * @description: Use this API to update media (archive/approve) for an entity.
   * @param {Object} arg - arg object.
   * @param {UpdateMediaListRequest} arg.body
   **/
  updateMedia({ body } = {}) {
    const { error } = FeedbackValidator.updateMedia().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/feedback/v1.0/media/`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get Media
    * @description: Use this API to retrieve all media from an entity.
    * @param {Object} arg - arg object.
    * @param {string} arg.entityType - Type of entity, e.g. question or product.
    * @param {string} arg.entityId - ID of the eligible entity as specified in the entity type(question ID/product ID).
    * @param {string} [arg.id] - ID of the media.
    * @param {string} [arg.pageId] - Pagination page ID to retrieve next set of results.
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    **/
  getMedias({ entityType, entityId, id, pageId, pageSize } = {}) {
    const { error } = FeedbackValidator.getMedias().validate(
      { entityType, entityId, id, pageId, pageSize },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["id"] = id;
    query["page_id"] = pageId;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/feedback/v1.0/media/entity/${entityType}/entity-id/${entityId}`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get Media
    * @description: Use this API to retrieve all media from an entity.
    * @param {Object} arg - arg object.
    * @param {string} arg.entityType - Type of entity, e.g. question or product.
    * @param {string} arg.entityId - ID of the eligible entity as specified in the entity type(question ID/product ID).
    * @param {string} [arg.id] - ID of the media.
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    **/
  getMediasPaginator({ entityType, entityId, id, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getMedias({
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
    *
    * @summary: Get a review summary
    * @description: Review summary gives ratings and attribute metrics of a review per entity. Use this API to retrieve the following response data: review count, rating average. 'review metrics'/'attribute rating metrics' which contains name, type, average and count.
    * @param {Object} arg - arg object.
    * @param {string} arg.entityType - Type of entity, e.g. product, delivery, seller, order placed, order delivered, application, or template.
    * @param {string} arg.entityId - ID of the eligible entity as specified in the entity type.
    * @param {string} [arg.id] - Review summary identifier.
    * @param {string} [arg.pageId] - Pagination page ID to retrieve next set of results.
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    **/
  getReviewSummaries({ entityType, entityId, id, pageId, pageSize } = {}) {
    const { error } = FeedbackValidator.getReviewSummaries().validate(
      { entityType, entityId, id, pageId, pageSize },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["id"] = id;
    query["page_id"] = pageId;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/feedback/v1.0/rating/summary/entity/${entityType}/entity-id/${entityId}`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get a review summary
    * @description: Review summary gives ratings and attribute metrics of a review per entity. Use this API to retrieve the following response data: review count, rating average. 'review metrics'/'attribute rating metrics' which contains name, type, average and count.
    * @param {Object} arg - arg object.
    * @param {string} arg.entityType - Type of entity, e.g. product, delivery, seller, order placed, order delivered, application, or template.
    * @param {string} arg.entityId - ID of the eligible entity as specified in the entity type.
    * @param {string} [arg.id] - Review summary identifier.
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    **/
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
   *
   * @summary: Add customer reviews
   * @description: Use this API to add customer reviews for a specific entity along with the following data: attributes rating, entity rating, title, description, media resources and template ID.
   * @param {Object} arg - arg object.
   * @param {UpdateReviewRequest} arg.body
   **/
  createReview({ body } = {}) {
    const { error } = FeedbackValidator.createReview().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/feedback/v1.0/review/`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Update customer reviews
   * @description: Use this API to update customer reviews for a specific entity along with following data: attributes rating, entity rating, title, description, media resources and template ID.
   * @param {Object} arg - arg object.
   * @param {UpdateReviewRequest} arg.body
   **/
  updateReview({ body } = {}) {
    const { error } = FeedbackValidator.updateReview().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/feedback/v1.0/review/`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get list of customer reviews
    * @description: Use this API to retrieve a list of customer reviews based on entity and filters provided.
    * @param {Object} arg - arg object.
    * @param {string} arg.entityType - Type of entity, e.g. product, delivery, seller, l3, order placed, order delivered, application, or template.
    * @param {string} arg.entityId - ID of the eligible entity as specified in the entity type.
    * @param {string} [arg.id] - ID of the review.
    * @param {string} [arg.userId] - ID of the user.
    * @param {string} [arg.media] - media type, e.g. image | video | video_file | video_link
    * @param {Array<number>} [arg.rating] - rating filter, e.g. 1-5
    * @param {Array<string>} [arg.attributeRating] - Filter for attribute rating.
    * @param {boolean} [arg.facets] - This is a boolean value for enabling metadata (facets). Selecting *true* will enable facets.
    * @param {string} [arg.sort] - Sort by: default | top | recent
    * @param {boolean} [arg.active] - Get the active reviews.
    * @param {boolean} [arg.approve] - Get the approved reviews.
    * @param {string} [arg.pageId] - Pagination page ID to retrieve next set of results.
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    **/
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
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["id"] = id;
    query["user_id"] = userId;
    query["media"] = media;
    query["rating"] = rating;
    query["attribute_rating"] = attributeRating;
    query["facets"] = facets;
    query["sort"] = sort;
    query["active"] = active;
    query["approve"] = approve;
    query["page_id"] = pageId;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/feedback/v1.0/review/entity/${entityType}/entity-id/${entityId}`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get list of customer reviews
    * @description: Use this API to retrieve a list of customer reviews based on entity and filters provided.
    * @param {Object} arg - arg object.
    * @param {string} arg.entityType - Type of entity, e.g. product, delivery, seller, l3, order placed, order delivered, application, or template.
    * @param {string} arg.entityId - ID of the eligible entity as specified in the entity type.
    * @param {string} [arg.id] - ID of the review.
    * @param {string} [arg.userId] - ID of the user.
    * @param {string} [arg.media] - media type, e.g. image | video | video_file | video_link
    * @param {Array<number>} [arg.rating] - rating filter, e.g. 1-5
    * @param {Array<string>} [arg.attributeRating] - Filter for attribute rating.
    * @param {boolean} [arg.facets] - This is a boolean value for enabling metadata (facets). Selecting *true* will enable facets.
    * @param {string} [arg.sort] - Sort by: default | top | recent
    * @param {boolean} [arg.active] - Get the active reviews.
    * @param {boolean} [arg.approve] - Get the approved reviews.
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    **/
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
    *
    * @summary: Get the feedback templates for a product or l3
    * @description: Use this API to retrieve the details of the following feedback template. order, delivered, application, seller, order, placed, product
    * @param {Object} arg - arg object.
    * @param {string} [arg.templateId] - ID of the feedback template.
    * @param {string} [arg.entityId] - ID of the eligible entity as specified in the entity type.
    * @param {string} [arg.entityType] - Type of entity, e.g. product, delivery, seller, l3, order placed, order delivered, or application.
    
    **/
  getTemplates({ templateId, entityId, entityType } = {}) {
    const { error } = FeedbackValidator.getTemplates().validate(
      { templateId, entityId, entityType },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["template_id"] = templateId;
    query["entity_id"] = entityId;
    query["entity_type"] = entityType;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/feedback/v1.0/template/`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Create a new question
   * @description: Use this API to create a new question with following data- tags, text, type, choices for MCQ type questions, maximum length of answer.
   * @param {Object} arg - arg object.
   * @param {CreateQNARequest} arg.body
   **/
  createQuestion({ body } = {}) {
    const { error } = FeedbackValidator.createQuestion().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/feedback/v1.0/template/qna/`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Update a question
   * @description: Use this API to update the status of a question, its tags and its choices.
   * @param {Object} arg - arg object.
   * @param {UpdateQNARequest} arg.body
   **/
  updateQuestion({ body } = {}) {
    const { error } = FeedbackValidator.updateQuestion().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/feedback/v1.0/template/qna/`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get a list of QnA
    * @description: Use this API to retrieve a list of questions and answers for a given entity.
    * @param {Object} arg - arg object.
    * @param {string} arg.entityType - Type of entity, e.g. product, l3, etc.
    * @param {string} arg.entityId - ID of the eligible entity as specified in the entity type.
    * @param {string} [arg.id] - QNA ID
    * @param {string} [arg.userId] - User ID
    * @param {boolean} [arg.showAnswer] - This is a boolean value. Select *true* to display answers given.
    * @param {string} [arg.pageId] - Pagination page ID to retrieve next set of results.
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    **/
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
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["id"] = id;
    query["user_id"] = userId;
    query["show_answer"] = showAnswer;
    query["page_id"] = pageId;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/feedback/v1.0/template/qna/entity/${entityType}/entity-id/${entityId}`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get a list of QnA
    * @description: Use this API to retrieve a list of questions and answers for a given entity.
    * @param {Object} arg - arg object.
    * @param {string} arg.entityType - Type of entity, e.g. product, l3, etc.
    * @param {string} arg.entityId - ID of the eligible entity as specified in the entity type.
    * @param {string} [arg.id] - QNA ID
    * @param {string} [arg.userId] - User ID
    * @param {boolean} [arg.showAnswer] - This is a boolean value. Select *true* to display answers given.
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    **/
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
    *
    * @summary: Get a list of votes
    * @description: Use this API to retrieve a list of votes of a current logged in user. Votes can be filtered using `ref_type`, i.e. review | comment.
    * @param {Object} arg - arg object.
    * @param {string} [arg.id] - vote ID
    * @param {string} [arg.refType] - Entity type, e.g. review | comment.
    * @param {number} [arg.pageNo] - The page number to navigate through the given set of results. Default value is 1.
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    **/
  getVotes({ id, refType, pageNo, pageSize } = {}) {
    const { error } = FeedbackValidator.getVotes().validate(
      { id, refType, pageNo, pageSize },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["id"] = id;
    query["ref_type"] = refType;
    query["page_no"] = pageNo;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/feedback/v1.0/vote/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get a list of votes
    * @description: Use this API to retrieve a list of votes of a current logged in user. Votes can be filtered using `ref_type`, i.e. review | comment.
    * @param {Object} arg - arg object.
    * @param {string} [arg.id] - vote ID
    * @param {string} [arg.refType] - Entity type, e.g. review | comment.
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    **/
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
   *
   * @summary: Create a new vote
   * @description: Use this API to create a new vote, where the action could be an upvote or a downvote. This is useful when you want to give a vote (say upvote) to a review (ref_type) of a product (entity_type).
   * @param {Object} arg - arg object.
   * @param {VoteRequest} arg.body
   **/
  createVote({ body } = {}) {
    const { error } = FeedbackValidator.createVote().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/feedback/v1.0/vote/`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Update a vote
   * @description: Use this API to update a vote with a new action, i.e. either an upvote or a downvote.
   * @param {Object} arg - arg object.
   * @param {UpdateVoteRequest} arg.body
   **/
  updateVote({ body } = {}) {
    const { error } = FeedbackValidator.updateVote().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/feedback/v1.0/vote/`,
      query,
      body
    );
  }
}

class PosCart {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * @summary: Fetch all Items Added to  Cart
    * @description: Get all the details of a items added to cart  by uid. If successful, returns a Cart resource in the response body specified in CartResponse
    * @param {Object} arg - arg object.
    * @param {number} [arg.uid] - 
    * @param {boolean} [arg.i] - 
    * @param {boolean} [arg.b] - 
    * @param {number} [arg.assignCardId] - 
    
    **/
  getCart({ uid, i, b, assignCardId } = {}) {
    const { error } = PosCartValidator.getCart().validate(
      { uid, i, b, assignCardId },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;
    query["i"] = i;
    query["b"] = b;
    query["assign_card_id"] = assignCardId;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/detail`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Fetch Last-Modified timestamp
    * @description: Fetch Last-Modified timestamp in header metadata
    * @param {Object} arg - arg object.
    * @param {number} [arg.uid] - 
    
    **/
  getCartLastModified({ uid } = {}) {
    const { error } = PosCartValidator.getCartLastModified().validate(
      { uid },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "head",
      `/service/application/pos/cart/v1.0/detail`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Add Items to Cart
   * @description: <p>Add Items to cart. See `AddCartRequest` in schema of request body for the list of attributes needed to add items to a cart. On successful request, returns cart response containing details of items, coupons available etc.these attributes will be fetched from the folowing api's</p>
   * @param {Object} arg - arg object.
   * @param {boolean} [arg.i] -
   * @param {boolean} [arg.b] -
   * @param {AddCartRequest} arg.body
   **/
  addItems({ body, i, b } = {}) {
    const { error } = PosCartValidator.addItems().validate(
      { body, i, b },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["i"] = i;
    query["b"] = b;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/pos/cart/v1.0/detail`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Update Items already added to Cart
   * @description: Request object containing attributes like item_quantity and item_size which can be updated .these attributes will be fetched from the folowing api's</p> <ul> <li><font color="monochrome">operation</font> Operation for current api call. <b>update_item</b> for update items. <b>remove_item</b> for removing items.</li> <li> <font color="monochrome">item_id</font>  "/platform/content/v1/products/"</li> <li> <font color="monochrome">item_size</font>   "/platform/content/v1/products/{slug}/sizes/"</li> <li> <font color="monochrome">quantity</font>  item quantity (must be greater than or equal to 1)</li> <li> <font color="monochrome">article_id</font>   "/content​/v1​/products​/{identifier}​/sizes​/price​/"</li> <li> <font color="monochrome">item_index</font>  item position in the cart (must be greater than or equal to 0)</li> </ul>
   * @param {Object} arg - arg object.
   * @param {number} [arg.uid] -
   * @param {boolean} [arg.i] -
   * @param {boolean} [arg.b] -
   * @param {UpdateCartRequest} arg.body
   **/
  updateCart({ body, uid, i, b } = {}) {
    const { error } = PosCartValidator.updateCart().validate(
      { body, uid, i, b },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;
    query["i"] = i;
    query["b"] = b;

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/pos/cart/v1.0/detail`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Cart item count
    * @description: Get total count of item present in cart
    * @param {Object} arg - arg object.
    * @param {number} [arg.uid] - Cart id
    
    **/
  getItemCount({ uid } = {}) {
    const { error } = PosCartValidator.getItemCount().validate(
      { uid },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/basic`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Fetch Coupon
    * @description: Get all the details of a coupons applicable to cart  by uid. If successful, returns a Coupon resource in the response body specified in GetCouponResponse
    * @param {Object} arg - arg object.
    * @param {number} [arg.uid] - 
    
    **/
  getCoupons({ uid } = {}) {
    const { error } = PosCartValidator.getCoupons().validate(
      { uid },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/coupon`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Apply Coupon
    * @description: <p>Apply Coupons on Items added to cart. On successful request, returns cart response containing details of items ,coupons applied etc.these attributes will be consumed by  api</p> <ul> <li> <font color="monochrome">coupon_code</font></li>
</ul>
    * @param {Object} arg - arg object.
    * @param {boolean} [arg.i] - 
    * @param {boolean} [arg.b] - 
    * @param {boolean} [arg.p] - 
    * @param {number} [arg.uid] - 
    * @param {ApplyCouponRequest} arg.body
    **/
  applyCoupon({ body, i, b, p, uid } = {}) {
    const { error } = PosCartValidator.applyCoupon().validate(
      { body, i, b, p, uid },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["i"] = i;
    query["b"] = b;
    query["p"] = p;
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/pos/cart/v1.0/coupon`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Remove Coupon Applied
    * @description: Remove Coupon applied on the cart by passing uid in request body.
    * @param {Object} arg - arg object.
    * @param {number} [arg.uid] - Cart id
    
    **/
  removeCoupon({ uid } = {}) {
    const { error } = PosCartValidator.removeCoupon().validate(
      { uid },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/application/pos/cart/v1.0/coupon`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get discount offers based on quantity
    * @description: List applicable offers along with current, next and best offer for given product. Either one of **uid**, **item_id**, **slug** should be present*
    * @param {Object} arg - arg object.
    * @param {number} [arg.itemId] - Item id
    * @param {string} [arg.articleId] - Article mongo id
    * @param {number} [arg.uid] - Item id
    * @param {string} [arg.slug] - Item unique url from product page
    
    **/
  getBulkDiscountOffers({ itemId, articleId, uid, slug } = {}) {
    const { error } = PosCartValidator.getBulkDiscountOffers().validate(
      { itemId, articleId, uid, slug },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["item_id"] = itemId;
    query["article_id"] = articleId;
    query["uid"] = uid;
    query["slug"] = slug;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/bulk-price`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Fetch all Items Added to  Cart
   * @description: Get all the details of a items added to cart  by uid. If successful, returns a Cart resource in the response body specified in CartResponse
   * @param {Object} arg - arg object.
   * @param {number} [arg.uid] -
   * @param {boolean} [arg.i] -
   * @param {boolean} [arg.b] -
   * @param {RewardPointRequest} arg.body
   **/
  applyRewardPoints({ body, uid, i, b } = {}) {
    const { error } = PosCartValidator.applyRewardPoints().validate(
      { body, uid, i, b },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;
    query["i"] = i;
    query["b"] = b;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/pos/cart/v1.0/redeem/points/`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Fetch Address
    * @description: Get all the addresses associated with the account. If successful, returns a Address resource in the response body specified in GetAddressesResponse.attibutes listed below are optional <ul> <li> <font color="monochrome">uid</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
    * @param {Object} arg - arg object.
    * @param {number} [arg.uid] - 
    * @param {string} [arg.mobileNo] - 
    * @param {string} [arg.checkoutMode] - 
    * @param {string} [arg.tags] - 
    * @param {boolean} [arg.isDefault] - 
    
    **/
  getAddresses({ uid, mobileNo, checkoutMode, tags, isDefault } = {}) {
    const { error } = PosCartValidator.getAddresses().validate(
      { uid, mobileNo, checkoutMode, tags, isDefault },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;
    query["mobile_no"] = mobileNo;
    query["checkout_mode"] = checkoutMode;
    query["tags"] = tags;
    query["is_default"] = isDefault;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/address`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Add Address to the account
   * @description: <p>Add Address to account. See `Address` in schema of request body for the list of attributes needed to add Address to account. On successful request, returns response containing address_id ,is_default_address and success message.
   * @param {Object} arg - arg object.
   * @param {Address} arg.body
   **/
  addAddress({ body } = {}) {
    const { error } = PosCartValidator.addAddress().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/pos/cart/v1.0/address`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Fetch Single Address
    * @description: Get a addresses with the given id. If successful, returns a Address resource in the response body specified in `Address`.attibutes listed below are optional <ul> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
    * @param {Object} arg - arg object.
    * @param {number} arg.id - 
    * @param {number} [arg.uid] - 
    * @param {string} [arg.mobileNo] - 
    * @param {string} [arg.checkoutMode] - 
    * @param {string} [arg.tags] - 
    * @param {boolean} [arg.isDefault] - 
    
    **/
  getAddressById({ id, uid, mobileNo, checkoutMode, tags, isDefault } = {}) {
    const { error } = PosCartValidator.getAddressById().validate(
      { id, uid, mobileNo, checkoutMode, tags, isDefault },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;
    query["mobile_no"] = mobileNo;
    query["checkout_mode"] = checkoutMode;
    query["tags"] = tags;
    query["is_default"] = isDefault;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/address/${id}`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Update Address alreay added to account
   * @description: Request object containing attributes mentioned in  <font color="blue">Address </font> can be updated .these attributes are :</p> <ul> <li> <font color="monochrome">is_default_address</font></li> <li> <font color="monochrome">landmark</font></li> <li> <font color="monochrome">area</font></li> <li> <font color="monochrome">pincode</font></li> <li> <font color="monochrome">email</font></li> <li> <font color="monochrome">address_type</font></li> <li> <font color="monochrome">name</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">address</font></li> </ul>
   * @param {Object} arg - arg object.
   * @param {number} arg.id - Address id
   * @param {Address} arg.body
   **/
  updateAddress({ id, body } = {}) {
    const { error } = PosCartValidator.updateAddress().validate(
      { id, body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/pos/cart/v1.0/address/${id}`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Remove Address Associated to the account
    * @description: Delete a Address by it's address_id. Returns an object that tells whether the address was deleted successfully
    * @param {Object} arg - arg object.
    * @param {number} arg.id - Address id
    
    **/
  removeAddress({ id } = {}) {
    const { error } = PosCartValidator.removeAddress().validate(
      { id },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/application/pos/cart/v1.0/address/${id}`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Select Address from All Addresses
   * @description: <p>Select Address from all addresses associated with the account in order to ship the cart items to .that address,otherwise default address will be selected implicitly. See `SelectCartAddressRequest` in schema of request body for the list of attributes needed to select Address from account. On successful request, returns Cart object response.below are the address attributes which needs to be sent. <ul> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">billing_address_id</font></li> <li> <font color="monochrome">uid</font></li> </ul>
   * @param {Object} arg - arg object.
   * @param {number} [arg.uid] -
   * @param {boolean} [arg.i] -
   * @param {boolean} [arg.b] -
   * @param {SelectCartAddressRequest} arg.body
   **/
  selectAddress({ body, uid, i, b } = {}) {
    const { error } = PosCartValidator.selectAddress().validate(
      { body, uid, i, b },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;
    query["i"] = i;
    query["b"] = b;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/pos/cart/v1.0/select-address`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Update Cart Payment
   * @description: Update Cart Payment for Your Account
   * @param {Object} arg - arg object.
   * @param {string} [arg.uid] -
   * @param {UpdateCartPaymentRequest} arg.body
   **/
  selectPaymentMode({ body, uid } = {}) {
    const { error } = PosCartValidator.selectPaymentMode().validate(
      { body, uid },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/pos/cart/v1.0/payment`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get Cart Payment for valid coupon
    * @description: Validate coupon for selected payment mode
    * @param {Object} arg - arg object.
    * @param {string} [arg.uid] - 
    * @param {string} [arg.addressId] - 
    * @param {string} [arg.paymentMode] - 
    * @param {string} [arg.paymentIdentifier] - 
    * @param {string} [arg.aggregatorName] - 
    * @param {string} [arg.merchantCode] - 
    
    **/
  validateCouponForPayment({
    uid,
    addressId,
    paymentMode,
    paymentIdentifier,
    aggregatorName,
    merchantCode,
  } = {}) {
    const { error } = PosCartValidator.validateCouponForPayment().validate(
      {
        uid,
        addressId,
        paymentMode,
        paymentIdentifier,
        aggregatorName,
        merchantCode,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;
    query["address_id"] = addressId;
    query["payment_mode"] = paymentMode;
    query["payment_identifier"] = paymentIdentifier;
    query["aggregator_name"] = aggregatorName;
    query["merchant_code"] = merchantCode;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/payment/validate/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get delivery date and options before checkout
    * @description: Shipment break up item wise with delivery date. Actual                      delivery will be during given dates only. Items will be                      delivered in group of shipments created.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pickAtStoreUid] - 
    * @param {number} [arg.orderingStoreId] - 
    * @param {boolean} [arg.p] - Get payment options or not
    * @param {number} [arg.uid] - Cart id
    * @param {number} [arg.addressId] - Address id
    * @param {string} [arg.areaCode] - Destination pincode.
    * @param {string} [arg.orderType] - Order type of shipment
    
    **/
  getShipments({
    pickAtStoreUid,
    orderingStoreId,
    p,
    uid,
    addressId,
    areaCode,
    orderType,
  } = {}) {
    const { error } = PosCartValidator.getShipments().validate(
      {
        pickAtStoreUid,
        orderingStoreId,
        p,
        uid,
        addressId,
        areaCode,
        orderType,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["pick_at_store_uid"] = pickAtStoreUid;
    query["ordering_store_id"] = orderingStoreId;
    query["p"] = p;
    query["uid"] = uid;
    query["address_id"] = addressId;
    query["area_code"] = areaCode;
    query["order_type"] = orderType;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/shipment`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Update shipment delivery type and quantity before checkout
   * @description: Shipment break up item wise with delivery date. Actual                      delivery will be during given dates only. Items will be                      delivered in group of shipments created. Update the shipment                      type and quantity as per customer preference for store pick up or home delivery
   * @param {Object} arg - arg object.
   * @param {boolean} [arg.i] - Get items or not
   * @param {boolean} [arg.p] - Get payment options or not
   * @param {number} [arg.uid] - Cart id
   * @param {number} [arg.addressId] - Address id
   * @param {string} [arg.orderType] - Order is hand over or home delivery
   * @param {UpdateCartShipmentRequest} arg.body
   **/
  updateShipments({ body, i, p, uid, addressId, orderType } = {}) {
    const { error } = PosCartValidator.updateShipments().validate(
      { body, i, p, uid, addressId, orderType },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["i"] = i;
    query["p"] = p;
    query["uid"] = uid;
    query["address_id"] = addressId;
    query["order_type"] = orderType;

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/pos/cart/v1.0/shipment`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Checkout Cart
   * @description: Checkout all items in cart to payment and order generation.                        For COD only order will be generated while for other checkout mode                        user will be redirected to payment gateway
   * @param {Object} arg - arg object.
   * @param {number} [arg.uid] -
   * @param {CartPosCheckoutRequest} arg.body
   **/
  checkoutCart({ body, uid } = {}) {
    const { error } = PosCartValidator.checkoutCart().validate(
      { body, uid },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/pos/cart/v1.0/checkout`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Update Cart Meta
   * @description: Update cart meta like checkout_mode, gstin.
   * @param {Object} arg - arg object.
   * @param {number} [arg.uid] - Cart id received in get cart.
   * @param {CartMetaRequest} arg.body
   **/
  updateCartMeta({ body, uid } = {}) {
    const { error } = PosCartValidator.updateCartMeta().validate(
      { body, uid },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/pos/cart/v1.0/meta`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get available delivery modes for cart
    * @description: Get available delivery modes for cart and pick up store uid list. From given pick stores list user can pick up delivery. Use this uid to show store address
    * @param {Object} arg - arg object.
    * @param {string} arg.areaCode - 
    * @param {number} [arg.uid] - 
    
    **/
  getAvailableDeliveryModes({ areaCode, uid } = {}) {
    const { error } = PosCartValidator.getAvailableDeliveryModes().validate(
      { areaCode, uid },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["area_code"] = areaCode;
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/available-delivery-mode`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get list of stores for give uids
    * @description: Get list of stores by providing pick up available store uids.
    * @param {Object} arg - arg object.
    * @param {number} arg.storeUid - 
    
    **/
  getStoreAddressByUid({ storeUid } = {}) {
    const { error } = PosCartValidator.getStoreAddressByUid().validate(
      { storeUid },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["store_uid"] = storeUid;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/store-address`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Generate Cart sharing link token
   * @description: Generates shared cart snapshot and returns shortlink token
   * @param {Object} arg - arg object.
   * @param {GetShareCartLinkRequest} arg.body
   **/
  getCartShareLink({ body } = {}) {
    const { error } = PosCartValidator.getCartShareLink().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/pos/cart/v1.0/share-cart`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get shared cart snapshot and cart response
    * @description: Returns shared cart response for sent token with `shared_cart_details`                    containing shared cart details in response.
    * @param {Object} arg - arg object.
    * @param {string} arg.token - Shared short link token.
    
    **/
  getCartSharedItems({ token } = {}) {
    const { error } = PosCartValidator.getCartSharedItems().validate(
      { token },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/share-cart/${token}`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Merge or Replace existing cart
    * @description: Merge or Replace cart based on `action` parameter with shared cart of `token`
    * @param {Object} arg - arg object.
    * @param {string} arg.token - Shared short link token.
    * @param {string} arg.action - Operation to perform on existing cart, whether to merge or replace.
    
    **/
  updateCartWithSharedItems({ token, action } = {}) {
    const { error } = PosCartValidator.updateCartWithSharedItems().validate(
      { token, action },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/pos/cart/v1.0/share-cart/${token}/${action}`,
      query,
      undefined
    );
  }
}

class Logistic {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
   *
   * @summary: Use this API to know the delivery turnaround time (TAT) by entering the product details along with the PIN Code of the location.
   * @description: Get TAT of a product
   * @param {Object} arg - arg object.
   * @param {GetTatProductReqBody} arg.body
   **/
  getTatProduct({ body } = {}) {
    const { error } = LogisticValidator.getTatProduct().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/logistics/v1.0`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Use this API to retrieve a city by its PIN Code.
    * @description: Get city from PIN Code
    * @param {Object} arg - arg object.
    * @param {string} arg.pincode - The PIN Code of the area, e.g. 400059
    
    **/
  getPincodeCity({ pincode } = {}) {
    const { error } = LogisticValidator.getPincodeCity().validate(
      { pincode },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/logistics/v1.0/pincode/${pincode}`,
      query,
      undefined
    );
  }
}

/**
 * @param  {} data
 * @param  {string} file_name
 * @param  {string} content_type
 * @param  {string} namespace
 * @param  {number} size
 * @param  {number} tags
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
