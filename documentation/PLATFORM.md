# FDK Application Front API Documentaion


* [Billing](#Billing) - Handle platform subscription 

----
----

### Classes and Methods


* [Billing](#Billing)
  * [Billing#getPublicPlanDetailedList](#billinggetpublicplandetailedlist)
  * [Billing#getPublicPlanDetailedById](#billinggetpublicplandetailedbyid)
  * [Billing#getPublicPlanList](#billinggetpublicplanlist)
  * [Billing#getCustomerDetail](#billinggetcustomerdetail)
  * [Billing#upsertCustomerDetail](#billingupsertcustomerdetail)
  * [Billing#getSubscription](#billinggetsubscription)
  * [Billing#getFeatureLimitConfig](#billinggetfeaturelimitconfig)
  * [Billing#activateSubscriptionPlan](#billingactivatesubscriptionplan)
  * [Billing#cancelSubscriptionPlan](#billingcancelsubscriptionplan)
 

---
---



## Billing

```javascript
const { Configuration, Billing } = require('fdk-client-nodejs/platform')
const conf = new Configuration({
    OAuth2Token: "5ljdffg191e810c19729de860ea"
});
const billing = new Billing(conf);

```


#### Billing#getPublicPlanDetailedList
Get all public visible plans with detailed componet data

```javascript
// Promise
const promise = billing.getPublicPlanDetailedList(, );

// Async/Await
const data = await billing.getPublicPlanDetailedList(, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
|  |  |  | 


Get all public visible plans with detailed componet data


---


#### Billing#getPublicPlanDetailedById
Get plan details by id

```javascript
// Promise
const promise = billing.getPublicPlanDetailedById(plan_id, );

// Async/Await
const data = await billing.getPublicPlanDetailedById(plan_id, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| plan_id | string | Plan Id | 


Get Plan detaild with component data by plan_id.


---


#### Billing#getPublicPlanList
Get all public visible plans

```javascript
// Promise
const promise = billing.getPublicPlanList(, );

// Async/Await
const data = await billing.getPublicPlanList(, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
|  |  |  | 


Get all public visible plans


---


#### Billing#getCustomerDetail
Get subscription customer detail

```javascript
// Promise
const promise = billing.getCustomerDetail(, , );

// Async/Await
const data = await billing.getCustomerDetail(, , );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
|  |  |  | 
|  |  |  | 


Get subscription customer detail.


---


#### Billing#upsertCustomerDetail
Upsert subscription customer detail

```javascript
// Promise
const promise = billing.upsertCustomerDetail();

// Async/Await
const data = await billing.upsertCustomerDetail();

```




Upsert subscription customer detail.


---


#### Billing#getSubscription
Get current subscription detail

```javascript
// Promise
const promise = billing.getSubscription(, , , );

// Async/Await
const data = await billing.getSubscription(, , , );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
|  |  |  | 
|  |  |  | 
|  |  |  | 


If subscription is active then it will return is_enabled true and return subscription object. If subscription is not active then is_enabled false and message.



---


#### Billing#getFeatureLimitConfig
Get subscription customer detail

```javascript
// Promise
const promise = billing.getFeatureLimitConfig(, , , );

// Async/Await
const data = await billing.getFeatureLimitConfig(, , , );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
|  |  |  | 
|  |  |  | 
|  |  |  | 


Get subscription customer detail.


---


#### Billing#activateSubscriptionPlan
Activate subscription

```javascript
// Promise
const promise = billing.activateSubscriptionPlan();

// Async/Await
const data = await billing.activateSubscriptionPlan();

```




It will activate subscription plan for customer


---


#### Billing#cancelSubscriptionPlan
Cancel subscription

```javascript
// Promise
const promise = billing.cancelSubscriptionPlan();

// Async/Await
const data = await billing.cancelSubscriptionPlan();

```




It will cancel current active subscription.


---



---
---
