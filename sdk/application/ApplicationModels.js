const APIClient = require("./APIClient");

class Catalog {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * @summary:  Get a product
    * @description:  Products are the core resource of an application. Products can be associated by categories, collections, brands and more. This API retrieves the product specified by the given **slug**. If successful, returns a Product resource in the response body specified in `ProductDetail`
    * @param  {string} slug - The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/**
    
    **/
  getProductDetailBySlug(slug) {
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
    * @summary:  Get the sizes of a product
    * @description:  A product can exist in multiple sizes. Use this API to fetch all the available sizes of a product. If successful, returns a ProductSize object in the response body as specified in `ProductSizes`
    * @param  {string} slug - The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/**
    * @param  {string} [storeId] - The store id of the product whose sizes need to be retrieved
    
    **/
  getProductSizesBySlug(slug, storeId) {
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
    * @summary:  Get price a product size
    * @description:  Any available product can exist in multiple sizes. Sometimes prices may vary among different sizes of the same product. Use this API to retrieve the price of the product of a particular size with the location details it is available in.
    * @param  {string} slug - The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/**
    * @param  {string} size - The size of the product for which the price needs to be retrieved. You can get the available sizes of a product from **v1.0/products/{slug}/sizes/**
    * @param  {number} [pincode] - The pincode of the product for which the price needs to be retrieved.
    * @param  {string} [storeId] - The store of the product whose size level price need to be retrieved
    
    **/
  getProductPriceBySlug(slug, size, pincode, storeId) {
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
    * @summary:  List sellers of a product
    * @description:  A product of a particular size can be sold by multiple sellers. Use this API to fetch the sellers who are selling this product and have the stock of a particular size
    * @param  {string} slug - The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/**
    * @param  {string} size - The size of the product for which the price needs to be retrieved. You can get the available sizes of a product from **v1.0.0/products/sizes**
    * @param  {number} [pincode] - The pincode of the product for which the price needs to be retrieved.
    * @param  {number} [pageNo] - The page number to navigate through the given set of results.
    * @param  {number} [pageSize] - Number of items to retrieve in each page. Default is 12.
    
    **/
  getProductSellersBySlug(slug, size, pincode, pageNo, pageSize) {
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
    * @summary:  Compare products
    * @description:  Compare between the features of the given set of products Use this API to compare how one product ranks against other products. Note that at least one slug is mandatory in request query.
    * @param  {string} slug - The unique identifier `slug` of a products. You can retrieve this from the APIs that list products like **v1.0/products/**
    
    **/
  getProductComparisonBySlugs(slug) {
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
    * @summary:  Get comparison between similar products
    * @description:  Compare between the features of the given set of products Use this API to compare how one product ranks against other products
    * @param  {string} slug - The unique identifier `slug` of a product. You can retrieve this from the APIs that list products like **v1.0/products/**
    
    **/
  getSimilarComparisonProductBySlug(slug) {
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
    * @summary:  Get comparison between frequently compared products with the given product
    * @description:  Compare between the features of the give product with frequently compared products Use this API to compare how one product ranks against other products
    * @param  {string} slug - The unique identifier `slug` of a product. You can retrieve this from the APIs that list products like **v1.0/products/**
    
    **/
  getComparedFrequentlyProductBySlug(slug) {
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
    * @summary:  Get similar products
    * @description:  Get products similar to the one specified by the `identifier`. If successful, it returns a group of similar products based on type as described in `SimilarProductByTypeResponse`
    * @param  {string} slug - The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/**
    * @param  {string} similarType - The tag_identifier is used to fetch the particular type of similar product such as basic, visual, price, seller, category and spec.
    
    **/
  getProductSimilarByIdentifier(slug, similarType) {
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
    * @summary:  Get variant of a particular product
    * @description:  A product can have a different type of variants varies from color to shade etc. Use this API to fetch all the available variants of a product. If successful, returns a Products for different variants type in the response body as specified in `ProductVariantResponse`
    * @param  {string} slug - The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/**
    
    **/
  getProductVariantsBySlug(slug) {
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
    * @summary:  Get the stock of a product
    * @description:  Retrieve the available stock of the products. You can use this API to retrieve stock of multiple products at a time. Only 50 product IDs can be given in a single API request
    * @param  {string} [itemId] - Product id to get product stock (Max. 50 allowed)
    * @param  {string} [alu] - Product identifier alu to get product stock (Max. 50 allowed)
    * @param  {string} [skuCode] - Product identifier sku_code to get product stock (Max. 50 allowed)
    * @param  {string} [ean] - Product identifier ean to get product stock (Max. 50 allowed)
    * @param  {string} [upc] - Product identifier upc to get product stock (Max. 50 allowed)
    
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
    * @summary:  Get the stock of a product
    * @description:  Retrieve the available stock of the products. You can use this api to get stock status of products whose inventory is updated in given time
    * @param  {string} timestamp - timestamp in UTC format (2020-07-23T10:27:50Z)
    * @param  {number} [pageSize] - Limit of number of items for stock status default 12
    * @param  {string} [pageId] - will give next page results
    
    **/
  getProductStockForTimeByIds(timestamp, pageSize, pageId) {
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
    * @summary:  List all the brands
    * @description:  A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`
    * @param  {string} [department] - The name of the department. Use this parameter to filter products by a particular department. See below the list of available departments. You can retrieve available departments from the **v1.0/departments/** API
    * @param  {number} [pageNo] - The page number to navigate through the given set of results
    * @param  {number} [pageSize] - Number of items to retrieve in each page. Default is 12.
    
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
    * @summary:  Get metadata of a brand
    * @description:  Fetch metadata of a brand. If successful, returns a metadata object specified in `BrandDetailResponse`
    * @param  {string} slug - The unique identifier of a brand. i.e; `slug` of a brand. You can retrieve these from the APIs that list brands like **v1.0/brands/**
    
    **/
  getBrandDetailBySlug(slug) {
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
    * @summary:  List all the categories
    * @description:  List all the categories. You can optionally pass filter the brands by the department. If successful, returns a paginated list of brands specified in `CategoryListingResponse`
    * @param  {string} [department] - The name of the department. Use this parameter to filter products by a particular department. See below the list of available departments. You can retrieve available departments from the **v1.0/departments/** API
    
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
    * @summary:  Get metadata of a category
    * @description:  Fetch metadata of a category. If successful, returns a metadata object specified in `CategoryMetaResponse`
    * @param  {string} slug - The unique identifier of a category. i.e; `slug` of a category. You can retrieve these from the APIs that list categories like **v1.0/categories/**
    
    **/
  getCategoryDetailBySlug(slug) {
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
    * @summary:  List the products
    * @description:  List all the products associated with a brand, collection or category in a random order. If successful, returns a paginated list of products specified in `HomeListingResponse`
    * @param  {string} [sortOn] - Each response will contain **sort_on** param, which should be sent back to make pagination work.
    * @param  {string} [pageId] - Each response will contain **page_id** param, which should be sent back to make pagination work.
    * @param  {number} [pageSize] - Number of items to retrieve in each page. Default is 12.
    
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
    * @summary:  List all the departments
    * @description:  Departments are a way to categorise similar products. A product can lie in multiple departments. For example, a skirt can below to the 'Women's Fashion' Department while a handbag can lie in 'Women's Accessories' Department. Use this API to list all the departments. If successful, returns the list of departments specified in `DepartmentResponse`
    
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
    * @summary:  Get relevant suggestions for a search query
    * @description:  Retrieves a list of suggestions for a given search query. Each suggestion is a valid search term that's generated on the basis of what is given in query. This is particularly useful to enhance the user experience in search. The given search query can be a partial name of any product, brand and category. For example, if the given search query `q` is _ski_ the relevant search suggestions returned might be a list containing _skirt_, _ski shoes_, __skin cream_ etc.
    * @param  {string} q - The search query. This can be a partial or complete name of a either a product, brand or category
    
    **/
  getSearchResults(q) {
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
    * @summary:  List all the collections
    * @description:  A Collection allows you to organize your products into hierarchical groups. For example, a dress might be in the category _Clothing_, the individual product might also be in the collection _Summer_. On successful request, returns all the collections`
    * @param  {string} [pageId] - Each response will contain **page_id** param, which should be sent back to make pagination work.
    * @param  {number} [pageSize] - Number of items to retrieve in each page. Default is 12.
    
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
    * @summary:  Get the items in a collection
    * @description:  Get items in a collection specified by its `slug`.
    * @param  {string} slug - A `slug` is a human readable, URL friendly unique identifier of an object. Pass the `slug` of the collection for which you want to fetch the items
    * @param  {string} [f] - The search filter parameters. All the parameter filtered from filter parameters will be passed in **f** parameter in this format. **?f=brand:voi-jeans||and:::l3_categories:t-shirts||shirts**
    * @param  {boolean} [filters] - Pass `filters` parameter to fetch the filter details. This flag is used to fetch all filters
    * @param  {string} [sortOn] - The order to sort the list of products on. The supported sort parameters are popularity, price, redemption and discount in either ascending or descending order. See the supported values below.
    * @param  {string} [pageId] - Each response will contain **page_id** param, which should be sent back to make pagination work.
    * @param  {number} [pageSize] - Number of items to retrieve in each page. Default is 12.
    
    **/
  getCollectionItemsBySlug(slug, f, filters, sortOn, pageId, pageSize) {
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
    * @summary:  Get a particular collection
    * @description:  Get the details of a collection by its `slug`. If successful, returns a Collection resource in the response body specified in `CollectionDetailResponse`
    * @param  {string} slug - A `slug` is a human readable, URL friendly unique identifier of an object. Pass the `slug` of the collection which you want to retrieve.
    
    **/
  getCollectionDetailBySlug(slug) {
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
    * @summary:  Get a list of followed Products, Brands, Collections
    * @description:  A User can follow a Product they like. This API retrieves the products the user have followed. If successful, returns a Followed resource in the response body specified in `GetFollowResponseSchema`
    * @param  {string} collectionType - Type of collection followed. i. e. products, brands, collections
    
    **/
  getFollowedListing(collectionType) {
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
    * @summary:  UnFollow a Product
    * @description:  You can undo a followed Product or Brand by its id, we refer this action as _unfollow_. Pass the uid of the product in request URL
    * @param  {string} collectionType - Type of collection followed. i. e. products, brands, collections
    * @param  {number} collectionId - the `id` of the collection type you want to unfollow
    
    **/
  unfollowById(collectionType, collectionId) {
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
    * @summary:  Follow a particular Product
    * @description:  Follow a particular Product specified by its uid. Pass the uid of the product in request URL
    * @param  {string} collectionType - Type of collection followed. i. e. products, brands, collections
    * @param  {number} collectionId - the `id` of the collection type you want to follow
    
    **/
  followById(collectionType, collectionId) {
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
    * @summary:  Get Follow Count
    * @description:  Get count of followers for given collection type and collection id.
    * @param  {string} collectionType - the `type` of the collection products/brands/collections.
    * @param  {string} collectionId - the `id` of the product/brand/collection.
    
    **/
  getFollowerCountById(collectionType, collectionId) {
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
    * @summary:  Get the Ids of followed product, brand and collection.
    * @description:  You can get the ids of all the followed Product, Brand and Collections. Pass collection_type as query parameter to fetch specific Ids
    * @param  {string} [collectionType] - Type of collection followed. i. e. products, brands, collections
    
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
    * @summary:  List store meta information.
    * @description:  Use this API to get list of stores for specific application. If successful, returns list of stores specified in `StoreListingResponse`
    * @param  {number} [pageNo] - Each response will contain **page_no** param, which should be sent back to make pagination work.
    * @param  {number} [pageSize] - Number of items to retrieve in each page.
    * @param  {string} [q] - This can be used to search a particulr store by its name or store_code.
    * @param  {number} [range] - This can be used to retrieve store within a particular range. For eg range=10000 (in meters)
    * @param  {number} [latitude] - This should be the latitude of the location from which one needs to retreive the nearest stores.
    * @param  {number} [longitude] - This should be the longitude of the location from which one needs to retreive the nearest stores.
    
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
    * @summary:  Fetch all Items Added to  Cart
    * @description:  Get all the details of a items added to cart  by uid. If successful, returns a Cart resource in the response body specified in CartResponse
    * @param  {number} [uid] - 
    * @param  {number} [assignCardId] - 
    
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
    * @summary:  Fetch Last-Modified timestamp
    * @description:  Fetch Last-Modified timestamp in header metadata
    * @param  {number} [uid] - 
    
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
   * @summary:  Add Items to Cart
   * @description:  <p>Add Items to cart. See `AddCartRequest` in schema of request body for the list of attributes needed to add items to a cart. On successful request, returns cart response containing details of items, coupons available etc.these attributes will be fetched from the folowing api's</p>
   * @param  {AddCartRequest} body
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
   * @summary:  Update Items already added to Cart
   * @description:  Request object containing attributes like item_quantity and item_size which can be updated .these attributes will be fetched from the folowing api's</p> <ul> <li><font color="monochrome">operation</font> Operation for current api call. <b>update_item</b> for update items. <b>remove_item</b> for removing items.</li> <li> <font color="monochrome">item_id</font>  "/platform/content/v1/products/"</li> <li> <font color="monochrome">item_size</font>   "/platform/content/v1/products/{slug}/sizes/"</li> <li> <font color="monochrome">quantity</font>  item quantity (must be greater than or equal to 1)</li> <li> <font color="monochrome">article_id</font>   "/content​/v1​/products​/{identifier}​/sizes​/price​/"</li> <li> <font color="monochrome">item_index</font>  item position in the cart (must be greater than or equal to 0)</li> </ul>
   * @param  {UpdateCartRequest} body
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
    * @summary:  Cart item count
    * @description:  Get total count of item present in cart
    * @param  {number} [uid] - Cart id
    
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
    * @summary:  Fetch Coupon
    * @description:  Get all the details of a coupons applicable to cart  by uid. If successful, returns a Coupon resource in the response body specified in GetCouponResponse
    * @param  {number} [uid] - 
    
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
    * @summary:  Apply Coupon
    * @description:  <p>Apply Coupons on Items added to cart. On successful request, returns cart response containing details of items ,coupons applied etc.these attributes will be consumed by  api</p> <ul> <li> <font color="monochrome">coupon_code</font></li>
</ul>
    * @param  {boolean} [i] - 
    * @param  {boolean} [b] - 
    * @param  {boolean} [p] - 
    * @param  {ApplyCouponRequest} body
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
    * @summary:  Remove Coupon Applied
    * @description:  Remove Coupon applied on the cart by passing uid in request body.
    * @param  {number} [uid] - Cart id
    
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
    * @summary:  Get discount offers based on quantity
    * @description:  List applicable offers along with current, next and best offer for given product. Either one of **uid**, **item_id**, **slug** should be present*
    * @param  {number} [itemId] - Item id
    * @param  {string} [articleId] - Article mongo id
    * @param  {number} [uid] - Item id
    * @param  {string} [slug] - Item unique url from product page
    
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
    * @summary:  Fetch Address
    * @description:  Get all the addresses associated with the account. If successful, returns a Address resource in the response body specified in GetAddressResponse.attibutes listed below are optional <ul> <li> <font color="monochrome">uid</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
    * @param  {number} [uid] - 
    * @param  {number} [mobileNo] - 
    * @param  {string} [checkoutMode] - 
    * @param  {number} [tags] - 
    * @param  {boolean} [isDefault] - 
    
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
   * @summary:  Add Address to the account
   * @description:  <p>Add Address to account. See `SaveAddressRequest` in schema of request body for the list of attributes needed to add Address to account. On successful request, returns response containing address_id ,is_default_address and success message.
   * @param  {SaveAddressRequest} body
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
    * @summary:  Fetch Single Address
    * @description:  Get a addresses with the given id. If successful, returns a Address resource in the response body specified in GetAddressResponse.attibutes listed below are optional <ul> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
    * @param  {number} id - 
    * @param  {number} [uid] - 
    * @param  {number} [mobileNo] - 
    * @param  {string} [checkoutMode] - 
    * @param  {number} [tags] - 
    * @param  {boolean} [isDefault] - 
    
    **/
  getAddressById(id, uid, mobileNo, checkoutMode, tags, isDefault) {
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
   * @summary:  Update Address alreay added to account
   * @description:  Request object containing attributes mentioned in  <font color="blue">UpdateAddressRequest </font> can be updated .these attributes are :</p> <ul> <li> <font color="monochrome">is_default_address</font></li> <li> <font color="monochrome">landmark</font></li> <li> <font color="monochrome">area</font></li> <li> <font color="monochrome">pincode</font></li> <li> <font color="monochrome">email</font></li> <li> <font color="monochrome">address_type</font></li> <li> <font color="monochrome">name</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">address</font></li> </ul>
   * @param  {number} id - Address id
   * @param  {UpdateAddressRequest} body
   **/
  updateAddress(id, body) {
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
    * @summary:  Remove Address Associated to the account
    * @description:  Delete a Address by it's address_id. Returns an object that tells whether the address was deleted successfully
    * @param  {number} id - Address id
    
    **/
  removeAddress(id) {
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
   * @summary:  Select Address from All Addresses
   * @description:  <p>Select Address from all addresses associated with the account in order to ship the cart items to .that address,otherwise default address will be selected implicitly. See `SelectCartAddressRequest` in schema of request body for the list of attributes needed to select Address from account. On successful request, returns Cart object response.below are the address attributes which needs to be sent. <ul> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">billing_address_id</font></li> <li> <font color="monochrome">uid</font></li> </ul>
   * @param  {SelectCartAddressRequest} body
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
    * @summary:  Get Cart Payment for valid coupon
    * @description:  Validate coupon for selected payment mode
    * @param  {string} [uid] - 
    * @param  {string} [addressId] - 
    * @param  {string} [paymentMode] - 
    * @param  {string} [paymentIdentifier] - 
    * @param  {string} [aggregatorName] - 
    * @param  {string} [merchantCode] - 
    
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
   * @summary:  Update Cart Payment
   * @description:  Update Cart Payment for Your Account
   * @param  {string} [uid] -
   * @param  {UpdateCartPaymentRequest} body
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
    * @summary:  Get delivery date and options before checkout
    * @description:  Shipment break up item wise with delivery date. Actual                      delivery will be during given dates only. Items will be                      delivered in group of shipments created.
    * @param  {boolean} [p] - Get payment options or not
    * @param  {number} [uid] - Cart id
    * @param  {number} [addressId] - Address id
    
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
   * @summary:  Checkout Cart
   * @description:  Checkout all items in cart to payment and order generation.                         For COD only order will be generated while for other checkout mode                         user will be redirected to payment gateway
   * @param  {CartCheckoutRequest} body
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
   * @summary:  Update Cart Meta
   * @description:  Update cart meta like checkout_mode, gstin.
   * @param  {number} [uid] - Cart id received in get cart.
   * @param  {CartMetaRequest} body
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
   * @summary:  Generate Cart sharing link token
   * @description:  Generates shared cart snapshot and returns shortlink token
   * @param  {GetShareCartLinkRequest} body
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
    * @summary:  Get shared cart snapshot and cart response
    * @description:  Returns shared cart response for sent token with `shared_cart_details`                    containing shared cart details in response.
    * @param  {string} token - Shared short link token.
    
    **/
  getCartSharedItems(token) {
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
    * @summary:  Merge or Replace existing cart
    * @description:  Merge or Replace cart based on `action` parameter with shared cart of `token`
    * @param  {string} token - Shared short link token.
    * @param  {string} action - Operation to perform on existing cart, whether to merge or replace.
    
    **/
  updateCartWithSharedItems(token, action) {
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
    * @summary:  Get Ticket with the specific id
    * @description:  Get Ticket with the specific id, this is used to view the ticket details
    * @param  {string} id - ID of ticket to be retrieved
    
    **/
  getTicket(id) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `service/application/lead/v1.0/ticket/${id}`,
      query,
      {}
    );
  }

  /**
   *
   * @summary:  Create history for specific Ticket
   * @description:  Create history for specific Ticket, this history is seen on ticket detail page, this can be comment, log or rating.
   * @param  {string} ticketId - Ticket ID for which history is created
   * @param  {TicketHistoryPayload} body
   **/
  createHistoryForTicket(ticketId, body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `service/application/lead/v1.0/ticket/${ticketId}/history`,
      query,
      body
    );
  }

  /**
   *
   * @summary:  Create Ticket
   * @description:  This is used to Create Ticket.
   * @param  {AddTicketPayload} body
   **/
  createTicket(body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `service/application/lead/v1.0/ticket/`,
      query,
      body
    );
  }

  /**
    *
    * @summary:  Get specific Custom Form using it's slug
    * @description:  Get specific Custom Form using it's slug, this is used to view the form.
    * @param  {string} slug - Slug of form whose response is getting submitted
    
    **/
  getCustomForm(slug) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `service/application/lead/v1.0/form/${slug}`,
      query,
      {}
    );
  }

  /**
   *
   * @summary:  Submit Response for a specific Custom Form using it's slug
   * @description:  Submit Response for a specific Custom Form using it's slug, this response is then used to create a ticket on behalf of the user.
   * @param  {string} slug - Slug of form whose response is getting submitted
   * @param  {CustomFormSubmissionPayload} body
   **/
  submitCustomForm(slug, body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `service/application/lead/v1.0/form/${slug}/submit`,
      query,
      body
    );
  }

  /**
    *
    * @summary:  Get participants of a specific Video Room using it's unique name
    * @description:  Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names.
    * @param  {string} uniqueName - Unique name of Video Room
    
    **/
  getParticipantsInsideVideoRoom(uniqueName) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `service/application/lead/v1.0/video/room/${uniqueName}/participants`,
      query,
      {}
    );
  }

  /**
    *
    * @summary:  Get Token to join a specific Video Room using it's unqiue name
    * @description:  Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there.
    * @param  {string} uniqueName - Unique name of Video Room
    
    **/
  getTokenForVideoRoom(uniqueName) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `service/application/lead/v1.0/video/room/${uniqueName}/token`,
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
    * @summary:  Get applied theme for an application
    * @description:  
    
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
    * @summary:  Get theme for preview
    * @description:  
    * @param  {string} themeId - ID of the theme to be retrieved
    
    **/
  getThemeForPreview(themeId) {
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
   * @summary:  Login/Register with Facebook
   * @description:  Used to login or register with Facebook
   * @param  {OAuthRequestSchema} body
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
   * @summary:  Login/Register with Google
   * @description:  Used to login or register with Google
   * @param  {OAuthRequestSchema} body
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
   * @summary:  Login/Register with Google for android
   * @description:  Used to login or register with Google for android
   * @param  {OAuthRequestSchema} body
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
   * @summary:  Login/Register with Google for ios
   * @description:  Used to login or register with google for ios
   * @param  {OAuthRequestSchema} body
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
   * @summary:  Login/Register with OTP
   * @description:  Used to login or register with OTP
   * @param  {string} [platform] - Platform
   * @param  {SendOtpRequestSchema} body
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
   * @summary:  Login/Register with password
   * @description:  Used to login or register with email & password
   * @param  {PasswordLoginRequestSchema} body
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
   * @summary:  Reset Password
   * @description:  Used to reset account password
   * @param  {string} [platform] - Platform
   * @param  {SendResetPasswordEmailRequestSchema} body
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
   * @summary:
   * @description:
   * @param  {ForgotPasswordRequestSchema} body
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
   * @summary:
   * @description:  Send code incase of reset password
   * @param  {CodeRequestBodySchema} body
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
   * @summary:  Login/Register with token
   * @description:  Login/Register with token
   * @param  {TokenRequestBodySchema} body
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
   * @summary:  Registration Form
   * @description:  Register using form
   * @param  {string} [platform] - Platform
   * @param  {FormRegisterRequestSchema} body
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
   * @summary:  Verify email
   * @description:  Used to verify email
   * @param  {CodeRequestBodySchema} body
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
   * @summary:  Verify mobile
   * @description:  Verify mobile
   * @param  {CodeRequestBodySchema} body
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
    * @summary:  Check if user has password
    * @description:  Checks if user is using password or not
    
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
   * @summary:  Update user password
   * @description:  Used to update user password
   * @param  {UpdatePasswordRequestSchema} body
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
    * @summary:  Logout user
    * @description:  Used to log out user
    
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
   * @summary:  Send OTP on mobile
   * @description:  Used to send otp to mobile
   * @param  {string} [platform] - Platform
   * @param  {SendMobileOtpRequestSchema} body
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
   * @summary:  Verify OTP on mobile
   * @description:  Used to verify otp sent to mobile
   * @param  {string} [platform] - Platform
   * @param  {VerifyOtpRequestSchema} body
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
   * @summary:  Send OTP on email
   * @description:  Used to send otp to email
   * @param  {string} [platform] - Platform
   * @param  {SendEmailOtpRequestSchema} body
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
   * @summary:  Verify OTP on email
   * @description:  Used to verify otp sent to email
   * @param  {string} [platform] - Platform
   * @param  {VerifyOtpRequestSchema} body
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
    * @summary:  Get logged in user
    * @description:  Used to get logged in user details
    
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
    * @summary:  Get list of sessions
    * @description:  Lists all active sessions
    
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
    * @summary:  Get platform config
    * @description:  Used to get platform config
    * @param  {string} [name] - Name
    
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
   * @summary:  Edit Profile Details
   * @description:  Used to update profile
   * @param  {string} [platform] - Platform
   * @param  {EditProfileRequestSchema} body
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
   * @summary:  Add mobile number to profile
   * @description:  Used to add new mobile number to profile
   * @param  {string} [platform] - Platform
   * @param  {EditMobileRequestSchema} body
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
    * @summary:  Delete mobile number from profile
    * @description:  Used to delete mobile number from profile
    * @param  {string} [platform] - Platform
    * @param  {boolean} active - Active mobile number
    * @param  {boolean} primary - Primary number
    * @param  {boolean} verified - Verified Number
    * @param  {string} countryCode - Country code of phone number
    * @param  {string} phone - Phone number
    
    **/
  deleteMobileNumber(active, primary, verified, countryCode, phone, platform) {
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
   * @summary:  Set mobile as primary
   * @description:  Used to set a mobile number as primary
   * @param  {SendVerificationLinkMobileRequestSchema} body
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
   * @summary:  Send verification link to mobile
   * @description:  Used to send verification link to a mobile number
   * @param  {string} [platform] - Platform
   * @param  {SendVerificationLinkMobileRequestSchema} body
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
   * @summary:  Add email to profile
   * @description:  Used to add new email to profile
   * @param  {string} [platform] - Platform
   * @param  {EditEmailRequestSchema} body
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
    * @summary:  Delete email from profile
    * @description:  Used to delete email from profile
    * @param  {string} [platform] - Platform
    * @param  {boolean} active - Whether email id is active
    * @param  {boolean} primary - Whether email id is primary email
    * @param  {boolean} verified - Whether email id is verified
    * @param  {string} email - Email ID to be deleted
    
    **/
  deleteEmail(active, primary, verified, email, platform) {
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
   * @summary:  Set email as primary
   * @description:  Used to set an email as primart
   * @param  {EditEmailRequestSchema} body
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
   * @summary:  Send verification link to email
   * @description:  Used to sent verification to an email
   * @param  {string} [platform] - Platform
   * @param  {EditEmailRequestSchema} body
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
    * @summary:  Get live announcements
    * @description:  Get live announcements for each or all pages with page slug of page and end date schedule.
    
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
    * @summary:  Get Blog by slug
    * @description:  Use this API to fetch a blog using `slug`
    * @param  {string} slug - The `slug` of a blog. Use this parameter to retrieve a particular blog
    
    **/
  getBlog(slug) {
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
    * @summary:  Get frequently asked questions
    * @description:  Get frequently asked questions list. These will be helpful for users to using website.
    
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
    * @summary:  Get landing page
    * @description:  Use this API to fetch a landing page
    * @param  {string} xDevicePlatform - Platform
    
    **/
  getLandingPage(xDevicePlatform) {
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
    * @summary:  Get legal information
    * @description:  Get legal information of application, which includes policy, Terms and Conditions, and FAQ information of application.
    
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
    * @summary:  Get navigation
    * @description:  Use this API to fetch a navigation
    * @param  {string} xDevicePlatform - Platform
    
    **/
  getNavigations(xDevicePlatform) {
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
    * @summary:  Get Page by slug
    * @description:  Use this API to fetch a custom page using `slug`
    * @param  {string} slug - The `slug` of a page. Use this parameter to retrieve a particular page
    
    **/
  getPage(slug) {
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
    * @summary:  Get seo of application
    * @description:  Get seo of application
    
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
    * @summary:  Get slideshow by slug
    * @description:  Use this API to fetch a slideshow using `slug`
    * @param  {string} slug - The `slug` of a slideshow. Use this parameter to retrieve a particular slideshow
    * @param  {string} xDevicePlatform - Platform
    
    **/
  getSlideshow(slug, xDevicePlatform) {
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
    * @summary:  Get support information
    * @description:  Get contact details for customer support. Including emails and phone numbers
    
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
    * @summary:  Get Tags for application
    * @description:  
    
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
    * @summary:  Get communication consent
    * @description:  Get communication consent
    
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
   * @summary:  Upsert communication consent
   * @description:  Upsert communication consent
   * @param  {CommunicationConsentReq} body
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
   * @summary:  Upsert push token of a user
   * @description:  Upsert push token of a user
   * @param  {PushtokenReq} body
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
    * @summary:  Create application QR Code
    * @description:  Create application QR Code
    
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
    * @summary:  Create product QR Code
    * @description:  Create product QR Code
    * @param  {string} slug - The unique identifier of a product
    
    **/
  getProductQRCodeBySlug(slug) {
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
    * @summary:  Create collection QR Code
    * @description:  Create collection QR Code
    * @param  {string} slug - The unique identifier of a collection
    
    **/
  getCollectionQRCodeBySlug(slug) {
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
    * @summary:  Create url QR Code
    * @description:  Create url QR Code
    * @param  {string} url - Url
    
    **/
  getUrlQRCode(url) {
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
   * @summary:  Create short link
   * @description:  Create short link
   * @param  {ShortLinkReq} body
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
    * @summary:  Get short link by hash
    * @description:  Get short link by hash
    * @param  {string} hash - Hash of short link
    
    **/
  getShortLinkByHash(hash) {
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
    * @summary:  Get original link by hash
    * @description:  Get original link by hash
    * @param  {string} hash - Hash of short link
    
    **/
  getOriginalShortLinkByHash(hash) {
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
  completeUpload(namespace, companyId, body) {
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
  startUpload(namespace, companyId, body) {
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
    * @summary:  Get payment gateway keys
    * @description:  Get payment gateway (key, secrets, merchant, sdk/api detail) to complete payment at front-end.
    * @param  {string} xApiToken - api token
    * @param  {boolean} [refresh] - refresh cache
    
    **/
  getAggregatorsConfig(xApiToken, refresh) {
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
   * @summary:  Attach a saved card to customer.
   * @description:  Attach a saved card to customer at payment gateway i.e stripe and refresh card cache.
   * @param  {AttachCardRequest} body
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
    * @summary:  Fetch active payment gateway for card
    * @description:  Fetch active payment gateway along with customer id for cards payments.
    * @param  {boolean} [refresh] - 
    
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
    * @summary:  Fetch the list of saved cards of user.
    * @description:  Fetch the list of saved cards of user from active payment gateway.
    * @param  {boolean} [forceRefresh] - 
    
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
   * @summary:  Delete an user card.
   * @description:  Delete an added user card on payment gateway and remove from cache.
   * @param  {DeletehCardRequest} body
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
   * @summary:  Validate customer for payment.
   * @description:  Validate customer for payment i.e Simpl paylater, Rupifi loan.
   * @param  {ValidateCustomerRequest} body
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
   * @summary:  Verify and charge payment
   * @description:  Verify and charge payment server to server for Simpl & Mswipe.
   * @param  {ChargeCustomerRequest} body
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
   * @summary:  Payment Initialisation server to server for UPI and BharatQR.
   * @description:  Payment Initialisation for UPI & BharatQR code, UPI requests to app and QR code to be displayed on screen.
   * @param  {PaymentInitializationRequest} body
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
   * @summary:  Continous polling to check status of payment on server.
   * @description:  Continous polling on interval to check status of payment untill timeout.
   * @param  {PaymentStatusUpdateRequest} body
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
  getPaymentModeRoutes(
    amount,
    cartId,
    pincode,
    checkoutMode,
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
  getPosPaymentModeRoutes(
    amount,
    cartId,
    pincode,
    checkoutMode,
    orderType,
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
    * @summary:  List User Beneficiary
    * @description:  Get all active  beneficiary details added by the user for refund
    * @param  {string} orderId - 
    
    **/
  getUserBeneficiariesDetail(orderId) {
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
    * @summary:  Ifsc Code Verification
    * @description:  Get True/False for correct IFSC Code for adding bank details for refund
    * @param  {string} [ifscCode] - 
    
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
    * @summary:  List Order Beneficiary
    * @description:  Get all active  beneficiary details added by the user for refund
    * @param  {string} orderId - 
    
    **/
  getOrderBeneficiariesDetail(orderId) {
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
   * @summary:  Save Beneficiary details on otp validation.
   * @description:  Save Beneficiary details on otp validation.
   * @param  {AddBeneficiaryViaOtpVerificationRequest} body
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
   * @summary:  Save bank details for cancelled/returned order
   * @description:  Use this API to save bank details for returned/cancelled order to refund amount in his account.
   * @param  {AddBeneficiaryDetailsRequest} body
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
   * @summary:  Send Otp on Adding wallet beneficiary
   * @description:  Send Otp on Adding wallet beneficiary for user mobile verification
   * @param  {WalletOtpRequest} body
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
   * @summary:  Mark Default Beneficiary For Refund
   * @description:  Mark Default Beneficiary ot of all Beneficiary Details for Refund
   * @param  {SetDefaultBeneficiaryRequest} body
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
    * @summary:  Get Orders for application based on application Id
    * @description:  Get Orders
    * @param  {string} [pageNo] - Current page number
    * @param  {string} [pageSize] - Page limit
    * @param  {string} [fromDate] - From Date
    * @param  {string} [toDate] - To Date
    
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
      `/service/application/v1.0/orders`,
      query,
      {}
    );
  }

  /**
    *
    * @summary:  Get Order by order id for application based on application Id
    * @description:  Get Order By Fynd Order Id
    * @param  {string} orderId - Order Id
    
    **/
  getOrderById(orderId) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/v1.0/orders/${orderId}`,
      query,
      {}
    );
  }

  /**
    *
    * @summary:  Get Shipment by shipment id and order id for application based on application Id
    * @description:  Get Shipment
    * @param  {string} shipmentId - Shipment Id
    
    **/
  getShipmentById(shipmentId) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/v1.0/orders/shipments/${shipmentId}`,
      query,
      {}
    );
  }

  /**
    *
    * @summary:  Get Shipment reasons by shipment id and order id for application based on application Id
    * @description:  Get Shipment Reasons
    * @param  {string} shipmentId - Shipment Id
    
    **/
  getShipmentReasons(shipmentId) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/v1.0/orders/shipments/${shipmentId}/reasons`,
      query,
      {}
    );
  }

  /**
   *
   * @summary:  Update Shipment status by shipment id and order id for application based on application Id
   * @description:  Update Shipment Status
   * @param  {string} shipmentId - Shipment Id
   * @param  {ShipmentStatusUpdateBody} body
   **/
  updateShipmentStatus(shipmentId, body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/v1.0/orders/shipments/${shipmentId}/status`,
      query,
      body
    );
  }

  /**
    *
    * @summary:  Track Shipment by shipment id and order id for application based on application Id
    * @description:  Shipment Track
    * @param  {string} shipmentId - Shipment Id
    
    **/
  trackShipment(shipmentId) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/v1.0/orders/shipments/${shipmentId}/track`,
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
   * @summary:  Get reward points that could be earned on any catalogue product.
   * @description:  Evaluate the amount of reward points that could be earned on any catalogue product.
   * @param  {CatalogueOrderRequest} body
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
   * @summary:  Calculates the discount on order-amount based on amount ranges configured in order_discount reward.
   * @description:  Calculates the discount on order-amount based on amount ranges configured in order_discount reward.
   * @param  {OrderDiscountRequest} body
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
    * @summary:  Total available points of a user for current application
    * @description:  Total available points of a user for current application
    
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
    * @summary:  Get list of points transactions.
    * @description:  Get list of points transactions.
The list of points history is paginated.
    * @param  {string} [pageId] - PageID is the ID of the requested page. For first request it should be kept empty.
    * @param  {number} [pageSize] - PageSize is the number of requested items in response.
    
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
    * @summary:  User's referral details.
    * @description:  User's referral details.
    
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
   * @summary:  Redeems referral code and credits points to users points account.
   * @description:  Redeems referral code and credits points to users points account.
   * @param  {RedeemReferralCodeRequest} body
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
   * @summary:  post a new abuse request
   * @description:  Report a new abuse for specific entity with description text.
   * @param  {ReportAbuseRequest} body
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
   * @summary:  Update abuse details
   * @description:  Update the abuse details like status and description text.
   * @param  {UpdateAbuseStatusRequest} body
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
    * @summary:  Get list of abuse data
    * @description:  Get the list of abuse data from entity type and entity ID.
    * @param  {string} entityId - entity id
    * @param  {string} entityType - entity type
    * @param  {string} [id] - abuse id
    * @param  {string} [pageId] - pagination page id
    * @param  {number} [pageSize] - pagination page size
    
    **/
  getAbuseReports(entityId, entityType, id, pageId, pageSize) {
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
    * @summary:  Get list of attribute data
    * @description:  Provides a list of all attribute data.
    
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
   * @summary:  Add a new attribute request
   * @description:  Add a new attribute with its name, slug and description.
   * @param  {SaveAttributeRequest} body
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
    * @summary:  Get single attribute data
    * @description:  Get a single attribute data from a given slug.
    * @param  {string} slug - Slug of attribute
    
    **/
  getAttribute(slug) {
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
   * @summary:  Update attribute details
   * @description:  Update the attribute's name and description.
   * @param  {string} slug - Slug of attribute
   * @param  {UpdateAttributeRequest} body
   **/
  updateAttribute(slug, body) {
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
   * @summary:  post a new comment
   * @description:  This is used to add a new comment for specific entity.
   * @param  {CommentRequest} body
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
   * @summary:  Update comment status
   * @description:  Update the comment status (active/approve) or text.
   * @param  {UpdateCommentRequest} body
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
    * @summary:  Get list of comments
    * @description:  Get the list of comments from specific entity type.
    * @param  {string} entityType - entity type
    * @param  {string} [id] - comment id
    * @param  {string} [entityId] - entity id
    * @param  {string} [userId] - user id - flag/filter to get comments for user
    * @param  {string} [pageId] - pagination page id
    * @param  {number} [pageSize] - pagination page size
    
    **/
  getComments(entityType, id, entityId, userId, pageId, pageSize) {
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
    * @summary:  Checks eligibility and cloud media config
    * @description:  Checks eligibility to rate and review and cloud media configuration
    * @param  {string} entityType - entity type
    * @param  {string} entityId - entity id
    
    **/
  checkEligibility(entityType, entityId) {
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
    * @summary:  Delete Media
    * @description:  Delete Media for the given entity IDs.
    
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
   * @summary:  Add Media
   * @description:  Add Media list for specific entity.
   * @param  {AddMediaListRequest} body
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
   * @summary:  Update Media
   * @description:  Update Media (archive/approve) for the given entity.
   * @param  {UpdateMediaListRequest} body
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
    * @summary:  Get Media
    * @description:  Get Media from the given entity type and entity ID.
    * @param  {string} entityType - entity type
    * @param  {string} entityId - entity id
    * @param  {string} [id] - vote id
    * @param  {string} [pageId] - pagination page id
    * @param  {number} [pageSize] - pagination page size
    
    **/
  getMedias(entityType, entityId, id, pageId, pageSize) {
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
    * @summary:  Get a review summary
    * @description:  Review summary gives ratings and attribute metrics of a review per entity
It gives following response data: review count, rating average. review metrics / attribute rating metrics which contains name, type, average and count.
    * @param  {string} entityType - entity type
    * @param  {string} entityId - entity id
    * @param  {string} [id] - review summary identifier
    * @param  {string} [pageId] - pagination page id
    * @param  {number} [pageSize] - pagination page size
    
    **/
  getReviewSummaries(entityType, entityId, id, pageId, pageSize) {
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
    * @summary:  Add customer reviews
    * @description:  Add customer reviews for specific entity with following data:
attributes rating, entity rating, title, description, media resources and template id.
    * @param  {UpdateReviewRequest} body
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
    * @summary:  Update customer reviews
    * @description:  Update customer reviews for specific entity with following data:
attributes rating, entity rating, title, description, media resources and template id.
    * @param  {UpdateReviewRequest} body
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
  getReviews(
    entityType,
    entityId,
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
    * @summary:  Get the templates for product or l3 type
    * @description:  This is used to get the templates details.
    * @param  {string} [templateId] - template id
    * @param  {string} [entityId] - entity id
    * @param  {string} [entityType] - entity type e.g. product | l3
    
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
    * @summary:  Create a new question
    * @description:  This is used to create a new question with following data:
tags, text, type, choices for MCQ type questions, maximum length of answer.
    * @param  {CreateQNARequest} body
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
   * @summary:  Update question
   * @description:  This is used to update question's status, tags and choices.
   * @param  {UpdateQNARequest} body
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
    * @summary:  Get a list of QnA
    * @description:  This is used to get a list of questions and its answers.
    * @param  {string} entityType - entity type
    * @param  {string} entityId - entity id
    * @param  {string} [id] - qna id
    * @param  {boolean} [showAnswer] - show answer flag
    * @param  {string} [pageId] - pagination page id
    * @param  {number} [pageSize] - pagination page size
    
    **/
  getQuestionAndAnswers(
    entityType,
    entityId,
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
    * @summary:  Get list of votes
    * @description:  This is used to get the list of votes of a current logged in user. Votes can be filtered using `ref_type` i.e. review | comment.
    * @param  {string} [id] - vote id
    * @param  {string} [refType] - entity type e.g. review | comment
    
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
   * @summary:  Create a new vote
   * @description:  This is used to create a new vote and the actions can be upvote or downvote.
   * @param  {VoteRequest} body
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
   * @summary:  Update vote
   * @description:  This is used to update the vote and the actions can be upvote or downvote.
   * @param  {UpdateVoteRequest} body
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
    * @summary:  Fetch all Items Added to  Cart
    * @description:  Get all the details of a items added to cart  by uid. If successful, returns a Cart resource in the response body specified in CartResponse
    * @param  {number} [uid] - 
    * @param  {number} [assignCardId] - 
    
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
    * @summary:  Fetch Last-Modified timestamp
    * @description:  Fetch Last-Modified timestamp in header metadata
    * @param  {number} [uid] - 
    
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
   * @summary:  Add Items to Cart
   * @description:  <p>Add Items to cart. See `AddCartRequest` in schema of request body for the list of attributes needed to add items to a cart. On successful request, returns cart response containing details of items, coupons available etc.these attributes will be fetched from the folowing api's</p>
   * @param  {AddCartRequest} body
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
   * @summary:  Update Items already added to Cart
   * @description:  Request object containing attributes like item_quantity and item_size which can be updated .these attributes will be fetched from the folowing api's</p> <ul> <li><font color="monochrome">operation</font> Operation for current api call. <b>update_item</b> for update items. <b>remove_item</b> for removing items.</li> <li> <font color="monochrome">item_id</font>  "/platform/content/v1/products/"</li> <li> <font color="monochrome">item_size</font>   "/platform/content/v1/products/{slug}/sizes/"</li> <li> <font color="monochrome">quantity</font>  item quantity (must be greater than or equal to 1)</li> <li> <font color="monochrome">article_id</font>   "/content​/v1​/products​/{identifier}​/sizes​/price​/"</li> <li> <font color="monochrome">item_index</font>  item position in the cart (must be greater than or equal to 0)</li> </ul>
   * @param  {UpdateCartRequest} body
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
    * @summary:  Cart item count
    * @description:  Get total count of item present in cart
    * @param  {number} [uid] - Cart id
    
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
    * @summary:  Fetch Coupon
    * @description:  Get all the details of a coupons applicable to cart  by uid. If successful, returns a Coupon resource in the response body specified in GetCouponResponse
    * @param  {number} [uid] - 
    
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
    * @summary:  Apply Coupon
    * @description:  <p>Apply Coupons on Items added to cart. On successful request, returns cart response containing details of items ,coupons applied etc.these attributes will be consumed by  api</p> <ul> <li> <font color="monochrome">coupon_code</font></li>
</ul>
    * @param  {boolean} [i] - 
    * @param  {boolean} [b] - 
    * @param  {boolean} [p] - 
    * @param  {ApplyCouponRequest} body
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
    * @summary:  Remove Coupon Applied
    * @description:  Remove Coupon applied on the cart by passing uid in request body.
    * @param  {number} [uid] - Cart id
    
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
    * @summary:  Get discount offers based on quantity
    * @description:  List applicable offers along with current, next and best offer for given product. Either one of **uid**, **item_id**, **slug** should be present*
    * @param  {number} [itemId] - Item id
    * @param  {string} [articleId] - Article mongo id
    * @param  {number} [uid] - Item id
    * @param  {string} [slug] - Item unique url from product page
    
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
    * @summary:  Fetch Address
    * @description:  Get all the addresses associated with the account. If successful, returns a Address resource in the response body specified in GetAddressResponse.attibutes listed below are optional <ul> <li> <font color="monochrome">uid</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
    * @param  {number} [uid] - 
    * @param  {number} [mobileNo] - 
    * @param  {string} [checkoutMode] - 
    * @param  {number} [tags] - 
    * @param  {boolean} [isDefault] - 
    
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
   * @summary:  Add Address to the account
   * @description:  <p>Add Address to account. See `SaveAddressRequest` in schema of request body for the list of attributes needed to add Address to account. On successful request, returns response containing address_id ,is_default_address and success message.
   * @param  {SaveAddressRequest} body
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
    * @summary:  Fetch Single Address
    * @description:  Get a addresses with the given id. If successful, returns a Address resource in the response body specified in GetAddressResponse.attibutes listed below are optional <ul> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
    * @param  {number} id - 
    * @param  {number} [uid] - 
    * @param  {number} [mobileNo] - 
    * @param  {string} [checkoutMode] - 
    * @param  {number} [tags] - 
    * @param  {boolean} [isDefault] - 
    
    **/
  getAddressById(id, uid, mobileNo, checkoutMode, tags, isDefault) {
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
   * @summary:  Update Address alreay added to account
   * @description:  Request object containing attributes mentioned in  <font color="blue">UpdateAddressRequest </font> can be updated .these attributes are :</p> <ul> <li> <font color="monochrome">is_default_address</font></li> <li> <font color="monochrome">landmark</font></li> <li> <font color="monochrome">area</font></li> <li> <font color="monochrome">pincode</font></li> <li> <font color="monochrome">email</font></li> <li> <font color="monochrome">address_type</font></li> <li> <font color="monochrome">name</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">address</font></li> </ul>
   * @param  {number} id - Address id
   * @param  {UpdateAddressRequest} body
   **/
  updateAddress(id, body) {
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
    * @summary:  Remove Address Associated to the account
    * @description:  Delete a Address by it's address_id. Returns an object that tells whether the address was deleted successfully
    * @param  {number} id - Address id
    
    **/
  removeAddress(id) {
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
   * @summary:  Select Address from All Addresses
   * @description:  <p>Select Address from all addresses associated with the account in order to ship the cart items to .that address,otherwise default address will be selected implicitly. See `SelectCartAddressRequest` in schema of request body for the list of attributes needed to select Address from account. On successful request, returns Cart object response.below are the address attributes which needs to be sent. <ul> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">billing_address_id</font></li> <li> <font color="monochrome">uid</font></li> </ul>
   * @param  {SelectCartAddressRequest} body
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
    * @summary:  Get Cart Payment for valid coupon
    * @description:  Validate coupon for selected payment mode
    * @param  {string} [uid] - 
    * @param  {string} [addressId] - 
    * @param  {string} [paymentMode] - 
    * @param  {string} [paymentIdentifier] - 
    * @param  {string} [aggregatorName] - 
    * @param  {string} [merchantCode] - 
    
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
   * @summary:  Update Cart Payment
   * @description:  Update Cart Payment for Your Account
   * @param  {string} [uid] -
   * @param  {UpdateCartPaymentRequest} body
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
    * @summary:  Get delivery date and options before checkout
    * @description:  Shipment break up item wise with delivery date. Actual                      delivery will be during given dates only. Items will be                      delivered in group of shipments created.
    * @param  {number} [pickAtStoreUid] - 
    * @param  {number} [orderingStoreId] - 
    * @param  {boolean} [p] - Get payment options or not
    * @param  {number} [uid] - Cart id
    * @param  {number} [addressId] - Address id
    
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
   * @summary:  Checkout Cart
   * @description:  Checkout all items in cart to payment and order generation.                        For COD only order will be generated while for other checkout mode                        user will be redirected to payment gateway
   * @param  {boolean} [uid] -
   * @param  {CartCheckoutRequest} body
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
   * @summary:  Update Cart Meta
   * @description:  Update cart meta like checkout_mode, gstin.
   * @param  {number} [uid] - Cart id received in get cart.
   * @param  {CartMetaRequest} body
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
    * @summary:  Get available delivery modes for cart
    * @description:  Get available delivery modes for cart and pick up store uid list. From given pick stores list user can pick up delivery. Use this uid to show store address
    * @param  {number} areaCode - 
    * @param  {number} [uid] - 
    
    **/
  getAvailableDeliveryModes(areaCode, uid) {
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
    * @summary:  Get list of stores for give uids
    * @description:  Get list of stores by providing pick up available store uids.
    * @param  {number} areaCode - 
    
    **/
  getStoreAddressByUid(areaCode) {
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
   * @summary:  Generate Cart sharing link token
   * @description:  Generates shared cart snapshot and returns shortlink token
   * @param  {GetShareCartLinkRequest} body
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
    * @summary:  Get shared cart snapshot and cart response
    * @description:  Returns shared cart response for sent token with `shared_cart_details`                    containing shared cart details in response.
    * @param  {string} token - Shared short link token.
    
    **/
  getCartSharedItems(token) {
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
    * @summary:  Merge or Replace existing cart
    * @description:  Merge or Replace cart based on `action` parameter with shared cart of `token`
    * @param  {string} token - Shared short link token.
    * @param  {string} action - Operation to perform on existing cart, whether to merge or replace.
    
    **/
  updateCartWithSharedItems(token, action) {
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
