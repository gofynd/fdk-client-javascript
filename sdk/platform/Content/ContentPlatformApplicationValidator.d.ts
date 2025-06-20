export = ContentPlatformApplicationValidator;
/**
 * @typedef AddApplicationLanguageParam
 * @property {ContentPlatformModel.ApplicationLanguageCreate} body
 */
/**
 * @typedef AddDataLoaderParam
 * @property {ContentPlatformModel.DataLoaderSchema} body
 */
/**
 * @typedef AddFaqParam
 * @property {string} categoryId - ID allotted to an FAQ category.
 * @property {ContentPlatformModel.CreateFaqSchema} body
 */
/**
 * @typedef AddInjectableTagParam
 * @property {ContentPlatformModel.CreateTagRequestSchema} body
 */
/**
 * @typedef AddPathRedirectionRulesParam
 * @property {ContentPlatformModel.PathMappingSchema} body
 */
/**
 * @typedef BulkUnPublishApplicationLanguageParam
 * @property {ContentPlatformModel.unPublishApplicationLanguage} body
 */
/**
 * @typedef CreateAnnouncementParam
 * @property {ContentPlatformModel.AdminAnnouncementSchema} body
 */
/**
 * @typedef CreateAppCustomFieldDefinitionParam
 * @property {string} resource
 * @property {ContentPlatformModel.CustomFieldDefinitionRequestSchema} body
 */
/**
 * @typedef CreateAppCustomObjectBySlugParam
 * @property {string} definitionSlug
 * @property {ContentPlatformModel.CustomObjectRequestSchemaWithoutId} body
 */
/**
 * @typedef CreateAppCustomObjectDefinitionParam
 * @property {ContentPlatformModel.CustomObjectDefinitionRequestSchema} body
 */
/**
 * @typedef CreateApplicationResourceTranslationParam
 * @property {ContentPlatformModel.ResourceTranslationCreate} body
 */
/**
 * @typedef CreateBlogParam
 * @property {ContentPlatformModel.BlogPayload} body
 */
/**
 * @typedef CreateFaqCategoryParam
 * @property {ContentPlatformModel.CreateFaqCategoryRequestSchema} body
 */
/**
 * @typedef CreateLandingPageParam
 * @property {ContentPlatformModel.LandingPageSchema} body
 */
/**
 * @typedef CreateNavigationParam
 * @property {ContentPlatformModel.NavigationPayload} body
 */
/**
 * @typedef CreatePageParam
 * @property {ContentPlatformModel.PagePayload} body
 */
/**
 * @typedef CreateSEOMarkupSchemaParam
 * @property {ContentPlatformModel.SEOSchemaMarkupTemplateRequestBody} body
 */
/**
 * @typedef CreateTranslateUILabelsParam
 * @property {ContentPlatformModel.TranslateUiLabelsCreate} body
 */
/**
 * @typedef DeleteAnnouncementParam
 * @property {string} announcementId - ID allotted to the announcement.
 */
/**
 * @typedef DeleteAppCustomFieldDefinitionBySlugParam
 * @property {string} slug
 * @property {string} resource
 * @property {string} namespace
 */
/**
 * @typedef DeleteAppCustomObjectBySlugParam
 * @property {string} definitionSlug
 * @property {string} slug
 */
/**
 * @typedef DeleteAppCustomObjectDefinitionBySlugParam
 * @property {string} slug
 */
/**
 * @typedef DeleteApplicationLanguageParam
 * @property {string} locale
 */
/**
 * @typedef DeleteApplicationResourceTranslationParam
 * @property {string} id
 */
/**
 * @typedef DeleteBlogParam
 * @property {string} id - ID allotted to the blog.
 */
/**
 * @typedef DeleteDataLoaderParam
 * @property {string} dataLoaderId - ID allotted to the data loader.
 */
/**
 * @typedef DeleteFaqParam
 * @property {string} categoryId - ID allotted to an FAQ category.
 * @property {string} faqId - ID allotted to an FAQ.
 */
/**
 * @typedef DeleteFaqCategoryParam
 * @property {string} id - ID allotted to an FAQ category.
 */
/**
 * @typedef DeleteLandingPageParam
 * @property {string} id - ID allotted to a landing page.
 */
/**
 * @typedef DeleteNavigationParam
 * @property {string} id - ID allotted to the navigation.
 */
/**
 * @typedef DeletePageParam
 * @property {string} id - ID allotted to the page.
 */
/**
 * @typedef DeletePathRedirectionRulesParam
 * @property {string} pathId - ID allotted to the path redirection rule.
 */
/**
 * @typedef DeleteSEOMarkupSchemaParam
 * @property {string} id - Alphanumeric ID allotted to a SEO Markup Schema
 *   Template created within a business.
 */
/**
 * @typedef EditDataLoaderParam
 * @property {string} dataLoaderId - ID allotted to the data loader.
 * @property {ContentPlatformModel.DataLoaderSchema} body
 */
/**
 * @typedef EditInjectableTagParam
 * @property {string} tagId - ID allotted to the tag.
 * @property {ContentPlatformModel.UpdateHandpickedSchema} body
 */
/**
 * @typedef EditSEOMarkupSchemaParam
 * @property {string} id - Alphanumeric ID allotted to a SEO Markup Schema
 *   Template created within a business.
 * @property {ContentPlatformModel.SEOSchemaMarkupTemplateRequestBody} body
 */
/**
 * @typedef ExportAppCustomObjectEntriesBySlugParam
 * @property {string} slug
 */
/**
 * @typedef GenerateSEOTitleParam
 * @property {ContentPlatformModel.GenerationEntityType} type - String
 *   representing the type of SEO content to be generated. Possible values are:
 *   title, description
 * @property {ContentPlatformModel.GenerateSEOContent} body
 */
/**
 * @typedef GetAnnouncementByIdParam
 * @property {string} announcementId - ID allotted to the announcement.
 */
/**
 * @typedef GetAnnouncementsListParam
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 */
/**
 * @typedef GetAppCustomFieldDefinitionByResourceParam
 * @property {string} pageNo
 * @property {string} pageSize
 * @property {string} resource
 * @property {string} [types]
 * @property {string} [search]
 * @property {string} [slugs]
 * @property {string} [namespaces]
 */
/**
 * @typedef GetAppCustomFieldDefinitionBySlugParam
 * @property {string} slug
 * @property {string} resource
 * @property {string} namespace
 */
