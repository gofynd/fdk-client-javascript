export = ContentApplicationValidator;
/** @typedef GetAnnouncementsParam */
/**
 * @typedef GetBlogParam
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   a blog. You can get slug value from the endpoint
 *   /service/application/content/v1.0/blogs/.
 * @property {string} [rootId] - ID given to the HTML element
 */
/**
 * @typedef GetBlogsParam
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 */
/**
 * @typedef GetCustomFieldDefinitionParam
 * @property {string} id
 */
/** @typedef GetCustomFieldDefinitionsParam */
/**
 * @typedef GetCustomFieldsParam
 * @property {string} resource
 * @property {string} resourceIds
 */
/**
 * @typedef GetCustomObjectParam
 * @property {string} id
 */
/** @typedef GetDataLoadersParam */
/**
 * @typedef GetFaqBySlugParam
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   an FAQ. You can get slug value from the endpoint
 *   /service/application/content/v1.0/faq.
 */
/** @typedef GetFaqCategoriesParam */
/**
 * @typedef GetFaqCategoryBySlugParam
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   an FAQ category. You can get slug value from the endpoint
 *   /service/application/content/v1.0/faq/categories.
 */
/** @typedef GetFaqsParam */
/**
 * @typedef GetFaqsByCategorySlugParam
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   an FAQ category. You can get slug value from the endpoint
 *   /service/application/content/v1.0/faq/categories.
 */
/** @typedef GetLandingPageParam */
/** @typedef GetLegalInformationParam */
/**
 * @typedef GetNavigationsParam
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 */
/**
 * @typedef GetPageParam
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   a page. You can get slug value from the endpoint
 *   /service/application/content/v2.0/pages/.
 * @property {string} [rootId] - ID given to the HTML element
 */
/**
 * @typedef GetPageV1Param
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   a page. You can get slug value from the endpoint
 *   /service/application/content/v2.0/pages/.
 * @property {string} [rootId] - ID given to the HTML element
 */
/**
 * @typedef GetPagesParam
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 */
/**
 * @typedef GetPagesV1Param
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 */
/** @typedef GetSEOConfigurationParam */
/**
 * @typedef GetSEOMarkupSchemasParam
 * @property {string} [pageType] - The type of page against which schema
 *   template was created
 * @property {boolean} [active] - Boolean value for fetching seo schema.
 */
