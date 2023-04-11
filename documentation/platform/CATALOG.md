




##### [Back to Platform docs](./README.md)

## Catalog Methods
Catalog - Platform Front API's' API's allows you to access list of products, prices, seller details, similar features, variants and many more useful features. 

* [addCollectionItems](#addcollectionitems)
* [addInventory](#addinventory)
* [allSizes](#allsizes)
* [bulkHsnCode](#bulkhsncode)
* [createBulkInventory](#createbulkinventory)
* [createBulkInventoryJob](#createbulkinventoryjob)
* [createBulkProductUploadJob](#createbulkproductuploadjob)
* [createCategories](#createcategories)
* [createCollection](#createcollection)
* [createConfigurationByType](#createconfigurationbytype)
* [createConfigurationProductListing](#createconfigurationproductlisting)
* [createCustomAutocompleteRule](#createcustomautocompleterule)
* [createCustomKeyword](#createcustomkeyword)
* [createDepartments](#createdepartments)
* [createGroupConfiguration](#creategroupconfiguration)
* [createInventoryExport](#createinventoryexport)
* [createInventoryExportJob](#createinventoryexportjob)
* [createListingConfiguration](#createlistingconfiguration)
* [createMarketplaceOptin](#createmarketplaceoptin)
* [createProduct](#createproduct)
* [createProductAssetsInBulk](#createproductassetsinbulk)
* [createProductBundle](#createproductbundle)
* [createProductExportJob](#createproductexportjob)
* [createProductsInBulk](#createproductsinbulk)
* [createSizeGuide](#createsizeguide)
* [deleteAutocompleteKeyword](#deleteautocompletekeyword)
* [deleteBulkInventoryJob](#deletebulkinventoryjob)
* [deleteCollection](#deletecollection)
* [deleteGroupConfiguration](#deletegroupconfiguration)
* [deleteInventory](#deleteinventory)
* [deleteListingConfiguration](#deletelistingconfiguration)
* [deleteProduct](#deleteproduct)
* [deleteProductBulkJob](#deleteproductbulkjob)
* [deleteRealtimeInventory](#deleterealtimeinventory)
* [deleteSearchKeywords](#deletesearchkeywords)
* [deleteSize](#deletesize)
* [downloadInventoryTemplateView](#downloadinventorytemplateview)
* [downloadProductTemplateViews](#downloadproducttemplateviews)
* [editProduct](#editproduct)
* [exportInventoryConfig](#exportinventoryconfig)
* [getAllCollections](#getallcollections)
* [getAllProductHsnCodes](#getallproducthsncodes)
* [getAllSearchKeyword](#getallsearchkeyword)
* [getAppInventory](#getappinventory)
* [getAppLocations](#getapplocations)
* [getAppProduct](#getappproduct)
* [getAppProducts](#getappproducts)
* [getAppicationProducts](#getappicationproducts)
* [getApplicationBrandListing](#getapplicationbrandlisting)
* [getApplicationBrands](#getapplicationbrands)
* [getApplicationCategoryListing](#getapplicationcategorylisting)
* [getApplicationDepartmentListing](#getapplicationdepartmentlisting)
* [getAutocompleteConfig](#getautocompleteconfig)
* [getAutocompleteKeywordDetail](#getautocompletekeyworddetail)
* [getCatalogConfiguration](#getcatalogconfiguration)
* [getCatalogInsights](#getcataloginsights)
* [getCategories](#getcategories)
* [getCategoryData](#getcategorydata)
* [getCollectionDetail](#getcollectiondetail)
* [getCollectionItems](#getcollectionitems)
* [getCompanyBrandDetail](#getcompanybranddetail)
* [getCompanyDetail](#getcompanydetail)
* [getCompanyMetrics](#getcompanymetrics)
* [getConfigurationByType](#getconfigurationbytype)
* [getConfigurationMetadata](#getconfigurationmetadata)
* [getConfigurations](#getconfigurations)
* [getDepartmentData](#getdepartmentdata)
* [getDepartments](#getdepartments)
* [getDiscountedInventoryBySizeIdentifier](#getdiscountedinventorybysizeidentifier)
* [getGenderAttribute](#getgenderattribute)
* [getGroupConfigurations](#getgroupconfigurations)
* [getHsnCode](#gethsncode)
* [getInventories](#getinventories)
* [getInventoryBulkUploadHistory](#getinventorybulkuploadhistory)
* [getInventoryBySize](#getinventorybysize)
* [getInventoryBySizeIdentifier](#getinventorybysizeidentifier)
* [getInventoryExport](#getinventoryexport)
* [getListingConfigurations](#getlistingconfigurations)
* [getMarketplaceOptinDetail](#getmarketplaceoptindetail)
* [getOptimalLocations](#getoptimallocations)
* [getProduct](#getproduct)
* [getProductAssetsInBulk](#getproductassetsinbulk)
* [getProductAttributes](#getproductattributes)
* [getProductBulkUploadHistory](#getproductbulkuploadhistory)
* [getProductBundle](#getproductbundle)
* [getProductBundleDetail](#getproductbundledetail)
* [getProductDetailBySlug](#getproductdetailbyslug)
* [getProductExportJobs](#getproductexportjobs)
* [getProductSize](#getproductsize)
* [getProductTags](#getproducttags)
* [getProductValidation](#getproductvalidation)
* [getProducts](#getproducts)
* [getQueryFilters](#getqueryfilters)
* [getSearchKeywords](#getsearchkeywords)
* [getSellerInsights](#getsellerinsights)
* [getSingleProductHSNCode](#getsingleproducthsncode)
* [getSizeGuide](#getsizeguide)
* [getSizeGuides](#getsizeguides)
* [getStoreDetail](#getstoredetail)
* [getVariantsOfProducts](#getvariantsofproducts)
* [listCategories](#listcategories)
* [listDepartmentsData](#listdepartmentsdata)
* [listHSNCodes](#listhsncodes)
* [listInventoryExport](#listinventoryexport)
* [listProductTemplate](#listproducttemplate)
* [listProductTemplateCategories](#listproducttemplatecategories)
* [listProductTemplateExportDetails](#listproducttemplateexportdetails)
* [listTemplateBrandTypeValues](#listtemplatebrandtypevalues)
* [updateAllowSingle](#updateallowsingle)
* [updateAppBrand](#updateappbrand)
* [updateAppCategory](#updateappcategory)
* [updateAppDepartment](#updateappdepartment)
* [updateAppLocation](#updateapplocation)
* [updateAppProduct](#updateappproduct)
* [updateAutocompleteKeyword](#updateautocompletekeyword)
* [updateCategory](#updatecategory)
* [updateCollection](#updatecollection)
* [updateDefaultSort](#updatedefaultsort)
* [updateDepartment](#updatedepartment)
* [updateGroupConfiguration](#updategroupconfiguration)
* [updateHsnCode](#updatehsncode)
* [updateInventories](#updateinventories)
* [updateListingConfiguration](#updatelistingconfiguration)
* [updateProductBundle](#updateproductbundle)
* [updateRealtimeInventory](#updaterealtimeinventory)
* [updateSearchKeywords](#updatesearchkeywords)
* [updateSizeGuide](#updatesizeguide)
* [uploadBulkProducts](#uploadbulkproducts)
* [validateProductTemplate](#validateproducttemplate)
* [validateProductTemplateSchema](#validateproducttemplateschema)



## Methods with example and description




### addCollectionItems
Add items to a collection



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").catalog.addCollectionItems({  id : value,
 body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").catalog.addCollectionItems({  id : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | A `id` is a unique identifier of a collection. |  
| body | [CollectionItemUpdate](#CollectionItemUpdate) | yes | Request body |


Adds items to a collection specified by its `id`. See `CollectionItemRequest` for the list of attributes needed to add items to an collection.

*Returned Response:*




[UpdatedResponse](#UpdatedResponse)

Status object. Tells whether the operation was successful.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "message": "items updated"
}
```
</details>









---


### addInventory
Add Inventory for particular size and store.



```javascript
// Promise
const promise = client.catalog.addInventory({  itemId : value,
 size : value,
 body : value });

// Async/Await
const data = await client.catalog.addInventory({  itemId : value,
 size : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| itemId | number | yes | Item code of the product of which size is to be get. |   
| size | string | yes | Size in which inventory is to be added. |  
| body | [InventoryRequest](#InventoryRequest) | yes | Request body |


This API allows add Inventory for particular size and store.

*Returned Response:*




[SuccessResponse](#SuccessResponse)

Returns a success response




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true
}
```
</details>









---


### allSizes
All Sizes for a given Product



```javascript
// Promise
const promise = client.catalog.allSizes({  itemId : value });

// Async/Await
const data = await client.catalog.allSizes({  itemId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| itemId | number | yes | Id of the product to be updated. |  



This API allows to get  All Sizes for a given Product.

*Returned Response:*




[GetAllSizes](#GetAllSizes)

List Product Sizes. See example below or refer `AllSizes` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "all_sizes": [
    {
      "size": "OS",
      "identifiers": [
        {
          "primary": true,
          "gtin_type": "ean",
          "gtin_value": "74352323423"
        }
      ],
      "item_length": 1000,
      "item_weight": 100,
      "item_height": 100,
      "item_width": 1000,
      "item_weight_unit_of_measure": "gram",
      "item_dimensions_unit_of_measure": "cm"
    }
  ]
}
```
</details>









---


### bulkHsnCode
Bulk Create or Update Hsn Code.



```javascript
// Promise
const promise = client.catalog.bulkHsnCode({  body : value });

// Async/Await
const data = await client.catalog.bulkHsnCode({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [BulkHsnUpsert](#BulkHsnUpsert) | yes | Request body |


Bulk Create or Update Hsn Code.

*Returned Response:*




[BulkHsnResponse](#BulkHsnResponse)

See example below for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true
}
```
</details>









---


### createBulkInventory
Create products in bulk associated with given batch Id.



```javascript
// Promise
const promise = client.catalog.createBulkInventory({  batchId : value,
 body : value });

// Async/Await
const data = await client.catalog.createBulkInventory({  batchId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| batchId | string | yes | Batch Id of the bulk create job. |  
| body | [InventoryBulkRequest](#InventoryBulkRequest) | yes | Request body |


This API helps to create products in bulk push to kafka for approval/creation.

*Returned Response:*




[SuccessResponse](#SuccessResponse)

Returns a success response




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true
}
```
</details>









---


### createBulkInventoryJob
Create a Bulk Inventory upload Job.



```javascript
// Promise
const promise = client.catalog.createBulkInventoryJob({  body : value });

// Async/Await
const data = await client.catalog.createBulkInventoryJob({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [BulkJob](#BulkJob) | yes | Request body |


This API helps to create a bulk Inventory upload job.

*Returned Response:*




[BulkResponse](#BulkResponse)

Returns a success response




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "batch_id": "507f1f77bcf86cd799439011"
}
```
</details>









---


### createBulkProductUploadJob
Create a Bulk product to upload job.



```javascript
// Promise
const promise = client.catalog.createBulkProductUploadJob({  body : value });

// Async/Await
const data = await client.catalog.createBulkProductUploadJob({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [BulkJob](#BulkJob) | yes | Request body |


This API helps to create a bulk products upload job.

*Returned Response:*




[BulkResponse](#BulkResponse)

Returns a success response




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "batch_id": "507f1f77bcf86cd799439011"
}
```
</details>









---


### createCategories
Create product categories



```javascript
// Promise
const promise = client.catalog.createCategories({  body : value });

// Async/Await
const data = await client.catalog.createCategories({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CategoryRequestBody](#CategoryRequestBody) | yes | Request body |


This API lets user create product categories

*Returned Response:*




[CategoryCreateResponse](#CategoryCreateResponse)

Category Meta. See example below or refer `CategoryCreateResponse` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "message": "Success",
  "uid": 0
}
```
</details>









---


### createCollection
Add a Collection



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").catalog.createCollection({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").catalog.createCollection({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CreateCollection](#CreateCollection) | yes | Request body |


Create a collection. See `CreateCollectionRequestSchema` for the list of attributes needed to create a collection and collections/query-options for the available options to create a collection. On successful request, returns a paginated list of collections specified in `CollectionCreateResponse`

*Returned Response:*




[CollectionCreateResponse](#CollectionCreateResponse)

List of all the collections including the one you added. See example below or refer `CollectionCreateResponse` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "uid": "604f585a7051e30001173ac1",
  "type": "query",
  "query": {},
  "name": "New",
  "banners": {
    "portrait": {
      "type": "image",
      "url": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1588858137/production/applications/app_000000000000000000000001/media/collection/portrait/xzuftshmmw4yuwzb12pm.png"
    },
    "landscape": {
      "type": "image",
      "url": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1588857999/production/applications/app_000000000000000000000001/media/collection/landscape/avm7xibo2jgk8glc4bwl.png"
    }
  },
  "logo": {
    "type": "image",
    "url": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1588857854/production/applications/app_000000000000000000000001/media/collection/logo/w9ns7nfgv7fk45xqrpoh.png"
  },
  "published": true,
  "description": "",
  "is_active": true,
  "tags": [],
  "slug": "new",
  "action": {
    "page": {
      "type": "collection",
      "query": {
        "collection": [
          "new"
        ]
      }
    },
    "type": "page"
  },
  "allow_facets": true,
  "allow_sort": true,
  "visible_facets_keys": [],
  "meta": {},
  "badge": {
    "color": "#ffffff",
    "text": ""
  },
  "sort_on": "depth_desc",
  "_custom_json": {},
  "_locale_language": {},
  "_schedule": {
    "start": "2021-03-15T12:51:21.333000+00:00Z",
    "next_schedule": [
      {
        "start": "2021-03-15T12:51:21.333000+00:00Z",
        "end": null
      }
    ],
    "end": null
  },
  "seo": {
    "title": "Test",
    "description": "Test description"
  }
}
```
</details>









---


### createConfigurationByType
Add configuration for categories and brands



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").catalog.createConfigurationByType({  type : value,
 body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").catalog.createConfigurationByType({  type : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| type | string | yes | type can be brands, categories etc. |  
| body | [AppConfiguration](#AppConfiguration) | yes | Request body |


Add configuration for categories & brands.

*Returned Response:*




[GetAppCatalogConfiguration](#GetAppCatalogConfiguration)

success flag will tell whether the operation was successful.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### createConfigurationProductListing
Add configuration for products & listings



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").catalog.createConfigurationProductListing({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").catalog.createConfigurationProductListing({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [AppConfiguration](#AppConfiguration) | yes | Request body |


Add configuration for products & listing.

*Returned Response:*




[GetAppCatalogConfiguration](#GetAppCatalogConfiguration)

success flag will tell whether the operation was successful.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### createCustomAutocompleteRule
Add a Custom Autocomplete Keywords



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").catalog.createCustomAutocompleteRule({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").catalog.createCustomAutocompleteRule({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CreateAutocompleteKeyword](#CreateAutocompleteKeyword) | yes | Request body |


Create a Custom Autocomplete Keywords. See `CreateAutocompleteKeywordSchema` for the list of attributes needed to create a mapping and /collections/query-options for the available options to create a rule. On successful request, returns a paginated list of collections specified in `CreateAutocompleteKeywordSchema`

*Returned Response:*




[CreateAutocompleteWordsResponse](#CreateAutocompleteWordsResponse)

List of all the collections including the one you added. See example below or refer `CreateAutocompleteWordsResponseSchema` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### createCustomKeyword
Add a Custom Search Keywords



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").catalog.createCustomKeyword({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").catalog.createCustomKeyword({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CreateSearchKeyword](#CreateSearchKeyword) | yes | Request body |


Create a Custom Search Keywords. See `CreateSearchKeywordSchema` for the list of attributes needed to create a mapping and /collections/query-options for the available options to create a rule. On successful request, returns a paginated list of collections specified in `CreateSearchKeywordSchema`

*Returned Response:*




[GetSearchWordsData](#GetSearchWordsData)

Get keyword object with id that is added. See example below or refer `GetSearchWordsDataSchema` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "uid": "602fa1e9a596ce349563f6b9",
  "words": [
    "sds"
  ],
  "app_id": "000000000000000000000001",
  "is_active": true,
  "result": {
    "query": {
      "department": [
        "men"
      ]
    },
    "sort_on": "popular"
  },
  "_custom_json": {}
}
```
</details>









---


### createDepartments
Create the department.



```javascript
// Promise
const promise = client.catalog.createDepartments({  body : value });

// Async/Await
const data = await client.catalog.createDepartments({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [DepartmentCreateUpdate](#DepartmentCreateUpdate) | yes | Request body |


Create departments using the API.

*Returned Response:*




[DepartmentCreateResponse](#DepartmentCreateResponse)

Success Response. See example below or refer `DepartmentCreateResponseSchema` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "message": "Success",
  "uid": 2
}
```
</details>









---


### createGroupConfiguration
Create configuration for Group config types.



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").catalog.createGroupConfiguration({  configType : value,
 body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").catalog.createGroupConfiguration({  configType : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| configType | string | yes | A `config_type` is a unique identifier for a particular group configuration type. |  
| body | [AppConfigurationDetail](#AppConfigurationDetail) | yes | Request body |


Create configuration for Group config types.

*Returned Response:*




[AppConfigurationDetail](#AppConfigurationDetail)

success flag will tell whether the operation was successful.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "priority": 1,
  "is_default": false,
  "attributes": [
    {
      "priority": 1,
      "display_type": "text",
      "key": "features",
      "name": "Features",
      "is_active": true,
      "slug": "features"
    }
  ],
  "name": "test",
  "app_id": "5d64e3500bcad8693a821c0d",
  "template_slugs": [
    "bags"
  ],
  "is_active": true,
  "slug": "test15",
  "id": "62b1cdab15c88fa867ee4dac"
}
```
</details>









---


### createInventoryExport
Create an inventory export job.



```javascript
// Promise
const promise = client.catalog.createInventoryExport({  body : value });

// Async/Await
const data = await client.catalog.createInventoryExport({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [InventoryCreateRequest](#InventoryCreateRequest) | yes | Request body |


This API helps to create a Inventory export job.

*Returned Response:*




[InventoryExportResponse](#InventoryExportResponse)

Returns a success response




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### createInventoryExportJob
Create a Inventory export Job.



```javascript
// Promise
const promise = client.catalog.createInventoryExportJob({  body : value });

// Async/Await
const data = await client.catalog.createInventoryExportJob({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [InventoryExportRequest](#InventoryExportRequest) | yes | Request body |


This API helps to create a Inventory export job.

*Returned Response:*




[InventoryExportResponse](#InventoryExportResponse)

Returns a success response




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### createListingConfiguration
Add configuration for listings



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").catalog.createListingConfiguration({  configType : value,
 body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").catalog.createListingConfiguration({  configType : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| configType | string | yes | A `config_type` is a unique identifier for a particular listing configuration type. |  
| body | [AppConfigurationsSort](#AppConfigurationsSort) | yes | Request body |


Add configuration for listing.

*Returned Response:*




[AppConfigurationsSort](#AppConfigurationsSort)

success flag will tell whether the operation was successful.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "priority": 4,
  "default_key": "",
  "is_default": false,
  "key": "discount_dsc",
  "name": "Discount High to Low",
  "app_id": "5d64e3500bcad8693a821c0d",
  "is_active": true,
  "logo": "https://hdn-1.fynd.com/products/pictures/attribute/logo/original/iG82Qjay9X-Popularity.png",
  "id": "62b1ccb815c88fa867ee4dab"
}
```
</details>









---


### createMarketplaceOptin
Create/Update opt-in infomation.



```javascript
// Promise
const promise = client.catalog.createMarketplaceOptin({  marketplace : value,
 body : value });

// Async/Await
const data = await client.catalog.createMarketplaceOptin({  marketplace : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| marketplace | string | yes | The marketplace for which the detail needs to be retrieved. |  
| body | [OptInPostRequest](#OptInPostRequest) | yes | Request body |


Use this API to create/update opt-in information for given platform. If successful, returns data in the response body as specified in `OptInPostResponseSchema`

*Returned Response:*




[UpdatedResponse](#UpdatedResponse)

See example below or refer `UpdatedResponse` for details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### createProduct
Create a product.



```javascript
// Promise
const promise = client.catalog.createProduct({  body : value });

// Async/Await
const data = await client.catalog.createProduct({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [ProductCreateUpdateSchemaV2](#ProductCreateUpdateSchemaV2) | yes | Request body |


This API allows to create product.

*Returned Response:*




[SuccessResponse](#SuccessResponse)

Returns a success response




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true
}
```
</details>









---


### createProductAssetsInBulk
Create a Bulk asset upload Job.



```javascript
// Promise
const promise = client.catalog.createProductAssetsInBulk({  body : value });

// Async/Await
const data = await client.catalog.createProductAssetsInBulk({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [ProductBulkAssets](#ProductBulkAssets) | yes | Request body |


This API helps to create a bulk asset upload job.

*Returned Response:*




[SuccessResponse](#SuccessResponse)

Returns a success response




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true
}
```
</details>









---


### createProductBundle
Create Product Bundle



```javascript
// Promise
const promise = client.catalog.createProductBundle({  body : value });

// Async/Await
const data = await client.catalog.createProductBundle({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [ProductBundleRequest](#ProductBundleRequest) | yes | Request body |


Create Product Bundle. See `ProductBundleRequest` for the request body parameter need to create a product bundle. On successful request, returns in `ProductBundleRequest` with id

*Returned Response:*




[GetProductBundleCreateResponse](#GetProductBundleCreateResponse)

Get bundle with id that is added. See example below or refer `GetProductBundleCreateResponse` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "slug": "bag",
  "logo": "http://g.com/poo.png/",
  "name": "Bag",
  "choice": "multi",
  "products": [
    {
      "product_uid": 7500001,
      "max_quantity": 1,
      "min_quantity": 1,
      "auto_add_to_cart": false,
      "auto_select": false,
      "allow_remove": true
    }
  ],
  "meta": {},
  "same_store_assignment": true,
  "is_active": true,
  "page_visibility": [
    "pdp"
  ],
  "created_by": {
    "username": "917827311650_22960",
    "uid": "123"
  },
  "company_id": 1,
  "created_on": "2021-02-19 16:40:26.310007",
  "modified_by": {
    "username": "917827311650_22960",
    "uid": "123"
  },
  "modified_on": "2021-02-19 16:40:26.310027",
  "id": "602f9ca2a596ce312f5956f9"
}
```
</details>









---


### createProductExportJob
Create a product export job.



```javascript
// Promise
const promise = client.catalog.createProductExportJob({  body : value });

// Async/Await
const data = await client.catalog.createProductExportJob({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [ProductTemplateDownloadsExport](#ProductTemplateDownloadsExport) | yes | Request body |


This API helps to create a Inventory export job.

*Returned Response:*




[ProductDownloadsResponse](#ProductDownloadsResponse)

Returns a success response




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "data": {
    "filters": {
      "templates": [
        "footwear"
      ],
      "brands": [],
      "catalogue_types": [
        "standard"
      ]
    },
    "stats": {},
    "modified_on": "2023-03-03T10:26:47.047179",
    "type": "excel",
    "created_by": {
      "user_id": "550fe8ce436ea332b9e4b4b0",
      "username": "purvashukla_gofynd_com_44895"
    },
    "notification_emails": [],
    "status": "pending",
    "_id": "6401cb6729885c34aa30b0c6",
    "seller_id": 577,
    "created_on": "2023-03-03T10:26:47.047171Z",
    "task_id": "e6c47f1a-b9ad-11ed-b7a0-3ef7b700888d"
  }
}
```
</details>









---


### createProductsInBulk
Create products in bulk associated with given batch Id.



```javascript
// Promise
const promise = client.catalog.createProductsInBulk({  batchId : value,
 body : value });

// Async/Await
const data = await client.catalog.createProductsInBulk({  batchId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| batchId | string | yes | Batch Id in which assets to be uploaded. |  
| body | [BulkProductRequest](#BulkProductRequest) | yes | Request body |


This API helps to create products in bulk push to kafka for approval/creation.

*Returned Response:*




[SuccessResponse](#SuccessResponse)

Returns a success response




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true
}
```
</details>









---


### createSizeGuide
Create a size guide.



```javascript
// Promise
const promise = client.catalog.createSizeGuide({  body : value });

// Async/Await
const data = await client.catalog.createSizeGuide({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [ValidateSizeGuide](#ValidateSizeGuide) | yes | Request body |


This API allows to create a size guide associated to a brand.

*Returned Response:*




[SuccessResponse](#SuccessResponse)

Returns a success response




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true
}
```
</details>









---


### deleteAutocompleteKeyword
Delete a Autocomplete Keywords



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").catalog.deleteAutocompleteKeyword({  id : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").catalog.deleteAutocompleteKeyword({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to delete. |  



Delete a keywords by it's id. Returns an object that tells whether the keywords was deleted successfully

*Returned Response:*




[DeleteResponse](#DeleteResponse)

Status object. Tells whether the operation was successful. See example below or refer `DeleteResponse`




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "message": "Words Deleted"
}
```
</details>









---


### deleteBulkInventoryJob
Delete Bulk Inventory job.



```javascript
// Promise
const promise = client.catalog.deleteBulkInventoryJob({  batchId : value });

// Async/Await
const data = await client.catalog.deleteBulkInventoryJob({  batchId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| batchId | string | yes | Batch Id of the bulk delete job. |  



This API allows to delete bulk Inventory job associated with company.

*Returned Response:*




[SuccessResponse](#SuccessResponse)

Returns a success response




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true
}
```
</details>









---


### deleteCollection
Delete a Collection



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").catalog.deleteCollection({  id : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").catalog.deleteCollection({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | A `id` is a unique identifier of a collection. |  



Delete a collection by it's id. Returns an object that tells whether the collection was deleted successfully

*Returned Response:*




[DeleteResponse](#DeleteResponse)

Status object. Tells whether the operation was successful. See example below or refer `DeleteResponse`




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "message": "Collection Deleted"
}
```
</details>









---


### deleteGroupConfiguration
Delete configuration of the product config type of the application.



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").catalog.deleteGroupConfiguration({  configType : value,
 groupSlug : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").catalog.deleteGroupConfiguration({  configType : value,
 groupSlug : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| configType | string | yes | A `config_type` is a unique identifier for a particular group configuration type. |   
| groupSlug | string | yes | A `group_slug` is a unique identifier of a particular configuration. |  



Delete configuration of the product config type of the application.

*Returned Response:*




[ConfigSuccessResponse](#ConfigSuccessResponse)

success message will tell whether the operation was successful.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "message": "Config Item deleted successfully."
}
```
</details>









---


### deleteInventory
Delete a Inventory.



```javascript
// Promise
const promise = client.catalog.deleteInventory({  size : value,
 itemId : value,
 locationId : value });

// Async/Await
const data = await client.catalog.deleteInventory({  size : value,
 itemId : value,
 locationId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| size | string | yes | size that is to be deleted. |   
| itemId | number | yes | Id of the product associated with Inventory to be deleted. |   
| locationId | number | yes | Location ID of store of which inventory is to be deleted. |  



This API allows to delete inventory of a particular product for particular company.

*Returned Response:*




[SuccessResponse](#SuccessResponse)

Returns a success response




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true
}
```
</details>









---


### deleteListingConfiguration
Delete configuration for listings



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").catalog.deleteListingConfiguration({  configType : value,
 configId : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").catalog.deleteListingConfiguration({  configType : value,
 configId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| configType | string | yes | A `config_type` is a unique identifier for a particular listing configuration type. |   
| configId | string | yes | A `config_id` is a unique identifier of a particular configuration. |  



Delete configuration for listing.

*Returned Response:*




[ConfigSuccessResponse](#ConfigSuccessResponse)

success message will tell whether the operation was successful.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "message": "Config Item deleted successfully."
}
```
</details>









---


### deleteProduct
Delete a product.



```javascript
// Promise
const promise = client.catalog.deleteProduct({  itemId : value });

// Async/Await
const data = await client.catalog.deleteProduct({  itemId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| itemId | number | yes | Id of the product to be updated. |  



This API allows to delete product.

*Returned Response:*




[SuccessResponse](#SuccessResponse)

Returns a success response




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true
}
```
</details>









---


### deleteProductBulkJob
Delete Bulk product job.



```javascript
// Promise
const promise = client.catalog.deleteProductBulkJob({  batchId : value });

// Async/Await
const data = await client.catalog.deleteProductBulkJob({  batchId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| batchId | number | yes | Batch Id of the bulk product job to be deleted. |  



This API allows to delete bulk product job associated with company.

*Returned Response:*




[SuccessResponse](#SuccessResponse)

Returns a success response




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true
}
```
</details>









---


### deleteRealtimeInventory
Add Inventory for particular size and store.



```javascript
// Promise
const promise = client.catalog.deleteRealtimeInventory({  itemId : value,
 sellerIdentifier : value,
 body : value });

// Async/Await
const data = await client.catalog.deleteRealtimeInventory({  itemId : value,
 sellerIdentifier : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| itemId | number | yes | Item code of the product of which size is to be get. |   
| sellerIdentifier | string | yes | Size Identifier (Seller Identifier or Primary Identifier) of which inventory is to get. |  
| body | [InventoryRequestSchemaV2](#InventoryRequestSchemaV2) | yes | Request body |


This API allows add Inventory for particular size and store.

*Returned Response:*




[InventoryUpdateResponse](#InventoryUpdateResponse)

Returns a success response




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "message": "Partially Successful",
  "items": [
    {
      "reason": {
        "reason_code": 2005,
        "message": "Product not found"
      },
      "data": {
        "seller_identifier": "000000000490922067",
        "store_id": 124,
        "price_marked": 130,
        "price_effective": 109.01,
        "total_quantity": 34,
        "expiration_date": "9998-01-30T23:59:00"
      }
    },
    {
      "reason": {
        "reason_code": 2004,
        "message": "Size not found"
      },
      "data": {
        "seller_identifier": "000000000490922067",
        "store_id": 124,
        "price_marked": 130,
        "price_effective": 109.01,
        "total_quantity": 34,
        "expiration_date": "9998-01-30T23:59:00"
      }
    }
  ]
}
```
</details>









---


### deleteSearchKeywords
Delete a Search Keywords



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").catalog.deleteSearchKeywords({  id : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").catalog.deleteSearchKeywords({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to delete. |  



Delete a keywords by it's id. Returns an object that tells whether the keywords was deleted successfully

*Returned Response:*




[DeleteResponse](#DeleteResponse)

Status object. Tells whether the operation was successful. See example below or refer `DeleteResponse`




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "message": "Words Deleted"
}
```
</details>









---


### deleteSize
Delete a Size associated with product.



```javascript
// Promise
const promise = client.catalog.deleteSize({  itemId : value,
 size : value });

// Async/Await
const data = await client.catalog.deleteSize({  itemId : value,
 size : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| itemId | number | yes | Item Id of the product associated with size to be deleted. |   
| size | string | yes | size to be deleted. |  



This API allows to delete size associated with product.

*Returned Response:*




[ProductSizeDeleteResponse](#ProductSizeDeleteResponse)

Returns a success response




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "data": {
    "item_id": 114,
    "size": 3,
    "company_id": 1
  }
}
```
</details>









---


### downloadInventoryTemplateView
Download Product Template View



```javascript
// Promise
const promise = client.catalog.downloadInventoryTemplateView({  itemType : value });

// Async/Await
const data = await client.catalog.downloadInventoryTemplateView({  itemType : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| itemType | string | yes | An `item_type` defines the type of item. |  



Allows you to download product template data

*Returned Response:*




[string](#string)

CSV File of product template data.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### downloadProductTemplateViews
Download Product Template View



```javascript
// Promise
const promise = client.catalog.downloadProductTemplateViews({  slug : value });

// Async/Await
const data = await client.catalog.downloadProductTemplateViews({  slug : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| slug | string | yes | A `slug` is a unique identifier for a particular template. |  



Allows you to download product template data

*Returned Response:*




[string](#string)

CSV File of product template data. See example below or refer `TemplatesResponse` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### editProduct
Edit a product.



```javascript
// Promise
const promise = client.catalog.editProduct({  itemId : value,
 body : value });

// Async/Await
const data = await client.catalog.editProduct({  itemId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| itemId | number | yes | Id of the product to be updated. |  
| body | [ProductCreateUpdateSchemaV2](#ProductCreateUpdateSchemaV2) | yes | Request body |


This API allows to edit product.

*Returned Response:*




[SuccessResponse](#SuccessResponse)

Returns a success response




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true
}
```
</details>









---


### exportInventoryConfig
Get List of different filters for inventory export



```javascript
// Promise
const promise = client.catalog.exportInventoryConfig({  filterType : value });

// Async/Await
const data = await client.catalog.exportInventoryConfig({  filterType : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| filterType | string | no | filter type from any one of ['brand', 'store', 'type'] |  



This API allows get List of different filters like brand, store, and type for inventory export.

*Returned Response:*




[InventoryConfig](#InventoryConfig)

returns filters configuration for inventory export




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "data": [
    {
      "display": "csv",
      "value": "csv"
    },
    {
      "display": "excel",
      "value": "excel"
    }
  ],
  "multivalues": true
}
```
</details>









---


### getAllCollections
List all the collections



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").catalog.getAllCollections({  q : value,
 scheduleStatus : value,
 type : value,
 tags : value,
 isActive : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").catalog.getAllCollections({  q : value,
 scheduleStatus : value,
 type : value,
 tags : value,
 isActive : value,
 pageNo : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| q | string | no | Get collection list filtered by q string, |    
| scheduleStatus | string | no | Get collection list filtered by scheduled status, |    
| type | string | no | type of the collections |    
| tags | Array<string> | no | Each response will contain next_id param, which should be sent back to make pagination work. |    
| isActive | boolean | no | get collections filtered by active status. |    
| pageNo | number | no | The page number to navigate through the given set of results. |    
| pageSize | number | no | Number of items to retrieve in each page. Default is 12. |  



A Collection allows you to organize your products into hierarchical groups. For example, a dress might be in the category _Clothing_, the individual product might also be in the collection _Summer_. On successful request, returns all the collections as specified in `CollectionListingSchema`

*Returned Response:*




[GetCollectionListingResponse](#GetCollectionListingResponse)

List of collections. See example below or refer `GetCollectionListingResponse` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "page": {
    "current": 1,
    "size": 19,
    "has_previous": false,
    "has_next": true,
    "item_total": 190
  },
  "items": [
    {
      "uid": "6040fed076d8a500011ef829",
      "type": "query",
      "query": {
        "brand": [
          "6",
          "3",
          "4",
          "2"
        ],
        "min_price_effective": "[6319,INR TO 11805,INR]",
        "platform_discount": "[15 TO 39]",
        "sort_on": "price_asc"
      },
      "name": "test1",
      "banners": {
        "portrait": {
          "type": "image",
          "url": "https://hdn-1.addsale.com/x0/company/1/applications/000000000000000000000001/collections/pictures/portrait-banner/original/mP6OnINGR-1601466767814.jpeg"
        },
        "landscape": {
          "type": "image",
          "url": "https://hdn-1.addsale.com/x0/company/1/applications/000000000000000000000001/collections/pictures/landscape-banner/original/3jSEzw9CN-1601465376892.jpeg"
        }
      },
      "logo": {
        "type": "image",
        "url": "https://hdn-1.addsale.com/x0/company/1/applications/000000000000000000000001/collections/pictures/square-logo/original/y_-XUYXwx-1602326103322.jpeg"
      },
      "published": true,
      "description": "this is description",
      "is_active": true,
      "tags": [],
      "slug": "test1",
      "action": {
        "page": {
          "type": "collection",
          "query": {
            "collection": [
              "test1"
            ]
          }
        },
        "type": "page"
      },
      "allow_facets": true,
      "allow_sort": true,
      "visible_facets_keys": [],
      "meta": {},
      "badge": {
        "text": "",
        "color": "#ffffff"
      },
      "sort_on": "price_asc",
      "_custom_json": {},
      "_locale_language": {},
      "_schedule": {
        "start": "2021-03-04T15:35:13.640000Z",
        "next_schedule": [
          {
            "start": "2021-03-04T15:35:13.640000Z",
            "end": null
          }
        ],
        "end": null
      }
    },
    {
      "uid": "6040a9b250f97e0001886294",
      "type": "items",
      "query": {},
      "name": "newapiplaform",
      "banners": {
        "portrait": {
          "type": "image",
          "url": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1588858137/production/applications/app_000000000000000000000001/media/collection/portrait/xzuftshmmw4yuwzb12pm.png"
        },
        "landscape": {
          "type": "image",
          "url": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1588857999/production/applications/app_000000000000000000000001/media/collection/landscape/avm7xibo2jgk8glc4bwl.png"
        }
      },
      "logo": {
        "type": "image",
        "url": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1588857854/production/applications/app_000000000000000000000001/media/collection/logo/w9ns7nfgv7fk45xqrpoh.png"
      },
      "published": true,
      "description": "sadasd",
      "is_active": true,
      "tags": [
        "sdsadas",
        "asd"
      ],
      "slug": "newapiplaform",
      "action": {
        "page": {
          "type": "collection",
          "query": {
            "collection": [
              "newapiplaform"
            ]
          }
        },
        "type": "page"
      },
      "allow_facets": true,
      "allow_sort": true,
      "visible_facets_keys": [],
      "meta": {},
      "badge": {
        "text": "",
        "color": "#aa2727"
      },
      "sort_on": "popular",
      "_custom_json": {},
      "_locale_language": {},
      "_schedule": {
        "start": "2021-03-04T09:33:53.686000Z",
        "next_schedule": [
          {
            "start": "2021-03-04T09:33:53.686000Z",
            "end": null
          }
        ],
        "end": null
      }
    },
    {
      "uid": "603f68fd953a69000145dc92",
      "type": "query",
      "query": {},
      "name": "new",
      "banners": {
        "portrait": {
          "type": "image",
          "url": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1588858137/production/applications/app_000000000000000000000001/media/collection/portrait/xzuftshmmw4yuwzb12pm.png"
        },
        "landscape": {
          "type": "image",
          "url": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1588857999/production/applications/app_000000000000000000000001/media/collection/landscape/avm7xibo2jgk8glc4bwl.png"
        }
      },
      "logo": {
        "type": "image",
        "url": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1588857854/production/applications/app_000000000000000000000001/media/collection/logo/w9ns7nfgv7fk45xqrpoh.png"
      },
      "published": true,
      "description": "",
      "is_active": true,
      "tags": [],
      "slug": "old",
      "action": {
        "page": {
          "type": "collection",
          "query": {
            "collection": [
              "old"
            ]
          }
        },
        "type": "page"
      },
      "allow_facets": true,
      "allow_sort": true,
      "visible_facets_keys": [],
      "meta": {},
      "badge": {
        "color": "#ffffff",
        "text": ""
      },
      "sort_on": "popular",
      "_custom_json": {},
      "_locale_language": {},
      "_schedule": {
        "start": "2021-03-03T10:45:40.544000Z",
        "next_schedule": [
          {
            "start": "2021-03-03T10:45:40.544000Z",
            "end": null
          }
        ],
        "end": null
      }
    }
  ],
  "filters": {
    "tags": [
      {
        "name": "1+",
        "is_selected": false,
        "display": "1+"
      },
      {
        "name": "aa",
        "is_selected": false,
        "display": "aa"
      },
      {
        "name": "asd",
        "is_selected": false,
        "display": "asd"
      },
      {
        "name": "dda",
        "is_selected": false,
        "display": "dda"
      },
      {
        "name": "fahim",
        "is_selected": false,
        "display": "fahim"
      },
      {
        "name": "gfg",
        "is_selected": false,
        "display": "gfg"
      },
      {
        "name": "sakri",
        "is_selected": false,
        "display": "sakri"
      },
      {
        "name": "sdsadas",
        "is_selected": false,
        "display": "sdsadas"
      },
      {
        "name": "uuy",
        "is_selected": false,
        "display": "uuy"
      }
    ],
    "type": [
      {
        "name": "items",
        "is_selected": false,
        "display": "items"
      },
      {
        "name": "query",
        "is_selected": false,
        "display": "query"
      }
    ]
  }
}
```
</details>









---


### getAllProductHsnCodes
Hsn Code List.



```javascript
// Promise
const promise = client.catalog.getAllProductHsnCodes({  pageNo : value,
 pageSize : value,
 q : value,
 type : value });

// Async/Await
const data = await client.catalog.getAllProductHsnCodes({  pageNo : value,
 pageSize : value,
 q : value,
 type : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNo | number | no | page no |    
| pageSize | number | no | page size |    
| q | string | no | search using hsn code, description, reporting_hsn |    
| type | string | no | search using type |  



Hsn Code List.

*Returned Response:*




[HsnCodesListingResponseSchemaV2](#HsnCodesListingResponseSchemaV2)

List of all HSN Codes. See example below or refer `HsnCodesListingResponseSchema` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "items": [
    {
      "tax_on_esp": true,
      "id": "619e17925e3d3ea77d6fe8cf",
      "hs2_code": "26",
      "modified_on": "2021-11-25T06:37:00.880000Z",
      "description": "final test updated",
      "tax_on_mrp": false,
      "slabs": [
        {
          "threshold": 100,
          "effective_date": "2021-11-18T10:00:31.798000+00:00",
          "tax": 10
        },
        {
          "threshold": 200,
          "effective_date": "2022-11-18T10:00:31.798000+00:00",
          "tax": 20
        }
      ],
      "hsn_code": "123fght3",
      "uid": "123fgh43-1"
    }
  ],
  "page": {
    "current": 1,
    "type": "number",
    "size": 8,
    "has_previous": false,
    "has_next": true,
    "item_total": 8
  }
}
```
</details>









---


### getAllSearchKeyword
List all Search Custom Keyword Listing



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").catalog.getAllSearchKeyword();

// Async/Await
const data = await client.application("<APPLICATION_ID>").catalog.getAllSearchKeyword();
```






Custom Search Keyword allows you to map conditions with keywords to give you the ultimate results

*Returned Response:*




[GetSearchWordsResponse](#GetSearchWordsResponse)

List of custom search keywords. See example below or refer `GetSearchWordsResponseSchema` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "page": {
    "current": 1,
    "size": 1,
    "has_previous": false,
    "has_next": false,
    "item_count": 1
  },
  "items": [
    {
      "uid": "602fa1e9a596ce349563f6b9",
      "words": [
        "sds"
      ],
      "app_id": "000000000000000000000001",
      "is_active": true,
      "result": {
        "query": {
          "department": [
            "men"
          ]
        },
        "sort_on": "popular"
      },
      "_custom_json": {}
    }
  ]
}
```
</details>









---


### getAppInventory
Get the stock of a product



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").catalog.getAppInventory({  itemIds : value,
 storeIds : value,
 brandIds : value,
 sellerIdentifiers : value,
 timestamp : value,
 pageSize : value,
 pageId : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").catalog.getAppInventory({  itemIds : value,
 storeIds : value,
 brandIds : value,
 sellerIdentifiers : value,
 timestamp : value,
 pageSize : value,
 pageId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| itemIds | Array<number> | no | The Item Id of the product. |    
| storeIds | Array<number> | no | The Store Id of products to fetch inventory. |    
| brandIds | Array<number> | no | The Brand Id of products to fetch inventory. |    
| sellerIdentifiers | Array<string> | no | Unique seller_identifier of the product. |    
| timestamp | string | no | Timestamp in UTC format (2020-07-23T10:27:50Z) |    
| pageSize | number | no | The number of items to retrieve in each page. |    
| pageId | string | no | Page ID to retrieve next set of results. |  



Retrieve the available Inventory of the products. Use this API to get the Inventory status of products with the filters of timestamp, store_ids, brand_ids, item_id - Items - Pagination

*Returned Response:*




[InventoryStockResponse](#InventoryStockResponse)

Success. Returns the article/stock of the product stock.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "items": [
    {
      "_id": "62d809eebeed53f4e27824b0",
      "company": {
        "id": 3
      },
      "weight": {
        "unit": "gram",
        "is_default": true,
        "shipping": 40
      },
      "modified_by": {
        "username": "mohitkhare_gofynd_com_12594",
        "user_id": "2a00eecae43d7e7f4340e7cf"
      },
      "tax_identifier": {
        "hsn_code_id": "000000000000000000000001"
      },
      "fynd_item_code": "LS101269",
      "created_by": {
        "username": "mohitkhare_gofynd_com_12594",
        "user_id": "2a00eecae43d7e7f4340e7cf"
      },
      "meta": {
        "service": "Inventory Job"
      },
      "uid": "624_LSRS401269",
      "size": "11",
      "total_quantity": 100,
      "fragile": false,
      "country_of_origin": "India",
      "expiration_date": "9998-01-30T23:59:00",
      "raw_meta": {
        "fynd_identifier": "624_LSRS401269"
      },
      "identifier": {
        "ean": "LSRS401269"
      },
      "seller_identifier": "LSRS401269",
      "dimension": {
        "width": 20,
        "unit": "cm",
        "height": 30,
        "length": 10,
        "is_default": true
      },
      "trader": [
        {
          "address": [
            "Load Galli, Mumbai"
          ],
          "name": "Load Company",
          "type": "Importer"
        }
      ],
      "is_active": true,
      "return_config": {
        "unit": "days",
        "returnable": true,
        "time": 30
      },
      "price": {
        "currency": "INR",
        "effective": 3250,
        "marked": 5000,
        "updated_at": "2022-07-20T13:58:06.122914+00:00",
        "transfer": 0
      },
      "store": {
        "id": 624
      },
      "manufacturer": {
        "address": "POLARIS, 2ND FLOOR, ANDHERI, JSNLCA, MAHARASHTRA, THANE",
        "is_default": true,
        "name": "Test 21"
      },
      "track_inventory": true,
      "brand": {
        "id": 2586
      },
      "is_set": false,
      "quantities": {
        "sellable": {
          "count": 100,
          "updated_at": 1658325486
        }
      },
      "item_id": 7523701,
      "fynd_article_code": "LS101269_11",
      "date_meta": {
        "added_on_store": 1658325486,
        "inventory_updated_on": 1658325486,
        "modified_on": 1660913492,
        "created_on": 1658325486
      },
      "stage": "verified",
      "_custom_json": {},
      "platforms": {
        "fynd": false,
        "uniket_wholesale": true
      },
      "discount_applied": null
    },
    {
      "_id": "62d809eebeed53f4e27824b2",
      "company": {
        "id": 3
      },
      "weight": {
        "unit": "gram",
        "is_default": true,
        "shipping": 40
      },
      "modified_by": {
        "username": "mohitkhare_gofynd_com_12594",
        "user_id": "2a00eecae43d7e7f4340e7cf"
      },
      "tax_identifier": {
        "hsn_code_id": "000000000000000000000001"
      },
      "fynd_item_code": "LS101163",
      "created_by": {
        "username": "mohitkhare_gofynd_com_12594",
        "user_id": "2a00eecae43d7e7f4340e7cf"
      },
      "meta": {
        "service": "Inventory Job"
      },
      "uid": "624_LSRS401163",
      "size": "11",
      "total_quantity": 100,
      "fragile": false,
      "country_of_origin": "India",
      "expiration_date": "9998-01-30T23:59:00",
      "raw_meta": {
        "fynd_identifier": "624_LSRS401163"
      },
      "identifier": {
        "ean": "LSRS401163"
      },
      "seller_identifier": "LSRS401163",
      "dimension": {
        "width": 20,
        "unit": "cm",
        "height": 30,
        "length": 10,
        "is_default": true
      },
      "trader": [
        {
          "address": [
            "Load Galli, Mumbai"
          ],
          "name": "Load Company",
          "type": "Importer"
        }
      ],
      "is_active": true,
      "return_config": {
        "unit": "days",
        "returnable": true,
        "time": 30
      },
      "price": {
        "currency": "INR",
        "effective": 3250,
        "marked": 5000,
        "updated_at": "2022-07-20T13:58:06.396235+00:00",
        "transfer": 0
      },
      "store": {
        "id": 624
      },
      "manufacturer": {
        "address": "POLARIS, 2ND FLOOR, ANDHERI, JSNLCA, MAHARASHTRA, THANE",
        "is_default": true,
        "name": "Test 21"
      },
      "track_inventory": true,
      "brand": {
        "id": 2586
      },
      "is_set": false,
      "quantities": {
        "sellable": {
          "count": 100,
          "updated_at": 1658325486
        }
      },
      "item_id": 7523925,
      "fynd_article_code": "LS101163_11",
      "date_meta": {
        "added_on_store": 1658325486,
        "inventory_updated_on": 1658325486,
        "modified_on": 1660913492,
        "created_on": 1658325486
      },
      "stage": "verified",
      "_custom_json": {},
      "platforms": {
        "fynd": false,
        "uniket_wholesale": true
      },
      "discount_applied": null
    },
    {
      "_id": "62d809eebeed53f4e27824b4",
      "company": {
        "id": 3
      },
      "weight": {
        "unit": "gram",
        "is_default": true,
        "shipping": 40
      },
      "modified_by": {
        "username": "mohitkhare_gofynd_com_12594",
        "user_id": "2a00eecae43d7e7f4340e7cf"
      },
      "tax_identifier": {
        "hsn_code_id": "000000000000000000000001"
      },
      "fynd_item_code": "LS101173",
      "created_by": {
        "username": "mohitkhare_gofynd_com_12594",
        "user_id": "2a00eecae43d7e7f4340e7cf"
      },
      "meta": {
        "service": "Inventory Job"
      },
      "uid": "624_LSRS401173",
      "size": "11",
      "total_quantity": 100,
      "fragile": false,
      "country_of_origin": "India",
      "expiration_date": "9998-01-30T23:59:00",
      "raw_meta": {
        "fynd_identifier": "624_LSRS401173"
      },
      "identifier": {
        "ean": "LSRS401173"
      },
      "seller_identifier": "LSRS401173",
      "dimension": {
        "width": 20,
        "unit": "cm",
        "height": 30,
        "length": 10,
        "is_default": true
      },
      "trader": [
        {
          "address": [
            "Load Galli, Mumbai"
          ],
          "name": "Load Company",
          "type": "Importer"
        }
      ],
      "is_active": true,
      "return_config": {
        "unit": "days",
        "returnable": true,
        "time": 30
      },
      "price": {
        "currency": "INR",
        "effective": 3250,
        "marked": 5000,
        "updated_at": "2022-07-20T13:58:06.635248+00:00",
        "transfer": 0
      },
      "store": {
        "id": 624
      },
      "manufacturer": {
        "address": "POLARIS, 2ND FLOOR, ANDHERI, JSNLCA, MAHARASHTRA, THANE",
        "is_default": true,
        "name": "Test 21"
      },
      "track_inventory": true,
      "brand": {
        "id": 2586
      },
      "is_set": false,
      "quantities": {
        "sellable": {
          "count": 100,
          "updated_at": 1658325486
        }
      },
      "item_id": 7523691,
      "fynd_article_code": "LS101173_11",
      "date_meta": {
        "added_on_store": 1658325486,
        "inventory_updated_on": 1658325486,
        "modified_on": 1660913492,
        "created_on": 1658325486
      },
      "stage": "verified",
      "_custom_json": {},
      "platforms": {
        "fynd": false,
        "uniket_wholesale": true
      },
      "discount_applied": null
    },
    {
      "_id": "62d809eebeed53f4e27824b6",
      "company": {
        "id": 3
      },
      "weight": {
        "unit": "gram",
        "is_default": true,
        "shipping": 40
      },
      "modified_by": {
        "username": "mohitkhare_gofynd_com_12594",
        "user_id": "2a00eecae43d7e7f4340e7cf"
      },
      "tax_identifier": {
        "hsn_code_id": "000000000000000000000001"
      },
      "fynd_item_code": "LS101198",
      "created_by": {
        "username": "mohitkhare_gofynd_com_12594",
        "user_id": "2a00eecae43d7e7f4340e7cf"
      },
      "meta": {
        "service": "Inventory Job"
      },
      "uid": "624_LSRS401198",
      "size": "11",
      "total_quantity": 100,
      "fragile": false,
      "country_of_origin": "India",
      "expiration_date": "9998-01-30T23:59:00",
      "raw_meta": {
        "fynd_identifier": "624_LSRS401198"
      },
      "identifier": {
        "ean": "LSRS401198"
      },
      "seller_identifier": "LSRS401198",
      "dimension": {
        "width": 20,
        "unit": "cm",
        "height": 30,
        "length": 10,
        "is_default": true
      },
      "trader": [
        {
          "address": [
            "Load Galli, Mumbai"
          ],
          "name": "Load Company",
          "type": "Importer"
        }
      ],
      "is_active": true,
      "return_config": {
        "unit": "days",
        "returnable": true,
        "time": 30
      },
      "price": {
        "currency": "INR",
        "effective": 3250,
        "marked": 5000,
        "updated_at": "2022-07-20T13:58:06.898687+00:00",
        "transfer": 0
      },
      "store": {
        "id": 624
      },
      "manufacturer": {
        "address": "POLARIS, 2ND FLOOR, ANDHERI, JSNLCA, MAHARASHTRA, THANE",
        "is_default": true,
        "name": "Test 21"
      },
      "track_inventory": true,
      "brand": {
        "id": 2586
      },
      "is_set": false,
      "quantities": {
        "sellable": {
          "count": 100,
          "updated_at": 1658325486
        }
      },
      "item_id": 7524280,
      "fynd_article_code": "LS101198_11",
      "date_meta": {
        "added_on_store": 1658325486,
        "inventory_updated_on": 1658325486,
        "modified_on": 1660913492,
        "created_on": 1658325486
      },
      "stage": "verified",
      "_custom_json": {},
      "platforms": {
        "fynd": false,
        "uniket_wholesale": true
      },
      "discount_applied": null
    }
  ],
  "page": {
    "type": "cursor",
    "next_id": "62d809eebeed53f4e27824b6",
    "has_previous": true,
    "has_next": true,
    "item_total": 1714
  }
}
```
</details>









---


### getAppLocations
Get list of locations



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").catalog.getAppLocations({  storeType : value,
 uid : value,
 q : value,
 stage : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").catalog.getAppLocations({  storeType : value,
 uid : value,
 q : value,
 stage : value,
 pageNo : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| storeType | string | no | Helps to sort the location list on the basis of location type. |    
| uid | Array<number> | no | Helps to sort the location list on the basis of uid list. |    
| q | string | no | Query that is to be searched. |    
| stage | string | no | to filter companies on basis of verified or unverified companies. |    
| pageNo | number | no | The page number to navigate through the given set of results |    
| pageSize | number | no | Number of items to retrieve in each page. Default is 20. |  



This API allows to view all the locations asscoiated to a application.

*Returned Response:*




[LocationListSerializer](#LocationListSerializer)

Company profile object. See example below or refer `LocationListSerializer` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "page": {
    "current": 1,
    "type": "number",
    "size": 3,
    "has_previous": false,
    "has_next": true,
    "item_total": 3
  },
  "items": [
    {
      "uid": 2,
      "address": {
        "address1": "POLARIS 2ND FLOOR, ANDHERI",
        "address2": "",
        "landmark": "",
        "lat_long": {
          "type": "Point",
          "coordinates": [
            72.8776559,
            19.0759837
          ]
        },
        "country": "INDIA",
        "state": "MAHARASHTRA",
        "city": "MUMBAI",
        "pincode": 400001
      },
      "company_id": 2,
      "display_name": "Test",
      "name": "Test",
      "store_code": "HS-a0c85",
      "store_type": "high_street"
    }
  ],
  "filters": []
}
```
</details>









---


### getAppProduct
Get company application product data.



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").catalog.getAppProduct({  itemId : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").catalog.getAppProduct({  itemId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| itemId | string | yes | product id for a particular product. |  



Products are the core resource of an application. If successful, returns a Company Application Product resource in the response body depending upon filter sent.

*Returned Response:*




[OwnerAppItemResponse](#OwnerAppItemResponse)

The Company Applicaton Product Data(MOQ/SEO).




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "moq": {
    "minimum": 1,
    "maximum": 10,
    "increment_unit": 2
  },
  "seo": {
    "title": "test-title",
    "description": "test-description"
  },
  "alt_text": {
    "https://test-url.com/test.png": "test-alt"
  },
  "is_gift": false,
  "is_cod": false
}
```
</details>









---


### getAppProducts
Get applicationwise products



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").catalog.getAppProducts({  brandIds : value,
 categoryIds : value,
 departmentIds : value,
 tags : value,
 isDependent : value,
 pageNo : value,
 pageSize : value,
 q : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").catalog.getAppProducts({  brandIds : value,
 categoryIds : value,
 departmentIds : value,
 tags : value,
 isDependent : value,
 pageNo : value,
 pageSize : value,
 q : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| brandIds | Array<number> | no | Get multiple products filtered by Brand Ids |    
| categoryIds | Array<number> | no | Get multiple products filtered by Category Ids |    
| departmentIds | Array<number> | no | Get multiple products filtered by Department Ids |    
| tags | Array<string> | no | Get multiple products filtered by tags |    
| isDependent | boolean | no | This query parameter is used to get the dependent products in the listing. |    
| pageNo | number | no | The page number to navigate through the given set of results |    
| pageSize | number | no | Number of items to retrieve in each page. Default is 10. |    
| q | string | no | Search with Item Code, Name, Slug or Identifier. |  



Products are the core resource of an application. Products can be associated by categories, collections, brands and more. If successful, returns a Product resource in the response body specified in `ApplicationProductListingResponseDatabasePowered`

*Returned Response:*




[ProductListingResponse](#ProductListingResponse)

The Product object. See example below or refer `ApplicationProductListingResponseDatabasePowered` for details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "items": [
    {
      "name": "TV Set",
      "description": "Tv",
      "country_of_origin": "India",
      "currency": "INR",
      "short_description": "",
      "is_set": true,
      "item_code": "TVSET111",
      "brand_uid": 1,
      "template_tag": "television",
      "highlights": [
        "42 Inch"
      ],
      "slug": "tv-set",
      "_custom_json": {},
      "l3_mapping": [
        "electronics>qled_television"
      ],
      "image_nature": "standard",
      "departments": [
        1
      ],
      "created_on": 1599024995,
      "created_by": {
        "username": "919049753052_37528",
        "user_id": "5"
      },
      "modified_on": 1627642010,
      "modified_by": {
        "username": "xxxxxxxxxx",
        "user_id": "xxxxxxxxxxx"
      },
      "stage": "verified",
      "uid": 7501547,
      "verified_by": {
        "username": "Silverbolt",
        "user_id": "0"
      },
      "verified_on": 1626965521,
      "all_sizes": [
        {
          "item_code": "TVSET111",
          "brand_uid": 1,
          "seller_identifier": "HGS272727272",
          "identifiers": [
            {
              "gtin_type": "ean",
              "gtin_value": "HGS272727272",
              "primary": true
            }
          ],
          "company_id": 1,
          "size": "XXLX23, MX11, LX67, XLX45 (146 PCS)",
          "marked_price": 35000
        }
      ],
      "category_slug": "qled-television",
      "is_image_less_product": false,
      "media": [
        {
          "url": "https://hdn-1.addsale.com/x0/products/pictures/item/free/135x0/dcizgsG_Y-Tv-Set.png",
          "type": "image"
        }
      ],
      "variants": {},
      "product_publish": {
        "is_set": false,
        "product_online_date": 1627642009
      },
      "is_dependent": false,
      "is_physical": true,
      "item_type": "set",
      "category_uid": 1,
      "custom_order": {
        "manufacturing_time": 2,
        "is_custom_order": true,
        "manufacturing_time_unit": "days"
      },
      "multi_size": true,
      "no_of_boxes": 1,
      "product_group_tag": [],
      "size_guide": "slim-fit-shirts-for-men",
      "tags": [],
      "teaser_tag": {},
      "synonyms": [],
      "hsn_code": "11111111",
      "return_config": {
        "unit": "days",
        "returnable": false,
        "time": 0
      },
      "all_company_ids": [
        1
      ],
      "all_identifiers": [
        "19WE100"
      ],
      "trader": {
        "address": "sdfdsfsdf",
        "name": "asdasd"
      },
      "trader_type": "Packer",
      "verification_status": "pending",
      "sizes": [
        {
          "size": "FGX33, GHX33 (66 PCS)",
          "store_count": 1
        },
        {
          "size": "XSE WE23X100 (100 PCS)",
          "store_count": 2
        },
        {
          "size": "XSEX100 (100 PCS)",
          "store_count": 3
        },
        {
          "size": "XXLX23, MX11, LX67, XLX45 (146 PCS)",
          "store_count": 3
        }
      ],
      "id": "5f4f2f6371a5970001f13655",
      "brand": {
        "name": "Apple",
        "logo": {
          "aspect_ratio": "1:1",
          "aspect_ratio_f": 1,
          "url": "https://hdn-1.jiox0.de/jioecomm/seller/pictures/logo/50x0/apple-7f951c/logo_apple.png",
          "secure_url": "https://hdn-1.jiox0.de/jioecomm/seller/pictures/logo/50x0/apple-7f951c/logo_apple.png"
        },
        "uid": 13
      },
      "images": [
        {
          "aspect_ratio": "16:25",
          "aspect_ratio_f": 0.64,
          "url": "https://hdn-1.addsale.com/x0/products/pictures/item/free/135x0/dcizgsG_Y-Tv-Set.png",
          "secure_url": "https://hdn-1.addsale.com/x0/products/pictures/item/free/135x0/dcizgsG_Y-Tv-Set.png"
        }
      ],
      "price": {
        "marked": {
          "min": 35000,
          "max": 35000
        },
        "effective": {
          "min": 25000,
          "max": 25000
        }
      }
    }
  ],
  "page": {
    "type": "number",
    "current": 1,
    "size": 1,
    "item_total": 1,
    "has_previous": false,
    "has_next": false
  }
}
```
</details>









---


### getAppicationProducts
List the products



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").catalog.getAppicationProducts({  q : value,
 f : value,
 c : value,
 filters : value,
 isDependent : value,
 sortOn : value,
 pageId : value,
 pageSize : value,
 pageNo : value,
 pageType : value,
 itemIds : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").catalog.getAppicationProducts({  q : value,
 f : value,
 c : value,
 filters : value,
 isDependent : value,
 sortOn : value,
 pageId : value,
 pageSize : value,
 pageNo : value,
 pageType : value,
 itemIds : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| q | string | no | The search query. This can be a partial or complete name of a either a product, brand or category |    
| f | string | no | The search filter parameters. All the parameter filtered from filter parameters will be passed in **f** parameter in this format. **?f=brand:voi-jeans\|\|and:::category:t-shirts\|\|shirts** |    
| c | string | no | The search filter parameters for collection items. All the parameter filtered from filter parameters will be passed in **c** parameter in this format. **?c=brand:in:voi-jeans\|and:::category:nin:t-shirts\|shirts** |    
| filters | boolean | no | Pass `filters` parameter to fetch the filter details. This flag is used to fetch all filters |    
| isDependent | boolean | no | This query parameter is used to get the dependent products in the listing. |    
| sortOn | string | no | The order to sort the list of products on. The supported sort parameters are popularity, price, redemption and discount in either ascending or descending order. See the supported values below. |    
| pageId | string | no | Each response will contain **page_id** param, which should be sent back to make pagination work. |    
| pageSize | number | no | Number of items to retrieve in each page. Default is 12. |    
| pageNo | number | no | If page_type is number then pass it to fetch page items. Default is 1. |    
| pageType | string | no | For pagination type should be cursor or number. Default is cursor. |    
| itemIds | Array<number> | no | Item Ids of product |  



List all the products associated with a brand, collection or category in a requested sort order. The API additionally supports arbitrary search queries that may refer the name of any product, brand, category or collection. If successful, returns a paginated list of products specified in `ApplicationProductListingResponse`

*Returned Response:*




[ApplicationProductListingResponse](#ApplicationProductListingResponse)

List of Products. See example below or refer `ApplicationProductListingResponse` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "filters": [
    {
      "key": {
        "display": "Department",
        "name": "department",
        "kind": "multivalued",
        "logo": "https://hdn-1.fynd.com/global/menu-icons/Department.svg"
      },
      "values": [
        {
          "display": "Debra Villarreal",
          "count": 15,
          "is_selected": false,
          "value": "Debra-Villarreal",
          "logo": {
            "type": "image",
            "url": "http://cdn4.gofynd.com/media/category_tab_icons/department/Men.png"
          }
        },
        {
          "display": "Tracey Miller",
          "count": 15,
          "is_selected": false,
          "value": "Tracey-Miller",
          "logo": {
            "type": "image",
            "url": "http://cdn4.gofynd.com/media/category_tab_icons/department/Men.png"
          }
        }
      ]
    },
    {
      "key": {
        "display": "Category",
        "name": "category",
        "kind": "multivalued",
        "logo": "https://hdn-1.fynd.com/global/menu-icons/Category.svg"
      },
      "values": [
        {
          "display": "Amy Kim DDS",
          "count": 15,
          "is_selected": false,
          "value": "3",
          "logo": "http://cdn4.gofynd.com/media/banner/category/original/12063_a5bb91bd5cb44c3c9db98c2a0e6b3d99.jpg"
        }
      ]
    },
    {
      "key": {
        "display": "Gender",
        "name": "gender",
        "kind": "multivalued",
        "logo": "https://hdn-1.fynd.com/global/menu-icons/Gender.svg"
      },
      "values": [
        {
          "display": "Men",
          "count": 15,
          "is_selected": false,
          "value": "men"
        },
        {
          "display": "Women",
          "count": 15,
          "is_selected": false,
          "value": "women"
        }
      ]
    },
    {
      "key": {
        "display": "Size",
        "name": "sizes",
        "kind": "multivalued",
        "logo": "https://hdn-1.fynd.com/global/menu-icons/Sizes.svg"
      },
      "values": [
        {
          "display": "13",
          "count": 15,
          "is_selected": false,
          "value": "13"
        }
      ]
    },
    {
      "key": {
        "display": "Brand",
        "name": "brand",
        "kind": "multivalued",
        "logo": "https://hdn-1.fynd.com/global/menu-icons/Brand%20ID.svg"
      },
      "values": [
        {
          "display": "Barry, Jennings and Larson",
          "count": 15,
          "is_selected": false,
          "value": "1",
          "logo": "https://hdn-1.fynd.com/media/logo/brand/original/12391_0d956c6c71a4427895c15e44cba82f88.jpg"
        }
      ]
    },
    {
      "key": {
        "display": "Rating",
        "name": "rating",
        "kind": "multivalued",
        "logo": "https://hdn-1.fynd.com/global/menu-icons/Rating.svg"
      },
      "values": [
        {
          "count": 15,
          "display": "2 - 3",
          "value": "[2 TO 3}",
          "is_selected": false
        }
      ]
    },
    {
      "key": {
        "display": "Image",
        "name": "image_nature",
        "kind": "multivalued",
        "logo": "https://hdn-1.fynd.com/global/menu-icons/image%20Nature.svg"
      },
      "values": [
        {
          "display": "GoodQuality",
          "count": 15,
          "is_selected": false,
          "value": "standard"
        }
      ]
    },
    {
      "key": {
        "display": "Monica Hampton",
        "name": "material",
        "kind": "multivalued",
        "logo": ""
      },
      "values": [
        {
          "display": "Neoprene",
          "count": 15,
          "is_selected": false,
          "value": "Neoprene"
        }
      ]
    },
    {
      "key": {
        "display": "John Mendoza",
        "name": "weight",
        "kind": "multivalued",
        "logo": ""
      },
      "values": [
        {
          "display": "100",
          "count": 15,
          "is_selected": false,
          "value": "100"
        }
      ]
    },
    {
      "key": {
        "display": "Kimberly Mcdaniel",
        "name": "gender",
        "kind": "multivalued",
        "logo": ""
      },
      "values": [
        {
          "display": "['Men', 'Women']",
          "count": 15,
          "is_selected": false,
          "value": "['Men', 'Women']"
        }
      ]
    },
    {
      "key": {
        "display": "Kimberly Davidson",
        "name": "color",
        "kind": "multivalued",
        "logo": ""
      },
      "values": [
        {
          "display": "Grey",
          "count": 15,
          "is_selected": false,
          "value": "808080"
        }
      ]
    },
    {
      "key": {
        "display": "Available",
        "name": "is_available",
        "kind": "singlevalued",
        "logo": ""
      },
      "values": [
        {
          "display": "Available",
          "count": 3,
          "is_selected": false,
          "value": true
        }
      ]
    }
  ],
  "items": [
    {
      "type": "product",
      "attributes": {
        "primary_color_hex": "808080",
        "weight": "100",
        "gender": "women",
        "material": "Neoprene",
        "primary_color": "DarkGrey"
      },
      "categories": [
        {
          "id": 3,
          "uid": 3,
          "name": "Amy Kim DDS",
          "logo": {
            "type": "image",
            "url": "https://hdn-1.fynd.com/media/banner_portrait/brand/original/540_ecba3a1af141467da8abc20500f983db.jpg"
          },
          "action": {
            "page": {
              "type": "category",
              "query": {
                "category": [
                  "Amy-Kim-DDS"
                ]
              }
            },
            "type": "page"
          },
          "_custom_json": {}
        }
      ],
      "sellable": true,
      "name": "benchmark collaborative paradigms",
      "slug": "benchmark-collaborative-paradigms",
      "uid": 1,
      "item_type": "set",
      "brand": {
        "type": "brand",
        "name": "Hess Inc",
        "logo": {
          "type": "image",
          "url": "https://hdn-1.fynd.com/media/logo/brand/original/12391_0d956c6c71a4427895c15e44cba82f88.jpg"
        },
        "action": {
          "page": {
            "type": "products",
            "query": {
              "brand": [
                "Hess-Inc"
              ]
            }
          },
          "type": "page"
        },
        "_custom_json": {}
      },
      "action": {
        "page": {
          "type": "product",
          "query": {
            "slug": "benchmark-collaborative-paradigms"
          }
        },
        "type": "page"
      },
      "medias": [
        {
          "type": "image",
          "url": "https://hdn-1.fynd.com/media/fynd_store_items/l2_category/original/2830_c5bb5fc02f414307a828c4c56483c30a.jpg"
        }
      ],
      "discount": "14% OFF",
      "price": {
        "marked": {
          "min": 1399,
          "max": 1499,
          "currency_code": "INR",
          "currency_symbol": "₹"
        },
        "effective": {
          "min": 1199,
          "max": 1399,
          "currency_code": "INR",
          "currency_symbol": "₹"
        }
      },
      "is_tryout": false,
      "promo_meta": {
        "title": "",
        "subtitle": ""
      },
      "item_code": "ITEM_CODE_1",
      "rating": 2.7
    },
    {
      "type": "product",
      "attributes": {
        "primary_color_hex": "808080",
        "weight": "100",
        "gender": "women",
        "material": "Neoprene",
        "primary_color": "DarkGrey"
      },
      "categories": [
        {
          "id": 3,
          "uid": 3,
          "name": "Amy Kim DDS",
          "logo": {
            "type": "image",
            "url": "https://hdn-1.fynd.com/media/banner_portrait/brand/original/540_ecba3a1af141467da8abc20500f983db.jpg"
          },
          "action": {
            "page": {
              "type": "category",
              "query": {
                "category": [
                  "Amy-Kim-DDS"
                ]
              }
            },
            "type": "page"
          },
          "_custom_json": {}
        }
      ],
      "sellable": true,
      "name": "architect granular e-business",
      "slug": "architect-granular-e-business",
      "uid": 10,
      "item_type": "set",
      "brand": {
        "type": "brand",
        "name": "Hess Inc",
        "logo": {
          "type": "image",
          "url": "https://hdn-1.fynd.com/media/logo/brand/original/12391_0d956c6c71a4427895c15e44cba82f88.jpg"
        },
        "action": {
          "page": {
            "type": "products",
            "query": {
              "brand": [
                "Hess-Inc"
              ]
            }
          },
          "type": "page"
        },
        "_custom_json": {}
      },
      "action": {
        "page": {
          "type": "product",
          "query": {
            "slug": "architect-granular-e-business"
          }
        },
        "type": "page"
      },
      "medias": [
        {
          "type": "image",
          "url": "https://hdn-1.fynd.com/media/fynd_store_items/l2_category/original/2830_c5bb5fc02f414307a828c4c56483c30a.jpg"
        }
      ],
      "discount": "14% OFF",
      "price": {
        "marked": {
          "min": 1399,
          "max": 1499,
          "currency_code": "INR",
          "currency_symbol": "₹"
        },
        "effective": {
          "min": 1199,
          "max": 1399,
          "currency_code": "INR",
          "currency_symbol": "₹"
        }
      },
      "is_tryout": false,
      "promo_meta": {
        "title": "",
        "subtitle": ""
      },
      "item_code": "ITEM_CODE_2",
      "rating": 2.7
    },
    {
      "type": "product",
      "attributes": {
        "primary_color_hex": "808080",
        "weight": "100",
        "gender": "women",
        "material": "Neoprene",
        "primary_color": "DarkGrey"
      },
      "categories": [
        {
          "id": 3,
          "uid": 3,
          "name": "Amy Kim DDS",
          "logo": {
            "type": "image",
            "url": "https://hdn-1.fynd.com/media/banner_portrait/brand/original/540_ecba3a1af141467da8abc20500f983db.jpg"
          },
          "action": {
            "page": {
              "type": "category",
              "query": {
                "category": [
                  "Amy-Kim-DDS"
                ]
              }
            },
            "type": "page"
          },
          "_custom_json": {}
        }
      ],
      "sellable": true,
      "name": "facilitate enterprise supply-chains",
      "slug": "facilitate-enterprise-supply-chains",
      "uid": 11,
      "item_type": "set",
      "brand": {
        "type": "brand",
        "name": "Hess Inc",
        "logo": {
          "type": "image",
          "url": "https://hdn-1.fynd.com/media/logo/brand/original/12391_0d956c6c71a4427895c15e44cba82f88.jpg"
        },
        "action": {
          "page": {
            "type": "products",
            "query": {
              "brand": [
                "Hess-Inc"
              ]
            }
          },
          "type": "page"
        },
        "_custom_json": {}
      },
      "action": {
        "page": {
          "type": "product",
          "query": {
            "slug": "facilitate-enterprise-supply-chains"
          }
        },
        "type": "page"
      },
      "medias": [
        {
          "type": "image",
          "url": "https://hdn-1.fynd.com/media/fynd_store_items/l2_category/original/2830_c5bb5fc02f414307a828c4c56483c30a.jpg"
        }
      ],
      "discount": "14% OFF",
      "price": {
        "marked": {
          "min": 1399,
          "max": 1499,
          "currency_code": "INR",
          "currency_symbol": "₹"
        },
        "effective": {
          "min": 1199,
          "max": 1399,
          "currency_code": "INR",
          "currency_symbol": "₹"
        }
      },
      "is_tryout": false,
      "promo_meta": {
        "title": "",
        "subtitle": ""
      },
      "item_code": "ITEM_CODE_3",
      "rating": 2.7
    },
    {
      "type": "product",
      "attributes": {
        "primary_color_hex": "808080",
        "weight": "100",
        "gender": "women",
        "material": "Neoprene",
        "primary_color": "DarkGrey"
      },
      "categories": [
        {
          "id": 3,
          "uid": 3,
          "name": "Amy Kim DDS",
          "logo": {
            "type": "image",
            "url": "https://hdn-1.fynd.com/media/banner_portrait/brand/original/540_ecba3a1af141467da8abc20500f983db.jpg"
          },
          "action": {
            "page": {
              "type": "category",
              "query": {
                "category": [
                  "Amy-Kim-DDS"
                ]
              }
            },
            "type": "page"
          },
          "_custom_json": {}
        }
      ],
      "sellable": true,
      "name": "optimize web-enabled e-tailers",
      "slug": "optimize-web-enabled-e-tailers",
      "uid": 12,
      "item_type": "set",
      "brand": {
        "type": "brand",
        "name": "Hess Inc",
        "logo": {
          "type": "image",
          "url": "https://hdn-1.fynd.com/media/logo/brand/original/12391_0d956c6c71a4427895c15e44cba82f88.jpg"
        },
        "action": {
          "page": {
            "type": "products",
            "query": {
              "brand": [
                "Hess-Inc"
              ]
            }
          },
          "type": "page"
        },
        "_custom_json": {}
      },
      "action": {
        "page": {
          "type": "product",
          "query": {
            "slug": "optimize-web-enabled-e-tailers"
          }
        },
        "type": "page"
      },
      "medias": [
        {
          "type": "image",
          "url": "https://hdn-1.fynd.com/media/fynd_store_items/l2_category/original/2830_c5bb5fc02f414307a828c4c56483c30a.jpg"
        }
      ],
      "discount": "14% OFF",
      "price": {
        "marked": {
          "min": 1399,
          "max": 1499,
          "currency_code": "INR",
          "currency_symbol": "₹"
        },
        "effective": {
          "min": 1199,
          "max": 1399,
          "currency_code": "INR",
          "currency_symbol": "₹"
        }
      },
      "is_tryout": false,
      "promo_meta": {
        "title": "",
        "subtitle": ""
      },
      "item_code": "ITEM_CODE_4",
      "rating": 2.7
    }
  ],
  "sort_on": [
    {
      "display": "Latest Products.",
      "name": "Latest Products.",
      "logo": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/360x0/56_MKT02AI060CORAL/1_1567590349681.jpg",
      "value": "latest",
      "is_selected": true
    }
  ],
  "page": {
    "current": 1,
    "total": 2,
    "has_previous": false,
    "has_next": true,
    "item_total": 15,
    "type": "number"
  }
}
```
</details>









---


### getApplicationBrandListing
List all the brands for the application



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").catalog.getApplicationBrandListing({  pageNo : value,
 pageSize : value,
 q : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").catalog.getApplicationBrandListing({  pageNo : value,
 pageSize : value,
 q : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNo | number | no | The page number to navigate through the given set of results |    
| pageSize | number | no | Number of items to retrieve in each page. Default is 12. |    
| q | string | no | Search query with brand name.Use this parameter to search brands by  brand name. |  



A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`

*Returned Response:*




[BrandListingResponse](#BrandListingResponse)

List of Brands. See example below or refer `BrandListingResponse` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "items": [
    {
      "uid": 1,
      "name": "Barry, Jennings and Larson",
      "slug": "Hess-Inc",
      "action": {
        "page": {
          "type": "products",
          "query": {
            "brand": [
              "Hess-Inc"
            ]
          }
        },
        "type": "page"
      },
      "logo": {
        "type": "image",
        "url": "https://hdn-1.fynd.com/media/logo/brand/original/12391_0d956c6c71a4427895c15e44cba82f88.jpg"
      },
      "banners": {
        "portrait": {
          "type": "image",
          "url": "https://hdn-1.fynd.com/media/banner_portrait/brand/original/12537_9cdfc6835e814b0986ee1643d38cf6cd.png"
        }
      },
      "en_name": "Barry, Jennings and Larson"
    }
  ],
  "page": {
    "current": 1,
    "total": 1,
    "has_previous": false,
    "has_next": false,
    "item_total": 1,
    "type": "number"
  }
}
```
</details>









---


### getApplicationBrands
List all the brands



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").catalog.getApplicationBrands({  department : value,
 pageNo : value,
 pageSize : value,
 q : value,
 brandId : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").catalog.getApplicationBrands({  department : value,
 pageNo : value,
 pageSize : value,
 q : value,
 brandId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| department | string | no | The name of the department. Use this parameter to filter products by a particular department. See below the list of available departments. You can retrieve available departments from the **v1.0/departments/** API |    
| pageNo | number | no | The page number to navigate through the given set of results |    
| pageSize | number | no | Number of items to retrieve in each page. Default is 12. |    
| q | string | no | Search query with brand name.Use this parameter to search brands by  brand name. |    
| brandId | Array<number> | no | Helps to sort the brands list on the basis of uid list. |  



A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`

*Returned Response:*




[BrandListingResponse](#BrandListingResponse)

List of Brands. See example below or refer `BrandListingResponse` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "items": [
    {
      "uid": 1,
      "name": "Barry, Jennings and Larson",
      "slug": "Hess-Inc",
      "action": {
        "page": {
          "type": "products",
          "query": {
            "brand": [
              "Hess-Inc"
            ]
          }
        },
        "type": "page"
      },
      "logo": {
        "type": "image",
        "url": "https://hdn-1.fynd.com/media/logo/brand/original/12391_0d956c6c71a4427895c15e44cba82f88.jpg"
      },
      "banners": {
        "portrait": {
          "type": "image",
          "url": "https://hdn-1.fynd.com/media/banner_portrait/brand/original/12537_9cdfc6835e814b0986ee1643d38cf6cd.png"
        }
      },
      "en_name": "Barry, Jennings and Larson"
    }
  ],
  "page": {
    "current": 1,
    "total": 1,
    "has_previous": false,
    "has_next": false,
    "item_total": 1,
    "type": "number"
  }
}
```
</details>









---


### getApplicationCategoryListing
List all the brands for the application



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").catalog.getApplicationCategoryListing({  departmentId : value,
 pageNo : value,
 pageSize : value,
 q : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").catalog.getApplicationCategoryListing({  departmentId : value,
 pageNo : value,
 pageSize : value,
 q : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| departmentId | number | no | A `department_id` is a unique identifier for a particular department. |    
| pageNo | number | no | The page number to navigate through the given set of results |    
| pageSize | number | no | Number of items to retrieve in each page. Default is 12. |    
| q | string | no | Search query with brand name.Use this parameter to search brands by  brand name. |  



A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`

*Returned Response:*




[BrandListingResponse](#BrandListingResponse)

List of Brands. See example below or refer `BrandListingResponse` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "items": [
    {
      "uid": 1,
      "name": "Barry, Jennings and Larson",
      "slug": "Hess-Inc",
      "action": {
        "page": {
          "type": "products",
          "query": {
            "brand": [
              "Hess-Inc"
            ]
          }
        },
        "type": "page"
      },
      "logo": {
        "type": "image",
        "url": "https://hdn-1.fynd.com/media/logo/brand/original/12391_0d956c6c71a4427895c15e44cba82f88.jpg"
      },
      "banners": {
        "portrait": {
          "type": "image",
          "url": "https://hdn-1.fynd.com/media/banner_portrait/brand/original/12537_9cdfc6835e814b0986ee1643d38cf6cd.png"
        }
      },
      "en_name": "Barry, Jennings and Larson"
    }
  ],
  "page": {
    "current": 1,
    "total": 1,
    "has_previous": false,
    "has_next": false,
    "item_total": 1,
    "type": "number"
  }
}
```
</details>









---


### getApplicationDepartmentListing
List all the departments for the application



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").catalog.getApplicationDepartmentListing({  pageNo : value,
 pageSize : value,
 q : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").catalog.getApplicationDepartmentListing({  pageNo : value,
 pageSize : value,
 q : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNo | number | no | The page number to navigate through the given set of results |    
| pageSize | number | no | Number of items to retrieve in each page. Default is 12. |    
| q | string | no | Search query with brand name.Use this parameter to search department by name. |  



Departments are a way to categorise similar products. A product can lie in multiple departments. For example, a skirt can below to the 'Women's Fashion' Department while a handbag can lie in 'Women's Accessories' Department. Use this API to list all the application departments. If successful, returns the list of departments specified in `ApplicationDepartmentListingResponse`

*Returned Response:*




[ApplicationDepartmentListingResponse](#ApplicationDepartmentListingResponse)

List of Departments. See example below or refer `BrandListingResponse` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "items": [
    {
      "uid": 1,
      "name": "Barry, Jennings and Larson",
      "slug": "Hess-Inc",
      "action": {
        "page": {
          "type": "products",
          "query": {
            "brand": [
              "Hess-Inc"
            ]
          }
        },
        "type": "page"
      },
      "logo": {
        "type": "image",
        "url": "https://hdn-1.fynd.com/media/logo/brand/original/12391_0d956c6c71a4427895c15e44cba82f88.jpg"
      },
      "banners": {
        "portrait": {
          "type": "image",
          "url": "https://hdn-1.fynd.com/media/banner_portrait/brand/original/12537_9cdfc6835e814b0986ee1643d38cf6cd.png"
        }
      },
      "en_name": "Barry, Jennings and Larson"
    }
  ],
  "page": {
    "current": 1,
    "total": 1,
    "has_previous": false,
    "has_next": false,
    "item_total": 1,
    "type": "number"
  }
}
```
</details>









---


### getAutocompleteConfig
List all Autocomplete Keyword Listing



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").catalog.getAutocompleteConfig();

// Async/Await
const data = await client.application("<APPLICATION_ID>").catalog.getAutocompleteConfig();
```






Custom Autocomplete Keyword allows you to map conditions with keywords to give you the ultimate results

*Returned Response:*




[GetAutocompleteWordsResponse](#GetAutocompleteWordsResponse)

List of custom autocomplete keywords. See example below or refer `GetAutocompleteWordsResponseSchema` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "page": {
    "current": 1,
    "size": 1,
    "has_previous": false,
    "has_next": false,
    "item_count": 1
  },
  "items": [
    {
      "uid": "602fa1eaa596ce349563f6c6",
      "app_id": "000000000000000000000001",
      "words": [
        "dasd"
      ],
      "is_active": true,
      "results": [
        {
          "_custom_json": {},
          "display": "Helllow",
          "logo": {
            "url": "https://hdn-1.addsale.com/addsale/company/61/applications/600a5b3fe0991a4718cdb448/company/1/application/000000000000000000000001/search/pictures/square-logo/original/n_8bvEaBw-Helllow.png"
          },
          "action": {
            "type": "page",
            "page": {
              "query": {
                "brand": [
                  "nike"
                ]
              },
              "type": "products",
              "url": "/products/?brand=nike"
            }
          }
        }
      ]
    }
  ]
}
```
</details>









---


### getAutocompleteKeywordDetail
Get a Autocomplete Keywords Details



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").catalog.getAutocompleteKeywordDetail({  id : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").catalog.getAutocompleteKeywordDetail({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to retrieve. |  



Get the details of a words by its `id`. If successful, returns a keywords resource in the response body specified in `GetAutocompleteWordsResponseSchema`

*Returned Response:*




[GetAutocompleteWordsResponse](#GetAutocompleteWordsResponse)

The mapping object. See example below or refer `GetAutocompleteWordsResponseSchema` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "uid": "602fa1eaa596ce349563f6c6",
  "app_id": "000000000000000000000001",
  "words": [
    "dasd"
  ],
  "is_active": true,
  "results": [
    {
      "_custom_json": {},
      "display": "Helllow",
      "logo": {
        "url": "https://hdn-1.addsale.com/addsale/company/61/applications/600a5b3fe0991a4718cdb448/company/1/application/000000000000000000000001/search/pictures/square-logo/original/n_8bvEaBw-Helllow.png"
      },
      "action": {
        "type": "page",
        "page": {
          "query": {
            "brand": [
              "nike"
            ]
          },
          "type": "products",
          "url": "/products/?brand=nike"
        }
      }
    }
  ]
}
```
</details>









---


### getCatalogConfiguration
Get configuration meta  details for catalog for admin panel



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").catalog.getCatalogConfiguration();

// Async/Await
const data = await client.application("<APPLICATION_ID>").catalog.getCatalogConfiguration();
```






configuration meta  details for catalog.

*Returned Response:*




[GetCatalogConfigurationMetaData](#GetCatalogConfigurationMetaData)

configuration details for catalog. See example below or refer `GetCatalogConfigurationMetaDataSchema` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getCatalogInsights
Analytics data of catalog and inventory.



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").catalog.getCatalogInsights({  brand : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").catalog.getCatalogInsights({  brand : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| brand | string | no | Brand slug |  



Catalog Insights api returns the count of catalog related data like products, brands, departments and categories that have been made live as per configuration of the app.

*Returned Response:*




[CatalogInsightResponse](#CatalogInsightResponse)

Response Data




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "item": {
    "count": 637707,
    "out_of_stock_count": 452806,
    "sellable_count": 184901
  }
}
```
</details>









---


### getCategories
List all the categories



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").catalog.getCategories({  department : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").catalog.getCategories({  department : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| department | string | no | The name of the department. Use this parameter to filter products by a particular department. See below the list of available departments. You can retrieve available departments from the **v1.0/departments/** API |  



List all the categories. You can optionally pass filter the brands by the department. If successful, returns a paginated list of brands specified in `CategoryListingResponse`

*Returned Response:*




[CategoryListingResponse](#CategoryListingResponse)

List of Categories. See example below or refer `CategoryListingResponse` for details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "departments": [
    {
      "slug": "Cody-Doyle",
      "uid": 1
    }
  ],
  "data": [
    {
      "department": "Cody-Doyle",
      "items": [
        {
          "name": "Janet Parker",
          "image": {
            "aspect_ratio": "13:20",
            "aspect_ratio_f": 0.65,
            "url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/banner_portrait/category/resize-w:130,h:200/12064_e69e1d8b5e934d3488f0dc8663d8a158.jpg"
          },
          "uid": 1,
          "slug": "Janet-Parker",
          "_custom_json": {},
          "action": {
            "type": "category",
            "url": "https://api.addsale.com/platform/content/v1/products/?l1_category=Janet-Parker&department=Jaime-Chambers",
            "query": {
              "l1_category": [
                "Janet-Parker"
              ],
              "department": [
                "Jaime-Chambers"
              ]
            }
          },
          "childs": [
            {
              "name": "Hannah Lawson",
              "image": {
                "aspect_ratio": "13:20",
                "aspect_ratio_f": 0.65,
                "url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/banner_portrait/category/resize-w:130,h:200/12064_e69e1d8b5e934d3488f0dc8663d8a158.jpg"
              },
              "uid": 2,
              "slug": "Hannah-Lawson",
              "_custom_json": {},
              "action": {
                "type": "category",
                "url": "https://api.addsale.com/platform/content/v1/products/?l2_category=Hannah-Lawson&department=Jaime-Chambers",
                "query": {
                  "l2_category": [
                    "Hannah-Lawson"
                  ],
                  "department": [
                    "Jaime-Chambers"
                  ]
                }
              },
              "childs": [
                {
                  "name": "Logan Black",
                  "image": {
                    "aspect_ratio": "13:20",
                    "aspect_ratio_f": 0.65,
                    "url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/banner_portrait/category/resize-w:130,h:200/12064_e69e1d8b5e934d3488f0dc8663d8a158.jpg"
                  },
                  "uid": 3,
                  "slug": "Logan-Black",
                  "_custom_json": {},
                  "action": {
                    "type": "category",
                    "url": "https://api.addsale.com/platform/content/v1/products/?category=Logan-Black&department=Jaime-Chambers",
                    "query": {
                      "category": [
                        "Logan-Black"
                      ],
                      "department": [
                        "Jaime-Chambers"
                      ]
                    }
                  },
                  "childs": []
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```
</details>









---


### getCategoryData
Get product category by uid



```javascript
// Promise
const promise = client.catalog.getCategoryData({  uid : value });

// Async/Await
const data = await client.catalog.getCategoryData({  uid : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| uid | string | yes | Category unique id |  



This API gets meta associated to product categories.

*Returned Response:*




[SingleCategoryResponse](#SingleCategoryResponse)

Get Data for one category. See example below or refer `CategoryResponse` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "data": {
    "name": "Air Conditioners",
    "media": {
      "portrait": "https://hdn-1.addsale.com/x0/category/pictures/portrait-banner/original/_4p7Kz9Yp-banner.png",
      "landscape": "https://hdn-1.addsale.com/x0/category/pictures/landscape-banner/original/nsi0nJ6gX-landscape.png",
      "logo": "https://hdn-1.addsale.com/x0/category/pictures/square-logo/original/zTgh1zslj-.png"
    },
    "marketplaces": {},
    "tryouts": [],
    "is_active": true,
    "created_by": {
      "username": "917972410891_48194",
      "user_id": "5646"
    },
    "uid": 22330,
    "slug": "air-conditioners",
    "priority": 1,
    "synonyms": [],
    "modified_by": {
      "username": "nikhilmhatre_gofynd_com_97636",
      "user_id": "16"
    },
    "level": 3,
    "hierarchy": [
      {
        "l1": 1,
        "department": 1,
        "l2": 22329
      }
    ],
    "created_on": "2021-04-02T15:43:59.410000Z",
    "departments": [
      1
    ],
    "modified_on": "2021-04-13T13:57:56.443000Z",
    "id": "60673bbf7896da00017885ad"
  }
}
```
</details>









---


### getCollectionDetail
Get a particular collection



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").catalog.getCollectionDetail({  slug : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").catalog.getCollectionDetail({  slug : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| slug | string | yes | A `slug` is a human readable, URL friendly unique identifier of an object. Pass the `slug` of the collection which you want to retrieve. |  



Get the details of a collection by its `slug`. If successful, returns a Collection resource in the response body specified in `CollectionDetailResponse`

*Returned Response:*




[CollectionDetailResponse](#CollectionDetailResponse)

The Collection object. See example below or refer `CollectionDetailResponse` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "uid": "5ec5fc757cb1e4740a17da23",
  "type": "query",
  "query": {
    "l3_categories": [
      "12"
    ],
    "sort_on": "discount_asc"
  },
  "name": "new",
  "banners": {
    "portrait": {
      "type": "image",
      "url": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1588858137/production/applications/app_000000000000000000000001/media/collection/portrait/xzuftshmmw4yuwzb12pm.png"
    },
    "landscape": {
      "type": "image",
      "url": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1588857999/production/applications/app_000000000000000000000001/media/collection/landscape/avm7xibo2jgk8glc4bwl.png"
    }
  },
  "logo": {
    "type": "image",
    "url": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1588857854/production/applications/app_000000000000000000000001/media/collection/logo/w9ns7nfgv7fk45xqrpoh.png"
  },
  "published": true,
  "description": "",
  "is_active": true,
  "tags": [],
  "slug": "new",
  "action": {
    "page": {
      "type": "collection",
      "query": {
        "collection": [
          "new"
        ]
      }
    },
    "type": "page"
  },
  "allow_facets": true,
  "allow_sort": true,
  "visible_facets_keys": [],
  "meta": {},
  "badge": {
    "color": "#ffffff",
    "text": ""
  },
  "sort_on": "popular",
  "_custom_json": {},
  "_locale_language": {},
  "_schedule": {
    "start": "2020-05-21T03:58:41.237000Z",
    "next_schedule": [
      {
        "start": "2020-05-21T03:58:41.237000Z",
        "end": null
      }
    ],
    "end": null
  }
}
```
</details>









---


### getCollectionItems
Get the items for a collection



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").catalog.getCollectionItems({  id : value,
 sortOn : value,
 pageId : value,
 pageSize : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").catalog.getCollectionItems({  id : value,
 sortOn : value,
 pageId : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | A `id` is a unique identifier of a collection. |    
| sortOn | string | no | Each response will contain sort_on param, which should be sent back to make pagination work. |    
| pageId | string | no | Each response will contain next_id param, which should be sent back to make pagination work. |    
| pageSize | number | no | Number of items to retrieve in each page. Default is 12. |  



Get items from a collection specified by its `id`.

*Returned Response:*




[GetCollectionItemsResponse](#GetCollectionItemsResponse)

The attached items of an collection. See example below or refer `GetCollectionItemsResponseSchema` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getCompanyBrandDetail
Get the Company Brand details of Optin.



```javascript
// Promise
const promise = client.catalog.getCompanyBrandDetail({  isActive : value,
 q : value,
 pageNo : value,
 pageSize : value,
 marketplace : value });

// Async/Await
const data = await client.catalog.getCompanyBrandDetail({  isActive : value,
 q : value,
 pageNo : value,
 pageSize : value,
 marketplace : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| isActive | boolean | no | The is_active status for the optin id. |    
| q | boolean | no | The search value to filter the list. |    
| pageNo | number | no | The number of page for the company id. |    
| pageSize | number | no | Number of records that can be seen on the page for the company id. |    
| marketplace | string | no | The marketplace platform associated with the company id. |  



Get the details of the Brands associated with the given company_id passed.

*Returned Response:*




[OptinCompanyBrandDetailsView](#OptinCompanyBrandDetailsView)

See example below or refer `OptinCompanyBrandDetailsView` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getCompanyDetail
Get the Company details.



```javascript
// Promise
const promise = client.catalog.getCompanyDetail();

// Async/Await
const data = await client.catalog.getCompanyDetail();
```






Get the details of the company associated with the given company_id passed.

*Returned Response:*




[OptinCompanyDetail](#OptinCompanyDetail)

See example below or refer `OptinCompanyDetailSchema` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getCompanyMetrics
Get the Company metrics



```javascript
// Promise
const promise = client.catalog.getCompanyMetrics();

// Async/Await
const data = await client.catalog.getCompanyMetrics();
```






Get the Company metrics associated with the company ID passed.

*Returned Response:*




[OptinCompanyMetrics](#OptinCompanyMetrics)

See example below or refer `OptinCompanyMetrics` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getConfigurationByType
Get configured details for catalog



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").catalog.getConfigurationByType({  type : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").catalog.getConfigurationByType({  type : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| type | string | yes | type can be brands, categories etc. |  



configured details for catalog.

*Returned Response:*




[GetAppCatalogEntityConfiguration](#GetAppCatalogEntityConfiguration)

Get application level configured catalog details. See example below or refer `GetAppCatalogEntityConfigurationSchema` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getConfigurationMetadata
Get configuration metadata details for catalog for admin panel



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").catalog.getConfigurationMetadata({  configType : value,
 templateSlug : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").catalog.getConfigurationMetadata({  configType : value,
 templateSlug : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| configType | string | yes | A `config_type` is an identifier that defines a specific type of configuration. |    
| templateSlug | string | no | Get configuration list filtered by `template_slug` string. This is for the details and comparision groups. |  



Get the configuraion metadata details for catalog.

*Returned Response:*




[GetConfigMetadataResponse](#GetConfigMetadataResponse)

configuration details for catalog. See example below or refer `GetConfigMetadataResponseSchema` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "data": [
    {
      "key": "screen_size_filter",
      "display": "Screen Size",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "primary_camera_filter",
      "display": "Primary Camera (duplicate)",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "selfie_camera_filter",
      "display": "Selfie Camera (Duplicate)",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "weight_group",
      "display": "Weight Group",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "pallet",
      "display": "pallet",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "general_information",
      "display": "General Information",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "brand_name",
      "display": "brand",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "gender",
      "display": "Gender",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "socks_length",
      "display": "Socks Length",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "sub_brand",
      "display": "Sub-brand",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "color",
      "display": "Colour",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "boot_length",
      "display": "Boot Length",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "bottomwear_length",
      "display": "Bottomwear Length",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "thread_count",
      "display": "Thread Count",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "sleeve_type",
      "display": "Sleeve Type",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "collar_type",
      "display": "Collar Type",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "food-preference",
      "display": "Food Preference",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "guitar-types",
      "display": "Guitar Types",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "storage",
      "display": "Storage",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "quality",
      "display": "Quality",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "material",
      "display": "Material",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "arch_type",
      "display": "Arch Type",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "like-dislike",
      "display": "Like & Dislike",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "dietary-preference",
      "display": "Dietary preference",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "organic",
      "display": "organic",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "utility",
      "display": "Utility",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "dial_shape",
      "display": "Dial Shape",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "sheet_size",
      "display": "Sheet Size",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "strap_type",
      "display": "Strap Type",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "movement_type",
      "display": "Movement Type",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "sleeve_length",
      "display": "Sleeve Length",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "neck_type",
      "display": "Neck Type",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "denim_type",
      "display": "Denim Type",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "bed_size",
      "display": "Bed Size",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "pattern",
      "display": "Pattern",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "topwear_length",
      "display": "Topwear Length",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "closure_type",
      "display": "Closure Type",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "product_fit",
      "display": "Product Fit",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "clasp_type",
      "display": "Clasp Type",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "toe_type",
      "display": "Toe Type",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "ram",
      "display": "Memory (RAM)",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "stone_type",
      "display": "Stone Type",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "hair_type",
      "display": "Hair Type",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "care_instructions",
      "display": "Care Instructions",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "warranty",
      "display": "Warranty",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "spf",
      "display": "Spf",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "fragrance_type",
      "display": "Fragrance Type",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "primary-colour",
      "display": "Primary Colour",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "fretboard-material",
      "display": "Fretboard Material",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "cleaning-type",
      "display": "Cleaning Type",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "lens_material",
      "display": "Lens Material",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "maximum-shelf-life",
      "display": "Maximum Shelf Life",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "base-flavour",
      "display": "Base Flavour",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "battery",
      "display": "Battery",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "net-quantity",
      "display": "Net Quantity",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "marketer-address",
      "display": "Marketer Address",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "marketer-name",
      "display": "Marketer Name",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "import-month-and-year",
      "display": "Import Month & Year",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "name-of-the-commodity",
      "display": "Name of the commodity",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "date-first-available",
      "display": "Date first available",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "iron",
      "display": "iron_attribute",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "iron-template2",
      "display": "iron-template2",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "mg",
      "display": "Mg",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": [
        "mg",
        "g",
        "oz",
        "kg",
        "lb"
      ]
    },
    {
      "key": "name",
      "display": "Name",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "sassy-level",
      "display": "Sassy Level",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": [
        "mm",
        "cm",
        "in",
        "ft",
        "m",
        "km"
      ]
    },
    {
      "key": "test-attribute",
      "display": "Test Attribute",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "filter-type",
      "display": "Filter Type",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "l3-category",
      "display": "L3 Category",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "country_of_origin",
      "display": "Country of Origin",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "item_code",
      "display": "Item Code",
      "filter_types": [
        "multivalued"
      ],
      "compatible_units": []
    },
    {
      "key": "item_code",
      "display": "Item Code",
      "filter_types": [
        "multivalued"
      ],
      "units": []
    },
    {
      "key": "brand",
      "display": "Brand",
      "filter_types": [
        "multivalued"
      ],
      "units": []
    },
    {
      "key": "country_of_origin",
      "display": "Country Of Origin",
      "filter_types": [
        "multivalued"
      ],
      "units": []
    },
    {
      "key": "image_nature",
      "display": "Image Type",
      "filter_types": [
        "multivalued"
      ]
    },
    {
      "key": "sizes",
      "display": "Sizes",
      "filter_types": [
        "multivalued"
      ]
    },
    {
      "key": "discount",
      "display": "Discount",
      "filter_types": [
        "range",
        "intervals",
        "multivalued"
      ]
    },
    {
      "key": "min_price_effective",
      "display": "Price",
      "filter_types": [
        "range",
        "intervals",
        "multivalued"
      ]
    },
    {
      "key": "departments",
      "display": "Department",
      "filter_types": [
        "multivalued"
      ]
    },
    {
      "key": "l3_category_slugs",
      "display": "Category",
      "filter_types": [
        "multivalued"
      ]
    },
    {
      "key": "brand_slug",
      "display": "Brand",
      "filter_types": [
        "multivalued"
      ]
    },
    {
      "key": "size_depth",
      "display": "Size Depth",
      "filter_types": [
        "multivalued",
        "range"
      ]
    },
    {
      "key": "is_set",
      "display": "Set",
      "filter_types": [
        "multivalued"
      ]
    },
    {
      "key": "country_of_origin",
      "display": "Country of Origin",
      "filter_types": [
        "multivalued"
      ]
    },
    {
      "key": "item_code",
      "display": "Item Code",
      "filter_types": [
        "multivalued"
      ]
    },
    {
      "key": "is_available",
      "display": "Available",
      "filter_types": [
        "singlevalued"
      ]
    },
    {
      "key": "rating",
      "display": "Rating",
      "filter_types": [
        "range",
        "intervals",
        "multivalued"
      ]
    }
  ],
  "values": {
    "type": [
      {
        "key": "range",
        "display": "Range Bar"
      },
      {
        "key": "intervals",
        "display": "Bucket Values"
      },
      {
        "key": "multivalued",
        "display": "Single"
      },
      {
        "key": "singlevalued",
        "display": "Single"
      }
    ],
    "sort": [
      {
        "key": "count",
        "display": "Product Count"
      },
      {
        "key": "ascending",
        "display": "Ascending"
      },
      {
        "key": "descending",
        "display": "Descending"
      }
    ]
  },
  "condition": [
    {
      "key": "OR",
      "display": "OR"
    },
    {
      "key": "AND",
      "display": "AND"
    }
  ]
}
```
</details>









---


### getConfigurations
Get configured details for catalog



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").catalog.getConfigurations();

// Async/Await
const data = await client.application("<APPLICATION_ID>").catalog.getConfigurations();
```






configured details for catalog.

*Returned Response:*




[GetAppCatalogConfiguration](#GetAppCatalogConfiguration)

Get application level configured catalog details. See example below or refer `GetAppCatalogConfigurationSchema` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "data": {
    "app_id": "000000000000000000000001",
    "listing": {
      "filter": {
        "attribute_config": [
          {
            "key": "gender",
            "priority": 1,
            "type": "multivalued",
            "name": "Gender",
            "value_config": {
              "condition": "OR",
              "sort": "count",
              "value": "",
              "bucket_points": [],
              "map": {}
            },
            "is_active": true
          },
          {
            "key": "min_price_effective",
            "priority": 2,
            "type": "range",
            "name": "Price",
            "value_config": {
              "condition": "OR",
              "sort": "count",
              "value": "",
              "bucket_points": [],
              "map": {
                "< 500": "Below Rs. 500",
                ">= 6000": "Above Rs. 6000"
              }
            },
            "is_active": true
          },
          {
            "key": "departments",
            "priority": 3,
            "type": "multivalued",
            "name": "Department",
            "value_config": {
              "condition": "OR",
              "sort": "count",
              "value": "metadata",
              "bucket_points": [],
              "map": {}
            },
            "is_active": true
          },
          {
            "key": "brand_id",
            "priority": 4,
            "type": "multivalued",
            "name": "Brand",
            "value_config": {
              "condition": "OR",
              "sort": "ascending",
              "value": "metadata",
              "bucket_points": [],
              "map": {
                "5th Avenue": "A {{value}}"
              }
            },
            "is_active": true
          },
          {
            "key": "season",
            "priority": 5,
            "type": "multivalued",
            "name": "Season",
            "value_config": {
              "condition": "OR",
              "sort": "count",
              "value": "",
              "bucket_points": [],
              "map": {
                "": ""
              }
            },
            "is_active": false
          },
          {
            "key": "is_set",
            "priority": 6,
            "type": "multivalued",
            "name": "Set",
            "value_config": {
              "condition": "OR",
              "sort": "descending",
              "value": "",
              "bucket_points": [],
              "map": {
                "true": "Yes",
                "false": "No"
              }
            },
            "is_active": true
          },
          {
            "key": "rating",
            "priority": 7,
            "type": "multivalued",
            "name": "Rating",
            "value_config": {
              "condition": "OR",
              "sort": "count",
              "value": "",
              "bucket_points": [],
              "map": {
                "": ""
              }
            },
            "is_active": true
          },
          {
            "key": "size_depth",
            "priority": 8,
            "type": "range",
            "name": "Size Depth",
            "value_config": {
              "condition": "OR",
              "sort": "count",
              "value": "",
              "bucket_points": [],
              "map": {
                "{} - {}": "{} - {}"
              }
            },
            "is_active": true
          }
        ],
        "allow_single": false
      },
      "sort": {
        "default": "",
        "config": [
          {
            "key": "price_dsc",
            "logo": "https://hdn-1.fynd.com/global/menu-icons/Price%20High%20to%20Low.png",
            "priority": 1,
            "name": "Price High to Low",
            "is_active": false
          },
          {
            "key": "rating_dsc",
            "logo": "https://hdn-1.fynd.com/global/menu-icons/Rating.png",
            "priority": 2,
            "name": "Rating",
            "is_active": true
          },
          {
            "key": "depth_desc",
            "priority": 3,
            "name": "Size Depth (High to Low)",
            "is_active": true
          },
          {
            "key": "discount_dsc",
            "logo": "https://hdn-1.fynd.com/global/menu-icons/Discount%20Low%20to%20High.png",
            "priority": 4,
            "name": "Discount High to Low",
            "is_active": true
          },
          {
            "key": "popular",
            "logo": "https://hdn-1.fynd.com/global/menu-icons/Popularity.png",
            "priority": 5,
            "name": "Popularity",
            "is_active": true
          },
          {
            "key": "relevance",
            "priority": 6,
            "name": "Relevance",
            "is_active": true
          },
          {
            "key": "price_asc",
            "logo": "https://hdn-1.fynd.com/global/menu-icons/Price%20Low%20to%20High.png",
            "priority": 7,
            "name": "Price Low to High",
            "is_active": true
          }
        ]
      }
    },
    "product": {
      "similar": {
        "config": [
          {
            "key": "seller",
            "size": {
              "max": 10,
              "min": 2
            },
            "priority": 1,
            "title": "Seller",
            "is_active": true,
            "subtitle": ""
          },
          {
            "key": "visual",
            "size": {
              "max": 10,
              "min": 2
            },
            "priority": 2,
            "title": "Visual",
            "is_active": true,
            "subtitle": ""
          },
          {
            "key": "brand",
            "size": {
              "max": 10,
              "min": 2
            },
            "priority": 3,
            "title": "Brand",
            "is_active": true,
            "subtitle": ""
          },
          {
            "key": "specs",
            "size": {
              "max": 10,
              "min": 2
            },
            "priority": 4,
            "title": "Specs",
            "is_active": true,
            "subtitle": ""
          }
        ]
      },
      "variant": {
        "config": [
          {
            "key": "color",
            "display_type": "image",
            "size": {
              "max": 10,
              "min": 2
            },
            "priority": 1,
            "name": "Additional Colors12",
            "is_active": true
          },
          {
            "key": "storage",
            "display_type": "text",
            "size": {
              "max": 10,
              "min": 2
            },
            "priority": 2,
            "name": "Memory",
            "is_active": true
          },
          {
            "key": "visual",
            "display_type": "image",
            "size": {
              "max": 10,
              "min": 2
            },
            "priority": 3,
            "name": "Additional Colors",
            "is_active": true
          },
          {
            "key": "ram_storage",
            "display_type": "text",
            "size": {
              "max": 10,
              "min": 2
            },
            "priority": 4,
            "name": "Ram_Storage",
            "is_active": true
          },
          {
            "key": "shade",
            "display_type": "color",
            "size": {
              "max": 10,
              "min": 2
            },
            "priority": 5,
            "name": "Additional Shades",
            "is_active": true
          },
          {
            "key": "water_resistant",
            "display_type": "text",
            "size": {
              "max": 10,
              "min": 2
            },
            "priority": 6,
            "name": "Water_Resistant",
            "is_active": true
          }
        ]
      }
    },
    "config_id": "000000000000000000000001",
    "config_type": "app"
  },
  "is_default": false
}
```
</details>









---


### getDepartmentData
Get specific departments details by passing in unique id of the department.



```javascript
// Promise
const promise = client.catalog.getDepartmentData({  uid : value });

// Async/Await
const data = await client.catalog.getDepartmentData({  uid : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| uid | string | yes | A `uid` is a unique identifier of a department. |  



Allows you to get department data, by uid.

*Returned Response:*




[DepartmentsResponse](#DepartmentsResponse)

Departments Data. See example below or refer `DepartmentsResponse` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "page": {},
  "items": [
    {
      "uid": 5,
      "_cls": "Department",
      "_custom_json": {},
      "created_by": {
        "username": "918793638893_86554",
        "user_id": "3"
      },
      "created_on": "2020-07-01T05:33:39.325000Z",
      "is_active": true,
      "logo": "https://hdn-1.addsale.com/x0/seller/pictures/logo/original/BSQ9Gk_123522-best-starry-sky-wallpaper-1920x1200-ipad-pro.jpgc7d0c15c-c1ff-47eb-8423-6e2df51f2ddf/BSQ9Gk_123522-best-starry-sky-wallpaper-1920x1200-ipad-pro.jpg",
      "modified_by": {
        "username": "917753852478_51632",
        "user_id": "5677"
      },
      "modified_on": "2021-03-03T15:55:25.118000Z",
      "name": "Sample Dept",
      "platforms": {},
      "priority_order": 111,
      "slug": "sample-dept",
      "synonyms": [
        "test",
        "sampe"
      ],
      "tags": [],
      "id": "5efc2033623d390001782238"
    },
    {
      "uid": 2,
      "_cls": "Department",
      "_custom_json": {},
      "created_by": {
        "username": "app@fynd.com",
        "user_id": "0"
      },
      "created_on": "2020-05-19T06:53:37.629000Z",
      "is_active": true,
      "logo": "https://hdn-1.addsale.com/addsale/media/logo/department/original/15974_381e2236c2a348cc851c29a5d05c66a9.png",
      "modified_by": {
        "user_id": "10",
        "username": "fahimsakri_gofynd_com_44938"
      },
      "modified_on": "2021-03-04T14:01:02.556000Z",
      "name": "Men's Fashion",
      "platforms": {
        "fynd": true,
        "fynd_store": true,
        "marketplace": true,
        "openapi": true,
        "uniket_store": true,
        "uniket_wholesale": true
      },
      "priority_order": 111,
      "slug": "men-s-fashion",
      "synonyms": [],
      "tags": [],
      "id": "5ec3827156a7200001c9aeea"
    },
    {
      "uid": 4,
      "_cls": "Department",
      "_custom_json": {},
      "created_by": {
        "username": "fahimsakri_gofynd_com_44938",
        "user_id": "10"
      },
      "created_on": "2020-06-29T10:59:33.620000Z",
      "is_active": true,
      "logo": "https://hdn-1.addsale.com/x0/seller/pictures/logo/original/ywPVrU_preview_a637ca6e4da6e38f03eb0d650ac5d6ba.jpgc73cc22f-b5ee-4fd4-a585-8ada35762d68/ywPVrU_preview_a637ca6e4da6e38f03eb0d650ac5d6ba.jpg",
      "modified_by": {
        "username": "918793638893_86554",
        "user_id": "3"
      },
      "modified_on": "2020-08-06T18:08:02.675000Z",
      "name": "Groceries",
      "platforms": {},
      "priority_order": 10,
      "slug": "groceries",
      "synonyms": [],
      "tags": [],
      "id": "5ef9c9959b04f00001e40dba"
    },
    {
      "uid": 1,
      "_cls": "Department",
      "_custom_json": {},
      "created_by": {
        "username": "app@fynd.com",
        "user_id": "0"
      },
      "created_on": "2020-05-18T16:14:41.689000Z",
      "is_active": true,
      "logo": "https://hdn-1.addsale.com/x0/platform/pictures/free-logo/original/_G1Z2Fg1L-http:d3p8ifzkmzds37.cloudfront.netmedialogodepartmentoriginal15870_c287d3c2431a432bb0e49363ef6b82bc.png.png",
      "modified_by": {
        "user_id": "5677",
        "username": "917753852478_51632"
      },
      "modified_on": "2021-03-04T15:39:38.528000Z",
      "name": "Electronics",
      "platforms": {
        "fynd": true,
        "fynd_store": true,
        "marketplace": true,
        "openapi": true,
        "uniket_store": true,
        "uniket_wholesale": true
      },
      "priority_order": 100,
      "slug": "electronics",
      "synonyms": [],
      "tags": [],
      "id": "5ec2b471661a4100019fca0d"
    },
    {
      "uid": 3,
      "_cls": "Department",
      "_custom_json": {},
      "created_by": {
        "username": "918793638893_86554",
        "user_id": "3"
      },
      "created_on": "2020-05-27T12:04:19.111000Z",
      "is_active": true,
      "logo": "https://hdn-1.addsale.com/x0/seller/pictures/landscape-banner/original/g2plam_logo_Jio.pngeeb392ca-3958-46a0-9f13-23c205b596f7/g2plam_logo_Jio.png",
      "modified_by": {
        "username": "918793638893_86554",
        "user_id": "3"
      },
      "modified_on": "2020-08-06T18:07:46.060000Z",
      "name": "Industrial Supplies",
      "platforms": {},
      "priority_order": 111,
      "slug": "industrial-supplies",
      "synonyms": [],
      "tags": [],
      "id": "5ece5743cd1bae0001440427"
    },
    {
      "uid": 6,
      "_cls": "Department",
      "_custom_json": {},
      "created_by": {
        "username": "abhinavsrivastava_gofynd_com_05674",
        "user_id": "13"
      },
      "created_on": "2020-07-06T07:56:01.508000Z",
      "is_active": false,
      "logo": "https://hdn-1.addsale.com/x0/seller/pictures/logo/original/wTcfEi_crysis_-_1.jpg14580947-a659-486d-b2d3-d2ca025b1cac/wTcfEi_crysis_-_1.jpg",
      "modified_by": {
        "username": "918793638893_86554",
        "user_id": "3"
      },
      "modified_on": "2020-08-06T18:08:12.576000Z",
      "name": "Clothing",
      "platforms": {},
      "priority_order": 1,
      "slug": "clothing",
      "synonyms": [],
      "tags": [],
      "id": "5f02d9116b0ae500018923dd"
    },
    {
      "uid": 8,
      "_cls": "Department",
      "_custom_json": {},
      "created_by": {
        "username": "asavarijadhav_gofynd_com_99880",
        "user_id": "5634"
      },
      "created_on": "2020-08-05T09:04:33.604000Z",
      "is_active": true,
      "logo": "https://hdn-1.addsale.com/x0/seller/pictures/logo/original/RxTsd8_0DEFAULT-LOGO.jpg000ccfc1-2f79-4426-9ac3-de2468c2fcb9/RxTsd8_0DEFAULT-LOGO.jpg",
      "modified_by": {
        "username": "asavarijadhav_gofynd_com_99880",
        "user_id": "5634"
      },
      "modified_on": "2020-08-05T09:44:01.234000Z",
      "name": "Kids",
      "platforms": {},
      "priority_order": 3,
      "slug": "kids",
      "synonyms": [],
      "tags": [],
      "id": "5f2a762131c66700018cdc47"
    },
    {
      "uid": 9,
      "_cls": "Department",
      "_custom_json": {},
      "created_by": {
        "username": "asavarijadhav_gofynd_com_99880",
        "user_id": "5634"
      },
      "created_on": "2020-08-05T09:44:46.632000Z",
      "is_active": true,
      "logo": "https://hdn-1.addsale.com/x0/seller/pictures/logo/original/tKkDB8_0DEFAULT-LOGO.jpg1c324d4d-f667-4af8-8d98-37205d34e3b5/tKkDB8_0DEFAULT-LOGO.jpg",
      "modified_by": {
        "username": "918793638893_86554",
        "user_id": "3"
      },
      "modified_on": "2020-08-06T18:07:35.231000Z",
      "name": "Women's Fashion",
      "platforms": {},
      "priority_order": 2,
      "slug": "women-s-fashion",
      "synonyms": [],
      "tags": [],
      "id": "5f2a7f8e31c66700018cdc49"
    },
    {
      "uid": 10,
      "_cls": "Department",
      "_custom_json": {},
      "created_by": {
        "username": "asavarijadhav_gofynd_com_99880",
        "user_id": "5634"
      },
      "created_on": "2020-08-05T09:45:12.075000Z",
      "is_active": true,
      "logo": "https://hdn-1.addsale.com/x0/seller/pictures/logo/original/oLoxiL_0DEFAULT-LOGO.jpgbd050200-700a-4a3e-9da6-e6b78fbee943/oLoxiL_0DEFAULT-LOGO.jpg",
      "modified_by": {
        "username": "asavarijadhav_gofynd_com_99880",
        "user_id": "5634"
      },
      "modified_on": "2020-08-05T09:48:01.660000Z",
      "name": "Beauty & Personal Care",
      "platforms": {},
      "priority_order": 4,
      "slug": "beauty-personal-care",
      "synonyms": [],
      "tags": [],
      "id": "5f2a7fa831c66700018cdc4a"
    },
    {
      "uid": 11,
      "_cls": "Department",
      "_custom_json": {},
      "created_by": {
        "username": "asavarijadhav_gofynd_com_99880",
        "user_id": "5634"
      },
      "created_on": "2020-08-05T09:45:39.797000Z",
      "is_active": true,
      "logo": "https://hdn-1.addsale.com/x0/seller/pictures/logo/original/vQv4ot_0DEFAULT-LOGO.jpg701cb5af-2024-4abf-ae5d-b68bc1a3cd43/vQv4ot_0DEFAULT-LOGO.jpg",
      "modified_by": {
        "username": "918793638893_86554",
        "user_id": "3"
      },
      "modified_on": "2020-08-06T11:38:57.599000Z",
      "name": "Home & Living",
      "platforms": {},
      "priority_order": 5,
      "slug": "home-living",
      "synonyms": [],
      "tags": [],
      "id": "5f2a7fc331c66700018cdc4b"
    },
    {
      "uid": 14,
      "_cls": "Department",
      "_custom_json": {},
      "created_by": {
        "username": "asavarijadhav_gofynd_com_99880",
        "user_id": "5634"
      },
      "created_on": "2020-08-05T09:48:42.347000Z",
      "is_active": false,
      "logo": "https://hdn-1.addsale.com/x0/seller/pictures/logo/original/hTobjV_0DEFAULT-LOGO.jpga020159c-7fe7-4c1c-a11a-4be61a60da9f/hTobjV_0DEFAULT-LOGO.jpg",
      "modified_by": {
        "username": "asavarijadhav_gofynd_com_99880",
        "user_id": "5634"
      },
      "modified_on": "2020-08-05T09:48:42.347000Z",
      "name": "Baby Care & Kids Essentials",
      "platforms": {},
      "priority_order": 7,
      "slug": "baby-care-kids-essentials",
      "synonyms": [],
      "tags": [],
      "id": "5f2a807a31c66700018cdc4e"
    },
    {
      "_cls": "Department",
      "created_on": "2021-01-13T10:12:33.002000Z",
      "modified_on": "2021-01-13T13:50:55.415000Z",
      "created_by": {
        "username": "919821012599_75351",
        "user_id": "5721"
      },
      "modified_by": {
        "username": "919821012599_75351",
        "user_id": "5721"
      },
      "uid": 21,
      "name": "Skin care products",
      "slug": "skin-care-produts",
      "logo": "https://hdn-1.addsale.com/x0/department/pictures/square-logo/original/rNz8grLys-.png",
      "tags": [],
      "is_active": true,
      "priority_order": 10235,
      "platforms": {},
      "synonyms": [
        "skin",
        "care"
      ],
      "_custom_json": {},
      "id": "5ffec79192813f0001eb6560"
    }
  ]
}
```
</details>









---


### getDepartments
List all the departments



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").catalog.getDepartments();

// Async/Await
const data = await client.application("<APPLICATION_ID>").catalog.getDepartments();
```






Departments are a way to categorise similar products. A product can lie in multiple departments. For example, a skirt can below to the 'Women's Fashion' Department while a handbag can lie in 'Women's Accessories' Department. Use this API to list all the departments. If successful, returns the list of departments specified in `DepartmentResponse`

*Returned Response:*




[DepartmentResponse](#DepartmentResponse)

List of Departments. See example below or refer `DepartmentResponse` for details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "items": [
    {
      "uid": 1,
      "name": "Zachary Harris",
      "slug": "Zachary-Harris",
      "priority_order": 7,
      "logo": {
        "type": "image",
        "url": "http://cdn4.gofynd.com/media/category_tab_icons/department/Men.png"
      }
    },
    {
      "uid": 2,
      "name": "Aaron Reilly",
      "slug": "Aaron-Reilly",
      "priority_order": 7,
      "logo": {
        "type": "image",
        "url": "http://cdn4.gofynd.com/media/category_tab_icons/department/Men.png"
      }
    },
    {
      "uid": 3,
      "name": "Bobby Sandoval",
      "slug": "Bobby-Sandoval",
      "priority_order": 7,
      "logo": {
        "type": "image",
        "url": "http://cdn4.gofynd.com/media/category_tab_icons/department/Men.png"
      }
    },
    {
      "uid": 4,
      "name": "Seth Hughes",
      "slug": "Seth-Hughes",
      "priority_order": 7,
      "logo": {
        "type": "image",
        "url": "http://cdn4.gofynd.com/media/category_tab_icons/department/Men.png"
      }
    },
    {
      "uid": 5,
      "name": "Michelle Moore",
      "slug": "Michelle-Moore",
      "priority_order": 7,
      "logo": {
        "type": "image",
        "url": "http://cdn4.gofynd.com/media/category_tab_icons/department/Men.png"
      }
    },
    {
      "uid": 6,
      "name": "Annette Baldwin",
      "slug": "Annette-Baldwin",
      "priority_order": 7,
      "logo": {
        "type": "image",
        "url": "http://cdn4.gofynd.com/media/category_tab_icons/department/Men.png"
      }
    },
    {
      "uid": 7,
      "name": "Chris Mata",
      "slug": "Chris-Mata",
      "priority_order": 7,
      "logo": {
        "type": "image",
        "url": "http://cdn4.gofynd.com/media/category_tab_icons/department/Men.png"
      }
    },
    {
      "uid": 8,
      "name": "Nicole Jacobs",
      "slug": "Nicole-Jacobs",
      "priority_order": 7,
      "logo": {
        "type": "image",
        "url": "http://cdn4.gofynd.com/media/category_tab_icons/department/Men.png"
      }
    },
    {
      "uid": 9,
      "name": "Pamela Smith",
      "slug": "Pamela-Smith",
      "priority_order": 7,
      "logo": {
        "type": "image",
        "url": "http://cdn4.gofynd.com/media/category_tab_icons/department/Men.png"
      }
    },
    {
      "uid": 10,
      "name": "Nicole Simon",
      "slug": "Nicole-Simon",
      "priority_order": 7,
      "logo": {
        "type": "image",
        "url": "http://cdn4.gofynd.com/media/category_tab_icons/department/Men.png"
      }
    }
  ]
}
```
</details>









---


### getDiscountedInventoryBySizeIdentifier
Get Inventory for company



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").catalog.getDiscountedInventoryBySizeIdentifier({  itemId : value,
 sizeIdentifier : value,
 pageNo : value,
 pageSize : value,
 q : value,
 locationIds : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").catalog.getDiscountedInventoryBySizeIdentifier({  itemId : value,
 sizeIdentifier : value,
 pageNo : value,
 pageSize : value,
 q : value,
 locationIds : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| itemId | number | yes | Item code of the product of which size is to be get. |   
| sizeIdentifier | string | yes | Size Identifier (Seller Identifier or Primary Identifier) of which inventory is to get. |    
| pageNo | number | no | The page number to navigate through the given set of results |    
| pageSize | number | no | Number of items to retrieve in each page. Default is 12. |    
| q | string | no | Search with help of store code. |    
| locationIds | Array<number> | no | Search by store ids. |  



This API allows get Inventory data for particular company grouped by size and store.

*Returned Response:*




[InventorySellerIdentifierResponsePaginated](#InventorySellerIdentifierResponsePaginated)

returns a list of all inventory grouped by size and store




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "items": [
    {
      "store": {
        "name": "yosss sdd dsdyo",
        "store_code": "sanic6sdfsf7",
        "uid": 59,
        "address": {
          "state": "MAHARASHTRA",
          "address1": "A/204, SAI VANDAN, NARAYAN NAGAR, TULINJ ROAD",
          "lat_long": {
            "type": "Point",
            "coordinates": [
              72.8231511,
              19.4232024
            ]
          },
          "address2": "",
          "pincode": 401209,
          "country": "INDIA",
          "city": "MUMBAI",
          "landmark": ""
        },
        "manager": {
          "name": "abc",
          "email": "a@b.com",
          "mobile_no": {
            "number": "2382634324",
            "country_code": 91
          }
        },
        "integration_type": {
          "order": "browntape",
          "inventory": "browntape"
        },
        "_custom_json": {}
      },
      "uid": "59_RTYUIDSDFV",
      "size": "AAX1 (1 PCS)",
      "inventory_updated_on": "2021-04-06T03:30:01.487000",
      "seller_identifier": "RTYUIDSDFV",
      "item_id": 7500651,
      "quantity": 10,
      "price": 1234,
      "price_effective": 1234,
      "price_transfer": 0,
      "currency": "INR",
      "sellable_quantity": 10,
      "identifiers": [
        {
          "gtin_type": "sku_code",
          "gtin_value": "RTYUIDSDFV",
          "primary": true
        }
      ]
    },
    {
      "store": {
        "name": "Saran Ledonne",
        "store_code": "af6198fe-2c23-4441-bbf4-e694c96e255c",
        "uid": 10,
        "address": {
          "state": "MAHA",
          "address1": "NO",
          "lat_long": {
            "type": "Point",
            "coordinates": [
              1,
              1
            ]
          },
          "address2": "",
          "pincode": 400072,
          "country": "INDIA",
          "city": "MUMBAI"
        },
        "manager": {
          "name": "abc",
          "email": "rehman@cashkart.com",
          "mobile_no": {
            "number": "9167943983",
            "country_code": 91
          }
        },
        "integration_type": {
          "order": "browntape",
          "inventory": "browntape"
        },
        "_custom_json": {}
      },
      "uid": "10_RTYUIDSDFV",
      "size": "AAX1 (1 PCS)",
      "inventory_updated_on": "2021-04-06T03:29:35.291000",
      "seller_identifier": "RTYUIDSDFV",
      "item_id": 7500651,
      "quantity": 10,
      "price": 1234,
      "price_effective": 1234,
      "price_transfer": 0,
      "currency": "INR",
      "sellable_quantity": 10,
      "identifiers": [
        {
          "gtin_type": "sku_code",
          "gtin_value": "RTYUIDSDFV",
          "primary": true
        }
      ]
    },
    {
      "store": {
        "name": "ABC-1-17",
        "store_code": "ABC-1-17",
        "uid": 11061,
        "address": {
          "state": "MAHARASHTRA",
          "address1": "14/1, VINOBHA BHAVE NAGAR",
          "lat_long": {
            "type": "Point",
            "coordinates": [
              1,
              1
            ]
          },
          "address2": "VINOBHA BHAVE NAGAR, KURLA WEST, KURLA, ",
          "pincode": 400070,
          "country": "INDIA",
          "city": "MUMBAI"
        },
        "manager": {
          "name": "Fahim",
          "email": "fahimsakri@gofynd.com",
          "mobile_no": {
            "number": "9594495254",
            "country_code": 91
          }
        },
        "integration_type": {
          "order": "browntape",
          "inventory": "browntape"
        },
        "_custom_json": {}
      },
      "uid": "11061_RTYUIDSDFV",
      "size": "AAX1 (1 PCS)",
      "inventory_updated_on": "2021-03-17T12:35:29.992000",
      "seller_identifier": "RTYUIDSDFV",
      "item_id": 7500651,
      "quantity": 10000000,
      "price": 1234,
      "price_effective": 1234,
      "price_transfer": 0,
      "currency": "INR",
      "sellable_quantity": 10000000,
      "order_committed_quantity": 0,
      "identifiers": [
        {
          "gtin_type": "sku_code",
          "gtin_value": "RTYUIDSDFV",
          "primary": true
        }
      ]
    },
    {
      "store": {
        "name": "RRL01",
        "store_code": "WH_8513",
        "uid": 1,
        "address": {
          "state": "MAHARASHTRA",
          "address1": "SHOPSENSE RETAIL TECHNOLOGIES PRIVATE LIMITED 1ST FLOOR WEWORK VIJAY DIAMOND, CROSS RD B, AJIT NAGAR,",
          "lat_long": {
            "type": "Point",
            "coordinates": [
              72.8691788,
              19.1174114
            ]
          },
          "address2": "KONDIVITA, ANDHERI EAST, MUMBAI, MAHARASHTRA 400069",
          "pincode": 400059,
          "country": "INDIA",
          "city": "MUMBAI"
        },
        "manager": {
          "name": "ASHISH CHANDORKAR",
          "email": "ASHISHCHANDORKAR@FYND.COM",
          "mobile_no": {
            "number": "8369782851",
            "country_code": 91
          }
        },
        "integration_type": {
          "order": "browntape",
          "inventory": "browntape"
        },
        "_custom_json": {}
      },
      "uid": "1_RTYUIDSDFV",
      "size": "AAX1 (1 PCS)",
      "inventory_updated_on": "2021-03-31T19:00:10.943000",
      "seller_identifier": "RTYUIDSDFV",
      "item_id": 7500651,
      "quantity": 39,
      "price": 1234,
      "price_effective": 1234,
      "price_transfer": 0,
      "currency": "INR",
      "sellable_quantity": 18,
      "order_committed_quantity": 7,
      "not_available_quantity": 0,
      "damaged_quantity": 0,
      "identifiers": [
        {
          "gtin_type": "sku_code",
          "gtin_value": "RTYUIDSDFV",
          "primary": true
        }
      ]
    },
    {
      "store": {
        "name": "RRL01",
        "store_code": "WH_8513",
        "uid": 1,
        "address": {
          "state": "MAHARASHTRA",
          "address1": "SHOPSENSE RETAIL TECHNOLOGIES PRIVATE LIMITED 1ST FLOOR WEWORK VIJAY DIAMOND, CROSS RD B, AJIT NAGAR,",
          "lat_long": {
            "type": "Point",
            "coordinates": [
              72.8691788,
              19.1174114
            ]
          },
          "address2": "KONDIVITA, ANDHERI EAST, MUMBAI, MAHARASHTRA 400069",
          "pincode": 400059,
          "country": "INDIA",
          "city": "MUMBAI"
        },
        "manager": {
          "name": "ASHISH CHANDORKAR",
          "email": "ASHISHCHANDORKAR@FYND.COM",
          "mobile_no": {
            "number": "8369782851",
            "country_code": 91
          }
        },
        "integration_type": {
          "order": "browntape",
          "inventory": "browntape"
        },
        "_custom_json": {}
      },
      "uid": "1_rtyuidsdfv",
      "size": "AAX1 (1 PCS)",
      "inventory_updated_on": "2020-07-07T10:37:06.146000",
      "seller_identifier": "RTYUIDSDFV",
      "item_id": 7500651,
      "quantity": 39,
      "price": 1234,
      "price_effective": 1234,
      "price_transfer": 0,
      "currency": "INR",
      "sellable_quantity": 0,
      "order_committed_quantity": 39,
      "identifiers": [
        {
          "gtin_type": "sku_code",
          "gtin_value": "RTYUIDSDFV",
          "primary": true
        }
      ]
    }
  ],
  "page": {
    "type": "number",
    "current": 1,
    "size": 1,
    "item_total": 5,
    "has_previous": false,
    "has_next": false
  }
}
```
</details>









---


### getGenderAttribute
Get gender attribute details



```javascript
// Promise
const promise = client.catalog.getGenderAttribute({  attributeSlug : value });

// Async/Await
const data = await client.catalog.getGenderAttribute({  attributeSlug : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| attributeSlug | string | yes | slug of the attribute for which you want to view the genders |  



This API allows to view the gender attribute details.

*Returned Response:*




[GenderDetail](#GenderDetail)

Size guide object. See example below or refer `GenderDetailSchema` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "description": "Clothing department needs gener attribute",
  "schema": {
    "format": "",
    "mandatory": false,
    "multi": true,
    "enum": [
      "Men",
      "Women",
      "Boy",
      "Girl",
      "more",
      "men"
    ],
    "type": "str"
  },
  "meta": {
    "enriched": false,
    "mandatory_details": {
      "l3_keys": []
    }
  },
  "slug": "gender",
  "name": "Gender",
  "enabled_for_end_consumer": true,
  "details": {
    "display_type": "text"
  },
  "is_nested": true,
  "filters": {
    "indexing": true,
    "priority": 2
  },
  "departments": [
    "men-s-fashion",
    "kids",
    "women-s-fashion",
    "beauty-personal-care"
  ],
  "logo": "https://hdn-1.addsale.com/x0/products/pictures/attribute/logo/original/Rhv89tqRo-brand-website-logo.png",
  "id": "5ed11eb0be8d5e00016f0335"
}
```
</details>









---


### getGroupConfigurations
Get the details of the application configured configurations of group config types.



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").catalog.getGroupConfigurations({  configType : value,
 pageNo : value,
 pageSize : value,
 search : value,
 templateSlug : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").catalog.getGroupConfigurations({  configType : value,
 pageNo : value,
 pageSize : value,
 search : value,
 templateSlug : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| configType | string | yes | A `config_type` is an identifier that defines a specific type of configuration. |    
| pageNo | number | no | The page number to navigate through the given set of results. |    
| pageSize | number | no | Number of items to retrieve in each page. Default is 12. |    
| search | string | no | Get configuration list filtered by `search` string. |    
| templateSlug | string | no | Get configuration list filtered by `template_slug` string. This is for the details and comparision groups. |  



Get the details of the application configured configurations of group config types.

*Returned Response:*




[GetConfigResponse](#GetConfigResponse)

configuration details for catalog. See example below or refer `GetConfigResponseSchema` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "data": [
    {
      "is_active": true,
      "slug": "test-group12-31",
      "is_default": false,
      "attributes": [
        {
          "is_active": true,
          "display_type": "text",
          "slug": "item_code",
          "key": "item_code",
          "priority": 1,
          "name": "Item Code"
        },
        {
          "is_active": true,
          "display_type": "text",
          "slug": "brand",
          "key": "brand",
          "priority": 2,
          "name": "Brand"
        }
      ],
      "app_id": "5d65089e031f9029f8e8dc2f",
      "priority": 1,
      "template_slugs": [
        "atesttemplate"
      ],
      "name": "Test Group12 ",
      "id": "62a84b90bd43c0fe4cf53574"
    },
    {
      "is_active": true,
      "slug": "et14",
      "is_default": false,
      "attributes": [
        {
          "is_active": true,
          "display_type": "text",
          "slug": "item_code",
          "key": "item_code",
          "priority": 1,
          "name": "Item Code"
        },
        {
          "is_active": true,
          "display_type": "text",
          "slug": "brand",
          "key": "brand",
          "priority": 2,
          "name": "Brand"
        },
        {
          "is_active": true,
          "display_type": "text",
          "slug": "country_of_origin",
          "key": "country_of_origin",
          "priority": 3,
          "name": "Country Of Origin"
        },
        {
          "is_active": true,
          "display_type": "text",
          "slug": "image_nature",
          "key": "image_nature",
          "priority": 4,
          "name": "Image Type"
        },
        {
          "is_active": true,
          "display_type": "text",
          "slug": "discount",
          "key": "discount",
          "priority": 5,
          "name": "Discount"
        }
      ],
      "app_id": "5d65089e031f9029f8e8dc2f",
      "priority": 2,
      "template_slugs": [
        "atesttemplate"
      ],
      "name": "ET",
      "id": "62a84b9ebd43c0fe4cf53576"
    }
  ],
  "page": {
    "current": 1,
    "next": 2,
    "has_next": false,
    "total_count": 2
  }
}
```
</details>









---


### getHsnCode
Fetch Hsn Code.



```javascript
// Promise
const promise = client.catalog.getHsnCode({  id : value });

// Async/Await
const data = await client.catalog.getHsnCode({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | Unique id |  



Fetch Hsn Code.

*Returned Response:*




[HsnCode](#HsnCode)

See example below details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "data": {
    "company_id": 1,
    "hs2_code": "xx",
    "modified_by": {
      "username": "narutouzumaki",
      "user_id": "0"
    },
    "id": "xxxxxxxxxxxx",
    "tax_on": "esp",
    "slabs": [
      {
        "tax": 0,
        "threshold": 999999
      },
      {
        "tax": 0,
        "threshold": 0
      }
    ],
    "hsn_code": "xxxxxxxx"
  }
}
```
</details>









---


### getInventories
Get Inventory for company



```javascript
// Promise
const promise = client.catalog.getInventories({  itemId : value,
 size : value,
 pageNo : value,
 pageSize : value,
 q : value,
 sellable : value,
 storeIds : value,
 sizeIdentifier : value });

// Async/Await
const data = await client.catalog.getInventories({  itemId : value,
 size : value,
 pageNo : value,
 pageSize : value,
 q : value,
 sellable : value,
 storeIds : value,
 sizeIdentifier : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| itemId | string | no | Item code of the product of which size is to be get. |    
| size | string | no | Size of which inventory is to get. |    
| pageNo | number | no | The page number to navigate through the given set of results |    
| pageSize | number | no | Number of items to retrieve in each page. Default is 12. |    
| q | string | no | Search with help of store code. |    
| sellable | boolean | no | Filter on whether product is in stock or not. |    
| storeIds | Array<number> | no | The Store Id of products to fetch inventory. |    
| sizeIdentifier | string | no | Size Identifier (Seller Identifier or Primary Identifier) of which inventory is to get. |  



This API allows get Inventories data for particular company.

*Returned Response:*




[GetInventoriesResponse](#GetInventoriesResponse)

returns a list of all inventory grouped by size and store




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "items": [
    {
      "is_set": false,
      "size": "S",
      "trader": [
        {
          "type": "Importer",
          "name": "Imported & Marketed by Brooks Brothers India Pvt.Ltd",
          "address": [
            "Brooks Brothers India Private Limited registered address is 8th Floor, Maker Tower 'E' Cuffe Parade Mumbai MH 400005 IN"
          ]
        }
      ],
      "weight": {
        "shipping": 999,
        "unit": "gram"
      },
      "date_meta": {
        "modified_on": "2023-01-20T07:26:18.828000",
        "added_on_store": "2023-01-20T07:26:18.834000",
        "created_on": "2023-01-20T07:26:18.828000",
        "inventory_updated_on": "2023-01-20T07:26:18.828000"
      },
      "created_by": {
        "user_id": "68c3800d602c0fda0dab4fea",
        "username": "abhishekbhakurlekar_gofynd_com_63787"
      },
      "modified_by": {
        "user_id": "68c3800d602c0fda0dab4fea",
        "username": "abhishekbhakurlekar_gofynd_com_63787"
      },
      "brand": {
        "id": 355
      },
      "price": {
        "marked": 8000,
        "transfer": 0,
        "currency": "INR",
        "effective": 8000
      },
      "total_quantity": 12,
      "quantities": {
        "sellable": {
          "count": 12
        }
      },
      "stage": "verified",
      "seller_identifier": "410163085004",
      "expiration_date": "9998-01-30T23:59:00",
      "manufacturer": {
        "name": "RELIANCE BRANDS LIMITED",
        "is_default": true,
        "address": "5TH FLOOR, COURT HOUSE,LOKMANYA TILAK MARGA, DHOBI TALAOMUMBAI MAHARASHTRA, , MAHARASHTRA, MUMBAI"
      },
      "id": "63ca421a6fb0ce930685f46e",
      "country_of_origin": "Malaysia",
      "identifier": {
        "upc": "777697046",
        "alu": "410163085004"
      },
      "return_config": {
        "unit": "days",
        "returnable": true,
        "time": 30
      },
      "trace_id": "inventory.bb475064-9893-11ed-88db-2efc0f0504bd",
      "uid": "10444_410163085004",
      "platforms": {
        "fynd": false,
        "uniket_wholesale": false
      },
      "store": {
        "store_code": "THR1",
        "store_type": "high_street",
        "uid": 10444,
        "name": "Khan Market"
      },
      "company": {
        "id": 46
      },
      "tax_identifier": {
        "hsn_code_id": "000000000000000000000001"
      },
      "dimension": {
        "unit": "cm",
        "width": 15,
        "length": 25,
        "height": 10
      },
      "track_inventory": true
    },
    {
      "is_set": false,
      "size": "M",
      "trader": [
        {
          "type": "Importer",
          "name": "Imported & Marketed by Brooks Brothers India Pvt.Ltd",
          "address": [
            "Brooks Brothers India Private Limited registered address is 8th Floor, Maker Tower 'E' Cuffe Parade Mumbai MH 400005 IN"
          ]
        }
      ],
      "weight": {
        "shipping": 999,
        "unit": "gram"
      },
      "date_meta": {
        "modified_on": "2023-01-16T05:25:49.482000",
        "added_on_store": "2023-01-16T05:25:49.491000",
        "created_on": "2023-01-16T05:25:49.482000",
        "inventory_updated_on": "2023-01-16T05:25:49.482000"
      },
      "created_by": {
        "user_id": "68c3800d602c0fda0dab4fea",
        "username": "abhishekbhakurlekar_gofynd_com_63787"
      },
      "modified_by": {
        "user_id": "68c3800d602c0fda0dab4fea",
        "username": "abhishekbhakurlekar_gofynd_com_63787"
      },
      "brand": {
        "id": 355
      },
      "price": {
        "marked": 8000,
        "transfer": 0,
        "currency": "INR",
        "effective": 8000
      },
      "total_quantity": 12,
      "quantities": {
        "sellable": {
          "count": 12
        }
      },
      "stage": "verified",
      "seller_identifier": "410163085005",
      "expiration_date": "9998-01-30T23:59:00",
      "manufacturer": {
        "name": "RELIANCE BRANDS LIMITED",
        "is_default": true,
        "address": "5TH FLOOR, COURT HOUSE,LOKMANYA TILAK MARGA, DHOBI TALAOMUMBAI MAHARASHTRA, , MAHARASHTRA, MUMBAI"
      },
      "id": "63c4dfdd11e44ffd96d600bc",
      "country_of_origin": "Malaysia",
      "identifier": {
        "upc": "777697038",
        "alu": "410163085005"
      },
      "return_config": {
        "unit": "days",
        "returnable": true,
        "time": 30
      },
      "trace_id": "inventory.3c9a25e4-955e-11ed-8584-92a07e366903",
      "uid": "10444_410163085005",
      "platforms": {
        "fynd": false,
        "uniket_wholesale": false
      },
      "store": {
        "store_code": "THR1",
        "store_type": "high_street",
        "uid": 10444,
        "name": "Khan Market"
      },
      "company": {
        "id": 46
      },
      "tax_identifier": {
        "hsn_code_id": "000000000000000000000001"
      },
      "dimension": {
        "unit": "cm",
        "width": 15,
        "length": 25,
        "height": 10
      },
      "track_inventory": true
    },
    {
      "is_set": false,
      "size": "S",
      "trader": [
        {
          "type": "Importer",
          "name": "Imported & Marketed by Brooks Brothers India Pvt.Ltd",
          "address": [
            "Brooks Brothers India Private Limited registered address is 8th Floor, Maker Tower 'E' Cuffe Parade Mumbai MH 400005 IN"
          ]
        }
      ],
      "weight": {
        "shipping": 999,
        "unit": "gram"
      },
      "date_meta": {
        "modified_on": "2023-01-19T10:37:00.504000",
        "added_on_store": "2023-01-05T10:45:41.988000",
        "created_on": "2023-01-05T10:45:41.979000",
        "inventory_updated_on": "2023-01-19T10:37:00.504000"
      },
      "created_by": {
        "user_id": "bc5fbaf5e6f4b5288e9a9a22",
        "username": "sagardhiman_gofynd_com_43846"
      },
      "modified_by": {
        "user_id": "68c3800d602c0fda0dab4fea",
        "username": "abhishekbhakurlekar_gofynd_com_63787"
      },
      "brand": {
        "id": 355
      },
      "price": {
        "marked": 8000,
        "transfer": 0,
        "currency": "INR",
        "effective": 7001
      },
      "total_quantity": 5001,
      "quantities": {
        "not_available": {
          "count": 0
        },
        "damaged": {
          "count": 0
        },
        "sellable": {
          "count": 5001
        }
      },
      "stage": "verified",
      "seller_identifier": "410163085004",
      "expiration_date": "9998-01-30T23:59:00",
      "manufacturer": {
        "name": "RELIANCE BRANDS LIMITED",
        "is_default": true,
        "address": "5TH FLOOR, COURT HOUSE,LOKMANYA TILAK MARGA, DHOBI TALAOMUMBAI MAHARASHTRA, , MAHARASHTRA, MUMBAI"
      },
      "id": "63b6aa5558bf3ed100740c10",
      "country_of_origin": "Malaysia",
      "identifier": {
        "upc": "777697046",
        "alu": "410163085004"
      },
      "return_config": {
        "unit": "days",
        "returnable": true,
        "time": 30
      },
      "trace_id": "inventory.3485e8b4-97e5-11ed-a9d9-5eca1fff6de0",
      "uid": "11336_410163085004",
      "platforms": {
        "fynd": false,
        "uniket_wholesale": false
      },
      "store": {
        "store_code": "R591",
        "store_type": "warehouse",
        "uid": 11336,
        "name": "Reliance 2"
      },
      "company": {
        "id": 46
      },
      "tax_identifier": {
        "hsn_code_id": "000000000000000000000001"
      },
      "dimension": {
        "unit": "cm",
        "width": 15,
        "length": 25,
        "height": 10
      },
      "track_inventory": true
    },
    {
      "is_set": false,
      "size": "XXL",
      "trader": [
        {
          "type": "Importer",
          "name": "Imported & Marketed by Brooks Brothers India Pvt.Ltd",
          "address": [
            "Brooks Brothers India Private Limited registered address is 8th Floor, Maker Tower 'E' Cuffe Parade Mumbai MH 400005 IN"
          ]
        }
      ],
      "weight": {
        "shipping": 999,
        "unit": "gram"
      },
      "date_meta": {
        "modified_on": "2022-11-29T11:18:35.183000",
        "added_on_store": "2022-11-29T11:17:42.271000",
        "created_on": "2022-11-29T11:17:42.263000",
        "inventory_updated_on": "2022-11-29T11:18:35.183000"
      },
      "created_by": {
        "user_id": "5f200182ee4d3377e83330c2",
        "username": "meghanakate_gofynd_com_58351"
      },
      "modified_by": {
        "user_id": "5f200182ee4d3377e83330c2",
        "username": "meghanakate_gofynd_com_58351"
      },
      "brand": {
        "id": 355
      },
      "price": {
        "marked": 8000,
        "transfer": 0,
        "currency": "INR",
        "effective": 8000
      },
      "total_quantity": 1000,
      "quantities": {
        "not_available": {
          "count": 0
        },
        "damaged": {
          "count": 0
        },
        "sellable": {
          "count": 1000
        }
      },
      "stage": "verified",
      "seller_identifier": "410163085001",
      "expiration_date": "9998-01-30T23:59:00",
      "manufacturer": {
        "name": "RELIANCE BRANDS LIMITED",
        "is_default": true,
        "address": "5TH FLOOR, COURT HOUSE,LOKMANYA TILAK MARGA, DHOBI TALAOMUMBAI MAHARASHTRA, , MAHARASHTRA, MUMBAI"
      },
      "id": "6385ea569715e74d8a92ce88",
      "country_of_origin": "Malaysia",
      "identifier": {
        "upc": "777697079",
        "alu": "410163085001"
      },
      "return_config": {
        "unit": "days",
        "returnable": true,
        "time": 30
      },
      "uid": "11701_410163085001",
      "platforms": {
        "fynd": false,
        "uniket_wholesale": false
      },
      "store": {
        "store_code": "SRT91",
        "store_type": "warehouse",
        "uid": 11701,
        "name": "Shopsense Retail Technologies"
      },
      "company": {
        "id": 46
      },
      "tax_identifier": {
        "hsn_code_id": "000000000000000000000001"
      },
      "dimension": {
        "unit": "cm",
        "width": 15,
        "length": 25,
        "height": 10
      },
      "track_inventory": true
    },
    {
      "is_set": false,
      "size": "XL",
      "trader": [
        {
          "type": "Importer",
          "name": "Imported & Marketed by Brooks Brothers India Pvt.Ltd",
          "address": [
            "Brooks Brothers India Private Limited registered address is 8th Floor, Maker Tower 'E' Cuffe Parade Mumbai MH 400005 IN"
          ]
        }
      ],
      "weight": {
        "shipping": 999,
        "unit": "gram"
      },
      "date_meta": {
        "modified_on": "2022-11-29T11:18:27.331000",
        "added_on_store": "2022-11-29T11:17:34.431000",
        "created_on": "2022-11-29T11:17:34.424000",
        "inventory_updated_on": "2022-11-29T11:18:27.331000"
      },
      "created_by": {
        "user_id": "5f200182ee4d3377e83330c2",
        "username": "meghanakate_gofynd_com_58351"
      },
      "modified_by": {
        "user_id": "5f200182ee4d3377e83330c2",
        "username": "meghanakate_gofynd_com_58351"
      },
      "brand": {
        "id": 355
      },
      "price": {
        "marked": 8000,
        "transfer": 0,
        "currency": "INR",
        "effective": 8000
      },
      "total_quantity": 1000,
      "quantities": {
        "not_available": {
          "count": 0
        },
        "damaged": {
          "count": 0
        },
        "sellable": {
          "count": 1000
        }
      },
      "stage": "verified",
      "seller_identifier": "410163085003",
      "expiration_date": "9998-01-30T23:59:00",
      "manufacturer": {
        "name": "RELIANCE BRANDS LIMITED",
        "is_default": true,
        "address": "5TH FLOOR, COURT HOUSE,LOKMANYA TILAK MARGA, DHOBI TALAOMUMBAI MAHARASHTRA, , MAHARASHTRA, MUMBAI"
      },
      "id": "6385ea4e9715e74d8a92ce86",
      "country_of_origin": "Malaysia",
      "identifier": {
        "upc": "777697053",
        "alu": "410163085003"
      },
      "return_config": {
        "unit": "days",
        "returnable": true,
        "time": 30
      },
      "uid": "11701_410163085003",
      "platforms": {
        "fynd": false,
        "uniket_wholesale": false
      },
      "store": {
        "store_code": "SRT91",
        "store_type": "warehouse",
        "uid": 11701,
        "name": "Shopsense Retail Technologies"
      },
      "company": {
        "id": 46
      },
      "tax_identifier": {
        "hsn_code_id": "000000000000000000000001"
      },
      "dimension": {
        "unit": "cm",
        "width": 15,
        "length": 25,
        "height": 10
      },
      "track_inventory": true
    }
  ],
  "page": {
    "type": "number",
    "current": 1,
    "size": 1,
    "item_total": 5,
    "has_previous": false,
    "has_next": false
  }
}
```
</details>









---


### getInventoryBulkUploadHistory
Get a list of all bulk Inventory upload jobs.



```javascript
// Promise
const promise = client.catalog.getInventoryBulkUploadHistory({  pageNo : value,
 pageSize : value });

// Async/Await
const data = await client.catalog.getInventoryBulkUploadHistory({  pageNo : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNo | number | no | The page number to navigate through the given set of results |    
| pageSize | number | no | Number of items to retrieve in each page. Default is 12. |  



This API helps to get bulk Inventory upload jobs data.

*Returned Response:*




[BulkInventoryGet](#BulkInventoryGet)

List of bulk Inventory upload jobs. See `BulkInventoryGetSchema` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "items": [
    {
      "succeed": 1,
      "stage": "completed",
      "file_path": "https://hdn-1.addsale.com/x0/company/1/self/documents/inventory-import/free/original/50DbgKLND-NtnL_EAVb-REicn1sDv-V8ZrKdnLt-product_inventory.csv",
      "created_on": "2021-03-11T10:54:44.998000Z",
      "cancelled_records": [],
      "created_by": {
        "username": "nikhilmhatre_gofynd_com_97636",
        "user_id": "16",
        "full_name": "Nikhil Mhatre"
      },
      "modified_on": "2021-03-11T10:54:45.296000Z",
      "cancelled": 0,
      "failed": 0,
      "modified_by": {
        "user_id": "0",
        "username": "Silverbolt"
      },
      "company_id": 1,
      "total": 1,
      "is_active": true,
      "failed_records": [],
      "id": "6049f6f5723043000125a9ea"
    },
    {
      "created_by": {
        "username": "silverbolt",
        "user_id": "-1"
      },
      "cancelled": 0,
      "modified_by": {
        "username": "Silverbolt",
        "user_id": "0"
      },
      "created_on": "2021-03-04T09:46:51.714000Z",
      "company_id": 1,
      "failed": 0,
      "failed_records": [],
      "succeed": 1,
      "file_path": "https://hdn-1.addsale.com/x0/company/1/self/documents/inventory-import/free/original/NtnL_EAVb-REicn1sDv-V8ZrKdnLt-product_inventory.csv",
      "cancelled_records": [],
      "total": 1,
      "is_active": true,
      "modified_on": "2021-03-04T09:46:55.349000Z",
      "stage": "completed",
      "id": "6040ac8b1803830001fcc1ed"
    },
    {
      "company_id": 1,
      "failed": 0,
      "modified_by": {
        "user_id": "-1",
        "username": "silverbolt"
      },
      "cancelled": 0,
      "is_active": true,
      "cancelled_records": [],
      "file_path": "https://hdn-1.addsale.com/x0/company/1/self/documents/inventory-import/free/original/bmBZY9iAX-REicn1sDv-V8ZrKdnLt-product_inventory.csv",
      "created_by": {
        "user_id": "-1",
        "username": "silverbolt"
      },
      "modified_on": "2021-03-04T09:22:32.222000Z",
      "succeed": 0,
      "failed_records": [],
      "stage": "terminated",
      "created_on": "2021-03-04T09:22:32.222000Z",
      "total": 1,
      "id": "6040a6d8104f110001a85061"
    },
    {
      "company_id": 1,
      "failed": 0,
      "modified_by": {
        "user_id": "-1",
        "username": "silverbolt"
      },
      "cancelled": 0,
      "is_active": true,
      "cancelled_records": [],
      "file_path": "https://hdn-1.addsale.com/x0/company/1/self/documents/inventory-import/free/original/m73yWRT3v-REicn1sDv-V8ZrKdnLt-product_inventory.csv",
      "created_by": {
        "user_id": "-1",
        "username": "silverbolt"
      },
      "modified_on": "2021-03-04T09:20:29.719000Z",
      "succeed": 0,
      "failed_records": [],
      "stage": "terminated",
      "created_on": "2021-03-04T09:20:29.719000Z",
      "total": 1,
      "id": "6040a65d104f110001a85060"
    },
    {
      "created_on": "2021-03-04T08:50:49.367000Z",
      "cancelled_records": [],
      "failed_records": [],
      "succeed": 0,
      "cancelled": 0,
      "file_path": "https://hdn-1.addsale.com/x0/company/1/self/documents/inventory-import/free/original/W9lxe19Uu-REicn1sDv-V8ZrKdnLt-product_inventory.csv",
      "total": 1,
      "created_by": {
        "username": "silverbolt",
        "user_id": "-1"
      },
      "is_active": true,
      "modified_by": {
        "username": "silverbolt",
        "user_id": "-1"
      },
      "company_id": 1,
      "failed": 0,
      "modified_on": "2021-03-04T08:50:49.367000Z",
      "stage": "terminated",
      "id": "60409f699b21e30001c1e6b5"
    },
    {
      "total": 1,
      "succeed": 1,
      "created_on": "2021-02-10T10:57:57.236000Z",
      "failed": 0,
      "modified_by": {
        "user_id": "0",
        "username": "Silverbolt"
      },
      "created_by": {
        "username": "917972410891_48194",
        "user_id": "5646",
        "full_name": "Sourabh Nilakhe"
      },
      "is_active": true,
      "cancelled_records": [],
      "failed_records": [],
      "company_id": 1,
      "file_path": "https://hdn-1.addsale.com/x0/company/1/self/documents/inventory-import/free/original/REicn1sDv-V8ZrKdnLt-product_inventory.csv",
      "modified_on": "2021-02-10T10:57:57.571000Z",
      "stage": "completed",
      "cancelled": 0,
      "id": "6023bc35c85ca1000171e08a"
    },
    {
      "total": 1,
      "succeed": 1,
      "created_on": "2021-02-10T10:57:22.535000Z",
      "failed": 0,
      "modified_by": {
        "user_id": "0",
        "username": "Silverbolt"
      },
      "created_by": {
        "username": "917972410891_48194",
        "user_id": "5646",
        "full_name": "Sourabh Nilakhe"
      },
      "is_active": true,
      "cancelled_records": [],
      "failed_records": [],
      "company_id": 1,
      "file_path": "https://hdn-1.addsale.com/x0/company/1/self/documents/inventory-import/free/original/Oth_LaVyI-V8ZrKdnLt-product_inventory.csv",
      "modified_on": "2021-02-10T10:57:23.311000Z",
      "stage": "completed",
      "cancelled": 0,
      "id": "6023bc12c85ca1000171e089"
    },
    {
      "created_by": {
        "user_id": "16",
        "username": "nikhilmhatre_gofynd_com_97636",
        "full_name": "Nikhil Mhatre"
      },
      "succeed": 1,
      "failed": 0,
      "file_path": "https://hdn-1.addsale.com/x0/company/1/self/documents/inventory-import/free/original/V8ZrKdnLt-product_inventory.csv",
      "company_id": 1,
      "created_on": "2021-01-13T13:58:06.155000Z",
      "stage": "completed",
      "modified_by": {
        "username": "Silverbolt",
        "user_id": "0"
      },
      "is_active": true,
      "total": 1,
      "failed_records": [],
      "modified_on": "2021-01-13T13:58:06.369000Z",
      "cancelled_records": [],
      "cancelled": 0,
      "id": "5ffefc6ee2db8f000183fab8"
    },
    {
      "succeed": 0,
      "is_active": true,
      "cancelled": 0,
      "failed_records": [
        {
          "identifiers": "1.91887E+11",
          "message": "Invalid identifier: 1.91887E+11. Product not found."
        }
      ],
      "total": 1,
      "stage": "failed",
      "modified_by": {
        "username": "Silverbolt",
        "user_id": "0"
      },
      "file_path": "https://hdn-1.addsale.com/x0/company/1/self/documents/inventory-import/free/original/t3T6X2Riy-product_inventory.csv",
      "cancelled_records": [],
      "created_by": {
        "username": "nikhilmhatre_gofynd_com_97636",
        "user_id": "16",
        "full_name": "Nikhil Mhatre"
      },
      "created_on": "2021-01-13T13:57:38.598000Z",
      "company_id": 1,
      "failed": 1,
      "modified_on": "2021-01-13T13:57:38.832000Z",
      "id": "5ffefc5252f31100012ea981"
    },
    {
      "total": 1,
      "company_id": 1,
      "created_by": {
        "user_id": "16",
        "username": "nikhilmhatre_gofynd_com_97636",
        "full_name": "Nikhil Mhatre"
      },
      "failed": 1,
      "modified_on": "2021-01-13T13:57:13.847000Z",
      "succeed": 0,
      "stage": "failed",
      "cancelled_records": [],
      "failed_records": [
        {
          "identifiers": "1.91887E+11",
          "message": "Invalid identifier: 1.91887E+11. Product not found."
        }
      ],
      "file_path": "https://hdn-1.addsale.com/x0/company/1/self/documents/inventory-import/free/original/NSTuhgsgq-product_inventory.csv",
      "is_active": true,
      "created_on": "2021-01-13T13:57:13.639000Z",
      "cancelled": 0,
      "modified_by": {
        "username": "Silverbolt",
        "user_id": "0"
      },
      "id": "5ffefc39a0d1e20001ae118c"
    },
    {
      "succeed": 1,
      "failed": 0,
      "failed_records": [],
      "cancelled": 0,
      "file_path": "https://hdn-1.addsale.com/x0/company/1/self/documents/inventory-import/free/original/cwQV-Z6gT-product_inventory.xlsx",
      "created_on": "2021-01-12T06:37:06.167000Z",
      "is_active": true,
      "cancelled_records": [],
      "created_by": {
        "user_id": "16",
        "username": "nikhilmhatre_gofynd_com_97636",
        "full_name": "Nikhil Mhatre"
      },
      "company_id": 1,
      "stage": "completed",
      "modified_by": {
        "username": "Silverbolt",
        "user_id": "0"
      },
      "modified_on": "2021-01-12T06:37:06.307000Z",
      "total": 1,
      "id": "5ffd4392b4c34d000170697b"
    },
    {
      "succeed": 1,
      "failed": 0,
      "failed_records": [],
      "cancelled": 0,
      "file_path": "https://hdn-1.addsale.com/x0/company/1/self/documents/inventory-import/free/original/gccehef2f-product_inventory.xlsx",
      "created_on": "2021-01-12T06:36:24.292000Z",
      "is_active": true,
      "cancelled_records": [],
      "created_by": {
        "user_id": "16",
        "username": "nikhilmhatre_gofynd_com_97636",
        "full_name": "Nikhil Mhatre"
      },
      "company_id": 1,
      "stage": "completed",
      "modified_by": {
        "username": "Silverbolt",
        "user_id": "0"
      },
      "modified_on": "2021-01-12T06:36:24.535000Z",
      "total": 1,
      "id": "5ffd4368b4c34d0001706960"
    }
  ],
  "page": {
    "type": "number",
    "current": 1,
    "size": 4,
    "item_total": 39,
    "has_previous": false,
    "has_next": true
  }
}
```
</details>









---


### getInventoryBySize
Get Inventory for company



```javascript
// Promise
const promise = client.catalog.getInventoryBySize({  itemId : value,
 size : value,
 pageNo : value,
 pageSize : value,
 q : value,
 sellable : value });

// Async/Await
const data = await client.catalog.getInventoryBySize({  itemId : value,
 size : value,
 pageNo : value,
 pageSize : value,
 q : value,
 sellable : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| itemId | number | yes | Item code of the product of which size is to be get. |   
| size | string | yes | Size of which inventory is to get. |    
| pageNo | number | no | The page number to navigate through the given set of results |    
| pageSize | number | no | Number of items to retrieve in each page. Default is 12. |    
| q | string | no | Search with help of store code. |    
| sellable | boolean | no | Filter on whether product is in stock or not. |  



This API allows get Inventory data for particular company grouped by size and store.

*Returned Response:*




[InventoryResponsePaginated](#InventoryResponsePaginated)

returns a list of all inventory grouped by size and store




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "items": [
    {
      "store": {
        "name": "yosss sdd dsdyo",
        "store_code": "sanic6sdfsf7",
        "uid": 59,
        "address": {
          "state": "MAHARASHTRA",
          "address1": "A/204, SAI VANDAN, NARAYAN NAGAR, TULINJ ROAD",
          "lat_long": {
            "type": "Point",
            "coordinates": [
              72.8231511,
              19.4232024
            ]
          },
          "address2": "",
          "pincode": 401209,
          "country": "INDIA",
          "city": "MUMBAI",
          "landmark": ""
        },
        "manager": {
          "name": "abc",
          "email": "a@b.com",
          "mobile_no": {
            "number": "2382634324",
            "country_code": 91
          }
        },
        "integration_type": {
          "order": "browntape",
          "inventory": "browntape"
        },
        "_custom_json": {}
      },
      "uid": "59_RTYUIDSDFV",
      "size": "AAX1 (1 PCS)",
      "inventory_updated_on": "2021-04-06T03:30:01.487000",
      "seller_identifier": "RTYUIDSDFV",
      "item_id": 7500651,
      "quantity": 10,
      "price": 1234,
      "price_effective": 1234,
      "price_transfer": 0,
      "currency": "INR",
      "sellable_quantity": 10,
      "identifiers": [
        {
          "gtin_type": "sku_code",
          "gtin_value": "RTYUIDSDFV",
          "primary": true
        }
      ]
    },
    {
      "store": {
        "name": "Saran Ledonne",
        "store_code": "af6198fe-2c23-4441-bbf4-e694c96e255c",
        "uid": 10,
        "address": {
          "state": "MAHA",
          "address1": "NO",
          "lat_long": {
            "type": "Point",
            "coordinates": [
              1,
              1
            ]
          },
          "address2": "",
          "pincode": 400072,
          "country": "INDIA",
          "city": "MUMBAI"
        },
        "manager": {
          "name": "abc",
          "email": "rehman@cashkart.com",
          "mobile_no": {
            "number": "9167943983",
            "country_code": 91
          }
        },
        "integration_type": {
          "order": "browntape",
          "inventory": "browntape"
        },
        "_custom_json": {}
      },
      "uid": "10_RTYUIDSDFV",
      "size": "AAX1 (1 PCS)",
      "inventory_updated_on": "2021-04-06T03:29:35.291000",
      "seller_identifier": "RTYUIDSDFV",
      "item_id": 7500651,
      "quantity": 10,
      "price": 1234,
      "price_effective": 1234,
      "price_transfer": 0,
      "currency": "INR",
      "sellable_quantity": 10,
      "identifiers": [
        {
          "gtin_type": "sku_code",
          "gtin_value": "RTYUIDSDFV",
          "primary": true
        }
      ]
    },
    {
      "store": {
        "name": "ABC-1-17",
        "store_code": "ABC-1-17",
        "uid": 11061,
        "address": {
          "state": "MAHARASHTRA",
          "address1": "14/1, VINOBHA BHAVE NAGAR",
          "lat_long": {
            "type": "Point",
            "coordinates": [
              1,
              1
            ]
          },
          "address2": "VINOBHA BHAVE NAGAR, KURLA WEST, KURLA, ",
          "pincode": 400070,
          "country": "INDIA",
          "city": "MUMBAI"
        },
        "manager": {
          "name": "Fahim",
          "email": "fahimsakri@gofynd.com",
          "mobile_no": {
            "number": "9594495254",
            "country_code": 91
          }
        },
        "integration_type": {
          "order": "browntape",
          "inventory": "browntape"
        },
        "_custom_json": {}
      },
      "uid": "11061_RTYUIDSDFV",
      "size": "AAX1 (1 PCS)",
      "inventory_updated_on": "2021-03-17T12:35:29.992000",
      "seller_identifier": "RTYUIDSDFV",
      "item_id": 7500651,
      "quantity": 10000000,
      "price": 1234,
      "price_effective": 1234,
      "price_transfer": 0,
      "currency": "INR",
      "sellable_quantity": 10000000,
      "order_committed_quantity": 0,
      "identifiers": [
        {
          "gtin_type": "sku_code",
          "gtin_value": "RTYUIDSDFV",
          "primary": true
        }
      ]
    },
    {
      "store": {
        "name": "RRL01",
        "store_code": "WH_8513",
        "uid": 1,
        "address": {
          "state": "MAHARASHTRA",
          "address1": "SHOPSENSE RETAIL TECHNOLOGIES PRIVATE LIMITED 1ST FLOOR WEWORK VIJAY DIAMOND, CROSS RD B, AJIT NAGAR,",
          "lat_long": {
            "type": "Point",
            "coordinates": [
              72.8691788,
              19.1174114
            ]
          },
          "address2": "KONDIVITA, ANDHERI EAST, MUMBAI, MAHARASHTRA 400069",
          "pincode": 400059,
          "country": "INDIA",
          "city": "MUMBAI"
        },
        "manager": {
          "name": "ASHISH CHANDORKAR",
          "email": "ASHISHCHANDORKAR@FYND.COM",
          "mobile_no": {
            "number": "8369782851",
            "country_code": 91
          }
        },
        "integration_type": {
          "order": "browntape",
          "inventory": "browntape"
        },
        "_custom_json": {}
      },
      "uid": "1_RTYUIDSDFV",
      "size": "AAX1 (1 PCS)",
      "inventory_updated_on": "2021-03-31T19:00:10.943000",
      "seller_identifier": "RTYUIDSDFV",
      "item_id": 7500651,
      "quantity": 39,
      "price": 1234,
      "price_effective": 1234,
      "price_transfer": 0,
      "currency": "INR",
      "sellable_quantity": 18,
      "order_committed_quantity": 7,
      "not_available_quantity": 0,
      "damaged_quantity": 0,
      "identifiers": [
        {
          "gtin_type": "sku_code",
          "gtin_value": "RTYUIDSDFV",
          "primary": true
        }
      ]
    },
    {
      "store": {
        "name": "RRL01",
        "store_code": "WH_8513",
        "uid": 1,
        "address": {
          "state": "MAHARASHTRA",
          "address1": "SHOPSENSE RETAIL TECHNOLOGIES PRIVATE LIMITED 1ST FLOOR WEWORK VIJAY DIAMOND, CROSS RD B, AJIT NAGAR,",
          "lat_long": {
            "type": "Point",
            "coordinates": [
              72.8691788,
              19.1174114
            ]
          },
          "address2": "KONDIVITA, ANDHERI EAST, MUMBAI, MAHARASHTRA 400069",
          "pincode": 400059,
          "country": "INDIA",
          "city": "MUMBAI"
        },
        "manager": {
          "name": "ASHISH CHANDORKAR",
          "email": "ASHISHCHANDORKAR@FYND.COM",
          "mobile_no": {
            "number": "8369782851",
            "country_code": 91
          }
        },
        "integration_type": {
          "order": "browntape",
          "inventory": "browntape"
        },
        "_custom_json": {}
      },
      "uid": "1_rtyuidsdfv",
      "size": "AAX1 (1 PCS)",
      "inventory_updated_on": "2020-07-07T10:37:06.146000",
      "seller_identifier": "RTYUIDSDFV",
      "item_id": 7500651,
      "quantity": 39,
      "price": 1234,
      "price_effective": 1234,
      "price_transfer": 0,
      "currency": "INR",
      "sellable_quantity": 0,
      "order_committed_quantity": 39,
      "identifiers": [
        {
          "gtin_type": "sku_code",
          "gtin_value": "RTYUIDSDFV",
          "primary": true
        }
      ]
    }
  ],
  "page": {
    "type": "number",
    "current": 1,
    "size": 1,
    "item_total": 5,
    "has_previous": false,
    "has_next": false
  }
}
```
</details>









---


### getInventoryBySizeIdentifier
Get Inventory for company



```javascript
// Promise
const promise = client.catalog.getInventoryBySizeIdentifier({  itemId : value,
 sizeIdentifier : value,
 pageNo : value,
 pageSize : value,
 q : value,
 locationIds : value });

// Async/Await
const data = await client.catalog.getInventoryBySizeIdentifier({  itemId : value,
 sizeIdentifier : value,
 pageNo : value,
 pageSize : value,
 q : value,
 locationIds : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| itemId | number | yes | Item code of the product of which size is to be get. |   
| sizeIdentifier | string | yes | Size Identifier (Seller Identifier or Primary Identifier) of which inventory is to get. |    
| pageNo | number | no | The page number to navigate through the given set of results |    
| pageSize | number | no | Number of items to retrieve in each page. Default is 12. |    
| q | string | no | Search with help of store code. |    
| locationIds | Array<number> | no | Search by store ids. |  



This API allows get Inventory data for particular company grouped by size and store.

*Returned Response:*




[InventorySellerIdentifierResponsePaginated](#InventorySellerIdentifierResponsePaginated)

returns a list of all inventory grouped by size and store




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "items": [
    {
      "store": {
        "name": "yosss sdd dsdyo",
        "store_code": "sanic6sdfsf7",
        "uid": 59,
        "address": {
          "state": "MAHARASHTRA",
          "address1": "A/204, SAI VANDAN, NARAYAN NAGAR, TULINJ ROAD",
          "lat_long": {
            "type": "Point",
            "coordinates": [
              72.8231511,
              19.4232024
            ]
          },
          "address2": "",
          "pincode": 401209,
          "country": "INDIA",
          "city": "MUMBAI",
          "landmark": ""
        },
        "manager": {
          "name": "abc",
          "email": "a@b.com",
          "mobile_no": {
            "number": "2382634324",
            "country_code": 91
          }
        },
        "integration_type": {
          "order": "browntape",
          "inventory": "browntape"
        },
        "_custom_json": {}
      },
      "uid": "59_RTYUIDSDFV",
      "size": "AAX1 (1 PCS)",
      "inventory_updated_on": "2021-04-06T03:30:01.487000",
      "seller_identifier": "RTYUIDSDFV",
      "item_id": 7500651,
      "quantity": 10,
      "price": 1234,
      "price_effective": 1234,
      "price_transfer": 0,
      "currency": "INR",
      "sellable_quantity": 10,
      "identifiers": [
        {
          "gtin_type": "sku_code",
          "gtin_value": "RTYUIDSDFV",
          "primary": true
        }
      ]
    },
    {
      "store": {
        "name": "Saran Ledonne",
        "store_code": "af6198fe-2c23-4441-bbf4-e694c96e255c",
        "uid": 10,
        "address": {
          "state": "MAHA",
          "address1": "NO",
          "lat_long": {
            "type": "Point",
            "coordinates": [
              1,
              1
            ]
          },
          "address2": "",
          "pincode": 400072,
          "country": "INDIA",
          "city": "MUMBAI"
        },
        "manager": {
          "name": "abc",
          "email": "rehman@cashkart.com",
          "mobile_no": {
            "number": "9167943983",
            "country_code": 91
          }
        },
        "integration_type": {
          "order": "browntape",
          "inventory": "browntape"
        },
        "_custom_json": {}
      },
      "uid": "10_RTYUIDSDFV",
      "size": "AAX1 (1 PCS)",
      "inventory_updated_on": "2021-04-06T03:29:35.291000",
      "seller_identifier": "RTYUIDSDFV",
      "item_id": 7500651,
      "quantity": 10,
      "price": 1234,
      "price_effective": 1234,
      "price_transfer": 0,
      "currency": "INR",
      "sellable_quantity": 10,
      "identifiers": [
        {
          "gtin_type": "sku_code",
          "gtin_value": "RTYUIDSDFV",
          "primary": true
        }
      ]
    },
    {
      "store": {
        "name": "ABC-1-17",
        "store_code": "ABC-1-17",
        "uid": 11061,
        "address": {
          "state": "MAHARASHTRA",
          "address1": "14/1, VINOBHA BHAVE NAGAR",
          "lat_long": {
            "type": "Point",
            "coordinates": [
              1,
              1
            ]
          },
          "address2": "VINOBHA BHAVE NAGAR, KURLA WEST, KURLA, ",
          "pincode": 400070,
          "country": "INDIA",
          "city": "MUMBAI"
        },
        "manager": {
          "name": "Fahim",
          "email": "fahimsakri@gofynd.com",
          "mobile_no": {
            "number": "9594495254",
            "country_code": 91
          }
        },
        "integration_type": {
          "order": "browntape",
          "inventory": "browntape"
        },
        "_custom_json": {}
      },
      "uid": "11061_RTYUIDSDFV",
      "size": "AAX1 (1 PCS)",
      "inventory_updated_on": "2021-03-17T12:35:29.992000",
      "seller_identifier": "RTYUIDSDFV",
      "item_id": 7500651,
      "quantity": 10000000,
      "price": 1234,
      "price_effective": 1234,
      "price_transfer": 0,
      "currency": "INR",
      "sellable_quantity": 10000000,
      "order_committed_quantity": 0,
      "identifiers": [
        {
          "gtin_type": "sku_code",
          "gtin_value": "RTYUIDSDFV",
          "primary": true
        }
      ]
    },
    {
      "store": {
        "name": "RRL01",
        "store_code": "WH_8513",
        "uid": 1,
        "address": {
          "state": "MAHARASHTRA",
          "address1": "SHOPSENSE RETAIL TECHNOLOGIES PRIVATE LIMITED 1ST FLOOR WEWORK VIJAY DIAMOND, CROSS RD B, AJIT NAGAR,",
          "lat_long": {
            "type": "Point",
            "coordinates": [
              72.8691788,
              19.1174114
            ]
          },
          "address2": "KONDIVITA, ANDHERI EAST, MUMBAI, MAHARASHTRA 400069",
          "pincode": 400059,
          "country": "INDIA",
          "city": "MUMBAI"
        },
        "manager": {
          "name": "ASHISH CHANDORKAR",
          "email": "ASHISHCHANDORKAR@FYND.COM",
          "mobile_no": {
            "number": "8369782851",
            "country_code": 91
          }
        },
        "integration_type": {
          "order": "browntape",
          "inventory": "browntape"
        },
        "_custom_json": {}
      },
      "uid": "1_RTYUIDSDFV",
      "size": "AAX1 (1 PCS)",
      "inventory_updated_on": "2021-03-31T19:00:10.943000",
      "seller_identifier": "RTYUIDSDFV",
      "item_id": 7500651,
      "quantity": 39,
      "price": 1234,
      "price_effective": 1234,
      "price_transfer": 0,
      "currency": "INR",
      "sellable_quantity": 18,
      "order_committed_quantity": 7,
      "not_available_quantity": 0,
      "damaged_quantity": 0,
      "identifiers": [
        {
          "gtin_type": "sku_code",
          "gtin_value": "RTYUIDSDFV",
          "primary": true
        }
      ]
    },
    {
      "store": {
        "name": "RRL01",
        "store_code": "WH_8513",
        "uid": 1,
        "address": {
          "state": "MAHARASHTRA",
          "address1": "SHOPSENSE RETAIL TECHNOLOGIES PRIVATE LIMITED 1ST FLOOR WEWORK VIJAY DIAMOND, CROSS RD B, AJIT NAGAR,",
          "lat_long": {
            "type": "Point",
            "coordinates": [
              72.8691788,
              19.1174114
            ]
          },
          "address2": "KONDIVITA, ANDHERI EAST, MUMBAI, MAHARASHTRA 400069",
          "pincode": 400059,
          "country": "INDIA",
          "city": "MUMBAI"
        },
        "manager": {
          "name": "ASHISH CHANDORKAR",
          "email": "ASHISHCHANDORKAR@FYND.COM",
          "mobile_no": {
            "number": "8369782851",
            "country_code": 91
          }
        },
        "integration_type": {
          "order": "browntape",
          "inventory": "browntape"
        },
        "_custom_json": {}
      },
      "uid": "1_rtyuidsdfv",
      "size": "AAX1 (1 PCS)",
      "inventory_updated_on": "2020-07-07T10:37:06.146000",
      "seller_identifier": "RTYUIDSDFV",
      "item_id": 7500651,
      "quantity": 39,
      "price": 1234,
      "price_effective": 1234,
      "price_transfer": 0,
      "currency": "INR",
      "sellable_quantity": 0,
      "order_committed_quantity": 39,
      "identifiers": [
        {
          "gtin_type": "sku_code",
          "gtin_value": "RTYUIDSDFV",
          "primary": true
        }
      ]
    }
  ],
  "page": {
    "type": "number",
    "current": 1,
    "size": 1,
    "item_total": 5,
    "has_previous": false,
    "has_next": false
  }
}
```
</details>









---


### getInventoryExport
Get Inventory export history.



```javascript
// Promise
const promise = client.catalog.getInventoryExport();

// Async/Await
const data = await client.catalog.getInventoryExport();
```






This API helps to get Inventory export history.

*Returned Response:*




[InventoryExportJob](#InventoryExportJob)

Returns a list of inventory export jobs




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getListingConfigurations
Get the details of the application configured configurations of listing config types.



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").catalog.getListingConfigurations({  configType : value,
 pageNo : value,
 pageSize : value,
 search : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").catalog.getListingConfigurations({  configType : value,
 pageNo : value,
 pageSize : value,
 search : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| configType | string | yes | A `config_type` is an identifier that defines a specific type of configuration. |    
| pageNo | number | no | The page number to navigate through the given set of results. |    
| pageSize | number | no | Number of items to retrieve in each page. Default is 12. |    
| search | string | no | Get configuration list filtered by `search` string. |  



Get the details of the application configured configurations of listing config types.

*Returned Response:*




[GetConfigResponse](#GetConfigResponse)

configuration details for catalog. See example below or refer `GetConfigResponseSchema` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "data": [
    {
      "is_active": true,
      "slug": "test-group12-31",
      "is_default": false,
      "attributes": [
        {
          "is_active": true,
          "display_type": "text",
          "slug": "item_code",
          "key": "item_code",
          "priority": 1,
          "name": "Item Code"
        },
        {
          "is_active": true,
          "display_type": "text",
          "slug": "brand",
          "key": "brand",
          "priority": 2,
          "name": "Brand"
        }
      ],
      "app_id": "5d65089e031f9029f8e8dc2f",
      "priority": 1,
      "template_slugs": [
        "atesttemplate"
      ],
      "name": "Test Group12 ",
      "id": "62a84b90bd43c0fe4cf53574"
    },
    {
      "is_active": true,
      "slug": "et14",
      "is_default": false,
      "attributes": [
        {
          "is_active": true,
          "display_type": "text",
          "slug": "item_code",
          "key": "item_code",
          "priority": 1,
          "name": "Item Code"
        },
        {
          "is_active": true,
          "display_type": "text",
          "slug": "brand",
          "key": "brand",
          "priority": 2,
          "name": "Brand"
        },
        {
          "is_active": true,
          "display_type": "text",
          "slug": "country_of_origin",
          "key": "country_of_origin",
          "priority": 3,
          "name": "Country Of Origin"
        },
        {
          "is_active": true,
          "display_type": "text",
          "slug": "image_nature",
          "key": "image_nature",
          "priority": 4,
          "name": "Image Type"
        },
        {
          "is_active": true,
          "display_type": "text",
          "slug": "discount",
          "key": "discount",
          "priority": 5,
          "name": "Discount"
        }
      ],
      "app_id": "5d65089e031f9029f8e8dc2f",
      "priority": 2,
      "template_slugs": [
        "atesttemplate"
      ],
      "name": "ET",
      "id": "62a84b9ebd43c0fe4cf53576"
    }
  ],
  "page": {
    "current": 1,
    "next": 2,
    "has_next": false,
    "total_count": 2
  }
}
```
</details>









---


### getMarketplaceOptinDetail
Get opt-in infomation.



```javascript
// Promise
const promise = client.catalog.getMarketplaceOptinDetail();

// Async/Await
const data = await client.catalog.getMarketplaceOptinDetail();
```






Use this API to fetch opt-in information for all the platforms. If successful, returns a logs in the response body as specified in `GetOptInPlatformSchema`

*Returned Response:*




[GetOptInPlatform](#GetOptInPlatform)

See example below or refer `GetOptInPlatformSchema` for details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getOptimalLocations
Location Reassignment



```javascript
// Promise
const promise = client.catalog.getOptimalLocations({  body : value });

// Async/Await
const data = await client.catalog.getOptimalLocations({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [AssignStore](#AssignStore) | yes | Request body |




*Returned Response:*




[StoreAssignResponse](#StoreAssignResponse)

Returns a success response




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "items": [
    {
      "meta": {},
      "store_id": 11550,
      "size": "OS",
      "_id": "61161830f1061e7c7f81d8ed",
      "store_pincode": 201303,
      "company_id": 783,
      "s_city": "NOIDA",
      "quantity": 1,
      "price_effective": 995,
      "status": true,
      "price_marked": 995,
      "uid": "11550_000000410234883001",
      "article_assignment": {
        "strategy": "app-config",
        "level": "multi-company"
      },
      "item_id": 75252658,
      "strategy_wise_listing": [],
      "index": 0
    }
  ]
}
```
</details>









---


### getProduct
Get a single product.



```javascript
// Promise
const promise = client.catalog.getProduct({  itemId : value,
 brandUid : value,
 itemCode : value });

// Async/Await
const data = await client.catalog.getProduct({  itemId : value,
 brandUid : value,
 itemCode : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| itemId | number | yes | Item Id of the product. |    
| brandUid | number | no | Brand Id of the product. |    
| itemCode | string | no | Item code of the product. |  



This API helps to get data associated to a particular product.

*Returned Response:*




[SingleProductResponse](#SingleProductResponse)

Product object. See example below or refer `product.utils.format_product_response` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "data": {
    "is_image_less_product": false,
    "short_description": "",
    "departments": [
      21
    ],
    "country_of_origin": "India",
    "net_quantity": {},
    "is_set": false,
    "variant_media": {},
    "brand_uid": 3272,
    "item_type": "standard",
    "category_slug": "abayas",
    "media": [
      {
        "type": "image",
        "url": "/x0/products/pictures/item/free/original/Hsw-U3Kut-Test-01.jpeg"
      }
    ],
    "product_publish": {
      "is_set": false,
      "product_online_date": "2023-02-16T09:37:29.620000Z"
    },
    "return_config": {
      "returnable": false,
      "unit": "days",
      "time": 0
    },
    "slug": "test-01-7542894",
    "teaser_tag": {},
    "no_of_boxes": 1,
    "_custom_json": {},
    "is_dependent": false,
    "item_code": "TEST-01",
    "custom_order": {
      "manufacturing_time_unit": "days",
      "is_custom_order": false,
      "manufacturing_time": 0
    },
    "highlights": [],
    "currency": "INR",
    "product_group_tag": [],
    "name": "Test-01",
    "description": "",
    "multi_size": false,
    "tags": [],
    "size_guide": "",
    "template_tag": "ethnicwear",
    "category_uid": 441,
    "variants": {},
    "created_on": "2023-02-16T09:37:31.304000",
    "created_by": {
      "username": "mdnehalahmed_fynd_external_com_90136",
      "user_id": "757bf08ff5dd4ba95f8778cf",
      "super_user": false
    },
    "modified_on": "2023-02-16T09:37:31.304000",
    "modified_by": {
      "username": "mdnehalahmed_fynd_external_com_90136",
      "user_id": "757bf08ff5dd4ba95f8778cf",
      "super_user": false
    },
    "stage": "pending",
    "uid": 7542894,
    "all_company_ids": [
      835
    ],
    "all_identifiers": [
      "TEST-015434"
    ],
    "id": "63edf95bf314486d44a6b361",
    "brand": {
      "name": null,
      "logo": {
        "aspect_ratio": "1:1",
        "aspect_ratio_f": 1,
        "url": "",
        "secure_url": ""
      },
      "uid": 3272
    },
    "sizes": [
      {
        "price_transfer": 0,
        "is_set": false,
        "item_dimensions_unit_of_measure": "cm",
        "item_weight_unit_of_measure": "gram",
        "item_width": 10,
        "item_length": 10,
        "size": "OS",
        "price_effective": 10,
        "identifiers": [
          {
            "gtin_value": "TEST-015434",
            "primary": true,
            "gtin_type": "ean"
          }
        ],
        "price": 10,
        "item_weight": 10,
        "seller_identifier": "TEST-015434",
        "track_inventory": true,
        "item_height": 10,
        "_custom_json": {},
        "item_code": "TEST-01",
        "company_id": 835,
        "currency": "INR",
        "modified_on": "2023-02-16T09:37:31.352000",
        "brand_uid": 3272,
        "created_on": "2023-02-16T09:37:31.352000",
        "id": "63edf95bf314486d44a6b364"
      }
    ],
    "is_expirable": false,
    "is_active": true,
    "trader": [
      {
        "type": "Manufacturer",
        "address": [
          "fdgh"
        ],
        "name": "fgt"
      }
    ],
    "tax_identifier": {
      "hsn_code_id": "63d78f483c1714abdd406766",
      "reporting_hsn": "97211110H1",
      "hsn_code": "97211110"
    },
    "category": {
      "l3": {
        "name": "Abayas",
        "uid": 441,
        "slug": "abayas"
      },
      "l1": {
        "uid": 443,
        "name": "Ethnic Wear",
        "slug": "ethnic-wear"
      },
      "l2": {
        "uid": 414,
        "name": "Hijabs & Abayas",
        "slug": "hijabs-abayas"
      }
    },
    "attributes": {
      "marketer-address": "dfg",
      "primary_color": "Black",
      "essential": "No",
      "pattern": "Printed",
      "primary_material": "Cotton Blend",
      "marketer-name": "gfdfd",
      "gender": [
        "Men"
      ]
    }
  }
}
```
</details>









---


### getProductAssetsInBulk
Get a list of all bulk asset jobs.



```javascript
// Promise
const promise = client.catalog.getProductAssetsInBulk({  pageNo : value,
 pageSize : value });

// Async/Await
const data = await client.catalog.getProductAssetsInBulk({  pageNo : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNo | number | no | The page number to navigate through the given set of results |    
| pageSize | number | no | Number of items to retrieve in each page. Default is 12. |  



This API helps to get bulk asset jobs data associated to a particular company.

*Returned Response:*




[BulkAssetResponse](#BulkAssetResponse)

List of bulk asset jobs List. See `BulkUtil.modify_batch_response` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "items": [
    {
      "created_on": "2021-02-25T16:45:22.425000Z",
      "file_path": "https://hdn-1.fynd.com/company/61/self/documents/product-import/free/original/ZUSmmXHmZ-U8mTYx3KR-Nike-hoddie.zip",
      "succeed": 1,
      "cancelled_records": [],
      "failed": 0,
      "failed_records": [],
      "stage": "completed",
      "is_active": true,
      "modified_by": {
        "user_id": "23175373",
        "username": "nikhilmhatre_gofynd_com_28085_23175373"
      },
      "modified_on": "2021-02-25T16:47:24.551000Z",
      "retry": 1,
      "total": 1,
      "company_id": 61,
      "created_by": {
        "user_id": "23175373",
        "username": "nikhilmhatre_gofynd_com_28085_23175373",
        "full_name": "nikhil mhatre"
      },
      "cancelled": 0,
      "tracking_url": "https://api.fynd.com/common/assets/v1/asset/status/extract-zips/3296",
      "id": "6037d422aa879600015c6d1d"
    }
  ],
  "page": {
    "current": 1,
    "size": 3,
    "has_previous": false,
    "has_next": false,
    "item_total": 1
  }
}
```
</details>









---


### getProductAttributes
Get list of all the attributes by their l3_categories



```javascript
// Promise
const promise = client.catalog.getProductAttributes({  category : value,
 filter : value });

// Async/Await
const data = await client.catalog.getProductAttributes({  category : value,
 filter : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| category | string | yes | It is the name of the l3 cateogry |    
| filter | boolean | no | If true, returns filtered values, else returns all the attributes |  



This API allows to list all the attributes by their l3_categories.

*Returned Response:*




[ProductAttributesResponse](#ProductAttributesResponse)

Size guide object. See example below or refer `ProductAttributesResponseSchema` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "items": [
    {
      "filters": {
        "indexing": false
      },
      "schema": {
        "multi": true,
        "allowed_values": [],
        "format": "",
        "type": "int",
        "range": {}
      },
      "created_on": "2022-05-25T16:15:01.276000Z",
      "modified_on": "2022-05-25T16:15:01.276000Z",
      "slug": "test-number-area",
      "modified_by": {
        "username": "anveshreddy_fynd_external_com_85084",
        "user_id": "8ec76d9df98f4246a9d6e5a6"
      },
      "details": {
        "display_type": "text"
      },
      "description": "to test the attribute that represents area",
      "unit": "ft**2",
      "variant": false,
      "departments": [
        "men-s-fashion"
      ],
      "created_by": {
        "username": "anveshreddy_fynd_external_com_85084",
        "user_id": "8ec76d9df98f4246a9d6e5a6"
      },
      "name": "test number area",
      "id": "628e5605c71589dba709c365"
    },
    {
      "created_by": {
        "username": "anveshreddy_fynd_external_com_85084",
        "user_id": "8ec76d9df98f4246a9d6e5a6"
      },
      "name": "Motor Power",
      "details": {
        "display_type": "text"
      },
      "slug": "motor-power",
      "logo": "https://hdn-1.jiomarketx0.de/x0/products/pictures/attribute/logo/original/UYTUHgLGj-Color.png",
      "modified_on": "2022-05-05T09:40:00.453000Z",
      "schema": {
        "allowed_values": [],
        "format": "",
        "multi": false,
        "range": {
          "min": 1,
          "max": 10
        },
        "mandatory": true,
        "type": "int"
      },
      "modified_by": {
        "username": "anveshreddy_fynd_external_com_85084",
        "user_id": "8ec76d9df98f4246a9d6e5a6"
      },
      "created_on": "2022-05-05T09:40:00.453000Z",
      "filters": {
        "indexing": true,
        "priority": 26
      },
      "variant": true,
      "enabled_for_end_consumer": true,
      "description": "tells the power of the motor",
      "departments": [
        "men-s-fashion",
        "anvesh-department"
      ],
      "unit": "hp",
      "id": "62739b7043385c1f314d4868"
    },
    {
      "created_by": {
        "username": "anveshreddy_fynd_external_com_85084",
        "user_id": "8ec76d9df98f4246a9d6e5a6"
      },
      "name": "SIZE NEW",
      "details": {
        "display_type": "text"
      },
      "slug": "size-new",
      "logo": "https://hdn-1.jiomarketx0.de/x0/products/pictures/attribute/logo/original/UYTUHgLGj-Color.png",
      "modified_on": "2022-05-05T13:25:33.353000Z",
      "schema": {
        "allowed_values": [
          "XS",
          "S",
          "M",
          "L",
          "XXL",
          "XXXL"
        ],
        "format": "upper case",
        "multi": false,
        "range": {},
        "mandatory": true,
        "type": "str"
      },
      "modified_by": {
        "username": "anveshreddy_fynd_external_com_85084",
        "user_id": "8ec76d9df98f4246a9d6e5a6"
      },
      "created_on": "2022-05-05T08:56:59.483000Z",
      "filters": {
        "indexing": true,
        "priority": 25
      },
      "variant": false,
      "enabled_for_end_consumer": true,
      "description": "describes the size of the item",
      "departments": [
        "men-s-fashion",
        "electronics-test",
        "anvesh-department",
        "fashion",
        "test1"
      ],
      "id": "6273915b43385c1f314d4867"
    },
    {
      "variant": false,
      "modified_on": "2022-04-13T13:35:53.611000Z",
      "modified_by": {
        "username": "piyushsinha_fynd_external_com_34090",
        "user_id": "5d9aa3ca5acdcb33fdcc8472"
      },
      "filters": {
        "indexing": false
      },
      "slug": "white",
      "created_on": "2022-04-13T13:35:53.611000Z",
      "departments": [
        "men-s-fashion"
      ],
      "created_by": {
        "username": "piyushsinha_fynd_external_com_34090",
        "user_id": "5d9aa3ca5acdcb33fdcc8472"
      },
      "schema": {
        "format": "title case",
        "multi": false,
        "allowed_values": [],
        "range": {},
        "type": "str"
      },
      "name": "White",
      "details": {
        "display_type": "text"
      },
      "id": "6256d1b9635e136dc2cb9a02"
    },
    {
      "filters": {
        "indexing": false
      },
      "created_by": {
        "username": "jagadeshsahadevan_gofynd_com_66706",
        "user_id": "f6fccadda27e6b365b87c027"
      },
      "name": "Test Attributes",
      "details": {
        "display_type": "text"
      },
      "departments": [
        "men-s-fashion"
      ],
      "modified_by": {
        "username": "jagadeshsahadevan_gofynd_com_66706",
        "user_id": "f6fccadda27e6b365b87c027"
      },
      "slug": "test-attributes",
      "schema": {
        "format": "",
        "range": {},
        "allowed_values": [
          "A",
          "B"
        ],
        "type": "str",
        "multi": true
      },
      "modified_on": "2022-03-24T07:16:59.998000Z",
      "variant": false,
      "created_on": "2022-03-24T07:16:59.998000Z",
      "description": "Hello World",
      "id": "623c1aecb9e8edcfeb8d076a"
    },
    {
      "schema": {
        "allowed_values": [],
        "multi": false,
        "format": "",
        "range": {},
        "type": "str"
      },
      "modified_by": {
        "username": "rockypatro_gofynd_com_32787",
        "user_id": "59ad6a452775bfd63674f0a5"
      },
      "name": "Care Instructions",
      "details": {
        "display_type": "text"
      },
      "created_on": "2022-03-17T14:54:41.251000Z",
      "created_by": {
        "username": "rockypatro_gofynd_com_32787",
        "user_id": "59ad6a452775bfd63674f0a5"
      },
      "description": "Any specific care instruction note or Safety instructions that needs to be followed",
      "variant": false,
      "modified_on": "2022-03-17T14:54:41.251000Z",
      "enabled_for_end_consumer": true,
      "departments": [
        "men-s-fashion"
      ],
      "filters": {
        "indexing": true,
        "priority": 9
      },
      "slug": "care-instructions",
      "id": "62334bb1d6b144588682e1c0"
    },
    {
      "schema": {
        "allowed_values": [
          "Sleeveless",
          "Short",
          "Long"
        ],
        "multi": false,
        "format": "",
        "range": {},
        "type": "str"
      },
      "modified_by": {
        "username": "rockypatro_gofynd_com_32787",
        "user_id": "59ad6a452775bfd63674f0a5"
      },
      "name": "Sleeve Length",
      "details": {
        "display_type": "text"
      },
      "created_on": "2022-03-17T14:53:45.700000Z",
      "created_by": {
        "username": "rockypatro_gofynd_com_32787",
        "user_id": "59ad6a452775bfd63674f0a5"
      },
      "description": "Specify the length of the sleeve. Select the value from the dropdown",
      "variant": false,
      "modified_on": "2022-03-17T14:53:45.700000Z",
      "enabled_for_end_consumer": true,
      "departments": [
        "men-s-fashion"
      ],
      "filters": {
        "indexing": true,
        "priority": 8
      },
      "slug": "sleeve-length",
      "id": "62334b79d6b144588682e1bf"
    },
    {
      "schema": {
        "format": "",
        "range": {},
        "allowed_values": [
          "Solid",
          "Printed",
          "Ripped",
          "Checked"
        ],
        "type": "str",
        "multi": false
      },
      "modified_by": {
        "username": "jagadeshsahadevan_gofynd_com_66706",
        "user_id": "f6fccadda27e6b365b87c027"
      },
      "name": "Pattern",
      "details": {
        "display_type": "text"
      },
      "created_on": "2022-03-17T14:52:12.367000Z",
      "created_by": {
        "username": "rockypatro_gofynd_com_32787",
        "user_id": "59ad6a452775bfd63674f0a5"
      },
      "description": "A repeated form or design on the product, Select the values from the dropdown.",
      "variant": false,
      "modified_on": "2022-03-24T07:23:32.752000Z",
      "enabled_for_end_consumer": true,
      "departments": [
        "men-s-fashion",
        "women-s-fashion"
      ],
      "filters": {
        "priority": 7,
        "indexing": true
      },
      "slug": "pattern",
      "id": "62334b1cd6b144588682e1be"
    },
    {
      "schema": {
        "allowed_values": [],
        "multi": false,
        "format": "",
        "range": {},
        "type": "str"
      },
      "modified_by": {
        "username": "rockypatro_gofynd_com_32787",
        "user_id": "59ad6a452775bfd63674f0a5"
      },
      "name": "Material",
      "details": {
        "display_type": "text"
      },
      "created_on": "2022-03-17T14:50:30.717000Z",
      "created_by": {
        "username": "rockypatro_gofynd_com_32787",
        "user_id": "59ad6a452775bfd63674f0a5"
      },
      "description": "Specify the Material name or Material composition of the product",
      "variant": false,
      "modified_on": "2022-03-17T14:50:30.717000Z",
      "enabled_for_end_consumer": true,
      "departments": [
        "men-s-fashion",
        "beauty-and-personal-care",
        "electronics"
      ],
      "filters": {
        "indexing": true,
        "priority": 6
      },
      "slug": "material",
      "id": "62334ab6d6b144588682e1bd"
    },
    {
      "schema": {
        "allowed_values": [],
        "multi": false,
        "format": "",
        "range": {},
        "type": "str"
      },
      "modified_by": {
        "username": "rockypatro_gofynd_com_32787",
        "user_id": "59ad6a452775bfd63674f0a5"
      },
      "name": "Colour",
      "details": {
        "display_type": "text"
      },
      "created_on": "2022-03-17T14:49:43.160000Z",
      "created_by": {
        "username": "rockypatro_gofynd_com_32787",
        "user_id": "59ad6a452775bfd63674f0a5"
      },
      "description": "Specify the colour of the product, if you have any customized colour name Specify in this column.",
      "variant": false,
      "modified_on": "2022-03-17T14:49:43.160000Z",
      "enabled_for_end_consumer": true,
      "departments": [
        "men-s-fashion",
        "beauty-and-personal-care",
        "electronics"
      ],
      "filters": {
        "indexing": true,
        "priority": 5
      },
      "slug": "colour",
      "id": "62334a87d6b144588682e1bc"
    }
  ]
}
```
</details>









---


### getProductBulkUploadHistory
Get a list of all bulk product upload jobs.



```javascript
// Promise
const promise = client.catalog.getProductBulkUploadHistory({  search : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await client.catalog.getProductBulkUploadHistory({  search : value,
 pageNo : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| search | string | no | Search string to filter the results by batch id |    
| pageNo | number | no | The page number to navigate through the given set of results |    
| pageSize | number | no | Number of items to retrieve in each page. Default is 12. |  



This API helps to get bulk product upload jobs data.

*Returned Response:*




[ProductBulkRequestList](#ProductBulkRequestList)

List of bulk product upload jobs. See `BulkRequestGetSchema` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "items": [
    {
      "stage": "completed",
      "company_id": 61,
      "is_active": true,
      "cancelled_records": [],
      "failed": 0,
      "template_tag": "footwear",
      "modified_on": "2021-03-12T08:11:08.646000Z",
      "created_on": "2021-03-12T08:11:06.848000Z",
      "failed_records": [],
      "created_by": {
        "username": "yadavanuja039_gmail_com_82948",
        "user_id": "23218433",
        "full_name": "Anuja Yadav"
      },
      "total": 1,
      "file_path": "https://hdn-1.fynd.com/company/61/self/documents/product-import/free/original/mkX5ApRmw-sample_bulk_products_footwear.xlsx",
      "succeed": 1,
      "modified_by": {
        "username": "Silverbolt",
        "user_id": "0"
      },
      "cancelled": 0,
      "template": {
        "name": "Footwear",
        "banner": "https://hdn-1.fynd.com/seller/pictures/landscape-banner/original/nFPtXR_Beauty_&_Personal_Care_L.jpgf30455a5-d265-4382-b513-65afb9240320/nFPtXR_Beauty_and_Personal_Care_L.jpg",
        "slug": "footwear",
        "logo": "https://hdn-1.fynd.com/seller/pictures/logo/original/9Y2UEp_ssssss.jpg7359e4c6-4c53-4dbe-a920-ef8ac658afb1/9Y2UEp_ssssss.jpg",
        "departments": [
          "men",
          "women",
          "kids",
          "fashion"
        ],
        "description": "Footwear is a garment worn on the feet to protect against environmental adversities like heat or ground textures. Example: Sports Shoes"
      },
      "id": "604b221a73bfa20001cb00e8"
    }
  ],
  "page": {
    "current": 1,
    "size": 26,
    "has_previous": false,
    "has_next": true,
    "item_total": 251
  }
}
```
</details>









---


### getProductBundle
List all Product Bundles



```javascript
// Promise
const promise = client.catalog.getProductBundle({  q : value,
 slug : value });

// Async/Await
const data = await client.catalog.getProductBundle({  q : value,
 slug : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| q | string | no | A search string that is searched with product bundle name. |    
| slug | Array<string> | no | slugs of bundles to be retrieved. |  



Get all product bundles for a particular company

*Returned Response:*




[GetProductBundleListingResponse](#GetProductBundleListingResponse)

List of bundle configured for a company. See example below or refer `GetProductBundleListingResponse` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "page": {
    "current": 1,
    "total": 1,
    "has_previous": false,
    "has_next": false,
    "total_item_count": 4
  },
  "items": [
    {
      "slug": "bag",
      "logo": "http://g.com/poo.png/",
      "name": "Bag",
      "choice": "multi",
      "products": [
        {
          "product_uid": 7500001,
          "max_quantity": 1,
          "min_quantity": 1,
          "auto_add_to_cart": false,
          "auto_select": false,
          "allow_remove": true
        }
      ],
      "meta": {},
      "same_store_assignment": true,
      "is_active": true,
      "page_visibility": [
        "pdp"
      ],
      "created_by": {
        "username": "917827311650_22960",
        "uid": "123"
      },
      "company_id": 1,
      "created_on": "2021-02-19 16:40:26.310007",
      "modified_by": {
        "username": "917827311650_22960",
        "uid": "123"
      },
      "modified_on": "2021-02-19 16:40:26.310027",
      "id": "602f9ca2a596ce312f5956f9"
    },
    {
      "choice": "multi",
      "same_store_assignment": true,
      "products": [
        {
          "auto_select": false,
          "allow_remove": true,
          "auto_add_to_cart": false,
          "max_quantity": 1,
          "product_uid": 7500001,
          "min_quantity": 1
        }
      ],
      "is_active": true,
      "slug": "bag",
      "meta": {},
      "logo": "http://g.com/poo.png/",
      "page_visibility": [
        "pdp"
      ],
      "name": "Bag",
      "created_by": {
        "username": "917827311650_22960",
        "uid": "123"
      },
      "company_id": 1,
      "created_on": "2021-02-19 16:21:35.091512",
      "modified_by": {
        "username": "917827311650_22960",
        "uid": "123"
      },
      "modified_on": "2021-02-19 16:21:35.091540",
      "id": "602f9837a596ce2edf9868e2"
    },
    {
      "slug": "bag",
      "is_active": true,
      "same_store_assignment": true,
      "meta": {},
      "choice": "multi",
      "logo": "http://g.com/poo.png/",
      "page_visibility": [
        "pdp"
      ],
      "name": "Bag",
      "products": [
        {
          "auto_select": false,
          "min_quantity": 1,
          "allow_remove": true,
          "auto_add_to_cart": false,
          "max_quantity": 1,
          "product_uid": 7500001
        }
      ],
      "created_by": {
        "username": "917827311650_22960",
        "uid": "123"
      },
      "company_id": 1,
      "created_on": "2021-02-19 16:20:24.605207",
      "modified_by": {
        "username": "917827311650_22960",
        "uid": "123"
      },
      "modified_on": "2021-02-19 16:20:24.605230",
      "id": "602f97f0a596ce2ead47cd0b"
    },
    {
      "products": [
        {
          "auto_select": false,
          "auto_add_to_cart": false,
          "min_quantity": 1,
          "allow_remove": true,
          "max_quantity": 1,
          "product_uid": 7500001
        }
      ],
      "is_active": true,
      "logo": "http://g.com/poo.png/",
      "name": "Bag",
      "choice": "multi",
      "slug": "bag",
      "same_store_assignment": true,
      "page_visibility": [
        "pdp"
      ],
      "meta": {},
      "created_by": {
        "username": "917827311650_22960",
        "uid": "123"
      },
      "company_id": 1,
      "created_on": "2021-02-19 16:16:46.196449",
      "modified_by": {
        "username": "917827311650_22960",
        "uid": "123"
      },
      "modified_on": "2021-02-19 16:16:46.196467",
      "id": "602f9716a596ce2e415196df"
    }
  ]
}
```
</details>









---


### getProductBundleDetail
Get a particular Product Bundle details



```javascript
// Promise
const promise = client.catalog.getProductBundleDetail({  id : value });

// Async/Await
const data = await client.catalog.getProductBundleDetail({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to retrieve. |  



Get a particular Bundle details by its `id`. If successful, returns a Product bundle resource in the response body specified in `GetProductBundleResponse`

*Returned Response:*




[GetProductBundleResponse](#GetProductBundleResponse)

The Collection object. See example below or refer `GetProductBundleResponse` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "slug": "bag",
  "company_id": 1,
  "logo": "http://g.com/poo.png/",
  "name": "Bag",
  "choice": "multi",
  "products": [
    {
      "product_uid": 7500001,
      "product_details": {
        "country_of_origin": "India",
        "slug": "slug-1",
        "item_code": "760B3BFF-4905-44B8-A50E-082829E7107F",
        "attributes": {
          "brand_name": "brand 2"
        },
        "name": "Some Phone",
        "images": [
          "https://hdn-1.addsale.com/x0/media/pictures/tagged_items/original/random_code_4/FE6DUR_000000.png"
        ],
        "uid": 7500001
      },
      "max_quantity": 1,
      "min_quantity": 1,
      "auto_add_to_cart": false,
      "auto_select": false,
      "allow_remove": true
    }
  ],
  "meta": {},
  "same_store_assignment": true,
  "page_visibility": [
    "pdp"
  ]
}
```
</details>









---


### getProductDetailBySlug
Get a product



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").catalog.getProductDetailBySlug({  slug : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").catalog.getProductDetailBySlug({  slug : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| slug | string | yes | The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/** |  



Products are the core resource of an application. Products can be associated by categories, collections, brands and more. This API retrieves the product specified by the given **slug**. If successful, returns a Product resource in the response body specified in `ProductDetail`

*Returned Response:*




[ProductDetail](#ProductDetail)

The Product object. See example below or refer `ProductDetail` for details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "type": "product",
  "grouped_attributes": [
    {
      "title": "Alexander Sawyer",
      "details": [
        {
          "key": "Kimberly Davidson",
          "type": "text",
          "value": "DarkGrey"
        },
        {
          "key": "Kimberly Mcdaniel",
          "type": "text",
          "value": "Men,Women"
        },
        {
          "key": "Monica Hampton",
          "type": "text",
          "value": "Neoprene"
        },
        {
          "key": "John Mendoza",
          "type": "text",
          "value": "100 g"
        }
      ]
    }
  ],
  "medias": [
    {
      "type": "image",
      "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/1309_LGLAPTOPSLEEVE5/1_1564735832806.jpg"
    }
  ],
  "brand": {
    "name": "Barry, Jennings and Larson",
    "uid": 1,
    "logo": {
      "type": "image",
      "url": "https://hdn-1.fynd.com/media/logo/brand/original/12391_0d956c6c71a4427895c15e44cba82f88.jpg"
    },
    "action": {
      "page": {
        "type": "products",
        "query": {
          "brand": [
            "Hess-Inc"
          ]
        }
      },
      "type": "page"
    },
    "_custom_json": {}
  },
  "uid": 1,
  "slug": "benchmark-collaborative-paradigms",
  "attributes": {
    "color_hex": "808080",
    "weight": 100,
    "product_type": "LaptopBags",
    "gender": [
      "Men",
      "Women"
    ],
    "material": "Neoprene",
    "style_note": "Shape up your overall appeal with this stunning laptop bag. The amazing storage and great design will let you carry your laptop in style!",
    "item_code": "LGLAPTOPSLEEVE5",
    "occasion": "Casual",
    "primary_color": "Grey",
    "primary_material": "Others",
    "variant": "LGLAPTOPSLEEVE5",
    "color": "DarkGrey",
    "product_details": "This is a Unisex Product.",
    "primary_color_hex": "808080",
    "brand": "Barry, Jennings and Larson"
  },
  "name": "benchmark collaborative paradigms",
  "has_variant": true,
  "categories": [
    {
      "id": 3,
      "uid": 3,
      "name": "Amy Kim DDS",
      "logo": {
        "type": "image",
        "url": "https://hdn-1.fynd.com/media/banner_portrait/brand/original/540_ecba3a1af141467da8abc20500f983db.jpg"
      },
      "action": {
        "page": {
          "type": "category",
          "query": {
            "category": [
              "Amy-Kim-DDS"
            ]
          }
        },
        "type": "page"
      },
      "_custom_json": {}
    }
  ],
  "tryouts": [],
  "rating": 2.7,
  "rating_count": 2,
  "image_nature": "standard",
  "tags": [
    "Digital"
  ],
  "teaser_tag": {},
  "no_of_boxes": 1,
  "product_online_date": "2021-02-03T07:22:29Z",
  "custom_order": {},
  "color": "808080",
  "similars": [
    "brand"
  ]
}
```
</details>









---


### getProductExportJobs
Allows you to list all product templates export list details



```javascript
// Promise
const promise = client.catalog.getProductExportJobs({  status : value,
 fromDate : value,
 toDate : value,
 q : value });

// Async/Await
const data = await client.catalog.getProductExportJobs({  status : value,
 fromDate : value,
 toDate : value,
 q : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| status | string | no | This is a parameter used to find all the jobs with the specified status. |    
| fromDate | string | no | This is a parameter used to find the job from the date specified to the current date. |    
| toDate | string | no | This is a parameter used to find the job from the from_date specified to the to_date. |    
| q | string | no | It is a query parameter to search the export job with the task ID. |  



Can view details including trigger data, task id , etc.

*Returned Response:*




[ProductDownloadsResponse](#ProductDownloadsResponse)

List of Product Downloads Data. See example below or refer `ProductDownloadsResponse` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "page": {},
  "items": [
    {
      "created_by": {
        "username": "917972410891_48194",
        "user_id": "5646"
      },
      "data": {
        "type": "csv",
        "brand": [
          "ruosh"
        ],
        "templates": [
          "mobile-phones-and-tablet"
        ]
      },
      "status": "success",
      "task_id": "c4b54ace-44ef-11eb-9806-1ef9bc4a2da1",
      "template_tags": {
        "mobile-phones-and-tablet": {
          "display": "Mobile Phones & Tablet",
          "logo": "https://hdn-1.jiox0.de/jiox0/seller/pictures/logo/original/Oda39B_99946594-portable-devices-with-tablet-and-mobile-phone-vector-icon-for-apps-and-websites.jpgcc2dff44-7fae-4002-9ebe-d2b59c8bee91/Oda39B_99946594-portable-devices-with-tablet-and-mobile-phone-vector-icon-for-apps-and-websites.jpg"
        }
      },
      "trigger_on": "2020-12-23T07:23:35.302000Z",
      "seller_id": 3,
      "completed_on": "2020-12-23T07:23:41.031000Z",
      "url": "https://regrowth.s3.amazonaws.com/slingshot-catalogues/seller-catalog/3/c4b54ace-44ef-11eb-9806-1ef9bc4a2da1/c4b54ace-44ef-11eb-9806-1ef9bc4a2da1.zip",
      "id": "5fe2f077516d980001880943"
    }
  ]
}
```
</details>









---


### getProductSize
Get a single product size.



```javascript
// Promise
const promise = client.catalog.getProductSize({  itemId : value,
 itemCode : value,
 brandUid : value,
 uid : value });

// Async/Await
const data = await client.catalog.getProductSize({  itemId : value,
 itemCode : value,
 brandUid : value,
 uid : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| itemCode | string | no | Item code of the product size. |   
| itemId | number | yes | Item Id of the product size. |    
| brandUid | number | no | Brand Id of the product size. |    
| uid | number | no | Id of the product size. |  



This API helps to get data associated to a particular product size.

*Returned Response:*




[ProductListingResponse](#ProductListingResponse)

Product object. See example below for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "name": "SQUADMTGIVESPACE",
  "country_of_origin": "India",
  "highlights": null,
  "hsn_code": "61099090",
  "item_code": "ACTESTCREATELISTING1",
  "is_set": false,
  "description": "",
  "currency": "INR",
  "slug": "play-clan-squadmtgivespace-857587-e928b0",
  "template_tag": "topwear",
  "is_active": false,
  "departments": [
    1
  ],
  "uid": 857587,
  "all_sizes": [
    "3XL"
  ],
  "category_slug": "t-shirts",
  "company_id": 61,
  "media": [],
  "size_guide": "play-clan-men-casual-tees",
  "is_dependent": false,
  "item_type": "standard",
  "multi_size": true,
  "product_publish": {
    "is_set": false,
    "product_online_date": 1595478043
  },
  "id": "5f19101b99ee0500011dc896",
  "brand": {
    "name": "play clan",
    "logo": {
      "aspect_ratio": "1:1",
      "aspect_ratio_f": 1,
      "url": "https://hdn-1.fynd.com/brands/pictures/square-logo/50x0/zjt4-wU8Lk-VQYu0pcokb-r6yteuannoorjkq9f4tk.jpg",
      "secure_url": "https://hdn-1.fynd.com/brands/pictures/square-logo/50x0/zjt4-wU8Lk-VQYu0pcokb-r6yteuannoorjkq9f4tk.jpg"
    },
    "uid": 85
  },
  "images": [],
  "sizes": [
    {
      "price_transfer": 0,
      "price_effective": 10000,
      "price": 10000,
      "currency": "INR",
      "is_set": false,
      "size": "3XL",
      "identifiers": [
        {
          "gtin_type": "sku_code",
          "gtin_value": "ACTESTCREATELISTING1_3XL",
          "primary": true
        }
      ]
    }
  ],
  "attributes": {
    "essential": "Yes",
    "color": "Red",
    "gender": [
      "Men"
    ],
    "material": "cotton",
    "pattern": "Printed",
    "product_fit": "Regular",
    "sleeve_length": "Short",
    "neck_type": "Round Neck",
    "primary_color": "Red",
    "primary_material": "Others",
    "l3_mapping": [
      "men>casual_tees",
      "women>casual_tees",
      "girls>casual_tees",
      "more>casual_tees"
    ],
    "image_nature": "standard",
    "meta_nature": "standard",
    "created_on": "2020-07-23T04:20:43.810000Z",
    "created_by": {
      "username": "silverbolt",
      "user_id": "-1",
      "company_id": 1181
    },
    "modified_on": "2020-07-23T04:20:44.185000Z",
    "modified_by": {
      "username": "silverbolt",
      "user_id": "-1",
      "company_id": 61
    },
    "stage": "verified",
    "verified_by": {
      "username": "Silverbolt",
      "user_id": "0"
    },
    "verified_on": 1595478044,
    "is_image_less_product": false
  }
}
```
</details>









---


### getProductTags
Get a list of all tags associated with company.



```javascript
// Promise
const promise = client.catalog.getProductTags();

// Async/Await
const data = await client.catalog.getProductTags();
```






This API helps to get tags data associated to a particular company.

*Returned Response:*




[ProductTagsViewResponse](#ProductTagsViewResponse)

Tag List. See example below for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "items": [
    "demo",
    "custom"
  ]
}
```
</details>









---


### getProductValidation
Validate product/size data



```javascript
// Promise
const promise = client.catalog.getProductValidation();

// Async/Await
const data = await client.catalog.getProductValidation();
```






This API validates product data.

*Returned Response:*




[ValidateProduct](#ValidateProduct)

Validate Meta. See example below for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "valid": true
}
```
</details>









---


### getProducts
Get product list



```javascript
// Promise
const promise = client.catalog.getProducts({  brandIds : value,
 categoryIds : value,
 itemIds : value,
 departmentIds : value,
 itemCode : value,
 q : value,
 tags : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await client.catalog.getProducts({  brandIds : value,
 categoryIds : value,
 itemIds : value,
 departmentIds : value,
 itemCode : value,
 q : value,
 tags : value,
 pageNo : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| brandIds | Array<number> | no | Get multiple products filtered by Brand Ids |    
| categoryIds | Array<number> | no | Get multiple products filtered by Category Ids |    
| itemIds | Array<number> | no | Get multiple products filtered by Item Ids |    
| departmentIds | Array<number> | no | Get multiple products filtered by Department Ids |    
| itemCode | Array<string> | no | Get multiple products filtered by Item Code |    
| q | string | no | Get multiple products filtered by q string |    
| tags | Array<string> | no | Get multiple products filtered by tags |    
| pageNo | number | no | The page number to navigate through the given set of results |    
| pageSize | number | no | Number of items to retrieve in each page. Default is 10. |  



This API gets meta associated to products.

*Returned Response:*




[ProductListingResponseV2](#ProductListingResponseV2)

Product Meta. See example below for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "items": [
    {
      "name": "TV Set",
      "description": "Tv",
      "country_of_origin": "India",
      "currency": "INR",
      "short_description": "",
      "is_set": true,
      "item_code": "TVSET111",
      "brand_uid": 1,
      "template_tag": "television",
      "highlights": [
        "42 Inch"
      ],
      "slug": "tv-set",
      "_custom_json": {},
      "l3_mapping": [
        "electronics>qled_television"
      ],
      "image_nature": "standard",
      "departments": [
        1
      ],
      "created_on": 1599024995,
      "created_by": {
        "username": "919049753052_37528",
        "user_id": "5"
      },
      "modified_on": 1627642010,
      "modified_by": {
        "username": "xxxxxxxxxx",
        "user_id": "xxxxxxxxxxx"
      },
      "stage": "verified",
      "uid": 7501547,
      "verified_by": {
        "username": "Silverbolt",
        "user_id": "0"
      },
      "verified_on": "2020-07-23T04:20:43.810000Z",
      "all_sizes": [
        {
          "item_code": "TVSET111",
          "brand_uid": 1,
          "seller_identifier": "HGS272727272",
          "identifiers": [
            {
              "gtin_type": "ean",
              "gtin_value": "HGS272727272",
              "primary": true
            }
          ],
          "company_id": 1,
          "size": "XXLX23, MX11, LX67, XLX45 (146 PCS)",
          "marked_price": 35000
        }
      ],
      "category_slug": "qled-television",
      "is_image_less_product": false,
      "media": [
        {
          "url": "https://hdn-1.addsale.com/x0/products/pictures/item/free/135x0/dcizgsG_Y-Tv-Set.png",
          "type": "image"
        }
      ],
      "variants": {},
      "product_publish": {
        "is_set": false,
        "product_online_date": 1626965521
      },
      "is_dependent": false,
      "is_physical": true,
      "item_type": "set",
      "category_uid": 1,
      "custom_order": {
        "manufacturing_time": 2,
        "is_custom_order": true,
        "manufacturing_time_unit": "days"
      },
      "multi_size": true,
      "no_of_boxes": 1,
      "product_group_tag": [],
      "size_guide": "slim-fit-shirts-for-men",
      "tags": [],
      "teaser_tag": {},
      "synonyms": [],
      "hsn_code": "11111111",
      "return_config": {
        "unit": "days",
        "returnable": false,
        "time": 0
      },
      "all_company_ids": [
        1
      ],
      "all_identifiers": [
        "19WE100"
      ],
      "trader": {
        "address": "sdfdsfsdf",
        "name": "asdasd"
      },
      "trader_type": "Packer",
      "verification_status": "pending",
      "sizes": [
        {
          "size": "FGX33, GHX33 (66 PCS)",
          "store_count": 1
        },
        {
          "size": "XSE WE23X100 (100 PCS)",
          "store_count": 2
        },
        {
          "size": "XSEX100 (100 PCS)",
          "store_count": 3
        },
        {
          "size": "XXLX23, MX11, LX67, XLX45 (146 PCS)",
          "store_count": 3
        }
      ],
      "id": "5f4f2f6371a5970001f13655",
      "brand": {
        "name": "Apple",
        "logo": {
          "aspect_ratio": "1:1",
          "aspect_ratio_f": 1,
          "url": "https://hdn-1.jiox0.de/jioecomm/seller/pictures/logo/50x0/apple-7f951c/logo_apple.png",
          "secure_url": "https://hdn-1.jiox0.de/jioecomm/seller/pictures/logo/50x0/apple-7f951c/logo_apple.png"
        },
        "uid": 13
      },
      "images": [
        {
          "aspect_ratio": "16:25",
          "aspect_ratio_f": 0.64,
          "url": "https://hdn-1.addsale.com/x0/products/pictures/item/free/135x0/dcizgsG_Y-Tv-Set.png",
          "secure_url": "https://hdn-1.addsale.com/x0/products/pictures/item/free/135x0/dcizgsG_Y-Tv-Set.png"
        }
      ],
      "price": {
        "marked": {
          "min": 35000,
          "max": 35000
        },
        "effective": {
          "min": 25000,
          "max": 25000
        }
      }
    }
  ],
  "page": {
    "type": "number",
    "current": 1,
    "size": 1,
    "item_total": 1,
    "has_previous": false,
    "has_next": false
  }
}
```
</details>









---


### getQueryFilters
Get query filters to configure a collection



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").catalog.getQueryFilters();

// Async/Await
const data = await client.application("<APPLICATION_ID>").catalog.getQueryFilters();
```






Get query filters to configure a collection

*Returned Response:*




[GetCollectionQueryOptionResponse](#GetCollectionQueryOptionResponse)

The attached items of an collection. See example below or refer `GetCollectionQueryOptionResponse` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "filters": [
    {
      "key": {
        "display": "Department",
        "name": "department",
        "kind": "multivalued",
        "logo": "https://hdn-1.fynd.com/global/menu-icons/Department.png"
      },
      "values": [
        {
          "display": "Men's Fashion",
          "count": 2113,
          "is_selected": false,
          "value": "men",
          "logo": {
            "type": "image",
            "url": "https://hdn-1.fynd.com/media/category_tab_icons/department/Men.png"
          }
        }
      ]
    },
    {
      "key": {
        "display": "Category",
        "name": "category",
        "kind": "multivalued",
        "logo": "https://hdn-1.fynd.com/global/menu-icons/Category.png"
      },
      "values": [
        {
          "display": "T-Shirts",
          "count": 968,
          "is_selected": false,
          "value": "192",
          "logo": "https://hdn-1.fynd.com/media/logo/category/original/15442_57fdc97abfd248aaaf8841f097a4ed67.jpg"
        }
      ]
    },
    {
      "key": {
        "display": "Size",
        "name": "sizes",
        "kind": "multivalued",
        "logo": "https://hdn-1.fynd.com/global/menu-icons/Sizes.png"
      },
      "values": [
        {
          "display": "S",
          "count": 1438,
          "is_selected": false,
          "value": "S"
        }
      ]
    },
    {
      "key": {
        "display": "Brand",
        "name": "brand",
        "kind": "multivalued",
        "logo": "https://hdn-1.fynd.com/global/menu-icons/Brand%20ID.png"
      },
      "values": [
        {
          "display": "Superdry",
          "count": 4263,
          "is_selected": false,
          "value": "235",
          "logo": "https://hdn-1.fynd.com/media/logo/brand/original/1008_238113b8e11448f792e9bf860aac30f2.jpg"
        }
      ]
    },
    {
      "key": {
        "display": "Rating",
        "name": "rating",
        "kind": "multivalued",
        "logo": "https://hdn-1.fynd.com/global/menu-icons/Rating.png"
      },
      "values": [
        {
          "count": 3,
          "display": "5 ★",
          "value": "[4 TO *}",
          "is_selected": false
        }
      ]
    },
    {
      "key": {
        "display": "Company",
        "name": "company_id_list",
        "kind": "multivalued",
        "logo": "https://hdn-1.fynd.com/global/menu-icons/Store%20ID%20List.png"
      },
      "values": [
        {
          "display": "RELIANCE BRANDS LIMITED",
          "count": 4262,
          "is_selected": false,
          "value": "46"
        }
      ]
    },
    {
      "key": {
        "display": "Store Ids",
        "name": "store_id_list",
        "kind": "multivalued",
        "logo": "https://hdn-1.fynd.com/global/menu-icons/Store%20ID%20List.png"
      },
      "values": [
        {
          "display": "PHOENIX, ,PALLADIUM,  LOWER PAREL - 5410",
          "count": 1385,
          "is_selected": false,
          "value": "2201"
        }
      ]
    },
    {
      "key": {
        "display": "Image",
        "name": "image_nature",
        "kind": "multivalued",
        "logo": "https://hdn-1.fynd.com/global/menu-icons/image%20Nature.png"
      },
      "values": [
        {
          "display": "Good Quality",
          "count": 3111,
          "is_selected": false,
          "value": "standard"
        },
        {
          "display": "No Image",
          "count": 1152,
          "is_selected": false,
          "value": "default"
        }
      ]
    },
    {
      "key": {
        "display": "Set",
        "name": "is_set",
        "kind": "multivalued",
        "logo": ""
      },
      "values": [
        {
          "display": "No",
          "count": 4263,
          "is_selected": false,
          "value": false
        }
      ]
    },
    {
      "key": {
        "display": "Product Fit",
        "name": "product_fit",
        "kind": "multivalued",
        "logo": ""
      },
      "values": [
        {
          "display": "Regular",
          "count": 14,
          "is_selected": false,
          "value": "Regular"
        }
      ]
    },
    {
      "key": {
        "display": "Primary Material",
        "name": "primary_material",
        "kind": "multivalued",
        "logo": ""
      },
      "values": [
        {
          "display": "Cotton",
          "count": 1246,
          "is_selected": false,
          "value": "Cotton"
        }
      ]
    },
    {
      "key": {
        "display": "Gender",
        "name": "gender",
        "kind": "multivalued",
        "logo": ""
      },
      "values": [
        {
          "display": "Men",
          "count": 2125,
          "is_selected": false,
          "value": "Men"
        },
        {
          "display": "Women",
          "count": 1492,
          "is_selected": false,
          "value": "Women"
        }
      ]
    },
    {
      "key": {
        "display": "Primary Colour",
        "name": "primary_color",
        "kind": "multivalued",
        "logo": ""
      },
      "values": [
        {
          "display": "Multi",
          "count": 1403,
          "is_selected": false,
          "value": "Multi"
        }
      ]
    },
    {
      "key": {
        "display": "Size Depth",
        "name": "size_depth",
        "kind": "range",
        "logo": "https://hdn-1.fynd.com/global/menu-icons/Size%20Depth.png"
      },
      "values": [
        {
          "count": 4263,
          "min": 0,
          "max": 9,
          "is_selected": false,
          "selected_min": 0,
          "selected_max": 9,
          "query_format": "[{} TO {}]",
          "display_format": "{} - {}",
          "display": "0 - 9"
        }
      ]
    },
    {
      "key": {
        "display": "Price",
        "name": "min_price_effective",
        "kind": "range",
        "logo": "https://hdn-1.fynd.com/global/menu-icons/Min%20price%20effective.png"
      },
      "values": [
        {
          "count": 4263,
          "min": 398,
          "max": 24999,
          "is_selected": false,
          "selected_min": 398.8,
          "selected_max": 24998.77,
          "currency_code": "INR",
          "currency_symbol": "₹",
          "query_format": "[{},INR TO {},INR]"
        }
      ]
    },
    {
      "key": {
        "display": "Discount",
        "name": "platform_discount",
        "kind": "range",
        "logo": "https://hdn-1.fynd.com/global/menu-icons/Platform%20Discount.png"
      },
      "values": [
        {
          "count": 4263,
          "min": 0,
          "max": 50,
          "is_selected": false,
          "selected_min": 0,
          "selected_max": 50,
          "query_format": "[{} TO {}]",
          "display_format": "{} - {}",
          "display": "0 - 50"
        }
      ]
    }
  ],
  "sort_on": [
    {
      "display": "Latest Products",
      "name": "Latest Products",
      "logo": "https://hdn-1.fynd.com/global/menu-icons/Latest%20Products.png",
      "value": "latest",
      "is_selected": true
    },
    {
      "display": "Popularity",
      "name": "Popularity",
      "logo": "https://hdn-1.fynd.com/global/menu-icons/Popularity.png",
      "value": "popular",
      "is_selected": false
    },
    {
      "display": "Price Low to High",
      "name": "Price Low to High",
      "logo": "https://hdn-1.fynd.com/global/menu-icons/Price%20High%20to%20Low.png",
      "value": "price_asc",
      "is_selected": false
    },
    {
      "display": "Price High to Low",
      "name": "Price High to Low",
      "logo": "https://hdn-1.fynd.com/global/menu-icons/Price%20High%20to%20Low.png",
      "value": "price_dsc",
      "is_selected": false
    },
    {
      "display": "Discount Low to High",
      "name": "Discount Low to High",
      "logo": "https://hdn-1.fynd.com/global/menu-icons/Discount%20Low%20to%20High.png",
      "value": "discount_asc",
      "is_selected": false
    },
    {
      "display": "Discount High to Low",
      "name": "Discount High to Low",
      "logo": "https://hdn-1.fynd.com/global/menu-icons/Discount%20Low%20to%20High.png",
      "value": "discount_dsc",
      "is_selected": false
    },
    {
      "display": "Rating",
      "name": "Rating",
      "logo": "https://hdn-1.fynd.com/global/menu-icons/Rating.png",
      "value": "rating_dsc",
      "is_selected": false
    },
    {
      "display": "Size Depth (High to Low)",
      "name": "Size Depth (High to Low)",
      "logo": "https://hdn-1.fynd.com/global/menu-icons/Size%20Depth.png",
      "value": "depth_desc",
      "is_selected": false
    }
  ]
}
```
</details>









---


### getSearchKeywords
Get a Search Keywords Details



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").catalog.getSearchKeywords({  id : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").catalog.getSearchKeywords({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to retrieve. |  



Get the details of a words by its `id`. If successful, returns a Collection resource in the response body specified in `GetSearchWordsDetailResponseSchema`

*Returned Response:*




[GetSearchWordsDetailResponse](#GetSearchWordsDetailResponse)

The Collection object. See example below or refer `GetSearchWordsDetailResponseSchema` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "uid": "602fa1e9a596ce349563f6b9",
  "words": [
    "sds"
  ],
  "app_id": "000000000000000000000001",
  "is_active": true,
  "result": {
    "query": {
      "department": [
        "men"
      ]
    },
    "sort_on": "popular"
  },
  "_custom_json": {}
}
```
</details>









---


### getSellerInsights
Analytics data of catalog and inventory that are being cross-selled.



```javascript
// Promise
const promise = client.catalog.getSellerInsights({  sellerAppId : value });

// Async/Await
const data = await client.catalog.getSellerInsights({  sellerAppId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| sellerAppId | string | yes | Id of the seller application which is serving the invetory/catalog of the company |  



Analytics data of catalog and inventory that are being cross-selled.

*Returned Response:*




[CrossSellingResponse](#CrossSellingResponse)

Response Data




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "products": 18,
  "articles": 18
}
```
</details>









---


### getSingleProductHSNCode
Hsn Code List.



```javascript
// Promise
const promise = client.catalog.getSingleProductHSNCode({  reportingHsn : value });

// Async/Await
const data = await client.catalog.getSingleProductHSNCode({  reportingHsn : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| reportingHsn | string | yes | reporting_hsn |  



Hsn Code List.

*Returned Response:*




[HSNDataInsertV2](#HSNDataInsertV2)

Get specific HSN details. See example below or refer `HsnCodesListingResponseSchema` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "description": "Data for HSN Code",
  "created_on": "2022-02-24T09:14:03Z",
  "created_by": {
    "username": "silverbolt",
    "user_id": -1
  },
  "modified_on": "2022-02-24T09:14:03Z",
  "reporting_hsn": "89787179H29",
  "modified_by": {
    "username": "silverbolt",
    "user_id": -1
  },
  "country_code": "IN",
  "taxes": [
    {
      "effective_date": "2022-02-11T15:00:00",
      "rate": 5,
      "threshold": 10000,
      "cess": 23
    },
    {
      "effective_date": "2022-02-11T15:00:00",
      "rate": 12,
      "threshold": 12000
    },
    {
      "effective_date": "2022-02-12T15:00:00",
      "rate": 18,
      "threshold": 5000
    }
  ],
  "type": "goods",
  "hsn_code": "89787179",
  "id": "6216ff0378da3f906fc82544"
}
```
</details>









---


### getSizeGuide
Get a single size guide.



```javascript
// Promise
const promise = client.catalog.getSizeGuide({  id : value });

// Async/Await
const data = await client.catalog.getSizeGuide({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | Id of the size guide to be viewed. |  



This API helps to get data associated to a size guide.

*Returned Response:*




[SizeGuideResponse](#SizeGuideResponse)

Brand object. See example below or refer `SizeGuideResponseSchema` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "active": true,
  "brand_id": 1,
  "created_on": "2021-02-24T17:46:04.146000Z",
  "modified_on": "2021-02-25T15:19:30.822000Z",
  "created_by": {
    "username": "silverbolt",
    "user_id": "-1"
  },
  "modified_by": {
    "username": "917827311650_22960",
    "user_id": "123"
  },
  "name": "edited size guide",
  "company_id": 1,
  "guide": {
    "meta": {
      "headers": {
        "col_1": {
          "value": "Head",
          "convertable": false
        },
        "col_2": {
          "value": "Shoulder",
          "convertable": true
        }
      },
      "values": [
        {
          "col_1": "10",
          "col_2": "20"
        },
        {
          "col_1": "12",
          "col_2": "22"
        },
        {
          "col_1": "14",
          "col_2": "24"
        }
      ],
      "unit": "cm"
    }
  },
  "tag": "demo",
  "title": "Demo SG",
  "subtitle": "I am demo",
  "id": "60364384f08385bee776f83d"
}
```
</details>









---


### getSizeGuides
Get list of size guides



```javascript
// Promise
const promise = client.catalog.getSizeGuides({  active : value,
 q : value,
 tag : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await client.catalog.getSizeGuides({  active : value,
 q : value,
 tag : value,
 pageNo : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| active | boolean | no | filter size guide on basis of active, in-active |    
| q | string | no | Query that is to be searched. |    
| tag | string | no | to filter size guide on basis of tag. |    
| pageNo | number | no | The page number to navigate through the given set of results |    
| pageSize | number | no | Number of items to retrieve in each page. Default is 10. |  



This API allows to view all the size guides associated to the seller.

*Returned Response:*




[ListSizeGuide](#ListSizeGuide)

Size guide object. See example below or refer `ListSizeGuide` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "items": [
    {
      "modified_by": {
        "username": "silverbolt",
        "user_id": "-1"
      },
      "active": true,
      "id": "60364384f08385bee776f83d",
      "title": "Demo SG",
      "modified_on": "2021-02-24T17:46:04.146000Z",
      "brand_id": 2,
      "created_by": {
        "username": "silverbolt",
        "user_id": "-1"
      },
      "subtitle": "I am demo",
      "company_id": 12,
      "created_on": "2021-02-24T17:46:04.146000Z",
      "guide": {
        "meta": {
          "values": [
            {
              "col_1": "10",
              "col_2": "20"
            },
            {
              "col_1": "12",
              "col_2": "22"
            },
            {
              "col_1": "14",
              "col_2": "24"
            }
          ],
          "unit": "cm",
          "headers": {
            "col_1": {
              "value": "Head",
              "convertable": false
            },
            "col_2": {
              "value": "Shoulder",
              "convertable": true
            }
          }
        }
      },
      "tag": "demo",
      "name": "Demo"
    }
  ],
  "page": {
    "current": 1,
    "size": 1,
    "has_previous": false,
    "has_next": false,
    "item_count": 1
  }
}
```
</details>









---


### getStoreDetail
Get the Store details.



```javascript
// Promise
const promise = client.catalog.getStoreDetail({  q : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await client.catalog.getStoreDetail({  q : value,
 pageNo : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| q | string | no | The search related the store for the company id. |    
| pageNo | number | no | The number of page for the company id. |    
| pageSize | number | no | Number of records that can be seen on the page for the company id. |  



Get the details of the store associated with the company ID passed.

*Returned Response:*




[OptinStoreDetails](#OptinStoreDetails)

See example below or refer `OptinStoreDetailsSchema` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getVariantsOfProducts
Get product list



```javascript
// Promise
const promise = client.catalog.getVariantsOfProducts({  itemId : value,
 variantType : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await client.catalog.getVariantsOfProducts({  itemId : value,
 variantType : value,
 pageNo : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| itemId | number | yes | Get list of variants of item Id |   
| variantType | string | yes | Get multiple products filtered by variant type |    
| pageNo | number | no | The page number to navigate through the given set of results |    
| pageSize | number | no | Number of items to retrieve in each page. Default is 10. |  



This API gets meta associated to products.

*Returned Response:*




[ProductVariantsResponse](#ProductVariantsResponse)

Product Meta. See example below for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "variants": [
    {
      "slug": "test-msa-6",
      "item_code": "TEST-MSA-6",
      "brand_uid": 401,
      "media": [
        {
          "type": "image",
          "url": "https://hdn-1.jiox0.de/jiox0/products/pictures/item/free/original/7cGLXZLpO-iN3Jd9uro-Wiv-7J9qC-product.png"
        }
      ],
      "name": "test-msa-6",
      "category_uid": 3938,
      "uid": 7526471
    }
  ],
  "page": {
    "type": "number",
    "current": 1,
    "size": 1,
    "item_total": 1,
    "has_previous": false,
    "has_next": false
  }
}
```
</details>









---


### listCategories
Get product categories list



```javascript
// Promise
const promise = client.catalog.listCategories({  level : value,
 departments : value,
 q : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await client.catalog.listCategories({  level : value,
 departments : value,
 q : value,
 pageNo : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| level | string | no | Get category for multiple levels |    
| departments | string | no | Get category for multiple departments filtered |    
| q | string | no | Get multiple categories filtered by search string |    
| pageNo | number | no | The page number to navigate through the given set of results |    
| pageSize | number | no | Number of items to retrieve in each page. Default is 10. |  



This API gets meta associated to product categories.

*Returned Response:*




[CategoryResponse](#CategoryResponse)

Category Meta. See example below or refer `CategoryResponse` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "page": {
    "current": 1,
    "size": 58,
    "has_previous": false,
    "has_next": true,
    "item_total": 574
  },
  "items": [
    {
      "name": "Air Conditioners",
      "media": {
        "logo": "https://hdn-1.addsale.com/x0/category/pictures/square-logo/original/zTgh1zslj-.png",
        "portrait": "https://hdn-1.addsale.com/x0/category/pictures/portrait-banner/original/VKqwRngFh-.png",
        "landscape": "https://hdn-1.addsale.com/x0/category/pictures/landscape-banner/original/_7GDi3tyi-.png"
      },
      "marketplaces": {},
      "tryouts": [],
      "is_active": true,
      "created_by": {
        "username": "917972410891_48194",
        "user_id": "5646"
      },
      "uid": 22330,
      "slug": "air-conditioners",
      "priority": 1,
      "synonyms": [],
      "modified_by": {
        "username": "917972410891_48194",
        "user_id": "5646"
      },
      "level": 3,
      "hierarchy": [
        {
          "l1": 1,
          "department": 1,
          "l2": 22329
        }
      ],
      "created_on": "2021-04-02T15:43:59.410000Z",
      "departments": [
        1
      ],
      "modified_on": "2021-04-02T15:43:59.410000Z",
      "id": "60673bbf7896da00017885ad"
    },
    {
      "name": "Home Appliances",
      "media": {
        "logo": "https://hdn-1.addsale.com/x0/category/pictures/square-logo/original/zTgh1zslj-.png",
        "portrait": "https://hdn-1.addsale.com/x0/category/pictures/portrait-banner/original/VKqwRngFh-.png",
        "landscape": "https://hdn-1.addsale.com/x0/category/pictures/landscape-banner/original/_7GDi3tyi-.png"
      },
      "is_active": true,
      "created_by": {
        "username": "917972410891_48194",
        "user_id": "5646"
      },
      "uid": 22329,
      "slug": "home-appliances",
      "priority": 1,
      "synonyms": [],
      "modified_by": {
        "username": "917972410891_48194",
        "user_id": "5646"
      },
      "level": 2,
      "hierarchy": [],
      "created_on": "2021-04-02T15:42:55.405000Z",
      "departments": [
        1
      ],
      "modified_on": "2021-04-02T15:42:55.405000Z",
      "id": "60673b7f7896da00017885ac"
    },
    {
      "created_by": {
        "username": "919821012599_75351",
        "user_id": "5721"
      },
      "slug": "dummy-category-level-2",
      "level": 2,
      "uid": 22323,
      "is_active": true,
      "media": {
        "portrait": "https://hdn-1.addsale.com/x0/category/pictures/portrait-banner/original/VKqwRngFh-.png",
        "landscape": "https://hdn-1.addsale.com/x0/category/pictures/landscape-banner/original/0wCdjxWpI-.png",
        "logo": "https://hdn-1.addsale.com/x0/category/pictures/square-logo/original/zTgh1zslj-.png"
      },
      "name": "Dummy category level 2 by fahim",
      "modified_on": "2021-03-04T15:43:50.495000Z",
      "modified_by": {
        "username": "917753852478_51632",
        "user_id": "5677"
      },
      "synonyms": [
        "skin",
        "care",
        "asdasd"
      ],
      "created_on": "2021-01-14T05:28:02.148000Z",
      "priority": 123456,
      "hierarchy": [],
      "departments": [
        21
      ],
      "id": "5fffd662e64eb40001fc8a42"
    },
    {
      "synonyms": [],
      "marketplaces": {},
      "created_on": "2021-02-25T00:00:47.589000Z",
      "modified_by": {
        "username": "917753852478_51632",
        "user_id": "5677"
      },
      "media": {
        "landscape": "https://hdn-1.addsale.com/x0/category/pictures/landscape-banner/original/0wCdjxWpI-.png",
        "logo": "https://hdn-1.addsale.com/x0/category/pictures/square-logo/original/EfCt9iXx8-http/d3p8ifzkmzds37.cloudfront.net/media/logo/department/original/15870_c287d3c2431a432bb0e49363ef6b82bc.png.jpeg",
        "portrait": "https://hdn-1.addsale.com/x0/category/pictures/portrait-banner/original/S1axCMOJ4-.png"
      },
      "modified_on": "2021-03-04T15:39:52.108000Z",
      "hierarchy": [
        {
          "l2": 22323,
          "l1": 22322,
          "department": 21
        }
      ],
      "name": "Dummy level 4",
      "is_active": true,
      "slug": "dummy-level-4",
      "departments": [
        21
      ],
      "level": 3,
      "tryouts": [],
      "uid": 22325,
      "priority": 986532,
      "created_by": {
        "username": "silverbolt",
        "user_id": "-1"
      },
      "id": "60369b57d23031d14be92c18"
    },
    {
      "created_by": {
        "username": "919821012599_75351",
        "user_id": "5721"
      },
      "slug": "dummy-level-3",
      "level": 3,
      "uid": 22324,
      "is_active": true,
      "media": {
        "landscape": "https://hdn-1.addsale.com/x0/category/pictures/landscape-banner/original/0wCdjxWpI-.png",
        "logo": "https://hdn-1.addsale.com/x0/category/pictures/square-logo/original/EfCt9iXx8-http/d3p8ifzkmzds37.cloudfront.net/media/logo/department/original/15870_c287d3c2431a432bb0e49363ef6b82bc.png.jpeg",
        "portrait": "https://hdn-1.addsale.com/x0/category/pictures/portrait-banner/original/S1axCMOJ4-.png"
      },
      "name": "Dummy level 3 by fahim",
      "tryouts": [
        "Lipstick",
        "Eyeliner"
      ],
      "modified_on": "2021-03-04T15:39:46.246000Z",
      "modified_by": {
        "username": "917753852478_51632",
        "user_id": "5677"
      },
      "synonyms": [],
      "marketplaces": {},
      "created_on": "2021-01-14T05:28:59.852000Z",
      "priority": 986532,
      "hierarchy": [
        {
          "l2": 22323,
          "l1": 22322,
          "department": 21
        },
        {
          "l2": 3732,
          "l1": 3672,
          "department": 4
        },
        {
          "l2": 730,
          "l1": 595,
          "department": 2
        }
      ],
      "departments": [
        2,
        4,
        21
      ],
      "id": "5fffd69be64eb40001fc8a65"
    },
    {
      "uid": 3151,
      "departments": [
        4
      ],
      "is_active": true,
      "level": 1,
      "media": {
        "logo": "https://hdn-1.addsale.com/x0/seller/pictures/logo/original/YHIeoQ_fruit___vegetable_logo.jpg16aab608-a78a-458f-b60b-524525f27dec/YHIeoQ_fruit___vegetable_logo.jpg",
        "portrait": "https://hdn-1.addsale.com/x0/seller/pictures/logo/original/ywPVrU_preview_a637ca6e4da6e38f03eb0d650ac5d6ba.jpgc73cc22f-b5ee-4fd4-a585-8ada35762d68/ywPVrU_preview_a637ca6e4da6e38f03eb0d650ac5d6ba.jpg",
        "landscape": "https://hdn-1.addsale.com/x0/seller/pictures/logo/original/ywPVrU_preview_a637ca6e4da6e38f03eb0d650ac5d6ba.jpgc73cc22f-b5ee-4fd4-a585-8ada35762d68/ywPVrU_preview_a637ca6e4da6e38f03eb0d650ac5d6ba.jpg"
      },
      "name": "Gourmet & World Food",
      "priority": 123,
      "slug": "gourmet-world-food",
      "synonyms": [
        "gourmet & world food",
        "food",
        "gourmet"
      ],
      "created_on": "2016-04-09T06:44:35Z",
      "hierarchy": [],
      "modified_by": {
        "username": "917753852478_51632",
        "uid": "5677"
      },
      "modified_on": "2021-03-03T09:35:50.415000Z",
      "id": "5fabab8ea18a1284b97ff6c4"
    },
    {
      "modified_by": {
        "username": "917753852478_51632",
        "uid": "5677"
      },
      "marketplaces": {},
      "hierarchy": [
        {
          "l1": 595,
          "l2": 714,
          "department": 2
        },
        {
          "l1": 2,
          "l2": 4,
          "department": 1
        }
      ],
      "created_on": "2021-03-03T06:30:08.342000Z",
      "created_by": {
        "username": "917753852478_51632",
        "uid": "5677"
      },
      "level": 3,
      "name": "Test Category kaf",
      "media": {
        "landscape": "https://hdn-1.addsale.com/x0/category/pictures/landscape-banner/original/0wCdjxWpI-.png",
        "logo": "https://hdn-1.addsale.com/x0/category/pictures/square-logo/original/EfCt9iXx8-http/d3p8ifzkmzds37.cloudfront.net/media/logo/department/original/15870_c287d3c2431a432bb0e49363ef6b82bc.png.jpeg",
        "portrait": "https://hdn-1.addsale.com/x0/category/pictures/portrait-banner/original/VKqwRngFh-.png"
      },
      "tryouts": [
        "Lipstick",
        "Blush"
      ],
      "is_active": true,
      "slug": "test-category-kaf",
      "uid": 22328,
      "synonyms": [
        "test",
        "category"
      ],
      "priority": 23,
      "departments": [
        1,
        2
      ],
      "modified_on": "2021-03-03T08:34:47.999000Z",
      "id": "603f2cf0aac0360001c00731"
    },
    {
      "level": 3,
      "departments": [
        1
      ],
      "is_active": false,
      "created_by": {
        "username": "silverbolt",
        "user_id": "-1"
      },
      "created_on": "2021-02-25T09:26:53.123000Z",
      "tryouts": [],
      "slug": "smart-cell",
      "marketplaces": {},
      "priority": 5,
      "media": {
        "portrait": "http://cdn4.gofynd.com/media/logo/department/original/13239_660c6f5b2b8d458789de4552d241ea1b.jpg",
        "landscape": "https://hdn-1.fynd.com/media/banner/category/original/16128_380bed8bff064a0b981041df65e0d8b3.jpg",
        "logo": "http://d3p8ifzkmzds37.cloudfront.net/media/logo/department/original/15870_c287d3c2431a432bb0e49363ef6b82bc.png"
      },
      "modified_on": "2021-02-25T09:26:53.123000Z",
      "synonyms": [],
      "uid": 22327,
      "hierarchy": [
        {
          "l1": 2,
          "l2": 3,
          "department": 1
        }
      ],
      "name": "Smart Cell",
      "modified_by": {
        "username": "silverbolt",
        "user_id": "-1"
      },
      "id": "60372005d230311fe9e51f0b"
    },
    {
      "is_active": true,
      "hierarchy": [
        {
          "department": 21,
          "l1": 22322,
          "l2": 22323
        }
      ],
      "slug": "dummy-level-98",
      "priority": 986532,
      "uid": 22326,
      "departments": [
        21
      ],
      "created_by": {
        "username": "silverbolt",
        "user_id": "-1"
      },
      "modified_on": "2021-02-25T00:09:35.026000Z",
      "marketplaces": {},
      "tryouts": [],
      "synonyms": [],
      "media": {
        "landscape": "https://hdn-1.addsale.com/x0/category/pictures/landscape-banner/original/0wCdjxWpI-.png",
        "portrait": "https://hdn-1.addsale.com/x0/category/pictures/portrait-banner/original/S1axCMOJ4-.png",
        "logo": "https://hdn-1.addsale.com/x0/category/pictures/square-logo/original/EfCt9iXx8-http/d3p8ifzkmzds37.cloudfront.net/media/logo/department/original/15870_c287d3c2431a432bb0e49363ef6b82bc.png.jpeg"
      },
      "level": 3,
      "name": "Dummy level 98",
      "created_on": "2021-02-25T00:09:35.026000Z",
      "modified_by": {
        "username": "silverbolt",
        "user_id": "-1"
      },
      "id": "60369d67d2303111b8924dcf"
    },
    {
      "uid": 315,
      "created_on": "2016-04-09T06:44:35Z",
      "departments": [
        2,
        3
      ],
      "hierarchy": [
        {
          "l1": 65,
          "l2": 66,
          "department": 2
        },
        {
          "l1": 442,
          "l2": 26,
          "department": 2
        },
        {
          "l1": 442,
          "l2": 26,
          "department": 3
        }
      ],
      "is_active": true,
      "level": 3,
      "marketplaces": {},
      "media": {
        "landscape": "https://hdn-1.fynd.com/media/banner/category/original/19961_f042f1f4a90f4e828b6d77d6dbea264d.jpg",
        "logo": "https://hdn-1.fynd.com/media/logo/category/original/81ef023d375044e9b9daa66b81ec411f.jpg",
        "portrait": "https://hdn-1.fynd.com/media/banner_portrait/category/original/19960_c679d51cb1bd4ca99f00f9050aa647a4.jpg"
      },
      "modified_by": {
        "username": "917753852478_51632",
        "user_id": "5677"
      },
      "modified_on": "2021-02-15T15:48:05.329000Z",
      "name": "Sports Bra",
      "priority": 281,
      "slug": "sports-bra",
      "synonyms": [
        "Sports Bra",
        "activewear bra",
        "gym bra"
      ],
      "tryouts": [],
      "id": "5fdba984642de8d93efb0d71"
    }
  ]
}
```
</details>









---


### listDepartmentsData
List all Departments.



```javascript
// Promise
const promise = client.catalog.listDepartmentsData({  pageNo : value,
 itemType : value,
 pageSize : value,
 name : value,
 search : value,
 isActive : value });

// Async/Await
const data = await client.catalog.listDepartmentsData({  pageNo : value,
 itemType : value,
 pageSize : value,
 name : value,
 search : value,
 isActive : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNo | number | no | The page number to navigate through the given set of results |    
| itemType | string | no | A `item_type` is a type of product eg. set, standard, digital |    
| pageSize | number | no | Number of items to retrieve in each page. Default is 10. |    
| name | string | no | Can search departments by passing name. |    
| search | string | no | Can search departments by passing name of the department in search parameter. |    
| isActive | boolean | no | Can query for departments based on whether they are active or inactive. |  



Allows you to list all departments, also can search using name and filter active and incative departments, and item type.

*Returned Response:*




[DepartmentsResponse](#DepartmentsResponse)

List of departments data. See example below or refer `DepartmentsResponse` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "page": {
    "current": 1,
    "size": 1,
    "has_previous": false,
    "has_next": false,
    "item_total": 12
  },
  "items": [
    {
      "uid": 5,
      "_cls": "Department",
      "_custom_json": {},
      "created_by": {
        "username": "918793638893_86554",
        "user_id": "3"
      },
      "created_on": "2020-07-01T05:33:39.325000Z",
      "is_active": true,
      "logo": "https://hdn-1.addsale.com/x0/seller/pictures/logo/original/BSQ9Gk_123522-best-starry-sky-wallpaper-1920x1200-ipad-pro.jpgc7d0c15c-c1ff-47eb-8423-6e2df51f2ddf/BSQ9Gk_123522-best-starry-sky-wallpaper-1920x1200-ipad-pro.jpg",
      "modified_by": {
        "username": "917753852478_51632",
        "user_id": "5677"
      },
      "modified_on": "2021-03-03T15:55:25.118000Z",
      "name": "Sample Dept",
      "platforms": {},
      "priority_order": 111,
      "slug": "sample-dept",
      "synonyms": [
        "test",
        "sampe"
      ],
      "tags": [],
      "id": "5efc2033623d390001782238"
    },
    {
      "uid": 2,
      "_cls": "Department",
      "_custom_json": {},
      "created_by": {
        "username": "app@fynd.com",
        "user_id": "0"
      },
      "created_on": "2020-05-19T06:53:37.629000Z",
      "is_active": true,
      "logo": "https://hdn-1.addsale.com/addsale/media/logo/department/original/15974_381e2236c2a348cc851c29a5d05c66a9.png",
      "modified_by": {
        "user_id": "10",
        "username": "fahimsakri_gofynd_com_44938"
      },
      "modified_on": "2021-03-04T14:01:02.556000Z",
      "name": "Men's Fashion",
      "platforms": {
        "fynd": true,
        "fynd_store": true,
        "marketplace": true,
        "openapi": true,
        "uniket_store": true,
        "uniket_wholesale": true
      },
      "priority_order": 111,
      "slug": "men-s-fashion",
      "synonyms": [],
      "tags": [],
      "id": "5ec3827156a7200001c9aeea"
    },
    {
      "uid": 4,
      "_cls": "Department",
      "_custom_json": {},
      "created_by": {
        "username": "fahimsakri_gofynd_com_44938",
        "user_id": "10"
      },
      "created_on": "2020-06-29T10:59:33.620000Z",
      "is_active": true,
      "logo": "https://hdn-1.addsale.com/x0/seller/pictures/logo/original/ywPVrU_preview_a637ca6e4da6e38f03eb0d650ac5d6ba.jpgc73cc22f-b5ee-4fd4-a585-8ada35762d68/ywPVrU_preview_a637ca6e4da6e38f03eb0d650ac5d6ba.jpg",
      "modified_by": {
        "username": "918793638893_86554",
        "user_id": "3"
      },
      "modified_on": "2020-08-06T18:08:02.675000Z",
      "name": "Groceries",
      "platforms": {},
      "priority_order": 10,
      "slug": "groceries",
      "synonyms": [],
      "tags": [],
      "id": "5ef9c9959b04f00001e40dba"
    },
    {
      "uid": 1,
      "_cls": "Department",
      "_custom_json": {},
      "created_by": {
        "username": "app@fynd.com",
        "user_id": "0"
      },
      "created_on": "2020-05-18T16:14:41.689000Z",
      "is_active": true,
      "logo": "https://hdn-1.addsale.com/x0/platform/pictures/free-logo/original/_G1Z2Fg1L-http:d3p8ifzkmzds37.cloudfront.netmedialogodepartmentoriginal15870_c287d3c2431a432bb0e49363ef6b82bc.png.png",
      "modified_by": {
        "user_id": "5677",
        "username": "917753852478_51632"
      },
      "modified_on": "2021-03-04T15:39:38.528000Z",
      "name": "Electronics",
      "platforms": {
        "fynd": true,
        "fynd_store": true,
        "marketplace": true,
        "openapi": true,
        "uniket_store": true,
        "uniket_wholesale": true
      },
      "priority_order": 100,
      "slug": "electronics",
      "synonyms": [],
      "tags": [],
      "id": "5ec2b471661a4100019fca0d"
    },
    {
      "uid": 3,
      "_cls": "Department",
      "_custom_json": {},
      "created_by": {
        "username": "918793638893_86554",
        "user_id": "3"
      },
      "created_on": "2020-05-27T12:04:19.111000Z",
      "is_active": true,
      "logo": "https://hdn-1.addsale.com/x0/seller/pictures/landscape-banner/original/g2plam_logo_Jio.pngeeb392ca-3958-46a0-9f13-23c205b596f7/g2plam_logo_Jio.png",
      "modified_by": {
        "username": "918793638893_86554",
        "user_id": "3"
      },
      "modified_on": "2020-08-06T18:07:46.060000Z",
      "name": "Industrial Supplies",
      "platforms": {},
      "priority_order": 111,
      "slug": "industrial-supplies",
      "synonyms": [],
      "tags": [],
      "id": "5ece5743cd1bae0001440427"
    },
    {
      "uid": 6,
      "_cls": "Department",
      "_custom_json": {},
      "created_by": {
        "username": "abhinavsrivastava_gofynd_com_05674",
        "user_id": "13"
      },
      "created_on": "2020-07-06T07:56:01.508000Z",
      "is_active": false,
      "logo": "https://hdn-1.addsale.com/x0/seller/pictures/logo/original/wTcfEi_crysis_-_1.jpg14580947-a659-486d-b2d3-d2ca025b1cac/wTcfEi_crysis_-_1.jpg",
      "modified_by": {
        "username": "918793638893_86554",
        "user_id": "3"
      },
      "modified_on": "2020-08-06T18:08:12.576000Z",
      "name": "Clothing",
      "platforms": {},
      "priority_order": 1,
      "slug": "clothing",
      "synonyms": [],
      "tags": [],
      "id": "5f02d9116b0ae500018923dd"
    },
    {
      "uid": 8,
      "_cls": "Department",
      "_custom_json": {},
      "created_by": {
        "username": "asavarijadhav_gofynd_com_99880",
        "user_id": "5634"
      },
      "created_on": "2020-08-05T09:04:33.604000Z",
      "is_active": true,
      "logo": "https://hdn-1.addsale.com/x0/seller/pictures/logo/original/RxTsd8_0DEFAULT-LOGO.jpg000ccfc1-2f79-4426-9ac3-de2468c2fcb9/RxTsd8_0DEFAULT-LOGO.jpg",
      "modified_by": {
        "username": "asavarijadhav_gofynd_com_99880",
        "user_id": "5634"
      },
      "modified_on": "2020-08-05T09:44:01.234000Z",
      "name": "Kids",
      "platforms": {},
      "priority_order": 3,
      "slug": "kids",
      "synonyms": [],
      "tags": [],
      "id": "5f2a762131c66700018cdc47"
    },
    {
      "uid": 9,
      "_cls": "Department",
      "_custom_json": {},
      "created_by": {
        "username": "asavarijadhav_gofynd_com_99880",
        "user_id": "5634"
      },
      "created_on": "2020-08-05T09:44:46.632000Z",
      "is_active": true,
      "logo": "https://hdn-1.addsale.com/x0/seller/pictures/logo/original/tKkDB8_0DEFAULT-LOGO.jpg1c324d4d-f667-4af8-8d98-37205d34e3b5/tKkDB8_0DEFAULT-LOGO.jpg",
      "modified_by": {
        "username": "918793638893_86554",
        "user_id": "3"
      },
      "modified_on": "2020-08-06T18:07:35.231000Z",
      "name": "Women's Fashion",
      "platforms": {},
      "priority_order": 2,
      "slug": "women-s-fashion",
      "synonyms": [],
      "tags": [],
      "id": "5f2a7f8e31c66700018cdc49"
    },
    {
      "uid": 10,
      "_cls": "Department",
      "_custom_json": {},
      "created_by": {
        "username": "asavarijadhav_gofynd_com_99880",
        "user_id": "5634"
      },
      "created_on": "2020-08-05T09:45:12.075000Z",
      "is_active": true,
      "logo": "https://hdn-1.addsale.com/x0/seller/pictures/logo/original/oLoxiL_0DEFAULT-LOGO.jpgbd050200-700a-4a3e-9da6-e6b78fbee943/oLoxiL_0DEFAULT-LOGO.jpg",
      "modified_by": {
        "username": "asavarijadhav_gofynd_com_99880",
        "user_id": "5634"
      },
      "modified_on": "2020-08-05T09:48:01.660000Z",
      "name": "Beauty & Personal Care",
      "platforms": {},
      "priority_order": 4,
      "slug": "beauty-personal-care",
      "synonyms": [],
      "tags": [],
      "id": "5f2a7fa831c66700018cdc4a"
    },
    {
      "uid": 11,
      "_cls": "Department",
      "_custom_json": {},
      "created_by": {
        "username": "asavarijadhav_gofynd_com_99880",
        "user_id": "5634"
      },
      "created_on": "2020-08-05T09:45:39.797000Z",
      "is_active": true,
      "logo": "https://hdn-1.addsale.com/x0/seller/pictures/logo/original/vQv4ot_0DEFAULT-LOGO.jpg701cb5af-2024-4abf-ae5d-b68bc1a3cd43/vQv4ot_0DEFAULT-LOGO.jpg",
      "modified_by": {
        "username": "918793638893_86554",
        "user_id": "3"
      },
      "modified_on": "2020-08-06T11:38:57.599000Z",
      "name": "Home & Living",
      "platforms": {},
      "priority_order": 5,
      "slug": "home-living",
      "synonyms": [],
      "tags": [],
      "id": "5f2a7fc331c66700018cdc4b"
    },
    {
      "uid": 14,
      "_cls": "Department",
      "_custom_json": {},
      "created_by": {
        "username": "asavarijadhav_gofynd_com_99880",
        "user_id": "5634"
      },
      "created_on": "2020-08-05T09:48:42.347000Z",
      "is_active": false,
      "logo": "https://hdn-1.addsale.com/x0/seller/pictures/logo/original/hTobjV_0DEFAULT-LOGO.jpga020159c-7fe7-4c1c-a11a-4be61a60da9f/hTobjV_0DEFAULT-LOGO.jpg",
      "modified_by": {
        "username": "asavarijadhav_gofynd_com_99880",
        "user_id": "5634"
      },
      "modified_on": "2020-08-05T09:48:42.347000Z",
      "name": "Baby Care & Kids Essentials",
      "platforms": {},
      "priority_order": 7,
      "slug": "baby-care-kids-essentials",
      "synonyms": [],
      "tags": [],
      "id": "5f2a807a31c66700018cdc4e"
    },
    {
      "_cls": "Department",
      "created_on": "2021-01-13T10:12:33.002000Z",
      "modified_on": "2021-01-13T13:50:55.415000Z",
      "created_by": {
        "username": "919821012599_75351",
        "user_id": "5721"
      },
      "modified_by": {
        "username": "919821012599_75351",
        "user_id": "5721"
      },
      "uid": 21,
      "name": "Skin care products",
      "slug": "skin-care-produts",
      "logo": "https://hdn-1.addsale.com/x0/department/pictures/square-logo/original/rNz8grLys-.png",
      "tags": [],
      "is_active": true,
      "priority_order": 10235,
      "platforms": {},
      "synonyms": [
        "skin",
        "care"
      ],
      "_custom_json": {},
      "id": "5ffec79192813f0001eb6560"
    }
  ]
}
```
</details>









---


### listHSNCodes
List HSN Codes



```javascript
// Promise
const promise = client.catalog.listHSNCodes();

// Async/Await
const data = await client.catalog.listHSNCodes();
```






Allows you to list all hsn Codes

*Returned Response:*




[HSNCodesResponse](#HSNCodesResponse)

List of all HSN Codes. See example below or refer `HSNCodesResponse` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "data": {
    "country_of_origin": [
      "India"
    ],
    "hsn_code": [
      "11111111"
    ]
  },
  "message": "Success"
}
```
</details>









---


### listInventoryExport
Get the history of the inventory export.



```javascript
// Promise
const promise = client.catalog.listInventoryExport({  status : value,
 fromDate : value,
 toDate : value,
 q : value });

// Async/Await
const data = await client.catalog.listInventoryExport({  status : value,
 fromDate : value,
 toDate : value,
 q : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| status | string | no | Status of the export job. |    
| fromDate | string | no | Inventory export history filtered according to from_date. |    
| toDate | string | no | Inventory export history filtered according to from_date. |    
| q | string | no | Inventory export history filtered according to task ID. |  



This API helps you the get the history of inventory jobs depending on the filtered criteria.

*Returned Response:*




[InventoryExportJobListResponse](#InventoryExportJobListResponse)

Returns a list of inventory export jobs




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "items": [
    {
      "url": "https://regrowth.s3.amazonaws.com/slingshot-catalogues/seller-catalog/577/ab469da4-b9a5-11ed-955a-d6fb21611540/ab469da4-b9a5-11ed-955a-d6fb21611540.zip",
      "type": "excel",
      "created_on": "2023-03-03T09:27:51.262000Z",
      "_id": "6401bd972a2e6c3d508c9203",
      "task_id": "ab469da4-b9a5-11ed-955a-d6fb21611540",
      "filters": {
        "brand_ids": [
          2751
        ],
        "store_ids": [
          3622
        ],
        "brands": [
          "Puma"
        ],
        "stores": [
          "Vikings Cbs"
        ]
      },
      "modified_on": "2023-03-03T09:27:51.262000",
      "status": "success",
      "notification_emails": [],
      "created_by": {
        "username": "rohanshah@fynd.com",
        "user_id": "5e199e6998cfe1776f1385dc"
      },
      "completed_on": "2023-03-03T09:33:11.416000Z",
      "seller_id": 577,
      "id": "6401bd972a2e6c3d508c9203"
    }
  ]
}
```
</details>









---


### listProductTemplate
List all Templates



```javascript
// Promise
const promise = client.catalog.listProductTemplate({  department : value });

// Async/Await
const data = await client.catalog.listProductTemplate({  department : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| department | string | yes | A `department` is the name of a particular department. |  



Allows you to list all product templates, also can filter by department

*Returned Response:*




[TemplatesResponse](#TemplatesResponse)

List of product templates. See example below or refer `TemplatesResponse` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "page": {
    "current": 1,
    "size": 3,
    "has_previous": false,
    "has_next": true,
    "item_total": 36
  },
  "items": [
    {
      "name": "Accessories",
      "categories": [
        "accessories-adornments",
        "messenger-bags",
        "wallets",
        "satchels",
        "backpacks",
        "laptop-bags",
        "briefcases",
        "suitcases",
        "duffles",
        "analog-watches",
        "chronograph-watches",
        "digital-watches",
        "aviators",
        "wayfarers",
        "round-sunglasses",
        "cateye-sunglasses",
        "rectangle-sunglasses",
        "oversized-sunglasses",
        "browline-sunglasses",
        "square-sunglasses",
        "sports-sunglasses",
        "belts",
        "ties",
        "cufflinks",
        "pocket-squares",
        "tie-pins",
        "brooches",
        "baseball-caps",
        "hats",
        "shawls",
        "mufflers",
        "stoles",
        "socks",
        "dupattas",
        "handbags",
        "clutches",
        "totes",
        "sling-bags",
        "hobos",
        "scarves",
        "stockings",
        "hairbands",
        "hair-clips",
        "pouches",
        "oval-sunglasses",
        "gloves",
        "frames",
        "maang-tikka",
        "bags",
        "sunglasses",
        "mittens",
        "money-clips",
        "card-cases",
        "brushes",
        "horns",
        "spray",
        "cleaner",
        "cream",
        "polishes",
        "decoration-charms",
        "care-kits",
        "trees",
        "shoe-bag",
        "laces",
        "insoles",
        "handkerchief",
        "toy-box",
        "play-gym",
        "camera-bag",
        "fanny-pack",
        "usb-cable",
        "rca-cable",
        "usb-c-to-multiport-adapter",
        "batteries",
        "power-banks",
        "lightning-cable",
        "tos-cable",
        "aux-cable",
        "hdmi-cable",
        "charging-cable",
        "mini-display-port-hdmi-cable",
        "thunderbolt-cable",
        "bluetooth-headphones",
        "headphone",
        "bluetooth-earphones",
        "earphones",
        "hard-disk-drive",
        "photo-frame",
        "notebook",
        "pen",
        "luggage-tag",
        "stationery-combo",
        "jewellery-case",
        "folder",
        "key-chain",
        "suspender",
        "cummerbund",
        "cravet",
        "toiletry-bag",
        "cosmetic-bag",
        "gift-bag",
        "packaging-material",
        "spectacle-case",
        "cuff-bands",
        "playing-cards",
        "kalangi",
        "kataar",
        "safa",
        "watch-case",
        "paper-weight",
        "caps",
        "visor-caps",
        "bucket-hats",
        "beanie-caps",
        "cowboy-hats",
        "gatsby-caps",
        "fedora-hats",
        "rain-cover",
        "round-glasses",
        "rectangle-glasses",
        "cateye-glasses",
        "aviator-glasses",
        "square-glasses",
        "oval-glasses",
        "almond-glasses",
        "wayfarer-glasses",
        "toric-contact-lenses",
        "daily-disposable",
        "monthly-reusable",
        "multifocal-varifocal",
        "solutions-accessories",
        "coloured-lenses"
      ],
      "description": "This is the file validation template for the fashion department and accessories category.",
      "departments": [
        "electronics",
        "men",
        "women",
        "kids",
        "toys"
      ],
      "attributes": [
        "gender",
        "age-group",
        "occasion",
        "collection",
        "season",
        "color",
        "material",
        "product_type",
        "pattern",
        "closure_type",
        "product_length",
        "feature",
        "care_instructions",
        "package_contents",
        "essential",
        "gst-inclusive",
        "gst-if-exclusive",
        "fragile",
        "manufacturer-packer-importer-name",
        "manufacturer-packer-importer-address"
      ],
      "slug": "accessories",
      "banner": "https://hdn-1.fynd.com/seller/pictures/landscape-banner/original/F4W6Pd_DEFAULT-BANNER_LANDSCAPE.jpgd54cb24d-dd2c-441c-bca0-8f65ea3b101c/F4W6Pd_DEFAULT-BANNER_LANDSCAPE.jpg",
      "logo": "https://hdn-1.fynd.com/seller/pictures/logo/original/hkE1dC_0DEFAULT-LOGO.jpgfb5b1b31-9449-43db-9049-435fec88ee77/hkE1dC_0DEFAULT-LOGO.jpg",
      "is_physical": true,
      "id": "5f04a23544a2e5404274bc07"
    },
    {
      "slug": "all-attributes-template",
      "categories": [
        "hd-television"
      ],
      "banner": "https://hdn-1.addsale.com/x0/seller/pictures/landscape-banner/original/tBqIbw_dj.jpg0b8e229f-45bd-4a96-97a5-3e5b193828d2/tBqIbw_dj.jpg",
      "name": "All attributes Template",
      "attributes": [
        "test-attribute-3",
        "test-attribute",
        "test-attribute-1",
        "test-attribute-4",
        "gender",
        "neck-type",
        "qwertyu",
        "testtt-attribute-5",
        "storage_humidity",
        "operating_humidity",
        "certifications",
        "aspect_ratio",
        "storage_temperature",
        "memory_details",
        "cache_memory",
        "operating_temperature",
        "expansion_slots",
        "included_software",
        "web_camera",
        "video_memory",
        "optical_drive",
        "hard_drive_speed",
        "hard_drive_type",
        "hard_drive",
        "speaker_type",
        "core_type",
        "processor_core",
        "processor_model_number",
        "processor_speed",
        "processor_brand",
        "processor_sub_brand",
        "battery_cell",
        "laptop_type",
        "graphics_card_model",
        "accessories",
        "services",
        "promotion_freebie",
        "action",
        "home_delivery",
        "colour_reproduction",
        "brightness",
        "data_transfer_on_cloud",
        "card_reader",
        "battery_filter",
        "volumetric_weight_in_kg",
        "price_filter",
        "brands_filter",
        "number_of_usb_ports_filter",
        "number_of_hdmi_ports_filter",
        "smart_tv_filter",
        "resolution_filter",
        "display_technology",
        "panel_type",
        "record_as_you_watch",
        "schedule_recording",
        "no_of_channels",
        "additional_side_panel_ports",
        "response_time",
        "contrast_ratio",
        "hdmi_arc",
        "tv_operating_system",
        "refresh_rate",
        "connect_to_router_via",
        "connect_to_home_theatre_via",
        "no_of_hdmi_ports",
        "no_of_usb_ports",
        "standby_power_consumption",
        "connect_to_set_top_box_via",
        "stream_content_from_devices",
        "surround_sound_technology",
        "tv_speaker_type",
        "graphics_card_sub_brand",
        "hdr",
        "power_supply",
        "power_consumption",
        "connect_to_dvd_players_via",
        "graphics_card_brand",
        "rated_speaker_output_power_rms",
        "3d_technology",
        "optimized_heat_dissipation",
        "backlit_keyboard_support",
        "ethernet_lan_support",
        "hdmi_support",
        "anti_glare_screen",
        "phone_network_and_connectivity",
        "storage_filter",
        "ram_filter",
        "pallet",
        "waterproof",
        "selfie_camera_filter",
        "primary_camera_filter",
        "screen_size_filter",
        "battery_power_features",
        "in_the_box_warranty",
        "features",
        "screen_display_camera",
        "phone_battery_charge_time",
        "network_inter_device_connectivity",
        "phone_os",
        "phone_build_convenience",
        "phone_hardware_storage",
        "testcomparsion",
        "country_of_origin",
        "manufacturer_packer_importer_address",
        "manufacturer_packer_importer_name",
        "warranty_type",
        "dlna_compliant",
        "user_guides_attachment",
        "resq_support_guide_attachment",
        "water_resistant",
        "speaker_support",
        "fm_radio",
        "nfc_support",
        "package_content",
        "talk_time",
        "standby_time",
        "quick_charge",
        "preloaded_apps",
        "metal_frame",
        "touch_screen",
        "glass_type",
        "meta_description",
        "short_description",
        "is_flammable",
        "transfer_price_tp",
        "screen_size",
        "bluetooth",
        "wi_fi",
        "3g",
        "internal_storage",
        "in_the_box",
        "memory_ram",
        "4g",
        "usb",
        "otg_support",
        "edge",
        "nfc",
        "microphone",
        "dummy_int",
        "product_details",
        "subtitle",
        "general_information",
        "expandable",
        "style_note",
        "is_waterproof",
        "brand_name",
        "color",
        "model",
        "product_type",
        "series",
        "product_identifiers",
        "style",
        "sub_brand",
        "socks_length",
        "heel_height",
        "occasion",
        "storage",
        "season",
        "processor",
        "collection",
        "storage_type",
        "topwear_length",
        "bottomwear_length",
        "denim_type",
        "boot_length",
        "dial_shape",
        "thickness",
        "lens_colour",
        "sensors",
        "dial_colour",
        "material",
        "usb_support",
        "fingerprint_recognition",
        "strap_type",
        "operating_system",
        "frame_style",
        "brand_rating",
        "operating_system_type",
        "4g_bands",
        "strap_colour",
        "4g_support",
        "2g_bands",
        "frame_colour",
        "video_formats",
        "3g_bands",
        "feature",
        "3g_support",
        "movement_type",
        "bluetooth_version",
        "pattern",
        "wi_fi_support",
        "bluetooth_support",
        "inner_material",
        "selfie_camera",
        "closure_type",
        "screen_resolution",
        "product_fit",
        "screen_size_diagonal",
        "dimensions",
        "display_type",
        "plating",
        "primary_camera",
        "toe_type",
        "dual_camera_rear",
        "clasp_type",
        "ram",
        "padding",
        "microphone_support",
        "sim_type",
        "capacity",
        "arch_type",
        "stone_type",
        "warranty_description",
        "additional_connectivity",
        "compartments",
        "audio_formats",
        "sleeve_type",
        "audio_jack",
        "diameter",
        "battery_capacity",
        "sleeve_length",
        "battery_operated",
        "product_length",
        "battery_run_time",
        "neck_type",
        "battery_type",
        "collar_type",
        "battery_voltage",
        "cellular_technology",
        "waist_rise",
        "edge_support",
        "coverage",
        "expandable_memory",
        "package_contents",
        "gprs_support",
        "care_instructions",
        "hybrid_sim_slot",
        "model_info",
        "variant",
        "warranty",
        "complexion",
        "skin_type",
        "spf",
        "speciality",
        "finish",
        "lasting_power",
        "benefits",
        "hair_type",
        "fragrance_family",
        "fragrance_type",
        "product_format",
        "active_ingredients",
        "ingredients",
        "how_to_use",
        "shelf_life",
        "safety_warning",
        "testtt-attribute-6"
      ],
      "departments": [
        "electronics"
      ],
      "logo": "https://hdn-1.addsale.com/x0/seller/pictures/logo/original/7V0z2B_dj.jpg21ac07ea-9f83-403e-ad37-69076c6c5c46/7V0z2B_dj.jpg",
      "description": "Blah Blah",
      "is_physical": true,
      "id": "5ed5f84d2abe0f0001174d73"
    },
    {
      "name": "Baby Care & Toys",
      "categories": [
        "kids-puzzles",
        "kids-shirts"
      ],
      "description": "This is the file validation template for the Baby Care & Toys department.",
      "departments": [
        "baby-care-kids-essentials",
        "toys",
        "kids"
      ],
      "attributes": [
        "gender",
        "age-group",
        "occasion",
        "collection",
        "season",
        "color",
        "material",
        "product_type",
        "no-of-pieces",
        "battery_operated",
        "is-portable",
        "is_flammable",
        "capacity",
        "carrying-capacity",
        "inner-dimension",
        "seat-dimension",
        "package_contents",
        "additional-features",
        "certification",
        "essential",
        "gst-inclusive",
        "gst-if-exclusive",
        "fragile",
        "manufacturer-packer-importer-name",
        "manufacturer-packer-importer-address"
      ],
      "slug": "baby-care-toys",
      "banner": "https://hdn-1.fynd.com/seller/pictures/landscape-banner/original/Ikt1sK_DEFAULT-BANNER_LANDSCAPE.jpg7f923d3d-abc9-4a2e-9a49-204a36e1073c/Ikt1sK_DEFAULT-BANNER_LANDSCAPE.jpg",
      "logo": "https://hdn-1.fynd.com/seller/pictures/logo/original/saEu9Z_0DEFAULT-LOGO.jpg4cd36f29-a15b-4ec1-ab33-1162ede2c61f/saEu9Z_0DEFAULT-LOGO.jpg",
      "is_physical": true,
      "id": "5f04a24944a2e5404274bc09"
    },
    {
      "name": "Bags",
      "categories": [
        "seal-bags",
        "reusable-bag",
        "poly-bag",
        "shoe-bag",
        "sling-bags",
        "bags"
      ],
      "description": "This is the file validation template for the fashion department and bags category.",
      "departments": [
        "kids",
        "women",
        "men"
      ],
      "attributes": [
        "gender",
        "age-group",
        "color",
        "outer-material",
        "inner_material",
        "product_type",
        "collection",
        "occasion",
        "season",
        "pattern",
        "closure_type",
        "care_instructions",
        "compartments",
        "expandable",
        "water-resistence",
        "water-resistence-details",
        "water-proof",
        "water-proof-details",
        "warranty_type",
        "warranty_description",
        "package_contents",
        "essential",
        "gst-inclusive",
        "gst-if-exclusive",
        "fragile",
        "manufacturer-packer-importer-name",
        "manufacturer-packer-importer-address"
      ],
      "slug": "bags",
      "banner": "https://hdn-1.fynd.com/seller/pictures/landscape-banner/original/ejcGMm_DEFAULT-BANNER_LANDSCAPE.jpg658c38fd-d6de-4fcf-9f0e-3a886b2e2225/ejcGMm_DEFAULT-BANNER_LANDSCAPE.jpg",
      "logo": "https://hdn-1.fynd.com/seller/pictures/logo/original/GIysAV_0DEFAULT-LOGO.jpgf1942433-2bcb-4939-9128-675f66cd6d70/GIysAV_0DEFAULT-LOGO.jpg",
      "is_physical": true,
      "id": "5f04a24a44a2e5404274bc0b"
    },
    {
      "modified_on": "2020-08-19T04:04:30.421000Z",
      "logo": "https://hdn-1.addsale.com/x0/products/pictures/template/logo/original/fW2zqHspe-q1.png",
      "created_on": "2020-08-19T04:04:30.421000Z",
      "banner": "https://hdn-1.addsale.com/x0/products/pictures/template/banner/original/_YRvLuMDn-q1.jpeg",
      "attributes": [
        "base-material"
      ],
      "modified_by": {
        "username": "fahimsakri_gofynd_com_44938",
        "user_id": "10"
      },
      "departments": [
        "men-s-fashion",
        "kids",
        "women-s-fashion",
        "beauty-personal-care"
      ],
      "slug": "base-template",
      "description": "ad",
      "name": "Base Template",
      "categories": [
        "adcdas"
      ],
      "created_by": {
        "username": "fahimsakri_gofynd_com_44938",
        "user_id": "10"
      },
      "is_physical": true,
      "id": "5f3ca4ce3f7e74000111925f"
    },
    {
      "description": "This is the file validation template for the Beauty & Personal Care department. ",
      "name": "Beauty & Personal Care",
      "slug": "beauty-personal-care",
      "departments": [
        "beauty-personal-care"
      ],
      "attributes": [
        "gender",
        "age-group",
        "occasion",
        "collection",
        "season",
        "color",
        "product_type",
        "complexion",
        "skin_type",
        "spf",
        "speciality",
        "finish",
        "lasting_power",
        "coverage",
        "hair_type",
        "fragrance_family",
        "fragrance_type",
        "closure_type",
        "capacity",
        "product_format",
        "active_ingredients",
        "benefits",
        "how-to-use",
        "shelf_life",
        "safety_warning",
        "mask_type",
        "material",
        "adjustable",
        "reusable",
        "foldable",
        "filtration",
        "compatible_filter",
        "package_contents",
        "warranty_type",
        "warranty_description",
        "essential",
        "gst-inclusive",
        "gst-if-exclusive",
        "fragile",
        "manufacturer-packer-importer-name",
        "manufacturer-packer-importer-address"
      ],
      "categories": [
        "foundation",
        "concealer",
        "mascara",
        "kajal",
        "eyeshadow",
        "false-eyelashes",
        "eyebrow-enhancer",
        "eyeliner",
        "personal-care-gift-sets",
        "primer",
        "compact",
        "hair-removal-cream",
        "lip-liner",
        "nail-polish-remover",
        "liquid-lipstick",
        "lipstick",
        "nail-polish",
        "moisturizing-socks",
        "hand-cream",
        "sindoor",
        "crayon-lipstick",
        "eye-brushes",
        "manicure-kits",
        "lip-gloss",
        "makeup-remover",
        "nail-art-kit",
        "foot-cream",
        "bb-cream",
        "brush-sets",
        "pedicure-kits",
        "face-brushes",
        "highlighters",
        "lip-balm",
        "lip-brushes",
        "sunscreen",
        "trimmer",
        "facial-kits",
        "colour-contact-lens",
        "body-wash",
        "toners",
        "cleanser",
        "epilator",
        "eye-gels",
        "face-wash",
        "eye-masks",
        "eye-creams",
        "facial-wipes",
        "masks",
        "perfume",
        "moisturizer",
        "serum",
        "night-cream",
        "shoe-deodorant",
        "razor",
        "soaps",
        "body-scrubs",
        "day-cream",
        "deodorants",
        "eye-roll-on",
        "eye-serums",
        "attar",
        "bath-sets",
        "bathing-accessories",
        "scrubs",
        "sets",
        "underarm-roll-on",
        "wax-strips",
        "body-creams",
        "body-lotions",
        "talcum-powders",
        "body-butters",
        "body-mousse",
        "hair-brushes",
        "combs",
        "hair-spa",
        "hair-colour",
        "hair-spa-kits",
        "hair-cream",
        "hair-extensions",
        "anti-stretch-mark-cream",
        "body-oils",
        "body-souffles",
        "conditioner",
        "hair-accessories",
        "hair-oil",
        "hair-serum",
        "hair-spray",
        "shampoo",
        "body-mists",
        "body-sprays",
        "liquid-soap",
        "beard-oil",
        "beard-colour",
        "beard-wash",
        "beard-balm",
        "nail-cutter",
        "home-fragrance",
        "gift-set",
        "hand-soap",
        "hand-sanitizer",
        "face-oil",
        "body-massage-balm",
        "face-gel",
        "face-mist",
        "bath-oil",
        "insect-repellent",
        "anti-ageing-cream",
        "bath-salt",
        "anti-acne-cream",
        "face-massage-cream",
        "whitening-cream",
        "anti-wrinkle-cream",
        "foot-spray",
        "anti-blemish-cream",
        "blush",
        "makeup-fixer",
        "makeup-kit",
        "sponge",
        "foot-scrub",
        "eyeshadow-palette",
        "cc-cream",
        "eye-wipes",
        "head-wrap",
        "patches",
        "nipple-butter",
        "pillow-spray",
        "pillow-roll-on",
        "fragrance-plug",
        "pain-relief-balm",
        "headache-roll-on",
        "mirror",
        "toilet-seat-spray",
        "intimate-wash",
        "massager",
        "makeup-accessories",
        "pillow",
        "nail-accessories",
        "sanitary-napkins",
        "protective-mask",
        "kohl-kajal",
        "natural-lipstick",
        "pearl-lipstick",
        "creme-lipstick",
        "matte-lipstick",
        "glossy-lipstick",
        "compact-spray",
        "compact-stick",
        "compact-powder",
        "highlighter-cake",
        "blush-highlighter",
        "kajal-stick",
        "compact-cake",
        "roll-on-kajal-pencil",
        "liquid-compact",
        "stick-highlighter",
        "kajal-pencil",
        "gel-kajal",
        "liquid-glossy-lipstick",
        "liquid-matte-lipstick",
        "crayon-matte-lipstick",
        "liquid-creme-lipstick",
        "crayon-glossy-lipstick",
        "natural-lip-gloss",
        "liquid-natural-lipstick",
        "crayon-creme-lipstick",
        "pearl-lip-gloss",
        "liquid-pearl-lipstick",
        "crayon-natural-lipstick",
        "liquid-highlighter",
        "crayon-pearl-lipstick",
        "glossy-lip-gloss",
        "matte-lip-gloss",
        "creme-lip-gloss",
        "eye-concealer",
        "object-disinfectant",
        "face-disinfectant",
        "vegetable-fruit-wash",
        "infrared-thermometer",
        "safety-goggle",
        "personal-protective-equipment-kit",
        "examination-gloves",
        "face-shield"
      ],
      "banner": "https://hdn-1.fynd.com/seller/pictures/landscape-banner/original/ZxNlYp_DEFAULT-BANNER_LANDSCAPE.jpg66a71bf3-c1a7-4aa0-98e6-f2a837caa59a/ZxNlYp_DEFAULT-BANNER_LANDSCAPE.jpg",
      "logo": "https://hdn-1.fynd.com/seller/pictures/logo/original/OInLCX_0DEFAULT-LOGO.jpg03aeaeb8-2d04-4694-b641-f60fbdea5c4d/OInLCX_0DEFAULT-LOGO.jpg",
      "is_physical": true,
      "id": "5f05b34844a2e571575f3047"
    },
    {
      "name": "Clothing",
      "categories": [
        "casual-shirts",
        "formal-shirts",
        "sweaters",
        "sweatshirts",
        "hoodies",
        "cardigans",
        "suits",
        "front-open-jackets",
        "blazers",
        "waistcoats",
        "jeans",
        "chinos",
        "cargos",
        "corduroys",
        "formal-trousers",
        "3-4ths",
        "trunks",
        "boardshorts",
        "rashguard",
        "briefs",
        "trackpants",
        "tracksuits",
        "joggers",
        "t-shirts",
        "shorts",
        "gowns",
        "blouson-top",
        "tunics",
        "corsets",
        "kaftan-top",
        "shift-dress",
        "jumpsuits",
        "jeggings",
        "skirts",
        "palazzos",
        "culottes",
        "leggings",
        "shrugs",
        "sports-bra",
        "bikinis",
        "swimsuit",
        "sarong",
        "kaftan",
        "shapewear",
        "camisole",
        "activewear-tops",
        "tights",
        "yoga-pants",
        "capris",
        "harem",
        "bomber-jackets",
        "gilet",
        "leather-jackets",
        "polos",
        "bodycon-dress",
        "off-shoulder-dress",
        "skater-dress",
        "maxi-dress",
        "sheath-dress",
        "sweater-dress",
        "tube-dress",
        "slip-dress",
        "asymmetric-dress",
        "bodysuit",
        "peplum-top",
        "crop-top",
        "tiered-dress",
        "maxi-top",
        "tank-top",
        "tube-top",
        "strappy-top",
        "activewear-jackets",
        "denim-jackets",
        "windcheater",
        "peplum-dress",
        "off-shoulder-top",
        "shirt-dress",
        "kids-shirts",
        "twin-sets",
        "dungarees",
        "trousers",
        "western-jackets",
        "frocks",
        "dresses",
        "tops",
        "casual-pants",
        "beachwear-bottoms",
        "coat",
        "fusion-set",
        "indowestern-kurta",
        "tapered-jeans",
        "joggers-jeans",
        "straight-chinos",
        "tapered-chinos",
        "double-breasted-suits",
        "activewear-crop-tops",
        "flat-front-formal-trousers",
        "pleated-formal-trousers",
        "straight-formal-trousers",
        "straight-jeans",
        "flared-jeans",
        "tapered-formal-trousers",
        "straight-skirt",
        "flared-skirt",
        "asymmetric-skirt",
        "pleated-corduroys",
        "tapered-corduroys",
        "straight-corduroys",
        "cropped-chinos",
        "cropped-corduroys",
        "bootcut-jeans",
        "drop-crotch-jeans",
        "cropped-jeans",
        "bootcut-formal-trousers",
        "cropped-formal-trousers",
        "five-buttoned-suits",
        "tuxedo-suits",
        "one-buttoned-suits",
        "two-buttoned-suits",
        "four-buttoned-suits",
        "three-buttoned-suits",
        "pleated-chinos",
        "pleated-jeans",
        "beachwear-bikini-tops",
        "pleated-skirt",
        "flared-formal-trousers",
        "activewear-tank-tops",
        "beachwear-bikini-bottoms",
        "pencil-skirt",
        "activewear-blouse",
        "casual-joggers"
      ],
      "description": "This is the file validation template for the fashion department and clothing category.",
      "departments": [
        "men",
        "women",
        "kids",
        "clothing"
      ],
      "attributes": [
        "gender",
        "age-group",
        "color",
        "material",
        "occasion",
        "collection",
        "season",
        "product_fit",
        "product_type",
        "product_length",
        "pattern",
        "sleeve_type",
        "sleeve_length",
        "closure_type",
        "neck_type",
        "waist_rise",
        "denim-fade",
        "care_instructions",
        "package_contents",
        "number-of-pockets",
        "model_info",
        "essential",
        "gst-inclusive",
        "gst-if-exclusive",
        "fragile",
        "manufacturer-packer-importer-name",
        "manufacturer-packer-importer-address"
      ],
      "slug": "clothing",
      "banner": "https://hdn-1.fynd.com/seller/pictures/landscape-banner/original/720R34_DEFAULT-BANNER_LANDSCAPE.jpga765babe-cfaa-4cc5-9da7-f4e1402fa97e/720R34_DEFAULT-BANNER_LANDSCAPE.jpg",
      "logo": "https://hdn-1.fynd.com/seller/pictures/logo/original/jKZEs7_0DEFAULT-LOGO.jpg78413c0a-11a8-43f8-88ad-1442e9fdb898/jKZEs7_0DEFAULT-LOGO.jpg",
      "is_physical": true,
      "id": "5f04a25044a2e5404274bc0e"
    },
    {
      "description": "asdd",
      "attributes": [
        "color",
        "warranty_type",
        "care_instructions"
      ],
      "modified_on": "2020-08-20T16:15:33.598000Z",
      "modified_by": {
        "username": "fahimsakri_gofynd_com_44938",
        "user_id": "10"
      },
      "name": "FA-Template",
      "categories": [
        "vision-qa-f9447f89-d2da-41fc-ac33-b9f286308c14"
      ],
      "logo": "https://hdn-1.addsale.com/x0/products/pictures/template/logo/original/fW2zqHspe-q1.png",
      "departments": [
        "electronics"
      ],
      "banner": "https://hdn-1.addsale.com/x0/products/pictures/template/banner/original/L_u77Mz4T-FA-Template.png",
      "slug": "fa-template",
      "created_on": "2020-08-19T09:51:08.215000Z",
      "created_by": {
        "username": "fahimsakri_gofynd_com_44938",
        "user_id": "10"
      },
      "is_physical": true,
      "id": "5f3cf60c9788cc00018ab276"
    },
    {
      "name": "Footwear",
      "categories": [
        "sneakers",
        "running-shoes",
        "hiking-shoes",
        "football-shoes",
        "indoor-sports-shoes",
        "trainers",
        "outdoor-sports-shoes",
        "moccasins",
        "loafers",
        "boat-shoes",
        "brogues",
        "derby-shoes",
        "oxfords",
        "monk-strap-shoes",
        "lace-ups",
        "formal-slip-ons",
        "boots",
        "sandals",
        "flip-flops",
        "floaters",
        "d-orsay",
        "espadrilles",
        "pointed-toe",
        "flat-slip-ons",
        "gladiators",
        "flat-sandals",
        "stilettos",
        "wedges",
        "block-heels",
        "kitten-heels",
        "louis-heels",
        "cone-heels",
        "heel-sandals",
        "ballerinas",
        "casual-slip-ons",
        "casual-lace-ups",
        "ethnic-sandals",
        "clogs",
        "slippers",
        "school-shoes",
        "high-heels",
        "flats",
        "mules",
        "crocs",
        "heels-pumps",
        "mojaris",
        "jutties",
        "labour-shoes"
      ],
      "description": "This is the file validation template for the fashion department and footwear category.",
      "departments": [
        "men",
        "women",
        "kids"
      ],
      "attributes": [
        "gender",
        "age-group",
        "color",
        "outer-material",
        "inner_material",
        "sole-material",
        "occasion",
        "collection",
        "season",
        "product_type",
        "pattern",
        "closure_type",
        "toe_type",
        "arch_type",
        "heel_height",
        "heel-height-unit-of-measure",
        "care_instructions",
        "package_contents",
        "water-resistence",
        "water-resistence-details",
        "water-proof",
        "water-proof-details",
        "warranty_type",
        "warranty_description",
        "essential",
        "gst-inclusive",
        "gst-if-exclusive",
        "fragile",
        "manufacturer-packer-importer-name",
        "manufacturer-packer-importer-address"
      ],
      "slug": "footwear",
      "banner": "https://hdn-1.fynd.com/seller/pictures/landscape-banner/original/phMzNh_DEFAULT-BANNER_LANDSCAPE.jpgf06e7d2f-15a0-405a-b37b-1333c618abdb/phMzNh_DEFAULT-BANNER_LANDSCAPE.jpg",
      "logo": "https://hdn-1.fynd.com/seller/pictures/logo/original/PkIwbo_0DEFAULT-LOGO.jpgbb9acb1b-5e2c-44d4-918a-9429367ccb7d/PkIwbo_0DEFAULT-LOGO.jpg",
      "is_physical": true,
      "id": "5f04a25344a2e5404274bc10"
    },
    {
      "slug": "groceries",
      "name": "Groceries",
      "logo": "https://hdn-1.addsale.com/x0/seller/pictures/logo/original/EtkWQm_fruit___vegetable_logo.jpgc541c78c-dabc-4823-bb72-c4bd3e5db449/EtkWQm_fruit___vegetable_logo.jpg",
      "departments": [
        "groceries"
      ],
      "description": "Groceries",
      "banner": "https://hdn-1.addsale.com/x0/seller/pictures/landscape-banner/original/BPjEl6_fruit___vegetable_logo.jpg577eb6bb-de4e-444c-a86a-bc23e0d97178/BPjEl6_fruit___vegetable_logo.jpg",
      "attributes": [
        "ingredient-type",
        "manufacturer_packer_importer_address"
      ],
      "categories": [
        "buns",
        "non-veg-pickle",
        "condensed-milk",
        "shoe-shiners",
        "bath-stool-tub-basin-sets",
        "soda-cocktail-mix",
        "tofu",
        "buckets-mugs",
        "fresh-mutton",
        "games-calculators",
        "kolam",
        "namkeen-savoury-snacks",
        "gift-bags",
        "honey",
        "cutlery-spoons-fork",
        "pita",
        "potato-onion-tomato",
        "apples-pomegranate",
        "dishwash-powder",
        "country-eggs",
        "fish-tuna",
        "coconut-milk",
        "sugarfree-sweeteners",
        "cups-mugs-tumblers",
        "turkey",
        "breakfast-snack-mixes",
        "diabetic-drinks",
        "other-dal",
        "herbs-seasoning",
        "incense-sticks",
        "scissor",
        "slice-cakes",
        "dips-dressings",
        "files",
        "lavash",
        "flakes",
        "tawa-sauce-pan",
        "breads",
        "jaggery",
        "soya-chunks",
        "exotic-vegetables",
        "wine-rise-vinegar",
        "recipe-packs",
        "pen",
        "cookware-sets",
        "jam-conserve-marmalade",
        "holi-pichkari",
        "knives-peelers",
        "chicken-sausages",
        "poha",
        "jowar-flour",
        "cook-serve",
        "unsweetened-cold-press",
        "decorations",
        "dust-cloth-wipes",
        "jelly",
        "gift-boxes",
        "organic-cold-press-oil",
        "glucose-powder-tablets",
        "frozen-non-veg-snacks",
        "leafy-vegetables",
        "salted-biscuits",
        "cooking-chocolates-cocoa",
        "marinated-meat",
        "berries",
        "basmati-rice",
        "ground-coffee",
        "cut-vegetables",
        "moong-dal",
        "glue",
        "fabric-pre-post-wash",
        "canola-rapeseed-oil",
        "water-fridge-bottle",
        "frozen-fish-seafood",
        "choppers-graters",
        "soya",
        "kiwi-melon-citrus-fruits",
        "buttermilk",
        "focaccia",
        "healthy-baked-snacks",
        "bowls",
        "car-freshener",
        "nachos",
        "powdered-spices",
        "rawa",
        "pressure-cookers",
        "chips",
        "cream-rolls",
        "tape",
        "bajra",
        "jowar",
        "ice-cream",
        "wicks",
        "cooking-pastes",
        "erasers-sharpeners",
        "imported-fruits",
        "notebooks",
        "masoor-dal",
        "canned-seafood",
        "regular-white-vinegar",
        "croissants-bread",
        "pasta",
        "root-vegetables",
        "whole-spices",
        "chana-dal",
        "glassware",
        "cucumber-gourds-capsicum",
        "papads-ready-to-fry",
        "lamp",
        "hakka-noodles",
        "balsamic-cider-vinegar",
        "garbage-bags",
        "pumpkin-drumstick",
        "other-plastic-ware",
        "frozen-indian-breads",
        "glucose-milk-biscuits",
        "non-alcoholic-drinks",
        "paneer",
        "toor-dal",
        "fresh-salads-sprouts",
        "fresh-chicken",
        "wheat-flour",
        "fruits-pulps",
        "cheese-spread",
        "camphor",
        "cabbage-broccoli-cauliflower",
        "sugar",
        "candles",
        "plates",
        "mangoes",
        "aerated-drinks",
        "toffee-candy-lollypop",
        "pizza-base",
        "thai-asian-sauce",
        "shoe-brushes",
        "gas-stove",
        "sports-energy-drinks",
        "shrikhand",
        "hangers-clips-ropes",
        "croutons",
        "floor-other-cleaners",
        "toilet-cleaners",
        "macaroni",
        "folders",
        "choco-nut-spread",
        "salts",
        "butter",
        "pavs",
        "hangers",
        "khari",
        "frozen-veg-snacks",
        "tea-cakes",
        "seasonal-fruits",
        "olive",
        "seasonal-accessories",
        "cream",
        "heat-eat-ready-meals",
        "dishwash-liquid-paste",
        "rubs",
        "beans-pulses",
        "seasonal-vegetables",
        "besan",
        "shoe-polish",
        "packaged-water",
        "kids-cereal",
        "instant-coffee",
        "powdered-milk",
        "dishwash-bar",
        "home-baking",
        "laundry-storage-baskets",
        "detergent-liquid",
        "instant-noodles",
        "canned-food",
        "disposable-cups-plates",
        "brinjals",
        "imported-cleaners",
        "tinned-packed-sweets",
        "container-set",
        "lamp-oil",
        "mayonnaise",
        "wall-hooks",
        "spreads",
        "juices",
        "quinoa-grains",
        "pooja-thali",
        "milk",
        "syrups-concentrates",
        "cut-fruit-tender-coconut",
        "kitchen-rolls",
        "cold-drinks",
        "vessels",
        "premium-cookies",
        "pooja-bells",
        "other-pooja-needs",
        "rise-flour",
        "breadcrumbs",
        "cup-cakes",
        "berry",
        "regional-rice",
        "regional-grains",
        "chilli-soya-sauce",
        "gourmet-popcorn",
        "beans-okra",
        "wafers",
        "sparkling-drinks",
        "muffins",
        "daliya",
        "match-box",
        "bagels-bread",
        "rice-products",
        "dry-fruits",
        "dal-mix",
        "flavoured-water",
        "roasted-seeds-nuts",
        "marshmallow",
        "toilet-paper",
        "wet-wipes",
        "fruit-baskets",
        "leaf-dust-tea",
        "rakhi",
        "insect-repellent",
        "bajra-flour",
        "ghee",
        "lunch-boxes",
        "cup-noodles",
        "chocolates",
        "candle-holder",
        "frozen-mutton",
        "marie-health-digestive",
        "pencils",
        "turkey-duck",
        "vermicelli",
        "exotic-flavoured-tea",
        "powdered-mixes",
        "urad-dal",
        "toilet-other-brushes",
        "jalapeno",
        "maida",
        "chutney",
        "fresh-sweets",
        "dessert-mixes",
        "instant-pasta",
        "kitchen-tools-other-accessories",
        "mushrooms",
        "chilli-lemon-garlic-ginger",
        "gherkin",
        "cooking-oil",
        "curry-paste",
        "tumblers",
        "lamb",
        "cheese",
        "other-seafood",
        "other-meat",
        "frozen-chicken",
        "banana-sapota-papaya",
        "granola-cereal-bars",
        "sabudana",
        "cream-biscuits",
        "bread-sticks",
        "chia-seeds",
        "utensil-scrub-pad-glove",
        "soya-granules",
        "soups",
        "spring-water",
        "rusks",
        "olive-oil",
        "organic-eggs",
        "aluminium-foil-cling-wrap",
        "colours-crayons",
        "corn-snacks",
        "pulses",
        "protein-eggs",
        "tomatoes-vegetables",
        "cookies",
        "still-drinks",
        "mustard-cheese-sauce",
        "regional-flour",
        "detergent-powder",
        "flavoured-other-oils",
        "chikki-gajak",
        "curd",
        "strainers-ladle-spatula",
        "holi-colours",
        "trail-cocktail-mixes",
        "baking-cake-decoration",
        "biscuits",
        "pencil-box",
        "muesli",
        "air-freshener",
        "quinoa",
        "metal-furniture-cleaners",
        "green-tea",
        "paper-napkin",
        "flavoured-milk",
        "mints-chewing-gum",
        "lighters",
        "lassi",
        "edamame-beans",
        "dry-fish",
        "blended-masalas",
        "tomato-ketchup",
        "kadai-fry-pans",
        "dustbins",
        "syrups",
        "wheat",
        "kitchen-glass-drains",
        "pork-ham",
        "panini",
        "flours-pre-mixes",
        "cfl-led-bulbs",
        "baguette-bread",
        "brooms-dust-pans",
        "prawns-shrimps",
        "soap-cases-dispensers",
        "oats-porridge",
        "mops-wipers",
        "exam-pads",
        "tea-bags",
        "pastries",
        "mosquito-repellent",
        "cut-peeled-veggies",
        "pickle",
        "brownies",
        "margarine",
        "soya-milk",
        "fresh-fish",
        "cloth-dryer-iron-table",
        "gift-wrap",
        "farm-eggs",
        "detergent-bar",
        "battery-electricals"
      ],
      "is_physical": true,
      "id": "5efc43b13b4ca00001328666"
    },
    {
      "description": "This is the file validation template for the Home & Living Department",
      "name": "Home & Living",
      "slug": "home-living",
      "departments": [
        "home-living"
      ],
      "categories": [
        "slippers",
        "chairs",
        "table",
        "beds",
        "vases",
        "bed-sheets",
        "dining-table",
        "blankets",
        "bath-robe",
        "bathing-accessories",
        "napkins",
        "hanger",
        "lunch-box",
        "photo-frame",
        "toiletry-bag",
        "pillow",
        "cup-saucer",
        "pet-collar-charm",
        "alarm-clocks",
        "dessert-plates",
        "vintage-clocks",
        "tissue-holder",
        "flush-mount-lights",
        "jewellery-box-stands",
        "desk-accessories",
        "serving-sets",
        "cake-stands",
        "bath-towel",
        "cutlery",
        "knives",
        "knives-holder",
        "pillow-covers",
        "placemats",
        "saucer",
        "coasters",
        "tea-sets",
        "forks",
        "shower-curtains",
        "serving-bowls",
        "soap-dispensers",
        "spoons",
        "bath-mats",
        "table-runner",
        "bed-covers",
        "tea-coffee-accessories",
        "coverlets",
        "soap-dishes",
        "duvet",
        "bed-sheets-sets",
        "duvet-cover",
        "bolster-pillows",
        "quilts-rajais",
        "mattress",
        "bed-linen-set",
        "candles",
        "clothes-storage",
        "shoe-racks",
        "cushion-fillers",
        "scented-candles",
        "art-pieces",
        "key-holder",
        "planters",
        "showpieces",
        "decals-stickers",
        "mirrors",
        "clocks",
        "coffee-tables",
        "dining-benches",
        "ottoman",
        "artificial-flowers",
        "dining-chair",
        "dining-table-set",
        "drapery",
        "console-table",
        "baking-mould",
        "cup",
        "dohars",
        "cushion-covers",
        "fountains",
        "comforters",
        "mugs",
        "flowerpot",
        "cushions",
        "decorative-objects",
        "napkin-holder",
        "trays",
        "table-cloth",
        "tea-cosy",
        "shower-caps",
        "shower-mats",
        "bed-skirts",
        "wardrobe-organisers",
        "mattress-protectors",
        "pillow-protectors",
        "tea-light-candles",
        "sculptures",
        "faux-plants",
        "vintage-finds",
        "wall-art",
        "dressing-tables",
        "benches",
        "sofas",
        "storage-trunks",
        "curtains",
        "side-table",
        "pillow-shams",
        "wind-chimes",
        "candle-holders",
        "cheese-boards",
        "serving-platters",
        "pitchers",
        "drinking-glasses",
        "pet-collar",
        "bathroom-faucets",
        "lamp-bases",
        "wreath",
        "pendant-lamps",
        "hearth-fireplace",
        "sconces",
        "succulents-plants",
        "fireplace-screens",
        "garlands",
        "electric-fireplaces",
        "storage-boxes",
        "elecrtonics-tech-accessories",
        "diffusers",
        "potpourri",
        "throws",
        "ceiling-lights",
        "pet-feeding-bowl",
        "chandeliers",
        "carpets",
        "salad-plates",
        "room-partitions",
        "bar-accessories",
        "decorative-lights",
        "hand-towel",
        "lamp-shades",
        "face-towel",
        "study-table-lamps",
        "floor-runner",
        "wall-lamps",
        "frying-pan",
        "door-mats",
        "carafe",
        "dinner-plates",
        "snifter",
        "dinner-set",
        "peg-measure",
        "platters",
        "shot-bottles",
        "bathroom-caddy",
        "vinegar-dispenser",
        "toilet-brush-holder",
        "cutlery-holder",
        "toothbrush-holder",
        "kitchen-trolly",
        "stemware",
        "measuring-cup",
        "baking-tray",
        "strainer",
        "stew-pan",
        "whisk",
        "cocktail-shaker",
        "flask",
        "food-container",
        "string-lights",
        "bottle-holder",
        "poufs",
        "chopping-board",
        "fireplace-tools",
        "dish-rack",
        "log-racks-holders",
        "ladle",
        "aroma-oils",
        "peeler",
        "incense-sticks-holders",
        "tongs",
        "incense-sticks",
        "kettle",
        "kulladhs",
        "table-linen-set",
        "handbag-organiser",
        "upholstery",
        "laundry-bag",
        "floor-lamps",
        "magazine-organiser",
        "lighting-accessories",
        "makeup-organiser",
        "table-lamps",
        "shelf-liner",
        "rugs-dhurries",
        "shoes-organiser",
        "sweater-bag",
        "bowls",
        "decanters",
        "garbage-bag",
        "beach-towel",
        "bookcase",
        "towel-set",
        "pool-table",
        "bath-rug",
        "poker-table",
        "shower-holder",
        "table-tennis",
        "towel-holder",
        "bar-counter-stools",
        "bath-mirror",
        "bar-carts",
        "towel-rod",
        "bar-furniture",
        "floor-mats",
        "bedside-table",
        "kadhai",
        "foundations",
        "sauce-pan",
        "pillow-inserts",
        "tawa",
        "bathroom-vanities",
        "cocktail-set",
        "lounging-relaxing-furniture",
        "canister",
        "oil-dispenser",
        "salt-pepper-shakers",
        "spatula",
        "casserole",
        "handi",
        "glasses",
        "kitchen-linen-set",
        "wardrobe-organiser",
        "jewellery-organiser",
        "separators",
        "closet-storage",
        "garbage-bag-holder",
        "hooks",
        "foosball-table",
        "board-game",
        "wall-shelves",
        "media-furniture",
        "file-cabinets",
        "leather-furniture",
        "buffets-sidebars",
        "mattress-pads",
        "wastebaskets",
        "hampers-baskets",
        "outdoor-dining-furniture",
        "entry-furniture",
        "water-jugs",
        "table-covers",
        "lanterns",
        "desk-organiser",
        "drawer-organiser",
        "suit-organiser",
        "swab-storage",
        "tote-basket",
        "hanger-holder",
        "cabinet",
        "hockey-table",
        "shuffleboard",
        "game-accessories",
        "desk",
        "office-chairs",
        "dining-storage",
        "kitchen-island",
        "nightstands",
        "duvet-inserts",
        "mattress-toppers",
        "medicine-cabinets",
        "bathroom-hardware-accessories",
        "salt-pepper-grinders",
        "water-bottle"
      ],
      "attributes": [
        "occasion",
        "collection",
        "color",
        "material",
        "product_type",
        "bed_size",
        "utility",
        "quality",
        "pattern",
        "filling",
        "shape",
        "sheet-type",
        "sheet_size",
        "thread_count",
        "product-dimensions",
        "pocket_depth",
        "group-id",
        "variation-type",
        "variation-based-on",
        "capacity",
        "dishwasher_safe",
        "microwave_safe",
        "oven_safe",
        "additional-features",
        "care_instructions",
        "package_contents",
        "sales_package",
        "warranty_type",
        "warranty_description",
        "gst-inclusive",
        "gst-if-exclusive",
        "fragile",
        "manufacturer-packer-importer-name",
        "manufacturer-packer-importer-address"
      ],
      "banner": "https://hdn-1.fynd.com/seller/pictures/landscape-banner/original/EHRCqs_DEFAULT-BANNER_LANDSCAPE.jpgc596e149-f6e1-4695-9446-9a8b88797d4c/EHRCqs_DEFAULT-BANNER_LANDSCAPE.jpg",
      "logo": "https://hdn-1.fynd.com/seller/pictures/logo/original/UAiJlq_0DEFAULT-LOGO.jpg25c9816d-2376-4eaf-b4ab-accb37e9a564/UAiJlq_0DEFAULT-LOGO.jpg",
      "is_physical": true,
      "id": "5f05acfa44a2e55081728be2"
    },
    {
      "categories": [
        "3-ply-box",
        "5-ply-box",
        "7-ply-box",
        "9-ply-box",
        "bubble-roll",
        "card-board-roll",
        "courier-bag",
        "courier-pouch",
        "die-cut-box",
        "double-side-tape",
        "drawer-box",
        "duct-tape",
        "filament-tape",
        "laminated-box",
        "packaging-tape",
        "poly-bag",
        "printed-tape",
        "reusable-bag",
        "seal-bags",
        "stretch-wrap",
        "suit-box",
        "zip-lock-bags",
        "box"
      ],
      "name": "Industrial Supplies",
      "banner": "https://hdn-1.fynd.com/seller/pictures/landscape-banner/original/9DpMn3_Beauty_&_Personal_Care_L.jpg80d89967-9c2c-498b-a79c-d176b3e71ea5/9DpMn3_Beauty_and_Personal_Care_L.jpg",
      "slug": "industrial-supplies",
      "attributes": [
        "color",
        "primary_color",
        "style",
        "features",
        "safety_warning",
        "is_flammable",
        "water_resistant",
        "product_details",
        "package_contents",
        "essential",
        "pallet"
      ],
      "logo": "https://hdn-1.fynd.com/seller/pictures/logo/original/I2NV2c_indi.jpg2eaf85b5-8076-4b0b-8f01-f119d6d8b559/I2NV2c_indi.jpg",
      "departments": [
        "industrial-supplies"
      ],
      "description": "Products used for business and industrial manufacturing process comes under this category. Example: Packaging Material",
      "modified_by": {
        "username": "meghagolecha_fynd_com_89167",
        "user_id": "23244269"
      },
      "modified_on": "2020-08-20T19:12:26.040000Z",
      "is_active": true,
      "is_physical": true,
      "id": "5f11eced5ca7f90001685a70"
    }
  ]
}
```
</details>









---


### listProductTemplateCategories
List Department specifiec product categories



```javascript
// Promise
const promise = client.catalog.listProductTemplateCategories({  departments : value,
 itemType : value });

// Async/Await
const data = await client.catalog.listProductTemplateCategories({  departments : value,
 itemType : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| departments | string | yes | A `department` is name of a departments whose category needs to be listed. Can specify multiple departments. |   
| itemType | string | yes | An `item_type` is the type of item, it can be `set`, `standard`, `digital`, etc. |  



Allows you to list all product categories values for the departments specified

*Returned Response:*




[ProdcutTemplateCategoriesResponse](#ProdcutTemplateCategoriesResponse)

List of all categories attached to departments specified. See example below or refer `ProdcutTemplateCategoriesResponse` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "page": {},
  "items": []
}
```
</details>









---


### listProductTemplateExportDetails
Allows you to list all product templates export list details



```javascript
// Promise
const promise = client.catalog.listProductTemplateExportDetails();

// Async/Await
const data = await client.catalog.listProductTemplateExportDetails();
```






Can view details including trigger data, task id , etc.

*Returned Response:*




[ProductDownloadsResponse](#ProductDownloadsResponse)

List of Product Downloads Data. See example below or refer `ProductDownloadsResponse` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "page": {},
  "items": [
    {
      "created_by": {
        "username": "917972410891_48194",
        "user_id": "5646"
      },
      "data": {
        "type": "csv",
        "brand": [
          "ruosh"
        ],
        "templates": [
          "mobile-phones-and-tablet"
        ]
      },
      "status": "success",
      "task_id": "c4b54ace-44ef-11eb-9806-1ef9bc4a2da1",
      "template_tags": {
        "mobile-phones-and-tablet": {
          "display": "Mobile Phones & Tablet",
          "logo": "https://hdn-1.jiox0.de/jiox0/seller/pictures/logo/original/Oda39B_99946594-portable-devices-with-tablet-and-mobile-phone-vector-icon-for-apps-and-websites.jpgcc2dff44-7fae-4002-9ebe-d2b59c8bee91/Oda39B_99946594-portable-devices-with-tablet-and-mobile-phone-vector-icon-for-apps-and-websites.jpg"
        }
      },
      "trigger_on": "2020-12-23T07:23:35.302000Z",
      "seller_id": 3,
      "completed_on": "2020-12-23T07:23:41.031000Z",
      "url": "https://regrowth.s3.amazonaws.com/slingshot-catalogues/seller-catalog/3/c4b54ace-44ef-11eb-9806-1ef9bc4a2da1/c4b54ace-44ef-11eb-9806-1ef9bc4a2da1.zip",
      "id": "5fe2f077516d980001880943"
    }
  ]
}
```
</details>









---


### listTemplateBrandTypeValues
Allows you to list all values for Templates, Brands or Type



```javascript
// Promise
const promise = client.catalog.listTemplateBrandTypeValues({  filter : value,
 templateTag : value,
 itemType : value });

// Async/Await
const data = await client.catalog.listTemplateBrandTypeValues({  filter : value,
 templateTag : value,
 itemType : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| filter | string | yes | A `filter` is the unique identifier of the type of value required. |    
| templateTag | string | no | A `template_tag` is the identifier of the type of template required. |    
| itemType | string | no | A `item_type` is the identifier of the type of template required. |  



The filter type query parameter defines what type of data to return. The type of query returns the valid values for the same

*Returned Response:*




[ProductConfigurationDownloads](#ProductConfigurationDownloads)

See example below or refer `ProductConfigurationDownloadsSchema` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "data": [
    {
      "display": "csv",
      "value": "csv"
    },
    {
      "display": "excel",
      "value": "excel"
    }
  ],
  "multivalue": false
}
```
</details>









---


### updateAllowSingle
Update allow single flag for filters of the application.



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").catalog.updateAllowSingle({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").catalog.updateAllowSingle({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [AllowSingleRequest](#AllowSingleRequest) | yes | Request body |


Update allow single flag for filters of the application.

*Returned Response:*




[ConfigSuccessResponse](#ConfigSuccessResponse)

success message will tell whether the operation was successful.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### updateAppBrand
Update a single custom json.



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").catalog.updateAppBrand({  brandUid : value,
 body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").catalog.updateAppBrand({  brandUid : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| brandUid | string | yes | brand id for which the custom_json is associated. |  
| body | [ApplicationBrandJson](#ApplicationBrandJson) | yes | Request body |


This API helps to update data associated to a item custom meta.

*Returned Response:*




[SuccessResponse1](#SuccessResponse1)

Returns a success response




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true
}
```
</details>









---


### updateAppCategory
Update a single custom json.



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").catalog.updateAppCategory({  categoryUid : value,
 body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").catalog.updateAppCategory({  categoryUid : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| categoryUid | string | yes | category id for which the custom_json is associated. |  
| body | [ApplicationCategoryJson](#ApplicationCategoryJson) | yes | Request body |


This API helps to update data associated to a item custom meta.

*Returned Response:*




[SuccessResponse1](#SuccessResponse1)

Returns a success response




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true
}
```
</details>









---


### updateAppDepartment
Update a single custom json.



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").catalog.updateAppDepartment({  departmentUid : value,
 body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").catalog.updateAppDepartment({  departmentUid : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| departmentUid | string | yes | department id for which the custom_json is associated. |  
| body | [ApplicationDepartmentJson](#ApplicationDepartmentJson) | yes | Request body |


This API helps to update data associated to a item custom meta.

*Returned Response:*




[SuccessResponse1](#SuccessResponse1)

Returns a success response




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true
}
```
</details>









---


### updateAppLocation
Update a single custom json.



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").catalog.updateAppLocation({  storeUid : value,
 body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").catalog.updateAppLocation({  storeUid : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| storeUid | string | yes | store id for which the custom_json is associated. |  
| body | [ApplicationStoreJson](#ApplicationStoreJson) | yes | Request body |


This API helps to update data associated to a item custom meta.

*Returned Response:*




[SuccessResponse1](#SuccessResponse1)

Returns a success response




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true
}
```
</details>









---


### updateAppProduct
Update a single custom meta.



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").catalog.updateAppProduct({  itemId : value,
 body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").catalog.updateAppProduct({  itemId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| itemId | string | yes | product id for which the custom_meta is associated. |  
| body | [ApplicationItemMeta](#ApplicationItemMeta) | yes | Request body |


This API helps to update data associated to a item custom meta.

*Returned Response:*




[SuccessResponse1](#SuccessResponse1)

Returns a success response




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true
}
```
</details>









---


### updateAutocompleteKeyword
Create & Update Autocomplete Keyword



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").catalog.updateAutocompleteKeyword({  id : value,
 body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").catalog.updateAutocompleteKeyword({  id : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to delete. |  
| body | [CreateAutocompleteKeyword](#CreateAutocompleteKeyword) | yes | Request body |


Update a mapping by it's id. On successful request, returns the updated Keyword mapping

*Returned Response:*




[GetAutocompleteWordsResponse](#GetAutocompleteWordsResponse)

The Mapping object. See example below or refer `GetAutocompleteWordsResponseSchema` for details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### updateCategory
Update product categories



```javascript
// Promise
const promise = client.catalog.updateCategory({  uid : value,
 body : value });

// Async/Await
const data = await client.catalog.updateCategory({  uid : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| uid | string | yes | Category unique id |  
| body | [CategoryRequestBody](#CategoryRequestBody) | yes | Request body |


Update a product category using this apu

*Returned Response:*




[CategoryUpdateResponse](#CategoryUpdateResponse)

Category Meta. See example below or refer `CategoryUpdateResponse` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### updateCollection
Update a collection



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").catalog.updateCollection({  id : value,
 body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").catalog.updateCollection({  id : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | A `id` is a unique identifier of a collection. |  
| body | [UpdateCollection](#UpdateCollection) | yes | Request body |


Update a collection by it's id. On successful request, returns the updated collection

*Returned Response:*




[UpdateCollection](#UpdateCollection)

The Collection object. See example below or refer `UpdateCollectionSchema` for details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "uid": "604f585a7051e30001173ac1",
  "type": "query",
  "query": {},
  "name": "New",
  "banners": {
    "portrait": {
      "type": "image",
      "url": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1588858137/production/applications/app_000000000000000000000001/media/collection/portrait/xzuftshmmw4yuwzb12pm.png"
    },
    "landscape": {
      "type": "image",
      "url": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1588857999/production/applications/app_000000000000000000000001/media/collection/landscape/avm7xibo2jgk8glc4bwl.png"
    }
  },
  "logo": {
    "type": "image",
    "url": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1588857854/production/applications/app_000000000000000000000001/media/collection/logo/w9ns7nfgv7fk45xqrpoh.png"
  },
  "published": true,
  "description": "",
  "is_active": true,
  "tags": [],
  "slug": "new",
  "action": {
    "page": {
      "type": "collection",
      "query": {
        "collection": [
          "new"
        ]
      }
    },
    "type": "page"
  },
  "allow_facets": true,
  "allow_sort": true,
  "visible_facets_keys": [],
  "meta": {},
  "badge": {
    "color": "#ffffff",
    "text": ""
  },
  "sort_on": "depth_desc",
  "_custom_json": {},
  "_locale_language": {},
  "_schedule": {
    "start": "2021-03-15T12:51:21.333000+00:00Z",
    "next_schedule": [
      {
        "start": "2021-03-15T12:51:21.333000+00:00Z",
        "end": null
      }
    ],
    "end": null
  },
  "seo": {
    "title": "Test",
    "description": "Test description"
  }
}
```
</details>









---


### updateDefaultSort
Update the default sort key configuration for the application.



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").catalog.updateDefaultSort({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").catalog.updateDefaultSort({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [DefaultKeyRequest](#DefaultKeyRequest) | yes | Request body |


Update the default sort key configuration for the application.

*Returned Response:*




[ConfigSuccessResponse](#ConfigSuccessResponse)

success message will tell whether the operation was successful.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### updateDepartment
Update the department by their uid.



```javascript
// Promise
const promise = client.catalog.updateDepartment({  uid : value,
 body : value });

// Async/Await
const data = await client.catalog.updateDepartment({  uid : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| uid | string | yes | A `uid` is a unique identifier of a department. |  
| body | [DepartmentCreateUpdate](#DepartmentCreateUpdate) | yes | Request body |


Update the department by their uid using this API.

*Returned Response:*




[DepartmentModel](#DepartmentModel)

Success Response. See example below or refer `DepartmentCreateResponseSchema` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "is_active": true,
  "name": "Fashion",
  "slug": "fashion",
  "priority_order": 1,
  "logo": "https://hdn-1.addsale.com/x0/department/pictures/square-logo/original/xKDsQBbu4-department.png",
  "synonyms": [
    "fashion",
    "mensfashion"
  ],
  "uid": 2,
  "modified_by": {
    "username": "31315573458_05620",
    "user_id": "f5b6a546565146sdfg584c342"
  },
  "modified_on": "2022-08-09T15:44:02.540740"
}
```
</details>









---


### updateGroupConfiguration
Update the group configurations for the application.



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").catalog.updateGroupConfiguration({  configType : value,
 groupSlug : value,
 body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").catalog.updateGroupConfiguration({  configType : value,
 groupSlug : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| configType | string | yes | A `config_type` is a unique identifier for a particular group configuration type. |   
| groupSlug | string | yes | A `group_slug` is a unique identifier of a particular configuration. |  
| body | [AppConfigurationDetail](#AppConfigurationDetail) | yes | Request body |


Update the group configurations for the application.

*Returned Response:*




[AppConfigurationDetail](#AppConfigurationDetail)

success flag will tell whether the operation was successful.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "is_active": true,
  "template_slugs": [
    "bags"
  ],
  "priority": 1,
  "slug": "test15",
  "name": "test",
  "app_id": "5d64e3500bcad8693a821c0d",
  "is_default": false,
  "attributes": [
    {
      "is_active": true,
      "priority": 1,
      "slug": "features",
      "name": "Features",
      "key": "features",
      "display_type": "text"
    }
  ],
  "id": "62b1cdab15c88fa867ee4dac"
}
```
</details>









---


### updateHsnCode
Update Hsn Code.



```javascript
// Promise
const promise = client.catalog.updateHsnCode({  id : value,
 body : value });

// Async/Await
const data = await client.catalog.updateHsnCode({  id : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | Unique id |  
| body | [HsnUpsert](#HsnUpsert) | yes | Request body |


Update Hsn Code.

*Returned Response:*




[HsnCode](#HsnCode)

See example below for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "data": {
    "company_id": 1,
    "hs2_code": "xx",
    "modified_by": {
      "username": "narutouzumaki",
      "user_id": "0"
    },
    "id": "xxxxxxxxxxxx",
    "tax_on": "esp",
    "slabs": [
      {
        "tax": 0,
        "threshold": 999999
      },
      {
        "tax": 0,
        "threshold": 0
      }
    ],
    "hsn_code": "xxxxxxxx"
  }
}
```
</details>









---


### updateInventories
Add Inventory for particular size and store.



```javascript
// Promise
const promise = client.catalog.updateInventories({  body : value });

// Async/Await
const data = await client.catalog.updateInventories({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [InventoryRequestSchemaV2](#InventoryRequestSchemaV2) | yes | Request body |


This API allows add Inventory for particular size and store.

*Returned Response:*




[InventoryUpdateResponse](#InventoryUpdateResponse)

Returns a success or partial success response




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "message": "Partially Successful",
  "items": [
    {
      "reason": {
        "reason_code": 2005,
        "message": "Product not found"
      },
      "data": {
        "seller_identifier": "000000000490922067",
        "store_id": 124,
        "price_marked": 130,
        "price_effective": 109.01,
        "total_quantity": 34,
        "expiration_date": "9998-01-30T23:59:00"
      }
    },
    {
      "reason": {
        "reason_code": 2004,
        "message": "Size not found"
      },
      "data": {
        "seller_identifier": "000000000490922067",
        "store_id": 124,
        "price_marked": 130,
        "price_effective": 109.01,
        "total_quantity": 34,
        "expiration_date": "9998-01-30T23:59:00"
      }
    }
  ]
}
```
</details>









---


### updateListingConfiguration
Update configuration for listings



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").catalog.updateListingConfiguration({  configType : value,
 configId : value,
 body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").catalog.updateListingConfiguration({  configType : value,
 configId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| configType | string | yes | A `config_type` is a unique identifier for a particular listing configuration type. |   
| configId | string | yes | A `config_id` is a unique identifier of a particular configuration. |  
| body | [AppConfigurationsSort](#AppConfigurationsSort) | yes | Request body |


Update configuration for listing.

*Returned Response:*




[AppConfigurationsSort](#AppConfigurationsSort)

success flag will tell whether the operation was successful.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "app_id": "5d64e3500bcad8693a821c0d",
  "key": "latest",
  "default_key": "latest",
  "is_active": true,
  "is_default": false,
  "name": "Latest",
  "priority": 1,
  "id": "6250568de404abd533db571d"
}
```
</details>









---


### updateProductBundle
Update a Product Bundle



```javascript
// Promise
const promise = client.catalog.updateProductBundle({  id : value,
 body : value });

// Async/Await
const data = await client.catalog.updateProductBundle({  id : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to delete. |  
| body | [ProductBundleUpdateRequest](#ProductBundleUpdateRequest) | yes | Request body |


Update a Product Bundle by its id. On successful request, returns the updated product bundle

*Returned Response:*




[GetProductBundleCreateResponse](#GetProductBundleCreateResponse)

The Collection object. See example below or refer `GetProductBundleCreateResponse` for details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "slug": "bag",
  "logo": "http://g.com/poo.png/",
  "name": "Bag",
  "choice": "multi",
  "products": [
    {
      "product_uid": 7500001,
      "max_quantity": 1,
      "min_quantity": 1,
      "auto_add_to_cart": false,
      "auto_select": false,
      "allow_remove": true
    }
  ],
  "meta": {},
  "same_store_assignment": true,
  "is_active": true,
  "page_visibility": [
    "pdp"
  ],
  "created_by": {
    "username": "917827311650_22960",
    "uid": "123"
  },
  "company_id": 1,
  "created_on": "2021-02-19 16:40:26.310007",
  "modified_by": {
    "username": "917827311650_22960",
    "uid": "123"
  },
  "modified_on": "2021-02-19 16:40:26.310027",
  "id": "602f9ca2a596ce312f5956f9"
}
```
</details>









---


### updateRealtimeInventory
Add Inventory for particular size and store.



```javascript
// Promise
const promise = client.catalog.updateRealtimeInventory({  itemId : value,
 sellerIdentifier : value,
 body : value });

// Async/Await
const data = await client.catalog.updateRealtimeInventory({  itemId : value,
 sellerIdentifier : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| itemId | number | yes | Item code of the product of which size is to be get. |   
| sellerIdentifier | string | yes | Size Identifier (Seller Identifier or Primary Identifier) of which inventory is to get. |  
| body | [InventoryRequestSchemaV2](#InventoryRequestSchemaV2) | yes | Request body |


This API allows add Inventory for particular size and store.

*Returned Response:*




[InventoryUpdateResponse](#InventoryUpdateResponse)

Returns a success response




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "message": "Partially Successful",
  "items": [
    {
      "reason": {
        "reason_code": 2005,
        "message": "Product not found"
      },
      "data": {
        "seller_identifier": "000000000490922067",
        "store_id": 124,
        "price_marked": 130,
        "price_effective": 109.01,
        "total_quantity": 34,
        "expiration_date": "9998-01-30T23:59:00"
      }
    },
    {
      "reason": {
        "reason_code": 2004,
        "message": "Size not found"
      },
      "data": {
        "seller_identifier": "000000000490922067",
        "store_id": 124,
        "price_marked": 130,
        "price_effective": 109.01,
        "total_quantity": 34,
        "expiration_date": "9998-01-30T23:59:00"
      }
    }
  ]
}
```
</details>









---


### updateSearchKeywords
Update Search Keyword



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").catalog.updateSearchKeywords({  id : value,
 body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").catalog.updateSearchKeywords({  id : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to delete. |  
| body | [CreateSearchKeyword](#CreateSearchKeyword) | yes | Request body |


Update Search Keyword by its id. On successful request, returns the updated collection

*Returned Response:*




[GetSearchWordsData](#GetSearchWordsData)

The Collection object. See example below or refer `GetSearchWordsDataSchema` for details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### updateSizeGuide
Edit a size guide.



```javascript
// Promise
const promise = client.catalog.updateSizeGuide({  id : value,
 body : value });

// Async/Await
const data = await client.catalog.updateSizeGuide({  id : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | Mongo id of the size guide to be edited |  
| body | [ValidateSizeGuide](#ValidateSizeGuide) | yes | Request body |


This API allows to edit a size guide.

*Returned Response:*




[SuccessResponse](#SuccessResponse)

Returns a success response




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true
}
```
</details>









---


### uploadBulkProducts
Create a Bulk product to upload job.



```javascript
// Promise
const promise = client.catalog.uploadBulkProducts({  department : value,
 productType : value,
 body : value });

// Async/Await
const data = await client.catalog.uploadBulkProducts({  department : value,
 productType : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| department | string | yes | Department of the product to be uploaded. |   
| productType | string | yes | Product type of the product to be uploaded i.e. set, standard , digital. |  
| body | [BulkJob](#BulkJob) | yes | Request body |


This API helps to create a bulk products upload job.

*Returned Response:*




[BulkResponse](#BulkResponse)

Returns a success response




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "batch_id": "507f1f77bcf86cd799439011"
}
```
</details>









---


### validateProductTemplate
Validate Product Template Schema



```javascript
// Promise
const promise = client.catalog.validateProductTemplate({  slug : value });

// Async/Await
const data = await client.catalog.validateProductTemplate({  slug : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| slug | string | yes | A `slug` is a unique identifier for a particular template. |  



Allows you to list all product templates validation values for all the fields present in the database

*Returned Response:*




[TemplatesValidationResponse](#TemplatesValidationResponse)

List of fields and validation values fro each. See example below or refer `TemplatesValidationResponse` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
null
```
</details>









---


### validateProductTemplateSchema
Validate Product Template Schema



```javascript
// Promise
const promise = client.catalog.validateProductTemplateSchema({  itemType : value });

// Async/Await
const data = await client.catalog.validateProductTemplateSchema({  itemType : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| itemType | string | yes | An `item_type` defines the type of item. The default value is standard. |  



Allows you to list all product templates validation values for all the fields present in the database

*Returned Response:*




[InventoryValidationResponse](#InventoryValidationResponse)

List of fields and validation values fro each. See example below or refer `InventoryValidationResponse` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "data": {
    "title": "InventoryValidationResponse",
    "type": "object",
    "properties": {
      "item": {
        "$ref": ""
      },
      "sizes": {
        "title": "Sizes",
        "type": "array",
        "items": {
          "$ref": ""
        }
      }
    },
    "required": [
      "item",
      "sizes"
    ],
    "definitions": {
      "ItemQuery": {
        "title": "ItemQuery",
        "type": "object",
        "properties": {
          "uid": {
            "title": "Uid",
            "type": "integer"
          },
          "brand_uid": {
            "title": "Brand Uid",
            "type": "integer"
          },
          "item_code": {
            "title": "Item Code",
            "type": "integer"
          }
        }
      },
      "InventoryBaseSchema": {
        "title": "InventoryBaseSchema",
        "type": "object",
        "properties": {
          "price": {
            "title": "Actual Price",
            "exclusiveMinimum": 1,
            "type": "number"
          },
          "price_effective": {
            "title": "Selling Price",
            "exclusiveMinimum": 1,
            "type": "number"
          },
          "seller_identifier": {
            "title": "Gtin Value",
            "pattern": "^[A-Za-z0-9]*$",
            "type": "string"
          },
          "quantity": {
            "title": "Quantity",
            "minimum": 0,
            "type": "integer"
          },
          "store_code": {
            "title": "Store Code",
            "type": "string",
            "enum": [
              "RUOSH43",
              "S106",
              "S108",
              "TIO9",
              "talha"
            ]
          },
          "currency": {
            "title": "Currency",
            "enum": [
              "INR",
              "QAR"
            ],
            "type": "string"
          },
          "size": {
            "title": "Size",
            "type": "string"
          }
        },
        "required": [
          "price",
          "price_effective",
          "seller_identifier",
          "quantity",
          "store_code",
          "currency",
          "size"
        ]
      }
    }
  },
  "message": "Success"
}
```
</details>









---



### Schemas


#### [Action](#Action)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || page | [ActionPage](#ActionPage) |  no  |  || type | string |  no  |  |

---

#### [ActionPage](#ActionPage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || query | string |  no  |  || type | string |  no  |  |

---

#### [AllowSingleRequest](#AllowSingleRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || allow_single | boolean |  yes  |  |

---

#### [AllSizes](#AllSizes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || identifiers | [[ValidateIdentifier](#ValidateIdentifier)] |  no  |  || item_dimensions_unit_of_measure | string |  yes  |  || item_height | number |  yes  |  || item_length | number |  yes  |  || item_weight | number |  yes  |  || item_weight_unit_of_measure | string |  yes  |  || item_width | number |  yes  |  || size | string |  yes  |  |

---

#### [AppCatalogConfiguration](#AppCatalogConfiguration)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || app_id | string |  yes  |  || config_id | string |  no  |  || config_type | string |  yes  |  || created_by | string |  no  |  || created_on | string |  no  |  || id | string |  no  |  || listing | [ConfigurationListing](#ConfigurationListing) |  no  |  || modified_by | string |  no  |  || modified_on | string |  no  |  || product | [ConfigurationProduct](#ConfigurationProduct) |  no  |  || type | string |  no  |  |

---

#### [AppConfiguration](#AppConfiguration)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || app_id | string |  yes  |  || config_id | string |  no  |  || config_type | string |  yes  |  || created_by | string |  no  |  || created_on | string |  no  |  || listing | [ConfigurationListing](#ConfigurationListing) |  no  |  || modified_by | string |  no  |  || modified_on | string |  no  |  || product | [ConfigurationProduct](#ConfigurationProduct) |  no  |  || type | string |  no  |  |

---

#### [AppConfigurationDetail](#AppConfigurationDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || app_id | string |  yes  |  || attributes | [[AttributeDetailsGroup](#AttributeDetailsGroup)] |  no  |  || is_active | boolean |  yes  |  || is_default | boolean |  yes  |  || logo | string |  no  |  || name | string |  no  |  || priority | number |  yes  |  || slug | string |  yes  |  || template_slugs | [string] |  no  |  |

---

#### [AppConfigurationsSort](#AppConfigurationsSort)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || app_id | string |  yes  |  || default_key | string |  yes  |  || is_active | boolean |  yes  |  || is_default | boolean |  yes  |  || key | string |  yes  |  || logo | string |  no  |  || name | string |  no  |  || priority | number |  yes  |  |

---

#### [ApplicationBrandJson](#ApplicationBrandJson)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || _custom_json | string |  yes  |  |

---

#### [ApplicationCategoryJson](#ApplicationCategoryJson)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || _custom_json | string |  yes  |  |

---

#### [ApplicationDepartment](#ApplicationDepartment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || _custom_json | string |  no  |  || app_id | string |  yes  |  || is_active | boolean |  no  |  || logo | string |  no  |  || name | string |  no  |  || uid | number |  yes  |  |

---

#### [ApplicationDepartmentJson](#ApplicationDepartmentJson)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || _custom_json | string |  yes  |  |

---

#### [ApplicationDepartmentListingResponse](#ApplicationDepartmentListingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || items | [[ApplicationDepartment](#ApplicationDepartment)] |  no  |  || page | [Page](#Page) |  yes  |  |

---

#### [ApplicationItemMeta](#ApplicationItemMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || _custom_json | string |  no  |  || _custom_meta | [[MetaFields](#MetaFields)] |  no  |  || alt_text | string |  no  |  || is_cod | boolean |  no  |  || is_gift | boolean |  no  |  || moq | [ApplicationItemMOQ](#ApplicationItemMOQ) |  no  |  || seo | [ApplicationItemSEO](#ApplicationItemSEO) |  no  |  |

---

#### [ApplicationItemMOQ](#ApplicationItemMOQ)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || increment_unit | number |  no  |  || maximum | number |  no  |  || minimum | number |  no  |  |

---

#### [ApplicationItemSEO](#ApplicationItemSEO)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || description | string |  no  |  || title | string |  no  |  |

---

#### [ApplicationProductListingResponse](#ApplicationProductListingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || filters | [[ProductFilters](#ProductFilters)] |  no  |  || items | [[ProductListingDetail](#ProductListingDetail)] |  no  |  || operators | string |  no  |  || page | [Page](#Page) |  yes  |  || sort_on | [[ProductSortOn](#ProductSortOn)] |  no  |  |

---

#### [ApplicationStoreJson](#ApplicationStoreJson)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || _custom_json | string |  yes  |  |

---

#### [ArticleAssignment](#ArticleAssignment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || level | string |  no  |  || strategy | string |  no  |  |

---

#### [ArticleAssignment1](#ArticleAssignment1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || level | string |  no  |  || strategy | string |  no  |  |

---

#### [ArticleQuery](#ArticleQuery)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || ignored_stores | [number] |  no  |  || item_id | number |  yes  |  || size | string |  yes  |  |

---

#### [ArticleStoreResponse](#ArticleStoreResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || name | string |  no  |  || store_code | string |  no  |  || store_type | string |  no  |  || uid | number |  no  |  |

---

#### [AssignStore](#AssignStore)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || app_id | string |  yes  |  || articles | [[AssignStoreArticle](#AssignStoreArticle)] |  yes  |  || channel_identifier | string |  no  |  || channel_type | string |  no  |  || company_id | number |  no  |  || pincode | string |  yes  |  || store_ids | [number] |  no  |  |

---

#### [AssignStoreArticle](#AssignStoreArticle)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || article_assignment | [ArticleAssignment](#ArticleAssignment) |  no  |  || group_id | string |  no  |  || meta | string |  no  |  || quantity | number |  no  |  || query | [ArticleQuery](#ArticleQuery) |  no  |  |

---

#### [AttributeDetailsGroup](#AttributeDetailsGroup)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || display_type | string |  yes  |  || is_active | boolean |  yes  |  || key | string |  no  |  || logo | string |  no  |  || name | string |  yes  |  || priority | number |  yes  |  || slug | string |  no  |  || unit | string |  no  |  |

---

#### [AttributeMaster](#AttributeMaster)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || allowed_values | [string] |  no  |  || format | string |  no  |  || mandatory | boolean |  no  |  || multi | boolean |  no  |  || range | [AttributeSchemaRange](#AttributeSchemaRange) |  no  |  || type | string |  yes  |  |

---

#### [AttributeMasterDetails](#AttributeMasterDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || display_type | string |  yes  |  |

---

#### [AttributeMasterFilter](#AttributeMasterFilter)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || depends_on | [string] |  no  |  || indexing | boolean |  yes  |  || priority | number |  no  |  |

---

#### [AttributeMasterMandatoryDetails](#AttributeMasterMandatoryDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || l3_keys | [string] |  no  |  |

---

#### [AttributeMasterMeta](#AttributeMasterMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || enriched | boolean |  no  |  || mandatory_details | [AttributeMasterMandatoryDetails](#AttributeMasterMandatoryDetails) |  yes  |  |

---

#### [AttributeMasterSerializer](#AttributeMasterSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || created_by | string |  no  |  || created_on | string |  no  |  || departments | [string] |  yes  |  || description | string |  no  |  || details | [AttributeMasterDetails](#AttributeMasterDetails) |  yes  |  || enabled_for_end_consumer | boolean |  no  |  || filters | [AttributeMasterFilter](#AttributeMasterFilter) |  yes  |  || is_nested | boolean |  no  |  || logo | string |  no  |  || modified_by | string |  no  |  || modified_on | string |  no  |  || name | string |  no  |  || raw_key | string |  no  |  || schema | [AttributeMaster](#AttributeMaster) |  yes  |  || slug | string |  yes  |  || suggestion | string |  no  |  || synonyms | string |  no  |  || tags | [string] |  no  |  || unit | string |  no  |  || variant | boolean |  no  |  |

---

#### [AttributeSchemaRange](#AttributeSchemaRange)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || max | number |  no  |  || min | number |  no  |  |

---

#### [AutocompleteAction](#AutocompleteAction)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || page | [AutocompletePageAction](#AutocompletePageAction) |  no  |  || type | string |  no  |  |

---

#### [AutocompletePageAction](#AutocompletePageAction)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || params | string |  no  |  || query | string |  no  |  || type | string |  no  |  || url | string |  no  |  |

---

#### [AutocompleteResult](#AutocompleteResult)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || _custom_json | string |  no  |  || action | [AutocompleteAction](#AutocompleteAction) |  no  |  || display | string |  no  |  || logo | [Media](#Media) |  no  |  |

---

#### [BannerImage](#BannerImage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || aspect_ratio | string |  no  |  || type | string |  no  |  || url | string |  no  |  |

---

#### [Brand](#Brand)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || logo | [Logo](#Logo) |  no  |  || name | string |  no  |  || uid | number |  no  |  |

---

#### [BrandItem](#BrandItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || action | [Action](#Action) |  no  |  || banners | [ImageUrls](#ImageUrls) |  no  |  || departments | [string] |  no  |  || discount | string |  no  |  || logo | [Media](#Media) |  no  |  || name | string |  no  |  || slug | string |  no  |  || uid | number |  no  |  |

---

#### [BrandListingResponse](#BrandListingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || items | [[BrandItem](#BrandItem)] |  no  |  || page | [Page](#Page) |  yes  |  |

---

#### [BrandMeta](#BrandMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || id | number |  yes  |  || name | string |  yes  |  |

---

#### [BrandMeta1](#BrandMeta1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || id | number |  no  |  || name | string |  no  |  |

---

#### [BulkAssetResponse](#BulkAssetResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || items | [[Items](#Items)] |  no  |  || page | [Page](#Page) |  no  |  |

---

#### [BulkHsnResponse](#BulkHsnResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || success | boolean |  no  |  |

---

#### [BulkHsnUpsert](#BulkHsnUpsert)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || data | [[HsnUpsert](#HsnUpsert)] |  yes  |  |

---

#### [BulkInventoryGet](#BulkInventoryGet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || items | [[BulkInventoryGetItems](#BulkInventoryGetItems)] |  no  |  || page | [Page](#Page) |  no  |  |

---

#### [BulkInventoryGetItems](#BulkInventoryGetItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || cancelled | number |  no  |  || cancelled_records | [string] |  no  |  || company_id | number |  no  |  || created_by | string |  no  |  || created_on | string |  no  |  || failed | number |  no  |  || failed_records | [string] |  no  |  || file_path | string |  no  |  || id | string |  no  |  || is_active | boolean |  no  |  || modified_by | string |  no  |  || modified_on | string |  no  |  || stage | string |  no  |  || succeed | number |  no  |  || total | number |  no  |  |

---

#### [BulkJob](#BulkJob)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || cancelled | number |  no  |  || cancelled_records | [string] |  no  |  || company_id | number |  yes  |  || created_by | [UserInfo1](#UserInfo1) |  no  |  || created_on | string |  yes  |  || custom_template_tag | string |  no  |  || failed | number |  no  |  || failed_records | [string] |  no  |  || file_path | string |  no  |  || is_active | boolean |  no  |  || modified_by | [UserInfo1](#UserInfo1) |  no  |  || modified_on | string |  no  |  || stage | string |  no  |  || succeed | number |  no  |  || template_tag | string |  no  |  || total | number |  no  |  || tracking_url | string |  no  |  |

---

#### [BulkProductRequest](#BulkProductRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || batch_id | string |  yes  |  || company_id | number |  yes  |  || data | [string] |  yes  |  || template_tag | string |  yes  |  |

---

#### [BulkResponse](#BulkResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || batch_id | string |  yes  |  || created_by | [UserInfo1](#UserInfo1) |  no  |  || created_on | string |  yes  |  || is_active | boolean |  no  |  || modified_by | [UserInfo1](#UserInfo1) |  no  |  || modified_on | string |  no  |  |

---

#### [CatalogInsightBrand](#CatalogInsightBrand)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || article_freshness | number |  no  |  || available_articles | number |  no  |  || available_sizes | number |  no  |  || name | string |  no  |  || total_articles | number |  no  |  || total_sizes | number |  no  |  |

---

#### [CatalogInsightItem](#CatalogInsightItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || count | number |  no  |  || out_of_stock_count | number |  no  |  || sellable_count | number |  no  |  |

---

#### [CatalogInsightResponse](#CatalogInsightResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || brand_distribution | [CatalogInsightBrand](#CatalogInsightBrand) |  no  |  || item | [CatalogInsightItem](#CatalogInsightItem) |  no  |  |

---

#### [CategoriesResponse](#CategoriesResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || name | string |  no  |  || slug | string |  no  |  || slug_key | string |  no  |  || template_slug | string |  no  |  || uid | number |  no  |  |

---

#### [Category](#Category)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || created_by | string |  no  |  || created_on | string |  no  |  || departments | [number] |  yes  |  || hierarchy | [[Hierarchy](#Hierarchy)] |  no  |  || id | string |  no  |  || is_active | boolean |  yes  |  || level | number |  yes  |  || marketplaces | [CategoryMapping](#CategoryMapping) |  no  |  || media | [Media2](#Media2) |  no  |  || modified_by | string |  no  |  || modified_on | string |  no  |  || name | string |  yes  |  || priority | number |  no  |  || slug | string |  no  |  || synonyms | [string] |  no  |  || tryouts | [string] |  no  |  || uid | number |  no  |  |

---

#### [CategoryCreateResponse](#CategoryCreateResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || message | string |  no  |  || uid | number |  no  |  |

---

#### [CategoryItems](#CategoryItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || action | [Action](#Action) |  no  |  || banners | [ImageUrls](#ImageUrls) |  no  |  || childs | [[Child](#Child)] |  no  |  || name | string |  no  |  || slug | string |  no  |  || uid | number |  no  |  |

---

#### [CategoryListingResponse](#CategoryListingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || data | [[DepartmentCategoryTree](#DepartmentCategoryTree)] |  no  |  || departments | [[DepartmentIdentifier](#DepartmentIdentifier)] |  no  |  |

---

#### [CategoryMapping](#CategoryMapping)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || ajio | [CategoryMappingValues](#CategoryMappingValues) |  no  |  || facebook | [CategoryMappingValues](#CategoryMappingValues) |  no  |  || google | [CategoryMappingValues](#CategoryMappingValues) |  no  |  |

---

#### [CategoryMappingValues](#CategoryMappingValues)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || catalog_id | number |  no  |  || name | string |  yes  |  |

---

#### [CategoryRequestBody](#CategoryRequestBody)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || departments | [number] |  yes  |  || hierarchy | [[Hierarchy](#Hierarchy)] |  no  |  || is_active | boolean |  yes  |  || level | number |  yes  |  || marketplaces | [CategoryMapping](#CategoryMapping) |  no  |  || media | [Media2](#Media2) |  no  |  || name | string |  yes  |  || priority | number |  no  |  || slug | string |  no  |  || synonyms | [string] |  no  |  || tryouts | [string] |  no  |  |

---

#### [CategoryResponse](#CategoryResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || items | [[Category](#Category)] |  no  |  || page | [Page](#Page) |  no  |  |

---

#### [CategoryUpdateResponse](#CategoryUpdateResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || message | string |  no  |  || success | boolean |  no  |  |

---

#### [Child](#Child)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || _custom_json | string |  no  |  || action | [Action](#Action) |  no  |  || banners | [ImageUrls](#ImageUrls) |  no  |  || childs | [[SecondLevelChild](#SecondLevelChild)] |  no  |  || name | string |  no  |  || slug | string |  no  |  || uid | number |  no  |  |

---

#### [CollectionBadge](#CollectionBadge)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || color | string |  no  |  || text | string |  no  |  |

---

#### [CollectionBanner](#CollectionBanner)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || landscape | [CollectionImage](#CollectionImage) |  yes  |  || portrait | [CollectionImage](#CollectionImage) |  yes  |  |

---

#### [CollectionCreateResponse](#CollectionCreateResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || _schedule | string |  no  |  || allow_facets | boolean |  no  |  || allow_sort | boolean |  no  |  || app_id | string |  no  |  || badge | string |  no  |  || banners | [ImageUrls](#ImageUrls) |  no  |  || cron | string |  no  |  || description | string |  no  |  || is_active | boolean |  no  |  || logo | [BannerImage](#BannerImage) |  no  |  || meta | string |  no  |  || name | string |  no  |  || priority | number |  no  |  || query | [[CollectionQuery](#CollectionQuery)] |  no  |  || slug | string |  no  |  || sort_on | string |  no  |  || tag | [string] |  no  |  || type | string |  no  |  || visible_facets_keys | [string] |  no  |  |

---

#### [CollectionDetailResponse](#CollectionDetailResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || _schedule | string |  no  |  || allow_facets | boolean |  no  |  || allow_sort | boolean |  no  |  || app_id | string |  no  |  || badge | string |  no  |  || banners | [ImageUrls](#ImageUrls) |  no  |  || cron | string |  no  |  || description | string |  no  |  || is_active | boolean |  no  |  || logo | [Media1](#Media1) |  no  |  || meta | string |  no  |  || name | string |  no  |  || priority | number |  no  |  || query | [[CollectionQuery](#CollectionQuery)] |  no  |  || slug | string |  no  |  || tag | [string] |  no  |  || type | string |  no  |  || uid | string |  no  |  || visible_facets_keys | [string] |  no  |  |

---

#### [CollectionImage](#CollectionImage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || aspect_ratio | string |  yes  |  || url | string |  yes  |  |

---

#### [CollectionItem](#CollectionItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || action | string |  yes  |  || item_id | number |  yes  |  || priority | number |  no  |  |

---

#### [CollectionItemUpdate](#CollectionItemUpdate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || allow_facets | boolean |  no  |  || allow_sort | boolean |  no  |  || items | [[CollectionItem](#CollectionItem)] |  no  |  || query | [[CollectionQuery](#CollectionQuery)] |  no  |  || type | string |  no  |  || visible_facets_keys | [string] |  no  |  |

---

#### [CollectionListingFilter](#CollectionListingFilter)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || tags | [[CollectionListingFilterTag](#CollectionListingFilterTag)] |  no  |  || type | [[CollectionListingFilterType](#CollectionListingFilterType)] |  no  |  |

---

#### [CollectionListingFilterTag](#CollectionListingFilterTag)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || display | string |  no  |  || is_selected | boolean |  no  |  || name | string |  no  |  |

---

#### [CollectionListingFilterType](#CollectionListingFilterType)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || display | string |  no  |  || is_selected | boolean |  no  |  || name | string |  no  |  |

---

#### [CollectionQuery](#CollectionQuery)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || attribute | string |  yes  |  || op | string |  yes  |  || value | [any] |  yes  |  |

---

#### [CollectionSchedule](#CollectionSchedule)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || cron | string |  no  |  || duration | number |  no  |  || end | string |  no  |  || next_schedule | [[NextSchedule](#NextSchedule)] |  no  |  || start | string |  no  |  |

---

#### [CompanyBrandDetail](#CompanyBrandDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || brand_id | number |  no  |  || brand_name | string |  no  |  || company_id | number |  no  |  || total_article | number |  no  |  |

---

#### [CompanyMeta](#CompanyMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || id | number |  yes  |  |

---

#### [CompanyMeta1](#CompanyMeta1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || id | number |  no  |  |

---

#### [CompanyOptIn](#CompanyOptIn)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || brand_ids | [number] |  yes  |  || company_id | number |  yes  |  || created_by | string |  no  |  || created_on | number |  yes  |  || enabled | boolean |  yes  |  || modified_by | string |  no  |  || modified_on | number |  yes  |  || opt_level | string |  yes  |  || platform | string |  yes  |  || store_ids | [number] |  yes  |  |

---

#### [ConfigErrorResponse](#ConfigErrorResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || message | string |  yes  |  |

---

#### [ConfigSuccessResponse](#ConfigSuccessResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || message | string |  yes  |  |

---

#### [ConfigurationBucketPoints](#ConfigurationBucketPoints)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || display | string |  no  |  || end | number |  no  |  || start | number |  no  |  |

---

#### [ConfigurationListing](#ConfigurationListing)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || filter | [ConfigurationListingFilter](#ConfigurationListingFilter) |  yes  |  || sort | [ConfigurationListingSort](#ConfigurationListingSort) |  yes  |  |

---

#### [ConfigurationListingFilter](#ConfigurationListingFilter)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || allow_single | boolean |  yes  |  || attribute_config | [[ConfigurationListingFilterConfig](#ConfigurationListingFilterConfig)] |  no  |  |

---

#### [ConfigurationListingFilterConfig](#ConfigurationListingFilterConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || display_name | string |  no  |  || is_active | boolean |  yes  |  || key | string |  yes  |  || logo | string |  no  |  || name | string |  no  |  || priority | number |  yes  |  || type | string |  yes  |  || value_config | [ConfigurationListingFilterValue](#ConfigurationListingFilterValue) |  no  |  |

---

#### [ConfigurationListingFilterValue](#ConfigurationListingFilterValue)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || bucket_points | [[ConfigurationBucketPoints](#ConfigurationBucketPoints)] |  no  |  || condition | string |  no  |  || map | string |  no  |  || map_values | [string] |  no  |  || sort | string |  no  |  || value | string |  no  |  |

---

#### [ConfigurationListingSort](#ConfigurationListingSort)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || config | [[ConfigurationListingSortConfig](#ConfigurationListingSortConfig)] |  no  |  || default_key | string |  yes  |  |

---

#### [ConfigurationListingSortConfig](#ConfigurationListingSortConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || is_active | boolean |  yes  |  || key | string |  yes  |  || logo | string |  no  |  || name | string |  no  |  || priority | number |  yes  |  |

---

#### [ConfigurationProduct](#ConfigurationProduct)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || similar | [ConfigurationProductSimilar](#ConfigurationProductSimilar) |  yes  |  || variant | [ConfigurationProductVariant](#ConfigurationProductVariant) |  yes  |  |

---

#### [ConfigurationProductConfig](#ConfigurationProductConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || is_active | boolean |  yes  |  || key | string |  yes  |  || logo | string |  no  |  || priority | number |  yes  |  || size | [ProductSize](#ProductSize) |  no  |  || subtitle | string |  no  |  || title | string |  no  |  |

---

#### [ConfigurationProductSimilar](#ConfigurationProductSimilar)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || config | [[ConfigurationProductConfig](#ConfigurationProductConfig)] |  no  |  |

---

#### [ConfigurationProductVariant](#ConfigurationProductVariant)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || config | [[ConfigurationProductVariantConfig](#ConfigurationProductVariantConfig)] |  no  |  |

---

#### [ConfigurationProductVariantConfig](#ConfigurationProductVariantConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || display_type | string |  yes  |  || is_active | boolean |  yes  |  || key | string |  yes  |  || logo | string |  no  |  || name | string |  yes  |  || priority | number |  yes  |  || size | [ProductSize](#ProductSize) |  yes  |  |

---

#### [CreateAutocompleteKeyword](#CreateAutocompleteKeyword)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || _custom_json | string |  no  |  || app_id | string |  no  |  || is_active | boolean |  no  |  || results | [[AutocompleteResult](#AutocompleteResult)] |  no  |  || words | [string] |  no  |  |

---

#### [CreateAutocompleteWordsResponse](#CreateAutocompleteWordsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || _custom_json | string |  no  |  || app_id | string |  no  |  || results | [string] |  no  |  || words | [string] |  no  |  |

---

#### [CreateCollection](#CreateCollection)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || _custom_json | string |  no  |  || _locale_language | string |  no  |  || _schedule | [CollectionSchedule](#CollectionSchedule) |  no  |  || allow_facets | boolean |  no  |  || allow_sort | boolean |  no  |  || app_id | string |  yes  |  || badge | [CollectionBadge](#CollectionBadge) |  no  |  || banners | [CollectionBanner](#CollectionBanner) |  yes  |  || created_by | [UserInfo](#UserInfo) |  no  |  || description | string |  no  |  || is_active | boolean |  no  |  || is_visible | boolean |  no  |  || logo | [CollectionImage](#CollectionImage) |  yes  |  || meta | string |  no  |  || modified_by | [UserInfo](#UserInfo) |  no  |  || name | string |  yes  |  || priority | number |  no  |  || published | boolean |  no  |  || query | [[CollectionQuery](#CollectionQuery)] |  no  |  || seo | [SeoDetail](#SeoDetail) |  no  |  || slug | string |  yes  |  || sort_on | string |  no  |  || tags | [string] |  no  |  || type | string |  yes  |  || visible_facets_keys | [string] |  no  |  |

---

#### [CreateSearchKeyword](#CreateSearchKeyword)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || _custom_json | string |  no  |  || app_id | string |  no  |  || is_active | boolean |  no  |  || result | [SearchKeywordResult](#SearchKeywordResult) |  yes  |  || words | [string] |  no  |  |

---

#### [CrossSellingData](#CrossSellingData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || articles | number |  no  |  || products | number |  no  |  |

---

#### [CrossSellingResponse](#CrossSellingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || brand_distribution | [CatalogInsightBrand](#CatalogInsightBrand) |  no  |  || data | [CrossSellingData](#CrossSellingData) |  no  |  |

---

#### [CustomOrder](#CustomOrder)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || is_custom_order | boolean |  no  |  || manufacturing_time | number |  no  |  || manufacturing_time_unit | string |  no  |  |

---

#### [DateMeta](#DateMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || added_on_store | string |  no  |  || created_on | string |  no  |  || inventory_updated_on | string |  no  |  || modified_on | string |  no  |  |

---

#### [DefaultKeyRequest](#DefaultKeyRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || default_key | string |  yes  |  |

---

#### [DeleteResponse](#DeleteResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || message | string |  no  |  |

---

#### [Department](#Department)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || logo | [Media](#Media) |  no  |  || name | string |  no  |  || priority_order | number |  no  |  || slug | string |  no  |  || uid | number |  no  |  |

---

#### [DepartmentCategoryTree](#DepartmentCategoryTree)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || department | string |  no  |  || items | [[CategoryItems](#CategoryItems)] |  no  |  |

---

#### [DepartmentCreateErrorResponse](#DepartmentCreateErrorResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || error | string |  no  |  |

---

#### [DepartmentCreateResponse](#DepartmentCreateResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || message | string |  yes  |  || uid | number |  yes  |  |

---

#### [DepartmentCreateUpdate](#DepartmentCreateUpdate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || _cls | string |  no  |  || _custom_json | string |  no  |  || is_active | boolean |  no  |  || logo | string |  yes  |  || name | string |  yes  |  || platforms | string |  no  |  || priority_order | number |  yes  |  || slug | string |  no  |  || synonyms | [string] |  no  |  || tags | [string] |  no  |  || uid | number |  no  |  |

---

#### [DepartmentErrorResponse](#DepartmentErrorResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || code | string |  no  |  || errors | string |  no  |  || message | string |  no  |  || meta | string |  no  |  || status | number |  no  |  |

---

#### [DepartmentIdentifier](#DepartmentIdentifier)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || slug | string |  no  |  || uid | number |  no  |  |

---

#### [DepartmentModel](#DepartmentModel)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || _cls | string |  no  |  || _custom_json | string |  no  |  || _id | any |  no  |  || created_by | [UserDetail](#UserDetail) |  no  |  || created_on | string |  yes  |  || is_active | boolean |  no  |  || logo | string |  yes  |  || modified_by | [UserDetail](#UserDetail) |  no  |  || modified_on | string |  yes  |  || name | string |  yes  |  || priority_order | number |  yes  |  || slug | string |  yes  |  || synonyms | [string] |  no  |  || uid | number |  yes  |  || verified_by | [UserDetail](#UserDetail) |  no  |  || verified_on | string |  no  |  |

---

#### [DepartmentResponse](#DepartmentResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || items | [[Department](#Department)] |  no  |  |

---

#### [DepartmentsResponse](#DepartmentsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || items | [[GetDepartment](#GetDepartment)] |  no  |  || page | [Page](#Page) |  no  |  |

---

#### [DimensionResponse](#DimensionResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || height | number |  yes  |  || is_default | boolean |  yes  |  || length | number |  yes  |  || unit | string |  yes  |  || width | number |  yes  |  |

---

#### [DimensionResponse1](#DimensionResponse1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || height | number |  no  |  || length | number |  no  |  || unit | string |  no  |  || width | number |  no  |  |

---

#### [Document](#Document)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || legal_name | string |  no  |  || type | string |  yes  |  || url | string |  no  |  || value | string |  yes  |  || verified | boolean |  no  |  |

---

#### [EntityConfiguration](#EntityConfiguration)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || app_id | string |  yes  |  || config_id | string |  no  |  || config_type | string |  yes  |  || id | string |  no  |  || listing | [GetCatalogConfigurationDetailsSchemaListing](#GetCatalogConfigurationDetailsSchemaListing) |  no  |  || product | [GetCatalogConfigurationDetailsProduct](#GetCatalogConfigurationDetailsProduct) |  no  |  |

---

#### [ErrorResponse](#ErrorResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || code | string |  no  |  || error | string |  no  |  || message | string |  no  |  || meta | string |  no  |  || status | number |  no  |  |

---

#### [FilerList](#FilerList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || display | string |  no  |  || value | string |  no  |  |

---

#### [GenderDetail](#GenderDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || departments | [string] |  no  |  || description | string |  no  |  || details | [AttributeMasterDetails](#AttributeMasterDetails) |  no  |  || enabled_for_end_consumer | boolean |  no  |  || filters | [AttributeMasterFilter](#AttributeMasterFilter) |  no  |  || id | string |  no  |  || is_nested | boolean |  no  |  || logo | string |  no  |  || meta | [AttributeMasterMeta](#AttributeMasterMeta) |  no  |  || name | string |  no  |  || schema | [AttributeMaster](#AttributeMaster) |  no  |  || slug | string |  no  |  |

---

#### [GetAddressSerializer](#GetAddressSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || address1 | string |  no  |  || address2 | string |  no  |  || address_type | string |  no  |  || city | string |  no  |  || country | string |  no  |  || country_code | string |  no  |  || landmark | string |  no  |  || latitude | number |  no  |  || longitude | number |  no  |  || pincode | number |  no  |  || state | string |  no  |  |

---

#### [GetAllSizes](#GetAllSizes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || all_sizes | [[AllSizes](#AllSizes)] |  no  |  |

---

#### [GetAppCatalogConfiguration](#GetAppCatalogConfiguration)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || data | [AppCatalogConfiguration](#AppCatalogConfiguration) |  no  |  || is_default | boolean |  no  |  |

---

#### [GetAppCatalogEntityConfiguration](#GetAppCatalogEntityConfiguration)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || data | [EntityConfiguration](#EntityConfiguration) |  no  |  || is_default | boolean |  no  |  |

---

#### [GetAutocompleteWordsData](#GetAutocompleteWordsData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || _custom_json | string |  no  |  || app_id | string |  no  |  || results | [string] |  no  |  || uid | string |  no  |  || words | [string] |  no  |  |

---

#### [GetAutocompleteWordsResponse](#GetAutocompleteWordsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || items | [[GetAutocompleteWordsData](#GetAutocompleteWordsData)] |  no  |  || page | [Page](#Page) |  no  |  |

---

#### [GetCatalogConfigurationDetailsProduct](#GetCatalogConfigurationDetailsProduct)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || compare | string |  no  |  || detail | string |  no  |  || similar | string |  no  |  || variant | string |  no  |  |

---

#### [GetCatalogConfigurationDetailsSchemaListing](#GetCatalogConfigurationDetailsSchemaListing)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || filter | string |  no  |  || sort | string |  no  |  |

---

#### [GetCatalogConfigurationMetaData](#GetCatalogConfigurationMetaData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || listing | [MetaDataListingResponse](#MetaDataListingResponse) |  no  |  || product | [GetCatalogConfigurationDetailsProduct](#GetCatalogConfigurationDetailsProduct) |  no  |  |

---

#### [GetCollectionDetailNest](#GetCollectionDetailNest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || _schedule | string |  no  |  || action | [Action](#Action) |  no  |  || allow_facets | boolean |  no  |  || allow_sort | boolean |  no  |  || app_id | string |  no  |  || badge | string |  no  |  || banners | [ImageUrls](#ImageUrls) |  no  |  || cron | string |  no  |  || description | string |  no  |  || is_active | boolean |  no  |  || logo | [Media1](#Media1) |  no  |  || meta | string |  no  |  || name | string |  no  |  || priority | number |  no  |  || query | [[CollectionQuery](#CollectionQuery)] |  no  |  || slug | string |  no  |  || tag | [string] |  no  |  || type | string |  no  |  || uid | string |  no  |  || visible_facets_keys | [string] |  no  |  |

---

#### [GetCollectionItemsResponse](#GetCollectionItemsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || filters | [[ProductFilters](#ProductFilters)] |  no  |  || items | [[ProductListingDetail](#ProductListingDetail)] |  no  |  || page | [Page](#Page) |  no  |  || sort_on | [[ProductSortOn](#ProductSortOn)] |  no  |  |

---

#### [GetCollectionListingResponse](#GetCollectionListingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || filters | [CollectionListingFilter](#CollectionListingFilter) |  no  |  || items | [[GetCollectionDetailNest](#GetCollectionDetailNest)] |  no  |  || page | [Page](#Page) |  no  |  |

---

#### [GetCollectionQueryOptionResponse](#GetCollectionQueryOptionResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || filters | [[ProductFilters](#ProductFilters)] |  no  |  || operators | [String: string] |  yes  |  || sort_on | [[ProductSortOn](#ProductSortOn)] |  no  |  |

---

#### [GetCompanySerializer](#GetCompanySerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || addresses | [[GetAddressSerializer](#GetAddressSerializer)] |  no  |  || business_type | string |  no  |  || company_type | string |  no  |  || created_by | [UserSerializer2](#UserSerializer2) |  no  |  || created_on | string |  no  |  || modified_by | [UserSerializer2](#UserSerializer2) |  no  |  || modified_on | string |  no  |  || name | string |  no  |  || reject_reason | string |  no  |  || stage | string |  no  |  || uid | number |  no  |  || verified_by | [UserSerializer2](#UserSerializer2) |  no  |  || verified_on | string |  no  |  |

---

#### [GetConfigMetadataResponse](#GetConfigMetadataResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || condition | [string] |  no  |  || data | [string] |  yes  |  || values | [string] |  no  |  |

---

#### [GetConfigResponse](#GetConfigResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || data | [string] |  yes  |  || page | [PageResponseType](#PageResponseType) |  yes  |  |

---

#### [GetDepartment](#GetDepartment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || created_by | [UserSerializer](#UserSerializer) |  no  |  || created_on | string |  no  |  || is_active | boolean |  no  |  || item_type | string |  no  |  || logo | string |  no  |  || modified_by | [UserSerializer](#UserSerializer) |  no  |  || modified_on | string |  no  |  || name | string |  no  |  || page_no | number |  no  |  || page_size | number |  no  |  || priority_order | number |  no  |  || search | string |  no  |  || slug | string |  no  |  || synonyms | [string] |  no  |  || uid | number |  no  |  |

---

#### [GetInventories](#GetInventories)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || brand | [BrandMeta1](#BrandMeta1) |  no  |  || company | [CompanyMeta1](#CompanyMeta1) |  no  |  || country_of_origin | string |  no  |  || created_by | [UserSerializer](#UserSerializer) |  no  |  || date_meta | [DateMeta](#DateMeta) |  no  |  || dimension | [DimensionResponse1](#DimensionResponse1) |  no  |  || expiration_date | string |  no  |  || id | string |  no  |  || identifier | string |  no  |  || inventory_updated_on | string |  no  |  || is_set | boolean |  no  |  || item_id | number |  no  |  || manufacturer | [ManufacturerResponse1](#ManufacturerResponse1) |  no  |  || modified_by | [UserSerializer](#UserSerializer) |  no  |  || platforms | string |  no  |  || price | [PriceArticle](#PriceArticle) |  no  |  || quantities | [QuantitiesArticle](#QuantitiesArticle) |  no  |  || return_config | [ReturnConfig2](#ReturnConfig2) |  no  |  || seller_identifier | string |  no  |  || size | string |  no  |  || stage | string |  no  |  || store | [ArticleStoreResponse](#ArticleStoreResponse) |  no  |  || tags | [string] |  no  |  || tax_identifier | string |  no  |  || total_quantity | number |  no  |  || trace_id | string |  no  |  || track_inventory | boolean |  no  |  || trader | [[Trader2](#Trader2)] |  no  |  || uid | string |  no  |  || weight | [WeightResponse1](#WeightResponse1) |  no  |  |

---

#### [GetInventoriesResponse](#GetInventoriesResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || items | [[GetInventories](#GetInventories)] |  no  |  || page | [Page](#Page) |  no  |  |

---

#### [GetLocationSerializer](#GetLocationSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || _custom_json | string |  no  |  || address | [GetAddressSerializer](#GetAddressSerializer) |  yes  |  || code | string |  yes  |  || company | [GetCompanySerializer](#GetCompanySerializer) |  no  |  || contact_numbers | [[SellerPhoneNumber](#SellerPhoneNumber)] |  no  |  || created_by | [UserSerializer1](#UserSerializer1) |  no  |  || created_on | string |  no  |  || display_name | string |  yes  |  || documents | [[Document](#Document)] |  no  |  || gst_credentials | [InvoiceDetailsSerializer](#InvoiceDetailsSerializer) |  no  |  || integration_type | [LocationIntegrationType](#LocationIntegrationType) |  no  |  || manager | [LocationManagerSerializer](#LocationManagerSerializer) |  no  |  || modified_by | [UserSerializer1](#UserSerializer1) |  no  |  || modified_on | string |  no  |  || name | string |  yes  |  || notification_emails | [string] |  no  |  || phone_number | string |  yes  |  || product_return_config | [ProductReturnConfigSerializer](#ProductReturnConfigSerializer) |  no  |  || stage | string |  no  |  || store_type | string |  no  |  || timing | [[LocationDayWiseSerializer](#LocationDayWiseSerializer)] |  no  |  || uid | number |  no  |  || verified_by | [UserSerializer1](#UserSerializer1) |  no  |  || verified_on | string |  no  |  || warnings | string |  no  |  |

---

#### [GetOptInPlatform](#GetOptInPlatform)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || items | [[CompanyOptIn](#CompanyOptIn)] |  yes  |  || page | [Page](#Page) |  yes  |  |

---

#### [GetProductBundleCreateResponse](#GetProductBundleCreateResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || choice | string |  yes  |  || company_id | number |  no  |  || created_by | string |  no  |  || created_on | string |  no  |  || id | string |  no  |  || is_active | boolean |  yes  |  || logo | string |  no  |  || meta | string |  no  |  || modified_by | string |  no  |  || modified_on | string |  no  |  || name | string |  yes  |  || page_visibility | [string] |  no  |  || products | [[ProductBundleItem](#ProductBundleItem)] |  yes  |  || same_store_assignment | boolean |  no  |  || slug | string |  yes  |  |

---

#### [GetProductBundleListingResponse](#GetProductBundleListingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || items | [[GetProductBundleCreateResponse](#GetProductBundleCreateResponse)] |  no  |  || page | [Page](#Page) |  no  |  |

---

#### [GetProductBundleResponse](#GetProductBundleResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || choice | string |  no  |  || company_id | number |  no  |  || is_active | boolean |  no  |  || logo | string |  no  |  || meta | string |  no  |  || name | string |  no  |  || page_visibility | [string] |  no  |  || products | [[GetProducts](#GetProducts)] |  no  |  || same_store_assignment | boolean |  no  |  || slug | string |  no  |  |

---

#### [GetProducts](#GetProducts)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || allow_remove | boolean |  no  |  || auto_add_to_cart | boolean |  no  |  || auto_select | boolean |  no  |  || max_quantity | number |  no  |  || min_quantity | number |  no  |  || price | [Price](#Price) |  no  |  || product_details | [LimitedProductData](#LimitedProductData) |  no  |  || product_uid | number |  no  |  || sizes | [[Size](#Size)] |  no  |  |

---

#### [GetSearchWordsData](#GetSearchWordsData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || _custom_json | string |  no  |  || app_id | string |  no  |  || is_active | boolean |  no  |  || result | string |  no  |  || uid | string |  no  |  || words | [string] |  no  |  |

---

#### [GetSearchWordsDetailResponse](#GetSearchWordsDetailResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || items | [GetSearchWordsData](#GetSearchWordsData) |  no  |  || page | [Page](#Page) |  no  |  |

---

#### [GetSearchWordsResponse](#GetSearchWordsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || items | [[GetSearchWordsData](#GetSearchWordsData)] |  no  |  || page | [Page](#Page) |  no  |  |

---

#### [GlobalValidation](#GlobalValidation)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || definitions | string |  no  |  || description | string |  no  |  || properties | [Properties](#Properties) |  no  |  || required | [string] |  no  |  || title | string |  no  |  || type | string |  no  |  |

---

#### [GTIN](#GTIN)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || gtin_type | string |  yes  |  || gtin_value | string |  yes  |  || primary | boolean |  no  |  |

---

#### [Guide](#Guide)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || meta | [Meta](#Meta) |  no  |  |

---

#### [Hierarchy](#Hierarchy)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || department | number |  yes  |  || l1 | number |  yes  |  || l2 | number |  yes  |  |

---

#### [HsnCode](#HsnCode)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || data | [HsnCodesObject](#HsnCodesObject) |  no  |  |

---

#### [HsnCodesListingResponseSchemaV2](#HsnCodesListingResponseSchemaV2)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || items | [[HSNDataInsertV2](#HSNDataInsertV2)] |  no  |  || page | [PageResponse](#PageResponse) |  no  |  |

---

#### [HsnCodesObject](#HsnCodesObject)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || company_id | number |  no  |  || hs2_code | string |  no  |  || hsn_code | string |  no  |  || id | string |  no  |  || modified_on | string |  no  |  || tax1 | number |  no  |  || tax2 | number |  no  |  || tax_on_esp | boolean |  no  |  || tax_on_mrp | boolean |  no  |  || threshold1 | number |  no  |  || threshold2 | number |  no  |  |

---

#### [HSNCodesResponse](#HSNCodesResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || data | [HSNData](#HSNData) |  no  |  || message | string |  no  |  |

---

#### [HSNData](#HSNData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || country_of_origin | [string] |  no  |  || hsn_code | [string] |  no  |  |

---

#### [HSNDataInsertV2](#HSNDataInsertV2)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || country_code | string |  yes  |  || created_by | string |  no  |  || created_on | string |  no  |  || description | string |  yes  |  || hsn_code | string |  yes  |  || hsn_code_id | string |  no  |  || modified_by | string |  no  |  || modified_on | string |  no  |  || reporting_hsn | string |  yes  |  || taxes | [[TaxSlab](#TaxSlab)] |  yes  |  || type | string |  yes  |  |

---

#### [HsnUpsert](#HsnUpsert)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || company_id | number |  yes  |  || hs2_code | string |  yes  |  || hsn_code | string |  yes  |  || is_active | boolean |  no  |  || tax1 | number |  yes  |  || tax2 | number |  no  |  || tax_on_esp | boolean |  no  |  || tax_on_mrp | boolean |  yes  |  || threshold1 | number |  yes  |  || threshold2 | number |  no  |  || uid | number |  no  |  |

---

#### [Image](#Image)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || aspect_ratio | string |  no  |  || aspect_ratio_f | number |  no  |  || secure_url | string |  no  |  || url | string |  no  |  |

---

#### [ImageUrls](#ImageUrls)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || landscape | [BannerImage](#BannerImage) |  no  |  || portrait | [BannerImage](#BannerImage) |  no  |  |

---

#### [InventoryBulkRequest](#InventoryBulkRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || batch_id | string |  yes  |  || company_id | number |  yes  |  || sizes | [[InventoryJobPayload](#InventoryJobPayload)] |  yes  |  || user | string |  no  |  |

---

#### [InventoryConfig](#InventoryConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || data | [[FilerList](#FilerList)] |  no  |  || multivalues | boolean |  no  |  |

---

#### [InventoryCreateRequest](#InventoryCreateRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || data | [string] |  no  |  || filters | [InventoryExportFilter](#InventoryExportFilter) |  yes  |  || notification_emails | [string] |  no  |  || type | string |  no  |  |

---

#### [InventoryExportAdvanceOption](#InventoryExportAdvanceOption)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || brand_ids | [number] |  no  |  || from_date | string |  no  |  || quantity | [InventoryExportQuantityFilter](#InventoryExportQuantityFilter) |  no  |  || store_ids | [number] |  no  |  || to_date | string |  no  |  |

---

#### [InventoryExportFilter](#InventoryExportFilter)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || brand_ids | [number] |  no  |  || from_date | string |  no  |  || quantity | [InventoryExportQuantityFilter](#InventoryExportQuantityFilter) |  no  |  || store_ids | [number] |  yes  |  || to_date | string |  no  |  |

---

#### [InventoryExportJob](#InventoryExportJob)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || completed_on | string |  no  |  || filters | [InventoryExportAdvanceOption](#InventoryExportAdvanceOption) |  no  |  || notification_emails | [string] |  no  |  || seller_id | number |  yes  |  || status | string |  no  |  || task_id | string |  yes  |  || type | string |  yes  |  || url | string |  no  |  |

---

#### [InventoryExportJobListResponse](#InventoryExportJobListResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || items | [InventoryJobDetailResponse](#InventoryJobDetailResponse) |  yes  |  |

---

#### [InventoryExportQuantityFilter](#InventoryExportQuantityFilter)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || max | number |  no  |  || min | number |  no  |  || operators | string |  yes  |  |

---

#### [InventoryExportRequest](#InventoryExportRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || brand | [number] |  no  |  || store | [number] |  no  |  || type | string |  no  |  |

---

#### [InventoryExportResponse](#InventoryExportResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || created_by | string |  no  |  || created_on | string |  no  |  || filters | string |  no  |  || modified_on | string |  no  |  || notification_emails | [string] |  no  |  || seller_id | number |  yes  |  || status | string |  no  |  || task_id | string |  yes  |  || type | string |  no  |  |

---

#### [InventoryFailedReason](#InventoryFailedReason)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || errors | string |  no  |  || message | string |  yes  |  |

---

#### [InventoryJobDetailResponse](#InventoryJobDetailResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || cancelled_by | [UserDetail](#UserDetail) |  no  |  || cancelled_on | string |  no  |  || completed_on | string |  no  |  || created_by | [UserDetail](#UserDetail) |  no  |  || created_on | string |  no  |  || filters | [InventoryJobFilters](#InventoryJobFilters) |  yes  |  || id | string |  yes  |  || modified_on | string |  no  |  || notification_emails | [string] |  no  |  || seller_id | number |  yes  |  || status | string |  no  |  || task_id | string |  yes  |  || type | string |  no  |  || url | string |  yes  |  |

---

#### [InventoryJobFilters](#InventoryJobFilters)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || brands | [string] |  no  |  || from_date | string |  no  |  || quantity | [InventoryExportQuantityFilter](#InventoryExportQuantityFilter) |  no  |  || stores | [string] |  no  |  || to_date | string |  no  |  |

---

#### [InventoryJobPayload](#InventoryJobPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || currency | string |  no  |  || expiration_date | string |  no  |  || item_dimensions_unit_of_measure | string |  no  |  || item_weight_unit_of_measure | string |  no  |  || price | number |  no  |  || price_effective | number |  no  |  || price_marked | number |  no  |  || quantity | number |  no  |  || seller_identifier | string |  yes  |  || store_code | string |  yes  |  || tags | [string] |  no  |  || total_quantity | number |  no  |  || trace_id | string |  no  |  |

---

#### [InventoryPage](#InventoryPage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || has_next | boolean |  no  |  || has_previous | boolean |  no  |  || item_total | number |  yes  |  || next_id | string |  no  |  || type | string |  yes  |  |

---

#### [InventoryPayload](#InventoryPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || expiration_date | string |  no  |  || price_effective | number |  no  |  || price_marked | number |  no  |  || seller_identifier | string |  yes  |  || store_id | number |  yes  |  || tags | [string] |  no  |  || total_quantity | number |  no  |  || trace_id | string |  no  |  |

---

#### [InventoryRequest](#InventoryRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || company_id | number |  yes  |  || item | [ItemQuery](#ItemQuery) |  yes  |  || sizes | [[InvSize](#InvSize)] |  yes  |  |

---

#### [InventoryRequestSchemaV2](#InventoryRequestSchemaV2)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || company_id | number |  yes  |  || meta | string |  no  |  || payload | [[InventoryPayload](#InventoryPayload)] |  no  |  |

---

#### [InventoryResponse](#InventoryResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || currency | string |  no  |  || identifiers | string |  no  |  || inventory_updated_on | string |  no  |  || item_id | number |  no  |  || price | number |  no  |  || price_effective | number |  no  |  || price_transfer | number |  no  |  || quantity | number |  no  |  || sellable_quantity | number |  no  |  || seller_identifier | string |  no  |  || size | string |  no  |  || store | string |  no  |  || uid | string |  no  |  |

---

#### [InventoryResponseItem](#InventoryResponseItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || data | [InventoryPayload](#InventoryPayload) |  no  |  || reason | [InventoryFailedReason](#InventoryFailedReason) |  no  |  |

---

#### [InventoryResponsePaginated](#InventoryResponsePaginated)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || items | [[InventoryResponse](#InventoryResponse)] |  no  |  || page | [Page](#Page) |  no  |  |

---

#### [InventorySellerIdentifierResponsePaginated](#InventorySellerIdentifierResponsePaginated)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || items | [[InventorySellerResponse](#InventorySellerResponse)] |  no  |  || page | [Page](#Page) |  no  |  |

---

#### [InventorySellerResponse](#InventorySellerResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || _custom_json | string |  no  |  || added_on_store | string |  no  |  || brand | [BrandMeta](#BrandMeta) |  yes  |  || company | [CompanyMeta](#CompanyMeta) |  yes  |  || country_of_origin | string |  yes  |  || created_by | [UserSerializer](#UserSerializer) |  no  |  || dimension | [DimensionResponse](#DimensionResponse) |  yes  |  || expiration_date | string |  no  |  || fragile | boolean |  yes  |  || fynd_article_code | string |  yes  |  || fynd_item_code | string |  yes  |  || fynd_meta | string |  no  |  || identifier | string |  yes  |  || is_active | boolean |  no  |  || is_set | boolean |  no  |  || item_id | number |  yes  |  || manufacturer | [ManufacturerResponse](#ManufacturerResponse) |  yes  |  || meta | string |  no  |  || modified_by | [UserSerializer](#UserSerializer) |  no  |  || price | [PriceMeta](#PriceMeta) |  yes  |  || quantities | [Quantities](#Quantities) |  no  |  || raw_meta | string |  no  |  || return_config | [ReturnConfig1](#ReturnConfig1) |  no  |  || seller_identifier | string |  yes  |  || set | [InventorySet](#InventorySet) |  no  |  || size | string |  yes  |  || stage | string |  no  |  || store | [StoreMeta](#StoreMeta) |  yes  |  || tags | [string] |  no  |  || tax_identifier | string |  no  |  || total_quantity | number |  yes  |  || trace_id | string |  no  |  || track_inventory | boolean |  no  |  || trader | [[Trader1](#Trader1)] |  no  |  || uid | string |  yes  |  || weight | [WeightResponse](#WeightResponse) |  yes  |  |

---

#### [InventorySet](#InventorySet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || name | string |  no  |  || quantity | number |  no  |  || size_distribution | [SizeDistribution](#SizeDistribution) |  yes  |  |

---

#### [InventoryStockResponse](#InventoryStockResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || items | [string] |  no  |  || page | [InventoryPage](#InventoryPage) |  yes  |  |

---

#### [InventoryUpdateResponse](#InventoryUpdateResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || items | [[InventoryResponseItem](#InventoryResponseItem)] |  no  |  || message | string |  yes  |  |

---

#### [InventoryValidationResponse](#InventoryValidationResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || data | string |  no  |  || message | string |  no  |  |

---

#### [InvoiceCredSerializer](#InvoiceCredSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || enabled | boolean |  no  |  || password | string |  no  |  || username | string |  no  |  |

---

#### [InvoiceDetailsSerializer](#InvoiceDetailsSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || e_invoice | [InvoiceCredSerializer](#InvoiceCredSerializer) |  no  |  || e_waybill | [InvoiceCredSerializer](#InvoiceCredSerializer) |  no  |  |

---

#### [InvSize](#InvSize)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || currency | string |  yes  |  || expiration_date | string |  no  |  || identifiers | [[GTIN](#GTIN)] |  yes  |  || is_set | boolean |  no  |  || item_dimensions_unit_of_measure | string |  no  |  || item_height | number |  no  |  || item_length | number |  no  |  || item_weight | number |  no  |  || item_weight_unit_of_measure | string |  no  |  || item_width | number |  no  |  || price | number |  no  |  || price_effective | number |  yes  |  || price_transfer | number |  no  |  || quantity | number |  yes  |  || set | [InventorySet](#InventorySet) |  no  |  || size | string |  yes  |  || store_code | string |  yes  |  |

---

#### [ItemQuery](#ItemQuery)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || brand_uid | number |  no  |  || item_code | string |  no  |  || uid | number |  no  |  |

---

#### [Items](#Items)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || cancelled | number |  no  |  || cancelled_records | [string] |  no  |  || company_id | number |  no  |  || created_by | [UserCommon](#UserCommon) |  no  |  || created_on | string |  no  |  || failed | number |  no  |  || failed_records | [string] |  no  |  || file_path | string |  no  |  || id | string |  no  |  || is_active | boolean |  no  |  || modified_by | [UserCommon](#UserCommon) |  no  |  || modified_on | string |  no  |  || retry | number |  no  |  || stage | string |  no  |  || succeed | number |  no  |  || total | number |  no  |  || tracking_url | string |  no  |  |

---

#### [LimitedProductData](#LimitedProductData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || attributes | string |  no  |  || country_of_origin | string |  no  |  || identifier | string |  no  |  || images | [string] |  no  |  || item_code | string |  no  |  || name | string |  no  |  || price | string |  no  |  || quantity | number |  no  |  || short_description | string |  no  |  || sizes | [string] |  no  |  || slug | string |  no  |  || uid | number |  no  |  |

---

#### [ListSizeGuide](#ListSizeGuide)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || items | [string] |  no  |  || page | string |  no  |  |

---

#### [LocationDayWiseSerializer](#LocationDayWiseSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || closing | [LocationTimingSerializer](#LocationTimingSerializer) |  no  |  || open | boolean |  yes  |  || opening | [LocationTimingSerializer](#LocationTimingSerializer) |  no  |  || weekday | string |  yes  |  |

---

#### [LocationIntegrationType](#LocationIntegrationType)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || inventory | string |  no  |  || order | string |  no  |  |

---

#### [LocationListSerializer](#LocationListSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || items | [[GetLocationSerializer](#GetLocationSerializer)] |  no  |  || page | [Page](#Page) |  no  |  |

---

#### [LocationManagerSerializer](#LocationManagerSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || email | string |  no  |  || mobile_no | [SellerPhoneNumber](#SellerPhoneNumber) |  yes  |  || name | string |  no  |  |

---

#### [LocationTimingSerializer](#LocationTimingSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || hour | number |  no  |  || minute | number |  no  |  |

---

#### [Logo](#Logo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || aspect_ratio | string |  no  |  || aspect_ratio_f | number |  no  |  || secure_url | string |  no  |  || url | string |  no  |  |

---

#### [ManufacturerResponse](#ManufacturerResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || address | string |  yes  |  || is_default | boolean |  yes  |  || name | string |  yes  |  |

---

#### [ManufacturerResponse1](#ManufacturerResponse1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || address | string |  no  |  || is_default | boolean |  no  |  || name | string |  no  |  |

---

#### [Media](#Media)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || aspect_ratio | string |  no  |  || type | string |  no  |  || url | string |  no  |  |

---

#### [Media1](#Media1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || meta | string |  no  |  || type | string |  no  |  || url | string |  yes  |  |

---

#### [Media2](#Media2)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || landscape | string |  yes  |  || logo | string |  yes  |  || portrait | string |  yes  |  |

---

#### [Meta](#Meta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || headers | string |  no  |  || unit | string |  no  |  || values | [string] |  no  |  |

---

#### [MetaDataListingFilterMetaResponse](#MetaDataListingFilterMetaResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || display | string |  no  |  || filter_types | [string] |  no  |  || key | string |  no  |  || units | [string] |  no  |  |

---

#### [MetaDataListingFilterResponse](#MetaDataListingFilterResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || data | [[MetaDataListingFilterMetaResponse](#MetaDataListingFilterMetaResponse)] |  no  |  |

---

#### [MetaDataListingResponse](#MetaDataListingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || filter | [MetaDataListingFilterResponse](#MetaDataListingFilterResponse) |  yes  |  || sort | [MetaDataListingSortResponse](#MetaDataListingSortResponse) |  yes  |  |

---

#### [MetaDataListingSortMetaResponse](#MetaDataListingSortMetaResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || display | string |  no  |  || key | string |  no  |  |

---

#### [MetaDataListingSortResponse](#MetaDataListingSortResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || data | [[MetaDataListingSortMetaResponse](#MetaDataListingSortMetaResponse)] |  no  |  |

---

#### [MetaFields](#MetaFields)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || key | string |  yes  |  || value | string |  yes  |  |

---

#### [MOQData](#MOQData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || increment_unit | number |  no  |  || maximum | number |  no  |  || minimum | number |  no  |  |

---

#### [NetQuantity](#NetQuantity)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || unit | string |  no  |  || value | number |  no  |  |

---

#### [NetQuantityResponse](#NetQuantityResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || unit | string |  no  |  || value | number |  no  |  |

---

#### [NextSchedule](#NextSchedule)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || end | string |  no  |  || start | string |  no  |  |

---

#### [OptinCompanyBrandDetailsView](#OptinCompanyBrandDetailsView)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || items | [[CompanyBrandDetail](#CompanyBrandDetail)] |  no  |  || page | [Page](#Page) |  no  |  |

---

#### [OptinCompanyDetail](#OptinCompanyDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || business_type | string |  no  |  || company_type | string |  no  |  || name | string |  no  |  || uid | number |  no  |  |

---

#### [OptinCompanyMetrics](#OptinCompanyMetrics)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || brand | number |  no  |  || company | string |  no  |  || store | number |  no  |  |

---

#### [OptInPostRequest](#OptInPostRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || brand_ids | [number] |  no  |  || company_id | number |  no  |  || enabled | boolean |  no  |  || opt_level | string |  yes  |  || platform | string |  no  |  || store_ids | [number] |  no  |  |

---

#### [OptinStoreDetails](#OptinStoreDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || items | [[StoreDetail](#StoreDetail)] |  no  |  || page | [Page](#Page) |  no  |  |

---

#### [OwnerAppItemResponse](#OwnerAppItemResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || alt_text | string |  no  |  || is_cod | boolean |  no  |  || is_gift | boolean |  no  |  || moq | [MOQData](#MOQData) |  no  |  || seo | [SEOData](#SEOData) |  no  |  |

---

#### [Page](#Page)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || current | number |  no  |  || has_next | boolean |  no  |  || has_previous | boolean |  no  |  || item_total | number |  no  |  || next_id | string |  no  |  || size | number |  no  |  || type | string |  yes  |  |

---

#### [PageResponse](#PageResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || current | string |  no  |  || has_next | boolean |  no  |  || has_previous | boolean |  no  |  || item_total | number |  no  |  || size | number |  no  |  |

---

#### [PageResponseType](#PageResponseType)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || current | number |  yes  |  || has_next | boolean |  yes  |  || next | number |  yes  |  || total_count | number |  yes  |  |

---

#### [Price](#Price)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || currency | string |  no  |  || max_effective | number |  no  |  || max_marked | number |  no  |  || min_effective | number |  no  |  || min_marked | number |  no  |  |

---

#### [Price1](#Price1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || currency_code | string |  no  |  || currency_symbol | string |  no  |  || max | number |  no  |  || min | number |  no  |  |

---

#### [PriceArticle](#PriceArticle)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || currency | string |  no  |  || effective | number |  no  |  || marked | number |  no  |  || tp_notes | string |  no  |  || transfer | number |  no  |  |

---

#### [PriceMeta](#PriceMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || currency | string |  yes  |  || effective | number |  yes  |  || marked | number |  yes  |  || tp_notes | string |  no  |  || transfer | number |  yes  |  || updated_at | string |  no  |  |

---

#### [ProdcutTemplateCategoriesResponse](#ProdcutTemplateCategoriesResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || items | [[CategoriesResponse](#CategoriesResponse)] |  no  |  || page | [Page](#Page) |  no  |  |

---

#### [Product](#Product)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || _custom_json | string |  no  |  || all_company_ids | [number] |  no  |  || all_identifiers | [string] |  no  |  || all_sizes | [string] |  no  |  || attributes | string |  no  |  || brand | [Brand](#Brand) |  no  |  || brand_uid | number |  no  |  || category | string |  no  |  || category_slug | string |  no  |  || category_uid | number |  no  |  || color | string |  no  |  || company_id | number |  no  |  || country_of_origin | string |  no  |  || created_by | string |  no  |  || created_on | string |  no  |  || currency | string |  no  |  || custom_order | string |  no  |  || departments | [number] |  no  |  || description | string |  no  |  || highlights | [string] |  no  |  || hsn_code | string |  no  |  || id | string |  no  |  || image_nature | string |  no  |  || images | [[Image](#Image)] |  no  |  || is_active | boolean |  no  |  || is_dependent | boolean |  no  |  || is_expirable | boolean |  no  |  || is_image_less_product | boolean |  no  |  || is_physical | boolean |  no  |  || is_set | boolean |  no  |  || item_code | string |  no  |  || item_type | string |  no  |  || l3_mapping | [string] |  no  |  || media | [[Media1](#Media1)] |  no  |  || modified_by | string |  no  |  || modified_on | string |  no  |  || moq | string |  no  |  || multi_size | boolean |  no  |  || name | string |  no  |  || net_quantity | [NetQuantityResponse](#NetQuantityResponse) |  no  |  || no_of_boxes | number |  no  |  || pending | string |  no  |  || primary_color | string |  no  |  || product_group_tag | [string] |  no  |  || product_publish | [ProductPublished](#ProductPublished) |  no  |  || return_config | [ReturnConfigResponse](#ReturnConfigResponse) |  no  |  || short_description | string |  no  |  || size_guide | string |  no  |  || sizes | [string] |  no  |  || slug | string |  no  |  || stage | string |  no  |  || tags | [string] |  no  |  || tax_identifier | string |  no  |  || teaser_tag | string |  no  |  || template_tag | string |  no  |  || trader | [[Trader](#Trader)] |  no  |  || uid | number |  no  |  || variant_group | string |  no  |  || variant_media | string |  no  |  || variants | string |  no  |  || verified_by | [VerifiedBy](#VerifiedBy) |  no  |  || verified_on | string |  no  |  |

---

#### [ProductAttributesResponse](#ProductAttributesResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || items | [[AttributeMasterSerializer](#AttributeMasterSerializer)] |  yes  |  |

---

#### [ProductBrand](#ProductBrand)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || action | [Action](#Action) |  no  |  || logo | [Media1](#Media1) |  no  |  || name | string |  no  |  || uid | number |  no  |  |

---

#### [ProductBulkAssets](#ProductBulkAssets)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || company_id | number |  no  |  || url | string |  yes  |  || user | string |  yes  |  |

---

#### [ProductBulkRequest](#ProductBulkRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || cancelled | number |  no  |  || cancelled_records | [string] |  no  |  || company_id | number |  no  |  || created_by | [UserDetail1](#UserDetail1) |  no  |  || created_on | string |  no  |  || failed | number |  no  |  || failed_records | [string] |  no  |  || file_path | string |  no  |  || is_active | boolean |  no  |  || modified_by | [UserDetail1](#UserDetail1) |  no  |  || modified_on | string |  no  |  || stage | string |  no  |  || succeed | number |  no  |  || template | [ProductTemplate](#ProductTemplate) |  no  |  || template_tag | string |  no  |  || total | number |  no  |  |

---

#### [ProductBulkRequestList](#ProductBulkRequestList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || items | [ProductBulkRequest](#ProductBulkRequest) |  no  |  || page | [Page](#Page) |  no  |  |

---

#### [ProductBundleItem](#ProductBundleItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || allow_remove | boolean |  no  |  || auto_add_to_cart | boolean |  no  |  || auto_select | boolean |  no  |  || max_quantity | number |  yes  |  || min_quantity | number |  yes  |  || product_uid | number |  yes  |  |

---

#### [ProductBundleRequest](#ProductBundleRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || choice | string |  yes  |  || company_id | number |  no  |  || created_by | string |  no  |  || created_on | string |  no  |  || is_active | boolean |  yes  |  || logo | string |  no  |  || meta | string |  no  |  || modified_by | string |  no  |  || modified_on | string |  no  |  || name | string |  yes  |  || page_visibility | [string] |  no  |  || products | [[ProductBundleItem](#ProductBundleItem)] |  yes  |  || same_store_assignment | boolean |  no  |  || slug | string |  yes  |  |

---

#### [ProductBundleUpdateRequest](#ProductBundleUpdateRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || choice | string |  yes  |  || company_id | number |  no  |  || is_active | boolean |  yes  |  || logo | string |  no  |  || meta | string |  no  |  || modified_by | string |  no  |  || modified_on | string |  no  |  || name | string |  yes  |  || page_visibility | [string] |  no  |  || products | [[ProductBundleItem](#ProductBundleItem)] |  yes  |  || same_store_assignment | boolean |  no  |  || slug | string |  yes  |  |

---

#### [ProductConfigurationDownloads](#ProductConfigurationDownloads)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || data | [string] |  no  |  || multivalue | boolean |  no  |  |

---

#### [ProductCreateUpdateSchemaV2](#ProductCreateUpdateSchemaV2)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || _custom_json | string |  no  |  || action | string |  no  |  || attributes | string |  no  |  || brand_uid | number |  yes  |  || bulk_job_id | string |  no  |  || category_slug | string |  yes  |  || change_request_id | any |  no  |  || company_id | number |  yes  |  || country_of_origin | string |  yes  |  || currency | string |  yes  |  || custom_order | [CustomOrder](#CustomOrder) |  no  |  || departments | [number] |  yes  |  || description | string |  no  |  || highlights | [string] |  no  |  || is_active | boolean |  no  |  || is_dependent | boolean |  no  |  || is_image_less_product | boolean |  no  |  || is_set | boolean |  no  |  || item_code | string |  yes  |  || item_type | string |  yes  |  || media | [[Media1](#Media1)] |  no  |  || multi_size | boolean |  no  |  || name | string |  yes  |  || net_quantity | [NetQuantity](#NetQuantity) |  no  |  || no_of_boxes | number |  no  |  || product_group_tag | [string] |  no  |  || product_publish | [ProductPublish](#ProductPublish) |  no  |  || requester | string |  no  |  || return_config | [ReturnConfig](#ReturnConfig) |  yes  |  || short_description | string |  no  |  || size_guide | string |  no  |  || sizes | [string] |  yes  |  || slug | string |  yes  |  || tags | [string] |  no  |  || tax_identifier | [TaxIdentifier](#TaxIdentifier) |  yes  |  || teaser_tag | [TeaserTag](#TeaserTag) |  no  |  || template_tag | string |  yes  |  || trader | [[Trader](#Trader)] |  yes  |  || uid | number |  no  |  || variant_group | string |  no  |  || variant_media | string |  no  |  || variants | string |  no  |  |

---

#### [ProductDetail](#ProductDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || attributes | string |  no  |  || brand | [ProductBrand](#ProductBrand) |  no  |  || color | string |  no  |  || description | string |  no  |  || grouped_attributes | [[ProductDetailGroupedAttribute](#ProductDetailGroupedAttribute)] |  no  |  || has_variant | boolean |  no  |  || highlights | [string] |  no  |  || image_nature | string |  no  |  || item_code | string |  no  |  || item_type | string |  no  |  || medias | [[Media1](#Media1)] |  no  |  || name | string |  no  |  || product_online_date | string |  no  |  || promo_meta | string |  no  |  || rating | number |  no  |  || rating_count | number |  no  |  || short_description | string |  no  |  || similars | [string] |  no  |  || slug | string |  yes  |  || teaser_tag | string |  no  |  || tryouts | [string] |  no  |  || type | string |  no  |  || uid | number |  no  |  |

---

#### [ProductDetailAttribute](#ProductDetailAttribute)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || key | string |  no  |  || type | string |  no  |  || value | string |  no  |  |

---

#### [ProductDetailGroupedAttribute](#ProductDetailGroupedAttribute)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || details | [[ProductDetailAttribute](#ProductDetailAttribute)] |  no  |  || title | string |  no  |  |

---

#### [ProductDownloadsResponse](#ProductDownloadsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || items | [[ProductTemplateExportResponse](#ProductTemplateExportResponse)] |  no  |  |

---

#### [ProductFilters](#ProductFilters)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || key | [ProductFiltersKey](#ProductFiltersKey) |  yes  |  || values | [[ProductFiltersValue](#ProductFiltersValue)] |  yes  |  |

---

#### [ProductFiltersKey](#ProductFiltersKey)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || display | string |  yes  |  || kind | string |  no  |  || logo | string |  no  |  || name | string |  yes  |  || operators | [string] |  no  |  |

---

#### [ProductFiltersValue](#ProductFiltersValue)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || count | number |  no  |  || currency_code | string |  no  |  || currency_symbol | string |  no  |  || display | string |  yes  |  || display_format | string |  no  |  || is_selected | boolean |  yes  |  || max | number |  no  |  || min | number |  no  |  || query_format | string |  no  |  || selected_max | number |  no  |  || selected_min | number |  no  |  || value | any |  yes  |  |

---

#### [ProductListingDetail](#ProductListingDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || attributes | string |  no  |  || brand | [ProductBrand](#ProductBrand) |  no  |  || color | string |  no  |  || description | string |  no  |  || discount | string |  no  |  || grouped_attributes | [[ProductDetailGroupedAttribute](#ProductDetailGroupedAttribute)] |  no  |  || has_variant | boolean |  no  |  || highlights | [string] |  no  |  || image_nature | string |  no  |  || item_code | string |  no  |  || item_type | string |  no  |  || medias | [[Media1](#Media1)] |  no  |  || name | string |  no  |  || price | [ProductListingPrice](#ProductListingPrice) |  no  |  || product_online_date | string |  no  |  || promo_meta | string |  no  |  || rating | number |  no  |  || rating_count | number |  no  |  || sellable | boolean |  no  |  || short_description | string |  no  |  || similars | [string] |  no  |  || slug | string |  yes  |  || teaser_tag | string |  no  |  || tryouts | [string] |  no  |  || type | string |  no  |  || uid | number |  no  |  |

---

#### [ProductListingPrice](#ProductListingPrice)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || effective | [Price1](#Price1) |  no  |  || marked | [Price1](#Price1) |  no  |  |

---

#### [ProductListingResponse](#ProductListingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || items | [[Product](#Product)] |  no  |  || page | [Page](#Page) |  no  |  |

---

#### [ProductListingResponseV2](#ProductListingResponseV2)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || items | [[ProductSchemaV2](#ProductSchemaV2)] |  no  |  || page | [Page](#Page) |  no  |  |

---

#### [ProductPublish](#ProductPublish)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || is_set | boolean |  no  |  || product_online_date | string |  no  |  |

---

#### [ProductPublish1](#ProductPublish1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || is_set | boolean |  no  |  || product_online_date | string |  no  |  |

---

#### [ProductPublished](#ProductPublished)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || is_set | boolean |  no  |  || product_online_date | number |  no  |  |

---

#### [ProductReturnConfigSerializer](#ProductReturnConfigSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || on_same_store | boolean |  no  |  || store_uid | number |  no  |  |

---

#### [ProductSchemaV2](#ProductSchemaV2)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || _custom_json | string |  no  |  || all_company_ids | [number] |  no  |  || all_identifiers | [string] |  no  |  || all_sizes | [string] |  no  |  || attributes | string |  no  |  || brand | [Brand](#Brand) |  no  |  || brand_uid | number |  no  |  || category | string |  no  |  || category_slug | string |  no  |  || category_uid | number |  no  |  || color | string |  no  |  || company_id | number |  no  |  || country_of_origin | string |  no  |  || created_by | string |  no  |  || created_on | string |  no  |  || currency | string |  no  |  || custom_order | string |  no  |  || departments | [number] |  no  |  || description | string |  no  |  || highlights | [string] |  no  |  || hsn_code | string |  no  |  || id | string |  no  |  || image_nature | string |  no  |  || images | [[Image](#Image)] |  no  |  || is_active | boolean |  no  |  || is_dependent | boolean |  no  |  || is_expirable | boolean |  no  |  || is_image_less_product | boolean |  no  |  || is_physical | boolean |  no  |  || is_set | boolean |  no  |  || item_code | string |  no  |  || item_type | string |  no  |  || l3_mapping | [string] |  no  |  || media | [[Media1](#Media1)] |  no  |  || modified_by | string |  no  |  || modified_on | string |  no  |  || moq | string |  no  |  || multi_size | boolean |  no  |  || name | string |  no  |  || net_quantity | [NetQuantityResponse](#NetQuantityResponse) |  no  |  || no_of_boxes | number |  no  |  || pending | string |  no  |  || primary_color | string |  no  |  || product_group_tag | [string] |  no  |  || product_publish | [ProductPublish1](#ProductPublish1) |  no  |  || return_config | [ReturnConfigResponse](#ReturnConfigResponse) |  no  |  || short_description | string |  no  |  || size_guide | string |  no  |  || sizes | [string] |  no  |  || slug | string |  no  |  || stage | string |  no  |  || tags | [string] |  no  |  || tax_identifier | string |  no  |  || teaser_tag | string |  no  |  || template_tag | string |  no  |  || trader | [[Trader](#Trader)] |  no  |  || uid | number |  no  |  || variant_group | string |  no  |  || variant_media | string |  no  |  || variants | string |  no  |  || verified_by | [VerifiedBy](#VerifiedBy) |  no  |  || verified_on | string |  no  |  |

---

#### [ProductSize](#ProductSize)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || max | number |  yes  |  || min | number |  yes  |  |

---

#### [ProductSizeDeleteDataResponse](#ProductSizeDeleteDataResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || company_id | number |  no  |  || item_id | number |  no  |  || size | string |  no  |  |

---

#### [ProductSizeDeleteResponse](#ProductSizeDeleteResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || data | [ProductSizeDeleteDataResponse](#ProductSizeDeleteDataResponse) |  no  |  || success | boolean |  no  |  |

---

#### [ProductSortOn](#ProductSortOn)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || is_selected | boolean |  no  |  || name | string |  no  |  || value | string |  no  |  |

---

#### [ProductTagsViewResponse](#ProductTagsViewResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || items | [string] |  no  |  |

---

#### [ProductTemplate](#ProductTemplate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || attributes | [string] |  no  |  || categories | [string] |  no  |  || created_by | string |  no  |  || created_on | string |  no  |  || departments | [string] |  no  |  || description | string |  no  |  || is_active | boolean |  no  |  || is_archived | boolean |  no  |  || is_expirable | boolean |  yes  |  || is_physical | boolean |  yes  |  || logo | string |  no  |  || modified_by | string |  no  |  || modified_on | string |  no  |  || name | string |  no  |  || slug | string |  yes  |  || tag | string |  no  |  |

---

#### [ProductTemplateDownloadsExport](#ProductTemplateDownloadsExport)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || filters | [ProductTemplateExportFilterRequest](#ProductTemplateExportFilterRequest) |  no  |  || notification_emails | [string] |  no  |  || type | string |  no  |  |

---

#### [ProductTemplateExportFilterRequest](#ProductTemplateExportFilterRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || brands | [string] |  no  |  || catalogue_types | [string] |  yes  |  || from_date | string |  no  |  || templates | [string] |  yes  |  || to_date | string |  no  |  |

---

#### [ProductTemplateExportResponse](#ProductTemplateExportResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || completed_on | string |  no  |  || created_by | [UserInfo1](#UserInfo1) |  no  |  || filters | string |  no  |  || modified_on | string |  no  |  || notification_emails | [string] |  no  |  || seller_id | number |  yes  |  || status | string |  no  |  || task_id | string |  yes  |  || type | string |  no  |  || url | string |  no  |  |

---

#### [ProductVariants](#ProductVariants)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || brand_uid | number |  no  |  || category_uid | number |  no  |  || item_code | string |  no  |  || media | [[Media1](#Media1)] |  no  |  || name | string |  no  |  || uid | number |  no  |  |

---

#### [ProductVariantsResponse](#ProductVariantsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || page | [Page](#Page) |  no  |  || variants | [[ProductVariants](#ProductVariants)] |  no  |  |

---

#### [Properties](#Properties)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || brand_uid | string |  no  |  || category_slug | string |  no  |  || command | string |  no  |  || country_of_origin | string |  no  |  || currency | string |  no  |  || custom_order | string |  no  |  || description | string |  no  |  || highlights | string |  no  |  || hsn_code | string |  no  |  || is_active | string |  no  |  || is_dependent | string |  no  |  || item_code | string |  no  |  || item_type | string |  no  |  || media | string |  no  |  || multi_size | string |  no  |  || name | string |  no  |  || no_of_boxes | string |  no  |  || product_group_tag | string |  no  |  || product_publish | string |  no  |  || return_config | string |  no  |  || short_description | string |  no  |  || size_guide | string |  no  |  || sizes | string |  no  |  || slug | string |  no  |  || tags | string |  no  |  || teaser_tag | string |  no  |  || trader | string |  no  |  || trader_type | string |  no  |  || variants | string |  no  |  |

---

#### [PTErrorResponse](#PTErrorResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || code | string |  no  |  || errors | string |  no  |  || message | string |  no  |  || meta | string |  no  |  || status | number |  no  |  |

---

#### [Quantities](#Quantities)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || damaged | [QuantityBase](#QuantityBase) |  no  |  || not_available | [QuantityBase](#QuantityBase) |  no  |  || order_committed | [QuantityBase](#QuantityBase) |  no  |  || sellable | [QuantityBase](#QuantityBase) |  no  |  |

---

#### [QuantitiesArticle](#QuantitiesArticle)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || damaged | [Quantity](#Quantity) |  no  |  || not_available | [Quantity](#Quantity) |  no  |  || order_committed | [Quantity](#Quantity) |  no  |  || sellable | [Quantity](#Quantity) |  no  |  |

---

#### [Quantity](#Quantity)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || count | number |  no  |  |

---

#### [QuantityBase](#QuantityBase)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || count | number |  no  |  || updated_at | string |  no  |  |

---

#### [ReturnConfig](#ReturnConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || returnable | boolean |  yes  |  || time | number |  yes  |  || unit | string |  yes  |  |

---

#### [ReturnConfig1](#ReturnConfig1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || returnable | boolean |  no  |  || time | number |  no  |  || unit | string |  no  |  |

---

#### [ReturnConfig2](#ReturnConfig2)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || returnable | boolean |  no  |  || time | number |  no  |  || unit | string |  no  |  |

---

#### [ReturnConfigResponse](#ReturnConfigResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || returnable | boolean |  no  |  || time | number |  no  |  || unit | string |  no  |  |

---

#### [SearchKeywordResult](#SearchKeywordResult)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || query | string |  yes  |  || sort_on | string |  yes  |  |

---

#### [SecondLevelChild](#SecondLevelChild)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || _custom_json | string |  no  |  || action | [Action](#Action) |  no  |  || banners | [ImageUrls](#ImageUrls) |  no  |  || childs | [[ThirdLevelChild](#ThirdLevelChild)] |  no  |  || name | string |  no  |  || slug | string |  no  |  || uid | number |  no  |  |

---

#### [SellerPhoneNumber](#SellerPhoneNumber)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || country_code | number |  yes  |  || number | string |  yes  |  |

---

#### [SEOData](#SEOData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || description | string |  no  |  || title | string |  no  |  |

---

#### [SeoDetail](#SeoDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || description | string |  no  |  || title | string |  no  |  |

---

#### [SetSize](#SetSize)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || pieces | number |  yes  |  || size | string |  yes  |  |

---

#### [SingleCategoryResponse](#SingleCategoryResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || data | [Category](#Category) |  no  |  |

---

#### [SingleProductResponse](#SingleProductResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || data | [ProductSchemaV2](#ProductSchemaV2) |  no  |  |

---

#### [Size](#Size)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || display | string |  no  |  || is_available | boolean |  no  |  || quantity | number |  no  |  || value | string |  no  |  |

---

#### [SizeDistribution](#SizeDistribution)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || sizes | [[SetSize](#SetSize)] |  yes  |  |

---

#### [SizeGuideResponse](#SizeGuideResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || active | boolean |  no  |  || brand_id | number |  no  |  || company_id | number |  no  |  || created_by | string |  no  |  || created_on | string |  no  |  || guide | string |  no  |  || id | string |  no  |  || modified_by | string |  no  |  || modified_on | string |  no  |  || name | string |  no  |  || subtitle | string |  no  |  || tag | string |  no  |  || title | string |  no  |  |

---

#### [StoreAssignResponse](#StoreAssignResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || _id | string |  no  |  || article_assignment | [ArticleAssignment1](#ArticleAssignment1) |  yes  |  || company_id | number |  no  |  || group_id | string |  no  |  || index | number |  no  |  || item_id | number |  yes  |  || meta | string |  no  |  || price_effective | number |  no  |  || price_marked | number |  no  |  || quantity | number |  yes  |  || s_city | string |  no  |  || size | string |  yes  |  || status | boolean |  yes  |  || store_id | number |  no  |  || store_pincode | number |  no  |  || strategy_wise_listing | [string] |  no  |  || uid | string |  no  |  |

---

#### [StoreDetail](#StoreDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || additional_contacts | [string] |  no  |  || address | string |  no  |  || company_id | number |  no  |  || created_on | string |  no  |  || display_name | string |  no  |  || documents | [string] |  no  |  || manager | string |  no  |  || modified_on | string |  no  |  || name | string |  no  |  || store_code | string |  no  |  || store_type | string |  no  |  || timing | string |  no  |  || uid | number |  no  |  |

---

#### [StoreMeta](#StoreMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || id | number |  yes  |  |

---

#### [SuccessResponse](#SuccessResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || success | boolean |  no  |  |

---

#### [SuccessResponse1](#SuccessResponse1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || success | boolean |  no  |  || uid | number |  no  |  |

---

#### [TaxIdentifier](#TaxIdentifier)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || hsn_code | string |  no  |  || hsn_code_id | string |  no  |  || reporting_hsn | string |  no  |  |

---

#### [TaxSlab](#TaxSlab)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || cess | number |  no  |  || effective_date | string |  yes  |  || rate | number |  yes  |  || threshold | number |  yes  |  |

---

#### [TeaserTag](#TeaserTag)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || tag | string |  no  |  || url | string |  no  |  |

---

#### [TemplateDetails](#TemplateDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || attributes | [string] |  no  |  || categories | [string] |  no  |  || departments | [string] |  no  |  || description | string |  no  |  || id | string |  no  |  || is_active | boolean |  no  |  || is_archived | boolean |  no  |  || is_expirable | boolean |  yes  |  || is_physical | boolean |  yes  |  || logo | string |  no  |  || name | string |  no  |  || slug | string |  yes  |  || tag | string |  no  |  |

---

#### [TemplatesResponse](#TemplatesResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || items | [ProductTemplate](#ProductTemplate) |  no  |  || page | [Page](#Page) |  no  |  |

---

#### [TemplatesValidationResponse](#TemplatesValidationResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || data | [TemplateValidationData](#TemplateValidationData) |  no  |  || template_details | [TemplateDetails](#TemplateDetails) |  no  |  |

---

#### [TemplateValidationData](#TemplateValidationData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || global_validation | [GlobalValidation](#GlobalValidation) |  no  |  || template_validation | string |  no  |  |

---

#### [ThirdLevelChild](#ThirdLevelChild)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || _custom_json | string |  no  |  || action | [Action](#Action) |  no  |  || banners | [ImageUrls](#ImageUrls) |  no  |  || childs | [string] |  no  |  || name | string |  no  |  || slug | string |  no  |  || uid | number |  no  |  |

---

#### [Trader](#Trader)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || address | [string] |  no  |  || name | string |  yes  |  || type | string |  no  |  |

---

#### [Trader1](#Trader1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || address | [string] |  yes  |  || name | string |  yes  |  || type | string |  yes  |  |

---

#### [Trader2](#Trader2)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || address | [string] |  no  |  || name | string |  no  |  || type | string |  no  |  |

---

#### [UpdateCollection](#UpdateCollection)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || _custom_json | string |  no  |  || _locale_language | string |  no  |  || _schedule | [CollectionSchedule](#CollectionSchedule) |  no  |  || allow_facets | boolean |  no  |  || allow_sort | boolean |  no  |  || badge | [CollectionBadge](#CollectionBadge) |  no  |  || banners | [CollectionBanner](#CollectionBanner) |  no  |  || description | string |  no  |  || is_active | boolean |  no  |  || is_visible | boolean |  no  |  || logo | [CollectionImage](#CollectionImage) |  no  |  || meta | string |  no  |  || modified_by | [UserInfo](#UserInfo) |  no  |  || name | string |  no  |  || priority | number |  no  |  || published | boolean |  no  |  || query | [[CollectionQuery](#CollectionQuery)] |  no  |  || seo | [SeoDetail](#SeoDetail) |  no  |  || slug | string |  no  |  || sort_on | string |  no  |  || tags | [string] |  no  |  || type | string |  no  |  || visible_facets_keys | [string] |  no  |  |

---

#### [UpdatedResponse](#UpdatedResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || items_not_updated | [number] |  no  |  || message | string |  no  |  |

---

#### [UserCommon](#UserCommon)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || company_id | number |  no  |  || user_id | string |  no  |  || username | string |  no  |  |

---

#### [UserDetail](#UserDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || contact | string |  no  |  || super_user | boolean |  no  |  || user_id | string |  yes  |  || username | string |  yes  |  |

---

#### [UserDetail1](#UserDetail1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || full_name | string |  no  |  || user_id | string |  no  |  || username | string |  no  |  |

---

#### [UserInfo](#UserInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || email | string |  no  |  || uid | string |  no  |  || user_id | string |  no  |  || username | string |  no  |  |

---

#### [UserInfo1](#UserInfo1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || email | string |  no  |  || uid | string |  no  |  || user_id | string |  no  |  || username | string |  no  |  |

---

#### [UserSerializer](#UserSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || _id | string |  no  |  || contact | string |  no  |  || uid | string |  no  |  || user_id | string |  no  |  || username | string |  no  |  |

---

#### [UserSerializer1](#UserSerializer1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || contact | string |  no  |  || user_id | string |  no  |  || username | string |  no  |  |

---

#### [UserSerializer2](#UserSerializer2)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || contact | string |  no  |  || user_id | string |  no  |  || username | string |  no  |  |

---

#### [ValidateIdentifier](#ValidateIdentifier)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || gtin_type | string |  yes  |  || gtin_value | string |  yes  |  || primary | boolean |  no  |  |

---

#### [ValidateProduct](#ValidateProduct)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || valid | boolean |  no  |  |

---

#### [ValidateSizeGuide](#ValidateSizeGuide)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || active | boolean |  no  |  || brand_id | number |  no  |  || company_id | number |  no  |  || created_by | string |  no  |  || created_on | string |  no  |  || description | string |  no  |  || guide | [Guide](#Guide) |  no  |  || id | string |  no  |  || image | string |  no  |  || modified_by | string |  no  |  || modified_on | string |  no  |  || name | string |  yes  |  || subtitle | string |  no  |  || tag | string |  no  |  || title | string |  yes  |  |

---

#### [VerifiedBy](#VerifiedBy)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || user_id | string |  no  |  || username | string |  no  |  |

---

#### [WeightResponse](#WeightResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || is_default | boolean |  yes  |  || shipping | number |  yes  |  || unit | string |  yes  |  |

---

#### [WeightResponse1](#WeightResponse1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || shipping | number |  no  |  || unit | string |  no  |  |

---




### Enums





 #### [PageType](#PageType)
 Type : string

 | Name | Value | Description |
 | ---- | ----- | ----------- |
 | aboutUs | about-us | Symbolic link for About Us: /about-us |
 | addresses | addresses | Symbolic link for Saved Addresses: /profile/address |
 | blog | blog | Symbolic link for Blog: /blog/:slug |
 | brands | brands | Symbolic link for Brands: /brands/:department |
 | cards | cards | Symbolic link for Saved Cards: /profile/my-cards |
 | cart | cart | Symbolic link for Cart: /cart/bag/ |
 | categories | categories | Symbolic link for Categories: /categories/:department |
 | brand | brand | Symbolic link for Brand: /brand/:slug |
 | category | category | Symbolic link for Category: /category/:slug |
 | collection | collection | Symbolic link for Collection: /collection/:slug |
 | collections | collections | Symbolic link for Collections: /collections/ |
 | contactUs | contact-us | Symbolic link for Contact Us: /contact-us/ |
 | external | external | Symbolic link for External Link: /external/ |
 | faq | faq | Symbolic link for FAQ: /faq |
 | freshchat | freshchat | Symbolic link for Chat by Freshchat: /freshchat |
 | home | home | Symbolic link for Home: / |
 | notificationSettings | notification-settings | Symbolic link for Notification Settings: /notification-settings |
 | orders | orders | Symbolic link for Orders: /profile/orders |
 | page | page | Symbolic link for Page: /page/:slug |
 | policy | policy | Symbolic link for Privacy Policy: /privacy-policy |
 | product | product | Symbolic link for Product: /product/:slug |
 | productReviews | product-reviews | Symbolic link for Product Reviews: /product/:slug/reviews |
 | addProductReview | add-product-review | Symbolic link for Add Product review: /product/:slug/add-review |
 | productRequest | product-request | Symbolic link for Product Request: /product-request/ |
 | products | products | Symbolic link for Products: /products/ |
 | profile | profile | Symbolic link for Profile: /profile |
 | profileOrderShipment | profile-order-shipment | Symbolic link for profile orders shipment: /profile/orders/shipment/:shipmentid |
 | profileBasic | profile-basic | Symbolic link for Basic Profile: /profile/details |
 | profileCompany | profile-company | Symbolic link for Profile Company: /profile/company |
 | profileEmails | profile-emails | Symbolic link for Profile Emails: /profile/email |
 | profilePhones | profile-phones | Symbolic link for Profile Phones: /profile/phone |
 | rateUs | rate-us | Symbolic link for Rate Us: /rate-us |
 | referEarn | refer-earn | Symbolic link for Refer & Earn: /profile/refer-earn |
 | settings | settings | Symbolic link for Settings: /setting/currency |
 | sharedCart | shared-cart | Symbolic link for Shared Cart: /shared-cart/:token |
 | tnc | tnc | Symbolic link for Terms and Conditions: /terms-and-conditions |
 | trackOrder | track-order | Symbolic link for Track Order: /order-tracking/:orderId |
 | wishlist | wishlist | Symbolic link for Wishlist: /wishlist/ |
 | sections | sections | Symbolic link for Sections: /sections/:group |
 | form | form | Symbolic link for Form: /form/:slug |
 | cartDelivery | cart-delivery | Symbolic link for Cart Delivery: /cart/delivery |
 | cartPayment | cart-payment | Symbolic link for Cart Payment Information: /cart/payment-info |
 | cartReview | cart-review | Symbolic link for Cart Order Review: /cart/order-review |
 | login | login | Symbolic link for Login: /auth/login |
 | register | register | Symbolic link for Register: /auth/register |
 | shippingPolicy | shipping-policy | Symbolic link for Shipping policy: /shipping-policy |
 | returnPolicy | return-policy | Symbolic link for Return policy: /return-policy |

---






