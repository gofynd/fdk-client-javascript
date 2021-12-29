



##### [Back to Application docs](./README.md)

## Share Methods
Short link and QR Code
* [getApplicationQRCode](#getapplicationqrcode)
* [getProductQRCodeBySlug](#getproductqrcodebyslug)
* [getCollectionQRCodeBySlug](#getcollectionqrcodebyslug)
* [getUrlQRCode](#geturlqrcode)
* [createShortLink](#createshortlink)
* [getShortLinkByHash](#getshortlinkbyhash)
* [getOriginalShortLinkByHash](#getoriginalshortlinkbyhash)



## Methods with example and description


### getApplicationQRCode
Create application QR Code



```javascript
// Promise
const promise = share.getApplicationQRCode();

// Async/Await
const data = await share.getApplicationQRCode();
```






Create application QR Code

*Returned Response:*




[QRCodeResp](#QRCodeResp)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "link": "https://fynd.com",
  "svg": "<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 29 29\\\" shape-rendering=\\\"crispEdges\\\"></svg>"
}
```
</details>









---


### getProductQRCodeBySlug
Create product QR Code



```javascript
// Promise
const promise = share.getProductQRCodeBySlug({  slug : value });

// Async/Await
const data = await share.getProductQRCodeBySlug({  slug : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| slug | string | yes | The unique identifier of a product |  



Create product QR Code

*Returned Response:*




[QRCodeResp](#QRCodeResp)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "link": "https://fynd.com/products/shirt-small-blue",
  "svg": "<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 29 29\\\" shape-rendering=\\\"crispEdges\\\"></svg>"
}
```
</details>









---


### getCollectionQRCodeBySlug
Create collection QR Code



```javascript
// Promise
const promise = share.getCollectionQRCodeBySlug({  slug : value });

// Async/Await
const data = await share.getCollectionQRCodeBySlug({  slug : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| slug | string | yes | The unique identifier of a collection |  



Create collection QR Code

*Returned Response:*




[QRCodeResp](#QRCodeResp)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "link": "https://fynd.com/collection/flat-50-off",
  "svg": "<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 29 29\\\" shape-rendering=\\\"crispEdges\\\"></svg>"
}
```
</details>









---


### getUrlQRCode
Create url QR Code



```javascript
// Promise
const promise = share.getUrlQRCode({  url : value });

// Async/Await
const data = await share.getUrlQRCode({  url : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| url | string | yes | Url |  



Create url QR Code

*Returned Response:*




[QRCodeResp](#QRCodeResp)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "link": "https://fynd.com",
  "svg": "<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 29 29\\\" shape-rendering=\\\"crispEdges\\\"></svg>"
}
```
</details>









---


### createShortLink
Create short link



```javascript
// Promise
const promise = share.createShortLink({  body : value });

// Async/Await
const data = await share.createShortLink({  body : value });
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
const promise = share.getShortLinkByHash({  hash : value });

// Async/Await
const data = await share.getShortLinkByHash({  hash : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| hash | string | yes | Hash of short link |  



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


### getOriginalShortLinkByHash
Get original link by hash



```javascript
// Promise
const promise = share.getOriginalShortLinkByHash({  hash : value });

// Async/Await
const data = await share.getOriginalShortLinkByHash({  hash : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| hash | string | yes | Hash of short link |  



Get original link by hash

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

 
 
 #### [QRCodeResp](#QRCodeResp)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | link | string |  no  |  |
 | svg | string |  no  |  |

---


 
 
 #### [RedirectDevice](#RedirectDevice)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | link | string |  no  |  |
 | type | string |  no  |  |

---


 
 
 #### [WebRedirect](#WebRedirect)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | link | string |  no  |  |
 | type | string |  no  |  |

---


 
 
 #### [Redirects](#Redirects)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | ios | [RedirectDevice](#RedirectDevice) |  no  |  |
 | android | [RedirectDevice](#RedirectDevice) |  no  |  |
 | web | [WebRedirect](#WebRedirect) |  no  |  |
 | force_web | boolean |  no  |  |

---


 
 
 #### [CampaignShortLink](#CampaignShortLink)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | source | string |  no  |  |
 | medium | string |  no  |  |

---


 
 
 #### [Attribution](#Attribution)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | campaign_cookie_expiry | string |  no  |  |

---


 
 
 #### [SocialMediaTags](#SocialMediaTags)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | title | string |  no  |  |
 | description | string |  no  |  |
 | image | string |  no  |  |

---


 
 
 #### [ShortLinkReq](#ShortLinkReq)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | title | string |  yes  |  |
 | url | string |  yes  |  |
 | hash | string |  no  |  |
 | active | boolean |  no  |  |
 | expire_at | string |  no  |  |
 | enable_tracking | boolean |  no  |  |
 | personalized | boolean |  no  | To create personalized short links |
 | campaign | [CampaignShortLink](#CampaignShortLink) |  no  |  |
 | redirects | [Redirects](#Redirects) |  no  |  |
 | attribution | [Attribution](#Attribution) |  no  |  |
 | social_media_tags | [SocialMediaTags](#SocialMediaTags) |  no  |  |
 | count | number |  no  |  |

---


 
 
 #### [UrlInfo](#UrlInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | original | string |  no  |  |
 | short | string |  no  |  |
 | hash | string |  no  |  |

---


 
 
 #### [ShortLinkRes](#ShortLinkRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | title | string |  no  |  |
 | url | [UrlInfo](#UrlInfo) |  no  |  |
 | created_by | string |  no  |  |
 | app_redirect | boolean |  no  |  |
 | fallback | string |  no  |  |
 | active | boolean |  no  |  |
 | _id | string |  no  |  |
 | enable_tracking | boolean |  no  |  |
 | expire_at | string |  no  |  |
 | application | string |  no  |  |
 | user_id | string |  no  |  |
 | created_at | string |  no  |  |
 | updated_at | string |  no  |  |
 | personalized | boolean |  no  | To create personalized short links |
 | campaign | [CampaignShortLink](#CampaignShortLink) |  no  |  |
 | redirects | [Redirects](#Redirects) |  no  |  |
 | attribution | [Attribution](#Attribution) |  no  |  |
 | social_media_tags | [SocialMediaTags](#SocialMediaTags) |  no  |  |
 | count | number |  no  |  |

---


 
 
 #### [Page](#Page)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | item_total | number |  no  |  |
 | next_id | string |  no  |  |
 | has_previous | boolean |  no  |  |
 | has_next | boolean |  no  |  |
 | current | number |  no  |  |
 | type | string |  yes  |  |
 | size | number |  no  |  |

---


 
 
 #### [ShortLinkList](#ShortLinkList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[ShortLinkRes](#ShortLinkRes)] |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [ErrorRes](#ErrorRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |

---




