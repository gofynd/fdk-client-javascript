export = ApplicationClient;
declare class ApplicationClient {
    constructor(config: any);
    catalog: Catalog;
    cart: Cart;
    lead: Lead;
    theme: Theme;
    user: User;
    content: Content;
    communication: Communication;
    share: Share;
    fileStorage: FileStorage;
    configuration: Configuration;
    payment: Payment;
    order: Order;
    rewards: Rewards;
    feedback: Feedback;
    posCart: PosCart;
    logistic: Logistic;
}
declare class Catalog {
    constructor(_conf: any);
    _conf: any;
    /**
      *
      * @summary: Get a product
      * @description: Use this API to retrieve a product by its slug value.
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a product. You can get slug value from the endpoint /service/application/catalog/v1.0/products/
      
      **/
    getProductDetailBySlug({ slug }?: {
        slug: string;
    }): any;
    /**
      *
      * @summary: Get the sizes of a product
      * @description: A product can have multiple sizes. Use this API to fetch all the available sizes of a product.
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a product. You can get slug value from the endpoint /service/application/catalog/v1.0/products/
      * @param {number} [arg.storeId] - The ID of the store that is selling the product, e.g. 1,2,3.
      
      **/
    getProductSizesBySlug({ slug, storeId }?: {
        slug: string;
        storeId?: number;
    }): any;
    /**
      *
      * @summary: Get the price of a product size at a PIN Code
      * @description: Prices may vary for different sizes of a product. Use this API to retrieve the price of a product size at all the selling locations near to a PIN Code.
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a product. You can get slug value from the endpoint /service/application/catalog/v1.0/products/
      * @param {string} arg.size - A string indicating the size of the product, e.g. S, M, XL. You can get slug value from the endpoint /service/application/catalog/v1.0/products/sizes
      * @param {string} arg.pincode - The PIN Code of the area near which the selling locations should be searched, e.g. 400059
      * @param {string} [arg.storeId] - The ID of the store that is selling the product, e.g. 1,2,3.
      
      **/
    getProductPriceBySlug({ slug, size, pincode, storeId }?: {
        slug: string;
        size: string;
        pincode: string;
        storeId?: string;
    }): any;
    /**
      *
      * @summary: Get the sellers of a product size at a PIN Code
      * @description: A product of a particular size may be sold by multiple sellers. Use this API to fetch the sellers having the stock of a particular size at a given PIN Code.
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a product. You can get slug value from the endpoint /service/application/catalog/v1.0/products/
      * @param {string} arg.size - A string indicating the size of the product, e.g. S, M, XL. You can get slug value from the endpoint /service/application/catalog/v1.0/products/sizes
      * @param {string} arg.pincode - The 6-digit PIN Code of the area near which the selling locations should be searched, e.g. 400059
      * @param {string} [arg.strategy] - Sort stores on the basis of strategy. eg, fast-delivery, low-price, optimal.
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results.
      * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
      
      **/
    getProductSellersBySlug({ slug, size, pincode, strategy, pageNo, pageSize, }?: {
        slug: string;
        size: string;
        pincode: string;
        strategy?: string;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get the sellers of a product size at a PIN Code
      * @description: A product of a particular size may be sold by multiple sellers. Use this API to fetch the sellers having the stock of a particular size at a given PIN Code.
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a product. You can get slug value from the endpoint /service/application/catalog/v1.0/products/
      * @param {string} arg.size - A string indicating the size of the product, e.g. S, M, XL. You can get slug value from the endpoint /service/application/catalog/v1.0/products/sizes
      * @param {string} arg.pincode - The 6-digit PIN Code of the area near which the selling locations should be searched, e.g. 400059
      * @param {string} [arg.strategy] - Sort stores on the basis of strategy. eg, fast-delivery, low-price, optimal.
      * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
      
      **/
    getProductSellersBySlugPaginator({ slug, size, pincode, strategy, pageSize, }?: {
        slug: string;
        size: string;
        pincode: string;
        strategy?: string;
        pageSize?: number;
    }): Paginator;
    /**
      *
      * @summary: Compare products
      * @description: Use this API to compare the features of products belonging to the same category. Note that at least one slug is mandatory in the request query.
      * @param {Object} arg - arg object.
      * @param {Array<string>} arg.slug - A short, human-readable, URL-friendly identifier of a product. You can get slug value from the endpoint /service/application/catalog/v1.0/products/.
      
      **/
    getProductComparisonBySlugs({ slug }?: {
        slug: Array<string>;
    }): any;
    /**
      *
      * @summary: Get comparison between similar products
      * @description: Use this API to compare a given product automatically with similar products. Only one slug is needed.
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a product. You can get slug value from the endpoint /service/application/catalog/v1.0/products/
      
      **/
    getSimilarComparisonProductBySlug({ slug }?: {
        slug: string;
    }): any;
    /**
      *
      * @summary: Get comparison between frequently compared products with the given product
      * @description: Use this API to compare a given product automatically with products that are frequently compared with it. Only one slug is needed.
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a product. You can get slug value from the endpoint /service/application/catalog/v1.0/products/
      
      **/
    getComparedFrequentlyProductBySlug({ slug }?: {
        slug: string;
    }): any;
    /**
      *
      * @summary: Get similar products
      * @description: Use this API to retrieve products similar to the one specified by its slug. You can search not only similar looking products, but also those that are sold by same seller, or those that belong to the same category, price, specifications, etc.
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a product. You can get slug value from the endpoint /service/application/catalog/v1.0/products/
      * @param {string} arg.similarType - Similarity criteria such as basic, visual, price, seller, category and spec. Visual - Products having similar patterns, Price - Products in similar price range, Seller - Products sold by the same seller, Category - Products belonging to the same category, e.g. sports shoes, Spec - Products having similar specifications, e.g. phones with same memory.
      
      **/
    getProductSimilarByIdentifier({ slug, similarType }?: {
        slug: string;
        similarType: string;
    }): any;
    /**
      *
      * @summary: Get variant of a particular product
      * @description: A product can have a different type of variants such as colour, shade, memory. Use this API to fetch all the available variants of a product using its slug.
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a product. You can get slug value from the endpoint /service/application/catalog/v1.0/products/
      
      **/
    getProductVariantsBySlug({ slug }?: {
        slug: string;
    }): any;
    /**
      *
      * @summary: Get the stock of a product
      * @description: Retrieve the available stock of the products. Use this API to retrieve stock of multiple products (up to 50) at a time.
      * @param {Object} arg - arg object.
      * @param {string} [arg.itemId] - The Item ID of the product (Max. 50 allowed)
      * @param {string} [arg.alu] - ALU of the product (limited upto 50 ALU identifier in a single request)
      * @param {string} [arg.skuCode] - Stock-keeping Unit of the product (limited upto 50 SKU Code in a single request)
      * @param {string} [arg.ean] - European Article Number of the product (limited upto 50 EAN identifier in a single request)
      * @param {string} [arg.upc] - Universal Product Code of the product (limited upto 50 UPC identifier in a single request)
      
      **/
    getProductStockByIds({ itemId, alu, skuCode, ean, upc }?: {
        itemId?: string;
        alu?: string;
        skuCode?: string;
        ean?: string;
        upc?: string;
    }): any;
    /**
      *
      * @summary: Get the stock of a product
      * @description: Retrieve the available stock of the products. Use this API to get the stock status of products whose inventory is updated at the specified time
      * @param {Object} arg - arg object.
      * @param {string} arg.timestamp - Timestamp in UTC format (2020-07-23T10:27:50Z)
      * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
      * @param {string} [arg.pageId] - Page ID to retrieve next set of results.
      
      **/
    getProductStockForTimeByIds({ timestamp, pageSize, pageId }?: {
        timestamp: string;
        pageSize?: number;
        pageId?: string;
    }): any;
    /**
      *
      * @summary: Get the stock of a product
      * @description: Retrieve the available stock of the products. Use this API to get the stock status of products whose inventory is updated at the specified time
      * @param {Object} arg - arg object.
      * @param {string} arg.timestamp - Timestamp in UTC format (2020-07-23T10:27:50Z)
      * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
      
      **/
    getProductStockForTimeByIdsPaginator({ timestamp, pageSize }?: {
        timestamp: string;
        pageSize?: number;
    }): Paginator;
    /**
      *
      * @summary: Get all the products
      * @description: Use this API to list all the products. You may choose a sort order or make arbitrary search queries by entering the product name, brand, category or collection.
      * @param {Object} arg - arg object.
      * @param {string} [arg.q] - The search query for entering partial or full name of product, brand, category, or collection.
      * @param {string} [arg.f] - The search filter parameters. Filter parameters will be passed in f parameter as shown in the example below. Double Pipe (||) denotes the OR condition, whereas Triple-colon (:::) indicates a new filter paramater applied as an AND condition.
      * @param {boolean} [arg.filters] - This is a boolean value, True for fetching all filter parameters and False for disabling the filter parameters.
      * @param {string} [arg.sortOn] - The order in which the list of products should be sorted, e.g. popularity, price, latest and discount, in either ascending or descending order. See the supported values below.
      * @param {string} [arg.pageId] - Page ID to retrieve next set of results.
      * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results.
      * @param {string} [arg.pageType] - Available pagination types are cursor or number.
      
      **/
    getProducts({ q, f, filters, sortOn, pageId, pageSize, pageNo, pageType, }?: {
        q?: string;
        f?: string;
        filters?: boolean;
        sortOn?: string;
        pageId?: string;
        pageSize?: number;
        pageNo?: number;
        pageType?: string;
    }): any;
    /**
      *
      * @summary: Get all the products
      * @description: Use this API to list all the products. You may choose a sort order or make arbitrary search queries by entering the product name, brand, category or collection.
      * @param {Object} arg - arg object.
      * @param {string} [arg.q] - The search query for entering partial or full name of product, brand, category, or collection.
      * @param {string} [arg.f] - The search filter parameters. Filter parameters will be passed in f parameter as shown in the example below. Double Pipe (||) denotes the OR condition, whereas Triple-colon (:::) indicates a new filter paramater applied as an AND condition.
      * @param {boolean} [arg.filters] - This is a boolean value, True for fetching all filter parameters and False for disabling the filter parameters.
      * @param {string} [arg.sortOn] - The order in which the list of products should be sorted, e.g. popularity, price, latest and discount, in either ascending or descending order. See the supported values below.
      * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
      
      **/
    getProductsPaginator({ q, f, filters, sortOn, pageSize }?: {
        q?: string;
        f?: string;
        filters?: boolean;
        sortOn?: string;
        pageSize?: number;
    }): Paginator;
    /**
      *
      * @summary: Get all the brands
      * @description: A brand is the name under which a product is sold. Use this API to list all the brands. You can also filter the brands by department.
      * @param {Object} arg - arg object.
      * @param {string} [arg.department] - The name of the department. Use this parameter to filter products by a particular department. See the list of available departments below. Also, you can get available departments from the endpoint /service/application/catalog/v1.0/departments/
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results.
      * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
      
      **/
    getBrands({ department, pageNo, pageSize }?: {
        department?: string;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get all the brands
      * @description: A brand is the name under which a product is sold. Use this API to list all the brands. You can also filter the brands by department.
      * @param {Object} arg - arg object.
      * @param {string} [arg.department] - The name of the department. Use this parameter to filter products by a particular department. See the list of available departments below. Also, you can get available departments from the endpoint /service/application/catalog/v1.0/departments/
      * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
      
      **/
    getBrandsPaginator({ department, pageSize }?: {
        department?: string;
        pageSize?: number;
    }): Paginator;
    /**
      *
      * @summary: Get metadata of a brand
      * @description: Fetch metadata of a brand such as name, information, logo, banner, etc.
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a brand. You can get slug value from the endpoint /service/application/catalog/v1.0/brands/.
      
      **/
    getBrandDetailBySlug({ slug }?: {
        slug: string;
    }): any;
    /**
      *
      * @summary: List all the categories
      * @description: Use this API to list all the categories. You can also filter the categories by department.
      * @param {Object} arg - arg object.
      * @param {string} [arg.department] - The name of the department. Use this parameter to filter products by a particular department. See the list of available departments below. Also, you can get available departments from the endpoint /service/application/catalog/v1.0/departments/
      
      **/
    getCategories({ department }?: {
        department?: string;
    }): any;
    /**
      *
      * @summary: Get metadata of a category
      * @description: Fetch metadata of a category such as name, information, logo, banner, etc.
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a brand. You can get slug value from the endpoint /service/application/catalog/v1.0/brands/.
      
      **/
    getCategoryDetailBySlug({ slug }?: {
        slug: string;
    }): any;
    /**
      *
      * @summary: List the products
      * @description: List all the products associated with a brand, collection or category in a random order.
      * @param {Object} arg - arg object.
      * @param {string} [arg.sortOn] - The order in which the list of products should be sorted, e.g. popularity, price, latest and discount, in either ascending or descending order.
      * @param {string} [arg.pageId] - Page ID to retrieve next set of results.
      * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
      
      **/
    getHomeProducts({ sortOn, pageId, pageSize }?: {
        sortOn?: string;
        pageId?: string;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: List the products
      * @description: List all the products associated with a brand, collection or category in a random order.
      * @param {Object} arg - arg object.
      * @param {string} [arg.sortOn] - The order in which the list of products should be sorted, e.g. popularity, price, latest and discount, in either ascending or descending order.
      * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
      
      **/
    getHomeProductsPaginator({ sortOn, pageSize }?: {
        sortOn?: string;
        pageSize?: number;
    }): Paginator;
    /**
      *
      * @summary: List all the departments
      * @description: Departments are a way to categorise similar products. A product can lie in multiple departments. For example, a skirt can below to the 'Women's Fashion' Department while a handbag can lie in 'Women's Accessories' Department. Use this API to list all the departments. If successful, returns the list of departments specified in `DepartmentResponse`
      * @param {Object} arg - arg object.
      
      **/
    getDepartments({}?: any): any;
    /**
      *
      * @summary: Get relevant suggestions for a search query
      * @description: Retrieves a list of suggestions for a given search query. Each suggestion is a valid search term that's generated on the basis of query. This is particularly useful to enhance the user experience while using the search tool.
      * @param {Object} arg - arg object.
      * @param {string} arg.q - The search query for entering partial or full name of a product, brand or category. For example, if the given search query `q` is _ski_, the relevant search suggestions could be _skirt_, _ski shoes_, __skin cream_ etc.
      
      **/
    getSearchResults({ q }?: {
        q: string;
    }): any;
    /**
      *
      * @summary: List all the collections
      * @description: Collections are a great way to organize your products and can improve the ability for customers to find items quickly and efficiently.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results.
      * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
      
      **/
    getCollections({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: List all the collections
      * @description: Collections are a great way to organize your products and can improve the ability for customers to find items quickly and efficiently.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
      
      **/
    getCollectionsPaginator({ pageSize }?: {
        pageSize?: number;
    }): Paginator;
    /**
      *
      * @summary: Get the items in a collection
      * @description: Get items in a collection specified by its `slug`.
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a collection. You can get slug value from the endpoint /service/application/catalog/v1.0/collections/.
      * @param {string} [arg.f] - The search filter parameters. Filter parameters will be passed in f parameter as shown in the example below. Double Pipe (||) denotes the OR condition, whereas Triple-colon (:::) indicates a new filter paramater applied as an AND condition.
      * @param {boolean} [arg.filters] - This is a boolean value, True for fetching all filter parameters and False for disabling the filter parameters.
      * @param {string} [arg.sortOn] - The order in which the list of products should be sorted, e.g. popularity, price, latest and discount, in either ascending or descending order. See the supported values below.
      * @param {string} [arg.pageId] - Page ID to retrieve next set of results.
      * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
      
      **/
    getCollectionItemsBySlug({ slug, f, filters, sortOn, pageId, pageSize, }?: {
        slug: string;
        f?: string;
        filters?: boolean;
        sortOn?: string;
        pageId?: string;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get the items in a collection
      * @description: Get items in a collection specified by its `slug`.
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a collection. You can get slug value from the endpoint /service/application/catalog/v1.0/collections/.
      * @param {string} [arg.f] - The search filter parameters. Filter parameters will be passed in f parameter as shown in the example below. Double Pipe (||) denotes the OR condition, whereas Triple-colon (:::) indicates a new filter paramater applied as an AND condition.
      * @param {boolean} [arg.filters] - This is a boolean value, True for fetching all filter parameters and False for disabling the filter parameters.
      * @param {string} [arg.sortOn] - The order in which the list of products should be sorted, e.g. popularity, price, latest and discount, in either ascending or descending order. See the supported values below.
      * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
      
      **/
    getCollectionItemsBySlugPaginator({ slug, f, filters, sortOn, pageSize, }?: {
        slug: string;
        f?: string;
        filters?: boolean;
        sortOn?: string;
        pageSize?: number;
    }): Paginator;
    /**
      *
      * @summary: Get a particular collection
      * @description: Get the details of a collection by its `slug`.
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a collection. You can get slug value from the endpoint /service/application/catalog/v1.0/collections/.
      
      **/
    getCollectionDetailBySlug({ slug }?: {
        slug: string;
    }): any;
    /**
      *
      * @summary: Get a list of followed Products, Brands, Collections
      * @description: Users can follow a product they like. This API retrieves the products the user have followed.
      * @param {Object} arg - arg object.
      * @param {string} arg.collectionType - Type of collection followed, i.e. products, brands, or collections.
      * @param {string} [arg.pageId] - Page ID to retrieve next set of results.
      * @param {number} [arg.pageSize] - Page ID to retrieve next set of results.
      
      **/
    getFollowedListing({ collectionType, pageId, pageSize }?: {
        collectionType: string;
        pageId?: string;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get a list of followed Products, Brands, Collections
      * @description: Users can follow a product they like. This API retrieves the products the user have followed.
      * @param {Object} arg - arg object.
      * @param {string} arg.collectionType - Type of collection followed, i.e. products, brands, or collections.
      * @param {number} [arg.pageSize] - Page ID to retrieve next set of results.
      
      **/
    getFollowedListingPaginator({ collectionType, pageSize }?: {
        collectionType: string;
        pageSize?: number;
    }): Paginator;
    /**
      *
      * @summary: Follow an entity (product/brand/collection)
      * @description: Follow a particular entity such as product, brand, collection specified by its ID.
      * @param {Object} arg - arg object.
      * @param {string} arg.collectionType - Type of collection followed, i.e. products, brands, or collections.
      * @param {string} arg.collectionId - The ID of the collection type.
      
      **/
    followById({ collectionType, collectionId }?: {
        collectionType: string;
        collectionId: string;
    }): any;
    /**
      *
      * @summary: Unfollow an entity (product/brand/collection)
      * @description: You can undo a followed product, brand or collection by its ID. This action is referred as _unfollow_.
      * @param {Object} arg - arg object.
      * @param {string} arg.collectionType - Type of collection followed, i.e. products, brands, or collections.
      * @param {string} arg.collectionId - The ID of the collection type.
      
      **/
    unfollowById({ collectionType, collectionId }?: {
        collectionType: string;
        collectionId: string;
    }): any;
    /**
      *
      * @summary: Get Follow Count
      * @description: Get the total count of followers for a given collection type and collection ID.
      * @param {Object} arg - arg object.
      * @param {string} arg.collectionType - Type of collection, i.e. products, brands, or collections.
      * @param {string} arg.collectionId - The ID of the collection type.
      
      **/
    getFollowerCountById({ collectionType, collectionId }?: {
        collectionType: string;
        collectionId: string;
    }): any;
    /**
      *
      * @summary: Get the IDs of followed products, brands and collections.
      * @description: You can get the IDs of all the followed Products, Brands and Collections. Pass collection_type as query parameter to fetch specific Ids
      * @param {Object} arg - arg object.
      * @param {string} [arg.collectionType] - Type of collection, i.e. products, brands, collections.
      
      **/
    getFollowIds({ collectionType }?: {
        collectionType?: string;
    }): any;
    /**
      *
      * @summary: Get store meta information.
      * @description: Use this API to get a list of stores in a specific application.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
      * @param {string} [arg.q] - Search a store by its name or store_code.
      * @param {number} [arg.range] - Use this to retrieve stores within a particular range in meters, e.g. 10000, to indicate a 10km range
      * @param {number} [arg.latitude] - Latitude of the location from where one wants to retreive the nearest stores, e.g. 72.8691788
      * @param {number} [arg.longitude] - Longitude of the location from where one wants to retreive the nearest stores, e.g. 19.1174114
      
      **/
    getStores({ pageNo, pageSize, q, range, latitude, longitude }?: {
        pageNo?: number;
        pageSize?: number;
        q?: string;
        range?: number;
        latitude?: number;
        longitude?: number;
    }): any;
    /**
      *
      * @summary: Get store meta information.
      * @description: Use this API to get a list of stores in a specific application.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
      * @param {string} [arg.q] - Search a store by its name or store_code.
      * @param {number} [arg.range] - Use this to retrieve stores within a particular range in meters, e.g. 10000, to indicate a 10km range
      * @param {number} [arg.latitude] - Latitude of the location from where one wants to retreive the nearest stores, e.g. 72.8691788
      * @param {number} [arg.longitude] - Longitude of the location from where one wants to retreive the nearest stores, e.g. 19.1174114
      
      **/
    getStoresPaginator({ pageSize, q, range, latitude, longitude }?: {
        pageSize?: number;
        q?: string;
        range?: number;
        latitude?: number;
        longitude?: number;
    }): Paginator;
}
declare class Cart {
    constructor(_conf: any);
    _conf: any;
    /**
      *
      * @summary: Fetch all Items Added to  Cart
      * @description: Get all the details of a items added to cart  by uid. If successful, returns a Cart resource in the response body specified in CartResponse
      * @param {Object} arg - arg object.
      * @param {number} [arg.uid] -
      * @param {boolean} [arg.i] -
      * @param {boolean} [arg.b] -
      * @param {number} [arg.assignCardId] -
      
      **/
    getCart({ uid, i, b, assignCardId }?: {
        uid?: number;
        i?: boolean;
        b?: boolean;
        assignCardId?: number;
    }): any;
    /**
      *
      * @summary: Fetch Last-Modified timestamp
      * @description: Fetch Last-Modified timestamp in header metadata
      * @param {Object} arg - arg object.
      * @param {number} [arg.uid] -
      
      **/
    getCartLastModified({ uid }?: {
        uid?: number;
    }): any;
    /**
     *
     * @summary: Add Items to Cart
     * @description: <p>Add Items to cart. See `AddCartRequest` in schema of request body for the list of attributes needed to add items to a cart. On successful request, returns cart response containing details of items, coupons available etc.these attributes will be fetched from the folowing api's</p>
     * @param {Object} arg - arg object.
     * @param {boolean} [arg.i] -
     * @param {boolean} [arg.b] -
     * @param {AddCartRequest} arg.body
     **/
    addItems({ body, i, b }?: {
        i?: boolean;
        b?: boolean;
        body: any;
    }): any;
    /**
     *
     * @summary: Update Items already added to Cart
     * @description: Request object containing attributes like item_quantity and item_size which can be updated .these attributes will be fetched from the folowing api's</p> <ul> <li><font color="monochrome">operation</font> Operation for current api call. <b>update_item</b> for update items. <b>remove_item</b> for removing items.</li> <li> <font color="monochrome">item_id</font>  "/platform/content/v1/products/"</li> <li> <font color="monochrome">item_size</font>   "/platform/content/v1/products/{slug}/sizes/"</li> <li> <font color="monochrome">quantity</font>  item quantity (must be greater than or equal to 1)</li> <li> <font color="monochrome">article_id</font>   "/content​/v1​/products​/{identifier}​/sizes​/price​/"</li> <li> <font color="monochrome">item_index</font>  item position in the cart (must be greater than or equal to 0)</li> </ul>
     * @param {Object} arg - arg object.
     * @param {number} [arg.uid] -
     * @param {boolean} [arg.i] -
     * @param {boolean} [arg.b] -
     * @param {UpdateCartRequest} arg.body
     **/
    updateCart({ body, uid, i, b }?: {
        uid?: number;
        i?: boolean;
        b?: boolean;
        body: any;
    }): any;
    /**
      *
      * @summary: Cart item count
      * @description: Get total count of item present in cart
      * @param {Object} arg - arg object.
      * @param {number} [arg.uid] - Cart id
      
      **/
    getItemCount({ uid }?: {
        uid?: number;
    }): any;
    /**
      *
      * @summary: Fetch Coupon
      * @description: Get all the details of a coupons applicable to cart  by uid. If successful, returns a Coupon resource in the response body specified in GetCouponResponse
      * @param {Object} arg - arg object.
      * @param {number} [arg.uid] -
      
      **/
    getCoupons({ uid }?: {
        uid?: number;
    }): any;
    /**
      *
      * @summary: Apply Coupon
      * @description: <p>Apply Coupons on Items added to cart. On successful request, returns cart response containing details of items ,coupons applied etc.these attributes will be consumed by  api</p> <ul> <li> <font color="monochrome">coupon_code</font></li>
  </ul>
      * @param {Object} arg - arg object.
      * @param {boolean} [arg.i] -
      * @param {boolean} [arg.b] -
      * @param {boolean} [arg.p] -
      * @param {number} [arg.uid] -
      * @param {ApplyCouponRequest} arg.body
      **/
    applyCoupon({ body, i, b, p, uid }?: {
        i?: boolean;
        b?: boolean;
        p?: boolean;
        uid?: number;
        body: any;
    }): any;
    /**
      *
      * @summary: Remove Coupon Applied
      * @description: Remove Coupon applied on the cart by passing uid in request body.
      * @param {Object} arg - arg object.
      * @param {number} [arg.uid] - Cart id
      
      **/
    removeCoupon({ uid }?: {
        uid?: number;
    }): any;
    /**
      *
      * @summary: Get discount offers based on quantity
      * @description: List applicable offers along with current, next and best offer for given product. Either one of **uid**, **item_id**, **slug** should be present*
      * @param {Object} arg - arg object.
      * @param {number} [arg.itemId] - Item id
      * @param {string} [arg.articleId] - Article mongo id
      * @param {number} [arg.uid] - Item id
      * @param {string} [arg.slug] - Item unique url from product page
      
      **/
    getBulkDiscountOffers({ itemId, articleId, uid, slug }?: {
        itemId?: number;
        articleId?: string;
        uid?: number;
        slug?: string;
    }): any;
    /**
     *
     * @summary: Fetch all Items Added to  Cart
     * @description: Get all the details of a items added to cart  by uid. If successful, returns a Cart resource in the response body specified in CartResponse
     * @param {Object} arg - arg object.
     * @param {number} [arg.uid] -
     * @param {boolean} [arg.i] -
     * @param {boolean} [arg.b] -
     * @param {RewardPointRequest} arg.body
     **/
    applyRewardPoints({ body, uid, i, b }?: {
        uid?: number;
        i?: boolean;
        b?: boolean;
        body: any;
    }): any;
    /**
      *
      * @summary: Fetch Address
      * @description: Get all the addresses associated with the account. If successful, returns a Address resource in the response body specified in GetAddressesResponse.attibutes listed below are optional <ul> <li> <font color="monochrome">uid</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
      * @param {Object} arg - arg object.
      * @param {number} [arg.uid] -
      * @param {string} [arg.mobileNo] -
      * @param {string} [arg.checkoutMode] -
      * @param {string} [arg.tags] -
      * @param {boolean} [arg.isDefault] -
      
      **/
    getAddresses({ uid, mobileNo, checkoutMode, tags, isDefault }?: {
        uid?: number;
        mobileNo?: string;
        checkoutMode?: string;
        tags?: string;
        isDefault?: boolean;
    }): any;
    /**
     *
     * @summary: Add Address to the account
     * @description: <p>Add Address to account. See `Address` in schema of request body for the list of attributes needed to add Address to account. On successful request, returns response containing address_id ,is_default_address and success message.
     * @param {Object} arg - arg object.
     * @param {Address} arg.body
     **/
    addAddress({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Fetch Single Address
      * @description: Get a addresses with the given id. If successful, returns a Address resource in the response body specified in `Address`.attibutes listed below are optional <ul> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
      * @param {Object} arg - arg object.
      * @param {number} arg.id -
      * @param {number} [arg.uid] -
      * @param {string} [arg.mobileNo] -
      * @param {string} [arg.checkoutMode] -
      * @param {string} [arg.tags] -
      * @param {boolean} [arg.isDefault] -
      
      **/
    getAddressById({ id, uid, mobileNo, checkoutMode, tags, isDefault }?: {
        id: number;
        uid?: number;
        mobileNo?: string;
        checkoutMode?: string;
        tags?: string;
        isDefault?: boolean;
    }): any;
    /**
     *
     * @summary: Update Address alreay added to account
     * @description: Request object containing attributes mentioned in  <font color="blue">Address </font> can be updated .these attributes are :</p> <ul> <li> <font color="monochrome">is_default_address</font></li> <li> <font color="monochrome">landmark</font></li> <li> <font color="monochrome">area</font></li> <li> <font color="monochrome">pincode</font></li> <li> <font color="monochrome">email</font></li> <li> <font color="monochrome">address_type</font></li> <li> <font color="monochrome">name</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">address</font></li> </ul>
     * @param {Object} arg - arg object.
     * @param {number} arg.id - Address id
     * @param {Address} arg.body
     **/
    updateAddress({ id, body }?: {
        id: number;
        body: any;
    }): any;
    /**
      *
      * @summary: Remove Address Associated to the account
      * @description: Delete a Address by it's address_id. Returns an object that tells whether the address was deleted successfully
      * @param {Object} arg - arg object.
      * @param {number} arg.id - Address id
      
      **/
    removeAddress({ id }?: {
        id: number;
    }): any;
    /**
     *
     * @summary: Select Address from All Addresses
     * @description: <p>Select Address from all addresses associated with the account in order to ship the cart items to .that address,otherwise default address will be selected implicitly. See `SelectCartAddressRequest` in schema of request body for the list of attributes needed to select Address from account. On successful request, returns Cart object response.below are the address attributes which needs to be sent. <ul> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">billing_address_id</font></li> <li> <font color="monochrome">uid</font></li> </ul>
     * @param {Object} arg - arg object.
     * @param {number} [arg.uid] -
     * @param {boolean} [arg.i] -
     * @param {boolean} [arg.b] -
     * @param {SelectCartAddressRequest} arg.body
     **/
    selectAddress({ body, uid, i, b }?: {
        uid?: number;
        i?: boolean;
        b?: boolean;
        body: any;
    }): any;
    /**
     *
     * @summary: Update Cart Payment
     * @description: Update Cart Payment for Your Account
     * @param {Object} arg - arg object.
     * @param {string} [arg.uid] -
     * @param {UpdateCartPaymentRequest} arg.body
     **/
    selectPaymentMode({ body, uid }?: {
        uid?: string;
        body: any;
    }): any;
    /**
      *
      * @summary: Get Cart Payment for valid coupon
      * @description: Validate coupon for selected payment mode
      * @param {Object} arg - arg object.
      * @param {string} [arg.uid] -
      * @param {string} [arg.addressId] -
      * @param {string} [arg.paymentMode] -
      * @param {string} [arg.paymentIdentifier] -
      * @param {string} [arg.aggregatorName] -
      * @param {string} [arg.merchantCode] -
      
      **/
    validateCouponForPayment({ uid, addressId, paymentMode, paymentIdentifier, aggregatorName, merchantCode, }?: {
        uid?: string;
        addressId?: string;
        paymentMode?: string;
        paymentIdentifier?: string;
        aggregatorName?: string;
        merchantCode?: string;
    }): any;
    /**
      *
      * @summary: Get delivery date and options before checkout
      * @description: Shipment break up item wise with delivery date. Actual                      delivery will be during given dates only. Items will be                      delivered in group of shipments created.
      * @param {Object} arg - arg object.
      * @param {boolean} [arg.p] - Get payment options or not
      * @param {number} [arg.uid] - Cart id
      * @param {number} [arg.addressId] - Address id
      * @param {string} [arg.areaCode] - Destination pincode.
      
      **/
    getShipments({ p, uid, addressId, areaCode }?: {
        p?: boolean;
        uid?: number;
        addressId?: number;
        areaCode?: string;
    }): any;
    /**
     *
     * @summary: Checkout Cart
     * @description: Checkout all items in cart to payment and order generation.                         For COD only order will be generated while for other checkout mode                         user will be redirected to payment gateway
     * @param {Object} arg - arg object.
     * @param {CartCheckoutRequest} arg.body
     **/
    checkoutCart({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Update Cart Meta
     * @description: Update cart meta like checkout_mode, gstin.
     * @param {Object} arg - arg object.
     * @param {number} [arg.uid] - Cart id received in get cart.
     * @param {CartMetaRequest} arg.body
     **/
    updateCartMeta({ body, uid }?: {
        uid?: number;
        body: any;
    }): any;
    /**
     *
     * @summary: Generate Cart sharing link token
     * @description: Generates shared cart snapshot and returns shortlink token
     * @param {Object} arg - arg object.
     * @param {GetShareCartLinkRequest} arg.body
     **/
    getCartShareLink({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Get shared cart snapshot and cart response
      * @description: Returns shared cart response for sent token with `shared_cart_details`                    containing shared cart details in response.
      * @param {Object} arg - arg object.
      * @param {string} arg.token - Shared short link token.
      
      **/
    getCartSharedItems({ token }?: {
        token: string;
    }): any;
    /**
      *
      * @summary: Merge or Replace existing cart
      * @description: Merge or Replace cart based on `action` parameter with shared cart of `token`
      * @param {Object} arg - arg object.
      * @param {string} arg.token - Shared short link token.
      * @param {string} arg.action - Operation to perform on existing cart, whether to merge or replace.
      
      **/
    updateCartWithSharedItems({ token, action }?: {
        token: string;
        action: string;
    }): any;
}
declare class Lead {
    constructor(_conf: any);
    _conf: any;
    /**
      *
      * @summary: Get Ticket with the specific id
      * @description: Get Ticket with the specific id, this is used to view the ticket details
      * @param {Object} arg - arg object.
      * @param {string} arg.id - ID of ticket to be retrieved
      
      **/
    getTicket({ id }?: {
        id: string;
    }): any;
    /**
     *
     * @summary: Create history for specific Ticket
     * @description: Create history for specific Ticket, this history is seen on ticket detail page, this can be comment, log or rating.
     * @param {Object} arg - arg object.
     * @param {string} arg.id - Ticket ID for which history is created
     * @param {TicketHistoryPayload} arg.body
     **/
    createHistory({ id, body }?: {
        id: string;
        body: any;
    }): any;
    /**
     *
     * @summary: Create Ticket
     * @description: This is used to Create Ticket.
     * @param {Object} arg - arg object.
     * @param {AddTicketPayload} arg.body
     **/
    createTicket({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Get specific Custom Form using it's slug
      * @description: Get specific Custom Form using it's slug, this is used to view the form.
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - Slug of form whose response is getting submitted
      
      **/
    getCustomForm({ slug }?: {
        slug: string;
    }): any;
    /**
     *
     * @summary: Submit Response for a specific Custom Form using it's slug
     * @description: Submit Response for a specific Custom Form using it's slug, this response is then used to create a ticket on behalf of the user.
     * @param {Object} arg - arg object.
     * @param {string} arg.slug - Slug of form whose response is getting submitted
     * @param {CustomFormSubmissionPayload} arg.body
     **/
    submitCustomForm({ slug, body }?: {
        slug: string;
        body: any;
    }): any;
    /**
      *
      * @summary: Get participants of a specific Video Room using it's unique name
      * @description: Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names.
      * @param {Object} arg - arg object.
      * @param {string} arg.uniqueName - Unique name of Video Room
      
      **/
    getParticipantsInsideVideoRoom({ uniqueName }?: {
        uniqueName: string;
    }): any;
    /**
      *
      * @summary: Get Token to join a specific Video Room using it's unqiue name
      * @description: Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there.
      * @param {Object} arg - arg object.
      * @param {string} arg.uniqueName - Unique name of Video Room
      
      **/
    getTokenForVideoRoom({ uniqueName }?: {
        uniqueName: string;
    }): any;
}
declare class Theme {
    constructor(_conf: any);
    _conf: any;
    /**
      *
      * @summary: Get the theme currently applied to an application
      * @description: An application has multiple themes, but only one theme can be applied at a time. Use this API to retrieve the theme currently applied to the application.
      * @param {Object} arg - arg object.
      
      **/
    getAppliedTheme({}?: any): any;
    /**
      *
      * @summary: Get a theme for a preview
      * @description: A theme can be previewed before applying it. Use this API to retrieve the preview of a theme by its ID.
      * @param {Object} arg - arg object.
      * @param {string} arg.themeId - ID of the theme to be retrieved
      
      **/
    getThemeForPreview({ themeId }?: {
        themeId: string;
    }): any;
}
declare class User {
    constructor(_conf: any);
    _conf: any;
    /**
     *
     * @summary: Login or Register using Facebook
     * @description: Use this API to login or register using Facebook credentials.
     * @param {Object} arg - arg object.
     * @param {OAuthRequestSchema} arg.body
     **/
    loginWithFacebook({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Login or Register using Google
     * @description: Use this API to login or register using Google Account credentials.
     * @param {Object} arg - arg object.
     * @param {OAuthRequestSchema} arg.body
     **/
    loginWithGoogle({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Login or Register using Google on Android
     * @description: Use this API to login or register in Android app using Google Account credentials.
     * @param {Object} arg - arg object.
     * @param {OAuthRequestSchema} arg.body
     **/
    loginWithGoogleAndroid({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Login or Register using Google on iOS
     * @description: Use this API to login or register in iOS app using Google Account credentials.
     * @param {Object} arg - arg object.
     * @param {OAuthRequestSchema} arg.body
     **/
    loginWithGoogleIOS({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Login or Register with OTP
     * @description: Use this API to login or register with a One-time Password (OTP) sent via Email or SMS.
     * @param {Object} arg - arg object.
     * @param {string} [arg.platform] - ID of the application
     * @param {SendOtpRequestSchema} arg.body
     **/
    loginWithOTP({ body, platform }?: {
        platform?: string;
        body: any;
    }): any;
    /**
     *
     * @summary: Login or Register with password
     * @description: Use this API to login or register using an email address and password.
     * @param {Object} arg - arg object.
     * @param {PasswordLoginRequestSchema} arg.body
     **/
    loginWithEmailAndPassword({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Reset Password
     * @description: Use this API to reset a password using the link sent on email.
     * @param {Object} arg - arg object.
     * @param {string} [arg.platform] - ID of the application
     * @param {SendResetPasswordEmailRequestSchema} arg.body
     **/
    sendResetPasswordEmail({ body, platform }?: {
        platform?: string;
        body: any;
    }): any;
    /**
     *
     * @summary: Forgot Password
     * @description: Use this API to reset a password using the code sent on email or SMS.
     * @param {Object} arg - arg object.
     * @param {ForgotPasswordRequestSchema} arg.body
     **/
    forgotPassword({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Reset Password using token
     * @description: Use this API to send code to reset password.
     * @param {Object} arg - arg object.
     * @param {CodeRequestBodySchema} arg.body
     **/
    sendResetToken({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Login or Register with token
     * @description: Use this API to login or register using a token for authentication.
     * @param {Object} arg - arg object.
     * @param {TokenRequestBodySchema} arg.body
     **/
    loginWithToken({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Registration using a form
     * @description: Use this API to perform user registration by sending form data in the request body.
     * @param {Object} arg - arg object.
     * @param {string} [arg.platform] - ID of the application
     * @param {FormRegisterRequestSchema} arg.body
     **/
    registerWithForm({ body, platform }?: {
        platform?: string;
        body: any;
    }): any;
    /**
     *
     * @summary: Verify email
     * @description: Use this API to send a verification code to verify an email.
     * @param {Object} arg - arg object.
     * @param {CodeRequestBodySchema} arg.body
     **/
    verifyEmail({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Verify mobile
     * @description: Use this API to send a verification code to verify a mobile number.
     * @param {Object} arg - arg object.
     * @param {CodeRequestBodySchema} arg.body
     **/
    verifyMobile({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Check password
      * @description: Use this API to check if user has created a password for login.
      * @param {Object} arg - arg object.
      
      **/
    hasPassword({}?: any): any;
    /**
     *
     * @summary: Update user password
     * @description: Use this API to update the password.
     * @param {Object} arg - arg object.
     * @param {UpdatePasswordRequestSchema} arg.body
     **/
    updatePassword({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Logs out currently logged in user
      * @description: Use this API to check to logout a user from the app.
      * @param {Object} arg - arg object.
      
      **/
    logout({}?: any): any;
    /**
     *
     * @summary: Send OTP on mobile
     * @description: Use this API to send an OTP to a mobile number.
     * @param {Object} arg - arg object.
     * @param {string} [arg.platform] - ID of the application
     * @param {SendMobileOtpRequestSchema} arg.body
     **/
    sendOTPOnMobile({ body, platform }?: {
        platform?: string;
        body: any;
    }): any;
    /**
     *
     * @summary: Verify OTP on mobile
     * @description: Use this API to verify the OTP received on a mobile number.
     * @param {Object} arg - arg object.
     * @param {string} [arg.platform] - ID of the application
     * @param {VerifyOtpRequestSchema} arg.body
     **/
    verifyMobileOTP({ body, platform }?: {
        platform?: string;
        body: any;
    }): any;
    /**
     *
     * @summary: Send OTP on email
     * @description: Use this API to send an OTP to an email ID.
     * @param {Object} arg - arg object.
     * @param {string} [arg.platform] - ID of the application
     * @param {SendEmailOtpRequestSchema} arg.body
     **/
    sendOTPOnEmail({ body, platform }?: {
        platform?: string;
        body: any;
    }): any;
    /**
     *
     * @summary: Verify OTP on email
     * @description: Use this API to verify the OTP received on an email ID.
     * @param {Object} arg - arg object.
     * @param {string} [arg.platform] - ID of the application
     * @param {VerifyEmailOtpRequestSchema} arg.body
     **/
    verifyEmailOTP({ body, platform }?: {
        platform?: string;
        body: any;
    }): any;
    /**
      *
      * @summary: Get logged in user
      * @description: Use this API  to get the details of a logged in user.
      * @param {Object} arg - arg object.
      
      **/
    getLoggedInUser({}?: any): any;
    /**
      *
      * @summary: Get list of sessions
      * @description: Use this API to retrieve all active sessions of a user.
      * @param {Object} arg - arg object.
      
      **/
    getListOfActiveSessions({}?: any): any;
    /**
      *
      * @summary: Get platform configurations
      * @description: Use this API to get all the platform configurations such as mobile image, desktop image, social logins, and all other text.
      * @param {Object} arg - arg object.
      * @param {string} [arg.name] - Name of the application, e.g. Fynd
      
      **/
    getPlatformConfig({ name }?: {
        name?: string;
    }): any;
    /**
     *
     * @summary: Edit Profile Details
     * @description: Use this API to update details in the user profile. Details can be first name, last name, gender, email, phone number, or profile picture.
     * @param {Object} arg - arg object.
     * @param {string} [arg.platform] - ID of the application
     * @param {EditProfileRequestSchema} arg.body
     **/
    updateProfile({ body, platform }?: {
        platform?: string;
        body: any;
    }): any;
    /**
     *
     * @summary: Add mobile number to profile
     * @description: Use this API to add a new mobile number to a profile.
     * @param {Object} arg - arg object.
     * @param {string} [arg.platform] - ID of the application
     * @param {EditMobileRequestSchema} arg.body
     **/
    addMobileNumber({ body, platform }?: {
        platform?: string;
        body: any;
    }): any;
    /**
      *
      * @summary: Delete mobile number from profile
      * @description: Use this API to delete a mobile number from a profile.
      * @param {Object} arg - arg object.
      * @param {string} [arg.platform] - ID of the application
      * @param {boolean} arg.active - This is a boolean value to check if mobile number is active 1.True - Number is active 2. False - Number is inactive
      * @param {boolean} arg.primary - This is a boolean value to check if mobile number is primary number (main number) 1. True - Number is primary 2. False - Number is not primary
      * @param {boolean} arg.verified - This is a boolean value to check if mobile number is verified 1. True - Number is verified 2.False - Number is not verified yet
      * @param {string} arg.countryCode - Country code of the phone number, e.g. 91
      * @param {string} arg.phone - Phone number
      
      **/
    deleteMobileNumber({ active, primary, verified, countryCode, phone, platform, }?: {
        platform?: string;
        active: boolean;
        primary: boolean;
        verified: boolean;
        countryCode: string;
        phone: string;
    }): any;
    /**
     *
     * @summary: Set mobile as primary
     * @description: Use this API to set a mobile number as primary. Primary number is a verified number used for all future communications.
     * @param {Object} arg - arg object.
     * @param {SendVerificationLinkMobileRequestSchema} arg.body
     **/
    setMobileNumberAsPrimary({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Send verification link to mobile
     * @description: Use this API to send a verification link to a mobile number
     * @param {Object} arg - arg object.
     * @param {string} [arg.platform] - ID of the application
     * @param {SendVerificationLinkMobileRequestSchema} arg.body
     **/
    sendVerificationLinkToMobile({ body, platform }?: {
        platform?: string;
        body: any;
    }): any;
    /**
     *
     * @summary: Add email to profile
     * @description: Use this API to add a new email address to a profile
     * @param {Object} arg - arg object.
     * @param {string} [arg.platform] - ID of the application
     * @param {EditEmailRequestSchema} arg.body
     **/
    addEmail({ body, platform }?: {
        platform?: string;
        body: any;
    }): any;
    /**
      *
      * @summary: Delete email from profile
      * @description: Use this API to delete an email address from a profile
      * @param {Object} arg - arg object.
      * @param {string} [arg.platform] - ID of the application
      * @param {boolean} arg.active - This is a boolean value to check if email ID is active 1. True - Email ID is active 2.False - Email ID is inactive
      * @param {boolean} arg.primary - This is a boolean value to check if email ID is primary (main email ID) 1. True - Email ID is primary 2.False - Email ID is not primary
      * @param {boolean} arg.verified - This is a boolean value to check if email ID is verified 1. True - Email ID is verified 2.False - Email ID is not verified yet
      * @param {string} arg.email - The email ID to delete
      
      **/
    deleteEmail({ active, primary, verified, email, platform }?: {
        platform?: string;
        active: boolean;
        primary: boolean;
        verified: boolean;
        email: string;
    }): any;
    /**
     *
     * @summary: Set email as primary
     * @description: Use this API to set an email address as primary. Primary email ID is a email address used for all future communications.
     * @param {Object} arg - arg object.
     * @param {EditEmailRequestSchema} arg.body
     **/
    setEmailAsPrimary({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Send verification link to email
     * @description: Use this API to send verification link to an email address.
     * @param {Object} arg - arg object.
     * @param {string} [arg.platform] - ID of the application
     * @param {EditEmailRequestSchema} arg.body
     **/
    sendVerificationLinkToEmail({ body, platform }?: {
        platform?: string;
        body: any;
    }): any;
}
declare class Content {
    constructor(_conf: any);
    _conf: any;
    /**
      *
      * @summary: Get live announcements
      * @description: Announcements are useful to highlight a message or information on top of a webpage. Use this API to retrieve live announcements. Get announcements on individual pages or for all pages.
      * @param {Object} arg - arg object.
      
      **/
    getAnnouncements({}?: any): any;
    /**
      *
      * @summary: Get a blog
      * @description: Use this API to get the details of a blog using its slug. Details include the title, reading time, publish status, feature image, tags, author, etc.
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a blog. You can get slug value from the endpoint /service/application/content/v1.0/blogs/.
      * @param {string} [arg.rootId] - ID given to the HTML element
      
      **/
    getBlog({ slug, rootId }?: {
        slug: string;
        rootId?: string;
    }): any;
    /**
      *
      * @summary: Get a list of blogs
      * @description: Use this API to get all the blogs.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results. Default value is 1.
      * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
      
      **/
    getBlogs({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get a list of blogs
      * @description: Use this API to get all the blogs.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
      
      **/
    getBlogsPaginator({ pageSize }?: {
        pageSize?: number;
    }): Paginator;
    /**
      *
      * @summary: Get a list of FAQs
      * @description: Use this API to get a list of frequently asked questions. Users will benefit from it when facing any issue with the website.
      * @param {Object} arg - arg object.
      
      **/
    getFaqs({}?: any): any;
    /**
      *
      * @summary: Get a list of FAQ categories
      * @description: FAQs can be divided into categories. Use this API to get a list of FAQ categories.
      * @param {Object} arg - arg object.
      
      **/
    getFaqCategories({}?: any): any;
    /**
      *
      * @summary: Get an FAQ
      * @description: Use this API to get a particular FAQ by its slug.
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of an FAQ. You can get slug value from the endpoint /service/application/content/v1.0/faq.
      
      **/
    getFaqBySlug({ slug }?: {
        slug: string;
    }): any;
    /**
      *
      * @summary: Get the FAQ category
      * @description: FAQs can be divided into categories. Use this API to get the category to which an FAQ belongs.
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of an FAQ category. You can get slug value from the endpoint /service/application/content/v1.0/faq/categories.
      
      **/
    getFaqCategoryBySlug({ slug }?: {
        slug: string;
    }): any;
    /**
      *
      * @summary: Get FAQs using the slug of FAQ category
      * @description: FAQs can be divided into categories. Use this API to get all the FAQs belonging to a category by using the category slug.
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of an FAQ category. You can get slug value from the endpoint /service/application/content/v1.0/faq/categories.
      
      **/
    getFaqsByCategorySlug({ slug }?: {
        slug: string;
    }): any;
    /**
      *
      * @summary: Get the landing page
      * @description: Landing page is the first page that a prospect lands upon while visiting a website. Use this API to fetch the details of a landing page.
      * @param {Object} arg - arg object.
      
      **/
    getLandingPage({}?: any): any;
    /**
      *
      * @summary: Get legal information
      * @description: Use this API to get the legal information of an application, which includes Privacy Policy, Terms and Conditions, Shipping Policy and FAQs regarding the usage of the application.
      * @param {Object} arg - arg object.
      
      **/
    getLegalInformation({}?: any): any;
    /**
      *
      * @summary: Get the navigation
      * @description: Use this API to fetch the navigations details which includes the items of the navigation pane. It also shows the links and sub-navigations.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results. Default value is 1.
      * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
      
      **/
    getNavigations({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get the navigation
      * @description: Use this API to fetch the navigations details which includes the items of the navigation pane. It also shows the links and sub-navigations.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
      
      **/
    getNavigationsPaginator({ pageSize }?: {
        pageSize?: number;
    }): Paginator;
    /**
      *
      * @summary: Get a page
      * @description: Use this API to get the details of a page using its slug. Details include the title, seo, publish status, feature image, tags, meta, etc.
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a page. You can get slug value from the endpoint /service/application/content/v1.0/pages/.
      * @param {string} [arg.rootId] - ID given to the HTML element
      
      **/
    getPage({ slug, rootId }?: {
        slug: string;
        rootId?: string;
    }): any;
    /**
      *
      * @summary: Get all pages
      * @description: Use this API to get a list of pages.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results. Default value is 1.
      * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
      
      **/
    getPages({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get all pages
      * @description: Use this API to get a list of pages.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
      
      **/
    getPagesPaginator({ pageSize }?: {
        pageSize?: number;
    }): Paginator;
    /**
      *
      * @summary: Get the SEO of an application
      * @description: Use this API to get the SEO details of an application, which includes a robot.txt, meta-tags and sitemap.
      * @param {Object} arg - arg object.
      
      **/
    getSEOConfiguration({}?: any): any;
    /**
      *
      * @summary: Get the slideshows
      * @description: Use this API to get a list of slideshows along with their details.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results. Default value is 1.
      * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
      
      **/
    getSlideshows({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get the slideshows
      * @description: Use this API to get a list of slideshows along with their details.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
      
      **/
    getSlideshowsPaginator({ pageSize }?: {
        pageSize?: number;
    }): Paginator;
    /**
      *
      * @summary: Get a slideshow
      * @description: A slideshow is a group of images, videos or a combination of both that are shown on the website in the form of slides. Use this API to fetch a slideshow using its `slug`.
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a slideshow. You can get slug value from the endpoint /service/application/content/v1.0/slideshow/.
      
      **/
    getSlideshow({ slug }?: {
        slug: string;
    }): any;
    /**
      *
      * @summary: Get the support information
      * @description: Use this API to get contact details for customer support including emails and phone numbers.
      * @param {Object} arg - arg object.
      
      **/
    getSupportInformation({}?: any): any;
    /**
      *
      * @summary: Get the tags associated with an application
      * @description: Use this API to get all the CSS and JS injected in the application in the form of tags.
      * @param {Object} arg - arg object.
      
      **/
    getTags({}?: any): any;
}
declare class Communication {
    constructor(_conf: any);
    _conf: any;
    /**
      *
      * @summary: Get communication consent
      * @description: Use this API to retrieve the consent provided by the user for receiving communication messages over Email/SMS/WhatsApp.
      * @param {Object} arg - arg object.
      
      **/
    getCommunicationConsent({}?: any): any;
    /**
     *
     * @summary: Upsert communication consent
     * @description: Use this API to update and insert the consent provided by the user for receiving communication messages over Email/SMS/WhatsApp.
     * @param {Object} arg - arg object.
     * @param {CommunicationConsentReq} arg.body
     **/
    upsertCommunicationConsent({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Upsert push token of a user
     * @description: Use this API to update and insert the push token of the user.
     * @param {Object} arg - arg object.
     * @param {PushtokenReq} arg.body
     **/
    upsertAppPushtoken({ body }?: {
        body: any;
    }): any;
}
declare class Share {
    constructor(_conf: any);
    _conf: any;
    /**
      *
      * @summary: Create QR Code of an app
      * @description: Use this API to create a QR code of an app for sharing it with users who want to use the app.
      * @param {Object} arg - arg object.
      
      **/
    getApplicationQRCode({}?: any): any;
    /**
      *
      * @summary: Create QR Code of a product
      * @description: Use this API to create a QR code of a product for sharing it with users who want to view/purchase the product.
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a product. You can get slug value from the endpoint.
      
      **/
    getProductQRCodeBySlug({ slug }?: {
        slug: string;
    }): any;
    /**
      *
      * @summary: Create QR Code of a collection
      * @description: Use this API to create a QR code of a collection of products for sharing it with users who want to view/purchase the collection.
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a collection. You can get slug value from the endpoint.
      
      **/
    getCollectionQRCodeBySlug({ slug }?: {
        slug: string;
    }): any;
    /**
      *
      * @summary: Create QR Code of a URL
      * @description: Use this API to create a QR code of a URL for sharing it with users who want to visit the link.
      * @param {Object} arg - arg object.
      * @param {string} arg.url - A link or a web address
      
      **/
    getUrlQRCode({ url }?: {
        url: string;
    }): any;
    /**
     *
     * @summary: Create a short link
     * @description: Use this API to create a short link that is easy to write/share/read as compared to long URLs.
     * @param {Object} arg - arg object.
     * @param {ShortLinkReq} arg.body
     **/
    createShortLink({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Get short link by hash
      * @description: Use this API to get a short link by using a hash value.
      * @param {Object} arg - arg object.
      * @param {string} arg.hash - A string value used for converting long URL to short URL and vice-versa.
      
      **/
    getShortLinkByHash({ hash }?: {
        hash: string;
    }): any;
    /**
      *
      * @summary: Get original link by hash
      * @description: Use this API to retrieve the original link from a short-link by using a hash value.
      * @param {Object} arg - arg object.
      * @param {string} arg.hash - A string value used for converting long URL to short URL and vice-versa.
      
      **/
    getOriginalShortLinkByHash({ hash }?: {
        hash: string;
    }): any;
}
declare class FileStorage {
    constructor(_conf: any);
    _conf: any;
    /**
      *
      * @summary: Initiates an upload and returns a storage link that is valid for 30 minutes. You can use the storage link to make subsequent upload request with file buffer or blob.
      * @description: Use this API to perform the first step of uploading (i.e. **Start**) an arbitrarily sized buffer or blob.
  
  The three major steps are:
  * Start
  * Upload
  * Complete
  
  ### Start
  Initiates the assets upload using `startUpload`.
  It returns a storage link in response.
  
  ### Upload
  Use the storage link to upload a file (Buffer or Blob) to the File Storage.
  Make a `PUT` request on storage link received from `startUpload` API with the file (Buffer or Blob) in the request body.
  
  ### Complete
  After successfully upload, call the `completeUpload` API to finish the upload process.
  This operation will return the URL of the uploaded file.
  
      * @param {Object} arg - arg object.
      * @param {string} arg.namespace - Name of the bucket created for storing objects.
      * @param {StartRequest} arg.body
      **/
    startUpload({ namespace, body }?: {
        namespace: string;
        body: any;
    }): any;
    /**
      *
      * @summary: Completes the upload process. After successfully uploading a file, call this API to finish the upload process.
      * @description: Use this API to perform the third step of uploading (i.e. **Complete**) an arbitrarily sized buffer or blob.
  
  The three major steps are:
  * Start
  * Upload
  * Complete
  
  ### Start
  Initiates the assets upload using `startUpload`.
  It returns a storage link in response.
  
  ### Upload
  Use the storage link to upload a file (Buffer or Blob) to the File Storage.
  Make a `PUT` request on storage link received from `startUpload` API with the file (Buffer or Blob) in the request body.
  
  ### Complete
  After successfully upload, call the `completeUpload` API to finish the upload process.
  This operation will return the URL of the uploaded file.
  
      * @param {Object} arg - arg object.
      * @param {string} arg.namespace - Name of the bucket created for storing objects.
      * @param {StartResponse} arg.body
      **/
    completeUpload({ namespace, body }?: {
        namespace: string;
        body: any;
    }): any;
    upload({ data, file_name, content_type, namespace, size, tags, }?: any): Promise<any>;
}
declare class Configuration {
    constructor(_conf: any);
    _conf: any;
    /**
      *
      * @summary: Get current application details
      * @description: Use this API to get the current application details which includes configurations that indicate the status of the website, domain, ID, tokens, images, etc.
      * @param {Object} arg - arg object.
      
      **/
    getApplication({}?: any): any;
    /**
      *
      * @summary: Get application, owner and seller information
      * @description: Use this API to get the current application details which includes channel name, description, banner, logo, favicon, domain details, etc. This API also retrieves the seller and owner information such as address, email address, and phone number.
      * @param {Object} arg - arg object.
      
      **/
    getOwnerInfo({}?: any): any;
    /**
      *
      * @summary: Get basic application details
      * @description: Use this API to retrieve only the basic details of the application which includes channel name, description, banner, logo, favicon, domain details, etc.
      * @param {Object} arg - arg object.
      
      **/
    getBasicDetails({}?: any): any;
    /**
      *
      * @summary: Get integration tokens
      * @description: Use this API to retrieve the tokens used while integrating Firebase, MoEngage, Segment, GTM, Freshchat, Safetynet, Google Map and Facebook. **Note** - Token values are encrypted with AES encryption using a secret key. Kindly reach out to the developers for obtaining the secret key.
      * @param {Object} arg - arg object.
      
      **/
    getIntegrationTokens({}?: any): any;
    /**
      *
      * @summary: Get deployment stores
      * @description: Use this API to retrieve the details of all the deployment stores (the selling locations where the application will be utilized for placing orders).
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results. Default value is 1.
      * @param {number} [arg.pageSize] - The number of items to retrieve in each page. Default value is 10.
      * @param {string} [arg.q] - Store code or name of the ordering store.
      
      **/
    getOrderingStores({ pageNo, pageSize, q }?: {
        pageNo?: number;
        pageSize?: number;
        q?: string;
    }): any;
    /**
      *
      * @summary: Get deployment stores
      * @description: Use this API to retrieve the details of all the deployment stores (the selling locations where the application will be utilized for placing orders).
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageSize] - The number of items to retrieve in each page. Default value is 10.
      * @param {string} [arg.q] - Store code or name of the ordering store.
      
      **/
    getOrderingStoresPaginator({ pageSize, q }?: {
        pageSize?: number;
        q?: string;
    }): Paginator;
    /**
      *
      * @summary: Get features of application
      * @description: Use this API to retrieve the configuration of features such as product detail, landing page, options in the login/registration screen, communication opt-in, cart options and many more.
      * @param {Object} arg - arg object.
      
      **/
    getFeatures({}?: any): any;
    /**
      *
      * @summary: Get application information
      * @description: Use this API to retrieve information about the social links, address and contact information of the company/seller/brand operating the application.
      * @param {Object} arg - arg object.
      
      **/
    getContactInfo({}?: any): any;
    /**
      *
      * @summary: Get currencies enabled in the application
      * @description: Use this API to get a list of currencies allowed in the current application. Moreover, get the name, code, symbol, and the decimal digits of the currencies.
      * @param {Object} arg - arg object.
      
      **/
    getCurrencies({}?: any): any;
    /**
      *
      * @summary: Get currency by its ID
      * @description: Use this API to retrieve a currency using its ID.
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Object ID assigned to the currency
      
      **/
    getCurrencyById({ id }?: {
        id: string;
    }): any;
    /**
      *
      * @summary: Get list of languages
      * @description: Use this API to get a list of languages supported in the application.
      * @param {Object} arg - arg object.
      
      **/
    getLanguages({}?: any): any;
    /**
     *
     * @summary: Get an Ordering Store signed cookie on selection of ordering store.
     * @description: Use this API to get an Ordering Store signed cookie upon selecting an ordering store. This will be used by the cart service to verify a coupon against the selected ordering store in cart.
     * @param {Object} arg - arg object.
     * @param {OrderingStoreSelectRequest} arg.body
     **/
    getOrderingStoreCookie({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Unset the Ordering Store signed cookie.
      * @description: Use this API to unset the Ordering Store cookie upon changing the sales channel, by its domain URL, in the Universal Fynd Store app.
      * @param {Object} arg - arg object.
      
      **/
    removeOrderingStoreCookie({}?: any): any;
    /**
      *
      * @summary: Get a list of staff.
      * @description: Use this API to get a list of staff including the names, employee code, incentive status, assigned ordering stores, and title of each staff added to the application.
      * @param {Object} arg - arg object.
      * @param {boolean} [arg.orderIncent] - This is a boolean value. Select `true` to retrieve the staff members eligible for getting incentives on orders.
      * @param {number} [arg.orderingStore] - ID of the ordering store. Helps in retrieving staff members working at a particular ordering store.
      * @param {string} [arg.user] - Mongo ID of the staff. Helps in retrieving the details of a particular staff member.
      
      **/
    getAppStaffs({ orderIncent, orderingStore, user }?: {
        orderIncent?: boolean;
        orderingStore?: number;
        user?: string;
    }): any;
}
declare class Payment {
    constructor(_conf: any);
    _conf: any;
    /**
      *
      * @summary: Get payment gateway keys
      * @description: Use this API to retrieve the payment gateway key, secrets, merchant, SDK/API details to complete a payment at front-end.
      * @param {Object} arg - arg object.
      * @param {string} [arg.xApiToken] - Used for basic authentication.
      * @param {boolean} [arg.refresh] - This is a boolean value. Select `true` to remove temporary cache files on payment gateway and replace with the latest one.
      
      **/
    getAggregatorsConfig({ xApiToken, refresh }?: {
        xApiToken?: string;
        refresh?: boolean;
    }): any;
    /**
     *
     * @summary: Attach a saved card to customer.
     * @description: Use this API to attach a customer's saved card at the payment gateway, such as Stripe.
     * @param {Object} arg - arg object.
     * @param {AttachCardRequest} arg.body
     **/
    attachCardToCustomer({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Fetch active payment gateway for card payments
      * @description: Use this API to retrieve an active payment aggregator along with the Customer ID. This is applicable for cards payments only.
      * @param {Object} arg - arg object.
      * @param {boolean} [arg.refresh] -
      
      **/
    getActiveCardAggregator({ refresh }?: {
        refresh?: boolean;
    }): any;
    /**
      *
      * @summary: Fetch the list of cards saved by the user
      * @description: Use this API to retrieve a list of cards stored by user from an active payment gateway.
      * @param {Object} arg - arg object.
      * @param {boolean} [arg.forceRefresh] -
      
      **/
    getActiveUserCards({ forceRefresh }?: {
        forceRefresh?: boolean;
    }): any;
    /**
     *
     * @summary: Delete a card
     * @description: Use this API to delete a card added by a user on the payment gateway and clear the cache.
     * @param {Object} arg - arg object.
     * @param {DeletehCardRequest} arg.body
     **/
    deleteUserCard({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Validate customer for payment
     * @description: Use this API to check if the customer is eligible to use credit-line facilities such as Simpl Pay Later and Rupifi.
     * @param {Object} arg - arg object.
     * @param {ValidateCustomerRequest} arg.body
     **/
    verifyCustomerForPayment({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Verify and charge payment
     * @description: Use this API to verify and check the status of a payment transaction (server-to-server) made through aggregators like Simpl and Mswipe.
     * @param {Object} arg - arg object.
     * @param {ChargeCustomerRequest} arg.body
     **/
    verifyAndChargePayment({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Initialize a payment (server-to-server) for UPI and BharatQR
     * @description: PUse this API to inititate payment using UPI, BharatQR, wherein the UPI requests are send to the app and QR code is displayed on the screen.
     * @param {Object} arg - arg object.
     * @param {PaymentInitializationRequest} arg.body
     **/
    initialisePayment({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Performs continuous polling to check status of payment on the server
     * @description: Use this API to perform continuous polling at intervals to check the status of payment until timeout.
     * @param {Object} arg - arg object.
     * @param {PaymentStatusUpdateRequest} arg.body
     **/
    checkAndUpdatePaymentStatus({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Get applicable payment options
      * @description: Use this API to get all valid payment options for doing a payment.
      * @param {Object} arg - arg object.
      * @param {number} arg.amount - Payable amount.
      * @param {string} arg.cartId - Identifier of the cart.
      * @param {string} arg.pincode - The PIN Code of the destination address, e.g. 400059
      * @param {string} arg.checkoutMode - Option to checkout for self or for others.
      * @param {boolean} [arg.refresh] - This is a boolean value. Select `true` to remove temporary cache files on payment gateway and replace with the latest one.
      * @param {string} [arg.assignCardId] - Token of user's debit or credit card.
      * @param {string} [arg.userDetails] - URIencoded JSON containing details of an anonymous user.
      
      **/
    getPaymentModeRoutes({ amount, cartId, pincode, checkoutMode, refresh, assignCardId, userDetails, }?: {
        amount: number;
        cartId: string;
        pincode: string;
        checkoutMode: string;
        refresh?: boolean;
        assignCardId?: string;
        userDetails?: string;
    }): any;
    /**
      *
      * @summary: Get applicable payment options for Point-of-Sale (POS)
      * @description: Use this API to get all valid payment options for doing a payment in POS.
      * @param {Object} arg - arg object.
      * @param {number} arg.amount - Payable amount.
      * @param {string} arg.cartId - Identifier of the cart.
      * @param {string} arg.pincode - The PIN Code of the destination address, e.g. 400059
      * @param {string} arg.checkoutMode - Option to checkout for self or for others.
      * @param {boolean} [arg.refresh] - This is a boolean value. Select `true` to remove temporary cache files on payment gateway and replace with the latest one.
      * @param {string} [arg.assignCardId] - Token of user's debit or credit card.
      * @param {string} arg.orderType - The order type of shipment * HomeDelivery - If the customer wants the order home-delivered * PickAtStore - If the customer wants the handover of an order at the store itself.
      * @param {string} [arg.userDetails] - URIencoded JSON containing details of an anonymous user.
      
      **/
    getPosPaymentModeRoutes({ amount, cartId, pincode, checkoutMode, orderType, refresh, assignCardId, userDetails, }?: {
        amount: number;
        cartId: string;
        pincode: string;
        checkoutMode: string;
        refresh?: boolean;
        assignCardId?: string;
        orderType: string;
        userDetails?: string;
    }): any;
    /**
      *
      * @summary: Get CreditLine Offer
      * @description: Get CreditLine Offer if user is tentatively approved by rupifi
      * @param {Object} arg - arg object.
      
      **/
    getRupifiBannerDetails({}?: any): any;
    /**
      *
      * @summary: Lists the mode of refund
      * @description: Use this API to retrieve eligible refund modes (such as Netbanking) and add the beneficiary details.
      * @param {Object} arg - arg object.
      
      **/
    getActiveRefundTransferModes({}?: any): any;
    /**
     *
     * @summary: Enable/Disable a mode for transferring a refund
     * @description: Activate or Deactivate Transfer Mode to collect Beneficiary Details for Refund
     * @param {Object} arg - arg object.
     * @param {UpdateRefundTransferModeRequest} arg.body
     **/
    enableOrDisableRefundTransferMode({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Lists the beneficiary of a refund
      * @description: Use this API to get the details of all active beneficiary added by a user for refund.
      * @param {Object} arg - arg object.
      * @param {string} arg.orderId - A unique number used for identifying and tracking your orders.
      
      **/
    getUserBeneficiariesDetail({ orderId }?: {
        orderId: string;
    }): any;
    /**
      *
      * @summary: Verify IFSC Code
      * @description: Use this API to check whether the 11-digit IFSC code is valid and to fetch the bank details for refund.
      * @param {Object} arg - arg object.
      * @param {string} [arg.ifscCode] - A 11-digit alphanumeric code that uniquely identifies a bank branch.
      
      **/
    verifyIfscCode({ ifscCode }?: {
        ifscCode?: string;
    }): any;
    /**
      *
      * @summary: Lists the beneficiary of a refund
      * @description: Use this API to get the details of all active beneficiary added by a user for refund.
      * @param {Object} arg - arg object.
      * @param {string} arg.orderId - A unique number used for identifying and tracking your orders.
      
      **/
    getOrderBeneficiariesDetail({ orderId }?: {
        orderId: string;
    }): any;
    /**
     *
     * @summary: Verify the beneficiary details using OTP
     * @description: Use this API to perform an OTP validation before saving the beneficiary details added for a refund.
     * @param {Object} arg - arg object.
     * @param {AddBeneficiaryViaOtpVerificationRequest} arg.body
     **/
    verifyOtpAndAddBeneficiaryForBank({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Save bank details for cancelled/returned order
     * @description: Use this API to save the bank details for a returned or cancelled order to refund the amount.
     * @param {Object} arg - arg object.
     * @param {AddBeneficiaryDetailsRequest} arg.body
     **/
    addBeneficiaryDetails({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Send OTP on adding a wallet beneficiary
     * @description: Use this API to send an OTP while adding a wallet beneficiary by mobile no. verification.
     * @param {Object} arg - arg object.
     * @param {WalletOtpRequest} arg.body
     **/
    verifyOtpAndAddBeneficiaryForWallet({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Set a default beneficiary for a refund
     * @description: Use this API to set a default beneficiary for getting a refund.
     * @param {Object} arg - arg object.
     * @param {SetDefaultBeneficiaryRequest} arg.body
     **/
    updateDefaultBeneficiary({ body }?: {
        body: any;
    }): any;
}
declare class Order {
    constructor(_conf: any);
    _conf: any;
    /**
      *
      * @summary: Use this API to retrieve all the orders.
      * @description: Get all orders
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results. Default value is 1.
      * @param {number} [arg.pageSize] - The number of items to retrieve in each page. Default value is 10.
      * @param {string} [arg.fromDate] - The date from which the orders should be retrieved.
      * @param {string} [arg.toDate] - The date till which the orders should be retrieved.
      * @param {number} [arg.orderStatus] - A filter to retrieve orders by their current status such as _placed_, _delivered_, etc.
      
      **/
    getOrders({ pageNo, pageSize, fromDate, toDate, orderStatus }?: {
        pageNo?: number;
        pageSize?: number;
        fromDate?: string;
        toDate?: string;
        orderStatus?: number;
    }): any;
    /**
      *
      * @summary: Use this API to retrieve order details such as tracking details, shipment, store information using Fynd Order ID.
      * @description: Get details of an order
      * @param {Object} arg - arg object.
      * @param {string} arg.orderId - A unique number used for identifying and tracking your orders.
      
      **/
    getOrderById({ orderId }?: {
        orderId: string;
    }): any;
    /**
      *
      * @summary: Use this API to retrieve shipment details such as price breakup, tracking details, store information, etc. using Shipment ID.
      * @description: Get details of a shipment
      * @param {Object} arg - arg object.
      * @param {string} arg.shipmentId - ID of the shipment. An order may contain multiple items and may get divided into one or more shipment, each having its own ID.
      
      **/
    getShipmentById({ shipmentId }?: {
        shipmentId: string;
    }): any;
    /**
      *
      * @summary: Use this API to retrieve the issues that led to the cancellation of bags within a shipment.
      * @description: Get reasons behind full or partial cancellation of a shipment
      * @param {Object} arg - arg object.
      * @param {string} arg.shipmentId - ID of the shipment. An order may contain multiple items and may get divided into one or more shipment, each having its own ID.
      
      **/
    getShipmentReasons({ shipmentId }?: {
        shipmentId: string;
    }): any;
    /**
     *
     * @summary: Use this API to update the status of a shipment using its shipment ID.
     * @description: Update the shipment status
     * @param {Object} arg - arg object.
     * @param {string} arg.shipmentId - ID of the shipment. An order may contain multiple items and may get divided into one or more shipment, each having its own ID.
     * @param {ShipmentStatusUpdateBody} arg.body
     **/
    updateShipmentStatus({ shipmentId, body }?: {
        shipmentId: string;
        body: any;
    }): any;
    /**
      *
      * @summary: Use this API to track a shipment using its shipment ID.
      * @description: Track shipment
      * @param {Object} arg - arg object.
      * @param {string} arg.shipmentId - ID of the shipment. An order may contain multiple items and may get divided into one or more shipment, each having its own ID.
      
      **/
    trackShipment({ shipmentId }?: {
        shipmentId: string;
    }): any;
    /**
      *
      * @summary: Use this API to retrieve a POS order and all its details such as tracking details, shipment, store information using Fynd Order ID.
      * @description: Get POS Order
      * @param {Object} arg - arg object.
      * @param {string} arg.orderId - A unique number used for identifying and tracking your orders.
      
      **/
    getPosOrderById({ orderId }?: {
        orderId: string;
    }): any;
}
declare class Rewards {
    constructor(_conf: any);
    _conf: any;
    /**
     *
     * @summary: Get the eligibility of reward points on a product
     * @description: Use this API to evaluate the amount of reward points that could be earned on any catalogue product.
     * @param {Object} arg - arg object.
     * @param {CatalogueOrderRequest} arg.body
     **/
    getPointsOnProduct({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Get offer by name
      * @description: Use this API to get the offer details and configuration by entering the name of the offer.
      * @param {Object} arg - arg object.
      * @param {string} arg.name - The name given to the offer.
      
      **/
    getOfferByName({ name }?: {
        name: string;
    }): any;
    /**
     *
     * @summary: Calculates the discount on order-amount
     * @description: Use this API to calculate the discount on order-amount based on all the amount range configured in order_discount.
     * @param {Object} arg - arg object.
     * @param {OrderDiscountRequest} arg.body
     **/
    getOrderDiscount({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Get reward points available with a user
      * @description: Use this API to retrieve total available points of a user for current application
      * @param {Object} arg - arg object.
      
      **/
    getUserPoints({}?: any): any;
    /**
      *
      * @summary: Get all transactions of reward points
      * @description: Use this API to get a list of points transactions. The list of points history is paginated.
      * @param {Object} arg - arg object.
      * @param {string} [arg.pageId] - PageID is the ID of the requested page. For first request it should be kept empty.
      * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
      
      **/
    getUserPointsHistory({ pageId, pageSize }?: {
        pageId?: string;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get all transactions of reward points
      * @description: Use this API to get a list of points transactions. The list of points history is paginated.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
      
      **/
    getUserPointsHistoryPaginator({ pageSize }?: {
        pageSize?: number;
    }): Paginator;
    /**
      *
      * @summary: Get referral details of a user
      * @description: Use this API to retrieve the referral details a user has configured in the application.
      * @param {Object} arg - arg object.
      
      **/
    getUserReferralDetails({}?: any): any;
    /**
     *
     * @summary: Redeems a referral code and credits reward points to users
     * @description: Use this API to enter a referral code following which, the configured points would be credited to a user's reward points account.
     * @param {Object} arg - arg object.
     * @param {RedeemReferralCodeRequest} arg.body
     **/
    redeemReferralCode({ body }?: {
        body: any;
    }): any;
}
declare class Feedback {
    constructor(_conf: any);
    _conf: any;
    /**
     *
     * @summary: Post a new abuse request
     * @description: Use this API to report a specific entity (question/review/comment) for abuse.
     * @param {Object} arg - arg object.
     * @param {ReportAbuseRequest} arg.body
     **/
    createAbuseReport({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Update abuse details
     * @description: Use this API to update the abuse details, i.e. status and description.
     * @param {Object} arg - arg object.
     * @param {UpdateAbuseStatusRequest} arg.body
     **/
    updateAbuseReport({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Get a list of abuse data
      * @description: Use this API to retrieve a list of abuse data from entity type and entity ID.
      * @param {Object} arg - arg object.
      * @param {string} arg.entityId - ID of the eligible entity as specified in the entity type (question ID/review ID/comment ID).
      * @param {string} arg.entityType - Type of entity, e.g. question, review or comment.
      * @param {string} [arg.id] - abuse id
      * @param {string} [arg.pageId] - Pagination page ID to retrieve next set of results.
      * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
      
      **/
    getAbuseReports({ entityId, entityType, id, pageId, pageSize }?: {
        entityId: string;
        entityType: string;
        id?: string;
        pageId?: string;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get a list of abuse data
      * @description: Use this API to retrieve a list of abuse data from entity type and entity ID.
      * @param {Object} arg - arg object.
      * @param {string} arg.entityId - ID of the eligible entity as specified in the entity type (question ID/review ID/comment ID).
      * @param {string} arg.entityType - Type of entity, e.g. question, review or comment.
      * @param {string} [arg.id] - abuse id
      * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
      
      **/
    getAbuseReportsPaginator({ entityId, entityType, id, pageSize }?: {
        entityId: string;
        entityType: string;
        id?: string;
        pageSize?: number;
    }): Paginator;
    /**
      *
      * @summary: Get a list of attribute data
      * @description: Use this API to retrieve a list of all attribute data, e.g. quality, material, product fitting, packaging, etc.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results. Default value is 1.
      * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
      
      **/
    getAttributes({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get a list of attribute data
      * @description: Use this API to retrieve a list of all attribute data, e.g. quality, material, product fitting, packaging, etc.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
      
      **/
    getAttributesPaginator({ pageSize }?: {
        pageSize?: number;
    }): Paginator;
    /**
     *
     * @summary: Add a new attribute request
     * @description: Use this API to add a new attribute (e.g. product quality/material/value for money) with its name, slug and description.
     * @param {Object} arg - arg object.
     * @param {SaveAttributeRequest} arg.body
     **/
    createAttribute({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Get data of a single attribute
      * @description: Use this API to retrieve a single attribute data from a given slug.
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of an attribute. You can get slug value from the endpoint 'service/application/feedback/v1.0/attributes'.
      
      **/
    getAttribute({ slug }?: {
        slug: string;
    }): any;
    /**
     *
     * @summary: Update details of an attribute
     * @description: Use this API update the attribute's name and description.
     * @param {Object} arg - arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of an attribute. You can get slug value from the endpoint 'service/application/feedback/v1.0/attributes'.
     * @param {UpdateAttributeRequest} arg.body
     **/
    updateAttribute({ slug, body }?: {
        slug: string;
        body: any;
    }): any;
    /**
     *
     * @summary: Post a new comment
     * @description: Use this API to add a new comment for a specific entity.
     * @param {Object} arg - arg object.
     * @param {CommentRequest} arg.body
     **/
    createComment({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Update the status of a comment
     * @description: Use this API to update the comment status (active or approve) along with new comment if any.
     * @param {Object} arg - arg object.
     * @param {UpdateCommentRequest} arg.body
     **/
    updateComment({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Get a list of comments
      * @description: Use this API to retrieve a list of comments for a specific entity type, e.g. products.
      * @param {Object} arg - arg object.
      * @param {string} arg.entityType - Type of entity, e.g. question, review or comment.
      * @param {string} [arg.id] - Comment ID
      * @param {string} [arg.entityId] - ID of the eligible entity as specified in the entity type (question ID/review ID/comment ID).
      * @param {string} [arg.userId] - User ID - a flag/filter to get comments for a user.
      * @param {string} [arg.pageId] - Pagination page ID to retrieve next set of results.
      * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
      
      **/
    getComments({ entityType, id, entityId, userId, pageId, pageSize }?: {
        entityType: string;
        id?: string;
        entityId?: string;
        userId?: string;
        pageId?: string;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get a list of comments
      * @description: Use this API to retrieve a list of comments for a specific entity type, e.g. products.
      * @param {Object} arg - arg object.
      * @param {string} arg.entityType - Type of entity, e.g. question, review or comment.
      * @param {string} [arg.id] - Comment ID
      * @param {string} [arg.entityId] - ID of the eligible entity as specified in the entity type (question ID/review ID/comment ID).
      * @param {string} [arg.userId] - User ID - a flag/filter to get comments for a user.
      * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
      
      **/
    getCommentsPaginator({ entityType, id, entityId, userId, pageSize }?: {
        entityType: string;
        id?: string;
        entityId?: string;
        userId?: string;
        pageSize?: number;
    }): Paginator;
    /**
      *
      * @summary: Checks eligibility to rate and review, and shows the cloud media configuration
      * @description: Use this API to check whether an entity is eligible to be rated and reviewed. Moreover, it shows the cloud media configuration too.
      * @param {Object} arg - arg object.
      * @param {string} arg.entityType - Type of entity, e.g. question, rate, review, answer, or comment.
      * @param {string} arg.entityId - ID of the eligible entity as specified in the entity type.
      
      **/
    checkEligibility({ entityType, entityId }?: {
        entityType: string;
        entityId: string;
    }): any;
    /**
      *
      * @summary: Delete Media
      * @description: Use this API to delete media for an entity ID.
      * @param {Object} arg - arg object.
      
      **/
    deleteMedia({}?: any): any;
    /**
     *
     * @summary: Add Media
     * @description: Use this API to add media to an entity, e.g. review.
     * @param {Object} arg - arg object.
     * @param {AddMediaListRequest} arg.body
     **/
    createMedia({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Update Media
     * @description: Use this API to update media (archive/approve) for an entity.
     * @param {Object} arg - arg object.
     * @param {UpdateMediaListRequest} arg.body
     **/
    updateMedia({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Get Media
      * @description: Use this API to retrieve all media from an entity.
      * @param {Object} arg - arg object.
      * @param {string} arg.entityType - Type of entity, e.g. question or product.
      * @param {string} arg.entityId - ID of the eligible entity as specified in the entity type(question ID/product ID).
      * @param {string} [arg.id] - ID of the media.
      * @param {string} [arg.pageId] - Pagination page ID to retrieve next set of results.
      * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
      
      **/
    getMedias({ entityType, entityId, id, pageId, pageSize }?: {
        entityType: string;
        entityId: string;
        id?: string;
        pageId?: string;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get Media
      * @description: Use this API to retrieve all media from an entity.
      * @param {Object} arg - arg object.
      * @param {string} arg.entityType - Type of entity, e.g. question or product.
      * @param {string} arg.entityId - ID of the eligible entity as specified in the entity type(question ID/product ID).
      * @param {string} [arg.id] - ID of the media.
      * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
      
      **/
    getMediasPaginator({ entityType, entityId, id, pageSize }?: {
        entityType: string;
        entityId: string;
        id?: string;
        pageSize?: number;
    }): Paginator;
    /**
      *
      * @summary: Get a review summary
      * @description: Review summary gives ratings and attribute metrics of a review per entity. Use this API to retrieve the following response data: review count, rating average. 'review metrics'/'attribute rating metrics' which contains name, type, average and count.
      * @param {Object} arg - arg object.
      * @param {string} arg.entityType - Type of entity, e.g. product, delivery, seller, order placed, order delivered, application, or template.
      * @param {string} arg.entityId - ID of the eligible entity as specified in the entity type.
      * @param {string} [arg.id] - Review summary identifier.
      * @param {string} [arg.pageId] - Pagination page ID to retrieve next set of results.
      * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
      
      **/
    getReviewSummaries({ entityType, entityId, id, pageId, pageSize }?: {
        entityType: string;
        entityId: string;
        id?: string;
        pageId?: string;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get a review summary
      * @description: Review summary gives ratings and attribute metrics of a review per entity. Use this API to retrieve the following response data: review count, rating average. 'review metrics'/'attribute rating metrics' which contains name, type, average and count.
      * @param {Object} arg - arg object.
      * @param {string} arg.entityType - Type of entity, e.g. product, delivery, seller, order placed, order delivered, application, or template.
      * @param {string} arg.entityId - ID of the eligible entity as specified in the entity type.
      * @param {string} [arg.id] - Review summary identifier.
      * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
      
      **/
    getReviewSummariesPaginator({ entityType, entityId, id, pageSize }?: {
        entityType: string;
        entityId: string;
        id?: string;
        pageSize?: number;
    }): Paginator;
    /**
     *
     * @summary: Add customer reviews
     * @description: Use this API to add customer reviews for a specific entity along with the following data: attributes rating, entity rating, title, description, media resources and template ID.
     * @param {Object} arg - arg object.
     * @param {UpdateReviewRequest} arg.body
     **/
    createReview({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Update customer reviews
     * @description: Use this API to update customer reviews for a specific entity along with following data: attributes rating, entity rating, title, description, media resources and template ID.
     * @param {Object} arg - arg object.
     * @param {UpdateReviewRequest} arg.body
     **/
    updateReview({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Get list of customer reviews
      * @description: Use this API to retrieve a list of customer reviews based on entity and filters provided.
      * @param {Object} arg - arg object.
      * @param {string} arg.entityType - Type of entity, e.g. product, delivery, seller, l3, order placed, order delivered, application, or template.
      * @param {string} arg.entityId - ID of the eligible entity as specified in the entity type.
      * @param {string} [arg.id] - ID of the review.
      * @param {string} [arg.userId] - ID of the user.
      * @param {string} [arg.media] - media type, e.g. image | video | video_file | video_link
      * @param {Array<number>} [arg.rating] - rating filter, e.g. 1-5
      * @param {Array<string>} [arg.attributeRating] - Filter for attribute rating.
      * @param {boolean} [arg.facets] - This is a boolean value for enabling metadata (facets). Selecting *true* will enable facets.
      * @param {string} [arg.sort] - Sort by: default | top | recent
      * @param {boolean} [arg.active] - Get the active reviews.
      * @param {boolean} [arg.approve] - Get the approved reviews.
      * @param {string} [arg.pageId] - Pagination page ID to retrieve next set of results.
      * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
      
      **/
    getReviews({ entityType, entityId, id, userId, media, rating, attributeRating, facets, sort, active, approve, pageId, pageSize, }?: {
        entityType: string;
        entityId: string;
        id?: string;
        userId?: string;
        media?: string;
        rating?: Array<number>;
        attributeRating?: Array<string>;
        facets?: boolean;
        sort?: string;
        active?: boolean;
        approve?: boolean;
        pageId?: string;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get list of customer reviews
      * @description: Use this API to retrieve a list of customer reviews based on entity and filters provided.
      * @param {Object} arg - arg object.
      * @param {string} arg.entityType - Type of entity, e.g. product, delivery, seller, l3, order placed, order delivered, application, or template.
      * @param {string} arg.entityId - ID of the eligible entity as specified in the entity type.
      * @param {string} [arg.id] - ID of the review.
      * @param {string} [arg.userId] - ID of the user.
      * @param {string} [arg.media] - media type, e.g. image | video | video_file | video_link
      * @param {Array<number>} [arg.rating] - rating filter, e.g. 1-5
      * @param {Array<string>} [arg.attributeRating] - Filter for attribute rating.
      * @param {boolean} [arg.facets] - This is a boolean value for enabling metadata (facets). Selecting *true* will enable facets.
      * @param {string} [arg.sort] - Sort by: default | top | recent
      * @param {boolean} [arg.active] - Get the active reviews.
      * @param {boolean} [arg.approve] - Get the approved reviews.
      * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
      
      **/
    getReviewsPaginator({ entityType, entityId, id, userId, media, rating, attributeRating, facets, sort, active, approve, pageSize, }?: {
        entityType: string;
        entityId: string;
        id?: string;
        userId?: string;
        media?: string;
        rating?: Array<number>;
        attributeRating?: Array<string>;
        facets?: boolean;
        sort?: string;
        active?: boolean;
        approve?: boolean;
        pageSize?: number;
    }): Paginator;
    /**
      *
      * @summary: Get the feedback templates for a product or l3
      * @description: Use this API to retrieve the details of the following feedback template. order, delivered, application, seller, order, placed, product
      * @param {Object} arg - arg object.
      * @param {string} [arg.templateId] - ID of the feedback template.
      * @param {string} [arg.entityId] - ID of the eligible entity as specified in the entity type.
      * @param {string} [arg.entityType] - Type of entity, e.g. product, delivery, seller, l3, order placed, order delivered, or application.
      
      **/
    getTemplates({ templateId, entityId, entityType }?: {
        templateId?: string;
        entityId?: string;
        entityType?: string;
    }): any;
    /**
     *
     * @summary: Create a new question
     * @description: Use this API to create a new question with following data- tags, text, type, choices for MCQ type questions, maximum length of answer.
     * @param {Object} arg - arg object.
     * @param {CreateQNARequest} arg.body
     **/
    createQuestion({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Update a question
     * @description: Use this API to update the status of a question, its tags and its choices.
     * @param {Object} arg - arg object.
     * @param {UpdateQNARequest} arg.body
     **/
    updateQuestion({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Get a list of QnA
      * @description: Use this API to retrieve a list of questions and answers for a given entity.
      * @param {Object} arg - arg object.
      * @param {string} arg.entityType - Type of entity, e.g. product, l3, etc.
      * @param {string} arg.entityId - ID of the eligible entity as specified in the entity type.
      * @param {string} [arg.id] - QNA ID
      * @param {string} [arg.userId] - User ID
      * @param {boolean} [arg.showAnswer] - This is a boolean value. Select *true* to display answers given.
      * @param {string} [arg.pageId] - Pagination page ID to retrieve next set of results.
      * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
      
      **/
    getQuestionAndAnswers({ entityType, entityId, id, userId, showAnswer, pageId, pageSize, }?: {
        entityType: string;
        entityId: string;
        id?: string;
        userId?: string;
        showAnswer?: boolean;
        pageId?: string;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get a list of QnA
      * @description: Use this API to retrieve a list of questions and answers for a given entity.
      * @param {Object} arg - arg object.
      * @param {string} arg.entityType - Type of entity, e.g. product, l3, etc.
      * @param {string} arg.entityId - ID of the eligible entity as specified in the entity type.
      * @param {string} [arg.id] - QNA ID
      * @param {string} [arg.userId] - User ID
      * @param {boolean} [arg.showAnswer] - This is a boolean value. Select *true* to display answers given.
      * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
      
      **/
    getQuestionAndAnswersPaginator({ entityType, entityId, id, userId, showAnswer, pageSize, }?: {
        entityType: string;
        entityId: string;
        id?: string;
        userId?: string;
        showAnswer?: boolean;
        pageSize?: number;
    }): Paginator;
    /**
      *
      * @summary: Get a list of votes
      * @description: Use this API to retrieve a list of votes of a current logged in user. Votes can be filtered using `ref_type`, i.e. review | comment.
      * @param {Object} arg - arg object.
      * @param {string} [arg.id] - vote ID
      * @param {string} [arg.refType] - Entity type, e.g. review | comment.
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results. Default value is 1.
      * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
      
      **/
    getVotes({ id, refType, pageNo, pageSize }?: {
        id?: string;
        refType?: string;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get a list of votes
      * @description: Use this API to retrieve a list of votes of a current logged in user. Votes can be filtered using `ref_type`, i.e. review | comment.
      * @param {Object} arg - arg object.
      * @param {string} [arg.id] - vote ID
      * @param {string} [arg.refType] - Entity type, e.g. review | comment.
      * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
      
      **/
    getVotesPaginator({ id, refType, pageSize }?: {
        id?: string;
        refType?: string;
        pageSize?: number;
    }): Paginator;
    /**
     *
     * @summary: Create a new vote
     * @description: Use this API to create a new vote, where the action could be an upvote or a downvote. This is useful when you want to give a vote (say upvote) to a review (ref_type) of a product (entity_type).
     * @param {Object} arg - arg object.
     * @param {VoteRequest} arg.body
     **/
    createVote({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Update a vote
     * @description: Use this API to update a vote with a new action, i.e. either an upvote or a downvote.
     * @param {Object} arg - arg object.
     * @param {UpdateVoteRequest} arg.body
     **/
    updateVote({ body }?: {
        body: any;
    }): any;
}
declare class PosCart {
    constructor(_conf: any);
    _conf: any;
    /**
      *
      * @summary: Fetch all Items Added to  Cart
      * @description: Get all the details of a items added to cart  by uid. If successful, returns a Cart resource in the response body specified in CartResponse
      * @param {Object} arg - arg object.
      * @param {number} [arg.uid] -
      * @param {boolean} [arg.i] -
      * @param {boolean} [arg.b] -
      * @param {number} [arg.assignCardId] -
      
      **/
    getCart({ uid, i, b, assignCardId }?: {
        uid?: number;
        i?: boolean;
        b?: boolean;
        assignCardId?: number;
    }): any;
    /**
      *
      * @summary: Fetch Last-Modified timestamp
      * @description: Fetch Last-Modified timestamp in header metadata
      * @param {Object} arg - arg object.
      * @param {number} [arg.uid] -
      
      **/
    getCartLastModified({ uid }?: {
        uid?: number;
    }): any;
    /**
     *
     * @summary: Add Items to Cart
     * @description: <p>Add Items to cart. See `AddCartRequest` in schema of request body for the list of attributes needed to add items to a cart. On successful request, returns cart response containing details of items, coupons available etc.these attributes will be fetched from the folowing api's</p>
     * @param {Object} arg - arg object.
     * @param {boolean} [arg.i] -
     * @param {boolean} [arg.b] -
     * @param {AddCartRequest} arg.body
     **/
    addItems({ body, i, b }?: {
        i?: boolean;
        b?: boolean;
        body: any;
    }): any;
    /**
     *
     * @summary: Update Items already added to Cart
     * @description: Request object containing attributes like item_quantity and item_size which can be updated .these attributes will be fetched from the folowing api's</p> <ul> <li><font color="monochrome">operation</font> Operation for current api call. <b>update_item</b> for update items. <b>remove_item</b> for removing items.</li> <li> <font color="monochrome">item_id</font>  "/platform/content/v1/products/"</li> <li> <font color="monochrome">item_size</font>   "/platform/content/v1/products/{slug}/sizes/"</li> <li> <font color="monochrome">quantity</font>  item quantity (must be greater than or equal to 1)</li> <li> <font color="monochrome">article_id</font>   "/content​/v1​/products​/{identifier}​/sizes​/price​/"</li> <li> <font color="monochrome">item_index</font>  item position in the cart (must be greater than or equal to 0)</li> </ul>
     * @param {Object} arg - arg object.
     * @param {number} [arg.uid] -
     * @param {boolean} [arg.i] -
     * @param {boolean} [arg.b] -
     * @param {UpdateCartRequest} arg.body
     **/
    updateCart({ body, uid, i, b }?: {
        uid?: number;
        i?: boolean;
        b?: boolean;
        body: any;
    }): any;
    /**
      *
      * @summary: Cart item count
      * @description: Get total count of item present in cart
      * @param {Object} arg - arg object.
      * @param {number} [arg.uid] - Cart id
      
      **/
    getItemCount({ uid }?: {
        uid?: number;
    }): any;
    /**
      *
      * @summary: Fetch Coupon
      * @description: Get all the details of a coupons applicable to cart  by uid. If successful, returns a Coupon resource in the response body specified in GetCouponResponse
      * @param {Object} arg - arg object.
      * @param {number} [arg.uid] -
      
      **/
    getCoupons({ uid }?: {
        uid?: number;
    }): any;
    /**
      *
      * @summary: Apply Coupon
      * @description: <p>Apply Coupons on Items added to cart. On successful request, returns cart response containing details of items ,coupons applied etc.these attributes will be consumed by  api</p> <ul> <li> <font color="monochrome">coupon_code</font></li>
  </ul>
      * @param {Object} arg - arg object.
      * @param {boolean} [arg.i] -
      * @param {boolean} [arg.b] -
      * @param {boolean} [arg.p] -
      * @param {number} [arg.uid] -
      * @param {ApplyCouponRequest} arg.body
      **/
    applyCoupon({ body, i, b, p, uid }?: {
        i?: boolean;
        b?: boolean;
        p?: boolean;
        uid?: number;
        body: any;
    }): any;
    /**
      *
      * @summary: Remove Coupon Applied
      * @description: Remove Coupon applied on the cart by passing uid in request body.
      * @param {Object} arg - arg object.
      * @param {number} [arg.uid] - Cart id
      
      **/
    removeCoupon({ uid }?: {
        uid?: number;
    }): any;
    /**
      *
      * @summary: Get discount offers based on quantity
      * @description: List applicable offers along with current, next and best offer for given product. Either one of **uid**, **item_id**, **slug** should be present*
      * @param {Object} arg - arg object.
      * @param {number} [arg.itemId] - Item id
      * @param {string} [arg.articleId] - Article mongo id
      * @param {number} [arg.uid] - Item id
      * @param {string} [arg.slug] - Item unique url from product page
      
      **/
    getBulkDiscountOffers({ itemId, articleId, uid, slug }?: {
        itemId?: number;
        articleId?: string;
        uid?: number;
        slug?: string;
    }): any;
    /**
     *
     * @summary: Fetch all Items Added to  Cart
     * @description: Get all the details of a items added to cart  by uid. If successful, returns a Cart resource in the response body specified in CartResponse
     * @param {Object} arg - arg object.
     * @param {number} [arg.uid] -
     * @param {boolean} [arg.i] -
     * @param {boolean} [arg.b] -
     * @param {RewardPointRequest} arg.body
     **/
    applyRewardPoints({ body, uid, i, b }?: {
        uid?: number;
        i?: boolean;
        b?: boolean;
        body: any;
    }): any;
    /**
      *
      * @summary: Fetch Address
      * @description: Get all the addresses associated with the account. If successful, returns a Address resource in the response body specified in GetAddressesResponse.attibutes listed below are optional <ul> <li> <font color="monochrome">uid</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
      * @param {Object} arg - arg object.
      * @param {number} [arg.uid] -
      * @param {string} [arg.mobileNo] -
      * @param {string} [arg.checkoutMode] -
      * @param {string} [arg.tags] -
      * @param {boolean} [arg.isDefault] -
      
      **/
    getAddresses({ uid, mobileNo, checkoutMode, tags, isDefault }?: {
        uid?: number;
        mobileNo?: string;
        checkoutMode?: string;
        tags?: string;
        isDefault?: boolean;
    }): any;
    /**
     *
     * @summary: Add Address to the account
     * @description: <p>Add Address to account. See `Address` in schema of request body for the list of attributes needed to add Address to account. On successful request, returns response containing address_id ,is_default_address and success message.
     * @param {Object} arg - arg object.
     * @param {Address} arg.body
     **/
    addAddress({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Fetch Single Address
      * @description: Get a addresses with the given id. If successful, returns a Address resource in the response body specified in `Address`.attibutes listed below are optional <ul> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
      * @param {Object} arg - arg object.
      * @param {number} arg.id -
      * @param {number} [arg.uid] -
      * @param {string} [arg.mobileNo] -
      * @param {string} [arg.checkoutMode] -
      * @param {string} [arg.tags] -
      * @param {boolean} [arg.isDefault] -
      
      **/
    getAddressById({ id, uid, mobileNo, checkoutMode, tags, isDefault }?: {
        id: number;
        uid?: number;
        mobileNo?: string;
        checkoutMode?: string;
        tags?: string;
        isDefault?: boolean;
    }): any;
    /**
     *
     * @summary: Update Address alreay added to account
     * @description: Request object containing attributes mentioned in  <font color="blue">Address </font> can be updated .these attributes are :</p> <ul> <li> <font color="monochrome">is_default_address</font></li> <li> <font color="monochrome">landmark</font></li> <li> <font color="monochrome">area</font></li> <li> <font color="monochrome">pincode</font></li> <li> <font color="monochrome">email</font></li> <li> <font color="monochrome">address_type</font></li> <li> <font color="monochrome">name</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">address</font></li> </ul>
     * @param {Object} arg - arg object.
     * @param {number} arg.id - Address id
     * @param {Address} arg.body
     **/
    updateAddress({ id, body }?: {
        id: number;
        body: any;
    }): any;
    /**
      *
      * @summary: Remove Address Associated to the account
      * @description: Delete a Address by it's address_id. Returns an object that tells whether the address was deleted successfully
      * @param {Object} arg - arg object.
      * @param {number} arg.id - Address id
      
      **/
    removeAddress({ id }?: {
        id: number;
    }): any;
    /**
     *
     * @summary: Select Address from All Addresses
     * @description: <p>Select Address from all addresses associated with the account in order to ship the cart items to .that address,otherwise default address will be selected implicitly. See `SelectCartAddressRequest` in schema of request body for the list of attributes needed to select Address from account. On successful request, returns Cart object response.below are the address attributes which needs to be sent. <ul> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">billing_address_id</font></li> <li> <font color="monochrome">uid</font></li> </ul>
     * @param {Object} arg - arg object.
     * @param {number} [arg.uid] -
     * @param {boolean} [arg.i] -
     * @param {boolean} [arg.b] -
     * @param {SelectCartAddressRequest} arg.body
     **/
    selectAddress({ body, uid, i, b }?: {
        uid?: number;
        i?: boolean;
        b?: boolean;
        body: any;
    }): any;
    /**
     *
     * @summary: Update Cart Payment
     * @description: Update Cart Payment for Your Account
     * @param {Object} arg - arg object.
     * @param {string} [arg.uid] -
     * @param {UpdateCartPaymentRequest} arg.body
     **/
    selectPaymentMode({ body, uid }?: {
        uid?: string;
        body: any;
    }): any;
    /**
      *
      * @summary: Get Cart Payment for valid coupon
      * @description: Validate coupon for selected payment mode
      * @param {Object} arg - arg object.
      * @param {string} [arg.uid] -
      * @param {string} [arg.addressId] -
      * @param {string} [arg.paymentMode] -
      * @param {string} [arg.paymentIdentifier] -
      * @param {string} [arg.aggregatorName] -
      * @param {string} [arg.merchantCode] -
      
      **/
    validateCouponForPayment({ uid, addressId, paymentMode, paymentIdentifier, aggregatorName, merchantCode, }?: {
        uid?: string;
        addressId?: string;
        paymentMode?: string;
        paymentIdentifier?: string;
        aggregatorName?: string;
        merchantCode?: string;
    }): any;
    /**
      *
      * @summary: Get delivery date and options before checkout
      * @description: Shipment break up item wise with delivery date. Actual                      delivery will be during given dates only. Items will be                      delivered in group of shipments created.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pickAtStoreUid] -
      * @param {number} [arg.orderingStoreId] -
      * @param {boolean} [arg.p] - Get payment options or not
      * @param {number} [arg.uid] - Cart id
      * @param {number} [arg.addressId] - Address id
      * @param {string} [arg.areaCode] - Destination pincode.
      * @param {string} [arg.orderType] - Order type of shipment
      
      **/
    getShipments({ pickAtStoreUid, orderingStoreId, p, uid, addressId, areaCode, orderType, }?: {
        pickAtStoreUid?: number;
        orderingStoreId?: number;
        p?: boolean;
        uid?: number;
        addressId?: number;
        areaCode?: string;
        orderType?: string;
    }): any;
    /**
     *
     * @summary: Update shipment delivery type and quantity before checkout
     * @description: Shipment break up item wise with delivery date. Actual                      delivery will be during given dates only. Items will be                      delivered in group of shipments created. Update the shipment                      type and quantity as per customer preference for store pick up or home delivery
     * @param {Object} arg - arg object.
     * @param {boolean} [arg.i] - Get items or not
     * @param {boolean} [arg.p] - Get payment options or not
     * @param {number} [arg.uid] - Cart id
     * @param {number} [arg.addressId] - Address id
     * @param {string} [arg.orderType] - Order is hand over or home delivery
     * @param {UpdateCartShipmentRequest} arg.body
     **/
    updateShipments({ body, i, p, uid, addressId, orderType }?: {
        i?: boolean;
        p?: boolean;
        uid?: number;
        addressId?: number;
        orderType?: string;
        body: any;
    }): any;
    /**
     *
     * @summary: Checkout Cart
     * @description: Checkout all items in cart to payment and order generation.                        For COD only order will be generated while for other checkout mode                        user will be redirected to payment gateway
     * @param {Object} arg - arg object.
     * @param {number} [arg.uid] -
     * @param {CartPosCheckoutRequest} arg.body
     **/
    checkoutCart({ body, uid }?: {
        uid?: number;
        body: any;
    }): any;
    /**
     *
     * @summary: Update Cart Meta
     * @description: Update cart meta like checkout_mode, gstin.
     * @param {Object} arg - arg object.
     * @param {number} [arg.uid] - Cart id received in get cart.
     * @param {CartMetaRequest} arg.body
     **/
    updateCartMeta({ body, uid }?: {
        uid?: number;
        body: any;
    }): any;
    /**
      *
      * @summary: Get available delivery modes for cart
      * @description: Get available delivery modes for cart and pick up store uid list. From given pick stores list user can pick up delivery. Use this uid to show store address
      * @param {Object} arg - arg object.
      * @param {string} arg.areaCode -
      * @param {number} [arg.uid] -
      
      **/
    getAvailableDeliveryModes({ areaCode, uid }?: {
        areaCode: string;
        uid?: number;
    }): any;
    /**
      *
      * @summary: Get list of stores for give uids
      * @description: Get list of stores by providing pick up available store uids.
      * @param {Object} arg - arg object.
      * @param {number} arg.storeUid -
      
      **/
    getStoreAddressByUid({ storeUid }?: {
        storeUid: number;
    }): any;
    /**
     *
     * @summary: Generate Cart sharing link token
     * @description: Generates shared cart snapshot and returns shortlink token
     * @param {Object} arg - arg object.
     * @param {GetShareCartLinkRequest} arg.body
     **/
    getCartShareLink({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Get shared cart snapshot and cart response
      * @description: Returns shared cart response for sent token with `shared_cart_details`                    containing shared cart details in response.
      * @param {Object} arg - arg object.
      * @param {string} arg.token - Shared short link token.
      
      **/
    getCartSharedItems({ token }?: {
        token: string;
    }): any;
    /**
      *
      * @summary: Merge or Replace existing cart
      * @description: Merge or Replace cart based on `action` parameter with shared cart of `token`
      * @param {Object} arg - arg object.
      * @param {string} arg.token - Shared short link token.
      * @param {string} arg.action - Operation to perform on existing cart, whether to merge or replace.
      
      **/
    updateCartWithSharedItems({ token, action }?: {
        token: string;
        action: string;
    }): any;
}
declare class Logistic {
    constructor(_conf: any);
    _conf: any;
    /**
     *
     * @summary: Use this API to know the delivery turnaround time (TAT) by entering the product details along with the PIN Code of the location.
     * @description: Get TAT of a product
     * @param {Object} arg - arg object.
     * @param {GetTatProductReqBody} arg.body
     **/
    getTatProduct({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Use this API to retrieve a city by its PIN Code.
      * @description: Get city from PIN Code
      * @param {Object} arg - arg object.
      * @param {string} arg.pincode - The PIN Code of the area, e.g. 400059
      
      **/
    getPincodeCity({ pincode }?: {
        pincode: string;
    }): any;
}
import Paginator = require("../common/Paginator");
