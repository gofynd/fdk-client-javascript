



##### [Back to Platform docs](./README.md)

## Common Methods
Application configuration apis
* [getLocations](#getlocations)



## Methods with example and description


### getLocations
Get countries, states, cities



```javascript
// Promise
const promise = common.getLocations({  locationType : value,
 id : value });

// Async/Await
const data = await common.getLocations({  locationType : value,
 id : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| locationType | string | no | Provide location type to query on. Possible values : country, state, city |    
| id | string | no | Field is optional when location_type is country. If querying for state, provide id of country. If querying for city, provide id of state. |  





*Returned Response:*




[Locations](#Locations)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---



### Schemas

 
 
 #### [LocationDefaultLanguage](#LocationDefaultLanguage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | code | string |  no  |  |

---


 
 
 #### [LocationDefaultCurrency](#LocationDefaultCurrency)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | symbol | string |  no  |  |
 | code | string |  no  |  |

---


 
 
 #### [LocationCountry](#LocationCountry)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | capital | string |  no  |  |
 | currency | string |  no  |  |
 | iso2 | string |  no  |  |
 | iso3 | string |  no  |  |
 | name | string |  no  |  |
 | parent | string |  no  |  |
 | phone_code | string |  no  |  |
 | type | string |  no  |  |
 | uid | number |  no  |  |
 | __v | number |  no  |  |
 | _id | string |  no  |  |
 | default_currency | [LocationDefaultCurrency](#LocationDefaultCurrency) |  no  |  |
 | default_language | [LocationDefaultLanguage](#LocationDefaultLanguage) |  no  |  |

---


 
 
 #### [Locations](#Locations)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [string] |  no  |  |

---




