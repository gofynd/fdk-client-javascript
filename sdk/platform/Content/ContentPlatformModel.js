const Joi = require("joi");

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
 * @typedef BlogGetResponse
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
 * @property {string} [name]
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
 * @typedef BlogRequest
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
 * @typedef ConfigurationSchema
 * @property {number} [sleep_time]
 * @property {boolean} [start_on_launch]
 * @property {number} [duration]
 * @property {string} [slide_direction]
 */

/**
 * @typedef SlideshowMedia
 * @property {string} [type]
 * @property {string} [url]
 * @property {string} [bg_color]
 * @property {number} [duration]
 * @property {boolean} [auto_decide_duration]
 * @property {Action} [action]
 */

/**
 * @typedef UpdateHandpickedSchema
 * @property {HandpickedTagSchema} [tag]
 */

/**
 * @typedef HandpickedTagSchema
 * @property {string} [position]
 * @property {Object} [attributes]
 * @property {string} [name]
 * @property {string} [url]
 * @property {string} [type]
 * @property {string} [sub_type]
 * @property {string} [content]
 */

/**
 * @typedef RemoveHandpickedSchema
 * @property {string[]} [tags]
 */

/**
 * @typedef CreateTagSchema
 * @property {string} [name]
 * @property {string} [sub_type]
 * @property {string} [_id]
 * @property {string} [type]
 * @property {string} [url]
 * @property {string} [position]
 * @property {Object} [attributes]
 * @property {Object[]} [pages]
 * @property {string} [content]
 */

/**
 * @typedef CreateTagRequestSchema
 * @property {CreateTagSchema[]} [tags]
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
 * @typedef DataLoaderSourceSchema
 * @property {string} [type]
 * @property {string} [id]
 */

/**
 * @typedef DataLoadersSchema
 * @property {DataLoaderSchema[]} [items]
 */

/**
 * @typedef TagDeleteSuccessResponse
 * @property {boolean} [success]
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
 * @property {number} [item_total] - The total number of items on the page.
 * @property {string} [next_id] - The identifier for the next page.
 * @property {boolean} [has_previous] - Indicates whether there is a previous page.
 * @property {boolean} [has_next] - Indicates whether there is a next page.
 * @property {number} [current] - The current page number.
 * @property {string} type - The type of the page, such as 'PageType'.
 * @property {number} [size] - The number of items per page.
 */

/**
 * @typedef LandingPageGetResponse
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
 * @typedef DefaultNavigationResponse
 * @property {NavigationSchema[]} [items]
 */

/**
 * @typedef NavigationGetResponse
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
 * @typedef NavigationRequest
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string[]} [platform]
 * @property {Orientation} [orientation]
 * @property {NavigationReference[]} [navigation]
 */

/**
 * @typedef PageGetResponse
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
 * @typedef PageRequest
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
 * @typedef PagePublishRequest
 * @property {boolean} [publish]
 */

/**
 * @typedef PageMetaSchema
 * @property {NavigationSchema[]} [system_pages]
 * @property {PageSchema[]} [custom_pages]
 * @property {string} [application_id]
 */

/**
 * @typedef SlideshowGetResponse
 * @property {SlideshowSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef SlideshowSchema
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {DateMeta} [date_meta]
 * @property {string} [application]
 * @property {string} [platform]
 * @property {ConfigurationSchema} [configuration]
 * @property {SlideshowMedia[]} [media]
 * @property {boolean} [active]
 * @property {boolean} [archived]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef SlideshowRequest
 * @property {string} [slug]
 * @property {string} [platform]
 * @property {ConfigurationSchema} [configuration]
 * @property {SlideshowMedia} [media]
 * @property {boolean} [active]
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
 * @property {string} [application]
 * @property {string} [_id]
 * @property {TagSchema[]} [tags]
 */

/**
 * @typedef TagSchema
 * @property {string} [name]
 * @property {string} [url]
 * @property {string} [type]
 * @property {string} [sub_type]
 * @property {string} [_id]
 * @property {string} [position]
 * @property {Object} [attributes]
 * @property {string} [content]
 * @property {Object[]} [pages]
 * @property {TagSourceSchema} [__source]
 */

/**
 * @typedef TagSourceSchema
 * @property {string} [type]
 * @property {string} [id]
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
 * @property {string} [name]
 * @property {string} [type]
 * @property {Object} [value]
 */

