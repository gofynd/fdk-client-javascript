




##### [Back to Public docs](./README.md)

## Configuration Methods
Application configuration apis

* [getLocations](#getlocations)
* [searchApplication](#searchapplication)



## Methods with example and description




### getLocations
Get countries, states, cities



```javascript
// Promise
const promise = configuration.getLocations({  locationType : value,
 id : value });

// Async/Await
const data = await configuration.getLocations({  locationType : value,
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


### searchApplication
Search Application



```javascript
// Promise
const promise = configuration.searchApplication({  authorization : value,
 query : value });

// Async/Await
const data = await configuration.searchApplication({  authorization : value,
 query : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| authorization | string | no |  |    
| query | string | no | Provide application name |  



Provide application name or domain url

*Returned Response:*




[ApplicationResponse](#ApplicationResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "application": {
    "website": {
      "enabled": true,
      "basepath": "/"
    },
    "cors": {
      "domains": []
    },
    "auth": {
      "enabled": true
    },
    "description": "test",
    "channel_type": "store",
    "cache_ttl": -1,
    "internal": false,
    "is_active": true,
    "mode": "live",
    "_id": "620b931ee7bfb11f910bf4a3",
    "company_id": 2,
    "name": "test",
    "owner": "5b9b98150df588546aaea6d2",
    "logo": {
      "secure_url": "https://hdn-1.addsale.com/x0/company/164/applications/5efc9913f474c329718e3690/application/pictures/free-logo/original/olqHM8LNr-JioMart-Groceries.png"
    },
    "favicon": {
      "secure_url": "https://hdn-1.addsale.com/x0/company/164/applications/5efc9913f474c329718e3690/application/pictures/free-logo/original/olqHM8LNr-JioMart-Groceries.png"
    },
    "banner": {
      "secure_url": "https://hdn-1.addsale.com/x0/company/164/applications/5efc9913f474c329718e3690/application/pictures/landscape-banner/original/D2fr98CUH-JioMart-Groceries.png"
    },
    "token": "tPQv0nc23",
    "tokens": [
      {
        "token": "tPQv0nc23",
        "created_at": "2022-02-15T11:48:46.909Z"
      }
    ],
    "domains": [
      {
        "verified": true,
        "is_primary": true,
        "is_shortlink": true,
        "_id": "620b931ee7bfb11f910bf4a4",
        "name": "qckvv5lhp.hostfynd.dev"
      }
    ],
    "redirections": [],
    "meta": [],
    "created_at": "2022-02-15T11:48:46.909Z",
    "modified_at": "2022-02-15T11:48:46.909Z",
    "__v": 0,
    "domain": {
      "verified": true,
      "is_primary": true,
      "is_shortlink": true,
      "_id": "620b931ee7bfb11f910bf4a4",
      "name": "qckvv5lhp.hostfynd.dev"
    },
    "id": "620b931ee7bfb11f910bf4a3"
  }
}
```
</details>









---



### Schemas


#### [Application](#Application)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | __v | number |  no  |  |
 | _id | string |  no  |  |
 | app_type | string |  no  |  |
 | auth | [ApplicationAuth](#ApplicationAuth) |  no  |  |
 | banner | [SecureUrl](#SecureUrl) |  no  |  |
 | cache_ttl | number |  no  |  |
 | channel_type | string |  no  |  |
 | company_id | number |  no  |  |
 | cors | [ApplicationCors](#ApplicationCors) |  no  |  |
 | created_at | string |  no  |  |
 | description | string |  no  |  |
 | domain | [Domain](#Domain) |  no  |  |
 | domains | [[Domain](#Domain)] |  no  |  |
 | favicon | [SecureUrl](#SecureUrl) |  no  |  |
 | is_active | boolean |  no  |  |
 | is_internal | boolean |  no  |  |
 | logo | [SecureUrl](#SecureUrl) |  no  |  |
 | meta | [[ApplicationMeta](#ApplicationMeta)] |  no  |  |
 | mobile_logo | [SecureUrl](#SecureUrl) |  no  |  |
 | name | string |  no  |  |
 | owner | string |  no  |  |
 | redirections | [[ApplicationRedirections](#ApplicationRedirections)] |  no  |  |
 | token | string |  no  |  |
 | updated_at | string |  no  |  |
 | website | [ApplicationWebsite](#ApplicationWebsite) |  no  |  |
 

---

#### [ApplicationAuth](#ApplicationAuth)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean |  no  |  |
 

---

#### [ApplicationCors](#ApplicationCors)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | domains | [string] |  no  |  |
 

---

#### [ApplicationMeta](#ApplicationMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | value | string |  no  |  |
 

---

#### [ApplicationRedirections](#ApplicationRedirections)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | redirect_from | string |  no  |  |
 | redirect_to | string |  no  |  |
 | type | string |  no  |  |
 

---

#### [ApplicationResponse](#ApplicationResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application | [Application](#Application) |  no  |  |
 

---

#### [ApplicationWebsite](#ApplicationWebsite)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | basepath | string |  no  |  |
 | enabled | boolean |  no  |  |
 

---

#### [BadRequest](#BadRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 

---

#### [Currency](#Currency)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | code | string |  no  |  |
 | created_at | string |  no  |  |
 | decimal_digits | number |  no  |  |
 | is_active | boolean |  no  |  |
 | name | string |  no  |  |
 | symbol | string |  no  |  |
 | updated_at | string |  no  |  |
 

---

#### [Domain](#Domain)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | is_predefined | boolean |  no  |  |
 | is_primary | boolean |  no  |  |
 | is_shortlink | boolean |  no  |  |
 | name | string |  no  |  |
 | verified | boolean |  no  |  |
 

---

#### [LocationCountry](#LocationCountry)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | __v | number |  no  |  |
 | _id | string |  no  |  |
 | capital | string |  no  |  |
 | currency | string |  no  |  |
 | default_currency | [LocationDefaultCurrency](#LocationDefaultCurrency) |  no  |  |
 | default_language | [LocationDefaultLanguage](#LocationDefaultLanguage) |  no  |  |
 | iso2 | string |  no  |  |
 | iso3 | string |  no  |  |
 | name | string |  no  |  |
 | parent | string |  no  |  |
 | phone_code | string |  no  |  |
 | type | string |  no  |  |
 | uid | number |  no  |  |
 

---

#### [LocationDefaultCurrency](#LocationDefaultCurrency)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string |  no  |  |
 | name | string |  no  |  |
 | symbol | string |  no  |  |
 

---

#### [LocationDefaultLanguage](#LocationDefaultLanguage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string |  no  |  |
 | name | string |  no  |  |
 

---

#### [Locations](#Locations)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [string] |  no  |  |
 

---

#### [NotFound](#NotFound)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 

---

#### [Page](#Page)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number |  no  |  |
 | has_next | boolean |  no  |  |
 | has_previous | boolean |  no  |  |
 | item_total | number |  no  |  |
 | next_id | string |  no  |  |
 | size | number |  no  |  |
 | type | string |  yes  |  |
 

---

#### [SecureUrl](#SecureUrl)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | secure_url | string |  no  |  |
 

---




