




##### [Back to Platform docs](./README.md)

## AuditTrail Methods


* [createAuditLog](#createauditlog)
* [getAuditLog](#getauditlog)
* [getAuditLogs](#getauditlogs)
* [getEntityTypes](#getentitytypes)



## Methods with example and description




### createAuditLog
Create logs for auditing later on



```javascript
// Promise
const promise = platformClient.auditTrail.createAuditLog({  body : value });

// Async/Await
const data = await platformClient.auditTrail.createAuditLog({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [RequestBodyAuditLog](#RequestBodyAuditLog) | yes | Request body |


Create a Audit log

*Returned Response:*




[CreateLogResponse](#CreateLogResponse)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "message": "Audit log recorded successfully !",
    "internal_message": "Audit log queued"
  }
}
```
</details>

</details>









---


### getAuditLog
Get audit log



```javascript
// Promise
const promise = platformClient.auditTrail.getAuditLog({  id : value });

// Async/Await
const data = await platformClient.auditTrail.getAuditLog({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | log uuid |  



Get audit logs by logs uuid

*Returned Response:*




[LogSchemaResponse](#LogSchemaResponse)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "docs": [
      {
        "entity": {
          "type": "sales-channel-configuration",
          "id": "5dcbf6065862c28d81beb025",
          "action": "update"
        },
        "modifier": {
          "as_administrator": true,
          "user_id": "5d8391fa7f6b58553d02eb63",
          "user_details": {
            "firstName": "Hitesh",
            "email": "hiteshjha@gofynd.com"
          }
        },
        "device_info": {
          "user_agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36"
        },
        "location": {
          "IP": "103.226.87.213"
        },
        "_id": "602a1366a7486d63f1e915b2",
        "company": 61,
        "application": "5d63686df2a4f7806b76bb32",
        "sessions": "",
        "date": "2021-02-15T06:23:32.098Z",
        "logs": {
          "modified_by": "5d8391fa7f6b58553d02eb63"
        },
        "created_at": "2021-02-15T06:23:34.497Z",
        "modified_at": "2021-02-15T06:23:34.497Z",
        "meta": {
          "browser": "Linux - Chrome",
          "device": ""
        }
      }
    ]
  }
}
```
</details>

</details>









---


### getAuditLogs
Get paginated audit logs



```javascript
// Promise
const promise = platformClient.auditTrail.getAuditLogs({  qs : value });

// Async/Await
const data = await platformClient.auditTrail.getAuditLogs({  qs : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| qs | string | yes | Logs Query |  



Get audit logs

*Returned Response:*




[LogSchemaResponse](#LogSchemaResponse)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "docs": [
      {
        "entity": {
          "type": "sales-channel-configuration",
          "id": "5dcbf6065862c28d81beb025",
          "action": "update"
        },
        "modifier": {
          "as_administrator": true,
          "user_id": "5d8391fa7f6b58553d02eb63",
          "user_details": {
            "firstName": "Hitesh",
            "email": "hiteshjha@gofynd.com"
          }
        },
        "device_info": {
          "user_agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36"
        },
        "location": {
          "IP": "103.226.87.213"
        },
        "_id": "602a1366a7486d63f1e915b2",
        "company": 61,
        "application": "5d63686df2a4f7806b76bb32",
        "sessions": "",
        "date": "2021-02-15T06:23:32.098Z",
        "logs": {
          "modified_by": "5d8391fa7f6b58553d02eb63"
        },
        "created_at": "2021-02-15T06:23:34.497Z",
        "modified_at": "2021-02-15T06:23:34.497Z",
        "meta": {
          "browser": "Linux - Chrome",
          "device": ""
        }
      }
    ]
  }
}
```
</details>

</details>









---


### getEntityTypes
Get entity types



```javascript
// Promise
const promise = platformClient.auditTrail.getEntityTypes();

// Async/Await
const data = await platformClient.auditTrail.getEntityTypes();
```






Get entity types

*Returned Response:*




[EntityTypesResponse](#EntityTypesResponse)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "items": [
      {
        "entity_value:\"sales-channel\"": null,
        "display_name": "Sales Channel"
      },
      {
        "entity_value:\"shipment-update\"": null,
        "display_name": "Shipment Update"
      }
    ]
  }
}
```
</details>

</details>









---



### Schemas


#### [BadRequest](#BadRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  | Failure message. |
 

---

#### [CreateLogResponse](#CreateLogResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | internal_message | string? |  yes  |  |
 | message | string? |  yes  |  |
 

---

#### [DeviceInfo](#DeviceInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | extra_meta | string? |  yes  |  |
 | user_agent | string? |  yes  |  |
 

---

#### [EntityObj](#EntityObj)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action | string? |  yes  |  |
 | entity_details | string? |  yes  |  |
 | id | string? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [EntityObject](#EntityObject)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action | string? |  yes  |  |
 | id | string? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [EntityTypeObj](#EntityTypeObj)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display_name | string? |  yes  |  |
 | entity_value | string? |  yes  |  |
 

---

#### [EntityTypesResponse](#EntityTypesResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[EntityTypeObj](#EntityTypeObj)]? |  yes  |  |
 

---

#### [InternalServerError](#InternalServerError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string? |  yes  | Error code |
 | message | string? |  yes  | Internal server Server error |
 

---

#### [Location](#Location)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | extra_meta | string? |  yes  |  |
 

---

#### [LogDocs](#LogDocs)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | application | string? |  yes  |  |
 | company | string? |  yes  |  |
 | date | string? |  yes  |  |
 | device_info | [DeviceInfo](#DeviceInfo)? |  yes  |  |
 | entity | [EntityObj](#EntityObj)? |  yes  |  |
 | location | [Location](#Location)? |  yes  |  |
 | logs | string? |  yes  |  |
 | modifier | [Modifier](#Modifier)? |  yes  |  |
 | sessions | string? |  yes  |  |
 

---

#### [LogMetaObj](#LogMetaObj)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application | string? |  yes  |  |
 | device_info | string? |  yes  |  |
 | entity | [EntityObject](#EntityObject)? |  yes  |  |
 | location | string? |  yes  |  |
 | modifier | string? |  yes  |  |
 

---

#### [LogSchemaResponse](#LogSchemaResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | docs | [[LogDocs](#LogDocs)]? |  yes  |  |
 

---

#### [Modifier](#Modifier)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | as_administrator | boolean? |  yes  |  |
 | user_details | string? |  yes  |  |
 | user_id | string? |  yes  |  |
 

---

#### [RequestBodyAuditLog](#RequestBodyAuditLog)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | log_meta | [LogMetaObj](#LogMetaObj) |  no  |  |
 | log_payload | string |  no  |  |
 

---

#### [ResourceNotFound](#ResourceNotFound)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  | Resource not found with {id} |
 

---




