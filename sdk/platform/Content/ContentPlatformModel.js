const Joi = require("joi");

/**
 * @typedef ValidationError
 * @property {string} message - A brief description of the error encountered.
 * @property {string} field - The field in the request that caused the error.
 */

/**
 * @typedef GenerateSEOContent
 * @property {string} [text]
 * @property {string} [existing_text]
 * @property {string[]} [keywords]
 * @property {string} [type]
 */

/**
 * @typedef GeneratedSEOContent
 * @property {string} [title]
 * @property {string} [description]
 */

/**
 * @typedef ApplicationLegal
 * @property {string} [application]
 * @property {string} [tnc]
 * @property {string} [policy]
 * @property {string} [shipping]
 * @property {string} [returns]
 * @property {ApplicationLegalFAQ[]} [faq]
 * @property {string} [_id]
 * @property {string} [updated_at]
 * @property {string} [created_at]
 */

/**
 * @typedef ApplicationLegalFAQ
 * @property {string} [question]
 * @property {string} [answer]
 */

/**
 * @typedef PathMappingSchema
 * @property {string} [application]
 * @property {string} [_id]
 * @property {string} [redirect_from]
 * @property {string} [redirect_to]
 * @property {string} [updated_at]
 * @property {string} [created_at]
 * @property {PathSourceSchema} [__source]
 */

/**
 * @typedef PathSourceSchema
 * @property {string} [type]
 * @property {string} [id]
 */

/**
 * @typedef SeoComponent
 * @property {SeoSchema} [seo]
 */

/**
 * @typedef SeoSchema
 * @property {string} [app]
 * @property {string} [_id]
 * @property {string} [robots_txt]
 * @property {boolean} [sitemap_enabled]
 * @property {string} [additional_sitemap]
 * @property {boolean} [cannonical_enabled]
 * @property {CustomMetaTag[]} [custom_meta_tags]
 * @property {Detail} [details]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 */

/**
 * @typedef CustomMetaTag
 * @property {string} [name]
 * @property {string} [content]
 * @property {string} [_id]
 */

/**
 * @typedef Detail
 * @property {string} [title]
 * @property {string} [description]
 * @property {string} [image_url]
 */

/**
 * @typedef SeoSchemaComponent
 * @property {SEOSchemaMarkupTemplate[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef SEOSchemaMarkupTemplate
 * @property {string} [id]
 * @property {string} [title]
 * @property {string} [page_type]
 * @property {string} [schema]
 * @property {string} [description]
 * @property {boolean} [active]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [application]
 * @property {Object} [target_json]
 */

/**
 * @typedef SEOSchemaMarkupTemplateRequestBody
 * @property {string} [title]
 * @property {string} [page_type]
 * @property {string} [schema]
 * @property {string} [description]
 * @property {Object} [target_json]
 * @property {boolean} [active]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 */

/**
 * @typedef AnnouncementPageSchema
 * @property {string} [page_slug]
 * @property {string} [type]
 */

/**
 * @typedef EditorMeta
 * @property {string} [foreground_color]
 * @property {string} [background_color]
 * @property {string} [content_type]
 * @property {string} [content]
 */

/**
 * @typedef AnnouncementAuthorSchema
 * @property {string} [created_by]
 * @property {string} [modified_by]
 */

/**
 * @typedef AdminAnnouncementSchema
 * @property {string} [_id]
 * @property {string[]} [platforms]
 * @property {string} [title]
 * @property {string} [announcement]
 * @property {AnnouncementPageSchema[]} [pages]
 * @property {EditorMeta} [editor_meta]
 * @property {AnnouncementAuthorSchema} [author]
 * @property {string} [created_at]
 * @property {string} [app]
 * @property {string} [modified_at]
 * @property {ScheduleSchema} [_schedule]
 */

/**
 * @typedef DefaultSchemaComponent
 * @property {DefaultSEOSchemaMarkupTemplate[]} [items]
 */

/**
 * @typedef DefaultSEOSchemaMarkupTemplate
 * @property {string} [page_type]
 * @property {string} [schema]
 * @property {Object} [target_json]
 */

/**
 * @typedef ScheduleSchema
 * @property {string} [cron]
 * @property {string} [start]
 * @property {string} [end]
 * @property {number} [duration]
 * @property {NextSchedule[]} [next_schedule]
 */

/**
 * @typedef NextSchedule
 * @property {string} [start]
 * @property {string} [end]
 */

/**
 * @typedef BlogGetDetails
 * @property {BlogSchema[]} [items]
 * @property {Page} [page]
 * @property {BlogFilters} [filters]
 */

/**
 * @typedef BlogFilters
 * @property {string[]} [tags]
 */

/**
 * @typedef ResourceContent
 * @property {string} [type]
 * @property {string} [value]
 */

/**
 * @typedef Asset
 * @property {string} [aspect_ratio]
 * @property {string} [id]
 * @property {string} [secure_url]
 */

/**
 * @typedef Author
 * @property {string} [designation]
 * @property {string} [id]
 * @property {string} [name] - Name of the author
 */

/**
 * @typedef BlogSchema
 * @property {string} [_id]
 * @property {Object} [_custom_json]
 * @property {string} [application]
 * @property {boolean} [archived]
 * @property {Author} [author]
 * @property {ResourceContent[]} [content]
 * @property {Asset} [feature_image]
 * @property {boolean} [published]
 * @property {string} [reading_time]
 * @property {string} [slug]
 * @property {string} [publish_date]
 * @property {string[]} [tags]
 * @property {SEO} [seo]
 * @property {string} [title]
 * @property {DateMeta} [date_meta]
 * @property {string} [summary]
 */

/**
 * @typedef SEO
 * @property {string} [description]
 * @property {SEOImage} [image]
 * @property {string} [title]
 * @property {SEOMetaItem[]} [meta_tags]
 * @property {SEOSitemap} [sitemap]
 * @property {SEObreadcrumb[]} [breadcrumb]
 * @property {string} [canonical_url]
 */

/**
 * @typedef SEOImage
 * @property {string} [url]
 */

/**
 * @typedef SEOMetaItem
 * @property {string} [title]
 * @property {SEOMetaItems[]} [items]
 */

/**
 * @typedef SEOMetaItems
 * @property {string} [key]
 * @property {string} [value]
 */

/**
 * @typedef SEOSitemap
 * @property {number} [priority]
 * @property {string} [frequency]
 */

/**
 * @typedef SEObreadcrumb
 * @property {string} [url]
 * @property {Action} [action]
 */

/**
 * @typedef DateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */

/**
 * @typedef BlogPayload
 * @property {string} [application]
 * @property {Object} [_custom_json]
 * @property {Author} [author]
 * @property {ResourceContent[]} [content]
 * @property {Asset} [feature_image]
 * @property {boolean} [published]
 * @property {string} [reading_time]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {string} [title]
 * @property {SEO} [seo]
 * @property {string} [summary]
 */

/**
 * @typedef GetAnnouncementListSchema
 * @property {AdminAnnouncementSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef CreateAnnouncementSchema
 * @property {string} [message]
 * @property {AdminAnnouncementSchema} [data]
 */

/**
 * @typedef DataLoaderResponseSchema
 * @property {string} [application]
 * @property {string} [company]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [service]
 * @property {string} [operation_id]
 * @property {string} [type]
 * @property {string} [url]
 * @property {string} [content]
 * @property {DataLoaderSourceSchema} [__source]
 */

/**
 * @typedef DataLoaderResetResponseSchema
 * @property {boolean} [reset]
 */

/**
 * @typedef LocaleLanguage
 * @property {Language} [hi]
 * @property {Language} [ar]
 * @property {Language} [en_us]
 */

/**
 * @typedef Language
 * @property {string} [display]
 */

/**
 * @typedef Action
 * @property {string} [type] - Type of action to be taken e.g, page.
 * @property {ActionPage} [page]
 * @property {ActionPage} [popup]
 */

/**
 * @typedef NavigationReference
 * @property {string[]} [acl]
 * @property {string[]} [tags]
 * @property {LocaleLanguage} [_locale_language]
 * @property {string} [image]
 * @property {string} [type]
 * @property {Action} [action]
 * @property {boolean} [active]
 * @property {string} [display]
 * @property {number} [sort_order]
 * @property {CronBasedScheduleSchema} [schedule]
 * @property {NavigationReference[]} [sub_navigation]
 */

/**
 * @typedef CronBasedScheduleSchema
 * @property {boolean} [enabled]
 * @property {string} [cron]
 * @property {string} [start]
 * @property {string} [end]
 */

/**
 * @typedef UpdateHandpickedSchema
 * @property {HandpickedTagSchema} [tag]
 */

/**
 * @typedef HandpickedTagSchema
 * @property {string} [position] - The location in the page where the tag should
 *   be injected, such as 'head', 'body-top', or 'body-bottom'.
 * @property {Object} [attributes] - Additional attributes for the tag to define
 *   its behavior or compatibility. Supported attributes may vary based on the
 *   tag type for example:
 *
 *   - For `script` tags: `async`, `defer`, `crossorigin`, `type`, `onload`.
 *   - For `link` tags: `rel`, `media`, `type`, `crossorigin`, `onload`.
 *   - For `style` tags: `media`, `type`, `scoped`.
 *   - Custom data attributes like `data-*` can also be added.
 *
 * @property {string[]} [compatible_engines] - List of UI frameworks where this
 *   third-party tag can be injected or supported.
 * @property {string} [name] - The name of the tag used to identify it in the
 *   system. Example: 'Google External Script' or 'Bootstrap CSS'.
 * @property {string} [url] - The URL where the external tag resource (such as a
 *   script or stylesheet) is hosted.
 * @property {string} [type] - The type of the tag, such as 'script' (for
 *   JavaScript) or 'link' (for CSS).
 * @property {string} [sub_type] - Defines whether the tag is embedded within
 *   the HTML (inline) or linked externally (external).
 * @property {string} [content] - The actual content of the inline tag, such as
 *   JavaScript or CSS code if the tag is inline.
 * @property {TemplateSchema} [template]
 */

/**
 * @typedef RemoveHandpickedSchema
 * @property {string[]} [tags] - A list of tag IDs to remove from the system.
 */

/**
 * @typedef CreateTagSchema
 * @property {string} [name] - The name of the tag to be created, used for
 *   identification purposes.
 * @property {string} [sub_type] - Indicates if the tag is external (linked) or
 *   inline (embedded within the page).
 * @property {string} [_id] - The unique identifier for the tag.
 * @property {string} [type] - The type of the tag, either JavaScript ('js') or
 *   CSS ('css').
 * @property {string} [url] - The external URL pointing to the script or
 *   stylesheet resource.
 * @property {string} [position] - The position on the webpage where the tag
 *   will be injected, such as 'head', 'body-top', or 'body-bottom'.
 * @property {Object} [attributes] - Additional attributes for the tag to define
 *   its behavior or compatibility. Supported attributes may vary based on the
 *   tag type for example:
 *
 *   - For `script` tags: `async`, `defer`, `crossorigin`, `type`, `onload`.
 *   - For `link` tags: `rel`, `media`, `type`, `crossorigin`, `onload`.
 *   - For `style` tags: `media`, `type`, `scoped`.
 *   - Custom data attributes like `data-*` can also be added.
 *
 * @property {string[]} [compatible_engines] - List of UI frameworks where this
 *   third-party tag can be injected or supported.
 * @property {Object[]} [pages] - Pages or environments where the tag should be
 *   injected or active.
 * @property {string} [content] - The inline content for tags of type 'inline'
 *   (e.g., JavaScript or CSS code).
 * @property {TemplateSchema} [template]
 */

/**
 * @typedef TemplateSchema
 * @property {string} [template_id] - Unique identifier for the template linked
 *   to the tag.
 * @property {string} [template_version] - Version number of the template used
 *   for configuration.
 * @property {TemplateField[]} [template_fields] - List of dynamic key-value
 *   pairs defining configuration fields for third-party integrations or custom settings.
 */

/**
 * @typedef TemplateField
 * @property {string} [key] - Field name representing the configuration key.
 * @property {string} [value] - Value assigned to the configuration field.
 */

/**
 * @typedef CreateTagRequestSchema
 * @property {CreateTagSchema[]} [tags] - A list of tags to be created or
 *   updated, each containing details such as name, type, and attributes.
 */

/**
 * @typedef DataLoaderSchema
 * @property {string} [name]
 * @property {string} [service]
 * @property {string} [operation_id]
 * @property {string} [type]
 * @property {string} [url]
 * @property {string} [content]
 * @property {DataLoaderSourceSchema} [__source]
 * @property {string} [_id]
 */

/**
 * @typedef TagsTemplateSchema
 * @property {TagTemplateItem[]} [items] - Array of tag template objects.
 */

