export = ContentPlatformModel;
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
declare class ContentPlatformModel {
}
declare namespace ContentPlatformModel {
    export { Action, ActionPage, AdminAnnouncementSchema, AnnouncementAuthorSchema, AnnouncementPageSchema, ApplicationLegal, ApplicationLegalFAQ, Asset, Author, BlogGetResponse, BlogRequest, BlogSchema, BooleanType, CategoryRequestSchema, CategorySchema, ChildrenSchema, CommonError, ConfigurationSchema, ContactSchema, ContentAPIError, CreateAnnouncementSchema, CreatedBySchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, CreateFaqResponseSchema, CreateFaqSchema, CreateTagRequestSchema, CreateTagSchema, CronSchedule, CustomDataDeleteSchema, CustomField, CustomFieldDefinitionDetailResSchema, CustomFieldDefinitionRequestSchema, CustomFieldDefinitionsSchema, CustomFieldRequestSchema, CustomFieldSchema, CustomFieldsResponseByResourceIdSchema, CustomFieldsResponseSchema, CustomFieldTypeSchema, CustomFieldValue, CustomMetaTag, CustomObjectBulkEntry, CustomObjectBulkEntryInitiateDownload, CustomObjectBulkSchema, CustomObjectByIdSchema, CustomObjectCustomFieldDefinitionResSchema, CustomObjectCustomFieldDefinitions, CustomObjectDefinitionDeleteResponseSchema, CustomObjectDefinitionRequestSchema, CustomObjectDefinitionSchema, CustomObjectDefinitionsSchema, CustomObjectDefinitionUpdateRequestSchema, CustomObjectEntry, CustomObjectEntryBulkUploadResponse, CustomObjectEntryFieldSchema, CustomObjectFieldSchema, CustomObjectJobSchema, CustomObjectListItemDefinationSchema, CustomObjectListItemSchema, CustomObjectMetaSchema, CustomObjectRequestSchema, CustomObjectSchema, CustomObjectsSchema, DataLoaderResetResponseSchema, DataLoaderResponseSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, Date, DateMeta, Datetime, DefaultNavigationResponse, DefaultSchemaComponent, DefaultSEOSchemaMarkupTemplate, Detail, Dropdown, EditorMeta, EmailProperties, EmailSchema, FAQ, FAQCategorySchema, FaqSchema, FieldDefinitionSchema, FieldValidations, File, FloatType, GeneratedSEOContent, GenerateSEOContent, GetAnnouncementListSchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, GetFaqSchema, HandpickedTagSchema, Integer, Json, LandingPageGetResponse, LandingPageSchema, Language, LocaleLanguage, Metaobject, NavigationGetResponse, NavigationReference, NavigationRequest, NavigationSchema, NextSchedule, Orientation, Page, PageGetResponse, PageMetaSchema, PagePublishRequest, PageRequest, PageSchema, PageSpec, PageSpecItem, PageSpecParam, PathMappingSchema, PathSourceSchema, PhoneProperties, PhoneSchema, Product, RemoveHandpickedSchema, ResourceContent, ResourceSchema, ResourcesSchema, ScheduleSchema, SEO, SEObreadcrumb, SeoComponent, SEOImage, SEOMetaItem, SEOMetaItems, SeoSchema, SeoSchemaComponent, SEOSchemaMarkupTemplate, SEOSchemaMarkupTemplateRequestBody, SEOSitemap, SlideshowGetResponse, SlideshowMedia, SlideshowRequest, SlideshowSchema, StringMultiLine, StringSingleLine, Support, SupportedValidationsMetaExampleSchema, SupportedValidationsMetaSchema, SupportedValidationsSchema, TagDeleteSuccessResponse, TagSchema, TagSourceSchema, TagsSchema, UpdateFaqCategoryRequestSchema, UpdateHandpickedSchema, Url, GenerationEntityType, PageType };
}
/** @returns {Action} */
declare function Action(): Action;
type Action = {
    page?: ActionPage;
    popup?: ActionPage;
    type?: string;
};
/** @returns {ActionPage} */
declare function ActionPage(): ActionPage;
type ActionPage = {
    params?: any;
    query?: any;
    type: PageType;
    url?: string;
};
/** @returns {AdminAnnouncementSchema} */
declare function AdminAnnouncementSchema(): AdminAnnouncementSchema;
type AdminAnnouncementSchema = {
    _id?: string;
    _schedule?: ScheduleSchema;
    announcement?: string;
    app?: string;
    author?: AnnouncementAuthorSchema;
    created_at?: string;
    editor_meta?: EditorMeta;
    modified_at?: string;
    pages?: AnnouncementPageSchema[];
    platforms?: string[];
    title?: string;
};
/** @returns {AnnouncementAuthorSchema} */
declare function AnnouncementAuthorSchema(): AnnouncementAuthorSchema;
type AnnouncementAuthorSchema = {
    created_by?: string;
    modified_by?: string;
};
/** @returns {AnnouncementPageSchema} */
declare function AnnouncementPageSchema(): AnnouncementPageSchema;
type AnnouncementPageSchema = {
    page_slug?: string;
    type?: string;
};
/** @returns {ApplicationLegal} */
declare function ApplicationLegal(): ApplicationLegal;
type ApplicationLegal = {
    _id?: string;
    application?: string;
    created_at?: string;
    faq?: ApplicationLegalFAQ[];
    policy?: string;
    returns?: string;
    shipping?: string;
    tnc?: string;
    updated_at?: string;
};
/** @returns {ApplicationLegalFAQ} */
declare function ApplicationLegalFAQ(): ApplicationLegalFAQ;
type ApplicationLegalFAQ = {
    answer?: string;
    question?: string;
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
/** @returns {BlogGetResponse} */
declare function BlogGetResponse(): BlogGetResponse;
type BlogGetResponse = {
    items?: BlogSchema[];
    page?: Page;
};
/** @returns {BlogRequest} */
declare function BlogRequest(): BlogRequest;
type BlogRequest = {
    _custom_json?: any;
    _schedule?: CronSchedule;
    application?: string;
    author?: Author;
    content?: ResourceContent[];
    feature_image?: Asset;
    published?: boolean;
    reading_time?: string;
    seo?: SEO;
    slug?: string;
    tags?: string[];
    title?: string;
};
/** @returns {BlogSchema} */
declare function BlogSchema(): BlogSchema;
type BlogSchema = {
    _custom_json?: any;
    _id?: string;
    _schedule?: CronSchedule;
    application?: string;
    archived?: boolean;
    author?: Author;
    content?: ResourceContent[];
    date_meta?: DateMeta;
    feature_image?: Asset;
    published?: boolean;
    reading_time?: string;
    seo?: SEO;
    slug?: string;
    tags?: string[];
    title?: string;
};
/** @returns {BooleanType} */
declare function BooleanType(): BooleanType;
type BooleanType = {
    category?: string;
    list_enabled?: boolean;
    name?: string;
    supported_validations?: SupportedValidationsSchema[];
    type?: string;
};
/** @returns {CategoryRequestSchema} */
declare function CategoryRequestSchema(): CategoryRequestSchema;
type CategoryRequestSchema = {
    slug?: string;
    title?: string;
};
/** @returns {CategorySchema} */
declare function CategorySchema(): CategorySchema;
type CategorySchema = {
    _custom_json?: any;
    _id?: string;
    application?: string;
    children?: string[];
    description?: string;
    icon_url?: string;
    index?: number;
    slug?: string;
    title?: string;
};
/** @returns {ChildrenSchema} */
declare function ChildrenSchema(): ChildrenSchema;
type ChildrenSchema = {
    _id?: string;
    answer?: string;
    application?: string;
    question?: string;
    slug?: string;
};
/** @returns {CommonError} */
declare function CommonError(): CommonError;
type CommonError = {
    message?: string;
};
/** @returns {ConfigurationSchema} */
declare function ConfigurationSchema(): ConfigurationSchema;
type ConfigurationSchema = {
    duration?: number;
    sleep_time?: number;
    slide_direction?: string;
    start_on_launch?: boolean;
};
/** @returns {ContactSchema} */
declare function ContactSchema(): ContactSchema;
type ContactSchema = {
    email?: EmailSchema;
    phone?: PhoneSchema;
};
/** @returns {ContentAPIError} */
declare function ContentAPIError(): ContentAPIError;
type ContentAPIError = {
    code?: string;
    exception?: string;
    info?: string;
    message?: string;
    meta?: any;
    request_id?: string;
    stack_trace?: string;
    status?: number;
};
/** @returns {CreateAnnouncementSchema} */
declare function CreateAnnouncementSchema(): CreateAnnouncementSchema;
type CreateAnnouncementSchema = {
    data?: AdminAnnouncementSchema;
    message?: string;
};
/** @returns {CreatedBySchema} */
declare function CreatedBySchema(): CreatedBySchema;
type CreatedBySchema = {
    id?: string;
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
/** @returns {CreateTagRequestSchema} */
declare function CreateTagRequestSchema(): CreateTagRequestSchema;
type CreateTagRequestSchema = {
    tags?: CreateTagSchema[];
};
/** @returns {CreateTagSchema} */
declare function CreateTagSchema(): CreateTagSchema;
type CreateTagSchema = {
    _id?: string;
    attributes?: any;
    content?: string;
    name?: string;
    pages?: any[];
    position?: string;
    sub_type?: string;
    type?: string;
    url?: string;
};
/** @returns {CronSchedule} */
declare function CronSchedule(): CronSchedule;
type CronSchedule = {
    cron?: string;
    duration?: number;
    end?: string;
    start?: string;
};
/** @returns {CustomDataDeleteSchema} */
declare function CustomDataDeleteSchema(): CustomDataDeleteSchema;
type CustomDataDeleteSchema = {
    message?: string;
    success?: boolean;
};
/** @returns {CustomField} */
declare function CustomField(): CustomField;
type CustomField = {
    definition_id?: string;
    value?: any[];
};
/** @returns {CustomFieldDefinitionDetailResSchema} */
declare function CustomFieldDefinitionDetailResSchema(): CustomFieldDefinitionDetailResSchema;
type CustomFieldDefinitionDetailResSchema = {
    _id?: string;
    application_id?: string;
    company_id?: string;
    created_at?: string;
    created_by?: string;
    creator?: string;
    description?: string;
    is_deleted?: boolean;
    key?: string;
    multi_value?: boolean;
    name?: string;
    namespace?: string;
    required?: boolean;
    resource?: string;
    type?: string;
    updated_at?: string;
    updated_by?: string;
    validations?: any[];
};
/** @returns {CustomFieldDefinitionRequestSchema} */
declare function CustomFieldDefinitionRequestSchema(): CustomFieldDefinitionRequestSchema;
type CustomFieldDefinitionRequestSchema = {
    description?: string;
    key?: string;
    multi_value?: boolean;
    name?: string;
    namespace?: string;
    resource?: string;
    type?: string;
    validations?: FieldValidations[];
};
/** @returns {CustomFieldDefinitionsSchema} */
declare function CustomFieldDefinitionsSchema(): CustomFieldDefinitionsSchema;
type CustomFieldDefinitionsSchema = {
    items?: FieldDefinitionSchema[];
    page?: Page;
};
/** @returns {CustomFieldRequestSchema} */
declare function CustomFieldRequestSchema(): CustomFieldRequestSchema;
type CustomFieldRequestSchema = {
    fields?: CustomField[];
};
/** @returns {CustomFieldSchema} */
declare function CustomFieldSchema(): CustomFieldSchema;
type CustomFieldSchema = {
    _id?: string;
    company_id?: string;
    created_at?: string;
    created_by?: string;
    creator?: string;
    definition_id?: string;
    has_invalid_values?: boolean;
    invalid_value_errors?: any[];
    is_deleted?: boolean;
    key?: string;
    multi_value?: boolean;
    namespace?: string;
    resource?: string;
    resource_id?: string;
    type?: string;
    updated_at?: string;
    value?: CustomFieldValue[];
};
/** @returns {CustomFieldsResponseByResourceIdSchema} */
declare function CustomFieldsResponseByResourceIdSchema(): CustomFieldsResponseByResourceIdSchema;
type CustomFieldsResponseByResourceIdSchema = {
    items?: CustomFieldSchema[];
};
/** @returns {CustomFieldsResponseSchema} */
declare function CustomFieldsResponseSchema(): CustomFieldsResponseSchema;
type CustomFieldsResponseSchema = {
    items?: CustomFieldSchema[];
    page?: Page;
};
/** @returns {CustomFieldTypeSchema} */
declare function CustomFieldTypeSchema(): CustomFieldTypeSchema;
type CustomFieldTypeSchema = {
    boolean_type?: BooleanType;
    date?: Date;
    datetime?: Datetime;
    dropdown?: Dropdown;
    file?: File;
    float_type?: FloatType;
    integer?: Integer;
    json?: Json;
    metaobject?: Metaobject;
    product?: Product;
    string_multi_line?: StringMultiLine;
    string_single_line?: StringSingleLine;
    url?: Url;
};
/** @returns {CustomFieldValue} */
declare function CustomFieldValue(): CustomFieldValue;
type CustomFieldValue = {
    value?: any;
};
/** @returns {CustomMetaTag} */
declare function CustomMetaTag(): CustomMetaTag;
type CustomMetaTag = {
    _id?: string;
    content?: string;
    name?: string;
};
/** @returns {CustomObjectBulkEntry} */
declare function CustomObjectBulkEntry(): CustomObjectBulkEntry;
type CustomObjectBulkEntry = {
    items?: CustomObjectJobSchema[];
    page?: Page;
};
/** @returns {CustomObjectBulkEntryInitiateDownload} */
declare function CustomObjectBulkEntryInitiateDownload(): CustomObjectBulkEntryInitiateDownload;
type CustomObjectBulkEntryInitiateDownload = {
    message?: string;
    task_id?: string;
};
/** @returns {CustomObjectBulkSchema} */
declare function CustomObjectBulkSchema(): CustomObjectBulkSchema;
type CustomObjectBulkSchema = {
    total_records?: number;
    url?: string;
};
/** @returns {CustomObjectByIdSchema} */
declare function CustomObjectByIdSchema(): CustomObjectByIdSchema;
type CustomObjectByIdSchema = {
    _id?: string;
    definition?: CustomObjectListItemDefinationSchema;
    display_name?: string;
    fields?: CustomObjectFieldSchema[];
    references?: any[];
    status?: string;
};
/** @returns {CustomObjectCustomFieldDefinitionResSchema} */
declare function CustomObjectCustomFieldDefinitionResSchema(): CustomObjectCustomFieldDefinitionResSchema;
type CustomObjectCustomFieldDefinitionResSchema = {
    _id?: string;
    company_id?: string;
    created_at?: string;
    created_by?: string;
    creator?: string;
    description?: string;
    is_deleted?: boolean;
    key?: string;
    metaobject_definition_id?: string;
    multi_value?: boolean;
    name?: string;
    namespace?: string;
    required?: boolean;
    resource?: string;
    type?: string;
    updated_at?: string;
    validations?: FieldValidations[];
};
/** @returns {CustomObjectCustomFieldDefinitions} */
declare function CustomObjectCustomFieldDefinitions(): CustomObjectCustomFieldDefinitions;
type CustomObjectCustomFieldDefinitions = {
    action?: string;
    description?: string;
    id?: string;
    key?: string;
    multi_value?: boolean;
    name?: string;
    required?: boolean;
    type?: string;
    validations?: FieldValidations[];
};
/** @returns {CustomObjectDefinitionDeleteResponseSchema} */
declare function CustomObjectDefinitionDeleteResponseSchema(): CustomObjectDefinitionDeleteResponseSchema;
type CustomObjectDefinitionDeleteResponseSchema = {
    message?: string;
    success?: boolean;
};
/** @returns {CustomObjectDefinitionRequestSchema} */
declare function CustomObjectDefinitionRequestSchema(): CustomObjectDefinitionRequestSchema;
type CustomObjectDefinitionRequestSchema = {
    description?: string;
    display_name_key?: string;
    field_definitions?: CustomObjectCustomFieldDefinitions[];
    name?: string;
    type?: string;
};
/** @returns {CustomObjectDefinitionSchema} */
declare function CustomObjectDefinitionSchema(): CustomObjectDefinitionSchema;
type CustomObjectDefinitionSchema = {
    _id?: string;
    created_by?: string;
    creator?: string;
    description?: string;
    display_name_key?: string;
    field_definitions?: CustomObjectCustomFieldDefinitionResSchema[];
    name?: string;
    type?: string;
    updated_by?: string;
};
/** @returns {CustomObjectDefinitionsSchema} */
declare function CustomObjectDefinitionsSchema(): CustomObjectDefinitionsSchema;
type CustomObjectDefinitionsSchema = {
    items?: CustomObjectEntry[];
    page?: Page;
};
/** @returns {CustomObjectDefinitionUpdateRequestSchema} */
declare function CustomObjectDefinitionUpdateRequestSchema(): CustomObjectDefinitionUpdateRequestSchema;
type CustomObjectDefinitionUpdateRequestSchema = {
    description?: string;
    display_name_key?: string;
    field_definitions?: CustomObjectCustomFieldDefinitions[];
    name?: string;
    type?: string;
};
/** @returns {CustomObjectEntry} */
declare function CustomObjectEntry(): CustomObjectEntry;
type CustomObjectEntry = {
    _id?: string;
    entries_count?: number;
    fields_count?: number;
    name?: string;
    type?: string;
    updated_at?: string;
};
/** @returns {CustomObjectEntryBulkUploadResponse} */
declare function CustomObjectEntryBulkUploadResponse(): CustomObjectEntryBulkUploadResponse;
type CustomObjectEntryBulkUploadResponse = {
    total_records?: number;
    url?: string;
};
/** @returns {CustomObjectEntryFieldSchema} */
declare function CustomObjectEntryFieldSchema(): CustomObjectEntryFieldSchema;
type CustomObjectEntryFieldSchema = {
    definition_id?: string;
    value?: any[];
};
/** @returns {CustomObjectFieldSchema} */
declare function CustomObjectFieldSchema(): CustomObjectFieldSchema;
type CustomObjectFieldSchema = {
    _id?: string;
    definition_id?: string;
    key?: string;
    type?: string;
    value?: any[];
};
/** @returns {CustomObjectJobSchema} */
declare function CustomObjectJobSchema(): CustomObjectJobSchema;
type CustomObjectJobSchema = {
    _id?: string;
    action_type?: string;
    company_id?: string;
    created_at?: string;
    created_by?: string;
    creator?: string;
    entity?: string;
    error_count?: number;
    error_jobs?: string[];
    error_url?: string;
    errors_occured?: string[];
    finished_count?: number;
    finished_jobs?: string[];
    jobs?: string[];
    meta?: CustomObjectMetaSchema;
    status?: string;
    success_count?: number;
    total_jobs?: number;
    updated_at?: string;
    url?: string;
};
/** @returns {CustomObjectListItemDefinationSchema} */
declare function CustomObjectListItemDefinationSchema(): CustomObjectListItemDefinationSchema;
type CustomObjectListItemDefinationSchema = {
    _id?: string;
    name?: string;
    type?: string;
};
/** @returns {CustomObjectListItemSchema} */
declare function CustomObjectListItemSchema(): CustomObjectListItemSchema;
type CustomObjectListItemSchema = {
    _id?: string;
    definition?: CustomObjectListItemDefinationSchema;
    definition_id?: string;
    display_name?: string;
    references?: number;
    status?: string;
    updated_at?: string;
};
/** @returns {CustomObjectMetaSchema} */
declare function CustomObjectMetaSchema(): CustomObjectMetaSchema;
type CustomObjectMetaSchema = {
    mo_defintion_type?: string;
    mo_error_count?: number;
    mo_success_count?: number;
    mo_total_count?: number;
};
/** @returns {CustomObjectRequestSchema} */
declare function CustomObjectRequestSchema(): CustomObjectRequestSchema;
type CustomObjectRequestSchema = {
    definition_id?: string;
    fields?: CustomObjectEntryFieldSchema[];
    status?: string;
};
/** @returns {CustomObjectSchema} */
declare function CustomObjectSchema(): CustomObjectSchema;
type CustomObjectSchema = {
    _id?: string;
    application_id?: string;
    company_id?: string;
    created_by?: string;
    creator?: string;
    definition_id?: string;
    display_name?: string;
    fields?: CustomFieldSchema[];
    status?: string;
    type?: string;
    updated_by?: string;
};
/** @returns {CustomObjectsSchema} */
declare function CustomObjectsSchema(): CustomObjectsSchema;
type CustomObjectsSchema = {
    items?: CustomObjectListItemSchema[];
    page?: Page;
};
/** @returns {DataLoaderResetResponseSchema} */
declare function DataLoaderResetResponseSchema(): DataLoaderResetResponseSchema;
type DataLoaderResetResponseSchema = {
    reset?: boolean;
};
/** @returns {DataLoaderResponseSchema} */
declare function DataLoaderResponseSchema(): DataLoaderResponseSchema;
type DataLoaderResponseSchema = {
    __source?: DataLoaderSourceSchema;
    _id?: string;
    application?: string;
    company?: string;
    content?: string;
    name?: string;
    operation_id?: string;
    service?: string;
    type?: string;
    url?: string;
};
/** @returns {DataLoaderSchema} */
declare function DataLoaderSchema(): DataLoaderSchema;
type DataLoaderSchema = {
    __source?: DataLoaderSourceSchema;
    _id?: string;
    content?: string;
    name?: string;
    operation_id?: string;
    service?: string;
    type?: string;
    url?: string;
};
/** @returns {DataLoaderSourceSchema} */
declare function DataLoaderSourceSchema(): DataLoaderSourceSchema;
type DataLoaderSourceSchema = {
    id?: string;
    type?: string;
};
/** @returns {DataLoadersSchema} */
declare function DataLoadersSchema(): DataLoadersSchema;
type DataLoadersSchema = {
    items?: DataLoaderSchema[];
};
/** @returns {Date} */
declare function Date(): Date;
type Date = {
    category?: string;
    list_enabled?: boolean;
    name?: string;
    supported_validations?: SupportedValidationsSchema[];
    type?: string;
};
/** @returns {DateMeta} */
declare function DateMeta(): DateMeta;
type DateMeta = {
    created_on?: string;
    modified_on?: string;
};
/** @returns {Datetime} */
declare function Datetime(): Datetime;
type Datetime = {
    category?: string;
    list_enabled?: boolean;
    name?: string;
    supported_validations?: SupportedValidationsSchema[];
    type?: string;
};
/** @returns {DefaultNavigationResponse} */
declare function DefaultNavigationResponse(): DefaultNavigationResponse;
type DefaultNavigationResponse = {
    items?: NavigationSchema[];
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
};
/** @returns {Detail} */
declare function Detail(): Detail;
type Detail = {
    description?: string;
    image_url?: string;
    title?: string;
};
/** @returns {Dropdown} */
declare function Dropdown(): Dropdown;
type Dropdown = {
    category?: string;
    list_enabled?: boolean;
    name?: string;
    supported_validations?: SupportedValidationsSchema[];
    type?: string;
};
/** @returns {EditorMeta} */
declare function EditorMeta(): EditorMeta;
type EditorMeta = {
    background_color?: string;
    content?: string;
    content_type?: string;
    foreground_color?: string;
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
/** @returns {FAQ} */
declare function FAQ(): FAQ;
type FAQ = {
    answer?: string;
    question?: string;
    slug?: string;
};
/** @returns {FAQCategorySchema} */
declare function FAQCategorySchema(): FAQCategorySchema;
type FAQCategorySchema = {
    _custom_json?: any;
    _id?: string;
    application?: string;
    children?: ChildrenSchema[];
    description?: string;
    icon_url?: string;
    index?: number;
    slug?: string;
    title?: string;
};
/** @returns {FaqSchema} */
declare function FaqSchema(): FaqSchema;
type FaqSchema = {
    _id?: string;
    answer?: string;
    application?: string;
    question?: string;
    slug?: string;
    tags?: string[];
};
/** @returns {FieldDefinitionSchema} */
declare function FieldDefinitionSchema(): FieldDefinitionSchema;
type FieldDefinitionSchema = {
    _id?: string;
    company_id?: string;
    created_at?: string;
    created_by?: string;
    creator?: string;
    description?: string;
    invalid_fields_count?: number;
    is_deleted?: boolean;
    key?: string;
    multi_value?: boolean;
    name?: string;
    namespace?: string;
    required?: boolean;
    resource?: string;
    type?: string;
    type_name?: string;
    updated_at?: string;
    updated_by?: string;
    validations?: FieldValidations[];
};
/** @returns {FieldValidations} */
declare function FieldValidations(): FieldValidations;
type FieldValidations = {
    name?: string;
    type?: string;
    value?: any;
};
/** @returns {File} */
declare function File(): File;
type File = {
    category?: string;
    list_enabled?: boolean;
    name?: string;
    supported_validations?: SupportedValidationsSchema[];
    type?: string;
};
/** @returns {FloatType} */
declare function FloatType(): FloatType;
type FloatType = {
    category?: string;
    list_enabled?: boolean;
    name?: string;
    supported_validations?: SupportedValidationsSchema[];
    type?: string;
};
/** @returns {GeneratedSEOContent} */
declare function GeneratedSEOContent(): GeneratedSEOContent;
type GeneratedSEOContent = {
    description?: string;
    title?: string;
};
/** @returns {GenerateSEOContent} */
declare function GenerateSEOContent(): GenerateSEOContent;
type GenerateSEOContent = {
    existing_text?: string;
    keywords?: string[];
    text?: string;
    type?: string;
};
/** @returns {GetAnnouncementListSchema} */
declare function GetAnnouncementListSchema(): GetAnnouncementListSchema;
type GetAnnouncementListSchema = {
    items?: AdminAnnouncementSchema[];
    page?: Page;
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
/** @returns {GetFaqSchema} */
declare function GetFaqSchema(): GetFaqSchema;
type GetFaqSchema = {
    faqs?: FaqSchema[];
};
/** @returns {HandpickedTagSchema} */
declare function HandpickedTagSchema(): HandpickedTagSchema;
type HandpickedTagSchema = {
    attributes?: any;
    content?: string;
    name?: string;
    position?: string;
    sub_type?: string;
    type?: string;
    url?: string;
};
/** @returns {Integer} */
declare function Integer(): Integer;
type Integer = {
    category?: string;
    list_enabled?: boolean;
    name?: string;
    supported_validations?: SupportedValidationsSchema[];
    type?: string;
};
/** @returns {Json} */
declare function Json(): Json;
type Json = {
    category?: string;
    list_enabled?: boolean;
    name?: string;
    supported_validations?: SupportedValidationsSchema[];
    type?: string;
};
/** @returns {LandingPageGetResponse} */
declare function LandingPageGetResponse(): LandingPageGetResponse;
type LandingPageGetResponse = {
    items?: LandingPageSchema[];
    page?: Page;
};
/** @returns {LandingPageSchema} */
declare function LandingPageSchema(): LandingPageSchema;
type LandingPageSchema = {
    _custom_json?: any;
    _id?: string;
    action?: Action;
    application?: string;
    archived?: boolean;
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    platform?: string[];
    slug?: string;
};
/** @returns {Language} */
declare function Language(): Language;
type Language = {
    display?: string;
};
/** @returns {LocaleLanguage} */
declare function LocaleLanguage(): LocaleLanguage;
type LocaleLanguage = {
    ar?: Language;
    en_us?: Language;
    hi?: Language;
};
/** @returns {Metaobject} */
declare function Metaobject(): Metaobject;
type Metaobject = {
    category?: string;
    list_enabled?: boolean;
    name?: string;
    supported_validations?: SupportedValidationsSchema[];
    type?: string;
};
/** @returns {NavigationGetResponse} */
declare function NavigationGetResponse(): NavigationGetResponse;
type NavigationGetResponse = {
    items?: NavigationSchema[];
    page?: Page;
};
/** @returns {NavigationReference} */
declare function NavigationReference(): NavigationReference;
type NavigationReference = {
    _locale_language?: LocaleLanguage;
    acl?: string[];
    action?: Action;
    active?: boolean;
    display?: string;
    image?: string;
    sort_order?: number;
    sub_navigation?: NavigationReference[];
    tags?: string[];
    type?: string;
};
/** @returns {NavigationRequest} */
declare function NavigationRequest(): NavigationRequest;
type NavigationRequest = {
    name?: string;
    navigation?: NavigationReference[];
    orientation?: Orientation;
    platform?: string[];
    slug?: string;
};
/** @returns {NavigationSchema} */
declare function NavigationSchema(): NavigationSchema;
type NavigationSchema = {
    _id?: string;
    application?: string;
    archived?: boolean;
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    name?: string;
    navigation?: NavigationReference[];
    orientation?: Orientation;
    platform?: string[];
    slug?: string;
    version?: number;
};
/** @returns {NextSchedule} */
declare function NextSchedule(): NextSchedule;
type NextSchedule = {
    end?: string;
    start?: string;
};
/** @returns {Orientation} */
declare function Orientation(): Orientation;
type Orientation = {
    landscape?: string[];
    portrait?: string[];
};
/** @returns {Page} */
declare function Page(): Page;
type Page = {
    current?: number;
    has_next?: boolean;
    has_previous?: boolean;
    item_total?: number;
    next_id?: string;
    size?: number;
    type: string;
};
/** @returns {PageGetResponse} */
declare function PageGetResponse(): PageGetResponse;
type PageGetResponse = {
    items?: PageSchema[];
    page?: Page;
};
/** @returns {PageMetaSchema} */
declare function PageMetaSchema(): PageMetaSchema;
type PageMetaSchema = {
    application_id?: string;
    custom_pages?: PageSchema[];
    system_pages?: NavigationSchema[];
};
/** @returns {PagePublishRequest} */
declare function PagePublishRequest(): PagePublishRequest;
type PagePublishRequest = {
    publish?: boolean;
};
/** @returns {PageRequest} */
declare function PageRequest(): PageRequest;
type PageRequest = {
    _custom_json?: any;
    _schedule?: CronSchedule;
    application?: string;
    author?: Author;
    content?: any[];
    feature_image?: Asset;
    orientation?: string;
    published?: boolean;
    reading_time?: string;
    seo?: SEO;
    slug?: string;
    tags?: string[];
    title?: string;
};
/** @returns {PageSchema} */
declare function PageSchema(): PageSchema;
type PageSchema = {
    _custom_json?: any;
    _id?: string;
    _schedule?: ScheduleSchema;
    application?: string;
    archived?: boolean;
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
    orientation?: string;
    page_meta?: any[];
    platform?: string;
    published?: boolean;
    seo?: SEO;
    slug?: string;
    tags?: string[];
    title?: string;
    type?: string;
    visibility?: any;
};
/** @returns {PageSpec} */
declare function PageSpec(): PageSpec;
type PageSpec = {
    specifications?: PageSpecItem[];
};
/** @returns {PageSpecItem} */
declare function PageSpecItem(): PageSpecItem;
type PageSpecItem = {
    display_name?: string;
    page_type?: string;
    params?: PageSpecParam[];
    query?: PageSpecParam[];
};
/** @returns {PageSpecParam} */
declare function PageSpecParam(): PageSpecParam;
type PageSpecParam = {
    key?: string;
    required?: boolean;
};
/** @returns {PathMappingSchema} */
declare function PathMappingSchema(): PathMappingSchema;
type PathMappingSchema = {
    __source?: PathSourceSchema;
    _id?: string;
    application?: string;
    created_at?: string;
    redirect_from?: string;
    redirect_to?: string;
    updated_at?: string;
};
/** @returns {PathSourceSchema} */
declare function PathSourceSchema(): PathSourceSchema;
type PathSourceSchema = {
    id?: string;
    type?: string;
};
/** @returns {PhoneProperties} */
declare function PhoneProperties(): PhoneProperties;
type PhoneProperties = {
    code?: string;
    key?: string;
    number?: string;
};
/** @returns {PhoneSchema} */
declare function PhoneSchema(): PhoneSchema;
type PhoneSchema = {
    active?: boolean;
    phone?: PhoneProperties[];
};
/** @returns {Product} */
declare function Product(): Product;
type Product = {
    category?: string;
    list_enabled?: boolean;
    name?: string;
    supported_validations?: SupportedValidationsSchema[];
    type?: string;
};
/** @returns {RemoveHandpickedSchema} */
declare function RemoveHandpickedSchema(): RemoveHandpickedSchema;
type RemoveHandpickedSchema = {
    tags?: string[];
};
/** @returns {ResourceContent} */
declare function ResourceContent(): ResourceContent;
type ResourceContent = {
    type?: string;
    value?: string;
};
/** @returns {ResourceSchema} */
declare function ResourceSchema(): ResourceSchema;
type ResourceSchema = {
    /**
     * - Number of definitions
     */
    definitions_count?: number;
    /**
     * - Resource key
     */
    key?: string;
    /**
     * - Resource name
     */
    name?: string;
};
/** @returns {ResourcesSchema} */
declare function ResourcesSchema(): ResourcesSchema;
type ResourcesSchema = {
    resources?: ResourceSchema[];
};
/** @returns {ScheduleSchema} */
declare function ScheduleSchema(): ScheduleSchema;
type ScheduleSchema = {
    cron?: string;
    duration?: number;
    end?: string;
    next_schedule?: NextSchedule[];
    start?: string;
};
/** @returns {SEO} */
declare function SEO(): SEO;
type SEO = {
    breadcrumb?: SEObreadcrumb[];
    canonical_url?: string;
    description?: string;
    image?: SEOImage;
    meta_tags?: SEOMetaItem[];
    sitemap?: SEOSitemap;
    title?: string;
};
/** @returns {SEObreadcrumb} */
declare function SEObreadcrumb(): SEObreadcrumb;
type SEObreadcrumb = {
    action?: Action;
    url?: string;
};
/** @returns {SeoComponent} */
declare function SeoComponent(): SeoComponent;
type SeoComponent = {
    seo?: SeoSchema;
};
/** @returns {SEOImage} */
declare function SEOImage(): SEOImage;
type SEOImage = {
    url?: string;
};
/** @returns {SEOMetaItem} */
declare function SEOMetaItem(): SEOMetaItem;
type SEOMetaItem = {
    items?: SEOMetaItems[];
    title?: string;
};
/** @returns {SEOMetaItems} */
declare function SEOMetaItems(): SEOMetaItems;
type SEOMetaItems = {
    key?: string;
    value?: string;
};
/** @returns {SeoSchema} */
declare function SeoSchema(): SeoSchema;
type SeoSchema = {
    _id?: string;
    additional_sitemap?: string;
    app?: string;
    cannonical_enabled?: boolean;
    created_at?: string;
    custom_meta_tags?: CustomMetaTag[];
    details?: Detail;
    robots_txt?: string;
    sitemap_enabled?: boolean;
    updated_at?: string;
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
    active?: boolean;
    application?: string;
    created_at?: string;
    description?: string;
    id?: string;
    page_type?: string;
    schema?: string;
    title?: string;
    updated_at?: string;
};
/** @returns {SEOSchemaMarkupTemplateRequestBody} */
declare function SEOSchemaMarkupTemplateRequestBody(): SEOSchemaMarkupTemplateRequestBody;
type SEOSchemaMarkupTemplateRequestBody = {
    active?: boolean;
    created_at?: string;
    description?: string;
    page_type?: string;
    schema?: string;
    title?: string;
    updated_at?: string;
};
/** @returns {SEOSitemap} */
declare function SEOSitemap(): SEOSitemap;
type SEOSitemap = {
    frequency?: string;
    priority?: number;
};
/** @returns {SlideshowGetResponse} */
declare function SlideshowGetResponse(): SlideshowGetResponse;
type SlideshowGetResponse = {
    items?: SlideshowSchema[];
    page?: Page;
};
/** @returns {SlideshowMedia} */
declare function SlideshowMedia(): SlideshowMedia;
type SlideshowMedia = {
    action?: Action;
    auto_decide_duration?: boolean;
    bg_color?: string;
    duration?: number;
    type?: string;
    url?: string;
};
/** @returns {SlideshowRequest} */
declare function SlideshowRequest(): SlideshowRequest;
type SlideshowRequest = {
    active?: boolean;
    configuration?: ConfigurationSchema;
    media?: SlideshowMedia;
    platform?: string;
    slug?: string;
};
/** @returns {SlideshowSchema} */
declare function SlideshowSchema(): SlideshowSchema;
type SlideshowSchema = {
    _custom_json?: any;
    _id?: string;
    active?: boolean;
    application?: string;
    archived?: boolean;
    configuration?: ConfigurationSchema;
    date_meta?: DateMeta;
    media?: SlideshowMedia[];
    platform?: string;
    slug?: string;
};
/** @returns {StringMultiLine} */
declare function StringMultiLine(): StringMultiLine;
type StringMultiLine = {
    category?: string;
    list_enabled?: boolean;
    name?: string;
    supported_validations?: SupportedValidationsSchema[];
    type?: string;
};
/** @returns {StringSingleLine} */
declare function StringSingleLine(): StringSingleLine;
type StringSingleLine = {
    category?: string;
    list_enabled?: boolean;
    name?: string;
    supported_validations?: SupportedValidationsSchema[];
    type?: string;
};
/** @returns {Support} */
declare function Support(): Support;
type Support = {
    _id?: string;
    application?: string;
    config_type?: string;
    contact?: ContactSchema;
    created?: boolean;
    created_at?: string;
    updated_at?: string;
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
    display?: string;
    meta?: SupportedValidationsMetaSchema;
    name?: string;
    required?: boolean;
    type?: string;
};
/** @returns {TagDeleteSuccessResponse} */
declare function TagDeleteSuccessResponse(): TagDeleteSuccessResponse;
type TagDeleteSuccessResponse = {
    success?: boolean;
};
/** @returns {TagSchema} */
declare function TagSchema(): TagSchema;
type TagSchema = {
    __source?: TagSourceSchema;
    _id?: string;
    attributes?: any;
    content?: string;
    name?: string;
    pages?: any[];
    position?: string;
    sub_type?: string;
    type?: string;
    url?: string;
};
/** @returns {TagSourceSchema} */
declare function TagSourceSchema(): TagSourceSchema;
type TagSourceSchema = {
    id?: string;
    type?: string;
};
/** @returns {TagsSchema} */
declare function TagsSchema(): TagsSchema;
type TagsSchema = {
    _id?: string;
    application?: string;
    tags?: TagSchema[];
};
/** @returns {UpdateFaqCategoryRequestSchema} */
declare function UpdateFaqCategoryRequestSchema(): UpdateFaqCategoryRequestSchema;
type UpdateFaqCategoryRequestSchema = {
    category?: CategorySchema;
};
/** @returns {UpdateHandpickedSchema} */
declare function UpdateHandpickedSchema(): UpdateHandpickedSchema;
type UpdateHandpickedSchema = {
    tag?: HandpickedTagSchema;
};
/** @returns {Url} */
declare function Url(): Url;
type Url = {
    list_enabled?: boolean;
    name?: string;
    supported_validations?: SupportedValidationsSchema[];
    type?: string;
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
type PageType = "about-us" | "addresses" | "blog" | "brands" | "cards" | "cart" | "categories" | "brand" | "category" | "collection" | "collections" | "contact-us" | "external" | "faq" | "freshchat" | "home" | "notification-settings" | "orders" | "page" | "policy" | "product" | "product-request" | "products" | "profile" | "profile-order-shipment" | "profile-basic" | "profile-company" | "profile-emails" | "profile-phones" | "rate-us" | "refer-earn" | "settings" | "shared-cart" | "tnc" | "track-order" | "wishlist" | "sections" | "form" | "cart-delivery" | "cart-payment" | "cart-review" | "login" | "register" | "shipping-policy" | "return-policy" | "order-status";
