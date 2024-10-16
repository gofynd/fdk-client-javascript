const ApplicationAPIClient = require("../ApplicationAPIClient");
const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");
const CatalogApplicationValidator = require("./CatalogApplicationValidator");
const CatalogApplicationModel = require("./CatalogApplicationModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Catalog {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      followById:
        "/service/application/catalog/v1.0/follow/{collection_type}/{collection_id}/",
      getBrandDetailBySlug: "/service/application/catalog/v1.0/brands/{slug}/",
      getBrands: "/service/application/catalog/v1.0/brands/",
      getCategories: "/service/application/catalog/v1.0/categories/",
      getCategoryDetailBySlug:
        "/service/application/catalog/v1.0/categories/{slug}/",
      getCollectionDetailBySlug:
        "/service/application/catalog/v1.0/collections/{slug}/",
      getCollectionItemsBySlug:
        "/service/application/catalog/v1.0/collections/{slug}/items/",
      getCollections: "/service/application/catalog/v1.0/collections/",
      getComparedFrequentlyProductBySlug:
        "/service/application/catalog/v1.0/products/{slug}/similar/compared-frequently/",
      getDepartments: "/service/application/catalog/v1.0/departments/",
      getFollowIds: "/service/application/catalog/v1.0/follow/ids/",
      getFollowedListing:
        "/service/application/catalog/v1.0/follow/{collection_type}/",
      getFollowerCountById:
        "/service/application/catalog/v1.0/follow/{collection_type}/{collection_id}/count/",
      getHomeProducts: "/service/application/catalog/v1.0/home/listing/",
      getInStockLocations:
        "/service/application/catalog/v1.0/in-stock/locations/",
      getLocationDetailsById:
        "/service/application/catalog/v1.0/locations/{location_id}/",
      getProductBundlesBySlug:
        "/service/application/catalog/v1.0/product-grouping/",
      getProductComparisonBySlugs:
        "/service/application/catalog/v1.0/products/compare/",
      getProductDetailBySlug:
        "/service/application/catalog/v1.0/products/{slug}/",
      getProductPriceBySlug:
        "/service/application/catalog/v3.0/products/{slug}/sizes/{size}/price/",
      getProductSellersBySlug:
        "/service/application/catalog/v3.0/products/{slug}/sizes/{size}/sellers/",
      getProductSizesBySlug:
        "/service/application/catalog/v1.0/products/{slug}/sizes/",
      getProductStockByIds:
        "/service/application/catalog/v1.0/products/stock-status/",
      getProductStockForTimeByIds:
        "/service/application/catalog/v1.0/products/stock-status/poll/",
      getProductVariantsBySlug:
        "/service/application/catalog/v1.0/products/{slug}/variants/",
      getProducts: "/service/application/catalog/v1.0/products/",
      getSearchResults: "/service/application/catalog/v1.0/auto-complete/",
      getSimilarComparisonProductBySlug:
        "/service/application/catalog/v1.0/products/{slug}/similar/compare/",
      getStores: "/service/application/catalog/v1.0/locations/",
      unfollowById:
        "/service/application/catalog/v1.0/follow/{collection_type}/{collection_id}/",
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
   * @param {CatalogApplicationValidator.FollowByIdParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CatalogApplicationModel.FollowPostResponseSchema>} -
   *   Success response
   * @name followById
   * @summary: Create item, brand, product
   * @description: Add a product, brand, or item to the user's followed list by collection Id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/followById/).
   */
  async followById(
    { collectionType, collectionId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogApplicationValidator.followById().validate(
      { collectionType, collectionId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogApplicationValidator.followById().validate(
      { collectionType, collectionId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Catalog > followById \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["followById"],
        params: { collectionType, collectionId },
      }),
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogApplicationModel.FollowPostResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Catalog > followById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogApplicationValidator.GetBrandDetailBySlugParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CatalogApplicationModel.BrandDetailResponseSchema>} -
   *   Success response
   * @name getBrandDetailBySlug
   * @summary: Get a brand
   * @description: Get metadata of a brand such as name, information, logo, banner, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getBrandDetailBySlug/).
   */
  async getBrandDetailBySlug(
    { slug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogApplicationValidator.getBrandDetailBySlug().validate(
      { slug },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogApplicationValidator.getBrandDetailBySlug().validate(
      { slug },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Catalog > getBrandDetailBySlug \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getBrandDetailBySlug"],
        params: { slug },
      }),
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogApplicationModel.BrandDetailResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Catalog > getBrandDetailBySlug \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogApplicationValidator.GetBrandsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CatalogApplicationModel.BrandListingResponseSchema>} -
   *   Success response
   * @name getBrands
   * @summary: List brands
   * @description: Get a list of all the available brands. Filtering can be applied to the department. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getBrands/).
   */
  async getBrands(
    { department, pageNo, pageSize, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogApplicationValidator.getBrands().validate(
      { department, pageNo, pageSize },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogApplicationValidator.getBrands().validate(
      { department, pageNo, pageSize },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Catalog > getBrands \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["department"] = department;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getBrands"],
        params: {},
      }),
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogApplicationModel.BrandListingResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Catalog > getBrands \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.department] - The name of the department. Use this
   *   parameter to filter products by a particular department. See the list
   *   of available departments below. Also, you can get available departments
   *   from the endpoint /service/application/catalog/v1.0/departments/.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @returns {Paginator<CatalogApplicationModel.BrandListingResponseSchema>}
   * @summary: List brands
   * @description: Get a list of all the available brands. Filtering can be applied to the department.
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
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {CatalogApplicationValidator.GetCategoriesParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CatalogApplicationModel.CategoryListingResponseSchema>}
   *   - Success response
   *
   * @name getCategories
   * @summary: List product categories
   * @description: List all available product categories. Also, users can filter the categories by department. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getCategories/).
   */
  async getCategories(
    { department, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogApplicationValidator.getCategories().validate(
      { department },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogApplicationValidator.getCategories().validate(
      { department },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Catalog > getCategories \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["department"] = department;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getCategories"],
        params: {},
      }),
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogApplicationModel.CategoryListingResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Catalog > getCategories \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogApplicationValidator.GetCategoryDetailBySlugParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CatalogApplicationModel.CategoryMetaResponseSchema>} -
   *   Success response
   * @name getCategoryDetailBySlug
   * @summary: Get category by slug
   * @description: Get detailed information about a specific product category using its slug and get metadata of a category such as name, information, logo, banner, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getCategoryDetailBySlug/).
   */
  async getCategoryDetailBySlug(
    { slug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogApplicationValidator.getCategoryDetailBySlug().validate(
      { slug },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogApplicationValidator.getCategoryDetailBySlug().validate(
      { slug },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Catalog > getCategoryDetailBySlug \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getCategoryDetailBySlug"],
        params: { slug },
      }),
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogApplicationModel.CategoryMetaResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Catalog > getCategoryDetailBySlug \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogApplicationValidator.GetCollectionDetailBySlugParam} arg
   *   - Arg object.
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CatalogApplicationModel.CollectionDetailResponseSchema>}
   *   - Success response
   *
   * @name getCollectionDetailBySlug
   * @summary: Get a collection
   * @description: Get detailed information about a specific collection using its slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getCollectionDetailBySlug/).
   */
  async getCollectionDetailBySlug(
    { slug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogApplicationValidator.getCollectionDetailBySlug().validate(
      { slug },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogApplicationValidator.getCollectionDetailBySlug().validate(
      { slug },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Catalog > getCollectionDetailBySlug \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getCollectionDetailBySlug"],
        params: { slug },
      }),
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogApplicationModel.CollectionDetailResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Catalog > getCollectionDetailBySlug \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogApplicationValidator.GetCollectionItemsBySlugParam} arg -
   *   Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CatalogApplicationModel.ProductListingResponseSchema>}
   *   - Success response
   *
   * @name getCollectionItemsBySlug
   * @summary: Lists items of collection
   * @description: Fetch items within a particular collection identified by its slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getCollectionItemsBySlug/).
   */
  async getCollectionItemsBySlug(
    {
      slug,
      f,
      q,
      filters,
      sortOn,
      pageId,
      pageSize,
      pageNo,
      pageType,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogApplicationValidator.getCollectionItemsBySlug().validate(
      { slug, f, q, filters, sortOn, pageId, pageSize, pageNo, pageType },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogApplicationValidator.getCollectionItemsBySlug().validate(
      { slug, f, q, filters, sortOn, pageId, pageSize, pageNo, pageType },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Catalog > getCollectionItemsBySlug \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["f"] = f;
    query_params["q"] = q;
    query_params["filters"] = filters;
    query_params["sort_on"] = sortOn;
    query_params["page_id"] = pageId;
    query_params["page_size"] = pageSize;
    query_params["page_no"] = pageNo;
    query_params["page_type"] = pageType;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getCollectionItemsBySlug"],
        params: { slug },
      }),
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogApplicationModel.ProductListingResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Catalog > getCollectionItemsBySlug \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a collection. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/collections/.
   * @param {string} [arg.f] - The search filter parameters. Filter parameters
   *   will be passed in f parameter as shown in the example below. Double
   *   Pipe (||) denotes the OR condition, whereas Triple-colon (:::)
   *   indicates a new filter parameter applied as an AND condition.
   * @param {string} [arg.q] - The search query for entering partial or full
   *   name of product, brand, category, or collection.
   * @param {boolean} [arg.filters] - True for fetching all filter parameters
   *   and False for disabling the filter parameters.
   * @param {string} [arg.sortOn] - The order in which the list of products
   *   should be sorted, e.g. popularity, price, latest and discount, in
   *   either ascending or descending order. See the supported values below.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @returns {Paginator<CatalogApplicationModel.ProductListingResponseSchema>}
   * @summary: Lists items of collection
   * @description: Fetch items within a particular collection identified by its slug.
   */
  getCollectionItemsBySlugPaginator({
    slug,
    f,
    q,
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
        q: q,
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
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {CatalogApplicationValidator.GetCollectionsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CatalogApplicationModel.GetCollectionListingResponseSchema>}
   *   - Success response
   *
   * @name getCollections
   * @summary: List collections
   * @description: List of curated product collections with filtering options based on tags and collection names. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getCollections/).
   */
  async getCollections(
    { pageNo, pageSize, tag, q, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogApplicationValidator.getCollections().validate(
      { pageNo, pageSize, tag, q },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogApplicationValidator.getCollections().validate(
      { pageNo, pageSize, tag, q },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Catalog > getCollections \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["tag"] = tag;
    query_params["q"] = q;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getCollections"],
        params: {},
      }),
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogApplicationModel.GetCollectionListingResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Catalog > getCollections \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @param {string[]} [arg.tag] - List of tags to filter collections.
   * @param {string} [arg.q] - Name of the collection to filter collection.
   * @returns {Paginator<CatalogApplicationModel.GetCollectionListingResponseSchema>}
   * @summary: List collections
   * @description: List of curated product collections with filtering options based on tags and collection names.
   */
  getCollectionsPaginator({ pageSize, tag, q } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getCollections({
        pageNo: pageNo,
        pageSize: pageSize,
        tag: tag,
        q: q,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {CatalogApplicationValidator.GetComparedFrequentlyProductBySlugParam} arg
   *   - Arg object.
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CatalogApplicationModel.ProductFrequentlyComparedSimilarResponseSchema>}
   *   - Success response
   *
   * @name getComparedFrequentlyProductBySlug
   * @summary: List frequent products
   * @description: Get products that are often compared to the product specified by its slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getComparedFrequentlyProductBySlug/).
   */
  async getComparedFrequentlyProductBySlug(
    { slug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogApplicationValidator.getComparedFrequentlyProductBySlug().validate(
      { slug },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogApplicationValidator.getComparedFrequentlyProductBySlug().validate(
      { slug },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Catalog > getComparedFrequentlyProductBySlug \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getComparedFrequentlyProductBySlug"],
        params: { slug },
      }),
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogApplicationModel.ProductFrequentlyComparedSimilarResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Catalog > getComparedFrequentlyProductBySlug \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogApplicationValidator.GetDepartmentsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CatalogApplicationModel.DepartmentResponseSchema>} -
   *   Success response
   * @name getDepartments
   * @summary: List departments
   * @description: List all departments associated with available products. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getDepartments/).
   */
  async getDepartments(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogApplicationValidator.getDepartments().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogApplicationValidator.getDepartments().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Catalog > getDepartments \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getDepartments"],
        params: {},
      }),
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogApplicationModel.DepartmentResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Catalog > getDepartments \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogApplicationValidator.GetFollowIdsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CatalogApplicationModel.FollowIdsResponseSchema>} -
   *   Success response
   * @name getFollowIds
   * @summary: List Ids of followed item, brand, product
   * @description: Get the IDs of all items the user is currently following, such as Products, Brands, and Collections. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getFollowIds/).
   */
  async getFollowIds(
    { collectionType, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogApplicationValidator.getFollowIds().validate(
      { collectionType },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogApplicationValidator.getFollowIds().validate(
      { collectionType },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Catalog > getFollowIds \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["collection_type"] = collectionType;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getFollowIds"],
        params: {},
      }),
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogApplicationModel.FollowIdsResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Catalog > getFollowIds \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogApplicationValidator.GetFollowedListingParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CatalogApplicationModel.GetFollowListingResponseSchema>}
   *   - Success response
   *
   * @name getFollowedListing
   * @summary: List followed products, brands
   * @description: Get a list of products or brands the user is following. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getFollowedListing/).
   */
  async getFollowedListing(
    { collectionType, pageId, pageSize, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogApplicationValidator.getFollowedListing().validate(
      { collectionType, pageId, pageSize },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogApplicationValidator.getFollowedListing().validate(
      { collectionType, pageId, pageSize },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Catalog > getFollowedListing \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_id"] = pageId;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getFollowedListing"],
        params: { collectionType },
      }),
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogApplicationModel.GetFollowListingResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Catalog > getFollowedListing \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.collectionType - Type of collection followed, i.e.
   *   products, brands, or collections.
   * @param {number} [arg.pageSize] - Page ID to retrieve next set of results.
   * @returns {Paginator<CatalogApplicationModel.GetFollowListingResponseSchema>}
   * @summary: List followed products, brands
   * @description: Get a list of products or brands the user is following.
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
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {CatalogApplicationValidator.GetFollowerCountByIdParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CatalogApplicationModel.FollowerCountResponseSchema>}
   *   - Success response
   *
   * @name getFollowerCountById
   * @summary: Get follower count
   * @description: Get the total number of followers for a specific item by its ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getFollowerCountById/).
   */
  async getFollowerCountById(
    { collectionType, collectionId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogApplicationValidator.getFollowerCountById().validate(
      { collectionType, collectionId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogApplicationValidator.getFollowerCountById().validate(
      { collectionType, collectionId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Catalog > getFollowerCountById \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getFollowerCountById"],
        params: { collectionType, collectionId },
      }),
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogApplicationModel.FollowerCountResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Catalog > getFollowerCountById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogApplicationValidator.GetHomeProductsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CatalogApplicationModel.HomeListingResponseSchema>} -
   *   Success response
   * @name getHomeProducts
   * @summary: List homepage-featured products
   * @description: List all the products associated with a brand, collection or category in a random order. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getHomeProducts/).
   */
  async getHomeProducts(
    { sortOn, pageId, pageSize, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogApplicationValidator.getHomeProducts().validate(
      { sortOn, pageId, pageSize },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogApplicationValidator.getHomeProducts().validate(
      { sortOn, pageId, pageSize },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Catalog > getHomeProducts \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["sort_on"] = sortOn;
    query_params["page_id"] = pageId;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getHomeProducts"],
        params: {},
      }),
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogApplicationModel.HomeListingResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Catalog > getHomeProducts \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.sortOn] - The order in which the list of products
   *   should be sorted, e.g. popularity, price, latest and discount, in
   *   either ascending or descending order.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @returns {Paginator<CatalogApplicationModel.HomeListingResponseSchema>}
   * @summary: List homepage-featured products
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
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {CatalogApplicationValidator.GetInStockLocationsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CatalogApplicationModel.ApplicationStoreListing>} -
   *   Success response
   * @name getInStockLocations
   * @summary: List stores with inventory
   * @description: List stores where specified products are currently in stock. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getInStockLocations/).
   */
  async getInStockLocations(
    {
      pageNo,
      pageSize,
      q,
      city,
      range,
      latitude,
      longitude,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogApplicationValidator.getInStockLocations().validate(
      { pageNo, pageSize, q, city, range, latitude, longitude },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogApplicationValidator.getInStockLocations().validate(
      { pageNo, pageSize, q, city, range, latitude, longitude },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Catalog > getInStockLocations \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["q"] = q;
    query_params["city"] = city;
    query_params["range"] = range;
    query_params["latitude"] = latitude;
    query_params["longitude"] = longitude;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getInStockLocations"],
        params: {},
      }),
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogApplicationModel.ApplicationStoreListing().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Catalog > getInStockLocations \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
   * @param {string} [arg.q] - Search a store by its name or store_code.
   * @param {string} [arg.city] - Search stores by the city in which they are situated.
   * @param {number} [arg.range] - Use this to retrieve stores within a
   *   particular range in meters, e.g. 10000, to indicate a 10km range.
   * @param {number} [arg.latitude] - Latitude of the location from where one
   *   wants to retrieve the nearest stores, e.g. 72.8691788.
   * @param {number} [arg.longitude] - Longitude of the location from where
   *   one wants to retrieve the nearest stores, e.g. 19.1174114.
   * @returns {Paginator<CatalogApplicationModel.ApplicationStoreListing>}
   * @summary: List stores with inventory
   * @description: List stores where specified products are currently in stock.
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
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {CatalogApplicationValidator.GetLocationDetailsByIdParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CatalogApplicationModel.StoreDetails>} - Success response
   * @name getLocationDetailsById
   * @summary: Get selling location
   * @description: Get details about a store based on its location Id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getLocationDetailsById/).
   */
  async getLocationDetailsById(
    { locationId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogApplicationValidator.getLocationDetailsById().validate(
      { locationId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogApplicationValidator.getLocationDetailsById().validate(
      { locationId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Catalog > getLocationDetailsById \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getLocationDetailsById"],
        params: { locationId },
      }),
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogApplicationModel.StoreDetails().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Catalog > getLocationDetailsById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogApplicationValidator.GetProductBundlesBySlugParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CatalogApplicationModel.ProductBundle>} - Success response
   * @name getProductBundlesBySlug
   * @summary: List product bundles
   * @description: Get products bundles to the one specified by its slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getProductBundlesBySlug/).
   */
  async getProductBundlesBySlug(
    { slug, id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogApplicationValidator.getProductBundlesBySlug().validate(
      { slug, id },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogApplicationValidator.getProductBundlesBySlug().validate(
      { slug, id },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Catalog > getProductBundlesBySlug \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["slug"] = slug;
    query_params["id"] = id;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getProductBundlesBySlug"],
        params: {},
      }),
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogApplicationModel.ProductBundle().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Catalog > getProductBundlesBySlug \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogApplicationValidator.GetProductComparisonBySlugsParam} arg
   *   - Arg object.
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CatalogApplicationModel.ProductsComparisonResponseSchema>}
   *   - Success response
   *
   * @name getProductComparisonBySlugs
   * @summary: List products for comparison
   * @description: Get all the products that have the same category. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getProductComparisonBySlugs/).
   */
  async getProductComparisonBySlugs(
    { slug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogApplicationValidator.getProductComparisonBySlugs().validate(
      { slug },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogApplicationValidator.getProductComparisonBySlugs().validate(
      { slug },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Catalog > getProductComparisonBySlugs \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["slug"] = slug;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getProductComparisonBySlugs"],
        params: {},
      }),
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogApplicationModel.ProductsComparisonResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Catalog > getProductComparisonBySlugs \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogApplicationValidator.GetProductDetailBySlugParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CatalogApplicationModel.ProductDetail>} - Success response
   * @name getProductDetailBySlug
   * @summary: Get a product
   * @description: Get product details such as price, attributes, HSN code, SKU code, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getProductDetailBySlug/).
   */
  async getProductDetailBySlug(
    { slug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogApplicationValidator.getProductDetailBySlug().validate(
      { slug },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogApplicationValidator.getProductDetailBySlug().validate(
      { slug },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Catalog > getProductDetailBySlug \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getProductDetailBySlug"],
        params: { slug },
      }),
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogApplicationModel.ProductDetail().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Catalog > getProductDetailBySlug \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogApplicationValidator.GetProductPriceBySlugParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CatalogApplicationModel.ProductSizePriceResponseV3>} -
   *   Success response
   * @name getProductPriceBySlug
   * @summary: Get product price
   * @description: Get the price of a product size at all the selling locations near to a PIN Code. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getProductPriceBySlug/).
   */
  async getProductPriceBySlug(
    { slug, size, storeId, moq, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogApplicationValidator.getProductPriceBySlug().validate(
      { slug, size, storeId, moq },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogApplicationValidator.getProductPriceBySlug().validate(
      { slug, size, storeId, moq },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Catalog > getProductPriceBySlug \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["store_id"] = storeId;
    query_params["moq"] = moq;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getProductPriceBySlug"],
        params: { slug, size },
      }),
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogApplicationModel.ProductSizePriceResponseV3().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Catalog > getProductPriceBySlug \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogApplicationValidator.GetProductSellersBySlugParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CatalogApplicationModel.ProductSizeSellersResponseV3>}
   *   - Success response
   *
   * @name getProductSellersBySlug
   * @summary: List sellers
   * @description: List all sellers offering a specific product identified by its slug and size. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getProductSellersBySlug/).
   */
  async getProductSellersBySlug(
    { slug, size, strategy, pageNo, pageSize, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogApplicationValidator.getProductSellersBySlug().validate(
      { slug, size, strategy, pageNo, pageSize },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogApplicationValidator.getProductSellersBySlug().validate(
      { slug, size, strategy, pageNo, pageSize },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Catalog > getProductSellersBySlug \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["strategy"] = strategy;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getProductSellersBySlug"],
        params: { slug, size },
      }),
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogApplicationModel.ProductSizeSellersResponseV3().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Catalog > getProductSellersBySlug \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a product. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/products/.
   * @param {string} arg.size - A string indicating the size of the product,
   *   e.g. S, M, XL. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/products/sizes.
   * @param {string} [arg.strategy] - Sort stores on the basis of strategy.
   *   eg, fast-delivery, low-price, optimal.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @returns {Paginator<CatalogApplicationModel.ProductSizeSellersResponseV3>}
   * @summary: List sellers
   * @description: List all sellers offering a specific product identified by its slug and size.
   */
  getProductSellersBySlugPaginator({ slug, size, strategy, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getProductSellersBySlug({
        slug: slug,
        size: size,
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
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {CatalogApplicationValidator.GetProductSizesBySlugParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CatalogApplicationModel.ProductSizes>} - Success response
   * @name getProductSizesBySlug
   * @summary: List sizes
   * @description: Provides detailed information about a product, including its availability (sellable), available sizes with quantities, dimensions, weight, availability status, price details (marked, effective, selling), minimum order quantity (MOQ). - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getProductSizesBySlug/).
   */
  async getProductSizesBySlug(
    { slug, storeId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogApplicationValidator.getProductSizesBySlug().validate(
      { slug, storeId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogApplicationValidator.getProductSizesBySlug().validate(
      { slug, storeId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Catalog > getProductSizesBySlug \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["store_id"] = storeId;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getProductSizesBySlug"],
        params: { slug },
      }),
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogApplicationModel.ProductSizes().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Catalog > getProductSizesBySlug \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogApplicationValidator.GetProductStockByIdsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CatalogApplicationModel.ProductStockStatusResponseSchema>}
   *   - Success response
   *
   * @name getProductStockByIds
   * @summary: Get product stocks
   * @description: Get the current stock status for products identified by their IDs, such as SKU, ALU, EAN, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getProductStockByIds/).
   */
  async getProductStockByIds(
    { itemId, alu, skuCode, ean, upc, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogApplicationValidator.getProductStockByIds().validate(
      { itemId, alu, skuCode, ean, upc },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogApplicationValidator.getProductStockByIds().validate(
      { itemId, alu, skuCode, ean, upc },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Catalog > getProductStockByIds \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["item_id"] = itemId;
    query_params["alu"] = alu;
    query_params["sku_code"] = skuCode;
    query_params["ean"] = ean;
    query_params["upc"] = upc;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getProductStockByIds"],
        params: {},
      }),
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogApplicationModel.ProductStockStatusResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Catalog > getProductStockByIds \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogApplicationValidator.GetProductStockForTimeByIdsParam} arg
   *   - Arg object.
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CatalogApplicationModel.ProductStockPolling>} - Success response
   * @name getProductStockForTimeByIds
   * @summary: List future stock
   * @description: Get the available stock levels for all products associated with a particular sales channel at a specified future time. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getProductStockForTimeByIds/).
   */
  async getProductStockForTimeByIds(
    { timestamp, pageSize, pageId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogApplicationValidator.getProductStockForTimeByIds().validate(
      { timestamp, pageSize, pageId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogApplicationValidator.getProductStockForTimeByIds().validate(
      { timestamp, pageSize, pageId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Catalog > getProductStockForTimeByIds \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["timestamp"] = timestamp;
    query_params["page_size"] = pageSize;
    query_params["page_id"] = pageId;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getProductStockForTimeByIds"],
        params: {},
      }),
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogApplicationModel.ProductStockPolling().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Catalog > getProductStockForTimeByIds \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.timestamp - Timestamp in UTC format (2020-07-23T10:27:50Z).
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @returns {Paginator<CatalogApplicationModel.ProductStockPolling>}
   * @summary: List future stock
   * @description: Get the available stock levels for all products associated with a particular sales channel at a specified future time.
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
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {CatalogApplicationValidator.GetProductVariantsBySlugParam} arg -
   *   Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CatalogApplicationModel.ProductVariantsResponseSchema>}
   *   - Success response
   *
   * @name getProductVariantsBySlug
   * @summary: List product variants
   * @description: Get all available variants of a specific product identified by its slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getProductVariantsBySlug/).
   */
  async getProductVariantsBySlug(
    { slug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogApplicationValidator.getProductVariantsBySlug().validate(
      { slug },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogApplicationValidator.getProductVariantsBySlug().validate(
      { slug },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Catalog > getProductVariantsBySlug \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getProductVariantsBySlug"],
        params: { slug },
      }),
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogApplicationModel.ProductVariantsResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Catalog > getProductVariantsBySlug \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogApplicationValidator.GetProductsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CatalogApplicationModel.ProductListingResponseSchema>}
   *   - Success response
   *
   * @name getProducts
   * @summary: List products
   * @description: List all products available in the catalog. It supports filtering based on product name, brand, department, category, collection, and more, while also offering sorting options based on factors like price, ratings, discounts, and other relevant criteria. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getProducts/).
   */
  async getProducts(
    {
      q,
      f,
      filters,
      sortOn,
      pageId,
      pageSize,
      pageNo,
      pageType,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogApplicationValidator.getProducts().validate(
      { q, f, filters, sortOn, pageId, pageSize, pageNo, pageType },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogApplicationValidator.getProducts().validate(
      { q, f, filters, sortOn, pageId, pageSize, pageNo, pageType },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Catalog > getProducts \n ${warrning}`,
      });
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

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getProducts"],
        params: {},
      }),
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogApplicationModel.ProductListingResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Catalog > getProducts \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.q] - The search query for entering partial or full
   *   name of product, brand, category, or collection.
   * @param {string} [arg.f] - The search filter parameters. Filter parameters
   *   will be passed in f parameter as shown in the example below. Double
   *   Pipe (||) denotes the OR condition, whereas Triple-colon (:::)
   *   indicates a new filter parameter applied as an AND condition.
   * @param {boolean} [arg.filters] - True for fetching all filter parameters
   *   and False for disabling the filter parameters.
   * @param {string} [arg.sortOn] - The order in which the list of products
   *   should be sorted, e.g. popularity, price, latest and discount, in
   *   either ascending or descending order. See the supported values below.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @returns {Paginator<CatalogApplicationModel.ProductListingResponseSchema>}
   * @summary: List products
   * @description: List all products available in the catalog. It supports filtering based on product name, brand, department, category, collection, and more, while also offering sorting options based on factors like price, ratings, discounts, and other relevant criteria.
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
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {CatalogApplicationValidator.GetSearchResultsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CatalogApplicationModel.AutoCompleteResponseSchema>} -
   *   Success response
   * @name getSearchResults
   * @summary: List product, brand, category
   * @description: Get products, brands, or categories based on a search query, which can be a partial or full name match. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getSearchResults/).
   */
  async getSearchResults(
    { q, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogApplicationValidator.getSearchResults().validate(
      { q },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogApplicationValidator.getSearchResults().validate(
      { q },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Catalog > getSearchResults \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["q"] = q;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getSearchResults"],
        params: {},
      }),
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogApplicationModel.AutoCompleteResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Catalog > getSearchResults \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogApplicationValidator.GetSimilarComparisonProductBySlugParam} arg
   *   - Arg object.
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CatalogApplicationModel.ProductCompareResponseSchema>}
   *   - Success response
   *
   * @name getSimilarComparisonProductBySlug
   * @summary: List similar products
   * @description: Get all products within the same category as the one specified by the provided slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getSimilarComparisonProductBySlug/).
   */
  async getSimilarComparisonProductBySlug(
    { slug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogApplicationValidator.getSimilarComparisonProductBySlug().validate(
      { slug },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogApplicationValidator.getSimilarComparisonProductBySlug().validate(
      { slug },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Catalog > getSimilarComparisonProductBySlug \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getSimilarComparisonProductBySlug"],
        params: { slug },
      }),
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogApplicationModel.ProductCompareResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Catalog > getSimilarComparisonProductBySlug \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogApplicationValidator.GetStoresParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CatalogApplicationModel.StoreListingResponseSchema>} -
   *   Success response
   * @name getStores
   * @summary: List available stores
   * @description: List all stores associated with the sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getStores/).
   */
  async getStores(
    {
      pageNo,
      pageSize,
      q,
      city,
      range,
      latitude,
      longitude,
      tags,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogApplicationValidator.getStores().validate(
      { pageNo, pageSize, q, city, range, latitude, longitude, tags },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogApplicationValidator.getStores().validate(
      { pageNo, pageSize, q, city, range, latitude, longitude, tags },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Catalog > getStores \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["q"] = q;
    query_params["city"] = city;
    query_params["range"] = range;
    query_params["latitude"] = latitude;
    query_params["longitude"] = longitude;
    query_params["tags"] = tags;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getStores"],
        params: {},
      }),
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogApplicationModel.StoreListingResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Catalog > getStores \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
   * @param {string} [arg.q] - Search a store by its name or store_code.
   * @param {string} [arg.city] - Search stores by the city in which they are situated.
   * @param {number} [arg.range] - Use this to retrieve stores within a
   *   particular range in meters, e.g. 10000, to indicate a 10km range.
   * @param {number} [arg.latitude] - Latitude of the location from where one
   *   wants to retrieve the nearest stores, e.g. 72.8691788.
   * @param {number} [arg.longitude] - Longitude of the location from where
   *   one wants to retrieve the nearest stores, e.g. 19.1174114.
   * @param {string} [arg.tags] - Search stores based on tags.
   * @returns {Paginator<CatalogApplicationModel.StoreListingResponseSchema>}
   * @summary: List available stores
   * @description: List all stores associated with the sales channel.
   */
  getStoresPaginator({
    pageSize,
    q,
    city,
    range,
    latitude,
    longitude,
    tags,
  } = {}) {
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
        tags: tags,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {CatalogApplicationValidator.UnfollowByIdParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CatalogApplicationModel.FollowPostResponseSchema>} -
   *   Success response
   * @name unfollowById
   * @summary: Delete item, brand, product
   * @description: Remove a followed item, brand, or product using its collection ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/unfollowById/).
   */
  async unfollowById(
    { collectionType, collectionId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogApplicationValidator.unfollowById().validate(
      { collectionType, collectionId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogApplicationValidator.unfollowById().validate(
      { collectionType, collectionId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Catalog > unfollowById \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "delete",
      constructUrl({
        url: this._urls["unfollowById"],
        params: { collectionType, collectionId },
      }),
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogApplicationModel.FollowPostResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Catalog > unfollowById \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = Catalog;
