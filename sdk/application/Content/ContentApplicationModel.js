const Joi = require("joi");

/**
 * @typedef ApplicationLegal
 * @property {string} [application] - Application ID - Identifier for a Sales channel.
 * @property {string} [tnc] - Content for Terms and Conditions page on storefront.
 * @property {string} [policy] - Content for Privacy Policy page on storefront.
 * @property {string} [shipping] - Content for Shipping Policy page on storefront.
 * @property {string} [returns] - Content for Return policy page on storefront.
 * @property {ApplicationLegalFAQ[]} [faq] - FAQs of an application.
 * @property {string} [_id] - Unique identifier of an entry.
 * @property {string} [updated_at] - Timestamp which represent when was the last
 *   time when data was updated.
 * @property {string} [created_at] - Timestamp which represent the time when
 *   data was created.
 */

/**
 * @typedef ApplicationLegalFAQ
 * @property {string} [question] - The contents of a question of a FAQ.
 * @property {string} [answer] - The contents of a answer of a FAQ.
 */

/**
 * @typedef SeoComponent
 * @property {SeoSchema} [seo]
 */

/**
 * @typedef SeoSchema
 * @property {string} [app] - Application ID - Identifier for a Sales channel.
 * @property {string} [_id] - Unique identifier of an entry.
 * @property {string} [robots_txt] - Contents of robots.txt file of a sales channel.
 * @property {boolean} [sitemap_enabled] - Whether sitemaps is enabled or not
 *   for a sales channel's website.
 * @property {string} [additonal_sitemap] - Contents of additional sitemap.
 * @property {boolean} [cannonical_enabled] - Whether canonical tags is enabled
 *   or not for a sales channel's website.
 * @property {CustomMetaTag[]} [custom_meta_tags] - Custom meta tags for a sales
 *   channel website.
 * @property {Detail} [details]
 * @property {string} [created_at] - Timestamp which represent the time when
 *   data was created.
 * @property {string} [updated_at] - Timestamp which represent when was the last
 *   time when data was updated.
 */

/**
 * @typedef CustomMetaTag
 * @property {string} [name] - Name of the custom meta tag group.
 * @property {string} [content] - Contents of the custom meta tag group.
 * @property {string} [_id] - Unique identifier of an entry.
 */

/**
 * @typedef Detail
 * @property {string} [title] - Contents of the og:title of a sales channel website.
 * @property {string} [description] - Contents of the og:description of a sales
 *   channel website.
 * @property {string} [image_url] - URL of the og:image of a sales channel website.
 */

/**
 * @typedef SeoSchemaComponent
 * @property {SEOSchemaMarkupTemplate[]} [items] - List of SEO Markup Schemas
 *   for a sales channel website.
 */

/**
 * @typedef SEOSchemaMarkupTemplate
 * @property {string} [id] - Unique identifier for an entry.
 * @property {string} [title] - Title of the SEO Schema template.
 * @property {string} [page_type] - Page Type for the SEO Schema Template where
 *   it'll be rendered.
 * @property {string} [description] - Description of the SEO Schema Template.
 * @property {string} [schema] - Contents of the SEO Schema template in nunjucks format.
 * @property {boolean} [active] - Whether SEO Schema template is active or not.
 * @property {string} [created_at] - Timestamp which represent the time when
 *   data was created.
 * @property {string} [updated_at] - Timestamp which represent when was the last
 *   time when data was updated.
 * @property {string} [application] - Application ID - Identifier for a Sales channel.
 */

/**
 * @typedef ScheduleSchema
 * @property {string} [cron] - String representing the cron expression.
 * @property {string} [start] - Start time of schedule.
 * @property {string} [end] - End time of schedule.
 * @property {number} [duration] - Duration of the scheduled entity.
 * @property {NextSchedule[]} [next_schedule] - Details regarding the next
 *   trigger point of schedule.
 */

/**
 * @typedef NextSchedule
 * @property {string} [start] - Start time of next trigger point of schedule.
 * @property {string} [end] - End time of next trigger point of schedule.
 */

/**
 * @typedef AnnouncementSchema
 * @property {string} [announcement] - Details regarding the announcement bar contents.
 * @property {ScheduleStartSchema} [schedule]
 */

/**
 * @typedef ScheduleStartSchema
 * @property {string} [start] - Start time of schedule.
 * @property {string} [end] - End time of schedule.
 */

/**
 * @typedef BlogGetResponse
 * @property {BlogSchema[]} [items] - List of blogs with details.
 * @property {Page} [page]
 * @property {BlogFilters} [filters]
 */

/**
 * @typedef BlogFilters
 * @property {string[]} [tags] - All tags present under blogs.
 */

/**
 * @typedef ResourceContent
 * @property {string} [type] - The type of content of blogs - html.
 * @property {string} [value] - The contents of blog.
 */

/**
 * @typedef Asset
 * @property {string} [aspect_ratio] - Aspect ratio of the image.
 * @property {string} [id] - Unique identifier for an entry.
 * @property {string} [secure_url] - URL of the image.
 */

/**
 * @typedef Author
 * @property {string} [designation] - Description of the author of blog.
 * @property {string} [id] - Unique Identifier of the author of blog.
 * @property {string} [name] - Name of the author of blog.
 */

/**
 * @typedef BlogSchema
 * @property {string} [_id] - Unique identifier for an entry.
 * @property {Object} [_custom_json] - Custom JSON object for specific use cases.
 * @property {string} [application] - Application ID - Identifier for a Sales channel.
 * @property {boolean} [archived] - Boolean flag denoting whether blog is archived or not.
 * @property {Author} [author]
 * @property {ResourceContent[]} [content] - Contents of blog.
 * @property {Asset} [feature_image]
 * @property {boolean} [published] - Boolean flag denoting whether blog is
 *   published or not.
 * @property {string} [reading_time] - Estimated time required to read the blog.
 * @property {string} [slug] - A short, human-readable, URL-friendly identifier.
 * @property {string[]} [tags] - Tags under a blog.
 * @property {string} [publish_date] - Timestamp denoting when the blog was published.
 * @property {SEO} [seo]
 * @property {string} [title] - Title of the Blog.
 * @property {DateMeta} [date_meta]
 * @property {string} [summary] - A brief description of blog.
 */

