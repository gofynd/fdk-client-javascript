export = ContentApplicationValidator;
/** @typedef getAnnouncements */
/**
 * @typedef getBlog
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   a blog. You can get slug value from the endpoint
 *   /service/application/content/v1.0/blogs/.
 * @property {string} [rootId] - ID given to the HTML element
 */
/**
 * @typedef getBlogs
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 */
/** @typedef getDataLoaders */
/**
 * @typedef getFaqBySlug
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   an FAQ. You can get slug value from the endpoint
 *   /service/application/content/v1.0/faq.
 */
/** @typedef getFaqCategories */
/**
 * @typedef getFaqCategoryBySlug
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   an FAQ category. You can get slug value from the endpoint
 *   /service/application/content/v1.0/faq/categories.
 */
/** @typedef getFaqs */
/**
 * @typedef getFaqsByCategorySlug
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   an FAQ category. You can get slug value from the endpoint
 *   /service/application/content/v1.0/faq/categories.
 */
/** @typedef getLandingPage */
/** @typedef getLegalInformation */
/**
 * @typedef getNavigations
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 */
/**
 * @typedef getPage
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   a page. You can get slug value from the endpoint
 *   /service/application/content/v2.0/pages/.
 * @property {string} [rootId] - ID given to the HTML element
 */
/**
 * @typedef getPages
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 */
/** @typedef getSEOConfiguration */
/**
 * @typedef getSlideshow
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   a slideshow. You can get slug value from the endpoint
 *   /service/application/content/v1.0/slideshow/.
 */
/**
 * @typedef getSlideshows
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 */
/** @typedef getSupportInformation */
/** @typedef getTags */
declare class ContentApplicationValidator {
}
declare namespace ContentApplicationValidator {
    export { getAnnouncements, getBlog, getBlogs, getDataLoaders, getFaqBySlug, getFaqCategories, getFaqCategoryBySlug, getFaqs, getFaqsByCategorySlug, getLandingPage, getLegalInformation, getNavigations, getPage, getPages, getSEOConfiguration, getSlideshow, getSlideshows, getSupportInformation, getTags };
}
/** @returns {getAnnouncements} */
declare function getAnnouncements(): any;
type getAnnouncements = any;
/** @returns {getBlog} */
declare function getBlog(): getBlog;
type getBlog = {
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
/** @returns {getBlogs} */
declare function getBlogs(): getBlogs;
type getBlogs = {
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
/** @returns {getDataLoaders} */
declare function getDataLoaders(): any;
type getDataLoaders = any;
/** @returns {getFaqBySlug} */
declare function getFaqBySlug(): getFaqBySlug;
type getFaqBySlug = {
    /**
     * - A short, human-readable, URL-friendly identifier of
     * an FAQ. You can get slug value from the endpoint
     * /service/application/content/v1.0/faq.
     */
    slug: string;
};
/** @returns {getFaqCategories} */
declare function getFaqCategories(): any;
type getFaqCategories = any;
/** @returns {getFaqCategoryBySlug} */
declare function getFaqCategoryBySlug(): getFaqCategoryBySlug;
type getFaqCategoryBySlug = {
    /**
     * - A short, human-readable, URL-friendly identifier of
     * an FAQ category. You can get slug value from the endpoint
     * /service/application/content/v1.0/faq/categories.
     */
    slug: string;
};
/** @returns {getFaqs} */
declare function getFaqs(): any;
type getFaqs = any;
/** @returns {getFaqsByCategorySlug} */
declare function getFaqsByCategorySlug(): getFaqsByCategorySlug;
type getFaqsByCategorySlug = {
    /**
     * - A short, human-readable, URL-friendly identifier of
     * an FAQ category. You can get slug value from the endpoint
     * /service/application/content/v1.0/faq/categories.
     */
    slug: string;
};
/** @returns {getLandingPage} */
declare function getLandingPage(): any;
type getLandingPage = any;
/** @returns {getLegalInformation} */
declare function getLegalInformation(): any;
type getLegalInformation = any;
/** @returns {getNavigations} */
declare function getNavigations(): getNavigations;
type getNavigations = {
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
/** @returns {getPage} */
declare function getPage(): getPage;
type getPage = {
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
/** @returns {getPages} */
declare function getPages(): getPages;
type getPages = {
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
/** @returns {getSEOConfiguration} */
declare function getSEOConfiguration(): any;
type getSEOConfiguration = any;
/** @returns {getSlideshow} */
declare function getSlideshow(): getSlideshow;
type getSlideshow = {
    /**
     * - A short, human-readable, URL-friendly identifier of
     * a slideshow. You can get slug value from the endpoint
     * /service/application/content/v1.0/slideshow/.
     */
    slug: string;
};
/** @returns {getSlideshows} */
declare function getSlideshows(): getSlideshows;
type getSlideshows = {
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
/** @returns {getSupportInformation} */
declare function getSupportInformation(): any;
type getSupportInformation = any;
/** @returns {getTags} */
declare function getTags(): any;
type getTags = any;
