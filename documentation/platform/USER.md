




##### [Back to Platform docs](./README.md)

## User Methods
Authentication Service

* [archiveUser](#archiveuser)
* [blockOrUnblockUsers](#blockorunblockusers)
* [createUser](#createuser)
* [createUserGroup](#createusergroup)
* [createUserSession](#createusersession)
* [deleteActiveSessions](#deleteactivesessions)
* [deleteSession](#deletesession)
* [getActiveSessions](#getactivesessions)
* [getCustomers](#getcustomers)
* [getPlatformConfig](#getplatformconfig)
* [getUserGroupById](#getusergroupbyid)
* [getUserGroups](#getusergroups)
* [searchUsers](#searchusers)
* [unDeleteUser](#undeleteuser)
* [updatePlatformConfig](#updateplatformconfig)
* [updateUser](#updateuser)
* [updateUserGroup](#updateusergroup)



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
| body | [CreateUserGroupSchema](#CreateUserGroupSchema) | yes | Request body |


Use this API to create new user Group

*Returned Response:*




[UserGroupResponseSchema](#UserGroupResponseSchema)

Success. returns created User Group. `UserGroupResponseSchema` for more details.




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




[SessionDeleteResponseSchema](#SessionDeleteResponseSchema)

Success. Refer `SessionDeleteResponseSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Success</i></summary>

```json
{
  "value": {
    "items": [
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
    "items": [
      "sess:123",
      "sess:456"
    ]
  }
}
```
</details>

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
      "sess:123",
      "sess:456"
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
| q | Object | no | The search query. Mobile number or email ID of a customer. |    
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
 status : value,
 groupUid : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").user.getUserGroups({  pageNo : value,
 pageSize : value,
 name : value,
 status : value,
 groupUid : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNo | string | no | page number for pagination result |    
| pageSize | string | no | page size for pagination result |    
| name | string | no | to seartch for User Groups which contains given string in their name |    
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
    },
    {
      "is_active": true,
      "_id": "6345677535474fbb6944b7ced",
      "name": "Group 2",
      "description": "description",
      "file_url": "url2",
      "status": "pending",
      "uid": 1,
      "application_id": "000000000000000000000001",
      "created_at": "2022-10-11T12:54:13.539Z",
      "modified_at": "2022-10-11T12:54:13.539Z",
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
const promise = platformClient.application("<APPLICATION_ID>").user.searchUsers({  q : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").user.searchUsers({  q : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| q | string | no | The search query. Mobile number or email ID of a customer. |  



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

#### [AuthenticationInternalServerErrorSchema](#AuthenticationInternalServerErrorSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 

---

#### [AuthSuccess](#AuthSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | register_token | string? |  yes  |  |
 | user | [UserSchema](#UserSchema)? |  yes  |  |
 | user_exists | boolean? |  yes  |  |
 

---

#### [AuthSuccessUser](#AuthSuccessUser)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | boolean? |  yes  |  |
 | debug | [AuthSuccessUserDebug](#AuthSuccessUserDebug)? |  yes  |  |
 | emails | [AuthSuccessUserEmails](#AuthSuccessUserEmails)? |  yes  |  |
 | first_name | string? |  yes  |  |
 | last_name | string? |  yes  |  |
 

---

#### [AuthSuccessUserDebug](#AuthSuccessUserDebug)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | platform | string? |  yes  |  |
 

---

#### [AuthSuccessUserEmails](#AuthSuccessUserEmails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | boolean? |  yes  |  |
 | email | string? |  yes  |  |
 | primary | boolean? |  yes  |  |
 | verified | boolean? |  yes  |  |
 

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

#### [CodeRequestBodySchema](#CodeRequestBodySchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string? |  yes  |  |
 

---

#### [CreateUserGroupSchema](#CreateUserGroupSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string |  no  |  |
 | file_url | string |  no  |  |
 | name | string |  no  |  |
 

---

#### [CreateUserRequestSchema](#CreateUserRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | string? |  yes  |  |
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

#### [DeleteApplicationUserRequestSchema](#DeleteApplicationUserRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | otp | string? |  yes  |  |
 | reason | string? |  yes  |  |
 | reason_id | string? |  yes  |  |
 | request_id | string? |  yes  |  |
 | user_id | string? |  yes  |  |
 

---

#### [DeleteUserSuccess](#DeleteUserSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean? |  yes  |  |
 

---

#### [EditEmailRequestSchema](#EditEmailRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | string? |  yes  |  |
 

---

#### [EditMobileRequestSchema](#EditMobileRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country_code | string? |  yes  |  |
 | phone | string? |  yes  |  |
 

---

#### [EditProfileMobileSchema](#EditProfileMobileSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country_code | string? |  yes  |  |
 | phone | string? |  yes  |  |
 

---

#### [EditProfileRequestSchema](#EditProfileRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | android_hash | string? |  yes  |  |
 | country_code | string? |  yes  |  |
 | dob | string? |  yes  |  |
 | email | string? |  yes  |  |
 | first_name | string? |  yes  |  |
 | gender | string? |  yes  |  |
 | last_name | string? |  yes  |  |
 | mobile | [EditProfileMobileSchema](#EditProfileMobileSchema)? |  yes  |  |
 | profile_pic_url | string? |  yes  |  |
 | register_token | string? |  yes  |  |
 | sender | string? |  yes  |  |
 

---

#### [Email](#Email)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | boolean? |  yes  |  |
 | email | string? |  yes  |  |
 | primary | boolean? |  yes  |  |
 | verified | boolean? |  yes  |  |
 

---

#### [EmailOtpSuccess](#EmailOtpSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean? |  yes  |  |
 

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

#### [ForgotPasswordRequestSchema](#ForgotPasswordRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string? |  yes  |  |
 | password | string? |  yes  |  |
 

---

#### [FormRegisterRequestSchema](#FormRegisterRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | string? |  yes  |  |
 | first_name | string? |  yes  |  |
 | gender | string? |  yes  |  |
 | last_name | string? |  yes  |  |
 | password | string? |  yes  |  |
 | phone | [FormRegisterRequestSchemaPhone](#FormRegisterRequestSchemaPhone)? |  yes  |  |
 | register_token | string? |  yes  |  |
 

---

#### [FormRegisterRequestSchemaPhone](#FormRegisterRequestSchemaPhone)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country_code | string? |  yes  |  |
 | mobile | string? |  yes  |  |
 

---

#### [Google](#Google)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | app_id | string? |  yes  |  |
 

---

#### [HasPasswordSuccess](#HasPasswordSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | result | boolean? |  yes  |  |
 

---

#### [Login](#Login)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | otp | boolean? |  yes  |  |
 | password | boolean? |  yes  |  |
 

---

#### [LoginSuccess](#LoginSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | register_token | string? |  yes  |  |
 | request_id | string? |  yes  |  |
 | user | [UserSchema](#UserSchema)? |  yes  |  |
 

---

#### [LogoutSuccess](#LogoutSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | logout | boolean? |  yes  |  |
 

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

#### [NotFoundSchema](#NotFoundSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 

---

#### [OAuthRequestAppleSchema](#OAuthRequestAppleSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | oauth | [OAuthRequestAppleSchemaOauth](#OAuthRequestAppleSchemaOauth)? |  yes  |  |
 | profile | [OAuthRequestAppleSchemaProfile](#OAuthRequestAppleSchemaProfile)? |  yes  |  |
 | user_identifier | string? |  yes  |  |
 

---

#### [OAuthRequestAppleSchemaOauth](#OAuthRequestAppleSchemaOauth)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | identity_token | string? |  yes  |  |
 

---

#### [OAuthRequestAppleSchemaProfile](#OAuthRequestAppleSchemaProfile)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | first_name | string? |  yes  |  |
 | full_name | string? |  yes  |  |
 | last_name | string? |  yes  |  |
 

---

#### [OAuthRequestSchema](#OAuthRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_signed_in | boolean? |  yes  |  |
 | oauth2 | [OAuthRequestSchemaOauth2](#OAuthRequestSchemaOauth2)? |  yes  |  |
 | profile | [OAuthRequestSchemaProfile](#OAuthRequestSchemaProfile)? |  yes  |  |
 

---

#### [OAuthRequestSchemaOauth2](#OAuthRequestSchemaOauth2)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | access_token | string? |  yes  |  |
 | expiry | number? |  yes  |  |
 | refresh_token | string? |  yes  |  |
 

---

#### [OAuthRequestSchemaProfile](#OAuthRequestSchemaProfile)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | string? |  yes  |  |
 | first_name | string? |  yes  |  |
 | full_name | string? |  yes  |  |
 | id | string? |  yes  |  |
 | image | string? |  yes  |  |
 | last_name | string? |  yes  |  |
 

---

#### [OtpSuccess](#OtpSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country_code | string? |  yes  |  |
 | message | string? |  yes  |  |
 | mobile | string? |  yes  |  |
 | register_token | string? |  yes  |  |
 | request_id | string? |  yes  |  |
 | resend_timer | number? |  yes  |  |
 | resend_token | string? |  yes  |  |
 | success | boolean? |  yes  |  |
 

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

#### [PasswordLoginRequestSchema](#PasswordLoginRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | captcha_code | string? |  yes  |  |
 | password | string? |  yes  |  |
 | username | string? |  yes  |  |
 

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

#### [ProfileEditSuccess](#ProfileEditSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country_code | string? |  yes  |  |
 | email | string? |  yes  |  |
 | message | string? |  yes  |  |
 | mobile | string? |  yes  |  |
 | register_token | string? |  yes  |  |
 | request_id | string? |  yes  |  |
 | resend_email_token | string? |  yes  |  |
 | resend_timer | number? |  yes  |  |
 | resend_token | string? |  yes  |  |
 | success | boolean? |  yes  |  |
 | user | [UserSchema](#UserSchema)? |  yes  |  |
 | user_exists | boolean? |  yes  |  |
 | verify_email_link | boolean? |  yes  |  |
 | verify_email_otp | boolean? |  yes  |  |
 | verify_mobile_otp | boolean? |  yes  |  |
 

---

#### [ProfileEditSuccessSchema](#ProfileEditSuccessSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | string? |  yes  |  |
 | register_token | string? |  yes  |  |
 | user | string? |  yes  |  |
 | user_exists | boolean? |  yes  |  |
 | verify_email_link | boolean? |  yes  |  |
 | verify_email_otp | boolean? |  yes  |  |
 | verify_mobile_otp | boolean? |  yes  |  |
 

---

#### [RegisterFormSuccess](#RegisterFormSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country_code | string? |  yes  |  |
 | email | string? |  yes  |  |
 | message | string? |  yes  |  |
 | mobile | string? |  yes  |  |
 | register_token | string? |  yes  |  |
 | request_id | string? |  yes  |  |
 | resend_email_token | string? |  yes  |  |
 | resend_timer | number? |  yes  |  |
 | resend_token | string? |  yes  |  |
 | success | boolean? |  yes  |  |
 | user_exists | boolean? |  yes  |  |
 | verify_email_otp | boolean? |  yes  |  |
 | verify_mobile_otp | boolean? |  yes  |  |
 

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

#### [ResetPasswordSuccess](#ResetPasswordSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | string? |  yes  |  |
 

---

#### [SendEmailOtpRequestSchema](#SendEmailOtpRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action | string? |  yes  |  |
 | email | string? |  yes  |  |
 | register_token | string? |  yes  |  |
 | token | string? |  yes  |  |
 

---

#### [SendEmailVerifyLinkSuccess](#SendEmailVerifyLinkSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | verify_email_link | boolean? |  yes  |  |
 

---

#### [SendMobileOtpRequestSchema](#SendMobileOtpRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action | string? |  yes  |  |
 | android_hash | string? |  yes  |  |
 | captcha_code | string? |  yes  |  |
 | country_code | string? |  yes  |  |
 | force | string? |  yes  |  |
 | mobile | string? |  yes  |  |
 | token | string? |  yes  |  |
 

---

#### [SendMobileVerifyLinkSuccess](#SendMobileVerifyLinkSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | verify_mobile_link | boolean? |  yes  |  |
 

---

#### [SendOtpRequestSchema](#SendOtpRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | android_hash | string? |  yes  |  |
 | captcha_code | string? |  yes  |  |
 | country_code | string? |  yes  |  |
 | mobile | string? |  yes  |  |
 

---

#### [SendOtpResponse](#SendOtpResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country_code | string? |  yes  |  |
 | email | string? |  yes  |  |
 | message | string? |  yes  |  |
 | mobile | string? |  yes  |  |
 | register_token | string? |  yes  |  |
 | request_id | string? |  yes  |  |
 | resend_email_token | string? |  yes  |  |
 | resend_timer | number? |  yes  |  |
 | resend_token | string? |  yes  |  |
 | success | boolean? |  yes  |  |
 | user_exists | boolean? |  yes  |  |
 | verify_email_otp | boolean? |  yes  |  |
 | verify_mobile_otp | boolean? |  yes  |  |
 

---

#### [SendResetPasswordEmailRequestSchema](#SendResetPasswordEmailRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | captcha_code | string? |  yes  |  |
 | email | string? |  yes  |  |
 

---

#### [SendResetPasswordMobileRequestSchema](#SendResetPasswordMobileRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | captcha_code | string? |  yes  |  |
 | country_code | string? |  yes  |  |
 | mobile | string? |  yes  |  |
 

---

#### [SendVerificationLinkMobileRequestSchema](#SendVerificationLinkMobileRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | boolean? |  yes  |  |
 | country_code | string? |  yes  |  |
 | phone | string? |  yes  |  |
 | primary | boolean? |  yes  |  |
 | verified | boolean? |  yes  |  |
 

---

#### [SessionDeleteResponseSchema](#SessionDeleteResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [string]? |  yes  |  |
 

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

#### [SessionListSuccess](#SessionListSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | sessions | [string]? |  yes  |  |
 

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

#### [TokenRequestBodySchema](#TokenRequestBodySchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | token | string? |  yes  |  |
 

---

#### [UnauthenticatedSchema](#UnauthenticatedSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | authenticated | boolean? |  yes  |  |
 

---

#### [UnauthorizedSchema](#UnauthorizedSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 

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

#### [UpdatePasswordRequestSchema](#UpdatePasswordRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | new_password | string? |  yes  |  |
 | old_password | string? |  yes  |  |
 

---

#### [UpdateUserGroupSchema](#UpdateUserGroupSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string? |  yes  |  |
 | file_url | string? |  yes  |  |
 | name | string? |  yes  |  |
 

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
 | created_at | string? |  yes  |  |
 | description | string? |  yes  |  |
 | file_url | string? |  yes  |  |
 | modified_at | string? |  yes  |  |
 | name | string? |  yes  |  |
 | status | string? |  yes  |  |
 | uid | number? |  yes  |  |
 

---

#### [UserObjectSchema](#UserObjectSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | user | [UserSchema](#UserSchema)? |  yes  |  |
 

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

#### [VerifyEmailOtpRequestSchema](#VerifyEmailOtpRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action | string? |  yes  |  |
 | email | string? |  yes  |  |
 | otp | string? |  yes  |  |
 | register_token | string? |  yes  |  |
 

---

#### [VerifyEmailOTPSuccess](#VerifyEmailOTPSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | user | [UserSchema](#UserSchema)? |  yes  |  |
 | verify_email_link | boolean? |  yes  |  |
 

---

#### [VerifyEmailSuccess](#VerifyEmailSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 

---

#### [VerifyMobileOTPSuccess](#VerifyMobileOTPSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | user | [UserSchema](#UserSchema)? |  yes  |  |
 | verify_mobile_link | boolean? |  yes  |  |
 

---

#### [VerifyOtpRequestSchema](#VerifyOtpRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | otp | string? |  yes  |  |
 | register_token | string? |  yes  |  |
 | request_id | string? |  yes  |  |
 

---

#### [VerifyOtpSuccess](#VerifyOtpSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | register_token | string? |  yes  |  |
 | user | [UserSchema](#UserSchema)? |  yes  |  |
 | user_exists | boolean? |  yes  |  |
 

---