/**
 * @typedef GetAppCustomFieldDefinitionsParam
 * @property {string} pageNo
 * @property {string} pageSize
 * @property {string} [resources]
 * @property {string} [types]
 * @property {string} [search]
 * @property {string} [slugs]
 * @property {string} [namespaces]
 */
/** @typedef GetAppCustomFieldTypesParam */
/**
 * @typedef GetAppCustomFieldsByResourceSlugParam
 * @property {string} resource
 * @property {string} resourceSlug
 */
/**
 * @typedef GetAppCustomObjectBySlugParam
 * @property {string} definitionSlug
 * @property {string} slug
 */
/**
 * @typedef GetAppCustomObjectDefinitionBySlugParam
 * @property {string} slug
 */
/**
 * @typedef GetAppCustomObjectDefinitionsParam
 * @property {string} pageNo
 * @property {string} pageSize
 * @property {string} [search]
 */
/**
 * @typedef GetAppCustomObjectsBySlugParam
 * @property {string} pageNo
 * @property {string} pageSize
 * @property {string} definitionSlug
 */
/**
 * @typedef GetAppJobsParam
 * @property {string} page
 * @property {string} pageSize
 * @property {string} actionType
 */
/** @typedef GetAppResourcesParam */
/** @typedef GetApplicationLanguagesParam */
/**
 * @typedef GetApplicationResourceTranslationsParam
 * @property {string} locale
 * @property {string} type
 * @property {string} resourceId
 */
/**
 * @typedef GetBlogBySlugParam
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   a blog page. You can get slug value of a blog from `getBlogs` API.
 */
/**
 * @typedef GetBlogsParam
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 * @property {string} [tags] - Blogs retrieve based on the list of tags passed.
 * @property {string} [q] - Blogs retrieve based on the title or slug passed.
 * @property {string} [slug] - Blogs retrieve based on the slug passed.
 * @property {string} [title] - Blogs retrieve based on the title passed.
 * @property {string} [status] - Blogs retrieve based on the status passed.
 */
/** @typedef GetDataLoadersParam */
/**
 * @typedef GetDataLoadersByServiceParam
 * @property {string} serviceName - Service name of the data loader..
 */
/** @typedef GetDefaultNavigationsParam */
/**
 * @typedef GetDefaultSEOMarkupSchemaParam
 * @property {string} [pageType] - The type of page against which schema
 *   template was created
 */
/**
 * @typedef GetFaqByIdOrSlugParam
 * @property {string} idOrSlug - ID or the slug allotted to an FAQ category.
 *   Slug is a short, human-readable, URL-friendly identifier of an object. You
 *   can get slug value of an FAQ category from `getFaqCategories` API.
 */
/** @typedef GetFaqCategoriesParam */
/**
 * @typedef GetFaqCategoryBySlugOrIdParam
 * @property {string} idOrSlug - ID or the slug allotted to an FAQ category.
 *   Slug is a short, human-readable, URL-friendly identifier of an object. You
 *   can get slug value of an FAQ category from `getFaqCategories` API.
 */
/**
 * @typedef GetFaqsByCategoryIdOrSlugParam
 * @property {string} idOrSlug - ID or the slug allotted to an FAQ category.
 *   Slug is a short, human-readable, URL-friendly identifier of an object. You
 *   can get slug value of an FAQ category from `getFaqCategories` API.
 */
/**
 * @typedef GetInjectableTagsParam
 * @property {boolean} [all] - Get all tags irrespective of the creator of tags
 */
/**
 * @typedef GetLandingPagesParam
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 */
/** @typedef GetLegalInformationParam */
/**
 * @typedef GetNavigationBySlugParam
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   a navigation. You can get slug value of a navigation from `getNavigations` API.
 * @property {string} [devicePlatform] - Filter navigations by platform.
 *   Acceptable values are: web, android, ios.
 */
/**
 * @typedef GetNavigationsParam
 * @property {string} devicePlatform - Filter navigations by platform.
 *   Acceptable values are: web, android, ios, all
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 */
/**
 * @typedef GetPageBySlugParam
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   a page. You can get slug value of a page from `getPages` API.
 */
/** @typedef GetPageMetaParam */
/** @typedef GetPageSpecParam */
/**
 * @typedef GetPagesParam
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 */
/**
 * @typedef GetPathRedirectionRuleParam
 * @property {string} pathId - ID allotted to the path redirection rule.
 */
/**
 * @typedef GetPathRedirectionRulesParam
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 5.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 */
/** @typedef GetSEOConfigurationParam */
/**
 * @typedef GetSEOMarkupSchemaParam
 * @property {string} id - Alphanumeric ID allotted to a SEO Markup Schema
 *   Template created within a business.
 */
/**
 * @typedef GetSEOMarkupSchemasParam
 * @property {string} [title] - Title of the seo schema.
 * @property {string} [active] - Boolean value for fetching seo schema.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 */
/** @typedef GetSupportInformationParam */
/**
 * @typedef GetTranslateUILabelsParam
 * @property {string} [templateThemeId] - Unique id of template theme
 * @property {string} [themeId] - Unique id of theme
 * @property {string} [locale] - Multilingual locale
 * @property {string} [type] - Filter Translate Ui Labels by type
 */
/**
 * @typedef GetTranslateUILabelsByIdParam
 * @property {string} id - ID of the Translate Ui Labels
 */
/**
 * @typedef ImportAppCustomObjectEntriesBySlugParam
 * @property {string} slug
 * @property {ContentPlatformModel.CustomObjectBulkSchema} body
 */
/**
 * @typedef RemoveInjectableTagParam
 * @property {ContentPlatformModel.RemoveHandpickedSchema} body
 */
/**
 * @typedef ResetDataLoaderParam
 * @property {string} service - Name of service.
 * @property {string} operationId - Name of operation id of the service.
 */
/**
 * @typedef SampleAppCustomObjectBulkEntryBySlugParam
 * @property {string} slug
 */
/**
 * @typedef SelectDataLoaderParam
 * @property {string} dataLoaderId - ID allotted to the data loader.
 */
/**
 * @typedef UpdateAnnouncementParam
 * @property {string} announcementId - ID allotted to the announcement.
 * @property {ContentPlatformModel.AdminAnnouncementSchema} body
 */
/**
 * @typedef UpdateAnnouncementScheduleParam
 * @property {string} announcementId - ID allotted to the announcement.
 * @property {ContentPlatformModel.ScheduleSchema} body
 */
