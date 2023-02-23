



##### [Back to Application docs](./README.md)

## Logistic Methods
Logistics Promise Engine APIs allows you to configure zone, pincode, TAT, logistics and many more useful features. 
* [getPincodeCity](#getpincodecity)
* [getTatProduct](#gettatproduct)
* [upsertZoneControllerView](#upsertzonecontrollerview)



## Methods with example and description


### getPincodeCity
Get Pincode API



```javascript
// Promise
const promise = logistic.getPincodeCity({  pincode : value });

// Async/Await
const data = await logistic.getPincodeCity({  pincode : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| pincode | string | yes | A `pincode` contains a specific address of a location. |  



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


### getTatProduct
Get TAT API



```javascript
// Promise
const promise = logistic.getTatProduct({  body : value });

// Async/Await
const data = await logistic.getTatProduct({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
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


### upsertZoneControllerView
GET zone from the Pincode.



```javascript
// Promise
const promise = logistic.upsertZoneControllerView({  body : value });

// Async/Await
const data = await logistic.upsertZoneControllerView({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [GetZoneFromPincodeViewRequest](#GetZoneFromPincodeViewRequest) | yes | Request body |


This API returns zone from the Pincode View.

*Returned Response:*




[GetZoneFromPincodeViewResponse](#GetZoneFromPincodeViewResponse)

Response status_code




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---



### Schemas

 
 
 #### [PincodeErrorSchemaResponse](#PincodeErrorSchemaResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 | type | string |  no  |  |
 | value | string |  no  |  |

---


 
 
 #### [PincodeParentsResponse](#PincodeParentsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | uid | string |  no  |  |
 | sub_type | string |  no  |  |
 | display_name | string |  no  |  |

---


 
 
 #### [PincodeMetaResponse](#PincodeMetaResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | internal_zone_id | number |  no  |  |
 | zone | string |  no  |  |

---


 
 
 #### [PincodeDataResponse](#PincodeDataResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | uid | string |  no  |  |
 | sub_type | string |  no  |  |
 | parents | [[PincodeParentsResponse](#PincodeParentsResponse)] |  no  |  |
 | error | [PincodeErrorSchemaResponse](#PincodeErrorSchemaResponse) |  yes  |  |
 | display_name | string |  no  |  |
 | meta | [PincodeMetaResponse](#PincodeMetaResponse) |  no  |  |

---


 
 
 #### [PincodeApiResponse](#PincodeApiResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error | [PincodeErrorSchemaResponse](#PincodeErrorSchemaResponse) |  yes  |  |
 | data | [[PincodeDataResponse](#PincodeDataResponse)] |  no  |  |
 | success | boolean |  yes  |  |

---


 
 
 #### [TATCategoryRequest](#TATCategoryRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | level | string |  no  |  |
 | id | number |  no  |  |

---


 
 
 #### [TATArticlesRequest](#TATArticlesRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | category | [TATCategoryRequest](#TATCategoryRequest) |  no  |  |
 | manufacturing_time_unit | string |  no  |  |
 | manufacturing_time | number |  no  |  |

---


 
 
 #### [TATLocationDetailsRequest](#TATLocationDetailsRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | articles | [[TATArticlesRequest](#TATArticlesRequest)] |  no  |  |
 | fulfillment_id | number |  no  |  |
 | from_pincode | string |  no  |  |

---


 
 
 #### [TATViewRequest](#TATViewRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action | string |  no  |  |
 | source | string |  no  |  |
 | location_details | [[TATLocationDetailsRequest](#TATLocationDetailsRequest)] |  no  |  |
 | journey | string |  no  |  |
 | to_pincode | string |  no  |  |
 | identifier | string |  no  |  |

---


 
 
 #### [TATErrorSchemaResponse](#TATErrorSchemaResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 | type | string |  no  |  |
 | value | string |  no  |  |

---


 
 
 #### [TATTimestampResponse](#TATTimestampResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | min | number |  no  |  |
 | max | number |  no  |  |

---


 
 
 #### [TATFormattedResponse](#TATFormattedResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | min | string |  no  |  |
 | max | string |  no  |  |

---


 
 
 #### [TATPromiseResponse](#TATPromiseResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | timestamp | [TATTimestampResponse](#TATTimestampResponse) |  no  |  |
 | formatted | [TATFormattedResponse](#TATFormattedResponse) |  no  |  |

---


 
 
 #### [TATArticlesResponse](#TATArticlesResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_cod_available | boolean |  no  |  |
 | error | [TATErrorSchemaResponse](#TATErrorSchemaResponse) |  no  |  |
 | _manufacturing_time_seconds | number |  no  |  |
 | category | [TATCategoryRequest](#TATCategoryRequest) |  no  |  |
 | manufacturing_time | number |  no  |  |
 | promise | [TATPromiseResponse](#TATPromiseResponse) |  no  |  |
 | manufacturing_time_unit | string |  no  |  |

---


 
 
 #### [TATLocationDetailsResponse](#TATLocationDetailsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | articles | [[TATArticlesResponse](#TATArticlesResponse)] |  no  |  |
 | fulfillment_id | number |  no  |  |
 | from_pincode | string |  no  |  |

---


 
 
 #### [TATViewResponse](#TATViewResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action | string |  no  |  |
 | stormbreaker_uuid | string |  no  |  |
 | payment_mode | string |  no  |  |
 | source | string |  no  |  |
 | location_details | [[TATLocationDetailsResponse](#TATLocationDetailsResponse)] |  no  |  |
 | journey | string |  no  |  |
 | to_pincode | string |  no  |  |
 | error | [TATErrorSchemaResponse](#TATErrorSchemaResponse) |  no  |  |
 | request_uuid | string |  no  |  |
 | to_city | string |  no  |  |
 | success | boolean |  no  |  |
 | identifier | string |  no  |  |
 | is_cod_available | boolean |  no  |  |

---


 
 
 #### [GetZoneFromPincodeViewRequest](#GetZoneFromPincodeViewRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | pincode | string |  yes  |  |
 | country | string |  yes  |  |

---


 
 
 #### [GetZoneFromPincodeViewResponse](#GetZoneFromPincodeViewResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | zones | [string] |  yes  |  |
 | serviceability_type | string |  yes  |  |

---




