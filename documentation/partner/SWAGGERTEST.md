




##### [Back to Partner docs](./README.md)

## SwaggerTest Methods
Authorization configuration apis

* [testSwaggerApi](#testswaggerapi)



## Methods with example and description




### testSwaggerApi
test swagger



```javascript
// Promise
const promise = swaggerTest.testSwaggerApi({  organizationId : value });

// Async/Await
const data = await swaggerTest.testSwaggerApi({  organizationId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| organizationId | string | yes | oragnization name |  



Test swagger

*Returned Response:*




[TestResponse](#TestResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true
}
```
</details>









---



### Schemas


#### [TestResponse](#TestResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  |  |
 

---




