const Joi = require("joi");

const CatalogApplicationModel = require("./CatalogApplicationModel");

/**
 * @typedef followById
 * @property {string} collectionType - Type of collection followed, i.e.
 *   products, brands, or collections.
 * @property {string} collectionId - The ID of the collection type.
 */

/**
 * @typedef getBrandDetailBySlug
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   a brand. You can get slug value from the endpoint
 *   /service/application/catalog/v1.0/brands/.
 */

/**
 * @typedef getBrands
 * @property {string} [department] - The name of the department. Use this
 *   parameter to filter products by a particular department. See the list of
 *   available departments below. Also, you can get available departments from
 *   the endpoint /service/application/catalog/v1.0/departments/
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 */

/**
 * @typedef getCategories
 * @property {string} [department] - The name of the department. Use this
 *   parameter to filter products by a particular department. See the list of
 *   available departments below. Also, you can get available departments from
 *   the endpoint /service/application/catalog/v1.0/departments/
 */

/**
 * @typedef getCategoryDetailBySlug
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   a brand. You can get slug value from the endpoint
 *   /service/application/catalog/v1.0/brands/.
 */

/**
 * @typedef getCollectionDetailBySlug
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   a collection. You can get slug value from the endpoint
 *   /service/application/catalog/v1.0/collections/.
 */

/**
 * @typedef getCollectionItemsBySlug
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
 * @typedef getCollections
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 * @property {string[]} [tag] - List of tags to filter collections
 * @property {string} [q] - Name of the collection to filter collection
 */

/**
 * @typedef getComparedFrequentlyProductBySlug
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   a product. You can get slug value from the endpoint
 *   /service/application/catalog/v1.0/products/
 */

/** @typedef getDepartments */

/**
 * @typedef getFollowIds
 * @property {string} [collectionType] - Type of collection, i.e. products,
 *   brands, collections.
 */

/**
 * @typedef getFollowedListing
 * @property {string} collectionType - Type of collection followed, i.e.
 *   products, brands, or collections.
 * @property {string} [pageId] - Page ID to retrieve next set of results.
 * @property {number} [pageSize] - Page ID to retrieve next set of results.
 */

/**
 * @typedef getFollowerCountById
 * @property {string} collectionType - Type of collection, i.e. products,
 *   brands, or collections.
 * @property {string} collectionId - The ID of the collection type.
 */

/**
 * @typedef getHomeProducts
 * @property {string} [sortOn] - The order in which the list of products should
 *   be sorted, e.g. popularity, price, latest and discount, in either ascending
 *   or descending order.
 * @property {string} [pageId] - Page ID to retrieve next set of results.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 */

/**
 * @typedef getInStockLocations
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
 * @typedef getLocationDetailsById
 * @property {number} locationId - Unique Location ID.
 */

/**
 * @typedef getProductBundlesBySlug
 * @property {string} [slug] - Product slug for which bundles need to be fetched.
 * @property {string} [id] - Product uid
 */

/**
 * @typedef getProductComparisonBySlugs
 * @property {string[]} slug - A short, human-readable, URL-friendly identifier
 *   of a product. You can get slug value from the endpoint
 *   /service/application/catalog/v1.0/products/.
 */

/**
 * @typedef getProductDetailBySlug
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   a product. You can get slug value from the endpoint
 *   /service/application/catalog/v1.0/products/
 */

/**
 * @typedef getProductPriceBySlug
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
 * @typedef getProductSellersBySlug
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
 * @typedef getProductSizesBySlug
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   a product. You can get slug value from the endpoint
 *   /service/application/catalog/v1.0/products/
 * @property {number} [storeId] - The ID of the store that is selling the
 *   product, e.g. 1,2,3.
 */

/**
 * @typedef getProductStockByIds
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
 * @typedef getProductStockForTimeByIds
 * @property {string} timestamp - Timestamp in UTC format (2020-07-23T10:27:50Z)
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 * @property {string} [pageId] - Page ID to retrieve next set of results.
 */

/**
 * @typedef getProductVariantsBySlug
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   a product. You can get slug value from the endpoint
 *   /service/application/catalog/v1.0/products/
 */

/**
 * @typedef getProducts
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
 * @typedef getSearchResults
 * @property {string} q - The search query for entering partial or full name of
 *   a product, brand or category. For example, if the given search query `q` is
 *   _ski_, the relevant search suggestions could be _skirt_, _ski shoes_,
 *   __skin cream_ etc.
 */

