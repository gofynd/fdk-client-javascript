



##### [Back to Platform docs](./README.md)

## Rewards Methods
Earn and redeem reward points
* [showGiveaways](#showgiveaways)
* [saveGiveAway](#savegiveaway)
* [getGiveawayById](#getgiveawaybyid)
* [updateGiveAway](#updategiveaway)
* [getGiveawayAudienceStatus](#getgiveawayaudiencestatus)
* [showOffers](#showoffers)
* [getOfferByName](#getofferbyname)
* [updateOfferByName](#updateofferbyname)
* [updateUserStatus](#updateuserstatus)
* [user](#user)
* [getPointsHistory](#getpointshistory)



## Methods with example and description


### showGiveaways
List of giveaways of the current application.



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").rewards.showGiveaways({  pageId : value,
 pageSize : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").rewards.showGiveaways({  pageId : value,
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


### saveGiveAway
List of giveaways of the current application.



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").rewards.saveGiveAway({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").rewards.saveGiveAway({  body : value });
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


### getGiveawayById
Get giveaway by ID.



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").rewards.getGiveawayById({  id : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").rewards.getGiveawayById({  id : value });
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


### updateGiveAway
Updates the giveaway by it's ID.



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").rewards.updateGiveAway({  id : value,
 body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").rewards.updateGiveAway({  id : value,
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


### getGiveawayAudienceStatus
Get the Giveaway audience status



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").rewards.getGiveawayAudienceStatus({  audienceId : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").rewards.getGiveawayAudienceStatus({  audienceId : value });
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


### showOffers
List of offers of the current application.



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").rewards.showOffers();

// Async/Await
const data = await client.application("<APPLICATION_ID>").rewards.showOffers();
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


### getOfferByName
Get offer by name



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").rewards.getOfferByName({  name : value,
 cookie : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").rewards.getOfferByName({  name : value,
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


### updateOfferByName
Update offer by name



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
const promise = client.application("<APPLICATION_ID>").rewards.user({  userId : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").rewards.user({  userId : value });
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


### getPointsHistory
Get all transactions of reward points



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").rewards.getPointsHistory({  userId : value,
 pageId : value,
 pageSize : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").rewards.getPointsHistory({  userId : value,
 pageId : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageId | string | no | PageID is the ID of the requested page. For first request it should be kept empty. |    
| pageSize | number | no | The number of items to retrieve in each page. |   
| userId | string | yes | user id |  



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



### Schemas

 
 
 #### [E](#E)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | number |  no  |  |
 | exception | string |  no  |  |
 | info | string |  no  |  |
 | message | string |  no  |  |

---


 
 
 #### [GiveawayResponse](#GiveawayResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[Giveaway](#Giveaway)] |  no  |  |
 | page | [Page](#Page) |  no  |  |

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


 
 
 #### [Schedule](#Schedule)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | duration | number |  no  |  |
 | end | string |  no  |  |
 | start | string |  no  |  |
 | cron | string |  no  |  |

---


 
 
 #### [RewardsAudience](#RewardsAudience)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | header_user_id | string |  no  |  |
 | id | string |  no  |  |

---


 
 
 #### [Asset](#Asset)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | aspect_ratio | string |  no  |  |
 | id | string |  no  |  |
 | secure_url | string |  no  |  |

---


 
 
 #### [RewardsRule](#RewardsRule)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | number |  no  |  |

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


 
 
 #### [ShareMessages](#ShareMessages)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | number |  no  |  |
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


 
 
 #### [Points](#Points)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | available | number |  no  |  |

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


 
 
 #### [Referral](#Referral)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string |  no  |  |

---


 
 
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


 
 
 #### [GiveawayAudience](#GiveawayAudience)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | audience_id | string |  no  |  |
 | current_count | number |  no  |  |

---


 
 
 #### [HistoryRes](#HistoryRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[PointsHistory](#PointsHistory)] |  no  | History is the list of points transaction. |
 | page | [Page](#Page) |  no  |  |
 | points | number |  no  |  |

---


 
 
 #### [PointsHistory](#PointsHistory)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | application_id | string |  no  |  |
 | claimed | boolean |  no  |  |
 | created_at | string |  no  |  |
 | expires_on | string |  no  |  |
 | meta | string |  no  |  |
 | points | number |  no  |  |
 | remaining_points | number |  no  |  |
 | text_1 | string |  no  |  |
 | text_2 | string |  no  |  |
 | text_3 | string |  no  |  |
 | txn_name | string |  no  |  |
 | updated_at | string |  no  |  |
 | user_id | string |  no  |  |

---




