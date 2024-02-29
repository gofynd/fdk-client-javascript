




##### [Back to Platform docs](./README.md)

## Partner Methods
Partner configuration apis


Proxy Path Management
* [addProxyPath](#addproxypath)
* [removeProxyPath](#removeproxypath)




## Methods with example and description





### addProxyPath
Add proxy path.



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
| extensionId | string | yes | Extension id for which a proxy URL will be generated |  
| body | [AddProxyReq](#AddProxyReq) | yes | Request body |


Create and add a new proxy path.

*Returned Response:*




[AddProxyResponse](#AddProxyResponse)

Proxy created successfully




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
{
  "value": {
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

</details>









---


### removeProxyPath
Remove proxy path.



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
| extensionId | string | yes | Extension id for which proxy URL needs to be removed |   
| attachedPath | string | yes | Attached path slug |  



Delete a proxy path from the platform.

*Returned Response:*




[RemoveProxyResponse](#RemoveProxyResponse)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
{
  "value": {
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
}
```
</details>

</details>









---




### Schemas


#### [AddProxyReq](#AddProxyReq)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | attached_path | string? |  yes  | Proxy path slug |
 | proxy_url | string? |  yes  | The external URL for which the proxy URL will be generated |
 

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




