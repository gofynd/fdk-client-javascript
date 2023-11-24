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
   * @returns {Promise<CatalogApplicationModel.FollowPostResponse>} - Success response
   * @name followById
   * @summary: Follow an entity (product/brand/collection)
   * @description: Follow a particular entity such as product, brand, collection specified by its ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/followById/).
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
    } = CatalogApplicationModel.FollowPostResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

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
   * @returns {Promise<CatalogApplicationModel.BrandDetailResponse>} - Success response
   * @name getBrandDetailBySlug
   * @summary: Get metadata of a brand
   * @description: Fetch metadata of a brand such as name, information, logo, banner, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getBrandDetailBySlug/).
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
    } = CatalogApplicationModel.BrandDetailResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

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
   * @returns {Promise<CatalogApplicationModel.BrandListingResponse>} - Success response
   * @name getBrands
   * @summary: Get all the brands
   * @description: A brand is the name under which a product is sold. Use this API to list all the brands. You can also filter the brands by department. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getBrands/).
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
    } = CatalogApplicationModel.BrandListingResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

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
   *   from the endpoint /service/application/catalog/v1.0/departments/
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @returns {Paginator<CatalogApplicationModel.BrandListingResponse>}
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
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {CatalogApplicationValidator.GetCategoriesParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CatalogApplicationModel.CategoryListingResponse>} -
   *   Success response
   * @name getCategories
   * @summary: List all the categories
   * @description: Use this API to list all the categories. You can also filter the categories by department. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getCategories/).
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
    } = CatalogApplicationModel.CategoryListingResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
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
   * @returns {Promise<CatalogApplicationModel.CategoryMetaResponse>} - Success response
   * @name getCategoryDetailBySlug
   * @summary: Get metadata of a category
   * @description: Fetch metadata of a category such as name, information, logo, banner, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getCategoryDetailBySlug/).
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
    } = CatalogApplicationModel.CategoryMetaResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

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
   * @returns {Promise<CatalogApplicationModel.CollectionDetailResponse>} -
   *   Success response
   * @name getCollectionDetailBySlug
   * @summary: Get a particular collection
   * @description: Get the details of a collection by its `slug`. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getCollectionDetailBySlug/).
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
    } = CatalogApplicationModel.CollectionDetailResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
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
   * @returns {Promise<CatalogApplicationModel.ProductListingResponse>} -
   *   Success response
   * @name getCollectionItemsBySlug
   * @summary: Get the items in a collection
   * @description: Get items in a collection specified by its `slug`. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getCollectionItemsBySlug/).
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
    } = CatalogApplicationModel.ProductListingResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
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
   *   indicates a new filter paramater applied as an AND condition.
   * @param {string} [arg.q] - The search query for entering partial or full
   *   name of product, brand, category, or collection.
   * @param {boolean} [arg.filters] - This is a boolean value, True for
   *   fetching all filter parameters and False for disabling the filter parameters.
   * @param {string} [arg.sortOn] - The order in which the list of products
   *   should be sorted, e.g. popularity, price, latest and discount, in
   *   either ascending or descending order. See the supported values below.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @returns {Paginator<CatalogApplicationModel.ProductListingResponse>}
   * @summary: Get the items in a collection
   * @description: Get items in a collection specified by its `slug`.
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
   * @returns {Promise<CatalogApplicationModel.GetCollectionListingResponse>}
   *   - Success response
   *
   * @name getCollections
   * @summary: List all the collections
   * @description: Collections are a great way to organize your products and can improve the ability for customers to find items quickly and efficiently. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getCollections/).
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
    } = CatalogApplicationModel.GetCollectionListingResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
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
   * @param {string[]} [arg.tag] - List of tags to filter collections
   * @param {string} [arg.q] - Name of the collection to filter collection
   * @returns {Paginator<CatalogApplicationModel.GetCollectionListingResponse>}
   * @summary: List all the collections
   * @description: Collections are a great way to organize your products and can improve the ability for customers to find items quickly and efficiently.
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
   * @returns {Promise<CatalogApplicationModel.ProductFrequentlyComparedSimilarResponse>}
   *   - Success response
   *
   * @name getComparedFrequentlyProductBySlug
   * @summary: Get comparison between frequently compared products with the given product
   * @description: Use this API to compare a given product automatically with products that are frequently compared with it. Only one slug is needed. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getComparedFrequentlyProductBySlug/).
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
    } = CatalogApplicationModel.ProductFrequentlyComparedSimilarResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
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
   * @returns {Promise<CatalogApplicationModel.DepartmentResponse>} - Success response
   * @name getDepartments
   * @summary: List all the departments
   * @description: Departments are a way to categorise similar products. A product can lie in multiple departments. For example, a skirt can below to the 'Women's Fashion' Department while a handbag can lie in 'Women's Accessories' Department. Use this API to list all the departments. If successful, returns the list of departments specified in `DepartmentResponse` - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getDepartments/).
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
    } = CatalogApplicationModel.DepartmentResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

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
   * @returns {Promise<CatalogApplicationModel.FollowIdsResponse>} - Success response
   * @name getFollowIds
   * @summary: Get the IDs of followed products, brands and collections.
   * @description: You can get the IDs of all the followed Products, Brands and Collections. Pass collection_type as query parameter to fetch specific Ids - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getFollowIds/).
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
    } = CatalogApplicationModel.FollowIdsResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

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
   * @returns {Promise<CatalogApplicationModel.GetFollowListingResponse>} -
   *   Success response
   * @name getFollowedListing
   * @summary: Get a list of followed Products, Brands, Collections
   * @description: Users can follow a product they like. This API retrieves the products the user have followed. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getFollowedListing/).
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
    } = CatalogApplicationModel.GetFollowListingResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
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
   * @returns {Paginator<CatalogApplicationModel.GetFollowListingResponse>}
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
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {CatalogApplicationValidator.GetFollowerCountByIdParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CatalogApplicationModel.FollowerCountResponse>} -
   *   Success response
   * @name getFollowerCountById
   * @summary: Get Follow Count
   * @description: Get the total count of followers for a given collection type and collection ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getFollowerCountById/).
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
    } = CatalogApplicationModel.FollowerCountResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

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
   * @returns {Promise<CatalogApplicationModel.HomeListingResponse>} - Success response
   * @name getHomeProducts
   * @summary: List the products
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
    } = CatalogApplicationModel.HomeListingResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

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
   * @returns {Paginator<CatalogApplicationModel.HomeListingResponse>}
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
   * @summary: Get store meta information.
   * @description: Use this API to get a list of stores in a specific application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getInStockLocations/).
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
      { abortEarly: false, allowUnknown: false }
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
   *   particular range in meters, e.g. 10000, to indicate a 10km range
   * @param {number} [arg.latitude] - Latitude of the location from where one
   *   wants to retreive the nearest stores, e.g. 72.8691788
   * @param {number} [arg.longitude] - Longitude of the location from where
   *   one wants to retreive the nearest stores, e.g. 19.1174114
   * @returns {Paginator<CatalogApplicationModel.ApplicationStoreListing>}
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
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {CatalogApplicationValidator.GetLocationDetailsByIdParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CatalogApplicationModel.StoreDetails>} - Success response
   * @name getLocationDetailsById
   * @summary: Get store meta information.
   * @description: Use this API to get meta details for a store. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getLocationDetailsById/).
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
      allowUnknown: false,
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
   * @summary: Get product bundles
   * @description: Use this API to retrieve products bundles to the one specified by its slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getProductBundlesBySlug/).
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
      allowUnknown: false,
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
   * @returns {Promise<CatalogApplicationModel.ProductsComparisonResponse>} -
   *   Success response
   * @name getProductComparisonBySlugs
   * @summary: Compare products
   * @description: Use this API to compare the features of products belonging to the same category. Note that at least one slug is mandatory in the request query. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getProductComparisonBySlugs/).
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
    } = CatalogApplicationModel.ProductsComparisonResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
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
   * @description: Use this API to retrieve a product by its slug value. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getProductDetailBySlug/).
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
      allowUnknown: false,
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
   * @summary: Get the price of a product size at a PIN Code
   * @description: Prices may vary for different sizes of a product. Use this API to retrieve the price of a product size at all the selling locations near to a PIN Code. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getProductPriceBySlug/).
   */
  async getProductPriceBySlug(
    { slug, size, storeId, pincode, moq, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogApplicationValidator.getProductPriceBySlug().validate(
      { slug, size, storeId, pincode, moq },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogApplicationValidator.getProductPriceBySlug().validate(
      { slug, size, storeId, pincode, moq },
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
    query_params["pincode"] = pincode;
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
      { abortEarly: false, allowUnknown: false }
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
   * @summary: Get the sellers of a product size at a PIN Code
   * @description: A product of a particular size may be sold by multiple sellers. Use this API to fetch the sellers having the stock of a particular size at a given PIN Code. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getProductSellersBySlug/).
   */
  async getProductSellersBySlug(
    { slug, size, pincode, strategy, pageNo, pageSize, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogApplicationValidator.getProductSellersBySlug().validate(
      { slug, size, pincode, strategy, pageNo, pageSize },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogApplicationValidator.getProductSellersBySlug().validate(
      { slug, size, pincode, strategy, pageNo, pageSize },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Catalog > getProductSellersBySlug \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["pincode"] = pincode;
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
      { abortEarly: false, allowUnknown: false }
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
   *   /service/application/catalog/v1.0/products/
   * @param {string} arg.size - A string indicating the size of the product,
   *   e.g. S, M, XL. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/products/sizes
   * @param {string} [arg.pincode] - The 6-digit PIN Code of the area near
   *   which the selling locations should be searched, e.g. 400059
   * @param {string} [arg.strategy] - Sort stores on the basis of strategy.
   *   eg, fast-delivery, low-price, optimal.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @returns {Paginator<CatalogApplicationModel.ProductSizeSellersResponseV3>}
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
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {CatalogApplicationValidator.GetProductSizesBySlugParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CatalogApplicationModel.ProductSizes>} - Success response
   * @name getProductSizesBySlug
   * @summary: Get the sizes of a product
   * @description: A product can have multiple sizes. Use this API to fetch all the available sizes of a product. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getProductSizesBySlug/).
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
      allowUnknown: false,
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
   * @returns {Promise<CatalogApplicationModel.ProductStockStatusResponse>} -
   *   Success response
   * @name getProductStockByIds
   * @summary: Get the stock of a product
   * @description: Retrieve the available stock of the products. Use this API to retrieve stock of multiple products (up to 50) at a time. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getProductStockByIds/).
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
    } = CatalogApplicationModel.ProductStockStatusResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
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
   * @summary: Get the stock of a product
   * @description: Retrieve the available stock of the products. Use this API to get the stock status of products whose inventory is updated at the specified time - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getProductStockForTimeByIds/).
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
      allowUnknown: false,
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
   * @param {string} arg.timestamp - Timestamp in UTC format (2020-07-23T10:27:50Z)
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @returns {Paginator<CatalogApplicationModel.ProductStockPolling>}
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
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {CatalogApplicationValidator.GetProductVariantsBySlugParam} arg -
   *   Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CatalogApplicationModel.ProductVariantsResponse>} -
   *   Success response
   * @name getProductVariantsBySlug
   * @summary: Get variant of a particular product
   * @description: A product can have a different type of variants such as colour, shade, memory. Use this API to fetch all the available variants of a product using its slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getProductVariantsBySlug/).
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
    } = CatalogApplicationModel.ProductVariantsResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
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
   * @returns {Promise<CatalogApplicationModel.ProductListingResponse>} -
   *   Success response
   * @name getProducts
   * @summary: Get all the products
   * @description: Use this API to list all the products. You may choose a sort order or make arbitrary search queries by entering the product name, brand, category or collection. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getProducts/).
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
    } = CatalogApplicationModel.ProductListingResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
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
   *   indicates a new filter paramater applied as an AND condition.
   * @param {boolean} [arg.filters] - This is a boolean value, True for
   *   fetching all filter parameters and False for disabling the filter parameters.
   * @param {string} [arg.sortOn] - The order in which the list of products
   *   should be sorted, e.g. popularity, price, latest and discount, in
   *   either ascending or descending order. See the supported values below.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @returns {Paginator<CatalogApplicationModel.ProductListingResponse>}
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
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {CatalogApplicationValidator.GetSearchResultsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CatalogApplicationModel.AutoCompleteResponse>} - Success response
   * @name getSearchResults
   * @summary: Get relevant suggestions for a search query
   * @description: Retrieves a list of suggestions for a given search query. Each suggestion is a valid search term that's generated on the basis of query. This is particularly useful to enhance the user experience while using the search tool. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getSearchResults/).
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
    } = CatalogApplicationModel.AutoCompleteResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

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
   * @returns {Promise<CatalogApplicationModel.ProductCompareResponse>} -
   *   Success response
   * @name getSimilarComparisonProductBySlug
   * @summary: Get comparison between similar products
   * @description: Use this API to compare a given product automatically with similar products. Only one slug is needed. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getSimilarComparisonProductBySlug/).
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
    } = CatalogApplicationModel.ProductCompareResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
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
   * @returns {Promise<CatalogApplicationModel.StoreListingResponse>} - Success response
   * @name getStores
   * @summary: Get store meta information.
   * @description: Use this API to get a list of stores in a specific application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getStores/).
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
    } = CatalogApplicationModel.StoreListingResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

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
   *   particular range in meters, e.g. 10000, to indicate a 10km range
   * @param {number} [arg.latitude] - Latitude of the location from where one
   *   wants to retreive the nearest stores, e.g. 72.8691788
   * @param {number} [arg.longitude] - Longitude of the location from where
   *   one wants to retreive the nearest stores, e.g. 19.1174114
   * @param {string} [arg.tags] - Search stores based on tags.
   * @returns {Paginator<CatalogApplicationModel.StoreListingResponse>}
   * @summary: Get store meta information.
   * @description: Use this API to get a list of stores in a specific application.
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
   * @returns {Promise<CatalogApplicationModel.FollowPostResponse>} - Success response
   * @name unfollowById
   * @summary: Unfollow an entity (product/brand/collection)
   * @description: You can undo a followed product, brand or collection by its ID. This action is referred as _unfollow_. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/unfollowById/).
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
    } = CatalogApplicationModel.FollowPostResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

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
