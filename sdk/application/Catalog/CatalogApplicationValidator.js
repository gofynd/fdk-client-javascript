const Joi = require("joi");

const CatalogApplicationModel = require("./CatalogApplicationModel");

/**
 * @typedef FollowByIdParam
 * @property {string} collectionType - Type of collection followed, i.e.
 *   products, brands, or collections.
 * @property {string} collectionId - The ID of the collection type.
 */

/**
 * @typedef GetBrandDetailBySlugParam
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   a brand. You can get slug value from the endpoint
 *   /service/application/catalog/v1.0/brands/.
 */

/**
 * @typedef GetBrandsParam
 * @property {string} [department] - The name of the department. Use this
 *   parameter to filter products by a particular department. See the list of
 *   available departments below. Also, you can get available departments from
 *   the endpoint /service/application/catalog/v1.0/departments/
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 */

/**
 * @typedef GetCategoriesParam
 * @property {string} [department] - The name of the department. Use this
 *   parameter to filter products by a particular department. See the list of
 *   available departments below. Also, you can get available departments from
 *   the endpoint /service/application/catalog/v1.0/departments/
 */

/**
 * @typedef GetCategoryDetailBySlugParam
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   a brand. You can get slug value from the endpoint
 *   /service/application/catalog/v1.0/brands/.
 */

/**
 * @typedef GetCollectionDetailBySlugParam
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   a collection. You can get slug value from the endpoint
 *   /service/application/catalog/v1.0/collections/.
 */

/**
 * @typedef GetCollectionItemsBySlugParam
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   a collection. You can get slug value from the endpoint
 *   /service/application/catalog/v1.0/collections/.
 * @property {string} [f] - The search filter parameters. Filter parameters will
 *   be passed in f parameter as shown in the example below. Double Pipe (||)
 *   denotes the OR condition, whereas Triple-colon (:::) indicates a new filter
 *   paramater applied as an AND condition.
 * @property {string} [q] - The search query for entering partial or full name
 *   of product, brand, category, or collection.
 * @property {boolean} [filters] - This is a boolean value, True for fetching
 *   all filter parameters and False for disabling the filter parameters.
 * @property {string} [sortOn] - The order in which the list of products should
 *   be sorted, e.g. popularity, price, latest and discount, in either ascending
 *   or descending order. See the supported values below.
 * @property {string} [pageId] - Page ID to retrieve next set of results.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 * @property {number} [pageNo] - Page Number to retrieve next set of results.
 * @property {string} [pageType] - Page Type to retrieve set of results can be
 *   cursor or number.
 */

/**
 * @typedef GetCollectionsParam
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 * @property {string[]} [tag] - List of tags to filter collections
 * @property {string} [q] - Name of the collection to filter collection
 */

/**
 * @typedef GetComparedFrequentlyProductBySlugParam
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   a product. You can get slug value from the endpoint
 *   /service/application/catalog/v1.0/products/
 */

/** @typedef GetDepartmentsParam */

/**
 * @typedef GetFollowIdsParam
 * @property {string} [collectionType] - Type of collection, i.e. products,
 *   brands, collections.
 */

/**
 * @typedef GetFollowedListingParam
 * @property {string} collectionType - Type of collection followed, i.e.
 *   products, brands, or collections.
 * @property {string} [pageId] - Page ID to retrieve next set of results.
 * @property {number} [pageSize] - Page ID to retrieve next set of results.
 */

/**
 * @typedef GetFollowerCountByIdParam
 * @property {string} collectionType - Type of collection, i.e. products,
 *   brands, or collections.
 * @property {string} collectionId - The ID of the collection type.
 */

/**
 * @typedef GetHomeProductsParam
 * @property {string} [sortOn] - The order in which the list of products should
 *   be sorted, e.g. popularity, price, latest and discount, in either ascending
 *   or descending order.
 * @property {string} [pageId] - Page ID to retrieve next set of results.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 */

/**
 * @typedef GetInStockLocationsParam
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results.
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 * @property {string} [q] - Search a store by its name or store_code.
 * @property {string} [city] - Search stores by the city in which they are situated.
 * @property {number} [range] - Use this to retrieve stores within a particular
 *   range in meters, e.g. 10000, to indicate a 10km range
 * @property {number} [latitude] - Latitude of the location from where one wants
 *   to retreive the nearest stores, e.g. 72.8691788
 * @property {number} [longitude] - Longitude of the location from where one
 *   wants to retreive the nearest stores, e.g. 19.1174114
 */

/**
 * @typedef GetLocationDetailsByIdParam
 * @property {number} locationId - Unique Location ID.
 */

/**
 * @typedef GetProductBundlesBySlugParam
 * @property {string} [slug] - Product slug for which bundles need to be fetched.
 * @property {string} [id] - Product uid
 */

/**
 * @typedef GetProductComparisonBySlugsParam
 * @property {string[]} slug - A short, human-readable, URL-friendly identifier
 *   of a product. You can get slug value from the endpoint
 *   /service/application/catalog/v1.0/products/.
 */

