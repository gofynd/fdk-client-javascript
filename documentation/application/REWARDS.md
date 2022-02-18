



##### [Back to Application docs](./README.md)

## Rewards Methods
Earn and redeem reward points
* [getPointsOnProduct](#getpointsonproduct)
* [getOfferByName](#getofferbyname)
* [getOrderDiscount](#getorderdiscount)
* [getUserPoints](#getuserpoints)
* [getUserPointsHistory](#getuserpointshistory)
* [getUserReferralDetails](#getuserreferraldetails)
* [redeemReferralCode](#redeemreferralcode)



## Methods with example and description


### getPointsOnProduct
Get the eligibility of reward points on a product



```javascript
// Promise
const promise = rewards.getPointsOnProduct({  body : value });

// Async/Await
const data = await rewards.getPointsOnProduct({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CatalogueOrderRequest](#CatalogueOrderRequest) | yes | Request body |


Use this API to evaluate the amount of reward points that could be earned on any catalogue product.

*Returned Response:*




[CatalogueOrderResponse](#CatalogueOrderResponse)

Success. Check example below or refer `CatalogueOrderRequest` for more details.




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


### getOrderDiscount
Calculates the discount on order-amount



```javascript
// Promise
const promise = rewards.getOrderDiscount({  body : value });

// Async/Await
const data = await rewards.getOrderDiscount({  body : value });
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


### getUserPoints
Get reward points available with a user



```javascript
// Promise
const promise = rewards.getUserPoints();

// Async/Await
const data = await rewards.getUserPoints();
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


### getUserPointsHistory
Get all transactions of reward points



```javascript
// Promise
const promise = rewards.getUserPointsHistory({  pageId : value,
 pageSize : value });

// Async/Await
const data = await rewards.getUserPointsHistory({  pageId : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageId | string | no | PageID is the ID of the requested page. For first request it should be kept empty. |    
| pageSize | number | no | The number of items to retrieve in each page. |  



Use this API to get a list of points transactions. The list of points history is paginated.

*Returned Response:*




[PointsHistoryResponse](#PointsHistoryResponse)

Success. Check example below or refer `PointsHistoryResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getUserReferralDetails
Get referral details of a user



```javascript
// Promise
const promise = rewards.getUserReferralDetails();

// Async/Await
const data = await rewards.getUserReferralDetails();
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

 
 
 #### [ActionPageParams](#ActionPageParams)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | slug | [string] |  no  |  |

---


 
 
 #### [Asset](#Asset)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | aspect_ratio | string |  no  |  |
 | id | string |  no  |  |
 | secure_url | string |  no  |  |

---


 
 
 #### [CatalogueOrderRequest](#CatalogueOrderRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | articles | [[RewardsArticle](#RewardsArticle)] |  no  |  |

---


 
 
 #### [CatalogueOrderResponse](#CatalogueOrderResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | articles | [[RewardsArticle](#RewardsArticle)] |  no  |  |

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


 
 
 #### [Error](#Error)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | number |  no  |  |
 | exception | string |  no  |  |
 | info | string |  no  |  |
 | message | string |  no  |  |

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


 
 
 #### [OrderDiscountRequest](#OrderDiscountRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | currency | string |  no  |  |
 | order_amount | number |  yes  |  |

---


 
 
 #### [OrderDiscountResponse](#OrderDiscountResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | applied_rule_bucket | [OrderDiscountRuleBucket](#OrderDiscountRuleBucket) |  no  |  |
 | base_discount | [DiscountProperties](#DiscountProperties) |  no  |  |
 | discount | [DiscountProperties](#DiscountProperties) |  no  |  |
 | order_amount | number |  no  |  |
 | points | number |  no  |  |

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


 
 
 #### [PointsHistoryResponse](#PointsHistoryResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[PointsHistory](#PointsHistory)] |  no  | History is the list of points transaction. |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [PointsResponse](#PointsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | points | number |  no  | Points is the total available |

---


 
 
 #### [RedeemReferralCodeRequest](#RedeemReferralCodeRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | device_id | string |  yes  |  |
 | referral_code | string |  yes  |  |

---


 
 
 #### [RedeemReferralCodeResponse](#RedeemReferralCodeResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 | points | number |  no  |  |
 | redeemed | boolean |  no  |  |
 | referrer_id | string |  no  |  |
 | referrer_info | string |  no  |  |

---


 
 
 #### [ReferralDetailsResponse](#ReferralDetailsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | referral | [Offer](#Offer) |  no  |  |
 | referrer_info | string |  no  |  |
 | share | [ShareMessages](#ShareMessages) |  no  |  |
 | user | [ReferralDetailsUser](#ReferralDetailsUser) |  no  |  |

---


 
 
 #### [ReferralDetailsUser](#ReferralDetailsUser)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | blocked | boolean |  no  |  |
 | points | number |  no  |  |
 | redeemed | boolean |  no  |  |
 | referral_code | string |  no  |  |

---


 
 
 #### [RewardsArticle](#RewardsArticle)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | points | number |  no  |  |
 | price | number |  no  |  |

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




