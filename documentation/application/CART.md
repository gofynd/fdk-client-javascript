



##### [Back to Application docs](./README.md)

## Cart Methods
Cart APIs
* [getCart](#getcart)
* [getCartLastModified](#getcartlastmodified)
* [addItems](#additems)
* [updateCart](#updatecart)
* [getItemCount](#getitemcount)
* [getCoupons](#getcoupons)
* [applyCoupon](#applycoupon)
* [removeCoupon](#removecoupon)
* [getBulkDiscountOffers](#getbulkdiscountoffers)
* [applyRewardPoints](#applyrewardpoints)
* [getAddresses](#getaddresses)
* [addAddress](#addaddress)
* [getAddressById](#getaddressbyid)
* [updateAddress](#updateaddress)
* [removeAddress](#removeaddress)
* [selectAddress](#selectaddress)
* [selectPaymentMode](#selectpaymentmode)
* [validateCouponForPayment](#validatecouponforpayment)
* [getShipments](#getshipments)
* [checkoutCart](#checkoutcart)
* [updateCartMeta](#updatecartmeta)
* [getCartShareLink](#getcartsharelink)
* [getCartSharedItems](#getcartshareditems)
* [updateCartWithSharedItems](#updatecartwithshareditems)



## Methods with example and description


### getCart
Fetch all items added to the cart



```javascript
// Promise
const promise = cart.getCart({  id : value,
 i : value,
 b : value,
 assignCardId : value });

// Async/Await
const data = await cart.getCart({  id : value,
 i : value,
 b : value,
 assignCardId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| id | string | no |  |    
| i | boolean | no |  |    
| b | boolean | no |  |    
| assignCardId | number | no |  |  



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


### getCartLastModified
Fetch last-modified timestamp



```javascript
// Promise
const promise = cart.getCartLastModified({  id : value });

// Async/Await
const data = await cart.getCartLastModified({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| id | string | no |  |  



Use this API to fetch Last-Modified timestamp in header metadata.

*Returned Response:*








---


### addItems
Add items to cart



```javascript
// Promise
const promise = cart.addItems({  body : value,
 i : value,
 b : value });

// Async/Await
const data = await cart.addItems({  body : value,
 i : value,
 b : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| i | boolean | no |  |    
| b | boolean | no |  |  
| body | [AddCartRequest](#AddCartRequest) | yes | Request body |


Use this API to add items to the cart.

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


### updateCart
Update items in the cart



```javascript
// Promise
const promise = cart.updateCart({  body : value,
 id : value,
 i : value,
 b : value });

// Async/Await
const data = await cart.updateCart({  body : value,
 id : value,
 i : value,
 b : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| id | string | no |  |    
| i | boolean | no |  |    
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
        "coupon": {
          "type": "cash",
          "code": "",
          "uid": null,
          "value": 0,
          "is_applied": false,
          "message": "Sorry! Invalid Coupon"
        },
        "loyalty_points": {
          "total": 0,
          "applicable": 0,
          "is_applied": false,
          "description": "Your cashback, referrals, and refund amount get credited to Fynd Cash which can be redeemed while placing an order."
        },
        "raw": {
          "cod_charge": 0,
          "convenience_fee": 0,
          "coupon": 0,
          "delivery_charge": 0,
          "discount": 0,
          "fynd_cash": 0,
          "gst_charges": 838.83,
          "mrp_total": 5499,
          "subtotal": 5499,
          "total": 5499,
          "vog": 4660.17,
          "you_saved": 0
        },
        "display": [
          {
            "display": "MRP Total",
            "key": "mrp_total",
            "value": 5499,
            "currency_code": "INR"
          },
          {
            "display": "Subtotal",
            "key": "subtotal",
            "value": 5499,
            "currency_code": "INR"
          },
          {
            "display": "Total",
            "key": "total",
            "value": 5499,
            "currency_code": "INR"
          }
        ]
      },
      "items": [
        {
          "key": "437414_7",
          "message": "",
          "bulk_offer": {},
          "price": {
            "base": {
              "add_on": 5499,
              "marked": 5499,
              "effective": 5499,
              "selling": 5499,
              "currency_code": "INR"
            },
            "converted": {
              "add_on": 5499,
              "marked": 5499,
              "effective": 5499,
              "selling": 5499,
              "currency_code": "INR"
            }
          },
          "quantity": 1,
          "discount": "",
          "product": {
            "type": "product",
            "uid": 437414,
            "name": "Suede Classic",
            "slug": "puma-suede-classic-437414-6e6bbf",
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
                "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/9_35656851/1_1511171811830.jpg",
                "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/9_35656851/1_1511171811830.jpg"
              }
            ],
            "action": {
              "type": "product",
              "url": "https://api.addsale.com/platform/content/v1/products/puma-suede-classic-437414-6e6bbf/",
              "query": {
                "product_slug": [
                  "puma-suede-classic-437414-6e6bbf"
                ]
              }
            }
          },
          "article": {
            "type": "article",
            "uid": "507_9_96099_35656851_7",
            "size": "7",
            "seller": {
              "uid": 507,
              "name": "PUMA SPORTS INDIA PVT LTD"
            },
            "store": {
              "uid": 3632,
              "name": "Colaba Causway"
            },
            "quantity": 5,
            "price": {
              "base": {
                "marked": 5499,
                "effective": 5499,
                "currency_code": "INR"
              },
              "converted": {
                "marked": 5499,
                "effective": 5499,
                "currency_code": "INR"
              }
            }
          },
          "coupon_message": "",
          "availability": {
            "sizes": [
              "10",
              "11",
              "6",
              "9",
              "7",
              "8"
            ],
            "other_store_quantity": 22,
            "out_of_stock": false,
            "deliverable": true,
            "is_valid": true
          }
        }
      ],
      "delivery_charge_info": "",
      "coupon_text": "View all offers",
      "cart_id": 12426,
      "uid": "12426",
      "gstin": null,
      "checkout_mode": "self",
      "last_modified": "Thu, 22 Aug 2019 04:51:42 GMT",
      "restrict_checkout": false,
      "is_valid": true
    },
    "result": {
      "437414_7": {
        "success": true,
        "message": "Item updated in the bag"
      }
    },
    "message": "Item updated in the bag",
    "success": true
  }
}
```
</details>

</details>









---


### getItemCount
Count items in the cart



```javascript
// Promise
const promise = cart.getItemCount({  id : value });

// Async/Await
const data = await cart.getItemCount({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| id | string | no | The unique identifier of the cart. |  



Use this API to get the total number of items present in cart.

*Returned Response:*




[CartItemCountResponse](#CartItemCountResponse)

Success. Returns the total count of items in a user's cart.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "user_cart_items_count": 0
}
```
</details>









---


### getCoupons
Fetch Coupon



```javascript
// Promise
const promise = cart.getCoupons({  id : value });

// Async/Await
const data = await cart.getCoupons({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| id | string | no |  |  



Use this API to get a list of available coupons along with their details.

*Returned Response:*




[GetCouponResponse](#GetCouponResponse)

Success. Returns a coupon object which has a list of all the eligible coupons. Refer `GetCouponResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "available_coupon_list": [
    {
      "coupon_value": 500,
      "minimum_cart_value": 0,
      "coupon_code": "RAJA500",
      "title": "RAJA500 | Fynd coupon",
      "sub_title": "NA",
      "message": "TEST500",
      "max_discount_value": 500,
      "uid": 17921,
      "is_applicable": true,
      "is_applied": false,
      "expires_on": "28 Aug, 19"
    },
    {
      "coupon_value": 2250,
      "minimum_cart_value": 0,
      "coupon_code": "PRISMC22250111",
      "title": "celio 2 time coupn to kalim hsp",
      "sub_title": "celio 2 time coupn to kalim hsp",
      "message": "celio 2 time coupn to kalim hsp",
      "max_discount_value": 2250,
      "uid": 17743,
      "is_applicable": true,
      "is_applied": false,
      "expires_on": "24 Jan, 20"
    }
  ],
  "page": {
    "current": 1,
    "total": 0,
    "has_previous": false,
    "has_next": false,
    "total_item_count": 0
  }
}
```
</details>









---


### applyCoupon
Apply Coupon



```javascript
// Promise
const promise = cart.applyCoupon({  body : value,
 i : value,
 b : value,
 p : value,
 id : value });

// Async/Await
const data = await cart.applyCoupon({  body : value,
 i : value,
 b : value,
 p : value,
 id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| i | boolean | no |  |    
| b | boolean | no |  |    
| p | boolean | no |  |    
| id | string | no |  |  
| body | [ApplyCouponRequest](#ApplyCouponRequest) | yes | Request body |


Use this API to apply coupons on items in the cart.

*Returned Response:*




[CartDetailResponse](#CartDetailResponse)

Success. Returns coupons applied to the cart along with item details and price breakup. Refer `CartDetailResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "breakup_values": {
    "raw": {
      "cod_charge": 0,
      "convenience_fee": 0,
      "coupon": -2250,
      "delivery_charge": 0,
      "discount": -7240.2163,
      "fynd_cash": 0,
      "gst_charges": 2139.08,
      "mrp_total": 26983,
      "subtotal": 19742.7837,
      "total": 17492.7837,
      "vog": 15353.7,
      "you_saved": 0
    },
    "coupon": {
      "type": "cash",
      "code": "PRISMC22250111",
      "uid": 17743,
      "value": 2250,
      "is_applied": true,
      "message": "coupn applied"
    },
    "loyalty_points": {
      "total": 0,
      "applicable": 0,
      "is_applied": false,
      "description": "Your cashback, referrals, and refund amount get credited to Fynd Cash which can be redeemed while placing an order."
    },
    "display": [
      {
        "display": "MRP Total",
        "key": "mrp_total",
        "value": 26983,
        "currency_code": "INR"
      },
      {
        "display": "Discount",
        "key": "discount",
        "value": -7240,
        "currency_code": "INR"
      },
      {
        "display": "Subtotal",
        "key": "subtotal",
        "value": 19743,
        "currency_code": "INR"
      },
      {
        "display": "Coupon",
        "key": "coupon",
        "value": -2250,
        "currency_code": "INR"
      },
      {
        "display": "Total",
        "key": "total",
        "value": 17493,
        "currency_code": "INR"
      }
    ]
  },
  "items": [
    {
      "availability": {
        "sizes": [
          "10"
        ],
        "other_store_quantity": 0,
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
      "quantity": 4,
      "discount": "41% OFF",
      "price": {
        "base": {
          "add_on": 9596,
          "marked": 15996,
          "effective": 9596,
          "selling": 9596,
          "currency_code": "INR"
        },
        "converted": {
          "add_on": 9596,
          "marked": 15996,
          "effective": 9596,
          "selling": 9596,
          "currency_code": "INR"
        }
      },
      "message": "",
      "bulk_offer": {},
      "key": "751083_10",
      "coupon_message": "",
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
      }
    },
    {
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
      "quantity": 1,
      "discount": "",
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
      "message": "",
      "bulk_offer": {},
      "key": "246228_S",
      "coupon_message": "",
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
      }
    },
    {
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
      "quantity": 1,
      "discount": "",
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
      "message": "",
      "bulk_offer": {},
      "key": "443175_S",
      "coupon_message": "",
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
      }
    },
    {
      "availability": {
        "sizes": [
          "OS"
        ],
        "other_store_quantity": 12,
        "out_of_stock": false,
        "deliverable": true,
        "is_valid": true
      },
      "product": {
        "type": "product",
        "uid": 842716,
        "name": "Blue Backpack",
        "slug": "istorm-blue-backpack-842716-951b5a",
        "brand": {
          "uid": 1177,
          "name": "iStorm"
        },
        "categories": [
          {
            "uid": 198,
            "name": "Backpacks"
          }
        ],
        "images": [
          {
            "aspect_ratio": "16:25",
            "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/1177_IS483/1_1551353288247.jpg",
            "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/1177_IS483/1_1551353288247.jpg"
          }
        ],
        "action": {
          "type": "product",
          "url": "https://api.addsale.com/platform/content/v1/products/istorm-blue-backpack-842716-951b5a/",
          "query": {
            "product_slug": [
              "istorm-blue-backpack-842716-951b5a"
            ]
          }
        }
      },
      "quantity": 1,
      "discount": "34% OFF",
      "price": {
        "base": {
          "add_on": 998.7837,
          "marked": 1499,
          "effective": 998.7837,
          "selling": 998.7837,
          "currency_code": "INR"
        },
        "converted": {
          "add_on": 998.7837,
          "marked": 1499,
          "effective": 998.7837,
          "selling": 998.7837,
          "currency_code": "INR"
        }
      },
      "message": "",
      "bulk_offer": {},
      "key": "842716_OS",
      "coupon_message": "",
      "article": {
        "type": "article",
        "uid": "638_1177_CRSL63802_IS483_OS",
        "size": "OS",
        "seller": {
          "uid": 638,
          "name": "COUNFREEDISE RETAIL SERVICES LTD"
        },
        "store": {
          "uid": 4630,
          "name": "Bhiwandi"
        },
        "quantity": 4,
        "price": {
          "base": {
            "marked": 1499,
            "effective": 998.7837,
            "currency_code": "INR"
          },
          "converted": {
            "marked": 1499,
            "effective": 998.7837,
            "currency_code": "INR"
          }
        }
      }
    },
    {
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
      "quantity": 1,
      "discount": "11% OFF",
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
      "message": "",
      "bulk_offer": {},
      "key": "778937_OS",
      "coupon_message": "",
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
      }
    }
  ],
  "delivery_charge_info": "",
  "coupon_text": "View all offers",
  "cart_id": 7927,
  "uid": "7927",
  "gstin": null,
  "checkout_mode": "self",
  "last_modified": "Wed, 04 Sep 2019 04:52:21 GMT",
  "restrict_checkout": false,
  "is_valid": true
}
```
</details>









---


### removeCoupon
Remove Coupon Applied



```javascript
// Promise
const promise = cart.removeCoupon({  id : value });

// Async/Await
const data = await cart.removeCoupon({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| id | string | no | The unique identifier of the cart |  



Remove Coupon applied on the cart by passing uid in request body.

*Returned Response:*




[CartDetailResponse](#CartDetailResponse)

Success. Returns coupons removed from the cart along with item details and price breakup. Refer `CartDetailResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "breakup_values": {
    "raw": {
      "cod_charge": 0,
      "convenience_fee": 0,
      "coupon": 0,
      "delivery_charge": 0,
      "discount": 0,
      "fynd_cash": 0,
      "gst_charges": 342.75,
      "mrp_total": 3199,
      "subtotal": 3199,
      "total": 3199,
      "vog": 2856.25,
      "you_saved": 0
    },
    "coupon": {
      "type": "cash",
      "code": "prismc22250111",
      "uid": 17743,
      "value": 0,
      "is_applied": false,
      "message": "Coupon successfully removed"
    },
    "display": [
      {
        "display": "MRP Total",
        "key": "mrp_total",
        "value": 3199,
        "currency_code": "INR"
      },
      {
        "display": "Subtotal",
        "key": "subtotal",
        "value": 3199,
        "currency_code": "INR"
      },
      {
        "display": "Total",
        "key": "total",
        "value": 3199,
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
      "message": "",
      "availability": {
        "sizes": [
          "M",
          "S",
          "L",
          "XXL",
          "XL"
        ],
        "other_store_quantity": 10,
        "out_of_stock": false,
        "deliverable": true,
        "is_valid": true
      },
      "bulk_offer": {},
      "key": "857596_S",
      "quantity": 1,
      "price": {
        "base": {
          "add_on": 3199,
          "marked": 3199,
          "effective": 3199,
          "selling": 3199,
          "currency_code": "INR"
        },
        "converted": {
          "add_on": 3199,
          "marked": 3199,
          "effective": 3199,
          "selling": 3199,
          "currency_code": "INR"
        }
      },
      "discount": "",
      "coupon_message": "",
      "product": {
        "type": "product",
        "uid": 857596,
        "name": "Pink Solid Hoodie",
        "slug": "883-police-pink-solid-hoodie-857596-111bdc",
        "brand": {
          "uid": 610,
          "name": "883 Police"
        },
        "categories": [
          {
            "uid": 144,
            "name": "Hoodies"
          }
        ],
        "images": [
          {
            "aspect_ratio": "16:25",
            "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/610_LETTER19APINK/1_1553062658148.jpg",
            "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/610_LETTER19APINK/1_1553062658148.jpg"
          }
        ],
        "action": {
          "type": "product",
          "url": "https://api.addsale.com/platform/content/v1/products/883-police-pink-solid-hoodie-857596-111bdc/",
          "query": {
            "product_slug": [
              "883-police-pink-solid-hoodie-857596-111bdc"
            ]
          }
        }
      },
      "article": {
        "type": "article",
        "uid": "381_610_IGPL01_LETTER19APINK_S",
        "size": "S",
        "seller": {
          "uid": 381,
          "name": "INTERSOURCE GARMENTS PVT LTD"
        },
        "store": {
          "uid": 3009,
          "name": "Kormangala"
        },
        "quantity": 11,
        "price": {
          "base": {
            "marked": 3199,
            "effective": 3199,
            "currency_code": "INR"
          },
          "converted": {
            "marked": 3199,
            "effective": 3199,
            "currency_code": "INR"
          }
        }
      }
    }
  ],
  "delivery_charge_info": "",
  "coupon_text": "View all offers",
  "cart_id": 7477,
  "uid": "7477",
  "gstin": null,
  "checkout_mode": "self",
  "last_modified": "Thu, 22 Aug 2019 10:55:05 GMT",
  "restrict_checkout": false,
  "is_valid": true
}
```
</details>









---


### getBulkDiscountOffers
Get discount offers based on quantity



```javascript
// Promise
const promise = cart.getBulkDiscountOffers({  itemId : value,
 articleId : value,
 uid : value,
 slug : value });

// Async/Await
const data = await cart.getBulkDiscountOffers({  itemId : value,
 articleId : value,
 uid : value,
 slug : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| itemId | number | no | The Item ID of the product |    
| articleId | string | no | Article Mongo ID |    
| uid | number | no | UID of the product |    
| slug | string | no | A short, human-readable, URL-friendly identifier of a product. You can get slug value from the endpoint /service/application/catalog/v1.0/products/ |  



Use this API to get a list of applicable offers along with current, next and best offer for given product. Either one of uid, item_id, slug should be present.

*Returned Response:*




[BulkPriceResponse](#BulkPriceResponse)

Success. Returns a data object containing the seller details and available offers (if exists) on bulk products. Refer `BulkPriceResponse` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Offers found</i></summary>

```json
{
  "value": {
    "data": [
      {
        "seller": {
          "uid": 248,
          "name": "MANYAVAR CREATIONS PRIVATE LIMITED"
        },
        "offers": [
          {
            "quantity": 1,
            "auto_applied": true,
            "margin": 10,
            "type": "bundle",
            "price": {
              "marked": 3999,
              "effective": 3999,
              "bulk_effective": 3599.1,
              "currency_code": "INR"
            },
            "total": 3599.1
          },
          {
            "quantity": 3,
            "auto_applied": true,
            "margin": 20,
            "type": "bundle",
            "price": {
              "marked": 3999,
              "effective": 3999,
              "bulk_effective": 3199.2,
              "currency_code": "INR"
            },
            "total": 9597.6
          },
          {
            "quantity": 9,
            "auto_applied": true,
            "margin": 30,
            "type": "bundle",
            "price": {
              "marked": 3999,
              "effective": 3999,
              "bulk_effective": 3443.4444444444,
              "currency_code": "INR"
            },
            "total": 30991,
            "best": true
          }
        ]
      }
    ]
  }
}
```
</details>

<details>
<summary><i>&nbsp; Offers not found</i></summary>

```json
{
  "value": {
    "data": []
  }
}
```
</details>

</details>









---


### applyRewardPoints
Apply reward points at cart



```javascript
// Promise
const promise = cart.applyRewardPoints({  body : value,
 id : value,
 i : value,
 b : value });

// Async/Await
const data = await cart.applyRewardPoints({  body : value,
 id : value,
 i : value,
 b : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| id | string | no |  |    
| i | boolean | no |  |    
| b | boolean | no |  |  
| body | [RewardPointRequest](#RewardPointRequest) | yes | Request body |


Use this API to redeem a fixed no. of reward points by applying it to the cart.

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


### getAddresses
Fetch address



```javascript
// Promise
const promise = cart.getAddresses({  cartId : value,
 mobileNo : value,
 checkoutMode : value,
 tags : value,
 isDefault : value });

// Async/Await
const data = await cart.getAddresses({  cartId : value,
 mobileNo : value,
 checkoutMode : value,
 tags : value,
 isDefault : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| cartId | string | no |  |    
| mobileNo | string | no |  |    
| checkoutMode | string | no |  |    
| tags | string | no |  |    
| isDefault | boolean | no |  |  



Use this API to get all the addresses associated with an account. If successful, returns a Address resource in the response body specified in GetAddressesResponse.attibutes listed below are optional <ul> <li> <font color="monochrome">uid</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>

*Returned Response:*




[GetAddressesResponse](#GetAddressesResponse)

Success. Returns an Address object containing a list of address saved in the account. Refer `GetAddressesResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "address": [
    {
      "landmark": "",
      "area_code": {
        "slug": "pincode",
        "id": 400093
      },
      "id": "8b526f521bb14a2593a8b9e3ce8c76b3",
      "state": "Maharashtra",
      "meta": {},
      "user_id": "8b526f521bb14a2593a8b9e3ce8c76b3",
      "country_code": "IND",
      "phone": 9915347757,
      "geo_location": {},
      "country": "India",
      "is_default_address": true,
      "is_active": true,
      "city": "Mumbai",
      "pincode": 400093,
      "checkout_mode": "self",
      "address_type": "home",
      "tags": [],
      "area": "Sector 127",
      "name": "abc",
      "email": "ankur@gofynd1.com",
      "address": "Megatron2",
      "store_name": "store123"
    }
  ]
}
```
</details>









---


### addAddress
Add address to an account



```javascript
// Promise
const promise = cart.addAddress({  body : value });

// Async/Await
const data = await cart.addAddress({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [Address](#Address) | yes | Request body |


Use this API to add an address to an account.

*Returned Response:*




[SaveAddressResponse](#SaveAddressResponse)

Success. Returns the address ID, a flag whether the address is set as default, and a success message. Refer `SaveAddressResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "id": "mongo_object_id",
  "is_default_address": true,
  "success": true
}
```
</details>









---


### getAddressById
Fetch a single address by its ID



```javascript
// Promise
const promise = cart.getAddressById({  id : value,
 cartId : value,
 mobileNo : value,
 checkoutMode : value,
 tags : value,
 isDefault : value });

// Async/Await
const data = await cart.getAddressById({  id : value,
 cartId : value,
 mobileNo : value,
 checkoutMode : value,
 tags : value,
 isDefault : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes |  |    
| cartId | string | no |  |    
| mobileNo | string | no |  |    
| checkoutMode | string | no |  |    
| tags | string | no |  |    
| isDefault | boolean | no |  |  



Use this API to get an addresses using its ID. If successful, returns a Address resource in the response body specified in `Address`. Attibutes listed below are optional <ul> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>

*Returned Response:*




[Address](#Address)

Success. Returns an Address object containing a list of address saved in the account. Refer `Address` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "landmark": "",
  "area_code": {
    "slug": "pincode",
    "id": 400093
  },
  "state": "Maharashtra",
  "meta": {},
  "user_id": "8b526f521bb14a2593a8b9e3ce8c76b3",
  "country_code": "IND",
  "phone": 9915347757,
  "geo_location": {},
  "country": "India",
  "is_default_address": true,
  "is_active": true,
  "city": "Mumbai",
  "pincode": 400093,
  "checkout_mode": "self",
  "address_type": "home",
  "uid": 1145,
  "tags": [],
  "area": "Sector 127",
  "name": "abc",
  "address_id": 1145,
  "email": "ankur@gofynd1.com",
  "address": "Megatron2",
  "store_name": "store123"
}
```
</details>









---


### updateAddress
Update address added to an account



```javascript
// Promise
const promise = cart.updateAddress({  id : value,
 body : value });

// Async/Await
const data = await cart.updateAddress({  id : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | ID allotted to the selected address |  
| body | [Address](#Address) | yes | Request body |


<p>Use this API to update an existing address in the account. Request object should contain attributes mentioned in  <font color="blue">Address </font> can be updated. These attributes are:</p> <ul> <li> <font color="monochrome">is_default_address</font></li> <li> <font color="monochrome">landmark</font></li> <li> <font color="monochrome">area</font></li> <li> <font color="monochrome">pincode</font></li> <li> <font color="monochrome">email</font></li> <li> <font color="monochrome">address_type</font></li> <li> <font color="monochrome">name</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">address</font></li> </ul>

*Returned Response:*




[UpdateAddressResponse](#UpdateAddressResponse)

Success. Returns the address ID and a message indicating a successful address updation.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "is_updated": true,
  "id": "<mongo_object_id>",
  "is_default_address": true,
  "success": true
}
```
</details>









---


### removeAddress
Remove address associated with an account



```javascript
// Promise
const promise = cart.removeAddress({  id : value });

// Async/Await
const data = await cart.removeAddress({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | ID allotted to the selected address |  



Use this API to delete an address by its ID. This will returns an object that will indicate whether the address was deleted successfully or not.

*Returned Response:*




[DeleteAddressResponse](#DeleteAddressResponse)

Returns a Status object indicating the success or failure of address deletion.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "id": "<mongo_object_id>",
  "is_deleted": true
}
```
</details>









---


### selectAddress
Select an address from available addresses



```javascript
// Promise
const promise = cart.selectAddress({  body : value,
 cartId : value,
 i : value,
 b : value });

// Async/Await
const data = await cart.selectAddress({  body : value,
 cartId : value,
 i : value,
 b : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| cartId | string | no |  |    
| i | boolean | no |  |    
| b | boolean | no |  |  
| body | [SelectCartAddressRequest](#SelectCartAddressRequest) | yes | Request body |


<p>Select Address from all addresses associated with the account in order to ship the cart items to that address, otherwise default address will be selected implicitly. See `SelectCartAddressRequest` in schema of request body for the list of attributes needed to select Address from account. On successful request, this API returns a Cart object. Below address attributes are required. <ul> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">billing_address_id</font></li> <li> <font color="monochrome">uid</font></li> </ul></p>

*Returned Response:*




[CartDetailResponse](#CartDetailResponse)

Success. Returns a Cart object as shown below. Refer `CartDetailResponse` for more details.  .




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "is_valid": true,
  "breakup_values": {
    "raw": {
      "cod_charge": 0,
      "convenience_fee": 0,
      "coupon": -2250,
      "delivery_charge": 0,
      "discount": 0,
      "fynd_cash": 0,
      "gst_charges": 315.86,
      "mrp_total": 5198,
      "subtotal": 5198,
      "total": 2948,
      "vog": 2632.15,
      "you_saved": 0
    },
    "display": [
      {
        "display": "MRP Total",
        "key": "mrp_total",
        "value": 5198,
        "currency_code": "INR"
      },
      {
        "display": "Subtotal",
        "key": "subtotal",
        "value": 5198,
        "currency_code": "INR"
      },
      {
        "display": "Coupon",
        "key": "coupon",
        "value": -2250,
        "currency_code": "INR"
      },
      {
        "display": "Total",
        "key": "total",
        "value": 2948,
        "currency_code": "INR"
      }
    ],
    "coupon": {
      "type": "cash",
      "code": "PRISMC22250111",
      "uid": 17743,
      "value": 2250,
      "is_applied": true,
      "message": "coupn applied"
    },
    "loyalty_points": {
      "total": 0,
      "applicable": 0,
      "is_applied": false,
      "description": "Your cashback, referrals, and refund amount get credited to Fynd Cash which can be redeemed while placing an order."
    }
  },
  "items": [
    {
      "message": "",
      "quantity": 1,
      "availability": {
        "sizes": [
          "M",
          "S",
          "L",
          "XXL",
          "XL"
        ],
        "other_store_quantity": 10,
        "out_of_stock": false,
        "deliverable": true,
        "is_valid": true
      },
      "coupon_message": "PRISMC22250111 coupon applied",
      "price": {
        "base": {
          "add_on": 3199,
          "marked": 3199,
          "effective": 3199,
          "selling": 3199,
          "currency_code": "INR"
        },
        "converted": {
          "add_on": 3199,
          "marked": 3199,
          "effective": 3199,
          "selling": 3199,
          "currency_code": "INR"
        }
      },
      "bulk_offer": {},
      "article": {
        "type": "article",
        "uid": "381_610_IGPL01_LETTER19APINK_S",
        "size": "S",
        "seller": {
          "uid": 381,
          "name": "INTERSOURCE GARMENTS PVT LTD"
        },
        "store": {
          "uid": 3009,
          "name": "Kormangala"
        },
        "quantity": 11,
        "price": {
          "base": {
            "marked": 3199,
            "effective": 3199,
            "currency_code": "INR"
          },
          "converted": {
            "marked": 3199,
            "effective": 3199,
            "currency_code": "INR"
          }
        }
      },
      "product": {
        "type": "product",
        "uid": 857596,
        "name": "Pink Solid Hoodie",
        "slug": "883-police-pink-solid-hoodie-857596-111bdc",
        "brand": {
          "uid": 610,
          "name": "883 Police"
        },
        "categories": [
          {
            "uid": 144,
            "name": "Hoodies"
          }
        ],
        "images": [
          {
            "aspect_ratio": "16:25",
            "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/610_LETTER19APINK/1_1553062658148.jpg",
            "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/610_LETTER19APINK/1_1553062658148.jpg"
          }
        ],
        "action": {
          "type": "product",
          "url": "https://api.addsale.com/platform/content/v1/products/883-police-pink-solid-hoodie-857596-111bdc/",
          "query": {
            "product_slug": [
              "883-police-pink-solid-hoodie-857596-111bdc"
            ]
          }
        }
      },
      "key": "857596_S",
      "discount": ""
    },
    {
      "message": "",
      "quantity": 1,
      "availability": {
        "sizes": [
          "L",
          "XL",
          "XXL"
        ],
        "other_store_quantity": 1,
        "out_of_stock": false,
        "deliverable": true,
        "is_valid": true
      },
      "coupon_message": "PRISMC22250111 coupon applied",
      "price": {
        "base": {
          "add_on": 1999,
          "marked": 1999,
          "effective": 1999,
          "selling": 1999,
          "currency_code": "INR"
        },
        "converted": {
          "add_on": 1999,
          "marked": 1999,
          "effective": 1999,
          "selling": 1999,
          "currency_code": "INR"
        }
      },
      "bulk_offer": {},
      "article": {
        "type": "article",
        "uid": "381_610_IGPL01_SPIRAL19ANAVY_L",
        "size": "L",
        "seller": {
          "uid": 381,
          "name": "INTERSOURCE GARMENTS PVT LTD"
        },
        "store": {
          "uid": 3009,
          "name": "Kormangala"
        },
        "quantity": 2,
        "price": {
          "base": {
            "marked": 1999,
            "effective": 1999,
            "currency_code": "INR"
          },
          "converted": {
            "marked": 1999,
            "effective": 1999,
            "currency_code": "INR"
          }
        }
      },
      "product": {
        "type": "product",
        "uid": 820312,
        "name": "Navy Blue Melange Shorts",
        "slug": "883-police-navy-blue-melange-shorts-820312-4943a8",
        "brand": {
          "uid": 610,
          "name": "883 Police"
        },
        "categories": [
          {
            "uid": 193,
            "name": "Shorts"
          }
        ],
        "images": [
          {
            "aspect_ratio": "16:25",
            "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/610_SPIRAL19ANAVY/1_1549105947281.jpg",
            "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/610_SPIRAL19ANAVY/1_1549105947281.jpg"
          }
        ],
        "action": {
          "type": "product",
          "url": "https://api.addsale.com/platform/content/v1/products/883-police-navy-blue-melange-shorts-820312-4943a8/",
          "query": {
            "product_slug": [
              "883-police-navy-blue-melange-shorts-820312-4943a8"
            ]
          }
        }
      },
      "key": "820312_L",
      "discount": ""
    }
  ],
  "delivery_charge_info": "",
  "coupon_text": "View all offers",
  "uid": "7477",
  "gstin": null,
  "checkout_mode": "self",
  "last_modified": "Fri, 23 Aug 2019 08:03:12 GMT",
  "restrict_checkout": false
}
```
</details>









---


### selectPaymentMode
Update cart payment



```javascript
// Promise
const promise = cart.selectPaymentMode({  body : value,
 id : value });

// Async/Await
const data = await cart.selectPaymentMode({  body : value,
 id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| id | string | no |  |  
| body | [UpdateCartPaymentRequest](#UpdateCartPaymentRequest) | yes | Request body |


Use this API to update cart payment.

*Returned Response:*




[CartDetailResponse](#CartDetailResponse)

Success. Returns a Cart object as shown below. Refer `CartDetailResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "error_message": "Note: Your order delivery will be delayed by 7-10 Days",
  "user_type": "Store User",
  "cod_charges": 0,
  "order_id": null,
  "cod_available": true,
  "cod_message": "No additional COD charges applicable",
  "delivery_charges": 0,
  "delivery_charge_order_value": 0,
  "store_code": "",
  "store_emps": [],
  "breakup_values": {
    "raw": {
      "cod_charge": 0,
      "convenience_fee": 0,
      "coupon": -2250,
      "delivery_charge": 0,
      "discount": 0,
      "fynd_cash": 0,
      "gst_charges": 315.86,
      "mrp_total": 5198,
      "subtotal": 5198,
      "total": 2948,
      "vog": 2632.15,
      "you_saved": 0
    },
    "display": [
      {
        "display": "MRP Total",
        "key": "mrp_total",
        "value": 5198,
        "currency_code": "INR"
      },
      {
        "display": "Subtotal",
        "key": "subtotal",
        "value": 5198,
        "currency_code": "INR"
      },
      {
        "display": "Coupon",
        "key": "coupon",
        "value": -2250,
        "currency_code": "INR"
      },
      {
        "display": "Total",
        "key": "total",
        "value": 2948,
        "currency_code": "INR"
      }
    ],
    "coupon": {
      "type": "cash",
      "code": "PRISMC22250111",
      "uid": 17743,
      "value": 2250,
      "is_applied": true,
      "message": "coupn applied"
    },
    "loyalty_points": {
      "total": 0,
      "applicable": 0,
      "is_applied": false,
      "description": "Your cashback, referrals, and refund amount get credited to Fynd Cash which can be redeemed while placing an order."
    }
  },
  "items": [
    {
      "message": "",
      "quantity": 1,
      "availability": {
        "sizes": [
          "M",
          "S",
          "L",
          "XXL",
          "XL"
        ],
        "other_store_quantity": 10,
        "out_of_stock": false,
        "deliverable": true,
        "is_valid": true
      },
      "coupon_message": "PRISMC22250111 coupon applied",
      "price": {
        "base": {
          "add_on": 3199,
          "marked": 3199,
          "effective": 3199,
          "selling": 3199,
          "currency_code": "INR"
        },
        "converted": {
          "add_on": 3199,
          "marked": 3199,
          "effective": 3199,
          "selling": 3199,
          "currency_code": "INR"
        }
      },
      "bulk_offer": {},
      "article": {
        "type": "article",
        "uid": "381_610_IGPL01_LETTER19APINK_S",
        "size": "S",
        "seller": {
          "uid": 381,
          "name": "INTERSOURCE GARMENTS PVT LTD"
        },
        "store": {
          "uid": 3009,
          "name": "Kormangala"
        },
        "quantity": 11,
        "price": {
          "base": {
            "marked": 3199,
            "effective": 3199,
            "currency_code": "INR"
          },
          "converted": {
            "marked": 3199,
            "effective": 3199,
            "currency_code": "INR"
          }
        }
      },
      "product": {
        "type": "product",
        "uid": 857596,
        "name": "Pink Solid Hoodie",
        "slug": "883-police-pink-solid-hoodie-857596-111bdc",
        "brand": {
          "uid": 610,
          "name": "883 Police"
        },
        "categories": [
          {
            "uid": 144,
            "name": "Hoodies"
          }
        ],
        "images": [
          {
            "aspect_ratio": "16:25",
            "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/610_LETTER19APINK/1_1553062658148.jpg",
            "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/610_LETTER19APINK/1_1553062658148.jpg"
          }
        ],
        "action": {
          "type": "product",
          "url": "https://api.addsale.com/platform/content/v1/products/883-police-pink-solid-hoodie-857596-111bdc/",
          "query": {
            "product_slug": [
              "883-police-pink-solid-hoodie-857596-111bdc"
            ]
          }
        }
      },
      "key": "857596_S",
      "discount": ""
    },
    {
      "message": "",
      "quantity": 1,
      "availability": {
        "sizes": [
          "L",
          "XL",
          "XXL"
        ],
        "other_store_quantity": 1,
        "out_of_stock": false,
        "deliverable": true,
        "is_valid": true
      },
      "coupon_message": "PRISMC22250111 coupon applied",
      "price": {
        "base": {
          "add_on": 1999,
          "marked": 1999,
          "effective": 1999,
          "selling": 1999,
          "currency_code": "INR"
        },
        "converted": {
          "add_on": 1999,
          "marked": 1999,
          "effective": 1999,
          "selling": 1999,
          "currency_code": "INR"
        }
      },
      "bulk_offer": {},
      "article": {
        "type": "article",
        "uid": "381_610_IGPL01_SPIRAL19ANAVY_L",
        "size": "L",
        "seller": {
          "uid": 381,
          "name": "INTERSOURCE GARMENTS PVT LTD"
        },
        "store": {
          "uid": 3009,
          "name": "Kormangala"
        },
        "quantity": 2,
        "price": {
          "base": {
            "marked": 1999,
            "effective": 1999,
            "currency_code": "INR"
          },
          "converted": {
            "marked": 1999,
            "effective": 1999,
            "currency_code": "INR"
          }
        }
      },
      "product": {
        "type": "product",
        "uid": 820312,
        "name": "Navy Blue Melange Shorts",
        "slug": "883-police-navy-blue-melange-shorts-820312-4943a8",
        "brand": {
          "uid": 610,
          "name": "883 Police"
        },
        "categories": [
          {
            "uid": 193,
            "name": "Shorts"
          }
        ],
        "images": [
          {
            "aspect_ratio": "16:25",
            "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/610_SPIRAL19ANAVY/1_1549105947281.jpg",
            "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/610_SPIRAL19ANAVY/1_1549105947281.jpg"
          }
        ],
        "action": {
          "type": "product",
          "url": "https://api.addsale.com/platform/content/v1/products/883-police-navy-blue-melange-shorts-820312-4943a8/",
          "query": {
            "product_slug": [
              "883-police-navy-blue-melange-shorts-820312-4943a8"
            ]
          }
        }
      },
      "key": "820312_L",
      "discount": ""
    }
  ],
  "delivery_charge_info": "",
  "coupon_text": "View all offers",
  "cart_id": 7477,
  "uid": "7477",
  "gstin": null,
  "checkout_mode": "self",
  "last_modified": "Fri, 23 Aug 2019 08:03:04 GMT",
  "restrict_checkout": false,
  "is_valid": true
}
```
</details>









---


### validateCouponForPayment
Verify the coupon eligibility against the payment mode



```javascript
// Promise
const promise = cart.validateCouponForPayment({  id : value,
 addressId : value,
 paymentMode : value,
 paymentIdentifier : value,
 aggregatorName : value,
 merchantCode : value });

// Async/Await
const data = await cart.validateCouponForPayment({  id : value,
 addressId : value,
 paymentMode : value,
 paymentIdentifier : value,
 aggregatorName : value,
 merchantCode : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| id | string | no |  |    
| addressId | string | no |  |    
| paymentMode | string | no |  |    
| paymentIdentifier | string | no |  |    
| aggregatorName | string | no |  |    
| merchantCode | string | no |  |  



Use this API to validate a coupon against the payment mode such as NetBanking, Wallet, UPI etc.

*Returned Response:*




[PaymentCouponValidate](#PaymentCouponValidate)

Success. Returns a success message and the coupon validity. Refer `PaymentCouponValidate` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "message": "",
  "coupon_validity": {
    "valid": true,
    "discount": 499.5,
    "code": "testpayment",
    "display_message_en": "",
    "title": "Coupon value will change."
  }
}
```
</details>









---


### getShipments
Get delivery date and options before checkout



```javascript
// Promise
const promise = cart.getShipments({  p : value,
 id : value,
 addressId : value,
 areaCode : value });

// Async/Await
const data = await cart.getShipments({  p : value,
 id : value,
 addressId : value,
 areaCode : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| p | boolean | no | This is a boolean value. Select `true` for getting a payment option in response. |    
| id | string | no | The unique identifier of the cart |    
| addressId | string | no | ID allotted to the selected address |    
| areaCode | string | no | The PIN Code of the destination address, e.g. 400059 |  



Use this API to get shipment details, expected delivery date, items and price breakup of the shipment.

*Returned Response:*




[CartShipmentsResponse](#CartShipmentsResponse)

Success. Returns delivery promise along with shipment details and price breakup. Refer `CartShipmentsResponse` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Shipment Generated</i></summary>

```json
{
  "value": {
    "items": [],
    "cart_id": 7501,
    "uid": "7501",
    "success": true,
    "error_message": "Note: Your order delivery will be delayed by 7-10 Days",
    "payment_options": {
      "payment_option": [
        {
          "name": "COD",
          "display_name": "Cash on Delivery",
          "display_priority": 1,
          "payment_mode_id": 11,
          "logo": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/cod.png",
          "logo_url": {
            "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/cod.png",
            "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/cod.png"
          },
          "list": []
        },
        {
          "name": "CARD",
          "display_priority": 2,
          "payment_mode_id": 2,
          "display_name": "Card",
          "list": []
        },
        {
          "name": "NB",
          "display_priority": 3,
          "payment_mode_id": 3,
          "display_name": "Net Banking",
          "list": [
            {
              "aggregator_name": "Razorpay",
              "bank_name": "ICICI Bank",
              "bank_code": "ICIC",
              "url": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/NB_ICICI.png",
              "logo_url": {
                "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/NB_ICICI.png",
                "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/NB_ICICI.png"
              },
              "merchant_code": "NB_ICICI",
              "display_priority": 1
            }
          ]
        },
        {
          "name": "WL",
          "display_priority": 4,
          "payment_mode_id": 4,
          "display_name": "Wallet",
          "list": [
            {
              "wallet_name": "Paytm",
              "wallet_code": "paytm",
              "wallet_id": 4,
              "merchant_code": "PAYTM",
              "logo_url": {
                "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/paytm_logo_small.png",
                "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/paytm_logo_large.png"
              },
              "aggregator_name": "Juspay",
              "display_priority": 1
            }
          ]
        },
        {
          "name": "UPI",
          "display_priority": 9,
          "payment_mode_id": 6,
          "display_name": "UPI",
          "list": [
            {
              "aggregator_name": "UPI_Razorpay",
              "name": "UPI",
              "display_name": "BHIM UPI",
              "code": "UPI",
              "logo_url": {
                "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/upi_100x78.png",
                "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/upi_150x100.png"
              },
              "merchant_code": "UPI",
              "timeout": 240,
              "retry_count": 0,
              "fynd_vpa": "shopsense.rzp@hdfcbank",
              "intent_flow": true,
              "intent_app_error_list": [
                "com.csam.icici.bank.imobile",
                "in.org.npci.upiapp",
                "com.whatsapp"
              ]
            }
          ]
        },
        {
          "name": "PL",
          "display_priority": 11,
          "payment_mode_id": 1,
          "display_name": "Pay Later",
          "list": [
            {
              "aggregator_name": "Simpl",
              "name": "Simpl",
              "code": "simpl",
              "merchant_code": "SIMPL",
              "logo": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/simpl_logo.png",
              "logo_url": {
                "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/simpl_logo.png",
                "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/simpl_logo.png"
              }
            }
          ]
        }
      ],
      "payment_flows": {
        "Simpl": {
          "data": {
            "gateway": {
              "route": "simpl",
              "entity": "sdk",
              "is_customer_validation_required": true,
              "cust_validation_url": "https://api.addsale.com/gringotts/api/v1/validate-customer/",
              "sdk": {
                "config": {
                  "redirect": false,
                  "callback_url": null,
                  "action_url": "https://api.addsale.com/avis/api/v1/payments/charge-gringotts-transaction/"
                },
                "data": {
                  "user_phone": "8452996729",
                  "user_email": "paymentsdummy@gofynd.com"
                }
              },
              "return_url": null
            }
          },
          "api_link": "",
          "payment_flow": "sdk"
        },
        "Juspay": {
          "data": {},
          "api_link": "https://sandbox.juspay.in/txns",
          "payment_flow": "api"
        },
        "Razorpay": {
          "data": {},
          "api_link": "",
          "payment_flow": "sdk"
        },
        "UPI_Razorpay": {
          "data": {},
          "api_link": "https://api.addsale.com/gringotts/api/v1/external/payment-initialisation/",
          "payment_flow": "api"
        },
        "Fynd": {
          "data": {},
          "api_link": "",
          "payment_flow": "api"
        }
      },
      "default": {}
    },
    "user_type": "Store User",
    "cod_charges": 0,
    "order_id": null,
    "cod_available": true,
    "cod_message": "No additional COD charges applicable",
    "delivery_charges": 0,
    "delivery_charge_order_value": 0,
    "delivery_slots": [
      {
        "date": "Sat, 24 Aug",
        "delivery_slot": [
          {
            "delivery_slot_timing": "By 9:00 PM",
            "default": true,
            "delivery_slot_id": 1
          }
        ]
      }
    ],
    "store_code": "",
    "store_emps": [],
    "breakup_values": {
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
      },
      "raw": {
        "cod_charge": 0,
        "convenience_fee": 0,
        "coupon": 0,
        "delivery_charge": 0,
        "discount": 0,
        "fynd_cash": 0,
        "gst_charges": 214.18,
        "mrp_total": 1999,
        "subtotal": 1999,
        "total": 1999,
        "vog": 1784.82,
        "you_saved": 0
      },
      "display": [
        {
          "display": "MRP Total",
          "key": "mrp_total",
          "value": 1999,
          "currency_code": "INR"
        },
        {
          "display": "Subtotal",
          "key": "subtotal",
          "value": 1999,
          "currency_code": "INR"
        },
        {
          "display": "Total",
          "key": "total",
          "value": 1999,
          "currency_code": "INR"
        }
      ]
    },
    "shipments": [
      {
        "fulfillment_id": 3009,
        "shipment_type": "single_shipment",
        "fulfillment_type": "store",
        "dp_id": "29",
        "dp_options": {
          "4": {
            "f_priority": 4,
            "r_priority": 5,
            "is_cod": true,
            "is_prepaid": true,
            "is_reverse": true
          },
          "7": {
            "f_priority": 3,
            "r_priority": 4,
            "is_cod": true,
            "is_prepaid": true,
            "is_reverse": true
          },
          "29": {
            "f_priority": 1,
            "r_priority": 2,
            "is_cod": true,
            "is_prepaid": true,
            "is_reverse": true
          }
        },
        "promise": {
          "timestamp": {
            "min": 1566678108,
            "max": 1567023708
          },
          "formatted": {
            "min": "Aug 24",
            "max": "Aug 28"
          }
        },
        "box_type": "Small Courier bag",
        "shipments": 1,
        "items": [
          {
            "quantity": 1,
            "product": {
              "type": "product",
              "uid": 820312,
              "name": "Navy Blue Melange Shorts",
              "slug": "883-police-navy-blue-melange-shorts-820312-4943a8",
              "brand": {
                "uid": 610,
                "name": "883 Police"
              },
              "categories": [
                {
                  "uid": 193,
                  "name": "Shorts"
                }
              ],
              "images": [
                {
                  "aspect_ratio": "16:25",
                  "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/610_SPIRAL19ANAVY/1_1549105947281.jpg",
                  "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/610_SPIRAL19ANAVY/1_1549105947281.jpg"
                }
              ],
              "action": {
                "type": "product",
                "url": "https://api.addsale.com/platform/content/v1/products/883-police-navy-blue-melange-shorts-820312-4943a8/",
                "query": {
                  "product_slug": [
                    "883-police-navy-blue-melange-shorts-820312-4943a8"
                  ]
                }
              }
            },
            "discount": "",
            "bulk_offer": {},
            "key": "820312_L",
            "price": {
              "base": {
                "add_on": 1999,
                "marked": 1999,
                "effective": 1999,
                "selling": 1999,
                "currency_code": "INR"
              },
              "converted": {
                "add_on": 1999,
                "marked": 1999,
                "effective": 1999,
                "selling": 1999,
                "currency_code": "INR"
              }
            },
            "article": {
              "type": "article",
              "uid": "381_610_IGPL01_SPIRAL19ANAVY_L",
              "size": "L",
              "seller": {
                "uid": 381,
                "name": "INTERSOURCE GARMENTS PVT LTD"
              },
              "store": {
                "uid": 3009,
                "name": "Kormangala"
              },
              "quantity": 2,
              "price": {
                "base": {
                  "marked": 1999,
                  "effective": 1999,
                  "currency_code": "INR"
                },
                "converted": {
                  "marked": 1999,
                  "effective": 1999,
                  "currency_code": "INR"
                }
              }
            },
            "availability": {
              "sizes": [
                "L",
                "XL",
                "XXL"
              ],
              "other_store_quantity": 1,
              "out_of_stock": false,
              "deliverable": true,
              "is_valid": true
            },
            "coupon_message": "",
            "message": ""
          }
        ]
      }
    ],
    "delivery_charge_info": "",
    "coupon_text": "View all offers",
    "gstin": null,
    "checkout_mode": "self",
    "last_modified": "Thu, 22 Aug 2019 20:21:48 GMT",
    "restrict_checkout": false,
    "is_valid": true
  }
}
```
</details>

<details>
<summary><i>&nbsp; Shipment Generation Failed</i></summary>

```json
{
  "value": {
    "items": [],
    "cart_id": 7501,
    "uid": "7501",
    "success": true,
    "error_message": "Note: Your order delivery will be delayed by 7-10 Days",
    "payment_options": {
      "payment_option": [
        {
          "name": "COD",
          "display_name": "Cash on Delivery",
          "display_priority": 1,
          "payment_mode_id": 11,
          "logo": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/cod.png",
          "logo_url": {
            "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/cod.png",
            "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/cod.png"
          },
          "list": []
        },
        {
          "name": "CARD",
          "display_priority": 2,
          "payment_mode_id": 2,
          "display_name": "Card",
          "list": []
        },
        {
          "name": "NB",
          "display_priority": 3,
          "payment_mode_id": 3,
          "display_name": "Net Banking",
          "list": [
            {
              "aggregator_name": "Razorpay",
              "bank_name": "ICICI Bank",
              "bank_code": "ICIC",
              "url": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/NB_ICICI.png",
              "logo_url": {
                "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/NB_ICICI.png",
                "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/NB_ICICI.png"
              },
              "merchant_code": "NB_ICICI",
              "display_priority": 1
            }
          ]
        },
        {
          "name": "WL",
          "display_priority": 4,
          "payment_mode_id": 4,
          "display_name": "Wallet",
          "list": [
            {
              "wallet_name": "Paytm",
              "wallet_code": "paytm",
              "wallet_id": 4,
              "merchant_code": "PAYTM",
              "logo_url": {
                "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/paytm_logo_small.png",
                "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/paytm_logo_large.png"
              },
              "aggregator_name": "Juspay",
              "display_priority": 1
            }
          ]
        },
        {
          "name": "UPI",
          "display_priority": 9,
          "payment_mode_id": 6,
          "display_name": "UPI",
          "list": [
            {
              "aggregator_name": "UPI_Razorpay",
              "name": "UPI",
              "display_name": "BHIM UPI",
              "code": "UPI",
              "logo_url": {
                "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/upi_100x78.png",
                "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/upi_150x100.png"
              },
              "merchant_code": "UPI",
              "timeout": 240,
              "retry_count": 0,
              "fynd_vpa": "shopsense.rzp@hdfcbank",
              "intent_flow": true,
              "intent_app_error_list": [
                "com.csam.icici.bank.imobile",
                "in.org.npci.upiapp",
                "com.whatsapp"
              ]
            }
          ]
        },
        {
          "name": "PL",
          "display_priority": 11,
          "payment_mode_id": 1,
          "display_name": "Pay Later",
          "list": [
            {
              "aggregator_name": "Simpl",
              "name": "Simpl",
              "code": "simpl",
              "merchant_code": "SIMPL",
              "logo": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/simpl_logo.png",
              "logo_url": {
                "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/simpl_logo.png",
                "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/simpl_logo.png"
              }
            }
          ]
        }
      ],
      "payment_flows": {
        "Simpl": {
          "data": {
            "gateway": {
              "route": "simpl",
              "entity": "sdk",
              "is_customer_validation_required": true,
              "cust_validation_url": "https://api.addsale.com/gringotts/api/v1/validate-customer/",
              "sdk": {
                "config": {
                  "redirect": false,
                  "callback_url": null,
                  "action_url": "https://api.addsale.com/avis/api/v1/payments/charge-gringotts-transaction/"
                },
                "data": {
                  "user_phone": "8452996729",
                  "user_email": "paymentsdummy@gofynd.com"
                }
              },
              "return_url": null
            }
          },
          "api_link": "",
          "payment_flow": "sdk"
        },
        "Juspay": {
          "data": {},
          "api_link": "https://sandbox.juspay.in/txns",
          "payment_flow": "api"
        },
        "Razorpay": {
          "data": {},
          "api_link": "",
          "payment_flow": "sdk"
        },
        "UPI_Razorpay": {
          "data": {},
          "api_link": "https://api.addsale.com/gringotts/api/v1/external/payment-initialisation/",
          "payment_flow": "api"
        },
        "Fynd": {
          "data": {},
          "api_link": "",
          "payment_flow": "api"
        }
      },
      "default": {}
    },
    "user_type": "Store User",
    "cod_charges": 0,
    "order_id": null,
    "cod_available": true,
    "cod_message": "No additional COD charges applicable",
    "delivery_charges": 0,
    "delivery_charge_order_value": 0,
    "delivery_slots": [
      {
        "date": "Sat, 24 Aug",
        "delivery_slot": [
          {
            "delivery_slot_timing": "By 9:00 PM",
            "default": true,
            "delivery_slot_id": 1
          }
        ]
      }
    ],
    "store_code": "",
    "store_emps": [],
    "breakup_values": {
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
      },
      "raw": {
        "cod_charge": 0,
        "convenience_fee": 0,
        "coupon": 0,
        "delivery_charge": 0,
        "discount": 0,
        "fynd_cash": 0,
        "gst_charges": 214.18,
        "mrp_total": 1999,
        "subtotal": 1999,
        "total": 1999,
        "vog": 1784.82,
        "you_saved": 0
      },
      "display": [
        {
          "display": "MRP Total",
          "key": "mrp_total",
          "value": 1999,
          "currency_code": "INR"
        },
        {
          "display": "Subtotal",
          "key": "subtotal",
          "value": 1999,
          "currency_code": "INR"
        },
        {
          "display": "Total",
          "key": "total",
          "value": 1999,
          "currency_code": "INR"
        }
      ]
    },
    "shipments": [],
    "message": "Shipments could not be generated. Please Try again after some time.",
    "delivery_charge_info": "",
    "coupon_text": "View all offers",
    "gstin": null,
    "checkout_mode": "self",
    "last_modified": "Thu, 22 Aug 2019 20:21:48 GMT",
    "restrict_checkout": false,
    "is_valid": false
  }
}
```
</details>

</details>









---


### checkoutCart
Checkout all items in the cart



```javascript
// Promise
const promise = cart.checkoutCart({  body : value });

// Async/Await
const data = await cart.checkoutCart({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CartCheckoutDetailRequest](#CartCheckoutDetailRequest) | yes | Request body |


Use this API to checkout all items in the cart for payment and order generation. For COD, order will be directly generated, whereas for other checkout modes, user will be redirected to a payment gateway.

*Returned Response:*




[CartCheckoutResponse](#CartCheckoutResponse)

Success. Returns the status of cart checkout. Refer `CartCheckoutResponseSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Address id not found</i></summary>

```json
{
  "value": {
    "success": false,
    "message": "No address found with address id {address_id}"
  }
}
```
</details>

<details>
<summary><i>&nbsp; Missing address_id</i></summary>

```json
{
  "value": {
    "address_id": [
      "Missing data for required field."
    ]
  }
}
```
</details>

<details>
<summary><i>&nbsp; Successful checkout cod payment</i></summary>

```json
{
  "value": {
    "success": true,
    "cart": {
      "success": true,
      "error_message": "Note: Your order delivery will be delayed by 7-10 Days",
      "payment_options": {
        "payment_option": [
          {
            "name": "COD",
            "display_name": "Cash on Delivery",
            "display_priority": 1,
            "payment_mode_id": 11,
            "logo": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/cod.png",
            "logo_url": {
              "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/cod.png",
              "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/cod.png"
            },
            "list": []
          },
          {
            "name": "CARD",
            "display_priority": 2,
            "payment_mode_id": 2,
            "display_name": "Card",
            "list": []
          },
          {
            "name": "NB",
            "display_priority": 3,
            "payment_mode_id": 3,
            "display_name": "Net Banking",
            "list": [
              {
                "aggregator_name": "Razorpay",
                "bank_name": "ICICI Bank",
                "bank_code": "ICIC",
                "url": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/NB_ICICI.png",
                "logo_url": {
                  "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/NB_ICICI.png",
                  "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/NB_ICICI.png"
                },
                "merchant_code": "NB_ICICI",
                "display_priority": 1
              }
            ]
          },
          {
            "name": "WL",
            "display_priority": 4,
            "payment_mode_id": 4,
            "display_name": "Wallet",
            "list": [
              {
                "wallet_name": "Paytm",
                "wallet_code": "paytm",
                "wallet_id": 4,
                "merchant_code": "PAYTM",
                "logo_url": {
                  "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/paytm_logo_small.png",
                  "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/paytm_logo_large.png"
                },
                "aggregator_name": "Juspay",
                "display_priority": 1
              }
            ]
          },
          {
            "name": "UPI",
            "display_priority": 9,
            "payment_mode_id": 6,
            "display_name": "UPI",
            "list": [
              {
                "aggregator_name": "UPI_Razorpay",
                "name": "UPI",
                "display_name": "BHIM UPI",
                "code": "UPI",
                "logo_url": {
                  "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/upi_100x78.png",
                  "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/upi_150x100.png"
                },
                "merchant_code": "UPI",
                "timeout": 240,
                "retry_count": 0,
                "fynd_vpa": "shopsense.rzp@hdfcbank",
                "intent_flow": true,
                "intent_app_error_list": [
                  "com.csam.icici.bank.imobile",
                  "in.org.npci.upiapp",
                  "com.whatsapp"
                ]
              }
            ]
          },
          {
            "name": "PL",
            "display_priority": 11,
            "payment_mode_id": 1,
            "display_name": "Pay Later",
            "list": [
              {
                "aggregator_name": "Simpl",
                "name": "Simpl",
                "code": "simpl",
                "merchant_code": "SIMPL",
                "logo": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/simpl_logo.png",
                "logo_url": {
                  "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/simpl_logo.png",
                  "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/simpl_logo.png"
                }
              }
            ]
          }
        ],
        "payment_flows": {
          "Simpl": {
            "data": {
              "gateway": {
                "route": "simpl",
                "entity": "sdk",
                "is_customer_validation_required": true,
                "cust_validation_url": "https://api.addsale.com/gringotts/api/v1/validate-customer/",
                "sdk": {
                  "config": {
                    "redirect": false,
                    "callback_url": null,
                    "action_url": "https://api.addsale.com/avis/api/v1/payments/charge-gringotts-transaction/"
                  },
                  "data": {
                    "user_phone": "8452996729",
                    "user_email": "paymentsdummy@gofynd.com"
                  }
                },
                "return_url": null
              }
            },
            "api_link": "",
            "payment_flow": "sdk"
          },
          "Juspay": {
            "data": {},
            "api_link": "https://sandbox.juspay.in/txns",
            "payment_flow": "api"
          },
          "Razorpay": {
            "data": {},
            "api_link": "",
            "payment_flow": "sdk"
          },
          "UPI_Razorpay": {
            "data": {},
            "api_link": "https://api.addsale.com/gringotts/api/v1/external/payment-initialisation/",
            "payment_flow": "api"
          },
          "Fynd": {
            "data": {},
            "api_link": "",
            "payment_flow": "api"
          }
        },
        "default": {}
      },
      "user_type": "Store User",
      "cod_charges": 0,
      "order_id": "FY5D5E215CF287584CE6",
      "cod_available": true,
      "cod_message": "No additional COD charges applicable",
      "delivery_charges": 0,
      "delivery_charge_order_value": 0,
      "delivery_slots": [
        {
          "date": "Sat, 24 Aug",
          "delivery_slot": [
            {
              "delivery_slot_timing": "By 9:00 PM",
              "default": true,
              "delivery_slot_id": 1
            }
          ]
        }
      ],
      "store_code": "",
      "store_emps": [],
      "breakup_values": {
        "coupon": {
          "type": "cash",
          "code": "",
          "uid": null,
          "value": 0,
          "is_applied": false,
          "message": "Sorry! Invalid Coupon"
        },
        "loyalty_points": {
          "total": 0,
          "applicable": 0,
          "is_applied": false,
          "description": "Your cashback, referrals, and refund amount get credited to Fynd Cash which can be redeemed while placing an order."
        },
        "raw": {
          "cod_charge": 0,
          "convenience_fee": 0,
          "coupon": 0,
          "delivery_charge": 0,
          "discount": 0,
          "fynd_cash": 0,
          "gst_charges": 214.18,
          "mrp_total": 1999,
          "subtotal": 1999,
          "total": 1999,
          "vog": 1784.82,
          "you_saved": 0
        },
        "display": [
          {
            "display": "MRP Total",
            "key": "mrp_total",
            "value": 1999,
            "currency_code": "INR"
          },
          {
            "display": "Subtotal",
            "key": "subtotal",
            "value": 1999,
            "currency_code": "INR"
          },
          {
            "display": "Total",
            "key": "total",
            "value": 1999,
            "currency_code": "INR"
          }
        ]
      },
      "items": [
        {
          "key": "820312_L",
          "message": "",
          "bulk_offer": {},
          "price": {
            "base": {
              "add_on": 1999,
              "marked": 1999,
              "effective": 1999,
              "selling": 1999,
              "currency_code": "INR"
            },
            "converted": {
              "add_on": 1999,
              "marked": 1999,
              "effective": 1999,
              "selling": 1999,
              "currency_code": "INR"
            }
          },
          "quantity": 1,
          "discount": "",
          "product": {
            "type": "product",
            "uid": 820312,
            "name": "Navy Blue Melange Shorts",
            "slug": "883-police-navy-blue-melange-shorts-820312-4943a8",
            "brand": {
              "uid": 610,
              "name": "883 Police"
            },
            "categories": [
              {
                "uid": 193,
                "name": "Shorts"
              }
            ],
            "images": [
              {
                "aspect_ratio": "16:25",
                "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/610_SPIRAL19ANAVY/1_1549105947281.jpg",
                "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/610_SPIRAL19ANAVY/1_1549105947281.jpg"
              }
            ],
            "action": {
              "type": "product",
              "url": "https://api.addsale.com/platform/content/v1/products/883-police-navy-blue-melange-shorts-820312-4943a8/",
              "query": {
                "product_slug": [
                  "883-police-navy-blue-melange-shorts-820312-4943a8"
                ]
              }
            }
          },
          "article": {
            "type": "article",
            "uid": "381_610_IGPL01_SPIRAL19ANAVY_L",
            "size": "L",
            "seller": {
              "uid": 381,
              "name": "INTERSOURCE GARMENTS PVT LTD"
            },
            "store": {
              "uid": 3009,
              "name": "Kormangala"
            },
            "quantity": 2,
            "price": {
              "base": {
                "marked": 1999,
                "effective": 1999,
                "currency_code": "INR"
              },
              "converted": {
                "marked": 1999,
                "effective": 1999,
                "currency_code": "INR"
              }
            }
          },
          "coupon_message": "",
          "availability": {
            "sizes": [
              "L",
              "XL",
              "XXL"
            ],
            "other_store_quantity": 1,
            "out_of_stock": false,
            "deliverable": true,
            "is_valid": true
          }
        }
      ],
      "delivery_charge_info": "",
      "coupon_text": "View all offers",
      "cart_id": 7483,
      "uid": "7483",
      "gstin": null,
      "checkout_mode": "self",
      "last_modified": "Thu, 22 Aug 2019 04:58:44 GMT",
      "restrict_checkout": false,
      "is_valid": true
    },
    "callback_url": "https://api.addsale.com/gringotts/api/v1/external/payment-callback/",
    "app_intercept_url": "http://uniket-testing.addsale.link/cart/order-status",
    "message": "",
    "data": {
      "order_id": "FY5D5E215CF287584CE6"
    },
    "order_id": "FY5D5E215CF287584CE6"
  }
}
```
</details>

</details>









---


### updateCartMeta
Update the cart meta



```javascript
// Promise
const promise = cart.updateCartMeta({  body : value,
 id : value });

// Async/Await
const data = await cart.updateCartMeta({  body : value,
 id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| id | string | no | The unique identifier of the cart |  
| body | [CartMetaRequest](#CartMetaRequest) | yes | Request body |


Use this API to update cart meta like checkout_mode and gstin.

*Returned Response:*




[CartMetaResponse](#CartMetaResponse)

Returns a message indicating the success of cart meta updation as shown below.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "message": "cart meta updated"
}
```
</details>









---


### getCartShareLink
Generate token for sharing the cart



```javascript
// Promise
const promise = cart.getCartShareLink({  body : value });

// Async/Await
const data = await cart.getCartShareLink({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [GetShareCartLinkRequest](#GetShareCartLinkRequest) | yes | Request body |


Use this API to generate a shared cart snapshot and return a shortlink token. The link can be shared with other users for getting the same items in their cart.

*Returned Response:*




[GetShareCartLinkResponse](#GetShareCartLinkResponse)

Returns a URL to share and a token as shown below.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Token Generated</i></summary>

```json
{
  "value": {
    "token": "ZweG1XyX",
    "share_url": "https://uniket-testing.addsale.link/shared-cart/ZweG1XyX"
  }
}
```
</details>

</details>









---


### getCartSharedItems
Get details of a shared cart



```javascript
// Promise
const promise = cart.getCartSharedItems({  token : value });

// Async/Await
const data = await cart.getCartSharedItems({  token : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| token | string | yes | Token of the shared short link |  



Use this API to get the shared cart details as per the token generated using the share-cart API.

*Returned Response:*




[SharedCartResponse](#SharedCartResponse)

Success. Returns a Cart object as per the valid token. Refer `SharedCartResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "cart": {
    "shared_cart_details": {
      "token": "BQ9jySQ9",
      "user": {
        "user_id": "23109086",
        "is_anonymous": false
      },
      "meta": {
        "selected_staff": "",
        "ordering_store": null
      },
      "selected_staff": "",
      "ordering_store": null,
      "source": {},
      "created_on": "2019-12-18T14:00:07.165000"
    },
    "items": [
      {
        "key": "791651_6",
        "discount": "",
        "bulk_offer": {},
        "coupon_message": "",
        "article": {
          "type": "article",
          "uid": "304_1054_9036_R1005753_6",
          "size": "6",
          "seller": {
            "uid": 304,
            "name": "LEAYAN GLOBAL PVT. LTD."
          },
          "store": {
            "uid": 5322,
            "name": "Vaisali Nagar"
          },
          "quantity": 1,
          "price": {
            "base": {
              "marked": 2095,
              "effective": 2095,
              "currency_code": "INR"
            },
            "converted": {
              "marked": 2095,
              "effective": 2095,
              "currency_code": "INR"
            }
          }
        },
        "product": {
          "type": "product",
          "uid": 791651,
          "name": "Black Running Shoes",
          "slug": "furo-black-running-shoes-791651-f8bcc3",
          "brand": {
            "uid": 1054,
            "name": "Furo"
          },
          "categories": [
            {
              "uid": 160,
              "name": "Running Shoes"
            }
          ],
          "images": [
            {
              "aspect_ratio": "16:25",
              "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/1054_R1005753/1_1546490507364.jpg",
              "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/1054_R1005753/1_1546490507364.jpg"
            }
          ],
          "action": {
            "type": "product",
            "url": "https://api.addsale.com/platform/content/v1/products/furo-black-running-shoes-791651-f8bcc3/",
            "query": {
              "product_slug": [
                "furo-black-running-shoes-791651-f8bcc3"
              ]
            }
          }
        },
        "message": "",
        "quantity": 1,
        "availability": {
          "sizes": [
            "7",
            "8",
            "9",
            "10",
            "6"
          ],
          "other_store_quantity": 12,
          "out_of_stock": false,
          "deliverable": true,
          "is_valid": true
        },
        "price": {
          "base": {
            "add_on": 2095,
            "marked": 2095,
            "effective": 2095,
            "selling": 2095,
            "currency_code": "INR"
          },
          "converted": {
            "add_on": 2095,
            "marked": 2095,
            "effective": 2095,
            "selling": 2095,
            "currency_code": "INR"
          }
        }
      },
      {
        "key": "791651_7",
        "discount": "",
        "bulk_offer": {},
        "coupon_message": "",
        "article": {
          "type": "article",
          "uid": "304_1054_9036_R1005753_7",
          "size": "7",
          "seller": {
            "uid": 304,
            "name": "LEAYAN GLOBAL PVT. LTD."
          },
          "store": {
            "uid": 5322,
            "name": "Vaisali Nagar"
          },
          "quantity": 2,
          "price": {
            "base": {
              "marked": 2095,
              "effective": 2095,
              "currency_code": "INR"
            },
            "converted": {
              "marked": 2095,
              "effective": 2095,
              "currency_code": "INR"
            }
          }
        },
        "product": {
          "type": "product",
          "uid": 791651,
          "name": "Black Running Shoes",
          "slug": "furo-black-running-shoes-791651-f8bcc3",
          "brand": {
            "uid": 1054,
            "name": "Furo"
          },
          "categories": [
            {
              "uid": 160,
              "name": "Running Shoes"
            }
          ],
          "images": [
            {
              "aspect_ratio": "16:25",
              "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/1054_R1005753/1_1546490507364.jpg",
              "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/1054_R1005753/1_1546490507364.jpg"
            }
          ],
          "action": {
            "type": "product",
            "url": "https://api.addsale.com/platform/content/v1/products/furo-black-running-shoes-791651-f8bcc3/",
            "query": {
              "product_slug": [
                "furo-black-running-shoes-791651-f8bcc3"
              ]
            }
          }
        },
        "message": "",
        "quantity": 2,
        "availability": {
          "sizes": [
            "7",
            "8",
            "9",
            "10",
            "6"
          ],
          "other_store_quantity": 7,
          "out_of_stock": false,
          "deliverable": true,
          "is_valid": true
        },
        "price": {
          "base": {
            "add_on": 4190,
            "marked": 4190,
            "effective": 4190,
            "selling": 4190,
            "currency_code": "INR"
          },
          "converted": {
            "add_on": 4190,
            "marked": 4190,
            "effective": 4190,
            "selling": 4190,
            "currency_code": "INR"
          }
        }
      }
    ],
    "cart_id": 13055,
    "uid": "13055",
    "breakup_values": {
      "raw": {
        "cod_charge": 0,
        "convenience_fee": 0,
        "coupon": 0,
        "delivery_charge": 0,
        "discount": 0,
        "fynd_cash": 0,
        "gst_charges": 958.73,
        "mrp_total": 6285,
        "subtotal": 6285,
        "total": 6285,
        "vog": 5326.27,
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
        "message": "Sorry! Invalid coupon"
      },
      "display": [
        {
          "display": "MRP Total",
          "key": "mrp_total",
          "value": 6285,
          "currency_code": "INR"
        },
        {
          "display": "Subtotal",
          "key": "subtotal",
          "value": 6285,
          "currency_code": "INR"
        },
        {
          "display": "Total",
          "key": "total",
          "value": 6285,
          "currency_code": "INR"
        }
      ]
    },
    "delivery_charge_info": "",
    "coupon_text": "View all offers",
    "gstin": null,
    "comment": "",
    "checkout_mode": "self",
    "payment_selection_lock": {
      "enabled": false,
      "default_options": "COD",
      "payment_identifier": null
    },
    "restrict_checkout": false,
    "is_valid": true,
    "last_modified": "Mon, 16 Dec 2019 07:02:18 GMT"
  },
  "error": ""
}
```
</details>









---


### updateCartWithSharedItems
Merge or replace existing cart



```javascript
// Promise
const promise = cart.updateCartWithSharedItems({  token : value,
 action : value });

// Async/Await
const data = await cart.updateCartWithSharedItems({  token : value,
 action : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| token | string | yes | Token of the shared short link |   
| action | string | yes | Operation to perform on the existing cart merge or replace. |  



Use this API to merge the shared cart with existing cart, or replace the existing cart with the shared cart. The `action` parameter is used to indicate the operation Merge or Replace.

*Returned Response:*




[SharedCartResponse](#SharedCartResponse)

Success. Returns a merged or replaced cart as per the valid token. Refer `SharedCartResponse` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Cart Merged/Replaced</i></summary>

```json
{
  "value": {
    "cart": {
      "shared_cart_details": {
        "token": "BQ9jySQ9",
        "user": {
          "user_id": "23109086",
          "is_anonymous": false
        },
        "meta": {
          "selected_staff": "",
          "ordering_store": null
        },
        "selected_staff": "",
        "ordering_store": null,
        "source": {},
        "created_on": "2019-12-18T14:00:07.165000"
      },
      "items": [
        {
          "key": "791651_6",
          "discount": "",
          "bulk_offer": {},
          "coupon_message": "",
          "article": {
            "type": "article",
            "uid": "304_1054_9036_R1005753_6",
            "size": "6",
            "seller": {
              "uid": 304,
              "name": "LEAYAN GLOBAL PVT. LTD."
            },
            "store": {
              "uid": 5322,
              "name": "Vaisali Nagar"
            },
            "quantity": 1,
            "price": {
              "base": {
                "marked": 2095,
                "effective": 2095,
                "currency_code": "INR"
              },
              "converted": {
                "marked": 2095,
                "effective": 2095,
                "currency_code": "INR"
              }
            }
          },
          "product": {
            "type": "product",
            "uid": 791651,
            "name": "Black Running Shoes",
            "slug": "furo-black-running-shoes-791651-f8bcc3",
            "brand": {
              "uid": 1054,
              "name": "Furo"
            },
            "categories": [
              {
                "uid": 160,
                "name": "Running Shoes"
              }
            ],
            "images": [
              {
                "aspect_ratio": "16:25",
                "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/1054_R1005753/1_1546490507364.jpg",
                "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/1054_R1005753/1_1546490507364.jpg"
              }
            ],
            "action": {
              "type": "product",
              "url": "https://api.addsale.com/platform/content/v1/products/furo-black-running-shoes-791651-f8bcc3/",
              "query": {
                "product_slug": [
                  "furo-black-running-shoes-791651-f8bcc3"
                ]
              }
            }
          },
          "message": "",
          "quantity": 1,
          "availability": {
            "sizes": [
              "7",
              "8",
              "9",
              "10",
              "6"
            ],
            "other_store_quantity": 12,
            "out_of_stock": false,
            "deliverable": true,
            "is_valid": true
          },
          "price": {
            "base": {
              "add_on": 2095,
              "marked": 2095,
              "effective": 2095,
              "selling": 2095,
              "currency_code": "INR"
            },
            "converted": {
              "add_on": 2095,
              "marked": 2095,
              "effective": 2095,
              "selling": 2095,
              "currency_code": "INR"
            }
          }
        },
        {
          "key": "791651_7",
          "discount": "",
          "bulk_offer": {},
          "coupon_message": "",
          "article": {
            "type": "article",
            "uid": "304_1054_9036_R1005753_7",
            "size": "7",
            "seller": {
              "uid": 304,
              "name": "LEAYAN GLOBAL PVT. LTD."
            },
            "store": {
              "uid": 5322,
              "name": "Vaisali Nagar"
            },
            "quantity": 2,
            "price": {
              "base": {
                "marked": 2095,
                "effective": 2095,
                "currency_code": "INR"
              },
              "converted": {
                "marked": 2095,
                "effective": 2095,
                "currency_code": "INR"
              }
            }
          },
          "product": {
            "type": "product",
            "uid": 791651,
            "name": "Black Running Shoes",
            "slug": "furo-black-running-shoes-791651-f8bcc3",
            "brand": {
              "uid": 1054,
              "name": "Furo"
            },
            "categories": [
              {
                "uid": 160,
                "name": "Running Shoes"
              }
            ],
            "images": [
              {
                "aspect_ratio": "16:25",
                "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/1054_R1005753/1_1546490507364.jpg",
                "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/1054_R1005753/1_1546490507364.jpg"
              }
            ],
            "action": {
              "type": "product",
              "url": "https://api.addsale.com/platform/content/v1/products/furo-black-running-shoes-791651-f8bcc3/",
              "query": {
                "product_slug": [
                  "furo-black-running-shoes-791651-f8bcc3"
                ]
              }
            }
          },
          "message": "",
          "quantity": 2,
          "availability": {
            "sizes": [
              "7",
              "8",
              "9",
              "10",
              "6"
            ],
            "other_store_quantity": 7,
            "out_of_stock": false,
            "deliverable": true,
            "is_valid": true
          },
          "price": {
            "base": {
              "add_on": 4190,
              "marked": 4190,
              "effective": 4190,
              "selling": 4190,
              "currency_code": "INR"
            },
            "converted": {
              "add_on": 4190,
              "marked": 4190,
              "effective": 4190,
              "selling": 4190,
              "currency_code": "INR"
            }
          }
        }
      ],
      "cart_id": 13055,
      "uid": "13055",
      "breakup_values": {
        "raw": {
          "cod_charge": 0,
          "convenience_fee": 0,
          "coupon": 0,
          "delivery_charge": 0,
          "discount": 0,
          "fynd_cash": 0,
          "gst_charges": 958.73,
          "mrp_total": 6285,
          "subtotal": 6285,
          "total": 6285,
          "vog": 5326.27,
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
          "message": "Sorry! Invalid coupon"
        },
        "display": [
          {
            "display": "MRP Total",
            "key": "mrp_total",
            "value": 6285,
            "currency_code": "INR"
          },
          {
            "display": "Subtotal",
            "key": "subtotal",
            "value": 6285,
            "currency_code": "INR"
          },
          {
            "display": "Total",
            "key": "total",
            "value": 6285,
            "currency_code": "INR"
          }
        ]
      },
      "delivery_charge_info": "",
      "coupon_text": "View all offers",
      "gstin": null,
      "comment": "",
      "checkout_mode": "self",
      "payment_selection_lock": {
        "enabled": false,
        "default_options": "COD",
        "payment_identifier": null
      },
      "restrict_checkout": false,
      "is_valid": true,
      "last_modified": "Mon, 16 Dec 2019 07:02:18 GMT"
    }
  }
}
```
</details>

</details>









---



### Schemas

 
 
 #### [CartCurrency](#CartCurrency)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string |  no  | Currency code defined by ISO 4217:2015 |
 | symbol | string |  no  |  |

---


 
 
 #### [PaymentSelectionLock](#PaymentSelectionLock)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | default_options | string |  no  |  |
 | enabled | boolean |  no  |  |
 | payment_identifier | string |  no  |  |

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


 
 
 #### [LoyaltyPoints](#LoyaltyPoints)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | applicable | number |  no  |  |
 | is_applied | boolean |  no  |  |
 | total | number |  no  |  |
 | description | string |  no  |  |

---


 
 
 #### [DisplayBreakup](#DisplayBreakup)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | value | number |  no  |  |
 | display | string |  no  |  |
 | key | string |  no  |  |
 | currency_symbol | string |  no  |  |
 | currency_code | string |  no  |  |
 | message | [string] |  no  |  |

---


 
 
 #### [RawBreakup](#RawBreakup)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cod_charge | number |  no  |  |
 | discount | number |  no  |  |
 | gst_charges | number |  no  |  |
 | convenience_fee | number |  no  |  |
 | coupon | number |  no  |  |
 | total | number |  no  |  |
 | delivery_charge | number |  no  |  |
 | you_saved | number |  no  |  |
 | mrp_total | number |  no  |  |
 | fynd_cash | number |  no  |  |
 | subtotal | number |  no  |  |
 | vog | number |  no  |  |

---


 
 
 #### [CouponBreakup](#CouponBreakup)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | uid | string |  no  |  |
 | value | number |  no  |  |
 | code | string |  no  |  |
 | is_applied | boolean |  no  |  |
 | message | string |  no  |  |
 | type | string |  no  |  |

---


 
 
 #### [CartBreakup](#CartBreakup)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | loyalty_points | [LoyaltyPoints](#LoyaltyPoints) |  no  |  |
 | display | [[DisplayBreakup](#DisplayBreakup)] |  no  |  |
 | raw | [RawBreakup](#RawBreakup) |  no  |  |
 | coupon | [CouponBreakup](#CouponBreakup) |  no  |  |

---


 
 
 #### [ProductAvailability](#ProductAvailability)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_valid | boolean |  no  |  |
 | sizes | [string] |  no  |  |
 | other_store_quantity | number |  no  |  |
 | deliverable | boolean |  no  |  |
 | out_of_stock | boolean |  no  |  |

---


 
 
 #### [BasePrice](#BasePrice)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | currency_code | string |  no  |  |
 | effective | number |  no  |  |
 | marked | number |  no  |  |
 | currency_symbol | string |  no  |  |

---


 
 
 #### [ArticlePriceInfo](#ArticlePriceInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | converted | [BasePrice](#BasePrice) |  no  |  |
 | base | [BasePrice](#BasePrice) |  no  |  |

---


 
 
 #### [BaseInfo](#BaseInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | uid | number |  no  |  |
 | name | string |  no  |  |

---


 
 
 #### [ProductArticle](#ProductArticle)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | uid | string |  no  |  |
 | price | [ArticlePriceInfo](#ArticlePriceInfo) |  no  |  |
 | extra_meta | string |  no  |  |
 | store | [BaseInfo](#BaseInfo) |  no  |  |
 | size | string |  no  |  |
 | seller | [BaseInfo](#BaseInfo) |  no  |  |
 | quantity | number |  no  |  |
 | type | string |  no  |  |

---


 
 
 #### [ProductPrice](#ProductPrice)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | selling | number |  no  |  |
 | currency_symbol | string |  no  |  |
 | currency_code | string |  no  |  |
 | marked | number |  no  |  |
 | add_on | number |  no  |  |
 | effective | number |  no  |  |

---


 
 
 #### [ProductPriceInfo](#ProductPriceInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | converted | [ProductPrice](#ProductPrice) |  no  |  |
 | base | [ProductPrice](#ProductPrice) |  no  |  |

---


 
 
 #### [CategoryInfo](#CategoryInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | uid | number |  no  | Product Category Id |
 | name | string |  no  |  |

---


 
 
 #### [ActionQuery](#ActionQuery)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | product_slug | [string] |  no  | Contains list of product slug |

---


 
 
 #### [ProductAction](#ProductAction)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | url | string |  no  |  |
 | query | [ActionQuery](#ActionQuery) |  no  |  |
 | type | string |  no  |  |

---


 
 
 #### [ProductImage](#ProductImage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | url | string |  no  |  |
 | secure_url | string |  no  |  |
 | aspect_ratio | string |  no  |  |

---


 
 
 #### [CartProduct](#CartProduct)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | uid | number |  no  |  |
 | categories | [[CategoryInfo](#CategoryInfo)] |  no  |  |
 | slug | string |  no  | Unique product url name generated via product name and other meta data |
 | action | [ProductAction](#ProductAction) |  no  |  |
 | images | [[ProductImage](#ProductImage)] |  no  |  |
 | name | string |  no  |  |
 | brand | [BaseInfo](#BaseInfo) |  no  |  |
 | type | string |  no  |  |

---


 
 
 #### [PromoMeta](#PromoMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |

---


 
 
 #### [CartProductIdentifer](#CartProductIdentifer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | identifier | string |  no  | Article idenfier generated by cart |

---


 
 
 #### [CartProductInfo](#CartProductInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | availability | [ProductAvailability](#ProductAvailability) |  no  |  |
 | discount | string |  no  |  |
 | article | [ProductArticle](#ProductArticle) |  no  |  |
 | key | string |  no  |  |
 | is_set | boolean |  no  |  |
 | price_per_unit | [ProductPriceInfo](#ProductPriceInfo) |  no  |  |
 | product | [CartProduct](#CartProduct) |  no  |  |
 | coupon_message | string |  no  |  |
 | promo_meta | [PromoMeta](#PromoMeta) |  no  |  |
 | message | string |  no  |  |
 | quantity | number |  no  |  |
 | bulk_offer | string |  no  |  |
 | identifiers | [CartProductIdentifer](#CartProductIdentifer) |  yes  |  |
 | price | [ProductPriceInfo](#ProductPriceInfo) |  no  |  |

---


 
 
 #### [CartDetailResponse](#CartDetailResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | restrict_checkout | boolean |  no  |  |
 | is_valid | boolean |  no  |  |
 | currency | [CartCurrency](#CartCurrency) |  no  |  |
 | last_modified | string |  no  |  |
 | id | string |  no  |  |
 | gstin | string |  no  |  |
 | coupon_text | string |  no  |  |
 | payment_selection_lock | [PaymentSelectionLock](#PaymentSelectionLock) |  no  |  |
 | delivery_promise | [ShipmentPromise](#ShipmentPromise) |  no  |  |
 | breakup_values | [CartBreakup](#CartBreakup) |  no  |  |
 | delivery_charge_info | string |  no  |  |
 | message | string |  no  |  |
 | comment | string |  no  |  |
 | items | [[CartProductInfo](#CartProductInfo)] |  no  |  |
 | checkout_mode | string |  no  |  |

---


 
 
 #### [AddProductCart](#AddProductCart)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display | string |  no  |  |
 | extra_meta | string |  no  |  |
 | seller_id | number |  no  |  |
 | store_id | number |  no  |  |
 | article_id | string |  no  |  |
 | pos | boolean |  no  |  |
 | item_size | string |  no  |  |
 | quantity | number |  no  |  |
 | item_id | number |  no  |  |
 | article_assignment | string |  no  |  |

---


 
 
 #### [AddCartRequest](#AddCartRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[AddProductCart](#AddProductCart)] |  no  |  |

---


 
 
 #### [AddCartDetailResponse](#AddCartDetailResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  | True if all items are added successfully. False if partially added or not added. |
 | partial | boolean |  no  | When adding multiple items check if all added. True if only few are added. |
 | cart | [CartDetailResponse](#CartDetailResponse) |  no  |  |
 | message | string |  no  |  |

---


 
 
 #### [UpdateProductCart](#UpdateProductCart)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | extra_meta | string |  no  |  |
 | article_id | string |  no  |  |
 | item_size | string |  no  |  |
 | quantity | number |  no  |  |
 | item_id | number |  no  |  |
 | item_index | number |  no  |  |
 | identifiers | [CartProductIdentifer](#CartProductIdentifer) |  yes  |  |

---


 
 
 #### [UpdateCartRequest](#UpdateCartRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[UpdateProductCart](#UpdateProductCart)] |  no  |  |
 | operation | string |  yes  |  |

---


 
 
 #### [UpdateCartDetailResponse](#UpdateCartDetailResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  | True if all items are added successfully. False if partially added or not added. |
 | cart | [CartDetailResponse](#CartDetailResponse) |  no  |  |
 | message | string |  no  |  |

---


 
 
 #### [CartItemCountResponse](#CartItemCountResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | user_cart_items_count | number |  no  | Item count present in cart |

---


 
 
 #### [PageCoupon](#PageCoupon)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | has_previous | boolean |  no  |  |
 | total_item_count | number |  no  |  |
 | current | number |  no  |  |
 | has_next | boolean |  no  |  |
 | total | number |  no  |  |

---


 
 
 #### [Coupon](#Coupon)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | coupon_code | string |  no  |  |
 | coupon_value | number |  no  |  |
 | title | string |  no  |  |
 | is_applied | boolean |  no  |  |
 | is_applicable | boolean |  no  |  |
 | expires_on | string |  no  |  |
 | sub_title | string |  no  |  |
 | message | string |  no  |  |
 | max_discount_value | number |  no  |  |
 | minimum_cart_value | number |  no  |  |

---


 
 
 #### [GetCouponResponse](#GetCouponResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | page | [PageCoupon](#PageCoupon) |  no  |  |
 | available_coupon_list | [[Coupon](#Coupon)] |  no  |  |

---


 
 
 #### [ApplyCouponRequest](#ApplyCouponRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | coupon_code | string |  yes  | Coupon code to be applied |

---


 
 
 #### [OfferPrice](#OfferPrice)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bulk_effective | number |  no  | Discounted per unit price for current offer object |
 | currency_symbol | string |  no  | Currency symbol for currency |
 | currency_code | string |  no  | Currency code for all amounts |
 | marked | number |  no  | Original price of product |
 | effective | number |  no  | Current per unit price of product after existing deductions |

---


 
 
 #### [OfferItem](#OfferItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | best | boolean |  no  | Is true for best offer from all offers present for all sellers |
 | margin | number |  no  | Percentage value of discount |
 | total | number |  no  | Total price of offer quantity with discount |
 | auto_applied | boolean |  no  | Whether offer discount is auto applied in cart |
 | quantity | number |  no  | Quantity on which offer is applicable |
 | type | string |  no  | Offer type |
 | price | [OfferPrice](#OfferPrice) |  no  |  |

---


 
 
 #### [OfferSeller](#OfferSeller)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | uid | number |  no  | Seller id |
 | name | string |  no  |  |

---


 
 
 #### [BulkPriceOffer](#BulkPriceOffer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | offers | [[OfferItem](#OfferItem)] |  no  |  |
 | seller | [OfferSeller](#OfferSeller) |  no  |  |

---


 
 
 #### [BulkPriceResponse](#BulkPriceResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [[BulkPriceOffer](#BulkPriceOffer)] |  no  | Consist of offers from multiple seller |

---


 
 
 #### [RewardPointRequest](#RewardPointRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | points | boolean |  yes  |  |

---


 
 
 #### [GeoLocation](#GeoLocation)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | longitude | number |  no  |  |
 | latitude | number |  no  |  |

---


 
 
 #### [Address](#Address)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | state | string |  no  |  |
 | country | string |  no  |  |
 | tags | [string] |  no  |  |
 | address | string |  no  |  |
 | name | string |  no  |  |
 | is_default_address | boolean |  no  |  |
 | user_id | string |  no  |  |
 | checkout_mode | string |  no  |  |
 | area | string |  no  |  |
 | is_active | boolean |  no  |  |
 | id | string |  no  |  |
 | area_code_slug | string |  no  |  |
 | google_map_point | string |  no  |  |
 | city | string |  no  |  |
 | country_code | string |  no  |  |
 | area_code | string |  no  |  |
 | phone | string |  no  |  |
 | meta | string |  no  |  |
 | email | string |  no  |  |
 | landmark | string |  no  |  |
 | address_type | string |  no  |  |
 | geo_location | [GeoLocation](#GeoLocation) |  no  |  |

---


 
 
 #### [GetAddressesResponse](#GetAddressesResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address | [[Address](#Address)] |  no  |  |

---


 
 
 #### [SaveAddressResponse](#SaveAddressResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  |  |
 | id | string |  no  |  |
 | is_default_address | boolean |  no  |  |

---


 
 
 #### [UpdateAddressResponse](#UpdateAddressResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  |  |
 | id | string |  no  |  |
 | is_default_address | boolean |  no  |  |
 | is_updated | boolean |  no  |  |

---


 
 
 #### [DeleteAddressResponse](#DeleteAddressResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | is_deleted | boolean |  no  |  |

---


 
 
 #### [SelectCartAddressRequest](#SelectCartAddressRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | billing_address_id | string |  no  |  |
 | cart_id | string |  no  |  |

---


 
 
 #### [UpdateCartPaymentRequest](#UpdateCartPaymentRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | merchant_code | string |  no  |  |
 | payment_mode | string |  no  |  |
 | address_id | string |  no  |  |
 | aggregator_name | string |  no  |  |
 | payment_identifier | string |  no  |  |

---


 
 
 #### [CouponValidity](#CouponValidity)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | discount | number |  no  |  |
 | title | string |  no  |  |
 | valid | boolean |  no  |  |
 | code | string |  no  |  |
 | display_message_en | string |  no  |  |

---


 
 
 #### [PaymentCouponValidate](#PaymentCouponValidate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  |  |
 | message | string |  no  |  |
 | coupon_validity | [CouponValidity](#CouponValidity) |  no  |  |

---


 
 
 #### [ShipmentResponse](#ShipmentResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | promise | [ShipmentPromise](#ShipmentPromise) |  no  |  |
 | fulfillment_id | number |  no  |  |
 | shipment_type | string |  no  |  |
 | dp_id | string |  no  |  |
 | shipments | number |  no  |  |
 | order_type | string |  no  |  |
 | dp_options | string |  no  |  |
 | box_type | string |  no  |  |
 | fulfillment_type | string |  no  |  |
 | items | [[CartProductInfo](#CartProductInfo)] |  no  |  |

---


 
 
 #### [CartShipmentsResponse](#CartShipmentsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | uid | string |  no  |  |
 | error | boolean |  no  |  |
 | id | string |  no  |  |
 | message | string |  no  |  |
 | payment_selection_lock | [PaymentSelectionLock](#PaymentSelectionLock) |  no  |  |
 | last_modified | string |  no  |  |
 | restrict_checkout | boolean |  no  |  |
 | is_valid | boolean |  no  |  |
 | currency | [CartCurrency](#CartCurrency) |  no  |  |
 | shipments | [[ShipmentResponse](#ShipmentResponse)] |  no  |  |
 | gstin | string |  no  |  |
 | cart_id | number |  no  |  |
 | coupon_text | string |  no  |  |
 | delivery_promise | [ShipmentPromise](#ShipmentPromise) |  no  |  |
 | breakup_values | [CartBreakup](#CartBreakup) |  no  |  |
 | delivery_charge_info | string |  no  |  |
 | comment | string |  no  |  |
 | checkout_mode | string |  no  |  |

---


 
 
 #### [StaffCheckout](#StaffCheckout)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | user | string |  yes  |  |
 | first_name | string |  yes  |  |
 | last_name | string |  yes  |  |
 | _id | string |  yes  |  |

---


 
 
 #### [CartCheckoutDetailRequest](#CartCheckoutDetailRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | ordering_store | number |  no  |  |
 | extra_meta | string |  no  |  |
 | callback_url | string |  no  |  |
 | aggregator | string |  no  |  |
 | payment_auto_confirm | boolean |  no  |  |
 | merchant_code | string |  no  |  |
 | meta | string |  no  |  |
 | staff | [StaffCheckout](#StaffCheckout) |  no  |  |
 | payment_mode | string |  yes  |  |
 | address_id | string |  no  |  |
 | billing_address_id | string |  no  |  |
 | billing_address | string |  no  |  |
 | payment_params | string |  no  |  |
 | delivery_address | string |  no  |  |
 | payment_identifier | string |  no  |  |

---


 
 
 #### [CheckCart](#CheckCart)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | uid | string |  no  |  |
 | store_emps | [string] |  no  |  |
 | message | string |  no  |  |
 | payment_selection_lock | [PaymentSelectionLock](#PaymentSelectionLock) |  no  |  |
 | last_modified | string |  no  |  |
 | cod_charges | number |  no  |  |
 | restrict_checkout | boolean |  no  |  |
 | is_valid | boolean |  no  |  |
 | gstin | string |  no  |  |
 | delivery_promise | [ShipmentPromise](#ShipmentPromise) |  no  |  |
 | error_message | string |  no  |  |
 | comment | string |  no  |  |
 | checkout_mode | string |  no  |  |
 | id | string |  no  |  |
 | cod_message | string |  no  |  |
 | success | boolean |  no  |  |
 | store_code | string |  no  |  |
 | delivery_charges | number |  no  |  |
 | user_type | string |  no  |  |
 | order_id | string |  no  |  |
 | currency | [CartCurrency](#CartCurrency) |  no  |  |
 | cart_id | number |  no  |  |
 | coupon_text | string |  no  |  |
 | cod_available | boolean |  no  |  |
 | delivery_charge_order_value | number |  no  |  |
 | breakup_values | [CartBreakup](#CartBreakup) |  no  |  |
 | delivery_charge_info | string |  no  |  |
 | items | [[CartProductInfo](#CartProductInfo)] |  no  |  |

---


 
 
 #### [CartCheckoutResponse](#CartCheckoutResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | order_id | string |  no  |  |
 | callback_url | string |  no  |  |
 | payment_confirm_url | string |  no  |  |
 | success | boolean |  no  |  |
 | message | string |  no  |  |
 | data | string |  no  |  |
 | app_intercept_url | string |  no  |  |
 | cart | [CheckCart](#CheckCart) |  no  |  |

---


 
 
 #### [CartMetaRequest](#CartMetaRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | gstin | string |  no  |  |
 | pick_up_customer_details | string |  no  | Customer contact details for customer pickup at store |
 | checkout_mode | string |  no  |  |
 | comment | string |  no  |  |

---


 
 
 #### [CartMetaResponse](#CartMetaResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |

---


 
 
 #### [CartMetaMissingResponse](#CartMetaMissingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | errors | [string] |  no  |  |

---


 
 
 #### [GetShareCartLinkRequest](#GetShareCartLinkRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  | Cart uid for generating sharing |
 | meta | string |  no  | Staff, Ordering store or any other data. This data will be used to generate link as well as sent as shared details. |

---


 
 
 #### [GetShareCartLinkResponse](#GetShareCartLinkResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | share_url | string |  no  | Short shareable final url |
 | token | string |  no  | Short url unique id |

---


 
 
 #### [SharedCartDetails](#SharedCartDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | user | string |  no  | User details of who generated share link |
 | created_on | string |  no  |  |
 | meta | string |  no  | Meta data sent while generating share cart link |
 | source | string |  no  | Share link device and other source information |
 | token | string |  no  | Short link id |

---


 
 
 #### [SharedCart](#SharedCart)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | restrict_checkout | boolean |  no  |  |
 | uid | string |  no  |  |
 | is_valid | boolean |  no  |  |
 | shared_cart_details | [SharedCartDetails](#SharedCartDetails) |  no  |  |
 | currency | [CartCurrency](#CartCurrency) |  no  |  |
 | last_modified | string |  no  |  |
 | cart_id | number |  no  |  |
 | id | string |  no  |  |
 | gstin | string |  no  |  |
 | coupon_text | string |  no  |  |
 | payment_selection_lock | [PaymentSelectionLock](#PaymentSelectionLock) |  no  |  |
 | delivery_promise | [ShipmentPromise](#ShipmentPromise) |  no  |  |
 | breakup_values | [CartBreakup](#CartBreakup) |  no  |  |
 | delivery_charge_info | string |  no  |  |
 | message | string |  no  |  |
 | comment | string |  no  |  |
 | items | [[CartProductInfo](#CartProductInfo)] |  no  |  |
 | checkout_mode | string |  no  |  |

---


 
 
 #### [SharedCartResponse](#SharedCartResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cart | [SharedCart](#SharedCart) |  no  |  |
 | error | string |  no  |  |

---




