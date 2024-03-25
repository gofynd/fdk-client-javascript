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
 * @typedef CreateAppCustomFieldByResourceIdParam
 * @property {string} resource
 * @property {string} resourceId
 * @property {ContentPlatformModel.CustomFieldRequestSchema} body
 */
/**
 * @typedef CreateAppCustomFieldDefinitionParam
 * @property {ContentPlatformModel.CustomFieldDefinitionRequestSchema} body
 */
/**
 * @typedef CreateAppCustomObjectParam
 * @property {ContentPlatformModel.CustomObjectRequestSchema} body
 */
/**
 * @typedef CreateAppCustomObjectDefinitionParam
 * @property {ContentPlatformModel.CustomObjectDefinitionRequestSchema} body
 */
/**
 * @typedef CreateBlogParam
 * @property {ContentPlatformModel.BlogRequest} body
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
 * @property {ContentPlatformModel.NavigationRequest} body
 */
/**
 * @typedef CreatePageParam
 * @property {ContentPlatformModel.PageRequest} body
 */
/**
 * @typedef CreatePagePreviewParam
 * @property {ContentPlatformModel.PageRequest} body
 */
/**
 * @typedef CreatePageV1Param
 * @property {ContentPlatformModel.PageRequest} body
 */
/**
 * @typedef CreateSEOMarkupSchemaParam
 * @property {ContentPlatformModel.SEOSchemaMarkupTemplateRequestBody} body
 */
/** @typedef DeleteAllInjectableTagsParam */
/**
 * @typedef DeleteAnnouncementParam
 * @property {string} announcementId - ID allotted to the announcement.
 */
/**
 * @typedef DeleteAppCustomFieldDefinitionParam
 * @property {string} id
 */
/**
 * @typedef DeleteAppCustomFieldsByResourceIdParam
 * @property {string} resource
 * @property {string} resourceId
 * @property {string} ids
 */
/**
 * @typedef DeleteAppCustomObjectParam
 * @property {string} id
 */
/**
 * @typedef DeleteAppCustomObjectDefinitionParam
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
 * @property {string} schemaId - Alphanumeric ID allotted to a SEO Markup Schema
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
 * @property {string} schemaId - Alphanumeric ID allotted to a SEO Markup Schema
 *   Template created within a business.
 * @property {ContentPlatformModel.SEOSchemaMarkupTemplateRequestBody} body
 */
/**
 * @typedef ExportAppCustomObjectEntriesParam
 * @property {string} definitionId
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
 * @typedef GetAppCustomFieldDefinitionParam
 * @property {string} id
 */
/**
 * @typedef GetAppCustomFieldDefinitionsParam
 * @property {string} pageNo
 * @property {string} pageSize
 * @property {string} [resources]
 * @property {string} [types]
 * @property {string} [search]
 */
/**
 * @typedef GetAppCustomFieldJobsParam
 * @property {string} page
 * @property {string} pageSize
 * @property {string} actionType
 */
/** @typedef GetAppCustomFieldTypesParam */
/**
 * @typedef GetAppCustomFieldsParam
 * @property {string} resource
 */
/**
 * @typedef GetAppCustomFieldsByResourceIdParam
 * @property {string} resource
 * @property {string} resourceId
 */
/**
 * @typedef GetAppCustomObjectParam
 * @property {string} id
 */
/**
 * @typedef GetAppCustomObjectDefinitionParam
 * @property {string} id
 */
/**
 * @typedef GetAppCustomObjectDefinitionsParam
 * @property {string} pageNo
 * @property {string} pageSize
 * @property {string} [search]
 */
/**
 * @typedef GetAppCustomObjectsParam
 * @property {string} [definitionId]
 * @property {string} pageNo
 * @property {string} pageSize
 */
