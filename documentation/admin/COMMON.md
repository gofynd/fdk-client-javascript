




##### [Back to Admin docs](./README.md)

## Common Methods
Authorization configuration apis

* [testAdmin](#testadmin)



## Methods with example and description




### testAdmin
API to Test SDK generation.



```javascript
// Promise
const promise = adminClient.common.testAdmin();

// Async/Await
const data = await adminClient.common.testAdmin();
```






Test Administrator API.

*Returned Response:*




[Object](#Object)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---



### Schemas


#### [Author](#Author)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | created_by | string? |  yes  |  |
 | creator_name | string? |  yes  |  |
 | updated_by | string? |  yes  |  |
 | updator_name | string? |  yes  |  |
 

---

#### [Meta](#Meta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | comment | string? |  yes  |  |
 | name | string? |  yes  |  |
 | tags | [string]? |  yes  |  |
 

---

#### [OAuthClient](#OAuthClient)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | __v | number? |  yes  |  |
 | access_token_lifetime | number? |  yes  |  |
 | author | [Author](#Author)? |  yes  |  |
 | client_id | string? |  yes  |  |
 | client_type | string? |  yes  |  |
 | created_at | string? |  yes  |  |
 | grants | [string]? |  yes  |  |
 | id | string? |  yes  |  |
 | is_active | boolean? |  yes  |  |
 | meta | [Meta](#Meta)? |  yes  |  |
 | modified_at | string? |  yes  |  |
 | redirect_urls | [string]? |  yes  |  |
 | refresh_token_lifetime | number? |  yes  |  |
 | scopes | [Scopes](#Scopes)? |  yes  |  |
 | secret | [string]? |  yes  |  |
 | slug | string? |  yes  |  |
 

---

#### [Pagination](#Pagination)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | page_no | number? |  yes  | Page No |
 | page_size | number? |  yes  | Page Size |
 

---

#### [Scopes](#Scopes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | permissions | [string] |  no  |  |
 

---




