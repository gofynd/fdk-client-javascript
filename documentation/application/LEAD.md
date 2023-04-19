




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
const promise = lead.createHistory({  id : value,
 body : value });

// Async/Await
const data = await lead.createHistory({  id : value,
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
    "created_by": "5d1363adf599d850df93175e",
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
const promise = lead.createTicket({  body : value });

// Async/Await
const data = await lead.createTicket({  body : value });
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
      "title": "SOme title Response",
      "description": "<b>Single lineeee</b>: asdf<br><b>Email</b>: asdf@asdf.com<br><b>dfsdf</b>: asdf<br>",
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
const promise = lead.getCustomForm({  slug : value });

// Async/Await
const data = await lead.getCustomForm({  slug : value });
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
const promise = lead.getParticipantsInsideVideoRoom({  uniqueName : value });

// Async/Await
const data = await lead.getParticipantsInsideVideoRoom({  uniqueName : value });
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
const promise = lead.getTicket({  id : value });

// Async/Await
const data = await lead.getTicket({  id : value });
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
      "title": "SOme title Response",
      "description": "<b>Single lineeee</b>: asdf<br><b>Email</b>: asdf@asdf.com<br><b>dfsdf</b>: asdf<br>",
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
const promise = lead.getTokenForVideoRoom({  uniqueName : value });

// Async/Await
const data = await lead.getTokenForVideoRoom({  uniqueName : value });
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
const promise = lead.submitCustomForm({  slug : value,
 body : value });

// Async/Await
const data = await lead.submitCustomForm({  slug : value,
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
        "title": "SOme title Response",
        "description": "<b>Single lineeee</b>: asdf<br><b>Email</b>: asdf@asdf.com<br><b>dfsdf</b>: asdf<br>",
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
 | _custom_json | string |  no  |  |
 | category | string |  yes  |  |
 | content | [TicketContent](#TicketContent) |  yes  |  |
 | created_by | string |  no  |  |
 | priority | [PriorityEnum](#PriorityEnum) |  no  |  |
 | status | string |  no  |  |
 

---

#### [AgentChangePayload](#AgentChangePayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | agent_id | string |  yes  |  |
 

---

#### [CategoryData](#CategoryData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | list | [TicketCategory](#TicketCategory) |  no  |  |
 

---

#### [CloseVideoRoomResponse](#CloseVideoRoomResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  |  |
 

---

#### [CommunicationDetails](#CommunicationDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string |  no  |  |
 | enabled | boolean |  no  |  |
 | title | string |  no  |  |
 | type | string |  no  |  |
 | value | string |  no  |  |
 

---

#### [CreateCustomFormPayload](#CreateCustomFormPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string |  no  |  |
 | header_image | string |  no  |  |
 | inputs | [string] |  yes  |  |
 | poll_for_assignment | [PollForAssignment](#PollForAssignment) |  no  |  |
 | priority | [PriorityEnum](#PriorityEnum) |  yes  |  |
 | should_notify | boolean |  no  |  |
 | slug | string |  yes  |  |
 | success_message | string |  no  |  |
 | title | string |  yes  |  |
 

---

#### [CreatedOn](#CreatedOn)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | user_agent | string |  yes  |  |
 

---

#### [CreateVideoRoomPayload](#CreateVideoRoomPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | notify | [[NotifyUser](#NotifyUser)] |  no  |  |
 | unique_name | string |  yes  |  |
 

---

#### [CreateVideoRoomResponse](#CreateVideoRoomResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | unique_name | string |  yes  |  |
 

---

#### [CustomForm](#CustomForm)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  yes  |  |
 | application_id | string |  yes  |  |
 | created_on | [CreatedOn](#CreatedOn) |  no  |  |
 | description | string |  no  |  |
 | header_image | string |  no  |  |
 | inputs | [string] |  yes  |  |
 | login_required | boolean |  yes  |  |
 | poll_for_assignment | [PollForAssignment](#PollForAssignment) |  no  |  |
 | priority | [Priority](#Priority) |  yes  |  |
 | should_notify | boolean |  yes  |  |
 | slug | string |  yes  |  |
 | submit_button | [SubmitButton](#SubmitButton) |  no  |  |
 | success_message | string |  no  |  |
 | title | string |  yes  |  |
 

---

#### [CustomFormList](#CustomFormList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[CustomForm](#CustomForm)] |  no  |  |
 | page | [Page](#Page) |  no  |  |
 

---

#### [CustomFormSubmissionPayload](#CustomFormSubmissionPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | attachments | [[TicketAsset](#TicketAsset)] |  no  |  |
 | response | [string] |  yes  |  |
 

---

#### [Debug](#Debug)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | platform | string |  no  |  |
 | source | string |  no  |  |
 

---

#### [EditCustomFormPayload](#EditCustomFormPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string |  no  |  |
 | header_image | string |  no  |  |
 | inputs | [string] |  yes  |  |
 | login_required | boolean |  no  |  |
 | poll_for_assignment | [PollForAssignment](#PollForAssignment) |  no  |  |
 | priority | [PriorityEnum](#PriorityEnum) |  yes  |  |
 | should_notify | boolean |  no  |  |
 | success_message | string |  no  |  |
 | title | string |  yes  |  |
 

---

#### [EditTicketPayload](#EditTicketPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | assigned_to | [AgentChangePayload](#AgentChangePayload) |  no  |  |
 | category | string |  no  |  |
 | content | [TicketContent](#TicketContent) |  no  |  |
 | priority | [PriorityEnum](#PriorityEnum) |  no  |  |
 | source | string |  no  |  |
 | status | string |  no  |  |
 | sub_category | string |  no  |  |
 | tags | [string] |  no  |  |
 

---

#### [Email](#Email)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | boolean |  no  |  |
 | email | string |  no  |  |
 | primary | boolean |  no  |  |
 | verified | boolean |  no  |  |
 

---

#### [FeedbackForm](#FeedbackForm)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | inputs | string |  no  |  |
 | timestamps | string |  no  |  |
 | title | string |  no  |  |
 

---

#### [FeedbackResponseItem](#FeedbackResponseItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display | string |  yes  |  |
 | key | string |  yes  |  |
 | value | string |  yes  |  |
 

---

#### [Filter](#Filter)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | assignees | [string] |  yes  |  |
 | categories | [[TicketCategory](#TicketCategory)] |  no  |  |
 | priorities | [[Priority](#Priority)] |  yes  |  |
 | statuses | [[Status](#Status)] |  yes  |  |
 

---

#### [GetParticipantsInsideVideoRoomResponse](#GetParticipantsInsideVideoRoomResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | participants | [[Participant](#Participant)] |  yes  |  |
 

---

#### [GetTokenForVideoRoomResponse](#GetTokenForVideoRoomResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | access_token | string |  yes  |  |
 

---

#### [IntegrationConfig](#IntegrationConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | allow_ticket_creation | boolean |  yes  |  |
 | base_url | string |  no  |  |
 | category_data | [CategoryData](#CategoryData) |  no  |  |
 | category_sync_apikey | string |  no  |  |
 | config_completed | boolean |  no  |  |
 | create_ticket_apikey | string |  no  |  |
 | integration_type | string |  yes  |  |
 | show_listing | boolean |  yes  |  |
 | update_ticket_apikey | string |  no  |  |
 | webhook_apikey | string |  no  |  |
 

---

#### [NotifyUser](#NotifyUser)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country_code | string |  yes  |  |
 | phone_number | string |  yes  |  |
 

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

#### [Participant](#Participant)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | identity | string |  no  |  |
 | status | string |  no  |  |
 | user | [UserSchema](#UserSchema) |  no  |  |
 

---

#### [PhoneNumber](#PhoneNumber)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | boolean |  no  |  |
 | country_code | number |  no  |  |
 | phone | string |  no  |  |
 | primary | boolean |  no  |  |
 | verified | boolean |  no  |  |
 

---

#### [PollForAssignment](#PollForAssignment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | duration | number |  yes  |  |
 | failure_message | string |  yes  |  |
 | message | string |  yes  |  |
 | success_message | string |  yes  |  |
 

---

#### [Priority](#Priority)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | color | string |  yes  |  |
 | display | string |  yes  |  |
 | key | [PriorityEnum](#PriorityEnum) |  yes  |  |
 

---

#### [Status](#Status)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | color | string |  yes  |  |
 | display | string |  yes  |  |
 | key | string |  yes  |  |
 

---

#### [SubmitButton](#SubmitButton)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | background_color | string |  yes  |  |
 | title | string |  yes  |  |
 | title_color | string |  yes  |  |
 

---

#### [SubmitCustomFormResponse](#SubmitCustomFormResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  yes  |  |
 | ticket | [Ticket](#Ticket) |  no  |  |
 

---

#### [SupportGeneralConfig](#SupportGeneralConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | integration | string |  no  |  |
 | show_communication_info | boolean |  no  |  |
 | show_support_dris | boolean |  no  |  |
 | support_communication | [CommunicationDetails](#CommunicationDetails) |  no  |  |
 | support_email | [CommunicationDetails](#CommunicationDetails) |  no  |  |
 | support_faq | [CommunicationDetails](#CommunicationDetails) |  no  |  |
 | support_phone | [CommunicationDetails](#CommunicationDetails) |  no  |  |
 

---

#### [Ticket](#Ticket)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _custom_json | string |  no  |  |
 | _id | string |  yes  |  |
 | assigned_to | string |  no  |  |
 | category | [TicketCategory](#TicketCategory) |  yes  |  |
 | content | [TicketContent](#TicketContent) |  no  |  |
 | context | [TicketContext](#TicketContext) |  no  |  |
 | created_at | string |  no  |  |
 | created_by | string |  no  |  |
 | created_on | [CreatedOn](#CreatedOn) |  no  |  |
 | integration | string |  no  |  |
 | is_feedback_pending | boolean |  no  |  |
 | priority | [Priority](#Priority) |  yes  |  |
 | response_id | string |  no  |  |
 | source | [TicketSourceEnum](#TicketSourceEnum) |  yes  |  |
 | status | [Status](#Status) |  yes  |  |
 | sub_category | string |  no  |  |
 | tags | [string] |  no  |  |
 | updated_at | string |  no  |  |
 

---

#### [TicketAsset](#TicketAsset)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display | string |  no  |  |
 | type | [TicketAssetTypeEnum](#TicketAssetTypeEnum) |  yes  |  |
 | value | string |  yes  |  |
 

---

#### [TicketCategory](#TicketCategory)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display | string |  yes  |  |
 | feedback_form | [FeedbackForm](#FeedbackForm) |  no  |  |
 | group_id | number |  no  |  |
 | key | string |  yes  |  |
 | sub_categories | [TicketCategory](#TicketCategory) |  no  |  |
 

---

#### [TicketContent](#TicketContent)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | attachments | [[TicketAsset](#TicketAsset)] |  no  |  |
 | description | string |  no  |  |
 | title | string |  yes  |  |
 

---

#### [TicketContext](#TicketContext)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application_id | string |  no  |  |
 | company_id | string |  yes  |  |
 

---

#### [TicketFeedback](#TicketFeedback)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  yes  |  |
 | category | string |  no  |  |
 | company_id | string |  yes  |  |
 | created_at | string |  no  |  |
 | response | [[FeedbackResponseItem](#FeedbackResponseItem)] |  yes  |  |
 | ticket_id | string |  yes  |  |
 | updated_at | string |  no  |  |
 | user | string |  no  |  |
 

---

#### [TicketFeedbackForm](#TicketFeedbackForm)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display | [string] |  no  |  |
 | title | string |  yes  |  |
 

---

#### [TicketFeedbackList](#TicketFeedbackList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[TicketFeedback](#TicketFeedback)] |  no  |  |
 

---

#### [TicketFeedbackPayload](#TicketFeedbackPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | form_response | string |  no  |  |
 

---

#### [TicketHistory](#TicketHistory)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  yes  |  |
 | created_at | string |  no  |  |
 | created_by | string |  no  |  |
 | created_on | [CreatedOn](#CreatedOn) |  no  |  |
 | ticket_id | string |  yes  |  |
 | type | string |  yes  |  |
 | updated_at | string |  no  |  |
 | value | string |  yes  |  |
 

---

#### [TicketHistoryList](#TicketHistoryList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[TicketHistory](#TicketHistory)] |  no  |  |
 | page | [Page](#Page) |  no  |  |
 

---

#### [TicketHistoryPayload](#TicketHistoryPayload)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | [HistoryTypeEnum](#HistoryTypeEnum) |  yes  |  |
 | value | string |  yes  |  |
 

---

#### [TicketList](#TicketList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | filters | [Filter](#Filter) |  no  |  |
 | items | [[Ticket](#Ticket)] |  no  |  |
 | page | [Page](#Page) |  no  |  |
 

---

#### [TicketSubCategory](#TicketSubCategory)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display | string |  yes  |  |
 | key | string |  yes  |  |
 | sub_categories | [TicketSubCategory](#TicketSubCategory) |  no  |  |
 

---

#### [UserSchema](#UserSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | account_type | string |  no  |  |
 | active | boolean |  no  |  |
 | created_at | string |  no  |  |
 | debug | [Debug](#Debug) |  no  |  |
 | emails | [[Email](#Email)] |  no  |  |
 | first_name | string |  no  |  |
 | gender | string |  no  |  |
 | has_old_password_hash | boolean |  no  |  |
 | last_name | string |  no  |  |
 | phone_numbers | [[PhoneNumber](#PhoneNumber)] |  no  |  |
 | profile_pic_url | string |  no  |  |
 | uid | string |  no  |  |
 | updated_at | string |  no  |  |
 | username | string |  no  |  |
 

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



 #### [TicketIntegrationDetails](#TicketIntegrationDetails)
 Type : string

 | Name | Value | Description |
 | ---- | ----- | ----------- |
 | defaultCase | default | This means it is default level ticket integration |
 | freshdesk | freshdesk | This means it is default level freshdesk integration |
 | kapture | kapture | This means it is default level kapture integration |

---