/**
 * @typedef TagTemplateItem
 * @property {string} [template_name] - Static name of the tag template (e.g.,
 *   gtm, ga4, metaPixel, sentry).
 * @property {string} [type] - Script type.
 * @property {string} [sub_type] - Script loading subtype.
 * @property {string} [position] - Where the script should be injected.
 * @property {string[]} [pages] - List of page types where the tag should be active.
 * @property {Object} [attributes] - HTML attributes to apply on the script tag.
 * @property {string[]} [compatible_engines] - List of compatible UI frameworks.
 * @property {Object} [field_mappings] - Maps UI field names to backend keys.
 * @property {TemplateLayout} [layout]
 * @property {string} [name] - Human-readable name of the template.
 * @property {string} [path] - URL-safe path or slug for the template.
 * @property {string} [description] - Explains the purpose or behavior of the template.
 * @property {string} [image] - URL to an icon or image for the template.
 * @property {string} [note] - Helpful guidance for configuring the template.
 * @property {string} [template_id] - Unique template identifier.
 * @property {string} [template_version] - Version of this template.
 * @property {string} [category] - Functional category of the template.
 * @property {FieldDefinition[]} [fields] - Array of field definitions for
 *   template configuration.
 * @property {string} [script] - JavaScript snippet or template script code.
 */

/**
 * @typedef TemplateLayout
 * @property {number} [columns]
 * @property {string} [gap]
 * @property {boolean} [responsive]
 */

/**
 * @typedef FieldDefinition
 * @property {string} [name] - Field key used in templates and mappings.
 * @property {string} [type] - Input type (e.g., text, boolean, array, note).
 * @property {string} [label]
 * @property {string} [placeholder]
 * @property {boolean} [required]
 * @property {string} [size] - Visual width in the form layout.
 * @property {string} [description]
 * @property {FieldValidation} [validation]
 * @property {Object} [events] - Optional client-side events configuration.
 */

/**
 * @typedef FieldValidation
 * @property {string} [pattern] - Regex pattern used for validation.
 * @property {string} [message] - Error message shown when validation fails.
 */

/**
 * @typedef DataLoaderSourceSchema
 * @property {string} [type]
 * @property {string} [id]
 */

/**
 * @typedef DataLoadersSchema
 * @property {DataLoaderSchema[]} [items]
 */

/**
 * @typedef TagDeleteSuccessDetails
 * @property {boolean} [success] - Indicates whether the tag removal operation
 *   was successful.
 */

/**
 * @typedef ContentAPIError
 * @property {string} [message]
 * @property {number} [status]
 * @property {string} [code]
 * @property {string} [exception]
 * @property {string} [info]
 * @property {string} [request_id]
 * @property {string} [stack_trace]
 * @property {Object} [meta]
 */

/**
 * @typedef CommonError
 * @property {string} [message]
 */

/**
 * @typedef CategorySchema
 * @property {number} [index]
 * @property {string} [title]
 * @property {string} [description]
 * @property {string[]} [children]
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {string} [application]
 * @property {string} [icon_url]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef ChildrenSchema
 * @property {string} [question]
 * @property {string} [answer]
 * @property {string} [slug]
 * @property {string} [application]
 * @property {string} [_id]
 */

/**
 * @typedef CategoryRequestSchema
 * @property {string} [slug]
 * @property {string} [title]
 */

/**
 * @typedef FAQCategorySchema
 * @property {number} [index]
 * @property {string} [title]
 * @property {string} [description]
 * @property {ChildrenSchema[]} [children]
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {string} [application]
 * @property {string} [icon_url]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef FaqSchema
 * @property {string} [slug]
 * @property {string} [application]
 * @property {string} [_id]
 * @property {string} [question]
 * @property {string} [answer]
 * @property {string[]} [tags]
 */

/**
 * @typedef FAQ
 * @property {string} [slug]
 * @property {string} [question]
 * @property {string} [answer]
 */

/**
 * @typedef CreateFaqResponseSchema
 * @property {FaqSchema} [faq]
 */

/**
 * @typedef CreateFaqSchema
 * @property {FAQ} [faq]
 */

/**
 * @typedef GetFaqSchema
 * @property {FaqSchema[]} [faqs]
 */

/**
 * @typedef UpdateFaqCategoryRequestSchema
 * @property {CategorySchema} [category]
 */

/**
 * @typedef CreateFaqCategoryRequestSchema
 * @property {CategoryRequestSchema} [category]
 */

/**
 * @typedef CreateFaqCategorySchema
 * @property {CategorySchema} [category]
 */

/**
 * @typedef GetFaqCategoriesSchema
 * @property {CategorySchema[]} [categories]
 */

/**
 * @typedef GetFaqCategoryBySlugSchema
 * @property {FAQCategorySchema} [category]
 */

/**
 * @typedef Page
 * @property {number} [item_total] - The total number of all items across all pages.
 * @property {string} [next_id] - The identifier for the next page.
 * @property {boolean} [has_previous] - Indicates whether there is a previous page.
 * @property {boolean} [has_next] - Indicates whether there is a next page.
 * @property {number} [current] - The current page number.
 * @property {string} type - The type of the page, can be 'cursor' or 'number'.
 * @property {number} [size] - The number of items per page.
 * @property {number} [page_size] - The number of items per page.
 */

/**
 * @typedef LandingPageGetDetails
 * @property {LandingPageSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef LandingPageSchema
 * @property {string} [slug]
 * @property {Action} [action]
 * @property {string[]} [platform]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {boolean} [archived]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef DefaultNavigationDetails
 * @property {NavigationSchema[]} [items]
 */

/**
 * @typedef NavigationGetDetails
 * @property {NavigationSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef Orientation
 * @property {string[]} [portrait]
 * @property {string[]} [landscape]
 */

/**
 * @typedef NavigationSchema
 * @property {string} [_id]
 * @property {string} [application]
 * @property {boolean} [archived]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string[]} [platform]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {Orientation} [orientation]
 * @property {number} [version]
 * @property {NavigationReference[]} [navigation]
 */

/**
 * @typedef NavigationPayload
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string[]} [platform]
 * @property {Orientation} [orientation]
 * @property {NavigationReference[]} [navigation]
 */

/**
 * @typedef PageGetDetails
 * @property {PageSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef PageSpec
 * @property {PageSpecItem[]} [specifications]
 */

/**
 * @typedef PageSpecParam
 * @property {string} [key]
 * @property {boolean} [required]
 */

/**
 * @typedef PageSpecItem
 * @property {string} [page_type]
 * @property {string} [display_name]
 * @property {PageSpecParam[]} [params]
 * @property {PageSpecParam[]} [query]
 */

/**
 * @typedef PageSchema
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string[]} [component_ids] - Components can be used to store
 *   multiple components
 * @property {Object[]} [content]
 * @property {string} [content_path]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {string} [description]
 * @property {Asset} [feature_image]
 * @property {Object[]} [page_meta]
 * @property {ScheduleSchema} [_schedule]
 * @property {Object} [_custom_json]
 * @property {string} [orientation]
 * @property {string} [platform]
 * @property {boolean} [published]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {string} [title]
 * @property {string} [type]
 * @property {SEO} [seo]
 * @property {Object} [visibility]
 * @property {boolean} [archived]
 */

/**
 * @typedef CreatedBySchema
 * @property {string} [id]
 */

/**
 * @typedef PagePayload
 * @property {CronSchedule} [_schedule]
 * @property {string} [application]
 * @property {Author} [author]
 * @property {Object} [_custom_json]
 * @property {string} [orientation]
 * @property {Object[]} [content]
 * @property {Asset} [feature_image]
 * @property {boolean} [published]
 * @property {string} [reading_time]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {SEO} [seo]
 * @property {string} [title]
 */

/**
 * @typedef CronSchedule
 * @property {string} [cron]
 * @property {string} [start]
 * @property {string} [end]
 * @property {number} [duration]
 */

/**
 * @typedef PagePublishPayload
 * @property {boolean} [publish]
 */

/**
 * @typedef PageMetaSchema
 * @property {NavigationSchema[]} [system_pages]
 * @property {PageSchema[]} [custom_pages]
 * @property {string} [application_id]
 */

/**
 * @typedef Support
 * @property {boolean} [created]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {ContactSchema} [contact]
 */

/**
 * @typedef PhoneProperties
 * @property {string} [key]
 * @property {string} [code]
 * @property {string} [number]
 * @property {string} [phone_type]
 */

/**
 * @typedef PhoneSchema
 * @property {boolean} [active]
 * @property {PhoneProperties[]} [phone]
 */

/**
 * @typedef EmailProperties
 * @property {string} [key]
 * @property {string} [value]
 */

/**
 * @typedef EmailSchema
 * @property {boolean} [active]
 * @property {EmailProperties[]} [email]
 */

/**
 * @typedef ContactSchema
 * @property {PhoneSchema} [phone]
 * @property {EmailSchema} [email]
 */

/**
 * @typedef TagsSchema
 * @property {string} [application] - The ID of the application that owns the tags.
 * @property {string} [_id] - The unique identifier for the tag set.
 * @property {string} [company] - The ID of the company associated with this tags.
 * @property {TagSchema[]} [tags] - A list of tags (HTML resources like scripts
 *   or stylesheets) that are configured for the application.
 */

/**
 * @typedef TagSchema
 * @property {string} [name] - The name of the tag used to identify it.
 * @property {string} [url] - The URL where the external tag resource (such as a
 *   script or stylesheet) is located.
 * @property {string} [type] - Specifies whether the tag is a JavaScript ('js')
 *   or CSS ('css') tag.
 * @property {string} [sub_type] - Indicates whether the tag is an external
 *   resource (external) or inline content (inline).
 * @property {string} [_id] - The unique identifier for the tag in the system.
 * @property {string} [position] - The position within the page where the tag
 *   should be injected.
 * @property {Object} [attributes] - Additional attributes for the tag to define
 *   its behavior or compatibility. Supported attributes may vary based on the
 *   tag type for example:
 *
 *   - For `script` tags: `async`, `defer`, `crossorigin`, `type`, `onload`.
 *   - For `link` tags: `rel`, `media`, `type`, `crossorigin`, `onload`.
 *   - For `style` tags: `media`, `type`, `scoped`.
 *   - Custom data attributes like `data-*` can also be added.
 *
 * @property {string} [content] - Content of the tag if it is inline, such as
 *   JavaScript or CSS code.
 * @property {string[]} [compatible_engines] - List of UI frameworks where this
 *   third-party tag can be injected or supported.
 * @property {Object[]} [pages] - Pages or environments where the tag should be active.
 * @property {TagSourceSchema} [__source]
 * @property {TemplateSchema} [template]
 */

/**
 * @typedef TagSourceSchema
 * @property {string} [type] - The type of source, such as 'extension'
 * @property {string} [id] - The identifier of the source that created or
 *   provided the tag.
 */

/**
 * @typedef ResourcesSchema
 * @property {ResourceSchema[]} [resources]
 */

/**
 * @typedef ResourceSchema
 * @property {string} [name] - Resource name
 * @property {string} [key] - Resource key
 * @property {number} [definitions_count] - Number of definitions
 */

/**
 * @typedef FieldValidations
 * @property {string} [name] - Name of validation
 * @property {string} [type] - Type of validation
 * @property {Object} [value]
 */

/**
 * @typedef FieldDefinitionSchema
 * @property {string} [id] - Unique system generated id
 * @property {string} [resource] - Resource type to which custom field belongs
 * @property {string} [name] - Name of custom field
 * @property {string} [namespace] - Namespace of custom field
 * @property {string} [slug] - Slug of custom field
 * @property {string} [description] - Description of custom field definition
 * @property {string} [type] - Data type of custom field
 * @property {boolean} [multi_value] - Flag to denote whether custom field is
 *   multivalued or not
 * @property {FieldValidations[]} [validations] - List of validations applied
 * @property {string} [company_id] - Id of company
 * @property {boolean} [required] - Whether the custom field is required or not
 * @property {boolean} [is_deleted] - Whether the custom field is deleted or not
 * @property {string} [type_name] - Type of type field
 * @property {number} [invalid_fields_count] - Count of invalid fields after validation
 */

/**
 * @typedef CustomFieldDefinitionsSchema
 * @property {FieldDefinitionSchema[]} [items] - List of custom field definitions
 * @property {Page} [page]
 */

/**
 * @typedef CustomFieldDefinitionRequestSchema
 * @property {string} [type] - Data type of custom field
 * @property {string} [slug] - Slug of custom field definition
 * @property {string} [namespace] - Namespace of custom field definition
 * @property {boolean} [multi_value] - Flag to denote whether custom field is
 *   multi valued or not
 * @property {string} [name] - Name of custom field definition
 * @property {string} [description] - Description of a custom field definition
 * @property {FieldValidations[]} [validations] - Validations for a custom field
 */

/**
 * @typedef CustomObjectCustomFieldDefinitions
 * @property {string} [id] - Unique identifer for a custom field
 * @property {string} [type] - Data type of custom field
 * @property {string} [description] - Description of custom field
 * @property {string} [name] - Name of custom field
 * @property {boolean} [multi_value] - Flag to denote if cusom field is multi
 *   valued or not
 * @property {boolean} [required] - Whether the field is required or not
 * @property {string} [slug] - Slug of custom field definition
 * @property {FieldValidations[]} [validations] - Validations added against the
 *   custom field
 * @property {string} [action]
 */

