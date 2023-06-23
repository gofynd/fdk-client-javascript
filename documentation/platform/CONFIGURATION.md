




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
Add new domain to current sales channel



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").configuration.addDomain({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").configuration.addDomain({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [DomainAddRequest](#DomainAddRequest) | yes | Request body |


Add a new domain to current sales channel, including pre-defined domain (free domain) or custom domain (owned by the brand)

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
Change the type of domain in the current sales channel



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").configuration.changeDomainType({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").configuration.changeDomainType({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [UpdateDomainTypeRequest](#UpdateDomainTypeRequest) | yes | Request body |


Primary domain is used as the URL of your website. Short link domain is comparatively smaller and used while generating short links. Use this API to change a domain to either Primary or a Shortlink domain.

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
Create a new sales channel



```javascript
// Promise
const promise = platformClient.configuration.createApplication({  body : value });

// Async/Await
const data = await platformClient.configuration.createApplication({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CreateApplicationRequest](#CreateApplicationRequest) | yes | Request body |


Applications are sales channel websites which can be configured, personalized and customized. Use this API to create a new application in the current company.

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
Get social tokens for the sales channel



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").configuration.getAppApiTokens();

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").configuration.getAppApiTokens();
```






Use this API to retrieve the tokens used for integrating Firebase, MoEngage, Segment, GTM, Freshchat, Safetynet, Google Map, Google, and Facebook auth. **Note** - Token values are encrypted with AES encryption using a secret key.

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
Get sales channel details



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").configuration.getAppBasicDetails();

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").configuration.getAppBasicDetails();
```






Shows basic sales channel details like name, description, logo, domain, company ID, and other related information.

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
Get companies enabled in the sales channel inventory



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
| uid | number | no | UID of companies to be fetched |    
| pageNo | number | no | The current page number to navigate through the given set of results. Default value is 1. |    
| pageSize | number | no | The number of items to retrieve in each page. Default value is 10. |  



Fetch info of all the companies (e.g. name, uid, and company type) whose inventory is fetched into the current sales channel application

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
Get current information of the sales channel



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").configuration.getAppContactInfo();

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").configuration.getAppContactInfo();
```






Fetch data such as social links, copyright text, business highlights, address and contact information of the company/seller/brand operating the application.

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
          "number": "9988998899"
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
Get currencies supported in the application



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").configuration.getAppCurrencyConfig();

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").configuration.getAppCurrencyConfig();
```






Get a list of currencies supported in the current sales channel. Moreover, get the cuurency that is set as the default one in the application.

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
Get the sales channel configuration and features



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").configuration.getAppFeatures();

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").configuration.getAppFeatures();
```






Shows feature configuration of sales channel websites, such as product detail, landing page, options in the login/registration screen, home page, listing page, reward points, communication opt-in, cart options and many more.

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
Get stores enabled in the sales channel inventory



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
| pageNo | number | no | The current page number to navigate through the given set of results. Default value is 1. |    
| pageSize | number | no | The number of items to retrieve in each page. Default value is 10. |  



Fetch info of all the companies (e.g. uid, name, display name, store type, store code and company id) whose inventory is fetched into the current sales channel application

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
Get sales channel data by ID



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").configuration.getApplicationById();

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").configuration.getApplicationById();
```






Use application ID to get the current sales channel details which includes channel name, description, banner, logo, favicon, domain details, token, etc.

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
Get list of registered sales channels under company



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
| q | string | no | Url encoded object used as mongodb query |  



Applications are sales channel websites which can be configured, personalized and customised. Use this API to fetch a list of applications created within a company.

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
| pageNo | number | no | The page number to navigate through the given set of results. Default value is 1. |    
| pageSize | number | no | The number of items to retrieve in each page. Default value is 10. |  



Use this API to get a list of all available integrations in a company

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
Get brands by company.



```javascript
// Promise
const promise = platformClient.configuration.getBrandsByCompany({  q : value });

// Async/Await
const data = await platformClient.configuration.getBrandsByCompany({  q : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| q | string | no | Search text for brand name |  



Use this API to get all the brands added in a company. Get all the brand names, along with URLs of their logo, banner, and portrait image.

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
Get configuration of latest mobile build



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").configuration.getBuildConfig({  platformType : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").configuration.getBuildConfig({  platformType : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| platformType | string | yes | The device platform for which the mobile app is built, e.g. android, ios. |  



Fetch latest build configuration, such as app name, landing page image, splash image used in a mobile build.

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
| pageNo | number | no | The page number to navigate through the given set of results. Default value is 1. |    
| pageSize | number | no | The number of items to retrieve in each page. Default value is 10. |  
| body | [CompanyByBrandsRequest](#CompanyByBrandsRequest) | yes | Request body |


Use this API to get a list of companies by the brands they deal

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






Use this API to get a list of currencies allowed in the company. Moreover, get the name, code, symbol, and the decimal digits of the currencies.

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
Check domain availability before linking to application



```javascript
// Promise
const promise = platformClient.configuration.getDomainAvailibility({  body : value });

// Async/Await
const data = await platformClient.configuration.getDomainAvailibility({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [DomainSuggestionsRequest](#DomainSuggestionsRequest) | yes | Request body |


Use this API to check the domain availability before linking it to application. Also sends domain suggestions that are similar to the queried domain. Note - Custom domain search is currently powered by GoDaddy provider.

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
Get the status of connected domain



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").configuration.getDomainStatus({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").configuration.getDomainStatus({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [DomainStatusRequest](#DomainStatusRequest) | yes | Request body |


Shows if the A records and TXT records of the domain correctly points to appropriate IP on Fynd Servers.

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
Fetch all the domains added to an  application (sales channel website), including pre-defined domain (free domain) or custom domain (owned by the brand). Know the verification status of each domain name, and find out which one is the primary domain, short link domain, or both.



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").configuration.getDomains();

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").configuration.getDomains();
```






Get list of domains

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
Get integration data by its ID



```javascript
// Promise
const promise = platformClient.configuration.getIntegrationById({  id : value });

// Async/Await
const data = await platformClient.configuration.getIntegrationById({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | number | yes | Integration id |  



Use this API to fetch the details of an integration (such as Ginesys, SAP, etc.) using its ID

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
Get integration config at a particular level (store/company)



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
| id | string | yes | Integration ID (24-digit Mongo Object ID) |   
| level | string | yes | Integration level, `store` or `company` |   
| uid | number | yes | Unique identifier of integration level (store/company) |  



Use this API to get the configuration details of an integration such as token, permissions, level, opted value, uid, meta, location ID, etc. at a particular level (store/company).

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
| id | string | yes | Integration ID (24-digit Mongo Object ID) |   
| level | string | yes | store or company |    
| opted | boolean | no | True means get the opted stores. False means get the stores that aren't opted. |    
| checkPermission | boolean | no | Filter on if permissions (for inventory/order) are present |  



Use this API to get the configuration details of an integration such as token, permissions, level, opted value, uid, meta, location ID, etc.

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
Get sales channel configuration



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").configuration.getInventoryConfig();

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").configuration.getInventoryConfig();
```






Use this API to fetch configuration details of authentication, inventory, article assignment rules, reward points, cart, payment, order, logistics, etc.

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
Check active integration at store



```javascript
// Promise
const promise = platformClient.configuration.getLevelActiveIntegrations({  id : value,
 level : value,
 uid : value });

// Async/Await
const data = await platformClient.configuration.getLevelActiveIntegrations({  id : value,
 level : value,
 uid : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | Integration ID (24-digit Mongo Object ID) |   
| level | string | yes | Integration level, `store` or `company` |   
| uid | number | yes | Unique identifier of integration level (store/company) |  



Use this API to check if a store is already opted-in for any integration

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
| pageNo | number | no | The page number to navigate through the given set of results. Default value is 1. |    
| pageSize | number | no | The number of items to retrieve in each page. Default value is 10. |  
| body | [FilterOrderingStoreRequest](#FilterOrderingStoreRequest) | yes | Request body |


Use this API to use filters and retrieve the details of the deployment stores (the selling locations where the application will be utilised for placing orders).

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
Get other seller's sales channel by ID



```javascript
// Promise
const promise = platformClient.configuration.getOtherSellerApplicationById({  id : value });

// Async/Await
const data = await platformClient.configuration.getOtherSellerApplicationById({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | Application Id |  



Use application ID to fetch details of a seller application that was not created within the current company. but has opted for the current company's inventory

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
Get other seller sales channels



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
| pageNo | number | no | The page number to navigate through the given set of results. Default value is 1. |    
| pageSize | number | no | The number of items to retrieve in each page. Default value is 10. |  



Use this API to fetch all other seller applications that were not created within the current company. but have opted for the current company's inventory

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
Get details of previous mobile builds



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").configuration.getPreviousVersions({  platformType : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").configuration.getPreviousVersions({  platformType : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| platformType | string | yes | The device platform for which the mobile app is built, e.g. android, ios. |  



Fetch version details of the app, this includes the build status, build date, version name, latest version, and a lot more.

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
| level | string | yes | store or company |   
| uid | number | yes | Unique identifier of the selected integration level. |    
| pageNo | number | no | The page number to navigate through the given set of results. Default value is 1. |    
| pageSize | number | no | The number of items to retrieve in each page. Default value is 10. |  



Use this API to get the store-level/company-level integrations configured in a company

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
Get stores by brand uids for the current company



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
| pageNo | number | no | The page number to navigate through the given set of results. Default value is 1. |    
| pageSize | number | no | The number of items to retrieve in each page. Default value is 10. |  
| body | [StoreByBrandsRequest](#StoreByBrandsRequest) | yes | Request body |


Use this API to get a list of selling locations (stores) by the brands they deal. Store has information about store name, store type, store code, store address, and company detail.

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
Opt-out company or store from other seller application



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
| id | string | yes | Alphanumeric ID allotted to an application (sales channel website) created within a business account. |  
| body | [OptOutInventory](#OptOutInventory) | yes | Request body |


Use this API to opt-out your company or store from other seller application. The specific seller application will no longer fetch inventory from your company or store.

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
Partially update sales channel configuration



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").configuration.partiallyUpdateInventoryConfig({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").configuration.partiallyUpdateInventoryConfig({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [AppInventoryPartialUpdate](#AppInventoryPartialUpdate) | yes | Request body |


Partially update the configuration details of authentication, inventory, article assignment rules, reward points, cart, payment, order, logistics, etc.

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
Remove attached domain from current sales channel



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").configuration.removeDomainById({  id : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").configuration.removeDomainById({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | The unique identifier (24-digit Mongo Object ID) of the domain |  



Delete a domain (secondary or shortlink domain) added to a sales channel. It will disable user's access to website, shared links, and other features associated with this domain.

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
Add or update social tokens for the sales channel



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").configuration.updateAppApiTokens({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").configuration.updateAppApiTokens({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [TokenResponse](#TokenResponse) | yes | Request body |


Use this API to add or edit the tokens used for integrating Firebase, MoEngage, Segment, GTM, Freshchat, Safetynet, Google Map, Google and Facebook auth.

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
Update sales channel details



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").configuration.updateAppBasicDetails({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").configuration.updateAppBasicDetails({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [ApplicationDetail](#ApplicationDetail) | yes | Request body |


Modify sales channel details like name, description, logo, domain, company ID, and other related information.

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
Save or update current information of the sales channel



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").configuration.updateAppContactInfo({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").configuration.updateAppContactInfo({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [ApplicationInformation](#ApplicationInformation) | yes | Request body |


Modify the social links, copyright text, business highlights, address and contact information of the company/seller/brand operating the application.

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
        "number": "9988998899"
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
Update initial sales channel supported currency



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").configuration.updateAppCurrencyConfig({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").configuration.updateAppCurrencyConfig({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [AppSupportedCurrency](#AppSupportedCurrency) | yes | Request body |


Use this API to add and edit the currencies supported in the application. Initially, INR will be enabled by default.

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
Update the sales channel configuration and features



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").configuration.updateAppFeatures({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").configuration.updateAppFeatures({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [AppFeatureRequest](#AppFeatureRequest) | yes | Request body |


Modify the feature configuration of sales channel websites, such as product detail, landing page, options in the login/registration screen, home page, listing page, reward points, communication opt-in, cart options and many more.

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
Update the configuration for next mobile build



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
| platformType | string | yes | The device platform for which the mobile app is built, e.g. android, ios. |  
| body | [MobileAppConfigRequest](#MobileAppConfigRequest) | yes | Request body |


Modify the existing build configuration, such as app name, landing page image, splash image used in a mobile build.

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
Update sales channel configuration



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").configuration.updateInventoryConfig({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").configuration.updateInventoryConfig({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [ApplicationInventory](#ApplicationInventory) | yes | Request body |


Modify the configuration details of authentication, inventory, article assignment rules, reward points, cart, payment, order, logistics, etc.

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
Update a store level integration you opted



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
| id | string | yes | Integration ID (24-digit Mongo Object ID) |   
| level | string | yes | Integration level, `store` or `company` |  
| body | [UpdateIntegrationLevelRequest](#UpdateIntegrationLevelRequest) | yes | Request body |


Use this API to update the configuration details of an integration such as token, permissions, level, opted value, uid, meta, location ID, etc. at a particular level (store/company).

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
Update integration level by store UID



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
| id | string | yes | Integration ID (24-digit Mongo Object ID) |   
| level | string | yes | Integration level, `store` or `company` |   
| uid | number | yes | Unique identifier of integration level (store/company) |  
| body | [IntegrationLevel](#IntegrationLevel) | yes | Request body |


Update the level of integration by store UID

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


Use this API to edit the details of the deployment stores (the selling locations where the application will be utilised for placing orders)

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
 | api_key | string? |  yes  | Firebase secret credential API key for Android |
 | application_id | string? |  yes  | Alphanumeric ID allotted to a sales channel application created within a business account |
 

---

#### [App](#App)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | auth | [ApplicationAuth](#ApplicationAuth)? |  yes  |  |
 | channel_type | string? |  yes  | It indicates different channel types like store, website-and-mobile-apps. Default value is store |
 | company_id | string? |  yes  | Numeric ID allotted to a business account on Fynd Platform. |
 | desc | string? |  yes  | Detailed description about the sales channel |
 | name | string? |  yes  | User-friendly name for sales channel, e.g. Zenz Fashion |
 

---

#### [AppCartConfig](#AppCartConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bulk_coupons | boolean? |  yes  | Allow creation of bulk coupons |
 | delivery_charges | [DeliveryCharges](#DeliveryCharges)? |  yes  |  |
 | enabled | boolean? |  yes  | Shows whether cart configuration is enabled or not |
 | max_cart_items | number? |  yes  | Maximum number of items that can be added to cart by the customer |
 | min_cart_value | number? |  yes  | Minimum cart value below which customer cannot place an order |
 | revenue_engine_coupon | boolean? |  yes  | Allow coupon apply and credits together. Default value is false. |
 

---

#### [AppCurrencyResponse](#AppCurrencyResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application | string? |  yes  | Alphanumeric ID allotted to an application (sales channel website) created within a business account |
 | default_currency | [DefaultCurrency](#DefaultCurrency)? |  yes  |  |
 | supported_currency | [[Currency](#Currency)]? |  yes  |  |
 

---

#### [AppDomain](#AppDomain)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string? |  yes  | Domain URL of current sales channel, e.g. zenz.com |
 

---

#### [AppFeature](#AppFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | __v | number? |  yes  | Version key for tracking revisions. Default value is zero |
 | _id | string? |  yes  | The unique identifier (24-digit Mongo Object ID) for the sales channel features |
 | app | string? |  yes  | Application ID of the sales channel |
 | cart | [CartFeature](#CartFeature)? |  yes  |  |
 | common | [CommonFeature](#CommonFeature)? |  yes  |  |
 | created_at | string? |  yes  | ISO 8601 timestamp showing the date when the features were configured |
 | home_page | [HomePageFeature](#HomePageFeature)? |  yes  |  |
 | landing_page | [LandingPageFeature](#LandingPageFeature)? |  yes  |  |
 | order | [OrderFeature](#OrderFeature)? |  yes  |  |
 | pcr | [PcrFeature](#PcrFeature)? |  yes  |  |
 | product_detail | [ProductDetailFeature](#ProductDetailFeature)? |  yes  |  |
 | qr | [QrFeature](#QrFeature)? |  yes  |  |
 | registration_page | [RegistrationPageFeature](#RegistrationPageFeature)? |  yes  |  |
 | updated_at | string? |  yes  | ISO 8601 timestamp of last known modifications to the sales channel feature configuration |
 

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
 | franchise_enabled | boolean? |  yes  | Allow other businesses (companies) to consume the current sales channel's inventory and sell products |
 | image | [string]? |  yes  |  |
 | only_verified_products | boolean? |  yes  | Show only verified products (the ones whose data have been verified by the admin) |
 | out_of_stock | boolean? |  yes  | Indicates whether out of stock products are allowed to show up on the website. |
 | payment | [InventoryPaymentConfig](#InventoryPaymentConfig)? |  yes  |  |
 | store | [InventoryStoreRule](#InventoryStoreRule)? |  yes  |  |
 

---

#### [AppInventoryCompanies](#AppInventoryCompanies)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | company_type | string? |  yes  | Indicates the type of the company, e.g. franchisee, distributor, etc. |
 | name | string? |  yes  | Name of the company, e.g. Newton Traders |
 | uid | number? |  yes  | UID of the company, e.g. 108 |
 

---

#### [AppInventoryConfig](#AppInventoryConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand | [InventoryBrand](#InventoryBrand)? |  yes  |  |
 | category | [InventoryCategory](#InventoryCategory)? |  yes  |  |
 | company_store | [any]? |  yes  | List of selling locations whose inventory is available to the sales channel for displaying on the website |
 | discount | [InventoryDiscount](#InventoryDiscount)? |  yes  |  |
 | exclude_category | [any]? |  yes  | List of excluded brands category |
 | franchise_enabled | boolean? |  yes  | Allow other businesses (companies) to consume the current sales channel's inventory and sell products |
 | image | [string]? |  yes  |  |
 | only_verified_products | boolean? |  yes  | Show only verified products (the ones whose data has been verified by the admin) |
 | out_of_stock | boolean? |  yes  | Indicates whether out of stock products are allowed to show up on the website |
 | price | [InventoryPrice](#InventoryPrice)? |  yes  |  |
 | store | [InventoryStore](#InventoryStore)? |  yes  |  |
 

---

#### [AppInventoryPartialUpdate](#AppInventoryPartialUpdate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cart | [AppCartConfig](#AppCartConfig)? |  yes  |  |
 | comms_enabled | boolean? |  yes  | Shows communication (comms) is enabled or not for sales channel partial inventory update |
 | communication | [CommunicationConfig](#CommunicationConfig)? |  yes  |  |
 | loyalty_points | [LoyaltyPointsConfig](#LoyaltyPointsConfig)? |  yes  |  |
 | payment | [AppPaymentConfig](#AppPaymentConfig)? |  yes  |  |
 | reward_points | [RewardPointsConfig](#RewardPointsConfig)? |  yes  |  |
 

---

#### [AppInventoryStores](#AppInventoryStores)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  | The unique identifier of the store (24-digit Mongo Object ID) in the sales channel inventory |
 | company_id | number? |  yes  | Company ID of the selling location (store) added to the sales channel's inventory |
 | display_name | string? |  yes  | Display name of the sales channel inventory store (can be different than the actual store name), e.g. Reebok MUM |
 | modified_on | string? |  yes  | ISO 8601 timestamp of last known updation to the stores in sales channel inventory |
 | name | string? |  yes  | Name of the store in the sales channel inventory, e.g. Reebok Mumbai |
 | store_code | string? |  yes  | Store code of the enabled inventory store, e.g. HS-c9bac. It is unique for every store. |
 | store_type | string? |  yes  | Store type of the sales channel inventory store, such as mall, warehouse, high_street |
 | uid | number? |  yes  | Sales channel inventory store UID |
 

---

#### [Application](#Application)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | __v | number? |  yes  | Version key for tracking revisions. Default value is zero. |
 | _id | string? |  yes  | The unique identifier (24-digit Mongo Object ID) of the sales channel |
 | app_type | string? |  yes  | It shows application is live or in development mode. |
 | auth | [ApplicationAuth](#ApplicationAuth)? |  yes  |  |
 | banner | [SecureUrl](#SecureUrl)? |  yes  |  |
 | cache_ttl | number? |  yes  | An integer value that specifies the number of seconds until the key expires |
 | channel_type | string? |  yes  | It indicates different channel types like store, website-and-mobile-apps. Default value is store |
 | company_id | number? |  yes  | Numeric ID allotted to a business account where the sales channel exists |
 | cors | [ApplicationCors](#ApplicationCors)? |  yes  |  |
 | created_at | string? |  yes  | ISO 8601 timestamp of sales channel creation |
 | description | string? |  yes  | It contains detailed information about the sales channel. |
 | domain | [Domain](#Domain)? |  yes  |  |
 | domains | [[Domain](#Domain)]? |  yes  |  |
 | favicon | [SecureUrl](#SecureUrl)? |  yes  |  |
 | is_active | boolean? |  yes  | Indicates sales channel is active or not active |
 | is_internal | boolean? |  yes  | Indicates whether a sales channel is internal or not |
 | logo | [SecureUrl](#SecureUrl)? |  yes  |  |
 | meta | [[ApplicationMeta](#ApplicationMeta)]? |  yes  |  |
 | mobile_logo | [SecureUrl](#SecureUrl)? |  yes  |  |
 | name | string? |  yes  | Name of the sales channel, e.g. Zenz Fashion |
 | owner | string? |  yes  | The unique identifier (24-digit Mongo Object ID) of owner who owns the application |
 | redirections | [[ApplicationRedirections](#ApplicationRedirections)]? |  yes  |  |
 | token | string? |  yes  | Random generated fix length string for sales channel. It is required and auto-generated. |
 | updated_at | string? |  yes  | ISO 8601 timestamp of sales channel updation |
 | website | [ApplicationWebsite](#ApplicationWebsite)? |  yes  |  |
 

---

#### [ApplicationAuth](#ApplicationAuth)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean? |  yes  | Shows sales channel auth is enabled or not enabled. |
 

---

#### [ApplicationCors](#ApplicationCors)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | domains | [string]? |  yes  |  |
 

---

#### [ApplicationDetail](#ApplicationDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  | The unique identifier (24-digit Mongo Object ID) for the sales channel details |
 | banner | [SecureUrl](#SecureUrl) |  no  |  |
 | description | string |  no  | It gives a detailed information about the sales channel. It is required. |
 | domain | [Domain](#Domain)? |  yes  |  |
 | domains | [[Domain](#Domain)]? |  yes  |  |
 | favicon | [SecureUrl](#SecureUrl) |  no  |  |
 | logo | [SecureUrl](#SecureUrl) |  no  |  |
 | mobile_logo | [SecureUrl](#SecureUrl) |  no  |  |
 | name | string |  no  | Name of the sales channel. It is required. |
 

---

#### [ApplicationInformation](#ApplicationInformation)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | __v | number? |  yes  | Version key for tracking revisions. Default value is zero. |
 | _id | string? |  yes  | Unique identifier (24-digit Mongo Object ID) of the application information |
 | address | [InformationAddress](#InformationAddress)? |  yes  |  |
 | application | string? |  yes  | Alphanumeric ID allotted to a sales channel application created within a business account |
 | business_highlights | [BusinessHighlights](#BusinessHighlights)? |  yes  |  |
 | copyright_text | string? |  yes  | Copyright statement usually seen at the site's footer |
 | created_at | string? |  yes  | ISO 8601 timestamp of creation of the application information |
 | links | [Links](#Links)? |  yes  |  |
 | social_links | [SocialLinks](#SocialLinks)? |  yes  |  |
 | support | [InformationSupport](#InformationSupport)? |  yes  |  |
 | updated_at | string? |  yes  | ISO 8601 timestamp of updation of the application information |
 

---

#### [ApplicationInventory](#ApplicationInventory)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  | The unique identifier (24-digit Mongo Object ID) of the sales channel inventory |
 | app | string? |  yes  | Current sales channel ID |
 | article_assignment | [ArticleAssignmentConfig](#ArticleAssignmentConfig)? |  yes  |  |
 | authentication | [AuthenticationConfig](#AuthenticationConfig)? |  yes  |  |
 | business | string? |  yes  | Indicates the business type for sales channel e.g. retail or wholesale |
 | cart | [AppCartConfig](#AppCartConfig)? |  yes  |  |
 | comms_enabled | boolean? |  yes  | Shows communication(comms) is enabled or not for sales channel inventory |
 | communication | [CommunicationConfig](#CommunicationConfig)? |  yes  |  |
 | created_at | string? |  yes  | ISO 8601 timestamp of sales channel inventory creation |
 | inventory | [AppInventoryConfig](#AppInventoryConfig)? |  yes  |  |
 | logistics | [AppLogisticsConfig](#AppLogisticsConfig)? |  yes  |  |
 | loyalty_points | [LoyaltyPointsConfig](#LoyaltyPointsConfig)? |  yes  |  |
 | modified_by | string? |  yes  | User ID of the person who made the latest changes in the sales channel inventory |
 | order | [AppOrderConfig](#AppOrderConfig)? |  yes  |  |
 | payment | [AppPaymentConfig](#AppPaymentConfig)? |  yes  |  |
 | platforms | [string]? |  yes  |  |
 | reward_points | [RewardPointsConfig](#RewardPointsConfig)? |  yes  |  |
 | updated_at | string? |  yes  | ISO 8601 timestamp of sales channel inventory updation |
 

---

#### [ApplicationMeta](#ApplicationMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string? |  yes  | Indicates to name of application meta |
 | value | string? |  yes  | Value related to application meta name |
 

---

#### [ApplicationRedirections](#ApplicationRedirections)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | redirect_from | string? |  yes  | Old domain url of the sales channel |
 | redirect_to | string? |  yes  | New domain URL of the sales channel. Users will be automatically redirected from old domain to new domain. |
 | type | string? |  yes  | It shows domain redirection type. Permanent redirection is for long time period redirection, and temporary redirection for a short time period. |
 

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
 | basepath | string? |  yes  | Base path for the current sales channel website |
 | enabled | boolean? |  yes  | Shows whether sales channel website URL is enabled or not |
 

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
 | enabled | boolean? |  yes  | Allow orders to be accepted from the sales channel |
 | force_reassignment | boolean? |  yes  | Allow force reassigning of an order |
 | message | string? |  yes  | Reason for reassigning an order |
 

---

#### [AppPaymentConfig](#AppPaymentConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | anonymous_cod | boolean? |  yes  | Allow cash on delivery for anonymous user |
 | callback_url | [CallbackUrl](#CallbackUrl)? |  yes  |  |
 | cod_amount_limit | number? |  yes  | Maximum amount allowed for COD order. Beyond this, customer cannot opt for COD. |
 | cod_charges | number? |  yes  | Extra charge applicable for COD orders |
 | enabled | boolean? |  yes  | Allow payment option within sales channel |
 | methods | [Methods](#Methods)? |  yes  |  |
 | mode_of_payment | string? |  yes  | Mode of payment for sales channel payment, e.g. 'ECOMM'. |
 | payment_selection_lock | [PaymentSelectionLock](#PaymentSelectionLock)? |  yes  |  |
 | source | string? |  yes  | Source of the payment mode, e.g. 'ECOMM'. Default value is FYND. |
 

---

#### [AppStoreRules](#AppStoreRules)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brands | [any]? |  yes  | List of brands whose products will be shown on the website |
 | companies | [number]? |  yes  | List of companies whose inventory is available to the sales channel for displaying on the website |
 

---

#### [AppSupportedCurrency](#AppSupportedCurrency)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  | The unique identifier (24-digit Mongo Object ID) of the currency configuration supported by the application |
 | application | string? |  yes  | Alphanumeric ID allotted to an application (sales channel website) created within a business account. |
 | created_at | string? |  yes  | ISO 8601 timestamp when currency was added in the list of currencies supported by the sales channel |
 | default_currency | [DefaultCurrency](#DefaultCurrency)? |  yes  |  |
 | supported_currency | [string]? |  yes  |  |
 | updated_at | string? |  yes  | ISO 8601 timestamp when currency was updated in the list of currencies supported by the sales channel |
 

---

#### [ArticleAssignmentConfig](#ArticleAssignmentConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | post_order_reassignment | boolean? |  yes  | Allow post order reassigment of article |
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
 | provider | string? |  yes  | Shows inventory authentication provider |
 | required | boolean? |  yes  | Shows sales channel inventory authentication is required or not |
 

---

#### [BlogLink](#BlogLink)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | icon | string? |  yes  | Hosted URL of icon image shown on the website |
 | link | string? |  yes  | Web URL of brand's blog page |
 | title | string? |  yes  | Name of the brand's blog page |
 

---

#### [BrandCompanyInfo](#BrandCompanyInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | company_id | number? |  yes  | Numeric ID allotted to a business account |
 | company_name | string? |  yes  | Name of the company dealing with the brand |
 

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
 | store_code | string? |  yes  | Store code of the brand. It is unique for every brand store. |
 | store_id | number? |  yes  | The unique identifier of the selling location (store) |
 | store_name | string? |  yes  | Name of the selling location (store) |
 | store_type | string? |  yes  | Store type of the brand like warehouse, high_street, mall |
 

---

#### [BuildVersion](#BuildVersion)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | __v | number? |  yes  | Version key for tracking revisions. Default value is zero. |
 | _id | string? |  yes  | 24-digit Mongo Object ID |
 | application | string? |  yes  | Application ID of the sales channel |
 | build_status | string? |  yes  | Current progress of the mobile build, e.g. pending, cancelled, failed, success |
 | created_at | string? |  yes  | ISO 8601 timestamp of app creation |
 | platform_type | string? |  yes  | Device platform for which the mobile app was built, e.g. android, ios. |
 | updated_at | string? |  yes  | ISO 8601 timestamp of last known modifications to the app build |
 | version_code | number? |  yes  | A positive integer used as an internal version number |
 | version_name | string? |  yes  | Version number of the mobile build, in dot-decimal notation |
 

---

#### [BuildVersionHistory](#BuildVersionHistory)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | latest_available_version_name | string? |  yes  | Latest version number of the mobile build, in dot-decimal notation |
 | versions | [BuildVersion](#BuildVersion)? |  yes  |  |
 

---

#### [BusinessHighlights](#BusinessHighlights)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  | Unique identifier (24-digit Mongo Object ID) of the related business |
 | icon | string? |  yes  | Hosted URL of icon image representing the business highlight |
 | sub_title | string? |  yes  | Detailed information about the highlight |
 | title | string? |  yes  | Title of the business highlight, e.g. Superfast Delivery |
 

---

#### [CallbackUrl](#CallbackUrl)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | app | string? |  yes  | Payment callback url for app |
 | web | string? |  yes  | Payment callback url for web |
 

---

#### [CartFeature](#CartFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | google_map | boolean? |  yes  | Allow adding of Google Maps. Default value is true. |
 | gst_input | boolean? |  yes  | Shows whether customer is allowed to enter GST on the cart page for claiming input credits |
 | placing_for_customer | boolean? |  yes  | Shows whether the staff is placing order on behalf of customer. Default value is true. |
 | revenue_engine_coupon | boolean? |  yes  | Allow coupon apply and credits, together. Default value is false. |
 | staff_selection | boolean? |  yes  | Shows whether staff selection is enabled on cart page |
 

---

#### [Charges](#Charges)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | charges | number? |  yes  | Delivery amount to be charged when order value is below the defined threshold value |
 | threshold | number? |  yes  | The order value below which an extra delivery fee will be applicable |
 

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
 | visibility | boolean? |  yes  | Shows whether WhatsApp communication is enabled |
 

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
 | address1 | string? |  yes  | Primary address line of the company |
 | address2 | string? |  yes  | Secondary address line of the company |
 | address_type | string? |  yes  | Indicates different office types like office, registered, and home. |
 | city | string? |  yes  | City name, e.g. Mumbai |
 | country | string? |  yes  | Country name, e.g. India |
 | pincode | number? |  yes  | 6-digit PIN code of the city, e.g. 400001 |
 | state | string? |  yes  | State name, e.g. Maharashtra |
 

---

#### [CompanyBrandInfo](#CompanyBrandInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand_banner_portrait_url | string? |  yes  | Hosted URL of the brand's portrait banner |
 | brand_banner_url | string? |  yes  | Hosted URL of the brand's banner image |
 | brand_logo_url | string? |  yes  | Hosted URL of the brand's logo |
 | name | string? |  yes  | Brand name, e.g. Raymonds |
 | value | number? |  yes  | Brand UID for identifying the brand |
 

---

#### [CompanyByBrandsRequest](#CompanyByBrandsRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brands | number |  no  | Brand UID |
 | search_text | string? |  yes  | A search field for finding a company by its name |
 

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
 | browser_script | string? |  yes  | Browser script for the company validator |
 | json_schema | [[JsonSchema](#JsonSchema)]? |  yes  |  |
 

---

#### [CompareProductsFeature](#CompareProductsFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean? |  yes  | Shows whether product comparison feature is enabled on PDP |
 

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
 | api_key | string? |  yes  | An API key is a unique string that's used to route requests to your Firebase project when interacting with Firebase. |
 | application_id | string? |  yes  | Alphanumeric ID allotted to the current application created within the current business account |
 | gcm_sender_id | string? |  yes  | Google Cloud Manager's Sender ID for Firebase. It is a unique numerical value which is created when you configure your project in the Google Developers Console/Google Cloud Console. |
 | ios | [Ios](#Ios)? |  yes  |  |
 | project_id | string? |  yes  | Project ID for Firebase integration. Project ID is a unique identifier for a project and is used only within the console. |
 

---

#### [Credit](#Credit)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean? |  yes  | Shows whether reward points should be credited |
 

---

#### [CurrenciesResponse](#CurrenciesResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[Currency](#Currency)]? |  yes  |  |
 

---

#### [Currency](#Currency)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  | The unique identifier (24-digit Mongo Object ID) of the current sales channel supported currency |
 | code | string? |  yes  | 3-character currency code, e.g. INR, USD, EUR. |
 | created_at | string? |  yes  | ISO 8601 timestamp of sales channel support currency creation |
 | decimal_digits | number? |  yes  | Acceptable decimal limits for a given currency, e.g. 1.05$ means upto 2 decimal digits can be accepted as a valid value of a currency. |
 | is_active | boolean? |  yes  | Shows currency is enabled or not in current sales channel |
 | name | string? |  yes  | Name of the currency, e.g Indian Rupee |
 | symbol | string? |  yes  | Unique symbol for identifying the currency, e.g. ₹ |
 | updated_at | string? |  yes  | ISO 8601 timestamp of sales channel support currency updation |
 

---

#### [CurrencyConfig](#CurrencyConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  | The unique identifier (24-digit Mongo Object ID) of all the currency configuration |
 | code | string? |  yes  | 3-character currency code, e.g. INR, USD, EUR. |
 | created_at | string? |  yes  | ISO 8601 timestamp of a given currency creation |
 | decimal_digits | number? |  yes  | Acceptable decimal limits for a given currency, e.g. 1.05$ means upto 2 decimal digits can be accepted as a valid value of a currency. |
 | is_active | boolean? |  yes  | Currency is enabled or not for the current sales channel |
 | name | string? |  yes  | Name of the currency, e.g Indian Rupee |
 | symbol | string? |  yes  | Unique symbol for identifying the currency, e.g. ₹ |
 | updated_at | string? |  yes  | ISO 8601 timestamp of a given currency updation |
 

---

#### [CurrencyFeature](#CurrencyFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | default_currency | string? |  yes  | 3-letter code of the default currency used in the application. Default vaule is 'INR'. |
 | type | string? |  yes  | If 'explicit', currency formatting shows currency code with price. For explicit or all currency selection. |
 | value | [string]? |  yes  | 3-letter currency code |
 

---

#### [Debit](#Debit)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | auto_apply | boolean? |  yes  | Allow automatic debit of reward points |
 | enabled | boolean? |  yes  | Shows whether reward points are available for debit |
 | strategy_channel | string? |  yes  | Strategy channel for debiting reward points |
 

---

#### [DefaultCurrency](#DefaultCurrency)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string? |  yes  | 3-character code of the default currency, e.g. INR, EUR, USD |
 | ref | string? |  yes  | The unique identifier (24-digit Mongo Object ID) of the default currency |
 

---

#### [DeliveryCharges](#DeliveryCharges)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | charges | [Charges](#Charges)? |  yes  |  |
 | enabled | boolean? |  yes  | Allow delivery charges |
 

---

#### [DeploymentMeta](#DeploymentMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  | The unique identifier (24-digit Mongo Object ID) of the ordering stores |
 | all_stores | boolean? |  yes  | Allow all stores from the ordering store |
 | app | string? |  yes  | Alphanumeric ID allotted to an application (sales channel website) created within a business account |
 | deployed_stores | [number]? |  yes  |  |
 | enabled | boolean? |  yes  | Allow ordering stores for current sales channel |
 | type | string? |  yes  | Permitted values are 'hard' and 'soft'. For hard type delivery, store selection is compulsory. For soft type, delivery store selection is optional. |
 

---

#### [DeploymentStoreSelectionFeature](#DeploymentStoreSelectionFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean? |  yes  | Shows whether selection of store (for deploying the application) is permitted |
 | type | string? |  yes  | Permitted values are 'hard' and 'soft'. For hard type delivery, store selection is compulsory. For soft type, delivery store selection is optional. |
 

---

#### [Domain](#Domain)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  | The unique identifier (24-digit Mongo Object ID) of the sales channel domain |
 | is_predefined | boolean? |  yes  | Domain is hosting domain or not. |
 | is_primary | boolean? |  yes  | Domain is primary or not. Primary domain is the default/main domain. |
 | is_shortlink | boolean? |  yes  | Shortlink is present or not for the domain |
 | name | string? |  yes  | Full domain name, e.g. newton.com |
 | verified | boolean? |  yes  | Domain is verified or not. TXT and A records should propagate correctly. |
 

---

#### [DomainAdd](#DomainAdd)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  | The unique identifier (24-digit Mongo Object ID) of the domain |
 | is_primary | boolean? |  yes  | Domain is primary or not (indicates if the domain has been made the main URL of the sales channel) |
 | is_shortlink | boolean? |  yes  | Indicates if the domain is a short link domain (short URL e.g. bitly) |
 | message | string? |  yes  | Shows the message shown after adding a domain successfully, e.g. 'New domain added successfully' |
 | name | string? |  yes  | Full domain name, e.g. uniket.hostx0.de |
 | txt_records | [string]? |  yes  |  |
 | verified | boolean? |  yes  | Domain is verified or not (indicates if A records and TXT records are correct) |
 

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
 | display | string? |  yes  | Shows TXT record and A records for the domain |
 | status | boolean? |  yes  | Shows whether TXT record or A records for the domain are correctly propagating via DNS servers |
 

---

#### [DomainStatusRequest](#DomainStatusRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | domain_url | string? |  yes  | URL of the domain, e.g. uniket.hostx0.de |
 

---

#### [DomainStatusResponse](#DomainStatusResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | connected | boolean? |  yes  | Check if domain is live and mapped to appropriate IP of Fynd Servers |
 | status | [[DomainStatus](#DomainStatus)]? |  yes  |  |
 

---

#### [DomainSuggestion](#DomainSuggestion)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | currency | string? |  yes  | Custom domain currency. Not present for Fynd domains. |
 | is_available | boolean |  no  | Shows whether the custom domain of your choice is available or not available |
 | name | string |  no  | URL of the custom domain |
 | price | number? |  yes  | Cost of purchasing a custom domain. Not present for Fynd domains. |
 | unsupported | boolean? |  yes  | Shows whether TLD domain is supported or not |
 

---

#### [DomainSuggestionsRequest](#DomainSuggestionsRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | custom | boolean? |  yes  | Get suggestions for custom domains or Fynd domains |
 | domain_url | string? |  yes  | Domain url |
 

---

#### [DomainSuggestionsResponse](#DomainSuggestionsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | domains | [[DomainSuggestion](#DomainSuggestion)]? |  yes  | Domain URL |
 

---

#### [FacebookLink](#FacebookLink)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | icon | string? |  yes  | Hosted URL of social icon image shown on the website |
 | link | string? |  yes  | Web URL of brand's Facebook page |
 | title | string? |  yes  | Name of the social media platform, e.g. Facebook |
 

---

#### [FeedbackFeature](#FeedbackFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean? |  yes  | Shows whether customer feedback is enabled on PDP. Default value is false. |
 

---

#### [FilterOrderingStoreRequest](#FilterOrderingStoreRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | all_stores | boolean? |  yes  | Allow all stores from the ordering stores |
 | deployed_stores | [number]? |  yes  |  |
 | q | string? |  yes  | Store code or name of the ordering store |
 

---

#### [Firebase](#Firebase)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | credentials | [Credentials](#Credentials)? |  yes  |  |
 | enabled | boolean? |  yes  | Shows whether Firebase integration is enabled or disabled for the sales channel |
 

---

#### [Freshchat](#Freshchat)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | credentials | [FreshchatCredentials](#FreshchatCredentials)? |  yes  |  |
 | enabled | boolean? |  yes  | Shows whether Freshchat integration is enabled or disabled for the sales channel |
 

---

#### [FreshchatCredentials](#FreshchatCredentials)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | app_id | string? |  yes  | The unique app_id of your Freshchat account for integrating Freshchat with your sales channel |
 | app_key | string? |  yes  | The unique app_key of your Freshchat account for integrating Freshchat with your sales channel |
 | web_token | string? |  yes  | Web token used for accessing the Freshchat APIs |
 

---

#### [FyndRewards](#FyndRewards)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | credentials | [FyndRewardsCredentials](#FyndRewardsCredentials)? |  yes  |  |
 

---

#### [FyndRewardsCredentials](#FyndRewardsCredentials)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | public_key | string? |  yes  | Public key for integrating with Fynd rewards. |
 

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
 | api_key | string? |  yes  | Secret API key for Google Maps. A unique identifier that authenticates requests made to Google Maps API. |
 

---

#### [GooglePlusLink](#GooglePlusLink)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | icon | string? |  yes  | Hosted URL of social icon image shown on the website |
 | link | string? |  yes  | Web URL of brand's Google+ account |
 | title | string? |  yes  | Name of the social media platform, e.g. Google+ |
 

---

#### [Gtm](#Gtm)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | credentials | [GtmCredentials](#GtmCredentials)? |  yes  |  |
 | enabled | boolean? |  yes  | Shows whether GTM integration is enabled or disabled for the sales channel |
 

---

#### [GtmCredentials](#GtmCredentials)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | api_key | string? |  yes  | Secret credential API key for GTM |
 

---

#### [HomePageFeature](#HomePageFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | order_processing | boolean? |  yes  | Shows whether order processing is enabled or not enabled |
 

---

#### [InformationAddress](#InformationAddress)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address_line | [string]? |  yes  | Contact address of the sales channel |
 | city | string? |  yes  | Name of the city, e.g. Mumbai |
 | country | string? |  yes  | Name of the country, e.g. India |
 | loc | string? |  yes  | Co-ordinates of the location |
 | phone | [InformationPhone](#InformationPhone)? |  yes  |  |
 | pincode | number? |  yes  | 6-digit PIN Code of the city, e.g. 400001 |
 

---

#### [InformationPhone](#InformationPhone)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string? |  yes  | Country code for contact number, e.g. +91 (for India) |
 | number | string? |  yes  | 10-digit mobile number |
 

---

#### [InformationSupport](#InformationSupport)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | [string]? |  yes  |  |
 | phone | [string]? |  yes  |  |
 | timing | string? |  yes  | Working hours of support team, e.g. 9 AM to 9 PM |
 

---

#### [InstagramLink](#InstagramLink)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | icon | string? |  yes  | Hosted URL of social icon image shown on the website |
 | link | string? |  yes  | Web URL of brand's Instagram page |
 | title | string? |  yes  | Name of the social media platform, e.g. Instagram |
 

---

#### [Integration](#Integration)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | __v | number? |  yes  | Version key for tracking revisions. Default value is zero. |
 | _id | string? |  yes  | The unique identifier (24-digit Mongo Object ID) of the integration |
 | companies | [string]? |  yes  |  |
 | constants | string? |  yes  |  |
 | created_at | string? |  yes  | ISO 8601 timestamp of integration creation |
 | description | string? |  yes  | Basic description about the integration |
 | description_html | string? |  yes  | Basic HTML description about the integration |
 | icon | string? |  yes  | Hosted URL of the icon image |
 | meta | [[IntegrationMeta](#IntegrationMeta)]? |  yes  |  |
 | name | string? |  yes  | Name of the integration, e.g. SAP RBL Integration |
 | owner | string? |  yes  | The unique identifier (24-digit Mongo Object ID) of the user who created the integration |
 | secret | string? |  yes  | Randomly generated fixed-length string for opted integration. It is auto-generated. It would never change once it is generated. |
 | support | [string]? |  yes  |  |
 | token | string? |  yes  | Randomly generated fixed-length string for opted integration. It is auto-generated. It would never change once it is generated. |
 | updated_at | string? |  yes  | ISO 8601 timestamp of integration updation |
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
 | __v | number? |  yes  | Version key for tracking revisions. Default value is zero. |
 | _id | string? |  yes  | The unique identifier (24-digit Mongo Object ID) of the integration config |
 | created_at | string? |  yes  | ISO 8601 timestamp of integration config creation |
 | data | string? |  yes  | Schema data of the integration stored in key-value pairs |
 | integration | string? |  yes  | Integration id. Shows which integration you are enabling. |
 | last_patch | [[LastPatch](#LastPatch)]? |  yes  |  |
 | level | string? |  yes  | Shows for what level the integration is set up. It can be company level or store level. |
 | meta | [[IntegrationMeta](#IntegrationMeta)]? |  yes  |  |
 | opted | boolean? |  yes  | Shows this integration is opted or not opted for the current company |
 | permissions | [string]? |  yes  |  |
 | token | string? |  yes  | Randomly generated fixed-length string for opted integration. It is auto-generated. It would never change once it is generated. |
 | uid | number? |  yes  | It can be store uid or company uid. Depends on the level of integration. |
 | updated_at | string? |  yes  | ISO 8601 timestamp of integration config updation |
 

---

#### [IntegrationMeta](#IntegrationMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  | The unique identifier (24-digit Mongo Object ID) of the integration meta |
 | is_public | boolean? |  yes  |  |
 | name | string? |  yes  | Nmae of integration meta, e.g. price_level |
 | value | string? |  yes  | Value related to integration meta name, e.g. store |
 

---

#### [IntegrationOptIn](#IntegrationOptIn)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | __v | number? |  yes  | Version key for tracking revisions. Default value is zero. |
 | _id | string? |  yes  | The unique identifier (24-digit Mongo Object ID) of the opted integration |
 | companies | [string]? |  yes  |  |
 | constants | string? |  yes  |  |
 | created_at | string? |  yes  | ISO 8601 timestamp of integration creation |
 | description | string? |  yes  | Basic description about the opted integration |
 | description_html | string? |  yes  | Basic HTML description about the opted integration |
 | icon | string? |  yes  | Hosted URL of the icon image |
 | meta | [[IntegrationMeta](#IntegrationMeta)]? |  yes  |  |
 | name | string? |  yes  | Nmae of the opted integration, e.g. SAP RBL Integration |
 | owner | string? |  yes  | The unique identifier (24-digit Mongo Object ID) of the user who created the integration |
 | secret | string? |  yes  | Randomly generated fixed-length string for opted integration. It is auto-generated. It would never change once it is generated. |
 | support | [string]? |  yes  |  |
 | token | string? |  yes  | Randomly generated fixed-length string for opted integration. It is auto-generated. It would never change once it is generated. |
 | updated_at | string? |  yes  | ISO 8601 timestamp of integration updation |
 | validators | [Validators](#Validators)? |  yes  |  |
 

---

#### [InvalidPayloadRequest](#InvalidPayloadRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  | Error message when request body payload is improper |
 

---

#### [InventoryArticleAssignment](#InventoryArticleAssignment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | post_order_reassignment | boolean? |  yes  | Allow post order reassigment of article |
 | rules | [ArticleAssignmentRule](#ArticleAssignmentRule)? |  yes  |  |
 

---

#### [InventoryBrand](#InventoryBrand)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brands | [any]? |  yes  | List of brands |
 | criteria | string? |  yes  | All brands or specific (explicit) brands to be shown on the website |
 

---

#### [InventoryBrandRule](#InventoryBrandRule)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brands | [number]? |  yes  |  |
 | criteria | string? |  yes  | Whether all brands are enabled, or explicitly few brands in the inventory |
 

---

#### [InventoryCategory](#InventoryCategory)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | categories | [any]? |  yes  | List of categories whose products will be shown on the website |
 | criteria | string? |  yes  |  |
 

---

#### [InventoryDiscount](#InventoryDiscount)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | max | number? |  yes  | Maximum inventory discount |
 | min | number? |  yes  | Minimum inventory discount |
 

---

#### [InventoryPaymentConfig](#InventoryPaymentConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | mode_of_payment | string? |  yes  | Mode of payment for the inventory of sales channel. It is required and default value is null. |
 | source | string? |  yes  | Source of the payment mode for the inventory payment of sales channel. Default value is FYND. |
 

---

#### [InventoryPrice](#InventoryPrice)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | max | number? |  yes  | Maximum inventory price |
 | min | number? |  yes  | Minimum inventory price |
 

---

#### [InventoryStore](#InventoryStore)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | criteria | string? |  yes  | All stores or specific (explicit) stores to be shown on the website |
 | rules | [AppStoreRules](#AppStoreRules)? |  yes  |  |
 | stores | [any]? |  yes  | List of stores |
 

---

#### [InventoryStoreRule](#InventoryStoreRule)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | criteria | string? |  yes  | Whether all stores are enabled, or explicitly few stores in the inventory, or use brands and company filter. |
 | rules | [[StoreCriteriaRule](#StoreCriteriaRule)]? |  yes  | List of rules with company and brands uids. Used when critera is `filter`. |
 | stores | [number]? |  yes  | List of store uids. Used when critera is `explicit`. |
 

---

#### [InventoryValidator](#InventoryValidator)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | browser_script | string? |  yes  | Browser script for the inventory validator |
 | json_schema | [[JsonSchema](#JsonSchema)]? |  yes  |  |
 

---

#### [Ios](#Ios)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | api_key | string? |  yes  | Firebase secret credential API key for IOS |
 | application_id | string? |  yes  | Alphanumeric ID allotted to a sales channel application created within a business account |
 

---

#### [JsonSchema](#JsonSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display | string? |  yes  | Display text of the validator JSON schema. It will show in the UI. |
 | key | string? |  yes  | Key related to the display text of the validator JSON schema |
 | tooltip | string? |  yes  | Tooltip text for the UI of the validator JSON schema. It will show in the UI. |
 | type | string? |  yes  | Indicates the type of form field, e.g. Text, Dropdown. |
 

---

#### [LandingImage](#LandingImage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | aspect_ratio | string? |  yes  | Width-to-height ratio of landing image |
 | secure_url | string? |  yes  | URL where the landing image is hosted |
 

---

#### [LandingPageFeature](#LandingPageFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | continue_as_guest | boolean? |  yes  | Shows whether a guest can checkout from cart without logging in |
 | launch_page | [LaunchPage](#LaunchPage)? |  yes  |  |
 | login_btn_text | string? |  yes  | Shows the text displayed over the login button |
 | show_domain_textbox | boolean? |  yes  | Shows whether a textbox for entering domain is available |
 | show_register_btn | boolean? |  yes  | Shows whether register button is available in the login/landing page |
 

---

#### [LastPatch](#LastPatch)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | op | string? |  yes  |  |
 | path | string? |  yes  |  |
 | value | string? |  yes  | It can be inventory level or order level |
 

---

#### [LaunchPage](#LaunchPage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | page_type | string? |  yes  | Type of the launch page |
 | params | string? |  yes  | Launch page params. It can be nullable. |
 | query | string? |  yes  | Query related to launch page. It can be nullable. |
 

---

#### [LinkedInLink](#LinkedInLink)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | icon | string? |  yes  | Hosted URL of social icon image shown on the website |
 | link | string? |  yes  | Web URL of brand's LinkedIn channel |
 | title | string? |  yes  | Name of the social media platform, e.g. LinkedIn |
 

---

#### [Links](#Links)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | link | string? |  yes  | Web URL for redirecting to a related page |
 | title | string? |  yes  | Name of the related page or link |
 

---

#### [ListingPriceFeature](#ListingPriceFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | sort | string? |  yes  | Sorting of listing price with min or max value. Default value is min. |
 | value | string? |  yes  | Shows which price to display on PLP if one product has multiple prices (for each size), valid values are 'min', 'max', 'range'. Default value is range. |
 

---

#### [LoyaltyPointsConfig](#LoyaltyPointsConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | auto_apply | boolean? |  yes  | Allow auto apply of loyalty points |
 | enabled | boolean? |  yes  | Shows loyalty points is enabled or not enabled |
 

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
 | app_name | string? |  yes  | Name of the mobile app |
 | is_active | boolean? |  yes  | shows update in mobile app config is active or not |
 | landing_image | [LandingImage](#LandingImage)? |  yes  |  |
 | splash_image | [SplashImage](#SplashImage)? |  yes  |  |
 

---

#### [MobileAppConfiguration](#MobileAppConfiguration)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | __v | number? |  yes  | Version key for tracking revisions. Default value is zero. |
 | _id | string? |  yes  | The unique identifier (24-digit Mongo Object ID) for mobile application configuration |
 | app_name | string? |  yes  | Name of the mobile app |
 | application | string? |  yes  | Application ID of the current sales channel |
 | created_at | string? |  yes  | ISO 8601 timestamp of application configuration creation |
 | is_active | boolean? |  yes  | Indicates the availability of the mobile build |
 | landing_image | [LandingImage](#LandingImage)? |  yes  |  |
 | package_name | string? |  yes  | Shows bundle identifier if device platform is iOS, and directory of the app if device platform is Android |
 | platform_type | string? |  yes  | Device platform for which the mobile app was built, e.g. android, ios. |
 | splash_image | [SplashImage](#SplashImage)? |  yes  |  |
 | updated_at | string? |  yes  | ISO 8601 timestamp of last known modifications to the app build |
 

---

#### [Moengage](#Moengage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | credentials | [MoengageCredentials](#MoengageCredentials)? |  yes  |  |
 | enabled | boolean? |  yes  | Shows whether MoEngage integation is enabled or disabled for the sales channel |
 

---

#### [MoengageCredentials](#MoengageCredentials)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | app_id | string? |  yes  | APP ID provided by MoEngage to identify a specific app. The app_id for your MoEngage account is available on the MoEngage Dashboard. |
 

---

#### [NotFound](#NotFound)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  | Response message for not found |
 

---

#### [OptedApplicationResponse](#OptedApplicationResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  | The unique identifier (24-digit Mongo Object ID) of the other seller's sales channel |
 | company | [OptedCompany](#OptedCompany)? |  yes  |  |
 | description | string? |  yes  | Basic details about the other seller's sales channel |
 | domain | string? |  yes  | Domain URL of the other seller's sales channel |
 | name | string? |  yes  | Name of the other seller's sales channel |
 | opt_out_inventory | [OptOutInventory](#OptOutInventory)? |  yes  |  |
 | opted_inventory | [OptedInventory](#OptedInventory)? |  yes  |  |
 

---

#### [OptedCompany](#OptedCompany)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string? |  yes  | Name of the company opted by the other seller's sales channel in its inventory |
 | uid | number? |  yes  | Company UID opted by the other seller's sales channel in its inventory. It has unique value for the company. |
 

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
 | _id | string? |  yes  | The unique identifier of the opted inventory store |
 | address | [OptedStoreAddress](#OptedStoreAddress)? |  yes  |  |
 | company_id | number? |  yes  | Company ID of the opted inventory store |
 | display_name | string? |  yes  | Display name of the opted inventory store |
 | modified_on | string? |  yes  | ISO 8601 timestamp of opted inventory store creation |
 | name | string? |  yes  | Name of the inventory store opted by other seller's application |
 | store_code | string? |  yes  | Store code of the opted inventory store. It is unique for every store. |
 | store_type | string? |  yes  | Store type of the opted inventory store like warehouse, high_street, mall. |
 | uid | number? |  yes  | UID of opted inventory store |
 

---

#### [OptedStoreAddress](#OptedStoreAddress)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address1 | string? |  yes  | Address of the opted store |
 | address2 | string? |  yes  | Address of the opted store |
 | city | string? |  yes  | City of the opted store, e.g. Mumbai |
 | country | string? |  yes  | Country of the opted store, e.g. India |
 | lat_long | [StoreLatLong](#StoreLatLong)? |  yes  |  |
 | pincode | number? |  yes  | 6-digit PIN code of the opted store location |
 | state | string? |  yes  | State of the opted store, e.g. Maharashtra |
 

---

#### [OptedStoreIntegration](#OptedStoreIntegration)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | other_entity | [OtherEntity](#OtherEntity)? |  yes  |  |
 | other_integration | [IntegrationOptIn](#IntegrationOptIn)? |  yes  |  |
 | other_opted | boolean? |  yes  | Allow user to opt same store in other integration |
 

---

#### [OptOutInventory](#OptOutInventory)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | company | [number] |  no  | List of companies opted out from the inventory of other seller's application |
 | store | [number] |  no  | List of selling locations (stores) opted out from the inventory of other seller's application |
 

---

#### [OptType](#OptType)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display | string? |  yes  | Display text of opted type for inventory store |
 | key | string? |  yes  | Opted type of inventory store. It can be store or company. |
 

---

#### [OrderFeature](#OrderFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | buy_again | boolean? |  yes  | Allow buy again option for order. Default value is false. |
 

---

#### [OrderingStore](#OrderingStore)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  | The unique identifier (24-digit Mongo Object ID) of the ordering store |
 | address | [OptedStoreAddress](#OptedStoreAddress)? |  yes  |  |
 | code | string? |  yes  | Code of the ordering store (usually same as Store Code) |
 | display_name | string? |  yes  | Display name of the ordering store |
 | name | string? |  yes  | Store name of the ordering store |
 | pincode | number? |  yes  | 6-digit PIN Code  of the ordering store, e.g. 400001 |
 | store_code | string? |  yes  | Store code of the ordering store, e.g. MUM-102 |
 | store_type | string? |  yes  | Store type of the ordering store, e.g. high_street, mall, warehouse |
 | uid | number? |  yes  | Ordering store UID |
 

---

#### [OrderingStoreConfig](#OrderingStoreConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | deployment_meta | [DeploymentMeta](#DeploymentMeta)? |  yes  |  |
 

---

#### [OrderingStores](#OrderingStores)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | __v | number? |  yes  | Version key for tracking ordering stores. Default value is zero. |
 | _id | string? |  yes  | The unique identifier (24-digit Mongo Object ID) of the ordering store |
 | all_stores | boolean? |  yes  | Allow all stores of the ordering stores |
 | app | string? |  yes  | Alphanumeric ID allotted to an application (sales channel website) created within a business account |
 | deployed_stores | [number]? |  yes  |  |
 | enabled | boolean? |  yes  | Allow ordering stores for current sales channel |
 | items | [[OrderingStore](#OrderingStore)]? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 | type | string? |  yes  | For hard type delivery, store selection is compulsory. For soft type, delivery store selection is optional. |
 

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
 | browser_script | string? |  yes  | Browser script for the order validator |
 | json_schema | [[JsonSchema](#JsonSchema)]? |  yes  |  |
 

---

#### [OtherEntity](#OtherEntity)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | __v | number? |  yes  | Version key for tracking revisions. Default value is zero. |
 | _id | string? |  yes  | The unique identifier of the other entity for opted store integration |
 | created_at | string? |  yes  | ISO 8601 timestamp of other entity creation for opted store integration |
 | data | [OtherEntityData](#OtherEntityData)? |  yes  |  |
 | integration | string? |  yes  | Integration ID. Shows which integration you are enabling. |
 | last_patch | [[LastPatch](#LastPatch)]? |  yes  |  |
 | level | string? |  yes  | Indicates integration level. It can be company level or store level. |
 | meta | [string]? |  yes  |  |
 | opted | boolean? |  yes  | Allow other entity opted in integration |
 | permissions | [string]? |  yes  |  |
 | token | string? |  yes  | Randomly generated fixed-length string for opted integration. It is auto-generated. It would never change once it is generated. |
 | uid | number? |  yes  | It can be store uid or company uid. Depends on the level of integration. |
 | updated_at | string? |  yes  | ISO 8601 timestamp of other entity updation for opted store integration |
 

---

#### [OtherEntityData](#OtherEntityData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | article_identifier | string? |  yes  |  |
 

---

#### [OtherSellerApplication](#OtherSellerApplication)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  | The unique identifier (24-digit Mongo Object ID) of the other seller's sales channel |
 | company | [OtherSellerCompany](#OtherSellerCompany)? |  yes  |  |
 | description | string? |  yes  | Basic details about the other seller's sales channel |
 | domain | string? |  yes  | Domain URL of the other seller's sales channel |
 | name | string? |  yes  | Name of the other seller's sales channel |
 | opt_type | string? |  yes  | Inventory opted by the other seller's sales channel. It can be the current company or stores in the current company. |
 

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
 | name | string? |  yes  | Name of the seller company |
 | uid | number? |  yes  | Uid of the seller company |
 

---

#### [Page](#Page)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number? |  yes  | Current page number |
 | has_next | boolean? |  yes  | Next page is present or not |
 | has_previous | boolean? |  yes  | Previous page is present or not |
 | item_total | number? |  yes  | Total number of items to retrieve |
 | next_id | string? |  yes  | Next page ID |
 | size | number? |  yes  | The number of items to retrieve in each page. Default value is 10. |
 | type | string |  no  | Page type |
 

---

#### [PaymentModeConfig](#PaymentModeConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean? |  yes  | Shows if a given payment method is enabled or not, e.g. if 'nb' is enabled, customer can use NetBanking for payment. |
 

---

#### [PaymentSelectionLock](#PaymentSelectionLock)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | default_options | string? |  yes  | Shows default payment method, e.g. COD |
 | enabled | boolean? |  yes  | Shows whether payment mode is restricted to a specific option, e.g. 'HDFC Netbanking' |
 | payment_identifier | string? |  yes  | Payment method chosen from default options, e.g. COD |
 

---

#### [PcrFeature](#PcrFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | staff_selection | boolean? |  yes  | Allow staff selection. Default value is false. |
 

---

#### [PinterestLink](#PinterestLink)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | icon | string? |  yes  | Hosted URL of social icon image shown on the website |
 | link | string? |  yes  | Web URL of brand's Pinterest page |
 | title | string? |  yes  | Name of the social media platform, e.g. Pinterest |
 

---

#### [ProductDetailFeature](#ProductDetailFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | request_product | boolean? |  yes  | Indicates whether customers can request for a product. Default value is false. |
 | seller_selection | boolean? |  yes  | Shows whether the customers can choose the seller on PDP |
 | similar | [string]? |  yes  | Configuration to show similar products, other products from same seller, other products in same category, other products in same price range, etc. |
 | update_product_meta | boolean? |  yes  | Allow user to update product meta. Default value is true. |
 

---

#### [QrFeature](#QrFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application | boolean? |  yes  | Shows whether sharing of mobile app via QR code is allowed. Default value is false. |
 | collections | boolean? |  yes  | Shows whether sharing collection via QR code is allowed. Default value is false. |
 | products | boolean? |  yes  | Shows whether sharing product via QR code is allowed. Default value is false. |
 

---

#### [RegistrationPageFeature](#RegistrationPageFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | ask_store_address | boolean? |  yes  | Shows whether a form to collect the address of the store, should be displayed upon visiting the website |
 

---

#### [RevenueEngineFeature](#RevenueEngineFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean? |  yes  | Enable revenue engine. Default value is false. |
 

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
 | enabled | boolean? |  yes  | Shows whether Safetynet integration is enabled or disabled for the sales channel |
 

---

#### [SafetynetCredentials](#SafetynetCredentials)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | api_key | string? |  yes  | Secret credential API key for Safetynet. This API key is used for calling the methods of Safetynet APIs. |
 

---

#### [SecureUrl](#SecureUrl)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | secure_url | string? |  yes  | Hosted URL of the image |
 

---

#### [Segment](#Segment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | credentials | [SegmentCredentials](#SegmentCredentials)? |  yes  |  |
 | enabled | boolean? |  yes  | Shows whether Segment integration is enabled or disabled for the sales channel |
 

---

#### [SegmentCredentials](#SegmentCredentials)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | write_key | string? |  yes  | The unique identifier for a source that tells Segment from which source data is coming from, to which workspace the data belongs, and which destinations should receive the data. |
 

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
 | aspect_ratio | string? |  yes  | Width-to-height ratio of splash image |
 | secure_url | string? |  yes  | URL where the splash image is hosted |
 

---

#### [StoreByBrandsRequest](#StoreByBrandsRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brands | number |  no  | Brand UID |
 | company_id | number? |  yes  | Current company ID for current company stores only. Don't send in case cross-selling (franchise) is enabled. |
 | search_text | string? |  yes  | Search store by its name or store code |
 

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
 | brands | [number]? |  yes  | List of brand UID |
 | companies | [number]? |  yes  | List of company UID |
 

---

#### [StoreLatLong](#StoreLatLong)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | coordinates | [number]? |  yes  |  |
 | type | string? |  yes  | Coordinates type of the opted store |
 

---

#### [StorePriority](#StorePriority)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean? |  yes  | Shows store priority is enabled or disabled for assignment of article |
 | storetype_order | [any]? |  yes  | List of store types for article assignment e.g. warehouse, mall, highstreet |
 

---

#### [StorePriorityRule](#StorePriorityRule)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean? |  yes  | Shows store priority is enabled or not enabled for the article assignment. |
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
 | browser_script | string? |  yes  | Browser script for the store validator |
 | json_schema | [[JsonSchema](#JsonSchema)]? |  yes  |  |
 

---

#### [SuccessMessageResponse](#SuccessMessageResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  | Success message shown to the user (in a string format) |
 | success | boolean? |  yes  | Shows whether domain was deleted successfully |
 

---

#### [TokenResponse](#TokenResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | __v | number? |  yes  | Version key for tracking revisions. Default value is zero. |
 | _id | string? |  yes  | The unique identifier (24-digit Mongo Object ID) of the token |
 | application | string? |  yes  | Alphanumeric ID allotted to the current application created within the current business account |
 | created_at | string? |  yes  | ISO 8601 timestamp of token creation |
 | tokens | [Tokens](#Tokens)? |  yes  |  |
 | updated_at | string? |  yes  | ISO 8601 timestamp of token updation |
 

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
 | icon | string? |  yes  | Hosted URL of social icon image shown on the website |
 | link | string? |  yes  | Web URL of brand's Twitter account |
 | title | string? |  yes  | Name of the social media platform, e.g. Twitter |
 

---

#### [UnhandledError](#UnhandledError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 

---

#### [UpdateDomain](#UpdateDomain)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  | The unique identifier (24-digit Mongo Object ID) of the domain |
 | is_primary | boolean? |  yes  | Domain is primary or not (indicates if the domain has been made the main URL of the sales channel) |
 | is_shortlink | boolean? |  yes  | Indicates if the domain is a short link domain (short URL e.g. bit.ly) |
 | name | string? |  yes  | Full domain name, e.g. zenz.com |
 | verified | boolean? |  yes  | Domain is verified or not (indicates if A records and TXT records are correct) |
 

---

#### [UpdateDomainTypeRequest](#UpdateDomainTypeRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action | string? |  yes  | Shows domain is made primary domain for the sales channel or shorlink is created for the sales channel domain |
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
 | active | boolean? |  yes  | Current email is active or not active |
 | email | string? |  yes  | Email address of the user |
 | primary | boolean? |  yes  | Indicates current email is primay email or not primary email of user |
 | verified | boolean? |  yes  | Indicates current email is verified email or not verified email |
 

---

#### [UserPhoneNumber](#UserPhoneNumber)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | boolean? |  yes  | Current phone number is active or not active |
 | country_code | number? |  yes  | Country code, e.g. +91 |
 | phone | string? |  yes  | Phone number of the user |
 | primary | boolean? |  yes  | Indicates current phone number is primay  or not primary of user |
 | verified | boolean? |  yes  | Indicates current phone number is verified or not verified |
 

---

#### [ValidationFailedResponse](#ValidationFailedResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  | Response message for failed validation |
 

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
 | icon | string? |  yes  | Hosted URL of social icon image shown on the website |
 | link | string? |  yes  | Web URL of brand's Vimeo channel |
 | title | string? |  yes  | Name of the video hosting platform, e.g. Vimeo |
 

---

#### [YoutubeLink](#YoutubeLink)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | icon | string? |  yes  | Hosted URL of social icon image shown on the website |
 | link | string? |  yes  | Web URL of brand's YouTube channel |
 | title | string? |  yes  | Name of the social media platform, e.g. YouTube |
 

---




