




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
const promise = publicClient.configuration.getLocations({  locationType : value,
 id : value });

// Async/Await
const data = await publicClient.configuration.getLocations({  locationType : value,
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
const promise = publicClient.configuration.searchApplication({  authorization : value,
 query : value });

// Async/Await
const data = await publicClient.configuration.searchApplication({  authorization : value,
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


#### [ApplicationAuth](#ApplicationAuth)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean? |  yes  |  |
 

---

#### [ApplicationCors](#ApplicationCors)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | domains | [string]? |  yes  |  |
 

---

#### [ApplicationData](#ApplicationData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | __v | number? |  yes  |  |
 | _id | string? |  yes  |  |
 | app_type | string? |  yes  |  |
 | auth | [ApplicationAuth](#ApplicationAuth)? |  yes  |  |
 | banner | [SecureUrl](#SecureUrl)? |  yes  |  |
 | cache_ttl | number? |  yes  |  |
 | channel_type | string? |  yes  |  |
 | company_id | number? |  yes  |  |
 | cors | [ApplicationCors](#ApplicationCors)? |  yes  |  |
 | created_at | string? |  yes  |  |
 | description | string? |  yes  |  |
 | domain | [Domain](#Domain)? |  yes  |  |
 | domains | [[Domain](#Domain)]? |  yes  |  |
 | favicon | [SecureUrl](#SecureUrl)? |  yes  |  |
 | is_active | boolean? |  yes  |  |
 | is_internal | boolean? |  yes  |  |
 | logo | [SecureUrl](#SecureUrl)? |  yes  |  |
 | meta | [[ApplicationMeta](#ApplicationMeta)]? |  yes  |  |
 | mobile_logo | [SecureUrl](#SecureUrl)? |  yes  |  |
 | name | string? |  yes  |  |
 | owner | string? |  yes  |  |
 | redirections | [[ApplicationRedirections](#ApplicationRedirections)]? |  yes  |  |
 | slug | string? |  yes  |  |
 | token | string? |  yes  |  |
 | updated_at | string? |  yes  |  |
 | website | [ApplicationWebsite](#ApplicationWebsite)? |  yes  |  |
 

---

#### [ApplicationMeta](#ApplicationMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string? |  yes  |  |
 | value | string? |  yes  |  |
 

---

#### [ApplicationRedirections](#ApplicationRedirections)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | redirect_from | string? |  yes  |  |
 | redirect_to | string? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [ApplicationResponse](#ApplicationResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application | [ApplicationData](#ApplicationData)? |  yes  |  |
 

---

#### [ApplicationWebsite](#ApplicationWebsite)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | basepath | string? |  yes  |  |
 | enabled | boolean? |  yes  |  |
 

---

#### [BadRequest](#BadRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  | Failure message. |
 

---

#### [Currency](#Currency)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | code | string? |  yes  |  |
 | created_at | string? |  yes  |  |
 | decimal_digits | number? |  yes  |  |
 | is_active | boolean? |  yes  |  |
 | name | string? |  yes  |  |
 | symbol | string? |  yes  |  |
 | updated_at | string? |  yes  |  |
 

---

#### [Domain](#Domain)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | is_predefined | boolean? |  yes  | Domain is hosting domain or not. |
 | is_primary | boolean? |  yes  |  |
 | is_shortlink | boolean? |  yes  |  |
 | name | string? |  yes  |  |
 | verified | boolean? |  yes  |  |
 

---

#### [LocationDefaultCurrency](#LocationDefaultCurrency)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string? |  yes  |  |
 | name | string? |  yes  |  |
 | symbol | string? |  yes  |  |
 

---

#### [LocationDefaultLanguage](#LocationDefaultLanguage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string? |  yes  |  |
 | name | string? |  yes  |  |
 

---

#### [LocationDetails](#LocationDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | __v | number? |  yes  |  |
 | _id | string? |  yes  |  |
 | capital | string? |  yes  |  |
 | country_code | string? |  yes  |  |
 | currency | string? |  yes  |  |
 | default_currency | [LocationDefaultCurrency](#LocationDefaultCurrency)? |  yes  |  |
 | default_language | [LocationDefaultLanguage](#LocationDefaultLanguage)? |  yes  |  |
 | iso2 | string? |  yes  |  |
 | iso3 | string? |  yes  |  |
 | latitude | string? |  yes  |  |
 | longitude | string? |  yes  |  |
 | name | string? |  yes  |  |
 | parent | string? |  yes  |  |
 | phone_code | string? |  yes  |  |
 | state_code | string? |  yes  |  |
 | type | string? |  yes  |  |
 | uid | number? |  yes  |  |
 

---

#### [Locations](#Locations)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[LocationDetails](#LocationDetails)]? |  yes  |  |
 

---

#### [NotFound](#NotFound)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 

---

#### [Page](#Page)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number? |  yes  |  |
 | has_next | boolean? |  yes  |  |
 | has_previous | boolean? |  yes  |  |
 | item_total | number? |  yes  |  |
 | next_id | string? |  yes  |  |
 | size | number? |  yes  |  |
 | type | string |  no  |  |
 

---

#### [SecureUrl](#SecureUrl)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | secure_url | string? |  yes  |  |
 

---




