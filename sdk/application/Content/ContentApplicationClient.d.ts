export = Content;
declare class Content {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        getAnnouncements: string;
        getBlog: string;
        getBlogs: string;
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
        getPage: string;
        getPages: string;
        getSEOConfiguration: string;
        getSEOMarkupSchemas: string;
        getSlideshow: string;
        getSlideshows: string;
        getSupportInformation: string;
        getTags: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {ContentApplicationValidator.GetAnnouncementsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ContentApplicationModel.AnnouncementsResponseSchema>}
     *   - Success response
     *
     * @name getAnnouncements
     * @summary: List announcements
     * @description: List all current announcements in the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getAnnouncements/).
     */
    getAnnouncements({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ContentApplicationModel.AnnouncementsResponseSchema>;
    /**
     * @param {ContentApplicationValidator.GetBlogParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ContentApplicationModel.BlogSchema>} - Success response
     * @name getBlog
     * @summary: Get a blog
     * @description: Get information related to a specific blog such as it's contents, author, publish date, SEO related information. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getBlog/).
     */
    getBlog({ slug, rootId, preview, requestHeaders }?: ContentApplicationValidator.GetBlogParam, { responseHeaders }?: object): Promise<ContentApplicationModel.BlogSchema>;
    /**
     * @param {ContentApplicationValidator.GetBlogsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ContentApplicationModel.BlogGetDetails>} - Success response
     * @name getBlogs
     * @summary: List blogs
     * @description: List all the blogs against an application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getBlogs/).
     */
    getBlogs({ pageNo, pageSize, tags, search, requestHeaders }?: ContentApplicationValidator.GetBlogsParam, { responseHeaders }?: object): Promise<ContentApplicationModel.BlogGetDetails>;
    /**
     * @param {ContentApplicationValidator.GetCustomFieldsByResourceIdParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ContentApplicationModel.CustomFieldsResponseByResourceIdSchema>}
     *   - Success response
     *
     * @name getCustomFieldsByResourceId
     * @summary: Get list of custom fields of given resource and resource slug
     * @description: Retrieves a list of custom fields attached to a particular resource by using the resource and resource slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getCustomFieldsByResourceId/).
     */
    getCustomFieldsByResourceId({ resource, resourceSlug, requestHeaders }?: ContentApplicationValidator.GetCustomFieldsByResourceIdParam, { responseHeaders }?: object): Promise<ContentApplicationModel.CustomFieldsResponseByResourceIdSchema>;
    /**
     * @param {ContentApplicationValidator.GetCustomObjectBySlugParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ContentApplicationModel.CustomObjectByIdSchema>} -
     *   Success response
     * @name getCustomObjectBySlug
     * @summary: Get custom object details
     * @description: Details of a custom object entry can be obtained using this endpoint. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getCustomObjectBySlug/).
     */
    getCustomObjectBySlug({ definitionSlug, slug, requestHeaders }?: ContentApplicationValidator.GetCustomObjectBySlugParam, { responseHeaders }?: object): Promise<ContentApplicationModel.CustomObjectByIdSchema>;
    /**
     * @param {ContentApplicationValidator.GetDataLoadersParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ContentApplicationModel.DataLoadersSchema>} - Success response
     * @name getDataLoaders
     * @summary: List Dataloaders
     * @description: List all the data loaders that are enabled for an application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getDataLoaders/).
     */
    getDataLoaders({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ContentApplicationModel.DataLoadersSchema>;
    /**
     * @param {ContentApplicationValidator.GetFaqBySlugParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ContentApplicationModel.FaqSchema>} - Success response
     * @name getFaqBySlug
     * @summary: Get FAQ
     * @description: Get a specific FAQ using its slug identifier. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getFaqBySlug/).
     */
    getFaqBySlug({ slug, requestHeaders }?: ContentApplicationValidator.GetFaqBySlugParam, { responseHeaders }?: object): Promise<ContentApplicationModel.FaqSchema>;
    /**
     * @param {ContentApplicationValidator.GetFaqCategoriesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ContentApplicationModel.GetFaqCategoriesSchema>} -
     *   Success response
     * @name getFaqCategories
     * @summary: List FAQ Categories
     * @description: List categories for organizing FAQs. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getFaqCategories/).
     */
    getFaqCategories({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ContentApplicationModel.GetFaqCategoriesSchema>;
    /**
     * @param {ContentApplicationValidator.GetFaqCategoryBySlugParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ContentApplicationModel.GetFaqCategoryBySlugSchema>} -
     *   Success response
     * @name getFaqCategoryBySlug
     * @summary: Get a FAQ category
     * @description: Get a specific FAQ category using its slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getFaqCategoryBySlug/).
     */
    getFaqCategoryBySlug({ slug, requestHeaders }?: ContentApplicationValidator.GetFaqCategoryBySlugParam, { responseHeaders }?: object): Promise<ContentApplicationModel.GetFaqCategoryBySlugSchema>;
    /**
     * @param {ContentApplicationValidator.GetFaqsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ContentApplicationModel.FaqResponseSchema>} - Success response
     * @name getFaqs
     * @summary: List FAQs
     * @description: List frequently asked questions and answers. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getFaqs/).
     */
    getFaqs({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ContentApplicationModel.FaqResponseSchema>;
    /**
     * @param {ContentApplicationValidator.GetFaqsByCategorySlugParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ContentApplicationModel.GetFaqSchema>} - Success response
     * @name getFaqsByCategorySlug
     * @summary: List FAQs by category
     * @description: Get FAQs belonging to a specific category slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getFaqsByCategorySlug/).
     */
    getFaqsByCategorySlug({ slug, requestHeaders }?: ContentApplicationValidator.GetFaqsByCategorySlugParam, { responseHeaders }?: object): Promise<ContentApplicationModel.GetFaqSchema>;
    /**
     * @param {ContentApplicationValidator.GetLandingPageParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ContentApplicationModel.LandingPageSchema>} - Success response
     * @name getLandingPage
     * @summary: Get a landing page
     * @description: Get content of the application's landing page. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getLandingPage/).
     */
    getLandingPage({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ContentApplicationModel.LandingPageSchema>;
    /**
     * @param {ContentApplicationValidator.GetLegalInformationParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ContentApplicationModel.ApplicationLegal>} - Success response
     * @name getLegalInformation
     * @summary: Get legal information
     * @description: Get legal policies for an application which includes Terms and conditions, return policy, shipping policy and privacy policy. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getLegalInformation/).
     */
    getLegalInformation({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ContentApplicationModel.ApplicationLegal>;
    /**
     * @param {ContentApplicationValidator.GetNavigationsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ContentApplicationModel.NavigationGetDetails>} - Success response
     * @name getNavigations
     * @summary: List navigation items
     * @description: Get the navigation link items which can be powered to generate menus on application's website or equivalent mobile apps. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getNavigations/).
     */
    getNavigations({ pageNo, pageSize, requestHeaders }?: ContentApplicationValidator.GetNavigationsParam, { responseHeaders }?: object): Promise<ContentApplicationModel.NavigationGetDetails>;
    /**
     * @param {ContentApplicationValidator.GetPageParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ContentApplicationModel.PageSchema>} - Success response
     * @name getPage
     * @summary: Get a page
     * @description: Get detailed information for a specific page within the theme. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getPage/).
     */
    getPage({ slug, rootId, requestHeaders }?: ContentApplicationValidator.GetPageParam, { responseHeaders }?: object): Promise<ContentApplicationModel.PageSchema>;
    /**
     * @param {ContentApplicationValidator.GetPagesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ContentApplicationModel.PageGetDetails>} - Success response
     * @name getPages
     * @summary: Lists pages
     * @description: Lists all Custom Pages. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getPages/).
     */
    getPages({ pageNo, pageSize, requestHeaders }?: ContentApplicationValidator.GetPagesParam, { responseHeaders }?: object): Promise<ContentApplicationModel.PageGetDetails>;
    /**
     * @param {ContentApplicationValidator.GetSEOConfigurationParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ContentApplicationModel.SeoComponent>} - Success response
     * @name getSEOConfiguration
     * @summary: Get SEO settings
     * @description: Get search engine optimization configurations of an application. Details include the title, description and an image. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getSEOConfiguration/).
     */
    getSEOConfiguration({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ContentApplicationModel.SeoComponent>;
    /**
     * @param {ContentApplicationValidator.GetSEOMarkupSchemasParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ContentApplicationModel.SeoSchemaComponent>} - Success response
     * @name getSEOMarkupSchemas
     * @summary: List SEO Markup schemas
     * @description: Get all SEO Markup schema Templates setup for an application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getSEOMarkupSchemas/).
     */
    getSEOMarkupSchemas({ pageType, active, requestHeaders }?: ContentApplicationValidator.GetSEOMarkupSchemasParam, { responseHeaders }?: object): Promise<ContentApplicationModel.SeoSchemaComponent>;
    /**
     * @param {ContentApplicationValidator.GetSlideshowParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ContentApplicationModel.SlideshowSchema>} - Success response
     * @name getSlideshow
     * @summary: Get a Slideshow
     * @description: Get a slideshow using its `slug`. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getSlideshow/).
     */
    getSlideshow({ slug, requestHeaders }?: ContentApplicationValidator.GetSlideshowParam, { responseHeaders }?: object): Promise<ContentApplicationModel.SlideshowSchema>;
    /**
     * @param {ContentApplicationValidator.GetSlideshowsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ContentApplicationModel.SlideshowGetDetails>} - Success response
     * @name getSlideshows
     * @summary: List Slideshows
     * @description: List slideshows along with their details. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getSlideshows/).
     */
    getSlideshows({ pageNo, pageSize, requestHeaders }?: ContentApplicationValidator.GetSlideshowsParam, { responseHeaders }?: object): Promise<ContentApplicationModel.SlideshowGetDetails>;
    /**
     * @param {ContentApplicationValidator.GetSupportInformationParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ContentApplicationModel.Support>} - Success response
     * @name getSupportInformation
     * @summary: Get customer support information
     * @description: Get customer support contact details. Contact Details can be either a phone number or an email-id or both. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getSupportInformation/).
     */
    getSupportInformation({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ContentApplicationModel.Support>;
    /**
     * @param {ContentApplicationValidator.GetTagsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ContentApplicationModel.TagsSchema>} - Success response
     * @name getTags
     * @summary: Get HTML tags
     * @description: Lists HTML tags to power additional functionalities within an application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getTags/).
     */
    getTags({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ContentApplicationModel.TagsSchema>;
}
import ContentApplicationModel = require("./ContentApplicationModel");
import ContentApplicationValidator = require("./ContentApplicationValidator");
