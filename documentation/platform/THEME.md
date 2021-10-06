



##### [Back to Platform docs](./README.md)

## Theme Methods
Responsible for themes
* [getAllPages](#getallpages)
* [createPage](#createpage)
* [updateMultiplePages](#updatemultiplepages)
* [getPage](#getpage)
* [updatePage](#updatepage)
* [deletePage](#deletepage)
* [getThemeLibrary](#getthemelibrary)
* [addToThemeLibrary](#addtothemelibrary)
* [applyTheme](#applytheme)
* [isUpgradable](#isupgradable)
* [upgradeTheme](#upgradetheme)
* [getPublicThemes](#getpublicthemes)
* [createTheme](#createtheme)
* [getAppliedTheme](#getappliedtheme)
* [getFonts](#getfonts)
* [getThemeById](#getthemebyid)
* [updateTheme](#updatetheme)
* [deleteTheme](#deletetheme)
* [getThemeForPreview](#getthemeforpreview)
* [publishTheme](#publishtheme)
* [unpublishTheme](#unpublishtheme)
* [archiveTheme](#archivetheme)
* [unarchiveTheme](#unarchivetheme)



## Methods with example and description


### getAllPages
Get all pages of a theme



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").theme.getAllPages({  themeId : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").theme.getAllPages({  themeId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| themeId | string | yes | ID of the theme to be retrieved |  



Use this API to retrieve all the available pages of a theme by its ID.

*Returned Response:*




[AllAvailablePageSchema](#AllAvailablePageSchema)

Success. Returns an array all the pages of the theme. Refer `AllAvailablePageSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; All pages</i></summary>

```json
{
  "$ref": "#/components/examples/AllAvailablePagesExample"
}
```
</details>

</details>









---


### createPage
Create a page 



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").theme.createPage({  themeId : value,
 body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").theme.createPage({  themeId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| themeId | string | yes | ID of the theme |  
| body | [AvailablePageSchema](#AvailablePageSchema) | yes | Request body |


Use this API to create a page for a theme by its ID.

*Returned Response:*




[AvailablePageSchema](#AvailablePageSchema)

Success. Returns the page of the theme. Refer `AvailablePageSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; page</i></summary>

```json
{
  "$ref": "#/components/examples/AvailablePageExample"
}
```
</details>

</details>









---


### updateMultiplePages
Update multiple pages of a theme



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").theme.updateMultiplePages({  themeId : value,
 body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").theme.updateMultiplePages({  themeId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| themeId | string | yes | ID of the theme to be retrieved |  
| body | [AllAvailablePageSchema](#AllAvailablePageSchema) | yes | Request body |


Use this API to update multiple pages of a theme by its ID.

*Returned Response:*




[AllAvailablePageSchema](#AllAvailablePageSchema)

Success. Returns an array all the pages of the theme. Refer `AllAvailablePageSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; All pages</i></summary>

```json
{
  "$ref": "#/components/examples/AllAvailablePagesExample"
}
```
</details>

</details>









---


### getPage
Get page of a theme



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").theme.getPage({  themeId : value,
 pageValue : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").theme.getPage({  themeId : value,
 pageValue : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| themeId | string | yes | ID of the theme to be retrieved |   
| pageValue | string | yes | Value of the page to be retrieved |  



Use this API to retrieve a page of a theme.

*Returned Response:*




[AvailablePageSchema](#AvailablePageSchema)

Success. Returns an object of the page.  Refer `AvailablePageSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Home page</i></summary>

```json
{
  "$ref": "#/components/examples/AvailablePageExample"
}
```
</details>

</details>









---


### updatePage
Updates a page 



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").theme.updatePage({  themeId : value,
 pageValue : value,
 body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").theme.updatePage({  themeId : value,
 pageValue : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| themeId | string | yes | ID of the theme |   
| pageValue | string | yes | Value of the page to be updated |  
| body | [AvailablePageSchema](#AvailablePageSchema) | yes | Request body |


Use this API to update a page for a theme by its ID.

*Returned Response:*




[AvailablePageSchema](#AvailablePageSchema)

Success. Returns a the page of the theme. Refer `AvailablePageSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; page</i></summary>

```json
{
  "$ref": "#/components/examples/AvailablePageExample"
}
```
</details>

</details>









---


### deletePage
Deletes a page 



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").theme.deletePage({  themeId : value,
 pageValue : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").theme.deletePage({  themeId : value,
 pageValue : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| themeId | string | yes | ID of the theme |   
| pageValue | string | yes | Value of the page to be updated |  



Use this API to delete a page for a theme by its ID and page_value.

*Returned Response:*




[AvailablePageSchema](#AvailablePageSchema)

Success. Returns a the page of the theme. Refer `AvailablePageSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; page</i></summary>

```json
{
  "$ref": "#/components/examples/AvailablePageExample"
}
```
</details>

</details>









---


### getThemeLibrary
Get a list of themes from the theme library



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").theme.getThemeLibrary({  pageSize : value,
 pageNo : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").theme.getThemeLibrary({  pageSize : value,
 pageNo : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageSize | number | no | The number of items to retrieve in each page. Default value is 10.  |    
| pageNo | number | no | The page number to navigate through the given set of results. Default value is 1. |  



Theme library is a personalized collection of themes that are chosen and added from the available themes. Use this API to fetch a list of themes from the library along with their configuration details. 

*Returned Response:*




[ThemesListingResponseSchema](#ThemesListingResponseSchema)

Success. Refer `ThemesListingResponseSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Success</i></summary>

```json
{
  "$ref": "#/components/examples/ThemesListingResponse"
}
```
</details>

</details>









---


### addToThemeLibrary
Add a theme to the theme library



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").theme.addToThemeLibrary({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").theme.addToThemeLibrary({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [AddThemeRequestSchema](#AddThemeRequestSchema) | yes | Request body |


Theme library is a personalized collection of themes that are chosen and added from the available themes. Use this API to choose a theme and add it to the theme library.

*Returned Response:*




[ThemesSchema](#ThemesSchema)

Success. Refer `ThemesSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Success</i></summary>

```json
{
  "$ref": "#/components/examples/Themes"
}
```
</details>

</details>









---


### applyTheme
Apply a theme



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").theme.applyTheme({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").theme.applyTheme({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [AddThemeRequestSchema](#AddThemeRequestSchema) | yes | Request body |


Use this API to apply a theme to the website.

*Returned Response:*




[ThemesSchema](#ThemesSchema)

Success. Refer `ThemesSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Success</i></summary>

```json
{
  "$ref": "#/components/examples/Themes"
}
```
</details>

</details>









---


### isUpgradable
Checks if theme is upgradable



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").theme.isUpgradable({  themeId : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").theme.isUpgradable({  themeId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| themeId | string | yes | Theme ID |  



There's always a possibility that new features get added to a theme. Use this API to check if the applied theme has an upgrade available.

*Returned Response:*




[UpgradableThemeSchema](#UpgradableThemeSchema)

Success. If the boolean value of `upgrade` returns **true**, the theme can be upgraded. Refer `UpgradableThemeSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Success</i></summary>

```json
{
  "$ref": "#/components/examples/UpgradableTheme"
}
```
</details>

</details>









---


### upgradeTheme
Upgrade a theme



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").theme.upgradeTheme({  themeId : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").theme.upgradeTheme({  themeId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| themeId | string | yes | ID allotted to the theme. |  



Use this API to upgrade the current theme to its latest version.

*Returned Response:*




[ThemesSchema](#ThemesSchema)

Success. Upgrades the theme and shares the details of the new version in the response. Refer `ThemesSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Success</i></summary>

```json
{
  "$ref": "#/components/examples/Themes"
}
```
</details>

</details>









---


### getPublicThemes
Get all public themes



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").theme.getPublicThemes({  pageSize : value,
 pageNo : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").theme.getPublicThemes({  pageSize : value,
 pageNo : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageSize | number | no | The number of items to retrieve in each page. Default value is 10.  |    
| pageNo | number | no | The page number to navigate through the given set of results. Default value is 1.  |  



Use this API to get a list of free themes that you can apply to your website.

*Returned Response:*




[ThemesListingResponseSchema](#ThemesListingResponseSchema)

Success. Refer `ThemesListingResponseSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Success</i></summary>

```json
{
  "$ref": "#/components/examples/ThemesListingResponse"
}
```
</details>

</details>









---


### createTheme
Create a new theme



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").theme.createTheme({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").theme.createTheme({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [ThemesSchema](#ThemesSchema) | yes | Request body |


Themes improve the look and appearance of a website. Use this API to create a theme.

*Returned Response:*




[ThemesSchema](#ThemesSchema)

Theme




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Success</i></summary>

```json
{
  "$ref": "#/components/examples/Themes"
}
```
</details>

</details>









---


### getAppliedTheme
Get the applied theme



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").theme.getAppliedTheme();

// Async/Await
const data = await client.application("<APPLICATION_ID>").theme.getAppliedTheme();
```






Use this API to retrieve the theme that is currently applied to the website along with its details.

*Returned Response:*




[ThemesSchema](#ThemesSchema)

Success. Refer `ThemesSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Success</i></summary>

```json
{
  "$ref": "#/components/examples/Themes"
}
```
</details>

</details>









---


### getFonts
Get all the supported fonts in a theme



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").theme.getFonts();

// Async/Await
const data = await client.application("<APPLICATION_ID>").theme.getFonts();
```






Font is a collection of characters with a similar design. Use this API to retrieve a list of website fonts.

*Returned Response:*




[FontsSchema](#FontsSchema)

Success. Refer `FontsSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Success</i></summary>

```json
{
  "$ref": "#/components/examples/FontsResponse"
}
```
</details>

</details>









---


### getThemeById
Gets theme by id



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").theme.getThemeById({  themeId : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").theme.getThemeById({  themeId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| themeId | string | yes | ID allotted to the theme. |  



Use this API to retrieve the details of a specific theme by using its ID.

*Returned Response:*




[ThemesSchema](#ThemesSchema)

Success. Refer `ThemesSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Success</i></summary>

```json
{
  "$ref": "#/components/examples/Themes"
}
```
</details>

</details>









---


### updateTheme
Update a theme



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").theme.updateTheme({  themeId : value,
 body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").theme.updateTheme({  themeId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| themeId | string | yes | ID allotted to the theme. |  
| body | [ThemesSchema](#ThemesSchema) | yes | Request body |


Use this API to edit an existing theme. You can customize the website font, sections, images, styles, and many more.

*Returned Response:*




[ThemesSchema](#ThemesSchema)

Success. Refer `ThemesSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Success</i></summary>

```json
{
  "$ref": "#/components/examples/Themes"
}
```
</details>

</details>









---


### deleteTheme
Delete a theme



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").theme.deleteTheme({  themeId : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").theme.deleteTheme({  themeId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| themeId | string | yes | ID allotted to the theme. |  



Use this API to delete a theme from the theme library.

*Returned Response:*




[ThemesSchema](#ThemesSchema)

Success. Refer `ThemesSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Success</i></summary>

```json
{
  "$ref": "#/components/examples/Themes"
}
```
</details>

</details>









---


### getThemeForPreview
Get a theme preview



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").theme.getThemeForPreview({  themeId : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").theme.getThemeForPreview({  themeId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| themeId | string | yes | ID allotted to the theme. |  



A theme can be previewed before applying it. Use this API to retrieve the theme preview by using its ID.

*Returned Response:*




[ThemesSchema](#ThemesSchema)

Success. Refer `ThemesSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Success</i></summary>

```json
{
  "$ref": "#/components/examples/Themes"
}
```
</details>

</details>









---


### publishTheme
Publish a theme



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").theme.publishTheme({  themeId : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").theme.publishTheme({  themeId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| themeId | string | yes | ID allotted to the theme. |  



Use this API to publish a theme that is either newly created or edited.

*Returned Response:*




[ThemesSchema](#ThemesSchema)

Success. Refer `ThemesSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Success</i></summary>

```json
{
  "$ref": "#/components/examples/Themes"
}
```
</details>

</details>









---


### unpublishTheme
Unpublish a theme



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").theme.unpublishTheme({  themeId : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").theme.unpublishTheme({  themeId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| themeId | string | yes | ID allotted to the theme. |  



Use this API to remove an existing theme from the list of available themes.

*Returned Response:*




[ThemesSchema](#ThemesSchema)

Success. Refer `ThemesSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Success</i></summary>

```json
{
  "$ref": "#/components/examples/Themes"
}
```
</details>

</details>









---


### archiveTheme
Archive a theme



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").theme.archiveTheme({  themeId : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").theme.archiveTheme({  themeId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| themeId | string | yes | ID allotted to the theme. |  



Use this API to store an existing theme but not delete it so that it can be used in future if required. 

*Returned Response:*




[ThemesSchema](#ThemesSchema)

Success. Refer `ThemesSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Success</i></summary>

```json
{
  "$ref": "#/components/examples/Themes"
}
```
</details>

</details>









---


### unarchiveTheme
Unarchive a theme



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").theme.unarchiveTheme({  themeId : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").theme.unarchiveTheme({  themeId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| themeId | string | yes | ID allotted to the theme. |  



Use this API to restore an archived theme and bring it back for editing or publishing. 

*Returned Response:*




[ThemesSchema](#ThemesSchema)

Success. Refer `ThemesSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Success</i></summary>

```json
{
  "$ref": "#/components/examples/Themes"
}
```
</details>

</details>









---



### Schemas

 
 
 #### [AvailablePageSchema](#AvailablePageSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | value | string |  no  |  |
 | text | string |  no  |  |
 | path | string |  no  |  |
 | type | string |  no  |  |
 | sections | [[AvailablePageSchemaSections](#AvailablePageSchemaSections)] |  no  |  |
 | sections_meta | [[AvailablePageSectionMetaAttributes](#AvailablePageSectionMetaAttributes)] |  no  |  |
 | theme | string |  no  |  |
 | seo | [AvailablePageSeo](#AvailablePageSeo) |  no  |  |
 | props | [string] |  no  |  |
 | _id | string |  no  |  |

---


 
 
 #### [AvailablePageSectionMetaAttributes](#AvailablePageSectionMetaAttributes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | attributes | string |  no  |  |

---


 
 
 #### [AvailablePageSeo](#AvailablePageSeo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | title | string |  no  |  |
 | description | string |  no  |  |
 | _id | string |  no  |  |

---


 
 
 #### [AvailablePageSchemaSections](#AvailablePageSchemaSections)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | label | string |  no  |  |
 | props | string |  no  |  |
 | blocks | [string] |  no  |  |
 | preset | string |  no  |  |
 | predicate | [AvailablePagePredicate](#AvailablePagePredicate) |  no  |  |

---


 
 
 #### [AvailablePageScreenPredicate](#AvailablePageScreenPredicate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | mobile | boolean |  no  |  |
 | desktop | boolean |  no  |  |
 | tablet | boolean |  no  |  |

---


 
 
 #### [AvailablePageUserPredicate](#AvailablePageUserPredicate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | authenticated | boolean |  no  |  |
 | anonymous | boolean |  no  |  |

---


 
 
 #### [AvailablePageRoutePredicate](#AvailablePageRoutePredicate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | selected | string |  no  |  |
 | exact_url | string |  no  |  |
 | query | string |  no  |  |

---


 
 
 #### [AvailablePagePredicate](#AvailablePagePredicate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | screen | [AvailablePageScreenPredicate](#AvailablePageScreenPredicate) |  no  |  |
 | user | [AvailablePageUserPredicate](#AvailablePageUserPredicate) |  no  |  |
 | route | [AvailablePageRoutePredicate](#AvailablePageRoutePredicate) |  no  |  |

---


 
 
 #### [AllAvailablePageSchema](#AllAvailablePageSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | pages | [[AvailablePageSchema](#AvailablePageSchema)] |  no  |  |

---


 
 
 #### [PaginationSchema](#PaginationSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | size | number |  no  |  |
 | item_total | number |  no  |  |
 | has_next | boolean |  no  |  |
 | type | string |  no  |  |
 | current | number |  no  |  |

---


 
 
 #### [ThemesListingResponseSchema](#ThemesListingResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[ThemesSchema](#ThemesSchema)] |  no  |  |
 | page | [PaginationSchema](#PaginationSchema) |  no  |  |

---


 
 
 #### [AddThemeRequestSchema](#AddThemeRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | theme_id | string |  no  |  |

---


 
 
 #### [UpgradableThemeSchema](#UpgradableThemeSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | parent_theme | string |  no  |  |
 | applied_theme | string |  no  |  |
 | upgrade | boolean |  no  |  |

---


 
 
 #### [FontsSchema](#FontsSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [FontsSchemaItems](#FontsSchemaItems) |  no  |  |
 | kind | string |  no  |  |

---


 
 
 #### [BlitzkriegApiErrorSchema](#BlitzkriegApiErrorSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |

---


 
 
 #### [BlitzkriegNotFoundSchema](#BlitzkriegNotFoundSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |

---


 
 
 #### [BlitzkriegInternalServerErrorSchema](#BlitzkriegInternalServerErrorSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |

---


 
 
 #### [FontsSchemaItems](#FontsSchemaItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | family | string |  no  |  |
 | variants | [string] |  no  |  |
 | subsets | [string] |  no  |  |
 | version | string |  no  |  |
 | last_modified | string |  no  |  |
 | files | [FontsSchemaItemsFiles](#FontsSchemaItemsFiles) |  no  |  |
 | category | string |  no  |  |
 | kind | string |  no  |  |

---


 
 
 #### [FontsSchemaItemsFiles](#FontsSchemaItemsFiles)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | regular | string |  no  |  |
 | italic | string |  no  |  |
 | bold | string |  no  |  |

---


 
 
 #### [ThemesSchema](#ThemesSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application | string |  no  |  |
 | applied | boolean |  no  |  |
 | customized | boolean |  no  |  |
 | published | boolean |  no  |  |
 | archived | boolean |  no  |  |
 | created_at | string |  no  |  |
 | updated_at | string |  no  |  |
 | version | string |  no  |  |
 | parent_theme_version | string |  no  |  |
 | parent_theme | string |  no  |  |
 | information | [Information](#Information) |  no  |  |
 | tags | [string] |  no  |  |
 | src | [Src](#Src) |  no  |  |
 | assets | [AssetsSchema](#AssetsSchema) |  no  |  |
 | available_sections | [[availableSectionSchema](#availableSectionSchema)] |  no  |  |
 | constants | string |  no  |  |
 | styles | string |  no  |  |
 | config | [Config](#Config) |  no  |  |
 | settings | string |  no  |  |
 | font | [Font](#Font) |  no  |  |
 | _id | string |  no  |  |
 | __v | number |  no  |  |
 | colors | [Colors](#Colors) |  no  |  |

---


 
 
 #### [availableSectionSchema](#availableSectionSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | blocks | [[Blocks](#Blocks)] |  no  |  |
 | name | string |  no  |  |
 | label | string |  no  |  |
 | props | [[BlocksProps](#BlocksProps)] |  no  |  |

---


 
 
 #### [Information](#Information)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | images | [Images](#Images) |  no  |  |
 | features | [string] |  no  |  |
 | name | string |  no  |  |
 | description | string |  no  |  |

---


 
 
 #### [Images](#Images)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | desktop | [string] |  no  |  |
 | android | [string] |  no  |  |
 | ios | [string] |  no  |  |
 | thumbnail | [string] |  no  |  |

---


 
 
 #### [Src](#Src)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | link | string |  no  |  |

---


 
 
 #### [AssetsSchema](#AssetsSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | umd_js | [UmdJs](#UmdJs) |  no  |  |
 | common_js | [CommonJs](#CommonJs) |  no  |  |
 | css | [Css](#Css) |  no  |  |

---


 
 
 #### [UmdJs](#UmdJs)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | link | string |  no  |  |

---


 
 
 #### [CommonJs](#CommonJs)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | link | string |  no  |  |

---


 
 
 #### [Css](#Css)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | link | string |  no  |  |

---


 
 
 #### [Seo](#Seo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | title | string |  no  |  |
 | description | string |  no  |  |

---


 
 
 #### [Sections](#Sections)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | attributes | string |  no  |  |

---


 
 
 #### [Config](#Config)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | preset | [Preset](#Preset) |  no  |  |
 | global_schema | [GlobalSchema](#GlobalSchema) |  no  |  |
 | current | string |  no  |  |
 | list | [[ListSchemaItem](#ListSchemaItem)] |  no  |  |

---


 
 
 #### [Preset](#Preset)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | pages | [[AvailablePageSchema](#AvailablePageSchema)] |  no  |  |

---


 
 
 #### [GlobalSchema](#GlobalSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | props | [[GlobalSchemaProps](#GlobalSchemaProps)] |  no  |  |

---


 
 
 #### [ListSchemaItem](#ListSchemaItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | global | string |  no  |  |
 | page | [[ConfigPage](#ConfigPage)] |  no  |  |
 | name | string |  no  |  |

---


 
 
 #### [Colors](#Colors)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bg_color | string |  no  |  |
 | primary_color | string |  no  |  |
 | secondary_color | string |  no  |  |
 | accent_color | string |  no  |  |
 | link_color | string |  no  |  |
 | button_secondary_color | string |  no  |  |

---


 
 
 #### [Custom](#Custom)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | props | string |  no  |  |

---


 
 
 #### [ConfigPage](#ConfigPage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | settings | string |  no  |  |
 | page | string |  no  |  |

---


 
 
 #### [Font](#Font)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | family | string |  no  |  |
 | variants | [Variants](#Variants) |  no  |  |

---


 
 
 #### [Variants](#Variants)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | medium | [Medium](#Medium) |  no  |  |
 | semi_bold | [SemiBold](#SemiBold) |  no  |  |
 | bold | [Bold](#Bold) |  no  |  |
 | light | [Light](#Light) |  no  |  |
 | regular | [Regular](#Regular) |  no  |  |

---


 
 
 #### [Medium](#Medium)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | file | string |  no  |  |

---


 
 
 #### [SemiBold](#SemiBold)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | file | string |  no  |  |

---


 
 
 #### [Bold](#Bold)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | file | string |  no  |  |

---


 
 
 #### [Light](#Light)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | file | string |  no  |  |

---


 
 
 #### [Regular](#Regular)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | file | string |  no  |  |

---


 
 
 #### [Blocks](#Blocks)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  no  |  |
 | name | string |  no  |  |
 | props | [[BlocksProps](#BlocksProps)] |  no  |  |

---


 
 
 #### [GlobalSchemaProps](#GlobalSchemaProps)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | label | string |  no  |  |
 | type | string |  no  |  |
 | category | string |  no  |  |

---


 
 
 #### [BlocksProps](#BlocksProps)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | label | string |  no  |  |
 | type | string |  no  |  |

---




