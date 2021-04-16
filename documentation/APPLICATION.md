# FDK Application Front API Documentaion


* [Catalog](#Catalog) - Catalog API's allows you to access list of products, prices, seller details, similar features, variants and many more useful features.  
* [Cart](#Cart) - Cart APIs 
* [Lead](#Lead) - Handles communication between Staff and Users 
* [Theme](#Theme) - Responsible for themes 
* [User](#User) - Authentication Service 
* [Content](#Content) - Content System 
* [Communication](#Communication) - Manages email, sms, push notifications sent to users 
* [Share](#Share) - Short link and QR Code 
* [FileStorage](#FileStorage) - File Storage 
* [Configuration](#Configuration) - Application configuration apis 
* [Payment](#Payment) - Collect payment through many payment gateway i.e Stripe, Razorpay, Juspay etc.into Fynd or Self account 
* [Order](#Order) - Handles Platform websites OMS 
* [Rewards](#Rewards) - Earn and redeem Reward Points 
* [Feedback](#Feedback) - User Reviews and Rating System 
* [PosCart](#PosCart) - Cart APIs 
* [Logistic](#Logistic) - Handles Platform websites OMS 

----
----

### Classes and Methods


* [Catalog](#Catalog)
  * Methods
    * [getProductDetailBySlug](#getproductdetailbyslug)
    * [getProductSizesBySlug](#getproductsizesbyslug)
    * [getProductPriceBySlug](#getproductpricebyslug)
    * [getProductSellersBySlug](#getproductsellersbyslug)
    * [getProductComparisonBySlugs](#getproductcomparisonbyslugs)
    * [getSimilarComparisonProductBySlug](#getsimilarcomparisonproductbyslug)
    * [getComparedFrequentlyProductBySlug](#getcomparedfrequentlyproductbyslug)
    * [getProductSimilarByIdentifier](#getproductsimilarbyidentifier)
    * [getProductVariantsBySlug](#getproductvariantsbyslug)
    * [getProductStockByIds](#getproductstockbyids)
    * [getProductStockForTimeByIds](#getproductstockfortimebyids)
    * [getProducts](#getproducts)
    * [getBrands](#getbrands)
    * [getBrandDetailBySlug](#getbranddetailbyslug)
    * [getCategories](#getcategories)
    * [getCategoryDetailBySlug](#getcategorydetailbyslug)
    * [getHomeProducts](#gethomeproducts)
    * [getDepartments](#getdepartments)
    * [getSearchResults](#getsearchresults)
    * [getCollections](#getcollections)
    * [getCollectionItemsBySlug](#getcollectionitemsbyslug)
    * [getCollectionDetailBySlug](#getcollectiondetailbyslug)
    * [getFollowedListing](#getfollowedlisting)
    * [followById](#followbyid)
    * [unfollowById](#unfollowbyid)
    * [getFollowerCountById](#getfollowercountbyid)
    * [getFollowIds](#getfollowids)
    * [getStores](#getstores)
    

* [Cart](#Cart)
  * Methods
    * [getCart](#getcart)
    * [getCartLastModified](#getcartlastmodified)
    * [addItems](#additems)
    * [updateCart](#updatecart)
    * [getItemCount](#getitemcount)
    * [getCoupons](#getcoupons)
    * [applyCoupon](#applycoupon)
    * [removeCoupon](#removecoupon)
    * [getBulkDiscountOffers](#getbulkdiscountoffers)
    * [getAddresses](#getaddresses)
    * [addAddress](#addaddress)
    * [getAddressById](#getaddressbyid)
    * [updateAddress](#updateaddress)
    * [removeAddress](#removeaddress)
    * [selectAddress](#selectaddress)
    * [selectPaymentMode](#selectpaymentmode)
    * [validateCouponForPayment](#validatecouponforpayment)
    * [getShipments](#getshipments)
    * [checkoutCart](#checkoutcart)
    * [updateCartMeta](#updatecartmeta)
    * [getCartShareLink](#getcartsharelink)
    * [getCartSharedItems](#getcartshareditems)
    * [updateCartWithSharedItems](#updatecartwithshareditems)
    

* [Lead](#Lead)
  * Methods
    * [getTicket](#getticket)
    * [createHistory](#createhistory)
    * [createTicket](#createticket)
    * [getCustomForm](#getcustomform)
    * [submitCustomForm](#submitcustomform)
    * [getParticipantsInsideVideoRoom](#getparticipantsinsidevideoroom)
    * [getTokenForVideoRoom](#gettokenforvideoroom)
    

* [Theme](#Theme)
  * Methods
    * [getAppliedTheme](#getappliedtheme)
    * [getThemeForPreview](#getthemeforpreview)
    

* [User](#User)
  * Methods
    * [loginWithFacebook](#loginwithfacebook)
    * [loginWithGoogle](#loginwithgoogle)
    * [loginWithGoogleAndroid](#loginwithgoogleandroid)
    * [loginWithGoogleIOS](#loginwithgoogleios)
    * [loginWithOTP](#loginwithotp)
    * [loginWithEmailAndPassword](#loginwithemailandpassword)
    * [sendResetPasswordEmail](#sendresetpasswordemail)
    * [forgotPassword](#forgotpassword)
    * [sendResetToken](#sendresettoken)
    * [loginWithToken](#loginwithtoken)
    * [registerWithForm](#registerwithform)
    * [verifyEmail](#verifyemail)
    * [verifyMobile](#verifymobile)
    * [hasPassword](#haspassword)
    * [updatePassword](#updatepassword)
    * [logout](#logout)
    * [sendOTPOnMobile](#sendotponmobile)
    * [verifyMobileOTP](#verifymobileotp)
    * [sendOTPOnEmail](#sendotponemail)
    * [verifyEmailOTP](#verifyemailotp)
    * [getLoggedInUser](#getloggedinuser)
    * [getListOfActiveSessions](#getlistofactivesessions)
    * [getPlatformConfig](#getplatformconfig)
    * [updateProfile](#updateprofile)
    * [addMobileNumber](#addmobilenumber)
    * [deleteMobileNumber](#deletemobilenumber)
    * [setMobileNumberAsPrimary](#setmobilenumberasprimary)
    * [sendVerificationLinkToMobile](#sendverificationlinktomobile)
    * [addEmail](#addemail)
    * [deleteEmail](#deleteemail)
    * [setEmailAsPrimary](#setemailasprimary)
    * [sendVerificationLinkToEmail](#sendverificationlinktoemail)
    

* [Content](#Content)
  * Methods
    * [getAnnouncements](#getannouncements)
    * [getBlog](#getblog)
    * [getBlogs](#getblogs)
    * [getFaqs](#getfaqs)
    * [getFaqCategories](#getfaqcategories)
    * [getFaqBySlug](#getfaqbyslug)
    * [getFaqCategoryBySlug](#getfaqcategorybyslug)
    * [getFaqsByCategorySlug](#getfaqsbycategoryslug)
    * [getLandingPage](#getlandingpage)
    * [getLegalInformation](#getlegalinformation)
    * [getNavigations](#getnavigations)
    * [getPage](#getpage)
    * [getPages](#getpages)
    * [getSEOConfiguration](#getseoconfiguration)
    * [getSlideshows](#getslideshows)
    * [getSlideshow](#getslideshow)
    * [getSupportInformation](#getsupportinformation)
    * [getTags](#gettags)
    

* [Communication](#Communication)
  * Methods
    * [getCommunicationConsent](#getcommunicationconsent)
    * [upsertCommunicationConsent](#upsertcommunicationconsent)
    * [upsertAppPushtoken](#upsertapppushtoken)
    

* [Share](#Share)
  * Methods
    * [getApplicationQRCode](#getapplicationqrcode)
    * [getProductQRCodeBySlug](#getproductqrcodebyslug)
    * [getCollectionQRCodeBySlug](#getcollectionqrcodebyslug)
    * [getUrlQRCode](#geturlqrcode)
    * [createShortLink](#createshortlink)
    * [getShortLinkByHash](#getshortlinkbyhash)
    * [getOriginalShortLinkByHash](#getoriginalshortlinkbyhash)
    

* [FileStorage](#FileStorage)
  * Methods
    * [startUpload](#startupload)
    * [completeUpload](#completeupload)
    

* [Configuration](#Configuration)
  * Methods
    * [getApplication](#getapplication)
    * [getOwnerInfo](#getownerinfo)
    * [getBasicDetails](#getbasicdetails)
    * [getIntegrationTokens](#getintegrationtokens)
    * [getOrderingStores](#getorderingstores)
    * [getFeatures](#getfeatures)
    * [getContactInfo](#getcontactinfo)
    * [getCurrencies](#getcurrencies)
    * [getCurrencyById](#getcurrencybyid)
    * [getLanguages](#getlanguages)
    * [getOrderingStoreCookie](#getorderingstorecookie)
    * [removeOrderingStoreCookie](#removeorderingstorecookie)
    * [getAppStaffs](#getappstaffs)
    

* [Payment](#Payment)
  * Methods
    * [getAggregatorsConfig](#getaggregatorsconfig)
    * [attachCardToCustomer](#attachcardtocustomer)
    * [getActiveCardAggregator](#getactivecardaggregator)
    * [getActiveUserCards](#getactiveusercards)
    * [deleteUserCard](#deleteusercard)
    * [verifyCustomerForPayment](#verifycustomerforpayment)
    * [verifyAndChargePayment](#verifyandchargepayment)
    * [initialisePayment](#initialisepayment)
    * [checkAndUpdatePaymentStatus](#checkandupdatepaymentstatus)
    * [getPaymentModeRoutes](#getpaymentmoderoutes)
    * [getPosPaymentModeRoutes](#getpospaymentmoderoutes)
    * [getUserBeneficiariesDetail](#getuserbeneficiariesdetail)
    * [verifyIfscCode](#verifyifsccode)
    * [getOrderBeneficiariesDetail](#getorderbeneficiariesdetail)
    * [verifyOtpAndAddBeneficiaryForBank](#verifyotpandaddbeneficiaryforbank)
    * [addBeneficiaryDetails](#addbeneficiarydetails)
    * [verifyOtpAndAddBeneficiaryForWallet](#verifyotpandaddbeneficiaryforwallet)
    * [updateDefaultBeneficiary](#updatedefaultbeneficiary)
    

* [Order](#Order)
  * Methods
    * [getOrders](#getorders)
    * [getOrderById](#getorderbyid)
    * [getShipmentById](#getshipmentbyid)
    * [getShipmentReasons](#getshipmentreasons)
    * [updateShipmentStatus](#updateshipmentstatus)
    * [trackShipment](#trackshipment)
    * [getPosOrderById](#getposorderbyid)
    

* [Rewards](#Rewards)
  * Methods
    * [getPointsOnProduct](#getpointsonproduct)
    * [getOrderDiscount](#getorderdiscount)
    * [getUserPoints](#getuserpoints)
    * [getUserPointsHistory](#getuserpointshistory)
    * [getUserReferralDetails](#getuserreferraldetails)
    * [redeemReferralCode](#redeemreferralcode)
    

* [Feedback](#Feedback)
  * Methods
    * [createAbuseReport](#createabusereport)
    * [updateAbuseReport](#updateabusereport)
    * [getAbuseReports](#getabusereports)
    * [getAttributes](#getattributes)
    * [createAttribute](#createattribute)
    * [getAttribute](#getattribute)
    * [updateAttribute](#updateattribute)
    * [createComment](#createcomment)
    * [updateComment](#updatecomment)
    * [getComments](#getcomments)
    * [checkEligibility](#checkeligibility)
    * [deleteMedia](#deletemedia)
    * [createMedia](#createmedia)
    * [updateMedia](#updatemedia)
    * [getMedias](#getmedias)
    * [getReviewSummaries](#getreviewsummaries)
    * [createReview](#createreview)
    * [updateReview](#updatereview)
    * [getReviews](#getreviews)
    * [getTemplates](#gettemplates)
    * [createQuestion](#createquestion)
    * [updateQuestion](#updatequestion)
    * [getQuestionAndAnswers](#getquestionandanswers)
    * [getVotes](#getvotes)
    * [createVote](#createvote)
    * [updateVote](#updatevote)
    

* [PosCart](#PosCart)
  * Methods
    * [getCart](#getcart)
    * [getCartLastModified](#getcartlastmodified)
    * [addItems](#additems)
    * [updateCart](#updatecart)
    * [getItemCount](#getitemcount)
    * [getCoupons](#getcoupons)
    * [applyCoupon](#applycoupon)
    * [removeCoupon](#removecoupon)
    * [getBulkDiscountOffers](#getbulkdiscountoffers)
    * [getAddresses](#getaddresses)
    * [addAddress](#addaddress)
    * [getAddressById](#getaddressbyid)
    * [updateAddress](#updateaddress)
    * [removeAddress](#removeaddress)
    * [selectAddress](#selectaddress)
    * [selectPaymentMode](#selectpaymentmode)
    * [validateCouponForPayment](#validatecouponforpayment)
    * [getShipments](#getshipments)
    * [updateShipments](#updateshipments)
    * [checkoutCart](#checkoutcart)
    * [updateCartMeta](#updatecartmeta)
    * [getAvailableDeliveryModes](#getavailabledeliverymodes)
    * [getStoreAddressByUid](#getstoreaddressbyuid)
    * [getCartShareLink](#getcartsharelink)
    * [getCartSharedItems](#getcartshareditems)
    * [updateCartWithSharedItems](#updatecartwithshareditems)
    

* [Logistic](#Logistic)
  * Methods
    * [getTatProduct](#gettatproduct)
    * [getPincodeCity](#getpincodecity)
    


---
---



## Catalog


#### getProductDetailBySlug
Get a product

```javascript
// Promise
const promise = catalog.getProductDetailBySlug(slug);

// Async/Await
const data = await catalog.getProductDetailBySlug(slug);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/** | 

Products are the core resource of an application. Products can be associated by categories, collections, brands and more. This API retrieves the product specified by the given **slug**. If successful, returns a Product resource in the response body specified in `ProductDetail`

*Success Response:*



The Product object. See example below or refer `ProductDetail` for details.


Schema: `ProductDetail`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getProductSizesBySlug
Get the sizes of a product

```javascript
// Promise
const promise = catalog.getProductSizesBySlug(slug,storeId);

// Async/Await
const data = await catalog.getProductSizesBySlug(slug,storeId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/** | 
| storeId | string | The store id of the product whose sizes need to be retrieved | 

A product can exist in multiple sizes. Use this API to fetch all the available sizes of a product. If successful, returns a ProductSize object in the response body as specified in `ProductSizes`

*Success Response:*



The ProductSize object. See example below or refer `ProductSizes` for details.


Schema: `ProductSizes`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getProductPriceBySlug
Get price a product size

```javascript
// Promise
const promise = catalog.getProductPriceBySlug(slug,size,pincode,storeId);

// Async/Await
const data = await catalog.getProductPriceBySlug(slug,size,pincode,storeId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/** | 
| size | string | The size of the product for which the price needs to be retrieved. You can get the available sizes of a product from **v1.0/products/{slug}/sizes/** | 
| pincode | string | The pincode of the product for which the price needs to be retrieved. | 
| storeId | string | The store of the product whose size level price need to be retrieved | 

Any available product can exist in multiple sizes. Sometimes prices may vary among different sizes of the same product. Use this API to retrieve the price of the product of a particular size with the location details it is available in.

*Success Response:*



The ProductSizePrice object. See example below or refer `ProductSizePriceResponse` for details


Schema: `ProductSizePriceResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getProductSellersBySlug
List sellers of a product

```javascript
// Promise
const promise = catalog.getProductSellersBySlug(slug,size,pincode,pageNo,pageSize);

// Async/Await
const data = await catalog.getProductSellersBySlug(slug,size,pincode,pageNo,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/** | 
| size | string | The size of the product for which the price needs to be retrieved. You can get the available sizes of a product from **v1.0.0/products/sizes** | 
| pincode | string | The pincode of the product for which the price needs to be retrieved. | 
| pageNo | integer | The page number to navigate through the given set of results. | 
| pageSize | integer | Number of items to retrieve in each page. Default is 12. | 

A product of a particular size can be sold by multiple sellers. Use this API to fetch the sellers who are selling this product and have the stock of a particular size

*Success Response:*



The ProductSizeSeller object. See example below or refer `ProductSizeSellersResponse` for details


Schema: `ProductSizeSellersResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getProductComparisonBySlugs
Compare products

```javascript
// Promise
const promise = catalog.getProductComparisonBySlugs(slug);

// Async/Await
const data = await catalog.getProductComparisonBySlugs(slug);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | The unique identifier `slug` of a products. You can retrieve this from the APIs that list products like **v1.0/products/** | 

Compare between the features of the given set of products Use this API to compare how one product ranks against other products. Note that at least one slug is mandatory in request query.

*Success Response:*



The comparison between the products. See example below or refer `ProductsComparisonResponse` for details


Schema: `ProductsComparisonResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getSimilarComparisonProductBySlug
Get comparison between similar products

```javascript
// Promise
const promise = catalog.getSimilarComparisonProductBySlug(slug);

// Async/Await
const data = await catalog.getSimilarComparisonProductBySlug(slug);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | The unique identifier `slug` of a product. You can retrieve this from the APIs that list products like **v1.0/products/** | 

Compare between the features of the given set of products Use this API to compare how one product ranks against other products

*Success Response:*



The comparison between products similar to given product. See example below or refer `ProductCompareResponse` for details


Schema: `ProductCompareResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getComparedFrequentlyProductBySlug
Get comparison between frequently compared products with the given product

```javascript
// Promise
const promise = catalog.getComparedFrequentlyProductBySlug(slug);

// Async/Await
const data = await catalog.getComparedFrequentlyProductBySlug(slug);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | The unique identifier `slug` of a product. You can retrieve this from the APIs that list products like **v1.0/products/** | 

Compare between the features of the give product with frequently compared products Use this API to compare how one product ranks against other products

*Success Response:*



The comparison between products similar to given product. See example below or refer `ProductFrequentlyComparedSimilarResponse` for details


Schema: `ProductFrequentlyComparedSimilarResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getProductSimilarByIdentifier
Get similar products

```javascript
// Promise
const promise = catalog.getProductSimilarByIdentifier(slug,similarType);

// Async/Await
const data = await catalog.getProductSimilarByIdentifier(slug,similarType);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/** | 
| similarType | string | The tag_identifier is used to fetch the particular type of similar product such as basic, visual, price, seller, category and spec. | 

Get products similar to the one specified by the `identifier`. If successful, it returns a group of similar products based on type as described in `SimilarProductByTypeResponse`

*Success Response:*



Similar Products based on type passed in the request path. Refer `SimilarProductByTypeResponse` for response structure


Schema: `SimilarProductByTypeResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getProductVariantsBySlug
Get variant of a particular product

```javascript
// Promise
const promise = catalog.getProductVariantsBySlug(slug);

// Async/Await
const data = await catalog.getProductVariantsBySlug(slug);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/** | 

A product can have a different type of variants varies from color to shade etc. Use this API to fetch all the available variants of a product. If successful, returns a Products for different variants type in the response body as specified in `ProductVariantResponse`

*Success Response:*



See example below or refer `ProductVariantsResponse` for details. For `display_type:image`, `color` key will be present otherwise `value` key will be preset.


Schema: `ProductVariantsResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getProductStockByIds
Get the stock of a product

```javascript
// Promise
const promise = catalog.getProductStockByIds(itemId,alu,skuCode,ean,upc);

// Async/Await
const data = await catalog.getProductStockByIds(itemId,alu,skuCode,ean,upc);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| itemId | string | Product id to get product stock (Max. 50 allowed) | 
| alu | string | Product identifier alu to get product stock (Max. 50 allowed) | 
| skuCode | string | Product identifier sku_code to get product stock (Max. 50 allowed) | 
| ean | string | Product identifier ean to get product stock (Max. 50 allowed) | 
| upc | string | Product identifier upc to get product stock (Max. 50 allowed) | 

Retrieve the available stock of the products. You can use this API to retrieve stock of multiple products at a time. Only 50 product IDs can be given in a single API request

*Success Response:*



The ProductStockStatus object. See example below or refer `ProductStockStatusResponse` for details


Schema: `ProductStockStatusResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getProductStockForTimeByIds
Get the stock of a product

```javascript
// Promise
const promise = catalog.getProductStockForTimeByIds(timestamp,pageSize,pageId);

// Async/Await
const data = await catalog.getProductStockForTimeByIds(timestamp,pageSize,pageId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| timestamp | string | timestamp in UTC format (2020-07-23T10:27:50Z) | 
| pageSize | integer | Limit of number of items for stock status default 12 | 
| pageId | string | will give next page results | 

Retrieve the available stock of the products. You can use this api to get stock status of products whose inventory is updated in given time

*Success Response:*



The ProductStockStatus object. See example below or refer `ProductStockPolling` for details


Schema: `ProductStockPolling`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getProducts
List the products

```javascript
// Promise
const promise = catalog.getProducts(q,f,filters,sortOn,pageId,pageSize,pageNo,pageType);

// Async/Await
const data = await catalog.getProducts(q,f,filters,sortOn,pageId,pageSize,pageNo,pageType);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| q | string | The search query. This can be a partial or complete name of a either a product, brand or category | 
| f | string | The search filter parameters. All the parameter filtered from filter parameters will be passed in **f** parameter in this format. **?f=brand:voi-jeans||and:::l3_categories:t-shirts||shirts** | 
| filters | boolean | Pass `filters` parameter to fetch the filter details. This flag is used to fetch all filters | 
| sortOn | string | The order to sort the list of products on. The supported sort parameters are popularity, price, redemption and discount in either ascending or descending order. See the supported values below. | 
| pageId | string | Each response will contain **page_id** param, which should be sent back to make pagination work. | 
| pageSize | integer | Number of items to retrieve in each page. Default is 12. | 
| pageNo | integer | If page_type is number then pass it to fetch page items. Default is 1. | 
| pageType | string | For pagination type should be cursor or number. Default is cursor. | 

List all the products associated with a brand, collection or category in a requested sort order. The API additionally supports arbitrary search queries that may refer the name of any product, brand, category or collection. If successful, returns a paginated list of products specified in `ProductListingResponse`

*Success Response:*



List of Products. See example below or refer `ProductListingResponse` for details


Schema: `ProductListingResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getBrands
List all the brands

```javascript
// Promise
const promise = catalog.getBrands(department,pageNo,pageSize);

// Async/Await
const data = await catalog.getBrands(department,pageNo,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| department | string | The name of the department. Use this parameter to filter products by a particular department. See below the list of available departments. You can retrieve available departments from the **v1.0/departments/** API | 
| pageNo | integer | The page number to navigate through the given set of results | 
| pageSize | integer | Number of items to retrieve in each page. Default is 12. | 

A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`

*Success Response:*



List of Brands. See example below or refer `BrandListingResponse` for details


Schema: `BrandListingResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getBrandDetailBySlug
Get metadata of a brand

```javascript
// Promise
const promise = catalog.getBrandDetailBySlug(slug);

// Async/Await
const data = await catalog.getBrandDetailBySlug(slug);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | The unique identifier of a brand. i.e; `slug` of a brand. You can retrieve these from the APIs that list brands like **v1.0/brands/** | 

Fetch metadata of a brand. If successful, returns a metadata object specified in `BrandDetailResponse`

*Success Response:*



The Metadata object. See example below or refer `BrandDetailResponse` for details.


Schema: `BrandDetailResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getCategories
List all the categories

```javascript
// Promise
const promise = catalog.getCategories(department);

// Async/Await
const data = await catalog.getCategories(department);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| department | string | The name of the department. Use this parameter to filter products by a particular department. See below the list of available departments. You can retrieve available departments from the **v1.0/departments/** API | 

List all the categories. You can optionally pass filter the brands by the department. If successful, returns a paginated list of brands specified in `CategoryListingResponse`

*Success Response:*



List of Categories. See example below or refer `CategoryListingResponse` for details.


Schema: `CategoryListingResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getCategoryDetailBySlug
Get metadata of a category

```javascript
// Promise
const promise = catalog.getCategoryDetailBySlug(slug);

// Async/Await
const data = await catalog.getCategoryDetailBySlug(slug);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | The unique identifier of a category. i.e; `slug` of a category. You can retrieve these from the APIs that list categories like **v1.0/categories/** | 

Fetch metadata of a category. If successful, returns a metadata object specified in `CategoryMetaResponse`

*Success Response:*



The Metadata object. See example below or refer `CategoryMetaResponse` for details.


Schema: `CategoryMetaResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getHomeProducts
List the products

```javascript
// Promise
const promise = catalog.getHomeProducts(sortOn,pageId,pageSize);

// Async/Await
const data = await catalog.getHomeProducts(sortOn,pageId,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| sortOn | string | Each response will contain **sort_on** param, which should be sent back to make pagination work. | 
| pageId | string | Each response will contain **page_id** param, which should be sent back to make pagination work. | 
| pageSize | integer | Number of items to retrieve in each page. Default is 12. | 

List all the products associated with a brand, collection or category in a random order. If successful, returns a paginated list of products specified in `HomeListingResponse`

*Success Response:*



List of Products. See example below or refer `HomeListingResponse` for details


Schema: `HomeListingResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getDepartments
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

*Success Response:*



List of Departments. See example below or refer `DepartmentResponse` for details.


Schema: `DepartmentResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getSearchResults
Get relevant suggestions for a search query

```javascript
// Promise
const promise = catalog.getSearchResults(q);

// Async/Await
const data = await catalog.getSearchResults(q);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| q | string | The search query. This can be a partial or complete name of a either a product, brand or category | 

Retrieves a list of suggestions for a given search query. Each suggestion is a valid search term that's generated on the basis of what is given in query. This is particularly useful to enhance the user experience in search. The given search query can be a partial name of any product, brand and category. For example, if the given search query `q` is _ski_ the relevant search suggestions returned might be a list containing _skirt_, _ski shoes_, __skin cream_ etc.

*Success Response:*



Lists of autocomplete suggestions for the search query `q`. See example response below or refer `AutoCompleteResponse` for details


Schema: `AutoCompleteResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getCollections
List all the collections

```javascript
// Promise
const promise = catalog.getCollections(pageNo,pageSize);

// Async/Await
const data = await catalog.getCollections(pageNo,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| pageNo | integer | Each response will contain **page_no** param, which should be sent back to make pagination work. | 
| pageSize | integer | Number of items to retrieve in each page. Default is 12. | 

A Collection allows you to organize your products into hierarchical groups. For example, a dress might be in the category _Clothing_, the individual product might also be in the collection _Summer_. On successful request, returns all the collections`

*Success Response:*



List of collections. See example below or refer `GetCollectionListingResponse` for details


Schema: `GetCollectionListingResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getCollectionItemsBySlug
Get the items in a collection

```javascript
// Promise
const promise = catalog.getCollectionItemsBySlug(slug,f,filters,sortOn,pageId,pageSize);

// Async/Await
const data = await catalog.getCollectionItemsBySlug(slug,f,filters,sortOn,pageId,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | A `slug` is a human readable, URL friendly unique identifier of an object. Pass the `slug` of the collection for which you want to fetch the items | 
| f | string | The search filter parameters. All the parameter filtered from filter parameters will be passed in **f** parameter in this format. **?f=brand:voi-jeans||and:::l3_categories:t-shirts||shirts** | 
| filters | boolean | Pass `filters` parameter to fetch the filter details. This flag is used to fetch all filters | 
| sortOn | string | The order to sort the list of products on. The supported sort parameters are popularity, price, redemption and discount in either ascending or descending order. See the supported values below. | 
| pageId | string | Each response will contain **page_id** param, which should be sent back to make pagination work. | 
| pageSize | integer | Number of items to retrieve in each page. Default is 12. | 

Get items in a collection specified by its `slug`.

*Success Response:*



The attached items of an collection. See example below or refer `ProductListingResponse` for details


Schema: `ProductListingResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getCollectionDetailBySlug
Get a particular collection

```javascript
// Promise
const promise = catalog.getCollectionDetailBySlug(slug);

// Async/Await
const data = await catalog.getCollectionDetailBySlug(slug);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | A `slug` is a human readable, URL friendly unique identifier of an object. Pass the `slug` of the collection which you want to retrieve. | 

Get the details of a collection by its `slug`. If successful, returns a Collection resource in the response body specified in `CollectionDetailResponse`

*Success Response:*



The Collection object. See example below or refer `CollectionDetailResponse` for details


Schema: `CollectionDetailResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getFollowedListing
Get a list of followed Products, Brands, Collections

```javascript
// Promise
const promise = catalog.getFollowedListing(collectionType,pageId,pageSize);

// Async/Await
const data = await catalog.getFollowedListing(collectionType,pageId,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| collectionType | string | Type of collection followed. i. e. products, brands, collections | 
| pageId | string | Each response will contain **page_id** param, which should be sent back to make pagination work. | 
| pageSize | integer | Number of items to retrieve in each page. Default is 12. | 

A User can follow a Product they like. This API retrieves the products the user have followed. If successful, returns a Followed resource in the response body specified in `GetFollowResponseSchema`

*Success Response:*



The Followed resource object. See example below or refer `GetFollowListingResponse` for details.


Schema: `GetFollowListingResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### followById
Follow a particular Product

```javascript
// Promise
const promise = catalog.followById(collectionType,collectionId);

// Async/Await
const data = await catalog.followById(collectionType,collectionId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| collectionType | string | Type of collection followed. i. e. products, brands, collections | 
| collectionId | string | the `id` of the collection type you want to follow | 

Follow a particular Product specified by its uid. Pass the uid of the product in request URL

*Success Response:*



The response object. See example below or refer `FollowPostResponse` for details


Schema: `FollowPostResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### unfollowById
UnFollow a Product

```javascript
// Promise
const promise = catalog.unfollowById(collectionType,collectionId);

// Async/Await
const data = await catalog.unfollowById(collectionType,collectionId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| collectionType | string | Type of collection followed. i. e. products, brands, collections | 
| collectionId | string | the `id` of the collection type you want to unfollow | 

You can undo a followed Product or Brand by its id, we refer this action as _unfollow_. Pass the uid of the product in request URL

*Success Response:*



The response object. See example below or refer `FollowPostResponse` for details


Schema: `FollowPostResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getFollowerCountById
Get Follow Count

```javascript
// Promise
const promise = catalog.getFollowerCountById(collectionType,collectionId);

// Async/Await
const data = await catalog.getFollowerCountById(collectionType,collectionId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| collectionType | string | the `type` of the collection products/brands/collections. | 
| collectionId | string | the `id` of the product/brand/collection. | 

Get count of followers for given collection type and collection id.

*Success Response:*



The response object. See example below or refer `FollowerCountResponse` for details


Schema: `FollowerCountResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getFollowIds
Get the Ids of followed product, brand and collection.

```javascript
// Promise
const promise = catalog.getFollowIds(collectionType);

// Async/Await
const data = await catalog.getFollowIds(collectionType);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| collectionType | string | Type of collection followed. i. e. products, brands, collections | 

You can get the ids of all the followed Product, Brand and Collections. Pass collection_type as query parameter to fetch specific Ids

*Success Response:*



The response object. See example below or refer `FollowIdsResponse` for details


Schema: `FollowIdsResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getStores
List store meta information.

```javascript
// Promise
const promise = catalog.getStores(pageNo,pageSize,q,range,latitude,longitude);

// Async/Await
const data = await catalog.getStores(pageNo,pageSize,q,range,latitude,longitude);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| pageNo | integer | Each response will contain **page_no** param, which should be sent back to make pagination work. | 
| pageSize | integer | Number of items to retrieve in each page. | 
| q | string | This can be used to search a particulr store by its name or store_code. | 
| range | integer | This can be used to retrieve store within a particular range. For eg range=10000 (in meters) | 
| latitude | number | This should be the latitude of the location from which one needs to retreive the nearest stores. | 
| longitude | number | This should be the longitude of the location from which one needs to retreive the nearest stores. | 

Use this API to get list of stores for specific application. If successful, returns list of stores specified in `StoreListingResponse`

*Success Response:*



List of Stores. See example below or refer `StoreListingResponse` for details


Schema: `StoreListingResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---



---


## Cart


#### getCart
Fetch all Items Added to  Cart

```javascript
// Promise
const promise = cart.getCart(uid,i,b,assignCardId);

// Async/Await
const data = await cart.getCart(uid,i,b,assignCardId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| uid | integer |  | 
| i | boolean |  | 
| b | boolean |  | 
| assignCardId | integer |  | 

Get all the details of a items added to cart  by uid. If successful, returns a Cart resource in the response body specified in CartResponse

*Success Response:*



The Cart object. See example below or refer CartResponse for details


Schema: `CartResponse`









---


#### getCartLastModified
Fetch Last-Modified timestamp

```javascript
// Promise
const promise = cart.getCartLastModified(uid);

// Async/Await
const data = await cart.getCartLastModified(uid);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| uid | integer |  | 

Fetch Last-Modified timestamp in header metadata

*Success Response:*



Fetch Last-Modified Timestamp Response






---


#### addItems
Add Items to Cart

```javascript
// Promise
const promise = cart.addItems(body,i,b);

// Async/Await
const data = await cart.addItems(body,i,b);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| i | boolean |  | 
| b | boolean |  | 

<p>Add Items to cart. See `AddCartRequest` in schema of request body for the list of attributes needed to add items to a cart. On successful request, returns cart response containing details of items, coupons available etc.these attributes will be fetched from the folowing api's</p>

*Success Response:*



Response of the cart object including all item details included in .the cart,coupons etc.


Schema: `AddCartResponse`


*Examples:*


Product has been added to your cart
```json
{
  "value": {
    "message": "Product has been added to your cart",
    "success": true,
    "cart": {
      "breakup_values": {
        "display": [
          {
            "display": "MRP Total",
            "key": "mrp_total",
            "value": 17486,
            "currency_code": "INR"
          },
          {
            "display": "Discount",
            "key": "discount",
            "value": -3540,
            "currency_code": "INR"
          },
          {
            "display": "Subtotal",
            "key": "subtotal",
            "value": 13946,
            "currency_code": "INR"
          },
          {
            "display": "Total",
            "key": "total",
            "value": 13946,
            "currency_code": "INR"
          }
        ],
        "raw": {
          "cod_charge": 0,
          "convenience_fee": 0,
          "coupon": 0,
          "delivery_charge": 0,
          "discount": -3540,
          "fynd_cash": 0,
          "gst_charges": 1529.96,
          "mrp_total": 17486,
          "subtotal": 13946,
          "total": 13946,
          "vog": 12416.04,
          "you_saved": 0
        },
        "loyalty_points": {
          "total": 0,
          "applicable": 0,
          "is_applied": false,
          "description": "Your cashback, referrals, and refund amount get credited to Fynd Cash which can be redeemed while placing an order."
        },
        "coupon": {
          "type": "cash",
          "code": "",
          "uid": null,
          "value": 0,
          "is_applied": false,
          "message": "Sorry! Invalid Coupon"
        }
      },
      "items": [
        {
          "key": "751083_10",
          "article": {
            "type": "article",
            "uid": "612_9_SE61201_19100302_10",
            "size": "10",
            "seller": {
              "uid": 612,
              "name": "SSR ENTERPRISE"
            },
            "store": {
              "uid": 4431,
              "name": "Motilal Nagar 1, Goregaon"
            },
            "quantity": 4,
            "price": {
              "base": {
                "marked": 3999,
                "effective": 2399,
                "currency_code": "INR"
              },
              "converted": {
                "marked": 3999,
                "effective": 2399,
                "currency_code": "INR"
              }
            }
          },
          "price": {
            "base": {
              "add_on": 4798,
              "marked": 7998,
              "effective": 4798,
              "selling": 4798,
              "currency_code": "INR"
            },
            "converted": {
              "add_on": 4798,
              "marked": 7998,
              "effective": 4798,
              "selling": 4798,
              "currency_code": "INR"
            }
          },
          "availability": {
            "sizes": [
              "10"
            ],
            "other_store_quantity": 2,
            "out_of_stock": false,
            "deliverable": true,
            "is_valid": true
          },
          "product": {
            "type": "product",
            "uid": 751083,
            "name": "Carson 2",
            "slug": "puma-carson-2-751083-6ad98d",
            "brand": {
              "uid": 9,
              "name": "Puma"
            },
            "categories": [
              {
                "uid": 165,
                "name": "Outdoor Sports Shoes"
              }
            ],
            "images": [
              {
                "aspect_ratio": "16:25",
                "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/9_19100302/1_1542807042296.jpg",
                "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/9_19100302/1_1542807042296.jpg"
              }
            ],
            "action": {
              "type": "product",
              "url": "https://api.addsale.com/platform/content/v1/products/puma-carson-2-751083-6ad98d/",
              "query": {
                "product_slug": [
                  "puma-carson-2-751083-6ad98d"
                ]
              }
            }
          },
          "coupon_message": "",
          "quantity": 2,
          "message": "",
          "bulk_offer": {},
          "discount": "41% OFF"
        },
        {
          "key": "246228_S",
          "article": {
            "type": "article",
            "uid": "46_235_TM62_M11029ONDSXNS_S",
            "size": "S",
            "seller": {
              "uid": 46,
              "name": "RELIANCE BRANDS LIMITED"
            },
            "store": {
              "uid": 4550,
              "name": "VR Mall"
            },
            "quantity": 1,
            "price": {
              "base": {
                "marked": 4490,
                "effective": 4490,
                "currency_code": "INR"
              },
              "converted": {
                "marked": 4490,
                "effective": 4490,
                "currency_code": "INR"
              }
            }
          },
          "price": {
            "base": {
              "add_on": 4490,
              "marked": 4490,
              "effective": 4490,
              "selling": 4490,
              "currency_code": "INR"
            },
            "converted": {
              "add_on": 4490,
              "marked": 4490,
              "effective": 4490,
              "selling": 4490,
              "currency_code": "INR"
            }
          },
          "availability": {
            "sizes": [
              "L",
              "M",
              "S",
              "XL",
              "XXL"
            ],
            "other_store_quantity": 0,
            "out_of_stock": false,
            "deliverable": true,
            "is_valid": true
          },
          "product": {
            "type": "product",
            "uid": 246228,
            "name": "Blue Solid T-Shirt",
            "slug": "superdry-blue-solid-t-shirt-2",
            "brand": {
              "uid": 235,
              "name": "Superdry"
            },
            "categories": [
              {
                "uid": 192,
                "name": "T-Shirts"
              }
            ],
            "images": [
              {
                "aspect_ratio": "16:25",
                "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/235_M11029ONDSXNS/1.jpg",
                "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/235_M11029ONDSXNS/1.jpg"
              }
            ],
            "action": {
              "type": "product",
              "url": "https://api.addsale.com/platform/content/v1/products/superdry-blue-solid-t-shirt-2/",
              "query": {
                "product_slug": [
                  "superdry-blue-solid-t-shirt-2"
                ]
              }
            }
          },
          "coupon_message": "",
          "quantity": 1,
          "message": "",
          "bulk_offer": {},
          "discount": ""
        },
        {
          "key": "443175_S",
          "article": {
            "type": "article",
            "uid": "162_207_1271_LJ03LBLUDN88_S",
            "size": "S",
            "seller": {
              "uid": 162,
              "name": "GO FASHION INDIA PRIVATE LIMITED"
            },
            "store": {
              "uid": 5784,
              "name": "Vega City mall"
            },
            "quantity": 3,
            "price": {
              "base": {
                "marked": 1599,
                "effective": 1599,
                "currency_code": "INR"
              },
              "converted": {
                "marked": 1599,
                "effective": 1599,
                "currency_code": "INR"
              }
            }
          },
          "price": {
            "base": {
              "add_on": 1599,
              "marked": 1599,
              "effective": 1599,
              "selling": 1599,
              "currency_code": "INR"
            },
            "converted": {
              "add_on": 1599,
              "marked": 1599,
              "effective": 1599,
              "selling": 1599,
              "currency_code": "INR"
            }
          },
          "availability": {
            "sizes": [
              "XL",
              "M",
              "L",
              "S"
            ],
            "other_store_quantity": 8,
            "out_of_stock": false,
            "deliverable": true,
            "is_valid": true
          },
          "product": {
            "type": "product",
            "uid": 443175,
            "name": "Light Blue Denim Jeggings",
            "slug": "go-colors-light-blue-denim-jeggings-443175-3c688c",
            "brand": {
              "uid": 207,
              "name": "Go Colors"
            },
            "categories": [
              {
                "uid": 267,
                "name": "Jeggings"
              }
            ],
            "images": [
              {
                "aspect_ratio": "16:25",
                "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/207_LJ03LBLUDN88/1_1512382513548.jpg",
                "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/207_LJ03LBLUDN88/1_1512382513548.jpg"
              }
            ],
            "action": {
              "type": "product",
              "url": "https://api.addsale.com/platform/content/v1/products/go-colors-light-blue-denim-jeggings-443175-3c688c/",
              "query": {
                "product_slug": [
                  "go-colors-light-blue-denim-jeggings-443175-3c688c"
                ]
              }
            }
          },
          "coupon_message": "",
          "quantity": 1,
          "message": "",
          "bulk_offer": {},
          "discount": ""
        },
        {
          "key": "778937_OS",
          "article": {
            "type": "article",
            "uid": "686_963_IC68601_PWUPC01977_OS",
            "size": "OS",
            "seller": {
              "uid": 686,
              "name": "INDUS CORPORATION"
            },
            "store": {
              "uid": 5059,
              "name": "Vidyaranyapura Main Road"
            },
            "quantity": 3,
            "price": {
              "base": {
                "marked": 3399,
                "effective": 3059,
                "currency_code": "INR"
              },
              "converted": {
                "marked": 3399,
                "effective": 3059,
                "currency_code": "INR"
              }
            }
          },
          "price": {
            "base": {
              "add_on": 3059,
              "marked": 3399,
              "effective": 3059,
              "selling": 3059,
              "currency_code": "INR"
            },
            "converted": {
              "add_on": 3059,
              "marked": 3399,
              "effective": 3059,
              "selling": 3059,
              "currency_code": "INR"
            }
          },
          "availability": {
            "sizes": [
              "OS"
            ],
            "other_store_quantity": 2,
            "out_of_stock": false,
            "deliverable": true,
            "is_valid": true
          },
          "product": {
            "type": "product",
            "uid": 778937,
            "name": "Colourful Carnival Bouncer",
            "slug": "fisher-price-colourful-carnival-bouncer-778937-fafa1f",
            "brand": {
              "uid": 963,
              "name": "Fisher-Price"
            },
            "categories": [
              {
                "uid": 576,
                "name": "Cradles"
              }
            ],
            "images": [
              {
                "aspect_ratio": "16:25",
                "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/963_PWUPC01977/1_1545308400588.jpg",
                "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/963_PWUPC01977/1_1545308400588.jpg"
              }
            ],
            "action": {
              "type": "product",
              "url": "https://api.addsale.com/platform/content/v1/products/fisher-price-colourful-carnival-bouncer-778937-fafa1f/",
              "query": {
                "product_slug": [
                  "fisher-price-colourful-carnival-bouncer-778937-fafa1f"
                ]
              }
            }
          },
          "coupon_message": "",
          "quantity": 1,
          "message": "",
          "bulk_offer": {},
          "discount": "11% OFF"
        }
      ],
      "delivery_charge_info": "",
      "coupon_text": "View all offers",
      "cart_id": 7927,
      "uid": "7927",
      "gstin": null,
      "checkout_mode": "self",
      "last_modified": "Tue, 03 Sep 2019 06:00:43 GMT",
      "restrict_checkout": false,
      "is_valid": true
    },
    "result": {}
  }
}
```

Sorry, item is out of stock
```json
{
  "value": {
    "message": "Sorry, item is out of stock",
    "success": false,
    "cart": {
      "breakup_values": {
        "raw": {
          "cod_charge": 0,
          "convenience_fee": 0,
          "coupon": 0,
          "delivery_charge": 0,
          "discount": -202000,
          "fynd_cash": 0,
          "gst_charges": 4804.71,
          "mrp_total": 302899,
          "subtotal": 100899,
          "total": 100899,
          "vog": 96094.29,
          "you_saved": 0
        },
        "coupon": {
          "type": "cash",
          "code": "",
          "uid": null,
          "value": 0,
          "is_applied": false,
          "message": "Sorry! Invalid Coupon"
        },
        "display": [
          {
            "display": "MRP Total",
            "key": "mrp_total",
            "value": 302899,
            "currency_code": "INR"
          },
          {
            "display": "Discount",
            "key": "discount",
            "value": -202000,
            "currency_code": "INR"
          },
          {
            "display": "Subtotal",
            "key": "subtotal",
            "value": 100899,
            "currency_code": "INR"
          },
          {
            "display": "Total",
            "key": "total",
            "value": 100899,
            "currency_code": "INR"
          }
        ],
        "loyalty_points": {
          "total": 0,
          "applicable": 0,
          "is_applied": false,
          "description": "Your cashback, referrals, and refund amount get credited to Fynd Cash which can be redeemed while placing an order."
        }
      },
      "items": [
        {
          "bulk_offer": {},
          "discount": "67% OFF",
          "article": {
            "type": "article",
            "uid": "604_902_SSTC60401_636BLUE_1",
            "size": "1",
            "seller": {
              "uid": 604,
              "name": "SHRI SHANTINATH TRADING COMPANY"
            },
            "store": {
              "uid": 4579,
              "name": "Gandhi Nagar"
            },
            "quantity": 108,
            "price": {
              "base": {
                "marked": 2999,
                "effective": 999,
                "currency_code": "INR"
              },
              "converted": {
                "marked": 2999,
                "effective": 999,
                "currency_code": "INR"
              }
            }
          },
          "coupon_message": "",
          "key": "707569_1",
          "availability": {
            "sizes": [
              "1",
              "8",
              "7",
              "2",
              "9",
              "5",
              "3",
              "6"
            ],
            "other_store_quantity": 7,
            "out_of_stock": false,
            "deliverable": true,
            "is_valid": true
          },
          "product": {
            "type": "product",
            "uid": 707569,
            "name": "Blue and Gold Printed Ethnic Set",
            "slug": "aj-dezines-blue-and-gold-printed-ethnic-set-707569-bff01a",
            "brand": {
              "uid": 902,
              "name": ""
            },
            "categories": [
              {
                "uid": 525,
                "name": ""
              }
            ],
            "images": [
              {
                "aspect_ratio": "16:25",
                "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/902_636BLUE/1_1540301094877.jpg",
                "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/902_636BLUE/1_1540301094877.jpg"
              }
            ],
            "action": {
              "type": "product",
              "url": "https://api.addsale.com/v1/products/aj-dezines-blue-and-gold-printed-ethnic-set-707569-bff01a/",
              "query": {
                "product_slug": [
                  "aj-dezines-blue-and-gold-printed-ethnic-set-707569-bff01a"
                ]
              }
            }
          },
          "price": {
            "base": {
              "add_on": 100899,
              "marked": 302899,
              "effective": 100899,
              "selling": 100899,
              "currency_code": "INR"
            },
            "converted": {
              "add_on": 100899,
              "marked": 302899,
              "effective": 100899,
              "selling": 100899,
              "currency_code": "INR"
            }
          },
          "message": "",
          "quantity": 101
        }
      ],
      "delivery_charge_info": "",
      "coupon_text": "View all offers",
      "cart_id": 54,
      "uid": "54",
      "gstin": null,
      "checkout_mode": "self",
      "restrict_checkout": false,
      "is_valid": false,
      "last_modified": "Tue, 03 Sep 2019 09:55:40 GMT"
    },
    "result": {}
  }
}
```









---


#### updateCart
Update Items already added to Cart

```javascript
// Promise
const promise = cart.updateCart(body,uid,i,b);

// Async/Await
const data = await cart.updateCart(body,uid,i,b);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| uid | integer |  | 
| i | boolean |  | 
| b | boolean |  | 

Request object containing attributes like item_quantity and item_size which can be updated .these attributes will be fetched from the folowing api's</p> <ul> <li><font color="monochrome">operation</font> Operation for current api call. <b>update_item</b> for update items. <b>remove_item</b> for removing items.</li> <li> <font color="monochrome">item_id</font>  "/platform/content/v1/products/"</li> <li> <font color="monochrome">item_size</font>   "/platform/content/v1/products/{slug}/sizes/"</li> <li> <font color="monochrome">quantity</font>  item quantity (must be greater than or equal to 1)</li> <li> <font color="monochrome">article_id</font>   "/content​/v1​/products​/{identifier}​/sizes​/price​/"</li> <li> <font color="monochrome">item_index</font>  item position in the cart (must be greater than or equal to 0)</li> </ul>

*Success Response:*



Response of the cart object including all item with their updated details included in .the cart,coupons etc..


Schema: `UpdateCartResponse`


*Examples:*


Nothing updated
```json
{
  "value": {
    "cart": {
      "breakup_values": {
        "raw": {
          "cod_charge": 0,
          "convenience_fee": 0,
          "coupon": 0,
          "delivery_charge": 0,
          "discount": -202000,
          "fynd_cash": 0,
          "gst_charges": 4804.71,
          "mrp_total": 302899,
          "subtotal": 100899,
          "total": 100899,
          "vog": 96094.29,
          "you_saved": 0
        },
        "coupon": {
          "type": "cash",
          "code": "",
          "uid": null,
          "value": 0,
          "is_applied": false,
          "message": "Sorry! Invalid Coupon"
        },
        "display": [
          {
            "display": "MRP Total",
            "key": "mrp_total",
            "value": 302899,
            "currency_code": "INR"
          },
          {
            "display": "Discount",
            "key": "discount",
            "value": -202000,
            "currency_code": "INR"
          },
          {
            "display": "Subtotal",
            "key": "subtotal",
            "value": 100899,
            "currency_code": "INR"
          },
          {
            "display": "Total",
            "key": "total",
            "value": 100899,
            "currency_code": "INR"
          }
        ],
        "loyalty_points": {
          "total": 0,
          "applicable": 0,
          "is_applied": false,
          "description": "Your cashback, referrals, and refund amount get credited to Fynd Cash which can be redeemed while placing an order."
        }
      },
      "items": [
        {
          "bulk_offer": {},
          "discount": "67% OFF",
          "article": {
            "type": "article",
            "uid": "604_902_SSTC60401_636BLUE_1",
            "size": "1",
            "seller": {
              "uid": 604,
              "name": "SHRI SHANTINATH TRADING COMPANY"
            },
            "store": {
              "uid": 4579,
              "name": "Gandhi Nagar"
            },
            "quantity": 108,
            "price": {
              "base": {
                "marked": 2999,
                "effective": 999,
                "currency_code": "INR"
              },
              "converted": {
                "marked": 2999,
                "effective": 999,
                "currency_code": "INR"
              }
            }
          },
          "coupon_message": "",
          "key": "707569_1",
          "availability": {
            "sizes": [
              "1",
              "8",
              "7",
              "2",
              "9",
              "5",
              "3",
              "6"
            ],
            "other_store_quantity": 7,
            "out_of_stock": false,
            "deliverable": true,
            "is_valid": true
          },
          "product": {
            "type": "product",
            "uid": 707569,
            "name": "Blue and Gold Printed Ethnic Set",
            "slug": "aj-dezines-blue-and-gold-printed-ethnic-set-707569-bff01a",
            "brand": {
              "uid": 902,
              "name": ""
            },
            "categories": [
              {
                "uid": 525,
                "name": ""
              }
            ],
            "images": [
              {
                "aspect_ratio": "16:25",
                "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/902_636BLUE/1_1540301094877.jpg",
                "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/902_636BLUE/1_1540301094877.jpg"
              }
            ],
            "action": {
              "type": "product",
              "url": "https://api.addsale.com/v1/products/aj-dezines-blue-and-gold-printed-ethnic-set-707569-bff01a/",
              "query": {
                "product_slug": [
                  "aj-dezines-blue-and-gold-printed-ethnic-set-707569-bff01a"
                ]
              }
            }
          },
          "price": {
            "base": {
              "add_on": 100899,
              "marked": 302899,
              "effective": 100899,
              "selling": 100899,
              "currency_code": "INR"
            },
            "converted": {
              "add_on": 100899,
              "marked": 302899,
              "effective": 100899,
              "selling": 100899,
              "currency_code": "INR"
            }
          },
          "message": "",
          "quantity": 101
        }
      ],
      "delivery_charge_info": "",
      "coupon_text": "View all offers",
      "cart_id": 54,
      "uid": "54",
      "gstin": null,
      "checkout_mode": "self",
      "restrict_checkout": false,
      "is_valid": true,
      "last_modified": "Tue, 03 Sep 2019 10:19:20 GMT"
    },
    "result": {
      "707569_90": {
        "success": true,
        "message": "Nothing updated"
      }
    },
    "message": "Nothing updated",
    "success": true
  }
}
```

Item updated in the cart
```json
{
  "value": {
    "cart": {
      "breakup_values": {
        "coupon": {
          "type": "cash",
          "code": "",
          "uid": null,
          "value": 0,
          "is_applied": false,
          "message": "Sorry! Invalid Coupon"
        },
        "loyalty_points": {
          "total": 0,
          "applicable": 0,
          "is_applied": false,
          "description": "Your cashback, referrals, and refund amount get credited to Fynd Cash which can be redeemed while placing an order."
        },
        "raw": {
          "cod_charge": 0,
          "convenience_fee": 0,
          "coupon": 0,
          "delivery_charge": 0,
          "discount": 0,
          "fynd_cash": 0,
          "gst_charges": 838.83,
          "mrp_total": 5499,
          "subtotal": 5499,
          "total": 5499,
          "vog": 4660.17,
          "you_saved": 0
        },
        "display": [
          {
            "display": "MRP Total",
            "key": "mrp_total",
            "value": 5499,
            "currency_code": "INR"
          },
          {
            "display": "Subtotal",
            "key": "subtotal",
            "value": 5499,
            "currency_code": "INR"
          },
          {
            "display": "Total",
            "key": "total",
            "value": 5499,
            "currency_code": "INR"
          }
        ]
      },
      "items": [
        {
          "key": "437414_7",
          "message": "",
          "bulk_offer": {},
          "price": {
            "base": {
              "add_on": 5499,
              "marked": 5499,
              "effective": 5499,
              "selling": 5499,
              "currency_code": "INR"
            },
            "converted": {
              "add_on": 5499,
              "marked": 5499,
              "effective": 5499,
              "selling": 5499,
              "currency_code": "INR"
            }
          },
          "quantity": 1,
          "discount": "",
          "product": {
            "type": "product",
            "uid": 437414,
            "name": "Suede Classic",
            "slug": "puma-suede-classic-437414-6e6bbf",
            "brand": {
              "uid": 9,
              "name": "Puma"
            },
            "categories": [
              {
                "uid": 165,
                "name": "Outdoor Sports Shoes"
              }
            ],
            "images": [
              {
                "aspect_ratio": "16:25",
                "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/9_35656851/1_1511171811830.jpg",
                "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/9_35656851/1_1511171811830.jpg"
              }
            ],
            "action": {
              "type": "product",
              "url": "https://api.addsale.com/platform/content/v1/products/puma-suede-classic-437414-6e6bbf/",
              "query": {
                "product_slug": [
                  "puma-suede-classic-437414-6e6bbf"
                ]
              }
            }
          },
          "article": {
            "type": "article",
            "uid": "507_9_96099_35656851_7",
            "size": "7",
            "seller": {
              "uid": 507,
              "name": "PUMA SPORTS INDIA PVT LTD"
            },
            "store": {
              "uid": 3632,
              "name": "Colaba Causway"
            },
            "quantity": 5,
            "price": {
              "base": {
                "marked": 5499,
                "effective": 5499,
                "currency_code": "INR"
              },
              "converted": {
                "marked": 5499,
                "effective": 5499,
                "currency_code": "INR"
              }
            }
          },
          "coupon_message": "",
          "availability": {
            "sizes": [
              "10",
              "11",
              "6",
              "9",
              "7",
              "8"
            ],
            "other_store_quantity": 22,
            "out_of_stock": false,
            "deliverable": true,
            "is_valid": true
          }
        }
      ],
      "delivery_charge_info": "",
      "coupon_text": "View all offers",
      "cart_id": 12426,
      "uid": "12426",
      "gstin": null,
      "checkout_mode": "self",
      "last_modified": "Thu, 22 Aug 2019 04:51:42 GMT",
      "restrict_checkout": false,
      "is_valid": true
    },
    "result": {
      "437414_7": {
        "success": true,
        "message": "Item updated in the bag"
      }
    },
    "message": "Item updated in the bag",
    "success": true
  }
}
```









---


#### getItemCount
Cart item count

```javascript
// Promise
const promise = cart.getItemCount(uid);

// Async/Await
const data = await cart.getItemCount(uid);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| uid | integer | Cart id | 

Get total count of item present in cart

*Success Response:*



OK


Schema: `CartItemCountResponse`









---


#### getCoupons
Fetch Coupon

```javascript
// Promise
const promise = cart.getCoupons(uid);

// Async/Await
const data = await cart.getCoupons(uid);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| uid | integer |  | 

Get all the details of a coupons applicable to cart  by uid. If successful, returns a Coupon resource in the response body specified in GetCouponResponse

*Success Response:*



Returns The Couppon object which has list of all available_coupon applicale for the cart. See example below or refer GetCouponResponse for details


Schema: `GetCouponResponse`









---


#### applyCoupon
Apply Coupon

```javascript
// Promise
const promise = cart.applyCoupon(body,i,b,p,uid);

// Async/Await
const data = await cart.applyCoupon(body,i,b,p,uid);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| i | boolean |  | 
| b | boolean |  | 
| p | boolean |  | 
| uid | integer |  | 

<p>Apply Coupons on Items added to cart. On successful request, returns cart response containing details of items ,coupons applied etc.these attributes will be consumed by  api</p> <ul> <li> <font color="monochrome">coupon_code</font></li>
</ul>

*Success Response:*



Response of the Coupon object including all item details included in .the cart,coupons applied etc.


Schema: `CartResponse`









---


#### removeCoupon
Remove Coupon Applied

```javascript
// Promise
const promise = cart.removeCoupon(uid);

// Async/Await
const data = await cart.removeCoupon(uid);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| uid | integer | Cart id | 

Remove Coupon applied on the cart by passing uid in request body.

*Success Response:*



Response of the Coupon object including all item details included in .the cart,coupons removed etc.


Schema: `CartResponse`









---


#### getBulkDiscountOffers
Get discount offers based on quantity

```javascript
// Promise
const promise = cart.getBulkDiscountOffers(itemId,articleId,uid,slug);

// Async/Await
const data = await cart.getBulkDiscountOffers(itemId,articleId,uid,slug);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| itemId | integer | Item id | 
| articleId | string | Article mongo id | 
| uid | integer | Item id | 
| slug | string | Item unique url from product page | 

List applicable offers along with current, next and best offer for given product. Either one of **uid**, **item_id**, **slug** should be present*

*Success Response:*



Offers found or not found with valid input


Schema: `BulkPriceResponse`


*Examples:*


Offers found
```json
{
  "value": {
    "data": [
      {
        "seller": {
          "uid": 248,
          "name": "MANYAVAR CREATIONS PRIVATE LIMITED"
        },
        "offers": [
          {
            "quantity": 1,
            "auto_applied": true,
            "margin": 10,
            "type": "bundle",
            "price": {
              "marked": 3999,
              "effective": 3999,
              "bulk_effective": 3599.1,
              "currency_code": "INR"
            },
            "total": 3599.1
          },
          {
            "quantity": 3,
            "auto_applied": true,
            "margin": 20,
            "type": "bundle",
            "price": {
              "marked": 3999,
              "effective": 3999,
              "bulk_effective": 3199.2,
              "currency_code": "INR"
            },
            "total": 9597.6
          },
          {
            "quantity": 9,
            "auto_applied": true,
            "margin": 30,
            "type": "bundle",
            "price": {
              "marked": 3999,
              "effective": 3999,
              "bulk_effective": 3443.4444444444,
              "currency_code": "INR"
            },
            "total": 30991,
            "best": true
          }
        ]
      }
    ]
  }
}
```

Offers not found
```json
{
  "value": {
    "data": []
  }
}
```








Unhandled api error


Schema: `Object`









---


#### getAddresses
Fetch Address

```javascript
// Promise
const promise = cart.getAddresses(uid,mobileNo,checkoutMode,tags,isDefault);

// Async/Await
const data = await cart.getAddresses(uid,mobileNo,checkoutMode,tags,isDefault);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| uid | integer |  | 
| mobileNo | string |  | 
| checkoutMode | string |  | 
| tags | string |  | 
| isDefault | boolean |  | 

Get all the addresses associated with the account. If successful, returns a Address resource in the response body specified in GetAddressesResponse.attibutes listed below are optional <ul> <li> <font color="monochrome">uid</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>

*Success Response:*



Returns The Address object which has list of all address saved for the account. See example below or refer GetAddressesResponse for details


Schema: `GetAddressesResponse`









---


#### addAddress
Add Address to the account

```javascript
// Promise
const promise = cart.addAddress(body);

// Async/Await
const data = await cart.addAddress(body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

<p>Add Address to account. See `Address` in schema of request body for the list of attributes needed to add Address to account. On successful request, returns response containing address_id ,is_default_address and success message.

*Success Response:*



Return Address Id on successfull completion of the request.


Schema: `SaveAddressResponse`









---


#### getAddressById
Fetch Single Address

```javascript
// Promise
const promise = cart.getAddressById(id,uid,mobileNo,checkoutMode,tags,isDefault);

// Async/Await
const data = await cart.getAddressById(id,uid,mobileNo,checkoutMode,tags,isDefault);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| id | integer |  | 
| uid | integer |  | 
| mobileNo | string |  | 
| checkoutMode | string |  | 
| tags | string |  | 
| isDefault | boolean |  | 

Get a addresses with the given id. If successful, returns a Address resource in the response body specified in `Address`.attibutes listed below are optional <ul> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>

*Success Response:*



Returns The Address object which has list of all address saved for the account. See example below or refer Address for details


Schema: `Address`









---


#### updateAddress
Update Address alreay added to account

```javascript
// Promise
const promise = cart.updateAddress(id,body);

// Async/Await
const data = await cart.updateAddress(id,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| id | integer | Address id | 

Request object containing attributes mentioned in  <font color="blue">Address </font> can be updated .these attributes are :</p> <ul> <li> <font color="monochrome">is_default_address</font></li> <li> <font color="monochrome">landmark</font></li> <li> <font color="monochrome">area</font></li> <li> <font color="monochrome">pincode</font></li> <li> <font color="monochrome">email</font></li> <li> <font color="monochrome">address_type</font></li> <li> <font color="monochrome">name</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">address</font></li> </ul>

*Success Response:*



Response of the Address object containing address_id and sucess message.


Schema: `UpdateAddressResponse`









---


#### removeAddress
Remove Address Associated to the account

```javascript
// Promise
const promise = cart.removeAddress(id);

// Async/Await
const data = await cart.removeAddress(id);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| id | integer | Address id | 

Delete a Address by it's address_id. Returns an object that tells whether the address was deleted successfully

*Success Response:*



Status object. Tells whether the operation was successful. See example below or refer DeleteAddressResponse


Schema: `DeleteAddressResponse`









---


#### selectAddress
Select Address from All Addresses

```javascript
// Promise
const promise = cart.selectAddress(body,uid,i,b);

// Async/Await
const data = await cart.selectAddress(body,uid,i,b);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| uid | integer |  | 
| i | boolean |  | 
| b | boolean |  | 

<p>Select Address from all addresses associated with the account in order to ship the cart items to .that address,otherwise default address will be selected implicitly. See `SelectCartAddressRequest` in schema of request body for the list of attributes needed to select Address from account. On successful request, returns Cart object response.below are the address attributes which needs to be sent. <ul> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">billing_address_id</font></li> <li> <font color="monochrome">uid</font></li> </ul>

*Success Response:*



Response of the Address object containing Cart Object and success message.  .


Schema: `CartResponse`








Address or Pincode Error


Schema: `Object`


*Examples:*


Address Not Found
```json
{
  "value": {
    "status": "ERROR",
    "message": "ADDRESS_NOT_FOUND"
  }
}
```

Pincode Not Serviciable
```json
{
  "value": {
    "status": "ERROR",
    "message": "PINCODE_NOT_SERVICIABLE"
  }
}
```









---


#### selectPaymentMode
Update Cart Payment

```javascript
// Promise
const promise = cart.selectPaymentMode(body,uid);

// Async/Await
const data = await cart.selectPaymentMode(body,uid);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| uid | string |  | 

Update Cart Payment for Your Account

*Success Response:*



Cart response with payment options


Schema: `CartResponse`









---


#### validateCouponForPayment
Get Cart Payment for valid coupon

```javascript
// Promise
const promise = cart.validateCouponForPayment(uid,addressId,paymentMode,paymentIdentifier,aggregatorName,merchantCode);

// Async/Await
const data = await cart.validateCouponForPayment(uid,addressId,paymentMode,paymentIdentifier,aggregatorName,merchantCode);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| uid | string |  | 
| addressId | string |  | 
| paymentMode | string |  | 
| paymentIdentifier | string |  | 
| aggregatorName | string |  | 
| merchantCode | string |  | 

Validate coupon for selected payment mode

*Success Response:*



Cart Affiliates.


Schema: `PaymentCouponValidate`









---


#### getShipments
Get delivery date and options before checkout

```javascript
// Promise
const promise = cart.getShipments(p,uid,addressId,areaCode);

// Async/Await
const data = await cart.getShipments(p,uid,addressId,areaCode);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| p | boolean | Get payment options or not | 
| uid | integer | Cart id | 
| addressId | integer | Address id | 
| areaCode | string | Destination pincode. | 

Shipment break up item wise with delivery date. Actual                      delivery will be during given dates only. Items will be                      delivered in group of shipments created.

*Success Response:*



OK


Schema: `CartShipmentsResponse`


*Examples:*


Shipment Generated
```json
{
  "value": {
    "items": [],
    "cart_id": 7501,
    "uid": "7501",
    "success": true,
    "error_message": "Note: Your order delivery will be delayed by 7-10 Days",
    "payment_options": {
      "payment_option": [
        {
          "name": "COD",
          "display_name": "Cash on Delivery",
          "display_priority": 1,
          "payment_mode_id": 11,
          "logo": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/cod.png",
          "logo_url": {
            "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/cod.png",
            "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/cod.png"
          },
          "list": []
        },
        {
          "name": "CARD",
          "display_priority": 2,
          "payment_mode_id": 2,
          "display_name": "Card",
          "list": []
        },
        {
          "name": "NB",
          "display_priority": 3,
          "payment_mode_id": 3,
          "display_name": "Net Banking",
          "list": [
            {
              "aggregator_name": "Razorpay",
              "bank_name": "ICICI Bank",
              "bank_code": "ICIC",
              "url": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/NB_ICICI.png",
              "logo_url": {
                "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/NB_ICICI.png",
                "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/NB_ICICI.png"
              },
              "merchant_code": "NB_ICICI",
              "display_priority": 1
            }
          ]
        },
        {
          "name": "WL",
          "display_priority": 4,
          "payment_mode_id": 4,
          "display_name": "Wallet",
          "list": [
            {
              "wallet_name": "Paytm",
              "wallet_code": "paytm",
              "wallet_id": 4,
              "merchant_code": "PAYTM",
              "logo_url": {
                "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/paytm_logo_small.png",
                "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/paytm_logo_large.png"
              },
              "aggregator_name": "Juspay",
              "display_priority": 1
            }
          ]
        },
        {
          "name": "UPI",
          "display_priority": 9,
          "payment_mode_id": 6,
          "display_name": "UPI",
          "list": [
            {
              "aggregator_name": "UPI_Razorpay",
              "name": "UPI",
              "display_name": "BHIM UPI",
              "code": "UPI",
              "logo_url": {
                "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/upi_100x78.png",
                "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/upi_150x100.png"
              },
              "merchant_code": "UPI",
              "timeout": 240,
              "retry_count": 0,
              "fynd_vpa": "shopsense.rzp@hdfcbank",
              "intent_flow": true,
              "intent_app_error_list": [
                "com.csam.icici.bank.imobile",
                "in.org.npci.upiapp",
                "com.whatsapp"
              ]
            }
          ]
        },
        {
          "name": "PL",
          "display_priority": 11,
          "payment_mode_id": 1,
          "display_name": "Pay Later",
          "list": [
            {
              "aggregator_name": "Simpl",
              "name": "Simpl",
              "code": "simpl",
              "merchant_code": "SIMPL",
              "logo": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/simpl_logo.png",
              "logo_url": {
                "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/simpl_logo.png",
                "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/simpl_logo.png"
              }
            }
          ]
        }
      ],
      "payment_flows": {
        "Simpl": {
          "data": {
            "gateway": {
              "route": "simpl",
              "entity": "sdk",
              "is_customer_validation_required": true,
              "cust_validation_url": "https://api.addsale.com/gringotts/api/v1/validate-customer/",
              "sdk": {
                "config": {
                  "redirect": false,
                  "callback_url": null,
                  "action_url": "https://api.addsale.com/avis/api/v1/payments/charge-gringotts-transaction/"
                },
                "data": {
                  "user_phone": "8452996729",
                  "user_email": "paymentsdummy@gofynd.com"
                }
              },
              "return_url": null
            }
          },
          "api_link": "",
          "payment_flow": "sdk"
        },
        "Juspay": {
          "data": {},
          "api_link": "https://sandbox.juspay.in/txns",
          "payment_flow": "api"
        },
        "Razorpay": {
          "data": {},
          "api_link": "",
          "payment_flow": "sdk"
        },
        "UPI_Razorpay": {
          "data": {},
          "api_link": "https://api.addsale.com/gringotts/api/v1/external/payment-initialisation/",
          "payment_flow": "api"
        },
        "Fynd": {
          "data": {},
          "api_link": "",
          "payment_flow": "api"
        }
      },
      "default": {}
    },
    "user_type": "Store User",
    "cod_charges": 0,
    "order_id": null,
    "cod_available": true,
    "cod_message": "No additional COD charges applicable",
    "delivery_charges": 0,
    "delivery_charge_order_value": 0,
    "delivery_slots": [
      {
        "date": "Sat, 24 Aug",
        "delivery_slot": [
          {
            "delivery_slot_timing": "By 9:00 PM",
            "default": true,
            "delivery_slot_id": 1
          }
        ]
      }
    ],
    "store_code": "",
    "store_emps": [],
    "breakup_values": {
      "loyalty_points": {
        "total": 0,
        "applicable": 0,
        "is_applied": false,
        "description": "Your cashback, referrals, and refund amount get credited to Fynd Cash which can be redeemed while placing an order."
      },
      "coupon": {
        "type": "cash",
        "code": "",
        "uid": null,
        "value": 0,
        "is_applied": false,
        "message": "Sorry! Invalid Coupon"
      },
      "raw": {
        "cod_charge": 0,
        "convenience_fee": 0,
        "coupon": 0,
        "delivery_charge": 0,
        "discount": 0,
        "fynd_cash": 0,
        "gst_charges": 214.18,
        "mrp_total": 1999,
        "subtotal": 1999,
        "total": 1999,
        "vog": 1784.82,
        "you_saved": 0
      },
      "display": [
        {
          "display": "MRP Total",
          "key": "mrp_total",
          "value": 1999,
          "currency_code": "INR"
        },
        {
          "display": "Subtotal",
          "key": "subtotal",
          "value": 1999,
          "currency_code": "INR"
        },
        {
          "display": "Total",
          "key": "total",
          "value": 1999,
          "currency_code": "INR"
        }
      ]
    },
    "shipments": [
      {
        "fulfillment_id": 3009,
        "shipment_type": "single_shipment",
        "fulfillment_type": "store",
        "dp_id": "29",
        "dp_options": {
          "4": {
            "f_priority": 4,
            "r_priority": 5,
            "is_cod": true,
            "is_prepaid": true,
            "is_reverse": true
          },
          "7": {
            "f_priority": 3,
            "r_priority": 4,
            "is_cod": true,
            "is_prepaid": true,
            "is_reverse": true
          },
          "29": {
            "f_priority": 1,
            "r_priority": 2,
            "is_cod": true,
            "is_prepaid": true,
            "is_reverse": true
          }
        },
        "promise": {
          "timestamp": {
            "min": 1566678108,
            "max": 1567023708
          },
          "formatted": {
            "min": "Aug 24",
            "max": "Aug 28"
          }
        },
        "box_type": "Small Courier bag",
        "shipments": 1,
        "items": [
          {
            "quantity": 1,
            "product": {
              "type": "product",
              "uid": 820312,
              "name": "Navy Blue Melange Shorts",
              "slug": "883-police-navy-blue-melange-shorts-820312-4943a8",
              "brand": {
                "uid": 610,
                "name": "883 Police"
              },
              "categories": [
                {
                  "uid": 193,
                  "name": "Shorts"
                }
              ],
              "images": [
                {
                  "aspect_ratio": "16:25",
                  "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/610_SPIRAL19ANAVY/1_1549105947281.jpg",
                  "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/610_SPIRAL19ANAVY/1_1549105947281.jpg"
                }
              ],
              "action": {
                "type": "product",
                "url": "https://api.addsale.com/platform/content/v1/products/883-police-navy-blue-melange-shorts-820312-4943a8/",
                "query": {
                  "product_slug": [
                    "883-police-navy-blue-melange-shorts-820312-4943a8"
                  ]
                }
              }
            },
            "discount": "",
            "bulk_offer": {},
            "key": "820312_L",
            "price": {
              "base": {
                "add_on": 1999,
                "marked": 1999,
                "effective": 1999,
                "selling": 1999,
                "currency_code": "INR"
              },
              "converted": {
                "add_on": 1999,
                "marked": 1999,
                "effective": 1999,
                "selling": 1999,
                "currency_code": "INR"
              }
            },
            "article": {
              "type": "article",
              "uid": "381_610_IGPL01_SPIRAL19ANAVY_L",
              "size": "L",
              "seller": {
                "uid": 381,
                "name": "INTERSOURCE GARMENTS PVT LTD"
              },
              "store": {
                "uid": 3009,
                "name": "Kormangala"
              },
              "quantity": 2,
              "price": {
                "base": {
                  "marked": 1999,
                  "effective": 1999,
                  "currency_code": "INR"
                },
                "converted": {
                  "marked": 1999,
                  "effective": 1999,
                  "currency_code": "INR"
                }
              }
            },
            "availability": {
              "sizes": [
                "L",
                "XL",
                "XXL"
              ],
              "other_store_quantity": 1,
              "out_of_stock": false,
              "deliverable": true,
              "is_valid": true
            },
            "coupon_message": "",
            "message": ""
          }
        ]
      }
    ],
    "delivery_charge_info": "",
    "coupon_text": "View all offers",
    "gstin": null,
    "checkout_mode": "self",
    "last_modified": "Thu, 22 Aug 2019 20:21:48 GMT",
    "restrict_checkout": false,
    "is_valid": true
  }
}
```

Shipment Generation Failed
```json
{
  "value": {
    "items": [],
    "cart_id": 7501,
    "uid": "7501",
    "success": true,
    "error_message": "Note: Your order delivery will be delayed by 7-10 Days",
    "payment_options": {
      "payment_option": [
        {
          "name": "COD",
          "display_name": "Cash on Delivery",
          "display_priority": 1,
          "payment_mode_id": 11,
          "logo": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/cod.png",
          "logo_url": {
            "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/cod.png",
            "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/cod.png"
          },
          "list": []
        },
        {
          "name": "CARD",
          "display_priority": 2,
          "payment_mode_id": 2,
          "display_name": "Card",
          "list": []
        },
        {
          "name": "NB",
          "display_priority": 3,
          "payment_mode_id": 3,
          "display_name": "Net Banking",
          "list": [
            {
              "aggregator_name": "Razorpay",
              "bank_name": "ICICI Bank",
              "bank_code": "ICIC",
              "url": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/NB_ICICI.png",
              "logo_url": {
                "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/NB_ICICI.png",
                "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/NB_ICICI.png"
              },
              "merchant_code": "NB_ICICI",
              "display_priority": 1
            }
          ]
        },
        {
          "name": "WL",
          "display_priority": 4,
          "payment_mode_id": 4,
          "display_name": "Wallet",
          "list": [
            {
              "wallet_name": "Paytm",
              "wallet_code": "paytm",
              "wallet_id": 4,
              "merchant_code": "PAYTM",
              "logo_url": {
                "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/paytm_logo_small.png",
                "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/paytm_logo_large.png"
              },
              "aggregator_name": "Juspay",
              "display_priority": 1
            }
          ]
        },
        {
          "name": "UPI",
          "display_priority": 9,
          "payment_mode_id": 6,
          "display_name": "UPI",
          "list": [
            {
              "aggregator_name": "UPI_Razorpay",
              "name": "UPI",
              "display_name": "BHIM UPI",
              "code": "UPI",
              "logo_url": {
                "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/upi_100x78.png",
                "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/upi_150x100.png"
              },
              "merchant_code": "UPI",
              "timeout": 240,
              "retry_count": 0,
              "fynd_vpa": "shopsense.rzp@hdfcbank",
              "intent_flow": true,
              "intent_app_error_list": [
                "com.csam.icici.bank.imobile",
                "in.org.npci.upiapp",
                "com.whatsapp"
              ]
            }
          ]
        },
        {
          "name": "PL",
          "display_priority": 11,
          "payment_mode_id": 1,
          "display_name": "Pay Later",
          "list": [
            {
              "aggregator_name": "Simpl",
              "name": "Simpl",
              "code": "simpl",
              "merchant_code": "SIMPL",
              "logo": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/simpl_logo.png",
              "logo_url": {
                "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/simpl_logo.png",
                "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/simpl_logo.png"
              }
            }
          ]
        }
      ],
      "payment_flows": {
        "Simpl": {
          "data": {
            "gateway": {
              "route": "simpl",
              "entity": "sdk",
              "is_customer_validation_required": true,
              "cust_validation_url": "https://api.addsale.com/gringotts/api/v1/validate-customer/",
              "sdk": {
                "config": {
                  "redirect": false,
                  "callback_url": null,
                  "action_url": "https://api.addsale.com/avis/api/v1/payments/charge-gringotts-transaction/"
                },
                "data": {
                  "user_phone": "8452996729",
                  "user_email": "paymentsdummy@gofynd.com"
                }
              },
              "return_url": null
            }
          },
          "api_link": "",
          "payment_flow": "sdk"
        },
        "Juspay": {
          "data": {},
          "api_link": "https://sandbox.juspay.in/txns",
          "payment_flow": "api"
        },
        "Razorpay": {
          "data": {},
          "api_link": "",
          "payment_flow": "sdk"
        },
        "UPI_Razorpay": {
          "data": {},
          "api_link": "https://api.addsale.com/gringotts/api/v1/external/payment-initialisation/",
          "payment_flow": "api"
        },
        "Fynd": {
          "data": {},
          "api_link": "",
          "payment_flow": "api"
        }
      },
      "default": {}
    },
    "user_type": "Store User",
    "cod_charges": 0,
    "order_id": null,
    "cod_available": true,
    "cod_message": "No additional COD charges applicable",
    "delivery_charges": 0,
    "delivery_charge_order_value": 0,
    "delivery_slots": [
      {
        "date": "Sat, 24 Aug",
        "delivery_slot": [
          {
            "delivery_slot_timing": "By 9:00 PM",
            "default": true,
            "delivery_slot_id": 1
          }
        ]
      }
    ],
    "store_code": "",
    "store_emps": [],
    "breakup_values": {
      "loyalty_points": {
        "total": 0,
        "applicable": 0,
        "is_applied": false,
        "description": "Your cashback, referrals, and refund amount get credited to Fynd Cash which can be redeemed while placing an order."
      },
      "coupon": {
        "type": "cash",
        "code": "",
        "uid": null,
        "value": 0,
        "is_applied": false,
        "message": "Sorry! Invalid Coupon"
      },
      "raw": {
        "cod_charge": 0,
        "convenience_fee": 0,
        "coupon": 0,
        "delivery_charge": 0,
        "discount": 0,
        "fynd_cash": 0,
        "gst_charges": 214.18,
        "mrp_total": 1999,
        "subtotal": 1999,
        "total": 1999,
        "vog": 1784.82,
        "you_saved": 0
      },
      "display": [
        {
          "display": "MRP Total",
          "key": "mrp_total",
          "value": 1999,
          "currency_code": "INR"
        },
        {
          "display": "Subtotal",
          "key": "subtotal",
          "value": 1999,
          "currency_code": "INR"
        },
        {
          "display": "Total",
          "key": "total",
          "value": 1999,
          "currency_code": "INR"
        }
      ]
    },
    "shipments": [],
    "message": "Shipments could not be generated. Please Try again after some time.",
    "delivery_charge_info": "",
    "coupon_text": "View all offers",
    "gstin": null,
    "checkout_mode": "self",
    "last_modified": "Thu, 22 Aug 2019 20:21:48 GMT",
    "restrict_checkout": false,
    "is_valid": false
  }
}
```








Unhandled api error


Schema: `Object`









---


#### checkoutCart
Checkout Cart

```javascript
// Promise
const promise = cart.checkoutCart(body);

// Async/Await
const data = await cart.checkoutCart(body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Checkout all items in cart to payment and order generation.                         For COD only order will be generated while for other checkout mode                         user will be redirected to payment gateway

*Success Response:*



OK


Schema: `CartCheckoutResponse`


*Examples:*


Address id not found
```json
{
  "value": {
    "success": false,
    "message": "No address found with address id {address_id}"
  }
}
```

Missing address_id
```json
{
  "value": {
    "address_id": [
      "Missing data for required field."
    ]
  }
}
```

Successful checkout cod payment
```json
{
  "value": {
    "success": true,
    "cart": {
      "success": true,
      "error_message": "Note: Your order delivery will be delayed by 7-10 Days",
      "payment_options": {
        "payment_option": [
          {
            "name": "COD",
            "display_name": "Cash on Delivery",
            "display_priority": 1,
            "payment_mode_id": 11,
            "logo": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/cod.png",
            "logo_url": {
              "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/cod.png",
              "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/cod.png"
            },
            "list": []
          },
          {
            "name": "CARD",
            "display_priority": 2,
            "payment_mode_id": 2,
            "display_name": "Card",
            "list": []
          },
          {
            "name": "NB",
            "display_priority": 3,
            "payment_mode_id": 3,
            "display_name": "Net Banking",
            "list": [
              {
                "aggregator_name": "Razorpay",
                "bank_name": "ICICI Bank",
                "bank_code": "ICIC",
                "url": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/NB_ICICI.png",
                "logo_url": {
                  "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/NB_ICICI.png",
                  "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/NB_ICICI.png"
                },
                "merchant_code": "NB_ICICI",
                "display_priority": 1
              }
            ]
          },
          {
            "name": "WL",
            "display_priority": 4,
            "payment_mode_id": 4,
            "display_name": "Wallet",
            "list": [
              {
                "wallet_name": "Paytm",
                "wallet_code": "paytm",
                "wallet_id": 4,
                "merchant_code": "PAYTM",
                "logo_url": {
                  "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/paytm_logo_small.png",
                  "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/paytm_logo_large.png"
                },
                "aggregator_name": "Juspay",
                "display_priority": 1
              }
            ]
          },
          {
            "name": "UPI",
            "display_priority": 9,
            "payment_mode_id": 6,
            "display_name": "UPI",
            "list": [
              {
                "aggregator_name": "UPI_Razorpay",
                "name": "UPI",
                "display_name": "BHIM UPI",
                "code": "UPI",
                "logo_url": {
                  "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/upi_100x78.png",
                  "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/upi_150x100.png"
                },
                "merchant_code": "UPI",
                "timeout": 240,
                "retry_count": 0,
                "fynd_vpa": "shopsense.rzp@hdfcbank",
                "intent_flow": true,
                "intent_app_error_list": [
                  "com.csam.icici.bank.imobile",
                  "in.org.npci.upiapp",
                  "com.whatsapp"
                ]
              }
            ]
          },
          {
            "name": "PL",
            "display_priority": 11,
            "payment_mode_id": 1,
            "display_name": "Pay Later",
            "list": [
              {
                "aggregator_name": "Simpl",
                "name": "Simpl",
                "code": "simpl",
                "merchant_code": "SIMPL",
                "logo": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/simpl_logo.png",
                "logo_url": {
                  "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/simpl_logo.png",
                  "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/simpl_logo.png"
                }
              }
            ]
          }
        ],
        "payment_flows": {
          "Simpl": {
            "data": {
              "gateway": {
                "route": "simpl",
                "entity": "sdk",
                "is_customer_validation_required": true,
                "cust_validation_url": "https://api.addsale.com/gringotts/api/v1/validate-customer/",
                "sdk": {
                  "config": {
                    "redirect": false,
                    "callback_url": null,
                    "action_url": "https://api.addsale.com/avis/api/v1/payments/charge-gringotts-transaction/"
                  },
                  "data": {
                    "user_phone": "8452996729",
                    "user_email": "paymentsdummy@gofynd.com"
                  }
                },
                "return_url": null
              }
            },
            "api_link": "",
            "payment_flow": "sdk"
          },
          "Juspay": {
            "data": {},
            "api_link": "https://sandbox.juspay.in/txns",
            "payment_flow": "api"
          },
          "Razorpay": {
            "data": {},
            "api_link": "",
            "payment_flow": "sdk"
          },
          "UPI_Razorpay": {
            "data": {},
            "api_link": "https://api.addsale.com/gringotts/api/v1/external/payment-initialisation/",
            "payment_flow": "api"
          },
          "Fynd": {
            "data": {},
            "api_link": "",
            "payment_flow": "api"
          }
        },
        "default": {}
      },
      "user_type": "Store User",
      "cod_charges": 0,
      "order_id": "FY5D5E215CF287584CE6",
      "cod_available": true,
      "cod_message": "No additional COD charges applicable",
      "delivery_charges": 0,
      "delivery_charge_order_value": 0,
      "delivery_slots": [
        {
          "date": "Sat, 24 Aug",
          "delivery_slot": [
            {
              "delivery_slot_timing": "By 9:00 PM",
              "default": true,
              "delivery_slot_id": 1
            }
          ]
        }
      ],
      "store_code": "",
      "store_emps": [],
      "breakup_values": {
        "coupon": {
          "type": "cash",
          "code": "",
          "uid": null,
          "value": 0,
          "is_applied": false,
          "message": "Sorry! Invalid Coupon"
        },
        "loyalty_points": {
          "total": 0,
          "applicable": 0,
          "is_applied": false,
          "description": "Your cashback, referrals, and refund amount get credited to Fynd Cash which can be redeemed while placing an order."
        },
        "raw": {
          "cod_charge": 0,
          "convenience_fee": 0,
          "coupon": 0,
          "delivery_charge": 0,
          "discount": 0,
          "fynd_cash": 0,
          "gst_charges": 214.18,
          "mrp_total": 1999,
          "subtotal": 1999,
          "total": 1999,
          "vog": 1784.82,
          "you_saved": 0
        },
        "display": [
          {
            "display": "MRP Total",
            "key": "mrp_total",
            "value": 1999,
            "currency_code": "INR"
          },
          {
            "display": "Subtotal",
            "key": "subtotal",
            "value": 1999,
            "currency_code": "INR"
          },
          {
            "display": "Total",
            "key": "total",
            "value": 1999,
            "currency_code": "INR"
          }
        ]
      },
      "items": [
        {
          "key": "820312_L",
          "message": "",
          "bulk_offer": {},
          "price": {
            "base": {
              "add_on": 1999,
              "marked": 1999,
              "effective": 1999,
              "selling": 1999,
              "currency_code": "INR"
            },
            "converted": {
              "add_on": 1999,
              "marked": 1999,
              "effective": 1999,
              "selling": 1999,
              "currency_code": "INR"
            }
          },
          "quantity": 1,
          "discount": "",
          "product": {
            "type": "product",
            "uid": 820312,
            "name": "Navy Blue Melange Shorts",
            "slug": "883-police-navy-blue-melange-shorts-820312-4943a8",
            "brand": {
              "uid": 610,
              "name": "883 Police"
            },
            "categories": [
              {
                "uid": 193,
                "name": "Shorts"
              }
            ],
            "images": [
              {
                "aspect_ratio": "16:25",
                "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/610_SPIRAL19ANAVY/1_1549105947281.jpg",
                "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/610_SPIRAL19ANAVY/1_1549105947281.jpg"
              }
            ],
            "action": {
              "type": "product",
              "url": "https://api.addsale.com/platform/content/v1/products/883-police-navy-blue-melange-shorts-820312-4943a8/",
              "query": {
                "product_slug": [
                  "883-police-navy-blue-melange-shorts-820312-4943a8"
                ]
              }
            }
          },
          "article": {
            "type": "article",
            "uid": "381_610_IGPL01_SPIRAL19ANAVY_L",
            "size": "L",
            "seller": {
              "uid": 381,
              "name": "INTERSOURCE GARMENTS PVT LTD"
            },
            "store": {
              "uid": 3009,
              "name": "Kormangala"
            },
            "quantity": 2,
            "price": {
              "base": {
                "marked": 1999,
                "effective": 1999,
                "currency_code": "INR"
              },
              "converted": {
                "marked": 1999,
                "effective": 1999,
                "currency_code": "INR"
              }
            }
          },
          "coupon_message": "",
          "availability": {
            "sizes": [
              "L",
              "XL",
              "XXL"
            ],
            "other_store_quantity": 1,
            "out_of_stock": false,
            "deliverable": true,
            "is_valid": true
          }
        }
      ],
      "delivery_charge_info": "",
      "coupon_text": "View all offers",
      "cart_id": 7483,
      "uid": "7483",
      "gstin": null,
      "checkout_mode": "self",
      "last_modified": "Thu, 22 Aug 2019 04:58:44 GMT",
      "restrict_checkout": false,
      "is_valid": true
    },
    "callback_url": "https://api.addsale.com/gringotts/api/v1/external/payment-callback/",
    "app_intercept_url": "http://uniket-testing.addsale.link/cart/order-status",
    "message": "",
    "data": {
      "order_id": "FY5D5E215CF287584CE6"
    },
    "order_id": "FY5D5E215CF287584CE6"
  }
}
```









---


#### updateCartMeta
Update Cart Meta

```javascript
// Promise
const promise = cart.updateCartMeta(body,uid);

// Async/Await
const data = await cart.updateCartMeta(body,uid);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| uid | integer | Cart id received in get cart. | 

Update cart meta like checkout_mode, gstin.

*Success Response:*



Cart meta updated successfully


Schema: `CartMetaResponse`








Missing required Field


Schema: `CartMetaMissingResponse`









---


#### getCartShareLink
Generate Cart sharing link token

```javascript
// Promise
const promise = cart.getCartShareLink(body);

// Async/Await
const data = await cart.getCartShareLink(body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Generates shared cart snapshot and returns shortlink token

*Success Response:*



Token Generated successfully


Schema: `GetShareCartLinkResponse`


*Examples:*


Token Generated
```json
{
  "value": {
    "token": "ZweG1XyX",
    "share_url": "https://uniket-testing.addsale.link/shared-cart/ZweG1XyX"
  }
}
```









---


#### getCartSharedItems
Get shared cart snapshot and cart response

```javascript
// Promise
const promise = cart.getCartSharedItems(token);

// Async/Await
const data = await cart.getCartSharedItems(token);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| token | string | Shared short link token. | 

Returns shared cart response for sent token with `shared_cart_details`                    containing shared cart details in response.

*Success Response:*



Cart for valid token


Schema: `SharedCartResponse`








No cart found for sent token


Schema: `SharedCartResponse`









---


#### updateCartWithSharedItems
Merge or Replace existing cart

```javascript
// Promise
const promise = cart.updateCartWithSharedItems(token,action);

// Async/Await
const data = await cart.updateCartWithSharedItems(token,action);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| token | string | Shared short link token. | 
| action | string | Operation to perform on existing cart, whether to merge or replace. | 

Merge or Replace cart based on `action` parameter with shared cart of `token`

*Success Response:*



Success of Merge or Replace of cart with `shared_cart_details`                    containing shared cart details in response


Schema: `SharedCartResponse`


*Examples:*


Cart Merged/Replaced
```json
{
  "value": {
    "cart": {
      "shared_cart_details": {
        "token": "BQ9jySQ9",
        "user": {
          "user_id": "23109086",
          "is_anonymous": false
        },
        "meta": {
          "selected_staff": "",
          "ordering_store": null
        },
        "selected_staff": "",
        "ordering_store": null,
        "source": {},
        "created_on": "2019-12-18T14:00:07.165000"
      },
      "items": [
        {
          "key": "791651_6",
          "discount": "",
          "bulk_offer": {},
          "coupon_message": "",
          "article": {
            "type": "article",
            "uid": "304_1054_9036_R1005753_6",
            "size": "6",
            "seller": {
              "uid": 304,
              "name": "LEAYAN GLOBAL PVT. LTD."
            },
            "store": {
              "uid": 5322,
              "name": "Vaisali Nagar"
            },
            "quantity": 1,
            "price": {
              "base": {
                "marked": 2095,
                "effective": 2095,
                "currency_code": "INR"
              },
              "converted": {
                "marked": 2095,
                "effective": 2095,
                "currency_code": "INR"
              }
            }
          },
          "product": {
            "type": "product",
            "uid": 791651,
            "name": "Black Running Shoes",
            "slug": "furo-black-running-shoes-791651-f8bcc3",
            "brand": {
              "uid": 1054,
              "name": "Furo"
            },
            "categories": [
              {
                "uid": 160,
                "name": "Running Shoes"
              }
            ],
            "images": [
              {
                "aspect_ratio": "16:25",
                "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/1054_R1005753/1_1546490507364.jpg",
                "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/1054_R1005753/1_1546490507364.jpg"
              }
            ],
            "action": {
              "type": "product",
              "url": "https://api.addsale.com/platform/content/v1/products/furo-black-running-shoes-791651-f8bcc3/",
              "query": {
                "product_slug": [
                  "furo-black-running-shoes-791651-f8bcc3"
                ]
              }
            }
          },
          "message": "",
          "quantity": 1,
          "availability": {
            "sizes": [
              "7",
              "8",
              "9",
              "10",
              "6"
            ],
            "other_store_quantity": 12,
            "out_of_stock": false,
            "deliverable": true,
            "is_valid": true
          },
          "price": {
            "base": {
              "add_on": 2095,
              "marked": 2095,
              "effective": 2095,
              "selling": 2095,
              "currency_code": "INR"
            },
            "converted": {
              "add_on": 2095,
              "marked": 2095,
              "effective": 2095,
              "selling": 2095,
              "currency_code": "INR"
            }
          }
        },
        {
          "key": "791651_7",
          "discount": "",
          "bulk_offer": {},
          "coupon_message": "",
          "article": {
            "type": "article",
            "uid": "304_1054_9036_R1005753_7",
            "size": "7",
            "seller": {
              "uid": 304,
              "name": "LEAYAN GLOBAL PVT. LTD."
            },
            "store": {
              "uid": 5322,
              "name": "Vaisali Nagar"
            },
            "quantity": 2,
            "price": {
              "base": {
                "marked": 2095,
                "effective": 2095,
                "currency_code": "INR"
              },
              "converted": {
                "marked": 2095,
                "effective": 2095,
                "currency_code": "INR"
              }
            }
          },
          "product": {
            "type": "product",
            "uid": 791651,
            "name": "Black Running Shoes",
            "slug": "furo-black-running-shoes-791651-f8bcc3",
            "brand": {
              "uid": 1054,
              "name": "Furo"
            },
            "categories": [
              {
                "uid": 160,
                "name": "Running Shoes"
              }
            ],
            "images": [
              {
                "aspect_ratio": "16:25",
                "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/1054_R1005753/1_1546490507364.jpg",
                "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/1054_R1005753/1_1546490507364.jpg"
              }
            ],
            "action": {
              "type": "product",
              "url": "https://api.addsale.com/platform/content/v1/products/furo-black-running-shoes-791651-f8bcc3/",
              "query": {
                "product_slug": [
                  "furo-black-running-shoes-791651-f8bcc3"
                ]
              }
            }
          },
          "message": "",
          "quantity": 2,
          "availability": {
            "sizes": [
              "7",
              "8",
              "9",
              "10",
              "6"
            ],
            "other_store_quantity": 7,
            "out_of_stock": false,
            "deliverable": true,
            "is_valid": true
          },
          "price": {
            "base": {
              "add_on": 4190,
              "marked": 4190,
              "effective": 4190,
              "selling": 4190,
              "currency_code": "INR"
            },
            "converted": {
              "add_on": 4190,
              "marked": 4190,
              "effective": 4190,
              "selling": 4190,
              "currency_code": "INR"
            }
          }
        }
      ],
      "cart_id": 13055,
      "uid": "13055",
      "breakup_values": {
        "raw": {
          "cod_charge": 0,
          "convenience_fee": 0,
          "coupon": 0,
          "delivery_charge": 0,
          "discount": 0,
          "fynd_cash": 0,
          "gst_charges": 958.73,
          "mrp_total": 6285,
          "subtotal": 6285,
          "total": 6285,
          "vog": 5326.27,
          "you_saved": 0
        },
        "loyalty_points": {
          "total": 0,
          "applicable": 0,
          "is_applied": false,
          "description": "Your cashback, referrals, and refund amount get credited to Fynd Cash which can be redeemed while placing an order."
        },
        "coupon": {
          "type": "cash",
          "code": "",
          "uid": null,
          "value": 0,
          "is_applied": false,
          "message": "Sorry! Invalid coupon"
        },
        "display": [
          {
            "display": "MRP Total",
            "key": "mrp_total",
            "value": 6285,
            "currency_code": "INR"
          },
          {
            "display": "Subtotal",
            "key": "subtotal",
            "value": 6285,
            "currency_code": "INR"
          },
          {
            "display": "Total",
            "key": "total",
            "value": 6285,
            "currency_code": "INR"
          }
        ]
      },
      "delivery_charge_info": "",
      "coupon_text": "View all offers",
      "gstin": null,
      "comment": "",
      "checkout_mode": "self",
      "payment_selection_lock": {
        "enabled": false,
        "default_options": "COD",
        "payment_identifier": null
      },
      "restrict_checkout": false,
      "is_valid": true,
      "last_modified": "Mon, 16 Dec 2019 07:02:18 GMT"
    }
  }
}
```









---



---


## Lead


#### getTicket
Get Ticket with the specific id

```javascript
// Promise
const promise = lead.getTicket(id);

// Async/Await
const data = await lead.getTicket(id);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| id | string | ID of ticket to be retrieved | 

Get Ticket with the specific id, this is used to view the ticket details

*Success Response:*



Success


Schema: `Ticket`


*Examples:*


Default
```json
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









---


#### createHistory
Create history for specific Ticket

```javascript
// Promise
const promise = lead.createHistory(ticketId,body);

// Async/Await
const data = await lead.createHistory(ticketId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| ticketId | string | Ticket ID for which history is created | 

Create history for specific Ticket, this history is seen on ticket detail page, this can be comment, log or rating.

*Success Response:*



Success


Schema: `TicketHistory`


*Examples:*


Default
```json
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









---


#### createTicket
Create Ticket

```javascript
// Promise
const promise = lead.createTicket(body);

// Async/Await
const data = await lead.createTicket(body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

This is used to Create Ticket.

*Success Response:*



Success


Schema: `Ticket`


*Examples:*


Default
```json
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









---


#### getCustomForm
Get specific Custom Form using it's slug

```javascript
// Promise
const promise = lead.getCustomForm(slug);

// Async/Await
const data = await lead.getCustomForm(slug);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | Slug of form whose response is getting submitted | 

Get specific Custom Form using it's slug, this is used to view the form.

*Success Response:*



Success


Schema: `CustomForm`


*Examples:*


Default
```json
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









---


#### submitCustomForm
Submit Response for a specific Custom Form using it's slug

```javascript
// Promise
const promise = lead.submitCustomForm(slug,body);

// Async/Await
const data = await lead.submitCustomForm(slug,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | Slug of form whose response is getting submitted | 

Submit Response for a specific Custom Form using it's slug, this response is then used to create a ticket on behalf of the user.

*Success Response:*



Success


Schema: `SubmitCustomFormResponse`


*Examples:*


Default
```json
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









---


#### getParticipantsInsideVideoRoom
Get participants of a specific Video Room using it's unique name

```javascript
// Promise
const promise = lead.getParticipantsInsideVideoRoom(uniqueName);

// Async/Await
const data = await lead.getParticipantsInsideVideoRoom(uniqueName);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| uniqueName | string | Unique name of Video Room | 

Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names.

*Success Response:*



Success


Schema: `GetParticipantsInsideVideoRoomResponse`


*Examples:*


Default
```json
{
  "value": {
    "participants": []
  }
}
```









---


#### getTokenForVideoRoom
Get Token to join a specific Video Room using it's unqiue name

```javascript
// Promise
const promise = lead.getTokenForVideoRoom(uniqueName);

// Async/Await
const data = await lead.getTokenForVideoRoom(uniqueName);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| uniqueName | string | Unique name of Video Room | 

Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there.

*Success Response:*



Success


Schema: `GetTokenForVideoRoomResponse`


*Examples:*


Default
```json
{
  "value": {
    "access_token": "your_token_to_the_room"
  }
}
```









---



---


## Theme


#### getAppliedTheme
Get applied theme for an application

```javascript
// Promise
const promise = theme.getAppliedTheme();

// Async/Await
const data = await theme.getAppliedTheme();
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |



*Success Response:*



A JSON object of theme


Schema: `ThemesSchema`


*Examples:*


Applied Theme
```json
{
  "$ref": "#/components/examples/Themes"
}
```











Schema: `BlitzkriegApiError`











Schema: `BlitzkriegApiError`









---


#### getThemeForPreview
Get theme for preview

```javascript
// Promise
const promise = theme.getThemeForPreview(themeId);

// Async/Await
const data = await theme.getThemeForPreview(themeId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| themeId | string | ID of the theme to be retrieved | 



*Success Response:*



A JSON object of theme


Schema: `ThemesSchema`


*Examples:*


Preview Theme
```json
{
  "$ref": "#/components/examples/Themes"
}
```











Schema: `BlitzkriegApiError`











Schema: `BlitzkriegApiError`









---



---


## User


#### loginWithFacebook
Login/Register with Facebook

```javascript
// Promise
const promise = user.loginWithFacebook(body);

// Async/Await
const data = await user.loginWithFacebook(body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Used to login or register with Facebook

*Success Response:*



A JSON object with user details


Schema: `AuthSuccess`


*Examples:*


Success
```json
{
  "$ref": "#/components/examples/AuthSuccess"
}
```











Schema: `AuthenticationApiError`











Schema: `AuthenticationApiError`









---


#### loginWithGoogle
Login/Register with Google

```javascript
// Promise
const promise = user.loginWithGoogle(body);

// Async/Await
const data = await user.loginWithGoogle(body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Used to login or register with Google

*Success Response:*



A JSON object with user details


Schema: `AuthSuccess`


*Examples:*


Success
```json
{
  "$ref": "#/components/examples/AuthSuccess"
}
```











Schema: `AuthenticationApiError`











Schema: `AuthenticationApiError`









---


#### loginWithGoogleAndroid
Login/Register with Google for android

```javascript
// Promise
const promise = user.loginWithGoogleAndroid(body);

// Async/Await
const data = await user.loginWithGoogleAndroid(body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Used to login or register with Google for android

*Success Response:*



A JSON object with user details


Schema: `AuthSuccess`


*Examples:*


Success
```json
{
  "$ref": "#/components/examples/AuthSuccess"
}
```











Schema: `AuthenticationApiError`











Schema: `AuthenticationApiError`









---


#### loginWithGoogleIOS
Login/Register with Google for ios

```javascript
// Promise
const promise = user.loginWithGoogleIOS(body);

// Async/Await
const data = await user.loginWithGoogleIOS(body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Used to login or register with google for ios

*Success Response:*



A JSON object with user details


Schema: `AuthSuccess`


*Examples:*


Success
```json
{
  "$ref": "#/components/examples/AuthSuccess"
}
```











Schema: `AuthenticationApiError`











Schema: `AuthenticationApiError`









---


#### loginWithOTP
Login/Register with OTP

```javascript
// Promise
const promise = user.loginWithOTP(body,platform);

// Async/Await
const data = await user.loginWithOTP(body,platform);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| platform | string | Platform | 

Used to login or register with OTP

*Success Response:*






Schema: `SendOtpResponse`


*Examples:*


Success
```json
{
  "$ref": "#/components/examples/SendOtpResponse"
}
```











Schema: `AuthenticationApiError`











Schema: `AuthenticationApiError`









---


#### loginWithEmailAndPassword
Login/Register with password

```javascript
// Promise
const promise = user.loginWithEmailAndPassword(body);

// Async/Await
const data = await user.loginWithEmailAndPassword(body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Used to login or register with email & password

*Success Response:*






Schema: `LoginSuccess`


*Examples:*


Success
```json
{
  "$ref": "#/components/examples/UserExampleObject"
}
```











Schema: `AuthenticationApiError`











Schema: `AuthenticationApiError`









---


#### sendResetPasswordEmail
Reset Password

```javascript
// Promise
const promise = user.sendResetPasswordEmail(body,platform);

// Async/Await
const data = await user.sendResetPasswordEmail(body,platform);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| platform | string | Platform | 

Used to reset account password

*Success Response:*






Schema: `ResetPasswordSuccess`











Schema: `AuthenticationApiError`











Schema: `AuthenticationApiError`









---


#### forgotPassword


```javascript
// Promise
const promise = user.forgotPassword(body);

// Async/Await
const data = await user.forgotPassword(body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |



*Success Response:*






Schema: `LoginSuccess`


*Examples:*


Success
```json
{
  "$ref": "#/components/examples/UserExampleObject"
}
```











Schema: `AuthenticationApiError`











Schema: `AuthenticationApiError`









---


#### sendResetToken


```javascript
// Promise
const promise = user.sendResetToken(body);

// Async/Await
const data = await user.sendResetToken(body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Send code incase of reset password

*Success Response:*






Schema: `ResetPasswordSuccess`











Schema: `AuthenticationApiError`











Schema: `AuthenticationApiError`









---


#### loginWithToken
Login/Register with token

```javascript
// Promise
const promise = user.loginWithToken(body);

// Async/Await
const data = await user.loginWithToken(body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Login/Register with token

*Success Response:*






Schema: `LoginSuccess`


*Examples:*


Success
```json
{
  "$ref": "#/components/examples/UserExampleObject"
}
```











Schema: `Object`











Schema: `AuthenticationApiError`











Schema: `AuthenticationApiError`









---


#### registerWithForm
Registration Form

```javascript
// Promise
const promise = user.registerWithForm(body,platform);

// Async/Await
const data = await user.registerWithForm(body,platform);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| platform | string | Platform | 

Register using form

*Success Response:*






Schema: `RegisterFormSuccess`











Schema: `AuthenticationApiError`











Schema: `AuthenticationApiError`









---


#### verifyEmail
Verify email

```javascript
// Promise
const promise = user.verifyEmail(body);

// Async/Await
const data = await user.verifyEmail(body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Used to verify email

*Success Response:*






Schema: `VerifyEmailSuccess`











Schema: `AuthenticationApiError`











Schema: `AuthenticationApiError`









---


#### verifyMobile
Verify mobile

```javascript
// Promise
const promise = user.verifyMobile(body);

// Async/Await
const data = await user.verifyMobile(body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Verify mobile

*Success Response:*






Schema: `VerifyEmailSuccess`











Schema: `AuthenticationApiError`











Schema: `AuthenticationApiError`









---


#### hasPassword
Check if user has password

```javascript
// Promise
const promise = user.hasPassword();

// Async/Await
const data = await user.hasPassword();
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Checks if user is using password or not

*Success Response:*






Schema: `HasPasswordSuccess`











Schema: `AuthenticationApiError`











Schema: `AuthenticationApiError`









---


#### updatePassword
Update user password

```javascript
// Promise
const promise = user.updatePassword(body);

// Async/Await
const data = await user.updatePassword(body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Used to update user password

*Success Response:*






Schema: `VerifyEmailSuccess`











Schema: `AuthenticationApiError`











Schema: `AuthenticationApiError`









---


#### logout
Logout user

```javascript
// Promise
const promise = user.logout();

// Async/Await
const data = await user.logout();
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Used to log out user

*Success Response:*






Schema: `LogoutSuccess`











Schema: `AuthenticationApiError`











Schema: `AuthenticationApiError`









---


#### sendOTPOnMobile
Send OTP on mobile

```javascript
// Promise
const promise = user.sendOTPOnMobile(body,platform);

// Async/Await
const data = await user.sendOTPOnMobile(body,platform);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| platform | string | Platform | 

Used to send otp to mobile

*Success Response:*






Schema: `OtpSuccess`











Schema: `AuthenticationApiError`











Schema: `AuthenticationApiError`









---


#### verifyMobileOTP
Verify OTP on mobile

```javascript
// Promise
const promise = user.verifyMobileOTP(body,platform);

// Async/Await
const data = await user.verifyMobileOTP(body,platform);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| platform | string | Platform | 

Used to verify otp sent to mobile

*Success Response:*






Schema: `VerifyOtpSuccess`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/VerifyMobileOTP"
}
```











Schema: `AuthenticationApiError`











Schema: `AuthenticationApiError`









---


#### sendOTPOnEmail
Send OTP on email

```javascript
// Promise
const promise = user.sendOTPOnEmail(body,platform);

// Async/Await
const data = await user.sendOTPOnEmail(body,platform);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| platform | string | Platform | 

Used to send otp to email

*Success Response:*






Schema: `EmailOtpSuccess`











Schema: `AuthenticationApiError`











Schema: `AuthenticationApiError`









---


#### verifyEmailOTP
Verify OTP on email

```javascript
// Promise
const promise = user.verifyEmailOTP(body,platform);

// Async/Await
const data = await user.verifyEmailOTP(body,platform);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| platform | string | Platform | 

Used to verify otp sent to email

*Success Response:*






Schema: `VerifyOtpSuccess`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/VerifyMobileOTP"
}
```











Schema: `AuthenticationApiError`











Schema: `AuthenticationApiError`









---


#### getLoggedInUser
Get logged in user

```javascript
// Promise
const promise = user.getLoggedInUser();

// Async/Await
const data = await user.getLoggedInUser();
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Used to get logged in user details

*Success Response:*






Schema: `UserSchema`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/UserExample"
}
```











Schema: `AuthenticationApiError`











Schema: `AuthenticationApiError`









---


#### getListOfActiveSessions
Get list of sessions

```javascript
// Promise
const promise = user.getListOfActiveSessions();

// Async/Await
const data = await user.getListOfActiveSessions();
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Lists all active sessions

*Success Response:*






Schema: `SessionListSuccess`











Schema: `AuthenticationApiError`











Schema: `AuthenticationApiError`









---


#### getPlatformConfig
Get platform config

```javascript
// Promise
const promise = user.getPlatformConfig(name);

// Async/Await
const data = await user.getPlatformConfig(name);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| name | string | Name | 

Used to get platform config

*Success Response:*



Platform Config


Schema: `PlatformSchema`











Schema: `AuthenticationApiError`











Schema: `AuthenticationApiError`









---


#### updateProfile
Edit Profile Details

```javascript
// Promise
const promise = user.updateProfile(body,platform);

// Async/Await
const data = await user.updateProfile(body,platform);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| platform | string | Platform | 

Used to update profile

*Success Response:*






Schema: `LoginSuccess`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/UserExampleObject"
}
```











Schema: `AuthenticationApiError`











Schema: `AuthenticationApiError`









---


#### addMobileNumber
Add mobile number to profile

```javascript
// Promise
const promise = user.addMobileNumber(body,platform);

// Async/Await
const data = await user.addMobileNumber(body,platform);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| platform | string | Platform | 

Used to add new mobile number to profile

*Success Response:*



A JSON object with user details


Schema: `VerifyMobileOTPSuccess`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/VerifyMobileOTP"
}
```











Schema: `AuthenticationApiError`











Schema: `AuthenticationApiError`









---


#### deleteMobileNumber
Delete mobile number from profile

```javascript
// Promise
const promise = user.deleteMobileNumber(active,primary,verified,countryCode,phone,platform);

// Async/Await
const data = await user.deleteMobileNumber(active,primary,verified,countryCode,phone,platform);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| platform | string | Platform | 
| active | boolean | Active mobile number | 
| primary | boolean | Primary number | 
| verified | boolean | Verified Number | 
| countryCode | string | Country code of phone number | 
| phone | string | Phone number | 

Used to delete mobile number from profile

*Success Response:*



A JSON object with user details


Schema: `LoginSuccess`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/UserExampleObject"
}
```











Schema: `AuthenticationApiError`











Schema: `AuthenticationApiError`









---


#### setMobileNumberAsPrimary
Set mobile as primary

```javascript
// Promise
const promise = user.setMobileNumberAsPrimary(body);

// Async/Await
const data = await user.setMobileNumberAsPrimary(body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Used to set a mobile number as primary

*Success Response:*



A JSON object with user details


Schema: `LoginSuccess`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/UserExampleObject"
}
```











Schema: `AuthenticationApiError`











Schema: `AuthenticationApiError`









---


#### sendVerificationLinkToMobile
Send verification link to mobile

```javascript
// Promise
const promise = user.sendVerificationLinkToMobile(body,platform);

// Async/Await
const data = await user.sendVerificationLinkToMobile(body,platform);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| platform | string | Platform | 

Used to send verification link to a mobile number

*Success Response:*






Schema: `SendMobileVerifyLinkSuccess`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/VerifyMobileOTP"
}
```











Schema: `AuthenticationApiError`











Schema: `AuthenticationApiError`









---


#### addEmail
Add email to profile

```javascript
// Promise
const promise = user.addEmail(body,platform);

// Async/Await
const data = await user.addEmail(body,platform);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| platform | string | Platform | 

Used to add new email to profile

*Success Response:*



A JSON object with user details


Schema: `VerifyEmailOTPSuccess`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/VerifyEmailOTP"
}
```











Schema: `AuthenticationApiError`











Schema: `AuthenticationApiError`









---


#### deleteEmail
Delete email from profile

```javascript
// Promise
const promise = user.deleteEmail(active,primary,verified,email,platform);

// Async/Await
const data = await user.deleteEmail(active,primary,verified,email,platform);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| platform | string | Platform | 
| active | boolean | Whether email id is active | 
| primary | boolean | Whether email id is primary email | 
| verified | boolean | Whether email id is verified | 
| email | string | Email ID to be deleted | 

Used to delete email from profile

*Success Response:*



A JSON object with user details


Schema: `LoginSuccess`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/UserExampleObject"
}
```











Schema: `AuthenticationApiError`











Schema: `AuthenticationApiError`









---


#### setEmailAsPrimary
Set email as primary

```javascript
// Promise
const promise = user.setEmailAsPrimary(body);

// Async/Await
const data = await user.setEmailAsPrimary(body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Used to set an email as primart

*Success Response:*



A JSON object with user details


Schema: `LoginSuccess`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/UserExampleObject"
}
```











Schema: `AuthenticationApiError`











Schema: `AuthenticationApiError`









---


#### sendVerificationLinkToEmail
Send verification link to email

```javascript
// Promise
const promise = user.sendVerificationLinkToEmail(body,platform);

// Async/Await
const data = await user.sendVerificationLinkToEmail(body,platform);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| platform | string | Platform | 

Used to sent verification to an email

*Success Response:*






Schema: `SendEmailVerifyLinkSuccess`











Schema: `AuthenticationApiError`











Schema: `AuthenticationApiError`









---



---


## Content


#### getAnnouncements
Get live announcements

```javascript
// Promise
const promise = content.getAnnouncements();

// Async/Await
const data = await content.getAnnouncements();
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Get live announcements for each or all pages with page slug of page and end date schedule.

*Success Response:*



Announcement api response. announcements object contains page slug name as propery with list of announcements enabled for that page. `$all` is special page slug to indicate show announcemnt on all pages.


Schema: `AnnouncementsResponseSchema`


*Examples:*


Announcements enabled
```json
{
  "$ref": "#/components/examples/AnnouncementEnabledExample"
}
```

No Announcement enabled
```json
{
  "value": {
    "announcements": {},
    "refresh_rate": 900,
    "refresh_pages": []
  }
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### getBlog
Get Blog by slug

```javascript
// Promise
const promise = content.getBlog(slug);

// Async/Await
const data = await content.getBlog(slug);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | The `slug` of a blog. Use this parameter to retrieve a particular blog | 

Use this API to fetch a blog using `slug`

*Success Response:*



A JSON object with blog details


Schema: `CustomBlogSchema`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/CustomBlog"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### getBlogs
Get blogs

```javascript
// Promise
const promise = content.getBlogs(pageNo,pageSize);

// Async/Await
const data = await content.getBlogs(pageNo,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| pageNo | integer | Each response will contain **page_no** param, which should be sent back to make pagination work. | 
| pageSize | integer | Number of items to retrieve in each page. | 

Use this to get blogs.

*Success Response:*



Success


Schema: `BlogGetResponse`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/BlogGetResponse"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### getFaqs
Get frequently asked questions

```javascript
// Promise
const promise = content.getFaqs();

// Async/Await
const data = await content.getFaqs();
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Get frequently asked questions list. These will be helpful for users to using website.

*Success Response:*



Success


Schema: `FaqResponseSchema`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/AppFaqs"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### getFaqCategories
Get FAQ categories list

```javascript
// Promise
const promise = content.getFaqCategories();

// Async/Await
const data = await content.getFaqCategories();
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Get list of FAQ categories

*Success Response:*



Get FAQ Categories


Schema: `GetFaqCategoriesSchema`








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### getFaqBySlug
Get frequently asked question

```javascript
// Promise
const promise = content.getFaqBySlug(slug);

// Async/Await
const data = await content.getFaqBySlug(slug);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | Slug of FAQ | 

Get frequently asked questions list. These will be helpful for users to using website.

*Success Response:*



Success


Schema: `FaqSchema`








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### getFaqCategoryBySlug
Get FAQ category by slug

```javascript
// Promise
const promise = content.getFaqCategoryBySlug(slug);

// Async/Await
const data = await content.getFaqCategoryBySlug(slug);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | Slug of FAQ Category | 

Get FAQ category by slug

*Success Response:*



Get FAQ Categories


Schema: `GetFaqCategoryBySlugSchema`








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### getFaqsByCategorySlug
Get FAQs of a Faq Category slug

```javascript
// Promise
const promise = content.getFaqsByCategorySlug(slug);

// Async/Await
const data = await content.getFaqsByCategorySlug(slug);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | Faq category slug | 

Get FAQs of a Faq Category `slug`

*Success Response:*



Get FAQs by slug of FAQ Category


Schema: `GetFaqSchema`








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### getLandingPage
Get landing page

```javascript
// Promise
const promise = content.getLandingPage();

// Async/Await
const data = await content.getLandingPage();
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Use this API to fetch a landing page

*Success Response:*



A JSON object with landing details


Schema: `LandingPageSchema`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/LandingPageResponse"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### getLegalInformation
Get legal information

```javascript
// Promise
const promise = content.getLegalInformation();

// Async/Await
const data = await content.getLegalInformation();
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Get legal information of application, which includes policy, Terms and Conditions, and FAQ information of application.

*Success Response:*



Success


Schema: `ApplicationLegal`


*Examples:*


Success
```json
{
  "$ref": "#/components/examples/Legal"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### getNavigations
Get navigation

```javascript
// Promise
const promise = content.getNavigations(pageNo,pageSize);

// Async/Await
const data = await content.getNavigations(pageNo,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| pageNo | integer | Each response will contain **page_no** param, which should be sent back to make pagination work. | 
| pageSize | integer | Number of items to retrieve in each page. | 

Use this API to fetch navigations

*Success Response:*



A JSON object with navigation details


Schema: `NavigationGetResponse`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/NavigationGetResponse"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### getPage
Get Page by slug

```javascript
// Promise
const promise = content.getPage(slug);

// Async/Await
const data = await content.getPage(slug);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | The `slug` of a page. Use this parameter to retrieve a particular page | 

Use this API to fetch a custom page using `slug`

*Success Response:*



A JSON object with page details


Schema: `CustomPageSchema`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/PageResponse"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### getPages
Get pages

```javascript
// Promise
const promise = content.getPages(pageNo,pageSize);

// Async/Await
const data = await content.getPages(pageNo,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| pageNo | integer | Each response will contain **page_no** param, which should be sent back to make pagination work. | 
| pageSize | integer | Number of items to retrieve in each page. | 

Use this to get pages.

*Success Response:*



Success


Schema: `PageGetResponse`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/PageGetResponse"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### getSEOConfiguration
Get seo of application

```javascript
// Promise
const promise = content.getSEOConfiguration();

// Async/Await
const data = await content.getSEOConfiguration();
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Get seo of application

*Success Response:*



Success


Schema: `SeoComponent`


*Examples:*


Success
```json
{
  "$ref": "#/components/examples/Seo"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### getSlideshows
Get slideshows

```javascript
// Promise
const promise = content.getSlideshows(pageNo,pageSize);

// Async/Await
const data = await content.getSlideshows(pageNo,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| pageNo | integer | Each response will contain **page_no** param, which should be sent back to make pagination work. | 
| pageSize | integer | Number of items to retrieve in each page. | 

Use this to get slideshows.

*Success Response:*



Success


Schema: `SlideshowGetResponse`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/SlideshowGetResponse"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### getSlideshow
Get slideshow by slug

```javascript
// Promise
const promise = content.getSlideshow(slug);

// Async/Await
const data = await content.getSlideshow(slug);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | The `slug` of a slideshow. Use this parameter to retrieve a particular slideshow | 

Use this API to fetch a slideshow using `slug`

*Success Response:*



A JSON object with slideshow details


Schema: `SlideshowSchema`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/SlideshowResponse"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### getSupportInformation
Get support information

```javascript
// Promise
const promise = content.getSupportInformation();

// Async/Await
const data = await content.getSupportInformation();
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Get contact details for customer support. Including emails and phone numbers

*Success Response:*



Success


Schema: `Support`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/Support"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### getTags
Get Tags for application

```javascript
// Promise
const promise = content.getTags();

// Async/Await
const data = await content.getTags();
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |



*Success Response:*



A JSON object of tags


Schema: `TagsSchema`








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---



---


## Communication


#### getCommunicationConsent
Get communication consent

```javascript
// Promise
const promise = communication.getCommunicationConsent();

// Async/Await
const data = await communication.getCommunicationConsent();
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Get communication consent

*Success Response:*



Success


Schema: `CommunicationConsent`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/CommunicationConsent"
}
```









---


#### upsertCommunicationConsent
Upsert communication consent

```javascript
// Promise
const promise = communication.upsertCommunicationConsent(body);

// Async/Await
const data = await communication.upsertCommunicationConsent(body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Upsert communication consent

*Success Response:*



Success


Schema: `CommunicationConsentRes`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/CommunicationConsentRes"
}
```








Bad request


Schema: `BadRequest`









---


#### upsertAppPushtoken
Upsert push token of a user

```javascript
// Promise
const promise = communication.upsertAppPushtoken(body);

// Async/Await
const data = await communication.upsertAppPushtoken(body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Upsert push token of a user

*Success Response:*



Success


Schema: `PushtokenRes`


*Examples:*


create
```json
{
  "$ref": "#/components/examples/PushtokenResponseCreate"
}
```

update
```json
{
  "$ref": "#/components/examples/PushtokenResponseUpdate"
}
```

reset
```json
{
  "$ref": "#/components/examples/PushtokenResponseReset"
}
```








Bad request


Schema: `BadRequest`









---



---


## Share


#### getApplicationQRCode
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

*Success Response:*



Success


Schema: `QRCodeResp`









---


#### getProductQRCodeBySlug
Create product QR Code

```javascript
// Promise
const promise = share.getProductQRCodeBySlug(slug);

// Async/Await
const data = await share.getProductQRCodeBySlug(slug);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | The unique identifier of a product | 

Create product QR Code

*Success Response:*



Success


Schema: `QRCodeResp`








Error


Schema: `ErrorRes`









---


#### getCollectionQRCodeBySlug
Create collection QR Code

```javascript
// Promise
const promise = share.getCollectionQRCodeBySlug(slug);

// Async/Await
const data = await share.getCollectionQRCodeBySlug(slug);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | The unique identifier of a collection | 

Create collection QR Code

*Success Response:*



Success


Schema: `QRCodeResp`








Error


Schema: `ErrorRes`









---


#### getUrlQRCode
Create url QR Code

```javascript
// Promise
const promise = share.getUrlQRCode(url);

// Async/Await
const data = await share.getUrlQRCode(url);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| url | string | Url | 

Create url QR Code

*Success Response:*



Success


Schema: `QRCodeResp`








Error


Schema: `ErrorRes`









---


#### createShortLink
Create short link

```javascript
// Promise
const promise = share.createShortLink(body);

// Async/Await
const data = await share.createShortLink(body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Create short link

*Success Response:*



Success


Schema: `ShortLinkRes`








Error


Schema: `ErrorRes`









---


#### getShortLinkByHash
Get short link by hash

```javascript
// Promise
const promise = share.getShortLinkByHash(hash);

// Async/Await
const data = await share.getShortLinkByHash(hash);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| hash | string | Hash of short link | 

Get short link by hash

*Success Response:*



Success


Schema: `ShortLinkRes`








Error


Schema: `ErrorRes`









---


#### getOriginalShortLinkByHash
Get original link by hash

```javascript
// Promise
const promise = share.getOriginalShortLinkByHash(hash);

// Async/Await
const data = await share.getOriginalShortLinkByHash(hash);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| hash | string | Hash of short link | 

Get original link by hash

*Success Response:*



Success


Schema: `ShortLinkRes`








Error


Schema: `ErrorRes`









---



---


## FileStorage


#### startUpload
This operation initiates upload and returns storage link which is valid for 30 Minutes. You can use that storage link to make subsequent upload request with file buffer or blob.

```javascript
// Promise
const promise = filestorage.startUpload(namespace,body);

// Async/Await
const data = await filestorage.startUpload(namespace,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| namespace | string | bucket name | 

Uploads an arbitrarily sized buffer or blob.

It has three Major Steps:
* Start
* Upload
* Complete

### Start
Initiates the assets upload using `startUpload`.
It returns the storage link in response.

### Upload
Use the storage link to upload a file (Buffer or Blob) to the File Storage.
Make a `PUT` request on storage link received from `startUpload` api with file (Buffer or Blob) as a request body.

### Complete
After successfully upload, call `completeUpload` api to complete the upload process.
This operation will return the url for the uploaded file.


*Success Response:*



Success


Schema: `StartResponse`








Failed


Schema: `FailedResponse`









---


#### completeUpload
This will complete the upload process. After successfully uploading file, you can call this operation to complete the upload process.

```javascript
// Promise
const promise = filestorage.completeUpload(namespace,body);

// Async/Await
const data = await filestorage.completeUpload(namespace,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| namespace | string | bucket name | 

Uploads an arbitrarily sized buffer or blob.

It has three Major Steps:
* Start
* Upload
* Complete

### Start
Initiates the assets upload using `startUpload`.
It returns the storage link in response.

### Upload
Use the storage link to upload a file (Buffer or Blob) to the File Storage.
Make a `PUT` request on storage link received from `startUpload` api with file (Buffer or Blob) as a request body.

### Complete
After successfully upload, call `completeUpload` api to complete the upload process.
This operation will return the url for the uploaded file.


*Success Response:*



Success


Schema: `CompleteResponse`








Failed


Schema: `FailedResponse`









---



---


## Configuration


#### getApplication
Get current application details

```javascript
// Promise
const promise = configuration.getApplication();

// Async/Await
const data = await configuration.getApplication();
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Get current application details.

*Success Response:*



Success


Schema: `Application`








Not found


Schema: `NotFound`









---


#### getOwnerInfo
Get application, owner and seller information

```javascript
// Promise
const promise = configuration.getOwnerInfo();

// Async/Await
const data = await configuration.getOwnerInfo();
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Get application information with owner and seller basic details

*Success Response:*



Success


Schema: `ApplicationAboutResponse`









---


#### getBasicDetails
Get basic application details

```javascript
// Promise
const promise = configuration.getBasicDetails();

// Async/Await
const data = await configuration.getBasicDetails();
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Get basic application details like name

*Success Response:*



Success


Schema: `ApplicationDetail`









---


#### getIntegrationTokens
Get integration tokens

```javascript
// Promise
const promise = configuration.getIntegrationTokens();

// Async/Await
const data = await configuration.getIntegrationTokens();
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Get tokens for multiple integrations like Facebook, Googlemaps, Segment, Firebase, etc. Note: token values are encrypted with AES encryption using secret key. Kindly reach to developers for secret key.

*Success Response:*



Success


Schema: `TokenResponse`









---


#### getOrderingStores
Get deployment meta stores

```javascript
// Promise
const promise = configuration.getOrderingStores(pageNo,pageSize,q);

// Async/Await
const data = await configuration.getOrderingStores(pageNo,pageSize,q);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| pageNo | integer | Current page no | 
| pageSize | integer | Current request items count | 
| q | string | Search ordering store by name or store code | 

Get deployment meta stores.

*Success Response:*



Success


Schema: `OrderingStores`








Not found


Schema: `NotFound`









---


#### getFeatures
Get features of application

```javascript
// Promise
const promise = configuration.getFeatures();

// Async/Await
const data = await configuration.getFeatures();
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Get features of application

*Success Response:*



Success


Schema: `AppFeatureResponse`








Not found


Schema: `NotFound`









---


#### getContactInfo
Get application information

```javascript
// Promise
const promise = configuration.getContactInfo();

// Async/Await
const data = await configuration.getContactInfo();
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Get Application Current Information. This includes information about social links, address and contact information of company/seller/brand of the application.

*Success Response:*



Success


Schema: `ApplicationInformation`









---


#### getCurrencies
Get application enabled currencies

```javascript
// Promise
const promise = configuration.getCurrencies();

// Async/Await
const data = await configuration.getCurrencies();
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Get currency list for allowed currencies under current application

*Success Response:*



Currencies Success response


Schema: `CurrenciesResponse`









---


#### getCurrencyById
Get currency by id

```javascript
// Promise
const promise = configuration.getCurrencyById(id);

// Async/Await
const data = await configuration.getCurrencyById(id);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| id | string | Currency object id | 

Get currency object with symbol and name information by id.

*Success Response:*



Success response


Schema: `Currency`









---


#### getLanguages
Get list of languages

```javascript
// Promise
const promise = configuration.getLanguages();

// Async/Await
const data = await configuration.getLanguages();
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Get list of supported languages under application.

*Success Response:*



Success response


Schema: `LanguageResponse`









---


#### getOrderingStoreCookie
Get ordering store signed cookie on selection of ordering store. This will be used by cart service to verify coupon against selected ordering store in cart.

```javascript
// Promise
const promise = configuration.getOrderingStoreCookie(body);

// Async/Await
const data = await configuration.getOrderingStoreCookie(body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Get ordering store signed cookie on selection of ordering store.

*Success Response:*



Success


Schema: `SuccessMessageResponse`








Success


Schema: `NotFound`









---


#### removeOrderingStoreCookie
Unset ordering store signed cookie on change of sales channel selection via domain in universal fynd store app.

```javascript
// Promise
const promise = configuration.removeOrderingStoreCookie();

// Async/Await
const data = await configuration.removeOrderingStoreCookie();
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Unset ordering store cookie.

*Success Response:*



Success


Schema: `SuccessMessageResponse`









---


#### getAppStaffs
Get Staff List.

```javascript
// Promise
const promise = configuration.getAppStaffs(orderIncent,orderingStore,user);

// Async/Await
const data = await configuration.getAppStaffs(orderIncent,orderingStore,user);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| orderIncent | boolean | This is to check which staff members are applicable for order incentives. | 
| orderingStore | integer | This is to filter staff members from only selected ordering store. | 
| user | string | Get single staff member details using staff user mongo id | 

Get a staff list based on the user's session token passed in the header.

*Success Response:*



Success


Schema: `AppStaffResponse`








Request failed with internal server error.


Schema: `UnhandledError`









---



---


## Payment


#### getAggregatorsConfig
Get payment gateway keys

```javascript
// Promise
const promise = payment.getAggregatorsConfig(xApiToken,refresh);

// Async/Await
const data = await payment.getAggregatorsConfig(xApiToken,refresh);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| xApiToken | string | api token | 
| refresh | boolean | refresh cache | 

Get payment gateway (key, secrets, merchant, sdk/api detail) to complete payment at front-end.

*Success Response:*



Keys of all payment gateway


Schema: `AggregatorsConfigDetailResponse`








Bad Request Error


Schema: `HttpErrorCodeAndResponse`








Internal Server Error


Schema: `HttpErrorCodeAndResponse`









---


#### attachCardToCustomer
Attach a saved card to customer.

```javascript
// Promise
const promise = payment.attachCardToCustomer(body);

// Async/Await
const data = await payment.attachCardToCustomer(body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Attach a saved card to customer at payment gateway i.e stripe and refresh card cache.

*Success Response:*



List of cards objects


Schema: `AttachCardsResponse`








Bad request error


Schema: `any`








Internal Server Error


Schema: `any`









---


#### getActiveCardAggregator
Fetch active payment gateway for card

```javascript
// Promise
const promise = payment.getActiveCardAggregator(refresh);

// Async/Await
const data = await payment.getActiveCardAggregator(refresh);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| refresh | boolean |  | 

Fetch active payment gateway along with customer id for cards payments.

*Success Response:*



Object of payment gateway and customer id


Schema: `ActiveCardPaymentGatewayResponse`








Bad request error


Schema: `HttpErrorCodeAndResponse`








Internal Server Error


Schema: `HttpErrorCodeAndResponse`









---


#### getActiveUserCards
Fetch the list of saved cards of user.

```javascript
// Promise
const promise = payment.getActiveUserCards(forceRefresh);

// Async/Await
const data = await payment.getActiveUserCards(forceRefresh);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| forceRefresh | boolean |  | 

Fetch the list of saved cards of user from active payment gateway.

*Success Response:*



List of cards objects


Schema: `ListCardsResponse`








Bad request error


Schema: `HttpErrorCodeAndResponse`








Internal Server Error


Schema: `HttpErrorCodeAndResponse`









---


#### deleteUserCard
Delete an user card.

```javascript
// Promise
const promise = payment.deleteUserCard(body);

// Async/Await
const data = await payment.deleteUserCard(body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Delete an added user card on payment gateway and remove from cache.

*Success Response:*



List of cards objects


Schema: `DeleteCardsResponse`








Bad request error


Schema: `HttpErrorCodeAndResponse`








Internal Server Error


Schema: `HttpErrorCodeAndResponse`









---


#### verifyCustomerForPayment
Validate customer for payment.

```javascript
// Promise
const promise = payment.verifyCustomerForPayment(body);

// Async/Await
const data = await payment.verifyCustomerForPayment(body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Validate customer for payment i.e Simpl paylater, Rupifi loan.

*Success Response:*



List of cards objects


Schema: `ValidateCustomerResponse`








Bad request error


Schema: `HttpErrorCodeAndResponse`








Internal Server Error


Schema: `HttpErrorCodeAndResponse`









---


#### verifyAndChargePayment
Verify and charge payment

```javascript
// Promise
const promise = payment.verifyAndChargePayment(body);

// Async/Await
const data = await payment.verifyAndChargePayment(body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Verify and charge payment server to server for Simpl & Mswipe.

*Success Response:*



List of cards objects


Schema: `ChargeCustomerResponse`








Bad request error


Schema: `HttpErrorCodeAndResponse`








Internal Server Error


Schema: `HttpErrorCodeAndResponse`









---


#### initialisePayment
Payment Initialisation server to server for UPI and BharatQR.

```javascript
// Promise
const promise = payment.initialisePayment(body);

// Async/Await
const data = await payment.initialisePayment(body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Payment Initialisation for UPI & BharatQR code, UPI requests to app and QR code to be displayed on screen.

*Success Response:*



List of cards objects


Schema: `PaymentInitializationResponse`








Bad request error


Schema: `HttpErrorCodeAndResponse`








Internal Server Error


Schema: `HttpErrorCodeAndResponse`









---


#### checkAndUpdatePaymentStatus
Continous polling to check status of payment on server.

```javascript
// Promise
const promise = payment.checkAndUpdatePaymentStatus(body);

// Async/Await
const data = await payment.checkAndUpdatePaymentStatus(body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Continous polling on interval to check status of payment untill timeout.

*Success Response:*



List of cards objects


Schema: `PaymentStatusUpdateResponse`








Bad request error


Schema: `HttpErrorCodeAndResponse`








Internal Server Error


Schema: `HttpErrorCodeAndResponse`









---


#### getPaymentModeRoutes
Get All Valid Payment Options

```javascript
// Promise
const promise = payment.getPaymentModeRoutes(amount,cartId,pincode,checkoutMode,refresh,assignCardId,userDetails);

// Async/Await
const data = await payment.getPaymentModeRoutes(amount,cartId,pincode,checkoutMode,refresh,assignCardId,userDetails);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| amount | integer | Payment amount | 
| cartId | string | Cart id | 
| pincode | string | Pincode | 
| checkoutMode | string | Checkout mode | 
| refresh | boolean |  | 
| assignCardId | string | selected card id | 
| userDetails | string | URIencoded json annonymous user | 

Use this API to get Get All Valid Payment Options for making payment

*Success Response:*



Success


Schema: `PaymentModeRouteResponse`








Bad Request Error


Schema: `HttpErrorCodeAndResponse`








Internal Server Error


Schema: `HttpErrorCodeAndResponse`









---


#### getPosPaymentModeRoutes
Get All Valid Payment Options for POS

```javascript
// Promise
const promise = payment.getPosPaymentModeRoutes(amount,cartId,pincode,checkoutMode,orderType,refresh,assignCardId,userDetails);

// Async/Await
const data = await payment.getPosPaymentModeRoutes(amount,cartId,pincode,checkoutMode,orderType,refresh,assignCardId,userDetails);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| amount | integer | Payment amount | 
| cartId | string | Cart id | 
| pincode | string | Pincode | 
| checkoutMode | string | Checkout mode | 
| refresh | boolean |  | 
| assignCardId | string | selected card id | 
| orderType | string | Order type | 
| userDetails | string | URIencoded json annonymous user | 

Use this API to get Get All Valid Payment Options for making payment

*Success Response:*



Success


Schema: `PaymentModeRouteResponse`








Bad Request Error


Schema: `HttpErrorCodeAndResponse`








Internal Server Error


Schema: `HttpErrorCodeAndResponse`









---


#### getUserBeneficiariesDetail
List User Beneficiary

```javascript
// Promise
const promise = payment.getUserBeneficiariesDetail(orderId);

// Async/Await
const data = await payment.getUserBeneficiariesDetail(orderId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| orderId | string |  | 

Get all active  beneficiary details added by the user for refund

*Success Response:*



List User Beneficiary


Schema: `OrderBeneficiaryResponse`








Bad Request Error


Schema: `NotFoundResourceError`








Internal Server Error


Schema: `HttpErrorCodeAndResponse`









---


#### verifyIfscCode
Ifsc Code Verification

```javascript
// Promise
const promise = payment.verifyIfscCode(ifscCode);

// Async/Await
const data = await payment.verifyIfscCode(ifscCode);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| ifscCode | string |  | 

Get True/False for correct IFSC Code for adding bank details for refund

*Success Response:*



Bank details on correct Ifsc Code


Schema: `IfscCodeResponse`








Bad Request Error


Schema: `NotFoundResourceError`








Internal Server Error


Schema: `ErrorCodeDescription`









---


#### getOrderBeneficiariesDetail
List Order Beneficiary

```javascript
// Promise
const promise = payment.getOrderBeneficiariesDetail(orderId);

// Async/Await
const data = await payment.getOrderBeneficiariesDetail(orderId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| orderId | string |  | 

Get all active  beneficiary details added by the user for refund

*Success Response:*



List Order Beneficiary


Schema: `OrderBeneficiaryResponse`








Bad Request Error


Schema: `NotFoundResourceError`








Internal Server Error


Schema: `HttpErrorCodeAndResponse`









---


#### verifyOtpAndAddBeneficiaryForBank
Save Beneficiary details on otp validation.

```javascript
// Promise
const promise = payment.verifyOtpAndAddBeneficiaryForBank(body);

// Async/Await
const data = await payment.verifyOtpAndAddBeneficiaryForBank(body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Save Beneficiary details on otp validation.

*Success Response:*



Success


Schema: `AddBeneficiaryViaOtpVerificationResponse`








Bad Request Error


Schema: `WrongOtpError`








Internal Server Error


Schema: `HttpErrorCodeAndResponse`









---


#### addBeneficiaryDetails
Save bank details for cancelled/returned order

```javascript
// Promise
const promise = payment.addBeneficiaryDetails(body);

// Async/Await
const data = await payment.addBeneficiaryDetails(body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Use this API to save bank details for returned/cancelled order to refund amount in his account.

*Success Response:*



Success


Schema: `RefundAccountResponse`








Bad Request Error


Schema: `NotFoundResourceError`








Internal Server Error


Schema: `HttpErrorCodeAndResponse`









---


#### verifyOtpAndAddBeneficiaryForWallet
Send Otp on Adding wallet beneficiary

```javascript
// Promise
const promise = payment.verifyOtpAndAddBeneficiaryForWallet(body);

// Async/Await
const data = await payment.verifyOtpAndAddBeneficiaryForWallet(body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Send Otp on Adding wallet beneficiary for user mobile verification

*Success Response:*



WalletOtp


Schema: `WalletOtpResponse`








Bad Request Error


Schema: `NotFoundResourceError`








Internal Server Error


Schema: `HttpErrorCodeAndResponse`









---


#### updateDefaultBeneficiary
Mark Default Beneficiary For Refund

```javascript
// Promise
const promise = payment.updateDefaultBeneficiary(body);

// Async/Await
const data = await payment.updateDefaultBeneficiary(body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Mark Default Beneficiary ot of all Beneficiary Details for Refund

*Success Response:*



Set Default Beneficiary Response.


Schema: `SetDefaultBeneficiaryResponse`








Bad Request Error


Schema: `SetDefaultBeneficiaryResponse`








Internal Server Error


Schema: `HttpErrorCodeAndResponse`









---



---


## Order


#### getOrders
Get Orders for application based on application Id

```javascript
// Promise
const promise = order.getOrders(pageNo,pageSize,fromDate,toDate);

// Async/Await
const data = await order.getOrders(pageNo,pageSize,fromDate,toDate);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| pageNo | string | Current page number | 
| pageSize | string | Page limit | 
| fromDate | string | From Date | 
| toDate | string | To Date | 

Get Orders

*Success Response:*



Success


Schema: `OrderList`








API Error


Schema: `ApefaceApiError`








Internal Server Error


Schema: `ApefaceApiError`









---


#### getOrderById
Get Order by order id for application based on application Id

```javascript
// Promise
const promise = order.getOrderById(orderId);

// Async/Await
const data = await order.getOrderById(orderId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| orderId | string | Order Id | 

Get Order By Fynd Order Id

*Success Response:*



Success


Schema: `OrderById`








API Error


Schema: `ApefaceApiError`








Internal Server Error


Schema: `ApefaceApiError`









---


#### getShipmentById
Get Shipment by shipment id and order id for application based on application Id

```javascript
// Promise
const promise = order.getShipmentById(shipmentId);

// Async/Await
const data = await order.getShipmentById(shipmentId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| shipmentId | string | Shipment Id | 

Get Shipment

*Success Response:*



Success


Schema: `ShipmentById`








API Error


Schema: `ApefaceApiError`








Internal Server Error


Schema: `ApefaceApiError`









---


#### getShipmentReasons
Get Shipment reasons by shipment id and order id for application based on application Id

```javascript
// Promise
const promise = order.getShipmentReasons(shipmentId);

// Async/Await
const data = await order.getShipmentReasons(shipmentId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| shipmentId | string | Shipment Id | 

Get Shipment Reasons

*Success Response:*



Success


Schema: `ShipmentReasons`








API Error


Schema: `ApefaceApiError`








Internal Server Error


Schema: `ApefaceApiError`









---


#### updateShipmentStatus
Update Shipment status by shipment id and order id for application based on application Id

```javascript
// Promise
const promise = order.updateShipmentStatus(shipmentId,body);

// Async/Await
const data = await order.updateShipmentStatus(shipmentId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| shipmentId | string | Shipment Id | 

Update Shipment Status

*Success Response:*



Success


Schema: `ShipmentStatusUpdate`








API Error


Schema: `ApefaceApiError`








Internal Server Error


Schema: `ApefaceApiError`









---


#### trackShipment
Track Shipment by shipment id and order id for application based on application Id

```javascript
// Promise
const promise = order.trackShipment(shipmentId);

// Async/Await
const data = await order.trackShipment(shipmentId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| shipmentId | string | Shipment Id | 

Shipment Track

*Success Response:*



Success


Schema: `ShipmentTrack`








API Error


Schema: `ApefaceApiError`








Internal Server Error


Schema: `ApefaceApiError`









---


#### getPosOrderById
Get POS Order by order id for application based on application Id

```javascript
// Promise
const promise = order.getPosOrderById(orderId);

// Async/Await
const data = await order.getPosOrderById(orderId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| orderId | string | Order Id | 

Get Order By Fynd Order Id

*Success Response:*



Success


Schema: `PosOrderById`








API Error


Schema: `ApefaceApiError`








Internal Server Error


Schema: `ApefaceApiError`









---



---


## Rewards


#### getPointsOnProduct
Get reward points that could be earned on any catalogue product.

```javascript
// Promise
const promise = rewards.getPointsOnProduct(body);

// Async/Await
const data = await rewards.getPointsOnProduct(body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Evaluate the amount of reward points that could be earned on any catalogue product.

*Success Response:*



ok


Schema: `CatalogueOrderResponse`








Bad request


Schema: `Error`









---


#### getOrderDiscount
Calculates the discount on order-amount based on amount ranges configured in order_discount reward.

```javascript
// Promise
const promise = rewards.getOrderDiscount(body);

// Async/Await
const data = await rewards.getOrderDiscount(body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Calculates the discount on order-amount based on amount ranges configured in order_discount reward.

*Success Response:*



ok


Schema: `OrderDiscountResponse`








Bad request


Schema: `Error`









---


#### getUserPoints
Total available points of a user for current application

```javascript
// Promise
const promise = rewards.getUserPoints();

// Async/Await
const data = await rewards.getUserPoints();
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Total available points of a user for current application

*Success Response:*



ok


Schema: `PointsResponse`








Bad request


Schema: `Error`









---


#### getUserPointsHistory
Get list of points transactions.

```javascript
// Promise
const promise = rewards.getUserPointsHistory(pageId,pageSize);

// Async/Await
const data = await rewards.getUserPointsHistory(pageId,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| pageId | string | PageID is the ID of the requested page. For first request it should be kept empty. | 
| pageSize | integer | PageSize is the number of requested items in response. | 

Get list of points transactions.
The list of points history is paginated.

*Success Response:*



ok


Schema: `PointsHistoryResponse`








Bad request


Schema: `Error`









---


#### getUserReferralDetails
User's referral details.

```javascript
// Promise
const promise = rewards.getUserReferralDetails();

// Async/Await
const data = await rewards.getUserReferralDetails();
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

User's referral details.

*Success Response:*



ok


Schema: `ReferralDetailsResponse`








Bad request


Schema: `Error`









---


#### redeemReferralCode
Redeems referral code and credits points to users points account.

```javascript
// Promise
const promise = rewards.redeemReferralCode(body);

// Async/Await
const data = await rewards.redeemReferralCode(body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Redeems referral code and credits points to users points account.

*Success Response:*



ok


Schema: `RedeemReferralCodeResponse`








Bad request


Schema: `Error`









---



---


## Feedback


#### createAbuseReport
post a new abuse request

```javascript
// Promise
const promise = feedback.createAbuseReport(body);

// Async/Await
const data = await feedback.createAbuseReport(body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Report a new abuse for specific entity with description text.

*Success Response:*



ok


Schema: `InsertResponse`








Bad request


Schema: `FeedbackError`









---


#### updateAbuseReport
Update abuse details

```javascript
// Promise
const promise = feedback.updateAbuseReport(body);

// Async/Await
const data = await feedback.updateAbuseReport(body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Update the abuse details like status and description text.

*Success Response:*



ok


Schema: `UpdateResponse`








Bad request


Schema: `FeedbackError`









---


#### getAbuseReports
Get list of abuse data

```javascript
// Promise
const promise = feedback.getAbuseReports(entityId,entityType,id,pageId,pageSize);

// Async/Await
const data = await feedback.getAbuseReports(entityId,entityType,id,pageId,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| entityId | string | entity id | 
| entityType | string | entity type | 
| id | string | abuse id | 
| pageId | string | pagination page id | 
| pageSize | integer | pagination page size | 

Get the list of abuse data from entity type and entity ID.

*Success Response:*



ok


Schema: `ReportAbuseGetResponse`








Bad request


Schema: `FeedbackError`









---


#### getAttributes
Get list of attribute data

```javascript
// Promise
const promise = feedback.getAttributes(pageNo,pageSize);

// Async/Await
const data = await feedback.getAttributes(pageNo,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| pageNo | integer | pagination page no | 
| pageSize | integer | pagination page size | 

Provides a list of all attribute data.

*Success Response:*



ok


Schema: `AttributeResponse`








Bad request


Schema: `FeedbackError`









---


#### createAttribute
Add a new attribute request

```javascript
// Promise
const promise = feedback.createAttribute(body);

// Async/Await
const data = await feedback.createAttribute(body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Add a new attribute with its name, slug and description.

*Success Response:*



ok


Schema: `InsertResponse`








Bad request


Schema: `FeedbackError`









---


#### getAttribute
Get single attribute data

```javascript
// Promise
const promise = feedback.getAttribute(slug);

// Async/Await
const data = await feedback.getAttribute(slug);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | Slug of attribute | 

Get a single attribute data from a given slug.

*Success Response:*



ok


Schema: `Attribute`








Bad request


Schema: `FeedbackError`









---


#### updateAttribute
Update attribute details

```javascript
// Promise
const promise = feedback.updateAttribute(slug,body);

// Async/Await
const data = await feedback.updateAttribute(slug,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | Slug of attribute | 

Update the attribute's name and description.

*Success Response:*



ok


Schema: `UpdateResponse`








Bad request


Schema: `FeedbackError`









---


#### createComment
post a new comment

```javascript
// Promise
const promise = feedback.createComment(body);

// Async/Await
const data = await feedback.createComment(body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

This is used to add a new comment for specific entity.

*Success Response:*



ok


Schema: `InsertResponse`








Bad request


Schema: `FeedbackError`









---


#### updateComment
Update comment status

```javascript
// Promise
const promise = feedback.updateComment(body);

// Async/Await
const data = await feedback.updateComment(body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Update the comment status (active/approve) or text.

*Success Response:*



ok


Schema: `UpdateResponse`








Bad request


Schema: `FeedbackError`









---


#### getComments
Get list of comments

```javascript
// Promise
const promise = feedback.getComments(entityType,id,entityId,userId,pageId,pageSize);

// Async/Await
const data = await feedback.getComments(entityType,id,entityId,userId,pageId,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| entityType | string | entity type | 
| id | string | comment id | 
| entityId | string | entity id | 
| userId | string | user id - flag/filter to get comments for user | 
| pageId | string | pagination page id | 
| pageSize | integer | pagination page size | 

Get the list of comments from specific entity type.

*Success Response:*



ok


Schema: `CommentGetResponse`








Bad request


Schema: `FeedbackError`









---


#### checkEligibility
Checks eligibility and cloud media config

```javascript
// Promise
const promise = feedback.checkEligibility(entityType,entityId);

// Async/Await
const data = await feedback.checkEligibility(entityType,entityId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| entityType | string | entity type | 
| entityId | string | entity id | 

Checks eligibility to rate and review and cloud media configuration

*Success Response:*



ok


Schema: `CheckEligibilityResponse`








Bad request


Schema: `FeedbackError`









---


#### deleteMedia
Delete Media

```javascript
// Promise
const promise = feedback.deleteMedia();

// Async/Await
const data = await feedback.deleteMedia();
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Delete Media for the given entity IDs.

*Success Response:*



ok


Schema: `UpdateResponse`








Bad request


Schema: `FeedbackError`









---


#### createMedia
Add Media

```javascript
// Promise
const promise = feedback.createMedia(body);

// Async/Await
const data = await feedback.createMedia(body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Add Media list for specific entity.

*Success Response:*



ok


Schema: `InsertResponse`








Bad request


Schema: `FeedbackError`









---


#### updateMedia
Update Media

```javascript
// Promise
const promise = feedback.updateMedia(body);

// Async/Await
const data = await feedback.updateMedia(body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Update Media (archive/approve) for the given entity.

*Success Response:*



ok


Schema: `UpdateResponse`








Bad request


Schema: `FeedbackError`









---


#### getMedias
Get Media

```javascript
// Promise
const promise = feedback.getMedias(entityType,entityId,id,pageId,pageSize);

// Async/Await
const data = await feedback.getMedias(entityType,entityId,id,pageId,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| entityType | string | entity type | 
| entityId | string | entity id | 
| id | string | vote id | 
| pageId | string | pagination page id | 
| pageSize | integer | pagination page size | 

Get Media from the given entity type and entity ID.

*Success Response:*



ok


Schema: `MediaGetResponse`








Bad request


Schema: `FeedbackError`









---


#### getReviewSummaries
Get a review summary

```javascript
// Promise
const promise = feedback.getReviewSummaries(entityType,entityId,id,pageId,pageSize);

// Async/Await
const data = await feedback.getReviewSummaries(entityType,entityId,id,pageId,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| entityType | string | entity type | 
| entityId | string | entity id | 
| id | string | review summary identifier | 
| pageId | string | pagination page id | 
| pageSize | integer | pagination page size | 

Review summary gives ratings and attribute metrics of a review per entity
It gives following response data: review count, rating average. review metrics / attribute rating metrics which contains name, type, average and count.

*Success Response:*



success


Schema: `RatingGetResponse`








Bad request


Schema: `FeedbackError`









---


#### createReview
Add customer reviews

```javascript
// Promise
const promise = feedback.createReview(body);

// Async/Await
const data = await feedback.createReview(body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Add customer reviews for specific entity with following data:
attributes rating, entity rating, title, description, media resources and template id.

*Success Response:*



Success


Schema: `UpdateResponse`








Bad Request


Schema: `FeedbackError`









---


#### updateReview
Update customer reviews

```javascript
// Promise
const promise = feedback.updateReview(body);

// Async/Await
const data = await feedback.updateReview(body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Update customer reviews for specific entity with following data:
attributes rating, entity rating, title, description, media resources and template id.

*Success Response:*



Success


Schema: `UpdateResponse`








Bad Request


Schema: `FeedbackError`









---


#### getReviews
Get list of customer reviews

```javascript
// Promise
const promise = feedback.getReviews(entityType,entityId,id,userId,media,rating,attributeRating,facets,sort,pageId,pageSize);

// Async/Await
const data = await feedback.getReviews(entityType,entityId,id,userId,media,rating,attributeRating,facets,sort,pageId,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| entityType | string | entity type | 
| entityId | string | entity id | 
| id | string | review id | 
| userId | string | user id | 
| media | string | media type e.g. image | video | video_file | video_link | 
| rating | array | rating filter, 1-5 | 
| attributeRating | array | attribute rating filter | 
| facets | boolean | facets (true|false) | 
| sort | string | sort by : default | top | recent | 
| pageId | string | pagination page id | 
| pageSize | integer | pagination page size | 

This is used to get the list of customer reviews based on entity and provided filters.

*Success Response:*



Success


Schema: `ReviewGetResponse`








Bad Request


Schema: `FeedbackError`









---


#### getTemplates
Get the templates for product or l3 type

```javascript
// Promise
const promise = feedback.getTemplates(templateId,entityId,entityType);

// Async/Await
const data = await feedback.getTemplates(templateId,entityId,entityType);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| templateId | string | template id | 
| entityId | string | entity id | 
| entityType | string | entity type e.g. product | l3 | 

This is used to get the templates details.

*Success Response:*



Success


Schema: `CursorGetResponse`








Bad Request


Schema: `FeedbackError`









---


#### createQuestion
Create a new question

```javascript
// Promise
const promise = feedback.createQuestion(body);

// Async/Await
const data = await feedback.createQuestion(body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

This is used to create a new question with following data:
tags, text, type, choices for MCQ type questions, maximum length of answer.

*Success Response:*



ok


Schema: `InsertResponse`








Bad request


Schema: `FeedbackError`









---


#### updateQuestion
Update question

```javascript
// Promise
const promise = feedback.updateQuestion(body);

// Async/Await
const data = await feedback.updateQuestion(body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

This is used to update question's status, tags and choices.

*Success Response:*



ok


Schema: `UpdateResponse`








Bad request


Schema: `FeedbackError`









---


#### getQuestionAndAnswers
Get a list of QnA

```javascript
// Promise
const promise = feedback.getQuestionAndAnswers(entityType,entityId,id,showAnswer,pageId,pageSize);

// Async/Await
const data = await feedback.getQuestionAndAnswers(entityType,entityId,id,showAnswer,pageId,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| entityType | string | entity type | 
| entityId | string | entity id | 
| id | string | qna id | 
| showAnswer | boolean | show answer flag | 
| pageId | string | pagination page id | 
| pageSize | integer | pagination page size | 

This is used to get a list of questions and its answers.

*Success Response:*



ok


Schema: `QNAGetResponse`








Bad request


Schema: `FeedbackError`









---


#### getVotes
Get list of votes

```javascript
// Promise
const promise = feedback.getVotes(id,refType,pageNo,pageSize);

// Async/Await
const data = await feedback.getVotes(id,refType,pageNo,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| id | string | vote id | 
| refType | string | entity type e.g. review | comment | 
| pageNo | integer | pagination page no | 
| pageSize | integer | pagination page size | 

This is used to get the list of votes of a current logged in user. Votes can be filtered using `ref_type` i.e. review | comment.

*Success Response:*



ok


Schema: `VoteResponse`








Bad request


Schema: `FeedbackError`









---


#### createVote
Create a new vote

```javascript
// Promise
const promise = feedback.createVote(body);

// Async/Await
const data = await feedback.createVote(body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

This is used to create a new vote and the actions can be upvote or downvote.

*Success Response:*



ok


Schema: `InsertResponse`








Bad request


Schema: `FeedbackError`









---


#### updateVote
Update vote

```javascript
// Promise
const promise = feedback.updateVote(body);

// Async/Await
const data = await feedback.updateVote(body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

This is used to update the vote and the actions can be upvote or downvote.

*Success Response:*



ok


Schema: `UpdateResponse`








Bad request


Schema: `FeedbackError`









---



---


## PosCart


#### getCart
Fetch all Items Added to  Cart

```javascript
// Promise
const promise = poscart.getCart(uid,i,b,assignCardId);

// Async/Await
const data = await poscart.getCart(uid,i,b,assignCardId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| uid | integer |  | 
| i | boolean |  | 
| b | boolean |  | 
| assignCardId | integer |  | 

Get all the details of a items added to cart  by uid. If successful, returns a Cart resource in the response body specified in CartResponse

*Success Response:*



The Cart object. See example below or refer CartResponse for details


Schema: `CartResponse`









---


#### getCartLastModified
Fetch Last-Modified timestamp

```javascript
// Promise
const promise = poscart.getCartLastModified(uid);

// Async/Await
const data = await poscart.getCartLastModified(uid);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| uid | integer |  | 

Fetch Last-Modified timestamp in header metadata

*Success Response:*



Fetch Last-Modified Timestamp Response






---


#### addItems
Add Items to Cart

```javascript
// Promise
const promise = poscart.addItems(body,i,b);

// Async/Await
const data = await poscart.addItems(body,i,b);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| i | boolean |  | 
| b | boolean |  | 

<p>Add Items to cart. See `AddCartRequest` in schema of request body for the list of attributes needed to add items to a cart. On successful request, returns cart response containing details of items, coupons available etc.these attributes will be fetched from the folowing api's</p>

*Success Response:*



Response of the cart object including all item details included in .the cart,coupons etc.


Schema: `AddCartResponse`


*Examples:*


Product has been added to your cart
```json
{
  "value": {
    "message": "Product has been added to your cart",
    "success": true,
    "cart": {
      "breakup_values": {
        "display": [
          {
            "display": "MRP Total",
            "key": "mrp_total",
            "value": 17486,
            "currency_code": "INR"
          },
          {
            "display": "Discount",
            "key": "discount",
            "value": -3540,
            "currency_code": "INR"
          },
          {
            "display": "Subtotal",
            "key": "subtotal",
            "value": 13946,
            "currency_code": "INR"
          },
          {
            "display": "Total",
            "key": "total",
            "value": 13946,
            "currency_code": "INR"
          }
        ],
        "raw": {
          "cod_charge": 0,
          "convenience_fee": 0,
          "coupon": 0,
          "delivery_charge": 0,
          "discount": -3540,
          "fynd_cash": 0,
          "gst_charges": 1529.96,
          "mrp_total": 17486,
          "subtotal": 13946,
          "total": 13946,
          "vog": 12416.04,
          "you_saved": 0
        },
        "loyalty_points": {
          "total": 0,
          "applicable": 0,
          "is_applied": false,
          "description": "Your cashback, referrals, and refund amount get credited to Fynd Cash which can be redeemed while placing an order."
        },
        "coupon": {
          "type": "cash",
          "code": "",
          "uid": null,
          "value": 0,
          "is_applied": false,
          "message": "Sorry! Invalid Coupon"
        }
      },
      "items": [
        {
          "key": "751083_10",
          "article": {
            "type": "article",
            "uid": "612_9_SE61201_19100302_10",
            "size": "10",
            "seller": {
              "uid": 612,
              "name": "SSR ENTERPRISE"
            },
            "store": {
              "uid": 4431,
              "name": "Motilal Nagar 1, Goregaon"
            },
            "quantity": 4,
            "price": {
              "base": {
                "marked": 3999,
                "effective": 2399,
                "currency_code": "INR"
              },
              "converted": {
                "marked": 3999,
                "effective": 2399,
                "currency_code": "INR"
              }
            }
          },
          "price": {
            "base": {
              "add_on": 4798,
              "marked": 7998,
              "effective": 4798,
              "selling": 4798,
              "currency_code": "INR"
            },
            "converted": {
              "add_on": 4798,
              "marked": 7998,
              "effective": 4798,
              "selling": 4798,
              "currency_code": "INR"
            }
          },
          "availability": {
            "sizes": [
              "10"
            ],
            "other_store_quantity": 2,
            "out_of_stock": false,
            "deliverable": true,
            "is_valid": true
          },
          "product": {
            "type": "product",
            "uid": 751083,
            "name": "Carson 2",
            "slug": "puma-carson-2-751083-6ad98d",
            "brand": {
              "uid": 9,
              "name": "Puma"
            },
            "categories": [
              {
                "uid": 165,
                "name": "Outdoor Sports Shoes"
              }
            ],
            "images": [
              {
                "aspect_ratio": "16:25",
                "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/9_19100302/1_1542807042296.jpg",
                "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/9_19100302/1_1542807042296.jpg"
              }
            ],
            "action": {
              "type": "product",
              "url": "https://api.addsale.com/platform/content/v1/products/puma-carson-2-751083-6ad98d/",
              "query": {
                "product_slug": [
                  "puma-carson-2-751083-6ad98d"
                ]
              }
            }
          },
          "coupon_message": "",
          "quantity": 2,
          "message": "",
          "bulk_offer": {},
          "discount": "41% OFF"
        },
        {
          "key": "246228_S",
          "article": {
            "type": "article",
            "uid": "46_235_TM62_M11029ONDSXNS_S",
            "size": "S",
            "seller": {
              "uid": 46,
              "name": "RELIANCE BRANDS LIMITED"
            },
            "store": {
              "uid": 4550,
              "name": "VR Mall"
            },
            "quantity": 1,
            "price": {
              "base": {
                "marked": 4490,
                "effective": 4490,
                "currency_code": "INR"
              },
              "converted": {
                "marked": 4490,
                "effective": 4490,
                "currency_code": "INR"
              }
            }
          },
          "price": {
            "base": {
              "add_on": 4490,
              "marked": 4490,
              "effective": 4490,
              "selling": 4490,
              "currency_code": "INR"
            },
            "converted": {
              "add_on": 4490,
              "marked": 4490,
              "effective": 4490,
              "selling": 4490,
              "currency_code": "INR"
            }
          },
          "availability": {
            "sizes": [
              "L",
              "M",
              "S",
              "XL",
              "XXL"
            ],
            "other_store_quantity": 0,
            "out_of_stock": false,
            "deliverable": true,
            "is_valid": true
          },
          "product": {
            "type": "product",
            "uid": 246228,
            "name": "Blue Solid T-Shirt",
            "slug": "superdry-blue-solid-t-shirt-2",
            "brand": {
              "uid": 235,
              "name": "Superdry"
            },
            "categories": [
              {
                "uid": 192,
                "name": "T-Shirts"
              }
            ],
            "images": [
              {
                "aspect_ratio": "16:25",
                "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/235_M11029ONDSXNS/1.jpg",
                "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/235_M11029ONDSXNS/1.jpg"
              }
            ],
            "action": {
              "type": "product",
              "url": "https://api.addsale.com/platform/content/v1/products/superdry-blue-solid-t-shirt-2/",
              "query": {
                "product_slug": [
                  "superdry-blue-solid-t-shirt-2"
                ]
              }
            }
          },
          "coupon_message": "",
          "quantity": 1,
          "message": "",
          "bulk_offer": {},
          "discount": ""
        },
        {
          "key": "443175_S",
          "article": {
            "type": "article",
            "uid": "162_207_1271_LJ03LBLUDN88_S",
            "size": "S",
            "seller": {
              "uid": 162,
              "name": "GO FASHION INDIA PRIVATE LIMITED"
            },
            "store": {
              "uid": 5784,
              "name": "Vega City mall"
            },
            "quantity": 3,
            "price": {
              "base": {
                "marked": 1599,
                "effective": 1599,
                "currency_code": "INR"
              },
              "converted": {
                "marked": 1599,
                "effective": 1599,
                "currency_code": "INR"
              }
            }
          },
          "price": {
            "base": {
              "add_on": 1599,
              "marked": 1599,
              "effective": 1599,
              "selling": 1599,
              "currency_code": "INR"
            },
            "converted": {
              "add_on": 1599,
              "marked": 1599,
              "effective": 1599,
              "selling": 1599,
              "currency_code": "INR"
            }
          },
          "availability": {
            "sizes": [
              "XL",
              "M",
              "L",
              "S"
            ],
            "other_store_quantity": 8,
            "out_of_stock": false,
            "deliverable": true,
            "is_valid": true
          },
          "product": {
            "type": "product",
            "uid": 443175,
            "name": "Light Blue Denim Jeggings",
            "slug": "go-colors-light-blue-denim-jeggings-443175-3c688c",
            "brand": {
              "uid": 207,
              "name": "Go Colors"
            },
            "categories": [
              {
                "uid": 267,
                "name": "Jeggings"
              }
            ],
            "images": [
              {
                "aspect_ratio": "16:25",
                "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/207_LJ03LBLUDN88/1_1512382513548.jpg",
                "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/207_LJ03LBLUDN88/1_1512382513548.jpg"
              }
            ],
            "action": {
              "type": "product",
              "url": "https://api.addsale.com/platform/content/v1/products/go-colors-light-blue-denim-jeggings-443175-3c688c/",
              "query": {
                "product_slug": [
                  "go-colors-light-blue-denim-jeggings-443175-3c688c"
                ]
              }
            }
          },
          "coupon_message": "",
          "quantity": 1,
          "message": "",
          "bulk_offer": {},
          "discount": ""
        },
        {
          "key": "778937_OS",
          "article": {
            "type": "article",
            "uid": "686_963_IC68601_PWUPC01977_OS",
            "size": "OS",
            "seller": {
              "uid": 686,
              "name": "INDUS CORPORATION"
            },
            "store": {
              "uid": 5059,
              "name": "Vidyaranyapura Main Road"
            },
            "quantity": 3,
            "price": {
              "base": {
                "marked": 3399,
                "effective": 3059,
                "currency_code": "INR"
              },
              "converted": {
                "marked": 3399,
                "effective": 3059,
                "currency_code": "INR"
              }
            }
          },
          "price": {
            "base": {
              "add_on": 3059,
              "marked": 3399,
              "effective": 3059,
              "selling": 3059,
              "currency_code": "INR"
            },
            "converted": {
              "add_on": 3059,
              "marked": 3399,
              "effective": 3059,
              "selling": 3059,
              "currency_code": "INR"
            }
          },
          "availability": {
            "sizes": [
              "OS"
            ],
            "other_store_quantity": 2,
            "out_of_stock": false,
            "deliverable": true,
            "is_valid": true
          },
          "product": {
            "type": "product",
            "uid": 778937,
            "name": "Colourful Carnival Bouncer",
            "slug": "fisher-price-colourful-carnival-bouncer-778937-fafa1f",
            "brand": {
              "uid": 963,
              "name": "Fisher-Price"
            },
            "categories": [
              {
                "uid": 576,
                "name": "Cradles"
              }
            ],
            "images": [
              {
                "aspect_ratio": "16:25",
                "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/963_PWUPC01977/1_1545308400588.jpg",
                "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/963_PWUPC01977/1_1545308400588.jpg"
              }
            ],
            "action": {
              "type": "product",
              "url": "https://api.addsale.com/platform/content/v1/products/fisher-price-colourful-carnival-bouncer-778937-fafa1f/",
              "query": {
                "product_slug": [
                  "fisher-price-colourful-carnival-bouncer-778937-fafa1f"
                ]
              }
            }
          },
          "coupon_message": "",
          "quantity": 1,
          "message": "",
          "bulk_offer": {},
          "discount": "11% OFF"
        }
      ],
      "delivery_charge_info": "",
      "coupon_text": "View all offers",
      "cart_id": 7927,
      "uid": "7927",
      "gstin": null,
      "checkout_mode": "self",
      "last_modified": "Tue, 03 Sep 2019 06:00:43 GMT",
      "restrict_checkout": false,
      "is_valid": true
    },
    "result": {}
  }
}
```

Sorry, item is out of stock
```json
{
  "value": {
    "message": "Sorry, item is out of stock",
    "success": false,
    "cart": {
      "breakup_values": {
        "raw": {
          "cod_charge": 0,
          "convenience_fee": 0,
          "coupon": 0,
          "delivery_charge": 0,
          "discount": -202000,
          "fynd_cash": 0,
          "gst_charges": 4804.71,
          "mrp_total": 302899,
          "subtotal": 100899,
          "total": 100899,
          "vog": 96094.29,
          "you_saved": 0
        },
        "coupon": {
          "type": "cash",
          "code": "",
          "uid": null,
          "value": 0,
          "is_applied": false,
          "message": "Sorry! Invalid Coupon"
        },
        "display": [
          {
            "display": "MRP Total",
            "key": "mrp_total",
            "value": 302899,
            "currency_code": "INR"
          },
          {
            "display": "Discount",
            "key": "discount",
            "value": -202000,
            "currency_code": "INR"
          },
          {
            "display": "Subtotal",
            "key": "subtotal",
            "value": 100899,
            "currency_code": "INR"
          },
          {
            "display": "Total",
            "key": "total",
            "value": 100899,
            "currency_code": "INR"
          }
        ],
        "loyalty_points": {
          "total": 0,
          "applicable": 0,
          "is_applied": false,
          "description": "Your cashback, referrals, and refund amount get credited to Fynd Cash which can be redeemed while placing an order."
        }
      },
      "items": [
        {
          "bulk_offer": {},
          "discount": "67% OFF",
          "article": {
            "type": "article",
            "uid": "604_902_SSTC60401_636BLUE_1",
            "size": "1",
            "seller": {
              "uid": 604,
              "name": "SHRI SHANTINATH TRADING COMPANY"
            },
            "store": {
              "uid": 4579,
              "name": "Gandhi Nagar"
            },
            "quantity": 108,
            "price": {
              "base": {
                "marked": 2999,
                "effective": 999,
                "currency_code": "INR"
              },
              "converted": {
                "marked": 2999,
                "effective": 999,
                "currency_code": "INR"
              }
            }
          },
          "coupon_message": "",
          "key": "707569_1",
          "availability": {
            "sizes": [
              "1",
              "8",
              "7",
              "2",
              "9",
              "5",
              "3",
              "6"
            ],
            "other_store_quantity": 7,
            "out_of_stock": false,
            "deliverable": true,
            "is_valid": true
          },
          "product": {
            "type": "product",
            "uid": 707569,
            "name": "Blue and Gold Printed Ethnic Set",
            "slug": "aj-dezines-blue-and-gold-printed-ethnic-set-707569-bff01a",
            "brand": {
              "uid": 902,
              "name": ""
            },
            "categories": [
              {
                "uid": 525,
                "name": ""
              }
            ],
            "images": [
              {
                "aspect_ratio": "16:25",
                "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/902_636BLUE/1_1540301094877.jpg",
                "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/902_636BLUE/1_1540301094877.jpg"
              }
            ],
            "action": {
              "type": "product",
              "url": "https://api.addsale.com/v1/products/aj-dezines-blue-and-gold-printed-ethnic-set-707569-bff01a/",
              "query": {
                "product_slug": [
                  "aj-dezines-blue-and-gold-printed-ethnic-set-707569-bff01a"
                ]
              }
            }
          },
          "price": {
            "base": {
              "add_on": 100899,
              "marked": 302899,
              "effective": 100899,
              "selling": 100899,
              "currency_code": "INR"
            },
            "converted": {
              "add_on": 100899,
              "marked": 302899,
              "effective": 100899,
              "selling": 100899,
              "currency_code": "INR"
            }
          },
          "message": "",
          "quantity": 101
        }
      ],
      "delivery_charge_info": "",
      "coupon_text": "View all offers",
      "cart_id": 54,
      "uid": "54",
      "gstin": null,
      "checkout_mode": "self",
      "restrict_checkout": false,
      "is_valid": false,
      "last_modified": "Tue, 03 Sep 2019 09:55:40 GMT"
    },
    "result": {}
  }
}
```









---


#### updateCart
Update Items already added to Cart

```javascript
// Promise
const promise = poscart.updateCart(body,uid,i,b);

// Async/Await
const data = await poscart.updateCart(body,uid,i,b);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| uid | integer |  | 
| i | boolean |  | 
| b | boolean |  | 

Request object containing attributes like item_quantity and item_size which can be updated .these attributes will be fetched from the folowing api's</p> <ul> <li><font color="monochrome">operation</font> Operation for current api call. <b>update_item</b> for update items. <b>remove_item</b> for removing items.</li> <li> <font color="monochrome">item_id</font>  "/platform/content/v1/products/"</li> <li> <font color="monochrome">item_size</font>   "/platform/content/v1/products/{slug}/sizes/"</li> <li> <font color="monochrome">quantity</font>  item quantity (must be greater than or equal to 1)</li> <li> <font color="monochrome">article_id</font>   "/content​/v1​/products​/{identifier}​/sizes​/price​/"</li> <li> <font color="monochrome">item_index</font>  item position in the cart (must be greater than or equal to 0)</li> </ul>

*Success Response:*



Response of the cart object including all item with their updated details included in .the cart,coupons etc..


Schema: `UpdateCartResponse`


*Examples:*


Nothing updated
```json
{
  "value": {
    "cart": {
      "breakup_values": {
        "raw": {
          "cod_charge": 0,
          "convenience_fee": 0,
          "coupon": 0,
          "delivery_charge": 0,
          "discount": -202000,
          "fynd_cash": 0,
          "gst_charges": 4804.71,
          "mrp_total": 302899,
          "subtotal": 100899,
          "total": 100899,
          "vog": 96094.29,
          "you_saved": 0
        },
        "coupon": {
          "type": "cash",
          "code": "",
          "uid": null,
          "value": 0,
          "is_applied": false,
          "message": "Sorry! Invalid Coupon"
        },
        "display": [
          {
            "display": "MRP Total",
            "key": "mrp_total",
            "value": 302899,
            "currency_code": "INR"
          },
          {
            "display": "Discount",
            "key": "discount",
            "value": -202000,
            "currency_code": "INR"
          },
          {
            "display": "Subtotal",
            "key": "subtotal",
            "value": 100899,
            "currency_code": "INR"
          },
          {
            "display": "Total",
            "key": "total",
            "value": 100899,
            "currency_code": "INR"
          }
        ],
        "loyalty_points": {
          "total": 0,
          "applicable": 0,
          "is_applied": false,
          "description": "Your cashback, referrals, and refund amount get credited to Fynd Cash which can be redeemed while placing an order."
        }
      },
      "items": [
        {
          "bulk_offer": {},
          "discount": "67% OFF",
          "article": {
            "type": "article",
            "uid": "604_902_SSTC60401_636BLUE_1",
            "size": "1",
            "seller": {
              "uid": 604,
              "name": "SHRI SHANTINATH TRADING COMPANY"
            },
            "store": {
              "uid": 4579,
              "name": "Gandhi Nagar"
            },
            "quantity": 108,
            "price": {
              "base": {
                "marked": 2999,
                "effective": 999,
                "currency_code": "INR"
              },
              "converted": {
                "marked": 2999,
                "effective": 999,
                "currency_code": "INR"
              }
            }
          },
          "coupon_message": "",
          "key": "707569_1",
          "availability": {
            "sizes": [
              "1",
              "8",
              "7",
              "2",
              "9",
              "5",
              "3",
              "6"
            ],
            "other_store_quantity": 7,
            "out_of_stock": false,
            "deliverable": true,
            "is_valid": true
          },
          "product": {
            "type": "product",
            "uid": 707569,
            "name": "Blue and Gold Printed Ethnic Set",
            "slug": "aj-dezines-blue-and-gold-printed-ethnic-set-707569-bff01a",
            "brand": {
              "uid": 902,
              "name": ""
            },
            "categories": [
              {
                "uid": 525,
                "name": ""
              }
            ],
            "images": [
              {
                "aspect_ratio": "16:25",
                "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/902_636BLUE/1_1540301094877.jpg",
                "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/902_636BLUE/1_1540301094877.jpg"
              }
            ],
            "action": {
              "type": "product",
              "url": "https://api.addsale.com/v1/products/aj-dezines-blue-and-gold-printed-ethnic-set-707569-bff01a/",
              "query": {
                "product_slug": [
                  "aj-dezines-blue-and-gold-printed-ethnic-set-707569-bff01a"
                ]
              }
            }
          },
          "price": {
            "base": {
              "add_on": 100899,
              "marked": 302899,
              "effective": 100899,
              "selling": 100899,
              "currency_code": "INR"
            },
            "converted": {
              "add_on": 100899,
              "marked": 302899,
              "effective": 100899,
              "selling": 100899,
              "currency_code": "INR"
            }
          },
          "message": "",
          "quantity": 101
        }
      ],
      "delivery_charge_info": "",
      "coupon_text": "View all offers",
      "cart_id": 54,
      "uid": "54",
      "gstin": null,
      "checkout_mode": "self",
      "restrict_checkout": false,
      "is_valid": true,
      "last_modified": "Tue, 03 Sep 2019 10:19:20 GMT"
    },
    "result": {
      "707569_90": {
        "success": true,
        "message": "Nothing updated"
      }
    },
    "message": "Nothing updated",
    "success": true
  }
}
```

Item updated in the cart
```json
{
  "value": {
    "cart": {
      "breakup_values": {
        "coupon": {
          "type": "cash",
          "code": "",
          "uid": null,
          "value": 0,
          "is_applied": false,
          "message": "Sorry! Invalid Coupon"
        },
        "loyalty_points": {
          "total": 0,
          "applicable": 0,
          "is_applied": false,
          "description": "Your cashback, referrals, and refund amount get credited to Fynd Cash which can be redeemed while placing an order."
        },
        "raw": {
          "cod_charge": 0,
          "convenience_fee": 0,
          "coupon": 0,
          "delivery_charge": 0,
          "discount": 0,
          "fynd_cash": 0,
          "gst_charges": 838.83,
          "mrp_total": 5499,
          "subtotal": 5499,
          "total": 5499,
          "vog": 4660.17,
          "you_saved": 0
        },
        "display": [
          {
            "display": "MRP Total",
            "key": "mrp_total",
            "value": 5499,
            "currency_code": "INR"
          },
          {
            "display": "Subtotal",
            "key": "subtotal",
            "value": 5499,
            "currency_code": "INR"
          },
          {
            "display": "Total",
            "key": "total",
            "value": 5499,
            "currency_code": "INR"
          }
        ]
      },
      "items": [
        {
          "key": "437414_7",
          "message": "",
          "bulk_offer": {},
          "price": {
            "base": {
              "add_on": 5499,
              "marked": 5499,
              "effective": 5499,
              "selling": 5499,
              "currency_code": "INR"
            },
            "converted": {
              "add_on": 5499,
              "marked": 5499,
              "effective": 5499,
              "selling": 5499,
              "currency_code": "INR"
            }
          },
          "quantity": 1,
          "discount": "",
          "product": {
            "type": "product",
            "uid": 437414,
            "name": "Suede Classic",
            "slug": "puma-suede-classic-437414-6e6bbf",
            "brand": {
              "uid": 9,
              "name": "Puma"
            },
            "categories": [
              {
                "uid": 165,
                "name": "Outdoor Sports Shoes"
              }
            ],
            "images": [
              {
                "aspect_ratio": "16:25",
                "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/9_35656851/1_1511171811830.jpg",
                "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/9_35656851/1_1511171811830.jpg"
              }
            ],
            "action": {
              "type": "product",
              "url": "https://api.addsale.com/platform/content/v1/products/puma-suede-classic-437414-6e6bbf/",
              "query": {
                "product_slug": [
                  "puma-suede-classic-437414-6e6bbf"
                ]
              }
            }
          },
          "article": {
            "type": "article",
            "uid": "507_9_96099_35656851_7",
            "size": "7",
            "seller": {
              "uid": 507,
              "name": "PUMA SPORTS INDIA PVT LTD"
            },
            "store": {
              "uid": 3632,
              "name": "Colaba Causway"
            },
            "quantity": 5,
            "price": {
              "base": {
                "marked": 5499,
                "effective": 5499,
                "currency_code": "INR"
              },
              "converted": {
                "marked": 5499,
                "effective": 5499,
                "currency_code": "INR"
              }
            }
          },
          "coupon_message": "",
          "availability": {
            "sizes": [
              "10",
              "11",
              "6",
              "9",
              "7",
              "8"
            ],
            "other_store_quantity": 22,
            "out_of_stock": false,
            "deliverable": true,
            "is_valid": true
          }
        }
      ],
      "delivery_charge_info": "",
      "coupon_text": "View all offers",
      "cart_id": 12426,
      "uid": "12426",
      "gstin": null,
      "checkout_mode": "self",
      "last_modified": "Thu, 22 Aug 2019 04:51:42 GMT",
      "restrict_checkout": false,
      "is_valid": true
    },
    "result": {
      "437414_7": {
        "success": true,
        "message": "Item updated in the bag"
      }
    },
    "message": "Item updated in the bag",
    "success": true
  }
}
```









---


#### getItemCount
Cart item count

```javascript
// Promise
const promise = poscart.getItemCount(uid);

// Async/Await
const data = await poscart.getItemCount(uid);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| uid | integer | Cart id | 

Get total count of item present in cart

*Success Response:*



OK


Schema: `CartItemCountResponse`









---


#### getCoupons
Fetch Coupon

```javascript
// Promise
const promise = poscart.getCoupons(uid);

// Async/Await
const data = await poscart.getCoupons(uid);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| uid | integer |  | 

Get all the details of a coupons applicable to cart  by uid. If successful, returns a Coupon resource in the response body specified in GetCouponResponse

*Success Response:*



Returns The Couppon object which has list of all available_coupon applicale for the cart. See example below or refer GetCouponResponse for details


Schema: `GetCouponResponse`









---


#### applyCoupon
Apply Coupon

```javascript
// Promise
const promise = poscart.applyCoupon(body,i,b,p,uid);

// Async/Await
const data = await poscart.applyCoupon(body,i,b,p,uid);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| i | boolean |  | 
| b | boolean |  | 
| p | boolean |  | 
| uid | integer |  | 

<p>Apply Coupons on Items added to cart. On successful request, returns cart response containing details of items ,coupons applied etc.these attributes will be consumed by  api</p> <ul> <li> <font color="monochrome">coupon_code</font></li>
</ul>

*Success Response:*



Response of the Coupon object including all item details included in .the cart,coupons applied etc.


Schema: `CartResponse`









---


#### removeCoupon
Remove Coupon Applied

```javascript
// Promise
const promise = poscart.removeCoupon(uid);

// Async/Await
const data = await poscart.removeCoupon(uid);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| uid | integer | Cart id | 

Remove Coupon applied on the cart by passing uid in request body.

*Success Response:*



Response of the Coupon object including all item details included in .the cart,coupons removed etc.


Schema: `CartResponse`









---


#### getBulkDiscountOffers
Get discount offers based on quantity

```javascript
// Promise
const promise = poscart.getBulkDiscountOffers(itemId,articleId,uid,slug);

// Async/Await
const data = await poscart.getBulkDiscountOffers(itemId,articleId,uid,slug);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| itemId | integer | Item id | 
| articleId | string | Article mongo id | 
| uid | integer | Item id | 
| slug | string | Item unique url from product page | 

List applicable offers along with current, next and best offer for given product. Either one of **uid**, **item_id**, **slug** should be present*

*Success Response:*



Offers found or not found with valid input


Schema: `BulkPriceResponse`


*Examples:*


Offers found
```json
{
  "value": {
    "data": [
      {
        "seller": {
          "uid": 248,
          "name": "MANYAVAR CREATIONS PRIVATE LIMITED"
        },
        "offers": [
          {
            "quantity": 1,
            "auto_applied": true,
            "margin": 10,
            "type": "bundle",
            "price": {
              "marked": 3999,
              "effective": 3999,
              "bulk_effective": 3599.1,
              "currency_code": "INR"
            },
            "total": 3599.1
          },
          {
            "quantity": 3,
            "auto_applied": true,
            "margin": 20,
            "type": "bundle",
            "price": {
              "marked": 3999,
              "effective": 3999,
              "bulk_effective": 3199.2,
              "currency_code": "INR"
            },
            "total": 9597.6
          },
          {
            "quantity": 9,
            "auto_applied": true,
            "margin": 30,
            "type": "bundle",
            "price": {
              "marked": 3999,
              "effective": 3999,
              "bulk_effective": 3443.4444444444,
              "currency_code": "INR"
            },
            "total": 30991,
            "best": true
          }
        ]
      }
    ]
  }
}
```

Offers not found
```json
{
  "value": {
    "data": []
  }
}
```








Unhandled api error


Schema: `Object`









---


#### getAddresses
Fetch Address

```javascript
// Promise
const promise = poscart.getAddresses(uid,mobileNo,checkoutMode,tags,isDefault);

// Async/Await
const data = await poscart.getAddresses(uid,mobileNo,checkoutMode,tags,isDefault);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| uid | integer |  | 
| mobileNo | string |  | 
| checkoutMode | string |  | 
| tags | string |  | 
| isDefault | boolean |  | 

Get all the addresses associated with the account. If successful, returns a Address resource in the response body specified in GetAddressesResponse.attibutes listed below are optional <ul> <li> <font color="monochrome">uid</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>

*Success Response:*



Returns The Address object which has list of all address saved for the account. See example below or refer GetAddressesResponse for details


Schema: `GetAddressesResponse`









---


#### addAddress
Add Address to the account

```javascript
// Promise
const promise = poscart.addAddress(body);

// Async/Await
const data = await poscart.addAddress(body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

<p>Add Address to account. See `Address` in schema of request body for the list of attributes needed to add Address to account. On successful request, returns response containing address_id ,is_default_address and success message.

*Success Response:*



Return Address Id on successfull completion of the request.


Schema: `SaveAddressResponse`









---


#### getAddressById
Fetch Single Address

```javascript
// Promise
const promise = poscart.getAddressById(id,uid,mobileNo,checkoutMode,tags,isDefault);

// Async/Await
const data = await poscart.getAddressById(id,uid,mobileNo,checkoutMode,tags,isDefault);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| id | integer |  | 
| uid | integer |  | 
| mobileNo | string |  | 
| checkoutMode | string |  | 
| tags | string |  | 
| isDefault | boolean |  | 

Get a addresses with the given id. If successful, returns a Address resource in the response body specified in `Address`.attibutes listed below are optional <ul> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>

*Success Response:*



Returns The Address object which has list of all address saved for the account. See example below or refer Address for details


Schema: `Address`









---


#### updateAddress
Update Address alreay added to account

```javascript
// Promise
const promise = poscart.updateAddress(id,body);

// Async/Await
const data = await poscart.updateAddress(id,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| id | integer | Address id | 

Request object containing attributes mentioned in  <font color="blue">Address </font> can be updated .these attributes are :</p> <ul> <li> <font color="monochrome">is_default_address</font></li> <li> <font color="monochrome">landmark</font></li> <li> <font color="monochrome">area</font></li> <li> <font color="monochrome">pincode</font></li> <li> <font color="monochrome">email</font></li> <li> <font color="monochrome">address_type</font></li> <li> <font color="monochrome">name</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">address</font></li> </ul>

*Success Response:*



Response of the Address object containing address_id and sucess message.


Schema: `UpdateAddressResponse`









---


#### removeAddress
Remove Address Associated to the account

```javascript
// Promise
const promise = poscart.removeAddress(id);

// Async/Await
const data = await poscart.removeAddress(id);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| id | integer | Address id | 

Delete a Address by it's address_id. Returns an object that tells whether the address was deleted successfully

*Success Response:*



Status object. Tells whether the operation was successful. See example below or refer DeleteAddressResponse


Schema: `DeleteAddressResponse`









---


#### selectAddress
Select Address from All Addresses

```javascript
// Promise
const promise = poscart.selectAddress(body,uid,i,b);

// Async/Await
const data = await poscart.selectAddress(body,uid,i,b);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| uid | integer |  | 
| i | boolean |  | 
| b | boolean |  | 

<p>Select Address from all addresses associated with the account in order to ship the cart items to .that address,otherwise default address will be selected implicitly. See `SelectCartAddressRequest` in schema of request body for the list of attributes needed to select Address from account. On successful request, returns Cart object response.below are the address attributes which needs to be sent. <ul> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">billing_address_id</font></li> <li> <font color="monochrome">uid</font></li> </ul>

*Success Response:*



Response of the Address object containing Cart Object and success message.  .


Schema: `CartResponse`








Address or Pincode Error


Schema: `Object`


*Examples:*


Address Not Found
```json
{
  "value": {
    "status": "ERROR",
    "message": "ADDRESS_NOT_FOUND"
  }
}
```

Pincode Not Serviciable
```json
{
  "value": {
    "status": "ERROR",
    "message": "PINCODE_NOT_SERVICIABLE"
  }
}
```









---


#### selectPaymentMode
Update Cart Payment

```javascript
// Promise
const promise = poscart.selectPaymentMode(body,uid);

// Async/Await
const data = await poscart.selectPaymentMode(body,uid);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| uid | string |  | 

Update Cart Payment for Your Account

*Success Response:*



Cart response with payment options


Schema: `CartResponse`









---


#### validateCouponForPayment
Get Cart Payment for valid coupon

```javascript
// Promise
const promise = poscart.validateCouponForPayment(uid,addressId,paymentMode,paymentIdentifier,aggregatorName,merchantCode);

// Async/Await
const data = await poscart.validateCouponForPayment(uid,addressId,paymentMode,paymentIdentifier,aggregatorName,merchantCode);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| uid | string |  | 
| addressId | string |  | 
| paymentMode | string |  | 
| paymentIdentifier | string |  | 
| aggregatorName | string |  | 
| merchantCode | string |  | 

Validate coupon for selected payment mode

*Success Response:*



Cart Affiliates.


Schema: `PaymentCouponValidate`









---


#### getShipments
Get delivery date and options before checkout

```javascript
// Promise
const promise = poscart.getShipments(pickAtStoreUid,orderingStoreId,p,uid,addressId,areaCode,orderType);

// Async/Await
const data = await poscart.getShipments(pickAtStoreUid,orderingStoreId,p,uid,addressId,areaCode,orderType);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| pickAtStoreUid | integer |  | 
| orderingStoreId | integer |  | 
| p | boolean | Get payment options or not | 
| uid | integer | Cart id | 
| addressId | integer | Address id | 
| areaCode | string | Destination pincode. | 
| orderType | string | Order type of shipment | 

Shipment break up item wise with delivery date. Actual                      delivery will be during given dates only. Items will be                      delivered in group of shipments created.

*Success Response:*



OK


Schema: `CartShipmentsResponse`


*Examples:*


Shipment Generated
```json
{
  "value": {
    "items": [],
    "cart_id": 7501,
    "uid": "7501",
    "success": true,
    "error_message": "Note: Your order delivery will be delayed by 7-10 Days",
    "payment_options": {
      "payment_option": [
        {
          "name": "COD",
          "display_name": "Cash on Delivery",
          "display_priority": 1,
          "payment_mode_id": 11,
          "logo": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/cod.png",
          "logo_url": {
            "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/cod.png",
            "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/cod.png"
          },
          "list": []
        },
        {
          "name": "CARD",
          "display_priority": 2,
          "payment_mode_id": 2,
          "display_name": "Card",
          "list": []
        },
        {
          "name": "NB",
          "display_priority": 3,
          "payment_mode_id": 3,
          "display_name": "Net Banking",
          "list": [
            {
              "aggregator_name": "Razorpay",
              "bank_name": "ICICI Bank",
              "bank_code": "ICIC",
              "url": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/NB_ICICI.png",
              "logo_url": {
                "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/NB_ICICI.png",
                "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/NB_ICICI.png"
              },
              "merchant_code": "NB_ICICI",
              "display_priority": 1
            }
          ]
        },
        {
          "name": "WL",
          "display_priority": 4,
          "payment_mode_id": 4,
          "display_name": "Wallet",
          "list": [
            {
              "wallet_name": "Paytm",
              "wallet_code": "paytm",
              "wallet_id": 4,
              "merchant_code": "PAYTM",
              "logo_url": {
                "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/paytm_logo_small.png",
                "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/paytm_logo_large.png"
              },
              "aggregator_name": "Juspay",
              "display_priority": 1
            }
          ]
        },
        {
          "name": "UPI",
          "display_priority": 9,
          "payment_mode_id": 6,
          "display_name": "UPI",
          "list": [
            {
              "aggregator_name": "UPI_Razorpay",
              "name": "UPI",
              "display_name": "BHIM UPI",
              "code": "UPI",
              "logo_url": {
                "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/upi_100x78.png",
                "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/upi_150x100.png"
              },
              "merchant_code": "UPI",
              "timeout": 240,
              "retry_count": 0,
              "fynd_vpa": "shopsense.rzp@hdfcbank",
              "intent_flow": true,
              "intent_app_error_list": [
                "com.csam.icici.bank.imobile",
                "in.org.npci.upiapp",
                "com.whatsapp"
              ]
            }
          ]
        },
        {
          "name": "PL",
          "display_priority": 11,
          "payment_mode_id": 1,
          "display_name": "Pay Later",
          "list": [
            {
              "aggregator_name": "Simpl",
              "name": "Simpl",
              "code": "simpl",
              "merchant_code": "SIMPL",
              "logo": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/simpl_logo.png",
              "logo_url": {
                "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/simpl_logo.png",
                "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/simpl_logo.png"
              }
            }
          ]
        }
      ],
      "payment_flows": {
        "Simpl": {
          "data": {
            "gateway": {
              "route": "simpl",
              "entity": "sdk",
              "is_customer_validation_required": true,
              "cust_validation_url": "https://api.addsale.com/gringotts/api/v1/validate-customer/",
              "sdk": {
                "config": {
                  "redirect": false,
                  "callback_url": null,
                  "action_url": "https://api.addsale.com/avis/api/v1/payments/charge-gringotts-transaction/"
                },
                "data": {
                  "user_phone": "8452996729",
                  "user_email": "paymentsdummy@gofynd.com"
                }
              },
              "return_url": null
            }
          },
          "api_link": "",
          "payment_flow": "sdk"
        },
        "Juspay": {
          "data": {},
          "api_link": "https://sandbox.juspay.in/txns",
          "payment_flow": "api"
        },
        "Razorpay": {
          "data": {},
          "api_link": "",
          "payment_flow": "sdk"
        },
        "UPI_Razorpay": {
          "data": {},
          "api_link": "https://api.addsale.com/gringotts/api/v1/external/payment-initialisation/",
          "payment_flow": "api"
        },
        "Fynd": {
          "data": {},
          "api_link": "",
          "payment_flow": "api"
        }
      },
      "default": {}
    },
    "user_type": "Store User",
    "cod_charges": 0,
    "order_id": null,
    "cod_available": true,
    "cod_message": "No additional COD charges applicable",
    "delivery_charges": 0,
    "delivery_charge_order_value": 0,
    "delivery_slots": [
      {
        "date": "Sat, 24 Aug",
        "delivery_slot": [
          {
            "delivery_slot_timing": "By 9:00 PM",
            "default": true,
            "delivery_slot_id": 1
          }
        ]
      }
    ],
    "store_code": "",
    "store_emps": [],
    "breakup_values": {
      "loyalty_points": {
        "total": 0,
        "applicable": 0,
        "is_applied": false,
        "description": "Your cashback, referrals, and refund amount get credited to Fynd Cash which can be redeemed while placing an order."
      },
      "coupon": {
        "type": "cash",
        "code": "",
        "uid": null,
        "value": 0,
        "is_applied": false,
        "message": "Sorry! Invalid Coupon"
      },
      "raw": {
        "cod_charge": 0,
        "convenience_fee": 0,
        "coupon": 0,
        "delivery_charge": 0,
        "discount": 0,
        "fynd_cash": 0,
        "gst_charges": 214.18,
        "mrp_total": 1999,
        "subtotal": 1999,
        "total": 1999,
        "vog": 1784.82,
        "you_saved": 0
      },
      "display": [
        {
          "display": "MRP Total",
          "key": "mrp_total",
          "value": 1999,
          "currency_code": "INR"
        },
        {
          "display": "Subtotal",
          "key": "subtotal",
          "value": 1999,
          "currency_code": "INR"
        },
        {
          "display": "Total",
          "key": "total",
          "value": 1999,
          "currency_code": "INR"
        }
      ]
    },
    "shipments": [
      {
        "fulfillment_id": 3009,
        "shipment_type": "single_shipment",
        "fulfillment_type": "store",
        "dp_id": "29",
        "dp_options": {
          "4": {
            "f_priority": 4,
            "r_priority": 5,
            "is_cod": true,
            "is_prepaid": true,
            "is_reverse": true
          },
          "7": {
            "f_priority": 3,
            "r_priority": 4,
            "is_cod": true,
            "is_prepaid": true,
            "is_reverse": true
          },
          "29": {
            "f_priority": 1,
            "r_priority": 2,
            "is_cod": true,
            "is_prepaid": true,
            "is_reverse": true
          }
        },
        "promise": {
          "timestamp": {
            "min": 1566678108,
            "max": 1567023708
          },
          "formatted": {
            "min": "Aug 24",
            "max": "Aug 28"
          }
        },
        "box_type": "Small Courier bag",
        "shipments": 1,
        "items": [
          {
            "quantity": 1,
            "product": {
              "type": "product",
              "uid": 820312,
              "name": "Navy Blue Melange Shorts",
              "slug": "883-police-navy-blue-melange-shorts-820312-4943a8",
              "brand": {
                "uid": 610,
                "name": "883 Police"
              },
              "categories": [
                {
                  "uid": 193,
                  "name": "Shorts"
                }
              ],
              "images": [
                {
                  "aspect_ratio": "16:25",
                  "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/610_SPIRAL19ANAVY/1_1549105947281.jpg",
                  "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/610_SPIRAL19ANAVY/1_1549105947281.jpg"
                }
              ],
              "action": {
                "type": "product",
                "url": "https://api.addsale.com/platform/content/v1/products/883-police-navy-blue-melange-shorts-820312-4943a8/",
                "query": {
                  "product_slug": [
                    "883-police-navy-blue-melange-shorts-820312-4943a8"
                  ]
                }
              }
            },
            "discount": "",
            "bulk_offer": {},
            "key": "820312_L",
            "price": {
              "base": {
                "add_on": 1999,
                "marked": 1999,
                "effective": 1999,
                "selling": 1999,
                "currency_code": "INR"
              },
              "converted": {
                "add_on": 1999,
                "marked": 1999,
                "effective": 1999,
                "selling": 1999,
                "currency_code": "INR"
              }
            },
            "article": {
              "type": "article",
              "uid": "381_610_IGPL01_SPIRAL19ANAVY_L",
              "size": "L",
              "seller": {
                "uid": 381,
                "name": "INTERSOURCE GARMENTS PVT LTD"
              },
              "store": {
                "uid": 3009,
                "name": "Kormangala"
              },
              "quantity": 2,
              "price": {
                "base": {
                  "marked": 1999,
                  "effective": 1999,
                  "currency_code": "INR"
                },
                "converted": {
                  "marked": 1999,
                  "effective": 1999,
                  "currency_code": "INR"
                }
              }
            },
            "availability": {
              "sizes": [
                "L",
                "XL",
                "XXL"
              ],
              "other_store_quantity": 1,
              "out_of_stock": false,
              "deliverable": true,
              "is_valid": true
            },
            "coupon_message": "",
            "message": ""
          }
        ]
      }
    ],
    "delivery_charge_info": "",
    "coupon_text": "View all offers",
    "gstin": null,
    "checkout_mode": "self",
    "last_modified": "Thu, 22 Aug 2019 20:21:48 GMT",
    "restrict_checkout": false,
    "is_valid": true
  }
}
```

Shipment Generation Failed
```json
{
  "value": {
    "items": [],
    "cart_id": 7501,
    "uid": "7501",
    "success": true,
    "error_message": "Note: Your order delivery will be delayed by 7-10 Days",
    "payment_options": {
      "payment_option": [
        {
          "name": "COD",
          "display_name": "Cash on Delivery",
          "display_priority": 1,
          "payment_mode_id": 11,
          "logo": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/cod.png",
          "logo_url": {
            "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/cod.png",
            "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/cod.png"
          },
          "list": []
        },
        {
          "name": "CARD",
          "display_priority": 2,
          "payment_mode_id": 2,
          "display_name": "Card",
          "list": []
        },
        {
          "name": "NB",
          "display_priority": 3,
          "payment_mode_id": 3,
          "display_name": "Net Banking",
          "list": [
            {
              "aggregator_name": "Razorpay",
              "bank_name": "ICICI Bank",
              "bank_code": "ICIC",
              "url": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/NB_ICICI.png",
              "logo_url": {
                "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/NB_ICICI.png",
                "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/NB_ICICI.png"
              },
              "merchant_code": "NB_ICICI",
              "display_priority": 1
            }
          ]
        },
        {
          "name": "WL",
          "display_priority": 4,
          "payment_mode_id": 4,
          "display_name": "Wallet",
          "list": [
            {
              "wallet_name": "Paytm",
              "wallet_code": "paytm",
              "wallet_id": 4,
              "merchant_code": "PAYTM",
              "logo_url": {
                "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/paytm_logo_small.png",
                "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/paytm_logo_large.png"
              },
              "aggregator_name": "Juspay",
              "display_priority": 1
            }
          ]
        },
        {
          "name": "UPI",
          "display_priority": 9,
          "payment_mode_id": 6,
          "display_name": "UPI",
          "list": [
            {
              "aggregator_name": "UPI_Razorpay",
              "name": "UPI",
              "display_name": "BHIM UPI",
              "code": "UPI",
              "logo_url": {
                "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/upi_100x78.png",
                "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/upi_150x100.png"
              },
              "merchant_code": "UPI",
              "timeout": 240,
              "retry_count": 0,
              "fynd_vpa": "shopsense.rzp@hdfcbank",
              "intent_flow": true,
              "intent_app_error_list": [
                "com.csam.icici.bank.imobile",
                "in.org.npci.upiapp",
                "com.whatsapp"
              ]
            }
          ]
        },
        {
          "name": "PL",
          "display_priority": 11,
          "payment_mode_id": 1,
          "display_name": "Pay Later",
          "list": [
            {
              "aggregator_name": "Simpl",
              "name": "Simpl",
              "code": "simpl",
              "merchant_code": "SIMPL",
              "logo": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/simpl_logo.png",
              "logo_url": {
                "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/simpl_logo.png",
                "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/simpl_logo.png"
              }
            }
          ]
        }
      ],
      "payment_flows": {
        "Simpl": {
          "data": {
            "gateway": {
              "route": "simpl",
              "entity": "sdk",
              "is_customer_validation_required": true,
              "cust_validation_url": "https://api.addsale.com/gringotts/api/v1/validate-customer/",
              "sdk": {
                "config": {
                  "redirect": false,
                  "callback_url": null,
                  "action_url": "https://api.addsale.com/avis/api/v1/payments/charge-gringotts-transaction/"
                },
                "data": {
                  "user_phone": "8452996729",
                  "user_email": "paymentsdummy@gofynd.com"
                }
              },
              "return_url": null
            }
          },
          "api_link": "",
          "payment_flow": "sdk"
        },
        "Juspay": {
          "data": {},
          "api_link": "https://sandbox.juspay.in/txns",
          "payment_flow": "api"
        },
        "Razorpay": {
          "data": {},
          "api_link": "",
          "payment_flow": "sdk"
        },
        "UPI_Razorpay": {
          "data": {},
          "api_link": "https://api.addsale.com/gringotts/api/v1/external/payment-initialisation/",
          "payment_flow": "api"
        },
        "Fynd": {
          "data": {},
          "api_link": "",
          "payment_flow": "api"
        }
      },
      "default": {}
    },
    "user_type": "Store User",
    "cod_charges": 0,
    "order_id": null,
    "cod_available": true,
    "cod_message": "No additional COD charges applicable",
    "delivery_charges": 0,
    "delivery_charge_order_value": 0,
    "delivery_slots": [
      {
        "date": "Sat, 24 Aug",
        "delivery_slot": [
          {
            "delivery_slot_timing": "By 9:00 PM",
            "default": true,
            "delivery_slot_id": 1
          }
        ]
      }
    ],
    "store_code": "",
    "store_emps": [],
    "breakup_values": {
      "loyalty_points": {
        "total": 0,
        "applicable": 0,
        "is_applied": false,
        "description": "Your cashback, referrals, and refund amount get credited to Fynd Cash which can be redeemed while placing an order."
      },
      "coupon": {
        "type": "cash",
        "code": "",
        "uid": null,
        "value": 0,
        "is_applied": false,
        "message": "Sorry! Invalid Coupon"
      },
      "raw": {
        "cod_charge": 0,
        "convenience_fee": 0,
        "coupon": 0,
        "delivery_charge": 0,
        "discount": 0,
        "fynd_cash": 0,
        "gst_charges": 214.18,
        "mrp_total": 1999,
        "subtotal": 1999,
        "total": 1999,
        "vog": 1784.82,
        "you_saved": 0
      },
      "display": [
        {
          "display": "MRP Total",
          "key": "mrp_total",
          "value": 1999,
          "currency_code": "INR"
        },
        {
          "display": "Subtotal",
          "key": "subtotal",
          "value": 1999,
          "currency_code": "INR"
        },
        {
          "display": "Total",
          "key": "total",
          "value": 1999,
          "currency_code": "INR"
        }
      ]
    },
    "shipments": [],
    "message": "Shipments could not be generated. Please Try again after some time.",
    "delivery_charge_info": "",
    "coupon_text": "View all offers",
    "gstin": null,
    "checkout_mode": "self",
    "last_modified": "Thu, 22 Aug 2019 20:21:48 GMT",
    "restrict_checkout": false,
    "is_valid": false
  }
}
```








Unhandled api error


Schema: `Object`









---


#### updateShipments
Update shipment delivery type and quantity before checkout

```javascript
// Promise
const promise = poscart.updateShipments(body,i,p,uid,addressId,orderType);

// Async/Await
const data = await poscart.updateShipments(body,i,p,uid,addressId,orderType);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| i | boolean | Get items or not | 
| p | boolean | Get payment options or not | 
| uid | integer | Cart id | 
| addressId | integer | Address id | 
| orderType | string | Order is hand over or home delivery | 

Shipment break up item wise with delivery date. Actual                      delivery will be during given dates only. Items will be                      delivered in group of shipments created. Update the shipment                      type and quantity as per customer preference for store pick up or home delivery

*Success Response:*



OK


Schema: `CartShipmentsResponse`


*Examples:*


Shipment Generated
```json
{
  "value": {
    "items": [],
    "cart_id": 7501,
    "uid": "7501",
    "success": true,
    "error_message": "Note: Your order delivery will be delayed by 7-10 Days",
    "payment_options": {
      "payment_option": [
        {
          "name": "COD",
          "display_name": "Cash on Delivery",
          "display_priority": 1,
          "payment_mode_id": 11,
          "logo": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/cod.png",
          "logo_url": {
            "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/cod.png",
            "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/cod.png"
          },
          "list": []
        },
        {
          "name": "CARD",
          "display_priority": 2,
          "payment_mode_id": 2,
          "display_name": "Card",
          "list": []
        },
        {
          "name": "NB",
          "display_priority": 3,
          "payment_mode_id": 3,
          "display_name": "Net Banking",
          "list": [
            {
              "aggregator_name": "Razorpay",
              "bank_name": "ICICI Bank",
              "bank_code": "ICIC",
              "url": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/NB_ICICI.png",
              "logo_url": {
                "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/NB_ICICI.png",
                "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/NB_ICICI.png"
              },
              "merchant_code": "NB_ICICI",
              "display_priority": 1
            }
          ]
        },
        {
          "name": "WL",
          "display_priority": 4,
          "payment_mode_id": 4,
          "display_name": "Wallet",
          "list": [
            {
              "wallet_name": "Paytm",
              "wallet_code": "paytm",
              "wallet_id": 4,
              "merchant_code": "PAYTM",
              "logo_url": {
                "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/paytm_logo_small.png",
                "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/paytm_logo_large.png"
              },
              "aggregator_name": "Juspay",
              "display_priority": 1
            }
          ]
        },
        {
          "name": "UPI",
          "display_priority": 9,
          "payment_mode_id": 6,
          "display_name": "UPI",
          "list": [
            {
              "aggregator_name": "UPI_Razorpay",
              "name": "UPI",
              "display_name": "BHIM UPI",
              "code": "UPI",
              "logo_url": {
                "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/upi_100x78.png",
                "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/upi_150x100.png"
              },
              "merchant_code": "UPI",
              "timeout": 240,
              "retry_count": 0,
              "fynd_vpa": "shopsense.rzp@hdfcbank",
              "intent_flow": true,
              "intent_app_error_list": [
                "com.csam.icici.bank.imobile",
                "in.org.npci.upiapp",
                "com.whatsapp"
              ]
            }
          ]
        },
        {
          "name": "PL",
          "display_priority": 11,
          "payment_mode_id": 1,
          "display_name": "Pay Later",
          "list": [
            {
              "aggregator_name": "Simpl",
              "name": "Simpl",
              "code": "simpl",
              "merchant_code": "SIMPL",
              "logo": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/simpl_logo.png",
              "logo_url": {
                "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/simpl_logo.png",
                "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/simpl_logo.png"
              }
            }
          ]
        }
      ],
      "payment_flows": {
        "Simpl": {
          "data": {
            "gateway": {
              "route": "simpl",
              "entity": "sdk",
              "is_customer_validation_required": true,
              "cust_validation_url": "https://api.addsale.com/gringotts/api/v1/validate-customer/",
              "sdk": {
                "config": {
                  "redirect": false,
                  "callback_url": null,
                  "action_url": "https://api.addsale.com/avis/api/v1/payments/charge-gringotts-transaction/"
                },
                "data": {
                  "user_phone": "8452996729",
                  "user_email": "paymentsdummy@gofynd.com"
                }
              },
              "return_url": null
            }
          },
          "api_link": "",
          "payment_flow": "sdk"
        },
        "Juspay": {
          "data": {},
          "api_link": "https://sandbox.juspay.in/txns",
          "payment_flow": "api"
        },
        "Razorpay": {
          "data": {},
          "api_link": "",
          "payment_flow": "sdk"
        },
        "UPI_Razorpay": {
          "data": {},
          "api_link": "https://api.addsale.com/gringotts/api/v1/external/payment-initialisation/",
          "payment_flow": "api"
        },
        "Fynd": {
          "data": {},
          "api_link": "",
          "payment_flow": "api"
        }
      },
      "default": {}
    },
    "user_type": "Store User",
    "cod_charges": 0,
    "order_id": null,
    "cod_available": true,
    "cod_message": "No additional COD charges applicable",
    "delivery_charges": 0,
    "delivery_charge_order_value": 0,
    "delivery_slots": [
      {
        "date": "Sat, 24 Aug",
        "delivery_slot": [
          {
            "delivery_slot_timing": "By 9:00 PM",
            "default": true,
            "delivery_slot_id": 1
          }
        ]
      }
    ],
    "store_code": "",
    "store_emps": [],
    "breakup_values": {
      "loyalty_points": {
        "total": 0,
        "applicable": 0,
        "is_applied": false,
        "description": "Your cashback, referrals, and refund amount get credited to Fynd Cash which can be redeemed while placing an order."
      },
      "coupon": {
        "type": "cash",
        "code": "",
        "uid": null,
        "value": 0,
        "is_applied": false,
        "message": "Sorry! Invalid Coupon"
      },
      "raw": {
        "cod_charge": 0,
        "convenience_fee": 0,
        "coupon": 0,
        "delivery_charge": 0,
        "discount": 0,
        "fynd_cash": 0,
        "gst_charges": 214.18,
        "mrp_total": 1999,
        "subtotal": 1999,
        "total": 1999,
        "vog": 1784.82,
        "you_saved": 0
      },
      "display": [
        {
          "display": "MRP Total",
          "key": "mrp_total",
          "value": 1999,
          "currency_code": "INR"
        },
        {
          "display": "Subtotal",
          "key": "subtotal",
          "value": 1999,
          "currency_code": "INR"
        },
        {
          "display": "Total",
          "key": "total",
          "value": 1999,
          "currency_code": "INR"
        }
      ]
    },
    "shipments": [
      {
        "fulfillment_id": 3009,
        "shipment_type": "single_shipment",
        "fulfillment_type": "store",
        "dp_id": "29",
        "order_type": "PickAtStore",
        "dp_options": {
          "4": {
            "f_priority": 4,
            "r_priority": 5,
            "is_cod": true,
            "is_prepaid": true,
            "is_reverse": true
          },
          "7": {
            "f_priority": 3,
            "r_priority": 4,
            "is_cod": true,
            "is_prepaid": true,
            "is_reverse": true
          },
          "29": {
            "f_priority": 1,
            "r_priority": 2,
            "is_cod": true,
            "is_prepaid": true,
            "is_reverse": true
          }
        },
        "promise": {
          "timestamp": {
            "min": 1566678108,
            "max": 1567023708
          },
          "formatted": {
            "min": "Aug 24",
            "max": "Aug 28"
          }
        },
        "box_type": "Small Courier bag",
        "shipments": 1,
        "items": [
          {
            "quantity": 1,
            "product": {
              "type": "product",
              "uid": 820312,
              "name": "Navy Blue Melange Shorts",
              "slug": "883-police-navy-blue-melange-shorts-820312-4943a8",
              "brand": {
                "uid": 610,
                "name": "883 Police"
              },
              "categories": [
                {
                  "uid": 193,
                  "name": "Shorts"
                }
              ],
              "images": [
                {
                  "aspect_ratio": "16:25",
                  "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/610_SPIRAL19ANAVY/1_1549105947281.jpg",
                  "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/610_SPIRAL19ANAVY/1_1549105947281.jpg"
                }
              ],
              "action": {
                "type": "product",
                "url": "https://api.addsale.com/platform/content/v1/products/883-police-navy-blue-melange-shorts-820312-4943a8/",
                "query": {
                  "product_slug": [
                    "883-police-navy-blue-melange-shorts-820312-4943a8"
                  ]
                }
              }
            },
            "discount": "",
            "bulk_offer": {},
            "key": "820312_L",
            "price": {
              "base": {
                "add_on": 1999,
                "marked": 1999,
                "effective": 1999,
                "selling": 1999,
                "currency_code": "INR"
              },
              "converted": {
                "add_on": 1999,
                "marked": 1999,
                "effective": 1999,
                "selling": 1999,
                "currency_code": "INR"
              }
            },
            "article": {
              "type": "article",
              "uid": "381_610_IGPL01_SPIRAL19ANAVY_L",
              "size": "L",
              "seller": {
                "uid": 381,
                "name": "INTERSOURCE GARMENTS PVT LTD"
              },
              "store": {
                "uid": 3009,
                "name": "Kormangala"
              },
              "quantity": 2,
              "price": {
                "base": {
                  "marked": 1999,
                  "effective": 1999,
                  "currency_code": "INR"
                },
                "converted": {
                  "marked": 1999,
                  "effective": 1999,
                  "currency_code": "INR"
                }
              }
            },
            "availability": {
              "sizes": [
                "L",
                "XL",
                "XXL"
              ],
              "other_store_quantity": 1,
              "out_of_stock": false,
              "deliverable": true,
              "is_valid": true
            },
            "coupon_message": "",
            "message": ""
          }
        ]
      }
    ],
    "delivery_charge_info": "",
    "coupon_text": "View all offers",
    "gstin": null,
    "checkout_mode": "self",
    "last_modified": "Thu, 22 Aug 2019 20:21:48 GMT",
    "restrict_checkout": false,
    "is_valid": true
  }
}
```

Shipment Generation Failed
```json
{
  "value": {
    "items": [],
    "cart_id": 7501,
    "uid": "7501",
    "success": true,
    "error_message": "Note: Your order delivery will be delayed by 7-10 Days",
    "payment_options": {
      "payment_option": [
        {
          "name": "COD",
          "display_name": "Cash on Delivery",
          "display_priority": 1,
          "payment_mode_id": 11,
          "logo": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/cod.png",
          "logo_url": {
            "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/cod.png",
            "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/cod.png"
          },
          "list": []
        },
        {
          "name": "CARD",
          "display_priority": 2,
          "payment_mode_id": 2,
          "display_name": "Card",
          "list": []
        },
        {
          "name": "NB",
          "display_priority": 3,
          "payment_mode_id": 3,
          "display_name": "Net Banking",
          "list": [
            {
              "aggregator_name": "Razorpay",
              "bank_name": "ICICI Bank",
              "bank_code": "ICIC",
              "url": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/NB_ICICI.png",
              "logo_url": {
                "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/NB_ICICI.png",
                "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/NB_ICICI.png"
              },
              "merchant_code": "NB_ICICI",
              "display_priority": 1
            }
          ]
        },
        {
          "name": "WL",
          "display_priority": 4,
          "payment_mode_id": 4,
          "display_name": "Wallet",
          "list": [
            {
              "wallet_name": "Paytm",
              "wallet_code": "paytm",
              "wallet_id": 4,
              "merchant_code": "PAYTM",
              "logo_url": {
                "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/paytm_logo_small.png",
                "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/paytm_logo_large.png"
              },
              "aggregator_name": "Juspay",
              "display_priority": 1
            }
          ]
        },
        {
          "name": "UPI",
          "display_priority": 9,
          "payment_mode_id": 6,
          "display_name": "UPI",
          "list": [
            {
              "aggregator_name": "UPI_Razorpay",
              "name": "UPI",
              "display_name": "BHIM UPI",
              "code": "UPI",
              "logo_url": {
                "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/upi_100x78.png",
                "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/upi_150x100.png"
              },
              "merchant_code": "UPI",
              "timeout": 240,
              "retry_count": 0,
              "fynd_vpa": "shopsense.rzp@hdfcbank",
              "intent_flow": true,
              "intent_app_error_list": [
                "com.csam.icici.bank.imobile",
                "in.org.npci.upiapp",
                "com.whatsapp"
              ]
            }
          ]
        },
        {
          "name": "PL",
          "display_priority": 11,
          "payment_mode_id": 1,
          "display_name": "Pay Later",
          "list": [
            {
              "aggregator_name": "Simpl",
              "name": "Simpl",
              "code": "simpl",
              "merchant_code": "SIMPL",
              "logo": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/simpl_logo.png",
              "logo_url": {
                "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/simpl_logo.png",
                "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/simpl_logo.png"
              }
            }
          ]
        }
      ],
      "payment_flows": {
        "Simpl": {
          "data": {
            "gateway": {
              "route": "simpl",
              "entity": "sdk",
              "is_customer_validation_required": true,
              "cust_validation_url": "https://api.addsale.com/gringotts/api/v1/validate-customer/",
              "sdk": {
                "config": {
                  "redirect": false,
                  "callback_url": null,
                  "action_url": "https://api.addsale.com/avis/api/v1/payments/charge-gringotts-transaction/"
                },
                "data": {
                  "user_phone": "8452996729",
                  "user_email": "paymentsdummy@gofynd.com"
                }
              },
              "return_url": null
            }
          },
          "api_link": "",
          "payment_flow": "sdk"
        },
        "Juspay": {
          "data": {},
          "api_link": "https://sandbox.juspay.in/txns",
          "payment_flow": "api"
        },
        "Razorpay": {
          "data": {},
          "api_link": "",
          "payment_flow": "sdk"
        },
        "UPI_Razorpay": {
          "data": {},
          "api_link": "https://api.addsale.com/gringotts/api/v1/external/payment-initialisation/",
          "payment_flow": "api"
        },
        "Fynd": {
          "data": {},
          "api_link": "",
          "payment_flow": "api"
        }
      },
      "default": {}
    },
    "user_type": "Store User",
    "cod_charges": 0,
    "order_id": null,
    "cod_available": true,
    "cod_message": "No additional COD charges applicable",
    "delivery_charges": 0,
    "delivery_charge_order_value": 0,
    "delivery_slots": [
      {
        "date": "Sat, 24 Aug",
        "delivery_slot": [
          {
            "delivery_slot_timing": "By 9:00 PM",
            "default": true,
            "delivery_slot_id": 1
          }
        ]
      }
    ],
    "store_code": "",
    "store_emps": [],
    "breakup_values": {
      "loyalty_points": {
        "total": 0,
        "applicable": 0,
        "is_applied": false,
        "description": "Your cashback, referrals, and refund amount get credited to Fynd Cash which can be redeemed while placing an order."
      },
      "coupon": {
        "type": "cash",
        "code": "",
        "uid": null,
        "value": 0,
        "is_applied": false,
        "message": "Sorry! Invalid Coupon"
      },
      "raw": {
        "cod_charge": 0,
        "convenience_fee": 0,
        "coupon": 0,
        "delivery_charge": 0,
        "discount": 0,
        "fynd_cash": 0,
        "gst_charges": 214.18,
        "mrp_total": 1999,
        "subtotal": 1999,
        "total": 1999,
        "vog": 1784.82,
        "you_saved": 0
      },
      "display": [
        {
          "display": "MRP Total",
          "key": "mrp_total",
          "value": 1999,
          "currency_code": "INR"
        },
        {
          "display": "Subtotal",
          "key": "subtotal",
          "value": 1999,
          "currency_code": "INR"
        },
        {
          "display": "Total",
          "key": "total",
          "value": 1999,
          "currency_code": "INR"
        }
      ]
    },
    "shipments": [],
    "message": "Shipments could not be generated. Please Try again after some time.",
    "delivery_charge_info": "",
    "coupon_text": "View all offers",
    "gstin": null,
    "checkout_mode": "self",
    "last_modified": "Thu, 22 Aug 2019 20:21:48 GMT",
    "restrict_checkout": false,
    "is_valid": false
  }
}
```








Unhandled api error


Schema: `Object`









---


#### checkoutCart
Checkout Cart

```javascript
// Promise
const promise = poscart.checkoutCart(body,uid);

// Async/Await
const data = await poscart.checkoutCart(body,uid);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| uid | integer |  | 

Checkout all items in cart to payment and order generation.                        For COD only order will be generated while for other checkout mode                        user will be redirected to payment gateway

*Success Response:*



OK


Schema: `CartCheckoutResponse`


*Examples:*


Address id not found
```json
{
  "value": {
    "success": false,
    "message": "No address found with address id {address_id}"
  }
}
```

Missing address_id
```json
{
  "value": {
    "address_id": [
      "Missing data for required field."
    ]
  }
}
```

Successful checkout cod payment
```json
{
  "value": {
    "success": true,
    "cart": {
      "success": true,
      "error_message": "Note: Your order delivery will be delayed by 7-10 Days",
      "payment_options": {
        "payment_option": [
          {
            "name": "COD",
            "display_name": "Cash on Delivery",
            "display_priority": 1,
            "payment_mode_id": 11,
            "logo": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/cod.png",
            "logo_url": {
              "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/cod.png",
              "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/cod.png"
            },
            "list": []
          },
          {
            "name": "CARD",
            "display_priority": 2,
            "payment_mode_id": 2,
            "display_name": "Card",
            "list": []
          },
          {
            "name": "NB",
            "display_priority": 3,
            "payment_mode_id": 3,
            "display_name": "Net Banking",
            "list": [
              {
                "aggregator_name": "Razorpay",
                "bank_name": "ICICI Bank",
                "bank_code": "ICIC",
                "url": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/NB_ICICI.png",
                "logo_url": {
                  "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/NB_ICICI.png",
                  "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/NB_ICICI.png"
                },
                "merchant_code": "NB_ICICI",
                "display_priority": 1
              }
            ]
          },
          {
            "name": "WL",
            "display_priority": 4,
            "payment_mode_id": 4,
            "display_name": "Wallet",
            "list": [
              {
                "wallet_name": "Paytm",
                "wallet_code": "paytm",
                "wallet_id": 4,
                "merchant_code": "PAYTM",
                "logo_url": {
                  "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/paytm_logo_small.png",
                  "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/paytm_logo_large.png"
                },
                "aggregator_name": "Juspay",
                "display_priority": 1
              }
            ]
          },
          {
            "name": "UPI",
            "display_priority": 9,
            "payment_mode_id": 6,
            "display_name": "UPI",
            "list": [
              {
                "aggregator_name": "UPI_Razorpay",
                "name": "UPI",
                "display_name": "BHIM UPI",
                "code": "UPI",
                "logo_url": {
                  "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/upi_100x78.png",
                  "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/upi_150x100.png"
                },
                "merchant_code": "UPI",
                "timeout": 240,
                "retry_count": 0,
                "fynd_vpa": "shopsense.rzp@hdfcbank",
                "intent_flow": true,
                "intent_app_error_list": [
                  "com.csam.icici.bank.imobile",
                  "in.org.npci.upiapp",
                  "com.whatsapp"
                ]
              }
            ]
          },
          {
            "name": "PL",
            "display_priority": 11,
            "payment_mode_id": 1,
            "display_name": "Pay Later",
            "list": [
              {
                "aggregator_name": "Simpl",
                "name": "Simpl",
                "code": "simpl",
                "merchant_code": "SIMPL",
                "logo": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/simpl_logo.png",
                "logo_url": {
                  "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/simpl_logo.png",
                  "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/simpl_logo.png"
                }
              }
            ]
          }
        ],
        "payment_flows": {
          "Simpl": {
            "data": {
              "gateway": {
                "route": "simpl",
                "entity": "sdk",
                "is_customer_validation_required": true,
                "cust_validation_url": "https://api.addsale.com/gringotts/api/v1/validate-customer/",
                "sdk": {
                  "config": {
                    "redirect": false,
                    "callback_url": null,
                    "action_url": "https://api.addsale.com/avis/api/v1/payments/charge-gringotts-transaction/"
                  },
                  "data": {
                    "user_phone": "8452996729",
                    "user_email": "paymentsdummy@gofynd.com"
                  }
                },
                "return_url": null
              }
            },
            "api_link": "",
            "payment_flow": "sdk"
          },
          "Juspay": {
            "data": {},
            "api_link": "https://sandbox.juspay.in/txns",
            "payment_flow": "api"
          },
          "Razorpay": {
            "data": {},
            "api_link": "",
            "payment_flow": "sdk"
          },
          "UPI_Razorpay": {
            "data": {},
            "api_link": "https://api.addsale.com/gringotts/api/v1/external/payment-initialisation/",
            "payment_flow": "api"
          },
          "Fynd": {
            "data": {},
            "api_link": "",
            "payment_flow": "api"
          }
        },
        "default": {}
      },
      "user_type": "Store User",
      "cod_charges": 0,
      "order_id": "FY5D5E215CF287584CE6",
      "cod_available": true,
      "cod_message": "No additional COD charges applicable",
      "delivery_charges": 0,
      "delivery_charge_order_value": 0,
      "delivery_slots": [
        {
          "date": "Sat, 24 Aug",
          "delivery_slot": [
            {
              "delivery_slot_timing": "By 9:00 PM",
              "default": true,
              "delivery_slot_id": 1
            }
          ]
        }
      ],
      "store_code": "",
      "store_emps": [],
      "breakup_values": {
        "coupon": {
          "type": "cash",
          "code": "",
          "uid": null,
          "value": 0,
          "is_applied": false,
          "message": "Sorry! Invalid Coupon"
        },
        "loyalty_points": {
          "total": 0,
          "applicable": 0,
          "is_applied": false,
          "description": "Your cashback, referrals, and refund amount get credited to Fynd Cash which can be redeemed while placing an order."
        },
        "raw": {
          "cod_charge": 0,
          "convenience_fee": 0,
          "coupon": 0,
          "delivery_charge": 0,
          "discount": 0,
          "fynd_cash": 0,
          "gst_charges": 214.18,
          "mrp_total": 1999,
          "subtotal": 1999,
          "total": 1999,
          "vog": 1784.82,
          "you_saved": 0
        },
        "display": [
          {
            "display": "MRP Total",
            "key": "mrp_total",
            "value": 1999,
            "currency_code": "INR"
          },
          {
            "display": "Subtotal",
            "key": "subtotal",
            "value": 1999,
            "currency_code": "INR"
          },
          {
            "display": "Total",
            "key": "total",
            "value": 1999,
            "currency_code": "INR"
          }
        ]
      },
      "items": [
        {
          "key": "820312_L",
          "message": "",
          "bulk_offer": {},
          "price": {
            "base": {
              "add_on": 1999,
              "marked": 1999,
              "effective": 1999,
              "selling": 1999,
              "currency_code": "INR"
            },
            "converted": {
              "add_on": 1999,
              "marked": 1999,
              "effective": 1999,
              "selling": 1999,
              "currency_code": "INR"
            }
          },
          "quantity": 1,
          "discount": "",
          "product": {
            "type": "product",
            "uid": 820312,
            "name": "Navy Blue Melange Shorts",
            "slug": "883-police-navy-blue-melange-shorts-820312-4943a8",
            "brand": {
              "uid": 610,
              "name": "883 Police"
            },
            "categories": [
              {
                "uid": 193,
                "name": "Shorts"
              }
            ],
            "images": [
              {
                "aspect_ratio": "16:25",
                "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/610_SPIRAL19ANAVY/1_1549105947281.jpg",
                "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/610_SPIRAL19ANAVY/1_1549105947281.jpg"
              }
            ],
            "action": {
              "type": "product",
              "url": "https://api.addsale.com/platform/content/v1/products/883-police-navy-blue-melange-shorts-820312-4943a8/",
              "query": {
                "product_slug": [
                  "883-police-navy-blue-melange-shorts-820312-4943a8"
                ]
              }
            }
          },
          "article": {
            "type": "article",
            "uid": "381_610_IGPL01_SPIRAL19ANAVY_L",
            "size": "L",
            "seller": {
              "uid": 381,
              "name": "INTERSOURCE GARMENTS PVT LTD"
            },
            "store": {
              "uid": 3009,
              "name": "Kormangala"
            },
            "quantity": 2,
            "price": {
              "base": {
                "marked": 1999,
                "effective": 1999,
                "currency_code": "INR"
              },
              "converted": {
                "marked": 1999,
                "effective": 1999,
                "currency_code": "INR"
              }
            }
          },
          "coupon_message": "",
          "availability": {
            "sizes": [
              "L",
              "XL",
              "XXL"
            ],
            "other_store_quantity": 1,
            "out_of_stock": false,
            "deliverable": true,
            "is_valid": true
          }
        }
      ],
      "delivery_charge_info": "",
      "coupon_text": "View all offers",
      "cart_id": 7483,
      "uid": "7483",
      "gstin": null,
      "checkout_mode": "self",
      "last_modified": "Thu, 22 Aug 2019 04:58:44 GMT",
      "restrict_checkout": false,
      "is_valid": true
    },
    "callback_url": "https://api.addsale.com/gringotts/api/v1/external/payment-callback/",
    "app_intercept_url": "http://uniket-testing.addsale.link/cart/order-status",
    "message": "",
    "data": {
      "order_id": "FY5D5E215CF287584CE6"
    },
    "order_id": "FY5D5E215CF287584CE6"
  }
}
```









---


#### updateCartMeta
Update Cart Meta

```javascript
// Promise
const promise = poscart.updateCartMeta(body,uid);

// Async/Await
const data = await poscart.updateCartMeta(body,uid);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| uid | integer | Cart id received in get cart. | 

Update cart meta like checkout_mode, gstin.

*Success Response:*



Cart meta updated successfully


Schema: `CartMetaResponse`








Missing required Field


Schema: `CartMetaMissingResponse`









---


#### getAvailableDeliveryModes
Get available delivery modes for cart

```javascript
// Promise
const promise = poscart.getAvailableDeliveryModes(areaCode,uid);

// Async/Await
const data = await poscart.getAvailableDeliveryModes(areaCode,uid);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| areaCode | string |  | 
| uid | integer |  | 

Get available delivery modes for cart and pick up store uid list. From given pick stores list user can pick up delivery. Use this uid to show store address

*Success Response:*



Returns Available delivery modes for cart and pick up available store uid for current cart items


Schema: `CartDeliveryModesResponse`









---


#### getStoreAddressByUid
Get list of stores for give uids

```javascript
// Promise
const promise = poscart.getStoreAddressByUid(storeUid);

// Async/Await
const data = await poscart.getStoreAddressByUid(storeUid);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| storeUid | integer |  | 

Get list of stores by providing pick up available store uids.

*Success Response:*



Returns available store information with its address


Schema: `StoreDetailsResponse`









---


#### getCartShareLink
Generate Cart sharing link token

```javascript
// Promise
const promise = poscart.getCartShareLink(body);

// Async/Await
const data = await poscart.getCartShareLink(body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Generates shared cart snapshot and returns shortlink token

*Success Response:*



Token Generated successfully


Schema: `GetShareCartLinkResponse`


*Examples:*


Token Generated
```json
{
  "value": {
    "token": "ZweG1XyX",
    "share_url": "https://uniket-testing.addsale.link/shared-cart/ZweG1XyX"
  }
}
```









---


#### getCartSharedItems
Get shared cart snapshot and cart response

```javascript
// Promise
const promise = poscart.getCartSharedItems(token);

// Async/Await
const data = await poscart.getCartSharedItems(token);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| token | string | Shared short link token. | 

Returns shared cart response for sent token with `shared_cart_details`                    containing shared cart details in response.

*Success Response:*



Cart for valid token


Schema: `SharedCartResponse`








No cart found for sent token


Schema: `SharedCartResponse`









---


#### updateCartWithSharedItems
Merge or Replace existing cart

```javascript
// Promise
const promise = poscart.updateCartWithSharedItems(token,action);

// Async/Await
const data = await poscart.updateCartWithSharedItems(token,action);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| token | string | Shared short link token. | 
| action | string | Operation to perform on existing cart, whether to merge or replace. | 

Merge or Replace cart based on `action` parameter with shared cart of `token`

*Success Response:*



Success of Merge or Replace of cart with `shared_cart_details`                    containing shared cart details in response


Schema: `SharedCartResponse`


*Examples:*


Cart Merged/Replaced
```json
{
  "value": {
    "cart": {
      "shared_cart_details": {
        "token": "BQ9jySQ9",
        "user": {
          "user_id": "23109086",
          "is_anonymous": false
        },
        "meta": {
          "selected_staff": "",
          "ordering_store": null
        },
        "selected_staff": "",
        "ordering_store": null,
        "source": {},
        "created_on": "2019-12-18T14:00:07.165000"
      },
      "items": [
        {
          "key": "791651_6",
          "discount": "",
          "bulk_offer": {},
          "coupon_message": "",
          "article": {
            "type": "article",
            "uid": "304_1054_9036_R1005753_6",
            "size": "6",
            "seller": {
              "uid": 304,
              "name": "LEAYAN GLOBAL PVT. LTD."
            },
            "store": {
              "uid": 5322,
              "name": "Vaisali Nagar"
            },
            "quantity": 1,
            "price": {
              "base": {
                "marked": 2095,
                "effective": 2095,
                "currency_code": "INR"
              },
              "converted": {
                "marked": 2095,
                "effective": 2095,
                "currency_code": "INR"
              }
            }
          },
          "product": {
            "type": "product",
            "uid": 791651,
            "name": "Black Running Shoes",
            "slug": "furo-black-running-shoes-791651-f8bcc3",
            "brand": {
              "uid": 1054,
              "name": "Furo"
            },
            "categories": [
              {
                "uid": 160,
                "name": "Running Shoes"
              }
            ],
            "images": [
              {
                "aspect_ratio": "16:25",
                "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/1054_R1005753/1_1546490507364.jpg",
                "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/1054_R1005753/1_1546490507364.jpg"
              }
            ],
            "action": {
              "type": "product",
              "url": "https://api.addsale.com/platform/content/v1/products/furo-black-running-shoes-791651-f8bcc3/",
              "query": {
                "product_slug": [
                  "furo-black-running-shoes-791651-f8bcc3"
                ]
              }
            }
          },
          "message": "",
          "quantity": 1,
          "availability": {
            "sizes": [
              "7",
              "8",
              "9",
              "10",
              "6"
            ],
            "other_store_quantity": 12,
            "out_of_stock": false,
            "deliverable": true,
            "is_valid": true
          },
          "price": {
            "base": {
              "add_on": 2095,
              "marked": 2095,
              "effective": 2095,
              "selling": 2095,
              "currency_code": "INR"
            },
            "converted": {
              "add_on": 2095,
              "marked": 2095,
              "effective": 2095,
              "selling": 2095,
              "currency_code": "INR"
            }
          }
        },
        {
          "key": "791651_7",
          "discount": "",
          "bulk_offer": {},
          "coupon_message": "",
          "article": {
            "type": "article",
            "uid": "304_1054_9036_R1005753_7",
            "size": "7",
            "seller": {
              "uid": 304,
              "name": "LEAYAN GLOBAL PVT. LTD."
            },
            "store": {
              "uid": 5322,
              "name": "Vaisali Nagar"
            },
            "quantity": 2,
            "price": {
              "base": {
                "marked": 2095,
                "effective": 2095,
                "currency_code": "INR"
              },
              "converted": {
                "marked": 2095,
                "effective": 2095,
                "currency_code": "INR"
              }
            }
          },
          "product": {
            "type": "product",
            "uid": 791651,
            "name": "Black Running Shoes",
            "slug": "furo-black-running-shoes-791651-f8bcc3",
            "brand": {
              "uid": 1054,
              "name": "Furo"
            },
            "categories": [
              {
                "uid": 160,
                "name": "Running Shoes"
              }
            ],
            "images": [
              {
                "aspect_ratio": "16:25",
                "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/1054_R1005753/1_1546490507364.jpg",
                "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/1054_R1005753/1_1546490507364.jpg"
              }
            ],
            "action": {
              "type": "product",
              "url": "https://api.addsale.com/platform/content/v1/products/furo-black-running-shoes-791651-f8bcc3/",
              "query": {
                "product_slug": [
                  "furo-black-running-shoes-791651-f8bcc3"
                ]
              }
            }
          },
          "message": "",
          "quantity": 2,
          "availability": {
            "sizes": [
              "7",
              "8",
              "9",
              "10",
              "6"
            ],
            "other_store_quantity": 7,
            "out_of_stock": false,
            "deliverable": true,
            "is_valid": true
          },
          "price": {
            "base": {
              "add_on": 4190,
              "marked": 4190,
              "effective": 4190,
              "selling": 4190,
              "currency_code": "INR"
            },
            "converted": {
              "add_on": 4190,
              "marked": 4190,
              "effective": 4190,
              "selling": 4190,
              "currency_code": "INR"
            }
          }
        }
      ],
      "cart_id": 13055,
      "uid": "13055",
      "breakup_values": {
        "raw": {
          "cod_charge": 0,
          "convenience_fee": 0,
          "coupon": 0,
          "delivery_charge": 0,
          "discount": 0,
          "fynd_cash": 0,
          "gst_charges": 958.73,
          "mrp_total": 6285,
          "subtotal": 6285,
          "total": 6285,
          "vog": 5326.27,
          "you_saved": 0
        },
        "loyalty_points": {
          "total": 0,
          "applicable": 0,
          "is_applied": false,
          "description": "Your cashback, referrals, and refund amount get credited to Fynd Cash which can be redeemed while placing an order."
        },
        "coupon": {
          "type": "cash",
          "code": "",
          "uid": null,
          "value": 0,
          "is_applied": false,
          "message": "Sorry! Invalid coupon"
        },
        "display": [
          {
            "display": "MRP Total",
            "key": "mrp_total",
            "value": 6285,
            "currency_code": "INR"
          },
          {
            "display": "Subtotal",
            "key": "subtotal",
            "value": 6285,
            "currency_code": "INR"
          },
          {
            "display": "Total",
            "key": "total",
            "value": 6285,
            "currency_code": "INR"
          }
        ]
      },
      "delivery_charge_info": "",
      "coupon_text": "View all offers",
      "gstin": null,
      "comment": "",
      "checkout_mode": "self",
      "payment_selection_lock": {
        "enabled": false,
        "default_options": "COD",
        "payment_identifier": null
      },
      "restrict_checkout": false,
      "is_valid": true,
      "last_modified": "Mon, 16 Dec 2019 07:02:18 GMT"
    }
  }
}
```









---



---


## Logistic


#### getTatProduct
Get Tat Product

```javascript
// Promise
const promise = logistic.getTatProduct(body);

// Async/Await
const data = await logistic.getTatProduct(body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Get Tat Product

*Success Response:*



Success


Schema: `GetTatProductResponse`








API Error


Schema: `ApefaceApiError`








Internal Server Error


Schema: `ApefaceApiError`









---


#### getPincodeCity
Get City from Pincode

```javascript
// Promise
const promise = logistic.getPincodeCity(pincode);

// Async/Await
const data = await logistic.getPincodeCity(pincode);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| pincode | string | Pincode | 

Get City from Pincode

*Success Response:*



Success


Schema: `GetPincodeCityResponse`








API Error


Schema: `ApefaceApiError`








Internal Server Error


Schema: `ApefaceApiError`









---



---


---
---
