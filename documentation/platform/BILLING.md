



##### [Back to Platform docs](./README.md)

## Billing Methods
Handle platform subscription
* [checkCouponValidity](#checkcouponvalidity)
* [createSubscriptionCharge](#createsubscriptioncharge)
* [getSubscriptionCharge](#getsubscriptioncharge)
* [cancelSubscriptionCharge](#cancelsubscriptioncharge)
* [getInvoices](#getinvoices)
* [getInvoiceById](#getinvoicebyid)
* [getCustomerDetail](#getcustomerdetail)
* [upsertCustomerDetail](#upsertcustomerdetail)
* [getSubscription](#getsubscription)
* [getFeatureLimitConfig](#getfeaturelimitconfig)
* [activateSubscriptionPlan](#activatesubscriptionplan)
* [cancelSubscriptionPlan](#cancelsubscriptionplan)



## Methods with example and description


### checkCouponValidity
Check coupon validity



```javascript
// Promise
const promise = client.billing.checkCouponValidity({  plan : value,
 couponCode : value });

// Async/Await
const data = await client.billing.checkCouponValidity({  plan : value,
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
const promise = client.billing.createSubscriptionCharge({  extensionId : value,
 body : value });

// Async/Await
const data = await client.billing.createSubscriptionCharge({  extensionId : value,
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


### getSubscriptionCharge
Get subscription charge details



```javascript
// Promise
const promise = client.billing.getSubscriptionCharge({  extensionId : value,
 subscriptionId : value });

// Async/Await
const data = await client.billing.getSubscriptionCharge({  extensionId : value,
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


### cancelSubscriptionCharge
Cancel subscription charge



```javascript
// Promise
const promise = client.billing.cancelSubscriptionCharge({  extensionId : value,
 subscriptionId : value });

// Async/Await
const data = await client.billing.cancelSubscriptionCharge({  extensionId : value,
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


### getInvoices
Get invoices



```javascript
// Promise
const promise = client.billing.getInvoices();

// Async/Await
const data = await client.billing.getInvoices();
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


### getInvoiceById
Get invoice by id



```javascript
// Promise
const promise = client.billing.getInvoiceById({  invoiceId : value });

// Async/Await
const data = await client.billing.getInvoiceById({  invoiceId : value });
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


### getCustomerDetail
Get subscription customer detail



```javascript
// Promise
const promise = client.billing.getCustomerDetail();

// Async/Await
const data = await client.billing.getCustomerDetail();
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


### upsertCustomerDetail
Upsert subscription customer detail



```javascript
// Promise
const promise = client.billing.upsertCustomerDetail({  body : value });

// Async/Await
const data = await client.billing.upsertCustomerDetail({  body : value });
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


### getSubscription
Get current subscription detail



```javascript
// Promise
const promise = client.billing.getSubscription();

// Async/Await
const data = await client.billing.getSubscription();
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


### getFeatureLimitConfig
Get subscription subscription limits



```javascript
// Promise
const promise = client.billing.getFeatureLimitConfig();

// Async/Await
const data = await client.billing.getFeatureLimitConfig();
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


### activateSubscriptionPlan
Activate subscription



```javascript
// Promise
const promise = client.billing.activateSubscriptionPlan({  body : value });

// Async/Await
const data = await client.billing.activateSubscriptionPlan({  body : value });
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


### cancelSubscriptionPlan
Cancel subscription



```javascript
// Promise
const promise = client.billing.cancelSubscriptionPlan({  body : value });

// Async/Await
const data = await client.billing.cancelSubscriptionPlan({  body : value });
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



### Schemas

 
 
 #### [Page](#Page)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | item_total | number |  no  |  |
 | next_id | string |  no  |  |
 | has_previous | boolean |  no  |  |
 | has_next | boolean |  no  |  |
 | current | number |  no  |  |
 | type | string |  yes  |  |
 | size | number |  no  |  |

---


 
 
 #### [UnauthenticatedUser](#UnauthenticatedUser)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  | Failure message. |

---


 
 
 #### [UnauthenticatedApplication](#UnauthenticatedApplication)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  | Failure message. |

---


 
 
 #### [BadRequest](#BadRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  | Failure message. |

---


 
 
 #### [ResourceNotFound](#ResourceNotFound)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  | Resource not found with {id} |

---


 
 
 #### [InternalServerError](#InternalServerError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  | Internal server Server error |
 | code | string |  no  | Error code |

---


 
 
 #### [CheckValidityResponse](#CheckValidityResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_valid | boolean |  no  |  |
 | discount_amount | number |  no  |  |

---


 
 
 #### [PlanRecurring](#PlanRecurring)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | interval | string |  no  |  |
 | interval_count | number |  no  |  |

---


 
 
 #### [Plan](#Plan)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | recurring | [PlanRecurring](#PlanRecurring) |  no  |  |
 | is_trial_plan | boolean |  no  |  |
 | plan_group | string |  no  |  |
 | tag_lines | [string] |  no  |  |
 | currency | string |  no  |  |
 | is_active | boolean |  no  |  |
 | is_visible | boolean |  no  |  |
 | trial_period | number |  no  |  |
 | addons | [string] |  no  |  |
 | tags | [string] |  no  |  |
 | type | string |  no  |  |
 | country | string |  no  |  |
 | _id | string |  no  |  |
 | name | string |  no  |  |
 | description | string |  no  |  |
 | amount | number |  no  |  |
 | product_suite_id | string |  no  |  |
 | created_at | string |  no  |  |
 | modified_at | string |  no  |  |

---


 
 
 #### [DetailedPlanComponents](#DetailedPlanComponents)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | slug | string |  no  |  |
 | description | string |  no  |  |
 | group | string |  no  |  |
 | icon | string |  no  |  |
 | links | string |  no  |  |
 | enabled | boolean |  no  |  |
 | display_text | string |  no  |  |

---


 
 
 #### [DetailedPlan](#DetailedPlan)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | recurring | [PlanRecurring](#PlanRecurring) |  no  |  |
 | is_trial_plan | boolean |  no  |  |
 | plan_group | string |  no  |  |
 | tag_lines | [string] |  no  |  |
 | currency | string |  no  |  |
 | is_active | boolean |  no  |  |
 | is_visible | boolean |  no  |  |
 | trial_period | number |  no  |  |
 | addons | [string] |  no  |  |
 | tags | [string] |  no  |  |
 | type | string |  no  |  |
 | country | string |  no  |  |
 | _id | string |  no  |  |
 | name | string |  no  |  |
 | description | string |  no  |  |
 | amount | number |  no  |  |
 | product_suite_id | string |  no  |  |
 | created_at | string |  no  |  |
 | modified_at | string |  no  |  |
 | components | [[DetailedPlanComponents](#DetailedPlanComponents)] |  no  |  |

---


 
 
 #### [SubscriptionTrialPeriod](#SubscriptionTrialPeriod)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | start_date | string |  no  |  |
 | end_date | string |  no  |  |

---


 
 
 #### [EntityChargePrice](#EntityChargePrice)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | number |  yes  | Amount for price. Minimum value 1 |
 | currency_code | string |  yes  |  |

---


 
 
 #### [EntityChargeRecurring](#EntityChargeRecurring)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | interval | string |  yes  |  |

---


 
 
 #### [ChargeLineItem](#ChargeLineItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  yes  |  |
 | term | string |  yes  |  |
 | pricing_type | string |  yes  |  |
 | price | [EntityChargePrice](#EntityChargePrice) |  yes  |  |
 | recurring | [EntityChargeRecurring](#EntityChargeRecurring) |  no  |  |
 | capped_amount | number |  no  |  |
 | trial_days | number |  no  |  |
 | is_test | boolean |  no  |  |
 | metadata | string |  no  |  |

---


 
 
 #### [CreateSubscriptionCharge](#CreateSubscriptionCharge)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  yes  |  |
 | trial_days | number |  no  |  |
 | line_items | [[ChargeLineItem](#ChargeLineItem)] |  yes  |  |
 | is_test | boolean |  no  |  |
 | return_url | string |  yes  |  |

---


 
 
 #### [CurrentPeriod](#CurrentPeriod)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | start_date | string |  no  |  |
 | end_date | string |  no  |  |

---


 
 
 #### [SubscriptionCharge](#SubscriptionCharge)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | name | string |  no  |  |
 | term | string |  no  |  |
 | pricing_type | string |  no  |  |
 | price | [EntityChargePrice](#EntityChargePrice) |  no  |  |
 | recurring | [EntityChargeRecurring](#EntityChargeRecurring) |  no  |  |
 | capped_amount | number |  no  |  |
 | activated_on | string |  no  |  |
 | cancelled_on | string |  no  |  |
 | billing_date | string |  no  |  |
 | current_period | [CurrentPeriod](#CurrentPeriod) |  no  |  |
 | status | string |  no  |  |
 | is_test | boolean |  no  |  |
 | metadata | string |  no  |  |

---


 
 
 #### [EntitySubscription](#EntitySubscription)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | name | string |  no  |  |
 | status | string |  no  |  |
 | company_id | number |  no  |  |
 | activated_on | string |  no  |  |
 | cancelled_on | string |  no  |  |
 | trial_days | number |  no  |  |
 | trial_period | [SubscriptionTrialPeriod](#SubscriptionTrialPeriod) |  no  |  |
 | metadata | string |  no  |  |
 | line_items | [[SubscriptionCharge](#SubscriptionCharge)] |  no  |  |

---


 
 
 #### [CreateSubscriptionResponse](#CreateSubscriptionResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | subscription | [EntitySubscription](#EntitySubscription) |  no  |  |
 | confirm_url | string |  no  |  |

---


 
 
 #### [InvoiceDetailsPeriod](#InvoiceDetailsPeriod)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | start | string |  no  |  |
 | end | string |  no  |  |

---


 
 
 #### [InvoiceDetailsClient](#InvoiceDetailsClient)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address_lines | [string] |  no  |  |
 | name | string |  no  |  |
 | email | string |  no  |  |
 | phone | string |  no  |  |

---


 
 
 #### [InvoiceDetailsStatusTrail](#InvoiceDetailsStatusTrail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | value | string |  no  |  |
 | timestamp | string |  no  |  |

---


 
 
 #### [InvoiceDetailsPaymentMethodsDataChecks](#InvoiceDetailsPaymentMethodsDataChecks)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cvc_check | string |  no  |  |
 | address_line1_check | string |  no  |  |
 | address_postal_code_check | string |  no  |  |

---


 
 
 #### [InvoiceDetailsPaymentMethodsDataNetworks](#InvoiceDetailsPaymentMethodsDataNetworks)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | available | [string] |  no  |  |
 | preferred | string |  no  |  |

---


 
 
 #### [InvoiceDetailsPaymentMethodsDataThreeDSecureUsage](#InvoiceDetailsPaymentMethodsDataThreeDSecureUsage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | supported | boolean |  no  |  |

---


 
 
 #### [InvoiceDetailsPaymentMethodsData](#InvoiceDetailsPaymentMethodsData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brand | string |  no  |  |
 | last4 | string |  no  |  |
 | checks | [InvoiceDetailsPaymentMethodsDataChecks](#InvoiceDetailsPaymentMethodsDataChecks) |  no  |  |
 | wallet | string |  no  |  |
 | country | string |  no  |  |
 | funding | string |  no  |  |
 | exp_year | number |  no  |  |
 | networks | [InvoiceDetailsPaymentMethodsDataNetworks](#InvoiceDetailsPaymentMethodsDataNetworks) |  no  |  |
 | exp_month | number |  no  |  |
 | fingerprint | string |  no  |  |
 | generated_from | string |  no  |  |
 | three_d_secure_usage | [InvoiceDetailsPaymentMethodsDataThreeDSecureUsage](#InvoiceDetailsPaymentMethodsDataThreeDSecureUsage) |  no  |  |

---


 
 
 #### [InvoiceDetailsPaymentMethods](#InvoiceDetailsPaymentMethods)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | number |  no  |  |
 | type | string |  no  |  |
 | pg_payment_method_id | string |  no  |  |
 | data | [InvoiceDetailsPaymentMethodsData](#InvoiceDetailsPaymentMethodsData) |  no  |  |
 | is_default | boolean |  no  |  |

---


 
 
 #### [InvoicePaymentMethod](#InvoicePaymentMethod)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | pg_payment_method_id | string |  no  |  |

---


 
 
 #### [InvoiceDetails](#InvoiceDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | period | [InvoiceDetailsPeriod](#InvoiceDetailsPeriod) |  no  |  |
 | client | [InvoiceDetailsClient](#InvoiceDetailsClient) |  no  |  |
 | auto_advance | boolean |  no  |  |
 | currency | string |  no  |  |
 | paid | boolean |  no  |  |
 | attemp | number |  no  |  |
 | _id | string |  no  |  |
 | collection_method | string |  no  |  |
 | subscriber_id | string |  no  |  |
 | invoice_url | string |  no  |  |
 | number | string |  no  |  |
 | pg_data | string |  no  |  |
 | receipt_number | string |  no  |  |
 | statement_descriptor | string |  no  |  |
 | current_status | string |  no  |  |
 | status_trail | [[InvoiceDetailsStatusTrail](#InvoiceDetailsStatusTrail)] |  no  |  |
 | subtotal | number |  no  |  |
 | total | number |  no  |  |
 | subscription | string |  no  |  |
 | next_action_time | string |  no  |  |
 | created_at | string |  no  |  |
 | modified_at | string |  no  |  |
 | hash_identifier | string |  no  |  |
 | payment_method | [InvoicePaymentMethod](#InvoicePaymentMethod) |  no  |  |

---


 
 
 #### [InvoiceItemsPlanRecurring](#InvoiceItemsPlanRecurring)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | interval | string |  no  |  |
 | interval_count | number |  no  |  |

---


 
 
 #### [InvoiceItemsPlan](#InvoiceItemsPlan)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | recurring | [InvoiceItemsPlanRecurring](#InvoiceItemsPlanRecurring) |  no  |  |
 | is_trial_plan | boolean |  no  |  |
 | plan_group | string |  no  |  |
 | tag_lines | [string] |  no  |  |
 | currency | string |  no  |  |
 | is_active | boolean |  no  |  |
 | is_visible | boolean |  no  |  |
 | trial_period | number |  no  |  |
 | addons | [string] |  no  |  |
 | tags | [string] |  no  |  |
 | type | string |  no  |  |
 | country | string |  no  |  |
 | _id | string |  no  |  |
 | name | string |  no  |  |
 | description | string |  no  |  |
 | amount | number |  no  |  |
 | product_suite_id | string |  no  |  |
 | created_at | string |  no  |  |
 | modified_at | string |  no  |  |

---


 
 
 #### [InvoiceItemsPeriod](#InvoiceItemsPeriod)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | start | string |  no  |  |
 | end | string |  no  |  |

---


 
 
 #### [InvoiceItems](#InvoiceItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | currency | string |  no  |  |
 | plan | [InvoiceItemsPlan](#InvoiceItemsPlan) |  no  |  |
 | name | string |  no  |  |
 | quantity | number |  no  |  |
 | description | string |  no  |  |
 | period | [InvoiceItemsPeriod](#InvoiceItemsPeriod) |  no  |  |
 | unit_amount | number |  no  |  |
 | amount | number |  no  |  |
 | type | string |  no  |  |
 | invoice_id | string |  no  |  |
 | created_at | string |  no  |  |
 | modified_at | string |  no  |  |

---


 
 
 #### [Invoice](#Invoice)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | invoice | [InvoiceDetails](#InvoiceDetails) |  no  |  |
 | invoice_items | [[InvoiceItems](#InvoiceItems)] |  no  |  |

---


 
 
 #### [InvoicesDataClient](#InvoicesDataClient)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | email | string |  no  |  |
 | phone | string |  no  |  |
 | address_lines | [string] |  no  |  |

---


 
 
 #### [InvoicesDataPeriod](#InvoicesDataPeriod)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | start | string |  no  |  |
 | end | string |  no  |  |

---


 
 
 #### [InvoicesDataPaymentMethod](#InvoicesDataPaymentMethod)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | pg_payment_method_id | string |  no  |  |

---


 
 
 #### [InvoicesData](#InvoicesData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | client | [InvoicesDataClient](#InvoicesDataClient) |  no  |  |
 | auto_advance | boolean |  no  |  |
 | currency | string |  no  |  |
 | paid | boolean |  no  |  |
 | attemp | number |  no  |  |
 | collection_method | string |  no  |  |
 | subscriber_id | string |  no  |  |
 | invoice_url | string |  no  |  |
 | number | string |  no  |  |
 | pg_data | string |  no  |  |
 | period | [InvoicesDataPeriod](#InvoicesDataPeriod) |  no  |  |
 | receipt_number | string |  no  |  |
 | statement_descriptor | string |  no  |  |
 | current_status | string |  no  |  |
 | status_trail | [[InvoiceDetailsStatusTrail](#InvoiceDetailsStatusTrail)] |  no  |  |
 | subtotal | number |  no  |  |
 | total | number |  no  |  |
 | subscription | string |  no  |  |
 | next_action_time | string |  no  |  |
 | created_at | string |  no  |  |
 | modified_at | string |  no  |  |
 | hash_identifier | string |  no  |  |
 | payment_method | [InvoicesDataPaymentMethod](#InvoicesDataPaymentMethod) |  no  |  |
 | invoice_items | [[InvoiceItems](#InvoiceItems)] |  no  |  |

---


 
 
 #### [Invoices](#Invoices)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [[InvoicesData](#InvoicesData)] |  no  |  |
 | start | number |  no  |  |
 | end | number |  no  |  |
 | limit | number |  no  |  |
 | page | number |  no  |  |
 | total | number |  no  |  |

---


 
 
 #### [Phone](#Phone)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | phone_number | string |  no  |  |
 | phone_country_code | string |  no  |  |

---


 
 
 #### [SubscriptionBillingAddress](#SubscriptionBillingAddress)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country | string |  no  |  |
 | state | string |  no  |  |
 | city | string |  no  |  |
 | line1 | string |  no  |  |
 | line2 | string |  no  |  |
 | postal_code | string |  no  |  |

---


 
 
 #### [SubscriptionCustomer](#SubscriptionCustomer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | phone | [Phone](#Phone) |  no  |  |
 | billing_address | [SubscriptionBillingAddress](#SubscriptionBillingAddress) |  no  |  |
 | _id | string |  no  |  |
 | unique_id | string |  no  |  |
 | type | string |  no  |  |
 | name | string |  no  |  |
 | email | string |  no  |  |
 | created_at | string |  no  |  |
 | modified_at | string |  no  |  |
 | data | string |  no  |  |

---


 
 
 #### [SubscriptionCustomerCreate](#SubscriptionCustomerCreate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | phone | [Phone](#Phone) |  no  |  |
 | billing_address | [SubscriptionBillingAddress](#SubscriptionBillingAddress) |  no  |  |
 | unique_id | string |  no  |  |
 | type | string |  no  |  |
 | name | string |  no  |  |
 | email | string |  no  |  |

---


 
 
 #### [SubscriptionCurrentPeriod](#SubscriptionCurrentPeriod)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | start | string |  no  |  |
 | end | string |  no  |  |

---


 
 
 #### [SubscriptionPauseCollection](#SubscriptionPauseCollection)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | behavior | string |  no  |  |
 | resume_at | string |  no  |  |

---


 
 
 #### [SubscriptionTrial](#SubscriptionTrial)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | start | string |  no  |  |
 | end | string |  no  |  |

---


 
 
 #### [SubscriptionInvoiceSettings](#SubscriptionInvoiceSettings)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | generation | boolean |  no  |  |
 | charging | boolean |  no  |  |

---


 
 
 #### [Subscription](#Subscription)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current_period | [SubscriptionCurrentPeriod](#SubscriptionCurrentPeriod) |  no  |  |
 | pause_collection | [SubscriptionPauseCollection](#SubscriptionPauseCollection) |  no  |  |
 | trial | [SubscriptionTrial](#SubscriptionTrial) |  no  |  |
 | invoice_settings | [SubscriptionInvoiceSettings](#SubscriptionInvoiceSettings) |  no  |  |
 | is_active | boolean |  no  |  |
 | cancel_at_period_end | boolean |  no  |  |
 | _id | string |  no  |  |
 | subscriber_id | string |  no  |  |
 | plan_id | string |  no  |  |
 | product_suite_id | string |  no  |  |
 | plan_data | [Plan](#Plan) |  no  |  |
 | current_status | string |  no  |  |
 | collection_method | string |  no  |  |
 | created_at | string |  no  |  |
 | modified_at | string |  no  |  |
 | latest_invoice | string |  no  |  |

---


 
 
 #### [SubscriptionStatus](#SubscriptionStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_enabled | boolean |  no  |  |
 | subscription | [Subscription](#Subscription) |  no  |  |

---


 
 
 #### [SubscriptionLimitApplication](#SubscriptionLimitApplication)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean |  no  |  |
 | hard_limit | number |  no  |  |
 | soft_limit | number |  no  |  |

---


 
 
 #### [SubscriptionLimitMarketplace](#SubscriptionLimitMarketplace)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean |  no  |  |

---


 
 
 #### [SubscriptionLimitOtherPlatform](#SubscriptionLimitOtherPlatform)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean |  no  |  |

---


 
 
 #### [SubscriptionLimitTeam](#SubscriptionLimitTeam)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | limit | number |  no  |  |

---


 
 
 #### [SubscriptionLimitProducts](#SubscriptionLimitProducts)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bulk | boolean |  no  |  |
 | limit | number |  no  |  |

---


 
 
 #### [SubscriptionLimitExtensions](#SubscriptionLimitExtensions)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean |  no  |  |
 | limit | number |  no  |  |

---


 
 
 #### [SubscriptionLimitIntegrations](#SubscriptionLimitIntegrations)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean |  no  |  |
 | limit | number |  no  |  |

---


 
 
 #### [SubscriptionLimit](#SubscriptionLimit)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application | [SubscriptionLimitApplication](#SubscriptionLimitApplication) |  no  |  |
 | marketplace | [SubscriptionLimitMarketplace](#SubscriptionLimitMarketplace) |  no  |  |
 | other_platform | [SubscriptionLimitOtherPlatform](#SubscriptionLimitOtherPlatform) |  no  |  |
 | team | [SubscriptionLimitTeam](#SubscriptionLimitTeam) |  no  |  |
 | products | [SubscriptionLimitProducts](#SubscriptionLimitProducts) |  no  |  |
 | extensions | [SubscriptionLimitExtensions](#SubscriptionLimitExtensions) |  no  |  |
 | integrations | [SubscriptionLimitIntegrations](#SubscriptionLimitIntegrations) |  no  |  |
 | is_trial_plan | boolean |  no  |  |

---


 
 
 #### [SubscriptionActivateReq](#SubscriptionActivateReq)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | unique_id | string |  no  |  |
 | type | string |  no  |  |
 | product_suite | string |  no  |  |
 | plan_id | string |  no  |  |
 | payment_method | string |  no  |  |

---


 
 
 #### [SubscriptionActivateRes](#SubscriptionActivateRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  |  |
 | data | [Subscription](#Subscription) |  no  |  |

---


 
 
 #### [CancelSubscriptionReq](#CancelSubscriptionReq)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | unique_id | string |  no  |  |
 | type | string |  no  |  |
 | product_suite | string |  no  |  |
 | subscription_id | string |  no  |  |

---


 
 
 #### [CancelSubscriptionRes](#CancelSubscriptionRes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  |  |
 | data | [Subscription](#Subscription) |  no  |  |

---




