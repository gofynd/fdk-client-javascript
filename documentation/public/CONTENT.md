




##### [Back to Public docs](./README.md)

## Content Methods
Content System


Default
* [getCredentialsByEntity](#getcredentialsbyentity)




## Methods with example and description





### getCredentialsByEntity
Get credentials to power chat support systems



```javascript
// Promise
const promise = publicClient.content.getCredentialsByEntity({  entity : value });

// Async/Await
const data = await publicClient.content.getCredentialsByEntity({  entity : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| entity | string | no | Server Type |  



Get credentials for support system

*Returned Response:*




[CredentialsSchema](#CredentialsSchema)

Success. Refer `CredentialsSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "entity_type": "partner",
    "type": "freshchat",
    "is_enable": true,
    "configuration": {
      "token": "a3e4gf20b-d11g-4512-n3zq-03b9aa7e1yxz",
      "siteId": "a3e8f20b-d97f-452f-bd72-03b9aa7e1bf0",
      "host": "https://wchat.freshchat.com"
    }
  }
}
```
</details>

</details>









---




### Schemas


#### [ContentAPIError](#ContentAPIError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string? |  yes  |  |
 | exception | string? |  yes  |  |
 | info | string? |  yes  |  |
 | message | string? |  yes  |  |
 | meta | string? |  yes  |  |
 | request_id | string? |  yes  |  |
 | stack_trace | string? |  yes  |  |
 | status | number? |  yes  |  |
 

---

#### [CredentialSchema](#CredentialSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | configuration | string? |  yes  |  |
 | entity_type | string? |  yes  |  |
 | is_enable | boolean? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [CredentialsSchema](#CredentialsSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[CredentialSchema](#CredentialSchema)]? |  yes  |  |
 

---




