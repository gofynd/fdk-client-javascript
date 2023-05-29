




##### [Back to Application docs](./README.md)

## Share Methods
Short link and QR Code

* [createShortLink](#createshortlink)
* [getApplicationQRCode](#getapplicationqrcode)
* [getCollectionQRCodeBySlug](#getcollectionqrcodebyslug)
* [getOriginalShortLinkByHash](#getoriginalshortlinkbyhash)
* [getProductQRCodeBySlug](#getproductqrcodebyslug)
* [getShortLinkByHash](#getshortlinkbyhash)
* [getUrlQRCode](#geturlqrcode)



## Methods with example and description




### createShortLink
Create a short link



```javascript
// Promise
const promise = applicationClient.share.createShortLink({  body : value });

// Async/Await
const data = await applicationClient.share.createShortLink({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [ShortLinkReq](#ShortLinkReq) | yes | Request body |


Use this API to create a short link that is easy to write/share/read as compared to long URLs.

*Returned Response:*




[ShortLinkRes](#ShortLinkRes)

Success. Check the example shown below or refer `ShortLinkRes` for more details.




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


### getApplicationQRCode
Create QR Code of an app



```javascript
// Promise
const promise = applicationClient.share.getApplicationQRCode();

// Async/Await
const data = await applicationClient.share.getApplicationQRCode();
```






Use this API to create a QR code of an app for sharing it with users who want to use the app.

*Returned Response:*




[QRCodeResp](#QRCodeResp)

Success. Check the example shown below or refer `QRCodeResp` for more details.




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


### getCollectionQRCodeBySlug
Create QR Code of a collection



```javascript
// Promise
const promise = applicationClient.share.getCollectionQRCodeBySlug({  slug : value });

// Async/Await
const data = await applicationClient.share.getCollectionQRCodeBySlug({  slug : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| slug | string | yes | A short, human-readable, URL-friendly identifier of a collection. You can get slug value from the endpoint. |  



Use this API to create a QR code of a collection of products for sharing it with users who want to view/purchase the collection.

*Returned Response:*




[QRCodeResp](#QRCodeResp)

Success. Check the example shown below or refer `QRCodeResp` for more details.




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


### getOriginalShortLinkByHash
Get original link by hash



```javascript
// Promise
const promise = applicationClient.share.getOriginalShortLinkByHash({  hash : value });

// Async/Await
const data = await applicationClient.share.getOriginalShortLinkByHash({  hash : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| hash | string | yes | A string value used for converting long URL to short URL and vice-versa. |  



Use this API to retrieve the original link from a short-link by using a hash value.

*Returned Response:*




[ShortLinkRes](#ShortLinkRes)

Success. Check the example shown below or refer `ShortLinkRes` for more details.




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


### getProductQRCodeBySlug
Create QR Code of a product



```javascript
// Promise
const promise = applicationClient.share.getProductQRCodeBySlug({  slug : value });

// Async/Await
const data = await applicationClient.share.getProductQRCodeBySlug({  slug : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| slug | string | yes | A short, human-readable, URL-friendly identifier of a product. You can get slug value from the endpoint. |  



Use this API to create a QR code of a product for sharing it with users who want to view/purchase the product.

*Returned Response:*




[QRCodeResp](#QRCodeResp)

Success. Check the example shown below or refer `QRCodeResp` for more details.




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


### getShortLinkByHash
Get short link by hash



```javascript
// Promise
const promise = applicationClient.share.getShortLinkByHash({  hash : value });

// Async/Await
const data = await applicationClient.share.getShortLinkByHash({  hash : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| hash | string | yes | A string value used for converting long URL to short URL and vice-versa. |  



Use this API to get a short link by using a hash value.

*Returned Response:*




[ShortLinkRes](#ShortLinkRes)

Success. Check the example shown below or refer `ShortLinkRes` for more details.




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


### getUrlQRCode
Create QR Code of a URL



```javascript
// Promise
const promise = applicationClient.share.getUrlQRCode({  url : value });

// Async/Await
const data = await applicationClient.share.getUrlQRCode({  url : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| url | string | yes | A link or a web address |  



Use this API to create a QR code of a URL for sharing it with users who want to visit the link.

*Returned Response:*




[QRCodeResp](#QRCodeResp)

Success. Check the example shown below or refer `QRCodeResp` for more details.




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

#### [QRCodeResp](#QRCodeResp)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | link | string? |  yes  |  |
 | svg | string? |  yes  |  |
 

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




