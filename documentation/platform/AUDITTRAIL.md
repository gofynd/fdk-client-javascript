



##### [Back to Platform docs](./README.md)

## AuditTrail Methods
Audit Logging Service that logs the crucial updates on the Platform
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



Get a paginated set of logs that can be filtered using the available set of parameters and get the relevant group of logs

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
          "type": "update-shipment-status",
          "id": "16660872182851894278",
          "action": "update"
        },
        "modifier": {
          "user_id": "a8d7a69b4cd980acc5d2455c",
          "as_administrator": true,
          "user_details": {
            "first_name": "Paul",
            "last_name": "Lobo",
            "full_name": "Paul Lobo",
            "email": "paullobo@gofynd.com"
          }
        },
        "_id": "634eef735e84e7e1b09aa07c",
        "application": null,
        "date": "2022-10-18T18:24:51.329Z",
        "created_at": "2022-10-18T18:24:51.400Z",
        "modified_at": "2022-10-18T18:24:51.400Z"
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


Create a log instance that stores all the relevant info to be logged

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



Get detailed log information by their id

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
    "entity": {
      "type": "update-shipment-status",
      "id": "16660872182851894278",
      "action": "update"
    },
    "modifier": {
      "user_id": "a8d7a69b4cd980acc5d2455c",
      "as_administrator": true,
      "user_details": {
        "first_name": "Paul",
        "last_name": "Lobo",
        "full_name": "Paul Lobo",
        "email": "paullobo@gofynd.com"
      }
    },
    "device_info": {
      "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
    },
    "location": {
      "IP": "103.173.241.155"
    },
    "_id": "634eef735e84e7e1b09aa07c",
    "company": 1,
    "application": null,
    "sessions": "",
    "date": "2022-10-18T18:24:51.329Z",
    "logs": {
      "request": {
        "status_update": {
          "bags": [
            403501,
            403502,
            403503
          ],
          "status": "bag_confirmed"
        }
      },
      "response": {
        "shipments": {
          "16660872182851894278": {
            "status": true,
            "error": "",
            "message": [
              "Requested change is being performed"
            ]
          }
        },
        "error_shipments": []
      }
    },
    "created_at": "2022-10-18T18:24:51.400Z",
    "modified_at": "2022-10-18T18:24:51.400Z",
    "meta": {
      "browser": {
        "name": "Chrome",
        "version": "106.0.0.0",
        "major": "106"
      },
      "device": {},
      "cpu": {},
      "os": {
        "name": "Mac OS",
        "version": "10.15.7"
      },
      "engine": {
        "name": "Blink",
        "version": "106.0.0.0"
      }
    }
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






Get a consolidated list of entity types from all the logs stored on the db, which further helps to filter the logs better

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




