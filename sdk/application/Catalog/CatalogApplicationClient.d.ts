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
     * @param {CatalogApplicationValidator.FollowByIdParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CatalogApplicationModel.FollowPostResponse>} - Success response
     * @name followById
     * @summary: Create item, brand, product
     * @description: Add a product, brand, or item to the user's followed list by collection Id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/followById/).
     */
    followById({ collectionType, collectionId, requestHeaders }?: CatalogApplicationValidator.FollowByIdParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.FollowPostResponse>;
    /**
     * @param {CatalogApplicationValidator.GetBrandDetailBySlugParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CatalogApplicationModel.BrandDetailResponse>} - Success response
     * @name getBrandDetailBySlug
     * @summary: Get a brand
     * @description: Get metadata of a brand such as name, information, logo, banner, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getBrandDetailBySlug/).
     */
    getBrandDetailBySlug({ slug, requestHeaders }?: CatalogApplicationValidator.GetBrandDetailBySlugParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.BrandDetailResponse>;
    /**
     * @param {CatalogApplicationValidator.GetBrandsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CatalogApplicationModel.BrandListingResponse>} - Success response
     * @name getBrands
     * @summary: List brands
     * @description: Get a list of all the available brands. Filtering can be applied to the department. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getBrands/).
     */
    getBrands({ department, pageNo, pageSize, requestHeaders }?: CatalogApplicationValidator.GetBrandsParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.BrandListingResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.department] - The name of the department. Use this
     *   parameter to filter products by a particular department. See the list
     *   of available departments below. Also, you can get available departments
     *   from the endpoint /service/application/catalog/v1.0/departments/.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @returns {Paginator<CatalogApplicationModel.BrandListingResponse>}
     * @summary: List brands
     * @description: Get a list of all the available brands. Filtering can be applied to the department.
     */
    getBrandsPaginator({ department, pageSize }?: {
        department?: string;
        pageSize?: number;
    }): Paginator<CatalogApplicationModel.BrandListingResponse>;
    /**
     * @param {CatalogApplicationValidator.GetCategoriesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CatalogApplicationModel.CategoryListingResponse>} -
     *   Success response
     * @name getCategories
     * @summary: List product categories
     * @description: List all available product categories. Also, users can filter the categories by department. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getCategories/).
     */
    getCategories({ department, requestHeaders }?: CatalogApplicationValidator.GetCategoriesParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.CategoryListingResponse>;
    /**
     * @param {CatalogApplicationValidator.GetCategoryDetailBySlugParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CatalogApplicationModel.CategoryMetaResponse>} - Success response
     * @name getCategoryDetailBySlug
     * @summary: Get category by slug
     * @description: Get detailed information about a specific product category using its slug and get metadata of a category such as name, information, logo, banner, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getCategoryDetailBySlug/).
     */
    getCategoryDetailBySlug({ slug, requestHeaders }?: CatalogApplicationValidator.GetCategoryDetailBySlugParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.CategoryMetaResponse>;
    /**
     * @param {CatalogApplicationValidator.GetCollectionDetailBySlugParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CatalogApplicationModel.CollectionDetailResponse>} -
     *   Success response
     * @name getCollectionDetailBySlug
     * @summary: Get a collection
     * @description: Get detailed information about a specific collection using its slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getCollectionDetailBySlug/).
     */
    getCollectionDetailBySlug({ slug, requestHeaders }?: CatalogApplicationValidator.GetCollectionDetailBySlugParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.CollectionDetailResponse>;
    /**
     * @param {CatalogApplicationValidator.GetCollectionItemsBySlugParam} arg -
     *   Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CatalogApplicationModel.ProductListingResponse>} -
     *   Success response
     * @name getCollectionItemsBySlug
     * @summary: Lists items of collection
     * @description: Fetch items within a particular collection identified by its slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getCollectionItemsBySlug/).
     */
    getCollectionItemsBySlug({ slug, f, q, filters, sortOn, pageId, pageSize, pageNo, pageType, requestHeaders, }?: CatalogApplicationValidator.GetCollectionItemsBySlugParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.ProductListingResponse>;
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
     * @returns {Paginator<CatalogApplicationModel.ProductListingResponse>}
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
    }): Paginator<CatalogApplicationModel.ProductListingResponse>;
    /**
     * @param {CatalogApplicationValidator.GetCollectionsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CatalogApplicationModel.GetCollectionListingResponse>}
     *   - Success response
     *
     * @name getCollections
     * @summary: List collections
     * @description: List of curated product collections with filtering options based on tags and collection names. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getCollections/).
     */
    getCollections({ pageNo, pageSize, tag, q, requestHeaders }?: CatalogApplicationValidator.GetCollectionsParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.GetCollectionListingResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @param {string[]} [arg.tag] - List of tags to filter collections.
     * @param {string} [arg.q] - Name of the collection to filter collection.
     * @returns {Paginator<CatalogApplicationModel.GetCollectionListingResponse>}
     * @summary: List collections
     * @description: List of curated product collections with filtering options based on tags and collection names.
     */
    getCollectionsPaginator({ pageSize, tag, q }?: {
        pageSize?: number;
        tag?: string[];
        q?: string;
    }): Paginator<CatalogApplicationModel.GetCollectionListingResponse>;
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
     * @summary: List frequent products
     * @description: Get products that are often compared to the product specified by its slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getComparedFrequentlyProductBySlug/).
     */
    getComparedFrequentlyProductBySlug({ slug, requestHeaders }?: CatalogApplicationValidator.GetComparedFrequentlyProductBySlugParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.ProductFrequentlyComparedSimilarResponse>;
    /**
     * @param {CatalogApplicationValidator.GetDepartmentsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CatalogApplicationModel.DepartmentResponse>} - Success response
     * @name getDepartments
     * @summary: List departments
     * @description: List all departments associated with available products. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getDepartments/).
     */
    getDepartments({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CatalogApplicationModel.DepartmentResponse>;
    /**
     * @param {CatalogApplicationValidator.GetFollowIdsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CatalogApplicationModel.FollowIdsResponse>} - Success response
     * @name getFollowIds
     * @summary: List Ids of followed item, brand, product
     * @description: Get the IDs of all items the user is currently following, such as Products, Brands, and Collections. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getFollowIds/).
     */
    getFollowIds({ collectionType, requestHeaders }?: CatalogApplicationValidator.GetFollowIdsParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.FollowIdsResponse>;
    /**
     * @param {CatalogApplicationValidator.GetFollowedListingParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CatalogApplicationModel.GetFollowListingResponse>} -
     *   Success response
     * @name getFollowedListing
     * @summary: List followed products, brands
     * @description: Get a list of products or brands the user is following. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getFollowedListing/).
     */
    getFollowedListing({ collectionType, pageId, pageSize, requestHeaders }?: CatalogApplicationValidator.GetFollowedListingParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.GetFollowListingResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.collectionType - Type of collection followed, i.e.
     *   products, brands, or collections.
     * @param {number} [arg.pageSize] - Page ID to retrieve next set of results.
     * @returns {Paginator<CatalogApplicationModel.GetFollowListingResponse>}
     * @summary: List followed products, brands
     * @description: Get a list of products or brands the user is following.
     */
    getFollowedListingPaginator({ collectionType, pageSize }?: {
        collectionType: string;
        pageSize?: number;
    }): Paginator<CatalogApplicationModel.GetFollowListingResponse>;
    /**
     * @param {CatalogApplicationValidator.GetFollowerCountByIdParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CatalogApplicationModel.FollowerCountResponse>} -
     *   Success response
     * @name getFollowerCountById
     * @summary: Get follower count
     * @description: Get the total number of followers for a specific item by its ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getFollowerCountById/).
     */
    getFollowerCountById({ collectionType, collectionId, requestHeaders }?: CatalogApplicationValidator.GetFollowerCountByIdParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.FollowerCountResponse>;
    /**
     * @param {CatalogApplicationValidator.GetHomeProductsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CatalogApplicationModel.HomeListingResponse>} - Success response
     * @name getHomeProducts
     * @summary: List homepage-featured products
     * @description: List all the products associated with a brand, collection or category in a random order. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getHomeProducts/).
     */
    getHomeProducts({ sortOn, pageId, pageSize, requestHeaders }?: CatalogApplicationValidator.GetHomeProductsParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.HomeListingResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.sortOn] - The order in which the list of products
     *   should be sorted, e.g. popularity, price, latest and discount, in
     *   either ascending or descending order.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @returns {Paginator<CatalogApplicationModel.HomeListingResponse>}
     * @summary: List homepage-featured products
     * @description: List all the products associated with a brand, collection or category in a random order.
     */
    getHomeProductsPaginator({ sortOn, pageSize }?: {
        sortOn?: string;
        pageSize?: number;
    }): Paginator<CatalogApplicationModel.HomeListingResponse>;
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
    getInStockLocations({ pageNo, pageSize, q, city, range, latitude, longitude, requestHeaders, }?: CatalogApplicationValidator.GetInStockLocationsParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.ApplicationStoreListing>;
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
    getInStockLocationsPaginator({ pageSize, q, city, range, latitude, longitude, }?: {
        pageSize?: number;
        q?: string;
        city?: string;
        range?: number;
        latitude?: number;
        longitude?: number;
    }): Paginator<CatalogApplicationModel.ApplicationStoreListing>;
    /**
     * @param {CatalogApplicationValidator.GetLocationDetailsByIdParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CatalogApplicationModel.StoreDetails>} - Success response
     * @name getLocationDetailsById
     * @summary: Get selling location
     * @description: Get details about a store based on its location Id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getLocationDetailsById/).
     */
    getLocationDetailsById({ locationId, requestHeaders }?: CatalogApplicationValidator.GetLocationDetailsByIdParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.StoreDetails>;
    /**
     * @param {CatalogApplicationValidator.GetProductBundlesBySlugParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CatalogApplicationModel.ProductBundle>} - Success response
     * @name getProductBundlesBySlug
     * @summary: List product bundles
     * @description: Get products bundles to the one specified by its slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getProductBundlesBySlug/).
     */
    getProductBundlesBySlug({ slug, id, requestHeaders }?: CatalogApplicationValidator.GetProductBundlesBySlugParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.ProductBundle>;
    /**
     * @param {CatalogApplicationValidator.GetProductComparisonBySlugsParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CatalogApplicationModel.ProductsComparisonResponse>} -
     *   Success response
     * @name getProductComparisonBySlugs
     * @summary: List products for comparison
     * @description: Get all the products that have the same category. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getProductComparisonBySlugs/).
     */
    getProductComparisonBySlugs({ slug, requestHeaders }?: CatalogApplicationValidator.GetProductComparisonBySlugsParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.ProductsComparisonResponse>;
    /**
     * @param {CatalogApplicationValidator.GetProductDetailBySlugParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CatalogApplicationModel.ProductDetail>} - Success response
     * @name getProductDetailBySlug
     * @summary: Get a product
     * @description: Get product details such as price, attributes, HSN code, SKU code, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getProductDetailBySlug/).
     */
    getProductDetailBySlug({ slug, requestHeaders }?: CatalogApplicationValidator.GetProductDetailBySlugParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.ProductDetail>;
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
    getProductPriceBySlug({ slug, size, storeId, moq, requestHeaders }?: CatalogApplicationValidator.GetProductPriceBySlugParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.ProductSizePriceResponseV3>;
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
    getProductSellersBySlug({ slug, size, strategy, pageNo, pageSize, requestHeaders }?: CatalogApplicationValidator.GetProductSellersBySlugParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.ProductSizeSellersResponseV3>;
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
    getProductSellersBySlugPaginator({ slug, size, strategy, pageSize }?: {
        slug: string;
        size: string;
        strategy?: string;
        pageSize?: number;
    }): Paginator<CatalogApplicationModel.ProductSizeSellersResponseV3>;
    /**
     * @param {CatalogApplicationValidator.GetProductSizesBySlugParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CatalogApplicationModel.ProductSizes>} - Success response
     * @name getProductSizesBySlug
     * @summary: List sizes
     * @description: Provides detailed information about a product, including its availability (sellable), available sizes with quantities, dimensions, weight, availability status, price details (marked, effective, selling), minimum order quantity (MOQ). - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getProductSizesBySlug/).
     */
    getProductSizesBySlug({ slug, storeId, requestHeaders }?: CatalogApplicationValidator.GetProductSizesBySlugParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.ProductSizes>;
    /**
     * @param {CatalogApplicationValidator.GetProductStockByIdsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CatalogApplicationModel.ProductStockStatusResponse>} -
     *   Success response
     * @name getProductStockByIds
     * @summary: Get product stocks
     * @description: Get the current stock status for products identified by their IDs, such as SKU, ALU, EAN, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getProductStockByIds/).
     */
    getProductStockByIds({ itemId, alu, skuCode, ean, upc, requestHeaders }?: CatalogApplicationValidator.GetProductStockByIdsParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.ProductStockStatusResponse>;
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
    getProductStockForTimeByIds({ timestamp, pageSize, pageId, requestHeaders }?: CatalogApplicationValidator.GetProductStockForTimeByIdsParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.ProductStockPolling>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.timestamp - Timestamp in UTC format (2020-07-23T10:27:50Z).
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @returns {Paginator<CatalogApplicationModel.ProductStockPolling>}
     * @summary: List future stock
     * @description: Get the available stock levels for all products associated with a particular sales channel at a specified future time.
     */
    getProductStockForTimeByIdsPaginator({ timestamp, pageSize }?: {
        timestamp: string;
        pageSize?: number;
    }): Paginator<CatalogApplicationModel.ProductStockPolling>;
    /**
     * @param {CatalogApplicationValidator.GetProductVariantsBySlugParam} arg -
     *   Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CatalogApplicationModel.ProductVariantsResponse>} -
     *   Success response
     * @name getProductVariantsBySlug
     * @summary: List product variants
     * @description: Get all available variants of a specific product identified by its slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getProductVariantsBySlug/).
     */
    getProductVariantsBySlug({ slug, requestHeaders }?: CatalogApplicationValidator.GetProductVariantsBySlugParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.ProductVariantsResponse>;
    /**
     * @param {CatalogApplicationValidator.GetProductsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CatalogApplicationModel.ProductListingResponse>} -
     *   Success response
     * @name getProducts
     * @summary: List products
     * @description: List all products available in the catalog. It supports filtering based on product name, brand, department, category, collection, and more, while also offering sorting options based on factors like price, ratings, discounts, and other relevant criteria. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getProducts/).
     */
    getProducts({ q, f, filters, sortOn, pageId, pageSize, pageNo, pageType, requestHeaders, }?: CatalogApplicationValidator.GetProductsParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.ProductListingResponse>;
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
     * @returns {Paginator<CatalogApplicationModel.ProductListingResponse>}
     * @summary: List products
     * @description: List all products available in the catalog. It supports filtering based on product name, brand, department, category, collection, and more, while also offering sorting options based on factors like price, ratings, discounts, and other relevant criteria.
     */
    getProductsPaginator({ q, f, filters, sortOn, pageSize }?: {
        q?: string;
        f?: string;
        filters?: boolean;
        sortOn?: string;
        pageSize?: number;
    }): Paginator<CatalogApplicationModel.ProductListingResponse>;
    /**
     * @param {CatalogApplicationValidator.GetSearchResultsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CatalogApplicationModel.AutoCompleteResponse>} - Success response
     * @name getSearchResults
     * @summary: List product, brand, category
     * @description: Get products, brands, or categories based on a search query, which can be a partial or full name match. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getSearchResults/).
     */
    getSearchResults({ q, requestHeaders }?: CatalogApplicationValidator.GetSearchResultsParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.AutoCompleteResponse>;
    /**
     * @param {CatalogApplicationValidator.GetSimilarComparisonProductBySlugParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CatalogApplicationModel.ProductCompareResponse>} -
     *   Success response
     * @name getSimilarComparisonProductBySlug
     * @summary: List similar products
     * @description: Get all products within the same category as the one specified by the provided slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getSimilarComparisonProductBySlug/).
     */
    getSimilarComparisonProductBySlug({ slug, requestHeaders }?: CatalogApplicationValidator.GetSimilarComparisonProductBySlugParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.ProductCompareResponse>;
    /**
     * @param {CatalogApplicationValidator.GetStoresParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CatalogApplicationModel.StoreListingResponse>} - Success response
     * @name getStores
     * @summary: List available stores
     * @description: List all stores associated with the sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getStores/).
     */
    getStores({ pageNo, pageSize, q, city, range, latitude, longitude, tags, requestHeaders, }?: CatalogApplicationValidator.GetStoresParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.StoreListingResponse>;
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
     * @returns {Paginator<CatalogApplicationModel.StoreListingResponse>}
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
    }): Paginator<CatalogApplicationModel.StoreListingResponse>;
    /**
     * @param {CatalogApplicationValidator.UnfollowByIdParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CatalogApplicationModel.FollowPostResponse>} - Success response
     * @name unfollowById
     * @summary: Delete item, brand, product
     * @description: Remove a followed item, brand, or product using its collection ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/unfollowById/).
     */
    unfollowById({ collectionType, collectionId, requestHeaders }?: CatalogApplicationValidator.UnfollowByIdParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.FollowPostResponse>;
}
import CatalogApplicationValidator = require("./CatalogApplicationValidator");
import CatalogApplicationModel = require("./CatalogApplicationModel");
import Paginator = require("../../common/Paginator");
