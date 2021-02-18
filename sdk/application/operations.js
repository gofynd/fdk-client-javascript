
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
    ErrorResponse,
    ProductSize,
    ProductSizeStores,
    Price,
    ProductListingPrice,
    ProductSizes,
    Seller,
    ProductStockPrice,
    ArticleAssignment,
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
    StoreDetail,
    CompanyDetail,
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
    SeoDetail,
    CollectionImage,
    CollectionBanner,
    UserInfo,
    Schedule,
    CollectionBadge,
    CreateCollection,
    CollectionDetailResponse,
    GetCollectionDetailNest,
    CollectionListingFilterTag,
    CollectionListingFilterType,
    CollectionListingFilter,
    GetCollectionListingResponse,
    CollectionItem,
    CollectionItemsRequest,
    CollectionItemsResponse,
    GetCollectionListingItemsResponse,
    CollectionsUpdateDetailResponse,
    CollectionDetailViewDeleteResponse,
    GetFollowListingResponse,
    FollowPostResponse,
    FollowerCountResponse,
    FollowIdsData,
    FollowIdsResponse,
    LatLong,
    Store1,
    StoreListingResponse
} = require("./schema");

    
class Catalog {
    constructor(_conf) {
        this._conf = _conf;
    }
    
    /**
    *
    * Summary: Get a product
    * Description:  Products are the core resource of an application. Products can be associated by categories, collections, brands and more. This API retrieves the product specified by the given ``slug``. If successful, returns a Product resource in the response body specified in `ProductDetail`
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
    * Summary: Add a Collection
    * Description:  Create a collection. See `CreateCollection` for the list of attributes needed to create a collection and **collections/query-options** for the available options to create a collection. On successful request, returns a paginated list of collections specified in `CollectionDetailResponse`
    **/
    addCollection(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/catalog/v1.0/collections/",
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
    * Summary: Add items to a collection
    * Description:  Adds items to a collection specified by its `slug`. See `CollectionItemsRequest` for the list of attributes needed to add items to an collection.
    **/
    addCollectionItemsBySlug(
        slug, opts
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/catalog/v1.0/collections/{slug}/items/",
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
    * Summary: Update a collection
    * Description:  Update a collection by it's slug. On successful request, returns the updated collection
    **/
    updateCollectionDetailBySlug(
        slug, opts
    ) {
        return APIClient.execute(
            this._conf,
            "put",
            "/service/application/catalog/v1.0/collections/{slug}/",
        );
    }
    
    /**
    *
    * Summary: Delete a Collection
    * Description:  Delete a collection by it's slug. Returns an object that tells whether the collection was deleted successfully
    **/
    deleteCollectionDetailBySlug(
        slug, opts
    ) {
        return APIClient.execute(
            this._conf,
            "delete",
            "/service/application/catalog/v1.0/collections/{slug}/",
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
    
    /**
    *
    * Summary: List store meta information.
    * Description:  Use this API to get list of stores for specific application. If successful, returns list of stores specified in `StoreListingResponse`
    **/
    getStores(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/catalog/v1.0/analytics/store-list/",
        );
    }
    
}


exports.Catalog = Catalog;



const { 
    TicketHistoryPayload,
    CustomFormSubmissionPayload,
    GetTokenForVideoRoomResponse,
    GetParticipantsInsideVideoRoomResponse,
    SubmitCustomFormResponse,
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
            "/service/application/lead/v1.0/ticket/{id}",
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
            "/service/application/lead/v1.0/ticket/{ticket_id}/history",
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
            "/service/application/lead/v1.0/ticket/",
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
            "/service/application/lead/v1.0/form/{slug}",
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
            "/service/application/lead/v1.0/form/{slug}/submit",
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
            "/service/application/lead/v1.0/video/room/{unique_name}/participants",
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
            "/service/application/lead/v1.0/video/room/{unique_name}/token",
        );
    }
    
}


exports.Lead = Lead;



const { 
    QRCodeResp,
    RedirectDevice,
    Redirects,
    ShortLinkReq,
    ShortLinkRes
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
            "post",
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
            "post",
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
            "post",
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
            "post",
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


