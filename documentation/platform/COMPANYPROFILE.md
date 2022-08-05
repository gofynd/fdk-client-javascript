



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
* [getCompanyRestrictedCategoryInfo](#getcompanyrestrictedcategoryinfo)
* [getCompanyRestrictedCategoryInfoOfOneType](#getcompanyrestrictedcategoryinfoofonetype)
* [createCompanyRestrictedCategoryDocument](#createcompanyrestrictedcategorydocument)
* [updateCompanyRestrictedCategoryDocument](#updatecompanyrestrictedcategorydocument)



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
  "company_name": "Test company",
  "modified_on": "2022-06-15T08:43:47.587000",
  "_locale_language": {},
  "slug_key": "company-brand-test-final",
  "banner": {
    "landscape": "http://cdn4.gofynd.com/media/banner/brand/original/7020_f9e91f7d501c4f2985c09bd196ed304d.jpg",
    "portrait": "http://cdn4.gofynd.com/media/banner_portrait/brand/original/7021_16fc50205c40477daf419b64ec64c64c.jpg"
  },
  "name": "company-brand-test-final",
  "warnings": {},
  "modified_by": {
    "user_id": "61bb02b3e4a82983f7236aa0",
    "username": "rajamishra_gofynd_com_02316"
  },
  "description": "Test brand",
  "created_on": "2022-06-15T08:43:46.203000",
  "company_id": 1,
  "created_by": {
    "user_id": "61bb02b3e4a82983f7236aa0",
    "username": "rajamishra_gofynd_com_02316"
  },
  "stage": "unverified",
  "uid": 2766,
  "mode": "live",
  "documents": [
    {
      "url": "https://hdn-1.addsale.com/x0/brands/pictures/portrait-banner/original/IYs5oSlUZ-Portrait-Banner.jpeg",
      "type": "test"
    }
  ],
  "logo": "http://cdn4.gofynd.com/media/logo/brand/original/4597_40d1ce44d61940d4829a3c54951bd9ee.jpg",
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
      "documents": [
        {
          "url": "https://hdn-1.addsale.com/x0/brands/pictures/square-logo/original/dHudsm4Bc-Logo.png",
          "verified": true,
          "document_type": "authorization_letter"
        }
      ],
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
 pageSize : value });

// Async/Await
const data = await client.companyProfile.getLocations({  storeType : value,
 q : value,
 stage : value,
 pageNo : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| storeType | string | no | Helps to sort the location list on the basis of location type. |    
| q | string | no | Query that is to be searched. |    
| stage | string | no | to filter companies on basis of verified or unverified companies. |    
| pageNo | number | no | The page number to navigate through the given set of results |    
| pageSize | number | no | Number of items to retrieve in each page. Default is 10. |  



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
  "integration_type": {
    "inventory": "pulse",
    "order": "pulse"
  },
  "notification_emails": [],
  "fulfilment_type": "DFC"
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


### getCompanyRestrictedCategoryInfo
Get restricted category info



```javascript
// Promise
const promise = client.companyProfile.getCompanyRestrictedCategoryInfo();

// Async/Await
const data = await client.companyProfile.getCompanyRestrictedCategoryInfo();
```






This API allows to view the restricted category info, i.e. the status of its stores and its restricted category info.

*Returned Response:*




[RestrictedCategoryMetricsResponseSerializer](#RestrictedCategoryMetricsResponseSerializer)

Metrics response object. See example below or refer `MetricsSerializer` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "food": {
    "unverified": 1,
    "correction": 0
  }
}
```
</details>









---


### getCompanyRestrictedCategoryInfoOfOneType
Get restricted category info



```javascript
// Promise
const promise = client.companyProfile.getCompanyRestrictedCategoryInfoOfOneType();

// Async/Await
const data = await client.companyProfile.getCompanyRestrictedCategoryInfoOfOneType();
```






This API allows to view the restricted category info, i.e. the status of its stores and its restricted category info for one type of restrcited category such as food.

*Returned Response:*




[RestrictedCategoryListResponseSerializer](#RestrictedCategoryListResponseSerializer)

Metrics response object. See example below or refer `RestrictedCategorySerializer` for details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "store_name": "Archies Ltd",
  "store_type": "warehouse",
  "store_code": null,
  "company_id": 1,
  "category_type": "food",
  "store_id": 1,
  "documents": [
    {
      "uid": 1,
      "files": [
        {
          "url": "",
          "type": "declaration",
          "name": ""
        }
      ],
      "document_type": "fssai",
      "value": "1234567890",
      "stage": "verified",
      "issue_date": "2022-06-10T05:16:43.312000",
      "expiry_date": "2022-06-10T05:16:43.312000",
      "primary": true,
      "days_left": -5,
      "alert_type": "error"
    }
  ]
}
```
</details>









---


### createCompanyRestrictedCategoryDocument
Create restricted category info



```javascript
// Promise
const promise = client.companyProfile.createCompanyRestrictedCategoryDocument();

// Async/Await
const data = await client.companyProfile.createCompanyRestrictedCategoryDocument();
```






This API allows to create restricted category document for the given company

*Returned Response:*




[SuccessResponseSerializer](#SuccessResponseSerializer)

Returns a success response




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "message": "Success!!!"
}
```
</details>









---


### updateCompanyRestrictedCategoryDocument
Update restricted category info



```javascript
// Promise
const promise = client.companyProfile.updateCompanyRestrictedCategoryDocument({  documentId : value });

// Async/Await
const data = await client.companyProfile.updateCompanyRestrictedCategoryDocument({  documentId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| documentId | string | yes | A `document_id` is a unique identifier for a particular restricted category document. |  



This API allows to update restricted category document for the given company

*Returned Response:*




[SuccessResponseSerializer](#SuccessResponseSerializer)

Returns a success response




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "message": "Success!!!"
}
```
</details>









---



### Schemas

 
 
 #### [UserSerializer](#UserSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | user_id | string |  no  |  |
 | contact | string |  no  |  |
 | username | string |  no  |  |

---


 
 
 #### [GetAddressSerializer](#GetAddressSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | longitude | number |  yes  |  |
 | address2 | string |  no  |  |
 | city | string |  yes  |  |
 | landmark | string |  no  |  |
 | latitude | number |  yes  |  |
 | address1 | string |  yes  |  |
 | state | string |  yes  |  |
 | country | string |  yes  |  |
 | address_type | string |  no  |  |
 | country_code | string |  no  |  |
 | pincode | number |  yes  |  |

---


 
 
 #### [CompanyTaxesSerializer](#CompanyTaxesSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | rate | number |  no  |  |
 | enable | boolean |  no  |  |
 | effective_date | string |  no  |  |

---


 
 
 #### [Document](#Document)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | value | string |  yes  |  |
 | type | string |  yes  |  |
 | legal_name | string |  no  |  |
 | verified | boolean |  no  |  |
 | url | string |  no  |  |

---


 
 
 #### [BusinessCountryInfo](#BusinessCountryInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country_code | string |  no  |  |
 | country | string |  no  |  |

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


 
 
 #### [SellerPhoneNumber](#SellerPhoneNumber)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country_code | number |  yes  |  |
 | number | string |  yes  |  |

---


 
 
 #### [ContactDetails](#ContactDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | phone | [[SellerPhoneNumber](#SellerPhoneNumber)] |  no  |  |
 | emails | [string] |  no  |  |

---


 
 
 #### [GetCompanyProfileSerializerResponse](#GetCompanyProfileSerializerResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | created_by | [UserSerializer](#UserSerializer) |  no  |  |
 | notification_emails | [string] |  no  |  |
 | mode | string |  no  |  |
 | sell_gst_exempted_products | boolean |  no  |  |
 | addresses | [[GetAddressSerializer](#GetAddressSerializer)] |  no  |  |
 | store_name | string |  no  |  |
 | suppressions | [string] |  no  |  |
 | taxes | [[CompanyTaxesSerializer](#CompanyTaxesSerializer)] |  no  |  |
 | documents | [[Document](#Document)] |  no  |  |
 | name | string |  no  |  |
 | corrections | [string] |  no  |  |
 | stage | string |  no  |  |
 | business_country_info | [BusinessCountryInfo](#BusinessCountryInfo) |  no  |  |
 | verified_by | [UserSerializer](#UserSerializer) |  no  |  |
 | modified_on | string |  no  |  |
 | verified_on | string |  no  |  |
 | warnings | string |  no  |  |
 | created_on | string |  no  |  |
 | annual_turnover | string |  no  |  |
 | company_type | string |  yes  |  |
 | code | string |  no  |  |
 | business_type | string |  yes  |  |
 | uid | number |  yes  |  |
 | business_info | string |  no  |  |
 | business_details | [BusinessDetails](#BusinessDetails) |  no  |  |
 | about_business | string |  no  |  |
 | franchise_enabled | boolean |  no  |  |
 | modified_by | [UserSerializer](#UserSerializer) |  no  |  |
 | contact_details | [ContactDetails](#ContactDetails) |  no  |  |

---


 
 
 #### [CreateUpdateAddressSerializer](#CreateUpdateAddressSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | longitude | number |  yes  |  |
 | address2 | string |  no  |  |
 | city | string |  yes  |  |
 | landmark | string |  no  |  |
 | latitude | number |  yes  |  |
 | address1 | string |  yes  |  |
 | state | string |  yes  |  |
 | country | string |  yes  |  |
 | address_type | string |  yes  |  |
 | country_code | string |  no  |  |
 | pincode | number |  yes  |  |

---


 
 
 #### [UpdateCompany](#UpdateCompany)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | notification_emails | [string] |  no  |  |
 | store_name | string |  no  |  |
 | addresses | [[CreateUpdateAddressSerializer](#CreateUpdateAddressSerializer)] |  no  |  |
 | website_url | string |  no  |  |
 | taxes | [[CompanyTaxesSerializer](#CompanyTaxesSerializer)] |  no  |  |
 | documents | [[Document](#Document)] |  no  |  |
 | name | string |  no  |  |
 | warnings | string |  no  |  |
 | composite_taxation | string |  no  |  |
 | annual_turnover | string |  no  |  |
 | company_type | string |  no  |  |
 | code | string |  no  |  |
 | business_type | string |  no  |  |
 | _custom_json | string |  no  |  |
 | business_info | string |  no  |  |
 | business_details | [BusinessDetails](#BusinessDetails) |  no  |  |
 | about_business | string |  no  |  |
 | reject_reason | string |  no  |  |
 | franchise_enabled | boolean |  no  |  |
 | contact_details | [ContactDetails](#ContactDetails) |  no  |  |

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
 | pending | number |  no  |  |
 | verified | number |  no  |  |

---


 
 
 #### [MetricsSerializer](#MetricsSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | uid | number |  no  |  |
 | brand | [DocumentsObj](#DocumentsObj) |  no  |  |
 | store_documents | [DocumentsObj](#DocumentsObj) |  no  |  |
 | store | [DocumentsObj](#DocumentsObj) |  no  |  |
 | product | [DocumentsObj](#DocumentsObj) |  no  |  |
 | company_documents | [DocumentsObj](#DocumentsObj) |  no  |  |
 | stage | string |  no  |  |

---


 
 
 #### [BrandBannerSerializer](#BrandBannerSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | landscape | string |  yes  |  |
 | portrait | string |  yes  |  |

---


 
 
 #### [BrandDocumentsSerializer](#BrandDocumentsSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | url | string |  yes  |  |
 | type | string |  yes  |  |

---


 
 
 #### [GetBrandResponseSerializer](#GetBrandResponseSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string |  no  |  |
 | logo | string |  no  |  |
 | created_by | [UserSerializer](#UserSerializer) |  no  |  |
 | _locale_language | string |  no  |  |
 | mode | string |  no  |  |
 | banner | [BrandBannerSerializer](#BrandBannerSerializer) |  no  |  |
 | slug_key | string |  no  |  |
 | brand_owner | string |  no  |  |
 | documents | [[BrandDocumentsSerializer](#BrandDocumentsSerializer)] |  no  |  |
 | name | string |  yes  |  |
 | corrections | [string] |  no  |  |
 | stage | string |  no  |  |
 | verified_by | [UserSerializer](#UserSerializer) |  no  |  |
 | modified_on | string |  no  |  |
 | verified_on | string |  no  |  |
 | synonyms | [string] |  no  |  |
 | warnings | string |  no  |  |
 | created_on | string |  no  |  |
 | uid | number |  no  |  |
 | _custom_json | string |  no  |  |
 | owner_id | number |  no  |  |
 | reject_reason | string |  no  |  |
 | modified_by | [UserSerializer](#UserSerializer) |  no  |  |

---


 
 
 #### [BrandDocumentSerializer](#BrandDocumentSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  yes  |  |
 | url | string |  yes  |  |

---


 
 
 #### [CreateUpdateBrandRequestSerializer](#CreateUpdateBrandRequestSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | uid | number |  no  |  |
 | _custom_json | string |  no  |  |
 | description | string |  no  |  |
 | brand_tier | string |  no  |  |
 | logo | string |  yes  |  |
 | synonyms | [string] |  no  |  |
 | company_id | number |  no  |  |
 | documents | [[BrandDocumentSerializer](#BrandDocumentSerializer)] |  no  |  |
 | _locale_language | string |  no  |  |
 | name | string |  yes  |  |
 | banner | [BrandBannerSerializer](#BrandBannerSerializer) |  yes  |  |

---


 
 
 #### [Page](#Page)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  yes  |  |
 | has_next | boolean |  no  |  |
 | size | number |  no  |  |
 | item_total | number |  no  |  |
 | has_previous | boolean |  no  |  |
 | next_id | string |  no  |  |
 | current | number |  no  |  |

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
 | website_url | string |  no  |  |
 | socials | [[CompanySocialAccounts](#CompanySocialAccounts)] |  no  |  |

---


 
 
 #### [CompanySerializer](#CompanySerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | business_country_info | [BusinessCountryInfo](#BusinessCountryInfo) |  no  |  |
 | uid | number |  no  |  |
 | _custom_json | string |  no  |  |
 | verified_by | [UserSerializer](#UserSerializer) |  no  |  |
 | market_channels | [string] |  no  |  |
 | modified_on | string |  no  |  |
 | addresses | [[GetAddressSerializer](#GetAddressSerializer)] |  no  |  |
 | verified_on | string |  no  |  |
 | reject_reason | string |  no  |  |
 | created_by | [UserSerializer](#UserSerializer) |  no  |  |
 | stage | string |  no  |  |
 | created_on | string |  no  |  |
 | details | [CompanyDetails](#CompanyDetails) |  no  |  |
 | modified_by | [UserSerializer](#UserSerializer) |  no  |  |
 | name | string |  no  |  |
 | company_type | string |  yes  |  |
 | notification_emails | [string] |  no  |  |
 | business_type | string |  yes  |  |

---


 
 
 #### [CompanyBrandDocumentsResponseSerializer](#CompanyBrandDocumentsResponseSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | url | string |  no  |  |
 | type | string |  no  |  |

---


 
 
 #### [CompanyBrandSerializer](#CompanyBrandSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | uid | number |  no  |  |
 | brand | [GetBrandResponseSerializer](#GetBrandResponseSerializer) |  no  |  |
 | verified_by | [UserSerializer](#UserSerializer) |  no  |  |
 | modified_on | string |  no  |  |
 | verified_on | string |  no  |  |
 | warnings | string |  no  |  |
 | reject_reason | string |  no  |  |
 | created_by | [UserSerializer](#UserSerializer) |  no  |  |
 | company | [CompanySerializer](#CompanySerializer) |  no  |  |
 | documents | [[CompanyBrandDocumentsResponseSerializer](#CompanyBrandDocumentsResponseSerializer)] |  no  |  |
 | created_on | string |  no  |  |
 | modified_by | [UserSerializer](#UserSerializer) |  no  |  |
 | corrections | [string] |  no  |  |
 | stage | string |  no  |  |

---


 
 
 #### [CompanyBrandListSerializer](#CompanyBrandListSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | page | [Page](#Page) |  no  |  |
 | items | [[CompanyBrandSerializer](#CompanyBrandSerializer)] |  no  |  |

---


 
 
 #### [CompanyBrandDocumentsSerializer](#CompanyBrandDocumentsSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | url | string |  yes  |  |
 | type | string |  yes  |  |

---


 
 
 #### [CompanyBrandPostRequestSerializer](#CompanyBrandPostRequestSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | company | number |  yes  |  |
 | uid | number |  no  |  |
 | documents | [[CompanyBrandDocumentsSerializer](#CompanyBrandDocumentsSerializer)] |  no  |  |
 | brands | [number] |  yes  |  |

---


 
 
 #### [Storeholiday](#Storeholiday)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | slug | string |  yes  |  |
 | type | string |  yes  |  |
 | end_date | string |  yes  |  |
 | year | number |  yes  |  |
 | name | string |  yes  |  |
 | start_date | string |  yes  |  |

---


 
 
 #### [LocationManagerSerializer](#LocationManagerSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | mobile_no | [SellerPhoneNumber](#SellerPhoneNumber) |  yes  |  |
 | email | string |  no  |  |

---


 
 
 #### [Correction](#Correction)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | desc | string |  no  |  |
 | reason_code | string |  no  |  |

---


 
 
 #### [Deactivation](#Deactivation)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string |  no  |  |
 | reason | [string] |  no  |  |

---


 
 
 #### [LocationTimingSerializer](#LocationTimingSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | hour | number |  no  |  |
 | minute | number |  no  |  |

---


 
 
 #### [LocationDayWiseSerializer](#LocationDayWiseSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | opening | [LocationTimingSerializer](#LocationTimingSerializer) |  no  |  |
 | open | boolean |  yes  |  |
 | weekday | string |  yes  |  |
 | closing | [LocationTimingSerializer](#LocationTimingSerializer) |  no  |  |

---


 
 
 #### [GetCompanySerializer](#GetCompanySerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | uid | number |  no  |  |
 | verified_by | [UserSerializer](#UserSerializer) |  no  |  |
 | modified_on | string |  no  |  |
 | addresses | [[GetAddressSerializer](#GetAddressSerializer)] |  no  |  |
 | verified_on | string |  no  |  |
 | reject_reason | string |  no  |  |
 | created_by | [UserSerializer](#UserSerializer) |  no  |  |
 | stage | string |  no  |  |
 | created_on | string |  no  |  |
 | modified_by | [UserSerializer](#UserSerializer) |  no  |  |
 | name | string |  no  |  |
 | company_type | string |  no  |  |
 | business_type | string |  no  |  |

---


 
 
 #### [InvoiceCredSerializer](#InvoiceCredSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | password | string |  no  |  |
 | enabled | boolean |  no  |  |
 | username | string |  no  |  |

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
 | store_uid | number |  no  |  |
 | on_same_store | boolean |  no  |  |

---


 
 
 #### [LocationIntegrationType](#LocationIntegrationType)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | order | string |  no  |  |
 | inventory | string |  no  |  |

---


 
 
 #### [GetLocationSerializer](#GetLocationSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | created_by | [UserSerializer](#UserSerializer) |  no  |  |
 | holiday | [[Storeholiday](#Storeholiday)] |  no  |  |
 | notification_emails | [string] |  no  |  |
 | phone_number | string |  yes  |  |
 | fulfilment_type | string |  no  |  |
 | manager | [LocationManagerSerializer](#LocationManagerSerializer) |  no  |  |
 | documents | [[Document](#Document)] |  no  |  |
 | name | string |  yes  |  |
 | corrections | [[Correction](#Correction)] |  no  |  |
 | inventories | number |  no  |  |
 | stage | string |  no  |  |
 | deactivate_reason | [Deactivation](#Deactivation) |  no  |  |
 | display_name | string |  yes  |  |
 | verified_by | [UserSerializer](#UserSerializer) |  no  |  |
 | modified_on | string |  no  |  |
 | verified_on | string |  no  |  |
 | warnings | string |  no  |  |
 | timing | [[LocationDayWiseSerializer](#LocationDayWiseSerializer)] |  no  |  |
 | company | [GetCompanySerializer](#GetCompanySerializer) |  no  |  |
 | created_on | string |  no  |  |
 | gst_credentials | [InvoiceDetailsSerializer](#InvoiceDetailsSerializer) |  no  |  |
 | code | string |  yes  |  |
 | address | [GetAddressSerializer](#GetAddressSerializer) |  yes  |  |
 | deactivation_time | string |  no  |  |
 | store_type | string |  no  |  |
 | addverb_reference_code | string |  no  |  |
 | uid | number |  no  |  |
 | _custom_json | string |  no  |  |
 | product_return_config | [ProductReturnConfigSerializer](#ProductReturnConfigSerializer) |  no  |  |
 | integration_type | [LocationIntegrationType](#LocationIntegrationType) |  no  |  |
 | modified_by | [UserSerializer](#UserSerializer) |  no  |  |
 | contact_numbers | [[SellerPhoneNumber](#SellerPhoneNumber)] |  no  |  |

---


 
 
 #### [LocationListSerializer](#LocationListSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | page | [Page](#Page) |  no  |  |
 | items | [[GetLocationSerializer](#GetLocationSerializer)] |  no  |  |

---


 
 
 #### [Storeholiday1](#Storeholiday1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | slug | string |  yes  |  |
 | type | string |  yes  |  |
 | end_date | string |  yes  |  |
 | year | number |  yes  |  |
 | name | string |  yes  |  |
 | start_date | string |  yes  |  |

---


 
 
 #### [LocationSerializer](#LocationSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | holiday | [[Storeholiday1](#Storeholiday1)] |  no  |  |
 | notification_emails | [string] |  no  |  |
 | fulfilment_type | string |  yes  |  |
 | manager | [LocationManagerSerializer](#LocationManagerSerializer) |  no  |  |
 | documents | [[Document](#Document)] |  no  |  |
 | name | string |  yes  |  |
 | stage | string |  no  |  |
 | display_name | string |  yes  |  |
 | warnings | string |  no  |  |
 | timing | [[LocationDayWiseSerializer](#LocationDayWiseSerializer)] |  no  |  |
 | company | number |  yes  |  |
 | gst_credentials | [InvoiceDetailsSerializer](#InvoiceDetailsSerializer) |  no  |  |
 | code | string |  yes  |  |
 | address | [GetAddressSerializer](#GetAddressSerializer) |  yes  |  |
 | store_type | string |  no  |  |
 | addverb_reference_code | string |  no  |  |
 | uid | number |  no  |  |
 | _custom_json | string |  no  |  |
 | product_return_config | [ProductReturnConfigSerializer](#ProductReturnConfigSerializer) |  no  |  |
 | contact_numbers | [[SellerPhoneNumber](#SellerPhoneNumber)] |  no  |  |

---


 
 
 #### [BulkLocationSerializer](#BulkLocationSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [[LocationSerializer](#LocationSerializer)] |  no  |  |

---


 
 
 #### [DocumentObject](#DocumentObject)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | correction_requested | number |  no  |  |
 | unverified | number |  no  |  |

---


 
 
 #### [RestrictedCategoryMetricsResponseSerializer](#RestrictedCategoryMetricsResponseSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | drug | [DocumentObject](#DocumentObject) |  no  |  |
 | food | [DocumentObject](#DocumentObject) |  no  |  |

---


 
 
 #### [StageReasonResponse](#StageReasonResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | desc | string |  no  |  |
 | reason_code | string |  no  |  |

---


 
 
 #### [RestrictedCategoryFiles](#RestrictedCategoryFiles)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | url | string |  yes  |  |
 | type | string |  yes  |  |

---


 
 
 #### [RestrictedCategoryResponseInfoSerializer](#RestrictedCategoryResponseInfoSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | stage_reason | [[StageReasonResponse](#StageReasonResponse)] |  no  |  |
 | issue_date | string |  no  |  |
 | value | string |  no  |  |
 | store_id | number |  no  |  |
 | primary | boolean |  no  |  |
 | category_type | string |  no  |  |
 | company_id | number |  no  |  |
 | _id | string |  no  |  |
 | documents | [[RestrictedCategoryFiles](#RestrictedCategoryFiles)] |  no  |  |
 | document_type | string |  no  |  |
 | expiry_date | string |  no  |  |
 | stage | string |  no  |  |

---


 
 
 #### [RestrictedCategoryResponseSerializer](#RestrictedCategoryResponseSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | uid | number |  yes  |  |
 | name | string |  yes  |  |
 | code | string |  yes  |  |
 | restricted_categories | [[RestrictedCategoryResponseInfoSerializer](#RestrictedCategoryResponseInfoSerializer)] |  yes  |  |
 | store_type | string |  yes  |  |
 | fulfilment_type | string |  no  |  |

---


 
 
 #### [RestrictedCategoryListResponseSerializer](#RestrictedCategoryListResponseSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | page | [Page](#Page) |  no  |  |
 | declaration_template | string |  no  |  |
 | items | [[RestrictedCategoryResponseSerializer](#RestrictedCategoryResponseSerializer)] |  no  |  |

---


 
 
 #### [SuccessResponseSerializer](#SuccessResponseSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 | success | boolean |  no  |  |

---