/** @typedef GetSupportInformationParam */
/** @typedef GetTagsParam */
declare class ContentApplicationValidator {
    /** @returns {GetAnnouncementsParam} */
    static getAnnouncements(): any;
    /** @returns {GetBlogParam} */
    static getBlog(): GetBlogParam;
    /** @returns {GetBlogsParam} */
    static getBlogs(): GetBlogsParam;
    /** @returns {GetCustomFieldDefinitionParam} */
    static getCustomFieldDefinition(): GetCustomFieldDefinitionParam;
    /** @returns {GetCustomFieldDefinitionsParam} */
    static getCustomFieldDefinitions(): any;
    /** @returns {GetCustomFieldsParam} */
    static getCustomFields(): GetCustomFieldsParam;
    /** @returns {GetCustomObjectParam} */
    static getCustomObject(): GetCustomObjectParam;
    /** @returns {GetDataLoadersParam} */
    static getDataLoaders(): any;
    /** @returns {GetFaqBySlugParam} */
    static getFaqBySlug(): GetFaqBySlugParam;
    /** @returns {GetFaqCategoriesParam} */
    static getFaqCategories(): any;
    /** @returns {GetFaqCategoryBySlugParam} */
    static getFaqCategoryBySlug(): GetFaqCategoryBySlugParam;
    /** @returns {GetFaqsParam} */
    static getFaqs(): any;
    /** @returns {GetFaqsByCategorySlugParam} */
    static getFaqsByCategorySlug(): GetFaqsByCategorySlugParam;
    /** @returns {GetLandingPageParam} */
    static getLandingPage(): any;
    /** @returns {GetLegalInformationParam} */
    static getLegalInformation(): any;
    /** @returns {GetNavigationsParam} */
    static getNavigations(): GetNavigationsParam;
    /** @returns {GetPageParam} */
    static getPage(): GetPageParam;
    /** @returns {GetPageV1Param} */
    static getPageV1(): GetPageV1Param;
    /** @returns {GetPagesParam} */
    static getPages(): GetPagesParam;
    /** @returns {GetPagesV1Param} */
    static getPagesV1(): GetPagesV1Param;
    /** @returns {GetSEOConfigurationParam} */
    static getSEOConfiguration(): any;
    /** @returns {GetSEOMarkupSchemasParam} */
    static getSEOMarkupSchemas(): GetSEOMarkupSchemasParam;
    /** @returns {GetSupportInformationParam} */
    static getSupportInformation(): any;
    /** @returns {GetTagsParam} */
    static getTags(): any;
}
declare namespace ContentApplicationValidator {
    export { GetAnnouncementsParam, GetBlogParam, GetBlogsParam, GetCustomFieldDefinitionParam, GetCustomFieldDefinitionsParam, GetCustomFieldsParam, GetCustomObjectParam, GetDataLoadersParam, GetFaqBySlugParam, GetFaqCategoriesParam, GetFaqCategoryBySlugParam, GetFaqsParam, GetFaqsByCategorySlugParam, GetLandingPageParam, GetLegalInformationParam, GetNavigationsParam, GetPageParam, GetPageV1Param, GetPagesParam, GetPagesV1Param, GetSEOConfigurationParam, GetSEOMarkupSchemasParam, GetSupportInformationParam, GetTagsParam };
}
type GetBlogParam = {
    /**
     * - A short, human-readable, URL-friendly identifier of
     * a blog. You can get slug value from the endpoint
     * /service/application/content/v1.0/blogs/.
     */
    slug: string;
    /**
     * - ID given to the HTML element
     */
    rootId?: string;
};
type GetBlogsParam = {
    /**
     * - The page number to navigate through the given
     * set of results. Default value is 1.
     */
    pageNo?: number;
    /**
     * - The number of items to retrieve in each page.
     */
    pageSize?: number;
};
type GetCustomFieldDefinitionParam = {
    id: string;
};
type GetCustomFieldsParam = {
    resource: string;
    resourceIds: string;
};
type GetCustomObjectParam = {
    id: string;
};
type GetFaqBySlugParam = {
    /**
     * - A short, human-readable, URL-friendly identifier of
     * an FAQ. You can get slug value from the endpoint
     * /service/application/content/v1.0/faq.
     */
    slug: string;
};
type GetFaqCategoryBySlugParam = {
    /**
     * - A short, human-readable, URL-friendly identifier of
     * an FAQ category. You can get slug value from the endpoint
     * /service/application/content/v1.0/faq/categories.
     */
    slug: string;
};
type GetFaqsByCategorySlugParam = {
    /**
     * - A short, human-readable, URL-friendly identifier of
     * an FAQ category. You can get slug value from the endpoint
     * /service/application/content/v1.0/faq/categories.
     */
    slug: string;
};
type GetNavigationsParam = {
    /**
     * - The page number to navigate through the given
     * set of results. Default value is 1.
     */
    pageNo?: number;
    /**
     * - The number of items to retrieve in each page.
     */
    pageSize?: number;
};
type GetPageParam = {
    /**
     * - A short, human-readable, URL-friendly identifier of
     * a page. You can get slug value from the endpoint
     * /service/application/content/v2.0/pages/.
     */
    slug: string;
    /**
     * - ID given to the HTML element
     */
    rootId?: string;
};
type GetPageV1Param = {
    /**
     * - A short, human-readable, URL-friendly identifier of
     * a page. You can get slug value from the endpoint
     * /service/application/content/v2.0/pages/.
     */
    slug: string;
    /**
     * - ID given to the HTML element
     */
    rootId?: string;
};
type GetPagesParam = {
    /**
     * - The page number to navigate through the given
     * set of results. Default value is 1.
     */
    pageNo?: number;
    /**
     * - The number of items to retrieve in each page.
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
     */
    pageSize?: number;
};
type GetSEOMarkupSchemasParam = {
    /**
     * - The type of page against which schema
     * template was created
     */
    pageType?: string;
    /**
     * - Boolean value for fetching seo schema.
     */
    active?: boolean;
};
type GetAnnouncementsParam = any;
type GetCustomFieldDefinitionsParam = any;
type GetDataLoadersParam = any;
type GetFaqCategoriesParam = any;
type GetFaqsParam = any;
type GetLandingPageParam = any;
type GetLegalInformationParam = any;
type GetSEOConfigurationParam = any;
type GetSupportInformationParam = any;
type GetTagsParam = any;
