# FDK Application Front API Documentaion


* [Catalog](#Catalog) - Catalog API's allows you to access list of products, prices, seller details, similar features, variants and many more useful features.  
* [Lead](#Lead) - Handles communication between Staff and Users 
* [Share](#Share) - Short link and QR Code 

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
    * [Catalog#getProductStockByIds](#cataloggetproductstockbyids)
    * [Catalog#getProductStockForTimeByIds](#cataloggetproductstockfortimebyids)
    * [Catalog#getProducts](#cataloggetproducts)
    * [Catalog#getBrands](#cataloggetbrands)
    * [Catalog#getBrandDetailBySlug](#cataloggetbranddetailbyslug)
    * [Catalog#getCategories](#cataloggetcategories)
    * [Catalog#getCategoryDetailBySlug](#cataloggetcategorydetailbyslug)
    * [Catalog#getHomeProducts](#cataloggethomeproducts)
    * [Catalog#getDepartments](#cataloggetdepartments)
    * [Catalog#getSearchResults](#cataloggetsearchresults)
    * [Catalog#getCollections](#cataloggetcollections)
    * [Catalog#addCollection](#catalogaddcollection)
    * [Catalog#getCollectionItemsBySlug](#cataloggetcollectionitemsbyslug)
    * [Catalog#addCollectionItemsBySlug](#catalogaddcollectionitemsbyslug)
    * [Catalog#updateCollectionDetailBySlug](#catalogupdatecollectiondetailbyslug)
    * [Catalog#deleteCollectionDetailBySlug](#catalogdeletecollectiondetailbyslug)
    * [Catalog#getCollectionDetailBySlug](#cataloggetcollectiondetailbyslug)
    * [Catalog#getFollowedListing](#cataloggetfollowedlisting)
    * [Catalog#unfollowById](#catalogunfollowbyid)
    * [Catalog#followById](#catalogfollowbyid)
    * [Catalog#getFollowerCountById](#cataloggetfollowercountbyid)
    * [Catalog#getFollowIds](#cataloggetfollowids)
    * [Catalog#getStores](#cataloggetstores)
    
   

* [Lead](#Lead)
  * Methods
    * [Lead#getTicket](#leadgetticket)
    * [Lead#createHistoryForTicket](#leadcreatehistoryforticket)
    * [Lead#createTicket](#leadcreateticket)
    * [Lead#getCustomForm](#leadgetcustomform)
    * [Lead#submitCustomForm](#leadsubmitcustomform)
    * [Lead#getParticipantsInsideVideoRoom](#leadgetparticipantsinsidevideoroom)
    * [Lead#getTokenForVideoRoom](#leadgettokenforvideoroom)
    
   

* [Share](#Share)
  * Methods
    * [Share#getApplicationQRCode](#sharegetapplicationqrcode)
    * [Share#getProductQRCodeBySlug](#sharegetproductqrcodebyslug)
    * [Share#getCollectionQRCodeBySlug](#sharegetcollectionqrcodebyslug)
    * [Share#getUrlQRCode](#sharegeturlqrcode)
    * [Share#createShortLink](#sharecreateshortlink)
    * [Share#getShortLinkByHash](#sharegetshortlinkbyhash)
    * [Share#getOriginalShortLinkByHash](#sharegetoriginalshortlinkbyhash)
    
   


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
| slug | string | The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/** | 

Products are the core resource of an application. Products can be associated by categories, collections, brands and more. This API retrieves the product specified by the given ``slug``. If successful, returns a Product resource in the response body specified in `ProductDetail`

Success Response:



The Product object. See example below or refer `ProductDetail` for details.


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ProductDetail"
}`








Bad request. See the error object in the response body for specific reason


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








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
| slug | string | The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/** | 
| store_id | string | The store id of the product whose sizes need to be retrieved | 

A product can exist in multiple sizes. Use this API to fetch all the available sizes of a product. If successful, returns a ProductSize object in the response body as specified in `ProductSizes`

Success Response:



The ProductSize object. See example below or refer `ProductSizes` for details.


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ProductSizes"
}`








Bad request. See the error object in the response body for specific reason


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








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
| slug | string | The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/** | 
| size | string | The size of the product for which the price needs to be retrieved. You can get the available sizes of a product from **v1.0/products/{slug}/sizes/** | 
| pincode | integer | The pincode of the product for which the price needs to be retrieved. | 
| store_id | string | The store of the product whose size level price need to be retrieved | 

Any available product can exist in multiple sizes. Sometimes prices may vary among different sizes of the same product. Use this API to retrieve the price of the product of a particular size with the location details it is available in.

Success Response:



The ProductSizePrice object. See example below or refer `ProductSizePriceResponse` for details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ProductSizePriceResponse"
}`








Bad request. See the error object in the response body for specific reason


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








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
| slug | string | The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/** | 
| size | string | The size of the product for which the price needs to be retrieved. You can get the available sizes of a product from **v1.0.0/products/sizes** | 
| pincode | integer | The pincode of the product for which the price needs to be retrieved. | 
| page_no | integer | The page number to navigate through the given set of results. | 
| page_size | integer | Number of items to retrieve in each page. Default is 12. | 

A product of a particular size can be sold by multiple sellers. Use this API to fetch the sellers who are selling this product and have the stock of a particular size

Success Response:



The ProductSizeSeller object. See example below or refer `ProductSizeSellersResponse` for details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ProductSizeSellersResponse"
}`








Bad request. See the error object in the response body for specific reason


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








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
| slug | string | The unique identifier `slug` of a products. You can retrieve this from the APIs that list products like **v1.0/products/** | 

Compare between the features of the given set of products Use this API to compare how one product ranks against other products. Note that at least one slug is mandatory in request query.

Success Response:



The comparison between the products. See example below or refer `ProductsComparisonResponse` for details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ProductsComparisonResponse"
}`








Bad request. See the error object in the response body for specific reason


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








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
| slug | string | The unique identifier `slug` of a product. You can retrieve this from the APIs that list products like **v1.0/products/** | 

Compare between the features of the given set of products Use this API to compare how one product ranks against other products

Success Response:



The comparison between products similar to given product. See example below or refer `ProductCompareResponse` for details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ProductCompareResponse"
}`








Bad request. See the error object in the response body for specific reason


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








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
| slug | string | The unique identifier `slug` of a product. You can retrieve this from the APIs that list products like **v1.0/products/** | 

Compare between the features of the give product with frequently compared products Use this API to compare how one product ranks against other products

Success Response:



The comparison between products similar to given product. See example below or refer `ProductFrequentlyComparedSimilarResponse` for details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ProductFrequentlyComparedSimilarResponse"
}`








Bad request. See the error object in the response body for specific reason


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








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
| slug | string | The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/** | 
| similar_type | string | The tag_identifier is used to fetch the particular type of similar product such as basic, visual, price, seller, category and spec. | 

Get products similar to the one specified by the `identifier`. If successful, it returns a group of similar products based on type as described in `SimilarProductByTypeResponse`

Success Response:



Similar Products based on type passed in the request path. Refer `SimilarProductByTypeResponse` for response structure


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/SimilarProductByTypeResponse"
}`








Bad request. See the error object in the response body for specific reason


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








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
| slug | string | The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/** | 

A product can have a different type of variants varies from color to shade etc. Use this API to fetch all the available variants of a product. If successful, returns a Products for different variants type in the response body as specified in `ProductVariantResponse`

Success Response:



See example below or refer `ProductVariantsResponse` for details. For `display_type:image`, `color` key will be present otherwise `value` key will be preset.


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ProductVariantsResponse"
}`








Bad request. See the error object in the response body for specific reason


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








Error Response:



---


#### Catalog#getProductStockByIds
Get the stock of a product

```javascript
// Promise
const promise = catalog.getProductStockByIds(item_id, alu, sku_code, ean, upc, );

// Async/Await
const data = await catalog.getProductStockByIds(item_id, alu, sku_code, ean, upc, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| item_id | string | Product id to get product stock (Max. 50 allowed) | 
| alu | string | Product identifier alu to get product stock (Max. 50 allowed) | 
| sku_code | string | Product identifier sku_code to get product stock (Max. 50 allowed) | 
| ean | string | Product identifier ean to get product stock (Max. 50 allowed) | 
| upc | string | Product identifier upc to get product stock (Max. 50 allowed) | 

Retrieve the available stock of the products. You can use this API to retrieve stock of multiple products at a time. Only 50 product IDs can be given in a single API request

Success Response:



The ProductStockStatus object. See example below or refer `ProductStockStatusResponse` for details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ProductStockStatusResponse"
}`








Bad request. See the error object in the response body for specific reason


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








Error Response:



---


#### Catalog#getProductStockForTimeByIds
Get the stock of a product

```javascript
// Promise
const promise = catalog.getProductStockForTimeByIds(timestamp, page_size, page_id, );

// Async/Await
const data = await catalog.getProductStockForTimeByIds(timestamp, page_size, page_id, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| timestamp | string | timestamp in UTC format (2020-07-23T10:27:50Z) | 
| page_size | integer | Limit of number of items for stock status default 12 | 
| page_id | string | will give next page results | 

Retrieve the available stock of the products. You can use this api to get stock status of products whose inventory is updated in given time

Success Response:



The ProductStockStatus object. See example below or refer `ProductStockPolling` for details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ProductStockPolling"
}`








Bad request. See the error object in the response body for specific reason


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








Error Response:



---


#### Catalog#getProducts
List the products

```javascript
// Promise
const promise = catalog.getProducts(q, f, filters, sort_on, page_id, page_size, page_no, page_type, );

// Async/Await
const data = await catalog.getProducts(q, f, filters, sort_on, page_id, page_size, page_no, page_type, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| q | string | The search query. This can be a partial or complete name of a either a product, brand or category | 
| f | string | The search filter parameters. All the parameter filtered from filter parameters will be passed in ``f`` parameter in this format. ``?f=brand:voi-jeans||and:::l3_categories:t-shirts||shirts`` | 
| filters | boolean | Pass `filters` parameter to fetch the filter details. This flag is used to fetch all filters | 
| sort_on | string | The order to sort the list of products on. The supported sort parameters are popularity, price, redemption and discount in either ascending or descending order. See the supported values below. | 
| page_id | string | Each response will contain ``page_id`` param, which should be sent back to make pagination work. | 
| page_size | integer | Number of items to retrieve in each page. Default is 12. | 
| page_no | integer | If page_type is number then pass it to fetch page items. Default is 1. | 
| page_type | string | For pagination type should be cursor or number. Default is cursor. | 

List all the products associated with a brand, collection or category in a requested sort order. The API additionally supports arbitrary search queries that may refer the name of any product, brand, category or collection. If successful, returns a paginated list of products specified in `ProductListingResponse`

Success Response:



List of Products. See example below or refer `ProductListingResponse` for details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ProductListingResponse"
}`








Bad request. See the error object in the response body for specific reason


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








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
| department | string | The name of the department. Use this parameter to filter products by a particular department. See below the list of available departments. You can retrieve available departments from the **v1.0/departments/** API | 
| page_no | integer | The page number to navigate through the given set of results | 
| page_size | integer | Number of items to retrieve in each page. Default is 12. | 

A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`

Success Response:



List of Brands. See example below or refer `BrandListingResponse` for details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/BrandListingResponse"
}`








Bad request. See the error object in the response body for specific reason


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








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
| slug | string | The unique identifier of a brand. i.e; `slug` of a brand. You can retrieve these from the APIs that list brands like **v1.0/brands/** | 

Fetch metadata of a brand. If successful, returns a metadata object specified in `BrandDetailResponse`

Success Response:



The Metadata object. See example below or refer `BrandDetailResponse` for details.


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/BrandDetailResponse"
}`








Bad request. See the error object in the response body for specific reason


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








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
| department | string | The name of the department. Use this parameter to filter products by a particular department. See below the list of available departments. You can retrieve available departments from the **v1.0/departments/** API | 

List all the categories. You can optionally pass filter the brands by the department. If successful, returns a paginated list of brands specified in `CategoryListingResponse`

Success Response:



List of Categories. See example below or refer `CategoryListingResponse` for details.


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/CategoryListingResponse"
}`








Bad request. See the error object in the response body for specific reason


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








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
| slug | string | The unique identifier of a category. i.e; `slug` of a category. You can retrieve these from the APIs that list categories like **v1.0/categories/** | 

Fetch metadata of a category. If successful, returns a metadata object specified in `CategoryMetaResponse`

Success Response:



The Metadata object. See example below or refer `CategoryMetaResponse` for details.


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/CategoryMetaResponse"
}`








Bad request. See the error object in the response body for specific reason


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








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
| sort_on | string | Each response will contain ``sort_on`` param, which should be sent back to make pagination work. | 
| page_id | string | Each response will contain ``page_id`` param, which should be sent back to make pagination work. | 
| page_size | integer | Number of items to retrieve in each page. Default is 12. | 

List all the products associated with a brand, collection or category in a random order. If successful, returns a paginated list of products specified in `HomeListingResponse`

Success Response:



List of Products. See example below or refer `HomeListingResponse` for details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/HomeListingResponse"
}`








Bad request. See the error object in the response body for specific reason


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








Error Response:



---


#### Catalog#getDepartments
List all the departments

```javascript
// Promise
const promise = catalog.getDepartments();

// Async/Await
const data = await catalog.getDepartments();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Departments are a way to categorise similar products. A product can lie in multiple departments. For example, a skirt can below to the 'Women's Fashion' Department while a handbag can lie in 'Women's Accessories' Department. Use this API to list all the departments. If successful, returns the list of departments specified in `DepartmentResponse`

Success Response:



List of Departments. See example below or refer `DepartmentResponse` for details.


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/DepartmentResponse"
}`








Bad request. See the error object in the response body for specific reason


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








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
| q | string | The search query. This can be a partial or complete name of a either a product, brand or category | 

Retrieves a list of suggestions for a given search query. Each suggestion is a valid search term that's generated on the basis of what is given in query. This is particularly useful to enhance the user experience in search. The given search query can be a partial name of any product, brand and category. For example, if the given search query `q` is _ski_ the relevant search suggestions returned might be a list containing _skirt_, _ski shoes_, __skin cream_ etc.

Success Response:



Lists of autocomplete suggestions for the search query `q`. See example response below or refer `AutoCompleteResponse` for details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/AutoCompleteResponse"
}`








Bad request. See the error object in the response body for specific reason


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








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
| page_id | string | Each response will contain ``page_id`` param, which should be sent back to make pagination work. | 
| page_size | integer | Number of items to retrieve in each page. Default is 12. | 

A Collection allows you to organize your products into hierarchical groups. For example, a dress might be in the category _Clothing_, the individual product might also be in the collection _Summer_. On successful request, returns all the collections`

Success Response:



List of collections. See example below or refer `GetCollectionListingResponse` for details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/GetCollectionListingResponse"
}`








Bad request. See the error object in the response body for specific reason


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








Error Response:



---


#### Catalog#addCollection
Add a Collection

```javascript
// Promise
const promise = catalog.addCollection();

// Async/Await
const data = await catalog.addCollection();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Create a collection. See `CreateCollection` for the list of attributes needed to create a collection and **collections/query-options** for the available options to create a collection. On successful request, returns a paginated list of collections specified in `CollectionDetailResponse`

Success Response:



List of all the collections including the one you added. See example below or refer `CollectionDetailResponse` for details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/CollectionDetailResponse"
}`








Bad request. See the error object in the response body for specific reason


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








Error Response:



---


#### Catalog#getCollectionItemsBySlug
Get the items in a collection

```javascript
// Promise
const promise = catalog.getCollectionItemsBySlug(slug, f, filters, sort_on, page_id, page_size, );

// Async/Await
const data = await catalog.getCollectionItemsBySlug(slug, f, filters, sort_on, page_id, page_size, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | A `slug` is a human readable, URL friendly unique identifier of an object. Pass the `slug` of the collection for which you want to fetch the items | 
| f | string | The search filter parameters. All the parameter filtered from filter parameters will be passed in ``f`` parameter in this format. ``?f=brand:voi-jeans||and:::l3_categories:t-shirts||shirts`` | 
| filters | boolean | Pass `filters` parameter to fetch the filter details. This flag is used to fetch all filters | 
| sort_on | string | The order to sort the list of products on. The supported sort parameters are popularity, price, redemption and discount in either ascending or descending order. See the supported values below. | 
| page_id | string | Each response will contain ``page_id`` param, which should be sent back to make pagination work. | 
| page_size | integer | Number of items to retrieve in each page. Default is 12. | 

Get items in a collection specified by its `slug`.

Success Response:



The attached items of an collection. See example below or refer `GetCollectionListingItemsResponse` for details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/GetCollectionListingItemsResponse"
}`








Bad request. See the error object in the response body for specific reason


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








Error Response:



---


#### Catalog#addCollectionItemsBySlug
Add items to a collection

```javascript
// Promise
const promise = catalog.addCollectionItemsBySlug(slug, );

// Async/Await
const data = await catalog.addCollectionItemsBySlug(slug, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | A `slug` is a human readable, URL friendly unique identifier of an object. Pass the `slug` of the collection which you want to add items into. | 

Adds items to a collection specified by its `slug`. See `CollectionItemsRequest` for the list of attributes needed to add items to an collection.

Success Response:



Status object. Tells whether the operation was successful.


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/CollectionItemsResponse"
}`








Bad request. See the error object in the response body for specific reason


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








Error Response:



---


#### Catalog#updateCollectionDetailBySlug
Update a collection

```javascript
// Promise
const promise = catalog.updateCollectionDetailBySlug(slug, );

// Async/Await
const data = await catalog.updateCollectionDetailBySlug(slug, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | A `slug` is a human readable, URL friendly unique identifier of an object. Pass the `slug` of the collection which you want to update. | 

Update a collection by it's slug. On successful request, returns the updated collection

Success Response:



The Collection object. See example below or refer `CollectionsUpdateDetailResponse` for details.


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/CollectionsUpdateDetailResponse"
}`








Bad request. See the error object in the response body for specific reason


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








Error Response:



---


#### Catalog#deleteCollectionDetailBySlug
Delete a Collection

```javascript
// Promise
const promise = catalog.deleteCollectionDetailBySlug(slug, );

// Async/Await
const data = await catalog.deleteCollectionDetailBySlug(slug, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | A `slug` is a human readable, URL friendly unique identifier of an object. Pass the `slug` of the collection which you want to delete. | 

Delete a collection by it's slug. Returns an object that tells whether the collection was deleted successfully

Success Response:



Status object. Tells whether the operation was successful. See example below or refer `CollectionDetailViewDeleteResponse`


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/CollectionDetailViewDeleteResponse"
}`








Bad request. See the error object in the response body for specific reason


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








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
| slug | string | A `slug` is a human readable, URL friendly unique identifier of an object. Pass the `slug` of the collection which you want to retrieve. | 

Get the details of a collection by its `slug`. If successful, returns a Collection resource in the response body specified in `CollectionDetailResponse`

Success Response:



The Collection object. See example below or refer `CollectionDetailResponse` for details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/CollectionDetailResponse"
}`








Bad request. See the error object in the response body for specific reason


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








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
| collection_type | string | Type of collection followed. i. e. products, brands, collections | 

A User can follow a Product they like. This API retrieves the products the user have followed. If successful, returns a Followed resource in the response body specified in `GetFollowResponseSchema`

Success Response:



The Followed resource object. See example below or refer `GetFollowListingResponse` for details.


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/GetFollowListingResponse"
}`








Bad request. See the error object in the response body for specific reason


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








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
| collection_type | string | Type of collection followed. i. e. products, brands, collections | 
| collection_id | integer | the `id` of the collection type you want to unfollow | 

You can undo a followed Product or Brand by its id, we refer this action as _unfollow_. Pass the uid of the product in request URL

Success Response:



The response object. See example below or refer `FollowPostResponse` for details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/FollowPostResponse"
}`








Bad request. See the error object in the response body for specific reason


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








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
| collection_type | string | Type of collection followed. i. e. products, brands, collections | 
| collection_id | integer | the `id` of the collection type you want to follow | 

Follow a particular Product specified by its uid. Pass the uid of the product in request URL

Success Response:



The response object. See example below or refer `FollowPostResponse` for details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/FollowPostResponse"
}`








Bad request. See the error object in the response body for specific reason


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








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
| collection_type | string | the `type` of the collection products/brands/collections. | 
| collection_id | string | the `id` of the product/brand/collection. | 

Get count of followers for given collection type and collection id.

Success Response:



The response object. See example below or refer `FollowerCountResponse` for details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/FollowerCountResponse"
}`








Bad request. See the error object in the response body for specific reason


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








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
| collection_type | string | Type of collection followed. i. e. products, brands, collections | 

You can get the ids of all the followed Product, Brand and Collections. Pass collection_type as query parameter to fetch specific Ids

Success Response:



The response object. See example below or refer `FollowIdsResponse` for details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/FollowIdsResponse"
}`








Bad request. See the error object in the response body for specific reason


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








Error Response:



---


#### Catalog#getStores
List store meta information.

```javascript
// Promise
const promise = catalog.getStores(page_no, page_size, q, range, latitude, longitude, );

// Async/Await
const data = await catalog.getStores(page_no, page_size, q, range, latitude, longitude, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| page_no | integer | Each response will contain **page_no** param, which should be sent back to make pagination work. | 
| page_size | integer | Number of items to retrieve in each page. | 
| q | string | This can be used to search a particulr store by its name or store_code. | 
| range | integer | This can be used to retrieve store within a particular range. For eg range=10000 (in meters) | 
| latitude | number | This should be the latitude of the location from which one needs to retreive the nearest stores. | 
| longitude | number | This should be the longitude of the location from which one needs to retreive the nearest stores. | 

Use this API to get list of stores for specific application. If successful, returns list of stores specified in `StoreListingResponse`

Success Response:



List of Stores. See example below or refer `StoreListingResponse` for details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/StoreListingResponse"
}`








Bad request. See the error object in the response body for specific reason


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








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
| id | string | ID of ticket to be retrieved | 

Get Ticket with the specific id, this is used to view the ticket details

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/Ticket"
}`


Examples: 


Default
```javascript
{
  "value": {
    "context": {
      "application_id": "000000000000000000000003",
      "company_id": "884"
    },
    "content": {
      "title": "SOme title Response",
      "description": "<b>Single lineeee</b>: asdf<br><b>Email</b>: asdf@asdf.com<br><b>dfsdf</b>: asdf<br>",
      "attachments": []
    },
    "status": {
      "display": "In Progress",
      "color": "#ffa951",
      "key": "in_progress"
    },
    "priority": {
      "display": "Medium",
      "color": "#f37736",
      "key": "medium"
    },
    "assigned_to": {
      "agent_id": "5d1363adf599d850df93175e",
      "gender": "male",
      "accountType": "user",
      "active": true,
      "profilePicUrl": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2136700473091190&height=400&width=400&ext=1554542761&hash=AeS6cuWIdjDdJJ-b",
      "hasOldPasswordHash": false,
      "_id": "5d1363adf599d850df93175e",
      "phoneNumbers": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "countryCode": 91,
          "phone": "9890425946"
        }
      ],
      "firstName": "Nikhil",
      "lastName": "Manapure",
      "emails": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "email": "nikhilmshchs@gmail.com"
        }
      ],
      "username": "nikhilmshchs_gmail_com_38425_20500281",
      "createdAt": "2019-01-01T17:22:38.528Z",
      "updatedAt": "2021-01-22T10:02:42.258Z",
      "uid": "20500281",
      "__v": 56
    },
    "tags": [
      "some-title"
    ],
    "_id": "6012f38557751ee8fc162cf7",
    "created_on": {
      "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36",
      "platform": "web",
      "meta": {
        "browser": {
          "name": "Chrome",
          "version": "88.0.4324.96"
        },
        "os": {
          "name": "macOS",
          "version": "10.15.7",
          "versionName": "Catalina"
        },
        "platform": {
          "type": "desktop",
          "vendor": "Apple"
        },
        "engine": {
          "name": "Blink"
        }
      }
    },
    "source": "sales_channel",
    "created_by": {
      "id": "5d1363adf599d850df93175e",
      "user": {
        "gender": "male",
        "accountType": "user",
        "active": true,
        "profilePicUrl": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2136700473091190&height=400&width=400&ext=1554542761&hash=AeS6cuWIdjDdJJ-b",
        "hasOldPasswordHash": false,
        "_id": "5d1363adf599d850df93175e",
        "phoneNumbers": [
          {
            "active": true,
            "primary": true,
            "verified": true,
            "countryCode": 91,
            "phone": "9890425946"
          }
        ],
        "firstName": "Nikhil",
        "lastName": "Manapure",
        "emails": [
          {
            "active": true,
            "primary": true,
            "verified": true,
            "email": "nikhilmshchs@gmail.com"
          }
        ],
        "username": "nikhilmshchs_gmail_com_38425_20500281",
        "createdAt": "2019-01-01T17:22:38.528Z",
        "updatedAt": "2021-01-22T10:02:42.258Z",
        "uid": "20500281",
        "__v": 56
      }
    },
    "response_id": "6012f38457751e0fb8162cf6",
    "category": {
      "form": {
        "login_required": false,
        "should_notify": false,
        "inputs": [
          {
            "required": false,
            "type": "text",
            "enum": [],
            "display": "Single lineeee",
            "key": "single-lineeee",
            "showRegexInput": false
          },
          {
            "required": false,
            "type": "email",
            "enum": [],
            "display": "Email",
            "regex": "\\S+@\\S+\\.\\S+",
            "key": "email",
            "showRegexInput": true
          },
          {
            "required": false,
            "type": "text",
            "enum": [],
            "display": "dfsdf",
            "key": "dfsdf",
            "showRegexInput": false
          }
        ],
        "available_assignees": [
          "5b9b98150df588546aaea6d2",
          "5c45d78395d7504f76c2cb37"
        ],
        "_id": "5fd72db3dc250f8decfc61b2",
        "title": "SOme title",
        "description": "SOme big description",
        "slug": "some-title",
        "application_id": "000000000000000000000003",
        "created_on": {
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36",
          "platform": "web",
          "meta": {
            "browser": {
              "name": "Chrome",
              "version": "87.0.4280.88"
            },
            "os": {
              "name": "macOS",
              "version": "10.15.6",
              "versionName": "Catalina"
            },
            "platform": {
              "type": "desktop",
              "vendor": "Apple"
            },
            "engine": {
              "name": "Blink"
            }
          }
        },
        "created_by": "5d1363adf599d850df93175e",
        "createdAt": "2020-12-14T09:17:39.953Z",
        "updatedAt": "2021-01-28T18:48:07.717Z",
        "__v": 0
      },
      "key": "some-title",
      "display": "SOme title"
    },
    "ticket_id": "43",
    "createdAt": "2021-01-28T17:25:25.013Z",
    "updatedAt": "2021-01-28T17:25:33.396Z",
    "__v": 0,
    "video_room_id": "6012f38557751ee8fc162cf7"
  }
}
```








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
| ticket_id | string | Ticket ID for which history is created | 

Create history for specific Ticket, this history is seen on ticket detail page, this can be comment, log or rating.

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/TicketHistory"
}`


Examples: 


Default
```javascript
{
  "value": {
    "_id": "601a9d52c26687d086c499ef",
    "ticket_id": "6012f38557751ee8fc162cf7",
    "type": "comment",
    "value": {
      "text": "d",
      "media": []
    },
    "created_on": {
      "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36",
      "platform": "web",
      "meta": {
        "browser": {
          "name": "Chrome",
          "version": "88.0.4324.96"
        },
        "os": {
          "name": "macOS",
          "version": "10.15.7",
          "versionName": "Catalina"
        },
        "platform": {
          "type": "desktop",
          "vendor": "Apple"
        },
        "engine": {
          "name": "Blink"
        }
      }
    },
    "created_by": "5d1363adf599d850df93175e",
    "createdAt": "2021-02-03T12:55:46.808Z",
    "updatedAt": "2021-02-03T12:55:46.808Z",
    "__v": 0
  }
}
```








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

Schema: `{
  "$ref": "#/components/schemas/Ticket"
}`


Examples: 


Default
```javascript
{
  "value": {
    "context": {
      "application_id": "000000000000000000000003",
      "company_id": "884"
    },
    "content": {
      "title": "SOme title Response",
      "description": "<b>Single lineeee</b>: asdf<br><b>Email</b>: asdf@asdf.com<br><b>dfsdf</b>: asdf<br>",
      "attachments": []
    },
    "status": {
      "display": "In Progress",
      "color": "#ffa951",
      "key": "in_progress"
    },
    "priority": {
      "display": "Medium",
      "color": "#f37736",
      "key": "medium"
    },
    "assigned_to": {
      "agent_id": "5d1363adf599d850df93175e",
      "gender": "male",
      "accountType": "user",
      "active": true,
      "profilePicUrl": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2136700473091190&height=400&width=400&ext=1554542761&hash=AeS6cuWIdjDdJJ-b",
      "hasOldPasswordHash": false,
      "_id": "5d1363adf599d850df93175e",
      "phoneNumbers": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "countryCode": 91,
          "phone": "9890425946"
        }
      ],
      "firstName": "Nikhil",
      "lastName": "Manapure",
      "emails": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "email": "nikhilmshchs@gmail.com"
        }
      ],
      "username": "nikhilmshchs_gmail_com_38425_20500281",
      "createdAt": "2019-01-01T17:22:38.528Z",
      "updatedAt": "2021-01-22T10:02:42.258Z",
      "uid": "20500281",
      "__v": 56
    },
    "tags": [
      "some-title"
    ],
    "_id": "6012f38557751ee8fc162cf7",
    "created_on": {
      "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36",
      "platform": "web",
      "meta": {
        "browser": {
          "name": "Chrome",
          "version": "88.0.4324.96"
        },
        "os": {
          "name": "macOS",
          "version": "10.15.7",
          "versionName": "Catalina"
        },
        "platform": {
          "type": "desktop",
          "vendor": "Apple"
        },
        "engine": {
          "name": "Blink"
        }
      }
    },
    "source": "sales_channel",
    "created_by": {
      "id": "5d1363adf599d850df93175e",
      "user": {
        "gender": "male",
        "accountType": "user",
        "active": true,
        "profilePicUrl": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2136700473091190&height=400&width=400&ext=1554542761&hash=AeS6cuWIdjDdJJ-b",
        "hasOldPasswordHash": false,
        "_id": "5d1363adf599d850df93175e",
        "phoneNumbers": [
          {
            "active": true,
            "primary": true,
            "verified": true,
            "countryCode": 91,
            "phone": "9890425946"
          }
        ],
        "firstName": "Nikhil",
        "lastName": "Manapure",
        "emails": [
          {
            "active": true,
            "primary": true,
            "verified": true,
            "email": "nikhilmshchs@gmail.com"
          }
        ],
        "username": "nikhilmshchs_gmail_com_38425_20500281",
        "createdAt": "2019-01-01T17:22:38.528Z",
        "updatedAt": "2021-01-22T10:02:42.258Z",
        "uid": "20500281",
        "__v": 56
      }
    },
    "response_id": "6012f38457751e0fb8162cf6",
    "category": {
      "form": {
        "login_required": false,
        "should_notify": false,
        "inputs": [
          {
            "required": false,
            "type": "text",
            "enum": [],
            "display": "Single lineeee",
            "key": "single-lineeee",
            "showRegexInput": false
          },
          {
            "required": false,
            "type": "email",
            "enum": [],
            "display": "Email",
            "regex": "\\S+@\\S+\\.\\S+",
            "key": "email",
            "showRegexInput": true
          },
          {
            "required": false,
            "type": "text",
            "enum": [],
            "display": "dfsdf",
            "key": "dfsdf",
            "showRegexInput": false
          }
        ],
        "available_assignees": [
          "5b9b98150df588546aaea6d2",
          "5c45d78395d7504f76c2cb37"
        ],
        "_id": "5fd72db3dc250f8decfc61b2",
        "title": "SOme title",
        "description": "SOme big description",
        "slug": "some-title",
        "application_id": "000000000000000000000003",
        "created_on": {
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36",
          "platform": "web",
          "meta": {
            "browser": {
              "name": "Chrome",
              "version": "87.0.4280.88"
            },
            "os": {
              "name": "macOS",
              "version": "10.15.6",
              "versionName": "Catalina"
            },
            "platform": {
              "type": "desktop",
              "vendor": "Apple"
            },
            "engine": {
              "name": "Blink"
            }
          }
        },
        "created_by": "5d1363adf599d850df93175e",
        "createdAt": "2020-12-14T09:17:39.953Z",
        "updatedAt": "2021-01-28T18:48:07.717Z",
        "__v": 0
      },
      "key": "some-title",
      "display": "SOme title"
    },
    "ticket_id": "43",
    "createdAt": "2021-01-28T17:25:25.013Z",
    "updatedAt": "2021-01-28T17:25:33.396Z",
    "__v": 0,
    "video_room_id": "6012f38557751ee8fc162cf7"
  }
}
```








Error Response:



---


#### Lead#getCustomForm
Get specific Custom Form using it's slug

```javascript
// Promise
const promise = lead.getCustomForm(slug, );

// Async/Await
const data = await lead.getCustomForm(slug, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | Slug of form whose response is getting submitted | 

Get specific Custom Form using it's slug, this is used to view the form.

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/CustomForm"
}`


Examples: 


Default
```javascript
{
  "value": {
    "login_required": false,
    "should_notify": false,
    "inputs": [
      {
        "required": false,
        "type": "text",
        "display": "Name",
        "placeholder": "Please enter your name",
        "key": "name"
      }
    ],
    "available_assignees": [],
    "_id": "5fd258a9088f957f34c288fc",
    "title": "trail form",
    "description": "Trail form description",
    "slug": "trail-form",
    "application_id": "000000000000000000000003",
    "created_on": {
      "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36",
      "platform": "web",
      "meta": {
        "browser": {
          "name": "Chrome",
          "version": "87.0.4280.88"
        },
        "os": {
          "name": "macOS",
          "version": "10.15.6",
          "versionName": "Catalina"
        },
        "platform": {
          "type": "desktop",
          "vendor": "Apple"
        },
        "engine": {
          "name": "Blink"
        }
      }
    },
    "created_by": "5d1363adf599d850df93175e",
    "createdAt": "2020-12-10T17:19:37.515Z",
    "updatedAt": "2020-12-10T17:19:43.214Z",
    "__v": 0
  }
}
```








Error Response:



---


#### Lead#submitCustomForm
Submit Response for a specific Custom Form using it's slug

```javascript
// Promise
const promise = lead.submitCustomForm(slug, );

// Async/Await
const data = await lead.submitCustomForm(slug, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | Slug of form whose response is getting submitted | 

Submit Response for a specific Custom Form using it's slug, this response is then used to create a ticket on behalf of the user.

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/SubmitCustomFormResponse"
}`


Examples: 


Default
```javascript
{
  "value": {
    "ticket": {
      "context": {
        "application_id": "000000000000000000000003",
        "company_id": "884"
      },
      "content": {
        "title": "SOme title Response",
        "description": "<b>Single lineeee</b>: asdf<br><b>Email</b>: asdf@asdf.com<br><b>dfsdf</b>: asdf<br>",
        "attachments": []
      },
      "status": {
        "display": "In Progress",
        "color": "#ffa951",
        "key": "in_progress"
      },
      "priority": {
        "display": "Medium",
        "color": "#f37736",
        "key": "medium"
      },
      "assigned_to": {
        "agent_id": "5d1363adf599d850df93175e",
        "gender": "male",
        "accountType": "user",
        "active": true,
        "profilePicUrl": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2136700473091190&height=400&width=400&ext=1554542761&hash=AeS6cuWIdjDdJJ-b",
        "hasOldPasswordHash": false,
        "_id": "5d1363adf599d850df93175e",
        "phoneNumbers": [
          {
            "active": true,
            "primary": true,
            "verified": true,
            "countryCode": 91,
            "phone": "9890425946"
          }
        ],
        "firstName": "Nikhil",
        "lastName": "Manapure",
        "emails": [
          {
            "active": true,
            "primary": true,
            "verified": true,
            "email": "nikhilmshchs@gmail.com"
          }
        ],
        "username": "nikhilmshchs_gmail_com_38425_20500281",
        "createdAt": "2019-01-01T17:22:38.528Z",
        "updatedAt": "2021-01-22T10:02:42.258Z",
        "uid": "20500281",
        "__v": 56
      },
      "tags": [
        "some-title"
      ],
      "_id": "6012f38557751ee8fc162cf7",
      "created_on": {
        "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36",
        "platform": "web",
        "meta": {
          "browser": {
            "name": "Chrome",
            "version": "88.0.4324.96"
          },
          "os": {
            "name": "macOS",
            "version": "10.15.7",
            "versionName": "Catalina"
          },
          "platform": {
            "type": "desktop",
            "vendor": "Apple"
          },
          "engine": {
            "name": "Blink"
          }
        }
      },
      "source": "sales_channel",
      "created_by": {
        "id": "5d1363adf599d850df93175e",
        "user": {
          "gender": "male",
          "accountType": "user",
          "active": true,
          "profilePicUrl": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2136700473091190&height=400&width=400&ext=1554542761&hash=AeS6cuWIdjDdJJ-b",
          "hasOldPasswordHash": false,
          "_id": "5d1363adf599d850df93175e",
          "phoneNumbers": [
            {
              "active": true,
              "primary": true,
              "verified": true,
              "countryCode": 91,
              "phone": "9890425946"
            }
          ],
          "firstName": "Nikhil",
          "lastName": "Manapure",
          "emails": [
            {
              "active": true,
              "primary": true,
              "verified": true,
              "email": "nikhilmshchs@gmail.com"
            }
          ],
          "username": "nikhilmshchs_gmail_com_38425_20500281",
          "createdAt": "2019-01-01T17:22:38.528Z",
          "updatedAt": "2021-01-22T10:02:42.258Z",
          "uid": "20500281",
          "__v": 56
        }
      },
      "response_id": "6012f38457751e0fb8162cf6",
      "category": {
        "form": {
          "login_required": false,
          "should_notify": false,
          "inputs": [
            {
              "required": false,
              "type": "text",
              "enum": [],
              "display": "Single lineeee",
              "key": "single-lineeee",
              "showRegexInput": false
            },
            {
              "required": false,
              "type": "email",
              "enum": [],
              "display": "Email",
              "regex": "\\S+@\\S+\\.\\S+",
              "key": "email",
              "showRegexInput": true
            },
            {
              "required": false,
              "type": "text",
              "enum": [],
              "display": "dfsdf",
              "key": "dfsdf",
              "showRegexInput": false
            }
          ],
          "available_assignees": [
            "5b9b98150df588546aaea6d2",
            "5c45d78395d7504f76c2cb37"
          ],
          "_id": "5fd72db3dc250f8decfc61b2",
          "title": "SOme title",
          "description": "SOme big description",
          "slug": "some-title",
          "application_id": "000000000000000000000003",
          "created_on": {
            "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36",
            "platform": "web",
            "meta": {
              "browser": {
                "name": "Chrome",
                "version": "87.0.4280.88"
              },
              "os": {
                "name": "macOS",
                "version": "10.15.6",
                "versionName": "Catalina"
              },
              "platform": {
                "type": "desktop",
                "vendor": "Apple"
              },
              "engine": {
                "name": "Blink"
              }
            }
          },
          "created_by": "5d1363adf599d850df93175e",
          "createdAt": "2020-12-14T09:17:39.953Z",
          "updatedAt": "2021-01-28T18:48:07.717Z",
          "__v": 0
        },
        "key": "some-title",
        "display": "SOme title"
      },
      "ticket_id": "43",
      "createdAt": "2021-01-28T17:25:25.013Z",
      "updatedAt": "2021-01-28T17:25:33.396Z",
      "__v": 0,
      "video_room_id": "6012f38557751ee8fc162cf7"
    }
  }
}
```








Error Response:



---


#### Lead#getParticipantsInsideVideoRoom
Get participants of a specific Video Room using it's unique name

```javascript
// Promise
const promise = lead.getParticipantsInsideVideoRoom(unique_name, );

// Async/Await
const data = await lead.getParticipantsInsideVideoRoom(unique_name, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| unique_name | string | Unique name of Video Room | 

Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names.

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/GetParticipantsInsideVideoRoomResponse"
}`


Examples: 


Default
```javascript
{
  "value": {
    "participants": []
  }
}
```








Error Response:



---


#### Lead#getTokenForVideoRoom
Get Token to join a specific Video Room using it's unqiue name

```javascript
// Promise
const promise = lead.getTokenForVideoRoom(unique_name, );

// Async/Await
const data = await lead.getTokenForVideoRoom(unique_name, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| unique_name | string | Unique name of Video Room | 

Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there.

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/GetTokenForVideoRoomResponse"
}`


Examples: 


Default
```javascript
{
  "value": {
    "access_token": "your_token_to_the_room"
  }
}
```








Error Response:



---



---


## Share

```javascript
const { Configuration, Share } = require('fdk-client-nodejs/application')
const conf = new Configuration({
    ApplicationID: "507f191e810c19729de860ea",
    ApplicationToken: "hu67dfhddf"
});
const share = new Share(conf);

```


#### Share#getApplicationQRCode
Create application QR Code

```javascript
// Promise
const promise = share.getApplicationQRCode();

// Async/Await
const data = await share.getApplicationQRCode();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Create application QR Code

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/QRCodeResp"
}`








Error Response:



---


#### Share#getProductQRCodeBySlug
Create product QR Code

```javascript
// Promise
const promise = share.getProductQRCodeBySlug(slug, );

// Async/Await
const data = await share.getProductQRCodeBySlug(slug, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | The unique identifier of a product | 

Create product QR Code

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/QRCodeResp"
}`








Error Response:



---


#### Share#getCollectionQRCodeBySlug
Create collection QR Code

```javascript
// Promise
const promise = share.getCollectionQRCodeBySlug(slug, );

// Async/Await
const data = await share.getCollectionQRCodeBySlug(slug, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | The unique identifier of a collection | 

Create collection QR Code

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/QRCodeResp"
}`








Error Response:



---


#### Share#getUrlQRCode
Create url QR Code

```javascript
// Promise
const promise = share.getUrlQRCode(url, );

// Async/Await
const data = await share.getUrlQRCode(url, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| url | string | Url | 

Create url QR Code

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/QRCodeResp"
}`








Error Response:



---


#### Share#createShortLink
Create short link

```javascript
// Promise
const promise = share.createShortLink();

// Async/Await
const data = await share.createShortLink();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Create short link

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ShortLinkRes"
}`








Error Response:



---


#### Share#getShortLinkByHash
Get short link by hash

```javascript
// Promise
const promise = share.getShortLinkByHash(hash, );

// Async/Await
const data = await share.getShortLinkByHash(hash, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| hash | string | Hash of short link | 

Get short link by hash

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ShortLinkRes"
}`








Error Response:



---


#### Share#getOriginalShortLinkByHash
Get original link by hash

```javascript
// Promise
const promise = share.getOriginalShortLinkByHash(hash, );

// Async/Await
const data = await share.getOriginalShortLinkByHash(hash, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| hash | string | Hash of short link | 

Get original link by hash

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ShortLinkRes"
}`








Error Response:



---



---


---
---
