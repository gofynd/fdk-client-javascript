




##### [Back to Platform docs](./README.md)

## CompanyProfile Methods


* [cbsOnboardGet](#cbsonboardget)
* [updateCompany](#updatecompany)
* [getCompanyMetrics](#getcompanymetrics)
* [getBrand](#getbrand)
* [editBrand](#editbrand)
* [createBrand](#createbrand)
* [getBrands](#getbrands)
* [createCompanyBrandMapping](#createcompanybrandmapping)
* [getLocations](#getlocations)
* [createLocation](#createlocation)
* [getLocationDetail](#getlocationdetail)
* [updateLocation](#updatelocation)
* [createLocationBulk](#createlocationbulk)
* [getOptimalLocations](#getoptimallocations)



## Methods with example and description




### cbsOnboardGet
Get company profile



```javascript
// Promise
const promise = client.companyProfile.cbsOnboardGet();

// Async/Await
const data = await client.companyProfile.cbsOnboardGet();
```






This API allows to view the company profile of the seller account.

*Returned Response:*




[GetCompanyProfileSerializerResponse](#GetCompanyProfileSerializerResponse)

Company profile object. See example below or refer `GetCompanyProfileSerializerResponse` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "documents": [
    {
      "verified": true,
      "legal_name": "SHOPSENSE RETAIL TECHNOLOGIES PRIVATE LIMITED",
      "value": "AALCA0442L",
      "type": "pan"
    }
  ],
  "created_by": {
    "user_id": "123",
    "username": "917827311650_22960"
  },
  "business_info": "I sell",
  "franchise_enabled": true,
  "company_type": "mbo",
  "warnings": {},
  "business_details": {
    "website": {
      "url": "https://www.google.com"
    }
  },
  "addresses": [
    {
      "country": "India",
      "longitude": 72.8231511,
      "state": "Maharashtra",
      "address1": "A/204, Sai Vandan, Tulinj Road. Nallasopara East, ",
      "country_code": "IN",
      "latitude": 19.4232024,
      "pincode": 401209,
      "address_type": "office",
      "city": "Mumbai"
    },
    {
      "country": "India",
      "longitude": 72.8231511,
      "state": "Maharashtra",
      "address1": "A/204, Sai Vandan, Tulinj Road. Nallasopara East, ",
      "country_code": "IN",
      "latitude": 19.4232024,
      "pincode": 401209,
      "address_type": "registered",
      "city": "Mumbai"
    }
  ],
  "modified_by": {
    "user_id": "123",
    "username": "917827311650_22960"
  },
  "notification_emails": [
    "gaurangpatel@gofynd.com"
  ],
  "business_type": "huf",
  "name": "Cache Company",
  "stage": "verified",
  "uid": 1,
  "business_country_info": {
    "country": "India",
    "country_code": "IN"
  }
}
```
</details>









---


### updateCompany
Edit company profile



```javascript
// Promise
const promise = client.companyProfile.updateCompany({  body : value });

// Async/Await
const data = await client.companyProfile.updateCompany({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [UpdateCompany](#UpdateCompany) | yes | Request body |


This API allows to edit the company profile of the seller account.

*Returned Response:*




[ProfileSuccessResponse](#ProfileSuccessResponse)

Returns a success message




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "uid": 1,
  "success": true
}
```
</details>









---


### getCompanyMetrics
Get company metrics



```javascript
// Promise
const promise = client.companyProfile.getCompanyMetrics();

// Async/Await
const data = await client.companyProfile.getCompanyMetrics();
```






This API allows to view the company metrics, i.e. the status of its brand and stores. Also its allows to view the number of products, company documents & store documents which are verified and unverified.

*Returned Response:*




[MetricsSerializer](#MetricsSerializer)

Metrics response object. See example below or refer `MetricsSerializer` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "uid": 1,
  "stage": "complete",
  "store": {
    "verified": 1,
    "pending": 1
  },
  "brand": {
    "verified": 1,
    "pending": 1
  },
  "product": {
    "verified": 0,
    "pending": 0
  },
  "company_documents": {
    "verified": 1,
    "pending": 0
  },
  "store_documents": {
    "verified": 0,
    "pending": 2
  }
}
```
</details>









---


### getBrand
Get a single brand.



```javascript
// Promise
const promise = client.companyProfile.getBrand({  brandId : value });

// Async/Await
const data = await client.companyProfile.getBrand({  brandId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| brandId | string | yes | Id of the brand to be viewed. |  



This API helps to get data associated to a particular brand.

*Returned Response:*




[GetBrandResponseSerializer](#GetBrandResponseSerializer)

Brand object. See example below or refer `GetBrandResponseSerializer` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "stage": "verified",
  "_custom_json": {},
  "uid": 1,
  "logo": "http://cdn4.gofynd.com/media/logo/brand/original/4597_40d1ce44d61940d4829a3c54951bd9ee.jpg",
  "warnings": {},
  "_locale_language": {},
  "name": "edited brand",
  "slug_key": "brand-2",
  "banner": {
    "portrait": "http://cdn4.gofynd.com/media/banner_portrait/brand/original/7021_16fc50205c40477daf419b64ec64c64c.jpg",
    "landscape": "http://cdn4.gofynd.com/media/banner/brand/original/7020_f9e91f7d501c4f2985c09bd196ed304d.jpg"
  },
  "created_by": {
    "username": "silverbolt",
    "user_id": "0"
  },
  "modified_by": {
    "username": "917827311650_22960",
    "user_id": "123"
  },
  "verified_by": {
    "username": "917827311650_22960",
    "user_id": "123"
  },
  "synonyms": [
    "xyz"
  ]
}
```
</details>









---


### editBrand
Edit a brand.



```javascript
// Promise
const promise = client.companyProfile.editBrand({  brandId : value,
 body : value });

// Async/Await
const data = await client.companyProfile.editBrand({  brandId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| brandId | string | yes | Id of the brand to be viewed. |  
| body | [CreateUpdateBrandRequestSerializer](#CreateUpdateBrandRequestSerializer) | yes | Request body |


This API allows to edit meta of a brand.

*Returned Response:*




[ProfileSuccessResponse](#ProfileSuccessResponse)

Returns a success response




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "uid": 1,
  "success": true
}
```
</details>









---


### createBrand
Create a Brand.



```javascript
// Promise
const promise = client.companyProfile.createBrand({  body : value });

// Async/Await
const data = await client.companyProfile.createBrand({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CreateUpdateBrandRequestSerializer](#CreateUpdateBrandRequestSerializer) | yes | Request body |


This API allows to create a brand associated to a company.

*Returned Response:*




[ProfileSuccessResponse](#ProfileSuccessResponse)

Returns a success response




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "uid": 1,
  "success": true
}
```
</details>









---


### getBrands
Get brands associated to a company



```javascript
// Promise
const promise = client.companyProfile.getBrands({  pageNo : value,
 pageSize : value,
 q : value });

// Async/Await
const data = await client.companyProfile.getBrands({  pageNo : value,
 pageSize : value,
 q : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNo | number | no | The page number to navigate through the given set of results |    
| pageSize | number | no | Number of items to retrieve in each page. Default is 10. |    
| q | string | no | Search term for name. |  



This API helps to get view brands associated to a particular company.

*Returned Response:*




[CompanyBrandListSerializer](#CompanyBrandListSerializer)

Brand object. See example below or refer `CompanyBrandListSerializer` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "items": [
    {
      "brand": {
        "stage": "complete",
        "uid": 2,
        "banner": {
          "portrait": "http://cdn4.gofynd.com/media/banner_portrait/brand/original/7021_16fc50205c40477daf419b64ec64c64c.jpg",
          "landscape": "http://cdn4.gofynd.com/media/banner/brand/original/7020_f9e91f7d501c4f2985c09bd196ed304d.jpg"
        },
        "modified_by": {
          "user_id": "123",
          "username": "917827311650_22960"
        },
        "slug_key": "test-post",
        "synonyms": [
          "xyz"
        ],
        "created_on": "2021-02-25T15:21:57.666000+00:00",
        "created_by": {
          "user_id": "123",
          "username": "917827311650_22960"
        },
        "modified_on": "2021-02-25T15:21:57.666000+00:00",
        "name": "test_post",
        "logo": "http://cdn4.gofynd.com/media/logo/brand/original/4597_40d1ce44d61940d4829a3c54951bd9ee.jpg"
      },
      "stage": "complete",
      "uid": 2,
      "modified_by": {
        "user_id": "123",
        "username": "917827311650_22960"
      },
      "company": {
        "business_type": "huf",
        "stage": "complete",
        "uid": 1,
        "addresses": [
          {
            "city": "Mumbai Suburban",
            "latitude": 19.058461,
            "longitude": 72.871395,
            "address1": "Chunabhatti Phatak, Maharashtra Nagar, Maharashtra Nagar, ",
            "country_code": "IN",
            "state": "Maharashtra",
            "country": "India",
            "pincode": 400070,
            "address_type": "office"
          },
          {
            "city": "Mumbai Suburban",
            "latitude": 19.058461,
            "longitude": 72.871395,
            "address1": "Chunabhatti Phatak, Maharashtra Nagar, Maharashtra Nagar, ",
            "country_code": "IN",
            "state": "Maharashtra",
            "country": "India",
            "pincode": 400070,
            "address_type": "registered"
          }
        ],
        "modified_by": {
          "user_id": "-1",
          "username": "silverbolt"
        },
        "company_type": "mbo",
        "created_on": "2021-02-25T15:21:51.526000+00:00",
        "created_by": {
          "user_id": "123",
          "username": "917827311650_22960"
        },
        "modified_on": "2021-02-25T17:44:55.722000+00:00",
        "name": "Cache Company"
      },
      "created_by": {
        "user_id": "123",
        "username": "917827311650_22960"
      }
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


### createCompanyBrandMapping
Create a company brand mapping.



```javascript
// Promise
const promise = client.companyProfile.createCompanyBrandMapping({  body : value });

// Async/Await
const data = await client.companyProfile.createCompanyBrandMapping({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CompanyBrandPostRequestSerializer](#CompanyBrandPostRequestSerializer) | yes | Request body |


This API allows to create a company brand mapping, for a already existing brand in the system.

*Returned Response:*




[ProfileSuccessResponse](#ProfileSuccessResponse)

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


### getLocations
Get list of locations



```javascript
// Promise
const promise = client.companyProfile.getLocations({  storeType : value,
 q : value,
 stage : value,
 pageNo : value,
 pageSize : value,
 locationIds : value });

// Async/Await
const data = await client.companyProfile.getLocations({  storeType : value,
 q : value,
 stage : value,
 pageNo : value,
 pageSize : value,
 locationIds : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| storeType | string | no | Helps to sort the location list on the basis of location type. |    
| q | string | no | Query that is to be searched. |    
| stage | string | no | to filter companies on basis of verified or unverified companies. |    
| pageNo | number | no | The page number to navigate through the given set of results |    
| pageSize | number | no | Number of items to retrieve in each page. Default is 10. |    
| locationIds | Array<number> | no | Helps to filter stores on the basis of uids. |  



This API allows to view all the locations associated to a company.

*Returned Response:*




[LocationListSerializer](#LocationListSerializer)

Company profile object. See example below or refer `LocationListSerializer` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "items": [
    {
      "company": {
        "business_type": "huf",
        "stage": "complete",
        "uid": 1,
        "addresses": [
          {
            "city": "Mumbai Suburban",
            "latitude": 19.058461,
            "longitude": 72.871395,
            "address1": "Chunabhatti Phatak, Maharashtra Nagar, Maharashtra Nagar, ",
            "country_code": "IN",
            "state": "Maharashtra",
            "country": "India",
            "pincode": 400070,
            "address_type": "office"
          },
          {
            "city": "Mumbai Suburban",
            "latitude": 19.058461,
            "longitude": 72.871395,
            "address1": "Chunabhatti Phatak, Maharashtra Nagar, Maharashtra Nagar, ",
            "country_code": "IN",
            "state": "Maharashtra",
            "country": "India",
            "pincode": 400070,
            "address_type": "registered"
          }
        ],
        "modified_by": {
          "user_id": "-1",
          "username": "silverbolt"
        },
        "company_type": "mbo",
        "created_on": "2021-02-25T15:21:51.526000+00:00",
        "created_by": {
          "user_id": "123",
          "username": "917827311650_22960"
        },
        "modified_on": "2021-02-25T17:44:55.722000+00:00",
        "name": "Cache Company"
      },
      "address": {
        "city": "MUMBAI",
        "latitude": 19.4232024,
        "longitude": 72.8231511,
        "address1": "A/204, SAI VANDAN, NARAYAN NAGAR, TULINJ ROAD",
        "state": "MAHARASHTRA",
        "country": "INDIA",
        "pincode": 401209
      },
      "timing": [
        {
          "closing": {
            "minute": 0,
            "hour": 22
          },
          "opening": {
            "minute": 0,
            "hour": 11
          },
          "open": true,
          "weekday": "monday"
        },
        {
          "closing": {
            "minute": 0,
            "hour": 22
          },
          "opening": {
            "minute": 0,
            "hour": 11
          },
          "open": true,
          "weekday": "tuesday"
        },
        {
          "closing": {
            "minute": 0,
            "hour": 22
          },
          "opening": {
            "minute": 0,
            "hour": 11
          },
          "open": true,
          "weekday": "wednesday"
        },
        {
          "closing": {
            "minute": 0,
            "hour": 22
          },
          "opening": {
            "minute": 0,
            "hour": 11
          },
          "open": true,
          "weekday": "thursday"
        },
        {
          "closing": {
            "minute": 0,
            "hour": 22
          },
          "opening": {
            "minute": 0,
            "hour": 11
          },
          "open": true,
          "weekday": "friday"
        },
        {
          "closing": {
            "minute": 0,
            "hour": 22
          },
          "opening": {
            "minute": 0,
            "hour": 11
          },
          "open": true,
          "weekday": "saturday"
        },
        {
          "closing": {
            "minute": 0,
            "hour": 22
          },
          "opening": {
            "minute": 0,
            "hour": 11
          },
          "open": true,
          "weekday": "sunday"
        }
      ],
      "documents": [],
      "display_name": "new store",
      "manager": {
        "name": "Yrf",
        "mobile_no": {
          "country_code": 91,
          "number": "83456774567"
        },
        "email": "gbp@jkl.com"
      },
      "code": "code2",
      "product_return_config": {
        "on_same_store": true
      },
      "created_on": "2021-02-25T15:22:04.913000+00:00",
      "created_by": {
        "user_id": "123",
        "username": "917827311650_22960"
      },
      "name": "location2",
      "gst_credentials": {
        "e_invoice": {
          "enabled": false
        }
      },
      "store_type": "high_street",
      "contact_numbers": [
        {
          "country_code": 91,
          "number": "7208229698"
        }
      ],
      "stage": "complete",
      "uid": 2,
      "notification_emails": []
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


### createLocation
Create a location associated to a company.



```javascript
// Promise
const promise = client.companyProfile.createLocation({  body : value });

// Async/Await
const data = await client.companyProfile.createLocation({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [LocationSerializer](#LocationSerializer) | yes | Request body |


This API allows to edit a location associated to a company.

*Returned Response:*




[ProfileSuccessResponse](#ProfileSuccessResponse)

Returns a success response




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "uid": 1,
  "success": true
}
```
</details>









---


### getLocationDetail
Get details of a specific location.



```javascript
// Promise
const promise = client.companyProfile.getLocationDetail({  locationId : value });

// Async/Await
const data = await client.companyProfile.getLocationDetail({  locationId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| locationId | string | yes | Id of the location which you want to view. |  



This API helps to get data associated to a specific location.

*Returned Response:*




[GetLocationSerializer](#GetLocationSerializer)

Brand object. See example below or refer `GetLocationSerializer` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "verified_on": "2021-02-25T15:22:07.140000+00:00",
  "company": {
    "business_type": "huf",
    "stage": "complete",
    "uid": 1,
    "addresses": [
      {
        "city": "Mumbai Suburban",
        "latitude": 19.058461,
        "longitude": 72.871395,
        "address1": "Chunabhatti Phatak, Maharashtra Nagar, Maharashtra Nagar, ",
        "country_code": "IN",
        "state": "Maharashtra",
        "country": "India",
        "pincode": 400070,
        "address_type": "office"
      },
      {
        "city": "Mumbai Suburban",
        "latitude": 19.058461,
        "longitude": 72.871395,
        "address1": "Chunabhatti Phatak, Maharashtra Nagar, Maharashtra Nagar, ",
        "country_code": "IN",
        "state": "Maharashtra",
        "country": "India",
        "pincode": 400070,
        "address_type": "registered"
      }
    ],
    "modified_by": {
      "user_id": "-1",
      "username": "silverbolt"
    },
    "company_type": "mbo",
    "created_by": {
      "user_id": "123",
      "username": "917827311650_22960"
    },
    "name": "Cache Company"
  },
  "address": {
    "city": "MUMBAI",
    "landmark": "",
    "latitude": 19.4232024,
    "longitude": 72.8231511,
    "address2": "",
    "address1": "A/204, SAI VANDAN, NARAYAN NAGAR, TULINJ ROAD",
    "state": "MAHARASHTRA",
    "country": "INDIA",
    "pincode": 401209
  },
  "timing": [
    {
      "closing": {
        "minute": 0,
        "hour": 22
      },
      "opening": {
        "minute": 0,
        "hour": 11
      },
      "open": true,
      "weekday": "monday"
    },
    {
      "closing": {
        "minute": 0,
        "hour": 22
      },
      "opening": {
        "minute": 0,
        "hour": 11
      },
      "open": true,
      "weekday": "tuesday"
    },
    {
      "closing": {
        "minute": 0,
        "hour": 22
      },
      "opening": {
        "minute": 0,
        "hour": 11
      },
      "open": true,
      "weekday": "wednesday"
    },
    {
      "closing": {
        "minute": 0,
        "hour": 22
      },
      "opening": {
        "minute": 0,
        "hour": 11
      },
      "open": true,
      "weekday": "thursday"
    },
    {
      "closing": {
        "minute": 0,
        "hour": 22
      },
      "opening": {
        "minute": 0,
        "hour": 11
      },
      "open": true,
      "weekday": "friday"
    },
    {
      "closing": {
        "minute": 0,
        "hour": 22
      },
      "opening": {
        "minute": 0,
        "hour": 11
      },
      "open": true,
      "weekday": "saturday"
    },
    {
      "closing": {
        "minute": 0,
        "hour": 22
      },
      "opening": {
        "minute": 0,
        "hour": 11
      },
      "open": true,
      "weekday": "sunday"
    }
  ],
  "documents": [],
  "warnings": {},
  "display_name": "new store",
  "manager": {
    "name": "Yrf",
    "mobile_no": {
      "country_code": 91,
      "number": "83456774567"
    },
    "email": "gbp@jkl.com"
  },
  "code": "store1",
  "product_return_config": {
    "on_same_store": true
  },
  "modified_by": {
    "user_id": "-1",
    "username": "silverbolt"
  },
  "created_by": {
    "user_id": "123",
    "username": "917827311650_22960"
  },
  "name": "edited_store",
  "gst_credentials": {
    "e_invoice": {
      "enabled": false
    }
  },
  "verified_by": {
    "user_id": "-1",
    "username": "silverbolt"
  },
  "store_type": "high_street",
  "contact_numbers": [
    {
      "country_code": 91,
      "number": "7208229698"
    }
  ],
  "stage": "verified",
  "uid": 1,
  "notification_emails": []
}
```
</details>









---


### updateLocation
Edit a location asscoiated to a company.



```javascript
// Promise
const promise = client.companyProfile.updateLocation({  locationId : value,
 body : value });

// Async/Await
const data = await client.companyProfile.updateLocation({  locationId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| locationId | string | yes | Id of the location which you want to edit. |  
| body | [LocationSerializer](#LocationSerializer) | yes | Request body |


This API allows to edit a location associated to a company.

*Returned Response:*




[ProfileSuccessResponse](#ProfileSuccessResponse)

Returns a success response




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "uid": 1,
  "success": true
}
```
</details>









---


### createLocationBulk
Create a location asscoiated to a company in bulk.



```javascript
// Promise
const promise = client.companyProfile.createLocationBulk({  body : value });

// Async/Await
const data = await client.companyProfile.createLocationBulk({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [BulkLocationSerializer](#BulkLocationSerializer) | yes | Request body |


This API allows to create a location associated to a company.

*Returned Response:*




[ProfileSuccessResponse](#ProfileSuccessResponse)

Returns a success response




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "message": "10 stores inserted",
  "success": true
}
```
</details>









---


### getOptimalLocations
Location Reassignment



```javascript
// Promise
const promise = client.companyProfile.getOptimalLocations({  body : value });

// Async/Await
const data = await client.companyProfile.getOptimalLocations({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [AssignStoreRequestValidator](#AssignStoreRequestValidator) | yes | Request body |




*Returned Response:*




[AssignStoreResponseSerializer](#AssignStoreResponseSerializer)

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



### Schemas

 
 
 #### [BusinessCountryInfo](#BusinessCountryInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country_code | string |  no  |  |
 | country | string |  no  |  |

---


 
 
 #### [GetAddressSerializer](#GetAddressSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address1 | string |  no  |  |
 | address2 | string |  no  |  |
 | country | string |  no  |  |
 | landmark | string |  no  |  |
 | address_type | string |  no  |  |
 | state | string |  no  |  |
 | country_code | string |  no  |  |
 | city | string |  no  |  |
 | latitude | number |  yes  |  |
 | longitude | number |  yes  |  |
 | pincode | number |  no  |  |

---


 
 
 #### [CompanyTaxesSerializer](#CompanyTaxesSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | effective_date | string |  no  |  |
 | enable | boolean |  no  |  |
 | rate | number |  no  |  |

---


 
 
 #### [SellerPhoneNumber](#SellerPhoneNumber)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | number | string |  yes  |  |
 | country_code | number |  yes  |  |

---


 
 
 #### [ContactDetails](#ContactDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | phone | [[SellerPhoneNumber](#SellerPhoneNumber)] |  no  |  |
 | emails | [string] |  no  |  |

---


 
 
 #### [Website](#Website)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | url | string |  no  |  |

---


 
 
 #### [BusinessDetails](#BusinessDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | website | [Website](#Website) |  no  |  |

---


 
 
 #### [UserSerializer](#UserSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | contact | string |  no  |  |
 | username | string |  no  |  |
 | user_id | string |  no  |  |

---


 
 
 #### [Document](#Document)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | verified | boolean |  no  |  |
 | legal_name | string |  no  |  |
 | url | string |  no  |  |
 | value | string |  yes  |  |
 | type | string |  yes  |  |

---


 
 
 #### [GetCompanyProfileSerializerResponse](#GetCompanyProfileSerializerResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | uid | number |  yes  |  |
 | business_country_info | [BusinessCountryInfo](#BusinessCountryInfo) |  no  |  |
 | addresses | [[GetAddressSerializer](#GetAddressSerializer)] |  no  |  |
 | franchise_enabled | boolean |  no  |  |
 | warnings | string |  no  |  |
 | taxes | [[CompanyTaxesSerializer](#CompanyTaxesSerializer)] |  no  |  |
 | contact_details | [ContactDetails](#ContactDetails) |  no  |  |
 | mode | string |  no  |  |
 | stage | string |  no  |  |
 | _custom_json | string |  no  |  |
 | company_type | string |  yes  |  |
 | created_on | string |  no  |  |
 | modified_on | string |  no  |  |
 | notification_emails | [string] |  no  |  |
 | business_details | [BusinessDetails](#BusinessDetails) |  no  |  |
 | verified_on | string |  no  |  |
 | verified_by | [UserSerializer](#UserSerializer) |  no  |  |
 | documents | [[Document](#Document)] |  no  |  |
 | business_info | string |  no  |  |
 | modified_by | [UserSerializer](#UserSerializer) |  no  |  |
 | name | string |  no  |  |
 | business_type | string |  yes  |  |
 | created_by | [UserSerializer](#UserSerializer) |  no  |  |

---


 
 
 #### [ErrorResponse](#ErrorResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string |  no  |  |
 | meta | string |  no  |  |
 | message | string |  no  |  |
 | status | number |  no  |  |

---


 
 
 #### [CompanyTaxesSerializer1](#CompanyTaxesSerializer1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | effective_date | string |  no  |  |
 | enable | boolean |  no  |  |
 | rate | number |  no  |  |

---


 
 
 #### [CreateUpdateAddressSerializer](#CreateUpdateAddressSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address1 | string |  yes  |  |
 | address2 | string |  no  |  |
 | pincode | number |  yes  |  |
 | country | string |  yes  |  |
 | landmark | string |  no  |  |
 | address_type | string |  yes  |  |
 | country_code | string |  no  |  |
 | city | string |  yes  |  |
 | latitude | number |  yes  |  |
 | longitude | number |  yes  |  |
 | state | string |  yes  |  |

---


 
 
 #### [UpdateCompany](#UpdateCompany)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | business_details | [BusinessDetails](#BusinessDetails) |  no  |  |
 | franchise_enabled | boolean |  no  |  |
 | business_info | string |  no  |  |
 | documents | [[Document](#Document)] |  no  |  |
 | name | string |  no  |  |
 | business_type | string |  no  |  |
 | warnings | string |  no  |  |
 | contact_details | [ContactDetails](#ContactDetails) |  no  |  |
 | taxes | [[CompanyTaxesSerializer1](#CompanyTaxesSerializer1)] |  no  |  |
 | notification_emails | [string] |  no  |  |
 | reject_reason | string |  no  |  |
 | _custom_json | string |  no  |  |
 | addresses | [[CreateUpdateAddressSerializer](#CreateUpdateAddressSerializer)] |  no  |  |
 | company_type | string |  no  |  |

---


 
 
 #### [ProfileSuccessResponse](#ProfileSuccessResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | uid | number |  no  |  |
 | success | boolean |  no  |  |

---


 
 
 #### [DocumentsObj](#DocumentsObj)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | verified | number |  no  |  |
 | pending | number |  no  |  |

---


 
 
 #### [MetricsSerializer](#MetricsSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | store | [DocumentsObj](#DocumentsObj) |  no  |  |
 | store_documents | [DocumentsObj](#DocumentsObj) |  no  |  |
 | uid | number |  no  |  |
 | brand | [DocumentsObj](#DocumentsObj) |  no  |  |
 | company_documents | [DocumentsObj](#DocumentsObj) |  no  |  |
 | product | [DocumentsObj](#DocumentsObj) |  no  |  |
 | stage | string |  no  |  |

---


 
 
 #### [BrandBannerSerializer](#BrandBannerSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | portrait | string |  no  |  |
 | landscape | string |  no  |  |

---


 
 
 #### [GetBrandResponseSerializer](#GetBrandResponseSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | uid | number |  no  |  |
 | slug_key | string |  no  |  |
 | synonyms | [string] |  no  |  |
 | logo | string |  no  |  |
 | warnings | string |  no  |  |
 | mode | string |  no  |  |
 | stage | string |  no  |  |
 | _custom_json | string |  no  |  |
 | created_on | string |  no  |  |
 | modified_on | string |  no  |  |
 | banner | [BrandBannerSerializer](#BrandBannerSerializer) |  no  |  |
 | verified_on | string |  no  |  |
 | _locale_language | string |  no  |  |
 | verified_by | [UserSerializer](#UserSerializer) |  no  |  |
 | description | string |  no  |  |
 | modified_by | [UserSerializer](#UserSerializer) |  no  |  |
 | name | string |  yes  |  |
 | created_by | [UserSerializer](#UserSerializer) |  no  |  |
 | reject_reason | string |  no  |  |

---


 
 
 #### [CreateUpdateBrandRequestSerializer](#CreateUpdateBrandRequestSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _locale_language | string |  no  |  |
 | uid | number |  no  |  |
 | logo | string |  yes  |  |
 | description | string |  no  |  |
 | company_id | number |  no  |  |
 | name | string |  yes  |  |
 | brand_tier | string |  no  |  |
 | banner | [BrandBannerSerializer](#BrandBannerSerializer) |  no  |  |
 | _custom_json | string |  no  |  |
 | synonyms | [string] |  no  |  |

---


 
 
 #### [CompanySocialAccounts](#CompanySocialAccounts)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  yes  |  |
 | url | string |  yes  |  |

---


 
 
 #### [CompanyDetails](#CompanyDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | socials | [[CompanySocialAccounts](#CompanySocialAccounts)] |  no  |  |
 | website_url | string |  no  |  |

---


 
 
 #### [CompanySerializer](#CompanySerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | created_on | string |  no  |  |
 | verified_on | string |  no  |  |
 | business_country_info | [BusinessCountryInfo](#BusinessCountryInfo) |  no  |  |
 | uid | number |  no  |  |
 | verified_by | [UserSerializer](#UserSerializer) |  no  |  |
 | details | [CompanyDetails](#CompanyDetails) |  no  |  |
 | modified_by | [UserSerializer](#UserSerializer) |  no  |  |
 | name | string |  no  |  |
 | modified_on | string |  no  |  |
 | business_type | string |  yes  |  |
 | market_channels | [string] |  no  |  |
 | created_by | [UserSerializer](#UserSerializer) |  no  |  |
 | notification_emails | [string] |  no  |  |
 | stage | string |  no  |  |
 | reject_reason | string |  no  |  |
 | _custom_json | string |  no  |  |
 | addresses | [[GetAddressSerializer](#GetAddressSerializer)] |  no  |  |
 | company_type | string |  yes  |  |

---


 
 
 #### [CompanyBrandSerializer](#CompanyBrandSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | created_on | string |  no  |  |
 | verified_on | string |  no  |  |
 | company | [CompanySerializer](#CompanySerializer) |  no  |  |
 | uid | number |  no  |  |
 | verified_by | [UserSerializer](#UserSerializer) |  no  |  |
 | brand | [GetBrandResponseSerializer](#GetBrandResponseSerializer) |  no  |  |
 | modified_by | [UserSerializer](#UserSerializer) |  no  |  |
 | modified_on | string |  no  |  |
 | warnings | string |  no  |  |
 | created_by | [UserSerializer](#UserSerializer) |  no  |  |
 | stage | string |  no  |  |
 | reject_reason | string |  no  |  |

---


 
 
 #### [Page](#Page)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | item_total | number |  no  |  |
 | current | number |  no  |  |
 | has_previous | boolean |  no  |  |
 | next_id | string |  no  |  |
 | type | string |  yes  |  |
 | size | number |  no  |  |
 | has_next | boolean |  no  |  |

---


 
 
 #### [CompanyBrandListSerializer](#CompanyBrandListSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[CompanyBrandSerializer](#CompanyBrandSerializer)] |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [CompanyBrandPostRequestSerializer](#CompanyBrandPostRequestSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | uid | number |  no  |  |
 | company | number |  yes  |  |
 | brands | [number] |  yes  |  |

---


 
 
 #### [LocationManagerSerializer](#LocationManagerSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | mobile_no | [SellerPhoneNumber](#SellerPhoneNumber) |  yes  |  |
 | email | string |  no  |  |

---


 
 
 #### [HolidayDateSerializer](#HolidayDateSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | end_date | string |  yes  |  |
 | start_date | string |  yes  |  |

---


 
 
 #### [HolidaySchemaSerializer](#HolidaySchemaSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | date | [HolidayDateSerializer](#HolidayDateSerializer) |  yes  |  |
 | holiday_type | string |  yes  |  |
 | title | string |  yes  |  |

---


 
 
 #### [GetCompanySerializer](#GetCompanySerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | created_on | string |  no  |  |
 | verified_on | string |  no  |  |
 | uid | number |  no  |  |
 | verified_by | [UserSerializer](#UserSerializer) |  no  |  |
 | modified_by | [UserSerializer](#UserSerializer) |  no  |  |
 | name | string |  no  |  |
 | modified_on | string |  no  |  |
 | business_type | string |  no  |  |
 | created_by | [UserSerializer](#UserSerializer) |  no  |  |
 | stage | string |  no  |  |
 | reject_reason | string |  no  |  |
 | addresses | [[GetAddressSerializer](#GetAddressSerializer)] |  no  |  |
 | company_type | string |  no  |  |

---


 
 
 #### [InvoiceCredSerializer](#InvoiceCredSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | password | string |  no  |  |
 | username | string |  no  |  |
 | enabled | boolean |  no  |  |

---


 
 
 #### [InvoiceDetailsSerializer](#InvoiceDetailsSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | e_waybill | [InvoiceCredSerializer](#InvoiceCredSerializer) |  no  |  |
 | e_invoice | [InvoiceCredSerializer](#InvoiceCredSerializer) |  no  |  |

---


 
 
 #### [ProductReturnConfigSerializer](#ProductReturnConfigSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | on_same_store | boolean |  no  |  |
 | store_uid | number |  no  |  |

---


 
 
 #### [LocationTimingSerializer](#LocationTimingSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | hour | number |  yes  |  |
 | minute | number |  yes  |  |

---


 
 
 #### [LocationDayWiseSerializer](#LocationDayWiseSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | opening | [LocationTimingSerializer](#LocationTimingSerializer) |  no  |  |
 | open | boolean |  yes  |  |
 | weekday | string |  yes  |  |
 | closing | [LocationTimingSerializer](#LocationTimingSerializer) |  no  |  |

---


 
 
 #### [GetLocationSerializer](#GetLocationSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | contact_numbers | [[SellerPhoneNumber](#SellerPhoneNumber)] |  no  |  |
 | manager | [LocationManagerSerializer](#LocationManagerSerializer) |  no  |  |
 | uid | number |  no  |  |
 | code | string |  yes  |  |
 | holiday | [[HolidaySchemaSerializer](#HolidaySchemaSerializer)] |  no  |  |
 | store_type | string |  no  |  |
 | company | [GetCompanySerializer](#GetCompanySerializer) |  no  |  |
 | warnings | string |  no  |  |
 | gst_credentials | [InvoiceDetailsSerializer](#InvoiceDetailsSerializer) |  no  |  |
 | product_return_config | [ProductReturnConfigSerializer](#ProductReturnConfigSerializer) |  no  |  |
 | stage | string |  no  |  |
 | _custom_json | string |  no  |  |
 | created_on | string |  no  |  |
 | display_name | string |  yes  |  |
 | modified_on | string |  no  |  |
 | notification_emails | [string] |  no  |  |
 | timing | [[LocationDayWiseSerializer](#LocationDayWiseSerializer)] |  no  |  |
 | verified_on | string |  no  |  |
 | verified_by | [UserSerializer](#UserSerializer) |  no  |  |
 | phone_number | string |  no  |  |
 | documents | [[Document](#Document)] |  no  |  |
 | modified_by | [UserSerializer](#UserSerializer) |  no  |  |
 | name | string |  yes  |  |
 | address | [GetAddressSerializer](#GetAddressSerializer) |  yes  |  |
 | created_by | [UserSerializer](#UserSerializer) |  no  |  |

---


 
 
 #### [LocationListSerializer](#LocationListSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[GetLocationSerializer](#GetLocationSerializer)] |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [AddressSerializer](#AddressSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address1 | string |  no  |  |
 | address2 | string |  no  |  |
 | country | string |  no  |  |
 | landmark | string |  no  |  |
 | address_type | string |  no  |  |
 | state | string |  no  |  |
 | country_code | string |  no  |  |
 | city | string |  no  |  |
 | latitude | number |  yes  |  |
 | longitude | number |  yes  |  |
 | pincode | number |  no  |  |

---


 
 
 #### [LocationSerializer](#LocationSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | contact_numbers | [[SellerPhoneNumber](#SellerPhoneNumber)] |  no  |  |
 | manager | [LocationManagerSerializer](#LocationManagerSerializer) |  no  |  |
 | company | number |  yes  |  |
 | uid | number |  no  |  |
 | code | string |  yes  |  |
 | display_name | string |  yes  |  |
 | documents | [[Document](#Document)] |  no  |  |
 | _custom_json | string |  no  |  |
 | name | string |  yes  |  |
 | address | [AddressSerializer](#AddressSerializer) |  yes  |  |
 | warnings | string |  no  |  |
 | product_return_config | [ProductReturnConfigSerializer](#ProductReturnConfigSerializer) |  no  |  |
 | holiday | [[HolidaySchemaSerializer](#HolidaySchemaSerializer)] |  no  |  |
 | gst_credentials | [InvoiceDetailsSerializer](#InvoiceDetailsSerializer) |  no  |  |
 | notification_emails | [string] |  no  |  |
 | stage | string |  no  |  |
 | store_type | string |  no  |  |
 | timing | [[LocationDayWiseSerializer](#LocationDayWiseSerializer)] |  no  |  |

---


 
 
 #### [BulkLocationSerializer](#BulkLocationSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [[LocationSerializer](#LocationSerializer)] |  no  |  |

---


 
 
 #### [_ArticleAssignment](#_ArticleAssignment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | level | string |  no  |  |
 | strategy | string |  no  |  |

---


 
 
 #### [_ArticleQuery](#_ArticleQuery)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | size | string |  no  |  |
 | ignored_stores | [number] |  no  |  |
 | item_id | number |  no  |  |

---


 
 
 #### [_AssignStoreArticle](#_AssignStoreArticle)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | quantity | number |  no  |  |
 | article_assignment | [_ArticleAssignment](#_ArticleAssignment) |  no  |  |
 | query | [_ArticleQuery](#_ArticleQuery) |  no  |  |
 | meta | string |  no  |  |
 | group_id | string |  no  |  |

---


 
 
 #### [AssignStoreRequestValidator](#AssignStoreRequestValidator)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | articles | [[_AssignStoreArticle](#_AssignStoreArticle)] |  no  |  |
 | channel_identifier | string |  no  |  |
 | store_ids | [number] |  no  |  |
 | channel_type | string |  no  |  |
 | company_id | number |  no  |  |
 | pincode | string |  no  |  |
 | app_id | string |  no  |  |

---


 
 
 #### [AssignStoreResponseSerializer](#AssignStoreResponseSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | quantity | number |  no  |  |
 | store_pincode | string |  no  |  |
 | article_assignment | [_ArticleAssignment](#_ArticleAssignment) |  no  |  |
 | uid | string |  no  |  |
 | price_marked | number |  no  |  |
 | company_id | number |  no  |  |
 | preice_effective | number |  no  |  |
 | item_id | number |  no  |  |
 | meta | string |  no  |  |
 | s_city | string |  no  |  |
 | store_id | number |  no  |  |
 | index | number |  no  |  |
 | size | string |  no  |  |
 | status | boolean |  no  |  |

---




