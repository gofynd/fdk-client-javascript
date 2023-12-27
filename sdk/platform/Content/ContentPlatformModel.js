const Joi = require("joi");

/**
 * @typedef Action
 * @property {ActionPage} [page]
 * @property {ActionPage} [popup]
 * @property {string} [type]
 */

/**
 * @typedef ActionPage
 * @property {Object} [params]
 * @property {Object} [query]
 * @property {PageType} type
 * @property {string} [url]
 */

/**
 * @typedef AdminAnnouncementSchema
 * @property {string} [_id]
 * @property {ScheduleSchema} [_schedule]
 * @property {string} [announcement]
 * @property {string} [app]
 * @property {AnnouncementAuthorSchema} [author]
 * @property {string} [created_at]
 * @property {EditorMeta} [editor_meta]
 * @property {string} [modified_at]
 * @property {AnnouncementPageSchema[]} [pages]
 * @property {string[]} [platforms]
 * @property {string} [title]
 */

/**
 * @typedef AnnouncementAuthorSchema
 * @property {string} [created_by]
 * @property {string} [modified_by]
 */

/**
 * @typedef AnnouncementPageSchema
 * @property {string} [page_slug]
 * @property {string} [type]
 */

/**
 * @typedef ApplicationLegal
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {ApplicationLegalFAQ[]} [faq]
 * @property {string} [policy]
 * @property {string} [returns]
 * @property {string} [shipping]
 * @property {string} [tnc]
 * @property {string} [updated_at]
 */

/**
 * @typedef ApplicationLegalFAQ
 * @property {string} [answer]
 * @property {string} [question]
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
 * @typedef BlogGetResponse
 * @property {BlogSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef BlogRequest
 * @property {Object} [_custom_json]
 * @property {CronSchedule} [_schedule]
 * @property {string} [application]
 * @property {Author} [author]
 * @property {ResourceContent[]} [content]
 * @property {Asset} [feature_image]
 * @property {boolean} [published]
 * @property {string} [reading_time]
 * @property {SEO} [seo]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {string} [title]
 */

/**
 * @typedef BlogSchema
 * @property {Object} [_custom_json]
 * @property {string} [_id]
 * @property {CronSchedule} [_schedule]
 * @property {string} [application]
 * @property {boolean} [archived]
 * @property {Author} [author]
 * @property {ResourceContent[]} [content]
 * @property {DateMeta} [date_meta]
 * @property {Asset} [feature_image]
 * @property {boolean} [published]
 * @property {string} [reading_time]
 * @property {SEO} [seo]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {string} [title]
 */

/**
 * @typedef BooleanType
 * @property {string} [category]
 * @property {boolean} [list_enabled]
 * @property {string} [name]
 * @property {SupportedValidationsSchema[]} [supported_validations]
 * @property {string} [type]
 */

/**
 * @typedef CategoryRequestSchema
 * @property {string} [slug]
 * @property {string} [title]
 */

/**
 * @typedef CategorySchema
 * @property {Object} [_custom_json]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string[]} [children]
 * @property {string} [description]
 * @property {string} [icon_url]
 * @property {number} [index]
 * @property {string} [slug]
 * @property {string} [title]
 */

/**
 * @typedef ChildrenSchema
 * @property {string} [_id]
 * @property {string} [answer]
 * @property {string} [application]
 * @property {string} [question]
 * @property {string} [slug]
 */

/**
 * @typedef CommonError
 * @property {string} [message]
 */

/**
 * @typedef ConfigurationSchema
 * @property {number} [duration]
 * @property {number} [sleep_time]
 * @property {string} [slide_direction]
 * @property {boolean} [start_on_launch]
 */

/**
 * @typedef ContactSchema
 * @property {EmailSchema} [email]
 * @property {PhoneSchema} [phone]
 */

/**
 * @typedef ContentAPIError
 * @property {string} [code]
 * @property {string} [exception]
 * @property {string} [info]
 * @property {string} [message]
 * @property {Object} [meta]
 * @property {string} [request_id]
 * @property {string} [stack_trace]
 * @property {number} [status]
 */

/**
 * @typedef CreateAnnouncementSchema
 * @property {AdminAnnouncementSchema} [data]
 * @property {string} [message]
 */

/**
 * @typedef CreatedBySchema
 * @property {string} [id]
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
 * @typedef CreateFaqResponseSchema
 * @property {FaqSchema} [faq]
 */

/**
 * @typedef CreateFaqSchema
 * @property {FAQ} [faq]
 */

/**
 * @typedef CreateTagRequestSchema
 * @property {CreateTagSchema[]} [tags]
 */

/**
 * @typedef CreateTagSchema
 * @property {string} [_id]
 * @property {Object} [attributes]
 * @property {string} [content]
 * @property {string} [name]
 * @property {Object[]} [pages]
 * @property {string} [position]
 * @property {string} [sub_type]
 * @property {string} [type]
 * @property {string} [url]
 */

/**
 * @typedef CronSchedule
 * @property {string} [cron]
 * @property {number} [duration]
 * @property {string} [end]
 * @property {string} [start]
 */

/**
 * @typedef CustomDataDeleteSchema
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef CustomField
 * @property {string} [definition_id]
 * @property {Object[]} [value]
 */

/**
 * @typedef CustomFieldDefinitionDetailResSchema
 * @property {string} [_id]
 * @property {string} [application_id]
 * @property {string} [company_id]
 * @property {string} [created_at]
 * @property {string} [created_by]
 * @property {string} [creator]
 * @property {string} [description]
 * @property {boolean} [is_deleted]
 * @property {string} [key]
 * @property {boolean} [multi_value]
 * @property {string} [name]
 * @property {string} [namespace]
 * @property {boolean} [required]
 * @property {string} [resource]
 * @property {string} [type]
 * @property {string} [updated_at]
 * @property {string} [updated_by]
 * @property {Object[]} [validations]
 */

/**
 * @typedef CustomFieldDefinitionRequestSchema
 * @property {string} [description]
 * @property {string} [key]
 * @property {boolean} [multi_value]
 * @property {string} [name]
 * @property {string} [namespace]
 * @property {string} [resource]
 * @property {string} [type]
 * @property {FieldValidations[]} [validations]
 */

/**
 * @typedef CustomFieldDefinitionsSchema
 * @property {FieldDefinitionSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef CustomFieldRequestSchema
 * @property {CustomField[]} [fields]
 */

/**
 * @typedef CustomFieldSchema
 * @property {string} [_id]
 * @property {string} [company_id]
 * @property {string} [created_at]
 * @property {string} [created_by]
 * @property {string} [creator]
 * @property {string} [definition_id]
 * @property {boolean} [has_invalid_values]
 * @property {Object[]} [invalid_value_errors]
 * @property {boolean} [is_deleted]
 * @property {string} [key]
 * @property {boolean} [multi_value]
 * @property {string} [namespace]
 * @property {string} [resource]
 * @property {string} [resource_id]
 * @property {string} [type]
 * @property {string} [updated_at]
 * @property {CustomFieldValue[]} [value]
 */

/**
 * @typedef CustomFieldsResponseByResourceIdSchema
 * @property {CustomFieldSchema[]} [items]
 */

/**
 * @typedef CustomFieldsResponseSchema
 * @property {CustomFieldSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef CustomFieldTypeSchema
 * @property {BooleanType} [boolean_type]
 * @property {Date} [date]
 * @property {Datetime} [datetime]
 * @property {Dropdown} [dropdown]
 * @property {File} [file]
 * @property {FloatType} [float_type]
 * @property {Integer} [integer]
 * @property {Json} [json]
 * @property {Metaobject} [metaobject]
 * @property {Product} [product]
 * @property {StringMultiLine} [string_multi_line]
 * @property {StringSingleLine} [string_single_line]
 * @property {Url} [url]
 */

/**
 * @typedef CustomFieldValue
 * @property {Object} [value]
 */

/**
 * @typedef CustomMetaTag
 * @property {string} [_id]
 * @property {string} [content]
 * @property {string} [name]
 */

/**
 * @typedef CustomObjectBulkEntry
 * @property {CustomObjectJobSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef CustomObjectBulkEntryInitiateDownload
 * @property {string} [message]
 * @property {string} [task_id]
 */

/**
 * @typedef CustomObjectBulkSchema
 * @property {number} [total_records]
 * @property {string} [url]
 */

