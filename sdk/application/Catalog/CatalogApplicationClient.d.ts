export = Catalog;
declare class Catalog {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        followById: string;
        getBrandDetailBySlug: string;
        getBrands: string;
        getCategories: string;
        getCategoryDetailBySlug: string;
        getCollectionDetailBySlug: string;
        getCollectionItemsBySlug: string;
        getCollections: string;
        getComparedFrequentlyProductBySlug: string;
        getDepartments: string;
        getFollowIds: string;
        getFollowedListing: string;
        getFollowerCountById: string;
        getHomeProducts: string;
        getInStockLocations: string;
        getLocationDetailsById: string;
        getProductBundleItems: string;
        getProductBundlesByChildSku: string;
        getProductComparisonBySlugs: string;
        getProductDetailBySlug: string;
        getProductPriceBySlug: string;
        getProductSellersBySlug: string;
        getProductSizesBySlug: string;
        getProductStockByIds: string;
        getProductStockForTimeByIds: string;
        getProductVariantsBySlug: string;
        getProducts: string;
        getSearchResults: string;
        getSimilarComparisonProductBySlug: string;
        getStores: string;
        unfollowById: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<FollowPostResponseSchema>} - Success response
     * @name followById
     * @summary: Create item, brand, product
     * @description: Add a product, brand, or item to the user's followed list by collection Id. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/catalog/followById/).
     */
    followById({ collectionType, collectionId, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<FollowPostResponseSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<BrandDetailResponseSchema>} - Success response
     * @name getBrandDetailBySlug
     * @summary: Get a brand
     * @description: Get metadata of a brand such as name, information, logo, banner, etc. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/catalog/getBrandDetailBySlug/).
     */
    getBrandDetailBySlug({ slug, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<BrandDetailResponseSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<BrandListingResponseSchema>} - Success response
     * @name getBrands
     * @summary: List brands
     * @description: Get a list of all the available brands. Filtering can be applied to the department. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/catalog/getBrands/).
     */
    getBrands({ department, pageNo, pageSize, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<BrandListingResponseSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.department] - The name of the department. Use this
     *   parameter to filter products by a particular department. See the list
     *   of available departments below. Also, you can get available departments
     *   from the endpoint /service/application/catalog/v1.0/departments/.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @returns {Paginator<BrandListingResponseSchema>}
     * @summary: List brands
     * @description: Get a list of all the available brands. Filtering can be applied to the department.
     */
    getBrandsPaginator({ department, pageSize }?: {
        department?: string;
        pageSize?: number;
    }): Paginator<BrandListingResponseSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CategoryListingResponseSchema>} - Success response
     * @name getCategories
     * @summary: List product categories
     * @description: List all available product categories. Also, users can filter the categories by department. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/catalog/getCategories/).
     */
    getCategories({ department, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<CategoryListingResponseSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CategoryMetaResponseSchema>} - Success response
     * @name getCategoryDetailBySlug
     * @summary: Get category by slug
     * @description: Get detailed information about a specific product category using its slug and get metadata of a category such as name, information, logo, banner, etc. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/catalog/getCategoryDetailBySlug/).
     */
    getCategoryDetailBySlug({ slug, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<CategoryMetaResponseSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CollectionDetailResponseSchema>} - Success response
     * @name getCollectionDetailBySlug
     * @summary: Get a collection
     * @description: Get detailed information about a specific collection using its slug. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/catalog/getCollectionDetailBySlug/).
     */
    getCollectionDetailBySlug({ slug, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<CollectionDetailResponseSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ProductListingResponseSchema>} - Success response
     * @name getCollectionItemsBySlug
     * @summary: Lists items of collection
     * @description: Fetch items within a particular collection identified by its slug. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/catalog/getCollectionItemsBySlug/).
     */
    getCollectionItemsBySlug({ slug, f, q, filters, sortOn, pageId, pageSize, pageNo, pageType, requestHeaders, }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<ProductListingResponseSchema>;
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
     * @returns {Paginator<ProductListingResponseSchema>}
     * @summary: Lists items of collection
     * @description: Fetch items within a particular collection identified by its slug.
     */
    getCollectionItemsBySlugPaginator({ slug, f, q, filters, sortOn, pageSize, }?: {
        slug: string;
        f?: string;
        q?: string;
        filters?: boolean;
        sortOn?: string;
        pageSize?: number;
    }): Paginator<ProductListingResponseSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<GetCollectionListingResponseSchema>} - Success response
     * @name getCollections
     * @summary: List collections
     * @description: List of curated product collections with filtering options based on tags and collection names. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/catalog/getCollections/).
     */
    getCollections({ pageNo, pageSize, tag, q, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<GetCollectionListingResponseSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @param {string[]} [arg.tag] - List of tags to filter collections.
     * @param {string} [arg.q] - Name of the collection to filter collection.
     * @returns {Paginator<GetCollectionListingResponseSchema>}
     * @summary: List collections
     * @description: List of curated product collections with filtering options based on tags and collection names.
     */
    getCollectionsPaginator({ pageSize, tag, q }?: {
        pageSize?: number;
        tag?: string[];
        q?: string;
    }): Paginator<GetCollectionListingResponseSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ProductFrequentlyComparedSimilarResponseSchema>} -
     *   Success response
     * @name getComparedFrequentlyProductBySlug
     * @summary: List frequent products
     * @description: Get products that are often compared to the product specified by its slug. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/catalog/getComparedFrequentlyProductBySlug/).
     */
    getComparedFrequentlyProductBySlug({ slug, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<ProductFrequentlyComparedSimilarResponseSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<DepartmentResponseSchema>} - Success response
     * @name getDepartments
     * @summary: List departments
     * @description: List all departments associated with available products. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/catalog/getDepartments/).
     */
    getDepartments({ requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<DepartmentResponseSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<FollowIdsResponseSchema>} - Success response
     * @name getFollowIds
     * @summary: List Ids of followed item, brand, product
     * @description: Get the IDs of all items the user is currently following, such as Products, Brands, and Collections. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/catalog/getFollowIds/).
     */
    getFollowIds({ collectionType, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<FollowIdsResponseSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<GetFollowListingResponseSchema>} - Success response
     * @name getFollowedListing
     * @summary: List followed products, brands
     * @description: Get a list of products or brands the user is following. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/catalog/getFollowedListing/).
     */
    getFollowedListing({ collectionType, pageId, pageSize, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<GetFollowListingResponseSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.collectionType - Type of collection followed, i.e.
     *   products, brands, or collections.
     * @param {number} [arg.pageSize] - Page ID to retrieve next set of results.
     * @returns {Paginator<GetFollowListingResponseSchema>}
     * @summary: List followed products, brands
     * @description: Get a list of products or brands the user is following.
     */
    getFollowedListingPaginator({ collectionType, pageSize }?: {
        collectionType: string;
        pageSize?: number;
    }): Paginator<GetFollowListingResponseSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<FollowerCountResponseSchema>} - Success response
     * @name getFollowerCountById
     * @summary: Get follower count
     * @description: Get the total number of followers for a specific item by its ID. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/catalog/getFollowerCountById/).
     */
    getFollowerCountById({ collectionType, collectionId, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<FollowerCountResponseSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<HomeListingResponseSchema>} - Success response
     * @name getHomeProducts
     * @summary: List homepage-featured products
     * @description: List all the products associated with a brand, collection or category in a random order. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/catalog/getHomeProducts/).
     */
    getHomeProducts({ sortOn, pageId, pageSize, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<HomeListingResponseSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.sortOn] - The order in which the list of products
     *   should be sorted, e.g. popularity, price, latest and discount, in
     *   either ascending or descending order.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @returns {Paginator<HomeListingResponseSchema>}
     * @summary: List homepage-featured products
     * @description: List all the products associated with a brand, collection or category in a random order.
     */
    getHomeProductsPaginator({ sortOn, pageSize }?: {
        sortOn?: string;
        pageSize?: number;
    }): Paginator<HomeListingResponseSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ApplicationStoreListing>} - Success response
     * @name getInStockLocations
     * @summary: List stores with inventory
     * @description: List stores where specified products are currently in stock. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/catalog/getInStockLocations/).
     */
    getInStockLocations({ pageNo, pageSize, q, city, range, latitude, longitude, requestHeaders, }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<ApplicationStoreListing>;
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
     * @returns {Paginator<ApplicationStoreListing>}
     * @summary: List stores with inventory
     * @description: List stores where specified products are currently in stock.
     */
    getInStockLocationsPaginator({ pageSize, q, city, range, latitude, longitude, }?: {
        pageSize?: number;
        q?: string;
        city?: string;
        range?: number;
        latitude?: number;
        longitude?: number;
    }): Paginator<ApplicationStoreListing>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<StoreDetails>} - Success response
     * @name getLocationDetailsById
     * @summary: Get selling location
     * @description: Get details about a store based on its location Id. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/catalog/getLocationDetailsById/).
     */
    getLocationDetailsById({ locationId, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<StoreDetails>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ProductBundleItems>} - Success response
     * @name getProductBundleItems
     * @summary: Get children for a bundled product
     * @description: Retrieve bundle children for a given bundled product slug with pricing, brand, media, and seller information. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/catalog/getProductBundleItems/).
     */
    getProductBundleItems({ slug, pageNo, pageSize, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<ProductBundleItems>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ProductBundleItemsWithSlug>} - Success response
     * @name getProductBundlesByChildSku
     * @summary: Get bundled items for a specific product size
     * @description: Retrieve bundled items for a given product slug and size with pricing, brand, media, and seller information. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/catalog/getProductBundlesByChildSku/).
     */
    getProductBundlesByChildSku({ slug, size, pageNo, pageSize, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<ProductBundleItemsWithSlug>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ProductsComparisonResponseSchema>} - Success response
     * @name getProductComparisonBySlugs
     * @summary: List products for comparison
     * @description: Get all the products that have the same category. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/catalog/getProductComparisonBySlugs/).
     */
    getProductComparisonBySlugs({ slug, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<ProductsComparisonResponseSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ProductDetail>} - Success response
     * @name getProductDetailBySlug
     * @summary: Get a product
     * @description: Get product details such as price, attributes, HSN code, SKU code, etc. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/catalog/getProductDetailBySlug/).
     */
    getProductDetailBySlug({ slug, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<ProductDetail>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ProductSizePriceResponseV4>} - Success response
     * @name getProductPriceBySlug
     * @summary: Get product price
     * @description: Get the price of a product size at all the selling locations near to a PIN Code. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/catalog/getProductPriceBySlug/).
     */
    getProductPriceBySlug({ slug, size, storeId, moq, fulfillmentOptionSlug, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<ProductSizePriceResponseV4>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ProductSizeSellersResponseV4>} - Success response
     * @name getProductSellersBySlug
     * @summary: List sellers
     * @description: List all sellers offering a specific product identified by its slug and size. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/catalog/getProductSellersBySlug/).
     */
    getProductSellersBySlug({ slug, size, strategy, fulfillmentOptionSlug, pageNo, pageSize, requestHeaders, }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<ProductSizeSellersResponseV4>;
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
     * @param {string} [arg.fulfillmentOptionSlug] - Specifies the fulfillment
     *   method, indicating whether an order is for home delivery or store pickup
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @returns {Paginator<ProductSizeSellersResponseV4>}
     * @summary: List sellers
     * @description: List all sellers offering a specific product identified by its slug and size.
     */
    getProductSellersBySlugPaginator({ slug, size, strategy, fulfillmentOptionSlug, pageSize, }?: {
        slug: string;
        size: string;
        strategy?: string;
        fulfillmentOptionSlug?: string;
        pageSize?: number;
    }): Paginator<ProductSizeSellersResponseV4>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ProductSizes>} - Success response
     * @name getProductSizesBySlug
     * @summary: List sizes
     * @description: Provides detailed information about a product, including its availability (sellable), available sizes with quantities, dimensions, weight, availability status, price details (marked, effective, selling), minimum order quantity (MOQ). - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/catalog/getProductSizesBySlug/).
     */
    getProductSizesBySlug({ slug, storeId, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<ProductSizes>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ProductStockStatusResponseSchema>} - Success response
     * @name getProductStockByIds
     * @summary: Get product stocks
     * @description: Get the current stock status for products identified by their IDs, such as SKU, ALU, EAN, etc. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/catalog/getProductStockByIds/).
     */
    getProductStockByIds({ itemId, alu, skuCode, ean, upc, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<ProductStockStatusResponseSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ProductStockPolling>} - Success response
     * @name getProductStockForTimeByIds
     * @summary: List future stock
     * @description: Get the available stock levels for all products associated with a particular sales channel at a specified future time. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/catalog/getProductStockForTimeByIds/).
     */
    getProductStockForTimeByIds({ timestamp, pageSize, pageId, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<ProductStockPolling>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.timestamp - Timestamp in UTC format (2020-07-23T10:27:50Z).
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @returns {Paginator<ProductStockPolling>}
     * @summary: List future stock
     * @description: Get the available stock levels for all products associated with a particular sales channel at a specified future time.
     */
    getProductStockForTimeByIdsPaginator({ timestamp, pageSize }?: {
        timestamp: string;
        pageSize?: number;
    }): Paginator<ProductStockPolling>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ProductVariantsResponseSchema>} - Success response
     * @name getProductVariantsBySlug
     * @summary: List product variants
     * @description: Get all available variants of a specific product identified by its slug. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/catalog/getProductVariantsBySlug/).
     */
    getProductVariantsBySlug({ slug, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<ProductVariantsResponseSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ProductListingResponseSchema>} - Success response
     * @name getProducts
     * @summary: List products
     * @description: List all products available in the catalog. It supports filtering based on product name, brand, department, category, collection, and more, while also offering sorting options based on factors like price, ratings, discounts, and other relevant criteria. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/catalog/getProducts/).
     */
    getProducts({ q, f, filters, sortOn, pageId, pageSize, pageNo, pageType, requestHeaders, }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<ProductListingResponseSchema>;
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
     * @returns {Paginator<ProductListingResponseSchema>}
     * @summary: List products
     * @description: List all products available in the catalog. It supports filtering based on product name, brand, department, category, collection, and more, while also offering sorting options based on factors like price, ratings, discounts, and other relevant criteria.
     */
    getProductsPaginator({ q, f, filters, sortOn, pageSize }?: {
        q?: string;
        f?: string;
        filters?: boolean;
        sortOn?: string;
        pageSize?: number;
    }): Paginator<ProductListingResponseSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<AutoCompleteResponseSchema>} - Success response
     * @name getSearchResults
     * @summary: List product, brand, category
     * @description: Get products, brands, or categories based on a search query, which can be a partial or full name match. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/catalog/getSearchResults/).
     */
    getSearchResults({ q, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<AutoCompleteResponseSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ProductCompareResponseSchema>} - Success response
     * @name getSimilarComparisonProductBySlug
     * @summary: List similar products
     * @description: Get all products within the same category as the one specified by the provided slug. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/catalog/getSimilarComparisonProductBySlug/).
     */
    getSimilarComparisonProductBySlug({ slug, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<ProductCompareResponseSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<StoreListingResponseSchema>} - Success response
     * @name getStores
     * @summary: List available stores
     * @description: List all stores associated with the sales channel. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/catalog/getStores/).
     */
    getStores({ pageNo, pageSize, q, city, range, latitude, longitude, tags, requestHeaders, }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<StoreListingResponseSchema>;
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
     * @returns {Paginator<StoreListingResponseSchema>}
     * @summary: List available stores
     * @description: List all stores associated with the sales channel.
     */
    getStoresPaginator({ pageSize, q, city, range, latitude, longitude, tags, }?: {
        pageSize?: number;
        q?: string;
        city?: string;
        range?: number;
        latitude?: number;
        longitude?: number;
        tags?: string;
    }): Paginator<StoreListingResponseSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<FollowPostResponseSchema>} - Success response
     * @name unfollowById
     * @summary: Delete item, brand, product
     * @description: Remove a followed item, brand, or product using its collection ID. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/catalog/unfollowById/).
     */
    unfollowById({ collectionType, collectionId, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<FollowPostResponseSchema>;
}
import Paginator = require("../../common/Paginator");
