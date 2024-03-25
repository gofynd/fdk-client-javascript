export = ContentPlatformModel;
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
 * @property {number} [__v]
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
 * @property {number} [__v]
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
 * @property {string} [_id]
 * @property {string} [app]
 * @property {string} [robots_txt]
 * @property {boolean} [sitemap_enabled]
 * @property {string} [additional_sitemap]
 * @property {boolean} [cannonical_enabled]
 * @property {CustomMetaTag[]} [custom_meta_tags]
 * @property {Detail} [details]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 * @property {SEOSitemap} [sitemap]
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
 * @property {string} [_id]
 * @property {string} [title]
 * @property {string} [page_type]
 * @property {string} [schema]
 * @property {string} [description]
 * @property {boolean} [active]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {Object} [target_json]
 * @property {number} [__v]
 */
/**
 * @typedef SEOSchemaMarkupTemplateRequestBody
 * @property {string} [title]
 * @property {string} [page_type]
 * @property {string} [description]
 * @property {string} [schema]
 * @property {Object} [target_json]
 * @property {boolean} [active]
 * @property {string} [created_at]
 */
/**
 * @typedef DeletPathMappingSchema
 * @property {string} [message]
 * @property {PathMappingSchema} [data]
 */
/**
 * @typedef CreatePathMappingSchema
 * @property {string} [message]
 * @property {PathMappingSchema} [data]
 */
/**
 * @typedef GetAllPathMappingSchema
 * @property {string} [message]
 * @property {GetPathSchema} [data]
 */
/**
 * @typedef GetPathSchema
 * @property {PathMappingSchema[]} [docs]
 * @property {number} [page]
 * @property {number} [limit]
 * @property {number} [pages]
 * @property {number} [total]
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
 */
/**
 * @typedef ScheduleSchema
 * @property {boolean} [published]
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
 * @property {string[]} [tags]
 * @property {SEO} [seo]
 * @property {CronSchedule} [_schedule]
 * @property {string} [title]
 * @property {DateMeta} [date_meta]
 * @property {string} [publish_date]
 */
/**
 * @typedef SEO
 * @property {string} [description]
 * @property {SEOImage} [image]
 * @property {string} [title]
 * @property {SEOMetaItem[]} [meta_tags]
 * @property {SEOSitemap} [sitemap]
 * @property {SEObreadcrumb[]} [breadcrumbs]
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
 * @property {string} [publish_date]
 * @property {SEO} [seo]
 * @property {CronSchedule} [_schedule]
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
 * @typedef DataLoaderItemsResponseSchema
 * @property {DataLoaderResponseSchema[]} [items]
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
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {number} [__v]
 * @property {boolean} [is_selected]
 * @property {DataLoaderSourceSchema} [__source]
 */
/**
 * @typedef DataLoaderResetResponseSchema
 * @property {boolean} [resetted]
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
 * @property {ActionPage} [page]
 * @property {string} [type]
 */
/**
 * @typedef ActionPage
 * @property {Object} [params]
 * @property {Object} [query]
 * @property {string} [url]
 * @property {string} [type]
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
 * @typedef AssignmentReference
 * @property {string} [platform]
 * @property {string} [orientation]
 * @property {string} [position]
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
 * @property {string} [_id]
 * @property {string} [url]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {string} [application]
 * @property {string} [company]
 * @property {string} [name]
 * @property {string} [service]
 * @property {string} [operation_id]
 * @property {boolean} [is_selected]
 * @property {string} [type]
 * @property {DataLoaderSourceSchema} [__source]
 * @property {number} [__v]
 */
/**
 * @typedef DataLoaderSourceSchema
 * @property {string} [type]
 * @property {string} [id]
 */
/**
 * @typedef TagSpecSchema
 * @property {string} [name]
 * @property {string} [description]
 */
/**
 * @typedef ServerSchema
 * @property {string} [url]
 */
/**
 * @typedef DataLoadersApiSpecSchema
 * @property {Object} [info]
 * @property {ServerSchema[]} [servers]
 * @property {TagSpecSchema[]} [tags]
 * @property {string} [openapi]
 * @property {Object} [paths]
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
 * @property {number} [__v]
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
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [title]
 * @property {string} [description]
 * @property {number} [index]
 * @property {string} [slug]
 * @property {ChildrenSchema[]} [children]
 * @property {string} [icon_url]
 * @property {number} [__v]
 */
/**
 * @typedef FaqSchema
 * @property {string} [slug]
 * @property {string} [application]
 * @property {string} [_id]
 * @property {string} [question]
 * @property {string} [answer]
 * @property {string[]} [tags]
 * @property {number} [__v]
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
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {number} [current]
 * @property {string} type
 * @property {number} [size]
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
 * @property {number} [__v]
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
 * @property {AssignmentReference[]} [assignments]
 * @property {number} [__v]
 */
/**
 * @typedef NavigationRequest
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string[]} [platform]
 * @property {Orientation} [orientation]
 * @property {NavigationAssignment[]} [assignments]
 * @property {NavigationReference[]} [navigation]
 */
