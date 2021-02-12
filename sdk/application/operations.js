
const APIClient = require("./api_client");
const Configuration = require("./configuration");



const { 
    Media,
    ProductListingActionPage,
    ProductListingAction,
    ProductBrand,
    ProductDetailAttribute,
    ProductDetailGroupedAttribute,
    ProductDetail,
    Error,
    ProductSize,
    Price,
    ProductListingPrice,
    ProductSizeStores,
    ProductSizes,
    ArticleAssignment,
    Seller,
    ProductStockPrice,
    Store,
    ProductSizePriceResponse,
    ProductSizeSellerFilter,
    ProductPage,
    ProductSizeSellersResponse,
    AttributeDetail,
    ProductsComparisonResponse,
    ProductCompareResponse,
    ProductFrequentlyComparedSimilarResponse,
    ProductSimilarItem,
    SimilarProductByTypeResponse,
    ProductVariantItemResponse,
    ProductVariantResponse,
    ProductVariantsResponse,
    CompanyDetail,
    StoreDetail,
    ProductStockStatusItem,
    ProductStockStatusResponse,
    ProductStockPolling,
    ProductSortOn,
    ProductFiltersKey,
    ProductFiltersValue,
    ProductFilters,
    ProductListingResponse,
    ImageUrls,
    BrandItem,
    BrandListingResponse,
    BrandDetailResponse,
    CategoryItems,
    DepartmentCategoryTree,
    DepartmentIdentifier,
    CategoryListingResponse,
    CategoryMetaResponse,
    Page,
    HomeListingResponse,
    Department,
    DepartmentResponse,
    AutocompleteItem,
    AutoCompleteResponse,
    CollectionListingFilterTag,
    CollectionListingFilterType,
    CollectionListingFilter,
    GetCollectionDetailNest,
    GetCollectionListingResponse,
    GetCollectionListingItemsResponse,
    CollectionDetailResponse,
    GetFollowListingResponse,
    FollowPostResponse,
    FollowerCountResponse,
    FollowIdsData,
    FollowIdsResponse
} = require("./schema");

    
class Catalog {
    constructor(_conf) {
        this._conf = _conf;
    }
    
    /**
    *
    * Summary: Get a product
    * Description:  Products are the core resource of an application. Products can be associated by categories, collections, brands and more. This API retrieves the product specified by the given **slug**. If successful, returns a Product resource in the response body specified in `ProductDetail`
    **/
    getProductDetailBySlug(
        slug, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/catalog/v1.0/products/{slug}/",
        );
    }
    
    /**
    *
    * Summary: Get the sizes of a product
    * Description:  A product can exist in multiple sizes. Use this API to fetch all the available sizes of a product. If successful, returns a ProductSize object in the response body as specified in `ProductSizes`
    **/
    getProductSizesBySlug(
        slug, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/catalog/v1.0/products/{slug}/sizes/",
        );
    }
    
    /**
    *
    * Summary: Get price a product size
    * Description:  Any available product can exist in multiple sizes. Sometimes prices may vary among different sizes of the same product. Use this API to retrieve the price of the product of a particular size with the location details it is available in.
    **/
    getProductPriceBySlug(
        slug, opts
        size, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/catalog/v1.0/products/{slug}/sizes/{size}/price/",
        );
    }
    
    /**
    *
    * Summary: List sellers of a product
    * Description:  A product of a particular size can be sold by multiple sellers. Use this API to fetch the sellers who are selling this product and have the stock of a particular size
    **/
    getProductSellersBySlug(
        slug, opts
        size, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/catalog/v1.0/products/{slug}/sizes/{size}/sellers/",
        );
    }
    
    /**
    *
    * Summary: Compare products
    * Description:  Compare between the features of the given set of products Use this API to compare how one product ranks against other products. Note that at least one slug is mandatory in request query.
    **/
    getProductComparisonBySlugs(
        slug, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/catalog/v1.0/products/compare/",
        );
    }
    
    /**
    *
    * Summary: Get comparison between similar products
    * Description:  Compare between the features of the given set of products Use this API to compare how one product ranks against other products
    **/
    getSimilarComparisonProductBySlug(
        slug, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/catalog/v1.0/products/{slug}/similar/compare/",
        );
    }
    
    /**
    *
    * Summary: Get comparison between frequently compared products with the given product
    * Description:  Compare between the features of the give product with frequently compared products Use this API to compare how one product ranks against other products
    **/
    getComparedFrequentlyProductBySlug(
        slug, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/catalog/v1.0/products/{slug}/similar/compared-frequently/",
        );
    }
    
    /**
    *
    * Summary: Get similar products
    * Description:  Get products similar to the one specified by the `identifier`. If successful, it returns a group of similar products based on type as described in `SimilarProductByTypeResponse`
    **/
    getProductSimilarByIdentifier(
        slug, opts
        similarType, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/catalog/v1.0/products/{slug}/similar/{similar_type}/",
        );
    }
    
    /**
    *
    * Summary: Get variant of a particular product
    * Description:  A product can have a different type of variants varies from color to shade etc. Use this API to fetch all the available variants of a product. If successful, returns a Products for different variants type in the response body as specified in `ProductVariantResponse`
    **/
    getProductVariantsBySlug(
        slug, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/catalog/v1.0/products/{slug}/variants/",
        );
    }
    
    /**
    *
    * Summary: Get the stock of a product
    * Description:  Retrieve the available stock of the products. You can use this API to retrieve stock of multiple products at a time. Only 50 product IDs can be given in a single API request
    **/
    getProductStockByIds(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/catalog/v1.0/products/stock-status/",
        );
    }
    
    /**
    *
    * Summary: Get the stock of a product
    * Description:  Retrieve the available stock of the products. You can use this api to get stock status of products whose inventory is updated in given time
    **/
    getProductStockForTimeByIds(
        timestamp, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/catalog/v1.0/products/stock-status/poll/",
        );
    }
    
    /**
    *
    * Summary: List the products
    * Description:  List all the products associated with a brand, collection or category in a requested sort order. The API additionally supports arbitrary search queries that may refer the name of any product, brand, category or collection. If successful, returns a paginated list of products specified in `ProductListingResponse`
    **/
    getProducts(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/catalog/v1.0/products/",
        );
    }
    
    /**
    *
    * Summary: List all the brands
    * Description:  A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`
    **/
    getBrands(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/catalog/v1.0/brands/",
        );
    }
    
    /**
    *
    * Summary: Get metadata of a brand
    * Description:  Fetch metadata of a brand. If successful, returns a metadata object specified in `BrandDetailResponse`
    **/
    getBrandDetailBySlug(
        slug, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/catalog/v1.0/brands/{slug}/",
        );
    }
    
    /**
    *
    * Summary: List all the categories
    * Description:  List all the categories. You can optionally pass filter the brands by the department. If successful, returns a paginated list of brands specified in `CategoryListingResponse`
    **/
    getCategories(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/catalog/v1.0/categories/",
        );
    }
    
    /**
    *
    * Summary: Get metadata of a category
    * Description:  Fetch metadata of a category. If successful, returns a metadata object specified in `CategoryMetaResponse`
    **/
    getCategoryDetailBySlug(
        slug, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/catalog/v1.0/categories/{slug}/",
        );
    }
    
    /**
    *
    * Summary: List the products
    * Description:  List all the products associated with a brand, collection or category in a random order. If successful, returns a paginated list of products specified in `HomeListingResponse`
    **/
    getHomeProducts(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/catalog/v1.0/home/listing/",
        );
    }
    
    /**
    *
    * Summary: List all the departments
    * Description:  Departments are a way to categorise similar products. A product can lie in multiple departments. For example, a skirt can below to the 'Women's Fashion' Department while a handbag can lie in 'Women's Accessories' Department. Use this API to list all the departments. If successful, returns the list of departments specified in `DepartmentResponse`
    **/
    getDepartments(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/catalog/v1.0/departments/",
        );
    }
    
    /**
    *
    * Summary: Get relevant suggestions for a search query
    * Description:  Retrieves a list of suggestions for a given search query. Each suggestion is a valid search term that's generated on the basis of what is given in query. This is particularly useful to enhance the user experience in search. The given search query can be a partial name of any product, brand and category. For example, if the given search query `q` is _ski_ the relevant search suggestions returned might be a list containing _skirt_, _ski shoes_, __skin cream_ etc.
    **/
    getSearchResults(
        q, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/catalog/v1.0/auto-complete/",
        );
    }
    
    /**
    *
    * Summary: List all the collections
    * Description:  A Collection allows you to organize your products into hierarchical groups. For example, a dress might be in the category _Clothing_, the individual product might also be in the collection _Summer_. On successful request, returns all the collections`
    **/
    getCollections(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/catalog/v1.0/collections/",
        );
    }
    
    /**
    *
    * Summary: Get the items in a collection
    * Description:  Get items in a collection specified by its `slug`.
    **/
    getCollectionItemsBySlug(
        slug, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/catalog/v1.0/collections/{slug}/items/",
        );
    }
    
    /**
    *
    * Summary: Get a particular collection
    * Description:  Get the details of a collection by its `slug`. If successful, returns a Collection resource in the response body specified in `CollectionDetailResponse`
    **/
    getCollectionDetailBySlug(
        slug, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/catalog/v1.0/collections/{slug}/",
        );
    }
    
    /**
    *
    * Summary: Get a list of followed Products, Brands, Collections
    * Description:  A User can follow a Product they like. This API retrieves the products the user have followed. If successful, returns a Followed resource in the response body specified in `GetFollowResponseSchema`
    **/
    getFollowedListing(
        collectionType, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/catalog/v1.0/follow/{collection_type}/",
        );
    }
    
    /**
    *
    * Summary: UnFollow a Product
    * Description:  You can undo a followed Product or Brand by its id, we refer this action as _unfollow_. Pass the uid of the product in request URL
    **/
    unfollowById(
        collectionType, opts
        collectionId, opts
    ) {
        return APIClient.execute(
            this._conf,
            "delete",
            "/service/application/catalog/v1.0/follow/{collection_type}/{collection_id}/",
        );
    }
    
    /**
    *
    * Summary: Follow a particular Product
    * Description:  Follow a particular Product specified by its uid. Pass the uid of the product in request URL
    **/
    followById(
        collectionType, opts
        collectionId, opts
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/catalog/v1.0/follow/{collection_type}/{collection_id}/",
        );
    }
    
    /**
    *
    * Summary: Get Follow Count
    * Description:  Get count of followers for given collection type and collection id.
    **/
    getFollowerCountById(
        collectionType, opts
        collectionId, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/catalog/v1.0/follow/{collection_type}/{collection_id}/count/",
        );
    }
    
    /**
    *
    * Summary: Get the Ids of followed product, brand and collection.
    * Description:  You can get the ids of all the followed Product, Brand and Collections. Pass collection_type as query parameter to fetch specific Ids
    **/
    getFollowIds(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/catalog/v1.0/follow/ids/",
        );
    }
    
}


