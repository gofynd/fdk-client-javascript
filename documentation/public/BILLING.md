




##### [Back to Public docs](./README.md)

## Billing Methods
Handle public plans


Default
* [getStandardPlans](#getstandardplans)




## Methods with example and description





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


#### [DetailList](#DetailList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | component_groups | [string]? |  yes  |  |
 | plans | [[Plan](#Plan)]? |  yes  |  |
 | trial_plan | [Plan](#Plan)? |  yes  |  |
 

---

#### [InternalServerError](#InternalServerError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string? |  yes  | Error code |
 | message | string? |  yes  | Internal server Server error |
 

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




