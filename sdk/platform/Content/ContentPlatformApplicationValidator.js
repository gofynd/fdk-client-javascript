const Joi = require("joi");

const ContentPlatformModel = require("./ContentPlatformModel");

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
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 * @property {string} [search] - Keyword to filter and find tags by name.
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

/** @typedef GetTagsTemplateParam */

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

class ContentPlatformApplicationValidator {
  /** @returns {AddApplicationLanguageParam} */
  static addApplicationLanguage() {
    return Joi.object({
      body: ContentPlatformModel.ApplicationLanguageCreate().required(),
    }).required();
  }

  /** @returns {AddDataLoaderParam} */
  static addDataLoader() {
    return Joi.object({
      body: ContentPlatformModel.DataLoaderSchema().required(),
    }).required();
  }

  /** @returns {AddFaqParam} */
  static addFaq() {
    return Joi.object({
      categoryId: Joi.string().allow("").required(),
      body: ContentPlatformModel.CreateFaqSchema().required(),
    }).required();
  }

  /** @returns {AddInjectableTagParam} */
  static addInjectableTag() {
    return Joi.object({
      body: ContentPlatformModel.CreateTagRequestSchema().required(),
    }).required();
  }

  /** @returns {AddPathRedirectionRulesParam} */
  static addPathRedirectionRules() {
    return Joi.object({
      body: ContentPlatformModel.PathMappingSchema().required(),
    }).required();
  }

  /** @returns {BulkUnPublishApplicationLanguageParam} */
  static bulkUnPublishApplicationLanguage() {
    return Joi.object({
      body: ContentPlatformModel.unPublishApplicationLanguage().required(),
    }).required();
  }

  /** @returns {CreateAnnouncementParam} */
  static createAnnouncement() {
    return Joi.object({
      body: ContentPlatformModel.AdminAnnouncementSchema().required(),
    }).required();
  }

  /** @returns {CreateAppCustomFieldDefinitionParam} */
  static createAppCustomFieldDefinition() {
    return Joi.object({
      resource: Joi.string().allow("").required(),
      body: ContentPlatformModel.CustomFieldDefinitionRequestSchema().required(),
    }).required();
  }

  /** @returns {CreateAppCustomObjectBySlugParam} */
  static createAppCustomObjectBySlug() {
    return Joi.object({
      definitionSlug: Joi.string().allow("").required(),
      body: ContentPlatformModel.CustomObjectRequestSchemaWithoutId().required(),
    }).required();
  }

  /** @returns {CreateAppCustomObjectDefinitionParam} */
  static createAppCustomObjectDefinition() {
    return Joi.object({
      body: ContentPlatformModel.CustomObjectDefinitionRequestSchema().required(),
    }).required();
  }

  /** @returns {CreateApplicationResourceTranslationParam} */
  static createApplicationResourceTranslation() {
    return Joi.object({
      body: ContentPlatformModel.ResourceTranslationCreate().required(),
    }).required();
  }

  /** @returns {CreateBlogParam} */
  static createBlog() {
    return Joi.object({
      body: ContentPlatformModel.BlogPayload().required(),
    }).required();
  }

  /** @returns {CreateFaqCategoryParam} */
  static createFaqCategory() {
    return Joi.object({
      body: ContentPlatformModel.CreateFaqCategoryRequestSchema().required(),
    }).required();
  }

  /** @returns {CreateLandingPageParam} */
  static createLandingPage() {
    return Joi.object({
      body: ContentPlatformModel.LandingPageSchema().required(),
    }).required();
  }

  /** @returns {CreateNavigationParam} */
  static createNavigation() {
    return Joi.object({
      body: ContentPlatformModel.NavigationPayload().required(),
    }).required();
  }

  /** @returns {CreatePageParam} */
  static createPage() {
    return Joi.object({
      body: ContentPlatformModel.PagePayload().required(),
    }).required();
  }

  /** @returns {CreateSEOMarkupSchemaParam} */
  static createSEOMarkupSchema() {
    return Joi.object({
      body: ContentPlatformModel.SEOSchemaMarkupTemplateRequestBody().required(),
    }).required();
  }

  /** @returns {CreateTranslateUILabelsParam} */
  static createTranslateUILabels() {
    return Joi.object({
      body: ContentPlatformModel.TranslateUiLabelsCreate().required(),
    }).required();
  }