exports.Catalog = Catalog;



const { 
    GetCartResponse,
    AddProductCart,
    AddCartRequest,
    ProductAvailability,
    ActionQuery,
    Action,
    CategoryInfo,
    BaseInfo,
    Image,
    Product,
    ProductPrice,
    ProductPriceInfo,
    CartProductInfo,
    PaymentFlow,
    PaymentFlows,
    PaymentOption,
    PaymentOptions,
    CartCurrency,
    BaseLoyaltyPoints,
    RawBreakup,
    DisplayBreakup,
    CouponBreakup,
    BaseCartBreakup,
    CartResponse,
    UpdateProductCart,
    UpdateCartRequest,
    PageCoupon,
    Coupon,
    GetCouponResponse,
    RawCartCoupon,
    LoyaltyPoints,
    CartCoupon,
    SaveCoupon,
    SaveCouponResponse,
    OfferSeller,
    OfferPrice,
    OfferItem,
    BulkPriceOffer,
    BulkPriceResponse,
    Address,
    GetAddressResponse,
    SaveAddressRequest,
    SaveAddressResponse,
    UpdateAddressRequest,
    UpdateAddressResponse,
    DeleteAddressResponse,
    SelectCartAddressRequest,
    UpdateCartPaymentRequest,
    ShipmentResponse,
    CartShipmentsResponse,
    CartCheckoutRequest,
    DeliverySlot,
    DeliverySlotDate,
    CheckCart,
    OrderData,
    CartCheckoutResponse,
    Meta,
    SharedCartDetails,
    SharedCartResponse
} = require("./schema");

    
class Cart {
    constructor(_conf) {
        this._conf = _conf;
    }
    
    /**
    *
    * Summary: Fetch all Items Added to  Cart
    * Description:  Get all the details of a items added to cart  by uid. If successful, returns a Cart resource in the response body specified in GetCartResponse
    **/
    getCart(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/cart/v1.0/detail",
        );
    }
    
    /**
    *
    * Summary: Fetch Last-Modified timestamp
    * Description:  Fetch Last-Modified timestamp in header metadata
    **/
    getCartLastModified(
    ) {
        return APIClient.execute(
            this._conf,
            "head",
            "/service/application/cart/v1.0/detail",
        );
    }
    
    /**
    *
    * Summary: Add Items to Cart
    * Description:  <p>Add Items to cart. See `AddCartRequest` in schema of request body for the list of attributes needed to add items to a cart. On successful request, returns cart response containing details of items, coupons available etc.these attributes will be fetched from the folowing api's</p>
    **/
    addItems(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/cart/v1.0/detail",
        );
    }
    
    /**
    *
    * Summary: Update Items already added to Cart
    * Description:  Request object containing attributes like item_quantity and item_size which can be updated .these attributes will be fetched from the folowing api's</p> <ul> <li><font color="monochrome">operation</font> Operation for current api call. <b>update_item</b> for update items. <b>remove_item</b> for removing items.</li> <li> <font color="monochrome">item_id</font>  "/platform/content/v1/products/"</li> <li> <font color="monochrome">item_size</font>   "/platform/content/v1/products/{slug}/sizes/"</li> <li> <font color="monochrome">quantity</font>  item quantity (must be greater than or equal to 1)</li> <li> <font color="monochrome">article_id</font>   "/content​/v1​/products​/{identifier}​/sizes​/price​/"</li> <li> <font color="monochrome">item_index</font>  item position in the cart (must be greater than or equal to 0)</li> </ul>
    **/
    updateCart(
    ) {
        return APIClient.execute(
            this._conf,
            "put",
            "/service/application/cart/v1.0/detail",
        );
    }
    
    /**
    *
    * Summary: Cart item count
    * Description:  Get total count of item present in cart
    **/
    getItemCount(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/cart/v1.0/basic",
        );
    }
    
    /**
    *
    * Summary: Fetch Coupon
    * Description:  Get all the details of a coupons applicable to cart  by uid. If successful, returns a Coupon resource in the response body specified in GetCouponResponse
    **/
    getCoupons(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/cart/v1.0/coupon",
        );
    }
    
    /**
    *
    * Summary: Apply Coupon
    * Description:  <p>Apply Coupons on Items added to cart. On successful request, returns cart response containing details of items ,coupons applied etc.these attributes will be consumed by  api</p> <ul> <li> <font color="monochrome">coupon_code</font></li>
</ul>
    **/
    applyCoupon(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/cart/v1.0/coupon",
        );
    }
    
    /**
    *
    * Summary: Remove Coupon Applied
    * Description:  Remove Coupon applied on the cart by passing uid in request body.
    **/
    removeCoupon(
    ) {
        return APIClient.execute(
            this._conf,
            "delete",
            "/service/application/cart/v1.0/coupon",
        );
    }
    
    /**
    *
    * Summary: Get discount offers based on quantity
    * Description:  List applicable offers along with current, next and best offer for given product. Either one of **uid**, **item_id**, **slug** should be present*
    **/
    getBulkDiscountOffers(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/cart/v1.0/bulk-price",
        );
    }
    
    /**
    *
    * Summary: Fetch Address
    * Description:  Get all the addresses associated with the account. If successful, returns a Address resource in the response body specified in GetAddressResponse.attibutes listed below are optional <ul> <li> <font color="monochrome">uid</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
    **/
    getAddresses(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/cart/v1.0/address",
        );
    }
    
    /**
    *
    * Summary: Add Address to the account
    * Description:  <p>Add Address to account. See `SaveAddressRequest` in schema of request body for the list of attributes needed to add Address to account. On successful request, returns response containing address_id ,is_default_address and success message.
    **/
    addAddress(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/cart/v1.0/address",
        );
    }
    
    /**
    *
    * Summary: Fetch Single Address
    * Description:  Get a addresses with the given id. If successful, returns a Address resource in the response body specified in GetAddressResponse.attibutes listed below are optional <ul> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
    **/
    getAddressById(
        id, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/cart/v1.0/address/{id}",
        );
    }
    
    /**
    *
    * Summary: Update Address alreay added to account
    * Description:  Request object containing attributes mentioned in  <font color="blue">UpdateAddressRequest </font> can be updated .these attributes are :</p> <ul> <li> <font color="monochrome">is_default_address</font></li> <li> <font color="monochrome">landmark</font></li> <li> <font color="monochrome">area</font></li> <li> <font color="monochrome">pincode</font></li> <li> <font color="monochrome">email</font></li> <li> <font color="monochrome">address_type</font></li> <li> <font color="monochrome">name</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">address</font></li> </ul>
    **/
    updateAddress(
        id, opts
    ) {
        return APIClient.execute(
            this._conf,
            "put",
            "/service/application/cart/v1.0/address/{id}",
        );
    }
    
    /**
    *
    * Summary: Remove Address Associated to the account
    * Description:  Delete a Address by it's address_id. Returns an object that tells whether the address was deleted successfully
    **/
    removeAddress(
        id, opts
    ) {
        return APIClient.execute(
            this._conf,
            "delete",
            "/service/application/cart/v1.0/address/{id}",
        );
    }
    
    /**
    *
    * Summary: Select Address from All Addresses
    * Description:  <p>Select Address from all addresses associated with the account in order to ship the cart items to .that address,otherwise default address will be selected implicitly. See `SelectCartAddressRequest` in schema of request body for the list of attributes needed to select Address from account. On successful request, returns Cart object response.below are the address attributes which needs to be sent. <ul> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">billing_address_id</font></li> <li> <font color="monochrome">uid</font></li> </ul>
    **/
    selectAddress(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/cart/v1.0/select-address",
        );
    }
    
    /**
    *
    * Summary: Get Cart Payment for valid coupon
    * Description:  Validate coupon for selected payment mode
    **/
    getPaymentModes(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/cart/v1.0/payment",
        );
    }
    
    /**
    *
    * Summary: Update Cart Payment
    * Description:  Update Cart Payment for Your Account
    **/
    selectPaymentMode(
    ) {
        return APIClient.execute(
            this._conf,
            "put",
            "/service/application/cart/v1.0/payment",
        );
    }
    
    /**
    *
    * Summary: Get delivery date and options before checkout
    * Description:  Shipment break up item wise with delivery date. Actual                      delivery will be during given dates only. Items will be                      delivered in group of shipments created.
    **/
    getShipments(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/cart/v1.0/shipment",
        );
    }
    
    /**
    *
    * Summary: Checkout Cart
    * Description:  Checkout all items in cart to payment and order generation.                         For COD only order will be generated while for other checkout mode                         user will be redirected to payment gateway
    **/
    checkoutCart(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/cart/v1.0/checkout",
        );
    }
    
    /**
    *
    * Summary: Update Cart Meta
    * Description:  Update cart meta like checkout_mode, gstin.
    **/
    updateCartMeta(
    ) {
        return APIClient.execute(
            this._conf,
            "put",
            "/service/application/cart/v1.0/meta",
        );
    }
    
    /**
    *
    * Summary: Generate Cart sharing link token
    * Description:  Generates shared cart snapshot and returns shortlink token
    **/
    getCartShareLink(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/cart/v1.0/share-cart",
        );
    }
    
    /**
    *
    * Summary: Get shared cart snapshot and cart response
    * Description:  Returns shared cart response for sent token with `shared_cart_details`                    containing shared cart details in response.
    **/
    getCartSharedItems(
        token, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/cart/v1.0/share-cart/{token}",
        );
    }
    
    /**
    *
    * Summary: Merge or Replace existing cart
    * Description:  Merge or Replace cart based on `action` parameter with shared cart of `token`
    **/
    updateCartWithSharedItems(
        token, opts
        action, opts
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/cart/v1.0/share-cart/{token}/{action}",
        );
    }
    
}


