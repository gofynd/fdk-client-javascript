# FDK Application Front API Documentaion


* [Lead](#Lead) - Handles communication between Administrator <-> Staff and Staff <-> Users 
* [Theme](#Theme) - Responsible for themes 
* [Content](#Content) - Content 

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
  * [Lead#createVideoRoom](#leadcreatevideoroom)
 
* [Theme](#Theme)
  * [Theme#getThemeLibrary](#themegetthemelibrary)
  * [Theme#addToThemeLibrary](#themeaddtothemelibrary)
  * [Theme#applyTheme](#themeapplytheme)
  * [Theme#isUpgradable](#themeisupgradable)
  * [Theme#upgradeTheme](#themeupgradetheme)
  * [Theme#getPublicThemes](#themegetpublicthemes)
  * [Theme#createTheme](#themecreatetheme)
  * [Theme#getAppliedTheme](#themegetappliedtheme)
  * [Theme#getFonts](#themegetfonts)
  * [Theme#getThemeById](#themegetthemebyid)
  * [Theme#updateTheme](#themeupdatetheme)
  * [Theme#deleteTheme](#themedeletetheme)
  * [Theme#getThemeForPreview](#themegetthemeforpreview)
  * [Theme#publishTheme](#themepublishtheme)
  * [Theme#unpublishTheme](#themeunpublishtheme)
  * [Theme#archiveTheme](#themearchivetheme)
  * [Theme#unarchiveTheme](#themeunarchivetheme)
 
* [Content](#Content)
  * [Content#getAnnouncementsList](#contentgetannouncementslist)
  * [Content#createAnnouncement](#contentcreateannouncement)
  * [Content#getAnnouncementById](#contentgetannouncementbyid)
  * [Content#updateAnnouncement](#contentupdateannouncement)
  * [Content#updateAnnouncementSchedule](#contentupdateannouncementschedule)
  * [Content#deleteAnnouncement](#contentdeleteannouncement)
  * [Content#getFaqCategories](#contentgetfaqcategories)
  * [Content#getFaqCategoryBySlugOrId](#contentgetfaqcategorybyslugorid)
  * [Content#createFaqCategory](#contentcreatefaqcategory)
  * [Content#updateFaqCategory](#contentupdatefaqcategory)
  * [Content#deleteFaqCategory](#contentdeletefaqcategory)
  * [Content#getFaqsByCategoryIdOrSlug](#contentgetfaqsbycategoryidorslug)
  * [Content#addFaqToFaqCategory](#contentaddfaqtofaqcategory)
  * [Content#updateFaq](#contentupdatefaq)
  * [Content#deleteFaq](#contentdeletefaq)
  * [Content#getLegalInformation](#contentgetlegalinformation)
  * [Content#updateLegalInformation](#contentupdatelegalinformation)
  * [Content#getSeoConfiguration](#contentgetseoconfiguration)
  * [Content#updateSeoConfiguration](#contentupdateseoconfiguration)
  * [Content#getSupportInformation](#contentgetsupportinformation)
  * [Content#updateSupportInformation](#contentupdatesupportinformation)
  * [Content#createTag](#contentcreatetag)
  * [Content#updateTag](#contentupdatetag)
  * [Content#deleteAllTags](#contentdeletealltags)
  * [Content#getTags](#contentgettags)
  * [Content#addTag](#contentaddtag)
  * [Content#removeTag](#contentremovetag)
  * [Content#editTag](#contentedittag)
 

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


#### Lead#createVideoRoom
Get video room id

```javascript
// Promise
const promise = lead.createVideoRoom(company_id, application_id, );

// Async/Await
const data = await lead.createVideoRoom(company_id, application_id, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID of the application | 
| application_id | string | Application ID for video room | 


Get video room id.


---



---
---


## Theme

```javascript
const { Configuration, Theme } = require('fdk-client-nodejs/platform')
const conf = new Configuration({
    OAuth2Token: "5ljdffg191e810c19729de860ea"
});
const theme = new Theme(conf);

```


#### Theme#getThemeLibrary
Gets list of themes in theme library

```javascript
// Promise
const promise = theme.getThemeLibrary(company_id, application_id, page_size, page_no, );

// Async/Await
const data = await theme.getThemeLibrary(company_id, application_id, page_size, page_no, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID | 
| application_id | string | Application ID | 
| page_size | integer | Number of items to retrieve in each page. Default is 10. | 
| page_no | integer | Page number. Default is 1. | 


Gets list of themes in theme library


---


#### Theme#addToThemeLibrary
Add theme to theme library

```javascript
// Promise
const promise = theme.addToThemeLibrary(company_id, application_id, );

// Async/Await
const data = await theme.addToThemeLibrary(company_id, application_id, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID | 
| application_id | string | Application ID | 


Add theme to theme library


---


#### Theme#applyTheme
Apply theme

```javascript
// Promise
const promise = theme.applyTheme(company_id, application_id, );

// Async/Await
const data = await theme.applyTheme(company_id, application_id, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID | 
| application_id | string | Application ID | 


Apply theme


---


#### Theme#isUpgradable
Checks if theme is upgradable

```javascript
// Promise
const promise = theme.isUpgradable(company_id, application_id, theme_id, );

// Async/Await
const data = await theme.isUpgradable(company_id, application_id, theme_id, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID | 
| application_id | string | Application ID | 
| theme_id | string | Theme ID | 


Checks if theme is upgradable


---


#### Theme#upgradeTheme
Upgrades theme

```javascript
// Promise
const promise = theme.upgradeTheme(company_id, application_id, theme_id, );

// Async/Await
const data = await theme.upgradeTheme(company_id, application_id, theme_id, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID | 
| application_id | string | Application ID | 
| theme_id | string | Theme ID | 


Upgrades theme


---


#### Theme#getPublicThemes
Gets public themes

```javascript
// Promise
const promise = theme.getPublicThemes(company_id, application_id, page_size, page_no, );

// Async/Await
const data = await theme.getPublicThemes(company_id, application_id, page_size, page_no, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID | 
| application_id | string | Application ID | 
| page_size | integer | Number of items to retrieve in each page. Default is 10. | 
| page_no | integer | Page number. Default is 1. | 


Gets public themes


---


#### Theme#createTheme
Create new theme

```javascript
// Promise
const promise = theme.createTheme(company_id, application_id, );

// Async/Await
const data = await theme.createTheme(company_id, application_id, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID | 
| application_id | string | Application ID | 


Create new theme


---


#### Theme#getAppliedTheme
Get applied theme

```javascript
// Promise
const promise = theme.getAppliedTheme(company_id, application_id, );

// Async/Await
const data = await theme.getAppliedTheme(company_id, application_id, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID | 
| application_id | string | Application ID | 


Get applied theme


---


#### Theme#getFonts
Gets fonts

```javascript
// Promise
const promise = theme.getFonts(company_id, application_id, );

// Async/Await
const data = await theme.getFonts(company_id, application_id, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID | 
| application_id | string | Application ID | 


Gets fonts


---


#### Theme#getThemeById
Gets theme by id

```javascript
// Promise
const promise = theme.getThemeById(company_id, application_id, theme_id, );

// Async/Await
const data = await theme.getThemeById(company_id, application_id, theme_id, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID | 
| application_id | string | Application ID | 
| theme_id | string | Theme ID | 


Gets theme by id


---


#### Theme#updateTheme
Update theme

```javascript
// Promise
const promise = theme.updateTheme(company_id, application_id, theme_id, );

// Async/Await
const data = await theme.updateTheme(company_id, application_id, theme_id, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID | 
| application_id | string | Application ID | 
| theme_id | string | Theme ID | 


Update theme


---


#### Theme#deleteTheme
Delete theme

```javascript
// Promise
const promise = theme.deleteTheme(company_id, application_id, theme_id, );

// Async/Await
const data = await theme.deleteTheme(company_id, application_id, theme_id, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID | 
| application_id | string | Application ID | 
| theme_id | string | Theme ID | 


Delete theme


---


#### Theme#getThemeForPreview
Gets theme for preview

```javascript
// Promise
const promise = theme.getThemeForPreview(company_id, application_id, theme_id, );

// Async/Await
const data = await theme.getThemeForPreview(company_id, application_id, theme_id, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID | 
| application_id | string | Application ID | 
| theme_id | string | Theme ID | 


Gets theme for preview


---


#### Theme#publishTheme
Publish theme

```javascript
// Promise
const promise = theme.publishTheme(company_id, application_id, theme_id, );

// Async/Await
const data = await theme.publishTheme(company_id, application_id, theme_id, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID | 
| application_id | string | Application ID | 
| theme_id | string | Theme ID | 


Publish theme


---


#### Theme#unpublishTheme
Unpublish theme

```javascript
// Promise
const promise = theme.unpublishTheme(company_id, application_id, theme_id, );

// Async/Await
const data = await theme.unpublishTheme(company_id, application_id, theme_id, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID | 
| application_id | string | Application ID | 
| theme_id | string | Theme ID | 


Unpublish theme


---


#### Theme#archiveTheme
Archive theme

```javascript
// Promise
const promise = theme.archiveTheme(company_id, application_id, theme_id, );

// Async/Await
const data = await theme.archiveTheme(company_id, application_id, theme_id, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID | 
| application_id | string | Application ID | 
| theme_id | string | Theme ID | 


Archive theme


---


#### Theme#unarchiveTheme
Unarchive theme

```javascript
// Promise
const promise = theme.unarchiveTheme(company_id, application_id, theme_id, );

// Async/Await
const data = await theme.unarchiveTheme(company_id, application_id, theme_id, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID | 
| application_id | string | Application ID | 
| theme_id | string | Theme ID | 


Unarchive theme


---



---
---


## Content

```javascript
const { Configuration, Content } = require('fdk-client-nodejs/platform')
const conf = new Configuration({
    OAuth2Token: "5ljdffg191e810c19729de860ea"
});
const content = new Content(conf);

```


#### Content#getAnnouncementsList
Get annoucements list

```javascript
// Promise
const promise = content.getAnnouncementsList(company_id, application_id, );

// Async/Await
const data = await content.getAnnouncementsList(company_id, application_id, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID | 
| application_id | string | Application ID | 


Get list of announcements


---


#### Content#createAnnouncement
Create an annoucement

```javascript
// Promise
const promise = content.createAnnouncement(company_id, application_id, );

// Async/Await
const data = await content.createAnnouncement(company_id, application_id, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID | 
| application_id | string | Application ID | 


Create an announcement


---


#### Content#getAnnouncementById
Get annoucement by id

```javascript
// Promise
const promise = content.getAnnouncementById(company_id, application_id, announcementId, );

// Async/Await
const data = await content.getAnnouncementById(company_id, application_id, announcementId, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID | 
| application_id | string | Application ID | 
| announcementId | string | Announcement ID | 


Get announcement by id


---


#### Content#updateAnnouncement
Update an annoucement

```javascript
// Promise
const promise = content.updateAnnouncement(company_id, application_id, announcementId, );

// Async/Await
const data = await content.updateAnnouncement(company_id, application_id, announcementId, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID | 
| application_id | string | Application ID | 
| announcementId | string | Announcement ID | 


Update an announcement


---


#### Content#updateAnnouncementSchedule
Update schedule or published status of an annoucement

```javascript
// Promise
const promise = content.updateAnnouncementSchedule(company_id, application_id, announcementId, );

// Async/Await
const data = await content.updateAnnouncementSchedule(company_id, application_id, announcementId, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID | 
| application_id | string | Application ID | 
| announcementId | string | Announcement ID | 


Update schedule or published status of an announcement


---


#### Content#deleteAnnouncement
Delete annoucement by id

```javascript
// Promise
const promise = content.deleteAnnouncement(company_id, application_id, announcementId, );

// Async/Await
const data = await content.deleteAnnouncement(company_id, application_id, announcementId, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID | 
| application_id | string | Application ID | 
| announcementId | string | Announcement ID | 


Delete announcement by id


---


#### Content#getFaqCategories
Get FAQ categories list

```javascript
// Promise
const promise = content.getFaqCategories(company_id, application_id, );

// Async/Await
const data = await content.getFaqCategories(company_id, application_id, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID | 
| application_id | string | Application ID | 


Get list of FAQ categories


---


#### Content#getFaqCategoryBySlugOrId
Get FAQ category by slug or id

```javascript
// Promise
const promise = content.getFaqCategoryBySlugOrId(company_id, application_id, idOrSlug, );

// Async/Await
const data = await content.getFaqCategoryBySlugOrId(company_id, application_id, idOrSlug, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID | 
| application_id | string | Application ID | 
| idOrSlug | string | Slug or Id of FAQ Category | 


Get FAQ category by slug or id


---


#### Content#createFaqCategory
Creates a FAQ category

```javascript
// Promise
const promise = content.createFaqCategory(company_id, application_id, );

// Async/Await
const data = await content.createFaqCategory(company_id, application_id, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID | 
| application_id | string | Application ID | 


Add Faq Category


---


#### Content#updateFaqCategory
Updates a FAQ category

```javascript
// Promise
const promise = content.updateFaqCategory(company_id, application_id, id, );

// Async/Await
const data = await content.updateFaqCategory(company_id, application_id, id, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID | 
| application_id | string | Application ID | 
| id | string | Faq category ID | 


Update Faq Category


---


#### Content#deleteFaqCategory
Deletes a FAQ category

```javascript
// Promise
const promise = content.deleteFaqCategory(company_id, application_id, id, );

// Async/Await
const data = await content.deleteFaqCategory(company_id, application_id, id, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID | 
| application_id | string | Application ID | 
| id | string | Faq category ID | 


Delete Faq Category


---


#### Content#getFaqsByCategoryIdOrSlug
Get FAQs of a Faq Category id or slug

```javascript
// Promise
const promise = content.getFaqsByCategoryIdOrSlug(company_id, application_id, idOrSlug, );

// Async/Await
const data = await content.getFaqsByCategoryIdOrSlug(company_id, application_id, idOrSlug, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID | 
| application_id | string | Application ID | 
| idOrSlug | string | Faq category ID or slug | 


Get FAQs of a Faq Category `id` or `slug`


---


#### Content#addFaqToFaqCategory
Creates FAQs for category whose `id` is specified

```javascript
// Promise
const promise = content.addFaqToFaqCategory(company_id, application_id, categoryId, );

// Async/Await
const data = await content.addFaqToFaqCategory(company_id, application_id, categoryId, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID | 
| application_id | string | Application ID | 
| categoryId | string | Faq category ID | 


Creates FAQs for category whose `id` is specified


---


#### Content#updateFaq
Updates FAQ

```javascript
// Promise
const promise = content.updateFaq(company_id, application_id, categoryId, faqId, );

// Async/Await
const data = await content.updateFaq(company_id, application_id, categoryId, faqId, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID | 
| application_id | string | Application ID | 
| categoryId | string | Faq category ID | 
| faqId | string | Faq ID | 


Updates FAQ


---


#### Content#deleteFaq
Delete FAQ

```javascript
// Promise
const promise = content.deleteFaq(company_id, application_id, categoryId, faqId, );

// Async/Await
const data = await content.deleteFaq(company_id, application_id, categoryId, faqId, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID | 
| application_id | string | Application ID | 
| categoryId | string | Faq category ID | 
| faqId | string | Faq ID | 


Delete FAQ


---


#### Content#getLegalInformation
Get legal information

```javascript
// Promise
const promise = content.getLegalInformation(company_id, application_id, );

// Async/Await
const data = await content.getLegalInformation(company_id, application_id, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID | 
| application_id | string | Application ID | 


Get legal information of application, which includes policy, Terms and Conditions, and FAQ information of application.


---


#### Content#updateLegalInformation
Save legal information

```javascript
// Promise
const promise = content.updateLegalInformation(company_id, application_id, );

// Async/Await
const data = await content.updateLegalInformation(company_id, application_id, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID | 
| application_id | string | Application ID | 


Save legal information of application, which includes Policy, Terms and Conditions, and FAQ information of application.


---


#### Content#getSeoConfiguration
Get seo of application

```javascript
// Promise
const promise = content.getSeoConfiguration(company_id, application_id, );

// Async/Await
const data = await content.getSeoConfiguration(company_id, application_id, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID | 
| application_id | string | Application ID | 


Get seo of application


---


#### Content#updateSeoConfiguration
Update seo of application

```javascript
// Promise
const promise = content.updateSeoConfiguration(company_id, application_id, );

// Async/Await
const data = await content.updateSeoConfiguration(company_id, application_id, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID | 
| application_id | string | Application ID | 


Update seo of application


---


#### Content#getSupportInformation
Get support information

```javascript
// Promise
const promise = content.getSupportInformation(company_id, application_id, );

// Async/Await
const data = await content.getSupportInformation(company_id, application_id, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID | 
| application_id | string | Application ID | 


Get contact details for customer support. Including emails and phone numbers


---


#### Content#updateSupportInformation
Update support data of application

```javascript
// Promise
const promise = content.updateSupportInformation(company_id, application_id, );

// Async/Await
const data = await content.updateSupportInformation(company_id, application_id, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID | 
| application_id | string | Application ID | 


Update support data of application


---


#### Content#createTag
Creates Tag

```javascript
// Promise
const promise = content.createTag(company_id, application_id, );

// Async/Await
const data = await content.createTag(company_id, application_id, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID | 
| application_id | string | Application ID | 


Create tags


---


#### Content#updateTag
Updates a Tag

```javascript
// Promise
const promise = content.updateTag(company_id, application_id, );

// Async/Await
const data = await content.updateTag(company_id, application_id, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID | 
| application_id | string | Application ID | 


Update tag


---


#### Content#deleteAllTags
Delete tags for application

```javascript
// Promise
const promise = content.deleteAllTags(company_id, application_id, );

// Async/Await
const data = await content.deleteAllTags(company_id, application_id, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID | 
| application_id | string | Application ID | 


Delete tags for application


---


#### Content#getTags
Get tags for application

```javascript
// Promise
const promise = content.getTags(company_id, application_id, );

// Async/Await
const data = await content.getTags(company_id, application_id, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID | 
| application_id | string | Application ID | 


Get tags for application


---


#### Content#addTag
Adds a Tag

```javascript
// Promise
const promise = content.addTag(company_id, application_id, );

// Async/Await
const data = await content.addTag(company_id, application_id, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID | 
| application_id | string | Application ID | 


Add tag


---


#### Content#removeTag
Removes a Tag

```javascript
// Promise
const promise = content.removeTag(company_id, application_id, );

// Async/Await
const data = await content.removeTag(company_id, application_id, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID | 
| application_id | string | Application ID | 


Remove a particular tag


---


#### Content#editTag
Edits a Tag by Id

```javascript
// Promise
const promise = content.editTag(company_id, application_id, tagId, );

// Async/Await
const data = await content.editTag(company_id, application_id, tagId, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | string | Company ID | 
| application_id | string | Application ID | 
| tagId | string | Tag ID | 


Edits a particular tag


---



---
---
