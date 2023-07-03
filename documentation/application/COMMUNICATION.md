




##### [Back to Application docs](./README.md)

## Communication Methods
Manages email, sms, push notifications sent to users

* [getCommunicationConsent](#getcommunicationconsent)
* [upsertAppPushtoken](#upsertapppushtoken)
* [upsertCommunicationConsent](#upsertcommunicationconsent)



## Methods with example and description




### getCommunicationConsent
Get communication consent



```javascript
// Promise
const promise = applicationClient.communication.getCommunicationConsent();

// Async/Await
const data = await applicationClient.communication.getCommunicationConsent();
```






Use this API to retrieve the consent provided by the user for receiving communication messages over Email/SMS/WhatsApp.

*Returned Response:*




[CommunicationConsent](#CommunicationConsent)

Success. Returns all available communication opt-ins along with the consent details. Check the example shown below or refer `CommunicationConsent` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "app_id": "000000000000000000000004",
    "user_id": "5e56021c4bda3ccab6d9f884",
    "channels": {
      "email": {
        "response": "yes",
        "display_name": "Email"
      },
      "sms": {
        "response": "yes",
        "display_name": "SMS"
      },
      "whatsapp": {
        "response": "yes",
        "display_name": "WhatsApp",
        "country_code": "91",
        "phone_number": "9869821300"
      }
    }
  }
}
```
</details>

</details>









---


### upsertAppPushtoken
Upsert push token of a user



```javascript
// Promise
const promise = applicationClient.communication.upsertAppPushtoken({  body : value });

// Async/Await
const data = await applicationClient.communication.upsertAppPushtoken({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [PushtokenReq](#PushtokenReq) | yes | Request body |


Use this API to update and insert the push token of the user.

*Returned Response:*




[PushtokenRes](#PushtokenRes)

Success. Check the example shown below or refer `PushtokenRes` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; create</i></summary>

```json
{
  "value": {
    "_id": "601b6924d8ea9a061570a09f",
    "bundle_identifier": "000002",
    "push_token": "45",
    "unique_device_id": "3",
    "type": "fynd-platform",
    "platform": "web",
    "application_id": "000000000000000000000004",
    "user_id": "5e56021c4bda3ccab6d9f884",
    "created_at": "2021-02-04T03:25:24.765Z",
    "updated_at": "2021-02-04T03:25:51.152Z"
  }
}
```
</details>

<details>
<summary><i>&nbsp; update</i></summary>

```json
{
  "value": {
    "_id": "601b6924d8ea9a061570a09f",
    "bundle_identifier": "000002",
    "push_token": "45",
    "unique_device_id": "3",
    "type": "fynd-platform",
    "platform": "web",
    "application_id": "000000000000000000000004",
    "user_id": "5e56021c4bda3ccab6d9f884",
    "created_at": "2021-02-04T03:25:24.765Z",
    "updated_at": "2021-02-04T03:25:51.152Z"
  }
}
```
</details>

<details>
<summary><i>&nbsp; reset</i></summary>

```json
{
  "value": {
    "_id": "601b6924d8ea9a061570a09f",
    "bundle_identifier": "000002",
    "push_token": "45",
    "unique_device_id": "3",
    "type": "fynd-platform",
    "platform": "web",
    "application_id": "000000000000000000000004",
    "user_id": "5e56021c4bda3ccab6d9f884",
    "created_at": "2021-02-04T03:25:24.765Z",
    "updated_at": "2021-02-04T03:25:51.152Z",
    "expired_at": "2021-02-05T03:25:51.138Z"
  }
}
```
</details>

</details>









---


### upsertCommunicationConsent
Upsert communication consent



```javascript
// Promise
const promise = applicationClient.communication.upsertCommunicationConsent({  body : value });

// Async/Await
const data = await applicationClient.communication.upsertCommunicationConsent({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CommunicationConsentReq](#CommunicationConsentReq) | yes | Request body |


Use this API to update and insert the consent provided by the user for receiving communication messages over Email/SMS/WhatsApp.

*Returned Response:*




[CommunicationConsentRes](#CommunicationConsentRes)

Success. Updates the channels for which user has consented. Check the example shown below or refer `CommunicationConsentRes` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "appId": "000000000000000000000004",
    "userId": "5e56021c4bda3ccab6d9f884",
    "channels": {
      "email": {
        "response": "yes",
        "displayName": "Email"
      },
      "sms": {
        "response": "yes",
        "displayName": "SMS"
      },
      "whatsapp": {
        "response": "noaction",
        "displayName": "WhatsApp"
      }
    }
  }
}
```
</details>

</details>









---



### Schemas


#### [ApikeyValidatorError](#ApikeyValidatorError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | [ApikeyValidatorErrorMessage](#ApikeyValidatorErrorMessage)? |  yes  |  |
 | sentry | string? |  yes  |  |
 

---

#### [ApikeyValidatorErrorMessage](#ApikeyValidatorErrorMessage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | api_key | [ValidatorErrorBody](#ValidatorErrorBody)? |  yes  |  |
 

---

#### [BadRequestSchema](#BadRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  | Failure message. |
 | status | string? |  yes  | Response status. |
 

---

#### [CastToStringFail](#CastToStringFail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 | sentry | string? |  yes  |  |
 

---

#### [CommunicationConsent](#CommunicationConsent)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | app_id | string? |  yes  |  |
 | channels | [CommunicationConsentChannels](#CommunicationConsentChannels)? |  yes  |  |
 | user_id | string? |  yes  |  |
 

---

#### [CommunicationConsentChannels](#CommunicationConsentChannels)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | [CommunicationConsentChannelsEmail](#CommunicationConsentChannelsEmail)? |  yes  |  |
 | sms | [CommunicationConsentChannelsSms](#CommunicationConsentChannelsSms)? |  yes  |  |
 | whatsapp | [CommunicationConsentChannelsWhatsapp](#CommunicationConsentChannelsWhatsapp)? |  yes  |  |
 

---

#### [CommunicationConsentChannelsEmail](#CommunicationConsentChannelsEmail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display_name | string? |  yes  |  |
 | response | string? |  yes  |  |
 

---

#### [CommunicationConsentChannelsSms](#CommunicationConsentChannelsSms)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display_name | string? |  yes  |  |
 | response | string? |  yes  |  |
 

---

#### [CommunicationConsentChannelsWhatsapp](#CommunicationConsentChannelsWhatsapp)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country_code | string? |  yes  |  |
 | display_name | string? |  yes  |  |
 | phone_number | string? |  yes  |  |
 | response | string? |  yes  |  |
 

---

#### [CommunicationConsentReq](#CommunicationConsentReq)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action | string? |  yes  |  |
 | channel | string? |  yes  |  |
 | response | string? |  yes  |  |
 

---

#### [CommunicationConsentRes](#CommunicationConsentRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | app_id | string? |  yes  |  |
 | channels | [CommunicationConsentChannels](#CommunicationConsentChannels)? |  yes  |  |
 | user_id | string? |  yes  |  |
 

---

#### [EnabledObj](#EnabledObj)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean? |  yes  |  |
 

---

#### [FeedidValidatorError](#FeedidValidatorError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | [FeedidValidatorErrorMessage](#FeedidValidatorErrorMessage)? |  yes  |  |
 | sentry | string? |  yes  |  |
 

---

#### [FeedidValidatorErrorMessage](#FeedidValidatorErrorMessage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | feedid | [ValidatorErrorBody](#ValidatorErrorBody)? |  yes  |  |
 

---

#### [GenericDelete](#GenericDelete)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | acknowledged | boolean? |  yes  |  |
 | affected | number? |  yes  |  |
 | message | string? |  yes  |  |
 | operation | string? |  yes  |  |
 

---

#### [GenericError](#GenericError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | [Message](#Message)? |  yes  |  |
 | sentry | string? |  yes  |  |
 

---

#### [GenericPage](#GenericPage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number? |  yes  |  |
 | has_next | boolean? |  yes  |  |
 | item_total | number? |  yes  |  |
 | size | number? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [GenericSuccess](#GenericSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean? |  yes  |  |
 

---

#### [InvalidID](#InvalidID)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 | sentry | string? |  yes  |  |
 

---

#### [InvalidInputRequiredByteOrHexError](#InvalidInputRequiredByteOrHexError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 | sentry | string? |  yes  |  |
 

---

#### [InvalidRangeErrorReqPositive](#InvalidRangeErrorReqPositive)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | number? |  yes  |  |
 | message | string? |  yes  |  |
 | sentry | string? |  yes  |  |
 

---

#### [Message](#Message)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | info | string? |  yes  |  |
 | message | string? |  yes  |  |
 | operation | string? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [NameValidatorError](#NameValidatorError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | [NameValidatorErrorMessage](#NameValidatorErrorMessage)? |  yes  |  |
 | sentry | string? |  yes  |  |
 

---

#### [NameValidatorErrorMessage](#NameValidatorErrorMessage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | [ValidatorErrorBody](#ValidatorErrorBody)? |  yes  |  |
 

---

#### [NotFound](#NotFound)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  | Failure message. |
 

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

#### [PasswordValidatorError](#PasswordValidatorError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | [PasswordValidatorErrorMessage](#PasswordValidatorErrorMessage)? |  yes  |  |
 | sentry | string? |  yes  |  |
 

---

#### [PasswordValidatorErrorMessage](#PasswordValidatorErrorMessage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | password | [ValidatorErrorBody](#ValidatorErrorBody)? |  yes  |  |
 

---

#### [PushtokenReq](#PushtokenReq)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action | string? |  yes  |  |
 | bundle_identifier | string? |  yes  |  |
 | push_token | string? |  yes  |  |
 | type | string? |  yes  |  |
 | unique_device_id | string? |  yes  |  |
 

---

#### [PushtokenRes](#PushtokenRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | application_id | string? |  yes  |  |
 | bundle_identifier | string? |  yes  |  |
 | created_at | string? |  yes  |  |
 | expired_at | string? |  yes  |  |
 | platform | string? |  yes  |  |
 | push_token | string? |  yes  |  |
 | type | string? |  yes  |  |
 | unique_device_id | string? |  yes  |  |
 | updated_at | string? |  yes  |  |
 | user_id | string? |  yes  |  |
 

---

#### [UsernameValidatorError](#UsernameValidatorError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | [UsernameValidatorErrorMessage](#UsernameValidatorErrorMessage)? |  yes  |  |
 | sentry | string? |  yes  |  |
 

---

#### [UsernameValidatorErrorMessage](#UsernameValidatorErrorMessage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | username | [ValidatorErrorBody](#ValidatorErrorBody)? |  yes  |  |
 

---

#### [ValidatorErrorBody](#ValidatorErrorBody)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | kind | string? |  yes  |  |
 | message | string? |  yes  |  |
 | name | string? |  yes  |  |
 | path | string? |  yes  |  |
 | properties | [ValidatorErrorMessageProperties](#ValidatorErrorMessageProperties)? |  yes  |  |
 

---

#### [ValidatorErrorMessageProperties](#ValidatorErrorMessageProperties)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 | path | string? |  yes  |  |
 | type | string? |  yes  |  |
 

---




