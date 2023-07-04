




##### [Back to Platform docs](./README.md)

## CompanyProfile Methods


* [cbsOnboardGet](#cbsonboardget)
* [createBrand](#createbrand)
* [createCompanyBrandMapping](#createcompanybrandmapping)
* [createLocation](#createlocation)
* [createLocationBulk](#createlocationbulk)
* [editBrand](#editbrand)
* [getBrand](#getbrand)
* [getBrands](#getbrands)
* [getCompanyMetrics](#getcompanymetrics)
* [getLocationDetail](#getlocationdetail)
* [getLocations](#getlocations)
* [updateCompany](#updatecompany)
* [updateLocation](#updatelocation)



## Methods with example and description




### cbsOnboardGet
Get company profile



```javascript
// Promise
const promise = platformClient.companyProfile.cbsOnboardGet();

// Async/Await
const data = await platformClient.companyProfile.cbsOnboardGet();
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


### createBrand
Create a Brand.



```javascript
// Promise
const promise = platformClient.companyProfile.createBrand({  body : value });

// Async/Await
const data = await platformClient.companyProfile.createBrand({  body : value });
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


### createCompanyBrandMapping
Create a company brand mapping.



```javascript
// Promise
const promise = platformClient.companyProfile.createCompanyBrandMapping({  body : value });

// Async/Await
const data = await platformClient.companyProfile.createCompanyBrandMapping({  body : value });
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


### createLocation
Create a location associated to a company.



```javascript
// Promise
const promise = platformClient.companyProfile.createLocation({  body : value });

// Async/Await
const data = await platformClient.companyProfile.createLocation({  body : value });
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


### createLocationBulk
Create a location asscoiated to a company in bulk.



```javascript
// Promise
const promise = platformClient.companyProfile.createLocationBulk({  body : value });

// Async/Await
const data = await platformClient.companyProfile.createLocationBulk({  body : value });
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


### editBrand
Edit a brand.



```javascript
// Promise
const promise = platformClient.companyProfile.editBrand({  brandId : value,
 body : value });

// Async/Await
const data = await platformClient.companyProfile.editBrand({  brandId : value,
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


### getBrand
Get a single company brand.



```javascript
// Promise
const promise = platformClient.companyProfile.getBrand({  brandId : value });

// Async/Await
const data = await platformClient.companyProfile.getBrand({  brandId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| brandId | string | yes | Id of the brand to be viewed. |  



This API helps to get data associated to a particular company brand.

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


### getBrands
Get brands associated to a company



```javascript
// Promise
const promise = platformClient.companyProfile.getBrands({  pageNo : value,
 pageSize : value,
 q : value });

// Async/Await
const data = await platformClient.companyProfile.getBrands({  pageNo : value,
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


### getCompanyMetrics
Get company metrics



```javascript
// Promise
const promise = platformClient.companyProfile.getCompanyMetrics();

// Async/Await
const data = await platformClient.companyProfile.getCompanyMetrics();
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


### getLocationDetail
Get details of a specific location.



```javascript
// Promise
const promise = platformClient.companyProfile.getLocationDetail({  locationId : value });

// Async/Await
const data = await platformClient.companyProfile.getLocationDetail({  locationId : value });
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


### getLocations
Get list of locations



```javascript
// Promise
const promise = platformClient.companyProfile.getLocations({  storeType : value,
 q : value,
 stage : value,
 pageNo : value,
 pageSize : value,
 locationIds : value });

// Async/Await
const data = await platformClient.companyProfile.getLocations({  storeType : value,
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


### updateCompany
Edit company profile



```javascript
// Promise
const promise = platformClient.companyProfile.updateCompany({  body : value });

// Async/Await
const data = await platformClient.companyProfile.updateCompany({  body : value });
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


### updateLocation
Edit a location asscoiated to a company.



```javascript
// Promise
const promise = platformClient.companyProfile.updateLocation({  locationId : value,
 body : value });

// Async/Await
const data = await platformClient.companyProfile.updateLocation({  locationId : value,
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



### Schemas


#### [AddressSerializer](#AddressSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address1 | string? |  yes  |  |
 | address2 | string? |  yes  |  |
 | address_type | string? |  yes  |  |
 | city | string? |  yes  |  |
 | country | string? |  yes  |  |
 | country_code | string? |  yes  |  |
 | landmark | string? |  yes  |  |
 | latitude | number |  no  |  |
 | longitude | number |  no  |  |
 | pincode | number? |  yes  |  |
 | state | string? |  yes  |  |
 

---

#### [BrandBannerSerializer](#BrandBannerSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | landscape | string |  no  |  |
 | portrait | string |  no  |  |
 

---

#### [BulkLocationSerializer](#BulkLocationSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [[LocationSerializer](#LocationSerializer)]? |  yes  |  |
 

---

#### [BusinessCountryInfo](#BusinessCountryInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country | string? |  yes  |  |
 | country_code | string? |  yes  |  |
 

---

#### [BusinessDetails](#BusinessDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | website | [Website](#Website)? |  yes  |  |
 

---

#### [CompanyBrandListSerializer](#CompanyBrandListSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[CompanyBrandSerializer](#CompanyBrandSerializer)]? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 

---

#### [CompanyBrandPostRequestSerializer](#CompanyBrandPostRequestSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brands | [number] |  no  |  |
 | company | number |  no  |  |
 | uid | number? |  yes  |  |
 

---

#### [CompanyBrandSerializer](#CompanyBrandSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand | [GetBrandResponseSerializer](#GetBrandResponseSerializer)? |  yes  |  |
 | company | [CompanySerializer](#CompanySerializer)? |  yes  |  |
 | created_by | [UserSerializer](#UserSerializer)? |  yes  |  |
 | created_on | string? |  yes  |  |
 | modified_by | [UserSerializer](#UserSerializer)? |  yes  |  |
 | modified_on | string? |  yes  |  |
 | reject_reason | string? |  yes  |  |
 | stage | string? |  yes  |  |
 | uid | number? |  yes  |  |
 | verified_by | [UserSerializer](#UserSerializer)? |  yes  |  |
 | verified_on | string? |  yes  |  |
 | warnings | string? |  yes  |  |
 

---

#### [CompanyDetails](#CompanyDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | socials | [[CompanySocialAccounts](#CompanySocialAccounts)]? |  yes  |  |
 | website_url | string? |  yes  |  |
 

---

#### [CompanySerializer](#CompanySerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _custom_json | string? |  yes  |  |
 | addresses | [[GetAddressSerializer](#GetAddressSerializer)]? |  yes  |  |
 | business_country_info | [BusinessCountryInfo](#BusinessCountryInfo)? |  yes  |  |
 | business_type | string |  no  |  |
 | company_type | string |  no  |  |
 | created_by | [UserSerializer](#UserSerializer)? |  yes  |  |
 | created_on | string? |  yes  |  |
 | details | [CompanyDetails](#CompanyDetails)? |  yes  |  |
 | market_channels | [string]? |  yes  |  |
 | modified_by | [UserSerializer](#UserSerializer)? |  yes  |  |
 | modified_on | string? |  yes  |  |
 | name | string? |  yes  |  |
 | notification_emails | [string]? |  yes  |  |
 | reject_reason | string? |  yes  |  |
 | stage | string? |  yes  |  |
 | uid | number? |  yes  |  |
 | verified_by | [UserSerializer](#UserSerializer)? |  yes  |  |
 | verified_on | string? |  yes  |  |
 

---

#### [CompanySocialAccounts](#CompanySocialAccounts)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | url | string |  no  |  |
 

---

#### [CompanyTaxesSerializer](#CompanyTaxesSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | effective_date | string? |  yes  |  |
 | enable | boolean? |  yes  |  |
 | rate | number? |  yes  |  |
 

---

#### [CompanyTaxesSerializer1](#CompanyTaxesSerializer1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | effective_date | string? |  yes  |  |
 | enable | boolean? |  yes  |  |
 | rate | number? |  yes  |  |
 

---

#### [ContactDetails](#ContactDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | emails | [string]? |  yes  |  |
 | phone | [[SellerPhoneNumber](#SellerPhoneNumber)]? |  yes  |  |
 

---

#### [CreateUpdateAddressSerializer](#CreateUpdateAddressSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address1 | string |  no  |  |
 | address2 | string? |  yes  |  |
 | address_type | string |  no  |  |
 | city | string |  no  |  |
 | country | string |  no  |  |
 | country_code | string? |  yes  |  |
 | landmark | string? |  yes  |  |
 | latitude | number |  no  |  |
 | longitude | number |  no  |  |
 | pincode | number |  no  |  |
 | state | string |  no  |  |
 

---

#### [CreateUpdateBrandRequestSerializer](#CreateUpdateBrandRequestSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _custom_json | string? |  yes  |  |
 | _locale_language | string? |  yes  |  |
 | banner | [BrandBannerSerializer](#BrandBannerSerializer) |  no  |  |
 | brand_tier | string? |  yes  |  |
 | company_id | number? |  yes  |  |
 | description | string? |  yes  |  |
 | logo | string |  no  |  |
 | name | string |  no  |  |
 | synonyms | [string]? |  yes  |  |
 | uid | number? |  yes  |  |
 

---

#### [Document](#Document)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | legal_name | string? |  yes  |  |
 | type | string |  no  |  |
 | url | string? |  yes  |  |
 | value | string |  no  |  |
 | verified | boolean? |  yes  |  |
 

---

#### [DocumentsObj](#DocumentsObj)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | pending | number? |  yes  |  |
 | verified | number? |  yes  |  |
 

---

#### [ErrorResponse](#ErrorResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string? |  yes  |  |
 | message | string? |  yes  |  |
 | meta | string? |  yes  |  |
 | status | number? |  yes  |  |
 

---

#### [GetAddressSerializer](#GetAddressSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address1 | string? |  yes  |  |
 | address2 | string? |  yes  |  |
 | address_type | string? |  yes  |  |
 | city | string? |  yes  |  |
 | country | string? |  yes  |  |
 | country_code | string? |  yes  |  |
 | landmark | string? |  yes  |  |
 | latitude | number |  no  |  |
 | longitude | number |  no  |  |
 | pincode | number? |  yes  |  |
 | state | string? |  yes  |  |
 

---

#### [GetBrandResponseSerializer](#GetBrandResponseSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _custom_json | string? |  yes  |  |
 | _locale_language | string? |  yes  |  |
 | banner | [BrandBannerSerializer](#BrandBannerSerializer)? |  yes  |  |
 | created_by | [UserSerializer](#UserSerializer)? |  yes  |  |
 | created_on | string? |  yes  |  |
 | description | string? |  yes  |  |
 | logo | string? |  yes  |  |
 | mode | string? |  yes  |  |
 | modified_by | [UserSerializer](#UserSerializer)? |  yes  |  |
 | modified_on | string? |  yes  |  |
 | name | string |  no  |  |
 | reject_reason | string? |  yes  |  |
 | slug_key | string? |  yes  |  |
 | stage | string? |  yes  |  |
 | synonyms | [string]? |  yes  |  |
 | uid | number? |  yes  |  |
 | verified_by | [UserSerializer](#UserSerializer)? |  yes  |  |
 | verified_on | string? |  yes  |  |
 | warnings | string? |  yes  |  |
 

---

#### [GetCompanyProfileSerializerResponse](#GetCompanyProfileSerializerResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _custom_json | string? |  yes  |  |
 | addresses | [[GetAddressSerializer](#GetAddressSerializer)]? |  yes  |  |
 | business_country_info | [BusinessCountryInfo](#BusinessCountryInfo)? |  yes  |  |
 | business_details | [BusinessDetails](#BusinessDetails)? |  yes  |  |
 | business_info | string? |  yes  |  |
 | business_type | string? |  yes  |  |
 | company_type | string |  no  |  |
 | contact_details | [ContactDetails](#ContactDetails)? |  yes  |  |
 | created_by | [UserSerializer](#UserSerializer)? |  yes  |  |
 | created_on | string? |  yes  |  |
 | documents | [[Document](#Document)]? |  yes  |  |
 | franchise_enabled | boolean? |  yes  |  |
 | mode | string? |  yes  |  |
 | modified_by | [UserSerializer](#UserSerializer)? |  yes  |  |
 | modified_on | string? |  yes  |  |
 | name | string? |  yes  |  |
 | notification_emails | [string]? |  yes  |  |
 | stage | string? |  yes  |  |
 | taxes | [[CompanyTaxesSerializer](#CompanyTaxesSerializer)]? |  yes  |  |
 | uid | number |  no  |  |
 | verified_by | [UserSerializer](#UserSerializer)? |  yes  |  |
 | verified_on | string? |  yes  |  |
 | warnings | string? |  yes  |  |
 

---

#### [GetCompanySerializer](#GetCompanySerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | addresses | [[GetAddressSerializer](#GetAddressSerializer)]? |  yes  |  |
 | business_type | string? |  yes  |  |
 | company_type | string? |  yes  |  |
 | created_by | [UserSerializer](#UserSerializer)? |  yes  |  |
 | created_on | string? |  yes  |  |
 | modified_by | [UserSerializer](#UserSerializer)? |  yes  |  |
 | modified_on | string? |  yes  |  |
 | name | string? |  yes  |  |
 | reject_reason | string? |  yes  |  |
 | stage | string? |  yes  |  |
 | uid | number? |  yes  |  |
 | verified_by | [UserSerializer](#UserSerializer)? |  yes  |  |
 | verified_on | string? |  yes  |  |
 

---

#### [GetLocationSerializer](#GetLocationSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _custom_json | string? |  yes  |  |
 | address | [GetAddressSerializer](#GetAddressSerializer) |  no  |  |
 | auto_invoice | boolean? |  yes  |  |
 | code | string |  no  |  |
 | company | [GetCompanySerializer](#GetCompanySerializer)? |  yes  |  |
 | contact_numbers | [[SellerPhoneNumber](#SellerPhoneNumber)]? |  yes  |  |
 | created_by | [UserSerializer](#UserSerializer)? |  yes  |  |
 | created_on | string? |  yes  |  |
 | credit_note | boolean? |  yes  |  |
 | display_name | string |  no  |  |
 | documents | [[Document](#Document)]? |  yes  |  |
 | gst_credentials | [InvoiceDetailsSerializer](#InvoiceDetailsSerializer)? |  yes  |  |
 | holiday | [[HolidaySchemaSerializer](#HolidaySchemaSerializer)]? |  yes  |  |
 | manager | [LocationManagerSerializer](#LocationManagerSerializer)? |  yes  |  |
 | modified_by | [UserSerializer](#UserSerializer)? |  yes  |  |
 | modified_on | string? |  yes  |  |
 | name | string |  no  |  |
 | notification_emails | [string]? |  yes  |  |
 | phone_number | string? |  yes  |  |
 | product_return_config | [ProductReturnConfigSerializer](#ProductReturnConfigSerializer)? |  yes  |  |
 | stage | string? |  yes  |  |
 | store_type | string? |  yes  |  |
 | timing | [[LocationDayWiseSerializer](#LocationDayWiseSerializer)]? |  yes  |  |
 | uid | number? |  yes  |  |
 | verified_by | [UserSerializer](#UserSerializer)? |  yes  |  |
 | verified_on | string? |  yes  |  |
 | warnings | string? |  yes  |  |
 

---

#### [HolidayDateSerializer](#HolidayDateSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | end_date | string |  no  |  |
 | start_date | string |  no  |  |
 

---

#### [HolidaySchemaSerializer](#HolidaySchemaSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | date | [HolidayDateSerializer](#HolidayDateSerializer) |  no  |  |
 | holiday_type | string |  no  |  |
 | title | string |  no  |  |
 

---

#### [InvoiceCredSerializer](#InvoiceCredSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean? |  yes  |  |
 | password | string? |  yes  |  |
 | username | string? |  yes  |  |
 

---

#### [InvoiceDetailsSerializer](#InvoiceDetailsSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | e_invoice | [InvoiceCredSerializer](#InvoiceCredSerializer)? |  yes  |  |
 | e_waybill | [InvoiceCredSerializer](#InvoiceCredSerializer)? |  yes  |  |
 

---

#### [LocationDayWiseSerializer](#LocationDayWiseSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | closing | [LocationTimingSerializer](#LocationTimingSerializer)? |  yes  |  |
 | open | boolean |  no  |  |
 | opening | [LocationTimingSerializer](#LocationTimingSerializer)? |  yes  |  |
 | weekday | string |  no  |  |
 

---

#### [LocationListSerializer](#LocationListSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[GetLocationSerializer](#GetLocationSerializer)]? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 

---

#### [LocationManagerSerializer](#LocationManagerSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | string? |  yes  |  |
 | mobile_no | [SellerPhoneNumber](#SellerPhoneNumber) |  no  |  |
 | name | string? |  yes  |  |
 

---

#### [LocationSerializer](#LocationSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _custom_json | string? |  yes  |  |
 | address | [AddressSerializer](#AddressSerializer) |  no  |  |
 | auto_invoice | boolean? |  yes  |  |
 | code | string |  no  |  |
 | company | number |  no  |  |
 | contact_numbers | [[SellerPhoneNumber](#SellerPhoneNumber)]? |  yes  |  |
 | credit_note | boolean? |  yes  |  |
 | display_name | string |  no  |  |
 | documents | [[Document](#Document)]? |  yes  |  |
 | gst_credentials | [InvoiceDetailsSerializer](#InvoiceDetailsSerializer)? |  yes  |  |
 | holiday | [[HolidaySchemaSerializer](#HolidaySchemaSerializer)]? |  yes  |  |
 | manager | [LocationManagerSerializer](#LocationManagerSerializer)? |  yes  |  |
 | name | string |  no  |  |
 | notification_emails | [string]? |  yes  |  |
 | product_return_config | [ProductReturnConfigSerializer](#ProductReturnConfigSerializer)? |  yes  |  |
 | stage | string? |  yes  |  |
 | store_type | string? |  yes  |  |
 | timing | [[LocationDayWiseSerializer](#LocationDayWiseSerializer)]? |  yes  |  |
 | uid | number? |  yes  |  |
 | warnings | string? |  yes  |  |
 

---

#### [LocationTimingSerializer](#LocationTimingSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | hour | number |  no  |  |
 | minute | number |  no  |  |
 

---

#### [MetricsSerializer](#MetricsSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand | [DocumentsObj](#DocumentsObj)? |  yes  |  |
 | company_documents | [DocumentsObj](#DocumentsObj)? |  yes  |  |
 | product | [DocumentsObj](#DocumentsObj)? |  yes  |  |
 | stage | string? |  yes  |  |
 | store | [DocumentsObj](#DocumentsObj)? |  yes  |  |
 | store_documents | [DocumentsObj](#DocumentsObj)? |  yes  |  |
 | uid | number? |  yes  |  |
 

---

#### [Page](#Page)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number? |  yes  |  |
 | has_next | boolean? |  yes  |  |
 | has_previous | boolean? |  yes  |  |
 | item_total | number? |  yes  |  |
 | next_id | string? |  yes  |  |
 | size | number? |  yes  |  |
 | type | string |  no  |  |
 

---

#### [ProductReturnConfigSerializer](#ProductReturnConfigSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | on_same_store | boolean? |  yes  |  |
 | store_uid | number? |  yes  |  |
 

---

#### [ProfileSuccessResponse](#ProfileSuccessResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 | success | boolean? |  yes  |  |
 | uid | number? |  yes  |  |
 

---

#### [SellerPhoneNumber](#SellerPhoneNumber)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country_code | number |  no  |  |
 | number | string |  no  |  |
 

---

#### [UpdateCompany](#UpdateCompany)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _custom_json | string? |  yes  |  |
 | addresses | [[CreateUpdateAddressSerializer](#CreateUpdateAddressSerializer)]? |  yes  |  |
 | business_details | [BusinessDetails](#BusinessDetails)? |  yes  |  |
 | business_info | string? |  yes  |  |
 | business_type | string? |  yes  |  |
 | company_type | string? |  yes  |  |
 | contact_details | [ContactDetails](#ContactDetails)? |  yes  |  |
 | documents | [[Document](#Document)]? |  yes  |  |
 | franchise_enabled | boolean? |  yes  |  |
 | name | string? |  yes  |  |
 | notification_emails | [string]? |  yes  |  |
 | reject_reason | string? |  yes  |  |
 | taxes | [[CompanyTaxesSerializer1](#CompanyTaxesSerializer1)]? |  yes  |  |
 | warnings | string? |  yes  |  |
 

---

#### [UserSerializer](#UserSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | contact | string? |  yes  |  |
 | user_id | string? |  yes  |  |
 | username | string? |  yes  |  |
 

---

#### [Website](#Website)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | url | string? |  yes  |  |
 

---




