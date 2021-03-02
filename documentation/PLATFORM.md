# FDK Application Front API Documentaion


* [Lead](#Lead) - Handles communication between Administrator <-> Staff and Staff <-> Users 

----
----

### Classes and Methods


* [Lead](#Lead)
  * [Lead#getTickets](#leadgettickets)
  * [Lead#createTicket](#leadcreateticket)
  * [Lead#getTickets](#leadgettickets)
  * [Lead#getTicket](#leadgetticket)
  * [Lead#editTicket](#leadeditticket)
  * [Lead#getTicket](#leadgetticket)
  * [Lead#editTicket](#leadeditticket)
  * [Lead#createHistory](#leadcreatehistory)
  * [Lead#getTicketHistory](#leadgettickethistory)
  * [Lead#createHistory](#leadcreatehistory)
  * [Lead#getTicketHistory](#leadgettickethistory)
  * [Lead#getCustomForm](#leadgetcustomform)
  * [Lead#editCustomForm](#leadeditcustomform)
  * [Lead#getCustomForms](#leadgetcustomforms)
  * [Lead#createCustomForm](#leadcreatecustomform)
  * [Lead#getTokenForVideoRoom](#leadgettokenforvideoroom)
  * [Lead#getVideoParticipants](#leadgetvideoparticipants)
  * [Lead#openVideoRoom](#leadopenvideoroom)
  * [Lead#closeVideoRoom](#leadclosevideoroom)
 

---
---



## Lead

```javascript
const { Configuration, Lead } = require('fdk-client-nodejs/platform')
const conf = new Configuration({
    OAuth2Token: "5ljdffg191e810c19729de860ea"
});
const lead = new Lead(conf);

```


#### Lead#getTickets
Gets the list of company level tickets and/or ticket filters depending on query params

```javascript
// Promise
const promise = lead.getTickets(company_id, items, filters, );

// Async/Await
const data = await lead.getTickets(company_id, items, filters, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID for which the data will be returned | 
| items | boolean | Decides that the reponse will contain the list of tickets | 
| filters | boolean | Decides that the reponse will contain the ticket filters | 


Gets the list of company level tickets and/or ticket filters


---


#### Lead#createTicket
Creates a company level ticket

```javascript
// Promise
const promise = lead.createTicket(company_id, );

// Async/Await
const data = await lead.createTicket(company_id, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID for which the data will be returned | 


Creates a company level ticket


---


#### Lead#getTickets
Gets the list of Application level Tickets and/or ticket filters depending on query params

```javascript
// Promise
const promise = lead.getTickets(company_id, application_id, items, filters, );

// Async/Await
const data = await lead.getTickets(company_id, application_id, items, filters, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID of the application | 
| application_id | string | Application ID for which the data will be returned | 
| items | boolean | Decides that the reponse will contain the list of tickets | 
| filters | boolean | Decides that the reponse will contain the ticket filters | 


Gets the list of Application level Tickets and/or ticket filters


---


#### Lead#getTicket
Retreives ticket details of a company level ticket with ticket ID

```javascript
// Promise
const promise = lead.getTicket(company_id, ticket_id, );

// Async/Await
const data = await lead.getTicket(company_id, ticket_id, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID for which the data will be returned | 
| ticket_id | string | Tiket ID of the ticket to be fetched | 


Retreives ticket details of a company level ticket


---


#### Lead#editTicket
Edits ticket details of a company level ticket

```javascript
// Promise
const promise = lead.editTicket(company_id, ticket_id, );

// Async/Await
const data = await lead.editTicket(company_id, ticket_id, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID for ticket | 
| ticket_id | string | Ticket ID of ticket to be edited | 


Edits ticket details of a company level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes


---


#### Lead#getTicket
Retreives ticket details of a application level ticket

```javascript
// Promise
const promise = lead.getTicket(company_id, application_id, ticket_id, );

// Async/Await
const data = await lead.getTicket(company_id, application_id, ticket_id, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID of the application | 
| application_id | string | Application ID for which the data will be returned | 
| ticket_id | string | Tiket ID of the ticket to be fetched | 


Retreives ticket details of a application level ticket with ticket ID


---


#### Lead#editTicket
Edits ticket details of a application level ticket

```javascript
// Promise
const promise = lead.editTicket(company_id, application_id, ticket_id, );

// Async/Await
const data = await lead.editTicket(company_id, application_id, ticket_id, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID of the application | 
| application_id | string | Application ID for ticket | 
| ticket_id | string | Ticket ID of ticket to be edited | 


Edits ticket details of a application level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes


---


#### Lead#createHistory
Create history for specific company level ticket

```javascript
// Promise
const promise = lead.createHistory(company_id, ticket_id, );

// Async/Await
const data = await lead.createHistory(company_id, ticket_id, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID for ticket | 
| ticket_id | string | Ticket ID for which history is created | 


Create history for specific company level ticket, this history is seen on ticket detail page, this can be comment, log or rating.


---


#### Lead#getTicketHistory
Gets history list for specific company level ticket

```javascript
// Promise
const promise = lead.getTicketHistory(company_id, ticket_id, );

// Async/Await
const data = await lead.getTicketHistory(company_id, ticket_id, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID for ticket | 
| ticket_id | string | Ticket ID for which history is to be fetched | 


Gets history list for specific company level ticket, this history is seen on ticket detail page, this can be comment, log or rating.


---


#### Lead#createHistory
Create history for specific application level ticket

```javascript
// Promise
const promise = lead.createHistory(company_id, application_id, ticket_id, );

// Async/Await
const data = await lead.createHistory(company_id, application_id, ticket_id, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID of the application | 
| application_id | string | Application ID for ticket | 
| ticket_id | string | Ticket ID for which history is created | 


Create history for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating.


---


#### Lead#getTicketHistory
Gets history list for specific application level ticket

```javascript
// Promise
const promise = lead.getTicketHistory(company_id, application_id, ticket_id, );

// Async/Await
const data = await lead.getTicketHistory(company_id, application_id, ticket_id, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID of application | 
| application_id | string | Application ID for ticket | 
| ticket_id | string | Ticket ID for which history is to be fetched | 


Gets history list for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating.


---


#### Lead#getCustomForm
Get specific custom form using it's slug

```javascript
// Promise
const promise = lead.getCustomForm(company_id, application_id, slug, );

// Async/Await
const data = await lead.getCustomForm(company_id, application_id, slug, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID of the application | 
| application_id | string | Application ID for the form | 
| slug | string | Slug of form whose response is getting submitted | 


Get specific custom form using it's slug, this is used to view the form.


---


#### Lead#editCustomForm
Edit the given custom form

```javascript
// Promise
const promise = lead.editCustomForm(company_id, application_id, slug, );

// Async/Await
const data = await lead.editCustomForm(company_id, application_id, slug, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID of the application | 
| application_id | string | Application ID for the form | 
| slug | string | Slug of form whose response is getting submitted | 


Edit the given custom form field such as adding or deleting input, assignee, title, decription, notification and polling information.


---


#### Lead#getCustomForms
Get list of custom form

```javascript
// Promise
const promise = lead.getCustomForms(company_id, application_id, );

// Async/Await
const data = await lead.getCustomForms(company_id, application_id, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID of the application | 
| application_id | string | Application ID for the form | 


Get list of custom form for given application


---


#### Lead#createCustomForm
Creates a new custom form

```javascript
// Promise
const promise = lead.createCustomForm(company_id, application_id, );

// Async/Await
const data = await lead.createCustomForm(company_id, application_id, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID of the application | 
| application_id | string | Application ID for the form | 


Creates a new custom form for given application


---


#### Lead#getTokenForVideoRoom
Get Token to join a specific Video Room using it's unqiue name

```javascript
// Promise
const promise = lead.getTokenForVideoRoom(company_id, application_id, unique_name, );

// Async/Await
const data = await lead.getTokenForVideoRoom(company_id, application_id, unique_name, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID of the application | 
| application_id | string | Application ID for video room | 
| unique_name | string | Unique name of video room | 


Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there.


---


#### Lead#getVideoParticipants
Get participants of a specific Video Room using it's unique name

```javascript
// Promise
const promise = lead.getVideoParticipants(company_id, application_id, unique_name, );

// Async/Await
const data = await lead.getVideoParticipants(company_id, application_id, unique_name, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID of the application | 
| application_id | string | Application ID for video room | 
| unique_name | string | Unique name of Video Room | 


Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names.


---


#### Lead#openVideoRoom
Open a video room.

```javascript
// Promise
const promise = lead.openVideoRoom(company_id, application_id, );

// Async/Await
const data = await lead.openVideoRoom(company_id, application_id, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID of the application | 
| application_id | string | Application ID for video room | 


Open a video room.


---


#### Lead#closeVideoRoom
Close the video room and force all participants to leave.

```javascript
// Promise
const promise = lead.closeVideoRoom(company_id, application_id, );

// Async/Await
const data = await lead.closeVideoRoom(company_id, application_id, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID of the application | 
| application_id | string | Application ID for video room | 


Close the video room and force all participants to leave.


---



---
---
