




##### [Back to Panel docs](./README.md)

## Theme Methods
Responsible for themes listing published theme on theme marketplace

* [getMarketplaceThemeBySlug](#getmarketplacethemebyslug)
* [getMarketplaceThemeVersions](#getmarketplacethemeversions)
* [getMarketplaceThemes](#getmarketplacethemes)



## Methods with example and description




### getMarketplaceThemeBySlug
Get marketplace theme by slug



```javascript
// Promise
const promise = panelClient.theme.getMarketplaceThemeBySlug({  slugName : value });

// Async/Await
const data = await panelClient.theme.getMarketplaceThemeBySlug({  slugName : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| slugName | string | yes | Slug of marketplace theme |  



Fetches the theme details by slug

*Returned Response:*




[ThemeSlugResponse](#ThemeSlugResponse)

Successful response




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getMarketplaceThemeVersions
Get theme and user details



```javascript
// Promise
const promise = panelClient.theme.getMarketplaceThemeVersions({  slugName : value });

// Async/Await
const data = await panelClient.theme.getMarketplaceThemeVersions({  slugName : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| slugName | string | yes | Slug of theme |  



This API use to get list of theme published theme versions

*Returned Response:*




[ThemeAndUserDetailsResponse](#ThemeAndUserDetailsResponse)

Successfully retrieved theme and user details




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getMarketplaceThemes
Get marketplace themes



```javascript
// Promise
const promise = panelClient.theme.getMarketplaceThemes({  pageSize : value,
 pageNo : value });

// Async/Await
const data = await panelClient.theme.getMarketplaceThemes({  pageSize : value,
 pageNo : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageSize | number | no | Number of themes per page |    
| pageNo | number | no | Page number to retrieve |  



This API use to get list of pulished marketplace themes

*Returned Response:*




[MarketplaceThemeResponseBody](#MarketplaceThemeResponseBody)

Successful operation




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---



### Schemas


#### [CarouselItem](#CarouselItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | desktop | string? |  yes  | Desktop carousel image URL |
 | mobile | string? |  yes  | Mobile carousel image URL |
 

---

#### [CatalogSize](#CatalogSize)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | max | number? |  yes  | Maximum catalog size |
 | min | number? |  yes  | Minimum catalog size |
 

---

#### [Comments](#Comments)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | developer_remark | string? |  yes  | Developer remark |
 | reviewer_feedback | string? |  yes  | Reviewer feedback |
 

---

#### [ContactInfo](#ContactInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | developer_contact | [string]? |  yes  | Developer contact information |
 | seller_contact | string? |  yes  | Seller contact information |
 

---

#### [Documentation](#Documentation)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | notes | string? |  yes  | Documentation notes |
 | url | string? |  yes  | Documentation URL |
 

---

#### [Email](#Email)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | boolean |  no  | Whether the email address is active or not |
 | email | string |  no  | Email address |
 | primary | boolean |  no  | Whether the email address is the primary contact email for the user |
 | verified | boolean |  no  | Whether the email address has been verified or not |
 

---

#### [ExploreInfo](#ExploreInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string? |  yes  | Explore feature description |
 | title | string? |  yes  | Explore feature title |
 

---

#### [Feature](#Feature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | category | string? |  yes  | Feature category |
 | list | [[FeatureItem](#FeatureItem)]? |  yes  |  |
 

---

#### [FeatureItem](#FeatureItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string? |  yes  | Feature description |
 | label | string? |  yes  | Feature label |
 

---

#### [Highlight](#Highlight)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string? |  yes  | Highlight description |
 | image | string? |  yes  | Highlight image URL |
 | title | string? |  yes  | Highlight title |
 

---

#### [MarketplaceTheme](#MarketplaceTheme)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  | Theme ID |
 | carousel | [[CarouselItem](#CarouselItem)]? |  yes  |  |
 | catalog_size | [CatalogSize](#CatalogSize)? |  yes  |  |
 | comments | [Comments](#Comments)? |  yes  |  |
 | contact | [ContactInfo](#ContactInfo)? |  yes  |  |
 | created_at | string? |  yes  | Theme creation timestamp |
 | description | string? |  yes  | Theme description |
 | documentation | [Documentation](#Documentation)? |  yes  |  |
 | explore | [ExploreInfo](#ExploreInfo)? |  yes  |  |
 | features | [[Feature](#Feature)]? |  yes  |  |
 | highlights | [[Highlight](#Highlight)]? |  yes  |  |
 | images | [MarketplaceThemeImages](#MarketplaceThemeImages)? |  yes  |  |
 | industry | [string]? |  yes  | Industries the theme is suitable for |
 | is_default | boolean? |  yes  | Indicates if the theme is a default theme |
 | is_update | boolean? |  yes  | Indicates if the theme is an update |
 | name | string? |  yes  | Theme name |
 | organization_id | string? |  yes  | Organization ID |
 | payment | [PaymentInfo](#PaymentInfo)? |  yes  |  |
 | release | [Release](#Release)? |  yes  |  |
 | slug | string? |  yes  | Theme slug |
 | src | string? |  yes  | Theme source URL |
 | status | string? |  yes  | Theme status |
 | step | number? |  yes  | Theme step |
 | tagline | string? |  yes  | Theme tagline |
 | template_theme_id | string? |  yes  | Template theme ID |
 | updated_at | string? |  yes  | Theme update timestamp |
 | user_id | string? |  yes  | User ID |
 | variations | [[Variation](#Variation)]? |  yes  |  |
 

---

#### [MarketplaceThemeImages](#MarketplaceThemeImages)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | desktop | string? |  yes  | Desktop theme image URL |
 | mobile | string? |  yes  | Mobile theme image URL |
 

---

#### [MarketplaceThemeResponseBody](#MarketplaceThemeResponseBody)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[MarketplaceTheme](#MarketplaceTheme)]? |  yes  |  |
 | page | [PaginationSchema](#PaginationSchema)? |  yes  |  |
 

---

#### [Organization](#Organization)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  | The unique identifier of the organization |
 | meta | [OrganizationMeta](#OrganizationMeta)? |  yes  |  |
 

---

#### [OrganizationMeta](#OrganizationMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | ecomm_platform_used | [string]? |  yes  | List of e-commerce platforms used by the organization |
 | goals | [string]? |  yes  | List of goals for the organization |
 

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

#### [PaymentInfo](#PaymentInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | number? |  yes  | Amount of payment |
 | is_paid | boolean? |  yes  | Indicates if the theme is paid |
 

---

#### [PhoneNumber](#PhoneNumber)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | boolean |  no  | Whether the phone number is active or not |
 | country_code | number? |  yes  | Country code for the phone number |
 | phone | string |  no  | Phone number |
 | primary | boolean |  no  | Whether the phone number is the primary contact number for the user |
 | verified | boolean |  no  | Whether the phone number has been verified or not |
 

---

#### [Release](#Release)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | notes | string? |  yes  | Release notes |
 | version | string? |  yes  | Release version |
 

---

#### [ThemeAndUserDetailsResponse](#ThemeAndUserDetailsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | themes | [[MarketplaceTheme](#MarketplaceTheme)]? |  yes  | List of themes |
 | user | [[ThemeCreator](#ThemeCreator)]? |  yes  | List of users |
 

---

#### [ThemeCreator](#ThemeCreator)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  | Unique identifier for the user |
 | account_type | string? |  yes  | Type of user account |
 | active | boolean |  no  | Whether the user is active or not |
 | emails | [[Email](#Email)] |  no  | List of email addresses associated with the user |
 | first_name | string? |  yes  | First name of the user |
 | gender | string? |  yes  | Gender of the user (null if not specified) |
 | last_name | string? |  yes  | Last name of the user |
 | phone_numbers | [[PhoneNumber](#PhoneNumber)]? |  yes  | List of phone numbers associated with the user |
 

---

#### [ThemeSlugResponse](#ThemeSlugResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | organization | [Organization](#Organization)? |  yes  |  |
 | theme | [MarketplaceTheme](#MarketplaceTheme)? |  yes  |  |
 | user | [[ThemeCreator](#ThemeCreator)]? |  yes  | An array of user objects |
 

---

#### [Variation](#Variation)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | color | string? |  yes  | Variation color |
 | demo_url | string? |  yes  | Variation demo URL |
 | images | [MarketplaceThemeImages](#MarketplaceThemeImages)? |  yes  |  |
 | name | string? |  yes  | Variation name |
 

---




