




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


#### [Application](#Application)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | __v | number? |  yes  | Version key for tracking revisions. Default value is zero. |
 | _id | string? |  yes  | The unique identifier (24-digit Mongo Object ID) of the sales channel |
 | app_type | string? |  yes  | It shows whether application is live or in development mode |
 | auth | [ApplicationAuth](#ApplicationAuth)? |  yes  |  |
 | banner | [SecureUrl](#SecureUrl)? |  yes  |  |
 | cache_ttl | number? |  yes  | An integer value that specifies the number of seconds until the key expires |
 | channel_type | string? |  yes  | It indicates different channel types like store, website-and-mobile-apps. Default value is store. |
 | company_id | number? |  yes  | Numeric ID allotted to a business account where the sales channel exists |
 | cors | [ApplicationCors](#ApplicationCors)? |  yes  |  |
 | created_at | string? |  yes  | ISO 8601 timestamp of sales channel creation |
 | description | string? |  yes  | It contains detailed information about the sales channel |
 | domain | [Domain](#Domain)? |  yes  |  |
 | domains | [[Domain](#Domain)]? |  yes  |  |
 | favicon | [SecureUrl](#SecureUrl)? |  yes  |  |
 | is_active | boolean? |  yes  | Indicates whether a sales channel is active or not active |
 | is_internal | boolean? |  yes  | Indicates whether a sales channel is internal or not |
 | logo | [SecureUrl](#SecureUrl)? |  yes  |  |
 | meta | [[ApplicationMeta](#ApplicationMeta)]? |  yes  |  |
 | mobile_logo | [SecureUrl](#SecureUrl)? |  yes  |  |
 | name | string? |  yes  | Name of the sales channel, e.g. Zenz Fashion |
 | owner | string? |  yes  | The unique identifier (24-digit Mongo Object ID) of owner who owns the application |
 | redirections | [[ApplicationRedirections](#ApplicationRedirections)]? |  yes  |  |
 | token | string? |  yes  | Randomly generated fixed-length string for sales channel. It is required and auto-generated. |
 | updated_at | string? |  yes  | ISO 8601 timestamp of sales channel updation |
 | website | [ApplicationWebsite](#ApplicationWebsite)? |  yes  |  |
 

---

#### [ApplicationAuth](#ApplicationAuth)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean? |  yes  | Shows sales channel auth is enabled or not enabled. |
 

---

#### [ApplicationCors](#ApplicationCors)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | domains | [string]? |  yes  |  |
 

---

#### [ApplicationMeta](#ApplicationMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string? |  yes  | Indicates the name of application meta |
 | value | string? |  yes  | Value related to application meta name |
 

---

#### [ApplicationRedirections](#ApplicationRedirections)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | redirect_from | string? |  yes  | Old domain URL of the sales channel |
 | redirect_to | string? |  yes  | New domain URL of the sales channel. Users will be automatically redirected from old domain to new domain. |
 | type | string? |  yes  | It shows domain redirection type. Permanent redirection is for long time period redirection, and temporary redirection for a short time period. |
 

---

#### [ApplicationResponse](#ApplicationResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application | [Application](#Application)? |  yes  |  |
 

---

#### [ApplicationWebsite](#ApplicationWebsite)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | basepath | string? |  yes  | Base path for the current sales channel website |
 | enabled | boolean? |  yes  | Shows whether sales channel website URL is enabled or not |
 

---

#### [BadRequest](#BadRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  | Failure message (in a string format) |
 

---

#### [Currency](#Currency)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  | The unique identifier (24-digit Mongo Object ID) of the current sales channel supported currency |
 | code | string? |  yes  | 3-character currency code, e.g. INR, USD, EUR. |
 | created_at | string? |  yes  | ISO 8601 timestamp of sales channel support currency creation |
 | decimal_digits | number? |  yes  | Acceptable decimal limits for a given currency, e.g. 1.05$ means upto 2 decimal digits can be accepted as a valid value of a currency. |
 | is_active | boolean? |  yes  | Shows currency is enabled or not in current sales channel |
 | name | string? |  yes  | Name of the currency, e.g. Indian Rupee |
 | symbol | string? |  yes  | Unique symbol for identifying the currency, e.g. ₹ |
 | updated_at | string? |  yes  | ISO 8601 timestamp of sales channel support currency updation |
 

---

#### [Domain](#Domain)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  | The unique identifier (24-digit Mongo Object ID) of the domain |
 | is_predefined | boolean? |  yes  | Domain is hosting domain or not |
 | is_primary | boolean? |  yes  | Indicates domain is primary or not. Primary domain is the default/main domain. |
 | is_shortlink | boolean? |  yes  | Shortlink is present or not for the domain |
 | name | string? |  yes  |  |
 | verified | boolean? |  yes  | Indicates domain is verified or not. TXT and A records should propagate correctly. |
 

---

#### [LocationCountry](#LocationCountry)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | __v | number? |  yes  |  |
 | _id | string? |  yes  |  |
 | capital | string? |  yes  |  |
 | currency | string? |  yes  |  |
 | default_currency | [LocationDefaultCurrency](#LocationDefaultCurrency)? |  yes  |  |
 | default_language | [LocationDefaultLanguage](#LocationDefaultLanguage)? |  yes  |  |
 | iso2 | string? |  yes  |  |
 | iso3 | string? |  yes  |  |
 | name | string? |  yes  |  |
 | parent | string? |  yes  |  |
 | phone_code | string? |  yes  |  |
 | type | string? |  yes  |  |
 | uid | number? |  yes  |  |
 

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

#### [Locations](#Locations)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [string]? |  yes  |  |
 

---

#### [NotFound](#NotFound)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  | Response message for not found |
 

---

#### [Page](#Page)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number? |  yes  | Current page number |
 | has_next | boolean? |  yes  | Next page is present or not |
 | has_previous | boolean? |  yes  | Previous page is present or not |
 | item_total | number? |  yes  | Total number of items to retrieve |
 | next_id | string? |  yes  | Next page ID |
 | size | number? |  yes  | The number of items to retrieve in each page. Default value is 10. |
 | type | string |  no  | Page type |
 

---

#### [SecureUrl](#SecureUrl)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | secure_url | string? |  yes  | Hosted URL of the image |
 

---




