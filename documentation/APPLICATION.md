# FDK Application Front API Documentaion


* [Catalog](#Catalog) - Catalog API's allows you to access list of products, prices, seller details, similar features, variants and many more useful features.  
* [Lead](#Lead) - Handles communication between Staff and Users 
* [Theme](#Theme) - Responsible for themes 
* [User](#User) - Authentication Service 
* [Content](#Content) - Content 
* [Communication](#Communication) - Manages email, sms, push notifications sent to users 
* [Share](#Share) - Short link and QR Code 
* [FileStorage](#FileStorage) - File Storage 
* [Payment](#Payment) - Collect payment through many payment gateway i.e Stripe, Razorpay, Juspay etc.into Fynd or Self account 
* [Order](#Order) - Handles Platform websites OMS 
* [Feedback](#Feedback) - User Reviews and Rating System 

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
    * [Catalog#deleteCollectionDetailBySlug](#catalogdeletecollectiondetailbyslug)
    * [Catalog#updateCollectionDetailBySlug](#catalogupdatecollectiondetailbyslug)
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
    
   

* [Theme](#Theme)
  * Methods
    * [Theme#getAppliedTheme](#themegetappliedtheme)
    * [Theme#getThemeForPreview](#themegetthemeforpreview)
    
   

* [User](#User)
  * Methods
    * [User#loginWithFacebook](#userloginwithfacebook)
    * [User#loginWithGoogle](#userloginwithgoogle)
    * [User#loginWithGoogleAndroid](#userloginwithgoogleandroid)
    * [User#loginWithGoogleIOS](#userloginwithgoogleios)
    * [User#loginWithOTP](#userloginwithotp)
    * [User#loginWithEmailAndPassword](#userloginwithemailandpassword)
    * [User#sendResetPasswordEmail](#usersendresetpasswordemail)
    * [User#forgotPassword](#userforgotpassword)
    * [User#sendResetToken](#usersendresettoken)
    * [User#loginWithToken](#userloginwithtoken)
    * [User#registerWithForm](#userregisterwithform)
    * [User#verifyEmail](#userverifyemail)
    * [User#verifyMobile](#userverifymobile)
    * [User#hasPassword](#userhaspassword)
    * [User#updatePassword](#userupdatepassword)
    * [User#logout](#userlogout)
    * [User#sendOTPOnMobile](#usersendotponmobile)
    * [User#verifyMobileOTP](#userverifymobileotp)
    * [User#sendOTPOnEmail](#usersendotponemail)
    * [User#verifyEmailOTP](#userverifyemailotp)
    * [User#getLoggedInUser](#usergetloggedinuser)
    * [User#getListOfActiveSessions](#usergetlistofactivesessions)
    * [User#getPlatformConfig](#usergetplatformconfig)
    * [User#updateProfile](#userupdateprofile)
    * [User#addMobileNumber](#useraddmobilenumber)
    * [User#deleteMobileNumber](#userdeletemobilenumber)
    * [User#setMobileNumberAsPrimary](#usersetmobilenumberasprimary)
    * [User#sendVerificationLinkToMobile](#usersendverificationlinktomobile)
    * [User#addEmail](#useraddemail)
    * [User#deleteEmail](#userdeleteemail)
    * [User#setEmailAsPrimary](#usersetemailasprimary)
    * [User#sendVerificationLinkToEmail](#usersendverificationlinktoemail)
    
   

* [Content](#Content)
  * Methods
    * [Content#getAnnouncements](#contentgetannouncements)
    * [Content#getBlog](#contentgetblog)
    * [Content#getFaqs](#contentgetfaqs)
    * [Content#getLandingPage](#contentgetlandingpage)
    * [Content#getLegalInformation](#contentgetlegalinformation)
    * [Content#getNavigations](#contentgetnavigations)
    * [Content#getPage](#contentgetpage)
    * [Content#getSeoConfiguration](#contentgetseoconfiguration)
    * [Content#getSlideshow](#contentgetslideshow)
    * [Content#getSupportInformation](#contentgetsupportinformation)
    * [Content#getFPITags](#contentgetfpitags)
    
   

* [Communication](#Communication)
  * Methods
    * [Communication#getCommunicationConsent](#communicationgetcommunicationconsent)
    * [Communication#upsertCommunicationConsent](#communicationupsertcommunicationconsent)
    * [Communication#upsertPushtoken](#communicationupsertpushtoken)
    
   

* [Share](#Share)
  * Methods
    * [Share#getApplicationQRCode](#sharegetapplicationqrcode)
    * [Share#getProductQRCodeBySlug](#sharegetproductqrcodebyslug)
    * [Share#getCollectionQRCodeBySlug](#sharegetcollectionqrcodebyslug)
    * [Share#getUrlQRCode](#sharegeturlqrcode)
    * [Share#createShortLink](#sharecreateshortlink)
    * [Share#getShortLinkByHash](#sharegetshortlinkbyhash)
    * [Share#getOriginalShortLinkByHash](#sharegetoriginalshortlinkbyhash)
    
   

* [FileStorage](#FileStorage)
  * Methods
    * [FileStorage#completeUpload](#filestoragecompleteupload)
    * [FileStorage#startUpload](#filestoragestartupload)
    
   

* [Payment](#Payment)
  * Methods
    * [Payment#getAggregatorsConfig](#paymentgetaggregatorsconfig)
    * [Payment#attachCardToCustomer](#paymentattachcardtocustomer)
    * [Payment#getActiveCardAggregator](#paymentgetactivecardaggregator)
    * [Payment#getActiveUserCards](#paymentgetactiveusercards)
    * [Payment#deleteUserCard](#paymentdeleteusercard)
    * [Payment#verifyCustomerForPayment](#paymentverifycustomerforpayment)
    * [Payment#verifyAndChargePayment](#paymentverifyandchargepayment)
    * [Payment#initialisePayment](#paymentinitialisepayment)
    * [Payment#checkAndUpdatePaymentStatus](#paymentcheckandupdatepaymentstatus)
    * [Payment#getPaymentModeRoutes](#paymentgetpaymentmoderoutes)
    * [Payment#getPosPaymentModeRoutes](#paymentgetpospaymentmoderoutes)
    * [Payment#getUserBeneficiariesDetail](#paymentgetuserbeneficiariesdetail)
    * [Payment#verifyIfscCode](#paymentverifyifsccode)
    * [Payment#getOrderBeneficiariesDetail](#paymentgetorderbeneficiariesdetail)
    * [Payment#verifyOtpAndAddBeneficiaryForBank](#paymentverifyotpandaddbeneficiaryforbank)
    * [Payment#addBeneficiaryDetails](#paymentaddbeneficiarydetails)
    * [Payment#verifyOtpAndAddBeneficiaryForWallet](#paymentverifyotpandaddbeneficiaryforwallet)
    * [Payment#updateDefaultBeneficiary](#paymentupdatedefaultbeneficiary)
    
   

* [Order](#Order)
  * Methods
    * [Order#getOrders](#ordergetorders)
    * [Order#getOrderById](#ordergetorderbyid)
    * [Order#getShipmentById](#ordergetshipmentbyid)
    * [Order#getShipmentReasons](#ordergetshipmentreasons)
    * [Order#updateShipmentStatus](#orderupdateshipmentstatus)
    * [Order#trackShipment](#ordertrackshipment)
    
   

* [Feedback](#Feedback)
  * Methods
    * [Feedback#createAbuseReport](#feedbackcreateabusereport)
    * [Feedback#updateAbuseReport](#feedbackupdateabusereport)
    * [Feedback#getAbuseReports](#feedbackgetabusereports)
    * [Feedback#getAttributes](#feedbackgetattributes)
    * [Feedback#createAttribute](#feedbackcreateattribute)
    * [Feedback#getAttribute](#feedbackgetattribute)
    * [Feedback#updateAttribute](#feedbackupdateattribute)
    * [Feedback#createComment](#feedbackcreatecomment)
    * [Feedback#updateComment](#feedbackupdatecomment)
    * [Feedback#getComments](#feedbackgetcomments)
    * [Feedback#checkEligibility](#feedbackcheckeligibility)
    * [Feedback#deleteMedia](#feedbackdeletemedia)
    * [Feedback#createMedia](#feedbackcreatemedia)
    * [Feedback#updateMedia](#feedbackupdatemedia)
    * [Feedback#getMedias](#feedbackgetmedias)
    * [Feedback#getReviewSummaries](#feedbackgetreviewsummaries)
    * [Feedback#createReview](#feedbackcreatereview)
    * [Feedback#updateReview](#feedbackupdatereview)
    * [Feedback#getReviews](#feedbackgetreviews)
    * [Feedback#getTemplates](#feedbackgettemplates)
    * [Feedback#createQuestion](#feedbackcreatequestion)
    * [Feedback#updateQuestion](#feedbackupdatequestion)
    * [Feedback#getQuestionAndAnswers](#feedbackgetquestionandanswers)
    * [Feedback#getVotes](#feedbackgetvotes)
    * [Feedback#createVote](#feedbackcreatevote)
    * [Feedback#updateVote](#feedbackupdatevote)
    
   


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
| filters | string | Pass `filters` parameter to fetch the filter details. This flag is used to fetch all filters | 
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



The attached items of an collection. See example below or refer `ProductListingResponse` for details


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


## Theme

```javascript
const { Configuration, Theme } = require('fdk-client-nodejs/application')
const conf = new Configuration({
    ApplicationID: "507f191e810c19729de860ea",
    ApplicationToken: "hu67dfhddf"
});
const theme = new Theme(conf);

```


#### Theme#getAppliedTheme
Get applied theme for an application

```javascript
// Promise
const promise = theme.getAppliedTheme();

// Async/Await
const data = await theme.getAppliedTheme();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |



Success Response:



A JSON object of theme


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ThemesSchema"
}`


Examples: 


Applied Theme
```javascript
{
  "$ref": "#/components/examples/Themes"
}
```




















Error Response:



---


#### Theme#getThemeForPreview
Get theme for preview

```javascript
// Promise
const promise = theme.getThemeForPreview(theme_id, );

// Async/Await
const data = await theme.getThemeForPreview(theme_id, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| theme_id | string | ID of the theme to be retrieved | 



Success Response:



A JSON object of theme


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ThemesSchema"
}`


Examples: 


Preview Theme
```javascript
{
  "$ref": "#/components/examples/Themes"
}
```




















Error Response:



---



---


## User

```javascript
const { Configuration, User } = require('fdk-client-nodejs/application')
const conf = new Configuration({
    ApplicationID: "507f191e810c19729de860ea",
    ApplicationToken: "hu67dfhddf"
});
const user = new User(conf);

```


#### User#loginWithFacebook
Login/Register with Facebook

```javascript
// Promise
const promise = user.loginWithFacebook();

// Async/Await
const data = await user.loginWithFacebook();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Used to login or register with Facebook

Success Response:



A JSON object with user details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/AuthSuccess"
}`


Examples: 


Success
```javascript
{
  "$ref": "#/components/examples/AuthSuccess"
}
```




















Error Response:



---


#### User#loginWithGoogle
Login/Register with Google

```javascript
// Promise
const promise = user.loginWithGoogle();

// Async/Await
const data = await user.loginWithGoogle();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Used to login or register with Google

Success Response:



A JSON object with user details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/AuthSuccess"
}`


Examples: 


Success
```javascript
{
  "$ref": "#/components/examples/AuthSuccess"
}
```




















Error Response:



---


#### User#loginWithGoogleAndroid
Login/Register with Google for android

```javascript
// Promise
const promise = user.loginWithGoogleAndroid();

// Async/Await
const data = await user.loginWithGoogleAndroid();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Used to login or register with Google for android

Success Response:



A JSON object with user details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/AuthSuccess"
}`


Examples: 


Success
```javascript
{
  "$ref": "#/components/examples/AuthSuccess"
}
```




















Error Response:



---


#### User#loginWithGoogleIOS
Login/Register with Google for ios

```javascript
// Promise
const promise = user.loginWithGoogleIOS();

// Async/Await
const data = await user.loginWithGoogleIOS();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Used to login or register with google for ios

Success Response:



A JSON object with user details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/AuthSuccess"
}`


Examples: 


Success
```javascript
{
  "$ref": "#/components/examples/AuthSuccess"
}
```




















Error Response:



---


#### User#loginWithOTP
Login/Register with OTP

```javascript
// Promise
const promise = user.loginWithOTP(platform, );

// Async/Await
const data = await user.loginWithOTP(platform, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| platform | string | Platform | 

Used to login or register with OTP

Success Response:






Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/SendOtpResponse"
}`


Examples: 


Success
```javascript
{
  "$ref": "#/components/examples/SendOtpResponse"
}
```




















Error Response:



---


#### User#loginWithEmailAndPassword
Login/Register with password

```javascript
// Promise
const promise = user.loginWithEmailAndPassword();

// Async/Await
const data = await user.loginWithEmailAndPassword();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Used to login or register with email & password

Success Response:






Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/LoginSuccess"
}`


Examples: 


Success
```javascript
{
  "$ref": "#/components/examples/UserExampleObject"
}
```




















Error Response:



---


#### User#sendResetPasswordEmail
Reset Password

```javascript
// Promise
const promise = user.sendResetPasswordEmail(platform, );

// Async/Await
const data = await user.sendResetPasswordEmail(platform, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| platform | string | Platform | 

Used to reset account password

Success Response:






Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ResetPasswordSuccess"
}`




















Error Response:



---


#### User#forgotPassword


```javascript
// Promise
const promise = user.forgotPassword();

// Async/Await
const data = await user.forgotPassword();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |



Success Response:






Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/LoginSuccess"
}`


Examples: 


Success
```javascript
{
  "$ref": "#/components/examples/UserExampleObject"
}
```




















Error Response:



---


#### User#sendResetToken


```javascript
// Promise
const promise = user.sendResetToken();

// Async/Await
const data = await user.sendResetToken();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Send code incase of reset password

Success Response:






Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ResetPasswordSuccess"
}`




















Error Response:



---


#### User#loginWithToken
Login/Register with token

```javascript
// Promise
const promise = user.loginWithToken();

// Async/Await
const data = await user.loginWithToken();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Login/Register with token

Success Response:






Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/LoginSuccess"
}`


Examples: 


Success
```javascript
{
  "$ref": "#/components/examples/UserExampleObject"
}
```











Content Type: `application/json`

Schema: `{
  "type": "object",
  "properties": {
    "message": {
      "type": "string"
    }
  }
}`




















Error Response:



---


#### User#registerWithForm
Registration Form

```javascript
// Promise
const promise = user.registerWithForm(platform, );

// Async/Await
const data = await user.registerWithForm(platform, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| platform | string | Platform | 

Register using form

Success Response:






Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/RegisterFormSuccess"
}`




















Error Response:



---


#### User#verifyEmail
Verify email

```javascript
// Promise
const promise = user.verifyEmail();

// Async/Await
const data = await user.verifyEmail();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Used to verify email

Success Response:






Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/VerifyEmailSuccess"
}`




















Error Response:



---


#### User#verifyMobile
Verify mobile

```javascript
// Promise
const promise = user.verifyMobile();

// Async/Await
const data = await user.verifyMobile();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Verify mobile

Success Response:






Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/VerifyEmailSuccess"
}`




















Error Response:



---


#### User#hasPassword
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

Success Response:






Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/HasPasswordSuccess"
}`




















Error Response:



---


#### User#updatePassword
Update user password

```javascript
// Promise
const promise = user.updatePassword();

// Async/Await
const data = await user.updatePassword();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Used to update user password

Success Response:






Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/VerifyEmailSuccess"
}`




















Error Response:



---


#### User#logout
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

Success Response:






Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/LogoutSuccess"
}`




















Error Response:



---


#### User#sendOTPOnMobile
Send OTP on mobile

```javascript
// Promise
const promise = user.sendOTPOnMobile(platform, );

// Async/Await
const data = await user.sendOTPOnMobile(platform, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| platform | string | Platform | 

Used to send otp to mobile

Success Response:






Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/OtpSuccess"
}`




















Error Response:



---


#### User#verifyMobileOTP
Verify OTP on mobile

```javascript
// Promise
const promise = user.verifyMobileOTP(platform, );

// Async/Await
const data = await user.verifyMobileOTP(platform, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| platform | string | Platform | 

Used to verify otp sent to mobile

Success Response:






Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/VerifyOtpSuccess"
}`


Examples: 


default
```javascript
{
  "$ref": "#/components/examples/VerifyMobileOTP"
}
```




















Error Response:



---


#### User#sendOTPOnEmail
Send OTP on email

```javascript
// Promise
const promise = user.sendOTPOnEmail(platform, );

// Async/Await
const data = await user.sendOTPOnEmail(platform, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| platform | string | Platform | 

Used to send otp to email

Success Response:






Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/EmailOtpSuccess"
}`




















Error Response:



---


#### User#verifyEmailOTP
Verify OTP on email

```javascript
// Promise
const promise = user.verifyEmailOTP(platform, );

// Async/Await
const data = await user.verifyEmailOTP(platform, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| platform | string | Platform | 

Used to verify otp sent to email

Success Response:






Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/VerifyOtpSuccess"
}`


Examples: 


default
```javascript
{
  "$ref": "#/components/examples/VerifyMobileOTP"
}
```




















Error Response:



---


#### User#getLoggedInUser
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

Success Response:






Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/UserSchema"
}`


Examples: 


default
```javascript
{
  "$ref": "#/components/examples/UserExample"
}
```




















Error Response:



---


#### User#getListOfActiveSessions
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

Success Response:






Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/SessionListSuccess"
}`




















Error Response:



---


#### User#getPlatformConfig
Get platform config

```javascript
// Promise
const promise = user.getPlatformConfig(name, );

// Async/Await
const data = await user.getPlatformConfig(name, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| name | string | Name | 

Used to get platform config

Success Response:



Platform Config


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/PlatformSchema"
}`




















Error Response:



---


#### User#updateProfile
Edit Profile Details

```javascript
// Promise
const promise = user.updateProfile(platform, );

// Async/Await
const data = await user.updateProfile(platform, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| platform | string | Platform | 

Used to update profile

Success Response:






Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/LoginSuccess"
}`


Examples: 


default
```javascript
{
  "$ref": "#/components/examples/UserExampleObject"
}
```




















Error Response:



---


#### User#addMobileNumber
Add mobile number to profile

```javascript
// Promise
const promise = user.addMobileNumber(platform, );

// Async/Await
const data = await user.addMobileNumber(platform, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| platform | string | Platform | 

Used to add new mobile number to profile

Success Response:



A JSON object with user details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/VerifyMobileOTPSuccess"
}`


Examples: 


default
```javascript
{
  "$ref": "#/components/examples/VerifyMobileOTP"
}
```




















Error Response:



---


#### User#deleteMobileNumber
Delete mobile number from profile

```javascript
// Promise
const promise = user.deleteMobileNumber(platform, active, primary, verified, country_code, phone, );

// Async/Await
const data = await user.deleteMobileNumber(platform, active, primary, verified, country_code, phone, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| platform | string | Platform | 
| active | boolean | Active mobile number | 
| primary | boolean | Primary number | 
| verified | boolean | Verified Number | 
| country_code | string | Country code of phone number | 
| phone | string | Phone number | 

Used to delete mobile number from profile

Success Response:



A JSON object with user details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/LoginSuccess"
}`


Examples: 


default
```javascript
{
  "$ref": "#/components/examples/UserExampleObject"
}
```




















Error Response:



---


#### User#setMobileNumberAsPrimary
Set mobile as primary

```javascript
// Promise
const promise = user.setMobileNumberAsPrimary();

// Async/Await
const data = await user.setMobileNumberAsPrimary();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Used to set a mobile number as primary

Success Response:



A JSON object with user details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/LoginSuccess"
}`


Examples: 


default
```javascript
{
  "$ref": "#/components/examples/UserExampleObject"
}
```




















Error Response:



---


#### User#sendVerificationLinkToMobile
Send verification link to mobile

```javascript
// Promise
const promise = user.sendVerificationLinkToMobile(platform, );

// Async/Await
const data = await user.sendVerificationLinkToMobile(platform, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| platform | string | Platform | 

Used to send verification link to a mobile number

Success Response:






Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/SendMobileVerifyLinkSuccess"
}`


Examples: 


default
```javascript
{
  "$ref": "#/components/examples/VerifyMobileOTP"
}
```




















Error Response:



---


#### User#addEmail
Add email to profile

```javascript
// Promise
const promise = user.addEmail(platform, );

// Async/Await
const data = await user.addEmail(platform, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| platform | string | Platform | 

Used to add new email to profile

Success Response:



A JSON object with user details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/VerifyEmailOTPSuccess"
}`


Examples: 


default
```javascript
{
  "$ref": "#/components/examples/VerifyEmailOTP"
}
```




















Error Response:



---


#### User#deleteEmail
Delete email from profile

```javascript
// Promise
const promise = user.deleteEmail(platform, active, primary, verified, email, );

// Async/Await
const data = await user.deleteEmail(platform, active, primary, verified, email, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| platform | string | Platform | 
| active | boolean | Whether email id is active | 
| primary | boolean | Whether email id is primary email | 
| verified | boolean | Whether email id is verified | 
| email | string | Email ID to be deleted | 

Used to delete email from profile

Success Response:



A JSON object with user details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/LoginSuccess"
}`


Examples: 


default
```javascript
{
  "$ref": "#/components/examples/UserExampleObject"
}
```




















Error Response:



---


#### User#setEmailAsPrimary
Set email as primary

```javascript
// Promise
const promise = user.setEmailAsPrimary();

// Async/Await
const data = await user.setEmailAsPrimary();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Used to set an email as primart

Success Response:



A JSON object with user details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/LoginSuccess"
}`


Examples: 


default
```javascript
{
  "$ref": "#/components/examples/UserExampleObject"
}
```




















Error Response:



---


#### User#sendVerificationLinkToEmail
Send verification link to email

```javascript
// Promise
const promise = user.sendVerificationLinkToEmail(platform, );

// Async/Await
const data = await user.sendVerificationLinkToEmail(platform, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| platform | string | Platform | 

Used to sent verification to an email

Success Response:






Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/SendEmailVerifyLinkSuccess"
}`




















Error Response:



---



---


## Content

```javascript
const { Configuration, Content } = require('fdk-client-nodejs/application')
const conf = new Configuration({
    ApplicationID: "507f191e810c19729de860ea",
    ApplicationToken: "hu67dfhddf"
});
const content = new Content(conf);

```


#### Content#getAnnouncements
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

Success Response:



Announcement api response. announcements object contains page slug name as propery with list of announcements enabled for that page. `$all` is special page slug to indicate show announcemnt on all pages.


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/AnnouncementsResponseSchema"
}`


Examples: 


Announcements enabled
```javascript
{
  "$ref": "#/components/examples/AnnouncementEnabledExample"
}
```

No Announcement enabled
```javascript
{
  "value": {
    "announcements": [],
    "refresh_rate": 900,
    "refresh_pages": []
  }
}
```




















Error Response:



---


#### Content#getBlog
Get Blog by slug

```javascript
// Promise
const promise = content.getBlog(slug, );

// Async/Await
const data = await content.getBlog(slug, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | The `slug` of a blog. Use this parameter to retrieve a particular blog | 

Use this API to fetch a blog using `slug`

Success Response:



A JSON object with blog details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/CustomBlog"
}`


Examples: 


default
```javascript
{
  "$ref": "#/components/examples/CustomBlog"
}
```




















Error Response:



---


#### Content#getFaqs
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

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/FaqResponseSchema"
}`


Examples: 


default
```javascript
{
  "$ref": "#/components/examples/AppFaqs"
}
```




















Error Response:



---


#### Content#getLandingPage
Get landing page

```javascript
// Promise
const promise = content.getLandingPage(x-device-platform, );

// Async/Await
const data = await content.getLandingPage(x-device-platform, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| x-device-platform | string | Platform | 

Use this API to fetch a landing page

Success Response:



A JSON object with landing details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/LandingPage"
}`


Examples: 


default
```javascript
{
  "$ref": "#/components/examples/LandingPage"
}
```




















Error Response:



---


#### Content#getLegalInformation
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

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ApplicationLegal"
}`


Examples: 


Success
```javascript
{
  "$ref": "#/components/examples/Legal"
}
```




















Error Response:



---


#### Content#getNavigations
Get navigation

```javascript
// Promise
const promise = content.getNavigations(x-device-platform, );

// Async/Await
const data = await content.getNavigations(x-device-platform, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| x-device-platform | string | Platform | 

Use this API to fetch a navigation

Success Response:



A JSON object with navigation details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/Navigation"
}`


Examples: 


default
```javascript
{
  "$ref": "#/components/examples/Navigation"
}
```




















Error Response:



---


#### Content#getPage
Get Page by slug

```javascript
// Promise
const promise = content.getPage(slug, );

// Async/Await
const data = await content.getPage(slug, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | The `slug` of a page. Use this parameter to retrieve a particular page | 

Use this API to fetch a custom page using `slug`

Success Response:



A JSON object with page details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/CustomPage"
}`


Examples: 


default
```javascript
{
  "$ref": "#/components/examples/CustomPage"
}
```




















Error Response:



---


#### Content#getSeoConfiguration
Get seo of application

```javascript
// Promise
const promise = content.getSeoConfiguration();

// Async/Await
const data = await content.getSeoConfiguration();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Get seo of application

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/SeoResponseSchema"
}`


Examples: 


Success
```javascript
{
  "$ref": "#/components/examples/Seo"
}
```




















Error Response:



---


#### Content#getSlideshow
Get slideshow by slug

```javascript
// Promise
const promise = content.getSlideshow(slug, x-device-platform, );

// Async/Await
const data = await content.getSlideshow(slug, x-device-platform, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | The `slug` of a slideshow. Use this parameter to retrieve a particular slideshow | 
| x-device-platform | string | Platform | 

Use this API to fetch a slideshow using `slug`

Success Response:



A JSON object with slideshow details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/Slideshow"
}`


Examples: 


default
```javascript
{
  "$ref": "#/components/examples/Slideshow"
}
```




















Error Response:



---


#### Content#getSupportInformation
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

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/Support"
}`


Examples: 


default
```javascript
{
  "$ref": "#/components/examples/Support"
}
```




















Error Response:



---


#### Content#getFPITags
Get Tags for application

```javascript
// Promise
const promise = content.getFPITags();

// Async/Await
const data = await content.getFPITags();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |



Success Response:



A JSON object of tags


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/TagsSchema"
}`




















Error Response:



---



---


## Communication

```javascript
const { Configuration, Communication } = require('fdk-client-nodejs/application')
const conf = new Configuration({
    ApplicationID: "507f191e810c19729de860ea",
    ApplicationToken: "hu67dfhddf"
});
const communication = new Communication(conf);

```


#### Communication#getCommunicationConsent
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

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/CommunicationConsent"
}`


Examples: 


default
```javascript
{
  "$ref": "#/components/examples/CommunicationConsent"
}
```








Error Response:



---


#### Communication#upsertCommunicationConsent
Upsert communication consent

```javascript
// Promise
const promise = communication.upsertCommunicationConsent();

// Async/Await
const data = await communication.upsertCommunicationConsent();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Upsert communication consent

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/CommunicationConsentRes"
}`


Examples: 


default
```javascript
{
  "$ref": "#/components/examples/CommunicationConsentRes"
}
```








Bad request


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/responses/BadRequest"
}`








Error Response:



---


#### Communication#upsertPushtoken
Upsert push token of a user

```javascript
// Promise
const promise = communication.upsertPushtoken();

// Async/Await
const data = await communication.upsertPushtoken();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Upsert push token of a user

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/PushtokenRes"
}`


Examples: 


create
```javascript
{
  "$ref": "#/components/examples/PushtokenResponseCreate"
}
```

update
```javascript
{
  "$ref": "#/components/examples/PushtokenResponseUpdate"
}
```

reset
```javascript
{
  "$ref": "#/components/examples/PushtokenResponseReset"
}
```








Bad request


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/responses/BadRequest"
}`








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


## FileStorage

```javascript
const { Configuration, FileStorage } = require('fdk-client-nodejs/application')
const conf = new Configuration({
    ApplicationID: "507f191e810c19729de860ea",
    ApplicationToken: "hu67dfhddf"
});
const filestorage = new FileStorage(conf);

```


#### FileStorage#completeUpload
This will complete the upload process. After successfully uploading file, you can call this operation to complete the upload process.

```javascript
// Promise
const promise = filestorage.completeUpload(namespace, company_id, );

// Async/Await
const data = await filestorage.completeUpload(namespace, company_id, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| namespace | string | bucket name | 
| company_id | integer | company_id | 

Uploads an arbitrarily sized buffer or blob.

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


Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/CompleteResponse"
}`








Failed


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/FailedResponse"
}`








Error Response:



---


#### FileStorage#startUpload
This operation initiates upload and returns storage link which is valid for 30 Minutes. You can use that storage link to make subsequent upload request with file buffer or blob.

```javascript
// Promise
const promise = filestorage.startUpload(namespace, company_id, );

// Async/Await
const data = await filestorage.startUpload(namespace, company_id, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| namespace | string | bucket name | 
| company_id | integer | company_id | 

Uploads an arbitrarily sized buffer or blob.

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


Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/StartResponse"
}`








Failed


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/FailedResponse"
}`








Error Response:



---



---


## Payment

```javascript
const { Configuration, Payment } = require('fdk-client-nodejs/application')
const conf = new Configuration({
    ApplicationID: "507f191e810c19729de860ea",
    ApplicationToken: "hu67dfhddf"
});
const payment = new Payment(conf);

```


#### Payment#getAggregatorsConfig
Get payment gateway keys

```javascript
// Promise
const promise = payment.getAggregatorsConfig(x-api-token, refresh, );

// Async/Await
const data = await payment.getAggregatorsConfig(x-api-token, refresh, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| x-api-token | string | api token | 
| refresh | boolean | refresh cache | 

Get payment gateway (key, secrets, merchant, sdk/api detail) to complete payment at front-end.

Success Response:



Keys of all payment gateway


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/AggregatorsConfigDetailResponse"
}`








Bad Request Error


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/HttpErrorCodeAndResponse"
}`








Internal Server Error


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/HttpErrorCodeAndResponse"
}`








Error Response:



---


#### Payment#attachCardToCustomer
Attach a saved card to customer.

```javascript
// Promise
const promise = payment.attachCardToCustomer();

// Async/Await
const data = await payment.attachCardToCustomer();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Attach a saved card to customer at payment gateway i.e stripe and refresh card cache.

Success Response:



List of cards objects


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/AttachCardsResponse"
}`








Bad request error


Content Type: `application/json`

Schema: ``








Internal Server Error


Content Type: `application/json`

Schema: ``








Error Response:



---


#### Payment#getActiveCardAggregator
Fetch active payment gateway for card

```javascript
// Promise
const promise = payment.getActiveCardAggregator(refresh, );

// Async/Await
const data = await payment.getActiveCardAggregator(refresh, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| refresh | boolean |  | 

Fetch active payment gateway along with customer id for cards payments.

Success Response:



Object of payment gateway and customer id


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ActiveCardPaymentGatewayResponse"
}`








Bad request error


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/HttpErrorCodeAndResponse"
}`








Internal Server Error


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/HttpErrorCodeAndResponse"
}`








Error Response:



---


#### Payment#getActiveUserCards
Fetch the list of saved cards of user.

```javascript
// Promise
const promise = payment.getActiveUserCards(force_refresh, );

// Async/Await
const data = await payment.getActiveUserCards(force_refresh, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| force_refresh | boolean |  | 

Fetch the list of saved cards of user from active payment gateway.

Success Response:



List of cards objects


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ListCardsResponse"
}`








Bad request error


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/HttpErrorCodeAndResponse"
}`








Internal Server Error


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/HttpErrorCodeAndResponse"
}`








Error Response:



---


#### Payment#deleteUserCard
Delete an user card.

```javascript
// Promise
const promise = payment.deleteUserCard();

// Async/Await
const data = await payment.deleteUserCard();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Delete an added user card on payment gateway and remove from cache.

Success Response:



List of cards objects


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/DeleteCardsResponse"
}`








Bad request error


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/HttpErrorCodeAndResponse"
}`








Internal Server Error


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/HttpErrorCodeAndResponse"
}`








Error Response:



---


#### Payment#verifyCustomerForPayment
Validate customer for payment.

```javascript
// Promise
const promise = payment.verifyCustomerForPayment();

// Async/Await
const data = await payment.verifyCustomerForPayment();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Validate customer for payment i.e Simpl paylater, Rupifi loan.

Success Response:



List of cards objects


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ValidateCustomerResponse"
}`








Bad request error


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/HttpErrorCodeAndResponse"
}`








Internal Server Error


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/HttpErrorCodeAndResponse"
}`








Error Response:



---


#### Payment#verifyAndChargePayment
Verify and charge payment

```javascript
// Promise
const promise = payment.verifyAndChargePayment();

// Async/Await
const data = await payment.verifyAndChargePayment();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Verify and charge payment server to server for Simpl & Mswipe.

Success Response:



List of cards objects


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ChargeCustomerResponse"
}`








Bad request error


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/HttpErrorCodeAndResponse"
}`








Internal Server Error


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/HttpErrorCodeAndResponse"
}`








Error Response:



---


#### Payment#initialisePayment
Payment Initialisation server to server for UPI and BharatQR.

```javascript
// Promise
const promise = payment.initialisePayment();

// Async/Await
const data = await payment.initialisePayment();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Payment Initialisation for UPI & BharatQR code, UPI requests to app and QR code to be displayed on screen.

Success Response:



List of cards objects


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/PaymentInitializationResponse"
}`








Bad request error


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/HttpErrorCodeAndResponse"
}`








Internal Server Error


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/HttpErrorCodeAndResponse"
}`








Error Response:



---


#### Payment#checkAndUpdatePaymentStatus
Continous polling to check status of payment on server.

```javascript
// Promise
const promise = payment.checkAndUpdatePaymentStatus();

// Async/Await
const data = await payment.checkAndUpdatePaymentStatus();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Continous polling on interval to check status of payment untill timeout.

Success Response:



List of cards objects


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/PaymentStatusUpdateResponse"
}`








Bad request error


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/HttpErrorCodeAndResponse"
}`








Internal Server Error


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/HttpErrorCodeAndResponse"
}`








Error Response:



---


#### Payment#getPaymentModeRoutes
Get All Valid Payment Options

```javascript
// Promise
const promise = payment.getPaymentModeRoutes(amount, cart_id, pincode, checkout_mode, refresh, assign_card_id, delivery_address, );

// Async/Await
const data = await payment.getPaymentModeRoutes(amount, cart_id, pincode, checkout_mode, refresh, assign_card_id, delivery_address, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| amount | integer | Payment amount | 
| cart_id | string | Cart id | 
| pincode | integer | Pincode | 
| checkout_mode | string | Checkout mode | 
| refresh | boolean |  | 
| assign_card_id | string | selected card id | 
| delivery_address | string | URIencoded json delivery address of cart for annonymous user | 

Use this API to get Get All Valid Payment Options for making payment

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/PaymentOptionsResponse"
}`








Bad Request Error


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/HttpErrorCodeAndResponse"
}`








Internal Server Error


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/HttpErrorCodeAndResponse"
}`








Error Response:



---


#### Payment#getPosPaymentModeRoutes
Get All Valid Payment Options for POS

```javascript
// Promise
const promise = payment.getPosPaymentModeRoutes(amount, cart_id, pincode, checkout_mode, refresh, assign_card_id, order_type, delivery_address, );

// Async/Await
const data = await payment.getPosPaymentModeRoutes(amount, cart_id, pincode, checkout_mode, refresh, assign_card_id, order_type, delivery_address, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| amount | integer | Payment amount | 
| cart_id | string | Cart id | 
| pincode | integer | Pincode | 
| checkout_mode | string | Checkout mode | 
| refresh | boolean |  | 
| assign_card_id | string | selected card id | 
| order_type | string | Order type | 
| delivery_address | string | URIencoded json delivery address of cart for annonymous user | 

Use this API to get Get All Valid Payment Options for making payment

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/PaymentOptionsResponse"
}`








Bad Request Error


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/HttpErrorCodeAndResponse"
}`








Internal Server Error


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/HttpErrorCodeAndResponse"
}`








Error Response:



---


#### Payment#getUserBeneficiariesDetail
List User Beneficiary

```javascript
// Promise
const promise = payment.getUserBeneficiariesDetail(order_id, );

// Async/Await
const data = await payment.getUserBeneficiariesDetail(order_id, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| order_id | string |  | 

Get all active  beneficiary details added by the user for refund

Success Response:



List User Beneficiary


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/OrderBeneficiaryResponse"
}`








Bad Request Error


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/NotFoundResourceError"
}`








Internal Server Error


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/HttpErrorCodeAndResponse"
}`








Error Response:



---


#### Payment#verifyIfscCode
Ifsc Code Verification

```javascript
// Promise
const promise = payment.verifyIfscCode(ifsc_code, );

// Async/Await
const data = await payment.verifyIfscCode(ifsc_code, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| ifsc_code | string |  | 

Get True/False for correct IFSC Code for adding bank details for refund

Success Response:



Bank details on correct Ifsc Code


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/IfscCodeResponse"
}`








Bad Request Error


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/NotFoundResourceError"
}`








Internal Server Error


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorCodeDescription"
}`








Error Response:



---


#### Payment#getOrderBeneficiariesDetail
List Order Beneficiary

```javascript
// Promise
const promise = payment.getOrderBeneficiariesDetail(order_id, );

// Async/Await
const data = await payment.getOrderBeneficiariesDetail(order_id, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| order_id | string |  | 

Get all active  beneficiary details added by the user for refund

Success Response:



List Order Beneficiary


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/OrderBeneficiaryResponse"
}`








Bad Request Error


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/NotFoundResourceError"
}`








Internal Server Error


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/HttpErrorCodeAndResponse"
}`








Error Response:



---


#### Payment#verifyOtpAndAddBeneficiaryForBank
Save Beneficiary details on otp validation.

```javascript
// Promise
const promise = payment.verifyOtpAndAddBeneficiaryForBank();

// Async/Await
const data = await payment.verifyOtpAndAddBeneficiaryForBank();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Save Beneficiary details on otp validation.

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/AddBeneficiaryViaOtpVerificationResponse"
}`








Bad Request Error


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/WrongOtpError"
}`








Internal Server Error


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/HttpErrorCodeAndResponse"
}`








Error Response:



---


#### Payment#addBeneficiaryDetails
Save bank details for cancelled/returned order

```javascript
// Promise
const promise = payment.addBeneficiaryDetails();

// Async/Await
const data = await payment.addBeneficiaryDetails();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Use this API to save bank details for returned/cancelled order to refund amount in his account.

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/RefundAccountResponse"
}`








Bad Request Error


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/NotFoundResourceError"
}`








Internal Server Error


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/HttpErrorCodeAndResponse"
}`








Error Response:



---


#### Payment#verifyOtpAndAddBeneficiaryForWallet
Send Otp on Adding wallet beneficiary

```javascript
// Promise
const promise = payment.verifyOtpAndAddBeneficiaryForWallet();

// Async/Await
const data = await payment.verifyOtpAndAddBeneficiaryForWallet();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Send Otp on Adding wallet beneficiary for user mobile verification

Success Response:



WalletOtp


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/WalletOtpResponse"
}`








Bad Request Error


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/NotFoundResourceError"
}`








Internal Server Error


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/HttpErrorCodeAndResponse"
}`








Error Response:



---


#### Payment#updateDefaultBeneficiary
Mark Default Beneficiary For Refund

```javascript
// Promise
const promise = payment.updateDefaultBeneficiary();

// Async/Await
const data = await payment.updateDefaultBeneficiary();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Mark Default Beneficiary ot of all Beneficiary Details for Refund

Success Response:



Set Default Beneficiary Response.


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/SetDefaultBeneficiaryResponse"
}`








Bad Request Error


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/SetDefaultBeneficiaryResponse"
}`








Internal Server Error


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/HttpErrorCodeAndResponse"
}`








Error Response:



---



---


## Order

```javascript
const { Configuration, Order } = require('fdk-client-nodejs/application')
const conf = new Configuration({
    ApplicationID: "507f191e810c19729de860ea",
    ApplicationToken: "hu67dfhddf"
});
const order = new Order(conf);

```


#### Order#getOrders
Get Orders for application based on application Id

```javascript
// Promise
const promise = order.getOrders(page_no, page_size, from_date, to_date, );

// Async/Await
const data = await order.getOrders(page_no, page_size, from_date, to_date, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| page_no | string | Current page number | 
| page_size | string | Page limit | 
| from_date | string | From Date | 
| to_date | string | To Date | 

Get Orders

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/OrderList"
}`








API Error


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ApefaceApiError"
}`








Internal Server Error


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ApefaceApiError"
}`








Error Response:



---


#### Order#getOrderById
Get Order by order id for application based on application Id

```javascript
// Promise
const promise = order.getOrderById(order_id, );

// Async/Await
const data = await order.getOrderById(order_id, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| order_id | string | Order Id | 

Get Order By Fynd Order Id

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/OrderById"
}`








API Error


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ApefaceApiError"
}`








Internal Server Error


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ApefaceApiError"
}`








Error Response:



---


#### Order#getShipmentById
Get Shipment by shipment id and order id for application based on application Id

```javascript
// Promise
const promise = order.getShipmentById(shipment_id, );

// Async/Await
const data = await order.getShipmentById(shipment_id, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| shipment_id | string | Shipment Id | 

Get Shipment

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ShipmentById"
}`








API Error


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ApefaceApiError"
}`








Internal Server Error


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ApefaceApiError"
}`








Error Response:



---


#### Order#getShipmentReasons
Get Shipment reasons by shipment id and order id for application based on application Id

```javascript
// Promise
const promise = order.getShipmentReasons(shipment_id, );

// Async/Await
const data = await order.getShipmentReasons(shipment_id, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| shipment_id | string | Shipment Id | 

Get Shipment Reasons

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ShipmentReasons"
}`








API Error


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ApefaceApiError"
}`








Internal Server Error


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ApefaceApiError"
}`








Error Response:



---


#### Order#updateShipmentStatus
Update Shipment status by shipment id and order id for application based on application Id

```javascript
// Promise
const promise = order.updateShipmentStatus(shipment_id, );

// Async/Await
const data = await order.updateShipmentStatus(shipment_id, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| shipment_id | string | Shipment Id | 

Update Shipment Status

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ShipmentStatusUpdate"
}`








API Error


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ApefaceApiError"
}`








Internal Server Error


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ApefaceApiError"
}`








Error Response:



---


#### Order#trackShipment
Track Shipment by shipment id and order id for application based on application Id

```javascript
// Promise
const promise = order.trackShipment(shipment_id, );

// Async/Await
const data = await order.trackShipment(shipment_id, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| shipment_id | string | Shipment Id | 

Shipment Track

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ShipmentTrack"
}`








API Error


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ApefaceApiError"
}`








Internal Server Error


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ApefaceApiError"
}`








Error Response:



---



---


## Feedback

```javascript
const { Configuration, Feedback } = require('fdk-client-nodejs/application')
const conf = new Configuration({
    ApplicationID: "507f191e810c19729de860ea",
    ApplicationToken: "hu67dfhddf"
});
const feedback = new Feedback(conf);

```


#### Feedback#createAbuseReport
post a new abuse request

```javascript
// Promise
const promise = feedback.createAbuseReport();

// Async/Await
const data = await feedback.createAbuseReport();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Report a new abuse for specific entity with description text.

Success Response:



ok


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/XInsertResponse"
}`








Bad request


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








Error Response:



---


#### Feedback#updateAbuseReport
Update abuse details

```javascript
// Promise
const promise = feedback.updateAbuseReport();

// Async/Await
const data = await feedback.updateAbuseReport();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Update the abuse details like status and description text.

Success Response:



ok


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/XUpdateResponse"
}`








Bad request


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








Error Response:



---


#### Feedback#getAbuseReports
Get list of abuse data

```javascript
// Promise
const promise = feedback.getAbuseReports(entity_id, entity_type, id, page_id, page_size, );

// Async/Await
const data = await feedback.getAbuseReports(entity_id, entity_type, id, page_id, page_size, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| entity_id | string | entity id | 
| entity_type | string | entity type | 
| id | string | abuse id | 
| page_id | string | pagination page id | 
| page_size | string | pagination page size | 

Get the list of abuse data from entity type and entity ID.

Success Response:



ok


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/XNumberGetResponse"
}`








Bad request


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








Error Response:



---


#### Feedback#getAttributes
Get list of attribute data

```javascript
// Promise
const promise = feedback.getAttributes();

// Async/Await
const data = await feedback.getAttributes();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Provides a list of all attribute data.

Success Response:



ok


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/XNumberGetResponse"
}`








Bad request


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








Error Response:



---


#### Feedback#createAttribute
Add a new attribute request

```javascript
// Promise
const promise = feedback.createAttribute();

// Async/Await
const data = await feedback.createAttribute();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Add a new attribute with its name, slug and description.

Success Response:



ok


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/XInsertResponse"
}`








Bad request


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








Error Response:



---


#### Feedback#getAttribute
Get single attribute data

```javascript
// Promise
const promise = feedback.getAttribute(slug, );

// Async/Await
const data = await feedback.getAttribute(slug, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | Slug of attribute | 

Get a single attribute data from a given slug.

Success Response:



ok


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/Attribute"
}`








Bad request


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








Error Response:



---


#### Feedback#updateAttribute
Update attribute details

```javascript
// Promise
const promise = feedback.updateAttribute(slug, );

// Async/Await
const data = await feedback.updateAttribute(slug, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | Slug of attribute | 

Update the attribute's name and description.

Success Response:



ok


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/XUpdateResponse"
}`








Bad request


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








Error Response:



---


#### Feedback#createComment
post a new comment

```javascript
// Promise
const promise = feedback.createComment();

// Async/Await
const data = await feedback.createComment();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

This is used to add a new comment for specific entity.

Success Response:



ok


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/XInsertResponse"
}`








Bad request


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








Error Response:



---


#### Feedback#updateComment
Update comment status

```javascript
// Promise
const promise = feedback.updateComment();

// Async/Await
const data = await feedback.updateComment();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Update the comment status (active/approve) or text.

Success Response:



ok


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/XUpdateResponse"
}`








Bad request


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








Error Response:



---


#### Feedback#getComments
Get list of comments

```javascript
// Promise
const promise = feedback.getComments(entity_type, id, entity_id, user_id, page_id, page_size, );

// Async/Await
const data = await feedback.getComments(entity_type, id, entity_id, user_id, page_id, page_size, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| entity_type | string | entity type | 
| id | string | comment id | 
| entity_id | string | entity id | 
| user_id | string | user id - flag/filter to get comments for user | 
| page_id | string | pagination page id | 
| page_size | string | pagination page size | 

Get the list of comments from specific entity type.

Success Response:



ok


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/XCursorGetResponse"
}`








Bad request


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








Error Response:



---


#### Feedback#checkEligibility
Checks eligibility and cloud media config

```javascript
// Promise
const promise = feedback.checkEligibility(entity_type, entity_id, );

// Async/Await
const data = await feedback.checkEligibility(entity_type, entity_id, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| entity_type | string | entity type | 
| entity_id | string | entity id | 

Checks eligibility to rate and review and cloud media configuration

Success Response:



ok


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/CheckEligibilityResponse"
}`








Bad request


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








Error Response:



---


#### Feedback#deleteMedia
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

Success Response:



ok


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/XUpdateResponse"
}`








Bad request


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








Error Response:



---


#### Feedback#createMedia
Add Media

```javascript
// Promise
const promise = feedback.createMedia();

// Async/Await
const data = await feedback.createMedia();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Add Media list for specific entity.

Success Response:



ok


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/XInsertResponse"
}`








Bad request


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








Error Response:



---


#### Feedback#updateMedia
Update Media

```javascript
// Promise
const promise = feedback.updateMedia();

// Async/Await
const data = await feedback.updateMedia();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Update Media (archive/approve) for the given entity.

Success Response:



ok


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/XUpdateResponse"
}`








Bad request


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








Error Response:



---


#### Feedback#getMedias
Get Media

```javascript
// Promise
const promise = feedback.getMedias(entity_type, entity_id, id, page_id, page_size, );

// Async/Await
const data = await feedback.getMedias(entity_type, entity_id, id, page_id, page_size, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| entity_type | string | entity type | 
| entity_id | string | entity id | 
| id | string | vote id | 
| page_id | string | pagination page id | 
| page_size | string | pagination page size | 

Get Media from the given entity type and entity ID.

Success Response:



ok


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/XCursorGetResponse"
}`








Bad request


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








Error Response:



---


#### Feedback#getReviewSummaries
Get a review summary

```javascript
// Promise
const promise = feedback.getReviewSummaries(entity_type, entity_id, id, page_id, page_size, );

// Async/Await
const data = await feedback.getReviewSummaries(entity_type, entity_id, id, page_id, page_size, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| entity_type | string | entity type | 
| entity_id | string | entity id | 
| id | string | review summary identifier | 
| page_id | string | pagination page id | 
| page_size | string | pagination page size | 

Review summary gives ratings and attribute metrics of a review per entity
It gives following response data: review count, rating average. review metrics / attribute rating metrics which contains name, type, average and count.

Success Response:



success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/XCursorGetResponse"
}`








Bad request


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








Error Response:



---


#### Feedback#createReview
Add customer reviews

```javascript
// Promise
const promise = feedback.createReview();

// Async/Await
const data = await feedback.createReview();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Add customer reviews for specific entity with following data:
attributes rating, entity rating, title, description, media resources and template id.

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/XUpdateResponse"
}`








Bad Request


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








Error Response:



---


#### Feedback#updateReview
Update customer reviews

```javascript
// Promise
const promise = feedback.updateReview();

// Async/Await
const data = await feedback.updateReview();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Update customer reviews for specific entity with following data:
attributes rating, entity rating, title, description, media resources and template id.

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/XUpdateResponse"
}`








Bad Request


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








Error Response:



---


#### Feedback#getReviews
Get list of customer reviews

```javascript
// Promise
const promise = feedback.getReviews(entity_type, entity_id, id, user_id, media, rating, attribute_rating, facets, sort, page_id, page_size, );

// Async/Await
const data = await feedback.getReviews(entity_type, entity_id, id, user_id, media, rating, attribute_rating, facets, sort, page_id, page_size, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| entity_type | string | entity type | 
| entity_id | string | entity id | 
| id | string | review id | 
| user_id | string | user id | 
| media | string | media type e.g. image | video | video_file | video_link | 
| rating | array | rating filter, 1-5 | 
| attribute_rating | array | attribute rating filter | 
| facets | boolean | facets (true|false) | 
| sort | string | sort by : default | top | recent | 
| page_id | string | pagination page id | 
| page_size | string | pagination page size | 

This is used to get the list of customer reviews based on entity and provided filters.

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/XCursorGetResponse"
}`








Bad Request


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








Error Response:



---


#### Feedback#getTemplates
Get the templates for product or l3 type

```javascript
// Promise
const promise = feedback.getTemplates(template_id, entity_id, entity_type, );

// Async/Await
const data = await feedback.getTemplates(template_id, entity_id, entity_type, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| template_id | string | template id | 
| entity_id | string | entity id | 
| entity_type | string | entity type e.g. product | l3 | 

This is used to get the templates details.

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/XCursorGetResponse"
}`








Bad Request


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








Error Response:



---


#### Feedback#createQuestion
Create a new question

```javascript
// Promise
const promise = feedback.createQuestion();

// Async/Await
const data = await feedback.createQuestion();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

This is used to create a new question with following data:
tags, text, type, choices for MCQ type questions, maximum length of answer.

Success Response:



ok


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/XInsertResponse"
}`








Bad request


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








Error Response:



---


#### Feedback#updateQuestion
Update question

```javascript
// Promise
const promise = feedback.updateQuestion();

// Async/Await
const data = await feedback.updateQuestion();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

This is used to update question's status, tags and choices.

Success Response:



ok


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/XUpdateResponse"
}`








Bad request


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








Error Response:



---


#### Feedback#getQuestionAndAnswers
Get a list of QnA

```javascript
// Promise
const promise = feedback.getQuestionAndAnswers(entity_type, entity_id, id, show_answer, page_id, page_size, );

// Async/Await
const data = await feedback.getQuestionAndAnswers(entity_type, entity_id, id, show_answer, page_id, page_size, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| entity_type | string | entity type | 
| entity_id | string | entity id | 
| id | string | qna id | 
| show_answer | boolean | show answer flag | 
| page_id | string | pagination page id | 
| page_size | string | pagination page size | 

This is used to get a list of questions and its answers.

Success Response:



ok


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/XCursorGetResponse"
}`








Bad request


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








Error Response:



---


#### Feedback#getVotes
Get list of votes

```javascript
// Promise
const promise = feedback.getVotes(id, ref_type, );

// Async/Await
const data = await feedback.getVotes(id, ref_type, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| id | string | vote id | 
| ref_type | string | entity type e.g. review | comment | 

This is used to get the list of votes of a current logged in user. Votes can be filtered using `ref_type` i.e. review | comment.

Success Response:



ok


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/XNumberGetResponse"
}`








Bad request


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








Error Response:



---


#### Feedback#createVote
Create a new vote

```javascript
// Promise
const promise = feedback.createVote();

// Async/Await
const data = await feedback.createVote();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

This is used to create a new vote and the actions can be upvote or downvote.

Success Response:



ok


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/XInsertResponse"
}`








Bad request


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








Error Response:



---


#### Feedback#updateVote
Update vote

```javascript
// Promise
const promise = feedback.updateVote();

// Async/Await
const data = await feedback.updateVote();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

This is used to update the vote and the actions can be upvote or downvote.

Success Response:



ok


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/XUpdateResponse"
}`








Bad request


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ErrorResponse"
}`








Error Response:



---



---


---
---
