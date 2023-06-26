




##### [Back to Platform docs](./README.md)

## Billing Methods
Handle platform subscription

* [activateSubscriptionPlan](#activatesubscriptionplan)
* [cancelSubscriptionCharge](#cancelsubscriptioncharge)
* [cancelSubscriptionPlan](#cancelsubscriptionplan)
* [checkCouponValidity](#checkcouponvalidity)
* [createOneTimeCharge](#createonetimecharge)
* [createSubscriptionCharge](#createsubscriptioncharge)
* [getChargeDetails](#getchargedetails)
* [getCustomerDetail](#getcustomerdetail)
* [getFeatureLimitConfig](#getfeaturelimitconfig)
* [getInvoiceById](#getinvoicebyid)
* [getInvoices](#getinvoices)
* [getSubscription](#getsubscription)
* [getSubscriptionCharge](#getsubscriptioncharge)
* [upsertCustomerDetail](#upsertcustomerdetail)



## Methods with example and description




### activateSubscriptionPlan
Activate subscription



```javascript
// Promise
const promise = platformClient.billing.activateSubscriptionPlan({  body : value });

// Async/Await
const data = await platformClient.billing.activateSubscriptionPlan({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [SubscriptionActivateReq](#SubscriptionActivateReq) | yes | Request body |


It will activate subscription plan for customer

*Returned Response:*




[SubscriptionActivateRes](#SubscriptionActivateRes)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "success": true,
    "data": {
      "pause_collection": {},
      "trial": {},
      "invoice_settings": {
        "generation": true,
        "charging": true
      },
      "is_active": true,
      "cancel_at_period_end": false,
      "_id": "601b8e4a32d3e837ec662f5c",
      "subscriber_id": "5ef5f810961ddf004c1457ac",
      "plan_id": "5f3a8786c90d780037723a12",
      "product_suite_id": "5f3a8786c90d7800377239f3",
      "plan_data": {
        "recurring": {
          "interval": "month",
          "interval_count": 1
        },
        "is_trial_plan": false,
        "plan_group": "default",
        "tag_lines": [],
        "currency": "INR",
        "is_active": true,
        "is_visible": true,
        "trial_period": 0,
        "addons": [],
        "tags": [],
        "type": "public",
        "country": "IN",
        "_id": "5f3a8786c90d780037723a12",
        "name": "Standard",
        "description": "Standard",
        "amount": 999,
        "product_suite_id": "5f3a8786c90d7800377239f3",
        "created_at": "2020-08-17T13:35:02.547Z",
        "modified_at": "2020-08-17T13:35:02.547Z"
      },
      "current_period": {
        "start": "2021-02-04T06:03:54.567Z",
        "end": "2021-03-04T06:03:54.567Z"
      },
      "current_status": "active",
      "collection_method": "charge_automatically",
      "created_at": "2021-02-04T06:03:54.580Z",
      "modified_at": "2021-02-04T06:03:54.580Z"
    }
  }
}
```
</details>

</details>









---


### cancelSubscriptionCharge
Cancel subscription charge



```javascript
// Promise
const promise = platformClient.billing.cancelSubscriptionCharge({  extensionId : value,
 subscriptionId : value });

// Async/Await
const data = await platformClient.billing.cancelSubscriptionCharge({  extensionId : value,
 subscriptionId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| extensionId | string | yes | Extension _id |   
| subscriptionId | string | yes | Subscription charge _id |  



Cancel subscription and attached charges.

*Returned Response:*




[EntitySubscription](#EntitySubscription)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### cancelSubscriptionPlan
Cancel subscription



```javascript
// Promise
const promise = platformClient.billing.cancelSubscriptionPlan({  body : value });

// Async/Await
const data = await platformClient.billing.cancelSubscriptionPlan({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CancelSubscriptionReq](#CancelSubscriptionReq) | yes | Request body |


It will cancel current active subscription.

*Returned Response:*




[CancelSubscriptionRes](#CancelSubscriptionRes)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "success": true,
    "data": {
      "current_period": {
        "start": "2021-02-04T06:03:54.567Z",
        "end": "2021-03-04T06:03:54.567Z"
      },
      "pause_collection": {},
      "trial": {},
      "invoice_settings": {
        "generation": true,
        "charging": true
      },
      "is_active": false,
      "cancel_at_period_end": false,
      "_id": "601b8e4a32d3e837ec662f5c",
      "subscriber_id": "5ef5f810961ddf004c1457ac",
      "plan_id": "5f3a8786c90d780037723a12",
      "product_suite_id": "5f3a8786c90d7800377239f3",
      "plan_data": {
        "recurring": {
          "interval": "month",
          "interval_count": 1
        },
        "is_trial_plan": false,
        "plan_group": "default",
        "tag_lines": [],
        "currency": "INR",
        "is_active": true,
        "is_visible": true,
        "trial_period": 0,
        "addons": [],
        "tags": [],
        "type": "public",
        "country": "IN",
        "_id": "5f3a8786c90d780037723a12",
        "name": "Standard",
        "description": "Standard",
        "amount": 999,
        "product_suite_id": "5f3a8786c90d7800377239f3",
        "created_at": "2020-08-17T13:35:02.547Z",
        "modified_at": "2020-08-17T13:35:02.547Z"
      },
      "current_status": "canceled",
      "collection_method": "charge_automatically",
      "created_at": "2021-02-04T06:03:54.580Z",
      "modified_at": "2021-02-04T08:52:25.806Z",
      "cancel_at": "2021-02-04T08:52:25.802Z",
      "canceled_at": "2021-02-04T08:52:25.802Z"
    }
  }
}
```
</details>

</details>









---


### checkCouponValidity
Check coupon validity



```javascript
// Promise
const promise = platformClient.billing.checkCouponValidity({  plan : value,
 couponCode : value });

// Async/Await
const data = await platformClient.billing.checkCouponValidity({  plan : value,
 couponCode : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| plan | string | yes | ID of the plan. |   
| couponCode | string | yes | Coupon code. |  



Check coupon validity.

*Returned Response:*




[CheckValidityResponse](#CheckValidityResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### createOneTimeCharge
Create one time subscription charge



```javascript
// Promise
const promise = platformClient.billing.createOneTimeCharge({  extensionId : value,
 body : value });

// Async/Await
const data = await platformClient.billing.createOneTimeCharge({  extensionId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| extensionId | string | yes | Extension _id |  
| body | [CreateOneTimeCharge](#CreateOneTimeCharge) | yes | Request body |


Register one time subscription charge for a seller of your extension.

*Returned Response:*




[CreateOneTimeChargeResponse](#CreateOneTimeChargeResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### createSubscriptionCharge
Create subscription charge



```javascript
// Promise
const promise = platformClient.billing.createSubscriptionCharge({  extensionId : value,
 body : value });

// Async/Await
const data = await platformClient.billing.createSubscriptionCharge({  extensionId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| extensionId | string | yes | Extension _id |  
| body | [CreateSubscriptionCharge](#CreateSubscriptionCharge) | yes | Request body |


Register subscription charge for a seller of your extension.

*Returned Response:*




[CreateSubscriptionResponse](#CreateSubscriptionResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getChargeDetails
Get subscription charge details



```javascript
// Promise
const promise = platformClient.billing.getChargeDetails({  extensionId : value,
 chargeId : value });

// Async/Await
const data = await platformClient.billing.getChargeDetails({  extensionId : value,
 chargeId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| extensionId | string | yes | Extension _id |   
| chargeId | string | yes | Standalone charge _id |  



Get created subscription charge details

*Returned Response:*




[OneTimeChargeEntity](#OneTimeChargeEntity)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getCustomerDetail
Get subscription customer detail



```javascript
// Promise
const promise = platformClient.billing.getCustomerDetail();

// Async/Await
const data = await platformClient.billing.getCustomerDetail();
```






Get subscription customer detail.

*Returned Response:*




[SubscriptionCustomer](#SubscriptionCustomer)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "phone": {
      "phone_number": "1234567890",
      "phone_country_code": "91"
    },
    "billing_address": {
      "country": "India",
      "state": "Maharastra",
      "city": "Mumbai",
      "line1": "test1",
      "line2": "test2",
      "postal_code": "400059"
    },
    "_id": "5ee773e1351e5e84289ed9cf",
    "unique_id": "1",
    "type": "company",
    "name": "test retail",
    "email": "test@gmail.com",
    "created_at": "2020-06-15T13:13:05.267Z",
    "modified_at": "2021-02-04T00:58:45.356Z",
    "data": {
      "pg_user_exists": true,
      "id": 2
    }
  }
}
```
</details>

</details>









---


### getFeatureLimitConfig
Get subscription subscription limits



```javascript
// Promise
const promise = platformClient.billing.getFeatureLimitConfig();

// Async/Await
const data = await platformClient.billing.getFeatureLimitConfig();
```






Get subscription subscription limits.

*Returned Response:*




[SubscriptionLimit](#SubscriptionLimit)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "application": {
      "enabled": true,
      "hard_limit": 25,
      "soft_limit": 25
    },
    "marketplace": {
      "enabled": true
    },
    "other_platform": {
      "enabled": true
    },
    "team": {
      "limit": -1
    },
    "products": {
      "bulk": true,
      "limit": -1
    },
    "extensions": {
      "enabled": true,
      "limit": -1
    },
    "integrations": {
      "enabled": true,
      "limit": -1
    },
    "is_trial_plan": false
  }
}
```
</details>

</details>









---


### getInvoiceById
Get invoice by id



```javascript
// Promise
const promise = platformClient.billing.getInvoiceById({  invoiceId : value });

// Async/Await
const data = await platformClient.billing.getInvoiceById({  invoiceId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| invoiceId | string | yes | Invoice id |  



Get invoice by id.

*Returned Response:*




[Invoice](#Invoice)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "invoice": {
      "period": {
        "start": "2020-08-17T13:45:36.722Z",
        "end": "2020-09-17T13:45:36.722Z"
      },
      "client": {
        "address_lines": [
          "TV TOWER, Foot Over Bridge Khar",
          null,
          "Mumbai, 400079, Maharashtra, India"
        ],
        "name": "RELIANCE RETAIL LTD",
        "email": "ZAK@GMAIL.COM",
        "phone": "91 1234567890"
      },
      "auto_advance": true,
      "currency": "INR",
      "paid": true,
      "attemp": 3,
      "_id": "5f7acb709e76da30e3b92cdb",
      "collection_method": "charge_automatically",
      "subscriber_id": "5ee773e1351e5e84289ed9cf",
      "invoice_url": "",
      "number": "FP-1-72020-736",
      "pg_data": {},
      "receipt_number": "5fd9b08464dc6ac048a08988",
      "statement_descriptor": "RELIANCE RETAIL LTD",
      "current_status": "paid",
      "status_trail": [
        {
          "_id": "5f7ad29bd562744eab216379",
          "value": "draft",
          "timestamp": "2020-10-05T08:00:27.753Z"
        },
        {
          "_id": "5fcf40ce1613c029aff417dd",
          "value": "open",
          "timestamp": "2020-12-08T09:01:02.038Z"
        },
        {
          "_id": "5fd9b08664dc6a1ad0a08989",
          "value": "paid",
          "timestamp": "2020-12-16T07:00:22.973Z"
        }
      ],
      "subtotal": 15720.08,
      "total": 15720.08,
      "subscription": "5f3a8a00668947663b7fbd38",
      "next_action_time": "2020-10-05T09:00:27.754Z",
      "created_at": "2020-10-05T07:29:52.876Z",
      "modified_at": "2020-12-16T07:00:22.980Z",
      "hash_identifier": "575999aca03e36f0fa54db5235bc7f25",
      "payment_method": {
        "pg_payment_method_id": null
      }
    },
    "invoice_items": [
      {
        "_id": "5f7acb709e76da48b1b92cdd",
        "currency": "INR",
        "plan": {
          "recurring": {
            "interval": "month",
            "interval_count": 1
          },
          "is_trial_plan": false,
          "plan_group": "default",
          "tag_lines": [],
          "currency": "INR",
          "is_active": true,
          "is_visible": true,
          "trial_period": 0,
          "addons": [],
          "tags": [],
          "type": "public",
          "country": "IN",
          "_id": "5f3a8786c90d780037723a14",
          "name": "Professional",
          "description": "Professional",
          "amount": 1499,
          "product_suite_id": "5f3a8786c90d7800377239f3",
          "created_at": "2020-08-17T13:35:02.802Z",
          "modified_at": "2020-08-17T13:35:02.802Z"
        },
        "name": "Professional",
        "quantity": 1,
        "description": "Professional",
        "period": {
          "start": "2020-08-17T13:45:36.722Z",
          "end": "2020-10-05T07:29:52.868Z"
        },
        "unit_amount": 2356.77,
        "amount": 2356.77,
        "type": "subscription",
        "invoice_id": "5f7acb709e76da30e3b92cdb",
        "created_at": "2020-10-05T07:29:52.886Z",
        "modified_at": "2020-10-05T07:29:52.886Z"
      },
      {
        "_id": "5f7acf199aa6830c4fe5e984",
        "currency": "INR",
        "plan": {
          "recurring": {
            "interval": "month",
            "interval_count": 1
          },
          "is_trial_plan": false,
          "plan_group": "default",
          "tag_lines": [],
          "currency": "INR",
          "is_active": true,
          "is_visible": true,
          "trial_period": 0,
          "addons": [],
          "tags": [
            "popular"
          ],
          "type": "public",
          "country": "IN",
          "_id": "5f3a8786c90d780037723a13",
          "name": "Premium",
          "description": "Premium",
          "amount": 2499,
          "product_suite_id": "5f3a8786c90d7800377239f3",
          "created_at": "2020-08-17T13:35:02.547Z",
          "modified_at": "2020-08-17T13:35:02.547Z"
        },
        "name": "Premium",
        "quantity": 1,
        "description": "Premium",
        "period": {
          "start": "2020-08-17T13:45:36.722Z",
          "end": "2020-10-05T07:45:29.755Z"
        },
        "unit_amount": 3929.87,
        "amount": 3929.87,
        "type": "subscription",
        "invoice_id": "5f7acb709e76da30e3b92cdb",
        "created_at": "2020-10-05T07:45:29.765Z",
        "modified_at": "2020-10-05T07:45:29.765Z"
      },
      {
        "_id": "5f7acf7da10a707fc502dcd4",
        "currency": "INR",
        "plan": {
          "recurring": {
            "interval": "month",
            "interval_count": 1
          },
          "is_trial_plan": false,
          "plan_group": "default",
          "tag_lines": [],
          "currency": "INR",
          "is_active": true,
          "is_visible": true,
          "trial_period": 0,
          "addons": [],
          "tags": [],
          "type": "public",
          "country": "IN",
          "_id": "5f3a8786c90d780037723a16",
          "name": "Ultra Premium",
          "description": "Ultra Premium",
          "amount": 2999,
          "product_suite_id": "5f3a8786c90d7800377239f3",
          "created_at": "2020-08-17T13:35:02.802Z",
          "modified_at": "2020-08-17T13:35:02.802Z"
        },
        "name": "Ultra Premium",
        "quantity": 1,
        "description": "Ultra Premium",
        "period": {
          "start": "2020-08-17T13:45:36.722Z",
          "end": "2020-10-05T07:47:09.532Z"
        },
        "unit_amount": 4716.27,
        "amount": 4716.27,
        "type": "subscription",
        "invoice_id": "5f7acb709e76da30e3b92cdb",
        "created_at": "2020-10-05T07:47:09.541Z",
        "modified_at": "2020-10-05T07:47:09.541Z"
      },
      {
        "_id": "5f7ad29bd56274f23321637a",
        "currency": "INR",
        "plan": {
          "recurring": {
            "interval": "month",
            "interval_count": 1
          },
          "is_trial_plan": false,
          "plan_group": "default",
          "tag_lines": [],
          "currency": "INR",
          "is_active": true,
          "is_visible": true,
          "trial_period": 0,
          "addons": [],
          "tags": [],
          "type": "public",
          "country": "IN",
          "_id": "5f3a8786c90d780037723a16",
          "name": "Ultra Premium",
          "description": "Ultra Premium",
          "amount": 2999,
          "product_suite_id": "5f3a8786c90d7800377239f3",
          "created_at": "2020-08-17T13:35:02.802Z",
          "modified_at": "2020-08-17T13:35:02.802Z"
        },
        "name": "Ultra Premium",
        "quantity": 1,
        "description": "Ultra Premium",
        "period": {
          "start": "2020-08-17T13:45:36.722Z",
          "end": "2020-10-05T08:00:27.753Z"
        },
        "unit_amount": 4717.17,
        "amount": 4717.17,
        "type": "subscription",
        "invoice_id": "5f7acb709e76da30e3b92cdb",
        "created_at": "2020-10-05T08:00:27.768Z",
        "modified_at": "2020-10-05T08:00:27.768Z"
      }
    ]
  }
}
```
</details>

</details>









---


### getInvoices
Get invoices



```javascript
// Promise
const promise = platformClient.billing.getInvoices();

// Async/Await
const data = await platformClient.billing.getInvoices();
```






Get invoices.

*Returned Response:*




[Invoices](#Invoices)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "data": [
      {
        "_id": "5f7acb709e76da30e3b92cdb",
        "client": {
          "name": "RELIANCE RETAIL LTD",
          "email": "ZAK@GMAIL.COM",
          "phone": "91 1234567890",
          "address_lines": [
            "TV TOWER, Foot Over Bridge Khar",
            null,
            "Mumbai, 400079, Maharashtra, India"
          ]
        },
        "auto_advance": true,
        "currency": "INR",
        "paid": true,
        "attemp": 3,
        "collection_method": "charge_automatically",
        "subscriber_id": "5ee773e1351e5e84289ed9cf",
        "invoice_url": "",
        "number": "FP-1-72020-736",
        "pg_data": {},
        "period": {
          "start": "2020-08-17T13:45:36.722Z",
          "end": "2020-09-17T13:45:36.722Z"
        },
        "receipt_number": "5fd9b08464dc6ac048a08988",
        "statement_descriptor": "RELIANCE RETAIL LTD",
        "current_status": "paid",
        "status_trail": [
          {
            "_id": "5f7ad29bd562744eab216379",
            "value": "draft",
            "timestamp": "2020-10-05T08:00:27.753Z"
          },
          {
            "_id": "5fcf40ce1613c029aff417dd",
            "value": "open",
            "timestamp": "2020-12-08T09:01:02.038Z"
          },
          {
            "_id": "5fd9b08664dc6a1ad0a08989",
            "value": "paid",
            "timestamp": "2020-12-16T07:00:22.973Z"
          }
        ],
        "subtotal": 15720.08,
        "total": 15720.08,
        "subscription": "5f3a8a00668947663b7fbd38",
        "next_action_time": "2020-10-05T09:00:27.754Z",
        "created_at": "2020-10-05T07:29:52.876Z",
        "modified_at": "2020-12-16T07:00:22.980Z",
        "hash_identifier": "575999aca03e36f0fa54db5235bc7f25",
        "payment_method": {
          "pg_payment_method_id": null
        },
        "invoice_items": [
          {
            "_id": "5f7acb709e76da48b1b92cdd",
            "currency": "INR",
            "plan": {
              "recurring": {
                "interval": "month",
                "interval_count": 1
              },
              "is_trial_plan": false,
              "plan_group": "default",
              "tag_lines": [],
              "currency": "INR",
              "is_active": true,
              "is_visible": true,
              "trial_period": 0,
              "addons": [],
              "tags": [],
              "type": "public",
              "country": "IN",
              "_id": "5f3a8786c90d780037723a14",
              "name": "Professional",
              "description": "Professional",
              "amount": 1499,
              "product_suite_id": "5f3a8786c90d7800377239f3",
              "created_at": "2020-08-17T13:35:02.802Z",
              "modified_at": "2020-08-17T13:35:02.802Z"
            },
            "name": "Professional",
            "quantity": 1,
            "description": "Professional",
            "period": {
              "start": "2020-08-17T13:45:36.722Z",
              "end": "2020-10-05T07:29:52.868Z"
            },
            "unit_amount": 2356.77,
            "amount": 2356.77,
            "type": "subscription",
            "invoice_id": "5f7acb709e76da30e3b92cdb",
            "created_at": "2020-10-05T07:29:52.886Z",
            "modified_at": "2020-10-05T07:29:52.886Z"
          },
          {
            "_id": "5f7acf199aa6830c4fe5e984",
            "currency": "INR",
            "plan": {
              "recurring": {
                "interval": "month",
                "interval_count": 1
              },
              "is_trial_plan": false,
              "plan_group": "default",
              "tag_lines": [],
              "currency": "INR",
              "is_active": true,
              "is_visible": true,
              "trial_period": 0,
              "addons": [],
              "tags": [
                "popular"
              ],
              "type": "public",
              "country": "IN",
              "_id": "5f3a8786c90d780037723a13",
              "name": "Premium",
              "description": "Premium",
              "amount": 2499,
              "product_suite_id": "5f3a8786c90d7800377239f3",
              "created_at": "2020-08-17T13:35:02.547Z",
              "modified_at": "2020-08-17T13:35:02.547Z"
            },
            "name": "Premium",
            "quantity": 1,
            "description": "Premium",
            "period": {
              "start": "2020-08-17T13:45:36.722Z",
              "end": "2020-10-05T07:45:29.755Z"
            },
            "unit_amount": 3929.87,
            "amount": 3929.87,
            "type": "subscription",
            "invoice_id": "5f7acb709e76da30e3b92cdb",
            "created_at": "2020-10-05T07:45:29.765Z",
            "modified_at": "2020-10-05T07:45:29.765Z"
          },
          {
            "_id": "5f7acf7da10a707fc502dcd4",
            "currency": "INR",
            "plan": {
              "recurring": {
                "interval": "month",
                "interval_count": 1
              },
              "is_trial_plan": false,
              "plan_group": "default",
              "tag_lines": [],
              "currency": "INR",
              "is_active": true,
              "is_visible": true,
              "trial_period": 0,
              "addons": [],
              "tags": [],
              "type": "public",
              "country": "IN",
              "_id": "5f3a8786c90d780037723a16",
              "name": "Ultra Premium",
              "description": "Ultra Premium",
              "amount": 2999,
              "product_suite_id": "5f3a8786c90d7800377239f3",
              "created_at": "2020-08-17T13:35:02.802Z",
              "modified_at": "2020-08-17T13:35:02.802Z"
            },
            "name": "Ultra Premium",
            "quantity": 1,
            "description": "Ultra Premium",
            "period": {
              "start": "2020-08-17T13:45:36.722Z",
              "end": "2020-10-05T07:47:09.532Z"
            },
            "unit_amount": 4716.27,
            "amount": 4716.27,
            "type": "subscription",
            "invoice_id": "5f7acb709e76da30e3b92cdb",
            "created_at": "2020-10-05T07:47:09.541Z",
            "modified_at": "2020-10-05T07:47:09.541Z"
          },
          {
            "_id": "5f7ad29bd56274f23321637a",
            "currency": "INR",
            "plan": {
              "recurring": {
                "interval": "month",
                "interval_count": 1
              },
              "is_trial_plan": false,
              "plan_group": "default",
              "tag_lines": [],
              "currency": "INR",
              "is_active": true,
              "is_visible": true,
              "trial_period": 0,
              "addons": [],
              "tags": [],
              "type": "public",
              "country": "IN",
              "_id": "5f3a8786c90d780037723a16",
              "name": "Ultra Premium",
              "description": "Ultra Premium",
              "amount": 2999,
              "product_suite_id": "5f3a8786c90d7800377239f3",
              "created_at": "2020-08-17T13:35:02.802Z",
              "modified_at": "2020-08-17T13:35:02.802Z"
            },
            "name": "Ultra Premium",
            "quantity": 1,
            "description": "Ultra Premium",
            "period": {
              "start": "2020-08-17T13:45:36.722Z",
              "end": "2020-10-05T08:00:27.753Z"
            },
            "unit_amount": 4717.17,
            "amount": 4717.17,
            "type": "subscription",
            "invoice_id": "5f7acb709e76da30e3b92cdb",
            "created_at": "2020-10-05T08:00:27.768Z",
            "modified_at": "2020-10-05T08:00:27.768Z"
          }
        ]
      }
    ],
    "start": 0,
    "end": 10,
    "limit": 10,
    "page": 1,
    "total": 1
  }
}
```
</details>

</details>









---


### getSubscription
Get current subscription detail



```javascript
// Promise
const promise = platformClient.billing.getSubscription();

// Async/Await
const data = await platformClient.billing.getSubscription();
```






If subscription is active then it will return is_enabled true and return subscription object. If subscription is not active then is_enabled false and message.


*Returned Response:*




[SubscriptionStatus](#SubscriptionStatus)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Active subscription</i></summary>

```json
{
  "value": {
    "is_enabled": true,
    "subscription": {
      "current_period": {
        "start": "2023-05-23T07:00:31.345Z",
        "end": "2023-06-22T07:00:31.345Z"
      },
      "pause_collection": {},
      "trial": {},
      "invoice_settings": {
        "generation": true,
        "charging": true
      },
      "is_active": true,
      "cancel_at_period_end": false,
      "freezed": false,
      "channel_type": "ecomm",
      "_id": "6385dc9389fe3577db6935f3",
      "subscriber_id": "6385dc9289fe356a346935eb",
      "plan_id": "5f2e30cad1456d00386abf1c",
      "product_suite_id": "5f2e30cad1456d00386abefc",
      "plan_data": {
        "plan_components": [
          {
            "is_active": true,
            "display_text": null,
            "_id": "5f2e30cbd1456d00386ac008",
            "plan_id": "5f2e30cad1456d00386abf1c",
            "created_at": "2020-08-08T04:57:47.829Z",
            "modified_at": "2021-07-31T12:13:51.221Z",
            "component": {
              "is_visible": true,
              "is_active": true,
              "is_display": true,
              "_id": "5f2e30cad1456d00386abefd",
              "component_price_config": {
                "type": "display",
                "display_text": "4%"
              },
              "name": "Transaction Fees",
              "slug": "transaction-fee",
              "description": "Transaction fees is inclusive of Payment Gateway",
              "group": "Key Features",
              "icon": "",
              "product_suite_id": "5f2e30cad1456d00386abefc",
              "created_at": "2020-08-08T04:57:46.648Z",
              "modified_at": "2021-07-31T12:13:50.344Z",
              "links": {}
            },
            "component_price": {
              "display_text": "3.5%",
              "is_default": false,
              "is_active": true,
              "processing_type": "display",
              "tags": [],
              "_id": "5f2e30cbd1456d00386abf77",
              "component_id": "5f2e30cad1456d00386abefd",
              "created_at": "2020-08-08T04:57:47.433Z",
              "modified_at": "2023-04-21T07:04:22.574Z",
              "__v": 0
            }
          }
        ],
        "components": [
          {
            "_id": "634569a3675d1912531e5ef3",
            "component_price_config": {
              "type": "revenue",
              "default_config": {
                "recurring": {
                  "aggregate_usage": "sum",
                  "usage_type": "licensed",
                  "interval_count": 1
                },
                "transform_quantity": {
                  "divide_by": 1,
                  "round": "up"
                },
                "free_tier": {
                  "type": "TIME_BASED",
                  "value": 0
                },
                "unit_amount": 0,
                "quantity": 1,
                "price_type": "static",
                "price_ui_type": "standard",
                "bill_type": "one_time",
                "billing_scheme": "per_unit",
                "display_text": "Yes",
                "tiers": [],
                "currency": "INR"
              },
              "display_text": "Free",
              "price_meta": {
                "unit_amount": 0,
                "price_type": "static",
                "bill_type": "one_time",
                "billing_scheme": "per_unit",
                "transform_quantity": {
                  "divide_by": 1,
                  "round": "up"
                }
              }
            },
            "is_visible": true,
            "is_active": true,
            "is_display": true,
            "product_suite_id": "5ececa006415744de9228e2e",
            "name": "SSL Certificates",
            "slug": "ssl-certificates",
            "description": "",
            "group": "Key Features",
            "icon": "",
            "links": {},
            "created_at": "2022-10-11T13:03:31.767Z",
            "modified_at": "2023-04-21T07:04:23.544Z"
          }
        ],
        "fee_components": [],
        "recurring": {
          "interval_count": 1,
          "interval": "month"
        },
        "taxation": {
          "gst": 0.18
        },
        "one_time_fees": {
          "developement": 0,
          "marketing": 0
        },
        "credit_line": {
          "is_active": false
        },
        "is_trial_plan": false,
        "plan_group": "default",
        "tag_lines": [],
        "currency": "INR",
        "is_active": true,
        "is_visible": true,
        "trial_period": 0,
        "addons": [],
        "tags": [
          "popular"
        ],
        "type": "public",
        "country": "IN",
        "company_ids": [],
        "channel_type": "ecomm",
        "_id": "5f2e30cad1456d00386abf1c",
        "tagLines": [],
        "name": "Premium",
        "description": "For scaled up businesses",
        "amount": 2499,
        "product_suite_id": "5f2e30cad1456d00386abefc",
        "created_at": "2020-08-08T04:57:46.830Z",
        "modified_at": "2023-04-21T07:04:22.363Z",
        "current_status": "active",
        "plan_leeway_after_activation": 7,
        "activated_on": "2023-06-02T07:57:16.638Z"
      },
      "current_status": "active",
      "collection_method": "charge_automatically",
      "created_at": "2022-11-29T10:18:59.466Z",
      "modified_at": "2023-06-02T07:57:17.254Z",
      "latest_invoice": "6479a0dda77a156ad997bd4d"
    },
    "latest_invoice": {
      "documents": {},
      "payment": {},
      "period": {
        "start": "2023-05-23T07:00:31.345Z",
        "end": "2023-06-22T07:00:31.345Z"
      },
      "client": {
        "address_lines": [
          "TEST, TEST ,TEST, TEST",
          "",
          "NAVI MUMBAI, 400614, MAHARASHTRA, INDIA"
        ],
        "name": "avi_test",
        "email": "avinashsharma@gofynd.com",
        "phone": "undefined undefined"
      },
      "discount": {},
      "taxation": {
        "cgst": 0.09,
        "sgst": 0.09,
        "igst": 0
      },
      "auto_advance": false,
      "currency": "INR",
      "paid": true,
      "attemp": 1,
      "credit_note_amount": 1768.82,
      "_id": "6479a0dda77a156ad997bd4d",
      "collection_method": "charge_automatically",
      "subscriber_id": "6385dc9289fe356a346935eb",
      "invoice_url": "",
      "number": "PS-P-A00515-FY24",
      "pg_data": {},
      "old_settlement": 999.33,
      "credit_balance": null,
      "receipt_number": "",
      "statement_descriptor": "avi_test",
      "current_status": "paid",
      "status_trail": [
        {
          "_id": "6479a0dda77a157bd397bd4e",
          "value": "open",
          "timestamp": "2023-06-02T07:57:17.096Z"
        },
        {
          "_id": "6479a196244a37915c4b9448",
          "value": "paid",
          "timestamp": "2023-06-02T08:00:22.059Z"
        },
        {
          "_id": "6479a196e3c6582ed5ea7157",
          "value": "paid",
          "timestamp": "2023-06-02T08:00:22.099Z"
        }
      ],
      "subtotal": 2555.4900000000002,
      "total": 786.67,
      "subscription": "6385dc9389fe3577db6935f3",
      "next_action_time": "2023-06-02T07:57:17.112Z",
      "meta": {
        "old_plan_amount": 499.67,
        "new_plan_amount": 1666,
        "credit_note_id": "FP-C27-A00055-24",
        "isPlanChanged": true
      },
      "created_at": "2023-06-02T07:57:17.128Z",
      "modified_at": "2023-06-02T08:00:23.182Z",
      "hash_identifier": "987abf78c61bfef585242bbbeaab1b59",
      "pdf_url": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/company/13781/self/subscription/documents/invoices/original/U6ffgNlo_-PS-P-A00515-FY24-paid.pdf"
    },
    "latestInvoice": {
      "documents": {},
      "payment": {},
      "period": {
        "start": "2023-05-23T07:00:31.345Z",
        "end": "2023-06-22T07:00:31.345Z"
      },
      "client": {
        "address_lines": [
          "TEST, TEST ,TEST, TEST",
          "",
          "NAVI MUMBAI, 400614, MAHARASHTRA, INDIA"
        ],
        "name": "avi_test",
        "email": "avinashsharma@gofynd.com",
        "phone": "undefined undefined"
      },
      "discount": {},
      "taxation": {
        "cgst": 0.09,
        "sgst": 0.09,
        "igst": 0
      },
      "auto_advance": false,
      "currency": "INR",
      "paid": true,
      "attemp": 1,
      "credit_note_amount": 1768.82,
      "_id": "6479a0dda77a156ad997bd4d",
      "collection_method": "charge_automatically",
      "subscriber_id": "6385dc9289fe356a346935eb",
      "invoice_url": "",
      "number": "PS-P-A00515-FY24",
      "pg_data": {},
      "old_settlement": 999.33,
      "credit_balance": null,
      "receipt_number": "",
      "statement_descriptor": "avi_test",
      "current_status": "paid",
      "status_trail": [
        {
          "_id": "6479a0dda77a157bd397bd4e",
          "value": "open",
          "timestamp": "2023-06-02T07:57:17.096Z"
        },
        {
          "_id": "6479a196244a37915c4b9448",
          "value": "paid",
          "timestamp": "2023-06-02T08:00:22.059Z"
        },
        {
          "_id": "6479a196e3c6582ed5ea7157",
          "value": "paid",
          "timestamp": "2023-06-02T08:00:22.099Z"
        }
      ],
      "subtotal": 2555.4900000000002,
      "total": 786.67,
      "subscription": "6385dc9389fe3577db6935f3",
      "next_action_time": "2023-06-02T07:57:17.112Z",
      "meta": {
        "old_plan_amount": 499.67,
        "new_plan_amount": 1666,
        "credit_note_id": "FP-C27-A00055-24",
        "isPlanChanged": true
      },
      "created_at": "2023-06-02T07:57:17.128Z",
      "modified_at": "2023-06-02T08:00:23.182Z",
      "hash_identifier": "987abf78c61bfef585242bbbeaab1b59",
      "pdf_url": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/company/13781/self/subscription/documents/invoices/original/U6ffgNlo_-PS-P-A00515-FY24-paid.pdf"
    },
    "mandate_amount": 630000,
    "current_subscriptions": [
      {
        "current_period": {
          "start": "2023-05-23T07:00:31.345Z",
          "end": "2023-06-22T07:00:31.345Z"
        },
        "pause_collection": {},
        "trial": {},
        "invoice_settings": {
          "generation": true,
          "charging": true
        },
        "is_active": true,
        "cancel_at_period_end": false,
        "freezed": false,
        "channel_type": "ecomm",
        "_id": "6385dc9389fe3577db6935f3",
        "subscriber_id": "6385dc9289fe356a346935eb",
        "plan_id": "5f2e30cad1456d00386abf1c",
        "product_suite_id": "5f2e30cad1456d00386abefc",
        "plan_data": {
          "plan_components": [
            {
              "is_active": true,
              "display_text": null,
              "_id": "5f2e30cbd1456d00386ac008",
              "plan_id": "5f2e30cad1456d00386abf1c",
              "created_at": "2020-08-08T04:57:47.829Z",
              "modified_at": "2021-07-31T12:13:51.221Z",
              "component": {
                "is_visible": true,
                "is_active": true,
                "is_display": true,
                "_id": "5f2e30cad1456d00386abefd",
                "component_price_config": {
                  "type": "display",
                  "display_text": "4%"
                },
                "name": "Transaction Fees",
                "slug": "transaction-fee",
                "description": "Transaction fees is inclusive of Payment Gateway",
                "group": "Key Features",
                "icon": "",
                "product_suite_id": "5f2e30cad1456d00386abefc",
                "created_at": "2020-08-08T04:57:46.648Z",
                "modified_at": "2021-07-31T12:13:50.344Z",
                "links": {}
              },
              "component_price": {
                "display_text": "3.5%",
                "is_default": false,
                "is_active": true,
                "processing_type": "display",
                "tags": [],
                "_id": "5f2e30cbd1456d00386abf77",
                "component_id": "5f2e30cad1456d00386abefd",
                "created_at": "2020-08-08T04:57:47.433Z",
                "modified_at": "2023-04-21T07:04:22.574Z",
                "__v": 0
              }
            }
          ],
          "components": [
            {
              "_id": "634569a3675d1912531e5ef3",
              "component_price_config": {
                "type": "revenue",
                "default_config": {
                  "recurring": {
                    "aggregate_usage": "sum",
                    "usage_type": "licensed",
                    "interval_count": 1
                  },
                  "transform_quantity": {
                    "divide_by": 1,
                    "round": "up"
                  },
                  "free_tier": {
                    "type": "TIME_BASED",
                    "value": 0
                  },
                  "unit_amount": 0,
                  "quantity": 1,
                  "price_type": "static",
                  "price_ui_type": "standard",
                  "bill_type": "one_time",
                  "billing_scheme": "per_unit",
                  "display_text": "Yes",
                  "tiers": [],
                  "currency": "INR"
                },
                "display_text": "Free",
                "price_meta": {
                  "unit_amount": 0,
                  "price_type": "static",
                  "bill_type": "one_time",
                  "billing_scheme": "per_unit",
                  "transform_quantity": {
                    "divide_by": 1,
                    "round": "up"
                  }
                }
              },
              "is_visible": true,
              "is_active": true,
              "is_display": true,
              "product_suite_id": "5ececa006415744de9228e2e",
              "name": "SSL Certificates",
              "slug": "ssl-certificates",
              "description": "",
              "group": "Key Features",
              "icon": "",
              "links": {},
              "created_at": "2022-10-11T13:03:31.767Z",
              "modified_at": "2023-04-21T07:04:23.544Z"
            }
          ],
          "fee_components": [],
          "recurring": {
            "interval_count": 1,
            "interval": "month"
          },
          "taxation": {
            "gst": 0.18
          },
          "one_time_fees": {
            "developement": 0,
            "marketing": 0
          },
          "credit_line": {
            "is_active": false
          },
          "is_trial_plan": false,
          "plan_group": "default",
          "tag_lines": [],
          "currency": "INR",
          "is_active": true,
          "is_visible": true,
          "trial_period": 0,
          "addons": [],
          "tags": [
            "popular"
          ],
          "type": "public",
          "country": "IN",
          "company_ids": [],
          "channel_type": "ecomm",
          "_id": "5f2e30cad1456d00386abf1c",
          "tagLines": [],
          "name": "Premium",
          "description": "For scaled up businesses",
          "amount": 2499,
          "product_suite_id": "5f2e30cad1456d00386abefc",
          "created_at": "2020-08-08T04:57:46.830Z",
          "modified_at": "2023-04-21T07:04:22.363Z",
          "current_status": "active",
          "plan_leeway_after_activation": 7,
          "activated_on": "2023-06-02T07:57:16.638Z"
        },
        "current_status": "active",
        "collection_method": "charge_automatically",
        "created_at": "2022-11-29T10:18:59.466Z",
        "modified_at": "2023-06-02T07:57:17.254Z",
        "latest_invoice": "6479a0dda77a156ad997bd4d"
      }
    ]
  }
}
```
</details>

<details>
<summary><i>&nbsp; Inactive subscription</i></summary>

```json
{
  "value": {
    "is_enabled": true,
    "message": "Subscription not enabled"
  }
}
```
</details>

</details>









---


### getSubscriptionCharge
Get subscription charge details



```javascript
// Promise
const promise = platformClient.billing.getSubscriptionCharge({  extensionId : value,
 subscriptionId : value });

// Async/Await
const data = await platformClient.billing.getSubscriptionCharge({  extensionId : value,
 subscriptionId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| extensionId | string | yes | Extension _id |   
| subscriptionId | string | yes | Subscription charge _id |  



Get created subscription charge details

*Returned Response:*




[EntitySubscription](#EntitySubscription)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### upsertCustomerDetail
Upsert subscription customer detail



```javascript
// Promise
const promise = platformClient.billing.upsertCustomerDetail({  body : value });

// Async/Await
const data = await platformClient.billing.upsertCustomerDetail({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [SubscriptionCustomerCreate](#SubscriptionCustomerCreate) | yes | Request body |


Upsert subscription customer detail.

*Returned Response:*




[SubscriptionCustomer](#SubscriptionCustomer)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "phone": {
      "phone_number": "1234567890",
      "phone_country_code": "91"
    },
    "billing_address": {
      "country": "India",
      "state": "Maharastra",
      "city": "Mumbai",
      "line1": "test1",
      "line2": "test2",
      "postal_code": "400059"
    },
    "_id": "5ee773e1351e5e84289ed9cf",
    "unique_id": "1",
    "type": "company",
    "name": "test retail",
    "email": "test@gmail.com",
    "created_at": "2020-06-15T13:13:05.267Z",
    "modified_at": "2021-02-04T00:58:45.356Z",
    "data": {
      "pg_user_exists": true,
      "id": 2
    }
  }
}
```
</details>

</details>









---



### Schemas


#### [BadRequest](#BadRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  | Failure message. |
 

---

#### [CancelSubscriptionReq](#CancelSubscriptionReq)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | product_suite | string? |  yes  |  |
 | subscription_id | string? |  yes  |  |
 | type | string? |  yes  |  |
 | unique_id | string? |  yes  |  |
 

---

#### [CancelSubscriptionRes](#CancelSubscriptionRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [Subscription](#Subscription)? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [ChargeLineItem](#ChargeLineItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | capped_amount | number? |  yes  |  |
 | is_test | boolean? |  yes  |  |
 | metadata | string? |  yes  |  |
 | name | string |  no  |  |
 | price | [EntityChargePrice](#EntityChargePrice) |  no  |  |
 | pricing_type | string |  no  |  |
 | recurring | [EntityChargeRecurring](#EntityChargeRecurring)? |  yes  |  |
 | term | string |  no  |  |
 | trial_days | number? |  yes  |  |
 

---

#### [CheckValidityResponse](#CheckValidityResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | discount_amount | number? |  yes  |  |
 | is_valid | boolean? |  yes  |  |
 

---

#### [CreateOneTimeCharge](#CreateOneTimeCharge)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | charge | [OneTimeChargeItem](#OneTimeChargeItem) |  no  |  |
 | is_test | boolean? |  yes  |  |
 | name | string |  no  |  |
 | return_url | string |  no  |  |
 

---

#### [CreateOneTimeChargeResponse](#CreateOneTimeChargeResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | charge | [OneTimeChargeEntity](#OneTimeChargeEntity)? |  yes  |  |
 | confirm_url | string? |  yes  |  |
 

---

#### [CreateSubscriptionCharge](#CreateSubscriptionCharge)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_test | boolean? |  yes  |  |
 | line_items | [[ChargeLineItem](#ChargeLineItem)] |  no  |  |
 | name | string |  no  |  |
 | return_url | string |  no  |  |
 | trial_days | number? |  yes  |  |
 

---

#### [CreateSubscriptionResponse](#CreateSubscriptionResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | confirm_url | string? |  yes  |  |
 | subscription | [EntitySubscription](#EntitySubscription)? |  yes  |  |
 

---

#### [CurrentPeriod](#CurrentPeriod)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | end_date | string? |  yes  |  |
 | start_date | string? |  yes  |  |
 

---

#### [DetailedPlan](#DetailedPlan)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | addons | [string]? |  yes  |  |
 | amount | number? |  yes  |  |
 | components | [[DetailedPlanComponents](#DetailedPlanComponents)]? |  yes  |  |
 | country | string? |  yes  |  |
 | created_at | string? |  yes  |  |
 | currency | string? |  yes  |  |
 | description | string? |  yes  |  |
 | is_active | boolean? |  yes  |  |
 | is_trial_plan | boolean? |  yes  |  |
 | is_visible | boolean? |  yes  |  |
 | modified_at | string? |  yes  |  |
 | name | string? |  yes  |  |
 | plan_group | string? |  yes  |  |
 | product_suite_id | string? |  yes  |  |
 | recurring | [PlanRecurring](#PlanRecurring)? |  yes  |  |
 | tag_lines | [string]? |  yes  |  |
 | tags | [string]? |  yes  |  |
 | trial_period | number? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [DetailedPlanComponents](#DetailedPlanComponents)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | config | string? |  yes  |  |
 | description | string? |  yes  |  |
 | display_text | string? |  yes  |  |
 | enabled | boolean? |  yes  |  |
 | group | string? |  yes  |  |
 | icon | string? |  yes  |  |
 | links | string? |  yes  |  |
 | name | string? |  yes  |  |
 | slug | string? |  yes  |  |
 

---

#### [EntityChargePrice](#EntityChargePrice)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | number |  no  | Amount for price. Minimum value 1 |
 | currency_code | string |  no  |  |
 

---

#### [EntityChargeRecurring](#EntityChargeRecurring)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | interval | string |  no  |  |
 

---

#### [EntitySubscription](#EntitySubscription)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | activated_on | string? |  yes  |  |
 | cancelled_on | string? |  yes  |  |
 | company_id | number? |  yes  |  |
 | line_items | [[SubscriptionCharge](#SubscriptionCharge)]? |  yes  |  |
 | metadata | string? |  yes  |  |
 | name | string? |  yes  |  |
 | status | string? |  yes  |  |
 | trial_days | number? |  yes  |  |
 | trial_period | [SubscriptionTrialPeriod](#SubscriptionTrialPeriod)? |  yes  |  |
 

---

#### [InternalServerError](#InternalServerError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string? |  yes  | Error code |
 | message | string? |  yes  | Internal server Server error |
 

---

#### [Invoice](#Invoice)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | invoice | [InvoiceDetails](#InvoiceDetails)? |  yes  |  |
 | invoice_items | [[InvoiceItems](#InvoiceItems)]? |  yes  |  |
 

---

#### [InvoiceDetails](#InvoiceDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | attemp | number? |  yes  |  |
 | auto_advance | boolean? |  yes  |  |
 | client | [InvoiceDetailsClient](#InvoiceDetailsClient)? |  yes  |  |
 | collection_method | string? |  yes  |  |
 | created_at | string? |  yes  |  |
 | currency | string? |  yes  |  |
 | current_status | string? |  yes  |  |
 | hash_identifier | string? |  yes  |  |
 | invoice_url | string? |  yes  |  |
 | modified_at | string? |  yes  |  |
 | next_action_time | string? |  yes  |  |
 | number | string? |  yes  |  |
 | paid | boolean? |  yes  |  |
 | payment_method | [InvoicePaymentMethod](#InvoicePaymentMethod)? |  yes  |  |
 | period | [InvoiceDetailsPeriod](#InvoiceDetailsPeriod)? |  yes  |  |
 | pg_data | string? |  yes  |  |
 | receipt_number | string? |  yes  |  |
 | statement_descriptor | string? |  yes  |  |
 | status_trail | [[InvoiceDetailsStatusTrail](#InvoiceDetailsStatusTrail)]? |  yes  |  |
 | subscriber_id | string? |  yes  |  |
 | subscription | string? |  yes  |  |
 | subtotal | number? |  yes  |  |
 | total | number? |  yes  |  |
 

---

#### [InvoiceDetailsClient](#InvoiceDetailsClient)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address_lines | [string]? |  yes  |  |
 | email | string? |  yes  |  |
 | name | string? |  yes  |  |
 | phone | string? |  yes  |  |
 

---

#### [InvoiceDetailsPaymentMethods](#InvoiceDetailsPaymentMethods)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [InvoiceDetailsPaymentMethodsData](#InvoiceDetailsPaymentMethodsData)? |  yes  |  |
 | id | number? |  yes  |  |
 | is_default | boolean? |  yes  |  |
 | pg_payment_method_id | string? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [InvoiceDetailsPaymentMethodsData](#InvoiceDetailsPaymentMethodsData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand | string? |  yes  |  |
 | checks | [InvoiceDetailsPaymentMethodsDataChecks](#InvoiceDetailsPaymentMethodsDataChecks)? |  yes  |  |
 | country | string? |  yes  |  |
 | exp_month | number? |  yes  |  |
 | exp_year | number? |  yes  |  |
 | fingerprint | string? |  yes  |  |
 | funding | string? |  yes  |  |
 | generated_from | string? |  yes  |  |
 | last4 | string? |  yes  |  |
 | networks | [InvoiceDetailsPaymentMethodsDataNetworks](#InvoiceDetailsPaymentMethodsDataNetworks)? |  yes  |  |
 | three_d_secure_usage | [InvoiceDetailsPaymentMethodsDataThreeDSecureUsage](#InvoiceDetailsPaymentMethodsDataThreeDSecureUsage)? |  yes  |  |
 | wallet | string? |  yes  |  |
 

---

#### [InvoiceDetailsPaymentMethodsDataChecks](#InvoiceDetailsPaymentMethodsDataChecks)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address_line1_check | string? |  yes  |  |
 | address_postal_code_check | string? |  yes  |  |
 | cvc_check | string? |  yes  |  |
 

---

#### [InvoiceDetailsPaymentMethodsDataNetworks](#InvoiceDetailsPaymentMethodsDataNetworks)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | available | [string]? |  yes  |  |
 | preferred | string? |  yes  |  |
 

---

#### [InvoiceDetailsPaymentMethodsDataThreeDSecureUsage](#InvoiceDetailsPaymentMethodsDataThreeDSecureUsage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | supported | boolean? |  yes  |  |
 

---

#### [InvoiceDetailsPeriod](#InvoiceDetailsPeriod)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | end | string? |  yes  |  |
 | start | string? |  yes  |  |
 

---

#### [InvoiceDetailsStatusTrail](#InvoiceDetailsStatusTrail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | timestamp | string? |  yes  |  |
 | value | string? |  yes  |  |
 

---

#### [InvoiceItems](#InvoiceItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | amount | number? |  yes  |  |
 | created_at | string? |  yes  |  |
 | currency | string? |  yes  |  |
 | description | string? |  yes  |  |
 | invoice_id | string? |  yes  |  |
 | modified_at | string? |  yes  |  |
 | name | string? |  yes  |  |
 | period | [InvoiceItemsPeriod](#InvoiceItemsPeriod)? |  yes  |  |
 | plan | [InvoiceItemsPlan](#InvoiceItemsPlan)? |  yes  |  |
 | quantity | number? |  yes  |  |
 | type | string? |  yes  |  |
 | unit_amount | number? |  yes  |  |
 

---

#### [InvoiceItemsPeriod](#InvoiceItemsPeriod)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | end | string? |  yes  |  |
 | start | string? |  yes  |  |
 

---

#### [InvoiceItemsPlan](#InvoiceItemsPlan)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | addons | [string]? |  yes  |  |
 | amount | number? |  yes  |  |
 | country | string? |  yes  |  |
 | created_at | string? |  yes  |  |
 | currency | string? |  yes  |  |
 | description | string? |  yes  |  |
 | is_active | boolean? |  yes  |  |
 | is_trial_plan | boolean? |  yes  |  |
 | is_visible | boolean? |  yes  |  |
 | modified_at | string? |  yes  |  |
 | name | string? |  yes  |  |
 | plan_group | string? |  yes  |  |
 | product_suite_id | string? |  yes  |  |
 | recurring | [InvoiceItemsPlanRecurring](#InvoiceItemsPlanRecurring)? |  yes  |  |
 | tag_lines | [string]? |  yes  |  |
 | tags | [string]? |  yes  |  |
 | trial_period | number? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [InvoiceItemsPlanRecurring](#InvoiceItemsPlanRecurring)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | interval | string? |  yes  |  |
 | interval_count | number? |  yes  |  |
 

---

#### [InvoicePaymentMethod](#InvoicePaymentMethod)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | pg_payment_method_id | string? |  yes  |  |
 

---

#### [Invoices](#Invoices)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [[InvoicesData](#InvoicesData)]? |  yes  |  |
 | end | number? |  yes  |  |
 | limit | number? |  yes  |  |
 | page | number? |  yes  |  |
 | start | number? |  yes  |  |
 | total | number? |  yes  |  |
 

---

#### [InvoicesData](#InvoicesData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | attemp | number? |  yes  |  |
 | auto_advance | boolean? |  yes  |  |
 | client | [InvoicesDataClient](#InvoicesDataClient)? |  yes  |  |
 | collection_method | string? |  yes  |  |
 | created_at | string? |  yes  |  |
 | currency | string? |  yes  |  |
 | current_status | string? |  yes  |  |
 | hash_identifier | string? |  yes  |  |
 | invoice_items | [[InvoiceItems](#InvoiceItems)]? |  yes  |  |
 | invoice_url | string? |  yes  |  |
 | modified_at | string? |  yes  |  |
 | next_action_time | string? |  yes  |  |
 | number | string? |  yes  |  |
 | paid | boolean? |  yes  |  |
 | payment_method | [InvoicesDataPaymentMethod](#InvoicesDataPaymentMethod)? |  yes  |  |
 | period | [InvoicesDataPeriod](#InvoicesDataPeriod)? |  yes  |  |
 | pg_data | string? |  yes  |  |
 | receipt_number | string? |  yes  |  |
 | statement_descriptor | string? |  yes  |  |
 | status_trail | [[InvoiceDetailsStatusTrail](#InvoiceDetailsStatusTrail)]? |  yes  |  |
 | subscriber_id | string? |  yes  |  |
 | subscription | string? |  yes  |  |
 | subtotal | number? |  yes  |  |
 | total | number? |  yes  |  |
 

---

#### [InvoicesDataClient](#InvoicesDataClient)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address_lines | [string]? |  yes  |  |
 | email | string? |  yes  |  |
 | name | string? |  yes  |  |
 | phone | string? |  yes  |  |
 

---

#### [InvoicesDataPaymentMethod](#InvoicesDataPaymentMethod)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | pg_payment_method_id | string? |  yes  |  |
 

---

#### [InvoicesDataPeriod](#InvoicesDataPeriod)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | end | string? |  yes  |  |
 | start | string? |  yes  |  |
 

---

#### [OneTimeChargeEntity](#OneTimeChargeEntity)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | activated_on | string? |  yes  |  |
 | cancelled_on | string? |  yes  |  |
 | entity_id | string? |  yes  |  |
 | entity_type | string? |  yes  |  |
 | is_test | boolean? |  yes  |  |
 | meta | string? |  yes  |  |
 | metadata | string? |  yes  |  |
 | name | string? |  yes  |  |
 | price | [EntityChargePrice](#EntityChargePrice)? |  yes  |  |
 | pricing_type | string? |  yes  |  |
 | return_url | string? |  yes  |  |
 | status | string? |  yes  |  |
 | subscriber_id | string? |  yes  |  |
 

---

#### [OneTimeChargeItem](#OneTimeChargeItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | capped_amount | number? |  yes  |  |
 | is_test | boolean? |  yes  |  |
 | metadata | string? |  yes  |  |
 | name | string |  no  |  |
 | price | [EntityChargePrice](#EntityChargePrice) |  no  |  |
 | pricing_type | string |  no  |  |
 | term | string? |  yes  |  |
 

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

#### [Phone](#Phone)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | phone_country_code | string? |  yes  |  |
 | phone_number | string? |  yes  |  |
 

---

#### [Plan](#Plan)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | addons | [string]? |  yes  |  |
 | amount | number? |  yes  |  |
 | country | string? |  yes  |  |
 | created_at | string? |  yes  |  |
 | currency | string? |  yes  |  |
 | description | string? |  yes  |  |
 | is_active | boolean? |  yes  |  |
 | is_trial_plan | boolean? |  yes  |  |
 | is_visible | boolean? |  yes  |  |
 | modified_at | string? |  yes  |  |
 | name | string? |  yes  |  |
 | plan_group | string? |  yes  |  |
 | product_suite_id | string? |  yes  |  |
 | recurring | [PlanRecurring](#PlanRecurring)? |  yes  |  |
 | tag_lines | [string]? |  yes  |  |
 | tags | [string]? |  yes  |  |
 | trial_period | number? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [PlanRecurring](#PlanRecurring)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | interval | string? |  yes  |  |
 | interval_count | number? |  yes  |  |
 

---

#### [ResourceNotFound](#ResourceNotFound)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  | Resource not found with {id} |
 

---

#### [Subscription](#Subscription)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | cancel_at_period_end | boolean? |  yes  |  |
 | channel_type | string? |  yes  |  |
 | collection_method | string? |  yes  |  |
 | created_at | string? |  yes  |  |
 | current_period | [SubscriptionCurrentPeriod](#SubscriptionCurrentPeriod)? |  yes  |  |
 | current_status | string? |  yes  |  |
 | invoice_settings | [SubscriptionInvoiceSettings](#SubscriptionInvoiceSettings)? |  yes  |  |
 | is_active | boolean? |  yes  |  |
 | latest_invoice | string? |  yes  |  |
 | modified_at | string? |  yes  |  |
 | pause_collection | [SubscriptionPauseCollection](#SubscriptionPauseCollection)? |  yes  |  |
 | plan_data | [Plan](#Plan)? |  yes  |  |
 | plan_id | string? |  yes  |  |
 | product_suite_id | string? |  yes  |  |
 | subscriber_id | string? |  yes  |  |
 | trial | [SubscriptionTrial](#SubscriptionTrial)? |  yes  |  |
 

---

#### [SubscriptionActivateReq](#SubscriptionActivateReq)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | payment_method | string? |  yes  |  |
 | plan_id | string? |  yes  |  |
 | product_suite | string? |  yes  |  |
 | type | string? |  yes  |  |
 | unique_id | string? |  yes  |  |
 

---

#### [SubscriptionActivateRes](#SubscriptionActivateRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [Subscription](#Subscription)? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [SubscriptionBillingAddress](#SubscriptionBillingAddress)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | city | string? |  yes  |  |
 | country | string? |  yes  |  |
 | line1 | string? |  yes  |  |
 | line2 | string? |  yes  |  |
 | postal_code | string? |  yes  |  |
 | state | string? |  yes  |  |
 

---

#### [SubscriptionCharge](#SubscriptionCharge)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | activated_on | string? |  yes  |  |
 | billing_date | string? |  yes  |  |
 | cancelled_on | string? |  yes  |  |
 | capped_amount | number? |  yes  |  |
 | current_period | [CurrentPeriod](#CurrentPeriod)? |  yes  |  |
 | is_test | boolean? |  yes  |  |
 | metadata | string? |  yes  |  |
 | name | string? |  yes  |  |
 | price | [EntityChargePrice](#EntityChargePrice)? |  yes  |  |
 | pricing_type | string? |  yes  |  |
 | recurring | [EntityChargeRecurring](#EntityChargeRecurring)? |  yes  |  |
 | status | string? |  yes  |  |
 | term | string? |  yes  | Brief description for a charge |
 

---

#### [SubscriptionCurrentPeriod](#SubscriptionCurrentPeriod)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | end | string? |  yes  |  |
 | start | string? |  yes  |  |
 

---

#### [SubscriptionCustomer](#SubscriptionCustomer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | billing_address | [SubscriptionBillingAddress](#SubscriptionBillingAddress)? |  yes  |  |
 | created_at | string? |  yes  |  |
 | data | string? |  yes  |  |
 | email | string? |  yes  |  |
 | modified_at | string? |  yes  |  |
 | name | string? |  yes  |  |
 | phone | [Phone](#Phone)? |  yes  |  |
 | type | string? |  yes  |  |
 | unique_id | string? |  yes  |  |
 

---

#### [SubscriptionCustomerCreate](#SubscriptionCustomerCreate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | billing_address | [SubscriptionBillingAddress](#SubscriptionBillingAddress)? |  yes  |  |
 | email | string? |  yes  |  |
 | name | string? |  yes  |  |
 | phone | [Phone](#Phone)? |  yes  |  |
 | type | string? |  yes  |  |
 | unique_id | string? |  yes  |  |
 

---

#### [SubscriptionInvoiceSettings](#SubscriptionInvoiceSettings)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | charging | boolean? |  yes  |  |
 | generation | boolean? |  yes  |  |
 

---

#### [SubscriptionLimit](#SubscriptionLimit)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application | [SubscriptionLimitApplication](#SubscriptionLimitApplication)? |  yes  |  |
 | extensions | [SubscriptionLimitExtensions](#SubscriptionLimitExtensions)? |  yes  |  |
 | integrations | [SubscriptionLimitIntegrations](#SubscriptionLimitIntegrations)? |  yes  |  |
 | is_trial_plan | boolean? |  yes  |  |
 | marketplace | [SubscriptionLimitMarketplace](#SubscriptionLimitMarketplace)? |  yes  |  |
 | other_platform | [SubscriptionLimitOtherPlatform](#SubscriptionLimitOtherPlatform)? |  yes  |  |
 | products | [SubscriptionLimitProducts](#SubscriptionLimitProducts)? |  yes  |  |
 | team | [SubscriptionLimitTeam](#SubscriptionLimitTeam)? |  yes  |  |
 

---

#### [SubscriptionLimitApplication](#SubscriptionLimitApplication)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean? |  yes  |  |
 | hard_limit | number? |  yes  |  |
 | soft_limit | number? |  yes  |  |
 

---

#### [SubscriptionLimitExtensions](#SubscriptionLimitExtensions)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean? |  yes  |  |
 | limit | number? |  yes  |  |
 

---

#### [SubscriptionLimitIntegrations](#SubscriptionLimitIntegrations)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean? |  yes  |  |
 | limit | number? |  yes  |  |
 

---

#### [SubscriptionLimitMarketplace](#SubscriptionLimitMarketplace)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean? |  yes  |  |
 

---

#### [SubscriptionLimitOtherPlatform](#SubscriptionLimitOtherPlatform)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean? |  yes  |  |
 

---

#### [SubscriptionLimitProducts](#SubscriptionLimitProducts)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bulk | boolean? |  yes  |  |
 | limit | number? |  yes  |  |
 

---

#### [SubscriptionLimitTeam](#SubscriptionLimitTeam)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | limit | number? |  yes  |  |
 

---

#### [SubscriptionPauseCollection](#SubscriptionPauseCollection)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | behavior | string? |  yes  |  |
 | resume_at | string? |  yes  |  |
 

---

#### [SubscriptionStatus](#SubscriptionStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current_subscriptions | [[Subscription](#Subscription)]? |  yes  |  |
 | is_enabled | boolean? |  yes  |  |
 | latest_invoice | [InvoicesData](#InvoicesData)? |  yes  |  |
 | mandate_amount | string? |  yes  |  |
 | next_plan | [Plan](#Plan)? |  yes  |  |
 | subscription | [Subscription](#Subscription)? |  yes  |  |
 

---

#### [SubscriptionTrial](#SubscriptionTrial)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | end | string? |  yes  |  |
 | start | string? |  yes  |  |
 

---

#### [SubscriptionTrialPeriod](#SubscriptionTrialPeriod)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | end_date | string? |  yes  |  |
 | start_date | string? |  yes  |  |
 

---

#### [UnauthenticatedApplication](#UnauthenticatedApplication)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  | Failure message. |
 

---

#### [UnauthenticatedUser](#UnauthenticatedUser)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  | Failure message. |
 

---




