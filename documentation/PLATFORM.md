# FDK Platform Front API Documentaion


* [User](#User) - Authentication Service 
* [Payment](#Payment) - Collect payment through many payment gateway i.e Stripe, Razorpay, Juspay etc.into Fynd or Self account 
* [Catalog](#Catalog) - Catalog API's allows you to access list of products, prices, seller details, similar features, variants and many more useful features.  
* [CompanyProfile](#CompanyProfile) - Company Profile API's allows you to access list of products, prices, seller details, similar features, variants and many more useful features.  
* [Assets](#Assets) - File Storage 

----
----

### Classes and Methods


* [User](#User)
  * Methods
    * [getCustomers](#getcustomers)
    * [searchUsers](#searchusers)
    * [getPlatformConfig](#getplatformconfig)
    * [updatePlatformConfig](#updateplatformconfig)
    

* [Payment](#Payment)
  * Methods
    * [getBrandPaymentGatewayConfig](#getbrandpaymentgatewayconfig)
    * [saveBrandPaymentGatewayConfig](#savebrandpaymentgatewayconfig)
    * [updateBrandPaymentGatewayConfig](#updatebrandpaymentgatewayconfig)
    * [getPaymentModeRoutes](#getpaymentmoderoutes)
    * [getAllPayouts](#getallpayouts)
    * [savePayout](#savepayout)
    * [updatePayout](#updatepayout)
    * [activateAndDectivatePayout](#activateanddectivatepayout)
    * [deletePayout](#deletepayout)
    * [getSubscriptionPaymentMethod](#getsubscriptionpaymentmethod)
    * [deleteSubscriptionPaymentMethod](#deletesubscriptionpaymentmethod)
    * [getSubscriptionConfig](#getsubscriptionconfig)
    * [saveSubscriptionSetupIntent](#savesubscriptionsetupintent)
    

* [Catalog](#Catalog)
  * Methods
    * [deleteSearchKeywords](#deletesearchkeywords)
    * [updateSearchKeywords](#updatesearchkeywords)
    * [getSearchKeywords](#getsearchkeywords)
    * [createCustomKeyword](#createcustomkeyword)
    * [getAllSearchKeyword](#getallsearchkeyword)
    * [deleteAutocompleteKeyword](#deleteautocompletekeyword)
    * [updateAutocompleteKeyword](#updateautocompletekeyword)
    * [getAutocompleteKeywordDetail](#getautocompletekeyworddetail)
    * [createCustomAutocompleteRule](#createcustomautocompleterule)
    * [getAutocompleteConfig](#getautocompleteconfig)
    * [createProductBundle](#createproductbundle)
    * [getProductBundle](#getproductbundle)
    * [updateProductBundle](#updateproductbundle)
    * [getProductBundleDetail](#getproductbundledetail)
    * [createSizeGuide](#createsizeguide)
    * [getSizeGuides](#getsizeguides)
    * [updateSizeGuide](#updatesizeguide)
    * [getSizeGuide](#getsizeguide)
    * [getCatalogConfiguration](#getcatalogconfiguration)
    * [createConfigurationProductListing](#createconfigurationproductlisting)
    * [getConfigurations](#getconfigurations)
    * [createConfigurationByType](#createconfigurationbytype)
    * [getConfigurationByType](#getconfigurationbytype)
    * [getQueryFilters](#getqueryfilters)
    * [createCollection](#createcollection)
    * [getAllCollections](#getallcollections)
    * [getCollectionDetail](#getcollectiondetail)
    * [updateCollection](#updatecollection)
    * [deleteCollection](#deletecollection)
    * [addCollectionItems](#addcollectionitems)
    * [getCollectionItems](#getcollectionitems)
    * [getCatalogInsights](#getcataloginsights)
    * [getSellerInsights](#getsellerinsights)
    * [createMarketplaceOptin](#createmarketplaceoptin)
    * [getMarketplaceOptinDetail](#getmarketplaceoptindetail)
    * [getCompanyDetail](#getcompanydetail)
    * [getCompanyBrandDetail](#getcompanybranddetail)
    * [getCompanyMetrics](#getcompanymetrics)
    * [getStoreDetail](#getstoredetail)
    * [listProductTemplateCategories](#listproducttemplatecategories)
    * [listDepartmentData](#listdepartmentdata)
    * [getDepertmantsData](#getdepertmantsdata)
    * [listProductTemplate](#listproducttemplate)
    * [validateProductTemplate](#validateproducttemplate)
    * [downloadProductTemplateViews](#downloadproducttemplateviews)
    * [downloadProductTemplateView](#downloadproducttemplateview)
    * [validateProductTemplateSchema](#validateproducttemplateschema)
    * [listHSNCodes](#listhsncodes)
    * [listProductTemplateExportDetails](#listproducttemplateexportdetails)
    * [listTemplateBrandTypeValues](#listtemplatebrandtypevalues)
    * [createCategories](#createcategories)
    * [listCategories](#listcategories)
    * [updateCategory](#updatecategory)
    * [getCategoryData](#getcategorydata)
    * [createProduct](#createproduct)
    * [getProducts](#getproducts)
    * [deleteProduct](#deleteproduct)
    * [editProduct](#editproduct)
    * [getProduct](#getproduct)
    * [getProductValidation](#getproductvalidation)
    * [getProductSize](#getproductsize)
    * [updateProductAssetsInBulk](#updateproductassetsinbulk)
    * [getProductBulkUploadHistory](#getproductbulkuploadhistory)
    * [createProductsInBulk](#createproductsinbulk)
    * [deleteProductBulkJob](#deleteproductbulkjob)
    * [getCompanyTags](#getcompanytags)
    * [createProductAssetsInBulk](#createproductassetsinbulk)
    * [getProductAssetsInBulk](#getproductassetsinbulk)
    * [deleteSize](#deletesize)
    * [addInventory](#addinventory)
    * [getInventory](#getinventory)
    * [deleteInventory](#deleteinventory)
    * [createBulkInventoryJob](#createbulkinventoryjob)
    * [getInventoryBulkUploadHistory](#getinventorybulkuploadhistory)
    * [createBulkInventory](#createbulkinventory)
    * [deleteBulkInventoryJob](#deletebulkinventoryjob)
    * [createInventoryExportJob](#createinventoryexportjob)
    * [getInventoryExport](#getinventoryexport)
    * [exportInventoryConfig](#exportinventoryconfig)
    

* [CompanyProfile](#CompanyProfile)
  * Methods
    * [cbsOnboardGet](#cbsonboardget)
    * [updateCompany](#updatecompany)
    * [getCompanyMetrics](#getcompanymetrics)
    * [getBrand](#getbrand)
    * [editBrand](#editbrand)
    * [createBrand](#createbrand)
    * [getBrands](#getbrands)
    * [createBrand](#createbrand)
    * [getLocations](#getlocations)
    * [createLocation](#createlocation)
    * [getLocationDetail](#getlocationdetail)
    * [updateLocation](#updatelocation)
    

* [Assets](#Assets)
  * Methods
    * [companyCopyFiles](#companycopyfiles)
    * [appCopyFiles](#appcopyfiles)
    * [getSignUrls](#getsignurls)
    * [companyBrowse](#companybrowse)
    * [appBrowse](#appbrowse)
    * [proxy](#proxy)
    


---
---



## User


#### getCustomers
Gets list of customers

```javascript
// Promise
const promise = user.getCustomers(companyId,applicationId,q,pageSize,pageNo);

// Async/Await
const data = await user.getCustomers(companyId,applicationId,q,pageSize,pageNo);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID | 
| applicationId | string | Application ID | 
| q | string | The search query. This can be a partial or complete name of a either a product, brand or category | 
| pageSize | integer | Number of items to retrieve in each page. Default is 10. | 
| pageNo | integer | Page number. Default is 1. | 

Used to get application customers list

*Success Response:*



Customer list


Schema: `CustomerListResponseSchema`


*Examples:*


Success
```json
{
  "$ref": "#/components/examples/CustomersListResponse"
}
```











Schema: `AuthenticationApiError`











Schema: `AuthenticationApiError`









---


#### searchUsers
Search users

```javascript
// Promise
const promise = user.searchUsers(companyId,applicationId,q);

// Async/Await
const data = await user.searchUsers(companyId,applicationId,q);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID | 
| applicationId | string | Application ID | 
| q | string | The search query. This can be a partial or complete name of a either a product, brand or category | 

Search users

*Success Response:*



User list


Schema: `UserSearchResponseSchema`











Schema: `AuthenticationApiError`











Schema: `AuthenticationApiError`









---


#### getPlatformConfig
Get platform config

```javascript
// Promise
const promise = user.getPlatformConfig(companyId,applicationId);

// Async/Await
const data = await user.getPlatformConfig(companyId,applicationId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID | 
| applicationId | string | Application ID | 

Used to get platform config

*Success Response:*



Platform Config


Schema: `PlatformSchema`











Schema: `AuthenticationApiError`











Schema: `AuthenticationApiError`









---


#### updatePlatformConfig
Update platform config

```javascript
// Promise
const promise = user.updatePlatformConfig(companyId,applicationId,body);

// Async/Await
const data = await user.updatePlatformConfig(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID | 
| applicationId | string | Application ID | 

Used to update platform config

*Success Response:*



Platform Config


Schema: `PlatformSchema`











Schema: `AuthenticationApiError`











Schema: `AuthenticationApiError`









---



---


## Payment


#### getBrandPaymentGatewayConfig
Get All Brand Payment Gateway Config Secret

```javascript
// Promise
const promise = payment.getBrandPaymentGatewayConfig(companyId,applicationId);

// Async/Await
const data = await payment.getBrandPaymentGatewayConfig(companyId,applicationId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id | 
| applicationId | string | Application id | 

Get All Brand Payment Gateway Config Secret

*Success Response:*



Refund Transfer Mode


Schema: `PaymentGatewayConfigResponse`








Internal Server Error


Schema: `ErrorCodeDescription`








Internal Server Error


Schema: `ErrorCodeDescription`









---


#### saveBrandPaymentGatewayConfig
Save Config Secret For Brand Payment Gateway

```javascript
// Promise
const promise = payment.saveBrandPaymentGatewayConfig(companyId,applicationId,body);

// Async/Await
const data = await payment.saveBrandPaymentGatewayConfig(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id | 
| applicationId | string | Application id | 

Save Config Secret For Brand Payment Gateway

*Success Response:*



Save Config Secret For Brand Payment Gateway Success Response.


Schema: `PaymentGatewayToBeReviewed`








Bad Request Error


Schema: `HttpErrorCodeAndResponse`








Internal Server Error


Schema: `HttpErrorCodeAndResponse`









---


#### updateBrandPaymentGatewayConfig
Save Config Secret For Brand Payment Gateway

```javascript
// Promise
const promise = payment.updateBrandPaymentGatewayConfig(companyId,applicationId,body);

// Async/Await
const data = await payment.updateBrandPaymentGatewayConfig(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id | 
| applicationId | string | Application id | 

Save Config Secret For Brand Payment Gateway

*Success Response:*



Save Config Secret For Brand Payment Gateway Success Response.


Schema: `PaymentGatewayToBeReviewed`








Bad Request Error


Schema: `HttpErrorCodeAndResponse`








Internal Server Error


Schema: `HttpErrorCodeAndResponse`









---


#### getPaymentModeRoutes
Get All Valid Payment Options

```javascript
// Promise
const promise = payment.getPaymentModeRoutes(companyId,applicationId,refresh,requestType);

// Async/Await
const data = await payment.getPaymentModeRoutes(companyId,applicationId,refresh,requestType);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id | 
| applicationId | string | Application id | 
| refresh | boolean |  | 
| requestType | string |  | 

Use this API to get Get All Valid Payment Options for making payment

*Success Response:*



Success


Schema: `PaymentOptionsResponse`








Bad Request Error


Schema: `HttpErrorCodeAndResponse`








Internal Server Error


Schema: `HttpErrorCodeAndResponse`









---


#### getAllPayouts
Get All Payouts

```javascript
// Promise
const promise = payment.getAllPayouts(companyId,uniqueExternalId);

// Async/Await
const data = await payment.getAllPayouts(companyId,uniqueExternalId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id | 
| uniqueExternalId | string | Fetch payouts using unique external id | 

Get All Payouts

*Success Response:*



payouts response object


Schema: `PayoutsResponse`








Bad Request Error


Schema: `HttpErrorCodeAndResponse`








Internal Server Error


Schema: `HttpErrorCodeAndResponse`









---


#### savePayout
Save Payout

```javascript
// Promise
const promise = payment.savePayout(companyId,body);

// Async/Await
const data = await payment.savePayout(companyId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id | 

Save Payout

*Success Response:*



save payout response object


Schema: `PayoutResponse`








Bad Request Error


Schema: `HttpErrorCodeAndResponse`








Internal Server Error


Schema: `HttpErrorCodeAndResponse`









---


#### updatePayout
Update Payout

```javascript
// Promise
const promise = payment.updatePayout(companyId,uniqueTransferNo,body);

// Async/Await
const data = await payment.updatePayout(companyId,uniqueTransferNo,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id | 
| uniqueTransferNo | string | Unique transfer id | 

Update Payout

*Success Response:*



save payout response object


Schema: `UpdatePayoutResponse`








Bad Request Error


Schema: `HttpErrorCodeAndResponse`








Internal Server Error


Schema: `HttpErrorCodeAndResponse`









---


#### activateAndDectivatePayout
Partial Update Payout

```javascript
// Promise
const promise = payment.activateAndDectivatePayout(companyId,uniqueTransferNo,body);

// Async/Await
const data = await payment.activateAndDectivatePayout(companyId,uniqueTransferNo,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id | 
| uniqueTransferNo | string | Unique transfer id | 

Partial Update Payout

*Success Response:*



save payout response object


Schema: `UpdatePayoutResponse`








Bad Request Error


Schema: `HttpErrorCodeAndResponse`








Internal Server Error


Schema: `HttpErrorCodeAndResponse`









---


#### deletePayout
Delete Payout

```javascript
// Promise
const promise = payment.deletePayout(companyId,uniqueTransferNo);

// Async/Await
const data = await payment.deletePayout(companyId,uniqueTransferNo);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id | 
| uniqueTransferNo | string | Unique transfer id | 

Delete Payout

*Success Response:*



delete payout response object


Schema: `DeletePayoutResponse`








Bad Request Error


Schema: `HttpErrorCodeAndResponse`








Internal Server Error


Schema: `HttpErrorCodeAndResponse`









---


#### getSubscriptionPaymentMethod
List Subscription Payment Method

```javascript
// Promise
const promise = payment.getSubscriptionPaymentMethod(companyId);

// Async/Await
const data = await payment.getSubscriptionPaymentMethod(companyId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id | 

Get all  Subscription  Payment Method

*Success Response:*



List Subscription Payment Method Response


Schema: `SubscriptionPaymentMethodResponse`








Bad Request Error


Schema: `HttpErrorCodeAndResponse`








Internal Server Error


Schema: `HttpErrorCodeAndResponse`









---


#### deleteSubscriptionPaymentMethod
Delete Subscription Payment Method

```javascript
// Promise
const promise = payment.deleteSubscriptionPaymentMethod(companyId,uniqueExternalId,paymentMethodId);

// Async/Await
const data = await payment.deleteSubscriptionPaymentMethod(companyId,uniqueExternalId,paymentMethodId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id | 
| uniqueExternalId | string |  | 
| paymentMethodId | string |  | 

Uses this api to Delete Subscription Payment Method

*Success Response:*



Delete Subscription Payment Method Response.


Schema: `DeleteSubscriptionPaymentMethodResponse`








Internal Server Error


Schema: `HttpErrorCodeAndResponse`









---


#### getSubscriptionConfig
List Subscription Config

```javascript
// Promise
const promise = payment.getSubscriptionConfig(companyId);

// Async/Await
const data = await payment.getSubscriptionConfig(companyId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id | 

Get all  Subscription Config details

*Success Response:*



List Subscription Config Response


Schema: `SubscriptionConfigResponse`








Bad Request Error


Schema: `HttpErrorCodeAndResponse`








Internal Server Error


Schema: `HttpErrorCodeAndResponse`









---


#### saveSubscriptionSetupIntent
Save Subscription Setup Intent

```javascript
// Promise
const promise = payment.saveSubscriptionSetupIntent(companyId,body);

// Async/Await
const data = await payment.saveSubscriptionSetupIntent(companyId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id | 

Uses this api to Save Subscription Setup Intent

*Success Response:*



Save Subscription Setup Intent Response.


Schema: `SaveSubscriptionSetupIntentResponse`








Bad Request Error


Schema: `HttpErrorCodeAndResponse`








Internal Server Error


Schema: `HttpErrorCodeAndResponse`









---



---


## Catalog


#### deleteSearchKeywords
Delete a Search Keywords

```javascript
// Promise
const promise = catalog.deleteSearchKeywords(companyId,applicationId,id);

// Async/Await
const data = await catalog.deleteSearchKeywords(companyId,applicationId,id);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| applicationId | string | A `application_id` is a unique identifier for a particular sale channel. | 
| id | string | A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to delete. | 

Delete a keywords by it's id. Returns an object that tells whether the keywords was deleted successfully

*Success Response:*



Status object. Tells whether the operation was successful. See example below or refer `DeleteResponse`


Schema: `DeleteResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### updateSearchKeywords
Update Search Keyword

```javascript
// Promise
const promise = catalog.updateSearchKeywords(companyId,applicationId,id,body);

// Async/Await
const data = await catalog.updateSearchKeywords(companyId,applicationId,id,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| applicationId | string | A `application_id` is a unique identifier for a particular sale channel. | 
| id | string | A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to delete. | 

Update Search Keyword by its id. On successful request, returns the updated collection

*Success Response:*



The Collection object. See example below or refer `GetSearchWordsDataSchema` for details.


Schema: `GetSearchWordsData`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getSearchKeywords
Get a Search Keywords Details

```javascript
// Promise
const promise = catalog.getSearchKeywords(companyId,applicationId,id);

// Async/Await
const data = await catalog.getSearchKeywords(companyId,applicationId,id);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| applicationId | string | A `application_id` is a unique identifier for a particular sale channel. | 
| id | string | A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to retrieve. | 

Get the details of a words by its `id`. If successful, returns a Collection resource in the response body specified in `GetSearchWordsDetailResponseSchema`

*Success Response:*



The Collection object. See example below or refer `GetSearchWordsDetailResponseSchema` for details


Schema: `GetSearchWordsDetailResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### createCustomKeyword
Add a Custom Search Keywords

```javascript
// Promise
const promise = catalog.createCustomKeyword(companyId,applicationId,body);

// Async/Await
const data = await catalog.createCustomKeyword(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| applicationId | string | A `application_id` is a unique identifier for a particular sale channel. | 

Create a Custom Search Keywords. See `CreateSearchKeywordSchema` for the list of attributes needed to create a mapping and /collections/query-options for the available options to create a rule. On successful request, returns a paginated list of collections specified in `CreateSearchKeywordSchema`

*Success Response:*



Get keyword object with id that is added. See example below or refer `GetSearchWordsDataSchema` for details


Schema: `GetSearchWordsData`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getAllSearchKeyword
List all Search Custom Keyword Listing

```javascript
// Promise
const promise = catalog.getAllSearchKeyword(companyId,applicationId);

// Async/Await
const data = await catalog.getAllSearchKeyword(companyId,applicationId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| applicationId | string | A `application_id` is a unique identifier for a particular sale channel. | 

Custom Search Keyword allows you to map conditions with keywords to give you the ultimate results

*Success Response:*



List of custom search keywords. See example below or refer `GetSearchWordsResponseSchema` for details


Schema: `GetSearchWordsResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### deleteAutocompleteKeyword
Delete a Autocomplete Keywords

```javascript
// Promise
const promise = catalog.deleteAutocompleteKeyword(companyId,applicationId,id);

// Async/Await
const data = await catalog.deleteAutocompleteKeyword(companyId,applicationId,id);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| applicationId | string | A `application_id` is a unique identifier for a particular sale channel. | 
| id | string | A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to delete. | 

Delete a keywords by it's id. Returns an object that tells whether the keywords was deleted successfully

*Success Response:*



Status object. Tells whether the operation was successful. See example below or refer `DeleteResponse`


Schema: `DeleteResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### updateAutocompleteKeyword
Create & Update Autocomplete Keyword

```javascript
// Promise
const promise = catalog.updateAutocompleteKeyword(companyId,applicationId,id,body);

// Async/Await
const data = await catalog.updateAutocompleteKeyword(companyId,applicationId,id,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| applicationId | string | A `application_id` is a unique identifier for a particular sale channel. | 
| id | string | A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to delete. | 

Update a mapping by it's id. On successful request, returns the updated Keyword mapping

*Success Response:*



The Mapping object. See example below or refer `GetAutocompleteWordsResponseSchema` for details.


Schema: `GetAutocompleteWordsResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getAutocompleteKeywordDetail
Get a Autocomplete Keywords Details

```javascript
// Promise
const promise = catalog.getAutocompleteKeywordDetail(companyId,applicationId,id);

// Async/Await
const data = await catalog.getAutocompleteKeywordDetail(companyId,applicationId,id);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| applicationId | string | A `application_id` is a unique identifier for a particular sale channel. | 
| id | string | A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to retrieve. | 

Get the details of a words by its `id`. If successful, returns a keywords resource in the response body specified in `GetAutocompleteWordsResponseSchema`

*Success Response:*



The mapping object. See example below or refer `GetAutocompleteWordsResponseSchema` for details


Schema: `GetAutocompleteWordsResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### createCustomAutocompleteRule
Add a Custom Autocomplete Keywords

```javascript
// Promise
const promise = catalog.createCustomAutocompleteRule(companyId,applicationId,body);

// Async/Await
const data = await catalog.createCustomAutocompleteRule(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| applicationId | string | A `application_id` is a unique identifier for a particular sale channel. | 

Create a Custom Autocomplete Keywords. See `CreateAutocompleteKeywordSchema` for the list of attributes needed to create a mapping and /collections/query-options for the available options to create a rule. On successful request, returns a paginated list of collections specified in `CreateAutocompleteKeywordSchema`

*Success Response:*



List of all the collections including the one you added. See example below or refer `CreateAutocompleteWordsResponseSchema` for details


Schema: `CreateAutocompleteWordsResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getAutocompleteConfig
List all Autocomplete Keyword Listing

```javascript
// Promise
const promise = catalog.getAutocompleteConfig(companyId,applicationId);

// Async/Await
const data = await catalog.getAutocompleteConfig(companyId,applicationId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| applicationId | string | A `application_id` is a unique identifier for a particular sale channel. | 

Custom Autocomplete Keyword allows you to map conditions with keywords to give you the ultimate results

*Success Response:*



List of custom autocomplete keywords. See example below or refer `GetAutocompleteWordsResponseSchema` for details


Schema: `GetAutocompleteWordsResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### createProductBundle
Create Product Bundle

```javascript
// Promise
const promise = catalog.createProductBundle(companyId,body);

// Async/Await
const data = await catalog.createProductBundle(companyId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 

Create Product Bundle. See `ProductBundleRequest` for the request body parameter need to create a product bundle. On successful request, returns in `ProductBundleRequest` with id

*Success Response:*



Get bundle with id that is added. See example below or refer `GetProductBundleCreateResponse` for details


Schema: `GetProductBundleCreateResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getProductBundle
List all Product Bundles

```javascript
// Promise
const promise = catalog.getProductBundle(companyId,q);

// Async/Await
const data = await catalog.getProductBundle(companyId,q);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| q | string | A search string that is searched with product bundle name. | 

Get all product bundles for a particular company

*Success Response:*



List of bundle configured for a company. See example below or refer `GetProductBundleListingResponse` for details


Schema: `GetProductBundleListingResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### updateProductBundle
Update a Product Bundle

```javascript
// Promise
const promise = catalog.updateProductBundle(companyId,id,body);

// Async/Await
const data = await catalog.updateProductBundle(companyId,id,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| id | string | A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to delete. | 

Update a Product Bundle by its id. On successful request, returns the updated product bundle

*Success Response:*



The Collection object. See example below or refer `GetProductBundleCreateResponse` for details.


Schema: `GetProductBundleCreateResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getProductBundleDetail
Get a particular Product Bundle details

```javascript
// Promise
const promise = catalog.getProductBundleDetail(companyId,id);

// Async/Await
const data = await catalog.getProductBundleDetail(companyId,id);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| id | string | A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to retrieve. | 

Get a particular Bundle details by its `id`. If successful, returns a Product bundle resource in the response body specified in `GetProductBundleResponse`

*Success Response:*



The Collection object. See example below or refer `GetProductBundleResponse` for details


Schema: `GetProductBundleResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### createSizeGuide
Create a size guide.

```javascript
// Promise
const promise = catalog.createSizeGuide(companyId,body);

// Async/Await
const data = await catalog.createSizeGuide(companyId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Id of the company inside which the size guide is to be created. | 

This API allows to create a size guide associated to a brand.

*Success Response:*



Returns a success response


Schema: `SuccessResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getSizeGuides
Get list of size guides

```javascript
// Promise
const promise = catalog.getSizeGuides(companyId,active,q,tag,pageNo,pageSize);

// Async/Await
const data = await catalog.getSizeGuides(companyId,active,q,tag,pageNo,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Id of the company for which the size guides are to be fetched. | 
| active | boolean | filter size guide on basis of active, in-active | 
| q | string | Query that is to be searched. | 
| tag | string | to filter size guide on basis of tag. | 
| pageNo | integer | The page number to navigate through the given set of results | 
| pageSize | integer | Number of items to retrieve in each page. Default is 10. | 

This API allows to view all the size guides associated to the seller.

*Success Response:*



Size guide object. See example below or refer `ListSizeGuide` for details


Schema: `ListSizeGuide`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### updateSizeGuide
Edit a size guide.

```javascript
// Promise
const promise = catalog.updateSizeGuide(companyId,id,body);

// Async/Await
const data = await catalog.updateSizeGuide(companyId,id,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Id of the company. | 
| id | string | Mongo id of the size guide to be edited | 

This API allows to edit a size guide.

*Success Response:*



Returns a success response


Schema: `SuccessResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getSizeGuide
Get a single size guide.

```javascript
// Promise
const promise = catalog.getSizeGuide(companyId,id);

// Async/Await
const data = await catalog.getSizeGuide(companyId,id);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Id of the company associated to size guide. | 
| id | string | Id of the size guide to be viewed. | 

This API helps to get data associated to a size guide.

*Success Response:*



Brand object. See example below or refer `SizeGuideResponseSchema` for details


Schema: `SizeGuideResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getCatalogConfiguration
Get configuration meta  details for catalog for admin panel

```javascript
// Promise
const promise = catalog.getCatalogConfiguration(companyId,applicationId);

// Async/Await
const data = await catalog.getCatalogConfiguration(companyId,applicationId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| applicationId | string | A `application_id` is a unique identifier for a particular sale channel. | 

configuration meta  details for catalog.

*Success Response:*



configuration details for catalog. See example below or refer `GetCatalogConfigurationMetaDataSchema` for details


Schema: `GetCatalogConfigurationMetaData`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### createConfigurationProductListing
Add configuration for products & listings

```javascript
// Promise
const promise = catalog.createConfigurationProductListing(companyId,applicationId,body);

// Async/Await
const data = await catalog.createConfigurationProductListing(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| applicationId | string | A `application_id` is a unique identifier for a particular sale channel. | 

Add configuration for products & listing.

*Success Response:*



success flag will tell whether the operation was successful.


Schema: `GetAppCatalogConfiguration`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getConfigurations
Get configured details for catalog

```javascript
// Promise
const promise = catalog.getConfigurations(companyId,applicationId);

// Async/Await
const data = await catalog.getConfigurations(companyId,applicationId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| applicationId | string | A `application_id` is a unique identifier for a particular sale channel. | 

configured details for catalog.

*Success Response:*



Get application level configured catalog details. See example below or refer `GetAppCatalogConfigurationSchema` for details


Schema: `GetAppCatalogConfiguration`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### createConfigurationByType
Add configuration for categories and brands

```javascript
// Promise
const promise = catalog.createConfigurationByType(companyId,applicationId,type,body);

// Async/Await
const data = await catalog.createConfigurationByType(companyId,applicationId,type,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| applicationId | string | A `application_id` is a unique identifier for a particular sale channel. | 
| type | string | type can be brands, categories etc. | 

Add configuration for categories & brands.

*Success Response:*



success flag will tell whether the operation was successful.


Schema: `GetAppCatalogConfiguration`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getConfigurationByType
Get configured details for catalog

```javascript
// Promise
const promise = catalog.getConfigurationByType(companyId,applicationId,type);

// Async/Await
const data = await catalog.getConfigurationByType(companyId,applicationId,type);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| applicationId | string | A `application_id` is a unique identifier for a particular sale channel. | 
| type | string | type can be brands, categories etc. | 

configured details for catalog.

*Success Response:*



Get application level configured catalog details. See example below or refer `GetAppCatalogEntityConfigurationSchema` for details


Schema: `GetAppCatalogEntityConfiguration`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getQueryFilters
Get query filters to configure a collection

```javascript
// Promise
const promise = catalog.getQueryFilters(companyId,applicationId);

// Async/Await
const data = await catalog.getQueryFilters(companyId,applicationId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| applicationId | string | A `application_id` is a unique identifier for a particular sale channel. | 

Get query filters to configure a collection

*Success Response:*



The attached items of an collection. See example below or refer `GetCollectionQueryOptionResponse` for details


Schema: `GetCollectionQueryOptionResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### createCollection
Add a Collection

```javascript
// Promise
const promise = catalog.createCollection(companyId,applicationId,body);

// Async/Await
const data = await catalog.createCollection(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| applicationId | string | A `application_id` is a unique identifier for a particular sale channel. | 

Create a collection. See `CreateCollectionRequestSchema` for the list of attributes needed to create a collection and collections/query-options for the available options to create a collection. On successful request, returns a paginated list of collections specified in `CollectionCreateResponse`

*Success Response:*



List of all the collections including the one you added. See example below or refer `CollectionCreateResponse` for details


Schema: `CollectionCreateResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getAllCollections
List all the collections

```javascript
// Promise
const promise = catalog.getAllCollections(companyId,applicationId);

// Async/Await
const data = await catalog.getAllCollections(companyId,applicationId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| applicationId | string | A `application_id` is a unique identifier for a particular sale channel. | 

A Collection allows you to organize your products into hierarchical groups. For example, a dress might be in the category _Clothing_, the individual product might also be in the collection _Summer_. On successful request, returns all the collections as specified in `CollectionListingSchema`

*Success Response:*



List of collections. See example below or refer `GetCollectionListingResponse` for details


Schema: `GetCollectionListingResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getCollectionDetail
Get a particular collection

```javascript
// Promise
const promise = catalog.getCollectionDetail(companyId,applicationId,slug);

// Async/Await
const data = await catalog.getCollectionDetail(companyId,applicationId,slug);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| applicationId | string | A `application_id` is a unique identifier for a particular sale channel. | 
| slug | string | A `slug` is a human readable, URL friendly unique identifier of an object. Pass the `slug` of the collection which you want to retrieve. | 

Get the details of a collection by its `slug`. If successful, returns a Collection resource in the response body specified in `CollectionDetailResponse`

*Success Response:*



The Collection object. See example below or refer `CollectionDetailResponse` for details


Schema: `CollectionDetailResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### updateCollection
Update a collection

```javascript
// Promise
const promise = catalog.updateCollection(companyId,applicationId,id);

// Async/Await
const data = await catalog.updateCollection(companyId,applicationId,id);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| applicationId | string | A `application_id` is a unique identifier for a particular sale channel. | 
| id | string | A `id` is a unique identifier of a collection. | 

Update a collection by it's id. On successful request, returns the updated collection

*Success Response:*



The Collection object. See example below or refer `CollectionCreateResponse` for details.


Schema: `CollectionCreateResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### deleteCollection
Delete a Collection

```javascript
// Promise
const promise = catalog.deleteCollection(companyId,applicationId,id);

// Async/Await
const data = await catalog.deleteCollection(companyId,applicationId,id);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| applicationId | string | A `application_id` is a unique identifier for a particular sale channel. | 
| id | string | A `id` is a unique identifier of a collection. | 

Delete a collection by it's id. Returns an object that tells whether the collection was deleted successfully

*Success Response:*



Status object. Tells whether the operation was successful. See example below or refer `DeleteResponse`


Schema: `DeleteResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### addCollectionItems
Add items to a collection

```javascript
// Promise
const promise = catalog.addCollectionItems(companyId,applicationId,id,body);

// Async/Await
const data = await catalog.addCollectionItems(companyId,applicationId,id,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| applicationId | string | A `application_id` is a unique identifier for a particular sale channel. | 
| id | string | A `id` is a unique identifier of a collection. | 

Adds items to a collection specified by its `id`. See `CollectionItemRequest` for the list of attributes needed to add items to an collection.

*Success Response:*



Status object. Tells whether the operation was successful.


Schema: `UpdatedResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getCollectionItems
Get the items for a collection

```javascript
// Promise
const promise = catalog.getCollectionItems(companyId,applicationId,id,sortOn,pageId,pageSize);

// Async/Await
const data = await catalog.getCollectionItems(companyId,applicationId,id,sortOn,pageId,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| applicationId | string | A `application_id` is a unique identifier for a particular sale channel. | 
| id | string | A `id` is a unique identifier of a collection. | 
| sortOn | string | Each response will contain sort_on param, which should be sent back to make pagination work. | 
| pageId | string | Each response will contain next_page_id param, which should be sent back to make pagination work. | 
| pageSize | integer | Number of items to retrieve in each page. Default is 12. | 

Get items from a collection specified by its `id`.

*Success Response:*



The attached items of an collection. See example below or refer `GetCollectionItemsResponseSchema` for details


Schema: `GetCollectionItemsResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getCatalogInsights
Analytics data of catalog and inventory.

```javascript
// Promise
const promise = catalog.getCatalogInsights(companyId,applicationId,brand);

// Async/Await
const data = await catalog.getCatalogInsights(companyId,applicationId,brand);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| applicationId | string | A `application_id` is a unique identifier for a particular sale channel. | 
| brand | string | Brand slug | 

Catalog Insights api returns the count of catalog related data like products, brands, departments and categories that have been made live as per configuration of the app.

*Success Response:*



Response Data


Schema: `CatalogInsightResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getSellerInsights
Analytics data of catalog and inventory that are being cross-selled.

```javascript
// Promise
const promise = catalog.getSellerInsights(companyId,sellerAppId);

// Async/Await
const data = await catalog.getSellerInsights(companyId,sellerAppId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| sellerAppId | string | Id of the seller application which is serving the invetory/catalog of the company | 

Analytics data of catalog and inventory that are being cross-selled.

*Success Response:*



Response Data


Schema: `CrossSellingResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### createMarketplaceOptin
Create/Update opt-in infomation.

```javascript
// Promise
const promise = catalog.createMarketplaceOptin(companyId,marketplace,body);

// Async/Await
const data = await catalog.createMarketplaceOptin(companyId,marketplace,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | The company id for which the detail needs to be retrieved. | 
| marketplace | string | The marketplace for which the detail needs to be retrieved. | 

Use this API to create/update opt-in information for given platform. If successful, returns data in the response body as specified in `OptInPostResponseSchema`

*Success Response:*



See example below or refer `UpdatedResponse` for details.


Schema: `UpdatedResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getMarketplaceOptinDetail
Get opt-in infomation.

```javascript
// Promise
const promise = catalog.getMarketplaceOptinDetail(companyId);

// Async/Await
const data = await catalog.getMarketplaceOptinDetail(companyId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer |  | 

Use this API to fetch opt-in information for all the platforms. If successful, returns a logs in the response body as specified in `GetOptInPlatformSchema`

*Success Response:*



See example below or refer `GetOptInPlatformSchema` for details.


Schema: `GetOptInPlatform`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getCompanyDetail
Get the Company details.

```javascript
// Promise
const promise = catalog.getCompanyDetail(companyId);

// Async/Await
const data = await catalog.getCompanyDetail(companyId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | The company id for which the detail needs to be retrieved. | 

Get the details of the company associated with the given company_id passed.

*Success Response:*



See example below or refer `OptinCompanyDetailSchema` for details


Schema: `OptinCompanyDetail`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getCompanyBrandDetail
Get the Company Brand details of Optin.

```javascript
// Promise
const promise = catalog.getCompanyBrandDetail(companyId,isActive,q,pageNo,pageSize,marketplace);

// Async/Await
const data = await catalog.getCompanyBrandDetail(companyId,isActive,q,pageNo,pageSize,marketplace);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | The company id for which the detail needs to be retrieved. | 
| isActive | boolean | The is_active status for the optin id. | 
| q | boolean | The search value to filter the list. | 
| pageNo | integer | The number of page for the company id. | 
| pageSize | integer | Number of records that can be seen on the page for the company id. | 
| marketplace | string | The marketplace platform associated with the company id. | 

Get the details of the Brands associated with the given company_id passed.

*Success Response:*



See example below or refer `OptinCompanyBrandDetailsView` for details


Schema: `OptinCompanyBrandDetailsView`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getCompanyMetrics
Get the Company metrics

```javascript
// Promise
const promise = catalog.getCompanyMetrics(companyId);

// Async/Await
const data = await catalog.getCompanyMetrics(companyId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | The company id for which the detail needs to be retrieved. | 

Get the Company metrics associated with the company ID passed.

*Success Response:*



See example below or refer `OptinCompanyMetrics` for details


Schema: `OptinCompanyMetrics`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getStoreDetail
Get the Store details.

```javascript
// Promise
const promise = catalog.getStoreDetail(companyId,q,pageNo,pageSize);

// Async/Await
const data = await catalog.getStoreDetail(companyId,q,pageNo,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | The company id for which the detail needs to be retrieved. | 
| q | string | The search related the store for the company id. | 
| pageNo | integer | The number of page for the company id. | 
| pageSize | integer | Number of records that can be seen on the page for the company id. | 

Get the details of the store associated with the company ID passed.

*Success Response:*



See example below or refer `OptinStoreDetailsSchema` for details


Schema: `OptinStoreDetails`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### listProductTemplateCategories
List Department specifiec product categories

```javascript
// Promise
const promise = catalog.listProductTemplateCategories(companyId,department,itemType);

// Async/Await
const data = await catalog.listProductTemplateCategories(companyId,department,itemType);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| department | string | A `department` is name of a departments whose category needs to be listed. Can specify multiple departments. | 
| itemType | string | An `item_type` is the type of item, it can be `set`, `standard`, `digital`, etc. | 

Allows you to list all product categories values for the departments specified

*Success Response:*



List of all categories attached to departments specified. See example below or refer `ProdcutTemplateCategoriesResponse` for details


Schema: `ProdcutTemplateCategoriesResponse`








Bad request. See the error object in the response body for specific reason


Schema: `PTErrorResponse`









---


#### listDepartmentData
List all Departments

```javascript
// Promise
const promise = catalog.listDepartmentData(companyId);

// Async/Await
const data = await catalog.listDepartmentData(companyId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 

Allows you to list all departments, also can search using name and filter active and incative departments, and item type

*Success Response:*



List of custom search keywords. See example below or refer `DepartmentsResponse` for details


Schema: `DepartmentsResponse`








Bad request. See the error object in the response body for specific reason


Schema: `DepartmentErrorResponse`









---


#### getDepertmantsData
Get specific departments details by passing in unique id of the department

```javascript
// Promise
const promise = catalog.getDepertmantsData(companyId,uid);

// Async/Await
const data = await catalog.getDepertmantsData(companyId,uid);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| uid | string | A `uid` is a unique identifier of a department. | 

Allows you to get department data, by uid

*Success Response:*



Departments Data. See example below or refer `DepartmentsResponse` for details


Schema: `DepartmentsResponse`








Bad request. See the error object in the response body for specific reason


Schema: `DepartmentErrorResponse`









---


#### listProductTemplate
List all Templates

```javascript
// Promise
const promise = catalog.listProductTemplate(companyId,departments);

// Async/Await
const data = await catalog.listProductTemplate(companyId,departments);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| departments | string | A `departments` is the name of a particular department. | 

Allows you to list all product templates, also can filter by department

*Success Response:*



List of custom search keywords. See example below or refer `TemplatesResponse` for details


Schema: `TemplatesResponse`








Bad request. See the error object in the response body for specific reason


Schema: `PTErrorResponse`









---


#### validateProductTemplate
Validate Product Template Schema

```javascript
// Promise
const promise = catalog.validateProductTemplate(companyId,slug);

// Async/Await
const data = await catalog.validateProductTemplate(companyId,slug);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| slug | string | A `slug` is a unique identifier for a particular template. | 

Allows you to list all product templates validation values for all the fields present in the database

*Success Response:*



List of fields and validation values fro each. See example below or refer `TemplatesValidationResponse` for details


Schema: `TemplatesValidationResponse`








Bad request. See the error object in the response body for specific reason


Schema: `PTErrorResponse`









---


#### downloadProductTemplateViews
Download Product Template View

```javascript
// Promise
const promise = catalog.downloadProductTemplateViews(companyId,slug);

// Async/Await
const data = await catalog.downloadProductTemplateViews(companyId,slug);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| slug | string | A `slug` is a unique identifier for a particular template. | 

Allows you to download product template data

*Success Response:*



CSV File of product template data. See example below or refer `TemplatesResponse` for details


Schema: `string`








Bad request. See the error object in the response body for specific reason


Schema: `PTErrorResponse`









---


#### downloadProductTemplateView
Download Product Template View

```javascript
// Promise
const promise = catalog.downloadProductTemplateView(companyId,itemType);

// Async/Await
const data = await catalog.downloadProductTemplateView(companyId,itemType);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| itemType | string | An `item_type` defines the type of item. | 

Allows you to download product template data

*Success Response:*



CSV File of product template data.


Schema: `string`








Bad request. See the error object in the response body for specific reason


Schema: `PTErrorResponse`









---


#### validateProductTemplateSchema
Validate Product Template Schema

```javascript
// Promise
const promise = catalog.validateProductTemplateSchema(companyId,itemType);

// Async/Await
const data = await catalog.validateProductTemplateSchema(companyId,itemType);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| itemType | string | An `item_type` defines the type of item. The default value is standard. | 

Allows you to list all product templates validation values for all the fields present in the database

*Success Response:*



List of fields and validation values fro each. See example below or refer `InventoryValidationResponse` for details


Schema: `InventoryValidationResponse`








Bad request. See the error object in the response body for specific reason


Schema: `PTErrorResponse`









---


#### listHSNCodes
List HSN Codes

```javascript
// Promise
const promise = catalog.listHSNCodes(companyId);

// Async/Await
const data = await catalog.listHSNCodes(companyId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 

Allows you to list all hsn Codes

*Success Response:*



List of all HSN Codes. See example below or refer `HSNCodesResponse` for details


Schema: `HSNCodesResponse`








Bad request. See the error object in the response body for specific reason


Schema: `PTErrorResponse`









---


#### listProductTemplateExportDetails
Allows you to list all product templates export list details

```javascript
// Promise
const promise = catalog.listProductTemplateExportDetails(companyId);

// Async/Await
const data = await catalog.listProductTemplateExportDetails(companyId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 

Can vies details including trigger data, task id , etc.

*Success Response:*



List of custom search keywords. See example below or refer `TemplatesResponse` for details


Schema: `TemplatesResponse`








Bad request. See the error object in the response body for specific reason


Schema: `PTErrorResponse`









---


#### listTemplateBrandTypeValues
Allows you to list all values for Templates, Brands or Type

```javascript
// Promise
const promise = catalog.listTemplateBrandTypeValues(companyId,filter);

// Async/Await
const data = await catalog.listTemplateBrandTypeValues(companyId,filter);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| filter | string | A `filter` is the unique identifier of the type of value required. | 

The filter type query parameter defines what type of data to return. The type of query returns the valid values for the same

*Success Response:*



List of Templates, Brands or Types. See example below or refer `ProductConfligurationDownloads` for details


Schema: `ProductConfligurationDownloads`








Bad request. See the error object in the response body for specific reason


Schema: `PTErrorResponse`









---


#### createCategories
Create product categories

```javascript
// Promise
const promise = catalog.createCategories(companyId,body);

// Async/Await
const data = await catalog.createCategories(companyId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 

This API lets user create product categories

*Success Response:*



Category Meta. See example below or refer `CategoryCreateResponse` for details


Schema: `CategoryCreateResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### listCategories
Get product categories list

```javascript
// Promise
const promise = catalog.listCategories(companyId,level,q);

// Async/Await
const data = await catalog.listCategories(companyId,level,q);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| level | string | Get category for multiple levels | 
| q | string | Get multiple categories filtered by search string | 

This API gets meta associated to product categories.

*Success Response:*



Category Meta. See example below or refer `CategoryResponse` for details


Schema: `CategoryResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### updateCategory
Update product categories

```javascript
// Promise
const promise = catalog.updateCategory(companyId,uid,body);

// Async/Await
const data = await catalog.updateCategory(companyId,uid,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| uid | string | Category unique id | 

Update a product category using this apu

*Success Response:*



Category Meta. See example below or refer `CategoryUpdateResponse` for details


Schema: `CategoryUpdateResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getCategoryData
Get product category by uid

```javascript
// Promise
const promise = catalog.getCategoryData(companyId,uid);

// Async/Await
const data = await catalog.getCategoryData(companyId,uid);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| uid | string | Category unique id | 

This API gets meta associated to product categories.

*Success Response:*



Category Meta. See example below or refer `CategorySchema` for details


Schema: `Category`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### createProduct
Create a product.

```javascript
// Promise
const promise = catalog.createProduct(companyId,body);

// Async/Await
const data = await catalog.createProduct(companyId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Id of the company associated to product that is to be viewed. | 

This API allows to create product.

*Success Response:*



Returns a success response


Schema: `SuccessResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getProducts
Get product list

```javascript
// Promise
const promise = catalog.getProducts(companyId,brandIds,categoryIds,search,pageNo,pageSize);

// Async/Await
const data = await catalog.getProducts(companyId,brandIds,categoryIds,search,pageNo,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | number | Get list of products filtered by company Id | 
| brandIds | number | Get multiple products filtered by brand Ids | 
| categoryIds | number | Get multiple products filtered by category Ids | 
| search | string | Get multiple products filtered by search string | 
| pageNo | integer | The page number to navigate through the given set of results | 
| pageSize | integer | Number of items to retrieve in each page. Default is 10. | 

This API gets meta associated to products.

*Success Response:*



Product Meta. See example below for details


Schema: `ProductListingResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### deleteProduct
Delete a product.

```javascript
// Promise
const promise = catalog.deleteProduct(companyId,itemId);

// Async/Await
const data = await catalog.deleteProduct(companyId,itemId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id of the company associated to product that is to be deleted. | 
| itemId | integer | Id of the product to be updated. | 

This API allows to delete product.

*Success Response:*



Returns a success response


Schema: `SuccessResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### editProduct
Edit a product.

```javascript
// Promise
const promise = catalog.editProduct(companyId,itemId,body);

// Async/Await
const data = await catalog.editProduct(companyId,itemId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Id of the company associated to product that is to be viewed. | 
| itemId | integer | Id of the product to be updated. | 

This API allows to edit product.

*Success Response:*



Returns a success response


Schema: `SuccessResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getProduct
Get a single product.

```javascript
// Promise
const promise = catalog.getProduct(companyId,itemId,itemCode,brandUid,uid);

// Async/Await
const data = await catalog.getProduct(companyId,itemId,itemCode,brandUid,uid);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| itemCode | string | Item code of the product. | 
| companyId | integer | Company Id of the product. | 
| itemId | integer | Item Id of the product. | 
| brandUid | integer | Brand Id of the product. | 
| uid | integer | Id of the product. | 

This API helps to get data associated to a particular product.

*Success Response:*



Product object. See example below or refer `product.utils.format_product_response` for details


Schema: `Product`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getProductValidation
Validate product/size data

```javascript
// Promise
const promise = catalog.getProductValidation(companyId);

// Async/Await
const data = await catalog.getProductValidation(companyId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | number | Validates data against given company | 

This API validates product data.

*Success Response:*



Validate Meta. See example below for details


Schema: `ValidateProduct`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getProductSize
Get a single product size.

```javascript
// Promise
const promise = catalog.getProductSize(companyId,itemId,itemCode,brandUid,uid);

// Async/Await
const data = await catalog.getProductSize(companyId,itemId,itemCode,brandUid,uid);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| itemCode | string | Item code of the product size. | 
| companyId | integer | Company Id of the product size. | 
| itemId | integer | Item Id of the product size. | 
| brandUid | integer | Brand Id of the product size. | 
| uid | integer | Id of the product size. | 

This API helps to get data associated to a particular product size.

*Success Response:*



Product object. See example below for details


Schema: `ProductListingResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### updateProductAssetsInBulk
Create a Bulk asset upload Job.

```javascript
// Promise
const promise = catalog.updateProductAssetsInBulk(companyId,body);

// Async/Await
const data = await catalog.updateProductAssetsInBulk(companyId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id in which assets to be uploaded. | 

This API helps to create a bulk asset upload job.

*Success Response:*



Returns a success response


Schema: `SuccessResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getProductBulkUploadHistory
Get a list of all bulk product upload jobs.

```javascript
// Promise
const promise = catalog.getProductBulkUploadHistory(companyId,pageNo,pageSize);

// Async/Await
const data = await catalog.getProductBulkUploadHistory(companyId,pageNo,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id of of which Product Bulk Upload History to be obtained. | 
| pageNo | integer | The page number to navigate through the given set of results | 
| pageSize | integer | Number of items to retrieve in each page. Default is 12. | 

This API helps to get bulk product upload jobs data.

*Success Response:*



List of bulk product upload jobs. See `BulkRequestGetSchema` for details


Schema: `ProductBulkRequestList`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### createProductsInBulk
Create products in bulk associated with given batch Id.

```javascript
// Promise
const promise = catalog.createProductsInBulk(companyId,batchId,body);

// Async/Await
const data = await catalog.createProductsInBulk(companyId,batchId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id in which assets to be uploaded. | 
| batchId | string | Batch Id in which assets to be uploaded. | 

This API helps to create products in bulk push to kafka for approval/creation.

*Success Response:*



Returns a success response


Schema: `SuccessResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### deleteProductBulkJob
Delete Bulk product job.

```javascript
// Promise
const promise = catalog.deleteProductBulkJob(companyId,batchId);

// Async/Await
const data = await catalog.deleteProductBulkJob(companyId,batchId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id of the company associated to size that is to be deleted. | 
| batchId | integer | Batch Id of the bulk product job to be deleted. | 

This API allows to delete bulk product job associated with company.

*Success Response:*



Returns a success response


Schema: `SuccessResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getCompanyTags
Get a list of all tags associated with company.

```javascript
// Promise
const promise = catalog.getCompanyTags(companyId);

// Async/Await
const data = await catalog.getCompanyTags(companyId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id of the product size. | 

This API helps to get tags data associated to a particular copmpany.

*Success Response:*



Tag List. See example below for details


Schema: `ProductTagsViewResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### createProductAssetsInBulk
Create a Bulk asset upload Job.

```javascript
// Promise
const promise = catalog.createProductAssetsInBulk(companyId,body);

// Async/Await
const data = await catalog.createProductAssetsInBulk(companyId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id in which assets to be uploaded. | 

This API helps to create a bulk asset upload job.

*Success Response:*



Returns a success response


Schema: `SuccessResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getProductAssetsInBulk
Get a list of all bulk asset jobs.

```javascript
// Promise
const promise = catalog.getProductAssetsInBulk(companyId,pageNo,pageSize);

// Async/Await
const data = await catalog.getProductAssetsInBulk(companyId,pageNo,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id of the product size. | 
| pageNo | integer | The page number to navigate through the given set of results | 
| pageSize | integer | Number of items to retrieve in each page. Default is 12. | 

This API helps to get bulk asset jobs data associated to a particular company.

*Success Response:*



List of bulk asset jobs List. See `BulkUtil.modify_batch_response` for details


Schema: `BulkAssetResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### deleteSize
Delete a Size associated with product.

```javascript
// Promise
const promise = catalog.deleteSize(companyId,itemId,size);

// Async/Await
const data = await catalog.deleteSize(companyId,itemId,size);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id of the company associated to size that is to be deleted. | 
| itemId | integer | Item Id of the product associated with size to be deleted. | 
| size | integer | size to be deleted. | 

This API allows to delete size associated with product.

*Success Response:*



Returns a success response


Schema: `SuccessResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### addInventory
Add Inventory for particular size and store.

```javascript
// Promise
const promise = catalog.addInventory(companyId,itemId,size,body);

// Async/Await
const data = await catalog.addInventory(companyId,itemId,size,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Id of the company associated to product that is to be viewed. | 
| itemId | number | Item of the company associated to product that is to be viewed. | 
| size | string | Size in which inventory is to be added. | 

This API allows add Inventory for particular size and store.

*Success Response:*



Returns a success response


Schema: `SuccessResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getInventory
Get Inventory for company

```javascript
// Promise
const promise = catalog.getInventory(companyId,itemId,size,pageNo,pageSize);

// Async/Await
const data = await catalog.getInventory(companyId,itemId,size,pageNo,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Id of the company associated to product that is to be viewed. | 
| itemId | string | Item code of the product of which size is to be get. | 
| size | string | Size of which inventory is to get. | 
| pageNo | integer | The page number to navigate through the given set of results | 
| pageSize | integer | Number of items to retrieve in each page. Default is 12. | 

This API allows get Inventory data for particular company grouped by size and store.

*Success Response:*



returns a list of all inventory grouped by size and store


Schema: `InventoryRequest1`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### deleteInventory
Delete a Inventory.

```javascript
// Promise
const promise = catalog.deleteInventory(companyId,itemId,locationId);

// Async/Await
const data = await catalog.deleteInventory(companyId,itemId,locationId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id of the company associated with Inventory that is to be deleted. | 
| itemId | integer | Id of the product associated with Inventory to be deleted. | 
| locationId | number | Location ID of store of which inventory is to be deleted. | 

This API allows to delete inventory of a particular product for particular company.

*Success Response:*



Returns a success response


Schema: `SuccessResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### createBulkInventoryJob
Create a Bulk Inventory upload Job.

```javascript
// Promise
const promise = catalog.createBulkInventoryJob(companyId,body);

// Async/Await
const data = await catalog.createBulkInventoryJob(companyId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id in which Inventory to be uploaded. | 

This API helps to create a bulk Inventory upload job.

*Success Response:*



Returns a success response


Schema: `CommonResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getInventoryBulkUploadHistory
Get a list of all bulk Inventory upload jobs.

```javascript
// Promise
const promise = catalog.getInventoryBulkUploadHistory(companyId,pageNo,pageSize);

// Async/Await
const data = await catalog.getInventoryBulkUploadHistory(companyId,pageNo,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id of of which Inventory Bulk Upload History to be obtained. | 
| pageNo | integer | The page number to navigate through the given set of results | 
| pageSize | integer | Number of items to retrieve in each page. Default is 12. | 

This API helps to get bulk Inventory upload jobs data.

*Success Response:*



List of bulk Inventory upload jobs. See `BulkRequestGetSchema` for details


Schema: `BulkRequestGet`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### createBulkInventory
Create products in bulk associated with given batch Id.

```javascript
// Promise
const promise = catalog.createBulkInventory(companyId,body);

// Async/Await
const data = await catalog.createBulkInventory(companyId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id in which Inventory is to be uploaded. | 

This API helps to create products in bulk push to kafka for approval/creation.

*Success Response:*



Returns a success response


Schema: `SuccessResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### deleteBulkInventoryJob
Delete Bulk Inventory job.

```javascript
// Promise
const promise = catalog.deleteBulkInventoryJob(companyId);

// Async/Await
const data = await catalog.deleteBulkInventoryJob(companyId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id of the company of which bulk Inventory job is to be deleted. | 

This API allows to delete bulk Inventory job associated with company.

*Success Response:*



Returns a success response


Schema: `SuccessResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### createInventoryExportJob
Create a Inventory export Job.

```javascript
// Promise
const promise = catalog.createInventoryExportJob(companyId,body);

// Async/Await
const data = await catalog.createInventoryExportJob(companyId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id in which assets to be uploaded. | 

This API helps to create a Inventory export job.

*Success Response:*



Returns a success response


Schema: `SuccessResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getInventoryExport
Get Inventory export history.

```javascript
// Promise
const promise = catalog.getInventoryExport(companyId);

// Async/Await
const data = await catalog.getInventoryExport(companyId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id in which assets to be uploaded. | 

This API helps to get Inventory export history.

*Success Response:*



Returns a list of inventory export jobs


Schema: `InventoryExportJob`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### exportInventoryConfig
Get List of different filters for inventory export

```javascript
// Promise
const promise = catalog.exportInventoryConfig(companyId,filterType);

// Async/Await
const data = await catalog.exportInventoryConfig(companyId,filterType);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Id of the company associated to product that is to be viewed. | 
| filterType | string | filter type from any one of ['brand', 'store', 'type'] | 

This API allows get List of different filters like brand, store, and type for inventory export.

*Success Response:*



returns filters configuration for inventory export


Schema: `InventoryConfig`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---



---


## CompanyProfile


#### cbsOnboardGet
Get company profile

```javascript
// Promise
const promise = companyprofile.cbsOnboardGet(companyId);

// Async/Await
const data = await companyprofile.cbsOnboardGet(companyId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 

This API allows to view the company profile of the seller account.

*Success Response:*



Company profile object. See example below or refer `GetCompanyProfileSerializerResponse` for details


Schema: `GetCompanyProfileSerializerResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### updateCompany
Edit company profile

```javascript
// Promise
const promise = companyprofile.updateCompany(companyId,body);

// Async/Await
const data = await companyprofile.updateCompany(companyId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 

This API allows to edit the company profile of the seller account.

*Success Response:*



Returns a success message


Schema: `SuccessResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getCompanyMetrics
Get company metrics

```javascript
// Promise
const promise = companyprofile.getCompanyMetrics(companyId);

// Async/Await
const data = await companyprofile.getCompanyMetrics(companyId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 

This API allows to view the company metrics, i.e. the status of its brand and stores. Also its allows to view the number of products, company documents & store documents which are verified and unverified.

*Success Response:*



Metrics response object. See example below or refer `MetricsSerializer` for details


Schema: `MetricsSerializer`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getBrand
Get a single brand.

```javascript
// Promise
const promise = companyprofile.getBrand(companyId,brandId);

// Async/Await
const data = await companyprofile.getBrand(companyId,brandId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Id of the company associated to brand that is to be viewed. | 
| brandId | string | Id of the brand to be viewed. | 

This API helps to get data associated to a particular brand.

*Success Response:*



Brand object. See example below or refer `GetBrandResponseSerializer` for details


Schema: `GetBrandResponseSerializer`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### editBrand
Edit a brand.

```javascript
// Promise
const promise = companyprofile.editBrand(companyId,brandId,body);

// Async/Await
const data = await companyprofile.editBrand(companyId,brandId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Id of the company associated to brand that is to be viewed. | 
| brandId | string | Id of the brand to be viewed. | 

This API allows to edit meta of a brand.

*Success Response:*



Returns a success response


Schema: `SuccessResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### createBrand
Create a Brand.

```javascript
// Promise
const promise = companyprofile.createBrand(companyId,body);

// Async/Await
const data = await companyprofile.createBrand(companyId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Id of the company. | 

This API allows to create a brand associated to a company.

*Success Response:*



Returns a success response


Schema: `SuccessResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getBrands
Get brands associated to a company

```javascript
// Promise
const promise = companyprofile.getBrands(companyId);

// Async/Await
const data = await companyprofile.getBrands(companyId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Id of the company. | 

This API helps to get view brands associated to a particular company.

*Success Response:*



Brand object. See example below or refer `CompanyBrandListSerializer` for details


Schema: `CompanyBrandListSerializer`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### createBrand
Create a company brand mapping.

```javascript
// Promise
const promise = companyprofile.createBrand(companyId,body);

// Async/Await
const data = await companyprofile.createBrand(companyId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Id of the company inside which the brand is to be mapped. | 

This API allows to create a company brand mapping, for a already existing brand in the system.

*Success Response:*



Returns a success response


Schema: `SuccessResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getLocations
Get list of locations

```javascript
// Promise
const promise = companyprofile.getLocations(companyId,storeType,q,stage,pageNo,pageSize);

// Async/Await
const data = await companyprofile.getLocations(companyId,storeType,q,stage,pageNo,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Id of the company whose locations are to fetched | 
| storeType | string | Helps to sort the location list on the basis of location type. | 
| q | string | Query that is to be searched. | 
| stage | string | to filter companies on basis of verified or unverified companies. | 
| pageNo | integer | The page number to navigate through the given set of results | 
| pageSize | integer | Number of items to retrieve in each page. Default is 10. | 

This API allows to view all the locations asscoiated to a company.

*Success Response:*



Company profile object. See example below or refer `LocationListSerializer` for details


Schema: `LocationListSerializer`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### createLocation
Create a location asscoiated to a company.

```javascript
// Promise
const promise = companyprofile.createLocation(companyId,body);

// Async/Await
const data = await companyprofile.createLocation(companyId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Id of the company inside which the location is to be created. | 

This API allows to create a location associated to a company.

*Success Response:*



Returns a success response


Schema: `SuccessResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getLocationDetail
Get details of a specific location.

```javascript
// Promise
const promise = companyprofile.getLocationDetail(companyId,locationId);

// Async/Await
const data = await companyprofile.getLocationDetail(companyId,locationId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Id of the company inside which the location lies. | 
| locationId | string | Id of the location which you want to view. | 

This API helps to get data associated to a specific location.

*Success Response:*



Brand object. See example below or refer `GetLocationSerializer` for details


Schema: `GetLocationSerializer`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### updateLocation
Edit a location asscoiated to a company.

```javascript
// Promise
const promise = companyprofile.updateLocation(companyId,locationId,body);

// Async/Await
const data = await companyprofile.updateLocation(companyId,locationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Id of the company inside which the location is to be created. | 
| locationId | string | Id of the location which you want to edit. | 

This API allows to edit a location associated to a company.

*Success Response:*



Returns a success response


Schema: `SuccessResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---



---


## Assets


#### companyCopyFiles
Copy Files

```javascript
// Promise
const promise = assets.companyCopyFiles(companyId,body,sync);

// Async/Await
const data = await assets.companyCopyFiles(companyId,body,sync);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| sync | boolean | sync | 
| companyId | integer | company_id | 

Copy Files

*Success Response:*



Success


Schema: `BulkResponse`








Failed


Schema: `FailedResponse`









---


#### appCopyFiles
Copy Files

```javascript
// Promise
const promise = assets.appCopyFiles(companyId,applicationId,body,sync);

// Async/Await
const data = await assets.appCopyFiles(companyId,applicationId,body,sync);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| sync | boolean | sync | 
| companyId | integer | company_id | 
| applicationId | integer | application_id | 

Copy Files

*Success Response:*



Success


Schema: `BulkResponse`








Failed


Schema: `FailedResponse`









---


#### getSignUrls
Explain here

```javascript
// Promise
const promise = assets.getSignUrls(companyId,body);

// Async/Await
const data = await assets.getSignUrls(companyId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | company_id | 

Describe here

*Success Response:*



Success


Schema: `SignUrlResponse`








Failed


Schema: `FailedResponse`









---


#### companyBrowse
Browse Files

```javascript
// Promise
const promise = assets.companyBrowse(namespace,companyId);

// Async/Await
const data = await assets.companyBrowse(namespace,companyId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| namespace | string | bucket name | 
| companyId | integer | company_id | 

Browse Files

*Success Response:*



Success


Schema: `BrowseResponse`








Failed


Schema: `FailedResponse`









---


#### appBrowse
Browse Files

```javascript
// Promise
const promise = assets.appBrowse(namespace,companyId,applicationId);

// Async/Await
const data = await assets.appBrowse(namespace,companyId,applicationId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| namespace | string | bucket name | 
| companyId | integer | company_id | 
| applicationId | integer | application_id | 

Browse Files

*Success Response:*



Success


Schema: `BrowseResponse`








Failed


Schema: `FailedResponse`









---


#### proxy
Proxy

```javascript
// Promise
const promise = assets.proxy(companyId,url);

// Async/Await
const data = await assets.proxy(companyId,url);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | company_id | 
| url | string | url | 

Proxy

*Success Response:*



Success


Schema: `string`









---



---


---
---
