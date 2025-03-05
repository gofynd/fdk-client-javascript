export = Content;
declare class Content {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        getAnnouncements: string;
        getBlog: string;
        getBlogs: string;
        getCustomFields: string;
        getCustomObject: string;
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
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<AnnouncementsResponseSchema>} - Success response
     * @name getAnnouncements
     * @summary: List announcements
     * @description: List all current announcements in the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getAnnouncements/).
     */
    getAnnouncements({ requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<AnnouncementsResponseSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<BlogSchema>} - Success response
     * @name getBlog
     * @summary: Get a blog
     * @description: Get information related to a specific blog such as it's contents, author, publish date, SEO related information. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getBlog/).
     */
    getBlog({ slug, rootId, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<BlogSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<BlogGetResponse>} - Success response
     * @name getBlogs
     * @summary: List blogs
     * @description: List all the blogs against an application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getBlogs/).
     */
    getBlogs({ pageNo, pageSize, tags, search, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<BlogGetResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CustomFieldsResponseByResourceIdSchema>} - Success response
     * @name getCustomFields
     * @summary: Get list of custom fields
     * @description: List custom fields attached to a particular resource by using the resource. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getCustomFields/).
     */
    getCustomFields({ resource, resourceId, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<CustomFieldsResponseByResourceIdSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CustomObjectByIdSchema>} - Success response
     * @name getCustomObject
     * @summary: Get custom object
     * @description: Get details of custom objects, their field details, definitions, and references can be obtained using this endpoint. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getCustomObject/).
     */
    getCustomObject({ metaobjectId, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<CustomObjectByIdSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<DataLoadersSchema>} - Success response
     * @name getDataLoaders
     * @summary: List Dataloaders
     * @description: List all the data loaders that are enabled for an application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getDataLoaders/).
     */
    getDataLoaders({ requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<DataLoadersSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<FaqSchema>} - Success response
     * @name getFaqBySlug
     * @summary: Get FAQ
     * @description: Get a specific FAQ using its slug identifier. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getFaqBySlug/).
     */
    getFaqBySlug({ slug, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<FaqSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<GetFaqCategoriesSchema>} - Success response
     * @name getFaqCategories
     * @summary: List FAQ Categories
     * @description: List categories for organizing FAQs. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getFaqCategories/).
     */
    getFaqCategories({ requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<GetFaqCategoriesSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<GetFaqCategoryBySlugSchema>} - Success response
     * @name getFaqCategoryBySlug
     * @summary: Get a FAQ category
     * @description: Get a specific FAQ category using its slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getFaqCategoryBySlug/).
     */
    getFaqCategoryBySlug({ slug, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<GetFaqCategoryBySlugSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<FaqResponseSchema>} - Success response
     * @name getFaqs
     * @summary: List FAQs
     * @description: List frequently asked questions and answers. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getFaqs/).
     */
    getFaqs({ requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<FaqResponseSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<GetFaqSchema>} - Success response
     * @name getFaqsByCategorySlug
     * @summary: List FAQs by category
     * @description: Get FAQs belonging to a specific category slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getFaqsByCategorySlug/).
     */
    getFaqsByCategorySlug({ slug, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<GetFaqSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LandingPageSchema>} - Success response
     * @name getLandingPage
     * @summary: Get a landing page
     * @description: Get content of the application's landing page. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getLandingPage/).
     */
    getLandingPage({ requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<LandingPageSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ApplicationLegal>} - Success response
     * @name getLegalInformation
     * @summary: Get legal information
     * @description: Get legal policies for an application which includes Terms and conditions, return policy, shipping policy and privacy policy. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getLegalInformation/).
     */
    getLegalInformation({ requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<ApplicationLegal>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<NavigationGetResponse>} - Success response
     * @name getNavigations
     * @summary: List navigation items
     * @description: Get the navigation link items which can be powered to generate menus on application's website or equivalent mobile apps. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getNavigations/).
     */
    getNavigations({ pageNo, pageSize, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<NavigationGetResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PageSchema>} - Success response
     * @name getPage
     * @summary: Get a page
     * @description: Get detailed information for a specific page within the theme. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getPage/).
     */
    getPage({ slug, rootId, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<PageSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PageGetResponse>} - Success response
     * @name getPages
     * @summary: Lists pages
     * @description: Lists all Custom Pages. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getPages/).
     */
    getPages({ pageNo, pageSize, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<PageGetResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<SeoComponent>} - Success response
     * @name getSEOConfiguration
     * @summary: Get SEO settings
     * @description: Get search engine optimization configurations of an application. Details include the title, description and an image. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getSEOConfiguration/).
     */
    getSEOConfiguration({ requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<SeoComponent>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<SeoSchemaComponent>} - Success response
     * @name getSEOMarkupSchemas
     * @summary: List SEO Markup schemas
     * @description: Get all SEO Markup schema Templates setup for an application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getSEOMarkupSchemas/).
     */
    getSEOMarkupSchemas({ pageType, active, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<SeoSchemaComponent>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<SlideshowSchema>} - Success response
     * @name getSlideshow
     * @summary: Get a Slideshow
     * @description: Get a slideshow using its `slug`. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getSlideshow/).
     */
    getSlideshow({ slug, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<SlideshowSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<SlideshowGetResponse>} - Success response
     * @name getSlideshows
     * @summary: List Slideshows
     * @description: List slideshows along with their details. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getSlideshows/).
     */
    getSlideshows({ pageNo, pageSize, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<SlideshowGetResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @returns {Paginator<SlideshowGetResponse>}
     * @summary: List Slideshows
     * @description: List slideshows along with their details.
     */
    getSlideshowsPaginator({ pageSize }?: {
        pageSize?: number;
    }): Paginator<SlideshowGetResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<Support>} - Success response
     * @name getSupportInformation
     * @summary: Get customer support information
     * @description: Get customer support contact details. Contact Details can be either a phone number or an email-id or both. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getSupportInformation/).
     */
    getSupportInformation({ requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<Support>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<TagsSchema>} - Success response
     * @name getTags
     * @summary: Get HTML tags
     * @description: Lists HTML tags to power additional functionalities within an application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getTags/).
     */
    getTags({ requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<TagsSchema>;
}
import Paginator = require("../../common/Paginator");