exports.Cart = Cart;



const { 
    Context,
    CreatedOn,
    Asset,
    Content,
    APIError,
    AddTicketPayload,
    Priority,
    Status,
    Category,
    SubmitButton,
    PollForAssignment,
    CustomForm,
    TicketHistory,
    Ticket
} = require("./schema");

    
class Lead {
    constructor(_conf) {
        this._conf = _conf;
    }
    
    /**
    *
    * Summary: Get Ticket with the specific id
    * Description:  Get Ticket with the specific id, this is used to view the ticket details
    **/
    getTicket(
        id, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/services/application/lead/v1.0/ticket/{id}",
        );
    }
    
    /**
    *
    * Summary: Create history for specific Ticket
    * Description:  Create history for specific Ticket, this history is seen on ticket detail page, this can be comment, log or rating.
    **/
    createHistoryForTicket(
        ticketId, opts
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/services/application/lead/v1.0/ticket/{ticket_id}/history",
        );
    }
    
    /**
    *
    * Summary: Create Ticket
    * Description:  This is used to Create Ticket.
    **/
    createTicket(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/services/application/lead/v1.0/ticket/",
        );
    }
    
    /**
    *
    * Summary: Get specific Custom Form using it's slug
    * Description:  Get specific Custom Form using it's slug, this is used to view the form.
    **/
    getCustomForm(
        slug, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/services/application/lead/v1.0/form/{slug}",
        );
    }
    
    /**
    *
    * Summary: Submit Response for a specific Custom Form using it's slug
    * Description:  Submit Response for a specific Custom Form using it's slug, this response is then used to create a ticket on behalf of the user.
    **/
    submitCustomForm(
        slug, opts
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/services/application/lead/v1.0/form/{slug}/submit",
        );
    }
    
    /**
    *
    * Summary: Get participants of a specific Video Room using it's unique name
    * Description:  Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names.
    **/
    getParticipantsInsideVideoRoom(
        uniqueName, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/services/application/lead/v1.0/video/room/{unique_name}/participants",
        );
    }
    
    /**
    *
    * Summary: Get Token to join a specific Video Room using it's unqiue name
    * Description:  Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there.
    **/
    getTokenForVideoRoom(
        uniqueName, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/services/application/lead/v1.0/video/room/{unique_name}/token",
        );
    }
    
}


exports.Lead = Lead;



const { 
    ThemesSchema,
    pagesSchema,
    availableSectionSchema,
    sectionSchema
} = require("./schema");

    
class Theme {
    constructor(_conf) {
        this._conf = _conf;
    }
    
    /**
    *
    * Summary: Get applied theme for an application
    * Description:  
    **/
    getAppliedTheme(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/theme/v1.0/applied-theme",
        );
    }
    
    /**
    *
    * Summary: Get theme for preview
    * Description:  
    **/
    getThemeForPreview(
        themeId, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/theme/v1.0/{themeId}/preview",
        );
    }
    
}


exports.Theme = Theme;



const { 
    PlatformSchema,
    UserSchema
} = require("./schema");

    
class User {
    constructor(_conf) {
        this._conf = _conf;
    }
    