/**
 * @typedef NavigationAssignment
 * @property {string} [platform]
 * @property {string} [orientation]
 * @property {string} [position]
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
 * @typedef PageResponseError
 * @property {string} [errors]
 */
/**
 * @typedef PageSchema
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [platform]
 * @property {string} [title]
 * @property {string} [slug]
 * @property {string} [type]
 * @property {string[]} [tags]
 * @property {string} [content_path]
 * @property {string} [orientation]
 * @property {string} [description]
 * @property {boolean} [published]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {Asset} [feature_image]
 * @property {ScheduleSchema} [_schedule]
 * @property {PageMeta[]} [page_meta]
 * @property {SEO} [seo]
 * @property {string[]} [component_ids]
 * @property {boolean} [archived]
 * @property {number} [__v]
 * @property {PageContent[]} [content]
 * @property {SanitizedContent[]} [sanitized_content]
 */
/**
 * @typedef SanitizedContent
 * @property {string} [type]
 * @property {string} [value]
 */
/**
 * @typedef PageMeta
 * @property {string} [key]
 */
/**
 * @typedef PageContent
 * @property {string} [type]
 * @property {string} [value]
 */
/**
 * @typedef CreatedBySchema
 * @property {string} [id]
 */
/**
 * @typedef PageRequestVisibility
 * @property {boolean} [test]
 */
/**
 * @typedef PageRequest
 * @property {CronSchedule} [_schedule]
 * @property {string} [application]
 * @property {Author} [author]
 * @property {Object} [_custom_json]
 * @property {string} [orientation]
 * @property {PageContent[]} [content]
 * @property {Asset} [feature_image]
 * @property {boolean} [published]
 * @property {string} [reading_time]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {SEO} [seo]
 * @property {string} [title]
 * @property {string} [platform]
 * @property {string} [type]
 * @property {string} [description]
 * @property {PageRequestVisibility} [visibility]
 */
/**
 * @typedef CronSchedule
 * @property {string} [cron]
 * @property {string} [start]
 * @property {string} [end]
 * @property {number} [duration]
 * @property {NextSchedule[]} [next_schedule]
 */
/**
 * @typedef PagePublishRequest
 * @property {boolean} [publish]
 */
/**
 * @typedef PageMetaSchema
 * @property {SystemPages[]} [system_pages]
 * @property {CustomePages[]} [custom_pages]
 * @property {string} [application_id]
 */
/**
 * @typedef CustomePages
 * @property {string} [display]
 * @property {string} [slug]
 */
/**
 * @typedef SystemPagesActionPage
 * @property {string} [type]
 */
/**
 * @typedef SystemPagesAction
 * @property {SystemPagesActionPage} [page]
 * @property {string} [type]
 */
/**
 * @typedef SystemPages
 * @property {string} [display]
 * @property {SystemPagesAction} [action]
 * @property {string} [page_type]
 */
/**
 * @typedef Support
 * @property {boolean} [created]
 * @property {string} [_id]
 * @property {string} [config_type]
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
 * @property {string} [company]
 * @property {number} [__v]
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
 * @property {Object[]} [compatible_engines]
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
 */
/**
 * @typedef ApplicationFieldDefinitionSchema
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
 * @property {string} [application_id]
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
 * @typedef ApplicationCustomFieldDefinitionsSchema
 * @property {ApplicationFieldDefinitionSchema[]} [items]
 * @property {Page} [page]
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
 * @property {string} [creator]
 * @property {FieldValidations[]} [validations]
 */
/**
 * @typedef CustomObjectCustomFieldDefinitions
 * @property {string} [_id]
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
 * @property {CustomFieldDefinitionDetailResSchema[]} [field_definitions]
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
 * @typedef CustomFieldSchema
 * @property {string} [_id]
 * @property {string} [namespace]
 * @property {string} [key]
 * @property {string} [resource]
 * @property {string} [creator]
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
 * @property {string} [slug]
 * @property {string} [type]
 * @property {string} [display_name]
 * @property {string} [definition_id]
 * @property {boolean} [is_deleted]
 * @property {string} [created_at]
 * @property {string} [updated_at]
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
 * @property {string} [application_id]
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
 * @property {string} [application_id]
 * @property {string} [company_id]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {CustomObjectCustomFieldDefinitionResSchema[]} [field_definitions]
 */
/**
 * @typedef CustomObjectDefinitionDeleteResponseSchema
 * @property {boolean} [success]
 * @property {string} [message]
 */
/**
 * @typedef CustomObjectEntryBulkUploadResponse
 * @property {string} [message]
 * @property {string} [task_id]
 */
/**
 * @typedef CustomObjectListItemDefinationSchema
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [type]
 * @property {string} [display_name_key]
 */
/**
 * @typedef CustomObjectListItemSchema
 * @property {string} [_id]
 * @property {string} [definition_id]
 * @property {string} [status]
 * @property {string} [slug]
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
 * @property {string} [type]
 * @property {string} [definition_id]
 */
/**
 * @typedef MetafieldTypesSchema
 * @property {CustomFieldTypeSchema} [metafield_types]
 */