/**
 * @typedef UpdateAppCustomFieldByResourceSlugParam
 * @property {string} resource
 * @property {string} resourceSlug
 * @property {ContentPlatformModel.CustomFieldRequestSchema} body
 */
/**
 * @typedef UpdateAppCustomFieldDefinitionBySlugParam
 * @property {string} slug
 * @property {string} resource
 * @property {string} namespace
 * @property {ContentPlatformModel.CustomFieldDefinitionRequestSchema} body
 */
/**
 * @typedef UpdateAppCustomObjectBySlugParam
 * @property {string} definitionSlug
 * @property {string} slug
 * @property {ContentPlatformModel.CustomObjectRequestSchemaWithoutId} body
 */
/**
 * @typedef UpdateAppCustomObjectDefinitionBySlugParam
 * @property {string} slug
 * @property {ContentPlatformModel.CustomObjectDefinitionUpdateRequestSchema} body
 */
/**
 * @typedef UpdateApplicationLanguageStatusParam
 * @property {string} locale
 * @property {ContentPlatformModel.ApplicationLanguageUpdate} body
 */
/**
 * @typedef UpdateApplicationResourceTranslationParam
 * @property {string} id
 * @property {ContentPlatformModel.ResourceTranslationUpdate} body
 */
/**
 * @typedef UpdateBlogParam
 * @property {string} id - ID allotted to the blog.
 * @property {ContentPlatformModel.BlogPayload} body
 */
/**
 * @typedef UpdateFaqParam
 * @property {string} categoryId - ID allotted to an FAQ category.
 * @property {string} faqId - ID allotted to an FAQ.
 * @property {ContentPlatformModel.CreateFaqSchema} body
 */
/**
 * @typedef UpdateFaqCategoryParam
 * @property {string} id - ID allotted to an FAQ category.
 * @property {ContentPlatformModel.UpdateFaqCategoryRequestSchema} body
 */
/**
 * @typedef UpdateInjectableTagParam
 * @property {ContentPlatformModel.CreateTagRequestSchema} body
 */
/**
 * @typedef UpdateLandingPageParam
 * @property {string} id - ID allotted to a landing page.
 * @property {ContentPlatformModel.LandingPageSchema} body
 */
/**
 * @typedef UpdateLegalInformationParam
 * @property {ContentPlatformModel.ApplicationLegal} body
 */
/**
 * @typedef UpdateNavigationParam
 * @property {string} id - ID allotted to the navigation.
 * @property {ContentPlatformModel.NavigationPayload} body
 */
/**
 * @typedef UpdatePageParam
 * @property {string} id - ID allotted to the page.
 * @property {ContentPlatformModel.PageSchema} body
 */
/**
 * @typedef UpdatePagePreviewParam
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   a page. You can get slug value of a page from `getPages` API.
 * @property {ContentPlatformModel.PagePublishPayload} body
 */
/**
 * @typedef UpdatePathRedirectionRulesParam
 * @property {string} pathId - ID allotted to the path redirection rule.
 * @property {ContentPlatformModel.PathMappingSchema} body
 */
/**
 * @typedef UpdateSEOConfigurationParam
 * @property {ContentPlatformModel.SeoComponent} body
 */
/**
 * @typedef UpdateSupportInformationParam
 * @property {ContentPlatformModel.Support} body
 */
/**
 * @typedef UpdateTranslateUILabelsParam
 * @property {string} id - The unique identifier of the Translate Ui Labels to update
 * @property {ContentPlatformModel.StaticResourceUpdate} body
 */
/**
 * @typedef UpsertApplicationResourceTranslationInBulkParam
 * @property {ContentPlatformModel.ResourceTranslationList} body
 */
