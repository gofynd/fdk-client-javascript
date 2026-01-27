export = Content;
declare class Content {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        fetchResourceTranslations: string;
        fetchResourceTranslationsWithPayload: string;
        getAnnouncements: string;
        getBlog: string;
        getBlogs: string;
        getBulkCustomFieldsByResource: string;
        getCustomFieldsByResourceId: string;
        getCustomObjectBySlug: string;
        getDataLoaders: string;
        getFaqBySlug: string;
        getFaqCategories: string;
        getFaqCategoryBySlug: string;
        getFaqs: string;
        getFaqsByCategorySlug: string;
        getLandingPage: string;
        getLegalInformation: string;
        getNavigations: string;
        getOrderTranslation: string;
        getPage: string;
        getPages: string;
        getSEOConfiguration: string;
        getSEOMarkupSchemas: string;
        getSupportInformation: string;
        getSupportedLanguages: string;
        getTags: string;
        getTranslateUILabels: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ResourceTranslations>} - Success response
     * @name fetchResourceTranslations
     * @summary: Get Resource Translations
     * @description: Fetch translations for specific resource IDs based on type and locale settings. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/content/fetchResourceTranslations/).
     */
    fetchResourceTranslations({ type, locale, resourceId, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<ResourceTranslations>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ResourceTranslations>} - Success response
     * @name fetchResourceTranslationsWithPayload
     * @summary: Post Resource Translations
     * @description: Submit and retrieve translations for resources using payload data and locale settings. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/content/fetchResourceTranslationsWithPayload/).
     */
    fetchResourceTranslationsWithPayload({ type, locale, body, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<ResourceTranslations>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<AnnouncementsResponseSchema>} - Success response
     * @name getAnnouncements
     * @summary: List announcements
     * @description: List all current announcements in the application. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/content/getAnnouncements/).
     */
    getAnnouncements({ requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<AnnouncementsResponseSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<BlogSchema>} - Success response
     * @name getBlog
     * @summary: Get a blog
     * @description: Get information related to a specific blog such as it's contents, author, publish date, SEO related information. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/content/getBlog/).
     */
    getBlog({ slug, rootId, preview, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<BlogSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<BlogGetDetails>} - Success response
     * @name getBlogs
     * @summary: List blogs
     * @description: List all the blogs against an application. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/content/getBlogs/).
     */
    getBlogs({ pageNo, pageSize, tags, search, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<BlogGetDetails>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<BulkCustomFieldsResponseByResourceSchema>} - Success response
     * @name getBulkCustomFieldsByResource
     * @summary: Get bulk list of custom fields of given resource
     * @description: Retrieves a bulk list of custom fields attached to a particular resource by using the resource and resource IDs. The resource_ids query parameter is required and can accept multiple comma-separated values. Optional filters for keys and namespaces can also be applied. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/content/getBulkCustomFieldsByResource/).
     */
    getBulkCustomFieldsByResource({ resource, resourceIds, keys, namespaces, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<BulkCustomFieldsResponseByResourceSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CustomFieldsResponseByResourceIdSchema>} - Success response
     * @name getCustomFieldsByResourceId
     * @summary: Get list of custom fields of given resource and resource slug
     * @description: Retrieves a list of custom fields attached to a particular resource by using the resource and resource slug. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/content/getCustomFieldsByResourceId/).
     */
    getCustomFieldsByResourceId({ resource, resourceSlug, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<CustomFieldsResponseByResourceIdSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CustomObjectByIdSchema>} - Success response
     * @name getCustomObjectBySlug
     * @summary: Get custom object details
     * @description: Details of a custom object entry can be obtained using this endpoint. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/content/getCustomObjectBySlug/).
     */
    getCustomObjectBySlug({ definitionSlug, slug, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<CustomObjectByIdSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<DataLoadersSchema>} - Success response
     * @name getDataLoaders
     * @summary: List Dataloaders
     * @description: List all the data loaders that are enabled for an application. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/content/getDataLoaders/).
     */
    getDataLoaders({ requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<DataLoadersSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<FaqSchema>} - Success response
     * @name getFaqBySlug
     * @summary: Get FAQ
     * @description: Get a specific FAQ using its slug identifier. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/content/getFaqBySlug/).
     */
    getFaqBySlug({ slug, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<FaqSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<GetFaqCategoriesSchema>} - Success response
     * @name getFaqCategories
     * @summary: List FAQ Categories
     * @description: List categories for organizing FAQs. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/content/getFaqCategories/).
     */
    getFaqCategories({ requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<GetFaqCategoriesSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<GetFaqCategoryBySlugSchema>} - Success response
     * @name getFaqCategoryBySlug
     * @summary: Get a FAQ category
     * @description: Get a specific FAQ category using its slug. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/content/getFaqCategoryBySlug/).
     */
    getFaqCategoryBySlug({ slug, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<GetFaqCategoryBySlugSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<FaqResponseSchema>} - Success response
     * @name getFaqs
     * @summary: List FAQs
     * @description: List frequently asked questions and answers. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/content/getFaqs/).
     */
    getFaqs({ requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<FaqResponseSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<GetFaqSchema>} - Success response
     * @name getFaqsByCategorySlug
     * @summary: List FAQs by category
     * @description: Get FAQs belonging to a specific category slug. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/content/getFaqsByCategorySlug/).
     */
    getFaqsByCategorySlug({ slug, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<GetFaqSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LandingPageSchema>} - Success response
     * @name getLandingPage
     * @summary: Get a landing page
     * @description: Get content of the application's landing page. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/content/getLandingPage/).
     */
    getLandingPage({ requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<LandingPageSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ApplicationLegal>} - Success response
     * @name getLegalInformation
     * @summary: Get legal information
     * @description: Get legal policies for an application which includes Terms and conditions, return policy, shipping policy and privacy policy. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/content/getLegalInformation/).
     */
    getLegalInformation({ requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<ApplicationLegal>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<NavigationGetDetails>} - Success response
     * @name getNavigations
     * @summary: List navigation items
     * @description: Get the navigation link items which can be powered to generate menus on application's website or equivalent mobile apps. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/content/getNavigations/).
     */
    getNavigations({ pageNo, pageSize, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<NavigationGetDetails>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<TranslationResult>} - Success response
     * @name getOrderTranslation
     * @summary: Get Order Translations
     * @description: Retrieves translated  information for orders or shipments. This endpoint processes the order/shipment payload and returns the same structure with translated  details including names, brands, categories, and other localized content. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/content/getOrderTranslation/).
     */
    getOrderTranslation({ body, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<TranslationResult>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PageSchema>} - Success response
     * @name getPage
     * @summary: Get a page
     * @description: Get detailed information for a specific page within the theme. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/content/getPage/).
     */
    getPage({ slug, rootId, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<PageSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PageGetDetails>} - Success response
     * @name getPages
     * @summary: Lists pages
     * @description: Lists all Custom Pages. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/content/getPages/).
     */
    getPages({ pageNo, pageSize, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<PageGetDetails>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<SeoComponent>} - Success response
     * @name getSEOConfiguration
     * @summary: Get SEO settings
     * @description: Get search engine optimization configurations of an application. Details include the title, description and an image. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/content/getSEOConfiguration/).
     */
    getSEOConfiguration({ requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<SeoComponent>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<SeoSchemaComponent>} - Success response
     * @name getSEOMarkupSchemas
     * @summary: List SEO Markup schemas
     * @description: Get all SEO Markup schema Templates setup for an application. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/content/getSEOMarkupSchemas/).
     */
    getSEOMarkupSchemas({ pageType, active, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<SeoSchemaComponent>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<Support>} - Success response
     * @name getSupportInformation
     * @summary: Get customer support information
     * @description: Get customer support contact details. Contact Details can be either a phone number or an email-id or both. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/content/getSupportInformation/).
     */
    getSupportInformation({ requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<Support>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name getSupportedLanguages
     * @summary: List App Languages
     * @description: Retrieve available languages and their configurations for the specified application. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/content/getSupportedLanguages/).
     */
    getSupportedLanguages({ requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<any>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<TagsSchema>} - Success response
     * @name getTags
     * @summary: Get HTML tags
     * @description: Lists HTML tags to power additional functionalities within an application. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/content/getTags/).
     */
    getTags({ requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<TagsSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<TranslateUiLabelsPage>} - Success response
     * @name getTranslateUILabels
     * @summary: Get Translate Ui Labels
     * @description: Retrieve Translate Ui Labels with filtering options for type, template, and locale settings. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/content/getTranslateUILabels/).
     */
    getTranslateUILabels({ template, templateThemeId, themeId, locale, type, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<TranslateUiLabelsPage>;
}
