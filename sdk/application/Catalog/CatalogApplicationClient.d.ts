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
     * @summary: Follows an item by ID.
     * @description: Adds a product, brand, or item to the user's followed list by its ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/followById/).
     */
    followById({ collectionType, collectionId, requestHeaders }?: CatalogApplicationValidator.FollowByIdParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.FollowPostResponse>;
    /**
     * @param {CatalogApplicationValidator.GetBrandDetailBySlugParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CatalogApplicationModel.BrandDetailResponse>} - Success response
     * @name getBrandDetailBySlug
     * @summary: Retrieves detailed brand info by slug.
     * @description: Retrieve metadata of a brand such as name, information, logo, banner, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getBrandDetailBySlug/).
     */
    getBrandDetailBySlug({ slug, requestHeaders }?: CatalogApplicationValidator.GetBrandDetailBySlugParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.BrandDetailResponse>;
    /**
     * @param {CatalogApplicationValidator.GetBrandsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CatalogApplicationModel.BrandListingResponse>} - Success response
     * @name getBrands
     * @summary: Fetches all available brands.
     * @description: Retrieves a comprehensive list of all brands in the catalog under which a product is sold. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getBrands/).
     */
    getBrands({ department, pageNo, pageSize, requestHeaders }?: CatalogApplicationValidator.GetBrandsParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.BrandListingResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.department] - The name of the department. Use this
     *   parameter to filter products by a particular department. See the list
     *   of available departments below. Also, you can get available departments
     *   from the endpoint /service/application/catalog/v1.0/departments/
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @returns {Paginator<CatalogApplicationModel.BrandListingResponse>}
     * @summary: Fetches all available brands.
     * @description: Retrieves a comprehensive list of all brands in the catalog under which a product is sold.
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
     * @summary: Lists all product categories.
     * @description: Retrieves a list of all available product categories. Also filter the categories by department. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getCategories/).
     */
    getCategories({ department, requestHeaders }?: CatalogApplicationValidator.GetCategoriesParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.CategoryListingResponse>;
    /**
     * @param {CatalogApplicationValidator.GetCategoryDetailBySlugParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CatalogApplicationModel.CategoryMetaResponse>} - Success response
     * @name getCategoryDetailBySlug
     * @summary: Retrieves category details by slug.
     * @description: Retrieve detailed information about a specific product category using its slug and Retrieve metadata of a category such as name, information, logo, banner, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getCategoryDetailBySlug/).
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
     * @summary: Retrieves collection details by slug.
     * @description: Retrieve detailed information about a specific collection using its slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getCollectionDetailBySlug/).
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
     * @summary: Lists items in a collection by slug.
     * @description: Retrieve items in a specific collection identified by its slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getCollectionItemsBySlug/).
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
     * @summary: Lists items in a collection by slug.
     * @description: Retrieve items in a specific collection identified by its slug.
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
     * @summary: Fetches all available collections.
     * @description: Retrieves a list of curated product collections. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getCollections/).
     */
    getCollections({ pageNo, pageSize, tag, q, requestHeaders }?: CatalogApplicationValidator.GetCollectionsParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.GetCollectionListingResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @param {string[]} [arg.tag] - List of tags to filter collections
     * @param {string} [arg.q] - Name of the collection to filter collection
     * @returns {Paginator<CatalogApplicationModel.GetCollectionListingResponse>}
     * @summary: Fetches all available collections.
     * @description: Retrieves a list of curated product collections.
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
     * @summary: Retrieves products frequently compared with a given product.
     * @description: Retrieve products that are often compared to the product specified by its slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getComparedFrequentlyProductBySlug/).
     */
    getComparedFrequentlyProductBySlug({ slug, requestHeaders }?: CatalogApplicationValidator.GetComparedFrequentlyProductBySlugParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.ProductFrequentlyComparedSimilarResponse>;
    /**
     * @param {CatalogApplicationValidator.GetDepartmentsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CatalogApplicationModel.DepartmentResponse>} - Success response
     * @name getDepartments
     * @summary: Lists all departments.
     * @description: Retrieves a list of all available product departments. Departments are a way to categorise similar products. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getDepartments/).
     */
    getDepartments({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CatalogApplicationModel.DepartmentResponse>;
    /**
     * @param {CatalogApplicationValidator.GetFollowIdsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CatalogApplicationModel.FollowIdsResponse>} - Success response
     * @name getFollowIds
     * @summary: Fetches IDs of followed items.
     * @description: Retrieves the IDs of all items the user is currently following like Products, Brands and Collections. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getFollowIds/).
     */
    getFollowIds({ collectionType, requestHeaders }?: CatalogApplicationValidator.GetFollowIdsParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.FollowIdsResponse>;
    /**
     * @param {CatalogApplicationValidator.GetFollowedListingParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CatalogApplicationModel.GetFollowListingResponse>} -
     *   Success response
     * @name getFollowedListing
     * @summary: Retrieves user's followed listings.
     * @description: Retrieve a list of products or brands the user is following. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getFollowedListing/).
     */
    getFollowedListing({ collectionType, pageId, pageSize, requestHeaders }?: CatalogApplicationValidator.GetFollowedListingParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.GetFollowListingResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.collectionType - Type of collection followed, i.e.
     *   products, brands, or collections.
     * @param {number} [arg.pageSize] - Page ID to retrieve next set of results.
     * @returns {Paginator<CatalogApplicationModel.GetFollowListingResponse>}
     * @summary: Retrieves user's followed listings.
     * @description: Retrieve a list of products or brands the user is following.
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
     * @summary: Retrieves follower count for an item.
     * @description: Retrieves the total number of followers for a specific item by its ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getFollowerCountById/).
     */
    getFollowerCountById({ collectionType, collectionId, requestHeaders }?: CatalogApplicationValidator.GetFollowerCountByIdParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.FollowerCountResponse>;
    /**
     * @param {CatalogApplicationValidator.GetHomeProductsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CatalogApplicationModel.HomeListingResponse>} - Success response
     * @name getHomeProducts
     * @summary: Fetches homepage-featured products.
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
     * @summary: Fetches homepage-featured products.
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
     * @summary: Get store meta information.
     * @description: Use this API to get a list of stores in a specific application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getInStockLocations/).
     */
    getInStockLocations({ pageNo, pageSize, q, city, range, latitude, longitude, requestHeaders, }?: CatalogApplicationValidator.GetInStockLocationsParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.ApplicationStoreListing>;
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
     * @summary: Get store meta information.
     * @description: Use this API to get meta details for a store. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getLocationDetailsById/).
     */
    getLocationDetailsById({ locationId, requestHeaders }?: CatalogApplicationValidator.GetLocationDetailsByIdParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.StoreDetails>;
    /**
     * @param {CatalogApplicationValidator.GetProductBundlesBySlugParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CatalogApplicationModel.ProductBundle>} - Success response
     * @name getProductBundlesBySlug
     * @summary: Fetches product bundles by slug.
     * @description: Retrieve products bundles to the one specified by its slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getProductBundlesBySlug/).
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
     * @summary: Compares multiple products by slugs.
     * @description: Retrieves side-by-side comparisons of multiple products identified by their slugs. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getProductComparisonBySlugs/).
     */
    getProductComparisonBySlugs({ slug, requestHeaders }?: CatalogApplicationValidator.GetProductComparisonBySlugsParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.ProductsComparisonResponse>;
    /**
     * @param {CatalogApplicationValidator.GetProductDetailBySlugParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CatalogApplicationModel.ProductDetail>} - Success response
     * @name getProductDetailBySlug
     * @summary: Fetches detailed product information by slug.
     * @description: Retrieve a product by its slug value. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getProductDetailBySlug/).
     */
    getProductDetailBySlug({ slug, requestHeaders }?: CatalogApplicationValidator.GetProductDetailBySlugParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.ProductDetail>;
    /**
     * @param {CatalogApplicationValidator.GetProductPriceBySlugParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CatalogApplicationModel.ProductSizePriceResponseV4>} -
     *   Success response
     * @name getProductPriceBySlug
     * @summary: Get the price of a product size at a PIN Code
     * @description: Prices may vary for different sizes of a product. Use this API to retrieve the price of a product size at all the selling locations near to a PIN Code. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getProductPriceBySlug/).
     */
    getProductPriceBySlug({ slug, size, storeId, pincode, moq, requestHeaders }?: CatalogApplicationValidator.GetProductPriceBySlugParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.ProductSizePriceResponseV4>;
    /**
     * @param {CatalogApplicationValidator.GetProductSellersBySlugParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CatalogApplicationModel.ProductSizeSellersResponseV4>}
     *   - Success response
     *
     * @name getProductSellersBySlug
     * @summary: Get the sellers of a product size at a PIN Code
     * @description: A product of a particular size may be sold by multiple sellers. Use this API to fetch the sellers having the stock of a particular size at a given PIN Code. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getProductSellersBySlug/).
     */
    getProductSellersBySlug({ slug, size, pincode, strategy, pageNo, pageSize, requestHeaders }?: CatalogApplicationValidator.GetProductSellersBySlugParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.ProductSizeSellersResponseV4>;
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
     * @returns {Paginator<CatalogApplicationModel.ProductSizeSellersResponseV4>}
     * @summary: Get the sellers of a product size at a PIN Code
     * @description: A product of a particular size may be sold by multiple sellers. Use this API to fetch the sellers having the stock of a particular size at a given PIN Code.
     */
    getProductSellersBySlugPaginator({ slug, size, pincode, strategy, pageSize, }?: {
        slug: string;
        size: string;
        pincode?: string;
        strategy?: string;
        pageSize?: number;
    }): Paginator<CatalogApplicationModel.ProductSizeSellersResponseV4>;
    /**
     * @param {CatalogApplicationValidator.GetProductSizesBySlugParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CatalogApplicationModel.ProductSizes>} - Success response
     * @name getProductSizesBySlug
     * @summary: Retrieves available sizes for a product by slug.
     * @description: Retrieve the size options available for a specific product based on its slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getProductSizesBySlug/).
     */
    getProductSizesBySlug({ slug, storeId, requestHeaders }?: CatalogApplicationValidator.GetProductSizesBySlugParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.ProductSizes>;
    /**
     * @param {CatalogApplicationValidator.GetProductStockByIdsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CatalogApplicationModel.ProductStockStatusResponse>} -
     *   Success response
     * @name getProductStockByIds
     * @summary: Checks product stock by IDs.
     * @description: Retrieves the current stock status for products identified by their IDs. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getProductStockByIds/).
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
     * @summary: Fetches future stock data for products.
     * @description: Retrieves projected stock levels for specified products at a future time. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getProductStockForTimeByIds/).
     */
    getProductStockForTimeByIds({ timestamp, pageSize, pageId, requestHeaders }?: CatalogApplicationValidator.GetProductStockForTimeByIdsParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.ProductStockPolling>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.timestamp - Timestamp in UTC format (2020-07-23T10:27:50Z)
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @returns {Paginator<CatalogApplicationModel.ProductStockPolling>}
     * @summary: Fetches future stock data for products.
     * @description: Retrieves projected stock levels for specified products at a future time.
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
     * @summary: Retrieves product variants by slug.
     * @description: Retrieves all available variants of a specific product identified by its slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getProductVariantsBySlug/).
     */
    getProductVariantsBySlug({ slug, requestHeaders }?: CatalogApplicationValidator.GetProductVariantsBySlugParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.ProductVariantsResponse>;
    /**
     * @param {CatalogApplicationValidator.GetProductsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CatalogApplicationModel.ProductListingResponse>} -
     *   Success response
     * @name getProducts
     * @summary: Lists all products.
     * @description: Retrieves a list of all products in the catalog. Choose a sort order or make arbitrary search queries by entering the product name, brand, category or collection. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getProducts/).
     */
    getProducts({ q, f, filters, sortOn, pageId, pageSize, pageNo, pageType, requestHeaders, }?: CatalogApplicationValidator.GetProductsParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.ProductListingResponse>;
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
     * @summary: Lists all products.
     * @description: Retrieves a list of all products in the catalog. Choose a sort order or make arbitrary search queries by entering the product name, brand, category or collection.
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
     * @summary: Retrieves search result listings.
     * @description: Retrieves products that match the user's search criteria. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getSearchResults/).
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
     * @summary: Fetches similar products for comparison.
     * @description: Gets products similar to the one identified by the given slug for comparison. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getSimilarComparisonProductBySlug/).
     */
    getSimilarComparisonProductBySlug({ slug, requestHeaders }?: CatalogApplicationValidator.GetSimilarComparisonProductBySlugParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.ProductCompareResponse>;
    /**
     * @param {CatalogApplicationValidator.GetStoresParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CatalogApplicationModel.StoreListingResponse>} - Success response
     * @name getStores
     * @summary: Get store meta information.
     * @description: Use this API to get a list of stores in a specific application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getStores/).
     */
    getStores({ pageNo, pageSize, q, city, range, latitude, longitude, requestHeaders, }?: CatalogApplicationValidator.GetStoresParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.StoreListingResponse>;
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
     * @returns {Paginator<CatalogApplicationModel.StoreListingResponse>}
     * @summary: Get store meta information.
     * @description: Use this API to get a list of stores in a specific application.
     */
    getStoresPaginator({ pageSize, q, city, range, latitude, longitude }?: {
        pageSize?: number;
        q?: string;
        city?: string;
        range?: number;
        latitude?: number;
        longitude?: number;
    }): Paginator<CatalogApplicationModel.StoreListingResponse>;
    /**
     * @param {CatalogApplicationValidator.UnfollowByIdParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CatalogApplicationModel.FollowPostResponse>} - Success response
     * @name unfollowById
     * @summary: Unfollows an item by ID.
     * @description: Removes a followed item, brand, or product based on its ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/unfollowById/).
     */
    unfollowById({ collectionType, collectionId, requestHeaders }?: CatalogApplicationValidator.UnfollowByIdParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.FollowPostResponse>;
}
import CatalogApplicationValidator = require("sdk/output/javascript/code/sdk/application/Catalog/CatalogApplicationValidator");
import CatalogApplicationModel = require("sdk/output/javascript/code/sdk/application/Catalog/CatalogApplicationModel");
import Paginator = require("sdk/output/javascript/code/sdk/common/Paginator");