    /**
    *
    * Summary: Login/Register with Facebook
    * Description:  Used to login or register with Facebook
    **/
    loginWithFacebook(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/user/authentication/v1.0/login/facebook-token",
        );
    }
    
    /**
    *
    * Summary: Login/Register with Google
    * Description:  Used to login or register with Google
    **/
    loginWithGoogle(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/user/authentication/v1.0/login/google-token",
        );
    }
    
    /**
    *
    * Summary: Login/Register with Google for android
    * Description:  Used to login or register with Google for android
    **/
    loginWithGoogleAndroid(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/user/authentication/v1.0/login/google-android",
        );
    }
    
    /**
    *
    * Summary: Login/Register with Google for ios
    * Description:  Used to login or register with google for ios
    **/
    loginWithGoogleIOS(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/user/authentication/v1.0/login/google-ios",
        );
    }
    
    /**
    *
    * Summary: Login/Register with OTP
    * Description:  Used to login or register with OTP
    **/
    loginWithOTP(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/user/authentication/v1.0/login/otp",
        );
    }
    
    /**
    *
    * Summary: Login/Register with password
    * Description:  Used to login or register with email & password
    **/
    loginWithEmailAndPassword(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/user/authentication/v1.0/login/password",
        );
    }
    
    /**
    *
    * Summary: Reset Password
    * Description:  Used to reset account password
    **/
    sendResetPasswordEmail(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/user/authentication/v1.0/login/password/reset",
        );
    }
    
    /**
    *
    * Summary: 
    * Description:  
    **/
    forgotPassword(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/userauthentication/v1.0/login/password/reset/forgot",
        );
    }
    
    /**
    *
    * Summary: 
    * Description:  Send code incase of reset password
    **/
    sendResetToken(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/user/authentication/v1.0/login/password/reset/token",
        );
    }
    
    /**
    *
    * Summary: Login/Register with token
    * Description:  Login/Register with token
    **/
    loginWithToken(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/user/authentication/v1.0/login/token",
        );
    }
    
    /**
    *
    * Summary: Registration Form
    * Description:  Register using form
    **/
    registerWithForm(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/user/authentication/v1.0/register/form",
        );
    }
    
    /**
    *
    * Summary: Verify email
    * Description:  Used to verify email
    **/
    verifyEmail(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/user/authentication/v1.0/verify/email",
        );
    }
    
    /**
    *
    * Summary: Verify mobile
    * Description:  Verify mobile
    **/
    verifyMobile(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/user/authentication/v1.0/verify/mobile",
        );
    }
    
    /**
    *
    * Summary: Check if user has password
    * Description:  Checks if user is using password or not
    **/
    hasPassword(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/user/authentication/v1.0/has-password",
        );
    }
    
    /**
    *
    * Summary: Update user password
    * Description:  Used to update user password
    **/
    updatePassword(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/user/authentication/v1.0/password",
        );
    }
    
    /**
    *
    * Summary: Logout user
    * Description:  Used to log out user
    **/
    logout(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/user/authentication/v1.0/logout",
        );
    }
    
    /**
    *
    * Summary: Send OTP on mobile
    * Description:  Used to send otp to mobile
    **/
    sendOTPOnMobile(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/user/authentication/v1.0/otp/mobile/send",
        );
    }
    
    /**
    *
    * Summary: Verify OTP on mobile
    * Description:  Used to verify otp sent to mobile
    **/
    verifyMobileOTP(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/user/authentication/v1.0/otp/mobile/verify",
        );
    }
    
    /**
    *
    * Summary: Send OTP on email
    * Description:  Used to send otp to email
    **/
    sendOTPOnEmail(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/user/authentication/v1.0/otp/email/send",
        );
    }
    
    /**
    *
    * Summary: Verify OTP on email
    * Description:  Used to verify otp sent to email
    **/
    verifyEmailOTP(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/user/authentication/v1.0/otp/email/verify",
        );
    }
    
    /**
    *
    * Summary: Get logged in user
    * Description:  Used to get logged in user details
    **/
    getLoggedInUser(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/user/authentication/v1.0/session",
        );
    }
    
    /**
    *
    * Summary: Get list of sessions
    * Description:  Lists all active sessions
    **/
    getListOfActiveSessions(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/user/authentication/v1.0/sessions",
        );
    }
    
    /**
    *
    * Summary: Get platform config
    * Description:  Used to get platform config
    **/
    getPlatformConfig(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/user/platform/v1.0/config",
        );
    }
    
    /**
    *
    * Summary: Edit Profile Details
    * Description:  Used to update profile
    **/
    updateProfile(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/user/profile/v1.0/detail",
        );
    }
    
    /**
    *
    * Summary: Add mobile number to profile
    * Description:  Used to add new mobile number to profile
    **/
    addMobileNumber(
    ) {
        return APIClient.execute(
            this._conf,
            "put",
            "/service/application/user/profile/v1.0/mobile",
        );
    }
    
    /**
    *
    * Summary: Delete mobile number from profile
    * Description:  Used to delete mobile number from profile
    **/
    deleteMobileNumber(
        active, opts
        primary, opts
        verified, opts
        countryCode, opts
        phone, opts
    ) {
        return APIClient.execute(
            this._conf,
            "delete",
            "/service/application/user/profile/v1.0/mobile",
        );
    }
    
    /**
    *
    * Summary: Set mobile as primary
    * Description:  Used to set a mobile number as primary
    **/
    setMobileNumberAsPrimary(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/user/profile/v1.0/mobile/primary",
        );
    }
    
    /**
    *
    * Summary: Send verification link to mobile
    * Description:  Used to send verification link to a mobile number
    **/
    sendVerificationLinkToMobile(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/user/profile/v1.0/mobile/link/send",
        );
    }
    
    /**
    *
    * Summary: Add email to profile
    * Description:  Used to add new email to profile
    **/
    addEmail(
    ) {
        return APIClient.execute(
            this._conf,
            "put",
            "/service/application/user/profile/v1.0/email",
        );
    }
    
    /**
    *
    * Summary: Delete email from profile
    * Description:  Used to delete email from profile
    **/
    deleteEmail(
        active, opts
        primary, opts
        verified, opts
        email, opts
    ) {
        return APIClient.execute(
            this._conf,
            "delete",
            "/service/application/user/profile/v1.0/email",
        );
    }
    
    /**
    *
    * Summary: Set email as primary
    * Description:  Used to set an email as primart
    **/
    setEmailAsPrimary(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/user/profile/v1.0/email/primary",
        );
    }
    
    /**
    *
    * Summary: Send verification link to email
    * Description:  Used to sent verification to an email
    **/
    sendVerificationLinkToEmail(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/user/profile/v1.0/email/link/send",
        );
    }
    
}


exports.User = User;



const { 
    ApplicationLegal,
    Seo,
    Announcement,
    Navigation,
    NavigationRef,
    LandingPage,
    Slideshow,
    Faq,
    CustomPage,
    CustomBlog,
    Support,
    TagsSchema
} = require("./schema");

    
class Content {
    constructor(_conf) {
        this._conf = _conf;
    }
    
    /**
    *
    * Summary: Get live announcements
    * Description:  Get live announcements for each or all pages with page slug of page and end date schedule.
    **/
    getAnnouncements(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/content/v1.0/announcements",
        );
    }
    
    /**
    *
    * Summary: Get Blog by slug
    * Description:  Use this API to fetch a blog using `slug`
    **/
    getBlog(
        slug, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/content/v1.0/blogs/{slug}",
        );
    }
    
    /**
    *
    * Summary: Get frequently asked questions
    * Description:  Get frequently asked questions list. These will be helpful for users to using website.
    **/
    getFaqs(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/content/v1.0/faqs",
        );
    }
    
    /**
    *
    * Summary: Get landing page
    * Description:  Use this API to fetch a landing page
    **/
    getLandingPage(
        xDevicePlatform, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/content/v1.0/landing-page",
        );
    }
    
    /**
    *
    * Summary: Get legal information
    * Description:  Get legal information of application, which includes policy, Terms and Conditions, and FAQ information of application.
    **/
    getLegalInformation(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/content/v1.0/legal",
        );
    }
    
    /**
    *
    * Summary: Get navigation
    * Description:  Use this API to fetch a navigation
    **/
    getNavigations(
        xDevicePlatform, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/content/v1.0/navigations/",
        );
    }
    
    /**
    *
    * Summary: Get Page by slug
    * Description:  Use this API to fetch a custom page using `slug`
    **/
    getPage(
        slug, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/content/v1.0/pages/{slug}",
        );
    }
    
    /**
    *
    * Summary: Get seo of application
    * Description:  Get seo of application
    **/
    getSeo(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/content/v1.0/seo",
        );
    }
    
    /**
    *
    * Summary: Get slideshow by slug
    * Description:  Use this API to fetch a slideshow using `slug`
    **/
    getSlideshow(
        slug, opts
        xDevicePlatform, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/content/v1.0/slideshow/{slug}",
        );
    }
    
    /**
    *
    * Summary: Get support information
    * Description:  Get contact details for customer support. Including emails and phone numbers
    **/
    getSupportInformation(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/content/v1.0/support",
        );
    }
    
    /**
    *
    * Summary: Get Tags for application
    * Description:  
    **/
    getFPITags(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/content/v1.0/tags",
        );
    }
    
}


exports.Content = Content;



const { 
    CommunicationConsentReq,
    CommunicationConsentRes,
    CommunicationConsent,
    PushtokenReq,
    PushtokenRes
} = require("./schema");

    
class Communication {
    constructor(_conf) {
        this._conf = _conf;
    }
    
