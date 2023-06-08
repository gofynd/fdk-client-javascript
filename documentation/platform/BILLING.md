




##### [Back to Platform docs](./README.md)

## Billing Methods
Handle platform subscription

* [activateSubscriptionPlan](#activatesubscriptionplan)
* [cancelSubscriptionCharge](#cancelsubscriptioncharge)
* [cancelSubscriptionPlan](#cancelsubscriptionplan)
* [checkCouponValidity](#checkcouponvalidity)
* [createSubscriptionCharge](#createsubscriptioncharge)
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
        "start": "2020-12-17T13:45:36.722Z",
        "end": "2021-01-17T13:45:36.722Z"
      },
      "pause_collection": {},
      "trial": {},
      "invoice_settings": {
        "generation": true,
        "charging": true
      },
      "is_active": true,
      "cancel_at_period_end": false,
      "_id": "5f3a8a00668947663b7fbd38",
      "subscriber_id": "5ee773e1351e5e84289ed9cf",
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
      "current_status": "active",
      "collection_method": "charge_automatically",
      "created_at": "2020-08-17T13:45:36.731Z",
      "modified_at": "2020-12-17T11:01:15.960Z",
      "latest_invoice": "5fdb3a7bfc849c2153b944d5"
    }
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
 | term | string? |  yes  |  |
 

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
 | is_enabled | boolean? |  yes  |  |
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




