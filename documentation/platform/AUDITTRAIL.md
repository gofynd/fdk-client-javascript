




##### [Back to Platform docs](./README.md)

## AuditTrail Methods


* [getAuditLogs](#getauditlogs)
* [createAuditLog](#createauditlog)
* [getAuditLog](#getauditlog)
* [getEntityTypes](#getentitytypes)



## Methods with example and description




### getAuditLogs
Get paginated audit logs



```javascript
// Promise
const promise = client.auditTrail.getAuditLogs({  qs : value });

// Async/Await
const data = await client.auditTrail.getAuditLogs({  qs : value });
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


### createAuditLog
Create logs for auditing later on



```javascript
// Promise
const promise = client.auditTrail.createAuditLog({  body : value });

// Async/Await
const data = await client.auditTrail.createAuditLog({  body : value });
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
const promise = client.auditTrail.getAuditLog({  id : value });

// Async/Await
const data = await client.auditTrail.getAuditLog({  id : value });
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


### getEntityTypes
Get entity types



```javascript
// Promise
const promise = client.auditTrail.getEntityTypes();

// Async/Await
const data = await client.auditTrail.getEntityTypes();
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

 
 
 #### [RequestBodyAuditLog](#RequestBodyAuditLog)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | log_meta | [LogMetaObj](#LogMetaObj) |  yes  |  |
 | log_payload | string |  yes  |  |

---


 
 
 #### [CreateLogResponse](#CreateLogResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 | internal_message | string |  no  |  |

---


 
 
 #### [LogMetaObj](#LogMetaObj)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | modifier | string |  no  |  |
 | application | string |  no  |  |
 | entity | [EntityObject](#EntityObject) |  no  |  |
 | device_info | string |  no  |  |
 | location | string |  no  |  |

---


 
 
 #### [EntityObject](#EntityObject)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | type | string |  no  |  |
 | action | string |  no  |  |

---


 
 
 #### [LogSchemaResponse](#LogSchemaResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | docs | [[LogDocs](#LogDocs)] |  no  |  |

---


 
 
 #### [LogDocs](#LogDocs)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | entity | [EntityObj](#EntityObj) |  no  |  |
 | modifier | [Modifier](#Modifier) |  no  |  |
 | device_info | [DeviceInfo](#DeviceInfo) |  no  |  |
 | location | [Location](#Location) |  no  |  |
 | _id | string |  no  |  |
 | company | string |  no  |  |
 | application | string |  no  |  |
 | sessions | string |  no  |  |
 | date | string |  no  |  |
 | logs | string |  no  |  |

---


 
 
 #### [EntityObj](#EntityObj)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | type | string |  no  |  |
 | action | string |  no  |  |
 | entity_details | string |  no  |  |

---


 
 
 #### [Modifier](#Modifier)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | user_id | string |  no  |  |
 | as_administrator | boolean |  no  |  |
 | user_details | string |  no  |  |

---


 
 
 #### [DeviceInfo](#DeviceInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | user_agent | string |  no  |  |
 | extra_meta | string |  no  |  |

---


 
 
 #### [Location](#Location)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | extra_meta | string |  no  |  |

---


 
 
 #### [BadRequest](#BadRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  | Failure message. |

---


 
 
 #### [ResourceNotFound](#ResourceNotFound)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  | Resource not found with {id} |

---


 
 
 #### [InternalServerError](#InternalServerError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  | Internal server Server error |
 | code | string |  no  | Error code |

---


 
 
 #### [EntityTypesResponse](#EntityTypesResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[EntityTypeObj](#EntityTypeObj)] |  no  |  |

---


 
 
 #### [EntityTypeObj](#EntityTypeObj)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | entity_value | string |  no  |  |
 | display_name | string |  no  |  |

---




