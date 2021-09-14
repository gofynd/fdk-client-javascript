



##### [Back to Platform docs](./README.md)

## Share Methods
Short link and QR Code
* [createShortLink](#createshortlink)
* [getShortLinks](#getshortlinks)
* [getShortLinkByHash](#getshortlinkbyhash)
* [updateShortLinkById](#updateshortlinkbyid)



## Methods with example and description


### createShortLink
Create short link



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").share.createShortLink({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").share.createShortLink({  body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id |   
| applicationId | string | yes | Application Id |  
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


### getShortLinks
Get short links



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").share.getShortLinks({  pageNo : value,
 pageSize : value,
 createdBy : value,
 active : value,
 q : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").share.getShortLinks({  pageNo : value,
 pageSize : value,
 createdBy : value,
 active : value,
 q : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id |   
| applicationId | string | yes | Application Id |    
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


### getShortLinkByHash
Get short link by hash



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").share.getShortLinkByHash({  hash : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").share.getShortLinkByHash({  hash : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id |   
| applicationId | string | yes | Application Id |   
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


### updateShortLinkById
Update short link by id



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").share.updateShortLinkById({  id : value,
 body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").share.updateShortLinkById({  id : value,
 body : value });
```



| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| companyId | string | yes | Company Id |   
| applicationId | string | yes | Application Id |   
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
 | title | string |  yes  | Give a name to the link. |
 | url | string |  yes  | The web address to shorten. |
 | hash | string |  no  |  |
 | active | boolean |  no  |  |
 | expire_at | string |  no  |  |
 | enable_tracking | boolean |  no  |  |
 | personalized | boolean |  no  | To create personalized short links. |
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
 | meta | string |  no  |  |
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




