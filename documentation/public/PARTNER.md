




##### [Back to Public docs](./README.md)

## Partner Methods
Partner configuration apis

* [getPanelExtensionDetails](#getpanelextensiondetails)



## Methods with example and description




### getPanelExtensionDetails
Get extension details



```javascript
// Promise
const promise = publicClient.partner.getPanelExtensionDetails({  slug : value });

// Async/Await
const data = await publicClient.partner.getPanelExtensionDetails({  slug : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| slug | string | yes | pass the slug of the extension |  



Use this API to get extension details

*Returned Response:*




[ExtensionUsingSlug](#ExtensionUsingSlug)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "_id": "633ab5cb635a41fdde9fb648",
  "organization_id": "6333fef3b1d85e44e738c138",
  "extension_id": "633425ebb1d85e44e738c2ab",
  "slug": "example-extension-1",
  "scope": [
    "company/profile",
    "company/saleschannel",
    "company/product",
    "company/order",
    "company/application/customer",
    "company/application/analytics",
    "company/application/storage",
    "company/application/marketing",
    "company/application/catalogue",
    "company/application/communication",
    "company/application/support",
    "company/application/order",
    "company/application/settings"
  ],
  "category": {
    "categories_l1": [],
    "categories_l2": []
  },
  "listing_info": {
    "name": "ujjawal-example-extension-1",
    "keywords": [],
    "tagline": "test-extension for test how extensions look and work and how to create them",
    "icon": "https://hdn-1.addsale.com/x0/misc/pictures/free-icon/original/AMwIEOw0U-logo.png"
  },
  "details": {
    "benefits": [
      {
        "title": "Works fast",
        "description": "works fast",
        "_id": "633ab5cb635a41fdde9fb649"
      }
    ],
    "screenshots": {
      "desktop": [
        "https://hdn-1.addsale.com/x0/misc/pictures/free-icon/original/g95yHXkou-1024x576.png",
        "https://hdn-1.addsale.com/x0/misc/pictures/free-icon/original/IKdHxP2fN-1024x576.png",
        "https://hdn-1.addsale.com/x0/misc/pictures/free-icon/original/_auq1yvEp-1024x576.png"
      ],
      "mobile": [
        "https://hdn-1.addsale.com/x0/misc/pictures/free-icon/original/E_YAHM9cU-600x900.png",
        "https://hdn-1.addsale.com/x0/misc/pictures/free-icon/original/vEnXw9cCg-600x900.png",
        "https://hdn-1.addsale.com/x0/misc/pictures/free-icon/original/O3Wng4Rqn-600x900.png"
      ]
    },
    "description": "Sample public extension",
    "demo_url": "",
    "video_url": [
      {
        "type": "video",
        "url": "https://hdn-1.addsale.com/x0/products/videos/item/free/original/kizLVNWyS-video-sc-1.mp4"
      }
    ],
    "integrations": []
  },
  "plan_type": "free",
  "plans": [
    {
      "name": "Custom Free",
      "features": "provides ease",
      "type": "free",
      "price": {
        "amount": 0,
        "currency": "INR"
      },
      "trial_days": 0,
      "additional_charges": ""
    }
  ],
  "plans_url": "",
  "contact_info": {
    "support": {
      "email": "ujjawaltaleja@gofynd.com",
      "phone": "7988169279",
      "website_url": "",
      "faq_url": "",
      "privacy_policy_url": ""
    }
  },
  "current_status": "active",
  "coming_soon": {
    "is_coming_soon": false,
    "upvote_count": 0
  },
  "created_at": "2022-10-03T10:13:31.607Z",
  "modified_at": "2022-10-03T10:13:31.607Z",
  "organization": {
    "name": "ujjawal-partners-fashion",
    "slug": "ujjawa-w7t-68"
  }
}
```
</details>









---



### Schemas


#### [Benefits](#Benefits)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string? |  yes  |  |
 | title | string? |  yes  |  |
 

---

#### [CategoryCommon](#CategoryCommon)

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

#### [ContactInfo](#ContactInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | support | [Support](#Support)? |  yes  |  |
 

---

#### [Details](#Details)

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

#### [ExtensionUsingSlug](#ExtensionUsingSlug)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | category | [CategoryCommon](#CategoryCommon)? |  yes  |  |
 | contact_info | [ContactInfo](#ContactInfo)? |  yes  |  |
 | created_at | string? |  yes  |  |
 | current_status | string? |  yes  |  |
 | details | [Details](#Details)? |  yes  |  |
 | extension_id | string? |  yes  |  |
 | is_coming_soon | boolean? |  yes  |  |
 | listing_info | [ListingInfo](#ListingInfo)? |  yes  |  |
 | modified_at | string? |  yes  |  |
 | organization | [Organization](#Organization)? |  yes  |  |
 | organization_id | string? |  yes  |  |
 | plan_type | string? |  yes  |  |
 | plans | [[Plans](#Plans)]? |  yes  |  |
 | plans_url | string? |  yes  |  |
 | review_instructions | string? |  yes  |  |
 | scope | [string]? |  yes  |  |
 | slug | string? |  yes  |  |
 

---

#### [ListingInfo](#ListingInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | icon | string? |  yes  |  |
 | keywords | [string]? |  yes  |  |
 | name | string? |  yes  |  |
 | tagline | string? |  yes  |  |
 

---

#### [Organization](#Organization)

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
 | recurring | [Recurring](#Recurring)? |  yes  |  |
 | trial_days | number? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [Price](#Price)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | number? |  yes  |  |
 | currency | string? |  yes  |  |
 

---

#### [Recurring](#Recurring)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | recurring_time | number? |  yes  |  |
 | type | string? |  yes  |  |
 | yearly_amount | number? |  yes  |  |
 

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




