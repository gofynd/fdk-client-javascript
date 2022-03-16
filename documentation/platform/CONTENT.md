



##### [Back to Platform docs](./README.md)

## Content Methods
Content System
* [getAnnouncementsList](#getannouncementslist)
* [createAnnouncement](#createannouncement)
* [getAnnouncementById](#getannouncementbyid)
* [updateAnnouncement](#updateannouncement)
* [updateAnnouncementSchedule](#updateannouncementschedule)
* [deleteAnnouncement](#deleteannouncement)
* [createBlog](#createblog)
* [getBlogs](#getblogs)
* [updateBlog](#updateblog)
* [deleteBlog](#deleteblog)
* [getComponentById](#getcomponentbyid)
* [addDataLoader](#adddataloader)
* [getDataLoaders](#getdataloaders)
* [deleteDataLoader](#deletedataloader)
* [editDataLoader](#editdataloader)
* [getDataLoadersByService](#getdataloadersbyservice)
* [selectDataLoader](#selectdataloader)
* [resetDataLoader](#resetdataloader)
* [getFaqCategories](#getfaqcategories)
* [getFaqCategoryBySlugOrId](#getfaqcategorybyslugorid)
* [createFaqCategory](#createfaqcategory)
* [updateFaqCategory](#updatefaqcategory)
* [deleteFaqCategory](#deletefaqcategory)
* [getFaqsByCategoryIdOrSlug](#getfaqsbycategoryidorslug)
* [addFaq](#addfaq)
* [updateFaq](#updatefaq)
* [deleteFaq](#deletefaq)
* [getFaqByIdOrSlug](#getfaqbyidorslug)
* [getLandingPages](#getlandingpages)
* [createLandingPage](#createlandingpage)
* [updateLandingPage](#updatelandingpage)
* [deleteLandingPage](#deletelandingpage)
* [getLegalInformation](#getlegalinformation)
* [updateLegalInformation](#updatelegalinformation)
* [getNavigations](#getnavigations)
* [createNavigation](#createnavigation)
* [getDefaultNavigations](#getdefaultnavigations)
* [getNavigationBySlug](#getnavigationbyslug)
* [updateNavigation](#updatenavigation)
* [deleteNavigation](#deletenavigation)
* [getPageMeta](#getpagemeta)
* [getPageSpec](#getpagespec)
* [createPagePreview](#createpagepreview)
* [updatePagePreview](#updatepagepreview)
* [deletePage](#deletepage)
* [updatePathRedirectionRules](#updatepathredirectionrules)
* [getPathRedirectionRules](#getpathredirectionrules)
* [getSEOConfiguration](#getseoconfiguration)
* [updateSEOConfiguration](#updateseoconfiguration)
* [getSlideshows](#getslideshows)
* [createSlideshow](#createslideshow)
* [getSlideshowBySlug](#getslideshowbyslug)
* [updateSlideshow](#updateslideshow)
* [deleteSlideshow](#deleteslideshow)
* [getSupportInformation](#getsupportinformation)
* [updateSupportInformation](#updatesupportinformation)
* [updateInjectableTag](#updateinjectabletag)
* [deleteAllInjectableTags](#deleteallinjectabletags)
* [getInjectableTags](#getinjectabletags)
* [addInjectableTag](#addinjectabletag)
* [removeInjectableTag](#removeinjectabletag)
* [editInjectableTag](#editinjectabletag)
* [createPage](#createpage)
* [getPages](#getpages)
* [updatePage](#updatepage)
* [getPageBySlug](#getpagebyslug)



## Methods with example and description


### getAnnouncementsList
Get a list of announcements



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.getAnnouncementsList({  pageNo : value,
 pageSize : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.getAnnouncementsList({  pageNo : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNo | number | no | The page number to navigate through the given set of results. Default value is 1. |    
| pageSize | number | no | The number of items to retrieve in each page. Default value is 10. |  



Announcements are useful to highlight a message or information on top of a webpage. Use this API to retrieve a list of announcements.	

*Returned Response:*




[GetAnnouncementListSchema](#GetAnnouncementListSchema)

Success. Refer `GetAnnouncementListSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
{
  "value": {
    "items": [
      {
        "_id": "6026283125f06a827dc1a5cc",
        "platforms": [
          "web",
          "android",
          "ios"
        ],
        "title": "test",
        "announcement": "<p>test</p>\n",
        "pages": [
          {
            "page_slug": "$all",
            "type": "custom"
          }
        ],
        "editor_meta": {
          "foreground_color": "#000",
          "background_color": "#fff",
          "content_type": "markdown",
          "content": "test"
        },
        "_schedule": {
          "published": true,
          "cron": null,
          "start": "2021-02-10T20:40:00.000Z",
          "end": "2021-02-18T22:00:00.000Z",
          "duration": null,
          "next_schedule": [
            {
              "start": "2021-02-10T20:40:00.000Z",
              "end": "2021-02-18T22:00:00.000Z"
            }
          ]
        },
        "app": "000000000000000000000001",
        "author": {
          "created_by": "5e199e6998cfe1776f1385dc",
          "modified_by": "5e199e6998cfe1776f1385dc"
        },
        "created_at": "2021-02-12T07:03:13.503Z",
        "modified_at": "2021-02-12T07:03:13.503Z",
        "id": "6026283125f06a827dc1a5cc"
      }
    ],
    "page": {
      "type": "number",
      "current": 1,
      "size": 10,
      "item_total": 1,
      "has_next": false
    }
  }
}
```
</details>

</details>









---


### createAnnouncement
Create an announcement



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.createAnnouncement({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.createAnnouncement({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [AdminAnnouncementSchema](#AdminAnnouncementSchema) | yes | Request body |


Announcements are useful to highlight a message or information on top of a webpage. Use this API to create an announcement.

*Returned Response:*




[CreateAnnouncementSchema](#CreateAnnouncementSchema)

Success. Refer `CreateAnnouncementSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
{
  "value": {
    "message": "Successfully saved announcement",
    "data": {
      "value": {
        "platforms": [
          "web",
          "android",
          "ios"
        ],
        "_id": "6026283125f06a827dc1a5cc",
        "title": "test",
        "announcement": "<p>test123</p>\n",
        "pages": [
          {
            "page_slug": "$all",
            "type": "custom"
          }
        ],
        "editor_meta": {
          "foreground_color": "#000",
          "background_color": "#fff",
          "content_type": "markdown",
          "content": "test"
        },
        "_schedule": {
          "published": true,
          "next_schedule": [
            {
              "start": "2021-02-10T20:40:00.000Z",
              "end": "2021-02-18T22:00:00.000Z"
            }
          ],
          "cron": null,
          "start": "2021-02-10T20:40:00.000Z",
          "end": "2021-02-18T22:00:00.000Z",
          "duration": null
        },
        "app": "000000000000000000000001",
        "author": {
          "created_by": "5e199e6998cfe1776f1385dc",
          "modified_by": "5e199e6998cfe1776f1385dc"
        },
        "created_at": "2021-02-12T07:03:13.503Z",
        "modified_at": "2021-02-12T07:05:57.020Z"
      }
    }
  }
}
```
</details>

</details>









---


### getAnnouncementById
Get announcement by ID



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.getAnnouncementById({  announcementId : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.getAnnouncementById({  announcementId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| announcementId | string | yes | ID allotted to the announcement. |  



Use this API to retrieve an announcement and its details such as the target platform and pages on which it's applicable

*Returned Response:*




[AdminAnnouncementSchema](#AdminAnnouncementSchema)

Success. Refer `AdminAnnouncementSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
{
  "value": {
    "platforms": [
      "web",
      "android",
      "ios"
    ],
    "_id": "6026283125f06a827dc1a5cc",
    "title": "test",
    "announcement": "<p>test123</p>\n",
    "pages": [
      {
        "page_slug": "$all",
        "type": "custom"
      }
    ],
    "editor_meta": {
      "foreground_color": "#000",
      "background_color": "#fff",
      "content_type": "markdown",
      "content": "test"
    },
    "_schedule": {
      "published": true,
      "next_schedule": [
        {
          "start": "2021-02-10T20:40:00.000Z",
          "end": "2021-02-18T22:00:00.000Z"
        }
      ],
      "cron": null,
      "start": "2021-02-10T20:40:00.000Z",
      "end": "2021-02-18T22:00:00.000Z",
      "duration": null
    },
    "app": "000000000000000000000001",
    "author": {
      "created_by": "5e199e6998cfe1776f1385dc",
      "modified_by": "5e199e6998cfe1776f1385dc"
    },
    "created_at": "2021-02-12T07:03:13.503Z",
    "modified_at": "2021-02-12T07:05:57.020Z"
  }
}
```
</details>

</details>









---


### updateAnnouncement
Update an announcement



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.updateAnnouncement({  announcementId : value,
 body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.updateAnnouncement({  announcementId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| announcementId | string | yes | ID allotted to the announcement. |  
| body | [AdminAnnouncementSchema](#AdminAnnouncementSchema) | yes | Request body |


Use this API to edit an existing announcement and its details such as the target platform and pages on which it's applicable

*Returned Response:*




[CreateAnnouncementSchema](#CreateAnnouncementSchema)

Success. Refer `CreateAnnouncementSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
{
  "value": {
    "message": "Successfully updated announcement",
    "data": {
      "value": {
        "platforms": [
          "web",
          "android",
          "ios"
        ],
        "_id": "6026283125f06a827dc1a5cc",
        "title": "test",
        "announcement": "<p>test123</p>\n",
        "pages": [
          {
            "page_slug": "$all",
            "type": "custom"
          }
        ],
        "editor_meta": {
          "foreground_color": "#000",
          "background_color": "#fff",
          "content_type": "markdown",
          "content": "test"
        },
        "_schedule": {
          "published": true,
          "next_schedule": [
            {
              "start": "2021-02-10T20:40:00.000Z",
              "end": "2021-02-18T22:00:00.000Z"
            }
          ],
          "cron": null,
          "start": "2021-02-10T20:40:00.000Z",
          "end": "2021-02-18T22:00:00.000Z",
          "duration": null
        },
        "app": "000000000000000000000001",
        "author": {
          "created_by": "5e199e6998cfe1776f1385dc",
          "modified_by": "5e199e6998cfe1776f1385dc"
        },
        "created_at": "2021-02-12T07:03:13.503Z",
        "modified_at": "2021-02-12T07:05:57.020Z"
      }
    }
  }
}
```
</details>

</details>









---


### updateAnnouncementSchedule
Update the schedule and the publish status of an announcement



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.updateAnnouncementSchedule({  announcementId : value,
 body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.updateAnnouncementSchedule({  announcementId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| announcementId | string | yes | ID allotted to the announcement. |  
| body | [ScheduleSchema](#ScheduleSchema) | yes | Request body |


Use this API to edit the duration, i.e. start date-time and end date-time of an announcement. Moreover, you can enable/disable an announcement using this API.

*Returned Response:*




[CreateAnnouncementSchema](#CreateAnnouncementSchema)

Success. Refer `CreateAnnouncementSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
{
  "value": {
    "message": "Announcement unpublished",
    "data": {
      "value": {
        "platforms": [
          "web",
          "android",
          "ios"
        ],
        "_id": "6026283125f06a827dc1a5cc",
        "title": "test",
        "announcement": "<p>test123</p>\n",
        "pages": [
          {
            "page_slug": "$all",
            "type": "custom"
          }
        ],
        "editor_meta": {
          "foreground_color": "#000",
          "background_color": "#fff",
          "content_type": "markdown",
          "content": "test"
        },
        "_schedule": {
          "published": false,
          "next_schedule": [
            {
              "start": "2021-02-10T20:40:00.000Z",
              "end": "2021-02-18T22:00:00.000Z"
            }
          ],
          "cron": null,
          "start": "2021-02-10T20:40:00.000Z",
          "end": "2021-02-18T22:00:00.000Z",
          "duration": null
        },
        "app": "000000000000000000000001",
        "author": {
          "created_by": "5e199e6998cfe1776f1385dc",
          "modified_by": "5e199e6998cfe1776f1385dc"
        },
        "created_at": "2021-02-12T07:03:13.503Z",
        "modified_at": "2021-02-12T07:05:57.020Z"
      }
    }
  }
}
```
</details>

</details>









---


### deleteAnnouncement
Delete announcement by id



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.deleteAnnouncement({  announcementId : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.deleteAnnouncement({  announcementId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| announcementId | string | yes | ID allotted to the announcement. |  



Use this API to delete an existing announcement.

*Returned Response:*




[CreateAnnouncementSchema](#CreateAnnouncementSchema)

Success.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success</i></summary>

```json
{
  "value": {
    "message": "Successfully deleted announcement",
    "data": {
      "value": {
        "platforms": [
          "web",
          "android",
          "ios"
        ],
        "_id": "6026283125f06a827dc1a5cc",
        "title": "test",
        "announcement": "<p>test123</p>\n",
        "pages": [
          {
            "page_slug": "$all",
            "type": "custom"
          }
        ],
        "editor_meta": {
          "foreground_color": "#000",
          "background_color": "#fff",
          "content_type": "markdown",
          "content": "test"
        },
        "_schedule": {
          "published": true,
          "next_schedule": [
            {
              "start": "2021-02-10T20:40:00.000Z",
              "end": "2021-02-18T22:00:00.000Z"
            }
          ],
          "cron": null,
          "start": "2021-02-10T20:40:00.000Z",
          "end": "2021-02-18T22:00:00.000Z",
          "duration": null
        },
        "app": "000000000000000000000001",
        "author": {
          "created_by": "5e199e6998cfe1776f1385dc",
          "modified_by": "5e199e6998cfe1776f1385dc"
        },
        "created_at": "2021-02-12T07:03:13.503Z",
        "modified_at": "2021-02-12T07:05:57.020Z"
      }
    }
  }
}
```
</details>

</details>









---


### createBlog
Create a blog



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.createBlog({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.createBlog({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [BlogRequest](#BlogRequest) | yes | Request body |


Use this API to create a blog.

*Returned Response:*




[BlogSchema](#BlogSchema)

Success. Refer `BlogSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "_id": "5eaa451a21a4dd75f0fd96c5",
    "application": "5d3ebd89f540e7506b8b3548",
    "tags": [
      "abhinav"
    ],
    "title": "my first blog",
    "slug": "1st_blog",
    "feature_image": {
      "secure_url": "https://google.com"
    },
    "content": [
      {
        "type": "html",
        "value": "<p>hey there!</p>"
      }
    ],
    "_schedule": {
      "cron": "* 10 * * *",
      "start": "2021-03-31T23:30:00.000Z",
      "end": "2021-03-31T23:55:00.000Z",
      "duration": 1000,
      "next_schedule": [
        {
          "start": "2021-03-17T04:30:00.000Z",
          "end": "2021-03-17T04:46:40.000Z"
        }
      ]
    },
    "published": true,
    "author": {
      "name": "Fynd App"
    },
    "date_meta": {
      "created_on": "2021-03-14T06:49:03.945Z",
      "modified_on": "2021-03-14T06:49:03.945Z"
    }
  }
}
```
</details>

</details>









---


### getBlogs
Get blogs



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.getBlogs({  pageNo : value,
 pageSize : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.getBlogs({  pageNo : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNo | number | no | The page number to navigate through the given set of results. Default value is 1. |    
| pageSize | number | no | The number of items to retrieve in each page. Default value is 10. |  



Use this API to get a list of blogs along with their details, such as the title, reading time, publish status, feature image, tags, author, etc.

*Returned Response:*




[BlogGetResponse](#BlogGetResponse)

Success. Refer `BlogGetResponse` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "items": [
      {
        "date_meta": {
          "created_on": "2021-03-14T06:49:03.945Z",
          "modified_on": "2021-03-14T06:49:03.945Z"
        },
        "tags": [],
        "_id": "604db275b3ae202873964d94",
        "content": [
          {
            "type": "html",
            "value": "<p>test abhinav</p>"
          }
        ],
        "title": "1st Blog",
        "slug": "1st-blog",
        "published": true,
        "_schedule": {
          "next_schedule": [
            {}
          ],
          "start": "2021-04-08T07:15:13.000Z",
          "end": "2021-04-10T02:00:00.000Z"
        },
        "feature_image": {
          "secure_url": ""
        },
        "application": "000000000000000000000001",
        "author": {
          "name": "Fynd App"
        }
      }
    ],
    "page": {
      "type": "number",
      "current": 1,
      "size": 1,
      "item_total": 2,
      "has_next": true
    }
  }
}
```
</details>

</details>









---


### updateBlog
Update a blog



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.updateBlog({  id : value,
 body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.updateBlog({  id : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | ID allotted to the blog. |  
| body | [BlogRequest](#BlogRequest) | yes | Request body |


Use this API to update the details of an existing blog which includes title, feature image, content, SEO details, expiry, etc.

*Returned Response:*




[BlogSchema](#BlogSchema)

Success.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "_id": "5eaa451a21a4dd75f0fd96c5",
    "application": "5d3ebd89f540e7506b8b3548",
    "tags": [
      "abhinav"
    ],
    "title": "my first blog",
    "slug": "1st_blog",
    "feature_image": {
      "secure_url": "https://google.com"
    },
    "content": [
      {
        "type": "html",
        "value": "<p>hey there!</p>"
      }
    ],
    "_schedule": {
      "cron": "* 10 * * *",
      "start": "2021-03-31T23:30:00.000Z",
      "end": "2021-03-31T23:55:00.000Z",
      "duration": 1000,
      "next_schedule": [
        {
          "start": "2021-03-17T04:30:00.000Z",
          "end": "2021-03-17T04:46:40.000Z"
        }
      ]
    },
    "published": true,
    "author": {
      "name": "Fynd App"
    },
    "date_meta": {
      "created_on": "2021-03-14T06:49:03.945Z",
      "modified_on": "2021-03-14T06:49:03.945Z"
    }
  }
}
```
</details>

</details>









---


### deleteBlog
Delete blogs



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.deleteBlog({  id : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.deleteBlog({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | ID allotted to the blog. |  



Use this API to delete a blog.

*Returned Response:*




[BlogSchema](#BlogSchema)

Success.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "_id": "5eaa451a21a4dd75f0fd96c5",
    "application": "5d3ebd89f540e7506b8b3548",
    "tags": [
      "abhinav"
    ],
    "title": "my first blog",
    "slug": "1st_blog",
    "feature_image": {
      "secure_url": "https://google.com"
    },
    "content": [
      {
        "type": "html",
        "value": "<p>hey there!</p>"
      }
    ],
    "_schedule": {
      "cron": "* 10 * * *",
      "start": "2021-03-31T23:30:00.000Z",
      "end": "2021-03-31T23:55:00.000Z",
      "duration": 1000,
      "next_schedule": [
        {
          "start": "2021-03-17T04:30:00.000Z",
          "end": "2021-03-17T04:46:40.000Z"
        }
      ]
    },
    "published": true,
    "author": {
      "name": "Fynd App"
    },
    "date_meta": {
      "created_on": "2021-03-14T06:49:03.945Z",
      "modified_on": "2021-03-14T06:49:03.945Z"
    }
  }
}
```
</details>

</details>









---


### getComponentById
Get components of a blog



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.getComponentById({  slug : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.getComponentById({  slug : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| slug | string | yes | A short, human-readable, URL-friendly identifier of a blog page. You can get slug value of a blog from `getBlogs` API. |  



Use this API to retrieve the components of a blog, such as title, slug, feature image, content, schedule, publish status, author, etc.

*Returned Response:*




[BlogSchema](#BlogSchema)

Success. Returns a a JSON object with components. Refer `BlogSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "_id": "5eaa451a21a4dd75f0fd96c5",
    "application": "5d3ebd89f540e7506b8b3548",
    "tags": [
      "abhinav"
    ],
    "title": "my first blog",
    "slug": "1st_blog",
    "feature_image": {
      "secure_url": "https://google.com"
    },
    "content": [
      {
        "type": "html",
        "value": "<p>hey there!</p>"
      }
    ],
    "_schedule": {
      "cron": "* 10 * * *",
      "start": "2021-03-31T23:30:00.000Z",
      "end": "2021-03-31T23:55:00.000Z",
      "duration": 1000,
      "next_schedule": [
        {
          "start": "2021-03-17T04:30:00.000Z",
          "end": "2021-03-17T04:46:40.000Z"
        }
      ]
    },
    "published": true,
    "author": {
      "name": "Fynd App"
    },
    "date_meta": {
      "created_on": "2021-03-14T06:49:03.945Z",
      "modified_on": "2021-03-14T06:49:03.945Z"
    }
  }
}
```
</details>

</details>









---


### addDataLoader
Adds a data loader



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.addDataLoader({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.addDataLoader({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [DataLoaderSchema](#DataLoaderSchema) | yes | Request body |


Use this API to add data loader. This includes the data loader name, operationId, service name and its type (url/function) with corresponding value.

*Returned Response:*




[DataLoaderResponseSchema](#DataLoaderResponseSchema)

Success.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "_id": "601f77e7aa61066feda44487",
  "name": "Search API from Algolia",
  "service": "catalog",
  "operation_id": "fetchSuggestions",
  "type": "url",
  "application": "000000000000000000000001",
  "__v": 0
}
```
</details>









---


### getDataLoaders
Get all the data loaders in an application



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.getDataLoaders();

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.getDataLoaders();
```






Use this to get all data loaders of an application

*Returned Response:*




[Array<DataLoaderResponseSchema>](#Array<DataLoaderResponseSchema>)

Success. Refer `DataLoaderResponseSchema` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
[
  {
    "name": "Algolia",
    "is_selected": false,
    "type": "url",
    "_id": "61bc4523a7ffc7504f4de4a5",
    "service": "catalog",
    "operation_id": "fetchSuggestions",
    "url": "/ext/example/url",
    "__source": {
      "type": "extension",
      "id": "000000000000000000000003"
    },
    "application": "100000000000000000000001",
    "__v": 0
  },
  {
    "name": "Algolia v3",
    "is_selected": false,
    "type": "url",
    "_id": "61bc452da7ffc7504f4de4a7",
    "service": "catalog",
    "operation_id": "fetchSuggestions",
    "url": "/ext/example/url",
    "__source": {
      "type": "extension",
      "id": "000000000000000000000003"
    },
    "application": "100000000000000000000001",
    "__v": 0
  }
]
```
</details>









---


### deleteDataLoader
Delete data loader in application



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.deleteDataLoader({  dataLoaderId : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.deleteDataLoader({  dataLoaderId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| dataLoaderId | string | yes | ID allotted to the data loader. |  



Use this API to delete data loader.

*Returned Response:*




[DataLoaderResponseSchema](#DataLoaderResponseSchema)

Success.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "_id": "601f77e7aa61066feda44487",
  "name": "Search API from Algolia",
  "service": "catalog",
  "operation_id": "fetchSuggestions",
  "type": "url",
  "application": "000000000000000000000001",
  "__v": 0
}
```
</details>









---


### editDataLoader
Edit a data loader by id



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.editDataLoader({  dataLoaderId : value,
 body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.editDataLoader({  dataLoaderId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| dataLoaderId | string | yes | ID allotted to the data loader. |  
| body | [DataLoaderSchema](#DataLoaderSchema) | yes | Request body |


Use this API to edit the details of an existing data loader by its ID.

*Returned Response:*




[DataLoaderResponseSchema](#DataLoaderResponseSchema)

Success.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "_id": "601f77e7aa61066feda44487",
  "name": "Search API from Algolia",
  "service": "catalog",
  "operation_id": "fetchSuggestions",
  "type": "url",
  "application": "000000000000000000000001",
  "__v": 0
}
```
</details>









---


### getDataLoadersByService
Get all the data loaders in an application by service name



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.getDataLoadersByService({  serviceName : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.getDataLoadersByService({  serviceName : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| serviceName | string | yes | Service name of the data loader. |  



Use this to get all data loaders of an application by service name

*Returned Response:*




[Array<DataLoaderResponseSchema>](#Array<DataLoaderResponseSchema>)

Success. Refer `DataLoaderResponseSchema` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
[
  {
    "name": "Algolia",
    "is_selected": false,
    "type": "url",
    "_id": "61bc4523a7ffc7504f4de4a5",
    "service": "catalog",
    "operation_id": "fetchSuggestions",
    "url": "/ext/example/url",
    "__source": {
      "type": "extension",
      "id": "000000000000000000000003"
    },
    "application": "100000000000000000000001",
    "__v": 0
  },
  {
    "name": "Algolia v3",
    "is_selected": false,
    "type": "url",
    "_id": "61bc452da7ffc7504f4de4a7",
    "service": "catalog",
    "operation_id": "fetchSuggestions",
    "url": "/ext/example/url",
    "__source": {
      "type": "extension",
      "id": "000000000000000000000003"
    },
    "application": "100000000000000000000001",
    "__v": 0
  }
]
```
</details>









---


### selectDataLoader
Select a data loader by id



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.selectDataLoader({  dataLoaderId : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.selectDataLoader({  dataLoaderId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| dataLoaderId | string | yes | ID allotted to the data loader. |  



Use this API to select a data loader to be used in applications.

*Returned Response:*




[DataLoaderResponseSchema](#DataLoaderResponseSchema)

Success.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "_id": "601f77e7aa61066feda44487",
  "name": "Search API from Algolia",
  "service": "catalog",
  "operation_id": "fetchSuggestions",
  "type": "url",
  "application": "000000000000000000000001",
  "__v": 0
}
```
</details>









---


### resetDataLoader
Reset a data loader by serive name and operation Id



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.resetDataLoader({  service : value,
 operationId : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.resetDataLoader({  service : value,
 operationId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| service | string | yes | Name of service. |   
| operationId | string | yes | Name of operation id of the service. |  



Use this API to reselect a data loader.

*Returned Response:*




[DataLoaderResetResponseSchema](#DataLoaderResetResponseSchema)

Success.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "reset": true
}
```
</details>









---


### getFaqCategories
Get a list of FAQ categories



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.getFaqCategories();

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.getFaqCategories();
```






FAQs can be divided into categories. Use this API to get a list of FAQ categories.

*Returned Response:*




[GetFaqCategoriesSchema](#GetFaqCategoriesSchema)

Success. Refer `GetFaqCategoriesSchema` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "categories": [
    {
      "index": 0,
      "children": [
        "6026426ae507768b168dee4b"
      ],
      "title": "Test",
      "_id": "60263f80c83c1f89f2863a8a",
      "slug": "test",
      "application": "000000000000000000000001"
    }
  ]
}
```
</details>









---


### getFaqCategoryBySlugOrId
Get an FAQ category by slug or id



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.getFaqCategoryBySlugOrId({  idOrSlug : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.getFaqCategoryBySlugOrId({  idOrSlug : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| idOrSlug | string | yes | ID or the slug allotted to an FAQ category. Slug is a short, human-readable, URL-friendly identifier of an object. You can get slug value of an FAQ category from `getFaqCategories` API. |  



FAQs can be divided into categories. Use this API to get an FAQ categories using its slug or ID.

*Returned Response:*




[GetFaqCategoryBySlugSchema](#GetFaqCategoryBySlugSchema)

Success. Refer `GetFaqCategoryBySlugSchema` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "category": {
    "index": 0,
    "children": [
      {
        "_id": "6026426ae507768b168dee4b",
        "question": "question 1",
        "answer": "answer 1",
        "slug": "question-1",
        "application": "000000000000000000000001"
      }
    ],
    "_id": "60263f80c83c1f89f2863a8a",
    "slug": "test",
    "title": "Test",
    "application": "000000000000000000000001"
  }
}
```
</details>









---


### createFaqCategory
Create an FAQ category



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.createFaqCategory({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.createFaqCategory({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CreateFaqCategoryRequestSchema](#CreateFaqCategoryRequestSchema) | yes | Request body |


FAQs help users to solve an issue or know more about a process. FAQs can be categorized separately, for e.g. some questions can be related to payment, some could be related to purchase, shipping, navigating, etc. Use this API to create an FAQ category.

*Returned Response:*




[CreateFaqCategorySchema](#CreateFaqCategorySchema)

Success.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "category": {
    "index": 0,
    "children": [],
    "_id": "60263f80c83c1f89f2863a8a",
    "slug": "test",
    "application": "000000000000000000000001",
    "title": "Test"
  }
}
```
</details>









---


### updateFaqCategory
Update an FAQ category



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.updateFaqCategory({  id : value,
 body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.updateFaqCategory({  id : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | ID allotted to an FAQ category. |  
| body | [UpdateFaqCategoryRequestSchema](#UpdateFaqCategoryRequestSchema) | yes | Request body |


Use this API to edit an existing FAQ category.

*Returned Response:*




[CreateFaqCategorySchema](#CreateFaqCategorySchema)

Success.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "category": {
    "index": 0,
    "children": [],
    "_id": "60263f80c83c1f89f2863a8a",
    "title": "Test Updated",
    "slug": "test",
    "application": "000000000000000000000001"
  }
}
```
</details>









---


### deleteFaqCategory
Delete an FAQ category



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.deleteFaqCategory({  id : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.deleteFaqCategory({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | ID allotted to an FAQ category. |  



Use this API to delete an FAQ category.

*Returned Response:*




[FaqSchema](#FaqSchema)

Success.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "category": {
    "index": 0,
    "children": [],
    "_id": "60263f80c83c1f89f2863a8a",
    "slug": "test",
    "title": "Test",
    "application": "000000000000000000000001",
    "__v": 2
  }
}
```
</details>









---


### getFaqsByCategoryIdOrSlug
Get question and answers within an FAQ category



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.getFaqsByCategoryIdOrSlug({  idOrSlug : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.getFaqsByCategoryIdOrSlug({  idOrSlug : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| idOrSlug | string | yes | ID or the slug allotted to an FAQ category. Slug is a short, human-readable, URL-friendly identifier of an object. You can get slug value of an FAQ category from `getFaqCategories` API. |  



Use this API to retrieve all the commonly asked question and answers belonging to an FAQ category.

*Returned Response:*




[GetFaqSchema](#GetFaqSchema)

Success. Refer `GetFaqSchema` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "faqs": [
    {
      "_id": "60265b64e507768b168dee4d",
      "question": "question 1",
      "answer": "answer 1",
      "slug": "question-1",
      "application": "000000000000000000000001"
    }
  ]
}
```
</details>









---


### addFaq
Create an FAQ



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.addFaq({  categoryId : value,
 body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.addFaq({  categoryId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| categoryId | string | yes | ID allotted to an FAQ category. |  
| body | [CreateFaqSchema](#CreateFaqSchema) | yes | Request body |


FAQs help users to solve an issue or know more about a process. Use this API to create an FAQ for a given FAQ category.

*Returned Response:*




[CreateFaqResponseSchema](#CreateFaqResponseSchema)

Success.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "faq": {
    "_id": "60265b64e507768b168dee4d",
    "question": "question 1",
    "answer": "answer 1",
    "slug": "question-1",
    "application": "000000000000000000000001"
  }
}
```
</details>









---


### updateFaq
Update an FAQ



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.updateFaq({  categoryId : value,
 faqId : value,
 body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.updateFaq({  categoryId : value,
 faqId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| categoryId | string | yes | ID allotted to an FAQ category. |   
| faqId | string | yes | ID allotted to an FAQ. |  
| body | [CreateFaqSchema](#CreateFaqSchema) | yes | Request body |


Use this API to edit an existing FAQ.

*Returned Response:*




[CreateFaqResponseSchema](#CreateFaqResponseSchema)

Success.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "faq": {
    "_id": "60265b64e507768b168dee4d",
    "question": "question 1 updated",
    "answer": "answer 1",
    "slug": "question-1",
    "application": "000000000000000000000001"
  }
}
```
</details>









---


### deleteFaq
Delete an FAQ



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.deleteFaq({  categoryId : value,
 faqId : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.deleteFaq({  categoryId : value,
 faqId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| categoryId | string | yes | ID allotted to an FAQ category. |   
| faqId | string | yes | ID allotted to an FAQ. |  



Use this API to delete an existing FAQ.

*Returned Response:*




[CreateFaqResponseSchema](#CreateFaqResponseSchema)

Success.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "faq": {
    "_id": "60265b64e507768b168dee4d",
    "question": "question 1 updated",
    "answer": "answer 1",
    "slug": "question-1",
    "application": "000000000000000000000001"
  }
}
```
</details>









---


### getFaqByIdOrSlug
Get an FAQ



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.getFaqByIdOrSlug({  idOrSlug : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.getFaqByIdOrSlug({  idOrSlug : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| idOrSlug | string | yes | ID or the slug allotted to an FAQ category. Slug is a short, human-readable, URL-friendly identifier of an object. You can get slug value of an FAQ category from `getFaqCategories` API. |  



Use this API to retrieve a specific FAQ. You will get the question and answer of that FAQ.

*Returned Response:*




[CreateFaqResponseSchema](#CreateFaqResponseSchema)

Success. Refer `CreateFaqResponseSchema` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "faq": {
    "_id": "60265b64e507768b168dee4d",
    "question": "question 1",
    "answer": "answer 1",
    "slug": "question-1",
    "application": "000000000000000000000001"
  }
}
```
</details>









---


### getLandingPages
Get landing pages



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.getLandingPages({  pageNo : value,
 pageSize : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.getLandingPages({  pageNo : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNo | number | no | The page number to navigate through the given set of results. Default value is 1. |    
| pageSize | number | no | The number of items to retrieve in each page. Default value is 10. |  



Landing page is the first page that a prospect lands upon while visiting a website. Use this API to fetch a list of landing pages.

*Returned Response:*




[LandingPageGetResponse](#LandingPageGetResponse)

Success. Refer `LandingPageGetResponse` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "items": [
      {
        "date_meta": {
          "created_on": "2021-03-12T09:26:12.157Z",
          "modified_on": "2021-03-12T09:26:12.157Z"
        },
        "platform": [
          "android"
        ],
        "_id": "604b342e29f19310d8ae9743",
        "slug": "landing-page-default-2",
        "action": {
          "page": {
            "type": "default"
          },
          "popup": {},
          "type": "page"
        },
        "application": "5cd3db5e9d692cfe5302a7bb",
        "archived": false,
        "_custom_json": null,
        "__v": 0
      }
    ],
    "page": {
      "type": "number",
      "current": 1,
      "size": 1,
      "item_total": 2,
      "has_next": true
    }
  }
}
```
</details>

</details>









---


### createLandingPage
Create a landing page



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.createLandingPage({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.createLandingPage({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [LandingPageSchema](#LandingPageSchema) | yes | Request body |


Landing page is the first page that a prospect lands upon while visiting a website. Use this API to create a landing page.

*Returned Response:*




[LandingPageSchema](#LandingPageSchema)

Success.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "_id": "5eaa451a21a4dd75f0fd96c5",
    "application": "5d3ebd89f540e7506b8b3548",
    "_custom_json": null,
    "slug": "pnc-landing",
    "action": {
      "page": {
        "type": "home"
      },
      "popup": {},
      "type": "page"
    },
    "platform": [
      "web"
    ],
    "created_by": {
      "id": "000000000000000000000000"
    },
    "date_meta": {
      "created_on": "2020-04-30T03:25:14.549Z",
      "modified_on": "2020-04-30T03:25:14.549Z"
    },
    "archived": false
  }
}
```
</details>

</details>









---


### updateLandingPage
Update a landing page



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.updateLandingPage({  id : value,
 body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.updateLandingPage({  id : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | ID allotted to a landing page. |  
| body | [LandingPageSchema](#LandingPageSchema) | yes | Request body |


Use this API to edit the details of an existing landing page.

*Returned Response:*




[LandingPageSchema](#LandingPageSchema)

Success.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "_id": "5eaa451a21a4dd75f0fd96c5",
    "application": "5d3ebd89f540e7506b8b3548",
    "_custom_json": null,
    "slug": "pnc-landing",
    "action": {
      "page": {
        "type": "home"
      },
      "popup": {},
      "type": "page"
    },
    "platform": [
      "web"
    ],
    "created_by": {
      "id": "000000000000000000000000"
    },
    "date_meta": {
      "created_on": "2020-04-30T03:25:14.549Z",
      "modified_on": "2020-04-30T03:25:14.549Z"
    },
    "archived": false
  }
}
```
</details>

</details>









---


### deleteLandingPage
Delete a landing page



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.deleteLandingPage({  id : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.deleteLandingPage({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | ID allotted to a landing page. |  



Use this API to delete an existing landing page.

*Returned Response:*




[LandingPageSchema](#LandingPageSchema)

Success.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "_id": "5eaa451a21a4dd75f0fd96c5",
    "application": "5d3ebd89f540e7506b8b3548",
    "_custom_json": null,
    "slug": "pnc-landing",
    "action": {
      "page": {
        "type": "home"
      },
      "popup": {},
      "type": "page"
    },
    "platform": [
      "web"
    ],
    "created_by": {
      "id": "000000000000000000000000"
    },
    "date_meta": {
      "created_on": "2020-04-30T03:25:14.549Z",
      "modified_on": "2020-04-30T03:25:14.549Z"
    },
    "archived": true
  }
}
```
</details>

</details>









---


### getLegalInformation
Get legal information



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.getLegalInformation();

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.getLegalInformation();
```






Use this API to get the legal information of an application, which includes Policy, Terms and Conditions, Shipping Policy and FAQ regarding the application.

*Returned Response:*




[ApplicationLegal](#ApplicationLegal)

Success. Refer `ApplicationLegal` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Success</i></summary>

```json
{
  "value": {
    "tnc": "TERMS AND CONDITIONS FOR RECURRING PAYMENTS ON FYND PLATFORM\n\nUpdated On: July 11, 2020\n\nWhen you purchase (“**Services**”) from Fynd Platform (“**Fynd Platform**”, “**We**” or “**Us**”), you have the option to make payments on a recurring basis (“**Recurring Payments**”) on the (“**Terms and Conditions**”) below for your monthly usage charges towards the services provided to you under the account you operate with Fynd Platform (“**Account**”). We may, at our sole discretion, refuse Recurring Payments to anyone without notice for any reason at any time. \n\n\n1. **Recurring Payments** - You are not required to make Recurring Payments, and you may cancel Recurring Payments for your Account at your discretion. We will make Recurring Payments available to you only if you have designated an eligible payment method for your Account that is current, valid and otherwise acceptable to us. Such a method is hereinafter referred to as \"Payment Method\". We reserve the right to decide the payment methods eligible for Recurring Payments and we will automatically charge your Payment Method. You are solely responsible for the accuracy of the information you provide us regarding your Payment Method. We may limit the amount that you can pay using Recurring Payments every month.\n\n2. **Enabling Recurring Payments**- You agree that Recurring Payments will be enabled automatically for your Account if you chose an eligible Payment Method. Once Recurring Payments have been enabled for your Account, you authorize us to use your Payment Method to pay for your monthly invoices automatically until you cancel Recurring Payments for your Account. In Addition, once Recurring Payments has been enabled, you authorize us to charge the fees for the Services, unless you cancel or disable Recurring Payment, by means specified by us and applicable at such time, in which case you will be required to take action and pay for the Services.\n\n3. **Verification and Authentication**- Before Recurring Payments are enabled for your Fynd Platform Account, verification and authentication of your Payment Method will be performed. Once the verification and authentication are successful, you will be registered for Recurring Payments. This verification and authentication may also be repeated if (a) there are changes to your Account or Payment Method; (b) you cancel or disable Recurring Payments; (c) one of your Recurring Payments is declined for any reason whatsoever, including without limitation, expiry of your card.\n\n4. **Third Party Payment Processors** - You agree, understand and acknowledge that Fynd Platform may engage third party payment processors or gateway service providers to process Recurring Payments. Therefore, you may be required to agree to the terms and conditions of the third party payment processors or gateway service providers as communicated to you from time to time.\n\n5. **Cancelling Recurring Payments** - You have the right to cancel Recurring Payments for your Fynd Platform Account by contacting our customer support.\n\n6. **Notifications** - You authorize us to communicate with you by email regarding Recurring Payments. You acknowledge that we may also communicate with you through our affiliates that provide Services to you.\n\n7. **Disclaimer of Liability** - You agree that we will not be liable for any losses or damages suffered by you because of your use of Recurring Payments for your Fynd Platform Account, including any fraud in connection with any payment using your Payment Method. You realize that neither Fynd Platform nor Shopsense Retail Technologies Pvt. Ltd. which fully owns and controls the Fynd Platform, will be held responsible for any damages, whether partial or full.\n\n\n8. **Agreement Changes** - We may in our discretion change these Terms and Conditions at any time. If any change is found to be invalid, void, or for any reason unenforceable, that change is severable and does not affect the validity and enforceability of any other changes or the remainder of these Terms and Conditions.\n\nYOUR CONTINUED USE OF RECURRING PAYMENTS FOR YOUR FYND PLATFORM ACCOUNT AFTER WE CHANGE THESE TERMS AND CONDITIONS CONSTITUTES YOUR ACCEPTANCE OF THESE CHANGES.",
    "policy": "**Privacy policy test**",
    "shipping": "**Shipping term and conditions**",
    "returns": "**Terms & conditions for returns **",
    "_id": "5e8b2b96abe7dc94c02c9ac9",
    "application": "000000000000000000000001",
    "faq": [
      {
        "question": "New Question",
        "answer": "New Answer"
      },
      {
        "question": "New",
        "answer": "sdfghjhg"
      },
      {
        "question": "test",
        "answer": "test"
      },
      {
        "question": "New Test",
        "answer": "New Test answer"
      },
      {
        "question": "test",
        "answer": "test"
      }
    ],
    "created_at": "2020-04-06T13:16:06.818Z",
    "updated_at": "2020-07-16T09:47:40.751Z",
    "__v": 260
  }
}
```
</details>

</details>









---


### updateLegalInformation
Save legal information



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.updateLegalInformation({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.updateLegalInformation({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [ApplicationLegal](#ApplicationLegal) | yes | Request body |


Use this API to edit, update and save the legal information of an application, which includes Policy, Terms and Conditions, Shipping Policy and FAQ regarding the application.

*Returned Response:*




[ApplicationLegal](#ApplicationLegal)

Success. Refer `ApplicationLegal` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "tnc": "This is terms and condition",
  "policy": "This is policy",
  "faq": [
    {
      "question": "This is question",
      "answer": "This is answer"
    }
  ]
}
```
</details>









---


### getNavigations
Get navigations



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.getNavigations({  devicePlatform : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.getNavigations({  devicePlatform : value,
 pageNo : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| devicePlatform | string | yes | Filter navigations by platform. Acceptable values are: web, android, ios, all |    
| pageNo | number | no | The page number to navigate through the given set of results. Default value is 1. |    
| pageSize | number | no | The number of items to retrieve in each page. Default value is 10. |  



Use this API to fetch the navigations details which includes the items of the navigation pane. It also shows the orientation, links, sub-navigations, etc.

*Returned Response:*




[NavigationGetResponse](#NavigationGetResponse)

Success. Refer `NavigationGetResponse` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "items": [
      {
        "_id": "5ffbd9b90ac98678ae0458d7",
        "application": "000000000000000000000001",
        "_custom_json": null,
        "name": "temp",
        "slug": "temp",
        "platform": "web",
        "position": "top",
        "orientation": "landscape",
        "navigation": [
          {
            "display": "Home",
            "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1567148153/production/system/icons/mystore-tab_y0dqzt.png",
            "sort_order": 1,
            "type": "",
            "action": {
              "page": {
                "url": "/",
                "type": "home"
              },
              "popup": {},
              "type": "page"
            },
            "active": true,
            "tags": {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "acl": [
              "all"
            ],
            "_locale_language": {
              "hi": {
                "display": ""
              },
              "ar": {
                "display": ""
              },
              "en_us": {
                "display": ""
              }
            },
            "sub_navigation": [
              {
                "display": "Brands",
                "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1567148153/production/system/icons/brands-tab_sfinpk.png",
                "sort_order": 1,
                "type": "",
                "action": {
                  "page": {
                    "url": "/brands/",
                    "type": "brands"
                  },
                  "popup": {},
                  "type": "page"
                },
                "active": true,
                "tags": null,
                "acl": [
                  "all"
                ],
                "_locale_language": {
                  "hi": {
                    "display": ""
                  },
                  "ar": {
                    "display": ""
                  },
                  "en_us": {
                    "display": ""
                  }
                }
              }
            ]
          },
          {
            "display": "Collections",
            "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1567148153/production/system/icons/collections-tab_a0tg9c.png",
            "sort_order": 2,
            "type": "",
            "action": {
              "page": {
                "url": "/collections/",
                "type": "collections"
              },
              "popup": {},
              "type": "page"
            },
            "active": true,
            "tags": null,
            "acl": [
              "all"
            ],
            "_locale_language": {
              "hi": {
                "display": ""
              },
              "ar": {
                "display": ""
              },
              "en_us": {
                "display": ""
              }
            },
            "sub_navigation": [
              {
                "display": "Categories",
                "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1567148154/production/system/icons/categories-tab_ss8e0q.png",
                "sort_order": 1,
                "type": "",
                "action": {
                  "page": {
                    "url": "/categories/",
                    "type": "categories"
                  },
                  "popup": {},
                  "type": "page"
                },
                "active": true,
                "tags": null,
                "acl": [
                  "all"
                ],
                "_locale_language": {
                  "hi": {
                    "display": ""
                  },
                  "ar": {
                    "display": ""
                  },
                  "en_us": {
                    "display": ""
                  }
                }
              }
            ]
          },
          {
            "display": "Primary Menu",
            "image": "",
            "sort_order": 3,
            "type": "",
            "action": {
              "page": {
                "type": "home"
              },
              "popup": {},
              "type": "page"
            },
            "active": true,
            "tags": null,
            "acl": [
              "all"
            ],
            "_locale_language": {
              "hi": {
                "display": ""
              },
              "ar": {
                "display": ""
              },
              "en_us": {
                "display": ""
              }
            }
          }
        ],
        "created_by": {
          "id": "000000000000000000000000"
        },
        "date_meta": {
          "created_on": "2021-01-11T04:53:13.585Z",
          "modified_on": "2021-01-14T10:24:34.485Z"
        }
      }
    ],
    "page": {
      "type": "number",
      "current": 1,
      "size": 1,
      "item_total": 2,
      "has_next": true
    }
  }
}
```
</details>

</details>









---


### createNavigation
Create a navigation



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.createNavigation({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.createNavigation({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [NavigationRequest](#NavigationRequest) | yes | Request body |


Navigation is the arrangement of navigational items to ease the accessibility of resources for users on a website. Use this API to create a navigation.

*Returned Response:*




[NavigationSchema](#NavigationSchema)

Success.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "_id": "5ffbd9b90ac98678ae0458d7",
    "application": "000000000000000000000001",
    "_custom_json": null,
    "name": "test-nav",
    "slug": "test-nav",
    "platform": [
      "ios",
      "android"
    ],
    "orientation": {
      "portrait": [
        "left"
      ]
    },
    "navigation": [
      {
        "display": "Home",
        "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1567148153/production/system/icons/mystore-tab_y0dqzt.png",
        "sort_order": 1,
        "type": "",
        "action": {
          "page": {
            "url": "/",
            "type": "home"
          },
          "popup": {},
          "type": "page"
        },
        "active": true,
        "tags": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "acl": [
          "all"
        ],
        "_locale_language": {
          "hi": {
            "display": ""
          },
          "ar": {
            "display": ""
          },
          "en_us": {
            "display": ""
          }
        },
        "sub_navigation": [
          {
            "display": "Brands",
            "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1567148153/production/system/icons/brands-tab_sfinpk.png",
            "sort_order": 1,
            "type": "",
            "action": {
              "page": {
                "url": "/brands/",
                "type": "brands"
              },
              "popup": {},
              "type": "page"
            },
            "active": true,
            "tags": null,
            "acl": [
              "all"
            ],
            "_locale_language": {
              "hi": {
                "display": ""
              },
              "ar": {
                "display": ""
              },
              "en_us": {
                "display": ""
              }
            }
          }
        ]
      },
      {
        "display": "Collections",
        "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1567148153/production/system/icons/collections-tab_a0tg9c.png",
        "sort_order": 2,
        "type": "",
        "action": {
          "page": {
            "url": "/collections/",
            "type": "collections"
          },
          "popup": {},
          "type": "page"
        },
        "active": true,
        "tags": null,
        "acl": [
          "all"
        ],
        "_locale_language": {
          "hi": {
            "display": ""
          },
          "ar": {
            "display": ""
          },
          "en_us": {
            "display": ""
          }
        },
        "sub_navigation": [
          {
            "display": "Categories",
            "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1567148154/production/system/icons/categories-tab_ss8e0q.png",
            "sort_order": 1,
            "type": "",
            "action": {
              "page": {
                "url": "/categories/",
                "type": "categories"
              },
              "popup": {},
              "type": "page"
            },
            "active": true,
            "tags": null,
            "acl": [
              "all"
            ],
            "_locale_language": {
              "hi": {
                "display": ""
              },
              "ar": {
                "display": ""
              },
              "en_us": {
                "display": ""
              }
            }
          }
        ]
      },
      {
        "display": "Primary Menu",
        "image": "",
        "sort_order": 3,
        "type": "",
        "action": {
          "page": {
            "type": "home"
          },
          "popup": {},
          "type": "page"
        },
        "active": true,
        "tags": null,
        "acl": [
          "all"
        ],
        "_locale_language": {
          "hi": {
            "display": ""
          },
          "ar": {
            "display": ""
          },
          "en_us": {
            "display": ""
          }
        }
      }
    ],
    "created_by": {
      "id": "000000000000000000000000"
    },
    "date_meta": {
      "created_on": "2021-01-11T04:53:13.585Z",
      "modified_on": "2021-01-14T10:24:34.485Z"
    },
    "archived": false
  }
}
```
</details>

</details>









---


### getDefaultNavigations
Get default navigations



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.getDefaultNavigations();

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.getDefaultNavigations();
```






On any website (application), there are navigations that are present by default. Use this API to retrieve those default navigations.

*Returned Response:*




[DefaultNavigationResponse](#DefaultNavigationResponse)

Success. Refer `DefaultNavigationResponse` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "items": [
      {
        "name": "default-bottom",
        "slug": "default-bottom-vIhLiJKQvUZdQvGWzDdrzLP3CTC4Hbxg",
        "orientation": {
          "landscape": [
            "bottom"
          ]
        },
        "version": 3,
        "navigation": [
          {
            "display": "Home",
            "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1567148153/production/system/icons/mystore-tab_y0dqzt.png",
            "sort_order": 1,
            "acl": [
              "all"
            ],
            "action": {
              "page": {
                "type": "home"
              },
              "type": "page"
            },
            "active": true
          },
          {
            "display": "Brands",
            "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1567148153/production/system/icons/brands-tab_sfinpk.png",
            "sort_order": 2,
            "acl": [
              "all"
            ],
            "action": {
              "page": {
                "type": "brands"
              },
              "type": "page"
            },
            "active": true
          },
          {
            "display": "Collections",
            "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1567148153/production/system/icons/collections-tab_a0tg9c.png",
            "sort_order": 3,
            "acl": [
              "all"
            ],
            "action": {
              "page": {
                "type": "collections"
              },
              "type": "page"
            },
            "active": true
          },
          {
            "display": "Categories",
            "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1567148154/production/system/icons/categories-tab_ss8e0q.png",
            "sort_order": 4,
            "acl": [
              "all"
            ],
            "action": {
              "page": {
                "type": "categories"
              },
              "type": "page"
            },
            "active": true
          }
        ],
        "created_by": {},
        "_id": "6050244dbd9e072063f1586b",
        "platform": [
          "android"
        ]
      },
      {
        "name": "default-bottom",
        "slug": "default-bottom-SB0zLTfiPN4Z5doJQBKRagsLTDldm8Ug",
        "orientation": {
          "landscape": [
            "bottom"
          ]
        },
        "version": 3,
        "navigation": [
          {
            "display": "Home",
            "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1567148153/production/system/icons/mystore-tab_y0dqzt.png",
            "sort_order": 1,
            "acl": [
              "all"
            ],
            "action": {
              "page": {
                "type": "home"
              },
              "type": "page"
            },
            "active": true
          },
          {
            "display": "Brands",
            "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1567148153/production/system/icons/brands-tab_sfinpk.png",
            "sort_order": 2,
            "acl": [
              "all"
            ],
            "action": {
              "page": {
                "type": "brands"
              },
              "type": "page"
            },
            "active": true
          },
          {
            "display": "Collections",
            "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1567148153/production/system/icons/collections-tab_a0tg9c.png",
            "sort_order": 3,
            "acl": [
              "all"
            ],
            "action": {
              "page": {
                "type": "collections"
              },
              "type": "page"
            },
            "active": true
          },
          {
            "display": "Categories",
            "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1567148154/production/system/icons/categories-tab_ss8e0q.png",
            "sort_order": 4,
            "acl": [
              "all"
            ],
            "action": {
              "page": {
                "type": "categories"
              },
              "type": "page"
            },
            "active": true
          }
        ],
        "created_by": {},
        "_id": "6050244dbd9e072063f1586c",
        "platform": [
          "ios"
        ]
      },
      {
        "name": "default-left",
        "slug": "default-left-dWrrfpfcNw6Arl0QtmK5VgunYYAHhGRR",
        "orientation": {
          "portrait": [
            "left"
          ]
        },
        "version": 3,
        "navigation": [
          {
            "display": "Profile",
            "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1583938091/production/applications/app_000000000000000000000001/media/navigation/icon/hv0cd5jdo0rkhsqoizmi.png",
            "sort_order": 1,
            "type": "",
            "action": {
              "page": {
                "url": "/",
                "type": "profile"
              },
              "popup": {},
              "type": "page"
            },
            "active": true,
            "acl": [
              "registered"
            ]
          },
          {
            "display": "Orders",
            "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1583938144/production/applications/app_000000000000000000000001/media/navigation/icon/lmv4fzpxxk0a6acitlfg.png",
            "sort_order": 2,
            "type": "",
            "action": {
              "page": {
                "url": "/",
                "type": "orders"
              },
              "popup": {},
              "type": "page"
            },
            "active": true,
            "acl": [
              "registered"
            ]
          },
          {
            "display": "Track Order",
            "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1583938144/production/applications/app_000000000000000000000001/media/navigation/icon/lmv4fzpxxk0a6acitlfg.png",
            "sort_order": 3,
            "type": "",
            "action": {
              "page": {
                "type": "track-order"
              },
              "popup": {},
              "type": "page"
            },
            "active": true,
            "acl": [
              "anonymous"
            ]
          },
          {
            "display": "Addresses",
            "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1583938161/production/applications/app_000000000000000000000001/media/navigation/icon/qbod8vkjmot3qnaroibr.png",
            "sort_order": 4,
            "type": "",
            "action": {
              "page": {
                "url": "/",
                "type": "addresses"
              },
              "popup": {},
              "type": "page"
            },
            "active": true,
            "acl": [
              "registered"
            ]
          },
          {
            "display": "Wishlist",
            "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1583938125/production/applications/app_000000000000000000000001/media/navigation/icon/u8c7jdke4a3wwc0ftz8x.png",
            "sort_order": 5,
            "type": "",
            "action": {
              "page": {
                "url": "/wishlist/",
                "type": "wishlist"
              },
              "popup": {},
              "type": "page"
            },
            "active": true,
            "acl": [
              "registered"
            ]
          },
          {
            "display": "Settings",
            "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1584003256/production/applications/app_000000000000000000000001/media/navigation/icon/vywbdiio1zi7cbnltvgz.png",
            "sort_order": 6,
            "type": "",
            "action": {
              "page": {
                "url": "/",
                "type": "settings"
              },
              "popup": {},
              "type": "page"
            },
            "active": true,
            "acl": [
              "all"
            ]
          },
          {
            "display": "Policy",
            "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1583939301/production/applications/app_000000000000000000000001/media/navigation/icon/bygqvme7hkrd45oemzy0.png",
            "sort_order": 7,
            "type": "",
            "action": {
              "page": {
                "url": "/",
                "type": "policy"
              },
              "popup": {},
              "type": "page"
            },
            "active": true,
            "acl": [
              "all"
            ]
          },
          {
            "display": "Terms & Conditions",
            "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1583939382/production/applications/app_000000000000000000000001/media/navigation/icon/eaq0aagqr0xirojbuki3.png",
            "sort_order": 8,
            "type": "",
            "action": {
              "page": {
                "url": "/",
                "type": "tnc"
              },
              "popup": {},
              "type": "page"
            },
            "active": true,
            "acl": [
              "all"
            ]
          },
          {
            "display": "Need Help",
            "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1583939416/production/applications/app_000000000000000000000001/media/navigation/icon/xeqv7pzyxagwtxcwvxbw.png",
            "sort_order": 9,
            "type": "",
            "action": {
              "page": {
                "url": "/faq/",
                "type": "faq"
              },
              "popup": {},
              "type": "page"
            },
            "active": true,
            "acl": [
              "all"
            ]
          },
          {
            "display": "About Us",
            "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1583939196/production/applications/app_000000000000000000000001/media/navigation/icon/dccm5et4sgylisbug9xr.png",
            "sort_order": 10,
            "type": "",
            "action": {
              "page": {
                "url": "/",
                "type": "about-us"
              },
              "popup": {},
              "type": "page"
            },
            "active": true,
            "acl": [
              "all"
            ]
          },
          {
            "display": "Rate Us",
            "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1584091739/production/applications/app_000000000000000000000001/media/navigation/icon/afryyfeccqgjyeosdmbz.png",
            "sort_order": 11,
            "type": "",
            "action": {
              "page": {
                "url": "/",
                "type": "rate-us"
              },
              "popup": {},
              "type": "page"
            },
            "active": true,
            "acl": [
              "registered"
            ]
          }
        ],
        "created_by": {},
        "_id": "6050244dbd9e072063f1586d",
        "platform": [
          "android"
        ]
      },
      {
        "name": "default-left",
        "slug": "default-left-tRK1fsQVUD7BmdvX30Fb4u5ZVSrSi3KW",
        "orientation": {
          "portrait": [
            "left"
          ]
        },
        "version": 3,
        "navigation": [
          {
            "display": "Profile",
            "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1583938091/production/applications/app_000000000000000000000001/media/navigation/icon/hv0cd5jdo0rkhsqoizmi.png",
            "sort_order": 1,
            "type": "",
            "action": {
              "page": {
                "url": "/",
                "type": "profile"
              },
              "popup": {},
              "type": "page"
            },
            "active": true,
            "acl": [
              "registered"
            ]
          },
          {
            "display": "Orders",
            "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1583938144/production/applications/app_000000000000000000000001/media/navigation/icon/lmv4fzpxxk0a6acitlfg.png",
            "sort_order": 2,
            "type": "",
            "action": {
              "page": {
                "url": "/",
                "type": "orders"
              },
              "popup": {},
              "type": "page"
            },
            "active": true,
            "acl": [
              "registered"
            ]
          },
          {
            "display": "Track Order",
            "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1583938144/production/applications/app_000000000000000000000001/media/navigation/icon/lmv4fzpxxk0a6acitlfg.png",
            "sort_order": 3,
            "type": "",
            "action": {
              "page": {
                "type": "track-order"
              },
              "popup": {},
              "type": "page"
            },
            "active": true,
            "acl": [
              "anonymous"
            ]
          },
          {
            "display": "Addresses",
            "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1583938161/production/applications/app_000000000000000000000001/media/navigation/icon/qbod8vkjmot3qnaroibr.png",
            "sort_order": 4,
            "type": "",
            "action": {
              "page": {
                "url": "/",
                "type": "addresses"
              },
              "popup": {},
              "type": "page"
            },
            "active": true,
            "acl": [
              "registered"
            ]
          },
          {
            "display": "Wishlist",
            "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1583938125/production/applications/app_000000000000000000000001/media/navigation/icon/u8c7jdke4a3wwc0ftz8x.png",
            "sort_order": 5,
            "type": "",
            "action": {
              "page": {
                "url": "/wishlist/",
                "type": "wishlist"
              },
              "popup": {},
              "type": "page"
            },
            "active": true,
            "acl": [
              "registered"
            ]
          },
          {
            "display": "Settings",
            "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1584003256/production/applications/app_000000000000000000000001/media/navigation/icon/vywbdiio1zi7cbnltvgz.png",
            "sort_order": 6,
            "type": "",
            "action": {
              "page": {
                "url": "/",
                "type": "settings"
              },
              "popup": {},
              "type": "page"
            },
            "active": true,
            "acl": [
              "all"
            ]
          },
          {
            "display": "Policy",
            "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1583939301/production/applications/app_000000000000000000000001/media/navigation/icon/bygqvme7hkrd45oemzy0.png",
            "sort_order": 7,
            "type": "",
            "action": {
              "page": {
                "url": "/",
                "type": "policy"
              },
              "popup": {},
              "type": "page"
            },
            "active": true,
            "acl": [
              "all"
            ]
          },
          {
            "display": "Terms & Conditions",
            "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1583939382/production/applications/app_000000000000000000000001/media/navigation/icon/eaq0aagqr0xirojbuki3.png",
            "sort_order": 8,
            "type": "",
            "action": {
              "page": {
                "url": "/",
                "type": "tnc"
              },
              "popup": {},
              "type": "page"
            },
            "active": true,
            "acl": [
              "all"
            ]
          },
          {
            "display": "Need Help",
            "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1583939416/production/applications/app_000000000000000000000001/media/navigation/icon/xeqv7pzyxagwtxcwvxbw.png",
            "sort_order": 9,
            "type": "",
            "action": {
              "page": {
                "url": "/faq/",
                "type": "faq"
              },
              "popup": {},
              "type": "page"
            },
            "active": true,
            "acl": [
              "all"
            ]
          },
          {
            "display": "About Us",
            "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1583939196/production/applications/app_000000000000000000000001/media/navigation/icon/dccm5et4sgylisbug9xr.png",
            "sort_order": 10,
            "type": "",
            "action": {
              "page": {
                "url": "/",
                "type": "about-us"
              },
              "popup": {},
              "type": "page"
            },
            "active": true,
            "acl": [
              "all"
            ]
          },
          {
            "display": "Rate Us",
            "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1584091739/production/applications/app_000000000000000000000001/media/navigation/icon/afryyfeccqgjyeosdmbz.png",
            "sort_order": 11,
            "type": "",
            "action": {
              "page": {
                "url": "/",
                "type": "rate-us"
              },
              "popup": {},
              "type": "page"
            },
            "active": true,
            "acl": [
              "registered"
            ]
          }
        ],
        "created_by": {},
        "_id": "6050244dbd9e072063f1586e",
        "platform": [
          "ios"
        ]
      },
      {
        "name": "default-top",
        "slug": "default-top-qrprb8dxqr3m698wwUGXWsvTfVkjt4cR",
        "orientation": {
          "landscape": [
            "top"
          ]
        },
        "version": 3,
        "navigation": [
          {
            "display": "Home",
            "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1567148153/production/system/icons/mystore-tab_y0dqzt.png",
            "sort_order": 1,
            "acl": [
              "all"
            ],
            "action": {
              "page": {
                "type": "home"
              },
              "type": "page"
            },
            "active": true
          },
          {
            "display": "Brands",
            "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1567148153/production/system/icons/brands-tab_sfinpk.png",
            "sort_order": 2,
            "acl": [
              "all"
            ],
            "action": {
              "page": {
                "type": "brands"
              },
              "type": "page"
            },
            "active": true
          },
          {
            "display": "Collections",
            "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1567148153/production/system/icons/collections-tab_a0tg9c.png",
            "sort_order": 3,
            "acl": [
              "all"
            ],
            "action": {
              "page": {
                "type": "collections"
              },
              "type": "page"
            },
            "active": true
          },
          {
            "display": "Categories",
            "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1567148154/production/system/icons/categories-tab_ss8e0q.png",
            "sort_order": 4,
            "acl": [
              "all"
            ],
            "action": {
              "page": {
                "type": "categories"
              },
              "type": "page"
            },
            "active": true
          }
        ],
        "created_by": {},
        "_id": "6050244dbd9e072063f1586f",
        "platform": [
          "web"
        ]
      }
    ]
  }
}
```
</details>

</details>









---


### getNavigationBySlug
Get a navigation by slug



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.getNavigationBySlug({  slug : value,
 devicePlatform : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.getNavigationBySlug({  slug : value,
 devicePlatform : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| slug | string | yes | A short, human-readable, URL-friendly identifier of a navigation. You can get slug value of a navigation from `getNavigations` API. |   
| devicePlatform | string | yes | Filter navigations by platform. Acceptable values are: web, android, ios, all |  



Use this API to retrieve a navigation by its slug.

*Returned Response:*




[NavigationSchema](#NavigationSchema)

Success. Refer `NavigationSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "_id": "5ffbd9b90ac98678ae0458d7",
    "application": "000000000000000000000001",
    "_custom_json": null,
    "name": "test-nav",
    "slug": "test-nav",
    "platform": [
      "ios",
      "android"
    ],
    "orientation": {
      "portrait": [
        "left"
      ]
    },
    "navigation": [
      {
        "display": "Home",
        "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1567148153/production/system/icons/mystore-tab_y0dqzt.png",
        "sort_order": 1,
        "type": "",
        "action": {
          "page": {
            "url": "/",
            "type": "home"
          },
          "popup": {},
          "type": "page"
        },
        "active": true,
        "tags": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "acl": [
          "all"
        ],
        "_locale_language": {
          "hi": {
            "display": ""
          },
          "ar": {
            "display": ""
          },
          "en_us": {
            "display": ""
          }
        },
        "sub_navigation": [
          {
            "display": "Brands",
            "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1567148153/production/system/icons/brands-tab_sfinpk.png",
            "sort_order": 1,
            "type": "",
            "action": {
              "page": {
                "url": "/brands/",
                "type": "brands"
              },
              "popup": {},
              "type": "page"
            },
            "active": true,
            "tags": null,
            "acl": [
              "all"
            ],
            "_locale_language": {
              "hi": {
                "display": ""
              },
              "ar": {
                "display": ""
              },
              "en_us": {
                "display": ""
              }
            }
          }
        ]
      },
      {
        "display": "Collections",
        "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1567148153/production/system/icons/collections-tab_a0tg9c.png",
        "sort_order": 2,
        "type": "",
        "action": {
          "page": {
            "url": "/collections/",
            "type": "collections"
          },
          "popup": {},
          "type": "page"
        },
        "active": true,
        "tags": null,
        "acl": [
          "all"
        ],
        "_locale_language": {
          "hi": {
            "display": ""
          },
          "ar": {
            "display": ""
          },
          "en_us": {
            "display": ""
          }
        },
        "sub_navigation": [
          {
            "display": "Categories",
            "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1567148154/production/system/icons/categories-tab_ss8e0q.png",
            "sort_order": 1,
            "type": "",
            "action": {
              "page": {
                "url": "/categories/",
                "type": "categories"
              },
              "popup": {},
              "type": "page"
            },
            "active": true,
            "tags": null,
            "acl": [
              "all"
            ],
            "_locale_language": {
              "hi": {
                "display": ""
              },
              "ar": {
                "display": ""
              },
              "en_us": {
                "display": ""
              }
            }
          }
        ]
      },
      {
        "display": "Primary Menu",
        "image": "",
        "sort_order": 3,
        "type": "",
        "action": {
          "page": {
            "type": "home"
          },
          "popup": {},
          "type": "page"
        },
        "active": true,
        "tags": null,
        "acl": [
          "all"
        ],
        "_locale_language": {
          "hi": {
            "display": ""
          },
          "ar": {
            "display": ""
          },
          "en_us": {
            "display": ""
          }
        }
      }
    ],
    "created_by": {
      "id": "000000000000000000000000"
    },
    "date_meta": {
      "created_on": "2021-01-11T04:53:13.585Z",
      "modified_on": "2021-01-14T10:24:34.485Z"
    },
    "archived": false
  }
}
```
</details>

</details>









---


### updateNavigation
Update a navigation



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.updateNavigation({  id : value,
 body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.updateNavigation({  id : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | ID allotted to the navigation. |  
| body | [NavigationRequest](#NavigationRequest) | yes | Request body |


Use this API to edit the details of an existing navigation.

*Returned Response:*




[NavigationSchema](#NavigationSchema)

Success.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "_id": "5ffbd9b90ac98678ae0458d7",
    "application": "000000000000000000000001",
    "_custom_json": null,
    "name": "test-nav",
    "slug": "test-nav",
    "platform": [
      "ios",
      "android"
    ],
    "orientation": {
      "portrait": [
        "left"
      ]
    },
    "navigation": [
      {
        "display": "Home",
        "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1567148153/production/system/icons/mystore-tab_y0dqzt.png",
        "sort_order": 1,
        "type": "",
        "action": {
          "page": {
            "url": "/",
            "type": "home"
          },
          "popup": {},
          "type": "page"
        },
        "active": true,
        "tags": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "acl": [
          "all"
        ],
        "_locale_language": {
          "hi": {
            "display": ""
          },
          "ar": {
            "display": ""
          },
          "en_us": {
            "display": ""
          }
        },
        "sub_navigation": [
          {
            "display": "Brands",
            "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1567148153/production/system/icons/brands-tab_sfinpk.png",
            "sort_order": 1,
            "type": "",
            "action": {
              "page": {
                "url": "/brands/",
                "type": "brands"
              },
              "popup": {},
              "type": "page"
            },
            "active": true,
            "tags": null,
            "acl": [
              "all"
            ],
            "_locale_language": {
              "hi": {
                "display": ""
              },
              "ar": {
                "display": ""
              },
              "en_us": {
                "display": ""
              }
            }
          }
        ]
      },
      {
        "display": "Collections",
        "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1567148153/production/system/icons/collections-tab_a0tg9c.png",
        "sort_order": 2,
        "type": "",
        "action": {
          "page": {
            "url": "/collections/",
            "type": "collections"
          },
          "popup": {},
          "type": "page"
        },
        "active": true,
        "tags": null,
        "acl": [
          "all"
        ],
        "_locale_language": {
          "hi": {
            "display": ""
          },
          "ar": {
            "display": ""
          },
          "en_us": {
            "display": ""
          }
        },
        "sub_navigation": [
          {
            "display": "Categories",
            "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1567148154/production/system/icons/categories-tab_ss8e0q.png",
            "sort_order": 1,
            "type": "",
            "action": {
              "page": {
                "url": "/categories/",
                "type": "categories"
              },
              "popup": {},
              "type": "page"
            },
            "active": true,
            "tags": null,
            "acl": [
              "all"
            ],
            "_locale_language": {
              "hi": {
                "display": ""
              },
              "ar": {
                "display": ""
              },
              "en_us": {
                "display": ""
              }
            }
          }
        ]
      },
      {
        "display": "Primary Menu",
        "image": "",
        "sort_order": 3,
        "type": "",
        "action": {
          "page": {
            "type": "home"
          },
          "popup": {},
          "type": "page"
        },
        "active": true,
        "tags": null,
        "acl": [
          "all"
        ],
        "_locale_language": {
          "hi": {
            "display": ""
          },
          "ar": {
            "display": ""
          },
          "en_us": {
            "display": ""
          }
        }
      }
    ],
    "created_by": {
      "id": "000000000000000000000000"
    },
    "date_meta": {
      "created_on": "2021-01-11T04:53:13.585Z",
      "modified_on": "2021-01-14T10:24:34.485Z"
    },
    "archived": false
  }
}
```
</details>

</details>









---


### deleteNavigation
Delete a navigation



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.deleteNavigation({  id : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.deleteNavigation({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | ID allotted to the navigation. |  



Use this API to delete an existing navigation.

*Returned Response:*




[NavigationSchema](#NavigationSchema)

Success.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "_id": "5ffbd9b90ac98678ae0458d7",
    "application": "000000000000000000000001",
    "_custom_json": null,
    "name": "temp",
    "slug": "temp",
    "platform": "[web]",
    "orientation": {
      "portrait": [
        "left"
      ]
    },
    "navigation": [
      {
        "display": "Home",
        "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1567148153/production/system/icons/mystore-tab_y0dqzt.png",
        "sort_order": 1,
        "type": "",
        "action": {
          "page": {
            "url": "/",
            "type": "home"
          },
          "popup": {},
          "type": "page"
        },
        "active": true,
        "tags": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "acl": [
          "all"
        ],
        "_locale_language": {
          "hi": {
            "display": ""
          },
          "ar": {
            "display": ""
          },
          "en_us": {
            "display": ""
          }
        },
        "sub_navigation": [
          {
            "display": "Brands",
            "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1567148153/production/system/icons/brands-tab_sfinpk.png",
            "sort_order": 1,
            "type": "",
            "action": {
              "page": {
                "url": "/brands/",
                "type": "brands"
              },
              "popup": {},
              "type": "page"
            },
            "active": true,
            "tags": null,
            "acl": [
              "all"
            ],
            "_locale_language": {
              "hi": {
                "display": ""
              },
              "ar": {
                "display": ""
              },
              "en_us": {
                "display": ""
              }
            }
          }
        ]
      },
      {
        "display": "Collections",
        "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1567148153/production/system/icons/collections-tab_a0tg9c.png",
        "sort_order": 2,
        "type": "",
        "action": {
          "page": {
            "url": "/collections/",
            "type": "collections"
          },
          "popup": {},
          "type": "page"
        },
        "active": true,
        "tags": null,
        "acl": [
          "all"
        ],
        "_locale_language": {
          "hi": {
            "display": ""
          },
          "ar": {
            "display": ""
          },
          "en_us": {
            "display": ""
          }
        },
        "sub_navigation": [
          {
            "display": "Categories",
            "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1567148154/production/system/icons/categories-tab_ss8e0q.png",
            "sort_order": 1,
            "type": "",
            "action": {
              "page": {
                "url": "/categories/",
                "type": "categories"
              },
              "popup": {},
              "type": "page"
            },
            "active": true,
            "tags": null,
            "acl": [
              "all"
            ],
            "_locale_language": {
              "hi": {
                "display": ""
              },
              "ar": {
                "display": ""
              },
              "en_us": {
                "display": ""
              }
            }
          }
        ]
      },
      {
        "display": "Primary Menu",
        "image": "",
        "sort_order": 3,
        "type": "",
        "action": {
          "page": {
            "type": "home"
          },
          "popup": {},
          "type": "page"
        },
        "active": true,
        "tags": null,
        "acl": [
          "all"
        ],
        "_locale_language": {
          "hi": {
            "display": ""
          },
          "ar": {
            "display": ""
          },
          "en_us": {
            "display": ""
          }
        }
      }
    ],
    "created_by": {
      "id": "000000000000000000000000"
    },
    "date_meta": {
      "created_on": "2021-01-11T04:53:13.585Z",
      "modified_on": "2021-01-14T10:24:34.485Z"
    },
    "archived": true
  }
}
```
</details>

</details>









---


### getPageMeta
Get page meta



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.getPageMeta();

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.getPageMeta();
```






Use this API to get the meta of custom pages (blog, page) and default system pages (e.g. home/brand/category/collection).

*Returned Response:*




[PageMetaSchema](#PageMetaSchema)

Success. Refer `PageMetaSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "application_id": "000000000000000000000001",
    "system_pages": [
      {
        "display": "Home",
        "action": {
          "page": {
            "type": "home"
          },
          "type": "page"
        },
        "page_type": "home"
      },
      {
        "display": "Brands",
        "action": {
          "page": {
            "type": "brands"
          },
          "type": "page"
        },
        "page_type": "brands"
      },
      {
        "display": "Collections",
        "action": {
          "page": {
            "type": "collections"
          },
          "type": "page"
        },
        "page_type": "collections"
      },
      {
        "display": "Categories",
        "action": {
          "page": {
            "type": "categories"
          },
          "type": "page"
        },
        "page_type": "categories"
      }
    ],
    "custom_pages": [
      {
        "display": "my first page",
        "slug": "first_page"
      },
      {
        "display": "my second page",
        "slug": "second_page"
      }
    ]
  }
}
```
</details>

</details>









---


### getPageSpec
Get page spec



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.getPageSpec();

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.getPageSpec();
```






Use this API to get the specifications of a page, such as page type, display name, params and query.

*Returned Response:*




[PageSpec](#PageSpec)

Success. Refer `PageSpec` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "specifications": [
      {
        "page_type": "home",
        "display_name": "Home",
        "params": [],
        "query": []
      },
      {
        "page_type": "collections",
        "display_name": "Collections",
        "params": [],
        "query": []
      },
      {
        "page_type": "collection",
        "display_name": "Collection",
        "params": [
          {
            "key": "slug",
            "required": true
          }
        ],
        "query": []
      }
    ]
  }
}
```
</details>

</details>









---


### createPagePreview
Create a page preview



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.createPagePreview({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.createPagePreview({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [PageRequest](#PageRequest) | yes | Request body |


Use this API to create a page preview to check the appearance of a custom page.

*Returned Response:*




[PageSchema](#PageSchema)

Success. Refer `PageSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "date_meta": {
      "created_on": "2021-03-16T08:24:19.197Z",
      "modified_on": "2021-03-16T08:24:19.197Z"
    },
    "tags": [
      "my first page"
    ],
    "published": true,
    "component_ids": [],
    "archived": false,
    "_id": "60506dcad18cb33946026862",
    "title": "my first page",
    "slug": "1st_page",
    "feature_image": {
      "secure_url": "https://google.com/some-image"
    },
    "content": [
      {
        "type": "html",
        "value": "<div id=\"icfm\">Emtpy Page. Create Page here.</div><div id=\"izu5\" class=\"aa\">hello there!<div id=\"izzl\">how are you doing</div><div><br/></div></div><img id=\"ibgj\" src=\"https://hdn-1.addsale.com/x0/company/52/applications/614957b7e7a0ccc371e96094/pages/pictures/free-content/original/-zLi_CuyM-apple.jpeg\"/>"
      },
      {
        "type": "css",
        "value": "* { box-sizing: border-box; } body {margin: 0;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#icfm{text-align:center;padding-top:30px;padding-right:30px;padding-bottom:30px;padding-left:30px;}#izu5{padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;}#ibgj{color:black;}#izzl{float:none;display:flex;}.aa{float:right;}"
      },
      {
        "type": "js",
        "value": ""
      }
    ],
    "content_path": "https://hdn-1.fynd.com/company/1526/applications/61012f6a9250ccd1b9ef8a1d/pages/content/page_slug.html",
    "platform": "web",
    "description": "hey this is my first page",
    "visibility": {
      "test": true
    },
    "_schedule": {
      "start": "2021-04-23T23:50:00.000Z",
      "next_schedule": [
        {}
      ]
    },
    "seo": {
      "title": "my first page",
      "description": "hey this is my first page",
      "image": {
        "url": ""
      }
    },
    "type": "rawhtml",
    "application": "000000000000000000000001",
    "orientation": "portrait",
    "page_meta": []
  }
}
```
</details>

</details>









---


### updatePagePreview
Change the publish status of a page



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.updatePagePreview({  slug : value,
 body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.updatePagePreview({  slug : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| slug | string | yes | A short, human-readable, URL-friendly identifier of a page. You can get slug value of a page from `getPages` API. |  
| body | [PagePublishRequest](#PagePublishRequest) | yes | Request body |


Use this API to change the publish status of an existing page. Allows you to publish and unpublish the page.

*Returned Response:*




[PageSchema](#PageSchema)

Success.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "date_meta": {
      "created_on": "2021-03-16T08:24:19.197Z",
      "modified_on": "2021-03-16T08:24:19.197Z"
    },
    "tags": [
      "my first page"
    ],
    "published": true,
    "component_ids": [],
    "archived": false,
    "_id": "60506dcad18cb33946026862",
    "title": "my first page",
    "slug": "1st_page",
    "feature_image": {
      "secure_url": "https://google.com/some-image"
    },
    "content": [
      {
        "type": "html",
        "value": "<div id=\"icfm\">Emtpy Page. Create Page here.</div><div id=\"izu5\" class=\"aa\">hello there!<div id=\"izzl\">how are you doing</div><div><br/></div></div><img id=\"ibgj\" src=\"https://hdn-1.addsale.com/x0/company/52/applications/614957b7e7a0ccc371e96094/pages/pictures/free-content/original/-zLi_CuyM-apple.jpeg\"/>"
      },
      {
        "type": "css",
        "value": "* { box-sizing: border-box; } body {margin: 0;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#icfm{text-align:center;padding-top:30px;padding-right:30px;padding-bottom:30px;padding-left:30px;}#izu5{padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;}#ibgj{color:black;}#izzl{float:none;display:flex;}.aa{float:right;}"
      },
      {
        "type": "js",
        "value": ""
      }
    ],
    "content_path": "https://hdn-1.fynd.com/company/1526/applications/61012f6a9250ccd1b9ef8a1d/pages/content/page_slug.html",
    "platform": "web",
    "description": "hey this is my first page",
    "visibility": {
      "test": true
    },
    "_schedule": {
      "start": "2021-04-23T23:50:00.000Z",
      "next_schedule": [
        {}
      ]
    },
    "seo": {
      "title": "my first page",
      "description": "hey this is my first page",
      "image": {
        "url": ""
      }
    },
    "type": "rawhtml",
    "application": "000000000000000000000001",
    "orientation": "portrait",
    "page_meta": []
  }
}
```
</details>

</details>









---


### deletePage
Delete a page



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.deletePage({  id : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.deletePage({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | ID allotted to the page. |  



Use this API to delete an existing page.

*Returned Response:*




[PageSchema](#PageSchema)

Success.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "date_meta": {
      "created_on": "2021-03-16T08:24:19.197Z",
      "modified_on": "2021-03-16T08:24:19.197Z"
    },
    "tags": [
      "my first page"
    ],
    "published": true,
    "component_ids": [],
    "archived": false,
    "_id": "60506dcad18cb33946026862",
    "title": "my first page",
    "slug": "1st_page",
    "feature_image": {
      "secure_url": "https://google.com/some-image"
    },
    "content": [
      {
        "type": "html",
        "value": "<div id=\"icfm\">Emtpy Page. Create Page here.</div><div id=\"izu5\" class=\"aa\">hello there!<div id=\"izzl\">how are you doing</div><div><br/></div></div><img id=\"ibgj\" src=\"https://hdn-1.addsale.com/x0/company/52/applications/614957b7e7a0ccc371e96094/pages/pictures/free-content/original/-zLi_CuyM-apple.jpeg\"/>"
      },
      {
        "type": "css",
        "value": "* { box-sizing: border-box; } body {margin: 0;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#icfm{text-align:center;padding-top:30px;padding-right:30px;padding-bottom:30px;padding-left:30px;}#izu5{padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;}#ibgj{color:black;}#izzl{float:none;display:flex;}.aa{float:right;}"
      },
      {
        "type": "js",
        "value": ""
      }
    ],
    "content_path": "https://hdn-1.fynd.com/company/1526/applications/61012f6a9250ccd1b9ef8a1d/pages/content/page_slug.html",
    "platform": "web",
    "description": "hey this is my first page",
    "visibility": {
      "test": true
    },
    "_schedule": {
      "start": "2021-04-23T23:50:00.000Z",
      "next_schedule": [
        {}
      ]
    },
    "seo": {
      "title": "my first page",
      "description": "hey this is my first page",
      "image": {
        "url": ""
      }
    },
    "type": "rawhtml",
    "application": "000000000000000000000001",
    "orientation": "portrait",
    "page_meta": []
  }
}
```
</details>

</details>









---


### updatePathRedirectionRules
Save path based redirection rules



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.updatePathRedirectionRules({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.updatePathRedirectionRules({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [PathMappingSchema](#PathMappingSchema) | yes | Request body |


Use this API to add, update or delete path-based redirection rules

*Returned Response:*




[PathMappingSchema](#PathMappingSchema)

Success. Refer `PathMappingSchema` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "redirections": [
    {
      "redirect_from": "test.hostfynd.dev/redirect_from",
      "redirect_to": "/redirect_to"
    }
  ]
}
```
</details>









---


### getPathRedirectionRules
Get path based redirection rules



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.getPathRedirectionRules();

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.getPathRedirectionRules();
```






Use this API to get path based redirection rules.

*Returned Response:*




[PathMappingSchema](#PathMappingSchema)

Success. Refer `PathMappingSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Success</i></summary>

```json
{
  "value": {
    "_id": "615188e9db1e444cb0f40837",
    "application": "000000000000000000000002",
    "redirections": [
      {
        "redirect_from": "/from",
        "redirect_to": "/to"
      }
    ],
    "createdAt": "2021-09-27T09:03:37.053Z",
    "updatedAt": "2021-09-27T09:09:25.587Z"
  }
}
```
</details>

</details>









---


### getSEOConfiguration
Get SEO configuration of an application



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.getSEOConfiguration();

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.getSEOConfiguration();
```






Use this API to know how the SEO is configured in the application. This includes the sitemap, robot.txt, custom meta tags, etc.

*Returned Response:*




[SeoComponent](#SeoComponent)

Success. Refer `SeoComponent` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "seo": {
      "details": {
        "title": "Zyosa Zyosa"
      },
      "robots_txt": "User-agent: * \nAllow: / \nsancisciasn xwsaixjowqnxwsiwjs",
      "sitemap_enabled": false,
      "_id": "6009819ee463ad40de397eb2",
      "app": "000000000000000000000001",
      "created_at": "2021-01-21T13:29:02.543Z",
      "updated_at": "2021-02-05T06:36:16.048Z",
      "__v": 11,
      "custom_meta_tags": [
        {
          "name": "test 0000",
          "content": "<meta name=\"test\" content=\"0000 cn dcje dcj rejre cjrenurenc \">",
          "_id": "6017c301bde3c21dbb13b284"
        },
        {
          "name": "cwdcdc",
          "content": "<meta content=\"wdcewdewc\">",
          "_id": "6017c675bde3c22cfb13b290"
        }
      ]
    }
  }
}
```
</details>

</details>









---


### updateSEOConfiguration
Update SEO of application



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.updateSEOConfiguration({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.updateSEOConfiguration({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [SeoComponent](#SeoComponent) | yes | Request body |


Use this API to edit the SEO details of an application. This includes the sitemap, robot.txt, custom meta tags, etc.

*Returned Response:*




[SeoSchema](#SeoSchema)

Success. Refer `SeoSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "details": {
      "title": "Zyosa Zyosa"
    },
    "robots_txt": "User-agent: * \nAllow: / \nsancisciasn xwsaixjowqnxwsiwjs",
    "sitemap_enabled": false,
    "_id": "6009819ee463ad40de397eb2",
    "app": "000000000000000000000001",
    "created_at": "2021-01-21T13:29:02.543Z",
    "updated_at": "2021-02-05T06:36:16.048Z",
    "__v": 11,
    "custom_meta_tags": [
      {
        "name": "test 0000",
        "content": "<meta name=\"test\" content=\"0000 cn dcje dcj rejre cjrenurenc \">",
        "_id": "6017c301bde3c21dbb13b284"
      },
      {
        "name": "cwdcdc",
        "content": "<meta content=\"wdcewdewc\">",
        "_id": "6017c675bde3c22cfb13b290"
      }
    ]
  }
}
```
</details>

</details>









---


### getSlideshows
Get slideshows



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.getSlideshows({  devicePlatform : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.getSlideshows({  devicePlatform : value,
 pageNo : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| devicePlatform | string | yes | Filter slideshows by platform. Acceptable values are: web, android, ios and all |    
| pageNo | number | no | The page number to navigate through the given set of results. Default value is 1. |    
| pageSize | number | no | The number of items to retrieve in each page. Default value is 10. |  



A slideshow is a group of images, videos or a combination of both that are shown on the website in the form of slides. Use this API to fetch a list of slideshows.

*Returned Response:*




[SlideshowGetResponse](#SlideshowGetResponse)

Success. Refer `SlideshowGetResponse` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "items": [
      {
        "date_meta": {
          "created_on": "2021-03-14T05:27:12.319Z",
          "modified_on": "2021-03-14T05:27:12.319Z"
        },
        "archived": false,
        "_id": "604d9eb975e9d136bb1b8b83",
        "configuration": {
          "start_on_launch": false,
          "duration": 50,
          "sleep_time": 100,
          "slide_direction": "horizontal"
        },
        "slug": "ss-sfsd-updated",
        "platform": "ios",
        "media": [
          {
            "auto_decide_duration": false,
            "type": "image",
            "url": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1567148153/production/system/icons/brands-tab_sfinpk.png",
            "bg_color": "#ffffff",
            "duration": 10,
            "action": {
              "type": ""
            }
          },
          {
            "auto_decide_duration": true,
            "type": "youtube",
            "url": "https://www.youtube.com/embed/9vJRopau0g0",
            "bg_color": "#ffffff",
            "duration": 909,
            "action": {
              "type": ""
            }
          }
        ],
        "application": "5cd3db5e9d692cfe5302a7bb",
        "active": true,
        "__v": 0
      }
    ],
    "page": {
      "type": "number",
      "current": 1,
      "size": 1,
      "item_total": 2,
      "has_next": true
    }
  }
}
```
</details>

</details>









---


### createSlideshow
Create a slideshow



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.createSlideshow({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.createSlideshow({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [SlideshowRequest](#SlideshowRequest) | yes | Request body |


A slideshow is a group of images, videos or a combination of both that are shown on the website in the form of slides. Use this API to create a slideshow.

*Returned Response:*




[SlideshowSchema](#SlideshowSchema)

Success. Refer `SlideshowSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "date_meta": {
      "created_on": "2021-03-14T05:27:12.319Z",
      "modified_on": "2021-03-14T05:27:12.319Z"
    },
    "archived": false,
    "_id": "604d9eb975e9d136bb1b8b83",
    "configuration": {
      "start_on_launch": false,
      "duration": 50,
      "sleep_time": 100,
      "slide_direction": "horizontal"
    },
    "slug": "ss-sfsd-updated",
    "platform": "ios",
    "media": [
      {
        "auto_decide_duration": false,
        "type": "image",
        "url": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1567148153/production/system/icons/brands-tab_sfinpk.png",
        "bg_color": "#ffffff",
        "duration": 10,
        "action": {
          "type": ""
        }
      },
      {
        "auto_decide_duration": true,
        "type": "youtube",
        "url": "https://www.youtube.com/embed/9vJRopau0g0",
        "bg_color": "#ffffff",
        "duration": 909,
        "action": {
          "type": ""
        }
      }
    ],
    "application": "5cd3db5e9d692cfe5302a7bb",
    "active": true
  }
}
```
</details>

</details>









---


### getSlideshowBySlug
Get slideshow by slug



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.getSlideshowBySlug({  slug : value,
 devicePlatform : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.getSlideshowBySlug({  slug : value,
 devicePlatform : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| slug | string | yes | A short, human-readable, URL-friendly identifier of a slideshow. You can get slug value of a page from `getSlideshows` API. |   
| devicePlatform | string | yes | Filter slideshows by platform. Acceptable values are: web, android, ios and all |  



Use this API to retrieve the details of a slideshow by its slug.

*Returned Response:*




[SlideshowSchema](#SlideshowSchema)

Success. Refer `SlideshowSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "date_meta": {
      "created_on": "2021-03-14T05:27:12.319Z",
      "modified_on": "2021-03-14T05:27:12.319Z"
    },
    "archived": false,
    "_id": "604d9eb975e9d136bb1b8b83",
    "configuration": {
      "start_on_launch": false,
      "duration": 50,
      "sleep_time": 100,
      "slide_direction": "horizontal"
    },
    "slug": "ss-sfsd-updated",
    "platform": "ios",
    "media": [
      {
        "auto_decide_duration": false,
        "type": "image",
        "url": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1567148153/production/system/icons/brands-tab_sfinpk.png",
        "bg_color": "#ffffff",
        "duration": 10,
        "action": {
          "type": ""
        }
      },
      {
        "auto_decide_duration": true,
        "type": "youtube",
        "url": "https://www.youtube.com/embed/9vJRopau0g0",
        "bg_color": "#ffffff",
        "duration": 909,
        "action": {
          "type": ""
        }
      }
    ],
    "application": "5cd3db5e9d692cfe5302a7bb",
    "active": true
  }
}
```
</details>

</details>









---


### updateSlideshow
Update a slideshow



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.updateSlideshow({  id : value,
 body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.updateSlideshow({  id : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | ID allotted to the slideshow. |  
| body | [SlideshowRequest](#SlideshowRequest) | yes | Request body |


Use this API to edit the details of an existing slideshow.

*Returned Response:*




[SlideshowSchema](#SlideshowSchema)

Success. Refer `SlideshowSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "date_meta": {
      "created_on": "2021-03-14T05:27:12.319Z",
      "modified_on": "2021-03-14T05:27:12.319Z"
    },
    "archived": false,
    "_id": "604d9eb975e9d136bb1b8b83",
    "configuration": {
      "start_on_launch": false,
      "duration": 50,
      "sleep_time": 100,
      "slide_direction": "horizontal"
    },
    "slug": "ss-sfsd-updated",
    "platform": "ios",
    "media": [
      {
        "auto_decide_duration": false,
        "type": "image",
        "url": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1567148153/production/system/icons/brands-tab_sfinpk.png",
        "bg_color": "#ffffff",
        "duration": 10,
        "action": {
          "type": ""
        }
      },
      {
        "auto_decide_duration": true,
        "type": "youtube",
        "url": "https://www.youtube.com/embed/9vJRopau0g0",
        "bg_color": "#ffffff",
        "duration": 909,
        "action": {
          "type": ""
        }
      }
    ],
    "application": "5cd3db5e9d692cfe5302a7bb",
    "active": true
  }
}
```
</details>

</details>









---


### deleteSlideshow
Delete a slideshow



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.deleteSlideshow({  id : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.deleteSlideshow({  id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | ID allotted to the slideshow. |  



Use this API to delete an existing slideshow.

*Returned Response:*




[SlideshowSchema](#SlideshowSchema)

Success.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "date_meta": {
      "created_on": "2021-03-14T05:27:12.319Z",
      "modified_on": "2021-03-14T05:27:12.319Z"
    },
    "archived": true,
    "_id": "604d9eb975e9d136bb1b8b83",
    "configuration": {
      "start_on_launch": false,
      "duration": 50,
      "sleep_time": 100,
      "slide_direction": "horizontal"
    },
    "slug": "ss-sfsd-updated",
    "platform": "ios",
    "media": [
      {
        "auto_decide_duration": false,
        "type": "image",
        "url": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1567148153/production/system/icons/brands-tab_sfinpk.png",
        "bg_color": "#ffffff",
        "duration": 10,
        "action": {
          "type": ""
        }
      },
      {
        "auto_decide_duration": true,
        "type": "youtube",
        "url": "https://www.youtube.com/embed/9vJRopau0g0",
        "bg_color": "#ffffff",
        "duration": 909,
        "action": {
          "type": ""
        }
      }
    ],
    "application": "5cd3db5e9d692cfe5302a7bb",
    "active": true
  }
}
```
</details>

</details>









---


### getSupportInformation
Get support information



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.getSupportInformation();

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.getSupportInformation();
```






Use this API to get the contact details for customer support, including emails and phone numbers.

*Returned Response:*




[Support](#Support)

Success. Refer `Support` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "_id": "5ea4980b87a7944094216193",
    "config_type": "app",
    "application": "000000000000000000000001",
    "created_at": "2020-04-25T20:05:31.300Z",
    "updated_at": "2020-12-04T10:48:12.194Z",
    "contact": {
      "phone": {
        "active": true,
        "phone": [
          {
            "key": "Jane Doe",
            "code": "91",
            "number": "9988776655"
          }
        ]
      },
      "email": {
        "active": false,
        "email": []
      }
    },
    "created": true
  }
}
```
</details>

</details>









---


### updateSupportInformation
Update the support data of an application



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.updateSupportInformation({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.updateSupportInformation({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [Support](#Support) | yes | Request body |


Use this API to edit the existing contact details for customer support, including emails and phone numbers.

*Returned Response:*




[Support](#Support)

Success. Refer `Support` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "_id": "5ea4980b87a7944094216193",
    "config_type": "app",
    "application": "000000000000000000000001",
    "created_at": "2020-04-25T20:05:31.300Z",
    "updated_at": "2020-12-04T10:48:12.194Z",
    "contact": {
      "phone": {
        "active": true,
        "phone": [
          {
            "key": "Jane Doe",
            "code": "91",
            "number": "9988776655"
          }
        ]
      },
      "email": {
        "active": false,
        "email": []
      }
    },
    "created": true
  }
}
```
</details>

</details>









---


### updateInjectableTag
Update a tag



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.updateInjectableTag({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.updateInjectableTag({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CreateTagRequestSchema](#CreateTagRequestSchema) | yes | Request body |


Use this API to edit the details of an existing tag. This includes the tag name, tag type (css/js), url and position of the tag.

*Returned Response:*




[TagsSchema](#TagsSchema)

Success.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "_id": "601f77e7aa61066feda44487",
  "tags": [
    {
      "name": "Test",
      "sub_type": "external",
      "_id": "601f77e7aa61066feda44488",
      "type": "js",
      "url": "youtube.com/watch?v=AaxFIY-cWH0&list=PL3O3jhFJEElBHFbs6XsOqZAWZLtlEkZTw&index=31",
      "position": "head"
    },
    {
      "name": "Test 2",
      "sub_type": "external",
      "_id": "601f77e7aa61066feda44489",
      "type": "js",
      "url": "youtube.com/watch?v=AaxFIY-cWH0&list=PL3O3jhFJEElBHFbs6XsOqZAWZLtlEkZTw&index=31",
      "position": "head"
    }
  ],
  "application": "000000000000000000000001",
  "__v": 0
}
```
</details>









---


### deleteAllInjectableTags
Delete tags in application



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.deleteAllInjectableTags();

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.deleteAllInjectableTags();
```






Use this API to delete all the existing tags at once.

*Returned Response:*




[TagsSchema](#TagsSchema)

Success.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "_id": "601f77e7aa61066feda44487",
  "tags": [
    {
      "name": "Test",
      "sub_type": "external",
      "_id": "601f77e7aa61066feda44488",
      "type": "js",
      "url": "youtube.com/watch?v=AaxFIY-cWH0&list=PL3O3jhFJEElBHFbs6XsOqZAWZLtlEkZTw&index=31",
      "position": "head"
    },
    {
      "name": "Test 2",
      "sub_type": "external",
      "_id": "601f77e7aa61066feda44489",
      "type": "js",
      "url": "youtube.com/watch?v=AaxFIY-cWH0&list=PL3O3jhFJEElBHFbs6XsOqZAWZLtlEkZTw&index=31",
      "position": "head"
    }
  ],
  "application": "000000000000000000000001",
  "__v": 0
}
```
</details>









---


### getInjectableTags
Get all the tags in an application



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.getInjectableTags();

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.getInjectableTags();
```






Use this API to get all the CSS and JS injected in the application in the form of tags.

*Returned Response:*




[TagsSchema](#TagsSchema)

Success. Refer `TagsSchema` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "_id": "601f77e7aa61066feda44487",
  "tags": [
    {
      "name": "Test",
      "sub_type": "external",
      "_id": "601f77e7aa61066feda44488",
      "type": "js",
      "url": "youtube.com/watch?v=AaxFIY-cWH0&list=PL3O3jhFJEElBHFbs6XsOqZAWZLtlEkZTw&index=31",
      "position": "head"
    },
    {
      "name": "Test 2",
      "sub_type": "external",
      "_id": "601f77e7aa61066feda44489",
      "type": "js",
      "url": "youtube.com/watch?v=AaxFIY-cWH0&list=PL3O3jhFJEElBHFbs6XsOqZAWZLtlEkZTw&index=31",
      "position": "head"
    }
  ],
  "application": "000000000000000000000001",
  "__v": 0
}
```
</details>









---


### addInjectableTag
Add a tag



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.addInjectableTag({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.addInjectableTag({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CreateTagRequestSchema](#CreateTagRequestSchema) | yes | Request body |


CSS and JS can be injected in the application (website) with the help of tags. Use this API to create such tags by entering the tag name, tag type (css/js), url and position of the tag.

*Returned Response:*




[TagsSchema](#TagsSchema)

Success.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "_id": "601f77e7aa61066feda44487",
  "tags": [
    {
      "name": "Test",
      "sub_type": "external",
      "_id": "601f77e7aa61066feda44488",
      "type": "js",
      "url": "youtube.com/watch?v=AaxFIY-cWH0&list=PL3O3jhFJEElBHFbs6XsOqZAWZLtlEkZTw&index=31",
      "position": "head"
    }
  ],
  "application": "000000000000000000000001",
  "__v": 0
}
```
</details>









---


### removeInjectableTag
Remove a tag



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.removeInjectableTag({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.removeInjectableTag({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [RemoveHandpickedSchema](#RemoveHandpickedSchema) | yes | Request body |


Use this API to delete an existing tag.

*Returned Response:*




[TagDeleteSuccessResponse](#TagDeleteSuccessResponse)

Success.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": "true"
}
```
</details>









---


### editInjectableTag
Edit a tag by id



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.editInjectableTag({  tagId : value,
 body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.editInjectableTag({  tagId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| tagId | string | yes | ID allotted to the tag. |  
| body | [UpdateHandpickedSchema](#UpdateHandpickedSchema) | yes | Request body |


Use this API to edit the details of an existing tag by its ID.

*Returned Response:*




[TagsSchema](#TagsSchema)

Success.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "_id": "602671b3c0bac99158b10874",
  "application": "000000000000000000000001",
  "tags": [
    {
      "_id": "601f77e7aa61066feda44488",
      "name": "floating whatsapp",
      "sub_type": "inline",
      "type": "css",
      "position": "head",
      "content": ".float{\n\tposition:fixed;\n\twidth:60px;\n\theight:60px;\n\tbottom:40px;\n\tright:40px;\n\tbackground-color:#25d366;\n\tcolor:#FFF;\n\tborder-radius:50px;\n\ttext-align:center;\n  font-size:30px;\n\tbox-shadow: 2px 2px 3px #999;\n  z-index:100;\n}\n\n.my-float{\n\tmargin-top:16px;\n}"
    }
  ],
  "__v": 1
}
```
</details>









---


### createPage
Create a page



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.createPage({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.createPage({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [PageRequest](#PageRequest) | yes | Request body |


Use this API to create a custom page using a title, seo, publish status, feature image, tags, meta, etc.

*Returned Response:*




[PageSchema](#PageSchema)

Success. Refer `PageSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "date_meta": {
      "created_on": "2021-03-16T08:24:19.197Z",
      "modified_on": "2021-03-16T08:24:19.197Z"
    },
    "tags": [
      "my first page"
    ],
    "published": true,
    "component_ids": [],
    "archived": false,
    "_id": "60506dcad18cb33946026862",
    "title": "my first page",
    "slug": "1st_page",
    "feature_image": {
      "secure_url": "https://google.com/some-image"
    },
    "content": [
      {
        "type": "html",
        "value": "<div id=\"icfm\">Emtpy Page. Create Page here.</div><div id=\"izu5\" class=\"aa\">hello there!<div id=\"izzl\">how are you doing</div><div><br/></div></div><img id=\"ibgj\" src=\"https://hdn-1.addsale.com/x0/company/52/applications/614957b7e7a0ccc371e96094/pages/pictures/free-content/original/-zLi_CuyM-apple.jpeg\"/>"
      },
      {
        "type": "css",
        "value": "* { box-sizing: border-box; } body {margin: 0;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#icfm{text-align:center;padding-top:30px;padding-right:30px;padding-bottom:30px;padding-left:30px;}#izu5{padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;}#ibgj{color:black;}#izzl{float:none;display:flex;}.aa{float:right;}"
      },
      {
        "type": "js",
        "value": ""
      }
    ],
    "content_path": "https://hdn-1.fynd.com/company/1526/applications/61012f6a9250ccd1b9ef8a1d/pages/content/page_slug.html",
    "platform": "web",
    "description": "hey this is my first page",
    "visibility": {
      "test": true
    },
    "_schedule": {
      "start": "2021-04-23T23:50:00.000Z",
      "next_schedule": [
        {}
      ]
    },
    "seo": {
      "title": "my first page",
      "description": "hey this is my first page",
      "image": {
        "url": ""
      }
    },
    "type": "rawhtml",
    "application": "000000000000000000000001",
    "orientation": "portrait",
    "page_meta": []
  }
}
```
</details>

</details>









---


### getPages
Get a list of pages



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.getPages({  pageNo : value,
 pageSize : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.getPages({  pageNo : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNo | number | no | The page number to navigate through the given set of results. Default value is 1. |    
| pageSize | number | no | The number of items to retrieve in each page. Default value is 10. |  



Use this API to retrieve a list of pages.

*Returned Response:*




[PageGetResponse](#PageGetResponse)

Success. Refer `PageGetResponse` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "items": [
      {
        "date_meta": {
          "created_on": "2021-03-14T06:49:03.945Z",
          "modified_on": "2021-03-14T06:49:03.945Z"
        },
        "tags": [
          "my first page"
        ],
        "_id": "604db275b3ae202873964d94",
        "content_path": "https://hdn-1.fynd.com/company/1526/applications/61012f6a9250ccd1b9ef8a1d/pages/content/page_slug.html",
        "title": "test-page",
        "slug": "test-page",
        "published": true,
        "_schedule": {
          "next_schedule": [
            {}
          ],
          "start": "2021-04-08T07:15:13.000Z",
          "end": "2021-04-10T02:00:00.000Z"
        },
        "feature_image": {
          "secure_url": "https://google.com/some-image"
        },
        "seo": {
          "title": "my first page",
          "description": "hey this is my first page",
          "image": {
            "url": ""
          }
        },
        "application": "000000000000000000000001",
        "author": {
          "name": "Abhinav Maurya"
        }
      }
    ],
    "page": {
      "type": "number",
      "current": 1,
      "size": 1,
      "item_total": 2,
      "has_next": true
    }
  }
}
```
</details>

</details>









---


### updatePage
Update a page



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.updatePage({  id : value,
 body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.updatePage({  id : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| id | string | yes | ID allotted to the page. |  
| body | [PageSchema](#PageSchema) | yes | Request body |


Use this API to edit the details of an existing page, such as its title, seo, publish status, feature image, tags, schedule, etc.

*Returned Response:*




[PageSchema](#PageSchema)

Success. Refer `PageSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "date_meta": {
      "created_on": "2021-03-16T08:24:19.197Z",
      "modified_on": "2021-03-16T08:24:19.197Z"
    },
    "tags": [
      "my first page"
    ],
    "published": true,
    "component_ids": [],
    "archived": false,
    "_id": "60506dcad18cb33946026862",
    "title": "my first page",
    "slug": "1st_page",
    "feature_image": {
      "secure_url": "https://google.com/some-image"
    },
    "content": [
      {
        "type": "html",
        "value": "<div id=\"icfm\">Emtpy Page. Create Page here.</div><div id=\"izu5\" class=\"aa\">hello there!<div id=\"izzl\">how are you doing</div><div><br/></div></div><img id=\"ibgj\" src=\"https://hdn-1.addsale.com/x0/company/52/applications/614957b7e7a0ccc371e96094/pages/pictures/free-content/original/-zLi_CuyM-apple.jpeg\"/>"
      },
      {
        "type": "css",
        "value": "* { box-sizing: border-box; } body {margin: 0;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#icfm{text-align:center;padding-top:30px;padding-right:30px;padding-bottom:30px;padding-left:30px;}#izu5{padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;}#ibgj{color:black;}#izzl{float:none;display:flex;}.aa{float:right;}"
      },
      {
        "type": "js",
        "value": ""
      }
    ],
    "content_path": "https://hdn-1.fynd.com/company/1526/applications/61012f6a9250ccd1b9ef8a1d/pages/content/page_slug.html",
    "platform": "web",
    "description": "hey this is my first page",
    "visibility": {
      "test": true
    },
    "_schedule": {
      "start": "2021-04-23T23:50:00.000Z",
      "next_schedule": [
        {}
      ]
    },
    "seo": {
      "title": "my first page",
      "description": "hey this is my first page",
      "image": {
        "url": ""
      }
    },
    "type": "rawhtml",
    "application": "000000000000000000000001",
    "orientation": "portrait",
    "page_meta": []
  }
}
```
</details>

</details>









---


### getPageBySlug
Get pages by component Id



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").content.getPageBySlug({  slug : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").content.getPageBySlug({  slug : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| slug | string | yes | A short, human-readable, URL-friendly identifier of a page. You can get slug value of a page from `getPages` API. |  



Use this API to retrieve the components of a page, such as its title, seo, publish status, feature image, tags, schedule, etc.

*Returned Response:*




[PageSchema](#PageSchema)

Success. Returns a JSON object of components. Refer `PageSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "date_meta": {
      "created_on": "2021-03-16T08:24:19.197Z",
      "modified_on": "2021-03-16T08:24:19.197Z"
    },
    "tags": [
      "my first page"
    ],
    "published": true,
    "component_ids": [],
    "archived": false,
    "_id": "60506dcad18cb33946026862",
    "title": "my first page",
    "slug": "1st_page",
    "feature_image": {
      "secure_url": "https://google.com/some-image"
    },
    "content": [
      {
        "type": "html",
        "value": "<div id=\"icfm\">Emtpy Page. Create Page here.</div><div id=\"izu5\" class=\"aa\">hello there!<div id=\"izzl\">how are you doing</div><div><br/></div></div><img id=\"ibgj\" src=\"https://hdn-1.addsale.com/x0/company/52/applications/614957b7e7a0ccc371e96094/pages/pictures/free-content/original/-zLi_CuyM-apple.jpeg\"/>"
      },
      {
        "type": "css",
        "value": "* { box-sizing: border-box; } body {margin: 0;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#icfm{text-align:center;padding-top:30px;padding-right:30px;padding-bottom:30px;padding-left:30px;}#izu5{padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;}#ibgj{color:black;}#izzl{float:none;display:flex;}.aa{float:right;}"
      },
      {
        "type": "js",
        "value": ""
      }
    ],
    "content_path": "https://hdn-1.fynd.com/company/1526/applications/61012f6a9250ccd1b9ef8a1d/pages/content/page_slug.html",
    "platform": "web",
    "description": "hey this is my first page",
    "visibility": {
      "test": true
    },
    "_schedule": {
      "start": "2021-04-23T23:50:00.000Z",
      "next_schedule": [
        {}
      ]
    },
    "seo": {
      "title": "my first page",
      "description": "hey this is my first page",
      "image": {
        "url": ""
      }
    },
    "type": "rawhtml",
    "application": "000000000000000000000001",
    "orientation": "portrait",
    "page_meta": []
  }
}
```
</details>

</details>









---



### Schemas

 
 
 #### [ApplicationLegal](#ApplicationLegal)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application | string |  no  |  |
 | tnc | string |  no  |  |
 | policy | string |  no  |  |
 | shipping | string |  no  |  |
 | faq | [[ApplicationLegalFAQ](#ApplicationLegalFAQ)] |  no  |  |
 | _id | string |  no  |  |
 | updated_at | string |  no  |  |
 | created_at | string |  no  |  |

---


 
 
 #### [ApplicationLegalFAQ](#ApplicationLegalFAQ)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | question | string |  no  |  |
 | answer | string |  no  |  |

---


 
 
 #### [PathMappingSchema](#PathMappingSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application | string |  no  |  |
 | redirections | [[RedirectionSchema](#RedirectionSchema)] |  no  |  |
 | _id | string |  no  |  |
 | updated_at | string |  no  |  |
 | created_at | string |  no  |  |

---


 
 
 #### [RedirectionSchema](#RedirectionSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | redirect_from | string |  no  |  |
 | redirect_to | string |  no  |  |

---


 
 
 #### [SeoComponent](#SeoComponent)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | seo | [SeoSchema](#SeoSchema) |  no  |  |

---


 
 
 #### [SeoSchema](#SeoSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | app | string |  no  |  |
 | _id | string |  no  |  |
 | robots_txt | string |  no  |  |
 | sitemap_enabled | boolean |  no  |  |
 | custom_meta_tags | [[CustomMetaTag](#CustomMetaTag)] |  no  |  |
 | details | [Detail](#Detail) |  no  |  |
 | created_at | string |  no  |  |
 | updated_at | string |  no  |  |

---


 
 
 #### [CustomMetaTag](#CustomMetaTag)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | content | string |  no  |  |
 | _id | string |  no  |  |

---


 
 
 #### [Detail](#Detail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | title | string |  no  |  |
 | description | string |  no  |  |

---


 
 
 #### [AnnouncementPageSchema](#AnnouncementPageSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | page_slug | string |  no  |  |
 | type | string |  no  |  |

---


 
 
 #### [EditorMeta](#EditorMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | foreground_color | string |  no  |  |
 | background_color | string |  no  |  |
 | content_type | string |  no  |  |
 | content | string |  no  |  |

---


 
 
 #### [AnnouncementAuthorSchema](#AnnouncementAuthorSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | created_by | string |  no  |  |
 | modified_by | string |  no  |  |

---


 
 
 #### [AdminAnnouncementSchema](#AdminAnnouncementSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | platforms | [string] |  no  |  |
 | title | string |  no  |  |
 | announcement | string |  no  |  |
 | pages | [[AnnouncementPageSchema](#AnnouncementPageSchema)] |  no  |  |
 | editor_meta | [EditorMeta](#EditorMeta) |  no  |  |
 | author | [AnnouncementAuthorSchema](#AnnouncementAuthorSchema) |  no  |  |
 | created_at | string |  no  |  |
 | app | string |  no  |  |
 | modified_at | string |  no  |  |
 | _schedule | [ScheduleSchema](#ScheduleSchema) |  no  |  |

---


 
 
 #### [ScheduleSchema](#ScheduleSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cron | string |  no  |  |
 | start | string |  no  |  |
 | end | string |  no  |  |
 | duration | number |  no  |  |
 | next_schedule | [[NextSchedule](#NextSchedule)] |  no  |  |

---


 
 
 #### [NextSchedule](#NextSchedule)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | start | string |  no  |  |
 | end | string |  no  |  |

---


 
 
 #### [AnnouncementSchema](#AnnouncementSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | announcement | string |  no  |  |
 | schedule | [ScheduleStartSchema](#ScheduleStartSchema) |  no  |  |

---


 
 
 #### [ScheduleStartSchema](#ScheduleStartSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | start | string |  no  |  |
 | end | string |  no  |  |

---


 
 
 #### [BlogGetResponse](#BlogGetResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[BlogSchema](#BlogSchema)] |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [ResourceContent](#ResourceContent)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  no  |  |
 | value | string |  no  |  |

---


 
 
 #### [Asset](#Asset)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | aspect_ratio | string |  no  |  |
 | id | string |  no  |  |
 | secure_url | string |  no  |  |

---


 
 
 #### [Author](#Author)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | designation | string |  no  |  |
 | id | string |  no  |  |
 | name | string |  no  |  |

---


 
 
 #### [BlogSchema](#BlogSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | _custom_json | string |  no  |  |
 | application | string |  no  |  |
 | archived | boolean |  no  |  |
 | author | [Author](#Author) |  no  |  |
 | content | [[ResourceContent](#ResourceContent)] |  no  |  |
 | feature_image | [Asset](#Asset) |  no  |  |
 | published | boolean |  no  |  |
 | reading_time | string |  no  |  |
 | slug | string |  no  |  |
 | tags | [string] |  no  |  |
 | seo | [SEO](#SEO) |  no  |  |
 | _schedule | [CronSchedule](#CronSchedule) |  no  |  |
 | title | string |  no  |  |
 | date_meta | [DateMeta](#DateMeta) |  no  |  |

---


 
 
 #### [SEO](#SEO)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string |  no  |  |
 | image | [SEOImage](#SEOImage) |  no  |  |
 | title | string |  no  |  |

---


 
 
 #### [SEOImage](#SEOImage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | url | string |  no  |  |

---


 
 
 #### [DateMeta](#DateMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | created_on | string |  no  |  |
 | modified_on | string |  no  |  |

---


 
 
 #### [BlogRequest](#BlogRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application | string |  no  |  |
 | _custom_json | string |  no  |  |
 | author | [Author](#Author) |  no  |  |
 | content | [[ResourceContent](#ResourceContent)] |  no  |  |
 | feature_image | [Asset](#Asset) |  no  |  |
 | published | boolean |  no  |  |
 | reading_time | string |  no  |  |
 | slug | string |  no  |  |
 | tags | [string] |  no  |  |
 | title | string |  no  |  |
 | seo | [SEO](#SEO) |  no  |  |
 | _schedule | [CronSchedule](#CronSchedule) |  no  |  |

---


 
 
 #### [GetAnnouncementListSchema](#GetAnnouncementListSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[AdminAnnouncementSchema](#AdminAnnouncementSchema)] |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [CreateAnnouncementSchema](#CreateAnnouncementSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 | data | [AdminAnnouncementSchema](#AdminAnnouncementSchema) |  no  |  |

---


 
 
 #### [DataLoaderResponseSchema](#DataLoaderResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application | string |  no  |  |
 | company | string |  no  |  |
 | _id | string |  no  |  |
 | name | string |  no  |  |
 | service | string |  no  |  |
 | operation_id | string |  no  |  |
 | type | string |  no  |  |
 | url | string |  no  |  |
 | content | string |  no  |  |
 | __source | [DataLoaderSourceSchema](#DataLoaderSourceSchema) |  no  |  |

---


 
 
 #### [DataLoaderResetResponseSchema](#DataLoaderResetResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | reset | string |  no  |  |

---


 
 
 #### [Navigation](#Navigation)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | slug | string |  no  |  |
 | orientation | string |  no  |  |
 | created_by | [CreatedBySchema](#CreatedBySchema) |  no  |  |
 | date_meta | [DateMeta](#DateMeta) |  no  |  |
 | _id | string |  no  |  |
 | position | string |  no  |  |
 | application | string |  no  |  |
 | platform | string |  no  |  |
 | navigation | [NavigationReference](#NavigationReference) |  no  |  |

---


 
 
 #### [LocaleLanguage](#LocaleLanguage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | hi | [Language](#Language) |  no  |  |
 | ar | [Language](#Language) |  no  |  |
 | en_us | [Language](#Language) |  no  |  |

---


 
 
 #### [Language](#Language)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display | string |  no  |  |

---


 
 
 #### [Action](#Action)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | page | [ActionPage](#ActionPage) |  no  |  |
 | popup | [ActionPage](#ActionPage) |  no  |  |
 | type | string |  no  |  |

---


 
 
 #### [ActionPage](#ActionPage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | params | [String: [string]] |  no  |  |
 | query | [String: [string]] |  no  |  |
 | url | string |  no  |  |
 | type | string |  no  |  |

---


 
 
 #### [NavigationReference](#NavigationReference)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | acl | [string] |  no  |  |
 | tags | [string] |  no  |  |
 | _locale_language | [LocaleLanguage](#LocaleLanguage) |  no  |  |
 | image | string |  no  |  |
 | type | string |  no  |  |
 | action | [Action](#Action) |  no  |  |
 | active | boolean |  no  |  |
 | display | string |  no  |  |
 | sort_order | number |  no  |  |
 | sub_navigation | [[NavigationReference](#NavigationReference)] |  no  |  |

---


 
 
 #### [LandingPage](#LandingPage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [LandingPageSchema](#LandingPageSchema) |  no  |  |
 | success | boolean |  no  |  |

---


 
 
 #### [ConfigurationSchema](#ConfigurationSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | sleep_time | number |  no  |  |
 | start_on_launch | boolean |  no  |  |
 | duration | number |  no  |  |
 | slide_direction | string |  no  |  |

---


 
 
 #### [SlideshowMedia](#SlideshowMedia)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  no  |  |
 | url | string |  no  |  |
 | bg_color | string |  no  |  |
 | duration | number |  no  |  |
 | auto_decide_duration | boolean |  no  |  |
 | action | [Action](#Action) |  no  |  |

---


 
 
 #### [Slideshow](#Slideshow)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [SlideshowSchema](#SlideshowSchema) |  no  |  |
 | success | boolean |  no  |  |

---


 
 
 #### [AnnouncementsResponseSchema](#AnnouncementsResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | announcements | [String: [[AnnouncementSchema](#AnnouncementSchema)]] |  no  |  |
 | refresh_rate | number |  no  | number of seconds after which api should hit again to fetch new announcements |
 | refresh_pages | [string] |  no  | list of page slugs on which announcement should be fetched as soon as they are loaded |

---


 
 
 #### [FaqResponseSchema](#FaqResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | faqs | [[FaqSchema](#FaqSchema)] |  no  |  |

---


 
 
 #### [UpdateHandpickedSchema](#UpdateHandpickedSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | tag | [HandpickedTagSchema](#HandpickedTagSchema) |  no  |  |

---


 
 
 #### [HandpickedTagSchema](#HandpickedTagSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | position | string |  no  |  |
 | attributes | string |  no  |  |
 | name | string |  no  |  |
 | url | string |  no  |  |
 | type | string |  no  |  |
 | sub_type | string |  no  |  |
 | content | string |  no  |  |

---


 
 
 #### [RemoveHandpickedSchema](#RemoveHandpickedSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | tags | [string] |  no  |  |

---


 
 
 #### [CreateTagSchema](#CreateTagSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | sub_type | string |  no  |  |
 | _id | string |  no  |  |
 | type | string |  no  |  |
 | url | string |  no  |  |
 | position | string |  no  |  |
 | attributes | string |  no  |  |
 | content | string |  no  |  |

---


 
 
 #### [CreateTagRequestSchema](#CreateTagRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | tags | [[CreateTagSchema](#CreateTagSchema)] |  no  |  |

---


 
 
 #### [DataLoaderSchema](#DataLoaderSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | service | string |  no  |  |
 | operation_id | string |  no  |  |
 | type | string |  no  |  |
 | url | string |  no  |  |
 | content | string |  no  |  |
 | __source | [DataLoaderSourceSchema](#DataLoaderSourceSchema) |  no  |  |

---


 
 
 #### [DataLoaderSourceSchema](#DataLoaderSourceSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  no  |  |
 | id | string |  no  |  |

---


 
 
 #### [TagDeleteSuccessResponse](#TagDeleteSuccessResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  |  |

---


 
 
 #### [ContentAPIError](#ContentAPIError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |
 | status | number |  no  |  |
 | code | string |  no  |  |
 | exception | string |  no  |  |
 | info | string |  no  |  |
 | request_id | string |  no  |  |
 | stack_trace | string |  no  |  |
 | meta | string |  no  |  |

---


 
 
 #### [CategorySchema](#CategorySchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | index | number |  no  |  |
 | title | string |  no  |  |
 | description | string |  no  |  |
 | children | [string] |  no  |  |
 | _id | string |  no  |  |
 | slug | string |  no  |  |
 | application | string |  no  |  |
 | icon_url | string |  no  |  |
 | _custom_json | string |  no  |  |

---


 
 
 #### [ChildrenSchema](#ChildrenSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | question | string |  no  |  |
 | answer | string |  no  |  |
 | slug | string |  no  |  |
 | application | string |  no  |  |
 | _id | string |  no  |  |

---


 
 
 #### [CategoryRequestSchema](#CategoryRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | slug | string |  no  |  |
 | title | string |  no  |  |

---


 
 
 #### [FAQCategorySchema](#FAQCategorySchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | index | number |  no  |  |
 | title | string |  no  |  |
 | description | string |  no  |  |
 | children | [[ChildrenSchema](#ChildrenSchema)] |  no  |  |
 | _id | string |  no  |  |
 | slug | string |  no  |  |
 | application | string |  no  |  |
 | icon_url | string |  no  |  |
 | _custom_json | string |  no  |  |

---


 
 
 #### [FaqSchema](#FaqSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | slug | string |  no  |  |
 | application | string |  no  |  |
 | _id | string |  no  |  |
 | question | string |  no  |  |
 | answer | string |  no  |  |

---


 
 
 #### [FAQ](#FAQ)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | slug | string |  no  |  |
 | question | string |  no  |  |
 | answer | string |  no  |  |

---


 
 
 #### [CreateFaqResponseSchema](#CreateFaqResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | faq | [FaqSchema](#FaqSchema) |  no  |  |

---


 
 
 #### [CreateFaqSchema](#CreateFaqSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | faq | [FAQ](#FAQ) |  no  |  |

---


 
 
 #### [GetFaqSchema](#GetFaqSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | faqs | [[FaqSchema](#FaqSchema)] |  no  |  |

---


 
 
 #### [UpdateFaqCategoryRequestSchema](#UpdateFaqCategoryRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | category | [CategorySchema](#CategorySchema) |  no  |  |

---


 
 
 #### [CreateFaqCategoryRequestSchema](#CreateFaqCategoryRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | category | [CategoryRequestSchema](#CategoryRequestSchema) |  no  |  |

---


 
 
 #### [CreateFaqCategorySchema](#CreateFaqCategorySchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | category | [CategorySchema](#CategorySchema) |  no  |  |

---


 
 
 #### [GetFaqCategoriesSchema](#GetFaqCategoriesSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | categories | [[CategorySchema](#CategorySchema)] |  no  |  |

---


 
 
 #### [GetFaqCategoryBySlugSchema](#GetFaqCategoryBySlugSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | category | [FAQCategorySchema](#FAQCategorySchema) |  no  |  |

---


 
 
 #### [Page](#Page)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | item_total | number |  no  |  |
 | next_id | string |  no  |  |
 | has_previous | boolean |  no  |  |
 | has_next | boolean |  no  |  |
 | current | number |  no  |  |
 | type | string |  yes  |  |
 | size | number |  no  |  |

---


 
 
 #### [LandingPageGetResponse](#LandingPageGetResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[LandingPageSchema](#LandingPageSchema)] |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [LandingPageSchema](#LandingPageSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | slug | string |  no  |  |
 | action | [Action](#Action) |  no  |  |
 | platform | [string] |  no  |  |
 | created_by | [CreatedBySchema](#CreatedBySchema) |  no  |  |
 | date_meta | [DateMeta](#DateMeta) |  no  |  |
 | _id | string |  no  |  |
 | application | string |  no  |  |
 | archived | boolean |  no  |  |
 | _custom_json | string |  no  |  |

---


 
 
 #### [DefaultNavigationResponse](#DefaultNavigationResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[NavigationSchema](#NavigationSchema)] |  no  |  |

---


 
 
 #### [NavigationGetResponse](#NavigationGetResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[NavigationSchema](#NavigationSchema)] |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [Orientation](#Orientation)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | portrait | [string] |  no  |  |
 | landscape | [string] |  no  |  |

---


 
 
 #### [NavigationSchema](#NavigationSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | application | string |  no  |  |
 | archived | boolean |  no  |  |
 | name | string |  no  |  |
 | slug | string |  no  |  |
 | platform | [string] |  no  |  |
 | created_by | [CreatedBySchema](#CreatedBySchema) |  no  |  |
 | date_meta | [DateMeta](#DateMeta) |  no  |  |
 | orientation | [Orientation](#Orientation) |  no  |  |
 | version | number |  no  |  |
 | navigation | [[NavigationReference](#NavigationReference)] |  no  |  |

---


 
 
 #### [NavigationRequest](#NavigationRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | slug | string |  no  |  |
 | platform | [string] |  no  |  |
 | orientation | [Orientation](#Orientation) |  no  |  |
 | navigation | [[NavigationReference](#NavigationReference)] |  no  |  |

---


 
 
 #### [CustomPageSchema](#CustomPageSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | platform | string |  no  |  |
 | title | string |  no  |  |
 | slug | string |  no  |  |
 | type | string |  no  |  |
 | orientation | string |  no  |  |
 | application | string |  no  |  |
 | description | string |  no  |  |
 | published | boolean |  no  |  |
 | tags | [string] |  no  |  |
 | content | [string] |  no  |  |
 | created_by | [CreatedBySchema](#CreatedBySchema) |  no  |  |
 | date_meta | [DateMeta](#DateMeta) |  no  |  |
 | _schedule | [ScheduleSchema](#ScheduleSchema) |  no  |  |

---


 
 
 #### [ContentSchema](#ContentSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  no  |  |
 | value | string |  no  |  |

---


 
 
 #### [CustomPage](#CustomPage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [CustomPageSchema](#CustomPageSchema) |  no  |  |

---


 
 
 #### [FeatureImage](#FeatureImage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | secure_url | string |  no  |  |

---


 
 
 #### [PageGetResponse](#PageGetResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[PageSchema](#PageSchema)] |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [PageSpec](#PageSpec)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | specifications | [[PageSpecItem](#PageSpecItem)] |  no  |  |

---


 
 
 #### [PageSpecParam](#PageSpecParam)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | key | string |  no  |  |
 | required | boolean |  no  |  |

---


 
 
 #### [PageSpecItem](#PageSpecItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | page_type | string |  no  |  |
 | display_name | string |  no  |  |
 | params | [[PageSpecParam](#PageSpecParam)] |  no  |  |
 | query | [[PageSpecParam](#PageSpecParam)] |  no  |  |

---


 
 
 #### [PageSchema](#PageSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | application | string |  no  |  |
 | component_ids | [string] |  no  | Components can be used to store multiple components |
 | content | [string] |  no  |  |
 | content_path | string |  no  |  |
 | created_by | [CreatedBySchema](#CreatedBySchema) |  no  |  |
 | date_meta | [DateMeta](#DateMeta) |  no  |  |
 | description | string |  no  |  |
 | feature_image | [Asset](#Asset) |  no  |  |
 | page_meta | [string] |  no  |  |
 | _schedule | [ScheduleSchema](#ScheduleSchema) |  no  |  |
 | _custom_json | string |  no  |  |
 | orientation | string |  no  |  |
 | platform | string |  no  |  |
 | published | boolean |  no  |  |
 | slug | string |  no  |  |
 | tags | [string] |  no  |  |
 | title | string |  no  |  |
 | type | string |  no  |  |
 | seo | [SEO](#SEO) |  no  |  |
 | visibility | string |  no  |  |
 | archived | boolean |  no  |  |

---


 
 
 #### [CreatedBySchema](#CreatedBySchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |

---


 
 
 #### [PageContent](#PageContent)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  no  |  |
 | value | string |  no  |  |

---


 
 
 #### [PageMeta](#PageMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | key | string |  no  |  |
 | value | string |  no  |  |

---


 
 
 #### [PageRequest](#PageRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _schedule | [CronSchedule](#CronSchedule) |  no  |  |
 | application | string |  no  |  |
 | author | [Author](#Author) |  no  |  |
 | _custom_json | string |  no  |  |
 | orientation | string |  no  |  |
 | content | [string] |  no  |  |
 | feature_image | [Asset](#Asset) |  no  |  |
 | published | boolean |  no  |  |
 | reading_time | string |  no  |  |
 | slug | string |  no  |  |
 | tags | [string] |  no  |  |
 | seo | [SEO](#SEO) |  no  |  |
 | title | string |  no  |  |

---


 
 
 #### [CronSchedule](#CronSchedule)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cron | string |  no  |  |
 | start | string |  no  |  |
 | end | string |  no  |  |
 | duration | number |  no  |  |

---


 
 
 #### [PagePublishRequest](#PagePublishRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | publish | boolean |  no  |  |

---


 
 
 #### [PageMetaSchema](#PageMetaSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | system_pages | [[NavigationSchema](#NavigationSchema)] |  no  |  |
 | custom_pages | [[PageSchema](#PageSchema)] |  no  |  |
 | application_id | string |  no  |  |

---


 
 
 #### [SlideshowGetResponse](#SlideshowGetResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[SlideshowSchema](#SlideshowSchema)] |  no  |  |
 | page | [Page](#Page) |  no  |  |

---


 
 
 #### [SlideshowSchema](#SlideshowSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  |  |
 | slug | string |  no  |  |
 | date_meta | [DateMeta](#DateMeta) |  no  |  |
 | application | string |  no  |  |
 | platform | string |  no  |  |
 | configuration | [ConfigurationSchema](#ConfigurationSchema) |  no  |  |
 | media | [[SlideshowMedia](#SlideshowMedia)] |  no  |  |
 | active | boolean |  no  |  |
 | archived | boolean |  no  |  |
 | _custom_json | string |  no  |  |

---


 
 
 #### [SlideshowRequest](#SlideshowRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | slug | string |  no  |  |
 | platform | string |  no  |  |
 | configuration | [ConfigurationSchema](#ConfigurationSchema) |  no  |  |
 | media | [SlideshowMedia](#SlideshowMedia) |  no  |  |
 | active | boolean |  no  |  |

---


 
 
 #### [Support](#Support)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | created | boolean |  no  |  |
 | _id | string |  no  |  |
 | config_type | string |  no  |  |
 | application | string |  no  |  |
 | created_at | string |  no  |  |
 | updated_at | string |  no  |  |
 | contact | [ContactSchema](#ContactSchema) |  no  |  |

---


 
 
 #### [PhoneProperties](#PhoneProperties)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | key | string |  no  |  |
 | code | string |  no  |  |
 | number | string |  no  |  |

---


 
 
 #### [PhoneSchema](#PhoneSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | boolean |  no  |  |
 | phone | [[PhoneProperties](#PhoneProperties)] |  no  |  |

---


 
 
 #### [EmailProperties](#EmailProperties)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | key | string |  no  |  |
 | value | string |  no  |  |

---


 
 
 #### [EmailSchema](#EmailSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | boolean |  no  |  |
 | email | [[EmailProperties](#EmailProperties)] |  no  |  |

---


 
 
 #### [ContactSchema](#ContactSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | phone | [PhoneSchema](#PhoneSchema) |  no  |  |
 | email | [EmailSchema](#EmailSchema) |  no  |  |

---


 
 
 #### [TagsSchema](#TagsSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application | string |  no  |  |
 | _id | string |  no  |  |
 | tags | [[TagSchema](#TagSchema)] |  no  |  |

---


 
 
 #### [TagSchema](#TagSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | url | string |  no  |  |
 | type | string |  no  |  |
 | sub_type | string |  no  |  |
 | _id | string |  no  |  |
 | position | string |  no  |  |
 | attributes | string |  no  |  |
 | content | string |  no  |  |
 | __source | [TagSourceSchema](#TagSourceSchema) |  no  |  |

---


 
 
 #### [TagSourceSchema](#TagSourceSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  no  |  |
 | id | string |  no  |  |

---




### Enums





 #### [PageType](#PageType)
 Type : string

 | Name | Value | Description |
 | ---- | ----- | ----------- |
 | aboutUs | about-us | Symbolic link for About Us: /about-us |
 | addresses | addresses | Symbolic link for Saved Addresses: /profile/address |
 | blog | blog | Symbolic link for Blog: /blog/:slug |
 | brands | brands | Symbolic link for Brands: /brands/:department |
 | cards | cards | Symbolic link for Saved Cards: /profile/my-cards |
 | cart | cart | Symbolic link for Cart: /cart/bag/ |
 | categories | categories | Symbolic link for Categories: /categories/:department |
 | brand | brand | Symbolic link for Brand: /brand/:slug |
 | category | category | Symbolic link for Category: /category/:slug |
 | collection | collection | Symbolic link for Collection: /collection/:slug |
 | collections | collections | Symbolic link for Collections: /collections/ |
 | contactUs | contact-us | Symbolic link for Contact Us: /contact-us/ |
 | external | external | Symbolic link for External Link: /external/:url |
 | faq | faq | Symbolic link for FAQ: /faq/:category |
 | freshchat | freshchat | Symbolic link for Chat by Freshchat: /freshchat |
 | home | home | Symbolic link for Home: / |
 | notificationSettings | notification-settings | Symbolic link for Notification Settings: /notification-settings |
 | orders | orders | Symbolic link for Orders: /profile/orders |
 | page | page | Symbolic link for Page: /page/:slug |
 | policy | policy | Symbolic link for Privacy Policy: /privacy-policy |
 | product | product | Symbolic link for Product: /product/:slug |
 | productReviews | product-reviews | Symbolic link for Product Reviews: /product/:slug/reviews |
 | addProductReview | add-product-review | Symbolic link for Add Product review: /product/:slug/add-review |
 | productRequest | product-request | Symbolic link for Product Request: /product-request/ |
 | products | products | Symbolic link for Products: /products/ |
 | profile | profile | Symbolic link for Profile: /profile |
 | profileBasic | profile-basic | Symbolic link for Basic Profile: /profile/details |
 | profileCompany | profile-company | Symbolic link for Profile Company: /profile/company |
 | profileEmails | profile-emails | Symbolic link for Profile Emails: /profile/email |
 | profilePhones | profile-phones | Symbolic link for Profile Phones: /profile/phone |
 | rateUs | rate-us | Symbolic link for Rate Us: /rate-us |
 | referEarn | refer-earn | Symbolic link for Refer & Earn: /profile/refer-earn |
 | settings | settings | Symbolic link for Settings: /setting/currency |
 | sharedCart | shared-cart | Symbolic link for Shared Cart: /shared-cart/:token |
 | tnc | tnc | Symbolic link for Terms and Conditions: /terms-and-conditions |
 | trackOrder | track-order | Symbolic link for Track Order: /order-tracking/:orderId |
 | wishlist | wishlist | Symbolic link for Wishlist: /wishlist/ |
 | sections | sections | Symbolic link for Sections: /sections/:group |
 | form | form | Symbolic link for Form: /form/:slug |
 | cartDelivery | cart-delivery | Symbolic link for Cart Delivery: /cart/delivery |
 | cartPayment | cart-payment | Symbolic link for Cart Payment Information: /cart/payment-info |
 | cartReview | cart-review | Symbolic link for Cart Order Review: /cart/order-review |

---