    /**
    *
    * Summary: Get communication consent
    * Description:  Get communication consent
    **/
    getCommunicationConsent(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/communication/v1.0/consent",
        );
    }
    
    /**
    *
    * Summary: Upsert communication consent
    * Description:  Upsert communication consent
    **/
    upsertCommunicationConsent(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/communication/v1.0/consent",
        );
    }
    
    /**
    *
    * Summary: Upsert push token of a user
    * Description:  Upsert push token of a user
    **/
    upsertPushtoken(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/platform/communication/v1.0/pn-token",
        );
    }
    
}


exports.Communication = Communication;



const { 
    qrResp,
    redirect_device,
    redirects,
    shortUrlReq,
    shortUrlRes
} = require("./schema");

    
class Share {
    constructor(_conf) {
        this._conf = _conf;
    }
    
    /**
    *
    * Summary: Create application QR Code
    * Description:  Create application QR Code
    **/
    getApplicationQRCode(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/share/v1.0/qr/",
        );
    }
    
    /**
    *
    * Summary: Create product QR Code
    * Description:  Create product QR Code
    **/
    getProductQRCodeBySlug(
        slug, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/share/v1.0/qr/products/{slug}/",
        );
    }
    
    /**
    *
    * Summary: Create collection QR Code
    * Description:  Create collection QR Code
    **/
    getCollectionQRCodeBySlug(
        slug, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/share/v1.0/qr/collection/{slug}/",
        );
    }
    
    /**
    *
    * Summary: Create url QR Code
    * Description:  Create url QR Code
    **/
    getUrlQRCode(
        url, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/share/v1.0/qr/url/",
        );
    }
    
    /**
    *
    * Summary: Create short link
    * Description:  Create short link
    **/
    createShortLink(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/share/v1.0/links/short-link/",
        );
    }
    
    /**
    *
    * Summary: Get short link by hash
    * Description:  Get short link by hash
    **/
    getShortLinkByHash(
        hash, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/share/v1.0/links/short-link/{hash}/",
        );
    }
    
    /**
    *
    * Summary: Get original link by hash
    * Description:  Get original link by hash
    **/
    getOriginalShortLinkByHash(
        hash, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/share/v1.0/links/short-link/{hash}/original/",
        );
    }
    
}


exports.Share = Share;



const { 
    failedResponse,
    cdn,
    upload,
    startResponse,
    startRequest,
    completeResponse
} = require("./schema");

    
class FileStorage {
    constructor(_conf) {
        this._conf = _conf;
    }
    
    /**
    *
    * Summary: This operation initiates upload and returns storage link which is valid for 30 Minutes. You can use that storage link to make subsequent upload request with file buffer or blob.
    * Description:  Uploads an arbitrarily sized buffer or blob.

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

    **/
    startUpload(
        namespace, opts
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/assets/v1.0/uploads/{namespace}/start/",
        );
    }
    
    /**
    *
    * Summary: This will complete the upload process. After successfully uploading file, you can call this operation to complete the upload process.
    * Description:  Uploads an arbitrarily sized buffer or blob.

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

    **/
    completeUpload(
        namespace, opts
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/assets/v1.0/uploads/{namespace}/complete/",
        );
    }
    
}


exports.FileStorage = FileStorage;



const { 
    Currency,
    Domain,
    Application,
    NotFound,
    ApplicationAboutResponse,
    ApplicationDetailResponse,
    AppVersionRequest,
    ApplicationVersionRequest,
    Device,
    OS,
    AppFeatureResponse,
    Store,
    OrderingStores,
    ApplicationInformation,
    LanguageResponse,
    TokensResponse
} = require("./schema");

    
class Configuration {
    constructor(_conf) {
        this._conf = _conf;
    }
    
    /**
    *
    * Summary: Get current application details
    * Description:  Get current application details.
    **/
    getApplication(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/configuration/v1.0/application",
        );
    }
    
    /**
    *
    * Summary: Get application, owner and seller information
    * Description:  Get application information with owner and seller basic details
    **/
    getOwnerInfo(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/configuration/v1.0/about",
        );
    }
    
    /**
    *
    * Summary: Get basic application details
    * Description:  Get basic application details like name
    **/
    getBasicDetails(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/configuration/v1.0/detail",
        );
    }
    
    /**
    *
    * Summary: Get integration tokens
    * Description:  Get tokens for multiple integrations like Facebook, Googlemaps, Segment, Firebase, etc. Note: token values are encrypted with AES encryption using secret key. Kindly reach to developers for secret key.
    **/
    getIntegrationTokens(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/configuration/v1.0/token",
        );
    }
    
    /**
    *
    * Summary: Check if a new app version is available
    * Description:  Before launching the app (android/iOS), check if a new version is available. Response gives 3 update modes viz. FORCE, AVAILABLE, UP_TO_DATE. `FORCE`- Application should be updated necessarily. `AVAILABLE`- A new version available. But its not necessary to update. `UP_TO_DATE`- Application is at the latest version. These 3 modes are computed at the backend based on the lastest version of app available and the oldest version of app supported by the system.
    **/
    getAppVersion(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/configuration/v1.0/version",
        );
    }
    
    /**
    *
    * Summary: Get deployment meta stores
    * Description:  Get deployment meta stores.
    **/
    getOrderingStores(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/configuration/v1.0/deploymentmeta/stores",
        );
    }
    
    /**
    *
    * Summary: Get features of application
    * Description:  Get features of application
    **/
    getFeatures(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/configuration/v1.0/feature",
        );
    }
    
    /**
    *
    * Summary: Get application information
    * Description:  Get Application Current Information. This includes information about social links, address and contact information of company/seller/brand of the application.
    **/
    getContactInfo(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/configuration/v1.0/information",
        );
    }
    
    /**
    *
    * Summary: Get application enabled currencies
    * Description:  Get currency list for allowed currencies under current application
    **/
    getCurrencies(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/configuration/v1.0/currencies",
        );
    }
    
    /**
    *
    * Summary: Get currency by id
    * Description:  Get currency object with symbol and name information by id.
    **/
    getCurrencyById(
        id, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/configuration/v1.0/currency/{id}",
        );
    }
    
    /**
    *
    * Summary: Get list of languages
    * Description:  Get list of supported languages under application.
    **/
    getLanguages(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/configuration/v1.0/languages",
        );
    }
    
}


exports.Configuration = Configuration;



const { 
    AggregatorConfigDetail,
    AggregatorsConfigDetailResponse,
    ErrorCodeAndDescription,
    HttpErrorCodeAndResponse,
    AttachCardRequest,
    AttachCardsResponse,
    CardPaymentGateway,
    ActiveCardPaymentGatewayResponse,
    ListCardsResponse,
    DeletehCardRequest,
    DeleteCardsResponse,
    ValidateCustomerRequest,
    ValidateCustomerResponse,
    ChargeCustomerRequest,
    ChargeCustomerResponse,
    PaymentInitializationRequest,
    PaymentInitializationResponse,
    PaymentStatusUpdateRequest,
    PaymentStatusUpdateResponse,
    OrderBeneficiaryDetails,
    OrderBeneficiaryResponse,
    NotFoundResourceError,
    IfscCodeResponse,
    InternalErrorResponse,
    AddBeneficiaryViaOtpVerificationRequest,
    AddBeneficiaryViaOtpVerificationResponse,
    WrongOtpError,
    BankDetails,
    AddBeneficiaryDetailsRequest,
    WalletOtpRequest,
    WalletOtpResponse,
    SetDefaultBeneficiaryRequest,
    SetDefaultBeneficiaryResponse
} = require("./schema");

    
class Payment {
    constructor(_conf) {
        this._conf = _conf;
    }
    