/**
 * @typedef CustomObjectByIdSchema
 * @property {string} [_id]
 * @property {string} [status]
 * @property {string} [slug]
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
 * @typedef JobSchema
 * @property {string} [_id]
 * @property {string[]} [jobs]
 * @property {string[]} [finished_jobs]
 * @property {string[]} [error_jobs]
 * @property {string[]} [errors_occured]
 * @property {string} [company_id]
 * @property {string} [creator]
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
 * @property {string} [application_id]
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
 * @typedef SupportedValidationsSchema
 * @property {string} [name]
 * @property {string} [type]
 * @property {string} [display]
 * @property {boolean} [required]
 */
/**
 * @typedef Duration
 * @property {string} [name]
 * @property {boolean} [list_enabled]
 * @property {string} [type]
 * @property {string} [category]
 * @property {SupportedValidationsSchema[]} [supported_validations]
 */
/**
 * @typedef HTML
 * @property {string} [name]
 * @property {boolean} [list_enabled]
 * @property {string} [type]
 * @property {SupportedValidationsSchema[]} [supported_validations]
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
 * @property {string[]} [scope]
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
 */
/**
 * @typedef CustomObjectRequestSchema
 * @property {string} [status]
 * @property {string} [slug]
 * @property {string} [definition_id]
 * @property {CustomObjectEntryFieldSchema[]} [fields]
 */
/**
 * @typedef CustomObjectBulkSchema
 * @property {string} [url]
 * @property {number} [total_records]
 */