/**
 * @typedef SEO
 * @property {string} [description] - The contents of og:description.
 * @property {SEOImage} [image]
 * @property {string} [title] - The contents of og:title.
 * @property {SEOMetaItem[]} [meta_tags] - List of meta tags.
 * @property {SEOSitemap} [sitemap]
 * @property {SEObreadcrumb[]} [breadcrumb] - List of action objects which can
 *   power breadcrumbs on website.
 * @property {string} [canonical_url] - The canonical URL for canonical link element.
 */

/**
 * @typedef SEOImage
 * @property {string} [url] - The url of image.
 */

/**
 * @typedef SEOMetaItem
 * @property {string} [title] - Title of the custom meta tags group.
 * @property {SEOMetaItems[]} [items] - List of key value pairs to power meta tags.
 */

/**
 * @typedef SEOMetaItems
 * @property {string} [key] - The key denoting the attribute name of SEO meta tag.
 * @property {string} [value] - The key denoting the attribute value of SEO meta tag.
 */

/**
 * @typedef SEOSitemap
 * @property {number} [priority] - Value of sitemap priority randing from 0.0 to 1.0.
 * @property {string} [frequency] - Value of sitemap frequency change denoting
 *   how frequently the content changes.
 */

/**
 * @typedef SEObreadcrumb
 * @property {string} [url] - URL of where the breadcrumb link redirects to.
 * @property {Action} [action]
 */

/**
 * @typedef DateMeta
 * @property {string} [created_on] - Timestamp which represent the time when
 *   data was created.
 * @property {string} [modified_on] - Timestamp which represent when was the
 *   last time when data was updated.
 */

/**
 * @typedef LocaleLanguage
 * @property {Language} [hi]
 * @property {Language} [ar]
 * @property {Language} [en_us]
 */

/**
 * @typedef Language
 * @property {string} [display] - Name of an entry in a specific language.
 */

/**
 * @typedef Action
 * @property {string} [type] - Type of action to be taken e.g, page.
 * @property {ActionPage} [page]
 * @property {ActionPage} [popup]
 */

/**
 * @typedef NavigationReference
 * @property {string[]} [acl] - Details regarding the authorization level to
 *   access the navigation item.
 * @property {string[]} [tags] - List of tags under a navigation link.
 * @property {LocaleLanguage} [_locale_language]
 * @property {string} [image] - URL of an image associated with a navigation link.
 * @property {string} [type] - Type of action to be taken e.g, page.
 * @property {Action} [action]
 * @property {boolean} [active] - Whether navigation is active or not.
 * @property {string} [display] - Display name of the navigation link.
 * @property {number} [sort_order] - Number denoting the position of navigation link.
 * @property {NavigationReference[]} [sub_navigation] - List of sub links and
 *   details under a navigation.
 */

/**
 * @typedef ConfigurationSchema
 * @property {number} [sleep_time] - Amount of time in seconds after which
 *   slideshow/screensaver is run.
 * @property {boolean} [start_on_launch] - Flag denoting whether screensaver
 *   needs to be shown on launch of website/app.
 * @property {number} [duration] - Duration of the slideshow/screensaver.
 * @property {string} [slide_direction] - Direction of the slideshow.
 */

/**
 * @typedef SlideshowMedia
 * @property {string} [type] - Type of Media.
 * @property {string} [url] - URL of Media where it's hosted.
 * @property {string} [bg_color] - Background colour of Media.
 * @property {number} [duration] - Amount of time in seconds for which Media has
 *   to appear.
 * @property {boolean} [auto_decide_duration] - Whether the duration for each
 *   media is to be decided by system or not. If true, it'll equally divide time
 *   in all medias.
 * @property {Action} [action]
 */

/**
 * @typedef AnnouncementsResponseSchema
 * @property {Object} [announcements] - List all the announcement bar details
 *   and its contents.
 * @property {number} [refresh_rate] - Number of seconds after which api should
 *   hit again to fetch new announcements.
 * @property {string[]} [refresh_pages] - List of page slugs on which
 *   announcement should be fetched as soon as they are loaded.
 */

/**
 * @typedef FaqResponseSchema
 * @property {FaqSchema[]} [faqs] - List of FAQs.
 */

/**
 * @typedef DataLoaderSchema
 * @property {string} [name] - Name of dataloader.
 * @property {string} [service] - Service of data loader which overrides the
 *   default method.
 * @property {string} [operation_id] - Operation ID of the method which data
 *   loader is overriding.
 * @property {string} [type] - Type of data loader.
 * @property {string} [url] - URL at which data loader redirects.
 * @property {string} [content] - Content of a data loader.
 * @property {DataLoaderSourceSchema} [__source]
 * @property {string} [_id] - Unique identifier of an entry.
 */

/**
 * @typedef DataLoaderSourceSchema
 * @property {string} [type] - Type of creator.
 * @property {string} [id] - Identifier of an extension.
 */

/**
 * @typedef DataLoadersSchema
 * @property {DataLoaderSchema[]} [items] - List of data loaders.
 */

/**
 * @typedef ContentAPIError
 * @property {string} [message] - Error message.
 * @property {number} [status] - HTTP Status code of the error.
 * @property {string} [code] - Status code of an error.
 * @property {string} [exception] - Exception class name.
 * @property {string} [info] - Details regarding the error.
 * @property {string} [request_id] - The identifier denoting request.
 * @property {string} [stack_trace] - Report of a stack frame to debug the issue.
 * @property {Object} [meta] - Metadata related to an error.
 */

/**
 * @typedef CommonError
 * @property {string} [message] - Error message.
 */

