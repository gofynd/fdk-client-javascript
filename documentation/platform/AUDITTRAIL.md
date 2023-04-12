




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


#### [BadRequest](#BadRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || message | string |  no  |  |

---

#### [CreateLogResponse](#CreateLogResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || internal_message | string |  no  |  || message | string |  no  |  |

---

#### [DeviceInfo](#DeviceInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || extra_meta | string |  no  |  || user_agent | string |  no  |  |

---

#### [EntityObj](#EntityObj)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || action | string |  no  |  || entity_details | string |  no  |  || id | string |  no  |  || type | string |  no  |  |

---

#### [EntityObject](#EntityObject)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || action | string |  no  |  || id | string |  no  |  || type | string |  no  |  |

---

#### [EntityTypeObj](#EntityTypeObj)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || display_name | string |  no  |  || entity_value | string |  no  |  |

---

#### [EntityTypesResponse](#EntityTypesResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || items | [[EntityTypeObj](#EntityTypeObj)] |  no  |  |

---

#### [InternalServerError](#InternalServerError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || code | string |  no  |  || message | string |  no  |  |

---

#### [Location](#Location)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || extra_meta | string |  no  |  |

---

#### [LogDocs](#LogDocs)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || _id | string |  no  |  || application | string |  no  |  || company | string |  no  |  || date | string |  no  |  || device_info | [DeviceInfo](#DeviceInfo) |  no  |  || entity | [EntityObj](#EntityObj) |  no  |  || location | [Location](#Location) |  no  |  || logs | string |  no  |  || modifier | [Modifier](#Modifier) |  no  |  || sessions | string |  no  |  |

---

#### [LogMetaObj](#LogMetaObj)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || application | string |  no  |  || device_info | string |  no  |  || entity | [EntityObject](#EntityObject) |  no  |  || location | string |  no  |  || modifier | string |  no  |  |

---

#### [LogSchemaResponse](#LogSchemaResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || docs | [[LogDocs](#LogDocs)] |  no  |  |

---

#### [Modifier](#Modifier)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || as_administrator | boolean |  no  |  || user_details | string |  no  |  || user_id | string |  no  |  |

---

#### [RequestBodyAuditLog](#RequestBodyAuditLog)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || log_meta | [LogMetaObj](#LogMetaObj) |  yes  |  || log_payload | string |  yes  |  |

---

#### [ResourceNotFound](#ResourceNotFound)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || message | string |  no  |  |

---