/**
 * @typedef GetProductDetailBySlugParam
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   a product. You can get slug value from the endpoint
 *   /service/application/catalog/v1.0/products/
 */

/**
 * @typedef GetProductPriceBySlugParam
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   a product. You can get slug value from the endpoint
 *   /service/application/catalog/v1.0/products/
 * @property {string} size - A string indicating the size of the product, e.g.
 *   S, M, XL. You can get slug value from the endpoint
 *   /service/application/catalog/v1.0/products/sizes
 * @property {number} [storeId] - The ID of the store that is selling the
 *   product, e.g. 1,2,3.
 * @property {string} [pincode] - The PIN Code of the area near which the
 *   selling locations should be searched, e.g. 400059.
 * @property {number} [moq] - An Integer indication the Minimum Order Quantity
 *   of a product, e.g. 100.
 */

/**
 * @typedef GetProductSellersBySlugParam
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   a product. You can get slug value from the endpoint
 *   /service/application/catalog/v1.0/products/
 * @property {string} size - A string indicating the size of the product, e.g.
 *   S, M, XL. You can get slug value from the endpoint
 *   /service/application/catalog/v1.0/products/sizes
 * @property {string} [pincode] - The 6-digit PIN Code of the area near which
 *   the selling locations should be searched, e.g. 400059
 * @property {string} [strategy] - Sort stores on the basis of strategy. eg,
 *   fast-delivery, low-price, optimal.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 */

/**
 * @typedef GetProductSizesBySlugParam
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   a product. You can get slug value from the endpoint
 *   /service/application/catalog/v1.0/products/
 * @property {number} [storeId] - The ID of the store that is selling the
 *   product, e.g. 1,2,3.
 */

/**
 * @typedef GetProductStockByIdsParam
 * @property {string} [itemId] - The Item ID of the product (Max. 50 allowed)
 * @property {string} [alu] - ALU of the product (limited upto 50 ALU identifier
 *   in a single request)
 * @property {string} [skuCode] - Stock-keeping Unit of the product (limited
 *   upto 50 SKU Code in a single request)
 * @property {string} [ean] - European Article Number of the product (limited
 *   upto 50 EAN identifier in a single request)
 * @property {string} [upc] - Universal Product Code of the product (limited
 *   upto 50 UPC identifier in a single request)
 */

/**
 * @typedef GetProductStockForTimeByIdsParam
 * @property {string} timestamp - Timestamp in UTC format (2020-07-23T10:27:50Z)
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 * @property {string} [pageId] - Page ID to retrieve next set of results.
 */

/**
 * @typedef GetProductVariantsBySlugParam
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   a product. You can get slug value from the endpoint
 *   /service/application/catalog/v1.0/products/
 */

/**
 * @typedef GetProductsParam
 * @property {string} [q] - The search query for entering partial or full name
 *   of product, brand, category, or collection.
 * @property {string} [f] - The search filter parameters. Filter parameters will
 *   be passed in f parameter as shown in the example below. Double Pipe (||)
 *   denotes the OR condition, whereas Triple-colon (:::) indicates a new filter
 *   paramater applied as an AND condition.
 * @property {boolean} [filters] - This is a boolean value, True for fetching
 *   all filter parameters and False for disabling the filter parameters.
 * @property {string} [sortOn] - The order in which the list of products should
 *   be sorted, e.g. popularity, price, latest and discount, in either ascending
 *   or descending order. See the supported values below.
 * @property {string} [pageId] - Page ID to retrieve next set of results.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results.
 * @property {string} [pageType] - Available pagination types are cursor or number.
 */

/**
 * @typedef GetSearchResultsParam
 * @property {string} q - The search query for entering partial or full name of
 *   a product, brand or category. For example, if the given search query `q` is
 *   _ski_, the relevant search suggestions could be _skirt_, _ski shoes_,
 *   __skin cream_ etc.
 */

/**
 * @typedef GetSimilarComparisonProductBySlugParam
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   a product. You can get slug value from the endpoint
 *   /service/application/catalog/v1.0/products/
 */

/**
 * @typedef GetStoresParam
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results.
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 * @property {string} [q] - Search a store by its name or store_code.
 * @property {string} [city] - Search stores by the city in which they are situated.
 * @property {number} [range] - Use this to retrieve stores within a particular
 *   range in meters, e.g. 10000, to indicate a 10km range
 * @property {number} [latitude] - Latitude of the location from where one wants
 *   to retreive the nearest stores, e.g. 72.8691788
 * @property {number} [longitude] - Longitude of the location from where one
 *   wants to retreive the nearest stores, e.g. 19.1174114
 * @property {string} [tags] - Search stores based on tags.
 */

/**
 * @typedef UnfollowByIdParam
 * @property {string} collectionType - Type of collection followed, i.e.
 *   products, brands, or collections.
 * @property {string} collectionId - The ID of the collection type.
 */