/**
 * @typedef getSimilarComparisonProductBySlug
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   a product. You can get slug value from the endpoint
 *   /service/application/catalog/v1.0/products/
 */

/**
 * @typedef getStores
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
 * @typedef unfollowById
 * @property {string} collectionType - Type of collection followed, i.e.
 *   products, brands, or collections.
 * @property {string} collectionId - The ID of the collection type.
 */

class CatalogApplicationValidator {
  /** @returns {followById} */
  static followById() {
    return Joi.object({
      collectionType: Joi.string().allow("").required(),
      collectionId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getBrandDetailBySlug} */
  static getBrandDetailBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getBrands} */
  static getBrands() {
    return Joi.object({
      department: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    });
  }

  /** @returns {getCategories} */
  static getCategories() {
    return Joi.object({
      department: Joi.string().allow(""),
    });
  }

  /** @returns {getCategoryDetailBySlug} */
  static getCategoryDetailBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getCollectionDetailBySlug} */
  static getCollectionDetailBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getCollectionItemsBySlug} */
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

  /** @returns {getCollections} */
  static getCollections() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      tag: Joi.array().items(Joi.string().allow("")),
      q: Joi.string().allow(""),
    });
  }

  /** @returns {getComparedFrequentlyProductBySlug} */
  static getComparedFrequentlyProductBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getDepartments} */
  static getDepartments() {
    return Joi.object({});
  }

  /** @returns {getFollowIds} */
  static getFollowIds() {
    return Joi.object({
      collectionType: Joi.string().allow(""),
    });
  }

  /** @returns {getFollowedListing} */
  static getFollowedListing() {
    return Joi.object({
      collectionType: Joi.string().allow("").required(),
      pageId: Joi.string().allow(""),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {getFollowerCountById} */
  static getFollowerCountById() {
    return Joi.object({
      collectionType: Joi.string().allow("").required(),
      collectionId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getHomeProducts} */
  static getHomeProducts() {
    return Joi.object({
      sortOn: Joi.string().allow(""),
      pageId: Joi.string().allow(""),
      pageSize: Joi.number(),
    });
  }

  /** @returns {getInStockLocations} */
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

  /** @returns {getLocationDetailsById} */
  static getLocationDetailsById() {
    return Joi.object({
      locationId: Joi.number().required(),
    }).required();
  }

  /** @returns {getProductBundlesBySlug} */
  static getProductBundlesBySlug() {
    return Joi.object({
      slug: Joi.string().allow(""),
      id: Joi.string().allow(""),
    });
  }

  /** @returns {getProductComparisonBySlugs} */
  static getProductComparisonBySlugs() {
    return Joi.object({
      slug: Joi.array().items(Joi.string().allow("")).required(),
    }).required();
  }

  /** @returns {getProductDetailBySlug} */
  static getProductDetailBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getProductPriceBySlug} */
  static getProductPriceBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      size: Joi.string().allow("").required(),
      storeId: Joi.number(),
      pincode: Joi.string().allow(""),
      moq: Joi.number(),
    }).required();
  }

  /** @returns {getProductSellersBySlug} */
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

  /** @returns {getProductSizesBySlug} */
  static getProductSizesBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      storeId: Joi.number(),
    }).required();
  }

  /** @returns {getProductStockByIds} */
  static getProductStockByIds() {
    return Joi.object({
      itemId: Joi.string().allow(""),
      alu: Joi.string().allow(""),
      skuCode: Joi.string().allow(""),
      ean: Joi.string().allow(""),
      upc: Joi.string().allow(""),
    });
  }

  /** @returns {getProductStockForTimeByIds} */
  static getProductStockForTimeByIds() {
    return Joi.object({
      timestamp: Joi.string().allow("").required(),
      pageSize: Joi.number(),
      pageId: Joi.string().allow(""),
    }).required();
  }

  /** @returns {getProductVariantsBySlug} */
  static getProductVariantsBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getProducts} */
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

  /** @returns {getSearchResults} */
  static getSearchResults() {
    return Joi.object({
      q: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getSimilarComparisonProductBySlug} */
  static getSimilarComparisonProductBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getStores} */
  static getStores() {
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

  /** @returns {unfollowById} */
  static unfollowById() {
    return Joi.object({
      collectionType: Joi.string().allow("").required(),
      collectionId: Joi.string().allow("").required(),
    }).required();
  }
}

module.exports = CatalogApplicationValidator;
