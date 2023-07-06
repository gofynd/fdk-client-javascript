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
 * @typedef GetPagesParam
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 */
/** @typedef GetSEOConfigurationParam */
/**
 * @typedef GetSlideshowParam
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   a slideshow. You can get slug value from the endpoint
 *   /service/application/content/v1.0/slideshow/.
 */
/**
 * @typedef GetSlideshowsParam
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 */
/** @typedef GetSupportInformationParam */
/** @typedef GetTagsParam */
declare class ContentApplicationValidator {
    /** @returns {getAnnouncements} */
    static getAnnouncements(): getAnnouncements;
    /** @returns {getBlog} */
    static getBlog(): getBlog;
    /** @returns {getBlogs} */
    static getBlogs(): getBlogs;
    /** @returns {getDataLoaders} */
    static getDataLoaders(): getDataLoaders;
    /** @returns {getFaqBySlug} */
    static getFaqBySlug(): getFaqBySlug;
    /** @returns {getFaqCategories} */
    static getFaqCategories(): getFaqCategories;
    /** @returns {getFaqCategoryBySlug} */
    static getFaqCategoryBySlug(): getFaqCategoryBySlug;
    /** @returns {getFaqs} */
    static getFaqs(): getFaqs;
    /** @returns {getFaqsByCategorySlug} */
    static getFaqsByCategorySlug(): getFaqsByCategorySlug;
    /** @returns {getLandingPage} */
    static getLandingPage(): getLandingPage;
    /** @returns {getLegalInformation} */
    static getLegalInformation(): getLegalInformation;
    /** @returns {getNavigations} */
    static getNavigations(): getNavigations;
    /** @returns {getPage} */
    static getPage(): getPage;
    /** @returns {getPages} */
    static getPages(): getPages;
    /** @returns {getSEOConfiguration} */
    static getSEOConfiguration(): getSEOConfiguration;
    /** @returns {getSlideshow} */
    static getSlideshow(): getSlideshow;
    /** @returns {getSlideshows} */
    static getSlideshows(): getSlideshows;
    /** @returns {getSupportInformation} */
    static getSupportInformation(): getSupportInformation;
    /** @returns {getTags} */
    static getTags(): getTags;
}
declare namespace ContentApplicationValidator {
    export { GetAnnouncementsParam, GetBlogParam, GetBlogsParam, GetDataLoadersParam, GetFaqBySlugParam, GetFaqCategoriesParam, GetFaqCategoryBySlugParam, GetFaqsParam, GetFaqsByCategorySlugParam, GetLandingPageParam, GetLegalInformationParam, GetNavigationsParam, GetPageParam, GetPagesParam, GetSEOConfigurationParam, GetSlideshowParam, GetSlideshowsParam, GetSupportInformationParam, GetTagsParam };
}
type GetAnnouncementsParam = any;
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
type GetDataLoadersParam = any;
type GetFaqBySlugParam = {
    /**
     * - A short, human-readable, URL-friendly identifier of
     * an FAQ. You can get slug value from the endpoint
     * /service/application/content/v1.0/faq.
     */
    slug: string;
};
type GetFaqCategoriesParam = any;
type GetFaqCategoryBySlugParam = {
    /**
     * - A short, human-readable, URL-friendly identifier of
     * an FAQ category. You can get slug value from the endpoint
     * /service/application/content/v1.0/faq/categories.
     */
    slug: string;
};
type GetFaqsParam = any;
type GetFaqsByCategorySlugParam = {
    /**
     * - A short, human-readable, URL-friendly identifier of
     * an FAQ category. You can get slug value from the endpoint
     * /service/application/content/v1.0/faq/categories.
     */
    slug: string;
};
type GetLandingPageParam = any;
type GetLegalInformationParam = any;
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
type GetSEOConfigurationParam = any;
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
     * set of results. Default value is 1.
     */
    pageNo?: number;
    /**
     * - The number of items to retrieve in each page.
     */
    pageSize?: number;
};
type GetSupportInformationParam = any;
type GetTagsParam = any;