/**
 * @typedef CustomObjectByIdSchema
 * @property {string} [_id]
 * @property {CustomObjectListItemDefinationSchema} [definition]
 * @property {string} [display_name]
 * @property {CustomObjectFieldSchema[]} [fields]
 * @property {Object[]} [references]
 * @property {string} [status]
 */

/**
 * @typedef CustomObjectCustomFieldDefinitionResSchema
 * @property {string} [_id]
 * @property {string} [company_id]
 * @property {string} [created_at]
 * @property {string} [created_by]
 * @property {string} [creator]
 * @property {string} [description]
 * @property {boolean} [is_deleted]
 * @property {string} [key]
 * @property {string} [metaobject_definition_id]
 * @property {boolean} [multi_value]
 * @property {string} [name]
 * @property {string} [namespace]
 * @property {boolean} [required]
 * @property {string} [resource]
 * @property {string} [type]
 * @property {string} [updated_at]
 * @property {FieldValidations[]} [validations]
 */

/**
 * @typedef CustomObjectCustomFieldDefinitions
 * @property {string} [action]
 * @property {string} [description]
 * @property {string} [id]
 * @property {string} [key]
 * @property {boolean} [multi_value]
 * @property {string} [name]
 * @property {boolean} [required]
 * @property {string} [type]
 * @property {FieldValidations[]} [validations]
 */

/**
 * @typedef CustomObjectDefinitionDeleteResponseSchema
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef CustomObjectDefinitionRequestSchema
 * @property {string} [description]
 * @property {string} [display_name_key]
 * @property {CustomObjectCustomFieldDefinitions[]} [field_definitions]
 * @property {string} [name]
 * @property {string} [type]
 */

/**
 * @typedef CustomObjectDefinitionSchema
 * @property {string} [_id]
 * @property {string} [created_by]
 * @property {string} [creator]
 * @property {string} [description]
 * @property {string} [display_name_key]
 * @property {CustomObjectCustomFieldDefinitionResSchema[]} [field_definitions]
 * @property {string} [name]
 * @property {string} [type]
 * @property {string} [updated_by]
 */

/**
 * @typedef CustomObjectDefinitionsSchema
 * @property {CustomObjectEntry[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef CustomObjectDefinitionUpdateRequestSchema
 * @property {string} [description]
 * @property {string} [display_name_key]
 * @property {CustomObjectCustomFieldDefinitions[]} [field_definitions]
 * @property {string} [name]
 * @property {string} [type]
 */

/**
 * @typedef CustomObjectEntry
 * @property {string} [_id]
 * @property {number} [entries_count]
 * @property {number} [fields_count]
 * @property {string} [name]
 * @property {string} [type]
 * @property {string} [updated_at]
 */

/**
 * @typedef CustomObjectEntryBulkUploadResponse
 * @property {number} [total_records]
 * @property {string} [url]
 */

/**
 * @typedef CustomObjectEntryFieldSchema
 * @property {string} [definition_id]
 * @property {Object[]} [value]
 */

/**
 * @typedef CustomObjectFieldSchema
 * @property {string} [_id]
 * @property {string} [definition_id]
 * @property {string} [key]
 * @property {string} [type]
 * @property {Object[]} [value]
 */

/**
 * @typedef CustomObjectJobSchema
 * @property {string} [_id]
 * @property {string} [action_type]
 * @property {string} [company_id]
 * @property {string} [created_at]
 * @property {string} [created_by]
 * @property {string} [creator]
 * @property {string} [entity]
 * @property {number} [error_count]
 * @property {string[]} [error_jobs]
 * @property {string} [error_url]
 * @property {string[]} [errors_occured]
 * @property {number} [finished_count]
 * @property {string[]} [finished_jobs]
 * @property {string[]} [jobs]
 * @property {CustomObjectMetaSchema} [meta]
 * @property {string} [status]
 * @property {number} [success_count]
 * @property {number} [total_jobs]
 * @property {string} [updated_at]
 * @property {string} [url]
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
 * @property {CustomObjectListItemDefinationSchema} [definition]
 * @property {string} [definition_id]
 * @property {string} [display_name]
 * @property {number} [references]
 * @property {string} [status]
 * @property {string} [updated_at]
 */

/**
 * @typedef CustomObjectMetaSchema
 * @property {string} [mo_defintion_type]
 * @property {number} [mo_error_count]
 * @property {number} [mo_success_count]
 * @property {number} [mo_total_count]
 */

/**
 * @typedef CustomObjectRequestSchema
 * @property {string} [definition_id]
 * @property {CustomObjectEntryFieldSchema[]} [fields]
 * @property {string} [status]
 */

/**
 * @typedef CustomObjectSchema
 * @property {string} [_id]
 * @property {string} [application_id]
 * @property {string} [company_id]
 * @property {string} [created_by]
 * @property {string} [creator]
 * @property {string} [definition_id]
 * @property {string} [display_name]
 * @property {CustomFieldSchema[]} [fields]
 * @property {string} [status]
 * @property {string} [type]
 * @property {string} [updated_by]
 */

/**
 * @typedef CustomObjectsSchema
 * @property {CustomObjectListItemSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef DataLoaderResetResponseSchema
 * @property {boolean} [reset]
 */

/**
 * @typedef DataLoaderResponseSchema
 * @property {DataLoaderSourceSchema} [__source]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [company]
 * @property {string} [content]
 * @property {string} [name]
 * @property {string} [operation_id]
 * @property {string} [service]
 * @property {string} [type]
 * @property {string} [url]
 */

/**
 * @typedef DataLoaderSchema
 * @property {DataLoaderSourceSchema} [__source]
 * @property {string} [_id]
 * @property {string} [content]
 * @property {string} [name]
 * @property {string} [operation_id]
 * @property {string} [service]
 * @property {string} [type]
 * @property {string} [url]
 */

/**
 * @typedef DataLoaderSourceSchema
 * @property {string} [id]
 * @property {string} [type]
 */

/**
 * @typedef DataLoadersSchema
 * @property {DataLoaderSchema[]} [items]
 */

/**
 * @typedef Date
 * @property {string} [category]
 * @property {boolean} [list_enabled]
 * @property {string} [name]
 * @property {SupportedValidationsSchema[]} [supported_validations]
 * @property {string} [type]
 */

/**
 * @typedef DateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */

/**
 * @typedef Datetime
 * @property {string} [category]
 * @property {boolean} [list_enabled]
 * @property {string} [name]
 * @property {SupportedValidationsSchema[]} [supported_validations]
 * @property {string} [type]
 */

/**
 * @typedef DefaultNavigationResponse
 * @property {NavigationSchema[]} [items]
 */

/**
 * @typedef DefaultSchemaComponent
 * @property {DefaultSEOSchemaMarkupTemplate[]} [items]
 */

/**
 * @typedef DefaultSEOSchemaMarkupTemplate
 * @property {string} [page_type]
 * @property {string} [schema]
 */

/**
 * @typedef Detail
 * @property {string} [description]
 * @property {string} [image_url]
 * @property {string} [title]
 */

/**
 * @typedef Dropdown
 * @property {string} [category]
 * @property {boolean} [list_enabled]
 * @property {string} [name]
 * @property {SupportedValidationsSchema[]} [supported_validations]
 * @property {string} [type]
 */

/**
 * @typedef EditorMeta
 * @property {string} [background_color]
 * @property {string} [content]
 * @property {string} [content_type]
 * @property {string} [foreground_color]
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
 * @typedef FAQ
 * @property {string} [answer]
 * @property {string} [question]
 * @property {string} [slug]
 */

/**
 * @typedef FAQCategorySchema
 * @property {Object} [_custom_json]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {ChildrenSchema[]} [children]
 * @property {string} [description]
 * @property {string} [icon_url]
 * @property {number} [index]
 * @property {string} [slug]
 * @property {string} [title]
 */

/**
 * @typedef FaqSchema
 * @property {string} [_id]
 * @property {string} [answer]
 * @property {string} [application]
 * @property {string} [question]
 * @property {string} [slug]
 * @property {string[]} [tags]
 */

/**
 * @typedef FieldDefinitionSchema
 * @property {string} [_id]
 * @property {string} [company_id]
 * @property {string} [created_at]
 * @property {string} [created_by]
 * @property {string} [creator]
 * @property {string} [description]
 * @property {number} [invalid_fields_count]
 * @property {boolean} [is_deleted]
 * @property {string} [key]
 * @property {boolean} [multi_value]
 * @property {string} [name]
 * @property {string} [namespace]
 * @property {boolean} [required]
 * @property {string} [resource]
 * @property {string} [type]
 * @property {string} [type_name]
 * @property {string} [updated_at]
 * @property {string} [updated_by]
 * @property {FieldValidations[]} [validations]
 */

