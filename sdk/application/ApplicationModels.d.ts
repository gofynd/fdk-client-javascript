export class Catalog {
    constructor(_conf: any);
    _conf: any;
    /**
      *
      * @summary: Get a product
      * @description: Products are the core resource of an application. Products can be associated by categories, collections, brands and more. This API retrieves the product specified by the given **slug**. If successful, returns a Product resource in the response body specified in `ProductDetail`
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/**
      
      **/
    getProductDetailBySlug({ slug }?: {
        slug: string;
    }): any;
    /**
      *
      * @summary: Get the sizes of a product
      * @description: A product can exist in multiple sizes. Use this API to fetch all the available sizes of a product. If successful, returns a ProductSize object in the response body as specified in `ProductSizes`
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/**
      * @param {string} [arg.storeId] - The store id of the product whose sizes need to be retrieved
      
      **/
    getProductSizesBySlug({ slug, storeId }?: {
        slug: string;
        storeId?: string;
    }): any;
    /**
      *
      * @summary: Get price a product size
      * @description: Any available product can exist in multiple sizes. Sometimes prices may vary among different sizes of the same product. Use this API to retrieve the price of the product of a particular size with the location details it is available in.
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/**
      * @param {string} arg.size - The size of the product for which the price needs to be retrieved. You can get the available sizes of a product from **v1.0/products/{slug}/sizes/**
      * @param {number} [arg.pincode] - The pincode of the product for which the price needs to be retrieved.
      * @param {string} [arg.storeId] - The store of the product whose size level price need to be retrieved
      
      **/
    getProductPriceBySlug({ slug, size, pincode, storeId }?: {
        slug: string;
        size: string;
        pincode?: number;
        storeId?: string;
    }): any;
    /**
      *
      * @summary: List sellers of a product
      * @description: A product of a particular size can be sold by multiple sellers. Use this API to fetch the sellers who are selling this product and have the stock of a particular size
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/**
      * @param {string} arg.size - The size of the product for which the price needs to be retrieved. You can get the available sizes of a product from **v1.0.0/products/sizes**
      * @param {number} [arg.pincode] - The pincode of the product for which the price needs to be retrieved.
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
      
      **/
    getProductSellersBySlug({ slug, size, pincode, pageNo, pageSize }?: {
        slug: string;
        size: string;
        pincode?: number;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Compare products
      * @description: Compare between the features of the given set of products Use this API to compare how one product ranks against other products. Note that at least one slug is mandatory in request query.
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - The unique identifier `slug` of a products. You can retrieve this from the APIs that list products like **v1.0/products/**
      
      **/
    getProductComparisonBySlugs({ slug }?: {
        slug: string;
    }): any;
    /**
      *
      * @summary: Get comparison between similar products
      * @description: Compare between the features of the given set of products Use this API to compare how one product ranks against other products
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - The unique identifier `slug` of a product. You can retrieve this from the APIs that list products like **v1.0/products/**
      
      **/
    getSimilarComparisonProductBySlug({ slug }?: {
        slug: string;
    }): any;
    /**
      *
      * @summary: Get comparison between frequently compared products with the given product
      * @description: Compare between the features of the give product with frequently compared products Use this API to compare how one product ranks against other products
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - The unique identifier `slug` of a product. You can retrieve this from the APIs that list products like **v1.0/products/**
      
      **/
    getComparedFrequentlyProductBySlug({ slug }?: {
        slug: string;
    }): any;
    /**
      *
      * @summary: Get similar products
      * @description: Get products similar to the one specified by the `identifier`. If successful, it returns a group of similar products based on type as described in `SimilarProductByTypeResponse`
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/**
      * @param {string} arg.similarType - The tag_identifier is used to fetch the particular type of similar product such as basic, visual, price, seller, category and spec.
      
      **/
    getProductSimilarByIdentifier({ slug, similarType }?: {
        slug: string;
        similarType: string;
    }): any;
    /**
      *
      * @summary: Get variant of a particular product
      * @description: A product can have a different type of variants varies from color to shade etc. Use this API to fetch all the available variants of a product. If successful, returns a Products for different variants type in the response body as specified in `ProductVariantResponse`
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/**
      
      **/
    getProductVariantsBySlug({ slug }?: {
        slug: string;
    }): any;
    /**
      *
      * @summary: Get the stock of a product
      * @description: Retrieve the available stock of the products. You can use this API to retrieve stock of multiple products at a time. Only 50 product IDs can be given in a single API request
      * @param {Object} arg - arg object.
      * @param {string} [arg.itemId] - Product id to get product stock (Max. 50 allowed)
      * @param {string} [arg.alu] - Product identifier alu to get product stock (Max. 50 allowed)
      * @param {string} [arg.skuCode] - Product identifier sku_code to get product stock (Max. 50 allowed)
      * @param {string} [arg.ean] - Product identifier ean to get product stock (Max. 50 allowed)
      * @param {string} [arg.upc] - Product identifier upc to get product stock (Max. 50 allowed)
      
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
      * @description: Retrieve the available stock of the products. You can use this api to get stock status of products whose inventory is updated in given time
      * @param {Object} arg - arg object.
      * @param {string} arg.timestamp - timestamp in UTC format (2020-07-23T10:27:50Z)
      * @param {number} [arg.pageSize] - Limit of number of items for stock status default 12
      * @param {string} [arg.pageId] - will give next page results
      
      **/
    getProductStockForTimeByIds({ timestamp, pageSize, pageId }?: {
        timestamp: string;
        pageSize?: number;
        pageId?: string;
    }): any;
    /**
      *
      * @summary: List the products
      * @description: List all the products associated with a brand, collection or category in a requested sort order. The API additionally supports arbitrary search queries that may refer the name of any product, brand, category or collection. If successful, returns a paginated list of products specified in `ProductListingResponse`
      * @param {Object} arg - arg object.
      * @param {string} [arg.q] - The search query. This can be a partial or complete name of a either a product, brand or category
      * @param {string} [arg.f] - The search filter parameters. All the parameter filtered from filter parameters will be passed in **f** parameter in this format. **?f=brand:voi-jeans||and:::l3_categories:t-shirts||shirts**
      * @param {boolean} [arg.filters] - Pass `filters` parameter to fetch the filter details. This flag is used to fetch all filters
      * @param {string} [arg.sortOn] - The order to sort the list of products on. The supported sort parameters are popularity, price, redemption and discount in either ascending or descending order. See the supported values below.
      * @param {string} [arg.pageId] - Each response will contain **page_id** param, which should be sent back to make pagination work.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
      * @param {number} [arg.pageNo] - If page_type is number then pass it to fetch page items. Default is 1.
      * @param {string} [arg.pageType] - For pagination type should be cursor or number. Default is cursor.
      
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
      * @summary: List the products
      * @description: List all the products associated with a brand, collection or category in a requested sort order. The API additionally supports arbitrary search queries that may refer the name of any product, brand, category or collection. If successful, returns a paginated list of products specified in `ProductListingResponse`
      * @param {Object} arg - arg object.
      * @param {string} [arg.q] - The search query. This can be a partial or complete name of a either a product, brand or category
      * @param {string} [arg.f] - The search filter parameters. All the parameter filtered from filter parameters will be passed in **f** parameter in this format. **?f=brand:voi-jeans||and:::l3_categories:t-shirts||shirts**
      * @param {boolean} [arg.filters] - Pass `filters` parameter to fetch the filter details. This flag is used to fetch all filters
      * @param {string} [arg.sortOn] - The order to sort the list of products on. The supported sort parameters are popularity, price, redemption and discount in either ascending or descending order. See the supported values below.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
      
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
      * @summary: List all the brands
      * @description: A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`
      * @param {Object} arg - arg object.
      * @param {string} [arg.department] - The name of the department. Use this parameter to filter products by a particular department. See below the list of available departments. You can retrieve available departments from the **v1.0/departments/** API
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
      
      **/
    getBrands({ department, pageNo, pageSize }?: {
        department?: string;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get metadata of a brand
      * @description: Fetch metadata of a brand. If successful, returns a metadata object specified in `BrandDetailResponse`
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - The unique identifier of a brand. i.e; `slug` of a brand. You can retrieve these from the APIs that list brands like **v1.0/brands/**
      
      **/
    getBrandDetailBySlug({ slug }?: {
        slug: string;
    }): any;
    /**
      *
      * @summary: List all the categories
      * @description: List all the categories. You can optionally pass filter the brands by the department. If successful, returns a paginated list of brands specified in `CategoryListingResponse`
      * @param {Object} arg - arg object.
      * @param {string} [arg.department] - The name of the department. Use this parameter to filter products by a particular department. See below the list of available departments. You can retrieve available departments from the **v1.0/departments/** API
      
      **/
    getCategories({ department }?: {
        department?: string;
    }): any;
    /**
      *
      * @summary: Get metadata of a category
      * @description: Fetch metadata of a category. If successful, returns a metadata object specified in `CategoryMetaResponse`
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - The unique identifier of a category. i.e; `slug` of a category. You can retrieve these from the APIs that list categories like **v1.0/categories/**
      
      **/
    getCategoryDetailBySlug({ slug }?: {
        slug: string;
    }): any;
    /**
      *
      * @summary: List the products
      * @description: List all the products associated with a brand, collection or category in a random order. If successful, returns a paginated list of products specified in `HomeListingResponse`
      * @param {Object} arg - arg object.
      * @param {string} [arg.sortOn] - Each response will contain **sort_on** param, which should be sent back to make pagination work.
      * @param {string} [arg.pageId] - Each response will contain **page_id** param, which should be sent back to make pagination work.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
      
      **/
    getHomeProducts({ sortOn, pageId, pageSize }?: {
        sortOn?: string;
        pageId?: string;
        pageSize?: number;
    }): any;
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
      * @description: Retrieves a list of suggestions for a given search query. Each suggestion is a valid search term that's generated on the basis of what is given in query. This is particularly useful to enhance the user experience in search. The given search query can be a partial name of any product, brand and category. For example, if the given search query `q` is _ski_ the relevant search suggestions returned might be a list containing _skirt_, _ski shoes_, __skin cream_ etc.
      * @param {Object} arg - arg object.
      * @param {string} arg.q - The search query. This can be a partial or complete name of a either a product, brand or category
      
      **/
    getSearchResults({ q }?: {
        q: string;
    }): any;
    /**
      *
      * @summary: List all the collections
      * @description: A Collection allows you to organize your products into hierarchical groups. For example, a dress might be in the category _Clothing_, the individual product might also be in the collection _Summer_. On successful request, returns all the collections`
      * @param {Object} arg - arg object.
      * @param {string} [arg.pageId] - Each response will contain **page_id** param, which should be sent back to make pagination work.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
      
      **/
    getCollections({ pageId, pageSize }?: {
        pageId?: string;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get the items in a collection
      * @description: Get items in a collection specified by its `slug`.
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - A `slug` is a human readable, URL friendly unique identifier of an object. Pass the `slug` of the collection for which you want to fetch the items
      * @param {string} [arg.f] - The search filter parameters. All the parameter filtered from filter parameters will be passed in **f** parameter in this format. **?f=brand:voi-jeans||and:::l3_categories:t-shirts||shirts**
      * @param {boolean} [arg.filters] - Pass `filters` parameter to fetch the filter details. This flag is used to fetch all filters
      * @param {string} [arg.sortOn] - The order to sort the list of products on. The supported sort parameters are popularity, price, redemption and discount in either ascending or descending order. See the supported values below.
      * @param {string} [arg.pageId] - Each response will contain **page_id** param, which should be sent back to make pagination work.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
      
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
      * @summary: Get a particular collection
      * @description: Get the details of a collection by its `slug`. If successful, returns a Collection resource in the response body specified in `CollectionDetailResponse`
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - A `slug` is a human readable, URL friendly unique identifier of an object. Pass the `slug` of the collection which you want to retrieve.
      
      **/
    getCollectionDetailBySlug({ slug }?: {
        slug: string;
    }): any;
    /**
      *
      * @summary: Get a list of followed Products, Brands, Collections
      * @description: A User can follow a Product they like. This API retrieves the products the user have followed. If successful, returns a Followed resource in the response body specified in `GetFollowResponseSchema`
      * @param {Object} arg - arg object.
      * @param {string} arg.collectionType - Type of collection followed. i. e. products, brands, collections
      
      **/
    getFollowedListing({ collectionType }?: {
        collectionType: string;
    }): any;
    /**
      *
      * @summary: UnFollow a Product
      * @description: You can undo a followed Product or Brand by its id, we refer this action as _unfollow_. Pass the uid of the product in request URL
      * @param {Object} arg - arg object.
      * @param {string} arg.collectionType - Type of collection followed. i. e. products, brands, collections
      * @param {number} arg.collectionId - the `id` of the collection type you want to unfollow
      
      **/
    unfollowById({ collectionType, collectionId }?: {
        collectionType: string;
        collectionId: number;
    }): any;
    /**
      *
      * @summary: Follow a particular Product
      * @description: Follow a particular Product specified by its uid. Pass the uid of the product in request URL
      * @param {Object} arg - arg object.
      * @param {string} arg.collectionType - Type of collection followed. i. e. products, brands, collections
      * @param {number} arg.collectionId - the `id` of the collection type you want to follow
      
      **/
    followById({ collectionType, collectionId }?: {
        collectionType: string;
        collectionId: number;
    }): any;
    /**
      *
      * @summary: Get Follow Count
      * @description: Get count of followers for given collection type and collection id.
      * @param {Object} arg - arg object.
      * @param {string} arg.collectionType - the `type` of the collection products/brands/collections.
      * @param {string} arg.collectionId - the `id` of the product/brand/collection.
      
      **/
    getFollowerCountById({ collectionType, collectionId }?: {
        collectionType: string;
        collectionId: string;
    }): any;
    /**
      *
      * @summary: Get the Ids of followed product, brand and collection.
      * @description: You can get the ids of all the followed Product, Brand and Collections. Pass collection_type as query parameter to fetch specific Ids
      * @param {Object} arg - arg object.
      * @param {string} [arg.collectionType] - Type of collection followed. i. e. products, brands, collections
      
      **/
    getFollowIds({ collectionType }?: {
        collectionType?: string;
    }): any;
    /**
      *
      * @summary: List store meta information.
      * @description: Use this API to get list of stores for specific application. If successful, returns list of stores specified in `StoreListingResponse`
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - Each response will contain **page_no** param, which should be sent back to make pagination work.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
      * @param {string} [arg.q] - This can be used to search a particulr store by its name or store_code.
      * @param {number} [arg.range] - This can be used to retrieve store within a particular range. For eg range=10000 (in meters)
      * @param {number} [arg.latitude] - This should be the latitude of the location from which one needs to retreive the nearest stores.
      * @param {number} [arg.longitude] - This should be the longitude of the location from which one needs to retreive the nearest stores.
      
      **/
    getStores({ pageNo, pageSize, q, range, latitude, longitude }?: {
        pageNo?: number;
        pageSize?: number;
        q?: string;
        range?: number;
        latitude?: number;
        longitude?: number;
    }): any;
}
export class Cart {
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
      * @summary: Fetch Address
      * @description: Get all the addresses associated with the account. If successful, returns a Address resource in the response body specified in GetAddressesResponse.attibutes listed below are optional <ul> <li> <font color="monochrome">uid</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
      * @param {Object} arg - arg object.
      * @param {number} [arg.uid] -
      * @param {number} [arg.mobileNo] -
      * @param {string} [arg.checkoutMode] -
      * @param {number} [arg.tags] -
      * @param {boolean} [arg.isDefault] -
      
      **/
    getAddresses({ uid, mobileNo, checkoutMode, tags, isDefault }?: {
        uid?: number;
        mobileNo?: number;
        checkoutMode?: string;
        tags?: number;
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
      * @param {number} [arg.mobileNo] -
      * @param {string} [arg.checkoutMode] -
      * @param {number} [arg.tags] -
      * @param {boolean} [arg.isDefault] -
      
      **/
    getAddressById({ id, uid, mobileNo, checkoutMode, tags, isDefault }?: {
        id: number;
        uid?: number;
        mobileNo?: number;
        checkoutMode?: string;
        tags?: number;
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
      * @summary: Get Cart Payment for valid coupon
      * @description: Validate coupon for selected payment mode
      * @param {Object} arg - arg object.
      * @param {string} [arg.uid] -
      * @param {string} [arg.addressId] -
      * @param {string} [arg.paymentMode] -
      * @param {string} [arg.paymentIdentifier] -
      * @param {string} [arg.aggregatorName] -
      * @param {string} [arg.merchantCode] -
      * @param {string} [arg.action] -
      * @param {string} [arg.type] -
      
      **/
    getPaymentModes({ uid, addressId, paymentMode, paymentIdentifier, aggregatorName, merchantCode, action, type, }?: {
        uid?: string;
        addressId?: string;
        paymentMode?: string;
        paymentIdentifier?: string;
        aggregatorName?: string;
        merchantCode?: string;
        action?: string;
        type?: string;
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
export class Lead {
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
     * @param {string} arg.ticketId - Ticket ID for which history is created
     * @param {TicketHistoryPayload} arg.body
     **/
    createHistoryForTicket({ ticketId, body }?: {
        ticketId: string;
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
export class Theme {
    constructor(_conf: any);
    _conf: any;
    /**
      *
      * @summary: Get applied theme for an application
      * @description:
      * @param {Object} arg - arg object.
      
      **/
    getAppliedTheme({}?: any): any;
    /**
      *
      * @summary: Get theme for preview
      * @description:
      * @param {Object} arg - arg object.
      * @param {string} arg.themeId - ID of the theme to be retrieved
      
      **/
    getThemeForPreview({ themeId }?: {
        themeId: string;
    }): any;
}
export class User {
    constructor(_conf: any);
    _conf: any;
    /**
     *
     * @summary: Login/Register with Facebook
     * @description: Used to login or register with Facebook
     * @param {Object} arg - arg object.
     * @param {OAuthRequestSchema} arg.body
     **/
    loginWithFacebook({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Login/Register with Google
     * @description: Used to login or register with Google
     * @param {Object} arg - arg object.
     * @param {OAuthRequestSchema} arg.body
     **/
    loginWithGoogle({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Login/Register with Google for android
     * @description: Used to login or register with Google for android
     * @param {Object} arg - arg object.
     * @param {OAuthRequestSchema} arg.body
     **/
    loginWithGoogleAndroid({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Login/Register with Google for ios
     * @description: Used to login or register with google for ios
     * @param {Object} arg - arg object.
     * @param {OAuthRequestSchema} arg.body
     **/
    loginWithGoogleIOS({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Login/Register with OTP
     * @description: Used to login or register with OTP
     * @param {Object} arg - arg object.
     * @param {string} [arg.platform] - Platform
     * @param {SendOtpRequestSchema} arg.body
     **/
    loginWithOTP({ body, platform }?: {
        platform?: string;
        body: any;
    }): any;
    /**
     *
     * @summary: Login/Register with password
     * @description: Used to login or register with email & password
     * @param {Object} arg - arg object.
     * @param {PasswordLoginRequestSchema} arg.body
     **/
    loginWithEmailAndPassword({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Reset Password
     * @description: Used to reset account password
     * @param {Object} arg - arg object.
     * @param {string} [arg.platform] - Platform
     * @param {SendResetPasswordEmailRequestSchema} arg.body
     **/
    sendResetPasswordEmail({ body, platform }?: {
        platform?: string;
        body: any;
    }): any;
    /**
     *
     * @summary:
     * @description:
     * @param {Object} arg - arg object.
     * @param {ForgotPasswordRequestSchema} arg.body
     **/
    forgotPassword({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary:
     * @description: Send code incase of reset password
     * @param {Object} arg - arg object.
     * @param {CodeRequestBodySchema} arg.body
     **/
    sendResetToken({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Login/Register with token
     * @description: Login/Register with token
     * @param {Object} arg - arg object.
     * @param {TokenRequestBodySchema} arg.body
     **/
    loginWithToken({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Registration Form
     * @description: Register using form
     * @param {Object} arg - arg object.
     * @param {string} [arg.platform] - Platform
     * @param {FormRegisterRequestSchema} arg.body
     **/
    registerWithForm({ body, platform }?: {
        platform?: string;
        body: any;
    }): any;
    /**
     *
     * @summary: Verify email
     * @description: Used to verify email
     * @param {Object} arg - arg object.
     * @param {CodeRequestBodySchema} arg.body
     **/
    verifyEmail({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Verify mobile
     * @description: Verify mobile
     * @param {Object} arg - arg object.
     * @param {CodeRequestBodySchema} arg.body
     **/
    verifyMobile({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Check if user has password
      * @description: Checks if user is using password or not
      * @param {Object} arg - arg object.
      
      **/
    hasPassword({}?: any): any;
    /**
     *
     * @summary: Update user password
     * @description: Used to update user password
     * @param {Object} arg - arg object.
     * @param {UpdatePasswordRequestSchema} arg.body
     **/
    updatePassword({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Logout user
      * @description: Used to log out user
      * @param {Object} arg - arg object.
      
      **/
    logout({}?: any): any;
    /**
     *
     * @summary: Send OTP on mobile
     * @description: Used to send otp to mobile
     * @param {Object} arg - arg object.
     * @param {string} [arg.platform] - Platform
     * @param {SendMobileOtpRequestSchema} arg.body
     **/
    sendOTPOnMobile({ body, platform }?: {
        platform?: string;
        body: any;
    }): any;
    /**
     *
     * @summary: Verify OTP on mobile
     * @description: Used to verify otp sent to mobile
     * @param {Object} arg - arg object.
     * @param {string} [arg.platform] - Platform
     * @param {VerifyOtpRequestSchema} arg.body
     **/
    verifyMobileOTP({ body, platform }?: {
        platform?: string;
        body: any;
    }): any;
    /**
     *
     * @summary: Send OTP on email
     * @description: Used to send otp to email
     * @param {Object} arg - arg object.
     * @param {string} [arg.platform] - Platform
     * @param {SendEmailOtpRequestSchema} arg.body
     **/
    sendOTPOnEmail({ body, platform }?: {
        platform?: string;
        body: any;
    }): any;
    /**
     *
     * @summary: Verify OTP on email
     * @description: Used to verify otp sent to email
     * @param {Object} arg - arg object.
     * @param {string} [arg.platform] - Platform
     * @param {VerifyOtpRequestSchema} arg.body
     **/
    verifyEmailOTP({ body, platform }?: {
        platform?: string;
        body: any;
    }): any;
    /**
      *
      * @summary: Get logged in user
      * @description: Used to get logged in user details
      * @param {Object} arg - arg object.
      
      **/
    getLoggedInUser({}?: any): any;
    /**
      *
      * @summary: Get list of sessions
      * @description: Lists all active sessions
      * @param {Object} arg - arg object.
      
      **/
    getListOfActiveSessions({}?: any): any;
    /**
      *
      * @summary: Get platform config
      * @description: Used to get platform config
      * @param {Object} arg - arg object.
      * @param {string} [arg.name] - Name
      
      **/
    getPlatformConfig({ name }?: {
        name?: string;
    }): any;
    /**
     *
     * @summary: Edit Profile Details
     * @description: Used to update profile
     * @param {Object} arg - arg object.
     * @param {string} [arg.platform] - Platform
     * @param {EditProfileRequestSchema} arg.body
     **/
    updateProfile({ body, platform }?: {
        platform?: string;
        body: any;
    }): any;
    /**
     *
     * @summary: Add mobile number to profile
     * @description: Used to add new mobile number to profile
     * @param {Object} arg - arg object.
     * @param {string} [arg.platform] - Platform
     * @param {EditMobileRequestSchema} arg.body
     **/
    addMobileNumber({ body, platform }?: {
        platform?: string;
        body: any;
    }): any;
    /**
      *
      * @summary: Delete mobile number from profile
      * @description: Used to delete mobile number from profile
      * @param {Object} arg - arg object.
      * @param {string} [arg.platform] - Platform
      * @param {boolean} arg.active - Active mobile number
      * @param {boolean} arg.primary - Primary number
      * @param {boolean} arg.verified - Verified Number
      * @param {string} arg.countryCode - Country code of phone number
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
     * @description: Used to set a mobile number as primary
     * @param {Object} arg - arg object.
     * @param {SendVerificationLinkMobileRequestSchema} arg.body
     **/
    setMobileNumberAsPrimary({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Send verification link to mobile
     * @description: Used to send verification link to a mobile number
     * @param {Object} arg - arg object.
     * @param {string} [arg.platform] - Platform
     * @param {SendVerificationLinkMobileRequestSchema} arg.body
     **/
    sendVerificationLinkToMobile({ body, platform }?: {
        platform?: string;
        body: any;
    }): any;
    /**
     *
     * @summary: Add email to profile
     * @description: Used to add new email to profile
     * @param {Object} arg - arg object.
     * @param {string} [arg.platform] - Platform
     * @param {EditEmailRequestSchema} arg.body
     **/
    addEmail({ body, platform }?: {
        platform?: string;
        body: any;
    }): any;
    /**
      *
      * @summary: Delete email from profile
      * @description: Used to delete email from profile
      * @param {Object} arg - arg object.
      * @param {string} [arg.platform] - Platform
      * @param {boolean} arg.active - Whether email id is active
      * @param {boolean} arg.primary - Whether email id is primary email
      * @param {boolean} arg.verified - Whether email id is verified
      * @param {string} arg.email - Email ID to be deleted
      
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
     * @description: Used to set an email as primart
     * @param {Object} arg - arg object.
     * @param {EditEmailRequestSchema} arg.body
     **/
    setEmailAsPrimary({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Send verification link to email
     * @description: Used to sent verification to an email
     * @param {Object} arg - arg object.
     * @param {string} [arg.platform] - Platform
     * @param {EditEmailRequestSchema} arg.body
     **/
    sendVerificationLinkToEmail({ body, platform }?: {
        platform?: string;
        body: any;
    }): any;
}
export class Communication {
    constructor(_conf: any);
    _conf: any;
    /**
      *
      * @summary: Get communication consent
      * @description: Get communication consent
      * @param {Object} arg - arg object.
      
      **/
    getCommunicationConsent({}?: any): any;
    /**
     *
     * @summary: Upsert communication consent
     * @description: Upsert communication consent
     * @param {Object} arg - arg object.
     * @param {CommunicationConsentReq} arg.body
     **/
    upsertCommunicationConsent({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Upsert push token of a user
     * @description: Upsert push token of a user
     * @param {Object} arg - arg object.
     * @param {PushtokenReq} arg.body
     **/
    upsertPushtoken({ body }?: {
        body: any;
    }): any;
}
export class Share {
    constructor(_conf: any);
    _conf: any;
    /**
      *
      * @summary: Create application QR Code
      * @description: Create application QR Code
      * @param {Object} arg - arg object.
      
      **/
    getApplicationQRCode({}?: any): any;
    /**
      *
      * @summary: Create product QR Code
      * @description: Create product QR Code
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - The unique identifier of a product
      
      **/
    getProductQRCodeBySlug({ slug }?: {
        slug: string;
    }): any;
    /**
      *
      * @summary: Create collection QR Code
      * @description: Create collection QR Code
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - The unique identifier of a collection
      
      **/
    getCollectionQRCodeBySlug({ slug }?: {
        slug: string;
    }): any;
    /**
      *
      * @summary: Create url QR Code
      * @description: Create url QR Code
      * @param {Object} arg - arg object.
      * @param {string} arg.url - Url
      
      **/
    getUrlQRCode({ url }?: {
        url: string;
    }): any;
    /**
     *
     * @summary: Create short link
     * @description: Create short link
     * @param {Object} arg - arg object.
     * @param {ShortLinkReq} arg.body
     **/
    createShortLink({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Get short link by hash
      * @description: Get short link by hash
      * @param {Object} arg - arg object.
      * @param {string} arg.hash - Hash of short link
      
      **/
    getShortLinkByHash({ hash }?: {
        hash: string;
    }): any;
    /**
      *
      * @summary: Get original link by hash
      * @description: Get original link by hash
      * @param {Object} arg - arg object.
      * @param {string} arg.hash - Hash of short link
      
      **/
    getOriginalShortLinkByHash({ hash }?: {
        hash: string;
    }): any;
}
export class FileStorage {
    constructor(_conf: any);
    _conf: any;
    /**
      *
      * @summary: This will complete the upload process. After successfully uploading file, you can call this operation to complete the upload process.
      * @description: Uploads an arbitrarily sized buffer or blob.
  
  It has three Major Steps:
  * Start
  * Upload
  * Complete
  
  ### Start
  Initiates the assets upload using `/v1.0/uploads/{namespace}/start`.
  It returns the storage link in response.
  
  ### Upload
  Use the storage link to upload a file (Buffer or Blob) to the File Storage.
  Make a `PUT` request on storage link received from `/v1.0/uploads/{namespace}/start` api with file (Buffer or Blob) as a request body.
  
  ### Complete
  After successfully upload, call `/v1.0/uploads/{namespace}/complete` api to complete the upload process.
  This operation will return the url for the uploaded file.
  
      * @param {Object} arg - arg object.
      * @param {string} arg.namespace - bucket name
      * @param {number} arg.companyId - company_id
      * @param {StartResponse} arg.body
      **/
    completeUpload({ namespace, companyId, body }?: {
        namespace: string;
        companyId: number;
        body: any;
    }): any;
    /**
      *
      * @summary: This operation initiates upload and returns storage link which is valid for 30 Minutes. You can use that storage link to make subsequent upload request with file buffer or blob.
      * @description: Uploads an arbitrarily sized buffer or blob.
  
  It has three Major Steps:
  * Start
  * Upload
  * Complete
  
  ### Start
  Initiates the assets upload using `/v1.0/uploads/{namespace}/start`.
  It returns the storage link in response.
  
  ### Upload
  Use the storage link to upload a file (Buffer or Blob) to the File Storage.
  Make a `PUT` request on storage link received from `/v1.0/uploads/{namespace}/start` api with file (Buffer or Blob) as a request body.
  
  ### Complete
  After successfully upload, call `/v1.0/uploads/{namespace}/complete` api to complete the upload process.
  This operation will return the url for the uploaded file.
  
      * @param {Object} arg - arg object.
      * @param {string} arg.namespace - bucket name
      * @param {number} arg.companyId - company_id
      * @param {StartRequest} arg.body
      **/
    startUpload({ namespace, companyId, body }?: {
        namespace: string;
        companyId: number;
        body: any;
    }): any;
}
export class Configuration {
    constructor(_conf: any);
    _conf: any;
    /**
      *
      * @summary: Get current application details
      * @description: Get current application details.
      * @param {Object} arg - arg object.
      
      **/
    getApplication({}?: any): any;
    /**
      *
      * @summary: Get application, owner and seller information
      * @description: Get application information with owner and seller basic details
      * @param {Object} arg - arg object.
      
      **/
    getOwnerInfo({}?: any): any;
    /**
      *
      * @summary: Get basic application details
      * @description: Get basic application details like name
      * @param {Object} arg - arg object.
      
      **/
    getBasicDetails({}?: any): any;
    /**
      *
      * @summary: Get integration tokens
      * @description: Get tokens for multiple integrations like Facebook, Googlemaps, Segment, Firebase, etc. Note: token values are encrypted with AES encryption using secret key. Kindly reach to developers for secret key.
      * @param {Object} arg - arg object.
      
      **/
    getIntegrationTokens({}?: any): any;
    /**
      *
      * @summary: Get deployment meta stores
      * @description: Get deployment meta stores.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - Current page no
      * @param {number} [arg.pageSize] - Current request items count
      * @param {string} [arg.q] - Search ordering store by name or store code
      
      **/
    getOrderingStores({ pageNo, pageSize, q }?: {
        pageNo?: number;
        pageSize?: number;
        q?: string;
    }): any;
    /**
      *
      * @summary: Get features of application
      * @description: Get features of application
      * @param {Object} arg - arg object.
      
      **/
    getFeatures({}?: any): any;
    /**
      *
      * @summary: Get application information
      * @description: Get Application Current Information. This includes information about social links, address and contact information of company/seller/brand of the application.
      * @param {Object} arg - arg object.
      
      **/
    getContactInfo({}?: any): any;
    /**
      *
      * @summary: Get application enabled currencies
      * @description: Get currency list for allowed currencies under current application
      * @param {Object} arg - arg object.
      
      **/
    getCurrencies({}?: any): any;
    /**
      *
      * @summary: Get currency by id
      * @description: Get currency object with symbol and name information by id.
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Currency object id
      
      **/
    getCurrencyById({ id }?: {
        id: string;
    }): any;
    /**
      *
      * @summary: Get list of languages
      * @description: Get list of supported languages under application.
      * @param {Object} arg - arg object.
      
      **/
    getLanguages({}?: any): any;
    /**
     *
     * @summary: Get ordering store signed cookie on selection of ordering store. This will be used by cart service to verify coupon against selected ordering store in cart.
     * @description: Get ordering store signed cookie on selection of ordering store.
     * @param {Object} arg - arg object.
     * @param {OrderingStoreSelectRequest} arg.body
     **/
    getOrderingStoreCookie({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Unset ordering store signed cookie on change of sales channel selection via domain in universal fynd store app.
      * @description: Unset ordering store cookie.
      * @param {Object} arg - arg object.
      
      **/
    removeOrderingStoreCookie({}?: any): any;
    /**
      *
      * @summary: Get Staff List.
      * @description: Get a staff list based on the user's session token passed in the header.
      * @param {Object} arg - arg object.
      * @param {boolean} [arg.orderIncent] - This is to check which staff members are applicable for order incentives.
      * @param {number} [arg.orderingStore] - This is to filter staff members from only selected ordering store.
      * @param {string} [arg.user] - Get single staff member details using staff user mongo id
      
      **/
    getAppStaffs({ orderIncent, orderingStore, user }?: {
        orderIncent?: boolean;
        orderingStore?: number;
        user?: string;
    }): any;
}
export class Payment {
    constructor(_conf: any);
    _conf: any;
    /**
      *
      * @summary: Get payment gateway keys
      * @description: Get payment gateway (key, secrets, merchant, sdk/api detail) to complete payment at front-end.
      * @param {Object} arg - arg object.
      * @param {string} arg.xApiToken - api token
      * @param {boolean} [arg.refresh] - refresh cache
      
      **/
    getAggregatorsConfig({ xApiToken, refresh }?: {
        xApiToken: string;
        refresh?: boolean;
    }): any;
    /**
     *
     * @summary: Attach a saved card to customer.
     * @description: Attach a saved card to customer at payment gateway i.e stripe and refresh card cache.
     * @param {Object} arg - arg object.
     * @param {AttachCardRequest} arg.body
     **/
    attachCardToCustomer({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Fetch active payment gateway for card
      * @description: Fetch active payment gateway along with customer id for cards payments.
      * @param {Object} arg - arg object.
      * @param {boolean} [arg.refresh] -
      
      **/
    getActiveCardAggregator({ refresh }?: {
        refresh?: boolean;
    }): any;
    /**
      *
      * @summary: Fetch the list of saved cards of user.
      * @description: Fetch the list of saved cards of user from active payment gateway.
      * @param {Object} arg - arg object.
      * @param {boolean} [arg.forceRefresh] -
      
      **/
    getActiveUserCards({ forceRefresh }?: {
        forceRefresh?: boolean;
    }): any;
    /**
     *
     * @summary: Delete an user card.
     * @description: Delete an added user card on payment gateway and remove from cache.
     * @param {Object} arg - arg object.
     * @param {DeletehCardRequest} arg.body
     **/
    deleteUserCard({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Validate customer for payment.
     * @description: Validate customer for payment i.e Simpl paylater, Rupifi loan.
     * @param {Object} arg - arg object.
     * @param {ValidateCustomerRequest} arg.body
     **/
    verifyCustomerForPayment({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Verify and charge payment
     * @description: Verify and charge payment server to server for Simpl & Mswipe.
     * @param {Object} arg - arg object.
     * @param {ChargeCustomerRequest} arg.body
     **/
    verifyAndChargePayment({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Payment Initialisation server to server for UPI and BharatQR.
     * @description: Payment Initialisation for UPI & BharatQR code, UPI requests to app and QR code to be displayed on screen.
     * @param {Object} arg - arg object.
     * @param {PaymentInitializationRequest} arg.body
     **/
    initialisePayment({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Continous polling to check status of payment on server.
     * @description: Continous polling on interval to check status of payment untill timeout.
     * @param {Object} arg - arg object.
     * @param {PaymentStatusUpdateRequest} arg.body
     **/
    checkAndUpdatePaymentStatus({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Get All Valid Payment Options
      * @description: Use this API to get Get All Valid Payment Options for making payment
      * @param {Object} arg - arg object.
      * @param {number} arg.amount - Payment amount
      * @param {string} arg.cartId - Cart id
      * @param {string} arg.pincode - Pincode
      * @param {string} arg.checkoutMode - Checkout mode
      * @param {boolean} [arg.refresh] -
      * @param {string} [arg.assignCardId] - selected card id
      * @param {string} [arg.userDetails] - URIencoded json annonymous user
      
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
      * @summary: Get All Valid Payment Options for POS
      * @description: Use this API to get Get All Valid Payment Options for making payment
      * @param {Object} arg - arg object.
      * @param {number} arg.amount - Payment amount
      * @param {string} arg.cartId - Cart id
      * @param {string} arg.pincode - Pincode
      * @param {string} arg.checkoutMode - Checkout mode
      * @param {boolean} [arg.refresh] -
      * @param {string} [arg.assignCardId] - selected card id
      * @param {string} arg.orderType - Order type
      * @param {string} [arg.userDetails] - URIencoded json annonymous user
      
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
      * @summary: List User Beneficiary
      * @description: Get all active  beneficiary details added by the user for refund
      * @param {Object} arg - arg object.
      * @param {string} arg.orderId -
      
      **/
    getUserBeneficiariesDetail({ orderId }?: {
        orderId: string;
    }): any;
    /**
      *
      * @summary: Ifsc Code Verification
      * @description: Get True/False for correct IFSC Code for adding bank details for refund
      * @param {Object} arg - arg object.
      * @param {string} [arg.ifscCode] -
      
      **/
    verifyIfscCode({ ifscCode }?: {
        ifscCode?: string;
    }): any;
    /**
      *
      * @summary: List Order Beneficiary
      * @description: Get all active  beneficiary details added by the user for refund
      * @param {Object} arg - arg object.
      * @param {string} arg.orderId -
      
      **/
    getOrderBeneficiariesDetail({ orderId }?: {
        orderId: string;
    }): any;
    /**
     *
     * @summary: Save Beneficiary details on otp validation.
     * @description: Save Beneficiary details on otp validation.
     * @param {Object} arg - arg object.
     * @param {AddBeneficiaryViaOtpVerificationRequest} arg.body
     **/
    verifyOtpAndAddBeneficiaryForBank({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Save bank details for cancelled/returned order
     * @description: Use this API to save bank details for returned/cancelled order to refund amount in his account.
     * @param {Object} arg - arg object.
     * @param {AddBeneficiaryDetailsRequest} arg.body
     **/
    addBeneficiaryDetails({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Send Otp on Adding wallet beneficiary
     * @description: Send Otp on Adding wallet beneficiary for user mobile verification
     * @param {Object} arg - arg object.
     * @param {WalletOtpRequest} arg.body
     **/
    verifyOtpAndAddBeneficiaryForWallet({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Mark Default Beneficiary For Refund
     * @description: Mark Default Beneficiary ot of all Beneficiary Details for Refund
     * @param {Object} arg - arg object.
     * @param {SetDefaultBeneficiaryRequest} arg.body
     **/
    updateDefaultBeneficiary({ body }?: {
        body: any;
    }): any;
}
export class Order {
    constructor(_conf: any);
    _conf: any;
    /**
      *
      * @summary: Get Orders for application based on application Id
      * @description: Get Orders
      * @param {Object} arg - arg object.
      * @param {string} [arg.pageNo] - Current page number
      * @param {string} [arg.pageSize] - Page limit
      * @param {string} [arg.fromDate] - From Date
      * @param {string} [arg.toDate] - To Date
      
      **/
    getOrders({ pageNo, pageSize, fromDate, toDate }?: {
        pageNo?: string;
        pageSize?: string;
        fromDate?: string;
        toDate?: string;
    }): any;
    /**
      *
      * @summary: Get Order by order id for application based on application Id
      * @description: Get Order By Fynd Order Id
      * @param {Object} arg - arg object.
      * @param {string} arg.orderId - Order Id
      
      **/
    getOrderById({ orderId }?: {
        orderId: string;
    }): any;
    /**
      *
      * @summary: Get Shipment by shipment id and order id for application based on application Id
      * @description: Get Shipment
      * @param {Object} arg - arg object.
      * @param {string} arg.shipmentId - Shipment Id
      
      **/
    getShipmentById({ shipmentId }?: {
        shipmentId: string;
    }): any;
    /**
      *
      * @summary: Get Shipment reasons by shipment id and order id for application based on application Id
      * @description: Get Shipment Reasons
      * @param {Object} arg - arg object.
      * @param {string} arg.shipmentId - Shipment Id
      
      **/
    getShipmentReasons({ shipmentId }?: {
        shipmentId: string;
    }): any;
    /**
     *
     * @summary: Update Shipment status by shipment id and order id for application based on application Id
     * @description: Update Shipment Status
     * @param {Object} arg - arg object.
     * @param {string} arg.shipmentId - Shipment Id
     * @param {ShipmentStatusUpdateBody} arg.body
     **/
    updateShipmentStatus({ shipmentId, body }?: {
        shipmentId: string;
        body: any;
    }): any;
    /**
      *
      * @summary: Track Shipment by shipment id and order id for application based on application Id
      * @description: Shipment Track
      * @param {Object} arg - arg object.
      * @param {string} arg.shipmentId - Shipment Id
      
      **/
    trackShipment({ shipmentId }?: {
        shipmentId: string;
    }): any;
}
export class Rewards {
    constructor(_conf: any);
    _conf: any;
    /**
     *
     * @summary: Get reward points that could be earned on any catalogue product.
     * @description: Evaluate the amount of reward points that could be earned on any catalogue product.
     * @param {Object} arg - arg object.
     * @param {CatalogueOrderRequest} arg.body
     **/
    getPointsOnProduct({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Calculates the discount on order-amount based on amount ranges configured in order_discount reward.
     * @description: Calculates the discount on order-amount based on amount ranges configured in order_discount reward.
     * @param {Object} arg - arg object.
     * @param {OrderDiscountRequest} arg.body
     **/
    getOrderDiscount({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Total available points of a user for current application
      * @description: Total available points of a user for current application
      * @param {Object} arg - arg object.
      
      **/
    getUserPoints({}?: any): any;
    /**
      *
      * @summary: Get list of points transactions.
      * @description: Get list of points transactions.
  The list of points history is paginated.
      * @param {Object} arg - arg object.
      * @param {string} [arg.pageId] - PageID is the ID of the requested page. For first request it should be kept empty.
      * @param {number} [arg.pageSize] - PageSize is the number of requested items in response.
      
      **/
    getUserPointsHistory({ pageId, pageSize }?: {
        pageId?: string;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: User's referral details.
      * @description: User's referral details.
      * @param {Object} arg - arg object.
      
      **/
    getUserReferralDetails({}?: any): any;
    /**
     *
     * @summary: Redeems referral code and credits points to users points account.
     * @description: Redeems referral code and credits points to users points account.
     * @param {Object} arg - arg object.
     * @param {RedeemReferralCodeRequest} arg.body
     **/
    redeemReferralCode({ body }?: {
        body: any;
    }): any;
}
export class Feedback {
    constructor(_conf: any);
    _conf: any;
    /**
     *
     * @summary: post a new abuse request
     * @description: Report a new abuse for specific entity with description text.
     * @param {Object} arg - arg object.
     * @param {ReportAbuseRequest} arg.body
     **/
    createAbuseReport({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Update abuse details
     * @description: Update the abuse details like status and description text.
     * @param {Object} arg - arg object.
     * @param {UpdateAbuseStatusRequest} arg.body
     **/
    updateAbuseReport({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Get list of abuse data
      * @description: Get the list of abuse data from entity type and entity ID.
      * @param {Object} arg - arg object.
      * @param {string} arg.entityId - entity id
      * @param {string} arg.entityType - entity type
      * @param {string} [arg.id] - abuse id
      * @param {string} [arg.pageId] - pagination page id
      * @param {number} [arg.pageSize] - pagination page size
      
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
      * @summary: Get list of attribute data
      * @description: Provides a list of all attribute data.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - pagination page number
      * @param {number} [arg.pageSize] - pagination page size
      
      **/
    getAttributes({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
     *
     * @summary: Add a new attribute request
     * @description: Add a new attribute with its name, slug and description.
     * @param {Object} arg - arg object.
     * @param {SaveAttributeRequest} arg.body
     **/
    createAttribute({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Get single attribute data
      * @description: Get a single attribute data from a given slug.
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - Slug of attribute
      
      **/
    getAttribute({ slug }?: {
        slug: string;
    }): any;
    /**
     *
     * @summary: Update attribute details
     * @description: Update the attribute's name and description.
     * @param {Object} arg - arg object.
     * @param {string} arg.slug - Slug of attribute
     * @param {UpdateAttributeRequest} arg.body
     **/
    updateAttribute({ slug, body }?: {
        slug: string;
        body: any;
    }): any;
    /**
     *
     * @summary: post a new comment
     * @description: This is used to add a new comment for specific entity.
     * @param {Object} arg - arg object.
     * @param {CommentRequest} arg.body
     **/
    createComment({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Update comment status
     * @description: Update the comment status (active/approve) or text.
     * @param {Object} arg - arg object.
     * @param {UpdateCommentRequest} arg.body
     **/
    updateComment({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Get list of comments
      * @description: Get the list of comments from specific entity type.
      * @param {Object} arg - arg object.
      * @param {string} arg.entityType - entity type
      * @param {string} [arg.id] - comment id
      * @param {string} [arg.entityId] - entity id
      * @param {string} [arg.userId] - user id - flag/filter to get comments for user
      * @param {string} [arg.pageId] - pagination page id
      * @param {number} [arg.pageSize] - pagination page size
      
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
      * @summary: Checks eligibility and cloud media config
      * @description: Checks eligibility to rate and review and cloud media configuration
      * @param {Object} arg - arg object.
      * @param {string} arg.entityType - entity type
      * @param {string} arg.entityId - entity id
      
      **/
    checkEligibility({ entityType, entityId }?: {
        entityType: string;
        entityId: string;
    }): any;
    /**
      *
      * @summary: Delete Media
      * @description: Delete Media for the given entity IDs.
      * @param {Object} arg - arg object.
      
      **/
    deleteMedia({}?: any): any;
    /**
     *
     * @summary: Add Media
     * @description: Add Media list for specific entity.
     * @param {Object} arg - arg object.
     * @param {AddMediaListRequest} arg.body
     **/
    createMedia({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Update Media
     * @description: Update Media (archive/approve) for the given entity.
     * @param {Object} arg - arg object.
     * @param {UpdateMediaListRequest} arg.body
     **/
    updateMedia({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Get Media
      * @description: Get Media from the given entity type and entity ID.
      * @param {Object} arg - arg object.
      * @param {string} arg.entityType - entity type
      * @param {string} arg.entityId - entity id
      * @param {string} [arg.id] - vote id
      * @param {string} [arg.pageId] - pagination page id
      * @param {number} [arg.pageSize] - pagination page size
      
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
      * @summary: Get a review summary
      * @description: Review summary gives ratings and attribute metrics of a review per entity
  It gives following response data: review count, rating average. review metrics / attribute rating metrics which contains name, type, average and count.
      * @param {Object} arg - arg object.
      * @param {string} arg.entityType - entity type
      * @param {string} arg.entityId - entity id
      * @param {string} [arg.id] - review summary identifier
      * @param {string} [arg.pageId] - pagination page id
      * @param {number} [arg.pageSize] - pagination page size
      
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
      * @summary: Add customer reviews
      * @description: Add customer reviews for specific entity with following data:
  attributes rating, entity rating, title, description, media resources and template id.
      * @param {Object} arg - arg object.
      * @param {UpdateReviewRequest} arg.body
      **/
    createReview({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Update customer reviews
      * @description: Update customer reviews for specific entity with following data:
  attributes rating, entity rating, title, description, media resources and template id.
      * @param {Object} arg - arg object.
      * @param {UpdateReviewRequest} arg.body
      **/
    updateReview({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Get list of customer reviews
      * @description: This is used to get the list of customer reviews based on entity and provided filters.
      * @param {Object} arg - arg object.
      * @param {string} arg.entityType - entity type
      * @param {string} arg.entityId - entity id
      * @param {string} [arg.id] - review id
      * @param {string} [arg.userId] - user id
      * @param {string} [arg.media] - media type e.g. image | video | video_file | video_link
      * @param {Array<number>} [arg.rating] - rating filter, 1-5
      * @param {Array<string>} [arg.attributeRating] - attribute rating filter
      * @param {boolean} [arg.facets] - facets (true|false)
      * @param {string} [arg.sort] - sort by : default | top | recent
      * @param {string} [arg.pageId] - pagination page id
      * @param {number} [arg.pageSize] - pagination page size
      
      **/
    getReviews({ entityType, entityId, id, userId, media, rating, attributeRating, facets, sort, pageId, pageSize, }?: {
        entityType: string;
        entityId: string;
        id?: string;
        userId?: string;
        media?: string;
        rating?: Array<number>;
        attributeRating?: Array<string>;
        facets?: boolean;
        sort?: string;
        pageId?: string;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get the templates for product or l3 type
      * @description: This is used to get the templates details.
      * @param {Object} arg - arg object.
      * @param {string} [arg.templateId] - template id
      * @param {string} [arg.entityId] - entity id
      * @param {string} [arg.entityType] - entity type e.g. product | l3
      
      **/
    getTemplates({ templateId, entityId, entityType }?: {
        templateId?: string;
        entityId?: string;
        entityType?: string;
    }): any;
    /**
      *
      * @summary: Create a new question
      * @description: This is used to create a new question with following data:
  tags, text, type, choices for MCQ type questions, maximum length of answer.
      * @param {Object} arg - arg object.
      * @param {CreateQNARequest} arg.body
      **/
    createQuestion({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Update question
     * @description: This is used to update question's status, tags and choices.
     * @param {Object} arg - arg object.
     * @param {UpdateQNARequest} arg.body
     **/
    updateQuestion({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Get a list of QnA
      * @description: This is used to get a list of questions and its answers.
      * @param {Object} arg - arg object.
      * @param {string} arg.entityType - entity type
      * @param {string} arg.entityId - entity id
      * @param {string} [arg.id] - qna id
      * @param {boolean} [arg.showAnswer] - show answer flag
      * @param {string} [arg.pageId] - pagination page id
      * @param {number} [arg.pageSize] - pagination page size
      
      **/
    getQuestionAndAnswers({ entityType, entityId, id, showAnswer, pageId, pageSize, }?: {
        entityType: string;
        entityId: string;
        id?: string;
        showAnswer?: boolean;
        pageId?: string;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get list of votes
      * @description: This is used to get the list of votes of a current logged in user. Votes can be filtered using `ref_type` i.e. review | comment.
      * @param {Object} arg - arg object.
      * @param {string} [arg.id] - vote id
      * @param {string} [arg.refType] - entity type e.g. review | comment
      
      **/
    getVotes({ id, refType }?: {
        id?: string;
        refType?: string;
    }): any;
    /**
     *
     * @summary: Create a new vote
     * @description: This is used to create a new vote and the actions can be upvote or downvote.
     * @param {Object} arg - arg object.
     * @param {VoteRequest} arg.body
     **/
    createVote({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Update vote
     * @description: This is used to update the vote and the actions can be upvote or downvote.
     * @param {Object} arg - arg object.
     * @param {UpdateVoteRequest} arg.body
     **/
    updateVote({ body }?: {
        body: any;
    }): any;
}
export class PosCart {
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
      * @summary: Fetch Address
      * @description: Get all the addresses associated with the account. If successful, returns a Address resource in the response body specified in GetAddressesResponse.attibutes listed below are optional <ul> <li> <font color="monochrome">uid</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
      * @param {Object} arg - arg object.
      * @param {number} [arg.uid] -
      * @param {number} [arg.mobileNo] -
      * @param {string} [arg.checkoutMode] -
      * @param {number} [arg.tags] -
      * @param {boolean} [arg.isDefault] -
      
      **/
    getAddresses({ uid, mobileNo, checkoutMode, tags, isDefault }?: {
        uid?: number;
        mobileNo?: number;
        checkoutMode?: string;
        tags?: number;
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
      * @param {number} [arg.mobileNo] -
      * @param {string} [arg.checkoutMode] -
      * @param {number} [arg.tags] -
      * @param {boolean} [arg.isDefault] -
      
      **/
    getAddressById({ id, uid, mobileNo, checkoutMode, tags, isDefault }?: {
        id: number;
        uid?: number;
        mobileNo?: number;
        checkoutMode?: string;
        tags?: number;
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
      * @summary: Get Cart Payment for valid coupon
      * @description: Validate coupon for selected payment mode
      * @param {Object} arg - arg object.
      * @param {string} [arg.uid] -
      * @param {string} [arg.addressId] -
      * @param {string} [arg.paymentMode] -
      * @param {string} [arg.paymentIdentifier] -
      * @param {string} [arg.aggregatorName] -
      * @param {string} [arg.merchantCode] -
      * @param {string} [arg.action] -
      * @param {string} [arg.type] -
      
      **/
    getPaymentModes({ uid, addressId, paymentMode, paymentIdentifier, aggregatorName, merchantCode, action, type, }?: {
        uid?: string;
        addressId?: string;
        paymentMode?: string;
        paymentIdentifier?: string;
        aggregatorName?: string;
        merchantCode?: string;
        action?: string;
        type?: string;
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
     * @param {CartCheckoutRequest} arg.body
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
export class Logistic {
    constructor(_conf: any);
    _conf: any;
    /**
     *
     * @summary: Get Tat Product
     * @description: Get Tat Product
     * @param {Object} arg - arg object.
     * @param {GetTatProductReqBody} arg.body
     **/
    getTatProduct({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Get City from Pincode
      * @description: Get City from Pincode
      * @param {Object} arg - arg object.
      * @param {string} arg.pincode - Pincode
      
      **/
    getPincodeCity({ pincode }?: {
        pincode: string;
    }): any;
}
import Paginator = require("../common/Paginator");