    /**
    *
    * Summary: Get payment gateway keys
    * Description:  Get payment gateway (key, secrets, merchant, sdk/api detail) to complete payment at front-end.
    **/
    getAggregatorsConfig(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/payment/v1.0/config/aggregators/key",
        );
    }
    
    /**
    *
    * Summary: Attach a saved card to customer.
    * Description:  Attach a saved card to customer at payment gateway i.e stripe and refresh card cache.
    **/
    attachCardToCustomer(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/payment/v1.0/card/attach",
        );
    }
    
    /**
    *
    * Summary: Fetch active payment gateway for card
    * Description:  Fetch active payment gateway along with customer id for cards payments.
    **/
    getActiveCardAggregator(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/payment/v1.0/card/aggregator",
        );
    }
    
    /**
    *
    * Summary: Fetch the list of saved cards of user.
    * Description:  Fetch the list of saved cards of user from active payment gateway.
    **/
    getActiveUserCards(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/payment/v1.0/cards",
        );
    }
    
    /**
    *
    * Summary: Delete an user card.
    * Description:  Delete an added user card on payment gateway and remove from cache.
    **/
    deleteUserCard(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/payment/v1.0/card/remove",
        );
    }
    
    /**
    *
    * Summary: Validate customer for payment.
    * Description:  Validate customer for payment i.e Simpl paylater, Rupifi loan.
    **/
    verifyCustomerForPayment(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/payment/v1.0/payment/customer/validation",
        );
    }
    
    /**
    *
    * Summary: Verify and charge payment
    * Description:  Verify and charge payment server to server for Simpl & Mswipe.
    **/
    verifyAndChargePayment(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/payment/v1.0/payment/confirm/charge",
        );
    }
    
    /**
    *
    * Summary: Payment Initialisation server to server for UPI and BharatQR.
    * Description:  Payment Initialisation for UPI & BharatQR code, UPI requests to app and QR code to be displayed on screen.
    **/
    initialisePayment(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/payment/v1.0/payment/request",
        );
    }
    
    /**
    *
    * Summary: Continous polling to check status of payment on server.
    * Description:  Continous polling on interval to check status of payment untill timeout.
    **/
    checkAndUpdatePaymentStatus(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/payment/v1.0/payment/confirm/polling",
        );
    }
    
    /**
    *
    * Summary: List User Beneficiary
    * Description:  Get all active  beneficiary details added by the user for refund
    **/
    getUserBeneficiariesDetail(
        orderId, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/payment/v1.0/refund/beneficiary/user",
        );
    }
    
    /**
    *
    * Summary: Ifsc Code Verification
    * Description:  Get True/False for correct IFSC Code for adding bank details for refund
    **/
    verifyIfscCode(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/payment/v1.0/ifsc-code/verify",
        );
    }
    
    /**
    *
    * Summary: List Order Beneficiary
    * Description:  Get all active  beneficiary details added by the user for refund
    **/
    getOrderBeneficiariesDetail(
        orderId, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/payment/v1.0/refund/beneficiaries/order",
        );
    }
    
    /**
    *
    * Summary: Save Beneficiary details on otp validation.
    * Description:  Save Beneficiary details on otp validation.
    **/
    verifyOtpAndAddBeneficiaryForBank(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/payment/v1.0/refund/verification/bank",
        );
    }
    
    /**
    *
    * Summary: Save bank details for cancelled/returned order
    * Description:  Use this API to save bank details for returned/cancelled order to refund amount in his account.
    **/
    addBeneficiaryDetails(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/payment/v1.0/refund/account",
        );
    }
    
    /**
    *
    * Summary: Send Otp on Adding wallet beneficiary
    * Description:  Send Otp on Adding wallet beneficiary for user mobile verification
    **/
    verifyOtpAndAddBeneficiaryForWallet(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/payment/v1.0/refund/verification/wallet",
        );
    }
    
    /**
    *
    * Summary: Mark Default Beneficiary For Refund
    * Description:  Mark Default Beneficiary ot of all Beneficiary Details for Refund
    **/
    updateDefaultBeneficiary(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/payment/v1.0/refund/beneficiary/default",
        );
    }
    
}


exports.Payment = Payment;



const { 
    ApefaceApiError,
    OrderById,
    OrderList,
    ShipmentById,
    ShipmentReasons,
    ShipmentStatusUpdateBody,
    ShipmentStatusUpdate,
    ShipmentTrack
} = require("./schema");

    
class Order {
    constructor(_conf) {
        this._conf = _conf;
    }
    
    /**
    *
    * Summary: Get Orders for application based on application Id
    * Description:  Get Orders
    **/
    getOrders(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/services/application/v1.0/orders",
        );
    }
    
    /**
    *
    * Summary: Get Order by order id for application based on application Id
    * Description:  Get Order By Fynd Order Id
    **/
    getOrderById(
        orderId, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/services/application/v1.0/orders/{order_id}",
        );
    }
    
    /**
    *
    * Summary: Get Shipment by shipment id and order id for application based on application Id
    * Description:  Get Shipment
    **/
    getShipmentById(
        shipmentId, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/services/application/v1.0/orders/shipments/{shipment_id}",
        );
    }
    
    /**
    *
    * Summary: Get Shipment reasons by shipment id and order id for application based on application Id
    * Description:  Get Shipment Reasons
    **/
    getShipmentReasons(
        shipmentId, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/services/application/v1.0/orders/shipments/{shipment_id}/reasons",
        );
    }
    
    /**
    *
    * Summary: Update Shipment status by shipment id and order id for application based on application Id
    * Description:  Update Shipment Status
    **/
    updateShipmentStatus(
        shipmentId, opts
    ) {
        return APIClient.execute(
            this._conf,
            "put",
            "/services/application/v1.0/orders/shipments/{shipment_id}/status",
        );
    }
    
    /**
    *
    * Summary: Track Shipment by shipment id and order id for application based on application Id
    * Description:  Shipment Track
    **/
    trackShipment(
        shipmentId, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/services/application/v1.0/orders/shipments/{shipment_id}/track",
        );
    }
    
}


exports.Order = Order;



const { 
    Action,
    Article,
    Asset,
    CatalogueOrderRequest,
    CatalogueOrderResponse,
    CursorPage,
    Discount,
    Error,
    Offer,
    OrderDiscountRequest,
    OrderDiscountResponse,
    OrderDiscountRuleBucket,
    PointsHistory,
    PointsHistoryResponse,
    PointsResponse,
    RedeemReferralCodeRequest,
    RedeemReferralCodeResponse,
    ReferralDetailsResponse,
    ShareMessages
} = require("./schema");

    
class Rewards {
    constructor(_conf) {
        this._conf = _conf;
    }
    
    /**
    *
    * Summary: Get reward points that could be earned on any catalogue product.
    * Description:  Evaluate the amount of reward points that could be earned on any catalogue product.
    **/
    getPointsOnProduct(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/rewards/v1.0/catalogue/offer/order/",
        );
    }
    
    /**
    *
    * Summary: Calculates the discount on order-amount based on amount ranges configured in order_discount reward.
    * Description:  Calculates the discount on order-amount based on amount ranges configured in order_discount reward.
    **/
    getOrderDiscount(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/rewards/v1.0/user/offers/order-discount/",
        );
    }
    
    /**
    *
    * Summary: Total available points of a user for current application
    * Description:  Total available points of a user for current application
    **/
    getUserPoints(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/rewards/v1.0/user/points",
        );
    }
    
    /**
    *
    * Summary: Get list of points transactions.
    * Description:  Get list of points transactions.
The list of points history is paginated.
    **/
    getUserPointsHistory(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/rewards/v1.0/user/points/history/",
        );
    }
    
    /**
    *
    * Summary: User's referral details.
    * Description:  User's referral details.
    **/
    getUserReferralDetails(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/rewards/v1.0/user/referral/",
        );
    }
    
    /**
    *
    * Summary: Redeems referral code and credits points to users points account.
    * Description:  Redeems referral code and credits points to users points account.
    **/
    redeemReferralCode(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/rewards/v1.0/user/referral/redeem/",
        );
    }
    
}


exports.Rewards = Rewards;



const { 
    Access,
    AddMediaListRequest,
    AddMediaRequest,
    Attribute,
    AttributeObject,
    CheckEligibilityResponse,
    Cloud,
    CommentRequest,
    CreateQNARequest,
    DeviceMeta,
    ErrorResponse,
    MediaCloud,
    MediaMeta,
    PageCursor,
    PageNumber,
    ReportAbuseRequest,
    SaveAttributeRequest,
    TagMeta,
    UpdateAbuseStatusRequest,
    UpdateAttributeRequest,
    UpdateCommentRequest,
    UpdateMediaListRequest,
    UpdateQNARequest,
    UpdateReviewRequest,
    UpdateVoteRequest,
    Url,
    VoteRequest,
    XCursorGetResponse,
    XInsertResponse,
    XNumberGetResponse,
    XUpdateResponse
} = require("./schema");

    
class Feedback {
    constructor(_conf) {
        this._conf = _conf;
    }
    
