



##### [Back to Platform docs](./README.md)

## Feedback Methods
User Reviews and Rating System
* [getAttributes](#getattributes)
* [getCustomerReviews](#getcustomerreviews)
* [updateApprove](#updateapprove)
* [getHistory](#gethistory)
* [getApplicationTemplates](#getapplicationtemplates)
* [createTemplate](#createtemplate)
* [getTemplateById](#gettemplatebyid)
* [updateTemplate](#updatetemplate)
* [updateTemplateStatus](#updatetemplatestatus)



## Methods with example and description


### getAttributes
Get list of attribute data



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").feedback.getAttributes({  pageNo : value,
 pageSize : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").feedback.getAttributes({  pageNo : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNo | number | no | pagination page no |    
| pageSize | number | no | pagination page size |  



Provides a list of all attribute data.

*Returned Response:*




[FeedbackAttributes](#FeedbackAttributes)

ok




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getCustomerReviews
Get list of customer reviews [admin]



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").feedback.getCustomerReviews({  id : value,
 entityId : value,
 entityType : value,
 userId : value,
 media : value,
 rating : value,
 attributeRating : value,
 facets : value,
 sort : value,
 next : value,
 start : value,
 limit : value,
 count : value,
 pageId : value,
 pageSize : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").feedback.getCustomerReviews({  id : value,
 entityId : value,
 entityType : value,
 userId : value,
 media : value,
 rating : value,
 attributeRating : value,
 facets : value,
 sort : value,
 next : value,
 start : value,
 limit : value,
 count : value,
 pageId : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| id | string | no | review id |    
| entityId | string | no | entity id |    
| entityType | string | no | entity type |    
| userId | string | no | user id |    
| media | string | no | media type e.g. image | video | video_file | video_link |    
| rating | Array<number> | no | rating filter, 1-5 |    
| attributeRating | Array<string> | no | attribute rating filter with ma,e of attribute |    
| facets | boolean | no | facets (true|false) |    
| sort | string | no | sort by : default | top | recent |    
| next | string | no | pagination next |    
| start | string | no | pagination start |    
| limit | string | no | pagination limit |    
| count | string | no | pagination count |    
| pageId | string | no | pagination page id |    
| pageSize | number | no | pagination page size |  



The endpoint provides a list of customer reviews based on entity and provided filters

*Returned Response:*




[GetReviewResponse](#GetReviewResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### updateApprove
update approve details



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").feedback.updateApprove({  reviewId : value,
 body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").feedback.updateApprove({  reviewId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| reviewId | string | yes | review id |  
| body | [ApproveRequest](#ApproveRequest) | yes | Request body |


The is used to update approve details like status and description text

*Returned Response:*




[UpdateResponse](#UpdateResponse)

ok




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getHistory
get history details



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").feedback.getHistory({  reviewId : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").feedback.getHistory({  reviewId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| reviewId | string | yes | review id |  



The is used to get the history details like status and description text

*Returned Response:*




[Array<ActivityDump>](#Array<ActivityDump>)

ok




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getApplicationTemplates
Get list of templates



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").feedback.getApplicationTemplates({  pageId : value,
 pageSize : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").feedback.getApplicationTemplates({  pageId : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageId | string | no | pagination page id |    
| pageSize | number | no | pagination page size |  



Get all templates of application

*Returned Response:*




[TemplateGetResponse](#TemplateGetResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### createTemplate
Create a new template



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").feedback.createTemplate({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").feedback.createTemplate({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [TemplateRequestList](#TemplateRequestList) | yes | Request body |


Create a new template for review with following data:
- Enable media, rating and review
- Rating - active/inactive/selected rate choices, attributes, text on rate, comment for each rate, type
- Review - header, title, description, image and video meta, enable votes

*Returned Response:*




[InsertResponse](#InsertResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getTemplateById
Get a template by ID



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").feedback.getTemplateById({  id : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").feedback.getTemplateById({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | template id |  



Get the template for product or l3 type by ID

*Returned Response:*




[Template](#Template)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### updateTemplate
Update a template's status



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").feedback.updateTemplate({  id : value,
 body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").feedback.updateTemplate({  id : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | template id |  
| body | [UpdateTemplateRequest](#UpdateTemplateRequest) | yes | Request body |


Update existing template status, active/archive

*Returned Response:*




[UpdateResponse](#UpdateResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### updateTemplateStatus
Update a template's status



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").feedback.updateTemplateStatus({  id : value,
 body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").feedback.updateTemplateStatus({  id : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | template id |  
| body | [UpdateTemplateStatusRequest](#UpdateTemplateStatusRequest) | yes | Request body |


Update existing template status, active/archive

*Returned Response:*




[UpdateResponse](#UpdateResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---



### Schemas

 
 
 #### [Activity](#Activity)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current_state | string |  no  |  |
 | document_id | string |  no  |  |
 | previous_state | string |  no  |  |

---


 
 
 #### [ActivityDump](#ActivityDump)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | activity | [Activity](#Activity) |  no  |  |
 | created_by | [CreatedBy](#CreatedBy) |  no  |  |
 | date_meta | [DateMeta](#DateMeta) |  no  |  |
 | id | string |  no  |  |
 | type | string |  no  |  |

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


 
 
 #### [ApproveRequest](#ApproveRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | approve | boolean |  no  |  |
 | entity_type | string |  no  |  |
 | id | string |  yes  |  |
 | reason | string |  no  |  |

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
 | type | string |  no  |  |

---


 
 
 #### [EntityRequest](#EntityRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | entity_id | string |  no  |  |
 | entity_type | string |  no  |  |

---


 
 
 #### [FeedbackAttributes](#FeedbackAttributes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[Attribute](#Attribute)] |  no  |  |
 | page | [Page](#Page) |  no  |  |

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


 
 
 #### [FeedbackState](#FeedbackState)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | boolean |  no  |  |
 | archive | boolean |  no  |  |
 | media | string |  no  | image, video, any |
 | qna | boolean |  no  |  |
 | rating | boolean |  no  |  |
 | review | boolean |  no  |  |

---


 
 
 #### [GetResponse](#GetResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | string |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [GetReviewResponse](#GetReviewResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | facets | [[ReviewFacet](#ReviewFacet)] |  no  |  |
 | items | [string] |  no  |  |
 | page | [Page](#Page) |  no  |  |
 | sort | [[SortMethod](#SortMethod)] |  no  |  |

---


 
 
 #### [InsertResponse](#InsertResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | count | number |  no  |  |

---


 
 
 #### [MediaMeta](#MediaMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | max_count | number |  no  |  |
 | size | number |  no  |  |
 | type | string |  no  |  |

---


 
 
 #### [MediaMetaRequest](#MediaMetaRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | max_count | number |  yes  |  |
 | size | number |  yes  |  |

---


 
 
 #### [NumberGetResponse](#NumberGetResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [string] |  no  |  |
 | page | [Page](#Page) |  no  |  |

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


 
 
 #### [PageCursor](#PageCursor)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number |  no  |  |
 | has_next | boolean |  no  |  |
 | has_previous | boolean |  no  |  |
 | item_total | number |  no  |  |
 | next_id | string |  no  |  |
 | size | number |  yes  |  |
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


 
 
 #### [Rating](#Rating)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | attributes | [[Attribute](#Attribute)] |  no  |  |
 | attributes_slugs | [string] |  no  |  |
 | ui | [UI](#UI) |  no  |  |

---


 
 
 #### [RatingRequest](#RatingRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | attributes | [string] |  yes  |  |
 | ui | [UI](#UI) |  no  |  |

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
 | description | string |  no  |  |
 | header | string |  no  |  |
 | image_meta | [MediaMeta](#MediaMeta) |  no  |  |
 | title | string |  no  |  |
 | video_meta | [MediaMeta](#MediaMeta) |  no  |  |
 | vote_allowed | boolean |  no  |  |

---


 
 
 #### [ReviewFacet](#ReviewFacet)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display | string |  no  |  |
 | name | string |  no  |  |
 | selected | boolean |  no  |  |
 | slug | string |  no  |  |
 | type | string |  no  | rating, attributerating |

---


 
 
 #### [ReviewRequest](#ReviewRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string |  yes  |  |
 | header | string |  yes  |  |
 | image_meta | [MediaMetaRequest](#MediaMetaRequest) |  yes  |  |
 | is_vote_allowed | boolean |  yes  |  |
 | title | string |  yes  |  |
 | video_meta | [MediaMetaRequest](#MediaMetaRequest) |  yes  |  |

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
 | review | [Review](#Review) |  no  |  |
 | state | [FeedbackState](#FeedbackState) |  no  |  |
 | tags | [[TagMeta](#TagMeta)] |  no  |  |

---


 
 
 #### [TemplateGetResponse](#TemplateGetResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[Template](#Template)] |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [TemplateRequest](#TemplateRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | boolean |  yes  |  |
 | enable_media_type | string |  no  | image | video | any |
 | enable_qna | boolean |  no  |  |
 | enable_rating | boolean |  yes  |  |
 | enable_review | boolean |  yes  |  |
 | entity | [EntityRequest](#EntityRequest) |  yes  |  |
 | rating | [RatingRequest](#RatingRequest) |  yes  |  |
 | review | [ReviewRequest](#ReviewRequest) |  yes  |  |

---


 
 
 #### [TemplateRequestList](#TemplateRequestList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | template_list | [[TemplateRequest](#TemplateRequest)] |  yes  |  |

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


 
 
 #### [UpdateAttributeRequest](#UpdateAttributeRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string |  no  |  |
 | name | string |  yes  |  |
 | slug | string |  no  |  |

---


 
 
 #### [UpdateResponse](#UpdateResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | count | number |  no  |  |

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


 
 
 #### [UpdateTemplateRequest](#UpdateTemplateRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | boolean |  yes  |  |
 | enable_media_type | string |  no  | image | video | any |
 | enable_qna | boolean |  no  |  |
 | enable_rating | boolean |  yes  |  |
 | enable_review | boolean |  yes  |  |
 | entity | [EntityRequest](#EntityRequest) |  yes  |  |
 | rating | [RatingRequest](#RatingRequest) |  yes  |  |
 | review | [ReviewRequest](#ReviewRequest) |  yes  |  |

---


 
 
 #### [UpdateTemplateStatusRequest](#UpdateTemplateStatusRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | boolean |  no  |  |
 | archive | boolean |  no  |  |

---