/**
 * @typedef GetAppJobsParam
 * @property {string} page
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
 * @property {string} devicePlatform - Filter navigations by platform.
 *   Acceptable values are: web, android, ios, all
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
/**
 * @typedef GetPageBySlugV1Param
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
 * @typedef GetPagesV1Param
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
/** @typedef GetSupportInformationParam */
/**
 * @typedef ImportAppCustomObjectEntriesParam
 * @property {string} definitionId
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
 * @typedef SampleAppCustomObjectBulkEntryParam
 * @property {string} definitionId
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
 * @typedef UpdateAppCustomFieldByResourceIdParam
 * @property {string} resource
 * @property {string} resourceId
 * @property {ContentPlatformModel.CustomFieldRequestSchema} body
 */
/**
 * @typedef UpdateAppCustomFieldDefinitionParam
 * @property {string} id
 * @property {ContentPlatformModel.CustomFieldDefinitionRequestSchema} body
 */
/**
 * @typedef UpdateAppCustomObjectParam
 * @property {string} id
 * @property {ContentPlatformModel.CustomObjectRequestSchema} body
 */
/**
 * @typedef UpdateAppCustomObjectDefinitionParam
 * @property {string} id
 * @property {ContentPlatformModel.CustomObjectDefinitionUpdateRequestSchema} body
 */
/**
 * @typedef UpdateBlogParam
 * @property {string} id - ID allotted to the blog.
 * @property {ContentPlatformModel.BlogRequest} body
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
 * @property {ContentPlatformModel.NavigationRequest} body
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
 * @property {ContentPlatformModel.PagePublishRequest} body
 */