declare class ContentPlatformApplicationValidator {
    /** @returns {AddApplicationLanguageParam} */
    static addApplicationLanguage(): AddApplicationLanguageParam;
    /** @returns {AddDataLoaderParam} */
    static addDataLoader(): AddDataLoaderParam;
    /** @returns {AddFaqParam} */
    static addFaq(): AddFaqParam;
    /** @returns {AddInjectableTagParam} */
    static addInjectableTag(): AddInjectableTagParam;
    /** @returns {AddPathRedirectionRulesParam} */
    static addPathRedirectionRules(): AddPathRedirectionRulesParam;
    /** @returns {BulkUnPublishApplicationLanguageParam} */
    static bulkUnPublishApplicationLanguage(): BulkUnPublishApplicationLanguageParam;
    /** @returns {CreateAnnouncementParam} */
    static createAnnouncement(): CreateAnnouncementParam;
    /** @returns {CreateAppCustomFieldDefinitionParam} */
    static createAppCustomFieldDefinition(): CreateAppCustomFieldDefinitionParam;
    /** @returns {CreateAppCustomObjectBySlugParam} */
    static createAppCustomObjectBySlug(): CreateAppCustomObjectBySlugParam;
    /** @returns {CreateAppCustomObjectDefinitionParam} */
    static createAppCustomObjectDefinition(): CreateAppCustomObjectDefinitionParam;
    /** @returns {CreateApplicationResourceTranslationParam} */
    static createApplicationResourceTranslation(): CreateApplicationResourceTranslationParam;
    /** @returns {CreateBlogParam} */
    static createBlog(): CreateBlogParam;
    /** @returns {CreateFaqCategoryParam} */
    static createFaqCategory(): CreateFaqCategoryParam;
    /** @returns {CreateLandingPageParam} */
    static createLandingPage(): CreateLandingPageParam;
    /** @returns {CreateNavigationParam} */
    static createNavigation(): CreateNavigationParam;
    /** @returns {CreatePageParam} */
    static createPage(): CreatePageParam;
    /** @returns {CreateSEOMarkupSchemaParam} */
    static createSEOMarkupSchema(): CreateSEOMarkupSchemaParam;
    /** @returns {CreateTranslateUILabelsParam} */
    static createTranslateUILabels(): CreateTranslateUILabelsParam;
    /** @returns {DeleteAnnouncementParam} */
    static deleteAnnouncement(): DeleteAnnouncementParam;
    /** @returns {DeleteAppCustomFieldDefinitionBySlugParam} */
    static deleteAppCustomFieldDefinitionBySlug(): DeleteAppCustomFieldDefinitionBySlugParam;
    /** @returns {DeleteAppCustomObjectBySlugParam} */
    static deleteAppCustomObjectBySlug(): DeleteAppCustomObjectBySlugParam;
    /** @returns {DeleteAppCustomObjectDefinitionBySlugParam} */
    static deleteAppCustomObjectDefinitionBySlug(): DeleteAppCustomObjectDefinitionBySlugParam;
    /** @returns {DeleteApplicationLanguageParam} */
    static deleteApplicationLanguage(): DeleteApplicationLanguageParam;
    /** @returns {DeleteApplicationResourceTranslationParam} */
    static deleteApplicationResourceTranslation(): DeleteApplicationResourceTranslationParam;
    /** @returns {DeleteBlogParam} */
    static deleteBlog(): DeleteBlogParam;
    /** @returns {DeleteDataLoaderParam} */
    static deleteDataLoader(): DeleteDataLoaderParam;
    /** @returns {DeleteFaqParam} */
    static deleteFaq(): DeleteFaqParam;
    /** @returns {DeleteFaqCategoryParam} */
    static deleteFaqCategory(): DeleteFaqCategoryParam;
    /** @returns {DeleteLandingPageParam} */
    static deleteLandingPage(): DeleteLandingPageParam;
    /** @returns {DeleteNavigationParam} */
    static deleteNavigation(): DeleteNavigationParam;
    /** @returns {DeletePageParam} */
    static deletePage(): DeletePageParam;
    /** @returns {DeletePathRedirectionRulesParam} */
    static deletePathRedirectionRules(): DeletePathRedirectionRulesParam;
    /** @returns {DeleteSEOMarkupSchemaParam} */
    static deleteSEOMarkupSchema(): DeleteSEOMarkupSchemaParam;
    /** @returns {EditDataLoaderParam} */
    static editDataLoader(): EditDataLoaderParam;
    /** @returns {EditInjectableTagParam} */
    static editInjectableTag(): EditInjectableTagParam;
    /** @returns {EditSEOMarkupSchemaParam} */
    static editSEOMarkupSchema(): EditSEOMarkupSchemaParam;
    /** @returns {ExportAppCustomObjectEntriesBySlugParam} */
    static exportAppCustomObjectEntriesBySlug(): ExportAppCustomObjectEntriesBySlugParam;
    /** @returns {GenerateSEOTitleParam} */
    static generateSEOTitle(): GenerateSEOTitleParam;
    /** @returns {GetAnnouncementByIdParam} */
    static getAnnouncementById(): GetAnnouncementByIdParam;
    /** @returns {GetAnnouncementsListParam} */
    static getAnnouncementsList(): GetAnnouncementsListParam;
    /** @returns {GetAppCustomFieldDefinitionByResourceParam} */
    static getAppCustomFieldDefinitionByResource(): GetAppCustomFieldDefinitionByResourceParam;
    /** @returns {GetAppCustomFieldDefinitionBySlugParam} */
    static getAppCustomFieldDefinitionBySlug(): GetAppCustomFieldDefinitionBySlugParam;
    /** @returns {GetAppCustomFieldDefinitionsParam} */
    static getAppCustomFieldDefinitions(): GetAppCustomFieldDefinitionsParam;
    /** @returns {GetAppCustomFieldTypesParam} */
    static getAppCustomFieldTypes(): any;
    /** @returns {GetAppCustomFieldsByResourceSlugParam} */
    static getAppCustomFieldsByResourceSlug(): GetAppCustomFieldsByResourceSlugParam;
    /** @returns {GetAppCustomObjectBySlugParam} */
    static getAppCustomObjectBySlug(): GetAppCustomObjectBySlugParam;
    /** @returns {GetAppCustomObjectDefinitionBySlugParam} */
    static getAppCustomObjectDefinitionBySlug(): GetAppCustomObjectDefinitionBySlugParam;
    /** @returns {GetAppCustomObjectDefinitionsParam} */
    static getAppCustomObjectDefinitions(): GetAppCustomObjectDefinitionsParam;
    /** @returns {GetAppCustomObjectsBySlugParam} */
    static getAppCustomObjectsBySlug(): GetAppCustomObjectsBySlugParam;
    /** @returns {GetAppJobsParam} */
    static getAppJobs(): GetAppJobsParam;
    /** @returns {GetAppResourcesParam} */
    static getAppResources(): any;
    /** @returns {GetApplicationLanguagesParam} */
    static getApplicationLanguages(): any;
    /** @returns {GetApplicationResourceTranslationsParam} */
    static getApplicationResourceTranslations(): GetApplicationResourceTranslationsParam;
    /** @returns {GetBlogBySlugParam} */
    static getBlogBySlug(): GetBlogBySlugParam;
    /** @returns {GetBlogsParam} */
    static getBlogs(): GetBlogsParam;
    /** @returns {GetDataLoadersParam} */
    static getDataLoaders(): any;
    /** @returns {GetDataLoadersByServiceParam} */
    static getDataLoadersByService(): GetDataLoadersByServiceParam;
    /** @returns {GetDefaultNavigationsParam} */
    static getDefaultNavigations(): any;
    /** @returns {GetDefaultSEOMarkupSchemaParam} */
    static getDefaultSEOMarkupSchema(): GetDefaultSEOMarkupSchemaParam;
    /** @returns {GetFaqByIdOrSlugParam} */
    static getFaqByIdOrSlug(): GetFaqByIdOrSlugParam;
    /** @returns {GetFaqCategoriesParam} */
    static getFaqCategories(): any;
    /** @returns {GetFaqCategoryBySlugOrIdParam} */
    static getFaqCategoryBySlugOrId(): GetFaqCategoryBySlugOrIdParam;
    /** @returns {GetFaqsByCategoryIdOrSlugParam} */
    static getFaqsByCategoryIdOrSlug(): GetFaqsByCategoryIdOrSlugParam;
    /** @returns {GetInjectableTagsParam} */
    static getInjectableTags(): GetInjectableTagsParam;
    /** @returns {GetLandingPagesParam} */
    static getLandingPages(): GetLandingPagesParam;
    /** @returns {GetLegalInformationParam} */
    static getLegalInformation(): any;
    /** @returns {GetNavigationBySlugParam} */
    static getNavigationBySlug(): GetNavigationBySlugParam;
    /** @returns {GetNavigationsParam} */
    static getNavigations(): GetNavigationsParam;
    /** @returns {GetPageBySlugParam} */
    static getPageBySlug(): GetPageBySlugParam;
    /** @returns {GetPageMetaParam} */
    static getPageMeta(): any;
    /** @returns {GetPageSpecParam} */
    static getPageSpec(): any;
    /** @returns {GetPagesParam} */
    static getPages(): GetPagesParam;
    /** @returns {GetPathRedirectionRuleParam} */
    static getPathRedirectionRule(): GetPathRedirectionRuleParam;
    /** @returns {GetPathRedirectionRulesParam} */
    static getPathRedirectionRules(): GetPathRedirectionRulesParam;
    /** @returns {GetSEOConfigurationParam} */
    static getSEOConfiguration(): any;
    /** @returns {GetSEOMarkupSchemaParam} */
    static getSEOMarkupSchema(): GetSEOMarkupSchemaParam;
    /** @returns {GetSEOMarkupSchemasParam} */
    static getSEOMarkupSchemas(): GetSEOMarkupSchemasParam;
    /** @returns {GetSupportInformationParam} */
    static getSupportInformation(): any;
    /** @returns {GetTranslateUILabelsParam} */
    static getTranslateUILabels(): GetTranslateUILabelsParam;
    /** @returns {GetTranslateUILabelsByIdParam} */
    static getTranslateUILabelsById(): GetTranslateUILabelsByIdParam;
    /** @returns {ImportAppCustomObjectEntriesBySlugParam} */
    static importAppCustomObjectEntriesBySlug(): ImportAppCustomObjectEntriesBySlugParam;
    /** @returns {RemoveInjectableTagParam} */
    static removeInjectableTag(): RemoveInjectableTagParam;
    /** @returns {ResetDataLoaderParam} */
    static resetDataLoader(): ResetDataLoaderParam;
    /** @returns {SampleAppCustomObjectBulkEntryBySlugParam} */
    static sampleAppCustomObjectBulkEntryBySlug(): SampleAppCustomObjectBulkEntryBySlugParam;
    /** @returns {SelectDataLoaderParam} */
    static selectDataLoader(): SelectDataLoaderParam;
    /** @returns {UpdateAnnouncementParam} */
    static updateAnnouncement(): UpdateAnnouncementParam;
    /** @returns {UpdateAnnouncementScheduleParam} */
    static updateAnnouncementSchedule(): UpdateAnnouncementScheduleParam;
    /** @returns {UpdateAppCustomFieldByResourceSlugParam} */
    static updateAppCustomFieldByResourceSlug(): UpdateAppCustomFieldByResourceSlugParam;
    /** @returns {UpdateAppCustomFieldDefinitionBySlugParam} */
    static updateAppCustomFieldDefinitionBySlug(): UpdateAppCustomFieldDefinitionBySlugParam;
    /** @returns {UpdateAppCustomObjectBySlugParam} */
    static updateAppCustomObjectBySlug(): UpdateAppCustomObjectBySlugParam;
    /** @returns {UpdateAppCustomObjectDefinitionBySlugParam} */
    static updateAppCustomObjectDefinitionBySlug(): UpdateAppCustomObjectDefinitionBySlugParam;
    /** @returns {UpdateApplicationLanguageStatusParam} */
    static updateApplicationLanguageStatus(): UpdateApplicationLanguageStatusParam;
    /** @returns {UpdateApplicationResourceTranslationParam} */
    static updateApplicationResourceTranslation(): UpdateApplicationResourceTranslationParam;
    /** @returns {UpdateBlogParam} */
    static updateBlog(): UpdateBlogParam;
    /** @returns {UpdateFaqParam} */
    static updateFaq(): UpdateFaqParam;
    /** @returns {UpdateFaqCategoryParam} */
    static updateFaqCategory(): UpdateFaqCategoryParam;
    /** @returns {UpdateInjectableTagParam} */
    static updateInjectableTag(): UpdateInjectableTagParam;
    /** @returns {UpdateLandingPageParam} */
    static updateLandingPage(): UpdateLandingPageParam;
    /** @returns {UpdateLegalInformationParam} */
    static updateLegalInformation(): UpdateLegalInformationParam;
    /** @returns {UpdateNavigationParam} */
    static updateNavigation(): UpdateNavigationParam;
    /** @returns {UpdatePageParam} */
    static updatePage(): UpdatePageParam;
    /** @returns {UpdatePagePreviewParam} */
    static updatePagePreview(): UpdatePagePreviewParam;
    /** @returns {UpdatePathRedirectionRulesParam} */
    static updatePathRedirectionRules(): UpdatePathRedirectionRulesParam;
    /** @returns {UpdateSEOConfigurationParam} */
    static updateSEOConfiguration(): UpdateSEOConfigurationParam;
    /** @returns {UpdateSupportInformationParam} */
    static updateSupportInformation(): UpdateSupportInformationParam;
    /** @returns {UpdateTranslateUILabelsParam} */
    static updateTranslateUILabels(): UpdateTranslateUILabelsParam;
    /** @returns {UpsertApplicationResourceTranslationInBulkParam} */
    static upsertApplicationResourceTranslationInBulk(): UpsertApplicationResourceTranslationInBulkParam;
}
declare namespace ContentPlatformApplicationValidator {
    export { AddApplicationLanguageParam, AddDataLoaderParam, AddFaqParam, AddInjectableTagParam, AddPathRedirectionRulesParam, BulkUnPublishApplicationLanguageParam, CreateAnnouncementParam, CreateAppCustomFieldDefinitionParam, CreateAppCustomObjectBySlugParam, CreateAppCustomObjectDefinitionParam, CreateApplicationResourceTranslationParam, CreateBlogParam, CreateFaqCategoryParam, CreateLandingPageParam, CreateNavigationParam, CreatePageParam, CreateSEOMarkupSchemaParam, CreateTranslateUILabelsParam, DeleteAnnouncementParam, DeleteAppCustomFieldDefinitionBySlugParam, DeleteAppCustomObjectBySlugParam, DeleteAppCustomObjectDefinitionBySlugParam, DeleteApplicationLanguageParam, DeleteApplicationResourceTranslationParam, DeleteBlogParam, DeleteDataLoaderParam, DeleteFaqParam, DeleteFaqCategoryParam, DeleteLandingPageParam, DeleteNavigationParam, DeletePageParam, DeletePathRedirectionRulesParam, DeleteSEOMarkupSchemaParam, EditDataLoaderParam, EditInjectableTagParam, EditSEOMarkupSchemaParam, ExportAppCustomObjectEntriesBySlugParam, GenerateSEOTitleParam, GetAnnouncementByIdParam, GetAnnouncementsListParam, GetAppCustomFieldDefinitionByResourceParam, GetAppCustomFieldDefinitionBySlugParam, GetAppCustomFieldDefinitionsParam, GetAppCustomFieldTypesParam, GetAppCustomFieldsByResourceSlugParam, GetAppCustomObjectBySlugParam, GetAppCustomObjectDefinitionBySlugParam, GetAppCustomObjectDefinitionsParam, GetAppCustomObjectsBySlugParam, GetAppJobsParam, GetAppResourcesParam, GetApplicationLanguagesParam, GetApplicationResourceTranslationsParam, GetBlogBySlugParam, GetBlogsParam, GetDataLoadersParam, GetDataLoadersByServiceParam, GetDefaultNavigationsParam, GetDefaultSEOMarkupSchemaParam, GetFaqByIdOrSlugParam, GetFaqCategoriesParam, GetFaqCategoryBySlugOrIdParam, GetFaqsByCategoryIdOrSlugParam, GetInjectableTagsParam, GetLandingPagesParam, GetLegalInformationParam, GetNavigationBySlugParam, GetNavigationsParam, GetPageBySlugParam, GetPageMetaParam, GetPageSpecParam, GetPagesParam, GetPathRedirectionRuleParam, GetPathRedirectionRulesParam, GetSEOConfigurationParam, GetSEOMarkupSchemaParam, GetSEOMarkupSchemasParam, GetSupportInformationParam, GetTranslateUILabelsParam, GetTranslateUILabelsByIdParam, ImportAppCustomObjectEntriesBySlugParam, RemoveInjectableTagParam, ResetDataLoaderParam, SampleAppCustomObjectBulkEntryBySlugParam, SelectDataLoaderParam, UpdateAnnouncementParam, UpdateAnnouncementScheduleParam, UpdateAppCustomFieldByResourceSlugParam, UpdateAppCustomFieldDefinitionBySlugParam, UpdateAppCustomObjectBySlugParam, UpdateAppCustomObjectDefinitionBySlugParam, UpdateApplicationLanguageStatusParam, UpdateApplicationResourceTranslationParam, UpdateBlogParam, UpdateFaqParam, UpdateFaqCategoryParam, UpdateInjectableTagParam, UpdateLandingPageParam, UpdateLegalInformationParam, UpdateNavigationParam, UpdatePageParam, UpdatePagePreviewParam, UpdatePathRedirectionRulesParam, UpdateSEOConfigurationParam, UpdateSupportInformationParam, UpdateTranslateUILabelsParam, UpsertApplicationResourceTranslationInBulkParam };
}
type AddApplicationLanguageParam = {
    body: ContentPlatformModel.ApplicationLanguageCreate;
};
type AddDataLoaderParam = {
    body: ContentPlatformModel.DataLoaderSchema;
};
type AddFaqParam = {
    /**
     * - ID allotted to an FAQ category.
     */
    categoryId: string;
    body: ContentPlatformModel.CreateFaqSchema;
};
type AddInjectableTagParam = {
    body: ContentPlatformModel.CreateTagRequestSchema;
};
type AddPathRedirectionRulesParam = {
    body: ContentPlatformModel.PathMappingSchema;
};
type BulkUnPublishApplicationLanguageParam = {
    body: ContentPlatformModel.unPublishApplicationLanguage;
};
type CreateAnnouncementParam = {
    body: ContentPlatformModel.AdminAnnouncementSchema;
};
type CreateAppCustomFieldDefinitionParam = {
    resource: string;
    body: ContentPlatformModel.CustomFieldDefinitionRequestSchema;
};
type CreateAppCustomObjectBySlugParam = {
    definitionSlug: string;
    body: ContentPlatformModel.CustomObjectRequestSchemaWithoutId;
};
type CreateAppCustomObjectDefinitionParam = {
    body: ContentPlatformModel.CustomObjectDefinitionRequestSchema;
};
type CreateApplicationResourceTranslationParam = {
    body: ContentPlatformModel.ResourceTranslationCreate;
};
type CreateBlogParam = {
    body: ContentPlatformModel.BlogPayload;
};
type CreateFaqCategoryParam = {
    body: ContentPlatformModel.CreateFaqCategoryRequestSchema;
};
type CreateLandingPageParam = {
    body: ContentPlatformModel.LandingPageSchema;
};
type CreateNavigationParam = {
    body: ContentPlatformModel.NavigationPayload;
};
type CreatePageParam = {
    body: ContentPlatformModel.PagePayload;
};
type CreateSEOMarkupSchemaParam = {
    body: ContentPlatformModel.SEOSchemaMarkupTemplateRequestBody;
};
type CreateTranslateUILabelsParam = {
    body: ContentPlatformModel.TranslateUiLabelsCreate;
};
type DeleteAnnouncementParam = {
    /**
     * - ID allotted to the announcement.
     */
    announcementId: string;
};
type DeleteAppCustomFieldDefinitionBySlugParam = {
    slug: string;
    resource: string;
    namespace: string;
};
type DeleteAppCustomObjectBySlugParam = {
    definitionSlug: string;
    slug: string;
};
type DeleteAppCustomObjectDefinitionBySlugParam = {
    slug: string;
};
type DeleteApplicationLanguageParam = {
    locale: string;
};
type DeleteApplicationResourceTranslationParam = {
    id: string;
};
type DeleteBlogParam = {
    /**
     * - ID allotted to the blog.
     */
    id: string;
};
type DeleteDataLoaderParam = {
    /**
     * - ID allotted to the data loader.
     */
    dataLoaderId: string;
};
type DeleteFaqParam = {
    /**
     * - ID allotted to an FAQ category.
     */
    categoryId: string;
    /**
     * - ID allotted to an FAQ.
     */
    faqId: string;
};
type DeleteFaqCategoryParam = {
    /**
     * - ID allotted to an FAQ category.
     */
    id: string;
};
type DeleteLandingPageParam = {
    /**
     * - ID allotted to a landing page.
     */
    id: string;
};
type DeleteNavigationParam = {
    /**
     * - ID allotted to the navigation.
     */
    id: string;
};
type DeletePageParam = {
    /**
     * - ID allotted to the page.
     */
    id: string;
};
type DeletePathRedirectionRulesParam = {
    /**
     * - ID allotted to the path redirection rule.
     */
    pathId: string;
};
type DeleteSEOMarkupSchemaParam = {
    /**
     * - Alphanumeric ID allotted to a SEO Markup Schema
     * Template created within a business.
     */
    id: string;
};
type EditDataLoaderParam = {
    /**
     * - ID allotted to the data loader.
     */
    dataLoaderId: string;
    body: ContentPlatformModel.DataLoaderSchema;
};
type EditInjectableTagParam = {
    /**
     * - ID allotted to the tag.
     */
    tagId: string;
    body: ContentPlatformModel.UpdateHandpickedSchema;
};
type EditSEOMarkupSchemaParam = {
    /**
     * - Alphanumeric ID allotted to a SEO Markup Schema
     * Template created within a business.
     */
    id: string;
    body: ContentPlatformModel.SEOSchemaMarkupTemplateRequestBody;
};
type ExportAppCustomObjectEntriesBySlugParam = {
    slug: string;
};
type GenerateSEOTitleParam = {
    /**
     * - String
     * representing the type of SEO content to be generated. Possible values are:
     * title, description
     */
    type: ContentPlatformModel.GenerationEntityType;
    body: ContentPlatformModel.GenerateSEOContent;
};
type GetAnnouncementByIdParam = {
    /**
     * - ID allotted to the announcement.
     */
    announcementId: string;
};
type GetAnnouncementsListParam = {
    /**
     * - The page number to navigate through the given
     * set of results. Default value is 1.
     */
    pageNo?: number;
    /**
     * - The number of items to retrieve in each page.
     * Default value is 10.
     */
    pageSize?: number;
};
type GetAppCustomFieldDefinitionByResourceParam = {
    pageNo: string;
    pageSize: string;
    resource: string;
    types?: string;
    search?: string;
    slugs?: string;
    namespaces?: string;
};
type GetAppCustomFieldDefinitionBySlugParam = {
    slug: string;
    resource: string;
    namespace: string;
};
type GetAppCustomFieldDefinitionsParam = {
    pageNo: string;
    pageSize: string;
    resources?: string;
    types?: string;
    search?: string;
    slugs?: string;
    namespaces?: string;
};
type GetAppCustomFieldsByResourceSlugParam = {
    resource: string;
    resourceSlug: string;
};
type GetAppCustomObjectBySlugParam = {
    definitionSlug: string;
    slug: string;
};
type GetAppCustomObjectDefinitionBySlugParam = {
    slug: string;
};
type GetAppCustomObjectDefinitionsParam = {
    pageNo: string;
    pageSize: string;
    search?: string;
};
type GetAppCustomObjectsBySlugParam = {
    pageNo: string;
    pageSize: string;
    definitionSlug: string;
};
type GetAppJobsParam = {
    page: string;
    pageSize: string;
    actionType: string;
};
type GetApplicationResourceTranslationsParam = {
    locale: string;
    type: string;
    resourceId: string;
};
type GetBlogBySlugParam = {
    /**
     * - A short, human-readable, URL-friendly identifier of
     * a blog page. You can get slug value of a blog from `getBlogs` API.
     */
    slug: string;
};
type GetBlogsParam = {
    /**
     * - The page number to navigate through the given
     * set of results. Default value is 1.
     */
    pageNo?: number;
    /**
     * - The number of items to retrieve in each page.
     * Default value is 10.
     */
    pageSize?: number;
    /**
     * - Blogs retrieve based on the list of tags passed.
     */
    tags?: string;
    /**
     * - Blogs retrieve based on the title or slug passed.
     */
    q?: string;
    /**
     * - Blogs retrieve based on the slug passed.
     */
    slug?: string;
    /**
     * - Blogs retrieve based on the title passed.
     */
    title?: string;
    /**
     * - Blogs retrieve based on the status passed.
     */
    status?: string;
};
type GetDataLoadersByServiceParam = {
    /**
     * - Service name of the data loader..
     */
    serviceName: string;
};
type GetDefaultSEOMarkupSchemaParam = {
    /**
     * - The type of page against which schema
     * template was created
     */
    pageType?: string;
};
type GetFaqByIdOrSlugParam = {
    /**
     * - ID or the slug allotted to an FAQ category.
     * Slug is a short, human-readable, URL-friendly identifier of an object. You
     * can get slug value of an FAQ category from `getFaqCategories` API.
     */
    idOrSlug: string;
};
type GetFaqCategoryBySlugOrIdParam = {
    /**
     * - ID or the slug allotted to an FAQ category.
     * Slug is a short, human-readable, URL-friendly identifier of an object. You
     * can get slug value of an FAQ category from `getFaqCategories` API.
     */
    idOrSlug: string;
};
type GetFaqsByCategoryIdOrSlugParam = {
    /**
     * - ID or the slug allotted to an FAQ category.
     * Slug is a short, human-readable, URL-friendly identifier of an object. You
     * can get slug value of an FAQ category from `getFaqCategories` API.
     */
    idOrSlug: string;
};
type GetInjectableTagsParam = {
    /**
     * - Get all tags irrespective of the creator of tags
     */
    all?: boolean;
};
type GetLandingPagesParam = {
    /**
     * - The page number to navigate through the given
     * set of results. Default value is 1.
     */
    pageNo?: number;
    /**
     * - The number of items to retrieve in each page.
     * Default value is 10.
     */
    pageSize?: number;
};
type GetNavigationBySlugParam = {
    /**
     * - A short, human-readable, URL-friendly identifier of
     * a navigation. You can get slug value of a navigation from `getNavigations` API.
     */
    slug: string;
    /**
     * - Filter navigations by platform.
     * Acceptable values are: web, android, ios.
     */
    devicePlatform?: string;
};
type GetNavigationsParam = {
    /**
     * - Filter navigations by platform.
     * Acceptable values are: web, android, ios, all
     */
    devicePlatform: string;
    /**
     * - The page number to navigate through the given
     * set of results. Default value is 1.
     */
    pageNo?: number;
    /**
     * - The number of items to retrieve in each page.
     * Default value is 10.
     */
    pageSize?: number;
};
type GetPageBySlugParam = {
    /**
     * - A short, human-readable, URL-friendly identifier of
     * a page. You can get slug value of a page from `getPages` API.
     */
    slug: string;
};
type GetPagesParam = {
    /**
     * - The page number to navigate through the given
     * set of results. Default value is 1.
     */
    pageNo?: number;
    /**
     * - The number of items to retrieve in each page.
     * Default value is 10.
     */
    pageSize?: number;
};
type GetPathRedirectionRuleParam = {
    /**
     * - ID allotted to the path redirection rule.
     */
    pathId: string;
};
type GetPathRedirectionRulesParam = {
    /**
     * - The number of items to retrieve in each page.
     * Default value is 5.
     */
    pageSize?: number;
    /**
     * - The page number to navigate through the given
     * set of results. Default value is 1.
     */
    pageNo?: number;
};
type GetSEOMarkupSchemaParam = {
    /**
     * - Alphanumeric ID allotted to a SEO Markup Schema
     * Template created within a business.
     */
    id: string;
};
type GetSEOMarkupSchemasParam = {
    /**
     * - Title of the seo schema.
     */
    title?: string;
    /**
     * - Boolean value for fetching seo schema.
     */
    active?: string;
    /**
     * - The page number to navigate through the given
     * set of results. Default value is 1.
     */
    pageNo?: number;
    /**
     * - The number of items to retrieve in each page.
     * Default value is 10.
     */
    pageSize?: number;
};
type GetTranslateUILabelsParam = {
    /**
     * - Unique id of template theme
     */
    templateThemeId?: string;
    /**
     * - Unique id of theme
     */
    themeId?: string;
    /**
     * - Multilingual locale
     */
    locale?: string;
    /**
     * - Filter Translate Ui Labels by type
     */
    type?: string;
};
type GetTranslateUILabelsByIdParam = {
    /**
     * - ID of the Translate Ui Labels
     */
    id: string;
};
type ImportAppCustomObjectEntriesBySlugParam = {
    slug: string;
    body: ContentPlatformModel.CustomObjectBulkSchema;
};
type RemoveInjectableTagParam = {
    body: ContentPlatformModel.RemoveHandpickedSchema;
};
type ResetDataLoaderParam = {
    /**
     * - Name of service.
     */
    service: string;
    /**
     * - Name of operation id of the service.
     */
    operationId: string;
};
type SampleAppCustomObjectBulkEntryBySlugParam = {
    slug: string;
};
type SelectDataLoaderParam = {
    /**
     * - ID allotted to the data loader.
     */
    dataLoaderId: string;
};
type UpdateAnnouncementParam = {
    /**
     * - ID allotted to the announcement.
     */
    announcementId: string;
    body: ContentPlatformModel.AdminAnnouncementSchema;
};
type UpdateAnnouncementScheduleParam = {
    /**
     * - ID allotted to the announcement.
     */
    announcementId: string;
    body: ContentPlatformModel.ScheduleSchema;
};
type UpdateAppCustomFieldByResourceSlugParam = {
    resource: string;
    resourceSlug: string;
    body: ContentPlatformModel.CustomFieldRequestSchema;
};
type UpdateAppCustomFieldDefinitionBySlugParam = {
    slug: string;
    resource: string;
    namespace: string;
    body: ContentPlatformModel.CustomFieldDefinitionRequestSchema;
};
type UpdateAppCustomObjectBySlugParam = {
    definitionSlug: string;
    slug: string;
    body: ContentPlatformModel.CustomObjectRequestSchemaWithoutId;
};
type UpdateAppCustomObjectDefinitionBySlugParam = {
    slug: string;
    body: ContentPlatformModel.CustomObjectDefinitionUpdateRequestSchema;
};
type UpdateApplicationLanguageStatusParam = {
    locale: string;
    body: ContentPlatformModel.ApplicationLanguageUpdate;
};
type UpdateApplicationResourceTranslationParam = {
    id: string;
    body: ContentPlatformModel.ResourceTranslationUpdate;
};
type UpdateBlogParam = {
    /**
     * - ID allotted to the blog.
     */
    id: string;
    body: ContentPlatformModel.BlogPayload;
};
type UpdateFaqParam = {
    /**
     * - ID allotted to an FAQ category.
     */
    categoryId: string;
    /**
     * - ID allotted to an FAQ.
     */
    faqId: string;
    body: ContentPlatformModel.CreateFaqSchema;
};
type UpdateFaqCategoryParam = {
    /**
     * - ID allotted to an FAQ category.
     */
    id: string;
    body: ContentPlatformModel.UpdateFaqCategoryRequestSchema;
};
type UpdateInjectableTagParam = {
    body: ContentPlatformModel.CreateTagRequestSchema;
};
type UpdateLandingPageParam = {
    /**
     * - ID allotted to a landing page.
     */
    id: string;
    body: ContentPlatformModel.LandingPageSchema;
};
type UpdateLegalInformationParam = {
    body: ContentPlatformModel.ApplicationLegal;
};
type UpdateNavigationParam = {
    /**
     * - ID allotted to the navigation.
     */
    id: string;
    body: ContentPlatformModel.NavigationPayload;
};
type UpdatePageParam = {
    /**
     * - ID allotted to the page.
     */
    id: string;
    body: ContentPlatformModel.PageSchema;
};
type UpdatePagePreviewParam = {
    /**
     * - A short, human-readable, URL-friendly identifier of
     * a page. You can get slug value of a page from `getPages` API.
     */
    slug: string;
    body: ContentPlatformModel.PagePublishPayload;
};
type UpdatePathRedirectionRulesParam = {
    /**
     * - ID allotted to the path redirection rule.
     */
    pathId: string;
    body: ContentPlatformModel.PathMappingSchema;
};
type UpdateSEOConfigurationParam = {
    body: ContentPlatformModel.SeoComponent;
};
type UpdateSupportInformationParam = {
    body: ContentPlatformModel.Support;
};
type UpdateTranslateUILabelsParam = {
    /**
     * - The unique identifier of the Translate Ui Labels to update
     */
    id: string;
    body: ContentPlatformModel.StaticResourceUpdate;
};
type UpsertApplicationResourceTranslationInBulkParam = {
    body: ContentPlatformModel.ResourceTranslationList;
};
type GetAppCustomFieldTypesParam = any;
type GetAppResourcesParam = any;
type GetApplicationLanguagesParam = any;
type GetDataLoadersParam = any;
type GetDefaultNavigationsParam = any;
type GetFaqCategoriesParam = any;
type GetLegalInformationParam = any;
type GetPageMetaParam = any;
type GetPageSpecParam = any;
type GetSEOConfigurationParam = any;
type GetSupportInformationParam = any;
import ContentPlatformModel = require("./ContentPlatformModel");
