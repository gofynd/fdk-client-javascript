export = ContentApplicationValidator;
/** @typedef GetAnnouncementsParam */
/**
 * @typedef GetBlogParam
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   a blog. You can get slug value from the endpoint
 *   /service/application/content/v1.0/blogs/.
 * @property {string} [rootId] - ID given to the HTML element.
 */
/**
 * @typedef GetBlogsParam
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1. .
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 * @property {string} [tags] - Blogs retrieve based on the list of tags passed.
 * @property {string} [search] - Blogs retrieve based on the title.
 */
/**
 * @typedef GetCustomFieldsParam
 * @property {string} resource - This is the name of resource for which you want
 *   to fetch custom fields eg. product, collection, customer etc.
 * @property {string} resourceId - This is the resource id for which custom fields created
 */
/**
 * @typedef GetCustomObjectParam
 * @property {string} metaobjectId - This is meta object id
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
 *   set of results. Default value is 1. .
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 */
/**
 * @typedef GetPageParam
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   a page. You can get slug value from the endpoint
 *   /service/application/content/v2.0/pages/.
 * @property {string} [rootId] - ID given to the HTML element.
 */
/**
 * @typedef GetPagesParam
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1. .
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 */
/** @typedef GetSEOConfigurationParam */
/**
 * @typedef GetSEOMarkupSchemasParam
 * @property {string} [pageType] - The type of page against which schema
 *   template was created.
 * @property {boolean} [active] - Boolean value for fetching seo schema.
 */
/**
 * @typedef GetSlideshowParam
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   a slideshow. You can get slug value from the endpoint
 *   /service/application/content/v1.0/slideshow/.
 */
/**
 * @typedef GetSlideshowsParam
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1. .
 * @property {number} [pageSize] - The number of items to retrieve in each page.
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
    /** @returns {GetPagesParam} */
    static getPages(): GetPagesParam;
    /** @returns {GetSEOConfigurationParam} */
    static getSEOConfiguration(): any;
    /** @returns {GetSEOMarkupSchemasParam} */
    static getSEOMarkupSchemas(): GetSEOMarkupSchemasParam;
    /** @returns {GetSlideshowParam} */
    static getSlideshow(): GetSlideshowParam;
    /** @returns {GetSlideshowsParam} */
    static getSlideshows(): GetSlideshowsParam;
    /** @returns {GetSupportInformationParam} */
    static getSupportInformation(): any;
    /** @returns {GetTagsParam} */
    static getTags(): any;
}
declare namespace ContentApplicationValidator {
    export { GetAnnouncementsParam, GetBlogParam, GetBlogsParam, GetCustomFieldsParam, GetCustomObjectParam, GetDataLoadersParam, GetFaqBySlugParam, GetFaqCategoriesParam, GetFaqCategoryBySlugParam, GetFaqsParam, GetFaqsByCategorySlugParam, GetLandingPageParam, GetLegalInformationParam, GetNavigationsParam, GetPageParam, GetPagesParam, GetSEOConfigurationParam, GetSEOMarkupSchemasParam, GetSlideshowParam, GetSlideshowsParam, GetSupportInformationParam, GetTagsParam };
}
type GetBlogParam = {
    /**
     * - A short, human-readable, URL-friendly identifier of
     * a blog. You can get slug value from the endpoint
     * /service/application/content/v1.0/blogs/.
     */
    slug: string;
    /**
     * - ID given to the HTML element.
     */
    rootId?: string;
};
type GetBlogsParam = {
    /**
     * - The page number to navigate through the given
     * set of results. Default value is 1. .
     */
    pageNo?: number;
    /**
     * - The number of items to retrieve in each page.
     */
    pageSize?: number;
    /**
     * - Blogs retrieve based on the list of tags passed.
     */
    tags?: string;
    /**
     * - Blogs retrieve based on the title.
     */
    search?: string;
};
type GetCustomFieldsParam = {
    /**
     * - This is the name of resource for which you want
     * to fetch custom fields eg. product, collection, customer etc.
     */
    resource: string;
    /**
     * - This is the resource id for which custom fields created
     */
    resourceId: string;
};
type GetCustomObjectParam = {
    /**
     * - This is meta object id
     */
    metaobjectId: string;
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
     * set of results. Default value is 1. .
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
     * - ID given to the HTML element.
     */
    rootId?: string;
};
type GetPagesParam = {
    /**
     * - The page number to navigate through the given
     * set of results. Default value is 1. .
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
     * template was created.
     */
    pageType?: string;
    /**
     * - Boolean value for fetching seo schema.
     */
    active?: boolean;
};
type GetSlideshowParam = {
    /**
     * - A short, human-readable, URL-friendly identifier of
     * a slideshow. You can get slug value from the endpoint
     * /service/application/content/v1.0/slideshow/.
     */
    slug: string;
};
type GetSlideshowsParam = {
    /**
     * - The page number to navigate through the given
     * set of results. Default value is 1. .
     */
    pageNo?: number;
    /**
     * - The number of items to retrieve in each page.
     */
    pageSize?: number;
};
type GetAnnouncementsParam = any;
type GetDataLoadersParam = any;
type GetFaqCategoriesParam = any;
type GetFaqsParam = any;
type GetLandingPageParam = any;
type GetLegalInformationParam = any;
type GetSEOConfigurationParam = any;
type GetSupportInformationParam = any;
type GetTagsParam = any;