/**
 * @typedef FieldDefinitionSchema
 * @property {string} [_id]
 * @property {string} [creator]
 * @property {string} [resource]
 * @property {string} [name]
 * @property {string} [namespace]
 * @property {string} [key]
 * @property {string} [description]
 * @property {string} [type]
 * @property {boolean} [multi_value]
 * @property {FieldValidations[]} [validations]
 * @property {string} [company_id]
 * @property {string} [created_by]
 * @property {string} [updated_by]
 * @property {boolean} [required]
 * @property {boolean} [is_deleted]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [type_name]
 * @property {number} [invalid_fields_count]
 */

/**
 * @typedef CustomFieldDefinitionsSchema
 * @property {FieldDefinitionSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef CustomFieldDefinitionRequestSchema
 * @property {string} [resource]
 * @property {string} [type]
 * @property {string} [key]
 * @property {string} [namespace]
 * @property {boolean} [multi_value]
 * @property {string} [name]
 * @property {string} [description]
 * @property {FieldValidations[]} [validations]
 */

/**
 * @typedef CustomObjectCustomFieldDefinitions
 * @property {string} [id]
 * @property {string} [type]
 * @property {string} [description]
 * @property {string} [name]
 * @property {boolean} [multi_value]
 * @property {boolean} [required]
 * @property {string} [key]
 * @property {FieldValidations[]} [validations]
 * @property {string} [action]
 */

/**
 * @typedef CustomObjectDefinitionUpdateRequestSchema
 * @property {string} [type]
 * @property {string} [description]
 * @property {string} [name]
 * @property {string} [display_name_key]
 * @property {CustomObjectCustomFieldDefinitions[]} [field_definitions]
 */

/**
 * @typedef CustomFieldDefinitionDetailResSchema
 * @property {string} [creator]
 * @property {string} [resource]
 * @property {string} [name]
 * @property {string} [namespace]
 * @property {string} [key]
 * @property {string} [description]
 * @property {string} [type]
 * @property {boolean} [multi_value]
 * @property {string} [company_id]
 * @property {string} [application_id]
 * @property {string} [created_by]
 * @property {string} [updated_by]
 * @property {boolean} [required]
 * @property {boolean} [is_deleted]
 * @property {string} [_id]
 * @property {Object[]} [validations]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 */

/**
 * @typedef CustomDataDeleteSchema
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef CustomFieldValue
 * @property {Object} [value]
 */

/**
 * @typedef CustomFieldSchema
 * @property {string} [_id]
 * @property {string} [namespace]
 * @property {string} [key]
 * @property {string} [resource]
 * @property {string} [creator]
 * @property {CustomFieldValue[]} [value]
 * @property {string} [resource_id]
 * @property {string} [type]
 * @property {boolean} [multi_value]
 * @property {string} [company_id]
 * @property {string} [definition_id]
 * @property {boolean} [has_invalid_values]
 * @property {Object[]} [invalid_value_errors]
 * @property {string} [created_by]
 * @property {boolean} [is_deleted]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 */

/**
 * @typedef CustomFieldsResponseSchema
 * @property {CustomFieldSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef CustomFieldsResponseByResourceIdSchema
 * @property {CustomFieldSchema[]} [items]
 */

/**
 * @typedef CustomField
 * @property {Object[]} [value]
 * @property {string} [definition_id]
 */

/**
 * @typedef CustomFieldRequestSchema
 * @property {CustomField[]} [fields]
 */

/**
 * @typedef CustomObjectSchema
 * @property {string} [_id]
 * @property {string} [creator]
 * @property {string} [company_id]
 * @property {string} [application_id]
 * @property {string} [created_by]
 * @property {string} [updated_by]
 * @property {string} [status]
 * @property {string} [type]
 * @property {string} [display_name]
 * @property {string} [definition_id]
 * @property {CustomFieldSchema[]} [fields]
 */

/**
 * @typedef CustomObjectDefinitionRequestSchema
 * @property {string} [type]
 * @property {string} [description]
 * @property {string} [name]
 * @property {string} [display_name_key]
 * @property {CustomObjectCustomFieldDefinitions[]} [field_definitions]
 */

