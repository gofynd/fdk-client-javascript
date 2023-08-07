




##### [Back to Application docs](./README.md)

## Lead Methods
Handles communication between Staff and Users

* [createHistory](#createhistory)
* [createTicket](#createticket)
* [getCustomForm](#getcustomform)
* [getParticipantsInsideVideoRoom](#getparticipantsinsidevideoroom)
* [getTicket](#getticket)
* [getTokenForVideoRoom](#gettokenforvideoroom)
* [submitCustomForm](#submitcustomform)



## Methods with example and description




### createHistory
Create history for specific Ticket



```javascript
// Promise
const promise = applicationClient.lead.createHistory({  id : value,
 body : value });

// Async/Await
const data = await applicationClient.lead.createHistory({  id : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | Ticket ID for which history is created |  
| body | [TicketHistoryPayload](#TicketHistoryPayload) | yes | Request body |


Create history for specific Ticket, this history is seen on ticket detail page, this can be comment, log or rating.

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
    "created_by": {},
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
Create Ticket



```javascript
// Promise
const promise = applicationClient.lead.createTicket({  body : value });

// Async/Await
const data = await applicationClient.lead.createTicket({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [AddTicketPayload](#AddTicketPayload) | yes | Request body |


This is used to Create Ticket.

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
      "title": "Some title Response",
      "description": "description",
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
Get specific Custom Form using it's slug



```javascript
// Promise
const promise = applicationClient.lead.getCustomForm({  slug : value });

// Async/Await
const data = await applicationClient.lead.getCustomForm({  slug : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| slug | string | yes | Slug of form whose response is getting submitted |  



Get specific Custom Form using it's slug, this is used to view the form.

*Returned Response:*




[CustomForm](#CustomForm)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Default</i></summary>

```json
{
  "value": {
    "priority": "high",
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
}
```
</details>

</details>









---


### getParticipantsInsideVideoRoom
Get participants of a specific Video Room using it's unique name



```javascript
// Promise
const promise = applicationClient.lead.getParticipantsInsideVideoRoom({  uniqueName : value });

// Async/Await
const data = await applicationClient.lead.getParticipantsInsideVideoRoom({  uniqueName : value });
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


### getTicket
Get Ticket with the specific id



```javascript
// Promise
const promise = applicationClient.lead.getTicket({  id : value });

// Async/Await
const data = await applicationClient.lead.getTicket({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | ID of ticket to be retrieved |  



Get Ticket with the specific id, this is used to view the ticket details

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
      "title": "Tickets",
      "description": "Tickets Data",
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


### getTokenForVideoRoom
Get Token to join a specific Video Room using it's unqiue name



```javascript
// Promise
const promise = applicationClient.lead.getTokenForVideoRoom({  uniqueName : value });

// Async/Await
const data = await applicationClient.lead.getTokenForVideoRoom({  uniqueName : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| uniqueName | string | yes | Unique name of Video Room |  



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


### submitCustomForm
Submit Response for a specific Custom Form using it's slug



```javascript
// Promise
const promise = applicationClient.lead.submitCustomForm({  slug : value,
 body : value });

// Async/Await
const data = await applicationClient.lead.submitCustomForm({  slug : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| slug | string | yes | Slug of form whose response is getting submitted |  
| body | [CustomFormSubmissionPayload](#CustomFormSubmissionPayload) | yes | Request body |


Submit Response for a specific Custom Form using it's slug, this response is then used to create a ticket on behalf of the user.

*Returned Response:*




[SubmitCustomFormResponse](#SubmitCustomFormResponse)

Success




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Default</i></summary>

```json
{
  "value": {
    "ticket": {
      "context": {
        "application_id": "000000000000000000000003",
        "company_id": "884"
      },
      "content": {
        "title": "Some title Response",
        "description": "description",
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
 | subscribers | [string]? |  yes  |  |
 

---

#### [CreatedOn](#CreatedOn)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | user_agent | string |  no  | Useragent details |
 

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

#### [CustomFormSubmissionPayload](#CustomFormSubmissionPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | attachments | [[TicketAsset](#TicketAsset)]? |  yes  | List of all attachments related to the form |
 | response | [string] |  no  | Form response |
 

---

#### [Debug](#Debug)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | platform | string? |  yes  | Platform of user |
 | source | string? |  yes  | Source of user |
 

---

#### [Email](#Email)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | boolean? |  yes  | Denotes if the email is active |
 | email | string? |  yes  | Email Address |
 | primary | boolean? |  yes  | Denotes it's the primary email for the account |
 | verified | boolean? |  yes  | Denotes it's a verified email |
 

---

#### [FeedbackForm](#FeedbackForm)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | inputs | string? |  yes  | Input details for the feed back form |
 | timestamps | string? |  yes  | Gives details of category releted data |
 | title | string? |  yes  | Title for the feed back form |
 

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

#### [SubmitCustomFormResponse](#SubmitCustomFormResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  | Success message for form submission |
 | ticket | [Ticket](#Ticket)? |  yes  |  |
 

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

#### [TicketHistoryPayload](#TicketHistoryPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | [HistoryTypeEnum](#HistoryTypeEnum) |  no  |  |
 | value | string |  no  | Details of history event |
 

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






