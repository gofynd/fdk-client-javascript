



##### [Back to Application docs](./README.md)

## Rewards Methods
Earn and redeem reward points
* [getOfferByName](#getofferbyname)
* [catalogueOrder](#catalogueorder)
* [getPointsHistory](#getpointshistory)
* [getPoints](#getpoints)
* [referral](#referral)
* [orderDiscount](#orderdiscount)
* [redeemReferralCode](#redeemreferralcode)



## Methods with example and description


### getOfferByName
Get offer by name



```javascript
// Promise
const promise = rewards.getOfferByName({  name : value });

// Async/Await
const data = await rewards.getOfferByName({  name : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| name | string | yes | The name given to the offer. |  



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


### catalogueOrder
Get all transactions of reward points



```javascript
// Promise
const promise = rewards.catalogueOrder({  body : value });

// Async/Await
const data = await rewards.catalogueOrder({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CatalogueOrderRequest](#CatalogueOrderRequest) | yes | Request body |


Use this API to evaluate the amount of reward points that could be earned on any catalogue product.

*Returned Response:*




[CatalogueOrderResponse](#CatalogueOrderResponse)

Success. Check example below or refer `CatalogueOrderResponse` for more details.




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
const promise = rewards.getPointsHistory({  pageId : value,
 pageSize : value });

// Async/Await
const data = await rewards.getPointsHistory({  pageId : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageId | string | no | PageID is the ID of the requested page. For first request it should be kept empty. |    
| pageSize | number | no | The number of items to retrieve in each page. |  



Use this API to get a list of points transactions.

*Returned Response:*




[PointsHistoryResponse](#PointsHistoryResponse)

Success. Check example below or refer `PointsHistoryResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getPoints
Get referral details of a user



```javascript
// Promise
const promise = rewards.getPoints();

// Async/Await
const data = await rewards.getPoints();
```






Use this API to retrieve total available points of a user for current application

*Returned Response:*




[PointsResponse](#PointsResponse)

Success. Check example below or refer `PointsResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### referral
Get referral details of a user



```javascript
// Promise
const promise = rewards.referral();

// Async/Await
const data = await rewards.referral();
```






Use this API to retrieve the referral details a user has configured in the application.

*Returned Response:*




[ReferralDetailsResponse](#ReferralDetailsResponse)

Success. Check example below or refer `ReferralDetailsResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### orderDiscount
Calculates the discount on order-amount



```javascript
// Promise
const promise = rewards.orderDiscount({  body : value });

// Async/Await
const data = await rewards.orderDiscount({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [OrderDiscountRequest](#OrderDiscountRequest) | yes | Request body |


Use this API to calculate the discount on order-amount based on all the amount range configured in order_discount.

*Returned Response:*




[OrderDiscountResponse](#OrderDiscountResponse)

Success. Check example below or refer `OrderDiscountResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### redeemReferralCode
Redeems a referral code and credits reward points to users



```javascript
// Promise
const promise = rewards.redeemReferralCode({  body : value });

// Async/Await
const data = await rewards.redeemReferralCode({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [RedeemReferralCodeRequest](#RedeemReferralCodeRequest) | yes | Request body |


Use this API to enter a referral code following which, the configured points would be credited to a user's reward points account.

*Returned Response:*




[RedeemReferralCodeResponse](#RedeemReferralCodeResponse)

Success. Check example below or refer `RedeemReferralCodeResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---



### Schemas

 
 
 #### [RewardsArticle](#RewardsArticle)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | points | number |  no  |  |
 | price | number |  no  |  |

---


 
 
 #### [CatalogueOrderResponse](#CatalogueOrderResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | articles | [[RewardsArticle](#RewardsArticle)] |  no  |  |

---


 
 
 #### [CatalogueOrderRequest](#CatalogueOrderRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | articles | [[RewardsArticle](#RewardsArticle)] |  no  |  |

---


 
 
 #### [PointsResponse](#PointsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | points | number |  no  | Total points available |

---


 
 
 #### [ReferralDetailsUser](#ReferralDetailsUser)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | blocked | boolean |  no  |  |
 | points | number |  no  |  |
 | redeemed | boolean |  no  |  |
 | referral_code | string |  no  |  |

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


 
 
 #### [Schedule](#Schedule)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | duration | number |  no  |  |
 | end | string |  no  |  |
 | start | string |  no  |  |
 | cron | string |  no  |  |

---


 
 
 #### [Error](#Error)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | number |  no  |  |
 | exception | string |  no  |  |
 | info | string |  no  |  |
 | message | string |  no  |  |

---


 
 
 #### [Asset](#Asset)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | aspect_ratio | string |  no  |  |
 | id | string |  no  |  |
 | secure_url | string |  no  |  |

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


 
 
 #### [ReferralDetailsResponse](#ReferralDetailsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | referral | [Offer](#Offer) |  no  |  |
 | share | [ShareMessages](#ShareMessages) |  no  |  |
 | user | [ReferralDetailsUser](#ReferralDetailsUser) |  no  |  |
 | referrer_info | string |  no  |  |

---


 
 
 #### [OrderDiscountRequest](#OrderDiscountRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | order_amount | number |  yes  |  |
 | currency | string |  no  |  |

---


 
 
 #### [OrderDiscountRuleBucket](#OrderDiscountRuleBucket)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | high | number |  no  |  |
 | low | number |  no  |  |
 | max | number |  no  |  |
 | value | number |  no  |  |
 | value_type | string |  no  |  |

---


 
 
 #### [DiscountProperties](#DiscountProperties)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | absolute | number |  no  |  |
 | currency | string |  no  |  |
 | display_absolute | string |  no  |  |
 | display_percent | string |  no  |  |
 | percent | number |  no  |  |

---


 
 
 #### [OrderDiscountResponse](#OrderDiscountResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | order_amount | number |  no  |  |
 | points | number |  no  |  |
 | discount | [DiscountProperties](#DiscountProperties) |  no  |  |
 | base_discount | [DiscountProperties](#DiscountProperties) |  no  |  |
 | applied_rule_bucket | [OrderDiscountRuleBucket](#OrderDiscountRuleBucket) |  no  |  |

---


 
 
 #### [RedeemReferralCodeRequest](#RedeemReferralCodeRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | device_id | string |  no  |  |
 | referral_code | string |  no  |  |

---


 
 
 #### [RedeemReferralCodeResponse](#RedeemReferralCodeResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | redeemed | boolean |  no  |  |
 | message | string |  no  |  |
 | referrer_info | string |  no  |  |
 | referrer_id | string |  no  |  |
 | points | number |  no  |  |

---


 
 
 #### [PointsHistoryResponse](#PointsHistoryResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[PointsHistory](#PointsHistory)] |  no  | History is the list of points transaction. |
 | page | [Page](#Page) |  no  |  |

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


 
 
 #### [Page](#Page)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number |  no  |  |
 | has_next | boolean |  no  |  |
 | has_previous | boolean |  no  |  |
 | item_total | number |  no  |  |
 | next_id | string |  no  |  |
 | size | number |  no  |  |
 | type | string |  no  |  |

---




