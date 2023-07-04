




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
 user : value });

// Async/Await
const data = await applicationClient.configuration.getAppStaffList({  pageNo : value,
 pageSize : value,
 orderIncent : value,
 orderingStore : value,
 user : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNo | number | no |  |    
| pageSize | number | no |  |    
| orderIncent | boolean | no | This is a boolean value. Select `true` to retrieve the staff members eligible for getting incentives on orders. |    
| orderingStore | number | no | ID of the ordering store. Helps in retrieving staff members working at a particular ordering store. |    
| user | string | no | Mongo ID of the staff. Helps in retrieving the details of a particular staff member. |  



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
Get current sales channel details



```javascript
// Promise
const promise = applicationClient.configuration.getApplication();

// Async/Await
const data = await applicationClient.configuration.getApplication();
```






Use this API to get the current sales channel details which includes configurations that indicate the status of the website, domain, ID, tokens, images, etc.

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
Get basic details of the application



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






Use this API to get a list of languages supported in the application

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
{
  "message": "success"
}
```
</details>









---


### getOrderingStores
Get all deployment stores



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
Get sales channel, owner and seller information



```javascript
// Promise
const promise = applicationClient.configuration.getOwnerInfo();

// Async/Await
const data = await applicationClient.configuration.getOwnerInfo();
```






Use this API to get the current sales channel details which includes channel name, description, banner, logo, favicon, domain details, etc. This API also retrieves the seller and owner information such as address, email address, and phone number.

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
{
  "message": "success"
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

#### [AppCurrencyResponse](#AppCurrencyResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application | string? |  yes  | Alphanumeric ID allotted to an application (sales channel website) created within a business account |
 | default_currency | [DefaultCurrency](#DefaultCurrency)? |  yes  |  |
 | supported_currency | [[Currency](#Currency)]? |  yes  |  |
 

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

#### [ApplicationInfo](#ApplicationInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  | The unique identifier (24-digit Mongo Object ID) of application information |
 | banner | [SecureUrl](#SecureUrl)? |  yes  |  |
 | cors | [ApplicationCors](#ApplicationCors)? |  yes  |  |
 | created_at | string? |  yes  | ISO 8601 timestamp of sales channel information creation |
 | description | string? |  yes  | It contains details information about the sales channel |
 | domain | [Domain](#Domain)? |  yes  |  |
 | is_active | boolean? |  yes  | Indicates whether sales channel is active or not active |
 | logo | [SecureUrl](#SecureUrl)? |  yes  |  |
 | meta | [ApplicationMeta](#ApplicationMeta)? |  yes  |  |
 | name | string? |  yes  | Name of the sales channel, e.g. Zenz Fashion |
 | secret | string? |  yes  | Random generated fix length string for sales channel. It is required and auto-generated. |
 | token | string? |  yes  | Random generated fix length string for sales channel. It is required and auto-generated. |
 | website | [ApplicationWebsite](#ApplicationWebsite)? |  yes  |  |
 

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
 | basepath | string? |  yes  | Base path for the current sales channel website |
 | enabled | boolean? |  yes  | Shows whether sales channel website URL is enabled or not |
 

---

#### [AppStaff](#AppStaff)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  | The unique identifier for the sales channel staff member |
 | application | string? |  yes  | The unique identifier (24-digit Mongo Object ID) of the current sales channel |
 | employee_code | string? |  yes  | Employee code of sales channel staff member. It has unique value. |
 | first_name | string? |  yes  | First name the staff member |
 | last_name | string? |  yes  | Last name the staff member |
 | order_incent | boolean? |  yes  | This is a boolean value. `true` to retrieve the staff members eligible for getting incentives on orders. |
 | profile_pic_url | string? |  yes  | Profile image hosted url of the staff member |
 | stores | [number]? |  yes  |  |
 | title | string? |  yes  | Tittle for the staff member like owner, staff. |
 | user | string? |  yes  | Mongo ID of the staff. Helps in retrieving the details of a particular staff member. |
 

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
 | __v | number? |  yes  | Version key for tracking revisions. Default value is zero. |
 | _id | string? |  yes  | The unique identifier (24-digit Mongo Object ID) of the token |
 | application | string? |  yes  | Alphanumeric ID allotted to the current application created within the current business account |
 | created_at | string? |  yes  | ISO 8601 timestamp of token creation |
 | tokens | [Tokens](#Tokens)? |  yes  |  |
 | updated_at | string? |  yes  | ISO 8601 timestamp of token updation |
 

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
 | icon | string? |  yes  | Hosted URL of icon image shown on the website |
 | link | string? |  yes  | Web URL of brand's blog page |
 | title | string? |  yes  | Name of the brand's blog page |
 

---

#### [BusinessHighlights](#BusinessHighlights)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  | Unique identifier (24-digit Mongo Object ID) of the related business |
 | icon | string? |  yes  | Hosted URL of icon image representing the business highlight |
 | sub_title | string? |  yes  | Detailed information about the highlight |
 | title | string? |  yes  | Title of the business highlight, e.g. Superfast Delivery |
 

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
 | visibility | boolean? |  yes  | Shows whether WhatsApp communication is enabled |
 

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

#### [CompanyInfo](#CompanyInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  | The unique identifier (24-digit Mongo Object ID) of company information |
 | addresses | [[CompanyAboutAddress](#CompanyAboutAddress)]? |  yes  |  |
 | created_on | string? |  yes  | ISO 8601 timestamp of company information creation |
 | is_active | boolean? |  yes  | Indicates company is active or not active |
 | name | string? |  yes  | Name of the company, Reliance Retail Limited |
 | notification_emails | [string]? |  yes  |  |
 | uid | number? |  yes  | Company UID |
 

---

#### [CompareProductsFeature](#CompareProductsFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean? |  yes  | Shows whether product comparison feature is enabled on PDP |
 

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

#### [DeploymentStoreSelectionFeature](#DeploymentStoreSelectionFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean? |  yes  | Shows whether selection of store (for deploying the application) is permitted |
 | type | string? |  yes  | Permitted values are 'hard' and 'soft'. For hard type delivery, store selection is compulsory. For soft type, delivery store selection is optional. |
 

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
 | _id | string? |  yes  | The unique identifier (24-digit Mongo Object ID) of the sales channel domain |
 | is_predefined | boolean? |  yes  | Domain is hosting domain or not. |
 | is_primary | boolean? |  yes  | Domain is primary or not. Primary domain is the default/main domain. |
 | is_shortlink | boolean? |  yes  | Shortlink is present or not for the domain |
 | name | string? |  yes  |  |
 | verified | boolean? |  yes  | Domain is verified or not. TXT and A records should propagate correctly. |
 

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

#### [InventoryBrandRule](#InventoryBrandRule)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brands | [number]? |  yes  |  |
 | criteria | string? |  yes  | Whether all brands are enabled, or explicitly few brands in the inventory |
 

---

#### [InventoryPaymentConfig](#InventoryPaymentConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | mode_of_payment | string? |  yes  | Mode of payment for the inventory of sales channel. It is required and default value is null. |
 | source | string? |  yes  | Source of the payment mode for the inventory payment of sales channel. Default value is FYND. |
 

---

#### [InventoryStoreRule](#InventoryStoreRule)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | criteria | string? |  yes  | Whether all stores are enabled, or explicitly few stores in the inventory, or use brands and company filter. |
 | rules | [[StoreCriteriaRule](#StoreCriteriaRule)]? |  yes  | List of rules with company and brands uids. Used when critera is `filter`. |
 | stores | [number]? |  yes  | List of store uids. Used when critera is `explicit`. |
 

---

#### [Ios](#Ios)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | api_key | string? |  yes  | Firebase secret credential API key for IOS |
 | application_id | string? |  yes  | Alphanumeric ID allotted to a sales channel application created within a business account |
 

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

#### [LanguageResponse](#LanguageResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[SupportedLanguage](#SupportedLanguage)]? |  yes  |  |
 

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

#### [OrderingStoreSelect](#OrderingStoreSelect)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | uid | number |  no  | Ordering store unique uid. It is required. |
 

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
 | _id | string? |  yes  | The unique identifier (24-digit Mongo Object ID) of owner info |
 | emails | [[UserEmail](#UserEmail)]? |  yes  |  |
 | first_name | string? |  yes  | First name of the owner |
 | last_name | string? |  yes  | Last name of the owner |
 | phone_numbers | [[UserPhoneNumber](#UserPhoneNumber)]? |  yes  |  |
 | profile_pic | string? |  yes  | Hosted URL of profile pic |
 

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

#### [StorePriorityRule](#StorePriorityRule)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean? |  yes  | Shows store priority is enabled or not enabled for the article assignment. |
 | storetype_order | [string]? |  yes  |  |
 

---

#### [SuccessMessageResponse](#SuccessMessageResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  | Success message shown to the user (in a string format) |
 

---

#### [SupportedLanguage](#SupportedLanguage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string? |  yes  | Unique code of supported language, e.g. hi-IN |
 | name | string? |  yes  | Name of the supported language, e.g. हिन्दी |
 

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

#### [UpdateDialog](#UpdateDialog)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | interval | number? |  yes  |  |
 | type | string? |  yes  |  |
 

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




