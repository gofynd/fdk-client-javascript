




##### [Back to Platform docs](./README.md)

## Rewards Methods
Earn and redeem reward points

* [getGiveawayAudienceStatus](#getgiveawayaudiencestatus)
* [getGiveawayById](#getgiveawaybyid)
* [getOfferByName](#getofferbyname)
* [getUserPointsHistory](#getuserpointshistory)
* [saveGiveAway](#savegiveaway)
* [showGiveaways](#showgiveaways)
* [showOffers](#showoffers)
* [updateGiveAway](#updategiveaway)
* [updateOfferByName](#updateofferbyname)
* [updateUserStatus](#updateuserstatus)
* [user](#user)



## Methods with example and description




### getGiveawayAudienceStatus
Get the Giveaway audience status



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").rewards.getGiveawayAudienceStatus({  audienceId : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").rewards.getGiveawayAudienceStatus({  audienceId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| audienceId | string | yes | audience id |  



Get giveaway audience status

*Returned Response:*




[GiveawayAudience](#GiveawayAudience)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getGiveawayById
Get giveaway by ID.



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").rewards.getGiveawayById({  id : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").rewards.getGiveawayById({  id : value });
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


### getOfferByName
Get offer by name



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").rewards.getOfferByName({  name : value,
 cookie : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").rewards.getOfferByName({  name : value,
 cookie : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| name | string | yes | The name given to the offer. |   
| cookie | string | yes | User's session cookie. This cookie is set in browser cookie when logged-in to fynd's authentication system i.e. `Grimlock` or by using grimlock-backend SDK for backend implementation. |  



Use this API to get the offer details and configuration by entering the name of the offer.

*Returned Response:*




[Offer](#Offer)

Success. Check example below or refer `Offer` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getUserPointsHistory
Get all transactions of reward points



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").rewards.getUserPointsHistory({  userId : value,
 pageId : value,
 pageSize : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").rewards.getUserPointsHistory({  userId : value,
 pageId : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| userId | string | yes | user id |    
| pageId | string | no | PageID is the ID of the requested page. For first request it should be kept empty. |    
| pageSize | number | no | The number of items to retrieve in each page. |  



Use this API to get a list of points transactions.

*Returned Response:*




[HistoryRes](#HistoryRes)

Success. Check example below or refer `HistoryRes` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### saveGiveAway
List of giveaways of the current application.



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").rewards.saveGiveAway({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").rewards.saveGiveAway({  body : value });
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


### showGiveaways
List of giveaways of the current application.



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").rewards.showGiveaways({  pageId : value,
 pageSize : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").rewards.showGiveaways({  pageId : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| pageId | string | yes | pagination page id |   
| pageSize | number | yes | pagination page size |  



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


### showOffers
List of offers of the current application.



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").rewards.showOffers();

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").rewards.showOffers();
```






List of offers of the current application.

*Returned Response:*




[Array<Offer>](#Array<Offer>)

ok




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### updateGiveAway
Updates the giveaway by it's ID.



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").rewards.updateGiveAway({  id : value,
 body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").rewards.updateGiveAway({  id : value,
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
Update offer by name



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
| name | string | yes | The name given to the offer. |  
| body | [Offer](#Offer) | yes | Request body |


Use this API to update the offer details

*Returned Response:*




[Offer](#Offer)

Success. Check example below or refer `Offer` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### updateUserStatus
Update user status



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


Use this API to update the user status active/archive

*Returned Response:*




[AppUser](#AppUser)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### user
Get user reward details



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").rewards.user({  userId : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").rewards.user({  userId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| userId | string | yes | user id |  



Use this API to get the user reward details

*Returned Response:*




[UserRes](#UserRes)

Success. Check example below or refer `UserRes` for more details.




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
 | code | number? |  yes  |  |
 | exception | string? |  yes  |  |
 | info | string? |  yes  |  |
 | message | string? |  yes  |  |
 

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

#### [GiveawayAudience](#GiveawayAudience)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | audience_id | string? |  yes  |  |
 | current_count | number? |  yes  |  |
 

---

#### [GiveawayResponse](#GiveawayResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[Giveaway](#Giveaway)]? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 

---

#### [HistoryRes](#HistoryRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[PointsHistory](#PointsHistory)]? |  yes  | History is the list of points transaction. |
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

#### [PointsHistory](#PointsHistory)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | application_id | string? |  yes  |  |
 | claimed | boolean? |  yes  |  |
 | created_at | string? |  yes  |  |
 | expires_on | string? |  yes  |  |
 | meta | string? |  yes  |  |
 | points | number? |  yes  |  |
 | remaining_points | number? |  yes  |  |
 | text_1 | string? |  yes  |  |
 | text_2 | string? |  yes  |  |
 | text_3 | string? |  yes  |  |
 | txn_name | string? |  yes  |  |
 | updated_at | string? |  yes  |  |
 | user_id | string? |  yes  |  |
 

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
 | email | number? |  yes  |  |
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