/**
 * @typedef FieldValidations
 * @property {string} [name]
 * @property {string} [type]
 * @property {Object} [value]
 */

/**
 * @typedef File
 * @property {string} [category]
 * @property {boolean} [list_enabled]
 * @property {string} [name]
 * @property {SupportedValidationsSchema[]} [supported_validations]
 * @property {string} [type]
 */

/**
 * @typedef FloatType
 * @property {string} [category]
 * @property {boolean} [list_enabled]
 * @property {string} [name]
 * @property {SupportedValidationsSchema[]} [supported_validations]
 * @property {string} [type]
 */

/**
 * @typedef GeneratedSEOContent
 * @property {string} [description]
 * @property {string} [title]
 */

/**
 * @typedef GenerateSEOContent
 * @property {string} [existing_text]
 * @property {string[]} [keywords]
 * @property {string} [text]
 * @property {string} [type]
 */

/**
 * @typedef GetAnnouncementListSchema
 * @property {AdminAnnouncementSchema[]} [items]
 * @property {Page} [page]
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
 * @typedef GetFaqSchema
 * @property {FaqSchema[]} [faqs]
 */

/**
 * @typedef HandpickedTagSchema
 * @property {Object} [attributes]
 * @property {string} [content]
 * @property {string} [name]
 * @property {string} [position]
 * @property {string} [sub_type]
 * @property {string} [type]
 * @property {string} [url]
 */

/**
 * @typedef Integer
 * @property {string} [category]
 * @property {boolean} [list_enabled]
 * @property {string} [name]
 * @property {SupportedValidationsSchema[]} [supported_validations]
 * @property {string} [type]
 */

/**
 * @typedef Json
 * @property {string} [category]
 * @property {boolean} [list_enabled]
 * @property {string} [name]
 * @property {SupportedValidationsSchema[]} [supported_validations]
 * @property {string} [type]
 */

/**
 * @typedef LandingPageGetResponse
 * @property {LandingPageSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef LandingPageSchema
 * @property {Object} [_custom_json]
 * @property {string} [_id]
 * @property {Action} [action]
 * @property {string} [application]
 * @property {boolean} [archived]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {string[]} [platform]
 * @property {string} [slug]
 */

/**
 * @typedef Language
 * @property {string} [display]
 */

/**
 * @typedef LocaleLanguage
 * @property {Language} [ar]
 * @property {Language} [en_us]
 * @property {Language} [hi]
 */

/**
 * @typedef Metaobject
 * @property {string} [category]
 * @property {boolean} [list_enabled]
 * @property {string} [name]
 * @property {SupportedValidationsSchema[]} [supported_validations]
 * @property {string} [type]
 */

/**
 * @typedef NavigationGetResponse
 * @property {NavigationSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef NavigationReference
 * @property {LocaleLanguage} [_locale_language]
 * @property {string[]} [acl]
 * @property {Action} [action]
 * @property {boolean} [active]
 * @property {string} [display]
 * @property {string} [image]
 * @property {number} [sort_order]
 * @property {NavigationReference[]} [sub_navigation]
 * @property {string[]} [tags]
 * @property {string} [type]
 */

/**
 * @typedef NavigationRequest
 * @property {string} [name]
 * @property {NavigationReference[]} [navigation]
 * @property {Orientation} [orientation]
 * @property {string[]} [platform]
 * @property {string} [slug]
 */

/**
 * @typedef NavigationSchema
 * @property {string} [_id]
 * @property {string} [application]
 * @property {boolean} [archived]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {string} [name]
 * @property {NavigationReference[]} [navigation]
 * @property {Orientation} [orientation]
 * @property {string[]} [platform]
 * @property {string} [slug]
 * @property {number} [version]
 */

/**
 * @typedef NextSchedule
 * @property {string} [end]
 * @property {string} [start]
 */

/**
 * @typedef Orientation
 * @property {string[]} [landscape]
 * @property {string[]} [portrait]
 */

/**
 * @typedef Page
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {number} [size]
 * @property {string} type
 */

/**
 * @typedef PageGetResponse
 * @property {PageSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef PageMetaSchema
 * @property {string} [application_id]
 * @property {PageSchema[]} [custom_pages]
 * @property {NavigationSchema[]} [system_pages]
 */

/**
 * @typedef PagePublishRequest
 * @property {boolean} [publish]
 */

/**
 * @typedef PageRequest
 * @property {Object} [_custom_json]
 * @property {CronSchedule} [_schedule]
 * @property {string} [application]
 * @property {Author} [author]
 * @property {Object[]} [content]
 * @property {Asset} [feature_image]
 * @property {string} [orientation]
 * @property {boolean} [published]
 * @property {string} [reading_time]
 * @property {SEO} [seo]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {string} [title]
 */

/**
 * @typedef PageSchema
 * @property {Object} [_custom_json]
 * @property {string} [_id]
 * @property {ScheduleSchema} [_schedule]
 * @property {string} [application]
 * @property {boolean} [archived]
 * @property {string[]} [component_ids] - Components can be used to store
 *   multiple components
 * @property {Object[]} [content]
 * @property {string} [content_path]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {string} [description]
 * @property {Asset} [feature_image]
 * @property {string} [orientation]
 * @property {Object[]} [page_meta]
 * @property {string} [platform]
 * @property {boolean} [published]
 * @property {SEO} [seo]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {string} [title]
 * @property {string} [type]
 * @property {Object} [visibility]
 */

/**
 * @typedef PageSpec
 * @property {PageSpecItem[]} [specifications]
 */

/**
 * @typedef PageSpecItem
 * @property {string} [display_name]
 * @property {string} [page_type]
 * @property {PageSpecParam[]} [params]
 * @property {PageSpecParam[]} [query]
 */

/**
 * @typedef PageSpecParam
 * @property {string} [key]
 * @property {boolean} [required]
 */

/**
 * @typedef PathMappingSchema
 * @property {PathSourceSchema} [__source]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [redirect_from]
 * @property {string} [redirect_to]
 * @property {string} [updated_at]
 */

/**
 * @typedef PathSourceSchema
 * @property {string} [id]
 * @property {string} [type]
 */

/**
 * @typedef PhoneProperties
 * @property {string} [code]
 * @property {string} [key]
 * @property {string} [number]
 */

/**
 * @typedef PhoneSchema
 * @property {boolean} [active]
 * @property {PhoneProperties[]} [phone]
 */

/**
 * @typedef Product
 * @property {string} [category]
 * @property {boolean} [list_enabled]
 * @property {string} [name]
 * @property {SupportedValidationsSchema[]} [supported_validations]
 * @property {string} [type]
 */

/**
 * @typedef RemoveHandpickedSchema
 * @property {string[]} [tags]
 */

/**
 * @typedef ResourceContent
 * @property {string} [type]
 * @property {string} [value]
 */

/**
 * @typedef ResourceSchema
 * @property {number} [definitions_count] - Number of definitions
 * @property {string} [key] - Resource key
 * @property {string} [name] - Resource name
 */

/**
 * @typedef ResourcesSchema
 * @property {ResourceSchema[]} [resources]
 */

/**
 * @typedef ScheduleSchema
 * @property {string} [cron]
 * @property {number} [duration]
 * @property {string} [end]
 * @property {NextSchedule[]} [next_schedule]
 * @property {string} [start]
 */

/**
 * @typedef SEO
 * @property {SEObreadcrumb[]} [breadcrumb]
 * @property {string} [canonical_url]
 * @property {string} [description]
 * @property {SEOImage} [image]
 * @property {SEOMetaItem[]} [meta_tags]
 * @property {SEOSitemap} [sitemap]
 * @property {string} [title]
 */

/**
 * @typedef SEObreadcrumb
 * @property {Action} [action]
 * @property {string} [url]
 */

/**
 * @typedef SeoComponent
 * @property {SeoSchema} [seo]
 */

/**
 * @typedef SEOImage
 * @property {string} [url]
 */

/**
 * @typedef SEOMetaItem
 * @property {SEOMetaItems[]} [items]
 * @property {string} [title]
 */

/**
 * @typedef SEOMetaItems
 * @property {string} [key]
 * @property {string} [value]
 */

