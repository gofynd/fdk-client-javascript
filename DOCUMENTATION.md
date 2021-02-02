

## Cart

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


#### getCart(uid, assign_card_id, x-application-id, x-application-token, x-currency-code,  optionals)

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| uid | integer | unique identification number of cart affiliate | 
| assign_card_id | integer | assign card id | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 



#### getCartLastModified(uid, x-application-id, x-application-token, x-currency-code,  optionals)

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| uid | integer | unique identification number of cart affiliate | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 



#### addItemsToCart(x-application-id, x-application-token, x-currency-code,  optionals)

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 



#### updateCart(x-application-id, x-application-token, x-currency-code,  optionals)

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 



#### getCartItemCount(uid, x-application-id, x-application-token, x-currency-code,  optionals)

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| uid | integer |  | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 



#### getCouponList(uid, x-application-id, x-application-token, x-currency-code,  optionals)

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| uid | integer | unique identification number of cart affiliate | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 



#### applyCoupon(i, b, p, x-application-id, x-application-token, x-currency-code,  optionals)

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| i | boolean | items | 
| b | boolean | breakups | 
| p | boolean | payment | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 



#### removeCoupon(uid, x-application-id, x-application-token, x-currency-code,  optionals)

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| uid | integer |  | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 



#### getBulkDiscountOffers(item_id, article_id, uid, slug, x-application-id, x-application-token, x-currency-code,  optionals)

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



#### getAddressList(uid, mobile_no, checkout_mode, tags, default, x-application-id, x-application-token, x-currency-code,  optionals)

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



#### addAddress(x-application-id, x-application-token, x-currency-code,  optionals)

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 



#### getAddressById(id, uid, mobile_no, checkout_mode, tags, default, x-application-id, x-application-token, x-currency-code,  optionals)

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



#### updateAddress(id, x-application-id, x-application-token, x-currency-code,  optionals)

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| id | integer |  | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 



#### removeAddress(id, x-application-id, x-application-token, x-currency-code,  optionals)

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| id | integer |  | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 



#### selectCartAddress(x-application-id, x-application-token, x-currency-code,  optionals)

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 



#### getCartPaymentModes(uid, address_id, payment_mode, payment_identifier, aggregator_name, merchant_code, x-application-id, x-application-token, x-currency-code,  optionals)

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



#### selectCartPaymentMode(uid, x-application-id, x-application-token, x-currency-code,  optionals)

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| uid | string | unique identification number | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 



#### getCartShipments(p, uid, address_id, x-application-id, x-application-token, x-currency-code,  optionals)

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| p | boolean |  | 
| uid | integer |  | 
| address_id | integer |  | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 



#### checkoutCart(x-application-id, x-application-token, x-currency-code,  optionals)

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 



#### updateCartMeta(uid, x-application-id, x-application-token, x-currency-code,  optionals)

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| uid | integer |  | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 



#### getCartShareLink(x-application-id, x-application-token, x-currency-code,  optionals)

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 



#### getCartSharedItems(token, x-application-id, x-application-token, x-currency-code,  optionals)

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| token | string |  | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 



#### updateCartWithSharedItems(token, action, x-application-id, x-application-token, x-currency-code,  optionals)

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| token | string |  | 
| action | string |  | 
| x-application-id | string |  | 
| x-application-token | string |  | 
| x-currency-code | string |  | 




---



## Catalog

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


#### getProducts(q, category, brand, sort_on, page_id, page_size,  optionals)

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| q | string |  | 
| category | string |  | 
| brand | string |  | 
| sort_on | string |  | 
| page_id | string |  | 
| page_size | integer |  | 



#### getProductDetailByIdentifier(id, slug,  optionals)

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| id | string |  | 
| slug | string |  | 



#### getProductSizesByIdentifier(id, slug, store,  optionals)

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| id | string |  | 
| slug | string |  | 
| store | string |  | 



#### getProductPriceByIdentifier(id, slug, size, pincode, store,  optionals)

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| id | string |  | 
| slug | string |  | 
| size | string |  | 
| pincode | integer |  | 
| store | string |  | 