/**
 * @typedef CategorySchema
 * @property {number} [index] - Order of FAQ Category.
 * @property {string} [title] - Title of the FAQ category.
 * @property {string} [description] - Details of the FAQ category.
 * @property {string[]} [children] - List of FAQs.
 * @property {string} [_id] - Unique identifier of an entry.
 * @property {string} [slug] - A short, human-readable, URL-friendly identifier.
 * @property {string} [application] - Application ID - Identifier for a Sales channel.
 * @property {string} [icon_url] - URL of the image associated with FAQ Category.
 * @property {Object} [_custom_json] - Custom JSON object for specific use cases.
 */

/**
 * @typedef ChildrenSchema
 * @property {string} [question] - The contents of a question of a FAQ.
 * @property {string} [answer] - The contents of a answer of a FAQ.
 * @property {string} [slug] - A short, human-readable, URL-friendly identifier.
 * @property {string} [application] - Application ID - Identifier for a Sales channel.
 * @property {string} [_id] - Unique identifier of an entry.
 */

/**
 * @typedef FAQCategorySchema
 * @property {number} [index] - Order of FAQ Category.
 * @property {string} [title] - Title of a FAQ Category.
 * @property {string} [description] - Details of the FAQ category.
 * @property {ChildrenSchema[]} [children] - Details regarding a FAQs stored
 *   under a FAQs category.
 * @property {string} [_id] - Unique identifier of an entry.
 * @property {string} [slug] - A short, human-readable, URL-friendly identifier.
 * @property {string} [application] - Application ID - Identifier for a Sales channel.
 * @property {string} [icon_url] - URL of the image associated with FAQ Category.
 * @property {Object} [_custom_json] - Custom JSON object for specific use cases.
 */

/**
 * @typedef FaqSchema
 * @property {string} [slug] - A short, human-readable, URL-friendly identifier.
 * @property {string} [application] - Application ID - Identifier for a Sales channel.
 * @property {string} [_id] - Unique identifier of an entry.
 * @property {string} [question] - The contents of a question of a FAQ.
 * @property {string} [answer] - The contents of a answer of a FAQ.
 * @property {string[]} [tags] - Tags under a FAQ.
 */

/**
 * @typedef GetFaqSchema
 * @property {FaqSchema[]} [faqs] - List of FAQs.
 */

/**
 * @typedef GetFaqCategoriesSchema
 * @property {CategorySchema[]} [categories] - List of FAQ Categories.
 */

/**
 * @typedef GetFaqCategoryBySlugSchema
 * @property {FAQCategorySchema} [category]
 */

/**
 * @typedef Page
 * @property {number} [item_total] - The total number of items on the page.
 * @property {string} [next_id] - The identifier for the next page.
 * @property {boolean} [has_previous] - Indicates whether there is a previous page.
 * @property {boolean} [has_next] - Indicates whether there is a next page.
 * @property {number} [current] - The current page number.
 * @property {string} type - The type of the page, such as 'PageType'.
 * @property {number} [size] - The number of items per page.
 */

/**
 * @typedef LandingPageSchema
 * @property {string} [slug] - A short, human-readable, URL-friendly identifier.
 * @property {Action} [action]
 * @property {string[]} [platform] - List of platforms linked to this landing page.
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {string} [_id] - Unique identifier of an entry.
 * @property {string} [application] - Application ID - Identifier for a Sales channel.
 * @property {boolean} [archived] - Whether landing page is archived or not.
 * @property {Object} [_custom_json] - Custom JSON object for specific use cases.
 */

/**
 * @typedef NavigationGetResponse
 * @property {NavigationSchema[]} [items] - List of navigation items.
 * @property {Page} [page]
 */

/**
 * @typedef Orientation
 * @property {string[]} [portrait] - Data related to devices where navigation is
 *   assigned in portrait mode.
 * @property {string[]} [landscape] - Data related to devices where navigation
 *   is assigned in landscape mode.
 */

/**
 * @typedef NavigationSchema
 * @property {string} [_id] - Unique identifier of an entry.
 * @property {string} [application] - Application ID - Identifier for a Sales channel.
 * @property {boolean} [archived] - Whether navigation is archived or not.
 * @property {string} [name] - Name of the navigation link.
 * @property {string} [slug] - A short, human-readable, URL-friendly identifier.
 * @property {string[]} [platform] - Details regarding the platforms for which
 *   this navigation is to applied on.
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {Orientation} [orientation]
 * @property {number} [version] - A hardcoded key for internally managing
 *   navigation versions.
 * @property {NavigationReference[]} [navigation] - List of all navigations
 *   links and relevant details.
 */

/**
 * @typedef PageGetResponse
 * @property {PageSchema[]} [items] - List of details of custom pages.
 * @property {Page} [page]
 */

/**
 * @typedef PageSchema
 * @property {string} [_id] - Unique identifier of an entry.
 * @property {string} [application] - Application ID - Identifier for a Sales channel.
 * @property {string[]} [component_ids] - Components can be used to store
 *   multiple components.
 * @property {Object[]} [content] - Contents of a custom page.
 * @property {string} [content_path] - A CDN URL at which the entire html
 *   content can be fetched from.
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {string} [description] - Description about the page.
 * @property {Asset} [feature_image]
 * @property {Object[]} [page_meta] - List of Custom JSON object for specific use cases.
 * @property {ScheduleSchema} [_schedule]
 * @property {Object} [_custom_json] - Custom JSON object for specific use cases.
 * @property {string} [orientation] - Orientation for Custom Pages - Landscape
 *   or portrait.
 * @property {string} [platform] - Platform for Custom Pages - Denotes the device type.
 * @property {boolean} [published] - Whether page is active or not on website.
 * @property {string} [slug] - A short, human-readable, URL-friendly identifier.
 * @property {string[]} [tags] - Tags under a page.
 * @property {string} [title] - The title of the page.
 * @property {string} [type] - Type of editor through which the page was created
 *   so appropriate rendering engine is used.
 * @property {SEO} [seo]
 * @property {Object} [visibility] - Visibility of Page.
 * @property {boolean} [archived] - Flag denoting whether the page is archived or not.
 */

