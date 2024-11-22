export = ContentPlatformModel;
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
 * @typedef TagDeleteSuccessDetails
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
 * @typedef SlideshowGetDetails
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
 * @typedef SlideshowPayload
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
 *   | "order-status"
 *   | "locate-us"} PageType
 */
declare class ContentPlatformModel {
}
declare namespace ContentPlatformModel {
    export { ValidationError, GenerateSEOContent, GeneratedSEOContent, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, PathSourceSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, SeoSchemaComponent, SEOSchemaMarkupTemplate, SEOSchemaMarkupTemplateRequestBody, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, DefaultSchemaComponent, DefaultSEOSchemaMarkupTemplate, ScheduleSchema, NextSchedule, BlogGetDetails, BlogFilters, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, SEOMetaItem, SEOMetaItems, SEOSitemap, SEObreadcrumb, DateMeta, BlogPayload, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, LocaleLanguage, Language, Action, NavigationReference, CronBasedScheduleSchema, ConfigurationSchema, SlideshowMedia, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessDetails, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, Page, LandingPageGetDetails, LandingPageSchema, DefaultNavigationDetails, NavigationGetDetails, Orientation, NavigationSchema, NavigationPayload, PageGetDetails, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PagePayload, CronSchedule, PagePublishPayload, PageMetaSchema, SlideshowGetDetails, SlideshowSchema, SlideshowPayload, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, ResourcesSchema, ResourceSchema, FieldValidations, FieldDefinitionSchema, CustomFieldDefinitionsSchema, CustomFieldDefinitionRequestSchema, CustomObjectCustomFieldDefinitions, CustomObjectDefinitionUpdateRequestSchema, CustomFieldDefinitionDetailResSchema, MetaFieldDefinitionDetailResSchema, CustomDataDeleteSchema, CustomFieldValue, CustomFieldSchema, CustomFieldsResponseSchema, CustomFieldsDeleteSchema, CustomFieldsResponseByResourceIdSchema, CustomField, CustomFieldRequestSchema, CustomObjectSchema, CustomObjectDefinitionRequestSchema, CustomObjectDefinitionSlugSchema, CustomObjectDefinitionDeleteResponseSchema, CustomObjectEntryBulkUploadDetails, CustomObjectListItemDefinitionModel, CustomObjectListItemSchema, CustomObjectsSchema, CustomObjectFieldDefinition, CustomObjectBySlugSchema, CustomObjectBulkEntryInitiateDownload, CustomObjectMetaSchema, JobSchema, CustomFieldBulkEntry, CustomObjectBulkEntry, MetafieldTypesSchema, CustomFieldTypeSchema, SupportedValidationsMetaExampleSchema, SupportedValidationsMetaSchema, SupportedValidationsSchema, Duration, HTML, StringSingleLine, StringMultiLine, Dropdown, Integer, FloatType, BooleanType, Date, Datetime, Json, File, Url, Metaobject, Product, CustomObjectEntry, CustomObjectDefinitionsSchema, CustomObjectEntryFieldSchema, CustomObjectEntryFieldSchemaWithoutID, CustomObjectRequestSchema, CustomObjectRequestSchemaWithoutId, CustomObjectBulkSchema, ActionPage, GenerationEntityType, PageType };
}
/** @returns {ValidationError} */
declare function ValidationError(): ValidationError;
type ValidationError = {
    /**
     * - A brief description of the error encountered.
     */
    message: string;
    /**
     * - The field in the request that caused the error.
     */
    field: string;
};
/** @returns {GenerateSEOContent} */
declare function GenerateSEOContent(): GenerateSEOContent;
type GenerateSEOContent = {
    text?: string;
    existing_text?: string;
    keywords?: string[];
    type?: string;
};
/** @returns {GeneratedSEOContent} */
declare function GeneratedSEOContent(): GeneratedSEOContent;
type GeneratedSEOContent = {
    title?: string;
    description?: string;
};
/** @returns {ApplicationLegal} */
declare function ApplicationLegal(): ApplicationLegal;
type ApplicationLegal = {
    application?: string;
    tnc?: string;
    policy?: string;
    shipping?: string;
    returns?: string;
    faq?: ApplicationLegalFAQ[];
    _id?: string;
    updated_at?: string;
    created_at?: string;
};
/** @returns {ApplicationLegalFAQ} */
declare function ApplicationLegalFAQ(): ApplicationLegalFAQ;
type ApplicationLegalFAQ = {
    question?: string;
    answer?: string;
};
/** @returns {PathMappingSchema} */
declare function PathMappingSchema(): PathMappingSchema;
type PathMappingSchema = {
    application?: string;
    _id?: string;
    redirect_from?: string;
    redirect_to?: string;
    updated_at?: string;
    created_at?: string;
    __source?: PathSourceSchema;
};
/** @returns {PathSourceSchema} */
declare function PathSourceSchema(): PathSourceSchema;
type PathSourceSchema = {
    type?: string;
    id?: string;
};
/** @returns {SeoComponent} */
declare function SeoComponent(): SeoComponent;
type SeoComponent = {
    seo?: SeoSchema;
};
/** @returns {SeoSchema} */
declare function SeoSchema(): SeoSchema;
type SeoSchema = {
    app?: string;
    _id?: string;
    robots_txt?: string;
    sitemap_enabled?: boolean;
    additional_sitemap?: string;
    cannonical_enabled?: boolean;
    custom_meta_tags?: CustomMetaTag[];
    details?: Detail;
    created_at?: string;
    updated_at?: string;
};
/** @returns {CustomMetaTag} */
declare function CustomMetaTag(): CustomMetaTag;
type CustomMetaTag = {
    name?: string;
    content?: string;
    _id?: string;
};
/** @returns {Detail} */
declare function Detail(): Detail;
type Detail = {
    title?: string;
    description?: string;
    image_url?: string;
};
/** @returns {SeoSchemaComponent} */
declare function SeoSchemaComponent(): SeoSchemaComponent;
type SeoSchemaComponent = {
    items?: SEOSchemaMarkupTemplate[];
    page?: Page;
};
/** @returns {SEOSchemaMarkupTemplate} */
declare function SEOSchemaMarkupTemplate(): SEOSchemaMarkupTemplate;
type SEOSchemaMarkupTemplate = {
    id?: string;
    title?: string;
    page_type?: string;
    schema?: string;
    description?: string;
    active?: boolean;
    created_at?: string;
    updated_at?: string;
    application?: string;
    target_json?: any;
};
/** @returns {SEOSchemaMarkupTemplateRequestBody} */
declare function SEOSchemaMarkupTemplateRequestBody(): SEOSchemaMarkupTemplateRequestBody;
type SEOSchemaMarkupTemplateRequestBody = {
    title?: string;
    page_type?: string;
    schema?: string;
    description?: string;
    target_json?: any;
    active?: boolean;
    created_at?: string;
    updated_at?: string;
};
/** @returns {AnnouncementPageSchema} */
declare function AnnouncementPageSchema(): AnnouncementPageSchema;
type AnnouncementPageSchema = {
    page_slug?: string;
    type?: string;
};
/** @returns {EditorMeta} */
declare function EditorMeta(): EditorMeta;
type EditorMeta = {
    foreground_color?: string;
    background_color?: string;
    content_type?: string;
    content?: string;
};
/** @returns {AnnouncementAuthorSchema} */
declare function AnnouncementAuthorSchema(): AnnouncementAuthorSchema;
type AnnouncementAuthorSchema = {
    created_by?: string;
    modified_by?: string;
};
/** @returns {AdminAnnouncementSchema} */
declare function AdminAnnouncementSchema(): AdminAnnouncementSchema;
type AdminAnnouncementSchema = {
    _id?: string;
    platforms?: string[];
    title?: string;
    announcement?: string;
    pages?: AnnouncementPageSchema[];
    editor_meta?: EditorMeta;
    author?: AnnouncementAuthorSchema;
    created_at?: string;
    app?: string;
    modified_at?: string;
    _schedule?: ScheduleSchema;
};
/** @returns {DefaultSchemaComponent} */
declare function DefaultSchemaComponent(): DefaultSchemaComponent;
type DefaultSchemaComponent = {
    items?: DefaultSEOSchemaMarkupTemplate[];
};
/** @returns {DefaultSEOSchemaMarkupTemplate} */
declare function DefaultSEOSchemaMarkupTemplate(): DefaultSEOSchemaMarkupTemplate;
type DefaultSEOSchemaMarkupTemplate = {
    page_type?: string;
    schema?: string;
    target_json?: any;
};
/** @returns {ScheduleSchema} */
declare function ScheduleSchema(): ScheduleSchema;
type ScheduleSchema = {
    cron?: string;
    start?: string;
    end?: string;
    duration?: number;
    next_schedule?: NextSchedule[];
};
/** @returns {NextSchedule} */
declare function NextSchedule(): NextSchedule;
type NextSchedule = {
    start?: string;
    end?: string;
};
/** @returns {BlogGetDetails} */
declare function BlogGetDetails(): BlogGetDetails;
type BlogGetDetails = {
    items?: BlogSchema[];
    page?: Page;
    filters?: BlogFilters;
};
/** @returns {BlogFilters} */
declare function BlogFilters(): BlogFilters;
type BlogFilters = {
    tags?: string[];
};
/** @returns {ResourceContent} */
declare function ResourceContent(): ResourceContent;
type ResourceContent = {
    type?: string;
    value?: string;
};
/** @returns {Asset} */
declare function Asset(): Asset;
type Asset = {
    aspect_ratio?: string;
    id?: string;
    secure_url?: string;
};
/** @returns {Author} */
declare function Author(): Author;
type Author = {
    designation?: string;
    id?: string;
    name?: string;
};
/** @returns {BlogSchema} */
declare function BlogSchema(): BlogSchema;
type BlogSchema = {
    _id?: string;
    _custom_json?: any;
    application?: string;
    archived?: boolean;
    author?: Author;
    content?: ResourceContent[];
    feature_image?: Asset;
    published?: boolean;
    reading_time?: string;
    slug?: string;
    publish_date?: string;
    tags?: string[];
    seo?: SEO;
    title?: string;
    date_meta?: DateMeta;
    summary?: string;
};
/** @returns {SEO} */
declare function SEO(): SEO;
type SEO = {
    description?: string;
    image?: SEOImage;
    title?: string;
    meta_tags?: SEOMetaItem[];
    sitemap?: SEOSitemap;
    breadcrumb?: SEObreadcrumb[];
    canonical_url?: string;
};
/** @returns {SEOImage} */
declare function SEOImage(): SEOImage;
type SEOImage = {
    url?: string;
};
/** @returns {SEOMetaItem} */
declare function SEOMetaItem(): SEOMetaItem;
type SEOMetaItem = {
    title?: string;
    items?: SEOMetaItems[];
};
/** @returns {SEOMetaItems} */
declare function SEOMetaItems(): SEOMetaItems;
type SEOMetaItems = {
    key?: string;
    value?: string;
};
/** @returns {SEOSitemap} */
declare function SEOSitemap(): SEOSitemap;
type SEOSitemap = {
    priority?: number;
    frequency?: string;
};
/** @returns {SEObreadcrumb} */
declare function SEObreadcrumb(): SEObreadcrumb;
type SEObreadcrumb = {
    url?: string;
    action?: Action;
};
/** @returns {DateMeta} */
declare function DateMeta(): DateMeta;
type DateMeta = {
    created_on?: string;
    modified_on?: string;
};
/** @returns {BlogPayload} */
declare function BlogPayload(): BlogPayload;
type BlogPayload = {
    application?: string;
    _custom_json?: any;
    author?: Author;
    content?: ResourceContent[];
    feature_image?: Asset;
    published?: boolean;
    reading_time?: string;
    slug?: string;
    tags?: string[];
    title?: string;
    seo?: SEO;
    summary?: string;
};
/** @returns {GetAnnouncementListSchema} */
declare function GetAnnouncementListSchema(): GetAnnouncementListSchema;
type GetAnnouncementListSchema = {
    items?: AdminAnnouncementSchema[];
    page?: Page;
};
/** @returns {CreateAnnouncementSchema} */
declare function CreateAnnouncementSchema(): CreateAnnouncementSchema;
type CreateAnnouncementSchema = {
    message?: string;
    data?: AdminAnnouncementSchema;
};
/** @returns {DataLoaderResponseSchema} */
declare function DataLoaderResponseSchema(): DataLoaderResponseSchema;
type DataLoaderResponseSchema = {
    application?: string;
    company?: string;
    _id?: string;
    name?: string;
    service?: string;
    operation_id?: string;
    type?: string;
    url?: string;
    content?: string;
    __source?: DataLoaderSourceSchema;
};
/** @returns {DataLoaderResetResponseSchema} */
declare function DataLoaderResetResponseSchema(): DataLoaderResetResponseSchema;
type DataLoaderResetResponseSchema = {
    reset?: boolean;
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
    acl?: string[];
    tags?: string[];
    _locale_language?: LocaleLanguage;
    image?: string;
    type?: string;
    action?: Action;
    active?: boolean;
    display?: string;
    sort_order?: number;
    schedule?: CronBasedScheduleSchema;
    sub_navigation?: NavigationReference[];
};
/** @returns {CronBasedScheduleSchema} */
declare function CronBasedScheduleSchema(): CronBasedScheduleSchema;
type CronBasedScheduleSchema = {
    enabled?: boolean;
    cron?: string;
    start?: string;
    end?: string;
};
/** @returns {ConfigurationSchema} */
declare function ConfigurationSchema(): ConfigurationSchema;
type ConfigurationSchema = {
    sleep_time?: number;
    start_on_launch?: boolean;
    duration?: number;
    slide_direction?: string;
};
/** @returns {SlideshowMedia} */
declare function SlideshowMedia(): SlideshowMedia;
type SlideshowMedia = {
    type?: string;
    url?: string;
    bg_color?: string;
    duration?: number;
    auto_decide_duration?: boolean;
    action?: Action;
};
/** @returns {UpdateHandpickedSchema} */
declare function UpdateHandpickedSchema(): UpdateHandpickedSchema;
type UpdateHandpickedSchema = {
    tag?: HandpickedTagSchema;
};
/** @returns {HandpickedTagSchema} */
declare function HandpickedTagSchema(): HandpickedTagSchema;
type HandpickedTagSchema = {
    position?: string;
    attributes?: any;
    name?: string;
    url?: string;
    type?: string;
    sub_type?: string;
    content?: string;
};
/** @returns {RemoveHandpickedSchema} */
declare function RemoveHandpickedSchema(): RemoveHandpickedSchema;
type RemoveHandpickedSchema = {
    tags?: string[];
};
/** @returns {CreateTagSchema} */
declare function CreateTagSchema(): CreateTagSchema;
type CreateTagSchema = {
    name?: string;
    sub_type?: string;
    _id?: string;
    type?: string;
    url?: string;
    position?: string;
    attributes?: any;
    pages?: any[];
    content?: string;
};
/** @returns {CreateTagRequestSchema} */
declare function CreateTagRequestSchema(): CreateTagRequestSchema;
type CreateTagRequestSchema = {
    tags?: CreateTagSchema[];
};
/** @returns {DataLoaderSchema} */
declare function DataLoaderSchema(): DataLoaderSchema;
type DataLoaderSchema = {
    name?: string;
    service?: string;
    operation_id?: string;
    type?: string;
    url?: string;
    content?: string;
    __source?: DataLoaderSourceSchema;
    _id?: string;
};
/** @returns {DataLoaderSourceSchema} */
declare function DataLoaderSourceSchema(): DataLoaderSourceSchema;
type DataLoaderSourceSchema = {
    type?: string;
    id?: string;
};
/** @returns {DataLoadersSchema} */
declare function DataLoadersSchema(): DataLoadersSchema;
type DataLoadersSchema = {
    items?: DataLoaderSchema[];
};
/** @returns {TagDeleteSuccessDetails} */
declare function TagDeleteSuccessDetails(): TagDeleteSuccessDetails;
type TagDeleteSuccessDetails = {
    success?: boolean;
};
/** @returns {ContentAPIError} */
declare function ContentAPIError(): ContentAPIError;
type ContentAPIError = {
    message?: string;
    status?: number;
    code?: string;
    exception?: string;
    info?: string;
    request_id?: string;
    stack_trace?: string;
    meta?: any;
};
/** @returns {CommonError} */
declare function CommonError(): CommonError;
type CommonError = {
    message?: string;
};
/** @returns {CategorySchema} */
declare function CategorySchema(): CategorySchema;
type CategorySchema = {
    index?: number;
    title?: string;
    description?: string;
    children?: string[];
    _id?: string;
    slug?: string;
    application?: string;
    icon_url?: string;
    _custom_json?: any;
};
/** @returns {ChildrenSchema} */
declare function ChildrenSchema(): ChildrenSchema;
type ChildrenSchema = {
    question?: string;
    answer?: string;
    slug?: string;
    application?: string;
    _id?: string;
};
/** @returns {CategoryRequestSchema} */
declare function CategoryRequestSchema(): CategoryRequestSchema;
type CategoryRequestSchema = {
    slug?: string;
    title?: string;
};
/** @returns {FAQCategorySchema} */
declare function FAQCategorySchema(): FAQCategorySchema;
type FAQCategorySchema = {
    index?: number;
    title?: string;
    description?: string;
    children?: ChildrenSchema[];
    _id?: string;
    slug?: string;
    application?: string;
    icon_url?: string;
    _custom_json?: any;
};
/** @returns {FaqSchema} */
declare function FaqSchema(): FaqSchema;
type FaqSchema = {
    slug?: string;
    application?: string;
    _id?: string;
    question?: string;
    answer?: string;
    tags?: string[];
};
/** @returns {FAQ} */
declare function FAQ(): FAQ;
type FAQ = {
    slug?: string;
    question?: string;
    answer?: string;
};
/** @returns {CreateFaqResponseSchema} */
declare function CreateFaqResponseSchema(): CreateFaqResponseSchema;
type CreateFaqResponseSchema = {
    faq?: FaqSchema;
};
/** @returns {CreateFaqSchema} */
declare function CreateFaqSchema(): CreateFaqSchema;
type CreateFaqSchema = {
    faq?: FAQ;
};
/** @returns {GetFaqSchema} */
declare function GetFaqSchema(): GetFaqSchema;
type GetFaqSchema = {
    faqs?: FaqSchema[];
};
/** @returns {UpdateFaqCategoryRequestSchema} */
declare function UpdateFaqCategoryRequestSchema(): UpdateFaqCategoryRequestSchema;
type UpdateFaqCategoryRequestSchema = {
    category?: CategorySchema;
};
/** @returns {CreateFaqCategoryRequestSchema} */
declare function CreateFaqCategoryRequestSchema(): CreateFaqCategoryRequestSchema;
type CreateFaqCategoryRequestSchema = {
    category?: CategoryRequestSchema;
};
/** @returns {CreateFaqCategorySchema} */
declare function CreateFaqCategorySchema(): CreateFaqCategorySchema;
type CreateFaqCategorySchema = {
    category?: CategorySchema;
};
/** @returns {GetFaqCategoriesSchema} */
declare function GetFaqCategoriesSchema(): GetFaqCategoriesSchema;
type GetFaqCategoriesSchema = {
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
/** @returns {LandingPageGetDetails} */
declare function LandingPageGetDetails(): LandingPageGetDetails;
type LandingPageGetDetails = {
    items?: LandingPageSchema[];
    page?: Page;
};
/** @returns {LandingPageSchema} */
declare function LandingPageSchema(): LandingPageSchema;
type LandingPageSchema = {
    slug?: string;
    action?: Action;
    platform?: string[];
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    _id?: string;
    application?: string;
    archived?: boolean;
    _custom_json?: any;
};
/** @returns {DefaultNavigationDetails} */
declare function DefaultNavigationDetails(): DefaultNavigationDetails;
type DefaultNavigationDetails = {
    items?: NavigationSchema[];
};
/** @returns {NavigationGetDetails} */
declare function NavigationGetDetails(): NavigationGetDetails;
type NavigationGetDetails = {
    items?: NavigationSchema[];
    page?: Page;
};
/** @returns {Orientation} */
declare function Orientation(): Orientation;
type Orientation = {
    portrait?: string[];
    landscape?: string[];
};
/** @returns {NavigationSchema} */
declare function NavigationSchema(): NavigationSchema;
type NavigationSchema = {
    _id?: string;
    application?: string;
    archived?: boolean;
    name?: string;
    slug?: string;
    platform?: string[];
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    orientation?: Orientation;
    version?: number;
    navigation?: NavigationReference[];
};
/** @returns {NavigationPayload} */
declare function NavigationPayload(): NavigationPayload;
type NavigationPayload = {
    name?: string;
    slug?: string;
    platform?: string[];
    orientation?: Orientation;
    navigation?: NavigationReference[];
};
/** @returns {PageGetDetails} */
declare function PageGetDetails(): PageGetDetails;
type PageGetDetails = {
    items?: PageSchema[];
    page?: Page;
};
/** @returns {PageSpec} */
declare function PageSpec(): PageSpec;
type PageSpec = {
    specifications?: PageSpecItem[];
};
/** @returns {PageSpecParam} */
declare function PageSpecParam(): PageSpecParam;
type PageSpecParam = {
    key?: string;
    required?: boolean;
};
/** @returns {PageSpecItem} */
declare function PageSpecItem(): PageSpecItem;
type PageSpecItem = {
    page_type?: string;
    display_name?: string;
    params?: PageSpecParam[];
    query?: PageSpecParam[];
};
/** @returns {PageSchema} */
declare function PageSchema(): PageSchema;
type PageSchema = {
    _id?: string;
    application?: string;
    /**
     * - Components can be used to store
     * multiple components
     */
    component_ids?: string[];
    content?: any[];
    content_path?: string;
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    description?: string;
    feature_image?: Asset;
    page_meta?: any[];
    _schedule?: ScheduleSchema;
    _custom_json?: any;
    orientation?: string;
    platform?: string;
    published?: boolean;
    slug?: string;
    tags?: string[];
    title?: string;
    type?: string;
    seo?: SEO;
    visibility?: any;
    archived?: boolean;
};
/** @returns {CreatedBySchema} */
declare function CreatedBySchema(): CreatedBySchema;
type CreatedBySchema = {
    id?: string;
};
/** @returns {PagePayload} */
declare function PagePayload(): PagePayload;
type PagePayload = {
    _schedule?: CronSchedule;
    application?: string;
    author?: Author;
    _custom_json?: any;
    orientation?: string;
    content?: any[];
    feature_image?: Asset;
    published?: boolean;
    reading_time?: string;
    slug?: string;
    tags?: string[];
    seo?: SEO;
    title?: string;
};
/** @returns {CronSchedule} */
declare function CronSchedule(): CronSchedule;
type CronSchedule = {
    cron?: string;
    start?: string;
    end?: string;
    duration?: number;
};
/** @returns {PagePublishPayload} */
declare function PagePublishPayload(): PagePublishPayload;
type PagePublishPayload = {
    publish?: boolean;
};
/** @returns {PageMetaSchema} */
declare function PageMetaSchema(): PageMetaSchema;
type PageMetaSchema = {
    system_pages?: NavigationSchema[];
    custom_pages?: PageSchema[];
    application_id?: string;
};
/** @returns {SlideshowGetDetails} */
declare function SlideshowGetDetails(): SlideshowGetDetails;
type SlideshowGetDetails = {
    items?: SlideshowSchema[];
    page?: Page;
};
/** @returns {SlideshowSchema} */
declare function SlideshowSchema(): SlideshowSchema;
type SlideshowSchema = {
    _id?: string;
    slug?: string;
    date_meta?: DateMeta;
    application?: string;
    platform?: string;
    configuration?: ConfigurationSchema;
    media?: SlideshowMedia[];
    active?: boolean;
    archived?: boolean;
    _custom_json?: any;
};
/** @returns {SlideshowPayload} */
declare function SlideshowPayload(): SlideshowPayload;
type SlideshowPayload = {
    slug?: string;
    platform?: string;
    configuration?: ConfigurationSchema;
    media?: SlideshowMedia;
    active?: boolean;
};
/** @returns {Support} */
declare function Support(): Support;
type Support = {
    created?: boolean;
    _id?: string;
    application?: string;
    created_at?: string;
    updated_at?: string;
    contact?: ContactSchema;
};
/** @returns {PhoneProperties} */
declare function PhoneProperties(): PhoneProperties;
type PhoneProperties = {
    key?: string;
    code?: string;
    number?: string;
    phone_type?: string;
};
/** @returns {PhoneSchema} */
declare function PhoneSchema(): PhoneSchema;
type PhoneSchema = {
    active?: boolean;
    phone?: PhoneProperties[];
};
/** @returns {EmailProperties} */
declare function EmailProperties(): EmailProperties;
type EmailProperties = {
    key?: string;
    value?: string;
};
/** @returns {EmailSchema} */
declare function EmailSchema(): EmailSchema;
type EmailSchema = {
    active?: boolean;
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
    application?: string;
    _id?: string;
    tags?: TagSchema[];
};
/** @returns {TagSchema} */
declare function TagSchema(): TagSchema;
type TagSchema = {
    name?: string;
    url?: string;
    type?: string;
    sub_type?: string;
    _id?: string;
    position?: string;
    attributes?: any;
    content?: string;
    pages?: any[];
    __source?: TagSourceSchema;
};
/** @returns {TagSourceSchema} */
declare function TagSourceSchema(): TagSourceSchema;
type TagSourceSchema = {
    type?: string;
    id?: string;
};
/** @returns {ResourcesSchema} */
declare function ResourcesSchema(): ResourcesSchema;
type ResourcesSchema = {
    resources?: ResourceSchema[];
};
/** @returns {ResourceSchema} */
declare function ResourceSchema(): ResourceSchema;
type ResourceSchema = {
    /**
     * - Resource name
     */
    name?: string;
    /**
     * - Resource key
     */
    key?: string;
    /**
     * - Number of definitions
     */
    definitions_count?: number;
};
/** @returns {FieldValidations} */
declare function FieldValidations(): FieldValidations;
type FieldValidations = {
    /**
     * - Name of validation
     */
    name?: string;
    /**
     * - Type of validation
     */
    type?: string;
    value?: any;
};
/** @returns {FieldDefinitionSchema} */
declare function FieldDefinitionSchema(): FieldDefinitionSchema;
type FieldDefinitionSchema = {
    /**
     * - Unique system generated id
     */
    id?: string;
    /**
     * - Resource type to which custom field belongs
     */
    resource?: string;
    /**
     * - Name of custom field
     */
    name?: string;
    /**
     * - Namespace of custom field
     */
    namespace?: string;
    /**
     * - Slug of custom field
     */
    slug?: string;
    /**
     * - Description of custom field definition
     */
    description?: string;
    /**
     * - Data type of custom field
     */
    type?: string;
    /**
     * - Flag to denote whether custom field is
     * multivalued or not
     */
    multi_value?: boolean;
    /**
     * - List of validations applied
     */
    validations?: FieldValidations[];
    /**
     * - Id of company
     */
    company_id?: string;
    /**
     * - Whether the custom field is required or not
     */
    required?: boolean;
    /**
     * - Whether the custom field is deleted or not
     */
    is_deleted?: boolean;
    /**
     * - Type of type field
     */
    type_name?: string;
    /**
     * - Count of invalid fields after validation
     */
    invalid_fields_count?: number;
};
/** @returns {CustomFieldDefinitionsSchema} */
declare function CustomFieldDefinitionsSchema(): CustomFieldDefinitionsSchema;
type CustomFieldDefinitionsSchema = {
    /**
     * - List of custom field definitions
     */
    items?: FieldDefinitionSchema[];
    page?: Page;
};
/** @returns {CustomFieldDefinitionRequestSchema} */
declare function CustomFieldDefinitionRequestSchema(): CustomFieldDefinitionRequestSchema;
type CustomFieldDefinitionRequestSchema = {
    /**
     * - Data type of custom field
     */
    type?: string;
    /**
     * - Slug of custom field definition
     */
    slug?: string;
    /**
     * - Namespace of custom field definition
     */
    namespace?: string;
    /**
     * - Flag to denote whether custom field is
     * multi valued or not
     */
    multi_value?: boolean;
    /**
     * - Name of custom field definition
     */
    name?: string;
    /**
     * - Description of a custom field definition
     */
    description?: string;
    /**
     * - Validations for a custom field
     */
    validations?: FieldValidations[];
};
/** @returns {CustomObjectCustomFieldDefinitions} */
declare function CustomObjectCustomFieldDefinitions(): CustomObjectCustomFieldDefinitions;
type CustomObjectCustomFieldDefinitions = {
    /**
     * - Unique identifer for a custom field
     */
    id?: string;
    /**
     * - Data type of custom field
     */
    type?: string;
    /**
     * - Description of custom field
     */
    description?: string;
    /**
     * - Name of custom field
     */
    name?: string;
    /**
     * - Flag to denote if cusom field is multi
     * valued or not
     */
    multi_value?: boolean;
    /**
     * - Whether the field is required or not
     */
    required?: boolean;
    /**
     * - Slug of custom field definition
     */
    slug?: string;
    /**
     * - Validations added against the
     * custom field
     */
    validations?: FieldValidations[];
    action?: string;
};
/** @returns {CustomObjectDefinitionUpdateRequestSchema} */
declare function CustomObjectDefinitionUpdateRequestSchema(): CustomObjectDefinitionUpdateRequestSchema;
type CustomObjectDefinitionUpdateRequestSchema = {
    /**
     * - Description of custom object definiton
     */
    description?: string;
    /**
     * - Name of custom object definition
     */
    name?: string;
    /**
     * - Custom field slug which is used as a
     * display key in
     */
    display_name_key?: string;
    field_definitions?: CustomObjectCustomFieldDefinitions[];
};
/** @returns {CustomFieldDefinitionDetailResSchema} */
declare function CustomFieldDefinitionDetailResSchema(): CustomFieldDefinitionDetailResSchema;
type CustomFieldDefinitionDetailResSchema = {
    /**
     * - Resource to which custom field is associated
     */
    resource?: string;
    /**
     * - Name of custom field
     */
    name?: string;
    /**
     * - Namespace of custom field
     */
    namespace?: string;
    /**
     * - Slug of custom field
     */
    slug?: string;
    /**
     * - Description regarding custom field
     */
    description?: string;
    /**
     * - Data type of custom field
     */
    type?: string;
    /**
     * - Flag to denote whether custom field is
     * multi valued or not
     */
    multi_value?: boolean;
    /**
     * - Company Identifer
     */
    company_id?: string;
    /**
     * - Sales channel identifier
     */
    application_id?: string;
    /**
     * - Whether the customfield is required or not
     */
    required?: boolean;
    /**
     * - Is custom field deleted
     */
    is_deleted?: boolean;
    /**
     * - Unique system generated id
     */
    id?: string;
    validations?: any[];
    /**
     * - Date time at which field was created
     */
    created_at?: string;
    /**
     * - Date time at for a field's last modification
     */
    updated_at?: string;
};
/** @returns {MetaFieldDefinitionDetailResSchema} */
declare function MetaFieldDefinitionDetailResSchema(): MetaFieldDefinitionDetailResSchema;
type MetaFieldDefinitionDetailResSchema = {
    /**
     * - Resource to which meta field is associated
     */
    resource?: string;
    /**
     * - Name of meta field
     */
    name?: string;
    /**
     * - Namespace of meta field
     */
    namespace?: string;
    /**
     * - Slug of meta field
     */
    slug?: string;
    /**
     * - Description regarding meta field
     */
    description?: string;
    /**
     * - Data type of meta field
     */
    type?: string;
    /**
     * - Flag to denote whether meta field is
     * multi valued or not
     */
    multi_value?: boolean;
    /**
     * - Company Identifer
     */
    company_id?: string;
    /**
     * - Sales channel identifier
     */
    application_id?: string;
    /**
     * - Whether the field is required or not
     */
    required?: boolean;
    /**
     * - Is meta field deleted
     */
    is_deleted?: boolean;
    /**
     * - Unique system generated id
     */
    id?: string;
    validations?: any[];
    /**
     * - Date time at which field was created
     */
    created_at?: string;
    /**
     * - Date time at for a field's last modification
     */
    updated_at?: string;
};
/** @returns {CustomDataDeleteSchema} */
declare function CustomDataDeleteSchema(): CustomDataDeleteSchema;
type CustomDataDeleteSchema = {
    /**
     * - Denotes the success of the delete operation
     */
    success?: boolean;
    /**
     * - Denotes the message of delete operation
     */
    message?: string;
};
/** @returns {CustomFieldValue} */
declare function CustomFieldValue(): CustomFieldValue;
type CustomFieldValue = {
    value?: any;
};
/** @returns {CustomFieldSchema} */
declare function CustomFieldSchema(): CustomFieldSchema;
type CustomFieldSchema = {
    /**
     * - Unique system generated id
     */
    id?: string;
    /**
     * - Namespace of custom field definition
     */
    namespace?: string;
    /**
     * - Slug of custom field definition
     */
    slug?: string;
    /**
     * - The resource for which custom field is being created
     */
    resource?: string;
    value?: CustomFieldValue[];
    /**
     * - Unique identifier of the resource
     */
    resource_slug?: string;
    /**
     * - Data type of custom field
     */
    type?: string;
    /**
     * - Whether custom field is multi valued
     */
    multi_value?: boolean;
    /**
     * - Identifer for a company
     */
    company_id?: string;
    has_invalid_values?: boolean;
    invalid_value_errors?: any[];
    /**
     * - Indicates whether custom field is deleted
     */
    is_deleted?: boolean;
    /**
     * - Time at which customer field was created
     */
    created_at?: string;
    /**
     * - Time at which custom field was updated
     */
    updated_at?: string;
};
/** @returns {CustomFieldsResponseSchema} */
declare function CustomFieldsResponseSchema(): CustomFieldsResponseSchema;
type CustomFieldsResponseSchema = {
    items?: CustomFieldSchema[];
    page?: Page;
};
/** @returns {CustomFieldsDeleteSchema} */
declare function CustomFieldsDeleteSchema(): CustomFieldsDeleteSchema;
type CustomFieldsDeleteSchema = {
    success?: boolean;
    message?: string;
};
/** @returns {CustomFieldsResponseByResourceIdSchema} */
declare function CustomFieldsResponseByResourceIdSchema(): CustomFieldsResponseByResourceIdSchema;
type CustomFieldsResponseByResourceIdSchema = {
    items?: CustomFieldSchema[];
};
/** @returns {CustomField} */
declare function CustomField(): CustomField;
type CustomField = {
    value?: any[];
    /**
     * - This is the namespace to which custom field belongs
     */
    namespace?: string;
    /**
     * - This is the slug of custom field used while
     * creating a custom field definition
     */
    slug?: string;
};
/** @returns {CustomFieldRequestSchema} */
declare function CustomFieldRequestSchema(): CustomFieldRequestSchema;
type CustomFieldRequestSchema = {
    fields?: CustomField[];
};
/** @returns {CustomObjectSchema} */
declare function CustomObjectSchema(): CustomObjectSchema;
type CustomObjectSchema = {
    /**
     * - Unique system generated id
     */
    id?: string;
    /**
     * - Identifer for a company
     */
    company_id?: string;
    /**
     * - Identifer for a sales channel
     */
    application_id?: string;
    /**
     * - Status of custom object
     */
    status?: string;
    /**
     * - Slug of custom object definition
     */
    type?: string;
    /**
     * - Slug for custom object definition
     */
    definition_slug?: string;
    /**
     * - Value of custom field used for displaying
     * custom object
     */
    display_name?: string;
    /**
     * - Fields associated to the custom object
     */
    fields?: CustomFieldSchema[];
};
/** @returns {CustomObjectDefinitionRequestSchema} */
declare function CustomObjectDefinitionRequestSchema(): CustomObjectDefinitionRequestSchema;
type CustomObjectDefinitionRequestSchema = {
    /**
     * - Namespace/Slug of Custom object definition
     */
    type?: string;
    /**
     * - Unique slug for a custom object definition
     */
    definition_slug?: string;
    /**
     * - Description of custom object definition
     */
    description?: string;
    /**
     * - Name of custom object
     */
    name?: string;
    /**
     * - Denotes which custom field to be used
     * for displaying custom object
     */
    display_name_key?: string;
    /**
     * - List
     * of custom field definitions belonging to this custom object definition
     */
    field_definitions?: CustomObjectCustomFieldDefinitions[];
};
/** @returns {CustomObjectDefinitionSlugSchema} */
declare function CustomObjectDefinitionSlugSchema(): CustomObjectDefinitionSlugSchema;
type CustomObjectDefinitionSlugSchema = {
    /**
     * - Unique system generated custom object definition id
     */
    id?: string;
    /**
     * - Display name of custom object definition
     */
    name?: string;
    /**
     * - Type of custom object definiton
     */
    type?: string;
    /**
     * - Slug of custom object definiton
     */
    definition_slug?: string;
    /**
     * - Display name of custom object definition
     */
    display_name_key?: string;
    /**
     * - Description of custom object definition
     */
    description?: string;
    /**
     * -
     * Custom fields inside custom objects
     */
    field_definitions?: CustomFieldDefinitionDetailResSchema[];
};
/** @returns {CustomObjectDefinitionDeleteResponseSchema} */
declare function CustomObjectDefinitionDeleteResponseSchema(): CustomObjectDefinitionDeleteResponseSchema;
type CustomObjectDefinitionDeleteResponseSchema = {
    /**
     * - Success status of delete custom object definition.
     */
    success?: boolean;
    /**
     * - Response message when custom object definition
     * is deleted.
     */
    message?: string;
};
/** @returns {CustomObjectEntryBulkUploadDetails} */
declare function CustomObjectEntryBulkUploadDetails(): CustomObjectEntryBulkUploadDetails;
type CustomObjectEntryBulkUploadDetails = {
    /**
     * - Signed url of csv
     */
    url?: string;
    /**
     * - Total no of records in csv file
     */
    total_records?: number;
};
/** @returns {CustomObjectListItemDefinitionModel} */
declare function CustomObjectListItemDefinitionModel(): CustomObjectListItemDefinitionModel;
type CustomObjectListItemDefinitionModel = {
    /**
     * - Unique system generated id
     */
    id?: string;
    /**
     * - Name of custom object
     */
    name?: string;
    /**
     * - Type of custom object entry
     */
    type?: string;
};
/** @returns {CustomObjectListItemSchema} */
declare function CustomObjectListItemSchema(): CustomObjectListItemSchema;
type CustomObjectListItemSchema = {
    /**
     * - Unique system generated id
     */
    id?: string;
    /**
     * - Status of custom object
     */
    status?: string;
    /**
     * - Creation time of custom object document
     */
    created_at?: string;
    /**
     * - Updation time of custom object document
     */
    updated_at?: string;
    /**
     * - Display name of custom object
     */
    display_name?: string;
    definition?: CustomObjectListItemDefinitionModel;
    /**
     * - References of the custom object entry
     */
    references?: number;
};
/** @returns {CustomObjectsSchema} */
declare function CustomObjectsSchema(): CustomObjectsSchema;
type CustomObjectsSchema = {
    /**
     * - List of paginated custom
     * object entries
     */
    items?: CustomObjectListItemSchema[];
    page?: Page;
};
/** @returns {CustomObjectFieldDefinition} */
declare function CustomObjectFieldDefinition(): CustomObjectFieldDefinition;
type CustomObjectFieldDefinition = {
    /**
     * - Unique system generate id
     */
    id?: string;
    /**
     * - Slug of custom field definition
     */
    slug?: string;
    /**
     * - Namespace of custom field definition
     */
    namespace?: string;
    /**
     * - Value of custom field
     */
    value?: any[];
    /**
     * - Data type of the custom field
     */
    type?: string;
};
/** @returns {CustomObjectBySlugSchema} */
declare function CustomObjectBySlugSchema(): CustomObjectBySlugSchema;
type CustomObjectBySlugSchema = {
    /**
     * - Unique system generated identifer for a Custom Object
     */
    id?: string;
    /**
     * - Status of Custom Object
     */
    status?: string;
    /**
     * - Display name for the Custom Object
     */
    display_name?: string;
    definition?: CustomObjectListItemDefinitionModel;
    /**
     * - Places where the custom object has been
     * used as a custom field
     */
    references?: any[];
    /**
     * - Slug of custom object entry
     */
    slug?: string;
    /**
     * - Slug of custom object definition
     */
    definition_slug?: string;
    /**
     * - List of custom fields
     * inside the custom object
     */
    fields?: CustomObjectFieldDefinition[];
};
/** @returns {CustomObjectBulkEntryInitiateDownload} */
declare function CustomObjectBulkEntryInitiateDownload(): CustomObjectBulkEntryInitiateDownload;
type CustomObjectBulkEntryInitiateDownload = {
    /**
     * - Message for the user
     */
    message?: string;
    /**
     * - Identifer for a task
     */
    task_id?: string;
};
/** @returns {CustomObjectMetaSchema} */
declare function CustomObjectMetaSchema(): CustomObjectMetaSchema;
type CustomObjectMetaSchema = {
    /**
     * - Total number of entries in the bulk entry
     */
    mo_total_count?: number;
    /**
     * - Number of entries which were successful
     */
    mo_success_count?: number;
    /**
     * - Number of entries which were failed
     */
    mo_error_count?: number;
    /**
     * - Type of object
     */
    mo_defintion_type?: string;
};
/** @returns {JobSchema} */
declare function JobSchema(): JobSchema;
type JobSchema = {
    /**
     * - Unique system generated id
     */
    id?: string;
    /**
     * - List of total jobs
     */
    jobs?: string[];
    /**
     * - List of finished jobs
     */
    finished_jobs?: string[];
    /**
     * - List of jobs which resulted in an error
     */
    error_jobs?: string[];
    /**
     * - List of errors occurred in the job
     */
    errors_occured?: string[];
    /**
     * - Company Identifer
     */
    company_id?: string;
    /**
     * - Status of job
     */
    status?: string;
    /**
     * - Type of job
     */
    action_type?: string;
    /**
     * - Entity against which job is running
     */
    entity?: string;
    /**
     * - URL which contains the file with errors
     */
    error_url?: string;
    /**
     * - Number of items successfully finished
     */
    finished_count?: number;
    /**
     * - Number of items in error
     */
    error_count?: number;
    /**
     * - Number of successful items
     */
    success_count?: number;
    /**
     * - Total number of jobs
     */
    total_jobs?: number;
    meta?: CustomObjectMetaSchema;
    /**
     * - Source from where the bulk job is created
     */
    created_by?: string;
    /**
     * - Date/Time when the job was created
     */
    created_at?: string;
    /**
     * - Date/Time when the job was updated
     */
    updated_at?: string;
    /**
     * - Sales Channel Identifier
     */
    application_id?: string;
};
/** @returns {CustomFieldBulkEntry} */
declare function CustomFieldBulkEntry(): CustomFieldBulkEntry;
type CustomFieldBulkEntry = {
    items?: JobSchema[];
    page?: Page;
};
/** @returns {CustomObjectBulkEntry} */
declare function CustomObjectBulkEntry(): CustomObjectBulkEntry;
type CustomObjectBulkEntry = {
    items?: JobSchema[];
    page?: Page;
};
/** @returns {MetafieldTypesSchema} */
declare function MetafieldTypesSchema(): MetafieldTypesSchema;
type MetafieldTypesSchema = {
    metafield_types?: CustomFieldTypeSchema;
};
/** @returns {CustomFieldTypeSchema} */
declare function CustomFieldTypeSchema(): CustomFieldTypeSchema;
type CustomFieldTypeSchema = {
    string_single_line?: StringSingleLine;
    string_multi_line?: StringMultiLine;
    dropdown?: Dropdown;
    integer?: Integer;
    float_type?: FloatType;
    boolean_type?: BooleanType;
    date?: Date;
    datetime?: Datetime;
    json?: Json;
    file?: File;
    url?: Url;
    metaobject?: Metaobject;
    product?: Product;
    html?: HTML;
    duration?: Duration;
};
/** @returns {SupportedValidationsMetaExampleSchema} */
declare function SupportedValidationsMetaExampleSchema(): SupportedValidationsMetaExampleSchema;
type SupportedValidationsMetaExampleSchema = {
    name?: string;
    value?: string;
};
/** @returns {SupportedValidationsMetaSchema} */
declare function SupportedValidationsMetaSchema(): SupportedValidationsMetaSchema;
type SupportedValidationsMetaSchema = {
    examples?: SupportedValidationsMetaExampleSchema[];
};
/** @returns {SupportedValidationsSchema} */
declare function SupportedValidationsSchema(): SupportedValidationsSchema;
type SupportedValidationsSchema = {
    name?: string;
    type?: string;
    display?: string;
    required?: boolean;
    meta?: SupportedValidationsMetaSchema;
};
/** @returns {Duration} */
declare function Duration(): Duration;
type Duration = {
    /**
     * - Name data type of custom field
     */
    name?: string;
    /**
     * - Flag for listing enabled or not
     */
    list_enabled?: boolean;
    /**
     * - Type of custom field
     */
    type?: string;
    /**
     * - Category of custom field
     */
    category?: string;
    /**
     * - List of
     * validations available for the field
     */
    supported_validations?: SupportedValidationsSchema[];
};
/** @returns {HTML} */
declare function HTML(): HTML;
type HTML = {
    /**
     * - Name data type of custom field
     */
    name?: string;
    /**
     * - Flag for listing enabled or not
     */
    list_enabled?: boolean;
    /**
     * - Type of custom field
     */
    type?: string;
    /**
     * - List of
     * validations available for the field
     */
    supported_validations?: SupportedValidationsSchema[];
};
/** @returns {StringSingleLine} */
declare function StringSingleLine(): StringSingleLine;
type StringSingleLine = {
    /**
     * - Name data type of custom field
     */
    name?: string;
    /**
     * - Flag for listing enabled or not
     */
    list_enabled?: boolean;
    /**
     * - Category of custom field
     */
    category?: string;
    /**
     * - Type of custom field
     */
    type?: string;
    /**
     * - List of
     * validations available for the field
     */
    supported_validations?: SupportedValidationsSchema[];
};
/** @returns {StringMultiLine} */
declare function StringMultiLine(): StringMultiLine;
type StringMultiLine = {
    /**
     * - Name data type of custom field
     */
    name?: string;
    /**
     * - Flag for listing enabled or not
     */
    list_enabled?: boolean;
    /**
     * - Category of custom field
     */
    category?: string;
    /**
     * - Type of custom field
     */
    type?: string;
    /**
     * - List of
     * validations available for the field
     */
    supported_validations?: SupportedValidationsSchema[];
};
/** @returns {Dropdown} */
declare function Dropdown(): Dropdown;
type Dropdown = {
    /**
     * - Name data type of custom field
     */
    name?: string;
    /**
     * - Flag for listing enabled or not
     */
    list_enabled?: boolean;
    /**
     * - Category of custom field
     */
    category?: string;
    /**
     * - Category of custom field
     */
    type?: string;
    /**
     * - List of
     * validations available for the field
     */
    supported_validations?: SupportedValidationsSchema[];
};
/** @returns {Integer} */
declare function Integer(): Integer;
type Integer = {
    /**
     * - Name data type of custom field
     */
    name?: string;
    /**
     * - Flag for listing enabled or not
     */
    list_enabled?: boolean;
    /**
     * - Type of custom field
     */
    type?: string;
    /**
     * - Category of custom field
     */
    category?: string;
    /**
     * - List of
     * validations available for the field
     */
    supported_validations?: SupportedValidationsSchema[];
};
/** @returns {FloatType} */
declare function FloatType(): FloatType;
type FloatType = {
    /**
     * - Name data type of custom field
     */
    name?: string;
    /**
     * - Flag for listing enabled or not
     */
    list_enabled?: boolean;
    /**
     * - Type of custom field
     */
    type?: string;
    /**
     * - Category of custom field
     */
    category?: string;
    /**
     * - List of
     * validations available for the field
     */
    supported_validations?: SupportedValidationsSchema[];
};
/** @returns {BooleanType} */
declare function BooleanType(): BooleanType;
type BooleanType = {
    /**
     * - Name data type of custom field
     */
    name?: string;
    /**
     * - Category of custom field
     */
    category?: string;
    /**
     * - Flag for listing enabled or not
     */
    list_enabled?: boolean;
    /**
     * - Category of custom field
     */
    type?: string;
    /**
     * - List of
     * validations available for the field
     */
    supported_validations?: SupportedValidationsSchema[];
};
/** @returns {Date} */
declare function Date(): Date;
type Date = {
    /**
     * - Name data type of custom field
     */
    name?: string;
    /**
     * - Flag for listing enabled or not
     */
    list_enabled?: boolean;
    /**
     * - Category of custom field
     */
    category?: string;
    /**
     * - Type of custom field
     */
    type?: string;
    /**
     * - List of
     * validations available for the field
     */
    supported_validations?: SupportedValidationsSchema[];
};
/** @returns {Datetime} */
declare function Datetime(): Datetime;
type Datetime = {
    /**
     * - Name data type of custom field
     */
    name?: string;
    /**
     * - Category of custom field
     */
    category?: string;
    /**
     * - Flag for listing enabled or not
     */
    list_enabled?: boolean;
    /**
     * - Type of custom field
     */
    type?: string;
    /**
     * - List of
     * validations available for the field
     */
    supported_validations?: SupportedValidationsSchema[];
};
/** @returns {Json} */
declare function Json(): Json;
type Json = {
    /**
     * - Name data type of custom field
     */
    name?: string;
    /**
     * - Flag for listing enabled or not
     */
    list_enabled?: boolean;
    /**
     * - Category of custom field
     */
    category?: string;
    /**
     * - Type of custom field
     */
    type?: string;
    /**
     * - List of
     * validations available for the field
     */
    supported_validations?: SupportedValidationsSchema[];
};
/** @returns {File} */
declare function File(): File;
type File = {
    /**
     * - Name data type of custom field
     */
    name?: string;
    /**
     * - Category of custom field
     */
    category?: string;
    /**
     * - Flag for listing enabled or not
     */
    list_enabled?: boolean;
    /**
     * - Type of custom field
     */
    type?: string;
    supported_validations?: SupportedValidationsSchema[];
};
/** @returns {Url} */
declare function Url(): Url;
type Url = {
    /**
     * - Name data type of custom field
     */
    name?: string;
    /**
     * - Flag for listing enabled or not
     */
    list_enabled?: boolean;
    /**
     * - Type of custom field
     */
    type?: string;
    /**
     * - List of
     * validations available for the field
     */
    supported_validations?: SupportedValidationsSchema[];
};
/** @returns {Metaobject} */
declare function Metaobject(): Metaobject;
type Metaobject = {
    /**
     * - Name of Custom Object
     */
    name?: string;
    /**
     * - Whether the field is allowed to have
     * multiple list items
     */
    list_enabled?: boolean;
    /**
     * - Category of Custom Object Definition that
     * Custom Object belongs to
     */
    category?: string;
    /**
     * - Type of Custom Object Definition
     */
    type?: string;
    supported_validations?: SupportedValidationsSchema[];
};
/** @returns {Product} */
declare function Product(): Product;
type Product = {
    /**
     * - Name of Product
     */
    name?: string;
    /**
     * - Whether the field is allowed to have
     * multiple list items
     */
    list_enabled?: boolean;
    /**
     * - Category of Custom Object Definition that
     * Product is associated with
     */
    category?: string;
    /**
     * - Custom Object Definition that Product is associated with
     */
    type?: string;
    supported_validations?: SupportedValidationsSchema[];
};
/** @returns {CustomObjectEntry} */
declare function CustomObjectEntry(): CustomObjectEntry;
type CustomObjectEntry = {
    /**
     * - Unique system generated id
     */
    id?: string;
    /**
     * - Name of Custom Object definition
     */
    name?: string;
    /**
     * - Type of Custom Object Definition
     */
    type?: string;
    /**
     * - Updation time of a Custom Object
     */
    updated_at?: string;
    /**
     * - Number of entries against the Custom
     * Object definition
     */
    entries_count?: number;
    /**
     * - Number of fields against a Custom Object definition
     */
    fields_count?: number;
};
/** @returns {CustomObjectDefinitionsSchema} */
declare function CustomObjectDefinitionsSchema(): CustomObjectDefinitionsSchema;
type CustomObjectDefinitionsSchema = {
    items?: CustomObjectEntry[];
    page?: Page;
};
/** @returns {CustomObjectEntryFieldSchema} */
declare function CustomObjectEntryFieldSchema(): CustomObjectEntryFieldSchema;
type CustomObjectEntryFieldSchema = {
    /**
     * - This is namespace for a custom field definition
     */
    namespace?: string;
    /**
     * - This is slug for a custom field definition
     */
    slug?: string;
};
/** @returns {CustomObjectEntryFieldSchemaWithoutID} */
declare function CustomObjectEntryFieldSchemaWithoutID(): CustomObjectEntryFieldSchemaWithoutID;
type CustomObjectEntryFieldSchemaWithoutID = {
    /**
     * - Custom fields belonging to a custom object
     */
    slug?: string;
    /**
     * - Value of custom field inside a custom object
     */
    value?: any;
};
/** @returns {CustomObjectRequestSchema} */
declare function CustomObjectRequestSchema(): CustomObjectRequestSchema;
type CustomObjectRequestSchema = {
    /**
     * - Flag to denote status of Custom Object
     */
    status?: string;
    /**
     * - This is slug for a custom field definition
     */
    slug?: string;
    /**
     * - List of custom fields
     */
    fields?: CustomObjectEntryFieldSchema[];
};
/** @returns {CustomObjectRequestSchemaWithoutId} */
declare function CustomObjectRequestSchemaWithoutId(): CustomObjectRequestSchemaWithoutId;
type CustomObjectRequestSchemaWithoutId = {
    /**
     * - Status of the custom object entry.
     */
    status?: string;
    /**
     * - List of custom fields
     */
    fields?: CustomObjectEntryFieldSchemaWithoutID[];
};
/** @returns {CustomObjectBulkSchema} */
declare function CustomObjectBulkSchema(): CustomObjectBulkSchema;
type CustomObjectBulkSchema = {
    /**
     * - Full URL for the bulk operations data
     */
    url?: string;
    /**
     * - Total records in the upload.
     */
    total_records?: number;
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
 * Enum: GenerationEntityType Used By: Content
 *
 * @returns {GenerationEntityType}
 */
declare function GenerationEntityType(): GenerationEntityType;
type GenerationEntityType = "title" | "description";
/**
 * Enum: PageType Used By: Content
 *
 * @returns {PageType}
 */
declare function PageType(): PageType;
type PageType = "about-us" | "addresses" | "blog" | "brands" | "cards" | "cart" | "categories" | "brand" | "category" | "collection" | "collections" | "custom" | "contact-us" | "external" | "faq" | "freshchat" | "home" | "notification-settings" | "orders" | "page" | "policy" | "product" | "product-request" | "products" | "profile" | "profile-order-shipment" | "profile-basic" | "profile-company" | "profile-emails" | "profile-phones" | "rate-us" | "refer-earn" | "settings" | "shared-cart" | "tnc" | "track-order" | "wishlist" | "sections" | "form" | "cart-delivery" | "cart-payment" | "cart-review" | "login" | "register" | "shipping-policy" | "return-policy" | "order-status" | "locate-us";