#### getProductSellersByIdentifier(id, slug, size, pincode, page_no, page_size,  optionals)

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| id | string |  | 
| slug | string |  | 
| size | string |  | 
| pincode | integer |  | 
| page_no | integer |  | 
| page_size | integer |  | 



#### getProductSimilarByIdentifier(id, slug, tag_identifier,  optionals)

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| id | string |  | 
| slug | string |  | 
| tag_identifier | string |  | 



#### getProductVariantsByIdentifier(id, slug,  optionals)

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| id | string |  | 
| slug | string |  | 



#### getProductStockByIdentifier(item_id, alu, sku_code, ean, upc,  optionals)

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| item_id | string |  | 
| alu | string |  | 
| sku_code | string |  | 
| ean | string |  | 
| upc | string |  | 



#### getProductStockForTimeByIdentifier(timestamp, page_size, page_id,  optionals)

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| timestamp | string |  | 
| page_size | integer |  | 
| page_id | string |  | 



#### getBrands(department, page_no, page_size,  optionals)

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| department | string |  | 
| page_no | integer |  | 
| page_size | integer |  | 



#### getBrandDetailByIdentifier(id, slug,  optionals)

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| id | string |  | 
| slug | string |  | 



#### getCategories(department,  optionals)

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| department | string |  | 



#### getCategoryDetailByIdentifier(id, slug,  optionals)

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| id | string |  | 
| slug | string |  | 



#### getHomeProducts(f.session, sort_on, page_id, page_size,  optionals)

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| f.session | string |  | 
| sort_on | string |  | 
| page_id | string |  | 
| page_size | integer |  | 



#### ( optionals)

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |



#### getSearchResults(q,  optionals)

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| q | string |  | 



#### getCollections( optionals)

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |



#### getCollectionItemsBySlug(slug,  optionals)

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| slug | string |  | 



#### getCollectionDetailBySlug(slug,  optionals)

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| slug | string |  | 



#### getFollowProducts(f.session,  optionals)

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| f.session | string |  | 



#### unfollowProductById(product_id, f.session,  optionals)

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| product_id | string |  | 
| f.session | string |  | 



#### saveFollowProductById(product_id, f.session,  optionals)

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| product_id | integer |  | 
| f.session | string |  | 



#### getFollowProductCountById(collection_type, collection_id,  optionals)

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| collection_type | string |  | 
| collection_id | string |  | 



#### getFollowIDsByType( optionals)

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |




---



## Lead

### Methods

* [getTicket](#getTicket)
* [createHistoryForTicket](#createHistoryForTicket)
* [createTicket](#createTicket)
* [getForm](#getForm)
* [submitForm](#submitForm)
* [getParticipantsInsideVideoRoom](#getParticipantsInsideVideoRoom)
* [getTokenForVideRoom](#getTokenForVideRoom)


#### getTicket(id, x-application-id, x-application-token,  optionals)

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| id | string |  | 
| x-application-id | string |  | 
| x-application-token | string |  | 



#### createHistoryForTicket(ticket_id, x-application-id, x-application-token,  optionals)

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| ticket_id | string |  | 
| x-application-id | string |  | 
| x-application-token | string |  | 



#### createTicket(x-application-id, x-application-token,  optionals)

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| x-application-id | string |  | 
| x-application-token | string |  | 



#### getForm(slug, x-application-id, x-application-token,  optionals)

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| slug | string |  | 
| x-application-id | string |  | 
| x-application-token | string |  | 



#### submitForm(slug, x-application-id, x-application-token,  optionals)

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| slug | string |  | 
| x-application-id | string |  | 
| x-application-token | string |  | 



#### getParticipantsInsideVideoRoom(unique_name, x-application-id, x-application-token,  optionals)

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| unique_name | string |  | 
| x-application-id | string |  | 
| x-application-token | string |  | 



#### getTokenForVideRoom(unique_name, x-application-id, x-application-token,  optionals)

**Parameters:**

| Argument  |  Type  | About |
| --------- | ----  | --- |
| unique_name | string |  | 
| x-application-id | string |  | 
| x-application-token | string |  | 




---