/**
 * @typedef CreatedBySchema
 * @property {string} [id] - Details containing the creator of custom page.
 */

/**
 * @typedef SlideshowGetResponse
 * @property {SlideshowSchema[]} [items] - Details related to slideshow/screensaver.
 * @property {Page} [page]
 */

/**
 * @typedef SlideshowSchema
 * @property {string} [_id] - Unique identifier of an entry.
 * @property {string} [slug] - Details related to slideshow/screensaver.
 * @property {DateMeta} [date_meta]
 * @property {string} [application] - Application ID - Identifier for a Sales channel.
 * @property {string} [platform] - Details related to slideshow/screensaver.
 * @property {ConfigurationSchema} [configuration]
 * @property {SlideshowMedia[]} [media] - Details related to slideshow/screensaver.
 * @property {boolean} [active] - Details related to slideshow/screensaver.
 * @property {boolean} [archived] - Whether slideshow is deleted or not.
 * @property {Object} [_custom_json] - Custom JSON object for specific use cases.
 */

/**
 * @typedef Support
 * @property {boolean} [created] - Whether support contact details are created or not.
 * @property {string} [_id] - Unique identifier of an entry.
 * @property {string} [application] - Application ID - Identifier for a Sales channel.
 * @property {string} [created_at] - Timestamp which represent the time when
 *   data was created.
 * @property {string} [updated_at] - Timestamp which represent when was the last
 *   time when data was updated.
 * @property {ContactSchema} [contact]
 */

/**
 * @typedef PhoneProperties
 * @property {string} [key] - Name of the Contact SPOC.
 * @property {string} [code] - International dial Code.
 * @property {string} [number] - Phone Number.
 * @property {string} [phone_type] - Denotes the type of phone number.
 */

/**
 * @typedef PhoneSchema
 * @property {boolean} [active] - Flag denoting whether contact detail is active or not.
 * @property {PhoneProperties[]} [phone] - Details related to phone contact of SPOC.
 */

/**
 * @typedef EmailProperties
 * @property {string} [key] - Name of email SPOC.
 * @property {string} [value] - Email Id of the SPOC.
 */

/**
 * @typedef EmailSchema
 * @property {boolean} [active] - Whether contact detail is active or not.
 * @property {EmailProperties[]} [email] - Details related to email contact of SPOC.
 */

/**
 * @typedef ContactSchema
 * @property {PhoneSchema} [phone]
 * @property {EmailSchema} [email]
 */

/**
 * @typedef TagsSchema
 * @property {string} [application] - Application ID - Identifier for a Sales channel.
 * @property {string} [_id] - Unique identifier of an entry.
 * @property {TagSchema[]} [tags] - List of Third party injectable html tags.
 */

/**
 * @typedef TagSchema
 * @property {string} [name] - Name of the html tag.
 * @property {string} [url] - URL at which css or js might be hosted.
 * @property {string} [type] - Whether Tag is JS or CSS.
 * @property {string} [sub_type] - Whether js/css is external or inline.
 * @property {string} [_id] - Unique identifier of an entry.
 * @property {string} [position] - Position where Tag is so to be placed.
 * @property {Object} [attributes] - Custom JSON object for specific use cases.
 * @property {string} [content] - Content of tag.
 * @property {Object[]} [pages] - List of all the page where tag is to be added.
 * @property {TagSourceSchema} [__source]
 */

/**
 * @typedef TagSourceSchema
 * @property {string} [type] - Type of creator of tag.
 * @property {string} [id] - Identifier of an extension.
 */

/**
 * @typedef CustomObjectFieldValue
 * @property {Object} [value] - Value of custom field.
 */

/**
 * @typedef CustomObjectListItemDefinationSchema
 * @property {string} [_id] - Unique identifier of an entry.
 * @property {string} [name] - Name of definition of custom field.
 * @property {string} [type] - Data type of the custom field.
 */

/**
 * @typedef CustomObjectFieldSchema
 * @property {string} [_id] - Unique identifier of an entry.
 * @property {string} [key] - Key of custom field inside custom object.
 * @property {CustomObjectFieldValue[]} [value] - Value of custom field inside
 *   custom object.
 * @property {string} [type] - Data type of custom field inside custom object.
 * @property {string} [definition_id] - Definition id of custom field inside
 *   custom object.
 */

/**
 * @typedef CustomObjectByIdSchema
 * @property {string} [_id] - Unique identifier of an entry.
 * @property {string} [status] - String denoting whether custom object is active
 *   or inactive.
 * @property {string} [display_name] - Unique Display name of a custom object
 *   which is system generated: Concatenation of string definition name and _id.
 * @property {CustomObjectListItemDefinationSchema} [definition]
 * @property {Object[]} [references] - List of custom fields ids where the
 *   custom object is added as a field.
 * @property {CustomObjectFieldSchema[]} [fields] - List of custom fields
 *   against a Custom Object.
 */

/**
 * @typedef CustomFieldValue
 * @property {Object} [value] - Array containing value(s) of custom field.
 */

