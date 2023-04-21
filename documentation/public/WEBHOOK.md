




##### [Back to Public docs](./README.md)

## Webhook Methods
Webhook dispatcher with retry and one event to many subscriber vice versa

* [fetchAllWebhookEvents](#fetchallwebhookevents)
* [queryWebhookEventDetails](#querywebhookeventdetails)



## Methods with example and description




### fetchAllWebhookEvents
Get All Webhook Events



```javascript
// Promise
const promise = publicClient.webhook.fetchAllWebhookEvents();

// Async/Await
const data = await publicClient.webhook.fetchAllWebhookEvents();
```






Get All Webhook Events

*Returned Response:*




[EventConfigResponse](#EventConfigResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### queryWebhookEventDetails
Send webhook event name, type, version, category in request body to get complete details of event from server



```javascript
// Promise
const promise = publicClient.webhook.queryWebhookEventDetails({  body : value });

// Async/Await
const data = await publicClient.webhook.queryWebhookEventDetails({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [Array<EventConfigBase>](#Array<EventConfigBase>) | yes | Request body |


Get Webhook Event Details for provided events

*Returned Response:*




[EventConfigResponse](#EventConfigResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---



### Schemas


#### [Association](#Association)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application_id | [string] |  no  |  |
 | company_id | number |  no  |  |
 | criteria | string |  no  |  |
 | extension_id | string |  no  |  |
 

---

#### [AuthMeta](#AuthMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | secret | string |  no  |  |
 | type | string |  no  |  |
 

---

#### [EventConfig](#EventConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | created_on | string |  no  |  |
 | description | string |  no  |  |
 | display_name | string |  no  |  |
 | event_category | string |  no  |  |
 | event_name | string |  no  |  |
 | event_type | string |  no  |  |
 | id | number |  no  |  |
 | version | string |  no  |  |
 

---

#### [EventConfigBase](#EventConfigBase)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | event_category | string |  no  |  |
 | event_name | string |  no  |  |
 | event_type | string |  no  |  |
 | version | string |  no  |  |
 

---

#### [EventConfigList](#EventConfigList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[EventConfig](#EventConfig)] |  no  |  |
 | page | [Page](#Page) |  no  |  |
 

---

#### [EventConfigResponse](#EventConfigResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | event_configs | [[EventConfig](#EventConfig)] |  no  |  |
 

---

#### [EventPayload](#EventPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | event_name | string |  no  |  |
 | event_trace_id | string |  no  |  |
 | event_type | string |  no  |  |
 | id | number |  no  |  |
 | message_id | string |  no  |  |
 | status | boolean |  no  |  |
 | version | string |  no  |  |
 

---

#### [EventProcessedStatus](#EventProcessedStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | attempt | number |  no  |  |
 | created_on | string |  no  |  |
 | id | number |  no  |  |
 | processed_on | string |  no  |  |
 | response_code | string |  no  |  |
 | response_message | string |  no  |  |
 | status | boolean |  no  |  |
 | subscriber_id | string |  no  |  |
 

---

#### [Page](#Page)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number |  no  |  |
 | has_next | boolean |  no  |  |
 | has_previous | boolean |  no  |  |
 | item_total | number |  no  |  |
 | next_id | string |  no  |  |
 | size | number |  no  |  |
 | type | string |  yes  |  |
 

---

#### [SubscriberConfig](#SubscriberConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | association | [Association](#Association) |  no  |  |
 | auth_meta | [AuthMeta](#AuthMeta) |  no  |  |
 | custom_headers | string |  no  |  |
 | email_id | string |  no  |  |
 | event_id | [number] |  no  |  |
 | id | number |  no  |  |
 | name | string |  no  |  |
 | status | [SubscriberStatus](#SubscriberStatus) |  no  |  |
 | webhook_url | string |  no  |  |
 

---

#### [SubscriberConfigList](#SubscriberConfigList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[SubscriberResponse](#SubscriberResponse)] |  no  |  |
 | page | [Page](#Page) |  no  |  |
 

---

#### [SubscriberEvent](#SubscriberEvent)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | created_date | string |  no  |  |
 | event_id | number |  no  |  |
 | id | number |  no  |  |
 | subscriber_id | number |  no  |  |
 

---

#### [SubscriberResponse](#SubscriberResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | association | [Association](#Association) |  no  |  |
 | auth_meta | [AuthMeta](#AuthMeta) |  no  |  |
 | created_on | string |  no  |  |
 | custom_headers | string |  no  |  |
 | email_id | string |  no  |  |
 | event_configs | [[EventConfig](#EventConfig)] |  no  |  |
 | id | number |  no  |  |
 | name | string |  no  |  |
 | status | [SubscriberStatus](#SubscriberStatus) |  no  |  |
 | updated_on | string |  no  |  |
 | webhook_url | string |  no  |  |
 

---




### Enums





 #### [SubscriberStatus](#SubscriberStatus)
 Type : string

 | Name | Value | Description |
 | ---- | ----- | ----------- |
 | active | active | Status is active |
 | inactive | inactive | Status is inactive |
 | blocked | blocked | Subscriber is blocked by system due to multiple failed delivery attempts. |

---