  /** @returns {DeleteAnnouncementParam} */
  static deleteAnnouncement() {
    return Joi.object({
      announcementId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {DeleteAppCustomFieldDefinitionBySlugParam} */
  static deleteAppCustomFieldDefinitionBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      resource: Joi.string().allow("").required(),
      namespace: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {DeleteAppCustomObjectBySlugParam} */
  static deleteAppCustomObjectBySlug() {
    return Joi.object({
      definitionSlug: Joi.string().allow("").required(),
      slug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {DeleteAppCustomObjectDefinitionBySlugParam} */
  static deleteAppCustomObjectDefinitionBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {DeleteApplicationLanguageParam} */
  static deleteApplicationLanguage() {
    return Joi.object({
      locale: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {DeleteApplicationResourceTranslationParam} */
  static deleteApplicationResourceTranslation() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {DeleteBlogParam} */
  static deleteBlog() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {DeleteDataLoaderParam} */
  static deleteDataLoader() {
    return Joi.object({
      dataLoaderId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {DeleteFaqParam} */
  static deleteFaq() {
    return Joi.object({
      categoryId: Joi.string().allow("").required(),
      faqId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {DeleteFaqCategoryParam} */
  static deleteFaqCategory() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {DeleteLandingPageParam} */
  static deleteLandingPage() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {DeleteNavigationParam} */
  static deleteNavigation() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {DeletePageParam} */
  static deletePage() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {DeletePathRedirectionRulesParam} */
  static deletePathRedirectionRules() {
    return Joi.object({
      pathId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {DeleteSEOMarkupSchemaParam} */
  static deleteSEOMarkupSchema() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {EditDataLoaderParam} */
  static editDataLoader() {
    return Joi.object({
      dataLoaderId: Joi.string().allow("").required(),
      body: ContentPlatformModel.DataLoaderSchema().required(),
    }).required();
  }

  /** @returns {EditInjectableTagParam} */
  static editInjectableTag() {
    return Joi.object({
      tagId: Joi.string().allow("").required(),
      body: ContentPlatformModel.UpdateHandpickedSchema().required(),
    }).required();
  }

  /** @returns {EditSEOMarkupSchemaParam} */
  static editSEOMarkupSchema() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: ContentPlatformModel.SEOSchemaMarkupTemplateRequestBody().required(),
    }).required();
  }

  /** @returns {ExportAppCustomObjectEntriesBySlugParam} */
  static exportAppCustomObjectEntriesBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GenerateSEOTitleParam} */
  static generateSEOTitle() {
    return Joi.object({
      type: ContentPlatformModel.GenerationEntityType().required(),
      body: ContentPlatformModel.GenerateSEOContent().required(),
    }).required();
  }

  /** @returns {GetAnnouncementByIdParam} */
  static getAnnouncementById() {
    return Joi.object({
      announcementId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetAnnouncementsListParam} */
  static getAnnouncementsList() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {GetAppCustomFieldDefinitionByResourceParam} */
  static getAppCustomFieldDefinitionByResource() {
    return Joi.object({
      pageNo: Joi.string().allow("").required(),
      pageSize: Joi.string().allow("").required(),
      resource: Joi.string().allow("").required(),
      types: Joi.string().allow(""),
      search: Joi.string().allow(""),
      slugs: Joi.string().allow(""),
      namespaces: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetAppCustomFieldDefinitionBySlugParam} */
  static getAppCustomFieldDefinitionBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      resource: Joi.string().allow("").required(),
      namespace: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetAppCustomFieldDefinitionsParam} */
  static getAppCustomFieldDefinitions() {
    return Joi.object({
      pageNo: Joi.string().allow("").required(),
      pageSize: Joi.string().allow("").required(),
      resources: Joi.string().allow(""),
      types: Joi.string().allow(""),
      search: Joi.string().allow(""),
      slugs: Joi.string().allow(""),
      namespaces: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetAppCustomFieldTypesParam} */
  static getAppCustomFieldTypes() {
    return Joi.object({}).required();
  }

  /** @returns {GetAppCustomFieldsByResourceSlugParam} */
  static getAppCustomFieldsByResourceSlug() {
    return Joi.object({
      resource: Joi.string().allow("").required(),
      resourceSlug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetAppCustomObjectBySlugParam} */
  static getAppCustomObjectBySlug() {
    return Joi.object({
      definitionSlug: Joi.string().allow("").required(),
      slug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetAppCustomObjectDefinitionBySlugParam} */
  static getAppCustomObjectDefinitionBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetAppCustomObjectDefinitionsParam} */
  static getAppCustomObjectDefinitions() {
    return Joi.object({
      pageNo: Joi.string().allow("").required(),
      pageSize: Joi.string().allow("").required(),
      search: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetAppCustomObjectsBySlugParam} */
  static getAppCustomObjectsBySlug() {
    return Joi.object({
      pageNo: Joi.string().allow("").required(),
      pageSize: Joi.string().allow("").required(),
      definitionSlug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetAppJobsParam} */
  static getAppJobs() {
    return Joi.object({
      page: Joi.string().allow("").required(),
      pageSize: Joi.string().allow("").required(),
      actionType: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetAppResourcesParam} */
  static getAppResources() {
    return Joi.object({}).required();
  }

  /** @returns {GetApplicationLanguagesParam} */
  static getApplicationLanguages() {
    return Joi.object({}).required();
  }

  /** @returns {GetApplicationResourceTranslationsParam} */
  static getApplicationResourceTranslations() {
    return Joi.object({
      locale: Joi.string().allow("").required(),
      type: Joi.string().allow("").required(),
      resourceId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetBlogBySlugParam} */
  static getBlogBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetBlogsParam} */
  static getBlogs() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      tags: Joi.string().allow(""),
      q: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      title: Joi.string().allow(""),
      status: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetDataLoadersParam} */
  static getDataLoaders() {
    return Joi.object({}).required();
  }

  /** @returns {GetDataLoadersByServiceParam} */
  static getDataLoadersByService() {
    return Joi.object({
      serviceName: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetDefaultNavigationsParam} */
  static getDefaultNavigations() {
    return Joi.object({}).required();
  }

  /** @returns {GetDefaultSEOMarkupSchemaParam} */
  static getDefaultSEOMarkupSchema() {
    return Joi.object({
      pageType: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetFaqByIdOrSlugParam} */
  static getFaqByIdOrSlug() {
    return Joi.object({
      idOrSlug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetFaqCategoriesParam} */
  static getFaqCategories() {
    return Joi.object({}).required();
  }

  /** @returns {GetFaqCategoryBySlugOrIdParam} */
  static getFaqCategoryBySlugOrId() {
    return Joi.object({
      idOrSlug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetFaqsByCategoryIdOrSlugParam} */
  static getFaqsByCategoryIdOrSlug() {
    return Joi.object({
      idOrSlug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetInjectableTagsParam} */
  static getInjectableTags() {
    return Joi.object({
      all: Joi.boolean(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      search: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetLandingPagesParam} */
  static getLandingPages() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {GetLegalInformationParam} */
  static getLegalInformation() {
    return Joi.object({}).required();
  }

  /** @returns {GetNavigationBySlugParam} */
  static getNavigationBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      devicePlatform: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetNavigationsParam} */
  static getNavigations() {
    return Joi.object({
      devicePlatform: Joi.string().allow("").required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {GetPageBySlugParam} */
  static getPageBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetPageMetaParam} */
  static getPageMeta() {
    return Joi.object({}).required();
  }

  /** @returns {GetPageSpecParam} */
  static getPageSpec() {
    return Joi.object({}).required();
  }

  /** @returns {GetPagesParam} */
  static getPages() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {GetPathRedirectionRuleParam} */
  static getPathRedirectionRule() {
    return Joi.object({
      pathId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetPathRedirectionRulesParam} */
  static getPathRedirectionRules() {
    return Joi.object({
      pageSize: Joi.number(),
      pageNo: Joi.number(),
    }).required();
  }

  /** @returns {GetSEOConfigurationParam} */
  static getSEOConfiguration() {
    return Joi.object({}).required();
  }

  /** @returns {GetSEOMarkupSchemaParam} */
  static getSEOMarkupSchema() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetSEOMarkupSchemasParam} */
  static getSEOMarkupSchemas() {
    return Joi.object({
      title: Joi.string().allow(""),
      active: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {GetSupportInformationParam} */
  static getSupportInformation() {
    return Joi.object({}).required();
  }

  /** @returns {GetTagsTemplateParam} */
  static getTagsTemplate() {
    return Joi.object({}).required();
  }

  /** @returns {GetTranslateUILabelsParam} */
  static getTranslateUILabels() {
    return Joi.object({
      templateThemeId: Joi.string().allow(""),
      themeId: Joi.string().allow(""),
      locale: Joi.string().allow(""),
      type: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetTranslateUILabelsByIdParam} */
  static getTranslateUILabelsById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {ImportAppCustomObjectEntriesBySlugParam} */
  static importAppCustomObjectEntriesBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      body: ContentPlatformModel.CustomObjectBulkSchema().required(),
    }).required();
  }

  /** @returns {RemoveInjectableTagParam} */
  static removeInjectableTag() {
    return Joi.object({
      body: ContentPlatformModel.RemoveHandpickedSchema().required(),
    }).required();
  }

  /** @returns {ResetDataLoaderParam} */
  static resetDataLoader() {
    return Joi.object({
      service: Joi.string().allow("").required(),
      operationId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {SampleAppCustomObjectBulkEntryBySlugParam} */
  static sampleAppCustomObjectBulkEntryBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {SelectDataLoaderParam} */
  static selectDataLoader() {
    return Joi.object({
      dataLoaderId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {UpdateAnnouncementParam} */
  static updateAnnouncement() {
    return Joi.object({
      announcementId: Joi.string().allow("").required(),
      body: ContentPlatformModel.AdminAnnouncementSchema().required(),
    }).required();
  }

  /** @returns {UpdateAnnouncementScheduleParam} */
  static updateAnnouncementSchedule() {
    return Joi.object({
      announcementId: Joi.string().allow("").required(),
      body: ContentPlatformModel.ScheduleSchema().required(),
    }).required();
  }

  /** @returns {UpdateAppCustomFieldByResourceSlugParam} */
  static updateAppCustomFieldByResourceSlug() {
    return Joi.object({
      resource: Joi.string().allow("").required(),
      resourceSlug: Joi.string().allow("").required(),
      body: ContentPlatformModel.CustomFieldRequestSchema().required(),
    }).required();
  }

  /** @returns {UpdateAppCustomFieldDefinitionBySlugParam} */
  static updateAppCustomFieldDefinitionBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      resource: Joi.string().allow("").required(),
      namespace: Joi.string().allow("").required(),
      body: ContentPlatformModel.CustomFieldDefinitionRequestSchema().required(),
    }).required();
  }

  /** @returns {UpdateAppCustomObjectBySlugParam} */
  static updateAppCustomObjectBySlug() {
    return Joi.object({
      definitionSlug: Joi.string().allow("").required(),
      slug: Joi.string().allow("").required(),
      body: ContentPlatformModel.CustomObjectRequestSchemaWithoutId().required(),
    }).required();
  }

  /** @returns {UpdateAppCustomObjectDefinitionBySlugParam} */
  static updateAppCustomObjectDefinitionBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      body: ContentPlatformModel.CustomObjectDefinitionUpdateRequestSchema().required(),
    }).required();
  }

  /** @returns {UpdateApplicationLanguageStatusParam} */
  static updateApplicationLanguageStatus() {
    return Joi.object({
      locale: Joi.string().allow("").required(),
      body: ContentPlatformModel.ApplicationLanguageUpdate().required(),
    }).required();
  }

  /** @returns {UpdateApplicationResourceTranslationParam} */
  static updateApplicationResourceTranslation() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: ContentPlatformModel.ResourceTranslationUpdate().required(),
    }).required();
  }

  /** @returns {UpdateBlogParam} */
  static updateBlog() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: ContentPlatformModel.BlogPayload().required(),
    }).required();
  }

  /** @returns {UpdateFaqParam} */
  static updateFaq() {
    return Joi.object({
      categoryId: Joi.string().allow("").required(),
      faqId: Joi.string().allow("").required(),
      body: ContentPlatformModel.CreateFaqSchema().required(),
    }).required();
  }

  /** @returns {UpdateFaqCategoryParam} */
  static updateFaqCategory() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: ContentPlatformModel.UpdateFaqCategoryRequestSchema().required(),
    }).required();
  }

  /** @returns {UpdateInjectableTagParam} */
  static updateInjectableTag() {
    return Joi.object({
      body: ContentPlatformModel.CreateTagRequestSchema().required(),
    }).required();
  }

  /** @returns {UpdateLandingPageParam} */
  static updateLandingPage() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: ContentPlatformModel.LandingPageSchema().required(),
    }).required();
  }

  /** @returns {UpdateLegalInformationParam} */
  static updateLegalInformation() {
    return Joi.object({
      body: ContentPlatformModel.ApplicationLegal().required(),
    }).required();
  }

  /** @returns {UpdateNavigationParam} */
  static updateNavigation() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: ContentPlatformModel.NavigationPayload().required(),
    }).required();
  }

  /** @returns {UpdatePageParam} */
  static updatePage() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: ContentPlatformModel.PageSchema().required(),
    }).required();
  }

  /** @returns {UpdatePagePreviewParam} */
  static updatePagePreview() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      body: ContentPlatformModel.PagePublishPayload().required(),
    }).required();
  }

  /** @returns {UpdatePathRedirectionRulesParam} */
  static updatePathRedirectionRules() {
    return Joi.object({
      pathId: Joi.string().allow("").required(),
      body: ContentPlatformModel.PathMappingSchema().required(),
    }).required();
  }

  /** @returns {UpdateSEOConfigurationParam} */
  static updateSEOConfiguration() {
    return Joi.object({
      body: ContentPlatformModel.SeoComponent().required(),
    }).required();
  }

  /** @returns {UpdateSupportInformationParam} */
  static updateSupportInformation() {
    return Joi.object({
      body: ContentPlatformModel.Support().required(),
    }).required();
  }

  /** @returns {UpdateTranslateUILabelsParam} */
  static updateTranslateUILabels() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      body: ContentPlatformModel.StaticResourceUpdate().required(),
    }).required();
  }

  /** @returns {UpsertApplicationResourceTranslationInBulkParam} */
  static upsertApplicationResourceTranslationInBulk() {
    return Joi.object({
      body: ContentPlatformModel.ResourceTranslationList().required(),
    }).required();
  }
}

module.exports = ContentPlatformApplicationValidator;