declare class ContentPlatformModel {
}
declare namespace ContentPlatformModel {
    export { GenerateSEOContent, GeneratedSEOContent, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, PathSourceSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, SeoSchemaComponent, SEOSchemaMarkupTemplate, SEOSchemaMarkupTemplateRequestBody, DeletPathMappingSchema, CreatePathMappingSchema, GetAllPathMappingSchema, GetPathSchema, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, DefaultSchemaComponent, DefaultSEOSchemaMarkupTemplate, ScheduleSchema, NextSchedule, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, SEOMetaItem, SEOMetaItems, SEOSitemap, SEObreadcrumb, DateMeta, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderItemsResponseSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, LocaleLanguage, Language, Action, ActionPage, NavigationReference, AssignmentReference, CronBasedScheduleSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, TagSpecSchema, ServerSchema, DataLoadersApiSpecSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, Page, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, NavigationAssignment, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageResponseError, PageSchema, SanitizedContent, PageMeta, PageContent, CreatedBySchema, PageRequestVisibility, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, CustomePages, SystemPagesActionPage, SystemPagesAction, SystemPages, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, ResourcesSchema, ResourceSchema, FieldValidations, ApplicationFieldDefinitionSchema, FieldDefinitionSchema, ApplicationCustomFieldDefinitionsSchema, CustomFieldDefinitionsSchema, CustomFieldDefinitionRequestSchema, CustomObjectCustomFieldDefinitions, CustomObjectDefinitionUpdateRequestSchema, CustomFieldDefinitionDetailResSchema, CustomDataDeleteSchema, CustomFieldSchema, CustomFieldsResponseSchema, CustomFieldsDeleteSchema, CustomFieldsResponseByResourceIdSchema, CustomField, CustomFieldRequestSchema, CustomObjectSchema, CustomObjectDefinitionRequestSchema, CustomObjectCustomFieldDefinitionResSchema, CustomObjectDefinitionSchema, CustomObjectDefinitionDeleteResponseSchema, CustomObjectEntryBulkUploadResponse, CustomObjectListItemDefinationSchema, CustomObjectListItemSchema, CustomObjectsSchema, CustomObjectFieldSchema, MetafieldTypesSchema, CustomObjectByIdSchema, CustomObjectBulkEntryInitiateDownload, CustomObjectMetaSchema, JobSchema, CustomFieldBulkEntry, CustomObjectBulkEntry, CustomFieldTypeSchema, SupportedValidationsSchema, Duration, HTML, StringSingleLine, StringMultiLine, Dropdown, Integer, FloatType, BooleanType, Date, Datetime, Json, File, Url, Metaobject, Product, CustomObjectEntry, CustomObjectDefinitionsSchema, CustomObjectEntryFieldSchema, CustomObjectRequestSchema, CustomObjectBulkSchema };
}
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
    __v?: number;
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
    __v?: number;
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
    _id?: string;
    app?: string;
    robots_txt?: string;
    sitemap_enabled?: boolean;
    additional_sitemap?: string;
    cannonical_enabled?: boolean;
    custom_meta_tags?: CustomMetaTag[];
    details?: Detail;
    created_at?: string;
    updated_at?: string;
    __v?: number;
    sitemap?: SEOSitemap;
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
    _id?: string;
    title?: string;
    page_type?: string;
    schema?: string;
    description?: string;
    active?: boolean;
    application?: string;
    created_at?: string;
    updated_at?: string;
    target_json?: any;
    __v?: number;
};
/** @returns {SEOSchemaMarkupTemplateRequestBody} */
declare function SEOSchemaMarkupTemplateRequestBody(): SEOSchemaMarkupTemplateRequestBody;
type SEOSchemaMarkupTemplateRequestBody = {
    title?: string;
    page_type?: string;
    description?: string;
    schema?: string;
    target_json?: any;
    active?: boolean;
    created_at?: string;
};
/** @returns {DeletPathMappingSchema} */
declare function DeletPathMappingSchema(): DeletPathMappingSchema;
type DeletPathMappingSchema = {
    message?: string;
    data?: PathMappingSchema;
};
/** @returns {CreatePathMappingSchema} */
declare function CreatePathMappingSchema(): CreatePathMappingSchema;
type CreatePathMappingSchema = {
    message?: string;
    data?: PathMappingSchema;
};
/** @returns {GetAllPathMappingSchema} */
declare function GetAllPathMappingSchema(): GetAllPathMappingSchema;
type GetAllPathMappingSchema = {
    message?: string;
    data?: GetPathSchema;
};
/** @returns {GetPathSchema} */
declare function GetPathSchema(): GetPathSchema;
type GetPathSchema = {
    docs?: PathMappingSchema[];
    page?: number;
    limit?: number;
    pages?: number;
    total?: number;
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
};
/** @returns {ScheduleSchema} */
declare function ScheduleSchema(): ScheduleSchema;
type ScheduleSchema = {
    published?: boolean;
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
/** @returns {BlogGetResponse} */
declare function BlogGetResponse(): BlogGetResponse;
type BlogGetResponse = {
    items?: BlogSchema[];
    page?: Page;
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
    tags?: string[];
    seo?: SEO;
    _schedule?: CronSchedule;
    title?: string;
    date_meta?: DateMeta;
    publish_date?: string;
};
/** @returns {SEO} */
declare function SEO(): SEO;
type SEO = {
    description?: string;
    image?: SEOImage;
    title?: string;
    meta_tags?: SEOMetaItem[];
    sitemap?: SEOSitemap;
    breadcrumbs?: SEObreadcrumb[];
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
/** @returns {BlogRequest} */
declare function BlogRequest(): BlogRequest;
type BlogRequest = {
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
    publish_date?: string;
    seo?: SEO;
    _schedule?: CronSchedule;
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
/** @returns {DataLoaderItemsResponseSchema} */
declare function DataLoaderItemsResponseSchema(): DataLoaderItemsResponseSchema;
type DataLoaderItemsResponseSchema = {
    items?: DataLoaderResponseSchema[];
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
    created_at?: string;
    modified_at?: string;
    __v?: number;
    is_selected?: boolean;
    __source?: DataLoaderSourceSchema;
};
/** @returns {DataLoaderResetResponseSchema} */
declare function DataLoaderResetResponseSchema(): DataLoaderResetResponseSchema;
type DataLoaderResetResponseSchema = {
    resetted?: boolean;
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
    page?: ActionPage;
    type?: string;
};
/** @returns {ActionPage} */
declare function ActionPage(): ActionPage;
type ActionPage = {
    params?: any;
    query?: any;
    url?: string;
    type?: string;
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
/** @returns {AssignmentReference} */
declare function AssignmentReference(): AssignmentReference;
type AssignmentReference = {
    platform?: string;
    orientation?: string;
    position?: string;
};
/** @returns {CronBasedScheduleSchema} */
declare function CronBasedScheduleSchema(): CronBasedScheduleSchema;
type CronBasedScheduleSchema = {
    enabled?: boolean;
    cron?: string;
    start?: string;
    end?: string;
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
    _id?: string;
    url?: string;
    created_at?: string;
    modified_at?: string;
    application?: string;
    company?: string;
    name?: string;
    service?: string;
    operation_id?: string;
    is_selected?: boolean;
    type?: string;
    __source?: DataLoaderSourceSchema;
    __v?: number;
};
/** @returns {DataLoaderSourceSchema} */
declare function DataLoaderSourceSchema(): DataLoaderSourceSchema;
type DataLoaderSourceSchema = {
    type?: string;
    id?: string;
};
/** @returns {TagSpecSchema} */
declare function TagSpecSchema(): TagSpecSchema;
type TagSpecSchema = {
    name?: string;
    description?: string;
};
/** @returns {ServerSchema} */
declare function ServerSchema(): ServerSchema;
type ServerSchema = {
    url?: string;
};
/** @returns {DataLoadersApiSpecSchema} */
declare function DataLoadersApiSpecSchema(): DataLoadersApiSpecSchema;
type DataLoadersApiSpecSchema = {
    info?: any;
    servers?: ServerSchema[];
    tags?: TagSpecSchema[];
    openapi?: string;
    paths?: any;
};
/** @returns {DataLoadersSchema} */
declare function DataLoadersSchema(): DataLoadersSchema;
type DataLoadersSchema = {
    items?: DataLoaderSchema[];
};
/** @returns {TagDeleteSuccessResponse} */
declare function TagDeleteSuccessResponse(): TagDeleteSuccessResponse;
type TagDeleteSuccessResponse = {
    success?: boolean;
};
/** @returns {ContentAPIError} */
declare function ContentAPIError(): ContentAPIError;
type ContentAPIError = {
    message?: string;
    status?: number;
    code?: string;
    exception?: string;
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
    __v?: number;
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
    _id?: string;
    application?: string;
    title?: string;
    description?: string;
    index?: number;
    slug?: string;
    children?: ChildrenSchema[];
    icon_url?: string;
    __v?: number;
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
    __v?: number;
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
    item_total?: number;
    next_id?: string;
    has_previous?: boolean;
    has_next?: boolean;
    current?: number;
    type: string;
    size?: number;
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
    slug?: string;
    action?: Action;
    platform?: string[];
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    _id?: string;
    application?: string;
    archived?: boolean;
    _custom_json?: any;
    __v?: number;
};
/** @returns {DefaultNavigationResponse} */
declare function DefaultNavigationResponse(): DefaultNavigationResponse;
type DefaultNavigationResponse = {
    items?: NavigationSchema[];
};
/** @returns {NavigationGetResponse} */
declare function NavigationGetResponse(): NavigationGetResponse;
type NavigationGetResponse = {
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
    assignments?: AssignmentReference[];
    __v?: number;
};
/** @returns {NavigationRequest} */
declare function NavigationRequest(): NavigationRequest;
type NavigationRequest = {
    name?: string;
    slug?: string;
    platform?: string[];
    orientation?: Orientation;
    assignments?: NavigationAssignment[];
    navigation?: NavigationReference[];
};
/** @returns {NavigationAssignment} */
declare function NavigationAssignment(): NavigationAssignment;
type NavigationAssignment = {
    platform?: string;
    orientation?: string;
    position?: string;
};
/** @returns {PageGetResponse} */
declare function PageGetResponse(): PageGetResponse;
type PageGetResponse = {
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
/** @returns {PageResponseError} */
declare function PageResponseError(): PageResponseError;
type PageResponseError = {
    errors?: string;
};
/** @returns {PageSchema} */
declare function PageSchema(): PageSchema;
type PageSchema = {
    _id?: string;
    application?: string;
    platform?: string;
    title?: string;
    slug?: string;
    type?: string;
    tags?: string[];
    content_path?: string;
    orientation?: string;
    description?: string;
    published?: boolean;
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    feature_image?: Asset;
    _schedule?: ScheduleSchema;
    page_meta?: PageMeta[];
    seo?: SEO;
    component_ids?: string[];
    archived?: boolean;
    __v?: number;
    content?: PageContent[];
    sanitized_content?: SanitizedContent[];
};
/** @returns {SanitizedContent} */
declare function SanitizedContent(): SanitizedContent;
type SanitizedContent = {
    type?: string;
    value?: string;
};
/** @returns {PageMeta} */
declare function PageMeta(): PageMeta;
type PageMeta = {
    key?: string;
};
/** @returns {PageContent} */
declare function PageContent(): PageContent;
type PageContent = {
    type?: string;
    value?: string;
};
/** @returns {CreatedBySchema} */
declare function CreatedBySchema(): CreatedBySchema;
type CreatedBySchema = {
    id?: string;
};
/** @returns {PageRequestVisibility} */
declare function PageRequestVisibility(): PageRequestVisibility;
type PageRequestVisibility = {
    test?: boolean;
};
/** @returns {PageRequest} */
declare function PageRequest(): PageRequest;
type PageRequest = {
    _schedule?: CronSchedule;
    application?: string;
    author?: Author;
    _custom_json?: any;
    orientation?: string;
    content?: PageContent[];
    feature_image?: Asset;
    published?: boolean;
    reading_time?: string;
    slug?: string;
    tags?: string[];
    seo?: SEO;
    title?: string;
    platform?: string;
    type?: string;
    description?: string;
    visibility?: PageRequestVisibility;
};
/** @returns {CronSchedule} */
declare function CronSchedule(): CronSchedule;
type CronSchedule = {
    cron?: string;
    start?: string;
    end?: string;
    duration?: number;
    next_schedule?: NextSchedule[];
};
/** @returns {PagePublishRequest} */
declare function PagePublishRequest(): PagePublishRequest;
type PagePublishRequest = {
    publish?: boolean;
};
/** @returns {PageMetaSchema} */
declare function PageMetaSchema(): PageMetaSchema;
type PageMetaSchema = {
    system_pages?: SystemPages[];
    custom_pages?: CustomePages[];
    application_id?: string;
};
/** @returns {CustomePages} */
declare function CustomePages(): CustomePages;
type CustomePages = {
    display?: string;
    slug?: string;
};
/** @returns {SystemPagesActionPage} */
declare function SystemPagesActionPage(): SystemPagesActionPage;
type SystemPagesActionPage = {
    type?: string;
};
/** @returns {SystemPagesAction} */
declare function SystemPagesAction(): SystemPagesAction;
type SystemPagesAction = {
    page?: SystemPagesActionPage;
    type?: string;
};
/** @returns {SystemPages} */
declare function SystemPages(): SystemPages;
type SystemPages = {
    display?: string;
    action?: SystemPagesAction;
    page_type?: string;
};
/** @returns {Support} */
declare function Support(): Support;
type Support = {
    created?: boolean;
    _id?: string;
    config_type?: string;
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
    company?: string;
    __v?: number;
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
    compatible_engines?: any[];
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
    name?: string;
    type?: string;
};
/** @returns {ApplicationFieldDefinitionSchema} */
declare function ApplicationFieldDefinitionSchema(): ApplicationFieldDefinitionSchema;
type ApplicationFieldDefinitionSchema = {
    _id?: string;
    creator?: string;
    resource?: string;
    name?: string;
    namespace?: string;
    key?: string;
    description?: string;
    type?: string;
    multi_value?: boolean;
    validations?: FieldValidations[];
    company_id?: string;
    created_by?: string;
    updated_by?: string;
    required?: boolean;
    is_deleted?: boolean;
    created_at?: string;
    updated_at?: string;
    type_name?: string;
    invalid_fields_count?: number;
    application_id?: string;
};
/** @returns {FieldDefinitionSchema} */
declare function FieldDefinitionSchema(): FieldDefinitionSchema;
type FieldDefinitionSchema = {
    _id?: string;
    creator?: string;
    resource?: string;
    name?: string;
    namespace?: string;
    key?: string;
    description?: string;
    type?: string;
    multi_value?: boolean;
    validations?: FieldValidations[];
    company_id?: string;
    created_by?: string;
    updated_by?: string;
    required?: boolean;
    is_deleted?: boolean;
    created_at?: string;
    updated_at?: string;
    type_name?: string;
    invalid_fields_count?: number;
};
/** @returns {ApplicationCustomFieldDefinitionsSchema} */
declare function ApplicationCustomFieldDefinitionsSchema(): ApplicationCustomFieldDefinitionsSchema;
type ApplicationCustomFieldDefinitionsSchema = {
    items?: ApplicationFieldDefinitionSchema[];
    page?: Page;
};
/** @returns {CustomFieldDefinitionsSchema} */
declare function CustomFieldDefinitionsSchema(): CustomFieldDefinitionsSchema;
type CustomFieldDefinitionsSchema = {
    items?: FieldDefinitionSchema[];
    page?: Page;
};
/** @returns {CustomFieldDefinitionRequestSchema} */
declare function CustomFieldDefinitionRequestSchema(): CustomFieldDefinitionRequestSchema;
type CustomFieldDefinitionRequestSchema = {
    resource?: string;
    type?: string;
    key?: string;
    namespace?: string;
    multi_value?: boolean;
    name?: string;
    description?: string;
    creator?: string;
    validations?: FieldValidations[];
};
/** @returns {CustomObjectCustomFieldDefinitions} */
declare function CustomObjectCustomFieldDefinitions(): CustomObjectCustomFieldDefinitions;
type CustomObjectCustomFieldDefinitions = {
    _id?: string;
    type?: string;
    description?: string;
    name?: string;
    multi_value?: boolean;
    required?: boolean;
    key?: string;
    validations?: FieldValidations[];
    action?: string;
};
/** @returns {CustomObjectDefinitionUpdateRequestSchema} */
declare function CustomObjectDefinitionUpdateRequestSchema(): CustomObjectDefinitionUpdateRequestSchema;
type CustomObjectDefinitionUpdateRequestSchema = {
    type?: string;
    description?: string;
    name?: string;
    display_name_key?: string;
    field_definitions?: CustomFieldDefinitionDetailResSchema[];
};
/** @returns {CustomFieldDefinitionDetailResSchema} */
declare function CustomFieldDefinitionDetailResSchema(): CustomFieldDefinitionDetailResSchema;
type CustomFieldDefinitionDetailResSchema = {
    creator?: string;
    resource?: string;
    name?: string;
    namespace?: string;
    key?: string;
    description?: string;
    type?: string;
    multi_value?: boolean;
    company_id?: string;
    application_id?: string;
    created_by?: string;
    updated_by?: string;
    required?: boolean;
    is_deleted?: boolean;
    _id?: string;
    validations?: any[];
    created_at?: string;
    updated_at?: string;
};
/** @returns {CustomDataDeleteSchema} */
declare function CustomDataDeleteSchema(): CustomDataDeleteSchema;
type CustomDataDeleteSchema = {
    success?: boolean;
    message?: string;
};
/** @returns {CustomFieldSchema} */
declare function CustomFieldSchema(): CustomFieldSchema;
type CustomFieldSchema = {
    _id?: string;
    namespace?: string;
    key?: string;
    resource?: string;
    creator?: string;
    resource_id?: string;
    type?: string;
    multi_value?: boolean;
    company_id?: string;
    definition_id?: string;
    has_invalid_values?: boolean;
    invalid_value_errors?: any[];
    created_by?: string;
    is_deleted?: boolean;
    created_at?: string;
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
    definition_id?: string;
};
/** @returns {CustomFieldRequestSchema} */
declare function CustomFieldRequestSchema(): CustomFieldRequestSchema;
type CustomFieldRequestSchema = {
    fields?: CustomField[];
};
/** @returns {CustomObjectSchema} */
declare function CustomObjectSchema(): CustomObjectSchema;
type CustomObjectSchema = {
    _id?: string;
    creator?: string;
    company_id?: string;
    application_id?: string;
    created_by?: string;
    updated_by?: string;
    status?: string;
    slug?: string;
    type?: string;
    display_name?: string;
    definition_id?: string;
    is_deleted?: boolean;
    created_at?: string;
    updated_at?: string;
    fields?: CustomFieldSchema[];
};
/** @returns {CustomObjectDefinitionRequestSchema} */
declare function CustomObjectDefinitionRequestSchema(): CustomObjectDefinitionRequestSchema;
type CustomObjectDefinitionRequestSchema = {
    type?: string;
    description?: string;
    name?: string;
    display_name_key?: string;
    field_definitions?: CustomObjectCustomFieldDefinitions[];
};
/** @returns {CustomObjectCustomFieldDefinitionResSchema} */
declare function CustomObjectCustomFieldDefinitionResSchema(): CustomObjectCustomFieldDefinitionResSchema;
type CustomObjectCustomFieldDefinitionResSchema = {
    creator?: string;
    resource?: string;
    name?: string;
    namespace?: string;
    key?: string;
    description?: string;
    type?: string;
    multi_value?: boolean;
    validations?: FieldValidations[];
    company_id?: string;
    created_by?: string;
    metaobject_definition_id?: string;
    required?: boolean;
    is_deleted?: boolean;
    _id?: string;
    created_at?: string;
    updated_at?: string;
    application_id?: string;
};
/** @returns {CustomObjectDefinitionSchema} */
declare function CustomObjectDefinitionSchema(): CustomObjectDefinitionSchema;
type CustomObjectDefinitionSchema = {
    _id?: string;
    name?: string;
    type?: string;
    display_name_key?: string;
    description?: string;
    creator?: string;
    created_by?: string;
    updated_by?: string;
    application_id?: string;
    company_id?: string;
    created_at?: string;
    updated_at?: string;
    field_definitions?: CustomObjectCustomFieldDefinitionResSchema[];
};
/** @returns {CustomObjectDefinitionDeleteResponseSchema} */
declare function CustomObjectDefinitionDeleteResponseSchema(): CustomObjectDefinitionDeleteResponseSchema;
type CustomObjectDefinitionDeleteResponseSchema = {
    success?: boolean;
    message?: string;
};
/** @returns {CustomObjectEntryBulkUploadResponse} */
declare function CustomObjectEntryBulkUploadResponse(): CustomObjectEntryBulkUploadResponse;
type CustomObjectEntryBulkUploadResponse = {
    message?: string;
    task_id?: string;
};
/** @returns {CustomObjectListItemDefinationSchema} */
declare function CustomObjectListItemDefinationSchema(): CustomObjectListItemDefinationSchema;
type CustomObjectListItemDefinationSchema = {
    _id?: string;
    name?: string;
    type?: string;
    display_name_key?: string;
};
/** @returns {CustomObjectListItemSchema} */
declare function CustomObjectListItemSchema(): CustomObjectListItemSchema;
type CustomObjectListItemSchema = {
    _id?: string;
    definition_id?: string;
    status?: string;
    slug?: string;
    updated_at?: string;
    display_name?: string;
    definition?: CustomObjectListItemDefinationSchema;
    references?: number;
};
/** @returns {CustomObjectsSchema} */
declare function CustomObjectsSchema(): CustomObjectsSchema;
type CustomObjectsSchema = {
    items?: CustomObjectListItemSchema[];
    page?: Page;
};
/** @returns {CustomObjectFieldSchema} */
declare function CustomObjectFieldSchema(): CustomObjectFieldSchema;
type CustomObjectFieldSchema = {
    _id?: string;
    key?: string;
    type?: string;
    definition_id?: string;
};
/** @returns {MetafieldTypesSchema} */
declare function MetafieldTypesSchema(): MetafieldTypesSchema;
type MetafieldTypesSchema = {
    metafield_types?: CustomFieldTypeSchema;
};
/** @returns {CustomObjectByIdSchema} */
declare function CustomObjectByIdSchema(): CustomObjectByIdSchema;
type CustomObjectByIdSchema = {
    _id?: string;
    status?: string;
    slug?: string;
    display_name?: string;
    definition?: CustomObjectListItemDefinationSchema;
    references?: any[];
    fields?: CustomObjectFieldSchema[];
};
/** @returns {CustomObjectBulkEntryInitiateDownload} */
declare function CustomObjectBulkEntryInitiateDownload(): CustomObjectBulkEntryInitiateDownload;
type CustomObjectBulkEntryInitiateDownload = {
    message?: string;
    task_id?: string;
};
/** @returns {CustomObjectMetaSchema} */
declare function CustomObjectMetaSchema(): CustomObjectMetaSchema;
type CustomObjectMetaSchema = {
    mo_total_count?: number;
    mo_success_count?: number;
    mo_error_count?: number;
    mo_defintion_type?: string;
};
/** @returns {JobSchema} */
declare function JobSchema(): JobSchema;
type JobSchema = {
    _id?: string;
    jobs?: string[];
    finished_jobs?: string[];
    error_jobs?: string[];
    errors_occured?: string[];
    company_id?: string;
    creator?: string;
    status?: string;
    action_type?: string;
    entity?: string;
    error_url?: string;
    finished_count?: number;
    error_count?: number;
    success_count?: number;
    total_jobs?: number;
    meta?: CustomObjectMetaSchema;
    created_by?: string;
    created_at?: string;
    updated_at?: string;
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
/** @returns {SupportedValidationsSchema} */
declare function SupportedValidationsSchema(): SupportedValidationsSchema;
type SupportedValidationsSchema = {
    name?: string;
    type?: string;
    display?: string;
    required?: boolean;
};
/** @returns {Duration} */
declare function Duration(): Duration;
type Duration = {
    name?: string;
    list_enabled?: boolean;
    type?: string;
    category?: string;
    supported_validations?: SupportedValidationsSchema[];
};
/** @returns {HTML} */
declare function HTML(): HTML;
type HTML = {
    name?: string;
    list_enabled?: boolean;
    type?: string;
    supported_validations?: SupportedValidationsSchema[];
};
/** @returns {StringSingleLine} */
declare function StringSingleLine(): StringSingleLine;
type StringSingleLine = {
    name?: string;
    list_enabled?: boolean;
    category?: string;
    type?: string;
    supported_validations?: SupportedValidationsSchema[];
};
/** @returns {StringMultiLine} */
declare function StringMultiLine(): StringMultiLine;
type StringMultiLine = {
    name?: string;
    list_enabled?: boolean;
    category?: string;
    type?: string;
    supported_validations?: SupportedValidationsSchema[];
};
/** @returns {Dropdown} */
declare function Dropdown(): Dropdown;
type Dropdown = {
    name?: string;
    list_enabled?: boolean;
    category?: string;
    type?: string;
    supported_validations?: SupportedValidationsSchema[];
};
/** @returns {Integer} */
declare function Integer(): Integer;
type Integer = {
    name?: string;
    list_enabled?: boolean;
    type?: string;
    category?: string;
    supported_validations?: SupportedValidationsSchema[];
};
/** @returns {FloatType} */
declare function FloatType(): FloatType;
type FloatType = {
    name?: string;
    list_enabled?: boolean;
    type?: string;
    category?: string;
    supported_validations?: SupportedValidationsSchema[];
};
/** @returns {BooleanType} */
declare function BooleanType(): BooleanType;
type BooleanType = {
    name?: string;
    category?: string;
    list_enabled?: boolean;
    type?: string;
    supported_validations?: SupportedValidationsSchema[];
};
/** @returns {Date} */
declare function Date(): Date;
type Date = {
    name?: string;
    list_enabled?: boolean;
    category?: string;
    type?: string;
    supported_validations?: SupportedValidationsSchema[];
};
/** @returns {Datetime} */
declare function Datetime(): Datetime;
type Datetime = {
    name?: string;
    category?: string;
    list_enabled?: boolean;
    type?: string;
    supported_validations?: SupportedValidationsSchema[];
};
/** @returns {Json} */
declare function Json(): Json;
type Json = {
    name?: string;
    list_enabled?: boolean;
    category?: string;
    type?: string;
    supported_validations?: SupportedValidationsSchema[];
};
/** @returns {File} */
declare function File(): File;
type File = {
    name?: string;
    category?: string;
    list_enabled?: boolean;
    type?: string;
    supported_validations?: SupportedValidationsSchema[];
};
/** @returns {Url} */
declare function Url(): Url;
type Url = {
    name?: string;
    list_enabled?: boolean;
    type?: string;
    supported_validations?: SupportedValidationsSchema[];
};
/** @returns {Metaobject} */
declare function Metaobject(): Metaobject;
type Metaobject = {
    name?: string;
    list_enabled?: boolean;
    category?: string;
    type?: string;
    supported_validations?: SupportedValidationsSchema[];
};
/** @returns {Product} */
declare function Product(): Product;
type Product = {
    name?: string;
    list_enabled?: boolean;
    category?: string;
    type?: string;
    supported_validations?: SupportedValidationsSchema[];
    scope?: string[];
};
/** @returns {CustomObjectEntry} */
declare function CustomObjectEntry(): CustomObjectEntry;
type CustomObjectEntry = {
    _id?: string;
    name?: string;
    type?: string;
    updated_at?: string;
    entries_count?: number;
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
    definition_id?: string;
};
/** @returns {CustomObjectRequestSchema} */
declare function CustomObjectRequestSchema(): CustomObjectRequestSchema;
type CustomObjectRequestSchema = {
    status?: string;
    slug?: string;
    definition_id?: string;
    fields?: CustomObjectEntryFieldSchema[];
};
/** @returns {CustomObjectBulkSchema} */
declare function CustomObjectBulkSchema(): CustomObjectBulkSchema;
type CustomObjectBulkSchema = {
    url?: string;
    total_records?: number;
};
