




##### [Back to Platform docs](./README.md)

## AuditTrail Methods
Audit Logging Service that logs the crucial updates on the Platform


Audit Logs Management
* [createAuditLog](#createauditlog)
* [getAuditLog](#getauditlog)
* [getAuditLogs](#getauditlogs)
* [getEntityTypes](#getentitytypes)




## Methods with example and description





### createAuditLog
Create an audit log.



```javascript
// Promise
const promise = platformClient.auditTrail.createAuditLog({  body : value });

// Async/Await
const data = await platformClient.auditTrail.createAuditLog({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [RequestBodyAuditLog](#RequestBodyAuditLog) | yes | Request body |


Generate and record an audit log entry for a specific event or action.

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
Get an audit log entry.



```javascript
// Promise
const promise = platformClient.auditTrail.getAuditLog({  id : value });

// Async/Await
const data = await platformClient.auditTrail.getAuditLog({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | log uuid |  



Retrieve a specific audit log entry

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
        "email": "paullobo@xyz.com"
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


### getAuditLogs
Retrieve audit logs.



```javascript
// Promise
const promise = platformClient.auditTrail.getAuditLogs({  qs : value,
 limit : value,
 sort : value });

// Async/Await
const data = await platformClient.auditTrail.getAuditLogs({  qs : value,
 limit : value,
 sort : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| qs | string | yes | Logs Query |    
| limit | number | no | Current request items count |    
| sort | Object | no | To sort based on _id |  



Retrieve audit logs for system events and actions.

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
            "email": "paullobo@xyz.com"
          }
        },
        "_id": "634eef735e84e7e1b09aa07c",
        "application": "",
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


### getEntityTypes
Obtain entity types for auditing.



```javascript
// Promise
const promise = platformClient.auditTrail.getEntityTypes();

// Async/Await
const data = await platformClient.auditTrail.getEntityTypes();
```






List of entity types that can be audited within the platform's

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




