



##### [Back to Application docs](./README.md)

## Logistic Methods
Open API Documentation for opex-logistics domain
* [getPincodeView](#getpincodeview)
* [getTATView](#gettatview)



## Methods with example and description


### getPincodeView
Get Pincode API



```javascript
// Promise
const promise = logistic.getPincodeView({  pincode : value,
 xApplicationId : value });

// Async/Await
const data = await logistic.getPincodeView({  pincode : value,
 xApplicationId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| pincode | string | yes | A `pincode` contains a specific address of a location. |    
| xApplicationId | string | no | Application id is neccessary for app authorizations & retrieving config of application |  



Get pincode data

*Returned Response:*




[PincodeApiResponse](#PincodeApiResponse)

Get pincode data




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Pincode data found</i></summary>

```json
{
  "value": {
    "data": [
      {
        "sub_type": "pincode",
        "name": "421202",
        "error": {
          "type": null,
          "value": null,
          "message": null
        },
        "uid": "pincode:INDIA|MAHARASHTRA|MUMBAI|421202",
        "display_name": "421202",
        "meta": {
          "zone": "West",
          "internal_zone_id": 4
        },
        "parents": [
          {
            "sub_type": "country",
            "name": "India",
            "display_name": "India",
            "uid": "country:INDIA"
          },
          {
            "sub_type": "state",
            "name": "Maharashtra",
            "display_name": "Maharashtra",
            "uid": "state:INDIA|MAHARASHTRA"
          },
          {
            "sub_type": "city",
            "name": "Thane",
            "display_name": "Thane",
            "uid": "city:INDIA|MAHARASHTRA|MUMBAI"
          }
        ]
      }
    ],
    "request_uuid": "fce9f431215e71c9ee0e86e792ae1dce4",
    "stormbreaker_uuid": "56cca764-9fab-41f4-adb8-6e9683532aa5",
    "error": {
      "type": null,
      "value": null,
      "message": null
    },
    "success": true
  }
}
```
</details>

<details>
<summary><i>&nbsp; Pincode not found</i></summary>

```json
{
  "value": {
    "data": [
      {
        "sub_type": "pincode",
        "name": "999999",
        "error": {
          "type": "DoesNotExist",
          "value": "999999",
          "message": "pincode 999999 does not exist"
        }
      }
    ],
    "request_uuid": "fce9fb9215e71c9ee0e86e792ae1dce4",
    "stormbreaker_uuid": "03b353ed-9dbd-4629-80b2-2be337859a20",
    "error": {
      "type": null,
      "value": null,
      "message": null
    },
    "success": false
  }
}
```
</details>

</details>









---


### getTATView
Get TAT API



```javascript
// Promise
const promise = logistic.getTATView({  body : value,
 xApplicationId : value });

// Async/Await
const data = await logistic.getTATView({  body : value,
 xApplicationId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| xApplicationId | string | no | Application id is neccessary for app authorizations & retrieving config of application |  
| body | [TATViewRequest](#TATViewRequest) | yes | Request body |


Get TAT data

*Returned Response:*




[TATViewResponse](#TATViewResponse)

Get TAT  data




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Pincode data found</i></summary>

```json
{
  "value": {
    "source": "FYND-APP",
    "identifier": "PDP",
    "journey": "forward",
    "action": "get_tat",
    "to_pincode": "143001",
    "location_details": [
      {
        "fulfillment_id": 8,
        "from_pincode": "560023",
        "articles": [
          {
            "category": {
              "level": "l3",
              "id": 155
            },
            "manufacturing_time": 2,
            "manufacturing_time_unit": "days",
            "promise": {
              "timestamp": {
                "min": 1663564548,
                "max": 1663650948
              },
              "formatted": {
                "min": "19 Sep, Monday",
                "max": "20 Sep, Tuesday"
              }
            },
            "error": {
              "type": null,
              "value": null,
              "message": null
            },
            "is_cod_available": true,
            "_manufacturing_time_seconds": 172800
          }
        ]
      }
    ],
    "request_uuid": "b4adf5508e34f17971817c3581e16310",
    "stormbreaker_uuid": "4b8084d4-ea74-45af-8ddc-c38e29bf0cfb",
    "error": {
      "type": null,
      "value": null,
      "message": null
    },
    "to_city": "Amritsar",
    "payment_mode": "prepaid",
    "is_cod_available": true,
    "success": true
  }
}
```
</details>

<details>
<summary><i>&nbsp; Pincode not found</i></summary>

```json
{
  "value": {
    "source": "FYND-APP",
    "identifier": "PDP",
    "journey": "forward",
    "action": "get_tat",
    "to_pincode": "99999",
    "location_details": [
      {
        "fulfillment_id": 8,
        "from_pincode": "560023",
        "articles": [
          {
            "category": {
              "level": "l3",
              "id": 155
            },
            "manufacturing_time": 2,
            "manufacturing_time_unit": "days",
            "promise": null,
            "error": {
              "type": "ValueError",
              "value": "99999",
              "message": "We are not delivering to 99999"
            }
          }
        ]
      }
    ],
    "request_uuid": "4b99d15fddb2b9fc2d6ab99a1c933010",
    "stormbreaker_uuid": "6a847909-1d59-43e7-9ae0-15f5de8fc7d7",
    "error": {
      "type": "ValueError",
      "value": "99999",
      "message": "All of the items in your cart are not deliverable to 99999"
    },
    "to_city": "",
    "payment_mode": "prepaid",
    "is_cod_available": true,
    "success": false
  }
}
```
</details>

</details>









---



### Schemas

 
 
 #### [ValidatePincodeSchema](#ValidatePincodeSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | journey | string |  no  |  |
 | source | string |  no  |  |
 | action | string |  yes  |  |
 | to_pincode | string |  yes  |  |

---


 
 
 #### [ErrorResponse](#ErrorResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | journey | string |  yes  |  |
 | message | string |  yes  |  |
 | type | string |  yes  |  |

---


 
 
 #### [ValidatePincodeResponseSchema](#ValidatePincodeResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error | [ErrorResponse](#ErrorResponse) |  yes  |  |
 | request_uuid | string |  yes  |  |
 | journey | string |  no  |  |
 | action | string |  yes  |  |
 | success | boolean |  yes  |  |
 | to_pincode | string |  yes  |  |
 | source | string |  no  |  |

---


 
 
 #### [Error](#Error)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | value | string |  no  |  |
 | message | string |  no  |  |
 | type | string |  no  |  |

---


 
 
 #### [Meta](#Meta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | internal_zone_id | number |  no  |  |
 | zone | string |  no  |  |

---


 
 
 #### [Parents](#Parents)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | uid | string |  no  |  |
 | display_name | string |  no  |  |
 | sub_type | string |  no  |  |

---


 
 
 #### [DataResponse](#DataResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error | [Error](#Error) |  yes  |  |
 | sub_type | string |  no  |  |
 | meta | [Meta](#Meta) |  no  |  |
 | uid | string |  no  |  |
 | display_name | string |  no  |  |
 | parents | [[Parents](#Parents)] |  no  |  |
 | name | string |  no  |  |

---


 
 
 #### [PincodeApiResponse](#PincodeApiResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error | [Error](#Error) |  yes  |  |
 | data | [[DataResponse](#DataResponse)] |  no  |  |
 | success | boolean |  yes  |  |

---


 
 
 #### [Category](#Category)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | level | string |  no  |  |

---


 
 
 #### [Articles](#Articles)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | category | [Category](#Category) |  no  |  |
 | manufacturing_time | number |  no  |  |
 | manufacturing_time_unit | string |  no  |  |

---


 
 
 #### [LocationDetails](#LocationDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | from_pincode | string |  no  |  |
 | articles | [[Articles](#Articles)] |  no  |  |
 | fulfillment_id | number |  no  |  |

---


 
 
 #### [TATViewRequest](#TATViewRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | location_details | [[LocationDetails](#LocationDetails)] |  no  |  |
 | identifier | string |  yes  |  |
 | journey | string |  yes  |  |
 | action | string |  yes  |  |
 | to_pincode | string |  yes  |  |
 | source | string |  yes  |  |

---


 
 
 #### [TATError](#TATError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | value | string |  no  |  |
 | message | string |  no  |  |
 | type | string |  no  |  |

---


 
 
 #### [Timestamp](#Timestamp)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | min | number |  no  |  |
 | max | number |  no  |  |

---


 
 
 #### [Formatted](#Formatted)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | min | string |  no  |  |
 | max | string |  no  |  |

---


 
 
 #### [Promise](#Promise)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | timestamp | [Timestamp](#Timestamp) |  no  |  |
 | formatted | [Formatted](#Formatted) |  no  |  |

---


 
 
 #### [ArticlesResponse](#ArticlesResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error | [TATError](#TATError) |  yes  |  |
 | promise | [Promise](#Promise) |  no  |  |
 | manufacturing_time | number |  no  |  |
 | is_cod_available | boolean |  no  |  |
 | manufacturing_time_unit | string |  no  |  |
 | category | [Category](#Category) |  no  |  |
 | _manufacturing_time_seconds | string |  no  |  |

---


 
 
 #### [LocationDetailsResponse](#LocationDetailsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | from_pincode | string |  no  |  |
 | articles | [[ArticlesResponse](#ArticlesResponse)] |  no  |  |
 | fulfillment_id | number |  no  |  |

---


 
 
 #### [TATViewResponse](#TATViewResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | location_details | [[LocationDetailsResponse](#LocationDetailsResponse)] |  no  |  |
 | identifier | string |  yes  |  |
 | error | [TATError](#TATError) |  yes  |  |
 | request_uuid | string |  yes  |  |
 | journey | string |  yes  |  |
 | action | string |  yes  |  |
 | payment_mode | string |  yes  |  |
 | is_cod_available | boolean |  yes  |  |
 | success | boolean |  yes  |  |
 | to_pincode | string |  yes  |  |
 | to_city | string |  yes  |  |
 | source | string |  yes  |  |
 | stormbreaker_uuid | string |  yes  |  |

---