    /**
    *
    * Summary: post a new abuse request
    * Description:  Report a new abuse for specific entity with description text.
    **/
    createAbuseReport(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/feedback/v1.0/abuse",
        );
    }
    
    /**
    *
    * Summary: Update abuse details
    * Description:  Update the abuse details like status and description text.
    **/
    updateAbuseReport(
    ) {
        return APIClient.execute(
            this._conf,
            "put",
            "/service/application/feedback/v1.0/abuse",
        );
    }
    
    /**
    *
    * Summary: Get list of abuse data
    * Description:  Get the list of abuse data from entity type and entity ID.
    **/
    getAbuseReports(
        entityId, opts
        entityType, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/feedback/v1.0/abuse/entity/{entity_type}/entity-id/{entity_id}",
        );
    }
    
    /**
    *
    * Summary: Get list of attribute data
    * Description:  Provides a list of all attribute data.
    **/
    getAttributes(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/feedback/v1.0/attributes",
        );
    }
    
    /**
    *
    * Summary: Add a new attribute request
    * Description:  Add a new attribute with its name, slug and description.
    **/
    createAttribute(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/feedback/v1.0/attributes",
        );
    }
    
    /**
    *
    * Summary: Get single attribute data
    * Description:  Get a single attribute data from a given slug.
    **/
    getAttribute(
        slug, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/feedback/v1.0/attributes/{slug}",
        );
    }
    
    /**
    *
    * Summary: Update attribute details
    * Description:  Update the attribute's name and description.
    **/
    updateAttribute(
        slug, opts
    ) {
        return APIClient.execute(
            this._conf,
            "put",
            "/service/application/feedback/v1.0/attributes/{slug}",
        );
    }
    
    /**
    *
    * Summary: post a new comment
    * Description:  This is used to add a new comment for specific entity.
    **/
    createComment(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/feedback/v1.0/comment",
        );
    }
    
    /**
    *
    * Summary: Update comment status
    * Description:  Update the comment status (active/approve) or text.
    **/
    updateComment(
    ) {
        return APIClient.execute(
            this._conf,
            "put",
            "/service/application/feedback/v1.0/comment",
        );
    }
    
    /**
    *
    * Summary: Get list of comments
    * Description:  Get the list of comments from specific entity type.
    **/
    getComments(
        entityType, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/feedback/v1.0/comment/entity/{entity_type}",
        );
    }
    
    /**
    *
    * Summary: Checks eligibility and cloud media config
    * Description:  Checks eligibility to rate and review and cloud media configuration
    **/
    checkEligibility(
        entityType, opts
        entityId, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/feedback/v1.0/config/entity/{entity_type}/entity-id/{entity_id}",
        );
    }
    
    /**
    *
    * Summary: Delete Media
    * Description:  Delete Media for the given entity IDs.
    **/
    deleteMedia(
    ) {
        return APIClient.execute(
            this._conf,
            "delete",
            "/service/application/feedback/v1.0/media/",
        );
    }
    
    /**
    *
    * Summary: Add Media
    * Description:  Add Media list for specific entity.
    **/
    createMedia(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/feedback/v1.0/media/",
        );
    }
    
    /**
    *
    * Summary: Update Media
    * Description:  Update Media (archive/approve) for the given entity.
    **/
    updateMedia(
    ) {
        return APIClient.execute(
            this._conf,
            "put",
            "/service/application/feedback/v1.0/media/",
        );
    }
    
    /**
    *
    * Summary: Get Media
    * Description:  Get Media from the given entity type and entity ID.
    **/
    getMedias(
        entityType, opts
        entityId, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/feedback/v1.0/media/entity/{entity_type}/entity-id/{entity_id}",
        );
    }
    
    /**
    *
    * Summary: Get a review summary
    * Description:  Review summary gives ratings and attribute metrics of a review per entity
It gives following response data: review count, rating average. review metrics / attribute rating metrics which contains name, type, average and count.
    **/
    getReviewSummaries(
        entityType, opts
        entityId, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/feedback/v1.0/rating/summary/entity/{entity_type}/entity-id/{entity_id}",
        );
    }
    
    /**
    *
    * Summary: Add customer reviews
    * Description:  Add customer reviews for specific entity with following data:
attributes rating, entity rating, title, description, media resources and template id.
    **/
    createReview(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/feedback/v1.0/review/",
        );
    }
    
    /**
    *
    * Summary: Update customer reviews
    * Description:  Update customer reviews for specific entity with following data:
attributes rating, entity rating, title, description, media resources and template id.
    **/
    updateReview(
    ) {
        return APIClient.execute(
            this._conf,
            "put",
            "/service/application/feedback/v1.0/review/",
        );
    }
    
    /**
    *
    * Summary: Get list of customer reviews
    * Description:  This is used to get the list of customer reviews based on entity and provided filters.
    **/
    getReviews(
        entityType, opts
        entityId, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/feedback/v1.0/review/entity/{entity_type}/entity-id/{entity_id}",
        );
    }
    
    /**
    *
    * Summary: Get the templates for product or l3 type
    * Description:  This is used to get the templates details.
    **/
    getTemplates(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/feedback/v1.0/template/",
        );
    }
    
    /**
    *
    * Summary: Create a new question
    * Description:  This is used to create a new question with following data:
tags, text, type, choices for MCQ type questions, maximum length of answer.
    **/
    createQuestion(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/feedback/v1.0/template/qna/",
        );
    }
    
    /**
    *
    * Summary: Update question
    * Description:  This is used to update question's status, tags and choices.
    **/
    updateQuestion(
    ) {
        return APIClient.execute(
            this._conf,
            "put",
            "/service/application/feedback/v1.0/template/qna/",
        );
    }
    
    /**
    *
    * Summary: Get a list of QnA
    * Description:  This is used to get a list of questions and its answers.
    **/
    getQuestionAndAnswers(
        entityType, opts
        entityId, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/feedback/v1.0/template/qna/entity/{entity_type}/entity-id/{entity_id}",
        );
    }
    
    /**
    *
    * Summary: Get list of votes
    * Description:  This is used to get the list of votes of a current logged in user. Votes can be filtered using `ref_type` i.e. review | comment.
    **/
    getVotes(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/feedback/v1.0/vote/",
        );
    }
    
    /**
    *
    * Summary: Create a new vote
    * Description:  This is used to create a new vote and the actions can be upvote or downvote.
    **/
    createVote(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/feedback/v1.0/vote/",
        );
    }
    
    /**
    *
    * Summary: Update vote
    * Description:  This is used to update the vote and the actions can be upvote or downvote.
    **/
    updateVote(
    ) {
        return APIClient.execute(
            this._conf,
            "put",
            "/service/application/feedback/v1.0/vote/",
        );
    }
    
}


exports.Feedback = Feedback;



const { 
    GetCartResponse,
    AddProductCart,
    AddCartRequest,
    CouponBreakup,
    BaseLoyaltyPoints,
    DisplayBreakup,
    RawBreakup,
    BaseCartBreakup,
    CartCurrency,
    PaymentFlow,
    PaymentFlows,
    PaymentOption,
    PaymentOptions,
    BaseInfo,
    CategoryInfo,
    Image,
    ActionQuery,
    Action,
    Product,
    ProductAvailability,
    ProductPrice,
    ProductPriceInfo,
    CartProductInfo,
    CartResponse,
    UpdateProductCart,
    UpdateCartRequest,
    Coupon,
    PageCoupon,
    GetCouponResponse,
    LoyaltyPoints,
    CartCoupon,
    RawCartCoupon,
    SaveCoupon,
    SaveCouponResponse,
    OfferSeller,
    OfferPrice,
    OfferItem,
    BulkPriceOffer,
    BulkPriceResponse,
    Address,
    GetAddressResponse,
    SaveAddressRequest,
    SaveAddressResponse,
    UpdateAddressRequest,
    UpdateAddressResponse,
    DeleteAddressResponse,
    SelectCartAddressRequest,
    UpdateCartPaymentRequest,
    ShipmentResponse,
    CartShipmentsResponse,
    CartCheckoutRequest,
    DeliverySlot,
    DeliverySlotDate,
    CheckCart,
    OrderData,
    CartCheckoutResponse,
    Meta,
    SharedCartDetails,
    SharedCartResponse
} = require("./schema");

    
class PosCart {
    constructor(_conf) {
        this._conf = _conf;
    }
    