/**
 * @typedef UpdatePageV1Param
 * @property {string} id - ID allotted to the page.
 * @property {ContentPlatformModel.PageSchema} body
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
    /** @returns {CreateAppCustomFieldByResourceIdParam} */
    static createAppCustomFieldByResourceId(): CreateAppCustomFieldByResourceIdParam;
    /** @returns {CreateAppCustomFieldDefinitionParam} */
    static createAppCustomFieldDefinition(): CreateAppCustomFieldDefinitionParam;
    /** @returns {CreateAppCustomObjectParam} */
    static createAppCustomObject(): CreateAppCustomObjectParam;
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
    /** @returns {CreatePageV1Param} */
    static createPageV1(): CreatePageV1Param;
    /** @returns {CreateSEOMarkupSchemaParam} */
    static createSEOMarkupSchema(): CreateSEOMarkupSchemaParam;
    /** @returns {DeleteAllInjectableTagsParam} */
    static deleteAllInjectableTags(): any;
    /** @returns {DeleteAnnouncementParam} */
    static deleteAnnouncement(): DeleteAnnouncementParam;
    /** @returns {DeleteAppCustomFieldDefinitionParam} */
    static deleteAppCustomFieldDefinition(): DeleteAppCustomFieldDefinitionParam;
    /** @returns {DeleteAppCustomFieldsByResourceIdParam} */
    static deleteAppCustomFieldsByResourceId(): DeleteAppCustomFieldsByResourceIdParam;
    /** @returns {DeleteAppCustomObjectParam} */
    static deleteAppCustomObject(): DeleteAppCustomObjectParam;
    /** @returns {DeleteAppCustomObjectDefinitionParam} */
    static deleteAppCustomObjectDefinition(): DeleteAppCustomObjectDefinitionParam;
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
    /** @returns {ExportAppCustomObjectEntriesParam} */
    static exportAppCustomObjectEntries(): ExportAppCustomObjectEntriesParam;
    /** @returns {GenerateSEOTitleParam} */
    static generateSEOTitle(): GenerateSEOTitleParam;
    /** @returns {GetAnnouncementByIdParam} */
    static getAnnouncementById(): GetAnnouncementByIdParam;
    /** @returns {GetAnnouncementsListParam} */
    static getAnnouncementsList(): GetAnnouncementsListParam;
    /** @returns {GetAppCustomFieldDefinitionParam} */
    static getAppCustomFieldDefinition(): GetAppCustomFieldDefinitionParam;
    /** @returns {GetAppCustomFieldDefinitionsParam} */
    static getAppCustomFieldDefinitions(): GetAppCustomFieldDefinitionsParam;
    /** @returns {GetAppCustomFieldJobsParam} */
    static getAppCustomFieldJobs(): GetAppCustomFieldJobsParam;
    /** @returns {GetAppCustomFieldTypesParam} */
    static getAppCustomFieldTypes(): any;
    /** @returns {GetAppCustomFieldsParam} */
    static getAppCustomFields(): GetAppCustomFieldsParam;
    /** @returns {GetAppCustomFieldsByResourceIdParam} */
    static getAppCustomFieldsByResourceId(): GetAppCustomFieldsByResourceIdParam;
    /** @returns {GetAppCustomObjectParam} */
    static getAppCustomObject(): GetAppCustomObjectParam;
    /** @returns {GetAppCustomObjectDefinitionParam} */
    static getAppCustomObjectDefinition(): GetAppCustomObjectDefinitionParam;
    /** @returns {GetAppCustomObjectDefinitionsParam} */
    static getAppCustomObjectDefinitions(): GetAppCustomObjectDefinitionsParam;
    /** @returns {GetAppCustomObjectsParam} */
    static getAppCustomObjects(): GetAppCustomObjectsParam;
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
    /** @returns {GetPageBySlugV1Param} */
    static getPageBySlugV1(): GetPageBySlugV1Param;
    /** @returns {GetPageMetaParam} */
    static getPageMeta(): any;
    /** @returns {GetPageSpecParam} */
    static getPageSpec(): any;
    /** @returns {GetPagesParam} */
    static getPages(): GetPagesParam;
    /** @returns {GetPagesV1Param} */
    static getPagesV1(): GetPagesV1Param;
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
    /** @returns {ImportAppCustomObjectEntriesParam} */
    static importAppCustomObjectEntries(): ImportAppCustomObjectEntriesParam;
    /** @returns {RemoveInjectableTagParam} */
    static removeInjectableTag(): RemoveInjectableTagParam;
    /** @returns {ResetDataLoaderParam} */
    static resetDataLoader(): ResetDataLoaderParam;
    /** @returns {SampleAppCustomObjectBulkEntryParam} */
    static sampleAppCustomObjectBulkEntry(): SampleAppCustomObjectBulkEntryParam;
    /** @returns {SelectDataLoaderParam} */
    static selectDataLoader(): SelectDataLoaderParam;
    /** @returns {UpdateAnnouncementParam} */
    static updateAnnouncement(): UpdateAnnouncementParam;
    /** @returns {UpdateAnnouncementScheduleParam} */
    static updateAnnouncementSchedule(): UpdateAnnouncementScheduleParam;
    /** @returns {UpdateAppCustomFieldByResourceIdParam} */
    static updateAppCustomFieldByResourceId(): UpdateAppCustomFieldByResourceIdParam;
    /** @returns {UpdateAppCustomFieldDefinitionParam} */
    static updateAppCustomFieldDefinition(): UpdateAppCustomFieldDefinitionParam;
    /** @returns {UpdateAppCustomObjectParam} */
    static updateAppCustomObject(): UpdateAppCustomObjectParam;
    /** @returns {UpdateAppCustomObjectDefinitionParam} */
    static updateAppCustomObjectDefinition(): UpdateAppCustomObjectDefinitionParam;
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
    /** @returns {UpdatePageV1Param} */
    static updatePageV1(): UpdatePageV1Param;
    /** @returns {UpdatePathRedirectionRulesParam} */
    static updatePathRedirectionRules(): UpdatePathRedirectionRulesParam;
    /** @returns {UpdateSEOConfigurationParam} */
    static updateSEOConfiguration(): UpdateSEOConfigurationParam;
    /** @returns {UpdateSupportInformationParam} */
    static updateSupportInformation(): UpdateSupportInformationParam;
}
declare namespace ContentPlatformApplicationValidator {
    export { AddDataLoaderParam, AddFaqParam, AddInjectableTagParam, AddPathRedirectionRulesParam, CreateAnnouncementParam, CreateAppCustomFieldByResourceIdParam, CreateAppCustomFieldDefinitionParam, CreateAppCustomObjectParam, CreateAppCustomObjectDefinitionParam, CreateBlogParam, CreateFaqCategoryParam, CreateInjectableTagParam, CreateLandingPageParam, CreateNavigationParam, CreatePageParam, CreatePagePreviewParam, CreatePageV1Param, CreateSEOMarkupSchemaParam, DeleteAllInjectableTagsParam, DeleteAnnouncementParam, DeleteAppCustomFieldDefinitionParam, DeleteAppCustomFieldsByResourceIdParam, DeleteAppCustomObjectParam, DeleteAppCustomObjectDefinitionParam, DeleteBlogParam, DeleteDataLoaderParam, DeleteFaqParam, DeleteFaqCategoryParam, DeleteLandingPageParam, DeleteNavigationParam, DeletePageParam, DeletePathRedirectionRulesParam, DeleteSEOMarkupSchemaParam, EditDataLoaderParam, EditInjectableTagParam, EditSEOMarkupSchemaParam, ExportAppCustomObjectEntriesParam, GenerateSEOTitleParam, GetAnnouncementByIdParam, GetAnnouncementsListParam, GetAppCustomFieldDefinitionParam, GetAppCustomFieldDefinitionsParam, GetAppCustomFieldJobsParam, GetAppCustomFieldTypesParam, GetAppCustomFieldsParam, GetAppCustomFieldsByResourceIdParam, GetAppCustomObjectParam, GetAppCustomObjectDefinitionParam, GetAppCustomObjectDefinitionsParam, GetAppCustomObjectsParam, GetAppJobsParam, GetAppResourcesParam, GetBlogBySlugParam, GetBlogsParam, GetComponentByIdParam, GetDataLoaderApiSpecsParam, GetDataLoadersParam, GetDataLoadersByServiceParam, GetDefaultNavigationsParam, GetDefaultSEOMarkupSchemaParam, GetFaqByIdOrSlugParam, GetFaqCategoriesParam, GetFaqCategoryBySlugOrIdParam, GetFaqsByCategoryIdOrSlugParam, GetInjectableTagsParam, GetLandingPagesParam, GetLegalInformationParam, GetNavigationBySlugParam, GetNavigationsParam, GetPageBySlugParam, GetPageBySlugV1Param, GetPageMetaParam, GetPageSpecParam, GetPagesParam, GetPagesV1Param, GetPathRedirectionRuleParam, GetPathRedirectionRulesParam, GetSEOConfigurationParam, GetSEOMarkupSchemaParam, GetSEOMarkupSchemasParam, GetSupportInformationParam, ImportAppCustomObjectEntriesParam, RemoveInjectableTagParam, ResetDataLoaderParam, SampleAppCustomObjectBulkEntryParam, SelectDataLoaderParam, UpdateAnnouncementParam, UpdateAnnouncementScheduleParam, UpdateAppCustomFieldByResourceIdParam, UpdateAppCustomFieldDefinitionParam, UpdateAppCustomObjectParam, UpdateAppCustomObjectDefinitionParam, UpdateBlogParam, UpdateFaqParam, UpdateFaqCategoryParam, UpdateInjectableTagParam, UpdateLandingPageParam, UpdateLegalInformationParam, UpdateNavigationParam, UpdatePageParam, UpdatePagePreviewParam, UpdatePageV1Param, UpdatePathRedirectionRulesParam, UpdateSEOConfigurationParam, UpdateSupportInformationParam };
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
type CreateAppCustomFieldByResourceIdParam = {
    resource: string;
    resourceId: string;
    body: ContentPlatformModel.CustomFieldRequestSchema;
};
type CreateAppCustomFieldDefinitionParam = {
    body: ContentPlatformModel.CustomFieldDefinitionRequestSchema;
};
type CreateAppCustomObjectParam = {
    body: ContentPlatformModel.CustomObjectRequestSchema;
};
type CreateAppCustomObjectDefinitionParam = {
    body: ContentPlatformModel.CustomObjectDefinitionRequestSchema;
};
type CreateBlogParam = {
    body: ContentPlatformModel.BlogRequest;
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
    body: ContentPlatformModel.NavigationRequest;
};
type CreatePageParam = {
    body: ContentPlatformModel.PageRequest;
};
type CreatePagePreviewParam = {
    body: ContentPlatformModel.PageRequest;
};
type CreatePageV1Param = {
    body: ContentPlatformModel.PageRequest;
};
type CreateSEOMarkupSchemaParam = {
    body: ContentPlatformModel.SEOSchemaMarkupTemplateRequestBody;
};
type DeleteAnnouncementParam = {
    /**
     * - ID allotted to the announcement.
     */
    announcementId: string;
};
type DeleteAppCustomFieldDefinitionParam = {
    id: string;
};
type DeleteAppCustomFieldsByResourceIdParam = {
    resource: string;
    resourceId: string;
    ids: string;
};
type DeleteAppCustomObjectParam = {
    id: string;
};
type DeleteAppCustomObjectDefinitionParam = {
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
    schemaId: string;
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
type ExportAppCustomObjectEntriesParam = {
    definitionId: string;
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
type GetAppCustomFieldDefinitionParam = {
    id: string;
};
type GetAppCustomFieldDefinitionsParam = {
    pageNo: string;
    pageSize: string;
    resources?: string;
    types?: string;
    search?: string;
};
type GetAppCustomFieldJobsParam = {
    page: string;
    pageSize: string;
    actionType: string;
};
type GetAppCustomFieldsParam = {
    resource: string;
};
type GetAppCustomFieldsByResourceIdParam = {
    resource: string;
    resourceId: string;
};
type GetAppCustomObjectParam = {
    id: string;
};
type GetAppCustomObjectDefinitionParam = {
    id: string;
};
type GetAppCustomObjectDefinitionsParam = {
    pageNo: string;
    pageSize: string;
    search?: string;
};
type GetAppCustomObjectsParam = {
    definitionId?: string;
    pageNo: string;
    pageSize: string;
};
type GetAppJobsParam = {
    page: string;
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
     * Acceptable values are: web, android, ios, all
     */
    devicePlatform: string;
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
type GetPageBySlugV1Param = {
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
type GetPagesV1Param = {
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
type ImportAppCustomObjectEntriesParam = {
    definitionId: string;
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
type SampleAppCustomObjectBulkEntryParam = {
    definitionId: string;
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
type UpdateAppCustomFieldByResourceIdParam = {
    resource: string;
    resourceId: string;
    body: ContentPlatformModel.CustomFieldRequestSchema;
};
type UpdateAppCustomFieldDefinitionParam = {
    id: string;
    body: ContentPlatformModel.CustomFieldDefinitionRequestSchema;
};
type UpdateAppCustomObjectParam = {
    id: string;
    body: ContentPlatformModel.CustomObjectRequestSchema;
};
type UpdateAppCustomObjectDefinitionParam = {
    id: string;
    body: ContentPlatformModel.CustomObjectDefinitionUpdateRequestSchema;
};
type UpdateBlogParam = {
    /**
     * - ID allotted to the blog.
     */
    id: string;
    body: ContentPlatformModel.BlogRequest;
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
    body: ContentPlatformModel.NavigationRequest;
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
    body: ContentPlatformModel.PagePublishRequest;
};
type UpdatePageV1Param = {
    /**
     * - ID allotted to the page.
     */
    id: string;
    body: ContentPlatformModel.PageSchema;
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
type DeleteAllInjectableTagsParam = any;
type GetAppCustomFieldTypesParam = any;
type GetAppResourcesParam = any;
type GetDataLoadersParam = any;
type GetDefaultNavigationsParam = any;
type GetFaqCategoriesParam = any;
type GetInjectableTagsParam = any;
type GetLegalInformationParam = any;
type GetPageMetaParam = any;
type GetPageSpecParam = any;
type GetSEOConfigurationParam = any;
type GetSupportInformationParam = any;
import ContentPlatformModel = require("sdk/output/javascript/code/sdk/platform/Content/ContentPlatformModel");
