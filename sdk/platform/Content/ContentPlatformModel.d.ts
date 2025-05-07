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
 * @typedef BlogGetResponseSchema
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
 * @property {string} [status]
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
 * @typedef DefaultSitemapIndividualConfig
 * @property {boolean} [enabled] - Whether sitemap configuration is enabled or
 *   not for this sitemap configuration
 */
/**
 * @typedef DefaultSitemapConfig
 * @property {DefaultSitemapIndividualConfig} [root]
 * @property {DefaultSitemapIndividualConfig} [brand]
 * @property {DefaultSitemapIndividualConfig} [collections]
 * @property {DefaultSitemapIndividualConfig} [category_l1]
 * @property {DefaultSitemapIndividualConfig} [category_l2]
 * @property {DefaultSitemapIndividualConfig} [category_l3]
 * @property {DefaultSitemapIndividualConfig} [pages]
 * @property {DefaultSitemapIndividualConfig} [blog]
 * @property {DefaultSitemapIndividualConfig} [section]
 * @property {DefaultSitemapIndividualConfig} [faq]
 * @property {DefaultSitemapIndividualConfig} [sitemap]
 */
/**
 * @typedef SitemapConfigCreate
 * @property {string} [name] - Unique identifier for the sitemap configuration
 * @property {boolean} [is_active] - Indicates if the sitemap configuration is active
 * @property {string} [sitemap] - XML string containing sitemap data in base64 encoding
 */
/**
 * @typedef SitemapConfig
 * @property {string} [name] - Unique identifier for the sitemap configuration
 * @property {boolean} [is_active] - Indicates if the sitemap configuration is
 *   active or not in storefront
 * @property {string} [sitemap] - XML string containing sitemap data in base64 encoding
 * @property {string} [created_at] - Timestamp when the configuration was created
 * @property {string} [updated_at] - Timestamp when the configuration was last updated
 */
/**
 * @typedef SitemapConfigurationList
 * @property {SitemapConfig[]} [items] - List of all Sitemap configurations
 * @property {Page} [page]
 */
/**
 * @typedef SitemapConfigUpdate
 * @property {boolean} [is_active] - Indicates if the sitemap configuration is active
 * @property {string} [sitemap] - XML string containing sitemap data
 */
/**
 * @typedef BlogRequestSchema
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
 * @typedef TagDeleteSuccessResponseSchema
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
 * @property {number} [item_total] - The total number of items on the page.
 * @property {string} [next_id] - The identifier for the next page.
 * @property {boolean} [has_previous] - Indicates whether there is a previous page.
 * @property {boolean} [has_next] - Indicates whether there is a next page.
 * @property {number} [current] - The current page number.
 * @property {string} type - The type of the page, such as 'PageType'.
 * @property {number} [size] - The number of items per page.
 * @property {number} [total] - Total number of items.
 */
/**
 * @typedef LandingPageGetResponseSchema
 * @property {LandingPageSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef LandingPageSchema
 * @property {string} [slug]
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
 * @typedef DefaultNavigationResponseSchema
 * @property {NavigationSchema[]} [items]
 */
/**
 * @typedef NavigationGetResponseSchema
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
 * @property {string} [domain]
 * @property {string[]} [tags]
 * @property {number} [__v]
 */
/**
 * @typedef NavigationRequestSchema
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string[]} [platform]
 * @property {Orientation} [orientation]
 * @property {NavigationAssignment[]} [assignments]
 * @property {NavigationReference[]} [navigation]
 * @property {string} [domain]
 * @property {string[]} [tags]
 */
/**
 * @typedef NavigationAssignment
 * @property {string} [platform]
 * @property {string} [orientation]
 * @property {string} [position]
 */
