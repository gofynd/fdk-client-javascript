




##### [Back to Platform docs](./README.md)

## Cart Methods
Cart APIs

* [checkCartServiceability](#checkcartserviceability)
* [checkoutCart](#checkoutcart)
* [createCoupon](#createcoupon)
* [createPromotion](#createpromotion)
* [fetchAndvalidateCartItems](#fetchandvalidatecartitems)
* [getCouponById](#getcouponbyid)
* [getCoupons](#getcoupons)
* [getPromotionById](#getpromotionbyid)
* [getPromotions](#getpromotions)
* [overrideCart](#overridecart)
* [updateCoupon](#updatecoupon)
* [updateCouponPartially](#updatecouponpartially)
* [updatePromotion](#updatepromotion)
* [updatePromotionPartially](#updatepromotionpartially)



## Methods with example and description




### checkCartServiceability
Check Pincode Serviceability



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").cart.checkCartServiceability({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").cart.checkCartServiceability({  body : value });
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
const promise = platformClient.application("<APPLICATION_ID>").cart.checkoutCart({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").cart.checkoutCart({  body : value });
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


### createCoupon
Create new coupon



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").cart.createCoupon({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").cart.createCoupon({  body : value });
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


### createPromotion
Create new promotion



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").cart.createPromotion({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").cart.createPromotion({  body : value });
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


### fetchAndvalidateCartItems
Fetch Cart Details



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").cart.fetchAndvalidateCartItems({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").cart.fetchAndvalidateCartItems({  body : value });
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


### getCouponById
Get with single coupon details or coupon list



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").cart.getCouponById({  id : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").cart.getCouponById({  id : value });
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


### getCoupons
Get with single coupon details or coupon list



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").cart.getCoupons({  pageNo : value,
 pageSize : value,
 isArchived : value,
 title : value,
 isPublic : value,
 isDisplay : value,
 typeSlug : value,
 code : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").cart.getCoupons({  pageNo : value,
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


### getPromotionById
Get with single promotion details or promotion list



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").cart.getPromotionById({  id : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").cart.getPromotionById({  id : value });
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


### getPromotions
Get promotion list



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").cart.getPromotions({  pageNo : value,
 pageSize : value,
 q : value,
 isActive : value,
 promoGroup : value,
 promotionType : value,
 fpPanel : value,
 promotionId : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").cart.getPromotions({  pageNo : value,
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


### overrideCart
Create Fynd order with overriding cart details



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").cart.overrideCart({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").cart.overrideCart({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [OverrideCheckoutReq](#OverrideCheckoutReq) | yes | Request body |


Generate Fynd order while overriding cart details sent with provided `cart_items`

*Returned Response:*




[OverrideCheckoutResponse](#OverrideCheckoutResponse)

Checkout cart and create Fynd order id




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "cart": {
    "success": true,
    "delivery_charges": 0,
    "store_code": "",
    "order_id": "FY630DDF8601EF037743",
    "cod_message": "COD available",
    "delivery_slots": [
      {
        "date": "Fri, 09 Nov",
        "delivery_slot": [
          {
            "delivery_slot_timing": "By 9:00 PM",
            "default": true,
            "delivery_slot_id": 1
          }
        ]
      }
    ],
    "user_type": "FYND Store user",
    "cod_available": true,
    "cod_charges": 0,
    "store_emp_list": [],
    "delivery_charge_order_value": 1500,
    "breakup_values": {
      "loyalty_points": {
        "total": 0,
        "applicable": 0,
        "is_applied": false,
        "description": "Your cashback, reward points, and refund amount get credited to Fynd Cash which can be redeemed while placing an order.",
        "message": "No Fynd Cash Applied"
      },
      "coupon": {
        "type": "cash",
        "code": "",
        "uid": null,
        "value": 0,
        "is_applied": false,
        "message": "Coupon not applicable with Reward point"
      },
      "display": [
        {
          "display": "MRP Total",
          "key": "mrp_total",
          "original": 400,
          "attr": "mrp_total",
          "value": 400,
          "currency_code": "INR",
          "currency_symbol": "₹",
          "message": []
        },
        {
          "display": "Discount",
          "key": "discount",
          "original": -200,
          "attr": "discount",
          "value": -200,
          "currency_code": "INR",
          "currency_symbol": "₹",
          "message": []
        },
        {
          "display": "Subtotal",
          "key": "subtotal",
          "original": 200,
          "attr": "subtotal",
          "value": 200,
          "currency_code": "INR",
          "currency_symbol": "₹",
          "message": []
        },
        {
          "display": "Total",
          "key": "total",
          "original": 200,
          "attr": "total",
          "value": 200,
          "currency_code": "INR",
          "currency_symbol": "₹",
          "message": []
        }
      ],
      "raw": {
        "sub_total": 200,
        "subtotal": 200,
        "coupon": 0,
        "promotion": 0,
        "delivery_charge": 0,
        "you_saved": 0,
        "fynd_cash": 0,
        "cod_charge": 0,
        "total": 200,
        "gst_charges": 9.52,
        "vog": 190.48,
        "convenience_fee": 0,
        "mrp_total": 400,
        "discount": -200
      }
    },
    "items": [
      {
        "message": "",
        "quantity": 1,
        "is_set": false,
        "delivery_promise": {
          "timestamp": {
            "min": 1646257339,
            "max": 1646689339
          },
          "formatted": {
            "min": "03 Mar, Thursday",
            "max": "08 Mar, Tuesday"
          }
        },
        "identifiers": {
          "identifier": "5mPyy88URXuh3Lo35uaTg"
        },
        "moq": {
          "maximum": 4,
          "minimum": 1
        },
        "coupon_message": "",
        "product": {
          "type": "product",
          "uid": 7502730,
          "name": "SLIM FIT JEANS",
          "slug": "slim-fit-jeans1",
          "brand": {
            "uid": 29,
            "name": "lacoste"
          },
          "categories": [
            {
              "uid": 3602,
              "name": "Dresses"
            }
          ],
          "attributes": {
            "net-quantity": "17",
            "occasion": "Beach Wear",
            "gender": "Men",
            "pattern": "Animal",
            "brand-size": "UK46",
            "style-type": "A-line Dresses",
            "season-year": "2018",
            "secondary-color": "Black",
            "jiomart-allowed-size": "Free Size",
            "fabric": "Chambray",
            "wash-care": "Hand Wash Cold Separately",
            "size-group": "Regular",
            "brand-color": "Black",
            "color-shade": "Bright",
            "multi-brick": "Ethnic Bottoms",
            "product-name": "Bodycon Dress",
            "multi-segment": "Men",
            "primary-color": "Navy",
            "multi-vertical": "Western Wear",
            "component-count": "100",
            "manufactured-by": "RIL",
            "year-of-packaging": "2017",
            "product-code-x-catalog-option-color": "1",
            "technique": "Sanganeri",
            "waist-in-inches": "30",
            "chest-size-in-inches": "12",
            "shoulder-size-in-inches": "12",
            "sleeve-length": "Half",
            "neckline": "Collar",
            "brand_name": "lacoste"
          },
          "images": [
            {
              "aspect_ratio": "16:25",
              "url": "https://hdn-1.jiomarketx0.de/x0/products/pictures/item/free/original/LYa1_YA3_-console.png",
              "secure_url": "https://hdn-1.jiomarketx0.de/x0/products/pictures/item/free/original/LYa1_YA3_-console.png"
            }
          ],
          "action": {
            "type": "product",
            "url": "https://api.fyndx0.de/platform/content/v1/products/slim-fit-jeans1/",
            "query": {
              "product_slug": [
                "slim-fit-jeans1"
              ]
            }
          },
          "item_code": "JEANS1232",
          "_custom_json": {}
        },
        "key": "7502730_OS",
        "price": {
          "base": {
            "add_on": 100,
            "marked": 400,
            "effective": 200,
            "selling": 200,
            "currency_code": "INR",
            "currency_symbol": "₹"
          },
          "converted": {
            "add_on": 100,
            "marked": 400,
            "effective": 200,
            "selling": 200,
            "currency_code": "INR",
            "currency_symbol": "₹"
          }
        },
        "price_per_unit": {
          "base": {
            "marked": 400,
            "effective": 200,
            "selling_price": 200,
            "currency_code": "INR",
            "currency_symbol": "₹"
          },
          "converted": {
            "marked": 400,
            "effective": 200,
            "selling_price": 200,
            "currency_code": "INR",
            "currency_symbol": "₹"
          }
        },
        "article": {
          "type": "article",
          "uid": "62e3ca42a2348dd4cb4cd693",
          "size": "OS",
          "seller": {
            "uid": 1527,
            "name": "SPEED-A-WAY PVT. LTD."
          },
          "store": {
            "uid": 3484,
            "name": "Location 1"
          },
          "quantity": 19,
          "price": {
            "base": {
              "marked": 400,
              "effective": 200,
              "selling": 200,
              "currency_code": "INR",
              "currency_symbol": "₹"
            },
            "converted": {
              "marked": 400,
              "effective": 200,
              "selling": 200,
              "currency_code": "INR",
              "currency_symbol": "INR"
            }
          },
          "extra_meta": {}
        },
        "bulk_offer": {},
        "discount": "50% OFF",
        "promotions_applied": [],
        "availability": {
          "sizes": [
            "OS"
          ],
          "other_store_quantity": 1,
          "out_of_stock": false,
          "deliverable": true,
          "is_valid": true,
          "available_sizes": [
            {
              "is_available": true,
              "display": "OS",
              "value": "OS"
            }
          ]
        },
        "promo_meta": {}
      }
    ],
    "delivery_charge_info": "",
    "notification": {},
    "message": "",
    "delivery_promise": {
      "timestamp": {
        "min": 1646257339,
        "max": 1646689339
      },
      "formatted": {
        "min": "03 Mar, Thursday",
        "max": "08 Mar, Tuesday"
      }
    },
    "coupon_text": "View all offers",
    "cart_id": 21755,
    "id": "63007e85f7df71d5a89758cf",
    "uid": "21755",
    "gstin": null,
    "comment": "",
    "checkout_mode": "self",
    "payment_selection_lock": {
      "enabled": true,
      "default_options": "JIOPP",
      "payment_identifier": "JIOPP"
    },
    "restrict_checkout": false,
    "is_valid": true,
    "currency": {
      "code": "INR",
      "symbol": "₹"
    },
    "last_modified": "Tue, 30 Aug 2022 09:59:34 GMT"
  },
  "message": "",
  "data": {
    "transactionRefNumber": "FY630DDF8601EF037743",
    "base64_html": "PGh0bWw+PGhlYWQ+PG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xICwgbWF4aW11bS1zY2FsZT0xLCB1c2VyLXNjYWxhYmxlPW5vJz48c2NyaXB0IHR5cGU9J3RleHQvamF2YXNjcmlwdCc+ZnVuY3Rpb24gZm9ybVN1Ym1pdCgpe2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXltZW50Jykuc3VibWl0KCk7fTwvc2NyaXB0PjwvaGVhZD48Ym9keSBvbmxvYWQ9J2phdmFzY3JpcHQ6Zm9ybVN1Ym1pdCgpOyc+PGZvcm0gbmFtZT0ncGF5bWVudCcgaWQ9J3BheW1lbnQnIG1ldGhvZD0nUE9TVCcgYWN0aW9uPSdodHRwczovL3J0c3Mtc2l0Lmppb2Nvbm5lY3QuY29tL2ppb3BheXBnL3YxL3BheW1lbnQtb3B0aW9ucyc+PGltZyBzcmM9J2h0dHBzOi8vcnRzcy1zaXQuamlvY29ubmVjdC5jb20vdXBsb2FkL215amlvY29yZXN0YXRpY2ZpbGVzL2ltYWdlcy9sb2FkZXIuZ2lmJyB3aWR0aD0nMjUlJyBoZWlnaHQ9J2F1dG8nIHN0eWxlPSdkaXNwbGF5OiBibG9jazsgbWFyZ2luLXRvcDogMTIwcHg7bWFyZ2luLWxlZnQ6IGF1dG87IG1hcmdpbi1yaWdodDogYXV0bzsgbWFyZ2luLWJvdHRvbToxMHB4OycvPjxkaXYgc3R5bGU9J3RleHQtYWxpZ246IGNlbnRlcic+PHAgc3R5bGU9J2Rpc3BsYXk6IGlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO2ZvbnQtc2l6ZToxNnB4Jz5SZWRpcmVjdGluZyB0byBwYXltZW50IGdhdGV3YXkuIFBsZWFzZSBkbyBub3QgY2xpY2sgb24gcmVmcmVzaCBvciBiYWNrIGJ1dHRvbi4gPC9wPjwvZGl2PjxpbnB1dCB0eXBlPSdoaWRkZW4nIG5hbWU9J3BhcmFtMScgdmFsdWU9J2Q5OTBlYWFlZDI3ODRmNWNiMDVmMjI0M2Y2Y2IzNDNjJy8+PGlucHV0IHR5cGU9J3N1Ym1pdCcgdmFsdWU9Jycgc3R5bGU9J2Rpc3BsYXk6IG5vbmU7Jy8+PC9mb3JtPjwvYm9keT48L2h0bWw+",
    "render_url": "https://api.xxxx0.de/platform/payment/v2/external/payments/html/render",
    "payment_confirm": "https://api.xxxx0.de/service/application/payment/v1.0/payment/confirm/"
  },
  "callback_url": "https://jio.xxxx0.de/cart/order-status",
  "payment_confirm_url": "https://api.xxxx0.de/service/application/payment/v1.0/payment/confirm/",
  "order_id": "FY630DDF8601EF037743",
  "app_intercept_url": "https://jio.xxxx0.de/cart/order-status"
}
```
</details>









---


### updateCoupon
Update existing coupon configuration



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").cart.updateCoupon({  id : value,
 body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").cart.updateCoupon({  id : value,
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
const promise = platformClient.application("<APPLICATION_ID>").cart.updateCouponPartially({  id : value,
 body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").cart.updateCouponPartially({  id : value,
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


### updatePromotion
Update existing promotion configuration



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").cart.updatePromotion({  id : value,
 body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").cart.updatePromotion({  id : value,
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
const promise = platformClient.application("<APPLICATION_ID>").cart.updatePromotionPartially({  id : value,
 body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").cart.updatePromotionPartially({  id : value,
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



### Schemas


#### [ActionQuery](#ActionQuery)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | product_slug | [string]? |  yes  | Contains list of product slug |
 

---

#### [AppliedPromotion](#AppliedPromotion)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | number? |  yes  | Per unit discount amount applied with current promotion |
 | article_quantity | number? |  yes  | Quantity of article on which promotion is applicable |
 | mrp_promotion | boolean? |  yes  | If applied promotion is applied on product MRP or ESP |
 | offer_text | string? |  yes  | Offer text of current promotion |
 | promo_id | string? |  yes  | Promotion id |
 | promotion_type | string? |  yes  | Promotion type of current promotion |
 

---

#### [ArticlePriceInfo](#ArticlePriceInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | base | [BasePrice](#BasePrice)? |  yes  |  |
 | converted | [BasePrice](#BasePrice)? |  yes  |  |
 

---

#### [BaseInfo](#BaseInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string? |  yes  |  |
 | uid | number? |  yes  |  |
 

---

#### [BasePrice](#BasePrice)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | currency_code | string? |  yes  |  |
 | currency_symbol | string? |  yes  |  |
 | effective | number? |  yes  |  |
 | marked | number? |  yes  |  |
 

---

#### [BulkBundleRestriction](#BulkBundleRestriction)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | multi_store_allowed | boolean |  no  |  |
 

---

#### [CartBreakup](#CartBreakup)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | coupon | [CouponBreakup](#CouponBreakup)? |  yes  |  |
 | display | [[DisplayBreakup](#DisplayBreakup)]? |  yes  |  |
 | loyalty_points | [LoyaltyPoints](#LoyaltyPoints)? |  yes  |  |
 | raw | [RawBreakup](#RawBreakup)? |  yes  |  |
 

---

#### [CartItem](#CartItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | product_id | string |  no  |  |
 | quantity | number? |  yes  |  |
 | size | string |  no  |  |
 

---

#### [CartItemMeta](#CartItemMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | group_id | string? |  yes  |  |
 | primary_item | boolean? |  yes  |  |
 

---

#### [CartProduct](#CartProduct)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action | [ProductAction](#ProductAction)? |  yes  |  |
 | brand | [BaseInfo](#BaseInfo)? |  yes  |  |
 | categories | [[CategoryInfo](#CategoryInfo)]? |  yes  |  |
 | images | [[ProductImage](#ProductImage)]? |  yes  |  |
 | name | string? |  yes  |  |
 | slug | string? |  yes  | Unique product url name generated via product name and other meta data |
 | type | string? |  yes  |  |
 | uid | number? |  yes  |  |
 

---

#### [CartProductIdentifer](#CartProductIdentifer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | identifier | string? |  yes  | Article idenfier generated by cart |
 

---

#### [CartProductInfo](#CartProductInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | article | [ProductArticle](#ProductArticle)? |  yes  |  |
 | availability | [ProductAvailability](#ProductAvailability)? |  yes  |  |
 | bulk_offer | string? |  yes  |  |
 | coupon_message | string? |  yes  |  |
 | discount | string? |  yes  |  |
 | identifiers | [CartProductIdentifer](#CartProductIdentifer) |  no  |  |
 | is_set | boolean? |  yes  |  |
 | key | string? |  yes  |  |
 | message | string? |  yes  |  |
 | price | [ProductPriceInfo](#ProductPriceInfo)? |  yes  |  |
 | price_per_unit | [ProductPriceInfo](#ProductPriceInfo)? |  yes  |  |
 | product | [CartProduct](#CartProduct)? |  yes  |  |
 | promo_meta | [PromoMeta](#PromoMeta)? |  yes  |  |
 | promotions_applied | [[AppliedPromotion](#AppliedPromotion)]? |  yes  |  |
 | quantity | number? |  yes  |  |
 

---

#### [CategoryInfo](#CategoryInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string? |  yes  |  |
 | uid | number? |  yes  | Product Category Id |
 

---

#### [CompareObject](#CompareObject)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | equals | number? |  yes  |  |
 | greater_than | number? |  yes  |  |
 | greater_than_equals | number? |  yes  |  |
 | less_than | number? |  yes  |  |
 | less_than_equals | number? |  yes  |  |
 

---

#### [CouponAction](#CouponAction)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action_date | string? |  yes  |  |
 | txn_mode | string? |  yes  |  |
 

---

#### [CouponAdd](#CouponAdd)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _schedule | [CouponSchedule](#CouponSchedule)? |  yes  |  |
 | action | [CouponAction](#CouponAction)? |  yes  |  |
 | author | [CouponAuthor](#CouponAuthor)? |  yes  |  |
 | code | string |  no  |  |
 | date_meta | [CouponDateMeta](#CouponDateMeta)? |  yes  |  |
 | display_meta | [DisplayMeta](#DisplayMeta) |  no  |  |
 | identifiers | [Identifier](#Identifier) |  no  |  |
 | ownership | [Ownership](#Ownership) |  no  |  |
 | restrictions | [Restrictions](#Restrictions)? |  yes  |  |
 | rule | [[Rule](#Rule)] |  no  |  |
 | rule_definition | [RuleDefinition](#RuleDefinition) |  no  |  |
 | state | [State](#State)? |  yes  |  |
 | tags | [string]? |  yes  |  |
 | type_slug | string |  no  |  |
 | validation | [Validation](#Validation)? |  yes  |  |
 | validity | [Validity](#Validity) |  no  |  |
 

---

#### [CouponAuthor](#CouponAuthor)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | created_by | string? |  yes  |  |
 | modified_by | string? |  yes  |  |
 

---

#### [CouponBreakup](#CouponBreakup)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string? |  yes  |  |
 | is_applied | boolean? |  yes  |  |
 | message | string? |  yes  |  |
 | type | string? |  yes  |  |
 | uid | string? |  yes  |  |
 | value | number? |  yes  |  |
 

---

#### [CouponDateMeta](#CouponDateMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | created_on | string? |  yes  |  |
 | modified_on | string? |  yes  |  |
 

---

#### [CouponPartialUpdate](#CouponPartialUpdate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | archive | boolean? |  yes  | Send true to unpublish coupon |
 | schedule | [CouponSchedule](#CouponSchedule)? |  yes  |  |
 

---

#### [CouponSchedule](#CouponSchedule)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cron | string? |  yes  |  |
 | duration | number? |  yes  |  |
 | end | string? |  yes  |  |
 | next_schedule | [string]? |  yes  |  |
 | start | string? |  yes  |  |
 

---

#### [CouponsResponse](#CouponsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [CouponAdd](#CouponAdd)? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 

---

#### [CouponUpdate](#CouponUpdate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _schedule | [CouponSchedule](#CouponSchedule)? |  yes  |  |
 | action | [CouponAction](#CouponAction)? |  yes  |  |
 | author | [CouponAuthor](#CouponAuthor)? |  yes  |  |
 | code | string |  no  |  |
 | date_meta | [CouponDateMeta](#CouponDateMeta)? |  yes  |  |
 | display_meta | [DisplayMeta](#DisplayMeta) |  no  |  |
 | identifiers | [Identifier](#Identifier) |  no  |  |
 | ownership | [Ownership](#Ownership) |  no  |  |
 | restrictions | [Restrictions](#Restrictions)? |  yes  |  |
 | rule | [[Rule](#Rule)] |  no  |  |
 | rule_definition | [RuleDefinition](#RuleDefinition) |  no  |  |
 | state | [State](#State)? |  yes  |  |
 | tags | [string]? |  yes  |  |
 | type_slug | string |  no  |  |
 | validation | [Validation](#Validation)? |  yes  |  |
 | validity | [Validity](#Validity) |  no  |  |
 

---

#### [DiscountOffer](#DiscountOffer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string? |  yes  |  |
 | discount_amount | number? |  yes  |  |
 | discount_percentage | number? |  yes  |  |
 | discount_price | number? |  yes  |  |
 | max_discount_amount | number? |  yes  |  |
 | max_offer_quantity | number? |  yes  |  |
 | min_offer_quantity | number? |  yes  |  |
 

---

#### [DiscountRule](#DiscountRule)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | buy_condition | string |  no  |  |
 | discount_type | string |  no  |  |
 | item_criteria | [ItemCriteria](#ItemCriteria) |  no  |  |
 | offer | [DiscountOffer](#DiscountOffer) |  no  |  |
 

---

#### [DisplayBreakup](#DisplayBreakup)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | currency_code | string? |  yes  |  |
 | currency_symbol | string? |  yes  |  |
 | display | string? |  yes  |  |
 | key | string? |  yes  |  |
 | message | [string]? |  yes  |  |
 | value | number? |  yes  |  |
 

---

#### [DisplayMeta](#DisplayMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | apply | [DisplayMetaDict](#DisplayMetaDict)? |  yes  |  |
 | auto | [DisplayMetaDict](#DisplayMetaDict)? |  yes  |  |
 | description | string? |  yes  |  |
 | remove | [DisplayMetaDict](#DisplayMetaDict)? |  yes  |  |
 | subtitle | string? |  yes  |  |
 | title | string? |  yes  |  |
 

---

#### [DisplayMeta1](#DisplayMeta1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string? |  yes  |  |
 | name | string? |  yes  |  |
 | offer_text | string? |  yes  |  |
 

---

#### [DisplayMetaDict](#DisplayMetaDict)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | subtitle | string? |  yes  |  |
 | title | string? |  yes  |  |
 

---

#### [Identifier](#Identifier)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | article_id | [string]? |  yes  |  |
 | brand_id | [number]? |  yes  |  |
 | category_id | [number]? |  yes  |  |
 | collection_id | [string]? |  yes  |  |
 | company_id | [number]? |  yes  |  |
 | item_id | [number]? |  yes  |  |
 | store_id | [number]? |  yes  |  |
 | user_id | [string]? |  yes  |  |
 

---

#### [ItemCriteria](#ItemCriteria)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | all_items | boolean? |  yes  |  |
 | buy_rules | [string]? |  yes  |  |
 | cart_quantity | [CompareObject](#CompareObject)? |  yes  |  |
 | cart_total | [CompareObject](#CompareObject)? |  yes  |  |
 | item_brand | [number]? |  yes  |  |
 | item_category | [number]? |  yes  |  |
 | item_company | [number]? |  yes  |  |
 | item_exclude_brand | [number]? |  yes  |  |
 | item_exclude_category | [number]? |  yes  |  |
 | item_exclude_company | [number]? |  yes  |  |
 | item_exclude_sku | [string]? |  yes  |  |
 | item_exclude_store | [number]? |  yes  |  |
 | item_id | [number]? |  yes  |  |
 | item_size | [string]? |  yes  |  |
 | item_sku | [string]? |  yes  |  |
 | item_store | [number]? |  yes  |  |
 

---

#### [LoyaltyPoints](#LoyaltyPoints)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | applicable | number? |  yes  |  |
 | description | string? |  yes  |  |
 | is_applied | boolean? |  yes  |  |
 | total | number? |  yes  |  |
 

---

#### [MultiTenderPaymentMeta](#MultiTenderPaymentMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current_status | string? |  yes  |  |
 | extra_meta | string? |  yes  |  |
 | order_id | string? |  yes  |  |
 | payment_gateway | string? |  yes  |  |
 | payment_id | string? |  yes  |  |
 

---

#### [MultiTenderPaymentMethod](#MultiTenderPaymentMethod)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | number |  no  | Payment amount |
 | meta | [MultiTenderPaymentMeta](#MultiTenderPaymentMeta)? |  yes  |  |
 | mode | string |  no  |  |
 | name | string? |  yes  | Payment mode name |
 

---

#### [OpenapiCartDetailsRequest](#OpenapiCartDetailsRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cart_items | [CartItem](#CartItem)? |  yes  |  |
 

---

#### [OpenapiCartDetailsResponse](#OpenapiCartDetailsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | breakup_values | [CartBreakup](#CartBreakup)? |  yes  |  |
 | is_valid | boolean? |  yes  |  |
 | items | [[CartProductInfo](#CartProductInfo)]? |  yes  |  |
 | message | string? |  yes  |  |
 

---

#### [OpenApiCartServiceabilityRequest](#OpenApiCartServiceabilityRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cart_items | [CartItem](#CartItem)? |  yes  |  |
 | shipping_address | [ShippingAddress](#ShippingAddress) |  no  |  |
 

---

#### [OpenApiCartServiceabilityResponse](#OpenApiCartServiceabilityResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | breakup_values | [CartBreakup](#CartBreakup)? |  yes  |  |
 | delivery_promise | [ShipmentPromise](#ShipmentPromise)? |  yes  |  |
 | is_valid | boolean? |  yes  |  |
 | items | [[CartProductInfo](#CartProductInfo)]? |  yes  |  |
 | message | string? |  yes  |  |
 

---

#### [OpenApiCheckoutResponse](#OpenApiCheckoutResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 | order_id | string |  no  | Fynd order id |
 | order_ref_id | string? |  yes  | Order id sent in request |
 | success | boolean? |  yes  |  |
 

---

#### [OpenApiErrorResponse](#OpenApiErrorResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | errors | string? |  yes  | Contains field name which has error as key and error message as value |
 | message | string? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [OpenApiFiles](#OpenApiFiles)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | key | string |  no  |  |
 | values | [string] |  no  |  |
 

---

#### [OpenApiOrderItem](#OpenApiOrderItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount_paid | number |  no  |  |
 | cashback_applied | number |  no  |  |
 | cod_charges | number |  no  |  |
 | coupon_effective_discount | number |  no  |  |
 | delivery_charges | number |  no  |  |
 | discount | number |  no  |  |
 | employee_discount | number? |  yes  |  |
 | extra_meta | string? |  yes  |  |
 | files | [[OpenApiFiles](#OpenApiFiles)]? |  yes  |  |
 | loyalty_discount | number? |  yes  |  |
 | meta | [CartItemMeta](#CartItemMeta)? |  yes  |  |
 | payment_methods | [[MultiTenderPaymentMethod](#MultiTenderPaymentMethod)] |  no  |  |
 | price_effective | number |  no  |  |
 | price_marked | number |  no  |  |
 | product_id | number |  no  |  |
 | quantity | number? |  yes  |  |
 | size | string |  no  |  |
 

---

#### [OpenApiPlatformCheckoutReq](#OpenApiPlatformCheckoutReq)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | affiliate_order_id | string? |  yes  |  |
 | billing_address | [ShippingAddress](#ShippingAddress) |  no  |  |
 | cart_items | [[OpenApiOrderItem](#OpenApiOrderItem)] |  no  |  |
 | cart_value | number |  no  |  |
 | cashback_applied | number |  no  |  |
 | cod_charges | number |  no  |  |
 | coupon | string? |  yes  |  |
 | coupon_code | string |  no  |  |
 | coupon_value | number |  no  |  |
 | currency_code | string? |  yes  |  |
 | delivery_charges | number |  no  |  |
 | employee_discount | string? |  yes  |  |
 | files | [[OpenApiFiles](#OpenApiFiles)]? |  yes  |  |
 | loyalty_discount | number? |  yes  |  |
 | order_id | string? |  yes  |  |
 | payment_methods | [[MultiTenderPaymentMethod](#MultiTenderPaymentMethod)] |  no  |  |
 | payment_mode | string? |  yes  |  |
 | shipping_address | [ShippingAddress](#ShippingAddress)? |  yes  |  |
 

---

#### [OperationErrorResponse](#OperationErrorResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [OverrideCartItem](#OverrideCartItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount_paid | number |  no  |  |
 | discount | number |  no  |  |
 | extra_meta | string? |  yes  |  |
 | item_id | number |  no  |  |
 | price_effective | number |  no  |  |
 | price_marked | number |  no  |  |
 | promo_list | [[OverrideCartItemPromo](#OverrideCartItemPromo)]? |  yes  |  |
 | quantity | number? |  yes  |  |
 | seller_identifier | string? |  yes  |  |
 | size | string |  no  |  |
 

---

#### [OverrideCartItemPromo](#OverrideCartItemPromo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | item_list | [string]? |  yes  |  |
 | promo_amount | string |  no  |  |
 | promo_desc | string? |  yes  |  |
 | promo_id | string |  no  |  |
 | rwrd_tndr | string? |  yes  |  |
 

---

#### [OverrideCheckoutReq](#OverrideCheckoutReq)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | aggregator | string |  no  |  |
 | billing_address | string? |  yes  |  |
 | cart_id | string |  no  |  |
 | cart_items | [[OverrideCartItem](#OverrideCartItem)] |  no  |  |
 | currency_code | string |  no  |  |
 | merchant_code | string |  no  |  |
 | order_type | string |  no  |  |
 | ordering_store | number? |  yes  |  |
 | payment_identifier | string |  no  |  |
 | payment_mode | string |  no  |  |
 | shipping_address | string? |  yes  |  |
 

---

#### [OverrideCheckoutResponse](#OverrideCheckoutResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cart | string |  no  |  |
 | data | string |  no  |  |
 | message | string |  no  |  |
 | order_id | string |  no  |  |
 | success | string |  no  |  |
 

---

#### [Ownership](#Ownership)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | payable_by | string |  no  |  |
 | payable_category | string |  no  |  |
 

---

#### [Ownership1](#Ownership1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | payable_by | string |  no  |  |
 | payable_category | string |  no  |  |
 

---

#### [Page](#Page)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number? |  yes  | Current page no |
 | has_next | boolean? |  yes  | True if more records are present for next pages |
 | has_previous | boolean? |  yes  | True if more records are present for previous pages. Sent for cursor pagination |
 | item_total | number? |  yes  | Total coupon count in system |
 | next_id | string? |  yes  | Cursor id for next set of records. |
 | size | number? |  yes  | Current request page size |
 | type | string |  no  |  |
 

---

#### [PaymentAllowValue](#PaymentAllowValue)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | max | number? |  yes  |  |
 

---

#### [PaymentAllowValue1](#PaymentAllowValue1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | max | number? |  yes  |  |
 

---

#### [PaymentModes](#PaymentModes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | codes | [string]? |  yes  |  |
 | networks | [string]? |  yes  |  |
 | types | [string]? |  yes  |  |
 | uses | [PaymentAllowValue](#PaymentAllowValue)? |  yes  |  |
 

---

#### [PostOrder](#PostOrder)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cancellation_allowed | boolean? |  yes  |  |
 | return_allowed | boolean? |  yes  |  |
 

---

#### [PostOrder1](#PostOrder1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cancellation_allowed | boolean? |  yes  |  |
 | return_allowed | boolean? |  yes  |  |
 

---

#### [PriceRange](#PriceRange)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | max | number? |  yes  |  |
 | min | number? |  yes  |  |
 

---

#### [ProductAction](#ProductAction)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | query | [ActionQuery](#ActionQuery)? |  yes  |  |
 | type | string? |  yes  |  |
 | url | string? |  yes  |  |
 

---

#### [ProductArticle](#ProductArticle)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | extra_meta | string? |  yes  |  |
 | identifier | string? |  yes  |  |
 | price | [ArticlePriceInfo](#ArticlePriceInfo)? |  yes  |  |
 | quantity | number? |  yes  |  |
 | seller | [BaseInfo](#BaseInfo)? |  yes  |  |
 | seller_identifier | string? |  yes  |  |
 | size | string? |  yes  |  |
 | store | [BaseInfo](#BaseInfo)? |  yes  |  |
 | type | string? |  yes  |  |
 | uid | string? |  yes  |  |
 

---

#### [ProductAvailability](#ProductAvailability)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | deliverable | boolean? |  yes  |  |
 | is_valid | boolean? |  yes  |  |
 | other_store_quantity | number? |  yes  |  |
 | out_of_stock | boolean? |  yes  |  |
 | sizes | [string]? |  yes  |  |
 

---

#### [ProductImage](#ProductImage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | aspect_ratio | string? |  yes  |  |
 | secure_url | string? |  yes  |  |
 | url | string? |  yes  |  |
 

---

#### [ProductPrice](#ProductPrice)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | add_on | number? |  yes  |  |
 | currency_code | string? |  yes  |  |
 | currency_symbol | string? |  yes  |  |
 | effective | number? |  yes  |  |
 | marked | number? |  yes  |  |
 | selling | number? |  yes  |  |
 

---

#### [ProductPriceInfo](#ProductPriceInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | base | [ProductPrice](#ProductPrice)? |  yes  |  |
 | converted | [ProductPrice](#ProductPrice)? |  yes  |  |
 

---

#### [PromiseFormatted](#PromiseFormatted)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | max | string? |  yes  |  |
 | min | string? |  yes  |  |
 

---

#### [PromiseTimestamp](#PromiseTimestamp)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | max | number? |  yes  |  |
 | min | number? |  yes  |  |
 

---

#### [PromoMeta](#PromoMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 

---

#### [PromotionAction](#PromotionAction)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action_date | string |  no  |  |
 | action_type | string |  no  |  |
 

---

#### [PromotionAdd](#PromotionAdd)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _custom_json | string? |  yes  |  |
 | _schedule | [PromotionSchedule](#PromotionSchedule)? |  yes  |  |
 | application_id | string |  no  |  |
 | apply_all_discount | boolean? |  yes  |  |
 | apply_exclusive | string? |  yes  |  |
 | apply_priority | number? |  yes  |  |
 | author | [PromotionAuthor](#PromotionAuthor)? |  yes  |  |
 | buy_rules | [String: [ItemCriteria](#ItemCriteria)] |  no  |  |
 | calculate_on | string? |  yes  | Only available for Contract pricing and Ladder pricing promotion type |
 | code | string? |  yes  |  |
 | currency | string? |  yes  |  |
 | date_meta | [PromotionDateMeta](#PromotionDateMeta)? |  yes  |  |
 | discount_rules | [[DiscountRule](#DiscountRule)] |  no  |  |
 | display_meta | [DisplayMeta1](#DisplayMeta1) |  no  |  |
 | mode | string |  no  |  |
 | ownership | [Ownership1](#Ownership1) |  no  |  |
 | post_order_action | [PromotionAction](#PromotionAction)? |  yes  |  |
 | promo_group | string |  no  |  |
 | promotion_type | string |  no  |  |
 | restrictions | [Restrictions1](#Restrictions1)? |  yes  |  |
 | stackable | boolean? |  yes  |  |
 | visiblility | [Visibility](#Visibility)? |  yes  |  |
 

---

#### [PromotionAuthor](#PromotionAuthor)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | created_by | string? |  yes  |  |
 | modified_by | string? |  yes  |  |
 

---

#### [PromotionDateMeta](#PromotionDateMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | created_on | string? |  yes  |  |
 | modified_on | string? |  yes  |  |
 

---

#### [PromotionListItem](#PromotionListItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _custom_json | string? |  yes  |  |
 | _schedule | [PromotionSchedule](#PromotionSchedule)? |  yes  |  |
 | application_id | string |  no  |  |
 | apply_all_discount | boolean? |  yes  |  |
 | apply_exclusive | string? |  yes  |  |
 | apply_priority | number? |  yes  |  |
 | author | [PromotionAuthor](#PromotionAuthor)? |  yes  |  |
 | buy_rules | [String: [ItemCriteria](#ItemCriteria)] |  no  |  |
 | calculate_on | string? |  yes  | Only available for Contract pricing and Ladder pricing promotion type |
 | code | string? |  yes  |  |
 | currency | string? |  yes  |  |
 | date_meta | [PromotionDateMeta](#PromotionDateMeta)? |  yes  |  |
 | discount_rules | [[DiscountRule](#DiscountRule)] |  no  |  |
 | display_meta | [DisplayMeta1](#DisplayMeta1) |  no  |  |
 | mode | string |  no  |  |
 | ownership | [Ownership1](#Ownership1) |  no  |  |
 | post_order_action | [PromotionAction](#PromotionAction)? |  yes  |  |
 | promo_group | string |  no  |  |
 | promotion_type | string |  no  |  |
 | restrictions | [Restrictions1](#Restrictions1)? |  yes  |  |
 | stackable | boolean? |  yes  |  |
 | visiblility | [Visibility](#Visibility)? |  yes  |  |
 

---

#### [PromotionPartialUpdate](#PromotionPartialUpdate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | archive | boolean? |  yes  | Send true to unpublish promotion |
 | schedule | [PromotionSchedule](#PromotionSchedule)? |  yes  |  |
 

---

#### [PromotionPaymentModes](#PromotionPaymentModes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | codes | [string]? |  yes  |  |
 | type | string |  no  |  |
 | uses | [PaymentAllowValue1](#PaymentAllowValue1)? |  yes  |  |
 

---

#### [PromotionSchedule](#PromotionSchedule)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cron | string? |  yes  |  |
 | duration | number? |  yes  |  |
 | end | string? |  yes  |  |
 | next_schedule | [string]? |  yes  |  |
 | published | boolean |  no  |  |
 | start | string |  no  |  |
 

---

#### [PromotionsResponse](#PromotionsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [PromotionListItem](#PromotionListItem)? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 

---

#### [PromotionUpdate](#PromotionUpdate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _custom_json | string? |  yes  |  |
 | _schedule | [PromotionSchedule](#PromotionSchedule)? |  yes  |  |
 | application_id | string |  no  |  |
 | apply_all_discount | boolean? |  yes  |  |
 | apply_exclusive | string? |  yes  |  |
 | apply_priority | number? |  yes  |  |
 | author | [PromotionAuthor](#PromotionAuthor)? |  yes  |  |
 | buy_rules | [String: [ItemCriteria](#ItemCriteria)] |  no  |  |
 | calculate_on | string? |  yes  | Only available for Contract pricing and Ladder pricing promotion type |
 | code | string? |  yes  |  |
 | currency | string? |  yes  |  |
 | date_meta | [PromotionDateMeta](#PromotionDateMeta)? |  yes  |  |
 | discount_rules | [[DiscountRule](#DiscountRule)] |  no  |  |
 | display_meta | [DisplayMeta1](#DisplayMeta1) |  no  |  |
 | mode | string |  no  |  |
 | ownership | [Ownership1](#Ownership1) |  no  |  |
 | post_order_action | [PromotionAction](#PromotionAction)? |  yes  |  |
 | promo_group | string |  no  |  |
 | promotion_type | string |  no  |  |
 | restrictions | [Restrictions1](#Restrictions1)? |  yes  |  |
 | stackable | boolean? |  yes  |  |
 | visiblility | [Visibility](#Visibility)? |  yes  |  |
 

---

#### [RawBreakup](#RawBreakup)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cod_charge | number? |  yes  |  |
 | convenience_fee | number? |  yes  |  |
 | coupon | number? |  yes  |  |
 | delivery_charge | number? |  yes  |  |
 | discount | number? |  yes  |  |
 | fynd_cash | number? |  yes  |  |
 | gst_charges | number? |  yes  |  |
 | mrp_total | number? |  yes  |  |
 | subtotal | number? |  yes  |  |
 | total | number? |  yes  |  |
 | vog | number? |  yes  |  |
 | you_saved | number? |  yes  |  |
 

---

#### [Restrictions](#Restrictions)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bulk_bundle | [BulkBundleRestriction](#BulkBundleRestriction)? |  yes  |  |
 | coupon_allowed | boolean? |  yes  |  |
 | ordering_stores | [number]? |  yes  |  |
 | payments | [String: [PaymentModes](#PaymentModes)]? |  yes  |  |
 | platforms | [string]? |  yes  |  |
 | post_order | [PostOrder](#PostOrder)? |  yes  |  |
 | price_range | [PriceRange](#PriceRange)? |  yes  |  |
 | user_groups | [number]? |  yes  |  |
 | uses | [UsesRestriction](#UsesRestriction)? |  yes  |  |
 

---

#### [Restrictions1](#Restrictions1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | anonymous_users | boolean? |  yes  |  |
 | order_quantity | number? |  yes  |  |
 | payments | [[PromotionPaymentModes](#PromotionPaymentModes)]? |  yes  |  |
 | platforms | [string]? |  yes  |  |
 | post_order | [PostOrder1](#PostOrder1)? |  yes  |  |
 | user_groups | [number]? |  yes  |  |
 | user_id | [string]? |  yes  |  |
 | user_registered | [UserRegistered](#UserRegistered)? |  yes  |  |
 | uses | [UsesRestriction1](#UsesRestriction1) |  no  |  |
 

---

#### [Rule](#Rule)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | discount_qty | number? |  yes  |  |
 | key | number? |  yes  |  |
 | max | number? |  yes  |  |
 | min | number? |  yes  |  |
 | value | number? |  yes  |  |
 

---

#### [RuleDefinition](#RuleDefinition)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | applicable_on | string |  no  |  |
 | auto_apply | boolean? |  yes  |  |
 | calculate_on | string |  no  |  |
 | currency_code | string? |  yes  |  |
 | is_exact | boolean? |  yes  |  |
 | scope | [string]? |  yes  |  |
 | type | string |  no  |  |
 | value_type | string |  no  |  |
 

---

#### [ShipmentPromise](#ShipmentPromise)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | formatted | [PromiseFormatted](#PromiseFormatted)? |  yes  |  |
 | timestamp | [PromiseTimestamp](#PromiseTimestamp)? |  yes  |  |
 

---

#### [ShippingAddress](#ShippingAddress)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address | string? |  yes  |  |
 | address_type | string? |  yes  |  |
 | area | string? |  yes  |  |
 | area_code | string |  no  |  |
 | area_code_slug | string? |  yes  |  |
 | city | string? |  yes  |  |
 | country | string? |  yes  |  |
 | country_code | string? |  yes  |  |
 | email | string? |  yes  |  |
 | landmark | string? |  yes  |  |
 | meta | string? |  yes  |  |
 | name | string? |  yes  |  |
 | phone | number? |  yes  |  |
 | pincode | number? |  yes  |  |
 | state | string? |  yes  |  |
 

---

#### [State](#State)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_archived | boolean? |  yes  |  |
 | is_display | boolean? |  yes  |  |
 | is_public | boolean? |  yes  |  |
 

---

#### [SuccessMessage](#SuccessMessage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [UserRegistered](#UserRegistered)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | end | string? |  yes  |  |
 | start | string? |  yes  |  |
 

---

#### [UsesRemaining](#UsesRemaining)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | app | number? |  yes  |  |
 | total | number? |  yes  |  |
 | user | number? |  yes  |  |
 

---

#### [UsesRemaining1](#UsesRemaining1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | total | number? |  yes  |  |
 | user | number? |  yes  |  |
 

---

#### [UsesRestriction](#UsesRestriction)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | maximum | [UsesRemaining](#UsesRemaining)? |  yes  |  |
 | remaining | [UsesRemaining](#UsesRemaining)? |  yes  |  |
 

---

#### [UsesRestriction1](#UsesRestriction1)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | maximum | [UsesRemaining1](#UsesRemaining1)? |  yes  |  |
 | remaining | [UsesRemaining1](#UsesRemaining1)? |  yes  |  |
 

---

#### [Validation](#Validation)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | anonymous | boolean? |  yes  |  |
 | app_id | [string]? |  yes  |  |
 | user_registered_after | string? |  yes  |  |
 

---

#### [Validity](#Validity)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | priority | number? |  yes  |  |
 

---

#### [Visibility](#Visibility)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | coupon_list | boolean |  no  |  |
 | pdp | boolean |  no  |  |
 

---