/**
 * @typedef CustomObjectDefinitionUpdateRequestSchema
 * @property {string} [description] - Description of custom object definiton
 * @property {string} [name] - Name of custom object definition
 * @property {string} [display_name_key] - Custom field slug which is used as a
 *   display key in
 * @property {CustomObjectCustomFieldDefinitions[]} [field_definitions]
 */

/**
 * @typedef CustomFieldDefinitionDetailResSchema
 * @property {string} [resource] - Resource to which custom field is associated
 * @property {string} [name] - Name of custom field
 * @property {string} [namespace] - Namespace of custom field
 * @property {string} [slug] - Slug of custom field
 * @property {string} [description] - Description regarding custom field
 * @property {string} [type] - Data type of custom field
 * @property {boolean} [multi_value] - Flag to denote whether custom field is
 *   multi valued or not
 * @property {string} [company_id] - Company Identifer
 * @property {string} [application_id] - Sales channel identifier
 * @property {boolean} [required] - Whether the customfield is required or not
 * @property {boolean} [is_deleted] - Is custom field deleted
 * @property {string} [id] - Unique system generated id
 * @property {Object[]} [validations]
 * @property {string} [created_at] - Date time at which field was created
 * @property {string} [updated_at] - Date time at for a field's last modification
 */

/**
 * @typedef MetaFieldDefinitionDetailResSchema
 * @property {string} [resource] - Resource to which meta field is associated
 * @property {string} [name] - Name of meta field
 * @property {string} [namespace] - Namespace of meta field
 * @property {string} [slug] - Slug of meta field
 * @property {string} [description] - Description regarding meta field
 * @property {string} [type] - Data type of meta field
 * @property {boolean} [multi_value] - Flag to denote whether meta field is
 *   multi valued or not
 * @property {string} [company_id] - Company Identifer
 * @property {string} [application_id] - Sales channel identifier
 * @property {boolean} [required] - Whether the field is required or not
 * @property {boolean} [is_deleted] - Is meta field deleted
 * @property {string} [id] - Unique system generated id
 * @property {Object[]} [validations]
 * @property {string} [created_at] - Date time at which field was created
 * @property {string} [updated_at] - Date time at for a field's last modification
 */

/**
 * @typedef CustomDataDeleteSchema
 * @property {boolean} [success] - Denotes the success of the delete operation
 * @property {string} [message] - Denotes the message of delete operation
 */

/**
 * @typedef CustomFieldValue
 * @property {Object} [value]
 */

/**
 * @typedef CustomFieldSchema
 * @property {string} [id] - Unique system generated id
 * @property {string} [namespace] - Namespace of custom field definition
 * @property {string} [slug] - Slug of custom field definition
 * @property {string} [resource] - The resource for which custom field is being created
 * @property {CustomFieldValue[]} [value]
 * @property {string} [resource_slug] - Unique identifier of the resource
 * @property {string} [type] - Data type of custom field
 * @property {boolean} [multi_value] - Whether custom field is multi valued
 * @property {string} [company_id] - Identifer for a company
 * @property {boolean} [has_invalid_values]
 * @property {Object[]} [invalid_value_errors]
 * @property {boolean} [is_deleted] - Indicates whether custom field is deleted
 * @property {string} [created_at] - Time at which customer field was created
 * @property {string} [updated_at] - Time at which custom field was updated
 */

/**
 * @typedef CustomFieldsResponseSchema
 * @property {CustomFieldSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef CustomFieldsDeleteSchema
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef CustomFieldsResponseByResourceIdSchema
 * @property {CustomFieldSchema[]} [items]
 */

/**
 * @typedef CustomField
 * @property {Object[]} [value]
 * @property {string} [namespace] - This is the namespace to which custom field belongs
 * @property {string} [slug] - This is the slug of custom field used while
 *   creating a custom field definition
 */

/**
 * @typedef CustomFieldRequestSchema
 * @property {CustomField[]} [fields]
 */

/**
 * @typedef CustomObjectSchema
 * @property {string} [id] - Unique system generated id
 * @property {string} [company_id] - Identifer for a company
 * @property {string} [application_id] - Identifer for a sales channel
 * @property {string} [status] - Status of custom object
 * @property {string} [type] - Slug of custom object definition
 * @property {string} [definition_slug] - Slug for custom object definition
 * @property {string} [display_name] - Value of custom field used for displaying
 *   custom object
 * @property {CustomFieldSchema[]} [fields] - Fields associated to the custom object
 */

/**
 * @typedef CustomObjectDefinitionRequestSchema
 * @property {string} [type] - Namespace/Slug of Custom object definition
 * @property {string} [definition_slug] - Unique slug for a custom object definition
 * @property {string} [description] - Description of custom object definition
 * @property {string} [name] - Name of custom object
 * @property {string} [display_name_key] - Denotes which custom field to be used
 *   for displaying custom object
 * @property {CustomObjectCustomFieldDefinitions[]} [field_definitions] - List
 *   of custom field definitions belonging to this custom object definition
 */

/**
 * @typedef CustomObjectDefinitionSlugSchema
 * @property {string} [id] - Unique system generated custom object definition id
 * @property {string} [name] - Display name of custom object definition
 * @property {string} [type] - Type of custom object definiton
 * @property {string} [definition_slug] - Slug of custom object definiton
 * @property {string} [display_name_key] - Display name of custom object definition
 * @property {string} [description] - Description of custom object definition
 * @property {CustomFieldDefinitionDetailResSchema[]} [field_definitions] -
 *   Custom fields inside custom objects
 */

/**
 * @typedef CustomObjectDefinitionDeleteResponseSchema
 * @property {boolean} [success] - Success status of delete custom object definition.
 * @property {string} [message] - Response message when custom object definition
 *   is deleted.
 */

/**
 * @typedef CustomObjectEntryBulkUploadDetails
 * @property {string} [url] - Signed url of csv
 * @property {number} [total_records] - Total no of records in csv file
 */

/**
 * @typedef CustomObjectListItemDefinitionModel
 * @property {string} [id] - Unique system generated id
 * @property {string} [name] - Name of custom object
 * @property {string} [type] - Type of custom object entry
 */

/**
 * @typedef CustomObjectListItemSchema
 * @property {string} [id] - Unique system generated id
 * @property {string} [status] - Status of custom object
 * @property {string} [created_at] - Creation time of custom object document
 * @property {string} [updated_at] - Updation time of custom object document
 * @property {string} [display_name] - Display name of custom object
 * @property {CustomObjectListItemDefinitionModel} [definition]
 * @property {number} [references] - References of the custom object entry
 */

/**
 * @typedef CustomObjectsSchema
 * @property {CustomObjectListItemSchema[]} [items] - List of paginated custom
 *   object entries
 * @property {Page} [page]
 */

/**
 * @typedef CustomObjectFieldDefinition
 * @property {string} [id] - Unique system generate id
 * @property {string} [slug] - Slug of custom field definition
 * @property {string} [namespace] - Namespace of custom field definition
 * @property {Object[]} [value] - Value of custom field
 * @property {string} [type] - Data type of the custom field
 */

/**
 * @typedef CustomObjectBySlugSchema
 * @property {string} [id] - Unique system generated identifer for a Custom Object
 * @property {string} [status] - Status of Custom Object
 * @property {string} [display_name] - Display name for the Custom Object
 * @property {CustomObjectListItemDefinitionModel} [definition]
 * @property {Object[]} [references] - Places where the custom object has been
 *   used as a custom field
 * @property {string} [slug] - Slug of custom object entry
 * @property {string} [definition_slug] - Slug of custom object definition
 * @property {CustomObjectFieldDefinition[]} [fields] - List of custom fields
 *   inside the custom object
 */

/**
 * @typedef CustomObjectBulkEntryInitiateDownload
 * @property {string} [message] - Message for the user
 * @property {string} [task_id] - Identifer for a task
 */

/**
 * @typedef CustomObjectMetaSchema
 * @property {number} [mo_total_count] - Total number of entries in the bulk entry
 * @property {number} [mo_success_count] - Number of entries which were successful
 * @property {number} [mo_error_count] - Number of entries which were failed
 * @property {string} [mo_defintion_type] - Type of object
 */

/**
 * @typedef JobSchema
 * @property {string} [id] - Unique system generated id
 * @property {string[]} [jobs] - List of total jobs
 * @property {string[]} [finished_jobs] - List of finished jobs
 * @property {string[]} [error_jobs] - List of jobs which resulted in an error
 * @property {string[]} [errors_occured] - List of errors occurred in the job
 * @property {string} [company_id] - Company Identifer
 * @property {string} [status] - Status of job
 * @property {string} [action_type] - Type of job
 * @property {string} [entity] - Entity against which job is running
 * @property {string} [error_url] - URL which contains the file with errors
 * @property {number} [finished_count] - Number of items successfully finished
 * @property {number} [error_count] - Number of items in error
 * @property {number} [success_count] - Number of successful items
 * @property {number} [total_jobs] - Total number of jobs
 * @property {CustomObjectMetaSchema} [meta]
 * @property {string} [created_by] - Source from where the bulk job is created
 * @property {string} [created_at] - Date/Time when the job was created
 * @property {string} [updated_at] - Date/Time when the job was updated
 * @property {string} [application_id] - Sales Channel Identifier
 */

/**
 * @typedef CustomFieldBulkEntry
 * @property {JobSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef CustomObjectBulkEntry
 * @property {JobSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef MetafieldTypesSchema
 * @property {CustomFieldTypeSchema} [metafield_types]
 */

/**
 * @typedef CustomFieldTypeSchema
 * @property {StringSingleLine} [string_single_line]
 * @property {StringMultiLine} [string_multi_line]
 * @property {Dropdown} [dropdown]
 * @property {Integer} [integer]
 * @property {FloatType} [float_type]
 * @property {BooleanType} [boolean_type]
 * @property {Date} [date]
 * @property {Datetime} [datetime]
 * @property {Json} [json]
 * @property {File} [file]
 * @property {Url} [url]
 * @property {Metaobject} [metaobject]
 * @property {Product} [product]
 * @property {HTML} [html]
 * @property {Duration} [duration]
 */

/**
 * @typedef SupportedValidationsMetaExampleSchema
 * @property {string} [name]
 * @property {string} [value]
 */

/**
 * @typedef SupportedValidationsMetaSchema
 * @property {SupportedValidationsMetaExampleSchema[]} [examples]
 */

/**
 * @typedef SupportedValidationsSchema
 * @property {string} [name]
 * @property {string} [type]
 * @property {string} [display]
 * @property {boolean} [required]
 * @property {SupportedValidationsMetaSchema} [meta]
 */

/**
 * @typedef Duration
 * @property {string} [name] - Name data type of custom field
 * @property {boolean} [list_enabled] - Flag for listing enabled or not
 * @property {string} [type] - Type of custom field
 * @property {string} [category] - Category of custom field
 * @property {SupportedValidationsSchema[]} [supported_validations] - List of
 *   validations available for the field
 */

/**
 * @typedef HTML
 * @property {string} [name] - Name data type of custom field
 * @property {boolean} [list_enabled] - Flag for listing enabled or not
 * @property {string} [type] - Type of custom field
 * @property {SupportedValidationsSchema[]} [supported_validations] - List of
 *   validations available for the field
 */

/**
 * @typedef StringSingleLine
 * @property {string} [name] - Name data type of custom field
 * @property {boolean} [list_enabled] - Flag for listing enabled or not
 * @property {string} [category] - Category of custom field
 * @property {string} [type] - Type of custom field
 * @property {SupportedValidationsSchema[]} [supported_validations] - List of
 *   validations available for the field
 */

/**
 * @typedef StringMultiLine
 * @property {string} [name] - Name data type of custom field
 * @property {boolean} [list_enabled] - Flag for listing enabled or not
 * @property {string} [category] - Category of custom field
 * @property {string} [type] - Type of custom field
 * @property {SupportedValidationsSchema[]} [supported_validations] - List of
 *   validations available for the field
 */

/**
 * @typedef Dropdown
 * @property {string} [name] - Name data type of custom field
 * @property {boolean} [list_enabled] - Flag for listing enabled or not
 * @property {string} [category] - Category of custom field
 * @property {string} [type] - Category of custom field
 * @property {SupportedValidationsSchema[]} [supported_validations] - List of
 *   validations available for the field
 */

/**
 * @typedef Integer
 * @property {string} [name] - Name data type of custom field
 * @property {boolean} [list_enabled] - Flag for listing enabled or not
 * @property {string} [type] - Type of custom field
 * @property {string} [category] - Category of custom field
 * @property {SupportedValidationsSchema[]} [supported_validations] - List of
 *   validations available for the field
 */

