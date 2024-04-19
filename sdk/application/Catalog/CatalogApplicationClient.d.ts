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
     * @summary: Follow an entity (product/brand/collection)
     * @description: Follow a particular entity such as product, brand, collection specified by its ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/followById/).
     */
    followById({ collectionType, collectionId, requestHeaders }?: CatalogApplicationValidator.FollowByIdParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.FollowPostResponse>;
    /**
     * @param {CatalogApplicationValidator.GetBrandDetailBySlugParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CatalogApplicationModel.BrandDetailResponse>} - Success response
     * @name getBrandDetailBySlug
     * @summary: Get metadata of a brand
     * @description: Fetch metadata of a brand such as name, information, logo, banner, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getBrandDetailBySlug/).
     */
    getBrandDetailBySlug({ slug, requestHeaders }?: CatalogApplicationValidator.GetBrandDetailBySlugParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.BrandDetailResponse>;
    /**
     * @param {CatalogApplicationValidator.GetBrandsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CatalogApplicationModel.BrandListingResponse>} - Success response
     * @name getBrands
     * @summary: Get all the brands
     * @description: A brand is the name under which a product is sold. Use this API to list all the brands. You can also filter the brands by department. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getBrands/).
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
     * @summary: Get all the brands
     * @description: A brand is the name under which a product is sold. Use this API to list all the brands. You can also filter the brands by department.
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
     * @summary: List all the categories
     * @description: Use this API to list all the categories. You can also filter the categories by department. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getCategories/).
     */
    getCategories({ department, requestHeaders }?: CatalogApplicationValidator.GetCategoriesParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.CategoryListingResponse>;
    /**
     * @param {CatalogApplicationValidator.GetCategoryDetailBySlugParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CatalogApplicationModel.CategoryMetaResponse>} - Success response
     * @name getCategoryDetailBySlug
     * @summary: Get metadata of a category
     * @description: Fetch metadata of a category such as name, information, logo, banner, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getCategoryDetailBySlug/).
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
     * @summary: Get a particular collection
     * @description: Get the details of a collection by its `slug`. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getCollectionDetailBySlug/).
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
     * @summary: Get the items in a collection
     * @description: Get items in a collection specified by its `slug`. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getCollectionItemsBySlug/).
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
     * @summary: Get the items in a collection
     * @description: Get items in a collection specified by its `slug`.
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
     * @summary: List all the collections
     * @description: Collections are a great way to organize your products and can improve the ability for customers to find items quickly and efficiently. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getCollections/).
     */
    getCollections({ pageNo, pageSize, tag, q, requestHeaders }?: CatalogApplicationValidator.GetCollectionsParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.GetCollectionListingResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @param {string[]} [arg.tag] - List of tags to filter collections
     * @param {string} [arg.q] - Name of the collection to filter collection
     * @returns {Paginator<CatalogApplicationModel.GetCollectionListingResponse>}
     * @summary: List all the collections
     * @description: Collections are a great way to organize your products and can improve the ability for customers to find items quickly and efficiently.
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
     * @summary: Get comparison between frequently compared products with the given product
     * @description: Use this API to compare a given product automatically with products that are frequently compared with it. Only one slug is needed. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getComparedFrequentlyProductBySlug/).
     */
    getComparedFrequentlyProductBySlug({ slug, requestHeaders }?: CatalogApplicationValidator.GetComparedFrequentlyProductBySlugParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.ProductFrequentlyComparedSimilarResponse>;
    /**
     * @param {CatalogApplicationValidator.GetDepartmentsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CatalogApplicationModel.DepartmentResponse>} - Success response
     * @name getDepartments
     * @summary: List all the departments
     * @description: Departments are a way to categorise similar products. A product can lie in multiple departments. For example, a skirt can below to the 'Women's Fashion' Department while a handbag can lie in 'Women's Accessories' Department. Use this API to list all the departments. If successful, returns the list of departments specified in `DepartmentResponse` - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getDepartments/).
     */
    getDepartments({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CatalogApplicationModel.DepartmentResponse>;
    /**
     * @param {CatalogApplicationValidator.GetFollowIdsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CatalogApplicationModel.FollowIdsResponse>} - Success response
     * @name getFollowIds
     * @summary: Get the IDs of followed products, brands and collections.
     * @description: You can get the IDs of all the followed Products, Brands and Collections. Pass collection_type as query parameter to fetch specific Ids - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getFollowIds/).
     */
    getFollowIds({ collectionType, requestHeaders }?: CatalogApplicationValidator.GetFollowIdsParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.FollowIdsResponse>;
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
    getFollowedListing({ collectionType, pageId, pageSize, requestHeaders }?: CatalogApplicationValidator.GetFollowedListingParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.GetFollowListingResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.collectionType - Type of collection followed, i.e.
     *   products, brands, or collections.
     * @param {number} [arg.pageSize] - Page ID to retrieve next set of results.
     * @returns {Paginator<CatalogApplicationModel.GetFollowListingResponse>}
     * @summary: Get a list of followed Products, Brands, Collections
     * @description: Users can follow a product they like. This API retrieves the products the user have followed.
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
     * @summary: Get Follow Count
     * @description: Get the total count of followers for a given collection type and collection ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getFollowerCountById/).
     */
    getFollowerCountById({ collectionType, collectionId, requestHeaders }?: CatalogApplicationValidator.GetFollowerCountByIdParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.FollowerCountResponse>;
    /**
     * @param {CatalogApplicationValidator.GetHomeProductsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CatalogApplicationModel.HomeListingResponse>} - Success response
     * @name getHomeProducts
     * @summary: List the products
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
     * @summary: List the products
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
     * @summary: Get product bundles
     * @description: Use this API to retrieve products bundles to the one specified by its slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getProductBundlesBySlug/).
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
     * @summary: Compare products
     * @description: Use this API to compare the features of products belonging to the same category. Note that at least one slug is mandatory in the request query. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getProductComparisonBySlugs/).
     */
    getProductComparisonBySlugs({ slug, requestHeaders }?: CatalogApplicationValidator.GetProductComparisonBySlugsParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.ProductsComparisonResponse>;
    /**
     * @param {CatalogApplicationValidator.GetProductDetailBySlugParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CatalogApplicationModel.ProductDetail>} - Success response
     * @name getProductDetailBySlug
     * @summary: Get a product
     * @description: Use this API to retrieve a product by its slug value. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getProductDetailBySlug/).
     */
    getProductDetailBySlug({ slug, requestHeaders }?: CatalogApplicationValidator.GetProductDetailBySlugParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.ProductDetail>;
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
    getProductPriceBySlug({ slug, size, storeId, pincode, moq, requestHeaders }?: CatalogApplicationValidator.GetProductPriceBySlugParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.ProductSizePriceResponseV3>;
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
    getProductSellersBySlug({ slug, size, pincode, strategy, pageNo, pageSize, requestHeaders }?: CatalogApplicationValidator.GetProductSellersBySlugParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.ProductSizeSellersResponseV3>;
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
    getProductSellersBySlugPaginator({ slug, size, pincode, strategy, pageSize, }?: {
        slug: string;
        size: string;
        pincode?: string;
        strategy?: string;
        pageSize?: number;
    }): Paginator<CatalogApplicationModel.ProductSizeSellersResponseV3>;
    /**
     * @param {CatalogApplicationValidator.GetProductSizesBySlugParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CatalogApplicationModel.ProductSizes>} - Success response
     * @name getProductSizesBySlug
     * @summary: Get the sizes of a product
     * @description: A product can have multiple sizes. Use this API to fetch all the available sizes of a product. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getProductSizesBySlug/).
     */
    getProductSizesBySlug({ slug, storeId, requestHeaders }?: CatalogApplicationValidator.GetProductSizesBySlugParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.ProductSizes>;
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
    getProductStockByIds({ itemId, alu, skuCode, ean, upc, requestHeaders }?: CatalogApplicationValidator.GetProductStockByIdsParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.ProductStockStatusResponse>;
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
    getProductStockForTimeByIds({ timestamp, pageSize, pageId, requestHeaders }?: CatalogApplicationValidator.GetProductStockForTimeByIdsParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.ProductStockPolling>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.timestamp - Timestamp in UTC format (2020-07-23T10:27:50Z)
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @returns {Paginator<CatalogApplicationModel.ProductStockPolling>}
     * @summary: Get the stock of a product
     * @description: Retrieve the available stock of the products. Use this API to get the stock status of products whose inventory is updated at the specified time
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
     * @summary: Get variant of a particular product
     * @description: A product can have a different type of variants such as colour, shade, memory. Use this API to fetch all the available variants of a product using its slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getProductVariantsBySlug/).
     */
    getProductVariantsBySlug({ slug, requestHeaders }?: CatalogApplicationValidator.GetProductVariantsBySlugParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.ProductVariantsResponse>;
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
     * @summary: Get all the products
     * @description: Use this API to list all the products. You may choose a sort order or make arbitrary search queries by entering the product name, brand, category or collection.
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
     * @summary: Get relevant suggestions for a search query
     * @description: Retrieves a list of suggestions for a given search query. Each suggestion is a valid search term that's generated on the basis of query. This is particularly useful to enhance the user experience while using the search tool. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getSearchResults/).
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
     * @summary: Get comparison between similar products
     * @description: Use this API to compare a given product automatically with similar products. Only one slug is needed. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/getSimilarComparisonProductBySlug/).
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
    getStores({ pageNo, pageSize, q, city, range, latitude, longitude, tags, requestHeaders, }?: CatalogApplicationValidator.GetStoresParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.StoreListingResponse>;
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
     * @summary: Unfollow an entity (product/brand/collection)
     * @description: You can undo a followed product, brand or collection by its ID. This action is referred as _unfollow_. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/catalog/unfollowById/).
     */
    unfollowById({ collectionType, collectionId, requestHeaders }?: CatalogApplicationValidator.UnfollowByIdParam, { responseHeaders }?: object): Promise<CatalogApplicationModel.FollowPostResponse>;
}
import CatalogApplicationValidator = require("./CatalogApplicationValidator");
import CatalogApplicationModel = require("./CatalogApplicationModel");
import Paginator = require("../../common/Paginator");
