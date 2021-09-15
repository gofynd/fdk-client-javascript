



##### [Back to Application docs](./README.md)

## Configuration Methods
Application configuration apis
* [getApplication](#getapplication)
* [getOwnerInfo](#getownerinfo)
* [getBasicDetails](#getbasicdetails)
* [getIntegrationTokens](#getintegrationtokens)
* [getOrderingStores](#getorderingstores)
* [getStoreDetailById](#getstoredetailbyid)
* [getFeatures](#getfeatures)
* [getContactInfo](#getcontactinfo)
* [getCurrencies](#getcurrencies)
* [getCurrencyById](#getcurrencybyid)
* [getAppCurrencies](#getappcurrencies)
* [getLanguages](#getlanguages)
* [getOrderingStoreCookie](#getorderingstorecookie)
* [removeOrderingStoreCookie](#removeorderingstorecookie)
* [getAppStaffs](#getappstaffs)



## Methods with example and description


### getApplication
Get current application details



```javascript
// Promise
const promise = configuration.getApplication();

// Async/Await
const data = await configuration.getApplication();
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


### getOwnerInfo
Get application, owner and seller information



```javascript
// Promise
const promise = configuration.getOwnerInfo();

// Async/Await
const data = await configuration.getOwnerInfo();
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
          "email": "jalakvora@gofynd.com"
        },
        {
          "active": true,
          "primary": false,
          "verified": true,
          "email": "jalakvora@fynd.com"
        },
        {
          "active": true,
          "primary": false,
          "verified": true,
          "email": "jalakvora@uniket.store"
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


### getBasicDetails
Get basic application details



```javascript
// Promise
const promise = configuration.getBasicDetails();

// Async/Await
const data = await configuration.getBasicDetails();
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


### getIntegrationTokens
Get integration tokens



```javascript
// Promise
const promise = configuration.getIntegrationTokens();

// Async/Await
const data = await configuration.getIntegrationTokens();
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


### getOrderingStores
Get deployment stores



```javascript
// Promise
const promise = configuration.getOrderingStores({  pageNo : value,
 pageSize : value,
 q : value });

// Async/Await
const data = await configuration.getOrderingStores({  pageNo : value,
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


### getStoreDetailById
Get ordering store details



```javascript
// Promise
const promise = configuration.getStoreDetailById({  storeId : value });

// Async/Await
const data = await configuration.getStoreDetailById({  storeId : value });
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


### getFeatures
Get features of application



```javascript
// Promise
const promise = configuration.getFeatures();

// Async/Await
const data = await configuration.getFeatures();
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


### getContactInfo
Get application information



```javascript
// Promise
const promise = configuration.getContactInfo();

// Async/Await
const data = await configuration.getContactInfo();
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
const promise = configuration.getCurrencies();

// Async/Await
const data = await configuration.getCurrencies();
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
const promise = configuration.getCurrencyById({  id : value });

// Async/Await
const data = await configuration.getCurrencyById({  id : value });
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


### getAppCurrencies
Get currencies enabled in the application



```javascript
// Promise
const promise = configuration.getAppCurrencies();

// Async/Await
const data = await configuration.getAppCurrencies();
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


### getLanguages
Get list of languages



```javascript
// Promise
const promise = configuration.getLanguages();

// Async/Await
const data = await configuration.getLanguages();
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
const promise = configuration.getOrderingStoreCookie({  body : value });

// Async/Await
const data = await configuration.getOrderingStoreCookie({  body : value });
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


### removeOrderingStoreCookie
Unset the Ordering Store signed cookie.



```javascript
// Promise
const promise = configuration.removeOrderingStoreCookie();

// Async/Await
const data = await configuration.removeOrderingStoreCookie();
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


### getAppStaffs
Get a list of staff.



```javascript
// Promise
const promise = configuration.getAppStaffs({  orderIncent : value,
 orderingStore : value,
 user : value });

// Async/Await
const data = await configuration.getAppStaffs({  orderIncent : value,
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



### Schemas

 
 
 #### [ApplicationAboutResponse](#ApplicationAboutResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application_info | [ApplicationInfo](#ApplicationInfo) |  no  |  |
 | company_info | [CompanyInfo](#CompanyInfo) |  no  |  |
 | owner_info | [OwnerInfo](#OwnerInfo) |  no  |  |

---


 
 
 #### [ApplicationInfo](#ApplicationInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | domain | [Domain](#Domain) |  no  |  |
 | website | [ApplicationWebsite](#ApplicationWebsite) |  no  |  |
 | cors | [ApplicationCors](#ApplicationCors) |  no  |  |
 | description | string |  no  |  |
 | name | string |  no  |  |
 | meta | [ApplicationMeta](#ApplicationMeta) |  no  |  |
 | token | string |  no  |  |
 | secret | string |  no  |  |
 | created_at | string |  no  |  |
 | banner | [SecureUrl](#SecureUrl) |  no  |  |
 | logo | [SecureUrl](#SecureUrl) |  no  |  |
 | is_active | boolean |  no  |  |

---


 
 
 #### [CompanyInfo](#CompanyInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | uid | number |  no  |  |
 | created_on | string |  no  |  |
 | is_active | boolean |  no  |  |
 | name | string |  no  |  |
 | addresses | [[CompanyAboutAddress](#CompanyAboutAddress)] |  no  |  |
 | notification_emails | [string] |  no  |  |

---


 
 
 #### [OwnerInfo](#OwnerInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | emails | [[UserEmail](#UserEmail)] |  no  |  |
 | phone_numbers | [[UserPhoneNumber](#UserPhoneNumber)] |  no  |  |
 | first_name | string |  no  |  |
 | last_name | string |  no  |  |
 | profile_pic | string |  no  |  |

---


 
 
 #### [AppVersionRequest](#AppVersionRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application | [ApplicationVersionRequest](#ApplicationVersionRequest) |  yes  |  |
 | device | [Device](#Device) |  yes  |  |
 | locale | string |  no  |  |
 | timezone | string |  no  |  |

---


 
 
 #### [ApplicationVersionRequest](#ApplicationVersionRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | name | string |  yes  |  |
 | namespace | string |  no  |  |
 | token | string |  no  |  |
 | version | string |  yes  |  |

---


 
 
 #### [Device](#Device)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | build | number |  no  |  |
 | model | string |  no  |  |
 | os | [OS](#OS) |  yes  |  |

---


 
 
 #### [OS](#OS)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  yes  |  |
 | version | string |  no  |  |

---


 
 
 #### [SupportedLanguage](#SupportedLanguage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | code | string |  no  |  |

---


 
 
 #### [LanguageResponse](#LanguageResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[SupportedLanguage](#SupportedLanguage)] |  no  |  |

---


 
 
 #### [AppStaffResponse](#AppStaffResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | staff_users | [[AppStaff](#AppStaff)] |  no  |  |

---


 
 
 #### [UpdateDialog](#UpdateDialog)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  no  |  |
 | interval | number |  no  |  |

---


 
 
 #### [OrderingStoreSelectRequest](#OrderingStoreSelectRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | ordering_store | [OrderingStoreSelect](#OrderingStoreSelect) |  yes  |  |

---


 
 
 #### [OrderingStoreSelect](#OrderingStoreSelect)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | uid | number |  yes  | store uid |

---


 
 
 #### [AppStaff](#AppStaff)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | order_incent | boolean |  no  |  |
 | stores | [number] |  no  |  |
 | application | string |  no  |  |
 | title | string |  no  |  |
 | user | string |  no  |  |
 | employee_code | string |  no  |  |
 | first_name | string |  no  |  |
 | last_name | string |  no  |  |
 | profile_pic_url | string |  no  |  |

---


 
 
 #### [AppTokenResponse](#AppTokenResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | tokens | [Tokens](#Tokens) |  no  |  |
 | _id | string |  no  |  |
 | application | string |  no  |  |
 | created_at | string |  no  |  |
 | updated_at | string |  no  |  |
 | __v | number |  no  |  |

---


 
 
 #### [Tokens](#Tokens)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | firebase | [Firebase](#Firebase) |  no  |  |
 | moengage | [Moengage](#Moengage) |  no  |  |
 | segment | [Segment](#Segment) |  no  |  |
 | gtm | [Gtm](#Gtm) |  no  |  |
 | freshchat | [Freshchat](#Freshchat) |  no  |  |
 | safetynet | [Safetynet](#Safetynet) |  no  |  |
 | fynd_rewards | [FyndRewards](#FyndRewards) |  no  |  |
 | google_map | [GoogleMap](#GoogleMap) |  no  |  |

---


 
 
 #### [Firebase](#Firebase)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | credentials | [Credentials](#Credentials) |  no  |  |
 | enabled | boolean |  no  |  |

---


 
 
 #### [Credentials](#Credentials)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | ios | [Ios](#Ios) |  no  |  |
 | android | [Android](#Android) |  no  |  |
 | project_id | string |  no  |  |
 | gcm_sender_id | string |  no  |  |
 | application_id | string |  no  |  |
 | api_key | string |  no  |  |

---


 
 
 #### [Ios](#Ios)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application_id | string |  no  |  |
 | api_key | string |  no  |  |

---


 
 
 #### [Android](#Android)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application_id | string |  no  |  |
 | api_key | string |  no  |  |

---


 
 
 #### [Moengage](#Moengage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | credentials | [MoengageCredentials](#MoengageCredentials) |  no  |  |
 | enabled | boolean |  no  |  |

---


 
 
 #### [MoengageCredentials](#MoengageCredentials)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | app_id | string |  no  |  |

---


 
 
 #### [Segment](#Segment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | credentials | [SegmentCredentials](#SegmentCredentials) |  no  |  |
 | enabled | boolean |  no  |  |

---


 
 
 #### [SegmentCredentials](#SegmentCredentials)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | write_key | string |  no  |  |

---


 
 
 #### [Gtm](#Gtm)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | credentials | [GtmCredentials](#GtmCredentials) |  no  |  |
 | enabled | boolean |  no  |  |

---


 
 
 #### [GtmCredentials](#GtmCredentials)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | api_key | string |  no  |  |

---


 
 
 #### [Freshchat](#Freshchat)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | credentials | [FreshchatCredentials](#FreshchatCredentials) |  no  |  |
 | enabled | boolean |  no  |  |

---


 
 
 #### [FreshchatCredentials](#FreshchatCredentials)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | app_id | string |  no  |  |
 | app_key | string |  no  |  |
 | web_token | string |  no  |  |

---


 
 
 #### [Safetynet](#Safetynet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | credentials | [SafetynetCredentials](#SafetynetCredentials) |  no  |  |
 | enabled | boolean |  no  |  |

---


 
 
 #### [SafetynetCredentials](#SafetynetCredentials)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | api_key | string |  no  |  |

---


 
 
 #### [FyndRewards](#FyndRewards)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | credentials | [FyndRewardsCredentials](#FyndRewardsCredentials) |  no  |  |

---


 
 
 #### [FyndRewardsCredentials](#FyndRewardsCredentials)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | public_key | string |  no  |  |

---


 
 
 #### [GoogleMap](#GoogleMap)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | credentials | [GoogleMapCredentials](#GoogleMapCredentials) |  no  |  |

---


 
 
 #### [GoogleMapCredentials](#GoogleMapCredentials)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | api_key | string |  no  |  |

---


 
 
 #### [RewardPointsConfig](#RewardPointsConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | credit | [Credit](#Credit) |  no  |  |
 | debit | [Debit](#Debit) |  no  |  |

---


 
 
 #### [Credit](#Credit)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean |  no  |  |

---


 
 
 #### [Debit](#Debit)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean |  no  |  |
 | auto_apply | boolean |  no  |  |
 | strategy_channel | string |  no  |  |

---


 
 
 #### [ProductDetailFeature](#ProductDetailFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | similar | [string] |  no  |  |
 | seller_selection | boolean |  no  |  |
 | update_product_meta | boolean |  no  |  |
 | request_product | boolean |  no  |  |

---


 
 
 #### [LaunchPage](#LaunchPage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | page_type | string |  no  |  |
 | params | string |  no  |  |
 | query | string |  no  |  |

---


 
 
 #### [LandingPageFeature](#LandingPageFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | launch_page | [LaunchPage](#LaunchPage) |  no  |  |
 | continue_as_guest | boolean |  no  |  |
 | login_btn_text | string |  no  |  |
 | show_domain_textbox | boolean |  no  |  |
 | show_register_btn | boolean |  no  |  |

---


 
 
 #### [RegistrationPageFeature](#RegistrationPageFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | ask_store_address | boolean |  no  |  |

---


 
 
 #### [AppFeature](#AppFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | product_detail | [ProductDetailFeature](#ProductDetailFeature) |  no  |  |
 | landing_page | [LandingPageFeature](#LandingPageFeature) |  no  |  |
 | registration_page | [RegistrationPageFeature](#RegistrationPageFeature) |  no  |  |
 | home_page | [HomePageFeature](#HomePageFeature) |  no  |  |
 | common | [CommonFeature](#CommonFeature) |  no  |  |
 | cart | [CartFeature](#CartFeature) |  no  |  |
 | qr | [QrFeature](#QrFeature) |  no  |  |
 | pcr | [PcrFeature](#PcrFeature) |  no  |  |
 | order | [OrderFeature](#OrderFeature) |  no  |  |
 | _id | string |  no  |  |
 | app | string |  no  |  |
 | created_at | string |  no  |  |
 | updated_at | string |  no  |  |
 | __v | number |  no  |  |

---


 
 
 #### [HomePageFeature](#HomePageFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | order_processing | boolean |  no  |  |

---


 
 
 #### [CommonFeature](#CommonFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | communication_optin_dialog | [CommunicationOptinDialogFeature](#CommunicationOptinDialogFeature) |  no  |  |
 | deployment_store_selection | [DeploymentStoreSelectionFeature](#DeploymentStoreSelectionFeature) |  no  |  |
 | listing_price | [ListingPriceFeature](#ListingPriceFeature) |  no  |  |
 | currency | [CurrencyFeature](#CurrencyFeature) |  no  |  |
 | revenue_engine | [RevenueEngineFeature](#RevenueEngineFeature) |  no  |  |
 | feedback | [FeedbackFeature](#FeedbackFeature) |  no  |  |
 | compare_products | [CompareProductsFeature](#CompareProductsFeature) |  no  |  |
 | reward_points | [RewardPointsConfig](#RewardPointsConfig) |  no  |  |

---


 
 
 #### [CommunicationOptinDialogFeature](#CommunicationOptinDialogFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | visibility | boolean |  no  |  |

---


 
 
 #### [DeploymentStoreSelectionFeature](#DeploymentStoreSelectionFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean |  no  |  |
 | type | string |  no  |  |

---


 
 
 #### [ListingPriceFeature](#ListingPriceFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | value | string |  no  |  |

---


 
 
 #### [CurrencyFeature](#CurrencyFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | value | [string] |  no  |  |
 | type | string |  no  |  |
 | default_currency | string |  no  |  |

---


 
 
 #### [RevenueEngineFeature](#RevenueEngineFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean |  no  |  |

---


 
 
 #### [FeedbackFeature](#FeedbackFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean |  no  |  |

---


 
 
 #### [CompareProductsFeature](#CompareProductsFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean |  no  |  |

---


 
 
 #### [CartFeature](#CartFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | gst_input | boolean |  no  |  |
 | staff_selection | boolean |  no  |  |
 | placing_for_customer | boolean |  no  |  |
 | google_map | boolean |  no  |  |
 | revenue_engine_coupon | boolean |  no  |  |

---


 
 
 #### [QrFeature](#QrFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application | boolean |  no  |  |
 | products | boolean |  no  |  |
 | collections | boolean |  no  |  |

---


 
 
 #### [PcrFeature](#PcrFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | staff_selection | boolean |  no  |  |

---


 
 
 #### [OrderFeature](#OrderFeature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | buy_again | boolean |  no  |  |

---


 
 
 #### [AppFeatureRequest](#AppFeatureRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | feature | [AppFeature](#AppFeature) |  no  |  |

---


 
 
 #### [AppFeatureResponse](#AppFeatureResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | feature | [AppFeature](#AppFeature) |  no  |  |

---


 
 
 #### [Currency](#Currency)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | is_active | boolean |  no  |  |
 | name | string |  no  |  |
 | code | string |  no  |  |
 | created_at | string |  no  |  |
 | updated_at | string |  no  |  |
 | decimal_digits | number |  no  |  |
 | symbol | string |  no  |  |

---


 
 
 #### [Domain](#Domain)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | verified | boolean |  no  |  |
 | is_primary | boolean |  no  |  |
 | is_shortlink | boolean |  no  |  |
 | _id | string |  no  |  |
 | name | string |  no  |  |

---


 
 
 #### [ApplicationWebsite](#ApplicationWebsite)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean |  no  |  |
 | basepath | string |  no  |  |

---


 
 
 #### [ApplicationCors](#ApplicationCors)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | domains | [string] |  no  |  |

---


 
 
 #### [ApplicationAuth](#ApplicationAuth)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean |  no  |  |

---


 
 
 #### [ApplicationRedirections](#ApplicationRedirections)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | from | string |  no  |  |
 | redirect_to | string |  no  |  |
 | type | string |  no  |  |

---


 
 
 #### [ApplicationMeta](#ApplicationMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | value | string |  no  |  |

---


 
 
 #### [SecureUrl](#SecureUrl)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | secure_url | string |  no  |  |

---


 
 
 #### [Application](#Application)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | website | [ApplicationWebsite](#ApplicationWebsite) |  no  |  |
 | cors | [ApplicationCors](#ApplicationCors) |  no  |  |
 | auth | [ApplicationAuth](#ApplicationAuth) |  no  |  |
 | description | string |  no  |  |
 | channel_type | string |  no  |  |
 | cache_ttl | number |  no  |  |
 | is_internal | boolean |  no  |  |
 | is_active | boolean |  no  |  |
 | _id | string |  no  |  |
 | name | string |  no  |  |
 | owner | string |  no  |  |
 | company_id | number |  no  |  |
 | token | string |  no  |  |
 | redirections | [[ApplicationRedirections](#ApplicationRedirections)] |  no  |  |
 | meta | [[ApplicationMeta](#ApplicationMeta)] |  no  |  |
 | created_at | string |  no  |  |
 | updated_at | string |  no  |  |
 | __v | number |  no  |  |
 | banner | [SecureUrl](#SecureUrl) |  no  |  |
 | logo | [SecureUrl](#SecureUrl) |  no  |  |
 | favicon | [SecureUrl](#SecureUrl) |  no  |  |
 | domains | [[Domain](#Domain)] |  no  |  |
 | app_type | string |  no  |  |
 | mobile_logo | [SecureUrl](#SecureUrl) |  no  |  |
 | domain | [Domain](#Domain) |  no  |  |

---


 
 
 #### [NotFound](#NotFound)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |

---


 
 
 #### [UnhandledError](#UnhandledError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |

---


 
 
 #### [InvalidPayloadRequest](#InvalidPayloadRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |

---


 
 
 #### [SuccessMessageResponse](#SuccessMessageResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |

---


 
 
 #### [InventoryBrandRule](#InventoryBrandRule)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | criteria | string |  no  | Whether enable all or explicitly few brands as inventory |
 | brands | [number] |  no  | Brand uids in case of explicit criteria |

---


 
 
 #### [StoreCriteriaRule](#StoreCriteriaRule)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | companies | [number] |  no  | list of company uids |
 | brands | [number] |  no  | list of brand uids |

---


 
 
 #### [InventoryStoreRule](#InventoryStoreRule)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | criteria | string |  no  | Whether enable all or explicitly few stores or use filter of brands and company as inventory stores |
 | rules | [[StoreCriteriaRule](#StoreCriteriaRule)] |  no  | List of rules with company and brands uids. Used when critera is `filter` |
 | stores | [number] |  no  | List of store uids. Used when critera is `explicit` |

---


 
 
 #### [InventoryPaymentConfig](#InventoryPaymentConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | mode_of_payment | string |  no  |  |
 | source | string |  no  |  |

---


 
 
 #### [StorePriorityRule](#StorePriorityRule)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean |  no  |  |
 | storetype_order | [string] |  no  |  |

---


 
 
 #### [ArticleAssignmentRule](#ArticleAssignmentRule)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | store_priority | [StorePriorityRule](#StorePriorityRule) |  no  |  |

---


 
 
 #### [InventoryArticleAssignment](#InventoryArticleAssignment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | post_order_reassignment | boolean |  no  |  |
 | rules | [ArticleAssignmentRule](#ArticleAssignmentRule) |  no  |  |

---


 
 
 #### [CompanyAboutAddress](#CompanyAboutAddress)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | pincode | number |  no  |  |
 | address1 | string |  no  |  |
 | address2 | string |  no  |  |
 | city | string |  no  |  |
 | state | string |  no  |  |
 | country | string |  no  |  |
 | address_type | string |  no  |  |

---


 
 
 #### [UserEmail](#UserEmail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | boolean |  no  |  |
 | primary | boolean |  no  |  |
 | verified | boolean |  no  |  |
 | email | string |  no  |  |

---


 
 
 #### [UserPhoneNumber](#UserPhoneNumber)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | boolean |  no  |  |
 | primary | boolean |  no  |  |
 | verified | boolean |  no  |  |
 | country_code | number |  no  |  |
 | phone | string |  no  |  |

---


 
 
 #### [Page](#Page)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  yes  |  |
 | size | number |  no  |  |
 | current | number |  no  |  |
 | has_next | boolean |  no  |  |
 | item_total | number |  no  |  |
 | next_id | string |  no  |  |
 | has_previous | boolean |  no  |  |

---


 
 
 #### [ApplicationInformation](#ApplicationInformation)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address | [InformationAddress](#InformationAddress) |  no  |  |
 | support | [InformationSupport](#InformationSupport) |  no  |  |
 | social_links | [SocialLinks](#SocialLinks) |  no  |  |
 | links | [Links](#Links) |  no  |  |
 | copyright_text | string |  no  |  |
 | _id | string |  no  |  |
 | business_highlights | [BusinessHighlights](#BusinessHighlights) |  no  |  |
 | application | string |  no  |  |
 | created_at | string |  no  |  |
 | updated_at | string |  no  |  |
 | __v | number |  no  |  |

---


 
 
 #### [InformationAddress](#InformationAddress)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | loc | string |  no  |  |
 | address_line | [string] |  no  |  |
 | phone | [InformationPhone](#InformationPhone) |  no  |  |
 | city | string |  no  |  |
 | country | string |  no  |  |
 | pincode | number |  no  |  |

---


 
 
 #### [InformationPhone](#InformationPhone)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string |  no  |  |
 | number | string |  no  |  |

---


 
 
 #### [InformationSupport](#InformationSupport)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | phone | [string] |  no  |  |
 | email | [string] |  no  |  |
 | timing | string |  no  |  |

---


 
 
 #### [SocialLinks](#SocialLinks)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | facebook | [FacebookLink](#FacebookLink) |  no  |  |
 | instagram | [InstagramLink](#InstagramLink) |  no  |  |
 | twitter | [TwitterLink](#TwitterLink) |  no  |  |
 | pinterest | [PinterestLink](#PinterestLink) |  no  |  |
 | google_plus | [GooglePlusLink](#GooglePlusLink) |  no  |  |
 | youtube | [YoutubeLink](#YoutubeLink) |  no  |  |
 | linked_in | [LinkedInLink](#LinkedInLink) |  no  |  |
 | vimeo | [VimeoLink](#VimeoLink) |  no  |  |
 | blog_link | [BlogLink](#BlogLink) |  no  |  |

---


 
 
 #### [FacebookLink](#FacebookLink)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | title | string |  no  |  |
 | icon | string |  no  |  |
 | link | string |  no  |  |

---


 
 
 #### [InstagramLink](#InstagramLink)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | title | string |  no  |  |
 | icon | string |  no  |  |
 | link | string |  no  |  |

---


 
 
 #### [TwitterLink](#TwitterLink)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | title | string |  no  |  |
 | icon | string |  no  |  |
 | link | string |  no  |  |

---


 
 
 #### [PinterestLink](#PinterestLink)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | title | string |  no  |  |
 | icon | string |  no  |  |
 | link | string |  no  |  |

---


 
 
 #### [GooglePlusLink](#GooglePlusLink)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | title | string |  no  |  |
 | icon | string |  no  |  |
 | link | string |  no  |  |

---


 
 
 #### [YoutubeLink](#YoutubeLink)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | title | string |  no  |  |
 | icon | string |  no  |  |
 | link | string |  no  |  |

---


 
 
 #### [LinkedInLink](#LinkedInLink)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | title | string |  no  |  |
 | icon | string |  no  |  |
 | link | string |  no  |  |

---


 
 
 #### [VimeoLink](#VimeoLink)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | title | string |  no  |  |
 | icon | string |  no  |  |
 | link | string |  no  |  |

---


 
 
 #### [BlogLink](#BlogLink)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | title | string |  no  |  |
 | icon | string |  no  |  |
 | link | string |  no  |  |

---


 
 
 #### [Links](#Links)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | title | string |  no  |  |
 | link | string |  no  |  |

---


 
 
 #### [BusinessHighlights](#BusinessHighlights)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | title | string |  no  |  |
 | icon | string |  no  |  |
 | sub_title | string |  no  |  |

---


 
 
 #### [ApplicationDetail](#ApplicationDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  yes  |  |
 | description | string |  yes  |  |
 | logo | [SecureUrl](#SecureUrl) |  yes  |  |
 | mobile_logo | [SecureUrl](#SecureUrl) |  yes  |  |
 | favicon | [SecureUrl](#SecureUrl) |  yes  |  |
 | banner | [SecureUrl](#SecureUrl) |  yes  |  |
 | domain | [Domain](#Domain) |  no  |  |
 | domains | [[Domain](#Domain)] |  no  |  |
 | _id | string |  no  |  |

---


 
 
 #### [CurrenciesResponse](#CurrenciesResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[Currency](#Currency)] |  no  |  |

---


 
 
 #### [DefaultCurrency](#DefaultCurrency)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | ref | string |  no  |  |
 | code | string |  no  |  |

---


 
 
 #### [AppCurrencyResponse](#AppCurrencyResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application | string |  no  |  |
 | default_currency | [DefaultCurrency](#DefaultCurrency) |  no  |  |
 | supported_currency | [[Currency](#Currency)] |  no  |  |

---


 
 
 #### [StoreLatLong](#StoreLatLong)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  no  |  |
 | coordinates | [number] |  no  |  |

---


 
 
 #### [OptedStoreAddress](#OptedStoreAddress)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | state | string |  no  |  |
 | address1 | string |  no  |  |
 | lat_long | [StoreLatLong](#StoreLatLong) |  no  |  |
 | address2 | string |  no  |  |
 | pincode | number |  no  |  |
 | country | string |  no  |  |
 | city | string |  no  |  |

---


 
 
 #### [OrderingStore](#OrderingStore)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address | [OptedStoreAddress](#OptedStoreAddress) |  no  |  |
 | _id | string |  no  |  |
 | uid | number |  no  |  |
 | name | string |  no  |  |
 | display_name | string |  no  |  |
 | store_type | string |  no  |  |
 | store_code | string |  no  |  |
 | pincode | number |  no  |  |
 | code | string |  no  |  |

---


 
 
 #### [OrderingStores](#OrderingStores)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | page | [Page](#Page) |  no  |  |
 | items | [[OrderingStore](#OrderingStore)] |  no  |  |
 | deployed_stores | [number] |  no  |  |
 | all_stores | boolean |  no  |  |
 | enabled | boolean |  no  |  |
 | type | string |  no  |  |
 | _id | string |  no  |  |
 | app | string |  no  |  |
 | __v | number |  no  |  |

---