/**
 * @typedef FloatType
 * @property {string} [name] - Name data type of custom field
 * @property {boolean} [list_enabled] - Flag for listing enabled or not
 * @property {string} [type] - Type of custom field
 * @property {string} [category] - Category of custom field
 * @property {SupportedValidationsSchema[]} [supported_validations] - List of
 *   validations available for the field
 */

/**
 * @typedef BooleanType
 * @property {string} [name] - Name data type of custom field
 * @property {string} [category] - Category of custom field
 * @property {boolean} [list_enabled] - Flag for listing enabled or not
 * @property {string} [type] - Category of custom field
 * @property {SupportedValidationsSchema[]} [supported_validations] - List of
 *   validations available for the field
 */

/**
 * @typedef Date
 * @property {string} [name] - Name data type of custom field
 * @property {boolean} [list_enabled] - Flag for listing enabled or not
 * @property {string} [category] - Category of custom field
 * @property {string} [type] - Type of custom field
 * @property {SupportedValidationsSchema[]} [supported_validations] - List of
 *   validations available for the field
 */

/**
 * @typedef Datetime
 * @property {string} [name] - Name data type of custom field
 * @property {string} [category] - Category of custom field
 * @property {boolean} [list_enabled] - Flag for listing enabled or not
 * @property {string} [type] - Type of custom field
 * @property {SupportedValidationsSchema[]} [supported_validations] - List of
 *   validations available for the field
 */

/**
 * @typedef Json
 * @property {string} [name] - Name data type of custom field
 * @property {boolean} [list_enabled] - Flag for listing enabled or not
 * @property {string} [category] - Category of custom field
 * @property {string} [type] - Type of custom field
 * @property {SupportedValidationsSchema[]} [supported_validations] - List of
 *   validations available for the field
 */

/**
 * @typedef File
 * @property {string} [name] - Name data type of custom field
 * @property {string} [category] - Category of custom field
 * @property {boolean} [list_enabled] - Flag for listing enabled or not
 * @property {string} [type] - Type of custom field
 * @property {SupportedValidationsSchema[]} [supported_validations]
 */

/**
 * @typedef Url
 * @property {string} [name] - Name data type of custom field
 * @property {boolean} [list_enabled] - Flag for listing enabled or not
 * @property {string} [type] - Type of custom field
 * @property {SupportedValidationsSchema[]} [supported_validations] - List of
 *   validations available for the field
 */

/**
 * @typedef Metaobject
 * @property {string} [name] - Name of Custom Object
 * @property {boolean} [list_enabled] - Whether the field is allowed to have
 *   multiple list items
 * @property {string} [category] - Category of Custom Object Definition that
 *   Custom Object belongs to
 * @property {string} [type] - Type of Custom Object Definition
 * @property {SupportedValidationsSchema[]} [supported_validations]
 */

/**
 * @typedef Product
 * @property {string} [name] - Name of Product
 * @property {boolean} [list_enabled] - Whether the field is allowed to have
 *   multiple list items
 * @property {string} [category] - Category of Custom Object Definition that
 *   Product is associated with
 * @property {string} [type] - Custom Object Definition that Product is associated with
 * @property {SupportedValidationsSchema[]} [supported_validations]
 */

/**
 * @typedef CustomObjectEntry
 * @property {string} [id] - Unique system generated id
 * @property {string} [name] - Name of Custom Object definition
 * @property {string} [type] - Type of Custom Object Definition
 * @property {string} [updated_at] - Updation time of a Custom Object
 * @property {number} [entries_count] - Number of entries against the Custom
 *   Object definition
 * @property {number} [fields_count] - Number of fields against a Custom Object definition
 */

/**
 * @typedef CustomObjectDefinitionsSchema
 * @property {CustomObjectEntry[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef CustomObjectEntryFieldSchema
 * @property {string} [namespace] - This is namespace for a custom field definition
 * @property {string} [slug] - This is slug for a custom field definition
 */

/**
 * @typedef CustomObjectEntryFieldSchemaWithoutID
 * @property {string} [slug] - Custom fields belonging to a custom object
 * @property {Object} [value] - Value of custom field inside a custom object
 */

/**
 * @typedef CustomObjectRequestSchema
 * @property {string} [status] - Flag to denote status of Custom Object
 * @property {string} [slug] - This is slug for a custom field definition
 * @property {CustomObjectEntryFieldSchema[]} [fields] - List of custom fields
 */

/**
 * @typedef CustomObjectRequestSchemaWithoutId
 * @property {string} [status] - Status of the custom object entry.
 * @property {CustomObjectEntryFieldSchemaWithoutID[]} [fields] - List of custom fields
 */

/**
 * @typedef CustomObjectBulkSchema
 * @property {string} [url] - Full URL for the bulk operations data
 * @property {number} [total_records] - Total records in the upload.
 */

/**
 * @typedef ActionPage
 * @property {Object} [params] - Parameters that should be considered in path.
 * @property {Object} [query] - Query parameter if any to be added to the action.
 * @property {string} [url] - The URL for the action.
 * @property {PageType} type
 */

/**
 * @typedef TranslateUiLabels
 * @property {string} [_id] - Unique identifier assigned to the Translate Ui Labels entry
 * @property {string} [company_id] - Identifier linking the resource to a
 *   specific company within the platform
 * @property {string} [application_id] - Reference to the application where this
 *   Translate Ui Labels is utilized
 * @property {string} [template_theme_id] - Links the resource to a specific
 *   template theme configuration
 * @property {string} [theme_id] - Associates the resource with a particular
 *   theme implementation
 * @property {string} [locale] - Specifies the language and region format for
 *   the resource content
 * @property {Object} [resource] - Contains the actual resource data and
 *   configuration settings
 * @property {string} [type] - Categorizes the resource type for proper handling
 *   and processing
 */

/**
 * @typedef TranslateUiLabelsCreate
 * @property {string} [template_theme_id] - Unique identifier for the template theme
 * @property {string} [theme_id] - Unique identifier for the theme
 * @property {string} [locale] - Locale
 * @property {Object} [resource] - Translate Ui Labels json object
 * @property {string} [type] - Resource type
 */

/**
 * @typedef StaticResourceUpdate
 * @property {string} [template_theme_id] - Unique identifier for the template theme
 * @property {string} [theme_id] - Unique identifier for the theme
 * @property {string} [locale] - Locale
 * @property {Object} [resource] - Translate Ui Labels json object
 * @property {string} [type] - Resource type
 */

/**
 * @typedef TranslateUiLabelsPage
 * @property {TranslateUiLabels[]} [items] - List of items containing all the
 *   static info data.
 * @property {Page} [page]
 */

/**
 * @typedef Error
 * @property {string} [error] - Detailed message explaining the error that occurred
 */

/**
 * @typedef Meta
 * @property {string} [created_by] - Identifier of the user who created this resource
 * @property {string} [modified_by] - Identifier of the user who last modified
 *   this resource
 * @property {string} [created_on] - Timestamp when this resource was initially created
 * @property {string} [modified_on] - Timestamp when this resource was last modified
 */

/**
 * @typedef CompanyLanguage
 * @property {string} [_id] - Unique identifier for the company language setting
 * @property {string} company_id - Identifier of the company this language
 *   configuration belongs to
 * @property {string} [locale] - Language code following ISO standards for this
 *   company setting
 * @property {string} [name] - Display name of the language for company usage
 * @property {string} [direction] - Text direction setting for company content
 *   in this language
 * @property {boolean} [is_default] - Indicates if this is the default language
 *   for the company
 * @property {string} [display_name] - Translated name of the language in
 *   English for easy reference and display at the website.
 */

/**
 * @typedef CompanyLanguageCreate
 * @property {string[]} locales - List of language codes to be added to company
 *   configuration
 */

/**
 * @typedef CompanyLanguageUpdate
 * @property {boolean} is_default - Sets the specified language as the company default
 */

/**
 * @typedef ApplicationLanguage
 * @property {string} [_id] - Unique identifier for the application language setting
 * @property {string} company_id - Identifier of the company this application belongs to
 * @property {string} application_id - Unique identifier of the application
 *   using this language
 * @property {string} locale - Language code following ISO standards for this application
 * @property {string} name - Display name of the language for application usage
 * @property {string} direction - Specifies the text direction for displaying
 *   application content, either left-to-right (ltr) or right-to-left (rtl)
 * @property {boolean} is_default - Indicates if this is the default language
 *   for the application
 * @property {boolean} published - Indicates whether this language is currently
 *   active and visible within the storefront.
 * @property {string} [display_name] - Translated name of the language in
 *   English for easy reference and display at the website.
 */

/**
 * @typedef unPublishApplicationLanguage
 * @property {boolean} published - Updates the publication status of the language
 */

/**
 * @typedef ApplicationLanguageCreate
 * @property {string[]} locales - List of language codes to be added to
 *   application configuration
 */

/**
 * @typedef ApplicationLanguageUpdate
 * @property {boolean} is_default - Sets the specified language as the application default
 * @property {boolean} published - Updates the publication status of the language
 */

/**
 * @typedef TranslatableResource
 * @property {string} [_id] - Unique identifier for the translatable resource
 * @property {string} type - Categorizes the type of content that can be translated
 * @property {string} name - Display name of the translatable resource
 * @property {string} description - Detailed explanation of the translatable resource
 * @property {string} schema_type - Defines the processing type for the
 *   translation schema static (fixed), dynamic (flexible), or partial_dynamic (mixed).
 * @property {string} [created_by] - Identifier of the user who created this resource
 * @property {string} [modified_by] - Identifier of the user who last modified
 *   this resource
 * @property {string} [created_on] - Timestamp when this resource was initially created
 * @property {string} [modified_on] - Timestamp when this resource was last modified
 * @property {TranslatableSection} [section_id]
 */

/**
 * @typedef ResourceDefinition
 * @property {string} [_id] - Unique identifier for the resource definition
 * @property {string} translatable_resource_id - Reference to the associated
 *   translatable resource
 * @property {ResourceJsonSchema} [json_schema]
 * @property {ResourceUISchema} [ui_schema]
 * @property {ResourceBulkDetails} [bulk_details]
 */

/**
 * @typedef ResourceJsonSchema
 * @property {string} [schema]
 * @property {ResourceJsonSchemaType} [type]
 */

/**
 * @typedef ResourceJsonSchemaType
 * @property {Author} [author]
 * @property {Title} [title]
 * @property {FeatureImage} [feature_image]
 */

/**
 * @typedef ResourceUISchema
 * @property {Author} [author]
 * @property {Title} [title]
 * @property {FeatureImage} [feature_image]
 * @property {Seo} [seo]
 */

/**
 * @typedef ResourceBulkDetails
 * @property {string[]} [fields]
 */

/**
 * @typedef Title
 * @property {string} [ui_widget]
 * @property {boolean} [ui_description]
 */

/**
 * @typedef FeatureImage
 * @property {string} [secure_url] - URL of the secure image
 */

/**
 * @typedef Seo
 * @property {Title} [title]
 * @property {string} [description]
 * @property {string} [canonical_url]
 * @property {MetaTag[]} [meta_tags]
 */

/**
 * @typedef MetaTag
 * @property {string} [title] - Title of the meta tag
 * @property {MetaTagItem[]} [items]
 */

/**
 * @typedef MetaTagItem
 * @property {string} [key] - Key of the meta tag item
 * @property {string} [value] - Value of the meta tag item
 */

/**
 * @typedef ResourceTranslation
 * @property {string} [_id] - Unique identifier for the translation entry
 * @property {string} [locale] - Language code for this translation
 * @property {Object} [value] - Translated content in key-value format
 */

/**
 * @typedef TranslationSeo
 * @property {string} [title] - Translated SEO title
 * @property {string[]} [breadcrumbs] - List of translated breadcrumbs
 * @property {string[]} [meta_tags] - List of translated meta tags
 * @property {string} [canonical_url] - Translated canonical URL
 * @property {string} [description] - Translated SEO description
 */

/**
 * @typedef ResourceTranslationList
 * @property {ResourceTranslationCreate[]} [items]
 */

/**
 * @typedef ResourceTranslationCreate
 * @property {string} [type] - Type of content being translated
 * @property {string} [resource_id] - Identifier of the resource requiring translation
 * @property {string} [locale] - Target language code for the translation
 * @property {Object} [value] - Translated content in key-value format
 */

/**
 * @typedef ResourceTranslationUpdate
 * @property {Object} [value] - Translated content in key-value format
 */

/**
 * @typedef TranslatableSection
 * @property {string} [_id] - Unique identifier for the translatable section
 * @property {string} [name] - Display name of the section
 * @property {string} [description] - Detailed explanation of the section's purpose
 * @property {string} [created_by] - Identifier of the user who created this resource
 * @property {string} [modified_by] - Identifier of the user who last modified
 *   this resource
 * @property {string} [created_on] - Timestamp when this resource was initially created
 * @property {string} [modified_on] - Timestamp when this resource was last modified
 */

