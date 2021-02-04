# FDK Application Front API Documentaion


* [Billing](#Billing) -  

----
----

### Classes and Methods


* [Billing](#Billing)
  * [Billing#getPublicPlanDetailedList](#billinggetpublicplandetailedlist)
  * [Billing#getPublicPlanDetailedById](#billinggetpublicplandetailedbyid)
  * [Billing#getPublicPlanList](#billinggetpublicplanlist)
 

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
Get all public visible plans

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
| plan_id | string |  | 

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



---
---
