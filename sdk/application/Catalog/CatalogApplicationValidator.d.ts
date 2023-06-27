export = CatalogApplicationValidator;
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
declare class CatalogApplicationValidator {
}
declare namespace CatalogApplicationValidator {
    export { followById, getBrandDetailBySlug, getBrands, getCategories, getCategoryDetailBySlug, getCollectionDetailBySlug, getCollectionItemsBySlug, getCollections, getComparedFrequentlyProductBySlug, getDepartments, getFollowIds, getFollowedListing, getFollowerCountById, getHomeProducts, getInStockLocations, getLocationDetailsById, getProductBundlesBySlug, getProductComparisonBySlugs, getProductDetailBySlug, getProductPriceBySlug, getProductSellersBySlug, getProductSizesBySlug, getProductStockByIds, getProductStockForTimeByIds, getProductVariantsBySlug, getProducts, getSearchResults, getSimilarComparisonProductBySlug, getStores, unfollowById };
}
/** @returns {followById} */
declare function followById(): followById;
type followById = {
    /**
     * - Type of collection followed, i.e.
     * products, brands, or collections.
     */
    collectionType: string;
    /**
     * - The ID of the collection type.
     */
    collectionId: string;
};
/** @returns {getBrandDetailBySlug} */
declare function getBrandDetailBySlug(): getBrandDetailBySlug;
type getBrandDetailBySlug = {
    /**
     * - A short, human-readable, URL-friendly identifier of
     * a brand. You can get slug value from the endpoint
     * /service/application/catalog/v1.0/brands/.
     */
    slug: string;
};
/** @returns {getBrands} */
declare function getBrands(): getBrands;
type getBrands = {
    /**
     * - The name of the department. Use this
     * parameter to filter products by a particular department. See the list of
     * available departments below. Also, you can get available departments from
     * the endpoint /service/application/catalog/v1.0/departments/
     */
    department?: string;
    /**
     * - The page number to navigate through the given
     * set of results.
     */
    pageNo?: number;
    /**
     * - The number of items to retrieve in each page.
     */
    pageSize?: number;
};
/** @returns {getCategories} */
declare function getCategories(): getCategories;
type getCategories = {
    /**
     * - The name of the department. Use this
     * parameter to filter products by a particular department. See the list of
     * available departments below. Also, you can get available departments from
     * the endpoint /service/application/catalog/v1.0/departments/
     */
    department?: string;
};
/** @returns {getCategoryDetailBySlug} */
declare function getCategoryDetailBySlug(): getCategoryDetailBySlug;
type getCategoryDetailBySlug = {
    /**
     * - A short, human-readable, URL-friendly identifier of
     * a brand. You can get slug value from the endpoint
     * /service/application/catalog/v1.0/brands/.
     */
    slug: string;
};
/** @returns {getCollectionDetailBySlug} */
declare function getCollectionDetailBySlug(): getCollectionDetailBySlug;
type getCollectionDetailBySlug = {
    /**
     * - A short, human-readable, URL-friendly identifier of
     * a collection. You can get slug value from the endpoint
     * /service/application/catalog/v1.0/collections/.
     */
    slug: string;
};
/** @returns {getCollectionItemsBySlug} */
declare function getCollectionItemsBySlug(): getCollectionItemsBySlug;
type getCollectionItemsBySlug = {
    /**
     * - A short, human-readable, URL-friendly identifier of
     * a collection. You can get slug value from the endpoint
     * /service/application/catalog/v1.0/collections/.
     */
    slug: string;
    /**
     * - The search filter parameters. Filter parameters will
     * be passed in f parameter as shown in the example below. Double Pipe (||)
     * denotes the OR condition, whereas Triple-colon (:::) indicates a new filter
     * paramater applied as an AND condition.
     */
    f?: string;
    /**
     * - The search query for entering partial or full name
     * of product, brand, category, or collection.
     */
    q?: string;
    /**
     * - This is a boolean value, True for fetching
     * all filter parameters and False for disabling the filter parameters.
     */
    filters?: boolean;
    /**
     * - The order in which the list of products should
     * be sorted, e.g. popularity, price, latest and discount, in either ascending
     * or descending order. See the supported values below.
     */
    sortOn?: string;
    /**
     * - Page ID to retrieve next set of results.
     */
    pageId?: string;
    /**
     * - The number of items to retrieve in each page.
     */
    pageSize?: number;
    /**
     * - Page Number to retrieve next set of results.
     */
    pageNo?: number;
    /**
     * - Page Type to retrieve set of results can be
     * cursor or number.
     */
    pageType?: string;
};
/** @returns {getCollections} */
declare function getCollections(): getCollections;
type getCollections = {
    /**
     * - The page number to navigate through the given
     * set of results.
     */
    pageNo?: number;
    /**
     * - The number of items to retrieve in each page.
     */
    pageSize?: number;
    /**
     * - List of tags to filter collections
     */
    tag?: string[];
    /**
     * - Name of the collection to filter collection
     */
    q?: string;
};
/** @returns {getComparedFrequentlyProductBySlug} */
declare function getComparedFrequentlyProductBySlug(): getComparedFrequentlyProductBySlug;
type getComparedFrequentlyProductBySlug = {
    /**
     * - A short, human-readable, URL-friendly identifier of
     * a product. You can get slug value from the endpoint
     * /service/application/catalog/v1.0/products/
     */
    slug: string;
};
/** @returns {getDepartments} */
declare function getDepartments(): any;
type getDepartments = any;
/** @returns {getFollowIds} */
declare function getFollowIds(): getFollowIds;
type getFollowIds = {
    /**
     * - Type of collection, i.e. products,
     * brands, collections.
     */
    collectionType?: string;
};
/** @returns {getFollowedListing} */
declare function getFollowedListing(): getFollowedListing;
type getFollowedListing = {
    /**
     * - Type of collection followed, i.e.
     * products, brands, or collections.
     */
    collectionType: string;
    /**
     * - Page ID to retrieve next set of results.
     */
    pageId?: string;
    /**
     * - Page ID to retrieve next set of results.
     */
    pageSize?: number;
};
/** @returns {getFollowerCountById} */
declare function getFollowerCountById(): getFollowerCountById;
type getFollowerCountById = {
    /**
     * - Type of collection, i.e. products,
     * brands, or collections.
     */
    collectionType: string;
    /**
     * - The ID of the collection type.
     */
    collectionId: string;
};
/** @returns {getHomeProducts} */
declare function getHomeProducts(): getHomeProducts;
type getHomeProducts = {
    /**
     * - The order in which the list of products should
     * be sorted, e.g. popularity, price, latest and discount, in either ascending
     * or descending order.
     */
    sortOn?: string;
    /**
     * - Page ID to retrieve next set of results.
     */
    pageId?: string;
    /**
     * - The number of items to retrieve in each page.
     */
    pageSize?: number;
};
/** @returns {getInStockLocations} */
declare function getInStockLocations(): getInStockLocations;
type getInStockLocations = {
    /**
     * - The page number to navigate through the given
     * set of results.
     */
    pageNo?: number;
    /**
     * - Number of items to retrieve in each page.
     */
    pageSize?: number;
    /**
     * - Search a store by its name or store_code.
     */
    q?: string;
    /**
     * - Search stores by the city in which they are situated.
     */
    city?: string;
    /**
     * - Use this to retrieve stores within a particular
     * range in meters, e.g. 10000, to indicate a 10km range
     */
    range?: number;
    /**
     * - Latitude of the location from where one wants
     * to retreive the nearest stores, e.g. 72.8691788
     */
    latitude?: number;
    /**
     * - Longitude of the location from where one
     * wants to retreive the nearest stores, e.g. 19.1174114
     */
    longitude?: number;
};
/** @returns {getLocationDetailsById} */
declare function getLocationDetailsById(): getLocationDetailsById;
type getLocationDetailsById = {
    /**
     * - Unique Location ID.
     */
    locationId: number;
};
/** @returns {getProductBundlesBySlug} */
declare function getProductBundlesBySlug(): getProductBundlesBySlug;
type getProductBundlesBySlug = {
    /**
     * - Product slug for which bundles need to be fetched.
     */
    slug?: string;
    /**
     * - Product uid
     */
    id?: string;
};
/** @returns {getProductComparisonBySlugs} */
declare function getProductComparisonBySlugs(): getProductComparisonBySlugs;
type getProductComparisonBySlugs = {
    /**
     * - A short, human-readable, URL-friendly identifier
     * of a product. You can get slug value from the endpoint
     * /service/application/catalog/v1.0/products/.
     */
    slug: string[];
};
/** @returns {getProductDetailBySlug} */
declare function getProductDetailBySlug(): getProductDetailBySlug;
type getProductDetailBySlug = {
    /**
     * - A short, human-readable, URL-friendly identifier of
     * a product. You can get slug value from the endpoint
     * /service/application/catalog/v1.0/products/
     */
    slug: string;
};
/** @returns {getProductPriceBySlug} */
declare function getProductPriceBySlug(): getProductPriceBySlug;
type getProductPriceBySlug = {
    /**
     * - A short, human-readable, URL-friendly identifier of
     * a product. You can get slug value from the endpoint
     * /service/application/catalog/v1.0/products/
     */
    slug: string;
    /**
     * - A string indicating the size of the product, e.g.
     * S, M, XL. You can get slug value from the endpoint
     * /service/application/catalog/v1.0/products/sizes
     */
    size: string;
    /**
     * - The ID of the store that is selling the
     * product, e.g. 1,2,3.
     */
    storeId?: number;
    /**
     * - The PIN Code of the area near which the
     * selling locations should be searched, e.g. 400059.
     */
    pincode?: string;
    /**
     * - An Integer indication the Minimum Order Quantity
     * of a product, e.g. 100.
     */
    moq?: number;
};
/** @returns {getProductSellersBySlug} */
declare function getProductSellersBySlug(): getProductSellersBySlug;
type getProductSellersBySlug = {
    /**
     * - A short, human-readable, URL-friendly identifier of
     * a product. You can get slug value from the endpoint
     * /service/application/catalog/v1.0/products/
     */
    slug: string;
    /**
     * - A string indicating the size of the product, e.g.
     * S, M, XL. You can get slug value from the endpoint
     * /service/application/catalog/v1.0/products/sizes
     */
    size: string;
    /**
     * - The 6-digit PIN Code of the area near which
     * the selling locations should be searched, e.g. 400059
     */
    pincode?: string;
    /**
     * - Sort stores on the basis of strategy. eg,
     * fast-delivery, low-price, optimal.
     */
    strategy?: string;
    /**
     * - The page number to navigate through the given
     * set of results.
     */
    pageNo?: number;
    /**
     * - The number of items to retrieve in each page.
     */
    pageSize?: number;
};
/** @returns {getProductSizesBySlug} */
declare function getProductSizesBySlug(): getProductSizesBySlug;
type getProductSizesBySlug = {
    /**
     * - A short, human-readable, URL-friendly identifier of
     * a product. You can get slug value from the endpoint
     * /service/application/catalog/v1.0/products/
     */
    slug: string;
    /**
     * - The ID of the store that is selling the
     * product, e.g. 1,2,3.
     */
    storeId?: number;
};
/** @returns {getProductStockByIds} */
declare function getProductStockByIds(): getProductStockByIds;
type getProductStockByIds = {
    /**
     * - The Item ID of the product (Max. 50 allowed)
     */
    itemId?: string;
    /**
     * - ALU of the product (limited upto 50 ALU identifier
     * in a single request)
     */
    alu?: string;
    /**
     * - Stock-keeping Unit of the product (limited
     * upto 50 SKU Code in a single request)
     */
    skuCode?: string;
    /**
     * - European Article Number of the product (limited
     * upto 50 EAN identifier in a single request)
     */
    ean?: string;
    /**
     * - Universal Product Code of the product (limited
     * upto 50 UPC identifier in a single request)
     */
    upc?: string;
};
/** @returns {getProductStockForTimeByIds} */
declare function getProductStockForTimeByIds(): getProductStockForTimeByIds;
type getProductStockForTimeByIds = {
    /**
     * - Timestamp in UTC format (2020-07-23T10:27:50Z)
     */
    timestamp: string;
    /**
     * - The number of items to retrieve in each page.
     */
    pageSize?: number;
    /**
     * - Page ID to retrieve next set of results.
     */
    pageId?: string;
};
/** @returns {getProductVariantsBySlug} */
declare function getProductVariantsBySlug(): getProductVariantsBySlug;
type getProductVariantsBySlug = {
    /**
     * - A short, human-readable, URL-friendly identifier of
     * a product. You can get slug value from the endpoint
     * /service/application/catalog/v1.0/products/
     */
    slug: string;
};
/** @returns {getProducts} */
declare function getProducts(): getProducts;
type getProducts = {
    /**
     * - The search query for entering partial or full name
     * of product, brand, category, or collection.
     */
    q?: string;
    /**
     * - The search filter parameters. Filter parameters will
     * be passed in f parameter as shown in the example below. Double Pipe (||)
     * denotes the OR condition, whereas Triple-colon (:::) indicates a new filter
     * paramater applied as an AND condition.
     */
    f?: string;
    /**
     * - This is a boolean value, True for fetching
     * all filter parameters and False for disabling the filter parameters.
     */
    filters?: boolean;
    /**
     * - The order in which the list of products should
     * be sorted, e.g. popularity, price, latest and discount, in either ascending
     * or descending order. See the supported values below.
     */
    sortOn?: string;
    /**
     * - Page ID to retrieve next set of results.
     */
    pageId?: string;
    /**
     * - The number of items to retrieve in each page.
     */
    pageSize?: number;
    /**
     * - The page number to navigate through the given
     * set of results.
     */
    pageNo?: number;
    /**
     * - Available pagination types are cursor or number.
     */
    pageType?: string;
};
/** @returns {getSearchResults} */
declare function getSearchResults(): getSearchResults;
type getSearchResults = {
    /**
     * - The search query for entering partial or full name of
     * a product, brand or category. For example, if the given search query `q` is
     * _ski_, the relevant search suggestions could be _skirt_, _ski shoes_,
     * __skin cream_ etc.
     */
    q: string;
};
/** @returns {getSimilarComparisonProductBySlug} */
declare function getSimilarComparisonProductBySlug(): getSimilarComparisonProductBySlug;
type getSimilarComparisonProductBySlug = {
    /**
     * - A short, human-readable, URL-friendly identifier of
     * a product. You can get slug value from the endpoint
     * /service/application/catalog/v1.0/products/
     */
    slug: string;
};
/** @returns {getStores} */
declare function getStores(): getStores;
type getStores = {
    /**
     * - The page number to navigate through the given
     * set of results.
     */
    pageNo?: number;
    /**
     * - Number of items to retrieve in each page.
     */
    pageSize?: number;
    /**
     * - Search a store by its name or store_code.
     */
    q?: string;
    /**
     * - Search stores by the city in which they are situated.
     */
    city?: string;
    /**
     * - Use this to retrieve stores within a particular
     * range in meters, e.g. 10000, to indicate a 10km range
     */
    range?: number;
    /**
     * - Latitude of the location from where one wants
     * to retreive the nearest stores, e.g. 72.8691788
     */
    latitude?: number;
    /**
     * - Longitude of the location from where one
     * wants to retreive the nearest stores, e.g. 19.1174114
     */
    longitude?: number;
};
/** @returns {unfollowById} */
declare function unfollowById(): unfollowById;
type unfollowById = {
    /**
     * - Type of collection followed, i.e.
     * products, brands, or collections.
     */
    collectionType: string;
    /**
     * - The ID of the collection type.
     */
    collectionId: string;
};
