



##### [Back to Platform docs](./README.md)

## Cart Methods
Cart APIs
* [getCoupons](#getcoupons)
* [createCoupon](#createcoupon)
* [getCouponById](#getcouponbyid)
* [updateCoupon](#updatecoupon)
* [updateCouponPartially](#updatecouponpartially)
* [getPromotions](#getpromotions)
* [createPromotion](#createpromotion)
* [getPromotionById](#getpromotionbyid)
* [updatePromotion](#updatepromotion)
* [updatePromotionPartially](#updatepromotionpartially)
* [getPromosCouponConfig](#getpromoscouponconfig)
* [fetchAndvalidateCartItems](#fetchandvalidatecartitems)
* [checkCartServiceability](#checkcartserviceability)
* [checkoutCart](#checkoutcart)



## Methods with example and description


### getCoupons
Get with single coupon details or coupon list



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").cart.getCoupons({  pageNo : value,
 pageSize : value,
 isArchived : value,
 title : value,
 isPublic : value,
 isDisplay : value,
 typeSlug : value,
 code : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").cart.getCoupons({  pageNo : value,
 pageSize : value,
 isArchived : value,
 title : value,
 isPublic : value,
 isDisplay : value,
 typeSlug : value,
 code : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNo | number | no |  |    
| pageSize | number | no |  |    
| isArchived | boolean | no |  |    
| title | string | no |  |    
| isPublic | boolean | no |  |    
| isDisplay | boolean | no |  |    
| typeSlug | string | no |  |    
| code | string | no |  |  



Get coupon list with pagination

*Returned Response:*




[CouponsResponse](#CouponsResponse)

Coupon List for sent page_size and page_no




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Coupon list for sent filter and page size</i></summary>

```json
{
  "value": {
    "items": [
      {
        "_id": "5e1d9bec6d6b7e000146c840",
        "display_meta": {
          "title": "percent50 title"
        },
        "_schedule": {
          "next_schedule": [
            {
              "start": "2020-01-14T10:45:03.600000+00:00",
              "end": "2020-01-16T10:45:03+00:00"
            }
          ],
          "duration": null,
          "start": "2020-01-14T10:45:03.600000+00:00",
          "end": "2020-01-16T10:45:03+00:00",
          "cron": ""
        },
        "state": {
          "is_public": true,
          "is_display": true,
          "is_archived": false
        },
        "ownership": {
          "payable_category": "seller",
          "payable_by": ""
        },
        "code": "percent50",
        "rule_definition": {
          "type": "percentage",
          "scope": [
            "category_id"
          ],
          "applicable_on": "quantity"
        }
      }
    ],
    "page": {
      "has_next": true,
      "size": 10,
      "current": 1,
      "item_total": 30
    }
  }
}
```
</details>

</details>









---


### createCoupon
Create new coupon



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").cart.createCoupon({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").cart.createCoupon({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CouponAdd](#CouponAdd) | yes | Request body |


Create new coupon

*Returned Response:*




[SuccessMessage](#SuccessMessage)

Coupon Created successfully




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "message": "Coupon Created"
}
```
</details>









---


### getCouponById
Get with single coupon details or coupon list



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").cart.getCouponById({  id : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").cart.getCouponById({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes |  |  



Get single coupon details with `id` in path param

*Returned Response:*




[CouponUpdate](#CouponUpdate)

Coupon object for sent `id`




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "_id": "5e1d9bec6d6b7e000146c840",
  "validation": {
    "anonymous": true,
    "app_id": [
      "5cd3db5e9d692cfe5302a7ba"
    ],
    "user_registered_after": null
  },
  "rule": [
    {
      "key": 1,
      "max": 1500,
      "min": 3000,
      "value": 50
    }
  ],
  "display_meta": {
    "title": "percent50 title",
    "description": "percent50 description",
    "auto": {
      "title": "",
      "subtitle": ""
    },
    "subtitle": "percent50 subtitle",
    "remove": {
      "title": "",
      "subtitle": ""
    },
    "apply": {
      "title": "percen50 mt",
      "subtitle": "percen50 ms"
    }
  },
  "date_meta": {
    "modified_on": "2020-02-04T14:27:00.577000+00:00",
    "created_on": "2020-01-14T10:46:04.474000+00:00"
  },
  "action": {
    "action_date": null,
    "txn_mode": "coupon"
  },
  "identifiers": {
    "category_id": [
      465,
      192,
      133,
      134,
      150,
      151,
      155,
      193,
      157,
      191,
      154,
      152,
      417,
      168,
      416,
      167,
      166,
      162,
      161,
      163,
      165,
      160
    ],
    "user_id": [],
    "store_id": [],
    "company_id": []
  },
  "author": {
    "modified_by": "23109086",
    "created_by": "23206328"
  },
  "_schedule": {
    "next_schedule": [
      {
        "start": "2020-01-14T10:45:03.600000+00:00",
        "end": "2020-01-16T10:45:03+00:00"
      }
    ],
    "duration": null,
    "start": "2020-01-14T10:45:03.600000+00:00",
    "end": "2020-01-16T10:45:03+00:00",
    "cron": ""
  },
  "state": {
    "is_public": true,
    "is_display": true,
    "is_archived": false
  },
  "ownership": {
    "payable_category": "seller",
    "payable_by": ""
  },
  "validity": {
    "priority": 0
  },
  "code": "percent50",
  "rule_definition": {
    "calculate_on": "esp",
    "value_type": "percentage",
    "is_exact": false,
    "type": "percentage",
    "scope": [
      "category_id"
    ],
    "auto_apply": false,
    "applicable_on": "quantity",
    "currency_code": "INR"
  },
  "restrictions": {
    "price_range": {
      "max": -1,
      "min": -1
    },
    "uses": {
      "remaining": {
        "app": -1,
        "user": -1,
        "total": -1
      },
      "maximum": {
        "app": -1,
        "user": -1,
        "total": -1
      }
    },
    "post_order": {
      "cancellation_allowed": true,
      "return_allowed": true
    },
    "platforms": [
      "web",
      "android",
      "ios"
    ]
  },
  "type_slug": "percentage_quantity_percentage"
}
```
</details>









---


### updateCoupon
Update existing coupon configuration



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").cart.updateCoupon({  id : value,
 body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").cart.updateCoupon({  id : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes |  |  
| body | [CouponUpdate](#CouponUpdate) | yes | Request body |


Update coupon with id sent in `id`

*Returned Response:*




[SuccessMessage](#SuccessMessage)

Coupon updated successfully




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "message": "Coupon Updated"
}
```
</details>









---


### updateCouponPartially
Update coupon archive state and schedule



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").cart.updateCouponPartially({  id : value,
 body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").cart.updateCouponPartially({  id : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes |  |  
| body | [CouponPartialUpdate](#CouponPartialUpdate) | yes | Request body |


Update archive/unarchive and change schedule for coupon

*Returned Response:*




[SuccessMessage](#SuccessMessage)

Coupon updated successfully




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Archive or Unarchive coupon</i></summary>

```json
{
  "value": {
    "success": true,
    "message": "Coupon Updated"
  }
}
```
</details>

<details>
<summary><i>&nbsp; Coupon schedule updated successfully</i></summary>

```json
{
  "value": {
    "success": true,
    "message": "Coupon schedule updated"
  }
}
```
</details>

</details>









---


### getPromotions
Get promotion list



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").cart.getPromotions({  pageNo : value,
 pageSize : value,
 q : value,
 isActive : value,
 promoGroup : value,
 promotionType : value,
 fpPanel : value,
 promotionId : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").cart.getPromotions({  pageNo : value,
 pageSize : value,
 q : value,
 isActive : value,
 promoGroup : value,
 promotionType : value,
 fpPanel : value,
 promotionId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNo | number | no |  |    
| pageSize | number | no |  |    
| q | string | no |  |    
| isActive | boolean | no |  |    
| promoGroup | string | no |  |    
| promotionType | string | no |  |    
| fpPanel | string | no |  |    
| promotionId | string | no |  |  



Get promotion list with pagination

*Returned Response:*




[PromotionsResponse](#PromotionsResponse)

Promotion List for sent page_size and page_no




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Promotion list for sent filter and page size</i></summary>

```json
{
  "value": {
    "items": [
      {
        "_id": "61dc8dc9adf45b2273a70a6e",
        "promo_group": "product",
        "date_meta": {
          "modified_on": "2022-01-11T05:47:11.503000+00:00",
          "created_on": "2022-01-10T19:49:29.917000+00:00"
        },
        "display_meta": {
          "name": "Test BOGO promo"
        },
        "author": {
          "created_by": "5",
          "modified_by": "5"
        },
        "_schedule": {
          "start": "2022-01-10T18:45:36.311000+00:00",
          "end": null,
          "published": true,
          "next_schedule": [
            {
              "start": "2022-01-10T18:45:36.311000+00:00",
              "end": null
            }
          ],
          "cron": "",
          "duration": 0
        }
      }
    ],
    "page": {
      "has_next": true,
      "size": 10,
      "current": 1,
      "item_total": 30
    }
  }
}
```
</details>

</details>









---


### createPromotion
Create new promotion



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").cart.createPromotion({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").cart.createPromotion({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [PromotionAdd](#PromotionAdd) | yes | Request body |


Create new promotion

*Returned Response:*




[PromotionAdd](#PromotionAdd)

Promotion Created successfully




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "_id": "61dc8dc9adf45b2273a70a6e",
  "application_id": "000000000000000000000001",
  "promo_group": "product",
  "promotion_type": "bogo",
  "date_meta": {
    "modified_on": "2022-01-11T05:47:11.503000+00:00",
    "created_on": "2022-01-10T19:49:29.917000+00:00"
  },
  "discount_rules": [
    {
      "buy_condition": "( rule#1 )",
      "offer": {
        "max_offer_quantity": 2
      },
      "discount_type": "bogo",
      "item_criteria": {
        "item_brand": [
          2,
          14,
          65
        ]
      }
    }
  ],
  "buy_rules": {
    "rule#1": {
      "cart_quantity": {
        "greater_than_equals": 5
      },
      "item_brand": [
        1,
        2,
        14,
        16,
        29,
        39,
        43,
        65,
        73
      ]
    }
  },
  "display_meta": {
    "offer_text": "Test",
    "name": "Test BOGO promo",
    "description": "<p>Test</p>"
  },
  "apply_all_discount": false,
  "apply_exclusive": null,
  "stackable": true,
  "restrictions": {
    "user_id": [],
    "anonymous_users": true,
    "platforms": [
      "web",
      "android",
      "ios"
    ],
    "post_order": {
      "cancellation_allowed": true,
      "return_allowed": true
    },
    "uses": {
      "remaining": {
        "user": 0,
        "total": 0
      },
      "maximum": {
        "user": 0,
        "total": 0
      }
    },
    "payments": []
  },
  "_custom_json": {},
  "author": {
    "created_by": "5",
    "modified_by": "5"
  },
  "_schedule": {
    "start": "2022-01-10T18:45:36.311Z",
    "end": null,
    "published": true,
    "next_schedule": [
      {
        "start": "2022-01-10T18:45:36.311Z",
        "end": null
      }
    ],
    "cron": "",
    "duration": 0
  },
  "apply_priority": 1,
  "visiblility": {
    "pdp": true,
    "coupon_list": false
  },
  "ownership": {
    "payable_by": "",
    "payable_category": "seller"
  },
  "currency": "INR",
  "mode": "promotion",
  "post_order_action": {
    "action_date": null,
    "action_type": ""
  },
  "indexed_criteria": {
    "item_brand": [
      1,
      2
    ]
  }
}
```
</details>









---


### getPromotionById
Get with single promotion details or promotion list



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").cart.getPromotionById({  id : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").cart.getPromotionById({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes |  |  



Get single promotion details with `id` in path param

*Returned Response:*




[PromotionUpdate](#PromotionUpdate)

Promotion object for sent `id`




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "_id": "61dc8dc9adf45b2273a70a6e",
  "application_id": "000000000000000000000001",
  "promo_group": "product",
  "promotion_type": "bogo",
  "date_meta": {
    "modified_on": "2022-01-11T05:47:11.503000+00:00",
    "created_on": "2022-01-10T19:49:29.917000+00:00"
  },
  "discount_rules": [
    {
      "buy_condition": "( rule#1 )",
      "offer": {
        "max_offer_quantity": 2
      },
      "discount_type": "bogo",
      "item_criteria": {
        "item_brand": [
          2,
          14,
          65
        ]
      }
    }
  ],
  "buy_rules": {
    "rule#1": {
      "cart_quantity": {
        "greater_than_equals": 5
      },
      "item_brand": [
        1,
        2,
        14,
        16,
        29,
        39,
        43,
        65,
        73
      ]
    }
  },
  "display_meta": {
    "offer_text": "Test",
    "name": "Test BOGO promo",
    "description": "<p>Test</p>"
  },
  "apply_all_discount": false,
  "apply_exclusive": null,
  "stackable": true,
  "restrictions": {
    "user_id": [],
    "anonymous_users": true,
    "platforms": [
      "web",
      "android",
      "ios"
    ],
    "post_order": {
      "cancellation_allowed": true,
      "return_allowed": true
    },
    "uses": {
      "remaining": {
        "user": 0,
        "total": 0
      },
      "maximum": {
        "user": 0,
        "total": 0
      }
    },
    "payments": []
  },
  "_custom_json": {},
  "author": {
    "created_by": "5",
    "modified_by": "5"
  },
  "_schedule": {
    "start": "2022-01-10T18:45:36.311Z",
    "end": null,
    "published": true,
    "next_schedule": [
      {
        "start": "2022-01-10T18:45:36.311Z",
        "end": null
      }
    ],
    "cron": "",
    "duration": 0
  },
  "apply_priority": 1,
  "visiblility": {
    "pdp": true,
    "coupon_list": false
  },
  "ownership": {
    "payable_by": "",
    "payable_category": "seller"
  },
  "currency": "INR",
  "mode": "promotion",
  "post_order_action": {
    "action_date": null,
    "action_type": ""
  },
  "indexed_criteria": {
    "item_brand": [
      1,
      2
    ]
  }
}
```
</details>









---


### updatePromotion
Update existing promotion configuration



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").cart.updatePromotion({  id : value,
 body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").cart.updatePromotion({  id : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes |  |  
| body | [PromotionUpdate](#PromotionUpdate) | yes | Request body |


Update promotion with id sent in `id`

*Returned Response:*




[PromotionUpdate](#PromotionUpdate)

Promotion updated successfully




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "_id": "61dc8dc9adf45b2273a70a6e",
  "application_id": "000000000000000000000001",
  "promo_group": "product",
  "promotion_type": "bogo",
  "date_meta": {
    "modified_on": "2022-01-11T05:47:11.503000+00:00",
    "created_on": "2022-01-10T19:49:29.917000+00:00"
  },
  "discount_rules": [
    {
      "buy_condition": "( rule#1 )",
      "offer": {
        "max_offer_quantity": 2
      },
      "discount_type": "bogo",
      "item_criteria": {
        "item_brand": [
          2,
          14,
          65
        ]
      }
    }
  ],
  "buy_rules": {
    "rule#1": {
      "cart_quantity": {
        "greater_than_equals": 5
      },
      "item_brand": [
        1,
        2,
        14,
        16,
        29,
        39,
        43,
        65,
        73
      ]
    }
  },
  "display_meta": {
    "offer_text": "Test",
    "name": "Test BOGO promo",
    "description": "<p>Test</p>"
  },
  "apply_all_discount": false,
  "apply_exclusive": null,
  "stackable": true,
  "restrictions": {
    "user_id": [],
    "anonymous_users": true,
    "platforms": [
      "web",
      "android",
      "ios"
    ],
    "post_order": {
      "cancellation_allowed": true,
      "return_allowed": true
    },
    "uses": {
      "remaining": {
        "user": 0,
        "total": 0
      },
      "maximum": {
        "user": 0,
        "total": 0
      }
    },
    "payments": []
  },
  "_custom_json": {},
  "author": {
    "created_by": "5",
    "modified_by": "5"
  },
  "_schedule": {
    "start": "2022-01-10T18:45:36.311Z",
    "end": null,
    "published": true,
    "next_schedule": [
      {
        "start": "2022-01-10T18:45:36.311Z",
        "end": null
      }
    ],
    "cron": "",
    "duration": 0
  },
  "apply_priority": 1,
  "visiblility": {
    "pdp": true,
    "coupon_list": false
  },
  "ownership": {
    "payable_by": "",
    "payable_category": "seller"
  },
  "currency": "INR",
  "mode": "promotion",
  "post_order_action": {
    "action_date": null,
    "action_type": ""
  },
  "indexed_criteria": {
    "item_brand": [
      1,
      2
    ]
  }
}
```
</details>









---


### updatePromotionPartially
Update promotion publish state and schedule



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").cart.updatePromotionPartially({  id : value,
 body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").cart.updatePromotionPartially({  id : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes |  |  
| body | [PromotionPartialUpdate](#PromotionPartialUpdate) | yes | Request body |


Update publish/unpublish and change schedule for promotion

*Returned Response:*




[SuccessMessage](#SuccessMessage)

Promotion updated successfully




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Publish or Unpublish promotion</i></summary>

```json
{
  "value": {
    "success": true,
    "message": "Promotion Updated"
  }
}
```
</details>

<details>
<summary><i>&nbsp; Promotion schedule updated successfully</i></summary>

```json
{
  "value": {
    "success": true,
    "message": "Promotion schedule updated"
  }
}
```
</details>

</details>









---


### getPromosCouponConfig
Fetch all promos that are set as active



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").cart.getPromosCouponConfig();

// Async/Await
const data = await client.application("<APPLICATION_ID>").cart.getPromosCouponConfig();
```






Use this API to get list of all the active promos/coupons.

*Returned Response:*




[ActivePromosResponse](#ActivePromosResponse)

Success. Returns a list of all the curently active coupons/promos




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
[
  {
    "_id": 1,
    "entity_slug": "percentage",
    "title": "X Amount Value",
    "subtitle": "Get a fixed percentage discount on the effective selling price",
    "example": "FLAT50 | Flat 50% OFF",
    "description": "Here, <b>Buy items(BI)</b> is the minimum number of items eligible for a discount <b>Percentage Value(D)</b> is the fixed percentage discount <b>Maximum Discount Amount(MD)</b> (optional) is a limit to the discount <b>Minimum Cart Value(MCV)</b> (optional) is the minimum price of the cart items <b>Apply coupon on exact quantities</b> (optional) if checked, will apply the coupon only to the specified <b>Buy items</b> and if unchecked, will apply the coupon to more than the specified <b>Buy items</b>",
    "is_active": true,
    "entity_type": "promotion",
    "created_on": "some date",
    "modified_on": "some date"
  }
]
```
</details>









---


### fetchAndvalidateCartItems
Fetch Cart Details



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").cart.fetchAndvalidateCartItems({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").cart.fetchAndvalidateCartItems({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [OpenapiCartDetailsRequest](#OpenapiCartDetailsRequest) | yes | Request body |


Get all the details of cart for a list of provided `cart_items`

*Returned Response:*




[OpenapiCartDetailsResponse](#OpenapiCartDetailsResponse)

Cart details with breakup




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "items": [
    {
      "quantity": 1,
      "message": "",
      "coupon_message": "",
      "product": {
        "type": "product",
        "uid": 803140,
        "name": "Green Solid T-Shirt",
        "slug": "celio-green-solid-t-shirt-803140-dd9e2c",
        "brand": {
          "uid": 44,
          "name": "celio"
        },
        "categories": [
          {
            "uid": 192,
            "name": "T-Shirts"
          }
        ],
        "images": [
          {
            "aspect_ratio": "16:25",
            "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/44_NEMIEL@GREENBRITISH/1_1548161273344.jpg",
            "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/44_NEMIEL@GREENBRITISH/1_1548161273344.jpg"
          }
        ],
        "action": {
          "type": "product",
          "url": "https://api.addsale.com/platform/content/v1/products/celio-green-solid-t-shirt-803140-dd9e2c/",
          "query": {
            "product_slug": [
              "celio-green-solid-t-shirt-803140-dd9e2c"
            ]
          }
        }
      },
      "article": {
        "type": "article",
        "uid": "25_44_A7050_NEMIEL@GREENBRITISH_S",
        "size": "S",
        "seller": {
          "uid": 25,
          "name": "CELIO FUTURE FASHION PRIVATE LIMITED"
        },
        "store": {
          "uid": 1486,
          "name": "Forum Mall"
        },
        "quantity": 1,
        "price": {
          "base": {
            "marked": 1299,
            "effective": 649.5,
            "currency_code": "INR"
          },
          "converted": {
            "marked": 1299,
            "effective": 649.5,
            "currency_code": "INR"
          }
        }
      },
      "key": "803140_S",
      "discount": "50% OFF",
      "price": {
        "base": {
          "add_on": 0,
          "marked": 1299,
          "effective": 649.5,
          "selling": 649.5,
          "currency_code": "INR"
        },
        "converted": {
          "add_on": 0,
          "marked": 1299,
          "effective": 649.5,
          "selling": 649.5,
          "currency_code": "INR"
        }
      },
      "availability": {
        "sizes": [
          "L",
          "XL",
          "M",
          "S"
        ],
        "other_store_quantity": 0,
        "out_of_stock": false,
        "deliverable": true,
        "is_valid": true,
        "available_sizes": [
          {
            "is_available": true,
            "display": "L",
            "value": "L"
          },
          {
            "is_available": true,
            "display": "XXL",
            "value": "XXL"
          },
          {
            "is_available": true,
            "display": "XL",
            "value": "XL"
          },
          {
            "is_available": true,
            "display": "M",
            "value": "M"
          },
          {
            "is_available": true,
            "display": "S",
            "value": "S"
          },
          {
            "is_available": false,
            "display": "30",
            "value": "30"
          }
        ]
      },
      "bulk_offer": {}
    },
    {
      "quantity": 1,
      "message": "Out of stock. Please remove item",
      "coupon_message": "",
      "product": {
        "type": "product",
        "uid": 803140,
        "name": "Green Solid T-Shirt",
        "slug": "celio-green-solid-t-shirt-803140-dd9e2c",
        "brand": {
          "uid": 44,
          "name": "celio"
        },
        "categories": [
          {
            "uid": 192,
            "name": "T-Shirts"
          }
        ],
        "images": [
          {
            "aspect_ratio": "16:25",
            "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/44_NEMIEL@GREENBRITISH/1_1548161273344.jpg",
            "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/44_NEMIEL@GREENBRITISH/1_1548161273344.jpg"
          }
        ],
        "action": {
          "type": "product",
          "url": "https://api.addsale.com/platform/content/v1/products/celio-green-solid-t-shirt-803140-dd9e2c/",
          "query": {
            "product_slug": [
              "celio-green-solid-t-shirt-803140-dd9e2c"
            ]
          }
        }
      },
      "article": {},
      "key": "803140_S",
      "discount": "",
      "price": {
        "base": {
          "add_on": 0,
          "marked": 1299,
          "effective": 1299,
          "selling": 1299,
          "currency_code": "INR"
        },
        "converted": {
          "add_on": 0,
          "marked": 1299,
          "effective": 1299,
          "selling": 1299,
          "currency_code": "INR"
        }
      },
      "availability": {
        "sizes": [
          "L",
          "XXL",
          "XL",
          "M",
          "S"
        ],
        "other_store_quantity": 0,
        "out_of_stock": true,
        "deliverable": false,
        "is_valid": false,
        "available_sizes": [
          {
            "is_available": true,
            "display": "L",
            "value": "L"
          },
          {
            "is_available": true,
            "display": "XXL",
            "value": "XXL"
          },
          {
            "is_available": true,
            "display": "XL",
            "value": "XL"
          },
          {
            "is_available": true,
            "display": "M",
            "value": "M"
          },
          {
            "is_available": true,
            "display": "S",
            "value": "S"
          },
          {
            "is_available": false,
            "display": "30",
            "value": "30"
          }
        ]
      },
      "bulk_offer": {}
    }
  ],
  "is_valid": false,
  "breakup_values": {
    "display": [
      {
        "display": "MRP Total",
        "key": "mrp_total",
        "value": 2598,
        "currency_code": "INR"
      },
      {
        "display": "Discount",
        "key": "discount",
        "value": -649,
        "currency_code": "INR"
      },
      {
        "display": "Subtotal",
        "key": "subtotal",
        "value": 1949,
        "currency_code": "INR"
      },
      {
        "display": "Total",
        "key": "total",
        "value": 1949,
        "currency_code": "INR"
      }
    ],
    "raw": {
      "cod_charge": 0,
      "convenience_fee": 0,
      "coupon": 0,
      "delivery_charge": 0,
      "discount": -649.5,
      "fynd_cash": 0,
      "gst_charges": 170.11,
      "mrp_total": 2598,
      "subtotal": 1948.5,
      "total": 1948.5,
      "vog": 1778.39,
      "you_saved": 0
    }
  }
}
```
</details>









---


### checkCartServiceability
Check Pincode Serviceability



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").cart.checkCartServiceability({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").cart.checkCartServiceability({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [OpenApiCartServiceabilityRequest](#OpenApiCartServiceabilityRequest) | yes | Request body |


Check Pincode serviceability for cart items provided in `cart_items` and address pincode in `shipping_address`

*Returned Response:*




[OpenApiCartServiceabilityResponse](#OpenApiCartServiceabilityResponse)

Cart details with pincode validity information at item level




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Valid pincode</i></summary>

```json
{
  "value": {
    "items": [
      {
        "quantity": 1,
        "message": "",
        "coupon_message": "",
        "product": {
          "type": "product",
          "uid": 803140,
          "name": "Green Solid T-Shirt",
          "slug": "celio-green-solid-t-shirt-803140-dd9e2c",
          "brand": {
            "uid": 44,
            "name": "celio"
          },
          "categories": [
            {
              "uid": 192,
              "name": "T-Shirts"
            }
          ],
          "images": [
            {
              "aspect_ratio": "16:25",
              "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/44_NEMIEL@GREENBRITISH/1_1548161273344.jpg",
              "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/44_NEMIEL@GREENBRITISH/1_1548161273344.jpg"
            }
          ],
          "action": {
            "type": "product",
            "url": "https://api.addsale.com/platform/content/v1/products/celio-green-solid-t-shirt-803140-dd9e2c/",
            "query": {
              "product_slug": [
                "celio-green-solid-t-shirt-803140-dd9e2c"
              ]
            }
          }
        },
        "article": {
          "type": "article",
          "uid": "25_44_A7050_NEMIEL@GREENBRITISH_S",
          "size": "S",
          "seller": {
            "uid": 25,
            "name": "CELIO FUTURE FASHION PRIVATE LIMITED"
          },
          "store": {
            "uid": 1486,
            "name": "Forum Mall"
          },
          "quantity": 1,
          "price": {
            "base": {
              "marked": 1299,
              "effective": 649.5,
              "currency_code": "INR"
            },
            "converted": {
              "marked": 1299,
              "effective": 649.5,
              "currency_code": "INR"
            }
          }
        },
        "key": "803140_S",
        "discount": "50% OFF",
        "price": {
          "base": {
            "add_on": 0,
            "marked": 1299,
            "effective": 649.5,
            "selling": 649.5,
            "currency_code": "INR"
          },
          "converted": {
            "add_on": 0,
            "marked": 1299,
            "effective": 649.5,
            "selling": 649.5,
            "currency_code": "INR"
          }
        },
        "availability": {
          "sizes": [
            "L",
            "XL",
            "M",
            "S"
          ],
          "other_store_quantity": 0,
          "out_of_stock": false,
          "deliverable": true,
          "is_valid": true,
          "delivery_promise": {
            "timestamp": {
              "min": 1605306343,
              "max": 1605468343
            },
            "formatted": {
              "min": "Sat, 14 Nov",
              "max": "Mon, 16 Nov"
            }
          },
          "available_sizes": [
            {
              "is_available": true,
              "display": "L",
              "value": "L"
            },
            {
              "is_available": true,
              "display": "XXL",
              "value": "XXL"
            },
            {
              "is_available": true,
              "display": "XL",
              "value": "XL"
            },
            {
              "is_available": true,
              "display": "M",
              "value": "M"
            },
            {
              "is_available": true,
              "display": "S",
              "value": "S"
            },
            {
              "is_available": false,
              "display": "30",
              "value": "30"
            }
          ]
        },
        "bulk_offer": {}
      },
      {
        "quantity": 1,
        "message": "Out of stock. Please remove item",
        "coupon_message": "",
        "product": {
          "type": "product",
          "uid": 803140,
          "name": "Green Solid T-Shirt",
          "slug": "celio-green-solid-t-shirt-803140-dd9e2c",
          "brand": {
            "uid": 44,
            "name": "celio"
          },
          "categories": [
            {
              "uid": 192,
              "name": "T-Shirts"
            }
          ],
          "images": [
            {
              "aspect_ratio": "16:25",
              "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/44_NEMIEL@GREENBRITISH/1_1548161273344.jpg",
              "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/44_NEMIEL@GREENBRITISH/1_1548161273344.jpg"
            }
          ],
          "action": {
            "type": "product",
            "url": "https://api.addsale.com/platform/content/v1/products/celio-green-solid-t-shirt-803140-dd9e2c/",
            "query": {
              "product_slug": [
                "celio-green-solid-t-shirt-803140-dd9e2c"
              ]
            }
          }
        },
        "article": {},
        "key": "803140_S",
        "discount": "",
        "price": {
          "base": {
            "add_on": 0,
            "marked": 1299,
            "effective": 1299,
            "selling": 1299,
            "currency_code": "INR"
          },
          "converted": {
            "add_on": 0,
            "marked": 1299,
            "effective": 1299,
            "selling": 1299,
            "currency_code": "INR"
          }
        },
        "availability": {
          "sizes": [
            "L",
            "XXL",
            "XL",
            "M",
            "S"
          ],
          "other_store_quantity": 0,
          "out_of_stock": true,
          "deliverable": false,
          "is_valid": false,
          "delivery_promise": {
            "timestamp": {
              "min": 1605306343,
              "max": 1605468343
            },
            "formatted": {
              "min": "Sat, 14 Nov",
              "max": "Mon, 16 Nov"
            }
          },
          "available_sizes": [
            {
              "is_available": true,
              "display": "L",
              "value": "L"
            },
            {
              "is_available": true,
              "display": "XXL",
              "value": "XXL"
            },
            {
              "is_available": true,
              "display": "XL",
              "value": "XL"
            },
            {
              "is_available": true,
              "display": "M",
              "value": "M"
            },
            {
              "is_available": true,
              "display": "S",
              "value": "S"
            },
            {
              "is_available": false,
              "display": "30",
              "value": "30"
            }
          ]
        },
        "bulk_offer": {}
      }
    ],
    "delivery_promise": {
      "timestamp": {
        "min": 1605306343,
        "max": 1605468343
      },
      "formatted": {
        "min": "Sat, 14 Nov",
        "max": "Mon, 16 Nov"
      }
    },
    "is_valid": true
  }
}
```
</details>

<details>
<summary><i>&nbsp; Invalid pincode</i></summary>

```json
{
  "value": {
    "message": "All of the items in your cart are not deliverable to 800108",
    "is_valid": false,
    "items": [
      {
        "discount": "15% OFF",
        "price": {
          "base": {
            "add_on": 0,
            "marked": 2195,
            "effective": 1866,
            "selling": 1866,
            "currency_code": "INR"
          },
          "converted": {
            "add_on": 0,
            "marked": 2195,
            "effective": 1866,
            "selling": 1866,
            "currency_code": "INR"
          }
        },
        "product": {
          "type": "product",
          "uid": 876245,
          "name": "Brown Sandals",
          "slug": "red-chief-brown-sandals-876245-c92507",
          "brand": {
            "uid": 433,
            "name": ""
          },
          "categories": [
            {
              "uid": 176,
              "name": ""
            }
          ],
          "images": [
            {
              "aspect_ratio": "16:25",
              "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/433_RC330004/1_1564147181287.jpg",
              "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/433_RC330004/1_1564147181287.jpg"
            }
          ],
          "action": {
            "type": "product",
            "url": "https://api.addsale.com/platform/content/v1/products/red-chief-brown-sandals-876245-c92507/",
            "query": {
              "product_slug": [
                "red-chief-brown-sandals-876245-c92507"
              ]
            }
          },
          "item_code": "RC330004"
        },
        "bulk_offer": {},
        "key": "876245_6",
        "message": "We are not delivering to 800108",
        "delivery_promise": null,
        "coupon_message": "",
        "availability": {
          "sizes": [
            "7",
            "6",
            "10",
            "8"
          ],
          "other_store_quantity": 21,
          "out_of_stock": false,
          "deliverable": false,
          "is_valid": true,
          "available_sizes": [
            {
              "is_available": false,
              "display": "9",
              "value": "9"
            },
            {
              "is_available": true,
              "display": "10",
              "value": "10"
            },
            {
              "is_available": true,
              "display": "6",
              "value": "6"
            },
            {
              "is_available": true,
              "display": "7",
              "value": "7"
            },
            {
              "is_available": true,
              "display": "8",
              "value": "8"
            }
          ]
        },
        "quantity": 1,
        "article": {
          "type": "article",
          "uid": "304_433_LGPL30402_RC330004_6",
          "size": "6",
          "seller": {
            "uid": 304,
            "name": "LEAYAN GLOBAL PVT. LTD."
          },
          "store": {
            "uid": 9767,
            "name": "Udyog Kunj, Kanpur"
          },
          "quantity": 3,
          "price": {
            "base": {
              "marked": 2195,
              "effective": 1866,
              "currency_code": "INR"
            },
            "converted": {
              "marked": 2195,
              "effective": 1866,
              "currency_code": "INR"
            }
          }
        }
      },
      {
        "discount": "15% OFF",
        "price": {
          "base": {
            "add_on": 0,
            "marked": 2195,
            "effective": 1866,
            "selling": 1866,
            "currency_code": "INR"
          },
          "converted": {
            "add_on": 0,
            "marked": 2195,
            "effective": 1866,
            "selling": 1866,
            "currency_code": "INR"
          }
        },
        "product": {
          "type": "product",
          "uid": 876245,
          "name": "Brown Sandals",
          "slug": "red-chief-brown-sandals-876245-c92507",
          "brand": {
            "uid": 433,
            "name": ""
          },
          "categories": [
            {
              "uid": 176,
              "name": ""
            }
          ],
          "images": [
            {
              "aspect_ratio": "16:25",
              "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/433_RC330004/1_1564147181287.jpg",
              "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/433_RC330004/1_1564147181287.jpg"
            }
          ],
          "action": {
            "type": "product",
            "url": "https://api.addsale.com/platform/content/v1/products/red-chief-brown-sandals-876245-c92507/",
            "query": {
              "product_slug": [
                "red-chief-brown-sandals-876245-c92507"
              ]
            }
          },
          "item_code": "RC330004"
        },
        "bulk_offer": {},
        "key": "876245_6",
        "message": "We are not delivering to 800108",
        "coupon_message": "",
        "availability": {
          "sizes": [
            "7",
            "6",
            "10",
            "8"
          ],
          "other_store_quantity": 21,
          "out_of_stock": false,
          "deliverable": false,
          "is_valid": true,
          "available_sizes": [
            {
              "is_available": false,
              "display": "9",
              "value": "9"
            },
            {
              "is_available": true,
              "display": "10",
              "value": "10"
            },
            {
              "is_available": true,
              "display": "6",
              "value": "6"
            },
            {
              "is_available": true,
              "display": "7",
              "value": "7"
            },
            {
              "is_available": true,
              "display": "8",
              "value": "8"
            }
          ]
        },
        "quantity": 1,
        "article": {
          "type": "article",
          "uid": "304_433_LGPL30402_RC330004_6",
          "size": "6",
          "seller": {
            "uid": 304,
            "name": "LEAYAN GLOBAL PVT. LTD."
          },
          "store": {
            "uid": 9767,
            "name": "Udyog Kunj, Kanpur"
          },
          "quantity": 3,
          "price": {
            "base": {
              "marked": 2195,
              "effective": 1866,
              "currency_code": "INR"
            },
            "converted": {
              "marked": 2195,
              "effective": 1866,
              "currency_code": "INR"
            }
          }
        }
      }
    ]
  }
}
```
</details>

</details>









---


### checkoutCart
Create Fynd order with cart details



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").cart.checkoutCart({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").cart.checkoutCart({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [OpenApiPlatformCheckoutReq](#OpenApiPlatformCheckoutReq) | yes | Request body |


Generate Fynd order for cart details send with provided `cart_items`

*Returned Response:*




[OpenApiCheckoutResponse](#OpenApiCheckoutResponse)

Checkout cart and create Fynd order id




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "order_id": "FY5E182A9D0A5E405446",
  "message": "Order initiation completed",
  "order_ref_id": null
}
```
</details>









---



### Schemas

 
 
 #### [Page](#Page)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | next_id | string |  no  | Cursor id for next set of records. |
 | type | string |  yes  |  |
 | size | number |  no  | Current request page size |
 | has_previous | boolean |  no  | True if more records are present for previous pages. Sent for cursor pagination |
 | has_next | boolean |  no  | True if more records are present for next pages |
 | item_total | number |  no  | Total coupon count in system |
 | current | number |  no  | Current page no |

---


 
 
 #### [State](#State)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_archived | boolean |  no  |  |
 | is_public | boolean |  no  |  |
 | is_display | boolean |  no  |  |

---


 
 
 #### [Validity](#Validity)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | priority | number |  no  |  |

---


 
 
 #### [CouponDateMeta](#CouponDateMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | created_on | string |  no  |  |
 | modified_on | string |  no  |  |

---


 
 
 #### [CouponSchedule](#CouponSchedule)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cron | string |  no  |  |
 | next_schedule | [string] |  no  |  |
 | start | string |  no  |  |
 | end | string |  no  |  |
 | duration | number |  no  |  |

---


 
 
 #### [DisplayMetaDict](#DisplayMetaDict)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | title | string |  no  |  |
 | subtitle | string |  no  |  |

---


 
 
 #### [DisplayMeta](#DisplayMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string |  no  |  |
 | auto | [DisplayMetaDict](#DisplayMetaDict) |  no  |  |
 | remove | [DisplayMetaDict](#DisplayMetaDict) |  no  |  |
 | subtitle | string |  no  |  |
 | apply | [DisplayMetaDict](#DisplayMetaDict) |  no  |  |
 | title | string |  no  |  |

---


 
 
 #### [Rule](#Rule)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | discount_qty | number |  no  |  |
 | value | number |  no  |  |
 | key | number |  no  |  |
 | min | number |  no  |  |
 | max | number |  no  |  |

---


 
 
 #### [RuleDefinition](#RuleDefinition)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | calculate_on | string |  yes  |  |
 | value_type | string |  yes  |  |
 | type | string |  yes  |  |
 | scope | [string] |  no  |  |
 | is_exact | boolean |  no  |  |
 | auto_apply | boolean |  no  |  |
 | applicable_on | string |  yes  |  |
 | currency_code | string |  no  |  |

---


 
 
 #### [Validation](#Validation)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | app_id | [string] |  no  |  |
 | user_registered_after | string |  no  |  |
 | anonymous | boolean |  no  |  |

---


 
 
 #### [Ownership](#Ownership)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | payable_by | string |  yes  |  |
 | payable_category | string |  yes  |  |

---


 
 
 #### [CouponAction](#CouponAction)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action_date | string |  no  |  |
 | txn_mode | string |  no  |  |

---


 
 
 #### [Identifier](#Identifier)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand_id | [number] |  no  |  |
 | item_id | [number] |  no  |  |
 | collection_id | [string] |  no  |  |
 | category_id | [number] |  no  |  |
 | article_id | [string] |  no  |  |
 | company_id | [number] |  no  |  |
 | user_id | [string] |  no  |  |
 | store_id | [number] |  no  |  |

---


 
 
 #### [PaymentAllowValue](#PaymentAllowValue)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | max | number |  no  |  |

---


 
 
 #### [PaymentModes](#PaymentModes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | uses | [PaymentAllowValue](#PaymentAllowValue) |  no  |  |
 | types | [string] |  no  |  |
 | codes | [string] |  no  |  |
 | networks | [string] |  no  |  |

---


 
 
 #### [BulkBundleRestriction](#BulkBundleRestriction)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | multi_store_allowed | boolean |  yes  |  |

---


 
 
 #### [UsesRemaining](#UsesRemaining)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | user | number |  no  |  |
 | total | number |  no  |  |
 | app | number |  no  |  |

---


 
 
 #### [UsesRestriction](#UsesRestriction)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | remaining | [UsesRemaining](#UsesRemaining) |  no  |  |
 | maximum | [UsesRemaining](#UsesRemaining) |  no  |  |

---


 
 
 #### [PriceRange](#PriceRange)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | min | number |  no  |  |
 | max | number |  no  |  |

---


 
 
 #### [PostOrder](#PostOrder)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | return_allowed | boolean |  no  |  |
 | cancellation_allowed | boolean |  no  |  |

---


 
 
 #### [Restrictions](#Restrictions)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | payments | [String: [PaymentModes](#PaymentModes)] |  no  |  |
 | bulk_bundle | [BulkBundleRestriction](#BulkBundleRestriction) |  no  |  |
 | user_groups | [number] |  no  |  |
 | uses | [UsesRestriction](#UsesRestriction) |  no  |  |
 | coupon_allowed | boolean |  no  |  |
 | price_range | [PriceRange](#PriceRange) |  no  |  |
 | platforms | [string] |  no  |  |
 | post_order | [PostOrder](#PostOrder) |  no  |  |
 | ordering_stores | [number] |  no  |  |

---


 
 
 #### [CouponAuthor](#CouponAuthor)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | created_by | string |  no  |  |
 | modified_by | string |  no  |  |

---


 
 
 #### [CouponAdd](#CouponAdd)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | state | [State](#State) |  no  |  |
 | validity | [Validity](#Validity) |  yes  |  |
 | date_meta | [CouponDateMeta](#CouponDateMeta) |  no  |  |
 | _schedule | [CouponSchedule](#CouponSchedule) |  no  |  |
 | display_meta | [DisplayMeta](#DisplayMeta) |  yes  |  |
 | rule | [[Rule](#Rule)] |  yes  |  |
 | rule_definition | [RuleDefinition](#RuleDefinition) |  yes  |  |
 | code | string |  yes  |  |
 | tags | [string] |  no  |  |
 | validation | [Validation](#Validation) |  no  |  |
 | ownership | [Ownership](#Ownership) |  yes  |  |
 | action | [CouponAction](#CouponAction) |  no  |  |
 | identifiers | [Identifier](#Identifier) |  yes  |  |
 | restrictions | [Restrictions](#Restrictions) |  no  |  |
 | author | [CouponAuthor](#CouponAuthor) |  no  |  |
 | type_slug | string |  yes  |  |

---


 
 
 #### [CouponsResponse](#CouponsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | page | [Page](#Page) |  no  |  |
 | items | [CouponAdd](#CouponAdd) |  no  |  |

---


 
 
 #### [SuccessMessage](#SuccessMessage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 | success | boolean |  no  |  |

---


 
 
 #### [OperationErrorResponse](#OperationErrorResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 | success | boolean |  no  |  |

---


 
 
 #### [CouponUpdate](#CouponUpdate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | state | [State](#State) |  no  |  |
 | validity | [Validity](#Validity) |  yes  |  |
 | date_meta | [CouponDateMeta](#CouponDateMeta) |  no  |  |
 | _schedule | [CouponSchedule](#CouponSchedule) |  no  |  |
 | display_meta | [DisplayMeta](#DisplayMeta) |  yes  |  |
 | rule | [[Rule](#Rule)] |  yes  |  |
 | rule_definition | [RuleDefinition](#RuleDefinition) |  yes  |  |
 | code | string |  yes  |  |
 | tags | [string] |  no  |  |
 | validation | [Validation](#Validation) |  no  |  |
 | ownership | [Ownership](#Ownership) |  yes  |  |
 | action | [CouponAction](#CouponAction) |  no  |  |
 | identifiers | [Identifier](#Identifier) |  yes  |  |
 | restrictions | [Restrictions](#Restrictions) |  no  |  |
 | author | [CouponAuthor](#CouponAuthor) |  no  |  |
 | type_slug | string |  yes  |  |

---


 
 
 #### [CouponPartialUpdate](#CouponPartialUpdate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | archive | boolean |  no  | Send true to unpublish coupon |
 | schedule | [CouponSchedule](#CouponSchedule) |  no  |  |

---


 
 
 #### [PromotionAuthor](#PromotionAuthor)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | created_by | string |  no  |  |
 | modified_by | string |  no  |  |

---


 
 
 #### [PromotionSchedule](#PromotionSchedule)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cron | string |  no  |  |
 | next_schedule | [string] |  no  |  |
 | published | boolean |  yes  |  |
 | start | string |  yes  |  |
 | end | string |  no  |  |
 | duration | number |  no  |  |

---


 
 
 #### [Ownership1](#Ownership1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | payable_by | string |  yes  |  |
 | payable_category | string |  yes  |  |

---


 
 
 #### [CompareObject](#CompareObject)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | greater_than | number |  no  |  |
 | greater_than_equals | number |  no  |  |
 | equals | number |  no  |  |
 | less_than_equals | number |  no  |  |
 | less_than | number |  no  |  |

---


 
 
 #### [ItemCriteria](#ItemCriteria)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | item_id | [number] |  no  |  |
 | item_category | [number] |  no  |  |
 | item_exclude_company | [number] |  no  |  |
 | all_items | boolean |  no  |  |
 | item_store | [number] |  no  |  |
 | item_exclude_store | [number] |  no  |  |
 | cart_total | [CompareObject](#CompareObject) |  no  |  |
 | item_sku | [string] |  no  |  |
 | buy_rules | [string] |  no  |  |
 | item_exclude_sku | [string] |  no  |  |
 | available_zones | [string] |  no  |  |
 | item_company | [number] |  no  |  |
 | cart_quantity | [CompareObject](#CompareObject) |  no  |  |
 | cart_unique_item_quantity | [CompareObject](#CompareObject) |  no  |  |
 | item_exclude_brand | [number] |  no  |  |
 | item_exclude_category | [number] |  no  |  |
 | cart_unique_item_amount | [CompareObject](#CompareObject) |  no  |  |
 | item_brand | [number] |  no  |  |
 | item_size | [string] |  no  |  |

---


 
 
 #### [DiscountOffer](#DiscountOffer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | discount_price | number |  no  |  |
 | max_offer_quantity | number |  no  |  |
 | max_discount_amount | number |  no  |  |
 | discount_percentage | number |  no  |  |
 | min_offer_quantity | number |  no  |  |
 | max_usage_per_transaction | number |  no  |  |
 | code | string |  no  |  |
 | discount_amount | number |  no  |  |
 | apportion_discount | boolean |  no  |  |

---


 
 
 #### [DiscountRule](#DiscountRule)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | buy_condition | string |  yes  |  |
 | item_criteria | [ItemCriteria](#ItemCriteria) |  yes  |  |
 | offer | [DiscountOffer](#DiscountOffer) |  yes  |  |
 | discount_type | string |  yes  |  |

---


 
 
 #### [PromotionAction](#PromotionAction)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action_type | string |  yes  |  |
 | action_date | string |  yes  |  |

---


 
 
 #### [DisplayMeta1](#DisplayMeta1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | description | string |  no  |  |
 | offer_text | string |  no  |  |

---


 
 
 #### [Visibility](#Visibility)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | pdp | boolean |  yes  |  |
 | coupon_list | boolean |  yes  |  |

---


 
 
 #### [PromotionDateMeta](#PromotionDateMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | created_on | string |  no  |  |
 | modified_on | string |  no  |  |

---


 
 
 #### [PaymentAllowValue1](#PaymentAllowValue1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | max | number |  no  |  |

---


 
 
 #### [PromotionPaymentModes](#PromotionPaymentModes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | uses | [PaymentAllowValue1](#PaymentAllowValue1) |  no  |  |
 | codes | [string] |  no  |  |
 | type | string |  yes  |  |

---


 
 
 #### [UsesRemaining1](#UsesRemaining1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | user | number |  no  |  |
 | total | number |  no  |  |

---


 
 
 #### [UsesRestriction1](#UsesRestriction1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | remaining | [UsesRemaining1](#UsesRemaining1) |  no  |  |
 | maximum | [UsesRemaining1](#UsesRemaining1) |  no  |  |

---


 
 
 #### [PostOrder1](#PostOrder1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | partial_can_ret | boolean |  no  |  |
 | return_allowed | boolean |  no  |  |
 | cancellation_allowed | boolean |  no  |  |

---


 
 
 #### [UserRegistered](#UserRegistered)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | end | string |  no  |  |
 | start | string |  no  |  |

---


 
 
 #### [Restrictions1](#Restrictions1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | payments | [[PromotionPaymentModes](#PromotionPaymentModes)] |  no  |  |
 | anonymous_users | boolean |  no  |  |
 | user_id | [string] |  no  |  |
 | user_groups | [number] |  no  |  |
 | uses | [UsesRestriction1](#UsesRestriction1) |  yes  |  |
 | order_quantity | number |  no  |  |
 | platforms | [string] |  no  |  |
 | post_order | [PostOrder1](#PostOrder1) |  no  |  |
 | user_registered | [UserRegistered](#UserRegistered) |  no  |  |

---


 
 
 #### [PromotionListItem](#PromotionListItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | promo_group | string |  yes  |  |
 | code | string |  no  |  |
 | application_id | string |  yes  |  |
 | promotion_type | string |  yes  |  |
 | currency | string |  no  |  |
 | apply_exclusive | string |  no  |  |
 | author | [PromotionAuthor](#PromotionAuthor) |  no  |  |
 | apply_priority | number |  no  |  |
 | _schedule | [PromotionSchedule](#PromotionSchedule) |  no  |  |
 | _custom_json | string |  no  |  |
 | ownership | [Ownership1](#Ownership1) |  yes  |  |
 | discount_rules | [[DiscountRule](#DiscountRule)] |  yes  |  |
 | buy_rules | [String: [ItemCriteria](#ItemCriteria)] |  yes  |  |
 | post_order_action | [PromotionAction](#PromotionAction) |  no  |  |
 | calculate_on | string |  no  | Only available for Contract pricing and Ladder pricing promotion type |
 | display_meta | [DisplayMeta1](#DisplayMeta1) |  yes  |  |
 | mode | string |  yes  |  |
 | stackable | boolean |  no  |  |
 | visiblility | [Visibility](#Visibility) |  no  |  |
 | date_meta | [PromotionDateMeta](#PromotionDateMeta) |  no  |  |
 | apply_all_discount | boolean |  no  |  |
 | restrictions | [Restrictions1](#Restrictions1) |  no  |  |

---


 
 
 #### [PromotionsResponse](#PromotionsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | page | [Page](#Page) |  no  |  |
 | items | [PromotionListItem](#PromotionListItem) |  no  |  |

---


 
 
 #### [PromotionAdd](#PromotionAdd)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | promo_group | string |  yes  |  |
 | code | string |  no  |  |
 | application_id | string |  yes  |  |
 | promotion_type | string |  yes  |  |
 | currency | string |  no  |  |
 | apply_exclusive | string |  no  |  |
 | author | [PromotionAuthor](#PromotionAuthor) |  no  |  |
 | apply_priority | number |  no  |  |
 | _schedule | [PromotionSchedule](#PromotionSchedule) |  no  |  |
 | _custom_json | string |  no  |  |
 | ownership | [Ownership1](#Ownership1) |  yes  |  |
 | discount_rules | [[DiscountRule](#DiscountRule)] |  yes  |  |
 | buy_rules | [String: [ItemCriteria](#ItemCriteria)] |  yes  |  |
 | post_order_action | [PromotionAction](#PromotionAction) |  no  |  |
 | calculate_on | string |  no  | Only available for Contract pricing and Ladder pricing promotion type |
 | display_meta | [DisplayMeta1](#DisplayMeta1) |  yes  |  |
 | mode | string |  yes  |  |
 | stackable | boolean |  no  |  |
 | visiblility | [Visibility](#Visibility) |  no  |  |
 | date_meta | [PromotionDateMeta](#PromotionDateMeta) |  no  |  |
 | apply_all_discount | boolean |  no  |  |
 | restrictions | [Restrictions1](#Restrictions1) |  no  |  |

---


 
 
 #### [PromotionUpdate](#PromotionUpdate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | promo_group | string |  yes  |  |
 | code | string |  no  |  |
 | application_id | string |  yes  |  |
 | promotion_type | string |  yes  |  |
 | currency | string |  no  |  |
 | apply_exclusive | string |  no  |  |
 | author | [PromotionAuthor](#PromotionAuthor) |  no  |  |
 | apply_priority | number |  no  |  |
 | _schedule | [PromotionSchedule](#PromotionSchedule) |  no  |  |
 | _custom_json | string |  no  |  |
 | ownership | [Ownership1](#Ownership1) |  yes  |  |
 | discount_rules | [[DiscountRule](#DiscountRule)] |  yes  |  |
 | buy_rules | [String: [ItemCriteria](#ItemCriteria)] |  yes  |  |
 | post_order_action | [PromotionAction](#PromotionAction) |  no  |  |
 | calculate_on | string |  no  | Only available for Contract pricing and Ladder pricing promotion type |
 | display_meta | [DisplayMeta1](#DisplayMeta1) |  yes  |  |
 | mode | string |  yes  |  |
 | stackable | boolean |  no  |  |
 | visiblility | [Visibility](#Visibility) |  no  |  |
 | date_meta | [PromotionDateMeta](#PromotionDateMeta) |  no  |  |
 | apply_all_discount | boolean |  no  |  |
 | restrictions | [Restrictions1](#Restrictions1) |  no  |  |

---


 
 
 #### [PromotionPartialUpdate](#PromotionPartialUpdate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | archive | boolean |  no  | Send true to unpublish promotion |
 | schedule | [PromotionSchedule](#PromotionSchedule) |  no  |  |

---


 
 
 #### [ActivePromosResponse](#ActivePromosResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_active | boolean |  no  | If the promo is active or not |
 | entity_slug | string |  no  |  |
 | description | string |  no  | The description of the offer in the form of an HTML |
 | example | string |  no  | Discount offers examples |
 | entity_type | string |  no  | Type of entity to be selected from : ['coupon', 'promotion'] |
 | created_on | string |  no  | Coupon creation date |
 | subtitle | string |  no  | Small description of the current offer |
 | title | string |  no  | Name of the promotion |
 | modified_on | string |  no  | Coupon modification date |

---


 
 
 #### [CartItem](#CartItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | product_id | string |  yes  |  |
 | quantity | number |  no  |  |
 | size | string |  yes  |  |

---


 
 
 #### [OpenapiCartDetailsRequest](#OpenapiCartDetailsRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cart_items | [CartItem](#CartItem) |  no  |  |

---


 
 
 #### [CouponBreakup](#CouponBreakup)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_applied | boolean |  no  |  |
 | code | string |  no  |  |
 | message | string |  no  |  |
 | type | string |  no  |  |
 | value | number |  no  |  |
 | uid | string |  no  |  |

---


 
 
 #### [DisplayBreakup](#DisplayBreakup)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | currency_symbol | string |  no  |  |
 | display | string |  no  |  |
 | message | [string] |  no  |  |
 | value | number |  no  |  |
 | key | string |  no  |  |
 | currency_code | string |  no  |  |

---


 
 
 #### [RawBreakup](#RawBreakup)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | subtotal | number |  no  |  |
 | delivery_charge | number |  no  |  |
 | cod_charge | number |  no  |  |
 | convenience_fee | number |  no  |  |
 | total | number |  no  |  |
 | gst_charges | number |  no  |  |
 | vog | number |  no  |  |
 | fynd_cash | number |  no  |  |
 | coupon | number |  no  |  |
 | you_saved | number |  no  |  |
 | mrp_total | number |  no  |  |
 | discount | number |  no  |  |

---


 
 
 #### [LoyaltyPoints](#LoyaltyPoints)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string |  no  |  |
 | applicable | number |  no  |  |
 | is_applied | boolean |  no  |  |
 | total | number |  no  |  |

---


 
 
 #### [CartBreakup](#CartBreakup)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | coupon | [CouponBreakup](#CouponBreakup) |  no  |  |
 | display | [[DisplayBreakup](#DisplayBreakup)] |  no  |  |
 | raw | [RawBreakup](#RawBreakup) |  no  |  |
 | loyalty_points | [LoyaltyPoints](#LoyaltyPoints) |  no  |  |

---


 
 
 #### [BaseInfo](#BaseInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | uid | number |  no  |  |

---


 
 
 #### [BasePrice](#BasePrice)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | currency_symbol | string |  no  |  |
 | marked | number |  no  |  |
 | effective | number |  no  |  |
 | currency_code | string |  no  |  |

---


 
 
 #### [ArticlePriceInfo](#ArticlePriceInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | converted | [BasePrice](#BasePrice) |  no  |  |
 | base | [BasePrice](#BasePrice) |  no  |  |

---


 
 
 #### [ProductArticle](#ProductArticle)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | store | [BaseInfo](#BaseInfo) |  no  |  |
 | parent_item_identifiers | string |  no  |  |
 | type | string |  no  |  |
 | size | string |  no  |  |
 | extra_meta | string |  no  |  |
 | product_group_tags | [string] |  no  |  |
 | seller | [BaseInfo](#BaseInfo) |  no  |  |
 | quantity | number |  no  |  |
 | uid | string |  no  |  |
 | price | [ArticlePriceInfo](#ArticlePriceInfo) |  no  |  |

---


 
 
 #### [AppliedPromotion](#AppliedPromotion)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | promo_id | string |  no  | Promotion id |
 | article_quantity | number |  no  | Quantity of article on which promotion is applicable |
 | mrp_promotion | boolean |  no  | If applied promotion is applied on product MRP or ESP |
 | offer_text | string |  no  | Offer text of current promotion |
 | promotion_type | string |  no  | Promotion type of current promotion |
 | amount | number |  no  | Per unit discount amount applied with current promotion |

---


 
 
 #### [ProductAvailability](#ProductAvailability)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_valid | boolean |  no  |  |
 | out_of_stock | boolean |  no  |  |
 | sizes | [string] |  no  |  |
 | other_store_quantity | number |  no  |  |
 | deliverable | boolean |  no  |  |

---


 
 
 #### [ProductPrice](#ProductPrice)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | currency_symbol | string |  no  |  |
 | marked | number |  no  |  |
 | add_on | number |  no  |  |
 | effective | number |  no  |  |
 | selling | number |  no  |  |
 | currency_code | string |  no  |  |

---


 
 
 #### [ProductPriceInfo](#ProductPriceInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | converted | [ProductPrice](#ProductPrice) |  no  |  |
 | base | [ProductPrice](#ProductPrice) |  no  |  |

---


 
 
 #### [CartProductIdentifer](#CartProductIdentifer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | identifier | string |  no  | Article idenfier generated by cart |

---


 
 
 #### [ActionQuery](#ActionQuery)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | product_slug | [string] |  no  | Contains list of product slug |

---


 
 
 #### [ProductAction](#ProductAction)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | query | [ActionQuery](#ActionQuery) |  no  |  |
 | url | string |  no  |  |
 | type | string |  no  |  |

---


 
 
 #### [ProductImage](#ProductImage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | secure_url | string |  no  |  |
 | url | string |  no  |  |
 | aspect_ratio | string |  no  |  |

---


 
 
 #### [CategoryInfo](#CategoryInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | uid | number |  no  | Product Category Id |

---


 
 
 #### [CartProduct](#CartProduct)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | slug | string |  no  | Unique product url name generated via product name and other meta data |
 | type | string |  no  |  |
 | action | [ProductAction](#ProductAction) |  no  |  |
 | brand | [BaseInfo](#BaseInfo) |  no  |  |
 | name | string |  no  |  |
 | images | [[ProductImage](#ProductImage)] |  no  |  |
 | uid | number |  no  |  |
 | categories | [[CategoryInfo](#CategoryInfo)] |  no  |  |

---


 
 
 #### [PromoMeta](#PromoMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |

---


 
 
 #### [CartProductInfo](#CartProductInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | article | [ProductArticle](#ProductArticle) |  no  |  |
 | promotions_applied | [[AppliedPromotion](#AppliedPromotion)] |  no  |  |
 | parent_item_identifiers | string |  no  |  |
 | bulk_offer | string |  no  |  |
 | availability | [ProductAvailability](#ProductAvailability) |  no  |  |
 | message | string |  no  |  |
 | is_set | boolean |  no  |  |
 | coupon_message | string |  no  |  |
 | price_per_unit | [ProductPriceInfo](#ProductPriceInfo) |  no  |  |
 | identifiers | [CartProductIdentifer](#CartProductIdentifer) |  yes  |  |
 | discount | string |  no  |  |
 | key | string |  no  |  |
 | product | [CartProduct](#CartProduct) |  no  |  |
 | quantity | number |  no  |  |
 | promo_meta | [PromoMeta](#PromoMeta) |  no  |  |
 | price | [ProductPriceInfo](#ProductPriceInfo) |  no  |  |

---


 
 
 #### [OpenapiCartDetailsResponse](#OpenapiCartDetailsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 | is_valid | boolean |  no  |  |
 | breakup_values | [CartBreakup](#CartBreakup) |  no  |  |
 | items | [[CartProductInfo](#CartProductInfo)] |  no  |  |

---


 
 
 #### [OpenApiErrorResponse](#OpenApiErrorResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 | errors | string |  no  | Contains field name which has error as key and error message as value |
 | success | boolean |  no  |  |

---


 
 
 #### [ShippingAddress](#ShippingAddress)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | city | string |  no  |  |
 | state | string |  no  |  |
 | country_code | string |  no  |  |
 | area_code | string |  yes  |  |
 | address_type | string |  no  |  |
 | pincode | number |  no  |  |
 | area | string |  no  |  |
 | landmark | string |  no  |  |
 | name | string |  no  |  |
 | meta | string |  no  |  |
 | phone | number |  no  |  |
 | area_code_slug | string |  no  |  |
 | country | string |  no  |  |
 | email | string |  no  |  |
 | address | string |  no  |  |

---


 
 
 #### [OpenApiCartServiceabilityRequest](#OpenApiCartServiceabilityRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipping_address | [ShippingAddress](#ShippingAddress) |  yes  |  |
 | cart_items | [CartItem](#CartItem) |  no  |  |

---


 
 
 #### [PromiseTimestamp](#PromiseTimestamp)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | min | number |  no  |  |
 | max | number |  no  |  |

---


 
 
 #### [PromiseFormatted](#PromiseFormatted)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | min | string |  no  |  |
 | max | string |  no  |  |

---


 
 
 #### [ShipmentPromise](#ShipmentPromise)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | timestamp | [PromiseTimestamp](#PromiseTimestamp) |  no  |  |
 | formatted | [PromiseFormatted](#PromiseFormatted) |  no  |  |

---


 
 
 #### [OpenApiCartServiceabilityResponse](#OpenApiCartServiceabilityResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | delivery_promise | [ShipmentPromise](#ShipmentPromise) |  no  |  |
 | message | string |  no  |  |
 | breakup_values | [CartBreakup](#CartBreakup) |  no  |  |
 | is_valid | boolean |  no  |  |
 | items | [[CartProductInfo](#CartProductInfo)] |  no  |  |

---


 
 
 #### [OpenApiFiles](#OpenApiFiles)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | key | string |  yes  |  |
 | values | [string] |  yes  |  |

---


 
 
 #### [CartItemMeta](#CartItemMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | primary_item | boolean |  no  |  |
 | group_id | string |  no  |  |

---


 
 
 #### [MultiTenderPaymentMeta](#MultiTenderPaymentMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | payment_gateway | string |  no  |  |
 | order_id | string |  no  |  |
 | payment_id | string |  no  |  |
 | extra_meta | string |  no  |  |
 | current_status | string |  no  |  |

---


 
 
 #### [MultiTenderPaymentMethod](#MultiTenderPaymentMethod)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  | Payment mode name |
 | meta | [MultiTenderPaymentMeta](#MultiTenderPaymentMeta) |  no  |  |
 | amount | number |  yes  | Payment amount |
 | mode | string |  yes  |  |

---


 
 
 #### [OpenApiOrderItem](#OpenApiOrderItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount_paid | number |  yes  |  |
 | product_id | number |  yes  |  |
 | price_marked | number |  yes  |  |
 | files | [[OpenApiFiles](#OpenApiFiles)] |  no  |  |
 | discount | number |  yes  |  |
 | price_effective | number |  yes  |  |
 | cashback_applied | number |  yes  |  |
 | loyalty_discount | number |  no  |  |
 | extra_meta | string |  no  |  |
 | cod_charges | number |  yes  |  |
 | delivery_charges | number |  yes  |  |
 | meta | [CartItemMeta](#CartItemMeta) |  no  |  |
 | coupon_effective_discount | number |  yes  |  |
 | employee_discount | number |  no  |  |
 | quantity | number |  no  |  |
 | payment_methods | [[MultiTenderPaymentMethod](#MultiTenderPaymentMethod)] |  yes  |  |
 | size | string |  yes  |  |

---


 
 
 #### [OpenApiPlatformCheckoutReq](#OpenApiPlatformCheckoutReq)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | order_id | string |  no  |  |
 | affiliate_order_id | string |  no  |  |
 | cashback_applied | number |  yes  |  |
 | coupon_code | string |  yes  |  |
 | coupon_value | number |  yes  |  |
 | currency_code | string |  no  |  |
 | coupon | string |  no  |  |
 | delivery_charges | number |  yes  |  |
 | cart_value | number |  yes  |  |
 | shipping_address | [ShippingAddress](#ShippingAddress) |  no  |  |
 | billing_address | [ShippingAddress](#ShippingAddress) |  yes  |  |
 | files | [[OpenApiFiles](#OpenApiFiles)] |  no  |  |
 | loyalty_discount | number |  no  |  |
 | cod_charges | number |  yes  |  |
 | cart_items | [[OpenApiOrderItem](#OpenApiOrderItem)] |  yes  |  |
 | employee_discount | string |  no  |  |
 | payment_mode | string |  no  |  |
 | payment_methods | [[MultiTenderPaymentMethod](#MultiTenderPaymentMethod)] |  yes  |  |

---


 
 
 #### [OpenApiCheckoutResponse](#OpenApiCheckoutResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | order_ref_id | string |  no  | Order id sent in request |
 | message | string |  no  |  |
 | success | boolean |  no  |  |
 | order_id | string |  yes  | Fynd order id |

---




