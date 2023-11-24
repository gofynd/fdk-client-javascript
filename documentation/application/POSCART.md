




##### [Back to Application docs](./README.md)

## PosCart Methods
Cart APIs

* [addAddress](#addaddress)
* [addItems](#additems)
* [applyCoupon](#applycoupon)
* [applyRewardPoints](#applyrewardpoints)
* [checkoutCart](#checkoutcart)
* [getAddressById](#getaddressbyid)
* [getAddresses](#getaddresses)
* [getAvailableDeliveryModes](#getavailabledeliverymodes)
* [getBulkDiscountOffers](#getbulkdiscountoffers)
* [getCart](#getcart)
* [getCartLastModified](#getcartlastmodified)
* [getCartShareLink](#getcartsharelink)
* [getCartSharedItems](#getcartshareditems)
* [getCoupons](#getcoupons)
* [getItemCount](#getitemcount)
* [getShipments](#getshipments)
* [getStoreAddressByUid](#getstoreaddressbyuid)
* [removeAddress](#removeaddress)
* [removeCoupon](#removecoupon)
* [selectAddress](#selectaddress)
* [selectPaymentMode](#selectpaymentmode)
* [updateAddress](#updateaddress)
* [updateCart](#updatecart)
* [updateCartMeta](#updatecartmeta)
* [updateCartWithSharedItems](#updatecartwithshareditems)
* [updateShipments](#updateshipments)
* [validateCouponForPayment](#validatecouponforpayment)



## Methods with example and description




### addAddress
Add address to an account



```javascript
// Promise
const promise = applicationClient.posCart.addAddress({  body : value });

// Async/Await
const data = await applicationClient.posCart.addAddress({  body : value });
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


### addItems
Add items to cart



```javascript
// Promise
const promise = applicationClient.posCart.addItems({  body : value,
 i : value,
 b : value,
 areaCode : value,
 buyNow : value,
 id : value });

// Async/Await
const data = await applicationClient.posCart.addItems({  body : value,
 i : value,
 b : value,
 areaCode : value,
 buyNow : value,
 id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| i | boolean | no |  |    
| b | boolean | no |  |    
| areaCode | string | no |  |    
| buyNow | boolean | no |  |    
| id | string | no |  |  
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
      "applied_promo_details": [
        {
          "application_id": "000000000000000000000001",
          "apply_all_offers": false,
          "apply_exclusive": null,
          "buy_article_dict": {
            "rule#1": {
              "633527e850dfb8e73e6de996_0": {
                "added_in_cart": false,
                "added_quantity": 0,
                "amount_paid": 0,
                "applicable_credits": {
                  "conversion_rate": 1,
                  "currency_code": "INR",
                  "currency_symbol": "₹",
                  "floor_source_value": 0,
                  "floor_value": 0,
                  "source_currency_code": "FC",
                  "source_currency_symbol": "",
                  "source_value": 0,
                  "value": 0
                },
                "article_assign_status": true,
                "article_assignment": {
                  "level": "multi-companies",
                  "strategy": "optimal"
                },
                "article_error": {
                  "type": null,
                  "value": null,
                  "message": null
                },
                "article_id": "633527e850dfb8e73e6de996",
                "article_index": "0",
                "article_meta": {
                  "article_id": "633527e850dfb8e73e6de996",
                  "bulk_margin": 0,
                  "bulk_discount": {
                    "conversion_rate": 1,
                    "currency_code": "INR",
                    "currency_symbol": "₹",
                    "floor_source_value": 0,
                    "floor_value": 0,
                    "source_currency_code": "INR",
                    "source_currency_symbol": "₹",
                    "source_value": 0,
                    "value": 0
                  },
                  "bulk_coupon_code": null,
                  "country_of_origin": "India",
                  "dimension": {
                    "width": 70,
                    "unit": "cm",
                    "height": 70,
                    "is_default": true,
                    "length": 70
                  },
                  "fragile": false,
                  "manufacturer": {
                    "address": "10, PALI MALA RD, ADARSH NAGAR, BANDRA WEST,, MAHARASHTRA, MUMBAI",
                    "name": "Sabki Shop",
                    "is_default": true
                  },
                  "weight": {
                    "shipping": 250,
                    "unit": "gram",
                    "is_default": true
                  },
                  "raw_meta": {
                    "fynd_identifier": "4187_3412343256098",
                    "is_set_article": false,
                    "set_quantity": 1
                  },
                  "is_set": false,
                  "set": {},
                  "identifier": {
                    "ean": "3412343256098"
                  },
                  "hsn_code": null,
                  "hsn_code_id": "625fbd96faeed8b3df6ec3ce",
                  "raw_price": {
                    "effective": {
                      "conversion_rate": 1,
                      "currency_code": "INR",
                      "currency_symbol": "₹",
                      "floor_source_value": 3899,
                      "floor_value": 3899,
                      "source_currency_code": "INR",
                      "source_currency_symbol": "₹",
                      "source_value": 3899,
                      "value": 3899
                    },
                    "marked": {
                      "conversion_rate": 1,
                      "currency_code": "INR",
                      "currency_symbol": "₹",
                      "floor_source_value": 3899,
                      "floor_value": 3899,
                      "source_currency_code": "INR",
                      "source_currency_symbol": "₹",
                      "source_value": 3899,
                      "value": 3899
                    },
                    "transfer": {
                      "conversion_rate": 1,
                      "currency_code": "INR",
                      "currency_symbol": "₹",
                      "floor_source_value": 0,
                      "floor_value": 0,
                      "source_currency_code": "INR",
                      "source_currency_symbol": "₹",
                      "source_value": 0,
                      "value": 0
                    }
                  },
                  "seller_identifier": "3412343256098",
                  "_custom_json": {},
                  "tags": [],
                  "return_config": {
                    "time": 0,
                    "unit": "days",
                    "returnable": false
                  }
                },
                "attributes": {
                  "essential": "No",
                  "item_code": "BSFJ2-12608",
                  "gender": [
                    "Men"
                  ],
                  "denim_type": "Solid",
                  "pattern": "Solid",
                  "product_fit": "Slim",
                  "currency": "INR",
                  "media": [
                    {
                      "type": "image",
                      "meta": {
                        "brand": "nike",
                        "item_code": "BSFJ2-12608",
                        "sequence": 0
                      },
                      "url": "https://hdn-1.addsale.com/addsale/products/pictures/item/free/original/nike/BSFJ2-12608/0/jMpkpyx17w-GWQjymow3-Black-Slim-Fit-Jeans.jpeg"
                    }
                  ],
                  "name": "Nike Jeans 12608",
                  "brand_name": "Nike"
                },
                "avl_qty": 97,
                "brand_id": 18,
                "bulk_coupon_applied": false,
                "bulk_coupon_code": null,
                "bulk_discount": {
                  "conversion_rate": 1,
                  "currency_code": "INR",
                  "currency_symbol": "₹",
                  "floor_source_value": 0,
                  "floor_value": 0,
                  "source_currency_code": "INR",
                  "source_currency_symbol": "₹",
                  "source_value": 0,
                  "value": 0
                },
                "bulk_margin": 0,
                "cancellation_allowed": true,
                "cashback": {
                  "amount": {
                    "conversion_rate": 1,
                    "currency_code": "INR",
                    "currency_symbol": "₹",
                    "floor_source_value": 0,
                    "floor_value": 0,
                    "source_currency_code": "FC",
                    "source_currency_symbol": "",
                    "source_value": 0,
                    "value": 0
                  }
                },
                "category_id": [
                  150
                ],
                "cod_charges": {
                  "amount": {
                    "conversion_rate": 1,
                    "currency_code": "INR",
                    "currency_symbol": "₹",
                    "floor_source_value": 0,
                    "floor_value": 0,
                    "source_currency_code": "INR",
                    "source_currency_symbol": "₹",
                    "source_value": 0,
                    "value": 0
                  }
                },
                "company_id": 2,
                "company_info": {
                  "company_id": 2,
                  "c_name": "Sabki Shop",
                  "c_taxes": [
                    {
                      "rate": 15,
                      "enable": true,
                      "effective_date": "2022-06-05T18:29:23.904000"
                    }
                  ],
                  "company_cin": "U45200MH1992PTC066474"
                },
                "company_taxes": [
                  {
                    "rate": 15,
                    "enable": true,
                    "effective_date": "2022-06-05T18:29:23.904000"
                  }
                ],
                "coupon": {
                  "amount": {
                    "conversion_rate": 1,
                    "currency_code": "INR",
                    "currency_symbol": "₹",
                    "floor_source_value": 0,
                    "floor_value": 0,
                    "source_currency_code": "INR",
                    "source_currency_symbol": "₹",
                    "source_value": 0,
                    "value": 0
                  },
                  "article_count": 0,
                  "cancellation_allowed": true,
                  "return_allowed": true
                },
                "currency_dict": {
                  "code": "INR",
                  "rate": 1
                },
                "custom_meta": {},
                "data": {},
                "delivery_charges": {
                  "amount": {
                    "conversion_rate": 1,
                    "currency_code": "INR",
                    "currency_symbol": "₹",
                    "floor_source_value": 0,
                    "floor_value": 0,
                    "source_currency_code": "INR",
                    "source_currency_symbol": "₹",
                    "source_value": 0,
                    "value": 0
                  }
                },
                "delivery_error_msg": "",
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
                "departments": [
                  99
                ],
                "discount": 0,
                "discount_applied": {},
                "dt_currency": "INR",
                "dt_currency_symbol": "₹",
                "esp_modified": false,
                "extra_meta": {},
                "float_amount_paid": 0,
                "free_gift_items_meta": {},
                "group_id": "",
                "gst_amount": 167.1,
                "gst_tax_percentage": 5,
                "hsn_code": null,
                "hsn_code_id": "625fbd96faeed8b3df6ec3ce",
                "identifiers": {
                  "identifier": "BDnwAINORr6SlTKxZN3w"
                },
                "image_nature": "standard",
                "include": true,
                "is_valid": true,
                "item_id": 75660796,
                "item_size": "34",
                "last_update_at": 1680852767,
                "meta": {},
                "net_price": {
                  "conversion_rate": 1,
                  "currency_code": "INR",
                  "currency_symbol": "₹",
                  "floor_source_value": 3509.1,
                  "floor_value": 3509.1,
                  "source_currency_code": "INR",
                  "source_currency_symbol": "₹",
                  "source_value": 3509.1,
                  "value": 3509.1
                },
                "old_price": {
                  "conversion_rate": 1,
                  "currency_code": "INR",
                  "currency_symbol": "₹",
                  "floor_source_value": 3899,
                  "floor_value": 3899,
                  "source_currency_code": "INR",
                  "source_currency_symbol": "₹",
                  "source_value": 3899,
                  "value": 3899
                },
                "original_price_effective": {
                  "conversion_rate": 1,
                  "currency_code": "INR",
                  "currency_symbol": "₹",
                  "floor_source_value": 3899,
                  "floor_value": 3899,
                  "source_currency_code": "INR",
                  "source_currency_symbol": "₹",
                  "source_value": 3899,
                  "value": 3899
                },
                "original_unit_price": {
                  "conversion_rate": 1,
                  "currency_code": "INR",
                  "currency_symbol": "₹",
                  "floor_source_value": 3899,
                  "floor_value": 3899,
                  "source_currency_code": "INR",
                  "source_currency_symbol": "₹",
                  "source_value": 3899,
                  "value": 3899
                },
                "parent_item_identifiers": {
                  "identifier": null,
                  "parent_item_size": null,
                  "parent_item_id": null
                },
                "pickup_stores": [],
                "price": {
                  "conversion_rate": 1,
                  "currency_code": "INR",
                  "currency_symbol": "₹",
                  "floor_source_value": 3899,
                  "floor_value": 3899,
                  "source_currency_code": "INR",
                  "source_currency_symbol": "₹",
                  "source_value": 3899,
                  "value": 3899
                },
                "price_effective": {
                  "conversion_rate": 1,
                  "currency_code": "INR",
                  "currency_symbol": "₹",
                  "floor_source_value": 3899,
                  "floor_value": 3899,
                  "source_currency_code": "INR",
                  "source_currency_symbol": "₹",
                  "source_value": 3899,
                  "value": 3899
                },
                "price_marked": {
                  "conversion_rate": 1,
                  "currency_code": "INR",
                  "currency_symbol": "₹",
                  "floor_source_value": 3899,
                  "floor_value": 3899,
                  "source_currency_code": "INR",
                  "source_currency_symbol": "₹",
                  "source_value": 3899,
                  "value": 3899
                },
                "product_tags": [],
                "promotions": {
                  "amount": {
                    "conversion_rate": 1,
                    "currency_code": "INR",
                    "currency_symbol": "₹",
                    "floor_source_value": 0,
                    "floor_value": 0,
                    "source_currency_code": "INR",
                    "source_currency_symbol": "₹",
                    "source_value": 0,
                    "value": 0
                  },
                  "applied": [
                    {
                      "amount": {
                        "conversion_rate": 1,
                        "currency_code": "INR",
                        "currency_symbol": "₹",
                        "floor_source_value": 389.9,
                        "floor_value": 389.9,
                        "source_currency_code": "INR",
                        "source_currency_symbol": "₹",
                        "source_value": 389.9,
                        "value": 389.9
                      },
                      "applied_discounts": [
                        {
                          "type": "percentage",
                          "value": 10
                        }
                      ],
                      "applied_free_articles": [],
                      "apply_exclusive": null,
                      "article_quantity": 1,
                      "buy_rules": [
                        {
                          "all_items": null,
                          "cart_conditions": {},
                          "item_criteria": {
                            "item_brand": [
                              18
                            ]
                          },
                          "mrp_promo": false,
                          "slug": "rule#1"
                        }
                      ],
                      "cancellation_allowed": true,
                      "discount_rules": [
                        {
                          "all_items": null,
                          "buy_condition": "( rule#1 )",
                          "item_criteria": {
                            "buy_rules": [
                              "rule#1"
                            ]
                          },
                          "matched_buy_rules": [
                            "rule#1"
                          ],
                          "offer": {
                            "discount_percentage": 10
                          },
                          "raw_offer": {
                            "item_criteria": {
                              "buy_rules": [
                                "rule#1"
                              ]
                            },
                            "buy_condition": "( rule#1 )",
                            "discount_type": "percentage",
                            "offer": {
                              "discount_percentage": 10
                            }
                          },
                          "type": "percentage"
                        }
                      ],
                      "mrp_promo": false,
                      "offer_text": "10% of on NIKE Jeans",
                      "ownership": {
                        "payable_category": "seller",
                        "payable_by": ""
                      },
                      "payable_category": "seller",
                      "promo_code": null,
                      "promo_id": "642fe329ed159b7aa743a293",
                      "promo_type": "percentage",
                      "promotion_group": "product",
                      "return_allowed": true
                    }
                  ],
                  "apply_exclusive": null,
                  "available": [],
                  "cancellation_allowed": true,
                  "exclusive_promo_applied": false,
                  "mrp_promo_applied": false,
                  "return_allowed": true
                },
                "quantity": 1,
                "quantity_assign_status": false,
                "referral_credits": {
                  "amount": {
                    "conversion_rate": 1,
                    "currency_code": "INR",
                    "currency_symbol": "₹",
                    "floor_source_value": 0,
                    "floor_value": 0,
                    "source_currency_code": "FC",
                    "source_currency_symbol": "",
                    "source_value": 0,
                    "value": 0
                  }
                },
                "reload_data_only": true,
                "return_allowed": false,
                "sc_currency": "INR",
                "sc_currency_symbol": "₹",
                "selling_price": {
                  "conversion_rate": 1,
                  "currency_code": "INR",
                  "currency_symbol": "₹",
                  "floor_source_value": 3899,
                  "floor_value": 3899,
                  "source_currency_code": "INR",
                  "source_currency_symbol": "₹",
                  "source_value": 3899,
                  "value": 3899
                },
                "service_item_meta": {
                  "product_group_tags": null,
                  "products": null
                },
                "size_level_total_qty": 1,
                "sizes": [
                  "34"
                ],
                "split_article_id": "633527e850dfb8e73e6de996_0",
                "split_index": 0,
                "store_id": 4187,
                "store_info": {
                  "store_id": 4187,
                  "s_city": "HYDERABAD",
                  "store_name": "AND Inorbit Hyderabad",
                  "store_type": "mall",
                  "store_pincode": 500081,
                  "latitude": 17.4343693,
                  "longitude": 78.3866087
                },
                "strategy_validation_data": {},
                "tags": [
                  "rule#1"
                ],
                "total_gst_amount": 167.1,
                "total_value_of_good": 3342,
                "transfer_price": {
                  "conversion_rate": 1,
                  "currency_code": "INR",
                  "currency_symbol": "₹",
                  "floor_source_value": 0,
                  "floor_value": 0,
                  "source_currency_code": "INR",
                  "source_currency_symbol": "₹",
                  "source_value": 0,
                  "value": 0
                },
                "unit_price": {
                  "conversion_rate": 1,
                  "currency_code": "INR",
                  "currency_symbol": "₹",
                  "floor_source_value": 3509.1,
                  "floor_value": 3509.1,
                  "source_currency_code": "INR",
                  "source_currency_symbol": "₹",
                  "source_value": 3509.1,
                  "value": 3509.1
                },
                "valid_inventory": true,
                "value_of_good": 3342,
                "verify_article": false
              }
            }
          },
          "buy_rules": [
            {
              "all_items": null,
              "cart_conditions": {},
              "item_criteria": {
                "item_brand": [
                  18
                ]
              },
              "mrp_promo": false,
              "slug": "rule#1"
            }
          ],
          "buy_rules_map": {
            "rule#1": {
              "item_brand": [
                18
              ]
            }
          },
          "calculate_on": "esp",
          "cancellation_allowed": true,
          "code": null,
          "discount": 389.9,
          "discount_rules": [
            {
              "all_items": null,
              "buy_condition": "( rule#1 )",
              "item_criteria": {
                "buy_rules": [
                  "rule#1"
                ]
              },
              "matched_buy_rules": [
                "rule#1"
              ],
              "offer": {
                "discount_percentage": 10
              },
              "raw_offer": {
                "item_criteria": {
                  "buy_rules": [
                    "rule#1"
                  ]
                },
                "buy_condition": "( rule#1 )",
                "discount_type": "percentage",
                "offer": {
                  "discount_percentage": 10
                }
              },
              "type": "percentage"
            }
          ],
          "id": "642fe329ed159b7aa743a293",
          "mrp_promo": false,
          "offer_text": "10% of on NIKE Jeans",
          "ownership": {
            "payable_category": "seller",
            "payable_by": ""
          },
          "payable_category": "seller",
          "priority": 1,
          "promo_group": "product",
          "remaining_allowed_qty": null,
          "restrictions": {
            "uses": {
              "maximum": {
                "user": 0,
                "total": 0
              },
              "remaining": {
                "user": 0,
                "total": 0
              }
            },
            "user_groups": [],
            "post_order": {
              "return_allowed": true,
              "cancellation_allowed": true
            },
            "user_id": [],
            "payments": [],
            "user_registered": {
              "start": null,
              "end": null
            },
            "platforms": [
              "web",
              "android",
              "ios"
            ],
            "anonymous_users": true
          },
          "return_allowed": true,
          "stackable": true,
          "type": "percentage",
          "usage_meta": null
        }
      ],
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
          "uid": "",
          "value": 0,
          "is_applied": false,
          "message": "Sorry! Invalid Coupon"
        }
      },
      "items": [
        {
          "identifiers": {},
          "key": "751083_10",
          "parent_item_identifiers": {
            "identifier": "ZASFF",
            "parent_item_id": 7501190,
            "parent_item_size": "OS"
          },
          "moq": {},
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
            "available_sizes": [
              {
                "is_available": true,
                "display": "OS",
                "value": "OS"
              }
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
          "identifiers": {},
          "moq": {},
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
            "available_sizes": [
              {
                "is_available": true,
                "display": "OS",
                "value": "OS"
              }
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
          "moq": {},
          "identifiers": {},
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
            "available_sizes": [
              {
                "is_available": true,
                "display": "OS",
                "value": "OS"
              }
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
          "identifiers": {},
          "moq": {},
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
            "available_sizes": [
              {
                "is_available": true,
                "display": "OS",
                "value": "OS"
              }
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
      "gstin": "",
      "checkout_mode": "self",
      "last_modified": "2019-09-03T00:00:00.000Z",
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
          "gift_card": 0,
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
          "uid": "",
          "value": 0,
          "is_applied": false,
          "message": "Sorry! Invalid Coupon"
        },
        "display": [
          {
            "display": "Gift Card",
            "key": "gift_card",
            "value": 0,
            "currency_code": "INR"
          },
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
          "identifiers": {},
          "discount": "67% OFF",
          "parent_item_identifiers": {
            "identifier": "ZASFF",
            "parent_item_id": 7501190,
            "parent_item_size": "OS"
          },
          "article": {
            "type": "article",
            "is_gift_visible": true,
            "gift_card": {
              "display_text": "",
              "price": 30,
              "gift_message": "",
              "is_gift_applied": true
            },
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
      "gstin": "",
      "checkout_mode": "self",
      "restrict_checkout": false,
      "is_valid": false,
      "last_modified": "2019-09-03T00:00:00.000Z"
    },
    "result": {}
  }
}
```
</details>

</details>









---


### applyCoupon
Apply Coupon



```javascript
// Promise
const promise = applicationClient.posCart.applyCoupon({  body : value,
 i : value,
 b : value,
 p : value,
 id : value,
 buyNow : value });

// Async/Await
const data = await applicationClient.posCart.applyCoupon({  body : value,
 i : value,
 b : value,
 p : value,
 id : value,
 buyNow : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| i | boolean | no |  |    
| b | boolean | no |  |    
| p | boolean | no |  |    
| id | string | no |  |    
| buyNow | boolean | no |  |  
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
      "coupon_type": "percentage",
      "code": "PRISMC22250111",
      "uid": "17743",
      "value": 2250,
      "is_applied": true,
      "message": "coupn applied",
      "title": "Only Test Coupon",
      "sub_title": "TEST",
      "description": "",
      "minimum_cart_value": 100,
      "maximum_discount_value": 100000,
      "coupon_value": 10
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
      "identifiers": {},
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
      "identifiers": {},
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
      "identifiers": {},
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
      "identifiers": {},
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
      "identifiers": {},
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
  "buy_now": false,
  "cart_id": 7927,
  "uid": "7927",
  "gstin": "",
  "checkout_mode": "self",
  "last_modified": "2019-09-04T00:00:00.000Z",
  "restrict_checkout": false,
  "is_valid": true
}
```
</details>









---


### applyRewardPoints
Apply reward points at cart



```javascript
// Promise
const promise = applicationClient.posCart.applyRewardPoints({  body : value,
 id : value,
 i : value,
 b : value,
 buyNow : value });

// Async/Await
const data = await applicationClient.posCart.applyRewardPoints({  body : value,
 id : value,
 i : value,
 b : value,
 buyNow : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| id | string | no |  |    
| i | boolean | no |  |    
| b | boolean | no |  |    
| buyNow | boolean | no |  |  
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
      "identifiers": {},
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
      "uid": "",
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
  "gstin": "",
  "checkout_mode": "self",
  "restrict_checkout": false,
  "is_valid": true,
  "last_modified": "2019-09-03T00:00:00.000Z"
}
```
</details>









---


### checkoutCart
Checkout all items in the cart



```javascript
// Promise
const promise = applicationClient.posCart.checkoutCart({  body : value,
 id : value });

// Async/Await
const data = await applicationClient.posCart.checkoutCart({  body : value,
 id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| id | string | no |  |  
| body | [CartPosCheckoutDetailRequest](#CartPosCheckoutDetailRequest) | yes | Request body |


Use this API to checkout all items in the cart for payment and order generation. For COD, order will be generated directly, whereas for other checkout modes, user will be redirected to a payment gateway.

*Returned Response:*




[CartCheckoutResponse](#CartCheckoutResponse)

Success. Returns the status of cart checkout. Refer `CartCheckoutResponse` for more details.




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
          "uid": "",
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
          "identifiers": {},
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
      "gstin": "",
      "checkout_mode": "self",
      "last_modified": "2019-08-22T00:00:00.000Z",
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


### getAddressById
Fetch a single address by its ID



```javascript
// Promise
const promise = applicationClient.posCart.getAddressById({  id : value,
 cartId : value,
 buyNow : value,
 mobileNo : value,
 checkoutMode : value,
 tags : value,
 isDefault : value });

// Async/Await
const data = await applicationClient.posCart.getAddressById({  id : value,
 cartId : value,
 buyNow : value,
 mobileNo : value,
 checkoutMode : value,
 tags : value,
 isDefault : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes |  |    
| cartId | string | no |  |    
| buyNow | boolean | no |  |    
| mobileNo | string | no |  |    
| checkoutMode | string | no |  |    
| tags | string | no |  |    
| isDefault | boolean | no |  |  



Use this API to get an addresses using its ID. If successful, returns a Address resource in the response body specified in `Address`. Attibutes listed below are optional 

*Returned Response:*




[Address](#Address)

Success. Returns an Address object containing a list of address saved in the account. Refer `Address` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "landmark": "",
  "area_code": "410218",
  "state": "Maharashtra",
  "meta": {},
  "user_id": "8b526f521bb14a2593a8b9e3ce8c76b3",
  "created_by_user_id": "8b526f521bb14a2593a8b9e3ce8c76b3",
  "country_code": "IND",
  "country_phone_code": "91",
  "country_iso_code": "IND",
  "phone": "9915347757",
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


### getAddresses
Fetch address



```javascript
// Promise
const promise = applicationClient.posCart.getAddresses({  cartId : value,
 buyNow : value,
 mobileNo : value,
 checkoutMode : value,
 tags : value,
 isDefault : value });

// Async/Await
const data = await applicationClient.posCart.getAddresses({  cartId : value,
 buyNow : value,
 mobileNo : value,
 checkoutMode : value,
 tags : value,
 isDefault : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| cartId | string | no |  |    
| buyNow | boolean | no |  |    
| mobileNo | string | no |  |    
| checkoutMode | string | no |  |    
| tags | string | no |  |    
| isDefault | boolean | no |  |  



Use this API to get all the addresses associated with an account. If successful, returns a Address resource in the response body specified in GetAddressesResponse.attibutes listed below are optional 

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
      "area_code": "410218",
      "id": "8b526f521bb14a2593a8b9e3ce8c76b3",
      "state": "Maharashtra",
      "meta": {},
      "user_id": "8b526f521bb14a2593a8b9e3ce8c76b3",
      "created_by_user_id": "8b526f521bb14a2593a8b9e3ce8c76b3",
      "country_code": "IND",
      "country_phone_code": "91",
      "country_iso_code": "IND",
      "phone": "9915347757",
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
      "store_name": "store123",
      "_custom_json": {}
    }
  ]
}
```
</details>









---


### getAvailableDeliveryModes
Get available delivery modes for cart



```javascript
// Promise
const promise = applicationClient.posCart.getAvailableDeliveryModes({  areaCode : value,
 id : value });

// Async/Await
const data = await applicationClient.posCart.getAvailableDeliveryModes({  areaCode : value,
 id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| areaCode | string | yes |  |    
| id | string | no |  |  



Use this API to get the delivery modes (home-delivery/store-pickup) along with a list of pickup stores available for a given cart at a given PIN Code. User can then view the address of a pickup store with the help of store-address API.

*Returned Response:*




[CartDeliveryModesResponse](#CartDeliveryModesResponse)

Success. Returns the available delivery mode available for a given PIN Code, along with the UID of all the eligible pickup stores.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "available_modes": [
    "HomeDelivery",
    "PickAtStore"
  ],
  "pickup_stores": [
    1
  ]
}
```
</details>









---


### getBulkDiscountOffers
Get discount offers based on quantity



```javascript
// Promise
const promise = applicationClient.posCart.getBulkDiscountOffers({  itemId : value,
 articleId : value,
 uid : value,
 slug : value });

// Async/Await
const data = await applicationClient.posCart.getBulkDiscountOffers({  itemId : value,
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


### getCart
Fetch all items added to the cart



```javascript
// Promise
const promise = applicationClient.posCart.getCart({  id : value,
 i : value,
 b : value,
 c : value,
 assignCardId : value,
 areaCode : value,
 buyNow : value });

// Async/Await
const data = await applicationClient.posCart.getCart({  id : value,
 i : value,
 b : value,
 c : value,
 assignCardId : value,
 areaCode : value,
 buyNow : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| id | string | no |  |    
| i | boolean | no |  |    
| b | boolean | no |  |    
| c | boolean | no |  |    
| assignCardId | number | no |  |    
| areaCode | string | no |  |    
| buyNow | boolean | no |  |  



Use this API to get details of all the items added to a cart.

*Returned Response:*




[CartDetailResponse](#CartDetailResponse)

Success. Returns a Cart object. Check the example shown below or refer `CartDetailResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "applied_promo_details": [
    {
      "application_id": "000000000000000000000001",
      "apply_all_offers": false,
      "apply_exclusive": null,
      "buy_article_dict": {
        "rule#1": {
          "633527e850dfb8e73e6de996_0": {
            "added_in_cart": false,
            "added_quantity": 0,
            "amount_paid": 0,
            "applicable_credits": {
              "conversion_rate": 1,
              "currency_code": "INR",
              "currency_symbol": "₹",
              "floor_source_value": 0,
              "floor_value": 0,
              "source_currency_code": "FC",
              "source_currency_symbol": "",
              "source_value": 0,
              "value": 0
            },
            "article_assign_status": true,
            "article_assignment": {
              "level": "multi-companies",
              "strategy": "optimal"
            },
            "article_error": {
              "type": null,
              "value": null,
              "message": null
            },
            "article_id": "633527e850dfb8e73e6de996",
            "article_index": "0",
            "article_meta": {
              "article_id": "633527e850dfb8e73e6de996",
              "bulk_margin": 0,
              "bulk_discount": {
                "conversion_rate": 1,
                "currency_code": "INR",
                "currency_symbol": "₹",
                "floor_source_value": 0,
                "floor_value": 0,
                "source_currency_code": "INR",
                "source_currency_symbol": "₹",
                "source_value": 0,
                "value": 0
              },
              "bulk_coupon_code": null,
              "country_of_origin": "India",
              "dimension": {
                "width": 70,
                "unit": "cm",
                "height": 70,
                "is_default": true,
                "length": 70
              },
              "fragile": false,
              "manufacturer": {
                "address": "10, PALI MALA RD, ADARSH NAGAR, BANDRA WEST,, MAHARASHTRA, MUMBAI",
                "name": "Sabki Shop",
                "is_default": true
              },
              "weight": {
                "shipping": 250,
                "unit": "gram",
                "is_default": true
              },
              "raw_meta": {
                "fynd_identifier": "4187_3412343256098",
                "is_set_article": false,
                "set_quantity": 1
              },
              "is_set": false,
              "set": {},
              "identifier": {
                "ean": "3412343256098"
              },
              "hsn_code": null,
              "hsn_code_id": "625fbd96faeed8b3df6ec3ce",
              "raw_price": {
                "effective": {
                  "conversion_rate": 1,
                  "currency_code": "INR",
                  "currency_symbol": "₹",
                  "floor_source_value": 3899,
                  "floor_value": 3899,
                  "source_currency_code": "INR",
                  "source_currency_symbol": "₹",
                  "source_value": 3899,
                  "value": 3899
                },
                "marked": {
                  "conversion_rate": 1,
                  "currency_code": "INR",
                  "currency_symbol": "₹",
                  "floor_source_value": 3899,
                  "floor_value": 3899,
                  "source_currency_code": "INR",
                  "source_currency_symbol": "₹",
                  "source_value": 3899,
                  "value": 3899
                },
                "transfer": {
                  "conversion_rate": 1,
                  "currency_code": "INR",
                  "currency_symbol": "₹",
                  "floor_source_value": 0,
                  "floor_value": 0,
                  "source_currency_code": "INR",
                  "source_currency_symbol": "₹",
                  "source_value": 0,
                  "value": 0
                }
              },
              "seller_identifier": "3412343256098",
              "_custom_json": {},
              "tags": [],
              "return_config": {
                "time": 0,
                "unit": "days",
                "returnable": false
              }
            },
            "attributes": {
              "essential": "No",
              "item_code": "BSFJ2-12608",
              "gender": [
                "Men"
              ],
              "denim_type": "Solid",
              "pattern": "Solid",
              "product_fit": "Slim",
              "currency": "INR",
              "media": [
                {
                  "type": "image",
                  "meta": {
                    "brand": "nike",
                    "item_code": "BSFJ2-12608",
                    "sequence": 0
                  },
                  "url": "https://hdn-1.addsale.com/addsale/products/pictures/item/free/original/nike/BSFJ2-12608/0/jMpkpyx17w-GWQjymow3-Black-Slim-Fit-Jeans.jpeg"
                }
              ],
              "name": "Nike Jeans 12608",
              "brand_name": "Nike"
            },
            "avl_qty": 97,
            "brand_id": 18,
            "bulk_coupon_applied": false,
            "bulk_coupon_code": null,
            "bulk_discount": {
              "conversion_rate": 1,
              "currency_code": "INR",
              "currency_symbol": "₹",
              "floor_source_value": 0,
              "floor_value": 0,
              "source_currency_code": "INR",
              "source_currency_symbol": "₹",
              "source_value": 0,
              "value": 0
            },
            "bulk_margin": 0,
            "cancellation_allowed": true,
            "cashback": {
              "amount": {
                "conversion_rate": 1,
                "currency_code": "INR",
                "currency_symbol": "₹",
                "floor_source_value": 0,
                "floor_value": 0,
                "source_currency_code": "FC",
                "source_currency_symbol": "",
                "source_value": 0,
                "value": 0
              }
            },
            "category_id": [
              150
            ],
            "cod_charges": {
              "amount": {
                "conversion_rate": 1,
                "currency_code": "INR",
                "currency_symbol": "₹",
                "floor_source_value": 0,
                "floor_value": 0,
                "source_currency_code": "INR",
                "source_currency_symbol": "₹",
                "source_value": 0,
                "value": 0
              }
            },
            "company_id": 2,
            "company_info": {
              "company_id": 2,
              "c_name": "Sabki Shop",
              "c_taxes": [
                {
                  "rate": 15,
                  "enable": true,
                  "effective_date": "2022-06-05T18:29:23.904000"
                }
              ],
              "company_cin": "U45200MH1992PTC066474"
            },
            "company_taxes": [
              {
                "rate": 15,
                "enable": true,
                "effective_date": "2022-06-05T18:29:23.904000"
              }
            ],
            "coupon": {
              "amount": {
                "conversion_rate": 1,
                "currency_code": "INR",
                "currency_symbol": "₹",
                "floor_source_value": 0,
                "floor_value": 0,
                "source_currency_code": "INR",
                "source_currency_symbol": "₹",
                "source_value": 0,
                "value": 0
              },
              "article_count": 0,
              "cancellation_allowed": true,
              "return_allowed": true
            },
            "currency_dict": {
              "code": "INR",
              "rate": 1
            },
            "custom_meta": {},
            "data": {},
            "delivery_charges": {
              "amount": {
                "conversion_rate": 1,
                "currency_code": "INR",
                "currency_symbol": "₹",
                "floor_source_value": 0,
                "floor_value": 0,
                "source_currency_code": "INR",
                "source_currency_symbol": "₹",
                "source_value": 0,
                "value": 0
              }
            },
            "delivery_error_msg": "",
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
            "departments": [
              99
            ],
            "discount": 0,
            "discount_applied": {},
            "dt_currency": "INR",
            "dt_currency_symbol": "₹",
            "esp_modified": false,
            "extra_meta": {},
            "float_amount_paid": 0,
            "free_gift_items_meta": {},
            "group_id": "",
            "gst_amount": 167.1,
            "gst_tax_percentage": 5,
            "hsn_code": null,
            "hsn_code_id": "625fbd96faeed8b3df6ec3ce",
            "identifiers": {
              "identifier": "BDnwAINORr6SlTKxZN3w"
            },
            "image_nature": "standard",
            "include": true,
            "is_valid": true,
            "item_id": 75660796,
            "item_size": "34",
            "last_update_at": 1680852767,
            "meta": {},
            "net_price": {
              "conversion_rate": 1,
              "currency_code": "INR",
              "currency_symbol": "₹",
              "floor_source_value": 3509.1,
              "floor_value": 3509.1,
              "source_currency_code": "INR",
              "source_currency_symbol": "₹",
              "source_value": 3509.1,
              "value": 3509.1
            },
            "old_price": {
              "conversion_rate": 1,
              "currency_code": "INR",
              "currency_symbol": "₹",
              "floor_source_value": 3899,
              "floor_value": 3899,
              "source_currency_code": "INR",
              "source_currency_symbol": "₹",
              "source_value": 3899,
              "value": 3899
            },
            "original_price_effective": {
              "conversion_rate": 1,
              "currency_code": "INR",
              "currency_symbol": "₹",
              "floor_source_value": 3899,
              "floor_value": 3899,
              "source_currency_code": "INR",
              "source_currency_symbol": "₹",
              "source_value": 3899,
              "value": 3899
            },
            "original_unit_price": {
              "conversion_rate": 1,
              "currency_code": "INR",
              "currency_symbol": "₹",
              "floor_source_value": 3899,
              "floor_value": 3899,
              "source_currency_code": "INR",
              "source_currency_symbol": "₹",
              "source_value": 3899,
              "value": 3899
            },
            "parent_item_identifiers": {
              "identifier": null,
              "parent_item_size": null,
              "parent_item_id": null
            },
            "pickup_stores": [],
            "price": {
              "conversion_rate": 1,
              "currency_code": "INR",
              "currency_symbol": "₹",
              "floor_source_value": 3899,
              "floor_value": 3899,
              "source_currency_code": "INR",
              "source_currency_symbol": "₹",
              "source_value": 3899,
              "value": 3899
            },
            "price_effective": {
              "conversion_rate": 1,
              "currency_code": "INR",
              "currency_symbol": "₹",
              "floor_source_value": 3899,
              "floor_value": 3899,
              "source_currency_code": "INR",
              "source_currency_symbol": "₹",
              "source_value": 3899,
              "value": 3899
            },
            "price_marked": {
              "conversion_rate": 1,
              "currency_code": "INR",
              "currency_symbol": "₹",
              "floor_source_value": 3899,
              "floor_value": 3899,
              "source_currency_code": "INR",
              "source_currency_symbol": "₹",
              "source_value": 3899,
              "value": 3899
            },
            "product_tags": [],
            "promotions": {
              "amount": {
                "conversion_rate": 1,
                "currency_code": "INR",
                "currency_symbol": "₹",
                "floor_source_value": 0,
                "floor_value": 0,
                "source_currency_code": "INR",
                "source_currency_symbol": "₹",
                "source_value": 0,
                "value": 0
              },
              "applied": [
                {
                  "amount": {
                    "conversion_rate": 1,
                    "currency_code": "INR",
                    "currency_symbol": "₹",
                    "floor_source_value": 389.9,
                    "floor_value": 389.9,
                    "source_currency_code": "INR",
                    "source_currency_symbol": "₹",
                    "source_value": 389.9,
                    "value": 389.9
                  },
                  "applied_discounts": [
                    {
                      "type": "percentage",
                      "value": 10
                    }
                  ],
                  "applied_free_articles": [],
                  "apply_exclusive": null,
                  "article_quantity": 1,
                  "buy_rules": [
                    {
                      "all_items": null,
                      "cart_conditions": {},
                      "item_criteria": {
                        "item_brand": [
                          18
                        ]
                      },
                      "mrp_promo": false,
                      "slug": "rule#1"
                    }
                  ],
                  "cancellation_allowed": true,
                  "discount_rules": [
                    {
                      "all_items": null,
                      "buy_condition": "( rule#1 )",
                      "item_criteria": {
                        "buy_rules": [
                          "rule#1"
                        ]
                      },
                      "matched_buy_rules": [
                        "rule#1"
                      ],
                      "offer": {
                        "discount_percentage": 10
                      },
                      "raw_offer": {
                        "item_criteria": {
                          "buy_rules": [
                            "rule#1"
                          ]
                        },
                        "buy_condition": "( rule#1 )",
                        "discount_type": "percentage",
                        "offer": {
                          "discount_percentage": 10
                        }
                      },
                      "type": "percentage"
                    }
                  ],
                  "mrp_promo": false,
                  "offer_text": "10% of on NIKE Jeans",
                  "ownership": {
                    "payable_category": "seller",
                    "payable_by": ""
                  },
                  "payable_category": "seller",
                  "promo_code": null,
                  "promo_id": "642fe329ed159b7aa743a293",
                  "promo_type": "percentage",
                  "promotion_group": "product",
                  "return_allowed": true
                }
              ],
              "apply_exclusive": null,
              "available": [],
              "cancellation_allowed": true,
              "exclusive_promo_applied": false,
              "mrp_promo_applied": false,
              "return_allowed": true
            },
            "quantity": 1,
            "quantity_assign_status": false,
            "referral_credits": {
              "amount": {
                "conversion_rate": 1,
                "currency_code": "INR",
                "currency_symbol": "₹",
                "floor_source_value": 0,
                "floor_value": 0,
                "source_currency_code": "FC",
                "source_currency_symbol": "",
                "source_value": 0,
                "value": 0
              }
            },
            "reload_data_only": true,
            "return_allowed": false,
            "sc_currency": "INR",
            "sc_currency_symbol": "₹",
            "selling_price": {
              "conversion_rate": 1,
              "currency_code": "INR",
              "currency_symbol": "₹",
              "floor_source_value": 3899,
              "floor_value": 3899,
              "source_currency_code": "INR",
              "source_currency_symbol": "₹",
              "source_value": 3899,
              "value": 3899
            },
            "service_item_meta": {
              "product_group_tags": null,
              "products": null
            },
            "size_level_total_qty": 1,
            "sizes": [
              "34"
            ],
            "split_article_id": "633527e850dfb8e73e6de996_0",
            "split_index": 0,
            "store_id": 4187,
            "store_info": {
              "store_id": 4187,
              "s_city": "HYDERABAD",
              "store_name": "AND Inorbit Hyderabad",
              "store_type": "mall",
              "store_pincode": 500081,
              "latitude": 17.4343693,
              "longitude": 78.3866087
            },
            "strategy_validation_data": {},
            "tags": [
              "rule#1"
            ],
            "total_gst_amount": 167.1,
            "total_value_of_good": 3342,
            "transfer_price": {
              "conversion_rate": 1,
              "currency_code": "INR",
              "currency_symbol": "₹",
              "floor_source_value": 0,
              "floor_value": 0,
              "source_currency_code": "INR",
              "source_currency_symbol": "₹",
              "source_value": 0,
              "value": 0
            },
            "unit_price": {
              "conversion_rate": 1,
              "currency_code": "INR",
              "currency_symbol": "₹",
              "floor_source_value": 3509.1,
              "floor_value": 3509.1,
              "source_currency_code": "INR",
              "source_currency_symbol": "₹",
              "source_value": 3509.1,
              "value": 3509.1
            },
            "valid_inventory": true,
            "value_of_good": 3342,
            "verify_article": false
          }
        }
      },
      "buy_rules": [
        {
          "all_items": null,
          "cart_conditions": {},
          "item_criteria": {
            "item_brand": [
              18
            ]
          },
          "mrp_promo": false,
          "slug": "rule#1"
        }
      ],
      "buy_rules_map": {
        "rule#1": {
          "item_brand": [
            18
          ]
        }
      },
      "calculate_on": "esp",
      "cancellation_allowed": true,
      "code": null,
      "discount": 389.9,
      "discount_rules": [
        {
          "all_items": null,
          "buy_condition": "( rule#1 )",
          "item_criteria": {
            "buy_rules": [
              "rule#1"
            ]
          },
          "matched_buy_rules": [
            "rule#1"
          ],
          "offer": {
            "discount_percentage": 10
          },
          "raw_offer": {
            "item_criteria": {
              "buy_rules": [
                "rule#1"
              ]
            },
            "buy_condition": "( rule#1 )",
            "discount_type": "percentage",
            "offer": {
              "discount_percentage": 10
            }
          },
          "type": "percentage"
        }
      ],
      "id": "642fe329ed159b7aa743a293",
      "mrp_promo": false,
      "offer_text": "10% of on NIKE Jeans",
      "ownership": {
        "payable_category": "seller",
        "payable_by": ""
      },
      "payable_category": "seller",
      "priority": 1,
      "promo_group": "product",
      "remaining_allowed_qty": null,
      "restrictions": {
        "uses": {
          "maximum": {
            "user": 0,
            "total": 0
          },
          "remaining": {
            "user": 0,
            "total": 0
          }
        },
        "user_groups": [],
        "post_order": {
          "return_allowed": true,
          "cancellation_allowed": true
        },
        "user_id": [],
        "payments": [],
        "user_registered": {
          "start": null,
          "end": null
        },
        "platforms": [
          "web",
          "android",
          "ios"
        ],
        "anonymous_users": true
      },
      "return_allowed": true,
      "stackable": true,
      "type": "percentage",
      "usage_meta": null
    }
  ],
  "items": [
    {
      "identifiers": {},
      "bulk_offer": {},
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
      "discount": "67% OFF",
      "moq": {},
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
        "available_sizes": [
          {
            "is_available": true,
            "display": "OS",
            "value": "OS"
          }
        ],
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
      "uid": "",
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
  "gstin": "gst number",
  "checkout_mode": "self",
  "restrict_checkout": false,
  "is_valid": true,
  "last_modified": "2019-09-03T00:00:00.000Z"
}
```
</details>









---


### getCartLastModified
Fetch last-modified timestamp



```javascript
// Promise
const promise = applicationClient.posCart.getCartLastModified({  id : value });

// Async/Await
const data = await applicationClient.posCart.getCartLastModified({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| id | string | no |  |  



Use this API to fetch Last-Modified timestamp in header metadata.

*Returned Response:*








---


### getCartShareLink
Generate token for sharing the cart



```javascript
// Promise
const promise = applicationClient.posCart.getCartShareLink({  body : value });

// Async/Await
const data = await applicationClient.posCart.getCartShareLink({  body : value });
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
const promise = applicationClient.posCart.getCartSharedItems({  token : value });

// Async/Await
const data = await applicationClient.posCart.getCartSharedItems({  token : value });
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
        "identifiers": {},
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
        "identifiers": {},
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
        "uid": "",
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
    "gstin": "",
    "comment": "",
    "checkout_mode": "self",
    "payment_selection_lock": {
      "enabled": false,
      "default_options": "COD",
      "payment_identifier": "ICICI"
    },
    "restrict_checkout": false,
    "is_valid": true,
    "last_modified": "2019-12-16T00:00:00.000Z"
  },
  "error": ""
}
```
</details>









---


### getCoupons
Fetch Coupon



```javascript
// Promise
const promise = applicationClient.posCart.getCoupons({  id : value,
 buyNow : value });

// Async/Await
const data = await applicationClient.posCart.getCoupons({  id : value,
 buyNow : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| id | string | no |  |    
| buyNow | boolean | no |  |  



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


### getItemCount
Count items in the cart



```javascript
// Promise
const promise = applicationClient.posCart.getItemCount({  id : value,
 buyNow : value });

// Async/Await
const data = await applicationClient.posCart.getItemCount({  id : value,
 buyNow : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| id | string | no | The unique identifier of the cart. |    
| buyNow | boolean | no |  |  



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


### getShipments
Get delivery date and options before checkout



```javascript
// Promise
const promise = applicationClient.posCart.getShipments({  pickAtStoreUid : value,
 orderingStoreId : value,
 p : value,
 id : value,
 addressId : value,
 areaCode : value,
 orderType : value });

// Async/Await
const data = await applicationClient.posCart.getShipments({  pickAtStoreUid : value,
 orderingStoreId : value,
 p : value,
 id : value,
 addressId : value,
 areaCode : value,
 orderType : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pickAtStoreUid | number | no |  |    
| orderingStoreId | number | no |  |    
| p | boolean | no | This is a boolean value. Select `true` for getting a payment option in response. |    
| id | string | no | The unique identifier of the cart |    
| addressId | string | no | ID allotted to the selected address |    
| areaCode | string | no | The PIN Code of the destination address, e.g. 400059 |    
| orderType | string | no | The order type of shipment HomeDelivery - If the customer wants the order home-delivered PickAtStore - If the customer wants the handover of an order at the store itself. |  



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
        "uid": "",
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
            "identifiers": {},
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
    "gstin": "",
    "checkout_mode": "self",
    "last_modified": "2019-08-22T00:00:00.000Z",
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
        "uid": "",
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
    "gstin": "",
    "checkout_mode": "self",
    "last_modified": "2019-08-22T00:00:00.000Z",
    "restrict_checkout": false,
    "is_valid": false
  }
}
```
</details>

</details>









---


### getStoreAddressByUid
Get list of stores for give uids



```javascript
// Promise
const promise = applicationClient.posCart.getStoreAddressByUid({  storeUid : value });

// Async/Await
const data = await applicationClient.posCart.getStoreAddressByUid({  storeUid : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| storeUid | number | yes |  |  



Use this API to get the store details by entering the unique identifier of the pickup stores shown in the response of available-delivery-mode API.

*Returned Response:*




[StoreDetailsResponse](#StoreDetailsResponse)

Success. Returns available store information with its address as shown below.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "items": [
    {
      "name": "Tennille Urse",
      "phone": "9819716565",
      "email": "rehman@cashkart.com",
      "address_type": "store",
      "address": "NO",
      "area": "",
      "pincode": 400072,
      "area_code": "400072",
      "area_code_slug": "pincode",
      "landmark": "",
      "country": "INDIA",
      "city": "MUMBAI",
      "state": "MAHA",
      "store_code": "6462b3cd-9d64-4da9-a764-b0e6a52cf5e8",
      "uid": 20,
      "geo_location": {
        "longitude": 1,
        "latitude": 1
      }
    }
  ]
}
```
</details>









---


### removeAddress
Remove address associated with an account



```javascript
// Promise
const promise = applicationClient.posCart.removeAddress({  id : value });

// Async/Await
const data = await applicationClient.posCart.removeAddress({  id : value });
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


### removeCoupon
Remove Coupon Applied



```javascript
// Promise
const promise = applicationClient.posCart.removeCoupon({  id : value,
 buyNow : value });

// Async/Await
const data = await applicationClient.posCart.removeCoupon({  id : value,
 buyNow : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| id | string | no |  |    
| buyNow | boolean | no |  |  



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
      "uid": "17743",
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
      "identifiers": {},
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
  "buy_now": false,
  "cart_id": 7477,
  "uid": "7477",
  "gstin": "",
  "checkout_mode": "self",
  "last_modified": "2019-08-22T00:00:00.000Z",
  "restrict_checkout": false,
  "is_valid": true
}
```
</details>









---


### selectAddress
Select an address from available addresses



```javascript
// Promise
const promise = applicationClient.posCart.selectAddress({  body : value,
 cartId : value,
 buyNow : value,
 i : value,
 b : value });

// Async/Await
const data = await applicationClient.posCart.selectAddress({  body : value,
 cartId : value,
 buyNow : value,
 i : value,
 b : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| cartId | string | no |  |    
| buyNow | boolean | no |  |    
| i | boolean | no |  |    
| b | boolean | no |  |  
| body | [SelectCartAddressRequest](#SelectCartAddressRequest) | yes | Request body |


Select Address from all addresses associated with the account in order to ship the cart items to that address, otherwise default address will be selected implicitly. See `SelectCartAddressRequest` in schema of request body for the list of attributes needed to select Address from account. On successful request, this API returns a Cart object. 

*Returned Response:*




[CartDetailResponse](#CartDetailResponse)

Success. Returns a Cart object as shown below. Refer `CartDetailResponse` for more details.  .




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "is_valid": true,
  "buy_now": false,
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
      "uid": "17743",
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
      "identifiers": {},
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
      "identifiers": {},
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
  "gstin": "",
  "checkout_mode": "self",
  "last_modified": "2019-08-23T00:00:00.000Z",
  "restrict_checkout": false
}
```
</details>









---


### selectPaymentMode
Update cart payment



```javascript
// Promise
const promise = applicationClient.posCart.selectPaymentMode({  body : value,
 id : value,
 buyNow : value });

// Async/Await
const data = await applicationClient.posCart.selectPaymentMode({  body : value,
 id : value,
 buyNow : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| id | string | no |  |    
| buyNow | boolean | no |  |  
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
      "uid": "17743",
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
      "identifiers": {},
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
      "identifiers": {},
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
  "buy_now": false,
  "cart_id": 7477,
  "uid": "7477",
  "gstin": "",
  "checkout_mode": "self",
  "last_modified": "2019-08-23T00:00:00.000Z",
  "restrict_checkout": false,
  "is_valid": true
}
```
</details>









---


### updateAddress
Update address added to an account



```javascript
// Promise
const promise = applicationClient.posCart.updateAddress({  id : value,
 body : value });

// Async/Await
const data = await applicationClient.posCart.updateAddress({  id : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | ID allotted to the selected address |  
| body | [Address](#Address) | yes | Request body |


Use this API to update an existing address in the account. Request object should contain attributes mentioned in Address  can be updated.

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


### updateCart
Update items in the cart



```javascript
// Promise
const promise = applicationClient.posCart.updateCart({  body : value,
 id : value,
 i : value,
 b : value,
 areaCode : value,
 buyNow : value });

// Async/Await
const data = await applicationClient.posCart.updateCart({  body : value,
 id : value,
 i : value,
 b : value,
 areaCode : value,
 buyNow : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| id | string | no |  |    
| i | boolean | no |  |    
| b | boolean | no |  |    
| areaCode | string | no |  |    
| buyNow | boolean | no |  |  
| body | [UpdateCartRequest](#UpdateCartRequest) | yes | Request body |


Use this API to update items added to the cart with the help of a request object containing attributes like item_quantity and item_size.

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
          "gift_card": 30,
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
          "uid": "",
          "value": 0,
          "is_applied": false,
          "message": "Sorry! Invalid Coupon"
        },
        "display": [
          {
            "display": "Gift Card",
            "key": "gift_card",
            "value": 30,
            "currency_code": "INR"
          },
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
          "identifiers": {},
          "discount": "67% OFF",
          "parent_item_identifiers": {
            "identifier": "ZASFF",
            "parent_item_id": 7501190,
            "parent_item_size": "OS"
          },
          "article": {
            "type": "article",
            "is_gift_visible": true,
            "gift_card": {
              "display_text": "",
              "price": 30,
              "gift_message": "",
              "is_gift_applied": true
            },
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
      "gstin": "",
      "checkout_mode": "self",
      "restrict_checkout": false,
      "is_valid": true,
      "last_modified": "2019-09-03T00:00:00.000Z"
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
      "applied_promo_details": [
        {
          "application_id": "000000000000000000000001",
          "apply_all_offers": false,
          "apply_exclusive": null,
          "buy_article_dict": {
            "rule#1": {
              "633527e850dfb8e73e6de996_0": {
                "added_in_cart": false,
                "added_quantity": 0,
                "amount_paid": 0,
                "applicable_credits": {
                  "conversion_rate": 1,
                  "currency_code": "INR",
                  "currency_symbol": "₹",
                  "floor_source_value": 0,
                  "floor_value": 0,
                  "source_currency_code": "FC",
                  "source_currency_symbol": "",
                  "source_value": 0,
                  "value": 0
                },
                "article_assign_status": true,
                "article_assignment": {
                  "level": "multi-companies",
                  "strategy": "optimal"
                },
                "article_error": {
                  "type": null,
                  "value": null,
                  "message": null
                },
                "article_id": "633527e850dfb8e73e6de996",
                "article_index": "0",
                "article_meta": {
                  "article_id": "633527e850dfb8e73e6de996",
                  "bulk_margin": 0,
                  "bulk_discount": {
                    "conversion_rate": 1,
                    "currency_code": "INR",
                    "currency_symbol": "₹",
                    "floor_source_value": 0,
                    "floor_value": 0,
                    "source_currency_code": "INR",
                    "source_currency_symbol": "₹",
                    "source_value": 0,
                    "value": 0
                  },
                  "bulk_coupon_code": null,
                  "country_of_origin": "India",
                  "dimension": {
                    "width": 70,
                    "unit": "cm",
                    "height": 70,
                    "is_default": true,
                    "length": 70
                  },
                  "fragile": false,
                  "manufacturer": {
                    "address": "10, PALI MALA RD, ADARSH NAGAR, BANDRA WEST,, MAHARASHTRA, MUMBAI",
                    "name": "Sabki Shop",
                    "is_default": true
                  },
                  "weight": {
                    "shipping": 250,
                    "unit": "gram",
                    "is_default": true
                  },
                  "raw_meta": {
                    "fynd_identifier": "4187_3412343256098",
                    "is_set_article": false,
                    "set_quantity": 1
                  },
                  "is_set": false,
                  "set": {},
                  "identifier": {
                    "ean": "3412343256098"
                  },
                  "hsn_code": null,
                  "hsn_code_id": "625fbd96faeed8b3df6ec3ce",
                  "raw_price": {
                    "effective": {
                      "conversion_rate": 1,
                      "currency_code": "INR",
                      "currency_symbol": "₹",
                      "floor_source_value": 3899,
                      "floor_value": 3899,
                      "source_currency_code": "INR",
                      "source_currency_symbol": "₹",
                      "source_value": 3899,
                      "value": 3899
                    },
                    "marked": {
                      "conversion_rate": 1,
                      "currency_code": "INR",
                      "currency_symbol": "₹",
                      "floor_source_value": 3899,
                      "floor_value": 3899,
                      "source_currency_code": "INR",
                      "source_currency_symbol": "₹",
                      "source_value": 3899,
                      "value": 3899
                    },
                    "transfer": {
                      "conversion_rate": 1,
                      "currency_code": "INR",
                      "currency_symbol": "₹",
                      "floor_source_value": 0,
                      "floor_value": 0,
                      "source_currency_code": "INR",
                      "source_currency_symbol": "₹",
                      "source_value": 0,
                      "value": 0
                    }
                  },
                  "seller_identifier": "3412343256098",
                  "_custom_json": {},
                  "tags": [],
                  "return_config": {
                    "time": 0,
                    "unit": "days",
                    "returnable": false
                  }
                },
                "attributes": {
                  "essential": "No",
                  "item_code": "BSFJ2-12608",
                  "gender": [
                    "Men"
                  ],
                  "denim_type": "Solid",
                  "pattern": "Solid",
                  "product_fit": "Slim",
                  "currency": "INR",
                  "media": [
                    {
                      "type": "image",
                      "meta": {
                        "brand": "nike",
                        "item_code": "BSFJ2-12608",
                        "sequence": 0
                      },
                      "url": "https://hdn-1.addsale.com/addsale/products/pictures/item/free/original/nike/BSFJ2-12608/0/jMpkpyx17w-GWQjymow3-Black-Slim-Fit-Jeans.jpeg"
                    }
                  ],
                  "name": "Nike Jeans 12608",
                  "brand_name": "Nike"
                },
                "avl_qty": 97,
                "brand_id": 18,
                "bulk_coupon_applied": false,
                "bulk_coupon_code": null,
                "bulk_discount": {
                  "conversion_rate": 1,
                  "currency_code": "INR",
                  "currency_symbol": "₹",
                  "floor_source_value": 0,
                  "floor_value": 0,
                  "source_currency_code": "INR",
                  "source_currency_symbol": "₹",
                  "source_value": 0,
                  "value": 0
                },
                "bulk_margin": 0,
                "cancellation_allowed": true,
                "cashback": {
                  "amount": {
                    "conversion_rate": 1,
                    "currency_code": "INR",
                    "currency_symbol": "₹",
                    "floor_source_value": 0,
                    "floor_value": 0,
                    "source_currency_code": "FC",
                    "source_currency_symbol": "",
                    "source_value": 0,
                    "value": 0
                  }
                },
                "category_id": [
                  150
                ],
                "cod_charges": {
                  "amount": {
                    "conversion_rate": 1,
                    "currency_code": "INR",
                    "currency_symbol": "₹",
                    "floor_source_value": 0,
                    "floor_value": 0,
                    "source_currency_code": "INR",
                    "source_currency_symbol": "₹",
                    "source_value": 0,
                    "value": 0
                  }
                },
                "company_id": 2,
                "company_info": {
                  "company_id": 2,
                  "c_name": "Sabki Shop",
                  "c_taxes": [
                    {
                      "rate": 15,
                      "enable": true,
                      "effective_date": "2022-06-05T18:29:23.904000"
                    }
                  ],
                  "company_cin": "U45200MH1992PTC066474"
                },
                "company_taxes": [
                  {
                    "rate": 15,
                    "enable": true,
                    "effective_date": "2022-06-05T18:29:23.904000"
                  }
                ],
                "coupon": {
                  "amount": {
                    "conversion_rate": 1,
                    "currency_code": "INR",
                    "currency_symbol": "₹",
                    "floor_source_value": 0,
                    "floor_value": 0,
                    "source_currency_code": "INR",
                    "source_currency_symbol": "₹",
                    "source_value": 0,
                    "value": 0
                  },
                  "article_count": 0,
                  "cancellation_allowed": true,
                  "return_allowed": true
                },
                "currency_dict": {
                  "code": "INR",
                  "rate": 1
                },
                "custom_meta": {},
                "data": {},
                "delivery_charges": {
                  "amount": {
                    "conversion_rate": 1,
                    "currency_code": "INR",
                    "currency_symbol": "₹",
                    "floor_source_value": 0,
                    "floor_value": 0,
                    "source_currency_code": "INR",
                    "source_currency_symbol": "₹",
                    "source_value": 0,
                    "value": 0
                  }
                },
                "delivery_error_msg": "",
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
                "departments": [
                  99
                ],
                "discount": 0,
                "discount_applied": {},
                "dt_currency": "INR",
                "dt_currency_symbol": "₹",
                "esp_modified": false,
                "extra_meta": {},
                "float_amount_paid": 0,
                "free_gift_items_meta": {},
                "group_id": "",
                "gst_amount": 167.1,
                "gst_tax_percentage": 5,
                "hsn_code": null,
                "hsn_code_id": "625fbd96faeed8b3df6ec3ce",
                "identifiers": {
                  "identifier": "BDnwAINORr6SlTKxZN3w"
                },
                "image_nature": "standard",
                "include": true,
                "is_valid": true,
                "item_id": 75660796,
                "item_size": "34",
                "last_update_at": 1680852767,
                "meta": {},
                "net_price": {
                  "conversion_rate": 1,
                  "currency_code": "INR",
                  "currency_symbol": "₹",
                  "floor_source_value": 3509.1,
                  "floor_value": 3509.1,
                  "source_currency_code": "INR",
                  "source_currency_symbol": "₹",
                  "source_value": 3509.1,
                  "value": 3509.1
                },
                "old_price": {
                  "conversion_rate": 1,
                  "currency_code": "INR",
                  "currency_symbol": "₹",
                  "floor_source_value": 3899,
                  "floor_value": 3899,
                  "source_currency_code": "INR",
                  "source_currency_symbol": "₹",
                  "source_value": 3899,
                  "value": 3899
                },
                "original_price_effective": {
                  "conversion_rate": 1,
                  "currency_code": "INR",
                  "currency_symbol": "₹",
                  "floor_source_value": 3899,
                  "floor_value": 3899,
                  "source_currency_code": "INR",
                  "source_currency_symbol": "₹",
                  "source_value": 3899,
                  "value": 3899
                },
                "original_unit_price": {
                  "conversion_rate": 1,
                  "currency_code": "INR",
                  "currency_symbol": "₹",
                  "floor_source_value": 3899,
                  "floor_value": 3899,
                  "source_currency_code": "INR",
                  "source_currency_symbol": "₹",
                  "source_value": 3899,
                  "value": 3899
                },
                "parent_item_identifiers": {
                  "identifier": null,
                  "parent_item_size": null,
                  "parent_item_id": null
                },
                "pickup_stores": [],
                "price": {
                  "conversion_rate": 1,
                  "currency_code": "INR",
                  "currency_symbol": "₹",
                  "floor_source_value": 3899,
                  "floor_value": 3899,
                  "source_currency_code": "INR",
                  "source_currency_symbol": "₹",
                  "source_value": 3899,
                  "value": 3899
                },
                "price_effective": {
                  "conversion_rate": 1,
                  "currency_code": "INR",
                  "currency_symbol": "₹",
                  "floor_source_value": 3899,
                  "floor_value": 3899,
                  "source_currency_code": "INR",
                  "source_currency_symbol": "₹",
                  "source_value": 3899,
                  "value": 3899
                },
                "price_marked": {
                  "conversion_rate": 1,
                  "currency_code": "INR",
                  "currency_symbol": "₹",
                  "floor_source_value": 3899,
                  "floor_value": 3899,
                  "source_currency_code": "INR",
                  "source_currency_symbol": "₹",
                  "source_value": 3899,
                  "value": 3899
                },
                "product_tags": [],
                "promotions": {
                  "amount": {
                    "conversion_rate": 1,
                    "currency_code": "INR",
                    "currency_symbol": "₹",
                    "floor_source_value": 0,
                    "floor_value": 0,
                    "source_currency_code": "INR",
                    "source_currency_symbol": "₹",
                    "source_value": 0,
                    "value": 0
                  },
                  "applied": [
                    {
                      "amount": {
                        "conversion_rate": 1,
                        "currency_code": "INR",
                        "currency_symbol": "₹",
                        "floor_source_value": 389.9,
                        "floor_value": 389.9,
                        "source_currency_code": "INR",
                        "source_currency_symbol": "₹",
                        "source_value": 389.9,
                        "value": 389.9
                      },
                      "applied_discounts": [
                        {
                          "type": "percentage",
                          "value": 10
                        }
                      ],
                      "applied_free_articles": [],
                      "apply_exclusive": null,
                      "article_quantity": 1,
                      "buy_rules": [
                        {
                          "all_items": null,
                          "cart_conditions": {},
                          "item_criteria": {
                            "item_brand": [
                              18
                            ]
                          },
                          "mrp_promo": false,
                          "slug": "rule#1"
                        }
                      ],
                      "cancellation_allowed": true,
                      "discount_rules": [
                        {
                          "all_items": null,
                          "buy_condition": "( rule#1 )",
                          "item_criteria": {
                            "buy_rules": [
                              "rule#1"
                            ]
                          },
                          "matched_buy_rules": [
                            "rule#1"
                          ],
                          "offer": {
                            "discount_percentage": 10
                          },
                          "raw_offer": {
                            "item_criteria": {
                              "buy_rules": [
                                "rule#1"
                              ]
                            },
                            "buy_condition": "( rule#1 )",
                            "discount_type": "percentage",
                            "offer": {
                              "discount_percentage": 10
                            }
                          },
                          "type": "percentage"
                        }
                      ],
                      "mrp_promo": false,
                      "offer_text": "10% of on NIKE Jeans",
                      "ownership": {
                        "payable_category": "seller",
                        "payable_by": ""
                      },
                      "payable_category": "seller",
                      "promo_code": null,
                      "promo_id": "642fe329ed159b7aa743a293",
                      "promo_type": "percentage",
                      "promotion_group": "product",
                      "return_allowed": true
                    }
                  ],
                  "apply_exclusive": null,
                  "available": [],
                  "cancellation_allowed": true,
                  "exclusive_promo_applied": false,
                  "mrp_promo_applied": false,
                  "return_allowed": true
                },
                "quantity": 1,
                "quantity_assign_status": false,
                "referral_credits": {
                  "amount": {
                    "conversion_rate": 1,
                    "currency_code": "INR",
                    "currency_symbol": "₹",
                    "floor_source_value": 0,
                    "floor_value": 0,
                    "source_currency_code": "FC",
                    "source_currency_symbol": "",
                    "source_value": 0,
                    "value": 0
                  }
                },
                "reload_data_only": true,
                "return_allowed": false,
                "sc_currency": "INR",
                "sc_currency_symbol": "₹",
                "selling_price": {
                  "conversion_rate": 1,
                  "currency_code": "INR",
                  "currency_symbol": "₹",
                  "floor_source_value": 3899,
                  "floor_value": 3899,
                  "source_currency_code": "INR",
                  "source_currency_symbol": "₹",
                  "source_value": 3899,
                  "value": 3899
                },
                "service_item_meta": {
                  "product_group_tags": null,
                  "products": null
                },
                "size_level_total_qty": 1,
                "sizes": [
                  "34"
                ],
                "split_article_id": "633527e850dfb8e73e6de996_0",
                "split_index": 0,
                "store_id": 4187,
                "store_info": {
                  "store_id": 4187,
                  "s_city": "HYDERABAD",
                  "store_name": "AND Inorbit Hyderabad",
                  "store_type": "mall",
                  "store_pincode": 500081,
                  "latitude": 17.4343693,
                  "longitude": 78.3866087
                },
                "strategy_validation_data": {},
                "tags": [
                  "rule#1"
                ],
                "total_gst_amount": 167.1,
                "total_value_of_good": 3342,
                "transfer_price": {
                  "conversion_rate": 1,
                  "currency_code": "INR",
                  "currency_symbol": "₹",
                  "floor_source_value": 0,
                  "floor_value": 0,
                  "source_currency_code": "INR",
                  "source_currency_symbol": "₹",
                  "source_value": 0,
                  "value": 0
                },
                "unit_price": {
                  "conversion_rate": 1,
                  "currency_code": "INR",
                  "currency_symbol": "₹",
                  "floor_source_value": 3509.1,
                  "floor_value": 3509.1,
                  "source_currency_code": "INR",
                  "source_currency_symbol": "₹",
                  "source_value": 3509.1,
                  "value": 3509.1
                },
                "valid_inventory": true,
                "value_of_good": 3342,
                "verify_article": false
              }
            }
          },
          "buy_rules": [
            {
              "all_items": null,
              "cart_conditions": {},
              "item_criteria": {
                "item_brand": [
                  18
                ]
              },
              "mrp_promo": false,
              "slug": "rule#1"
            }
          ],
          "buy_rules_map": {
            "rule#1": {
              "item_brand": [
                18
              ]
            }
          },
          "calculate_on": "esp",
          "cancellation_allowed": true,
          "code": null,
          "discount": 389.9,
          "discount_rules": [
            {
              "all_items": null,
              "buy_condition": "( rule#1 )",
              "item_criteria": {
                "buy_rules": [
                  "rule#1"
                ]
              },
              "matched_buy_rules": [
                "rule#1"
              ],
              "offer": {
                "discount_percentage": 10
              },
              "raw_offer": {
                "item_criteria": {
                  "buy_rules": [
                    "rule#1"
                  ]
                },
                "buy_condition": "( rule#1 )",
                "discount_type": "percentage",
                "offer": {
                  "discount_percentage": 10
                }
              },
              "type": "percentage"
            }
          ],
          "id": "642fe329ed159b7aa743a293",
          "mrp_promo": false,
          "offer_text": "10% of on NIKE Jeans",
          "ownership": {
            "payable_category": "seller",
            "payable_by": ""
          },
          "payable_category": "seller",
          "priority": 1,
          "promo_group": "product",
          "remaining_allowed_qty": null,
          "restrictions": {
            "uses": {
              "maximum": {
                "user": 0,
                "total": 0
              },
              "remaining": {
                "user": 0,
                "total": 0
              }
            },
            "user_groups": [],
            "post_order": {
              "return_allowed": true,
              "cancellation_allowed": true
            },
            "user_id": [],
            "payments": [],
            "user_registered": {
              "start": null,
              "end": null
            },
            "platforms": [
              "web",
              "android",
              "ios"
            ],
            "anonymous_users": true
          },
          "return_allowed": true,
          "stackable": true,
          "type": "percentage",
          "usage_meta": null
        }
      ],
      "breakup_values": {
        "coupon": {
          "type": "cash",
          "code": "",
          "uid": "",
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
          "identifiers": {},
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
          "parent_item_identifiers": {
            "identifier": "ZASFF",
            "parent_item_id": 7501190,
            "parent_item_size": "OS"
          },
          "moq": {},
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
            "available_sizes": [
              {
                "is_available": true,
                "display": "OS",
                "value": "OS"
              }
            ],
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
      "buy_now": false,
      "cart_id": 12426,
      "uid": "12426",
      "gstin": "",
      "checkout_mode": "self",
      "last_modified": "2019-08-22T00:00:00.000Z",
      "restrict_checkout": false,
      "is_valid": true
    },
    "result": {
      "437414_7": {
        "success": true,
        "message": "Quantity of item updated"
      }
    },
    "message": "Quantity of item updated",
    "success": true
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
const promise = applicationClient.posCart.updateCartMeta({  body : value,
 id : value,
 buyNow : value });

// Async/Await
const data = await applicationClient.posCart.updateCartMeta({  body : value,
 id : value,
 buyNow : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| id | string | no |  |    
| buyNow | boolean | no |  |  
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


### updateCartWithSharedItems
Merge or replace existing cart



```javascript
// Promise
const promise = applicationClient.posCart.updateCartWithSharedItems({  token : value,
 action : value });

// Async/Await
const data = await applicationClient.posCart.updateCartWithSharedItems({  token : value,
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
          "identifiers": {},
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
          "identifiers": {},
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
          "uid": "",
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
      "gstin": "",
      "comment": "",
      "checkout_mode": "self",
      "payment_selection_lock": {
        "enabled": false,
        "default_options": "COD",
        "payment_identifier": ""
      },
      "restrict_checkout": false,
      "is_valid": true,
      "last_modified": "2019-12-16T00:00:00.000Z"
    }
  }
}
```
</details>

</details>









---


### updateShipments
Update shipment delivery type and quantity before checkout



```javascript
// Promise
const promise = applicationClient.posCart.updateShipments({  body : value,
 i : value,
 p : value,
 id : value,
 addressId : value,
 areaCode : value,
 orderType : value });

// Async/Await
const data = await applicationClient.posCart.updateShipments({  body : value,
 i : value,
 p : value,
 id : value,
 addressId : value,
 areaCode : value,
 orderType : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| i | boolean | no | This is a boolean value. Select `true` to retrieve all the items added in the cart. |    
| p | boolean | no | This is a boolean value. Select `true` for getting a payment option in response. |    
| id | string | no | The unique identifier of the cart |    
| addressId | string | no | ID allotted to an address |    
| areaCode | string | no | The PIN Code of the destination address, e.g. 400059 |    
| orderType | string | no | The order type of shipment HomeDelivery - If the customer wants the order home-delivered PickAtStore - If the customer wants the handover of an order at the store itself. |  
| body | [UpdateCartShipmentRequest](#UpdateCartShipmentRequest) | yes | Request body |


Use this API to update the delivery type and quantity as per customer's preference for either store pick-up or home-delivery.

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
        "uid": "",
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
        "order_type": "PickAtStore",
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
            "identifiers": {},
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
    "gstin": "",
    "checkout_mode": "self",
    "last_modified": "2019-08-22T00:00:00.000Z",
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
        "uid": "",
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
    "gstin": "",
    "checkout_mode": "self",
    "last_modified": "2019-08-22T00:00:00.000Z",
    "restrict_checkout": false,
    "is_valid": false
  }
}
```
</details>

</details>









---


### validateCouponForPayment
Verify the coupon eligibility against the payment mode



```javascript
// Promise
const promise = applicationClient.posCart.validateCouponForPayment({  id : value,
 buyNow : value,
 addressId : value,
 paymentMode : value,
 paymentIdentifier : value,
 aggregatorName : value,
 merchantCode : value,
 iin : value,
 network : value,
 type : value,
 cardId : value });

// Async/Await
const data = await applicationClient.posCart.validateCouponForPayment({  id : value,
 buyNow : value,
 addressId : value,
 paymentMode : value,
 paymentIdentifier : value,
 aggregatorName : value,
 merchantCode : value,
 iin : value,
 network : value,
 type : value,
 cardId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| id | string | no |  |    
| buyNow | boolean | no |  |    
| addressId | string | no |  |    
| paymentMode | string | no |  |    
| paymentIdentifier | string | no |  |    
| aggregatorName | string | no |  |    
| merchantCode | string | no |  |    
| iin | string | no |  |    
| network | string | no |  |    
| type | string | no |  |    
| cardId | string | no |  |  



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
    "title": "Coupon value will change.",
    "next_validation_required": false
  }
}
```
</details>









---



### Schemas


#### [ActionQuery](#ActionQuery)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | product_slug | [string]? |  yes  | Contains list of product slug |
 

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
 | new_cart | boolean? |  yes  |  |
 

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
 | meta | string? |  yes  |  |
 | parent_item_identifiers | [[String: string]]? |  yes  |  |
 | pos | boolean? |  yes  |  |
 | product_group_tags | [string]? |  yes  |  |
 | quantity | number? |  yes  |  |
 | seller_id | number? |  yes  |  |
 | store_id | number? |  yes  |  |
 

---

#### [Address](#Address)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _custom_json | string? |  yes  |  |
 | address | string? |  yes  |  |
 | address_type | string? |  yes  |  |
 | area | string? |  yes  |  |
 | area_code | string? |  yes  |  |
 | area_code_slug | string? |  yes  |  |
 | checkout_mode | string? |  yes  |  |
 | city | string? |  yes  |  |
 | country | string? |  yes  |  |
 | country_code | string? |  yes  |  |
 | country_iso_code | string? |  yes  |  |
 | country_phone_code | string? |  yes  |  |
 | created_by_user_id | string? |  yes  |  |
 | email | string? |  yes  |  |
 | geo_location | [GeoLocation](#GeoLocation)? |  yes  |  |
 | google_map_point | string? |  yes  |  |
 | id | string? |  yes  |  |
 | is_active | boolean? |  yes  |  |
 | is_default_address | boolean? |  yes  |  |
 | landmark | string? |  yes  |  |
 | meta | string? |  yes  |  |
 | name | string? |  yes  |  |
 | phone | string? |  yes  |  |
 | state | string? |  yes  |  |
 | tags | [string]? |  yes  |  |
 | user_id | string? |  yes  |  |
 

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
 | ownership | [Ownership](#Ownership)? |  yes  | Ownership of promotion |
 | promo_id | string? |  yes  | Promotion id |
 | promotion_group | string? |  yes  | Promotion group for the promotion |
 | promotion_name | string? |  yes  | Promotion name of current promotion |
 | promotion_type | string? |  yes  | Promotion type of current promotion |
 

---

#### [ApplyCouponRequest](#ApplyCouponRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | coupon_code | string |  no  | Coupon code to be applied |
 

---

#### [ArticleGiftDetail](#ArticleGiftDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | article_id | [GiftDetail](#GiftDetail)? |  yes  |  |
 

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

#### [BulkPriceOffer](#BulkPriceOffer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | offers | [[OfferItem](#OfferItem)]? |  yes  |  |
 | seller | [OfferSeller](#OfferSeller)? |  yes  |  |
 

---

#### [BulkPriceResponse](#BulkPriceResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [[BulkPriceOffer](#BulkPriceOffer)]? |  yes  | Consist of offers from multiple seller |
 

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

#### [CartCheckoutCustomMeta](#CartCheckoutCustomMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | key | string |  no  |  |
 | value | string |  no  |  |
 

---

#### [CartCheckoutResponse](#CartCheckoutResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | app_intercept_url | string? |  yes  |  |
 | callback_url | string? |  yes  |  |
 | cart | [CheckCart](#CheckCart)? |  yes  |  |
 | data | string? |  yes  |  |
 | message | string? |  yes  |  |
 | order_id | string? |  yes  |  |
 | payment_confirm_url | string? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [CartCurrency](#CartCurrency)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string? |  yes  | Currency code defined by ISO 4217:2015 |
 | symbol | string? |  yes  |  |
 

---

#### [CartDeliveryModesResponse](#CartDeliveryModesResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | available_modes | [string]? |  yes  | Available delivery modes |
 | pickup_stores | [number]? |  yes  | Store pick up available store uids |
 

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
 | pan_config | string? |  yes  |  |
 | pan_no | string? |  yes  |  |
 | payment_selection_lock | [PaymentSelectionLock](#PaymentSelectionLock)? |  yes  |  |
 | restrict_checkout | boolean? |  yes  |  |
 

---

#### [CartItemCountResponse](#CartItemCountResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | user_cart_items_count | number? |  yes  | Item count present in cart |
 

---

#### [CartMetaMissingResponse](#CartMetaMissingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | errors | [string]? |  yes  |  |
 

---

#### [CartMetaRequest](#CartMetaRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | checkout_mode | string? |  yes  |  |
 | comment | string? |  yes  |  |
 | delivery_slots | string? |  yes  |  |
 | gift_details | [ArticleGiftDetail](#ArticleGiftDetail)? |  yes  |  |
 | gstin | string? |  yes  |  |
 | pick_up_customer_details | string? |  yes  | Customer contact details for customer pickup at store |
 

---

#### [CartMetaResponse](#CartMetaResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_valid | boolean? |  yes  |  |
 | message | string? |  yes  |  |
 

---

#### [CartPosCheckoutDetailRequest](#CartPosCheckoutDetailRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address_id | string? |  yes  |  |
 | aggregator | string? |  yes  |  |
 | billing_address | string? |  yes  |  |
 | billing_address_id | string? |  yes  |  |
 | callback_url | string? |  yes  |  |
 | custom_meta | [[CartCheckoutCustomMeta](#CartCheckoutCustomMeta)]? |  yes  |  |
 | customer_details | [CustomerDetails](#CustomerDetails)? |  yes  | Customer details |
 | delivery_address | string? |  yes  |  |
 | extra_meta | string? |  yes  |  |
 | files | [[Files](#Files)]? |  yes  | List of file url |
 | id | string? |  yes  |  |
 | merchant_code | string? |  yes  |  |
 | meta | string? |  yes  |  |
 | order_type | string |  no  |  |
 | ordering_store | number? |  yes  |  |
 | payment_auto_confirm | boolean? |  yes  |  |
 | payment_identifier | string? |  yes  |  |
 | payment_mode | string |  no  |  |
 | payment_params | string? |  yes  |  |
 | pick_at_store_uid | number? |  yes  |  |
 | pos | boolean? |  yes  |  |
 | staff | [StaffCheckout](#StaffCheckout)? |  yes  |  |
 

---

#### [CartProduct](#CartProduct)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _custom_json | string? |  yes  |  |
 | action | [ProductAction](#ProductAction)? |  yes  |  |
 | brand | [BaseInfo](#BaseInfo)? |  yes  |  |
 | categories | [[CategoryInfo](#CategoryInfo)]? |  yes  |  |
 | images | [[ProductImage](#ProductImage)]? |  yes  |  |
 | item_code | string? |  yes  |  |
 | name | string? |  yes  |  |
 | slug | string? |  yes  | Unique product url name generated via product name and other meta data |
 | tags | [string]? |  yes  |  |
 | teaser_tag | [Tags](#Tags)? |  yes  |  |
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
 | coupon | [CouponDetails](#CouponDetails)? |  yes  |  |
 | coupon_message | string? |  yes  |  |
 | custom_order | string? |  yes  |  |
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

#### [CartShipmentsResponse](#CartShipmentsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | breakup_values | [CartBreakup](#CartBreakup)? |  yes  |  |
 | buy_now | boolean? |  yes  |  |
 | cart_id | number? |  yes  |  |
 | checkout_mode | string? |  yes  |  |
 | comment | string? |  yes  |  |
 | coupon_text | string? |  yes  |  |
 | currency | [CartCurrency](#CartCurrency)? |  yes  |  |
 | delivery_charge_info | string? |  yes  |  |
 | delivery_promise | [ShipmentPromise](#ShipmentPromise)? |  yes  |  |
 | error | boolean? |  yes  |  |
 | gstin | string? |  yes  |  |
 | id | string? |  yes  |  |
 | is_valid | boolean? |  yes  |  |
 | last_modified | string? |  yes  |  |
 | message | string? |  yes  |  |
 | payment_selection_lock | [PaymentSelectionLock](#PaymentSelectionLock)? |  yes  |  |
 | restrict_checkout | boolean? |  yes  |  |
 | shipments | [[ShipmentResponse](#ShipmentResponse)]? |  yes  |  |
 | uid | string? |  yes  |  |
 

---

#### [CategoryInfo](#CategoryInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string? |  yes  |  |
 | uid | number? |  yes  | Product Category Id |
 

---

#### [CheckCart](#CheckCart)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | breakup_values | [CartBreakup](#CartBreakup)? |  yes  |  |
 | buy_now | boolean? |  yes  |  |
 | cart_id | number? |  yes  |  |
 | checkout_mode | string? |  yes  |  |
 | cod_available | boolean? |  yes  |  |
 | cod_charges | number? |  yes  |  |
 | cod_message | string? |  yes  |  |
 | comment | string? |  yes  |  |
 | coupon_text | string? |  yes  |  |
 | currency | [CartCurrency](#CartCurrency)? |  yes  |  |
 | delivery_charge_info | string? |  yes  |  |
 | delivery_charge_order_value | number? |  yes  |  |
 | delivery_charges | number? |  yes  |  |
 | delivery_promise | [ShipmentPromise](#ShipmentPromise)? |  yes  |  |
 | error_message | string? |  yes  |  |
 | gstin | string? |  yes  |  |
 | id | string? |  yes  |  |
 | is_valid | boolean? |  yes  |  |
 | items | [[CartProductInfo](#CartProductInfo)]? |  yes  |  |
 | last_modified | string? |  yes  |  |
 | message | string? |  yes  |  |
 | order_id | string? |  yes  |  |
 | payment_selection_lock | [PaymentSelectionLock](#PaymentSelectionLock)? |  yes  |  |
 | restrict_checkout | boolean? |  yes  |  |
 | store_code | string? |  yes  |  |
 | store_emps | [string]? |  yes  |  |
 | success | boolean? |  yes  |  |
 | uid | string? |  yes  |  |
 | user_type | string? |  yes  |  |
 

---

#### [Coupon](#Coupon)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | coupon_code | string? |  yes  |  |
 | coupon_type | string? |  yes  |  |
 | coupon_value | number? |  yes  |  |
 | description | string? |  yes  |  |
 | expires_on | string? |  yes  |  |
 | is_applicable | boolean? |  yes  |  |
 | is_applied | boolean? |  yes  |  |
 | max_discount_value | number? |  yes  |  |
 | message | string? |  yes  |  |
 | minimum_cart_value | number? |  yes  |  |
 | sub_title | string? |  yes  |  |
 | title | string? |  yes  |  |
 

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

#### [CouponDetails](#CouponDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string? |  yes  |  |
 | discount_single_quantity | number? |  yes  |  |
 | discount_total_quantity | number? |  yes  |  |
 

---

#### [CouponValidity](#CouponValidity)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string? |  yes  |  |
 | discount | number? |  yes  |  |
 | display_message_en | string? |  yes  |  |
 | next_validation_required | boolean? |  yes  |  |
 | title | string? |  yes  |  |
 | valid | boolean? |  yes  |  |
 

---

#### [CustomerDetails](#CustomerDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | string? |  yes  |  |
 | mobile | string |  no  |  |
 | name | string? |  yes  |  |
 

---

#### [DeleteAddressResponse](#DeleteAddressResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string? |  yes  |  |
 | is_deleted | boolean? |  yes  |  |
 

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

#### [Files](#Files)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | key | string |  no  |  |
 | values | [string] |  no  |  |
 

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

#### [GeoLocation](#GeoLocation)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | latitude | number? |  yes  |  |
 | longitude | number? |  yes  |  |
 

---

#### [GetAddressesResponse](#GetAddressesResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address | [[Address](#Address)]? |  yes  |  |
 | pii_masking | boolean? |  yes  |  |
 

---

#### [GetCouponResponse](#GetCouponResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | available_coupon_list | [[Coupon](#Coupon)]? |  yes  |  |
 | page | [PageCoupon](#PageCoupon)? |  yes  |  |
 

---

#### [GetShareCartLinkRequest](#GetShareCartLinkRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string? |  yes  | Cart uid for generating sharing |
 | meta | string? |  yes  | Staff, Ordering store or any other data. This data will be used to generate link as well as sent as shared details. |
 

---

#### [GetShareCartLinkResponse](#GetShareCartLinkResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | share_url | string? |  yes  | Short shareable final url |
 | token | string? |  yes  | Short url unique id |
 

---

#### [GiftDetail](#GiftDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | gift_message | string? |  yes  |  |
 | is_gift_applied | boolean? |  yes  |  |
 

---

#### [LoyaltyPoints](#LoyaltyPoints)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | applicable | number? |  yes  |  |
 | description | string? |  yes  |  |
 | is_applied | boolean? |  yes  |  |
 | total | number? |  yes  |  |
 

---

#### [OfferItem](#OfferItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | auto_applied | boolean? |  yes  | Whether offer discount is auto applied in cart |
 | best | boolean? |  yes  | Is true for best offer from all offers present for all sellers |
 | margin | number? |  yes  | Percentage value of discount |
 | price | [OfferPrice](#OfferPrice)? |  yes  |  |
 | quantity | number? |  yes  | Quantity on which offer is applicable |
 | total | number? |  yes  | Total price of offer quantity with discount |
 | type | string? |  yes  | Offer type |
 

---

#### [OfferPrice](#OfferPrice)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bulk_effective | number? |  yes  | Discounted per unit price for current offer object |
 | currency_code | string? |  yes  | Currency code for all amounts |
 | currency_symbol | string? |  yes  | Currency symbol for currency |
 | effective | number? |  yes  | Current per unit price of product after existing deductions |
 | marked | number? |  yes  | Original price of product |
 

---

#### [OfferSeller](#OfferSeller)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string? |  yes  |  |
 | uid | number? |  yes  | Seller id |
 

---

#### [Ownership](#Ownership)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | payable_by | string? |  yes  | promo amount bearable party |
 | payable_category | string? |  yes  | promo amount payable category |
 

---

#### [PageCoupon](#PageCoupon)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number? |  yes  |  |
 | has_next | boolean? |  yes  |  |
 | has_previous | boolean? |  yes  |  |
 | total | number? |  yes  |  |
 | total_item_count | number? |  yes  |  |
 

---

#### [PaymentCouponValidate](#PaymentCouponValidate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | coupon_validity | [CouponValidity](#CouponValidity)? |  yes  |  |
 | message | string? |  yes  |  |
 | success | boolean |  no  |  |
 

---

#### [PaymentSelectionLock](#PaymentSelectionLock)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | default_options | string? |  yes  |  |
 | enabled | boolean? |  yes  |  |
 | payment_identifier | string? |  yes  |  |
 

---

#### [PickupStoreDetail](#PickupStoreDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address | string? |  yes  |  |
 | address_type | string? |  yes  |  |
 | area | string? |  yes  |  |
 | area_code | string? |  yes  |  |
 | area_code_slug | string? |  yes  |  |
 | city | string? |  yes  |  |
 | country | string? |  yes  |  |
 | email | string? |  yes  |  |
 | id | number? |  yes  |  |
 | landmark | string? |  yes  |  |
 | name | string? |  yes  |  |
 | phone | string? |  yes  |  |
 | pincode | number? |  yes  |  |
 | state | string? |  yes  |  |
 | store_code | string? |  yes  |  |
 | uid | number? |  yes  |  |
 

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
 | cart_item_meta | string? |  yes  |  |
 | extra_meta | string? |  yes  |  |
 | gift_card | string? |  yes  |  |
 | identifier | string? |  yes  |  |
 | is_gift_visible | boolean? |  yes  |  |
 | meta | string? |  yes  |  |
 | mto_quantity | number? |  yes  |  |
 | parent_item_identifiers | string? |  yes  |  |
 | price | [ArticlePriceInfo](#ArticlePriceInfo)? |  yes  |  |
 | product_group_tags | [string]? |  yes  |  |
 | quantity | number? |  yes  |  |
 | seller | [BaseInfo](#BaseInfo)? |  yes  |  |
 | seller_identifier | string? |  yes  |  |
 | size | string? |  yes  |  |
 | store | [StoreInfo](#StoreInfo)? |  yes  |  |
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

#### [RawBreakup](#RawBreakup)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cod_charge | number? |  yes  |  |
 | convenience_fee | number? |  yes  |  |
 | coupon | number? |  yes  |  |
 | delivery_charge | number? |  yes  |  |
 | discount | number? |  yes  |  |
 | fynd_cash | number? |  yes  |  |
 | gift_card | number? |  yes  |  |
 | gst_charges | number? |  yes  |  |
 | mrp_total | number? |  yes  |  |
 | subtotal | number? |  yes  |  |
 | total | number? |  yes  |  |
 | vog | number? |  yes  |  |
 | you_saved | number? |  yes  |  |
 

---

#### [RewardPointRequest](#RewardPointRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | points | boolean |  no  |  |
 

---

#### [SaveAddressResponse](#SaveAddressResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string? |  yes  |  |
 | is_default_address | boolean? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [SelectCartAddressRequest](#SelectCartAddressRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | billing_address_id | string? |  yes  |  |
 | cart_id | string? |  yes  |  |
 | id | string? |  yes  |  |
 

---

#### [SharedCart](#SharedCart)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | breakup_values | [CartBreakup](#CartBreakup)? |  yes  |  |
 | buy_now | boolean? |  yes  |  |
 | cart_id | number? |  yes  |  |
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
 | shared_cart_details | [SharedCartDetails](#SharedCartDetails)? |  yes  |  |
 | uid | string? |  yes  |  |
 

---

#### [SharedCartDetails](#SharedCartDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | created_on | string? |  yes  |  |
 | meta | string? |  yes  | Meta data sent while generating share cart link |
 | source | string? |  yes  | Share link device and other source information |
 | token | string? |  yes  | Short link id |
 | user | string? |  yes  | User details of who generated share link |
 

---

#### [SharedCartResponse](#SharedCartResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cart | [SharedCart](#SharedCart)? |  yes  |  |
 | error | string? |  yes  |  |
 

---

#### [ShipmentPromise](#ShipmentPromise)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | formatted | [PromiseFormatted](#PromiseFormatted)? |  yes  |  |
 | timestamp | [PromiseTimestamp](#PromiseTimestamp)? |  yes  |  |
 

---

#### [ShipmentResponse](#ShipmentResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | box_type | string? |  yes  |  |
 | dp_id | string? |  yes  |  |
 | dp_options | string? |  yes  |  |
 | fulfillment_id | number? |  yes  |  |
 | fulfillment_type | string? |  yes  |  |
 | items | [[CartProductInfo](#CartProductInfo)]? |  yes  |  |
 | order_type | string? |  yes  |  |
 | promise | [ShipmentPromise](#ShipmentPromise)? |  yes  |  |
 | shipment_type | string? |  yes  |  |
 | shipments | number? |  yes  |  |
 

---

#### [StaffCheckout](#StaffCheckout)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | employee_code | string? |  yes  |  |
 | first_name | string |  no  |  |
 | last_name | string |  no  |  |
 | user | string |  no  |  |
 

---

#### [StoreDetailsResponse](#StoreDetailsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[PickupStoreDetail](#PickupStoreDetail)]? |  yes  |  |
 

---

#### [StoreInfo](#StoreInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string? |  yes  |  |
 | store_code | string? |  yes  |  |
 | uid | number? |  yes  |  |
 

---

#### [Tags](#Tags)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | tags | string? |  yes  |  |
 

---

#### [UpdateAddressResponse](#UpdateAddressResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string? |  yes  |  |
 | is_default_address | boolean? |  yes  |  |
 | is_updated | boolean? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [UpdateCartDetailResponse](#UpdateCartDetailResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cart | [CartDetailResponse](#CartDetailResponse)? |  yes  |  |
 | message | string? |  yes  |  |
 | success | boolean? |  yes  | True if all items are added successfully. False if partially added or not added. |
 

---

#### [UpdateCartPaymentRequest](#UpdateCartPaymentRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address_id | string? |  yes  |  |
 | aggregator_name | string? |  yes  |  |
 | id | string? |  yes  |  |
 | merchant_code | string? |  yes  |  |
 | payment_identifier | string? |  yes  |  |
 | payment_mode | string? |  yes  |  |
 

---

#### [UpdateCartRequest](#UpdateCartRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[UpdateProductCart](#UpdateProductCart)]? |  yes  |  |
 | operation | string |  no  |  |
 

---

#### [UpdateCartShipmentItem](#UpdateCartShipmentItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | article_uid | string |  no  | Article mongo id |
 | quantity | number? |  yes  | Quantity of product in shipment |
 | shipment_type | string |  no  | Shipment delivery type |
 

---

#### [UpdateCartShipmentRequest](#UpdateCartShipmentRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | shipments | [[UpdateCartShipmentItem](#UpdateCartShipmentItem)] |  no  |  |
 

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
 | meta | string? |  yes  |  |
 | parent_item_identifiers | string? |  yes  |  |
 | quantity | number? |  yes  |  |
 

---




