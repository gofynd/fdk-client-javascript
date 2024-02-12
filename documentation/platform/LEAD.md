




##### [Back to Platform docs](./README.md)

## Lead Methods
Handles communication between Administrator-Staff and Staff-Users


Default
* [closeVideoRoom](#closevideoroom)
* [createCustomForm](#createcustomform)
* [createNewHistory](#createnewhistory)
* [createPlatformTicketHistory](#createplatformtickethistory)
* [createTicket](#createticket)
* [deleteCustomForm](#deletecustomform)
* [editCustomForm](#editcustomform)
* [editNewTicket](#editnewticket)
* [editPlatformTicket](#editplatformticket)
* [getCustomForm](#getcustomform)
* [getCustomForms](#getcustomforms)
* [getFeedbacks](#getfeedbacks)
* [getGeneralConfig](#getgeneralconfig)
* [getNewTicket](#getnewticket)
* [getNewTicketHistory](#getnewtickethistory)
* [getNewTickets](#getnewtickets)
* [getNewTokenForVideoRoom](#getnewtokenforvideoroom)
* [getNewVideoParticipants](#getnewvideoparticipants)
* [getPlatformTicket](#getplatformticket)
* [getPlatformTicketHistory](#getplatformtickethistory)
* [getPlatformTickets](#getplatformtickets)
* [getPlatformVideoParticipants](#getplatformvideoparticipants)
* [getTokenForPlatformVideoRoom](#gettokenforplatformvideoroom)
* [openVideoRoom](#openvideoroom)
* [submitFeedback](#submitfeedback)




## Methods with example and description





### closeVideoRoom
Close the video room and force all participants to leave.



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").lead.closeVideoRoom({  uniqueName : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").lead.closeVideoRoom({  uniqueName : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| uniqueName | string | yes | Unique name of Video Room |  



Close the video room and force all participants to leave.

*Returned Response:*




[CloseVideoRoomResponse](#CloseVideoRoomResponse)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Default</i></summary>

```json
{
  "value": {
    "success": true
  }
}
```
</details>

</details>









---


### createCustomForm
Creates a new custom form



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").lead.createCustomForm({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").lead.createCustomForm({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CreateCustomFormPayload](#CreateCustomFormPayload) | yes | Request body |


Creates a new custom form for given application

*Returned Response:*




[CustomForm](#CustomForm)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Default</i></summary>

```json
{
  "value": [
    {
      "required": false,
      "login_required": false,
      "should_notify": false,
      "inputs": [
        {
          "type": "email",
          "showRegexInput": true,
          "enum": [],
          "regex": "\\S+@\\S+\\.\\S+",
          "display": "email",
          "required": true,
          "key": "email"
        },
        {
          "type": "number",
          "showRegexInput": false,
          "enum": [],
          "display": "Enter your fav number",
          "placeholder": "123",
          "key": "enter-your-fav-number"
        }
      ],
      "available_assignees": [],
      "_id": "602e900a2042255c03cadaf0",
      "title": "service-test-satyen",
      "description": "testing form from service",
      "slug": "service-test-satyen",
      "header_image": "https://hdn-1.addsale.com/x0/support-ticket/files/free/original/KZL86aN5l-service-test-satyen.jpeg",
      "application_id": "000000000000000000000001",
      "created_on": {
        "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
        "platform": "web",
        "meta": {
          "browser": {
            "name": "Chrome",
            "version": "88.0.4324.150"
          },
          "os": {
            "name": "macOS",
            "version": "11.2.0"
          },
          "platform": {
            "type": "desktop",
            "vendor": "Apple"
          },
          "engine": {
            "name": "Blink"
          }
        }
      },
      "created_by": "5f8147abbd1a0a870f61f1a6",
      "createdAt": "2021-02-18T16:04:26.495Z",
      "updatedAt": "2021-02-26T10:16:49.272Z",
      "__v": 0
    }
  ]
}
```
</details>

</details>









---


### createNewHistory
Create history for specific application level ticket



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").lead.createNewHistory({  id : value,
 body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").lead.createNewHistory({  id : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | Ticket ID for which history is created |  
| body | [TicketHistoryPayload](#TicketHistoryPayload) | yes | Request body |


Create history for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating.

*Returned Response:*




[TicketHistory](#TicketHistory)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Default</i></summary>

```json
{
  "value": {
    "_id": "601a9d52c26687d086c499ef",
    "ticket_id": "41",
    "type": "comment",
    "value": {
      "text": "d",
      "media": []
    },
    "created_on": {
      "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36",
      "platform": "web",
      "meta": {
        "browser": {
          "name": "Chrome",
          "version": "88.0.4324.96"
        },
        "os": {
          "name": "macOS",
          "version": "10.15.7",
          "versionName": "Catalina"
        },
        "platform": {
          "type": "desktop",
          "vendor": "Apple"
        },
        "engine": {
          "name": "Blink"
        }
      }
    },
    "created_by": {
      "5d1363adf599d850df93175e": null
    },
    "createdAt": "2021-02-03T12:55:46.808Z",
    "updatedAt": "2021-02-03T12:55:46.808Z",
    "__v": 0
  }
}
```
</details>

</details>









---


### createPlatformTicketHistory
Create history for specific company level ticket



```javascript
// Promise
const promise = platformClient.lead.createPlatformTicketHistory({  id : value,
 body : value });

// Async/Await
const data = await platformClient.lead.createPlatformTicketHistory({  id : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | Ticket ID for which history is created |  
| body | [TicketHistoryPayload](#TicketHistoryPayload) | yes | Request body |


Create history for specific company level ticket, this history is seen on ticket detail page, this can be comment, log or rating.

*Returned Response:*




[TicketHistory](#TicketHistory)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Default</i></summary>

```json
{
  "value": {
    "_id": "601a9d52c26687d086c499ef",
    "ticket_id": "43",
    "type": "comment",
    "value": {
      "text": "d",
      "media": []
    },
    "created_on": {
      "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36",
      "platform": "web",
      "meta": {
        "browser": {
          "name": "Chrome",
          "version": "88.0.4324.96"
        },
        "os": {
          "name": "macOS",
          "version": "10.15.7",
          "versionName": "Catalina"
        },
        "platform": {
          "type": "desktop",
          "vendor": "Apple"
        },
        "engine": {
          "name": "Blink"
        }
      }
    },
    "created_by": {
      "5d1363adf599d850df93175e": null
    },
    "createdAt": "2021-02-03T12:55:46.808Z",
    "updatedAt": "2021-02-03T12:55:46.808Z",
    "__v": 0
  }
}
```
</details>

</details>









---


### createTicket
Creates a company level ticket



```javascript
// Promise
const promise = platformClient.lead.createTicket({  body : value });

// Async/Await
const data = await platformClient.lead.createTicket({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [AddTicketPayload](#AddTicketPayload) | yes | Request body |


Creates a company level ticket

*Returned Response:*




[Ticket](#Ticket)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Default</i></summary>

```json
{
  "value": {
    "context": {
      "company_id": "884"
    },
    "content": {
      "title": "SOme title Response",
      "description": "Handles communication between Administrator",
      "attachments": []
    },
    "status": {
      "display": "In Progress",
      "color": "#ffa951",
      "key": "in_progress"
    },
    "priority": {
      "display": "Medium",
      "color": "#f37736",
      "key": "medium"
    },
    "assigned_to": {
      "agent_id": "5d1363adf599d850df93175e",
      "gender": "male",
      "accountType": "user",
      "active": true,
      "profilePicUrl": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2136700473091190&height=400&width=400&ext=1554542761&hash=AeS6cuWIdjDdJJ-b",
      "hasOldPasswordHash": false,
      "_id": "5d1363adf599d850df93175e",
      "phoneNumbers": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "countryCode": 91,
          "phone": "9999999999"
        }
      ],
      "firstName": "Nikhil",
      "lastName": "Manapure",
      "emails": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "email": "niktest@xyz.com"
        }
      ],
      "username": "niktest_xyz_com_38425_20500281",
      "createdAt": "2019-01-01T17:22:38.528Z",
      "updatedAt": "2021-01-22T10:02:42.258Z",
      "uid": "20500281",
      "__v": 56
    },
    "tags": [
      "some-title"
    ],
    "_id": "6012f38557751ee8fc162cf7",
    "created_on": {
      "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36",
      "platform": "web",
      "meta": {
        "browser": {
          "name": "Chrome",
          "version": "88.0.4324.96"
        },
        "os": {
          "name": "macOS",
          "version": "10.15.7",
          "versionName": "Catalina"
        },
        "platform": {
          "type": "desktop",
          "vendor": "Apple"
        },
        "engine": {
          "name": "Blink"
        }
      }
    },
    "source": "sales_channel",
    "created_by": {
      "id": "5d1363adf599d850df93175e",
      "user": {
        "gender": "male",
        "accountType": "user",
        "active": true,
        "profilePicUrl": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2136700473091190&height=400&width=400&ext=1554542761&hash=AeS6cuWIdjDdJJ-b",
        "hasOldPasswordHash": false,
        "_id": "5d1363adf599d850df93175e",
        "phoneNumbers": [
          {
            "active": true,
            "primary": true,
            "verified": true,
            "countryCode": 91,
            "phone": "9999999999"
          }
        ],
        "firstName": "Nikhil",
        "lastName": "Manapure",
        "emails": [
          {
            "active": true,
            "primary": true,
            "verified": true,
            "email": "niktest@xyz.com"
          }
        ],
        "username": "niktest_xyz_com_38425_20500281",
        "createdAt": "2019-01-01T17:22:38.528Z",
        "updatedAt": "2021-01-22T10:02:42.258Z",
        "uid": "20500281",
        "__v": 56
      }
    },
    "response_id": "6012f38457751e0fb8162cf6",
    "category": {
      "form": {
        "login_required": false,
        "should_notify": false,
        "inputs": [
          {
            "required": false,
            "type": "text",
            "enum": [],
            "display": "Single lineeee",
            "key": "single-lineeee",
            "showRegexInput": false
          },
          {
            "required": false,
            "type": "email",
            "enum": [],
            "display": "Email",
            "regex": "\\S+@\\S+\\.\\S+",
            "key": "email",
            "showRegexInput": true
          },
          {
            "required": false,
            "type": "text",
            "enum": [],
            "display": "dfsdf",
            "key": "dfsdf",
            "showRegexInput": false
          }
        ],
        "available_assignees": [
          "5b9b98150df588546aaea6d2",
          "5c45d78395d7504f76c2cb37"
        ],
        "_id": "5fd72db3dc250f8decfc61b2",
        "title": "SOme title",
        "description": "SOme big description",
        "slug": "some-title",
        "application_id": "000000000000000000000003",
        "created_on": {
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36",
          "platform": "web",
          "meta": {
            "browser": {
              "name": "Chrome",
              "version": "87.0.4280.88"
            },
            "os": {
              "name": "macOS",
              "version": "10.15.6",
              "versionName": "Catalina"
            },
            "platform": {
              "type": "desktop",
              "vendor": "Apple"
            },
            "engine": {
              "name": "Blink"
            }
          }
        },
        "created_by": "5d1363adf599d850df93175e",
        "createdAt": "2020-12-14T09:17:39.953Z",
        "updatedAt": "2021-01-28T18:48:07.717Z",
        "__v": 0
      },
      "key": "some-title",
      "display": "SOme title"
    },
    "ticket_id": "43",
    "createdAt": "2021-01-28T17:25:25.013Z",
    "updatedAt": "2021-01-28T17:25:33.396Z",
    "__v": 0,
    "video_room_id": "6012f38557751ee8fc162cf7"
  }
}
```
</details>

</details>









---


### deleteCustomForm
Delete a custom form



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").lead.deleteCustomForm({  slug : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").lead.deleteCustomForm({  slug : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| slug | string | yes | Slug of form whose response is getting submitted |  



Delete a custom form using it's slug

*Returned Response:*




[CustomForm](#CustomForm)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Default</i></summary>

```json
{
  "value": [
    {
      "required": false,
      "login_required": false,
      "should_notify": false,
      "inputs": [
        {
          "type": "email",
          "showRegexInput": true,
          "enum": [],
          "regex": "\\S+@\\S+\\.\\S+",
          "display": "email",
          "required": true,
          "key": "email"
        },
        {
          "type": "number",
          "showRegexInput": false,
          "enum": [],
          "display": "Enter your fav number",
          "placeholder": "123",
          "key": "enter-your-fav-number"
        }
      ],
      "available_assignees": [],
      "_id": "602e900a2042255c03cadaf0",
      "title": "service-test-satyen",
      "description": "testing form from service",
      "slug": "service-test-satyen",
      "header_image": "https://hdn-1.addsale.com/x0/support-ticket/files/free/original/KZL86aN5l-service-test-satyen.jpeg",
      "application_id": "000000000000000000000001",
      "created_on": {
        "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
        "platform": "web",
        "meta": {
          "browser": {
            "name": "Chrome",
            "version": "88.0.4324.150"
          },
          "os": {
            "name": "macOS",
            "version": "11.2.0"
          },
          "platform": {
            "type": "desktop",
            "vendor": "Apple"
          },
          "engine": {
            "name": "Blink"
          }
        }
      },
      "created_by": "5f8147abbd1a0a870f61f1a6",
      "createdAt": "2021-02-18T16:04:26.495Z",
      "updatedAt": "2021-02-26T10:16:49.272Z",
      "__v": 0
    }
  ]
}
```
</details>

</details>









---


### editCustomForm
Edit the given custom form



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").lead.editCustomForm({  slug : value,
 body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").lead.editCustomForm({  slug : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| slug | string | yes | Slug of form whose response is getting submitted |  
| body | [EditCustomFormPayload](#EditCustomFormPayload) | yes | Request body |


Edit the given custom form field such as adding or deleting input, assignee, title, decription, notification and polling information.

*Returned Response:*




[CustomForm](#CustomForm)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Default</i></summary>

```json
{
  "value": [
    {
      "required": false,
      "login_required": false,
      "should_notify": false,
      "inputs": [
        {
          "type": "email",
          "showRegexInput": true,
          "enum": [],
          "regex": "\\S+@\\S+\\.\\S+",
          "display": "email",
          "required": true,
          "key": "email"
        },
        {
          "type": "number",
          "showRegexInput": false,
          "enum": [],
          "display": "Enter your fav number",
          "placeholder": "123",
          "key": "enter-your-fav-number"
        }
      ],
      "available_assignees": [],
      "_id": "602e900a2042255c03cadaf0",
      "title": "service-test-satyen",
      "description": "testing form from service",
      "slug": "service-test-satyen",
      "header_image": "https://hdn-1.addsale.com/x0/support-ticket/files/free/original/KZL86aN5l-service-test-satyen.jpeg",
      "application_id": "000000000000000000000001",
      "created_on": {
        "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
        "platform": "web",
        "meta": {
          "browser": {
            "name": "Chrome",
            "version": "88.0.4324.150"
          },
          "os": {
            "name": "macOS",
            "version": "11.2.0"
          },
          "platform": {
            "type": "desktop",
            "vendor": "Apple"
          },
          "engine": {
            "name": "Blink"
          }
        }
      },
      "created_by": "5f8147abbd1a0a870f61f1a6",
      "createdAt": "2021-02-18T16:04:26.495Z",
      "updatedAt": "2021-02-26T10:16:49.272Z",
      "__v": 0
    }
  ]
}
```
</details>

</details>









---


### editNewTicket
Edits ticket details of a application level ticket



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").lead.editNewTicket({  id : value,
 body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").lead.editNewTicket({  id : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | Ticket ID of ticket to be edited |  
| body | [EditTicketPayload](#EditTicketPayload) | yes | Request body |


Edits ticket details of a application level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes

*Returned Response:*




[Ticket](#Ticket)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Default</i></summary>

```json
{
  "value": {
    "context": {
      "application_id": "000000000000000000000003",
      "company_id": "884"
    },
    "content": {
      "title": "SOme title Response",
      "description": "Handles communication between Administrator",
      "attachments": []
    },
    "status": {
      "display": "In Progress",
      "color": "#ffa951",
      "key": "in_progress"
    },
    "priority": {
      "display": "Medium",
      "color": "#f37736",
      "key": "medium"
    },
    "assigned_to": {
      "agent_id": "5d1363adf599d850df93175e",
      "gender": "male",
      "accountType": "user",
      "active": true,
      "profilePicUrl": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2136700473091190&height=400&width=400&ext=1554542761&hash=AeS6cuWIdjDdJJ-b",
      "hasOldPasswordHash": false,
      "_id": "5d1363adf599d850df93175e",
      "phoneNumbers": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "countryCode": 91,
          "phone": "9999999999"
        }
      ],
      "firstName": "Nikhil",
      "lastName": "Manapure",
      "emails": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "email": "niktest@xyz.com"
        }
      ],
      "username": "niktest_xyz_com_38425_20500281",
      "createdAt": "2019-01-01T17:22:38.528Z",
      "updatedAt": "2021-01-22T10:02:42.258Z",
      "uid": "20500281",
      "__v": 56
    },
    "tags": [
      "some-title"
    ],
    "_id": "6012f38557751ee8fc162cf7",
    "created_on": {
      "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36",
      "platform": "web",
      "meta": {
        "browser": {
          "name": "Chrome",
          "version": "88.0.4324.96"
        },
        "os": {
          "name": "macOS",
          "version": "10.15.7",
          "versionName": "Catalina"
        },
        "platform": {
          "type": "desktop",
          "vendor": "Apple"
        },
        "engine": {
          "name": "Blink"
        }
      }
    },
    "source": "sales_channel",
    "created_by": {
      "id": "5d1363adf599d850df93175e",
      "user": {
        "gender": "male",
        "accountType": "user",
        "active": true,
        "profilePicUrl": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2136700473091190&height=400&width=400&ext=1554542761&hash=AeS6cuWIdjDdJJ-b",
        "hasOldPasswordHash": false,
        "_id": "5d1363adf599d850df93175e",
        "phoneNumbers": [
          {
            "active": true,
            "primary": true,
            "verified": true,
            "countryCode": 91,
            "phone": "9999999999"
          }
        ],
        "firstName": "Nikhil",
        "lastName": "Manapure",
        "emails": [
          {
            "active": true,
            "primary": true,
            "verified": true,
            "email": "niktest@xyz.com"
          }
        ],
        "username": "niktest_xyz_com_38425_20500281",
        "createdAt": "2019-01-01T17:22:38.528Z",
        "updatedAt": "2021-01-22T10:02:42.258Z",
        "uid": "20500281",
        "__v": 56
      }
    },
    "response_id": "6012f38457751e0fb8162cf6",
    "category": {
      "form": {
        "login_required": false,
        "should_notify": false,
        "inputs": [
          {
            "required": false,
            "type": "text",
            "enum": [],
            "display": "Single lineeee",
            "key": "single-lineeee",
            "showRegexInput": false
          },
          {
            "required": false,
            "type": "email",
            "enum": [],
            "display": "Email",
            "regex": "\\S+@\\S+\\.\\S+",
            "key": "email",
            "showRegexInput": true
          },
          {
            "required": false,
            "type": "text",
            "enum": [],
            "display": "dfsdf",
            "key": "dfsdf",
            "showRegexInput": false
          }
        ],
        "available_assignees": [
          "5b9b98150df588546aaea6d2",
          "5c45d78395d7504f76c2cb37"
        ],
        "_id": "5fd72db3dc250f8decfc61b2",
        "title": "SOme title",
        "description": "SOme big description",
        "slug": "some-title",
        "application_id": "000000000000000000000003",
        "created_on": {
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36",
          "platform": "web",
          "meta": {
            "browser": {
              "name": "Chrome",
              "version": "87.0.4280.88"
            },
            "os": {
              "name": "macOS",
              "version": "10.15.6",
              "versionName": "Catalina"
            },
            "platform": {
              "type": "desktop",
              "vendor": "Apple"
            },
            "engine": {
              "name": "Blink"
            }
          }
        },
        "created_by": "5d1363adf599d850df93175e",
        "createdAt": "2020-12-14T09:17:39.953Z",
        "updatedAt": "2021-01-28T18:48:07.717Z",
        "__v": 0
      },
      "key": "some-title",
      "display": "SOme title"
    },
    "ticket_id": "43",
    "createdAt": "2021-01-28T17:25:25.013Z",
    "updatedAt": "2021-01-28T17:25:33.396Z",
    "__v": 0,
    "video_room_id": "6012f38557751ee8fc162cf7"
  }
}
```
</details>

</details>









---


### editPlatformTicket
Edits ticket details of a company level ticket



```javascript
// Promise
const promise = platformClient.lead.editPlatformTicket({  id : value,
 body : value });

// Async/Await
const data = await platformClient.lead.editPlatformTicket({  id : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | Ticket ID of ticket to be edited |  
| body | [EditTicketPayload](#EditTicketPayload) | yes | Request body |


Edits ticket details of a company level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes

*Returned Response:*




[Ticket](#Ticket)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Default</i></summary>

```json
{
  "value": {
    "context": {
      "company_id": "1"
    },
    "content": {
      "title": "SOme title Response",
      "description": "Handles communication between Administrator",
      "attachments": []
    },
    "status": {
      "display": "In Progress",
      "color": "#ffa951",
      "key": "in_progress"
    },
    "priority": {
      "display": "Medium",
      "color": "#f37736",
      "key": "medium"
    },
    "assigned_to": {
      "agent_id": "5d1363adf599d850df93175e",
      "gender": "male",
      "accountType": "user",
      "active": true,
      "profilePicUrl": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2136700473091190&height=400&width=400&ext=1554542761&hash=AeS6cuWIdjDdJJ-b",
      "hasOldPasswordHash": false,
      "_id": "5d1363adf599d850df93175e",
      "phoneNumbers": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "countryCode": 91,
          "phone": "9999999999"
        }
      ],
      "firstName": "Nikhil",
      "lastName": "Manapure",
      "emails": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "email": "niktest@xyz.com"
        }
      ],
      "username": "niktest_xyz_com_38425_20500281",
      "createdAt": "2019-01-01T17:22:38.528Z",
      "updatedAt": "2021-01-22T10:02:42.258Z",
      "uid": "20500281",
      "__v": 56
    },
    "tags": [
      "some-title"
    ],
    "_id": "6012f38557751ee8fc162cf7",
    "created_on": {
      "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36",
      "platform": "web",
      "meta": {
        "browser": {
          "name": "Chrome",
          "version": "88.0.4324.96"
        },
        "os": {
          "name": "macOS",
          "version": "10.15.7",
          "versionName": "Catalina"
        },
        "platform": {
          "type": "desktop",
          "vendor": "Apple"
        },
        "engine": {
          "name": "Blink"
        }
      }
    },
    "source": "sales_channel",
    "created_by": {
      "id": "5d1363adf599d850df93175e",
      "user": {
        "gender": "male",
        "accountType": "user",
        "active": true,
        "profilePicUrl": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2136700473091190&height=400&width=400&ext=1554542761&hash=AeS6cuWIdjDdJJ-b",
        "hasOldPasswordHash": false,
        "_id": "5d1363adf599d850df93175e",
        "phoneNumbers": [
          {
            "active": true,
            "primary": true,
            "verified": true,
            "countryCode": 91,
            "phone": "9999999999"
          }
        ],
        "firstName": "Nikhil",
        "lastName": "Manapure",
        "emails": [
          {
            "active": true,
            "primary": true,
            "verified": true,
            "email": "niktest@xyz.com"
          }
        ],
        "username": "niktest_xyz_com_38425_20500281",
        "createdAt": "2019-01-01T17:22:38.528Z",
        "updatedAt": "2021-01-22T10:02:42.258Z",
        "uid": "20500281",
        "__v": 56
      }
    },
    "response_id": "6012f38457751e0fb8162cf6",
    "category": {
      "form": {
        "login_required": false,
        "should_notify": false,
        "inputs": [
          {
            "required": false,
            "type": "text",
            "enum": [],
            "display": "Single lineeee",
            "key": "single-lineeee",
            "showRegexInput": false
          },
          {
            "required": false,
            "type": "email",
            "enum": [],
            "display": "Email",
            "regex": "\\S+@\\S+\\.\\S+",
            "key": "email",
            "showRegexInput": true
          },
          {
            "required": false,
            "type": "text",
            "enum": [],
            "display": "dfsdf",
            "key": "dfsdf",
            "showRegexInput": false
          }
        ],
        "available_assignees": [
          "5b9b98150df588546aaea6d2",
          "5c45d78395d7504f76c2cb37"
        ],
        "_id": "5fd72db3dc250f8decfc61b2",
        "title": "SOme title",
        "description": "SOme big description",
        "slug": "some-title",
        "application_id": "000000000000000000000003",
        "created_on": {
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36",
          "platform": "web",
          "meta": {
            "browser": {
              "name": "Chrome",
              "version": "87.0.4280.88"
            },
            "os": {
              "name": "macOS",
              "version": "10.15.6",
              "versionName": "Catalina"
            },
            "platform": {
              "type": "desktop",
              "vendor": "Apple"
            },
            "engine": {
              "name": "Blink"
            }
          }
        },
        "created_by": "5d1363adf599d850df93175e",
        "createdAt": "2020-12-14T09:17:39.953Z",
        "updatedAt": "2021-01-28T18:48:07.717Z",
        "__v": 0
      },
      "key": "some-title",
      "display": "SOme title"
    },
    "ticket_id": "43",
    "createdAt": "2021-01-28T17:25:25.013Z",
    "updatedAt": "2021-01-28T17:25:33.396Z",
    "__v": 0,
    "video_room_id": "6012f38557751ee8fc162cf7"
  }
}
```
</details>

</details>









---


### getCustomForm
Get specific custom form using it's slug



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").lead.getCustomForm({  slug : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").lead.getCustomForm({  slug : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| slug | string | yes | Slug of form whose response is getting submitted |  



Get specific custom form using it's slug, this is used to view the form.

*Returned Response:*




[CustomForm](#CustomForm)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Default</i></summary>

```json
{
  "value": [
    {
      "required": false,
      "login_required": false,
      "should_notify": false,
      "inputs": [
        {
          "required": false,
          "type": "text",
          "display": "Name",
          "placeholder": "Please enter your name",
          "key": "name"
        }
      ],
      "available_assignees": [],
      "_id": "5fd258a9088f957f34c288fc",
      "title": "trail form",
      "description": "Trail form description",
      "slug": "trail-form",
      "application_id": "000000000000000000000003",
      "created_on": {
        "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36",
        "platform": "web",
        "meta": {
          "browser": {
            "name": "Chrome",
            "version": "87.0.4280.88"
          },
          "os": {
            "name": "macOS",
            "version": "10.15.6",
            "versionName": "Catalina"
          },
          "platform": {
            "type": "desktop",
            "vendor": "Apple"
          },
          "engine": {
            "name": "Blink"
          }
        }
      },
      "created_by": "5d1363adf599d850df93175e",
      "createdAt": "2020-12-10T17:19:37.515Z",
      "updatedAt": "2020-12-10T17:19:43.214Z",
      "__v": 0
    }
  ]
}
```
</details>

</details>









---


### getCustomForms
Get list of custom form



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").lead.getCustomForms();

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").lead.getCustomForms();
```






Get list of custom form for given application

*Returned Response:*




[CustomFormList](#CustomFormList)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Default</i></summary>

```json
{
  "value": {
    "docs": [
      {
        "_id": "602e900a2042255c03cadaf0",
        "login_required": false,
        "should_notify": false,
        "inputs": [
          {
            "type": "email",
            "showRegexInput": true,
            "enum": [],
            "regex": "\\S+@\\S+\\.\\S+",
            "display": "email",
            "required": true,
            "key": "email"
          },
          {
            "type": "number",
            "showRegexInput": false,
            "enum": [],
            "display": "Enter your fav number",
            "placeholder": "123",
            "key": "enter-your-fav-number"
          },
          {
            "type": "textarea",
            "showRegexInput": false,
            "enum": [],
            "display": "kjhgjhvjb",
            "required": true,
            "key": "kjhgjhvjb"
          }
        ],
        "available_assignees": [],
        "title": "service-test-satyen",
        "description": "testing form from service",
        "slug": "service-test-satyen",
        "header_image": "https://hdn-1.addsale.com/x0/support-ticket/files/free/original/KZL86aN5l-service-test-satyen.jpeg",
        "application_id": "000000000000000000000001",
        "created_on": {
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
          "platform": "web",
          "meta": {
            "browser": {
              "name": "Chrome",
              "version": "88.0.4324.150"
            },
            "os": {
              "name": "macOS",
              "version": "11.2.0"
            },
            "platform": {
              "type": "desktop",
              "vendor": "Apple"
            },
            "engine": {
              "name": "Blink"
            }
          }
        },
        "created_by": "5f8147abbd1a0a870f61f1a6",
        "createdAt": "2021-02-18T16:04:26.495Z",
        "updatedAt": "2021-02-24T15:49:56.256Z",
        "__v": 0,
        "id": "602e900a2042255c03cadaf0"
      },
      {
        "_id": "60124e4a4d2bc363625e1bf4",
        "login_required": false,
        "should_notify": true,
        "inputs": [
          {
            "type": "text",
            "showRegexInput": false,
            "enum": [],
            "display": "asdf",
            "key": "asdf"
          },
          {
            "type": "mobile",
            "showRegexInput": false,
            "enum": [],
            "display": "mob num",
            "regex": "[0-9]{10}$",
            "key": "mob-num"
          }
        ],
        "available_assignees": [
          "5e79e721768c6bf54b783146"
        ],
        "title": "asdf444",
        "description": "adf",
        "slug": "asdf444",
        "application_id": "000000000000000000000001",
        "created_on": {
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36",
          "platform": "web",
          "meta": {
            "browser": {
              "name": "Chrome",
              "version": "88.0.4324.96"
            },
            "os": {
              "name": "macOS",
              "version": "10.15.7",
              "versionName": "Catalina"
            },
            "platform": {
              "type": "desktop",
              "vendor": "Apple"
            },
            "engine": {
              "name": "Blink"
            }
          }
        },
        "created_by": "5e79e721768c6bf54b783146",
        "createdAt": "2021-01-28T05:40:26.271Z",
        "updatedAt": "2021-02-18T16:02:32.086Z",
        "__v": 0,
        "poll_for_assignment": {
          "duration": 20,
          "message": "We are looking for executive to connect you",
          "success_message": "Executive found",
          "failure_message": "All our executives are busy at the moment, We have accepted your request and someone will connect with you soon!"
        },
        "id": "60124e4a4d2bc363625e1bf4"
      }
    ],
    "total": 2,
    "limit": 10,
    "page": {
      "type": ""
    },
    "pages": 1
  }
}
```
</details>

</details>









---


### getFeedbacks
Gets a list of feedback submitted against that ticket



```javascript
// Promise
const promise = platformClient.lead.getFeedbacks({  id : value });

// Async/Await
const data = await platformClient.lead.getFeedbacks({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | Ticket ID for which feedbacks are to be fetched |  



Gets a list of feedback submitted against that ticket

*Returned Response:*




[TicketFeedbackList](#TicketFeedbackList)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Default</i></summary>

```json
{
  "value": {
    "items": [
      {
        "_id": "60c255bf00ecabfad19e9601",
        "company_id": "1",
        "ticket_id": "6095812876d2bf17143cb3b3",
        "user": {
          "_id": "5f8147abbd1a0a870f61f1a6",
          "authenticated": true,
          "user_id": "5f8147abbd1a0a870f61f1a6"
        },
        "category": "customers",
        "response": [
          {
            "audio": 2,
            "video": 6,
            "display": "",
            "key": "",
            "value": ""
          }
        ],
        "createdAt": "2021-06-10T18:11:11.349Z",
        "updatedAt": "2021-06-10T18:11:11.349Z",
        "__v": 0
      }
    ]
  }
}
```
</details>

</details>









---


### getGeneralConfig
Get general support configuration.



```javascript
// Promise
const promise = platformClient.lead.getGeneralConfig();

// Async/Await
const data = await platformClient.lead.getGeneralConfig();
```






Get general support configuration.

*Returned Response:*




[CloseVideoRoomResponse](#CloseVideoRoomResponse)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Default</i></summary>

```json
{
  "value": {
    "success": true
  }
}
```
</details>

</details>









---


### getNewTicket
Retreives ticket details of a application level ticket



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").lead.getNewTicket({  id : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").lead.getNewTicket({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | Tiket ID of the ticket to be fetched |  



Retreives ticket details of a application level ticket with ticket ID

*Returned Response:*




[Ticket](#Ticket)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Default</i></summary>

```json
{
  "value": {
    "context": {
      "application_id": "000000000000000000000003",
      "company_id": "884"
    },
    "content": {
      "title": "SOme title Response",
      "description": "Handles communication between Administrator",
      "attachments": []
    },
    "status": {
      "display": "In Progress",
      "color": "#ffa951",
      "key": "in_progress"
    },
    "priority": {
      "display": "Medium",
      "color": "#f37736",
      "key": "medium"
    },
    "assigned_to": {
      "agent_id": "5d1363adf599d850df93175e",
      "gender": "male",
      "accountType": "user",
      "active": true,
      "profilePicUrl": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2136700473091190&height=400&width=400&ext=1554542761&hash=AeS6cuWIdjDdJJ-b",
      "hasOldPasswordHash": false,
      "_id": "5d1363adf599d850df93175e",
      "phoneNumbers": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "countryCode": 91,
          "phone": "9999999999"
        }
      ],
      "firstName": "Nikhil",
      "lastName": "Manapure",
      "emails": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "email": "niktest@xyz.com"
        }
      ],
      "username": "niktest_xyz_com_38425_20500281",
      "createdAt": "2019-01-01T17:22:38.528Z",
      "updatedAt": "2021-01-22T10:02:42.258Z",
      "uid": "20500281",
      "__v": 56
    },
    "tags": [
      "some-title"
    ],
    "_id": "6012f38557751ee8fc162cf7",
    "created_on": {
      "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36",
      "platform": "web",
      "meta": {
        "browser": {
          "name": "Chrome",
          "version": "88.0.4324.96"
        },
        "os": {
          "name": "macOS",
          "version": "10.15.7",
          "versionName": "Catalina"
        },
        "platform": {
          "type": "desktop",
          "vendor": "Apple"
        },
        "engine": {
          "name": "Blink"
        }
      }
    },
    "source": "sales_channel",
    "created_by": {
      "id": "5d1363adf599d850df93175e",
      "user": {
        "gender": "male",
        "accountType": "user",
        "active": true,
        "profilePicUrl": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2136700473091190&height=400&width=400&ext=1554542761&hash=AeS6cuWIdjDdJJ-b",
        "hasOldPasswordHash": false,
        "_id": "5d1363adf599d850df93175e",
        "phoneNumbers": [
          {
            "active": true,
            "primary": true,
            "verified": true,
            "countryCode": 91,
            "phone": "9999999999"
          }
        ],
        "firstName": "Nikhil",
        "lastName": "Manapure",
        "emails": [
          {
            "active": true,
            "primary": true,
            "verified": true,
            "email": "niktest@xyz.com"
          }
        ],
        "username": "niktest_xyz_com_38425_20500281",
        "createdAt": "2019-01-01T17:22:38.528Z",
        "updatedAt": "2021-01-22T10:02:42.258Z",
        "uid": "20500281",
        "__v": 56
      }
    },
    "response_id": "6012f38457751e0fb8162cf6",
    "category": {
      "form": {
        "login_required": false,
        "should_notify": false,
        "inputs": [
          {
            "required": false,
            "type": "text",
            "enum": [],
            "display": "Single lineeee",
            "key": "single-lineeee",
            "showRegexInput": false
          },
          {
            "required": false,
            "type": "email",
            "enum": [],
            "display": "Email",
            "regex": "\\S+@\\S+\\.\\S+",
            "key": "email",
            "showRegexInput": true
          },
          {
            "required": false,
            "type": "text",
            "enum": [],
            "display": "dfsdf",
            "key": "dfsdf",
            "showRegexInput": false
          }
        ],
        "available_assignees": [
          "5b9b98150df588546aaea6d2",
          "5c45d78395d7504f76c2cb37"
        ],
        "_id": "5fd72db3dc250f8decfc61b2",
        "title": "SOme title",
        "description": "SOme big description",
        "slug": "some-title",
        "application_id": "000000000000000000000003",
        "created_on": {
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36",
          "platform": "web",
          "meta": {
            "browser": {
              "name": "Chrome",
              "version": "87.0.4280.88"
            },
            "os": {
              "name": "macOS",
              "version": "10.15.6",
              "versionName": "Catalina"
            },
            "platform": {
              "type": "desktop",
              "vendor": "Apple"
            },
            "engine": {
              "name": "Blink"
            }
          }
        },
        "created_by": "5d1363adf599d850df93175e",
        "createdAt": "2020-12-14T09:17:39.953Z",
        "updatedAt": "2021-01-28T18:48:07.717Z",
        "__v": 0
      },
      "key": "some-title",
      "display": "SOme title"
    },
    "ticket_id": "43",
    "createdAt": "2021-01-28T17:25:25.013Z",
    "updatedAt": "2021-01-28T17:25:33.396Z",
    "__v": 0,
    "video_room_id": "6012f38557751ee8fc162cf7"
  }
}
```
</details>

</details>









---


### getNewTicketHistory
Gets history list for specific application level ticket



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").lead.getNewTicketHistory({  id : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").lead.getNewTicketHistory({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | Ticket ID for which history is to be fetched |  



Gets history list for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating.

*Returned Response:*




[TicketHistoryList](#TicketHistoryList)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Default</i></summary>

```json
{
  "value": {
    "docs": [
      {
        "_id": "602e5384204225eed5cadae7",
        "ticket_id": "41",
        "type": "comment",
        "value": {
          "text": "hello service",
          "media": []
        },
        "created_on": {
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
          "platform": "web",
          "meta": {
            "browser": {
              "name": "Chrome",
              "version": "88.0.4324.150"
            },
            "os": {
              "name": "macOS",
              "version": "11.2.0"
            },
            "platform": {
              "type": "desktop",
              "vendor": "Apple"
            },
            "engine": {
              "name": "Blink"
            }
          }
        },
        "created_by": {
          "gender": "male",
          "accountType": "user",
          "active": true,
          "profilePicUrl": "https://hdn-1.fynd.com/company/884/applications/000000000000000000000001/theme/pictures/free/original/default-profile_nxhzui.png",
          "hasOldPasswordHash": false,
          "_id": "5f8147abbd1a0a870f61f1a6",
          "phoneNumbers": [
            {
              "active": true,
              "primary": true,
              "verified": true,
              "phone": "9999999999",
              "countryCode": 91
            }
          ],
          "firstName": "Satyen",
          "lastName": "Maurya",
          "emails": [
            {
              "active": true,
              "primary": true,
              "verified": true,
              "email": "sattest@xyz.com"
            }
          ],
          "username": "sat5_xyz_com_11118",
          "createdAt": "2020-10-10T05:33:31.119Z",
          "updatedAt": "2020-10-10T05:33:31.119Z",
          "uid": "5678",
          "__v": 0
        },
        "createdAt": "2021-02-18T11:46:12.522Z",
        "updatedAt": "2021-02-18T11:46:12.522Z",
        "__v": 0,
        "id": "602e5384204225eed5cadae7"
      },
      {
        "_id": "60372aa78a046d4d79c46e15",
        "ticket_id": "41",
        "type": "diff",
        "value": {
          "status": [
            "pending",
            "in_progress"
          ]
        },
        "created_by": {
          "gender": "male",
          "accountType": "user",
          "active": true,
          "profilePicUrl": "https://d2co8r51m5ca2d.cloudfront.net/inapp_banners/default_profile_img.png",
          "hasOldPasswordHash": false,
          "_id": "5e79e721768c6bf54b783146",
          "emails": [
            {
              "active": true,
              "primary": true,
              "verified": true,
              "email": "niktest@xyz.com"
            },
            {
              "active": true,
              "primary": false,
              "verified": true,
              "email": "xyz@xyz.com"
            },
            {
              "active": true,
              "primary": false,
              "verified": true,
              "email": "xyz@xyz.com"
            },
            {
              "active": true,
              "primary": false,
              "verified": true,
              "email": "xyz@xyz.com"
            }
          ],
          "phoneNumbers": [
            {
              "active": true,
              "primary": true,
              "verified": true,
              "countryCode": 91,
              "phone": "9999999999"
            }
          ],
          "firstName": "Nikhil",
          "lastName": "Manapure",
          "username": "xyz_xyz_com",
          "createdAt": "2020-03-24T10:55:29.298Z",
          "updatedAt": "2020-05-12T07:46:41.816Z",
          "uid": "5567",
          "__v": 2
        },
        "createdAt": "2021-02-25T04:42:15.225Z",
        "updatedAt": "2021-02-25T04:42:15.225Z",
        "__v": 0,
        "id": "60372aa78a046d4d79c46e15"
      }
    ],
    "total": 2,
    "limit": 100,
    "page": {
      "type": ""
    },
    "pages": 1
  }
}
```
</details>

</details>









---


### getNewTickets
Gets the list of Application level Tickets and/or ticket filters depending on query params



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").lead.getNewTickets({  items : value,
 filters : value,
 q : value,
 status : value,
 priority : value,
 category : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").lead.getNewTickets({  items : value,
 filters : value,
 q : value,
 status : value,
 priority : value,
 category : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| items | boolean | no | Decides that the reponse will contain the list of tickets |    
| filters | boolean | no | Decides that the reponse will contain the ticket filters |    
| q | string | no | Search through ticket titles and description |    
| status | string | no | Filter tickets on status |    
| priority | PriorityEnum | no | Filter tickets on priority |    
| category | string | no | Filter tickets on category |  



Gets the list of Application level Tickets and/or ticket filters

*Returned Response:*




[TicketList](#TicketList)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Without items</i></summary>

```json
{
  "value": {
    "filters": {
      "statuses": [
        {
          "display": "Pending",
          "color": "#eae22b",
          "key": "pending"
        },
        {
          "display": "In Progress",
          "color": "#ffa951",
          "key": "in_progress"
        },
        {
          "display": "Resolved",
          "color": "#20c3a6",
          "key": "resolved"
        },
        {
          "display": "Closed",
          "color": "#41434c",
          "key": "closed"
        }
      ],
      "priorities": [
        {
          "display": "Low",
          "color": "#fed766",
          "key": "low"
        },
        {
          "display": "Medium",
          "color": "#f37736",
          "key": "medium"
        },
        {
          "display": "High",
          "color": "#fe4a49",
          "key": "high"
        }
      ],
      "assignees": [],
      "categories": [
        {
          "form": {
            "login_required": false,
            "should_notify": false,
            "inputs": [
              {
                "type": "email",
                "showRegexInput": false,
                "enum": [],
                "regex": "\\S+@\\S+\\.\\S+",
                "display": "email",
                "required": true,
                "key": "email"
              }
            ],
            "available_assignees": [],
            "_id": "602e900a2042255c03cadaf0",
            "title": "service-test-satyen",
            "description": "testing form from service",
            "slug": "service-test-satyen",
            "header_image": "https://hdn-1.addsale.com/x0/support-ticket/files/free/original/KZL86aN5l-service-test-satyen.jpeg",
            "application_id": "000000000000000000000001",
            "created_on": {
              "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
              "platform": "web",
              "meta": {
                "browser": {
                  "name": "Chrome",
                  "version": "88.0.4324.150"
                },
                "os": {
                  "name": "macOS",
                  "version": "11.2.0"
                },
                "platform": {
                  "type": "desktop",
                  "vendor": "Apple"
                },
                "engine": {
                  "name": "Blink"
                }
              }
            },
            "created_by": "5f8147abbd1a0a870f61f1a6",
            "createdAt": "2021-02-18T16:04:26.495Z",
            "updatedAt": "2021-02-18T16:04:26.495Z",
            "__v": 0
          },
          "key": "service-test-satyen",
          "display": "service-test-satyen"
        }
      ]
    }
  }
}
```
</details>

<details>
<summary><i>&nbsp; With items</i></summary>

```json
{
  "value": {
    "docs": [
      {
        "_id": "602d2652ce284d0b008d5c97",
        "status": {
          "display": "Pending",
          "color": "#eae22b",
          "key": "pending"
        },
        "priority": {
          "display": "Medium",
          "color": "#f37736",
          "key": "medium"
        },
        "assigned_to": {
          "agent_id": "5e79e721768c6bf54b783146",
          "gender": "male",
          "accountType": "user",
          "active": true,
          "profilePicUrl": "https://d2co8r51m5ca2d.cloudfront.net/inapp_banners/default_profile_img.png",
          "hasOldPasswordHash": false,
          "_id": "5e79e721768c6bf54b783146",
          "emails": [
            {
              "active": true,
              "primary": true,
              "verified": true,
              "email": "niktest@xyz.com"
            },
            {
              "active": true,
              "primary": false,
              "verified": true,
              "email": "xyz@xyz.com"
            },
            {
              "active": true,
              "primary": false,
              "verified": true,
              "email": "xyz@xyz.com"
            },
            {
              "active": true,
              "primary": false,
              "verified": true,
              "email": "xyz@xyz.com"
            }
          ],
          "phoneNumbers": [
            {
              "active": true,
              "primary": true,
              "verified": true,
              "countryCode": 91,
              "phone": "9999999999"
            }
          ],
          "firstName": "Nikhil",
          "lastName": "Manapure",
          "username": "xyz_xyz_com",
          "createdAt": "2020-03-24T10:55:29.298Z",
          "updatedAt": "2020-05-12T07:46:41.816Z",
          "uid": "5567",
          "__v": 2
        },
        "tags": [
          "asdf444"
        ],
        "context": {
          "application_id": "000000000000000000000001",
          "company_id": "1"
        },
        "created_on": {
          "user_agent": "Fynd Platform/0.0.1 (com.fynd.platform; build:3; iOS 14.2.0) Alamofire/5.0.2",
          "platform": "web",
          "meta": {
            "browser": {
              "name": "Fynd Platform",
              "version": "0.0.1"
            }
          }
        },
        "source": "sales_channel",
        "content": {
          "title": "asdf444 Response",
          "description": "",
          "attachments": []
        },
        "response_id": "602d2652ce284dee3c8d5c96",
        "category": {
          "form": {
            "login_required": false,
            "should_notify": true,
            "inputs": [
              {
                "type": "text",
                "showRegexInput": false,
                "enum": [],
                "display": "asdf",
                "key": "asdf"
              },
              {
                "type": "mobile",
                "showRegexInput": false,
                "enum": [],
                "display": "mob num",
                "regex": "[0-9]{10}$",
                "key": "mob-num"
              }
            ],
            "available_assignees": [
              "5e79e721768c6bf54b783146"
            ],
            "_id": "60124e4a4d2bc363625e1bf4",
            "title": "asdf444",
            "description": "adf",
            "slug": "asdf444",
            "application_id": "000000000000000000000001",
            "created_on": {
              "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36",
              "platform": "web",
              "meta": {
                "browser": {
                  "name": "Chrome",
                  "version": "88.0.4324.96"
                },
                "os": {
                  "name": "macOS",
                  "version": "10.15.7",
                  "versionName": "Catalina"
                },
                "platform": {
                  "type": "desktop",
                  "vendor": "Apple"
                },
                "engine": {
                  "name": "Blink"
                }
              }
            },
            "created_by": "5e79e721768c6bf54b783146",
            "createdAt": "2021-01-28T05:40:26.271Z",
            "updatedAt": "2021-02-18T16:02:32.086Z",
            "__v": 0,
            "poll_for_assignment": {
              "duration": 20,
              "message": "We are looking for executive to connect you",
              "success_message": "Executive found",
              "failure_message": "All our executives are busy at the moment, We have accepted your request and someone will connect with you soon!"
            }
          },
          "key": "asdf444",
          "display": "asdf444"
        },
        "ticket_id": "472",
        "createdAt": "2021-02-17T14:21:06.774Z",
        "updatedAt": "2021-02-17T14:21:06.774Z",
        "__v": 0,
        "id": "602d2652ce284d0b008d5c97"
      }
    ],
    "total": 472,
    "limit": 10,
    "page": 1,
    "pages": 48,
    "filters": {
      "statuses": [
        {
          "display": "Pending",
          "color": "#eae22b",
          "key": "pending"
        },
        {
          "display": "In Progress",
          "color": "#ffa951",
          "key": "in_progress"
        },
        {
          "display": "Resolved",
          "color": "#20c3a6",
          "key": "resolved"
        },
        {
          "display": "Closed",
          "color": "#41434c",
          "key": "closed"
        }
      ],
      "priorities": [
        {
          "display": "Low",
          "color": "#fed766",
          "key": "low"
        },
        {
          "display": "Medium",
          "color": "#f37736",
          "key": "medium"
        },
        {
          "display": "High",
          "color": "#fe4a49",
          "key": "high"
        }
      ],
      "assignees": [],
      "categories": [
        {
          "form": {
            "login_required": false,
            "should_notify": false,
            "inputs": [
              {
                "type": "email",
                "showRegexInput": false,
                "enum": [],
                "regex": "\\S+@\\S+\\.\\S+",
                "display": "email",
                "required": true,
                "key": "email"
              }
            ],
            "available_assignees": [],
            "_id": "602e900a2042255c03cadaf0",
            "title": "service-test-satyen",
            "description": "testing form from service",
            "slug": "service-test-satyen",
            "header_image": "https://hdn-1.addsale.com/x0/support-ticket/files/free/original/KZL86aN5l-service-test-satyen.jpeg",
            "application_id": "000000000000000000000001",
            "created_on": {
              "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
              "platform": "web",
              "meta": {
                "browser": {
                  "name": "Chrome",
                  "version": "88.0.4324.150"
                },
                "os": {
                  "name": "macOS",
                  "version": "11.2.0"
                },
                "platform": {
                  "type": "desktop",
                  "vendor": "Apple"
                },
                "engine": {
                  "name": "Blink"
                }
              }
            },
            "created_by": "5f8147abbd1a0a870f61f1a6",
            "createdAt": "2021-02-18T16:04:26.495Z",
            "updatedAt": "2021-02-18T16:04:26.495Z",
            "__v": 0
          },
          "key": "service-test-satyen",
          "display": "service-test-satyen"
        }
      ]
    }
  }
}
```
</details>

</details>









---


### getNewTokenForVideoRoom
Get Token to join a specific Video Room using it's unqiue name



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").lead.getNewTokenForVideoRoom({  uniqueName : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").lead.getNewTokenForVideoRoom({  uniqueName : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| uniqueName | string | yes | Unique name of video room |  



Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there.

*Returned Response:*




[GetTokenForVideoRoomResponse](#GetTokenForVideoRoomResponse)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Default</i></summary>

```json
{
  "value": {
    "access_token": "your_token_to_the_room"
  }
}
```
</details>

</details>









---


### getNewVideoParticipants
Get participants of a specific Video Room using it's unique name



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").lead.getNewVideoParticipants({  uniqueName : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").lead.getNewVideoParticipants({  uniqueName : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| uniqueName | string | yes | Unique name of Video Room |  



Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names.

*Returned Response:*




[GetParticipantsInsideVideoRoomResponse](#GetParticipantsInsideVideoRoomResponse)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Default</i></summary>

```json
{
  "value": {
    "participants": []
  }
}
```
</details>

</details>









---


### getPlatformTicket
Retreives ticket details of a company level ticket with ticket ID



```javascript
// Promise
const promise = platformClient.lead.getPlatformTicket({  id : value });

// Async/Await
const data = await platformClient.lead.getPlatformTicket({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | Tiket ID of the ticket to be fetched |  



Retreives ticket details of a company level ticket

*Returned Response:*




[Ticket](#Ticket)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Default</i></summary>

```json
{
  "value": {
    "context": {
      "company_id": "1"
    },
    "content": {
      "title": "SOme title Response",
      "description": "Handles communication between Administrator",
      "attachments": []
    },
    "status": {
      "display": "In Progress",
      "color": "#ffa951",
      "key": "in_progress"
    },
    "priority": {
      "display": "Medium",
      "color": "#f37736",
      "key": "medium"
    },
    "assigned_to": {
      "agent_id": "5d1363adf599d850df93175e",
      "gender": "male",
      "accountType": "user",
      "active": true,
      "profilePicUrl": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2136700473091190&height=400&width=400&ext=1554542761&hash=AeS6cuWIdjDdJJ-b",
      "hasOldPasswordHash": false,
      "_id": "5d1363adf599d850df93175e",
      "phoneNumbers": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "countryCode": 91,
          "phone": "9999999999"
        }
      ],
      "firstName": "Nikhil",
      "lastName": "Manapure",
      "emails": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "email": "niktest@xyz.com"
        }
      ],
      "username": "niktest_xyz_com_38425_20500281",
      "createdAt": "2019-01-01T17:22:38.528Z",
      "updatedAt": "2021-01-22T10:02:42.258Z",
      "uid": "20500281",
      "__v": 56
    },
    "tags": [
      "some-title"
    ],
    "_id": "6012f38557751ee8fc162cf7",
    "created_on": {
      "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36",
      "platform": "web",
      "meta": {
        "browser": {
          "name": "Chrome",
          "version": "88.0.4324.96"
        },
        "os": {
          "name": "macOS",
          "version": "10.15.7",
          "versionName": "Catalina"
        },
        "platform": {
          "type": "desktop",
          "vendor": "Apple"
        },
        "engine": {
          "name": "Blink"
        }
      }
    },
    "source": "sales_channel",
    "created_by": {
      "id": "5d1363adf599d850df93175e",
      "user": {
        "gender": "male",
        "accountType": "user",
        "active": true,
        "profilePicUrl": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2136700473091190&height=400&width=400&ext=1554542761&hash=AeS6cuWIdjDdJJ-b",
        "hasOldPasswordHash": false,
        "_id": "5d1363adf599d850df93175e",
        "phoneNumbers": [
          {
            "active": true,
            "primary": true,
            "verified": true,
            "countryCode": 91,
            "phone": "9999999999"
          }
        ],
        "firstName": "Nikhil",
        "lastName": "Manapure",
        "emails": [
          {
            "active": true,
            "primary": true,
            "verified": true,
            "email": "niktest@xyz.com"
          }
        ],
        "username": "niktest_xyz_com_38425_20500281",
        "createdAt": "2019-01-01T17:22:38.528Z",
        "updatedAt": "2021-01-22T10:02:42.258Z",
        "uid": "20500281",
        "__v": 56
      }
    },
    "response_id": "6012f38457751e0fb8162cf6",
    "category": {
      "form": {
        "login_required": false,
        "should_notify": false,
        "inputs": [
          {
            "required": false,
            "type": "text",
            "enum": [],
            "display": "Single lineeee",
            "key": "single-lineeee",
            "showRegexInput": false
          },
          {
            "required": false,
            "type": "email",
            "enum": [],
            "display": "Email",
            "regex": "\\S+@\\S+\\.\\S+",
            "key": "email",
            "showRegexInput": true
          },
          {
            "required": false,
            "type": "text",
            "enum": [],
            "display": "dfsdf",
            "key": "dfsdf",
            "showRegexInput": false
          }
        ],
        "available_assignees": [
          "5b9b98150df588546aaea6d2",
          "5c45d78395d7504f76c2cb37"
        ],
        "_id": "5fd72db3dc250f8decfc61b2",
        "title": "SOme title",
        "description": "SOme big description",
        "slug": "some-title",
        "application_id": "000000000000000000000003",
        "created_on": {
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36",
          "platform": "web",
          "meta": {
            "browser": {
              "name": "Chrome",
              "version": "87.0.4280.88"
            },
            "os": {
              "name": "macOS",
              "version": "10.15.6",
              "versionName": "Catalina"
            },
            "platform": {
              "type": "desktop",
              "vendor": "Apple"
            },
            "engine": {
              "name": "Blink"
            }
          }
        },
        "created_by": "5d1363adf599d850df93175e",
        "createdAt": "2020-12-14T09:17:39.953Z",
        "updatedAt": "2021-01-28T18:48:07.717Z",
        "__v": 0
      },
      "key": "some-title",
      "display": "SOme title"
    },
    "ticket_id": "43",
    "createdAt": "2021-01-28T17:25:25.013Z",
    "updatedAt": "2021-01-28T17:25:33.396Z",
    "__v": 0,
    "video_room_id": "6012f38557751ee8fc162cf7"
  }
}
```
</details>

</details>









---


### getPlatformTicketHistory
Gets history list for specific company level ticket



```javascript
// Promise
const promise = platformClient.lead.getPlatformTicketHistory({  id : value });

// Async/Await
const data = await platformClient.lead.getPlatformTicketHistory({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | Ticket ID for which history is to be fetched |  



Gets history list for specific company level ticket, this history is seen on ticket detail page, this can be comment, log or rating.

*Returned Response:*




[TicketHistoryList](#TicketHistoryList)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Default</i></summary>

```json
{
  "value": {
    "docs": [
      {
        "_id": "602e5384204225eed5cadae7",
        "ticket_id": "41",
        "type": "comment",
        "value": {
          "text": "hello service",
          "media": []
        },
        "created_on": {
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
          "platform": "web",
          "meta": {
            "browser": {
              "name": "Chrome",
              "version": "88.0.4324.150"
            },
            "os": {
              "name": "macOS",
              "version": "11.2.0"
            },
            "platform": {
              "type": "desktop",
              "vendor": "Apple"
            },
            "engine": {
              "name": "Blink"
            }
          }
        },
        "created_by": {
          "gender": "male",
          "accountType": "user",
          "active": true,
          "profilePicUrl": "https://hdn-1.fynd.com/company/884/applications/000000000000000000000001/theme/pictures/free/original/default-profile_nxhzui.png",
          "hasOldPasswordHash": false,
          "_id": "5f8147abbd1a0a870f61f1a6",
          "phoneNumbers": [
            {
              "active": true,
              "primary": true,
              "verified": true,
              "phone": "9999999999",
              "countryCode": 91
            }
          ],
          "firstName": "Satyen",
          "lastName": "Maurya",
          "emails": [
            {
              "active": true,
              "primary": true,
              "verified": true,
              "email": "sattest@xyz.com"
            }
          ],
          "username": "sat5_xyz_com_11118",
          "createdAt": "2020-10-10T05:33:31.119Z",
          "updatedAt": "2020-10-10T05:33:31.119Z",
          "uid": "5678",
          "__v": 0
        },
        "createdAt": "2021-02-18T11:46:12.522Z",
        "updatedAt": "2021-02-18T11:46:12.522Z",
        "__v": 0,
        "id": "602e5384204225eed5cadae7"
      },
      {
        "_id": "60372aa78a046d4d79c46e15",
        "ticket_id": "41",
        "type": "diff",
        "value": {
          "status": [
            "pending",
            "in_progress"
          ]
        },
        "created_by": {
          "gender": "male",
          "accountType": "user",
          "active": true,
          "profilePicUrl": "https://d2co8r51m5ca2d.cloudfront.net/inapp_banners/default_profile_img.png",
          "hasOldPasswordHash": false,
          "_id": "5e79e721768c6bf54b783146",
          "emails": [
            {
              "active": true,
              "primary": true,
              "verified": true,
              "email": "niktest@xyz.com"
            },
            {
              "active": true,
              "primary": false,
              "verified": true,
              "email": "xyz@xyz.com"
            },
            {
              "active": true,
              "primary": false,
              "verified": true,
              "email": "xyz@xyz.com"
            },
            {
              "active": true,
              "primary": false,
              "verified": true,
              "email": "xyz@xyz.com"
            }
          ],
          "phoneNumbers": [
            {
              "active": true,
              "primary": true,
              "verified": true,
              "countryCode": 91,
              "phone": "9999999999"
            }
          ],
          "firstName": "Nikhil",
          "lastName": "Manapure",
          "username": "xyz_xyz_com",
          "createdAt": "2020-03-24T10:55:29.298Z",
          "updatedAt": "2020-05-12T07:46:41.816Z",
          "uid": "5567",
          "__v": 2
        },
        "createdAt": "2021-02-25T04:42:15.225Z",
        "updatedAt": "2021-02-25T04:42:15.225Z",
        "__v": 0,
        "id": "60372aa78a046d4d79c46e15"
      }
    ],
    "total": 2,
    "limit": 100,
    "page": {
      "type": ""
    },
    "pages": 1
  }
}
```
</details>

</details>









---


### getPlatformTickets
Gets the list of company level tickets and/or ticket filters depending on query params



```javascript
// Promise
const promise = platformClient.lead.getPlatformTickets({  items : value,
 filters : value,
 q : value,
 status : value,
 priority : value,
 category : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await platformClient.lead.getPlatformTickets({  items : value,
 filters : value,
 q : value,
 status : value,
 priority : value,
 category : value,
 pageNo : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| items | boolean | no | Decides that the reponse will contain the list of tickets |    
| filters | boolean | no | Decides that the reponse will contain the ticket filters |    
| q | string | no | Search through ticket titles and description |    
| status | string | no | Filter tickets on status |    
| priority | PriorityEnum | no | Filter tickets on priority |    
| category | string | no | Filter tickets on category |    
| pageNo | number | no | The page number to navigate through the given set of results. |    
| pageSize | number | no | Number of items to retrieve in each page. Default is 12. |  



Gets the list of company level tickets and/or ticket filters

*Returned Response:*




[TicketList](#TicketList)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Without items</i></summary>

```json
{
  "value": {
    "filters": {
      "statuses": [
        {
          "display": "Pending",
          "color": "#eae22b",
          "key": "pending"
        },
        {
          "display": "In Progress",
          "color": "#ffa951",
          "key": "in_progress"
        },
        {
          "display": "Resolved",
          "color": "#20c3a6",
          "key": "resolved"
        },
        {
          "display": "Closed",
          "color": "#41434c",
          "key": "closed"
        }
      ],
      "priorities": [
        {
          "display": "Low",
          "color": "#fed766",
          "key": "low"
        },
        {
          "display": "Medium",
          "color": "#f37736",
          "key": "medium"
        },
        {
          "display": "High",
          "color": "#fe4a49",
          "key": "high"
        }
      ],
      "assignees": [],
      "categories": [
        {
          "form": {
            "login_required": false,
            "should_notify": false,
            "inputs": [
              {
                "type": "email",
                "showRegexInput": false,
                "enum": [],
                "regex": "\\S+@\\S+\\.\\S+",
                "display": "email",
                "required": true,
                "key": "email"
              }
            ],
            "available_assignees": [],
            "_id": "602e900a2042255c03cadaf0",
            "title": "service-test-satyen",
            "description": "testing form from service",
            "slug": "service-test-satyen",
            "header_image": "https://hdn-1.addsale.com/x0/support-ticket/files/free/original/KZL86aN5l-service-test-satyen.jpeg",
            "application_id": "000000000000000000000001",
            "created_on": {
              "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
              "platform": "web",
              "meta": {
                "browser": {
                  "name": "Chrome",
                  "version": "88.0.4324.150"
                },
                "os": {
                  "name": "macOS",
                  "version": "11.2.0"
                },
                "platform": {
                  "type": "desktop",
                  "vendor": "Apple"
                },
                "engine": {
                  "name": "Blink"
                }
              }
            },
            "created_by": "5f8147abbd1a0a870f61f1a6",
            "createdAt": "2021-02-18T16:04:26.495Z",
            "updatedAt": "2021-02-18T16:04:26.495Z",
            "__v": 0
          },
          "key": "service-test-satyen",
          "display": "service-test-satyen"
        }
      ]
    }
  }
}
```
</details>

<details>
<summary><i>&nbsp; With items</i></summary>

```json
{
  "value": {
    "docs": [
      {
        "_id": "602d2652ce284d0b008d5c97",
        "status": {
          "display": "Pending",
          "color": "#eae22b",
          "key": "pending"
        },
        "priority": {
          "display": "Medium",
          "color": "#f37736",
          "key": "medium"
        },
        "assigned_to": {
          "agent_id": "5e79e721768c6bf54b783146",
          "gender": "male",
          "accountType": "user",
          "active": true,
          "profilePicUrl": "https://d2co8r51m5ca2d.cloudfront.net/inapp_banners/default_profile_img.png",
          "hasOldPasswordHash": false,
          "_id": "5e79e721768c6bf54b783146",
          "emails": [
            {
              "active": true,
              "primary": true,
              "verified": true,
              "email": "niktest@xyz.com"
            },
            {
              "active": true,
              "primary": false,
              "verified": true,
              "email": "xyz@xyz.com"
            },
            {
              "active": true,
              "primary": false,
              "verified": true,
              "email": "xyz@xyz.com"
            },
            {
              "active": true,
              "primary": false,
              "verified": true,
              "email": "xyz@xyz.com"
            }
          ],
          "phoneNumbers": [
            {
              "active": true,
              "primary": true,
              "verified": true,
              "countryCode": 91,
              "phone": "9999999999"
            }
          ],
          "firstName": "Nikhil",
          "lastName": "Manapure",
          "username": "xyz_xyz_com",
          "createdAt": "2020-03-24T10:55:29.298Z",
          "updatedAt": "2020-05-12T07:46:41.816Z",
          "uid": "5567",
          "__v": 2
        },
        "tags": [
          "asdf444"
        ],
        "context": {
          "application_id": "000000000000000000000001",
          "company_id": "1"
        },
        "created_on": {
          "user_agent": "Fynd Platform/0.0.1 (com.fynd.platform; build:3; iOS 14.2.0) Alamofire/5.0.2",
          "platform": "web",
          "meta": {
            "browser": {
              "name": "Fynd Platform",
              "version": "0.0.1"
            }
          }
        },
        "source": "sales_channel",
        "content": {
          "title": "asdf444 Response",
          "description": "",
          "attachments": []
        },
        "response_id": "602d2652ce284dee3c8d5c96",
        "category": {
          "form": {
            "login_required": false,
            "should_notify": true,
            "inputs": [
              {
                "type": "text",
                "showRegexInput": false,
                "enum": [],
                "display": "asdf",
                "key": "asdf"
              },
              {
                "type": "mobile",
                "showRegexInput": false,
                "enum": [],
                "display": "mob num",
                "regex": "[0-9]{10}$",
                "key": "mob-num"
              }
            ],
            "available_assignees": [
              "5e79e721768c6bf54b783146"
            ],
            "_id": "60124e4a4d2bc363625e1bf4",
            "title": "asdf444",
            "description": "adf",
            "slug": "asdf444",
            "application_id": "000000000000000000000001",
            "created_on": {
              "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36",
              "platform": "web",
              "meta": {
                "browser": {
                  "name": "Chrome",
                  "version": "88.0.4324.96"
                },
                "os": {
                  "name": "macOS",
                  "version": "10.15.7",
                  "versionName": "Catalina"
                },
                "platform": {
                  "type": "desktop",
                  "vendor": "Apple"
                },
                "engine": {
                  "name": "Blink"
                }
              }
            },
            "created_by": "5e79e721768c6bf54b783146",
            "createdAt": "2021-01-28T05:40:26.271Z",
            "updatedAt": "2021-02-18T16:02:32.086Z",
            "__v": 0,
            "poll_for_assignment": {
              "duration": 20,
              "message": "We are looking for executive to connect you",
              "success_message": "Executive found",
              "failure_message": "All our executives are busy at the moment, We have accepted your request and someone will connect with you soon!"
            }
          },
          "key": "asdf444",
          "display": "asdf444"
        },
        "ticket_id": "472",
        "createdAt": "2021-02-17T14:21:06.774Z",
        "updatedAt": "2021-02-17T14:21:06.774Z",
        "__v": 0,
        "id": "602d2652ce284d0b008d5c97"
      }
    ],
    "total": 472,
    "limit": 10,
    "page": 1,
    "pages": 48,
    "filters": {
      "statuses": [
        {
          "display": "Pending",
          "color": "#eae22b",
          "key": "pending"
        },
        {
          "display": "In Progress",
          "color": "#ffa951",
          "key": "in_progress"
        },
        {
          "display": "Resolved",
          "color": "#20c3a6",
          "key": "resolved"
        },
        {
          "display": "Closed",
          "color": "#41434c",
          "key": "closed"
        }
      ],
      "priorities": [
        {
          "display": "Low",
          "color": "#fed766",
          "key": "low"
        },
        {
          "display": "Medium",
          "color": "#f37736",
          "key": "medium"
        },
        {
          "display": "High",
          "color": "#fe4a49",
          "key": "high"
        }
      ],
      "assignees": [],
      "categories": [
        {
          "form": {
            "login_required": false,
            "should_notify": false,
            "inputs": [
              {
                "type": "email",
                "showRegexInput": false,
                "enum": [],
                "regex": "\\S+@\\S+\\.\\S+",
                "display": "email",
                "required": true,
                "key": "email"
              }
            ],
            "available_assignees": [],
            "_id": "602e900a2042255c03cadaf0",
            "title": "service-test-satyen",
            "description": "testing form from service",
            "slug": "service-test-satyen",
            "header_image": "https://hdn-1.addsale.com/x0/support-ticket/files/free/original/KZL86aN5l-service-test-satyen.jpeg",
            "application_id": "000000000000000000000001",
            "created_on": {
              "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
              "platform": "web",
              "meta": {
                "browser": {
                  "name": "Chrome",
                  "version": "88.0.4324.150"
                },
                "os": {
                  "name": "macOS",
                  "version": "11.2.0"
                },
                "platform": {
                  "type": "desktop",
                  "vendor": "Apple"
                },
                "engine": {
                  "name": "Blink"
                }
              }
            },
            "created_by": "5f8147abbd1a0a870f61f1a6",
            "createdAt": "2021-02-18T16:04:26.495Z",
            "updatedAt": "2021-02-18T16:04:26.495Z",
            "__v": 0
          },
          "key": "service-test-satyen",
          "display": "service-test-satyen"
        }
      ]
    }
  }
}
```
</details>

</details>









---


### getPlatformVideoParticipants
Get participants of a specific Video Room using it's unique name



```javascript
// Promise
const promise = platformClient.lead.getPlatformVideoParticipants({  uniqueName : value });

// Async/Await
const data = await platformClient.lead.getPlatformVideoParticipants({  uniqueName : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| uniqueName | string | yes | Unique name of Video Room |  



Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names.

*Returned Response:*




[GetParticipantsInsideVideoRoomResponse](#GetParticipantsInsideVideoRoomResponse)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Default</i></summary>

```json
{
  "value": {
    "participants": []
  }
}
```
</details>

</details>









---


### getTokenForPlatformVideoRoom
Get Token to join a specific Video Room using it's unqiue name



```javascript
// Promise
const promise = platformClient.lead.getTokenForPlatformVideoRoom({  uniqueName : value });

// Async/Await
const data = await platformClient.lead.getTokenForPlatformVideoRoom({  uniqueName : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| uniqueName | string | yes | Unique name of video room |  



Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there.

*Returned Response:*




[GetTokenForVideoRoomResponse](#GetTokenForVideoRoomResponse)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Default</i></summary>

```json
{
  "value": {
    "access_token": "your_token_to_the_room"
  }
}
```
</details>

</details>









---


### openVideoRoom
Open a video room.



```javascript
// Promise
const promise = platformClient.application("<APPLICATION_ID>").lead.openVideoRoom({  body : value });

// Async/Await
const data = await platformClient.application("<APPLICATION_ID>").lead.openVideoRoom({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CreateVideoRoomPayload](#CreateVideoRoomPayload) | yes | Request body |


Open a video room.

*Returned Response:*




[CreateVideoRoomResponse](#CreateVideoRoomResponse)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Default</i></summary>

```json
{
  "value": {
    "unique_name": "alphanumeric123"
  }
}
```
</details>

</details>









---


### submitFeedback
Submit a response for feeback form against that ticket



```javascript
// Promise
const promise = platformClient.lead.submitFeedback({  id : value,
 body : value });

// Async/Await
const data = await platformClient.lead.submitFeedback({  id : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | Ticket ID for which feedback is to be submitted |  
| body | [TicketFeedbackPayload](#TicketFeedbackPayload) | yes | Request body |


Submit a response for feeback form against that ticket

*Returned Response:*




[TicketFeedback](#TicketFeedback)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Default</i></summary>

```json
{
  "value": {
    "_id": "60c255bf00ecabfad19e9601",
    "company_id": "1",
    "ticket_id": "6095812876d2bf17143cb3b3",
    "user": {
      "_id": "5f8147abbd1a0a870f61f1a6",
      "authenticated": true,
      "user_id": "5f8147abbd1a0a870f61f1a6"
    },
    "category": "customers",
    "response": [
      {
        "audio": 2,
        "video": 6,
        "display": "",
        "key": "",
        "value": ""
      }
    ],
    "createdAt": "2021-06-10T18:11:11.349Z",
    "updatedAt": "2021-06-10T18:11:11.349Z",
    "__v": 0
  }
}
```
</details>

</details>









---




### Schemas


#### [AddTicketPayload](#AddTicketPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _custom_json | string? |  yes  | optional custom data that needs to be sent |
 | category | string |  no  | Category of the ticket |
 | content | [TicketContent](#TicketContent) |  no  |  |
 | created_by | string? |  yes  | Creator of the ticket |
 | priority | [PriorityEnum](#PriorityEnum)? |  yes  |  |
 | status | string? |  yes  | Status of the ticket |
 

---

#### [AgentChangePayload](#AgentChangePayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | agent_id | string |  no  | Agent's unique ID |
 

---

#### [CloseVideoRoomResponse](#CloseVideoRoomResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  | Denotes if operation was successfully |
 

---

#### [CreateCustomFormPayload](#CreateCustomFormPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string? |  yes  | Description of the form |
 | header_image | string? |  yes  | Header image that is to be shown for the form |
 | inputs | [string] |  no  | List of all the form components |
 | poll_for_assignment | [PollForAssignment](#PollForAssignment)? |  yes  |  |
 | priority | [PriorityEnum](#PriorityEnum) |  no  |  |
 | should_notify | boolean? |  yes  | Indicates if staff should be notified when a response is received |
 | slug | string |  no  | Slug for the form |
 | success_message | string? |  yes  | Success message that will be shown on submission |
 | title | string |  no  | Title for the form |
 

---

#### [CreatedOn](#CreatedOn)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | user_agent | string |  no  | Useragent details |
 

---

#### [CreateVideoRoomPayload](#CreateVideoRoomPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | notify | [[NotifyUser](#NotifyUser)]? |  yes  | List of people to be notified |
 | unique_name | string |  no  | Ticket id |
 

---

#### [CreateVideoRoomResponse](#CreateVideoRoomResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | unique_name | string |  no  | Video Room's unique name |
 

---

#### [CustomForm](#CustomForm)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  | Unique identifier for the form |
 | application_id | string |  no  | Application ID for form |
 | created_on | [CreatedOn](#CreatedOn)? |  yes  |  |
 | description | string? |  yes  | Form description that will be shown to the user |
 | header_image | string? |  yes  | Form header image that will be shown to the user |
 | inputs | [string] |  no  | List of all the form fields |
 | login_required | boolean |  no  | Denotes if login is required to make a form response submission |
 | poll_for_assignment | [PollForAssignment](#PollForAssignment)? |  yes  |  |
 | priority | [Priority](#Priority) |  no  |  |
 | should_notify | boolean |  no  | Denotes if new response submission for the form should be notified to the assignees |
 | slug | string |  no  | Slug for the form, which is to be used for accessing the form |
 | submit_button | [SubmitButton](#SubmitButton)? |  yes  |  |
 | success_message | string? |  yes  | Message that is to be shown on succesfull form response submission |
 | title | string |  no  | Form title that will be shown to the user |
 

---

#### [CustomFormList](#CustomFormList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[CustomForm](#CustomForm)]? |  yes  | List of forms |
 | page | [Page](#Page)? |  yes  |  |
 

---

#### [Debug](#Debug)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | platform | string? |  yes  | Platform of user |
 | source | string? |  yes  | Source of user |
 

---

#### [EditCustomFormPayload](#EditCustomFormPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string? |  yes  | Description of the form |
 | header_image | string? |  yes  | Header image that is to be shown for the form |
 | inputs | [string] |  no  | List of all the form components |
 | login_required | boolean? |  yes  | Denotes if login is required to make a form response submission |
 | poll_for_assignment | [PollForAssignment](#PollForAssignment)? |  yes  |  |
 | priority | [PriorityEnum](#PriorityEnum) |  no  |  |
 | should_notify | boolean? |  yes  | Indicates if staff should be notified when a response is received |
 | success_message | string? |  yes  | Success message that will be shown on submission |
 | title | string |  no  | Title for the form |
 

---

#### [EditTicketPayload](#EditTicketPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | assigned_to | [AgentChangePayload](#AgentChangePayload)? |  yes  |  |
 | category | string? |  yes  | Category assigned to the ticket |
 | content | [TicketContent](#TicketContent)? |  yes  |  |
 | priority | [PriorityEnum](#PriorityEnum)? |  yes  |  |
 | source | string? |  yes  | Denotes if the ticket was created at company or application level |
 | status | string? |  yes  | Denotes in what state is the ticket |
 | sub_category | string? |  yes  | Sub-category assigned to the ticket |
 | tags | [string]? |  yes  | Tags relevant to ticket |
 

---

#### [Email](#Email)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | boolean? |  yes  | Denotes if the email is active |
 | email | string? |  yes  | Email Address |
 | primary | boolean? |  yes  | Denotes it's the primary email for the account |
 | verified | boolean? |  yes  | Denotes it's a verified email |
 

---

#### [ErrorMessage](#ErrorMessage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 

---

#### [FeedbackForm](#FeedbackForm)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | inputs | string? |  yes  | Input details for the feed back form |
 | timestamps | string? |  yes  | Gives details of category releted data |
 | title | string? |  yes  | Title for the feed back form |
 

---

#### [FeedbackResponseItem](#FeedbackResponseItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display | string |  no  | Question/Title of the form field |
 | key | string |  no  | Key of the form field |
 | value | string |  no  | User response value for the form field |
 

---

#### [Filter](#Filter)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | assignees | [string] |  no  | List of support staff availble for tickets assignment |
 | categories | [[TicketCategory](#TicketCategory)]? |  yes  | List of possible categories for tickets |
 | priorities | [[Priority](#Priority)] |  no  | List of possible priorities for tickets |
 | statuses | [[Status](#Status)] |  no  | List of possible statuses for tickets |
 

---

#### [GetParticipantsInsideVideoRoomResponse](#GetParticipantsInsideVideoRoomResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | participants | [[Participant](#Participant)] |  no  | List of participants of the video room |
 

---

#### [GetTokenForVideoRoomResponse](#GetTokenForVideoRoomResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | access_token | string |  no  | Access token to be used for video room |
 

---

#### [NotifyUser](#NotifyUser)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country_code | string |  no  | Country code |
 | phone_number | string |  no  | Phone number |
 

---

#### [Page](#Page)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number? |  yes  |  |
 | has_next | boolean? |  yes  |  |
 | has_previous | boolean? |  yes  |  |
 | item_total | number? |  yes  |  |
 | next_id | string? |  yes  |  |
 | size | number? |  yes  |  |
 | type | string |  no  |  |
 

---

#### [Participant](#Participant)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | identity | string? |  yes  | Unique identifier of participant |
 | status | string? |  yes  | Status of participant |
 | user | [UserSchema](#UserSchema)? |  yes  |  |
 

---

#### [PhoneNumber](#PhoneNumber)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | boolean? |  yes  | Denotes if the phone number is active |
 | country_code | number? |  yes  | Country code |
 | phone | string? |  yes  | Phone number |
 | primary | boolean? |  yes  | Denotes it's the primary phone number for the account |
 | verified | boolean? |  yes  | Denotes it's a verified phone number |
 

---

#### [PollForAssignment](#PollForAssignment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | duration | number |  no  | Duration for polling of staff |
 | failure_message | string |  no  | Message if polling failed |
 | message | string |  no  | Message for polling |
 | success_message | string |  no  | Message for successful polling |
 

---

#### [Priority](#Priority)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | color | string |  no  | Color for priority |
 | display | string |  no  | Display text for priority |
 | key | [PriorityEnum](#PriorityEnum) |  no  |  |
 

---

#### [Status](#Status)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | color | string |  no  | Color for status |
 | display | string |  no  | Display text for status |
 | key | string |  no  | Key for status |
 

---

#### [SubmitButton](#SubmitButton)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | background_color | string |  no  | Color for submit button |
 | title | string |  no  | Title for submit button |
 | title_color | string |  no  | Title color submit button |
 

---

#### [Ticket](#Ticket)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _custom_json | string? |  yes  | custom json relevant to the ticket |
 | _id | string |  no  | Unique identifier for the ticket |
 | assigned_to | string? |  yes  | Details of support staff to whom ticket is assigned |
 | category | [TicketCategory](#TicketCategory) |  no  |  |
 | content | [TicketContent](#TicketContent)? |  yes  |  |
 | context | [TicketContext](#TicketContext)? |  yes  |  |
 | created_at | string? |  yes  | Time when the ticket was created |
 | created_by | string? |  yes  | User details of ticket creator |
 | created_on | [CreatedOn](#CreatedOn)? |  yes  |  |
 | integration | string? |  yes  | Integration type and its details of the ticket |
 | is_feedback_pending | boolean? |  yes  | Denotes if feedback submission is pending for the ticket |
 | priority | [Priority](#Priority) |  no  |  |
 | response_id | string? |  yes  | Details of company and application realated to the ticket |
 | source | [TicketSourceEnum](#TicketSourceEnum) |  no  |  |
 | status | [Status](#Status) |  no  |  |
 | sub_category | string? |  yes  | Sub-category assigned to the ticket |
 | tags | [string]? |  yes  | Tags relevant to ticket |
 | updated_at | string? |  yes  | Time when the ticket was last updated |
 

---

#### [TicketAsset](#TicketAsset)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display | string? |  yes  | Display text for asset |
 | type | [TicketAssetTypeEnum](#TicketAssetTypeEnum) |  no  |  |
 | value | string |  no  | To be used for details |
 

---

#### [TicketCategory](#TicketCategory)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display | string |  no  | Category display value identifier |
 | feedback_form | [FeedbackForm](#FeedbackForm)? |  yes  |  |
 | group_id | number? |  yes  | Group id of category releted data |
 | key | string |  no  | Category key value identifier |
 | sub_categories | [TicketCategory](#TicketCategory)? |  yes  |  |
 

---

#### [TicketContent](#TicketContent)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | attachments | [[TicketAsset](#TicketAsset)]? |  yes  | List of all attachments related to the ticket |
 | description | string? |  yes  | Long description of issue |
 | title | string |  no  | Title for ticket |
 

---

#### [TicketContext](#TicketContext)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application_id | string? |  yes  | Application ID related to the ticket |
 | company_id | string |  no  | Company ID related to the ticket |
 

---

#### [TicketFeedback](#TicketFeedback)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  | Unique identifier for the feedback |
 | category | string? |  yes  | Category of the ticket |
 | company_id | string |  no  | Company id for which ticket was raised |
 | created_at | string? |  yes  | Time when the feedback was created |
 | response | [[FeedbackResponseItem](#FeedbackResponseItem)] |  no  |  |
 | ticket_id | string |  no  | Readable ticket number |
 | updated_at | string? |  yes  | Time when the feedback was last updated |
 | user | string? |  yes  | User who submitted the feedback |
 

---

#### [TicketFeedbackList](#TicketFeedbackList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[TicketFeedback](#TicketFeedback)]? |  yes  | List of all ticket feedback for the ticket |
 

---

#### [TicketFeedbackPayload](#TicketFeedbackPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | form_response | string? |  yes  | Key-value pairs of all the form fields and their response |
 

---

#### [TicketHistory](#TicketHistory)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  | Unique identifier of the history event |
 | created_at | string? |  yes  | Time of creation of the history event |
 | created_by | string? |  yes  | User who created the history event |
 | created_on | [CreatedOn](#CreatedOn)? |  yes  |  |
 | ticket_id | string |  no  | Readable ticket number |
 | type | string |  no  | Type of the history event |
 | updated_at | string? |  yes  | Time of last update of the history event |
 | value | string |  no  | Data of the history event |
 

---

#### [TicketHistoryList](#TicketHistoryList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[TicketHistory](#TicketHistory)]? |  yes  | List of ticket history |
 | page | [Page](#Page)? |  yes  |  |
 

---

#### [TicketHistoryPayload](#TicketHistoryPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | [HistoryTypeEnum](#HistoryTypeEnum) |  no  |  |
 | value | string |  no  | Details of history event |
 

---

#### [TicketList](#TicketList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | filters | [Filter](#Filter)? |  yes  |  |
 | items | [[Ticket](#Ticket)]? |  yes  | List of tickets |
 | page | [Page](#Page)? |  yes  |  |
 

---

#### [UserSchema](#UserSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  | Unique identifier of user |
 | account_type | string? |  yes  | Type of account |
 | active | boolean? |  yes  | Is account active |
 | created_at | string? |  yes  | Time of user creation |
 | debug | [Debug](#Debug)? |  yes  |  |
 | emails | [[Email](#Email)]? |  yes  | List of email addresses |
 | first_name | string? |  yes  | First name |
 | gender | string? |  yes  | Gender of user |
 | has_old_password_hash | boolean? |  yes  | Denotes if user has old password hash |
 | last_name | string? |  yes  | Last name |
 | phone_numbers | [[PhoneNumber](#PhoneNumber)]? |  yes  | List of phone numbers |
 | profile_pic_url | string? |  yes  | URL for profile pic |
 | uid | string? |  yes  | Unique identifier of user |
 | updated_at | string? |  yes  | Last time of user details update |
 | username | string? |  yes  | username of user |
 

---




### Enums





 #### [PriorityEnum](#PriorityEnum)
 Type : string

 | Name | Value | Description |
 | ---- | ----- | ----------- |
 | low | low | This means ticket is low priority |
 | medium | medium | This means ticket is medium priority |
 | high | high | This means ticket is high priority |
 | urgent | urgent | This means ticket is of urgent priority |

---



 #### [HistoryTypeEnum](#HistoryTypeEnum)
 Type : string

 | Name | Value | Description |
 | ---- | ----- | ----------- |
 | rating | rating | This means history event is a rating |
 | log | log | This means history event is a changelog |
 | comment | comment | This means history event is a comment |
 | thread | thread | This means history event is a thread |

---



 #### [TicketAssetTypeEnum](#TicketAssetTypeEnum)
 Type : string

 | Name | Value | Description |
 | ---- | ----- | ----------- |
 | image | image | Denotes asset is of image type |
 | video | video | Denotes asset is of video type |
 | file | file | Denotes asset is of file type |
 | youtube | youtube | Denotes asset is an youtube link |
 | product | product | Denotes asset is of product type |
 | collection | collection | Denotes asset is of collection type |
 | brand | brand | Denotes asset is of brand type |
 | shipment | shipment | Denotes asset is of shipment type |
 | order | order | Denotes asset is of order type |

---



 #### [TicketSourceEnum](#TicketSourceEnum)
 Type : string

 | Name | Value | Description |
 | ---- | ----- | ----------- |
 | platformPanel | platform_panel | This means it is company level ticket |
 | salesChannel | sales_channel | This means it is a application/sales channel level ticket |

---