/**
 * @typedef CustomObjectCustomFieldDefinitionResSchema
 * @property {string} [creator]
 * @property {string} [resource]
 * @property {string} [name]
 * @property {string} [namespace]
 * @property {string} [key]
 * @property {string} [description]
 * @property {string} [type]
 * @property {boolean} [multi_value]
 * @property {FieldValidations[]} [validations]
 * @property {string} [company_id]
 * @property {string} [created_by]
 * @property {string} [metaobject_definition_id]
 * @property {boolean} [required]
 * @property {boolean} [is_deleted]
 * @property {string} [_id]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 */

/**
 * @typedef CustomObjectDefinitionSchema
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [type]
 * @property {string} [display_name_key]
 * @property {string} [description]
 * @property {string} [creator]
 * @property {string} [created_by]
 * @property {string} [updated_by]
 * @property {CustomObjectCustomFieldDefinitionResSchema[]} [field_definitions]
 */

/**
 * @typedef CustomObjectDefinitionDeleteResponseSchema
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef CustomObjectEntryBulkUploadResponse
 * @property {string} [url]
 * @property {number} [total_records]
 */

/**
 * @typedef CustomObjectListItemDefinationSchema
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [type]
 */

/**
 * @typedef CustomObjectListItemSchema
 * @property {string} [_id]
 * @property {string} [definition_id]
 * @property {string} [status]
 * @property {string} [updated_at]
 * @property {string} [display_name]
 * @property {CustomObjectListItemDefinationSchema} [definition]
 * @property {number} [references]
 */

/**
 * @typedef CustomObjectsSchema
 * @property {CustomObjectListItemSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef CustomObjectFieldSchema
 * @property {string} [_id]
 * @property {string} [key]
 * @property {Object[]} [value]
 * @property {string} [type]
 * @property {string} [definition_id]
 */

/**
 * @typedef CustomObjectByIdSchema
 * @property {string} [_id]
 * @property {string} [status]
 * @property {string} [display_name]
 * @property {CustomObjectListItemDefinationSchema} [definition]
 * @property {Object[]} [references]
 * @property {CustomObjectFieldSchema[]} [fields]
 */

/**
 * @typedef CustomObjectBulkEntryInitiateDownload
 * @property {string} [message]
 * @property {string} [task_id]
 */

/**
 * @typedef CustomObjectMetaSchema
 * @property {number} [mo_total_count]
 * @property {number} [mo_success_count]
 * @property {number} [mo_error_count]
 * @property {string} [mo_defintion_type]
 */

/**
 * @typedef CustomObjectJobSchema
 * @property {string} [_id]
 * @property {string[]} [jobs]
 * @property {string[]} [finished_jobs]
 * @property {string[]} [error_jobs]
 * @property {string[]} [errors_occured]
 * @property {string} [company_id]
 * @property {string} [creator]
 * @property {string} [url]
 * @property {string} [status]
 * @property {string} [action_type]
 * @property {string} [entity]
 * @property {string} [error_url]
 * @property {number} [finished_count]
 * @property {number} [error_count]
 * @property {number} [success_count]
 * @property {number} [total_jobs]
 * @property {CustomObjectMetaSchema} [meta]
 * @property {string} [created_by]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 */

/**
 * @typedef CustomObjectBulkEntry
 * @property {CustomObjectJobSchema[]} [items]
 * @property {Page} [page]
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
 * @typedef StringSingleLine
 * @property {string} [name]
 * @property {boolean} [list_enabled]
 * @property {string} [category]
 * @property {string} [type]
 * @property {SupportedValidationsSchema[]} [supported_validations]
 */

/**
 * @typedef StringMultiLine
 * @property {string} [name]
 * @property {boolean} [list_enabled]
 * @property {string} [category]
 * @property {string} [type]
 * @property {SupportedValidationsSchema[]} [supported_validations]
 */

/**
 * @typedef Dropdown
 * @property {string} [name]
 * @property {boolean} [list_enabled]
 * @property {string} [category]
 * @property {string} [type]
 * @property {SupportedValidationsSchema[]} [supported_validations]
 */

/**
 * @typedef Integer
 * @property {string} [name]
 * @property {boolean} [list_enabled]
 * @property {string} [type]
 * @property {string} [category]
 * @property {SupportedValidationsSchema[]} [supported_validations]
 */

/**
 * @typedef FloatType
 * @property {string} [name]
 * @property {boolean} [list_enabled]
 * @property {string} [type]
 * @property {string} [category]
 * @property {SupportedValidationsSchema[]} [supported_validations]
 */

