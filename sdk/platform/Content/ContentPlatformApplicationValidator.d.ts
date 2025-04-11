export = ContentPlatformApplicationValidator;
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
 * @typedef CreateBlogParam
 * @property {ContentPlatformModel.BlogRequestSchema} body
 */
/**
 * @typedef CreateFaqCategoryParam
 * @property {ContentPlatformModel.CreateFaqCategoryRequestSchema} body
 */
/**
 * @typedef CreateInjectableTagParam
 * @property {ContentPlatformModel.CreateTagRequestSchema} body
 */
/**
 * @typedef CreateLandingPageParam
 * @property {ContentPlatformModel.LandingPageSchema} body
 */
/**
 * @typedef CreateNavigationParam
 * @property {ContentPlatformModel.NavigationRequestSchema} body
 */
/**
 * @typedef CreatePageParam
 * @property {ContentPlatformModel.PageRequestSchema} body
 */
/**
 * @typedef CreatePagePreviewParam
 * @property {ContentPlatformModel.PageRequestSchema} body
 */
/**
 * @typedef CreateSEOMarkupSchemaParam
 * @property {ContentPlatformModel.SEOSchemaMarkupTemplateRequestBody} body
 */
/**
 * @typedef CreateSitemapParam
 * @property {ContentPlatformModel.SitemapConfigCreate} body
 */
/** @typedef DeleteAllInjectableTagsParam */
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
 * @property {string} schemaId - Alphanumeric ID allotted to a SEO Markup Schema
 *   Template created within a business.
 */
/**
 * @typedef DeleteSitemapParam
 * @property {string} name
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
 * @property {string} schemaId - Alphanumeric ID allotted to a SEO Markup Schema
 *   Template created within a business.
 * @property {ContentPlatformModel.SEOSchemaMarkupTemplateRequestBody} body
 */
/**
 * @typedef ExportAppCustomObjectEntriesBySlugParam
 * @property {string} slug
 */
/**
 * @typedef GenerateSEOTitleParam
 * @property {string} type - String representing the type of SEO content to be
 *   generated. Possible values are: title, description
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
 * @property {string} pageNo
 * @property {string} pageSize
 * @property {string} actionType
 */
/** @typedef GetAppResourcesParam */
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
/**
 * @typedef GetComponentByIdParam
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   a blog page. You can get slug value of a blog from `getBlogs` API.
 */
/**
 * @typedef GetDataLoaderApiSpecsParam
 * @property {string} dataLoader - Alphanumeric ID allotted to an application
 *   created within a business account.
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
/** @typedef GetDefaultSitemapConfigParam */
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
/** @typedef GetInjectableTagsParam */
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
 * @property {string} schemaId - Alphanumeric ID allotted to a SEO Markup Schema
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
/**
 * @typedef GetSitemapParam
 * @property {string} name
 */
/**
 * @typedef GetSitemapsParam
 * @property {string} pageNo
 * @property {string} pageSize
 * @property {boolean} [isActive] - Boolean flag for checking if sitemap is
 *   active or not in storefront
 * @property {string} [name] - Query parameter to search sitemaps with name
 */
/** @typedef GetSupportInformationParam */
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
 * @typedef UpdateBlogParam
 * @property {string} id - ID allotted to the blog.
 * @property {ContentPlatformModel.BlogRequestSchema} body
 */
/**
 * @typedef UpdateDefaultSitemapConfigParam
 * @property {ContentPlatformModel.DefaultSitemapConfig} body
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
 * @property {ContentPlatformModel.NavigationRequestSchema} body
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
 * @property {ContentPlatformModel.PagePublishRequestSchema} body
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
 * @typedef UpdateSitemapParam
 * @property {string} name
 * @property {ContentPlatformModel.SitemapConfigUpdate} body
 */
/**
 * @typedef UpdateSupportInformationParam
 * @property {ContentPlatformModel.Support} body
 */
