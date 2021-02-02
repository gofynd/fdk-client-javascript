# FDK API Classes


* [Catalog](#Catalog) - Open API leverages Fynd&#39;s real-time inventory integration with over 400+ brands &amp; 8000+ stores and makes it easy for developers and businesses to build a full fledged omni-channel fashion e-commerce app. 
* [Cart](#Cart) - Open API leverages Fynd&#39;s real-time inventory integration with over 200+ brands &amp; 8000+ stores and makes it easy for developers and businesses to build a full fledged omni-channel fashion e-commerce app. 
* [Lead](#Lead) - Handles communication between Administrator &lt;-&gt; Staff and Staff &lt;-&gt; Users 

----
----



## Catalog

```javascript
const { Configuration, Catalog } = require('fdk-client-nodejs/application')
const conf = new Configuration({
    ApplicationID: "507f191e810c19729de860ea",
    ApplicationToken: "hu67dfhddf"
});
const catalog = new Catalog(conf);

```

### Methods

* [Catalog#getProducts](#cataloggetproducts)
* [Catalog#getProductDetailByIdentifier](#cataloggetproductdetailbyidentifier)
* [Catalog#getProductSizesByIdentifier](#cataloggetproductsizesbyidentifier)
* [Catalog#getProductPriceByIdentifier](#cataloggetproductpricebyidentifier)
* [Catalog#getProductSellersByIdentifier](#cataloggetproductsellersbyidentifier)
* [Catalog#getProductSimilarByIdentifier](#cataloggetproductsimilarbyidentifier)
* [Catalog#getProductVariantsByIdentifier](#cataloggetproductvariantsbyidentifier)
* [Catalog#getProductStockByIdentifier](#cataloggetproductstockbyidentifier)
* [Catalog#getProductStockForTimeByIdentifier](#cataloggetproductstockfortimebyidentifier)
* [Catalog#getBrands](#cataloggetbrands)
* [Catalog#getBrandDetailByIdentifier](#cataloggetbranddetailbyidentifier)
* [Catalog#getCategories](#cataloggetcategories)
* [Catalog#getCategoryDetailByIdentifier](#cataloggetcategorydetailbyidentifier)
* [Catalog#getHomeProducts](#cataloggethomeproducts)
* [Catalog#](#catalog)
* [Catalog#getSearchResults](#cataloggetsearchresults)
* [Catalog#getCollections](#cataloggetcollections)
* [Catalog#getCollectionItemsBySlug](#cataloggetcollectionitemsbyslug)
* [Catalog#getCollectionDetailBySlug](#cataloggetcollectiondetailbyslug)
* [Catalog#getFollowProducts](#cataloggetfollowproducts)
* [Catalog#unfollowProductById](#catalogunfollowproductbyid)
* [Catalog#saveFollowProductById](#catalogsavefollowproductbyid)
* [Catalog#getFollowProductCountById](#cataloggetfollowproductcountbyid)
* [Catalog#getFollowIDsByType](#cataloggetfollowidsbytype)


#### Catalog#getProducts
List the products

```javascript
// Promise
const promise = catalog.getProducts(q, category, brand, sort_on, page_id, page_size, opts);

// Async/Await
const data = await catalog.getProducts(q, category, brand, sort_on, page_id, page_size, opts);

```

| Argument  |  Type  | About |
| --------- | ----  | --- |
| q | string |  | 
| category | string |  | 
| brand | string |  | 
| sort_on | string |  | 
| page_id | string |  | 
| page_size | integer |  | 

List all the products associated with a brand, collection or category in a requested sort order. The API additionally supports arbitrary search queries that may refer the name of any product, brand, category or collection. If successful, returns a paginated list of products specified in `ProductSearchSchemaV1`

---


#### Catalog#getProductDetailByIdentifier
Get a product

```javascript
// Promise
const promise = catalog.getProductDetailByIdentifier(id, slug, opts);

// Async/Await
const data = await catalog.getProductDetailByIdentifier(id, slug, opts);

```

| Argument  |  Type  | About |
| --------- | ----  | --- |
| id | string |  | 
| slug | string |  | 

Products are the core resource of an application. Products can be associated by categories, collections, brands and more. This API retrieves the product specified by the given **identifier**. If successful, returns a Product resource in the response body specified in `ProductDetailSchemaV1`

---


#### Catalog#getProductSizesByIdentifier
Get the sizes of a product

```javascript
// Promise
const promise = catalog.getProductSizesByIdentifier(id, slug, store, opts);

// Async/Await
const data = await catalog.getProductSizesByIdentifier(id, slug, store, opts);

```

| Argument  |  Type  | About |
| --------- | ----  | --- |
| id | string |  | 
| slug | string |  | 
| store | string |  | 

A product can exist in multiple sizes. Use this API to fetch all the available sizes of a product. If successful, returns a ProductSize object in the response body as specified in `ProductSizesSchemaV1`

---


#### Catalog#getProductPriceByIdentifier
Get price a product

```javascript
// Promise
const promise = catalog.getProductPriceByIdentifier(id, slug, size, pincode, store, opts);

// Async/Await
const data = await catalog.getProductPriceByIdentifier(id, slug, size, pincode, store, opts);

```

| Argument  |  Type  | About |
| --------- | ----  | --- |
| id | string |  | 
| slug | string |  | 
| size | string |  | 
| pincode | integer |  | 
| store | string |  | 

Any available product can exist in multiple sizes. Sometimes prices may vary among different sizes of the same product. Use this API to retrieve the price of the product of a particular size.

---


#### Catalog#getProductSellersByIdentifier
List sellers of a product

```javascript
// Promise
const promise = catalog.getProductSellersByIdentifier(id, slug, size, pincode, page_no, page_size, opts);

// Async/Await
const data = await catalog.getProductSellersByIdentifier(id, slug, size, pincode, page_no, page_size, opts);

```

| Argument  |  Type  | About |
| --------- | ----  | --- |
| id | string |  | 
| slug | string |  | 
| size | string |  | 
| pincode | integer |  | 
| page_no | integer |  | 
| page_size | integer |  | 

A product of a particular size can be sold by multiple sellers. Use this API to fetch the sellers who are selling this product and have the stock of a particular size

---


#### Catalog#getProductSimilarByIdentifier
Get similar products

```javascript
// Promise
const promise = catalog.getProductSimilarByIdentifier(id, slug, tag_identifier, opts);

// Async/Await
const data = await catalog.getProductSimilarByIdentifier(id, slug, tag_identifier, opts);

```

| Argument  |  Type  | About |
| --------- | ----  | --- |
| id | string |  | 
| slug | string |  | 
| tag_identifier | string |  | 

Get products similar to the one specified by the `identifier`. If successful, it returns a group of similar products based on tag as described in `SimilarProductByTagSchemaV1`

---


#### Catalog#getProductVariantsByIdentifier
Get variant of a particular product

```javascript
// Promise
const promise = catalog.getProductVariantsByIdentifier(id, slug, opts);

// Async/Await
const data = await catalog.getProductVariantsByIdentifier(id, slug, opts);

```

| Argument  |  Type  | About |
| --------- | ----  | --- |
| id | string |  | 
| slug | string |  | 

A product can have a different type of variants varies from color to shade etc. Use this API to fetch all the available variants of a product. If successful, returns a Products for different variants type in the response body as specified in `ProductVariantSchemaV1`

---


#### Catalog#getProductStockByIdentifier
Get the stock of a product

```javascript
// Promise
const promise = catalog.getProductStockByIdentifier(item_id, alu, sku_code, ean, upc, opts);

// Async/Await
const data = await catalog.getProductStockByIdentifier(item_id, alu, sku_code, ean, upc, opts);

```

| Argument  |  Type  | About |
| --------- | ----  | --- |
| item_id | string |  | 
| alu | string |  | 
| sku_code | string |  | 
| ean | string |  | 
| upc | string |  | 

Retrieve the available stock of the products. You can use this API to retrieve stock of multiple products at a time. Currently a maximum of 50 distinct product IDs can be given in a single API request

---


#### Catalog#getProductStockForTimeByIdentifier
Get the stock of a product

```javascript
// Promise
const promise = catalog.getProductStockForTimeByIdentifier(timestamp, page_size, page_id, opts);

// Async/Await
const data = await catalog.getProductStockForTimeByIdentifier(timestamp, page_size, page_id, opts);

```

| Argument  |  Type  | About |
| --------- | ----  | --- |
| timestamp | string |  | 
| page_size | integer |  | 
| page_id | string |  | 

Retrieve the available stock of the products. You can use this api to get stock status of products whose inventory is updated in given time

---


#### Catalog#getBrands
List all the brands

```javascript
// Promise
const promise = catalog.getBrands(department, page_no, page_size, opts);

// Async/Await
const data = await catalog.getBrands(department, page_no, page_size, opts);

```

| Argument  |  Type  | About |
| --------- | ----  | --- |
| department | string |  | 
| page_no | integer |  | 
| page_size | integer |  | 

A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingSchemaV1`

---


#### Catalog#getBrandDetailByIdentifier
Get metadata of a brand

```javascript
// Promise
const promise = catalog.getBrandDetailByIdentifier(id, slug, opts);

// Async/Await
const data = await catalog.getBrandDetailByIdentifier(id, slug, opts);

```

| Argument  |  Type  | About |
| --------- | ----  | --- |
| id | string |  | 
| slug | string |  | 

Fetch metadata of a brand. If successful, returns a metadata object specified in `BrandMetaV1`

---


#### Catalog#getCategories
List all the categories

```javascript
// Promise
const promise = catalog.getCategories(department, opts);

// Async/Await
const data = await catalog.getCategories(department, opts);

```

| Argument  |  Type  | About |
| --------- | ----  | --- |
| department | string |  | 

List all the categories. You can optionally pass filter the brands by the department. If successful, returns a paginated list of brands specified in `CategoryListingSchemaV1`

---


#### Catalog#getCategoryDetailByIdentifier
Get metadata of a category

```javascript
// Promise
const promise = catalog.getCategoryDetailByIdentifier(id, slug, opts);

// Async/Await
const data = await catalog.getCategoryDetailByIdentifier(id, slug, opts);

```

| Argument  |  Type  | About |
| --------- | ----  | --- |
| id | string |  | 
| slug | string |  | 

Fetch metadata of a category. If successful, returns a metadata object specified in `CategoryMetaV1`

---


#### Catalog#getHomeProducts
List the products

```javascript
// Promise
const promise = catalog.getHomeProducts(f.session, sort_on, page_id, page_size, opts);

// Async/Await
const data = await catalog.getHomeProducts(f.session, sort_on, page_id, page_size, opts);

```

| Argument  |  Type  | About |
| --------- | ----  | --- |
| f.session | string |  | 
| sort_on | string |  | 
| page_id | string |  | 
| page_size | integer |  | 

List all the products associated with a brand, collection or category in a random order. If successful, returns a paginated list of products specified in `HomeListingSchemaV1`

---


#### Catalog#
List all the departments

```javascript
// Promise
const promise = catalog.(opts);

// Async/Await
const data = await catalog.(opts);

```

| Argument  |  Type  | About |
| --------- | ----  | --- |

Departments are a way to categorise similar products. A product can lie in multiple departments. For example, a skirt can below to the &#39;Women&#39;s Fashion&#39; Department while a handbag can lie in &#39;Women&#39;s Accessories&#39; Department. Use this API to list all the departments. If successful, returns the list of departments specified in `DepartmentSchemaV1`

---


#### Catalog#getSearchResults
Get relevant suggestions for a search query

```javascript
// Promise
const promise = catalog.getSearchResults(q, opts);

// Async/Await
const data = await catalog.getSearchResults(q, opts);

```

| Argument  |  Type  | About |
| --------- | ----  | --- |
| q | string |  | 

Retrieves a list of suggestions for a given search query. Each suggestion is a valid search term that&#39;s generated on the basis of what is given in query. This is particularly useful to enhance the user experience in search. The given search query can be a partial name of any product, brand and category. For example, if the given search query `q` is _ski_ the relevant search suggestions returned might be a list containing _skirt_, _ski shoes_, __skin cream_ etc.

---


#### Catalog#getCollections
List all the collections

```javascript
// Promise
const promise = catalog.getCollections(opts);

// Async/Await
const data = await catalog.getCollections(opts);

```

| Argument  |  Type  | About |
| --------- | ----  | --- |

A Collection allows you to organize your products into hierarchical groups. For example, a dress might be in the category _Clothing_, the individual product might also be in the collection _Summer_. On successful request, returns all the collections`

---


#### Catalog#getCollectionItemsBySlug
Get the items in a collection

```javascript
// Promise
const promise = catalog.getCollectionItemsBySlug(slug, opts);

// Async/Await
const data = await catalog.getCollectionItemsBySlug(slug, opts);

```

| Argument  |  Type  | About |
| --------- | ----  | --- |
| slug | string |  | 

Get items in a collection specified by its `slug`.

---


#### Catalog#getCollectionDetailBySlug
Get a particular collection

```javascript
// Promise
const promise = catalog.getCollectionDetailBySlug(slug, opts);

// Async/Await
const data = await catalog.getCollectionDetailBySlug(slug, opts);

```

| Argument  |  Type  | About |
| --------- | ----  | --- |
| slug | string |  | 

Get the details of a collection by its `slug`. If successful, returns a Collection resource in the response body specified in `CollectionResponseV1`

---


#### Catalog#getFollowProducts
Get a list of followed Products

```javascript
// Promise
const promise = catalog.getFollowProducts(f.session, opts);

// Async/Await
const data = await catalog.getFollowProducts(f.session, opts);

```

| Argument  |  Type  | About |
| --------- | ----  | --- |
| f.session | string |  | 

A User can follow a Product they like. This API retrieves the products the user have followed. If successful, returns a Followed resource in the response body specified in `GetFollowResponseSchema`

---


#### Catalog#unfollowProductById
UnFollow a Product

```javascript
// Promise
const promise = catalog.unfollowProductById(product_id, f.session, opts);

// Async/Await
const data = await catalog.unfollowProductById(product_id, f.session, opts);

```

| Argument  |  Type  | About |
| --------- | ----  | --- |
| product_id | string |  | 
| f.session | string |  | 

You can undo a followed Product or Brand by its uid, we refer this action as _unfollow_. Pass the uid of the product in request URL

---


#### Catalog#saveFollowProductById
Follow a particular Product

```javascript
// Promise
const promise = catalog.saveFollowProductById(product_id, f.session, opts);

// Async/Await
const data = await catalog.saveFollowProductById(product_id, f.session, opts);

```

| Argument  |  Type  | About |
| --------- | ----  | --- |
| product_id | integer |  | 
| f.session | string |  | 

Follow a particular Product specified by its uid. Pass the uid of the product in request URL

---


#### Catalog#getFollowProductCountById
Get Follow Count

```javascript
// Promise
const promise = catalog.getFollowProductCountById(collection_type, collection_id, opts);

// Async/Await
const data = await catalog.getFollowProductCountById(collection_type, collection_id, opts);

```

| Argument  |  Type  | About |
| --------- | ----  | --- |
| collection_type | string |  | 
| collection_id | string |  | 

Get count of followers for given collection type and collection id.

---


#### Catalog#getFollowIDsByType
Get the Uids of followed product, brand and collection.

```javascript
// Promise
const promise = catalog.getFollowIDsByType(opts);

// Async/Await
const data = await catalog.getFollowIDsByType(opts);

```

| Argument  |  Type  | About |
| --------- | ----  | --- |

You can get the uids of all the followed Product, Brand and Collections.

---



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

### Methods

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


#### Cart#getCart
Fetch all Items Added to  Cart

```javascript
// Promise
const promise = cart.getCart(uid, assign_card_id, x-application-id, x-application-token, x-currency-code, opts);

// Async/Await
const data = await cart.getCart(uid, assign_card_id, x-application-id, x-application-token, x-currency-code, opts);

```

| Argument  |  Type  | About |
| --------- | ----  | --- |
| uid | integer | unique identification number of cart affiliate | 
| assign_card_id | integer | assign card id | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

Get all the details of a items added to cart  by uid. If successful, returns a Cart resource in the response body specified in GetCartV1Serializer

---


#### Cart#getCartLastModified
Fetch Last-Modified timestamp

```javascript
// Promise
const promise = cart.getCartLastModified(uid, x-application-id, x-application-token, x-currency-code, opts);

// Async/Await
const data = await cart.getCartLastModified(uid, x-application-id, x-application-token, x-currency-code, opts);

```

| Argument  |  Type  | About |
| --------- | ----  | --- |
| uid | integer | unique identification number of cart affiliate | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

Fetch Last-Modified timestamp in header metadata

---


#### Cart#addItemsToCart
Add Items to Cart

```javascript
// Promise
const promise = cart.addItemsToCart(x-application-id, x-application-token, x-currency-code, opts);

// Async/Await
const data = await cart.addItemsToCart(x-application-id, x-application-token, x-currency-code, opts);

```

| Argument  |  Type  | About |
| --------- | ----  | --- |
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

&lt;p&gt;Add Items to cart. See `CartV1Serializer` in schema of request body for the list of attributes needed to add items to a cart. On successful request, returns cart response containing details of items ,coupons available etc.these attributes will be fetched from the folowing api&#39;s&lt;/p&gt; &lt;ul&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;item_id&lt;/font&gt;  &quot;/platform/content/v1/products/&quot;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;item_size&lt;/font&gt;   &quot;/platform/content/v1/products/{slug}/sizes/&quot;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;seller_id&lt;/font&gt;  &quot;/platform/content/v1/products/{slug}/sizes/price&quot;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;store_id&lt;/font&gt;  &quot;/platform/content/v1/products/{slug}/sizes/price&quot;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;quantity&lt;/font&gt;  item quantity (must be greater than or equal to 1)&lt;/li&gt; &lt;/ul&gt;

---


#### Cart#updateCart
Update Items already added to Cart

```javascript
// Promise
const promise = cart.updateCart(x-application-id, x-application-token, x-currency-code, opts);

// Async/Await
const data = await cart.updateCart(x-application-id, x-application-token, x-currency-code, opts);

```

| Argument  |  Type  | About |
| --------- | ----  | --- |
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

Request object containing attributes like item_quantity and item_size which can be updated .these attributes will be fetched from the folowing api&#39;s&lt;/p&gt; &lt;ul&gt; &lt;li&gt;&lt;font color=&quot;monochrome&quot;&gt;operation&lt;/font&gt; Operation for current api call. &lt;b&gt;update_item&lt;/b&gt; for update items. &lt;b&gt;remove_item&lt;/b&gt; for removing items.&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;item_id&lt;/font&gt;  &quot;/platform/content/v1/products/&quot;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;item_size&lt;/font&gt;   &quot;/platform/content/v1/products/{slug}/sizes/&quot;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;quantity&lt;/font&gt;  item quantity (must be greater than or equal to 1)&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;article_id&lt;/font&gt;   &quot;/content​/v1​/products​/{identifier}​/sizes​/price​/&quot;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;item_index&lt;/font&gt;  item position in the cart (must be greater than or equal to 0)&lt;/li&gt; &lt;/ul&gt;

---


#### Cart#getCartItemCount
Cart item count

```javascript
// Promise
const promise = cart.getCartItemCount(uid, x-application-id, x-application-token, x-currency-code, opts);

// Async/Await
const data = await cart.getCartItemCount(uid, x-application-id, x-application-token, x-currency-code, opts);

```

| Argument  |  Type  | About |
| --------- | ----  | --- |
| uid | integer |  | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

Get total count of item present in cart

---


#### Cart#getCouponList
Fetch Coupon

```javascript
// Promise
const promise = cart.getCouponList(uid, x-application-id, x-application-token, x-currency-code, opts);

// Async/Await
const data = await cart.getCouponList(uid, x-application-id, x-application-token, x-currency-code, opts);

```

| Argument  |  Type  | About |
| --------- | ----  | --- |
| uid | integer | unique identification number of cart affiliate | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

Get all the details of a coupons applicable to cart  by uid. If successful, returns a Coupon resource in the response body specified in GetCouponResponseSchema

---


#### Cart#applyCoupon
Apply Coupon

```javascript
// Promise
const promise = cart.applyCoupon(i, b, p, x-application-id, x-application-token, x-currency-code, opts);

// Async/Await
const data = await cart.applyCoupon(i, b, p, x-application-id, x-application-token, x-currency-code, opts);

```

| Argument  |  Type  | About |
| --------- | ----  | --- |
| i | boolean | items | 
| b | boolean | breakups | 
| p | boolean | payment | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

&lt;p&gt;Apply Coupons on Items added to cart. On successful request, returns cart response containing details of items ,coupons applied etc.these attributes will be consumed by  api&lt;/p&gt; &lt;ul&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;coupon_code&lt;/font&gt;&lt;/li&gt;
&lt;/ul&gt;

---


#### Cart#removeCoupon
Remove Coupon Applied

```javascript
// Promise
const promise = cart.removeCoupon(uid, x-application-id, x-application-token, x-currency-code, opts);

// Async/Await
const data = await cart.removeCoupon(uid, x-application-id, x-application-token, x-currency-code, opts);

```

| Argument  |  Type  | About |
| --------- | ----  | --- |
| uid | integer |  | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

Remove Coupon applied on the cart by passing uid in request body.

---


#### Cart#getBulkDiscountOffers
Get discount offers based on quantity

```javascript
// Promise
const promise = cart.getBulkDiscountOffers(item_id, article_id, uid, slug, x-application-id, x-application-token, x-currency-code, opts);

// Async/Await
const data = await cart.getBulkDiscountOffers(item_id, article_id, uid, slug, x-application-id, x-application-token, x-currency-code, opts);

```

| Argument  |  Type  | About |
| --------- | ----  | --- |
| item_id | integer |  | 
| article_id | string |  | 
| uid | integer |  | 
| slug | string |  | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

List applicable offers along with current, next and best offer for given product. Either one of **uid**, **item_id**, **slug** should be present*

---


#### Cart#getAddressList
Fetch Address

```javascript
// Promise
const promise = cart.getAddressList(uid, mobile_no, checkout_mode, tags, default, x-application-id, x-application-token, x-currency-code, opts);

// Async/Await
const data = await cart.getAddressList(uid, mobile_no, checkout_mode, tags, default, x-application-id, x-application-token, x-currency-code, opts);

```

| Argument  |  Type  | About |
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

---


#### Cart#addAddress
Add Address to the account

```javascript
// Promise
const promise = cart.addAddress(x-application-id, x-application-token, x-currency-code, opts);

// Async/Await
const data = await cart.addAddress(x-application-id, x-application-token, x-currency-code, opts);

```

| Argument  |  Type  | About |
| --------- | ----  | --- |
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

&lt;p&gt;Add Address to account. See `SaveAddressRequestSchema` in schema of request body for the list of attributes needed to add Address to account. On successful request, returns response containing address_id ,is_default_address and success message.

---


#### Cart#getAddressById
Fetch Single Address

```javascript
// Promise
const promise = cart.getAddressById(id, uid, mobile_no, checkout_mode, tags, default, x-application-id, x-application-token, x-currency-code, opts);

// Async/Await
const data = await cart.getAddressById(id, uid, mobile_no, checkout_mode, tags, default, x-application-id, x-application-token, x-currency-code, opts);

```

| Argument  |  Type  | About |
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

---


#### Cart#updateAddress
Update Address alreay added to account

```javascript
// Promise
const promise = cart.updateAddress(id, x-application-id, x-application-token, x-currency-code, opts);

// Async/Await
const data = await cart.updateAddress(id, x-application-id, x-application-token, x-currency-code, opts);

```

| Argument  |  Type  | About |
| --------- | ----  | --- |
| id | integer |  | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

Request object containing attributes mentioned in  &lt;font color=&quot;blue&quot;&gt;UpdateAddressRequestSchema &lt;/font&gt; can be updated .these attributes are :&lt;/p&gt; &lt;ul&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;is_default_address&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;landmark&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;area&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;pincode&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;email&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;address_type&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;name&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;address_id&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;address&lt;/font&gt;&lt;/li&gt; &lt;/ul&gt;

---


#### Cart#removeAddress
Remove Address Associated to the account

```javascript
// Promise
const promise = cart.removeAddress(id, x-application-id, x-application-token, x-currency-code, opts);

// Async/Await
const data = await cart.removeAddress(id, x-application-id, x-application-token, x-currency-code, opts);

```

| Argument  |  Type  | About |
| --------- | ----  | --- |
| id | integer |  | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

Delete a Address by it&#39;s address_id. Returns an object that tells whether the address was deleted successfully

---


#### Cart#selectCartAddress
Select Address from All Addresses

```javascript
// Promise
const promise = cart.selectCartAddress(x-application-id, x-application-token, x-currency-code, opts);

// Async/Await
const data = await cart.selectCartAddress(x-application-id, x-application-token, x-currency-code, opts);

```

| Argument  |  Type  | About |
| --------- | ----  | --- |
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

&lt;p&gt;Select Address from all addresses associated with the account in order to ship the cart items to .that address,otherwise default address will be selected implicitly. See `SelectCartAddressRequestSchema` in schema of request body for the list of attributes needed to select Address from account. On successful request, returns Cart object response.below are the address attributes which needs to be sent. &lt;ul&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;address_id&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;billing_address_id&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;uid&lt;/font&gt;&lt;/li&gt; &lt;/ul&gt;

---


#### Cart#getCartPaymentModes
Gte Cart Payment for valid coupon

```javascript
// Promise
const promise = cart.getCartPaymentModes(uid, address_id, payment_mode, payment_identifier, aggregator_name, merchant_code, x-application-id, x-application-token, x-currency-code, opts);

// Async/Await
const data = await cart.getCartPaymentModes(uid, address_id, payment_mode, payment_identifier, aggregator_name, merchant_code, x-application-id, x-application-token, x-currency-code, opts);

```

| Argument  |  Type  | About |
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

---


#### Cart#selectCartPaymentMode
Update Cart Payment

```javascript
// Promise
const promise = cart.selectCartPaymentMode(uid, x-application-id, x-application-token, x-currency-code, opts);

// Async/Await
const data = await cart.selectCartPaymentMode(uid, x-application-id, x-application-token, x-currency-code, opts);

```

| Argument  |  Type  | About |
| --------- | ----  | --- |
| uid | string | unique identification number | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

Update Cart Payment for Your Account

---


#### Cart#getCartShipments
Get delivery date and options before checkout

```javascript
// Promise
const promise = cart.getCartShipments(p, uid, address_id, x-application-id, x-application-token, x-currency-code, opts);

// Async/Await
const data = await cart.getCartShipments(p, uid, address_id, x-application-id, x-application-token, x-currency-code, opts);

```

| Argument  |  Type  | About |
| --------- | ----  | --- |
| p | boolean |  | 
| uid | integer |  | 
| address_id | integer |  | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

Shipment break up item wise with delivery date. Actual                      delivery will be during given dates only. Items will be                      delivered in group of shipments created.

---


#### Cart#checkoutCart
Checkout Cart

```javascript
// Promise
const promise = cart.checkoutCart(x-application-id, x-application-token, x-currency-code, opts);

// Async/Await
const data = await cart.checkoutCart(x-application-id, x-application-token, x-currency-code, opts);

```

| Argument  |  Type  | About |
| --------- | ----  | --- |
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

Checkout all items in cart to payment and order generation.                         For COD only order will be generated while for other checkout mode                         user will be redirected to payment gateway

---


#### Cart#updateCartMeta
Update Cart Meta

```javascript
// Promise
const promise = cart.updateCartMeta(uid, x-application-id, x-application-token, x-currency-code, opts);

// Async/Await
const data = await cart.updateCartMeta(uid, x-application-id, x-application-token, x-currency-code, opts);

```

| Argument  |  Type  | About |
| --------- | ----  | --- |
| uid | integer |  | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

Update cart meta like checkout_mode, gstin.

---


#### Cart#getCartShareLink
Generate Cart sharing link token

```javascript
// Promise
const promise = cart.getCartShareLink(x-application-id, x-application-token, x-currency-code, opts);

// Async/Await
const data = await cart.getCartShareLink(x-application-id, x-application-token, x-currency-code, opts);

```

| Argument  |  Type  | About |
| --------- | ----  | --- |
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

Generates shared cart snapshot and returns shortlink token

---


#### Cart#getCartSharedItems
Get shared cart snapshot and cart response

```javascript
// Promise
const promise = cart.getCartSharedItems(token, x-application-id, x-application-token, x-currency-code, opts);

// Async/Await
const data = await cart.getCartSharedItems(token, x-application-id, x-application-token, x-currency-code, opts);

```

| Argument  |  Type  | About |
| --------- | ----  | --- |
| token | string |  | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

Returns shared cart response for sent token with `shared_cart_details`                    containing shared cart details in response.

---


#### Cart#updateCartWithSharedItems
Merge or Replace existing cart

```javascript
// Promise
const promise = cart.updateCartWithSharedItems(token, action, x-application-id, x-application-token, x-currency-code, opts);

// Async/Await
const data = await cart.updateCartWithSharedItems(token, action, x-application-id, x-application-token, x-currency-code, opts);

```

| Argument  |  Type  | About |
| --------- | ----  | --- |
| token | string |  | 
| action | string |  | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

Merge or Replace cart based on `action` parameter with shared cart of `token`

---



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

### Methods

* [Lead#getTicket](#leadgetticket)
* [Lead#createHistoryForTicket](#leadcreatehistoryforticket)
* [Lead#createTicket](#leadcreateticket)
* [Lead#getForm](#leadgetform)
* [Lead#submitForm](#leadsubmitform)
* [Lead#getParticipantsInsideVideoRoom](#leadgetparticipantsinsidevideoroom)
* [Lead#getTokenForVideRoom](#leadgettokenforvideroom)


#### Lead#getTicket
Get Tickets

```javascript
// Promise
const promise = lead.getTicket(id, x-application-id, x-application-token, opts);

// Async/Await
const data = await lead.getTicket(id, x-application-id, x-application-token, opts);

```

| Argument  |  Type  | About |
| --------- | ----  | --- |
| id | string |  | 
| x-application-id | string |  | 
| x-application-token | string |  | 

Get Tickets

---


#### Lead#createHistoryForTicket
Create history for Ticket

```javascript
// Promise
const promise = lead.createHistoryForTicket(ticket_id, x-application-id, x-application-token, opts);

// Async/Await
const data = await lead.createHistoryForTicket(ticket_id, x-application-id, x-application-token, opts);

```

| Argument  |  Type  | About |
| --------- | ----  | --- |
| ticket_id | string |  | 
| x-application-id | string |  | 
| x-application-token | string |  | 

Create history for Ticket

---


#### Lead#createTicket
Create Ticket

```javascript
// Promise
const promise = lead.createTicket(x-application-id, x-application-token, opts);

// Async/Await
const data = await lead.createTicket(x-application-id, x-application-token, opts);

```

| Argument  |  Type  | About |
| --------- | ----  | --- |
| x-application-id | string |  | 
| x-application-token | string |  | 

Create Ticket

---


#### Lead#getForm
Get Custom Form

```javascript
// Promise
const promise = lead.getForm(slug, x-application-id, x-application-token, opts);

// Async/Await
const data = await lead.getForm(slug, x-application-id, x-application-token, opts);

```

| Argument  |  Type  | About |
| --------- | ----  | --- |
| slug | string |  | 
| x-application-id | string |  | 
| x-application-token | string |  | 

Get Custom Form

---


#### Lead#submitForm
Submit Form Response

```javascript
// Promise
const promise = lead.submitForm(slug, x-application-id, x-application-token, opts);

// Async/Await
const data = await lead.submitForm(slug, x-application-id, x-application-token, opts);

```

| Argument  |  Type  | About |
| --------- | ----  | --- |
| slug | string |  | 
| x-application-id | string |  | 
| x-application-token | string |  | 

Submit Form Response

---


#### Lead#getParticipantsInsideVideoRoom
Get participants of Video Room

```javascript
// Promise
const promise = lead.getParticipantsInsideVideoRoom(unique_name, x-application-id, x-application-token, opts);

// Async/Await
const data = await lead.getParticipantsInsideVideoRoom(unique_name, x-application-id, x-application-token, opts);

```

| Argument  |  Type  | About |
| --------- | ----  | --- |
| unique_name | string |  | 
| x-application-id | string |  | 
| x-application-token | string |  | 

Get participants of Video Room

---


#### Lead#getTokenForVideRoom
Get Token to join Video Room

```javascript
// Promise
const promise = lead.getTokenForVideRoom(unique_name, x-application-id, x-application-token, opts);

// Async/Await
const data = await lead.getTokenForVideRoom(unique_name, x-application-id, x-application-token, opts);

```

| Argument  |  Type  | About |
| --------- | ----  | --- |
| unique_name | string |  | 
| x-application-id | string |  | 
| x-application-token | string |  | 

Get Token to join Video Room

---



---
---
