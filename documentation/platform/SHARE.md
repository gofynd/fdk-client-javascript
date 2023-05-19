




##### [Back to Platform docs](./README.md)

## Share Methods
Short link and QR Code

* [createShortLink](#createshortlink)
* [getShortLinkByHash](#getshortlinkbyhash)
* [getShortLinkClickStats](#getshortlinkclickstats)
* [getShortLinks](#getshortlinks)
* [updateShortLinkById](#updateshortlinkbyid)



## Methods with example and description




### createShortLink
Create short link



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").share.createShortLink({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").share.createShortLink({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [ShortLinkReq](#ShortLinkReq) | yes | Request body |


Create short link

*Returned Response:*




[ShortLinkRes](#ShortLinkRes)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "url": {
    "original": "https://0icof6vvsf.hostx0.de/products/?brand=ruosh",
    "short": "https://0icof6vvsf.hostx0.de/l/3qKlnsq-x",
    "hash": "3qKlnsq-x"
  },
  "redirects": {
    "ios": {
      "type": "web",
      "link": "https://0icof6vvsf.hostx0.de/products/?brand=ruosh"
    },
    "android": {
      "type": "web",
      "link": "https://0icof6vvsf.hostx0.de/products/?brand=ruosh"
    },
    "web": {
      "type": "web",
      "link": "https://0icof6vvsf.hostx0.de/products/?brand=ruosh"
    },
    "force_web": false
  },
  "created_by": "team",
  "personalized": false,
  "app_redirect": false,
  "fallback": "web",
  "enable_tracking": false,
  "active": true,
  "count": 0,
  "_id": "601a54054c0349592e76c8f3",
  "title": "new ",
  "meta": {
    "type": "brand"
  },
  "expire_at": null,
  "application": "5eda528b97457fe43a733ace",
  "user_id": "5e4d01e2c39837ab66144f6d",
  "created_at": "2021-02-03T07:43:01.342Z",
  "updated_at": "2021-02-03T07:43:01.342Z"
}
```
</details>









---


### getShortLinkByHash
Get short link by hash



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").share.getShortLinkByHash({  hash : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").share.getShortLinkByHash({  hash : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| hash | string | yes | Hash of short url |  



Get short link by hash

*Returned Response:*




[ShortLinkRes](#ShortLinkRes)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "url": {
    "original": "https://0icof6vvsf.hostx0.de/products/?brand=ruosh",
    "short": "https://0icof6vvsf.hostx0.de/l/3qKlnsq-x",
    "hash": "3qKlnsq-x"
  },
  "redirects": {
    "ios": {
      "type": "web",
      "link": "https://0icof6vvsf.hostx0.de/products/?brand=ruosh"
    },
    "android": {
      "type": "web",
      "link": "https://0icof6vvsf.hostx0.de/products/?brand=ruosh"
    },
    "web": {
      "type": "web",
      "link": "https://0icof6vvsf.hostx0.de/products/?brand=ruosh"
    },
    "force_web": false
  },
  "created_by": "team",
  "personalized": false,
  "app_redirect": false,
  "fallback": "web",
  "enable_tracking": false,
  "active": true,
  "count": 0,
  "_id": "601a54054c0349592e76c8f3",
  "title": "new ",
  "meta": {
    "type": "brand"
  },
  "expire_at": null,
  "application": "5eda528b97457fe43a733ace",
  "user_id": "5e4d01e2c39837ab66144f6d",
  "created_at": "2021-02-03T07:43:01.342Z",
  "updated_at": "2021-02-03T07:43:01.342Z"
}
```
</details>









---


### getShortLinkClickStats
Get click statistics for a short link



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").share.getShortLinkClickStats({  surlId : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").share.getShortLinkClickStats({  surlId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| surlId | string | yes | Short link ID for which click statistics are to be retrieved. |  



Retrieve click statistics for a given short link ID.

*Returned Response:*




[ClickStatsResponse](#ClickStatsResponse)

Successful retrieval of click statistics.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getShortLinks
Get short links



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").share.getShortLinks({  pageNo : value,
 pageSize : value,
 createdBy : value,
 active : value,
 q : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").share.getShortLinks({  pageNo : value,
 pageSize : value,
 createdBy : value,
 active : value,
 q : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNo | number | no | Current page number |    
| pageSize | number | no | Current page size |    
| createdBy | string | no | Short link creator |    
| active | string | no | Short link active status |    
| q | string | no | Search text for original and short url |  



Get short links

*Returned Response:*




[ShortLinkList](#ShortLinkList)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "items": [
    {
      "url": {
        "original": "https://0icof6vvsf.hostx0.de/products/?brand=ruosh",
        "short": "https://0icof6vvsf.hostx0.de/l/3qKlnsq-x",
        "hash": "3qKlnsq-x"
      },
      "redirects": {
        "ios": {
          "type": "web",
          "link": "https://0icof6vvsf.hostx0.de/products/?brand=ruosh"
        },
        "android": {
          "type": "web",
          "link": "https://0icof6vvsf.hostx0.de/products/?brand=ruosh"
        },
        "web": {
          "type": "web",
          "link": "https://0icof6vvsf.hostx0.de/products/?brand=ruosh"
        },
        "force_web": false
      },
      "created_by": "team",
      "personalized": false,
      "app_redirect": false,
      "fallback": "web",
      "enable_tracking": false,
      "active": true,
      "count": 0,
      "_id": "601a54054c0349592e76c8f3",
      "title": "new ",
      "meta": {
        "type": "brand"
      },
      "expire_at": null,
      "application": "5eda528b97457fe43a733ace",
      "user_id": "5e4d01e2c39837ab66144f6d",
      "created_at": "2021-02-03T07:43:01.342Z",
      "updated_at": "2021-02-03T07:43:01.342Z"
    }
  ],
  "page": {
    "size": 10,
    "type": "number",
    "page": 1,
    "item_total": 30,
    "has_next": true
  }
}
```
</details>









---


### updateShortLinkById
Update short link by id



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").share.updateShortLinkById({  id : value,
 body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").share.updateShortLinkById({  id : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | Short link document identifier |  
| body | [ShortLinkReq](#ShortLinkReq) | yes | Request body |


Update short link by id

*Returned Response:*




[ShortLinkRes](#ShortLinkRes)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "url": {
    "original": "https://0icof6vvsf.hostx0.de/products/?brand=ruosh",
    "short": "https://0icof6vvsf.hostx0.de/l/3qKlnsq-x",
    "hash": "3qKlnsq-x"
  },
  "redirects": {
    "ios": {
      "type": "web",
      "link": "https://0icof6vvsf.hostx0.de/products/?brand=ruosh"
    },
    "android": {
      "type": "web",
      "link": "https://0icof6vvsf.hostx0.de/products/?brand=ruosh"
    },
    "web": {
      "type": "web",
      "link": "https://0icof6vvsf.hostx0.de/products/?brand=ruosh"
    },
    "force_web": false
  },
  "created_by": "team",
  "personalized": false,
  "app_redirect": false,
  "fallback": "web",
  "enable_tracking": false,
  "active": true,
  "count": 0,
  "_id": "601a54054c0349592e76c8f3",
  "title": "new ",
  "meta": {
    "type": "brand"
  },
  "expire_at": null,
  "application": "5eda528b97457fe43a733ace",
  "user_id": "5e4d01e2c39837ab66144f6d",
  "created_at": "2021-02-03T07:43:01.342Z",
  "updated_at": "2021-02-03T07:43:01.342Z"
}
```
</details>









---



### Schemas


#### [Attribution](#Attribution)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | campaign_cookie_expiry | string? |  yes  |  |
 

---

#### [CampaignShortLink](#CampaignShortLink)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | medium | string? |  yes  |  |
 | source | string? |  yes  |  |
 

---

#### [ClickStatsItem](#ClickStatsItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display | string? |  yes  | The display name of the click statistic. |
 | total | number? |  yes  | The total number of clicks for the statistic. |
 

---

#### [ClickStatsResponse](#ClickStatsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | click_stats | [[ClickStatsItem](#ClickStatsItem)] |  no  | An array of click statistics for the short link. |
 

---

#### [ErrorRes](#ErrorRes)

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

#### [RedirectDevice](#RedirectDevice)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | link | string? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [Redirects](#Redirects)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | android | [RedirectDevice](#RedirectDevice)? |  yes  |  |
 | force_web | boolean? |  yes  |  |
 | ios | [RedirectDevice](#RedirectDevice)? |  yes  |  |
 | web | [WebRedirect](#WebRedirect)? |  yes  |  |
 

---

#### [ShortLinkList](#ShortLinkList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[ShortLinkRes](#ShortLinkRes)]? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 

---

#### [ShortLinkReq](#ShortLinkReq)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | boolean? |  yes  |  |
 | attribution | [Attribution](#Attribution)? |  yes  |  |
 | campaign | [CampaignShortLink](#CampaignShortLink)? |  yes  |  |
 | count | number? |  yes  |  |
 | enable_tracking | boolean? |  yes  |  |
 | expire_at | string? |  yes  |  |
 | hash | string? |  yes  |  |
 | personalized | boolean? |  yes  | To create personalized short links. |
 | redirects | [Redirects](#Redirects)? |  yes  |  |
 | social_media_tags | [SocialMediaTags](#SocialMediaTags)? |  yes  |  |
 | title | string |  no  | Give a name to the link. |
 | url | string |  no  | The web address to shorten. |
 

---

#### [ShortLinkRes](#ShortLinkRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | active | boolean? |  yes  |  |
 | app_redirect | boolean? |  yes  |  |
 | application | string? |  yes  |  |
 | attribution | [Attribution](#Attribution)? |  yes  |  |
 | campaign | [CampaignShortLink](#CampaignShortLink)? |  yes  |  |
 | count | number? |  yes  |  |
 | created_at | string? |  yes  |  |
 | created_by | string? |  yes  |  |
 | enable_tracking | boolean? |  yes  |  |
 | expire_at | string? |  yes  |  |
 | fallback | string? |  yes  |  |
 | meta | string? |  yes  |  |
 | personalized | boolean? |  yes  | To create personalized short links |
 | redirects | [Redirects](#Redirects)? |  yes  |  |
 | social_media_tags | [SocialMediaTags](#SocialMediaTags)? |  yes  |  |
 | title | string? |  yes  |  |
 | updated_at | string? |  yes  |  |
 | url | [UrlInfo](#UrlInfo)? |  yes  |  |
 | user_id | string? |  yes  |  |
 

---

#### [SocialMediaTags](#SocialMediaTags)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string? |  yes  |  |
 | image | string? |  yes  |  |
 | title | string? |  yes  |  |
 

---

#### [UrlInfo](#UrlInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | hash | string? |  yes  |  |
 | original | string? |  yes  |  |
 | short | string? |  yes  |  |
 

---

#### [WebRedirect](#WebRedirect)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | link | string? |  yes  |  |
 | type | string? |  yes  |  |
 

---




