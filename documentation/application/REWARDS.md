




##### [Back to Application docs](./README.md)

## Rewards Methods
Earn and redeem reward points

* [catalogueOrder](#catalogueorder)
* [getOfferByName](#getofferbyname)
* [getOrderDiscount](#getorderdiscount)
* [getUserPoints](#getuserpoints)
* [getUserPointsHistory](#getuserpointshistory)
* [getUserReferralDetails](#getuserreferraldetails)
* [redeemReferralCode](#redeemreferralcode)



## Methods with example and description




### catalogueOrder
Get all transactions of reward points



```javascript
// Promise
const promise = applicationClient.rewards.catalogueOrder({  body : value });

// Async/Await
const data = await applicationClient.rewards.catalogueOrder({  body : value });
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


### getOfferByName
Get offer by name



```javascript
// Promise
const promise = applicationClient.rewards.getOfferByName({  name : value });

// Async/Await
const data = await applicationClient.rewards.getOfferByName({  name : value });
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
const promise = applicationClient.rewards.getOrderDiscount({  body : value });

// Async/Await
const data = await applicationClient.rewards.getOrderDiscount({  body : value });
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
Get referral details of a user



```javascript
// Promise
const promise = applicationClient.rewards.getUserPoints();

// Async/Await
const data = await applicationClient.rewards.getUserPoints();
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
const promise = applicationClient.rewards.getUserPointsHistory({  pageId : value,
 pageSize : value });

// Async/Await
const data = await applicationClient.rewards.getUserPointsHistory({  pageId : value,
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


### getUserReferralDetails
Get referral details of a user



```javascript
// Promise
const promise = applicationClient.rewards.getUserReferralDetails();

// Async/Await
const data = await applicationClient.rewards.getUserReferralDetails();
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
const promise = applicationClient.rewards.redeemReferralCode({  body : value });

// Async/Await
const data = await applicationClient.rewards.redeemReferralCode({  body : value });
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


#### [Asset](#Asset)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | aspect_ratio | string? |  yes  |  |
 | id | string? |  yes  |  |
 | secure_url | string? |  yes  |  |
 

---

#### [CatalogueOrderRequest](#CatalogueOrderRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | articles | [[RewardsArticle](#RewardsArticle)]? |  yes  |  |
 

---

#### [CatalogueOrderResponse](#CatalogueOrderResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | articles | [[RewardsArticle](#RewardsArticle)]? |  yes  |  |
 

---

#### [DiscountProperties](#DiscountProperties)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | absolute | number? |  yes  |  |
 | currency | string? |  yes  |  |
 | display_absolute | string? |  yes  |  |
 | display_percent | string? |  yes  |  |
 | percent | number? |  yes  |  |
 

---

#### [Error](#Error)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | number? |  yes  |  |
 | exception | string? |  yes  |  |
 | info | string? |  yes  |  |
 | message | string? |  yes  |  |
 

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

#### [OrderDiscountRequest](#OrderDiscountRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | currency | string? |  yes  |  |
 | order_amount | number |  no  |  |
 

---

#### [OrderDiscountResponse](#OrderDiscountResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | applied_rule_bucket | [OrderDiscountRuleBucket](#OrderDiscountRuleBucket)? |  yes  |  |
 | base_discount | [DiscountProperties](#DiscountProperties)? |  yes  |  |
 | discount | [DiscountProperties](#DiscountProperties)? |  yes  |  |
 | order_amount | number? |  yes  |  |
 | points | number? |  yes  |  |
 

---

#### [OrderDiscountRuleBucket](#OrderDiscountRuleBucket)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | high | number? |  yes  |  |
 | low | number? |  yes  |  |
 | max | number? |  yes  |  |
 | value | number? |  yes  |  |
 | value_type | string? |  yes  |  |
 

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
 | type | string? |  yes  |  |
 

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

#### [PointsHistoryResponse](#PointsHistoryResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[PointsHistory](#PointsHistory)]? |  yes  | History is the list of points transaction. |
 | page | [Page](#Page)? |  yes  |  |
 

---

#### [PointsResponse](#PointsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | points | number? |  yes  | Total points available |
 

---

#### [RedeemReferralCodeRequest](#RedeemReferralCodeRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | device_id | string? |  yes  |  |
 | referral_code | string? |  yes  |  |
 

---

#### [RedeemReferralCodeResponse](#RedeemReferralCodeResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 | points | number? |  yes  |  |
 | redeemed | boolean? |  yes  |  |
 | referrer_id | string? |  yes  |  |
 | referrer_info | string? |  yes  |  |
 

---

#### [ReferralDetailsResponse](#ReferralDetailsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | referral | [Offer](#Offer)? |  yes  |  |
 | referrer_info | string? |  yes  |  |
 | share | [ShareMessages](#ShareMessages)? |  yes  |  |
 | terms_conditions_link | string? |  yes  |  |
 | user | [ReferralDetailsUser](#ReferralDetailsUser)? |  yes  |  |
 

---

#### [ReferralDetailsUser](#ReferralDetailsUser)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | blocked | boolean? |  yes  |  |
 | points | number? |  yes  |  |
 | redeemed | boolean? |  yes  |  |
 | referral_code | string? |  yes  |  |
 

---

#### [RewardsArticle](#RewardsArticle)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string? |  yes  |  |
 | points | number? |  yes  |  |
 | price | number? |  yes  |  |
 

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




