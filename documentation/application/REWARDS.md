




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
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Success</i></summary>

```json
{
  "value": {
    "articles": [
      {
        "id": "qwer",
        "price": 2356,
        "points": 1000
      }
    ]
  }
}
```
</details>

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



Use this API to get fetch the specific offer details and configuration by the name of the offer.

*Returned Response:*




[Offer](#Offer)

Success. Check example below or refer `Offer` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Success</i></summary>

```json
{
  "value": {
    "_id": "63bfb9c1195d62ac089641cd",
    "application_id": "5d5c304a4df829372e2ad6d1",
    "name": "order",
    "_schedule": {},
    "active": true,
    "banner_image": {
      "aspect_ratio": "2:1",
      "secure_url": "https://hdn-1.fynd.com/company/884/applications/000000000000000000000001/rewards/pictures/landscape-banner/original/dbY4bHh9d-reward-banner.png"
    },
    "created_at": "2023-01-12T07:41:53.356Z",
    "display": {
      "validity": 1000,
      "validity_unit": "hours"
    },
    "info_action": {
      "type": "",
      "page": {
        "type": "",
        "params": {
          "slug": null
        },
        "url": ""
      }
    },
    "rule": {
      "claimed": true,
      "value": 10,
      "value_type": "percent",
      "validity": 60000
    },
    "share": {
      "default": "Hey, join me on {{application_name}} and get exciting offers and reward points. Signup today and quickly earn Rs.{{offer_amount}}. Visit {{offer_link}} now!",
      "text": ""
    },
    "sub_text": "Purchase and get reward points",
    "text": "Order & Earn",
    "type": "earn",
    "updated_at": "2023-01-12T15:46:04.854Z",
    "updated_by": "6678589f5d0df704c9996644",
    "url": ""
  }
}
```
</details>

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


Use this API to calculate the discount on the order amount, based on all the amount range configured in Order Discount offer.

*Returned Response:*




[OrderDiscountResponse](#OrderDiscountResponse)

Success. Check example below or refer `OrderDiscountResponse` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Success</i></summary>

```json
{
  "value": {
    "order_amount": 3000,
    "discount": {
      "absolute": 0,
      "currency": "INR",
      "percent": 0,
      "display_absoulte": "0.00",
      "display_percent": 0
    },
    "base_discount": {
      "absolute": 0,
      "currency": "INR",
      "percent": 0,
      "display_absoulte": "0.00",
      "display_percent": 0
    },
    "points": 0,
    "applied_rule_bucket": {
      "low": 1,
      "high": -1,
      "max": 1000,
      "value": 10,
      "value_type": "percent"
    }
  }
}
```
</details>

</details>









---


### getUserPoints
Get total available points of a user



```javascript
// Promise
const promise = applicationClient.rewards.getUserPoints();

// Async/Await
const data = await applicationClient.rewards.getUserPoints();
```






Use this API to retrieve total available points of a user for current application.

*Returned Response:*




[PointsResponse](#PointsResponse)

Success. Check example below or refer `PointsResponse` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Success</i></summary>

```json
{
  "value": {
    "points": 100
  }
}
```
</details>

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



Use this API to fetch a list of points transactions like giveaway points, signup points, referral points, order earn points, redeem points and expired points.

*Returned Response:*




[PointsHistoryResponse](#PointsHistoryResponse)

Success. Check example below or refer `PointsHistoryResponse` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Success</i></summary>

```json
{
  "value": {
    "items": [
      {
        "_id": "6464a9eb70e0debb8462667d",
        "application_id": "000000000000000000000001",
        "user_id": "000000000000000009802478",
        "points": 500,
        "remaining_points": 500,
        "txn_name": "signup_credit",
        "claimed": true,
        "expires_on": "2023-06-14T10:18:19.118Z",
        "meta": {
          "offer_id": "630e0b8e349f3f1cfbec572f"
        },
        "created_at": "2023-05-17T10:18:19.118Z",
        "updated_at": "2023-05-17T10:18:19.118Z",
        "text_1": "Signup points",
        "text_2": "Additional Points",
        "text_3": "Will expire on 3:48 PM, 14 Jun'23"
      },
      {
        "_id": "6464a9d370e0debb84626677",
        "application_id": "000000000000000000000001",
        "user_id": "000000000000000009802478",
        "points": 500,
        "remaining_points": 500,
        "txn_name": "signup_credit",
        "claimed": true,
        "expires_on": "2023-06-14T10:17:55.588Z",
        "meta": {
          "offer_id": "630e0b8e349f3f1cfbec572f"
        },
        "created_at": "2023-05-17T10:17:55.588Z",
        "updated_at": "2023-05-17T10:17:55.588Z",
        "text_1": "Signup points",
        "text_2": "Additional Points",
        "text_3": "Will expire on 3:47 PM, 14 Jun'23"
      }
    ],
    "page": {
      "current": 0,
      "item_total": 2,
      "type": "cursor",
      "size": 1,
      "has_previous": true,
      "has_next": false,
      "next_id": ""
    }
  }
}
```
</details>

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






Use this API to retrieve the referral details like referral code of a user.

*Returned Response:*




[ReferralDetailsResponse](#ReferralDetailsResponse)

Success. Check example below or refer `ReferralDetailsResponse` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Success</i></summary>

```json
{
  "value": {
    "referral": {
      "_id": "6325b07224c4f10f7ca2ef0b",
      "application_id": "000000000000000000000001",
      "name": "referral",
      "_schedule": {
        "start": "2020-01-27T20:07:27.418Z",
        "end": "2030-01-27T18:30:00.000Z"
      },
      "active": true,
      "banner_image": {
        "secure_url": "https://hdn-1.fynd.com/company/884/applications/000000000000000000000001/rewards/pictures/landscape-banner/original/05ZGi_YkI-reward-banner.png",
        "aspect_ratio": "2:1"
      },
      "created_at": "2022-09-17T11:33:06.862Z",
      "display": {
        "validity": 4,
        "validity_unit": "weeks"
      },
      "info_action": {
        "type": "",
        "page": {
          "type": "",
          "params": {
            "slug": null
          },
          "url": ""
        }
      },
      "rule": {
        "amount": 100,
        "referrer_amount": 200,
        "amount_validity": 40320,
        "threshold": 10000,
        "counter": 0
      },
      "share": {
        "default": "",
        "text": "👋 Hey there!\n\nI just gave you 100 points.\n\nShop from brands like Campus Sutra, Snitch, Freakins, Off Duty, and other streetwear and athleisure brands\n\n10 GoFynd points = ₹1 off on your next order.\n\nLet me break it down for you: Every 10 GoFynd Points you have will get you a ₹1 discount on your transaction. So, for example, if you have 1000 GoFynd Points, you can enjoy a fabulous ₹100 off during checkout.\n\nJoin me on GoFynd and signup using my code E4WZC5\n\nVisit Now: https://www.fynd.com/l/E4WZC5"
      },
      "sub_text": "When your friends sign up using your referral code.\n\nYou get ₹200 and They get ₹100",
      "text": "Refer & Earn",
      "type": "earn",
      "updated_at": "2023-05-22T13:59:28.295Z",
      "updated_by": "b360c46c3f5c939dadf8f9ab",
      "url": "",
      "updated_by_name": "jaykaria_gofynd_com_39144"
    },
    "share": {
      "default": "",
      "text": "👋 Hey there!\n\nI just gave you 100 points.\n\nShop from brands like Campus Sutra, Snitch, Freakins, Off Duty, and other streetwear and athleisure brands\n\n10 GoFynd points = ₹1 off on your next order.\n\nLet me break it down for you: Every 10 GoFynd Points you have will get you a ₹1 discount on your transaction. So, for example, if you have 1000 GoFynd Points, you can enjoy a fabulous ₹100 off during checkout.\n\nJoin me on GoFynd and signup using my code E4WZC5\n\nVisit Now: https://www.fynd.com/l/E4WZC5"
    },
    "referrer_info": "Code redeemed",
    "user": {
      "blocked": false,
      "referral_code": "E4WZC5",
      "redeemed": true
    },
    "terms_conditions_link": "https://fynd.freshdesk.com/support/solutions/folders/33000111619"
  }
}
```
</details>

</details>









---


### redeemReferralCode
Redeems a referral code and credits reward points to referee and the referrer as per the configuration



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
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Success</i></summary>

```json
{
  "value": {
    "redeemed": true,
    "message": "Successfully redeemed referral code",
    "referrer_info": "Referred by Abhinav Maurya",
    "referrer_id": "600693a01faf8695d70a15df",
    "points": 100
  }
}
```
</details>

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




