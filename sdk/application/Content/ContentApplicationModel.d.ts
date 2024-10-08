export = ContentApplicationModel;
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
declare class ContentApplicationModel {
}
declare namespace ContentApplicationModel {
    export { ApplicationLegal, ApplicationLegalFAQ, SeoComponent, SeoSchema, CustomMetaTag, Detail, SeoSchemaComponent, SEOSchemaMarkupTemplate, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, BlogFilters, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, SEOMetaItem, SEOMetaItems, SEOSitemap, SEObreadcrumb, DateMeta, LocaleLanguage, Language, Action, NavigationReference, ConfigurationSchema, SlideshowMedia, AnnouncementsResponseSchema, FaqResponseSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, FAQCategorySchema, FaqSchema, GetFaqSchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, Page, LandingPageSchema, NavigationGetResponse, Orientation, NavigationSchema, PageGetResponse, PageSchema, CreatedBySchema, SlideshowGetResponse, SlideshowSchema, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, CustomObjectFieldValue, CustomObjectListItemDefinationSchema, CustomObjectFieldSchema, CustomObjectByIdSchema, CustomFieldValue, CustomFieldSchema, CustomFieldsResponseByResourceIdSchema, ActionPage, PageType };
}
/** @returns {ApplicationLegal} */
declare function ApplicationLegal(): ApplicationLegal;
type ApplicationLegal = {
    /**
     * - Application ID - Identifier for a Sales channel.
     */
    application?: string;
    /**
     * - Content for Terms and Conditions page on storefront.
     */
    tnc?: string;
    /**
     * - Content for Privacy Policy page on storefront.
     */
    policy?: string;
    /**
     * - Content for Shipping Policy page on storefront.
     */
    shipping?: string;
    /**
     * - Content for Return policy page on storefront.
     */
    returns?: string;
    /**
     * - FAQs of an application.
     */
    faq?: ApplicationLegalFAQ[];
    /**
     * - Unique identifier of an entry.
     */
    _id?: string;
    /**
     * - Timestamp which represent when was the last
     * time when data was updated.
     */
    updated_at?: string;
    /**
     * - Timestamp which represent the time when
     * data was created.
     */
    created_at?: string;
};
/** @returns {ApplicationLegalFAQ} */
declare function ApplicationLegalFAQ(): ApplicationLegalFAQ;
type ApplicationLegalFAQ = {
    /**
     * - The contents of a question of a FAQ.
     */
    question?: string;
    /**
     * - The contents of a answer of a FAQ.
     */
    answer?: string;
};
/** @returns {SeoComponent} */
declare function SeoComponent(): SeoComponent;
type SeoComponent = {
    seo?: SeoSchema;
};
/** @returns {SeoSchema} */
declare function SeoSchema(): SeoSchema;
type SeoSchema = {
    /**
     * - Application ID - Identifier for a Sales channel.
     */
    app?: string;
    /**
     * - Unique identifier of an entry.
     */
    _id?: string;
    /**
     * - Contents of robots.txt file of a sales channel.
     */
    robots_txt?: string;
    /**
     * - Whether sitemaps is enabled or not
     * for a sales channel's website.
     */
    sitemap_enabled?: boolean;
    /**
     * - Contents of additional sitemap.
     */
    additonal_sitemap?: string;
    /**
     * - Whether canonical tags is enabled
     * or not for a sales channel's website.
     */
    cannonical_enabled?: boolean;
    /**
     * - Custom meta tags for a sales
     * channel website.
     */
    custom_meta_tags?: CustomMetaTag[];
    details?: Detail;
    /**
     * - Timestamp which represent the time when
     * data was created.
     */
    created_at?: string;
    /**
     * - Timestamp which represent when was the last
     * time when data was updated.
     */
    updated_at?: string;
};
/** @returns {CustomMetaTag} */
declare function CustomMetaTag(): CustomMetaTag;
type CustomMetaTag = {
    /**
     * - Name of the custom meta tag group.
     */
    name?: string;
    /**
     * - Contents of the custom meta tag group.
     */
    content?: string;
    /**
     * - Unique identifier of an entry.
     */
    _id?: string;
};
/** @returns {Detail} */
declare function Detail(): Detail;
type Detail = {
    /**
     * - Contents of the og:title of a sales channel website.
     */
    title?: string;
    /**
     * - Contents of the og:description of a sales
     * channel website.
     */
    description?: string;
    /**
     * - URL of the og:image of a sales channel website.
     */
    image_url?: string;
};
/** @returns {SeoSchemaComponent} */
declare function SeoSchemaComponent(): SeoSchemaComponent;
type SeoSchemaComponent = {
    /**
     * - List of SEO Markup Schemas
     * for a sales channel website.
     */
    items?: SEOSchemaMarkupTemplate[];
};
/** @returns {SEOSchemaMarkupTemplate} */
declare function SEOSchemaMarkupTemplate(): SEOSchemaMarkupTemplate;
type SEOSchemaMarkupTemplate = {
    /**
     * - Unique identifier for an entry.
     */
    id?: string;
    /**
     * - Title of the SEO Schema template.
     */
    title?: string;
    /**
     * - Page Type for the SEO Schema Template where
     * it'll be rendered.
     */
    page_type?: string;
    /**
     * - Description of the SEO Schema Template.
     */
    description?: string;
    /**
     * - Contents of the SEO Schema template in nunjucks format.
     */
    schema?: string;
    /**
     * - Whether SEO Schema template is active or not.
     */
    active?: boolean;
    /**
     * - Timestamp which represent the time when
     * data was created.
     */
    created_at?: string;
    /**
     * - Timestamp which represent when was the last
     * time when data was updated.
     */
    updated_at?: string;
    /**
     * - Application ID - Identifier for a Sales channel.
     */
    application?: string;
};
/** @returns {ScheduleSchema} */
declare function ScheduleSchema(): ScheduleSchema;
type ScheduleSchema = {
    /**
     * - String representing the cron expression.
     */
    cron?: string;
    /**
     * - Start time of schedule.
     */
    start?: string;
    /**
     * - End time of schedule.
     */
    end?: string;
    /**
     * - Duration of the scheduled entity.
     */
    duration?: number;
    /**
     * - Details regarding the next
     * trigger point of schedule.
     */
    next_schedule?: NextSchedule[];
};
/** @returns {NextSchedule} */
declare function NextSchedule(): NextSchedule;
type NextSchedule = {
    /**
     * - Start time of next trigger point of schedule.
     */
    start?: string;
    /**
     * - End time of next trigger point of schedule.
     */
    end?: string;
};
/** @returns {AnnouncementSchema} */
declare function AnnouncementSchema(): AnnouncementSchema;
type AnnouncementSchema = {
    /**
     * - Details regarding the announcement bar contents.
     */
    announcement?: string;
    schedule?: ScheduleStartSchema;
};
/** @returns {ScheduleStartSchema} */
declare function ScheduleStartSchema(): ScheduleStartSchema;
type ScheduleStartSchema = {
    /**
     * - Start time of schedule.
     */
    start?: string;
    /**
     * - End time of schedule.
     */
    end?: string;
};
/** @returns {BlogGetResponse} */
declare function BlogGetResponse(): BlogGetResponse;
type BlogGetResponse = {
    /**
     * - List of blogs with details.
     */
    items?: BlogSchema[];
    page?: Page;
    filters?: BlogFilters;
};
/** @returns {BlogFilters} */
declare function BlogFilters(): BlogFilters;
type BlogFilters = {
    /**
     * - All tags present under blogs.
     */
    tags?: string[];
};
/** @returns {ResourceContent} */
declare function ResourceContent(): ResourceContent;
type ResourceContent = {
    /**
     * - The type of content of blogs - html.
     */
    type?: string;
    /**
     * - The contents of blog.
     */
    value?: string;
};
/** @returns {Asset} */
declare function Asset(): Asset;
type Asset = {
    /**
     * - Aspect ratio of the image.
     */
    aspect_ratio?: string;
    /**
     * - Unique identifier for an entry.
     */
    id?: string;
    /**
     * - URL of the image.
     */
    secure_url?: string;
};
/** @returns {Author} */
declare function Author(): Author;
type Author = {
    /**
     * - Description of the author of blog.
     */
    designation?: string;
    /**
     * - Unique Identifier of the author of blog.
     */
    id?: string;
    /**
     * - Name of the author of blog.
     */
    name?: string;
};
/** @returns {BlogSchema} */
declare function BlogSchema(): BlogSchema;
type BlogSchema = {
    /**
     * - Unique identifier for an entry.
     */
    _id?: string;
    /**
     * - Custom JSON object for specific use cases.
     */
    _custom_json?: any;
    /**
     * - Application ID - Identifier for a Sales channel.
     */
    application?: string;
    /**
     * - Boolean flag denoting whether blog is archived or not.
     */
    archived?: boolean;
    author?: Author;
    /**
     * - Contents of blog.
     */
    content?: ResourceContent[];
    feature_image?: Asset;
    /**
     * - Boolean flag denoting whether blog is
     * published or not.
     */
    published?: boolean;
    /**
     * - Estimated time required to read the blog.
     */
    reading_time?: string;
    /**
     * - A short, human-readable, URL-friendly identifier.
     */
    slug?: string;
    /**
     * - Tags under a blog.
     */
    tags?: string[];
    /**
     * - Timestamp denoting when the blog was published.
     */
    publish_date?: string;
    seo?: SEO;
    /**
     * - Title of the Blog.
     */
    title?: string;
    date_meta?: DateMeta;
    /**
     * - A brief description of blog.
     */
    summary?: string;
};
/** @returns {SEO} */
declare function SEO(): SEO;
type SEO = {
    /**
     * - The contents of og:description.
     */
    description?: string;
    image?: SEOImage;
    /**
     * - The contents of og:title.
     */
    title?: string;
    /**
     * - List of meta tags.
     */
    meta_tags?: SEOMetaItem[];
    sitemap?: SEOSitemap;
    /**
     * - List of action objects which can
     * power breadcrumbs on website.
     */
    breadcrumb?: SEObreadcrumb[];
    /**
     * - The canonical URL for canonical link element.
     */
    canonical_url?: string;
};
/** @returns {SEOImage} */
declare function SEOImage(): SEOImage;
type SEOImage = {
    /**
     * - The url of image.
     */
    url?: string;
};
/** @returns {SEOMetaItem} */
declare function SEOMetaItem(): SEOMetaItem;
type SEOMetaItem = {
    /**
     * - Title of the custom meta tags group.
     */
    title?: string;
    /**
     * - List of key value pairs to power meta tags.
     */
    items?: SEOMetaItems[];
};
/** @returns {SEOMetaItems} */
declare function SEOMetaItems(): SEOMetaItems;
type SEOMetaItems = {
    /**
     * - The key denoting the attribute name of SEO meta tag.
     */
    key?: string;
    /**
     * - The key denoting the attribute value of SEO meta tag.
     */
    value?: string;
};
/** @returns {SEOSitemap} */
declare function SEOSitemap(): SEOSitemap;
type SEOSitemap = {
    /**
     * - Value of sitemap priority randing from 0.0 to 1.0.
     */
    priority?: number;
    /**
     * - Value of sitemap frequency change denoting
     * how frequently the content changes.
     */
    frequency?: string;
};
/** @returns {SEObreadcrumb} */
declare function SEObreadcrumb(): SEObreadcrumb;
type SEObreadcrumb = {
    /**
     * - URL of where the breadcrumb link redirects to.
     */
    url?: string;
    action?: Action;
};
/** @returns {DateMeta} */
declare function DateMeta(): DateMeta;
type DateMeta = {
    /**
     * - Timestamp which represent the time when
     * data was created.
     */
    created_on?: string;
    /**
     * - Timestamp which represent when was the
     * last time when data was updated.
     */
    modified_on?: string;
};
/** @returns {LocaleLanguage} */
declare function LocaleLanguage(): LocaleLanguage;
type LocaleLanguage = {
    hi?: Language;
    ar?: Language;
    en_us?: Language;
};
/** @returns {Language} */
declare function Language(): Language;
type Language = {
    /**
     * - Name of an entry in a specific language.
     */
    display?: string;
};
/** @returns {Action} */
declare function Action(): Action;
type Action = {
    /**
     * - Type of action to be taken e.g, page.
     */
    type?: string;
    page?: ActionPage;
    popup?: ActionPage;
};
/** @returns {NavigationReference} */
declare function NavigationReference(): NavigationReference;
type NavigationReference = {
    /**
     * - Details regarding the authorization level to
     * access the navigation item.
     */
    acl?: string[];
    /**
     * - List of tags under a navigation link.
     */
    tags?: string[];
    _locale_language?: LocaleLanguage;
    /**
     * - URL of an image associated with a navigation link.
     */
    image?: string;
    /**
     * - Type of action to be taken e.g, page.
     */
    type?: string;
    action?: Action;
    /**
     * - Whether navigation is active or not.
     */
    active?: boolean;
    /**
     * - Display name of the navigation link.
     */
    display?: string;
    /**
     * - Number denoting the position of navigation link.
     */
    sort_order?: number;
    /**
     * - List of sub links and
     * details under a navigation.
     */
    sub_navigation?: NavigationReference[];
};
/** @returns {ConfigurationSchema} */
declare function ConfigurationSchema(): ConfigurationSchema;
type ConfigurationSchema = {
    /**
     * - Amount of time in seconds after which
     * slideshow/screensaver is run.
     */
    sleep_time?: number;
    /**
     * - Flag denoting whether screensaver
     * needs to be shown on launch of website/app.
     */
    start_on_launch?: boolean;
    /**
     * - Duration of the slideshow/screensaver.
     */
    duration?: number;
    /**
     * - Direction of the slideshow.
     */
    slide_direction?: string;
};
/** @returns {SlideshowMedia} */
declare function SlideshowMedia(): SlideshowMedia;
type SlideshowMedia = {
    /**
     * - Type of Media.
     */
    type?: string;
    /**
     * - URL of Media where it's hosted.
     */
    url?: string;
    /**
     * - Background colour of Media.
     */
    bg_color?: string;
    /**
     * - Amount of time in seconds for which Media has
     * to appear.
     */
    duration?: number;
    /**
     * - Whether the duration for each
     * media is to be decided by system or not. If true, it'll equally divide time
     * in all medias.
     */
    auto_decide_duration?: boolean;
    action?: Action;
};
/** @returns {AnnouncementsResponseSchema} */
declare function AnnouncementsResponseSchema(): AnnouncementsResponseSchema;
type AnnouncementsResponseSchema = {
    /**
     * - List all the announcement bar details
     * and its contents.
     */
    announcements?: any;
    /**
     * - Number of seconds after which api should
     * hit again to fetch new announcements.
     */
    refresh_rate?: number;
    /**
     * - List of page slugs on which
     * announcement should be fetched as soon as they are loaded.
     */
    refresh_pages?: string[];
};
/** @returns {FaqResponseSchema} */
declare function FaqResponseSchema(): FaqResponseSchema;
type FaqResponseSchema = {
    /**
     * - List of FAQs.
     */
    faqs?: FaqSchema[];
};
/** @returns {DataLoaderSchema} */
declare function DataLoaderSchema(): DataLoaderSchema;
type DataLoaderSchema = {
    /**
     * - Name of dataloader.
     */
    name?: string;
    /**
     * - Service of data loader which overrides the
     * default method.
     */
    service?: string;
    /**
     * - Operation ID of the method which data
     * loader is overriding.
     */
    operation_id?: string;
    /**
     * - Type of data loader.
     */
    type?: string;
    /**
     * - URL at which data loader redirects.
     */
    url?: string;
    /**
     * - Content of a data loader.
     */
    content?: string;
    __source?: DataLoaderSourceSchema;
    /**
     * - Unique identifier of an entry.
     */
    _id?: string;
};
/** @returns {DataLoaderSourceSchema} */
declare function DataLoaderSourceSchema(): DataLoaderSourceSchema;
type DataLoaderSourceSchema = {
    /**
     * - Type of creator.
     */
    type?: string;
    /**
     * - Identifier of an extension.
     */
    id?: string;
};
/** @returns {DataLoadersSchema} */
declare function DataLoadersSchema(): DataLoadersSchema;
type DataLoadersSchema = {
    /**
     * - List of data loaders.
     */
    items?: DataLoaderSchema[];
};
/** @returns {ContentAPIError} */
declare function ContentAPIError(): ContentAPIError;
type ContentAPIError = {
    /**
     * - Error message.
     */
    message?: string;
    /**
     * - HTTP Status code of the error.
     */
    status?: number;
    /**
     * - Status code of an error.
     */
    code?: string;
    /**
     * - Exception class name.
     */
    exception?: string;
    /**
     * - Details regarding the error.
     */
    info?: string;
    /**
     * - The identifier denoting request.
     */
    request_id?: string;
    /**
     * - Report of a stack frame to debug the issue.
     */
    stack_trace?: string;
    /**
     * - Metadata related to an error.
     */
    meta?: any;
};
/** @returns {CommonError} */
declare function CommonError(): CommonError;
type CommonError = {
    /**
     * - Error message.
     */
    message?: string;
};
/** @returns {CategorySchema} */
declare function CategorySchema(): CategorySchema;
type CategorySchema = {
    /**
     * - Order of FAQ Category.
     */
    index?: number;
    /**
     * - Title of the FAQ category.
     */
    title?: string;
    /**
     * - Details of the FAQ category.
     */
    description?: string;
    /**
     * - List of FAQs.
     */
    children?: string[];
    /**
     * - Unique identifier of an entry.
     */
    _id?: string;
    /**
     * - A short, human-readable, URL-friendly identifier.
     */
    slug?: string;
    /**
     * - Application ID - Identifier for a Sales channel.
     */
    application?: string;
    /**
     * - URL of the image associated with FAQ Category.
     */
    icon_url?: string;
    /**
     * - Custom JSON object for specific use cases.
     */
    _custom_json?: any;
};
/** @returns {ChildrenSchema} */
declare function ChildrenSchema(): ChildrenSchema;
type ChildrenSchema = {
    /**
     * - The contents of a question of a FAQ.
     */
    question?: string;
    /**
     * - The contents of a answer of a FAQ.
     */
    answer?: string;
    /**
     * - A short, human-readable, URL-friendly identifier.
     */
    slug?: string;
    /**
     * - Application ID - Identifier for a Sales channel.
     */
    application?: string;
    /**
     * - Unique identifier of an entry.
     */
    _id?: string;
};
/** @returns {FAQCategorySchema} */
declare function FAQCategorySchema(): FAQCategorySchema;
type FAQCategorySchema = {
    /**
     * - Order of FAQ Category.
     */
    index?: number;
    /**
     * - Title of a FAQ Category.
     */
    title?: string;
    /**
     * - Details of the FAQ category.
     */
    description?: string;
    /**
     * - Details regarding a FAQs stored
     * under a FAQs category.
     */
    children?: ChildrenSchema[];
    /**
     * - Unique identifier of an entry.
     */
    _id?: string;
    /**
     * - A short, human-readable, URL-friendly identifier.
     */
    slug?: string;
    /**
     * - Application ID - Identifier for a Sales channel.
     */
    application?: string;
    /**
     * - URL of the image associated with FAQ Category.
     */
    icon_url?: string;
    /**
     * - Custom JSON object for specific use cases.
     */
    _custom_json?: any;
};
/** @returns {FaqSchema} */
declare function FaqSchema(): FaqSchema;
type FaqSchema = {
    /**
     * - A short, human-readable, URL-friendly identifier.
     */
    slug?: string;
    /**
     * - Application ID - Identifier for a Sales channel.
     */
    application?: string;
    /**
     * - Unique identifier of an entry.
     */
    _id?: string;
    /**
     * - The contents of a question of a FAQ.
     */
    question?: string;
    /**
     * - The contents of a answer of a FAQ.
     */
    answer?: string;
    /**
     * - Tags under a FAQ.
     */
    tags?: string[];
};
/** @returns {GetFaqSchema} */
declare function GetFaqSchema(): GetFaqSchema;
type GetFaqSchema = {
    /**
     * - List of FAQs.
     */
    faqs?: FaqSchema[];
};
/** @returns {GetFaqCategoriesSchema} */
declare function GetFaqCategoriesSchema(): GetFaqCategoriesSchema;
type GetFaqCategoriesSchema = {
    /**
     * - List of FAQ Categories.
     */
    categories?: CategorySchema[];
};
/** @returns {GetFaqCategoryBySlugSchema} */
declare function GetFaqCategoryBySlugSchema(): GetFaqCategoryBySlugSchema;
type GetFaqCategoryBySlugSchema = {
    category?: FAQCategorySchema;
};
/** @returns {Page} */
declare function Page(): Page;
type Page = {
    /**
     * - The total number of items on the page.
     */
    item_total?: number;
    /**
     * - The identifier for the next page.
     */
    next_id?: string;
    /**
     * - Indicates whether there is a previous page.
     */
    has_previous?: boolean;
    /**
     * - Indicates whether there is a next page.
     */
    has_next?: boolean;
    /**
     * - The current page number.
     */
    current?: number;
    /**
     * - The type of the page, such as 'PageType'.
     */
    type: string;
    /**
     * - The number of items per page.
     */
    size?: number;
};
/** @returns {LandingPageSchema} */
declare function LandingPageSchema(): LandingPageSchema;
type LandingPageSchema = {
    /**
     * - A short, human-readable, URL-friendly identifier.
     */
    slug?: string;
    action?: Action;
    /**
     * - List of platforms linked to this landing page.
     */
    platform?: string[];
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    /**
     * - Unique identifier of an entry.
     */
    _id?: string;
    /**
     * - Application ID - Identifier for a Sales channel.
     */
    application?: string;
    /**
     * - Whether landing page is archived or not.
     */
    archived?: boolean;
    /**
     * - Custom JSON object for specific use cases.
     */
    _custom_json?: any;
};
/** @returns {NavigationGetResponse} */
declare function NavigationGetResponse(): NavigationGetResponse;
type NavigationGetResponse = {
    /**
     * - List of navigation items.
     */
    items?: NavigationSchema[];
    page?: Page;
};
/** @returns {Orientation} */
declare function Orientation(): Orientation;
type Orientation = {
    /**
     * - Data related to devices where navigation is
     * assigned in portrait mode.
     */
    portrait?: string[];
    /**
     * - Data related to devices where navigation
     * is assigned in landscape mode.
     */
    landscape?: string[];
};
/** @returns {NavigationSchema} */
declare function NavigationSchema(): NavigationSchema;
type NavigationSchema = {
    /**
     * - Unique identifier of an entry.
     */
    _id?: string;
    /**
     * - Application ID - Identifier for a Sales channel.
     */
    application?: string;
    /**
     * - Whether navigation is archived or not.
     */
    archived?: boolean;
    /**
     * - Name of the navigation link.
     */
    name?: string;
    /**
     * - A short, human-readable, URL-friendly identifier.
     */
    slug?: string;
    /**
     * - Details regarding the platforms for which
     * this navigation is to applied on.
     */
    platform?: string[];
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    orientation?: Orientation;
    /**
     * - A hardcoded key for internally managing
     * navigation versions.
     */
    version?: number;
    /**
     * - List of all navigations
     * links and relevant details.
     */
    navigation?: NavigationReference[];
};
/** @returns {PageGetResponse} */
declare function PageGetResponse(): PageGetResponse;
type PageGetResponse = {
    /**
     * - List of details of custom pages.
     */
    items?: PageSchema[];
    page?: Page;
};
/** @returns {PageSchema} */
declare function PageSchema(): PageSchema;
type PageSchema = {
    /**
     * - Unique identifier of an entry.
     */
    _id?: string;
    /**
     * - Application ID - Identifier for a Sales channel.
     */
    application?: string;
    /**
     * - Components can be used to store
     * multiple components.
     */
    component_ids?: string[];
    /**
     * - Contents of a custom page.
     */
    content?: any[];
    /**
     * - A CDN URL at which the entire html
     * content can be fetched from.
     */
    content_path?: string;
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    /**
     * - Description about the page.
     */
    description?: string;
    feature_image?: Asset;
    /**
     * - List of Custom JSON object for specific use cases.
     */
    page_meta?: any[];
    _schedule?: ScheduleSchema;
    /**
     * - Custom JSON object for specific use cases.
     */
    _custom_json?: any;
    /**
     * - Orientation for Custom Pages - Landscape
     * or portrait.
     */
    orientation?: string;
    /**
     * - Platform for Custom Pages - Denotes the device type.
     */
    platform?: string;
    /**
     * - Whether page is active or not on website.
     */
    published?: boolean;
    /**
     * - A short, human-readable, URL-friendly identifier.
     */
    slug?: string;
    /**
     * - Tags under a page.
     */
    tags?: string[];
    /**
     * - The title of the page.
     */
    title?: string;
    /**
     * - Type of editor through which the page was created
     * so appropriate rendering engine is used.
     */
    type?: string;
    seo?: SEO;
    /**
     * - Visibility of Page.
     */
    visibility?: any;
    /**
     * - Flag denoting whether the page is archived or not.
     */
    archived?: boolean;
};
/** @returns {CreatedBySchema} */
declare function CreatedBySchema(): CreatedBySchema;
type CreatedBySchema = {
    /**
     * - Details containing the creator of custom page.
     */
    id?: string;
};
/** @returns {SlideshowGetResponse} */
declare function SlideshowGetResponse(): SlideshowGetResponse;
type SlideshowGetResponse = {
    /**
     * - Details related to slideshow/screensaver.
     */
    items?: SlideshowSchema[];
    page?: Page;
};
/** @returns {SlideshowSchema} */
declare function SlideshowSchema(): SlideshowSchema;
type SlideshowSchema = {
    /**
     * - Unique identifier of an entry.
     */
    _id?: string;
    /**
     * - Details related to slideshow/screensaver.
     */
    slug?: string;
    date_meta?: DateMeta;
    /**
     * - Application ID - Identifier for a Sales channel.
     */
    application?: string;
    /**
     * - Details related to slideshow/screensaver.
     */
    platform?: string;
    configuration?: ConfigurationSchema;
    /**
     * - Details related to slideshow/screensaver.
     */
    media?: SlideshowMedia[];
    /**
     * - Details related to slideshow/screensaver.
     */
    active?: boolean;
    /**
     * - Whether slideshow is deleted or not.
     */
    archived?: boolean;
    /**
     * - Custom JSON object for specific use cases.
     */
    _custom_json?: any;
};
/** @returns {Support} */
declare function Support(): Support;
type Support = {
    /**
     * - Whether support contact details are created or not.
     */
    created?: boolean;
    /**
     * - Unique identifier of an entry.
     */
    _id?: string;
    /**
     * - Application ID - Identifier for a Sales channel.
     */
    application?: string;
    /**
     * - Timestamp which represent the time when
     * data was created.
     */
    created_at?: string;
    /**
     * - Timestamp which represent when was the last
     * time when data was updated.
     */
    updated_at?: string;
    contact?: ContactSchema;
};
/** @returns {PhoneProperties} */
declare function PhoneProperties(): PhoneProperties;
type PhoneProperties = {
    /**
     * - Name of the Contact SPOC.
     */
    key?: string;
    /**
     * - International dial Code.
     */
    code?: string;
    /**
     * - Phone Number.
     */
    number?: string;
    /**
     * - Denotes the type of phone number.
     */
    phone_type?: string;
};
/** @returns {PhoneSchema} */
declare function PhoneSchema(): PhoneSchema;
type PhoneSchema = {
    /**
     * - Flag denoting whether contact detail is active or not.
     */
    active?: boolean;
    /**
     * - Details related to phone contact of SPOC.
     */
    phone?: PhoneProperties[];
};
/** @returns {EmailProperties} */
declare function EmailProperties(): EmailProperties;
type EmailProperties = {
    /**
     * - Name of email SPOC.
     */
    key?: string;
    /**
     * - Email Id of the SPOC.
     */
    value?: string;
};
/** @returns {EmailSchema} */
declare function EmailSchema(): EmailSchema;
type EmailSchema = {
    /**
     * - Whether contact detail is active or not.
     */
    active?: boolean;
    /**
     * - Details related to email contact of SPOC.
     */
    email?: EmailProperties[];
};
/** @returns {ContactSchema} */
declare function ContactSchema(): ContactSchema;
type ContactSchema = {
    phone?: PhoneSchema;
    email?: EmailSchema;
};
/** @returns {TagsSchema} */
declare function TagsSchema(): TagsSchema;
type TagsSchema = {
    /**
     * - Application ID - Identifier for a Sales channel.
     */
    application?: string;
    /**
     * - Unique identifier of an entry.
     */
    _id?: string;
    /**
     * - List of Third party injectable html tags.
     */
    tags?: TagSchema[];
};
/** @returns {TagSchema} */
declare function TagSchema(): TagSchema;
type TagSchema = {
    /**
     * - Name of the html tag.
     */
    name?: string;
    /**
     * - URL at which css or js might be hosted.
     */
    url?: string;
    /**
     * - Whether Tag is JS or CSS.
     */
    type?: string;
    /**
     * - Whether js/css is external or inline.
     */
    sub_type?: string;
    /**
     * - Unique identifier of an entry.
     */
    _id?: string;
    /**
     * - Position where Tag is so to be placed.
     */
    position?: string;
    /**
     * - Custom JSON object for specific use cases.
     */
    attributes?: any;
    /**
     * - Content of tag.
     */
    content?: string;
    /**
     * - List of all the page where tag is to be added.
     */
    pages?: any[];
    __source?: TagSourceSchema;
};
/** @returns {TagSourceSchema} */
declare function TagSourceSchema(): TagSourceSchema;
type TagSourceSchema = {
    /**
     * - Type of creator of tag.
     */
    type?: string;
    /**
     * - Identifier of an extension.
     */
    id?: string;
};
/** @returns {CustomObjectFieldValue} */
declare function CustomObjectFieldValue(): CustomObjectFieldValue;
type CustomObjectFieldValue = {
    /**
     * - Value of custom field.
     */
    value?: any;
};
/** @returns {CustomObjectListItemDefinationSchema} */
declare function CustomObjectListItemDefinationSchema(): CustomObjectListItemDefinationSchema;
type CustomObjectListItemDefinationSchema = {
    /**
     * - Unique identifier of an entry.
     */
    _id?: string;
    /**
     * - Name of definition of custom field.
     */
    name?: string;
    /**
     * - Data type of the custom field.
     */
    type?: string;
};
/** @returns {CustomObjectFieldSchema} */
declare function CustomObjectFieldSchema(): CustomObjectFieldSchema;
type CustomObjectFieldSchema = {
    /**
     * - Unique identifier of an entry.
     */
    _id?: string;
    /**
     * - Key of custom field inside custom object.
     */
    key?: string;
    /**
     * - Value of custom field inside
     * custom object.
     */
    value?: CustomObjectFieldValue[];
    /**
     * - Data type of custom field inside custom object.
     */
    type?: string;
    /**
     * - Definition id of custom field inside
     * custom object.
     */
    definition_id?: string;
};
/** @returns {CustomObjectByIdSchema} */
declare function CustomObjectByIdSchema(): CustomObjectByIdSchema;
type CustomObjectByIdSchema = {
    /**
     * - Unique identifier of an entry.
     */
    _id?: string;
    /**
     * - String denoting whether custom object is active
     * or inactive.
     */
    status?: string;
    /**
     * - Unique Display name of a custom object
     * which is system generated: Concatenation of string definition name and _id.
     */
    display_name?: string;
    definition?: CustomObjectListItemDefinationSchema;
    /**
     * - List of custom fields ids where the
     * custom object is added as a field.
     */
    references?: any[];
    /**
     * - List of custom fields
     * against a Custom Object.
     */
    fields?: CustomObjectFieldSchema[];
};
/** @returns {CustomFieldValue} */
declare function CustomFieldValue(): CustomFieldValue;
type CustomFieldValue = {
    /**
     * - Array containing value(s) of custom field.
     */
    value?: any;
};
/** @returns {CustomFieldSchema} */
declare function CustomFieldSchema(): CustomFieldSchema;
type CustomFieldSchema = {
    /**
     * - Unique identifier of an entry.
     */
    _id?: string;
    /**
     * - Namespace under which custom field is present.
     */
    namespace?: string;
    /**
     * - Unique identifier for a custom field.
     */
    key?: string;
    /**
     * - Type of an entity under which custom field is defined.
     */
    resource?: string;
    /**
     * - Denotes where the custom field has been
     * defined - within a company or within a sales channel.
     */
    creator?: string;
    /**
     * - Array containing values of custom field.
     */
    value?: CustomFieldValue[];
    /**
     * - Unique identifier for the entity under
     * which custom field is defined.
     */
    resource_id?: string;
    /**
     * - The type type of custom field.
     */
    type?: string;
    /**
     * - Whether custom field can have multiple
     * values or not.
     */
    multi_value?: boolean;
    /**
     * - Unique Identifier for a company.
     */
    company_id?: string;
    /**
     * - Application ID - Identifier for a Sales channel.
     */
    application_id?: string;
    /**
     * - Unique identifier for a custom field definition.
     */
    definition_id?: string;
    /**
     * - Whether the custom field has invalid values.
     */
    has_invalid_values?: boolean;
    /**
     * - Array denoting if there's a
     * validation failure on a custom field inside a custom object.
     */
    invalid_value_errors?: any[];
    /**
     * - Details of the owner of custom field creator.
     */
    created_by?: string;
    /**
     * - Whether the custom field definition is deleted.
     */
    is_deleted?: boolean;
    /**
     * - Timestamp which represent the time when
     * data was created.
     */
    created_at?: string;
    /**
     * - Timestamp which represent when was the last
     * time when data was updated.
     */
    updated_at?: string;
};
/** @returns {CustomFieldsResponseByResourceIdSchema} */
declare function CustomFieldsResponseByResourceIdSchema(): CustomFieldsResponseByResourceIdSchema;
type CustomFieldsResponseByResourceIdSchema = {
    /**
     * - List of custom fields against a resource.
     */
    items?: CustomFieldSchema[];
};
/** @returns {ActionPage} */
declare function ActionPage(): ActionPage;
type ActionPage = {
    /**
     * - Parameters that should be considered in path.
     */
    params?: any;
    /**
     * - Query parameter if any to be added to the action.
     */
    query?: any;
    /**
     * - The URL for the action.
     */
    url?: string;
    type: PageType;
};
/**
 * Enum: PageType Used By: Content
 *
 * @returns {PageType}
 */
declare function PageType(): PageType;
type PageType = "about-us" | "addresses" | "blog" | "brands" | "cards" | "cart" | "categories" | "brand" | "category" | "collection" | "collections" | "custom" | "contact-us" | "external" | "faq" | "freshchat" | "home" | "notification-settings" | "orders" | "page" | "policy" | "product" | "product-request" | "products" | "profile" | "profile-order-shipment" | "profile-basic" | "profile-company" | "profile-emails" | "profile-phones" | "rate-us" | "refer-earn" | "settings" | "shared-cart" | "tnc" | "track-order" | "wishlist" | "sections" | "form" | "cart-delivery" | "cart-payment" | "cart-review" | "login" | "register" | "shipping-policy" | "return-policy" | "order-status" | "locate-us";