declare class ContentPlatformApplicationValidator {
    /** @returns {AddDataLoaderParam} */
    static addDataLoader(): AddDataLoaderParam;
    /** @returns {AddFaqParam} */
    static addFaq(): AddFaqParam;
    /** @returns {AddInjectableTagParam} */
    static addInjectableTag(): AddInjectableTagParam;
    /** @returns {AddPathRedirectionRulesParam} */
    static addPathRedirectionRules(): AddPathRedirectionRulesParam;
    /** @returns {CreateAnnouncementParam} */
    static createAnnouncement(): CreateAnnouncementParam;
    /** @returns {CreateAppCustomFieldDefinitionParam} */
    static createAppCustomFieldDefinition(): CreateAppCustomFieldDefinitionParam;
    /** @returns {CreateAppCustomObjectBySlugParam} */
    static createAppCustomObjectBySlug(): CreateAppCustomObjectBySlugParam;
    /** @returns {CreateAppCustomObjectDefinitionParam} */
    static createAppCustomObjectDefinition(): CreateAppCustomObjectDefinitionParam;
    /** @returns {CreateBlogParam} */
    static createBlog(): CreateBlogParam;
    /** @returns {CreateFaqCategoryParam} */
    static createFaqCategory(): CreateFaqCategoryParam;
    /** @returns {CreateInjectableTagParam} */
    static createInjectableTag(): CreateInjectableTagParam;
    /** @returns {CreateLandingPageParam} */
    static createLandingPage(): CreateLandingPageParam;
    /** @returns {CreateNavigationParam} */
    static createNavigation(): CreateNavigationParam;
    /** @returns {CreatePageParam} */
    static createPage(): CreatePageParam;
    /** @returns {CreatePagePreviewParam} */
    static createPagePreview(): CreatePagePreviewParam;
    /** @returns {CreateSEOMarkupSchemaParam} */
    static createSEOMarkupSchema(): CreateSEOMarkupSchemaParam;
    /** @returns {CreateSitemapParam} */
    static createSitemap(): CreateSitemapParam;
    /** @returns {DeleteAllInjectableTagsParam} */
    static deleteAllInjectableTags(): any;
    /** @returns {DeleteAnnouncementParam} */
    static deleteAnnouncement(): DeleteAnnouncementParam;
    /** @returns {DeleteAppCustomFieldDefinitionBySlugParam} */
    static deleteAppCustomFieldDefinitionBySlug(): DeleteAppCustomFieldDefinitionBySlugParam;
    /** @returns {DeleteAppCustomObjectBySlugParam} */
    static deleteAppCustomObjectBySlug(): DeleteAppCustomObjectBySlugParam;
    /** @returns {DeleteAppCustomObjectDefinitionBySlugParam} */
    static deleteAppCustomObjectDefinitionBySlug(): DeleteAppCustomObjectDefinitionBySlugParam;
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
    /** @returns {DeleteSitemapParam} */
    static deleteSitemap(): DeleteSitemapParam;
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
    /** @returns {GetBlogBySlugParam} */
    static getBlogBySlug(): GetBlogBySlugParam;
    /** @returns {GetBlogsParam} */
    static getBlogs(): GetBlogsParam;
    /** @returns {GetComponentByIdParam} */
    static getComponentById(): GetComponentByIdParam;
    /** @returns {GetDataLoaderApiSpecsParam} */
    static getDataLoaderApiSpecs(): GetDataLoaderApiSpecsParam;
    /** @returns {GetDataLoadersParam} */
    static getDataLoaders(): any;
    /** @returns {GetDataLoadersByServiceParam} */
    static getDataLoadersByService(): GetDataLoadersByServiceParam;
    /** @returns {GetDefaultNavigationsParam} */
    static getDefaultNavigations(): any;
    /** @returns {GetDefaultSEOMarkupSchemaParam} */
    static getDefaultSEOMarkupSchema(): GetDefaultSEOMarkupSchemaParam;
    /** @returns {GetDefaultSitemapConfigParam} */
    static getDefaultSitemapConfig(): any;
    /** @returns {GetFaqByIdOrSlugParam} */
    static getFaqByIdOrSlug(): GetFaqByIdOrSlugParam;
    /** @returns {GetFaqCategoriesParam} */
    static getFaqCategories(): any;
    /** @returns {GetFaqCategoryBySlugOrIdParam} */
    static getFaqCategoryBySlugOrId(): GetFaqCategoryBySlugOrIdParam;
    /** @returns {GetFaqsByCategoryIdOrSlugParam} */
    static getFaqsByCategoryIdOrSlug(): GetFaqsByCategoryIdOrSlugParam;
    /** @returns {GetInjectableTagsParam} */
    static getInjectableTags(): any;
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
    /** @returns {GetSitemapParam} */
    static getSitemap(): GetSitemapParam;
    /** @returns {GetSitemapsParam} */
    static getSitemaps(): GetSitemapsParam;
    /** @returns {GetSupportInformationParam} */
    static getSupportInformation(): any;
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
    /** @returns {UpdateBlogParam} */
    static updateBlog(): UpdateBlogParam;
    /** @returns {UpdateDefaultSitemapConfigParam} */
    static updateDefaultSitemapConfig(): UpdateDefaultSitemapConfigParam;
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
    /** @returns {UpdateSitemapParam} */
    static updateSitemap(): UpdateSitemapParam;
    /** @returns {UpdateSupportInformationParam} */
    static updateSupportInformation(): UpdateSupportInformationParam;
}
declare namespace ContentPlatformApplicationValidator {
    export { AddDataLoaderParam, AddFaqParam, AddInjectableTagParam, AddPathRedirectionRulesParam, CreateAnnouncementParam, CreateAppCustomFieldDefinitionParam, CreateAppCustomObjectBySlugParam, CreateAppCustomObjectDefinitionParam, CreateBlogParam, CreateFaqCategoryParam, CreateInjectableTagParam, CreateLandingPageParam, CreateNavigationParam, CreatePageParam, CreatePagePreviewParam, CreateSEOMarkupSchemaParam, CreateSitemapParam, DeleteAllInjectableTagsParam, DeleteAnnouncementParam, DeleteAppCustomFieldDefinitionBySlugParam, DeleteAppCustomObjectBySlugParam, DeleteAppCustomObjectDefinitionBySlugParam, DeleteBlogParam, DeleteDataLoaderParam, DeleteFaqParam, DeleteFaqCategoryParam, DeleteLandingPageParam, DeleteNavigationParam, DeletePageParam, DeletePathRedirectionRulesParam, DeleteSEOMarkupSchemaParam, DeleteSitemapParam, EditDataLoaderParam, EditInjectableTagParam, EditSEOMarkupSchemaParam, ExportAppCustomObjectEntriesBySlugParam, GenerateSEOTitleParam, GetAnnouncementByIdParam, GetAnnouncementsListParam, GetAppCustomFieldDefinitionByResourceParam, GetAppCustomFieldDefinitionBySlugParam, GetAppCustomFieldDefinitionsParam, GetAppCustomFieldTypesParam, GetAppCustomFieldsByResourceSlugParam, GetAppCustomObjectBySlugParam, GetAppCustomObjectDefinitionBySlugParam, GetAppCustomObjectDefinitionsParam, GetAppCustomObjectsBySlugParam, GetAppJobsParam, GetAppResourcesParam, GetBlogBySlugParam, GetBlogsParam, GetComponentByIdParam, GetDataLoaderApiSpecsParam, GetDataLoadersParam, GetDataLoadersByServiceParam, GetDefaultNavigationsParam, GetDefaultSEOMarkupSchemaParam, GetDefaultSitemapConfigParam, GetFaqByIdOrSlugParam, GetFaqCategoriesParam, GetFaqCategoryBySlugOrIdParam, GetFaqsByCategoryIdOrSlugParam, GetInjectableTagsParam, GetLandingPagesParam, GetLegalInformationParam, GetNavigationBySlugParam, GetNavigationsParam, GetPageBySlugParam, GetPageMetaParam, GetPageSpecParam, GetPagesParam, GetPathRedirectionRuleParam, GetPathRedirectionRulesParam, GetSEOConfigurationParam, GetSEOMarkupSchemaParam, GetSEOMarkupSchemasParam, GetSitemapParam, GetSitemapsParam, GetSupportInformationParam, ImportAppCustomObjectEntriesBySlugParam, RemoveInjectableTagParam, ResetDataLoaderParam, SampleAppCustomObjectBulkEntryBySlugParam, SelectDataLoaderParam, UpdateAnnouncementParam, UpdateAnnouncementScheduleParam, UpdateAppCustomFieldByResourceSlugParam, UpdateAppCustomFieldDefinitionBySlugParam, UpdateAppCustomObjectBySlugParam, UpdateAppCustomObjectDefinitionBySlugParam, UpdateBlogParam, UpdateDefaultSitemapConfigParam, UpdateFaqParam, UpdateFaqCategoryParam, UpdateInjectableTagParam, UpdateLandingPageParam, UpdateLegalInformationParam, UpdateNavigationParam, UpdatePageParam, UpdatePagePreviewParam, UpdatePathRedirectionRulesParam, UpdateSEOConfigurationParam, UpdateSitemapParam, UpdateSupportInformationParam };
}
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
type CreateBlogParam = {
    body: ContentPlatformModel.BlogRequestSchema;
};
type CreateFaqCategoryParam = {
    body: ContentPlatformModel.CreateFaqCategoryRequestSchema;
};
type CreateInjectableTagParam = {
    body: ContentPlatformModel.CreateTagRequestSchema;
};
type CreateLandingPageParam = {
    body: ContentPlatformModel.LandingPageSchema;
};
type CreateNavigationParam = {
    body: ContentPlatformModel.NavigationRequestSchema;
};
type CreatePageParam = {
    body: ContentPlatformModel.PageRequestSchema;
};
type CreatePagePreviewParam = {
    body: ContentPlatformModel.PageRequestSchema;
};
type CreateSEOMarkupSchemaParam = {
    body: ContentPlatformModel.SEOSchemaMarkupTemplateRequestBody;
};
type CreateSitemapParam = {
    body: ContentPlatformModel.SitemapConfigCreate;
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
    schemaId: string;
};
type DeleteSitemapParam = {
    name: string;
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
    schemaId: string;
    body: ContentPlatformModel.SEOSchemaMarkupTemplateRequestBody;
};
type ExportAppCustomObjectEntriesBySlugParam = {
    slug: string;
};
type GenerateSEOTitleParam = {
    /**
     * - String representing the type of SEO content to be
     * generated. Possible values are: title, description
     */
    type: string;
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
    pageNo: string;
    pageSize: string;
    actionType: string;
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
type GetComponentByIdParam = {
    /**
     * - A short, human-readable, URL-friendly identifier of
     * a blog page. You can get slug value of a blog from `getBlogs` API.
     */
    slug: string;
};
type GetDataLoaderApiSpecsParam = {
    /**
     * - Alphanumeric ID allotted to an application
     * created within a business account.
     */
    dataLoader: string;
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
    schemaId: string;
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
type GetSitemapParam = {
    name: string;
};
type GetSitemapsParam = {
    pageNo: string;
    pageSize: string;
    /**
     * - Boolean flag for checking if sitemap is
     * active or not in storefront
     */
    isActive?: boolean;
    /**
     * - Query parameter to search sitemaps with name
     */
    name?: string;
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
type UpdateBlogParam = {
    /**
     * - ID allotted to the blog.
     */
    id: string;
    body: ContentPlatformModel.BlogRequestSchema;
};
type UpdateDefaultSitemapConfigParam = {
    body: ContentPlatformModel.DefaultSitemapConfig;
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
    body: ContentPlatformModel.NavigationRequestSchema;
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
    body: ContentPlatformModel.PagePublishRequestSchema;
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
type UpdateSitemapParam = {
    name: string;
    body: ContentPlatformModel.SitemapConfigUpdate;
};
type UpdateSupportInformationParam = {
    body: ContentPlatformModel.Support;
};
type DeleteAllInjectableTagsParam = any;
type GetAppCustomFieldTypesParam = any;
type GetAppResourcesParam = any;
type GetDataLoadersParam = any;
type GetDefaultNavigationsParam = any;
type GetDefaultSitemapConfigParam = any;
type GetFaqCategoriesParam = any;
type GetInjectableTagsParam = any;
type GetLegalInformationParam = any;
type GetPageMetaParam = any;
type GetPageSpecParam = any;
type GetSEOConfigurationParam = any;
type GetSupportInformationParam = any;
import ContentPlatformModel = require("./ContentPlatformModel");
