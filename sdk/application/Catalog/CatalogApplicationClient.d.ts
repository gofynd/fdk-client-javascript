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
        getProductBundlesBySlug: string;
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
     * @returns {Promise<FollowPostResponse>} - Success response
     * @name followById
     * @summary: Follows an item by ID.
     * @description: Add a product, brand, or item to the user's followed list by collection Id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/followById/).
     */
    followById({ collectionType, collectionId, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<FollowPostResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<BrandDetailResponse>} - Success response
     * @name getBrandDetailBySlug
     * @summary: Retrieves detailed brand info by slug.
     * @description: Get metadata of a brand such as name, information, logo, banner, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getBrandDetailBySlug/).
     */
    getBrandDetailBySlug({ slug, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<BrandDetailResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<BrandListingResponse>} - Success response
     * @name getBrands
     * @summary: Fetches all available brands.
     * @description: Get a list of all the available brands. Filtering can be applied to the department. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getBrands/).
     */
    getBrands({ department, pageNo, pageSize, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<BrandListingResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.department] - The name of the department. Use this
     *   parameter to filter products by a particular department. See the list
     *   of available departments below. Also, you can get available departments
     *   from the endpoint /service/application/catalog/v1.0/departments/.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @returns {Paginator<BrandListingResponse>}
     * @summary: Fetches all available brands.
     * @description: Get a list of all the available brands. Filtering can be applied to the department.
     */
    getBrandsPaginator({ department, pageSize }?: {
        department?: string;
        pageSize?: number;
    }): Paginator<BrandListingResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CategoryListingResponse>} - Success response
     * @name getCategories
     * @summary: Lists all product categories.
     * @description: List all available product categories. Also, users can filter the categories by department. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getCategories/).
     */
    getCategories({ department, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<CategoryListingResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CategoryMetaResponse>} - Success response
     * @name getCategoryDetailBySlug
     * @summary: Retrieves category details by slug.
     * @description: Get detailed information about a specific product category using its slug and get metadata of a category such as name, information, logo, banner, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getCategoryDetailBySlug/).
     */
    getCategoryDetailBySlug({ slug, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<CategoryMetaResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CollectionDetailResponse>} - Success response
     * @name getCollectionDetailBySlug
     * @summary: Retrieves collection details by slug.
     * @description: Get detailed information about a specific collection using its slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getCollectionDetailBySlug/).
     */
    getCollectionDetailBySlug({ slug, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<CollectionDetailResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ProductListingResponse>} - Success response
     * @name getCollectionItemsBySlug
     * @summary: Lists items in a collection by slug.
     * @description: Fetch items within a particular collection identified by its slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getCollectionItemsBySlug/).
     */
    getCollectionItemsBySlug({ slug, f, q, filters, sortOn, pageId, pageSize, pageNo, pageType, requestHeaders, }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<ProductListingResponse>;
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
     * @returns {Paginator<ProductListingResponse>}
     * @summary: Lists items in a collection by slug.
     * @description: Fetch items within a particular collection identified by its slug.
     */
    getCollectionItemsBySlugPaginator({ slug, f, q, filters, sortOn, pageSize, }?: {
        slug: string;
        f?: string;
        q?: string;
        filters?: boolean;
        sortOn?: string;
        pageSize?: number;
    }): Paginator<ProductListingResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<GetCollectionListingResponse>} - Success response
     * @name getCollections
     * @summary: Fetches all available collections.
     * @description: List of curated product collections with filtering options based on tags and collection names. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getCollections/).
     */
    getCollections({ pageNo, pageSize, tag, q, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<GetCollectionListingResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @param {string[]} [arg.tag] - List of tags to filter collections.
     * @param {string} [arg.q] - Name of the collection to filter collection.
     * @returns {Paginator<GetCollectionListingResponse>}
     * @summary: Fetches all available collections.
     * @description: List of curated product collections with filtering options based on tags and collection names.
     */
    getCollectionsPaginator({ pageSize, tag, q }?: {
        pageSize?: number;
        tag?: string[];
        q?: string;
    }): Paginator<GetCollectionListingResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ProductFrequentlyComparedSimilarResponse>} - Success response
     * @name getComparedFrequentlyProductBySlug
     * @summary: Retrieves products frequently compared with a given product.
     * @description: Get products that are often compared to the product specified by its slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getComparedFrequentlyProductBySlug/).
     */
    getComparedFrequentlyProductBySlug({ slug, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<ProductFrequentlyComparedSimilarResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<DepartmentResponse>} - Success response
     * @name getDepartments
     * @summary: Lists all departments.
     * @description: List all departments associated with available products. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getDepartments/).
     */
    getDepartments({ requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<DepartmentResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<FollowIdsResponse>} - Success response
     * @name getFollowIds
     * @summary: Fetches IDs of followed items.
     * @description: Get the IDs of all items the user is currently following, such as Products, Brands, and Collections. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getFollowIds/).
     */
    getFollowIds({ collectionType, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<FollowIdsResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<GetFollowListingResponse>} - Success response
     * @name getFollowedListing
     * @summary: Retrieves user's followed listings.
     * @description: Get a list of products or brands the user is following. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getFollowedListing/).
     */
    getFollowedListing({ collectionType, pageId, pageSize, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<GetFollowListingResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.collectionType - Type of collection followed, i.e.
     *   products, brands, or collections.
     * @param {number} [arg.pageSize] - Page ID to retrieve next set of results.
     * @returns {Paginator<GetFollowListingResponse>}
     * @summary: Retrieves user's followed listings.
     * @description: Get a list of products or brands the user is following.
     */
    getFollowedListingPaginator({ collectionType, pageSize }?: {
        collectionType: string;
        pageSize?: number;
    }): Paginator<GetFollowListingResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<FollowerCountResponse>} - Success response
     * @name getFollowerCountById
     * @summary: Retrieves follower count for an item.
     * @description: Get the total number of followers for a specific item by its ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getFollowerCountById/).
     */
    getFollowerCountById({ collectionType, collectionId, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<FollowerCountResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<HomeListingResponse>} - Success response
     * @name getHomeProducts
     * @summary: Fetches homepage-featured products.
     * @description: List all the products associated with a brand, collection or category in a random order. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getHomeProducts/).
     */
    getHomeProducts({ sortOn, pageId, pageSize, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<HomeListingResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.sortOn] - The order in which the list of products
     *   should be sorted, e.g. popularity, price, latest and discount, in
     *   either ascending or descending order.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @returns {Paginator<HomeListingResponse>}
     * @summary: Fetches homepage-featured products.
     * @description: List all the products associated with a brand, collection or category in a random order.
     */
    getHomeProductsPaginator({ sortOn, pageSize }?: {
        sortOn?: string;
        pageSize?: number;
    }): Paginator<HomeListingResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ApplicationStoreListing>} - Success response
     * @name getInStockLocations
     * @summary: Get store meta information.
     * @description: List stores where specified products are currently in stock. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getInStockLocations/).
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
     * @summary: Get store meta information.
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
     * @summary: Get store meta information.
     * @description: Get details about a store based on its location Id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getLocationDetailsById/).
     */
    getLocationDetailsById({ locationId, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<StoreDetails>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ProductBundle>} - Success response
     * @name getProductBundlesBySlug
     * @summary: Fetches product bundles by slug.
     * @description: Get products bundles to the one specified by its slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getProductBundlesBySlug/).
     */
    getProductBundlesBySlug({ slug, id, size, sellerId, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<ProductBundle>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ProductsComparisonResponse>} - Success response
     * @name getProductComparisonBySlugs
     * @summary: Compares multiple products by slugs.
     * @description: Get all the products that have the same category. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getProductComparisonBySlugs/).
     */
    getProductComparisonBySlugs({ slug, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<ProductsComparisonResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ProductDetail>} - Success response
     * @name getProductDetailBySlug
     * @summary: Fetches detailed product information by slug.
     * @description: Get product details such as price, attributes, HSN code, SKU code, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getProductDetailBySlug/).
     */
    getProductDetailBySlug({ slug, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<ProductDetail>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ProductSizePriceResponseV1>} - Success response
     * @name getProductPriceBySlug
     * @summary: get size price for multiple products
     * @description: Get the price of a product size at all the selling locations near to a PIN Code. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getProductPriceBySlug/).
     */
    getProductPriceBySlug({ body, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<ProductSizePriceResponseV1>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ProductSizeSellersResponseV4>} - Success response
     * @name getProductSellersBySlug
     * @summary: Get the sellers of a product size at a PIN Code
     * @description: List all sellers offering a specific product identified by its slug and size. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getProductSellersBySlug/).
     */
    getProductSellersBySlug({ slug, size, pincode, strategy, pageNo, pageSize, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<ProductSizeSellersResponseV4>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a product. You can get slug value from the endpoint
     *   /service/application/catalog/v1.0/products/.
     * @param {string} arg.size - A string indicating the size of the product,
     *   e.g. S, M, XL. You can get slug value from the endpoint
     *   /service/application/catalog/v1.0/products/sizes.
     * @param {string} [arg.pincode] - The 6-digit PIN Code of the area near
     *   which the selling locations should be searched, e.g. 400059
     * @param {string} [arg.strategy] - Sort stores on the basis of strategy.
     *   eg, fast-delivery, low-price, optimal.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @returns {Paginator<ProductSizeSellersResponseV4>}
     * @summary: Get the sellers of a product size at a PIN Code
     * @description: List all sellers offering a specific product identified by its slug and size.
     */
    getProductSellersBySlugPaginator({ slug, size, pincode, strategy, pageSize, }?: {
        slug: string;
        size: string;
        pincode?: string;
        strategy?: string;
        pageSize?: number;
    }): Paginator<ProductSizeSellersResponseV4>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ProductSizes>} - Success response
     * @name getProductSizesBySlug
     * @summary: Retrieves available sizes for a product by slug.
     * @description: Provides detailed information about a product, including its availability (sellable), available sizes with quantities, dimensions, weight, availability status, price details (marked, effective, selling), minimum order quantity (MOQ). - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getProductSizesBySlug/).
     */
    getProductSizesBySlug({ slug, storeId, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<ProductSizes>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ProductStockStatusResponse>} - Success response
     * @name getProductStockByIds
     * @summary: Checks product stock by IDs.
     * @description: Get the current stock status for products identified by their IDs, such as SKU, ALU, EAN, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getProductStockByIds/).
     */
    getProductStockByIds({ itemId, alu, skuCode, ean, upc, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<ProductStockStatusResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ProductStockPolling>} - Success response
     * @name getProductStockForTimeByIds
     * @summary: Fetches future stock data for products.
     * @description: Get the available stock levels for all products associated with a particular sales channel at a specified future time. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getProductStockForTimeByIds/).
     */
    getProductStockForTimeByIds({ timestamp, pageSize, pageId, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<ProductStockPolling>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.timestamp - Timestamp in UTC format (2020-07-23T10:27:50Z).
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @returns {Paginator<ProductStockPolling>}
     * @summary: Fetches future stock data for products.
     * @description: Get the available stock levels for all products associated with a particular sales channel at a specified future time.
     */
    getProductStockForTimeByIdsPaginator({ timestamp, pageSize }?: {
        timestamp: string;
        pageSize?: number;
    }): Paginator<ProductStockPolling>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ProductVariantsResponse>} - Success response
     * @name getProductVariantsBySlug
     * @summary: Retrieves product variants by slug.
     * @description: Get all available variants of a specific product identified by its slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getProductVariantsBySlug/).
     */
    getProductVariantsBySlug({ slug, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<ProductVariantsResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ProductListingResponse>} - Success response
     * @name getProducts
     * @summary: Lists all products.
     * @description: List all products available in the catalog. It supports filtering based on product name, brand, department, category, collection, and more, while also offering sorting options based on factors like price, ratings, discounts, and other relevant criteria. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getProducts/).
     */
    getProducts({ q, f, filters, sortOn, pageId, pageSize, pageNo, pageType, requestHeaders, }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<ProductListingResponse>;
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
     * @returns {Paginator<ProductListingResponse>}
     * @summary: Lists all products.
     * @description: List all products available in the catalog. It supports filtering based on product name, brand, department, category, collection, and more, while also offering sorting options based on factors like price, ratings, discounts, and other relevant criteria.
     */
    getProductsPaginator({ q, f, filters, sortOn, pageSize }?: {
        q?: string;
        f?: string;
        filters?: boolean;
        sortOn?: string;
        pageSize?: number;
    }): Paginator<ProductListingResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<AutoCompleteResponse>} - Success response
     * @name getSearchResults
     * @summary: Retrieves search result listings.
     * @description: Get products, brands, or categories based on a search query, which can be a partial or full name match. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getSearchResults/).
     */
    getSearchResults({ q, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<AutoCompleteResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ProductCompareResponse>} - Success response
     * @name getSimilarComparisonProductBySlug
     * @summary: Fetches similar products for comparison.
     * @description: Get all products within the same category as the one specified by the provided slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getSimilarComparisonProductBySlug/).
     */
    getSimilarComparisonProductBySlug({ slug, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<ProductCompareResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<StoreListingResponse>} - Success response
     * @name getStores
     * @summary: Get store meta information.
     * @description: List all stores associated with the sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getStores/).
     */
    getStores({ pageNo, pageSize, q, city, range, latitude, longitude, requestHeaders, }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<StoreListingResponse>;
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
     * @returns {Paginator<StoreListingResponse>}
     * @summary: Get store meta information.
     * @description: List all stores associated with the sales channel.
     */
    getStoresPaginator({ pageSize, q, city, range, latitude, longitude }?: {
        pageSize?: number;
        q?: string;
        city?: string;
        range?: number;
        latitude?: number;
        longitude?: number;
    }): Paginator<StoreListingResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<FollowPostResponse>} - Success response
     * @name unfollowById
     * @summary: Unfollows an item by ID.
     * @description: Remove a followed item, brand, or product using its collection ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/unfollowById/).
     */
    unfollowById({ collectionType, collectionId, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<FollowPostResponse>;
}
import Paginator = require("../../common/Paginator");