/**
 * @typedef BooleanType
 * @property {string} [name]
 * @property {string} [category]
 * @property {boolean} [list_enabled]
 * @property {string} [type]
 * @property {SupportedValidationsSchema[]} [supported_validations]
 */

/**
 * @typedef Date
 * @property {string} [name]
 * @property {boolean} [list_enabled]
 * @property {string} [category]
 * @property {string} [type]
 * @property {SupportedValidationsSchema[]} [supported_validations]
 */

/**
 * @typedef Datetime
 * @property {string} [name]
 * @property {string} [category]
 * @property {boolean} [list_enabled]
 * @property {string} [type]
 * @property {SupportedValidationsSchema[]} [supported_validations]
 */

/**
 * @typedef Json
 * @property {string} [name]
 * @property {boolean} [list_enabled]
 * @property {string} [category]
 * @property {string} [type]
 * @property {SupportedValidationsSchema[]} [supported_validations]
 */

/**
 * @typedef File
 * @property {string} [name]
 * @property {string} [category]
 * @property {boolean} [list_enabled]
 * @property {string} [type]
 * @property {SupportedValidationsSchema[]} [supported_validations]
 */

/**
 * @typedef Url
 * @property {string} [name]
 * @property {boolean} [list_enabled]
 * @property {string} [type]
 * @property {SupportedValidationsSchema[]} [supported_validations]
 */

/**
 * @typedef Metaobject
 * @property {string} [name]
 * @property {boolean} [list_enabled]
 * @property {string} [category]
 * @property {string} [type]
 * @property {SupportedValidationsSchema[]} [supported_validations]
 */

/**
 * @typedef Product
 * @property {string} [name]
 * @property {boolean} [list_enabled]
 * @property {string} [category]
 * @property {string} [type]
 * @property {SupportedValidationsSchema[]} [supported_validations]
 */

/**
 * @typedef CustomObjectEntry
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [type]
 * @property {string} [updated_at]
 * @property {number} [entries_count]
 * @property {number} [fields_count]
 */

/**
 * @typedef CustomObjectDefinitionsSchema
 * @property {CustomObjectEntry[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef CustomObjectEntryFieldSchema
 * @property {string} [definition_id]
 * @property {Object[]} [value]
 */

/**
 * @typedef CustomObjectRequestSchema
 * @property {string} [status]
 * @property {string} [definition_id]
 * @property {CustomObjectEntryFieldSchema[]} [fields]
 */

/**
 * @typedef CustomObjectBulkSchema
 * @property {string} [url]
 * @property {number} [total_records]
 */

/**
 * @typedef ActionPage
 * @property {Object} [params] - Parameters that should be considered in path.
 * @property {Object} [query] - Query parameter if any to be added to the action.
 * @property {string} [url] - The URL for the action.
 * @property {PageType} type
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
 *   | "order-status"} PageType
 */

class ContentPlatformModel {
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

  /** @returns {BlogGetResponse} */
  static BlogGetResponse() {
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
      _custom_json: Joi.any(),
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

  /** @returns {BlogRequest} */
  static BlogRequest() {
    return Joi.object({
      application: Joi.string().allow(""),
      _custom_json: Joi.any(),
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
      action: ContentPlatformModel.Action(),
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
      attributes: Joi.any(),
      name: Joi.string().allow(""),
      url: Joi.string().allow(""),
      type: Joi.string().allow(""),
      sub_type: Joi.string().allow(""),
      content: Joi.string().allow(""),
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
      attributes: Joi.any(),
      pages: Joi.array().items(Joi.any()),
      content: Joi.string().allow(""),
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

  /** @returns {TagDeleteSuccessResponse} */
  static TagDeleteSuccessResponse() {
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
    });
  }

  /** @returns {LandingPageGetResponse} */
  static LandingPageGetResponse() {
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
      _custom_json: Joi.any(),
    });
  }

  /** @returns {DefaultNavigationResponse} */
  static DefaultNavigationResponse() {
    return Joi.object({
      items: Joi.array().items(ContentPlatformModel.NavigationSchema()),
    });
  }

