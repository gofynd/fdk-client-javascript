




##### [Back to Public docs](./README.md)

## Webhook Methods
Webhook dispatcher with retry and one event to many subscriber vice versa


Webhook event management
* [fetchAllWebhookEvents](#fetchallwebhookevents)
* [queryWebhookEventDetails](#querywebhookeventdetails)


Default
* [notifyDepricatedEvent](#notifydepricatedevent)
* [testHandlerTransformation](#testhandlertransformation)
* [validateSchema](#validateschema)




## Methods with example and description





### fetchAllWebhookEvents
Fetch all webhook events.



```javascript
// Promise
const promise = publicClient.webhook.fetchAllWebhookEvents();

// Async/Await
const data = await publicClient.webhook.fetchAllWebhookEvents();
```






Retrieve a list of all webhook events in the public server setup.

*Returned Response:*




[EventConfigResponse](#EventConfigResponse)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
{
  "value": {
    "event_configs": [
      {
        "id": 1,
        "event_name": "article",
        "event_type": "create",
        "event_category": "application",
        "version": "1",
        "display_name": "article",
        "description": "This event gets triggered when an article is created",
        "event_schema": null,
        "created_on": "2021-12-20T17:38:22.922Z",
        "updated_on": "2023-07-26T12:30:30.930Z"
      }
    ]
  }
}
```
</details>

</details>









---


### queryWebhookEventDetails
Query webhook event details.



```javascript
// Promise
const promise = publicClient.webhook.queryWebhookEventDetails({  body : value });

// Async/Await
const data = await publicClient.webhook.queryWebhookEventDetails({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [Array<EventConfigBase>](#Array<EventConfigBase>) | yes | Request body |


Query and obtain detailed information about webhook events in the public server configurations.

*Returned Response:*




[EventConfigResponse](#EventConfigResponse)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
{
  "value": {
    "event_configs": [
      {
        "id": 1,
        "event_name": "article",
        "event_type": "create",
        "event_category": "application",
        "version": "1",
        "display_name": "article",
        "description": "This event gets triggered when an article is created",
        "event_schema": null,
        "created_on": "2021-12-20T17:38:22.922Z",
        "updated_on": "2023-07-26T12:30:30.930Z"
      }
    ]
  }
}
```
</details>

</details>









---




### notifyDepricatedEvent
Notifies all the events that are going to depricate



```javascript
// Promise
const promise = publicClient.webhook.notifyDepricatedEvent();

// Async/Await
const data = await publicClient.webhook.notifyDepricatedEvent();
```






Notifies all the events that are subscribed and are going to deprecate or new version is available for those events

*Returned Response:*




[EventNotifier](#EventNotifier)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
{
  "value": {
    "event_configs": [
      {
        "id": 1,
        "event_name": "article",
        "event_type": "create",
        "event_category": "application",
        "version": "1",
        "display_name": "article",
        "description": "This event gets triggered when an article is created",
        "event_schema": null,
        "created_on": "2021-12-20T17:38:22.922Z",
        "updated_on": "2023-07-26T12:30:30.930Z"
      }
    ]
  }
}
```
</details>

</details>









---


### testHandlerTransformation
Test transformation of handler



```javascript
// Promise
const promise = publicClient.webhook.testHandlerTransformation({  body : value });

// Async/Await
const data = await publicClient.webhook.testHandlerTransformation({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [TransformEventRequest](#TransformEventRequest) | yes | Request body |


Test transformation of handler

*Returned Response:*




[TransformEventResponse](#TransformEventResponse)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
{
  "value": {
    "event_trace_id": [
      "WheelJack.7cfeea2e-720e-11ee-8f26-ca3fc26a3fda"
    ],
    "data": {
      "event": {
        "trace_id": [
          "WheelJack.7cfeea2e-720e-11ee-8f26-ca3fc26a3fda"
        ],
        "name": "location",
        "type": "create",
        "version": "1",
        "created_timestamp": 1698111704725
      },
      "company_id": 6086,
      "contains": [
        "location"
      ],
      "payload": {
        "location": {
          "_id": "653720d892a8429b6fb9563e",
          "created_on": "2023-10-24T01:41:44.450Z",
          "modified_on": "2023-10-24T01:41:44.450Z"
        }
      }
    },
    "event_name": "location",
    "version": "1",
    "status": false,
    "event_type": "create",
    "service_meta": {
      "name": "WheelJack"
    },
    "association": {
      "company_id": 6086
    }
  }
}
```
</details>

</details>









---


### validateSchema
Validate Schema for an event



```javascript
// Promise
const promise = publicClient.webhook.validateSchema({  body : value });

// Async/Await
const data = await publicClient.webhook.validateSchema({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [ValidateSchemaRequest](#ValidateSchemaRequest) | yes | Request body |


Validate Schema for an event

*Returned Response:*




[ValidateSchemaResponse](#ValidateSchemaResponse)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
{
  "value": {
    "status": true,
    "message": "Valid schema for this event"
  }
}
```
</details>

</details>









---




### Schemas


#### [EventConfig](#EventConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | created_on | string? |  yes  |  |
 | description | string? |  yes  |  |
 | display_name | string? |  yes  |  |
 | event_category | string? |  yes  |  |
 | event_name | string? |  yes  |  |
 | event_schema | string? |  yes  |  |
 | event_type | string? |  yes  |  |
 | id | number? |  yes  |  |
 | updated_on | string? |  yes  |  |
 | version | string? |  yes  |  |
 

---

#### [EventConfigBase](#EventConfigBase)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | event_category | string? |  yes  |  |
 | event_name | string? |  yes  |  |
 | event_type | string? |  yes  |  |
 | version | string? |  yes  |  |
 

---

#### [EventConfigResponse](#EventConfigResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | event_configs | [[EventConfig](#EventConfig)]? |  yes  |  |
 

---

#### [EventNotifier](#EventNotifier)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | emails | [string]? |  yes  |  |
 | message | string? |  yes  |  |
 

---

#### [EventSchema](#EventSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | meta | string? |  yes  |  |
 | payload | string? |  yes  |  |
 

---

#### [InternalTransformEvent](#InternalTransformEvent)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | created_timestamp | number? |  yes  |  |
 | name | string? |  yes  |  |
 | trace_id | [string]? |  yes  |  |
 | type | string? |  yes  |  |
 | version | string? |  yes  |  |
 

---

#### [TransformEventAssociation](#TransformEventAssociation)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | company_id | number? |  yes  |  |
 

---

#### [TransformEventData](#TransformEventData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | company_id | number? |  yes  |  |
 | contains | [string]? |  yes  |  |
 | event | [InternalTransformEvent](#InternalTransformEvent)? |  yes  |  |
 | payload | string? |  yes  |  |
 

---

#### [TransformEventRequest](#TransformEventRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | event | [EventSchema](#EventSchema)? |  yes  |  |
 | event_category | string? |  yes  |  |
 | event_name | string? |  yes  |  |
 | event_type | string? |  yes  |  |
 | event_version | string? |  yes  |  |
 

---

#### [TransformEventResponse](#TransformEventResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | association | [TransformEventAssociation](#TransformEventAssociation)? |  yes  |  |
 | data | [TransformEventData](#TransformEventData)? |  yes  |  |
 | event_name | string? |  yes  |  |
 | event_trace_id | [string]? |  yes  |  |
 | event_type | string? |  yes  |  |
 | service_meta | [TransformEventServiceMeta](#TransformEventServiceMeta)? |  yes  |  |
 | status | boolean? |  yes  |  |
 | version | string? |  yes  |  |
 

---

#### [TransformEventServiceMeta](#TransformEventServiceMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string? |  yes  |  |
 

---

#### [ValidateSchemaRequest](#ValidateSchemaRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | event | [EventSchema](#EventSchema)? |  yes  |  |
 | event_category | string? |  yes  |  |
 | event_name | string? |  yes  |  |
 | event_schema | string? |  yes  |  |
 | event_type | string? |  yes  |  |
 | event_version | string? |  yes  |  |
 

---

#### [ValidateSchemaResponse](#ValidateSchemaResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 | status | boolean? |  yes  |  |
 

---




