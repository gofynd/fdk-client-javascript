



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
const promise = webhook.fetchAllWebhookEvents();

// Async/Await
const data = await webhook.fetchAllWebhookEvents();
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
const promise = webhook.queryWebhookEventDetails({  body : value });

// Async/Await
const data = await webhook.queryWebhookEventDetails({  body : value });
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






