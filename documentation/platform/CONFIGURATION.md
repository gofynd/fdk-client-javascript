




##### [Back to Platform docs](./README.md)

## Configuration Methods
Application configuration apis

* [addDomain](#adddomain)
* [changeDomainType](#changedomaintype)
* [createApplication](#createapplication)
* [getAppApiTokens](#getappapitokens)
* [getAppBasicDetails](#getappbasicdetails)
* [getAppCompanies](#getappcompanies)
* [getAppContactInfo](#getappcontactinfo)
* [getAppCurrencyConfig](#getappcurrencyconfig)
* [getAppFeatures](#getappfeatures)
* [getAppStores](#getappstores)
* [getAppSupportedCurrency](#getappsupportedcurrency)
* [getApplicationById](#getapplicationbyid)
* [getApplications](#getapplications)
* [getAvailableOptIns](#getavailableoptins)
* [getBrandsByCompany](#getbrandsbycompany)
* [getBuildConfig](#getbuildconfig)
* [getCompanyByBrands](#getcompanybybrands)
* [getCurrencies](#getcurrencies)
* [getDomainAvailibility](#getdomainavailibility)
* [getDomainStatus](#getdomainstatus)
* [getDomains](#getdomains)
* [getIntegrationById](#getintegrationbyid)
* [getIntegrationByLevelId](#getintegrationbylevelid)
* [getIntegrationLevelConfig](#getintegrationlevelconfig)
* [getInventoryConfig](#getinventoryconfig)
* [getLevelActiveIntegrations](#getlevelactiveintegrations)
* [getOrderingStoresByFilter](#getorderingstoresbyfilter)
* [getOtherSellerApplicationById](#getothersellerapplicationbyid)
* [getOtherSellerApplications](#getothersellerapplications)
* [getPreviousVersions](#getpreviousversions)
* [getSelectedOptIns](#getselectedoptins)
* [getStaffOrderingStores](#getstafforderingstores)
* [getStoreByBrands](#getstorebybrands)
* [modifyAppFeatures](#modifyappfeatures)
* [optOutFromApplication](#optoutfromapplication)
* [partiallyUpdateInventoryConfig](#partiallyupdateinventoryconfig)
* [removeDomainById](#removedomainbyid)
* [updateAppApiTokens](#updateappapitokens)
* [updateAppBasicDetails](#updateappbasicdetails)
* [updateAppContactInfo](#updateappcontactinfo)
* [updateAppCurrencyConfig](#updateappcurrencyconfig)
* [updateAppFeatures](#updateappfeatures)
* [updateBuildConfig](#updatebuildconfig)
* [updateInventoryConfig](#updateinventoryconfig)
* [updateLevelIntegration](#updatelevelintegration)
* [updateLevelUidIntegration](#updateleveluidintegration)
* [updateOrderingStoreConfig](#updateorderingstoreconfig)



## Methods with example and description




### addDomain
Add new domain to application



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").configuration.addDomain({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").configuration.addDomain({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [DomainAddRequest](#DomainAddRequest) | yes | Request body |


Add new domain to application.

*Returned Response:*




[Domain](#Domain)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "name": "testdm.hostx0.de",
  "verified": true,
  "txtRecords": [],
  "message": "New domain added successfully",
  "is_primary": false,
  "is_shortlink": false,
  "_id": "6048497e87f5730423149190"
}
```
</details>









---


### changeDomainType
Change domain type



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").configuration.changeDomainType({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").configuration.changeDomainType({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [UpdateDomainTypeRequest](#UpdateDomainTypeRequest) | yes | Request body |


Change a domain to Primary or Shortlink domain

*Returned Response:*




[DomainsResponse](#DomainsResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "domains": [
    {
      "_id": "5eb1177748312a3bd55d0f1e",
      "verified": true,
      "name": "uniket.hostx0.de",
      "is_primary": true,
      "is_shortlink": false
    },
    {
      "verified": true,
      "is_primary": false,
      "is_shortlink": true,
      "_id": "5f0858c5f86e00cd42dccc8d",
      "name": "jd.hostx0.de"
    },
    {
      "verified": true,
      "is_primary": false,
      "is_shortlink": false,
      "_id": "6048497e87f5730423149190",
      "name": "testdm.hostx0.de"
    }
  ]
}
```
</details>









---


### createApplication
Create application



```javascript
// Promise
const promise = platformClient.configuration.createApplication({  body : value });

// Async/Await
const data = await platformClient.configuration.createApplication({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CreateApplicationRequest](#CreateApplicationRequest) | yes | Request body |


Create new application

*Returned Response:*




[CreateAppResponse](#CreateAppResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getAppApiTokens
Get social tokens



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").configuration.getAppApiTokens();

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").configuration.getAppApiTokens();
```






Get social tokens.

*Returned Response:*




[TokenResponse](#TokenResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "tokens": {
    "firebase": {
      "credentials": {
        "ios": {
          "application_id": "test",
          "api_key": "test"
        },
        "android": {
          "application_id": "test",
          "api_key": "test"
        },
        "project_id": "uniket-d8cdc",
        "gcm_sender_id": "test",
        "application_id": "test",
        "api_key": "test"
      },
      "enabled": true
    },
    "moengage": {
      "credentials": {
        "app_id": "test"
      },
      "enabled": true
    },
    "segment": {
      "credentials": {
        "write_key": "test"
      },
      "enabled": true
    },
    "gtm": {
      "credentials": {
        "api_key": "test"
      },
      "enabled": false
    },
    "freshchat": {
      "credentials": {
        "app_id": "123456",
        "app_key": "123456789",
        "web_token": ""
      },
      "enabled": false
    },
    "safetynet": {
      "credentials": {
        "api_key": "test"
      },
      "enabled": true
    },
    "fynd_rewards": {
      "credentials": {
        "public_key": "test"
      }
    },
    "auth": {
      "google": {
        "appId": "test"
      },
      "facebook": {
        "appId": "test"
      },
      "accountkit": {
        "appId": ""
      }
    },
    "google_map": {
      "credentials": {
        "api_key": "test"
      }
    }
  },
  "_id": "5e66282a073261060ee83751",
  "application": "000000000000000000000004",
  "created_at": "2020-03-09T11:27:38.894Z",
  "modified_at": "2020-12-24T05:39:17.054Z",
  "__v": 0
}
```
</details>









---


### getAppBasicDetails
Get basic application details



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").configuration.getAppBasicDetails();

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").configuration.getAppBasicDetails();
```






Get basic application details like name

*Returned Response:*




[ApplicationDetail](#ApplicationDetail)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "name": "Uniket B2B",
  "description": "Uniket B2B - India's Fastest Growing Retail Store - Aapki Badhti Dukaan",
  "logo": {
    "secure_url": "https://hdn-1.addsale.com/x0/company/1/applications/000000000000000000000004/application/pictures/free-logo/original/oEf3SQjda-Uniket-B2B.png"
  },
  "mobile_logo": {
    "secure_url": "https://hdn-1.addsale.com/x0/company/1/applications/000000000000000000000004/application/pictures/free-logo/original/oEf3SQjda-Uniket-B2B.png"
  },
  "favicon": {
    "secure_url": "https://hdn-1.addsale.com/x0/company/1/applications/000000000000000000000004/application/pictures/favicon/original/y3h6SSlY5-Uniket-B2B.png"
  },
  "banner": {
    "secure_url": "https://hdn-1.addsale.com/x0/company/1/applications/000000000000000000000004/application/pictures/landscape-banner/original/uSwlNpygq-Uniket-B2B.png"
  },
  "domain": {
    "verified": true,
    "is_primary": true,
    "is_shortlink": false,
    "_id": "5eb1177748312a3bd55d0f1e",
    "name": "uniket.hostx0.de"
  },
  "domains": [
    {
      "verified": true,
      "is_primary": true,
      "is_shortlink": false,
      "_id": "5eb1177748312a3bd55d0f1e",
      "name": "uniket.hostx0.de"
    },
    {
      "verified": true,
      "is_primary": false,
      "is_shortlink": true,
      "_id": "5f0858c5f86e00cd42dccc8d",
      "name": "jd.hostx0.de"
    }
  ],
  "company_id": 1,
  "_id": "000000000000000000000004"
}
```
</details>









---


### getAppCompanies
Application inventory enabled companies



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").configuration.getAppCompanies({  uid : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").configuration.getAppCompanies({  uid : value,
 pageNo : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| uid | number | no | uid of companies to be fetched |    
| pageNo | number | no | Current page no |    
| pageSize | number | no | Current request items count |  



Application inventory enabled companies.

*Returned Response:*




[CompaniesResponse](#CompaniesResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "items": [
    {
      "uid": 108,
      "name": "Sample2 Company",
      "company_type": "mbo"
    },
    {
      "uid": 13,
      "name": "Isabel Mazanec",
      "company_type": "franchisee"
    },
    {
      "uid": 7,
      "name": "Zack Burgdorf",
      "company_type": "distributor"
    }
  ],
  "page": {
    "type": "number",
    "size": 200,
    "current": 1,
    "has_next": false,
    "item_total": 3
  }
}
```
</details>









---


### getAppContactInfo
Get application information



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").configuration.getAppContactInfo();

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").configuration.getAppContactInfo();
```






Get Application Current Information. This includes information about social links, address and contact information of company/seller/brand of the application.

*Returned Response:*




[ApplicationInformation](#ApplicationInformation)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "value": {
    "address": {
      "loc": null,
      "address_line": [
        "Warehouse 5, Near Industrial Complex",
        "2nd Lane, Andheri"
      ],
      "phone": [
        {
          "code": "+91",
          "number": "9988776654"
        }
      ],
      "city": "Mumbai , Maharashtra , India",
      "country": "India",
      "pincode": 400059
    },
    "support": {
      "phone": [],
      "email": [],
      "timing": "9 AM to 9 PM"
    },
    "social_links": {
      "facebook": {
        "title": "Facebook",
        "icon": "https://hdn-1.fynd.com/system/svg/social-media/icon/original/hQAbAKdvHK-facebookfooteraopcjq.svg",
        "link": ""
      },
      "instagram": {
        "title": "Instagram",
        "icon": "https://hdn-1.fynd.com/system/svg/social-media/icon/original/UZYsGWOqXp-instagramfooterl3utrr.svg",
        "link": ""
      },
      "twitter": {
        "title": "Twitter",
        "icon": "https://hdn-1.fynd.com/system/svg/social-media/icon/original/oT2hW-BJjq-twitterfooternajsyr.svg",
        "link": ""
      },
      "pinterest": {
        "title": "Pinterest",
        "icon": "https://hdn-1.fynd.com/system/svg/social-media/icon/original/v0erlcMk8p-pinterestfooternzmq4b.svg",
        "link": ""
      },
      "google_plus": {
        "title": "Google+",
        "icon": "https://hdn-1.fynd.com/system/svg/social-media/icon/original/lw3Y5S58h4-googleplusysukr1.png",
        "link": ""
      },
      "youtube": {
        "title": "Youtube",
        "icon": "https://hdn-1.fynd.com/system/svg/social-media/icon/original/EYV03PDST_-youtubefootermqhcr7.svg",
        "link": ""
      },
      "linked_in": {
        "title": "LinkedIn",
        "icon": "https://hdn-1.fynd.com/system/svg/social-media/icon/original/qa7gx_bW9O-linkedinfooterrcr0yq.svg",
        "link": ""
      },
      "vimeo": {
        "title": "Vimeo",
        "icon": "https://hdn-1.fynd.com/system/svg/social-media/icon/original/Ttc80b3U78-vimeofooternho4br.svg",
        "link": ""
      },
      "blog_link": {
        "title": "Blog",
        "icon": "https://hdn-1.fynd.com/system/svg/social-media/icon/original/LKpxTk1I3s-mediumfooterdtvrva.svg",
        "link": ""
      }
    },
    "links": [
      {
        "title": "Shipping",
        "link": "www.uniket.store/shipping-details"
      },
      {
        "title": "Returns",
        "link": "www.uniket.store/policy/return-policy"
      },
      {
        "title": "Privacy",
        "link": "www.uniket.store/policy/privacy-policy"
      },
      {
        "title": "Terms",
        "link": "www.uniket.store/policy/terms-conditions"
      }
    ],
    "copyright_text": "#MadeInIndia © 2020 Shopsense Retail Technologies",
    "_id": "5e6627bd0732616083e83750",
    "business_highlights": [
      {
        "_id": "5fc901611dfba6c2e87d1ca9",
        "title": "100% Genuine Products",
        "icon": "https://hdn-1.addsale.com/x0/company/1/applications/000000000000000000000004/business-highlights/pictures/square-logo/original/bVlx43F2a-H6pvZ9tzp-business-logo-icon.png",
        "sub_title": "Directly from brands"
      },
      {
        "_id": "5fc901611dfba64ce57d1caa",
        "title": "Credit Facility Available",
        "icon": "https://hdn-1.addsale.com/x0/company/1/applications/000000000000000000000004/business-highlights/pictures/square-logo/original/VMnltS1m3-QuUnEjOsA-business-logo-icon.png",
        "sub_title": "Free 30 Days Credit"
      },
      {
        "_id": "5fc901611dfba64b2e7d1cab",
        "title": "Assured Returns",
        "icon": "https://hdn-1.addsale.com/x0/company/1/applications/000000000000000000000004/business-highlights/pictures/square-logo/original/cTHzgHJXK-sROtLMalN-business-logo-icon.png",
        "sub_title": "For all damaged/wrong items"
      }
    ],
    "application": "000000000000000000000004",
    "created_at": "2020-03-09T11:25:49.921Z",
    "modified_at": "2020-12-03T15:16:49.087Z",
    "__v": 99
  }
}
```
</details>









---


### getAppCurrencyConfig
Get application enabled currency list



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").configuration.getAppCurrencyConfig();

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").configuration.getAppCurrencyConfig();
```






Get application enabled currency list

*Returned Response:*




[AppSupportedCurrency](#AppSupportedCurrency)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "_id": "5ec7a85965c3893857538d93",
  "supported_currency": [
    "5ec75d11f7bfb5a7d38f3524",
    "5ec75d11f7bfb54d798f3516",
    "5ec75d11f7bfb553b88f355f",
    "5ec75d11f7bfb559d08f34d5",
    "5ec75d11f7bfb5d1e98f34da"
  ],
  "application": "000000000000000000000004",
  "default_currency": {
    "ref": "5ec75d11f7bfb54d798f3516",
    "code": "USD"
  },
  "created_at": "2020-05-22T10:24:25.984Z",
  "modified_at": "2021-03-09T10:47:32.664Z"
}
```
</details>









---


### getAppFeatures
Get features of application



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").configuration.getAppFeatures();

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").configuration.getAppFeatures();
```






Get features of application

*Returned Response:*




[AppFeatureResponse](#AppFeatureResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "feature": {
    "product_detail": {
      "similar": [
        "basic",
        "visual",
        "brand",
        "category",
        "seller",
        "price",
        "specs"
      ],
      "seller_selection": true,
      "update_product_meta": true,
      "request_product": true
    },
    "landing_page": {
      "launch_page": {
        "page_type": "home",
        "params": null,
        "query": null
      },
      "continue_as_guest": true,
      "login_btn_text": "Click here to sign-in",
      "show_domain_textbox": true,
      "show_register_btn": true
    },
    "registration_page": {
      "ask_store_address": false
    },
    "home_page": {
      "order_processing": true
    },
    "common": {
      "communication_optin_dialog": {
        "visibility": true
      },
      "deployment_store_selection": {
        "enabled": true,
        "type": "hard"
      },
      "listing_price": {
        "value": "min",
        "sort": "min"
      },
      "currency": {
        "value": [
          "INR"
        ],
        "type": "explicit",
        "default_currency": "INR"
      },
      "revenue_engine": {
        "enabled": false
      },
      "feedback": {
        "enabled": true
      },
      "compare_products": {
        "enabled": true
      },
      "reward_points": {
        "credit": {
          "enabled": true
        },
        "debit": {
          "enabled": true,
          "auto_apply": false,
          "strategy_channel": "REWARDS"
        }
      }
    },
    "cart": {
      "gst_input": true,
      "staff_selection": true,
      "placing_for_customer": true,
      "google_map": true,
      "revenue_engine_coupon": false
    },
    "qr": {
      "application": true,
      "products": true,
      "collections": true
    },
    "pcr": {
      "staff_selection": true
    },
    "order": {
      "buy_again": true
    },
    "_id": "5e57643c986e4119c973df7d",
    "app": "000000000000000000000004",
    "created_at": "2020-02-27T06:39:56.088Z",
    "modified_at": "2021-02-02T11:04:14.289Z",
    "__v": 1
  }
}
```
</details>









---


### getAppStores
Application inventory enabled stores



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").configuration.getAppStores({  pageNo : value,
 pageSize : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").configuration.getAppStores({  pageNo : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNo | number | no | Current page no |    
| pageSize | number | no | Current request items count |  



Application inventory enabled stores.

*Returned Response:*




[StoresResponse](#StoresResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "items": [
    {
      "_id": "5ec2c0b168fc2800017112f5",
      "uid": 1,
      "name": "RRL01",
      "display_name": "RRL01",
      "store_type": "warehouse",
      "store_code": "WH_8513",
      "company_id": 1
    },
    {
      "_id": "5ec3b09a68fc28000171137c",
      "modified_on": "2020-06-30T10:02:41.208Z",
      "uid": 10,
      "name": "Saran Ledonne",
      "display_name": "",
      "store_type": "high_street",
      "store_code": "af6198fe-2c23-4441-bbf4-e694c96e255c",
      "company_id": 1
    },
    {
      "_id": "5f099b2c931b1c0001e7ccb2",
      "display_name": "cbs 2",
      "store_code": "HS-c9bac",
      "name": "cbs 2",
      "company_id": 80,
      "store_type": "high_street",
      "uid": 11014
    }
  ],
  "page": {
    "type": "number",
    "size": 200,
    "current": 1,
    "has_next": true,
    "item_total": 3
  }
}
```
</details>









---


### getAppSupportedCurrency
Get currencies enabled in the application



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").configuration.getAppSupportedCurrency();

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").configuration.getAppSupportedCurrency();
```






Use this API to get a list of currencies allowed in the current application. Moreover, get the name, code, symbol, and the decimal digits of the currencies.

*Returned Response:*




[AppCurrencyResponse](#AppCurrencyResponse)

Success. Check the example shown below or refer `AppCurrencyResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "application": "000000000000000000000001",
  "default_currency": {
    "ref": "5ecf6122d953d4242c044907",
    "code": "INR"
  },
  "supported_currency": [
    {
      "_id": "5ecf6122d953d4242c044907",
      "is_active": true,
      "name": "Indian Rupee",
      "code": "INR",
      "decimal_digits": 2,
      "symbol": "₹",
      "created_at": "2020-05-28T06:58:42.532Z",
      "modified_at": "2021-04-05T16:44:14.358Z"
    }
  ]
}
```
</details>









---


### getApplicationById
Get application data from id



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").configuration.getApplicationById();

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").configuration.getApplicationById();
```






Get application data from id

*Returned Response:*




[Application](#Application)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getApplications
Get list of application under company



```javascript
// Promise
const promise = platformClient.configuration.getApplications({  pageNo : value,
 pageSize : value,
 q : value });

// Async/Await
const data = await platformClient.configuration.getApplications({  pageNo : value,
 pageSize : value,
 q : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNo | number | no |  |    
| pageSize | number | no |  |    
| q | string | no | Search param by name or domain |  



Get list of application under company

*Returned Response:*




[ApplicationsResponse](#ApplicationsResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getAvailableOptIns
Get all available integration opt-ins



```javascript
// Promise
const promise = platformClient.configuration.getAvailableOptIns({  pageNo : value,
 pageSize : value });

// Async/Await
const data = await platformClient.configuration.getAvailableOptIns({  pageNo : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNo | number | no | Current page no |    
| pageSize | number | no | Current request items count |  



Get all available integration opt-ins

*Returned Response:*




[GetIntegrationsOptInsResponse](#GetIntegrationsOptInsResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "items": [
    {
      "validators": {
        "company": {
          "json_schema": [
            {
              "display": "Host",
              "key": "host",
              "type": "text",
              "tooltip": "Enter host address"
            }
          ],
          "browser_script": ""
        },
        "store": {
          "json_schema": [],
          "browser_script": ""
        },
        "inventory": {
          "json_schema": [],
          "browser_script": ""
        },
        "order": {
          "json_schema": [],
          "browser_script": ""
        }
      },
      "description": "awesome integration",
      "description_html": "",
      "constants": "{\"mop_mapping\":{\"FYND\":\"FYND\"}}",
      "companies": [],
      "support": [
        "inventory",
        "order"
      ],
      "_id": "5e56089f4265cf2846d1e58c",
      "name": "x0-1",
      "meta": [
        {
          "public": true,
          "_id": "5e56089f4265cf81e1d1e58e",
          "name": "wow",
          "value": "1"
        }
      ],
      "icon": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1582696589/addsale/platform/integrations/icon/jihgcoibfmdttgiukwg0.png",
      "owner": "5e55fe074bda3c392ed9eab2",
      "created_at": "2020-02-26T05:56:47.214Z",
      "modified_at": "2021-03-02T12:29:03.554Z",
      "token": "fKoHRW5H",
      "secret": "d1E85CTmf",
      "__v": 12
    },
    {
      "validators": {
        "company": {
          "json_schema": [],
          "browser_script": ""
        },
        "store": {
          "json_schema": [],
          "browser_script": ""
        },
        "inventory": {
          "json_schema": [],
          "browser_script": ""
        },
        "order": {
          "json_schema": [],
          "browser_script": ""
        }
      },
      "description": "jabardast",
      "description_html": "",
      "constants": "{\"mop_mapping\":{\"FYND\":\"FYND\"}}",
      "companies": [],
      "support": [
        "inventory",
        "order"
      ],
      "_id": "5e5608bf4265cf7198d1e58f",
      "name": "x0-2",
      "meta": [
        {
          "public": false,
          "_id": "5e5608bf4265cf813fd1e590",
          "name": "wow",
          "value": "1"
        }
      ],
      "icon": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1582696633/addsale/platform/integrations/icon/cstvvkgjgip1ja56gq4x.png",
      "owner": "5e55fe074bda3c392ed9eab2",
      "created_at": "2020-02-26T05:57:19.875Z",
      "modified_at": "2021-02-15T05:23:55.962Z",
      "token": "3h3_mnzp",
      "secret": "dgGHrIlFG",
      "__v": 7
    }
  ],
  "page": {
    "type": "number",
    "current": 1,
    "size": 50,
    "item_total": 24,
    "has_next": false
  }
}
```
</details>









---


### getBrandsByCompany
Get brands by company



```javascript
// Promise
const promise = platformClient.configuration.getBrandsByCompany({  q : value });

// Async/Await
const data = await platformClient.configuration.getBrandsByCompany({  q : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| q | string | no | Search text for brand name |  



Get brands by company

*Returned Response:*




[BrandsByCompanyResponse](#BrandsByCompanyResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "brands": [
    {
      "name": "5th Avenue",
      "value": 476,
      "brand_logo_url": "https://hdn-1.addsale.com/x0/seller/pictures/logo/original/--unnamed--/1595615012186.jpeg",
      "brand_banner_url": "https://hdn-1.addsale.com/x0/seller/pictures/landscape-banner/original/--unnamed--/1595615012724.jpeg",
      "brand_banner_portrait_url": "https://hdn-1.addsale.com/x0/seller/pictures/portrait-banner/original/--unnamed--/1595615013203.jpeg"
    },
    {
      "name": "Abhay",
      "value": 47,
      "brand_logo_url": "https://hdn-1.fynd.com/brands/pictures/square-logo/resize-h:200,w:0/9fG6jZUJV-brand-Slamay.png",
      "brand_banner_url": "https://hdn-1.addsale.com/x0/seller/pictures/landscape-banner/original/cpApcg_insta_01.jpg034422ca-b739-4a30-ba9c-87ca32e8c2ef/cpApcg_insta_01.jpg",
      "brand_banner_portrait_url": "https://hdn-1.addsale.com/x0/seller/pictures/portrait-banner/original/mtaSMv_insta_01.jpga088b881-886d-4b5a-b82f-139bd2aa3f35/mtaSMv_insta_01.jpg"
    }
  ]
}
```
</details>









---


### getBuildConfig
Get latest build config



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").configuration.getBuildConfig({  platformType : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").configuration.getBuildConfig({  platformType : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| platformType | string | yes | Current platform name |  



Get latest build config

*Returned Response:*




[MobileAppConfiguration](#MobileAppConfiguration)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "is_active": true,
  "_id": "5ea9b318bc23a343ab6d442f",
  "app_name": "TestUniket",
  "landing_image": {
    "aspect_ratio": "57/51",
    "secure_url": "https://hdn-1.addsale.com/x0/company/1/applications/000000000000000000000004/mobile-build/pictures/free-landing/original/yKnXY1ATx-store-landing-image.png"
  },
  "splash_image": {
    "aspect_ratio": "1/1",
    "secure_url": "https://hdn-1.addsale.com/x0/company/1/applications/000000000000000000000004/mobile-build/pictures/free-splash/original/s6d7oYfY6-store-splash-image.png"
  },
  "application": "000000000000000000000004",
  "platform_type": "android",
  "created_at": "2020-04-29T17:02:16.976Z",
  "modified_at": "2021-02-23T17:10:26.872Z",
  "__v": 0,
  "package_name": "com.fynd.store.x000000000000000000000004"
}
```
</details>









---


### getCompanyByBrands
Get company by brand uids



```javascript
// Promise
const promise = platformClient.configuration.getCompanyByBrands({  body : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await platformClient.configuration.getCompanyByBrands({  body : value,
 pageNo : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNo | number | no | Current page no |    
| pageSize | number | no | Current request items count |  
| body | [CompanyByBrandsRequest](#CompanyByBrandsRequest) | yes | Request body |


Get company by brand uids

*Returned Response:*




[CompanyByBrandsResponse](#CompanyByBrandsResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "items": [
    {
      "company_name": "RELIANCE RETAIL LTD",
      "company_id": 1
    },
    {
      "company_name": "SARASUOLE PRIVATE LIMITED",
      "company_id": 3
    },
    {
      "company_name": "Lloyd Palek",
      "company_id": 4
    }
  ],
  "page": {
    "type": "number",
    "current": 1,
    "size": 200,
    "item_total": 171,
    "has_next": false
  }
}
```
</details>









---


### getCurrencies
Get all currencies



```javascript
// Promise
const promise = platformClient.configuration.getCurrencies();

// Async/Await
const data = await platformClient.configuration.getCurrencies();
```






Get all currencies

*Returned Response:*




[CurrenciesResponse](#CurrenciesResponse)

Currencies Success response




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "items": [
    {
      "_id": "5ec75d11f7bfb54d798f3516",
      "is_active": true,
      "name": "United States Dollar",
      "code": "USD",
      "created_at": "2020-05-22T05:03:13.354Z",
      "modified_at": "2020-06-05T09:12:04.248Z",
      "decimal_digits": 2,
      "symbol": "$"
    }
  ]
}
```
</details>









---


### getDomainAvailibility
Check domain availibility before linking to application



```javascript
// Promise
const promise = platformClient.configuration.getDomainAvailibility({  body : value });

// Async/Await
const data = await platformClient.configuration.getDomainAvailibility({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [DomainSuggestionsRequest](#DomainSuggestionsRequest) | yes | Request body |


Check domain availibility before linking to application. Also sends domain suggestions with similar to queried domain. \ Custom domain search is currently powered by GoDaddy provider.

*Returned Response:*




[DomainSuggestionsResponse](#DomainSuggestionsResponse)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Suggestions for fynd domains</i></summary>

```json
{
  "value": {
    "domains": [
      {
        "name": "test.hostx1.de",
        "is_available": false
      },
      {
        "name": "testhive.hostx1.de",
        "is_available": true
      }
    ]
  }
}
```
</details>

<details>
<summary><i>&nbsp; Suggestions for custom domains</i></summary>

```json
{
  "value": {
    "domains": [
      {
        "name": "test25.in",
        "unsupported": false,
        "is_available": false
      },
      {
        "name": "try25.in",
        "unsupported": false,
        "is_available": true,
        "price": 14.99,
        "currency": "USD"
      }
    ]
  }
}
```
</details>

</details>









---


### getDomainStatus
Get domain connected status.



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").configuration.getDomainStatus({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").configuration.getDomainStatus({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [DomainStatusRequest](#DomainStatusRequest) | yes | Request body |


Get domain connected status. Check if domain is live and mapped to appropriate IP to fynd servers.

*Returned Response:*




[DomainStatusResponse](#DomainStatusResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "connected": true,
  "status": [
    {
      "display": "Domain TXT record entry 5d65089e031f9029f8e8dc2f",
      "status": true
    },
    {
      "display": "Domain pointing to 18.217.232.69 A record",
      "status": true
    },
    {
      "display": "Domain pointing to 18.188.115.251 A record",
      "status": true
    }
  ]
}
```
</details>









---


### getDomains
Get attached domain list



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").configuration.getDomains();

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").configuration.getDomains();
```






Get attached domain list.

*Returned Response:*




[DomainsResponse](#DomainsResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "domains": [
    {
      "_id": "5eb1177748312a3bd55d0f1e",
      "verified": true,
      "name": "uniket.hostx0.de",
      "is_primary": true,
      "is_shortlink": false,
      "is_predefined": true
    },
    {
      "verified": true,
      "is_primary": false,
      "is_shortlink": true,
      "_id": "5f0858c5f86e00cd42dccc8d",
      "name": "jd.hostx0.de",
      "is_predefined": true
    },
    {
      "verified": true,
      "is_primary": false,
      "is_shortlink": false,
      "_id": "6048497e87f5730423149190",
      "name": "testdm.hostx0.de",
      "is_predefined": true
    }
  ]
}
```
</details>









---


### getIntegrationById
Get integration data



```javascript
// Promise
const promise = platformClient.configuration.getIntegrationById({  id : value });

// Async/Await
const data = await platformClient.configuration.getIntegrationById({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | number | yes | Integration id |  



Get integration data

*Returned Response:*




[Integration](#Integration)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "_id": "5ec376ce848a005189acb312",
  "validators": {
    "company": {
      "browser_script": "",
      "json_schema": {
        "type": "object",
        "required": [
          "ip_address",
          "icode",
          "gds_entity_id",
          "auth_key"
        ],
        "properties": {
          "gds_entity_id": {
            "type": "string",
            "title": "GDS Entity ID",
            "minLength": 3,
            "maxLength": 10,
            "pattern": "^[a-zA-Z0-9]+$",
            "description": "GDS Entity ID is a unique identifier provided by Ginesys to you."
          },
          "ip_address": {
            "type": "string",
            "title": "IP Address",
            "pattern": "(\\d{1,3}\\.){3}\\d{1,3}",
            "description": "Enter IP address provided by Ginesys for your POS server"
          },
          "auth_key": {
            "title": "Auth Key",
            "type": "string",
            "maxLength": 500,
            "description": "Provide authentication token provided by Ginesys to you."
          },
          "icode": {
            "title": "ICODE",
            "type": "string",
            "enum": [
              "ean",
              "upc",
              "alu",
              "sku_code"
            ],
            "description": "Please select the correct SKU identifier that you use to provide inventory to Fynd."
          }
        }
      }
    },
    "store": {
      "browser_script": "",
      "json_schema": {
        "type": "object",
        "properties": {
          "location_id": {
            "type": "string",
            "title": "Location ID",
            "description": "Provide site code as per POS/SAP."
          },
          "ip_address": {
            "type": "string",
            "title": "IP Address",
            "pattern": "(\\d{1,3}\\.){3}\\d{1,3}",
            "description": "Enter IP address provided by Ginesys for your POS server"
          }
        }
      }
    }
  },
  "description": "Sap Integration west ELM brands",
  "constants": {},
  "name": "SAP RBL Integration",
  "meta": [
    {
      "public": true,
      "_id": "5ee3e246129be17ce0b59ef4",
      "name": "price_level",
      "value": "store"
    }
  ],
  "icon": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1589868232/addsale/platform/integrations/icon/z3kj9p8nidx4zzmdutdu.svg",
  "owner": "5e60e43dcd08cf01069eb23e",
  "created_at": "2020-05-19T06:03:58.757Z",
  "modified_at": "2020-06-15T12:00:42.598Z",
  "token": "qk60vXqk-",
  "secret": "Gp0dYInpUV",
  "__v": 13,
  "description_html": ""
}
```
</details>









---


### getIntegrationByLevelId
Get level data for integration



```javascript
// Promise
const promise = platformClient.configuration.getIntegrationByLevelId({  id : value,
 level : value,
 uid : value });

// Async/Await
const data = await platformClient.configuration.getIntegrationByLevelId({  id : value,
 level : value,
 uid : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | Integration id |   
| level | string | yes | Integration level |   
| uid | number | yes | Integration level uid |  



Get level data for integration

*Returned Response:*




[IntegrationLevel](#IntegrationLevel)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "opted": false,
  "permissions": [],
  "last_patch": [],
  "_id": "5ec377f2848a0073feacb31b",
  "integration": "5ec376ce848a005189acb312",
  "level": "store",
  "uid": 1,
  "meta": [],
  "token": "1RuGX0Fyp",
  "created_at": "2020-05-19T06:08:50.199Z",
  "modified_at": "2020-08-17T07:54:01.809Z",
  "__v": 14,
  "data": {
    "location_id": "09876",
    "ip_address": "1.2.3.4"
  }
}
```
</details>









---


### getIntegrationLevelConfig
Get integration level config



```javascript
// Promise
const promise = platformClient.configuration.getIntegrationLevelConfig({  id : value,
 level : value,
 opted : value,
 checkPermission : value });

// Async/Await
const data = await platformClient.configuration.getIntegrationLevelConfig({  id : value,
 level : value,
 opted : value,
 checkPermission : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | Integration id |   
| level | string | yes | Integration level |    
| opted | boolean | no | Filter on opted stores |    
| checkPermission | boolean | no | Filter on if permissions are present |  



Get integration/integration-opt-in level config

*Returned Response:*




[IntegrationConfigResponse](#IntegrationConfigResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "items": [
    {
      "opted": false,
      "permissions": [],
      "last_patch": [],
      "_id": "5ec377f2848a0073feacb31b",
      "integration": "5ec376ce848a005189acb312",
      "level": "store",
      "uid": 1,
      "meta": [],
      "token": "1RuGX0Fyp",
      "created_at": "2020-05-19T06:08:50.199Z",
      "modified_at": "2020-08-17T07:54:01.809Z",
      "__v": 14,
      "data": {
        "location_id": "09876",
        "ip_address": "1.2.3.4"
      }
    }
  ]
}
```
</details>









---


### getInventoryConfig
Get application configuration



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").configuration.getInventoryConfig();

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").configuration.getInventoryConfig();
```






Get application configuration for various features and data

*Returned Response:*




[ApplicationInventory](#ApplicationInventory)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "inventory": {
    "brand": {
      "criteria": "all",
      "brands": []
    },
    "store": {
      "criteria": "filter",
      "stores": [],
      "rules": [
        {
          "companies": [
            1,
            3,
            4
          ],
          "brands": []
        }
      ]
    },
    "category": {
      "criteria": "all",
      "categories": []
    },
    "price": {
      "min": 1,
      "max": 10000
    },
    "discount": {
      "min": 0,
      "max": 100
    },
    "out_of_stock": true,
    "franchise_enabled": true,
    "exclude_category": [],
    "image": [
      "standard",
      "substandard",
      "default"
    ],
    "company_store": []
  },
  "authentication": {
    "required": true,
    "provider": "fynd"
  },
  "article_assignment": {
    "rules": {
      "store_priority": {
        "enabled": false,
        "storetype_order": []
      }
    },
    "post_order_reassignment": true
  },
  "reward_points": {
    "credit": {
      "enabled": true
    },
    "debit": {
      "enabled": true,
      "auto_apply": false,
      "strategy_channel": "rewards"
    }
  },
  "cart": {
    "delivery_charges": {
      "enabled": true,
      "charges": [
        {
          "threshold": 1000,
          "charges": 49
        },
        {
          "threshold": 200000,
          "charges": 79
        }
      ]
    },
    "enabled": true,
    "max_cart_items": 0,
    "min_cart_value": 120,
    "bulk_coupons": true,
    "revenue_engine_coupon": false
  },
  "payment": {
    "callback_url": {
      "app": "",
      "web": ""
    },
    "methods": {
      "pl": {
        "enabled": true
      },
      "card": {
        "enabled": true
      },
      "nb": {
        "enabled": true
      },
      "wl": {
        "enabled": true
      },
      "ps": {
        "enabled": true
      },
      "upi": {
        "enabled": true
      },
      "qr": {
        "enabled": true
      },
      "cod": {
        "enabled": true
      },
      "pp": {
        "enabled": true
      },
      "jp": {
        "enabled": false
      },
      "pac": {
        "enabled": false
      },
      "fc": {
        "enabled": false
      },
      "jiopp": {
        "enabled": false
      },
      "stripepg": {
        "enabled": true
      },
      "juspaypg": {
        "enabled": false
      },
      "payubizpg": {
        "enabled": true
      },
      "payumoneypg": {
        "enabled": true
      },
      "rupifipg": {
        "enabled": false
      },
      "simpl": {
        "enabled": true
      }
    },
    "payment_selection_lock": {
      "enabled": false,
      "default_options": "",
      "payment_identifier": ""
    },
    "mode_of_payment": "uniket_b2b",
    "source": "uniket",
    "enabled": true,
    "cod_amount_limit": 100000,
    "cod_charges": 1500
  },
  "order": {
    "enabled": true,
    "force_reassignment": false
  },
  "logistics": {
    "logistics_by_seller": false,
    "serviceability_check": true,
    "same_day_delivery": true,
    "dp_assignment": true
  },
  "business": "retail",
  "comms_enabled": true,
  "communication": {
    "email": {
      "enabled": false
    },
    "sms": {
      "enabled": false
    },
    "voice": {
      "enabled": false
    }
  },
  "platforms": [
    "uniket_wholesale"
  ],
  "_id": "5e04c76b8dd8c003577fdd0a",
  "loyalty_points": {
    "enabled": true,
    "auto_apply": false
  },
  "app": "000000000000000000000004",
  "created_at": "2019-12-26t14:44:59.835z",
  "modified_at": "2021-03-09t15:40:29.208z",
  "__v": 3,
  "modified_by": "5e199eed98cfe16dc61385de"
}
```
</details>









---


### getLevelActiveIntegrations
Check store has active integration



```javascript
// Promise
const promise = platformClient.configuration.getLevelActiveIntegrations({  id : value,
 level : value,
 uid : value,
 permission : value });

// Async/Await
const data = await platformClient.configuration.getLevelActiveIntegrations({  id : value,
 level : value,
 uid : value,
 permission : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | Integration id |   
| level | string | yes | Integration level |   
| uid | number | yes | Integration level uid |    
| permission | string | no | Check opt-in for specific integration permissions |  



API checks if a store is already opted in any other integrations

*Returned Response:*




[OptedStoreIntegration](#OptedStoreIntegration)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "opted": false,
  "permissions": [],
  "last_patch": [],
  "_id": "5ec377f2848a0073feacb31b",
  "integration": "5ec376ce848a005189acb312",
  "level": "store",
  "uid": 1,
  "meta": [],
  "token": "1RuGX0Fyp",
  "created_at": "2020-05-19T06:08:50.199Z",
  "modified_at": "2020-08-17T07:54:01.809Z",
  "__v": 14,
  "data": {
    "location_id": "09876",
    "ip_address": "1.2.3.4"
  }
}
```
</details>









---


### getOrderingStoresByFilter
Get ordering store by filter



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").configuration.getOrderingStoresByFilter({  body : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").configuration.getOrderingStoresByFilter({  body : value,
 pageNo : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNo | number | no | Current page no |    
| pageSize | number | no | Current request items count |  
| body | [FilterOrderingStoreRequest](#FilterOrderingStoreRequest) | yes | Request body |


Get ordering store by filter

*Returned Response:*




[OrderingStores](#OrderingStores)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "page": {
    "type": "number",
    "size": 10,
    "current": 1,
    "has_next": true,
    "item_total": 583
  },
  "items": [
    {
      "address": {
        "state": "MAHARASHTRA",
        "address1": "SAGAR TECH PLAZA, SAKINAKA",
        "lat_long": {
          "type": "Point",
          "coordinates": [
            1,
            1
          ]
        },
        "pincode": 400070,
        "country": "INDIA",
        "city": "MUMBAI"
      },
      "_id": "5f586563f509dd000145c02d",
      "store_type": "high_street",
      "uid": 11016,
      "store_code": "HS-0c532",
      "display_name": " Brand Company Store 11",
      "name": " Brand Company Store 11",
      "pincode": 400070,
      "code": "HS-0c532"
    },
    {
      "address": {
        "state": "MAHARASHTRA",
        "address1": "UNNAMED ROAD, VASAI EAST SALT PLANT",
        "lat_long": {
          "type": "Point",
          "coordinates": [
            72.84293219999999,
            19.3805675
          ]
        },
        "address2": "VASAI EAST SALT PLANT, VASAI EAST, ",
        "pincode": 401208,
        "country": "INDIA",
        "city": "VIRAR",
        "landmark": ""
      },
      "_id": "5f585934f509dd000145c025",
      "store_type": "high_street",
      "uid": 11567,
      "store_code": "123456",
      "display_name": "2nd Store",
      "name": "2nd Store",
      "pincode": 401208,
      "code": "123456"
    },
    {
      "address": {
        "state": "GUJARAT",
        "address1": "32, AANAND SHOPPING CENTRE ",
        "lat_long": {
          "type": "Point",
          "coordinates": [
            1,
            1
          ]
        },
        "pincode": 380001,
        "country": "INDIA",
        "city": "AHMEDABAD"
      },
      "_id": "5f587b5ef509dd000145c02f",
      "store_type": "high_street",
      "uid": 11568,
      "store_code": "12345",
      "display_name": "3rd ",
      "name": "3rd ",
      "pincode": 380001,
      "code": "12345"
    }
  ]
}
```
</details>









---


### getOtherSellerApplicationById
Get other seller applications



```javascript
// Promise
const promise = platformClient.configuration.getOtherSellerApplicationById({  id : value });

// Async/Await
const data = await platformClient.configuration.getOtherSellerApplicationById({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | Application Id |  



Get other seller application

*Returned Response:*




[OptedApplicationResponse](#OptedApplicationResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "name": "intent 2",
  "description": "",
  "_id": "5f030880f019afd636889afc",
  "domain": "intent.hostx0.de",
  "company": {
    "uid": 94,
    "name": "DummyImran"
  },
  "opted_inventory": {
    "opt_type": {
      "key": "store",
      "display": "Store"
    },
    "items": [
      {
        "name": "RRL01",
        "id": 1,
        "store_code": "WH_8513",
        "_id": "5ec2c0b168fc2800017112f5",
        "modified_on": "2020-09-09T04:25:55.843Z",
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
        "display_name": "RRL01",
        "store_type": "warehouse",
        "company_id": 1
      }
    ]
  },
  "opt_out_inventory": {
    "store": [],
    "company": []
  }
}
```
</details>









---


### getOtherSellerApplications
Get other seller applications



```javascript
// Promise
const promise = platformClient.configuration.getOtherSellerApplications({  pageNo : value,
 pageSize : value });

// Async/Await
const data = await platformClient.configuration.getOtherSellerApplications({  pageNo : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNo | number | no | Current page no |    
| pageSize | number | no | Current request items count |  



Get other seller applications who has opted current company as inventory

*Returned Response:*




[OtherSellerApplications](#OtherSellerApplications)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "items": [
    {
      "name": "intent 2",
      "description": "",
      "_id": "5f030880f019afd636889afc",
      "domain": "intent.hostx0.de",
      "company": {
        "uid": 94,
        "name": "DummyImran"
      },
      "opt_type": "store"
    },
    {
      "name": "new application imran",
      "description": "",
      "_id": "5f03f5d17692029e2d1a50a5",
      "domain": "imranstore.hostx0.de",
      "company": {
        "uid": 94,
        "name": "DummyImran"
      },
      "opt_type": "store"
    },
    {
      "name": "helo",
      "description": "",
      "_id": "5f03f63b769202170c1a50a9",
      "domain": "helo.hostx0.de",
      "company": {
        "uid": 7,
        "name": "Zack Burgdorf"
      },
      "opt_type": "store"
    }
  ],
  "page": {
    "type": "number",
    "current": 1,
    "size": 10,
    "item_total": 20,
    "has_next": true
  }
}
```
</details>









---


### getPreviousVersions
Get previous build versions



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").configuration.getPreviousVersions({  platformType : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").configuration.getPreviousVersions({  platformType : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| platformType | string | yes | Current platform name |  



Get previous build versions

*Returned Response:*




[BuildVersionHistory](#BuildVersionHistory)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "versions": [
    {
      "_id": "6035376ab937c5f7c5462888",
      "application": "000000000000000000000004",
      "platform_type": "android",
      "build_status": "pending",
      "version_name": "0.5.6",
      "version_code": 1,
      "created_at": "2021-02-23T17:12:10.977Z",
      "modified_at": "2021-02-23T17:12:10.977Z",
      "__v": 0
    }
  ],
  "latest_available_version_name": "0.5.7"
}
```
</details>









---


### getSelectedOptIns
Get company/store level integration opt-ins



```javascript
// Promise
const promise = platformClient.configuration.getSelectedOptIns({  level : value,
 uid : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await platformClient.configuration.getSelectedOptIns({  level : value,
 uid : value,
 pageNo : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| level | string | yes | Integration level |   
| uid | number | yes | Integration level uid |    
| pageNo | number | no | Current page no |    
| pageSize | number | no | Current request items count |  



Get company/store level integration opt-ins

*Returned Response:*




[GetIntegrationsOptInsResponse](#GetIntegrationsOptInsResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "items": [
    {
      "validators": {
        "company": {
          "json_schema": [
            {
              "display": "Host",
              "key": "host",
              "type": "text",
              "tooltip": "Enter host address"
            }
          ],
          "browser_script": ""
        },
        "store": {
          "json_schema": [],
          "browser_script": ""
        },
        "inventory": {
          "json_schema": [],
          "browser_script": ""
        },
        "order": {
          "json_schema": [],
          "browser_script": ""
        }
      },
      "description": "awesome integration",
      "description_html": "",
      "constants": "{\"mop_mapping\":{\"FYND\":\"FYND\"}}",
      "companies": [],
      "support": [
        "inventory",
        "order"
      ],
      "_id": "5e56089f4265cf2846d1e58c",
      "name": "x0-1",
      "meta": [
        {
          "public": true,
          "_id": "5e56089f4265cf81e1d1e58e",
          "name": "wow",
          "value": "1"
        }
      ],
      "icon": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1582696589/addsale/platform/integrations/icon/jihgcoibfmdttgiukwg0.png",
      "owner": "5e55fe074bda3c392ed9eab2",
      "created_at": "2020-02-26T05:56:47.214Z",
      "modified_at": "2021-03-02T12:29:03.554Z",
      "token": "fKoHRW5H",
      "secret": "d1E85CTmf",
      "__v": 12
    },
    {
      "validators": {
        "company": {
          "json_schema": [],
          "browser_script": ""
        },
        "store": {
          "json_schema": [],
          "browser_script": ""
        },
        "inventory": {
          "json_schema": [],
          "browser_script": ""
        },
        "order": {
          "json_schema": [],
          "browser_script": ""
        }
      },
      "description": "jabardast",
      "description_html": "",
      "constants": "{\"mop_mapping\":{\"FYND\":\"FYND\"}}",
      "companies": [],
      "support": [
        "inventory",
        "order"
      ],
      "_id": "5e5608bf4265cf7198d1e58f",
      "name": "x0-2",
      "meta": [
        {
          "public": false,
          "_id": "5e5608bf4265cf813fd1e590",
          "name": "wow",
          "value": "1"
        }
      ],
      "icon": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1582696633/addsale/platform/integrations/icon/cstvvkgjgip1ja56gq4x.png",
      "owner": "5e55fe074bda3c392ed9eab2",
      "created_at": "2020-02-26T05:57:19.875Z",
      "modified_at": "2021-02-15T05:23:55.962Z",
      "token": "3h3_mnzp",
      "secret": "dgGHrIlFG",
      "__v": 7
    }
  ],
  "page": {
    "type": "number",
    "current": 1,
    "size": 50,
    "item_total": 24,
    "has_next": false
  }
}
```
</details>









---


### getStaffOrderingStores
Get deployment stores



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").configuration.getStaffOrderingStores({  pageNo : value,
 pageSize : value,
 q : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").configuration.getStaffOrderingStores({  pageNo : value,
 pageSize : value,
 q : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNo | number | no | The page number to navigate through the given set of results. Default value is 1. |    
| pageSize | number | no | The number of items to retrieve in each page. Default value is 10. |    
| q | string | no | Store code or name of the ordering store. |  



Use this API to retrieve the details of all stores access given to the staff member (the selling locations where the application will be utilized for placing orders).

*Returned Response:*




[OrderingStoresResponse](#OrderingStoresResponse)

Success. Check the example shown below or refer `OrderingStoresResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getStoreByBrands
Get stores by brand uids



```javascript
// Promise
const promise = platformClient.configuration.getStoreByBrands({  body : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await platformClient.configuration.getStoreByBrands({  body : value,
 pageNo : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNo | number | no | Current page no |    
| pageSize | number | no | Current request items count |  
| body | [StoreByBrandsRequest](#StoreByBrandsRequest) | yes | Request body |


Get stores by brand uids

*Returned Response:*




[StoreByBrandsResponse](#StoreByBrandsResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "items": [
    {
      "store_name": "RRL01",
      "store_id": 1,
      "store_type": "warehouse",
      "store_code": "WH_8513",
      "store_address": {
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
      "company": {
        "uid": 1,
        "name": "RELIANCE RETAIL LTD"
      }
    },
    {
      "store_name": "RUOSH WAREHOUSE",
      "store_id": 2,
      "store_type": "warehouse",
      "store_code": "RUOSH43",
      "store_address": {
        "state": "MAHARASHTRA",
        "address1": "RAUNAK CITY SECTOR 4 D10, SAPAD GAON",
        "lat_long": {
          "type": "Point",
          "coordinates": [
            73.121952,
            19.2645048
          ]
        },
        "address2": "SAPAD GAON, KHADAKPADA, ",
        "pincode": 421301,
        "country": "INDIA",
        "city": "THANE",
        "landmark": "near taj"
      },
      "company": {
        "uid": 3,
        "name": "SARASUOLE PRIVATE LIMITED"
      }
    }
  ],
  "page": {
    "type": "number",
    "current": 1,
    "size": 200,
    "item_total": 762,
    "has_next": true
  }
}
```
</details>









---


### modifyAppFeatures
Update features of application



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").configuration.modifyAppFeatures({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").configuration.modifyAppFeatures({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [AppFeatureRequest](#AppFeatureRequest) | yes | Request body |


Update features of application

*Returned Response:*




[AppFeature](#AppFeature)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "product_detail": {
    "similar": [
      "basic",
      "visual",
      "brand",
      "category",
      "seller",
      "price",
      "specs"
    ],
    "seller_selection": true,
    "update_product_meta": true,
    "request_product": true
  },
  "landing_page": {
    "launch_page": {
      "page_type": "home",
      "params": null,
      "query": null
    },
    "continue_as_guest": true,
    "login_btn_text": "Click here to sign-in",
    "show_domain_textbox": true,
    "show_register_btn": true
  },
  "registration_page": {
    "ask_store_address": false
  },
  "home_page": {
    "order_processing": true
  },
  "common": {
    "international_shipping": {
      "enabled": true
    },
    "communication_optin_dialog": {
      "visibility": true
    },
    "deployment_store_selection": {
      "enabled": true,
      "type": "hard"
    },
    "listing_price": {
      "value": "min",
      "sort": "min"
    },
    "currency": {
      "value": [
        "INR"
      ],
      "type": "explicit",
      "default_currency": "INR"
    },
    "revenue_engine": {
      "enabled": false
    },
    "feedback": {
      "enabled": true
    },
    "compare_products": {
      "enabled": true
    }
  },
  "cart": {
    "gst_input": true,
    "staff_selection": true,
    "placing_for_customer": true,
    "google_map": true,
    "revenue_engine_coupon": false
  },
  "qr": {
    "application": true,
    "products": true,
    "collections": true
  },
  "pcr": {
    "staff_selection": true
  },
  "order": {
    "buy_again": true
  },
  "_id": "5e57643c986e4119c973df7d",
  "app": "000000000000000000000004",
  "created_at": "2020-02-27T06:39:56.088Z",
  "modified_at": "2021-03-09T15:40:29.188Z",
  "__v": 1
}
```
</details>









---


### optOutFromApplication
Opt out company or store from other seller application



```javascript
// Promise
const promise = platformClient.configuration.optOutFromApplication({  id : value,
 body : value });

// Async/Await
const data = await platformClient.configuration.optOutFromApplication({  id : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | Application Id |  
| body | [OptOutInventory](#OptOutInventory) | yes | Request body |


Opt out company or store from other seller application

*Returned Response:*




[SuccessMessageResponse](#SuccessMessageResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "message": "Updated opt out data"
}
```
</details>









---


### partiallyUpdateInventoryConfig
Partially update application configuration



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").configuration.partiallyUpdateInventoryConfig({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").configuration.partiallyUpdateInventoryConfig({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [AppInventoryPartialUpdate](#AppInventoryPartialUpdate) | yes | Request body |


Partially update application configuration for various features and data

*Returned Response:*




[ApplicationInventory](#ApplicationInventory)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "inventory": {
    "brand": {
      "criteria": "all",
      "brands": []
    },
    "store": {
      "criteria": "filter",
      "stores": [],
      "rules": [
        {
          "companies": [
            1,
            3,
            4
          ],
          "brands": []
        }
      ]
    },
    "category": {
      "criteria": "all",
      "categories": []
    },
    "price": {
      "min": 1,
      "max": 10000
    },
    "discount": {
      "min": 0,
      "max": 100
    },
    "out_of_stock": true,
    "franchise_enabled": true,
    "exclude_category": [],
    "image": [
      "standard",
      "substandard",
      "default"
    ],
    "company_store": []
  },
  "authentication": {
    "required": true,
    "provider": "fynd"
  },
  "article_assignment": {
    "rules": {
      "store_priority": {
        "enabled": false,
        "storetype_order": []
      }
    },
    "post_order_reassignment": true
  },
  "reward_points": {
    "credit": {
      "enabled": true
    },
    "debit": {
      "enabled": true,
      "auto_apply": false,
      "strategy_channel": "REWARDS"
    }
  },
  "cart": {
    "delivery_charges": {
      "enabled": true,
      "charges": [
        {
          "threshold": 1000,
          "charges": 49
        },
        {
          "threshold": 200000,
          "charges": 79
        }
      ]
    },
    "enabled": true,
    "max_cart_items": 0,
    "min_cart_value": 120,
    "bulk_coupons": true,
    "revenue_engine_coupon": false
  },
  "payment": {
    "callback_url": {
      "app": "",
      "web": ""
    },
    "methods": {
      "PL": {
        "enabled": true
      },
      "CARD": {
        "enabled": true
      },
      "NB": {
        "enabled": true
      },
      "WL": {
        "enabled": true
      },
      "PS": {
        "enabled": true
      },
      "UPI": {
        "enabled": true
      },
      "QR": {
        "enabled": true
      },
      "COD": {
        "enabled": true
      },
      "PP": {
        "enabled": true
      },
      "JP": {
        "enabled": false
      },
      "PAC": {
        "enabled": false
      },
      "FC": {
        "enabled": false
      },
      "JIOPP": {
        "enabled": false
      },
      "STRIPEPG": {
        "enabled": true
      },
      "JUSPAYPG": {
        "enabled": false
      },
      "PAYUBIZPG": {
        "enabled": true
      },
      "PAYUMONEYPG": {
        "enabled": true
      },
      "RUPIFIPG": {
        "enabled": false
      },
      "SIMPL": {
        "enabled": true
      }
    },
    "payment_selection_lock": {
      "enabled": false,
      "default_options": "",
      "payment_identifier": ""
    },
    "mode_of_payment": "UNIKET_B2B",
    "source": "UNIKET",
    "enabled": true,
    "cod_amount_limit": 100000,
    "cod_charges": 1500
  },
  "order": {
    "enabled": true,
    "force_reassignment": false
  },
  "logistics": {
    "logistics_by_seller": false,
    "serviceability_check": true,
    "same_day_delivery": true,
    "dp_assignment": true
  },
  "business": "retail",
  "comms_enabled": true,
  "communication": {
    "email": {
      "enabled": false
    },
    "sms": {
      "enabled": false
    },
    "voice": {
      "enabled": false
    }
  },
  "platforms": [
    "uniket_wholesale"
  ],
  "_id": "5e04c76b8dd8c003577fdd0a",
  "loyalty_points": {
    "enabled": true,
    "auto_apply": false
  },
  "app": "000000000000000000000004",
  "created_at": "2019-12-26T14:44:59.835Z",
  "modified_at": "2021-03-09T15:40:29.208Z",
  "__v": 3,
  "modified_by": "5e199eed98cfe16dc61385de"
}
```
</details>









---


### removeDomainById
Remove attached domain



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").configuration.removeDomainById({  id : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").configuration.removeDomainById({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | Domain _id |  



Remove attached domain.

*Returned Response:*




[SuccessMessageResponse](#SuccessMessageResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "message": "Domain removed successfully"
}
```
</details>









---


### updateAppApiTokens
Add social tokens



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").configuration.updateAppApiTokens({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").configuration.updateAppApiTokens({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [TokenResponse](#TokenResponse) | yes | Request body |


Add social tokens.

*Returned Response:*




[TokenResponse](#TokenResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "tokens": {
    "firebase": {
      "credentials": {
        "ios": {
          "application_id": "test",
          "api_key": "test"
        },
        "android": {
          "application_id": "test",
          "api_key": "test"
        },
        "project_id": "uniket-d8cdc",
        "gcm_sender_id": "test",
        "application_id": "test",
        "api_key": "test"
      },
      "enabled": true
    },
    "moengage": {
      "credentials": {
        "app_id": "test"
      },
      "enabled": true
    },
    "segment": {
      "credentials": {
        "write_key": "test"
      },
      "enabled": true
    },
    "gtm": {
      "credentials": {
        "api_key": "1234567890"
      },
      "enabled": false
    },
    "freshchat": {
      "credentials": {
        "app_id": "123456",
        "app_key": "123456789",
        "web_token": ""
      },
      "enabled": false
    },
    "safetynet": {
      "credentials": {
        "api_key": "test"
      },
      "enabled": true
    },
    "fynd_rewards": {
      "credentials": {
        "public_key": "test"
      }
    },
    "auth": {
      "google": {
        "appId": "test"
      },
      "facebook": {
        "appId": "test"
      },
      "accountkit": {
        "appId": ""
      }
    },
    "google_map": {
      "credentials": {
        "api_key": "test"
      }
    }
  },
  "_id": "5e66282a073261060ee83751",
  "application": "000000000000000000000004",
  "created_at": "2020-03-09T11:27:38.894Z",
  "modified_at": "2020-12-24T05:39:17.054Z",
  "__v": 0
}
```
</details>









---


### updateAppBasicDetails
Add or update application's basic details



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").configuration.updateAppBasicDetails({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").configuration.updateAppBasicDetails({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [ApplicationDetail](#ApplicationDetail) | yes | Request body |


Add or update application's basic details

*Returned Response:*




[ApplicationDetail](#ApplicationDetail)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "name": "Uniket B2B",
  "description": "Uniket B2B - India's Fastest Growing Retail Store - Aapki Badhti Dukaan",
  "logo": {
    "secure_url": "https://hdn-1.addsale.com/x0/company/1/applications/000000000000000000000004/application/pictures/free-logo/original/oEf3SQjda-Uniket-B2B.png"
  },
  "mobile_logo": {
    "secure_url": "https://hdn-1.addsale.com/x0/company/1/applications/000000000000000000000004/application/pictures/free-logo/original/oEf3SQjda-Uniket-B2B.png"
  },
  "favicon": {
    "secure_url": "https://hdn-1.addsale.com/x0/company/1/applications/000000000000000000000004/application/pictures/favicon/original/y3h6SSlY5-Uniket-B2B.png"
  },
  "banner": {
    "secure_url": "https://hdn-1.addsale.com/x0/company/1/applications/000000000000000000000004/application/pictures/landscape-banner/original/uSwlNpygq-Uniket-B2B.png"
  },
  "domain": {
    "verified": true,
    "is_primary": true,
    "is_shortlink": false,
    "_id": "5eb1177748312a3bd55d0f1e",
    "name": "uniket.hostx0.de"
  },
  "domains": [
    {
      "verified": true,
      "is_primary": true,
      "is_shortlink": false,
      "_id": "5eb1177748312a3bd55d0f1e",
      "name": "uniket.hostx0.de"
    },
    {
      "verified": true,
      "is_primary": false,
      "is_shortlink": true,
      "_id": "5f0858c5f86e00cd42dccc8d",
      "name": "jd.hostx0.de"
    }
  ]
}
```
</details>









---


### updateAppContactInfo
Get application information



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").configuration.updateAppContactInfo({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").configuration.updateAppContactInfo({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [ApplicationInformation](#ApplicationInformation) | yes | Request body |


Save Application Current Information. This includes information about social links, address and contact information of an application.

*Returned Response:*




[ApplicationInformation](#ApplicationInformation)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "_id": "5e6627bd0732616083e83750",
  "address": {
    "address_line": [
      "Warehouse 5, Near Industrial Complex",
      "2nd Lane, Andheri"
    ],
    "phone": [
      {
        "code": "+91",
        "number": "9988776654"
      }
    ],
    "city": "Mumbai , Maharashtra , India",
    "country": "India",
    "pincode": 400059,
    "loc": null
  },
  "social_links": {
    "facebook": {
      "title": "Facebook",
      "icon": "https://hdn-1.fynd.com/system/svg/social-media/icon/original/hQAbAKdvHK-facebookfooteraopcjq.svg",
      "link": ""
    },
    "instagram": {
      "title": "Instagram",
      "icon": "https://hdn-1.fynd.com/system/svg/social-media/icon/original/UZYsGWOqXp-instagramfooterl3utrr.svg",
      "link": ""
    },
    "twitter": {
      "title": "Twitter",
      "icon": "https://hdn-1.fynd.com/system/svg/social-media/icon/original/oT2hW-BJjq-twitterfooternajsyr.svg",
      "link": ""
    },
    "pinterest": {
      "title": "Pinterest",
      "icon": "https://hdn-1.fynd.com/system/svg/social-media/icon/original/v0erlcMk8p-pinterestfooternzmq4b.svg",
      "link": ""
    },
    "google_plus": {
      "title": "Google+",
      "icon": "https://hdn-1.fynd.com/system/svg/social-media/icon/original/lw3Y5S58h4-googleplusysukr1.png",
      "link": ""
    },
    "youtube": {
      "title": "Youtube",
      "icon": "https://hdn-1.fynd.com/system/svg/social-media/icon/original/EYV03PDST_-youtubefootermqhcr7.svg",
      "link": ""
    },
    "linked_in": {
      "title": "LinkedIn",
      "icon": "https://hdn-1.fynd.com/system/svg/social-media/icon/original/qa7gx_bW9O-linkedinfooterrcr0yq.svg",
      "link": ""
    },
    "blog_link": {
      "title": "Blog",
      "icon": "https://hdn-1.fynd.com/system/svg/social-media/icon/original/LKpxTk1I3s-mediumfooterdtvrva.svg",
      "link": ""
    }
  },
  "links": [
    {
      "title": "Shipping",
      "link": "www.uniket.store/shipping-details"
    },
    {
      "title": "Returns",
      "link": "www.uniket.store/policy/return-policy"
    },
    {
      "title": "Privacy",
      "link": "www.uniket.store/policy/privacy-policy"
    },
    {
      "title": "Terms",
      "link": "www.uniket.store/policy/terms-conditions"
    }
  ],
  "copyright_text": "#MadeInIndia © 2020 Shopsense Retail Technologies",
  "support": {
    "timing": "9 AM to 9 PM",
    "phone": [],
    "email": []
  },
  "business_highlights": [
    {
      "_id": "60479413a32f774d754b00ef",
      "title": "100% Genuine Products",
      "icon": "https://hdn-1.addsale.com/x0/company/1/applications/000000000000000000000004/business-highlights/pictures/square-logo/original/bVlx43F2a-H6pvZ9tzp-business-logo-icon.png",
      "sub_title": "Directly from brands"
    },
    {
      "_id": "60479413a32f7717df4b00f0",
      "title": "Credit Facility Available",
      "icon": "https://hdn-1.addsale.com/x0/company/1/applications/000000000000000000000004/business-highlights/pictures/square-logo/original/VMnltS1m3-QuUnEjOsA-business-logo-icon.png",
      "sub_title": "Free 30 Days Credit"
    },
    {
      "_id": "60479413a32f77e70b4b00f1",
      "title": "Assured Returns",
      "icon": "https://hdn-1.addsale.com/x0/company/1/applications/000000000000000000000004/business-highlights/pictures/square-logo/original/cTHzgHJXK-sROtLMalN-business-logo-icon.png",
      "sub_title": "For all damaged/wrong items"
    }
  ],
  "application": "000000000000000000000004",
  "created_at": "2020-03-09T11:25:49.921Z",
  "modified_at": "2021-03-09T15:28:19.598Z",
  "__v": 101
}
```
</details>









---


### updateAppCurrencyConfig
Add initial application supported currency



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").configuration.updateAppCurrencyConfig({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").configuration.updateAppCurrencyConfig({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [AppSupportedCurrency](#AppSupportedCurrency) | yes | Request body |


Add initial application supported currency for various features and data. Default INR will be enabled.

*Returned Response:*




[AppSupportedCurrency](#AppSupportedCurrency)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "_id": "5ec7a85965c3893857538d93",
  "supported_currency": [
    "5ec75d11f7bfb5a7d38f3524",
    "5ec75d11f7bfb54d798f3516",
    "5ec75d11f7bfb553b88f355f",
    "5ec75d11f7bfb559d08f34d5",
    "5ec75d11f7bfb5d1e98f34da"
  ],
  "application": "000000000000000000000004",
  "default_currency": {
    "ref": "5ec75d11f7bfb54d798f3516",
    "code": "USD"
  },
  "created_at": "2020-05-22T10:24:25.984Z",
  "modified_at": "2021-03-09T10:47:32.664Z"
}
```
</details>









---


### updateAppFeatures
Update features of application



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").configuration.updateAppFeatures({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").configuration.updateAppFeatures({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [AppFeatureRequest](#AppFeatureRequest) | yes | Request body |


Update features of application

*Returned Response:*




[AppFeature](#AppFeature)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "product_detail": {
    "similar": [
      "basic",
      "visual",
      "brand",
      "category",
      "seller",
      "price",
      "specs"
    ],
    "seller_selection": true,
    "update_product_meta": true,
    "request_product": true
  },
  "landing_page": {
    "launch_page": {
      "page_type": "home",
      "params": null,
      "query": null
    },
    "continue_as_guest": true,
    "login_btn_text": "Click here to sign-in",
    "show_domain_textbox": true,
    "show_register_btn": true
  },
  "registration_page": {
    "ask_store_address": false
  },
  "home_page": {
    "order_processing": true
  },
  "common": {
    "communication_optin_dialog": {
      "visibility": true
    },
    "deployment_store_selection": {
      "enabled": true,
      "type": "hard"
    },
    "listing_price": {
      "value": "min",
      "sort": "min"
    },
    "currency": {
      "value": [
        "INR"
      ],
      "type": "explicit",
      "default_currency": "INR"
    },
    "revenue_engine": {
      "enabled": false
    },
    "feedback": {
      "enabled": true
    },
    "compare_products": {
      "enabled": true
    }
  },
  "cart": {
    "gst_input": true,
    "staff_selection": true,
    "placing_for_customer": true,
    "google_map": true,
    "revenue_engine_coupon": false
  },
  "qr": {
    "application": true,
    "products": true,
    "collections": true
  },
  "pcr": {
    "staff_selection": true
  },
  "order": {
    "buy_again": true
  },
  "_id": "5e57643c986e4119c973df7d",
  "app": "000000000000000000000004",
  "created_at": "2020-02-27T06:39:56.088Z",
  "modified_at": "2021-03-09T15:40:29.188Z",
  "__v": 1
}
```
</details>









---


### updateBuildConfig
Update build config for next build



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").configuration.updateBuildConfig({  platformType : value,
 body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").configuration.updateBuildConfig({  platformType : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| platformType | string | yes | Current platform name |  
| body | [MobileAppConfigRequest](#MobileAppConfigRequest) | yes | Request body |


Update build config for next build

*Returned Response:*




[MobileAppConfiguration](#MobileAppConfiguration)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "is_active": true,
  "_id": "5ea9b318bc23a343ab6d442f",
  "app_name": "TestUniket",
  "landing_image": {
    "aspect_ratio": "57/51",
    "secure_url": "https://hdn-1.addsale.com/x0/company/1/applications/000000000000000000000004/mobile-build/pictures/free-landing/original/yKnXY1ATx-store-landing-image.png"
  },
  "splash_image": {
    "aspect_ratio": "1/1",
    "secure_url": "https://hdn-1.addsale.com/x0/company/1/applications/000000000000000000000004/mobile-build/pictures/free-splash/original/s6d7oYfY6-store-splash-image.png"
  },
  "application": "000000000000000000000004",
  "platform_type": "android",
  "created_at": "2020-04-29T17:02:16.976Z",
  "modified_at": "2021-02-23T17:10:26.872Z",
  "__v": 0,
  "package_name": "com.fynd.store.x000000000000000000000004"
}
```
</details>









---


### updateInventoryConfig
Update application configuration



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").configuration.updateInventoryConfig({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").configuration.updateInventoryConfig({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [ApplicationInventory](#ApplicationInventory) | yes | Request body |


Update application configuration for various features and data

*Returned Response:*




[ApplicationInventory](#ApplicationInventory)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "inventory": {
    "brand": {
      "criteria": "all",
      "brands": []
    },
    "store": {
      "criteria": "filter",
      "stores": [],
      "rules": [
        {
          "companies": [
            1,
            3,
            4
          ],
          "brands": []
        }
      ]
    },
    "category": {
      "criteria": "all",
      "categories": []
    },
    "price": {
      "min": 1,
      "max": 10000
    },
    "discount": {
      "min": 0,
      "max": 100
    },
    "out_of_stock": true,
    "franchise_enabled": true,
    "exclude_category": [],
    "image": [
      "standard",
      "substandard",
      "default"
    ],
    "company_store": []
  },
  "authentication": {
    "required": true,
    "provider": "fynd"
  },
  "article_assignment": {
    "rules": {
      "store_priority": {
        "enabled": false,
        "storetype_order": []
      }
    },
    "post_order_reassignment": true
  },
  "reward_points": {
    "credit": {
      "enabled": true
    },
    "debit": {
      "enabled": true,
      "auto_apply": false,
      "strategy_channel": "REWARDS"
    }
  },
  "cart": {
    "delivery_charges": {
      "enabled": true,
      "charges": [
        {
          "threshold": 1000,
          "charges": 49
        },
        {
          "threshold": 200000,
          "charges": 79
        }
      ]
    },
    "enabled": true,
    "max_cart_items": 0,
    "min_cart_value": 120,
    "bulk_coupons": true,
    "revenue_engine_coupon": false
  },
  "payment": {
    "callback_url": {
      "app": "",
      "web": ""
    },
    "methods": {
      "PL": {
        "enabled": true
      },
      "CARD": {
        "enabled": true
      },
      "NB": {
        "enabled": true
      },
      "WL": {
        "enabled": true
      },
      "PS": {
        "enabled": true
      },
      "UPI": {
        "enabled": true
      },
      "QR": {
        "enabled": true
      },
      "COD": {
        "enabled": true
      },
      "PP": {
        "enabled": true
      },
      "JP": {
        "enabled": false
      },
      "PAC": {
        "enabled": false
      },
      "FC": {
        "enabled": false
      },
      "JIOPP": {
        "enabled": false
      },
      "STRIPEPG": {
        "enabled": true
      },
      "JUSPAYPG": {
        "enabled": false
      },
      "PAYUBIZPG": {
        "enabled": true
      },
      "PAYUMONEYPG": {
        "enabled": true
      },
      "RUPIFIPG": {
        "enabled": false
      },
      "SIMPL": {
        "enabled": true
      }
    },
    "payment_selection_lock": {
      "enabled": false,
      "default_options": "",
      "payment_identifier": ""
    },
    "mode_of_payment": "UNIKET_B2B",
    "source": "UNIKET",
    "enabled": true,
    "cod_amount_limit": 100000,
    "cod_charges": 1500
  },
  "order": {
    "enabled": true,
    "force_reassignment": false
  },
  "logistics": {
    "logistics_by_seller": false,
    "serviceability_check": true,
    "same_day_delivery": true,
    "dp_assignment": true
  },
  "business": "retail",
  "comms_enabled": true,
  "communication": {
    "email": {
      "enabled": false
    },
    "sms": {
      "enabled": false
    },
    "voice": {
      "enabled": false
    }
  },
  "platforms": [
    "uniket_wholesale"
  ],
  "_id": "5e04c76b8dd8c003577fdd0a",
  "loyalty_points": {
    "enabled": true,
    "auto_apply": false
  },
  "app": "000000000000000000000004",
  "created_at": "2019-12-26T14:44:59.835Z",
  "modified_at": "2021-03-09T15:40:29.208Z",
  "__v": 3,
  "modified_by": "5e199eed98cfe16dc61385de"
}
```
</details>









---


### updateLevelIntegration
Update a store level opt-in for integration



```javascript
// Promise
const promise = platformClient.configuration.updateLevelIntegration({  id : value,
 level : value,
 body : value });

// Async/Await
const data = await platformClient.configuration.updateLevelIntegration({  id : value,
 level : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | Integration id |   
| level | string | yes | Integration level |  
| body | [UpdateIntegrationLevelRequest](#UpdateIntegrationLevelRequest) | yes | Request body |


Update a store level opt-in for integration

*Returned Response:*




[IntegrationLevel](#IntegrationLevel)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "opted": false,
  "permissions": [],
  "last_patch": [],
  "_id": "5ec377f2848a0073feacb31b",
  "integration": "5ec376ce848a005189acb312",
  "level": "store",
  "uid": 1,
  "meta": [],
  "token": "1RuGX0Fyp",
  "created_at": "2020-05-19T06:08:50.199Z",
  "modified_at": "2020-08-17T07:54:01.809Z",
  "__v": 14,
  "data": {
    "location_id": "09876",
    "ip_address": "1.2.3.4"
  }
}
```
</details>









---


### updateLevelUidIntegration
Update a store level opt-in for integration



```javascript
// Promise
const promise = platformClient.configuration.updateLevelUidIntegration({  id : value,
 level : value,
 uid : value,
 body : value });

// Async/Await
const data = await platformClient.configuration.updateLevelUidIntegration({  id : value,
 level : value,
 uid : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | Integration id |   
| level | string | yes | Integration level |   
| uid | number | yes | Integration level uid |  
| body | [IntegrationLevel](#IntegrationLevel) | yes | Request body |


Update a store level opt-in for integration

*Returned Response:*




[IntegrationLevel](#IntegrationLevel)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "opted": false,
  "permissions": [],
  "last_patch": [],
  "_id": "5ec377f2848a0073feacb31b",
  "integration": "5ec376ce848a005189acb312",
  "level": "store",
  "uid": 1,
  "meta": [],
  "token": "1RuGX0Fyp",
  "created_at": "2020-05-19T06:08:50.199Z",
  "modified_at": "2020-08-17T07:54:01.809Z",
  "__v": 14,
  "data": {
    "location_id": "09876",
    "ip_address": "1.2.3.4"
  }
}
```
</details>









---


### updateOrderingStoreConfig
Add/Update ordering store config



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").configuration.updateOrderingStoreConfig({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").configuration.updateOrderingStoreConfig({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [OrderingStoreConfig](#OrderingStoreConfig) | yes | Request body |


Add/Update ordering store config.

*Returned Response:*




[DeploymentMeta](#DeploymentMeta)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "deployment_meta": {
    "deployed_stores": [
      1,
      10
    ],
    "all_stores": false,
    "enabled": true,
    "type": "hard",
    "_id": "5e7e5e4d6b5f3b4b54c95f9c",
    "app": "000000000000000000000004",
    "__v": 6
  },
  "deployed_stores": [
    1,
    10
  ],
  "all_stores": false,
  "enabled": true,
  "type": "hard",
  "_id": "5e7e5e4d6b5f3b4b54c95f9c",
  "app": "000000000000000000000004",
  "__v": 6
}
```
</details>









---



### Schemas


#### [Android](#Android)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | api_key | string? |  yes  |  |
 | application_id | string? |  yes  |  |
 

---

#### [App](#App)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | auth | [ApplicationAuth](#ApplicationAuth)? |  yes  |  |
 | channel_type | string? |  yes  |  |
 | company_id | string? |  yes  | Current company id |
 | desc | string? |  yes  | Basic description of application |
 | name | string? |  yes  | User friendly name for application |
 

---

#### [AppCartConfig](#AppCartConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bulk_coupons | boolean? |  yes  |  |
 | delivery_charges | [DeliveryCharges](#DeliveryCharges)? |  yes  |  |
 | empty_cart | boolean? |  yes  | Enable/disable to allow adding cart items added before login to user's cart once user is logged in |
 | enabled | boolean? |  yes  |  |
 | max_cart_items | number? |  yes  |  |
 | min_cart_value | number? |  yes  |  |
 | pan_card | [PanCardConfig](#PanCardConfig)? |  yes  |  |
 | revenue_engine_coupon | boolean? |  yes  |  |
 

---

#### [AppCurrencyResponse](#AppCurrencyResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application | string? |  yes  |  |
 | default_currency | [DefaultCurrency](#DefaultCurrency)? |  yes  |  |
 | supported_currency | [[Currency](#Currency)]? |  yes  |  |
 

---

#### [AppDomain](#AppDomain)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string? |  yes  |  |
 

---

#### [AppFeature](#AppFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | __v | number? |  yes  |  |
 | _id | string? |  yes  |  |
 | app | string? |  yes  |  |
 | cart | [CartFeature](#CartFeature)? |  yes  |  |
 | common | [CommonFeature](#CommonFeature)? |  yes  |  |
 | created_at | string? |  yes  |  |
 | home_page | [HomePageFeature](#HomePageFeature)? |  yes  |  |
 | landing_page | [LandingPageFeature](#LandingPageFeature)? |  yes  |  |
 | order | [OrderFeature](#OrderFeature)? |  yes  |  |
 | pcr | [PcrFeature](#PcrFeature)? |  yes  |  |
 | product_detail | [ProductDetailFeature](#ProductDetailFeature)? |  yes  |  |
 | qr | [QrFeature](#QrFeature)? |  yes  |  |
 | registration_page | [RegistrationPageFeature](#RegistrationPageFeature)? |  yes  |  |
 | updated_at | string? |  yes  |  |
 

---

#### [AppFeatureRequest](#AppFeatureRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | feature | [AppFeature](#AppFeature)? |  yes  |  |
 

---

#### [AppFeatureResponse](#AppFeatureResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | feature | [AppFeature](#AppFeature)? |  yes  |  |
 

---

#### [AppInventory](#AppInventory)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | article_assignment | [InventoryArticleAssignment](#InventoryArticleAssignment)? |  yes  |  |
 | brand | [InventoryBrandRule](#InventoryBrandRule)? |  yes  |  |
 | franchise_enabled | boolean? |  yes  |  |
 | image | [string]? |  yes  |  |
 | only_verified_products | boolean? |  yes  |  |
 | out_of_stock | boolean? |  yes  |  |
 | payment | [InventoryPaymentConfig](#InventoryPaymentConfig)? |  yes  |  |
 | store | [InventoryStoreRule](#InventoryStoreRule)? |  yes  |  |
 

---

#### [AppInventoryCompanies](#AppInventoryCompanies)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | company_type | string? |  yes  |  |
 | name | string? |  yes  |  |
 | uid | number? |  yes  |  |
 

---

#### [AppInventoryConfig](#AppInventoryConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand | [InventoryBrand](#InventoryBrand)? |  yes  |  |
 | category | [InventoryCategory](#InventoryCategory)? |  yes  |  |
 | company_store | [any]? |  yes  |  |
 | discount | [InventoryDiscount](#InventoryDiscount)? |  yes  |  |
 | exclude_category | [any]? |  yes  |  |
 | franchise_enabled | boolean? |  yes  |  |
 | image | [string]? |  yes  |  |
 | only_verified_products | boolean? |  yes  |  |
 | out_of_stock | boolean? |  yes  |  |
 | price | [InventoryPrice](#InventoryPrice)? |  yes  |  |
 | store | [InventoryStore](#InventoryStore)? |  yes  |  |
 

---

#### [AppInventoryPartialUpdate](#AppInventoryPartialUpdate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cart | [AppCartConfig](#AppCartConfig)? |  yes  |  |
 | comms_enabled | boolean? |  yes  |  |
 | communication | [CommunicationConfig](#CommunicationConfig)? |  yes  |  |
 | loyalty_points | [LoyaltyPointsConfig](#LoyaltyPointsConfig)? |  yes  |  |
 | payment | [AppPaymentConfig](#AppPaymentConfig)? |  yes  |  |
 | reward_points | [RewardPointsConfig](#RewardPointsConfig)? |  yes  |  |
 

---

#### [AppInventoryStores](#AppInventoryStores)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | company_id | number? |  yes  |  |
 | display_name | string? |  yes  |  |
 | modified_on | string? |  yes  |  |
 | name | string? |  yes  |  |
 | store_code | string? |  yes  |  |
 | store_type | string? |  yes  |  |
 | uid | number? |  yes  |  |
 

---

#### [Application](#Application)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | __v | number? |  yes  |  |
 | _id | string? |  yes  |  |
 | app_type | string? |  yes  |  |
 | auth | [ApplicationAuth](#ApplicationAuth)? |  yes  |  |
 | banner | [SecureUrl](#SecureUrl)? |  yes  |  |
 | cache_ttl | number? |  yes  |  |
 | channel_type | string? |  yes  |  |
 | company_id | number? |  yes  |  |
 | cors | [ApplicationCors](#ApplicationCors)? |  yes  |  |
 | created_at | string? |  yes  |  |
 | description | string? |  yes  |  |
 | domain | [Domain](#Domain)? |  yes  |  |
 | domains | [[Domain](#Domain)]? |  yes  |  |
 | favicon | [SecureUrl](#SecureUrl)? |  yes  |  |
 | is_active | boolean? |  yes  |  |
 | is_internal | boolean? |  yes  |  |
 | logo | [SecureUrl](#SecureUrl)? |  yes  |  |
 | meta | [[ApplicationMeta](#ApplicationMeta)]? |  yes  |  |
 | mobile_logo | [SecureUrl](#SecureUrl)? |  yes  |  |
 | name | string? |  yes  |  |
 | owner | string? |  yes  |  |
 | redirections | [[ApplicationRedirections](#ApplicationRedirections)]? |  yes  |  |
 | slug | string? |  yes  |  |
 | token | string? |  yes  |  |
 | updated_at | string? |  yes  |  |
 | website | [ApplicationWebsite](#ApplicationWebsite)? |  yes  |  |
 

---

#### [ApplicationAuth](#ApplicationAuth)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean? |  yes  |  |
 

---

#### [ApplicationCors](#ApplicationCors)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | domains | [string]? |  yes  |  |
 

---

#### [ApplicationDetail](#ApplicationDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | banner | [SecureUrl](#SecureUrl)? |  yes  |  |
 | description | string? |  yes  |  |
 | domain | [Domain](#Domain)? |  yes  |  |
 | domains | [[Domain](#Domain)]? |  yes  |  |
 | favicon | [SecureUrl](#SecureUrl)? |  yes  |  |
 | logo | [SecureUrl](#SecureUrl)? |  yes  |  |
 | mobile_logo | [SecureUrl](#SecureUrl)? |  yes  |  |
 | name | string? |  yes  |  |
 | slug | string? |  yes  |  |
 

---

#### [ApplicationInformation](#ApplicationInformation)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | __v | number? |  yes  |  |
 | _id | string? |  yes  |  |
 | address | [InformationAddress](#InformationAddress)? |  yes  |  |
 | application | string? |  yes  |  |
 | business_highlights | [BusinessHighlights](#BusinessHighlights)? |  yes  |  |
 | copyright_text | string? |  yes  |  |
 | created_at | string? |  yes  |  |
 | links | [Links](#Links)? |  yes  |  |
 | social_links | [SocialLinks](#SocialLinks)? |  yes  |  |
 | support | [InformationSupport](#InformationSupport)? |  yes  |  |
 | updated_at | string? |  yes  |  |
 

---

#### [ApplicationInventory](#ApplicationInventory)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | app | string? |  yes  |  |
 | article_assignment | [ArticleAssignmentConfig](#ArticleAssignmentConfig)? |  yes  |  |
 | authentication | [AuthenticationConfig](#AuthenticationConfig)? |  yes  |  |
 | business | string? |  yes  |  |
 | cart | [AppCartConfig](#AppCartConfig)? |  yes  |  |
 | comms_enabled | boolean? |  yes  |  |
 | communication | [CommunicationConfig](#CommunicationConfig)? |  yes  |  |
 | created_at | string? |  yes  |  |
 | inventory | [AppInventoryConfig](#AppInventoryConfig)? |  yes  |  |
 | logistics | [AppLogisticsConfig](#AppLogisticsConfig)? |  yes  |  |
 | loyalty_points | [LoyaltyPointsConfig](#LoyaltyPointsConfig)? |  yes  |  |
 | modified_by | string? |  yes  |  |
 | order | [AppOrderConfig](#AppOrderConfig)? |  yes  |  |
 | payment | [AppPaymentConfig](#AppPaymentConfig)? |  yes  |  |
 | platforms | [string]? |  yes  |  |
 | reward_points | [RewardPointsConfig](#RewardPointsConfig)? |  yes  |  |
 | updated_at | string? |  yes  |  |
 

---

#### [ApplicationMeta](#ApplicationMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string? |  yes  |  |
 | value | string? |  yes  |  |
 

---

#### [ApplicationRedirections](#ApplicationRedirections)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | redirect_from | string? |  yes  |  |
 | redirect_to | string? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [ApplicationsResponse](#ApplicationsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[Application](#Application)]? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 

---

#### [ApplicationWebsite](#ApplicationWebsite)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | basepath | string? |  yes  |  |
 | enabled | boolean? |  yes  |  |
 

---

#### [AppLogisticsConfig](#AppLogisticsConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | dp_assignment | boolean? |  yes  |  |
 | logistics_by_seller | boolean? |  yes  |  |
 | same_day_delivery | boolean? |  yes  |  |
 | serviceability_check | boolean? |  yes  |  |
 

---

#### [AppOrderConfig](#AppOrderConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean? |  yes  |  |
 | force_reassignment | boolean? |  yes  |  |
 | message | string? |  yes  |  |
 

---

#### [AppPaymentConfig](#AppPaymentConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | callback_url | [CallbackUrl](#CallbackUrl)? |  yes  |  |
 | cod_amount_limit | number? |  yes  |  |
 | cod_charges | number? |  yes  |  |
 | enabled | boolean? |  yes  |  |
 | methods | [Methods](#Methods)? |  yes  |  |
 | mode_of_payment | string? |  yes  |  |
 | payment_selection_lock | [PaymentSelectionLock](#PaymentSelectionLock)? |  yes  |  |
 | source | string? |  yes  |  |
 

---

#### [AppStoreRules](#AppStoreRules)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brands | [any]? |  yes  |  |
 | companies | [number]? |  yes  |  |
 

---

#### [AppSupportedCurrency](#AppSupportedCurrency)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | application | string? |  yes  |  |
 | created_at | string? |  yes  |  |
 | default_currency | [DefaultCurrency](#DefaultCurrency)? |  yes  |  |
 | supported_currency | [string]? |  yes  |  |
 | updated_at | string? |  yes  |  |
 

---

#### [ArticleAssignmentConfig](#ArticleAssignmentConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | post_order_reassignment | boolean? |  yes  |  |
 | rules | [ArticleAssignmentRules](#ArticleAssignmentRules)? |  yes  |  |
 

---

#### [ArticleAssignmentRule](#ArticleAssignmentRule)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | store_priority | [StorePriorityRule](#StorePriorityRule)? |  yes  |  |
 

---

#### [ArticleAssignmentRules](#ArticleAssignmentRules)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | store_priority | [StorePriority](#StorePriority)? |  yes  |  |
 

---

#### [AuthenticationConfig](#AuthenticationConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | provider | string? |  yes  |  |
 | required | boolean? |  yes  |  |
 

---

#### [BlogLink](#BlogLink)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | icon | string? |  yes  |  |
 | link | string? |  yes  |  |
 | title | string? |  yes  |  |
 

---

#### [BrandCompanyInfo](#BrandCompanyInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | company_id | number? |  yes  |  |
 | company_name | string? |  yes  |  |
 

---

#### [BrandsByCompanyResponse](#BrandsByCompanyResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brands | [CompanyBrandInfo](#CompanyBrandInfo)? |  yes  |  |
 

---

#### [BrandStoreInfo](#BrandStoreInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | company | [OptedCompany](#OptedCompany)? |  yes  |  |
 | store_address | [OptedStoreAddress](#OptedStoreAddress)? |  yes  |  |
 | store_code | string? |  yes  |  |
 | store_id | number? |  yes  |  |
 | store_name | string? |  yes  |  |
 | store_type | string? |  yes  |  |
 

---

#### [BuildVersion](#BuildVersion)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | __v | number? |  yes  |  |
 | _id | string? |  yes  |  |
 | application | string? |  yes  |  |
 | build_status | string? |  yes  |  |
 | created_at | string? |  yes  |  |
 | platform_type | string? |  yes  |  |
 | updated_at | string? |  yes  |  |
 | version_code | number? |  yes  |  |
 | version_name | string? |  yes  |  |
 

---

#### [BuildVersionHistory](#BuildVersionHistory)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | latest_available_version_name | string? |  yes  |  |
 | versions | [BuildVersion](#BuildVersion)? |  yes  |  |
 

---

#### [BusinessHighlights](#BusinessHighlights)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | icon | string? |  yes  |  |
 | sub_title | string? |  yes  |  |
 | title | string? |  yes  |  |
 

---

#### [CallbackUrl](#CallbackUrl)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | app | string? |  yes  |  |
 | web | string? |  yes  |  |
 

---

#### [CartFeature](#CartFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | google_map | boolean? |  yes  |  |
 | gst_input | boolean? |  yes  |  |
 | placing_for_customer | boolean? |  yes  |  |
 | revenue_engine_coupon | boolean? |  yes  |  |
 | staff_selection | boolean? |  yes  |  |
 

---

#### [Charges](#Charges)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | charges | number? |  yes  |  |
 | threshold | number? |  yes  |  |
 

---

#### [CommonFeature](#CommonFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | communication_optin_dialog | [CommunicationOptinDialogFeature](#CommunicationOptinDialogFeature)? |  yes  |  |
 | compare_products | [CompareProductsFeature](#CompareProductsFeature)? |  yes  |  |
 | currency | [CurrencyFeature](#CurrencyFeature)? |  yes  |  |
 | deployment_store_selection | [DeploymentStoreSelectionFeature](#DeploymentStoreSelectionFeature)? |  yes  |  |
 | feedback | [FeedbackFeature](#FeedbackFeature)? |  yes  |  |
 | listing_price | [ListingPriceFeature](#ListingPriceFeature)? |  yes  |  |
 | revenue_engine | [RevenueEngineFeature](#RevenueEngineFeature)? |  yes  |  |
 | reward_points | [RewardPointsConfig](#RewardPointsConfig)? |  yes  |  |
 

---

#### [CommsConfig](#CommsConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean? |  yes  | Check current communication channel is enabled |
 

---

#### [CommunicationConfig](#CommunicationConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | [CommsConfig](#CommsConfig)? |  yes  |  |
 | sms | [CommsConfig](#CommsConfig)? |  yes  |  |
 | voice | [CommsConfig](#CommsConfig)? |  yes  |  |
 

---

#### [CommunicationOptinDialogFeature](#CommunicationOptinDialogFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | visibility | boolean? |  yes  |  |
 

---

#### [CompaniesResponse](#CompaniesResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [AppInventoryCompanies](#AppInventoryCompanies)? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 

---

#### [CompanyAboutAddress](#CompanyAboutAddress)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address1 | string? |  yes  |  |
 | address2 | string? |  yes  |  |
 | address_type | string? |  yes  |  |
 | city | string? |  yes  |  |
 | country | string? |  yes  |  |
 | pincode | number? |  yes  |  |
 | state | string? |  yes  |  |
 

---

#### [CompanyBrandInfo](#CompanyBrandInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand_banner_portrait_url | string? |  yes  |  |
 | brand_banner_url | string? |  yes  |  |
 | brand_logo_url | string? |  yes  |  |
 | name | string? |  yes  |  |
 | value | number? |  yes  |  |
 

---

#### [CompanyByBrandsRequest](#CompanyByBrandsRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brands | number |  no  | Brand uids |
 | search_text | string? |  yes  | Search company by name |
 

---

#### [CompanyByBrandsResponse](#CompanyByBrandsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[BrandCompanyInfo](#BrandCompanyInfo)]? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 

---

#### [CompanyValidator](#CompanyValidator)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | browser_script | string? |  yes  |  |
 | json_schema | [[JsonSchema](#JsonSchema)]? |  yes  |  |
 

---

#### [CompareProductsFeature](#CompareProductsFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean? |  yes  |  |
 

---

#### [CreateApplicationRequest](#CreateApplicationRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | app | [App](#App)? |  yes  |  |
 | configuration | [AppInventory](#AppInventory)? |  yes  |  |
 | domain | [AppDomain](#AppDomain)? |  yes  |  |
 

---

#### [CreateAppResponse](#CreateAppResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | app | [Application](#Application)? |  yes  |  |
 | configuration | [ApplicationInventory](#ApplicationInventory)? |  yes  |  |
 

---

#### [Credentials](#Credentials)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | android | [Android](#Android)? |  yes  |  |
 | api_key | string? |  yes  |  |
 | application_id | string? |  yes  |  |
 | gcm_sender_id | string? |  yes  |  |
 | ios | [Ios](#Ios)? |  yes  |  |
 | project_id | string? |  yes  |  |
 

---

#### [Credit](#Credit)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean? |  yes  |  |
 

---

#### [CurrenciesResponse](#CurrenciesResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[Currency](#Currency)]? |  yes  |  |
 

---

#### [Currency](#Currency)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | code | string? |  yes  |  |
 | created_at | string? |  yes  |  |
 | decimal_digits | number? |  yes  |  |
 | is_active | boolean? |  yes  |  |
 | name | string? |  yes  |  |
 | symbol | string? |  yes  |  |
 | updated_at | string? |  yes  |  |
 

---

#### [CurrencyConfig](#CurrencyConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | code | string? |  yes  |  |
 | created_at | string? |  yes  |  |
 | decimal_digits | number? |  yes  |  |
 | is_active | boolean? |  yes  |  |
 | name | string? |  yes  |  |
 | symbol | string? |  yes  |  |
 | updated_at | string? |  yes  |  |
 

---

#### [CurrencyFeature](#CurrencyFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | default_currency | string? |  yes  |  |
 | type | string? |  yes  |  |
 | value | [string]? |  yes  |  |
 

---

#### [Debit](#Debit)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | auto_apply | boolean? |  yes  |  |
 | enabled | boolean? |  yes  |  |
 | strategy_channel | string? |  yes  |  |
 

---

#### [DefaultCurrency](#DefaultCurrency)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string? |  yes  |  |
 | ref | string? |  yes  |  |
 

---

#### [DeliveryCharges](#DeliveryCharges)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | charges | [Charges](#Charges)? |  yes  |  |
 | enabled | boolean? |  yes  |  |
 

---

#### [DeploymentMeta](#DeploymentMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | all_stores | boolean? |  yes  |  |
 | app | string? |  yes  |  |
 | deployed_stores | [number]? |  yes  |  |
 | enabled | boolean? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [DeploymentStoreSelectionFeature](#DeploymentStoreSelectionFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [Domain](#Domain)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | is_predefined | boolean? |  yes  | Domain is hosting domain or not. |
 | is_primary | boolean? |  yes  |  |
 | is_shortlink | boolean? |  yes  |  |
 | name | string? |  yes  |  |
 | verified | boolean? |  yes  |  |
 

---

#### [DomainAdd](#DomainAdd)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string? |  yes  | Full domain name |
 

---

#### [DomainAddRequest](#DomainAddRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | domain | [DomainAdd](#DomainAdd)? |  yes  |  |
 

---

#### [DomainsResponse](#DomainsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | domains | [[Domain](#Domain)]? |  yes  |  |
 

---

#### [DomainStatus](#DomainStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display | string? |  yes  |  |
 | status | boolean? |  yes  |  |
 

---

#### [DomainStatusRequest](#DomainStatusRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | domain_url | string? |  yes  | Domain url |
 

---

#### [DomainStatusResponse](#DomainStatusResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | connected | boolean? |  yes  |  |
 | status | [[DomainStatus](#DomainStatus)]? |  yes  |  |
 

---

#### [DomainSuggestion](#DomainSuggestion)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | currency | string? |  yes  | Custom domain price currency. Not present for fynd domain |
 | is_available | boolean |  no  |  |
 | name | string |  no  |  |
 | price | number? |  yes  | Price for purchasing a custom domain. Not present for fynd domain |
 | unsupported | boolean? |  yes  | Whether TLD domain is supported or not |
 

---

#### [DomainSuggestionsRequest](#DomainSuggestionsRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | custom | boolean? |  yes  | Get suggestion for custom domains or fynd domains |
 | domain_url | string? |  yes  | Domain url |
 

---

#### [DomainSuggestionsResponse](#DomainSuggestionsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | domains | [[DomainSuggestion](#DomainSuggestion)]? |  yes  | Domain url |
 

---

#### [FacebookLink](#FacebookLink)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | icon | string? |  yes  |  |
 | link | string? |  yes  |  |
 | title | string? |  yes  |  |
 

---

#### [FeedbackFeature](#FeedbackFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean? |  yes  |  |
 

---

#### [FilterOrderingStoreRequest](#FilterOrderingStoreRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | all_stores | boolean? |  yes  |  |
 | deployed_stores | [number]? |  yes  |  |
 | only_deployed | boolean? |  yes  |  |
 | q | string? |  yes  |  |
 

---

#### [Firebase](#Firebase)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | credentials | [Credentials](#Credentials)? |  yes  |  |
 | enabled | boolean? |  yes  |  |
 

---

#### [Freshchat](#Freshchat)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | credentials | [FreshchatCredentials](#FreshchatCredentials)? |  yes  |  |
 | enabled | boolean? |  yes  |  |
 

---

#### [FreshchatCredentials](#FreshchatCredentials)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | app_id | string? |  yes  |  |
 | app_key | string? |  yes  |  |
 | web_token | string? |  yes  |  |
 

---

#### [FyndRewards](#FyndRewards)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | credentials | [FyndRewardsCredentials](#FyndRewardsCredentials)? |  yes  |  |
 

---

#### [FyndRewardsCredentials](#FyndRewardsCredentials)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | public_key | string? |  yes  |  |
 

---

#### [GetIntegrationsOptInsResponse](#GetIntegrationsOptInsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[IntegrationOptIn](#IntegrationOptIn)]? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 

---

#### [GoogleMap](#GoogleMap)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | credentials | [GoogleMapCredentials](#GoogleMapCredentials)? |  yes  |  |
 

---

#### [GoogleMapCredentials](#GoogleMapCredentials)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | api_key | string? |  yes  |  |
 

---

#### [GooglePlusLink](#GooglePlusLink)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | icon | string? |  yes  |  |
 | link | string? |  yes  |  |
 | title | string? |  yes  |  |
 

---

#### [Gtm](#Gtm)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | credentials | [GtmCredentials](#GtmCredentials)? |  yes  |  |
 | enabled | boolean? |  yes  |  |
 

---

#### [GtmCredentials](#GtmCredentials)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | api_key | string? |  yes  |  |
 

---

#### [HomePageFeature](#HomePageFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | order_processing | boolean? |  yes  |  |
 

---

#### [InformationAddress](#InformationAddress)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address_line | [string]? |  yes  |  |
 | city | string? |  yes  |  |
 | country | string? |  yes  |  |
 | loc | string? |  yes  |  |
 | phone | [[InformationPhone](#InformationPhone)]? |  yes  |  |
 | pincode | number? |  yes  |  |
 

---

#### [InformationPhone](#InformationPhone)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string? |  yes  |  |
 | number | string? |  yes  |  |
 

---

#### [InformationSupport](#InformationSupport)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | [string]? |  yes  |  |
 | phone | [string]? |  yes  |  |
 | timing | string? |  yes  |  |
 

---

#### [InstagramLink](#InstagramLink)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | icon | string? |  yes  |  |
 | link | string? |  yes  |  |
 | title | string? |  yes  |  |
 

---

#### [Integration](#Integration)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | __v | number? |  yes  |  |
 | _id | string? |  yes  |  |
 | companies | [string]? |  yes  |  |
 | constants | string? |  yes  |  |
 | created_at | string? |  yes  |  |
 | description | string? |  yes  |  |
 | description_html | string? |  yes  |  |
 | icon | string? |  yes  |  |
 | meta | [[IntegrationMeta](#IntegrationMeta)]? |  yes  |  |
 | name | string? |  yes  |  |
 | owner | string? |  yes  |  |
 | secret | string? |  yes  |  |
 | support | [string]? |  yes  |  |
 | token | string? |  yes  |  |
 | updated_at | string? |  yes  |  |
 | validators | [Validators](#Validators)? |  yes  |  |
 

---

#### [IntegrationConfigResponse](#IntegrationConfigResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[IntegrationLevel](#IntegrationLevel)]? |  yes  |  |
 

---

#### [IntegrationLevel](#IntegrationLevel)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | __v | number? |  yes  |  |
 | _id | string? |  yes  |  |
 | created_at | string? |  yes  |  |
 | data | string? |  yes  |  |
 | integration | string? |  yes  |  |
 | last_patch | [[LastPatch](#LastPatch)]? |  yes  |  |
 | level | string? |  yes  |  |
 | meta | [[IntegrationMeta](#IntegrationMeta)]? |  yes  |  |
 | opted | boolean? |  yes  |  |
 | permissions | [string]? |  yes  |  |
 | token | string? |  yes  |  |
 | uid | number? |  yes  |  |
 | updated_at | string? |  yes  |  |
 

---

#### [IntegrationMeta](#IntegrationMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | is_public | boolean? |  yes  |  |
 | name | string? |  yes  |  |
 | value | string? |  yes  |  |
 

---

#### [IntegrationOptIn](#IntegrationOptIn)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | __v | number? |  yes  |  |
 | _id | string? |  yes  |  |
 | companies | [string]? |  yes  |  |
 | constants | string? |  yes  |  |
 | created_at | string? |  yes  |  |
 | description | string? |  yes  |  |
 | description_html | string? |  yes  |  |
 | icon | string? |  yes  |  |
 | meta | [[IntegrationMeta](#IntegrationMeta)]? |  yes  |  |
 | name | string? |  yes  |  |
 | owner | string? |  yes  |  |
 | secret | string? |  yes  |  |
 | support | [string]? |  yes  |  |
 | token | string? |  yes  |  |
 | updated_at | string? |  yes  |  |
 | validators | [Validators](#Validators)? |  yes  |  |
 

---

#### [InvalidPayloadRequest](#InvalidPayloadRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 

---

#### [InventoryArticleAssignment](#InventoryArticleAssignment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | post_order_reassignment | boolean? |  yes  |  |
 | rules | [ArticleAssignmentRule](#ArticleAssignmentRule)? |  yes  |  |
 

---

#### [InventoryBrand](#InventoryBrand)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brands | [any]? |  yes  |  |
 | criteria | string? |  yes  |  |
 

---

#### [InventoryBrandRule](#InventoryBrandRule)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brands | [number]? |  yes  | Brand uids in case of explicit criteria |
 | criteria | string? |  yes  | Whether enable all or explicitly few brands as inventory |
 

---

#### [InventoryCategory](#InventoryCategory)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | categories | [any]? |  yes  |  |
 | criteria | string? |  yes  |  |
 

---

#### [InventoryDiscount](#InventoryDiscount)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | max | number? |  yes  |  |
 | min | number? |  yes  |  |
 

---

#### [InventoryPaymentConfig](#InventoryPaymentConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | mode_of_payment | string? |  yes  |  |
 | source | string? |  yes  |  |
 

---

#### [InventoryPrice](#InventoryPrice)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | max | number? |  yes  |  |
 | min | number? |  yes  |  |
 

---

#### [InventoryStore](#InventoryStore)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | criteria | string? |  yes  |  |
 | rules | [AppStoreRules](#AppStoreRules)? |  yes  |  |
 | stores | [any]? |  yes  |  |
 

---

#### [InventoryStoreRule](#InventoryStoreRule)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | criteria | string? |  yes  | Whether enable all or explicitly few stores or use filter of brands and company as inventory stores |
 | rules | [[StoreCriteriaRule](#StoreCriteriaRule)]? |  yes  | List of rules with company and brands uids. Used when critera is `filter` |
 | stores | [number]? |  yes  | List of store uids. Used when critera is `explicit` |
 

---

#### [InventoryValidator](#InventoryValidator)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | browser_script | string? |  yes  |  |
 | json_schema | [[JsonSchema](#JsonSchema)]? |  yes  |  |
 

---

#### [Ios](#Ios)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | api_key | string? |  yes  |  |
 | application_id | string? |  yes  |  |
 

---

#### [JsonSchema](#JsonSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display | string? |  yes  |  |
 | key | string? |  yes  |  |
 | tooltip | string? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [LandingImage](#LandingImage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | aspect_ratio | string? |  yes  |  |
 | secure_url | string? |  yes  |  |
 

---

#### [LandingPageFeature](#LandingPageFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | continue_as_guest | boolean? |  yes  |  |
 | launch_page | [LaunchPage](#LaunchPage)? |  yes  |  |
 | login_btn_text | string? |  yes  |  |
 | show_domain_textbox | boolean? |  yes  |  |
 | show_register_btn | boolean? |  yes  |  |
 

---

#### [LastPatch](#LastPatch)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | op | string? |  yes  |  |
 | path | string? |  yes  |  |
 | value | string? |  yes  |  |
 

---

#### [LaunchPage](#LaunchPage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | page_type | string? |  yes  |  |
 | params | string? |  yes  |  |
 | query | string? |  yes  |  |
 

---

#### [LinkedInLink](#LinkedInLink)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | icon | string? |  yes  |  |
 | link | string? |  yes  |  |
 | title | string? |  yes  |  |
 

---

#### [Links](#Links)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | link | string? |  yes  |  |
 | title | string? |  yes  |  |
 

---

#### [ListingPriceFeature](#ListingPriceFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | value | string? |  yes  |  |
 

---

#### [LoyaltyPointsConfig](#LoyaltyPointsConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | auto_apply | boolean? |  yes  |  |
 | enabled | boolean? |  yes  |  |
 

---

#### [Methods](#Methods)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | card | [PaymentModeConfig](#PaymentModeConfig)? |  yes  |  |
 | cod | [PaymentModeConfig](#PaymentModeConfig)? |  yes  |  |
 | fc | [PaymentModeConfig](#PaymentModeConfig)? |  yes  |  |
 | jiopp | [PaymentModeConfig](#PaymentModeConfig)? |  yes  |  |
 | jp | [PaymentModeConfig](#PaymentModeConfig)? |  yes  |  |
 | juspaypg | [PaymentModeConfig](#PaymentModeConfig)? |  yes  |  |
 | nb | [PaymentModeConfig](#PaymentModeConfig)? |  yes  |  |
 | pac | [PaymentModeConfig](#PaymentModeConfig)? |  yes  |  |
 | payubizpg | [PaymentModeConfig](#PaymentModeConfig)? |  yes  |  |
 | payumoneypg | [PaymentModeConfig](#PaymentModeConfig)? |  yes  |  |
 | pl | [PaymentModeConfig](#PaymentModeConfig)? |  yes  |  |
 | pp | [PaymentModeConfig](#PaymentModeConfig)? |  yes  |  |
 | ps | [PaymentModeConfig](#PaymentModeConfig)? |  yes  |  |
 | qr | [PaymentModeConfig](#PaymentModeConfig)? |  yes  |  |
 | rupifipg | [PaymentModeConfig](#PaymentModeConfig)? |  yes  |  |
 | simpl | [PaymentModeConfig](#PaymentModeConfig)? |  yes  |  |
 | stripepg | [PaymentModeConfig](#PaymentModeConfig)? |  yes  |  |
 | upi | [PaymentModeConfig](#PaymentModeConfig)? |  yes  |  |
 | wl | [PaymentModeConfig](#PaymentModeConfig)? |  yes  |  |
 

---

#### [MobileAppConfigRequest](#MobileAppConfigRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | app_name | string? |  yes  |  |
 | is_active | boolean? |  yes  |  |
 | landing_image | [LandingImage](#LandingImage)? |  yes  |  |
 | splash_image | [SplashImage](#SplashImage)? |  yes  |  |
 

---

#### [MobileAppConfiguration](#MobileAppConfiguration)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | __v | number? |  yes  |  |
 | _id | string? |  yes  |  |
 | app_name | string? |  yes  |  |
 | application | string? |  yes  |  |
 | created_at | string? |  yes  |  |
 | is_active | boolean? |  yes  |  |
 | landing_image | [LandingImage](#LandingImage)? |  yes  |  |
 | package_name | string? |  yes  |  |
 | platform_type | string? |  yes  |  |
 | splash_image | [SplashImage](#SplashImage)? |  yes  |  |
 | updated_at | string? |  yes  |  |
 

---

#### [Moengage](#Moengage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | credentials | [MoengageCredentials](#MoengageCredentials)? |  yes  |  |
 | enabled | boolean? |  yes  |  |
 

---

#### [MoengageCredentials](#MoengageCredentials)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | app_id | string? |  yes  |  |
 

---

#### [NotFound](#NotFound)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 

---

#### [OptedApplicationResponse](#OptedApplicationResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | company | [OptedCompany](#OptedCompany)? |  yes  |  |
 | description | string? |  yes  |  |
 | domain | string? |  yes  |  |
 | name | string? |  yes  |  |
 | opt_out_inventory | [OptOutInventory](#OptOutInventory)? |  yes  |  |
 | opted_inventory | [OptedInventory](#OptedInventory)? |  yes  |  |
 

---

#### [OptedCompany](#OptedCompany)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string? |  yes  |  |
 | uid | number? |  yes  |  |
 

---

#### [OptedInventory](#OptedInventory)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | any? |  yes  |  |
 | opt_type | [OptType](#OptType)? |  yes  |  |
 

---

#### [OptedStore](#OptedStore)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | address | [OptedStoreAddress](#OptedStoreAddress)? |  yes  |  |
 | company_id | number? |  yes  |  |
 | display_name | string? |  yes  |  |
 | modified_on | string? |  yes  |  |
 | name | string? |  yes  |  |
 | store_code | string? |  yes  |  |
 | store_type | string? |  yes  |  |
 | uid | number? |  yes  |  |
 

---

#### [OptedStoreAddress](#OptedStoreAddress)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address1 | string? |  yes  |  |
 | address2 | string? |  yes  |  |
 | city | string? |  yes  |  |
 | country | string? |  yes  |  |
 | lat_long | [StoreLatLong](#StoreLatLong)? |  yes  |  |
 | pincode | number? |  yes  |  |
 | state | string? |  yes  |  |
 

---

#### [OptedStoreIntegration](#OptedStoreIntegration)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | other_entity | [OtherEntity](#OtherEntity)? |  yes  |  |
 | other_integration | [IntegrationOptIn](#IntegrationOptIn)? |  yes  |  |
 | other_opted | boolean? |  yes  |  |
 

---

#### [OptOutInventory](#OptOutInventory)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | company | [number] |  no  |  |
 | store | [number] |  no  |  |
 

---

#### [OptType](#OptType)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display | string? |  yes  |  |
 | key | string? |  yes  |  |
 

---

#### [OrderFeature](#OrderFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | buy_again | boolean? |  yes  |  |
 

---

#### [OrderingStore](#OrderingStore)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | address | [OptedStoreAddress](#OptedStoreAddress)? |  yes  |  |
 | code | string? |  yes  |  |
 | display_name | string? |  yes  |  |
 | name | string? |  yes  |  |
 | pincode | number? |  yes  |  |
 | store_code | string? |  yes  |  |
 | store_type | string? |  yes  |  |
 | uid | number? |  yes  |  |
 

---

#### [OrderingStoreConfig](#OrderingStoreConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | deployment_meta | [DeploymentMeta](#DeploymentMeta)? |  yes  |  |
 

---

#### [OrderingStores](#OrderingStores)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | __v | number? |  yes  |  |
 | _id | string? |  yes  |  |
 | all_stores | boolean? |  yes  |  |
 | app | string? |  yes  |  |
 | deployed_stores | [number]? |  yes  |  |
 | enabled | boolean? |  yes  |  |
 | items | [[OrderingStore](#OrderingStore)]? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [OrderingStoresResponse](#OrderingStoresResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[OrderingStore](#OrderingStore)]? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 

---

#### [OrderValidator](#OrderValidator)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | browser_script | string? |  yes  |  |
 | json_schema | [[JsonSchema](#JsonSchema)]? |  yes  |  |
 

---

#### [OtherEntity](#OtherEntity)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | __v | number? |  yes  |  |
 | _id | string? |  yes  |  |
 | created_at | string? |  yes  |  |
 | data | [OtherEntityData](#OtherEntityData)? |  yes  |  |
 | integration | string? |  yes  |  |
 | last_patch | [[LastPatch](#LastPatch)]? |  yes  |  |
 | level | string? |  yes  |  |
 | meta | [string]? |  yes  |  |
 | opted | boolean? |  yes  |  |
 | permissions | [string]? |  yes  |  |
 | token | string? |  yes  |  |
 | uid | number? |  yes  |  |
 | updated_at | string? |  yes  |  |
 

---

#### [OtherEntityData](#OtherEntityData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | article_identifier | string? |  yes  |  |
 

---

#### [OtherSellerApplication](#OtherSellerApplication)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | company | [OtherSellerCompany](#OtherSellerCompany)? |  yes  |  |
 | description | string? |  yes  |  |
 | domain | string? |  yes  |  |
 | name | string? |  yes  |  |
 | opt_type | string? |  yes  |  |
 

---

#### [OtherSellerApplications](#OtherSellerApplications)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[OtherSellerApplication](#OtherSellerApplication)]? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 

---

#### [OtherSellerCompany](#OtherSellerCompany)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string? |  yes  |  |
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

#### [PanCardConfig](#PanCardConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cod_threshold_amount | number? |  yes  | On which COD order amount pan card number is expected from customer for order |
 | enabled | boolean? |  yes  | If pan card accepting is enabled on cart |
 | online_threshold_amount | number? |  yes  | On which online payment order amount pan card number is expected from customer for order |
 

---

#### [PaymentModeConfig](#PaymentModeConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean? |  yes  |  |
 

---

#### [PaymentSelectionLock](#PaymentSelectionLock)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | default_options | string? |  yes  |  |
 | enabled | boolean? |  yes  |  |
 | payment_identifier | string? |  yes  |  |
 

---

#### [PcrFeature](#PcrFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | staff_selection | boolean? |  yes  |  |
 

---

#### [PinterestLink](#PinterestLink)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | icon | string? |  yes  |  |
 | link | string? |  yes  |  |
 | title | string? |  yes  |  |
 

---

#### [ProductDetailFeature](#ProductDetailFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | request_product | boolean? |  yes  |  |
 | seller_selection | boolean? |  yes  |  |
 | similar | [string]? |  yes  |  |
 | update_product_meta | boolean? |  yes  |  |
 

---

#### [QrFeature](#QrFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application | boolean? |  yes  |  |
 | collections | boolean? |  yes  |  |
 | products | boolean? |  yes  |  |
 

---

#### [RegistrationPageFeature](#RegistrationPageFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | ask_store_address | boolean? |  yes  |  |
 

---

#### [RevenueEngineFeature](#RevenueEngineFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean? |  yes  |  |
 

---

#### [RewardPointsConfig](#RewardPointsConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | credit | [Credit](#Credit)? |  yes  |  |
 | debit | [Debit](#Debit)? |  yes  |  |
 

---

#### [Safetynet](#Safetynet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | credentials | [SafetynetCredentials](#SafetynetCredentials)? |  yes  |  |
 | enabled | boolean? |  yes  |  |
 

---

#### [SafetynetCredentials](#SafetynetCredentials)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | api_key | string? |  yes  |  |
 

---

#### [SecureUrl](#SecureUrl)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | secure_url | string? |  yes  |  |
 

---

#### [Segment](#Segment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | credentials | [SegmentCredentials](#SegmentCredentials)? |  yes  |  |
 | enabled | boolean? |  yes  |  |
 

---

#### [SegmentCredentials](#SegmentCredentials)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | write_key | string? |  yes  |  |
 

---

#### [SocialLinks](#SocialLinks)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | blog_link | [BlogLink](#BlogLink)? |  yes  |  |
 | facebook | [FacebookLink](#FacebookLink)? |  yes  |  |
 | google_plus | [GooglePlusLink](#GooglePlusLink)? |  yes  |  |
 | instagram | [InstagramLink](#InstagramLink)? |  yes  |  |
 | linked_in | [LinkedInLink](#LinkedInLink)? |  yes  |  |
 | pinterest | [PinterestLink](#PinterestLink)? |  yes  |  |
 | twitter | [TwitterLink](#TwitterLink)? |  yes  |  |
 | vimeo | [VimeoLink](#VimeoLink)? |  yes  |  |
 | youtube | [YoutubeLink](#YoutubeLink)? |  yes  |  |
 

---

#### [SplashImage](#SplashImage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | aspect_ratio | string? |  yes  |  |
 | secure_url | string? |  yes  |  |
 

---

#### [StoreByBrandsRequest](#StoreByBrandsRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brands | number |  no  | Brand uids |
 | company_id | number? |  yes  | Current company id for current company stores only. Don't send in case of cross selling enabled |
 | search_text | string? |  yes  | Search store by name or store code |
 

---

#### [StoreByBrandsResponse](#StoreByBrandsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[BrandStoreInfo](#BrandStoreInfo)]? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 

---

#### [StoreCriteriaRule](#StoreCriteriaRule)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brands | [number]? |  yes  | list of brand uids |
 | companies | [number]? |  yes  | list of company uids |
 

---

#### [StoreLatLong](#StoreLatLong)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | coordinates | [number]? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [StorePriority](#StorePriority)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean? |  yes  |  |
 | storetype_order | [any]? |  yes  |  |
 

---

#### [StorePriorityRule](#StorePriorityRule)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean? |  yes  |  |
 | storetype_order | [string]? |  yes  |  |
 

---

#### [StoresResponse](#StoresResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [AppInventoryStores](#AppInventoryStores)? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 

---

#### [StoreValidator](#StoreValidator)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | browser_script | string? |  yes  |  |
 | json_schema | [[JsonSchema](#JsonSchema)]? |  yes  |  |
 

---

#### [SuccessMessageResponse](#SuccessMessageResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 

---

#### [TokenResponse](#TokenResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | __v | number? |  yes  |  |
 | _id | string? |  yes  |  |
 | application | string? |  yes  |  |
 | created_at | string? |  yes  |  |
 | tokens | [Tokens](#Tokens)? |  yes  |  |
 | updated_at | string? |  yes  |  |
 

---

#### [Tokens](#Tokens)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | firebase | [Firebase](#Firebase)? |  yes  |  |
 | freshchat | [Freshchat](#Freshchat)? |  yes  |  |
 | fynd_rewards | [FyndRewards](#FyndRewards)? |  yes  |  |
 | google_map | [GoogleMap](#GoogleMap)? |  yes  |  |
 | gtm | [Gtm](#Gtm)? |  yes  |  |
 | moengage | [Moengage](#Moengage)? |  yes  |  |
 | safetynet | [Safetynet](#Safetynet)? |  yes  |  |
 | segment | [Segment](#Segment)? |  yes  |  |
 

---

#### [TwitterLink](#TwitterLink)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | icon | string? |  yes  |  |
 | link | string? |  yes  |  |
 | title | string? |  yes  |  |
 

---

#### [UnhandledError](#UnhandledError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 

---

#### [UpdateDomain](#UpdateDomain)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 

---

#### [UpdateDomainTypeRequest](#UpdateDomainTypeRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action | string? |  yes  |  |
 | domain | [UpdateDomain](#UpdateDomain)? |  yes  |  |
 

---

#### [UpdateIntegrationLevelRequest](#UpdateIntegrationLevelRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[IntegrationLevel](#IntegrationLevel)]? |  yes  |  |
 

---

#### [UserEmail](#UserEmail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | boolean? |  yes  |  |
 | email | string? |  yes  |  |
 | primary | boolean? |  yes  |  |
 | verified | boolean? |  yes  |  |
 

---

#### [UserPhoneNumber](#UserPhoneNumber)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | boolean? |  yes  |  |
 | country_code | number? |  yes  |  |
 | phone | string? |  yes  |  |
 | primary | boolean? |  yes  |  |
 | verified | boolean? |  yes  |  |
 

---

#### [Validators](#Validators)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | company | [CompanyValidator](#CompanyValidator)? |  yes  |  |
 | inventory | [InventoryValidator](#InventoryValidator)? |  yes  |  |
 | order | [OrderValidator](#OrderValidator)? |  yes  |  |
 | store | [StoreValidator](#StoreValidator)? |  yes  |  |
 

---

#### [VimeoLink](#VimeoLink)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | icon | string? |  yes  |  |
 | link | string? |  yes  |  |
 | title | string? |  yes  |  |
 

---

#### [YoutubeLink](#YoutubeLink)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | icon | string? |  yes  |  |
 | link | string? |  yes  |  |
 | title | string? |  yes  |  |
 

---




