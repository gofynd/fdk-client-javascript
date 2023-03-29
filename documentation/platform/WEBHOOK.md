



##### [Back to Platform docs](./README.md)

## Webhook Methods
Webhook dispatcher with retry and one event to many subscriber vice versa
* [getSubscribersByCompany](#getsubscribersbycompany)
* [registerSubscriberToEvent](#registersubscribertoevent)
* [updateSubscriberConfig](#updatesubscriberconfig)
* [getSubscribersByExtensionId](#getsubscribersbyextensionid)
* [getSubscriberById](#getsubscriberbyid)
* [fetchAllEventConfigurations](#fetchalleventconfigurations)



## Methods with example and description


### getSubscribersByCompany
Get Subscribers By Company ID



```javascript
// Promise
const promise = client.webhook.getSubscribersByCompany({  pageNo : value,
 pageSize : value,
 extensionId : value });

// Async/Await
const data = await client.webhook.getSubscribersByCompany({  pageNo : value,
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


### registerSubscriberToEvent
Register Subscriber



```javascript
// Promise
const promise = client.webhook.registerSubscriberToEvent({  body : value });

// Async/Await
const data = await client.webhook.registerSubscriberToEvent({  body : value });
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
const promise = client.webhook.updateSubscriberConfig({  body : value });

// Async/Await
const data = await client.webhook.updateSubscriberConfig({  body : value });
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


### getSubscribersByExtensionId
Get Subscribers By Extension ID



```javascript
// Promise
const promise = client.webhook.getSubscribersByExtensionId({  extensionId : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await client.webhook.getSubscribersByExtensionId({  extensionId : value,
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


### getSubscriberById
Get Subscriber By Subscriber ID



```javascript
// Promise
const promise = client.webhook.getSubscriberById({  subscriberId : value });

// Async/Await
const data = await client.webhook.getSubscriberById({  subscriberId : value });
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


### fetchAllEventConfigurations




```javascript
// Promise
const promise = client.webhook.fetchAllEventConfigurations();

// Async/Await
const data = await client.webhook.fetchAllEventConfigurations();
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



### Schemas

 
 
 #### [EventConfig](#EventConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | number |  no  |  |
 | event_name | string |  no  |  |
 | event_type | string |  no  |  |
 | event_category | string |  no  |  |
 | version | string |  no  |  |
 | display_name | string |  no  |  |
 | description | string |  no  |  |
 | created_on | string |  no  |  |

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


 
 
 #### [SubscriberConfigList](#SubscriberConfigList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[SubscriberResponse](#SubscriberResponse)] |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [Page](#Page)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | item_total | number |  no  |  |
 | next_id | string |  no  |  |
 | has_previous | boolean |  no  |  |
 | has_next | boolean |  no  |  |
 | current | number |  no  |  |
 | type | string |  yes  |  |
 | size | number |  no  |  |

---


 
 
 #### [EventProcessedStatus](#EventProcessedStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | number |  no  |  |
 | subscriber_id | string |  no  |  |
 | attempt | number |  no  |  |
 | response_code | string |  no  |  |
 | response_message | string |  no  |  |
 | created_on | string |  no  |  |
 | processed_on | string |  no  |  |
 | status | boolean |  no  |  |

---


 
 
 #### [EventPayload](#EventPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | number |  no  |  |
 | event_trace_id | string |  no  |  |
 | message_id | string |  no  |  |
 | event_name | string |  no  |  |
 | event_type | string |  no  |  |
 | version | string |  no  |  |
 | status | boolean |  no  |  |

---


 
 
 #### [SubscriberConfig](#SubscriberConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | number |  no  |  |
 | name | string |  no  |  |
 | webhook_url | string |  no  |  |
 | association | [Association](#Association) |  no  |  |
 | custom_headers | string |  no  |  |
 | status | [SubscriberStatus](#SubscriberStatus) |  no  |  |
 | email_id | string |  no  |  |
 | auth_meta | [AuthMeta](#AuthMeta) |  no  |  |
 | event_id | [number] |  no  |  |

---


 
 
 #### [SubscriberResponse](#SubscriberResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | number |  no  |  |
 | name | string |  no  |  |
 | webhook_url | string |  no  |  |
 | association | [Association](#Association) |  no  |  |
 | custom_headers | string |  no  |  |
 | email_id | string |  no  |  |
 | status | [SubscriberStatus](#SubscriberStatus) |  no  |  |
 | auth_meta | [AuthMeta](#AuthMeta) |  no  |  |
 | created_on | string |  no  |  |
 | updated_on | string |  no  |  |
 | event_configs | [[EventConfig](#EventConfig)] |  no  |  |

---


 
 
 #### [SubscriberEvent](#SubscriberEvent)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | number |  no  |  |
 | subscriber_id | number |  no  |  |
 | event_id | number |  no  |  |
 | created_date | string |  no  |  |

---


 
 
 #### [AuthMeta](#AuthMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  no  |  |
 | secret | string |  no  |  |

---


 
 
 #### [Association](#Association)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | company_id | number |  no  |  |
 | application_id | [string] |  no  |  |
 | extension_id | string |  no  |  |
 | criteria | string |  no  |  |

---


 
 
 #### [EventConfigBase](#EventConfigBase)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | event_name | string |  no  |  |
 | event_type | string |  no  |  |
 | event_category | string |  no  |  |
 | version | string |  no  |  |

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






