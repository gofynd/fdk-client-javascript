




##### [Back to Partner docs](./README.md)

## Partner Methods
Partner configuration apis

* [createExtension](#createextension)
* [getExtensionById](#getextensionbyid)
* [submitExtensionForReview](#submitextensionforreview)
* [unpubishExtension](#unpubishextension)



## Methods with example and description




### createExtension
Create new extension



```javascript
// Promise
const promise = partnerClient.partner.createExtension({  organizationId : value,
 body : value });

// Async/Await
const data = await partnerClient.partner.createExtension({  organizationId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| organizationId | string | yes | Organization id (partner account id) |  
| body | [ExtensionCommon](#ExtensionCommon) | yes | Request body |


Use this API to create new extension

*Returned Response:*




[CreateExtensionResponse](#CreateExtensionResponse)

Extension updated successfully




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "name": "Test extension",
  "description": "test description here!!",
  "base_url": "https://www.google.com",
  "logo": {
    "small": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/x0/misc/pictures/free-icon/original/BrAaFIpjs-logo.jpeg",
    "large": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/x0/misc/pictures/free-icon/original/BrAaFIpjs-logo.jpeg"
  },
  "whitelisted_urls": [],
  "ext_version": "1.0.0",
  "extention_type": "public",
  "is_application_level": false,
  "is_saleschannel": false,
  "organization_id": "610d178e2ab8f356aa98481b",
  "contact_email": "karankaneria@gofynd.com",
  "scope": [
    "company/profile",
    "company/saleschannel",
    "company/application/customer",
    "company/application/analytics",
    "company/application/storage"
  ],
  "callbacks": {
    "setup": "https://www.google.com/fp/setup",
    "auth": "https://www.google.com/fp/auth",
    "install": "https://www.google.com/fp/install",
    "uninstall": "https://www.google.com/fp/uninstall",
    "auto_install": "https://www.google.com/fp/auto_install"
  },
  "developed_by_name": "Fynd",
  "is_hidden": false,
  "_id": "635112da7c82c9ef35a0cffe",
  "created_at": "2022-10-20T09:20:26.397Z",
  "modified_at": "2022-10-20T09:20:26.397Z",
  "__v": 0,
  "client_id": "635112da7c82c9ef35a0cffe",
  "secret": [
    "xxxxxxx"
  ],
  "cluster": "https://api.fyndx0.de"
}
```
</details>









---


### getExtensionById
Get the details of extension



```javascript
// Promise
const promise = partnerClient.partner.getExtensionById({  organizationId : value,
 extensionId : value });

// Async/Await
const data = await partnerClient.partner.getExtensionById({  organizationId : value,
 extensionId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| organizationId | string | yes | Organization id (partner account id) |   
| extensionId | string | yes | Extension id |  



Use this API to get details of extension

*Returned Response:*




[Extension](#Extension)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "logo": {
    "small": "https://hdn-1.addsale.com/x0/misc/pictures/free-icon/original/o5h6JynOE-logo.png",
    "large": "https://hdn-1.addsale.com/x0/misc/pictures/free-icon/original/o5h6JynOE-logo.png"
  },
  "callbacks": {
    "setup": "https://email.extensions.fyndx0.de/fp/setup",
    "auth": "https://email.extensions.fyndx0.de/fp/auth",
    "install": "https://email.extensions.fyndx0.de/fp/install",
    "uninstall": "https://email.extensions.fyndx0.de/fp/uninstall",
    "auto_install": "https://email.extensions.fyndx0.de/fp/auto_install"
  },
  "_id": "61922f28c3b74507646b4421",
  "description": "",
  "whitelisted_urls": [],
  "ext_version": "1.0.0",
  "extention_type": "private",
  "is_application_level": false,
  "is_saleschannel": false,
  "scope": [
    "company/profile",
    "company/saleschannel"
  ],
  "name": "Email Inventory",
  "base_url": "https://email.extensions.fyndx0.de",
  "developed_by_name": "Fynd",
  "contact_email": "regrowth@gofynd.com",
  "organization_id": "610d178e2ab8f356aa98481b",
  "created_at": "2021-11-15T09:58:00.574Z",
  "modified_at": "2022-06-16T15:18:23.523Z",
  "__v": 0,
  "is_hidden": false,
  "client_data": {
    "client_id": "xxxxxx",
    "secret": [
      "xxxxxx"
    ]
  }
}
```
</details>









---


### submitExtensionForReview
Submit extension for review



```javascript
// Promise
const promise = partnerClient.partner.submitExtensionForReview({  organizationId : value,
 extensionId : value,
 body : value });

// Async/Await
const data = await partnerClient.partner.submitExtensionForReview({  organizationId : value,
 extensionId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| organizationId | string | yes | Organization id (partner account id) |   
| extensionId | string | yes | Extension id |  
| body | [ExtensionDraftRequest](#ExtensionDraftRequest) | yes | Request body |


Use this API to submit the extension for review

*Returned Response:*




[ExtensionLatestReview](#ExtensionLatestReview)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "listing_info": {
    "name": "testxt",
    "keywords": [],
    "tagline": "teTestteTestteTestteTestteTestteTestteTestteTestteTest",
    "icon": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1566539375/production/media/store/logo/jwosxsgh9ufoucdxpm10.png"
  },
  "details": {
    "benefits": [
      {
        "title": "Test",
        "description": "test"
      }
    ],
    "screenshots": {
      "desktop": [
        "https://hdn-1.addsale.com/x0/misc/pictures/free-icon/original/ZQASnZk1V-1600x900.png",
        "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/x0/misc/pictures/free-icon/original/CO9LcfUJh-desk-sc-2.jpeg",
        "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/x0/misc/pictures/free-icon/original/CMktmxc2I-desk-sc-3.jpeg"
      ],
      "mobile": [
        "https://hdn-1.addsale.com/x0/misc/pictures/free-icon/original/QFtQTD97o-800x1200.png",
        "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/x0/misc/pictures/free-icon/original/BP88G87Qz-mob-sc-2.jpeg",
        "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/x0/misc/pictures/free-icon/original/z0iWBUIwp-mob-sc-3.jpeg"
      ]
    },
    "description": "<p>Test</p>",
    "demo_url": "",
    "video_url": [
      {
        "type": "youtube",
        "url": "https://www.youtube.com/embed/4vpfmr6M4FU?loop=1"
      },
      {
        "type": "youtube",
        "url": "https://www.youtube.com/embed/4vpfmr6M4FU?loop=1"
      }
    ],
    "integrations": []
  },
  "contact_info": {
    "submission_email": "regrowth@gofynd.com",
    "review_notification_email": "regrowth@gofynd.com",
    "support": {
      "email": "regrowth@gofynd.com",
      "phone": "8767087087",
      "website_url": "",
      "faq_url": "",
      "privacy_policy_url": ""
    }
  },
  "category": {
    "categories_l1": [],
    "categories_l2": []
  },
  "_id": "619f62a74a74abb3324a6cad",
  "scope": [
    "company/profile"
  ],
  "plans": [
    {
      "name": "Test",
      "features": "test",
      "type": "free",
      "price": {
        "amount": 0,
        "currency": "INR"
      },
      "trial_days": 0,
      "additional_charges": ""
    }
  ],
  "extension_id": "6113bcfe193f517dfbd6f29b",
  "slug": "testxt",
  "plan_type": "free",
  "plans_url": "",
  "review_instructions": "",
  "current_status": "pending",
  "organization_id": "610d178e2ab8f356aa98481b",
  "created_at": "2021-11-25T10:17:11.300Z",
  "modified_at": "2022-10-28T06:17:24.245Z",
  "is_coming_soon": false
}
```
</details>









---


### unpubishExtension
Submit extension for unpublish



```javascript
// Promise
const promise = partnerClient.partner.unpubishExtension({  organizationId : value,
 extensionId : value,
 body : value });

// Async/Await
const data = await partnerClient.partner.unpubishExtension({  organizationId : value,
 extensionId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| organizationId | string | yes | Organization id (partner account id) |   
| extensionId | string | yes | Extension id |  
| body | [ExtensionUnpublishRequest](#ExtensionUnpublishRequest) | yes | Request body |


Use this API to unpublish the extension

*Returned Response:*




[ExtensionLatestReview](#ExtensionLatestReview)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "listing_info": {
    "name": "testxt",
    "keywords": [],
    "tagline": "teTestteTestteTestteTestteTestteTestteTestteTestteTest",
    "icon": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1566539375/production/media/store/logo/jwosxsgh9ufoucdxpm10.png"
  },
  "details": {
    "benefits": [
      {
        "title": "Test",
        "description": "test"
      }
    ],
    "screenshots": {
      "desktop": [
        "https://hdn-1.addsale.com/x0/misc/pictures/free-icon/original/ZQASnZk1V-1600x900.png",
        "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/x0/misc/pictures/free-icon/original/CO9LcfUJh-desk-sc-2.jpeg",
        "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/x0/misc/pictures/free-icon/original/CMktmxc2I-desk-sc-3.jpeg"
      ],
      "mobile": [
        "https://hdn-1.addsale.com/x0/misc/pictures/free-icon/original/QFtQTD97o-800x1200.png",
        "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/x0/misc/pictures/free-icon/original/BP88G87Qz-mob-sc-2.jpeg",
        "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/x0/misc/pictures/free-icon/original/z0iWBUIwp-mob-sc-3.jpeg"
      ]
    },
    "description": "<p>Test</p>",
    "demo_url": "",
    "video_url": [
      {
        "type": "youtube",
        "url": "https://www.youtube.com/embed/4vpfmr6M4FU?loop=1"
      },
      {
        "type": "youtube",
        "url": "https://www.youtube.com/embed/4vpfmr6M4FU?loop=1"
      }
    ],
    "integrations": []
  },
  "contact_info": {
    "submission_email": "regrowth@gofynd.com",
    "review_notification_email": "regrowth@gofynd.com",
    "support": {
      "email": "regrowth@gofynd.com",
      "phone": "8767087087",
      "website_url": "",
      "faq_url": "",
      "privacy_policy_url": ""
    }
  },
  "category": {
    "categories_l1": [],
    "categories_l2": []
  },
  "_id": "619f62a74a74abb3324a6cad",
  "scope": [
    "company/profile"
  ],
  "plans": [
    {
      "name": "Test",
      "features": "test",
      "type": "free",
      "price": {
        "amount": 0,
        "currency": "INR"
      },
      "trial_days": 0,
      "additional_charges": ""
    }
  ],
  "extension_id": "6113bcfe193f517dfbd6f29b",
  "slug": "testxt",
  "plan_type": "free",
  "plans_url": "",
  "review_instructions": "",
  "current_status": "pending",
  "organization_id": "610d178e2ab8f356aa98481b",
  "created_at": "2021-11-25T10:17:11.300Z",
  "modified_at": "2022-10-28T06:17:24.245Z",
  "is_coming_soon": false
}
```
</details>









---



### Schemas


#### [Benefits](#Benefits)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string? |  yes  |  |
 | image | string? |  yes  |  |
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

#### [ClientData](#ClientData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | client_id | string? |  yes  |  |
 | secret | [string]? |  yes  |  |
 

---

#### [ContactInfo](#ContactInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | review_notification_email | string? |  yes  |  |
 | submission_email | string? |  yes  |  |
 | support | [Support](#Support)? |  yes  |  |
 

---

#### [CreateExtensionResponse](#CreateExtensionResponse)

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
 | secret | [string]? |  yes  |  |
 | whitelisted_urls | [string]? |  yes  |  |
 

---

#### [Extension](#Extension)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | base_url | string? |  yes  |  |
 | callbacks | [Callback](#Callback)? |  yes  |  |
 | client_data | [ClientData](#ClientData)? |  yes  |  |
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
 | organization_id | string? |  yes  |  |
 | scope | [string]? |  yes  |  |
 | whitelisted_urls | [string]? |  yes  |  |
 

---

#### [ExtensionDraftRequest](#ExtensionDraftRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | category | [Category](#Category)? |  yes  |  |
 | contact_info | [ContactInfo](#ContactInfo)? |  yes  |  |
 | created_at | string? |  yes  |  |
 | current_status | string? |  yes  |  |
 | details | [ExtensionExtraDetails](#ExtensionExtraDetails)? |  yes  |  |
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

#### [ExtensionExtraDetails](#ExtensionExtraDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | benefits | [[Benefits](#Benefits)]? |  yes  |  |
 | demo_url | string? |  yes  |  |
 | description | string? |  yes  |  |
 | featured_banner | string? |  yes  |  |
 | integration | [string]? |  yes  |  |
 | integrations | string? |  yes  |  |
 | screenshots | [Screenshots](#Screenshots)? |  yes  |  |
 | video_url | [string]? |  yes  |  |
 | youtube | [string]? |  yes  |  |
 

---

#### [ExtensionLatestReview](#ExtensionLatestReview)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | category | [Category](#Category)? |  yes  |  |
 | contact_info | [ContactInfo](#ContactInfo)? |  yes  |  |
 | created_at | string? |  yes  |  |
 | current_status | string? |  yes  |  |
 | details | [ExtensionExtraDetails](#ExtensionExtraDetails)? |  yes  |  |
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

#### [ExtensionUnpublishRequest](#ExtensionUnpublishRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string? |  yes  |  |
 | reason | string? |  yes  |  |
 

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

#### [OrganizationBasicInfo](#OrganizationBasicInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string? |  yes  |  |
 | slug | string? |  yes  |  |
 

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

#### [Screenshots](#Screenshots)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | desktop | [string]? |  yes  |  |
 | mobile | [string]? |  yes  |  |
 

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




