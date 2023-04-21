




##### [Back to Application docs](./README.md)

## Configuration Methods
Application configuration apis

* [getAppCurrencies](#getappcurrencies)
* [getAppStaffList](#getappstafflist)
* [getAppStaffs](#getappstaffs)
* [getApplication](#getapplication)
* [getBasicDetails](#getbasicdetails)
* [getContactInfo](#getcontactinfo)
* [getCurrencies](#getcurrencies)
* [getCurrencyById](#getcurrencybyid)
* [getFeatures](#getfeatures)
* [getIntegrationTokens](#getintegrationtokens)
* [getLanguages](#getlanguages)
* [getOrderingStoreCookie](#getorderingstorecookie)
* [getOrderingStores](#getorderingstores)
* [getOwnerInfo](#getownerinfo)
* [getStoreDetailById](#getstoredetailbyid)
* [removeOrderingStoreCookie](#removeorderingstorecookie)



## Methods with example and description




### getAppCurrencies
Get currencies enabled in the application



```javascript
// Promise
const promise = applicationClient.configuration.getAppCurrencies();

// Async/Await
const data = await applicationClient.configuration.getAppCurrencies();
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


### getAppStaffList
Get a list of staff.



```javascript
// Promise
const promise = applicationClient.configuration.getAppStaffList({  pageNo : value,
 pageSize : value,
 orderIncent : value,
 orderingStore : value,
 user : value,
 userName : value });

// Async/Await
const data = await applicationClient.configuration.getAppStaffList({  pageNo : value,
 pageSize : value,
 orderIncent : value,
 orderingStore : value,
 user : value,
 userName : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNo | number | no |  |    
| pageSize | number | no |  |    
| orderIncent | boolean | no | This is a boolean value. Select `true` to retrieve the staff members eligible for getting incentives on orders. |    
| orderingStore | number | no | ID of the ordering store. Helps in retrieving staff members working at a particular ordering store. |    
| user | string | no | Mongo ID of the staff. Helps in retrieving the details of a particular staff member. |    
| userName | string | no | user name of the member |  



Use this API to get a list of staff including the names, employee code, incentive status, assigned ordering stores, and title of each staff added to the application.

*Returned Response:*




[AppStaffListResponse](#AppStaffListResponse)

Success. Check the example shown below or refer `AppStaffListResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getAppStaffs
Get a list of staff.



```javascript
// Promise
const promise = applicationClient.configuration.getAppStaffs({  orderIncent : value,
 orderingStore : value,
 user : value });

// Async/Await
const data = await applicationClient.configuration.getAppStaffs({  orderIncent : value,
 orderingStore : value,
 user : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| orderIncent | boolean | no | This is a boolean value. Select `true` to retrieve the staff members eligible for getting incentives on orders. |    
| orderingStore | number | no | ID of the ordering store. Helps in retrieving staff members working at a particular ordering store. |    
| user | string | no | Mongo ID of the staff. Helps in retrieving the details of a particular staff member. |  



Use this API to get a list of staff including the names, employee code, incentive status, assigned ordering stores, and title of each staff added to the application.

*Returned Response:*




[AppStaffResponse](#AppStaffResponse)

Success. Check the example shown below or refer `AppStaffResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getApplication
Get current application details



```javascript
// Promise
const promise = applicationClient.configuration.getApplication();

// Async/Await
const data = await applicationClient.configuration.getApplication();
```






Use this API to get the current application details which includes configurations that indicate the status of the website, domain, ID, tokens, images, etc.

*Returned Response:*




[Application](#Application)

Success. Check the example shown below or refer `Application` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "website": {
    "enabled": true,
    "basepath": "/"
  },
  "cors": {
    "domains": []
  },
  "auth": {
    "enabled": false
  },
  "description": "Uniket B2B - India's Fastest Growing Retail Store - Aapki Badhti Dukaan",
  "channel_type": "uniket",
  "cache_ttl": -1,
  "internal": false,
  "is_active": true,
  "_id": "000000000000000000000004",
  "name": "Uniket B2B",
  "owner": "5e71a60dc671daffd81992ea",
  "company_id": 1,
  "token": "iTNjY_yAI",
  "redirections": [],
  "meta": [],
  "created_at": "2019-12-26T13:22:23.619Z",
  "modified_at": "2020-12-02T05:49:41.610Z",
  "__v": 29,
  "banner": {
    "secure_url": "https://hdn-1.addsale.com/x0/company/1/applications/000000000000000000000004/application/pictures/landscape-banner/original/uSwlNpygq-Uniket-B2B.png"
  },
  "logo": {
    "secure_url": "https://hdn-1.addsale.com/x0/company/1/applications/000000000000000000000004/application/pictures/free-logo/original/oEf3SQjda-Uniket-B2B.png"
  },
  "favicon": {
    "secure_url": "https://hdn-1.addsale.com/x0/company/1/applications/000000000000000000000004/application/pictures/favicon/original/y3h6SSlY5-Uniket-B2B.png"
  },
  "domains": [
    {
      "verified": true,
      "is_primary": true,
      "is_shortlink": true,
      "_id": "5eb1177748312a3bd55d0f1e",
      "name": "uniket.hostx0.de"
    },
    {
      "verified": true,
      "is_primary": false,
      "is_shortlink": false,
      "_id": "5f0858c5f86e00cd42dccc8d",
      "name": "jd.hostx0.de"
    }
  ],
  "app_type": "live",
  "mobile_logo": {
    "secure_url": "https://hdn-1.addsale.com/x0/company/1/applications/000000000000000000000004/application/pictures/free-logo/original/oEf3SQjda-Uniket-B2B.png"
  },
  "domain": {
    "verified": true,
    "is_primary": true,
    "is_shortlink": true,
    "_id": "5eb1177748312a3bd55d0f1e",
    "name": "uniket.hostx0.de"
  },
  "id": "000000000000000000000004"
}
```
</details>









---


### getBasicDetails
Get basic application details



```javascript
// Promise
const promise = applicationClient.configuration.getBasicDetails();

// Async/Await
const data = await applicationClient.configuration.getBasicDetails();
```






Use this API to retrieve only the basic details of the application which includes channel name, description, banner, logo, favicon, domain details, etc.

*Returned Response:*




[ApplicationDetail](#ApplicationDetail)

Success. Check the example shown below or refer `ApplicationDetail` for more details.




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


### getContactInfo
Get application information



```javascript
// Promise
const promise = applicationClient.configuration.getContactInfo();

// Async/Await
const data = await applicationClient.configuration.getContactInfo();
```






Use this API to retrieve information about the social links, address and contact information of the company/seller/brand operating the application.

*Returned Response:*




[ApplicationInformation](#ApplicationInformation)

Success. Check the example shown below or refer `ApplicationAboutResponse` for more details.




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


### getCurrencies
Get all currencies list



```javascript
// Promise
const promise = applicationClient.configuration.getCurrencies();

// Async/Await
const data = await applicationClient.configuration.getCurrencies();
```






Use this API to get a list of currencies available. Moreover, get the name, code, symbol, and the decimal digits of the currencies.

*Returned Response:*




[CurrenciesResponse](#CurrenciesResponse)

Success. Check the example shown below or refer `CurrenciesResponse` for more details.




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


### getCurrencyById
Get currency by its ID



```javascript
// Promise
const promise = applicationClient.configuration.getCurrencyById({  id : value });

// Async/Await
const data = await applicationClient.configuration.getCurrencyById({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | Object ID assigned to the currency |  



Use this API to retrieve a currency using its ID.

*Returned Response:*




[Currency](#Currency)

Success. Check the example shown below or refer `Currency` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "_id": "5ec75d11f7bfb501d88f3559",
  "is_active": true,
  "name": "Gold Ounce",
  "code": "XAU",
  "created_at": "2020-05-22T05:03:13.429Z",
  "modified_at": "2020-06-05T09:12:04.248Z",
  "decimal_digits": null,
  "symbol": null
}
```
</details>









---


### getFeatures
Get features of application



```javascript
// Promise
const promise = applicationClient.configuration.getFeatures();

// Async/Await
const data = await applicationClient.configuration.getFeatures();
```






Use this API to retrieve the configuration of features such as product detail, landing page, options in the login/registration screen, communication opt-in, cart options and many more.

*Returned Response:*




[AppFeatureResponse](#AppFeatureResponse)

Success. Check the example shown below or refer `AppFeatureResponse` for more details.




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
      "google_map": true
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


### getIntegrationTokens
Get integration tokens



```javascript
// Promise
const promise = applicationClient.configuration.getIntegrationTokens();

// Async/Await
const data = await applicationClient.configuration.getIntegrationTokens();
```






Use this API to retrieve the tokens used while integrating Firebase, MoEngage, Segment, GTM, Freshchat, Safetynet, Google Map and Facebook. **Note** - Token values are encrypted with AES encryption using a secret key. Kindly reach out to the developers for obtaining the secret key.

*Returned Response:*




[AppTokenResponse](#AppTokenResponse)

Success. Check the example shown below or refer `AppTokenResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "tokens": {
    "firebase": {
      "credentials": {
        "project_id": "",
        "gcm_sender_id": "",
        "application_id": "",
        "api_key": ""
      },
      "enabled": false
    },
    "moengage": {
      "credentials": {
        "app_id": ""
      },
      "enabled": false
    },
    "segment": {
      "credentials": {
        "write_key": "U2FsdGVkX18E920z+xtaD+GnGWoK/5SNxu61phXf6/o="
      },
      "enabled": false
    },
    "gtm": {
      "credentials": {
        "api_key": ""
      },
      "enabled": false
    },
    "freshchat": {
      "credentials": {
        "app_id": "U2FsdGVkX19+Egjfy8alIB4S+n2IQEXz2X4yxzimxbGzq9M5+iFsvGjrBAyQrDZ/iIXgWQyWOFRHmf9xhFGajQ==",
        "app_key": "U2FsdGVkX18OydYSvUBRKJDsLD1KCcwK6+jJVGma4Ck2PVwOv6BW5vyiM2sZ4kEpHbRV38KBPZPqlx3EfZd6mw=="
      },
      "enabled": true
    },
    "safetynet": {
      "credentials": {
        "api_key": "U2FsdGVkX1/Ex0BXvB16B81dwWIfVK8LPwexMMbVC3/nB9Y5n4stcnOMUCDalDs8Z92MecOQKydWg+E17QfZ4Q=="
      },
      "enabled": true
    },
    "fynd_rewards": {
      "credentials": {
        "public_key": "U2FsdGVkX1/C7x0hybxKPpWSMYBEKukQCVjnm7wfW3lrTJPmcr06xvLzVatPQJTKXeXvay0rdvcXuHlp8n/VAX7v9Usobmp1znadnPWt07GOvq5aPK9zDlg05tb+TX8Wx0q2rVonRK0Q6ZyMcn6Oy+Z812TpRAlcU1AmSrDtl/PMjuH1rSRTxKJLD0HzXk9zPl2M6GOKmgzjpHD4ZmtRSfJmm/h+qbZZ4AuD9upTbJzDm/pcp4S4cYu9rSV31JpOtAkrCxZFzCT8seWKa2eU8VdleRltwF5DO1x8Pny/hKNmhrUqxdkevY6lm4aEQjThA/EeBv1UPq52EFDteXLsZ6yBXyNAxcFNuPupour+K8hi0nfgbd/fsFqu5NUBOwz0hsqQh9OsTGt7SdiIyMSQgCttphaqhBbJ926UlG9d/O1W1u+i9rn7pECcH1eyUYlsNbYqghciz9pTrfRdqA8AIa2j7H/3Lxq37arxZCIDlTgl+Kk/8QUTsTefk+seGZsyiDyIkxW+FcmHBZLr3y85ST23szWSnyweV2hQHtPWnCE="
      }
    },
    "auth": {
      "google": {
        "app_id": "U2FsdGVkX19ZkUS8HAnz17Sbcixaj0N4xDcaxztzAPdkxsc2i56kuEL+hVDv5z47HjiY4jOFN0zd5HbO9vf5/adwr6L8QQVEmz1BEEGEze13a5PgONGZlfQkxeuQLBT9"
      },
      "facebook": {
        "app_id": "U2FsdGVkX1/kPjoWmEvESc276Ect4VZmAFVTkQKKjsxgk6LXWjj73vPrBsnJyPpR"
      },
      "accountkit": {
        "app_id": ""
      }
    },
    "google_map": {
      "credentials": {
        "api_key": "U2FsdGVkX1+5tBH/3lREPiDwVukCS/Q2ftu/CYD9RdLYK8hGO/XJfrs2zpoGDKCJBhgTDRESItRKR7Lt/w+zeQ=="
      }
    }
  },
  "_id": "5e285cb1df7e5b1421d5f840",
  "application": "000000000000000000000004",
  "created_at": "2020-01-22T14:31:13.192Z",
  "modified_at": "2020-05-01T04:14:42.117Z",
  "__v": 0
}
```
</details>









---


### getLanguages
Get list of languages



```javascript
// Promise
const promise = applicationClient.configuration.getLanguages();

// Async/Await
const data = await applicationClient.configuration.getLanguages();
```






Use this API to get a list of languages supported in the application.

*Returned Response:*




[LanguageResponse](#LanguageResponse)

Success. Check the example shown below or refer `LanguageResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "items": [
    {
      "name": "हिन्दी",
      "code": "hi-IN"
    },
    {
      "name": "English",
      "code": "en-IN"
    },
    {
      "name": "عربى",
      "code": "ar-AE"
    }
  ]
}
```
</details>









---


### getOrderingStoreCookie
Get an Ordering Store signed cookie on selection of ordering store.



```javascript
// Promise
const promise = applicationClient.configuration.getOrderingStoreCookie({  body : value });

// Async/Await
const data = await applicationClient.configuration.getOrderingStoreCookie({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [OrderingStoreSelectRequest](#OrderingStoreSelectRequest) | yes | Request body |


Use this API to get an Ordering Store signed cookie upon selecting an ordering store. This will be used by the cart service to verify a coupon against the selected ordering store in cart.

*Returned Response:*




[SuccessMessageResponse](#SuccessMessageResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getOrderingStores
Get deployment stores



```javascript
// Promise
const promise = applicationClient.configuration.getOrderingStores({  pageNo : value,
 pageSize : value,
 q : value });

// Async/Await
const data = await applicationClient.configuration.getOrderingStores({  pageNo : value,
 pageSize : value,
 q : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNo | number | no | The page number to navigate through the given set of results. Default value is 1. |    
| pageSize | number | no | The number of items to retrieve in each page. Default value is 10. |    
| q | string | no | Store code or name of the ordering store. |  



Use this API to retrieve the details of all the deployment stores (the selling locations where the application will be utilized for placing orders).

*Returned Response:*




[OrderingStores](#OrderingStores)

Success. Check the example shown below or refer `OrderingStores` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getOwnerInfo
Get application, owner and seller information



```javascript
// Promise
const promise = applicationClient.configuration.getOwnerInfo();

// Async/Await
const data = await applicationClient.configuration.getOwnerInfo();
```






Use this API to get the current application details which includes channel name, description, banner, logo, favicon, domain details, etc. This API also retrieves the seller and owner information such as address, email address, and phone number.

*Returned Response:*




[ApplicationAboutResponse](#ApplicationAboutResponse)

Success. Check the example shown below or refer `ApplicationAboutResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "application_info": {
    "domains": [
      {
        "verified": true,
        "name": "uniket-testing.addsale.link",
        "custom": false,
        "is_primary": true
      }
    ],
    "website": {
      "enabled": true,
      "basepath": "/"
    },
    "cors": {
      "domains": []
    },
    "description": "R-City Mall,Ghatkoper East,Mumbai",
    "is_active": true,
    "_id": "5cd3db5e9d692cfe5302a7ba",
    "name": "Shivam Clothing Store",
    "meta": [
      {
        "name": "tes",
        "value": "test"
      }
    ],
    "token": "xOfcP-aYE",
    "secret": "",
    "created_at": "2019-05-09T07:48:46.218Z",
    "banner": {
      "secure_url": "https://res.cloudinary.com/jkvora/image/upload/v1561551809/fqt2djkddoe2yjjlln2h.png"
    },
    "logo": {
      "secure_url": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1577513094/addsale/applications/app_5cd3db5e9d692cfe5302a7ba/media/store/logo/ayrkk2uzfknst2ohluzc.png"
    },
    "id": "5cd3db5e9d692cfe5302a7ba",
    "company_info": {
      "_id": "5da4274a723af4000188a66c",
      "uid": 873,
      "created_on": "2019-10-14T07:44:10.391Z",
      "is_active": true,
      "name": "SAPPER LIFESTYLE PRIVATE LIMITED",
      "addresses": [
        {
          "pincode": 110042,
          "address1": "412, SISODIA MOHALLA BADALI VILLAGE",
          "city": "NEW DELHI",
          "state": "DELHI",
          "country": "INDIA",
          "address_type": "registered"
        },
        {
          "pincode": 110042,
          "address1": "412, SISODIA MOHALLA BADALI VILLAGE",
          "city": "NEW DELHI",
          "state": "DELHI",
          "country": "INDIA",
          "address_type": "office"
        }
      ],
      "notification_emails": [
        "ecom.sapperlifestyle@f2fretail.com"
      ]
    },
    "owner_info": {
      "_id": "5c77921fa1bf7d8695ed57fd",
      "emails": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "email": "abc@test.com"
        },
        {
          "active": true,
          "primary": false,
          "verified": true,
          "email": "abc@test.com"
        },
        {
          "active": true,
          "primary": false,
          "verified": true,
          "email": "abc@test.com"
        }
      ],
      "phone_numbers": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "country_code": 91,
          "phone": "9408282323"
        }
      ],
      "first_name": "Jalak",
      "last_name": "Vora",
      "profile_pic": ""
    }
  }
}
```
</details>









---


### getStoreDetailById
Get ordering store details



```javascript
// Promise
const promise = applicationClient.configuration.getStoreDetailById({  storeId : value });

// Async/Await
const data = await applicationClient.configuration.getStoreDetailById({  storeId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| storeId | number | yes | Store uid |  



Use this API to retrieve the details of given stores uid (the selling locations where the application will be utilized for placing orders).

*Returned Response:*




[OrderingStore](#OrderingStore)

Success. Check the example shown below or refer `OrderingStore` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "uid": 1060,
  "name": "THE MANDHANA PARK KAMLANAGAR DELHI",
  "pincode": 110007,
  "store_code": "MRVLB22",
  "code": "MRVLB22",
  "display_name": "Kamla Nagar",
  "store_type": "mall"
}
```
</details>









---


### removeOrderingStoreCookie
Unset the Ordering Store signed cookie.



```javascript
// Promise
const promise = applicationClient.configuration.removeOrderingStoreCookie();

// Async/Await
const data = await applicationClient.configuration.removeOrderingStoreCookie();
```






Use this API to unset the Ordering Store cookie upon changing the sales channel, by its domain URL, in the Universal Fynd Store app.

*Returned Response:*




[SuccessMessageResponse](#SuccessMessageResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

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

#### [AppCurrencyResponse](#AppCurrencyResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application | string? |  yes  |  |
 | default_currency | [DefaultCurrency](#DefaultCurrency)? |  yes  |  |
 | supported_currency | [[Currency](#Currency)]? |  yes  |  |
 

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
 | token | string? |  yes  |  |
 | updated_at | string? |  yes  |  |
 | website | [ApplicationWebsite](#ApplicationWebsite)? |  yes  |  |
 

---

#### [ApplicationAboutResponse](#ApplicationAboutResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application_info | [ApplicationInfo](#ApplicationInfo)? |  yes  |  |
 | company_info | [CompanyInfo](#CompanyInfo)? |  yes  |  |
 | owner_info | [OwnerInfo](#OwnerInfo)? |  yes  |  |
 

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
 | banner | [SecureUrl](#SecureUrl) |  no  |  |
 | description | string |  no  |  |
 | domain | [Domain](#Domain)? |  yes  |  |
 | domains | [[Domain](#Domain)]? |  yes  |  |
 | favicon | [SecureUrl](#SecureUrl) |  no  |  |
 | logo | [SecureUrl](#SecureUrl) |  no  |  |
 | mobile_logo | [SecureUrl](#SecureUrl) |  no  |  |
 | name | string |  no  |  |
 

---

#### [ApplicationInfo](#ApplicationInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | banner | [SecureUrl](#SecureUrl)? |  yes  |  |
 | cors | [ApplicationCors](#ApplicationCors)? |  yes  |  |
 | created_at | string? |  yes  |  |
 | description | string? |  yes  |  |
 | domain | [Domain](#Domain)? |  yes  |  |
 | is_active | boolean? |  yes  |  |
 | logo | [SecureUrl](#SecureUrl)? |  yes  |  |
 | meta | [ApplicationMeta](#ApplicationMeta)? |  yes  |  |
 | name | string? |  yes  |  |
 | secret | string? |  yes  |  |
 | token | string? |  yes  |  |
 | website | [ApplicationWebsite](#ApplicationWebsite)? |  yes  |  |
 

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

#### [ApplicationVersionRequest](#ApplicationVersionRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string? |  yes  |  |
 | name | string |  no  |  |
 | namespace | string? |  yes  |  |
 | token | string? |  yes  |  |
 | version | string |  no  |  |
 

---

#### [ApplicationWebsite](#ApplicationWebsite)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | basepath | string? |  yes  |  |
 | enabled | boolean? |  yes  |  |
 

---

#### [AppStaff](#AppStaff)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | application | string? |  yes  |  |
 | employee_code | string? |  yes  |  |
 | first_name | string? |  yes  |  |
 | last_name | string? |  yes  |  |
 | order_incent | boolean? |  yes  |  |
 | profile_pic_url | string? |  yes  |  |
 | stores | [number]? |  yes  |  |
 | title | string? |  yes  |  |
 | user | string? |  yes  |  |
 

---

#### [AppStaffListResponse](#AppStaffListResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[AppStaff](#AppStaff)]? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 

---

#### [AppStaffResponse](#AppStaffResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | staff_users | [[AppStaff](#AppStaff)]? |  yes  |  |
 

---

#### [AppTokenResponse](#AppTokenResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | __v | number? |  yes  |  |
 | _id | string? |  yes  |  |
 | application | string? |  yes  |  |
 | created_at | string? |  yes  |  |
 | tokens | [Tokens](#Tokens)? |  yes  |  |
 | updated_at | string? |  yes  |  |
 

---

#### [AppVersionRequest](#AppVersionRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application | [ApplicationVersionRequest](#ApplicationVersionRequest) |  no  |  |
 | device | [Device](#Device) |  no  |  |
 | locale | string? |  yes  |  |
 | timezone | string? |  yes  |  |
 

---

#### [ArticleAssignmentRule](#ArticleAssignmentRule)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | store_priority | [StorePriorityRule](#StorePriorityRule)? |  yes  |  |
 

---

#### [BlogLink](#BlogLink)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | icon | string? |  yes  |  |
 | link | string? |  yes  |  |
 | title | string? |  yes  |  |
 

---

#### [BusinessHighlights](#BusinessHighlights)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | icon | string? |  yes  |  |
 | sub_title | string? |  yes  |  |
 | title | string? |  yes  |  |
 

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

#### [CommunicationOptinDialogFeature](#CommunicationOptinDialogFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | visibility | boolean? |  yes  |  |
 

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

#### [CompanyInfo](#CompanyInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | addresses | [[CompanyAboutAddress](#CompanyAboutAddress)]? |  yes  |  |
 | created_on | string? |  yes  |  |
 | is_active | boolean? |  yes  |  |
 | name | string? |  yes  |  |
 | notification_emails | [string]? |  yes  |  |
 | uid | number? |  yes  |  |
 

---

#### [CompareProductsFeature](#CompareProductsFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean? |  yes  |  |
 

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

#### [DeploymentStoreSelectionFeature](#DeploymentStoreSelectionFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [Device](#Device)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | build | number? |  yes  |  |
 | model | string? |  yes  |  |
 | os | [OS](#OS) |  no  |  |
 

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
 | phone | [InformationPhone](#InformationPhone)? |  yes  |  |
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

#### [InventoryBrandRule](#InventoryBrandRule)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brands | [number]? |  yes  | Brand uids in case of explicit criteria |
 | criteria | string? |  yes  | Whether enable all or explicitly few brands as inventory |
 

---

#### [InventoryPaymentConfig](#InventoryPaymentConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | mode_of_payment | string? |  yes  |  |
 | source | string? |  yes  |  |
 

---

#### [InventoryStoreRule](#InventoryStoreRule)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | criteria | string? |  yes  | Whether enable all or explicitly few stores or use filter of brands and company as inventory stores |
 | rules | [[StoreCriteriaRule](#StoreCriteriaRule)]? |  yes  | List of rules with company and brands uids. Used when critera is `filter` |
 | stores | [number]? |  yes  | List of store uids. Used when critera is `explicit` |
 

---

#### [Ios](#Ios)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | api_key | string? |  yes  |  |
 | application_id | string? |  yes  |  |
 

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

#### [LanguageResponse](#LanguageResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[SupportedLanguage](#SupportedLanguage)]? |  yes  |  |
 

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

#### [OrderingStoreSelect](#OrderingStoreSelect)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | uid | number |  no  | store uid |
 

---

#### [OrderingStoreSelectRequest](#OrderingStoreSelectRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | ordering_store | [OrderingStoreSelect](#OrderingStoreSelect) |  no  |  |
 

---

#### [OrderingStoresResponse](#OrderingStoresResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[OrderingStore](#OrderingStore)]? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 

---

#### [OS](#OS)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | version | string? |  yes  |  |
 

---

#### [OwnerInfo](#OwnerInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | emails | [[UserEmail](#UserEmail)]? |  yes  |  |
 | first_name | string? |  yes  |  |
 | last_name | string? |  yes  |  |
 | phone_numbers | [[UserPhoneNumber](#UserPhoneNumber)]? |  yes  |  |
 | profile_pic | string? |  yes  |  |
 

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

#### [StorePriorityRule](#StorePriorityRule)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean? |  yes  |  |
 | storetype_order | [string]? |  yes  |  |
 

---

#### [SuccessMessageResponse](#SuccessMessageResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 

---

#### [SupportedLanguage](#SupportedLanguage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string? |  yes  |  |
 | name | string? |  yes  |  |
 

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

#### [UpdateDialog](#UpdateDialog)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | interval | number? |  yes  |  |
 | type | string? |  yes  |  |
 

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




