const APIClient = require("./APIClient");
const Configuration = require("./ApplicationConfig");
const { required } = require("../common/Utils");

class Catalog {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * Summary: Get a product
    * Description:  Products are the core resource of an application. Products can be associated by categories, collections, brands and more. This API retrieves the product specified by the given ``slug``. If successful, returns a Product resource in the response body specified in `ProductDetail`
     * @param { string } slug - The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/**
     
    **/
  getProductDetailBySlug(slug = required("slug")) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/${slug}/`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Get the sizes of a product
    * Description:  A product can exist in multiple sizes. Use this API to fetch all the available sizes of a product. If successful, returns a ProductSize object in the response body as specified in `ProductSizes`
     * @param { string } slug - The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/**
     * @param { string } [storeId] - The store id of the product whose sizes need to be retrieved
     
    **/
  getProductSizesBySlug(slug = required("slug"), storeId) {
    const query = {};
    query["store_id"] = storeId;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/${slug}/sizes/`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Get price a product size
    * Description:  Any available product can exist in multiple sizes. Sometimes prices may vary among different sizes of the same product. Use this API to retrieve the price of the product of a particular size with the location details it is available in.
     * @param { string } slug - The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/**
     * @param { string } size - The size of the product for which the price needs to be retrieved. You can get the available sizes of a product from **v1.0/products/{slug}/sizes/**
     * @param { number } [pincode] - The pincode of the product for which the price needs to be retrieved.
     * @param { string } [storeId] - The store of the product whose size level price need to be retrieved
     
    **/
  getProductPriceBySlug(
    slug = required("slug"),
    size = required("size"),
    pincode,
    storeId
  ) {
    const query = {};
    query["pincode"] = pincode;
    query["store_id"] = storeId;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/${slug}/sizes/${size}/price/`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: List sellers of a product
    * Description:  A product of a particular size can be sold by multiple sellers. Use this API to fetch the sellers who are selling this product and have the stock of a particular size
     * @param { string } slug - The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/**
     * @param { string } size - The size of the product for which the price needs to be retrieved. You can get the available sizes of a product from **v1.0.0/products/sizes**
     * @param { number } [pincode] - The pincode of the product for which the price needs to be retrieved.
     * @param { number } [pageNo] - The page number to navigate through the given set of results.
     * @param { number } [pageSize] - Number of items to retrieve in each page. Default is 12.
     
    **/
  getProductSellersBySlug(
    slug = required("slug"),
    size = required("size"),
    pincode,
    pageNo,
    pageSize
  ) {
    const query = {};
    query["pincode"] = pincode;
    query["page_no"] = pageNo;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/${slug}/sizes/${size}/sellers/`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Compare products
    * Description:  Compare between the features of the given set of products Use this API to compare how one product ranks against other products. Note that at least one slug is mandatory in request query.
     * @param { string } slug - The unique identifier `slug` of a products. You can retrieve this from the APIs that list products like **v1.0/products/**
     
    **/
  getProductComparisonBySlugs(slug = required("slug")) {
    const query = {};
    query["slug"] = slug;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/compare/`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Get comparison between similar products
    * Description:  Compare between the features of the given set of products Use this API to compare how one product ranks against other products
     * @param { string } slug - The unique identifier `slug` of a product. You can retrieve this from the APIs that list products like **v1.0/products/**
     
    **/
  getSimilarComparisonProductBySlug(slug = required("slug")) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/${slug}/similar/compare/`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Get comparison between frequently compared products with the given product
    * Description:  Compare between the features of the give product with frequently compared products Use this API to compare how one product ranks against other products
     * @param { string } slug - The unique identifier `slug` of a product. You can retrieve this from the APIs that list products like **v1.0/products/**
     
    **/
  getComparedFrequentlyProductBySlug(slug = required("slug")) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/${slug}/similar/compared-frequently/`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Get similar products
    * Description:  Get products similar to the one specified by the `identifier`. If successful, it returns a group of similar products based on type as described in `SimilarProductByTypeResponse`
     * @param { string } slug - The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/**
     * @param { string } similarType - The tag_identifier is used to fetch the particular type of similar product such as basic, visual, price, seller, category and spec.
     
    **/
  getProductSimilarByIdentifier(
    slug = required("slug"),
    similarType = required("similarType")
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/${slug}/similar/${similarType}/`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Get variant of a particular product
    * Description:  A product can have a different type of variants varies from color to shade etc. Use this API to fetch all the available variants of a product. If successful, returns a Products for different variants type in the response body as specified in `ProductVariantResponse`
     * @param { string } slug - The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/**
     
    **/
  getProductVariantsBySlug(slug = required("slug")) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/${slug}/variants/`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Get the stock of a product
    * Description:  Retrieve the available stock of the products. You can use this API to retrieve stock of multiple products at a time. Only 50 product IDs can be given in a single API request
     * @param { string } [itemId] - Product id to get product stock (Max. 50 allowed)
     * @param { string } [alu] - Product identifier alu to get product stock (Max. 50 allowed)
     * @param { string } [skuCode] - Product identifier sku_code to get product stock (Max. 50 allowed)
     * @param { string } [ean] - Product identifier ean to get product stock (Max. 50 allowed)
     * @param { string } [upc] - Product identifier upc to get product stock (Max. 50 allowed)
     
    **/
  getProductStockByIds(itemId, alu, skuCode, ean, upc) {
    const query = {};
    query["item_id"] = itemId;
    query["alu"] = alu;
    query["sku_code"] = skuCode;
    query["ean"] = ean;
    query["upc"] = upc;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/stock-status/`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Get the stock of a product
    * Description:  Retrieve the available stock of the products. You can use this api to get stock status of products whose inventory is updated in given time
     * @param { string } timestamp - timestamp in UTC format (2020-07-23T10:27:50Z)
     * @param { number } [pageSize] - Limit of number of items for stock status default 12
     * @param { string } [pageId] - will give next page results
     
    **/
  getProductStockForTimeByIds(
    timestamp = required("timestamp"),
    pageSize,
    pageId
  ) {
    const query = {};
    query["timestamp"] = timestamp;
    query["page_size"] = pageSize;
    query["page_id"] = pageId;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/stock-status/poll/`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: List the products
    * Description:  List all the products associated with a brand, collection or category in a requested sort order. The API additionally supports arbitrary search queries that may refer the name of any product, brand, category or collection. If successful, returns a paginated list of products specified in `ProductListingResponse`
     * @param { string } [q] - The search query. This can be a partial or complete name of a either a product, brand or category
     * @param { string } [f] - The search filter parameters. All the parameter filtered from filter parameters will be passed in ``f`` parameter in this format. ``?f=brand:voi-jeans||and:::l3_categories:t-shirts||shirts``
     * @param { boolean } [filters] - Pass `filters` parameter to fetch the filter details. This flag is used to fetch all filters
     * @param { string } [sortOn] - The order to sort the list of products on. The supported sort parameters are popularity, price, redemption and discount in either ascending or descending order. See the supported values below.
     * @param { string } [pageId] - Each response will contain ``page_id`` param, which should be sent back to make pagination work.
     * @param { number } [pageSize] - Number of items to retrieve in each page. Default is 12.
     * @param { number } [pageNo] - If page_type is number then pass it to fetch page items. Default is 1.
     * @param { string } [pageType] - For pagination type should be cursor or number. Default is cursor.
     
    **/
  getProducts(q, f, filters, sortOn, pageId, pageSize, pageNo, pageType) {
    const query = {};
    query["q"] = q;
    query["f"] = f;
    query["filters"] = filters;
    query["sort_on"] = sortOn;
    query["page_id"] = pageId;
    query["page_size"] = pageSize;
    query["page_no"] = pageNo;
    query["page_type"] = pageType;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: List all the brands
    * Description:  A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`
     * @param { string } [department] - The name of the department. Use this parameter to filter products by a particular department. See below the list of available departments. You can retrieve available departments from the **v1.0/departments/** API
     * @param { number } [pageNo] - The page number to navigate through the given set of results
     * @param { number } [pageSize] - Number of items to retrieve in each page. Default is 12.
     
    **/
  getBrands(department, pageNo, pageSize) {
    const query = {};
    query["department"] = department;
    query["page_no"] = pageNo;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/brands/`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Get metadata of a brand
    * Description:  Fetch metadata of a brand. If successful, returns a metadata object specified in `BrandDetailResponse`
     * @param { string } slug - The unique identifier of a brand. i.e; `slug` of a brand. You can retrieve these from the APIs that list brands like **v1.0/brands/**
     
    **/
  getBrandDetailBySlug(slug = required("slug")) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/brands/${slug}/`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: List all the categories
    * Description:  List all the categories. You can optionally pass filter the brands by the department. If successful, returns a paginated list of brands specified in `CategoryListingResponse`
     * @param { string } [department] - The name of the department. Use this parameter to filter products by a particular department. See below the list of available departments. You can retrieve available departments from the **v1.0/departments/** API
     
    **/
  getCategories(department) {
    const query = {};
    query["department"] = department;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/categories/`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Get metadata of a category
    * Description:  Fetch metadata of a category. If successful, returns a metadata object specified in `CategoryMetaResponse`
     * @param { string } slug - The unique identifier of a category. i.e; `slug` of a category. You can retrieve these from the APIs that list categories like **v1.0/categories/**
     
    **/
  getCategoryDetailBySlug(slug = required("slug")) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/categories/${slug}/`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: List the products
    * Description:  List all the products associated with a brand, collection or category in a random order. If successful, returns a paginated list of products specified in `HomeListingResponse`
     * @param { string } [sortOn] - Each response will contain ``sort_on`` param, which should be sent back to make pagination work.
     * @param { string } [pageId] - Each response will contain ``page_id`` param, which should be sent back to make pagination work.
     * @param { number } [pageSize] - Number of items to retrieve in each page. Default is 12.
     
    **/
  getHomeProducts(sortOn, pageId, pageSize) {
    const query = {};
    query["sort_on"] = sortOn;
    query["page_id"] = pageId;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/home/listing/`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: List all the departments
    * Description:  Departments are a way to categorise similar products. A product can lie in multiple departments. For example, a skirt can below to the 'Women's Fashion' Department while a handbag can lie in 'Women's Accessories' Department. Use this API to list all the departments. If successful, returns the list of departments specified in `DepartmentResponse`
     
    **/
  getDepartments() {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/departments/`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Get relevant suggestions for a search query
    * Description:  Retrieves a list of suggestions for a given search query. Each suggestion is a valid search term that's generated on the basis of what is given in query. This is particularly useful to enhance the user experience in search. The given search query can be a partial name of any product, brand and category. For example, if the given search query `q` is _ski_ the relevant search suggestions returned might be a list containing _skirt_, _ski shoes_, __skin cream_ etc.
     * @param { string } q - The search query. This can be a partial or complete name of a either a product, brand or category
     
    **/
  getSearchResults(q = required("q")) {
    const query = {};
    query["q"] = q;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/auto-complete/`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Add a Collection
    * Description:  Create a collection. See `CreateCollection` for the list of attributes needed to create a collection and **collections/query-options** for the available options to create a collection. On successful request, returns a paginated list of collections specified in `CollectionDetailResponse`
     body: CreateCollection,
    **/
  addCollection(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/catalog/v1.0/collections/`,
      query,
      body
    );
  }

  /**
    *
    * Summary: List all the collections
    * Description:  A Collection allows you to organize your products into hierarchical groups. For example, a dress might be in the category _Clothing_, the individual product might also be in the collection _Summer_. On successful request, returns all the collections`
     * @param { string } [pageId] - Each response will contain ``page_id`` param, which should be sent back to make pagination work.
     * @param { number } [pageSize] - Number of items to retrieve in each page. Default is 12.
     
    **/
  getCollections(pageId, pageSize) {
    const query = {};
    query["page_id"] = pageId;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/collections/`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Add items to a collection
    * Description:  Adds items to a collection specified by its `slug`. See `CollectionItemsRequest` for the list of attributes needed to add items to an collection.
     * @param { string } slug - A `slug` is a human readable, URL friendly unique identifier of an object. Pass the `slug` of the collection which you want to add items into.
     body: CollectionItemsRequest,
    **/
  addCollectionItemsBySlug(slug = required("slug"), body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/catalog/v1.0/collections/${slug}/items/`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Get the items in a collection
    * Description:  Get items in a collection specified by its `slug`.
     * @param { string } slug - A `slug` is a human readable, URL friendly unique identifier of an object. Pass the `slug` of the collection for which you want to fetch the items
     * @param { string } [f] - The search filter parameters. All the parameter filtered from filter parameters will be passed in ``f`` parameter in this format. ``?f=brand:voi-jeans||and:::l3_categories:t-shirts||shirts``
     * @param { boolean } [filters] - Pass `filters` parameter to fetch the filter details. This flag is used to fetch all filters
     * @param { string } [sortOn] - The order to sort the list of products on. The supported sort parameters are popularity, price, redemption and discount in either ascending or descending order. See the supported values below.
     * @param { string } [pageId] - Each response will contain ``page_id`` param, which should be sent back to make pagination work.
     * @param { number } [pageSize] - Number of items to retrieve in each page. Default is 12.
     
    **/
  getCollectionItemsBySlug(
    slug = required("slug"),
    f,
    filters,
    sortOn,
    pageId,
    pageSize
  ) {
    const query = {};
    query["f"] = f;
    query["filters"] = filters;
    query["sort_on"] = sortOn;
    query["page_id"] = pageId;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/collections/${slug}/items/`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Delete a Collection
    * Description:  Delete a collection by it's slug. Returns an object that tells whether the collection was deleted successfully
     * @param { string } slug - A `slug` is a human readable, URL friendly unique identifier of an object. Pass the `slug` of the collection which you want to delete.
     
    **/
  deleteCollectionDetailBySlug(slug = required("slug")) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/application/catalog/v1.0/collections/${slug}/`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Get a particular collection
    * Description:  Get the details of a collection by its `slug`. If successful, returns a Collection resource in the response body specified in `CollectionDetailResponse`
     * @param { string } slug - A `slug` is a human readable, URL friendly unique identifier of an object. Pass the `slug` of the collection which you want to retrieve.
     
    **/
  getCollectionDetailBySlug(slug = required("slug")) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/collections/${slug}/`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Update a collection
    * Description:  Update a collection by it's slug. On successful request, returns the updated collection
     * @param { string } slug - A `slug` is a human readable, URL friendly unique identifier of an object. Pass the `slug` of the collection which you want to update.
     
    **/
  updateCollectionDetailBySlug(slug = required("slug")) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/catalog/v1.0/collections/${slug}/`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Get a list of followed Products, Brands, Collections
    * Description:  A User can follow a Product they like. This API retrieves the products the user have followed. If successful, returns a Followed resource in the response body specified in `GetFollowResponseSchema`
     * @param { string } collectionType - Type of collection followed. i. e. products, brands, collections
     
    **/
  getFollowedListing(collectionType = required("collectionType")) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/follow/${collectionType}/`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Follow a particular Product
    * Description:  Follow a particular Product specified by its uid. Pass the uid of the product in request URL
     * @param { string } collectionType - Type of collection followed. i. e. products, brands, collections
     * @param { number } collectionId - the `id` of the collection type you want to follow
     
    **/
  followById(
    collectionType = required("collectionType"),
    collectionId = required("collectionId")
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/catalog/v1.0/follow/${collectionType}/${collectionId}/`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: UnFollow a Product
    * Description:  You can undo a followed Product or Brand by its id, we refer this action as _unfollow_. Pass the uid of the product in request URL
     * @param { string } collectionType - Type of collection followed. i. e. products, brands, collections
     * @param { number } collectionId - the `id` of the collection type you want to unfollow
     
    **/
  unfollowById(
    collectionType = required("collectionType"),
    collectionId = required("collectionId")
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/application/catalog/v1.0/follow/${collectionType}/${collectionId}/`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Get Follow Count
    * Description:  Get count of followers for given collection type and collection id.
     * @param { string } collectionType - the `type` of the collection products/brands/collections.
     * @param { string } collectionId - the `id` of the product/brand/collection.
     
    **/
  getFollowerCountById(
    collectionType = required("collectionType"),
    collectionId = required("collectionId")
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/follow/${collectionType}/${collectionId}/count/`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Get the Ids of followed product, brand and collection.
    * Description:  You can get the ids of all the followed Product, Brand and Collections. Pass collection_type as query parameter to fetch specific Ids
     * @param { string } [collectionType] - Type of collection followed. i. e. products, brands, collections
     
    **/
  getFollowIds(collectionType) {
    const query = {};
    query["collection_type"] = collectionType;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/follow/ids/`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: List store meta information.
    * Description:  Use this API to get list of stores for specific application. If successful, returns list of stores specified in `StoreListingResponse`
     * @param { number } [pageNo] - Each response will contain **page_no** param, which should be sent back to make pagination work.
     * @param { number } [pageSize] - Number of items to retrieve in each page.
     * @param { string } [q] - This can be used to search a particulr store by its name or store_code.
     * @param { number } [range] - This can be used to retrieve store within a particular range. For eg range=10000 (in meters)
     * @param { number } [latitude] - This should be the latitude of the location from which one needs to retreive the nearest stores.
     * @param { number } [longitude] - This should be the longitude of the location from which one needs to retreive the nearest stores.
     
    **/
  getStores(pageNo, pageSize, q, range, latitude, longitude) {
    const query = {};
    query["page_no"] = pageNo;
    query["page_size"] = pageSize;
    query["q"] = q;
    query["range"] = range;
    query["latitude"] = latitude;
    query["longitude"] = longitude;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/locations/`,
      query,
      {}
    );
  }
}

class Cart {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * Summary: Fetch all Items Added to  Cart
    * Description:  Get all the details of a items added to cart  by uid. If successful, returns a Cart resource in the response body specified in CartResponse
     * @param { number } [uid] - 
     * @param { number } [assignCardId] - 
     
    **/
  getCart(uid, assignCardId) {
    const query = {};
    query["uid"] = uid;
    query["assign_card_id"] = assignCardId;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/cart/v1.0/detail`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Fetch Last-Modified timestamp
    * Description:  Fetch Last-Modified timestamp in header metadata
     * @param { number } [uid] - 
     
    **/
  getCartLastModified(uid) {
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "head",
      `/service/application/cart/v1.0/detail`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Add Items to Cart
    * Description:  <p>Add Items to cart. See `AddCartRequest` in schema of request body for the list of attributes needed to add items to a cart. On successful request, returns cart response containing details of items, coupons available etc.these attributes will be fetched from the folowing api's</p>
     body: AddCartRequest,
    **/
  addItems(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/cart/v1.0/detail`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Update Items already added to Cart
    * Description:  Request object containing attributes like item_quantity and item_size which can be updated .these attributes will be fetched from the folowing api's</p> <ul> <li><font color="monochrome">operation</font> Operation for current api call. <b>update_item</b> for update items. <b>remove_item</b> for removing items.</li> <li> <font color="monochrome">item_id</font>  "/platform/content/v1/products/"</li> <li> <font color="monochrome">item_size</font>   "/platform/content/v1/products/{slug}/sizes/"</li> <li> <font color="monochrome">quantity</font>  item quantity (must be greater than or equal to 1)</li> <li> <font color="monochrome">article_id</font>   "/content​/v1​/products​/{identifier}​/sizes​/price​/"</li> <li> <font color="monochrome">item_index</font>  item position in the cart (must be greater than or equal to 0)</li> </ul>
     body: UpdateCartRequest,
    **/
  updateCart(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/cart/v1.0/detail`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Cart item count
    * Description:  Get total count of item present in cart
     * @param { number } [uid] - Cart id
     
    **/
  getItemCount(uid) {
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/cart/v1.0/basic`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Fetch Coupon
    * Description:  Get all the details of a coupons applicable to cart  by uid. If successful, returns a Coupon resource in the response body specified in GetCouponResponse
     * @param { number } [uid] - 
     
    **/
  getCoupons(uid) {
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/cart/v1.0/coupon`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Apply Coupon
    * Description:  <p>Apply Coupons on Items added to cart. On successful request, returns cart response containing details of items ,coupons applied etc.these attributes will be consumed by  api</p> <ul> <li> <font color="monochrome">coupon_code</font></li>
</ul>
     * @param { boolean } [i] - 
     * @param { boolean } [b] - 
     * @param { boolean } [p] - 
     body: ApplyCouponRequest,
    **/
  applyCoupon(body, i, b, p) {
    const query = {};
    query["i"] = i;
    query["b"] = b;
    query["p"] = p;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/cart/v1.0/coupon`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Remove Coupon Applied
    * Description:  Remove Coupon applied on the cart by passing uid in request body.
     * @param { number } [uid] - Cart id
     
    **/
  removeCoupon(uid) {
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/application/cart/v1.0/coupon`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Get discount offers based on quantity
    * Description:  List applicable offers along with current, next and best offer for given product. Either one of **uid**, **item_id**, **slug** should be present*
     * @param { number } [itemId] - Item id
     * @param { string } [articleId] - Article mongo id
     * @param { number } [uid] - Item id
     * @param { string } [slug] - Item unique url from product page
     
    **/
  getBulkDiscountOffers(itemId, articleId, uid, slug) {
    const query = {};
    query["item_id"] = itemId;
    query["article_id"] = articleId;
    query["uid"] = uid;
    query["slug"] = slug;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/cart/v1.0/bulk-price`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Fetch Address
    * Description:  Get all the addresses associated with the account. If successful, returns a Address resource in the response body specified in GetAddressResponse.attibutes listed below are optional <ul> <li> <font color="monochrome">uid</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
     * @param { number } [uid] - 
     * @param { number } [mobileNo] - 
     * @param { string } [checkoutMode] - 
     * @param { number } [tags] - 
     * @param { boolean } [isDefault] - 
     
    **/
  getAddresses(uid, mobileNo, checkoutMode, tags, isDefault) {
    const query = {};
    query["uid"] = uid;
    query["mobile_no"] = mobileNo;
    query["checkout_mode"] = checkoutMode;
    query["tags"] = tags;
    query["is_default"] = isDefault;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/cart/v1.0/address`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Add Address to the account
    * Description:  <p>Add Address to account. See `SaveAddressRequest` in schema of request body for the list of attributes needed to add Address to account. On successful request, returns response containing address_id ,is_default_address and success message.
     body: SaveAddressRequest,
    **/
  addAddress(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/cart/v1.0/address`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Fetch Single Address
    * Description:  Get a addresses with the given id. If successful, returns a Address resource in the response body specified in GetAddressResponse.attibutes listed below are optional <ul> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
     * @param { number } id - 
     * @param { number } [uid] - 
     * @param { number } [mobileNo] - 
     * @param { string } [checkoutMode] - 
     * @param { number } [tags] - 
     * @param { boolean } [isDefault] - 
     
    **/
  getAddressById(
    id = required("id"),
    uid,
    mobileNo,
    checkoutMode,
    tags,
    isDefault
  ) {
    const query = {};
    query["uid"] = uid;
    query["mobile_no"] = mobileNo;
    query["checkout_mode"] = checkoutMode;
    query["tags"] = tags;
    query["is_default"] = isDefault;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/cart/v1.0/address/${id}`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Update Address alreay added to account
    * Description:  Request object containing attributes mentioned in  <font color="blue">UpdateAddressRequest </font> can be updated .these attributes are :</p> <ul> <li> <font color="monochrome">is_default_address</font></li> <li> <font color="monochrome">landmark</font></li> <li> <font color="monochrome">area</font></li> <li> <font color="monochrome">pincode</font></li> <li> <font color="monochrome">email</font></li> <li> <font color="monochrome">address_type</font></li> <li> <font color="monochrome">name</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">address</font></li> </ul>
     * @param { number } id - Address id
     body: UpdateAddressRequest,
    **/
  updateAddress(id = required("id"), body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/cart/v1.0/address/${id}`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Remove Address Associated to the account
    * Description:  Delete a Address by it's address_id. Returns an object that tells whether the address was deleted successfully
     * @param { number } id - Address id
     
    **/
  removeAddress(id = required("id")) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/application/cart/v1.0/address/${id}`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Select Address from All Addresses
    * Description:  <p>Select Address from all addresses associated with the account in order to ship the cart items to .that address,otherwise default address will be selected implicitly. See `SelectCartAddressRequest` in schema of request body for the list of attributes needed to select Address from account. On successful request, returns Cart object response.below are the address attributes which needs to be sent. <ul> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">billing_address_id</font></li> <li> <font color="monochrome">uid</font></li> </ul>
     body: SelectCartAddressRequest,
    **/
  selectAddress(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/cart/v1.0/select-address`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Get Cart Payment for valid coupon
    * Description:  Validate coupon for selected payment mode
     * @param { string } [uid] - 
     * @param { string } [addressId] - 
     * @param { string } [paymentMode] - 
     * @param { string } [paymentIdentifier] - 
     * @param { string } [aggregatorName] - 
     * @param { string } [merchantCode] - 
     
    **/
  getPaymentModes(
    uid,
    addressId,
    paymentMode,
    paymentIdentifier,
    aggregatorName,
    merchantCode
  ) {
    const query = {};
    query["uid"] = uid;
    query["address_id"] = addressId;
    query["payment_mode"] = paymentMode;
    query["payment_identifier"] = paymentIdentifier;
    query["aggregator_name"] = aggregatorName;
    query["merchant_code"] = merchantCode;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/cart/v1.0/payment`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Update Cart Payment
    * Description:  Update Cart Payment for Your Account
     * @param { string } [uid] - 
     body: UpdateCartPaymentRequest,
    **/
  selectPaymentMode(body, uid) {
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/cart/v1.0/payment`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Get delivery date and options before checkout
    * Description:  Shipment break up item wise with delivery date. Actual                      delivery will be during given dates only. Items will be                      delivered in group of shipments created.
     * @param { boolean } [p] - Get payment options or not
     * @param { number } [uid] - Cart id
     * @param { number } [addressId] - Address id
     
    **/
  getShipments(p, uid, addressId) {
    const query = {};
    query["p"] = p;
    query["uid"] = uid;
    query["address_id"] = addressId;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/cart/v1.0/shipment`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Checkout Cart
    * Description:  Checkout all items in cart to payment and order generation.                         For COD only order will be generated while for other checkout mode                         user will be redirected to payment gateway
     body: CartCheckoutRequest,
    **/
  checkoutCart(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/cart/v1.0/checkout`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Update Cart Meta
    * Description:  Update cart meta like checkout_mode, gstin.
     * @param { number } [uid] - Cart id received in get cart.
     body: CartMetaRequest,
    **/
  updateCartMeta(body, uid) {
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/cart/v1.0/meta`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Generate Cart sharing link token
    * Description:  Generates shared cart snapshot and returns shortlink token
     body: GetShareCartLinkRequest,
    **/
  getCartShareLink(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/cart/v1.0/share-cart`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Get shared cart snapshot and cart response
    * Description:  Returns shared cart response for sent token with `shared_cart_details`                    containing shared cart details in response.
     * @param { string } token - Shared short link token.
     
    **/
  getCartSharedItems(token = required("token")) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/cart/v1.0/share-cart/${token}`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Merge or Replace existing cart
    * Description:  Merge or Replace cart based on `action` parameter with shared cart of `token`
     * @param { string } token - Shared short link token.
     * @param { string } action - Operation to perform on existing cart, whether to merge or replace.
     
    **/
  updateCartWithSharedItems(
    token = required("token"),
    action = required("action")
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/cart/v1.0/share-cart/${token}/${action}`,
      query,
      {}
    );
  }
}

class Lead {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * Summary: Get Ticket with the specific id
    * Description:  Get Ticket with the specific id, this is used to view the ticket details
     * @param { string } id - ID of ticket to be retrieved
     
    **/
  getTicket(id = required("id")) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/lead/v1.0/ticket/${id}`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Create history for specific Ticket
    * Description:  Create history for specific Ticket, this history is seen on ticket detail page, this can be comment, log or rating.
     * @param { string } ticketId - Ticket ID for which history is created
     body: TicketHistoryPayload,
    **/
  createHistoryForTicket(ticketId = required("ticketId"), body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/lead/v1.0/ticket/${ticketId}/history`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Create Ticket
    * Description:  This is used to Create Ticket.
     body: AddTicketPayload,
    **/
  createTicket(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/lead/v1.0/ticket/`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Get specific Custom Form using it's slug
    * Description:  Get specific Custom Form using it's slug, this is used to view the form.
     * @param { string } slug - Slug of form whose response is getting submitted
     
    **/
  getCustomForm(slug = required("slug")) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/lead/v1.0/form/${slug}`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Submit Response for a specific Custom Form using it's slug
    * Description:  Submit Response for a specific Custom Form using it's slug, this response is then used to create a ticket on behalf of the user.
     * @param { string } slug - Slug of form whose response is getting submitted
     body: CustomFormSubmissionPayload,
    **/
  submitCustomForm(slug = required("slug"), body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/lead/v1.0/form/${slug}/submit`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Get participants of a specific Video Room using it's unique name
    * Description:  Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names.
     * @param { string } uniqueName - Unique name of Video Room
     
    **/
  getParticipantsInsideVideoRoom(uniqueName = required("uniqueName")) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/lead/v1.0/video/room/${uniqueName}/participants`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Get Token to join a specific Video Room using it's unqiue name
    * Description:  Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there.
     * @param { string } uniqueName - Unique name of Video Room
     
    **/
  getTokenForVideoRoom(uniqueName = required("uniqueName")) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/lead/v1.0/video/room/${uniqueName}/token`,
      query,
      {}
    );
  }
}

class Theme {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * Summary: Get applied theme for an application
    * Description:  
     
    **/
  getAppliedTheme() {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/theme/v1.0/applied-theme`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Get theme for preview
    * Description:  
     * @param { string } themeId - ID of the theme to be retrieved
     
    **/
  getThemeForPreview(themeId = required("themeId")) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/theme/v1.0/${themeId}/preview`,
      query,
      {}
    );
  }
}

class User {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * Summary: Login/Register with Facebook
    * Description:  Used to login or register with Facebook
     body: OAuthRequestSchema,
    **/
  loginWithFacebook(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/login/facebook-token`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Login/Register with Google
    * Description:  Used to login or register with Google
     body: OAuthRequestSchema,
    **/
  loginWithGoogle(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/login/google-token`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Login/Register with Google for android
    * Description:  Used to login or register with Google for android
     body: OAuthRequestSchema,
    **/
  loginWithGoogleAndroid(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/login/google-android`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Login/Register with Google for ios
    * Description:  Used to login or register with google for ios
     body: OAuthRequestSchema,
    **/
  loginWithGoogleIOS(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/login/google-ios`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Login/Register with OTP
    * Description:  Used to login or register with OTP
     * @param { string } [platform] - Platform
     body: SendOtpRequestSchema,
    **/
  loginWithOTP(body, platform) {
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/login/otp`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Login/Register with password
    * Description:  Used to login or register with email & password
     body: PasswordLoginRequestSchema,
    **/
  loginWithEmailAndPassword(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/login/password`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Reset Password
    * Description:  Used to reset account password
     * @param { string } [platform] - Platform
     body: SendResetPasswordEmailRequestSchema,
    **/
  sendResetPasswordEmail(body, platform) {
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/login/password/reset`,
      query,
      body
    );
  }

  /**
    *
    * Summary: 
    * Description:  
     body: ForgotPasswordRequestSchema,
    **/
  forgotPassword(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/userauthentication/v1.0/login/password/reset/forgot`,
      query,
      body
    );
  }

  /**
    *
    * Summary: 
    * Description:  Send code incase of reset password
     body: CodeRequestBodySchema,
    **/
  sendResetToken(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/login/password/reset/token`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Login/Register with token
    * Description:  Login/Register with token
     body: TokenRequestBodySchema,
    **/
  loginWithToken(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/login/token`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Registration Form
    * Description:  Register using form
     * @param { string } [platform] - Platform
     body: FormRegisterRequestSchema,
    **/
  registerWithForm(body, platform) {
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/register/form`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Verify email
    * Description:  Used to verify email
     body: CodeRequestBodySchema,
    **/
  verifyEmail(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/verify/email`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Verify mobile
    * Description:  Verify mobile
     body: CodeRequestBodySchema,
    **/
  verifyMobile(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/verify/mobile`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Check if user has password
    * Description:  Checks if user is using password or not
     
    **/
  hasPassword() {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/user/authentication/v1.0/has-password`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Update user password
    * Description:  Used to update user password
     body: UpdatePasswordRequestSchema,
    **/
  updatePassword(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/password`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Logout user
    * Description:  Used to log out user
     
    **/
  logout() {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/user/authentication/v1.0/logout`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Send OTP on mobile
    * Description:  Used to send otp to mobile
     * @param { string } [platform] - Platform
     body: SendMobileOtpRequestSchema,
    **/
  sendOTPOnMobile(body, platform) {
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/otp/mobile/send`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Verify OTP on mobile
    * Description:  Used to verify otp sent to mobile
     * @param { string } [platform] - Platform
     body: VerifyOtpRequestSchema,
    **/
  verifyMobileOTP(body, platform) {
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/otp/mobile/verify`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Send OTP on email
    * Description:  Used to send otp to email
     * @param { string } [platform] - Platform
     body: SendEmailOtpRequestSchema,
    **/
  sendOTPOnEmail(body, platform) {
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/otp/email/send`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Verify OTP on email
    * Description:  Used to verify otp sent to email
     * @param { string } [platform] - Platform
     body: VerifyOtpRequestSchema,
    **/
  verifyEmailOTP(body, platform) {
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/otp/email/verify`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Get logged in user
    * Description:  Used to get logged in user details
     
    **/
  getLoggedInUser() {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/user/authentication/v1.0/session`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Get list of sessions
    * Description:  Lists all active sessions
     
    **/
  getListOfActiveSessions() {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/user/authentication/v1.0/sessions`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Get platform config
    * Description:  Used to get platform config
     * @param { string } [name] - Name
     
    **/
  getPlatformConfig(name) {
    const query = {};
    query["name"] = name;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/user/platform/v1.0/config`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Edit Profile Details
    * Description:  Used to update profile
     * @param { string } [platform] - Platform
     body: EditProfileRequestSchema,
    **/
  updateProfile(body, platform) {
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/profile/v1.0/detail`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Add mobile number to profile
    * Description:  Used to add new mobile number to profile
     * @param { string } [platform] - Platform
     body: EditMobileRequestSchema,
    **/
  addMobileNumber(body, platform) {
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/user/profile/v1.0/mobile`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Delete mobile number from profile
    * Description:  Used to delete mobile number from profile
     * @param { string } [platform] - Platform
     * @param { boolean } active - Active mobile number
     * @param { boolean } primary - Primary number
     * @param { boolean } verified - Verified Number
     * @param { string } countryCode - Country code of phone number
     * @param { string } phone - Phone number
     
    **/
  deleteMobileNumber(
    active = required("active"),
    primary = required("primary"),
    verified = required("verified"),
    countryCode = required("countryCode"),
    phone = required("phone"),
    platform
  ) {
    const query = {};
    query["platform"] = platform;
    query["active"] = active;
    query["primary"] = primary;
    query["verified"] = verified;
    query["country_code"] = countryCode;
    query["phone"] = phone;

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/application/user/profile/v1.0/mobile`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Set mobile as primary
    * Description:  Used to set a mobile number as primary
     body: SendVerificationLinkMobileRequestSchema,
    **/
  setMobileNumberAsPrimary(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/profile/v1.0/mobile/primary`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Send verification link to mobile
    * Description:  Used to send verification link to a mobile number
     * @param { string } [platform] - Platform
     body: SendVerificationLinkMobileRequestSchema,
    **/
  sendVerificationLinkToMobile(body, platform) {
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/profile/v1.0/mobile/link/send`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Add email to profile
    * Description:  Used to add new email to profile
     * @param { string } [platform] - Platform
     body: EditEmailRequestSchema,
    **/
  addEmail(body, platform) {
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/user/profile/v1.0/email`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Delete email from profile
    * Description:  Used to delete email from profile
     * @param { string } [platform] - Platform
     * @param { boolean } active - Whether email id is active
     * @param { boolean } primary - Whether email id is primary email
     * @param { boolean } verified - Whether email id is verified
     * @param { string } email - Email ID to be deleted
     
    **/
  deleteEmail(
    active = required("active"),
    primary = required("primary"),
    verified = required("verified"),
    email = required("email"),
    platform
  ) {
    const query = {};
    query["platform"] = platform;
    query["active"] = active;
    query["primary"] = primary;
    query["verified"] = verified;
    query["email"] = email;

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/application/user/profile/v1.0/email`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Set email as primary
    * Description:  Used to set an email as primart
     body: EditEmailRequestSchema,
    **/
  setEmailAsPrimary(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/profile/v1.0/email/primary`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Send verification link to email
    * Description:  Used to sent verification to an email
     * @param { string } [platform] - Platform
     body: EditEmailRequestSchema,
    **/
  sendVerificationLinkToEmail(body, platform) {
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/profile/v1.0/email/link/send`,
      query,
      body
    );
  }
}

class Content {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * Summary: Get live announcements
    * Description:  Get live announcements for each or all pages with page slug of page and end date schedule.
     
    **/
  getAnnouncements() {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/announcements`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Get Blog by slug
    * Description:  Use this API to fetch a blog using `slug`
     * @param { string } slug - The `slug` of a blog. Use this parameter to retrieve a particular blog
     
    **/
  getBlog(slug = required("slug")) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/blogs/${slug}`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Get frequently asked questions
    * Description:  Get frequently asked questions list. These will be helpful for users to using website.
     
    **/
  getFaqs() {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/faqs`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Get landing page
    * Description:  Use this API to fetch a landing page
     * @param { string } xDevicePlatform - Platform
     
    **/
  getLandingPage(xDevicePlatform = required("xDevicePlatform")) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/landing-page`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Get legal information
    * Description:  Get legal information of application, which includes policy, Terms and Conditions, and FAQ information of application.
     
    **/
  getLegalInformation() {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/legal`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Get navigation
    * Description:  Use this API to fetch a navigation
     * @param { string } xDevicePlatform - Platform
     
    **/
  getNavigations(xDevicePlatform = required("xDevicePlatform")) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/navigations/`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Get Page by slug
    * Description:  Use this API to fetch a custom page using `slug`
     * @param { string } slug - The `slug` of a page. Use this parameter to retrieve a particular page
     
    **/
  getPage(slug = required("slug")) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/pages/${slug}`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Get seo of application
    * Description:  Get seo of application
     
    **/
  getSeoConfiguration() {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/seo`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Get slideshow by slug
    * Description:  Use this API to fetch a slideshow using `slug`
     * @param { string } slug - The `slug` of a slideshow. Use this parameter to retrieve a particular slideshow
     * @param { string } xDevicePlatform - Platform
     
    **/
  getSlideshow(
    slug = required("slug"),
    xDevicePlatform = required("xDevicePlatform")
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/slideshow/${slug}`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Get support information
    * Description:  Get contact details for customer support. Including emails and phone numbers
     
    **/
  getSupportInformation() {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/support`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Get Tags for application
    * Description:  
     
    **/
  getTags() {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/tags`,
      query,
      {}
    );
  }
}

class Communication {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * Summary: Get communication consent
    * Description:  Get communication consent
     
    **/
  getCommunicationConsent() {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/communication/v1.0/consent`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Upsert communication consent
    * Description:  Upsert communication consent
     body: CommunicationConsentReq,
    **/
  upsertCommunicationConsent(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/communication/v1.0/consent`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Upsert push token of a user
    * Description:  Upsert push token of a user
     body: PushtokenReq,
    **/
  upsertPushtoken(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/platform/communication/v1.0/pn-token`,
      query,
      body
    );
  }
}

class Share {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * Summary: Create application QR Code
    * Description:  Create application QR Code
     
    **/
  getApplicationQRCode() {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/share/v1.0/qr/`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Create product QR Code
    * Description:  Create product QR Code
     * @param { string } slug - The unique identifier of a product
     
    **/
  getProductQRCodeBySlug(slug = required("slug")) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/share/v1.0/qr/products/${slug}/`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Create collection QR Code
    * Description:  Create collection QR Code
     * @param { string } slug - The unique identifier of a collection
     
    **/
  getCollectionQRCodeBySlug(slug = required("slug")) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/share/v1.0/qr/collection/${slug}/`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Create url QR Code
    * Description:  Create url QR Code
     * @param { string } url - Url
     
    **/
  getUrlQRCode(url = required("url")) {
    const query = {};
    query["url"] = url;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/share/v1.0/qr/url/`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Create short link
    * Description:  Create short link
     body: ShortLinkReq,
    **/
  createShortLink(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/share/v1.0/links/short-link/`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Get short link by hash
    * Description:  Get short link by hash
     * @param { string } hash - Hash of short link
     
    **/
  getShortLinkByHash(hash = required("hash")) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/share/v1.0/links/short-link/${hash}/`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Get original link by hash
    * Description:  Get original link by hash
     * @param { string } hash - Hash of short link
     
    **/
  getOriginalShortLinkByHash(hash = required("hash")) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/share/v1.0/links/short-link/${hash}/original/`,
      query,
      {}
    );
  }
}

class FileStorage {
  constructor(_conf) {
    this._conf = _conf;
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

     * @param { string } namespace - bucket name
     * @param { number } companyId - company_id
     body: StartResponse,
    **/
  completeUpload(
    namespace = required("namespace"),
    companyId = required("companyId"),
    body
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/assets/v1.0/company/${companyId}/namespaces/${namespace}/upload/complete/`,
      query,
      body
    );
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

     * @param { string } namespace - bucket name
     * @param { number } companyId - company_id
     body: StartRequest,
    **/
  startUpload(
    namespace = required("namespace"),
    companyId = required("companyId"),
    body
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/assets/v1.0/company/${companyId}/namespaces/${namespace}/upload/start/`,
      query,
      body
    );
  }
}

class Payment {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * Summary: Get payment gateway keys
    * Description:  Get payment gateway (key, secrets, merchant, sdk/api detail) to complete payment at front-end.
     * @param { string } xApiToken - api token
     * @param { boolean } [refresh] - refresh cache
     
    **/
  getAggregatorsConfig(xApiToken = required("xApiToken"), refresh) {
    const query = {};
    query["refresh"] = refresh;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/payment/v1.0/config/aggregators/key`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Attach a saved card to customer.
    * Description:  Attach a saved card to customer at payment gateway i.e stripe and refresh card cache.
     body: AttachCardRequest,
    **/
  attachCardToCustomer(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/payment/v1.0/card/attach`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Fetch active payment gateway for card
    * Description:  Fetch active payment gateway along with customer id for cards payments.
     * @param { boolean } [refresh] - 
     
    **/
  getActiveCardAggregator(refresh) {
    const query = {};
    query["refresh"] = refresh;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/payment/v1.0/card/aggregator`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Fetch the list of saved cards of user.
    * Description:  Fetch the list of saved cards of user from active payment gateway.
     * @param { boolean } [forceRefresh] - 
     
    **/
  getActiveUserCards(forceRefresh) {
    const query = {};
    query["force_refresh"] = forceRefresh;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/payment/v1.0/cards`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Delete an user card.
    * Description:  Delete an added user card on payment gateway and remove from cache.
     body: DeletehCardRequest,
    **/
  deleteUserCard(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/payment/v1.0/card/remove`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Validate customer for payment.
    * Description:  Validate customer for payment i.e Simpl paylater, Rupifi loan.
     body: ValidateCustomerRequest,
    **/
  verifyCustomerForPayment(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/payment/v1.0/payment/customer/validation`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Verify and charge payment
    * Description:  Verify and charge payment server to server for Simpl & Mswipe.
     body: ChargeCustomerRequest,
    **/
  verifyAndChargePayment(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/payment/v1.0/payment/confirm/charge`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Payment Initialisation server to server for UPI and BharatQR.
    * Description:  Payment Initialisation for UPI & BharatQR code, UPI requests to app and QR code to be displayed on screen.
     body: PaymentInitializationRequest,
    **/
  initialisePayment(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/payment/v1.0/payment/request`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Continous polling to check status of payment on server.
    * Description:  Continous polling on interval to check status of payment untill timeout.
     body: PaymentStatusUpdateRequest,
    **/
  checkAndUpdatePaymentStatus(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/payment/v1.0/payment/confirm/polling`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Get All Valid Payment Options
    * Description:  Use this API to get Get All Valid Payment Options for making payment
     * @param { number } amount - Payment amount
     * @param { string } cartId - Cart id
     * @param { number } pincode - Pincode
     * @param { string } checkoutMode - Checkout mode
     * @param { boolean } [refresh] - 
     * @param { string } [assignCardId] - selected card id
     * @param { string } [deliveryAddress] - URIencoded json delivery address of cart for annonymous user
     
    **/
  getPaymentModeRoutes(
    amount = required("amount"),
    cartId = required("cartId"),
    pincode = required("pincode"),
    checkoutMode = required("checkoutMode"),
    refresh,
    assignCardId,
    deliveryAddress
  ) {
    const query = {};
    query["amount"] = amount;
    query["cart_id"] = cartId;
    query["pincode"] = pincode;
    query["checkout_mode"] = checkoutMode;
    query["refresh"] = refresh;
    query["assign_card_id"] = assignCardId;
    query["delivery_address"] = deliveryAddress;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/payment/v1.0/payment/options`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Get All Valid Payment Options for POS
    * Description:  Use this API to get Get All Valid Payment Options for making payment
     * @param { number } amount - Payment amount
     * @param { string } cartId - Cart id
     * @param { number } pincode - Pincode
     * @param { string } checkoutMode - Checkout mode
     * @param { boolean } [refresh] - 
     * @param { string } [assignCardId] - selected card id
     * @param { string } orderType - Order type
     * @param { string } [deliveryAddress] - URIencoded json delivery address of cart for annonymous user
     
    **/
  getPosPaymentModeRoutes(
    amount = required("amount"),
    cartId = required("cartId"),
    pincode = required("pincode"),
    checkoutMode = required("checkoutMode"),
    orderType = required("orderType"),
    refresh,
    assignCardId,
    deliveryAddress
  ) {
    const query = {};
    query["amount"] = amount;
    query["cart_id"] = cartId;
    query["pincode"] = pincode;
    query["checkout_mode"] = checkoutMode;
    query["refresh"] = refresh;
    query["assign_card_id"] = assignCardId;
    query["order_type"] = orderType;
    query["delivery_address"] = deliveryAddress;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/payment/v1.0/payment/options/pos`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: List User Beneficiary
    * Description:  Get all active  beneficiary details added by the user for refund
     * @param { string } orderId - 
     
    **/
  getUserBeneficiariesDetail(orderId = required("orderId")) {
    const query = {};
    query["order_id"] = orderId;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/payment/v1.0/refund/beneficiary/user`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Ifsc Code Verification
    * Description:  Get True/False for correct IFSC Code for adding bank details for refund
     * @param { string } [ifscCode] - 
     
    **/
  verifyIfscCode(ifscCode) {
    const query = {};
    query["ifsc_code"] = ifscCode;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/payment/v1.0/ifsc-code/verify`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: List Order Beneficiary
    * Description:  Get all active  beneficiary details added by the user for refund
     * @param { string } orderId - 
     
    **/
  getOrderBeneficiariesDetail(orderId = required("orderId")) {
    const query = {};
    query["order_id"] = orderId;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/payment/v1.0/refund/beneficiaries/order`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Save Beneficiary details on otp validation.
    * Description:  Save Beneficiary details on otp validation.
     body: AddBeneficiaryViaOtpVerificationRequest,
    **/
  verifyOtpAndAddBeneficiaryForBank(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/payment/v1.0/refund/verification/bank`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Save bank details for cancelled/returned order
    * Description:  Use this API to save bank details for returned/cancelled order to refund amount in his account.
     body: AddBeneficiaryDetailsRequest,
    **/
  addBeneficiaryDetails(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/payment/v1.0/refund/account`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Send Otp on Adding wallet beneficiary
    * Description:  Send Otp on Adding wallet beneficiary for user mobile verification
     body: WalletOtpRequest,
    **/
  verifyOtpAndAddBeneficiaryForWallet(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/payment/v1.0/refund/verification/wallet`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Mark Default Beneficiary For Refund
    * Description:  Mark Default Beneficiary ot of all Beneficiary Details for Refund
     body: SetDefaultBeneficiaryRequest,
    **/
  updateDefaultBeneficiary(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/payment/v1.0/refund/beneficiary/default`,
      query,
      body
    );
  }
}

class Order {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * Summary: Get Orders for application based on application Id
    * Description:  Get Orders
     * @param { string } [pageNo] - Current page number
     * @param { string } [pageSize] - Page limit
     * @param { string } [fromDate] - From Date
     * @param { string } [toDate] - To Date
     
    **/
  getOrders(pageNo, pageSize, fromDate, toDate) {
    const query = {};
    query["page_no"] = pageNo;
    query["page_size"] = pageSize;
    query["from_date"] = fromDate;
    query["to_date"] = toDate;

    return APIClient.execute(
      this._conf,
      "get",
      `/services/application/v1.0/orders`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Get Order by order id for application based on application Id
    * Description:  Get Order By Fynd Order Id
     * @param { string } orderId - Order Id
     
    **/
  getOrderById(orderId = required("orderId")) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/services/application/v1.0/orders/${orderId}`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Get Shipment by shipment id and order id for application based on application Id
    * Description:  Get Shipment
     * @param { string } shipmentId - Shipment Id
     
    **/
  getShipmentById(shipmentId = required("shipmentId")) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/services/application/v1.0/orders/shipments/${shipmentId}`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Get Shipment reasons by shipment id and order id for application based on application Id
    * Description:  Get Shipment Reasons
     * @param { string } shipmentId - Shipment Id
     
    **/
  getShipmentReasons(shipmentId = required("shipmentId")) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/services/application/v1.0/orders/shipments/${shipmentId}/reasons`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Update Shipment status by shipment id and order id for application based on application Id
    * Description:  Update Shipment Status
     * @param { string } shipmentId - Shipment Id
     body: ShipmentStatusUpdateBody,
    **/
  updateShipmentStatus(shipmentId = required("shipmentId"), body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/services/application/v1.0/orders/shipments/${shipmentId}/status`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Track Shipment by shipment id and order id for application based on application Id
    * Description:  Shipment Track
     * @param { string } shipmentId - Shipment Id
     
    **/
  trackShipment(shipmentId = required("shipmentId")) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/services/application/v1.0/orders/shipments/${shipmentId}/track`,
      query,
      {}
    );
  }
}

class Rewards {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * Summary: Get reward points that could be earned on any catalogue product.
    * Description:  Evaluate the amount of reward points that could be earned on any catalogue product.
     body: CatalogueOrderRequest,
    **/
  getPointsOnProduct(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/rewards/v1.0/catalogue/offer/order/`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Calculates the discount on order-amount based on amount ranges configured in order_discount reward.
    * Description:  Calculates the discount on order-amount based on amount ranges configured in order_discount reward.
     body: OrderDiscountRequest,
    **/
  getOrderDiscount(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/rewards/v1.0/user/offers/order-discount/`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Total available points of a user for current application
    * Description:  Total available points of a user for current application
     
    **/
  getUserPoints() {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/rewards/v1.0/user/points`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Get list of points transactions.
    * Description:  Get list of points transactions.
The list of points history is paginated.
     * @param { string } [pageId] - PageID is the ID of the requested page. For first request it should be kept empty.
     * @param { number } [pageSize] - PageSize is the number of requested items in response.
     
    **/
  getUserPointsHistory(pageId, pageSize) {
    const query = {};
    query["pageID"] = pageId;
    query["pageSize"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/rewards/v1.0/user/points/history/`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: User's referral details.
    * Description:  User's referral details.
     
    **/
  getUserReferralDetails() {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/rewards/v1.0/user/referral/`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Redeems referral code and credits points to users points account.
    * Description:  Redeems referral code and credits points to users points account.
     body: RedeemReferralCodeRequest,
    **/
  redeemReferralCode(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/rewards/v1.0/user/referral/redeem/`,
      query,
      body
    );
  }
}

class Feedback {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * Summary: post a new abuse request
    * Description:  Report a new abuse for specific entity with description text.
     body: ReportAbuseRequest,
    **/
  createAbuseReport(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/feedback/v1.0/abuse`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Update abuse details
    * Description:  Update the abuse details like status and description text.
     body: UpdateAbuseStatusRequest,
    **/
  updateAbuseReport(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/feedback/v1.0/abuse`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Get list of abuse data
    * Description:  Get the list of abuse data from entity type and entity ID.
     * @param { string } entityId - entity id
     * @param { string } entityType - entity type
     * @param { string } [id] - abuse id
     * @param { string } [pageId] - pagination page id
     * @param { string } [pageSize] - pagination page size
     
    **/
  getAbuseReports(
    entityId = required("entityId"),
    entityType = required("entityType"),
    id,
    pageId,
    pageSize
  ) {
    const query = {};
    query["id"] = id;
    query["page_id"] = pageId;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/feedback/v1.0/abuse/entity/${entityType}/entity-id/${entityId}`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Get list of attribute data
    * Description:  Provides a list of all attribute data.
     
    **/
  getAttributes() {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/feedback/v1.0/attributes`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Add a new attribute request
    * Description:  Add a new attribute with its name, slug and description.
     body: SaveAttributeRequest,
    **/
  createAttribute(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/feedback/v1.0/attributes`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Get single attribute data
    * Description:  Get a single attribute data from a given slug.
     * @param { string } slug - Slug of attribute
     
    **/
  getAttribute(slug = required("slug")) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/feedback/v1.0/attributes/${slug}`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Update attribute details
    * Description:  Update the attribute's name and description.
     * @param { string } slug - Slug of attribute
     body: UpdateAttributeRequest,
    **/
  updateAttribute(slug = required("slug"), body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/feedback/v1.0/attributes/${slug}`,
      query,
      body
    );
  }

  /**
    *
    * Summary: post a new comment
    * Description:  This is used to add a new comment for specific entity.
     body: CommentRequest,
    **/
  createComment(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/feedback/v1.0/comment`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Update comment status
    * Description:  Update the comment status (active/approve) or text.
     body: UpdateCommentRequest,
    **/
  updateComment(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/feedback/v1.0/comment`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Get list of comments
    * Description:  Get the list of comments from specific entity type.
     * @param { string } entityType - entity type
     * @param { string } [id] - comment id
     * @param { string } [entityId] - entity id
     * @param { string } [userId] - user id - flag/filter to get comments for user
     * @param { string } [pageId] - pagination page id
     * @param { string } [pageSize] - pagination page size
     
    **/
  getComments(
    entityType = required("entityType"),
    id,
    entityId,
    userId,
    pageId,
    pageSize
  ) {
    const query = {};
    query["id"] = id;
    query["entity_id"] = entityId;
    query["user_id"] = userId;
    query["page_id"] = pageId;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/feedback/v1.0/comment/entity/${entityType}`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Checks eligibility and cloud media config
    * Description:  Checks eligibility to rate and review and cloud media configuration
     * @param { string } entityType - entity type
     * @param { string } entityId - entity id
     
    **/
  checkEligibility(
    entityType = required("entityType"),
    entityId = required("entityId")
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/feedback/v1.0/config/entity/${entityType}/entity-id/${entityId}`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Delete Media
    * Description:  Delete Media for the given entity IDs.
     
    **/
  deleteMedia() {
    const query = {};

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/application/feedback/v1.0/media/`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Add Media
    * Description:  Add Media list for specific entity.
     body: AddMediaListRequest,
    **/
  createMedia(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/feedback/v1.0/media/`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Update Media
    * Description:  Update Media (archive/approve) for the given entity.
     body: UpdateMediaListRequest,
    **/
  updateMedia(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/feedback/v1.0/media/`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Get Media
    * Description:  Get Media from the given entity type and entity ID.
     * @param { string } entityType - entity type
     * @param { string } entityId - entity id
     * @param { string } [id] - vote id
     * @param { string } [pageId] - pagination page id
     * @param { string } [pageSize] - pagination page size
     
    **/
  getMedias(
    entityType = required("entityType"),
    entityId = required("entityId"),
    id,
    pageId,
    pageSize
  ) {
    const query = {};
    query["id"] = id;
    query["page_id"] = pageId;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/feedback/v1.0/media/entity/${entityType}/entity-id/${entityId}`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Get a review summary
    * Description:  Review summary gives ratings and attribute metrics of a review per entity
It gives following response data: review count, rating average. review metrics / attribute rating metrics which contains name, type, average and count.
     * @param { string } entityType - entity type
     * @param { string } entityId - entity id
     * @param { string } [id] - review summary identifier
     * @param { string } [pageId] - pagination page id
     * @param { string } [pageSize] - pagination page size
     
    **/
  getReviewSummaries(
    entityType = required("entityType"),
    entityId = required("entityId"),
    id,
    pageId,
    pageSize
  ) {
    const query = {};
    query["id"] = id;
    query["page_id"] = pageId;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/feedback/v1.0/rating/summary/entity/${entityType}/entity-id/${entityId}`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Add customer reviews
    * Description:  Add customer reviews for specific entity with following data:
attributes rating, entity rating, title, description, media resources and template id.
     body: UpdateReviewRequest,
    **/
  createReview(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/feedback/v1.0/review/`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Update customer reviews
    * Description:  Update customer reviews for specific entity with following data:
attributes rating, entity rating, title, description, media resources and template id.
     body: UpdateReviewRequest,
    **/
  updateReview(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/feedback/v1.0/review/`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Get list of customer reviews
    * Description:  This is used to get the list of customer reviews based on entity and provided filters.
     * @param { string } entityType - entity type
     * @param { string } entityId - entity id
     * @param { string } [id] - review id
     * @param { string } [userId] - user id
     * @param { string } [media] - media type e.g. image | video | video_file | video_link
     * @param { Array<number> } [rating] - rating filter, 1-5
     * @param { Array<string> } [attributeRating] - attribute rating filter
     * @param { boolean } [facets] - facets (true|false)
     * @param { string } [sort] - sort by : default | top | recent
     * @param { string } [pageId] - pagination page id
     * @param { string } [pageSize] - pagination page size
     
    **/
  getReviews(
    entityType = required("entityType"),
    entityId = required("entityId"),
    id,
    userId,
    media,
    rating,
    attributeRating,
    facets,
    sort,
    pageId,
    pageSize
  ) {
    const query = {};
    query["id"] = id;
    query["user_id"] = userId;
    query["media"] = media;
    query["rating"] = rating;
    query["attribute_rating"] = attributeRating;
    query["facets"] = facets;
    query["sort"] = sort;
    query["page_id"] = pageId;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/feedback/v1.0/review/entity/${entityType}/entity-id/${entityId}`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Get the templates for product or l3 type
    * Description:  This is used to get the templates details.
     * @param { string } [templateId] - template id
     * @param { string } [entityId] - entity id
     * @param { string } [entityType] - entity type e.g. product | l3
     
    **/
  getTemplates(templateId, entityId, entityType) {
    const query = {};
    query["template_id"] = templateId;
    query["entity_id"] = entityId;
    query["entity_type"] = entityType;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/feedback/v1.0/template/`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Create a new question
    * Description:  This is used to create a new question with following data:
tags, text, type, choices for MCQ type questions, maximum length of answer.
     body: CreateQNARequest,
    **/
  createQuestion(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/feedback/v1.0/template/qna/`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Update question
    * Description:  This is used to update question's status, tags and choices.
     body: UpdateQNARequest,
    **/
  updateQuestion(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/feedback/v1.0/template/qna/`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Get a list of QnA
    * Description:  This is used to get a list of questions and its answers.
     * @param { string } entityType - entity type
     * @param { string } entityId - entity id
     * @param { string } [id] - qna id
     * @param { boolean } [showAnswer] - show answer flag
     * @param { string } [pageId] - pagination page id
     * @param { string } [pageSize] - pagination page size
     
    **/
  getQuestionAndAnswers(
    entityType = required("entityType"),
    entityId = required("entityId"),
    id,
    showAnswer,
    pageId,
    pageSize
  ) {
    const query = {};
    query["id"] = id;
    query["show_answer"] = showAnswer;
    query["page_id"] = pageId;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/feedback/v1.0/template/qna/entity/${entityType}/entity-id/${entityId}`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Get list of votes
    * Description:  This is used to get the list of votes of a current logged in user. Votes can be filtered using `ref_type` i.e. review | comment.
     * @param { string } [id] - vote id
     * @param { string } [refType] - entity type e.g. review | comment
     
    **/
  getVotes(id, refType) {
    const query = {};
    query["id"] = id;
    query["ref_type"] = refType;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/feedback/v1.0/vote/`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Create a new vote
    * Description:  This is used to create a new vote and the actions can be upvote or downvote.
     body: VoteRequest,
    **/
  createVote(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/feedback/v1.0/vote/`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Update vote
    * Description:  This is used to update the vote and the actions can be upvote or downvote.
     body: UpdateVoteRequest,
    **/
  updateVote(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/feedback/v1.0/vote/`,
      query,
      body
    );
  }
}

class PosCart {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * Summary: Fetch all Items Added to  Cart
    * Description:  Get all the details of a items added to cart  by uid. If successful, returns a Cart resource in the response body specified in CartResponse
     * @param { number } [uid] - 
     * @param { number } [assignCardId] - 
     
    **/
  getCart(uid, assignCardId) {
    const query = {};
    query["uid"] = uid;
    query["assign_card_id"] = assignCardId;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/detail`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Fetch Last-Modified timestamp
    * Description:  Fetch Last-Modified timestamp in header metadata
     * @param { number } [uid] - 
     
    **/
  getCartLastModified(uid) {
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "head",
      `/service/application/pos/cart/v1.0/detail`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Add Items to Cart
    * Description:  <p>Add Items to cart. See `AddCartRequest` in schema of request body for the list of attributes needed to add items to a cart. On successful request, returns cart response containing details of items, coupons available etc.these attributes will be fetched from the folowing api's</p>
     body: AddCartRequest,
    **/
  addItems(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/pos/cart/v1.0/detail`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Update Items already added to Cart
    * Description:  Request object containing attributes like item_quantity and item_size which can be updated .these attributes will be fetched from the folowing api's</p> <ul> <li><font color="monochrome">operation</font> Operation for current api call. <b>update_item</b> for update items. <b>remove_item</b> for removing items.</li> <li> <font color="monochrome">item_id</font>  "/platform/content/v1/products/"</li> <li> <font color="monochrome">item_size</font>   "/platform/content/v1/products/{slug}/sizes/"</li> <li> <font color="monochrome">quantity</font>  item quantity (must be greater than or equal to 1)</li> <li> <font color="monochrome">article_id</font>   "/content​/v1​/products​/{identifier}​/sizes​/price​/"</li> <li> <font color="monochrome">item_index</font>  item position in the cart (must be greater than or equal to 0)</li> </ul>
     body: UpdateCartRequest,
    **/
  updateCart(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/pos/cart/v1.0/detail`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Cart item count
    * Description:  Get total count of item present in cart
     * @param { number } [uid] - Cart id
     
    **/
  getItemCount(uid) {
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/basic`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Fetch Coupon
    * Description:  Get all the details of a coupons applicable to cart  by uid. If successful, returns a Coupon resource in the response body specified in GetCouponResponse
     * @param { number } [uid] - 
     
    **/
  getCoupons(uid) {
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/coupon`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Apply Coupon
    * Description:  <p>Apply Coupons on Items added to cart. On successful request, returns cart response containing details of items ,coupons applied etc.these attributes will be consumed by  api</p> <ul> <li> <font color="monochrome">coupon_code</font></li>
</ul>
     * @param { boolean } [i] - 
     * @param { boolean } [b] - 
     * @param { boolean } [p] - 
     body: ApplyCouponRequest,
    **/
  applyCoupon(body, i, b, p) {
    const query = {};
    query["i"] = i;
    query["b"] = b;
    query["p"] = p;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/pos/cart/v1.0/coupon`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Remove Coupon Applied
    * Description:  Remove Coupon applied on the cart by passing uid in request body.
     * @param { number } [uid] - Cart id
     
    **/
  removeCoupon(uid) {
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/application/pos/cart/v1.0/coupon`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Get discount offers based on quantity
    * Description:  List applicable offers along with current, next and best offer for given product. Either one of **uid**, **item_id**, **slug** should be present*
     * @param { number } [itemId] - Item id
     * @param { string } [articleId] - Article mongo id
     * @param { number } [uid] - Item id
     * @param { string } [slug] - Item unique url from product page
     
    **/
  getBulkDiscountOffers(itemId, articleId, uid, slug) {
    const query = {};
    query["item_id"] = itemId;
    query["article_id"] = articleId;
    query["uid"] = uid;
    query["slug"] = slug;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/bulk-price`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Fetch Address
    * Description:  Get all the addresses associated with the account. If successful, returns a Address resource in the response body specified in GetAddressResponse.attibutes listed below are optional <ul> <li> <font color="monochrome">uid</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
     * @param { number } [uid] - 
     * @param { number } [mobileNo] - 
     * @param { string } [checkoutMode] - 
     * @param { number } [tags] - 
     * @param { boolean } [isDefault] - 
     
    **/
  getAddresses(uid, mobileNo, checkoutMode, tags, isDefault) {
    const query = {};
    query["uid"] = uid;
    query["mobile_no"] = mobileNo;
    query["checkout_mode"] = checkoutMode;
    query["tags"] = tags;
    query["is_default"] = isDefault;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/address`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Add Address to the account
    * Description:  <p>Add Address to account. See `SaveAddressRequest` in schema of request body for the list of attributes needed to add Address to account. On successful request, returns response containing address_id ,is_default_address and success message.
     body: SaveAddressRequest,
    **/
  addAddress(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/pos/cart/v1.0/address`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Fetch Single Address
    * Description:  Get a addresses with the given id. If successful, returns a Address resource in the response body specified in GetAddressResponse.attibutes listed below are optional <ul> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
     * @param { number } id - 
     * @param { number } [uid] - 
     * @param { number } [mobileNo] - 
     * @param { string } [checkoutMode] - 
     * @param { number } [tags] - 
     * @param { boolean } [isDefault] - 
     
    **/
  getAddressById(
    id = required("id"),
    uid,
    mobileNo,
    checkoutMode,
    tags,
    isDefault
  ) {
    const query = {};
    query["uid"] = uid;
    query["mobile_no"] = mobileNo;
    query["checkout_mode"] = checkoutMode;
    query["tags"] = tags;
    query["is_default"] = isDefault;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/address/${id}`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Update Address alreay added to account
    * Description:  Request object containing attributes mentioned in  <font color="blue">UpdateAddressRequest </font> can be updated .these attributes are :</p> <ul> <li> <font color="monochrome">is_default_address</font></li> <li> <font color="monochrome">landmark</font></li> <li> <font color="monochrome">area</font></li> <li> <font color="monochrome">pincode</font></li> <li> <font color="monochrome">email</font></li> <li> <font color="monochrome">address_type</font></li> <li> <font color="monochrome">name</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">address</font></li> </ul>
     * @param { number } id - Address id
     body: UpdateAddressRequest,
    **/
  updateAddress(id = required("id"), body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/pos/cart/v1.0/address/${id}`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Remove Address Associated to the account
    * Description:  Delete a Address by it's address_id. Returns an object that tells whether the address was deleted successfully
     * @param { number } id - Address id
     
    **/
  removeAddress(id = required("id")) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/application/pos/cart/v1.0/address/${id}`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Select Address from All Addresses
    * Description:  <p>Select Address from all addresses associated with the account in order to ship the cart items to .that address,otherwise default address will be selected implicitly. See `SelectCartAddressRequest` in schema of request body for the list of attributes needed to select Address from account. On successful request, returns Cart object response.below are the address attributes which needs to be sent. <ul> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">billing_address_id</font></li> <li> <font color="monochrome">uid</font></li> </ul>
     body: SelectCartAddressRequest,
    **/
  selectAddress(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/pos/cart/v1.0/select-address`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Get Cart Payment for valid coupon
    * Description:  Validate coupon for selected payment mode
     * @param { string } [uid] - 
     * @param { string } [addressId] - 
     * @param { string } [paymentMode] - 
     * @param { string } [paymentIdentifier] - 
     * @param { string } [aggregatorName] - 
     * @param { string } [merchantCode] - 
     
    **/
  getPaymentModes(
    uid,
    addressId,
    paymentMode,
    paymentIdentifier,
    aggregatorName,
    merchantCode
  ) {
    const query = {};
    query["uid"] = uid;
    query["address_id"] = addressId;
    query["payment_mode"] = paymentMode;
    query["payment_identifier"] = paymentIdentifier;
    query["aggregator_name"] = aggregatorName;
    query["merchant_code"] = merchantCode;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/payment`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Update Cart Payment
    * Description:  Update Cart Payment for Your Account
     * @param { string } [uid] - 
     body: UpdateCartPaymentRequest,
    **/
  selectPaymentMode(body, uid) {
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/pos/cart/v1.0/payment`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Get delivery date and options before checkout
    * Description:  Shipment break up item wise with delivery date. Actual                      delivery will be during given dates only. Items will be                      delivered in group of shipments created.
     * @param { number } [pickAtStoreUid] - 
     * @param { number } [orderingStoreId] - 
     * @param { boolean } [p] - Get payment options or not
     * @param { number } [uid] - Cart id
     * @param { number } [addressId] - Address id
     
    **/
  getShipments(pickAtStoreUid, orderingStoreId, p, uid, addressId) {
    const query = {};
    query["pick_at_store_uid"] = pickAtStoreUid;
    query["ordering_store_id"] = orderingStoreId;
    query["p"] = p;
    query["uid"] = uid;
    query["address_id"] = addressId;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/shipment`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Update shipment delivery type and quantity before checkout
    * Description:  Shipment break up item wise with delivery date. Actual                      delivery will be during given dates only. Items will be                      delivered in group of shipments created. Update the shipment                      type and quantity as per customer preference for store pick up or home delivery
     * @param { boolean } [i] - Get items or not
     * @param { boolean } [p] - Get payment options or not
     * @param { number } [uid] - Cart id
     * @param { number } [addressId] - Address id
     * @param { string } [orderType] - Order is hand over or home delivery
     body: UpdateCartShipmentRequest,
    **/
  updateShipments(body, i, p, uid, addressId, orderType) {
    const query = {};
    query["i"] = i;
    query["p"] = p;
    query["uid"] = uid;
    query["address_id"] = addressId;
    query["order_type"] = orderType;

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/pos/cart/v1.0/shipment`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Checkout Cart
    * Description:  Checkout all items in cart to payment and order generation.                        For COD only order will be generated while for other checkout mode                        user will be redirected to payment gateway
     * @param { boolean } [uid] - 
     body: CartCheckoutRequest,
    **/
  checkoutCart(body, uid) {
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/pos/cart/v1.0/checkout`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Update Cart Meta
    * Description:  Update cart meta like checkout_mode, gstin.
     * @param { number } [uid] - Cart id received in get cart.
     body: CartMetaRequest,
    **/
  updateCartMeta(body, uid) {
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/pos/cart/v1.0/meta`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Get available delivery modes for cart
    * Description:  Get available delivery modes for cart and pick up store uid list. From given pick stores list user can pick up delivery. Use this uid to show store address
     * @param { number } areaCode - 
     * @param { number } [uid] - 
     
    **/
  getAvailableDeliveryModes(areaCode = required("areaCode"), uid) {
    const query = {};
    query["area_code"] = areaCode;
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/available-delivery-mode`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Get list of stores for give uids
    * Description:  Get list of stores by providing pick up available store uids.
     * @param { number } areaCode - 
     
    **/
  getStoreAddressByUid(areaCode = required("areaCode")) {
    const query = {};
    query["area_code"] = areaCode;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/store-address`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Generate Cart sharing link token
    * Description:  Generates shared cart snapshot and returns shortlink token
     body: GetShareCartLinkRequest,
    **/
  getCartShareLink(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/pos/cart/v1.0/share-cart`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Get shared cart snapshot and cart response
    * Description:  Returns shared cart response for sent token with `shared_cart_details`                    containing shared cart details in response.
     * @param { string } token - Shared short link token.
     
    **/
  getCartSharedItems(token = required("token")) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/share-cart/${token}`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Merge or Replace existing cart
    * Description:  Merge or Replace cart based on `action` parameter with shared cart of `token`
     * @param { string } token - Shared short link token.
     * @param { string } action - Operation to perform on existing cart, whether to merge or replace.
     
    **/
  updateCartWithSharedItems(
    token = required("token"),
    action = required("action")
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/pos/cart/v1.0/share-cart/${token}/${action}`,
      query,
      {}
    );
  }
}

module.exports = {
  Catalog,
  Cart,
  Lead,
  Theme,
  User,
  Content,
  Communication,
  Share,
  FileStorage,
  Payment,
  Order,
  Rewards,
  Feedback,
  PosCart,
};
