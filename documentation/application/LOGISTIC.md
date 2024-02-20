




##### [Back to Application docs](./README.md)

## Logistic Methods
The Logistics module enhances delivery operations efficiency. It enables you to retrieve data and calculate precise delivery times. You can utilize the Country Information module to serve a global customer base and implement zone mapping for efficient delivery route planning. Additionally, this module offers the capability to optimize store assignments based on various criteria, including products, settings, and ignored locations. Furthermore, it supports Custom Packaging to enhance shipment creation.


Default
* [getAllCountries](#getallcountries)
* [getCountries](#getcountries)
* [getCountry](#getcountry)
* [getLocalities](#getlocalities)
* [getLocality](#getlocality)
* [getLocations](#getlocations)
* [getOptimalLocations](#getoptimallocations)
* [getPincodeZones](#getpincodezones)
* [validateAddress](#validateaddress)




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
        "latitude": "28.6667",
        "longitude": "77.2167",
        "currency": {
          "code": "INR",
          "name": "Indian Rupee",
          "symbol": "₹"
        },
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
        "latitude": "38.8951",
        "longitude": "-77.0364",
        "currency": {
          "code": "USD",
          "name": "United States Dollar",
          "symbol": "$"
        },
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
        "latitude": "24.4648",
        "longitude": "54.3618",
        "currency": {
          "code": "AED",
          "name": "United Arab Emirates Dirham",
          "symbol": "AED"
        },
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
    "latitude": "28.6667",
    "longitude": "77.2167",
    "currency": {
      "code": "INR",
      "name": "Indian Rupee",
      "symbol": "₹"
    },
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
        "store_os_form": "{pincode}_{address}_{area}_{landmark}",
        "default_display": "{address} {area}_{landmark}_{city} {state} {pincode}_{country}"
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
    "latitude": "24.4648",
    "longitude": "54.3618",
    "currency": {
      "code": "AED",
      "name": "United Arab Emirates Dirham",
      "symbol": "AED"
    },
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
        "checkout_form": "{address} {area}_{landmark} {pincode}_{city} {state}_{name} {phone}_{email}",
        "store_os_form": "{address} {area}_{landmark} {pincode}_{city} {state}_{name} {phone}_{email}",
        "default_display": "{address} {area}_{landmark}_{city}_{sector} {country}"
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
    "parents": {
      "country": {
        "name": "United Arab Emirates",
        "id": "64b78b60707486a37f2apd00",
        "display_name": "United Arab Emirates",
        "type": "country",
        "parent_ids": []
      }
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


### getLocations
GET locations from the Pincode.



```javascript
// Promise
const promise = applicationClient.logistic.getLocations({  xApplicationId : value,
 xApplicationData : value,
 country : value,
 state : value,
 city : value,
 pincode : value,
 sector : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await applicationClient.logistic.getLocations({  xApplicationId : value,
 xApplicationData : value,
 country : value,
 state : value,
 city : value,
 pincode : value,
 sector : value,
 pageNo : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| xApplicationId | string | yes | A `x-application-id` is a unique identifier for a particular sale channel. |   
| xApplicationData | string | yes | A `x-application-data` is a unique identifier for a particular sale channel. |    
| country | string | no | A `country` contains a specific value of the country `iso2` code. |    
| state | string | no | A `state` contains a specific value of the state, province. |    
| city | string | no | A `city` contains a specific value of the city. |    
| pincode | number | no | A `pincode` contains a specific value of the city. |    
| sector | string | no | A `sector` contains a specific value of the city. |    
| pageNo | number | no | page number. |    
| pageSize | number | no | page size. |  



This API returns store from the Pincode View.

*Returned Response:*




[GetStoreResponse](#GetStoreResponse)

Response status_code




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
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


### validateAddress
Validate given address wrt template



```javascript
// Promise
const promise = applicationClient.logistic.validateAddress({  countryIsoCode : value,
 templateName : value,
 body : value });

// Async/Await
const data = await applicationClient.logistic.validateAddress({  countryIsoCode : value,
 templateName : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| countryIsoCode | string | yes | The ISO code of the country. |   
| templateName | string | yes | The type of address form. |  
| body | [ValidateAddressRequest](#ValidateAddressRequest) | yes | Request body |


Validate given address wrt template

*Returned Response:*




[ValidateAddressRequest](#ValidateAddressRequest)

Valid




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; India</i></summary>

```json
{
  "value": {
    "address": "WeWork",
    "area": "Andheri",
    "landmark": "Police Station",
    "pincode": "400093",
    "city": "Mumbai",
    "state": "Maharashtra",
    "name": "WeWork",
    "phone": "9876543210",
    "email": "wework@w.com"
  }
}
```
</details>

<details>
<summary><i>&nbsp; UAE</i></summary>

```json
{
  "value": {
    "address1": "WeWork",
    "address2": "Andheri",
    "landmark": "Police Station",
    "city": "Abu Dhabi",
    "sector": "Abu Dhabi",
    "name": "WeWork",
    "phone": "9876543210",
    "email": "wework@w.com"
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
 | currency | [CurrencyObject](#CurrencyObject)? |  yes  |  |
 | display_name | string? |  yes  |  |
 | hierarchy | [[CountryHierarchy](#CountryHierarchy)]? |  yes  |  |
 | id | string? |  yes  |  |
 | iso2 | string? |  yes  |  |
 | iso3 | string? |  yes  |  |
 | latitude | string? |  yes  |  |
 | longitude | string? |  yes  |  |
 | name | string? |  yes  |  |
 | phone_code | string? |  yes  |  |
 | timezones | [string]? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [CurrencyObject](#CurrencyObject)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string? |  yes  |  |
 | name | string? |  yes  |  |
 | symbol | string? |  yes  |  |
 

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
 | error | string? |  yes  |  |
 

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
 | currency | [CurrencyObject](#CurrencyObject)? |  yes  |  |
 | display_name | string? |  yes  |  |
 | fields | [GetCountryFields](#GetCountryFields)? |  yes  |  |
 | hierarchy | [[CountryHierarchy](#CountryHierarchy)]? |  yes  |  |
 | id | string? |  yes  |  |
 | iso2 | string? |  yes  |  |
 | iso3 | string? |  yes  |  |
 | latitude | string? |  yes  |  |
 | longitude | string? |  yes  |  |
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
 | default_display | string |  no  |  |
 | store_os_form | string |  no  |  |
 

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
 | localities | [[LocalityParent](#LocalityParent)]? |  yes  |  |
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

#### [GetStoreResponse](#GetStoreResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[StoreItemResponse](#StoreItemResponse)]? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 

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

#### [LocalityParent](#LocalityParent)

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

#### [StoreItemResponse](#StoreItemResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | company_id | number? |  yes  |  |
 | fulfillment_type | string? |  yes  |  |
 | id | number? |  yes  |  |
 | latitude | number? |  yes  |  |
 | longitude | number? |  yes  |  |
 | processing_time | number? |  yes  |  |
 | store_type | string? |  yes  |  |
 | tags | [string]? |  yes  |  |
 

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

#### [ValidateAddressRequest](#ValidateAddressRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address | string? |  yes  | A string representing the complete address, combining address line 1, address line 2, area, landmark, sector, city, state, and pincode. This provides a comprehensive view of the address details. |
 | address1 | string? |  yes  | A string representing the first line of the address, typically containing street or building information. |
 | address2 | string? |  yes  | A string representing the second line of the address, which can be used for additional address details if needed. |
 | area | string? |  yes  | A string specifying the locality or area associated with the address. |
 | city | string? |  yes  | A string denoting the city or municipality of the address. |
 | email | string? |  yes  | A string containing the recipient's email address. |
 | landmark | string? |  yes  | A string representing a prominent nearby landmark that aids in locating the address. |
 | name | string? |  yes  | A string representing the recipient's name or the organization name associated with the address. |
 | phone | string? |  yes  | An integer representing the recipient's contact phone number. |
 | pincode | string? |  yes  | A string indicating the postal code or PIN code of the address area. |
 | sector | string? |  yes  | A string specifying the sector or district of the address if applicable. |
 | state | string? |  yes  | A string indicating the state or province of the address. |
 

---




