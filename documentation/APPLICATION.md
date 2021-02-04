# FDK Application Front API Documentaion


* [Catalog](#Catalog) - Application Front API&#39;s leverages Fynd&#39;s real-time inventory integration with over 400+ brands &amp; 8000+ stores and makes it easy for developers and businesses to build a full fledged omni-channel fashion e-commerce app. 
* [Cart](#Cart) - Open API leverages Fynd&#39;s real-time inventory integration with over 200+ brands &amp; 8000+ stores and makes it easy for developers and businesses to build a full fledged omni-channel fashion e-commerce app. 
* [Lead](#Lead) - Handles communication between Staff and Users 

----
----

### Classes and Methods


* [Catalog](#Catalog)
  * Methods
    * [Catalog#getProductDetailBySlug](#cataloggetproductdetailbyslug)
    * [Catalog#getProductSizesBySlug](#cataloggetproductsizesbyslug)
    * [Catalog#getProductPriceBySlug](#cataloggetproductpricebyslug)
    * [Catalog#getProductSellersBySlug](#cataloggetproductsellersbyslug)
    * [Catalog#getProductComparisonBySlugs](#cataloggetproductcomparisonbyslugs)
    * [Catalog#getSimilarComparisonProductBySlug](#cataloggetsimilarcomparisonproductbyslug)
    * [Catalog#getComparedFrequentlyProductBySlug](#cataloggetcomparedfrequentlyproductbyslug)
    * [Catalog#getProductSimilarByIdentifier](#cataloggetproductsimilarbyidentifier)
    * [Catalog#getProductVariantsBySlug](#cataloggetproductvariantsbyslug)
    * [Catalog#getProductStockByIdentifier](#cataloggetproductstockbyidentifier)
    * [Catalog#getProductStockForTimeByIdentifier](#cataloggetproductstockfortimebyidentifier)
    * [Catalog#getProducts](#cataloggetproducts)
    * [Catalog#getBrands](#cataloggetbrands)
    * [Catalog#getBrandDetailBySlug](#cataloggetbranddetailbyslug)
    * [Catalog#getCategories](#cataloggetcategories)
    * [Catalog#getCategoryDetailBySlug](#cataloggetcategorydetailbyslug)
    * [Catalog#getHomeProducts](#cataloggethomeproducts)
    * [Catalog#](#catalog)
    * [Catalog#getSearchResults](#cataloggetsearchresults)
    * [Catalog#getCollections](#cataloggetcollections)
    * [Catalog#getCollectionItemsBySlug](#cataloggetcollectionitemsbyslug)
    * [Catalog#getCollectionDetailBySlug](#cataloggetcollectiondetailbyslug)
    * [Catalog#getFollowedListing](#cataloggetfollowedlisting)
    * [Catalog#followById](#catalogfollowbyid)
    * [Catalog#unfollowById](#catalogunfollowbyid)
    * [Catalog#getFollowerCountById](#cataloggetfollowercountbyid)
    * [Catalog#getFollowIds](#cataloggetfollowids)
    
   

* [Cart](#Cart)
  * Methods
    * [Cart#getCart](#cartgetcart)
    * [Cart#getCartLastModified](#cartgetcartlastmodified)
    * [Cart#addItemsToCart](#cartadditemstocart)
    * [Cart#updateCart](#cartupdatecart)
    * [Cart#getCartItemCount](#cartgetcartitemcount)
    * [Cart#getCouponList](#cartgetcouponlist)
    * [Cart#applyCoupon](#cartapplycoupon)
    * [Cart#removeCoupon](#cartremovecoupon)
    * [Cart#getBulkDiscountOffers](#cartgetbulkdiscountoffers)
    * [Cart#getAddressList](#cartgetaddresslist)
    * [Cart#addAddress](#cartaddaddress)
    * [Cart#getAddressById](#cartgetaddressbyid)
    * [Cart#updateAddress](#cartupdateaddress)
    * [Cart#removeAddress](#cartremoveaddress)
    * [Cart#selectCartAddress](#cartselectcartaddress)
    * [Cart#getCartPaymentModes](#cartgetcartpaymentmodes)
    * [Cart#selectCartPaymentMode](#cartselectcartpaymentmode)
    * [Cart#getCartShipments](#cartgetcartshipments)
    * [Cart#checkoutCart](#cartcheckoutcart)
    * [Cart#updateCartMeta](#cartupdatecartmeta)
    * [Cart#getCartShareLink](#cartgetcartsharelink)
    * [Cart#getCartSharedItems](#cartgetcartshareditems)
    * [Cart#updateCartWithSharedItems](#cartupdatecartwithshareditems)
    
   

* [Lead](#Lead)
  * Methods
    * [Lead#getTicket](#leadgetticket)
    * [Lead#createHistoryForTicket](#leadcreatehistoryforticket)
    * [Lead#createTicket](#leadcreateticket)
    * [Lead#getCustomForm](#leadgetcustomform)
    * [Lead#submitCustomForm](#leadsubmitcustomform)
    * [Lead#getParticipantsInsideVideoRoom](#leadgetparticipantsinsidevideoroom)
    * [Lead#getTokenForVideoRoom](#leadgettokenforvideoroom)
    
   


---
---



## Catalog

```javascript
const { Configuration, Catalog } = require('fdk-client-nodejs/application')
const conf = new Configuration({
    ApplicationID: "507f191e810c19729de860ea",
    ApplicationToken: "hu67dfhddf"
});
const catalog = new Catalog(conf);

```


#### Catalog#getProductDetailBySlug
Get a product

```javascript
// Promise
const promise = catalog.getProductDetailBySlug(slug, );

// Async/Await
const data = await catalog.getProductDetailBySlug(slug, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string |  | 

Products are the core resource of an application. Products can be associated by categories, collections, brands and more. This API retrieves the product specified by the given **slug**. If successful, returns a Product resource in the response body specified in `ProductDetail`

Success Response:



The Product object. See example below or refer `ProductDetail` for details.


Content Type: `application/json`

Schema: `{&quot;$ref&quot;:&quot;#/components/schemas/ProductDetail&quot;}`








Error Response:





---


#### Catalog#getProductSizesBySlug
Get the sizes of a product

```javascript
// Promise
const promise = catalog.getProductSizesBySlug(slug, store_id, );

// Async/Await
const data = await catalog.getProductSizesBySlug(slug, store_id, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string |  | 
| store_id | string |  | 

A product can exist in multiple sizes. Use this API to fetch all the available sizes of a product. If successful, returns a ProductSize object in the response body as specified in `ProductSizes`

Success Response:



The ProductSize object. See example below or refer `ProductSizes` for details.


Content Type: `application/json`

Schema: `{&quot;$ref&quot;:&quot;#/components/schemas/ProductSizes&quot;}`








Error Response:





---


#### Catalog#getProductPriceBySlug
Get price a product size

```javascript
// Promise
const promise = catalog.getProductPriceBySlug(slug, size, pincode, store_id, );

// Async/Await
const data = await catalog.getProductPriceBySlug(slug, size, pincode, store_id, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string |  | 
| size | string |  | 
| pincode | integer |  | 
| store_id | string |  | 

Any available product can exist in multiple sizes. Sometimes prices may vary among different sizes of the same product. Use this API to retrieve the price of the product of a particular size with the location details it is available in.

Success Response:



The ProductSizePrice object. See example below or refer `ProductSizePriceResponse` for details


Content Type: `application/json`

Schema: `{&quot;$ref&quot;:&quot;#/components/schemas/ProductSizePriceResponse&quot;}`








Error Response:





---


#### Catalog#getProductSellersBySlug
List sellers of a product

```javascript
// Promise
const promise = catalog.getProductSellersBySlug(slug, size, pincode, page_no, page_size, );

// Async/Await
const data = await catalog.getProductSellersBySlug(slug, size, pincode, page_no, page_size, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string |  | 
| size | string |  | 
| pincode | integer |  | 
| page_no | integer |  | 
| page_size | integer |  | 

A product of a particular size can be sold by multiple sellers. Use this API to fetch the sellers who are selling this product and have the stock of a particular size

Success Response:



The ProductSizeSeller object. See example below or refer `ProductSizeSellersResponse` for details


Content Type: `application/json`

Schema: `{&quot;$ref&quot;:&quot;#/components/schemas/ProductSizeSellersResponse&quot;}`








Error Response:





---


#### Catalog#getProductComparisonBySlugs
Compare products

```javascript
// Promise
const promise = catalog.getProductComparisonBySlugs(slug, );

// Async/Await
const data = await catalog.getProductComparisonBySlugs(slug, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string |  | 

Compare between the features of the given set of products Use this API to compare how one product ranks against other products. Note that at least one slug is mandatory in request query.

Success Response:



The comparison between the products. See example below or refer `ProductsComparisonResponse` for details


Content Type: `application/json`

Schema: `{&quot;$ref&quot;:&quot;#/components/schemas/ProductsComparisonResponse&quot;}`








Error Response:





---


#### Catalog#getSimilarComparisonProductBySlug
Get comparison between similar products

```javascript
// Promise
const promise = catalog.getSimilarComparisonProductBySlug(slug, );

// Async/Await
const data = await catalog.getSimilarComparisonProductBySlug(slug, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string |  | 

Compare between the features of the given set of products Use this API to compare how one product ranks against other products

Success Response:



The comparison between products similar to given product. See example below or refer `ProductCompareResponse` for details


Content Type: `application/json`

Schema: `{&quot;$ref&quot;:&quot;#/components/schemas/ProductCompareResponse&quot;}`








Error Response:





---


#### Catalog#getComparedFrequentlyProductBySlug
Get comparison between frequently compared products with the given product

```javascript
// Promise
const promise = catalog.getComparedFrequentlyProductBySlug(slug, );

// Async/Await
const data = await catalog.getComparedFrequentlyProductBySlug(slug, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string |  | 

Compare between the features of the give product with frequently compared products Use this API to compare how one product ranks against other products

Success Response:



The comparison between products similar to given product. See example below or refer `ProductFrequentlyComparedSimilarResponse` for details


Content Type: `application/json`

Schema: `{&quot;$ref&quot;:&quot;#/components/schemas/ProductFrequentlyComparedSimilarResponse&quot;}`








Error Response:





---


#### Catalog#getProductSimilarByIdentifier
Get similar products

```javascript
// Promise
const promise = catalog.getProductSimilarByIdentifier(slug, similar_type, );

// Async/Await
const data = await catalog.getProductSimilarByIdentifier(slug, similar_type, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string |  | 
| similar_type | string |  | 

Get products similar to the one specified by the `identifier`. If successful, it returns a group of similar products based on type as described in `SimilarProductByTypeResponse`

Success Response:



Similar Products based on type passed in the request path. Refer `SimilarProductByTypeResponse` for response structure


Content Type: `application/json`

Schema: `{&quot;$ref&quot;:&quot;#/components/schemas/SimilarProductByTypeResponse&quot;}`








Error Response:





---


#### Catalog#getProductVariantsBySlug
Get variant of a particular product

```javascript
// Promise
const promise = catalog.getProductVariantsBySlug(slug, );

// Async/Await
const data = await catalog.getProductVariantsBySlug(slug, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string |  | 

A product can have a different type of variants varies from color to shade etc. Use this API to fetch all the available variants of a product. If successful, returns a Products for different variants type in the response body as specified in `ProductVariantResponse`

Success Response:



See example below or refer `ProductVariantsResponse` for details. For `display_type:image`, `color` key will be present otherwise `value` key will be preset.


Content Type: `application/json`

Schema: `{&quot;$ref&quot;:&quot;#/components/schemas/ProductVariantsResponse&quot;}`








Error Response:





---


#### Catalog#getProductStockByIdentifier
Get the stock of a product

```javascript
// Promise
const promise = catalog.getProductStockByIdentifier(item_id, alu, sku_code, ean, upc, );

// Async/Await
const data = await catalog.getProductStockByIdentifier(item_id, alu, sku_code, ean, upc, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| item_id | string |  | 
| alu | string |  | 
| sku_code | string |  | 
| ean | string |  | 
| upc | string |  | 

Retrieve the available stock of the products. You can use this API to retrieve stock of multiple products at a time. Only 50 product IDs can be given in a single API request

Success Response:



The ProductStockStatus object. See example below or refer `ProductStockStatusResponse` for details


Content Type: `application/json`

Schema: `{&quot;$ref&quot;:&quot;#/components/schemas/ProductStockStatusResponse&quot;}`








Error Response:





---


#### Catalog#getProductStockForTimeByIdentifier
Get the stock of a product

```javascript
// Promise
const promise = catalog.getProductStockForTimeByIdentifier(timestamp, page_size, page_id, );

// Async/Await
const data = await catalog.getProductStockForTimeByIdentifier(timestamp, page_size, page_id, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| timestamp | string |  | 
| page_size | integer |  | 
| page_id | string |  | 

Retrieve the available stock of the products. You can use this api to get stock status of products whose inventory is updated in given time

Success Response:



The ProductStockStatus object. See example below or refer `ProductStockPolling` for details


Content Type: `application/json`

Schema: `{&quot;$ref&quot;:&quot;#/components/schemas/ProductStockPolling&quot;}`








Error Response:





---


#### Catalog#getProducts
List the products

```javascript
// Promise
const promise = catalog.getProducts(q, sort_on, page_id, page_size, );

// Async/Await
const data = await catalog.getProducts(q, sort_on, page_id, page_size, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| q | string |  | 
| sort_on | string |  | 
| page_id | string |  | 
| page_size | integer |  | 

List all the products associated with a brand, collection or category in a requested sort order. The API additionally supports arbitrary search queries that may refer the name of any product, brand, category or collection. If successful, returns a paginated list of products specified in `ProductListingResponse`

Success Response:



List of Products. See example below or refer `ProductListingResponse` for details


Content Type: `application/json`

Schema: `{&quot;$ref&quot;:&quot;#/components/schemas/ProductListingResponse&quot;}`








Error Response:





---


#### Catalog#getBrands
List all the brands

```javascript
// Promise
const promise = catalog.getBrands(department, page_no, page_size, );

// Async/Await
const data = await catalog.getBrands(department, page_no, page_size, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| department | string |  | 
| page_no | integer |  | 
| page_size | integer |  | 

A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`

Success Response:



List of Brands. See example below or refer `BrandListingResponse` for details


Content Type: `application/json`

Schema: `{&quot;$ref&quot;:&quot;#/components/schemas/BrandListingResponse&quot;}`








Error Response:





---


#### Catalog#getBrandDetailBySlug
Get metadata of a brand

```javascript
// Promise
const promise = catalog.getBrandDetailBySlug(slug, );

// Async/Await
const data = await catalog.getBrandDetailBySlug(slug, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string |  | 

Fetch metadata of a brand. If successful, returns a metadata object specified in `BrandDetailResponse`

Success Response:



The Metadata object. See example below or refer `BrandDetailResponse` for details.


Content Type: `application/json`

Schema: `{&quot;$ref&quot;:&quot;#/components/schemas/BrandDetailResponse&quot;}`








Error Response:





---


#### Catalog#getCategories
List all the categories

```javascript
// Promise
const promise = catalog.getCategories(department, );

// Async/Await
const data = await catalog.getCategories(department, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| department | string |  | 

List all the categories. You can optionally pass filter the brands by the department. If successful, returns a paginated list of brands specified in `CategoryListingResponse`

Success Response:



List of Categories. See example below or refer `CategoryListingResponse` for details.


Content Type: `application/json`

Schema: `{&quot;$ref&quot;:&quot;#/components/schemas/CategoryListingResponse&quot;}`








Error Response:





---


#### Catalog#getCategoryDetailBySlug
Get metadata of a category

```javascript
// Promise
const promise = catalog.getCategoryDetailBySlug(slug, );

// Async/Await
const data = await catalog.getCategoryDetailBySlug(slug, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string |  | 

Fetch metadata of a category. If successful, returns a metadata object specified in `CategoryMetaResponse`

Success Response:



The Metadata object. See example below or refer `CategoryMetaResponse` for details.


Content Type: `application/json`

Schema: `{&quot;$ref&quot;:&quot;#/components/schemas/CategoryMetaResponse&quot;}`








Error Response:





---


#### Catalog#getHomeProducts
List the products

```javascript
// Promise
const promise = catalog.getHomeProducts(sort_on, page_id, page_size, );

// Async/Await
const data = await catalog.getHomeProducts(sort_on, page_id, page_size, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| sort_on | string |  | 
| page_id | string |  | 
| page_size | integer |  | 

List all the products associated with a brand, collection or category in a random order. If successful, returns a paginated list of products specified in `HomeListingResponse`

Success Response:



List of Products. See example below or refer `HomeListingResponse` for details


Content Type: `application/json`

Schema: `{&quot;$ref&quot;:&quot;#/components/schemas/HomeListingResponse&quot;}`








Error Response:





---


#### Catalog#
List all the departments

```javascript
// Promise
const promise = catalog.();

// Async/Await
const data = await catalog.();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Departments are a way to categorise similar products. A product can lie in multiple departments. For example, a skirt can below to the &#39;Women&#39;s Fashion&#39; Department while a handbag can lie in &#39;Women&#39;s Accessories&#39; Department. Use this API to list all the departments. If successful, returns the list of departments specified in `DepartmentResponse`

Success Response:



List of Departments. See example below or refer `DepartmentResponse` for details.


Content Type: `application/json`

Schema: `{&quot;$ref&quot;:&quot;#/components/schemas/DepartmentResponse&quot;}`








Error Response:





---


#### Catalog#getSearchResults
Get relevant suggestions for a search query

```javascript
// Promise
const promise = catalog.getSearchResults(q, );

// Async/Await
const data = await catalog.getSearchResults(q, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| q | string |  | 

Retrieves a list of suggestions for a given search query. Each suggestion is a valid search term that&#39;s generated on the basis of what is given in query. This is particularly useful to enhance the user experience in search. The given search query can be a partial name of any product, brand and category. For example, if the given search query `q` is _ski_ the relevant search suggestions returned might be a list containing _skirt_, _ski shoes_, __skin cream_ etc.

Success Response:



Lists of autocomplete suggestions for the search query `q`. See example response below or refer `AutoCompleteResponse` for details


Content Type: `application/json`

Schema: `{&quot;$ref&quot;:&quot;#/components/schemas/AutoCompleteResponse&quot;}`








Error Response:





---


#### Catalog#getCollections
List all the collections

```javascript
// Promise
const promise = catalog.getCollections(page_id, page_size, );

// Async/Await
const data = await catalog.getCollections(page_id, page_size, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| page_id | string |  | 
| page_size | integer |  | 

A Collection allows you to organize your products into hierarchical groups. For example, a dress might be in the category _Clothing_, the individual product might also be in the collection _Summer_. On successful request, returns all the collections`

Success Response:



List of collections. See example below or refer `GetCollectionListingResponse` for details


Content Type: `application/json`

Schema: `{&quot;$ref&quot;:&quot;#/components/schemas/GetCollectionListingResponse&quot;}`








Error Response:





---


#### Catalog#getCollectionItemsBySlug
Get the items in a collection

```javascript
// Promise
const promise = catalog.getCollectionItemsBySlug(slug, sort_on, page_id, page_size, );

// Async/Await
const data = await catalog.getCollectionItemsBySlug(slug, sort_on, page_id, page_size, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string |  | 
| sort_on | string |  | 
| page_id | string |  | 
| page_size | integer |  | 

Get items in a collection specified by its `slug`.

Success Response:



The attached items of an collection. See example below or refer `GetCollectionListingItemsResponse` for details


Content Type: `application/json`

Schema: `{&quot;$ref&quot;:&quot;#/components/schemas/GetCollectionListingItemsResponse&quot;}`








Error Response:





---


#### Catalog#getCollectionDetailBySlug
Get a particular collection

```javascript
// Promise
const promise = catalog.getCollectionDetailBySlug(slug, );

// Async/Await
const data = await catalog.getCollectionDetailBySlug(slug, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string |  | 

Get the details of a collection by its `slug`. If successful, returns a Collection resource in the response body specified in `CollectionDetailResponse`

Success Response:



The Collection object. See example below or refer `CollectionDetailResponse` for details


Content Type: `application/json`

Schema: `{&quot;$ref&quot;:&quot;#/components/schemas/CollectionDetailResponse&quot;}`








Error Response:





---


#### Catalog#getFollowedListing
Get a list of followed Products, Brands, Collections

```javascript
// Promise
const promise = catalog.getFollowedListing(collection_type, );

// Async/Await
const data = await catalog.getFollowedListing(collection_type, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| collection_type | string |  | 

A User can follow a Product they like. This API retrieves the products the user have followed. If successful, returns a Followed resource in the response body specified in `GetFollowResponseSchema`

Success Response:



The Followed resource object. See example below or refer `GetFollowListingResponse` for details.


Content Type: `application/json`

Schema: `{&quot;$ref&quot;:&quot;#/components/schemas/GetFollowListingResponse&quot;}`








Error Response:





---


#### Catalog#followById
Follow a particular Product

```javascript
// Promise
const promise = catalog.followById(collection_type, collection_id, );

// Async/Await
const data = await catalog.followById(collection_type, collection_id, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| collection_type | string |  | 
| collection_id | integer |  | 

Follow a particular Product specified by its uid. Pass the uid of the product in request URL

Success Response:



The response object. See example below or refer `FollowPostResponse` for details


Content Type: `application/json`

Schema: `{&quot;$ref&quot;:&quot;#/components/schemas/FollowPostResponse&quot;}`








Error Response:





---


#### Catalog#unfollowById
UnFollow a Product

```javascript
// Promise
const promise = catalog.unfollowById(collection_type, collection_id, );

// Async/Await
const data = await catalog.unfollowById(collection_type, collection_id, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| collection_type | string |  | 
| collection_id | integer |  | 

You can undo a followed Product or Brand by its id, we refer this action as _unfollow_. Pass the uid of the product in request URL

Success Response:



The response object. See example below or refer `FollowPostResponse` for details


Content Type: `application/json`

Schema: `{&quot;$ref&quot;:&quot;#/components/schemas/FollowPostResponse&quot;}`








Error Response:





---


#### Catalog#getFollowerCountById
Get Follow Count

```javascript
// Promise
const promise = catalog.getFollowerCountById(collection_type, collection_id, );

// Async/Await
const data = await catalog.getFollowerCountById(collection_type, collection_id, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| collection_type | string |  | 
| collection_id | string |  | 

Get count of followers for given collection type and collection id.

Success Response:



The response object. See example below or refer `FollowerCountResponse` for details


Content Type: `application/json`

Schema: `{&quot;$ref&quot;:&quot;#/components/schemas/FollowerCountResponse&quot;}`








Error Response:





---


#### Catalog#getFollowIds
Get the Ids of followed product, brand and collection.

```javascript
// Promise
const promise = catalog.getFollowIds(collection_type, );

// Async/Await
const data = await catalog.getFollowIds(collection_type, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| collection_type | string |  | 

You can get the ids of all the followed Product, Brand and Collections. Pass collection_type as query parameter to fetch specific Ids

Success Response:



The response object. See example below or refer `FollowIdsResponse` for details


Content Type: `application/json`

Schema: `{&quot;$ref&quot;:&quot;#/components/schemas/FollowIdsResponse&quot;}`








Error Response:





---



---


## Cart

```javascript
const { Configuration, Cart } = require('fdk-client-nodejs/application')
const conf = new Configuration({
    ApplicationID: "507f191e810c19729de860ea",
    ApplicationToken: "hu67dfhddf"
});
const cart = new Cart(conf);

```


#### Cart#getCart
Fetch all Items Added to  Cart

```javascript
// Promise
const promise = cart.getCart(uid, assign_card_id, x-application-id, x-application-token, x-currency-code, );

// Async/Await
const data = await cart.getCart(uid, assign_card_id, x-application-id, x-application-token, x-currency-code, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| uid | integer | unique identification number of cart affiliate | 
| assign_card_id | integer | assign card id | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

Get all the details of a items added to cart  by uid. If successful, returns a Cart resource in the response body specified in GetCartV1Serializer

Success Response:



The Cart object. See example below or refer GetCartV1Serializer for details


Content Type: `application/json`

Schema: `{&quot;$ref&quot;:&quot;#/components/schemas/GetCartV1Serializer&quot;}`








Error Response:



---


#### Cart#getCartLastModified
Fetch Last-Modified timestamp

```javascript
// Promise
const promise = cart.getCartLastModified(uid, x-application-id, x-application-token, x-currency-code, );

// Async/Await
const data = await cart.getCartLastModified(uid, x-application-id, x-application-token, x-currency-code, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| uid | integer | unique identification number of cart affiliate | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

Fetch Last-Modified timestamp in header metadata

Success Response:



Fetch Last-Modified Timestamp Response





Error Response:



---


#### Cart#addItemsToCart
Add Items to Cart

```javascript
// Promise
const promise = cart.addItemsToCart(x-application-id, x-application-token, x-currency-code, );

// Async/Await
const data = await cart.addItemsToCart(x-application-id, x-application-token, x-currency-code, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

&lt;p&gt;Add Items to cart. See `CartV1Serializer` in schema of request body for the list of attributes needed to add items to a cart. On successful request, returns cart response containing details of items ,coupons available etc.these attributes will be fetched from the folowing api&#39;s&lt;/p&gt; &lt;ul&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;item_id&lt;/font&gt;  &quot;/platform/content/v1/products/&quot;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;item_size&lt;/font&gt;   &quot;/platform/content/v1/products/{slug}/sizes/&quot;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;seller_id&lt;/font&gt;  &quot;/platform/content/v1/products/{slug}/sizes/price&quot;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;store_id&lt;/font&gt;  &quot;/platform/content/v1/products/{slug}/sizes/price&quot;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;quantity&lt;/font&gt;  item quantity (must be greater than or equal to 1)&lt;/li&gt; &lt;/ul&gt;

Success Response:



Response of the cart object including all item details included in .the cart,coupons etc.


Content Type: `application/json`

Schema: `{&quot;$ref&quot;:&quot;#/components/schemas/PlatformV1Cart&quot;}`








Error Response:



---


#### Cart#updateCart
Update Items already added to Cart

```javascript
// Promise
const promise = cart.updateCart(x-application-id, x-application-token, x-currency-code, );

// Async/Await
const data = await cart.updateCart(x-application-id, x-application-token, x-currency-code, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

Request object containing attributes like item_quantity and item_size which can be updated .these attributes will be fetched from the folowing api&#39;s&lt;/p&gt; &lt;ul&gt; &lt;li&gt;&lt;font color=&quot;monochrome&quot;&gt;operation&lt;/font&gt; Operation for current api call. &lt;b&gt;update_item&lt;/b&gt; for update items. &lt;b&gt;remove_item&lt;/b&gt; for removing items.&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;item_id&lt;/font&gt;  &quot;/platform/content/v1/products/&quot;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;item_size&lt;/font&gt;   &quot;/platform/content/v1/products/{slug}/sizes/&quot;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;quantity&lt;/font&gt;  item quantity (must be greater than or equal to 1)&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;article_id&lt;/font&gt;   &quot;/content​/v1​/products​/{identifier}​/sizes​/price​/&quot;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;item_index&lt;/font&gt;  item position in the cart (must be greater than or equal to 0)&lt;/li&gt; &lt;/ul&gt;

Success Response:



Response of the cart object including all item with their updated details included in .the cart,coupons etc..


Content Type: `application/json`

Schema: `{&quot;$ref&quot;:&quot;#/components/schemas/PlatformV1Cart&quot;}`








Error Response:



---


#### Cart#getCartItemCount
Cart item count

```javascript
// Promise
const promise = cart.getCartItemCount(uid, x-application-id, x-application-token, x-currency-code, );

// Async/Await
const data = await cart.getCartItemCount(uid, x-application-id, x-application-token, x-currency-code, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| uid | integer |  | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

Get total count of item present in cart

Success Response:



OK


Content Type: `application/json`

Schema: `{&quot;type&quot;:&quot;object&quot;,&quot;properties&quot;:{&quot;user_cart_items_count&quot;:{&quot;type&quot;:&quot;integer&quot;,&quot;description&quot;:&quot;Item count present in cart&quot;}}}`








Error Response:



---


#### Cart#getCouponList
Fetch Coupon

```javascript
// Promise
const promise = cart.getCouponList(uid, x-application-id, x-application-token, x-currency-code, );

// Async/Await
const data = await cart.getCouponList(uid, x-application-id, x-application-token, x-currency-code, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| uid | integer | unique identification number of cart affiliate | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

Get all the details of a coupons applicable to cart  by uid. If successful, returns a Coupon resource in the response body specified in GetCouponResponseSchema

Success Response:



Returns The Couppon object which has list of all available_coupon applicale for the cart. See example below or refer GetCouponResponseSchema for details


Content Type: `application/json`

Schema: `{&quot;$ref&quot;:&quot;#/components/schemas/GetCouponResponse&quot;}`








Error Response:



---


#### Cart#applyCoupon
Apply Coupon

```javascript
// Promise
const promise = cart.applyCoupon(i, b, p, x-application-id, x-application-token, x-currency-code, );

// Async/Await
const data = await cart.applyCoupon(i, b, p, x-application-id, x-application-token, x-currency-code, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| i | boolean | items | 
| b | boolean | breakups | 
| p | boolean | payment | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

&lt;p&gt;Apply Coupons on Items added to cart. On successful request, returns cart response containing details of items ,coupons applied etc.these attributes will be consumed by  api&lt;/p&gt; &lt;ul&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;coupon_code&lt;/font&gt;&lt;/li&gt;
&lt;/ul&gt;

Success Response:



Error Response:





---


#### Cart#removeCoupon
Remove Coupon Applied

```javascript
// Promise
const promise = cart.removeCoupon(uid, x-application-id, x-application-token, x-currency-code, );

// Async/Await
const data = await cart.removeCoupon(uid, x-application-id, x-application-token, x-currency-code, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| uid | integer |  | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

Remove Coupon applied on the cart by passing uid in request body.

Success Response:



Response of the Coupon object including all item details included in .the cart,coupons removed etc.


Content Type: `application/json`

Schema: `{&quot;$ref&quot;:&quot;#/components/schemas/PlatformV1Cart&quot;}`








Error Response:



---


#### Cart#getBulkDiscountOffers
Get discount offers based on quantity

```javascript
// Promise
const promise = cart.getBulkDiscountOffers(item_id, article_id, uid, slug, x-application-id, x-application-token, x-currency-code, );

// Async/Await
const data = await cart.getBulkDiscountOffers(item_id, article_id, uid, slug, x-application-id, x-application-token, x-currency-code, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| item_id | integer |  | 
| article_id | string |  | 
| uid | integer |  | 
| slug | string |  | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

List applicable offers along with current, next and best offer for given product. Either one of **uid**, **item_id**, **slug** should be present*

Success Response:



Offers found or not found with valid input


Content Type: `application/json`

Schema: `{&quot;$ref&quot;:&quot;#/components/schemas/BulkPriceResponse&quot;}`








Error Response:





---


#### Cart#getAddressList
Fetch Address

```javascript
// Promise
const promise = cart.getAddressList(uid, mobile_no, checkout_mode, tags, default, x-application-id, x-application-token, x-currency-code, );

// Async/Await
const data = await cart.getAddressList(uid, mobile_no, checkout_mode, tags, default, x-application-id, x-application-token, x-currency-code, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| uid | integer | unique identification number of cart affiliate | 
| mobile_no | integer | mobile_no | 
| checkout_mode | string | checkout_mode | 
| tags | integer | tags | 
| default | integer | default | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

Get all the addresses associated with the account. If successful, returns a Address resource in the response body specified in GetAddressResponseSchema.attibutes listed below are optional &lt;ul&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;uid&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;address_id&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;mobile_no&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;checkout_mode&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;tags&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;default&lt;/font&gt;&lt;/li&gt; &lt;/ul&gt;

Success Response:



Returns The Address object which has list of all address saved for the account. See example below or refer GetAddressResponseSchema for details


Content Type: `application/json`

Schema: `{&quot;$ref&quot;:&quot;#/components/schemas/GetAddressResponse&quot;}`








Error Response:



---


#### Cart#addAddress
Add Address to the account

```javascript
// Promise
const promise = cart.addAddress(x-application-id, x-application-token, x-currency-code, );

// Async/Await
const data = await cart.addAddress(x-application-id, x-application-token, x-currency-code, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

&lt;p&gt;Add Address to account. See `SaveAddressRequestSchema` in schema of request body for the list of attributes needed to add Address to account. On successful request, returns response containing address_id ,is_default_address and success message.

Success Response:



Return Address Id on successfull completion of the request.


Content Type: `application/json`

Schema: `{&quot;$ref&quot;:&quot;#/components/schemas/SaveAddressResponse&quot;}`








Error Response:



---


#### Cart#getAddressById
Fetch Single Address

```javascript
// Promise
const promise = cart.getAddressById(id, uid, mobile_no, checkout_mode, tags, default, x-application-id, x-application-token, x-currency-code, );

// Async/Await
const data = await cart.getAddressById(id, uid, mobile_no, checkout_mode, tags, default, x-application-id, x-application-token, x-currency-code, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| id | integer | address_id | 
| uid | integer | unique identification number of cart affiliate | 
| mobile_no | integer | mobile_no | 
| checkout_mode | string | checkout_mode | 
| tags | integer | tags | 
| default | integer | default | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

Get a addresses with the given id. If successful, returns a Address resource in the response body specified in GetAddressResponseSchema.attibutes listed below are optional &lt;ul&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;mobile_no&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;checkout_mode&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;tags&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;default&lt;/font&gt;&lt;/li&gt; &lt;/ul&gt;

Success Response:



Returns The Address object which has list of all address saved for the account. See example below or refer GetAddressResponseSchema for details


Content Type: `application/json`

Schema: `{&quot;$ref&quot;:&quot;#/components/schemas/GetAddressResponse&quot;}`








Error Response:



---


#### Cart#updateAddress
Update Address alreay added to account

```javascript
// Promise
const promise = cart.updateAddress(id, x-application-id, x-application-token, x-currency-code, );

// Async/Await
const data = await cart.updateAddress(id, x-application-id, x-application-token, x-currency-code, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| id | integer |  | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

Request object containing attributes mentioned in  &lt;font color=&quot;blue&quot;&gt;UpdateAddressRequestSchema &lt;/font&gt; can be updated .these attributes are :&lt;/p&gt; &lt;ul&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;is_default_address&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;landmark&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;area&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;pincode&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;email&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;address_type&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;name&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;address_id&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;address&lt;/font&gt;&lt;/li&gt; &lt;/ul&gt;

Success Response:



Error Response:





---


#### Cart#removeAddress
Remove Address Associated to the account

```javascript
// Promise
const promise = cart.removeAddress(id, x-application-id, x-application-token, x-currency-code, );

// Async/Await
const data = await cart.removeAddress(id, x-application-id, x-application-token, x-currency-code, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| id | integer |  | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

Delete a Address by it&#39;s address_id. Returns an object that tells whether the address was deleted successfully

Success Response:



Error Response:





---


#### Cart#selectCartAddress
Select Address from All Addresses

```javascript
// Promise
const promise = cart.selectCartAddress(x-application-id, x-application-token, x-currency-code, );

// Async/Await
const data = await cart.selectCartAddress(x-application-id, x-application-token, x-currency-code, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

&lt;p&gt;Select Address from all addresses associated with the account in order to ship the cart items to .that address,otherwise default address will be selected implicitly. See `SelectCartAddressRequestSchema` in schema of request body for the list of attributes needed to select Address from account. On successful request, returns Cart object response.below are the address attributes which needs to be sent. &lt;ul&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;address_id&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;billing_address_id&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;uid&lt;/font&gt;&lt;/li&gt; &lt;/ul&gt;

Success Response:



Error Response:







---


#### Cart#getCartPaymentModes
Gte Cart Payment for valid coupon

```javascript
// Promise
const promise = cart.getCartPaymentModes(uid, address_id, payment_mode, payment_identifier, aggregator_name, merchant_code, x-application-id, x-application-token, x-currency-code, );

// Async/Await
const data = await cart.getCartPaymentModes(uid, address_id, payment_mode, payment_identifier, aggregator_name, merchant_code, x-application-id, x-application-token, x-currency-code, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| uid | string | unique identification number | 
| address_id | string | Address of customer | 
| payment_mode | string | selected payment mode of customer | 
| payment_identifier | string | identifier of payment like ICIC, PAYTM | 
| aggregator_name | string | payment gateway identifier | 
| merchant_code | string | identifier of payment like NB_ICIC, PAYTM | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

Validate coupon for selected payment mode

Success Response:



Cart Affiliates.


Content Type: `application/json`

Schema: `{&quot;$ref&quot;:&quot;#/components/schemas/PaymentOptions&quot;}`








Error Response:



---


#### Cart#selectCartPaymentMode
Update Cart Payment

```javascript
// Promise
const promise = cart.selectCartPaymentMode(uid, x-application-id, x-application-token, x-currency-code, );

// Async/Await
const data = await cart.selectCartPaymentMode(uid, x-application-id, x-application-token, x-currency-code, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| uid | string | unique identification number | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

Update Cart Payment for Your Account

Success Response:



Cart Affiliates.


Content Type: `application/json`

Schema: `{&quot;$ref&quot;:&quot;#/components/schemas/PaymentOptions&quot;}`








Error Response:



---


#### Cart#getCartShipments
Get delivery date and options before checkout

```javascript
// Promise
const promise = cart.getCartShipments(p, uid, address_id, x-application-id, x-application-token, x-currency-code, );

// Async/Await
const data = await cart.getCartShipments(p, uid, address_id, x-application-id, x-application-token, x-currency-code, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| p | boolean |  | 
| uid | integer |  | 
| address_id | integer |  | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

Shipment break up item wise with delivery date. Actual                      delivery will be during given dates only. Items will be                      delivered in group of shipments created.

Success Response:



OK


Content Type: `application/json`

Schema: `{&quot;$ref&quot;:&quot;#/components/schemas/ShipmentCart&quot;}`








Error Response:





---


#### Cart#checkoutCart
Checkout Cart

```javascript
// Promise
const promise = cart.checkoutCart(x-application-id, x-application-token, x-currency-code, );

// Async/Await
const data = await cart.checkoutCart(x-application-id, x-application-token, x-currency-code, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

Checkout all items in cart to payment and order generation.                         For COD only order will be generated while for other checkout mode                         user will be redirected to payment gateway

Success Response:



OK


Content Type: `application/json`

Schema: `{&quot;$ref&quot;:&quot;#/components/schemas/CartCheckoutResponse&quot;}`








Error Response:



---


#### Cart#updateCartMeta
Update Cart Meta

```javascript
// Promise
const promise = cart.updateCartMeta(uid, x-application-id, x-application-token, x-currency-code, );

// Async/Await
const data = await cart.updateCartMeta(uid, x-application-id, x-application-token, x-currency-code, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| uid | integer |  | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

Update cart meta like checkout_mode, gstin.

Success Response:



Cart meta updated successfully


Content Type: `application/json`

Schema: `{&quot;type&quot;:&quot;object&quot;,&quot;properties&quot;:{&quot;message&quot;:{&quot;type&quot;:&quot;string&quot;}}}`








Error Response:





---


#### Cart#getCartShareLink
Generate Cart sharing link token

```javascript
// Promise
const promise = cart.getCartShareLink(x-application-id, x-application-token, x-currency-code, );

// Async/Await
const data = await cart.getCartShareLink(x-application-id, x-application-token, x-currency-code, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

Generates shared cart snapshot and returns shortlink token

Success Response:



Token Generated successfully


Content Type: `application/json`

Schema: `{&quot;type&quot;:&quot;object&quot;,&quot;properties&quot;:{&quot;token&quot;:{&quot;type&quot;:&quot;string&quot;},&quot;share_url&quot;:{&quot;type&quot;:&quot;string&quot;}}}`








Error Response:



---


#### Cart#getCartSharedItems
Get shared cart snapshot and cart response

```javascript
// Promise
const promise = cart.getCartSharedItems(token, x-application-id, x-application-token, x-currency-code, );

// Async/Await
const data = await cart.getCartSharedItems(token, x-application-id, x-application-token, x-currency-code, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| token | string |  | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

Returns shared cart response for sent token with `shared_cart_details`                    containing shared cart details in response.

Success Response:



Cart for valid token


Content Type: `application/json`

Schema: `{&quot;type&quot;:&quot;object&quot;,&quot;properties&quot;:{&quot;cart&quot;:{&quot;$ref&quot;:&quot;#/components/schemas/SharedPlatformV1Cart&quot;},&quot;error&quot;:{&quot;type&quot;:&quot;string&quot;}}}`








Error Response:





---


#### Cart#updateCartWithSharedItems
Merge or Replace existing cart

```javascript
// Promise
const promise = cart.updateCartWithSharedItems(token, action, x-application-id, x-application-token, x-currency-code, );

// Async/Await
const data = await cart.updateCartWithSharedItems(token, action, x-application-id, x-application-token, x-currency-code, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| token | string |  | 
| action | string |  | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

Merge or Replace cart based on `action` parameter with shared cart of `token`

Success Response:



Success of Merge or Replace of cart with `shared_cart_details`                    containing shared cart details in response


Content Type: `application/json`

Schema: `{&quot;type&quot;:&quot;object&quot;,&quot;properties&quot;:{&quot;cart&quot;:{&quot;$ref&quot;:&quot;#/components/schemas/SharedPlatformV1Cart&quot;}}}`








Error Response:



---



---


## Lead

```javascript
const { Configuration, Lead } = require('fdk-client-nodejs/application')
const conf = new Configuration({
    ApplicationID: "507f191e810c19729de860ea",
    ApplicationToken: "hu67dfhddf"
});
const lead = new Lead(conf);

```


#### Lead#getTicket
Get Ticket with the specific id

```javascript
// Promise
const promise = lead.getTicket(id, );

// Async/Await
const data = await lead.getTicket(id, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| id | string |  | 

Get Ticket with the specific id, this is used to view the ticket details

Success Response:



Success


Content Type: `application/json`

Schema: `{&quot;$ref&quot;:&quot;#/components/schemas/Ticket&quot;}`








Error Response:





---


#### Lead#createHistoryForTicket
Create history for specific Ticket

```javascript
// Promise
const promise = lead.createHistoryForTicket(ticket_id, );

// Async/Await
const data = await lead.createHistoryForTicket(ticket_id, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| ticket_id | string |  | 

Create history for specific Ticket, this history is seen on ticket detail page, this can be comment, log or rating.

Success Response:



Success


Content Type: `application/json`

Schema: `{&quot;$ref&quot;:&quot;#/components/schemas/TicketHistory&quot;}`








Error Response:







---


#### Lead#createTicket
Create Ticket

```javascript
// Promise
const promise = lead.createTicket();

// Async/Await
const data = await lead.createTicket();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

This is used to Create Ticket.

Success Response:



Success


Content Type: `application/json`

Schema: `{&quot;$ref&quot;:&quot;#/components/schemas/Ticket&quot;}`








Error Response:





---


#### Lead#getCustomForm
Get specific Custom Form using it&#39;s slug

```javascript
// Promise
const promise = lead.getCustomForm(slug, );

// Async/Await
const data = await lead.getCustomForm(slug, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string |  | 

Get specific Custom Form using it&#39;s slug, this is used to view the form.

Success Response:



Success


Content Type: `application/json`

Schema: `{&quot;$ref&quot;:&quot;#/components/schemas/CustomForm&quot;}`








Error Response:





---


#### Lead#submitCustomForm
Submit Response for a specific Custom Form using it&#39;s slug

```javascript
// Promise
const promise = lead.submitCustomForm(slug, );

// Async/Await
const data = await lead.submitCustomForm(slug, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string |  | 

Submit Response for a specific Custom Form using it&#39;s slug, this response is then used to create a ticket on behalf of the user.

Success Response:



Success


Content Type: `application/json`

Schema: `{&quot;properties&quot;:{&quot;ticket&quot;:{&quot;$ref&quot;:&quot;#/components/schemas/Ticket&quot;}}}`








Error Response:







---


#### Lead#getParticipantsInsideVideoRoom
Get participants of a specific Video Room using it&#39;s unique name

```javascript
// Promise
const promise = lead.getParticipantsInsideVideoRoom(unique_name, );

// Async/Await
const data = await lead.getParticipantsInsideVideoRoom(unique_name, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| unique_name | string |  | 

Get participants of a specific Video Room using it&#39;s unique name, this can be used to check if people are already there in the room and also to show their names.

Success Response:



Success


Content Type: `application/json`

Schema: `{&quot;properties&quot;:{&quot;participants&quot;:{&quot;type&quot;:&quot;array&quot;}}}`








Error Response:





---


#### Lead#getTokenForVideoRoom
Get Token to join a specific Video Room using it&#39;s unqiue name

```javascript
// Promise
const promise = lead.getTokenForVideoRoom(unique_name, );

// Async/Await
const data = await lead.getTokenForVideoRoom(unique_name, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| unique_name | string |  | 

Get Token to join a specific Video Room using it&#39;s unqiue name, this Token is your ticket to Room and also creates your identity there.

Success Response:



Success


Content Type: `application/json`

Schema: `{&quot;properties&quot;:{&quot;access_token&quot;:{&quot;type&quot;:&quot;string&quot;}}}`








Error Response:





---



---


---
---