/**
 * @typedef PageGetResponseSchema
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
 * @typedef PageRequestSchema
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
 * @property {Object} [visibility] - Visibility of Page.
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
 * @typedef PagePublishRequestSchema
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
 * @typedef FieldDefinitionSchema
 * @property {string} [resource]
 * @property {string} [name]
 * @property {string} [namespace]
 * @property {string} [slug]
 * @property {string} [description]
 * @property {string} [type]
 * @property {boolean} [multi_value]
 * @property {FieldValidations[]} [validations]
 * @property {string} [company_id]
 * @property {boolean} [required]
 * @property {boolean} [is_deleted]
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
 * @property {string} [slug]
 * @property {boolean} [multi_value]
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [creator]
 * @property {FieldValidations[]} [validations]
 */
/**
 * @typedef CustomObjectCustomFieldDefinitions
 * @property {string} [_id]
 * @property {string} type
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
 * @property {string} type
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
 * @typedef CustomFieldsResponseByResourceIdSchema
 * @property {CustomFieldSchema[]} [items]
 */
/**
 * @typedef CustomFieldRequestSchema
 * @property {Object[]} [fields]
 */
/**
 * @typedef CustomObjectSchema
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [creator]
 * @property {string} [company_id]
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
 * @property {string} [slug]
 * @property {string} [name]
 * @property {string} [display_name_key]
 * @property {CustomObjectCustomFieldDefinitions[]} [field_definitions]
 */
/**
 * @typedef CustomObjectDefinitionDeleteResponseSchema
 * @property {boolean} [success]
 * @property {string} [message]
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
 * @property {string} [type]
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
 * @typedef MetafieldTypesSchema
 * @property {CustomFieldTypeSchema} [metafield_types]
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
 * @property {string} [name]
 * @property {string} [type]
 * @property {string} [updated_at]
 * @property {number} [entries_count]
 * @property {number} [fields_count]
 * @property {string} [slug]
 */
/**
 * @typedef CustomObjectDefinitionsSchema
 * @property {CustomObjectEntry[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef CustomObjectBulkSchema
 * @property {string} [url]
 * @property {number} [total_records]
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
 * @typedef CustomObjectDefinitionSlugSchema
 * @property {string} [id] - Unique system generated custom object definition id
 * @property {string} [name] - Display name of custom object definition
 * @property {string} [type] - Type of custom object definiton
 * @property {string} [slug] - Slug of custom object definiton
 * @property {string} [display_name_key] - Display name of custom object definition
 * @property {string} [description] - Description of custom object definition
 * @property {CustomFieldDefinitionDetailResSchema[]} [field_definitions] -
 *   Custom fields inside custom objects
 */
/**
 * @typedef CustomObjectEntryFieldSchemaWithoutID
 * @property {string} [slug] - Custom fields belonging to a custom object
 */
/**
 * @typedef CustomObjectRequestSchemaWithoutId
 * @property {string} [slug]
 * @property {string} [status] - Status of the custom object entry.
 * @property {CustomObjectEntryFieldSchemaWithoutID[]} [fields] - List of custom fields
 */
/**
 * @typedef CustomObjectListItemDefinitionModel
 * @property {string} [id] - Unique system generated id
 * @property {string} [name] - Name of custom object
 * @property {string} [type] - Type of custom object entry
 */
