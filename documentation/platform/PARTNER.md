




##### [Back to Platform docs](./README.md)

## Partner Methods
Partner configuration apis

* [addProxyPath](#addproxypath)
* [removeProxyPath](#removeproxypath)



## Methods with example and description




### addProxyPath
Add proxy path for external url



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").partner.addProxyPath({  extensionId : value,
 body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").partner.addProxyPath({  extensionId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| extensionId | string | yes | Extension id |  
| body | [AddProxyReq](#AddProxyReq) | yes | Request body |


Add proxy path for external url

*Returned Response:*




[AddProxyResponse](#AddProxyResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "_id": "607406b8a472cd527303692f",
  "attached_path": "test",
  "proxy_url": "https://www.abc.com",
  "company_id": "1",
  "application_id": "000000000000000000000004",
  "extension_id": "6073280be899ea5b1150fd9d",
  "created_at": "2021-04-12T08:37:12.077Z",
  "modified_at": "2021-04-12T08:37:12.077Z"
}
```
</details>









---


### removeProxyPath
Remove proxy path for external url



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").partner.removeProxyPath({  extensionId : value,
 attachedPath : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").partner.removeProxyPath({  extensionId : value,
 attachedPath : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| extensionId | string | yes | Extension id |   
| attachedPath | string | yes | Attachaed path slug |  



Remove proxy path for external url

*Returned Response:*




[RemoveProxyResponse](#RemoveProxyResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "message": "Proxy URL deleted",
  "data": {
    "_id": "607406b8a472cd527303692f",
    "attached_path": "test",
    "proxy_url": "https://www.abc.com",
    "company_id": "1",
    "application_id": "000000000000000000000004",
    "extension_id": "6073280be899ea5b1150fd9d",
    "created_at": "2021-04-12T08:37:12.077Z",
    "modified_at": "2021-04-12T08:37:12.077Z"
  }
}
```
</details>









---



### Schemas


#### [AddProxyReq](#AddProxyReq)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | attached_path | string? |  yes  | Proxy path slug |
 | proxy_url | string? |  yes  | Proxied url |
 

---

#### [AddProxyResponse](#AddProxyResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | application_id | string? |  yes  |  |
 | attached_path | string? |  yes  |  |
 | company_id | string? |  yes  |  |
 | created_at | string? |  yes  |  |
 | extension_id | string? |  yes  |  |
 | modified_at | string? |  yes  |  |
 | proxy_url | string? |  yes  |  |
 

---

#### [APIError](#APIError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string? |  yes  |  |
 | info | string? |  yes  | Error code description link |
 | message | string? |  yes  |  |
 | meta | string? |  yes  |  |
 | request_id | string? |  yes  |  |
 

---

#### [RemoveProxyResponse](#RemoveProxyResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | string? |  yes  |  |
 | message | string? |  yes  |  |
 

---




