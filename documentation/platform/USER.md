




##### [Back to Platform docs](./README.md)

## User Methods
Authentication Service


Default
* [archiveUser](#archiveuser)
* [blockOrUnblockUsers](#blockorunblockusers)
* [createUser](#createuser)
* [createUserAttributeDefinition](#createuserattributedefinition)
* [createUserGroup](#createusergroup)
* [createUserSession](#createusersession)
* [deleteActiveSessions](#deleteactivesessions)
* [deleteSession](#deletesession)
* [deleteUserAttribute](#deleteuserattribute)
* [deleteUserAttributeDefinitionById](#deleteuserattributedefinitionbyid)
* [getActiveSessions](#getactivesessions)
* [getCustomers](#getcustomers)
* [getPlatformConfig](#getplatformconfig)
* [getUserAttribute](#getuserattribute)
* [getUserAttributeById](#getuserattributebyid)
* [getUserAttributeDefinitionById](#getuserattributedefinitionbyid)
* [getUserAttributeDefinitions](#getuserattributedefinitions)
* [getUserAttributesForUser](#getuserattributesforuser)
* [getUserGroupById](#getusergroupbyid)
* [getUserGroups](#getusergroups)
* [searchUsers](#searchusers)
* [unDeleteUser](#undeleteuser)
* [updatePlatformConfig](#updateplatformconfig)
* [updateUser](#updateuser)
* [updateUserAttribute](#updateuserattribute)
* [updateUserAttributeDefinition](#updateuserattributedefinition)
* [updateUserGroup](#updateusergroup)
* [updateUserGroupPartially](#updateusergrouppartially)




## Methods with example and description





### archiveUser
archive user



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").user.archiveUser({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").user.archiveUser({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [ArchiveUserRequestSchema](#ArchiveUserRequestSchema) | yes | Request body |


archive user

*Returned Response:*




[ArchiveUserSuccess](#ArchiveUserSuccess)

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


### blockOrUnblockUsers
Block/Unblock user



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").user.blockOrUnblockUsers({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").user.blockOrUnblockUsers({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [BlockUserRequestSchema](#BlockUserRequestSchema) | yes | Request body |


Block/Unblock user

*Returned Response:*




[BlockUserSuccess](#BlockUserSuccess)

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


### createUser
Create user



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").user.createUser({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").user.createUser({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CreateUserRequestSchema](#CreateUserRequestSchema) | yes | Request body |


Create user

*Returned Response:*




[CreateUserResponseSchema](#CreateUserResponseSchema)

User create




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "user": {
    "_id": "5e68af49cfa09bf7233022f1",
    "gender": "male",
    "active": true,
    "emails": [
      {
        "active": true,
        "primary": true,
        "verified": true,
        "email": "akashmane@gofynd.com"
      },
      {
        "active": true,
        "primary": false,
        "verified": true,
        "email": "akashmane@fynd.com"
      },
      {
        "active": true,
        "primary": false,
        "verified": true,
        "email": "akashmane@uniket.store"
      }
    ],
    "external_id": "100002000036789",
    "account_type": "user",
    "first_name": "Akash",
    "last_name": "Mane",
    "phone_numbers": [
      {
        "active": true,
        "primary": true,
        "verified": true,
        "phone": "8652523958",
        "country_code": 91
      }
    ],
    "meta": {},
    "created_at": "2020-03-11T09:28:41.982Z",
    "updated_at": "2020-03-11T09:28:41.982Z"
  }
}
```
</details>









---


### createUserAttributeDefinition
Create a User Attribute Definition



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").user.createUserAttributeDefinition({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").user.createUserAttributeDefinition({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CreateUserAttributeDefinition](#CreateUserAttributeDefinition) | yes | Request body |


Use this API to areate a new User Attribute Definition

*Returned Response:*




[UserAttributeDefinitionResponse](#UserAttributeDefinitionResponse)

Success. returns created User Attribute Definition. `UserAttributeDefinitionResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "_id": "5e68af49cfa09bf7233022f1",
  "name": "example_name",
  "slug": "example_key",
  "description": "example_description",
  "application_id": "application_id_example",
  "type": "string",
  "multi_value": false,
  "customer_editable": true,
  "encrypted": false,
  "pinned": true,
  "pin_order": 2,
  "validations": [
    {
      "type": "min",
      "value": 1
    }
  ],
  "is_locked": false,
  "created_by": "5f6d1d7774e48a04969b2ea7",
  "updated_by": "5f6d1d7774e48a04969b2ea7",
  "created_at": "2023-10-17T10:00:00Z",
  "modified_at": "2023-10-17T10:05:00Z"
}
```
</details>









---


### createUserGroup
Create an User Group



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").user.createUserGroup({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").user.createUserGroup({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CreateUserGroup](#CreateUserGroup) | yes | Request body |


Use this API to create new user Group

*Returned Response:*




[UserGroupResponseSchema](#UserGroupResponseSchema)

Success. returns created User Group. `UserGroupResponseSchema` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "uid": 469,
  "name": "test2",
  "description": "test2",
  "application_id": "000000000000000000000004",
  "status": "pending",
  "is_active": true,
  "type": "bulk",
  "_id": "6540da9759b4f70ad817ace7",
  "file_url": "testuerl2",
  "created_at": "2023-10-31T10:44:39.809Z",
  "modified_at": "2023-10-31T10:44:39.809Z",
  "__v": 0
}
```
</details>









---


### createUserSession
Create user session



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").user.createUserSession({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").user.createUserSession({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CreateUserSessionRequestSchema](#CreateUserSessionRequestSchema) | yes | Request body |


Create user session

*Returned Response:*




[CreateUserSessionResponseSchema](#CreateUserSessionResponseSchema)

Create user session




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "domain": "vinit.com",
  "max_age": 4555555,
  "secure": true,
  "http_only": true,
  "cookie": {
    "f.session": "s%3A-LrEF5FVR8jrT5DCtCHSbAy7JFyX-f9T.uXOQwzje8nOfx4ODANrLi4yNX5fW2W5kLQ2rkBdO2xE"
  }
}
```
</details>









---


### deleteActiveSessions
Delete a list of all session for a user



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").user.deleteActiveSessions({  id : value,
 reason : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").user.deleteActiveSessions({  id : value,
 reason : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | ID of a customer. |   
| reason | string | yes | Reason to delete sessions. |  



Use this API to Delete a list of session of customers who have registered in the application.

*Returned Response:*




[SessionsDeleteResponseSchema](#SessionsDeleteResponseSchema)

Success. Refer `SessionsDeleteResponseSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Success</i></summary>

```json
{
  "value": {
    "user_id": "61f02c3dcc701256044ed6c0",
    "session_ids": [
      "sess:123",
      "sess:456"
    ]
  }
}
```
</details>

</details>









---


### deleteSession
Delete a session for a user



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").user.deleteSession({  id : value,
 sessionId : value,
 reason : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").user.deleteSession({  id : value,
 sessionId : value,
 reason : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | ID of a customer. |   
| sessionId | string | yes | Session ID of a customer. |   
| reason | string | yes | Reason for deleting session. |  



Use this API to Delete a session of customers who have registered in the application.

*Returned Response:*




[SessionDeleteResponseSchema](#SessionDeleteResponseSchema)

Success. Refer `SessionDeleteResponseSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Success</i></summary>

```json
{
  "value": {
    "user_id": "61f02c3dcc701256044ed6c0",
    "session_id": "sess:123"
  }
}
```
</details>

</details>









---


### deleteUserAttribute
delete User Attribute



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").user.deleteUserAttribute({  attributeDefId : value,
 userId : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").user.deleteUserAttribute({  attributeDefId : value,
 userId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| attributeDefId | string | yes | The unique identifier of the attribute definition. |   
| userId | string | yes | The unique identifier of the user. |  



delete User Attribute

*Returned Response:*




[SuccessMessageResponse](#SuccessMessageResponse)

Successful update




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### deleteUserAttributeDefinitionById
Delete User Attribute Definition



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").user.deleteUserAttributeDefinitionById({  attributeDefId : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").user.deleteUserAttributeDefinitionById({  attributeDefId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| attributeDefId | string | yes | The unique identifier of the attribute definition to delete. |  



Delete a user attribute definition by its unique identifier.

*Returned Response:*




[SuccessMessageResponse](#SuccessMessageResponse)

Successful Deletion




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getActiveSessions
Get a list of all session with info for a user



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").user.getActiveSessions({  id : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").user.getActiveSessions({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | ID of a customer. |  



Use this API to retrieve a list of session with info of customers who have registered in the application.

*Returned Response:*




[SessionListResponseSchema](#SessionListResponseSchema)

Success. Refer `SessionListResponseSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Success</i></summary>

```json
{
  "value": {
    "items": [
      {
        "session_id": "134",
        "user_agent": "134",
        "ip": "134",
        "domain": "134",
        "expire_in": "134"
      },
      {
        "session_id": "134",
        "user_agent": "134",
        "ip": "134",
        "domain": "134",
        "expire_in": "134"
      }
    ]
  }
}
```
</details>

</details>









---


### getCustomers
Get a list of customers



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").user.getCustomers({  q : value,
 pageSize : value,
 pageNo : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").user.getCustomers({  q : value,
 pageSize : value,
 pageNo : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| q | string | no | The search query. Mobile number or email ID of a customer. |    
| pageSize | number | no | The number of items to retrieve in each page. Default value is 10. |    
| pageNo | number | no | The page number to navigate through the given set of results. Default value is 1.  |  



Use this API to retrieve a list of customers who have registered in the application.

*Returned Response:*




[CustomerListResponseSchema](#CustomerListResponseSchema)

Success. Refer `CustomerListResponseSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Success</i></summary>

```json
{
  "value": {
    "items": [
      {
        "_id": "000000000000000023106198",
        "gender": "male",
        "active": true,
        "emails": [
          {
            "active": true,
            "primary": true,
            "verified": true,
            "email": "raaz.crzy@gmail.com"
          }
        ],
        "username": "raaz_crzy_gmail_com_63747_23106198",
        "__v": 7,
        "debug": {
          "source": "deadlock",
          "platform": "000000000000000000000003"
        },
        "dob": "1995-07-23T00:00:00.000Z",
        "id": "000000000000000023106198",
        "account_type": "user",
        "profile_pic_url": "https://hdn-1.fynd.com/user/profile/original/000000000000000023106198/1586498418772.jpg",
        "first_name": "Prince",
        "last_name": "Raj",
        "phone_numbers": [
          {
            "active": true,
            "primary": true,
            "verified": true,
            "phone": "7008963113",
            "country_code": 91
          }
        ],
        "created_at": "2019-05-15T14:07:52.872Z",
        "updated_at": "2020-09-21T06:38:41.388Z",
        "has_old_password_hash": false
      }
    ],
    "page": {
      "type": "number",
      "current": 1,
      "size": 10,
      "item_total": 0,
      "has_next": false
    }
  }
}
```
</details>

</details>









---


### getPlatformConfig
Get platform configurations



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").user.getPlatformConfig();

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").user.getPlatformConfig();
```






Use this API to get all the platform configurations such as mobile image, desktop image, social logins, and all other text.

*Returned Response:*




[PlatformSchema](#PlatformSchema)

Success. Returns a JSON object containing the all the platform configurations. Refer `PlatformSchema` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "active": true,
  "mobile_image": "",
  "desktop_image": "",
  "social": {
    "facebook": true,
    "google": true,
    "account_kit": true
  },
  "flash_card": {
    "text": "",
    "text_color": "#FFFFFF",
    "background_color": "#EF5350"
  },
  "register": true,
  "forgot_password": true,
  "login": {
    "password": true,
    "otp": true
  },
  "skip_captcha": false,
  "display": "Fynd",
  "subtext": "Login to Fynd",
  "name": "Fynd",
  "meta": {},
  "required_fields": {
    "email": {
      "is_required": false,
      "level": "hard"
    },
    "mobile": {
      "is_required": true,
      "level": "hard"
    }
  },
  "register_required_fields": {
    "email": {
      "is_required": false,
      "level": "hard"
    },
    "mobile": {
      "is_required": true,
      "level": "hard"
    }
  },
  "skip_login": false,
  "look_and_feel": {
    "background_color": "#F5F5F5",
    "card_position": "center"
  },
  "social_tokens": {
    "google": {
      "appId": "token_123"
    },
    "facebook": {
      "appId": "token_123"
    },
    "account_kit": {
      "appId": "token_123"
    }
  },
  "session_config": {
    "duration": 30,
    "type": "Days",
    "is_rolling": false
  },
  "delete_account_reasons": [
    {
      "reason_text": "test",
      "reason_id": "123",
      "show_text_area": true
    }
  ],
  "delete_account_day": 7,
  "delete_account_consent": {
    "consent_text": ""
  },
  "_id": "5e04a5e5220bc15839ad9bc0",
  "created_at": "2019-12-26T12:21:57.878Z",
  "updated_at": "2020-08-13T14:31:09.878Z",
  "__v": 0
}
```
</details>









---


### getUserAttribute
get User Attribute



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").user.getUserAttribute({  attributeDefId : value,
 userId : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").user.getUserAttribute({  attributeDefId : value,
 userId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| attributeDefId | string | yes | The unique identifier of the attribute definition. |   
| userId | string | yes | The unique identifier of the user. |  



get User Attribute

*Returned Response:*




[UserAttributeResponse](#UserAttributeResponse)

Successful update




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getUserAttributeById
Get User Attribute



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").user.getUserAttributeById({  attributeId : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").user.getUserAttributeById({  attributeId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| attributeId | string | yes | The unique identifier of the attribute to get. |  



Get User Attribute details by id

*Returned Response:*




[UserAttributeResponse](#UserAttributeResponse)

Successful update




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getUserAttributeDefinitionById
Get User Attribute Definition



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").user.getUserAttributeDefinitionById({  attributeDefId : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").user.getUserAttributeDefinitionById({  attributeDefId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| attributeDefId | string | yes | The unique identifier of the attribute definition to retrieve. |  



Get a user attribute definition by its unique identifier.

*Returned Response:*




[UserAttributeDefinition](#UserAttributeDefinition)

Successful Retrieval




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getUserAttributeDefinitions
Get User Attribute Definitions



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").user.getUserAttributeDefinitions({  excludingIds : value,
 slug : value,
 type : value,
 customerEditable : value,
 encrypted : value,
 pinned : value,
 pinOrder : value,
 isLocked : value,
 name : value,
 pageSize : value,
 pageNo : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").user.getUserAttributeDefinitions({  excludingIds : value,
 slug : value,
 type : value,
 customerEditable : value,
 encrypted : value,
 pinned : value,
 pinOrder : value,
 isLocked : value,
 name : value,
 pageSize : value,
 pageNo : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| excludingIds | string | no | Exclude attribute definitions by Ids |    
| slug | string | no | Filter by attribute slug. |    
| type | string | no | Filter by attribute type. |    
| customerEditable | boolean | no | Filter by customer_editable status. |    
| encrypted | boolean | no | Filter by encrypted status. |    
| pinned | boolean | no | Filter by pinned status. |    
| pinOrder | number | no | Filter by pin order. |    
| isLocked | boolean | no | Filter by locked status. |    
| name | string | no | Filter by attribute name using a case-insensitive regex. |    
| pageSize | number | no | The number of items to retrieve in each page. Default value is 10. |    
| pageNo | number | no | The page number to navigate through the given set of results. Default value is 1.  |  



Retrieve user attribute definitions.

*Returned Response:*




[Object](#Object)

Successful response




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getUserAttributesForUser
Get User Attributes for user



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").user.getUserAttributesForUser({  userId : value,
 pageSize : value,
 pageNo : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").user.getUserAttributesForUser({  userId : value,
 pageSize : value,
 pageNo : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| userId | string | yes | The unique identifier of the user to update. |    
| pageSize | number | no | The number of items to retrieve in each page. Default value is 10. |    
| pageNo | number | no | The page number to navigate through the given set of results. Default value is 1.  |  



Get all user attributes for user

*Returned Response:*




[Object](#Object)

Successful update




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getUserGroupById
Get an User Group by Id



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").user.getUserGroupById({  groupId : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").user.getUserGroupById({  groupId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| groupId | string | yes | Numeric ID allotted to a User Group |  



Use this API to get details of an existing user Group

*Returned Response:*




[UserGroupResponseSchema](#UserGroupResponseSchema)

Success. User Group details. `UserGroupResponseSchema` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "is_active": true,
  "_id": "6345677535474fbb6944b7ce",
  "name": "Group 1",
  "description": "description",
  "file_url": "url",
  "status": "pending",
  "uid": 1,
  "application_id": "000000000000000000000001",
  "created_at": "2022-10-11T12:54:13.539Z",
  "modified_at": "2022-10-11T12:54:13.539Z",
  "__v": 0
}
```
</details>









---


### getUserGroups
Get User Groups mathcing criteria



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").user.getUserGroups({  pageNo : value,
 pageSize : value,
 name : value,
 type : value,
 status : value,
 groupUid : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").user.getUserGroups({  pageNo : value,
 pageSize : value,
 name : value,
 type : value,
 status : value,
 groupUid : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNo | string | no | page number for pagination result |    
| pageSize | string | no | page size for pagination result |    
| name | string | no | to search for User Groups which contains given string in their name |    
| type | string | no | to search for User Groups with given type |    
| status | string | no | to get User Groups with given status |    
| groupUid | number | no | to get User Groups with given uid |  



Use this API to get User Groups mathing criteria passed in query

*Returned Response:*




[UserGroupListResponseSchema](#UserGroupListResponseSchema)

Success. User Group details. `UserGroupListResponseSchema` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "items": [
    {
      "uid": 469,
      "name": "test2",
      "description": "test2",
      "application_id": "000000000000000000000004",
      "status": "pending",
      "is_active": true,
      "type": "bulk",
      "_id": "6540da9759b4f70ad817ace7",
      "file_url": "testuerl2",
      "created_at": "2023-10-31T10:44:39.809Z",
      "modified_at": "2023-10-31T10:44:39.809Z",
      "__v": 0
    },
    {
      "uid": 460,
      "name": "test",
      "description": "test",
      "application_id": "000000000000000000000004",
      "status": "pending",
      "is_active": true,
      "type": "bulk",
      "_id": "6540da9759b4f70ad817ace8",
      "file_url": "testuerl2",
      "created_at": "2023-10-31T10:44:39.809Z",
      "modified_at": "2023-10-31T10:44:39.809Z",
      "__v": 0
    }
  ],
  "page": {
    "type": "number",
    "current": 1,
    "size": 10,
    "item_total": 0,
    "has_next": false
  }
}
```
</details>









---


### searchUsers
Search an existing user.



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").user.searchUsers({  q : value,
 query : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").user.searchUsers({  q : value,
 query : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| q | string | no | The search query. Mobile number or email ID of a customer. |    
| query | Array<string> | no | The search queries. Mobile numbers or email IDs of customers. |  



Use this API to retrieve an existing user from a list.

*Returned Response:*




[UserSearchResponseSchema](#UserSearchResponseSchema)

Success. Returns first name, last name, emails, phone number and gender of the user. Refer `UserSearchResponseSchema` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "users": [
    {
      "_id": "5e68af49cfa09bf7233022f1",
      "gender": "male",
      "active": true,
      "emails": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "email": "akashmane@gofynd.com"
        },
        {
          "active": true,
          "primary": false,
          "verified": true,
          "email": "akashmane@fynd.com"
        },
        {
          "active": true,
          "primary": false,
          "verified": true,
          "email": "akashmane@uniket.store"
        }
      ],
      "account_type": "user",
      "first_name": "Akash",
      "last_name": "Mane",
      "phone_numbers": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "phone": "8652523958",
          "country_code": 91
        }
      ],
      "created_at": "2020-03-11T09:28:41.982Z",
      "updated_at": "2020-03-11T09:28:41.982Z"
    }
  ]
}
```
</details>









---


### unDeleteUser
undelete user who deleted from application and have not elapsed the platform configured delete days



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").user.unDeleteUser({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").user.unDeleteUser({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [UnDeleteUserRequestSchema](#UnDeleteUserRequestSchema) | yes | Request body |


undelete user who deleted from application and have not elapsed the platform configured delete days

*Returned Response:*




[UnDeleteUserSuccess](#UnDeleteUserSuccess)

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


### updatePlatformConfig
Update platform configurations



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").user.updatePlatformConfig({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").user.updatePlatformConfig({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [PlatformSchema](#PlatformSchema) | yes | Request body |


Use this API to edit the existing platform configurations such as mobile image, desktop image, social logins, and all other text.

*Returned Response:*




[PlatformSchema](#PlatformSchema)

Success. Returns a JSON object with the updated platform configurations. Refer `PlatformSchema` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "active": true,
  "mobile_image": "",
  "desktop_image": "",
  "social": {
    "facebook": true,
    "google": true,
    "account_kit": true
  },
  "flash_card": {
    "text": "",
    "text_color": "#FFFFFF",
    "background_color": "#EF5350"
  },
  "register": true,
  "forgot_password": true,
  "login": {
    "password": true,
    "otp": true
  },
  "skip_captcha": false,
  "display": "Fynd",
  "subtext": "Login to Fynd",
  "name": "Fynd",
  "meta": {},
  "required_fields": {
    "email": {
      "is_required": false,
      "level": "hard"
    },
    "mobile": {
      "is_required": true,
      "level": "hard"
    }
  },
  "register_required_fields": {
    "email": {
      "is_required": false,
      "level": "hard"
    },
    "mobile": {
      "is_required": true,
      "level": "hard"
    }
  },
  "skip_login": false,
  "look_and_feel": {
    "background_color": "#F5F5F5",
    "card_position": "center"
  },
  "social_tokens": {
    "google": {
      "appId": "token_123"
    },
    "facebook": {
      "appId": "token_123"
    },
    "account_kit": {
      "appId": "token_123"
    }
  },
  "session_config": {
    "duration": 30,
    "type": "Days",
    "is_rolling": false
  },
  "delete_account_reasons": [
    {
      "reason_text": "test",
      "reason_id": "123",
      "show_text_area": true
    }
  ],
  "delete_account_day": 7,
  "delete_account_consent": {
    "consent_text": ""
  },
  "_id": "5e04a5e5220bc15839ad9bc0",
  "created_at": "2019-12-26T12:21:57.878Z",
  "updated_at": "2020-08-13T14:31:09.878Z",
  "__v": 0
}
```
</details>









---


### updateUser
Update user



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").user.updateUser({  userId : value,
 body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").user.updateUser({  userId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| userId | string | yes | User ID |  
| body | [UpdateUserRequestSchema](#UpdateUserRequestSchema) | yes | Request body |


Use this API to update user details, Note: Existing emails and phone numbers of user will be replaced directly if phone_numbers or emails field sent in request data.

*Returned Response:*




[CreateUserResponseSchema](#CreateUserResponseSchema)

User update




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "user": {
    "_id": "5e68af49cfa09bf7233022f1",
    "gender": "male",
    "active": true,
    "emails": [
      {
        "active": true,
        "primary": true,
        "verified": true,
        "email": "akashmane@gofynd.com"
      },
      {
        "active": true,
        "primary": false,
        "verified": true,
        "email": "akashmane@fynd.com"
      },
      {
        "active": true,
        "primary": false,
        "verified": true,
        "email": "akashmane@uniket.store"
      }
    ],
    "external_id": "100002000036789",
    "account_type": "user",
    "first_name": "Akash",
    "last_name": "Mane",
    "phone_numbers": [
      {
        "active": true,
        "primary": true,
        "verified": true,
        "phone": "8652523958",
        "country_code": 91
      }
    ],
    "meta": {},
    "created_at": "2020-03-11T09:28:41.982Z",
    "updated_at": "2020-03-11T09:28:41.982Z"
  }
}
```
</details>









---


### updateUserAttribute
Update Or Create User Attribute



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").user.updateUserAttribute({  attributeDefId : value,
 userId : value,
 body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").user.updateUserAttribute({  attributeDefId : value,
 userId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| attributeDefId | string | yes | The unique identifier of the attribute definition to update. |   
| userId | string | yes | The unique identifier of the user to update. |  
| body | [CreateUserAttributeRequest](#CreateUserAttributeRequest) | yes | Request body |


Update Or Create User Attribute

*Returned Response:*




[UserAttributeResponse](#UserAttributeResponse)

Successful update




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### updateUserAttributeDefinition
Update User Attribute Definition



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").user.updateUserAttributeDefinition({  attributeDefId : value,
 body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").user.updateUserAttributeDefinition({  attributeDefId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| attributeDefId | string | yes | The unique identifier of the attribute definition to update. |  
| body | [CreateUserAttributeDefinition](#CreateUserAttributeDefinition) | yes | Request body |


Update an existing user attribute definition.

*Returned Response:*




[UserAttributeDefinition](#UserAttributeDefinition)

Successful update




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### updateUserGroup
Update an User Group



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").user.updateUserGroup({  groupId : value,
 body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").user.updateUserGroup({  groupId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| groupId | string | yes | Numeric ID allotted to a User Group |  
| body | [UpdateUserGroupSchema](#UpdateUserGroupSchema) | yes | Request body |


Use this API to update an existing user Group

*Returned Response:*




[UserGroupResponseSchema](#UserGroupResponseSchema)

Success. returns updated User Group. `UserGroupResponseSchema` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "uid": 469,
  "name": "test2",
  "description": "test2",
  "application_id": "000000000000000000000004",
  "status": "pending",
  "is_active": true,
  "type": "bulk",
  "_id": "6540da9759b4f70ad817ace7",
  "file_url": "testuerl2",
  "created_at": "2023-10-31T10:44:39.809Z",
  "modified_at": "2023-10-31T10:44:39.809Z",
  "__v": 0
}
```
</details>









---


### updateUserGroupPartially
Add or Remove an user from particular user group and update user group details



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").user.updateUserGroupPartially({  groupId : value,
 body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").user.updateUserGroupPartially({  groupId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| groupId | string | yes | Numeric ID allotted to a User Group |  
| body | [PartialUserGroupUpdateSchema](#PartialUserGroupUpdateSchema) | yes | Request body |


Use this API to update user group details and add or remove an user to the user group.

*Returned Response:*




[UserGroupResponseSchema](#UserGroupResponseSchema)

Success. returns updated User Group. `UserGroupResponseSchema` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "is_active": true,
  "_id": "6345677535474fbb6944b7ce",
  "name": "Group 1",
  "description": "description",
  "file_url": "url",
  "status": "pending",
  "uid": 1,
  "application_id": "000000000000000000000001",
  "created_at": "2022-10-11T12:54:13.539Z",
  "modified_at": "2022-10-11T12:54:13.539Z",
  "__v": 0
}
```
</details>









---




### Schemas


#### [Accountkit](#Accountkit)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | app_id | string? |  yes  |  |
 

---

#### [ArchiveUserRequestSchema](#ArchiveUserRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | user_id | string? |  yes  |  |
 

---

#### [ArchiveUserSuccess](#ArchiveUserSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean? |  yes  |  |
 

---

#### [AuthenticationApiErrorSchema](#AuthenticationApiErrorSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 

---

#### [BlockUserRequestSchema](#BlockUserRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | reason | string? |  yes  |  |
 | status | boolean? |  yes  |  |
 | user_id | [string]? |  yes  |  |
 

---

#### [BlockUserSuccess](#BlockUserSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean? |  yes  |  |
 

---

#### [Conditions](#Conditions)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | key | string? |  yes  |  |
 | type | string? |  yes  |  |
 | user_attribute_definition_id | string? |  yes  |  |
 | value | string? |  yes  |  |
 

---

#### [ConditionsSchema](#ConditionsSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string? |  yes  |  |
 | user_attribute_definition_id | string? |  yes  |  |
 | value | string? |  yes  |  |
 

---

#### [CreateUserAttributeDefinition](#CreateUserAttributeDefinition)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | customer_editable | boolean? |  yes  |  |
 | default_value | string? |  yes  |  |
 | description | string? |  yes  |  |
 | encrypted | boolean? |  yes  |  |
 | multi_value | boolean? |  yes  |  |
 | name | string? |  yes  |  |
 | pin_order | number? |  yes  |  |
 | pinned | boolean? |  yes  |  |
 | slug | string? |  yes  |  |
 | type | string? |  yes  |  |
 | validations | [string]? |  yes  |  |
 

---

#### [CreateUserAttributeRequest](#CreateUserAttributeRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | attribute | string? |  yes  |  |
 | customer_overriden | boolean? |  yes  |  |
 

---

#### [CreateUserGroup](#CreateUserGroup)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | conditions | [[ConditionsSchema](#ConditionsSchema)]? |  yes  |  |
 | description | string |  no  |  |
 | file_url | string? |  yes  |  |
 | name | string |  no  |  |
 | type | string? |  yes  |  |
 

---

#### [CreateUserRequestSchema](#CreateUserRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | string? |  yes  |  |
 | external_id | string? |  yes  |  |
 | first_name | string? |  yes  |  |
 | gender | string? |  yes  |  |
 | last_name | string? |  yes  |  |
 | meta | string? |  yes  |  |
 | phone_number | string |  no  |  |
 | username | string |  no  |  |
 

---

#### [CreateUserResponseSchema](#CreateUserResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | user | [UserSchema](#UserSchema)? |  yes  |  |
 

---

#### [CreateUserSessionRequestSchema](#CreateUserSessionRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | domain | string? |  yes  |  |
 | max_age | number? |  yes  |  |
 | user_id | string? |  yes  |  |
 

---

#### [CreateUserSessionResponseSchema](#CreateUserSessionResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cookie | string? |  yes  |  |
 | domain | string? |  yes  |  |
 | http_only | boolean? |  yes  |  |
 | max_age | number? |  yes  |  |
 | secure | boolean? |  yes  |  |
 

---

#### [CustomerListResponseSchema](#CustomerListResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[UserSchema](#UserSchema)]? |  yes  |  |
 | page | [PaginationSchema](#PaginationSchema)? |  yes  |  |
 

---

#### [DeleteAccountConsent](#DeleteAccountConsent)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | consent_text | string? |  yes  |  |
 

---

#### [DeleteAccountReasons](#DeleteAccountReasons)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | reason_id | string? |  yes  |  |
 | reason_text | string? |  yes  |  |
 | show_text_area | boolean? |  yes  |  |
 

---

#### [Email](#Email)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | boolean? |  yes  |  |
 | email | string? |  yes  |  |
 | primary | boolean? |  yes  |  |
 | verified | boolean? |  yes  |  |
 

---

#### [Facebook](#Facebook)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | app_id | string? |  yes  |  |
 

---

#### [FlashCard](#FlashCard)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | background_color | string? |  yes  |  |
 | text | string? |  yes  |  |
 | text_color | string? |  yes  |  |
 

---

#### [Google](#Google)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | app_id | string? |  yes  |  |
 

---

#### [Login](#Login)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | otp | boolean? |  yes  |  |
 | password | boolean? |  yes  |  |
 

---

#### [LookAndFeel](#LookAndFeel)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | background_color | string? |  yes  |  |
 | card_position | string? |  yes  |  |
 

---

#### [MetaSchema](#MetaSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | fynd_default | boolean? |  yes  |  |
 

---

#### [PaginationSchema](#PaginationSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number? |  yes  |  |
 | has_next | boolean? |  yes  |  |
 | item_total | number? |  yes  |  |
 | size | number? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [PartialUserGroupUpdateSchema](#PartialUserGroupUpdateSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string? |  yes  |  |
 | file_url | string? |  yes  | Required property when passed type file_url. Internet reachable csv file url which will be used to fetch download data. It must have one of columns from `phone_number``, `email``, `user_id`` and must have `action` column. `action` column can have `add` or `remove` value. |
 | name | string? |  yes  |  |
 | type | string? |  yes  | Source of update to be used to update individual users. Default value is considered file_url if not passed. |
 | user_data | [[UserGroupUpdateData](#UserGroupUpdateData)]? |  yes  | Required property when passed type json. Array of user data. Must have `action` field and one of `phone_number`, `email` or `user_id` field in object |
 

---

#### [PhoneNumber](#PhoneNumber)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | boolean? |  yes  |  |
 | country_code | number? |  yes  |  |
 | phone | string? |  yes  |  |
 | primary | boolean? |  yes  |  |
 | verified | boolean? |  yes  |  |
 

---

#### [PlatformEmail](#PlatformEmail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_required | boolean? |  yes  |  |
 | level | string? |  yes  |  |
 

---

#### [PlatformMobile](#PlatformMobile)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_required | boolean? |  yes  |  |
 | level | string? |  yes  |  |
 

---

#### [PlatformSchema](#PlatformSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | active | boolean? |  yes  |  |
 | created_at | string? |  yes  |  |
 | delete_account_consent | string? |  yes  |  |
 | delete_account_day | number? |  yes  |  |
 | delete_account_reasons | [[DeleteAccountReasons](#DeleteAccountReasons)]? |  yes  |  |
 | desktop_image | string? |  yes  |  |
 | display | string? |  yes  |  |
 | flash_card | [FlashCard](#FlashCard)? |  yes  |  |
 | forgot_password | boolean? |  yes  |  |
 | login | [Login](#Login)? |  yes  |  |
 | look_and_feel | [LookAndFeel](#LookAndFeel)? |  yes  |  |
 | meta | [MetaSchema](#MetaSchema)? |  yes  |  |
 | mobile_image | string? |  yes  |  |
 | name | string? |  yes  |  |
 | register | boolean? |  yes  |  |
 | register_required_fields | [RegisterRequiredFields](#RegisterRequiredFields)? |  yes  |  |
 | required_fields | [RequiredFields](#RequiredFields)? |  yes  |  |
 | session_config | string? |  yes  |  |
 | skip_captcha | boolean? |  yes  |  |
 | skip_login | boolean? |  yes  |  |
 | social | [Social](#Social)? |  yes  |  |
 | social_tokens | [SocialTokens](#SocialTokens)? |  yes  |  |
 | subtext | string? |  yes  |  |
 | updated_at | string? |  yes  |  |
 

---

#### [RegisterRequiredFields](#RegisterRequiredFields)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | [RegisterRequiredFieldsEmail](#RegisterRequiredFieldsEmail)? |  yes  |  |
 | mobile | [RegisterRequiredFieldsMobile](#RegisterRequiredFieldsMobile)? |  yes  |  |
 

---

#### [RegisterRequiredFieldsEmail](#RegisterRequiredFieldsEmail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_required | boolean? |  yes  |  |
 | level | string? |  yes  |  |
 

---

#### [RegisterRequiredFieldsMobile](#RegisterRequiredFieldsMobile)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_required | boolean? |  yes  |  |
 | level | string? |  yes  |  |
 

---

#### [RequiredFields](#RequiredFields)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | [PlatformEmail](#PlatformEmail)? |  yes  |  |
 | mobile | [PlatformMobile](#PlatformMobile)? |  yes  |  |
 

---

#### [SessionDeleteResponseSchema](#SessionDeleteResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | session_id | string? |  yes  |  |
 | user_id | string? |  yes  |  |
 

---

#### [SessionExpiry](#SessionExpiry)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | duration | number? |  yes  |  |
 | is_rolling | boolean? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [SessionListResponseInfo](#SessionListResponseInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | domain | string? |  yes  |  |
 | expire_in | string? |  yes  |  |
 | ip | string? |  yes  |  |
 | session_id | string? |  yes  |  |
 | user_agent | string? |  yes  |  |
 

---

#### [SessionListResponseSchema](#SessionListResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[SessionListResponseInfo](#SessionListResponseInfo)]? |  yes  |  |
 

---

#### [SessionsDeleteResponseSchema](#SessionsDeleteResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | session_ids | [string]? |  yes  |  |
 | user_id | string? |  yes  |  |
 

---

#### [Social](#Social)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | account_kit | boolean? |  yes  |  |
 | apple | boolean? |  yes  |  |
 | facebook | boolean? |  yes  |  |
 | google | boolean? |  yes  |  |
 

---

#### [SocialTokens](#SocialTokens)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | account_kit | [Accountkit](#Accountkit)? |  yes  |  |
 | facebook | [Facebook](#Facebook)? |  yes  |  |
 | google | [Google](#Google)? |  yes  |  |
 

---

#### [SuccessMessageResponse](#SuccessMessageResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | string? |  yes  |  |
 

---

#### [UnDeleteUserRequestSchema](#UnDeleteUserRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | reason | string? |  yes  |  |
 | reason_id | string? |  yes  |  |
 | user_id | string? |  yes  |  |
 

---

#### [UnDeleteUserSuccess](#UnDeleteUserSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean? |  yes  |  |
 

---

#### [UpdateUserGroupSchema](#UpdateUserGroupSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | conditions | [[ConditionsSchema](#ConditionsSchema)]? |  yes  |  |
 | description | string? |  yes  |  |
 | file_url | string? |  yes  |  |
 | name | string? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [UpdateUserRequestSchema](#UpdateUserRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | emails | [[UserEmails](#UserEmails)]? |  yes  |  |
 | external_id | string? |  yes  |  |
 | first_name | string? |  yes  |  |
 | gender | string? |  yes  |  |
 | last_name | string? |  yes  |  |
 | meta | string? |  yes  |  |
 | phone_numbers | [[UserPhoneNumbers](#UserPhoneNumbers)]? |  yes  |  |
 

---

#### [UserAttributeDefinition](#UserAttributeDefinition)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | __v | number? |  yes  | The version number of the attribute. |
 | _id | string? |  yes  | The unique identifier for the attribute definition. |
 | application_id | string? |  yes  | The application ID. |
 | created_at | string? |  yes  | The creation date of the attribute. |
 | customer_editable | boolean? |  yes  | Whether the attribute is customer-editable. |
 | description | string? |  yes  | The description of the attribute. |
 | encrypted | boolean? |  yes  | Whether the attribute is encrypted. |
 | is_locked | boolean? |  yes  | Whether the attribute is locked. |
 | modified_at | string? |  yes  | The modification date of the attribute. |
 | multi_value | boolean? |  yes  | Whether the attribute supports multiple values. |
 | name | string? |  yes  | The attribute name. |
 | pin_order | number? |  yes  | The order in which the attribute is pinned. |
 | pinned | boolean? |  yes  | Whether the attribute is pinned. |
 | slug | string? |  yes  | The attribute key. |
 | type | string? |  yes  | The attribute type. |
 | validations | [string]? |  yes  |  |
 

---

#### [UserAttributeDefinitionResponse](#UserAttributeDefinitionResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  | The unique identifier for the attribute definition. |
 | application_id | string? |  yes  | The application ID. |
 | created_at | string? |  yes  | The creation date of the attribute definition. |
 | created_by | string? |  yes  | The user who created the attribute. |
 | customer_editable | boolean? |  yes  | Whether the attribute is customer-editable. |
 | description | string? |  yes  | The description of the attribute. |
 | encrypted | boolean? |  yes  | Whether the attribute is encrypted. |
 | is_locked | boolean? |  yes  | Whether the attribute is locked. |
 | modified_at | string? |  yes  | The last modification date of the attribute definition. |
 | multi_value | boolean? |  yes  | Whether the attribute supports multiple values. |
 | name | string? |  yes  | The attribute name. |
 | pin_order | number? |  yes  | The order in which the attribute is pinned. |
 | pinned | boolean? |  yes  | Whether the attribute is pinned. |
 | slug | string? |  yes  | The attribute key. |
 | type | string? |  yes  | The attribute type. |
 | updated_by | string? |  yes  | The user who last updated the attribute. |
 | validations | [[UserAttributeDefinitionValidation](#UserAttributeDefinitionValidation)]? |  yes  |  |
 

---

#### [UserAttributeDefinitionValidation](#UserAttributeDefinitionValidation)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string? |  yes  | The type of validation. |
 | value | any? |  yes  | The validation value. |
 

---

#### [UserAttributeResponse](#UserAttributeResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  | The unique identifier for the attribute definition. |
 | application_id | string? |  yes  | The application ID. |
 | attribute | string? |  yes  |  |
 | customer_overriden | boolean? |  yes  | Whether the attribute is customer-editable. |
 | name | string? |  yes  | The name of user attribute definition. |
 | type | string? |  yes  | The attribute type. |
 | updated_by | string? |  yes  |  |
 | user_id | string? |  yes  | The unique identifier for the user. |
 

---

#### [UserEmails](#UserEmails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | boolean? |  yes  |  |
 | email | string? |  yes  |  |
 | primary | boolean? |  yes  |  |
 | verified | boolean? |  yes  |  |
 

---

#### [UserGroupListResponseSchema](#UserGroupListResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[UserGroupResponseSchema](#UserGroupResponseSchema)]? |  yes  |  |
 | page | [PaginationSchema](#PaginationSchema)? |  yes  |  |
 

---

#### [UserGroupResponseSchema](#UserGroupResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | __v | number? |  yes  |  |
 | _id | string? |  yes  |  |
 | application_id | string? |  yes  |  |
 | conditions | [[Conditions](#Conditions)]? |  yes  |  |
 | created_at | string? |  yes  |  |
 | description | string? |  yes  |  |
 | error | [UserResponseErrorSchema](#UserResponseErrorSchema)? |  yes  |  |
 | file_url | string? |  yes  |  |
 | is_active | boolean? |  yes  |  |
 | modified_at | string? |  yes  |  |
 | name | string? |  yes  |  |
 | status | string? |  yes  |  |
 | type | string? |  yes  |  |
 | uid | number? |  yes  |  |
 

---

#### [UserGroupUpdateData](#UserGroupUpdateData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action | string |  no  |  |
 | email | string? |  yes  | Email of registered user |
 | phone_number | string? |  yes  | Phone number of registered user |
 | user_id | string? |  yes  | Must be valid mongodb objectid of existing user |
 

---

#### [UserPhoneNumbers](#UserPhoneNumbers)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | boolean? |  yes  |  |
 | country_code | string? |  yes  |  |
 | phone | string? |  yes  |  |
 | primary | boolean? |  yes  |  |
 | verified | boolean? |  yes  |  |
 

---

#### [UserResponseErrorSchema](#UserResponseErrorSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | count | number? |  yes  |  |
 | file_url | string? |  yes  |  |
 

---

#### [UserSchema](#UserSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | account_type | string? |  yes  |  |
 | active | boolean? |  yes  |  |
 | application_id | string? |  yes  |  |
 | created_at | string? |  yes  |  |
 | dob | string? |  yes  |  |
 | emails | [[Email](#Email)]? |  yes  |  |
 | external_id | string? |  yes  |  |
 | first_name | string? |  yes  |  |
 | gender | string? |  yes  |  |
 | last_name | string? |  yes  |  |
 | meta | string? |  yes  |  |
 | phone_numbers | [[PhoneNumber](#PhoneNumber)]? |  yes  |  |
 | profile_pic_url | string? |  yes  |  |
 | updated_at | string? |  yes  |  |
 | user_id | string? |  yes  |  |
 | username | string? |  yes  |  |
 

---

#### [UserSearchResponseSchema](#UserSearchResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | users | [[UserSchema](#UserSchema)]? |  yes  |  |
 

---




