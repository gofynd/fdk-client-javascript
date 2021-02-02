# API Classes


* [Catalog](#Catalog) - Open API leverages Fynd&#39;s real-time inventory integration with over 400+ brands &amp; 8000+ stores and makes it easy for developers and businesses to build a full fledged omni-channel fashion e-commerce app. 
* [Cart](#Cart) - Open API leverages Fynd&#39;s real-time inventory integration with over 200+ brands &amp; 8000+ stores and makes it easy for developers and businesses to build a full fledged omni-channel fashion e-commerce app. 
* [Lead](#Lead) - Handles communication between Administrator &lt;-&gt; Staff and Staff &lt;-&gt; Users 

----
----



## Catalog

```
const { Configuration, Catalog } = require('fdk-client-nodejs/application')
const conf = new Configuration({
    ApplicationID: "507f191e810c19729de860ea",
    ApplicationToken: "hu67dfhddf"
});
const catalog = new Catalog(conf);

```

### Methods

* [getProducts](#getProducts)
* [getProductDetailByIdentifier](#getProductDetailByIdentifier)
* [getProductSizesByIdentifier](#getProductSizesByIdentifier)
* [getProductPriceByIdentifier](#getProductPriceByIdentifier)
* [getProductSellersByIdentifier](#getProductSellersByIdentifier)
* [getProductSimilarByIdentifier](#getProductSimilarByIdentifier)
* [getProductVariantsByIdentifier](#getProductVariantsByIdentifier)
* [getProductStockByIdentifier](#getProductStockByIdentifier)
* [getProductStockForTimeByIdentifier](#getProductStockForTimeByIdentifier)
* [getBrands](#getBrands)
* [getBrandDetailByIdentifier](#getBrandDetailByIdentifier)
* [getCategories](#getCategories)
* [getCategoryDetailByIdentifier](#getCategoryDetailByIdentifier)
* [getHomeProducts](#getHomeProducts)
* [](#)
* [getSearchResults](#getSearchResults)
* [getCollections](#getCollections)
* [getCollectionItemsBySlug](#getCollectionItemsBySlug)
* [getCollectionDetailBySlug](#getCollectionDetailBySlug)
* [getFollowProducts](#getFollowProducts)
* [unfollowProductById](#unfollowProductById)
* [saveFollowProductById](#saveFollowProductById)
* [getFollowProductCountById](#getFollowProductCountById)
* [getFollowIDsByType](#getFollowIDsByType)


#### getProducts

___ getProducts(q, category, brand, sort_on, page_id, page_size, opts) ___

**Summary:** List the products

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| q | string |  | 
| category | string |  | 
| brand | string |  | 
| sort_on | string |  | 
| page_id | string |  | 
| page_size | integer |  | 

**Description:** List all the products associated with a brand, collection or category in a requested sort order. The API additionally supports arbitrary search queries that may refer the name of any product, brand, category or collection. If successful, returns a paginated list of products specified in `ProductSearchSchemaV1`


#### getProductDetailByIdentifier

___ getProductDetailByIdentifier(id, slug, opts) ___

**Summary:** Get a product

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| id | string |  | 
| slug | string |  | 

**Description:** Products are the core resource of an application. Products can be associated by categories, collections, brands and more. This API retrieves the product specified by the given **identifier**. If successful, returns a Product resource in the response body specified in `ProductDetailSchemaV1`


#### getProductSizesByIdentifier

___ getProductSizesByIdentifier(id, slug, store, opts) ___

**Summary:** Get the sizes of a product

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| id | string |  | 
| slug | string |  | 
| store | string |  | 

**Description:** A product can exist in multiple sizes. Use this API to fetch all the available sizes of a product. If successful, returns a ProductSize object in the response body as specified in `ProductSizesSchemaV1`


#### getProductPriceByIdentifier

___ getProductPriceByIdentifier(id, slug, size, pincode, store, opts) ___

**Summary:** Get price a product

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| id | string |  | 
| slug | string |  | 
| size | string |  | 
| pincode | integer |  | 
| store | string |  | 

**Description:** Any available product can exist in multiple sizes. Sometimes prices may vary among different sizes of the same product. Use this API to retrieve the price of the product of a particular size.


#### getProductSellersByIdentifier

___ getProductSellersByIdentifier(id, slug, size, pincode, page_no, page_size, opts) ___

**Summary:** List sellers of a product

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| id | string |  | 
| slug | string |  | 
| size | string |  | 
| pincode | integer |  | 
| page_no | integer |  | 
| page_size | integer |  | 

**Description:** A product of a particular size can be sold by multiple sellers. Use this API to fetch the sellers who are selling this product and have the stock of a particular size


#### getProductSimilarByIdentifier

___ getProductSimilarByIdentifier(id, slug, tag_identifier, opts) ___

**Summary:** Get similar products

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| id | string |  | 
| slug | string |  | 
| tag_identifier | string |  | 

**Description:** Get products similar to the one specified by the `identifier`. If successful, it returns a group of similar products based on tag as described in `SimilarProductByTagSchemaV1`


#### getProductVariantsByIdentifier

___ getProductVariantsByIdentifier(id, slug, opts) ___

**Summary:** Get variant of a particular product

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| id | string |  | 
| slug | string |  | 

**Description:** A product can have a different type of variants varies from color to shade etc. Use this API to fetch all the available variants of a product. If successful, returns a Products for different variants type in the response body as specified in `ProductVariantSchemaV1`


#### getProductStockByIdentifier

___ getProductStockByIdentifier(item_id, alu, sku_code, ean, upc, opts) ___

**Summary:** Get the stock of a product

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| item_id | string |  | 
| alu | string |  | 
| sku_code | string |  | 
| ean | string |  | 
| upc | string |  | 

**Description:** Retrieve the available stock of the products. You can use this API to retrieve stock of multiple products at a time. Currently a maximum of 50 distinct product IDs can be given in a single API request


#### getProductStockForTimeByIdentifier

___ getProductStockForTimeByIdentifier(timestamp, page_size, page_id, opts) ___

**Summary:** Get the stock of a product

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| timestamp | string |  | 
| page_size | integer |  | 
| page_id | string |  | 

**Description:** Retrieve the available stock of the products. You can use this api to get stock status of products whose inventory is updated in given time


#### getBrands

___ getBrands(department, page_no, page_size, opts) ___

**Summary:** List all the brands

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| department | string |  | 
| page_no | integer |  | 
| page_size | integer |  | 

**Description:** A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingSchemaV1`


#### getBrandDetailByIdentifier

___ getBrandDetailByIdentifier(id, slug, opts) ___

**Summary:** Get metadata of a brand

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| id | string |  | 
| slug | string |  | 

**Description:** Fetch metadata of a brand. If successful, returns a metadata object specified in `BrandMetaV1`


#### getCategories

___ getCategories(department, opts) ___

**Summary:** List all the categories

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| department | string |  | 

**Description:** List all the categories. You can optionally pass filter the brands by the department. If successful, returns a paginated list of brands specified in `CategoryListingSchemaV1`


#### getCategoryDetailByIdentifier

___ getCategoryDetailByIdentifier(id, slug, opts) ___

**Summary:** Get metadata of a category

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| id | string |  | 
| slug | string |  | 

**Description:** Fetch metadata of a category. If successful, returns a metadata object specified in `CategoryMetaV1`


#### getHomeProducts

___ getHomeProducts(f.session, sort_on, page_id, page_size, opts) ___

**Summary:** List the products

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| f.session | string |  | 
| sort_on | string |  | 
| page_id | string |  | 
| page_size | integer |  | 

**Description:** List all the products associated with a brand, collection or category in a random order. If successful, returns a paginated list of products specified in `HomeListingSchemaV1`


#### 

___ (opts) ___

**Summary:** List all the departments

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |

**Description:** Departments are a way to categorise similar products. A product can lie in multiple departments. For example, a skirt can below to the &#39;Women&#39;s Fashion&#39; Department while a handbag can lie in &#39;Women&#39;s Accessories&#39; Department. Use this API to list all the departments. If successful, returns the list of departments specified in `DepartmentSchemaV1`


#### getSearchResults

___ getSearchResults(q, opts) ___

**Summary:** Get relevant suggestions for a search query

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| q | string |  | 

**Description:** Retrieves a list of suggestions for a given search query. Each suggestion is a valid search term that&#39;s generated on the basis of what is given in query. This is particularly useful to enhance the user experience in search. The given search query can be a partial name of any product, brand and category. For example, if the given search query `q` is _ski_ the relevant search suggestions returned might be a list containing _skirt_, _ski shoes_, __skin cream_ etc.


#### getCollections

___ getCollections(opts) ___

**Summary:** List all the collections

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |

**Description:** A Collection allows you to organize your products into hierarchical groups. For example, a dress might be in the category _Clothing_, the individual product might also be in the collection _Summer_. On successful request, returns all the collections`


#### getCollectionItemsBySlug

___ getCollectionItemsBySlug(slug, opts) ___

**Summary:** Get the items in a collection

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| slug | string |  | 

**Description:** Get items in a collection specified by its `slug`.


#### getCollectionDetailBySlug

___ getCollectionDetailBySlug(slug, opts) ___

**Summary:** Get a particular collection

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| slug | string |  | 

**Description:** Get the details of a collection by its `slug`. If successful, returns a Collection resource in the response body specified in `CollectionResponseV1`


#### getFollowProducts

___ getFollowProducts(f.session, opts) ___

**Summary:** Get a list of followed Products

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| f.session | string |  | 

**Description:** A User can follow a Product they like. This API retrieves the products the user have followed. If successful, returns a Followed resource in the response body specified in `GetFollowResponseSchema`


#### unfollowProductById

___ unfollowProductById(product_id, f.session, opts) ___

**Summary:** UnFollow a Product

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| product_id | string |  | 
| f.session | string |  | 

**Description:** You can undo a followed Product or Brand by its uid, we refer this action as _unfollow_. Pass the uid of the product in request URL


#### saveFollowProductById

___ saveFollowProductById(product_id, f.session, opts) ___

**Summary:** Follow a particular Product

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| product_id | integer |  | 
| f.session | string |  | 

**Description:** Follow a particular Product specified by its uid. Pass the uid of the product in request URL


#### getFollowProductCountById

___ getFollowProductCountById(collection_type, collection_id, opts) ___

**Summary:** Get Follow Count

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| collection_type | string |  | 
| collection_id | string |  | 

**Description:** Get count of followers for given collection type and collection id.


#### getFollowIDsByType

___ getFollowIDsByType(opts) ___

**Summary:** Get the Uids of followed product, brand and collection.

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |

**Description:** You can get the uids of all the followed Product, Brand and Collections.



---


## Cart

```
const { Configuration, Cart } = require('fdk-client-nodejs/application')
const conf = new Configuration({
    ApplicationID: "507f191e810c19729de860ea",
    ApplicationToken: "hu67dfhddf"
});
const cart = new Cart(conf);

```

### Methods

* [getCart](#getCart)
* [getCartLastModified](#getCartLastModified)
* [addItemsToCart](#addItemsToCart)
* [updateCart](#updateCart)
* [getCartItemCount](#getCartItemCount)
* [getCouponList](#getCouponList)
* [applyCoupon](#applyCoupon)
* [removeCoupon](#removeCoupon)
* [getBulkDiscountOffers](#getBulkDiscountOffers)
* [getAddressList](#getAddressList)
* [addAddress](#addAddress)
* [getAddressById](#getAddressById)
* [updateAddress](#updateAddress)
* [removeAddress](#removeAddress)
* [selectCartAddress](#selectCartAddress)
* [getCartPaymentModes](#getCartPaymentModes)
* [selectCartPaymentMode](#selectCartPaymentMode)
* [getCartShipments](#getCartShipments)
* [checkoutCart](#checkoutCart)
* [updateCartMeta](#updateCartMeta)
* [getCartShareLink](#getCartShareLink)
* [getCartSharedItems](#getCartSharedItems)
* [updateCartWithSharedItems](#updateCartWithSharedItems)


#### getCart

___ getCart(uid, assign_card_id, x-application-id, x-application-token, x-currency-code, opts) ___

**Summary:** Fetch all Items Added to  Cart

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| uid | integer | unique identification number of cart affiliate | 
| assign_card_id | integer | assign card id | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

**Description:** Get all the details of a items added to cart  by uid. If successful, returns a Cart resource in the response body specified in GetCartV1Serializer


#### getCartLastModified

___ getCartLastModified(uid, x-application-id, x-application-token, x-currency-code, opts) ___

**Summary:** Fetch Last-Modified timestamp

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| uid | integer | unique identification number of cart affiliate | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

**Description:** Fetch Last-Modified timestamp in header metadata


#### addItemsToCart

___ addItemsToCart(x-application-id, x-application-token, x-currency-code, opts) ___

**Summary:** Add Items to Cart

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

**Description:** &lt;p&gt;Add Items to cart. See `CartV1Serializer` in schema of request body for the list of attributes needed to add items to a cart. On successful request, returns cart response containing details of items ,coupons available etc.these attributes will be fetched from the folowing api&#39;s&lt;/p&gt; &lt;ul&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;item_id&lt;/font&gt;  &quot;/platform/content/v1/products/&quot;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;item_size&lt;/font&gt;   &quot;/platform/content/v1/products/{slug}/sizes/&quot;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;seller_id&lt;/font&gt;  &quot;/platform/content/v1/products/{slug}/sizes/price&quot;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;store_id&lt;/font&gt;  &quot;/platform/content/v1/products/{slug}/sizes/price&quot;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;quantity&lt;/font&gt;  item quantity (must be greater than or equal to 1)&lt;/li&gt; &lt;/ul&gt;


#### updateCart

___ updateCart(x-application-id, x-application-token, x-currency-code, opts) ___

**Summary:** Update Items already added to Cart

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

**Description:** Request object containing attributes like item_quantity and item_size which can be updated .these attributes will be fetched from the folowing api&#39;s&lt;/p&gt; &lt;ul&gt; &lt;li&gt;&lt;font color=&quot;monochrome&quot;&gt;operation&lt;/font&gt; Operation for current api call. &lt;b&gt;update_item&lt;/b&gt; for update items. &lt;b&gt;remove_item&lt;/b&gt; for removing items.&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;item_id&lt;/font&gt;  &quot;/platform/content/v1/products/&quot;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;item_size&lt;/font&gt;   &quot;/platform/content/v1/products/{slug}/sizes/&quot;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;quantity&lt;/font&gt;  item quantity (must be greater than or equal to 1)&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;article_id&lt;/font&gt;   &quot;/content​/v1​/products​/{identifier}​/sizes​/price​/&quot;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;item_index&lt;/font&gt;  item position in the cart (must be greater than or equal to 0)&lt;/li&gt; &lt;/ul&gt;


#### getCartItemCount

___ getCartItemCount(uid, x-application-id, x-application-token, x-currency-code, opts) ___

**Summary:** Cart item count

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| uid | integer |  | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

**Description:** Get total count of item present in cart


#### getCouponList

___ getCouponList(uid, x-application-id, x-application-token, x-currency-code, opts) ___

**Summary:** Fetch Coupon

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| uid | integer | unique identification number of cart affiliate | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

**Description:** Get all the details of a coupons applicable to cart  by uid. If successful, returns a Coupon resource in the response body specified in GetCouponResponseSchema


#### applyCoupon

___ applyCoupon(i, b, p, x-application-id, x-application-token, x-currency-code, opts) ___

**Summary:** Apply Coupon

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| i | boolean | items | 
| b | boolean | breakups | 
| p | boolean | payment | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

**Description:** &lt;p&gt;Apply Coupons on Items added to cart. On successful request, returns cart response containing details of items ,coupons applied etc.these attributes will be consumed by  api&lt;/p&gt; &lt;ul&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;coupon_code&lt;/font&gt;&lt;/li&gt;
&lt;/ul&gt;


#### removeCoupon

___ removeCoupon(uid, x-application-id, x-application-token, x-currency-code, opts) ___

**Summary:** Remove Coupon Applied

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| uid | integer |  | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

**Description:** Remove Coupon applied on the cart by passing uid in request body.


#### getBulkDiscountOffers

___ getBulkDiscountOffers(item_id, article_id, uid, slug, x-application-id, x-application-token, x-currency-code, opts) ___

**Summary:** Get discount offers based on quantity

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| item_id | integer |  | 
| article_id | string |  | 
| uid | integer |  | 
| slug | string |  | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

**Description:** List applicable offers along with current, next and best offer for given product. Either one of **uid**, **item_id**, **slug** should be present*


#### getAddressList

___ getAddressList(uid, mobile_no, checkout_mode, tags, default, x-application-id, x-application-token, x-currency-code, opts) ___

**Summary:** Fetch Address

**Parameters:**

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

**Description:** Get all the addresses associated with the account. If successful, returns a Address resource in the response body specified in GetAddressResponseSchema.attibutes listed below are optional &lt;ul&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;uid&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;address_id&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;mobile_no&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;checkout_mode&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;tags&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;default&lt;/font&gt;&lt;/li&gt; &lt;/ul&gt;


#### addAddress

___ addAddress(x-application-id, x-application-token, x-currency-code, opts) ___

**Summary:** Add Address to the account

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

**Description:** &lt;p&gt;Add Address to account. See `SaveAddressRequestSchema` in schema of request body for the list of attributes needed to add Address to account. On successful request, returns response containing address_id ,is_default_address and success message.


#### getAddressById

___ getAddressById(id, uid, mobile_no, checkout_mode, tags, default, x-application-id, x-application-token, x-currency-code, opts) ___

**Summary:** Fetch Single Address

**Parameters:**

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

**Description:** Get a addresses with the given id. If successful, returns a Address resource in the response body specified in GetAddressResponseSchema.attibutes listed below are optional &lt;ul&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;mobile_no&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;checkout_mode&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;tags&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;default&lt;/font&gt;&lt;/li&gt; &lt;/ul&gt;


#### updateAddress

___ updateAddress(id, x-application-id, x-application-token, x-currency-code, opts) ___

**Summary:** Update Address alreay added to account

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| id | integer |  | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

**Description:** Request object containing attributes mentioned in  &lt;font color=&quot;blue&quot;&gt;UpdateAddressRequestSchema &lt;/font&gt; can be updated .these attributes are :&lt;/p&gt; &lt;ul&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;is_default_address&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;landmark&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;area&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;pincode&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;email&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;address_type&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;name&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;address_id&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;address&lt;/font&gt;&lt;/li&gt; &lt;/ul&gt;


#### removeAddress

___ removeAddress(id, x-application-id, x-application-token, x-currency-code, opts) ___

**Summary:** Remove Address Associated to the account

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| id | integer |  | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

**Description:** Delete a Address by it&#39;s address_id. Returns an object that tells whether the address was deleted successfully


#### selectCartAddress

___ selectCartAddress(x-application-id, x-application-token, x-currency-code, opts) ___

**Summary:** Select Address from All Addresses

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

**Description:** &lt;p&gt;Select Address from all addresses associated with the account in order to ship the cart items to .that address,otherwise default address will be selected implicitly. See `SelectCartAddressRequestSchema` in schema of request body for the list of attributes needed to select Address from account. On successful request, returns Cart object response.below are the address attributes which needs to be sent. &lt;ul&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;address_id&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;billing_address_id&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;uid&lt;/font&gt;&lt;/li&gt; &lt;/ul&gt;


#### getCartPaymentModes

___ getCartPaymentModes(uid, address_id, payment_mode, payment_identifier, aggregator_name, merchant_code, x-application-id, x-application-token, x-currency-code, opts) ___

**Summary:** Gte Cart Payment for valid coupon

**Parameters:**

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

**Description:** Validate coupon for selected payment mode


#### selectCartPaymentMode

___ selectCartPaymentMode(uid, x-application-id, x-application-token, x-currency-code, opts) ___

**Summary:** Update Cart Payment

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| uid | string | unique identification number | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

**Description:** Update Cart Payment for Your Account


#### getCartShipments

___ getCartShipments(p, uid, address_id, x-application-id, x-application-token, x-currency-code, opts) ___

**Summary:** Get delivery date and options before checkout

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| p | boolean |  | 
| uid | integer |  | 
| address_id | integer |  | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

**Description:** Shipment break up item wise with delivery date. Actual                      delivery will be during given dates only. Items will be                      delivered in group of shipments created.


#### checkoutCart

___ checkoutCart(x-application-id, x-application-token, x-currency-code, opts) ___

**Summary:** Checkout Cart

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

**Description:** Checkout all items in cart to payment and order generation.                         For COD only order will be generated while for other checkout mode                         user will be redirected to payment gateway


#### updateCartMeta

___ updateCartMeta(uid, x-application-id, x-application-token, x-currency-code, opts) ___

**Summary:** Update Cart Meta

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| uid | integer |  | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

**Description:** Update cart meta like checkout_mode, gstin.


#### getCartShareLink

___ getCartShareLink(x-application-id, x-application-token, x-currency-code, opts) ___

**Summary:** Generate Cart sharing link token

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

**Description:** Generates shared cart snapshot and returns shortlink token


#### getCartSharedItems

___ getCartSharedItems(token, x-application-id, x-application-token, x-currency-code, opts) ___

**Summary:** Get shared cart snapshot and cart response

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| token | string |  | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

**Description:** Returns shared cart response for sent token with `shared_cart_details`                    containing shared cart details in response.


#### updateCartWithSharedItems

___ updateCartWithSharedItems(token, action, x-application-id, x-application-token, x-currency-code, opts) ___

**Summary:** Merge or Replace existing cart

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| token | string |  | 
| action | string |  | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 

**Description:** Merge or Replace cart based on `action` parameter with shared cart of `token`



---


## Lead

```
const { Configuration, Lead } = require('fdk-client-nodejs/application')
const conf = new Configuration({
    ApplicationID: "507f191e810c19729de860ea",
    ApplicationToken: "hu67dfhddf"
});
const lead = new Lead(conf);

```

### Methods

* [getTicket](#getTicket)
* [createHistoryForTicket](#createHistoryForTicket)
* [createTicket](#createTicket)
* [getForm](#getForm)
* [submitForm](#submitForm)
* [getParticipantsInsideVideoRoom](#getParticipantsInsideVideoRoom)
* [getTokenForVideRoom](#getTokenForVideRoom)


#### getTicket

___ getTicket(id, x-application-id, x-application-token, opts) ___

**Summary:** Get Tickets

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| id | string |  | 
| x-application-id | string |  | 
| x-application-token | string |  | 

**Description:** Get Tickets


#### createHistoryForTicket

___ createHistoryForTicket(ticket_id, x-application-id, x-application-token, opts) ___

**Summary:** Create history for Ticket

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| ticket_id | string |  | 
| x-application-id | string |  | 
| x-application-token | string |  | 

**Description:** Create history for Ticket


#### createTicket

___ createTicket(x-application-id, x-application-token, opts) ___

**Summary:** Create Ticket

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| x-application-id | string |  | 
| x-application-token | string |  | 

**Description:** Create Ticket


#### getForm

___ getForm(slug, x-application-id, x-application-token, opts) ___

**Summary:** Get Custom Form

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| slug | string |  | 
| x-application-id | string |  | 
| x-application-token | string |  | 

**Description:** Get Custom Form


#### submitForm

___ submitForm(slug, x-application-id, x-application-token, opts) ___

**Summary:** Submit Form Response

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| slug | string |  | 
| x-application-id | string |  | 
| x-application-token | string |  | 

**Description:** Submit Form Response


#### getParticipantsInsideVideoRoom

___ getParticipantsInsideVideoRoom(unique_name, x-application-id, x-application-token, opts) ___

**Summary:** Get participants of Video Room

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| unique_name | string |  | 
| x-application-id | string |  | 
| x-application-token | string |  | 

**Description:** Get participants of Video Room


#### getTokenForVideRoom

___ getTokenForVideRoom(unique_name, x-application-id, x-application-token, opts) ___

**Summary:** Get Token to join Video Room

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| unique_name | string |  | 
| x-application-id | string |  | 
| x-application-token | string |  | 

**Description:** Get Token to join Video Room



---
