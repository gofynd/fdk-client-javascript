




##### [Back to Application docs](./README.md)

## Content Methods
Content System

* [getAnnouncements](#getannouncements)
* [getBlog](#getblog)
* [getBlogs](#getblogs)
* [getDataLoaders](#getdataloaders)
* [getFaqBySlug](#getfaqbyslug)
* [getFaqCategories](#getfaqcategories)
* [getFaqCategoryBySlug](#getfaqcategorybyslug)
* [getFaqs](#getfaqs)
* [getFaqsByCategorySlug](#getfaqsbycategoryslug)
* [getLandingPage](#getlandingpage)
* [getLegalInformation](#getlegalinformation)
* [getNavigations](#getnavigations)
* [getPage](#getpage)
* [getPages](#getpages)
* [getSEOConfiguration](#getseoconfiguration)
* [getSlideshow](#getslideshow)
* [getSlideshows](#getslideshows)
* [getSupportInformation](#getsupportinformation)
* [getTags](#gettags)



## Methods with example and description




### getAnnouncements
Get live announcements



```javascript
// Promise
const promise = applicationClient.content.getAnnouncements();

// Async/Await
const data = await applicationClient.content.getAnnouncements();
```






Announcements are useful to highlight a message or information on top of a webpage. Use this API to retrieve live announcements. Get announcements on individual pages or for all pages.

*Returned Response:*




[AnnouncementsResponseSchema](#AnnouncementsResponseSchema)

Success. Returns a JSON object with the details of the announcement shown on an individual page. `$all` is a special slug to indicate that an announcement is being shown on all the pages. Check the example shown below or refer `AnnouncementsResponseSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Announcements enabled</i></summary>

```json
{
  "value": {
    "announcements": {
      "$all": [
        {
          "announcement": "<link rel=\"stylesheet\" type=\"text/css\" href=\"https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.9.0/github-markdown.min.css\" /> <div class=\"markdown-body\" style='padding: 12px; color: #000; background-color: #fff;'><p>test Announcement</p>\n</div>",
          "schedule": {
            "start": "2021-03-31T11:22:08.167Z"
          }
        }
      ]
    },
    "refresh_rate": 900,
    "refresh_pages": []
  }
}
```
</details>

<details>
<summary><i>&nbsp; No Announcement enabled</i></summary>

```json
{
  "value": {
    "announcements": {},
    "refresh_rate": 900,
    "refresh_pages": []
  }
}
```
</details>

</details>









---


### getBlog
Get a blog



```javascript
// Promise
const promise = applicationClient.content.getBlog({  slug : value,
 rootId : value });

// Async/Await
const data = await applicationClient.content.getBlog({  slug : value,
 rootId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| slug | string | yes | A short, human-readable, URL-friendly identifier of a blog. You can get slug value from the endpoint /service/application/content/v1.0/blogs/. |    
| rootId | string | no | ID given to the HTML element |  



Use this API to get the details of a blog using its slug. Details include the title, reading time, publish status, feature image, tags, author, etc.

*Returned Response:*




[BlogSchema](#BlogSchema)

Success. Returns a JSON object with blog details. Check the example shown below or refer `BlogSchema` for more details.




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
Get a list of blogs



```javascript
// Promise
const promise = applicationClient.content.getBlogs({  pageNo : value,
 pageSize : value });

// Async/Await
const data = await applicationClient.content.getBlogs({  pageNo : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNo | number | no | The page number to navigate through the given set of results. Default value is 1.  |    
| pageSize | number | no | The number of items to retrieve in each page. |  



Use this API to get all the blogs.

*Returned Response:*




[BlogGetResponse](#BlogGetResponse)

Success. Check the example shown below or refer `BlogGetResponse` for more details.




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


### getDataLoaders
Get the data loaders associated with an application



```javascript
// Promise
const promise = applicationClient.content.getDataLoaders();

// Async/Await
const data = await applicationClient.content.getDataLoaders();
```






Use this API to get all selected data loaders of the application in the form of tags.

*Returned Response:*




[DataLoadersSchema](#DataLoadersSchema)

Success. Returns a JSON object containing all the data loaders injected in the application. Check the example shown below or refer `DataLoadersSchema` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "items": [
    {
      "name": "Algolia",
      "is_selected": false,
      "type": "url",
      "_id": "61bc4523a7ffc7504f4de4a5",
      "service": "catalog",
      "operation_id": "fetchSuggestions",
      "url": "/ext/example/url"
    },
    {
      "name": "Algolia v3",
      "is_selected": false,
      "type": "url",
      "_id": "61bc452da7ffc7504f4de4a7",
      "service": "catalog",
      "operation_id": "fetchSuggestions",
      "url": "/ext/example/url"
    }
  ]
}
```
</details>









---


### getFaqBySlug
Get an FAQ



```javascript
// Promise
const promise = applicationClient.content.getFaqBySlug({  slug : value });

// Async/Await
const data = await applicationClient.content.getFaqBySlug({  slug : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| slug | string | yes | A short, human-readable, URL-friendly identifier of an FAQ. You can get slug value from the endpoint /service/application/content/v1.0/faq. |  



Use this API to get a particular FAQ by its slug.

*Returned Response:*




[FaqSchema](#FaqSchema)

Success. Returns a question and answer by its slug. Check the example shown below or refer `FaqSchema` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "_id": "5eb2db750a8ebf497e315028",
  "question": "how to refer my friend",
  "answer": "1. Click on refer and earn image in fynd app\n2. Click on share the code\n3. Use any method for sharing\n4. Once the user activates the app with your code, both of you will get the refereal credits.",
  "slug": "how to refer",
  "application": "000000000000000000000001"
}
```
</details>









---


### getFaqCategories
Get a list of FAQ categories



```javascript
// Promise
const promise = applicationClient.content.getFaqCategories();

// Async/Await
const data = await applicationClient.content.getFaqCategories();
```






FAQs can be divided into categories. Use this API to get a list of FAQ categories.

*Returned Response:*




[GetFaqCategoriesSchema](#GetFaqCategoriesSchema)

Success. Returns a JSON object with categories of FAQ. Check the example shown below or refer `GetFaqCategoriesSchema` for more details.




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


### getFaqCategoryBySlug
Get the FAQ category



```javascript
// Promise
const promise = applicationClient.content.getFaqCategoryBySlug({  slug : value });

// Async/Await
const data = await applicationClient.content.getFaqCategoryBySlug({  slug : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| slug | string | yes | A short, human-readable, URL-friendly identifier of an FAQ category. You can get slug value from the endpoint /service/application/content/v1.0/faq/categories. |  



FAQs can be divided into categories. Use this API to get the category to which an FAQ belongs.

*Returned Response:*




[GetFaqCategoryBySlugSchema](#GetFaqCategoryBySlugSchema)

Success. Returns a FAQ category with its slug. Check the example shown below or refer `GetFaqCategoryBySlugSchema` for more details.




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


### getFaqs
Get a list of FAQs



```javascript
// Promise
const promise = applicationClient.content.getFaqs();

// Async/Await
const data = await applicationClient.content.getFaqs();
```






Use this API to get a list of frequently asked questions. Users will benefit from it when facing any issue with the website.

*Returned Response:*




[FaqResponseSchema](#FaqResponseSchema)

Success. Returns a JSON object with question and answers. Check the example shown below or refer `FaqResponseSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "faqs": [
      {
        "_id": "5eb2db750a8ebf497e315028",
        "question": "how to refer my friend",
        "answer": "1. Click on refer and earn image in fynd app\n2. Click on share the code\n3. Use any method for sharing\n4. Once the user activates the app with your code, both of you will get the refereal credits.",
        "slug": "how to refer",
        "application": "000000000000000000000001"
      }
    ]
  }
}
```
</details>

</details>









---


### getFaqsByCategorySlug
Get FAQs using the slug of FAQ category



```javascript
// Promise
const promise = applicationClient.content.getFaqsByCategorySlug({  slug : value });

// Async/Await
const data = await applicationClient.content.getFaqsByCategorySlug({  slug : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| slug | string | yes | A short, human-readable, URL-friendly identifier of an FAQ category. You can get slug value from the endpoint /service/application/content/v1.0/faq/categories. |  



FAQs can be divided into categories. Use this API to get all the FAQs belonging to a category by using the category slug.

*Returned Response:*




[GetFaqSchema](#GetFaqSchema)

Success. Returns a categorized list of question and answers using its slug. Check the example shown below or refer `GetFaqSchema` for more details.




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


### getLandingPage
Get the landing page



```javascript
// Promise
const promise = applicationClient.content.getLandingPage();

// Async/Await
const data = await applicationClient.content.getLandingPage();
```






Landing page is the first page that a prospect lands upon while visiting a website. Use this API to fetch the details of a landing page.

*Returned Response:*




[LandingPageSchema](#LandingPageSchema)

Success. Returns the landing page details. Check the example shown below or refer `LandingPageSchema` for more details.




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


### getLegalInformation
Get legal information



```javascript
// Promise
const promise = applicationClient.content.getLegalInformation();

// Async/Await
const data = await applicationClient.content.getLegalInformation();
```






Use this API to get the legal information of an application, which includes Privacy Policy, Terms and Conditions, Shipping Policy and FAQs regarding the usage of the application.

*Returned Response:*




[ApplicationLegal](#ApplicationLegal)

Success. Returns the T&C, Shipping Policy, Privacy Policy and Return Policy. Check the example shown below or refer `ApplicationLegal` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Success</i></summary>

```json
{
  "value": {
    "tnc": "**Terms and Conditions test**",
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


### getNavigations
Get the navigation



```javascript
// Promise
const promise = applicationClient.content.getNavigations({  pageNo : value,
 pageSize : value });

// Async/Await
const data = await applicationClient.content.getNavigations({  pageNo : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNo | number | no | The page number to navigate through the given set of results. Default value is 1.  |    
| pageSize | number | no | The number of items to retrieve in each page. |  



Use this API to fetch the navigations details which includes the items of the navigation pane. It also shows the links and sub-navigations.

*Returned Response:*




[NavigationGetResponse](#NavigationGetResponse)

Success. Returns a JSON object with navigation details. Check the example shown below or refer `NavigationGetResponse` for more details.




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


### getPage
Get a page



```javascript
// Promise
const promise = applicationClient.content.getPage({  slug : value,
 rootId : value });

// Async/Await
const data = await applicationClient.content.getPage({  slug : value,
 rootId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| slug | string | yes | A short, human-readable, URL-friendly identifier of a page. You can get slug value from the endpoint /service/application/content/v2.0/pages/. |    
| rootId | string | no | ID given to the HTML element |  



Use this API to get the details of a page using its slug. Details include the title, seo, publish status, feature image, tags, meta, etc.

*Returned Response:*




[PageSchema](#PageSchema)

Success. Returns a JSON object with page details. Check the example shown below or refer `CustomPageSchema` for more details.




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
Get all pages



```javascript
// Promise
const promise = applicationClient.content.getPages({  pageNo : value,
 pageSize : value });

// Async/Await
const data = await applicationClient.content.getPages({  pageNo : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNo | number | no | The page number to navigate through the given set of results. Default value is 1.  |    
| pageSize | number | no | The number of items to retrieve in each page. |  



Use this API to get a list of pages.

*Returned Response:*




[PageGetResponse](#PageGetResponse)

Success. Returns a list of pages along with their details. Check the example shown below or refer `PageGetStorefrontResponse` for more details.




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


### getSEOConfiguration
Get the SEO of an application



```javascript
// Promise
const promise = applicationClient.content.getSEOConfiguration();

// Async/Await
const data = await applicationClient.content.getSEOConfiguration();
```






Use this API to get the SEO details of an application, which includes a robot.txt, meta-tags and sitemap.

*Returned Response:*




[SeoComponent](#SeoComponent)

Success. Returns a JSON object SEO details such as robots.txt, meta-tags, and sitemap. Check the example shown below or refer `SeoComponent` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Success</i></summary>

```json
{
  "value": {
    "seo": {
      "details": {
        "title": "Zyosa Zyosa",
        "description": "",
        "image_url": ""
      },
      "robots_txt": "User-agent: * \nAllow: / \nsancisciasn xwsaixjowqnxwsiwjs",
      "sitemap_enabled": false,
      "cannonical_enabled": false,
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


### getSlideshow
Get a slideshow



```javascript
// Promise
const promise = applicationClient.content.getSlideshow({  slug : value });

// Async/Await
const data = await applicationClient.content.getSlideshow({  slug : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| slug | string | yes | A short, human-readable, URL-friendly identifier of a slideshow. You can get slug value from the endpoint /service/application/content/v1.0/slideshow/. |  



A slideshow is a group of images, videos or a combination of both that are shown on the website in the form of slides. Use this API to fetch a slideshow using its `slug`.

*Returned Response:*




[SlideshowSchema](#SlideshowSchema)

Success. Returns the details of how a slideshow is configured. Check the example shown below or refer `SlideshowSchema` for more details.




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


### getSlideshows
Get the slideshows



```javascript
// Promise
const promise = applicationClient.content.getSlideshows({  pageNo : value,
 pageSize : value });

// Async/Await
const data = await applicationClient.content.getSlideshows({  pageNo : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNo | number | no | The page number to navigate through the given set of results. Default value is 1.  |    
| pageSize | number | no | The number of items to retrieve in each page. |  



Use this API to get a list of slideshows along with their details.

*Returned Response:*




[SlideshowGetResponse](#SlideshowGetResponse)

Success. Check the example shown below or refer `SlideshowGetResponse` for more details.




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


### getSupportInformation
Get the support information



```javascript
// Promise
const promise = applicationClient.content.getSupportInformation();

// Async/Await
const data = await applicationClient.content.getSupportInformation();
```






Use this API to get contact details for customer support including emails and phone numbers.

*Returned Response:*




[Support](#Support)

Success. Returns all support information including email and phone number. Check the example shown below or refer `Support` for more details.




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


### getTags
Get the tags associated with an application



```javascript
// Promise
const promise = applicationClient.content.getTags();

// Async/Await
const data = await applicationClient.content.getTags();
```






Use this API to get all the CSS and JS injected in the application in the form of tags.

*Returned Response:*




[TagsSchema](#TagsSchema)

Success. Returns a JSON object containing all the tags injected in the application. Check the example shown below or refer `TagsSchema` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "application": "000000000000000000000001",
  "_id": "5f7c37b2dd0144bb3a353c5f",
  "tags": [
    {
      "name": "Tapfiliate JS",
      "sub_type": "external",
      "_id": "5f7c37b2dd0144f1f8353c60",
      "type": "js",
      "url": "https://script.tapfiliate.com/tapfiliate.js",
      "position": "body-bottom",
      "attributes": {
        "async": true
      }
    }
  ]
}
```
</details>









---



### Schemas


#### [Action](#Action)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | page | [ActionPage](#ActionPage)? |  yes  |  |
 | popup | [ActionPage](#ActionPage)? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [ActionPage](#ActionPage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | params | [String: [string]]? |  yes  |  |
 | query | [String: [string]]? |  yes  |  |
 | type | string? |  yes  |  |
 | url | string? |  yes  |  |
 

---

#### [AdminAnnouncementSchema](#AdminAnnouncementSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | _schedule | [ScheduleSchema](#ScheduleSchema)? |  yes  |  |
 | announcement | string? |  yes  |  |
 | app | string? |  yes  |  |
 | author | [AnnouncementAuthorSchema](#AnnouncementAuthorSchema)? |  yes  |  |
 | created_at | string? |  yes  |  |
 | editor_meta | [EditorMeta](#EditorMeta)? |  yes  |  |
 | modified_at | string? |  yes  |  |
 | pages | [[AnnouncementPageSchema](#AnnouncementPageSchema)]? |  yes  |  |
 | platforms | [string]? |  yes  |  |
 | title | string? |  yes  |  |
 

---

#### [AnnouncementAuthorSchema](#AnnouncementAuthorSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | created_by | string? |  yes  |  |
 | modified_by | string? |  yes  |  |
 

---

#### [AnnouncementPageSchema](#AnnouncementPageSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | page_slug | string? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [AnnouncementSchema](#AnnouncementSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | announcement | string? |  yes  |  |
 | schedule | [ScheduleStartSchema](#ScheduleStartSchema)? |  yes  |  |
 

---

#### [AnnouncementsResponseSchema](#AnnouncementsResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | announcements | [String: [[AnnouncementSchema](#AnnouncementSchema)]]? |  yes  |  |
 | refresh_pages | [string]? |  yes  | list of page slugs on which announcement should be fetched as soon as they are loaded |
 | refresh_rate | number? |  yes  | number of seconds after which api should hit again to fetch new announcements |
 

---

#### [ApplicationLegal](#ApplicationLegal)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | application | string? |  yes  |  |
 | created_at | string? |  yes  |  |
 | faq | [[ApplicationLegalFAQ](#ApplicationLegalFAQ)]? |  yes  |  |
 | policy | string? |  yes  |  |
 | returns | string? |  yes  |  |
 | shipping | string? |  yes  |  |
 | tnc | string? |  yes  |  |
 | updated_at | string? |  yes  |  |
 

---

#### [ApplicationLegalFAQ](#ApplicationLegalFAQ)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | answer | string? |  yes  |  |
 | question | string? |  yes  |  |
 

---

#### [Asset](#Asset)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | aspect_ratio | string? |  yes  |  |
 | id | string? |  yes  |  |
 | secure_url | string? |  yes  |  |
 

---

#### [Author](#Author)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | designation | string? |  yes  |  |
 | id | string? |  yes  |  |
 | name | string? |  yes  |  |
 

---

#### [BlogGetResponse](#BlogGetResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[BlogSchema](#BlogSchema)]? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 

---

#### [BlogRequest](#BlogRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _custom_json | string? |  yes  |  |
 | _schedule | [CronSchedule](#CronSchedule)? |  yes  |  |
 | application | string? |  yes  |  |
 | author | [Author](#Author)? |  yes  |  |
 | content | [[ResourceContent](#ResourceContent)]? |  yes  |  |
 | feature_image | [Asset](#Asset)? |  yes  |  |
 | published | boolean? |  yes  |  |
 | reading_time | string? |  yes  |  |
 | seo | [SEO](#SEO)? |  yes  |  |
 | slug | string? |  yes  |  |
 | tags | [string]? |  yes  |  |
 | title | string? |  yes  |  |
 

---

#### [BlogSchema](#BlogSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _custom_json | string? |  yes  |  |
 | _id | string? |  yes  |  |
 | _schedule | [CronSchedule](#CronSchedule)? |  yes  |  |
 | application | string? |  yes  |  |
 | archived | boolean? |  yes  |  |
 | author | [Author](#Author)? |  yes  |  |
 | content | [[ResourceContent](#ResourceContent)]? |  yes  |  |
 | date_meta | [DateMeta](#DateMeta)? |  yes  |  |
 | feature_image | [Asset](#Asset)? |  yes  |  |
 | published | boolean? |  yes  |  |
 | reading_time | string? |  yes  |  |
 | seo | [SEO](#SEO)? |  yes  |  |
 | slug | string? |  yes  |  |
 | tags | [string]? |  yes  |  |
 | title | string? |  yes  |  |
 

---

#### [CategoryRequestSchema](#CategoryRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | slug | string? |  yes  |  |
 | title | string? |  yes  |  |
 

---

#### [CategorySchema](#CategorySchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _custom_json | string? |  yes  |  |
 | _id | string? |  yes  |  |
 | application | string? |  yes  |  |
 | children | [string]? |  yes  |  |
 | description | string? |  yes  |  |
 | icon_url | string? |  yes  |  |
 | index | number? |  yes  |  |
 | slug | string? |  yes  |  |
 | title | string? |  yes  |  |
 

---

#### [ChildrenSchema](#ChildrenSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | answer | string? |  yes  |  |
 | application | string? |  yes  |  |
 | question | string? |  yes  |  |
 | slug | string? |  yes  |  |
 

---

#### [CommonError](#CommonError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 

---

#### [ConfigurationSchema](#ConfigurationSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | duration | number? |  yes  |  |
 | sleep_time | number? |  yes  |  |
 | slide_direction | string? |  yes  |  |
 | start_on_launch | boolean? |  yes  |  |
 

---

#### [ContactSchema](#ContactSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | [EmailSchema](#EmailSchema)? |  yes  |  |
 | phone | [PhoneSchema](#PhoneSchema)? |  yes  |  |
 

---

#### [ContentAPIError](#ContentAPIError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string? |  yes  |  |
 | exception | string? |  yes  |  |
 | info | string? |  yes  |  |
 | message | string? |  yes  |  |
 | meta | string? |  yes  |  |
 | request_id | string? |  yes  |  |
 | stack_trace | string? |  yes  |  |
 | status | number? |  yes  |  |
 

---

#### [ContentSchema](#ContentSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string? |  yes  |  |
 | value | string? |  yes  |  |
 

---

#### [CreateAnnouncementSchema](#CreateAnnouncementSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [AdminAnnouncementSchema](#AdminAnnouncementSchema)? |  yes  |  |
 | message | string? |  yes  |  |
 

---

#### [CreatedBySchema](#CreatedBySchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string? |  yes  |  |
 

---

#### [CreateFaqCategoryRequestSchema](#CreateFaqCategoryRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | category | [CategoryRequestSchema](#CategoryRequestSchema)? |  yes  |  |
 

---

#### [CreateFaqCategorySchema](#CreateFaqCategorySchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | category | [CategorySchema](#CategorySchema)? |  yes  |  |
 

---

#### [CreateFaqResponseSchema](#CreateFaqResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | faq | [FaqSchema](#FaqSchema)? |  yes  |  |
 

---

#### [CreateFaqSchema](#CreateFaqSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | faq | [FAQ](#FAQ)? |  yes  |  |
 

---

#### [CreateTagRequestSchema](#CreateTagRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | tags | [[CreateTagSchema](#CreateTagSchema)]? |  yes  |  |
 

---

#### [CreateTagSchema](#CreateTagSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | attributes | string? |  yes  |  |
 | content | string? |  yes  |  |
 | name | string? |  yes  |  |
 | pages | [string]? |  yes  |  |
 | position | string? |  yes  |  |
 | sub_type | string? |  yes  |  |
 | type | string? |  yes  |  |
 | url | string? |  yes  |  |
 

---

#### [CronSchedule](#CronSchedule)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cron | string? |  yes  |  |
 | duration | number? |  yes  |  |
 | end | string? |  yes  |  |
 | start | string? |  yes  |  |
 

---

#### [CustomMetaTag](#CustomMetaTag)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | content | string? |  yes  |  |
 | name | string? |  yes  |  |
 

---

#### [CustomPage](#CustomPage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [CustomPageSchema](#CustomPageSchema)? |  yes  |  |
 

---

#### [CustomPageSchema](#CustomPageSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | _schedule | [ScheduleSchema](#ScheduleSchema)? |  yes  |  |
 | application | string? |  yes  |  |
 | content | [string]? |  yes  |  |
 | created_by | [CreatedBySchema](#CreatedBySchema)? |  yes  |  |
 | date_meta | [DateMeta](#DateMeta)? |  yes  |  |
 | description | string? |  yes  |  |
 | orientation | string? |  yes  |  |
 | platform | string? |  yes  |  |
 | published | boolean? |  yes  |  |
 | slug | string? |  yes  |  |
 | tags | [string]? |  yes  |  |
 | title | string? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [DataLoaderResetResponseSchema](#DataLoaderResetResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | reset | string? |  yes  |  |
 

---

#### [DataLoaderResponseSchema](#DataLoaderResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | __source | [DataLoaderSourceSchema](#DataLoaderSourceSchema)? |  yes  |  |
 | _id | string? |  yes  |  |
 | application | string? |  yes  |  |
 | company | string? |  yes  |  |
 | content | string? |  yes  |  |
 | name | string? |  yes  |  |
 | operation_id | string? |  yes  |  |
 | service | string? |  yes  |  |
 | type | string? |  yes  |  |
 | url | string? |  yes  |  |
 

---

#### [DataLoaderSchema](#DataLoaderSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | __source | [DataLoaderSourceSchema](#DataLoaderSourceSchema)? |  yes  |  |
 | _id | string? |  yes  |  |
 | content | string? |  yes  |  |
 | name | string? |  yes  |  |
 | operation_id | string? |  yes  |  |
 | service | string? |  yes  |  |
 | type | string? |  yes  |  |
 | url | string? |  yes  |  |
 

---

#### [DataLoaderSourceSchema](#DataLoaderSourceSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [DataLoadersSchema](#DataLoadersSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[DataLoaderSchema](#DataLoaderSchema)]? |  yes  |  |
 

---

#### [DateMeta](#DateMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | created_on | string? |  yes  |  |
 | modified_on | string? |  yes  |  |
 

---

#### [DefaultNavigationResponse](#DefaultNavigationResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[NavigationSchema](#NavigationSchema)]? |  yes  |  |
 

---

#### [Detail](#Detail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string? |  yes  |  |
 | image_url | string? |  yes  |  |
 | title | string? |  yes  |  |
 

---

#### [EditorMeta](#EditorMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | background_color | string? |  yes  |  |
 | content | string? |  yes  |  |
 | content_type | string? |  yes  |  |
 | foreground_color | string? |  yes  |  |
 

---

#### [EmailProperties](#EmailProperties)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | key | string? |  yes  |  |
 | value | string? |  yes  |  |
 

---

#### [EmailSchema](#EmailSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | boolean? |  yes  |  |
 | email | [[EmailProperties](#EmailProperties)]? |  yes  |  |
 

---

#### [FAQ](#FAQ)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | answer | string? |  yes  |  |
 | question | string? |  yes  |  |
 | slug | string? |  yes  |  |
 

---

#### [FAQCategorySchema](#FAQCategorySchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _custom_json | string? |  yes  |  |
 | _id | string? |  yes  |  |
 | application | string? |  yes  |  |
 | children | [[ChildrenSchema](#ChildrenSchema)]? |  yes  |  |
 | description | string? |  yes  |  |
 | icon_url | string? |  yes  |  |
 | index | number? |  yes  |  |
 | slug | string? |  yes  |  |
 | title | string? |  yes  |  |
 

---

#### [FaqResponseSchema](#FaqResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | faqs | [[FaqSchema](#FaqSchema)]? |  yes  |  |
 

---

#### [FaqSchema](#FaqSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | answer | string? |  yes  |  |
 | application | string? |  yes  |  |
 | question | string? |  yes  |  |
 | slug | string? |  yes  |  |
 | tags | [string]? |  yes  |  |
 

---

#### [FeatureImage](#FeatureImage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | secure_url | string? |  yes  |  |
 

---

#### [GetAnnouncementListSchema](#GetAnnouncementListSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[AdminAnnouncementSchema](#AdminAnnouncementSchema)]? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 

---

#### [GetFaqCategoriesSchema](#GetFaqCategoriesSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | categories | [[CategorySchema](#CategorySchema)]? |  yes  |  |
 

---

#### [GetFaqCategoryBySlugSchema](#GetFaqCategoryBySlugSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | category | [FAQCategorySchema](#FAQCategorySchema)? |  yes  |  |
 

---

#### [GetFaqSchema](#GetFaqSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | faqs | [[FaqSchema](#FaqSchema)]? |  yes  |  |
 

---

#### [HandpickedTagSchema](#HandpickedTagSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | attributes | string? |  yes  |  |
 | content | string? |  yes  |  |
 | name | string? |  yes  |  |
 | position | string? |  yes  |  |
 | sub_type | string? |  yes  |  |
 | type | string? |  yes  |  |
 | url | string? |  yes  |  |
 

---

#### [LandingPage](#LandingPage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [LandingPageSchema](#LandingPageSchema)? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [LandingPageGetResponse](#LandingPageGetResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[LandingPageSchema](#LandingPageSchema)]? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 

---

#### [LandingPageSchema](#LandingPageSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _custom_json | string? |  yes  |  |
 | _id | string? |  yes  |  |
 | action | [Action](#Action)? |  yes  |  |
 | application | string? |  yes  |  |
 | archived | boolean? |  yes  |  |
 | created_by | [CreatedBySchema](#CreatedBySchema)? |  yes  |  |
 | date_meta | [DateMeta](#DateMeta)? |  yes  |  |
 | platform | [string]? |  yes  |  |
 | slug | string? |  yes  |  |
 

---

#### [Language](#Language)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display | string? |  yes  |  |
 

---

#### [LocaleLanguage](#LocaleLanguage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | ar | [Language](#Language)? |  yes  |  |
 | en_us | [Language](#Language)? |  yes  |  |
 | hi | [Language](#Language)? |  yes  |  |
 

---

#### [Navigation](#Navigation)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | application | string? |  yes  |  |
 | created_by | [CreatedBySchema](#CreatedBySchema)? |  yes  |  |
 | date_meta | [DateMeta](#DateMeta)? |  yes  |  |
 | name | string? |  yes  |  |
 | navigation | [NavigationReference](#NavigationReference)? |  yes  |  |
 | orientation | string? |  yes  |  |
 | platform | string? |  yes  |  |
 | position | string? |  yes  |  |
 | slug | string? |  yes  |  |
 

---

#### [NavigationGetResponse](#NavigationGetResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[NavigationSchema](#NavigationSchema)]? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 

---

#### [NavigationReference](#NavigationReference)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _locale_language | [LocaleLanguage](#LocaleLanguage)? |  yes  |  |
 | acl | [string]? |  yes  |  |
 | action | [Action](#Action)? |  yes  |  |
 | active | boolean? |  yes  |  |
 | display | string? |  yes  |  |
 | image | string? |  yes  |  |
 | sort_order | number? |  yes  |  |
 | sub_navigation | [[NavigationReference](#NavigationReference)]? |  yes  |  |
 | tags | [string]? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [NavigationRequest](#NavigationRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string? |  yes  |  |
 | navigation | [[NavigationReference](#NavigationReference)]? |  yes  |  |
 | orientation | [Orientation](#Orientation)? |  yes  |  |
 | platform | [string]? |  yes  |  |
 | slug | string? |  yes  |  |
 

---

#### [NavigationSchema](#NavigationSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | application | string? |  yes  |  |
 | archived | boolean? |  yes  |  |
 | created_by | [CreatedBySchema](#CreatedBySchema)? |  yes  |  |
 | date_meta | [DateMeta](#DateMeta)? |  yes  |  |
 | name | string? |  yes  |  |
 | navigation | [[NavigationReference](#NavigationReference)]? |  yes  |  |
 | orientation | [Orientation](#Orientation)? |  yes  |  |
 | platform | [string]? |  yes  |  |
 | slug | string? |  yes  |  |
 | version | number? |  yes  |  |
 

---

#### [NextSchedule](#NextSchedule)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | end | string? |  yes  |  |
 | start | string? |  yes  |  |
 

---

#### [Orientation](#Orientation)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | landscape | [string]? |  yes  |  |
 | portrait | [string]? |  yes  |  |
 

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

#### [PageContent](#PageContent)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string? |  yes  |  |
 | value | string? |  yes  |  |
 

---

#### [PageGetResponse](#PageGetResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[PageSchema](#PageSchema)]? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 

---

#### [PageMeta](#PageMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | key | string? |  yes  |  |
 | value | string? |  yes  |  |
 

---

#### [PageMetaSchema](#PageMetaSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application_id | string? |  yes  |  |
 | custom_pages | [[PageSchema](#PageSchema)]? |  yes  |  |
 | system_pages | [[NavigationSchema](#NavigationSchema)]? |  yes  |  |
 

---

#### [PagePublishRequest](#PagePublishRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | publish | boolean? |  yes  |  |
 

---

#### [PageRequest](#PageRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _custom_json | string? |  yes  |  |
 | _schedule | [CronSchedule](#CronSchedule)? |  yes  |  |
 | application | string? |  yes  |  |
 | author | [Author](#Author)? |  yes  |  |
 | content | [string]? |  yes  |  |
 | feature_image | [Asset](#Asset)? |  yes  |  |
 | orientation | string? |  yes  |  |
 | published | boolean? |  yes  |  |
 | reading_time | string? |  yes  |  |
 | seo | [SEO](#SEO)? |  yes  |  |
 | slug | string? |  yes  |  |
 | tags | [string]? |  yes  |  |
 | title | string? |  yes  |  |
 

---

#### [PageSchema](#PageSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _custom_json | string? |  yes  |  |
 | _id | string? |  yes  |  |
 | _schedule | [ScheduleSchema](#ScheduleSchema)? |  yes  |  |
 | application | string? |  yes  |  |
 | archived | boolean? |  yes  |  |
 | component_ids | [string]? |  yes  | Components can be used to store multiple components |
 | content | [string]? |  yes  |  |
 | content_path | string? |  yes  |  |
 | created_by | [CreatedBySchema](#CreatedBySchema)? |  yes  |  |
 | date_meta | [DateMeta](#DateMeta)? |  yes  |  |
 | description | string? |  yes  |  |
 | feature_image | [Asset](#Asset)? |  yes  |  |
 | orientation | string? |  yes  |  |
 | page_meta | [string]? |  yes  |  |
 | platform | string? |  yes  |  |
 | published | boolean? |  yes  |  |
 | seo | [SEO](#SEO)? |  yes  |  |
 | slug | string? |  yes  |  |
 | tags | [string]? |  yes  |  |
 | title | string? |  yes  |  |
 | type | string? |  yes  |  |
 | visibility | string? |  yes  |  |
 

---

#### [PageSpec](#PageSpec)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | specifications | [[PageSpecItem](#PageSpecItem)]? |  yes  |  |
 

---

#### [PageSpecItem](#PageSpecItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display_name | string? |  yes  |  |
 | page_type | string? |  yes  |  |
 | params | [[PageSpecParam](#PageSpecParam)]? |  yes  |  |
 | query | [[PageSpecParam](#PageSpecParam)]? |  yes  |  |
 

---

#### [PageSpecParam](#PageSpecParam)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | key | string? |  yes  |  |
 | required | boolean? |  yes  |  |
 

---

#### [PathMappingSchema](#PathMappingSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | __source | [PathSourceSchema](#PathSourceSchema)? |  yes  |  |
 | _id | string? |  yes  |  |
 | application | string? |  yes  |  |
 | created_at | string? |  yes  |  |
 | redirect_from | string? |  yes  |  |
 | redirect_to | string? |  yes  |  |
 | updated_at | string? |  yes  |  |
 

---

#### [PathSourceSchema](#PathSourceSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [PhoneProperties](#PhoneProperties)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string? |  yes  |  |
 | key | string? |  yes  |  |
 | number | string? |  yes  |  |
 

---

#### [PhoneSchema](#PhoneSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | boolean? |  yes  |  |
 | phone | [[PhoneProperties](#PhoneProperties)]? |  yes  |  |
 

---

#### [RemoveHandpickedSchema](#RemoveHandpickedSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | tags | [string]? |  yes  |  |
 

---

#### [ResourceContent](#ResourceContent)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string? |  yes  |  |
 | value | string? |  yes  |  |
 

---

#### [ScheduleSchema](#ScheduleSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cron | string? |  yes  |  |
 | duration | number? |  yes  |  |
 | end | string? |  yes  |  |
 | next_schedule | [[NextSchedule](#NextSchedule)]? |  yes  |  |
 | start | string? |  yes  |  |
 

---

#### [ScheduleStartSchema](#ScheduleStartSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | end | string? |  yes  |  |
 | start | string? |  yes  |  |
 

---

#### [SEO](#SEO)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string? |  yes  |  |
 | image | [SEOImage](#SEOImage)? |  yes  |  |
 | title | string? |  yes  |  |
 

---

#### [SeoComponent](#SeoComponent)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | seo | [SeoSchema](#SeoSchema)? |  yes  |  |
 

---

#### [SEOImage](#SEOImage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | url | string? |  yes  |  |
 

---

#### [SeoSchema](#SeoSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | app | string? |  yes  |  |
 | cannonical_enabled | boolean? |  yes  |  |
 | created_at | string? |  yes  |  |
 | custom_meta_tags | [[CustomMetaTag](#CustomMetaTag)]? |  yes  |  |
 | details | [Detail](#Detail)? |  yes  |  |
 | robots_txt | string? |  yes  |  |
 | sitemap_enabled | boolean? |  yes  |  |
 | updated_at | string? |  yes  |  |
 

---

#### [Slideshow](#Slideshow)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [SlideshowSchema](#SlideshowSchema)? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [SlideshowGetResponse](#SlideshowGetResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[SlideshowSchema](#SlideshowSchema)]? |  yes  |  |
 | page | [Page](#Page)? |  yes  |  |
 

---

#### [SlideshowMedia](#SlideshowMedia)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action | [Action](#Action)? |  yes  |  |
 | auto_decide_duration | boolean? |  yes  |  |
 | bg_color | string? |  yes  |  |
 | duration | number? |  yes  |  |
 | type | string? |  yes  |  |
 | url | string? |  yes  |  |
 

---

#### [SlideshowRequest](#SlideshowRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | boolean? |  yes  |  |
 | configuration | [ConfigurationSchema](#ConfigurationSchema)? |  yes  |  |
 | media | [SlideshowMedia](#SlideshowMedia)? |  yes  |  |
 | platform | string? |  yes  |  |
 | slug | string? |  yes  |  |
 

---

#### [SlideshowSchema](#SlideshowSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _custom_json | string? |  yes  |  |
 | _id | string? |  yes  |  |
 | active | boolean? |  yes  |  |
 | application | string? |  yes  |  |
 | archived | boolean? |  yes  |  |
 | configuration | [ConfigurationSchema](#ConfigurationSchema)? |  yes  |  |
 | date_meta | [DateMeta](#DateMeta)? |  yes  |  |
 | media | [[SlideshowMedia](#SlideshowMedia)]? |  yes  |  |
 | platform | string? |  yes  |  |
 | slug | string? |  yes  |  |
 

---

#### [Support](#Support)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | application | string? |  yes  |  |
 | config_type | string? |  yes  |  |
 | contact | [ContactSchema](#ContactSchema)? |  yes  |  |
 | created | boolean? |  yes  |  |
 | created_at | string? |  yes  |  |
 | updated_at | string? |  yes  |  |
 

---

#### [TagDeleteSuccessResponse](#TagDeleteSuccessResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean? |  yes  |  |
 

---

#### [TagSchema](#TagSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | __source | [TagSourceSchema](#TagSourceSchema)? |  yes  |  |
 | _id | string? |  yes  |  |
 | attributes | string? |  yes  |  |
 | content | string? |  yes  |  |
 | name | string? |  yes  |  |
 | pages | [string]? |  yes  |  |
 | position | string? |  yes  |  |
 | sub_type | string? |  yes  |  |
 | type | string? |  yes  |  |
 | url | string? |  yes  |  |
 

---

#### [TagSourceSchema](#TagSourceSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [TagsSchema](#TagsSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | application | string? |  yes  |  |
 | tags | [[TagSchema](#TagSchema)]? |  yes  |  |
 

---

#### [UpdateFaqCategoryRequestSchema](#UpdateFaqCategoryRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | category | [CategorySchema](#CategorySchema)? |  yes  |  |
 

---

#### [UpdateHandpickedSchema](#UpdateHandpickedSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | tag | [HandpickedTagSchema](#HandpickedTagSchema)? |  yes  |  |
 

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
 | external | external | Symbolic link for External Link: /external/ |
 | faq | faq | Symbolic link for FAQ: /faq |
 | freshchat | freshchat | Symbolic link for Chat by Freshchat: /freshchat |
 | home | home | Symbolic link for Home: / |
 | notificationSettings | notification-settings | Symbolic link for Notification Settings: /notification-settings |
 | orders | orders | Symbolic link for Orders: /profile/orders |
 | page | page | Symbolic link for Page: /page/:slug |
 | policy | policy | Symbolic link for Privacy Policy: /privacy-policy |
 | product | product | Symbolic link for Product: /product/:slug |
 | productRequest | product-request | Symbolic link for Product Request: /product-request/ |
 | products | products | Symbolic link for Products: /products/ |
 | profile | profile | Symbolic link for Profile: /profile |
 | profileOrderShipment | profile-order-shipment | Symbolic link for profile orders shipment: /profile/orders/shipment/:shipmentid |
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
 | login | login | Symbolic link for Login: /auth/login |
 | register | register | Symbolic link for Register: /auth/register |
 | shippingPolicy | shipping-policy | Symbolic link for Shipping policy: /shipping-policy |
 | returnPolicy | return-policy | Symbolic link for Return policy: /return-policy |
 | orderStatus | order-status | Symbolic link for Order status: /cart/order-status |

---






