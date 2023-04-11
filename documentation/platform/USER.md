




##### [Back to Platform docs](./README.md)

## User Methods
Authentication Service

* [archiveUser](#archiveuser)
* [blockOrUnblockUsers](#blockorunblockusers)
* [createUser](#createuser)
* [createUserGroup](#createusergroup)
* [createUserSession](#createusersession)
* [deleteActiveSessions](#deleteactivesessions)
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
const promise = client.application("<APPLICATION_ID>").user.archiveUser({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").user.archiveUser({  body : value });
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
const promise = client.application("<APPLICATION_ID>").user.blockOrUnblockUsers({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").user.blockOrUnblockUsers({  body : value });
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
const promise = client.application("<APPLICATION_ID>").user.createUser({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").user.createUser({  body : value });
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
const promise = client.application("<APPLICATION_ID>").user.createUserGroup({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").user.createUserGroup({  body : value });
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
const promise = client.application("<APPLICATION_ID>").user.createUserSession({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").user.createUserSession({  body : value });
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
const promise = client.application("<APPLICATION_ID>").user.deleteActiveSessions({  id : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").user.deleteActiveSessions({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | ID of a customer. |  



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


### getActiveSessions
Get a list of all session for a user



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").user.getActiveSessions({  id : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").user.getActiveSessions({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | ID of a customer. |  



Use this API to retrieve a list of session of customers who have registered in the application.

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
const promise = client.application("<APPLICATION_ID>").user.getCustomers({  q : value,
 pageSize : value,
 pageNo : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").user.getCustomers({  q : value,
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
const promise = client.application("<APPLICATION_ID>").user.getPlatformConfig();

// Async/Await
const data = await client.application("<APPLICATION_ID>").user.getPlatformConfig();
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
const promise = client.application("<APPLICATION_ID>").user.getUserGroupById({  groupId : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").user.getUserGroupById({  groupId : value });
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
const promise = client.application("<APPLICATION_ID>").user.getUserGroups({  pageNo : value,
 pageSize : value,
 name : value,
 status : value,
 groupUid : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").user.getUserGroups({  pageNo : value,
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
const promise = client.application("<APPLICATION_ID>").user.searchUsers({  q : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").user.searchUsers({  q : value });
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
const promise = client.application("<APPLICATION_ID>").user.unDeleteUser({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").user.unDeleteUser({  body : value });
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
const promise = client.application("<APPLICATION_ID>").user.updatePlatformConfig({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").user.updatePlatformConfig({  body : value });
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
const promise = client.application("<APPLICATION_ID>").user.updateUser({  userId : value,
 body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").user.updateUser({  userId : value,
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
const promise = client.application("<APPLICATION_ID>").user.updateUserGroup({  groupId : value,
 body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").user.updateUserGroup({  groupId : value,
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
 | ---------- | ---- | -------- | ----------- || app_id | string |  no  |  |

---

#### [ArchiveUserRequestSchema](#ArchiveUserRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || user_id | string |  no  |  |

---

#### [ArchiveUserSuccess](#ArchiveUserSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || success | boolean |  no  |  |

---

#### [AuthenticationApiErrorSchema](#AuthenticationApiErrorSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || message | string |  no  |  |

---

#### [AuthenticationInternalServerErrorSchema](#AuthenticationInternalServerErrorSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || message | string |  no  |  |

---

#### [AuthSuccess](#AuthSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || register_token | string |  no  |  || user | [UserSchema](#UserSchema) |  no  |  || user_exists | boolean |  no  |  |

---

#### [AuthSuccessUser](#AuthSuccessUser)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || active | boolean |  no  |  || debug | [AuthSuccessUserDebug](#AuthSuccessUserDebug) |  no  |  || emails | [AuthSuccessUserEmails](#AuthSuccessUserEmails) |  no  |  || first_name | string |  no  |  || last_name | string |  no  |  |

---

#### [AuthSuccessUserDebug](#AuthSuccessUserDebug)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || platform | string |  no  |  |

---

#### [AuthSuccessUserEmails](#AuthSuccessUserEmails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || active | boolean |  no  |  || email | string |  no  |  || primary | boolean |  no  |  || verified | boolean |  no  |  |

---

#### [BlockUserRequestSchema](#BlockUserRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || reason | string |  no  |  || status | boolean |  no  |  || user_id | [string] |  no  |  |

---

#### [BlockUserSuccess](#BlockUserSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || success | boolean |  no  |  |

---

#### [CodeRequestBodySchema](#CodeRequestBodySchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || code | string |  no  |  |

---

#### [CreateUserGroupSchema](#CreateUserGroupSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || description | string |  yes  |  || file_url | string |  yes  |  || name | string |  yes  |  |

---

#### [CreateUserRequestSchema](#CreateUserRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || email | string |  no  |  || first_name | string |  no  |  || gender | string |  no  |  || last_name | string |  no  |  || meta | string |  no  |  || phone_number | string |  yes  |  || username | string |  yes  |  |

---

#### [CreateUserResponseSchema](#CreateUserResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || user | [UserSchema](#UserSchema) |  no  |  |

---

#### [CreateUserSessionRequestSchema](#CreateUserSessionRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || domain | string |  no  |  || max_age | number |  no  |  || user_id | string |  no  |  |

---

#### [CreateUserSessionResponseSchema](#CreateUserSessionResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || cookie | string |  no  |  || domain | string |  no  |  || http_only | boolean |  no  |  || max_age | number |  no  |  || secure | boolean |  no  |  |

---

#### [CustomerListResponseSchema](#CustomerListResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || items | [[UserSchema](#UserSchema)] |  no  |  || page | [PaginationSchema](#PaginationSchema) |  no  |  |

---

#### [DeleteAccountConsent](#DeleteAccountConsent)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || consent_text | string |  no  |  |

---

#### [DeleteAccountReasons](#DeleteAccountReasons)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || reason_id | string |  no  |  || reason_text | string |  no  |  || show_text_area | boolean |  no  |  |

---

#### [DeleteApplicationUserRequestSchema](#DeleteApplicationUserRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || otp | string |  no  |  || reason | string |  no  |  || reason_id | string |  no  |  || request_id | string |  no  |  || user_id | string |  no  |  |

---

#### [DeleteUserSuccess](#DeleteUserSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || success | boolean |  no  |  |

---

#### [EditEmailRequestSchema](#EditEmailRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || email | string |  no  |  |

---

#### [EditMobileRequestSchema](#EditMobileRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || country_code | string |  no  |  || phone | string |  no  |  |

---

#### [EditProfileMobileSchema](#EditProfileMobileSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || country_code | string |  no  |  || phone | string |  no  |  |

---

#### [EditProfileRequestSchema](#EditProfileRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || android_hash | string |  no  |  || country_code | string |  no  |  || dob | string |  no  |  || email | string |  no  |  || first_name | string |  no  |  || gender | string |  no  |  || last_name | string |  no  |  || mobile | [EditProfileMobileSchema](#EditProfileMobileSchema) |  no  |  || profile_pic_url | string |  no  |  || register_token | string |  no  |  || sender | string |  no  |  |

---

#### [Email](#Email)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || active | boolean |  no  |  || email | string |  no  |  || primary | boolean |  no  |  || verified | boolean |  no  |  |

---

#### [EmailOtpSuccess](#EmailOtpSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || success | boolean |  no  |  |

---

#### [Facebook](#Facebook)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || app_id | string |  no  |  |

---

#### [FlashCard](#FlashCard)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || background_color | string |  no  |  || text | string |  no  |  || text_color | string |  no  |  |

---

#### [ForgotPasswordRequestSchema](#ForgotPasswordRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || code | string |  no  |  || password | string |  no  |  |

---

#### [FormRegisterRequestSchema](#FormRegisterRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || email | string |  no  |  || first_name | string |  no  |  || gender | string |  no  |  || last_name | string |  no  |  || password | string |  no  |  || phone | [FormRegisterRequestSchemaPhone](#FormRegisterRequestSchemaPhone) |  no  |  || register_token | string |  no  |  |

---

#### [FormRegisterRequestSchemaPhone](#FormRegisterRequestSchemaPhone)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || country_code | string |  no  |  || mobile | string |  no  |  |

---

#### [Google](#Google)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || app_id | string |  no  |  |

---

#### [HasPasswordSuccess](#HasPasswordSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || result | boolean |  no  |  |

---

#### [Login](#Login)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || otp | boolean |  no  |  || password | boolean |  no  |  |

---

#### [LoginSuccess](#LoginSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || register_token | string |  no  |  || request_id | string |  no  |  || user | [UserSchema](#UserSchema) |  no  |  |

---

#### [LogoutSuccess](#LogoutSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || logout | boolean |  no  |  |

---

#### [LookAndFeel](#LookAndFeel)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || background_color | string |  no  |  || card_position | string |  no  |  |

---

#### [MetaSchema](#MetaSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || fynd_default | boolean |  no  |  |

---

#### [NotFoundSchema](#NotFoundSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || message | string |  no  |  |

---

#### [OAuthRequestAppleSchema](#OAuthRequestAppleSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || oauth | [OAuthRequestAppleSchemaOauth](#OAuthRequestAppleSchemaOauth) |  no  |  || profile | [OAuthRequestAppleSchemaProfile](#OAuthRequestAppleSchemaProfile) |  no  |  || user_identifier | string |  no  |  |

---

#### [OAuthRequestAppleSchemaOauth](#OAuthRequestAppleSchemaOauth)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || identity_token | string |  no  |  |

---

#### [OAuthRequestAppleSchemaProfile](#OAuthRequestAppleSchemaProfile)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || first_name | string |  no  |  || full_name | string |  no  |  || last_name | string |  no  |  |

---

#### [OAuthRequestSchema](#OAuthRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || is_signed_in | boolean |  no  |  || oauth2 | [OAuthRequestSchemaOauth2](#OAuthRequestSchemaOauth2) |  no  |  || profile | [OAuthRequestSchemaProfile](#OAuthRequestSchemaProfile) |  no  |  |

---

#### [OAuthRequestSchemaOauth2](#OAuthRequestSchemaOauth2)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || access_token | string |  no  |  || expiry | number |  no  |  || refresh_token | string |  no  |  |

---

#### [OAuthRequestSchemaProfile](#OAuthRequestSchemaProfile)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || email | string |  no  |  || first_name | string |  no  |  || full_name | string |  no  |  || id | string |  no  |  || image | string |  no  |  || last_name | string |  no  |  |

---

#### [OtpSuccess](#OtpSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || country_code | string |  no  |  || message | string |  no  |  || mobile | string |  no  |  || register_token | string |  no  |  || request_id | string |  no  |  || resend_timer | number |  no  |  || resend_token | string |  no  |  || success | boolean |  no  |  |

---

#### [PaginationSchema](#PaginationSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || current | number |  no  |  || has_next | boolean |  no  |  || item_total | number |  no  |  || size | number |  no  |  || type | string |  no  |  |

---

#### [PasswordLoginRequestSchema](#PasswordLoginRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || captcha_code | string |  no  |  || password | string |  no  |  || username | string |  no  |  |

---

#### [PhoneNumber](#PhoneNumber)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || active | boolean |  no  |  || country_code | number |  no  |  || phone | string |  no  |  || primary | boolean |  no  |  || verified | boolean |  no  |  |

---

#### [PlatformEmail](#PlatformEmail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || is_required | boolean |  no  |  || level | string |  no  |  |

---

#### [PlatformMobile](#PlatformMobile)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || is_required | boolean |  no  |  || level | string |  no  |  |

---

#### [PlatformSchema](#PlatformSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || _id | string |  no  |  || active | boolean |  no  |  || created_at | string |  no  |  || delete_account_consent | string |  no  |  || delete_account_day | number |  no  |  || delete_account_reasons | [[DeleteAccountReasons](#DeleteAccountReasons)] |  no  |  || desktop_image | string |  no  |  || display | string |  no  |  || flash_card | [FlashCard](#FlashCard) |  no  |  || forgot_password | boolean |  no  |  || login | [Login](#Login) |  no  |  || look_and_feel | [LookAndFeel](#LookAndFeel) |  no  |  || meta | [MetaSchema](#MetaSchema) |  no  |  || mobile_image | string |  no  |  || name | string |  no  |  || register | boolean |  no  |  || register_required_fields | [RegisterRequiredFields](#RegisterRequiredFields) |  no  |  || required_fields | [RequiredFields](#RequiredFields) |  no  |  || session_config | string |  no  |  || skip_captcha | boolean |  no  |  || skip_login | boolean |  no  |  || social | [Social](#Social) |  no  |  || social_tokens | [SocialTokens](#SocialTokens) |  no  |  || subtext | string |  no  |  || updated_at | string |  no  |  |

---

#### [ProfileEditSuccess](#ProfileEditSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || country_code | string |  no  |  || email | string |  no  |  || message | string |  no  |  || mobile | string |  no  |  || register_token | string |  no  |  || request_id | string |  no  |  || resend_email_token | string |  no  |  || resend_timer | number |  no  |  || resend_token | string |  no  |  || success | boolean |  no  |  || user | [UserSchema](#UserSchema) |  no  |  || user_exists | boolean |  no  |  || verify_email_link | boolean |  no  |  || verify_email_otp | boolean |  no  |  || verify_mobile_otp | boolean |  no  |  |

---

#### [ProfileEditSuccessSchema](#ProfileEditSuccessSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || email | string |  no  |  || register_token | string |  no  |  || user | string |  no  |  || user_exists | boolean |  no  |  || verify_email_link | boolean |  no  |  || verify_email_otp | boolean |  no  |  || verify_mobile_otp | boolean |  no  |  |

---

#### [RegisterFormSuccess](#RegisterFormSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || country_code | string |  no  |  || email | string |  no  |  || message | string |  no  |  || mobile | string |  no  |  || register_token | string |  no  |  || request_id | string |  no  |  || resend_email_token | string |  no  |  || resend_timer | number |  no  |  || resend_token | string |  no  |  || success | boolean |  no  |  || user_exists | boolean |  no  |  || verify_email_otp | boolean |  no  |  || verify_mobile_otp | boolean |  no  |  |

---

#### [RegisterRequiredFields](#RegisterRequiredFields)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || email | [RegisterRequiredFieldsEmail](#RegisterRequiredFieldsEmail) |  no  |  || mobile | [RegisterRequiredFieldsMobile](#RegisterRequiredFieldsMobile) |  no  |  |

---

#### [RegisterRequiredFieldsEmail](#RegisterRequiredFieldsEmail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || is_required | boolean |  no  |  || level | string |  no  |  |

---

#### [RegisterRequiredFieldsMobile](#RegisterRequiredFieldsMobile)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || is_required | boolean |  no  |  || level | string |  no  |  |

---

#### [RequiredFields](#RequiredFields)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || email | [PlatformEmail](#PlatformEmail) |  no  |  || mobile | [PlatformMobile](#PlatformMobile) |  no  |  |

---

#### [ResetPasswordSuccess](#ResetPasswordSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || status | string |  no  |  |

---

#### [SendEmailOtpRequestSchema](#SendEmailOtpRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || action | string |  no  |  || email | string |  no  |  || register_token | string |  no  |  || token | string |  no  |  |

---

#### [SendEmailVerifyLinkSuccess](#SendEmailVerifyLinkSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || verify_email_link | boolean |  no  |  |

---

#### [SendMobileOtpRequestSchema](#SendMobileOtpRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || action | string |  no  |  || android_hash | string |  no  |  || captcha_code | string |  no  |  || country_code | string |  no  |  || force | string |  no  |  || mobile | string |  no  |  || token | string |  no  |  |

---

#### [SendMobileVerifyLinkSuccess](#SendMobileVerifyLinkSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || verify_mobile_link | boolean |  no  |  |

---

#### [SendOtpRequestSchema](#SendOtpRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || android_hash | string |  no  |  || captcha_code | string |  no  |  || country_code | string |  no  |  || mobile | string |  no  |  |

---

#### [SendOtpResponse](#SendOtpResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || country_code | string |  no  |  || email | string |  no  |  || message | string |  no  |  || mobile | string |  no  |  || register_token | string |  no  |  || request_id | string |  no  |  || resend_email_token | string |  no  |  || resend_timer | number |  no  |  || resend_token | string |  no  |  || success | boolean |  no  |  || user_exists | boolean |  no  |  || verify_email_otp | boolean |  no  |  || verify_mobile_otp | boolean |  no  |  |

---

#### [SendResetPasswordEmailRequestSchema](#SendResetPasswordEmailRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || captcha_code | string |  no  |  || email | string |  no  |  |

---

#### [SendResetPasswordMobileRequestSchema](#SendResetPasswordMobileRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || captcha_code | string |  no  |  || country_code | string |  no  |  || mobile | string |  no  |  |

---

#### [SendVerificationLinkMobileRequestSchema](#SendVerificationLinkMobileRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || active | boolean |  no  |  || country_code | string |  no  |  || phone | string |  no  |  || primary | boolean |  no  |  || verified | boolean |  no  |  |

---

#### [SessionDeleteResponseSchema](#SessionDeleteResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || items | [string] |  no  |  |

---

#### [SessionExpiry](#SessionExpiry)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || duration | number |  no  |  || is_rolling | boolean |  no  |  || type | string |  no  |  |

---

#### [SessionListResponseSchema](#SessionListResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || items | [string] |  no  |  |

---

#### [SessionListSuccess](#SessionListSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || sessions | [string] |  no  |  |

---

#### [Social](#Social)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || account_kit | boolean |  no  |  || apple | boolean |  no  |  || facebook | boolean |  no  |  || google | boolean |  no  |  |

---

#### [SocialTokens](#SocialTokens)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || account_kit | [Accountkit](#Accountkit) |  no  |  || facebook | [Facebook](#Facebook) |  no  |  || google | [Google](#Google) |  no  |  |

---

#### [TokenRequestBodySchema](#TokenRequestBodySchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || token | string |  no  |  |

---

#### [UnauthenticatedSchema](#UnauthenticatedSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || authenticated | boolean |  no  |  |

---

#### [UnauthorizedSchema](#UnauthorizedSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || message | string |  no  |  |

---

#### [UnDeleteUserRequestSchema](#UnDeleteUserRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || reason | string |  no  |  || reason_id | string |  no  |  || user_id | string |  no  |  |

---

#### [UnDeleteUserSuccess](#UnDeleteUserSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || success | boolean |  no  |  |

---

#### [UpdatePasswordRequestSchema](#UpdatePasswordRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || new_password | string |  no  |  || old_password | string |  no  |  |

---

#### [UpdateUserGroupSchema](#UpdateUserGroupSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || description | string |  no  |  || file_url | string |  no  |  || name | string |  no  |  |

---

#### [UpdateUserRequestSchema](#UpdateUserRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || emails | [[UserEmails](#UserEmails)] |  no  |  || external_id | string |  no  |  || first_name | string |  no  |  || gender | string |  no  |  || last_name | string |  no  |  || meta | string |  no  |  || phone_numbers | [[UserPhoneNumbers](#UserPhoneNumbers)] |  no  |  |

---

#### [UserEmails](#UserEmails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || active | boolean |  no  |  || email | string |  no  |  || primary | boolean |  no  |  || verified | boolean |  no  |  |

---

#### [UserGroupListResponseSchema](#UserGroupListResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || items | [[UserGroupResponseSchema](#UserGroupResponseSchema)] |  no  |  || page | [PaginationSchema](#PaginationSchema) |  no  |  |

---

#### [UserGroupResponseSchema](#UserGroupResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || __v | number |  no  |  || _id | string |  no  |  || application_id | string |  no  |  || created_at | string |  no  |  || description | string |  no  |  || file_url | string |  no  |  || modified_at | string |  no  |  || name | string |  no  |  || status | string |  no  |  || uid | number |  no  |  |

---

#### [UserObjectSchema](#UserObjectSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || user | [UserSchema](#UserSchema) |  no  |  |

---

#### [UserPhoneNumbers](#UserPhoneNumbers)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || active | boolean |  no  |  || country_code | string |  no  |  || phone | string |  no  |  || primary | boolean |  no  |  || verified | boolean |  no  |  |

---

#### [UserSchema](#UserSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || _id | string |  no  |  || account_type | string |  no  |  || active | boolean |  no  |  || application_id | string |  no  |  || created_at | string |  no  |  || dob | string |  no  |  || emails | [[Email](#Email)] |  no  |  || first_name | string |  no  |  || gender | string |  no  |  || last_name | string |  no  |  || meta | string |  no  |  || phone_numbers | [[PhoneNumber](#PhoneNumber)] |  no  |  || profile_pic_url | string |  no  |  || updated_at | string |  no  |  || user_id | string |  no  |  || username | string |  no  |  |

---

#### [UserSearchResponseSchema](#UserSearchResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || users | [[UserSchema](#UserSchema)] |  no  |  |

---

#### [VerifyEmailOtpRequestSchema](#VerifyEmailOtpRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || action | string |  no  |  || email | string |  no  |  || otp | string |  no  |  || register_token | string |  no  |  |

---

#### [VerifyEmailOTPSuccess](#VerifyEmailOTPSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || user | [UserSchema](#UserSchema) |  no  |  || verify_email_link | boolean |  no  |  |

---

#### [VerifyEmailSuccess](#VerifyEmailSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || message | string |  no  |  |

---

#### [VerifyMobileOTPSuccess](#VerifyMobileOTPSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || user | [UserSchema](#UserSchema) |  no  |  || verify_mobile_link | boolean |  no  |  |

---

#### [VerifyOtpRequestSchema](#VerifyOtpRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || otp | string |  no  |  || register_token | string |  no  |  || request_id | string |  no  |  |

---

#### [VerifyOtpSuccess](#VerifyOtpSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || register_token | string |  no  |  || user | [UserSchema](#UserSchema) |  no  |  || user_exists | boolean |  no  |  |

---