class CatalogApplicationValidator {
  /** @returns {FollowByIdParam} */
  static followById() {
    return Joi.object({
      collectionType: Joi.string().allow("").required(),
      collectionId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetBrandDetailBySlugParam} */
  static getBrandDetailBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetBrandsParam} */
  static getBrands() {
    return Joi.object({
      department: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    });
  }

  /** @returns {GetCategoriesParam} */
  static getCategories() {
    return Joi.object({
      department: Joi.string().allow(""),
    });
  }

  /** @returns {GetCategoryDetailBySlugParam} */
  static getCategoryDetailBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetCollectionDetailBySlugParam} */
  static getCollectionDetailBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetCollectionItemsBySlugParam} */
  static getCollectionItemsBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      f: Joi.string().allow(""),
      q: Joi.string().allow(""),
      filters: Joi.boolean(),
      sortOn: Joi.string().allow(""),
      pageId: Joi.string().allow(""),
      pageSize: Joi.number(),
      pageNo: Joi.number(),
      pageType: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetCollectionsParam} */
  static getCollections() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      tag: Joi.array().items(Joi.string().allow("")),
      q: Joi.string().allow(""),
    });
  }

  /** @returns {GetComparedFrequentlyProductBySlugParam} */
  static getComparedFrequentlyProductBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetDepartmentsParam} */
  static getDepartments() {
    return Joi.object({});
  }

  /** @returns {GetFollowIdsParam} */
  static getFollowIds() {
    return Joi.object({
      collectionType: Joi.string().allow(""),
    });
  }

  /** @returns {GetFollowedListingParam} */
  static getFollowedListing() {
    return Joi.object({
      collectionType: Joi.string().allow("").required(),
      pageId: Joi.string().allow(""),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {GetFollowerCountByIdParam} */
  static getFollowerCountById() {
    return Joi.object({
      collectionType: Joi.string().allow("").required(),
      collectionId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetHomeProductsParam} */
  static getHomeProducts() {
    return Joi.object({
      sortOn: Joi.string().allow(""),
      pageId: Joi.string().allow(""),
      pageSize: Joi.number(),
    });
  }

  /** @returns {GetInStockLocationsParam} */
  static getInStockLocations() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
      city: Joi.string().allow(""),
      range: Joi.number(),
      latitude: Joi.number(),
      longitude: Joi.number(),
    });
  }

  /** @returns {GetLocationDetailsByIdParam} */
  static getLocationDetailsById() {
    return Joi.object({
      locationId: Joi.number().required(),
    }).required();
  }

  /** @returns {GetProductBundlesBySlugParam} */
  static getProductBundlesBySlug() {
    return Joi.object({
      slug: Joi.string().allow(""),
      id: Joi.string().allow(""),
    });
  }

  /** @returns {GetProductComparisonBySlugsParam} */
  static getProductComparisonBySlugs() {
    return Joi.object({
      slug: Joi.array().items(Joi.string().allow("")).required(),
    }).required();
  }

  /** @returns {GetProductDetailBySlugParam} */
  static getProductDetailBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetProductPriceBySlugParam} */
  static getProductPriceBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      size: Joi.string().allow("").required(),
      storeId: Joi.number(),
      pincode: Joi.string().allow(""),
      moq: Joi.number(),
    }).required();
  }

  /** @returns {GetProductSellersBySlugParam} */
  static getProductSellersBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      size: Joi.string().allow("").required(),
      pincode: Joi.string().allow(""),
      strategy: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {GetProductSizesBySlugParam} */
  static getProductSizesBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      storeId: Joi.number(),
    }).required();
  }

  /** @returns {GetProductStockByIdsParam} */
  static getProductStockByIds() {
    return Joi.object({
      itemId: Joi.string().allow(""),
      alu: Joi.string().allow(""),
      skuCode: Joi.string().allow(""),
      ean: Joi.string().allow(""),
      upc: Joi.string().allow(""),
    });
  }

  /** @returns {GetProductStockForTimeByIdsParam} */
  static getProductStockForTimeByIds() {
    return Joi.object({
      timestamp: Joi.string().allow("").required(),
      pageSize: Joi.number(),
      pageId: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetProductVariantsBySlugParam} */
  static getProductVariantsBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetProductsParam} */
  static getProducts() {
    return Joi.object({
      q: Joi.string().allow(""),
      f: Joi.string().allow(""),
      filters: Joi.boolean(),
      sortOn: Joi.string().allow(""),
      pageId: Joi.string().allow(""),
      pageSize: Joi.number(),
      pageNo: Joi.number(),
      pageType: Joi.string().allow(""),
    });
  }

  /** @returns {GetSearchResultsParam} */
  static getSearchResults() {
    return Joi.object({
      q: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetSimilarComparisonProductBySlugParam} */
  static getSimilarComparisonProductBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetStoresParam} */
  static getStores() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
      city: Joi.string().allow(""),
      range: Joi.number(),
      latitude: Joi.number(),
      longitude: Joi.number(),
      tags: Joi.string().allow(""),
    });
  }

  /** @returns {UnfollowByIdParam} */
  static unfollowById() {
    return Joi.object({
      collectionType: Joi.string().allow("").required(),
      collectionId: Joi.string().allow("").required(),
    }).required();
  }
}

module.exports = CatalogApplicationValidator;
