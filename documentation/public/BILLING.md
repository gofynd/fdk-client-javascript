




##### [Back to Public docs](./README.md)

## Billing Methods
Handle public plans


Default
* [getPlanDetails](#getplandetails)
* [getStandardPlans](#getstandardplans)




## Methods with example and description





### getPlanDetails
Get plan details



```javascript
// Promise
const promise = publicClient.billing.getPlanDetails({  planId : value });

// Async/Await
const data = await publicClient.billing.getPlanDetails({  planId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| planId | string | yes | Plan unique id. |  



Get plan details.


*Returned Response:*




[PlanDetails](#PlanDetails)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getStandardPlans
Get Standard/Public Plans



```javascript
// Promise
const promise = publicClient.billing.getStandardPlans({  platformType : value });

// Async/Await
const data = await publicClient.billing.getStandardPlans({  platformType : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| platformType | string | yes | The type of platform for which plans are requested. |  



Get Standard/Public Plans.


*Returned Response:*




[DetailList](#DetailList)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---




### Schemas


#### [ComponentsSchema](#ComponentsSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | config | [PlanConfig](#PlanConfig)? |  yes  |  |
 | description | string? |  yes  |  |
 | display_text | string? |  yes  |  |
 | group | string? |  yes  |  |
 | icon | string? |  yes  |  |
 | is_active | boolean? |  yes  |  |
 | links | string? |  yes  |  |
 | name | string? |  yes  |  |
 | slug | string? |  yes  |  |
 

---

#### [CreditLine](#CreditLine)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_active | boolean? |  yes  |  |
 

---

#### [DetailList](#DetailList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | component_groups | [string]? |  yes  |  |
 | plans | [[Plan](#Plan)]? |  yes  |  |
 | trial_plan | [Plan](#Plan)? |  yes  |  |
 

---

#### [FeatureConfig](#FeatureConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enabled | boolean? |  yes  |  |
 

---

#### [InternalServerError](#InternalServerError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string? |  yes  | Error code |
 | message | string? |  yes  | Internal server Server error |
 

---

#### [OneTimeFees](#OneTimeFees)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | developement | number? |  yes  |  |
 | marketing | number? |  yes  |  |
 

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

#### [PlanConfig](#PlanConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | component_id | string? |  yes  |  |
 | created_at | string? |  yes  |  |
 | display_text | string? |  yes  |  |
 | feature_config | [FeatureConfig](#FeatureConfig)? |  yes  |  |
 | is_active | boolean? |  yes  |  |
 | is_default | boolean? |  yes  |  |
 | modified_at | string? |  yes  |  |
 | processing_type | string? |  yes  |  |
 | tags | [string]? |  yes  |  |
 

---

#### [PlanDetails](#PlanDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | addons | [string]? |  yes  |  |
 | amount | number? |  yes  |  |
 | components | [[ComponentsSchema](#ComponentsSchema)]? |  yes  |  |
 | country | string? |  yes  |  |
 | created_at | string? |  yes  |  |
 | credit_line | [CreditLine](#CreditLine)? |  yes  |  |
 | currency | string? |  yes  |  |
 | current_status | string? |  yes  |  |
 | description | string? |  yes  |  |
 | is_active | boolean? |  yes  |  |
 | is_trial_plan | boolean? |  yes  |  |
 | is_visible | boolean? |  yes  |  |
 | meta | [PlanMeta](#PlanMeta)? |  yes  |  |
 | modified_at | string? |  yes  |  |
 | name | string? |  yes  |  |
 | one_time_fees | [OneTimeFees](#OneTimeFees)? |  yes  |  |
 | plan_group | string? |  yes  |  |
 | product_suite_id | string? |  yes  |  |
 | recurring | [PlanRecurring](#PlanRecurring)? |  yes  |  |
 | tag_lines | [string]? |  yes  |  |
 | tags | [string]? |  yes  |  |
 | taxation | [PlanTaxation](#PlanTaxation)? |  yes  |  |
 | trial_period | number? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [PlanMeta](#PlanMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | plan_platform_display_name | string? |  yes  |  |
 

---

#### [PlanRecurring](#PlanRecurring)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | interval | string? |  yes  |  |
 | interval_count | number? |  yes  |  |
 

---

#### [PlanTaxation](#PlanTaxation)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | gst | number? |  yes  |  |
 

---




