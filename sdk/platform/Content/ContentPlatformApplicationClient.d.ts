export = Content;
declare class Content {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {ContentPlatformApplicationValidator.AddApplicationLanguageParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name addApplicationLanguage
     * @summary: Add app language
     * @description: Add new languages to application's supported language list. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/addApplicationLanguage/).
     */
    addApplicationLanguage({ body, requestHeaders }?: ContentPlatformApplicationValidator.AddApplicationLanguageParam, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {ContentPlatformApplicationValidator.AddDataLoaderParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.DataLoaderResponseSchema>} -
     *   Success response
     * @name addDataLoader
     * @summary: Create data loader
     * @description: Create and add a new data loader. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/addDataLoader/).
     */
    addDataLoader({ body, requestHeaders }?: ContentPlatformApplicationValidator.AddDataLoaderParam, { responseHeaders }?: object): Promise<ContentPlatformModel.DataLoaderResponseSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.AddFaqParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CreateFaqResponseSchema>} - Success response
     * @name addFaq
     * @summary: Create FAQ
     * @description: Create and add a new FAQ. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/addFaq/).
     */
    addFaq({ categoryId, body, requestHeaders }?: ContentPlatformApplicationValidator.AddFaqParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CreateFaqResponseSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.AddInjectableTagParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.TagsSchema>} - Success response
     * @name addInjectableTag
     * @summary: Create HTML tag
     * @description: Create and add a new injectable tag. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/addInjectableTag/).
     */
    addInjectableTag({ body, requestHeaders }?: ContentPlatformApplicationValidator.AddInjectableTagParam, { responseHeaders }?: object): Promise<ContentPlatformModel.TagsSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.AddPathRedirectionRulesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.PathMappingSchema>} - Success response
     * @name addPathRedirectionRules
     * @summary: Create path redirection rules
     * @description: Create and add rules for path redirection. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/addPathRedirectionRules/).
     */
    addPathRedirectionRules({ body, requestHeaders }?: ContentPlatformApplicationValidator.AddPathRedirectionRulesParam, { responseHeaders }?: object): Promise<ContentPlatformModel.PathMappingSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.BulkUnPublishApplicationLanguageParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name bulkUnPublishApplicationLanguage
     * @summary: Unpublish all languages of sales channel.
     * @description: Unpublish all application's published languages of specific sales channel. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/bulkUnPublishApplicationLanguage/).
     */
    bulkUnPublishApplicationLanguage({ body, requestHeaders }?: ContentPlatformApplicationValidator.BulkUnPublishApplicationLanguageParam, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {ContentPlatformApplicationValidator.CreateAnnouncementParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CreateAnnouncementSchema>} -
     *   Success response
     * @name createAnnouncement
     * @summary: Create announcement
     * @description: Generate and add a new announcement. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/createAnnouncement/).
     */
    createAnnouncement({ body, requestHeaders }?: ContentPlatformApplicationValidator.CreateAnnouncementParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CreateAnnouncementSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.CreateAppCustomFieldDefinitionParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomFieldDefinitionDetailResSchema>}
     *   - Success response
     *
     * @name createAppCustomFieldDefinition
     * @summary: Create custom field definition for a given resource type
     * @description: You can create custom fields definition to any resource so you can extend property of resource. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/createAppCustomFieldDefinition/).
     */
    createAppCustomFieldDefinition({ resource, body, requestHeaders }?: ContentPlatformApplicationValidator.CreateAppCustomFieldDefinitionParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomFieldDefinitionDetailResSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.CreateAppCustomObjectBySlugParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomObjectSchema>} - Success response
     * @name createAppCustomObjectBySlug
     * @summary: Create custom object entries
     * @description: Custom object entries against the custom object definition can be added using this API. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/createAppCustomObjectBySlug/).
     */
    createAppCustomObjectBySlug({ definitionSlug, body, requestHeaders }?: ContentPlatformApplicationValidator.CreateAppCustomObjectBySlugParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.CreateAppCustomObjectDefinitionParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomObjectDefinitionSlugSchema>}
     *   - Success response
     *
     * @name createAppCustomObjectDefinition
     * @summary: Create custom object definition
     * @description: Create a custom object that will have a collection of custom fields and can be used anywhere in the custom field for any resource. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/createAppCustomObjectDefinition/).
     */
    createAppCustomObjectDefinition({ body, requestHeaders }?: ContentPlatformApplicationValidator.CreateAppCustomObjectDefinitionParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectDefinitionSlugSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.CreateApplicationResourceTranslationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.ResourceTranslation>} - Success response
     * @name createApplicationResourceTranslation
     * @summary: Add app translation
     * @description: Create new translations for application resources. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/createApplicationResourceTranslation/).
     */
    createApplicationResourceTranslation({ body, requestHeaders }?: ContentPlatformApplicationValidator.CreateApplicationResourceTranslationParam, { responseHeaders }?: object): Promise<ContentPlatformModel.ResourceTranslation>;
    /**
     * @param {ContentPlatformApplicationValidator.CreateBlogParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.BlogSchema>} - Success response
     * @name createBlog
     * @summary: Create blog
     * @description: Generate and add a new blog. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/createBlog/).
     */
    createBlog({ body, requestHeaders }?: ContentPlatformApplicationValidator.CreateBlogParam, { responseHeaders }?: object): Promise<ContentPlatformModel.BlogSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.CreateFaqCategoryParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CreateFaqCategorySchema>} - Success response
     * @name createFaqCategory
     * @summary: Create FAQ Category
     * @description: Generate and add a new FAQ category. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/createFaqCategory/).
     */
    createFaqCategory({ body, requestHeaders }?: ContentPlatformApplicationValidator.CreateFaqCategoryParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CreateFaqCategorySchema>;
    /**
     * @param {ContentPlatformApplicationValidator.CreateLandingPageParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.LandingPageSchema>} - Success response
     * @name createLandingPage
     * @summary: Create landing page
     * @description: Generate and add a new landing page. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/createLandingPage/).
     */
    createLandingPage({ body, requestHeaders }?: ContentPlatformApplicationValidator.CreateLandingPageParam, { responseHeaders }?: object): Promise<ContentPlatformModel.LandingPageSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.CreateNavigationParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.NavigationSchema>} - Success response
     * @name createNavigation
     * @summary: Create navigation items
     * @description: Generate and add a new navigation element. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/createNavigation/).
     */
    createNavigation({ body, requestHeaders }?: ContentPlatformApplicationValidator.CreateNavigationParam, { responseHeaders }?: object): Promise<ContentPlatformModel.NavigationSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.CreatePageParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.PageSchema>} - Success response
     * @name createPage
     * @summary: Create page
     * @description: Generate and add a new page to the platform. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/createPage/).
     */
    createPage({ body, requestHeaders }?: ContentPlatformApplicationValidator.CreatePageParam, { responseHeaders }?: object): Promise<ContentPlatformModel.PageSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.CreateSEOMarkupSchemaParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.SEOSchemaMarkupTemplate>} - Success response
     * @name createSEOMarkupSchema
     * @summary: Create SEO Markup Schema
     * @description: Use this API to Create SEO Markup Schema - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/createSEOMarkupSchema/).
     */
    createSEOMarkupSchema({ body, requestHeaders }?: ContentPlatformApplicationValidator.CreateSEOMarkupSchemaParam, { responseHeaders }?: object): Promise<ContentPlatformModel.SEOSchemaMarkupTemplate>;
    /**
     * @param {ContentPlatformApplicationValidator.CreateTranslateUILabelsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.TranslateUiLabels>} - Success response
     * @name createTranslateUILabels
     * @summary: Add Translate Ui Labels
     * @description: Creates a new Translate Ui Labels entry with specified configuration and locale settings. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/createTranslateUILabels/).
     */
    createTranslateUILabels({ body, requestHeaders }?: ContentPlatformApplicationValidator.CreateTranslateUILabelsParam, { responseHeaders }?: object): Promise<ContentPlatformModel.TranslateUiLabels>;
    /**
     * @param {ContentPlatformApplicationValidator.DeleteAnnouncementParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CreateAnnouncementSchema>} -
     *   Success response
     * @name deleteAnnouncement
     * @summary: Delete an announcement
     * @description: Remove a specific announcement. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/deleteAnnouncement/).
     */
    deleteAnnouncement({ announcementId, requestHeaders }?: ContentPlatformApplicationValidator.DeleteAnnouncementParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CreateAnnouncementSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.DeleteAppCustomFieldDefinitionBySlugParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomDataDeleteSchema>} - Success response
     * @name deleteAppCustomFieldDefinitionBySlug
     * @summary: Delete custom fields definition
     * @description: Custom field definition and its assosiated custom fields value can be deleted using this api on the basis of definition id. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/deleteAppCustomFieldDefinitionBySlug/).
     */
    deleteAppCustomFieldDefinitionBySlug({ slug, resource, namespace, requestHeaders }?: ContentPlatformApplicationValidator.DeleteAppCustomFieldDefinitionBySlugParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomDataDeleteSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.DeleteAppCustomObjectBySlugParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomDataDeleteSchema>} - Success response
     * @name deleteAppCustomObjectBySlug
     * @summary: Delete custom object
     * @description: A Custom object entry can be deleted by providing the custom object definition slug and custom object entry slug using this endpoint. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/deleteAppCustomObjectBySlug/).
     */
    deleteAppCustomObjectBySlug({ definitionSlug, slug, requestHeaders }?: ContentPlatformApplicationValidator.DeleteAppCustomObjectBySlugParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomDataDeleteSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.DeleteAppCustomObjectDefinitionBySlugParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomObjectDefinitionDeleteResponseSchema>}
     *   - Success response
     *
     * @name deleteAppCustomObjectDefinitionBySlug
     * @summary: Delete custom object definition
     * @description: Custom object definitions can be deleted using this endpoint by providing the definition ID. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/deleteAppCustomObjectDefinitionBySlug/).
     */
    deleteAppCustomObjectDefinitionBySlug({ slug, requestHeaders }?: ContentPlatformApplicationValidator.DeleteAppCustomObjectDefinitionBySlugParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectDefinitionDeleteResponseSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.DeleteApplicationLanguageParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.OperationResponseSchema>} - Success response
     * @name deleteApplicationLanguage
     * @summary: Remove app language
     * @description: Remove a language from application's supported languages. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/deleteApplicationLanguage/).
     */
    deleteApplicationLanguage({ locale, requestHeaders }?: ContentPlatformApplicationValidator.DeleteApplicationLanguageParam, { responseHeaders }?: object): Promise<ContentPlatformModel.OperationResponseSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.DeleteApplicationResourceTranslationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.OperationResponseSchema>} - Success response
     * @name deleteApplicationResourceTranslation
     * @summary: Remove app translation
     * @description: Remove translations for application resources. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/deleteApplicationResourceTranslation/).
     */
    deleteApplicationResourceTranslation({ id, requestHeaders }?: ContentPlatformApplicationValidator.DeleteApplicationResourceTranslationParam, { responseHeaders }?: object): Promise<ContentPlatformModel.OperationResponseSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.DeleteBlogParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.BlogSchema>} - Success response
     * @name deleteBlog
     * @summary: Delete a blog
     * @description: Remove a specific blog. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/deleteBlog/).
     */
    deleteBlog({ id, requestHeaders }?: ContentPlatformApplicationValidator.DeleteBlogParam, { responseHeaders }?: object): Promise<ContentPlatformModel.BlogSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.DeleteDataLoaderParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.DataLoaderResponseSchema>} -
     *   Success response
     * @name deleteDataLoader
     * @summary: Delete a data loader
     * @description: Remove a specific data loader. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/deleteDataLoader/).
     */
    deleteDataLoader({ dataLoaderId, requestHeaders }?: ContentPlatformApplicationValidator.DeleteDataLoaderParam, { responseHeaders }?: object): Promise<ContentPlatformModel.DataLoaderResponseSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.DeleteFaqParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CreateFaqResponseSchema>} - Success response
     * @name deleteFaq
     * @summary: Delete FAQ
     * @description: Remove a specific FAQ. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/deleteFaq/).
     */
    deleteFaq({ categoryId, faqId, requestHeaders }?: ContentPlatformApplicationValidator.DeleteFaqParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CreateFaqResponseSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.DeleteFaqCategoryParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.FaqSchema>} - Success response
     * @name deleteFaqCategory
     * @summary: Delete FAQ category
     * @description: Remove a specific FAQ category. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/deleteFaqCategory/).
     */
    deleteFaqCategory({ id, requestHeaders }?: ContentPlatformApplicationValidator.DeleteFaqCategoryParam, { responseHeaders }?: object): Promise<ContentPlatformModel.FaqSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.DeleteLandingPageParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.LandingPageSchema>} - Success response
     * @name deleteLandingPage
     * @summary: Delete landing page
     * @description: Remove a specific landing page. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/deleteLandingPage/).
     */
    deleteLandingPage({ id, requestHeaders }?: ContentPlatformApplicationValidator.DeleteLandingPageParam, { responseHeaders }?: object): Promise<ContentPlatformModel.LandingPageSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.DeleteNavigationParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.NavigationSchema>} - Success response
     * @name deleteNavigation
     * @summary: Delete navigation
     * @description: Remove a specific navigation element. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/deleteNavigation/).
     */
    deleteNavigation({ id, requestHeaders }?: ContentPlatformApplicationValidator.DeleteNavigationParam, { responseHeaders }?: object): Promise<ContentPlatformModel.NavigationSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.DeletePageParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.PageSchema>} - Success response
     * @name deletePage
     * @summary: Delete page
     * @description: Remove a page from the platform. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/deletePage/).
     */
    deletePage({ id, requestHeaders }?: ContentPlatformApplicationValidator.DeletePageParam, { responseHeaders }?: object): Promise<ContentPlatformModel.PageSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.DeletePathRedirectionRulesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name deletePathRedirectionRules
     * @summary: Delete path redirection rule
     * @description: Remove specific path redirection rules. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/deletePathRedirectionRules/).
     */
    deletePathRedirectionRules({ pathId, requestHeaders }?: ContentPlatformApplicationValidator.DeletePathRedirectionRulesParam, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {ContentPlatformApplicationValidator.DeleteSEOMarkupSchemaParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.SEOSchemaMarkupTemplate>} - Success response
     * @name deleteSEOMarkupSchema
     * @summary: Delete SEO Markup Schema
     * @description: Use this API to Delete SEO Markup Schema - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/deleteSEOMarkupSchema/).
     */
    deleteSEOMarkupSchema({ id, requestHeaders }?: ContentPlatformApplicationValidator.DeleteSEOMarkupSchemaParam, { responseHeaders }?: object): Promise<ContentPlatformModel.SEOSchemaMarkupTemplate>;
    /**
     * @param {ContentPlatformApplicationValidator.EditDataLoaderParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.DataLoaderResponseSchema>} -
     *   Success response
     * @name editDataLoader
     * @summary: Update a data loader
     * @description: Modify the settings of a specific data loader. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/editDataLoader/).
     */
    editDataLoader({ dataLoaderId, body, requestHeaders }?: ContentPlatformApplicationValidator.EditDataLoaderParam, { responseHeaders }?: object): Promise<ContentPlatformModel.DataLoaderResponseSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.EditInjectableTagParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.TagsSchema>} - Success response
     * @name editInjectableTag
     * @summary: Update HTML tag
     * @description: Modify settings for an injectable tag. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/editInjectableTag/).
     */
    editInjectableTag({ tagId, body, requestHeaders }?: ContentPlatformApplicationValidator.EditInjectableTagParam, { responseHeaders }?: object): Promise<ContentPlatformModel.TagsSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.EditSEOMarkupSchemaParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.SEOSchemaMarkupTemplate>} - Success response
     * @name editSEOMarkupSchema
     * @summary: Get SEO Markup Schema
     * @description: Use this API to Get SEO Markup Schema - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/editSEOMarkupSchema/).
     */
    editSEOMarkupSchema({ id, body, requestHeaders }?: ContentPlatformApplicationValidator.EditSEOMarkupSchemaParam, { responseHeaders }?: object): Promise<ContentPlatformModel.SEOSchemaMarkupTemplate>;
    /**
     * @param {ContentPlatformApplicationValidator.ExportAppCustomObjectEntriesBySlugParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomObjectBulkEntryInitiateDownload>}
     *   - Success response
     *
     * @name exportAppCustomObjectEntriesBySlug
     * @summary: Initiate download for bulk custom object entries
     * @description: Custom object bulk export of bulk entries can be perform using this endpoint. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/exportAppCustomObjectEntriesBySlug/).
     */
    exportAppCustomObjectEntriesBySlug({ slug, requestHeaders }?: ContentPlatformApplicationValidator.ExportAppCustomObjectEntriesBySlugParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectBulkEntryInitiateDownload>;
    /**
     * @param {ContentPlatformApplicationValidator.GenerateSEOTitleParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.GeneratedSEOContent>} - Success response
     * @name generateSEOTitle
     * @summary: Generate SEO title
     * @description: Create an SEO-friendly title for content. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/generateSEOTitle/).
     */
    generateSEOTitle({ type, body, requestHeaders }?: ContentPlatformApplicationValidator.GenerateSEOTitleParam, { responseHeaders }?: object): Promise<ContentPlatformModel.GeneratedSEOContent>;
    /**
     * @param {ContentPlatformApplicationValidator.GetAnnouncementByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.AdminAnnouncementSchema>} - Success response
     * @name getAnnouncementById
     * @summary: Get announcement
     * @description: Get detailed information about a specific announcement - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getAnnouncementById/).
     */
    getAnnouncementById({ announcementId, requestHeaders }?: ContentPlatformApplicationValidator.GetAnnouncementByIdParam, { responseHeaders }?: object): Promise<ContentPlatformModel.AdminAnnouncementSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.GetAnnouncementsListParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.GetAnnouncementListSchema>} -
     *   Success response
     * @name getAnnouncementsList
     * @summary: List announcements
     * @description: Lists all announcements - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getAnnouncementsList/).
     */
    getAnnouncementsList({ pageNo, pageSize, requestHeaders }?: ContentPlatformApplicationValidator.GetAnnouncementsListParam, { responseHeaders }?: object): Promise<ContentPlatformModel.GetAnnouncementListSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.GetAppCustomFieldDefinitionByResourceParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomFieldDefinitionsSchema>} -
     *   Success response
     * @name getAppCustomFieldDefinitionByResource
     * @summary: Get custom fields definitions for a given resource type
     * @description: Custom field definitions enable you to include data validation for custom fields, and enable sellers to add custom fields values for resources. With the help of this seller can retrive list of custom field definitions list. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getAppCustomFieldDefinitionByResource/).
     */
    getAppCustomFieldDefinitionByResource({ pageNo, pageSize, resource, types, search, slugs, namespaces, requestHeaders, }?: ContentPlatformApplicationValidator.GetAppCustomFieldDefinitionByResourceParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomFieldDefinitionsSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.GetAppCustomFieldDefinitionBySlugParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.MetaFieldDefinitionDetailResSchema>}
     *   - Success response
     *
     * @name getAppCustomFieldDefinitionBySlug
     * @summary: Get custom fields definition by resource, slug and namespace
     * @description: Custom field definitions can be retrived from this using its slug, namespace and resource - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getAppCustomFieldDefinitionBySlug/).
     */
    getAppCustomFieldDefinitionBySlug({ slug, resource, namespace, requestHeaders }?: ContentPlatformApplicationValidator.GetAppCustomFieldDefinitionBySlugParam, { responseHeaders }?: object): Promise<ContentPlatformModel.MetaFieldDefinitionDetailResSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.GetAppCustomFieldDefinitionsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomFieldDefinitionsSchema>} -
     *   Success response
     * @name getAppCustomFieldDefinitions
     * @summary: Get custom fields definitions
     * @description: Custom field definitions enable you to include data validation for custom fields, and enable sellers to add custom fields values for resources. With the help of this seller can retrive list of custom field definitions list. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getAppCustomFieldDefinitions/).
     */
    getAppCustomFieldDefinitions({ pageNo, pageSize, resources, types, search, slugs, namespaces, requestHeaders, }?: ContentPlatformApplicationValidator.GetAppCustomFieldDefinitionsParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomFieldDefinitionsSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.GetAppCustomFieldTypesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.MetafieldTypesSchema>} - Success response
     * @name getAppCustomFieldTypes
     * @summary: Get custom field types
     * @description: Each custom field and custom field definition has a type, which defines the type of information that it can store. The custom field types have built-in validation. This api will give list of supported custom fields types - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getAppCustomFieldTypes/).
     */
    getAppCustomFieldTypes({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ContentPlatformModel.MetafieldTypesSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.GetAppCustomFieldsByResourceSlugParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomFieldsResponseByResourceIdSchema>}
     *   - Success response
     *
     * @name getAppCustomFieldsByResourceSlug
     * @summary: Get list of custom fields of given resource and resource slug
     * @description: Retrieves a list of custom fields attached to a particular resource by using the resource and resource slug. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getAppCustomFieldsByResourceSlug/).
     */
    getAppCustomFieldsByResourceSlug({ resource, resourceSlug, requestHeaders }?: ContentPlatformApplicationValidator.GetAppCustomFieldsByResourceSlugParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomFieldsResponseByResourceIdSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.GetAppCustomObjectBySlugParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomObjectBySlugSchema>} -
     *   Success response
     * @name getAppCustomObjectBySlug
     * @summary: Get custom object details
     * @description: Details of a custom object entry can be obtained using this endpoint. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getAppCustomObjectBySlug/).
     */
    getAppCustomObjectBySlug({ definitionSlug, slug, requestHeaders }?: ContentPlatformApplicationValidator.GetAppCustomObjectBySlugParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectBySlugSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.GetAppCustomObjectDefinitionBySlugParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomObjectDefinitionSlugSchema>}
     *   - Success response
     *
     * @name getAppCustomObjectDefinitionBySlug
     * @summary: Get custom object definition
     * @description: Custom object definitions can be fetched using their custom object definition slug. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getAppCustomObjectDefinitionBySlug/).
     */
    getAppCustomObjectDefinitionBySlug({ slug, requestHeaders }?: ContentPlatformApplicationValidator.GetAppCustomObjectDefinitionBySlugParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectDefinitionSlugSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.GetAppCustomObjectDefinitionsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomObjectDefinitionsSchema>} -
     *   Success response
     * @name getAppCustomObjectDefinitions
     * @summary: Get custom object definitions
     * @description: Custom object definition lists can be obtained using this endpoint. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getAppCustomObjectDefinitions/).
     */
    getAppCustomObjectDefinitions({ pageNo, pageSize, search, requestHeaders }?: ContentPlatformApplicationValidator.GetAppCustomObjectDefinitionsParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectDefinitionsSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.GetAppCustomObjectsBySlugParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomObjectsSchema>} - Success response
     * @name getAppCustomObjectsBySlug
     * @summary: Get list of custom objects
     * @description: Custom object entries can fetch using this endpoint. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getAppCustomObjectsBySlug/).
     */
    getAppCustomObjectsBySlug({ pageNo, pageSize, definitionSlug, requestHeaders }?: ContentPlatformApplicationValidator.GetAppCustomObjectsBySlugParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectsSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.GetAppJobsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomObjectBulkEntry>} - Success response
     * @name getAppJobs
     * @summary: Get bulk import and export job list
     * @description: Custom object bulk import and export jobs status and details can be obtained using this endpoint. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getAppJobs/).
     */
    getAppJobs({ page, pageSize, actionType, requestHeaders }?: ContentPlatformApplicationValidator.GetAppJobsParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectBulkEntry>;
    /**
     * @param {ContentPlatformApplicationValidator.GetAppResourcesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.ResourcesSchema>} - Success response
     * @name getAppResources
     * @summary: Get resources
     * @description: Each custom fields is assosiated with a resource such as product, promotion, coupon, selling location etc, This will gives list of supported resource list. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getAppResources/).
     */
    getAppResources({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ContentPlatformModel.ResourcesSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.GetApplicationLanguagesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name getApplicationLanguages
     * @summary: Get app languages
     * @description: Fetch all languages configured for the specified application. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getApplicationLanguages/).
     */
    getApplicationLanguages({ requestHeaders }?: any, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {ContentPlatformApplicationValidator.GetApplicationResourceTranslationsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name getApplicationResourceTranslations
     * @summary: Get app translations
     * @description: Fetch translations for application-level resources. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getApplicationResourceTranslations/).
     */
    getApplicationResourceTranslations({ locale, type, resourceId, requestHeaders }?: ContentPlatformApplicationValidator.GetApplicationResourceTranslationsParam, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {ContentPlatformApplicationValidator.GetBlogBySlugParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.BlogSchema>} - Success response
     * @name getBlogBySlug
     * @summary: Get blog by slug
     * @description: Retrieve detailed information about a specific blog using its slug. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getBlogBySlug/).
     */
    getBlogBySlug({ slug, requestHeaders }?: ContentPlatformApplicationValidator.GetBlogBySlugParam, { responseHeaders }?: object): Promise<ContentPlatformModel.BlogSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.GetBlogsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.BlogGetDetails>} - Success response
     * @name getBlogs
     * @summary: List blogs
     * @description: List all blogs - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getBlogs/).
     */
    getBlogs({ pageNo, pageSize, tags, q, slug, title, status, requestHeaders }?: ContentPlatformApplicationValidator.GetBlogsParam, { responseHeaders }?: object): Promise<ContentPlatformModel.BlogGetDetails>;
    /**
     * @param {ContentPlatformApplicationValidator.GetDataLoadersParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.DataLoadersSchema>} - Success response
     * @name getDataLoaders
     * @summary: List data loaders
     * @description: List all Dataloaders - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getDataLoaders/).
     */
    getDataLoaders({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ContentPlatformModel.DataLoadersSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.GetDataLoadersByServiceParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.DataLoaderResponseSchema>} -
     *   Success response
     * @name getDataLoadersByService
     * @summary: List all data loaders
     * @description: Use this to get all data loaders of an application by service name - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getDataLoadersByService/).
     */
    getDataLoadersByService({ serviceName, requestHeaders }?: ContentPlatformApplicationValidator.GetDataLoadersByServiceParam, { responseHeaders }?: object): Promise<ContentPlatformModel.DataLoaderResponseSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.GetDefaultNavigationsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.DefaultNavigationDetails>} -
     *   Success response
     * @name getDefaultNavigations
     * @summary: Get default navigations
     * @description: Retrieve default navigation elements. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getDefaultNavigations/).
     */
    getDefaultNavigations({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ContentPlatformModel.DefaultNavigationDetails>;
    /**
     * @param {ContentPlatformApplicationValidator.GetDefaultSEOMarkupSchemaParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.DefaultSchemaComponent>} - Success response
     * @name getDefaultSEOMarkupSchema
     * @summary: List default SEO Markup Schemas
     * @description: Use this API to List default SEO Markup Schemas - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getDefaultSEOMarkupSchema/).
     */
    getDefaultSEOMarkupSchema({ pageType, requestHeaders }?: ContentPlatformApplicationValidator.GetDefaultSEOMarkupSchemaParam, { responseHeaders }?: object): Promise<ContentPlatformModel.DefaultSchemaComponent>;
    /**
     * @param {ContentPlatformApplicationValidator.GetFaqByIdOrSlugParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CreateFaqResponseSchema>} - Success response
     * @name getFaqByIdOrSlug
     * @summary: Get FAQ or slug
     * @description: Get detailed information about a specific FAQ - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getFaqByIdOrSlug/).
     */
    getFaqByIdOrSlug({ idOrSlug, requestHeaders }?: ContentPlatformApplicationValidator.GetFaqByIdOrSlugParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CreateFaqResponseSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.GetFaqCategoriesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.GetFaqCategoriesSchema>} - Success response
     * @name getFaqCategories
     * @summary: List FAQ Categories
     * @description: List all FAQ Categories - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getFaqCategories/).
     */
    getFaqCategories({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ContentPlatformModel.GetFaqCategoriesSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.GetFaqCategoryBySlugOrIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.GetFaqCategoryBySlugSchema>} -
     *   Success response
     * @name getFaqCategoryBySlugOrId
     * @summary: Get FAQ category
     * @description: Get detailed information about a specific FAQ category - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getFaqCategoryBySlugOrId/).
     */
    getFaqCategoryBySlugOrId({ idOrSlug, requestHeaders }?: ContentPlatformApplicationValidator.GetFaqCategoryBySlugOrIdParam, { responseHeaders }?: object): Promise<ContentPlatformModel.GetFaqCategoryBySlugSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.GetFaqsByCategoryIdOrSlugParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.GetFaqSchema>} - Success response
     * @name getFaqsByCategoryIdOrSlug
     * @summary: List FAQs
     * @description: Retrieve a list of FAQs within a specific category. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getFaqsByCategoryIdOrSlug/).
     */
    getFaqsByCategoryIdOrSlug({ idOrSlug, requestHeaders }?: ContentPlatformApplicationValidator.GetFaqsByCategoryIdOrSlugParam, { responseHeaders }?: object): Promise<ContentPlatformModel.GetFaqSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.GetInjectableTagsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.TagsSchema>} - Success response
     * @name getInjectableTags
     * @summary: Get all HTML tags
     * @description: Retrieve a list of injectable tags. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getInjectableTags/).
     */
    getInjectableTags({ all, requestHeaders }?: ContentPlatformApplicationValidator.GetInjectableTagsParam, { responseHeaders }?: object): Promise<ContentPlatformModel.TagsSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.GetLandingPagesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.LandingPageGetDetails>} - Success response
     * @name getLandingPages
     * @summary: Get landing pages
     * @description: Lists a list landing pages as per device types - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getLandingPages/).
     */
    getLandingPages({ pageNo, pageSize, requestHeaders }?: ContentPlatformApplicationValidator.GetLandingPagesParam, { responseHeaders }?: object): Promise<ContentPlatformModel.LandingPageGetDetails>;
    /**
     * @param {ContentPlatformApplicationValidator.GetLegalInformationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.ApplicationLegal>} - Success response
     * @name getLegalInformation
     * @summary: Get Legal Pages
     * @description: Get legal information and terms - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getLegalInformation/).
     */
    getLegalInformation({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ContentPlatformModel.ApplicationLegal>;
    /**
     * @param {ContentPlatformApplicationValidator.GetNavigationBySlugParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.NavigationSchema>} - Success response
     * @name getNavigationBySlug
     * @summary: Get navigation by slug
     * @description: Retrieve detailed information about a specific navigation element. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getNavigationBySlug/).
     */
    getNavigationBySlug({ slug, devicePlatform, requestHeaders }?: ContentPlatformApplicationValidator.GetNavigationBySlugParam, { responseHeaders }?: object): Promise<ContentPlatformModel.NavigationSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.GetNavigationsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.NavigationGetDetails>} - Success response
     * @name getNavigations
     * @summary: Get navigation items
     * @description: Retrieve a list of navigational elements. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getNavigations/).
     */
    getNavigations({ devicePlatform, pageNo, pageSize, requestHeaders }?: ContentPlatformApplicationValidator.GetNavigationsParam, { responseHeaders }?: object): Promise<ContentPlatformModel.NavigationGetDetails>;
    /**
     * @param {ContentPlatformApplicationValidator.GetPageBySlugParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.PageSchema>} - Success response
     * @name getPageBySlug
     * @summary: Get page by slug
     * @description: Get detailed information about a specific page using its slug. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getPageBySlug/).
     */
    getPageBySlug({ slug, requestHeaders }?: ContentPlatformApplicationValidator.GetPageBySlugParam, { responseHeaders }?: object): Promise<ContentPlatformModel.PageSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.GetPageMetaParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.PageMetaSchema>} - Success response
     * @name getPageMeta
     * @summary: Get page meta
     * @description: Use this API to Get metadata for a specific page. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getPageMeta/).
     */
    getPageMeta({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ContentPlatformModel.PageMetaSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.GetPageSpecParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.PageSpec>} - Success response
     * @name getPageSpec
     * @summary: Get page specification
     * @description: Use this API to Get specifications and details for a specific page - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getPageSpec/).
     */
    getPageSpec({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ContentPlatformModel.PageSpec>;
    /**
     * @param {ContentPlatformApplicationValidator.GetPagesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.PageGetDetails>} - Success response
     * @name getPages
     * @summary: Get pages
     * @description: Retrieve a list of available pages. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getPages/).
     */
    getPages({ pageNo, pageSize, requestHeaders }?: ContentPlatformApplicationValidator.GetPagesParam, { responseHeaders }?: object): Promise<ContentPlatformModel.PageGetDetails>;
    /**
     * @param {ContentPlatformApplicationValidator.GetPathRedirectionRuleParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.PathMappingSchema>} - Success response
     * @name getPathRedirectionRule
     * @summary: Get Path Redirection Rule
     * @description: Use this API to Get detailed information about a specific path redirection rule - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getPathRedirectionRule/).
     */
    getPathRedirectionRule({ pathId, requestHeaders }?: ContentPlatformApplicationValidator.GetPathRedirectionRuleParam, { responseHeaders }?: object): Promise<ContentPlatformModel.PathMappingSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.GetPathRedirectionRulesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.PathMappingSchema>} - Success response
     * @name getPathRedirectionRules
     * @summary: List Path Redirection Rules
     * @description: Use this API to List Path Redirection Rules - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getPathRedirectionRules/).
     */
    getPathRedirectionRules({ pageSize, pageNo, requestHeaders }?: ContentPlatformApplicationValidator.GetPathRedirectionRulesParam, { responseHeaders }?: object): Promise<ContentPlatformModel.PathMappingSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.GetSEOConfigurationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.SeoComponent>} - Success response
     * @name getSEOConfiguration
     * @summary: Get sales channel SEO
     * @description: Retrieve configuration settings for SEO. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getSEOConfiguration/).
     */
    getSEOConfiguration({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ContentPlatformModel.SeoComponent>;
    /**
     * @param {ContentPlatformApplicationValidator.GetSEOMarkupSchemaParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.SEOSchemaMarkupTemplate>} - Success response
     * @name getSEOMarkupSchema
     * @summary: Get SEO Markup Schema
     * @description: Use this API to Get SEO Markup Schema - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getSEOMarkupSchema/).
     */
    getSEOMarkupSchema({ id, requestHeaders }?: ContentPlatformApplicationValidator.GetSEOMarkupSchemaParam, { responseHeaders }?: object): Promise<ContentPlatformModel.SEOSchemaMarkupTemplate>;
    /**
     * @param {ContentPlatformApplicationValidator.GetSEOMarkupSchemasParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.SeoSchemaComponent>} - Success response
     * @name getSEOMarkupSchemas
     * @summary: List default SEO Markup Schemas
     * @description: Use this API to List default SEO Markup Schemas - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getSEOMarkupSchemas/).
     */
    getSEOMarkupSchemas({ title, active, pageNo, pageSize, requestHeaders }?: ContentPlatformApplicationValidator.GetSEOMarkupSchemasParam, { responseHeaders }?: object): Promise<ContentPlatformModel.SeoSchemaComponent>;
    /**
     * @param {ContentPlatformApplicationValidator.GetSupportInformationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.Support>} - Success response
     * @name getSupportInformation
     * @summary: Get support information
     * @description: Retrieve information related to customer support. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getSupportInformation/).
     */
    getSupportInformation({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ContentPlatformModel.Support>;
    /**
     * @param {ContentPlatformApplicationValidator.GetTranslateUILabelsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.TranslateUiLabelsPage>} - Success response
     * @name getTranslateUILabels
     * @summary: Get Translate Ui Labels
     * @description: Retrieves Translate Ui Labels with optional filtering by type, application, and company identifiers. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getTranslateUILabels/).
     */
    getTranslateUILabels({ templateThemeId, themeId, locale, type, requestHeaders }?: ContentPlatformApplicationValidator.GetTranslateUILabelsParam, { responseHeaders }?: object): Promise<ContentPlatformModel.TranslateUiLabelsPage>;
    /**
     * @param {ContentPlatformApplicationValidator.GetTranslateUILabelsByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.TranslateUiLabels>} - Success response
     * @name getTranslateUILabelsById
     * @summary: Get Resource Detail
     * @description: Fetches detailed information for a specific Translate Ui Labels using its unique identifier. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getTranslateUILabelsById/).
     */
    getTranslateUILabelsById({ id, requestHeaders }?: ContentPlatformApplicationValidator.GetTranslateUILabelsByIdParam, { responseHeaders }?: object): Promise<ContentPlatformModel.TranslateUiLabels>;
    /**
     * @param {ContentPlatformApplicationValidator.ImportAppCustomObjectEntriesBySlugParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomObjectEntryBulkUploadDetails>}
     *   - Success response
     *
     * @name importAppCustomObjectEntriesBySlug
     * @summary: Bulk custom object entries upload
     * @description: Custom object bulk import of bulk entries can be performed using this endpoint. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/importAppCustomObjectEntriesBySlug/).
     */
    importAppCustomObjectEntriesBySlug({ slug, body, requestHeaders }?: ContentPlatformApplicationValidator.ImportAppCustomObjectEntriesBySlugParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectEntryBulkUploadDetails>;
    /**
     * @param {ContentPlatformApplicationValidator.RemoveInjectableTagParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.TagDeleteSuccessDetails>} - Success response
     * @name removeInjectableTag
     * @summary: Remove HTML tag
     * @description: Delete a specific injectable tag. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/removeInjectableTag/).
     */
    removeInjectableTag({ body, requestHeaders }?: ContentPlatformApplicationValidator.RemoveInjectableTagParam, { responseHeaders }?: object): Promise<ContentPlatformModel.TagDeleteSuccessDetails>;
    /**
     * @param {ContentPlatformApplicationValidator.ResetDataLoaderParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.DataLoaderResetResponseSchema>} -
     *   Success response
     * @name resetDataLoader
     * @summary: Reset a data loader
     * @description: Clear and reset data loader settings. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/resetDataLoader/).
     */
    resetDataLoader({ service, operationId, requestHeaders }?: ContentPlatformApplicationValidator.ResetDataLoaderParam, { responseHeaders }?: object): Promise<ContentPlatformModel.DataLoaderResetResponseSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.SampleAppCustomObjectBulkEntryBySlugParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<string>} - Success response
     * @name sampleAppCustomObjectBulkEntryBySlug
     * @summary: Download sample for custom object bulk entry
     * @description: Sample files for custom object bulk import can be obtained from this endpoint. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/sampleAppCustomObjectBulkEntryBySlug/).
     */
    sampleAppCustomObjectBulkEntryBySlug({ slug, requestHeaders }?: ContentPlatformApplicationValidator.SampleAppCustomObjectBulkEntryBySlugParam, { responseHeaders }?: object): Promise<string>;
    /**
     * @param {ContentPlatformApplicationValidator.SelectDataLoaderParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.DataLoaderResponseSchema>} -
     *   Success response
     * @name selectDataLoader
     * @summary: Select a data loader
     * @description: Choose and set a data loader for use. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/selectDataLoader/).
     */
    selectDataLoader({ dataLoaderId, requestHeaders }?: ContentPlatformApplicationValidator.SelectDataLoaderParam, { responseHeaders }?: object): Promise<ContentPlatformModel.DataLoaderResponseSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.UpdateAnnouncementParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CreateAnnouncementSchema>} -
     *   Success response
     * @name updateAnnouncement
     * @summary: Update announcement
     * @description: Modify the content and settings of a specific announcement. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/updateAnnouncement/).
     */
    updateAnnouncement({ announcementId, body, requestHeaders }?: ContentPlatformApplicationValidator.UpdateAnnouncementParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CreateAnnouncementSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.UpdateAnnouncementScheduleParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CreateAnnouncementSchema>} -
     *   Success response
     * @name updateAnnouncementSchedule
     * @summary: Update announcement schedule
     * @description: Modify the scheduling of a specific announcement. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/updateAnnouncementSchedule/).
     */
    updateAnnouncementSchedule({ announcementId, body, requestHeaders }?: ContentPlatformApplicationValidator.UpdateAnnouncementScheduleParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CreateAnnouncementSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.UpdateAppCustomFieldByResourceSlugParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomFieldsResponseByResourceIdSchema>}
     *   - Success response
     *
     * @name updateAppCustomFieldByResourceSlug
     * @summary: Create custom field entries for gives resource and resource slug
     * @description: You can add a custom field using this endpoint to any resource by providing the resource slug. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/updateAppCustomFieldByResourceSlug/).
     */
    updateAppCustomFieldByResourceSlug({ resource, resourceSlug, body, requestHeaders }?: ContentPlatformApplicationValidator.UpdateAppCustomFieldByResourceSlugParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomFieldsResponseByResourceIdSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.UpdateAppCustomFieldDefinitionBySlugParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomFieldDefinitionDetailResSchema>}
     *   - Success response
     *
     * @name updateAppCustomFieldDefinitionBySlug
     * @summary: Update custom field definition
     * @description: Custom fields definition can be update using this api, You can update custom field definition name and description. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/updateAppCustomFieldDefinitionBySlug/).
     */
    updateAppCustomFieldDefinitionBySlug({ slug, resource, namespace, body, requestHeaders }?: ContentPlatformApplicationValidator.UpdateAppCustomFieldDefinitionBySlugParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomFieldDefinitionDetailResSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.UpdateAppCustomObjectBySlugParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomObjectBySlugSchema>} -
     *   Success response
     * @name updateAppCustomObjectBySlug
     * @summary: Update custom object details
     * @description: Custom object entries can be updated using this endpoint. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/updateAppCustomObjectBySlug/).
     */
    updateAppCustomObjectBySlug({ definitionSlug, slug, body, requestHeaders }?: ContentPlatformApplicationValidator.UpdateAppCustomObjectBySlugParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectBySlugSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.UpdateAppCustomObjectDefinitionBySlugParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomObjectDefinitionSlugSchema>}
     *   - Success response
     *
     * @name updateAppCustomObjectDefinitionBySlug
     * @summary: Update custom object definition
     * @description: Custom object definitions can be updated using this endpoint. You can update the name and description of the custom object and add more custom field definitions to the existing custom object. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/updateAppCustomObjectDefinitionBySlug/).
     */
    updateAppCustomObjectDefinitionBySlug({ slug, body, requestHeaders }?: ContentPlatformApplicationValidator.UpdateAppCustomObjectDefinitionBySlugParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectDefinitionSlugSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.UpdateApplicationLanguageStatusParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.ApplicationLanguage>} - Success response
     * @name updateApplicationLanguageStatus
     * @summary: Set app language
     * @description: Update language status and settings for the application. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/updateApplicationLanguageStatus/).
     */
    updateApplicationLanguageStatus({ locale, body, requestHeaders }?: ContentPlatformApplicationValidator.UpdateApplicationLanguageStatusParam, { responseHeaders }?: object): Promise<ContentPlatformModel.ApplicationLanguage>;
    /**
     * @param {ContentPlatformApplicationValidator.UpdateApplicationResourceTranslationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.ResourceTranslation>} - Success response
     * @name updateApplicationResourceTranslation
     * @summary: Update app translation
     * @description: Update existing translations for application resources. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/updateApplicationResourceTranslation/).
     */
    updateApplicationResourceTranslation({ id, body, requestHeaders }?: ContentPlatformApplicationValidator.UpdateApplicationResourceTranslationParam, { responseHeaders }?: object): Promise<ContentPlatformModel.ResourceTranslation>;
    /**
     * @param {ContentPlatformApplicationValidator.UpdateBlogParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.BlogSchema>} - Success response
     * @name updateBlog
     * @summary: Update a blog
     * @description: Modify the content and settings of a specific blog. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/updateBlog/).
     */
    updateBlog({ id, body, requestHeaders }?: ContentPlatformApplicationValidator.UpdateBlogParam, { responseHeaders }?: object): Promise<ContentPlatformModel.BlogSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.UpdateFaqParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CreateFaqResponseSchema>} - Success response
     * @name updateFaq
     * @summary: Update FAQ
     * @description: Modify the content and settings of a specific FAQ. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/updateFaq/).
     */
    updateFaq({ categoryId, faqId, body, requestHeaders }?: ContentPlatformApplicationValidator.UpdateFaqParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CreateFaqResponseSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.UpdateFaqCategoryParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CreateFaqCategorySchema>} - Success response
     * @name updateFaqCategory
     * @summary: Update FAQ category
     * @description: Modify the content and settings of a specific FAQ category. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/updateFaqCategory/).
     */
    updateFaqCategory({ id, body, requestHeaders }?: ContentPlatformApplicationValidator.UpdateFaqCategoryParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CreateFaqCategorySchema>;
    /**
     * @param {ContentPlatformApplicationValidator.UpdateInjectableTagParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.TagsSchema>} - Success response
     * @name updateInjectableTag
     * @summary: Update HTML tag
     * @description: Modify settings for an injectable tag. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/updateInjectableTag/).
     */
    updateInjectableTag({ body, requestHeaders }?: ContentPlatformApplicationValidator.UpdateInjectableTagParam, { responseHeaders }?: object): Promise<ContentPlatformModel.TagsSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.UpdateLandingPageParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.LandingPageSchema>} - Success response
     * @name updateLandingPage
     * @summary: Update landing page
     * @description: Modify the content and settings of a specific landing page. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/updateLandingPage/).
     */
    updateLandingPage({ id, body, requestHeaders }?: ContentPlatformApplicationValidator.UpdateLandingPageParam, { responseHeaders }?: object): Promise<ContentPlatformModel.LandingPageSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.UpdateLegalInformationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.ApplicationLegal>} - Success response
     * @name updateLegalInformation
     * @summary: Update Legal Pages
     * @description: Modify legal information and terms. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/updateLegalInformation/).
     */
    updateLegalInformation({ body, requestHeaders }?: ContentPlatformApplicationValidator.UpdateLegalInformationParam, { responseHeaders }?: object): Promise<ContentPlatformModel.ApplicationLegal>;
    /**
     * @param {ContentPlatformApplicationValidator.UpdateNavigationParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.NavigationSchema>} - Success response
     * @name updateNavigation
     * @summary: Update navigation
     * @description: Modify the content and settings of a specific navigation element. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/updateNavigation/).
     */
    updateNavigation({ id, body, requestHeaders }?: ContentPlatformApplicationValidator.UpdateNavigationParam, { responseHeaders }?: object): Promise<ContentPlatformModel.NavigationSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.UpdatePageParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.PageSchema>} - Success response
     * @name updatePage
     * @summary: Update page
     * @description: Modify and update the content of a page. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/updatePage/).
     */
    updatePage({ id, body, requestHeaders }?: ContentPlatformApplicationValidator.UpdatePageParam, { responseHeaders }?: object): Promise<ContentPlatformModel.PageSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.UpdatePagePreviewParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.PageSchema>} - Success response
     * @name updatePagePreview
     * @summary: Update page preview
     * @description: Modify the content and settings of a specific page preview. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/updatePagePreview/).
     */
    updatePagePreview({ slug, body, requestHeaders }?: ContentPlatformApplicationValidator.UpdatePagePreviewParam, { responseHeaders }?: object): Promise<ContentPlatformModel.PageSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.UpdatePathRedirectionRulesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.PathMappingSchema>} - Success response
     * @name updatePathRedirectionRules
     * @summary: Update path redirection rule
     * @description: Modify settings for path redirection rules. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/updatePathRedirectionRules/).
     */
    updatePathRedirectionRules({ pathId, body, requestHeaders }?: ContentPlatformApplicationValidator.UpdatePathRedirectionRulesParam, { responseHeaders }?: object): Promise<ContentPlatformModel.PathMappingSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.UpdateSEOConfigurationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.SeoSchema>} - Success response
     * @name updateSEOConfiguration
     * @summary: Update sales channel SEO information
     * @description: Modify configuration settings for SEO. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/updateSEOConfiguration/).
     */
    updateSEOConfiguration({ body, requestHeaders }?: ContentPlatformApplicationValidator.UpdateSEOConfigurationParam, { responseHeaders }?: object): Promise<ContentPlatformModel.SeoSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.UpdateSupportInformationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.Support>} - Success response
     * @name updateSupportInformation
     * @summary: Update Customer Support Information
     * @description: Modify information related to customer support. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/updateSupportInformation/).
     */
    updateSupportInformation({ body, requestHeaders }?: ContentPlatformApplicationValidator.UpdateSupportInformationParam, { responseHeaders }?: object): Promise<ContentPlatformModel.Support>;
    /**
     * @param {ContentPlatformApplicationValidator.UpdateTranslateUILabelsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.TranslateUiLabels>} - Success response
     * @name updateTranslateUILabels
     * @summary: Update Resource Detail
     * @description: Modifies existing Translate Ui Labels properties including locale, type, and associated configurations. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/updateTranslateUILabels/).
     */
    updateTranslateUILabels({ id, body, requestHeaders }?: ContentPlatformApplicationValidator.UpdateTranslateUILabelsParam, { responseHeaders }?: object): Promise<ContentPlatformModel.TranslateUiLabels>;
    /**
     * @param {ContentPlatformApplicationValidator.UpsertApplicationResourceTranslationInBulkParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.ResourceTranslationBulkUpsert>} -
     *   Success response
     * @name upsertApplicationResourceTranslationInBulk
     * @summary: Bulk update translations
     * @description: Create or update multiple translations in a single request. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/upsertApplicationResourceTranslationInBulk/).
     */
    upsertApplicationResourceTranslationInBulk({ body, requestHeaders }?: ContentPlatformApplicationValidator.UpsertApplicationResourceTranslationInBulkParam, { responseHeaders }?: object): Promise<ContentPlatformModel.ResourceTranslationBulkUpsert>;
}
import ContentPlatformApplicationValidator = require("./ContentPlatformApplicationValidator");
import ContentPlatformModel = require("./ContentPlatformModel");