/**
 * @typedef CustomFieldSchema
 * @property {string} [_id] - Unique identifier of an entry.
 * @property {string} [namespace] - Namespace under which custom field is present.
 * @property {string} [key] - Unique identifier for a custom field.
 * @property {string} [resource] - Type of an entity under which custom field is defined.
 * @property {string} [creator] - Denotes where the custom field has been
 *   defined - within a company or within a sales channel.
 * @property {CustomFieldValue[]} [value] - Array containing values of custom field.
 * @property {string} [resource_id] - Unique identifier for the entity under
 *   which custom field is defined.
 * @property {string} [type] - The type type of custom field.
 * @property {boolean} [multi_value] - Whether custom field can have multiple
 *   values or not.
 * @property {string} [company_id] - Unique Identifier for a company.
 * @property {string} [application_id] - Application ID - Identifier for a Sales channel.
 * @property {string} [definition_id] - Unique identifier for a custom field definition.
 * @property {boolean} [has_invalid_values] - Whether the custom field has invalid values.
 * @property {Object[]} [invalid_value_errors] - Array denoting if there's a
 *   validation failure on a custom field inside a custom object.
 * @property {string} [created_by] - Details of the owner of custom field creator.
 * @property {boolean} [is_deleted] - Whether the custom field definition is deleted.
 * @property {string} [created_at] - Timestamp which represent the time when
 *   data was created.
 * @property {string} [updated_at] - Timestamp which represent when was the last
 *   time when data was updated.
 */

/**
 * @typedef CustomFieldsResponseByResourceIdSchema
 * @property {CustomFieldSchema[]} [items] - List of custom fields against a resource.
 */

/**
 * @typedef ActionPage
 * @property {Object} [params] - Parameters that should be considered in path.
 * @property {Object} [query] - Query parameter if any to be added to the action.
 * @property {string} [url] - The URL for the action.
 * @property {PageType} type
 */

/**
 * @typedef {| "about-us"
 *   | "addresses"
 *   | "blog"
 *   | "brands"
 *   | "cards"
 *   | "cart"
 *   | "categories"
 *   | "brand"
 *   | "category"
 *   | "collection"
 *   | "collections"
 *   | "custom"
 *   | "contact-us"
 *   | "external"
 *   | "faq"
 *   | "freshchat"
 *   | "home"
 *   | "notification-settings"
 *   | "orders"
 *   | "page"
 *   | "policy"
 *   | "product"
 *   | "product-request"
 *   | "products"
 *   | "profile"
 *   | "profile-order-shipment"
 *   | "profile-basic"
 *   | "profile-company"
 *   | "profile-emails"
 *   | "profile-phones"
 *   | "rate-us"
 *   | "refer-earn"
 *   | "settings"
 *   | "shared-cart"
 *   | "tnc"
 *   | "track-order"
 *   | "wishlist"
 *   | "sections"
 *   | "form"
 *   | "cart-delivery"
 *   | "cart-payment"
 *   | "cart-review"
 *   | "login"
 *   | "register"
 *   | "shipping-policy"
 *   | "return-policy"
 *   | "order-status"
 *   | "locate-us"} PageType
 */

class ContentApplicationModel {
  /** @returns {ApplicationLegal} */
  static ApplicationLegal() {
    return Joi.object({
      application: Joi.string().allow(""),
      tnc: Joi.string().allow(""),
      policy: Joi.string().allow(""),
      shipping: Joi.string().allow(""),
      returns: Joi.string().allow(""),
      faq: Joi.array().items(ContentApplicationModel.ApplicationLegalFAQ()),
      _id: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
    });
  }

  /** @returns {ApplicationLegalFAQ} */
  static ApplicationLegalFAQ() {
    return Joi.object({
      question: Joi.string().allow(""),
      answer: Joi.string().allow(""),
    });
  }

  /** @returns {SeoComponent} */
  static SeoComponent() {
    return Joi.object({
      seo: ContentApplicationModel.SeoSchema(),
    });
  }

