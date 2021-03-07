export class Catalog {
    constructor(_conf: any);
    _conf: any;
    /**
      *
      * @summary:  Get a product
      * @description:  Products are the core resource of an application. Products can be associated by categories, collections, brands and more. This API retrieves the product specified by the given **slug**. If successful, returns a Product resource in the response body specified in `ProductDetail`
      * @param  {string} slug - The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/**
      
      **/
    getProductDetailBySlug(slug: string): any;
    /**
      *
      * @summary:  Get the sizes of a product
      * @description:  A product can exist in multiple sizes. Use this API to fetch all the available sizes of a product. If successful, returns a ProductSize object in the response body as specified in `ProductSizes`
      * @param  {string} slug - The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/**
      * @param  {string} [storeId] - The store id of the product whose sizes need to be retrieved
      
      **/
    getProductSizesBySlug(slug: string, storeId?: string): any;
    /**
      *
      * @summary:  Get price a product size
      * @description:  Any available product can exist in multiple sizes. Sometimes prices may vary among different sizes of the same product. Use this API to retrieve the price of the product of a particular size with the location details it is available in.
      * @param  {string} slug - The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/**
      * @param  {string} size - The size of the product for which the price needs to be retrieved. You can get the available sizes of a product from **v1.0/products/{slug}/sizes/**
      * @param  {number} [pincode] - The pincode of the product for which the price needs to be retrieved.
      * @param  {string} [storeId] - The store of the product whose size level price need to be retrieved
      
      **/
    getProductPriceBySlug(slug: string, size: string, pincode?: number, storeId?: string): any;
    /**
      *
      * @summary:  List sellers of a product
      * @description:  A product of a particular size can be sold by multiple sellers. Use this API to fetch the sellers who are selling this product and have the stock of a particular size
      * @param  {string} slug - The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/**
      * @param  {string} size - The size of the product for which the price needs to be retrieved. You can get the available sizes of a product from **v1.0.0/products/sizes**
      * @param  {number} [pincode] - The pincode of the product for which the price needs to be retrieved.
      * @param  {number} [pageNo] - The page number to navigate through the given set of results.
      * @param  {number} [pageSize] - Number of items to retrieve in each page. Default is 12.
      
      **/
    getProductSellersBySlug(slug: string, size: string, pincode?: number, pageNo?: number, pageSize?: number): any;
    /**
      *
      * @summary:  Compare products
      * @description:  Compare between the features of the given set of products Use this API to compare how one product ranks against other products. Note that at least one slug is mandatory in request query.
      * @param  {string} slug - The unique identifier `slug` of a products. You can retrieve this from the APIs that list products like **v1.0/products/**
      
      **/
    getProductComparisonBySlugs(slug: string): any;
    /**
      *
      * @summary:  Get comparison between similar products
      * @description:  Compare between the features of the given set of products Use this API to compare how one product ranks against other products
      * @param  {string} slug - The unique identifier `slug` of a product. You can retrieve this from the APIs that list products like **v1.0/products/**
      
      **/
    getSimilarComparisonProductBySlug(slug: string): any;
    /**
      *
      * @summary:  Get comparison between frequently compared products with the given product
      * @description:  Compare between the features of the give product with frequently compared products Use this API to compare how one product ranks against other products
      * @param  {string} slug - The unique identifier `slug` of a product. You can retrieve this from the APIs that list products like **v1.0/products/**
      
      **/
    getComparedFrequentlyProductBySlug(slug: string): any;
    /**
      *
      * @summary:  Get similar products
      * @description:  Get products similar to the one specified by the `identifier`. If successful, it returns a group of similar products based on type as described in `SimilarProductByTypeResponse`
      * @param  {string} slug - The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/**
      * @param  {string} similarType - The tag_identifier is used to fetch the particular type of similar product such as basic, visual, price, seller, category and spec.
      
      **/
    getProductSimilarByIdentifier(slug: string, similarType: string): any;
    /**
      *
      * @summary:  Get variant of a particular product
      * @description:  A product can have a different type of variants varies from color to shade etc. Use this API to fetch all the available variants of a product. If successful, returns a Products for different variants type in the response body as specified in `ProductVariantResponse`
      * @param  {string} slug - The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/**
      
      **/
    getProductVariantsBySlug(slug: string): any;
    /**
      *
      * @summary:  Get the stock of a product
      * @description:  Retrieve the available stock of the products. You can use this API to retrieve stock of multiple products at a time. Only 50 product IDs can be given in a single API request
      * @param  {string} [itemId] - Product id to get product stock (Max. 50 allowed)
      * @param  {string} [alu] - Product identifier alu to get product stock (Max. 50 allowed)
      * @param  {string} [skuCode] - Product identifier sku_code to get product stock (Max. 50 allowed)
      * @param  {string} [ean] - Product identifier ean to get product stock (Max. 50 allowed)
      * @param  {string} [upc] - Product identifier upc to get product stock (Max. 50 allowed)
      
      **/
    getProductStockByIds(itemId?: string, alu?: string, skuCode?: string, ean?: string, upc?: string): any;
    /**
      *
      * @summary:  Get the stock of a product
      * @description:  Retrieve the available stock of the products. You can use this api to get stock status of products whose inventory is updated in given time
      * @param  {string} timestamp - timestamp in UTC format (2020-07-23T10:27:50Z)
      * @param  {number} [pageSize] - Limit of number of items for stock status default 12
      * @param  {string} [pageId] - will give next page results
      
      **/
    getProductStockForTimeByIds(timestamp: string, pageSize?: number, pageId?: string): any;
    /**
      *
      * @summary:  List the products
      * @description:  List all the products associated with a brand, collection or category in a requested sort order. The API additionally supports arbitrary search queries that may refer the name of any product, brand, category or collection. If successful, returns a paginated list of products specified in `ProductListingResponse`
      * @param  {string} [q] - The search query. This can be a partial or complete name of a either a product, brand or category
      * @param  {string} [f] - The search filter parameters. All the parameter filtered from filter parameters will be passed in **f** parameter in this format. **?f=brand:voi-jeans||and:::l3_categories:t-shirts||shirts**
      * @param  {boolean} [filters] - Pass `filters` parameter to fetch the filter details. This flag is used to fetch all filters
      * @param  {string} [sortOn] - The order to sort the list of products on. The supported sort parameters are popularity, price, redemption and discount in either ascending or descending order. See the supported values below.
      * @param  {string} [pageId] - Each response will contain **page_id** param, which should be sent back to make pagination work.
      * @param  {number} [pageSize] - Number of items to retrieve in each page. Default is 12.
      * @param  {number} [pageNo] - If page_type is number then pass it to fetch page items. Default is 1.
      * @param  {string} [pageType] - For pagination type should be cursor or number. Default is cursor.
      
      **/
    getProducts(q?: string, f?: string, filters?: boolean, sortOn?: string, pageId?: string, pageSize?: number, pageNo?: number, pageType?: string): any;
    /**
      *
      * @summary:  List all the brands
      * @description:  A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`
      * @param  {string} [department] - The name of the department. Use this parameter to filter products by a particular department. See below the list of available departments. You can retrieve available departments from the **v1.0/departments/** API
      * @param  {number} [pageNo] - The page number to navigate through the given set of results
      * @param  {number} [pageSize] - Number of items to retrieve in each page. Default is 12.
      
      **/
    getBrands(department?: string, pageNo?: number, pageSize?: number): any;
    /**
      *
      * @summary:  Get metadata of a brand
      * @description:  Fetch metadata of a brand. If successful, returns a metadata object specified in `BrandDetailResponse`
      * @param  {string} slug - The unique identifier of a brand. i.e; `slug` of a brand. You can retrieve these from the APIs that list brands like **v1.0/brands/**
      
      **/
    getBrandDetailBySlug(slug: string): any;
    /**
      *
      * @summary:  List all the categories
      * @description:  List all the categories. You can optionally pass filter the brands by the department. If successful, returns a paginated list of brands specified in `CategoryListingResponse`
      * @param  {string} [department] - The name of the department. Use this parameter to filter products by a particular department. See below the list of available departments. You can retrieve available departments from the **v1.0/departments/** API
      
      **/
    getCategories(department?: string): any;
    /**
      *
      * @summary:  Get metadata of a category
      * @description:  Fetch metadata of a category. If successful, returns a metadata object specified in `CategoryMetaResponse`
      * @param  {string} slug - The unique identifier of a category. i.e; `slug` of a category. You can retrieve these from the APIs that list categories like **v1.0/categories/**
      
      **/
    getCategoryDetailBySlug(slug: string): any;
    /**
      *
      * @summary:  List the products
      * @description:  List all the products associated with a brand, collection or category in a random order. If successful, returns a paginated list of products specified in `HomeListingResponse`
      * @param  {string} [sortOn] - Each response will contain **sort_on** param, which should be sent back to make pagination work.
      * @param  {string} [pageId] - Each response will contain **page_id** param, which should be sent back to make pagination work.
      * @param  {number} [pageSize] - Number of items to retrieve in each page. Default is 12.
      
      **/
    getHomeProducts(sortOn?: string, pageId?: string, pageSize?: number): any;
    /**
      *
      * @summary:  List all the departments
      * @description:  Departments are a way to categorise similar products. A product can lie in multiple departments. For example, a skirt can below to the 'Women's Fashion' Department while a handbag can lie in 'Women's Accessories' Department. Use this API to list all the departments. If successful, returns the list of departments specified in `DepartmentResponse`
      
      **/
    getDepartments(): any;
    /**
      *
      * @summary:  Get relevant suggestions for a search query
      * @description:  Retrieves a list of suggestions for a given search query. Each suggestion is a valid search term that's generated on the basis of what is given in query. This is particularly useful to enhance the user experience in search. The given search query can be a partial name of any product, brand and category. For example, if the given search query `q` is _ski_ the relevant search suggestions returned might be a list containing _skirt_, _ski shoes_, __skin cream_ etc.
      * @param  {string} q - The search query. This can be a partial or complete name of a either a product, brand or category
      
      **/
    getSearchResults(q: string): any;
    /**
      *
      * @summary:  List all the collections
      * @description:  A Collection allows you to organize your products into hierarchical groups. For example, a dress might be in the category _Clothing_, the individual product might also be in the collection _Summer_. On successful request, returns all the collections`
      * @param  {string} [pageId] - Each response will contain **page_id** param, which should be sent back to make pagination work.
      * @param  {number} [pageSize] - Number of items to retrieve in each page. Default is 12.
      
      **/
    getCollections(pageId?: string, pageSize?: number): any;
    /**
      *
      * @summary:  Get the items in a collection
      * @description:  Get items in a collection specified by its `slug`.
      * @param  {string} slug - A `slug` is a human readable, URL friendly unique identifier of an object. Pass the `slug` of the collection for which you want to fetch the items
      * @param  {string} [f] - The search filter parameters. All the parameter filtered from filter parameters will be passed in **f** parameter in this format. **?f=brand:voi-jeans||and:::l3_categories:t-shirts||shirts**
      * @param  {boolean} [filters] - Pass `filters` parameter to fetch the filter details. This flag is used to fetch all filters
      * @param  {string} [sortOn] - The order to sort the list of products on. The supported sort parameters are popularity, price, redemption and discount in either ascending or descending order. See the supported values below.
      * @param  {string} [pageId] - Each response will contain **page_id** param, which should be sent back to make pagination work.
      * @param  {number} [pageSize] - Number of items to retrieve in each page. Default is 12.
      
      **/
    getCollectionItemsBySlug(slug: string, f?: string, filters?: boolean, sortOn?: string, pageId?: string, pageSize?: number): any;
    /**
      *
      * @summary:  Get a particular collection
      * @description:  Get the details of a collection by its `slug`. If successful, returns a Collection resource in the response body specified in `CollectionDetailResponse`
      * @param  {string} slug - A `slug` is a human readable, URL friendly unique identifier of an object. Pass the `slug` of the collection which you want to retrieve.
      
      **/
    getCollectionDetailBySlug(slug: string): any;
    /**
      *
      * @summary:  Get a list of followed Products, Brands, Collections
      * @description:  A User can follow a Product they like. This API retrieves the products the user have followed. If successful, returns a Followed resource in the response body specified in `GetFollowResponseSchema`
      * @param  {string} collectionType - Type of collection followed. i. e. products, brands, collections
      
      **/
    getFollowedListing(collectionType: string): any;
    /**
      *
      * @summary:  UnFollow a Product
      * @description:  You can undo a followed Product or Brand by its id, we refer this action as _unfollow_. Pass the uid of the product in request URL
      * @param  {string} collectionType - Type of collection followed. i. e. products, brands, collections
      * @param  {number} collectionId - the `id` of the collection type you want to unfollow
      
      **/
    unfollowById(collectionType: string, collectionId: number): any;
    /**
      *
      * @summary:  Follow a particular Product
      * @description:  Follow a particular Product specified by its uid. Pass the uid of the product in request URL
      * @param  {string} collectionType - Type of collection followed. i. e. products, brands, collections
      * @param  {number} collectionId - the `id` of the collection type you want to follow
      
      **/
    followById(collectionType: string, collectionId: number): any;
    /**
      *
      * @summary:  Get Follow Count
      * @description:  Get count of followers for given collection type and collection id.
      * @param  {string} collectionType - the `type` of the collection products/brands/collections.
      * @param  {string} collectionId - the `id` of the product/brand/collection.
      
      **/
    getFollowerCountById(collectionType: string, collectionId: string): any;
    /**
      *
      * @summary:  Get the Ids of followed product, brand and collection.
      * @description:  You can get the ids of all the followed Product, Brand and Collections. Pass collection_type as query parameter to fetch specific Ids
      * @param  {string} [collectionType] - Type of collection followed. i. e. products, brands, collections
      
      **/
    getFollowIds(collectionType?: string): any;
    /**
      *
      * @summary:  List store meta information.
      * @description:  Use this API to get list of stores for specific application. If successful, returns list of stores specified in `StoreListingResponse`
      * @param  {number} [pageNo] - Each response will contain **page_no** param, which should be sent back to make pagination work.
      * @param  {number} [pageSize] - Number of items to retrieve in each page.
      * @param  {string} [q] - This can be used to search a particulr store by its name or store_code.
      * @param  {number} [range] - This can be used to retrieve store within a particular range. For eg range=10000 (in meters)
      * @param  {number} [latitude] - This should be the latitude of the location from which one needs to retreive the nearest stores.
      * @param  {number} [longitude] - This should be the longitude of the location from which one needs to retreive the nearest stores.
      
      **/
    getStores(pageNo?: number, pageSize?: number, q?: string, range?: number, latitude?: number, longitude?: number): any;
}
export class Cart {
    constructor(_conf: any);
    _conf: any;
    /**
      *
      * @summary:  Fetch all Items Added to  Cart
      * @description:  Get all the details of a items added to cart  by uid. If successful, returns a Cart resource in the response body specified in CartResponse
      * @param  {number} [uid] -
      * @param  {boolean} [i] -
      * @param  {boolean} [b] -
      * @param  {number} [assignCardId] -
      
      **/
    getCart(uid?: number, i?: boolean, b?: boolean, assignCardId?: number): any;
    /**
      *
      * @summary:  Fetch Last-Modified timestamp
      * @description:  Fetch Last-Modified timestamp in header metadata
      * @param  {number} [uid] -
      
      **/
    getCartLastModified(uid?: number): any;
    /**
     *
     * @summary:  Add Items to Cart
     * @description:  <p>Add Items to cart. See `AddCartRequest` in schema of request body for the list of attributes needed to add items to a cart. On successful request, returns cart response containing details of items, coupons available etc.these attributes will be fetched from the folowing api's</p>
     * @param  {boolean} [i] -
     * @param  {boolean} [b] -
     * @param  {AddCartRequest} body
     **/
    addItems(body: any, i?: boolean, b?: boolean): any;
    /**
     *
     * @summary:  Update Items already added to Cart
     * @description:  Request object containing attributes like item_quantity and item_size which can be updated .these attributes will be fetched from the folowing api's</p> <ul> <li><font color="monochrome">operation</font> Operation for current api call. <b>update_item</b> for update items. <b>remove_item</b> for removing items.</li> <li> <font color="monochrome">item_id</font>  "/platform/content/v1/products/"</li> <li> <font color="monochrome">item_size</font>   "/platform/content/v1/products/{slug}/sizes/"</li> <li> <font color="monochrome">quantity</font>  item quantity (must be greater than or equal to 1)</li> <li> <font color="monochrome">article_id</font>   "/content​/v1​/products​/{identifier}​/sizes​/price​/"</li> <li> <font color="monochrome">item_index</font>  item position in the cart (must be greater than or equal to 0)</li> </ul>
     * @param  {number} [uid] -
     * @param  {boolean} [i] -
     * @param  {boolean} [b] -
     * @param  {UpdateCartRequest} body
     **/
    updateCart(body: any, uid?: number, i?: boolean, b?: boolean): any;
    /**
      *
      * @summary:  Cart item count
      * @description:  Get total count of item present in cart
      * @param  {number} [uid] - Cart id
      
      **/
    getItemCount(uid?: number): any;
    /**
      *
      * @summary:  Fetch Coupon
      * @description:  Get all the details of a coupons applicable to cart  by uid. If successful, returns a Coupon resource in the response body specified in GetCouponResponse
      * @param  {number} [uid] -
      
      **/
    getCoupons(uid?: number): any;
    /**
      *
      * @summary:  Apply Coupon
      * @description:  <p>Apply Coupons on Items added to cart. On successful request, returns cart response containing details of items ,coupons applied etc.these attributes will be consumed by  api</p> <ul> <li> <font color="monochrome">coupon_code</font></li>
  </ul>
      * @param  {boolean} [i] -
      * @param  {boolean} [b] -
      * @param  {boolean} [p] -
      * @param  {ApplyCouponRequest} body
      **/
    applyCoupon(body: any, i?: boolean, b?: boolean, p?: boolean): any;
    /**
      *
      * @summary:  Remove Coupon Applied
      * @description:  Remove Coupon applied on the cart by passing uid in request body.
      * @param  {number} [uid] - Cart id
      
      **/
    removeCoupon(uid?: number): any;
    /**
      *
      * @summary:  Get discount offers based on quantity
      * @description:  List applicable offers along with current, next and best offer for given product. Either one of **uid**, **item_id**, **slug** should be present*
      * @param  {number} [itemId] - Item id
      * @param  {string} [articleId] - Article mongo id
      * @param  {number} [uid] - Item id
      * @param  {string} [slug] - Item unique url from product page
      
      **/
    getBulkDiscountOffers(itemId?: number, articleId?: string, uid?: number, slug?: string): any;
    /**
      *
      * @summary:  Fetch Address
      * @description:  Get all the addresses associated with the account. If successful, returns a Address resource in the response body specified in GetAddressesResponse.attibutes listed below are optional <ul> <li> <font color="monochrome">uid</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
      * @param  {number} [uid] -
      * @param  {number} [mobileNo] -
      * @param  {string} [checkoutMode] -
      * @param  {number} [tags] -
      * @param  {boolean} [isDefault] -
      
      **/
    getAddresses(uid?: number, mobileNo?: number, checkoutMode?: string, tags?: number, isDefault?: boolean): any;
    /**
     *
     * @summary:  Add Address to the account
     * @description:  <p>Add Address to account. See `Address` in schema of request body for the list of attributes needed to add Address to account. On successful request, returns response containing address_id ,is_default_address and success message.
     * @param  {UpdateAddressRequest} body
     **/
    addAddress(body: any): any;
    /**
      *
      * @summary:  Fetch Single Address
      * @description:  Get a addresses with the given id. If successful, returns a Address resource in the response body specified in `Address`.attibutes listed below are optional <ul> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
      * @param  {number} id -
      * @param  {number} [uid] -
      * @param  {number} [mobileNo] -
      * @param  {string} [checkoutMode] -
      * @param  {number} [tags] -
      * @param  {boolean} [isDefault] -
      
      **/
    getAddressById(id: number, uid?: number, mobileNo?: number, checkoutMode?: string, tags?: number, isDefault?: boolean): any;
    /**
     *
     * @summary:  Update Address alreay added to account
     * @description:  Request object containing attributes mentioned in  <font color="blue">UpdateAddressRequest </font> can be updated .these attributes are :</p> <ul> <li> <font color="monochrome">is_default_address</font></li> <li> <font color="monochrome">landmark</font></li> <li> <font color="monochrome">area</font></li> <li> <font color="monochrome">pincode</font></li> <li> <font color="monochrome">email</font></li> <li> <font color="monochrome">address_type</font></li> <li> <font color="monochrome">name</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">address</font></li> </ul>
     * @param  {number} id - Address id
     * @param  {UpdateAddressRequest} body
     **/
    updateAddress(id: number, body: any): any;
    /**
      *
      * @summary:  Remove Address Associated to the account
      * @description:  Delete a Address by it's address_id. Returns an object that tells whether the address was deleted successfully
      * @param  {number} id - Address id
      
      **/
    removeAddress(id: number): any;
    /**
     *
     * @summary:  Select Address from All Addresses
     * @description:  <p>Select Address from all addresses associated with the account in order to ship the cart items to .that address,otherwise default address will be selected implicitly. See `SelectCartAddressRequest` in schema of request body for the list of attributes needed to select Address from account. On successful request, returns Cart object response.below are the address attributes which needs to be sent. <ul> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">billing_address_id</font></li> <li> <font color="monochrome">uid</font></li> </ul>
     * @param  {number} [uid] -
     * @param  {boolean} [i] -
     * @param  {boolean} [b] -
     * @param  {SelectCartAddressRequest} body
     **/
    selectAddress(body: any, uid?: number, i?: boolean, b?: boolean): any;
    /**
      *
      * @summary:  Get Cart Payment for valid coupon
      * @description:  Validate coupon for selected payment mode
      * @param  {string} [uid] -
      * @param  {string} [addressId] -
      * @param  {string} [paymentMode] -
      * @param  {string} [paymentIdentifier] -
      * @param  {string} [aggregatorName] -
      * @param  {string} [merchantCode] -
      
      **/
    getPaymentModes(uid?: string, addressId?: string, paymentMode?: string, paymentIdentifier?: string, aggregatorName?: string, merchantCode?: string): any;
    /**
     *
     * @summary:  Update Cart Payment
     * @description:  Update Cart Payment for Your Account
     * @param  {string} [uid] -
     * @param  {UpdateCartPaymentRequest} body
     **/
    selectPaymentMode(body: any, uid?: string): any;
    /**
      *
      * @summary:  Get delivery date and options before checkout
      * @description:  Shipment break up item wise with delivery date. Actual                      delivery will be during given dates only. Items will be                      delivered in group of shipments created.
      * @param  {boolean} [p] - Get payment options or not
      * @param  {number} [uid] - Cart id
      * @param  {number} [addressId] - Address id
      * @param  {number} [areaCode] - Destination pincode.
      
      **/
    getShipments(p?: boolean, uid?: number, addressId?: number, areaCode?: number): any;
    /**
     *
     * @summary:  Checkout Cart
     * @description:  Checkout all items in cart to payment and order generation.                         For COD only order will be generated while for other checkout mode                         user will be redirected to payment gateway
     * @param  {CartCheckoutRequest} body
     **/
    checkoutCart(body: any): any;
    /**
     *
     * @summary:  Update Cart Meta
     * @description:  Update cart meta like checkout_mode, gstin.
     * @param  {number} [uid] - Cart id received in get cart.
     * @param  {CartMetaRequest} body
     **/
    updateCartMeta(body: any, uid?: number): any;
    /**
     *
     * @summary:  Generate Cart sharing link token
     * @description:  Generates shared cart snapshot and returns shortlink token
     * @param  {GetShareCartLinkRequest} body
     **/
    getCartShareLink(body: any): any;
    /**
      *
      * @summary:  Get shared cart snapshot and cart response
      * @description:  Returns shared cart response for sent token with `shared_cart_details`                    containing shared cart details in response.
      * @param  {string} token - Shared short link token.
      
      **/
    getCartSharedItems(token: string): any;
    /**
      *
      * @summary:  Merge or Replace existing cart
      * @description:  Merge or Replace cart based on `action` parameter with shared cart of `token`
      * @param  {string} token - Shared short link token.
      * @param  {string} action - Operation to perform on existing cart, whether to merge or replace.
      
      **/
    updateCartWithSharedItems(token: string, action: string): any;
}
export class Lead {
    constructor(_conf: any);
    _conf: any;
    /**
      *
      * @summary:  Get Ticket with the specific id
      * @description:  Get Ticket with the specific id, this is used to view the ticket details
      * @param  {string} id - ID of ticket to be retrieved
      
      **/
    getTicket(id: string): any;
    /**
     *
     * @summary:  Create history for specific Ticket
     * @description:  Create history for specific Ticket, this history is seen on ticket detail page, this can be comment, log or rating.
     * @param  {string} ticketId - Ticket ID for which history is created
     * @param  {TicketHistoryPayload} body
     **/
    createHistoryForTicket(ticketId: string, body: any): any;
    /**
     *
     * @summary:  Create Ticket
     * @description:  This is used to Create Ticket.
     * @param  {AddTicketPayload} body
     **/
    createTicket(body: any): any;
    /**
      *
      * @summary:  Get specific Custom Form using it's slug
      * @description:  Get specific Custom Form using it's slug, this is used to view the form.
      * @param  {string} slug - Slug of form whose response is getting submitted
      
      **/
    getCustomForm(slug: string): any;
    /**
     *
     * @summary:  Submit Response for a specific Custom Form using it's slug
     * @description:  Submit Response for a specific Custom Form using it's slug, this response is then used to create a ticket on behalf of the user.
     * @param  {string} slug - Slug of form whose response is getting submitted
     * @param  {CustomFormSubmissionPayload} body
     **/
    submitCustomForm(slug: string, body: any): any;
    /**
      *
      * @summary:  Get participants of a specific Video Room using it's unique name
      * @description:  Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names.
      * @param  {string} uniqueName - Unique name of Video Room
      
      **/
    getParticipantsInsideVideoRoom(uniqueName: string): any;
    /**
      *
      * @summary:  Get Token to join a specific Video Room using it's unqiue name
      * @description:  Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there.
      * @param  {string} uniqueName - Unique name of Video Room
      
      **/
    getTokenForVideoRoom(uniqueName: string): any;
}
export class Theme {
    constructor(_conf: any);
    _conf: any;
    /**
      *
      * @summary:  Get applied theme for an application
      * @description:
      
      **/
    getAppliedTheme(): any;
    /**
      *
      * @summary:  Get theme for preview
      * @description:
      * @param  {string} themeId - ID of the theme to be retrieved
      
      **/
    getThemeForPreview(themeId: string): any;
}
export class User {
    constructor(_conf: any);
    _conf: any;
    /**
     *
     * @summary:  Login/Register with Facebook
     * @description:  Used to login or register with Facebook
     * @param  {OAuthRequestSchema} body
     **/
    loginWithFacebook(body: any): any;
    /**
     *
     * @summary:  Login/Register with Google
     * @description:  Used to login or register with Google
     * @param  {OAuthRequestSchema} body
     **/
    loginWithGoogle(body: any): any;
    /**
     *
     * @summary:  Login/Register with Google for android
     * @description:  Used to login or register with Google for android
     * @param  {OAuthRequestSchema} body
     **/
    loginWithGoogleAndroid(body: any): any;
    /**
     *
     * @summary:  Login/Register with Google for ios
     * @description:  Used to login or register with google for ios
     * @param  {OAuthRequestSchema} body
     **/
    loginWithGoogleIOS(body: any): any;
    /**
     *
     * @summary:  Login/Register with OTP
     * @description:  Used to login or register with OTP
     * @param  {string} [platform] - Platform
     * @param  {SendOtpRequestSchema} body
     **/
    loginWithOTP(body: any, platform?: string): any;
    /**
     *
     * @summary:  Login/Register with password
     * @description:  Used to login or register with email & password
     * @param  {PasswordLoginRequestSchema} body
     **/
    loginWithEmailAndPassword(body: any): any;
    /**
     *
     * @summary:  Reset Password
     * @description:  Used to reset account password
     * @param  {string} [platform] - Platform
     * @param  {SendResetPasswordEmailRequestSchema} body
     **/
    sendResetPasswordEmail(body: any, platform?: string): any;
    /**
     *
     * @summary:
     * @description:
     * @param  {ForgotPasswordRequestSchema} body
     **/
    forgotPassword(body: any): any;
    /**
     *
     * @summary:
     * @description:  Send code incase of reset password
     * @param  {CodeRequestBodySchema} body
     **/
    sendResetToken(body: any): any;
    /**
     *
     * @summary:  Login/Register with token
     * @description:  Login/Register with token
     * @param  {TokenRequestBodySchema} body
     **/
    loginWithToken(body: any): any;
    /**
     *
     * @summary:  Registration Form
     * @description:  Register using form
     * @param  {string} [platform] - Platform
     * @param  {FormRegisterRequestSchema} body
     **/
    registerWithForm(body: any, platform?: string): any;
    /**
     *
     * @summary:  Verify email
     * @description:  Used to verify email
     * @param  {CodeRequestBodySchema} body
     **/
    verifyEmail(body: any): any;
    /**
     *
     * @summary:  Verify mobile
     * @description:  Verify mobile
     * @param  {CodeRequestBodySchema} body
     **/
    verifyMobile(body: any): any;
    /**
      *
      * @summary:  Check if user has password
      * @description:  Checks if user is using password or not
      
      **/
    hasPassword(): any;
    /**
     *
     * @summary:  Update user password
     * @description:  Used to update user password
     * @param  {UpdatePasswordRequestSchema} body
     **/
    updatePassword(body: any): any;
    /**
      *
      * @summary:  Logout user
      * @description:  Used to log out user
      
      **/
    logout(): any;
    /**
     *
     * @summary:  Send OTP on mobile
     * @description:  Used to send otp to mobile
     * @param  {string} [platform] - Platform
     * @param  {SendMobileOtpRequestSchema} body
     **/
    sendOTPOnMobile(body: any, platform?: string): any;
    /**
     *
     * @summary:  Verify OTP on mobile
     * @description:  Used to verify otp sent to mobile
     * @param  {string} [platform] - Platform
     * @param  {VerifyOtpRequestSchema} body
     **/
    verifyMobileOTP(body: any, platform?: string): any;
    /**
     *
     * @summary:  Send OTP on email
     * @description:  Used to send otp to email
     * @param  {string} [platform] - Platform
     * @param  {SendEmailOtpRequestSchema} body
     **/
    sendOTPOnEmail(body: any, platform?: string): any;
    /**
     *
     * @summary:  Verify OTP on email
     * @description:  Used to verify otp sent to email
     * @param  {string} [platform] - Platform
     * @param  {VerifyOtpRequestSchema} body
     **/
    verifyEmailOTP(body: any, platform?: string): any;
    /**
      *
      * @summary:  Get logged in user
      * @description:  Used to get logged in user details
      
      **/
    getLoggedInUser(): any;
    /**
      *
      * @summary:  Get list of sessions
      * @description:  Lists all active sessions
      
      **/
    getListOfActiveSessions(): any;
    /**
      *
      * @summary:  Get platform config
      * @description:  Used to get platform config
      * @param  {string} [name] - Name
      
      **/
    getPlatformConfig(name?: string): any;
    /**
     *
     * @summary:  Edit Profile Details
     * @description:  Used to update profile
     * @param  {string} [platform] - Platform
     * @param  {EditProfileRequestSchema} body
     **/
    updateProfile(body: any, platform?: string): any;
    /**
     *
     * @summary:  Add mobile number to profile
     * @description:  Used to add new mobile number to profile
     * @param  {string} [platform] - Platform
     * @param  {EditMobileRequestSchema} body
     **/
    addMobileNumber(body: any, platform?: string): any;
    /**
      *
      * @summary:  Delete mobile number from profile
      * @description:  Used to delete mobile number from profile
      * @param  {string} [platform] - Platform
      * @param  {boolean} active - Active mobile number
      * @param  {boolean} primary - Primary number
      * @param  {boolean} verified - Verified Number
      * @param  {string} countryCode - Country code of phone number
      * @param  {string} phone - Phone number
      
      **/
    deleteMobileNumber(active: boolean, primary: boolean, verified: boolean, countryCode: string, phone: string, platform?: string): any;
    /**
     *
     * @summary:  Set mobile as primary
     * @description:  Used to set a mobile number as primary
     * @param  {SendVerificationLinkMobileRequestSchema} body
     **/
    setMobileNumberAsPrimary(body: any): any;
    /**
     *
     * @summary:  Send verification link to mobile
     * @description:  Used to send verification link to a mobile number
     * @param  {string} [platform] - Platform
     * @param  {SendVerificationLinkMobileRequestSchema} body
     **/
    sendVerificationLinkToMobile(body: any, platform?: string): any;
    /**
     *
     * @summary:  Add email to profile
     * @description:  Used to add new email to profile
     * @param  {string} [platform] - Platform
     * @param  {EditEmailRequestSchema} body
     **/
    addEmail(body: any, platform?: string): any;
    /**
      *
      * @summary:  Delete email from profile
      * @description:  Used to delete email from profile
      * @param  {string} [platform] - Platform
      * @param  {boolean} active - Whether email id is active
      * @param  {boolean} primary - Whether email id is primary email
      * @param  {boolean} verified - Whether email id is verified
      * @param  {string} email - Email ID to be deleted
      
      **/
    deleteEmail(active: boolean, primary: boolean, verified: boolean, email: string, platform?: string): any;
    /**
     *
     * @summary:  Set email as primary
     * @description:  Used to set an email as primart
     * @param  {EditEmailRequestSchema} body
     **/
    setEmailAsPrimary(body: any): any;
    /**
     *
     * @summary:  Send verification link to email
     * @description:  Used to sent verification to an email
     * @param  {string} [platform] - Platform
     * @param  {EditEmailRequestSchema} body
     **/
    sendVerificationLinkToEmail(body: any, platform?: string): any;
}
export class Content {
    constructor(_conf: any);
    _conf: any;
    /**
      *
      * @summary:  Get live announcements
      * @description:  Get live announcements for each or all pages with page slug of page and end date schedule.
      
      **/
    getAnnouncements(): any;
    /**
      *
      * @summary:  Get Blog by slug
      * @description:  Use this API to fetch a blog using `slug`
      * @param  {string} slug - The `slug` of a blog. Use this parameter to retrieve a particular blog
      
      **/
    getBlog(slug: string): any;
    /**
      *
      * @summary:  Get frequently asked questions
      * @description:  Get frequently asked questions list. These will be helpful for users to using website.
      
      **/
    getFaqs(): any;
    /**
      *
      * @summary:  Get FAQ categories list
      * @description:  Get list of FAQ categories
      
      **/
    getFaqCategories(): any;
    /**
      *
      * @summary:  Get frequently asked question
      * @description:  Get frequently asked questions list. These will be helpful for users to using website.
      * @param  {string} idOrSlug - Slug or Id of FAQ
      
      **/
    getFaqByIdOrSlug(idOrSlug: string): any;
    /**
      *
      * @summary:  Get FAQ category by slug or id
      * @description:  Get FAQ category by slug or id
      * @param  {string} idOrSlug - Slug or Id of FAQ Category
      
      **/
    getFaqCategoryBySlugOrId(idOrSlug: string): any;
    /**
      *
      * @summary:  Get FAQs of a Faq Category id or slug
      * @description:  Get FAQs of a Faq Category `id` or `slug`
      * @param  {string} idOrSlug - Faq category ID or slug
      
      **/
    getFaqsByCategoryIdOrSlug(idOrSlug: string): any;
    /**
      *
      * @summary:  Get landing page
      * @description:  Use this API to fetch a landing page
      
      **/
    getLandingPage(): any;
    /**
      *
      * @summary:  Get legal information
      * @description:  Get legal information of application, which includes policy, Terms and Conditions, and FAQ information of application.
      
      **/
    getLegalInformation(): any;
    /**
      *
      * @summary:  Get navigation
      * @description:  Use this API to fetch a navigation
      
      **/
    getNavigations(): any;
    /**
      *
      * @summary:  Get Page by slug
      * @description:  Use this API to fetch a custom page using `slug`
      * @param  {string} slug - The `slug` of a page. Use this parameter to retrieve a particular page
      
      **/
    getPage(slug: string): any;
    /**
      *
      * @summary:  Get seo of application
      * @description:  Get seo of application
      
      **/
    getSeoConfiguration(): any;
    /**
      *
      * @summary:  Get slideshow by slug
      * @description:  Use this API to fetch a slideshow using `slug`
      * @param  {string} slug - The `slug` of a slideshow. Use this parameter to retrieve a particular slideshow
      
      **/
    getSlideshow(slug: string): any;
    /**
      *
      * @summary:  Get support information
      * @description:  Get contact details for customer support. Including emails and phone numbers
      
      **/
    getSupportInformation(): any;
    /**
      *
      * @summary:  Get Tags for application
      * @description:
      
      **/
    getTags(): any;
}
export class Communication {
    constructor(_conf: any);
    _conf: any;
    /**
      *
      * @summary:  Get communication consent
      * @description:  Get communication consent
      
      **/
    getCommunicationConsent(): any;
    /**
     *
     * @summary:  Upsert communication consent
     * @description:  Upsert communication consent
     * @param  {CommunicationConsentReq} body
     **/
    upsertCommunicationConsent(body: any): any;
    /**
     *
     * @summary:  Upsert push token of a user
     * @description:  Upsert push token of a user
     * @param  {PushtokenReq} body
     **/
    upsertPushtoken(body: any): any;
}
export class Share {
    constructor(_conf: any);
    _conf: any;
    /**
      *
      * @summary:  Create application QR Code
      * @description:  Create application QR Code
      
      **/
    getApplicationQRCode(): any;
    /**
      *
      * @summary:  Create product QR Code
      * @description:  Create product QR Code
      * @param  {string} slug - The unique identifier of a product
      
      **/
    getProductQRCodeBySlug(slug: string): any;
    /**
      *
      * @summary:  Create collection QR Code
      * @description:  Create collection QR Code
      * @param  {string} slug - The unique identifier of a collection
      
      **/
    getCollectionQRCodeBySlug(slug: string): any;
    /**
      *
      * @summary:  Create url QR Code
      * @description:  Create url QR Code
      * @param  {string} url - Url
      
      **/
    getUrlQRCode(url: string): any;
    /**
     *
     * @summary:  Create short link
     * @description:  Create short link
     * @param  {ShortLinkReq} body
     **/
    createShortLink(body: any): any;
    /**
      *
      * @summary:  Get short link by hash
      * @description:  Get short link by hash
      * @param  {string} hash - Hash of short link
      
      **/
    getShortLinkByHash(hash: string): any;
    /**
      *
      * @summary:  Get original link by hash
      * @description:  Get original link by hash
      * @param  {string} hash - Hash of short link
      
      **/
    getOriginalShortLinkByHash(hash: string): any;
}
export class FileStorage {
    constructor(_conf: any);
    _conf: any;
    /**
      *
      * @summary:  This will complete the upload process. After successfully uploading file, you can call this operation to complete the upload process.
      * @description:  Uploads an arbitrarily sized buffer or blob.
  
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
  
      * @param  {string} namespace - bucket name
      * @param  {number} companyId - company_id
      * @param  {StartResponse} body
      **/
    completeUpload(namespace: string, companyId: number, body: any): any;
    /**
      *
      * @summary:  This operation initiates upload and returns storage link which is valid for 30 Minutes. You can use that storage link to make subsequent upload request with file buffer or blob.
      * @description:  Uploads an arbitrarily sized buffer or blob.
  
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
  
      * @param  {string} namespace - bucket name
      * @param  {number} companyId - company_id
      * @param  {StartRequest} body
      **/
    startUpload(namespace: string, companyId: number, body: any): any;
}
export class Payment {
    constructor(_conf: any);
    _conf: any;
    /**
      *
      * @summary:  Get payment gateway keys
      * @description:  Get payment gateway (key, secrets, merchant, sdk/api detail) to complete payment at front-end.
      * @param  {string} xApiToken - api token
      * @param  {boolean} [refresh] - refresh cache
      
      **/
    getAggregatorsConfig(xApiToken: string, refresh?: boolean): any;
    /**
     *
     * @summary:  Attach a saved card to customer.
     * @description:  Attach a saved card to customer at payment gateway i.e stripe and refresh card cache.
     * @param  {AttachCardRequest} body
     **/
    attachCardToCustomer(body: any): any;
    /**
      *
      * @summary:  Fetch active payment gateway for card
      * @description:  Fetch active payment gateway along with customer id for cards payments.
      * @param  {boolean} [refresh] -
      
      **/
    getActiveCardAggregator(refresh?: boolean): any;
    /**
      *
      * @summary:  Fetch the list of saved cards of user.
      * @description:  Fetch the list of saved cards of user from active payment gateway.
      * @param  {boolean} [forceRefresh] -
      
      **/
    getActiveUserCards(forceRefresh?: boolean): any;
    /**
     *
     * @summary:  Delete an user card.
     * @description:  Delete an added user card on payment gateway and remove from cache.
     * @param  {DeletehCardRequest} body
     **/
    deleteUserCard(body: any): any;
    /**
     *
     * @summary:  Validate customer for payment.
     * @description:  Validate customer for payment i.e Simpl paylater, Rupifi loan.
     * @param  {ValidateCustomerRequest} body
     **/
    verifyCustomerForPayment(body: any): any;
    /**
     *
     * @summary:  Verify and charge payment
     * @description:  Verify and charge payment server to server for Simpl & Mswipe.
     * @param  {ChargeCustomerRequest} body
     **/
    verifyAndChargePayment(body: any): any;
    /**
     *
     * @summary:  Payment Initialisation server to server for UPI and BharatQR.
     * @description:  Payment Initialisation for UPI & BharatQR code, UPI requests to app and QR code to be displayed on screen.
     * @param  {PaymentInitializationRequest} body
     **/
    initialisePayment(body: any): any;
    /**
     *
     * @summary:  Continous polling to check status of payment on server.
     * @description:  Continous polling on interval to check status of payment untill timeout.
     * @param  {PaymentStatusUpdateRequest} body
     **/
    checkAndUpdatePaymentStatus(body: any): any;
    /**
      *
      * @summary:  Get All Valid Payment Options
      * @description:  Use this API to get Get All Valid Payment Options for making payment
      * @param  {number} amount - Payment amount
      * @param  {string} cartId - Cart id
      * @param  {number} pincode - Pincode
      * @param  {string} checkoutMode - Checkout mode
      * @param  {boolean} [refresh] -
      * @param  {string} [assignCardId] - selected card id
      * @param  {string} [deliveryAddress] - URIencoded json delivery address of cart for annonymous user
      
      **/
    getPaymentModeRoutes(amount: number, cartId: string, pincode: number, checkoutMode: string, refresh?: boolean, assignCardId?: string, deliveryAddress?: string): any;
    /**
      *
      * @summary:  Get All Valid Payment Options for POS
      * @description:  Use this API to get Get All Valid Payment Options for making payment
      * @param  {number} amount - Payment amount
      * @param  {string} cartId - Cart id
      * @param  {number} pincode - Pincode
      * @param  {string} checkoutMode - Checkout mode
      * @param  {boolean} [refresh] -
      * @param  {string} [assignCardId] - selected card id
      * @param  {string} orderType - Order type
      * @param  {string} [deliveryAddress] - URIencoded json delivery address of cart for annonymous user
      
      **/
    getPosPaymentModeRoutes(amount: number, cartId: string, pincode: number, checkoutMode: string, orderType: string, refresh?: boolean, assignCardId?: string, deliveryAddress?: string): any;
    /**
      *
      * @summary:  List User Beneficiary
      * @description:  Get all active  beneficiary details added by the user for refund
      * @param  {string} orderId -
      
      **/
    getUserBeneficiariesDetail(orderId: string): any;
    /**
      *
      * @summary:  Ifsc Code Verification
      * @description:  Get True/False for correct IFSC Code for adding bank details for refund
      * @param  {string} [ifscCode] -
      
      **/
    verifyIfscCode(ifscCode?: string): any;
    /**
      *
      * @summary:  List Order Beneficiary
      * @description:  Get all active  beneficiary details added by the user for refund
      * @param  {string} orderId -
      
      **/
    getOrderBeneficiariesDetail(orderId: string): any;
    /**
     *
     * @summary:  Save Beneficiary details on otp validation.
     * @description:  Save Beneficiary details on otp validation.
     * @param  {AddBeneficiaryViaOtpVerificationRequest} body
     **/
    verifyOtpAndAddBeneficiaryForBank(body: any): any;
    /**
     *
     * @summary:  Save bank details for cancelled/returned order
     * @description:  Use this API to save bank details for returned/cancelled order to refund amount in his account.
     * @param  {AddBeneficiaryDetailsRequest} body
     **/
    addBeneficiaryDetails(body: any): any;
    /**
     *
     * @summary:  Send Otp on Adding wallet beneficiary
     * @description:  Send Otp on Adding wallet beneficiary for user mobile verification
     * @param  {WalletOtpRequest} body
     **/
    verifyOtpAndAddBeneficiaryForWallet(body: any): any;
    /**
     *
     * @summary:  Mark Default Beneficiary For Refund
     * @description:  Mark Default Beneficiary ot of all Beneficiary Details for Refund
     * @param  {SetDefaultBeneficiaryRequest} body
     **/
    updateDefaultBeneficiary(body: any): any;
}
export class Order {
    constructor(_conf: any);
    _conf: any;
    /**
      *
      * @summary:  Get Orders for application based on application Id
      * @description:  Get Orders
      * @param  {string} [pageNo] - Current page number
      * @param  {string} [pageSize] - Page limit
      * @param  {string} [fromDate] - From Date
      * @param  {string} [toDate] - To Date
      
      **/
    getOrders(pageNo?: string, pageSize?: string, fromDate?: string, toDate?: string): any;
    /**
      *
      * @summary:  Get Order by order id for application based on application Id
      * @description:  Get Order By Fynd Order Id
      * @param  {string} orderId - Order Id
      
      **/
    getOrderById(orderId: string): any;
    /**
      *
      * @summary:  Get Shipment by shipment id and order id for application based on application Id
      * @description:  Get Shipment
      * @param  {string} shipmentId - Shipment Id
      
      **/
    getShipmentById(shipmentId: string): any;
    /**
      *
      * @summary:  Get Shipment reasons by shipment id and order id for application based on application Id
      * @description:  Get Shipment Reasons
      * @param  {string} shipmentId - Shipment Id
      
      **/
    getShipmentReasons(shipmentId: string): any;
    /**
     *
     * @summary:  Update Shipment status by shipment id and order id for application based on application Id
     * @description:  Update Shipment Status
     * @param  {string} shipmentId - Shipment Id
     * @param  {ShipmentStatusUpdateBody} body
     **/
    updateShipmentStatus(shipmentId: string, body: any): any;
    /**
      *
      * @summary:  Track Shipment by shipment id and order id for application based on application Id
      * @description:  Shipment Track
      * @param  {string} shipmentId - Shipment Id
      
      **/
    trackShipment(shipmentId: string): any;
}
export class Rewards {
    constructor(_conf: any);
    _conf: any;
    /**
     *
     * @summary:  Get reward points that could be earned on any catalogue product.
     * @description:  Evaluate the amount of reward points that could be earned on any catalogue product.
     * @param  {CatalogueOrderRequest} body
     **/
    getPointsOnProduct(body: any): any;
    /**
     *
     * @summary:  Calculates the discount on order-amount based on amount ranges configured in order_discount reward.
     * @description:  Calculates the discount on order-amount based on amount ranges configured in order_discount reward.
     * @param  {OrderDiscountRequest} body
     **/
    getOrderDiscount(body: any): any;
    /**
      *
      * @summary:  Total available points of a user for current application
      * @description:  Total available points of a user for current application
      
      **/
    getUserPoints(): any;
    /**
      *
      * @summary:  Get list of points transactions.
      * @description:  Get list of points transactions.
  The list of points history is paginated.
      * @param  {string} [pageId] - PageID is the ID of the requested page. For first request it should be kept empty.
      * @param  {number} [pageSize] - PageSize is the number of requested items in response.
      
      **/
    getUserPointsHistory(pageId?: string, pageSize?: number): any;
    /**
      *
      * @summary:  User's referral details.
      * @description:  User's referral details.
      
      **/
    getUserReferralDetails(): any;
    /**
     *
     * @summary:  Redeems referral code and credits points to users points account.
     * @description:  Redeems referral code and credits points to users points account.
     * @param  {RedeemReferralCodeRequest} body
     **/
    redeemReferralCode(body: any): any;
}
export class Feedback {
    constructor(_conf: any);
    _conf: any;
    /**
     *
     * @summary:  post a new abuse request
     * @description:  Report a new abuse for specific entity with description text.
     * @param  {ReportAbuseRequest} body
     **/
    createAbuseReport(body: any): any;
    /**
     *
     * @summary:  Update abuse details
     * @description:  Update the abuse details like status and description text.
     * @param  {UpdateAbuseStatusRequest} body
     **/
    updateAbuseReport(body: any): any;
    /**
      *
      * @summary:  Get list of abuse data
      * @description:  Get the list of abuse data from entity type and entity ID.
      * @param  {string} entityId - entity id
      * @param  {string} entityType - entity type
      * @param  {string} [id] - abuse id
      * @param  {string} [pageId] - pagination page id
      * @param  {number} [pageSize] - pagination page size
      
      **/
    getAbuseReports(entityId: string, entityType: string, id?: string, pageId?: string, pageSize?: number): any;
    /**
      *
      * @summary:  Get list of attribute data
      * @description:  Provides a list of all attribute data.
      
      **/
    getAttributes(): any;
    /**
     *
     * @summary:  Add a new attribute request
     * @description:  Add a new attribute with its name, slug and description.
     * @param  {SaveAttributeRequest} body
     **/
    createAttribute(body: any): any;
    /**
      *
      * @summary:  Get single attribute data
      * @description:  Get a single attribute data from a given slug.
      * @param  {string} slug - Slug of attribute
      
      **/
    getAttribute(slug: string): any;
    /**
     *
     * @summary:  Update attribute details
     * @description:  Update the attribute's name and description.
     * @param  {string} slug - Slug of attribute
     * @param  {UpdateAttributeRequest} body
     **/
    updateAttribute(slug: string, body: any): any;
    /**
     *
     * @summary:  post a new comment
     * @description:  This is used to add a new comment for specific entity.
     * @param  {CommentRequest} body
     **/
    createComment(body: any): any;
    /**
     *
     * @summary:  Update comment status
     * @description:  Update the comment status (active/approve) or text.
     * @param  {UpdateCommentRequest} body
     **/
    updateComment(body: any): any;
    /**
      *
      * @summary:  Get list of comments
      * @description:  Get the list of comments from specific entity type.
      * @param  {string} entityType - entity type
      * @param  {string} [id] - comment id
      * @param  {string} [entityId] - entity id
      * @param  {string} [userId] - user id - flag/filter to get comments for user
      * @param  {string} [pageId] - pagination page id
      * @param  {number} [pageSize] - pagination page size
      
      **/
    getComments(entityType: string, id?: string, entityId?: string, userId?: string, pageId?: string, pageSize?: number): any;
    /**
      *
      * @summary:  Checks eligibility and cloud media config
      * @description:  Checks eligibility to rate and review and cloud media configuration
      * @param  {string} entityType - entity type
      * @param  {string} entityId - entity id
      
      **/
    checkEligibility(entityType: string, entityId: string): any;
    /**
      *
      * @summary:  Delete Media
      * @description:  Delete Media for the given entity IDs.
      
      **/
    deleteMedia(): any;
    /**
     *
     * @summary:  Add Media
     * @description:  Add Media list for specific entity.
     * @param  {AddMediaListRequest} body
     **/
    createMedia(body: any): any;
    /**
     *
     * @summary:  Update Media
     * @description:  Update Media (archive/approve) for the given entity.
     * @param  {UpdateMediaListRequest} body
     **/
    updateMedia(body: any): any;
    /**
      *
      * @summary:  Get Media
      * @description:  Get Media from the given entity type and entity ID.
      * @param  {string} entityType - entity type
      * @param  {string} entityId - entity id
      * @param  {string} [id] - vote id
      * @param  {string} [pageId] - pagination page id
      * @param  {number} [pageSize] - pagination page size
      
      **/
    getMedias(entityType: string, entityId: string, id?: string, pageId?: string, pageSize?: number): any;
    /**
      *
      * @summary:  Get a review summary
      * @description:  Review summary gives ratings and attribute metrics of a review per entity
  It gives following response data: review count, rating average. review metrics / attribute rating metrics which contains name, type, average and count.
      * @param  {string} entityType - entity type
      * @param  {string} entityId - entity id
      * @param  {string} [id] - review summary identifier
      * @param  {string} [pageId] - pagination page id
      * @param  {number} [pageSize] - pagination page size
      
      **/
    getReviewSummaries(entityType: string, entityId: string, id?: string, pageId?: string, pageSize?: number): any;
    /**
      *
      * @summary:  Add customer reviews
      * @description:  Add customer reviews for specific entity with following data:
  attributes rating, entity rating, title, description, media resources and template id.
      * @param  {UpdateReviewRequest} body
      **/
    createReview(body: any): any;
    /**
      *
      * @summary:  Update customer reviews
      * @description:  Update customer reviews for specific entity with following data:
  attributes rating, entity rating, title, description, media resources and template id.
      * @param  {UpdateReviewRequest} body
      **/
    updateReview(body: any): any;
    /**
      *
      * @summary:  Get list of customer reviews
      * @description:  This is used to get the list of customer reviews based on entity and provided filters.
      * @param  {string} entityType - entity type
      * @param  {string} entityId - entity id
      * @param  {string} [id] - review id
      * @param  {string} [userId] - user id
      * @param  {string} [media] - media type e.g. image | video | video_file | video_link
      * @param  {Array<number>} [rating] - rating filter, 1-5
      * @param  {Array<string>} [attributeRating] - attribute rating filter
      * @param  {boolean} [facets] - facets (true|false)
      * @param  {string} [sort] - sort by : default | top | recent
      * @param  {string} [pageId] - pagination page id
      * @param  {number} [pageSize] - pagination page size
      
      **/
    getReviews(entityType: string, entityId: string, id?: string, userId?: string, media?: string, rating?: Array<number>, attributeRating?: Array<string>, facets?: boolean, sort?: string, pageId?: string, pageSize?: number): any;
    /**
      *
      * @summary:  Get the templates for product or l3 type
      * @description:  This is used to get the templates details.
      * @param  {string} [templateId] - template id
      * @param  {string} [entityId] - entity id
      * @param  {string} [entityType] - entity type e.g. product | l3
      
      **/
    getTemplates(templateId?: string, entityId?: string, entityType?: string): any;
    /**
      *
      * @summary:  Create a new question
      * @description:  This is used to create a new question with following data:
  tags, text, type, choices for MCQ type questions, maximum length of answer.
      * @param  {CreateQNARequest} body
      **/
    createQuestion(body: any): any;
    /**
     *
     * @summary:  Update question
     * @description:  This is used to update question's status, tags and choices.
     * @param  {UpdateQNARequest} body
     **/
    updateQuestion(body: any): any;
    /**
      *
      * @summary:  Get a list of QnA
      * @description:  This is used to get a list of questions and its answers.
      * @param  {string} entityType - entity type
      * @param  {string} entityId - entity id
      * @param  {string} [id] - qna id
      * @param  {boolean} [showAnswer] - show answer flag
      * @param  {string} [pageId] - pagination page id
      * @param  {number} [pageSize] - pagination page size
      
      **/
    getQuestionAndAnswers(entityType: string, entityId: string, id?: string, showAnswer?: boolean, pageId?: string, pageSize?: number): any;
    /**
      *
      * @summary:  Get list of votes
      * @description:  This is used to get the list of votes of a current logged in user. Votes can be filtered using `ref_type` i.e. review | comment.
      * @param  {string} [id] - vote id
      * @param  {string} [refType] - entity type e.g. review | comment
      
      **/
    getVotes(id?: string, refType?: string): any;
    /**
     *
     * @summary:  Create a new vote
     * @description:  This is used to create a new vote and the actions can be upvote or downvote.
     * @param  {VoteRequest} body
     **/
    createVote(body: any): any;
    /**
     *
     * @summary:  Update vote
     * @description:  This is used to update the vote and the actions can be upvote or downvote.
     * @param  {UpdateVoteRequest} body
     **/
    updateVote(body: any): any;
}
export class PosCart {
    constructor(_conf: any);
    _conf: any;
    /**
      *
      * @summary:  Fetch all Items Added to  Cart
      * @description:  Get all the details of a items added to cart  by uid. If successful, returns a Cart resource in the response body specified in CartResponse
      * @param  {number} [uid] -
      * @param  {boolean} [i] -
      * @param  {boolean} [b] -
      * @param  {number} [assignCardId] -
      
      **/
    getCart(uid?: number, i?: boolean, b?: boolean, assignCardId?: number): any;
    /**
      *
      * @summary:  Fetch Last-Modified timestamp
      * @description:  Fetch Last-Modified timestamp in header metadata
      * @param  {number} [uid] -
      
      **/
    getCartLastModified(uid?: number): any;
    /**
     *
     * @summary:  Add Items to Cart
     * @description:  <p>Add Items to cart. See `AddCartRequest` in schema of request body for the list of attributes needed to add items to a cart. On successful request, returns cart response containing details of items, coupons available etc.these attributes will be fetched from the folowing api's</p>
     * @param  {boolean} [i] -
     * @param  {boolean} [b] -
     * @param  {AddCartRequest} body
     **/
    addItems(body: any, i?: boolean, b?: boolean): any;
    /**
     *
     * @summary:  Update Items already added to Cart
     * @description:  Request object containing attributes like item_quantity and item_size which can be updated .these attributes will be fetched from the folowing api's</p> <ul> <li><font color="monochrome">operation</font> Operation for current api call. <b>update_item</b> for update items. <b>remove_item</b> for removing items.</li> <li> <font color="monochrome">item_id</font>  "/platform/content/v1/products/"</li> <li> <font color="monochrome">item_size</font>   "/platform/content/v1/products/{slug}/sizes/"</li> <li> <font color="monochrome">quantity</font>  item quantity (must be greater than or equal to 1)</li> <li> <font color="monochrome">article_id</font>   "/content​/v1​/products​/{identifier}​/sizes​/price​/"</li> <li> <font color="monochrome">item_index</font>  item position in the cart (must be greater than or equal to 0)</li> </ul>
     * @param  {number} [uid] -
     * @param  {boolean} [i] -
     * @param  {boolean} [b] -
     * @param  {UpdateCartRequest} body
     **/
    updateCart(body: any, uid?: number, i?: boolean, b?: boolean): any;
    /**
      *
      * @summary:  Cart item count
      * @description:  Get total count of item present in cart
      * @param  {number} [uid] - Cart id
      
      **/
    getItemCount(uid?: number): any;
    /**
      *
      * @summary:  Fetch Coupon
      * @description:  Get all the details of a coupons applicable to cart  by uid. If successful, returns a Coupon resource in the response body specified in GetCouponResponse
      * @param  {number} [uid] -
      
      **/
    getCoupons(uid?: number): any;
    /**
      *
      * @summary:  Apply Coupon
      * @description:  <p>Apply Coupons on Items added to cart. On successful request, returns cart response containing details of items ,coupons applied etc.these attributes will be consumed by  api</p> <ul> <li> <font color="monochrome">coupon_code</font></li>
  </ul>
      * @param  {boolean} [i] -
      * @param  {boolean} [b] -
      * @param  {boolean} [p] -
      * @param  {ApplyCouponRequest} body
      **/
    applyCoupon(body: any, i?: boolean, b?: boolean, p?: boolean): any;
    /**
      *
      * @summary:  Remove Coupon Applied
      * @description:  Remove Coupon applied on the cart by passing uid in request body.
      * @param  {number} [uid] - Cart id
      
      **/
    removeCoupon(uid?: number): any;
    /**
      *
      * @summary:  Get discount offers based on quantity
      * @description:  List applicable offers along with current, next and best offer for given product. Either one of **uid**, **item_id**, **slug** should be present*
      * @param  {number} [itemId] - Item id
      * @param  {string} [articleId] - Article mongo id
      * @param  {number} [uid] - Item id
      * @param  {string} [slug] - Item unique url from product page
      
      **/
    getBulkDiscountOffers(itemId?: number, articleId?: string, uid?: number, slug?: string): any;
    /**
      *
      * @summary:  Fetch Address
      * @description:  Get all the addresses associated with the account. If successful, returns a Address resource in the response body specified in GetAddressesResponse.attibutes listed below are optional <ul> <li> <font color="monochrome">uid</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
      * @param  {number} [uid] -
      * @param  {number} [mobileNo] -
      * @param  {string} [checkoutMode] -
      * @param  {number} [tags] -
      * @param  {boolean} [isDefault] -
      
      **/
    getAddresses(uid?: number, mobileNo?: number, checkoutMode?: string, tags?: number, isDefault?: boolean): any;
    /**
     *
     * @summary:  Add Address to the account
     * @description:  <p>Add Address to account. See `Address` in schema of request body for the list of attributes needed to add Address to account. On successful request, returns response containing address_id ,is_default_address and success message.
     * @param  {UpdateAddressRequest} body
     **/
    addAddress(body: any): any;
    /**
      *
      * @summary:  Fetch Single Address
      * @description:  Get a addresses with the given id. If successful, returns a Address resource in the response body specified in `Address`.attibutes listed below are optional <ul> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
      * @param  {number} id -
      * @param  {number} [uid] -
      * @param  {number} [mobileNo] -
      * @param  {string} [checkoutMode] -
      * @param  {number} [tags] -
      * @param  {boolean} [isDefault] -
      
      **/
    getAddressById(id: number, uid?: number, mobileNo?: number, checkoutMode?: string, tags?: number, isDefault?: boolean): any;
    /**
     *
     * @summary:  Update Address alreay added to account
     * @description:  Request object containing attributes mentioned in  <font color="blue">UpdateAddressRequest </font> can be updated .these attributes are :</p> <ul> <li> <font color="monochrome">is_default_address</font></li> <li> <font color="monochrome">landmark</font></li> <li> <font color="monochrome">area</font></li> <li> <font color="monochrome">pincode</font></li> <li> <font color="monochrome">email</font></li> <li> <font color="monochrome">address_type</font></li> <li> <font color="monochrome">name</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">address</font></li> </ul>
     * @param  {number} id - Address id
     * @param  {UpdateAddressRequest} body
     **/
    updateAddress(id: number, body: any): any;
    /**
      *
      * @summary:  Remove Address Associated to the account
      * @description:  Delete a Address by it's address_id. Returns an object that tells whether the address was deleted successfully
      * @param  {number} id - Address id
      
      **/
    removeAddress(id: number): any;
    /**
     *
     * @summary:  Select Address from All Addresses
     * @description:  <p>Select Address from all addresses associated with the account in order to ship the cart items to .that address,otherwise default address will be selected implicitly. See `SelectCartAddressRequest` in schema of request body for the list of attributes needed to select Address from account. On successful request, returns Cart object response.below are the address attributes which needs to be sent. <ul> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">billing_address_id</font></li> <li> <font color="monochrome">uid</font></li> </ul>
     * @param  {number} [uid] -
     * @param  {boolean} [i] -
     * @param  {boolean} [b] -
     * @param  {SelectCartAddressRequest} body
     **/
    selectAddress(body: any, uid?: number, i?: boolean, b?: boolean): any;
    /**
      *
      * @summary:  Get Cart Payment for valid coupon
      * @description:  Validate coupon for selected payment mode
      * @param  {string} [uid] -
      * @param  {string} [addressId] -
      * @param  {string} [paymentMode] -
      * @param  {string} [paymentIdentifier] -
      * @param  {string} [aggregatorName] -
      * @param  {string} [merchantCode] -
      
      **/
    getPaymentModes(uid?: string, addressId?: string, paymentMode?: string, paymentIdentifier?: string, aggregatorName?: string, merchantCode?: string): any;
    /**
     *
     * @summary:  Update Cart Payment
     * @description:  Update Cart Payment for Your Account
     * @param  {string} [uid] -
     * @param  {UpdateCartPaymentRequest} body
     **/
    selectPaymentMode(body: any, uid?: string): any;
    /**
      *
      * @summary:  Get delivery date and options before checkout
      * @description:  Shipment break up item wise with delivery date. Actual                      delivery will be during given dates only. Items will be                      delivered in group of shipments created.
      * @param  {number} [pickAtStoreUid] -
      * @param  {number} [orderingStoreId] -
      * @param  {boolean} [p] - Get payment options or not
      * @param  {number} [uid] - Cart id
      * @param  {number} [addressId] - Address id
      * @param  {number} [areaCode] - Destination pincode.
      
      **/
    getShipments(pickAtStoreUid?: number, orderingStoreId?: number, p?: boolean, uid?: number, addressId?: number, areaCode?: number): any;
    /**
     *
     * @summary:  Update shipment delivery type and quantity before checkout
     * @description:  Shipment break up item wise with delivery date. Actual                      delivery will be during given dates only. Items will be                      delivered in group of shipments created. Update the shipment                      type and quantity as per customer preference for store pick up or home delivery
     * @param  {boolean} [i] - Get items or not
     * @param  {boolean} [p] - Get payment options or not
     * @param  {number} [uid] - Cart id
     * @param  {number} [addressId] - Address id
     * @param  {string} [orderType] - Order is hand over or home delivery
     * @param  {UpdateCartShipmentRequest} body
     **/
    updateShipments(body: any, i?: boolean, p?: boolean, uid?: number, addressId?: number, orderType?: string): any;
    /**
     *
     * @summary:  Checkout Cart
     * @description:  Checkout all items in cart to payment and order generation.                        For COD only order will be generated while for other checkout mode                        user will be redirected to payment gateway
     * @param  {boolean} [uid] -
     * @param  {CartCheckoutRequest} body
     **/
    checkoutCart(body: any, uid?: boolean): any;
    /**
     *
     * @summary:  Update Cart Meta
     * @description:  Update cart meta like checkout_mode, gstin.
     * @param  {number} [uid] - Cart id received in get cart.
     * @param  {CartMetaRequest} body
     **/
    updateCartMeta(body: any, uid?: number): any;
    /**
      *
      * @summary:  Get available delivery modes for cart
      * @description:  Get available delivery modes for cart and pick up store uid list. From given pick stores list user can pick up delivery. Use this uid to show store address
      * @param  {number} areaCode -
      * @param  {number} [uid] -
      
      **/
    getAvailableDeliveryModes(areaCode: number, uid?: number): any;
    /**
      *
      * @summary:  Get list of stores for give uids
      * @description:  Get list of stores by providing pick up available store uids.
      * @param  {number} areaCode -
      
      **/
    getStoreAddressByUid(areaCode: number): any;
    /**
     *
     * @summary:  Generate Cart sharing link token
     * @description:  Generates shared cart snapshot and returns shortlink token
     * @param  {GetShareCartLinkRequest} body
     **/
    getCartShareLink(body: any): any;
    /**
      *
      * @summary:  Get shared cart snapshot and cart response
      * @description:  Returns shared cart response for sent token with `shared_cart_details`                    containing shared cart details in response.
      * @param  {string} token - Shared short link token.
      
      **/
    getCartSharedItems(token: string): any;
    /**
      *
      * @summary:  Merge or Replace existing cart
      * @description:  Merge or Replace cart based on `action` parameter with shared cart of `token`
      * @param  {string} token - Shared short link token.
      * @param  {string} action - Operation to perform on existing cart, whether to merge or replace.
      
      **/
    updateCartWithSharedItems(token: string, action: string): any;
}