  /** @returns {NavigationGetResponse} */
  static NavigationGetResponse() {
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

  /** @returns {NavigationRequest} */
  static NavigationRequest() {
    return Joi.object({
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      platform: Joi.array().items(Joi.string().allow("")),
      orientation: ContentPlatformModel.Orientation(),
      navigation: Joi.array().items(ContentPlatformModel.NavigationReference()),
    });
  }

  /** @returns {PageGetResponse} */
  static PageGetResponse() {
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
      _custom_json: Joi.any(),
      orientation: Joi.string().allow(""),
      platform: Joi.string().allow(""),
      published: Joi.boolean(),
      slug: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      title: Joi.string().allow(""),
      type: Joi.string().allow(""),
      seo: ContentPlatformModel.SEO(),
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

  /** @returns {PageRequest} */
  static PageRequest() {
    return Joi.object({
      _schedule: ContentPlatformModel.CronSchedule(),
      application: Joi.string().allow(""),
      author: ContentPlatformModel.Author(),
      _custom_json: Joi.any(),
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

  /** @returns {PagePublishRequest} */
  static PagePublishRequest() {
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

  /** @returns {SlideshowGetResponse} */
  static SlideshowGetResponse() {
    return Joi.object({
      items: Joi.array().items(ContentPlatformModel.SlideshowSchema()),
      page: ContentPlatformModel.Page(),
    });
  }

  /** @returns {SlideshowSchema} */
  static SlideshowSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      date_meta: ContentPlatformModel.DateMeta(),
      application: Joi.string().allow(""),
      platform: Joi.string().allow(""),
      configuration: ContentPlatformModel.ConfigurationSchema(),
      media: Joi.array().items(ContentPlatformModel.SlideshowMedia()),
      active: Joi.boolean(),
      archived: Joi.boolean(),
      _custom_json: Joi.any(),
    });
  }

  /** @returns {SlideshowRequest} */
  static SlideshowRequest() {
    return Joi.object({
      slug: Joi.string().allow(""),
      platform: Joi.string().allow(""),
      configuration: ContentPlatformModel.ConfigurationSchema(),
      media: ContentPlatformModel.SlideshowMedia(),
      active: Joi.boolean(),
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
      attributes: Joi.any(),
      content: Joi.string().allow(""),
      pages: Joi.array().items(Joi.any()),
      __source: ContentPlatformModel.TagSourceSchema(),
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
      _id: Joi.string().allow(""),
      creator: Joi.string().allow(""),
      resource: Joi.string().allow(""),
      name: Joi.string().allow(""),
      namespace: Joi.string().allow(""),
      key: Joi.string().allow(""),
      description: Joi.string().allow(""),
      type: Joi.string().allow(""),
      multi_value: Joi.boolean(),
      validations: Joi.array().items(ContentPlatformModel.FieldValidations()),
      company_id: Joi.string().allow(""),
      created_by: Joi.string().allow(""),
      updated_by: Joi.string().allow(""),
      required: Joi.boolean(),
      is_deleted: Joi.boolean(),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
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
      resource: Joi.string().allow(""),
      type: Joi.string().allow(""),
      key: Joi.string().allow(""),
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
      key: Joi.string().allow(""),
      validations: Joi.array().items(ContentPlatformModel.FieldValidations()),
      action: Joi.string().allow(""),
    });
  }

  /** @returns {CustomObjectDefinitionUpdateRequestSchema} */
  static CustomObjectDefinitionUpdateRequestSchema() {
    return Joi.object({
      type: Joi.string().allow(""),
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
      creator: Joi.string().allow(""),
      resource: Joi.string().allow(""),
      name: Joi.string().allow(""),
      namespace: Joi.string().allow(""),
      key: Joi.string().allow(""),
      description: Joi.string().allow(""),
      type: Joi.string().allow(""),
      multi_value: Joi.boolean(),
      company_id: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
      created_by: Joi.string().allow(""),
      updated_by: Joi.string().allow(""),
      required: Joi.boolean(),
      is_deleted: Joi.boolean(),
      _id: Joi.string().allow(""),
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
      _id: Joi.string().allow(""),
      namespace: Joi.string().allow(""),
      key: Joi.string().allow(""),
      resource: Joi.string().allow(""),
      creator: Joi.string().allow(""),
      value: Joi.array().items(ContentPlatformModel.CustomFieldValue()),
      resource_id: Joi.string().allow(""),
      type: Joi.string().allow(""),
      multi_value: Joi.boolean(),
      company_id: Joi.string().allow(""),
      definition_id: Joi.string().allow(""),
      has_invalid_values: Joi.boolean(),
      invalid_value_errors: Joi.array().items(Joi.any()),
      created_by: Joi.string().allow(""),
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
      definition_id: Joi.string().allow(""),
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
      _id: Joi.string().allow(""),
      creator: Joi.string().allow(""),
      company_id: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
      created_by: Joi.string().allow(""),
      updated_by: Joi.string().allow(""),
      status: Joi.string().allow(""),
      type: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      definition_id: Joi.string().allow(""),
      fields: Joi.array().items(ContentPlatformModel.CustomFieldSchema()),
    });
  }

  /** @returns {CustomObjectDefinitionRequestSchema} */
  static CustomObjectDefinitionRequestSchema() {
    return Joi.object({
      type: Joi.string().allow(""),
      description: Joi.string().allow(""),
      name: Joi.string().allow(""),
      display_name_key: Joi.string().allow(""),
      field_definitions: Joi.array().items(
        ContentPlatformModel.CustomObjectCustomFieldDefinitions()
      ),
    });
  }

  /** @returns {CustomObjectCustomFieldDefinitionResSchema} */
  static CustomObjectCustomFieldDefinitionResSchema() {
    return Joi.object({
      creator: Joi.string().allow(""),
      resource: Joi.string().allow(""),
      name: Joi.string().allow(""),
      namespace: Joi.string().allow(""),
      key: Joi.string().allow(""),
      description: Joi.string().allow(""),
      type: Joi.string().allow(""),
      multi_value: Joi.boolean(),
      validations: Joi.array().items(ContentPlatformModel.FieldValidations()),
      company_id: Joi.string().allow(""),
      created_by: Joi.string().allow(""),
      metaobject_definition_id: Joi.string().allow(""),
      required: Joi.boolean(),
      is_deleted: Joi.boolean(),
      _id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {CustomObjectDefinitionSchema} */
  static CustomObjectDefinitionSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      type: Joi.string().allow(""),
      display_name_key: Joi.string().allow(""),
      description: Joi.string().allow(""),
      creator: Joi.string().allow(""),
      created_by: Joi.string().allow(""),
      updated_by: Joi.string().allow(""),
      field_definitions: Joi.array().items(
        ContentPlatformModel.CustomObjectCustomFieldDefinitionResSchema()
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

  /** @returns {CustomObjectEntryBulkUploadResponse} */
  static CustomObjectEntryBulkUploadResponse() {
    return Joi.object({
      url: Joi.string().allow(""),
      total_records: Joi.number(),
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

  /** @returns {CustomObjectListItemSchema} */
  static CustomObjectListItemSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      definition_id: Joi.string().allow(""),
      status: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      definition: ContentPlatformModel.CustomObjectListItemDefinationSchema(),
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

  /** @returns {CustomObjectFieldSchema} */
  static CustomObjectFieldSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      key: Joi.string().allow(""),
      value: Joi.array().items(Joi.any()),
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
      definition: ContentPlatformModel.CustomObjectListItemDefinationSchema(),
      references: Joi.array().items(Joi.any()),
      fields: Joi.array().items(ContentPlatformModel.CustomObjectFieldSchema()),
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

  /** @returns {CustomObjectJobSchema} */
  static CustomObjectJobSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      jobs: Joi.array().items(Joi.string().allow("")),
      finished_jobs: Joi.array().items(Joi.string().allow("")),
      error_jobs: Joi.array().items(Joi.string().allow("")),
      errors_occured: Joi.array().items(Joi.string().allow("")),
      company_id: Joi.string().allow(""),
      creator: Joi.string().allow(""),
      url: Joi.string().allow(""),
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
    });
  }

  /** @returns {CustomObjectBulkEntry} */
  static CustomObjectBulkEntry() {
    return Joi.object({
      items: Joi.array().items(ContentPlatformModel.CustomObjectJobSchema()),
      page: ContentPlatformModel.Page(),
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
      _id: Joi.string().allow(""),
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
      definition_id: Joi.string().allow(""),
      value: Joi.array().items(Joi.any()),
    });
  }

  /** @returns {CustomObjectRequestSchema} */
  static CustomObjectRequestSchema() {
    return Joi.object({
      status: Joi.string().allow(""),
      definition_id: Joi.string().allow(""),
      fields: Joi.array().items(
        ContentPlatformModel.CustomObjectEntryFieldSchema()
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

      "order-status"
    );
  }
}
module.exports = ContentPlatformModel;
