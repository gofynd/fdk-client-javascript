




##### [Back to Application docs](./README.md)

## Logistic Methods
Logistics Promise Engine APIs allows you to configure zone, pincode, TAT, logistics and many more useful features.

* [getAllCountries](#getallcountries)
* [getCountries](#getcountries)
* [getCountry](#getcountry)
* [getLocalities](#getlocalities)
* [getLocality](#getlocality)
* [getOptimalLocations](#getoptimallocations)
* [getPincodeCity](#getpincodecity)
* [getPincodeZones](#getpincodezones)
* [getTatProduct](#gettatproduct)



## Methods with example and description




### getAllCountries
Get Country List



```javascript
// Promise
const promise = applicationClient.logistic.getAllCountries();

// Async/Await
const data = await applicationClient.logistic.getAllCountries();
```






Get all countries

*Returned Response:*




[CountryListResponse](#CountryListResponse)

Get Country List




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getCountries
Get all countries and associated data.



```javascript
// Promise
const promise = applicationClient.logistic.getCountries({  onboarding : value,
 pageNo : value,
 pageSize : value,
 q : value });

// Async/Await
const data = await applicationClient.logistic.getCountries({  onboarding : value,
 pageNo : value,
 pageSize : value,
 q : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| onboarding | boolean | no | Only fetch countries which allowed for onboard on Platform. |    
| pageNo | number | no | page number. |    
| pageSize | number | no | page size. |    
| q | string | no | search. |  



Retrieve of all countries.

*Returned Response:*




[GetCountries](#GetCountries)

Successfully retrieved all countries with associated data.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Country List 1</i></summary>

```json
{
  "value": {
    "items": [
      {
        "id": "64c6ac280000000000000000",
        "name": "INDIA",
        "type": "country",
        "display_name": "India",
        "iso2": "IN",
        "iso3": "IND",
        "timezones": [
          "Asia/Kolkata"
        ],
        "currency": "INR",
        "phone_code": "+91",
        "hierarchy": [
          {
            "name": "State",
            "slug": "state"
          },
          {
            "name": "City",
            "slug": "city"
          },
          {
            "name": "Pincode",
            "slug": "pincode"
          }
        ]
      },
      {
        "name": "UNITED STATES",
        "display_name": "USA",
        "type": "country",
        "id": "66a931280000000000000000",
        "iso2": "US",
        "iso3": "USA",
        "timezones": [
          "America/St_Johns",
          "America/Halifax",
          "America/Glace_Bay",
          "America/Moncton",
          "America/Goose_Bay",
          "America/Blanc-Sablon",
          "America/Toronto",
          "America/Iqaluit",
          "America/Atikokan",
          "America/Winnipeg",
          "America/Resolute",
          "America/Rankin_Inlet",
          "America/Regina",
          "America/Swift_Current",
          "America/Edmonton",
          "America/Cambridge_Bay",
          "America/Inuvik",
          "America/Creston",
          "America/Dawson_Creek",
          "America/Fort_Nelson",
          "America/Whitehorse",
          "America/Dawson",
          "America/Vancouver"
        ],
        "currency": "USD",
        "phone_code": "+1",
        "hierarchy": [
          {
            "name": "State",
            "slug": "state"
          },
          {
            "name": "City",
            "slug": "city"
          },
          {
            "name": "Zipcode",
            "slug": "pincode"
          }
        ]
      }
    ],
    "page": {
      "current": 1,
      "has_next": true,
      "has_previous": false,
      "item_total": 2,
      "size": 1,
      "type": "number"
    }
  }
}
```
</details>

<details>
<summary><i>&nbsp; Country List 2</i></summary>

```json
{
  "value": {
    "items": [
      {
        "id": "669ea5280000000000000000",
        "name": "United Arab Emirates",
        "display_name": "United Arab Emirates",
        "type": "country",
        "iso2": "AE",
        "iso3": "ARE",
        "timezones": [
          "Asia/Dubai"
        ],
        "currency": "DIR",
        "phone_code": "+971",
        "hierarchy": [
          {
            "name": "City",
            "slug": "city"
          },
          {
            "name": "Area",
            "slug": "sector"
          }
        ]
      }
    ],
    "page": {
      "current": 1,
      "has_next": true,
      "has_previous": false,
      "item_total": 1,
      "size": 1,
      "type": "number"
    }
  }
}
```
</details>

</details>









---


### getCountry
Get single country and associated data.



```javascript
// Promise
const promise = applicationClient.logistic.getCountry({  countryIsoCode : value });

// Async/Await
const data = await applicationClient.logistic.getCountry({  countryIsoCode : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| countryIsoCode | string | yes | The `country_iso_code` is ISO-2 (alpha-2) code for the country. |  



Retrieve data for a single country and address format.

*Returned Response:*




[GetCountry](#GetCountry)

Get country data.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Country 1</i></summary>

```json
{
  "value": {
    "name": "INDIA",
    "display_name": "India",
    "type": "country",
    "id": "64c6ac280000000000000000",
    "iso2": "IN",
    "iso3": "IND",
    "timezones": [
      "Asia/Kolkata"
    ],
    "currency": "INR",
    "phone_code": "+91",
    "hierarchy": [
      {
        "name": "Pincode",
        "slug": "pincode"
      },
      {
        "name": "City",
        "slug": "city"
      },
      {
        "name": "State",
        "slug": "state"
      }
    ],
    "fields": {
      "serviceability_fields": [
        "pincode"
      ],
      "address_template": {
        "checkout_form": "{address} {area}_{landmark} {pincode}_{city} {state}_{name} {phone}_{email}",
        "invoice_display": "{address} {area}_{landmark}_{city} {pincode}_{state} {country}"
      },
      "address": [
        {
          "display_name": "Flat No/House No",
          "slug": "address",
          "input": "textbox",
          "required": true,
          "edit": true,
          "values": null,
          "validation": null,
          "error_text": null
        },
        {
          "display_name": "Building Name/street",
          "slug": "area",
          "input": "textbox",
          "required": true,
          "edit": true,
          "values": null,
          "validation": null,
          "error_text": null
        },
        {
          "display_name": "Locality/Landmark",
          "slug": "landmark",
          "input": "textbox",
          "required": true,
          "edit": true,
          "values": null,
          "validation": null,
          "error_text": null
        },
        {
          "display_name": "Pincode",
          "slug": "pincode",
          "input": "textbox",
          "required": true,
          "edit": true,
          "values": {
            "get_one": {
              "operation_id": "getLocality",
              "params": {
                "path": {
                  "locality_value": "400601",
                  "locality_type": "pincode"
                }
              }
            }
          },
          "validation": {
            "type": "regex",
            "regex": {
              "value": "^[0-9]{6}$",
              "length": {
                "min": 6,
                "max": 6
              }
            }
          },
          "error_text": "Invalid Pincode"
        },
        {
          "display_name": "City",
          "slug": "city",
          "input": "textbox",
          "required": true,
          "edit": false,
          "values": null,
          "validation": null,
          "error_text": "Invalid City"
        },
        {
          "display_name": "State",
          "slug": "state",
          "input": "textbox",
          "required": true,
          "edit": false,
          "values": null,
          "validation": null,
          "error_text": "Invalid State"
        },
        {
          "display_name": "Full Name",
          "slug": "name",
          "input": "textbox",
          "required": true,
          "edit": true,
          "values": null,
          "validation": {
            "type": "regex",
            "regex": {
              "value": ".*",
              "length": {
                "min": null,
                "max": null
              }
            }
          },
          "error_text": null
        },
        {
          "display_name": "Mobile Number",
          "slug": "phone",
          "input": "textbox",
          "required": true,
          "edit": true,
          "values": null,
          "validation": {
            "type": "regex",
            "regex": {
              "value": "^\\\\+[0-9]{2}\\\\s[0-9]{10}$",
              "length": {
                "min": 13,
                "max": 13
              }
            }
          },
          "error_text": "Invalid Phone Number"
        },
        {
          "display_name": "Email",
          "slug": "email",
          "input": "textbox",
          "required": false,
          "edit": true,
          "values": null,
          "validation": {
            "type": "regex",
            "regex": {
              "value": "^[\\w\\.-]+@[a-zA-Z\\d\\.-]+\\.[a-zA-Z]{2,}$",
              "length": {
                "min": null,
                "max": null
              }
            }
          },
          "error_text": "Invalid Email"
        }
      ]
    }
  }
}
```
</details>

<details>
<summary><i>&nbsp; Country 2</i></summary>

```json
{
  "value": {
    "name": "United Arab Emirates",
    "display_name": "United Arab Emirates",
    "type": "country",
    "id": "669ea5280000000000000000",
    "iso2": "AE",
    "iso3": "ARE",
    "timezones": [
      "Asia/Dubai"
    ],
    "currency": "DIR",
    "phone_code": "+971",
    "hierarchy": [
      {
        "name": "Area",
        "slug": "sector"
      },
      {
        "name": "City",
        "slug": "city"
      }
    ],
    "fields": {
      "serviceability_fields": [
        "city",
        "sector"
      ],
      "address_template": {
        "checkout_form": "{address} {area}_{landmark}_{city} {sector}_{name} {phone}_{email}",
        "invoice_display": "{address} {area}_{landmark}_{city}_{sector} {country}"
      },
      "address": [
        {
          "display_name": "Flat No/House No",
          "slug": "address",
          "input": "textbox",
          "required": true,
          "edit": true,
          "values": null,
          "validation": null,
          "error_text": null
        },
        {
          "display_name": "Building Name/street",
          "slug": "area",
          "input": "textbox",
          "required": true,
          "edit": true,
          "values": null,
          "validation": null,
          "error_text": null
        },
        {
          "display_name": "Locality/Landmark",
          "slug": "landmark",
          "input": "textbox",
          "required": true,
          "edit": true,
          "values": null,
          "validation": null,
          "error_text": null
        },
        {
          "display_name": "City",
          "slug": "city",
          "input": "textbox",
          "required": true,
          "edit": true,
          "values": {
            "get_all": {
              "operation_id": "getLocalities",
              "params": {
                "path": {
                  "locality_type": "city"
                }
              }
            }
          },
          "validation": null,
          "error_text": "Invalid Pincode"
        },
        {
          "display_name": "Area",
          "slug": "sector",
          "input": "textbox",
          "required": true,
          "edit": true,
          "values": {
            "get_all": {
              "operation_id": "getLocalities",
              "params": {
                "path": {
                  "locality_type": "sector"
                },
                "query": {
                  "city": "THANE"
                }
              }
            }
          },
          "validation": null,
          "error_text": "Invalid Area"
        },
        {
          "display_name": "Full Name",
          "slug": "name",
          "input": "textbox",
          "required": true,
          "edit": true,
          "values": null,
          "validation": {
            "type": "regex",
            "regex": {
              "value": ".*",
              "length": {
                "min": null,
                "max": null
              }
            }
          },
          "error_text": null
        },
        {
          "display_name": "Mobile Number",
          "slug": "phone",
          "input": "textbox",
          "required": true,
          "edit": true,
          "values": null,
          "validation": {
            "type": "regex",
            "regex": {
              "value": "^\\\\+[0-9]{2}\\\\s[0-9]{10}$",
              "length": {
                "min": 13,
                "max": 13
              }
            }
          },
          "error_text": "Invalid Phone Number"
        },
        {
          "display_name": "Email",
          "slug": "email",
          "input": "textbox",
          "required": false,
          "edit": true,
          "values": null,
          "validation": {
            "type": "regex",
            "regex": {
              "value": "^[\\w\\.-]+@[a-zA-Z\\d\\.-]+\\.[a-zA-Z]{2,}$",
              "length": {
                "min": null,
                "max": null
              }
            }
          },
          "error_text": "Invalid Email"
        }
      ]
    }
  }
}
```
</details>

</details>









---


### getLocalities
Get Localities.



```javascript
// Promise
const promise = applicationClient.logistic.getLocalities({  localityType : value,
 country : value,
 state : value,
 city : value,
 pageNo : value,
 pageSize : value,
 q : value });

// Async/Await
const data = await applicationClient.logistic.getLocalities({  localityType : value,
 country : value,
 state : value,
 city : value,
 pageNo : value,
 pageSize : value,
 q : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| localityType | string | yes | A `locality_type` contains unique geographical division. |    
| country | string | no | A `country` contains a specific value of the country iso2 code. |    
| state | string | no | A `state` contains a specific value of the state, province. |    
| city | string | no | A `city` contains a specific value of the city. |    
| pageNo | number | no | page number. |    
| pageSize | number | no | page size. |    
| q | string | no | search. |  



Get Localities data.

*Returned Response:*




[GetLocalities](#GetLocalities)

Get Localities data




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Country 1</i></summary>

```json
{
  "value": {
    "items": [
      {
        "id": "64b78b60707446a37f2afbbb",
        "name": "Maharashtra",
        "display_name": "Maharashtra",
        "type": "state",
        "parent_ids": [
          "64b78b60707446a37f2aec6f"
        ]
      },
      {
        "id": "64c7fda80000000000000000",
        "name": "400603",
        "display_name": "400603",
        "type": "pincode",
        "parent_ids": [
          "64b78b60707446a37f2aec6f",
          "64b78b60707446a37f2aec4b",
          "64b78b60707446a37f2aec43"
        ]
      }
    ],
    "page": {
      "current": 1,
      "has_next": true,
      "has_previous": false,
      "item_total": 2,
      "size": 1,
      "type": "number"
    }
  }
}
```
</details>

<details>
<summary><i>&nbsp; Country 2</i></summary>

```json
{
  "value": {
    "items": [
      {
        "id": "63d95e280000000000000000",
        "name": "Thane",
        "display_name": "Thane",
        "type": "city",
        "parent_ids": [
          "64b78b60707446a37f2aec6f",
          "64b78b60707446a37f2aec4b"
        ]
      }
    ],
    "page": {
      "current": 1,
      "has_next": true,
      "has_previous": false,
      "item_total": 1,
      "size": 1,
      "type": "number"
    }
  }
}
```
</details>

</details>









---


### getLocality
Get Locality API



```javascript
// Promise
const promise = applicationClient.logistic.getLocality({  localityType : value,
 localityValue : value,
 country : value,
 state : value,
 city : value });

// Async/Await
const data = await applicationClient.logistic.getLocality({  localityType : value,
 localityValue : value,
 country : value,
 state : value,
 city : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| localityType | string | yes | A `locality_type` contains value geographical division. |   
| localityValue | string | yes | A `locality_value` contains a specific name of the locality. |    
| country | string | no | A `country` contains a specific value of the country iso2 code. |    
| state | string | no | A `state` contains a specific value of the state, province. |    
| city | string | no | A `city` contains a specific value of the city. |  



Get Locality data

*Returned Response:*




[GetLocality](#GetLocality)

Get Locality data




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Country 1</i></summary>

```json
{
  "value": {
    "id": "649f1f280000000000000000",
    "name": "ABU DHABI",
    "display_name": "Abu Dhabi",
    "type": "city",
    "parent_ids": [
      "64b78b60707446a37f2aec6f"
    ],
    "localities": [
      {
        "name": "United Arab Emirates",
        "id": "64b78b60707486a37f2apd00",
        "display_name": "United Arab Emirates",
        "type": "country",
        "parent_ids": []
      }
    ]
  }
}
```
</details>

<details>
<summary><i>&nbsp; Country 2</i></summary>

```json
{
  "value": {
    "id": "649887a80000000000000000",
    "name": "400603",
    "display_name": "400603",
    "type": "pincode",
    "parent_ids": [
      "64b78b60707446a37f2aec6f",
      "64b78b60707446a37f2aec4b"
    ],
    "localities": [
      {
        "name": "THANE",
        "id": "64b78b60707446a37f2aed00",
        "display_name": "Thane",
        "type": "city",
        "parent_ids": [
          "64b78b60707446a37f2aec6f",
          "64b78b60707446a37f2aec4b"
        ]
      },
      {
        "name": "MAHARASHTRA",
        "id": "64b78b60707446a37f2aed00",
        "display_name": "Maharashtra",
        "type": "state",
        "parent_ids": [
          "64b78b60707446a37f2aec6f"
        ]
      },
      {
        "name": "INDIA",
        "id": "64b78b60707486a37f2apd00",
        "display_name": "India",
        "type": "country",
        "parent_ids": []
      }
    ]
  }
}
```
</details>

</details>









---


### getOptimalLocations
GET zone from the Pincode.



```javascript
// Promise
const promise = applicationClient.logistic.getOptimalLocations({  body : value });

// Async/Await
const data = await applicationClient.logistic.getOptimalLocations({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [ReAssignStoreRequest](#ReAssignStoreRequest) | yes | Request body |


This API returns zone from the Pincode View.

*Returned Response:*




[ReAssignStoreResponse](#ReAssignStoreResponse)

Response status_code




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getPincodeCity
Get Pincode API



```javascript
// Promise
const promise = applicationClient.logistic.getPincodeCity({  pincode : value });

// Async/Await
const data = await applicationClient.logistic.getPincodeCity({  pincode : value });
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
        "meta_code": {
          "country_code": "IND",
          "isd_code": "+91"
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
        ],
        "lat_long": {
          "type": "Point",
          "coordinates": [
            3.8858955,
            7.2272335
          ]
        }
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


### getPincodeZones
GET zone from the Pincode.



```javascript
// Promise
const promise = applicationClient.logistic.getPincodeZones({  body : value });

// Async/Await
const data = await applicationClient.logistic.getPincodeZones({  body : value });
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


### getTatProduct
Get TAT API



```javascript
// Promise
const promise = applicationClient.logistic.getTatProduct({  body : value });

// Async/Await
const data = await applicationClient.logistic.getTatProduct({  body : value });
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



### Schemas


#### [CountryEntityResponse](#CountryEntityResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display_name | string? |  yes  |  |
 | is_active | boolean? |  yes  |  |
 | logistics | [LogisticsResponse](#LogisticsResponse)? |  yes  |  |
 | meta | [CountryMetaResponse](#CountryMetaResponse)? |  yes  |  |
 | name | string? |  yes  |  |
 | parent_id | string? |  yes  |  |
 | sub_type | string? |  yes  |  |
 | type | string? |  yes  |  |
 | uid | string? |  yes  |  |
 

---

#### [CountryHierarchy](#CountryHierarchy)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string? |  yes  |  |
 | slug | string? |  yes  |  |
 

---

#### [CountryListResponse](#CountryListResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | results | [[CountryEntityResponse](#CountryEntityResponse)]? |  yes  |  |
 

---

#### [CountryMetaResponse](#CountryMetaResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country_code | string? |  yes  |  |
 | isd_code | string? |  yes  |  |
 

---

#### [CountryObject](#CountryObject)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | currency | string? |  yes  |  |
 | display_name | string? |  yes  |  |
 | hierarchy | [[CountryHierarchy](#CountryHierarchy)]? |  yes  |  |
 | id | string? |  yes  |  |
 | iso2 | string? |  yes  |  |
 | iso3 | string? |  yes  |  |
 | name | string? |  yes  |  |
 | phone_code | string? |  yes  |  |
 | timezones | [string]? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [DP](#DP)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | area_code | string? |  yes  |  |
 | assign_dp_from_sb | boolean? |  yes  |  |
 | external_account_id | string? |  yes  |  |
 | fm_priority | number |  no  |  |
 | internal_account_id | string? |  yes  |  |
 | lm_priority | number |  no  |  |
 | operations | [string] |  no  |  |
 | payment_mode | string |  no  |  |
 | rvp_priority | number |  no  |  |
 | transport_mode | string? |  yes  |  |
 

---

#### [ErrorResponse](#ErrorResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 

---

#### [FieldValidation](#FieldValidation)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | regex | [FieldValidationRegex](#FieldValidationRegex)? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [FieldValidationRegex](#FieldValidationRegex)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | length | [LengthValidation](#LengthValidation)? |  yes  |  |
 | value | string? |  yes  |  |
 

---

#### [GetCountries](#GetCountries)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[CountryObject](#CountryObject)]? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 

---

#### [GetCountry](#GetCountry)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | currency | string? |  yes  |  |
 | display_name | string? |  yes  |  |
 | fields | [GetCountryFields](#GetCountryFields)? |  yes  |  |
 | hierarchy | [[CountryHierarchy](#CountryHierarchy)]? |  yes  |  |
 | id | string? |  yes  |  |
 | iso2 | string? |  yes  |  |
 | iso3 | string? |  yes  |  |
 | name | string? |  yes  |  |
 | phone_code | string? |  yes  |  |
 | timezones | [string]? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [GetCountryFields](#GetCountryFields)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address | [[GetCountryFieldsAddress](#GetCountryFieldsAddress)] |  no  |  |
 | address_template | [GetCountryFieldsAddressTemplate](#GetCountryFieldsAddressTemplate) |  no  |  |
 | serviceability_fields | [string] |  no  |  |
 

---

#### [GetCountryFieldsAddress](#GetCountryFieldsAddress)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display_name | string |  no  |  |
 | edit | boolean? |  yes  |  |
 | error_text | string? |  yes  |  |
 | input | string |  no  |  |
 | required | boolean |  no  |  |
 | slug | string |  no  |  |
 | validation | [FieldValidation](#FieldValidation)? |  yes  |  |
 | values | [GetCountryFieldsAddressValues](#GetCountryFieldsAddressValues)? |  yes  |  |
 

---

#### [GetCountryFieldsAddressTemplate](#GetCountryFieldsAddressTemplate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | checkout_form | string |  no  |  |
 | invoice_display | string |  no  |  |
 

---

#### [GetCountryFieldsAddressValues](#GetCountryFieldsAddressValues)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | get_all | [GetOneOrAll](#GetOneOrAll)? |  yes  |  |
 | get_one | [GetOneOrAll](#GetOneOrAll)? |  yes  |  |
 

---

#### [GetLocalities](#GetLocalities)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[Localities](#Localities)]? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 

---

#### [GetLocality](#GetLocality)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display_name | string? |  yes  |  |
 | id | string? |  yes  |  |
 | localities | [[Localities](#Localities)]? |  yes  |  |
 | name | string? |  yes  |  |
 | parent_ids | [string]? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [GetOneOrAll](#GetOneOrAll)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | operation_id | string? |  yes  |  |
 | params | [GetOneOrAllParams](#GetOneOrAllParams)? |  yes  |  |
 

---

#### [GetOneOrAllParams](#GetOneOrAllParams)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | path | [GetOneOrAllPath](#GetOneOrAllPath)? |  yes  |  |
 | query | [GetOneOrAllQuery](#GetOneOrAllQuery)? |  yes  |  |
 

---

#### [GetOneOrAllPath](#GetOneOrAllPath)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | locality_type | string? |  yes  |  |
 | locality_value | string? |  yes  |  |
 

---

#### [GetOneOrAllQuery](#GetOneOrAllQuery)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | city | string? |  yes  |  |
 | country | string? |  yes  |  |
 | sector | string? |  yes  |  |
 | state | string? |  yes  |  |
 

---

#### [GetZoneFromPincodeViewRequest](#GetZoneFromPincodeViewRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country | string |  no  |  |
 | pincode | string |  no  |  |
 

---

#### [GetZoneFromPincodeViewResponse](#GetZoneFromPincodeViewResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | serviceability_type | string |  no  |  |
 | zones | [string] |  no  |  |
 

---

#### [LengthValidation](#LengthValidation)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | max | number? |  yes  |  |
 | min | number? |  yes  |  |
 

---

#### [Localities](#Localities)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display_name | string? |  yes  |  |
 | id | string? |  yes  |  |
 | name | string? |  yes  |  |
 | parent_ids | [string]? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [LogisticsResponse](#LogisticsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | dp | [String: [DP](#DP)]? |  yes  |  |
 

---

#### [Page](#Page)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number? |  yes  |  |
 | has_next | boolean? |  yes  |  |
 | has_previous | boolean? |  yes  |  |
 | item_total | number? |  yes  |  |
 | size | number? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [PincodeApiResponse](#PincodeApiResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [[PincodeDataResponse](#PincodeDataResponse)]? |  yes  |  |
 | error | [PincodeErrorSchemaResponse](#PincodeErrorSchemaResponse) |  no  |  |
 | success | boolean |  no  |  |
 

---

#### [PincodeDataResponse](#PincodeDataResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display_name | string? |  yes  |  |
 | error | [PincodeErrorSchemaResponse](#PincodeErrorSchemaResponse) |  no  |  |
 | lat_long | [PincodeLatLongData](#PincodeLatLongData)? |  yes  |  |
 | meta | [PincodeMetaResponse](#PincodeMetaResponse)? |  yes  |  |
 | meta_code | [CountryMetaResponse](#CountryMetaResponse)? |  yes  |  |
 | name | string? |  yes  |  |
 | parents | [[PincodeParentsResponse](#PincodeParentsResponse)]? |  yes  |  |
 | sub_type | string? |  yes  |  |
 | uid | string? |  yes  |  |
 

---

#### [PincodeErrorSchemaResponse](#PincodeErrorSchemaResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 | type | string? |  yes  |  |
 | value | string? |  yes  |  |
 

---

#### [PincodeLatLongData](#PincodeLatLongData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | coordinates | [string]? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [PincodeMetaResponse](#PincodeMetaResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | internal_zone_id | number? |  yes  |  |
 | zone | string? |  yes  |  |
 

---

#### [PincodeParentsResponse](#PincodeParentsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display_name | string? |  yes  |  |
 | name | string? |  yes  |  |
 | sub_type | string? |  yes  |  |
 | uid | string? |  yes  |  |
 

---

#### [ReAssignStoreRequest](#ReAssignStoreRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | articles | [string] |  no  |  |
 | configuration | string |  no  |  |
 | identifier | string |  no  |  |
 | ignored_locations | [number] |  no  |  |
 | to_pincode | string |  no  |  |
 

---

#### [ReAssignStoreResponse](#ReAssignStoreResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | assigned_stores | [string]? |  yes  |  |
 | error | string |  no  |  |
 | pystormbreaker_uuid | string |  no  |  |
 | success | boolean |  no  |  |
 | to_pincode | string |  no  |  |
 

---

#### [TATArticlesRequest](#TATArticlesRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | category | [TATCategoryRequest](#TATCategoryRequest)? |  yes  |  |
 | manufacturing_time | number? |  yes  |  |
 | manufacturing_time_unit | string? |  yes  |  |
 

---

#### [TATArticlesResponse](#TATArticlesResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _manufacturing_time_seconds | number? |  yes  |  |
 | category | [TATCategoryRequest](#TATCategoryRequest)? |  yes  |  |
 | error | [TATErrorSchemaResponse](#TATErrorSchemaResponse)? |  yes  |  |
 | is_cod_available | boolean? |  yes  |  |
 | manufacturing_time | number? |  yes  |  |
 | manufacturing_time_unit | string? |  yes  |  |
 | promise | [TATPromiseResponse](#TATPromiseResponse)? |  yes  |  |
 

---

#### [TATCategoryRequest](#TATCategoryRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | number? |  yes  |  |
 | level | string? |  yes  |  |
 

---

#### [TATErrorSchemaResponse](#TATErrorSchemaResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 | type | string? |  yes  |  |
 | value | string? |  yes  |  |
 

---

#### [TATFormattedResponse](#TATFormattedResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | max | string? |  yes  |  |
 | min | string? |  yes  |  |
 

---

#### [TATLocationDetailsRequest](#TATLocationDetailsRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | articles | [[TATArticlesRequest](#TATArticlesRequest)]? |  yes  |  |
 | from_pincode | string? |  yes  |  |
 | fulfillment_id | number? |  yes  |  |
 

---

#### [TATLocationDetailsResponse](#TATLocationDetailsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | articles | [[TATArticlesResponse](#TATArticlesResponse)]? |  yes  |  |
 | from_pincode | string? |  yes  |  |
 | fulfillment_id | number? |  yes  |  |
 

---

#### [TATPromiseResponse](#TATPromiseResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | formatted | [TATFormattedResponse](#TATFormattedResponse)? |  yes  |  |
 | timestamp | [TATTimestampResponse](#TATTimestampResponse)? |  yes  |  |
 

---

#### [TATTimestampResponse](#TATTimestampResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | max | number? |  yes  |  |
 | min | number? |  yes  |  |
 

---

#### [TATViewRequest](#TATViewRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action | string? |  yes  |  |
 | identifier | string? |  yes  |  |
 | journey | string? |  yes  |  |
 | location_details | [[TATLocationDetailsRequest](#TATLocationDetailsRequest)]? |  yes  |  |
 | source | string? |  yes  |  |
 | to_pincode | string? |  yes  |  |
 

---

#### [TATViewResponse](#TATViewResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action | string? |  yes  |  |
 | error | [TATErrorSchemaResponse](#TATErrorSchemaResponse)? |  yes  |  |
 | identifier | string? |  yes  |  |
 | is_cod_available | boolean? |  yes  |  |
 | journey | string? |  yes  |  |
 | location_details | [[TATLocationDetailsResponse](#TATLocationDetailsResponse)]? |  yes  |  |
 | payment_mode | string? |  yes  |  |
 | request_uuid | string? |  yes  |  |
 | source | string? |  yes  |  |
 | stormbreaker_uuid | string? |  yes  |  |
 | success | boolean? |  yes  |  |
 | to_city | string? |  yes  |  |
 | to_pincode | string? |  yes  |  |
 

---