  /** @returns {SeoSchema} */
  static SeoSchema() {
    return Joi.object({
      app: Joi.string().allow(""),
      _id: Joi.string().allow(""),
      robots_txt: Joi.string().allow(""),
      sitemap_enabled: Joi.boolean(),
      additonal_sitemap: Joi.string().allow(""),
      cannonical_enabled: Joi.boolean(),
      custom_meta_tags: Joi.array().items(
        ContentApplicationModel.CustomMetaTag()
      ),
      details: ContentApplicationModel.Detail(),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {CustomMetaTag} */
  static CustomMetaTag() {
    return Joi.object({
      name: Joi.string().allow(""),
      content: Joi.string().allow(""),
      _id: Joi.string().allow(""),
    });
  }

  /** @returns {Detail} */
  static Detail() {
    return Joi.object({
      title: Joi.string().allow(""),
      description: Joi.string().allow(""),
      image_url: Joi.string().allow(""),
    });
  }

  /** @returns {SeoSchemaComponent} */
  static SeoSchemaComponent() {
    return Joi.object({
      items: Joi.array().items(
        ContentApplicationModel.SEOSchemaMarkupTemplate()
      ),
    });
  }

  /** @returns {SEOSchemaMarkupTemplate} */
  static SEOSchemaMarkupTemplate() {
    return Joi.object({
      id: Joi.string().allow(""),
      title: Joi.string().allow(""),
      page_type: Joi.string().allow(""),
      description: Joi.string().allow(""),
      schema: Joi.string().allow(""),
      active: Joi.boolean(),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      application: Joi.string().allow(""),
    });
  }

  /** @returns {ScheduleSchema} */
  static ScheduleSchema() {
    return Joi.object({
      cron: Joi.string().allow(""),
      start: Joi.string().allow(""),
      end: Joi.string().allow(""),
      duration: Joi.number(),
      next_schedule: Joi.array().items(ContentApplicationModel.NextSchedule()),
    });
  }

  /** @returns {NextSchedule} */
  static NextSchedule() {
    return Joi.object({
      start: Joi.string().allow(""),
      end: Joi.string().allow(""),
    });
  }

  /** @returns {AnnouncementSchema} */
  static AnnouncementSchema() {
    return Joi.object({
      announcement: Joi.string().allow(""),
      schedule: ContentApplicationModel.ScheduleStartSchema(),
    });
  }

  /** @returns {ScheduleStartSchema} */
  static ScheduleStartSchema() {
    return Joi.object({
      start: Joi.string().allow(""),
      end: Joi.string().allow(""),
    });
  }

  /** @returns {BlogGetResponse} */
  static BlogGetResponse() {
    return Joi.object({
      items: Joi.array().items(ContentApplicationModel.BlogSchema()),
      page: ContentApplicationModel.Page(),
      filters: ContentApplicationModel.BlogFilters(),
    });
  }

  /** @returns {BlogFilters} */
  static BlogFilters() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {ResourceContent} */
  static ResourceContent() {
    return Joi.object({
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {Asset} */
  static Asset() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),
      id: Joi.string().allow(""),
      secure_url: Joi.string().allow(""),
    });
  }

  /** @returns {Author} */
  static Author() {
    return Joi.object({
      designation: Joi.string().allow(""),
      id: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {BlogSchema} */
  static BlogSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      _custom_json: Joi.any(),
      application: Joi.string().allow(""),
      archived: Joi.boolean(),
      author: ContentApplicationModel.Author(),
      content: Joi.array().items(ContentApplicationModel.ResourceContent()),
      feature_image: ContentApplicationModel.Asset(),
      published: Joi.boolean(),
      reading_time: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      publish_date: Joi.string().allow(""),
      seo: ContentApplicationModel.SEO(),
      title: Joi.string().allow(""),
      date_meta: ContentApplicationModel.DateMeta(),
      summary: Joi.string().allow(""),
    });
  }

  /** @returns {SEO} */
  static SEO() {
    return Joi.object({
      description: Joi.string().allow(""),
      image: ContentApplicationModel.SEOImage(),
      title: Joi.string().allow(""),
      meta_tags: Joi.array().items(ContentApplicationModel.SEOMetaItem()),
      sitemap: ContentApplicationModel.SEOSitemap(),
      breadcrumb: Joi.array().items(ContentApplicationModel.SEObreadcrumb()),
      canonical_url: Joi.string().allow(""),
    });
  }

  /** @returns {SEOImage} */
  static SEOImage() {
    return Joi.object({
      url: Joi.string().allow(""),
    });
  }

  /** @returns {SEOMetaItem} */
  static SEOMetaItem() {
    return Joi.object({
      title: Joi.string().allow(""),
      items: Joi.array().items(ContentApplicationModel.SEOMetaItems()),
    });
  }

  /** @returns {SEOMetaItems} */
  static SEOMetaItems() {
    return Joi.object({
      key: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {SEOSitemap} */
  static SEOSitemap() {
    return Joi.object({
      priority: Joi.number(),
      frequency: Joi.string().allow(""),
    });
  }

  /** @returns {SEObreadcrumb} */
  static SEObreadcrumb() {
    return Joi.object({
      url: Joi.string().allow(""),
      action: ContentApplicationModel.Action(),
    });
  }

  /** @returns {DateMeta} */
  static DateMeta() {
    return Joi.object({
      created_on: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
    });
  }

  /** @returns {LocaleLanguage} */
  static LocaleLanguage() {
    return Joi.object({
      hi: ContentApplicationModel.Language(),
      ar: ContentApplicationModel.Language(),
      en_us: ContentApplicationModel.Language(),
    });
  }

  /** @returns {Language} */
  static Language() {
    return Joi.object({
      display: Joi.string().allow(""),
    });
  }

  /** @returns {Action} */
  static Action() {
    return Joi.object({
      type: Joi.string().allow(""),
      page: ContentApplicationModel.ActionPage(),
      popup: ContentApplicationModel.ActionPage(),
    });
  }

  /** @returns {NavigationReference} */
  static NavigationReference() {
    return Joi.object({
      acl: Joi.array().items(Joi.string().allow("")),
      tags: Joi.array().items(Joi.string().allow("")),
      _locale_language: ContentApplicationModel.LocaleLanguage(),
      image: Joi.string().allow(""),
      type: Joi.string().allow(""),
      action: ContentApplicationModel.Action(),
      active: Joi.boolean(),
      display: Joi.string().allow(""),
      sort_order: Joi.number(),
      sub_navigation: Joi.array().items(Joi.link("#NavigationReference")),
    }).id("NavigationReference");
  }

  /** @returns {ConfigurationSchema} */
  static ConfigurationSchema() {
    return Joi.object({
      sleep_time: Joi.number(),
      start_on_launch: Joi.boolean(),
      duration: Joi.number(),
      slide_direction: Joi.string().allow(""),
    });
  }

  /** @returns {SlideshowMedia} */
  static SlideshowMedia() {
    return Joi.object({
      type: Joi.string().allow(""),
      url: Joi.string().allow(""),
      bg_color: Joi.string().allow(""),
      duration: Joi.number(),
      auto_decide_duration: Joi.boolean(),
      action: ContentApplicationModel.Action(),
    });
  }

  /** @returns {AnnouncementsResponseSchema} */
  static AnnouncementsResponseSchema() {
    return Joi.object({
      announcements: Joi.object().pattern(
        /\S/,
        Joi.array().items(ContentApplicationModel.AnnouncementSchema())
      ),
      refresh_rate: Joi.number(),
      refresh_pages: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {FaqResponseSchema} */
  static FaqResponseSchema() {
    return Joi.object({
      faqs: Joi.array().items(ContentApplicationModel.FaqSchema()),
    });
  }

  /** @returns {DataLoaderSchema} */
  static DataLoaderSchema() {
    return Joi.object({
      name: Joi.string().allow(""),
      service: Joi.string().allow(""),
      operation_id: Joi.string().allow(""),
      type: Joi.string().allow(""),
      url: Joi.string().allow(""),
      content: Joi.string().allow(""),
      __source: ContentApplicationModel.DataLoaderSourceSchema(),
      _id: Joi.string().allow(""),
    });
  }

  /** @returns {DataLoaderSourceSchema} */
  static DataLoaderSourceSchema() {
    return Joi.object({
      type: Joi.string().allow(""),
      id: Joi.string().allow(""),
    });
  }

  /** @returns {DataLoadersSchema} */
  static DataLoadersSchema() {
    return Joi.object({
      items: Joi.array().items(ContentApplicationModel.DataLoaderSchema()),
    });
  }

  /** @returns {ContentAPIError} */
  static ContentAPIError() {
    return Joi.object({
      message: Joi.string().allow(""),
      status: Joi.number(),
      code: Joi.string().allow(""),
      exception: Joi.string().allow(""),
      info: Joi.string().allow(""),
      request_id: Joi.string().allow(""),
      stack_trace: Joi.string().allow(""),
      meta: Joi.any(),
    });
  }

  /** @returns {CommonError} */
  static CommonError() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {CategorySchema} */
  static CategorySchema() {
    return Joi.object({
      index: Joi.number(),
      title: Joi.string().allow(""),
      description: Joi.string().allow(""),
      children: Joi.array().items(Joi.string().allow("")),
      _id: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      application: Joi.string().allow(""),
      icon_url: Joi.string().allow(""),
      _custom_json: Joi.any(),
    });
  }

  /** @returns {ChildrenSchema} */
  static ChildrenSchema() {
    return Joi.object({
      question: Joi.string().allow(""),
      answer: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      application: Joi.string().allow(""),
      _id: Joi.string().allow(""),
    });
  }

  /** @returns {FAQCategorySchema} */
  static FAQCategorySchema() {
    return Joi.object({
      index: Joi.number(),
      title: Joi.string().allow(""),
      description: Joi.string().allow(""),
      children: Joi.array().items(ContentApplicationModel.ChildrenSchema()),
      _id: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      application: Joi.string().allow(""),
      icon_url: Joi.string().allow(""),
      _custom_json: Joi.any(),
    });
  }

  /** @returns {FaqSchema} */
  static FaqSchema() {
    return Joi.object({
      slug: Joi.string().allow(""),
      application: Joi.string().allow(""),
      _id: Joi.string().allow(""),
      question: Joi.string().allow(""),
      answer: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {GetFaqSchema} */
  static GetFaqSchema() {
    return Joi.object({
      faqs: Joi.array().items(ContentApplicationModel.FaqSchema()),
    });
  }

  /** @returns {GetFaqCategoriesSchema} */
  static GetFaqCategoriesSchema() {
    return Joi.object({
      categories: Joi.array().items(ContentApplicationModel.CategorySchema()),
    });
  }

  /** @returns {GetFaqCategoryBySlugSchema} */
  static GetFaqCategoryBySlugSchema() {
    return Joi.object({
      category: ContentApplicationModel.FAQCategorySchema(),
    });
  }

  /** @returns {Page} */
  static Page() {
    return Joi.object({
      item_total: Joi.number(),
      next_id: Joi.string().allow(""),
      has_previous: Joi.boolean(),
      has_next: Joi.boolean(),
      current: Joi.number(),
      type: Joi.string().allow("").required(),
      size: Joi.number(),
    });
  }

  /** @returns {LandingPageSchema} */
  static LandingPageSchema() {
    return Joi.object({
      slug: Joi.string().allow(""),
      action: ContentApplicationModel.Action(),
      platform: Joi.array().items(Joi.string().allow("")),
      created_by: ContentApplicationModel.CreatedBySchema(),
      date_meta: ContentApplicationModel.DateMeta(),
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      archived: Joi.boolean(),
      _custom_json: Joi.any(),
    });
  }

  /** @returns {NavigationGetResponse} */
  static NavigationGetResponse() {
    return Joi.object({
      items: Joi.array().items(ContentApplicationModel.NavigationSchema()),
      page: ContentApplicationModel.Page(),
    });
  }

  /** @returns {Orientation} */
  static Orientation() {
    return Joi.object({
      portrait: Joi.array().items(Joi.string().allow("")),
      landscape: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {NavigationSchema} */
  static NavigationSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      archived: Joi.boolean(),
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      platform: Joi.array().items(Joi.string().allow("")),
      created_by: ContentApplicationModel.CreatedBySchema(),
      date_meta: ContentApplicationModel.DateMeta(),
      orientation: ContentApplicationModel.Orientation(),
      version: Joi.number(),
      navigation: Joi.array().items(
        ContentApplicationModel.NavigationReference()
      ),
    });
  }

  /** @returns {PageGetResponse} */
  static PageGetResponse() {
    return Joi.object({
      items: Joi.array().items(ContentApplicationModel.PageSchema()),
      page: ContentApplicationModel.Page(),
    });
  }

  /** @returns {PageSchema} */
  static PageSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      component_ids: Joi.array().items(Joi.string().allow("")),
      content: Joi.array().items(Joi.any()),
      content_path: Joi.string().allow(""),
      created_by: ContentApplicationModel.CreatedBySchema(),
      date_meta: ContentApplicationModel.DateMeta(),
      description: Joi.string().allow(""),
      feature_image: ContentApplicationModel.Asset(),
      page_meta: Joi.array().items(Joi.any()),
      _schedule: ContentApplicationModel.ScheduleSchema(),
      _custom_json: Joi.any(),
      orientation: Joi.string().allow(""),
      platform: Joi.string().allow(""),
      published: Joi.boolean(),
      slug: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      title: Joi.string().allow(""),
      type: Joi.string().allow(""),
      seo: ContentApplicationModel.SEO(),
      visibility: Joi.any(),
      archived: Joi.boolean(),
    });
  }

  /** @returns {CreatedBySchema} */
  static CreatedBySchema() {
    return Joi.object({
      id: Joi.string().allow(""),
    });
  }

  /** @returns {SlideshowGetResponse} */
  static SlideshowGetResponse() {
    return Joi.object({
      items: Joi.array().items(ContentApplicationModel.SlideshowSchema()),
      page: ContentApplicationModel.Page(),
    });
  }

  /** @returns {SlideshowSchema} */
  static SlideshowSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      date_meta: ContentApplicationModel.DateMeta(),
      application: Joi.string().allow(""),
      platform: Joi.string().allow(""),
      configuration: ContentApplicationModel.ConfigurationSchema(),
      media: Joi.array().items(ContentApplicationModel.SlideshowMedia()),
      active: Joi.boolean(),
      archived: Joi.boolean(),
      _custom_json: Joi.any(),
    });
  }

  /** @returns {Support} */
  static Support() {
    return Joi.object({
      created: Joi.boolean(),
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      contact: ContentApplicationModel.ContactSchema(),
    });
  }

  /** @returns {PhoneProperties} */
  static PhoneProperties() {
    return Joi.object({
      key: Joi.string().allow(""),
      code: Joi.string().allow(""),
      number: Joi.string().allow(""),
      phone_type: Joi.string().allow(""),
    });
  }

  /** @returns {PhoneSchema} */
  static PhoneSchema() {
    return Joi.object({
      active: Joi.boolean(),
      phone: Joi.array().items(ContentApplicationModel.PhoneProperties()),
    });
  }

  /** @returns {EmailProperties} */
  static EmailProperties() {
    return Joi.object({
      key: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {EmailSchema} */
  static EmailSchema() {
    return Joi.object({
      active: Joi.boolean(),
      email: Joi.array().items(ContentApplicationModel.EmailProperties()),
    });
  }

  /** @returns {ContactSchema} */
  static ContactSchema() {
    return Joi.object({
      phone: ContentApplicationModel.PhoneSchema(),
      email: ContentApplicationModel.EmailSchema(),
    });
  }

  /** @returns {TagsSchema} */
  static TagsSchema() {
    return Joi.object({
      application: Joi.string().allow(""),
      _id: Joi.string().allow(""),
      tags: Joi.array().items(ContentApplicationModel.TagSchema()),
    });
  }

  /** @returns {TagSchema} */
  static TagSchema() {
    return Joi.object({
      name: Joi.string().allow(""),
      url: Joi.string().allow(""),
      type: Joi.string().allow(""),
      sub_type: Joi.string().allow(""),
      _id: Joi.string().allow(""),
      position: Joi.string().allow(""),
      attributes: Joi.any(),
      content: Joi.string().allow(""),
      pages: Joi.array().items(Joi.any()),
      __source: ContentApplicationModel.TagSourceSchema(),
    });
  }

  /** @returns {TagSourceSchema} */
  static TagSourceSchema() {
    return Joi.object({
      type: Joi.string().allow(""),
      id: Joi.string().allow(""),
    });
  }

  /** @returns {CustomObjectFieldValue} */
  static CustomObjectFieldValue() {
    return Joi.object({
      value: Joi.any(),
    });
  }

  /** @returns {CustomObjectListItemDefinationSchema} */
  static CustomObjectListItemDefinationSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {CustomObjectFieldSchema} */
  static CustomObjectFieldSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      key: Joi.string().allow(""),
      value: Joi.array().items(
        ContentApplicationModel.CustomObjectFieldValue()
      ),
      type: Joi.string().allow(""),
      definition_id: Joi.string().allow(""),
    });
  }

  /** @returns {CustomObjectByIdSchema} */
  static CustomObjectByIdSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      status: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      definition: ContentApplicationModel.CustomObjectListItemDefinationSchema(),
      references: Joi.array().items(Joi.any()),
      fields: Joi.array().items(
        ContentApplicationModel.CustomObjectFieldSchema()
      ),
    });
  }

  /** @returns {CustomFieldValue} */
  static CustomFieldValue() {
    return Joi.object({
      value: Joi.any(),
    });
  }

  /** @returns {CustomFieldSchema} */
  static CustomFieldSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      namespace: Joi.string().allow(""),
      key: Joi.string().allow(""),
      resource: Joi.string().allow(""),
      creator: Joi.string().allow(""),
      value: Joi.array().items(ContentApplicationModel.CustomFieldValue()),
      resource_id: Joi.string().allow(""),
      type: Joi.string().allow(""),
      multi_value: Joi.boolean(),
      company_id: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
      definition_id: Joi.string().allow(""),
      has_invalid_values: Joi.boolean(),
      invalid_value_errors: Joi.array().items(Joi.any()),
      created_by: Joi.string().allow(""),
      is_deleted: Joi.boolean(),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {CustomFieldsResponseByResourceIdSchema} */
  static CustomFieldsResponseByResourceIdSchema() {
    return Joi.object({
      items: Joi.array().items(ContentApplicationModel.CustomFieldSchema()),
    });
  }

  /** @returns {ActionPage} */
  static ActionPage() {
    return Joi.object({
      params: Joi.object().pattern(
        /\S/,
        Joi.array().items(Joi.string().allow(""))
      ),
      query: Joi.object().pattern(
        /\S/,
        Joi.array().items(Joi.string().allow(""))
      ),
      url: Joi.string().allow(""),
      type: ContentApplicationModel.PageType().required(),
    });
  }

  /**
   * Enum: PageType Used By: Content
   *
   * @returns {PageType}
   */
  static PageType() {
    return Joi.string().valid(
      "about-us",

      "addresses",

      "blog",

      "brands",

      "cards",

      "cart",

      "categories",

      "brand",

      "category",

      "collection",

      "collections",

      "custom",

      "contact-us",

      "external",

      "faq",

      "freshchat",

      "home",

      "notification-settings",

      "orders",

      "page",

      "policy",

      "product",

      "product-request",

      "products",

      "profile",

      "profile-order-shipment",

      "profile-basic",

      "profile-company",

      "profile-emails",

      "profile-phones",

      "rate-us",

      "refer-earn",

      "settings",

      "shared-cart",

      "tnc",

      "track-order",

      "wishlist",

      "sections",

      "form",

      "cart-delivery",

      "cart-payment",

      "cart-review",

      "login",

      "register",

      "shipping-policy",

      "return-policy",

      "order-status",

      "locate-us"
    );
  }
}
module.exports = ContentApplicationModel;