/**
 * @typedef CustomObjectFieldDefinition
 * @property {string} [id] - Unique system generate id
 * @property {string} [slug] - Slug of custom field definition
 * @property {string} [namespace] - Namespace of custom field definition
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
 * @typedef CustomObjectEntryBulkUploadDetails
 * @property {string} [url] - Signed url of csv
 * @property {number} [total_records] - Total no of records in csv file
 * @property {string} [message]
 * @property {string} [task_id]
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
declare class ContentPlatformModel {
}
declare namespace ContentPlatformModel {
    export { GenerateSEOContent, GeneratedSEOContent, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, SeoSchemaComponent, SEOSchemaMarkupTemplate, SEOSchemaMarkupTemplateRequestBody, DeletPathMappingSchema, CreatePathMappingSchema, GetAllPathMappingSchema, GetPathSchema, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, DefaultSchemaComponent, DefaultSEOSchemaMarkupTemplate, ScheduleSchema, NextSchedule, BlogGetResponseSchema, BlogFilters, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, SEOMetaItem, SEOMetaItems, SEOSitemap, SEObreadcrumb, DateMeta, DefaultSitemapIndividualConfig, DefaultSitemapConfig, SitemapConfigCreate, SitemapConfig, SitemapConfigurationList, SitemapConfigUpdate, BlogRequestSchema, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderItemsResponseSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, LocaleLanguage, Language, Action, NavigationReference, AssignmentReference, CronBasedScheduleSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, TagSpecSchema, ServerSchema, DataLoadersApiSpecSchema, DataLoadersSchema, TagDeleteSuccessResponseSchema, ContentAPIError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, Page, LandingPageGetResponseSchema, LandingPageSchema, DefaultNavigationResponseSchema, NavigationGetResponseSchema, Orientation, NavigationSchema, NavigationRequestSchema, NavigationAssignment, PageGetResponseSchema, PageSpec, PageSpecParam, PageSpecItem, PageResponseError, PageSchema, SanitizedContent, PageMeta, PageContent, CreatedBySchema, PageRequestSchema, CronSchedule, PagePublishRequestSchema, PageMetaSchema, CustomePages, SystemPagesActionPage, SystemPagesAction, SystemPages, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, ResourcesSchema, ResourceSchema, FieldValidations, FieldDefinitionSchema, CustomFieldDefinitionsSchema, CustomFieldDefinitionRequestSchema, CustomObjectCustomFieldDefinitions, CustomObjectDefinitionUpdateRequestSchema, CustomFieldDefinitionDetailResSchema, CustomDataDeleteSchema, CustomFieldSchema, CustomFieldsResponseByResourceIdSchema, CustomFieldRequestSchema, CustomObjectSchema, CustomObjectDefinitionRequestSchema, CustomObjectDefinitionDeleteResponseSchema, CustomObjectListItemDefinationSchema, CustomObjectListItemSchema, CustomObjectsSchema, MetafieldTypesSchema, CustomObjectBulkEntryInitiateDownload, CustomObjectMetaSchema, JobSchema, CustomObjectBulkEntry, CustomFieldTypeSchema, SupportedValidationsSchema, Duration, HTML, StringSingleLine, StringMultiLine, Dropdown, Integer, FloatType, BooleanType, Date, Datetime, Json, File, Url, Metaobject, Product, CustomObjectEntry, CustomObjectDefinitionsSchema, CustomObjectBulkSchema, MetaFieldDefinitionDetailResSchema, CustomObjectDefinitionSlugSchema, CustomObjectEntryFieldSchemaWithoutID, CustomObjectRequestSchemaWithoutId, CustomObjectListItemDefinitionModel, CustomObjectFieldDefinition, CustomObjectBySlugSchema, CustomObjectEntryBulkUploadDetails, ActionPage, PageType };
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
/** @returns {BlogGetResponseSchema} */
declare function BlogGetResponseSchema(): BlogGetResponseSchema;
type BlogGetResponseSchema = {
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
    status?: string;
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
/** @returns {DefaultSitemapIndividualConfig} */
declare function DefaultSitemapIndividualConfig(): DefaultSitemapIndividualConfig;
type DefaultSitemapIndividualConfig = {
    /**
     * - Whether sitemap configuration is enabled or
     * not for this sitemap configuration
     */
    enabled?: boolean;
};
/** @returns {DefaultSitemapConfig} */
declare function DefaultSitemapConfig(): DefaultSitemapConfig;
type DefaultSitemapConfig = {
    root?: DefaultSitemapIndividualConfig;
    brand?: DefaultSitemapIndividualConfig;
    collections?: DefaultSitemapIndividualConfig;
    category_l1?: DefaultSitemapIndividualConfig;
    category_l2?: DefaultSitemapIndividualConfig;
    category_l3?: DefaultSitemapIndividualConfig;
    pages?: DefaultSitemapIndividualConfig;
    blog?: DefaultSitemapIndividualConfig;
    section?: DefaultSitemapIndividualConfig;
    faq?: DefaultSitemapIndividualConfig;
    sitemap?: DefaultSitemapIndividualConfig;
};
/** @returns {SitemapConfigCreate} */
declare function SitemapConfigCreate(): SitemapConfigCreate;
type SitemapConfigCreate = {
    /**
     * - Unique identifier for the sitemap configuration
     */
    name?: string;
    /**
     * - Indicates if the sitemap configuration is active
     */
    is_active?: boolean;
    /**
     * - XML string containing sitemap data in base64 encoding
     */
    sitemap?: string;
};
/** @returns {SitemapConfig} */
declare function SitemapConfig(): SitemapConfig;
type SitemapConfig = {
    /**
     * - Unique identifier for the sitemap configuration
     */
    name?: string;
    /**
     * - Indicates if the sitemap configuration is
     * active or not in storefront
     */
    is_active?: boolean;
    /**
     * - XML string containing sitemap data in base64 encoding
     */
    sitemap?: string;
    /**
     * - Timestamp when the configuration was created
     */
    created_at?: string;
    /**
     * - Timestamp when the configuration was last updated
     */
    updated_at?: string;
};
/** @returns {SitemapConfigurationList} */
declare function SitemapConfigurationList(): SitemapConfigurationList;
type SitemapConfigurationList = {
    /**
     * - List of all Sitemap configurations
     */
    items?: SitemapConfig[];
    page?: Page;
};
/** @returns {SitemapConfigUpdate} */
declare function SitemapConfigUpdate(): SitemapConfigUpdate;
type SitemapConfigUpdate = {
    /**
     * - Indicates if the sitemap configuration is active
     */
    is_active?: boolean;
    /**
     * - XML string containing sitemap data
     */
    sitemap?: string;
};
/** @returns {BlogRequestSchema} */
declare function BlogRequestSchema(): BlogRequestSchema;
type BlogRequestSchema = {
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
/** @returns {TagDeleteSuccessResponseSchema} */
declare function TagDeleteSuccessResponseSchema(): TagDeleteSuccessResponseSchema;
type TagDeleteSuccessResponseSchema = {
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
    /**
     * - Total number of items.
     */
    total?: number;
};
/** @returns {LandingPageGetResponseSchema} */
declare function LandingPageGetResponseSchema(): LandingPageGetResponseSchema;
type LandingPageGetResponseSchema = {
    items?: LandingPageSchema[];
    page?: Page;
};
/** @returns {LandingPageSchema} */
declare function LandingPageSchema(): LandingPageSchema;
type LandingPageSchema = {
    slug?: string;
    platform?: string[];
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    _id?: string;
    application?: string;
    archived?: boolean;
    _custom_json?: any;
    __v?: number;
};
/** @returns {DefaultNavigationResponseSchema} */
declare function DefaultNavigationResponseSchema(): DefaultNavigationResponseSchema;
type DefaultNavigationResponseSchema = {
    items?: NavigationSchema[];
};
/** @returns {NavigationGetResponseSchema} */
declare function NavigationGetResponseSchema(): NavigationGetResponseSchema;
type NavigationGetResponseSchema = {
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
    domain?: string;
    tags?: string[];
    __v?: number;
};
/** @returns {NavigationRequestSchema} */
declare function NavigationRequestSchema(): NavigationRequestSchema;
type NavigationRequestSchema = {
    name?: string;
    slug?: string;
    platform?: string[];
    orientation?: Orientation;
    assignments?: NavigationAssignment[];
    navigation?: NavigationReference[];
    domain?: string;
    tags?: string[];
};
/** @returns {NavigationAssignment} */
declare function NavigationAssignment(): NavigationAssignment;
type NavigationAssignment = {
    platform?: string;
    orientation?: string;
    position?: string;
};
/** @returns {PageGetResponseSchema} */
declare function PageGetResponseSchema(): PageGetResponseSchema;
type PageGetResponseSchema = {
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
/** @returns {PageRequestSchema} */
declare function PageRequestSchema(): PageRequestSchema;
type PageRequestSchema = {
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
    /**
     * - Visibility of Page.
     */
    visibility?: any;
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
/** @returns {PagePublishRequestSchema} */
declare function PagePublishRequestSchema(): PagePublishRequestSchema;
type PagePublishRequestSchema = {
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
/** @returns {FieldDefinitionSchema} */
declare function FieldDefinitionSchema(): FieldDefinitionSchema;
type FieldDefinitionSchema = {
    resource?: string;
    name?: string;
    namespace?: string;
    slug?: string;
    description?: string;
    type?: string;
    multi_value?: boolean;
    validations?: FieldValidations[];
    company_id?: string;
    required?: boolean;
    is_deleted?: boolean;
    type_name?: string;
    invalid_fields_count?: number;
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
    slug?: string;
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
    type: string;
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
    type: string;
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
/** @returns {CustomFieldsResponseByResourceIdSchema} */
declare function CustomFieldsResponseByResourceIdSchema(): CustomFieldsResponseByResourceIdSchema;
type CustomFieldsResponseByResourceIdSchema = {
    items?: CustomFieldSchema[];
};
/** @returns {CustomFieldRequestSchema} */
declare function CustomFieldRequestSchema(): CustomFieldRequestSchema;
type CustomFieldRequestSchema = {
    fields?: any[];
};
/** @returns {CustomObjectSchema} */
declare function CustomObjectSchema(): CustomObjectSchema;
type CustomObjectSchema = {
    id?: string;
    name?: string;
    creator?: string;
    company_id?: string;
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
    slug?: string;
    name?: string;
    display_name_key?: string;
    field_definitions?: CustomObjectCustomFieldDefinitions[];
};
/** @returns {CustomObjectDefinitionDeleteResponseSchema} */
declare function CustomObjectDefinitionDeleteResponseSchema(): CustomObjectDefinitionDeleteResponseSchema;
type CustomObjectDefinitionDeleteResponseSchema = {
    success?: boolean;
    message?: string;
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
    type?: string;
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
/** @returns {MetafieldTypesSchema} */
declare function MetafieldTypesSchema(): MetafieldTypesSchema;
type MetafieldTypesSchema = {
    metafield_types?: CustomFieldTypeSchema;
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
    name?: string;
    type?: string;
    updated_at?: string;
    entries_count?: number;
    fields_count?: number;
    slug?: string;
};
/** @returns {CustomObjectDefinitionsSchema} */
declare function CustomObjectDefinitionsSchema(): CustomObjectDefinitionsSchema;
type CustomObjectDefinitionsSchema = {
    items?: CustomObjectEntry[];
    page?: Page;
};
/** @returns {CustomObjectBulkSchema} */
declare function CustomObjectBulkSchema(): CustomObjectBulkSchema;
type CustomObjectBulkSchema = {
    url?: string;
    total_records?: number;
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
    slug?: string;
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
/** @returns {CustomObjectEntryFieldSchemaWithoutID} */
declare function CustomObjectEntryFieldSchemaWithoutID(): CustomObjectEntryFieldSchemaWithoutID;
type CustomObjectEntryFieldSchemaWithoutID = {
    /**
     * - Custom fields belonging to a custom object
     */
    slug?: string;
};
/** @returns {CustomObjectRequestSchemaWithoutId} */
declare function CustomObjectRequestSchemaWithoutId(): CustomObjectRequestSchemaWithoutId;
type CustomObjectRequestSchemaWithoutId = {
    slug?: string;
    /**
     * - Status of the custom object entry.
     */
    status?: string;
    /**
     * - List of custom fields
     */
    fields?: CustomObjectEntryFieldSchemaWithoutID[];
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
    message?: string;
    task_id?: string;
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
