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
     * @param {Object} arg - Arg object.
     * @param {string} arg.collectionType - Type of collection followed, i.e.
     *   products, brands, or collections.
     * @param {string} arg.collectionId - The ID of the collection type.
     * @returns {Promise<FollowPostResponse>} - Success response
     * @summary: Follow an entity (product/brand/collection)
     * @description: Follow a particular entity such as product, brand, collection specified by its ID.
     */
    followById({ collectionType, collectionId }?: {
        collectionType: string;
        collectionId: string;
    }): Promise<FollowPostResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a brand. You can get slug value from the endpoint
     *   /service/application/catalog/v1.0/brands/.
     * @returns {Promise<BrandDetailResponse>} - Success response
     * @summary: Get metadata of a brand
     * @description: Fetch metadata of a brand such as name, information, logo, banner, etc.
     */
    getBrandDetailBySlug({ slug }?: {
        slug: string;
    }): Promise<BrandDetailResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.department] - The name of the department. Use this
     *   parameter to filter products by a particular department. See the list
     *   of available departments below. Also, you can get available departments
     *   from the endpoint /service/application/catalog/v1.0/departments/
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @returns {Promise<BrandListingResponse>} - Success response
     * @summary: Get all the brands
     * @description: A brand is the name under which a product is sold. Use this API to list all the brands. You can also filter the brands by department.
     */
    getBrands({ department, pageNo, pageSize }?: {
        department?: string;
        pageNo?: number;
        pageSize?: number;
    }): Promise<BrandListingResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.department] - The name of the department. Use this
     *   parameter to filter products by a particular department. See the list
     *   of available departments below. Also, you can get available departments
     *   from the endpoint /service/application/catalog/v1.0/departments/
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @summary: Get all the brands
     * @description: A brand is the name under which a product is sold. Use this API to list all the brands. You can also filter the brands by department.
     */
    getBrandsPaginator({ department, pageSize }?: {
        department?: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.department] - The name of the department. Use this
     *   parameter to filter products by a particular department. See the list
     *   of available departments below. Also, you can get available departments
     *   from the endpoint /service/application/catalog/v1.0/departments/
     * @returns {Promise<CategoryListingResponse>} - Success response
     * @summary: List all the categories
     * @description: Use this API to list all the categories. You can also filter the categories by department.
     */
    getCategories({ department }?: {
        department?: string;
    }): Promise<CategoryListingResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a brand. You can get slug value from the endpoint
     *   /service/application/catalog/v1.0/brands/.
     * @returns {Promise<CategoryMetaResponse>} - Success response
     * @summary: Get metadata of a category
     * @description: Fetch metadata of a category such as name, information, logo, banner, etc.
     */
    getCategoryDetailBySlug({ slug }?: {
        slug: string;
    }): Promise<CategoryMetaResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a collection. You can get slug value from the endpoint
     *   /service/application/catalog/v1.0/collections/.
     * @returns {Promise<CollectionDetailResponse>} - Success response
     * @summary: Get a particular collection
     * @description: Get the details of a collection by its `slug`.
     */
    getCollectionDetailBySlug({ slug }?: {
        slug: string;
    }): Promise<CollectionDetailResponse>;
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
     * @param {string} [arg.pageId] - Page ID to retrieve next set of results.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @param {number} [arg.pageNo] - Page Number to retrieve next set of results.
     * @param {string} [arg.pageType] - Page Type to retrieve set of results can
     *   be cursor or number.
     * @returns {Promise<ProductListingResponse>} - Success response
     * @summary: Get the items in a collection
     * @description: Get items in a collection specified by its `slug`.
     */
    getCollectionItemsBySlug({ slug, f, q, filters, sortOn, pageId, pageSize, pageNo, pageType, }?: {
        slug: string;
        f?: string;
        q?: string;
        filters?: boolean;
        sortOn?: string;
        pageId?: string;
        pageSize?: number;
        pageNo?: number;
        pageType?: string;
    }): Promise<ProductListingResponse>;
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
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @param {string[]} [arg.tag] - List of tags to filter collections
     * @param {string} [arg.q] - Name of the collection to filter collection
     * @returns {Promise<GetCollectionListingResponse>} - Success response
     * @summary: List all the collections
     * @description: Collections are a great way to organize your products and can improve the ability for customers to find items quickly and efficiently.
     */
    getCollections({ pageNo, pageSize, tag, q }?: {
        pageNo?: number;
        pageSize?: number;
        tag?: string[];
        q?: string;
    }): Promise<GetCollectionListingResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @param {string[]} [arg.tag] - List of tags to filter collections
     * @param {string} [arg.q] - Name of the collection to filter collection
     * @summary: List all the collections
     * @description: Collections are a great way to organize your products and can improve the ability for customers to find items quickly and efficiently.
     */
    getCollectionsPaginator({ pageSize, tag, q }?: {
        pageSize?: number;
        tag?: string[];
        q?: string;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a product. You can get slug value from the endpoint
     *   /service/application/catalog/v1.0/products/
     * @returns {Promise<ProductFrequentlyComparedSimilarResponse>} - Success response
     * @summary: Get comparison between frequently compared products with the given product
     * @description: Use this API to compare a given product automatically with products that are frequently compared with it. Only one slug is needed.
     */
    getComparedFrequentlyProductBySlug({ slug }?: {
        slug: string;
    }): Promise<ProductFrequentlyComparedSimilarResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<DepartmentResponse>} - Success response
     * @summary: List all the departments
     * @description: Departments are a way to categorise similar products. A product can lie in multiple departments. For example, a skirt can below to the 'Women's Fashion' Department while a handbag can lie in 'Women's Accessories' Department. Use this API to list all the departments. If successful, returns the list of departments specified in `DepartmentResponse`
     */
    getDepartments({}?: any): Promise<DepartmentResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.collectionType] - Type of collection, i.e. products,
     *   brands, collections.
     * @returns {Promise<FollowIdsResponse>} - Success response
     * @summary: Get the IDs of followed products, brands and collections.
     * @description: You can get the IDs of all the followed Products, Brands and Collections. Pass collection_type as query parameter to fetch specific Ids
     */
    getFollowIds({ collectionType }?: {
        collectionType?: string;
    }): Promise<FollowIdsResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.collectionType - Type of collection followed, i.e.
     *   products, brands, or collections.
     * @param {string} [arg.pageId] - Page ID to retrieve next set of results.
     * @param {number} [arg.pageSize] - Page ID to retrieve next set of results.
     * @returns {Promise<GetFollowListingResponse>} - Success response
     * @summary: Get a list of followed Products, Brands, Collections
     * @description: Users can follow a product they like. This API retrieves the products the user have followed.
     */
    getFollowedListing({ collectionType, pageId, pageSize }?: {
        collectionType: string;
        pageId?: string;
        pageSize?: number;
    }): Promise<GetFollowListingResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.collectionType - Type of collection followed, i.e.
     *   products, brands, or collections.
     * @param {number} [arg.pageSize] - Page ID to retrieve next set of results.
     * @summary: Get a list of followed Products, Brands, Collections
     * @description: Users can follow a product they like. This API retrieves the products the user have followed.
     */
    getFollowedListingPaginator({ collectionType, pageSize }?: {
        collectionType: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.collectionType - Type of collection, i.e. products,
     *   brands, or collections.
     * @param {string} arg.collectionId - The ID of the collection type.
     * @returns {Promise<FollowerCountResponse>} - Success response
     * @summary: Get Follow Count
     * @description: Get the total count of followers for a given collection type and collection ID.
     */
    getFollowerCountById({ collectionType, collectionId }?: {
        collectionType: string;
        collectionId: string;
    }): Promise<FollowerCountResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.sortOn] - The order in which the list of products
     *   should be sorted, e.g. popularity, price, latest and discount, in
     *   either ascending or descending order.
     * @param {string} [arg.pageId] - Page ID to retrieve next set of results.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @returns {Promise<HomeListingResponse>} - Success response
     * @summary: List the products
     * @description: List all the products associated with a brand, collection or category in a random order.
     */
    getHomeProducts({ sortOn, pageId, pageSize }?: {
        sortOn?: string;
        pageId?: string;
        pageSize?: number;
    }): Promise<HomeListingResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.sortOn] - The order in which the list of products
     *   should be sorted, e.g. popularity, price, latest and discount, in
     *   either ascending or descending order.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @summary: List the products
     * @description: List all the products associated with a brand, collection or category in a random order.
     */
    getHomeProductsPaginator({ sortOn, pageSize }?: {
        sortOn?: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
     * @param {string} [arg.q] - Search a store by its name or store_code.
     * @param {string} [arg.city] - Search stores by the city in which they are situated.
     * @param {number} [arg.range] - Use this to retrieve stores within a
     *   particular range in meters, e.g. 10000, to indicate a 10km range
     * @param {number} [arg.latitude] - Latitude of the location from where one
     *   wants to retreive the nearest stores, e.g. 72.8691788
     * @param {number} [arg.longitude] - Longitude of the location from where
     *   one wants to retreive the nearest stores, e.g. 19.1174114
     * @returns {Promise<ApplicationStoreListing>} - Success response
     * @summary: Get store meta information.
     * @description: Use this API to get a list of stores in a specific application.
     */
    getInStockLocations({ pageNo, pageSize, q, city, range, latitude, longitude, }?: {
        pageNo?: number;
        pageSize?: number;
        q?: string;
        city?: string;
        range?: number;
        latitude?: number;
        longitude?: number;
    }): Promise<ApplicationStoreListing>;
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
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.locationId - Unique Location ID.
     * @returns {Promise<StoreDetails>} - Success response
     * @summary: Get store meta information.
     * @description: Use this API to get meta details for a store.
     */
    getLocationDetailsById({ locationId }?: {
        locationId: number;
    }): Promise<StoreDetails>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.slug] - Product slug for which bundles need to be fetched.
     * @param {string} [arg.id] - Product uid
     * @returns {Promise<ProductBundle>} - Success response
     * @summary: Get product bundles
     * @description: Use this API to retrieve products bundles to the one specified by its slug.
     */
    getProductBundlesBySlug({ slug, id }?: {
        slug?: string;
        id?: string;
    }): Promise<ProductBundle>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string[]} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a product. You can get slug value from the endpoint
     *   /service/application/catalog/v1.0/products/.
     * @returns {Promise<ProductsComparisonResponse>} - Success response
     * @summary: Compare products
     * @description: Use this API to compare the features of products belonging to the same category. Note that at least one slug is mandatory in the request query.
     */
    getProductComparisonBySlugs({ slug }?: {
        slug: string[];
    }): Promise<ProductsComparisonResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a product. You can get slug value from the endpoint
     *   /service/application/catalog/v1.0/products/
     * @returns {Promise<ProductDetail>} - Success response
     * @summary: Get a product
     * @description: Use this API to retrieve a product by its slug value.
     */
    getProductDetailBySlug({ slug }?: {
        slug: string;
    }): Promise<ProductDetail>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a product. You can get slug value from the endpoint
     *   /service/application/catalog/v1.0/products/
     * @param {string} arg.size - A string indicating the size of the product,
     *   e.g. S, M, XL. You can get slug value from the endpoint
     *   /service/application/catalog/v1.0/products/sizes
     * @param {number} [arg.storeId] - The ID of the store that is selling the
     *   product, e.g. 1,2,3.
     * @param {string} [arg.pincode] - The PIN Code of the area near which the
     *   selling locations should be searched, e.g. 400059.
     * @param {number} [arg.moq] - An Integer indication the Minimum Order
     *   Quantity of a product, e.g. 100.
     * @returns {Promise<ProductSizePriceResponseV3>} - Success response
     * @summary: Get the price of a product size at a PIN Code
     * @description: Prices may vary for different sizes of a product. Use this API to retrieve the price of a product size at all the selling locations near to a PIN Code.
     */
    getProductPriceBySlug({ slug, size, storeId, pincode, moq }?: {
        slug: string;
        size: string;
        storeId?: number;
        pincode?: string;
        moq?: number;
    }): Promise<ProductSizePriceResponseV3>;
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
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @returns {Promise<ProductSizeSellersResponseV3>} - Success response
     * @summary: Get the sellers of a product size at a PIN Code
     * @description: A product of a particular size may be sold by multiple sellers. Use this API to fetch the sellers having the stock of a particular size at a given PIN Code.
     */
    getProductSellersBySlug({ slug, size, pincode, strategy, pageNo, pageSize, }?: {
        slug: string;
        size: string;
        pincode?: string;
        strategy?: string;
        pageNo?: number;
        pageSize?: number;
    }): Promise<ProductSizeSellersResponseV3>;
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
     * @summary: Get the sellers of a product size at a PIN Code
     * @description: A product of a particular size may be sold by multiple sellers. Use this API to fetch the sellers having the stock of a particular size at a given PIN Code.
     */
    getProductSellersBySlugPaginator({ slug, size, pincode, strategy, pageSize, }?: {
        slug: string;
        size: string;
        pincode?: string;
        strategy?: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a product. You can get slug value from the endpoint
     *   /service/application/catalog/v1.0/products/
     * @param {number} [arg.storeId] - The ID of the store that is selling the
     *   product, e.g. 1,2,3.
     * @returns {Promise<ProductSizes>} - Success response
     * @summary: Get the sizes of a product
     * @description: A product can have multiple sizes. Use this API to fetch all the available sizes of a product.
     */
    getProductSizesBySlug({ slug, storeId }?: {
        slug: string;
        storeId?: number;
    }): Promise<ProductSizes>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.itemId] - The Item ID of the product (Max. 50 allowed)
     * @param {string} [arg.alu] - ALU of the product (limited upto 50 ALU
     *   identifier in a single request)
     * @param {string} [arg.skuCode] - Stock-keeping Unit of the product
     *   (limited upto 50 SKU Code in a single request)
     * @param {string} [arg.ean] - European Article Number of the product
     *   (limited upto 50 EAN identifier in a single request)
     * @param {string} [arg.upc] - Universal Product Code of the product
     *   (limited upto 50 UPC identifier in a single request)
     * @returns {Promise<ProductStockStatusResponse>} - Success response
     * @summary: Get the stock of a product
     * @description: Retrieve the available stock of the products. Use this API to retrieve stock of multiple products (up to 50) at a time.
     */
    getProductStockByIds({ itemId, alu, skuCode, ean, upc }?: {
        itemId?: string;
        alu?: string;
        skuCode?: string;
        ean?: string;
        upc?: string;
    }): Promise<ProductStockStatusResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.timestamp - Timestamp in UTC format (2020-07-23T10:27:50Z)
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @param {string} [arg.pageId] - Page ID to retrieve next set of results.
     * @returns {Promise<ProductStockPolling>} - Success response
     * @summary: Get the stock of a product
     * @description: Retrieve the available stock of the products. Use this API to get the stock status of products whose inventory is updated at the specified time
     */
    getProductStockForTimeByIds({ timestamp, pageSize, pageId }?: {
        timestamp: string;
        pageSize?: number;
        pageId?: string;
    }): Promise<ProductStockPolling>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.timestamp - Timestamp in UTC format (2020-07-23T10:27:50Z)
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @summary: Get the stock of a product
     * @description: Retrieve the available stock of the products. Use this API to get the stock status of products whose inventory is updated at the specified time
     */
    getProductStockForTimeByIdsPaginator({ timestamp, pageSize }?: {
        timestamp: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a product. You can get slug value from the endpoint
     *   /service/application/catalog/v1.0/products/
     * @returns {Promise<ProductVariantsResponse>} - Success response
     * @summary: Get variant of a particular product
     * @description: A product can have a different type of variants such as colour, shade, memory. Use this API to fetch all the available variants of a product using its slug.
     */
    getProductVariantsBySlug({ slug }?: {
        slug: string;
    }): Promise<ProductVariantsResponse>;
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
     * @param {string} [arg.pageId] - Page ID to retrieve next set of results.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results.
     * @param {string} [arg.pageType] - Available pagination types are cursor or number.
     * @returns {Promise<ProductListingResponse>} - Success response
     * @summary: Get all the products
     * @description: Use this API to list all the products. You may choose a sort order or make arbitrary search queries by entering the product name, brand, category or collection.
     */
    getProducts({ q, f, filters, sortOn, pageId, pageSize, pageNo, pageType, }?: {
        q?: string;
        f?: string;
        filters?: boolean;
        sortOn?: string;
        pageId?: string;
        pageSize?: number;
        pageNo?: number;
        pageType?: string;
    }): Promise<ProductListingResponse>;
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
     * @summary: Get all the products
     * @description: Use this API to list all the products. You may choose a sort order or make arbitrary search queries by entering the product name, brand, category or collection.
     */
    getProductsPaginator({ q, f, filters, sortOn, pageSize }?: {
        q?: string;
        f?: string;
        filters?: boolean;
        sortOn?: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.q - The search query for entering partial or full
     *   name of a product, brand or category. For example, if the given search
     *   query `q` is _ski_, the relevant search suggestions could be _skirt_,
     *   _ski shoes_, __skin cream_ etc.
     * @returns {Promise<AutoCompleteResponse>} - Success response
     * @summary: Get relevant suggestions for a search query
     * @description: Retrieves a list of suggestions for a given search query. Each suggestion is a valid search term that's generated on the basis of query. This is particularly useful to enhance the user experience while using the search tool.
     */
    getSearchResults({ q }?: {
        q: string;
    }): Promise<AutoCompleteResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a product. You can get slug value from the endpoint
     *   /service/application/catalog/v1.0/products/
     * @returns {Promise<ProductCompareResponse>} - Success response
     * @summary: Get comparison between similar products
     * @description: Use this API to compare a given product automatically with similar products. Only one slug is needed.
     */
    getSimilarComparisonProductBySlug({ slug }?: {
        slug: string;
    }): Promise<ProductCompareResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
     * @param {string} [arg.q] - Search a store by its name or store_code.
     * @param {string} [arg.city] - Search stores by the city in which they are situated.
     * @param {number} [arg.range] - Use this to retrieve stores within a
     *   particular range in meters, e.g. 10000, to indicate a 10km range
     * @param {number} [arg.latitude] - Latitude of the location from where one
     *   wants to retreive the nearest stores, e.g. 72.8691788
     * @param {number} [arg.longitude] - Longitude of the location from where
     *   one wants to retreive the nearest stores, e.g. 19.1174114
     * @returns {Promise<StoreListingResponse>} - Success response
     * @summary: Get store meta information.
     * @description: Use this API to get a list of stores in a specific application.
     */
    getStores({ pageNo, pageSize, q, city, range, latitude, longitude, }?: {
        pageNo?: number;
        pageSize?: number;
        q?: string;
        city?: string;
        range?: number;
        latitude?: number;
        longitude?: number;
    }): Promise<StoreListingResponse>;
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
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.collectionType - Type of collection followed, i.e.
     *   products, brands, or collections.
     * @param {string} arg.collectionId - The ID of the collection type.
     * @returns {Promise<FollowPostResponse>} - Success response
     * @summary: Unfollow an entity (product/brand/collection)
     * @description: You can undo a followed product, brand or collection by its ID. This action is referred as _unfollow_.
     */
    unfollowById({ collectionType, collectionId }?: {
        collectionType: string;
        collectionId: string;
    }): Promise<FollowPostResponse>;
}
import Paginator = require("../../common/Paginator");
