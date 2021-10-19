



##### [Back to Application docs](./README.md)

## Feedback Methods
User Reviews and Rating System
* [createAbuseReport](#createabusereport)
* [updateAbuseReport](#updateabusereport)
* [getAbuseReports](#getabusereports)
* [getAttributes](#getattributes)
* [createAttribute](#createattribute)
* [getAttribute](#getattribute)
* [updateAttribute](#updateattribute)
* [createComment](#createcomment)
* [updateComment](#updatecomment)
* [getComments](#getcomments)
* [checkEligibility](#checkeligibility)
* [deleteMedia](#deletemedia)
* [createMedia](#createmedia)
* [updateMedia](#updatemedia)
* [getMedias](#getmedias)
* [getReviewSummaries](#getreviewsummaries)
* [createReview](#createreview)
* [updateReview](#updatereview)
* [getReviews](#getreviews)
* [getTemplates](#gettemplates)
* [createQuestion](#createquestion)
* [updateQuestion](#updatequestion)
* [getQuestionAndAnswers](#getquestionandanswers)
* [getVotes](#getvotes)
* [createVote](#createvote)
* [updateVote](#updatevote)



## Methods with example and description


### createAbuseReport
Post a new abuse request



```javascript
// Promise
const promise = feedback.createAbuseReport({  body : value });

// Async/Await
const data = await feedback.createAbuseReport({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [ReportAbuseRequest](#ReportAbuseRequest) | yes | Request body |


Use this API to report a specific entity (question/review/comment) for abuse.

*Returned Response:*




[InsertResponse](#InsertResponse)

Success. Returns an abuse ID.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### updateAbuseReport
Update abuse details



```javascript
// Promise
const promise = feedback.updateAbuseReport({  body : value });

// Async/Await
const data = await feedback.updateAbuseReport({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [UpdateAbuseStatusRequest](#UpdateAbuseStatusRequest) | yes | Request body |


Use this API to update the abuse details, i.e. status and description.

*Returned Response:*




[UpdateResponse](#UpdateResponse)

Success.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getAbuseReports
Get a list of abuse data



```javascript
// Promise
const promise = feedback.getAbuseReports({  entityId : value,
 entityType : value,
 id : value,
 pageId : value,
 pageSize : value });

// Async/Await
const data = await feedback.getAbuseReports({  entityId : value,
 entityType : value,
 id : value,
 pageId : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| entityId | string | yes | ID of the eligible entity as specified in the entity type (question ID/review ID/comment ID). |   
| entityType | string | yes | Type of entity, e.g. question, review or comment. |    
| id | string | no | abuse id |    
| pageId | string | no | Pagination page ID to retrieve next set of results. |    
| pageSize | number | no | The number of items to retrieve in each page. |  



Use this API to retrieve a list of abuse data from entity type and entity ID.

*Returned Response:*




[ReportAbuseGetResponse](#ReportAbuseGetResponse)

Success. Check the example shown below or refer `ReportAbuseGetResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getAttributes
Get a list of attribute data



```javascript
// Promise
const promise = feedback.getAttributes({  pageNo : value,
 pageSize : value });

// Async/Await
const data = await feedback.getAttributes({  pageNo : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNo | number | no | The page number to navigate through the given set of results. Default value is 1.  |    
| pageSize | number | no | The number of items to retrieve in each page. |  



Use this API to retrieve a list of all attribute data, e.g. quality, material, product fitting, packaging, etc.

*Returned Response:*




[AttributeResponse](#AttributeResponse)

Success. Check the example shown below or refer `AttributeResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### createAttribute
Add a new attribute request



```javascript
// Promise
const promise = feedback.createAttribute({  body : value });

// Async/Await
const data = await feedback.createAttribute({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [SaveAttributeRequest](#SaveAttributeRequest) | yes | Request body |


Use this API to add a new attribute (e.g. product quality/material/value for money) with its name, slug and description.

*Returned Response:*




[InsertResponse](#InsertResponse)

Success. Returns an attribute ID.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getAttribute
Get data of a single attribute



```javascript
// Promise
const promise = feedback.getAttribute({  slug : value });

// Async/Await
const data = await feedback.getAttribute({  slug : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| slug | string | yes | A short, human-readable, URL-friendly identifier of an attribute. You can get slug value from the endpoint 'service/application/feedback/v1.0/attributes'. |  



Use this API to retrieve a single attribute data from a given slug.

*Returned Response:*




[Attribute](#Attribute)

Success. Check the example shown below or refer `Attribute` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### updateAttribute
Update details of an attribute 



```javascript
// Promise
const promise = feedback.updateAttribute({  slug : value,
 body : value });

// Async/Await
const data = await feedback.updateAttribute({  slug : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| slug | string | yes | A short, human-readable, URL-friendly identifier of an attribute. You can get slug value from the endpoint 'service/application/feedback/v1.0/attributes'. |  
| body | [UpdateAttributeRequest](#UpdateAttributeRequest) | yes | Request body |


Use this API update the attribute's name and description.

*Returned Response:*




[UpdateResponse](#UpdateResponse)

Success.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### createComment
Post a new comment



```javascript
// Promise
const promise = feedback.createComment({  body : value });

// Async/Await
const data = await feedback.createComment({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CommentRequest](#CommentRequest) | yes | Request body |


Use this API to add a new comment for a specific entity.

*Returned Response:*




[InsertResponse](#InsertResponse)

Success. Returns a comment ID.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### updateComment
Update the status of a comment



```javascript
// Promise
const promise = feedback.updateComment({  body : value });

// Async/Await
const data = await feedback.updateComment({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [UpdateCommentRequest](#UpdateCommentRequest) | yes | Request body |


Use this API to update the comment status (active or approve) along with new comment if any.

*Returned Response:*




[UpdateResponse](#UpdateResponse)

Success.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getComments
Get a list of comments



```javascript
// Promise
const promise = feedback.getComments({  entityType : value,
 id : value,
 entityId : value,
 userId : value,
 pageId : value,
 pageSize : value });

// Async/Await
const data = await feedback.getComments({  entityType : value,
 id : value,
 entityId : value,
 userId : value,
 pageId : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| entityType | string | yes | Type of entity, e.g. question, review or comment. |    
| id | string | no | Comment ID |    
| entityId | string | no | ID of the eligible entity as specified in the entity type (question ID/review ID/comment ID). |    
| userId | string | no | User ID - a flag/filter to get comments for a user. |    
| pageId | string | no | Pagination page ID to retrieve next set of results. |    
| pageSize | number | no | The number of items to retrieve in each page. |  



Use this API to retrieve a list of comments for a specific entity type, e.g. products.

*Returned Response:*




[CommentGetResponse](#CommentGetResponse)

Success. Check the example shown below or refer `CommentGetResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### checkEligibility
Checks eligibility to rate and review, and shows the cloud media configuration



```javascript
// Promise
const promise = feedback.checkEligibility({  entityType : value,
 entityId : value });

// Async/Await
const data = await feedback.checkEligibility({  entityType : value,
 entityId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| entityType | string | yes | Type of entity, e.g. question, rate, review, answer, or comment. |   
| entityId | string | yes | ID of the eligible entity as specified in the entity type. |  



Use this API to check whether an entity is eligible to be rated and reviewed. Moreover, it shows the cloud media configuration too.

*Returned Response:*




[CheckEligibilityResponse](#CheckEligibilityResponse)

Success. Returns a Product object. Check the example shown below or refer `CheckEligibilityResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### deleteMedia
Delete Media



```javascript
// Promise
const promise = feedback.deleteMedia({  ids : value });

// Async/Await
const data = await feedback.deleteMedia({  ids : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| ids | Array<string> | yes | List of media ID |  



Use this API to delete media for an entity ID.

*Returned Response:*




[UpdateResponse](#UpdateResponse)

Success.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### createMedia
Add Media



```javascript
// Promise
const promise = feedback.createMedia({  body : value });

// Async/Await
const data = await feedback.createMedia({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [AddMediaListRequest](#AddMediaListRequest) | yes | Request body |


Use this API to add media to an entity, e.g. review.

*Returned Response:*




[InsertResponse](#InsertResponse)

Success. Returns media IDs.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### updateMedia
Update Media



```javascript
// Promise
const promise = feedback.updateMedia({  body : value });

// Async/Await
const data = await feedback.updateMedia({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [UpdateMediaListRequest](#UpdateMediaListRequest) | yes | Request body |


Use this API to update media (archive/approve) for an entity.

*Returned Response:*




[UpdateResponse](#UpdateResponse)

Success.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getMedias
Get Media



```javascript
// Promise
const promise = feedback.getMedias({  entityType : value,
 entityId : value,
 id : value,
 type : value,
 pageId : value,
 pageSize : value });

// Async/Await
const data = await feedback.getMedias({  entityType : value,
 entityId : value,
 id : value,
 type : value,
 pageId : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| entityType | string | yes | Type of entity, e.g. question or product. |   
| entityId | string | yes | ID of the eligible entity as specified in the entity type(question ID/product ID). |    
| id | string | no | ID of the media. |    
| type | string | no | Media type. |    
| pageId | string | no | Pagination page ID to retrieve next set of results. |    
| pageSize | number | no | The number of items to retrieve in each page. |  



Use this API to retrieve all media from an entity.

*Returned Response:*




[MediaGetResponse](#MediaGetResponse)

Success. Check the example shown below or refer `MediaGetResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getReviewSummaries
Get a review summary



```javascript
// Promise
const promise = feedback.getReviewSummaries({  entityType : value,
 entityId : value,
 id : value,
 pageId : value,
 pageSize : value });

// Async/Await
const data = await feedback.getReviewSummaries({  entityType : value,
 entityId : value,
 id : value,
 pageId : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| entityType | string | yes | Type of entity, e.g. product, delivery, seller, order placed, order delivered, application, or template. |   
| entityId | string | yes | ID of the eligible entity as specified in the entity type. |    
| id | string | no | Review summary identifier. |    
| pageId | string | no | Pagination page ID to retrieve next set of results. |    
| pageSize | number | no | The number of items to retrieve in each page. |  



Review summary gives ratings and attribute metrics of a review per entity. Use this API to retrieve the following response data: review count, rating average. 'review metrics'/'attribute rating metrics' which contains name, type, average and count.

*Returned Response:*




[ReviewMetricGetResponse](#ReviewMetricGetResponse)

Success. Check the example shown below or refer `ReviewMetricGetResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### createReview
Add customer reviews



```javascript
// Promise
const promise = feedback.createReview({  body : value });

// Async/Await
const data = await feedback.createReview({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [UpdateReviewRequest](#UpdateReviewRequest) | yes | Request body |


Use this API to add customer reviews for a specific entity along with the following data: attributes rating, entity rating, title, description, media resources and template ID.

*Returned Response:*




[UpdateResponse](#UpdateResponse)

Success. Returns a review ID.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### updateReview
Update customer reviews



```javascript
// Promise
const promise = feedback.updateReview({  body : value });

// Async/Await
const data = await feedback.updateReview({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [UpdateReviewRequest](#UpdateReviewRequest) | yes | Request body |


Use this API to update customer reviews for a specific entity along with following data: attributes rating, entity rating, title, description, media resources and template ID.

*Returned Response:*




[UpdateResponse](#UpdateResponse)

Success.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getReviews
Get list of customer reviews



```javascript
// Promise
const promise = feedback.getReviews({  entityType : value,
 entityId : value,
 id : value,
 userId : value,
 media : value,
 rating : value,
 attributeRating : value,
 facets : value,
 sort : value,
 active : value,
 approve : value,
 pageId : value,
 pageSize : value });

// Async/Await
const data = await feedback.getReviews({  entityType : value,
 entityId : value,
 id : value,
 userId : value,
 media : value,
 rating : value,
 attributeRating : value,
 facets : value,
 sort : value,
 active : value,
 approve : value,
 pageId : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| entityType | string | yes | Type of entity, e.g. product, delivery, seller, l3, order placed, order delivered, application, or template. |   
| entityId | string | yes | ID of the eligible entity as specified in the entity type. |    
| id | string | no | ID of the review. |    
| userId | string | no | ID of the user. |    
| media | string | no | media type, e.g. image | video | video_file | video_link |    
| rating | Array<number> | no | rating filter, e.g. 1-5 |    
| attributeRating | Array<string> | no | Filter for attribute rating. |    
| facets | boolean | no | This is a boolean value for enabling metadata (facets). Selecting *true* will enable facets. |    
| sort | string | no | Sort by: default | top | recent |    
| active | boolean | no | Get the active reviews. |    
| approve | boolean | no | Get the approved reviews. |    
| pageId | string | no | Pagination page ID to retrieve next set of results. |    
| pageSize | number | no | The number of items to retrieve in each page. |  



Use this API to retrieve a list of customer reviews based on entity and filters provided.

*Returned Response:*




[ReviewGetResponse](#ReviewGetResponse)

Success. Check the example shown below or refer `ReviewGetResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getTemplates
Get the feedback templates for a product or l3



```javascript
// Promise
const promise = feedback.getTemplates({  templateId : value,
 entityId : value,
 entityType : value });

// Async/Await
const data = await feedback.getTemplates({  templateId : value,
 entityId : value,
 entityType : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| templateId | string | no | ID of the feedback template. |    
| entityId | string | no | ID of the eligible entity as specified in the entity type. |    
| entityType | string | no | Type of entity, e.g. product, delivery, seller, l3, order placed, order delivered, or application. |  



Use this API to retrieve the details of the following feedback template. order, delivered, application, seller, order, placed, product

*Returned Response:*




[TemplateGetResponse](#TemplateGetResponse)

Success. Check the example shown below or refer `TemplateGetResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### createQuestion
Create a new question



```javascript
// Promise
const promise = feedback.createQuestion({  body : value });

// Async/Await
const data = await feedback.createQuestion({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CreateQNARequest](#CreateQNARequest) | yes | Request body |


Use this API to create a new question with following data- tags, text, type, choices for MCQ type questions, maximum length of answer.

*Returned Response:*




[InsertResponse](#InsertResponse)

Success. Returns a qna ID.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### updateQuestion
Update a question



```javascript
// Promise
const promise = feedback.updateQuestion({  body : value });

// Async/Await
const data = await feedback.updateQuestion({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [UpdateQNARequest](#UpdateQNARequest) | yes | Request body |


Use this API to update the status of a question, its tags and its choices.

*Returned Response:*




[UpdateResponse](#UpdateResponse)

Success.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getQuestionAndAnswers
Get a list of QnA



```javascript
// Promise
const promise = feedback.getQuestionAndAnswers({  entityType : value,
 entityId : value,
 id : value,
 userId : value,
 showAnswer : value,
 pageId : value,
 pageSize : value });

// Async/Await
const data = await feedback.getQuestionAndAnswers({  entityType : value,
 entityId : value,
 id : value,
 userId : value,
 showAnswer : value,
 pageId : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| entityType | string | yes | Type of entity, e.g. product, l3, etc. |   
| entityId | string | yes | ID of the eligible entity as specified in the entity type. |    
| id | string | no | QNA ID |    
| userId | string | no | User ID |    
| showAnswer | boolean | no | This is a boolean value. Select *true* to display answers given. |    
| pageId | string | no | Pagination page ID to retrieve next set of results. |    
| pageSize | number | no | The number of items to retrieve in each page. |  



Use this API to retrieve a list of questions and answers for a given entity.

*Returned Response:*




[QNAGetResponse](#QNAGetResponse)

Success. Check the example shown below or refer `QNAGetResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getVotes
Get a list of votes



```javascript
// Promise
const promise = feedback.getVotes({  id : value,
 refType : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await feedback.getVotes({  id : value,
 refType : value,
 pageNo : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| id | string | no | vote ID |    
| refType | string | no | Entity type, e.g. review | comment. |    
| pageNo | number | no | The page number to navigate through the given set of results. Default value is 1. |    
| pageSize | number | no | The number of items to retrieve in each page. |  



Use this API to retrieve a list of votes of a current logged in user. Votes can be filtered using `ref_type`, i.e. review | comment.

*Returned Response:*




[VoteResponse](#VoteResponse)

Success. Check the example shown below or refer `VoteResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### createVote
Create a new vote



```javascript
// Promise
const promise = feedback.createVote({  body : value });

// Async/Await
const data = await feedback.createVote({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [VoteRequest](#VoteRequest) | yes | Request body |


Use this API to create a new vote, where the action could be an upvote or a downvote. This is useful when you want to give a vote (say upvote) to a review (ref_type) of a product (entity_type).

*Returned Response:*




[InsertResponse](#InsertResponse)

Success. Returns a vote ID.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### updateVote
Update a vote



```javascript
// Promise
const promise = feedback.updateVote({  body : value });

// Async/Await
const data = await feedback.updateVote({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [UpdateVoteRequest](#UpdateVoteRequest) | yes | Request body |


Use this API to update a vote with a new action, i.e. either an upvote or a downvote.

*Returned Response:*




[UpdateResponse](#UpdateResponse)

Success.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---



### Schemas

 
 
 #### [AbuseReport](#AbuseReport)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | abused | boolean |  no  |  |
 | date_meta | [DateMeta](#DateMeta) |  no  |  |
 | description | string |  no  |  |
 | entity | [Entity](#Entity) |  no  |  |
 | id | string |  no  |  |
 | name | string |  no  |  |
 | state | [FeedbackState](#FeedbackState) |  no  |  |
 | tags | [[TagMeta](#TagMeta)] |  no  |  |

---


 
 
 #### [Access](#Access)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | answer | boolean |  no  |  |
 | ask_question | boolean |  no  |  |
 | comment | boolean |  no  |  |
 | rnr | boolean |  no  |  |

---


 
 
 #### [AddMediaListRequest](#AddMediaListRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | entity_id | string |  no  |  |
 | entity_type | string |  no  |  |
 | media_list | [[AddMediaRequest](#AddMediaRequest)] |  no  |  |
 | ref_id | string |  no  |  |
 | ref_type | string |  no  |  |

---


 
 
 #### [AddMediaRequest](#AddMediaRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cloud_id | string |  no  |  |
 | cloud_name | string |  no  |  |
 | cloud_provider | string |  no  |  |
 | entity_id | string |  no  |  |
 | entity_type | string |  no  |  |
 | media_url | string |  no  |  |
 | ref_id | string |  no  |  |
 | ref_type | string |  no  |  |
 | tags | [string] |  no  |  |
 | thumbnail_url | string |  no  |  |
 | type | string |  no  |  |

---


 
 
 #### [ApplicationSchema](#ApplicationSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |

---


 
 
 #### [Attribute](#Attribute)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | date_meta | [DateMeta](#DateMeta) |  no  |  |
 | description | string |  no  |  |
 | id | string |  no  |  |
 | name | string |  no  |  |
 | slug | string |  no  |  |
 | tags | [[TagMeta](#TagMeta)] |  no  |  |

---


 
 
 #### [AttributeObject](#AttributeObject)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string |  no  |  |
 | name | string |  yes  |  |
 | slug | string |  no  |  |
 | title | string |  no  |  |
 | type | string |  yes  |  |
 | value | number |  yes  |  |

---


 
 
 #### [AttributeResponse](#AttributeResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[Attribute](#Attribute)] |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [AutoDetectors](#AutoDetectors)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | text_detector | [[TextDetector](#TextDetector)] |  no  |  |

---


 
 
 #### [CheckEligibilityResponse](#CheckEligibilityResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | access | [Access](#Access) |  no  |  |

---


 
 
 #### [Cloud](#Cloud)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | name | string |  no  |  |
 | provider | string |  no  |  |

---


 
 
 #### [Comment](#Comment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | comment | [string] |  no  |  |
 | date_meta | [DateMeta](#DateMeta) |  no  |  |
 | entity | [Entity](#Entity) |  no  |  |
 | id | string |  no  |  |
 | name | string |  no  |  |
 | state | [FeedbackState](#FeedbackState) |  no  |  |
 | tags | [[TagMeta](#TagMeta)] |  no  |  |
 | vote_count | [VoteCount](#VoteCount) |  no  |  |

---


 
 
 #### [CommentGetResponse](#CommentGetResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[Comment](#Comment)] |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [CommentRequest](#CommentRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | comment | [string] |  yes  |  |
 | entity_id | string |  yes  |  |
 | entity_type | string |  yes  |  |

---


 
 
 #### [CreateQNARequest](#CreateQNARequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | choices | [string] |  no  |  |
 | entity_id | string |  yes  |  |
 | entity_type | string |  yes  |  |
 | max_len | number |  no  |  |
 | sort_priority | number |  no  |  |
 | tags | [string] |  no  |  |
 | text | string |  yes  |  |
 | type | string |  no  |  |

---


 
 
 #### [CreatedBy](#CreatedBy)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | name | string |  no  |  |
 | tags | [[TagMeta](#TagMeta)] |  no  |  |

---


 
 
 #### [CursorGetResponse](#CursorGetResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [string] |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [CustomerReview](#CustomerReview)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | auto_detectors | [AutoDetectors](#AutoDetectors) |  no  |  |
 | created_on | string |  no  |  |
 | device_meta | [DeviceMeta](#DeviceMeta) |  no  |  |
 | entity | [ProductEntity](#ProductEntity) |  no  |  |
 | id | string |  no  |  |
 | location_meta | [LocationMeta](#LocationMeta) |  no  |  |
 | modified_on | string |  no  |  |
 | name | string |  no  |  |
 | rating | [ReviewRating](#ReviewRating) |  no  |  |
 | review | [Review](#Review) |  no  |  |
 | slug | string |  no  |  |
 | state | [State](#State) |  no  |  |
 | tags | [[TagMeta](#TagMeta)] |  no  |  |
 | template | [Template](#Template) |  no  |  |
 | vote_count | [VoteCount](#VoteCount) |  no  |  |

---


 
 
 #### [DateMeta](#DateMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | created_on | string |  no  |  |
 | modified_on | string |  no  |  |

---


 
 
 #### [DeviceMeta](#DeviceMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | app_version | string |  no  |  |
 | platform | string |  no  |  |

---


 
 
 #### [Entity](#Entity)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | type | string |  no  | entity type could be review/comment/ |

---


 
 
 #### [EntityMeta](#EntityMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | order_id | string |  no  |  |
 | type | string |  no  | product, delivery,seller |

---


 
 
 #### [FeedbackError](#FeedbackError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string |  no  |  |
 | exception | string |  no  |  |
 | info | string |  no  |  |
 | message | string |  no  |  |
 | meta | string |  no  |  |
 | request_id | string |  no  |  |
 | stack_trace | string |  no  |  |
 | status | number |  no  |  |

---


 
 
 #### [FeedbackMedia](#FeedbackMedia)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application | [ApplicationSchema](#ApplicationSchema) |  no  |  |
 | cloud | [Cloud](#Cloud) |  no  |  |
 | created_by | [CreatedBy](#CreatedBy) |  no  |  |
 | date_meta | [DateMeta](#DateMeta) |  no  |  |
 | description | string |  no  |  |
 | entity | [Entity](#Entity) |  no  |  |
 | id | string |  no  |  |
 | name | string |  no  |  |
 | reference | [Entity](#Entity) |  no  |  |
 | state | [MediaState](#MediaState) |  no  |  |
 | tags | [[TagMeta](#TagMeta)] |  no  |  |
 | type | string |  no  |  |
 | url | [Url](#Url) |  no  |  |

---


 
 
 #### [FeedbackState](#FeedbackState)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | boolean |  no  |  |
 | archive | boolean |  no  |  |
 | media | string |  no  |  |
 | qna | boolean |  no  |  |
 | rating | boolean |  no  |  |
 | review | boolean |  no  |  |

---


 
 
 #### [GeoLoc](#GeoLoc)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | latitude | string |  no  |  |
 | longitude | string |  no  |  |

---


 
 
 #### [InsertResponse](#InsertResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | ids | string |  no  |  |

---


 
 
 #### [Location](#Location)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country_code | string |  no  |  |
 | flag_url | string |  no  |  |
 | geo_loc | [GeoLoc](#GeoLoc) |  no  |  |
 | name | string |  no  |  |
 | pincode | string |  no  |  |

---


 
 
 #### [LocationMeta](#LocationMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | demand | [Location](#Location) |  no  |  |
 | supply | [Location](#Location) |  no  |  |

---


 
 
 #### [MediaGetResponse](#MediaGetResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[FeedbackMedia](#FeedbackMedia)] |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [MediaMeta](#MediaMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cloud | [Cloud](#Cloud) |  no  |  |
 | comment | [string] |  no  |  |
 | description | string |  no  |  |
 | id | string |  no  |  |
 | type | string |  no  |  |
 | url | [Url](#Url) |  no  |  |

---


 
 
 #### [MediaState](#MediaState)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | approve | boolean |  no  |  |
 | archive | boolean |  no  |  |

---


 
 
 #### [NumberGetResponse](#NumberGetResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [string] |  no  |  |
 | page | [PageNumber](#PageNumber) |  no  |  |

---


 
 
 #### [Page](#Page)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number |  no  |  |
 | has_next | boolean |  no  |  |
 | has_previous | boolean |  no  |  |
 | item_total | number |  no  |  |
 | next_id | string |  no  |  |
 | size | number |  no  |  |
 | type | string |  yes  |  |

---


 
 
 #### [PageNumber](#PageNumber)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number |  no  |  |
 | has_next | boolean |  no  |  |
 | item_total | number |  no  |  |
 | size | number |  no  |  |
 | type | string |  no  |  |

---


 
 
 #### [ProductEntity](#ProductEntity)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  | For products, ID will be product ID, delivery, ID will be order id, seller ID will be company ID |
 | meta | [EntityMeta](#EntityMeta) |  no  |  |
 | type | string |  no  | product, delivery, seller, app, order |

---


 
 
 #### [QNA](#QNA)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | comments | [[Comment](#Comment)] |  no  |  |
 | date_meta | [DateMeta](#DateMeta) |  no  |  |
 | entity | [Entity](#Entity) |  no  |  |
 | id | string |  no  |  |
 | name | string |  no  |  |
 | question | [Question](#Question) |  no  |  |
 | state | [QNAState](#QNAState) |  no  |  |
 | tag | [string] |  no  |  |
 | tags | [[TagMeta](#TagMeta)] |  no  |  |

---


 
 
 #### [QNAGetResponse](#QNAGetResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[QNA](#QNA)] |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [QNAState](#QNAState)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | boolean |  no  |  |
 | approve | boolean |  no  |  |
 | modify | boolean |  no  |  |
 | priority | number |  no  |  |
 | reply | boolean |  no  |  |
 | vote | boolean |  no  |  |

---


 
 
 #### [Question](#Question)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | choices | [string] |  no  |  |
 | max_len | number |  no  |  |
 | text | string |  no  |  |
 | type | string |  no  | type could be single_choice/text/multi_choice |

---


 
 
 #### [Rating](#Rating)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | attributes | [[Attribute](#Attribute)] |  no  |  |
 | attributes_slugs | [string] |  no  |  |
 | ui | [UI](#UI) |  no  |  |

---


 
 
 #### [RatingGetResponse](#RatingGetResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[Rating](#Rating)] |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [RatingMetric](#RatingMetric)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | avg | number |  no  |  |
 | count | number |  no  | Valuetype could be average, count |
 | name | string |  no  | Attribute name like Camera, Battery and rating name like a number 5,4,3 |
 | slug | string |  no  |  |
 | type | string |  no  | type could be attribute_rating and rating |

---


 
 
 #### [ReportAbuseGetResponse](#ReportAbuseGetResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[AbuseReport](#AbuseReport)] |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [ReportAbuseRequest](#ReportAbuseRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string |  no  |  |
 | entity_id | string |  yes  |  |
 | entity_type | string |  yes  |  |

---


 
 
 #### [Review](#Review)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | answer_ids | [string] |  no  |  |
 | comments | [string] |  no  |  |
 | description | string |  no  |  |
 | media_meta | [[MediaMeta](#MediaMeta)] |  no  |  |
 | title | string |  no  |  |

---


 
 
 #### [ReviewFacet](#ReviewFacet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display | string |  no  |  |
 | name | string |  no  |  |
 | selected | boolean |  no  |  |
 | slug | string |  no  |  |
 | type | string |  no  | rating, attribute rating |

---


 
 
 #### [ReviewGetResponse](#ReviewGetResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | facets | [[ReviewFacet](#ReviewFacet)] |  no  |  |
 | items | [[CustomerReview](#CustomerReview)] |  no  |  |
 | page | [Page](#Page) |  no  |  |
 | sort | [[SortMethod](#SortMethod)] |  no  |  |

---


 
 
 #### [ReviewMediaMeta](#ReviewMediaMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | max_count | number |  no  |  |
 | size | number |  no  |  |
 | type | string |  no  |  |

---


 
 
 #### [ReviewMetric](#ReviewMetric)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | attribute_metric | [[RatingMetric](#RatingMetric)] |  no  |  |
 | created_on | string |  no  |  |
 | entity | [Entity](#Entity) |  no  | entity could be product, seller, delivery |
 | id | string |  no  |  |
 | modified_on | string |  no  |  |
 | rating_avg | number |  no  |  |
 | rating_count | number |  no  | total rating count |
 | rating_metric | [[RatingMetric](#RatingMetric)] |  no  |  |
 | review_count | number |  no  | total review count |

---


 
 
 #### [ReviewMetricGetResponse](#ReviewMetricGetResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[ReviewMetric](#ReviewMetric)] |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [ReviewRating](#ReviewRating)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | attributes | [[AttributeObject](#AttributeObject)] |  no  |  |
 | value | number |  no  |  |

---


 
 
 #### [SaveAttributeRequest](#SaveAttributeRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string |  no  |  |
 | name | string |  yes  |  |
 | slug | string |  yes  |  |

---


 
 
 #### [SortMethod](#SortMethod)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | selected | boolean |  no  |  |
 | type | string |  no  |  |

---


 
 
 #### [State](#State)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | boolean |  no  |  |
 | approve | boolean |  no  |  |
 | auto_decided | boolean |  no  |  |
 | status | number |  no  |  |

---


 
 
 #### [TagMeta](#TagMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | media | [[MediaMeta](#MediaMeta)] |  no  |  |
 | name | string |  no  |  |
 | type | string |  no  |  |

---


 
 
 #### [Template](#Template)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | date_meta | [DateMeta](#DateMeta) |  no  |  |
 | entity | [Entity](#Entity) |  no  |  |
 | id | string |  no  |  |
 | name | string |  no  |  |
 | rating | [Rating](#Rating) |  no  |  |
 | review | [TemplateReview](#TemplateReview) |  no  |  |
 | state | [FeedbackState](#FeedbackState) |  no  |  |

---


 
 
 #### [TemplateGetResponse](#TemplateGetResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[Template](#Template)] |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [TemplateReview](#TemplateReview)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string |  no  |  |
 | header | string |  no  |  |
 | image_meta | [ReviewMediaMeta](#ReviewMediaMeta) |  no  |  |
 | title | string |  no  |  |
 | video_meta | [ReviewMediaMeta](#ReviewMediaMeta) |  no  |  |
 | vote_allowed | boolean |  no  |  |

---


 
 
 #### [TextDetector](#TextDetector)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | confidence | number |  no  |  |
 | text | string |  no  |  |
 | text_class | string |  no  |  |
 | text_type | string |  no  |  |

---


 
 
 #### [UI](#UI)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | feedback_question | [string] |  no  |  |
 | icon | [UIIcon](#UIIcon) |  no  |  |
 | text | [string] |  no  |  |
 | type | string |  no  | star | images | gifs | smileys |

---


 
 
 #### [UIIcon](#UIIcon)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | string |  no  |  |
 | inactive | string |  no  |  |
 | selected | [string] |  no  |  |

---


 
 
 #### [UpdateAbuseStatusRequest](#UpdateAbuseStatusRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | abusive | boolean |  no  |  |
 | active | boolean |  no  |  |
 | approve | boolean |  no  |  |
 | description | string |  no  |  |
 | entity_id | string |  no  |  |
 | entity_type | string |  no  |  |
 | id | string |  no  |  |

---


 
 
 #### [UpdateAttributeRequest](#UpdateAttributeRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string |  no  |  |
 | name | string |  yes  |  |
 | slug | string |  no  |  |

---


 
 
 #### [UpdateCommentRequest](#UpdateCommentRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | boolean |  no  |  |
 | approve | boolean |  no  |  |
 | comment | [string] |  yes  |  |
 | id | string |  yes  |  |

---


 
 
 #### [UpdateMediaListRequest](#UpdateMediaListRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | approve | boolean |  no  |  |
 | archive | boolean |  no  |  |
 | entity_type | string |  no  |  |
 | ids | [string] |  no  |  |

---


 
 
 #### [UpdateQNARequest](#UpdateQNARequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | boolean |  no  |  |
 | approve | boolean |  no  |  |
 | choices | [string] |  no  |  |
 | id | string |  no  |  |
 | tags | [string] |  no  |  |

---


 
 
 #### [UpdateResponse](#UpdateResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |

---


 
 
 #### [UpdateReviewRequest](#UpdateReviewRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | boolean |  no  |  |
 | application | string |  no  |  |
 | approve | boolean |  no  |  |
 | archive | boolean |  no  |  |
 | attributes_rating | [[AttributeObject](#AttributeObject)] |  no  |  |
 | description | string |  no  |  |
 | device_meta | [DeviceMeta](#DeviceMeta) |  no  |  |
 | entity_id | string |  no  |  |
 | entity_type | string |  no  |  |
 | media_resource | [[MediaMeta](#MediaMeta)] |  no  |  |
 | rating | number |  no  |  |
 | review_id | string |  no  |  |
 | template_id | string |  no  |  |
 | title | string |  no  |  |

---


 
 
 #### [UpdateVoteRequest](#UpdateVoteRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action | string |  no  |  |
 | active | boolean |  no  |  |
 | id | string |  no  |  |
 | ref_id | string |  no  |  |
 | ref_type | string |  no  |  |

---


 
 
 #### [Url](#Url)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | main | string |  no  |  |
 | thumbnail | string |  no  |  |

---


 
 
 #### [Vote](#Vote)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action | string |  no  | upvote and downvote |
 | date_meta | [DateMeta](#DateMeta) |  no  |  |
 | entity | [Entity](#Entity) |  no  |  |
 | id | string |  no  |  |
 | name | string |  no  |  |
 | reference | [Entity](#Entity) |  no  | review | comment |
 | state | [FeedbackState](#FeedbackState) |  no  |  |
 | tags | [[TagMeta](#TagMeta)] |  no  |  |

---


 
 
 #### [VoteCount](#VoteCount)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | downvote | number |  no  |  |
 | upvote | number |  no  |  |

---


 
 
 #### [VoteRequest](#VoteRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action | string |  no  |  |
 | entity_id | string |  no  |  |
 | entity_type | string |  no  |  |
 | ref_id | string |  no  |  |
 | ref_type | string |  no  | review | comment |

---


 
 
 #### [VoteResponse](#VoteResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[Vote](#Vote)] |  no  |  |
 | page | [Page](#Page) |  no  |  |

---




