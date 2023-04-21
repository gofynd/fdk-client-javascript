




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
Get a single brand.



```javascript
// Promise
const promise = platformClient.companyProfile.getBrand({  brandId : value });

// Async/Await
const data = await platformClient.companyProfile.getBrand({  brandId : value });
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
 | address1 | string |  no  |  |
 | address2 | string |  no  |  |
 | address_type | string |  no  |  |
 | city | string |  no  |  |
 | country | string |  no  |  |
 | country_code | string |  no  |  |
 | landmark | string |  no  |  |
 | latitude | number |  yes  |  |
 | longitude | number |  yes  |  |
 | pincode | number |  no  |  |
 | state | string |  no  |  |
 

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
 | data | [[LocationSerializer](#LocationSerializer)] |  no  |  |
 

---

#### [BusinessCountryInfo](#BusinessCountryInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country | string |  no  |  |
 | country_code | string |  no  |  |
 

---

#### [BusinessDetails](#BusinessDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | website | [Website](#Website) |  no  |  |
 

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
 | brands | [number] |  yes  |  |
 | company | number |  yes  |  |
 | uid | number |  no  |  |
 

---

#### [CompanyBrandSerializer](#CompanyBrandSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand | [GetBrandResponseSerializer](#GetBrandResponseSerializer) |  no  |  |
 | company | [CompanySerializer](#CompanySerializer) |  no  |  |
 | created_by | [UserSerializer](#UserSerializer) |  no  |  |
 | created_on | string |  no  |  |
 | modified_by | [UserSerializer](#UserSerializer) |  no  |  |
 | modified_on | string |  no  |  |
 | reject_reason | string |  no  |  |
 | stage | string |  no  |  |
 | uid | number |  no  |  |
 | verified_by | [UserSerializer](#UserSerializer) |  no  |  |
 | verified_on | string |  no  |  |
 | warnings | string |  no  |  |
 

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
 | _custom_json | string |  no  |  |
 | addresses | [[GetAddressSerializer](#GetAddressSerializer)] |  no  |  |
 | business_country_info | [BusinessCountryInfo](#BusinessCountryInfo) |  no  |  |
 | business_type | string |  yes  |  |
 | company_type | string |  yes  |  |
 | created_by | [UserSerializer](#UserSerializer) |  no  |  |
 | created_on | string |  no  |  |
 | details | [CompanyDetails](#CompanyDetails) |  no  |  |
 | market_channels | [string] |  no  |  |
 | modified_by | [UserSerializer](#UserSerializer) |  no  |  |
 | modified_on | string |  no  |  |
 | name | string |  no  |  |
 | notification_emails | [string] |  no  |  |
 | reject_reason | string |  no  |  |
 | stage | string |  no  |  |
 | uid | number |  no  |  |
 | verified_by | [UserSerializer](#UserSerializer) |  no  |  |
 | verified_on | string |  no  |  |
 

---

#### [CompanySocialAccounts](#CompanySocialAccounts)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  yes  |  |
 | url | string |  yes  |  |
 

---

#### [CompanyTaxesSerializer](#CompanyTaxesSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | effective_date | string |  no  |  |
 | enable | boolean |  no  |  |
 | rate | number |  no  |  |
 

---

#### [CompanyTaxesSerializer1](#CompanyTaxesSerializer1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | effective_date | string |  no  |  |
 | enable | boolean |  no  |  |
 | rate | number |  no  |  |
 

---

#### [ContactDetails](#ContactDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | emails | [string] |  no  |  |
 | phone | [[SellerPhoneNumber](#SellerPhoneNumber)] |  no  |  |
 

---

#### [CreateUpdateAddressSerializer](#CreateUpdateAddressSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address1 | string |  yes  |  |
 | address2 | string |  no  |  |
 | address_type | string |  yes  |  |
 | city | string |  yes  |  |
 | country | string |  yes  |  |
 | country_code | string |  no  |  |
 | landmark | string |  no  |  |
 | latitude | number |  yes  |  |
 | longitude | number |  yes  |  |
 | pincode | number |  yes  |  |
 | state | string |  yes  |  |
 

---

#### [CreateUpdateBrandRequestSerializer](#CreateUpdateBrandRequestSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _custom_json | string |  no  |  |
 | _locale_language | string |  no  |  |
 | banner | [BrandBannerSerializer](#BrandBannerSerializer) |  no  |  |
 | brand_tier | string |  no  |  |
 | company_id | number |  no  |  |
 | description | string |  no  |  |
 | logo | string |  yes  |  |
 | name | string |  yes  |  |
 | synonyms | [string] |  no  |  |
 | uid | number |  no  |  |
 

---

#### [Document](#Document)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | legal_name | string |  no  |  |
 | type | string |  yes  |  |
 | url | string |  no  |  |
 | value | string |  yes  |  |
 | verified | boolean |  no  |  |
 

---

#### [DocumentsObj](#DocumentsObj)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | pending | number |  no  |  |
 | verified | number |  no  |  |
 

---

#### [ErrorResponse](#ErrorResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string |  no  |  |
 | message | string |  no  |  |
 | meta | string |  no  |  |
 | status | number |  no  |  |
 

---

#### [GetAddressSerializer](#GetAddressSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address1 | string |  no  |  |
 | address2 | string |  no  |  |
 | address_type | string |  no  |  |
 | city | string |  no  |  |
 | country | string |  no  |  |
 | country_code | string |  no  |  |
 | landmark | string |  no  |  |
 | latitude | number |  yes  |  |
 | longitude | number |  yes  |  |
 | pincode | number |  no  |  |
 | state | string |  no  |  |
 

---

#### [GetBrandResponseSerializer](#GetBrandResponseSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _custom_json | string |  no  |  |
 | _locale_language | string |  no  |  |
 | banner | [BrandBannerSerializer](#BrandBannerSerializer) |  no  |  |
 | created_by | [UserSerializer](#UserSerializer) |  no  |  |
 | created_on | string |  no  |  |
 | description | string |  no  |  |
 | logo | string |  no  |  |
 | mode | string |  no  |  |
 | modified_by | [UserSerializer](#UserSerializer) |  no  |  |
 | modified_on | string |  no  |  |
 | name | string |  yes  |  |
 | reject_reason | string |  no  |  |
 | slug_key | string |  no  |  |
 | stage | string |  no  |  |
 | synonyms | [string] |  no  |  |
 | uid | number |  no  |  |
 | verified_by | [UserSerializer](#UserSerializer) |  no  |  |
 | verified_on | string |  no  |  |
 | warnings | string |  no  |  |
 

---

#### [GetCompanyProfileSerializerResponse](#GetCompanyProfileSerializerResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _custom_json | string |  no  |  |
 | addresses | [[GetAddressSerializer](#GetAddressSerializer)] |  no  |  |
 | business_country_info | [BusinessCountryInfo](#BusinessCountryInfo) |  no  |  |
 | business_details | [BusinessDetails](#BusinessDetails) |  no  |  |
 | business_info | string |  no  |  |
 | business_type | string |  yes  |  |
 | company_type | string |  yes  |  |
 | contact_details | [ContactDetails](#ContactDetails) |  no  |  |
 | created_by | [UserSerializer](#UserSerializer) |  no  |  |
 | created_on | string |  no  |  |
 | documents | [[Document](#Document)] |  no  |  |
 | franchise_enabled | boolean |  no  |  |
 | mode | string |  no  |  |
 | modified_by | [UserSerializer](#UserSerializer) |  no  |  |
 | modified_on | string |  no  |  |
 | name | string |  no  |  |
 | notification_emails | [string] |  no  |  |
 | stage | string |  no  |  |
 | taxes | [[CompanyTaxesSerializer](#CompanyTaxesSerializer)] |  no  |  |
 | uid | number |  yes  |  |
 | verified_by | [UserSerializer](#UserSerializer) |  no  |  |
 | verified_on | string |  no  |  |
 | warnings | string |  no  |  |
 

---

#### [GetCompanySerializer](#GetCompanySerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | addresses | [[GetAddressSerializer](#GetAddressSerializer)] |  no  |  |
 | business_type | string |  no  |  |
 | company_type | string |  no  |  |
 | created_by | [UserSerializer](#UserSerializer) |  no  |  |
 | created_on | string |  no  |  |
 | modified_by | [UserSerializer](#UserSerializer) |  no  |  |
 | modified_on | string |  no  |  |
 | name | string |  no  |  |
 | reject_reason | string |  no  |  |
 | stage | string |  no  |  |
 | uid | number |  no  |  |
 | verified_by | [UserSerializer](#UserSerializer) |  no  |  |
 | verified_on | string |  no  |  |
 

---

#### [GetLocationSerializer](#GetLocationSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _custom_json | string |  no  |  |
 | address | [GetAddressSerializer](#GetAddressSerializer) |  yes  |  |
 | code | string |  yes  |  |
 | company | [GetCompanySerializer](#GetCompanySerializer) |  no  |  |
 | contact_numbers | [[SellerPhoneNumber](#SellerPhoneNumber)] |  no  |  |
 | created_by | [UserSerializer](#UserSerializer) |  no  |  |
 | created_on | string |  no  |  |
 | display_name | string |  yes  |  |
 | documents | [[Document](#Document)] |  no  |  |
 | gst_credentials | [InvoiceDetailsSerializer](#InvoiceDetailsSerializer) |  no  |  |
 | holiday | [[HolidaySchemaSerializer](#HolidaySchemaSerializer)] |  no  |  |
 | manager | [LocationManagerSerializer](#LocationManagerSerializer) |  no  |  |
 | modified_by | [UserSerializer](#UserSerializer) |  no  |  |
 | modified_on | string |  no  |  |
 | name | string |  yes  |  |
 | notification_emails | [string] |  no  |  |
 | phone_number | string |  no  |  |
 | product_return_config | [ProductReturnConfigSerializer](#ProductReturnConfigSerializer) |  no  |  |
 | stage | string |  no  |  |
 | store_type | string |  no  |  |
 | timing | [[LocationDayWiseSerializer](#LocationDayWiseSerializer)] |  no  |  |
 | uid | number |  no  |  |
 | verified_by | [UserSerializer](#UserSerializer) |  no  |  |
 | verified_on | string |  no  |  |
 | warnings | string |  no  |  |
 

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

#### [InvoiceCredSerializer](#InvoiceCredSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean |  no  |  |
 | password | string |  no  |  |
 | username | string |  no  |  |
 

---

#### [InvoiceDetailsSerializer](#InvoiceDetailsSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | e_invoice | [InvoiceCredSerializer](#InvoiceCredSerializer) |  no  |  |
 | e_waybill | [InvoiceCredSerializer](#InvoiceCredSerializer) |  no  |  |
 

---

#### [LocationDayWiseSerializer](#LocationDayWiseSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | closing | [LocationTimingSerializer](#LocationTimingSerializer) |  no  |  |
 | open | boolean |  yes  |  |
 | opening | [LocationTimingSerializer](#LocationTimingSerializer) |  no  |  |
 | weekday | string |  yes  |  |
 

---

#### [LocationListSerializer](#LocationListSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[GetLocationSerializer](#GetLocationSerializer)] |  no  |  |
 | page | [Page](#Page) |  no  |  |
 

---

#### [LocationManagerSerializer](#LocationManagerSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | string |  no  |  |
 | mobile_no | [SellerPhoneNumber](#SellerPhoneNumber) |  yes  |  |
 | name | string |  no  |  |
 

---

#### [LocationSerializer](#LocationSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _custom_json | string |  no  |  |
 | address | [AddressSerializer](#AddressSerializer) |  yes  |  |
 | code | string |  yes  |  |
 | company | number |  yes  |  |
 | contact_numbers | [[SellerPhoneNumber](#SellerPhoneNumber)] |  no  |  |
 | display_name | string |  yes  |  |
 | documents | [[Document](#Document)] |  no  |  |
 | gst_credentials | [InvoiceDetailsSerializer](#InvoiceDetailsSerializer) |  no  |  |
 | holiday | [[HolidaySchemaSerializer](#HolidaySchemaSerializer)] |  no  |  |
 | manager | [LocationManagerSerializer](#LocationManagerSerializer) |  no  |  |
 | name | string |  yes  |  |
 | notification_emails | [string] |  no  |  |
 | product_return_config | [ProductReturnConfigSerializer](#ProductReturnConfigSerializer) |  no  |  |
 | stage | string |  no  |  |
 | store_type | string |  no  |  |
 | timing | [[LocationDayWiseSerializer](#LocationDayWiseSerializer)] |  no  |  |
 | uid | number |  no  |  |
 | warnings | string |  no  |  |
 

---

#### [LocationTimingSerializer](#LocationTimingSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | hour | number |  yes  |  |
 | minute | number |  yes  |  |
 

---

#### [MetricsSerializer](#MetricsSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand | [DocumentsObj](#DocumentsObj) |  no  |  |
 | company_documents | [DocumentsObj](#DocumentsObj) |  no  |  |
 | product | [DocumentsObj](#DocumentsObj) |  no  |  |
 | stage | string |  no  |  |
 | store | [DocumentsObj](#DocumentsObj) |  no  |  |
 | store_documents | [DocumentsObj](#DocumentsObj) |  no  |  |
 | uid | number |  no  |  |
 

---

#### [Page](#Page)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number |  no  |  |
 | has_next | boolean |  no  |  |
 | has_previous | boolean |  no  |  |
 | item_total | number |  no  |  |
 | next_id | string |  no  |  |
 | size | number |  no  |  |
 | type | string |  yes  |  |
 

---

#### [ProductReturnConfigSerializer](#ProductReturnConfigSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | on_same_store | boolean |  no  |  |
 | store_uid | number |  no  |  |
 

---

#### [ProfileSuccessResponse](#ProfileSuccessResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  |  |
 | uid | number |  no  |  |
 

---

#### [SellerPhoneNumber](#SellerPhoneNumber)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country_code | number |  yes  |  |
 | number | string |  yes  |  |
 

---

#### [UpdateCompany](#UpdateCompany)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _custom_json | string |  no  |  |
 | addresses | [[CreateUpdateAddressSerializer](#CreateUpdateAddressSerializer)] |  no  |  |
 | business_details | [BusinessDetails](#BusinessDetails) |  no  |  |
 | business_info | string |  no  |  |
 | business_type | string |  no  |  |
 | company_type | string |  no  |  |
 | contact_details | [ContactDetails](#ContactDetails) |  no  |  |
 | documents | [[Document](#Document)] |  no  |  |
 | franchise_enabled | boolean |  no  |  |
 | name | string |  no  |  |
 | notification_emails | [string] |  no  |  |
 | reject_reason | string |  no  |  |
 | taxes | [[CompanyTaxesSerializer1](#CompanyTaxesSerializer1)] |  no  |  |
 | warnings | string |  no  |  |
 

---

#### [UserSerializer](#UserSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | contact | string |  no  |  |
 | user_id | string |  no  |  |
 | username | string |  no  |  |
 

---

#### [Website](#Website)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | url | string |  no  |  |
 

---




