export = Content;
declare class Content {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {ContentPlatformApplicationValidator.AddDataLoaderParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.DataLoaderResponseSchema>} -
     *   Success response
     * @name addDataLoader
     * @summary: Create data loader
     * @description: Create and add a new data loader. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/addDataLoader/).
     */
    addDataLoader({ body, requestHeaders }?: ContentPlatformApplicationValidator.AddDataLoaderParam, { responseHeaders }?: object): Promise<ContentPlatformModel.DataLoaderResponseSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.AddFaqParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CreateFaqResponseSchema>} - Success response
     * @name addFaq
     * @summary: Create FAQ
     * @description: Create and add a new FAQ. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/addFaq/).
     */
    addFaq({ categoryId, body, requestHeaders }?: ContentPlatformApplicationValidator.AddFaqParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CreateFaqResponseSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.AddInjectableTagParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.TagsSchema>} - Success response
     * @name addInjectableTag
     * @summary: Create HTML tag
     * @description: Create and add a new injectable tag - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/addInjectableTag/).
     */
    addInjectableTag({ body, requestHeaders }?: ContentPlatformApplicationValidator.AddInjectableTagParam, { responseHeaders }?: object): Promise<ContentPlatformModel.TagsSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.AddPathRedirectionRulesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CreatePathMappingSchema>} - Success response
     * @name addPathRedirectionRules
     * @summary: Create path redirection rules
     * @description: Create and add rules for path redirection. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/addPathRedirectionRules/).
     */
    addPathRedirectionRules({ body, requestHeaders }?: ContentPlatformApplicationValidator.AddPathRedirectionRulesParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CreatePathMappingSchema>;
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
     * @description: Generate and add a new announcement. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/createAnnouncement/).
     */
    createAnnouncement({ body, requestHeaders }?: ContentPlatformApplicationValidator.CreateAnnouncementParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CreateAnnouncementSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.CreateAppCustomFieldByResourceIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomFieldsResponseByResourceIdSchema>}
     *   - Success response
     *
     * @name createAppCustomFieldByResourceId
     * @summary: Create custom field entries for gives resource and resource_id
     * @description: You can add a custom field using this endpoint to any resource by providing the resource ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/createAppCustomFieldByResourceId/).
     */
    createAppCustomFieldByResourceId({ resource, resourceId, body, requestHeaders }?: ContentPlatformApplicationValidator.CreateAppCustomFieldByResourceIdParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomFieldsResponseByResourceIdSchema>;
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
     * @summary: Create custom field definition
     * @description: You can create custom fields definition to any resource so you can extend property of resource. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/createAppCustomFieldDefinition/).
     */
    createAppCustomFieldDefinition({ body, requestHeaders }?: ContentPlatformApplicationValidator.CreateAppCustomFieldDefinitionParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomFieldDefinitionDetailResSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.CreateAppCustomObjectParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomObjectSchema>} - Success response
     * @name createAppCustomObject
     * @summary: Create custom object entries
     * @description: Custom object entries against the custom object definition can be added using this API. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/createAppCustomObject/).
     */
    createAppCustomObject({ body, requestHeaders }?: ContentPlatformApplicationValidator.CreateAppCustomObjectParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.CreateAppCustomObjectDefinitionParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomObjectDefinitionSchema>} -
     *   Success response
     * @name createAppCustomObjectDefinition
     * @summary: Create custom object definition
     * @description: Create a custom object that will have a collection of custom fields and can be used anywhere in the custom field for any resource. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/createAppCustomObjectDefinition/).
     */
    createAppCustomObjectDefinition({ body, requestHeaders }?: ContentPlatformApplicationValidator.CreateAppCustomObjectDefinitionParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectDefinitionSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.CreateBlogParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.BlogSchema>} - Success response
     * @name createBlog
     * @summary: Create blog
     * @description: Generate and add a new blog. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/createBlog/).
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
     * @description: Generate and add a new FAQ category. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/createFaqCategory/).
     */
    createFaqCategory({ body, requestHeaders }?: ContentPlatformApplicationValidator.CreateFaqCategoryParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CreateFaqCategorySchema>;
    /**
     * @param {ContentPlatformApplicationValidator.CreateInjectableTagParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.TagsSchema>} - Success response
     * @name createInjectableTag
     * @summary: Create HTML tags
     * @description: Use this API to create HTML tags. This includes a list of tags with name, tag type (css/js), url and position of the tag - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/createInjectableTag/).
     */
    createInjectableTag({ body, requestHeaders }?: ContentPlatformApplicationValidator.CreateInjectableTagParam, { responseHeaders }?: object): Promise<ContentPlatformModel.TagsSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.CreateLandingPageParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.LandingPageSchema>} - Success response
     * @name createLandingPage
     * @summary: Create landing page
     * @description: Generate and add a new landing page. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/createLandingPage/).
     */
    createLandingPage({ body, requestHeaders }?: ContentPlatformApplicationValidator.CreateLandingPageParam, { responseHeaders }?: object): Promise<ContentPlatformModel.LandingPageSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.CreateNavigationParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.NavigationSchema>} - Success response
     * @name createNavigation
     * @summary: Create navigation items
     * @description: Generate and add a new navigation element. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/createNavigation/).
     */
    createNavigation({ body, requestHeaders }?: ContentPlatformApplicationValidator.CreateNavigationParam, { responseHeaders }?: object): Promise<ContentPlatformModel.NavigationSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.CreatePageParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.PageSchema>} - Success response
     * @name createPage
     * @summary: Create page
     * @description: Generate and add a new page to the platform. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/createPage/).
     */
    createPage({ body, requestHeaders }?: ContentPlatformApplicationValidator.CreatePageParam, { responseHeaders }?: object): Promise<ContentPlatformModel.PageSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.CreatePagePreviewParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.PageSchema>} - Success response
     * @name createPagePreview
     * @summary: Create page preview
     * @description: Generate and add a new page preview. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/createPagePreview/).
     */
    createPagePreview({ body, requestHeaders }?: ContentPlatformApplicationValidator.CreatePagePreviewParam, { responseHeaders }?: object): Promise<ContentPlatformModel.PageSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.CreateSEOMarkupSchemaParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.SEOSchemaMarkupTemplate>} - Success response
     * @name createSEOMarkupSchema
     * @summary: Create SEO Markup Schema
     * @description: Use this API to Create SEO Markup Schema - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/createSEOMarkupSchema/).
     */
    createSEOMarkupSchema({ body, requestHeaders }?: ContentPlatformApplicationValidator.CreateSEOMarkupSchemaParam, { responseHeaders }?: object): Promise<ContentPlatformModel.SEOSchemaMarkupTemplate>;
    /**
     * @param {ContentPlatformApplicationValidator.DeleteAllInjectableTagsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.TagsSchema>} - Success response
     * @name deleteAllInjectableTags
     * @summary: Delete HTML tags in application
     * @description: Use this API to delete all the existing tags at once - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteAllInjectableTags/).
     */
    deleteAllInjectableTags({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ContentPlatformModel.TagsSchema>;
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
     * @description: Remove a specific announcement. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteAnnouncement/).
     */
    deleteAnnouncement({ announcementId, requestHeaders }?: ContentPlatformApplicationValidator.DeleteAnnouncementParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CreateAnnouncementSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.DeleteAppCustomFieldDefinitionParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomDataDeleteSchema>} - Success response
     * @name deleteAppCustomFieldDefinition
     * @summary: Delete custom fields definition
     * @description: Custom field definition and its assosiated custom fields value can be deleted using this api on the basis of definition id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteAppCustomFieldDefinition/).
     */
    deleteAppCustomFieldDefinition({ id, requestHeaders }?: ContentPlatformApplicationValidator.DeleteAppCustomFieldDefinitionParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomDataDeleteSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.DeleteAppCustomFieldsByResourceIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomFieldsDeleteSchema>} -
     *   Success response
     * @name deleteAppCustomFieldsByResourceId
     * @summary: delete custom fields of given resource and resource id
     * @description: Use this API to delete the custom fields for given resource in param. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteAppCustomFieldsByResourceId/).
     */
    deleteAppCustomFieldsByResourceId({ resource, resourceId, ids, requestHeaders }?: ContentPlatformApplicationValidator.DeleteAppCustomFieldsByResourceIdParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomFieldsDeleteSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.DeleteAppCustomObjectParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomDataDeleteSchema>} - Success response
     * @name deleteAppCustomObject
     * @summary: Delete custom object
     * @description: Custom object entries can be deleted by providing the delete ID using this endpoint. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteAppCustomObject/).
     */
    deleteAppCustomObject({ id, requestHeaders }?: ContentPlatformApplicationValidator.DeleteAppCustomObjectParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomDataDeleteSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.DeleteAppCustomObjectDefinitionParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomObjectDefinitionDeleteResponseSchema>}
     *   - Success response
     *
     * @name deleteAppCustomObjectDefinition
     * @summary: Delete custom object definition
     * @description: Custom object definitions can be deleted using this endpoint by providing the definition ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteAppCustomObjectDefinition/).
     */
    deleteAppCustomObjectDefinition({ id, requestHeaders }?: ContentPlatformApplicationValidator.DeleteAppCustomObjectDefinitionParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectDefinitionDeleteResponseSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.DeleteBlogParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.BlogSchema>} - Success response
     * @name deleteBlog
     * @summary: Delete a blog
     * @description: Remove a specific blog. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteBlog/).
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
     * @description: Remove a specific data loader. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteDataLoader/).
     */
    deleteDataLoader({ dataLoaderId, requestHeaders }?: ContentPlatformApplicationValidator.DeleteDataLoaderParam, { responseHeaders }?: object): Promise<ContentPlatformModel.DataLoaderResponseSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.DeleteFaqParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CreateFaqResponseSchema>} - Success response
     * @name deleteFaq
     * @summary: Delete FAQ
     * @description: Remove a specific FAQ. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteFaq/).
     */
    deleteFaq({ categoryId, faqId, requestHeaders }?: ContentPlatformApplicationValidator.DeleteFaqParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CreateFaqResponseSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.DeleteFaqCategoryParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CreateFaqCategorySchema>} - Success response
     * @name deleteFaqCategory
     * @summary: Delete FAQ category
     * @description: Remove a specific FAQ category. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteFaqCategory/).
     */
    deleteFaqCategory({ id, requestHeaders }?: ContentPlatformApplicationValidator.DeleteFaqCategoryParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CreateFaqCategorySchema>;
    /**
     * @param {ContentPlatformApplicationValidator.DeleteLandingPageParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.LandingPageSchema>} - Success response
     * @name deleteLandingPage
     * @summary: Delete landing page
     * @description: Remove a specific landing page. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteLandingPage/).
     */
    deleteLandingPage({ id, requestHeaders }?: ContentPlatformApplicationValidator.DeleteLandingPageParam, { responseHeaders }?: object): Promise<ContentPlatformModel.LandingPageSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.DeleteNavigationParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.NavigationSchema>} - Success response
     * @name deleteNavigation
     * @summary: Delete navigation
     * @description: Remove a specific navigation element. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteNavigation/).
     */
    deleteNavigation({ id, requestHeaders }?: ContentPlatformApplicationValidator.DeleteNavigationParam, { responseHeaders }?: object): Promise<ContentPlatformModel.NavigationSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.DeletePageParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.PageSchema>} - Success response
     * @name deletePage
     * @summary: Delete page
     * @description: Remove a page from the platform. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deletePage/).
     */
    deletePage({ id, requestHeaders }?: ContentPlatformApplicationValidator.DeletePageParam, { responseHeaders }?: object): Promise<ContentPlatformModel.PageSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.DeletePathRedirectionRulesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.DeletPathMappingSchema>} - Success response
     * @name deletePathRedirectionRules
     * @summary: Delete path redirection rule
     * @description: Remove specific path redirection rules. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deletePathRedirectionRules/).
     */
    deletePathRedirectionRules({ pathId, requestHeaders }?: ContentPlatformApplicationValidator.DeletePathRedirectionRulesParam, { responseHeaders }?: object): Promise<ContentPlatformModel.DeletPathMappingSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.DeleteSEOMarkupSchemaParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.SEOSchemaMarkupTemplate>} - Success response
     * @name deleteSEOMarkupSchema
     * @summary: Delete SEO Markup Schema
     * @description: Use this API to Delete SEO Markup Schema - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteSEOMarkupSchema/).
     */
    deleteSEOMarkupSchema({ schemaId, requestHeaders }?: ContentPlatformApplicationValidator.DeleteSEOMarkupSchemaParam, { responseHeaders }?: object): Promise<ContentPlatformModel.SEOSchemaMarkupTemplate>;
    /**
     * @param {ContentPlatformApplicationValidator.EditDataLoaderParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.DataLoaderResponseSchema>} -
     *   Success response
     * @name editDataLoader
     * @summary: Update a data loader
     * @description: Modify the settings of a specific data loader. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/editDataLoader/).
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
     * @description: Modify an injectable tag - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/editInjectableTag/).
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
     * @summary: Edit SEO Markup Schema
     * @description: Use this API to edit SEO Markup Schema - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/editSEOMarkupSchema/).
     */
    editSEOMarkupSchema({ schemaId, body, requestHeaders }?: ContentPlatformApplicationValidator.EditSEOMarkupSchemaParam, { responseHeaders }?: object): Promise<ContentPlatformModel.SEOSchemaMarkupTemplate>;
    /**
     * @param {ContentPlatformApplicationValidator.ExportAppCustomObjectEntriesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomObjectBulkEntryInitiateDownload>}
     *   - Success response
     *
     * @name exportAppCustomObjectEntries
     * @summary: Initiate download for bulk custom object entries
     * @description: Custom object bulk export of bulk entries can be perform using this endpoint. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/exportAppCustomObjectEntries/).
     */
    exportAppCustomObjectEntries({ definitionId, requestHeaders }?: ContentPlatformApplicationValidator.ExportAppCustomObjectEntriesParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectBulkEntryInitiateDownload>;
    /**
     * @param {ContentPlatformApplicationValidator.GenerateSEOTitleParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.GeneratedSEOContent>} - Success response
     * @name generateSEOTitle
     * @summary: Generate SEO title
     * @description: Create an SEO-friendly title for content. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/generateSEOTitle/).
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
     * @description: Get detailed information about a specific announcement - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getAnnouncementById/).
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
     * @description: Lists all announcements - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getAnnouncementsList/).
     */
    getAnnouncementsList({ pageNo, pageSize, requestHeaders }?: ContentPlatformApplicationValidator.GetAnnouncementsListParam, { responseHeaders }?: object): Promise<ContentPlatformModel.GetAnnouncementListSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.GetAppCustomFieldDefinitionParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomFieldDefinitionDetailResSchema>}
     *   - Success response
     *
     * @name getAppCustomFieldDefinition
     * @summary: Get custom fields definition by id
     * @description: Use this API to retrieve the definitions of custom fields using definition_id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getAppCustomFieldDefinition/).
     */
    getAppCustomFieldDefinition({ id, requestHeaders }?: ContentPlatformApplicationValidator.GetAppCustomFieldDefinitionParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomFieldDefinitionDetailResSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.GetAppCustomFieldDefinitionsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.ApplicationCustomFieldDefinitionsSchema>}
     *   - Success response
     *
     * @name getAppCustomFieldDefinitions
     * @summary: Get custom fields definitions
     * @description: Custom field definitions enable you to include data validation for custom fields, and enable sellers to add custom fields values for resources. With the help of this seller can retrive list of custom field definitions list. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getAppCustomFieldDefinitions/).
     */
    getAppCustomFieldDefinitions({ pageNo, pageSize, resources, types, search, slugs, requestHeaders }?: ContentPlatformApplicationValidator.GetAppCustomFieldDefinitionsParam, { responseHeaders }?: object): Promise<ContentPlatformModel.ApplicationCustomFieldDefinitionsSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.GetAppCustomFieldJobsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomFieldBulkEntry>} - Success response
     * @name getAppCustomFieldJobs
     * @summary: Fetch bulk import and export job list.
     * @description: Use this api to get list of jobs of bulk import and exports - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getAppCustomFieldJobs/).
     */
    getAppCustomFieldJobs({ page, pageSize, actionType, requestHeaders }?: ContentPlatformApplicationValidator.GetAppCustomFieldJobsParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomFieldBulkEntry>;
    /**
     * @param {ContentPlatformApplicationValidator.GetAppCustomFieldTypesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.MetafieldTypesSchema>} - Success response
     * @name getAppCustomFieldTypes
     * @summary: Get custom field types
     * @description: Each custom field and custom field definition has a type, which defines the type of information that it can store. The custom field types have built-in validation. This api will give list of supported custom fields types - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getAppCustomFieldTypes/).
     */
    getAppCustomFieldTypes({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ContentPlatformModel.MetafieldTypesSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.GetAppCustomFieldsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomFieldsResponseSchema>} -
     *   Success response
     * @name getAppCustomFields
     * @summary: Get list of custom fields of gives resource
     * @description: Retrieves a list of custom fields attached to a particular resource by using the resource. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getAppCustomFields/).
     */
    getAppCustomFields({ resource, requestHeaders }?: ContentPlatformApplicationValidator.GetAppCustomFieldsParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomFieldsResponseSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.GetAppCustomFieldsByResourceIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomFieldsResponseByResourceIdSchema>}
     *   - Success response
     *
     * @name getAppCustomFieldsByResourceId
     * @summary: Get list of custom fields of given resource and resource id
     * @description: Retrieves a list of custom fields attached to a particular resource by using the resource and resource id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getAppCustomFieldsByResourceId/).
     */
    getAppCustomFieldsByResourceId({ resource, resourceId, requestHeaders }?: ContentPlatformApplicationValidator.GetAppCustomFieldsByResourceIdParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomFieldsResponseByResourceIdSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.GetAppCustomObjectParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomObjectByIdSchema>} - Success response
     * @name getAppCustomObject
     * @summary: Get custom object details
     * @description: Details of custom objects, their field details, definitions, and references can be obtained using this endpoint. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getAppCustomObject/).
     */
    getAppCustomObject({ id, requestHeaders }?: ContentPlatformApplicationValidator.GetAppCustomObjectParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectByIdSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.GetAppCustomObjectDefinitionParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomObjectDefinitionSchema>} -
     *   Success response
     * @name getAppCustomObjectDefinition
     * @summary: Get custom object definition
     * @description: Custom object definitions can be fetched using their definition ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getAppCustomObjectDefinition/).
     */
    getAppCustomObjectDefinition({ id, requestHeaders }?: ContentPlatformApplicationValidator.GetAppCustomObjectDefinitionParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectDefinitionSchema>;
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
     * @description: Custom object definition lists can be obtained using this endpoint. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getAppCustomObjectDefinitions/).
     */
    getAppCustomObjectDefinitions({ pageNo, pageSize, search, requestHeaders }?: ContentPlatformApplicationValidator.GetAppCustomObjectDefinitionsParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectDefinitionsSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.GetAppCustomObjectsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomObjectsSchema>} - Success response
     * @name getAppCustomObjects
     * @summary: Get list of custom objects
     * @description: Custom object entries can fetch using this endpoint. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getAppCustomObjects/).
     */
    getAppCustomObjects({ pageNo, pageSize, definitionId, requestHeaders }?: ContentPlatformApplicationValidator.GetAppCustomObjectsParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectsSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.GetAppJobsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomObjectBulkEntry>} - Success response
     * @name getAppJobs
     * @summary: Get bulk import and export job list
     * @description: Custom object bulk import and export jobs status and details can be obtained using this endpoint. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getAppJobs/).
     */
    getAppJobs({ page, pageSize, actionType, requestHeaders }?: ContentPlatformApplicationValidator.GetAppJobsParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectBulkEntry>;
    /**
     * @param {ContentPlatformApplicationValidator.GetAppResourcesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.ResourcesSchema>} - Success response
     * @name getAppResources
     * @summary: Get resources
     * @description: Each custom fields is assosiated with a resource such as product, promotion, coupon, selling location etc, This will gives list of supported resource list. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getAppResources/).
     */
    getAppResources({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ContentPlatformModel.ResourcesSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.GetBlogBySlugParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.BlogSchema>} - Success response
     * @name getBlogBySlug
     * @summary: Get blog by slug.
     * @description: Retrieve detailed information about a specific blog using its slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getBlogBySlug/).
     */
    getBlogBySlug({ slug, requestHeaders }?: ContentPlatformApplicationValidator.GetBlogBySlugParam, { responseHeaders }?: object): Promise<ContentPlatformModel.BlogSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.GetBlogsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.BlogGetResponse>} - Success response
     * @name getBlogs
     * @summary: List blogs
     * @description: List all blogs - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getBlogs/).
     */
    getBlogs({ pageNo, pageSize, tags, q, slug, title, status, requestHeaders }?: ContentPlatformApplicationValidator.GetBlogsParam, { responseHeaders }?: object): Promise<ContentPlatformModel.BlogGetResponse>;
    /**
     * @param {ContentPlatformApplicationValidator.GetComponentByIdParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.BlogSchema>} - Success response
     * @name getComponentById
     * @summary: Get component
     * @description: Retrieve detailed information about a specific component. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getComponentById/).
     */
    getComponentById({ slug, requestHeaders }?: ContentPlatformApplicationValidator.GetComponentByIdParam, { responseHeaders }?: object): Promise<ContentPlatformModel.BlogSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.GetDataLoaderApiSpecsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.DataLoadersApiSpecSchema>} -
     *   Success response
     * @name getDataLoaderApiSpecs
     * @summary: Get data loaders api specs.
     * @description: Retrieve a list of data loaders api specs. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getDataLoaderApiSpecs/).
     */
    getDataLoaderApiSpecs({ dataLoader, requestHeaders }?: ContentPlatformApplicationValidator.GetDataLoaderApiSpecsParam, { responseHeaders }?: object): Promise<ContentPlatformModel.DataLoadersApiSpecSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.GetDataLoadersParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.DataLoadersSchema>} - Success response
     * @name getDataLoaders
     * @summary: List data loaders
     * @description: List all Dataloaders - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getDataLoaders/).
     */
    getDataLoaders({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ContentPlatformModel.DataLoadersSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.GetDataLoadersByServiceParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.DataLoaderItemsResponseSchema>} -
     *   Success response
     * @name getDataLoadersByService
     * @summary: List all data loaders
     * @description: Use this to get all data loaders of an application by service name - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getDataLoadersByService/).
     */
    getDataLoadersByService({ serviceName, requestHeaders }?: ContentPlatformApplicationValidator.GetDataLoadersByServiceParam, { responseHeaders }?: object): Promise<ContentPlatformModel.DataLoaderItemsResponseSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.GetDefaultNavigationsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.DefaultNavigationResponse>} -
     *   Success response
     * @name getDefaultNavigations
     * @summary: Get default navigations
     * @description: Retrieve default navigation elements. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getDefaultNavigations/).
     */
    getDefaultNavigations({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ContentPlatformModel.DefaultNavigationResponse>;
    /**
     * @param {ContentPlatformApplicationValidator.GetDefaultSEOMarkupSchemaParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.DefaultSchemaComponent>} - Success response
     * @name getDefaultSEOMarkupSchema
     * @summary: List default SEO Markup Schemas
     * @description: Use this API to List default SEO Markup Schemas - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getDefaultSEOMarkupSchema/).
     */
    getDefaultSEOMarkupSchema({ pageType, requestHeaders }?: ContentPlatformApplicationValidator.GetDefaultSEOMarkupSchemaParam, { responseHeaders }?: object): Promise<ContentPlatformModel.DefaultSchemaComponent>;
    /**
     * @param {ContentPlatformApplicationValidator.GetFaqByIdOrSlugParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CreateFaqResponseSchema>} - Success response
     * @name getFaqByIdOrSlug
     * @summary: Get FAQ or slug
     * @description: Get detailed information about a specific FAQ - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getFaqByIdOrSlug/).
     */
    getFaqByIdOrSlug({ idOrSlug, requestHeaders }?: ContentPlatformApplicationValidator.GetFaqByIdOrSlugParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CreateFaqResponseSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.GetFaqCategoriesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.GetFaqCategoriesSchema>} - Success response
     * @name getFaqCategories
     * @summary: List FAQ Categories
     * @description: List all FAQ Categories - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getFaqCategories/).
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
     * @description: Get detailed information about a specific FAQ category - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getFaqCategoryBySlugOrId/).
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
     * @description: Retrieve a list of FAQs within a specific category. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getFaqsByCategoryIdOrSlug/).
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
     * @summary: Get all the tags in an application
     * @description: Use this API to retrieve all HTML Tags - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getInjectableTags/).
     */
    getInjectableTags({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ContentPlatformModel.TagsSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.GetLandingPagesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.LandingPageGetResponse>} - Success response
     * @name getLandingPages
     * @summary: Get landing pages
     * @description: Lists a list landing pages as per device types - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getLandingPages/).
     */
    getLandingPages({ pageNo, pageSize, requestHeaders }?: ContentPlatformApplicationValidator.GetLandingPagesParam, { responseHeaders }?: object): Promise<ContentPlatformModel.LandingPageGetResponse>;
    /**
     * @param {ContentPlatformApplicationValidator.GetLegalInformationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.ApplicationLegal>} - Success response
     * @name getLegalInformation
     * @summary: Get Legal Pages
     * @description: Get legal information and terms - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getLegalInformation/).
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
     * @description: Retrieve detailed information about a specific navigation element. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getNavigationBySlug/).
     */
    getNavigationBySlug({ slug, devicePlatform, requestHeaders }?: ContentPlatformApplicationValidator.GetNavigationBySlugParam, { responseHeaders }?: object): Promise<ContentPlatformModel.NavigationSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.GetNavigationsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.NavigationGetResponse>} - Success response
     * @name getNavigations
     * @summary: Get navigation items
     * @description: Retrieve a list of navigational elements. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getNavigations/).
     */
    getNavigations({ devicePlatform, pageNo, pageSize, requestHeaders }?: ContentPlatformApplicationValidator.GetNavigationsParam, { responseHeaders }?: object): Promise<ContentPlatformModel.NavigationGetResponse>;
    /**
     * @param {ContentPlatformApplicationValidator.GetPageBySlugParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.PageSchema>} - Success response
     * @name getPageBySlug
     * @summary: Get page by slug
     * @description: Get detailed information about a specific page using its slug - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getPageBySlug/).
     */
    getPageBySlug({ slug, requestHeaders }?: ContentPlatformApplicationValidator.GetPageBySlugParam, { responseHeaders }?: object): Promise<ContentPlatformModel.PageSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.GetPageMetaParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.PageMetaSchema>} - Success response
     * @name getPageMeta
     * @summary: Get page meta
     * @description: Use this API to Get metadata for a specific page. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getPageMeta/).
     */
    getPageMeta({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ContentPlatformModel.PageMetaSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.GetPageSpecParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.PageSpec>} - Success response
     * @name getPageSpec
     * @summary: Get page specification
     * @description: Use this API to Get specifications and details for a specific page - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getPageSpec/).
     */
    getPageSpec({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ContentPlatformModel.PageSpec>;
    /**
     * @param {ContentPlatformApplicationValidator.GetPagesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.PageGetResponse>} - Success response
     * @name getPages
     * @summary: Get pages.
     * @description: Retrieve a list of available pages. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getPages/).
     */
    getPages({ pageNo, pageSize, requestHeaders }?: ContentPlatformApplicationValidator.GetPagesParam, { responseHeaders }?: object): Promise<ContentPlatformModel.PageGetResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Numeric ID allotted to a business account
     *   on Fynd Platform
     * @param {string} arg.applicationId - Numeric ID allotted to an application
     *   created within a business account.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @returns {Paginator<ContentPlatformModel.PageGetResponse>}
     * @summary: Get pages.
     * @description: Retrieve a list of available pages.
     */
    getPagesPaginator({ companyId, applicationId, pageSize }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator<ContentPlatformModel.PageGetResponse>;
    /**
     * @param {ContentPlatformApplicationValidator.GetPathRedirectionRuleParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.DeletPathMappingSchema>} - Success response
     * @name getPathRedirectionRule
     * @summary: Get Path Redirection Rule
     * @description: Use this API to Get detailed information about a specific path redirection rule - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getPathRedirectionRule/).
     */
    getPathRedirectionRule({ pathId, requestHeaders }?: ContentPlatformApplicationValidator.GetPathRedirectionRuleParam, { responseHeaders }?: object): Promise<ContentPlatformModel.DeletPathMappingSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.GetPathRedirectionRulesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.GetAllPathMappingSchema>} - Success response
     * @name getPathRedirectionRules
     * @summary: List Path Redirection Rules
     * @description: Use this API to List Path Redirection Rules - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getPathRedirectionRules/).
     */
    getPathRedirectionRules({ pageSize, pageNo, requestHeaders }?: ContentPlatformApplicationValidator.GetPathRedirectionRulesParam, { responseHeaders }?: object): Promise<ContentPlatformModel.GetAllPathMappingSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.GetSEOConfigurationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.SeoComponent>} - Success response
     * @name getSEOConfiguration
     * @summary: Get sales channel SEO
     * @description: Retrieve configuration settings for SEO. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getSEOConfiguration/).
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
     * @description: Use this API to Get SEO Markup Schema - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getSEOMarkupSchema/).
     */
    getSEOMarkupSchema({ schemaId, requestHeaders }?: ContentPlatformApplicationValidator.GetSEOMarkupSchemaParam, { responseHeaders }?: object): Promise<ContentPlatformModel.SEOSchemaMarkupTemplate>;
    /**
     * @param {ContentPlatformApplicationValidator.GetSEOMarkupSchemasParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.SeoSchemaComponent>} - Success response
     * @name getSEOMarkupSchemas
     * @summary: List default SEO Markup Schemas
     * @description: Use this API to List default SEO Markup Schemas - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getSEOMarkupSchemas/).
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
     * @description: Retrieve information related to customer support. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getSupportInformation/).
     */
    getSupportInformation({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ContentPlatformModel.Support>;
    /**
     * @param {ContentPlatformApplicationValidator.ImportAppCustomObjectEntriesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomObjectEntryBulkUploadResponse>}
     *   - Success response
     *
     * @name importAppCustomObjectEntries
     * @summary: Bulk custom object entries upload
     * @description: Custom object bulk import of bulk entries can be performed using this endpoint. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/importAppCustomObjectEntries/).
     */
    importAppCustomObjectEntries({ definitionId, body, requestHeaders }?: ContentPlatformApplicationValidator.ImportAppCustomObjectEntriesParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectEntryBulkUploadResponse>;
    /**
     * @param {ContentPlatformApplicationValidator.RemoveInjectableTagParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.TagDeleteSuccessResponse>} -
     *   Success response
     * @name removeInjectableTag
     * @summary: Remove HTML tag
     * @description: Delete a specific injectable tag. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/removeInjectableTag/).
     */
    removeInjectableTag({ body, requestHeaders }?: ContentPlatformApplicationValidator.RemoveInjectableTagParam, { responseHeaders }?: object): Promise<ContentPlatformModel.TagDeleteSuccessResponse>;
    /**
     * @param {ContentPlatformApplicationValidator.ResetDataLoaderParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.DataLoaderResetResponseSchema>} -
     *   Success response
     * @name resetDataLoader
     * @summary: Reset a data loader
     * @description: Clear and reset data loader settings. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/resetDataLoader/).
     */
    resetDataLoader({ service, operationId, requestHeaders }?: ContentPlatformApplicationValidator.ResetDataLoaderParam, { responseHeaders }?: object): Promise<ContentPlatformModel.DataLoaderResetResponseSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.SampleAppCustomObjectBulkEntryParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<string>} - Success response
     * @name sampleAppCustomObjectBulkEntry
     * @summary: Download sample for custom object bulk entry
     * @description: Sample files for custom object bulk import can be obtained from this endpoint. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/sampleAppCustomObjectBulkEntry/).
     */
    sampleAppCustomObjectBulkEntry({ definitionId, requestHeaders }?: ContentPlatformApplicationValidator.SampleAppCustomObjectBulkEntryParam, { responseHeaders }?: object): Promise<string>;
    /**
     * @param {ContentPlatformApplicationValidator.SelectDataLoaderParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.DataLoaderResponseSchema>} -
     *   Success response
     * @name selectDataLoader
     * @summary: Select a data loader
     * @description: Choose and set a data loader for use. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/selectDataLoader/).
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
     * @description: Modify the content and settings of a specific announcement. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateAnnouncement/).
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
     * @description: Modify the scheduling of a specific announcement. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateAnnouncementSchedule/).
     */
    updateAnnouncementSchedule({ announcementId, body, requestHeaders }?: ContentPlatformApplicationValidator.UpdateAnnouncementScheduleParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CreateAnnouncementSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.UpdateAppCustomFieldByResourceIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomFieldsResponseByResourceIdSchema>}
     *   - Success response
     *
     * @name updateAppCustomFieldByResourceId
     * @summary: Create custom field entries for gives resource and resource_id
     * @description: Use this API to create the custom field entry for given resource and resource_id in param. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateAppCustomFieldByResourceId/).
     */
    updateAppCustomFieldByResourceId({ resource, resourceId, body, requestHeaders }?: ContentPlatformApplicationValidator.UpdateAppCustomFieldByResourceIdParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomFieldsResponseByResourceIdSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.UpdateAppCustomFieldDefinitionParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomFieldDefinitionDetailResSchema>}
     *   - Success response
     *
     * @name updateAppCustomFieldDefinition
     * @summary: Update custom field definition
     * @description: Custom fields definition can be update using this api, You can update custom field definition name and description. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateAppCustomFieldDefinition/).
     */
    updateAppCustomFieldDefinition({ id, body, requestHeaders }?: ContentPlatformApplicationValidator.UpdateAppCustomFieldDefinitionParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomFieldDefinitionDetailResSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.UpdateAppCustomObjectParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomObjectSchema>} - Success response
     * @name updateAppCustomObject
     * @summary: Update custom object details
     * @description: Custom object entries can be updated using this endpoint. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateAppCustomObject/).
     */
    updateAppCustomObject({ id, body, requestHeaders }?: ContentPlatformApplicationValidator.UpdateAppCustomObjectParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.UpdateAppCustomObjectDefinitionParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomObjectDefinitionSchema>} -
     *   Success response
     * @name updateAppCustomObjectDefinition
     * @summary: Update custom object definition
     * @description: Use this API to update a custom object definition for your application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateAppCustomObjectDefinition/).
     */
    updateAppCustomObjectDefinition({ id, body, requestHeaders }?: ContentPlatformApplicationValidator.UpdateAppCustomObjectDefinitionParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectDefinitionSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.UpdateBlogParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.BlogSchema>} - Success response
     * @name updateBlog
     * @summary: Update a blog
     * @description: Modify the content and settings of a specific blog. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateBlog/).
     */
    updateBlog({ id, body, requestHeaders }?: ContentPlatformApplicationValidator.UpdateBlogParam, { responseHeaders }?: object): Promise<ContentPlatformModel.BlogSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.UpdateFaqParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CreateFaqResponseSchema>} - Success response
     * @name updateFaq
     * @summary: Update FAQ
     * @description: Modify the content and settings of a specific FAQ. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateFaq/).
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
     * @description: Modify the content and settings of a specific FAQ category. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateFaqCategory/).
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
     * @summary: Update HTML Tags
     * @description: Use this API to edit all HTML Tags present - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateInjectableTag/).
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
     * @description: Modify the content and settings of a specific landing page. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateLandingPage/).
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
     * @description: Modify legal information and terms. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateLegalInformation/).
     */
    updateLegalInformation({ body, requestHeaders }?: ContentPlatformApplicationValidator.UpdateLegalInformationParam, { responseHeaders }?: object): Promise<ContentPlatformModel.ApplicationLegal>;
    /**
     * @param {ContentPlatformApplicationValidator.UpdateNavigationParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.NavigationSchema>} - Success response
     * @name updateNavigation
     * @summary: Update navigation
     * @description: Modify the content and settings of a specific navigation element. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateNavigation/).
     */
    updateNavigation({ id, body, requestHeaders }?: ContentPlatformApplicationValidator.UpdateNavigationParam, { responseHeaders }?: object): Promise<ContentPlatformModel.NavigationSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.UpdatePageParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.PageSchema>} - Success response
     * @name updatePage
     * @summary: Update page
     * @description: Modify and update the content of a page. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updatePage/).
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
     * @description: Modify the content and settings of a specific page preview. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updatePagePreview/).
     */
    updatePagePreview({ slug, body, requestHeaders }?: ContentPlatformApplicationValidator.UpdatePagePreviewParam, { responseHeaders }?: object): Promise<ContentPlatformModel.PageSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.UpdatePathRedirectionRulesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CreatePathMappingSchema>} - Success response
     * @name updatePathRedirectionRules
     * @summary: Update path redirection rule
     * @description: Modify settings for path redirection rules. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updatePathRedirectionRules/).
     */
    updatePathRedirectionRules({ pathId, body, requestHeaders }?: ContentPlatformApplicationValidator.UpdatePathRedirectionRulesParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CreatePathMappingSchema>;
    /**
     * @param {ContentPlatformApplicationValidator.UpdateSEOConfigurationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.SeoSchema>} - Success response
     * @name updateSEOConfiguration
     * @summary: Update sales channel SEO information
     * @description: Modify configuration settings for SEO. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateSEOConfiguration/).
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
     * @description: Modify information related to customer support. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateSupportInformation/).
     */
    updateSupportInformation({ body, requestHeaders }?: ContentPlatformApplicationValidator.UpdateSupportInformationParam, { responseHeaders }?: object): Promise<ContentPlatformModel.Support>;
}
import ContentPlatformApplicationValidator = require("./ContentPlatformApplicationValidator");
import ContentPlatformModel = require("./ContentPlatformModel");
import Paginator = require("../../common/Paginator");
