export = Content;
declare class Content {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        getAnnouncements: string;
        getBlog: string;
        getBlogs: string;
        getCustomFieldDefinition: string;
        getCustomFieldDefinitions: string;
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
        getPageV1: string;
        getPages: string;
        getPagesV1: string;
        getSEOConfiguration: string;
        getSEOMarkupSchemas: string;
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
     * @summary: Fetches announcements of an Application
     * @description: Retrieves all current announcements in the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getAnnouncements/).
     */
    getAnnouncements({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ContentApplicationModel.AnnouncementsResponseSchema>;
    /**
     * @param {ContentApplicationValidator.GetBlogParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ContentApplicationModel.BlogSchema>} - Success response
     * @name getBlog
     * @summary: Retrieves a single blog post.
     * @description: Retrieves all information relate to a specific blog such as it's contents, author, publish date, SEO related information. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getBlog/).
     */
    getBlog({ slug, rootId, requestHeaders }?: ContentApplicationValidator.GetBlogParam, { responseHeaders }?: object): Promise<ContentApplicationModel.BlogSchema>;
    /**
     * @param {ContentApplicationValidator.GetBlogsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ContentApplicationModel.BlogGetResponse>} - Success response
     * @name getBlogs
     * @summary: Lists all blog posts
     * @description: Retrieve all the blogs which are present in the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getBlogs/).
     */
    getBlogs({ pageNo, pageSize, requestHeaders }?: ContentApplicationValidator.GetBlogsParam, { responseHeaders }?: object): Promise<ContentApplicationModel.BlogGetResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @returns {Paginator<ContentApplicationModel.BlogGetResponse>}
     * @summary: Lists all blog posts
     * @description: Retrieve all the blogs which are present in the application.
     */
    getBlogsPaginator({ pageSize }?: {
        pageSize?: number;
    }): Paginator<ContentApplicationModel.BlogGetResponse>;
    /**
     * @param {ContentApplicationValidator.GetCustomFieldDefinitionParam} arg -
     *   Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ContentApplicationModel.CustomFieldDefinitionDetailResSchema>}
     *   - Success response
     *
     * @name getCustomFieldDefinition
     * @summary: Get custom fields definition by id
     * @description: Use this API to retrieve the definitions of custom fields using definition_id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getCustomFieldDefinition/).
     */
    getCustomFieldDefinition({ id, requestHeaders }?: ContentApplicationValidator.GetCustomFieldDefinitionParam, { responseHeaders }?: object): Promise<ContentApplicationModel.CustomFieldDefinitionDetailResSchema>;
    /**
     * @param {ContentApplicationValidator.GetCustomFieldDefinitionsParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ContentApplicationModel.CustomFieldDefinitionsSchema>}
     *   - Success response
     *
     * @name getCustomFieldDefinitions
     * @summary: Get custom fields definitions
     * @description: Use this API to retrieve the definitions of custom fields. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getCustomFieldDefinitions/).
     */
    getCustomFieldDefinitions({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ContentApplicationModel.CustomFieldDefinitionsSchema>;
    /**
     * @param {ContentApplicationValidator.GetCustomFieldsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ContentApplicationModel.CustomFieldsResponseByResourceIdSchema>}
     *   - Success response
     *
     * @name getCustomFields
     * @summary: Get list of custom fields of given resource and resource_ids in the query params.
     * @description: Use this API to retrieve the custom fields for given resource and resource_ids in param. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getCustomFields/).
     */
    getCustomFields({ resource, resourceIds, requestHeaders }?: ContentApplicationValidator.GetCustomFieldsParam, { responseHeaders }?: object): Promise<ContentApplicationModel.CustomFieldsResponseByResourceIdSchema>;
    /**
     * @param {ContentApplicationValidator.GetCustomObjectParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ContentApplicationModel.CustomObjectByIdSchema>} -
     *   Success response
     * @name getCustomObject
     * @summary: Get custom object details
     * @description: Use this API to retrieve the custom object details, their fields details with definitions and references. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getCustomObject/).
     */
    getCustomObject({ id, requestHeaders }?: ContentApplicationValidator.GetCustomObjectParam, { responseHeaders }?: object): Promise<ContentApplicationModel.CustomObjectByIdSchema>;
    /**
     * @param {ContentApplicationValidator.GetDataLoadersParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ContentApplicationModel.DataLoadersSchema>} - Success response
     * @name getDataLoaders
     * @summary: Retrieves data loaders enabled for an application
     * @description: Retrieves all the data loaders that are added and enabled for an application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getDataLoaders/).
     */
    getDataLoaders({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ContentApplicationModel.DataLoadersSchema>;
    /**
     * @param {ContentApplicationValidator.GetFaqBySlugParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ContentApplicationModel.FaqSchema>} - Success response
     * @name getFaqBySlug
     * @summary: Retrieves FAQ by slug.
     * @description: Retrieves a specific FAQ using its slug identifier. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getFaqBySlug/).
     */
    getFaqBySlug({ slug, requestHeaders }?: ContentApplicationValidator.GetFaqBySlugParam, { responseHeaders }?: object): Promise<ContentApplicationModel.FaqSchema>;
    /**
     * @param {ContentApplicationValidator.GetFaqCategoriesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ContentApplicationModel.GetFaqCategoriesSchema>} -
     *   Success response
     * @name getFaqCategories
     * @summary: Lists FAQ categories.
     * @description: Retrieve categories for organizing FAQs. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getFaqCategories/).
     */
    getFaqCategories({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ContentApplicationModel.GetFaqCategoriesSchema>;
    /**
     * @param {ContentApplicationValidator.GetFaqCategoryBySlugParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ContentApplicationModel.GetFaqCategoryBySlugSchema>} -
     *   Success response
     * @name getFaqCategoryBySlug
     * @summary: Retrieves FAQ category by slug.
     * @description: Retrieve a specific FAQ category using its slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getFaqCategoryBySlug/).
     */
    getFaqCategoryBySlug({ slug, requestHeaders }?: ContentApplicationValidator.GetFaqCategoryBySlugParam, { responseHeaders }?: object): Promise<ContentApplicationModel.GetFaqCategoryBySlugSchema>;
    /**
     * @param {ContentApplicationValidator.GetFaqsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ContentApplicationModel.FaqResponseSchema>} - Success response
     * @name getFaqs
     * @summary: Fetches FAQs of an applicaiton
     * @description: Retrieves a list of frequently asked questions. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getFaqs/).
     */
    getFaqs({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ContentApplicationModel.FaqResponseSchema>;
    /**
     * @param {ContentApplicationValidator.GetFaqsByCategorySlugParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ContentApplicationModel.GetFaqSchema>} - Success response
     * @name getFaqsByCategorySlug
     * @summary: Retrieves FAQs by category.
     * @description: Retrieves FAQs belonging to a specific category slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getFaqsByCategorySlug/).
     */
    getFaqsByCategorySlug({ slug, requestHeaders }?: ContentApplicationValidator.GetFaqsByCategorySlugParam, { responseHeaders }?: object): Promise<ContentApplicationModel.GetFaqSchema>;
    /**
     * @param {ContentApplicationValidator.GetLandingPageParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ContentApplicationModel.LandingPageSchema>} - Success response
     * @name getLandingPage
     * @summary: Fetches landing page.
     * @description: Gets the content of the application's landing page. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getLandingPage/).
     */
    getLandingPage({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ContentApplicationModel.LandingPageSchema>;
    /**
     * @param {ContentApplicationValidator.GetLegalInformationParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ContentApplicationModel.ApplicationLegal>} - Success response
     * @name getLegalInformation
     * @summary: Retrieves legal information.
     * @description: Retrieve legal policies for an application which includes Terms and conditions, return policy, shipping policy and privacy policy. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getLegalInformation/).
     */
    getLegalInformation({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ContentApplicationModel.ApplicationLegal>;
    /**
     * @param {ContentApplicationValidator.GetNavigationsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ContentApplicationModel.NavigationGetResponse>} -
     *   Success response
     * @name getNavigations
     * @summary: Retrieves navigation items
     * @description: Retrieves the navigation link items which can be powered to genreate menus on application's website or equivalent mobile apps - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getNavigations/).
     */
    getNavigations({ pageNo, pageSize, requestHeaders }?: ContentApplicationValidator.GetNavigationsParam, { responseHeaders }?: object): Promise<ContentApplicationModel.NavigationGetResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @returns {Paginator<ContentApplicationModel.NavigationGetResponse>}
     * @summary: Retrieves navigation items
     * @description: Retrieves the navigation link items which can be powered to genreate menus on application's website or equivalent mobile apps
     */
    getNavigationsPaginator({ pageSize }?: {
        pageSize?: number;
    }): Paginator<ContentApplicationModel.NavigationGetResponse>;
    /**
     * @param {ContentApplicationValidator.GetPageParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ContentApplicationModel.PageSchema>} - Success response
     * @name getPage
     * @summary: Single page details.
     * @description: Retrieve detailed information for a specific page within the theme. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getPage/).
     */
    getPage({ slug, rootId, requestHeaders }?: ContentApplicationValidator.GetPageParam, { responseHeaders }?: object): Promise<ContentApplicationModel.PageSchema>;
    /**
     * @param {ContentApplicationValidator.GetPageV1Param} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ContentApplicationModel.PageSchema>} - Success response
     * @name getPageV1
     * @summary: Single page details.
     * @description: Retrieve detailed information for a specific page within the theme. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getPageV1/).
     */
    getPageV1({ slug, rootId, requestHeaders }?: ContentApplicationValidator.GetPageV1Param, { responseHeaders }?: object): Promise<ContentApplicationModel.PageSchema>;
    /**
     * @param {ContentApplicationValidator.GetPagesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ContentApplicationModel.PageGetResponse>} - Success response
     * @name getPages
     * @summary: Lists all pages.
     * @description: Retrieve all available content pages in the app. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getPages/).
     */
    getPages({ pageNo, pageSize, requestHeaders }?: ContentApplicationValidator.GetPagesParam, { responseHeaders }?: object): Promise<ContentApplicationModel.PageGetResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @returns {Paginator<ContentApplicationModel.PageGetResponse>}
     * @summary: Lists all pages.
     * @description: Retrieve all available content pages in the app.
     */
    getPagesPaginator({ pageSize }?: {
        pageSize?: number;
    }): Paginator<ContentApplicationModel.PageGetResponse>;
    /**
     * @param {ContentApplicationValidator.GetPagesV1Param} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ContentApplicationModel.PageGetResponse>} - Success response
     * @name getPagesV1
     * @summary: Lists all pages.
     * @description: Retrieve all available content pages in the app. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getPagesV1/).
     */
    getPagesV1({ pageNo, pageSize, requestHeaders }?: ContentApplicationValidator.GetPagesV1Param, { responseHeaders }?: object): Promise<ContentApplicationModel.PageGetResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @returns {Paginator<ContentApplicationModel.PageGetResponse>}
     * @summary: Lists all pages.
     * @description: Retrieve all available content pages in the app.
     */
    getPagesV1Paginator({ pageSize }?: {
        pageSize?: number;
    }): Paginator<ContentApplicationModel.PageGetResponse>;
    /**
     * @param {ContentApplicationValidator.GetSEOConfigurationParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ContentApplicationModel.SeoComponent>} - Success response
     * @name getSEOConfiguration
     * @summary: Retrieves SEO settings of an applicaiton
     * @description: Retrieve search engine optimization configurations of an application. Details include the title, description and an image - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getSEOConfiguration/).
     */
    getSEOConfiguration({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ContentApplicationModel.SeoComponent>;
    /**
     * @param {ContentApplicationValidator.GetSEOMarkupSchemasParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ContentApplicationModel.SeoSchemaComponent>} - Success response
     * @name getSEOMarkupSchemas
     * @summary: Get SEO Markup schemas of an application
     * @description: Use this API to get all SEO Markup schema Templates setup for an application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getSEOMarkupSchemas/).
     */
    getSEOMarkupSchemas({ pageType, active, requestHeaders }?: ContentApplicationValidator.GetSEOMarkupSchemasParam, { responseHeaders }?: object): Promise<ContentApplicationModel.SeoSchemaComponent>;
    /**
     * @param {ContentApplicationValidator.GetSupportInformationParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ContentApplicationModel.Support>} - Success response
     * @name getSupportInformation
     * @summary: Retrieves support related info of an applicaiton
     * @description: Retrieves customer support contact details. Contact Details can be either phone number or email-id or both. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getSupportInformation/).
     */
    getSupportInformation({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ContentApplicationModel.Support>;
    /**
     * @param {ContentApplicationValidator.GetTagsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ContentApplicationModel.TagsSchema>} - Success response
     * @name getTags
     * @summary: Retrieves HTML tags
     * @description: Retrieve any HTML tags to power additional functionalities within an application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getTags/).
     */
    getTags({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ContentApplicationModel.TagsSchema>;
}
import ContentApplicationModel = require("sdk/output/javascript/code/sdk/application/Content/ContentApplicationModel");
import ContentApplicationValidator = require("sdk/output/javascript/code/sdk/application/Content/ContentApplicationValidator");
import Paginator = require("sdk/output/javascript/code/sdk/common/Paginator");