/**
 * @typedef Metrics
 * @property {number} [total] - Total number of translation operations attempted
 * @property {number} [success] - Number of successful translation operations
 * @property {number} [failed] - Number of failed translation operations
 */

/**
 * @typedef ResourceTranslationUpsertItem
 * @property {string} [message] - Status message for the translation operation
 * @property {ResourceTranslationCreate} [data]
 */

/**
 * @typedef ResourceTranslationBulkUpsert
 * @property {Metrics} [metrics]
 * @property {ResourceTranslationUpsertItem[]} [failed_items] - List of failed
 *   translation operations
 * @property {ResourceTranslationUpsertItem[]} [updated_items] - List of
 *   successful translation operations
 */

/**
 * @typedef StandardError
 * @property {string} message - A brief description of the error.
 */

/**
 * @typedef OperationResponseSchema
 * @property {boolean} success - Indicates if the operation was successful
 * @property {string} [message] - Optional message providing additional
 *   information about the operation
 */

/** @typedef {"title" | "description"} GenerationEntityType */

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
 *   | "profile-email"
 *   | "profile-phone"
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
 *   | "locate-us"
 *   | "single-page-checkout"
 *   | "request-reattempt"} PageType
 */

class ContentPlatformModel {
  /** @returns {ValidationError} */
  static ValidationError() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      field: Joi.string().allow("").required(),
    });
  }

  /** @returns {GenerateSEOContent} */
  static GenerateSEOContent() {
    return Joi.object({
      text: Joi.string().allow(""),
      existing_text: Joi.string().allow(""),
      keywords: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {GeneratedSEOContent} */
  static GeneratedSEOContent() {
    return Joi.object({
      title: Joi.string().allow(""),
      description: Joi.string().allow(""),
    });
  }

  /** @returns {ApplicationLegal} */
  static ApplicationLegal() {
    return Joi.object({
      application: Joi.string().allow(""),
      tnc: Joi.string().allow(""),
      policy: Joi.string().allow(""),
      shipping: Joi.string().allow(""),
      returns: Joi.string().allow(""),
      faq: Joi.array().items(ContentPlatformModel.ApplicationLegalFAQ()),
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

  /** @returns {PathMappingSchema} */
  static PathMappingSchema() {
    return Joi.object({
      application: Joi.string().allow(""),
      _id: Joi.string().allow(""),
      redirect_from: Joi.string().allow(""),
      redirect_to: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      __source: ContentPlatformModel.PathSourceSchema(),
    });
  }

  /** @returns {PathSourceSchema} */
  static PathSourceSchema() {
    return Joi.object({
      type: Joi.string().allow(""),
      id: Joi.string().allow(""),
    });
  }

  /** @returns {SeoComponent} */
  static SeoComponent() {
    return Joi.object({
      seo: ContentPlatformModel.SeoSchema(),
    });
  }

  /** @returns {SeoSchema} */
  static SeoSchema() {
    return Joi.object({
      app: Joi.string().allow(""),
      _id: Joi.string().allow(""),
      robots_txt: Joi.string().allow(""),
      sitemap_enabled: Joi.boolean(),
      additional_sitemap: Joi.string().allow(""),
      cannonical_enabled: Joi.boolean(),
      custom_meta_tags: Joi.array().items(ContentPlatformModel.CustomMetaTag()),
      details: ContentPlatformModel.Detail(),
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
      items: Joi.array().items(ContentPlatformModel.SEOSchemaMarkupTemplate()),
      page: ContentPlatformModel.Page(),
    });
  }

  /** @returns {SEOSchemaMarkupTemplate} */
  static SEOSchemaMarkupTemplate() {
    return Joi.object({
      id: Joi.string().allow(""),
      title: Joi.string().allow(""),
      page_type: Joi.string().allow(""),
      schema: Joi.string().allow(""),
      description: Joi.string().allow(""),
      active: Joi.boolean(),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      application: Joi.string().allow(""),
      target_json: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {SEOSchemaMarkupTemplateRequestBody} */
  static SEOSchemaMarkupTemplateRequestBody() {
    return Joi.object({
      title: Joi.string().allow(""),
      page_type: Joi.string().allow(""),
      schema: Joi.string().allow(""),
      description: Joi.string().allow(""),
      target_json: Joi.object().pattern(/\S/, Joi.any()),
      active: Joi.boolean(),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {AnnouncementPageSchema} */
  static AnnouncementPageSchema() {
    return Joi.object({
      page_slug: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {EditorMeta} */
  static EditorMeta() {
    return Joi.object({
      foreground_color: Joi.string().allow(""),
      background_color: Joi.string().allow(""),
      content_type: Joi.string().allow(""),
      content: Joi.string().allow(""),
    });
  }

  /** @returns {AnnouncementAuthorSchema} */
  static AnnouncementAuthorSchema() {
    return Joi.object({
      created_by: Joi.string().allow(""),
      modified_by: Joi.string().allow(""),
    });
  }

  /** @returns {AdminAnnouncementSchema} */
  static AdminAnnouncementSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      platforms: Joi.array().items(Joi.string().allow("")),
      title: Joi.string().allow(""),
      announcement: Joi.string().allow(""),
      pages: Joi.array().items(ContentPlatformModel.AnnouncementPageSchema()),
      editor_meta: ContentPlatformModel.EditorMeta(),
      author: ContentPlatformModel.AnnouncementAuthorSchema(),
      created_at: Joi.string().allow(""),
      app: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
      _schedule: ContentPlatformModel.ScheduleSchema(),
    });
  }

  /** @returns {DefaultSchemaComponent} */
  static DefaultSchemaComponent() {
    return Joi.object({
      items: Joi.array().items(
        ContentPlatformModel.DefaultSEOSchemaMarkupTemplate()
      ),
    });
  }

  /** @returns {DefaultSEOSchemaMarkupTemplate} */
  static DefaultSEOSchemaMarkupTemplate() {
    return Joi.object({
      page_type: Joi.string().allow(""),
      schema: Joi.string().allow(""),
      target_json: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {ScheduleSchema} */
  static ScheduleSchema() {
    return Joi.object({
      cron: Joi.string().allow(""),
      start: Joi.string().allow(""),
      end: Joi.string().allow(""),
      duration: Joi.number(),
      next_schedule: Joi.array().items(ContentPlatformModel.NextSchedule()),
    });
  }

  /** @returns {NextSchedule} */
  static NextSchedule() {
    return Joi.object({
      start: Joi.string().allow(""),
      end: Joi.string().allow(""),
    });
  }

  /** @returns {BlogGetDetails} */
  static BlogGetDetails() {
    return Joi.object({
      items: Joi.array().items(ContentPlatformModel.BlogSchema()),
      page: ContentPlatformModel.Page(),
      filters: ContentPlatformModel.BlogFilters(),
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
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      application: Joi.string().allow(""),
      archived: Joi.boolean(),
      author: ContentPlatformModel.Author(),
      content: Joi.array().items(ContentPlatformModel.ResourceContent()),
      feature_image: ContentPlatformModel.Asset(),
      published: Joi.boolean(),
      reading_time: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      publish_date: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      seo: ContentPlatformModel.SEO(),
      title: Joi.string().allow(""),
      date_meta: ContentPlatformModel.DateMeta(),
      summary: Joi.string().allow(""),
    });
  }

  /** @returns {SEO} */
  static SEO() {
    return Joi.object({
      description: Joi.string().allow(""),
      image: ContentPlatformModel.SEOImage(),
      title: Joi.string().allow(""),
      meta_tags: Joi.array().items(ContentPlatformModel.SEOMetaItem()),
      sitemap: ContentPlatformModel.SEOSitemap(),
      breadcrumb: Joi.array().items(ContentPlatformModel.SEObreadcrumb()),
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
      items: Joi.array().items(ContentPlatformModel.SEOMetaItems()),
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
      action: ContentPlatformModel.Action(),
    });
  }

  /** @returns {DateMeta} */
  static DateMeta() {
    return Joi.object({
      created_on: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
    });
  }

  /** @returns {BlogPayload} */
  static BlogPayload() {
    return Joi.object({
      application: Joi.string().allow(""),
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      author: ContentPlatformModel.Author(),
      content: Joi.array().items(ContentPlatformModel.ResourceContent()),
      feature_image: ContentPlatformModel.Asset(),
      published: Joi.boolean(),
      reading_time: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      title: Joi.string().allow(""),
      seo: ContentPlatformModel.SEO(),
      summary: Joi.string().allow(""),
    });
  }

  /** @returns {GetAnnouncementListSchema} */
  static GetAnnouncementListSchema() {
    return Joi.object({
      items: Joi.array().items(ContentPlatformModel.AdminAnnouncementSchema()),
      page: ContentPlatformModel.Page(),
    });
  }

  /** @returns {CreateAnnouncementSchema} */
  static CreateAnnouncementSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
      data: ContentPlatformModel.AdminAnnouncementSchema(),
    });
  }

  /** @returns {DataLoaderResponseSchema} */
  static DataLoaderResponseSchema() {
    return Joi.object({
      application: Joi.string().allow(""),
      company: Joi.string().allow(""),
      _id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      service: Joi.string().allow(""),
      operation_id: Joi.string().allow(""),
      type: Joi.string().allow(""),
      url: Joi.string().allow(""),
      content: Joi.string().allow(""),
      __source: ContentPlatformModel.DataLoaderSourceSchema(),
    });
  }

  /** @returns {DataLoaderResetResponseSchema} */
  static DataLoaderResetResponseSchema() {
    return Joi.object({
      reset: Joi.boolean(),
    });
  }

  /** @returns {LocaleLanguage} */
  static LocaleLanguage() {
    return Joi.object({
      hi: ContentPlatformModel.Language(),
      ar: ContentPlatformModel.Language(),
      en_us: ContentPlatformModel.Language(),
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
      page: ContentPlatformModel.ActionPage(),
      popup: ContentPlatformModel.ActionPage(),
    });
  }

  /** @returns {NavigationReference} */
  static NavigationReference() {
    return Joi.object({
      acl: Joi.array().items(Joi.string().allow("")),
      tags: Joi.array().items(Joi.string().allow("")),
      _locale_language: ContentPlatformModel.LocaleLanguage(),
      image: Joi.string().allow(""),
      type: Joi.string().allow(""),
      action: ContentPlatformModel.Action(),
      active: Joi.boolean(),
      display: Joi.string().allow(""),
      sort_order: Joi.number(),
      schedule: ContentPlatformModel.CronBasedScheduleSchema(),
      sub_navigation: Joi.array().items(Joi.link("#NavigationReference")),
    }).id("NavigationReference");
  }

  /** @returns {CronBasedScheduleSchema} */
  static CronBasedScheduleSchema() {
    return Joi.object({
      enabled: Joi.boolean(),
      cron: Joi.string().allow(""),
      start: Joi.string().allow(""),
      end: Joi.string().allow(""),
    });
  }

  /** @returns {UpdateHandpickedSchema} */
  static UpdateHandpickedSchema() {
    return Joi.object({
      tag: ContentPlatformModel.HandpickedTagSchema(),
    });
  }

  /** @returns {HandpickedTagSchema} */
  static HandpickedTagSchema() {
    return Joi.object({
      position: Joi.string().allow(""),
      attributes: Joi.object().pattern(/\S/, Joi.any()),
      compatible_engines: Joi.array().items(Joi.string().allow("")),
      name: Joi.string().allow(""),
      url: Joi.string().allow(""),
      type: Joi.string().allow(""),
      sub_type: Joi.string().allow(""),
      content: Joi.string().allow(""),
      template: ContentPlatformModel.TemplateSchema(),
    });
  }

  /** @returns {RemoveHandpickedSchema} */
  static RemoveHandpickedSchema() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {CreateTagSchema} */
  static CreateTagSchema() {
    return Joi.object({
      name: Joi.string().allow(""),
      sub_type: Joi.string().allow(""),
      _id: Joi.string().allow(""),
      type: Joi.string().allow(""),
      url: Joi.string().allow(""),
      position: Joi.string().allow(""),
      attributes: Joi.object().pattern(/\S/, Joi.any()),
      compatible_engines: Joi.array().items(Joi.string().allow("")),
      pages: Joi.array().items(Joi.any()),
      content: Joi.string().allow(""),
      template: ContentPlatformModel.TemplateSchema(),
    });
  }

  /** @returns {TemplateSchema} */
  static TemplateSchema() {
    return Joi.object({
      template_id: Joi.string().allow(""),
      template_version: Joi.string().allow(""),
      template_fields: Joi.array().items(ContentPlatformModel.TemplateField()),
    });
  }

  /** @returns {TemplateField} */
  static TemplateField() {
    return Joi.object({
      key: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {CreateTagRequestSchema} */
  static CreateTagRequestSchema() {
    return Joi.object({
      tags: Joi.array().items(ContentPlatformModel.CreateTagSchema()),
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
      __source: ContentPlatformModel.DataLoaderSourceSchema(),
      _id: Joi.string().allow(""),
    });
  }

  /** @returns {TagsTemplateSchema} */
  static TagsTemplateSchema() {
    return Joi.object({
      items: Joi.array().items(ContentPlatformModel.TagTemplateItem()),
    });
  }

  /** @returns {TagTemplateItem} */
  static TagTemplateItem() {
    return Joi.object({
      template_name: Joi.string().allow(""),
      type: Joi.string().allow(""),
      sub_type: Joi.string().allow(""),
      position: Joi.string().allow(""),
      pages: Joi.array().items(Joi.string().allow("")),
      attributes: Joi.object().pattern(/\S/, Joi.any()),
      compatible_engines: Joi.array().items(Joi.string().allow("")),
      field_mappings: Joi.object().pattern(/\S/, Joi.any()),
      layout: ContentPlatformModel.TemplateLayout(),
      name: Joi.string().allow(""),
      path: Joi.string().allow(""),
      description: Joi.string().allow(""),
      image: Joi.string().allow(""),
      note: Joi.string().allow(""),
      template_id: Joi.string().allow(""),
      template_version: Joi.string().allow(""),
      category: Joi.string().allow(""),
      fields: Joi.array().items(ContentPlatformModel.FieldDefinition()),
      script: Joi.string().allow(""),
    });
  }

  /** @returns {TemplateLayout} */
  static TemplateLayout() {
    return Joi.object({
      columns: Joi.number(),
      gap: Joi.string().allow(""),
      responsive: Joi.boolean(),
    });
  }

  /** @returns {FieldDefinition} */
  static FieldDefinition() {
    return Joi.object({
      name: Joi.string().allow(""),
      type: Joi.string().allow(""),
      label: Joi.string().allow(""),
      placeholder: Joi.string().allow(""),
      required: Joi.boolean(),
      size: Joi.string().allow(""),
      description: Joi.string().allow(""),
      validation: ContentPlatformModel.FieldValidation(),
      events: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {FieldValidation} */
  static FieldValidation() {
    return Joi.object({
      pattern: Joi.string().allow(""),
      message: Joi.string().allow(""),
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
      items: Joi.array().items(ContentPlatformModel.DataLoaderSchema()),
    });
  }

  /** @returns {TagDeleteSuccessDetails} */
  static TagDeleteSuccessDetails() {
    return Joi.object({
      success: Joi.boolean(),
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
      meta: Joi.object().pattern(/\S/, Joi.any()),
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
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
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

  /** @returns {CategoryRequestSchema} */
  static CategoryRequestSchema() {
    return Joi.object({
      slug: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {FAQCategorySchema} */
  static FAQCategorySchema() {
    return Joi.object({
      index: Joi.number(),
      title: Joi.string().allow(""),
      description: Joi.string().allow(""),
      children: Joi.array().items(ContentPlatformModel.ChildrenSchema()),
      _id: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      application: Joi.string().allow(""),
      icon_url: Joi.string().allow(""),
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
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

  /** @returns {FAQ} */
  static FAQ() {
    return Joi.object({
      slug: Joi.string().allow(""),
      question: Joi.string().allow(""),
      answer: Joi.string().allow(""),
    });
  }

  /** @returns {CreateFaqResponseSchema} */
  static CreateFaqResponseSchema() {
    return Joi.object({
      faq: ContentPlatformModel.FaqSchema(),
    });
  }

  /** @returns {CreateFaqSchema} */
  static CreateFaqSchema() {
    return Joi.object({
      faq: ContentPlatformModel.FAQ(),
    });
  }

  /** @returns {GetFaqSchema} */
  static GetFaqSchema() {
    return Joi.object({
      faqs: Joi.array().items(ContentPlatformModel.FaqSchema()),
    });
  }

  /** @returns {UpdateFaqCategoryRequestSchema} */
  static UpdateFaqCategoryRequestSchema() {
    return Joi.object({
      category: ContentPlatformModel.CategorySchema(),
    });
  }

  /** @returns {CreateFaqCategoryRequestSchema} */
  static CreateFaqCategoryRequestSchema() {
    return Joi.object({
      category: ContentPlatformModel.CategoryRequestSchema(),
    });
  }

  /** @returns {CreateFaqCategorySchema} */
  static CreateFaqCategorySchema() {
    return Joi.object({
      category: ContentPlatformModel.CategorySchema(),
    });
  }

  /** @returns {GetFaqCategoriesSchema} */
  static GetFaqCategoriesSchema() {
    return Joi.object({
      categories: Joi.array().items(ContentPlatformModel.CategorySchema()),
    });
  }

  /** @returns {GetFaqCategoryBySlugSchema} */
  static GetFaqCategoryBySlugSchema() {
    return Joi.object({
      category: ContentPlatformModel.FAQCategorySchema(),
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
      page_size: Joi.number(),
    });
  }

  /** @returns {LandingPageGetDetails} */
  static LandingPageGetDetails() {
    return Joi.object({
      items: Joi.array().items(ContentPlatformModel.LandingPageSchema()),
      page: ContentPlatformModel.Page(),
    });
  }

  /** @returns {LandingPageSchema} */
  static LandingPageSchema() {
    return Joi.object({
      slug: Joi.string().allow(""),
      action: ContentPlatformModel.Action(),
      platform: Joi.array().items(Joi.string().allow("")),
      created_by: ContentPlatformModel.CreatedBySchema(),
      date_meta: ContentPlatformModel.DateMeta(),
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      archived: Joi.boolean(),
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {DefaultNavigationDetails} */
  static DefaultNavigationDetails() {
    return Joi.object({
      items: Joi.array().items(ContentPlatformModel.NavigationSchema()),
    });
  }

  /** @returns {NavigationGetDetails} */
  static NavigationGetDetails() {
    return Joi.object({
      items: Joi.array().items(ContentPlatformModel.NavigationSchema()),
      page: ContentPlatformModel.Page(),
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
      created_by: ContentPlatformModel.CreatedBySchema(),
      date_meta: ContentPlatformModel.DateMeta(),
      orientation: ContentPlatformModel.Orientation(),
      version: Joi.number(),
      navigation: Joi.array().items(ContentPlatformModel.NavigationReference()),
    });
  }

  /** @returns {NavigationPayload} */
  static NavigationPayload() {
    return Joi.object({
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      platform: Joi.array().items(Joi.string().allow("")),
      orientation: ContentPlatformModel.Orientation(),
      navigation: Joi.array().items(ContentPlatformModel.NavigationReference()),
    });
  }

  /** @returns {PageGetDetails} */
  static PageGetDetails() {
    return Joi.object({
      items: Joi.array().items(ContentPlatformModel.PageSchema()),
      page: ContentPlatformModel.Page(),
    });
  }

  /** @returns {PageSpec} */
  static PageSpec() {
    return Joi.object({
      specifications: Joi.array().items(ContentPlatformModel.PageSpecItem()),
    });
  }

  /** @returns {PageSpecParam} */
  static PageSpecParam() {
    return Joi.object({
      key: Joi.string().allow(""),
      required: Joi.boolean(),
    });
  }

  /** @returns {PageSpecItem} */
  static PageSpecItem() {
    return Joi.object({
      page_type: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      params: Joi.array().items(ContentPlatformModel.PageSpecParam()),
      query: Joi.array().items(ContentPlatformModel.PageSpecParam()),
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
      created_by: ContentPlatformModel.CreatedBySchema(),
      date_meta: ContentPlatformModel.DateMeta(),
      description: Joi.string().allow(""),
      feature_image: ContentPlatformModel.Asset(),
      page_meta: Joi.array().items(Joi.any()),
      _schedule: ContentPlatformModel.ScheduleSchema(),
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      orientation: Joi.string().allow(""),
      platform: Joi.string().allow(""),
      published: Joi.boolean(),
      slug: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      title: Joi.string().allow(""),
      type: Joi.string().allow(""),
      seo: ContentPlatformModel.SEO(),
      visibility: Joi.object().pattern(/\S/, Joi.any()),
      archived: Joi.boolean(),
    });
  }

  /** @returns {CreatedBySchema} */
  static CreatedBySchema() {
    return Joi.object({
      id: Joi.string().allow(""),
    });
  }

  /** @returns {PagePayload} */
  static PagePayload() {
    return Joi.object({
      _schedule: ContentPlatformModel.CronSchedule(),
      application: Joi.string().allow(""),
      author: ContentPlatformModel.Author(),
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      orientation: Joi.string().allow(""),
      content: Joi.array().items(Joi.any()),
      feature_image: ContentPlatformModel.Asset(),
      published: Joi.boolean(),
      reading_time: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      seo: ContentPlatformModel.SEO(),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {CronSchedule} */
  static CronSchedule() {
    return Joi.object({
      cron: Joi.string().allow(""),
      start: Joi.string().allow(""),
      end: Joi.string().allow(""),
      duration: Joi.number(),
    });
  }

  /** @returns {PagePublishPayload} */
  static PagePublishPayload() {
    return Joi.object({
      publish: Joi.boolean(),
    });
  }

  /** @returns {PageMetaSchema} */
  static PageMetaSchema() {
    return Joi.object({
      system_pages: Joi.array().items(ContentPlatformModel.NavigationSchema()),
      custom_pages: Joi.array().items(ContentPlatformModel.PageSchema()),
      application_id: Joi.string().allow(""),
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
      contact: ContentPlatformModel.ContactSchema(),
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
      phone: Joi.array().items(ContentPlatformModel.PhoneProperties()),
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
      email: Joi.array().items(ContentPlatformModel.EmailProperties()),
    });
  }

  /** @returns {ContactSchema} */
  static ContactSchema() {
    return Joi.object({
      phone: ContentPlatformModel.PhoneSchema(),
      email: ContentPlatformModel.EmailSchema(),
    });
  }

  /** @returns {TagsSchema} */
  static TagsSchema() {
    return Joi.object({
      application: Joi.string().allow(""),
      _id: Joi.string().allow(""),
      company: Joi.string().allow(""),
      tags: Joi.array().items(ContentPlatformModel.TagSchema()),
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
      attributes: Joi.object().pattern(/\S/, Joi.any()),
      content: Joi.string().allow(""),
      compatible_engines: Joi.array().items(Joi.string().allow("")),
      pages: Joi.array().items(Joi.any()),
      __source: ContentPlatformModel.TagSourceSchema(),
      template: ContentPlatformModel.TemplateSchema(),
    });
  }

  /** @returns {TagSourceSchema} */
  static TagSourceSchema() {
    return Joi.object({
      type: Joi.string().allow(""),
      id: Joi.string().allow(""),
    });
  }

  /** @returns {ResourcesSchema} */
  static ResourcesSchema() {
    return Joi.object({
      resources: Joi.array().items(ContentPlatformModel.ResourceSchema()),
    });
  }

  /** @returns {ResourceSchema} */
  static ResourceSchema() {
    return Joi.object({
      name: Joi.string().allow(""),
      key: Joi.string().allow(""),
      definitions_count: Joi.number(),
    });
  }

  /** @returns {FieldValidations} */
  static FieldValidations() {
    return Joi.object({
      name: Joi.string().allow(""),
      type: Joi.string().allow(""),
      value: Joi.any(),
    });
  }

  /** @returns {FieldDefinitionSchema} */
  static FieldDefinitionSchema() {
    return Joi.object({
      id: Joi.string().allow(""),
      resource: Joi.string().allow(""),
      name: Joi.string().allow(""),
      namespace: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      description: Joi.string().allow(""),
      type: Joi.string().allow(""),
      multi_value: Joi.boolean(),
      validations: Joi.array().items(ContentPlatformModel.FieldValidations()),
      company_id: Joi.string().allow(""),
      required: Joi.boolean(),
      is_deleted: Joi.boolean(),
      type_name: Joi.string().allow(""),
      invalid_fields_count: Joi.number(),
    });
  }

  /** @returns {CustomFieldDefinitionsSchema} */
  static CustomFieldDefinitionsSchema() {
    return Joi.object({
      items: Joi.array().items(ContentPlatformModel.FieldDefinitionSchema()),
      page: ContentPlatformModel.Page(),
    });
  }

  /** @returns {CustomFieldDefinitionRequestSchema} */
  static CustomFieldDefinitionRequestSchema() {
    return Joi.object({
      type: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      namespace: Joi.string().allow(""),
      multi_value: Joi.boolean(),
      name: Joi.string().allow(""),
      description: Joi.string().allow(""),
      validations: Joi.array().items(ContentPlatformModel.FieldValidations()),
    });
  }

  /** @returns {CustomObjectCustomFieldDefinitions} */
  static CustomObjectCustomFieldDefinitions() {
    return Joi.object({
      id: Joi.string().allow(""),
      type: Joi.string().allow(""),
      description: Joi.string().allow(""),
      name: Joi.string().allow(""),
      multi_value: Joi.boolean(),
      required: Joi.boolean(),
      slug: Joi.string().allow(""),
      validations: Joi.array().items(ContentPlatformModel.FieldValidations()),
      action: Joi.string().allow(""),
    });
  }

  /** @returns {CustomObjectDefinitionUpdateRequestSchema} */
  static CustomObjectDefinitionUpdateRequestSchema() {
    return Joi.object({
      description: Joi.string().allow(""),
      name: Joi.string().allow(""),
      display_name_key: Joi.string().allow(""),
      field_definitions: Joi.array().items(
        ContentPlatformModel.CustomObjectCustomFieldDefinitions()
      ),
    });
  }

  /** @returns {CustomFieldDefinitionDetailResSchema} */
  static CustomFieldDefinitionDetailResSchema() {
    return Joi.object({
      resource: Joi.string().allow(""),
      name: Joi.string().allow(""),
      namespace: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      description: Joi.string().allow(""),
      type: Joi.string().allow(""),
      multi_value: Joi.boolean(),
      company_id: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
      required: Joi.boolean(),
      is_deleted: Joi.boolean(),
      id: Joi.string().allow(""),
      validations: Joi.array().items(Joi.any()),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {MetaFieldDefinitionDetailResSchema} */
  static MetaFieldDefinitionDetailResSchema() {
    return Joi.object({
      resource: Joi.string().allow(""),
      name: Joi.string().allow(""),
      namespace: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      description: Joi.string().allow(""),
      type: Joi.string().allow(""),
      multi_value: Joi.boolean(),
      company_id: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
      required: Joi.boolean(),
      is_deleted: Joi.boolean(),
      id: Joi.string().allow(""),
      validations: Joi.array().items(Joi.any()),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {CustomDataDeleteSchema} */
  static CustomDataDeleteSchema() {
    return Joi.object({
      success: Joi.boolean(),
      message: Joi.string().allow(""),
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
      id: Joi.string().allow(""),
      namespace: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      resource: Joi.string().allow(""),
      value: Joi.array().items(ContentPlatformModel.CustomFieldValue()),
      resource_slug: Joi.string().allow(""),
      type: Joi.string().allow(""),
      multi_value: Joi.boolean(),
      company_id: Joi.string().allow(""),
      has_invalid_values: Joi.boolean(),
      invalid_value_errors: Joi.array().items(Joi.any()),
      is_deleted: Joi.boolean(),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {CustomFieldsResponseSchema} */
  static CustomFieldsResponseSchema() {
    return Joi.object({
      items: Joi.array().items(ContentPlatformModel.CustomFieldSchema()),
      page: ContentPlatformModel.Page(),
    });
  }

  /** @returns {CustomFieldsDeleteSchema} */
  static CustomFieldsDeleteSchema() {
    return Joi.object({
      success: Joi.boolean(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {CustomFieldsResponseByResourceIdSchema} */
  static CustomFieldsResponseByResourceIdSchema() {
    return Joi.object({
      items: Joi.array().items(ContentPlatformModel.CustomFieldSchema()),
    });
  }

  /** @returns {CustomField} */
  static CustomField() {
    return Joi.object({
      value: Joi.array().items(Joi.any()),
      namespace: Joi.string().allow(""),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {CustomFieldRequestSchema} */
  static CustomFieldRequestSchema() {
    return Joi.object({
      fields: Joi.array().items(ContentPlatformModel.CustomField()),
    });
  }

  /** @returns {CustomObjectSchema} */
  static CustomObjectSchema() {
    return Joi.object({
      id: Joi.string().allow(""),
      company_id: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
      status: Joi.string().allow(""),
      type: Joi.string().allow(""),
      definition_slug: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      fields: Joi.array().items(ContentPlatformModel.CustomFieldSchema()),
    });
  }

  /** @returns {CustomObjectDefinitionRequestSchema} */
  static CustomObjectDefinitionRequestSchema() {
    return Joi.object({
      type: Joi.string().allow(""),
      definition_slug: Joi.string().allow(""),
      description: Joi.string().allow(""),
      name: Joi.string().allow(""),
      display_name_key: Joi.string().allow(""),
      field_definitions: Joi.array().items(
        ContentPlatformModel.CustomObjectCustomFieldDefinitions()
      ),
    });
  }

  /** @returns {CustomObjectDefinitionSlugSchema} */
  static CustomObjectDefinitionSlugSchema() {
    return Joi.object({
      id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      type: Joi.string().allow(""),
      definition_slug: Joi.string().allow(""),
      display_name_key: Joi.string().allow(""),
      description: Joi.string().allow(""),
      field_definitions: Joi.array().items(
        ContentPlatformModel.CustomFieldDefinitionDetailResSchema()
      ),
    });
  }

  /** @returns {CustomObjectDefinitionDeleteResponseSchema} */
  static CustomObjectDefinitionDeleteResponseSchema() {
    return Joi.object({
      success: Joi.boolean(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {CustomObjectEntryBulkUploadDetails} */
  static CustomObjectEntryBulkUploadDetails() {
    return Joi.object({
      url: Joi.string().allow(""),
      total_records: Joi.number(),
    });
  }

  /** @returns {CustomObjectListItemDefinitionModel} */
  static CustomObjectListItemDefinitionModel() {
    return Joi.object({
      id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {CustomObjectListItemSchema} */
  static CustomObjectListItemSchema() {
    return Joi.object({
      id: Joi.string().allow(""),
      status: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      definition: ContentPlatformModel.CustomObjectListItemDefinitionModel(),
      references: Joi.number(),
    });
  }

  /** @returns {CustomObjectsSchema} */
  static CustomObjectsSchema() {
    return Joi.object({
      items: Joi.array().items(
        ContentPlatformModel.CustomObjectListItemSchema()
      ),
      page: ContentPlatformModel.Page(),
    });
  }

  /** @returns {CustomObjectFieldDefinition} */
  static CustomObjectFieldDefinition() {
    return Joi.object({
      id: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      namespace: Joi.string().allow(""),
      value: Joi.array().items(Joi.any()),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {CustomObjectBySlugSchema} */
  static CustomObjectBySlugSchema() {
    return Joi.object({
      id: Joi.string().allow(""),
      status: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      definition: ContentPlatformModel.CustomObjectListItemDefinitionModel(),
      references: Joi.array().items(Joi.any()),
      slug: Joi.string().allow(""),
      definition_slug: Joi.string().allow(""),
      fields: Joi.array().items(
        ContentPlatformModel.CustomObjectFieldDefinition()
      ),
    });
  }

  /** @returns {CustomObjectBulkEntryInitiateDownload} */
  static CustomObjectBulkEntryInitiateDownload() {
    return Joi.object({
      message: Joi.string().allow(""),
      task_id: Joi.string().allow(""),
    });
  }

  /** @returns {CustomObjectMetaSchema} */
  static CustomObjectMetaSchema() {
    return Joi.object({
      mo_total_count: Joi.number(),
      mo_success_count: Joi.number(),
      mo_error_count: Joi.number(),
      mo_defintion_type: Joi.string().allow(""),
    });
  }

  /** @returns {JobSchema} */
  static JobSchema() {
    return Joi.object({
      id: Joi.string().allow(""),
      jobs: Joi.array().items(Joi.string().allow("")),
      finished_jobs: Joi.array().items(Joi.string().allow("")),
      error_jobs: Joi.array().items(Joi.string().allow("")),
      errors_occured: Joi.array().items(Joi.string().allow("")),
      company_id: Joi.string().allow(""),
      status: Joi.string().allow(""),
      action_type: Joi.string().allow(""),
      entity: Joi.string().allow(""),
      error_url: Joi.string().allow(""),
      finished_count: Joi.number(),
      error_count: Joi.number(),
      success_count: Joi.number(),
      total_jobs: Joi.number(),
      meta: ContentPlatformModel.CustomObjectMetaSchema(),
      created_by: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
    });
  }

  /** @returns {CustomFieldBulkEntry} */
  static CustomFieldBulkEntry() {
    return Joi.object({
      items: Joi.array().items(ContentPlatformModel.JobSchema()),
      page: ContentPlatformModel.Page(),
    });
  }

  /** @returns {CustomObjectBulkEntry} */
  static CustomObjectBulkEntry() {
    return Joi.object({
      items: Joi.array().items(ContentPlatformModel.JobSchema()),
      page: ContentPlatformModel.Page(),
    });
  }

  /** @returns {MetafieldTypesSchema} */
  static MetafieldTypesSchema() {
    return Joi.object({
      metafield_types: ContentPlatformModel.CustomFieldTypeSchema(),
    });
  }

  /** @returns {CustomFieldTypeSchema} */
  static CustomFieldTypeSchema() {
    return Joi.object({
      string_single_line: ContentPlatformModel.StringSingleLine(),
      string_multi_line: ContentPlatformModel.StringMultiLine(),
      dropdown: ContentPlatformModel.Dropdown(),
      integer: ContentPlatformModel.Integer(),
      float_type: ContentPlatformModel.FloatType(),
      boolean_type: ContentPlatformModel.BooleanType(),
      date: ContentPlatformModel.Date(),
      datetime: ContentPlatformModel.Datetime(),
      json: ContentPlatformModel.Json(),
      file: ContentPlatformModel.File(),
      url: ContentPlatformModel.Url(),
      metaobject: ContentPlatformModel.Metaobject(),
      product: ContentPlatformModel.Product(),
      html: ContentPlatformModel.HTML(),
      duration: ContentPlatformModel.Duration(),
    });
  }

  /** @returns {SupportedValidationsMetaExampleSchema} */
  static SupportedValidationsMetaExampleSchema() {
    return Joi.object({
      name: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {SupportedValidationsMetaSchema} */
  static SupportedValidationsMetaSchema() {
    return Joi.object({
      examples: Joi.array().items(
        ContentPlatformModel.SupportedValidationsMetaExampleSchema()
      ),
    });
  }

  /** @returns {SupportedValidationsSchema} */
  static SupportedValidationsSchema() {
    return Joi.object({
      name: Joi.string().allow(""),
      type: Joi.string().allow(""),
      display: Joi.string().allow(""),
      required: Joi.boolean(),
      meta: ContentPlatformModel.SupportedValidationsMetaSchema(),
    });
  }

  /** @returns {Duration} */
  static Duration() {
    return Joi.object({
      name: Joi.string().allow(""),
      list_enabled: Joi.boolean(),
      type: Joi.string().allow(""),
      category: Joi.string().allow(""),
      supported_validations: Joi.array().items(
        ContentPlatformModel.SupportedValidationsSchema()
      ),
    });
  }

  /** @returns {HTML} */
  static HTML() {
    return Joi.object({
      name: Joi.string().allow(""),
      list_enabled: Joi.boolean(),
      type: Joi.string().allow(""),
      supported_validations: Joi.array().items(
        ContentPlatformModel.SupportedValidationsSchema()
      ),
    });
  }

  /** @returns {StringSingleLine} */
  static StringSingleLine() {
    return Joi.object({
      name: Joi.string().allow(""),
      list_enabled: Joi.boolean(),
      category: Joi.string().allow(""),
      type: Joi.string().allow(""),
      supported_validations: Joi.array().items(
        ContentPlatformModel.SupportedValidationsSchema()
      ),
    });
  }

  /** @returns {StringMultiLine} */
  static StringMultiLine() {
    return Joi.object({
      name: Joi.string().allow(""),
      list_enabled: Joi.boolean(),
      category: Joi.string().allow(""),
      type: Joi.string().allow(""),
      supported_validations: Joi.array().items(
        ContentPlatformModel.SupportedValidationsSchema()
      ),
    });
  }

  /** @returns {Dropdown} */
  static Dropdown() {
    return Joi.object({
      name: Joi.string().allow(""),
      list_enabled: Joi.boolean(),
      category: Joi.string().allow(""),
      type: Joi.string().allow(""),
      supported_validations: Joi.array().items(
        ContentPlatformModel.SupportedValidationsSchema()
      ),
    });
  }

  /** @returns {Integer} */
  static Integer() {
    return Joi.object({
      name: Joi.string().allow(""),
      list_enabled: Joi.boolean(),
      type: Joi.string().allow(""),
      category: Joi.string().allow(""),
      supported_validations: Joi.array().items(
        ContentPlatformModel.SupportedValidationsSchema()
      ),
    });
  }

  /** @returns {FloatType} */
  static FloatType() {
    return Joi.object({
      name: Joi.string().allow(""),
      list_enabled: Joi.boolean(),
      type: Joi.string().allow(""),
      category: Joi.string().allow(""),
      supported_validations: Joi.array().items(
        ContentPlatformModel.SupportedValidationsSchema()
      ),
    });
  }

  /** @returns {BooleanType} */
  static BooleanType() {
    return Joi.object({
      name: Joi.string().allow(""),
      category: Joi.string().allow(""),
      list_enabled: Joi.boolean(),
      type: Joi.string().allow(""),
      supported_validations: Joi.array().items(
        ContentPlatformModel.SupportedValidationsSchema()
      ),
    });
  }

  /** @returns {Date} */
  static Date() {
    return Joi.object({
      name: Joi.string().allow(""),
      list_enabled: Joi.boolean(),
      category: Joi.string().allow(""),
      type: Joi.string().allow(""),
      supported_validations: Joi.array().items(
        ContentPlatformModel.SupportedValidationsSchema()
      ),
    });
  }

  /** @returns {Datetime} */
  static Datetime() {
    return Joi.object({
      name: Joi.string().allow(""),
      category: Joi.string().allow(""),
      list_enabled: Joi.boolean(),
      type: Joi.string().allow(""),
      supported_validations: Joi.array().items(
        ContentPlatformModel.SupportedValidationsSchema()
      ),
    });
  }

  /** @returns {Json} */
  static Json() {
    return Joi.object({
      name: Joi.string().allow(""),
      list_enabled: Joi.boolean(),
      category: Joi.string().allow(""),
      type: Joi.string().allow(""),
      supported_validations: Joi.array().items(
        ContentPlatformModel.SupportedValidationsSchema()
      ),
    });
  }

  /** @returns {File} */
  static File() {
    return Joi.object({
      name: Joi.string().allow(""),
      category: Joi.string().allow(""),
      list_enabled: Joi.boolean(),
      type: Joi.string().allow(""),
      supported_validations: Joi.array().items(
        ContentPlatformModel.SupportedValidationsSchema()
      ),
    });
  }

  /** @returns {Url} */
  static Url() {
    return Joi.object({
      name: Joi.string().allow(""),
      list_enabled: Joi.boolean(),
      type: Joi.string().allow(""),
      supported_validations: Joi.array().items(
        ContentPlatformModel.SupportedValidationsSchema()
      ),
    });
  }

  /** @returns {Metaobject} */
  static Metaobject() {
    return Joi.object({
      name: Joi.string().allow(""),
      list_enabled: Joi.boolean(),
      category: Joi.string().allow(""),
      type: Joi.string().allow(""),
      supported_validations: Joi.array().items(
        ContentPlatformModel.SupportedValidationsSchema()
      ),
    });
  }

  /** @returns {Product} */
  static Product() {
    return Joi.object({
      name: Joi.string().allow(""),
      list_enabled: Joi.boolean(),
      category: Joi.string().allow(""),
      type: Joi.string().allow(""),
      supported_validations: Joi.array().items(
        ContentPlatformModel.SupportedValidationsSchema()
      ),
    });
  }

  /** @returns {CustomObjectEntry} */
  static CustomObjectEntry() {
    return Joi.object({
      id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      type: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      entries_count: Joi.number(),
      fields_count: Joi.number(),
    });
  }

  /** @returns {CustomObjectDefinitionsSchema} */
  static CustomObjectDefinitionsSchema() {
    return Joi.object({
      items: Joi.array().items(ContentPlatformModel.CustomObjectEntry()),
      page: ContentPlatformModel.Page(),
    });
  }

  /** @returns {CustomObjectEntryFieldSchema} */
  static CustomObjectEntryFieldSchema() {
    return Joi.object({
      namespace: Joi.string().allow(""),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {CustomObjectEntryFieldSchemaWithoutID} */
  static CustomObjectEntryFieldSchemaWithoutID() {
    return Joi.object({
      slug: Joi.string().allow(""),
      value: Joi.any(),
    });
  }

  /** @returns {CustomObjectRequestSchema} */
  static CustomObjectRequestSchema() {
    return Joi.object({
      status: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      fields: Joi.array().items(
        ContentPlatformModel.CustomObjectEntryFieldSchema()
      ),
    });
  }

  /** @returns {CustomObjectRequestSchemaWithoutId} */
  static CustomObjectRequestSchemaWithoutId() {
    return Joi.object({
      status: Joi.string().allow(""),
      fields: Joi.array().items(
        ContentPlatformModel.CustomObjectEntryFieldSchemaWithoutID()
      ),
    });
  }

  /** @returns {CustomObjectBulkSchema} */
  static CustomObjectBulkSchema() {
    return Joi.object({
      url: Joi.string().allow(""),
      total_records: Joi.number(),
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
      type: ContentPlatformModel.PageType().required(),
    });
  }

  /** @returns {TranslateUiLabels} */
  static TranslateUiLabels() {
    return Joi.object({
      _id: Joi.string().allow(""),
      company_id: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
      template_theme_id: Joi.string().allow(""),
      theme_id: Joi.string().allow(""),
      locale: Joi.string().allow(""),
      resource: Joi.object().pattern(/\S/, Joi.any()),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {TranslateUiLabelsCreate} */
  static TranslateUiLabelsCreate() {
    return Joi.object({
      template_theme_id: Joi.string().allow(""),
      theme_id: Joi.string().allow(""),
      locale: Joi.string().allow(""),
      resource: Joi.object().pattern(/\S/, Joi.any()),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {StaticResourceUpdate} */
  static StaticResourceUpdate() {
    return Joi.object({
      template_theme_id: Joi.string().allow(""),
      theme_id: Joi.string().allow(""),
      locale: Joi.string().allow(""),
      resource: Joi.object().pattern(/\S/, Joi.any()),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {TranslateUiLabelsPage} */
  static TranslateUiLabelsPage() {
    return Joi.object({
      items: Joi.array().items(ContentPlatformModel.TranslateUiLabels()),
      page: ContentPlatformModel.Page(),
    });
  }

  /** @returns {Error} */
  static Error() {
    return Joi.object({
      error: Joi.string().allow(""),
    });
  }

  /** @returns {Meta} */
  static Meta() {
    return Joi.object({
      created_by: Joi.string().allow(""),
      modified_by: Joi.string().allow(""),
      created_on: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
    });
  }

  /** @returns {CompanyLanguage} */
  static CompanyLanguage() {
    return Joi.object({
      _id: Joi.string().allow(""),
      company_id: Joi.string().allow("").required(),
      locale: Joi.string().allow(""),
      name: Joi.string().allow(""),
      direction: Joi.string().allow(""),
      is_default: Joi.boolean(),
      display_name: Joi.string().allow(""),
    });
  }

  /** @returns {CompanyLanguageCreate} */
  static CompanyLanguageCreate() {
    return Joi.object({
      locales: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  /** @returns {CompanyLanguageUpdate} */
  static CompanyLanguageUpdate() {
    return Joi.object({
      is_default: Joi.boolean().required(),
    });
  }

  /** @returns {ApplicationLanguage} */
  static ApplicationLanguage() {
    return Joi.object({
      _id: Joi.string().allow(""),
      company_id: Joi.string().allow("").required(),
      application_id: Joi.string().allow("").required(),
      locale: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      direction: Joi.string().allow("").required(),
      is_default: Joi.boolean().required(),
      published: Joi.boolean().required(),
      display_name: Joi.string().allow(""),
    });
  }

  /** @returns {unPublishApplicationLanguage} */
  static unPublishApplicationLanguage() {
    return Joi.object({
      published: Joi.boolean().required(),
    });
  }

  /** @returns {ApplicationLanguageCreate} */
  static ApplicationLanguageCreate() {
    return Joi.object({
      locales: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  /** @returns {ApplicationLanguageUpdate} */
  static ApplicationLanguageUpdate() {
    return Joi.object({
      is_default: Joi.boolean().required(),
      published: Joi.boolean().required(),
    });
  }

  /** @returns {TranslatableResource} */
  static TranslatableResource() {
    return Joi.object({
      _id: Joi.string().allow(""),
      type: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      description: Joi.string().allow("").required(),
      schema_type: Joi.string().allow("").required(),
      created_by: Joi.string().allow(""),
      modified_by: Joi.string().allow(""),
      created_on: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      section_id: ContentPlatformModel.TranslatableSection(),
    });
  }

  /** @returns {ResourceDefinition} */
  static ResourceDefinition() {
    return Joi.object({
      _id: Joi.string().allow(""),
      translatable_resource_id: Joi.string().allow("").required(),
      json_schema: ContentPlatformModel.ResourceJsonSchema(),
      ui_schema: ContentPlatformModel.ResourceUISchema(),
      bulk_details: ContentPlatformModel.ResourceBulkDetails(),
    });
  }

  /** @returns {ResourceJsonSchema} */
  static ResourceJsonSchema() {
    return Joi.object({
      schema: Joi.string().allow(""),
      type: ContentPlatformModel.ResourceJsonSchemaType(),
    }).allow(null);
  }

  /** @returns {ResourceJsonSchemaType} */
  static ResourceJsonSchemaType() {
    return Joi.object({
      author: ContentPlatformModel.Author(),
      title: ContentPlatformModel.Title(),
      feature_image: ContentPlatformModel.FeatureImage(),
    });
  }

  /** @returns {ResourceUISchema} */
  static ResourceUISchema() {
    return Joi.object({
      author: ContentPlatformModel.Author(),
      title: ContentPlatformModel.Title(),
      feature_image: ContentPlatformModel.FeatureImage(),
      seo: ContentPlatformModel.Seo(),
    }).allow(null);
  }

  /** @returns {ResourceBulkDetails} */
  static ResourceBulkDetails() {
    return Joi.object({
      fields: Joi.array().items(Joi.string().allow("")),
    }).allow(null);
  }

  /** @returns {Title} */
  static Title() {
    return Joi.object({
      ui_widget: Joi.string().allow(""),
      ui_description: Joi.boolean(),
    });
  }

  /** @returns {FeatureImage} */
  static FeatureImage() {
    return Joi.object({
      secure_url: Joi.string().allow(""),
    });
  }

  /** @returns {Seo} */
  static Seo() {
    return Joi.object({
      title: ContentPlatformModel.Title(),
      description: Joi.string().allow(""),
      canonical_url: Joi.string().allow(""),
      meta_tags: Joi.array().items(ContentPlatformModel.MetaTag()),
    });
  }

  /** @returns {MetaTag} */
  static MetaTag() {
    return Joi.object({
      title: Joi.string().allow(""),
      items: Joi.array().items(ContentPlatformModel.MetaTagItem()),
    });
  }

  /** @returns {MetaTagItem} */
  static MetaTagItem() {
    return Joi.object({
      key: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {ResourceTranslation} */
  static ResourceTranslation() {
    return Joi.object({
      _id: Joi.string().allow(""),
      locale: Joi.string().allow(""),
      value: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {TranslationSeo} */
  static TranslationSeo() {
    return Joi.object({
      title: Joi.string().allow(""),
      breadcrumbs: Joi.array().items(Joi.string().allow("")),
      meta_tags: Joi.array().items(Joi.string().allow("")),
      canonical_url: Joi.string().allow(""),
      description: Joi.string().allow(""),
    });
  }

  /** @returns {ResourceTranslationList} */
  static ResourceTranslationList() {
    return Joi.object({
      items: Joi.array().items(
        ContentPlatformModel.ResourceTranslationCreate()
      ),
    });
  }

  /** @returns {ResourceTranslationCreate} */
  static ResourceTranslationCreate() {
    return Joi.object({
      type: Joi.string().allow(""),
      resource_id: Joi.string().allow(""),
      locale: Joi.string().allow(""),
      value: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {ResourceTranslationUpdate} */
  static ResourceTranslationUpdate() {
    return Joi.object({
      value: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {TranslatableSection} */
  static TranslatableSection() {
    return Joi.object({
      _id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      description: Joi.string().allow(""),
      created_by: Joi.string().allow(""),
      modified_by: Joi.string().allow(""),
      created_on: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
    });
  }

  /** @returns {Metrics} */
  static Metrics() {
    return Joi.object({
      total: Joi.number(),
      success: Joi.number(),
      failed: Joi.number(),
    });
  }

  /** @returns {ResourceTranslationUpsertItem} */
  static ResourceTranslationUpsertItem() {
    return Joi.object({
      message: Joi.string().allow(""),
      data: ContentPlatformModel.ResourceTranslationCreate(),
    });
  }

  /** @returns {ResourceTranslationBulkUpsert} */
  static ResourceTranslationBulkUpsert() {
    return Joi.object({
      metrics: ContentPlatformModel.Metrics(),
      failed_items: Joi.array().items(
        ContentPlatformModel.ResourceTranslationUpsertItem()
      ),
      updated_items: Joi.array().items(
        ContentPlatformModel.ResourceTranslationUpsertItem()
      ),
    });
  }

  /** @returns {StandardError} */
  static StandardError() {
    return Joi.object({
      message: Joi.string().allow("").required(),
    });
  }

  /** @returns {OperationResponseSchema} */
  static OperationResponseSchema() {
    return Joi.object({
      success: Joi.boolean().required(),
      message: Joi.string().allow(""),
    });
  }

  /**
   * Enum: GenerationEntityType Used By: Content
   *
   * @returns {GenerationEntityType}
   */
  static GenerationEntityType() {
    return Joi.string().valid(
      "title",

      "description"
    );
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

      "profile-email",

      "profile-phone",

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

      "locate-us",

      "single-page-checkout",

      "request-reattempt"
    );
  }
}
module.exports = ContentPlatformModel;
