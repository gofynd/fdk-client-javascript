export = CatalogApplicationValidator;
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
declare class CatalogApplicationValidator {
    /** @returns {FollowByIdParam} */
    static followById(): FollowByIdParam;
    /** @returns {GetBrandDetailBySlugParam} */
    static getBrandDetailBySlug(): GetBrandDetailBySlugParam;
    /** @returns {GetBrandsParam} */
    static getBrands(): GetBrandsParam;
    /** @returns {GetCategoriesParam} */
    static getCategories(): GetCategoriesParam;
    /** @returns {GetCategoryDetailBySlugParam} */
    static getCategoryDetailBySlug(): GetCategoryDetailBySlugParam;
    /** @returns {GetCollectionDetailBySlugParam} */
    static getCollectionDetailBySlug(): GetCollectionDetailBySlugParam;
    /** @returns {GetCollectionItemsBySlugParam} */
    static getCollectionItemsBySlug(): GetCollectionItemsBySlugParam;
    /** @returns {GetCollectionsParam} */
    static getCollections(): GetCollectionsParam;
    /** @returns {GetComparedFrequentlyProductBySlugParam} */
    static getComparedFrequentlyProductBySlug(): GetComparedFrequentlyProductBySlugParam;
    /** @returns {GetDepartmentsParam} */
    static getDepartments(): any;
    /** @returns {GetFollowIdsParam} */
    static getFollowIds(): GetFollowIdsParam;
    /** @returns {GetFollowedListingParam} */
    static getFollowedListing(): GetFollowedListingParam;
    /** @returns {GetFollowerCountByIdParam} */
    static getFollowerCountById(): GetFollowerCountByIdParam;
    /** @returns {GetHomeProductsParam} */
    static getHomeProducts(): GetHomeProductsParam;
    /** @returns {GetInStockLocationsParam} */
    static getInStockLocations(): GetInStockLocationsParam;
    /** @returns {GetLocationDetailsByIdParam} */
    static getLocationDetailsById(): GetLocationDetailsByIdParam;
    /** @returns {GetProductBundlesBySlugParam} */
    static getProductBundlesBySlug(): GetProductBundlesBySlugParam;
    /** @returns {GetProductComparisonBySlugsParam} */
    static getProductComparisonBySlugs(): GetProductComparisonBySlugsParam;
    /** @returns {GetProductDetailBySlugParam} */
    static getProductDetailBySlug(): GetProductDetailBySlugParam;
    /** @returns {GetProductPriceBySlugParam} */
    static getProductPriceBySlug(): GetProductPriceBySlugParam;
    /** @returns {GetProductSellersBySlugParam} */
    static getProductSellersBySlug(): GetProductSellersBySlugParam;
    /** @returns {GetProductSizesBySlugParam} */
    static getProductSizesBySlug(): GetProductSizesBySlugParam;
    /** @returns {GetProductStockByIdsParam} */
    static getProductStockByIds(): GetProductStockByIdsParam;
    /** @returns {GetProductStockForTimeByIdsParam} */
    static getProductStockForTimeByIds(): GetProductStockForTimeByIdsParam;
    /** @returns {GetProductVariantsBySlugParam} */
    static getProductVariantsBySlug(): GetProductVariantsBySlugParam;
    /** @returns {GetProductsParam} */
    static getProducts(): GetProductsParam;
    /** @returns {GetSearchResultsParam} */
    static getSearchResults(): GetSearchResultsParam;
    /** @returns {GetSimilarComparisonProductBySlugParam} */
    static getSimilarComparisonProductBySlug(): GetSimilarComparisonProductBySlugParam;
    /** @returns {GetStoresParam} */
    static getStores(): GetStoresParam;
    /** @returns {UnfollowByIdParam} */
    static unfollowById(): UnfollowByIdParam;
}
declare namespace CatalogApplicationValidator {
    export { FollowByIdParam, GetBrandDetailBySlugParam, GetBrandsParam, GetCategoriesParam, GetCategoryDetailBySlugParam, GetCollectionDetailBySlugParam, GetCollectionItemsBySlugParam, GetCollectionsParam, GetComparedFrequentlyProductBySlugParam, GetDepartmentsParam, GetFollowIdsParam, GetFollowedListingParam, GetFollowerCountByIdParam, GetHomeProductsParam, GetInStockLocationsParam, GetLocationDetailsByIdParam, GetProductBundlesBySlugParam, GetProductComparisonBySlugsParam, GetProductDetailBySlugParam, GetProductPriceBySlugParam, GetProductSellersBySlugParam, GetProductSizesBySlugParam, GetProductStockByIdsParam, GetProductStockForTimeByIdsParam, GetProductVariantsBySlugParam, GetProductsParam, GetSearchResultsParam, GetSimilarComparisonProductBySlugParam, GetStoresParam, UnfollowByIdParam };
}
type FollowByIdParam = {
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
type GetBrandDetailBySlugParam = {
    /**
     * - A short, human-readable, URL-friendly identifier of
     * a brand. You can get slug value from the endpoint
     * /service/application/catalog/v1.0/brands/.
     */
    slug: string;
};
type GetBrandsParam = {
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
type GetCategoriesParam = {
    /**
     * - The name of the department. Use this
     * parameter to filter products by a particular department. See the list of
     * available departments below. Also, you can get available departments from
     * the endpoint /service/application/catalog/v1.0/departments/
     */
    department?: string;
};
type GetCategoryDetailBySlugParam = {
    /**
     * - A short, human-readable, URL-friendly identifier of
     * a brand. You can get slug value from the endpoint
     * /service/application/catalog/v1.0/brands/.
     */
    slug: string;
};
type GetCollectionDetailBySlugParam = {
    /**
     * - A short, human-readable, URL-friendly identifier of
     * a collection. You can get slug value from the endpoint
     * /service/application/catalog/v1.0/collections/.
     */
    slug: string;
};
type GetCollectionItemsBySlugParam = {
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
type GetCollectionsParam = {
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
type GetComparedFrequentlyProductBySlugParam = {
    /**
     * - A short, human-readable, URL-friendly identifier of
     * a product. You can get slug value from the endpoint
     * /service/application/catalog/v1.0/products/
     */
    slug: string;
};
type GetFollowIdsParam = {
    /**
     * - Type of collection, i.e. products,
     * brands, collections.
     */
    collectionType?: string;
};
type GetFollowedListingParam = {
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
type GetFollowerCountByIdParam = {
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
type GetHomeProductsParam = {
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
type GetInStockLocationsParam = {
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
type GetLocationDetailsByIdParam = {
    /**
     * - Unique Location ID.
     */
    locationId: number;
};
type GetProductBundlesBySlugParam = {
    /**
     * - Product slug for which bundles need to be fetched.
     */
    slug?: string;
    /**
     * - Product uid
     */
    id?: string;
};
type GetProductComparisonBySlugsParam = {
    /**
     * - A short, human-readable, URL-friendly identifier
     * of a product. You can get slug value from the endpoint
     * /service/application/catalog/v1.0/products/.
     */
    slug: string[];
};
type GetProductDetailBySlugParam = {
    /**
     * - A short, human-readable, URL-friendly identifier of
     * a product. You can get slug value from the endpoint
     * /service/application/catalog/v1.0/products/
     */
    slug: string;
};
type GetProductPriceBySlugParam = {
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
type GetProductSellersBySlugParam = {
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
type GetProductSizesBySlugParam = {
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
type GetProductStockByIdsParam = {
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
type GetProductStockForTimeByIdsParam = {
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
type GetProductVariantsBySlugParam = {
    /**
     * - A short, human-readable, URL-friendly identifier of
     * a product. You can get slug value from the endpoint
     * /service/application/catalog/v1.0/products/
     */
    slug: string;
};
type GetProductsParam = {
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
type GetSearchResultsParam = {
    /**
     * - The search query for entering partial or full name of
     * a product, brand or category. For example, if the given search query `q` is
     * _ski_, the relevant search suggestions could be _skirt_, _ski shoes_,
     * __skin cream_ etc.
     */
    q: string;
};
type GetSimilarComparisonProductBySlugParam = {
    /**
     * - A short, human-readable, URL-friendly identifier of
     * a product. You can get slug value from the endpoint
     * /service/application/catalog/v1.0/products/
     */
    slug: string;
};
type GetStoresParam = {
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
    /**
     * - Search stores based on tags.
     */
    tags?: string;
};
type UnfollowByIdParam = {
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
type GetDepartmentsParam = any;