/**
 * @typedef SeoSchema
 * @property {string} [_id]
 * @property {string} [additional_sitemap]
 * @property {string} [app]
 * @property {boolean} [cannonical_enabled]
 * @property {string} [created_at]
 * @property {CustomMetaTag[]} [custom_meta_tags]
 * @property {Detail} [details]
 * @property {string} [robots_txt]
 * @property {boolean} [sitemap_enabled]
 * @property {string} [updated_at]
 */

/**
 * @typedef SeoSchemaComponent
 * @property {SEOSchemaMarkupTemplate[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef SEOSchemaMarkupTemplate
 * @property {boolean} [active]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [id]
 * @property {string} [page_type]
 * @property {string} [schema]
 * @property {string} [title]
 * @property {string} [updated_at]
 */

/**
 * @typedef SEOSchemaMarkupTemplateRequestBody
 * @property {boolean} [active]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [page_type]
 * @property {string} [schema]
 * @property {string} [title]
 * @property {string} [updated_at]
 */

/**
 * @typedef SEOSitemap
 * @property {string} [frequency]
 * @property {number} [priority]
 */

/**
 * @typedef SlideshowGetResponse
 * @property {SlideshowSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef SlideshowMedia
 * @property {Action} [action]
 * @property {boolean} [auto_decide_duration]
 * @property {string} [bg_color]
 * @property {number} [duration]
 * @property {string} [type]
 * @property {string} [url]
 */

/**
 * @typedef SlideshowRequest
 * @property {boolean} [active]
 * @property {ConfigurationSchema} [configuration]
 * @property {SlideshowMedia} [media]
 * @property {string} [platform]
 * @property {string} [slug]
 */

/**
 * @typedef SlideshowSchema
 * @property {Object} [_custom_json]
 * @property {string} [_id]
 * @property {boolean} [active]
 * @property {string} [application]
 * @property {boolean} [archived]
 * @property {ConfigurationSchema} [configuration]
 * @property {DateMeta} [date_meta]
 * @property {SlideshowMedia[]} [media]
 * @property {string} [platform]
 * @property {string} [slug]
 */

/**
 * @typedef StringMultiLine
 * @property {string} [category]
 * @property {boolean} [list_enabled]
 * @property {string} [name]
 * @property {SupportedValidationsSchema[]} [supported_validations]
 * @property {string} [type]
 */

/**
 * @typedef StringSingleLine
 * @property {string} [category]
 * @property {boolean} [list_enabled]
 * @property {string} [name]
 * @property {SupportedValidationsSchema[]} [supported_validations]
 * @property {string} [type]
 */

/**
 * @typedef Support
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [config_type]
 * @property {ContactSchema} [contact]
 * @property {boolean} [created]
 * @property {string} [created_at]
 * @property {string} [updated_at]
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
 * @property {string} [display]
 * @property {SupportedValidationsMetaSchema} [meta]
 * @property {string} [name]
 * @property {boolean} [required]
 * @property {string} [type]
 */

/**
 * @typedef TagDeleteSuccessResponse
 * @property {boolean} [success]
 */

/**
 * @typedef TagSchema
 * @property {TagSourceSchema} [__source]
 * @property {string} [_id]
 * @property {Object} [attributes]
 * @property {string} [content]
 * @property {string} [name]
 * @property {Object[]} [pages]
 * @property {string} [position]
 * @property {string} [sub_type]
 * @property {string} [type]
 * @property {string} [url]
 */

/**
 * @typedef TagSourceSchema
 * @property {string} [id]
 * @property {string} [type]
 */

/**
 * @typedef TagsSchema
 * @property {string} [_id]
 * @property {string} [application]
 * @property {TagSchema[]} [tags]
 */

/**
 * @typedef UpdateFaqCategoryRequestSchema
 * @property {CategorySchema} [category]
 */

/**
 * @typedef UpdateHandpickedSchema
 * @property {HandpickedTagSchema} [tag]
 */

