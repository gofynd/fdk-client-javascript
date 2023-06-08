




##### [Back to Platform docs](./README.md)

## Rewards Methods
Rewards

* [createGiveaway](#creategiveaway)
* [getGiveawayByID](#getgiveawaybyid)
* [getGiveaways](#getgiveaways)
* [getOfferByName](#getofferbyname)
* [getOffers](#getoffers)
* [getUserAvailablePoints](#getuseravailablepoints)
* [getUserPointsHistory](#getuserpointshistory)
* [updateGiveaway](#updategiveaway)
* [updateOfferByName](#updateofferbyname)
* [updateUserStatus](#updateuserstatus)



## Methods with example and description




### createGiveaway
Adds a new giveaway.



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").rewards.createGiveaway({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").rewards.createGiveaway({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [Giveaway](#Giveaway) | yes | Request body |


Adds a new giveaway.

*Returned Response:*




[Giveaway](#Giveaway)

ok




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getGiveawayByID
Get giveaway by ID.



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").rewards.getGiveawayByID({  id : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").rewards.getGiveawayByID({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | Giveaway ID |  



Get giveaway by ID.

*Returned Response:*




[Giveaway](#Giveaway)

ok




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getGiveaways
List of giveaways of the current application.



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").rewards.getGiveaways({  pageId : value,
 pageSize : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").rewards.getGiveaways({  pageId : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageId | string | no | pagination page id |    
| pageSize | number | no | pagination page size |  



List of giveaways of the current application.

*Returned Response:*




[GiveawayResponse](#GiveawayResponse)

ok




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getOfferByName
Get offer by name.



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").rewards.getOfferByName({  cookie : value,
 name : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").rewards.getOfferByName({  cookie : value,
 name : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| cookie | string | yes | User's session cookie. This cookie is set in browser cookie when logged-in to fynd's authentication system i.e. `Grimlock` or by using grimlock-backend SDK for backend implementation. |   
| name | string | yes | Offer name |  



Get offer by name.

*Returned Response:*




[Offer](#Offer)

ok




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getOffers
List of offer of the current application.



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").rewards.getOffers();

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").rewards.getOffers();
```






List of offer of the current application.

*Returned Response:*




[Array<Offer>](#Array<Offer>)

ok




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getUserAvailablePoints
User's reward details.



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").rewards.getUserAvailablePoints({  userId : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").rewards.getUserAvailablePoints({  userId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| userId | string | yes | user id |  



User's reward details.

*Returned Response:*




[UserRes](#UserRes)

ok




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getUserPointsHistory
Get list of points transactions.



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").rewards.getUserPointsHistory({  userId : value,
 pageId : value,
 pageLimit : value,
 pageSize : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").rewards.getUserPointsHistory({  userId : value,
 pageId : value,
 pageLimit : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| userId | string | yes | user id |    
| pageId | string | no | PageID is the ID of the requested page. For first request it should be kept empty. |    
| pageLimit | number | no | PageLimit is the number of requested items in response. |    
| pageSize | number | no | PageSize is the number of requested items in response. |  



Get list of points transactions.
The list of points history is paginated.

*Returned Response:*




[HistoryRes](#HistoryRes)

ok




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### updateGiveaway
Updates the giveaway by it's ID.



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").rewards.updateGiveaway({  id : value,
 body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").rewards.updateGiveaway({  id : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | Giveaway ID |  
| body | [Giveaway](#Giveaway) | yes | Request body |


Updates the giveaway by it's ID.

*Returned Response:*




[Giveaway](#Giveaway)

ok




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### updateOfferByName
Updates the offer by name.



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").rewards.updateOfferByName({  name : value,
 body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").rewards.updateOfferByName({  name : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| name | string | yes | Offer name |  
| body | [Offer](#Offer) | yes | Request body |


Updates the offer by name.

*Returned Response:*




[Offer](#Offer)

ok




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### updateUserStatus
Update User status



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").rewards.updateUserStatus({  userId : value,
 body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").rewards.updateUserStatus({  userId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| userId | string | yes | user id |  
| body | [AppUser](#AppUser) | yes | Request body |


Update user status, active/archive

*Returned Response:*




[AppUser](#AppUser)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---



### Schemas


#### [AppUser](#AppUser)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | active | boolean? |  yes  |  |
 | application_id | string? |  yes  |  |
 | block_reason | string? |  yes  |  |
 | updated_at | string? |  yes  |  |
 | updated_by | string? |  yes  |  |
 | user_id | string? |  yes  |  |
 

---

#### [Asset](#Asset)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | aspect_ratio | string? |  yes  |  |
 | id | string? |  yes  |  |
 | secure_url | string? |  yes  |  |
 

---

#### [E](#E)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string? |  yes  |  |
 | exception | string? |  yes  |  |
 | info | string? |  yes  |  |
 | message | string? |  yes  |  |
 | request_id | string? |  yes  |  |
 | stack_trace | string? |  yes  |  |
 | status | number? |  yes  |  |
 

---

#### [Giveaway](#Giveaway)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | _schedule | [Schedule](#Schedule)? |  yes  |  |
 | active | boolean? |  yes  |  |
 | application_id | string? |  yes  |  |
 | audience | [RewardsAudience](#RewardsAudience)? |  yes  |  |
 | banner_image | [Asset](#Asset)? |  yes  |  |
 | created_at | string? |  yes  |  |
 | description | string? |  yes  |  |
 | name | string? |  yes  |  |
 | rule | [RewardsRule](#RewardsRule)? |  yes  |  |
 | title | string? |  yes  |  |
 | updated_at | string? |  yes  |  |
 

---

#### [GiveawayResponse](#GiveawayResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[Giveaway](#Giveaway)]? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 

---

#### [HistoryPretty](#HistoryPretty)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | application_id | string? |  yes  |  |
 | claimed | boolean? |  yes  |  |
 | created_at | string? |  yes  |  |
 | expires_on | string? |  yes  |  |
 | points | number? |  yes  |  |
 | remaining_points | number? |  yes  |  |
 | text_1 | string? |  yes  |  |
 | text_2 | string? |  yes  |  |
 | text_3 | string? |  yes  |  |
 | txn_name | string? |  yes  |  |
 | updated_at | string? |  yes  |  |
 | user_id | string? |  yes  |  |
 

---

#### [HistoryRes](#HistoryRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[HistoryPretty](#HistoryPretty)]? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 | points | number? |  yes  |  |
 

---

#### [Offer](#Offer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _schedule | [Schedule](#Schedule)? |  yes  |  |
 | active | boolean? |  yes  |  |
 | application_id | string? |  yes  |  |
 | banner_image | [Asset](#Asset)? |  yes  |  |
 | created_at | string? |  yes  |  |
 | name | string? |  yes  |  |
 | rule | string? |  yes  |  |
 | share | [ShareMessages](#ShareMessages)? |  yes  |  |
 | sub_text | string? |  yes  |  |
 | text | string? |  yes  |  |
 | type | string? |  yes  |  |
 | updated_at | string? |  yes  |  |
 | updated_by | string? |  yes  |  |
 | url | string? |  yes  |  |
 

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

#### [Points](#Points)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | available | number? |  yes  |  |
 

---

#### [Referral](#Referral)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string? |  yes  |  |
 

---

#### [RewardsAudience](#RewardsAudience)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | header_user_id | string? |  yes  |  |
 | id | string? |  yes  |  |
 

---

#### [RewardsRule](#RewardsRule)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | number? |  yes  |  |
 

---

#### [RewardUser](#RewardUser)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | active | boolean? |  yes  |  |
 | created_at | string? |  yes  |  |
 | referral | [Referral](#Referral)? |  yes  |  |
 | uid | number? |  yes  |  |
 | updated_at | string? |  yes  |  |
 | user_block_reason | string? |  yes  |  |
 | user_id | string? |  yes  |  |
 

---

#### [Schedule](#Schedule)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cron | string? |  yes  |  |
 | duration | number? |  yes  |  |
 | end | string? |  yes  |  |
 | start | string? |  yes  |  |
 

---

#### [ShareMessages](#ShareMessages)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | string? |  yes  |  |
 | facebook | string? |  yes  |  |
 | fallback | string? |  yes  |  |
 | message | string? |  yes  |  |
 | messenger | string? |  yes  |  |
 | sms | string? |  yes  |  |
 | text | string? |  yes  |  |
 | twitter | string? |  yes  |  |
 | whatsapp | string? |  yes  |  |
 

---

#### [UserRes](#UserRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | points | [Points](#Points)? |  yes  |  |
 | user | [RewardUser](#RewardUser)? |  yes  |  |
 

---




