




##### [Back to Platform docs](./README.md)

## Webhook Methods
Webhook dispatcher with retry and one event to many subscriber vice versa

* [fetchAllEventConfigurations](#fetchalleventconfigurations)
* [getSubscriberById](#getsubscriberbyid)
* [getSubscribersByCompany](#getsubscribersbycompany)
* [getSubscribersByExtensionId](#getsubscribersbyextensionid)
* [registerSubscriberToEvent](#registersubscribertoevent)
* [updateSubscriberConfig](#updatesubscriberconfig)



## Methods with example and description




### fetchAllEventConfigurations




```javascript
// Promise
const promise = platformClient.webhook.fetchAllEventConfigurations();

// Async/Await
const data = await platformClient.webhook.fetchAllEventConfigurations();
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


### getSubscriberById
Get Subscriber By Subscriber ID



```javascript
// Promise
const promise = platformClient.webhook.getSubscriberById({  subscriberId : value });

// Async/Await
const data = await platformClient.webhook.getSubscriberById({  subscriberId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| subscriberId | number | yes | Subscriber ID |  



Get Subscriber By Subscriber ID

*Returned Response:*




[SubscriberResponse](#SubscriberResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getSubscribersByCompany
Get Subscribers By Company ID



```javascript
// Promise
const promise = platformClient.webhook.getSubscribersByCompany({  pageNo : value,
 pageSize : value,
 extensionId : value });

// Async/Await
const data = await platformClient.webhook.getSubscribersByCompany({  pageNo : value,
 pageSize : value,
 extensionId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNo | number | no | Page Number |    
| pageSize | number | no | Page Size |    
| extensionId | string | no | Extension ID |  



Get Subscribers By CompanyId

*Returned Response:*




[SubscriberResponse](#SubscriberResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getSubscribersByExtensionId
Get Subscribers By Extension ID



```javascript
// Promise
const promise = platformClient.webhook.getSubscribersByExtensionId({  extensionId : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await platformClient.webhook.getSubscribersByExtensionId({  extensionId : value,
 pageNo : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNo | number | no | Page Number |    
| pageSize | number | no | Page Size |   
| extensionId | string | yes | Extension ID |  



Get Subscribers By ExtensionID

*Returned Response:*




[SubscriberConfigList](#SubscriberConfigList)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### registerSubscriberToEvent
Register Subscriber



```javascript
// Promise
const promise = platformClient.webhook.registerSubscriberToEvent({  body : value });

// Async/Await
const data = await platformClient.webhook.registerSubscriberToEvent({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [SubscriberConfig](#SubscriberConfig) | yes | Request body |


Register Subscriber

*Returned Response:*




[SubscriberConfig](#SubscriberConfig)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### updateSubscriberConfig
Update Subscriber



```javascript
// Promise
const promise = platformClient.webhook.updateSubscriberConfig({  body : value });

// Async/Await
const data = await platformClient.webhook.updateSubscriberConfig({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [SubscriberConfig](#SubscriberConfig) | yes | Request body |


Update Subscriber

*Returned Response:*




[SubscriberConfig](#SubscriberConfig)

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
 | application_id | [string]? |  yes  |  |
 | company_id | number? |  yes  |  |
 | criteria | string? |  yes  |  |
 | extension_id | string? |  yes  |  |
 

---

#### [AuthMeta](#AuthMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | secret | string? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [EventConfig](#EventConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | created_on | string? |  yes  |  |
 | description | string? |  yes  |  |
 | display_name | string? |  yes  |  |
 | event_category | string? |  yes  |  |
 | event_name | string? |  yes  |  |
 | event_type | string? |  yes  |  |
 | id | number? |  yes  |  |
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

#### [EventConfigList](#EventConfigList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[EventConfig](#EventConfig)]? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 

---

#### [EventConfigResponse](#EventConfigResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | event_configs | [[EventConfig](#EventConfig)]? |  yes  |  |
 

---

#### [EventPayload](#EventPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | event_name | string? |  yes  |  |
 | event_trace_id | string? |  yes  |  |
 | event_type | string? |  yes  |  |
 | id | number? |  yes  |  |
 | message_id | string? |  yes  |  |
 | status | boolean? |  yes  |  |
 | version | string? |  yes  |  |
 

---

#### [EventProcessedStatus](#EventProcessedStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | attempt | number? |  yes  |  |
 | created_on | string? |  yes  |  |
 | id | number? |  yes  |  |
 | processed_on | string? |  yes  |  |
 | response_code | string? |  yes  |  |
 | response_message | string? |  yes  |  |
 | status | boolean? |  yes  |  |
 | subscriber_id | string? |  yes  |  |
 

---

#### [Page](#Page)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number? |  yes  |  |
 | has_next | boolean? |  yes  |  |
 | has_previous | boolean? |  yes  |  |
 | item_total | number? |  yes  |  |
 | next_id | string? |  yes  |  |
 | size | number? |  yes  |  |
 | type | string |  no  |  |
 

---

#### [SubscriberConfig](#SubscriberConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | association | [Association](#Association)? |  yes  |  |
 | auth_meta | [AuthMeta](#AuthMeta)? |  yes  |  |
 | custom_headers | string? |  yes  |  |
 | email_id | string? |  yes  |  |
 | event_id | [number]? |  yes  |  |
 | id | number? |  yes  |  |
 | name | string? |  yes  |  |
 | status | [SubscriberStatus](#SubscriberStatus)? |  yes  |  |
 | webhook_url | string? |  yes  |  |
 

---

#### [SubscriberConfigList](#SubscriberConfigList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[SubscriberResponse](#SubscriberResponse)]? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 

---

#### [SubscriberEvent](#SubscriberEvent)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | created_date | string? |  yes  |  |
 | event_id | number? |  yes  |  |
 | id | number? |  yes  |  |
 | subscriber_id | number? |  yes  |  |
 

---

#### [SubscriberResponse](#SubscriberResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | association | [Association](#Association)? |  yes  |  |
 | auth_meta | [AuthMeta](#AuthMeta)? |  yes  |  |
 | created_on | string? |  yes  |  |
 | custom_headers | string? |  yes  |  |
 | email_id | string? |  yes  |  |
 | event_configs | [[EventConfig](#EventConfig)]? |  yes  |  |
 | id | number? |  yes  |  |
 | name | string? |  yes  |  |
 | status | [SubscriberStatus](#SubscriberStatus)? |  yes  |  |
 | updated_on | string? |  yes  |  |
 | webhook_url | string? |  yes  |  |
 

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