/**
 * @typedef Url
 * @property {boolean} [list_enabled]
 * @property {string} [name]
 * @property {SupportedValidationsSchema[]} [supported_validations]
 * @property {string} [type]
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
  /** @returns {Action} */
  static Action() {
    return Joi.object({
      page: ContentPlatformModel.ActionPage(),
      popup: ContentPlatformModel.ActionPage(),
      type: Joi.string().allow(""),
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
      type: ContentPlatformModel.PageType().required(),
      url: Joi.string().allow(""),
    });
  }

  /** @returns {AdminAnnouncementSchema} */
  static AdminAnnouncementSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      _schedule: ContentPlatformModel.ScheduleSchema(),
      announcement: Joi.string().allow(""),
      app: Joi.string().allow(""),
      author: ContentPlatformModel.AnnouncementAuthorSchema(),
      created_at: Joi.string().allow(""),
      editor_meta: ContentPlatformModel.EditorMeta(),
      modified_at: Joi.string().allow(""),
      pages: Joi.array().items(ContentPlatformModel.AnnouncementPageSchema()),
      platforms: Joi.array().items(Joi.string().allow("")),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {AnnouncementAuthorSchema} */
  static AnnouncementAuthorSchema() {
    return Joi.object({
      created_by: Joi.string().allow(""),
      modified_by: Joi.string().allow(""),
    });
  }

  /** @returns {AnnouncementPageSchema} */
  static AnnouncementPageSchema() {
    return Joi.object({
      page_slug: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {ApplicationLegal} */
  static ApplicationLegal() {
    return Joi.object({
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      faq: Joi.array().items(ContentPlatformModel.ApplicationLegalFAQ()),
      policy: Joi.string().allow(""),
      returns: Joi.string().allow(""),
      shipping: Joi.string().allow(""),
      tnc: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {ApplicationLegalFAQ} */
  static ApplicationLegalFAQ() {
    return Joi.object({
      answer: Joi.string().allow(""),
      question: Joi.string().allow(""),
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

  /** @returns {BlogGetResponse} */
  static BlogGetResponse() {
    return Joi.object({
      items: Joi.array().items(ContentPlatformModel.BlogSchema()),
      page: ContentPlatformModel.Page(),
    });
  }

  /** @returns {BlogRequest} */
  static BlogRequest() {
    return Joi.object({
      _custom_json: Joi.any(),
      _schedule: ContentPlatformModel.CronSchedule(),
      application: Joi.string().allow(""),
      author: ContentPlatformModel.Author(),
      content: Joi.array().items(ContentPlatformModel.ResourceContent()),
      feature_image: ContentPlatformModel.Asset(),
      published: Joi.boolean(),
      reading_time: Joi.string().allow(""),
      seo: ContentPlatformModel.SEO(),
      slug: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {BlogSchema} */
  static BlogSchema() {
    return Joi.object({
      _custom_json: Joi.any(),
      _id: Joi.string().allow(""),
      _schedule: ContentPlatformModel.CronSchedule(),
      application: Joi.string().allow(""),
      archived: Joi.boolean(),
      author: ContentPlatformModel.Author(),
      content: Joi.array().items(ContentPlatformModel.ResourceContent()),
      date_meta: ContentPlatformModel.DateMeta(),
      feature_image: ContentPlatformModel.Asset(),
      published: Joi.boolean(),
      reading_time: Joi.string().allow(""),
      seo: ContentPlatformModel.SEO(),
      slug: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {BooleanType} */
  static BooleanType() {
    return Joi.object({
      category: Joi.string().allow(""),
      list_enabled: Joi.boolean(),
      name: Joi.string().allow(""),
      supported_validations: Joi.array().items(
        ContentPlatformModel.SupportedValidationsSchema()
      ),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {CategoryRequestSchema} */
  static CategoryRequestSchema() {
    return Joi.object({
      slug: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {CategorySchema} */
  static CategorySchema() {
    return Joi.object({
      _custom_json: Joi.any(),
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      children: Joi.array().items(Joi.string().allow("")),
      description: Joi.string().allow(""),
      icon_url: Joi.string().allow(""),
      index: Joi.number(),
      slug: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {ChildrenSchema} */
  static ChildrenSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      answer: Joi.string().allow(""),
      application: Joi.string().allow(""),
      question: Joi.string().allow(""),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {CommonError} */
  static CommonError() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {ConfigurationSchema} */
  static ConfigurationSchema() {
    return Joi.object({
      duration: Joi.number(),
      sleep_time: Joi.number(),
      slide_direction: Joi.string().allow(""),
      start_on_launch: Joi.boolean(),
    });
  }

  /** @returns {ContactSchema} */
  static ContactSchema() {
    return Joi.object({
      email: ContentPlatformModel.EmailSchema(),
      phone: ContentPlatformModel.PhoneSchema(),
    });
  }

  /** @returns {ContentAPIError} */
  static ContentAPIError() {
    return Joi.object({
      code: Joi.string().allow(""),
      exception: Joi.string().allow(""),
      info: Joi.string().allow(""),
      message: Joi.string().allow(""),
      meta: Joi.any(),
      request_id: Joi.string().allow(""),
      stack_trace: Joi.string().allow(""),
      status: Joi.number(),
    });
  }

  /** @returns {CreateAnnouncementSchema} */
  static CreateAnnouncementSchema() {
    return Joi.object({
      data: ContentPlatformModel.AdminAnnouncementSchema(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {CreatedBySchema} */
  static CreatedBySchema() {
    return Joi.object({
      id: Joi.string().allow(""),
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

  /** @returns {CreateTagRequestSchema} */
  static CreateTagRequestSchema() {
    return Joi.object({
      tags: Joi.array().items(ContentPlatformModel.CreateTagSchema()),
    });
  }

  /** @returns {CreateTagSchema} */
  static CreateTagSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      attributes: Joi.any(),
      content: Joi.string().allow(""),
      name: Joi.string().allow(""),
      pages: Joi.array().items(Joi.any()),
      position: Joi.string().allow(""),
      sub_type: Joi.string().allow(""),
      type: Joi.string().allow(""),
      url: Joi.string().allow(""),
    });
  }

  /** @returns {CronSchedule} */
  static CronSchedule() {
    return Joi.object({
      cron: Joi.string().allow(""),
      duration: Joi.number(),
      end: Joi.string().allow(""),
      start: Joi.string().allow(""),
    });
  }

  /** @returns {CustomDataDeleteSchema} */
  static CustomDataDeleteSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }

  /** @returns {CustomField} */
  static CustomField() {
    return Joi.object({
      definition_id: Joi.string().allow(""),
      value: Joi.array().items(Joi.any()),
    });
  }

  /** @returns {CustomFieldDefinitionDetailResSchema} */
  static CustomFieldDefinitionDetailResSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
      company_id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      created_by: Joi.string().allow(""),
      creator: Joi.string().allow(""),
      description: Joi.string().allow(""),
      is_deleted: Joi.boolean(),
      key: Joi.string().allow(""),
      multi_value: Joi.boolean(),
      name: Joi.string().allow(""),
      namespace: Joi.string().allow(""),
      required: Joi.boolean(),
      resource: Joi.string().allow(""),
      type: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      updated_by: Joi.string().allow(""),
      validations: Joi.array().items(Joi.any()),
    });
  }

  /** @returns {CustomFieldDefinitionRequestSchema} */
  static CustomFieldDefinitionRequestSchema() {
    return Joi.object({
      description: Joi.string().allow(""),
      key: Joi.string().allow(""),
      multi_value: Joi.boolean(),
      name: Joi.string().allow(""),
      namespace: Joi.string().allow(""),
      resource: Joi.string().allow(""),
      type: Joi.string().allow(""),
      validations: Joi.array().items(ContentPlatformModel.FieldValidations()),
    });
  }

  /** @returns {CustomFieldDefinitionsSchema} */
  static CustomFieldDefinitionsSchema() {
    return Joi.object({
      items: Joi.array().items(ContentPlatformModel.FieldDefinitionSchema()),
      page: ContentPlatformModel.Page(),
    });
  }

  /** @returns {CustomFieldRequestSchema} */
  static CustomFieldRequestSchema() {
    return Joi.object({
      fields: Joi.array().items(ContentPlatformModel.CustomField()),
    });
  }

  /** @returns {CustomFieldSchema} */
  static CustomFieldSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      company_id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      created_by: Joi.string().allow(""),
      creator: Joi.string().allow(""),
      definition_id: Joi.string().allow(""),
      has_invalid_values: Joi.boolean(),
      invalid_value_errors: Joi.array().items(Joi.any()),
      is_deleted: Joi.boolean(),
      key: Joi.string().allow(""),
      multi_value: Joi.boolean(),
      namespace: Joi.string().allow(""),
      resource: Joi.string().allow(""),
      resource_id: Joi.string().allow(""),
      type: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      value: Joi.array().items(ContentPlatformModel.CustomFieldValue()),
    });
  }

  /** @returns {CustomFieldsResponseByResourceIdSchema} */
  static CustomFieldsResponseByResourceIdSchema() {
    return Joi.object({
      items: Joi.array().items(ContentPlatformModel.CustomFieldSchema()),
    });
  }

  /** @returns {CustomFieldsResponseSchema} */
  static CustomFieldsResponseSchema() {
    return Joi.object({
      items: Joi.array().items(ContentPlatformModel.CustomFieldSchema()),
      page: ContentPlatformModel.Page(),
    });
  }

  /** @returns {CustomFieldTypeSchema} */
  static CustomFieldTypeSchema() {
    return Joi.object({
      boolean_type: ContentPlatformModel.BooleanType(),
      date: ContentPlatformModel.Date(),
      datetime: ContentPlatformModel.Datetime(),
      dropdown: ContentPlatformModel.Dropdown(),
      file: ContentPlatformModel.File(),
      float_type: ContentPlatformModel.FloatType(),
      integer: ContentPlatformModel.Integer(),
      json: ContentPlatformModel.Json(),
      metaobject: ContentPlatformModel.Metaobject(),
      product: ContentPlatformModel.Product(),
      string_multi_line: ContentPlatformModel.StringMultiLine(),
      string_single_line: ContentPlatformModel.StringSingleLine(),
      url: ContentPlatformModel.Url(),
    });
  }

  /** @returns {CustomFieldValue} */
  static CustomFieldValue() {
    return Joi.object({
      value: Joi.any(),
    });
  }

  /** @returns {CustomMetaTag} */
  static CustomMetaTag() {
    return Joi.object({
      _id: Joi.string().allow(""),
      content: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {CustomObjectBulkEntry} */
  static CustomObjectBulkEntry() {
    return Joi.object({
      items: Joi.array().items(ContentPlatformModel.CustomObjectJobSchema()),
      page: ContentPlatformModel.Page(),
    });
  }

  /** @returns {CustomObjectBulkEntryInitiateDownload} */
  static CustomObjectBulkEntryInitiateDownload() {
    return Joi.object({
      message: Joi.string().allow(""),
      task_id: Joi.string().allow(""),
    });
  }

  /** @returns {CustomObjectBulkSchema} */
  static CustomObjectBulkSchema() {
    return Joi.object({
      total_records: Joi.number(),
      url: Joi.string().allow(""),
    });
  }

  /** @returns {CustomObjectByIdSchema} */
  static CustomObjectByIdSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      definition: ContentPlatformModel.CustomObjectListItemDefinationSchema(),
      display_name: Joi.string().allow(""),
      fields: Joi.array().items(ContentPlatformModel.CustomObjectFieldSchema()),
      references: Joi.array().items(Joi.any()),
      status: Joi.string().allow(""),
    });
  }

  /** @returns {CustomObjectCustomFieldDefinitionResSchema} */
  static CustomObjectCustomFieldDefinitionResSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      company_id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      created_by: Joi.string().allow(""),
      creator: Joi.string().allow(""),
      description: Joi.string().allow(""),
      is_deleted: Joi.boolean(),
      key: Joi.string().allow(""),
      metaobject_definition_id: Joi.string().allow(""),
      multi_value: Joi.boolean(),
      name: Joi.string().allow(""),
      namespace: Joi.string().allow(""),
      required: Joi.boolean(),
      resource: Joi.string().allow(""),
      type: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      validations: Joi.array().items(ContentPlatformModel.FieldValidations()),
    });
  }

  /** @returns {CustomObjectCustomFieldDefinitions} */
  static CustomObjectCustomFieldDefinitions() {
    return Joi.object({
      action: Joi.string().allow(""),
      description: Joi.string().allow(""),
      id: Joi.string().allow(""),
      key: Joi.string().allow(""),
      multi_value: Joi.boolean(),
      name: Joi.string().allow(""),
      required: Joi.boolean(),
      type: Joi.string().allow(""),
      validations: Joi.array().items(ContentPlatformModel.FieldValidations()),
    });
  }

  /** @returns {CustomObjectDefinitionDeleteResponseSchema} */
  static CustomObjectDefinitionDeleteResponseSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }

  /** @returns {CustomObjectDefinitionRequestSchema} */
  static CustomObjectDefinitionRequestSchema() {
    return Joi.object({
      description: Joi.string().allow(""),
      display_name_key: Joi.string().allow(""),
      field_definitions: Joi.array().items(
        ContentPlatformModel.CustomObjectCustomFieldDefinitions()
      ),
      name: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {CustomObjectDefinitionSchema} */
  static CustomObjectDefinitionSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      created_by: Joi.string().allow(""),
      creator: Joi.string().allow(""),
      description: Joi.string().allow(""),
      display_name_key: Joi.string().allow(""),
      field_definitions: Joi.array().items(
        ContentPlatformModel.CustomObjectCustomFieldDefinitionResSchema()
      ),
      name: Joi.string().allow(""),
      type: Joi.string().allow(""),
      updated_by: Joi.string().allow(""),
    });
  }

  /** @returns {CustomObjectDefinitionsSchema} */
  static CustomObjectDefinitionsSchema() {
    return Joi.object({
      items: Joi.array().items(ContentPlatformModel.CustomObjectEntry()),
      page: ContentPlatformModel.Page(),
    });
  }

  /** @returns {CustomObjectDefinitionUpdateRequestSchema} */
  static CustomObjectDefinitionUpdateRequestSchema() {
    return Joi.object({
      description: Joi.string().allow(""),
      display_name_key: Joi.string().allow(""),
      field_definitions: Joi.array().items(
        ContentPlatformModel.CustomObjectCustomFieldDefinitions()
      ),
      name: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {CustomObjectEntry} */
  static CustomObjectEntry() {
    return Joi.object({
      _id: Joi.string().allow(""),
      entries_count: Joi.number(),
      fields_count: Joi.number(),
      name: Joi.string().allow(""),
      type: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {CustomObjectEntryBulkUploadResponse} */
  static CustomObjectEntryBulkUploadResponse() {
    return Joi.object({
      total_records: Joi.number(),
      url: Joi.string().allow(""),
    });
  }

  /** @returns {CustomObjectEntryFieldSchema} */
  static CustomObjectEntryFieldSchema() {
    return Joi.object({
      definition_id: Joi.string().allow(""),
      value: Joi.array().items(Joi.any()),
    });
  }

  /** @returns {CustomObjectFieldSchema} */
  static CustomObjectFieldSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      definition_id: Joi.string().allow(""),
      key: Joi.string().allow(""),
      type: Joi.string().allow(""),
      value: Joi.array().items(Joi.any()),
    });
  }

  /** @returns {CustomObjectJobSchema} */
  static CustomObjectJobSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      action_type: Joi.string().allow(""),
      company_id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      created_by: Joi.string().allow(""),
      creator: Joi.string().allow(""),
      entity: Joi.string().allow(""),
      error_count: Joi.number(),
      error_jobs: Joi.array().items(Joi.string().allow("")),
      error_url: Joi.string().allow(""),
      errors_occured: Joi.array().items(Joi.string().allow("")),
      finished_count: Joi.number(),
      finished_jobs: Joi.array().items(Joi.string().allow("")),
      jobs: Joi.array().items(Joi.string().allow("")),
      meta: ContentPlatformModel.CustomObjectMetaSchema(),
      status: Joi.string().allow(""),
      success_count: Joi.number(),
      total_jobs: Joi.number(),
      updated_at: Joi.string().allow(""),
      url: Joi.string().allow(""),
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
      definition: ContentPlatformModel.CustomObjectListItemDefinationSchema(),
      definition_id: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      references: Joi.number(),
      status: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {CustomObjectMetaSchema} */
  static CustomObjectMetaSchema() {
    return Joi.object({
      mo_defintion_type: Joi.string().allow(""),
      mo_error_count: Joi.number(),
      mo_success_count: Joi.number(),
      mo_total_count: Joi.number(),
    });
  }

  /** @returns {CustomObjectRequestSchema} */
  static CustomObjectRequestSchema() {
    return Joi.object({
      definition_id: Joi.string().allow(""),
      fields: Joi.array().items(
        ContentPlatformModel.CustomObjectEntryFieldSchema()
      ),
      status: Joi.string().allow(""),
    });
  }

  /** @returns {CustomObjectSchema} */
  static CustomObjectSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
      company_id: Joi.string().allow(""),
      created_by: Joi.string().allow(""),
      creator: Joi.string().allow(""),
      definition_id: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      fields: Joi.array().items(ContentPlatformModel.CustomFieldSchema()),
      status: Joi.string().allow(""),
      type: Joi.string().allow(""),
      updated_by: Joi.string().allow(""),
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

  /** @returns {DataLoaderResetResponseSchema} */
  static DataLoaderResetResponseSchema() {
    return Joi.object({
      reset: Joi.boolean(),
    });
  }

  /** @returns {DataLoaderResponseSchema} */
  static DataLoaderResponseSchema() {
    return Joi.object({
      __source: ContentPlatformModel.DataLoaderSourceSchema(),
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      company: Joi.string().allow(""),
      content: Joi.string().allow(""),
      name: Joi.string().allow(""),
      operation_id: Joi.string().allow(""),
      service: Joi.string().allow(""),
      type: Joi.string().allow(""),
      url: Joi.string().allow(""),
    });
  }

  /** @returns {DataLoaderSchema} */
  static DataLoaderSchema() {
    return Joi.object({
      __source: ContentPlatformModel.DataLoaderSourceSchema(),
      _id: Joi.string().allow(""),
      content: Joi.string().allow(""),
      name: Joi.string().allow(""),
      operation_id: Joi.string().allow(""),
      service: Joi.string().allow(""),
      type: Joi.string().allow(""),
      url: Joi.string().allow(""),
    });
  }

  /** @returns {DataLoaderSourceSchema} */
  static DataLoaderSourceSchema() {
    return Joi.object({
      id: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {DataLoadersSchema} */
  static DataLoadersSchema() {
    return Joi.object({
      items: Joi.array().items(ContentPlatformModel.DataLoaderSchema()),
    });
  }

  /** @returns {Date} */
  static Date() {
    return Joi.object({
      category: Joi.string().allow(""),
      list_enabled: Joi.boolean(),
      name: Joi.string().allow(""),
      supported_validations: Joi.array().items(
        ContentPlatformModel.SupportedValidationsSchema()
      ),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {DateMeta} */
  static DateMeta() {
    return Joi.object({
      created_on: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
    });
  }

  /** @returns {Datetime} */
  static Datetime() {
    return Joi.object({
      category: Joi.string().allow(""),
      list_enabled: Joi.boolean(),
      name: Joi.string().allow(""),
      supported_validations: Joi.array().items(
        ContentPlatformModel.SupportedValidationsSchema()
      ),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {DefaultNavigationResponse} */
  static DefaultNavigationResponse() {
    return Joi.object({
      items: Joi.array().items(ContentPlatformModel.NavigationSchema()),
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
    });
  }

  /** @returns {Detail} */
  static Detail() {
    return Joi.object({
      description: Joi.string().allow(""),
      image_url: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {Dropdown} */
  static Dropdown() {
    return Joi.object({
      category: Joi.string().allow(""),
      list_enabled: Joi.boolean(),
      name: Joi.string().allow(""),
      supported_validations: Joi.array().items(
        ContentPlatformModel.SupportedValidationsSchema()
      ),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {EditorMeta} */
  static EditorMeta() {
    return Joi.object({
      background_color: Joi.string().allow(""),
      content: Joi.string().allow(""),
      content_type: Joi.string().allow(""),
      foreground_color: Joi.string().allow(""),
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

  /** @returns {FAQ} */
  static FAQ() {
    return Joi.object({
      answer: Joi.string().allow(""),
      question: Joi.string().allow(""),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {FAQCategorySchema} */
  static FAQCategorySchema() {
    return Joi.object({
      _custom_json: Joi.any(),
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      children: Joi.array().items(ContentPlatformModel.ChildrenSchema()),
      description: Joi.string().allow(""),
      icon_url: Joi.string().allow(""),
      index: Joi.number(),
      slug: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {FaqSchema} */
  static FaqSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      answer: Joi.string().allow(""),
      application: Joi.string().allow(""),
      question: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {FieldDefinitionSchema} */
  static FieldDefinitionSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      company_id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      created_by: Joi.string().allow(""),
      creator: Joi.string().allow(""),
      description: Joi.string().allow(""),
      invalid_fields_count: Joi.number(),
      is_deleted: Joi.boolean(),
      key: Joi.string().allow(""),
      multi_value: Joi.boolean(),
      name: Joi.string().allow(""),
      namespace: Joi.string().allow(""),
      required: Joi.boolean(),
      resource: Joi.string().allow(""),
      type: Joi.string().allow(""),
      type_name: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      updated_by: Joi.string().allow(""),
      validations: Joi.array().items(ContentPlatformModel.FieldValidations()),
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

  /** @returns {File} */
  static File() {
    return Joi.object({
      category: Joi.string().allow(""),
      list_enabled: Joi.boolean(),
      name: Joi.string().allow(""),
      supported_validations: Joi.array().items(
        ContentPlatformModel.SupportedValidationsSchema()
      ),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {FloatType} */
  static FloatType() {
    return Joi.object({
      category: Joi.string().allow(""),
      list_enabled: Joi.boolean(),
      name: Joi.string().allow(""),
      supported_validations: Joi.array().items(
        ContentPlatformModel.SupportedValidationsSchema()
      ),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {GeneratedSEOContent} */
  static GeneratedSEOContent() {
    return Joi.object({
      description: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {GenerateSEOContent} */
  static GenerateSEOContent() {
    return Joi.object({
      existing_text: Joi.string().allow(""),
      keywords: Joi.array().items(Joi.string().allow("")),
      text: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {GetAnnouncementListSchema} */
  static GetAnnouncementListSchema() {
    return Joi.object({
      items: Joi.array().items(ContentPlatformModel.AdminAnnouncementSchema()),
      page: ContentPlatformModel.Page(),
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

  /** @returns {GetFaqSchema} */
  static GetFaqSchema() {
    return Joi.object({
      faqs: Joi.array().items(ContentPlatformModel.FaqSchema()),
    });
  }

  /** @returns {HandpickedTagSchema} */
  static HandpickedTagSchema() {
    return Joi.object({
      attributes: Joi.any(),
      content: Joi.string().allow(""),
      name: Joi.string().allow(""),
      position: Joi.string().allow(""),
      sub_type: Joi.string().allow(""),
      type: Joi.string().allow(""),
      url: Joi.string().allow(""),
    });
  }

  /** @returns {Integer} */
  static Integer() {
    return Joi.object({
      category: Joi.string().allow(""),
      list_enabled: Joi.boolean(),
      name: Joi.string().allow(""),
      supported_validations: Joi.array().items(
        ContentPlatformModel.SupportedValidationsSchema()
      ),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {Json} */
  static Json() {
    return Joi.object({
      category: Joi.string().allow(""),
      list_enabled: Joi.boolean(),
      name: Joi.string().allow(""),
      supported_validations: Joi.array().items(
        ContentPlatformModel.SupportedValidationsSchema()
      ),
      type: Joi.string().allow(""),
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
      _custom_json: Joi.any(),
      _id: Joi.string().allow(""),
      action: ContentPlatformModel.Action(),
      application: Joi.string().allow(""),
      archived: Joi.boolean(),
      created_by: ContentPlatformModel.CreatedBySchema(),
      date_meta: ContentPlatformModel.DateMeta(),
      platform: Joi.array().items(Joi.string().allow("")),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {Language} */
  static Language() {
    return Joi.object({
      display: Joi.string().allow(""),
    });
  }

  /** @returns {LocaleLanguage} */
  static LocaleLanguage() {
    return Joi.object({
      ar: ContentPlatformModel.Language(),
      en_us: ContentPlatformModel.Language(),
      hi: ContentPlatformModel.Language(),
    });
  }

  /** @returns {Metaobject} */
  static Metaobject() {
    return Joi.object({
      category: Joi.string().allow(""),
      list_enabled: Joi.boolean(),
      name: Joi.string().allow(""),
      supported_validations: Joi.array().items(
        ContentPlatformModel.SupportedValidationsSchema()
      ),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {NavigationGetResponse} */
  static NavigationGetResponse() {
    return Joi.object({
      items: Joi.array().items(ContentPlatformModel.NavigationSchema()),
      page: ContentPlatformModel.Page(),
    });
  }

  /** @returns {NavigationReference} */
  static NavigationReference() {
    return Joi.object({
      _locale_language: ContentPlatformModel.LocaleLanguage(),
      acl: Joi.array().items(Joi.string().allow("")),
      action: ContentPlatformModel.Action(),
      active: Joi.boolean(),
      display: Joi.string().allow(""),
      image: Joi.string().allow(""),
      sort_order: Joi.number(),
      sub_navigation: Joi.array().items(Joi.link("#NavigationReference")),
      tags: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
    }).id("NavigationReference");
  }

  /** @returns {NavigationRequest} */
  static NavigationRequest() {
    return Joi.object({
      name: Joi.string().allow(""),
      navigation: Joi.array().items(ContentPlatformModel.NavigationReference()),
      orientation: ContentPlatformModel.Orientation(),
      platform: Joi.array().items(Joi.string().allow("")),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {NavigationSchema} */
  static NavigationSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      archived: Joi.boolean(),
      created_by: ContentPlatformModel.CreatedBySchema(),
      date_meta: ContentPlatformModel.DateMeta(),
      name: Joi.string().allow(""),
      navigation: Joi.array().items(ContentPlatformModel.NavigationReference()),
      orientation: ContentPlatformModel.Orientation(),
      platform: Joi.array().items(Joi.string().allow("")),
      slug: Joi.string().allow(""),
      version: Joi.number(),
    });
  }

  /** @returns {NextSchedule} */
  static NextSchedule() {
    return Joi.object({
      end: Joi.string().allow(""),
      start: Joi.string().allow(""),
    });
  }

  /** @returns {Orientation} */
  static Orientation() {
    return Joi.object({
      landscape: Joi.array().items(Joi.string().allow("")),
      portrait: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {Page} */
  static Page() {
    return Joi.object({
      current: Joi.number(),
      has_next: Joi.boolean(),
      has_previous: Joi.boolean(),
      item_total: Joi.number(),
      next_id: Joi.string().allow(""),
      size: Joi.number(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {PageGetResponse} */
  static PageGetResponse() {
    return Joi.object({
      items: Joi.array().items(ContentPlatformModel.PageSchema()),
      page: ContentPlatformModel.Page(),
    });
  }

  /** @returns {PageMetaSchema} */
  static PageMetaSchema() {
    return Joi.object({
      application_id: Joi.string().allow(""),
      custom_pages: Joi.array().items(ContentPlatformModel.PageSchema()),
      system_pages: Joi.array().items(ContentPlatformModel.NavigationSchema()),
    });
  }

  /** @returns {PagePublishRequest} */
  static PagePublishRequest() {
    return Joi.object({
      publish: Joi.boolean(),
    });
  }

  /** @returns {PageRequest} */
  static PageRequest() {
    return Joi.object({
      _custom_json: Joi.any(),
      _schedule: ContentPlatformModel.CronSchedule(),
      application: Joi.string().allow(""),
      author: ContentPlatformModel.Author(),
      content: Joi.array().items(Joi.any()),
      feature_image: ContentPlatformModel.Asset(),
      orientation: Joi.string().allow(""),
      published: Joi.boolean(),
      reading_time: Joi.string().allow(""),
      seo: ContentPlatformModel.SEO(),
      slug: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {PageSchema} */
  static PageSchema() {
    return Joi.object({
      _custom_json: Joi.any(),
      _id: Joi.string().allow(""),
      _schedule: ContentPlatformModel.ScheduleSchema(),
      application: Joi.string().allow(""),
      archived: Joi.boolean(),
      component_ids: Joi.array().items(Joi.string().allow("")),
      content: Joi.array().items(Joi.any()),
      content_path: Joi.string().allow(""),
      created_by: ContentPlatformModel.CreatedBySchema(),
      date_meta: ContentPlatformModel.DateMeta(),
      description: Joi.string().allow(""),
      feature_image: ContentPlatformModel.Asset(),
      orientation: Joi.string().allow(""),
      page_meta: Joi.array().items(Joi.any()),
      platform: Joi.string().allow(""),
      published: Joi.boolean(),
      seo: ContentPlatformModel.SEO(),
      slug: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      title: Joi.string().allow(""),
      type: Joi.string().allow(""),
      visibility: Joi.any(),
    });
  }

  /** @returns {PageSpec} */
  static PageSpec() {
    return Joi.object({
      specifications: Joi.array().items(ContentPlatformModel.PageSpecItem()),
    });
  }

  /** @returns {PageSpecItem} */
  static PageSpecItem() {
    return Joi.object({
      display_name: Joi.string().allow(""),
      page_type: Joi.string().allow(""),
      params: Joi.array().items(ContentPlatformModel.PageSpecParam()),
      query: Joi.array().items(ContentPlatformModel.PageSpecParam()),
    });
  }

  /** @returns {PageSpecParam} */
  static PageSpecParam() {
    return Joi.object({
      key: Joi.string().allow(""),
      required: Joi.boolean(),
    });
  }

  /** @returns {PathMappingSchema} */
  static PathMappingSchema() {
    return Joi.object({
      __source: ContentPlatformModel.PathSourceSchema(),
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      redirect_from: Joi.string().allow(""),
      redirect_to: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {PathSourceSchema} */
  static PathSourceSchema() {
    return Joi.object({
      id: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {PhoneProperties} */
  static PhoneProperties() {
    return Joi.object({
      code: Joi.string().allow(""),
      key: Joi.string().allow(""),
      number: Joi.string().allow(""),
    });
  }

  /** @returns {PhoneSchema} */
  static PhoneSchema() {
    return Joi.object({
      active: Joi.boolean(),
      phone: Joi.array().items(ContentPlatformModel.PhoneProperties()),
    });
  }

  /** @returns {Product} */
  static Product() {
    return Joi.object({
      category: Joi.string().allow(""),
      list_enabled: Joi.boolean(),
      name: Joi.string().allow(""),
      supported_validations: Joi.array().items(
        ContentPlatformModel.SupportedValidationsSchema()
      ),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {RemoveHandpickedSchema} */
  static RemoveHandpickedSchema() {
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

  /** @returns {ResourceSchema} */
  static ResourceSchema() {
    return Joi.object({
      definitions_count: Joi.number(),
      key: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {ResourcesSchema} */
  static ResourcesSchema() {
    return Joi.object({
      resources: Joi.array().items(ContentPlatformModel.ResourceSchema()),
    });
  }

  /** @returns {ScheduleSchema} */
  static ScheduleSchema() {
    return Joi.object({
      cron: Joi.string().allow(""),
      duration: Joi.number(),
      end: Joi.string().allow(""),
      next_schedule: Joi.array().items(ContentPlatformModel.NextSchedule()),
      start: Joi.string().allow(""),
    });
  }

  /** @returns {SEO} */
  static SEO() {
    return Joi.object({
      breadcrumb: Joi.array().items(ContentPlatformModel.SEObreadcrumb()),
      canonical_url: Joi.string().allow(""),
      description: Joi.string().allow(""),
      image: ContentPlatformModel.SEOImage(),
      meta_tags: Joi.array().items(ContentPlatformModel.SEOMetaItem()),
      sitemap: ContentPlatformModel.SEOSitemap(),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {SEObreadcrumb} */
  static SEObreadcrumb() {
    return Joi.object({
      action: ContentPlatformModel.Action(),
      url: Joi.string().allow(""),
    });
  }

  /** @returns {SeoComponent} */
  static SeoComponent() {
    return Joi.object({
      seo: ContentPlatformModel.SeoSchema(),
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
      items: Joi.array().items(ContentPlatformModel.SEOMetaItems()),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {SEOMetaItems} */
  static SEOMetaItems() {
    return Joi.object({
      key: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {SeoSchema} */
  static SeoSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      additional_sitemap: Joi.string().allow(""),
      app: Joi.string().allow(""),
      cannonical_enabled: Joi.boolean(),
      created_at: Joi.string().allow(""),
      custom_meta_tags: Joi.array().items(ContentPlatformModel.CustomMetaTag()),
      details: ContentPlatformModel.Detail(),
      robots_txt: Joi.string().allow(""),
      sitemap_enabled: Joi.boolean(),
      updated_at: Joi.string().allow(""),
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
      active: Joi.boolean(),
      application: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      description: Joi.string().allow(""),
      id: Joi.string().allow(""),
      page_type: Joi.string().allow(""),
      schema: Joi.string().allow(""),
      title: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {SEOSchemaMarkupTemplateRequestBody} */
  static SEOSchemaMarkupTemplateRequestBody() {
    return Joi.object({
      active: Joi.boolean(),
      created_at: Joi.string().allow(""),
      description: Joi.string().allow(""),
      page_type: Joi.string().allow(""),
      schema: Joi.string().allow(""),
      title: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {SEOSitemap} */
  static SEOSitemap() {
    return Joi.object({
      frequency: Joi.string().allow(""),
      priority: Joi.number(),
    });
  }

  /** @returns {SlideshowGetResponse} */
  static SlideshowGetResponse() {
    return Joi.object({
      items: Joi.array().items(ContentPlatformModel.SlideshowSchema()),
      page: ContentPlatformModel.Page(),
    });
  }

  /** @returns {SlideshowMedia} */
  static SlideshowMedia() {
    return Joi.object({
      action: ContentPlatformModel.Action(),
      auto_decide_duration: Joi.boolean(),
      bg_color: Joi.string().allow(""),
      duration: Joi.number(),
      type: Joi.string().allow(""),
      url: Joi.string().allow(""),
    });
  }

  /** @returns {SlideshowRequest} */
  static SlideshowRequest() {
    return Joi.object({
      active: Joi.boolean(),
      configuration: ContentPlatformModel.ConfigurationSchema(),
      media: ContentPlatformModel.SlideshowMedia(),
      platform: Joi.string().allow(""),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {SlideshowSchema} */
  static SlideshowSchema() {
    return Joi.object({
      _custom_json: Joi.any(),
      _id: Joi.string().allow(""),
      active: Joi.boolean(),
      application: Joi.string().allow(""),
      archived: Joi.boolean(),
      configuration: ContentPlatformModel.ConfigurationSchema(),
      date_meta: ContentPlatformModel.DateMeta(),
      media: Joi.array().items(ContentPlatformModel.SlideshowMedia()),
      platform: Joi.string().allow(""),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {StringMultiLine} */
  static StringMultiLine() {
    return Joi.object({
      category: Joi.string().allow(""),
      list_enabled: Joi.boolean(),
      name: Joi.string().allow(""),
      supported_validations: Joi.array().items(
        ContentPlatformModel.SupportedValidationsSchema()
      ),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {StringSingleLine} */
  static StringSingleLine() {
    return Joi.object({
      category: Joi.string().allow(""),
      list_enabled: Joi.boolean(),
      name: Joi.string().allow(""),
      supported_validations: Joi.array().items(
        ContentPlatformModel.SupportedValidationsSchema()
      ),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {Support} */
  static Support() {
    return Joi.object({
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      config_type: Joi.string().allow(""),
      contact: ContentPlatformModel.ContactSchema(),
      created: Joi.boolean(),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
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
      display: Joi.string().allow(""),
      meta: ContentPlatformModel.SupportedValidationsMetaSchema(),
      name: Joi.string().allow(""),
      required: Joi.boolean(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {TagDeleteSuccessResponse} */
  static TagDeleteSuccessResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  /** @returns {TagSchema} */
  static TagSchema() {
    return Joi.object({
      __source: ContentPlatformModel.TagSourceSchema(),
      _id: Joi.string().allow(""),
      attributes: Joi.any(),
      content: Joi.string().allow(""),
      name: Joi.string().allow(""),
      pages: Joi.array().items(Joi.any()),
      position: Joi.string().allow(""),
      sub_type: Joi.string().allow(""),
      type: Joi.string().allow(""),
      url: Joi.string().allow(""),
    });
  }

  /** @returns {TagSourceSchema} */
  static TagSourceSchema() {
    return Joi.object({
      id: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {TagsSchema} */
  static TagsSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      tags: Joi.array().items(ContentPlatformModel.TagSchema()),
    });
  }

  /** @returns {UpdateFaqCategoryRequestSchema} */
  static UpdateFaqCategoryRequestSchema() {
    return Joi.object({
      category: ContentPlatformModel.CategorySchema(),
    });
  }

  /** @returns {UpdateHandpickedSchema} */
  static UpdateHandpickedSchema() {
    return Joi.object({
      tag: ContentPlatformModel.HandpickedTagSchema(),
    });
  }

  /** @returns {Url} */
  static Url() {
    return Joi.object({
      list_enabled: Joi.boolean(),
      name: Joi.string().allow(""),
      supported_validations: Joi.array().items(
        ContentPlatformModel.SupportedValidationsSchema()
      ),
      type: Joi.string().allow(""),
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
