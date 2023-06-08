




##### [Back to Platform docs](./README.md)

## Partner Methods
Partner configuration apis

* [addProxyPath](#addproxypath)
* [deleteExtensionById](#deleteextensionbyid)
* [getExtensionById](#getextensionbyid)
* [getExtensionsForCompany](#getextensionsforcompany)
* [getExtensionsSuggestions](#getextensionssuggestions)
* [getPartnerInvites](#getpartnerinvites)
* [getPartnerRequestDetails](#getpartnerrequestdetails)
* [getPrivateExtensions](#getprivateextensions)
* [getProxyPath](#getproxypath)
* [getProxyPathAttachedPath](#getproxypathattachedpath)
* [getPublicExtension](#getpublicextension)
* [modifyPartnerRequest](#modifypartnerrequest)
* [removeProxyPath](#removeproxypath)
* [setupProducts](#setupproducts)
* [subscribeExtension](#subscribeextension)



## Methods with example and description




### addProxyPath
Create proxy URL for the external URL



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").partner.addProxyPath({  extensionId : value,
 body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").partner.addProxyPath({  extensionId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| extensionId | string | yes | Extension id for which proxy URL will be generated |  
| body | [AddProxyReq](#AddProxyReq) | yes | Request body |


Use this API to generate proxy URL for the external URL

*Returned Response:*




[AddProxyResponse](#AddProxyResponse)

Proxy created successfully




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "_id": "607406b8a472cd527303692f",
  "attached_path": "test",
  "proxy_url": "https://www.abc.com",
  "company_id": "1",
  "application_id": "000000000000000000000004",
  "extension_id": "6073280be899ea5b1150fd9d",
  "created_at": "2021-04-12T08:37:12.077Z",
  "modified_at": "2021-04-12T08:37:12.077Z"
}
```
</details>









---


### deleteExtensionById
Uninstall extension



```javascript
// Promise
const promise = platformClient.partner.deleteExtensionById({  extensionId : value,
 message : value,
 uninstallReasonType : value });

// Async/Await
const data = await platformClient.partner.deleteExtensionById({  extensionId : value,
 message : value,
 uninstallReasonType : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| extensionId | string | yes | Extension id |   
| message | string | yes | Message while uninstalling extension |   
| uninstallReasonType | string | yes | Reason for uninstalling extension |  



Use this API to remove extension from yout company or channel

*Returned Response:*




[UninstallExtension](#UninstallExtension)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true
}
```
</details>









---


### getExtensionById
Get extension details



```javascript
// Promise
const promise = platformClient.partner.getExtensionById({  extensionId : value });

// Async/Await
const data = await platformClient.partner.getExtensionById({  extensionId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| extensionId | string | yes | Extension id |  



Use this API to get the details of extension

*Returned Response:*




[ExtensionCommon](#ExtensionCommon)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "extension_id": "609400409d0dcbdc2e6b76a5",
  "name": "Newsletter Subscription",
  "description": "Newsletter Subscription\nNewsletter Subscription",
  "base_url": "https://newsletter.extensions.fyndx0.de",
  "logo": {
    "small": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/x0/misc/pictures/free-icon/original/kVa_Ej41--logo.png",
    "large": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/x0/misc/pictures/free-icon/original/kVa_Ej41--logo.png"
  },
  "launch_url": "https://newsletter.extensions.fyndx0.de/fp/install?company_id=1&cluster_url=https%3A%2F%2Fapi.fyndx0.de&client_id=609400409d0dcbdc2e6b76a5",
  "extention_type": "public",
  "developed_by_name": "Fynd",
  "ext_version": "1.0",
  "company": "1",
  "scope": [
    {
      "name": "Sales Channels",
      "description": "Allows to add and manage new and existing sales channels"
    },
    {
      "name": "Settings",
      "description": "Allows you to configure and customize features across multiple touchpoints in the application."
    }
  ],
  "installed": true,
  "is_saleschannel": false
}
```
</details>









---


### getExtensionsForCompany
Get the list of all the extensions



```javascript
// Promise
const promise = platformClient.partner.getExtensionsForCompany({  pageSize : value,
 tag : value,
 currentPage : value,
 pageNo : value,
 filterBy : value,
 query : value,
 q : value,
 isApplicationLevel : value,
 isSaleschannel : value,
 extentionType : value });

// Async/Await
const data = await platformClient.partner.getExtensionsForCompany({  pageSize : value,
 tag : value,
 currentPage : value,
 pageNo : value,
 filterBy : value,
 query : value,
 q : value,
 isApplicationLevel : value,
 isSaleschannel : value,
 extentionType : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageSize | number | no | Number of records you want to get in single page |    
| tag | string | no | tag |    
| currentPage | string | no | tag |    
| pageNo | number | no | Current page number |    
| filterBy | string | no | Filter by |    
| query | string | no | query |    
| q | string | no | Search value |    
| isApplicationLevel | string | no | Flag to mark application level |    
| isSaleschannel | string | no | Flag to mark sales channel level |    
| extentionType | string | no | Extension type |  



Use this API to get the the extensions for the company

*Returned Response:*




[ExtensionList](#ExtensionList)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "items": [
    {
      "extension_id": "609400409d0dcbdc2e6b76a5",
      "name": "Newsletter Subscription",
      "description": "Newsletter Subscription\nNewsletter Subscription",
      "base_url": "https://newsletter.extensions.fyndx0.de",
      "logo": {
        "small": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/x0/misc/pictures/free-icon/original/kVa_Ej41--logo.png",
        "large": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/x0/misc/pictures/free-icon/original/kVa_Ej41--logo.png"
      },
      "launch_url": "https://newsletter.extensions.fyndx0.de/fp/install?company_id=1&cluster_url=https%3A%2F%2Fapi.fyndx0.de&client_id=609400409d0dcbdc2e6b76a5",
      "extention_type": "public",
      "developed_by_name": "Fynd",
      "ext_version": "1.0",
      "company": "1",
      "scope": [
        {
          "name": "Sales Channels",
          "description": "Allows to add and manage new and existing sales channels"
        },
        {
          "name": "Settings",
          "description": "Allows you to configure and customize features across multiple touchpoints in the application."
        }
      ],
      "installed": true,
      "is_saleschannel": false
    }
  ],
  "page": {
    "type": "number",
    "item_total": 98,
    "size": 10,
    "current": 1,
    "has_next": true
  }
}
```
</details>









---


### getExtensionsSuggestions
Get the list of all the extension suggestions



```javascript
// Promise
const promise = platformClient.partner.getExtensionsSuggestions({  pageSize : value });

// Async/Await
const data = await platformClient.partner.getExtensionsSuggestions({  pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageSize | number | no | Number of records you want to get in single page |  



Use this API to get the the extensions suggestions

*Returned Response:*




[ExtensionSuggestionList](#ExtensionSuggestionList)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "items": [
    {
      "listing_info": {
        "keywords": [],
        "name": "AutoHotkey script file",
        "tagline": "adsadsas",
        "icon": "https://hdn-1.addsale.com/x0/misc/pictures/free-icon/original/bpxzObuk5-logo.png"
      },
      "plans": [
        {
          "name": "dsfdsfdsf",
          "features": "sdfdsf",
          "type": "free",
          "price": {
            "amount": 0,
            "currency": "INR"
          },
          "trial_days": 0,
          "additional_charges": ""
        }
      ],
      "organization_id": "61d80723d3d67a97b6713faf",
      "slug": "autohotkey-script-file",
      "organization": {
        "name": "Coditas",
        "slug": "Codita-dsn-6"
      }
    }
  ]
}
```
</details>









---


### getPartnerInvites
Get partner invites



```javascript
// Promise
const promise = platformClient.partner.getPartnerInvites({  requestStatus : value,
 pageSize : value,
 pageNo : value });

// Async/Await
const data = await platformClient.partner.getPartnerInvites({  requestStatus : value,
 pageSize : value,
 pageNo : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| requestStatus | string | no | status of the request |    
| pageSize | string | no | Number of records per page |    
| pageNo | string | no | Number of page the user want to fetch |  



Use this API to get pending, accepted and rejected partner invites in platform

*Returned Response:*




[PartnerRequestList](#PartnerRequestList)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "items": [
    {
      "_id": "627a68b3ac2caa3c22edd238",
      "request_status": "accepted",
      "comment": "",
      "company_id": 1,
      "account_type": "live",
      "requested_permissions": {
        "company_permissions": [
          "profile",
          "product",
          "order",
          "extension",
          "developer",
          "marketplace",
          "otherseller",
          "settings",
          "audit-trail"
        ],
        "application_permissions": [
          "settings",
          "staff",
          "marketing",
          "communication",
          "catalogue",
          "customer",
          "analytics",
          "storage",
          "support",
          "point_of_sale",
          "order"
        ],
        "company_role": [
          "custom"
        ],
        "application_role": [
          "admin"
        ]
      },
      "approved_permissions": {
        "company_permissions": [
          "profile",
          "product",
          "order",
          "extension",
          "developer",
          "marketplace",
          "otherseller",
          "settings",
          "audit-trail"
        ],
        "application_permissions": {
          "6110bfb0d4beb6b2c08f8a79": {
            "permissions": [
              "settings",
              "staff",
              "marketing",
              "communication",
              "catalogue",
              "customer",
              "analytics",
              "storage",
              "support",
              "point_of_sale",
              "order"
            ],
            "roles": [
              "admin"
            ]
          }
        }
      },
      "company_name": "Reliance Digital P. LTDv",
      "user_id": "043f885d2ec5dd975a9aeac4",
      "organization_id": "62737a7bffaf722a1d7cebf6",
      "created_at": "2022-05-10T13:29:23.042Z",
      "modified_at": "2022-09-15T06:03:53.663Z",
      "approver_id": "dcbe84c5e68d8c4348c224dd",
      "organization_name": "Viking Ext Hitesh"
    }
  ],
  "page": {
    "type": "number",
    "current": 1,
    "size": 10,
    "item_total": 3,
    "has_next": false
  }
}
```
</details>









---


### getPartnerRequestDetails
Get partner request details



```javascript
// Promise
const promise = platformClient.partner.getPartnerRequestDetails({  inviteId : value });

// Async/Await
const data = await platformClient.partner.getPartnerRequestDetails({  inviteId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| inviteId | string | yes | invitation id |  



Use this API to get details of pending partner request

*Returned Response:*




[PartnerInviteDetails](#PartnerInviteDetails)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "_id": "637488936815adc2cd51e43a",
  "user_id": "27408062cc44eed4e39a7992",
  "organization_id": "610d178e2ab8f356aa98481b",
  "company_id": 559,
  "company_name": "Fynd1",
  "account_type": "live",
  "request_status": "pending",
  "requested_permissions": {
    "company_permissions": [
      "profile",
      "product",
      "order",
      "extension",
      "developer",
      "marketplace",
      "otherseller",
      "settings",
      "audit-trail"
    ],
    "application_permissions": [
      "settings",
      "staff",
      "marketing",
      "communication",
      "catalogue",
      "customer",
      "analytics",
      "storage",
      "support",
      "point_of_sale",
      "order"
    ],
    "company_role": [
      "custom"
    ],
    "application_role": [
      "admin"
    ]
  },
  "approved_permissions": {
    "company_permissions": [],
    "company_role": [
      "custom"
    ],
    "application_role": [
      "public"
    ]
  },
  "comment": "",
  "created_at": "2022-11-16T06:52:03.904Z",
  "modified_at": "2022-11-16T06:52:03.904Z",
  "organization_name": "Fynd"
}
```
</details>









---


### getPrivateExtensions
Get the list of private extensions



```javascript
// Promise
const promise = platformClient.partner.getPrivateExtensions({  pageSize : value,
 pageNo : value,
 query : value,
 q : value,
 installed : value });

// Async/Await
const data = await platformClient.partner.getPrivateExtensions({  pageSize : value,
 pageNo : value,
 query : value,
 q : value,
 installed : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageSize | number | no | Number of records you want to get in single page |    
| pageNo | number | no | Number of page |    
| query | string | no | Filter query which we want to pass |    
| q | string | no | Search value |    
| installed | string | no | Filter flag for installed extension |  



Use this API to get the list of private extensions

*Returned Response:*




[ExtensionResponse](#ExtensionResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "items": [
    {
      "_id": "610d2ad295dcfa14eb408bad",
      "description": "Generate thousands of unique coupon codes instantly for your sales campaigns!",
      "whitelisted_urls": [],
      "ext_version": "1.0.0",
      "extention_type": "public",
      "is_application_level": true,
      "is_saleschannel": false,
      "scope": [
        "company/saleschannel",
        "company/application/marketing"
      ],
      "name": "Bulk Coupons Generator",
      "base_url": "https://bulkcoupon.extensions.fyndx0.de",
      "logo": {
        "small": "https://hdn-1.addsale.com/x0/misc/pictures/free-icon/original/I9ujthIoU-logo.png",
        "large": "https://hdn-1.addsale.com/x0/misc/pictures/free-icon/original/I9ujthIoU-logo.png"
      },
      "callbacks": {
        "setup": "https://bulkcoupon.extensions.fyndx0.de/fp/setup",
        "auth": "https://bulkcoupon.extensions.fyndx0.de/fp/auth",
        "install": "https://bulkcoupon.extensions.fyndx0.de/fp/install",
        "uninstall": "https://bulkcoupon.extensions.fyndx0.de/fp/uninstall",
        "auto_install": "https://bulkcoupon.extensions.fyndx0.de/fp/auto_install"
      },
      "developed_by_name": "Rushabh Shah",
      "contact_email": "rushabhmshah@gofynd.com",
      "organization_id": "610d29f395dcfaba6b408ba6",
      "created_at": "2021-08-06T12:28:02.036Z",
      "modified_at": "2022-10-26T17:23:33.762Z",
      "__v": 0,
      "is_coming_soon": false,
      "is_hidden": false,
      "auto_install": true,
      "id": "610d2ad295dcfa14eb408bad",
      "installed": false
    }
  ],
  "page": {
    "type": "number",
    "current": 1,
    "size": 10,
    "item_total": 34,
    "has_next": true
  }
}
```
</details>









---


### getProxyPath
Proxy



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").partner.getProxyPath({  extensionId : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").partner.getProxyPath({  extensionId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| extensionId | string | no | extension id |  



Use this API to get proxy url

*Returned Response:*




[getProxyPathRes](#getProxyPathRes)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "items": [
    {
      "_id": "new ObjectId(\"646615041424726893f0bbb6\")",
      "company_id": "1",
      "application_id": "000000000000000000000001",
      "extension_id": "new ObjectId(\"60bdd9f98dac231699a1325d\")",
      "attached_path": "test",
      "proxy_url": "https://test.com",
      "created_at": "2023-05-18T12:07:32.227Z",
      "modified_at": "2023-05-18T12:07:32.227Z"
    }
  ],
  "page": {
    "type": "number",
    "current": 1,
    "size": 10,
    "item_total": 1,
    "has_next": false
  }
}
```
</details>









---


### getProxyPathAttachedPath
Proxy



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").partner.getProxyPathAttachedPath({  extensionId : value,
 attachedPath : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").partner.getProxyPathAttachedPath({  extensionId : value,
 attachedPath : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| extensionId | string | no | extension id |    
| attachedPath | string | no | application id |  



Use this API to get proxy url

*Returned Response:*




[AddProxyResponse](#AddProxyResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "company_id": "1",
  "application_id": "000000000000000000000001",
  "extension_id": "60bdd9f98dac231699a1325d",
  "attached_path": "test",
  "proxy_url": "https://test.com",
  "_id": "6466282572420072b4eb4545",
  "created_at": "2023-05-18T13:29:09.436Z",
  "modified_at": "2023-05-18T13:29:09.436Z"
}
```
</details>









---


### getPublicExtension
Get details of public extension



```javascript
// Promise
const promise = platformClient.partner.getPublicExtension({  extensionId : value });

// Async/Await
const data = await platformClient.partner.getPublicExtension({  extensionId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| extensionId | string | yes | Extension id |  



Use this API to get the details of public extensions

*Returned Response:*




[PublicExtension](#PublicExtension)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "category": {
    "categories_l1": [
      {
        "id": "62320b45f4213eb19aa8f44c",
        "slug": "marketing",
        "_id": "62320b45f4213eb19aa8f44c"
      }
    ],
    "categories_l2": [
      {
        "id": "62320b45f4213eb19aa8f4aa",
        "slug": "advertisement",
        "_id": "62320b45f4213eb19aa8f4aa",
        "parent": "62320b45f4213eb19aa8f44c"
      },
      {
        "id": "62320b45f4213eb19aa8f4c6",
        "slug": "marketing-analytics",
        "_id": "62320b45f4213eb19aa8f4c6",
        "parent": "62320b45f4213eb19aa8f44c"
      }
    ]
  },
  "listing_info": {
    "keywords": [],
    "name": "Newsletter Subscription",
    "tagline": "dsvsv",
    "icon": "https://hdn-1.addsale.com/x0/misc/pictures/free-icon/original/F9IzVxMC2-logo.png"
  },
  "details": {
    "screenshots": {
      "desktop": [
        "https://hdn-1.addsale.com/x0/misc/pictures/free-icon/original/nKlrV_01V-desk-sc-1.png",
        "https://hdn-1.addsale.com/x0/misc/pictures/free-icon/original/UZ0zmE2sW-desk-sc-2.png",
        "https://hdn-1.addsale.com/x0/misc/pictures/free-icon/original/cGtO7qpge-desk-sc-3.png"
      ],
      "mobile": [
        "https://hdn-1.addsale.com/x0/misc/pictures/free-icon/original/10Twf0N0R-mob-sc-1.png",
        "https://hdn-1.addsale.com/x0/misc/pictures/free-icon/original/CRHrGZf5n-mob-sc-2.png",
        "https://hdn-1.addsale.com/x0/misc/pictures/free-icon/original/nDsWxx2rB-mob-sc-3.png"
      ]
    },
    "integrations": [],
    "benefits": [
      {
        "_id": "623db9405ce44ba088b9c5bc",
        "title": "dsvsv",
        "description": "dvssdvdvdv"
      }
    ],
    "description": "<p>Now you can run referral campaigns that lets you and your existing customers refer their friends and family to register on your website.<br /><br />Features<br />&bull; Configure reward for the referrer<br />&bull; Configure reward for the one being referred<br />&bull; Set validity of referral and the reward<br />&bull; Enable/Disable referral campaigns</p>",
    "demo_url": "",
    "video_url": []
  },
  "contact_info": {
    "support": {
      "email": "aayushvjain@gofynd.com",
      "phone": "8767087087",
      "website_url": "",
      "faq_url": "",
      "privacy_policy_url": ""
    }
  },
  "coming_soon": {
    "upvote_count": 0,
    "is_coming_soon": false
  },
  "_id": "60bf7f734fe0a3c8e90e5b83",
  "scope": [
    "company/saleschannel",
    "company/application/settings"
  ],
  "plans": [
    {
      "name": "dbfd",
      "features": "ngfnfgm",
      "type": "free",
      "price": {
        "amount": 0,
        "currency": "INR"
      },
      "trial_days": 0,
      "additional_charges": ""
    }
  ],
  "extension_id": "609400409d0dcbdc2e6b76a5",
  "slug": "newsletter-subscription",
  "plan_type": "free",
  "current_status": "active",
  "organization_id": "610d178e2ab8f356aa98481b",
  "created_at": "2021-06-08T14:32:19.574Z",
  "modified_at": "2022-03-25T12:44:48.325Z",
  "plans_url": ""
}
```
</details>









---


### modifyPartnerRequest
Act on the pending partner request



```javascript
// Promise
const promise = platformClient.partner.modifyPartnerRequest({  inviteId : value,
 body : value });

// Async/Await
const data = await platformClient.partner.modifyPartnerRequest({  inviteId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| inviteId | string | yes | invitation id |  
| body | [ModifyPartnerReq](#ModifyPartnerReq) | yes | Request body |


Use this API to approve or reject the pending partner request

*Returned Response:*




[PartnerInviteDetails](#PartnerInviteDetails)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "_id": "637488936815adc2cd51e43a",
  "user_id": "27408062cc44eed4e39a7992",
  "organization_id": "610d178e2ab8f356aa98481b",
  "company_id": 559,
  "company_name": "Fynd1",
  "account_type": "live",
  "request_status": "pending",
  "requested_permissions": {
    "company_permissions": [
      "profile",
      "product",
      "order",
      "extension",
      "developer",
      "marketplace",
      "otherseller",
      "settings",
      "audit-trail"
    ],
    "application_permissions": [
      "settings",
      "staff",
      "marketing",
      "communication",
      "catalogue",
      "customer",
      "analytics",
      "storage",
      "support",
      "point_of_sale",
      "order"
    ],
    "company_role": [
      "custom"
    ],
    "application_role": [
      "admin"
    ]
  },
  "approved_permissions": {
    "company_permissions": [],
    "company_role": [
      "custom"
    ],
    "application_role": [
      "public"
    ]
  },
  "comment": "",
  "created_at": "2022-11-16T06:52:03.904Z",
  "modified_at": "2022-11-16T06:52:03.904Z"
}
```
</details>









---


### removeProxyPath
Remove proxy URL for the external URL



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").partner.removeProxyPath({  extensionId : value,
 attachedPath : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").partner.removeProxyPath({  extensionId : value,
 attachedPath : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| extensionId | string | yes | Extension id for which proxy URL needs to be removed |   
| attachedPath | string | yes | Attachaed path slug |  



Use this API to remove the proxy URL which is already generated for the external URL

*Returned Response:*




[RemoveProxyResponse](#RemoveProxyResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "message": "Proxy URL deleted",
  "data": {
    "_id": "607406b8a472cd527303692f",
    "attached_path": "test",
    "proxy_url": "https://www.abc.com",
    "company_id": "1",
    "application_id": "000000000000000000000004",
    "extension_id": "6073280be899ea5b1150fd9d",
    "created_at": "2021-04-12T08:37:12.077Z",
    "modified_at": "2021-04-12T08:37:12.077Z"
  }
}
```
</details>









---


### setupProducts




```javascript
// Promise
const promise = platformClient.partner.setupProducts({  requestId : value });

// Async/Await
const data = await platformClient.partner.setupProducts({  requestId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| requestId | string | no | extrequest id |  



Use this API for setup

*Returned Response:*




[SetupProductRes](#SetupProductRes)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "message": "Brand Updated Successfully",
  "request_id": "f1af3b4a-b32a-414f-a139-2d453f645b72",
  "next_step": 2,
  "cli_wait_time": 100
}
```
</details>









---


### subscribeExtension
Subscribe for extension plan



```javascript
// Promise
const promise = platformClient.partner.subscribeExtension({  entity : value,
 extensionId : value,
 entityId : value,
 body : value });

// Async/Await
const data = await platformClient.partner.subscribeExtension({  entity : value,
 extensionId : value,
 entityId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| entity | string | yes | entity |   
| extensionId | string | yes | extension id |   
| entityId | string | yes | entity id |  
| body | [SubscriptionRequest](#SubscriptionRequest) | yes | Request body |


Use this API to select plan for paid extension

*Returned Response:*




[SubscriptionRes](#SubscriptionRes)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "redirect_url": "https://playground-js.extensions.fyndx0.de/company/1/subscription-status?approved=true&subscription_id=636a43c96d9bff8bd968290c&company_id=1&entity=subscription"
}
```
</details>









---



### Schemas


#### [AddProxyReq](#AddProxyReq)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | attached_path | string? |  yes  | Proxy path slug |
 | proxy_url | string? |  yes  | The external URL for which the proxy URL will be generated |
 

---

#### [AddProxyResponse](#AddProxyResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | application_id | string? |  yes  |  |
 | attached_path | string? |  yes  |  |
 | company_id | string? |  yes  |  |
 | created_at | string? |  yes  |  |
 | extension_id | string? |  yes  |  |
 | modified_at | string? |  yes  |  |
 | proxy_url | string? |  yes  |  |
 

---

#### [APIError](#APIError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string? |  yes  |  |
 | info | string? |  yes  | Error code description link |
 | message | string? |  yes  |  |
 | meta | string? |  yes  |  |
 | request_id | string? |  yes  |  |
 

---

#### [ApplicationPermissions](#ApplicationPermissions)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | permissions | [string]? |  yes  |  |
 | roles | [string]? |  yes  |  |
 

---

#### [ApprovedPermissions](#ApprovedPermissions)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application_role | [string]? |  yes  |  |
 | company_permissions | [string]? |  yes  |  |
 | company_role | [string]? |  yes  |  |
 

---

#### [ApprovedPermissionsInfo](#ApprovedPermissionsInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application_permissions | [String: [ApplicationPermissions](#ApplicationPermissions)]? |  yes  |  |
 | company_permissions | [string]? |  yes  |  |
 

---

#### [Benefits](#Benefits)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string? |  yes  |  |
 | title | string? |  yes  |  |
 

---

#### [Callback](#Callback)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | auth | string? |  yes  |  |
 | auto_install | string? |  yes  |  |
 | install | string? |  yes  |  |
 | setup | string? |  yes  |  |
 | uninstall | string? |  yes  |  |
 

---

#### [Category](#Category)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | category_l1 | [[CategoryL1](#CategoryL1)]? |  yes  |  |
 | category_l2 | [[CategoryL2](#CategoryL2)]? |  yes  |  |
 

---

#### [CategoryL1](#CategoryL1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | description | string? |  yes  |  |
 | display | string? |  yes  |  |
 | level | number? |  yes  |  |
 | logo | string? |  yes  |  |
 | slug | string? |  yes  |  |
 | value | string? |  yes  |  |
 

---

#### [CategoryL2](#CategoryL2)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | display | string? |  yes  |  |
 | level | number? |  yes  |  |
 | parent | string? |  yes  |  |
 | slug | string? |  yes  |  |
 | value | string? |  yes  |  |
 

---

#### [CommingSoon](#CommingSoon)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_coming_soon | boolean? |  yes  |  |
 | upvote_count | number? |  yes  |  |
 

---

#### [ContactInfo](#ContactInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | support | [Support](#Support)? |  yes  |  |
 

---

#### [ExtensionCommon](#ExtensionCommon)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | base_url | string? |  yes  |  |
 | callbacks | [Callback](#Callback)? |  yes  |  |
 | contact_email | string? |  yes  |  |
 | current_status | string? |  yes  |  |
 | description | string? |  yes  |  |
 | developed_by_name | string? |  yes  |  |
 | ext_version | string? |  yes  |  |
 | extention_type | string? |  yes  |  |
 | is_application_level | boolean? |  yes  |  |
 | is_coming_soon | boolean? |  yes  |  |
 | is_saleschannel | boolean? |  yes  |  |
 | logo | [Logo](#Logo)? |  yes  |  |
 | name | string? |  yes  |  |
 | scope | [string]? |  yes  |  |
 

---

#### [ExtensionDetails](#ExtensionDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | benefits | [[Benefits](#Benefits)]? |  yes  |  |
 | demo_url | string? |  yes  |  |
 | description | string? |  yes  |  |
 | integration | [string]? |  yes  |  |
 | screenshots | [Screenshots](#Screenshots)? |  yes  |  |
 | video_url | [string]? |  yes  |  |
 | youtube | [string]? |  yes  |  |
 

---

#### [ExtensionItems](#ExtensionItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | base_url | string? |  yes  |  |
 | company | string? |  yes  |  |
 | description | string? |  yes  |  |
 | developed_by_name | string? |  yes  |  |
 | ext_version | string? |  yes  |  |
 | extension_id | string? |  yes  |  |
 | extention_type | string? |  yes  |  |
 | installed | boolean? |  yes  |  |
 | is_saleschannel | boolean? |  yes  |  |
 | launch_url | string? |  yes  |  |
 | logo | [Logo](#Logo)? |  yes  |  |
 | name | string? |  yes  |  |
 | scope | [[Scope](#Scope)]? |  yes  |  |
 

---

#### [ExtensionList](#ExtensionList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[ExtensionItems](#ExtensionItems)]? |  yes  |  |
 | page | [Pagination](#Pagination)? |  yes  |  |
 

---

#### [ExtensionListItems](#ExtensionListItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | base_url | string? |  yes  |  |
 | callbacks | [Callback](#Callback)? |  yes  |  |
 | contact_email | string? |  yes  |  |
 | created_at | string? |  yes  |  |
 | current_status | string? |  yes  |  |
 | description | string? |  yes  |  |
 | developed_by_name | string? |  yes  |  |
 | ext_version | string? |  yes  |  |
 | extention_type | string? |  yes  |  |
 | is_application_level | boolean? |  yes  |  |
 | is_coming_soon | boolean? |  yes  |  |
 | is_hidden | boolean? |  yes  |  |
 | is_saleschannel | boolean? |  yes  |  |
 | logo | [Logo](#Logo)? |  yes  |  |
 | modified_at | string? |  yes  |  |
 | name | string? |  yes  |  |
 | organization_id | string? |  yes  |  |
 | scope | [string]? |  yes  |  |
 | whitelisted_urls | [string]? |  yes  |  |
 

---

#### [ExtensionResponse](#ExtensionResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[ExtensionListItems](#ExtensionListItems)]? |  yes  |  |
 | page | [Pagination](#Pagination)? |  yes  |  |
 

---

#### [ExtensionSuggestion](#ExtensionSuggestion)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | listing_info | [ListingInfo](#ListingInfo)? |  yes  |  |
 | organization | [OrganizationBasicInfo](#OrganizationBasicInfo)? |  yes  |  |
 | organization_id | string? |  yes  |  |
 | plans | [[Plan](#Plan)]? |  yes  |  |
 | slug | string? |  yes  |  |
 

---

#### [ExtensionSuggestionList](#ExtensionSuggestionList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[ExtensionSuggestion](#ExtensionSuggestion)]? |  yes  |  |
 

---

#### [getProxyPathRes](#getProxyPathRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[AddProxyResponse](#AddProxyResponse)]? |  yes  |  |
 | page | [Pagination](#Pagination)? |  yes  |  |
 

---

#### [ListingInfo](#ListingInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | icon | string? |  yes  |  |
 | keywords | [string]? |  yes  |  |
 | name | string? |  yes  |  |
 | tagline | string? |  yes  |  |
 

---

#### [Logo](#Logo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | large | string? |  yes  |  |
 | small | string? |  yes  |  |
 

---

#### [ModifyPartnerReq](#ModifyPartnerReq)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | account_type | string? |  yes  |  |
 | approved_permissions | [ApprovedPermissionsInfo](#ApprovedPermissionsInfo)? |  yes  |  |
 | comment | string? |  yes  |  |
 | company_id | number? |  yes  |  |
 | company_name | string? |  yes  |  |
 | organization_id | string? |  yes  |  |
 | organization_name | string? |  yes  |  |
 | request_status | string? |  yes  |  |
 | requested_permissions | [RequestedPermissions](#RequestedPermissions)? |  yes  |  |
 | user_id | string? |  yes  |  |
 

---

#### [OrganizationBasicInfo](#OrganizationBasicInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string? |  yes  |  |
 | slug | string? |  yes  |  |
 

---

#### [Pagination](#Pagination)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number? |  yes  |  |
 | has_next | boolean? |  yes  |  |
 | item_total | number? |  yes  |  |
 | size | number? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [PartnerInviteDetails](#PartnerInviteDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | account_type | string? |  yes  |  |
 | approved_permissions | [ApprovedPermissions](#ApprovedPermissions)? |  yes  |  |
 | comment | string? |  yes  |  |
 | company_id | number? |  yes  |  |
 | company_name | string? |  yes  |  |
 | created_at | string? |  yes  |  |
 | modified_at | string? |  yes  |  |
 | organization_id | string? |  yes  |  |
 | organization_name | string? |  yes  |  |
 | request_status | string? |  yes  |  |
 | requested_permissions | [RequestedPermissions](#RequestedPermissions)? |  yes  |  |
 | user_id | string? |  yes  |  |
 

---

#### [PartnerList](#PartnerList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | account_type | string? |  yes  |  |
 | approved_permissions | [ApprovedPermissionsInfo](#ApprovedPermissionsInfo)? |  yes  |  |
 | approver_id | string? |  yes  |  |
 | comment | string? |  yes  |  |
 | company_id | number? |  yes  |  |
 | company_name | string? |  yes  |  |
 | created_at | string? |  yes  |  |
 | modified_at | string? |  yes  |  |
 | organization_id | string? |  yes  |  |
 | organization_name | string? |  yes  |  |
 | request_status | string? |  yes  |  |
 | requested_permissions | [RequestedPermissions](#RequestedPermissions)? |  yes  |  |
 | user_id | string? |  yes  |  |
 

---

#### [PartnerRequestList](#PartnerRequestList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [PartnerList](#PartnerList)? |  yes  |  |
 | page | [Pagination](#Pagination)? |  yes  |  |
 

---

#### [Plan](#Plan)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | additional_charges | string? |  yes  |  |
 | features | string? |  yes  |  |
 | name | string? |  yes  |  |
 | price | [Price](#Price)? |  yes  |  |
 | trial_days | number? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [Plans](#Plans)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | additional_charges | string? |  yes  |  |
 | features | string? |  yes  |  |
 | name | string? |  yes  |  |
 | price | [Price](#Price)? |  yes  |  |
 | trial_days | number? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [Price](#Price)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | number? |  yes  |  |
 | currency | string? |  yes  |  |
 

---

#### [PublicExtension](#PublicExtension)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | category | [Category](#Category)? |  yes  |  |
 | coming_soon | [CommingSoon](#CommingSoon)? |  yes  |  |
 | contact_info | [ContactInfo](#ContactInfo)? |  yes  |  |
 | created_at | string? |  yes  |  |
 | current_status | string? |  yes  |  |
 | details | [ExtensionDetails](#ExtensionDetails)? |  yes  |  |
 | extension_id | string? |  yes  |  |
 | is_coming_soon | boolean? |  yes  |  |
 | listing_info | [ListingInfo](#ListingInfo)? |  yes  |  |
 | modified_at | string? |  yes  |  |
 | organization | [OrganizationBasicInfo](#OrganizationBasicInfo)? |  yes  |  |
 | organization_id | string? |  yes  |  |
 | plan_type | string? |  yes  |  |
 | plans | [[Plans](#Plans)]? |  yes  |  |
 | plans_url | string? |  yes  |  |
 | review_instructions | string? |  yes  |  |
 | scope | [string]? |  yes  |  |
 | slug | string? |  yes  |  |
 

---

#### [RemoveProxyResponse](#RemoveProxyResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | string? |  yes  |  |
 | message | string? |  yes  |  |
 

---

#### [RequestedPermissions](#RequestedPermissions)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application_permissions | [string]? |  yes  |  |
 | application_role | [string]? |  yes  |  |
 | company_permissions | [string]? |  yes  |  |
 | company_role | [string]? |  yes  |  |
 

---

#### [Scope](#Scope)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string? |  yes  |  |
 | name | string? |  yes  |  |
 

---

#### [Screenshots](#Screenshots)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | desktop | [string]? |  yes  |  |
 | mobile | [string]? |  yes  |  |
 

---

#### [SetupProductRes](#SetupProductRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cli_wait_time | number? |  yes  |  |
 | message | string? |  yes  |  |
 | next_step | number? |  yes  |  |
 | request_id | string? |  yes  |  |
 

---

#### [SubscriptionRequest](#SubscriptionRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | approved | string? |  yes  |  |
 | client_id | string? |  yes  |  |
 | company_id | string? |  yes  |  |
 | credit_balance | string? |  yes  |  |
 | request_id | string? |  yes  |  |
 

---

#### [SubscriptionRes](#SubscriptionRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | redirect_url | string? |  yes  |  |
 

---

#### [Support](#Support)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | string? |  yes  |  |
 | faq_url | string? |  yes  |  |
 | phone | string? |  yes  |  |
 | privacy_policy_url | string? |  yes  |  |
 | website_url | string? |  yes  |  |
 

---

#### [UninstallExtension](#UninstallExtension)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean? |  yes  |  |
 

---