    /**
    *
    * Summary: Fetch all Items Added to  Cart
    * Description:  Get all the details of a items added to cart  by uid. If successful, returns a Cart resource in the response body specified in GetCartResponse
    **/
    getCart(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/pos/cart/v1.0/detail",
        );
    }
    
    /**
    *
    * Summary: Fetch Last-Modified timestamp
    * Description:  Fetch Last-Modified timestamp in header metadata
    **/
    getCartLastModified(
    ) {
        return APIClient.execute(
            this._conf,
            "head",
            "/service/application/pos/cart/v1.0/detail",
        );
    }
    
    /**
    *
    * Summary: Add Items to Cart
    * Description:  <p>Add Items to cart. See `AddCartRequest` in schema of request body for the list of attributes needed to add items to a cart. On successful request, returns cart response containing details of items, coupons available etc.these attributes will be fetched from the folowing api's</p>
    **/
    addItems(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/pos/cart/v1.0/detail",
        );
    }
    
    /**
    *
    * Summary: Update Items already added to Cart
    * Description:  Request object containing attributes like item_quantity and item_size which can be updated .these attributes will be fetched from the folowing api's</p> <ul> <li><font color="monochrome">operation</font> Operation for current api call. <b>update_item</b> for update items. <b>remove_item</b> for removing items.</li> <li> <font color="monochrome">item_id</font>  "/platform/content/v1/products/"</li> <li> <font color="monochrome">item_size</font>   "/platform/content/v1/products/{slug}/sizes/"</li> <li> <font color="monochrome">quantity</font>  item quantity (must be greater than or equal to 1)</li> <li> <font color="monochrome">article_id</font>   "/content​/v1​/products​/{identifier}​/sizes​/price​/"</li> <li> <font color="monochrome">item_index</font>  item position in the cart (must be greater than or equal to 0)</li> </ul>
    **/
    updateCart(
    ) {
        return APIClient.execute(
            this._conf,
            "put",
            "/service/application/pos/cart/v1.0/detail",
        );
    }
    
    /**
    *
    * Summary: Cart item count
    * Description:  Get total count of item present in cart
    **/
    getItemCount(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/pos/cart/v1.0/basic",
        );
    }
    
    /**
    *
    * Summary: Fetch Coupon
    * Description:  Get all the details of a coupons applicable to cart  by uid. If successful, returns a Coupon resource in the response body specified in GetCouponResponse
    **/
    getCoupons(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/pos/cart/v1.0/coupon",
        );
    }
    
    /**
    *
    * Summary: Apply Coupon
    * Description:  <p>Apply Coupons on Items added to cart. On successful request, returns cart response containing details of items ,coupons applied etc.these attributes will be consumed by  api</p> <ul> <li> <font color="monochrome">coupon_code</font></li>
</ul>
    **/
    applyCoupon(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/pos/cart/v1.0/coupon",
        );
    }
    
    /**
    *
    * Summary: Remove Coupon Applied
    * Description:  Remove Coupon applied on the cart by passing uid in request body.
    **/
    removeCoupon(
    ) {
        return APIClient.execute(
            this._conf,
            "delete",
            "/service/application/pos/cart/v1.0/coupon",
        );
    }
    
    /**
    *
    * Summary: Get discount offers based on quantity
    * Description:  List applicable offers along with current, next and best offer for given product. Either one of **uid**, **item_id**, **slug** should be present*
    **/
    getBulkDiscountOffers(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/pos/cart/v1.0/bulk-price",
        );
    }
    
    /**
    *
    * Summary: Fetch Address
    * Description:  Get all the addresses associated with the account. If successful, returns a Address resource in the response body specified in GetAddressResponse.attibutes listed below are optional <ul> <li> <font color="monochrome">uid</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
    **/
    getAddresses(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/pos/cart/v1.0/address",
        );
    }
    
    /**
    *
    * Summary: Add Address to the account
    * Description:  <p>Add Address to account. See `SaveAddressRequest` in schema of request body for the list of attributes needed to add Address to account. On successful request, returns response containing address_id ,is_default_address and success message.
    **/
    addAddress(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/pos/cart/v1.0/address",
        );
    }
    
    /**
    *
    * Summary: Fetch Single Address
    * Description:  Get a addresses with the given id. If successful, returns a Address resource in the response body specified in GetAddressResponse.attibutes listed below are optional <ul> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
    **/
    getAddressById(
        id, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/pos/cart/v1.0/address/{id}",
        );
    }
    
    /**
    *
    * Summary: Update Address alreay added to account
    * Description:  Request object containing attributes mentioned in  <font color="blue">UpdateAddressRequest </font> can be updated .these attributes are :</p> <ul> <li> <font color="monochrome">is_default_address</font></li> <li> <font color="monochrome">landmark</font></li> <li> <font color="monochrome">area</font></li> <li> <font color="monochrome">pincode</font></li> <li> <font color="monochrome">email</font></li> <li> <font color="monochrome">address_type</font></li> <li> <font color="monochrome">name</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">address</font></li> </ul>
    **/
    updateAddress(
        id, opts
    ) {
        return APIClient.execute(
            this._conf,
            "put",
            "/service/application/pos/cart/v1.0/address/{id}",
        );
    }
    
    /**
    *
    * Summary: Remove Address Associated to the account
    * Description:  Delete a Address by it's address_id. Returns an object that tells whether the address was deleted successfully
    **/
    removeAddress(
        id, opts
    ) {
        return APIClient.execute(
            this._conf,
            "delete",
            "/service/application/pos/cart/v1.0/address/{id}",
        );
    }
    
    /**
    *
    * Summary: Select Address from All Addresses
    * Description:  <p>Select Address from all addresses associated with the account in order to ship the cart items to .that address,otherwise default address will be selected implicitly. See `SelectCartAddressRequest` in schema of request body for the list of attributes needed to select Address from account. On successful request, returns Cart object response.below are the address attributes which needs to be sent. <ul> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">billing_address_id</font></li> <li> <font color="monochrome">uid</font></li> </ul>
    **/
    selectAddress(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/pos/cart/v1.0/select-address",
        );
    }
    
    /**
    *
    * Summary: Get Cart Payment for valid coupon
    * Description:  Validate coupon for selected payment mode
    **/
    getPaymentModes(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/pos/cart/v1.0/payment",
        );
    }
    
    /**
    *
    * Summary: Update Cart Payment
    * Description:  Update Cart Payment for Your Account
    **/
    selectPaymentMode(
    ) {
        return APIClient.execute(
            this._conf,
            "put",
            "/service/application/pos/cart/v1.0/payment",
        );
    }
    
    /**
    *
    * Summary: Get delivery date and options before checkout
    * Description:  Shipment break up item wise with delivery date. Actual                      delivery will be during given dates only. Items will be                      delivered in group of shipments created.
    **/
    getShipments(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/pos/cart/v1.0/shipment",
        );
    }
    
    /**
    *
    * Summary: Checkout Cart
    * Description:  Checkout all items in cart to payment and order generation.                        For COD only order will be generated while for other checkout mode                        user will be redirected to payment gateway
    **/
    checkoutCart(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/pos/cart/v1.0/checkout",
        );
    }
    
    /**
    *
    * Summary: Update Cart Meta
    * Description:  Update cart meta like checkout_mode, gstin.
    **/
    updateCartMeta(
    ) {
        return APIClient.execute(
            this._conf,
            "put",
            "/service/application/pos/cart/v1.0/meta",
        );
    }
    
    /**
    *
    * Summary: Generate Cart sharing link token
    * Description:  Generates shared cart snapshot and returns shortlink token
    **/
    getCartShareLink(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/pos/cart/v1.0/share-cart",
        );
    }
    
    /**
    *
    * Summary: Get shared cart snapshot and cart response
    * Description:  Returns shared cart response for sent token with `shared_cart_details`                    containing shared cart details in response.
    **/
    getCartSharedItems(
        token, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/pos/cart/v1.0/share-cart/{token}",
        );
    }
    
    /**
    *
    * Summary: Merge or Replace existing cart
    * Description:  Merge or Replace cart based on `action` parameter with shared cart of `token`
    **/
    updateCartWithSharedItems(
        token, opts
        action, opts
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/pos/cart/v1.0/share-cart/{token}/{action}",
        );
    }
    
}


exports.PosCart = PosCart;


