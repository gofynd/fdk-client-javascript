




##### [Back to Platform docs](./README.md)

## Cart Methods
Cart APIs

* [addItems](#additems)
* [checkCartServiceability](#checkcartserviceability)
* [checkoutCart](#checkoutcart)
* [createCartMetaConfig](#createcartmetaconfig)
* [createCoupon](#createcoupon)
* [createPromotion](#createpromotion)
* [fetchAndvalidateCartItems](#fetchandvalidatecartitems)
* [fetchCartMetaConfig](#fetchcartmetaconfig)
* [getAbandonedCart](#getabandonedcart)
* [getAbandonedCartDetails](#getabandonedcartdetails)
* [getCouponById](#getcouponbyid)
* [getCouponCodeExists](#getcouponcodeexists)
* [getCouponOptionValues](#getcouponoptionvalues)
* [getCoupons](#getcoupons)
* [getPromosCouponConfig](#getpromoscouponconfig)
* [getPromotionById](#getpromotionbyid)
* [getPromotionCodeExists](#getpromotioncodeexists)
* [getPromotions](#getpromotions)
* [overrideCart](#overridecart)
* [updateCart](#updatecart)
* [updateCartMetaConfig](#updatecartmetaconfig)
* [updateCoupon](#updatecoupon)
* [updateCouponPartially](#updatecouponpartially)
* [updatePromotion](#updatepromotion)
* [updatePromotionPartially](#updatepromotionpartially)



## Methods with example and description




### addItems
Add items to abandoned cart



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").cart.addItems({  cartId : value,
 body : value,
 b : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").cart.addItems({  cartId : value,
 body : value,
 b : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| cartId | string | yes | Current Cart _id |    
| b | boolean | no |  |  
| body | [AddCartRequest](#AddCartRequest) | yes | Request body |


Use this API to add items to the abandoned cart.

*Returned Response:*




[AddCartDetailResponse](#AddCartDetailResponse)

Success. Returns a cart object as shown below. Refer `AddCartDetailResponse` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Product has been added to your cart</i></summary>

```json
{
  "value": {
    "message": "Product has been added to your cart",
    "success": true,
    "cart": {
      "breakup_values": {
        "display": [
          {
            "display": "MRP Total",
            "key": "mrp_total",
            "value": 17486,
            "currency_code": "INR"
          },
          {
            "display": "Discount",
            "key": "discount",
            "value": -3540,
            "currency_code": "INR"
          },
          {
            "display": "Subtotal",
            "key": "subtotal",
            "value": 13946,
            "currency_code": "INR"
          },
          {
            "display": "Total",
            "key": "total",
            "value": 13946,
            "currency_code": "INR"
          }
        ],
        "raw": {
          "cod_charge": 0,
          "convenience_fee": 0,
          "coupon": 0,
          "delivery_charge": 0,
          "discount": -3540,
          "fynd_cash": 0,
          "gst_charges": 1529.96,
          "mrp_total": 17486,
          "subtotal": 13946,
          "total": 13946,
          "vog": 12416.04,
          "you_saved": 0
        },
        "loyalty_points": {
          "total": 0,
          "applicable": 0,
          "is_applied": false,
          "description": "Your cashback, referrals, and refund amount get credited to Fynd Cash which can be redeemed while placing an order."
        },
        "coupon": {
          "type": "cash",
          "code": "",
          "uid": null,
          "value": 0,
          "is_applied": false,
          "message": "Sorry! Invalid Coupon"
        }
      },
      "items": [
        {
          "key": "751083_10",
          "parent_item_identifiers": {
            "identifier": "ZASFF",
            "parent_item_id": 7501190,
            "parent_item_size": "OS"
          },
          "article": {
            "type": "article",
            "uid": "612_9_SE61201_19100302_10",
            "size": "10",
            "seller": {
              "uid": 612,
              "name": "SSR ENTERPRISE"
            },
            "store": {
              "uid": 4431,
              "name": "Motilal Nagar 1, Goregaon"
            },
            "quantity": 4,
            "price": {
              "base": {
                "marked": 3999,
                "effective": 2399,
                "currency_code": "INR"
              },
              "converted": {
                "marked": 3999,
                "effective": 2399,
                "currency_code": "INR"
              }
            }
          },
          "price": {
            "base": {
              "add_on": 4798,
              "marked": 7998,
              "effective": 4798,
              "selling": 4798,
              "currency_code": "INR"
            },
            "converted": {
              "add_on": 4798,
              "marked": 7998,
              "effective": 4798,
              "selling": 4798,
              "currency_code": "INR"
            }
          },
          "availability": {
            "sizes": [
              "10"
            ],
            "other_store_quantity": 2,
            "out_of_stock": false,
            "deliverable": true,
            "is_valid": true
          },
          "product": {
            "type": "product",
            "uid": 751083,
            "name": "Carson 2",
            "slug": "puma-carson-2-751083-6ad98d",
            "brand": {
              "uid": 9,
              "name": "Puma"
            },
            "categories": [
              {
                "uid": 165,
                "name": "Outdoor Sports Shoes"
              }
            ],
            "images": [
              {
                "aspect_ratio": "16:25",
                "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/9_19100302/1_1542807042296.jpg",
                "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/9_19100302/1_1542807042296.jpg"
              }
            ],
            "action": {
              "type": "product",
              "url": "https://api.addsale.com/platform/content/v1/products/puma-carson-2-751083-6ad98d/",
              "query": {
                "product_slug": [
                  "puma-carson-2-751083-6ad98d"
                ]
              }
            }
          },
          "coupon_message": "",
          "quantity": 2,
          "message": "",
          "bulk_offer": {},
          "discount": "41% OFF"
        },
        {
          "key": "246228_S",
          "article": {
            "type": "article",
            "uid": "46_235_TM62_M11029ONDSXNS_S",
            "size": "S",
            "seller": {
              "uid": 46,
              "name": "RELIANCE BRANDS LIMITED"
            },
            "store": {
              "uid": 4550,
              "name": "VR Mall"
            },
            "quantity": 1,
            "price": {
              "base": {
                "marked": 4490,
                "effective": 4490,
                "currency_code": "INR"
              },
              "converted": {
                "marked": 4490,
                "effective": 4490,
                "currency_code": "INR"
              }
            }
          },
          "price": {
            "base": {
              "add_on": 4490,
              "marked": 4490,
              "effective": 4490,
              "selling": 4490,
              "currency_code": "INR"
            },
            "converted": {
              "add_on": 4490,
              "marked": 4490,
              "effective": 4490,
              "selling": 4490,
              "currency_code": "INR"
            }
          },
          "availability": {
            "sizes": [
              "L",
              "M",
              "S",
              "XL",
              "XXL"
            ],
            "other_store_quantity": 0,
            "out_of_stock": false,
            "deliverable": true,
            "is_valid": true
          },
          "product": {
            "type": "product",
            "uid": 246228,
            "name": "Blue Solid T-Shirt",
            "slug": "superdry-blue-solid-t-shirt-2",
            "brand": {
              "uid": 235,
              "name": "Superdry"
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
                "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/235_M11029ONDSXNS/1.jpg",
                "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/235_M11029ONDSXNS/1.jpg"
              }
            ],
            "action": {
              "type": "product",
              "url": "https://api.addsale.com/platform/content/v1/products/superdry-blue-solid-t-shirt-2/",
              "query": {
                "product_slug": [
                  "superdry-blue-solid-t-shirt-2"
                ]
              }
            }
          },
          "coupon_message": "",
          "quantity": 1,
          "message": "",
          "bulk_offer": {},
          "discount": ""
        },
        {
          "key": "443175_S",
          "article": {
            "type": "article",
            "uid": "162_207_1271_LJ03LBLUDN88_S",
            "size": "S",
            "seller": {
              "uid": 162,
              "name": "GO FASHION INDIA PRIVATE LIMITED"
            },
            "store": {
              "uid": 5784,
              "name": "Vega City mall"
            },
            "quantity": 3,
            "price": {
              "base": {
                "marked": 1599,
                "effective": 1599,
                "currency_code": "INR"
              },
              "converted": {
                "marked": 1599,
                "effective": 1599,
                "currency_code": "INR"
              }
            }
          },
          "price": {
            "base": {
              "add_on": 1599,
              "marked": 1599,
              "effective": 1599,
              "selling": 1599,
              "currency_code": "INR"
            },
            "converted": {
              "add_on": 1599,
              "marked": 1599,
              "effective": 1599,
              "selling": 1599,
              "currency_code": "INR"
            }
          },
          "availability": {
            "sizes": [
              "XL",
              "M",
              "L",
              "S"
            ],
            "other_store_quantity": 8,
            "out_of_stock": false,
            "deliverable": true,
            "is_valid": true
          },
          "product": {
            "type": "product",
            "uid": 443175,
            "name": "Light Blue Denim Jeggings",
            "slug": "go-colors-light-blue-denim-jeggings-443175-3c688c",
            "brand": {
              "uid": 207,
              "name": "Go Colors"
            },
            "categories": [
              {
                "uid": 267,
                "name": "Jeggings"
              }
            ],
            "images": [
              {
                "aspect_ratio": "16:25",
                "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/207_LJ03LBLUDN88/1_1512382513548.jpg",
                "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/207_LJ03LBLUDN88/1_1512382513548.jpg"
              }
            ],
            "action": {
              "type": "product",
              "url": "https://api.addsale.com/platform/content/v1/products/go-colors-light-blue-denim-jeggings-443175-3c688c/",
              "query": {
                "product_slug": [
                  "go-colors-light-blue-denim-jeggings-443175-3c688c"
                ]
              }
            }
          },
          "coupon_message": "",
          "quantity": 1,
          "message": "",
          "bulk_offer": {},
          "discount": ""
        },
        {
          "key": "778937_OS",
          "article": {
            "type": "article",
            "uid": "686_963_IC68601_PWUPC01977_OS",
            "size": "OS",
            "seller": {
              "uid": 686,
              "name": "INDUS CORPORATION"
            },
            "store": {
              "uid": 5059,
              "name": "Vidyaranyapura Main Road"
            },
            "quantity": 3,
            "price": {
              "base": {
                "marked": 3399,
                "effective": 3059,
                "currency_code": "INR"
              },
              "converted": {
                "marked": 3399,
                "effective": 3059,
                "currency_code": "INR"
              }
            }
          },
          "price": {
            "base": {
              "add_on": 3059,
              "marked": 3399,
              "effective": 3059,
              "selling": 3059,
              "currency_code": "INR"
            },
            "converted": {
              "add_on": 3059,
              "marked": 3399,
              "effective": 3059,
              "selling": 3059,
              "currency_code": "INR"
            }
          },
          "availability": {
            "sizes": [
              "OS"
            ],
            "other_store_quantity": 2,
            "out_of_stock": false,
            "deliverable": true,
            "is_valid": true
          },
          "product": {
            "type": "product",
            "uid": 778937,
            "name": "Colourful Carnival Bouncer",
            "slug": "fisher-price-colourful-carnival-bouncer-778937-fafa1f",
            "brand": {
              "uid": 963,
              "name": "Fisher-Price"
            },
            "categories": [
              {
                "uid": 576,
                "name": "Cradles"
              }
            ],
            "images": [
              {
                "aspect_ratio": "16:25",
                "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/963_PWUPC01977/1_1545308400588.jpg",
                "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/963_PWUPC01977/1_1545308400588.jpg"
              }
            ],
            "action": {
              "type": "product",
              "url": "https://api.addsale.com/platform/content/v1/products/fisher-price-colourful-carnival-bouncer-778937-fafa1f/",
              "query": {
                "product_slug": [
                  "fisher-price-colourful-carnival-bouncer-778937-fafa1f"
                ]
              }
            }
          },
          "coupon_message": "",
          "quantity": 1,
          "message": "",
          "bulk_offer": {},
          "discount": "11% OFF"
        }
      ],
      "delivery_charge_info": "",
      "coupon_text": "View all offers",
      "buy_now": false,
      "cart_id": 7927,
      "uid": "7927",
      "gstin": null,
      "checkout_mode": "self",
      "last_modified": "Tue, 03 Sep 2019 06:00:43 GMT",
      "restrict_checkout": false,
      "is_valid": true
    },
    "result": {}
  }
}
```
</details>

<details>
<summary><i>&nbsp; Sorry, item is out of stock</i></summary>

```json
{
  "value": {
    "message": "Sorry, item is out of stock",
    "success": false,
    "cart": {
      "breakup_values": {
        "raw": {
          "cod_charge": 0,
          "convenience_fee": 0,
          "coupon": 0,
          "delivery_charge": 0,
          "discount": -202000,
          "fynd_cash": 0,
          "gst_charges": 4804.71,
          "mrp_total": 302899,
          "subtotal": 100899,
          "total": 100899,
          "vog": 96094.29,
          "you_saved": 0
        },
        "coupon": {
          "type": "cash",
          "code": "",
          "uid": null,
          "value": 0,
          "is_applied": false,
          "message": "Sorry! Invalid Coupon"
        },
        "display": [
          {
            "display": "MRP Total",
            "key": "mrp_total",
            "value": 302899,
            "currency_code": "INR"
          },
          {
            "display": "Discount",
            "key": "discount",
            "value": -202000,
            "currency_code": "INR"
          },
          {
            "display": "Subtotal",
            "key": "subtotal",
            "value": 100899,
            "currency_code": "INR"
          },
          {
            "display": "Total",
            "key": "total",
            "value": 100899,
            "currency_code": "INR"
          }
        ],
        "loyalty_points": {
          "total": 0,
          "applicable": 0,
          "is_applied": false,
          "description": "Your cashback, referrals, and refund amount get credited to Fynd Cash which can be redeemed while placing an order."
        }
      },
      "items": [
        {
          "bulk_offer": {},
          "discount": "67% OFF",
          "parent_item_identifiers": {
            "identifier": "ZASFF",
            "parent_item_id": 7501190,
            "parent_item_size": "OS"
          },
          "article": {
            "type": "article",
            "uid": "604_902_SSTC60401_636BLUE_1",
            "size": "1",
            "seller": {
              "uid": 604,
              "name": "SHRI SHANTINATH TRADING COMPANY"
            },
            "store": {
              "uid": 4579,
              "name": "Gandhi Nagar"
            },
            "quantity": 108,
            "price": {
              "base": {
                "marked": 2999,
                "effective": 999,
                "currency_code": "INR"
              },
              "converted": {
                "marked": 2999,
                "effective": 999,
                "currency_code": "INR"
              }
            }
          },
          "coupon_message": "",
          "key": "707569_1",
          "availability": {
            "sizes": [
              "1",
              "8",
              "7",
              "2",
              "9",
              "5",
              "3",
              "6"
            ],
            "other_store_quantity": 7,
            "out_of_stock": false,
            "deliverable": true,
            "is_valid": true
          },
          "product": {
            "type": "product",
            "uid": 707569,
            "name": "Blue and Gold Printed Ethnic Set",
            "slug": "aj-dezines-blue-and-gold-printed-ethnic-set-707569-bff01a",
            "brand": {
              "uid": 902,
              "name": ""
            },
            "categories": [
              {
                "uid": 525,
                "name": ""
              }
            ],
            "images": [
              {
                "aspect_ratio": "16:25",
                "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/902_636BLUE/1_1540301094877.jpg",
                "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/902_636BLUE/1_1540301094877.jpg"
              }
            ],
            "action": {
              "type": "product",
              "url": "https://api.addsale.com/v1/products/aj-dezines-blue-and-gold-printed-ethnic-set-707569-bff01a/",
              "query": {
                "product_slug": [
                  "aj-dezines-blue-and-gold-printed-ethnic-set-707569-bff01a"
                ]
              }
            }
          },
          "price": {
            "base": {
              "add_on": 100899,
              "marked": 302899,
              "effective": 100899,
              "selling": 100899,
              "currency_code": "INR"
            },
            "converted": {
              "add_on": 100899,
              "marked": 302899,
              "effective": 100899,
              "selling": 100899,
              "currency_code": "INR"
            }
          },
          "message": "",
          "quantity": 101
        }
      ],
      "delivery_charge_info": "",
      "coupon_text": "View all offers",
      "buy_now": false,
      "cart_id": 54,
      "uid": "54",
      "gstin": null,
      "checkout_mode": "self",
      "restrict_checkout": false,
      "is_valid": false,
      "last_modified": "Tue, 03 Sep 2019 09:55:40 GMT"
    },
    "result": {}
  }
}
```
</details>

</details>









---


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


### createCartMetaConfig
Create new cart meta configuration



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").cart.createCartMetaConfig({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").cart.createCartMetaConfig({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CartMetaConfigAdd](#CartMetaConfigAdd) | yes | Request body |


Create new cart meta configuration

*Returned Response:*




[CartMetaConfigAdd](#CartMetaConfigAdd)

Cart Meta Config Created successfully




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "_id": "645ba594d414eb0669e6ee14",
  "app_id": "60792ded7826bd09330ed90d",
  "company_id": 884,
  "bulk_coupons": false,
  "delivery_charges": {
    "charges": [],
    "enabled": false
  },
  "empty_cart": false,
  "enabled": true,
  "max_cart_items": 50,
  "min_cart_value": 0,
  "revenue_engine_coupon": false,
  "gift_pricing": 50,
  "gift_display_text": ""
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


### fetchCartMetaConfig
Fetch cart meta configuration



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").cart.fetchCartMetaConfig();

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").cart.fetchCartMetaConfig();
```






Fetch cart meta configuration

*Returned Response:*




[CartMetaConfigAdd](#CartMetaConfigAdd)

Cart Meta Config Fetched successfully




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "_id": "645ba594d414eb0669e6ee14",
  "app_id": "60792ded7826bd09330ed90d",
  "company_id": 884,
  "bulk_coupons": false,
  "delivery_charges": {
    "charges": [],
    "enabled": false
  },
  "empty_cart": false,
  "enabled": true,
  "max_cart_items": 50,
  "min_cart_value": 0,
  "revenue_engine_coupon": false,
  "gift_pricing": 50,
  "gift_display_text": ""
}
```
</details>









---


### getAbandonedCart
Get with abandoned cart list



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").cart.getAbandonedCart({  pageNo : value,
 pageSize : value,
 fromDate : value,
 toDate : value,
 anonymousCart : value,
 lastId : value,
 sortOn : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").cart.getAbandonedCart({  pageNo : value,
 pageSize : value,
 fromDate : value,
 toDate : value,
 anonymousCart : value,
 lastId : value,
 sortOn : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNo | number | no |  |    
| pageSize | number | no |  |    
| fromDate | string | no |  |    
| toDate | string | no |  |    
| anonymousCart | boolean | no |  |    
| lastId | string | no |  |    
| sortOn | string | no |  |  



Get abandoned cart list with pagination

*Returned Response:*




[AbandonedCartResponse](#AbandonedCartResponse)

Abandoned Cart List for sent page_size and page_no




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Abandoned Cart list for sent filter and page size</i></summary>

```json
{
  "value": {
    "message": "Cart fetched successfully !!",
    "success": true,
    "result": {},
    "items": [
      {
        "_id": "62bbe2c4b79692d559ac1f16",
        "uid": 19986,
        "user_id": "600693a01faf8695d70a15df",
        "is_default": true,
        "app_id": "5d64e3500bcad8693a821c0d",
        "articles": [
          {
            "service_item_meta": {
              "product_group_tags": null,
              "products": null
            },
            "parent_item_identifiers": {
              "identifier": null,
              "parent_item_size": null,
              "parent_item_id": null
            },
            "item_id": 7500426,
            "item_size": "SET1",
            "article_id": "5f37d9b71cb7c10001b90ee2",
            "quantity": 2,
            "price_marked": 1000,
            "price_effective": 1,
            "currency_code": "INR",
            "store_id": 10183,
            "company_id": 61,
            "article_assignment": {
              "level": "multi-companies",
              "strategy": "optimal"
            },
            "brand_uid": 85,
            "l3_categories": [
              466
            ],
            "discount": 99.9,
            "coupon": {
              "amount": 0,
              "currency_code": "INR",
              "article_count": 0
            },
            "referral_credits": {
              "amount": 0,
              "currency_code": "FC"
            },
            "cashback": {
              "amount": 0,
              "currency_code": "FC"
            },
            "bulk_coupon": {
              "margin": 0,
              "discount": 0,
              "code": null
            },
            "promotion": [
              {
                "promo_id": "62bbf355beda57df173122fa",
                "amount": 1,
                "article_quantity": 2,
                "mrp_promotion": false,
                "promotion_type": "amount",
                "discount_rules": [
                  {
                    "type": "amount",
                    "value": 125
                  }
                ]
              }
            ],
            "identifiers": {
              "identifier": "pEF2t4GGTKaieox5rsRibw"
            },
            "meta": {},
            "extra_meta": {},
            "payment_methods": []
          }
        ],
        "cart_value": 1,
        "discount": 0,
        "delivery_charges": {
          "amount": 1,
          "currency_code": "INR"
        },
        "coupon": {
          "amount": 0,
          "currency_code": "INR",
          "code": null,
          "type": "cart",
          "uid": null,
          "id": null
        },
        "promotion": {
          "amount": 2,
          "currency_code": "INR",
          "mode": "promotion",
          "promotions": [
            {
              "id": "62bbf355beda57df173122fa",
              "mrp_promo": false,
              "promo_group": "product"
            }
          ]
        },
        "fynd_credits": {
          "amount": 0,
          "currency_code": "FC",
          "auto_applied": true
        },
        "cod_charges": {
          "amount": 0,
          "currency_code": "INR"
        },
        "cashback": {
          "amount": 0,
          "currency_code": "FC",
          "uid": null
        },
        "payments": {},
        "is_archive": false,
        "created_on": "2022-06-28 14:25:15.578000",
        "last_modified": "2022-06-29 13:52:03.313000",
        "expire_at": "2023-06-24 13:52:03.313000",
        "fc_index_map": [
          0,
          0
        ],
        "checkout_mode": "self",
        "meta": {
          "shipping_address_id": "62b161cb3ad0eed3e48ec6a9",
          "billing_address_id": "62b161cb3ad0eed3e48ec6a9"
        },
        "comment": "",
        "bulk_coupon_discount": 0,
        "pick_up_customer_details": {},
        "is_active": true,
        "shipments": [],
        "payment_methods": [],
        "buy_now": false
      }
    ],
    "page": {
      "type": "number",
      "has_next": false,
      "item_total": 28,
      "size": 20,
      "page": 2,
      "current": 2,
      "last_id": "62d4ff76d6aec8db897de407"
    }
  }
}
```
</details>

</details>









---


### getAbandonedCartDetails
Fetch all items added to the cart



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").cart.getAbandonedCartDetails({  id : value,
 i : value,
 b : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").cart.getAbandonedCartDetails({  id : value,
 i : value,
 b : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| id | string | no |  |    
| i | boolean | no |  |    
| b | boolean | no |  |  



Use this API to get details of all the items added to a cart.

*Returned Response:*




[CartDetailResponse](#CartDetailResponse)

Success. Returns a Cart object. Check the example shown below or refer `CartDetailResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "items": [
    {
      "bulk_offer": {},
      "discount": "67% OFF",
      "article": {
        "type": "article",
        "uid": "604_902_SSTC60401_636BLUE_1",
        "size": "1",
        "seller": {
          "uid": 604,
          "name": "SHRI SHANTINATH TRADING COMPANY"
        },
        "store": {
          "uid": 4579,
          "name": "Gandhi Nagar"
        },
        "quantity": 108,
        "price": {
          "base": {
            "marked": 2999,
            "effective": 999,
            "currency_code": "INR"
          },
          "converted": {
            "marked": 2999,
            "effective": 999,
            "currency_code": "INR"
          }
        }
      },
      "coupon_message": "",
      "key": "707569_1",
      "availability": {
        "sizes": [
          "1",
          "8",
          "7",
          "2",
          "9",
          "5",
          "3",
          "6"
        ],
        "other_store_quantity": 107,
        "out_of_stock": false,
        "deliverable": true,
        "is_valid": true
      },
      "product": {
        "type": "product",
        "uid": 707569,
        "name": "Blue and Gold Printed Ethnic Set",
        "slug": "aj-dezines-blue-and-gold-printed-ethnic-set-707569-bff01a",
        "brand": {
          "uid": 902,
          "name": ""
        },
        "categories": [
          {
            "uid": 525,
            "name": ""
          }
        ],
        "images": [
          {
            "aspect_ratio": "16:25",
            "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/902_636BLUE/1_1540301094877.jpg",
            "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/902_636BLUE/1_1540301094877.jpg"
          }
        ],
        "action": {
          "type": "product",
          "url": "https://api.addsale.com/v1/products/aj-dezines-blue-and-gold-printed-ethnic-set-707569-bff01a/",
          "query": {
            "product_slug": [
              "aj-dezines-blue-and-gold-printed-ethnic-set-707569-bff01a"
            ]
          }
        }
      },
      "price": {
        "base": {
          "add_on": 999,
          "marked": 2999,
          "effective": 999,
          "selling": 999,
          "currency_code": "INR"
        },
        "converted": {
          "add_on": 999,
          "marked": 2999,
          "effective": 999,
          "selling": 999,
          "currency_code": "INR"
        }
      },
      "message": "",
      "quantity": 1
    }
  ],
  "buy_now": false,
  "cart_id": 54,
  "uid": "54",
  "breakup_values": {
    "raw": {
      "cod_charge": 0,
      "convenience_fee": 0,
      "coupon": 0,
      "delivery_charge": 0,
      "discount": -2000,
      "fynd_cash": 0,
      "gst_charges": 47.57,
      "mrp_total": 2999,
      "subtotal": 999,
      "total": 999,
      "vog": 951.43,
      "you_saved": 0
    },
    "coupon": {
      "type": "cash",
      "code": "",
      "uid": null,
      "value": 0,
      "is_applied": false,
      "message": "Sorry! Invalid Coupon"
    },
    "display": [
      {
        "display": "MRP Total",
        "key": "mrp_total",
        "value": 2999,
        "currency_code": "INR"
      },
      {
        "display": "Discount",
        "key": "discount",
        "value": -2000,
        "currency_code": "INR"
      },
      {
        "display": "Subtotal",
        "key": "subtotal",
        "value": 999,
        "currency_code": "INR"
      },
      {
        "display": "Total",
        "key": "total",
        "value": 999,
        "currency_code": "INR"
      }
    ],
    "loyalty_points": {
      "total": 0,
      "applicable": 0,
      "is_applied": false,
      "description": "Your cashback, referrals, and refund amount get credited to Fynd Cash which can be redeemed while placing an order."
    }
  },
  "delivery_charge_info": "",
  "coupon_text": "View all offers",
  "gstin": null,
  "checkout_mode": "self",
  "restrict_checkout": false,
  "is_valid": true,
  "last_modified": "Tue, 03 Sep 2019 05:35:59 GMT"
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


### getCouponCodeExists
Check if coupon is already created with coupon code



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").cart.getCouponCodeExists({  code : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").cart.getCouponCodeExists({  code : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| code | string | no |  |  



Check if sent coupon code is already existing coupon code. As coupon code is to be unique.

*Returned Response:*




[Object](#Object)

Valid response with existing coupon code count




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Coupon code exists</i></summary>

```json
{
  "value": {
    "success": true,
    "count": 1
  }
}
```
</details>

<details>
<summary><i>&nbsp; Coupon code is new</i></summary>

```json
{
  "value": {
    "success": true,
    "count": 0
  }
}
```
</details>

</details>









---


### getCouponOptionValues
Get coupon options enums with display values



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").cart.getCouponOptionValues();

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").cart.getCouponOptionValues();
```






Get coupon enum values for fields in valid coupon object. Used for front end to create, update and filter coupon lists via fields

*Returned Response:*




[Object](#Object)

Coupon options enums




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "types": {
    "absolute": "Absolute",
    "percentage": "Percentage",
    "bogo": "BOGO",
    "bundle": "Bundle"
  },
  "scopes": {
    "category_id": "Categories",
    "brand_id": "Brands",
    "company_id": "Sellers",
    "store_id": "Stores",
    "collection_id": "Collections"
  },
  "applicable_on": {
    "amount": "Amount",
    "quantity": "Quantity"
  },
  "value_types": {
    "absolute": "Absolute",
    "percentage": "Percentage",
    "quantity": "Quantity",
    "flat_price": "Absolute Price"
  },
  "calculate_on": {
    "mrp": "MRP",
    "esp": "ESP",
    "tp": "TP"
  },
  "payable_category": {
    "fynd": "Fynd",
    "seller": "Seller"
  },
  "txn_mode": {
    "fynd_cash": "Fynd Cash",
    "cash": "Cashback",
    "coupon": "Coupon Discount"
  },
  "payable_by": {
    "Fynd Marketing": "Fynd Marketing",
    "Fynd": "Fynd",
    "Fynd Store": "Fynd Store",
    "Fynd Delights": "Fynd Delights",
    "Fynd Ops": "Fynd Ops",
    "Fynd Inventory": "Fynd Inventory"
  }
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


### getPromosCouponConfig
Fetch all promos that are set as active



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").cart.getPromosCouponConfig({  entityType : value,
 isHidden : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").cart.getPromosCouponConfig({  entityType : value,
 isHidden : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| entityType | string | no | entity_type as coupon or promotion |    
| isHidden | boolean | no | show Promo Coupon Config or not |  



Use this API to get list of all the active promos/coupons.

*Returned Response:*




[ActivePromosResponse](#ActivePromosResponse)

Success. Returns a list of all the curently active coupons/promos




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "status": "Success",
  "items": [
    {
      "_id": "634647aa9d4b59bf1a0c1269",
      "entity_slug": "percentage_quantity_percentage",
      "title": "X Percentage Value",
      "subtitle": "Get a fixed percentage discount on the effective selling price",
      "example": "FLAT50 | Flat 50% OFF",
      "description": "Here, <b>Buy items(BI)</b> is the minimum number of items eligible for a discount <b>Percentage Value(D)</b> is the fixed percentage discount <b>Maximum Discount Amount(MD)</b> (optional) is a limit to the discount <b>Minimum Cart Value(MCV)</b> (optional) is the minimum price of the cart items <b>Apply coupon on exact quantities</b> (optional) if checked, will apply the coupon only to the specified <b>Buy items</b> and if unchecked, will apply the coupon to more than the specified <b>Buy items</b>",
      "is_hidden": true,
      "entity_type": "promotion",
      "type": "percentage",
      "created_on": "2022-05-30 07:33:01.303000",
      "modified_on": "2022-05-31 10:41:01.441000"
    }
  ]
}
```
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


### getPromotionCodeExists
Check if promotion is already created with promotion code



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").cart.getPromotionCodeExists({  code : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").cart.getPromotionCodeExists({  code : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| code | string | no |  |  



Check if sent promotion code is already existing promotion code. As promotion code is to be unique.

*Returned Response:*




[Object](#Object)

Valid response with existing promotion code count




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Promotion code exists</i></summary>

```json
{
  "value": {
    "success": true,
    "count": 1
  }
}
```
</details>

<details>
<summary><i>&nbsp; Promotion code is new</i></summary>

```json
{
  "value": {
    "success": true,
    "count": 0
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


### updateCart
Update items in the abandoned cart



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").cart.updateCart({  cartId : value,
 body : value,
 b : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").cart.updateCart({  cartId : value,
 body : value,
 b : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| cartId | string | yes | Current Cart _id |    
| b | boolean | no |  |  
| body | [UpdateCartRequest](#UpdateCartRequest) | yes | Request body |


<p>Use this API to update items added to the cart with the help of a request object containing attributes like item_quantity and item_size. These attributes will be fetched from the following APIs</p> <ul> <li><font color="monochrome">operation</font> Operation for current api call. <b>update_item</b> for update items. <b>remove_item</b> for removing items.</li> <li> <font color="monochrome">item_id</font>  "/platform/content/v1/products/"</li> <li> <font color="monochrome">item_size</font>   "/platform/content/v1/products/:slug/sizes/"</li> <li> <font color="monochrome">quantity</font>  item quantity (must be greater than or equal to 1)</li> <li> <font color="monochrome">article_id</font>   "/content​/v1​/products​/:identifier​/sizes​/price​/"</li> <li> <font color="monochrome">item_index</font>  item position in the cart (must be greater than or equal to 0)</li> </ul>

*Returned Response:*




[UpdateCartDetailResponse](#UpdateCartDetailResponse)

Success. Updates and returns a cart object as shown below. Refer `UpdateCartDetailResponse` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Nothing updated</i></summary>

```json
{
  "value": {
    "cart": {
      "breakup_values": {
        "raw": {
          "cod_charge": 0,
          "convenience_fee": 0,
          "coupon": 0,
          "delivery_charge": 0,
          "discount": -202000,
          "fynd_cash": 0,
          "gst_charges": 4804.71,
          "mrp_total": 302899,
          "subtotal": 100899,
          "total": 100899,
          "vog": 96094.29,
          "you_saved": 0
        },
        "coupon": {
          "type": "cash",
          "code": "",
          "uid": null,
          "value": 0,
          "is_applied": false,
          "message": "Sorry! Invalid Coupon"
        },
        "display": [
          {
            "display": "MRP Total",
            "key": "mrp_total",
            "value": 302899,
            "currency_code": "INR"
          },
          {
            "display": "Discount",
            "key": "discount",
            "value": -202000,
            "currency_code": "INR"
          },
          {
            "display": "Subtotal",
            "key": "subtotal",
            "value": 100899,
            "currency_code": "INR"
          },
          {
            "display": "Total",
            "key": "total",
            "value": 100899,
            "currency_code": "INR"
          }
        ],
        "loyalty_points": {
          "total": 0,
          "applicable": 0,
          "is_applied": false,
          "description": "Your cashback, referrals, and refund amount get credited to Fynd Cash which can be redeemed while placing an order."
        }
      },
      "items": [
        {
          "bulk_offer": {},
          "discount": "67% OFF",
          "parent_item_identifiers": {
            "identifier": "ZASFF",
            "parent_item_id": 7501190,
            "parent_item_size": "OS"
          },
          "article": {
            "type": "article",
            "uid": "604_902_SSTC60401_636BLUE_1",
            "size": "1",
            "seller": {
              "uid": 604,
              "name": "SHRI SHANTINATH TRADING COMPANY"
            },
            "store": {
              "uid": 4579,
              "name": "Gandhi Nagar"
            },
            "quantity": 108,
            "price": {
              "base": {
                "marked": 2999,
                "effective": 999,
                "currency_code": "INR"
              },
              "converted": {
                "marked": 2999,
                "effective": 999,
                "currency_code": "INR"
              }
            }
          },
          "coupon_message": "",
          "key": "707569_1",
          "availability": {
            "sizes": [
              "1",
              "8",
              "7",
              "2",
              "9",
              "5",
              "3",
              "6"
            ],
            "other_store_quantity": 7,
            "out_of_stock": false,
            "deliverable": true,
            "is_valid": true
          },
          "product": {
            "type": "product",
            "uid": 707569,
            "name": "Blue and Gold Printed Ethnic Set",
            "slug": "aj-dezines-blue-and-gold-printed-ethnic-set-707569-bff01a",
            "brand": {
              "uid": 902,
              "name": ""
            },
            "categories": [
              {
                "uid": 525,
                "name": ""
              }
            ],
            "images": [
              {
                "aspect_ratio": "16:25",
                "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/902_636BLUE/1_1540301094877.jpg",
                "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/902_636BLUE/1_1540301094877.jpg"
              }
            ],
            "action": {
              "type": "product",
              "url": "https://api.addsale.com/v1/products/aj-dezines-blue-and-gold-printed-ethnic-set-707569-bff01a/",
              "query": {
                "product_slug": [
                  "aj-dezines-blue-and-gold-printed-ethnic-set-707569-bff01a"
                ]
              }
            }
          },
          "price": {
            "base": {
              "add_on": 100899,
              "marked": 302899,
              "effective": 100899,
              "selling": 100899,
              "currency_code": "INR"
            },
            "converted": {
              "add_on": 100899,
              "marked": 302899,
              "effective": 100899,
              "selling": 100899,
              "currency_code": "INR"
            }
          },
          "message": "",
          "quantity": 101
        }
      ],
      "delivery_charge_info": "",
      "coupon_text": "View all offers",
      "buy_now": false,
      "cart_id": 54,
      "uid": "54",
      "gstin": null,
      "checkout_mode": "self",
      "restrict_checkout": false,
      "is_valid": true,
      "last_modified": "Tue, 03 Sep 2019 10:19:20 GMT"
    },
    "result": {
      "707569_90": {
        "success": true,
        "message": "Nothing updated"
      }
    },
    "message": "Nothing updated",
    "success": true
  }
}
```
</details>

<details>
<summary><i>&nbsp; Item updated in the cart</i></summary>

```json
{
  "value": {
    "cart": {
      "breakup_values": {
        "raw": {
          "sub_total": 8000,
          "subtotal": 8000,
          "coupon": 0,
          "promotion": -100,
          "delivery_charge": 100,
          "you_saved": 0,
          "fynd_cash": 0,
          "cod_charge": 0,
          "total": 8000,
          "gst_charges": 0,
          "vog": 0,
          "convenience_fee": 0,
          "mrp_total": 20010,
          "discount": -12010
        },
        "coupon": {
          "type": "cash",
          "code": "",
          "uid": null,
          "value": 0,
          "is_applied": false,
          "message": "Sorry! Invalid coupon"
        },
        "loyalty_points": {
          "total": 0,
          "applicable": 0,
          "is_applied": false,
          "description": "Your cashback, reward points, and refund amount get credited to Fynd Cash which can be redeemed while placing an order.",
          "message": "Reward point not applicable with Coupon"
        },
        "display": [
          {
            "display": "MRP Total",
            "key": "mrp_total",
            "original": 20010,
            "attr": "mrp_total",
            "value": 20010,
            "currency_code": "INR",
            "currency_symbol": "₹",
            "message": []
          },
          {
            "display": "Discount",
            "key": "discount",
            "original": -12010,
            "attr": "discount",
            "value": -12010,
            "currency_code": "INR",
            "currency_symbol": "₹",
            "message": []
          },
          {
            "display": "Subtotal",
            "key": "subtotal",
            "original": 8000,
            "attr": "subtotal",
            "value": 8000,
            "currency_code": "INR",
            "currency_symbol": "₹",
            "message": []
          },
          {
            "display": "Promotion",
            "key": "promotion",
            "original": -100,
            "attr": "promotion",
            "value": -100,
            "currency_code": "INR",
            "currency_symbol": "₹",
            "message": []
          },
          {
            "display": "Delivery Charge",
            "key": "delivery_charge",
            "original": 100,
            "attr": "delivery_charge",
            "value": 100,
            "currency_code": "INR",
            "currency_symbol": "₹",
            "message": [
              "Delivery charges applicable ₹100.00 on order upto ₹10,000.00",
              "Free delivery on order above ₹10,000.00"
            ]
          },
          {
            "display": "Total",
            "key": "total",
            "original": 8000,
            "attr": "total",
            "value": 8000,
            "currency_code": "INR",
            "currency_symbol": "₹",
            "message": []
          }
        ]
      },
      "items": [
        {
          "parent_item_identifiers": {
            "identifier": null,
            "parent_item_size": null,
            "parent_item_id": null
          },
          "article": {
            "type": "article",
            "uid": "618c1a6874b93908c98f6d18",
            "size": "XL",
            "product_group_tags": null,
            "seller": {
              "uid": 61,
              "name": "FUCHSIA VINE DESIGNS PRIVATE LIMITED"
            },
            "store": {
              "uid": 11491,
              "name": "Store46"
            },
            "quantity": 200,
            "price": {
              "base": {
                "marked": 2001,
                "effective": 800,
                "selling": 800,
                "currency_code": "INR",
                "currency_symbol": "₹"
              },
              "converted": {
                "marked": 2001,
                "effective": 800,
                "selling": 800,
                "currency_code": "INR",
                "currency_symbol": "INR"
              }
            },
            "extra_meta": {}
          },
          "product": {
            "type": "product",
            "uid": 75252592,
            "name": "Nike Yellow Top",
            "slug": "nike-black-top",
            "brand": {
              "uid": 18,
              "name": "Nike"
            },
            "categories": [
              {
                "uid": 258,
                "name": "Blouson Top"
              }
            ],
            "attributes": {
              "hsn_code": "62040000",
              "short_description": "test description1",
              "essential": "No",
              "item_code": "1304678617",
              "gender": "Women",
              "currency": "INR",
              "media": [
                {
                  "url": "https://hdn-1.addsale.com/addsale/products/pictures/item/free/original/oy168nSHP-Nike-Black-Top.jpeg",
                  "type": "image"
                }
              ],
              "marketer-address": "Tops Range",
              "marketer-name": "Bandra(W), Link Road",
              "brand_name": "Nike"
            },
            "images": [
              {
                "aspect_ratio": "16:25",
                "url": "https://hdn-1.addsale.com/addsale/products/pictures/item/free/original/oy168nSHP-Nike-Black-Top.jpeg",
                "secure_url": "https://hdn-1.addsale.com/addsale/products/pictures/item/free/original/oy168nSHP-Nike-Black-Top.jpeg"
              }
            ],
            "action": {
              "type": "product",
              "url": "https://api.fyndx0.de/platform/content/v1/products/nike-black-top/",
              "query": {
                "product_slug": [
                  "nike-black-top"
                ]
              }
            },
            "item_code": "1304678617",
            "_custom_json": {}
          },
          "message": "",
          "price_per_unit": {
            "base": {
              "marked": 2001,
              "effective": 800,
              "selling_price": 800,
              "currency_code": "INR",
              "currency_symbol": "₹"
            },
            "converted": {
              "marked": 2001,
              "effective": 800,
              "selling_price": 800,
              "currency_code": "INR",
              "currency_symbol": "₹"
            }
          },
          "promo_meta": {},
          "bulk_offer": {},
          "price": {
            "base": {
              "add_on": 8000,
              "marked": 20010,
              "effective": 8000,
              "selling": 8000,
              "currency_code": "INR",
              "currency_symbol": "₹"
            },
            "converted": {
              "add_on": 8000,
              "marked": 20010,
              "effective": 8000,
              "selling": 8000,
              "currency_code": "INR",
              "currency_symbol": "₹"
            }
          },
          "is_set": false,
          "identifiers": {
            "identifier": "SfOmcAtTR4ut4pI_eVU6FQ"
          },
          "discount": "60% OFF",
          "moq": {},
          "availability": {
            "sizes": [
              "S",
              "XL",
              "L"
            ],
            "other_store_quantity": 984,
            "out_of_stock": false,
            "deliverable": true,
            "is_valid": true,
            "available_sizes": [
              {
                "is_available": true,
                "display": "S",
                "value": "S"
              },
              {
                "is_available": true,
                "display": "XL",
                "value": "XL"
              },
              {
                "is_available": false,
                "display": "CLL",
                "value": "CLL"
              },
              {
                "is_available": true,
                "display": "L",
                "value": "L"
              },
              {
                "is_available": false,
                "display": "XLL",
                "value": "XLL"
              },
              {
                "is_available": false,
                "display": "XLLL",
                "value": "XLLL"
              }
            ]
          },
          "quantity": 10,
          "promotions_applied": [
            {
              "promo_id": "62da8b75e951ea5e67b1454b",
              "amount": 10,
              "article_quantity": 10,
              "mrp_promotion": false,
              "promotion_type": "shipping_price",
              "offer_text": "Free shipping 22/07/2"
            }
          ],
          "key": "75252592_XL",
          "delivery_promise": null,
          "coupon_message": ""
        }
      ],
      "cart_id": 22251,
      "id": "62d4ff76d6aec8db897de407",
      "uid": "22251",
      "buy_now": false,
      "gstin": null,
      "comment": "",
      "checkout_mode": "self",
      "restrict_checkout": false,
      "is_valid": true,
      "currency": {
        "code": "INR",
        "symbol": "₹"
      },
      "last_modified": "Mon, 01 Aug 2022 09:33:20 GMT"
    },
    "message": "Item updated in the bag",
    "success": true
  }
}
```
</details>

</details>









---


### updateCartMetaConfig
Update cart meta configuration



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").cart.updateCartMetaConfig({  cartMetaId : value,
 body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").cart.updateCartMetaConfig({  cartMetaId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| cartMetaId | string | yes |  |  
| body | [CartMetaConfigUpdate](#CartMetaConfigUpdate) | yes | Request body |


Update cart meta configuration

*Returned Response:*




[CartMetaConfigUpdate](#CartMetaConfigUpdate)

Cart Meta Config Created successfully




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "_id": "645ba594d414eb0669e6ee14",
  "app_id": "60792ded7826bd09330ed90d",
  "company_id": 884,
  "bulk_coupons": false,
  "delivery_charges": {
    "charges": [],
    "enabled": false
  },
  "empty_cart": false,
  "enabled": true,
  "max_cart_items": 50,
  "min_cart_value": 0,
  "revenue_engine_coupon": false,
  "gift_pricing": 50,
  "gift_display_text": ""
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


#### [AbandonedCart](#AbandonedCart)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | app_id | string? |  yes  |  |
 | articles | [string] |  no  |  |
 | bulk_coupon_discount | number? |  yes  |  |
 | buy_now | boolean? |  yes  |  |
 | cart_value | number? |  yes  |  |
 | cashback | string |  no  |  |
 | checkout_mode | string? |  yes  |  |
 | cod_charges | string? |  yes  |  |
 | comment | string? |  yes  |  |
 | coupon | string? |  yes  |  |
 | created_on | string |  no  |  |
 | delivery_charges | string? |  yes  |  |
 | discount | number? |  yes  |  |
 | expire_at | string |  no  |  |
 | fc_index_map | [number]? |  yes  |  |
 | fynd_credits | string? |  yes  |  |
 | gstin | string? |  yes  |  |
 | is_active | boolean? |  yes  |  |
 | is_archive | boolean? |  yes  |  |
 | is_default | boolean |  no  |  |
 | last_modified | string |  no  |  |
 | merge_qty | boolean? |  yes  |  |
 | meta | string? |  yes  |  |
 | order_id | string? |  yes  |  |
 | payment_methods | [string]? |  yes  |  |
 | payment_mode | string? |  yes  |  |
 | payments | string? |  yes  |  |
 | pick_up_customer_details | string? |  yes  |  |
 | promotion | string? |  yes  |  |
 | shipments | [string]? |  yes  |  |
 | uid | number |  no  |  |
 | user_id | string |  no  |  |
 

---

#### [AbandonedCartResponse](#AbandonedCartResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[AbandonedCart](#AbandonedCart)]? |  yes  |  |
 | message | string? |  yes  | message of the response |
 | page | [Page](#Page)? |  yes  |  |
 | result | string? |  yes  |  |
 | success | boolean? |  yes  | the request success is defined |
 

---

#### [ActionQuery](#ActionQuery)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | product_slug | [string]? |  yes  | Contains list of product slug |
 

---

#### [ActivePromosResponse](#ActivePromosResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | created_on | string? |  yes  | Coupon creation date |
 | description | string? |  yes  | The description of the offer in the form of an HTML |
 | entity_slug | string? |  yes  |  |
 | entity_type | string? |  yes  | Type of entity to be selected from : ['coupon', 'promotion'] |
 | example | string? |  yes  | Discount offers examples |
 | is_hidden | boolean? |  yes  | If the promo is active or not |
 | modified_on | string? |  yes  | Coupon modification date |
 | subtitle | string? |  yes  | Small description of the current offer |
 | title | string? |  yes  | Name of the promotion |
 | type | string? |  yes  | Coupon type |
 

---

#### [AddCartDetailResponse](#AddCartDetailResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cart | [CartDetailResponse](#CartDetailResponse)? |  yes  |  |
 | message | string? |  yes  |  |
 | partial | boolean? |  yes  | When adding multiple items check if all added. True if only few are added. |
 | success | boolean? |  yes  | True if all items are added successfully. False if partially added or not added. |
 

---

#### [AddCartRequest](#AddCartRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[AddProductCart](#AddProductCart)]? |  yes  |  |
 

---

#### [AddProductCart](#AddProductCart)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _custom_json | string? |  yes  |  |
 | article_assignment | string? |  yes  |  |
 | article_id | string? |  yes  |  |
 | display | string? |  yes  |  |
 | extra_meta | string? |  yes  |  |
 | item_id | number? |  yes  |  |
 | item_size | string? |  yes  |  |
 | parent_item_identifiers | [[String: string]]? |  yes  |  |
 | pos | boolean? |  yes  |  |
 | product_group_tags | [string]? |  yes  |  |
 | quantity | number? |  yes  |  |
 | seller_id | number? |  yes  |  |
 | store_id | number? |  yes  |  |
 

---

#### [AppliedFreeArticles](#AppliedFreeArticles)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | article_id | string? |  yes  | free article id |
 | free_gift_item_details | [FreeGiftItem](#FreeGiftItem)? |  yes  | Free gift items details |
 | parent_item_identifier | string? |  yes  | Parent item identifier for free article |
 | quantity | number? |  yes  | Free article quantity |
 

---

#### [AppliedPromotion](#AppliedPromotion)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | number? |  yes  | Per unit discount amount applied with current promotion |
 | applied_free_articles | [[AppliedFreeArticles](#AppliedFreeArticles)]? |  yes  | Applied free article for free gift item promotions |
 | article_quantity | number? |  yes  | Quantity of article on which promotion is applicable |
 | buy_rules | [[BuyRules](#BuyRules)]? |  yes  | Buy rules for promotions |
 | discount_rules | [[DiscountRulesApp](#DiscountRulesApp)]? |  yes  | Discount rules for promotions |
 | mrp_promotion | boolean? |  yes  | If applied promotion is applied on product MRP or ESP |
 | offer_text | string? |  yes  | Offer text of current promotion |
 | ownership | [Ownership2](#Ownership2)? |  yes  | Ownership of promotion |
 | promo_id | string? |  yes  | Promotion id |
 | promotion_group | string? |  yes  | Promotion group for the promotion |
 | promotion_name | string? |  yes  | Promotion name of current promotion |
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

#### [BuyRules](#BuyRules)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cart_conditions | string? |  yes  | Cart conditions details for promotion |
 | item_criteria | string? |  yes  | Item criteria of promotion |
 

---

#### [CartBreakup](#CartBreakup)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | coupon | [CouponBreakup](#CouponBreakup)? |  yes  |  |
 | display | [[DisplayBreakup](#DisplayBreakup)]? |  yes  |  |
 | loyalty_points | [LoyaltyPoints](#LoyaltyPoints)? |  yes  |  |
 | raw | [RawBreakup](#RawBreakup)? |  yes  |  |
 

---

#### [CartCurrency](#CartCurrency)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string? |  yes  | Currency code defined by ISO 4217:2015 |
 | symbol | string? |  yes  |  |
 

---

#### [CartDetailResponse](#CartDetailResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | applied_promo_details | [[AppliedPromotion](#AppliedPromotion)]? |  yes  |  |
 | breakup_values | [CartBreakup](#CartBreakup)? |  yes  |  |
 | buy_now | boolean? |  yes  |  |
 | checkout_mode | string? |  yes  |  |
 | comment | string? |  yes  |  |
 | coupon_text | string? |  yes  |  |
 | currency | [CartCurrency](#CartCurrency)? |  yes  |  |
 | delivery_charge_info | string? |  yes  |  |
 | delivery_promise | [ShipmentPromise](#ShipmentPromise)? |  yes  |  |
 | gstin | string? |  yes  |  |
 | id | string? |  yes  |  |
 | is_valid | boolean? |  yes  |  |
 | items | [[CartProductInfo](#CartProductInfo)]? |  yes  |  |
 | last_modified | string? |  yes  |  |
 | message | string? |  yes  |  |
 | payment_selection_lock | [PaymentSelectionLock](#PaymentSelectionLock)? |  yes  |  |
 | restrict_checkout | boolean? |  yes  |  |
 

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

#### [CartMetaConfigAdd](#CartMetaConfigAdd)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bulk_coupons | boolean? |  yes  |  |
 | delivery_charges | [DeliveryCharges](#DeliveryCharges)? |  yes  |  |
 | enabled | boolean? |  yes  |  |
 | gift_display_text | string? |  yes  |  |
 | gift_pricing | number? |  yes  |  |
 | max_cart_items | number? |  yes  |  |
 | min_cart_value | number? |  yes  |  |
 | revenue_engine_coupon | boolean? |  yes  |  |
 

---

#### [CartMetaConfigUpdate](#CartMetaConfigUpdate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bulk_coupons | boolean? |  yes  |  |
 | delivery_charges | [DeliveryCharges](#DeliveryCharges)? |  yes  |  |
 | enabled | boolean? |  yes  |  |
 | gift_display_text | string? |  yes  |  |
 | gift_pricing | number? |  yes  |  |
 | max_cart_items | number? |  yes  |  |
 | min_cart_value | number? |  yes  |  |
 | revenue_engine_coupon | boolean? |  yes  |  |
 

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
 | delivery_promise | [ShipmentPromise](#ShipmentPromise)? |  yes  |  |
 | discount | string? |  yes  |  |
 | identifiers | [CartProductIdentifer](#CartProductIdentifer) |  no  |  |
 | is_set | boolean? |  yes  |  |
 | key | string? |  yes  |  |
 | message | string? |  yes  |  |
 | moq | string? |  yes  |  |
 | parent_item_identifiers | string? |  yes  |  |
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

#### [Charges](#Charges)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | charges | number? |  yes  |  |
 | threshold | number? |  yes  |  |
 

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
 | coupon_type | string? |  yes  |  |
 | coupon_value | number? |  yes  |  |
 | description | string? |  yes  |  |
 | is_applied | boolean? |  yes  |  |
 | max_discount_value | number? |  yes  |  |
 | message | string? |  yes  |  |
 | minimum_cart_value | number? |  yes  |  |
 | sub_title | string? |  yes  |  |
 | title | string? |  yes  |  |
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

#### [DeliveryCharges](#DeliveryCharges)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | charges | [[Charges](#Charges)]? |  yes  |  |
 | enabled | boolean? |  yes  |  |
 

---

#### [DiscountOffer](#DiscountOffer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | apportion_discount | boolean? |  yes  |  |
 | code | string? |  yes  |  |
 | discount_amount | number? |  yes  |  |
 | discount_percentage | number? |  yes  |  |
 | discount_price | number? |  yes  |  |
 | max_discount_amount | number? |  yes  |  |
 | max_offer_quantity | number? |  yes  |  |
 | max_usage_per_transaction | number? |  yes  |  |
 | min_offer_quantity | number? |  yes  |  |
 | partial_can_ret | boolean? |  yes  |  |
 

---

#### [DiscountRule](#DiscountRule)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | buy_condition | string |  no  |  |
 | discount_type | string |  no  |  |
 | item_criteria | [ItemCriteria](#ItemCriteria) |  no  |  |
 | offer | [DiscountOffer](#DiscountOffer) |  no  |  |
 

---

#### [DiscountRulesApp](#DiscountRulesApp)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | item_criteria | string? |  yes  | Item criteria of promotion |
 | matched_buy_rules | [string]? |  yes  | Matched buy rules for promotion |
 | offer | string? |  yes  | offer for promotion |
 | raw_offer | string? |  yes  | raw offer details for promotion |
 

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

#### [FreeGiftItem](#FreeGiftItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | item_brand_name | string? |  yes  | item brand name |
 | item_id | number? |  yes  | Item id |
 | item_images_url | [string]? |  yes  | item images URL |
 | item_name | string? |  yes  | Item name |
 | item_price_details | string? |  yes  | item price details |
 | item_slug | string? |  yes  | item slug |
 

---

#### [Identifier](#Identifier)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | article_id | [string]? |  yes  |  |
 | brand_id | [number]? |  yes  |  |
 | category_id | [number]? |  yes  |  |
 | collection_id | [string]? |  yes  |  |
 | company_id | [number]? |  yes  |  |
 | exclude_brand_id | [number]? |  yes  |  |
 | item_id | [number]? |  yes  |  |
 | store_id | [number]? |  yes  |  |
 | user_id | [string]? |  yes  |  |
 

---

#### [ItemCriteria](#ItemCriteria)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | all_items | boolean? |  yes  |  |
 | available_zones | [string]? |  yes  |  |
 | buy_rules | [string]? |  yes  |  |
 | cart_quantity | [CompareObject](#CompareObject)? |  yes  |  |
 | cart_total | [CompareObject](#CompareObject)? |  yes  |  |
 | cart_unique_item_amount | [CompareObject](#CompareObject)? |  yes  |  |
 | cart_unique_item_quantity | [CompareObject](#CompareObject)? |  yes  |  |
 | item_brand | [number]? |  yes  |  |
 | item_category | [number]? |  yes  |  |
 | item_company | [number]? |  yes  |  |
 | item_exclude_brand | [number]? |  yes  |  |
 | item_exclude_category | [number]? |  yes  |  |
 | item_exclude_company | [number]? |  yes  |  |
 | item_exclude_id | [number]? |  yes  |  |
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
 | cart_items | [[CartItem](#CartItem)] |  no  |  |
 

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
 | cart_items | [[CartItem](#CartItem)] |  no  |  |
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
 | comment | string? |  yes  |  |
 | coupon | string? |  yes  |  |
 | coupon_code | string |  no  |  |
 | coupon_value | number |  no  |  |
 | currency_code | string? |  yes  |  |
 | delivery_charges | number |  no  |  |
 | employee_discount | string? |  yes  |  |
 | files | [[OpenApiFiles](#OpenApiFiles)]? |  yes  |  |
 | gstin | string? |  yes  |  |
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

#### [Ownership2](#Ownership2)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | payable_by | string? |  yes  | promo amount bearable party |
 | payable_category | string? |  yes  | promo amount payable category |
 

---

#### [Page](#Page)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number? |  yes  | Current page no |
 | has_next | boolean? |  yes  | True if more records are present for next pages |
 | has_previous | boolean? |  yes  | True if more records are present for previous pages. Sent for cursor pagination |
 | item_total | number? |  yes  | Total coupon count in system |
 | last_id | string? |  yes  | Last objects id |
 | next_id | string? |  yes  | Cursor id for next set of records. |
 | page | number? |  yes  | Page requested |
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

#### [PaymentSelectionLock](#PaymentSelectionLock)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | default_options | string? |  yes  |  |
 | enabled | boolean? |  yes  |  |
 | payment_identifier | string? |  yes  |  |
 

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
 | _custom_json | string? |  yes  |  |
 | extra_meta | string? |  yes  |  |
 | identifier | string? |  yes  |  |
 | parent_item_identifiers | string? |  yes  |  |
 | price | [ArticlePriceInfo](#ArticlePriceInfo)? |  yes  |  |
 | product_group_tags | [string]? |  yes  |  |
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
 | available_sizes | [[ProductAvailabilitySize](#ProductAvailabilitySize)]? |  yes  |  |
 | deliverable | boolean? |  yes  |  |
 | is_valid | boolean? |  yes  |  |
 | other_store_quantity | number? |  yes  |  |
 | out_of_stock | boolean? |  yes  |  |
 | sizes | [string]? |  yes  |  |
 

---

#### [ProductAvailabilitySize](#ProductAvailabilitySize)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display | string? |  yes  |  |
 | is_available | boolean? |  yes  |  |
 | value | string? |  yes  |  |
 

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
 | ordering_stores | [number]? |  yes  |  |
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
 | country_iso_code | string? |  yes  |  |
 | country_phone_code | string? |  yes  |  |
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

#### [UpdateCartDetailResponse](#UpdateCartDetailResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cart | [CartDetailResponse](#CartDetailResponse)? |  yes  |  |
 | message | string? |  yes  |  |
 | success | boolean? |  yes  | True if all items are added successfully. False if partially added or not added. |
 

---

#### [UpdateCartRequest](#UpdateCartRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[UpdateProductCart](#UpdateProductCart)]? |  yes  |  |
 | operation | string |  no  |  |
 

---

#### [UpdateProductCart](#UpdateProductCart)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _custom_json | string? |  yes  |  |
 | article_id | string? |  yes  |  |
 | extra_meta | string? |  yes  |  |
 | identifiers | [CartProductIdentifer](#CartProductIdentifer) |  no  |  |
 | item_id | number? |  yes  |  |
 | item_index | number? |  yes  |  |
 | item_size | string? |  yes  |  |
 | parent_item_identifiers | string? |  yes  |  |
 | quantity | number? |  yes  |  |
 

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




