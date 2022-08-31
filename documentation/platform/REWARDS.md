



##### [Back to Platform docs](./README.md)

## Rewards Methods
Rewards
* [getGiveaways](#getgiveaways)
* [createGiveaway](#creategiveaway)
* [getGiveawayByID](#getgiveawaybyid)
* [updateGiveaway](#updategiveaway)
* [getOffers](#getoffers)
* [getOfferByName](#getofferbyname)
* [updateOfferByName](#updateofferbyname)
* [getUserAvailablePoints](#getuseravailablepoints)
* [updateUserStatus](#updateuserstatus)
* [getUserPointsHistory](#getuserpointshistory)



## Methods with example and description


### getGiveaways
List of giveaways of the current application.



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").rewards.getGiveaways({  pageId : value,
 pageSize : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").rewards.getGiveaways({  pageId : value,
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


### createGiveaway
Adds a new giveaway.



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").rewards.createGiveaway({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").rewards.createGiveaway({  body : value });
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
const promise = client.application("<APPLICATION_ID>").rewards.getGiveawayByID({  id : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").rewards.getGiveawayByID({  id : value });
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


### updateGiveaway
Updates the giveaway by it's ID.



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").rewards.updateGiveaway({  id : value,
 body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").rewards.updateGiveaway({  id : value,
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


### getOffers
List of offer of the current application.



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").rewards.getOffers();

// Async/Await
const data = await client.application("<APPLICATION_ID>").rewards.getOffers();
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


### getOfferByName
Get offer by name.



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").rewards.getOfferByName({  cookie : value,
 name : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").rewards.getOfferByName({  cookie : value,
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


### updateOfferByName
Updates the offer by name.



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").rewards.updateOfferByName({  name : value,
 body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").rewards.updateOfferByName({  name : value,
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


### getUserAvailablePoints
User's reward details.



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").rewards.getUserAvailablePoints({  userId : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").rewards.getUserAvailablePoints({  userId : value });
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


### updateUserStatus
Update User status



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").rewards.updateUserStatus({  userId : value,
 body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").rewards.updateUserStatus({  userId : value,
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


### getUserPointsHistory
Get list of points transactions.



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").rewards.getUserPointsHistory({  userId : value,
 pageId : value,
 pageLimit : value,
 pageSize : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").rewards.getUserPointsHistory({  userId : value,
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



### Schemas

 
 
 #### [AppUser](#AppUser)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | active | boolean |  no  |  |
 | application_id | string |  no  |  |
 | block_reason | string |  no  |  |
 | updated_at | string |  no  |  |
 | updated_by | string |  no  |  |
 | user_id | string |  no  |  |

---


 
 
 #### [Asset](#Asset)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | aspect_ratio | string |  no  |  |
 | id | string |  no  |  |
 | secure_url | string |  no  |  |

---


 
 
 #### [E](#E)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string |  no  |  |
 | exception | string |  no  |  |
 | info | string |  no  |  |
 | message | string |  no  |  |
 | request_id | string |  no  |  |
 | stack_trace | string |  no  |  |
 | status | number |  no  |  |

---


 
 
 #### [Giveaway](#Giveaway)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | _schedule | [Schedule](#Schedule) |  no  |  |
 | active | boolean |  no  |  |
 | application_id | string |  no  |  |
 | audience | [RewardsAudience](#RewardsAudience) |  no  |  |
 | banner_image | [Asset](#Asset) |  no  |  |
 | created_at | string |  no  |  |
 | description | string |  no  |  |
 | name | string |  no  |  |
 | rule | [RewardsRule](#RewardsRule) |  no  |  |
 | title | string |  no  |  |
 | updated_at | string |  no  |  |

---


 
 
 #### [GiveawayResponse](#GiveawayResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[Giveaway](#Giveaway)] |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [HistoryPretty](#HistoryPretty)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | application_id | string |  no  |  |
 | claimed | boolean |  no  |  |
 | created_at | string |  no  |  |
 | expires_on | string |  no  |  |
 | points | number |  no  |  |
 | remaining_points | number |  no  |  |
 | text_1 | string |  no  |  |
 | text_2 | string |  no  |  |
 | text_3 | string |  no  |  |
 | txn_name | string |  no  |  |
 | updated_at | string |  no  |  |
 | user_id | string |  no  |  |

---


 
 
 #### [HistoryRes](#HistoryRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[HistoryPretty](#HistoryPretty)] |  no  |  |
 | page | [Page](#Page) |  no  |  |
 | points | number |  no  |  |

---


 
 
 #### [Offer](#Offer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _schedule | [Schedule](#Schedule) |  no  |  |
 | active | boolean |  no  |  |
 | application_id | string |  no  |  |
 | banner_image | [Asset](#Asset) |  no  |  |
 | created_at | string |  no  |  |
 | name | string |  no  |  |
 | rule | string |  no  |  |
 | share | [ShareMessages](#ShareMessages) |  no  |  |
 | sub_text | string |  no  |  |
 | text | string |  no  |  |
 | type | string |  no  |  |
 | updated_at | string |  no  |  |
 | updated_by | string |  no  |  |
 | url | string |  no  |  |

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


 
 
 #### [Points](#Points)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | available | number |  no  |  |

---


 
 
 #### [Referral](#Referral)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string |  no  |  |

---


 
 
 #### [RewardUser](#RewardUser)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | active | boolean |  no  |  |
 | created_at | string |  no  |  |
 | referral | [Referral](#Referral) |  no  |  |
 | uid | number |  no  |  |
 | updated_at | string |  no  |  |
 | user_block_reason | string |  no  |  |
 | user_id | string |  no  |  |

---


 
 
 #### [RewardsAudience](#RewardsAudience)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | header_user_id | string |  no  |  |
 | id | string |  no  |  |

---


 
 
 #### [RewardsRule](#RewardsRule)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | number |  no  |  |

---


 
 
 #### [Schedule](#Schedule)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cron | string |  no  |  |
 | duration | number |  no  |  |
 | end | string |  no  |  |
 | start | string |  no  |  |

---


 
 
 #### [ShareMessages](#ShareMessages)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | string |  no  |  |
 | facebook | string |  no  |  |
 | fallback | string |  no  |  |
 | message | string |  no  |  |
 | messenger | string |  no  |  |
 | sms | string |  no  |  |
 | text | string |  no  |  |
 | twitter | string |  no  |  |
 | whatsapp | string |  no  |  |

---


 
 
 #### [UserRes](#UserRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | points | [Points](#Points) |  no  |  |
 | user | [RewardUser](#RewardUser) |  no  |  |

---




