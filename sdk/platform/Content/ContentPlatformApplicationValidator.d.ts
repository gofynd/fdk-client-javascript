export = ContentPlatformApplicationValidator;
/**
 * @typedef addDataLoader
 * @property {ContentPlatformModel.DataLoaderSchema} body
 */
/**
 * @typedef addFaq
 * @property {string} categoryId - ID allotted to an FAQ category.
 * @property {ContentPlatformModel.CreateFaqSchema} body
 */
/**
 * @typedef addInjectableTag
 * @property {ContentPlatformModel.CreateTagRequestSchema} body
 */
/**
 * @typedef addPathRedirectionRules
 * @property {ContentPlatformModel.PathMappingSchema} body
 */
/**
 * @typedef createAnnouncement
 * @property {ContentPlatformModel.AdminAnnouncementSchema} body
 */
/**
 * @typedef createBlog
 * @property {ContentPlatformModel.BlogRequest} body
 */
/**
 * @typedef createFaqCategory
 * @property {ContentPlatformModel.CreateFaqCategoryRequestSchema} body
 */
/**
 * @typedef createLandingPage
 * @property {ContentPlatformModel.LandingPageSchema} body
 */
/**
 * @typedef createNavigation
 * @property {ContentPlatformModel.NavigationRequest} body
 */
/**
 * @typedef createPage
 * @property {ContentPlatformModel.PageRequest} body
 */
/**
 * @typedef createPagePreview
 * @property {ContentPlatformModel.PageRequest} body
 */
/**
 * @typedef createSlideshow
 * @property {ContentPlatformModel.SlideshowRequest} body
 */
/** @typedef deleteAllInjectableTags */
/**
 * @typedef deleteAnnouncement
 * @property {string} announcementId - ID allotted to the announcement.
 */
/**
 * @typedef deleteBlog
 * @property {string} id - ID allotted to the blog.
 */
/**
 * @typedef deleteDataLoader
 * @property {string} dataLoaderId - ID allotted to the data loader.
 */
/**
 * @typedef deleteFaq
 * @property {string} categoryId - ID allotted to an FAQ category.
 * @property {string} faqId - ID allotted to an FAQ.
 */
/**
 * @typedef deleteFaqCategory
 * @property {string} id - ID allotted to an FAQ category.
 */
/**
 * @typedef deleteLandingPage
 * @property {string} id - ID allotted to a landing page.
 */
/**
 * @typedef deleteNavigation
 * @property {string} id - ID allotted to the navigation.
 */
/**
 * @typedef deletePage
 * @property {string} id - ID allotted to the page.
 */
/**
 * @typedef deletePathRedirectionRules
 * @property {string} pathId - ID allotted to the path redirection rule.
 */
/**
 * @typedef deleteSlideshow
 * @property {string} id - ID allotted to the slideshow.
 */
/**
 * @typedef editDataLoader
 * @property {string} dataLoaderId - ID allotted to the data loader.
 * @property {ContentPlatformModel.DataLoaderSchema} body
 */
/**
 * @typedef editInjectableTag
 * @property {string} tagId - ID allotted to the tag.
 * @property {ContentPlatformModel.UpdateHandpickedSchema} body
 */
/**
 * @typedef generateSEOTitle
 * @property {ContentPlatformModel.GenerationEntityType} type - String
 *   representing the type of SEO content to be generated. Possible values are:
 *   title, description
 * @property {ContentPlatformModel.GenerateSEOContent} body
 */
/**
 * @typedef getAnnouncementById
 * @property {string} announcementId - ID allotted to the announcement.
 */
/**
 * @typedef getAnnouncementsList
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 */
/**
 * @typedef getBlogBySlug
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   a blog page. You can get slug value of a blog from `getBlogs` API.
 */
/**
 * @typedef getBlogs
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 */
/**
 * @typedef getComponentById
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   a blog page. You can get slug value of a blog from `getBlogs` API.
 */
/** @typedef getDataLoaders */
/** @typedef getDefaultNavigations */
/**
 * @typedef getFaqByIdOrSlug
 * @property {string} idOrSlug - ID or the slug allotted to an FAQ category.
 *   Slug is a short, human-readable, URL-friendly identifier of an object. You
 *   can get slug value of an FAQ category from `getFaqCategories` API.
 */
/** @typedef getFaqCategories */
/**
 * @typedef getFaqCategoryBySlugOrId
 * @property {string} idOrSlug - ID or the slug allotted to an FAQ category.
 *   Slug is a short, human-readable, URL-friendly identifier of an object. You
 *   can get slug value of an FAQ category from `getFaqCategories` API.
 */
/**
 * @typedef getFaqsByCategoryIdOrSlug
 * @property {string} idOrSlug - ID or the slug allotted to an FAQ category.
 *   Slug is a short, human-readable, URL-friendly identifier of an object. You
 *   can get slug value of an FAQ category from `getFaqCategories` API.
 */
/** @typedef getInjectableTags */
/**
 * @typedef getLandingPages
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 */
/** @typedef getLegalInformation */
/**
 * @typedef getNavigationBySlug
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   a navigation. You can get slug value of a navigation from `getNavigations` API.
 * @property {string} devicePlatform - Filter navigations by platform.
 *   Acceptable values are: web, android, ios, all
 */
/**
 * @typedef getNavigations
 * @property {string} devicePlatform - Filter navigations by platform.
 *   Acceptable values are: web, android, ios, all
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 */
/**
 * @typedef getPageBySlug
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   a page. You can get slug value of a page from `getPages` API.
 */
/** @typedef getPageMeta */
/** @typedef getPageSpec */
/**
 * @typedef getPages
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 */
/**
 * @typedef getPathRedirectionRule
 * @property {string} pathId - ID allotted to the path redirection rule.
 */
/**
 * @typedef getPathRedirectionRules
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 5.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 */
/** @typedef getSEOConfiguration */
/**
 * @typedef getSlideshowBySlug
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   a slideshow. You can get slug value of a page from `getSlideshows` API.
 * @property {string} devicePlatform - Filter slideshows by platform. Acceptable
 *   values are: web, android, ios and all
 */
/**
 * @typedef getSlideshows
 * @property {string} devicePlatform - Filter slideshows by platform. Acceptable
 *   values are: web, android, ios and all
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 */
/** @typedef getSupportInformation */
/**
 * @typedef removeInjectableTag
 * @property {ContentPlatformModel.RemoveHandpickedSchema} body
 */
/**
 * @typedef resetDataLoader
 * @property {string} service - Name of service.
 * @property {string} operationId - Name of operation id of the service.
 */
/**
 * @typedef selectDataLoader
 * @property {string} dataLoaderId - ID allotted to the data loader.
 */
/**
 * @typedef updateAnnouncement
 * @property {string} announcementId - ID allotted to the announcement.
 * @property {ContentPlatformModel.AdminAnnouncementSchema} body
 */
/**
 * @typedef updateAnnouncementSchedule
 * @property {string} announcementId - ID allotted to the announcement.
 * @property {ContentPlatformModel.ScheduleSchema} body
 */
/**
 * @typedef updateBlog
 * @property {string} id - ID allotted to the blog.
 * @property {ContentPlatformModel.BlogRequest} body
 */
/**
 * @typedef updateFaq
 * @property {string} categoryId - ID allotted to an FAQ category.
 * @property {string} faqId - ID allotted to an FAQ.
 * @property {ContentPlatformModel.CreateFaqSchema} body
 */
/**
 * @typedef updateFaqCategory
 * @property {string} id - ID allotted to an FAQ category.
 * @property {ContentPlatformModel.UpdateFaqCategoryRequestSchema} body
 */
/**
 * @typedef updateInjectableTag
 * @property {ContentPlatformModel.CreateTagRequestSchema} body
 */
/**
 * @typedef updateLandingPage
 * @property {string} id - ID allotted to a landing page.
 * @property {ContentPlatformModel.LandingPageSchema} body
 */
/**
 * @typedef updateLegalInformation
 * @property {ContentPlatformModel.ApplicationLegal} body
 */
/**
 * @typedef updateNavigation
 * @property {string} id - ID allotted to the navigation.
 * @property {ContentPlatformModel.NavigationRequest} body
 */
/**
 * @typedef updatePage
 * @property {string} id - ID allotted to the page.
 * @property {ContentPlatformModel.PageSchema} body
 */
/**
 * @typedef updatePagePreview
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   a page. You can get slug value of a page from `getPages` API.
 * @property {ContentPlatformModel.PagePublishRequest} body
 */
/**
 * @typedef updatePathRedirectionRules
 * @property {string} pathId - ID allotted to the path redirection rule.
 * @property {ContentPlatformModel.PathMappingSchema} body
 */
/**
 * @typedef updateSEOConfiguration
 * @property {ContentPlatformModel.SeoComponent} body
 */
/**
 * @typedef updateSlideshow
 * @property {string} id - ID allotted to the slideshow.
 * @property {ContentPlatformModel.SlideshowRequest} body
 */
/**
 * @typedef updateSupportInformation
 * @property {ContentPlatformModel.Support} body
 */
declare class ContentPlatformApplicationValidator {
}
declare namespace ContentPlatformApplicationValidator {
    export { addDataLoader, addFaq, addInjectableTag, addPathRedirectionRules, createAnnouncement, createBlog, createFaqCategory, createLandingPage, createNavigation, createPage, createPagePreview, createSlideshow, deleteAllInjectableTags, deleteAnnouncement, deleteBlog, deleteDataLoader, deleteFaq, deleteFaqCategory, deleteLandingPage, deleteNavigation, deletePage, deletePathRedirectionRules, deleteSlideshow, editDataLoader, editInjectableTag, generateSEOTitle, getAnnouncementById, getAnnouncementsList, getBlogBySlug, getBlogs, getComponentById, getDataLoaders, getDefaultNavigations, getFaqByIdOrSlug, getFaqCategories, getFaqCategoryBySlugOrId, getFaqsByCategoryIdOrSlug, getInjectableTags, getLandingPages, getLegalInformation, getNavigationBySlug, getNavigations, getPageBySlug, getPageMeta, getPageSpec, getPages, getPathRedirectionRule, getPathRedirectionRules, getSEOConfiguration, getSlideshowBySlug, getSlideshows, getSupportInformation, removeInjectableTag, resetDataLoader, selectDataLoader, updateAnnouncement, updateAnnouncementSchedule, updateBlog, updateFaq, updateFaqCategory, updateInjectableTag, updateLandingPage, updateLegalInformation, updateNavigation, updatePage, updatePagePreview, updatePathRedirectionRules, updateSEOConfiguration, updateSlideshow, updateSupportInformation };
}
/** @returns {addDataLoader} */
declare function addDataLoader(): addDataLoader;
type addDataLoader = {
    body: ContentPlatformModel.DataLoaderSchema;
};
/** @returns {addFaq} */
declare function addFaq(): addFaq;
type addFaq = {
    /**
     * - ID allotted to an FAQ category.
     */
    categoryId: string;
    body: ContentPlatformModel.CreateFaqSchema;
};
/** @returns {addInjectableTag} */
declare function addInjectableTag(): addInjectableTag;
type addInjectableTag = {
    body: ContentPlatformModel.CreateTagRequestSchema;
};
/** @returns {addPathRedirectionRules} */
declare function addPathRedirectionRules(): addPathRedirectionRules;
type addPathRedirectionRules = {
    body: ContentPlatformModel.PathMappingSchema;
};
/** @returns {createAnnouncement} */
declare function createAnnouncement(): createAnnouncement;
type createAnnouncement = {
    body: ContentPlatformModel.AdminAnnouncementSchema;
};
/** @returns {createBlog} */
declare function createBlog(): createBlog;
type createBlog = {
    body: ContentPlatformModel.BlogRequest;
};
/** @returns {createFaqCategory} */
declare function createFaqCategory(): createFaqCategory;
type createFaqCategory = {
    body: ContentPlatformModel.CreateFaqCategoryRequestSchema;
};
/** @returns {createLandingPage} */
declare function createLandingPage(): createLandingPage;
type createLandingPage = {
    body: ContentPlatformModel.LandingPageSchema;
};
/** @returns {createNavigation} */
declare function createNavigation(): createNavigation;
type createNavigation = {
    body: ContentPlatformModel.NavigationRequest;
};
/** @returns {createPage} */
declare function createPage(): createPage;
type createPage = {
    body: ContentPlatformModel.PageRequest;
};
/** @returns {createPagePreview} */
declare function createPagePreview(): createPagePreview;
type createPagePreview = {
    body: ContentPlatformModel.PageRequest;
};
/** @returns {createSlideshow} */
declare function createSlideshow(): createSlideshow;
type createSlideshow = {
    body: ContentPlatformModel.SlideshowRequest;
};
/** @returns {deleteAllInjectableTags} */
declare function deleteAllInjectableTags(): any;
type deleteAllInjectableTags = any;
/** @returns {deleteAnnouncement} */
declare function deleteAnnouncement(): deleteAnnouncement;
type deleteAnnouncement = {
    /**
     * - ID allotted to the announcement.
     */
    announcementId: string;
};
/** @returns {deleteBlog} */
declare function deleteBlog(): deleteBlog;
type deleteBlog = {
    /**
     * - ID allotted to the blog.
     */
    id: string;
};
/** @returns {deleteDataLoader} */
declare function deleteDataLoader(): deleteDataLoader;
type deleteDataLoader = {
    /**
     * - ID allotted to the data loader.
     */
    dataLoaderId: string;
};
/** @returns {deleteFaq} */
declare function deleteFaq(): deleteFaq;
type deleteFaq = {
    /**
     * - ID allotted to an FAQ category.
     */
    categoryId: string;
    /**
     * - ID allotted to an FAQ.
     */
    faqId: string;
};
/** @returns {deleteFaqCategory} */
declare function deleteFaqCategory(): deleteFaqCategory;
type deleteFaqCategory = {
    /**
     * - ID allotted to an FAQ category.
     */
    id: string;
};
/** @returns {deleteLandingPage} */
declare function deleteLandingPage(): deleteLandingPage;
type deleteLandingPage = {
    /**
     * - ID allotted to a landing page.
     */
    id: string;
};
/** @returns {deleteNavigation} */
declare function deleteNavigation(): deleteNavigation;
type deleteNavigation = {
    /**
     * - ID allotted to the navigation.
     */
    id: string;
};
/** @returns {deletePage} */
declare function deletePage(): deletePage;
type deletePage = {
    /**
     * - ID allotted to the page.
     */
    id: string;
};
/** @returns {deletePathRedirectionRules} */
declare function deletePathRedirectionRules(): deletePathRedirectionRules;
type deletePathRedirectionRules = {
    /**
     * - ID allotted to the path redirection rule.
     */
    pathId: string;
};
/** @returns {deleteSlideshow} */
declare function deleteSlideshow(): deleteSlideshow;
type deleteSlideshow = {
    /**
     * - ID allotted to the slideshow.
     */
    id: string;
};
/** @returns {editDataLoader} */
declare function editDataLoader(): editDataLoader;
type editDataLoader = {
    /**
     * - ID allotted to the data loader.
     */
    dataLoaderId: string;
    body: ContentPlatformModel.DataLoaderSchema;
};
/** @returns {editInjectableTag} */
declare function editInjectableTag(): editInjectableTag;
type editInjectableTag = {
    /**
     * - ID allotted to the tag.
     */
    tagId: string;
    body: ContentPlatformModel.UpdateHandpickedSchema;
};
/** @returns {generateSEOTitle} */
declare function generateSEOTitle(): generateSEOTitle;
type generateSEOTitle = {
    /**
     * - String
     * representing the type of SEO content to be generated. Possible values are:
     * title, description
     */
    type: ContentPlatformModel.GenerationEntityType;
    body: ContentPlatformModel.GenerateSEOContent;
};
/** @returns {getAnnouncementById} */
declare function getAnnouncementById(): getAnnouncementById;
type getAnnouncementById = {
    /**
     * - ID allotted to the announcement.
     */
    announcementId: string;
};
/** @returns {getAnnouncementsList} */
declare function getAnnouncementsList(): getAnnouncementsList;
type getAnnouncementsList = {
    /**
     * - The page number to navigate through the given
     * set of results. Default value is 1.
     */
    pageNo?: number;
    /**
     * - The number of items to retrieve in each page.
     * Default value is 10.
     */
    pageSize?: number;
};
/** @returns {getBlogBySlug} */
declare function getBlogBySlug(): getBlogBySlug;
type getBlogBySlug = {
    /**
     * - A short, human-readable, URL-friendly identifier of
     * a blog page. You can get slug value of a blog from `getBlogs` API.
     */
    slug: string;
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
     * Default value is 10.
     */
    pageSize?: number;
};
/** @returns {getComponentById} */
declare function getComponentById(): getComponentById;
type getComponentById = {
    /**
     * - A short, human-readable, URL-friendly identifier of
     * a blog page. You can get slug value of a blog from `getBlogs` API.
     */
    slug: string;
};
/** @returns {getDataLoaders} */
declare function getDataLoaders(): any;
type getDataLoaders = any;
/** @returns {getDefaultNavigations} */
declare function getDefaultNavigations(): any;
type getDefaultNavigations = any;
/** @returns {getFaqByIdOrSlug} */
declare function getFaqByIdOrSlug(): getFaqByIdOrSlug;
type getFaqByIdOrSlug = {
    /**
     * - ID or the slug allotted to an FAQ category.
     * Slug is a short, human-readable, URL-friendly identifier of an object. You
     * can get slug value of an FAQ category from `getFaqCategories` API.
     */
    idOrSlug: string;
};
/** @returns {getFaqCategories} */
declare function getFaqCategories(): any;
type getFaqCategories = any;
/** @returns {getFaqCategoryBySlugOrId} */
declare function getFaqCategoryBySlugOrId(): getFaqCategoryBySlugOrId;
type getFaqCategoryBySlugOrId = {
    /**
     * - ID or the slug allotted to an FAQ category.
     * Slug is a short, human-readable, URL-friendly identifier of an object. You
     * can get slug value of an FAQ category from `getFaqCategories` API.
     */
    idOrSlug: string;
};
/** @returns {getFaqsByCategoryIdOrSlug} */
declare function getFaqsByCategoryIdOrSlug(): getFaqsByCategoryIdOrSlug;
type getFaqsByCategoryIdOrSlug = {
    /**
     * - ID or the slug allotted to an FAQ category.
     * Slug is a short, human-readable, URL-friendly identifier of an object. You
     * can get slug value of an FAQ category from `getFaqCategories` API.
     */
    idOrSlug: string;
};
/** @returns {getInjectableTags} */
declare function getInjectableTags(): any;
type getInjectableTags = any;
/** @returns {getLandingPages} */
declare function getLandingPages(): getLandingPages;
type getLandingPages = {
    /**
     * - The page number to navigate through the given
     * set of results. Default value is 1.
     */
    pageNo?: number;
    /**
     * - The number of items to retrieve in each page.
     * Default value is 10.
     */
    pageSize?: number;
};
/** @returns {getLegalInformation} */
declare function getLegalInformation(): any;
type getLegalInformation = any;
/** @returns {getNavigationBySlug} */
declare function getNavigationBySlug(): getNavigationBySlug;
type getNavigationBySlug = {
    /**
     * - A short, human-readable, URL-friendly identifier of
     * a navigation. You can get slug value of a navigation from `getNavigations` API.
     */
    slug: string;
    /**
     * - Filter navigations by platform.
     * Acceptable values are: web, android, ios, all
     */
    devicePlatform: string;
};
/** @returns {getNavigations} */
declare function getNavigations(): getNavigations;
type getNavigations = {
    /**
     * - Filter navigations by platform.
     * Acceptable values are: web, android, ios, all
     */
    devicePlatform: string;
    /**
     * - The page number to navigate through the given
     * set of results. Default value is 1.
     */
    pageNo?: number;
    /**
     * - The number of items to retrieve in each page.
     * Default value is 10.
     */
    pageSize?: number;
};
/** @returns {getPageBySlug} */
declare function getPageBySlug(): getPageBySlug;
type getPageBySlug = {
    /**
     * - A short, human-readable, URL-friendly identifier of
     * a page. You can get slug value of a page from `getPages` API.
     */
    slug: string;
};
/** @returns {getPageMeta} */
declare function getPageMeta(): any;
type getPageMeta = any;
/** @returns {getPageSpec} */
declare function getPageSpec(): any;
type getPageSpec = any;
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
     * Default value is 10.
     */
    pageSize?: number;
};
/** @returns {getPathRedirectionRule} */
declare function getPathRedirectionRule(): getPathRedirectionRule;
type getPathRedirectionRule = {
    /**
     * - ID allotted to the path redirection rule.
     */
    pathId: string;
};
/** @returns {getPathRedirectionRules} */
declare function getPathRedirectionRules(): getPathRedirectionRules;
type getPathRedirectionRules = {
    /**
     * - The number of items to retrieve in each page.
     * Default value is 5.
     */
    pageSize?: number;
    /**
     * - The page number to navigate through the given
     * set of results. Default value is 1.
     */
    pageNo?: number;
};
/** @returns {getSEOConfiguration} */
declare function getSEOConfiguration(): any;
type getSEOConfiguration = any;
/** @returns {getSlideshowBySlug} */
declare function getSlideshowBySlug(): getSlideshowBySlug;
type getSlideshowBySlug = {
    /**
     * - A short, human-readable, URL-friendly identifier of
     * a slideshow. You can get slug value of a page from `getSlideshows` API.
     */
    slug: string;
    /**
     * - Filter slideshows by platform. Acceptable
     * values are: web, android, ios and all
     */
    devicePlatform: string;
};
/** @returns {getSlideshows} */
declare function getSlideshows(): getSlideshows;
type getSlideshows = {
    /**
     * - Filter slideshows by platform. Acceptable
     * values are: web, android, ios and all
     */
    devicePlatform: string;
    /**
     * - The page number to navigate through the given
     * set of results. Default value is 1.
     */
    pageNo?: number;
    /**
     * - The number of items to retrieve in each page.
     * Default value is 10.
     */
    pageSize?: number;
};
/** @returns {getSupportInformation} */
declare function getSupportInformation(): any;
type getSupportInformation = any;
/** @returns {removeInjectableTag} */
declare function removeInjectableTag(): removeInjectableTag;
type removeInjectableTag = {
    body: ContentPlatformModel.RemoveHandpickedSchema;
};
/** @returns {resetDataLoader} */
declare function resetDataLoader(): resetDataLoader;
type resetDataLoader = {
    /**
     * - Name of service.
     */
    service: string;
    /**
     * - Name of operation id of the service.
     */
    operationId: string;
};
/** @returns {selectDataLoader} */
declare function selectDataLoader(): selectDataLoader;
type selectDataLoader = {
    /**
     * - ID allotted to the data loader.
     */
    dataLoaderId: string;
};
/** @returns {updateAnnouncement} */
declare function updateAnnouncement(): updateAnnouncement;
type updateAnnouncement = {
    /**
     * - ID allotted to the announcement.
     */
    announcementId: string;
    body: ContentPlatformModel.AdminAnnouncementSchema;
};
/** @returns {updateAnnouncementSchedule} */
declare function updateAnnouncementSchedule(): updateAnnouncementSchedule;
type updateAnnouncementSchedule = {
    /**
     * - ID allotted to the announcement.
     */
    announcementId: string;
    body: ContentPlatformModel.ScheduleSchema;
};
/** @returns {updateBlog} */
declare function updateBlog(): updateBlog;
type updateBlog = {
    /**
     * - ID allotted to the blog.
     */
    id: string;
    body: ContentPlatformModel.BlogRequest;
};
/** @returns {updateFaq} */
declare function updateFaq(): updateFaq;
type updateFaq = {
    /**
     * - ID allotted to an FAQ category.
     */
    categoryId: string;
    /**
     * - ID allotted to an FAQ.
     */
    faqId: string;
    body: ContentPlatformModel.CreateFaqSchema;
};
/** @returns {updateFaqCategory} */
declare function updateFaqCategory(): updateFaqCategory;
type updateFaqCategory = {
    /**
     * - ID allotted to an FAQ category.
     */
    id: string;
    body: ContentPlatformModel.UpdateFaqCategoryRequestSchema;
};
/** @returns {updateInjectableTag} */
declare function updateInjectableTag(): updateInjectableTag;
type updateInjectableTag = {
    body: ContentPlatformModel.CreateTagRequestSchema;
};
/** @returns {updateLandingPage} */
declare function updateLandingPage(): updateLandingPage;
type updateLandingPage = {
    /**
     * - ID allotted to a landing page.
     */
    id: string;
    body: ContentPlatformModel.LandingPageSchema;
};
/** @returns {updateLegalInformation} */
declare function updateLegalInformation(): updateLegalInformation;
type updateLegalInformation = {
    body: ContentPlatformModel.ApplicationLegal;
};
/** @returns {updateNavigation} */
declare function updateNavigation(): updateNavigation;
type updateNavigation = {
    /**
     * - ID allotted to the navigation.
     */
    id: string;
    body: ContentPlatformModel.NavigationRequest;
};
/** @returns {updatePage} */
declare function updatePage(): updatePage;
type updatePage = {
    /**
     * - ID allotted to the page.
     */
    id: string;
    body: ContentPlatformModel.PageSchema;
};
/** @returns {updatePagePreview} */
declare function updatePagePreview(): updatePagePreview;
type updatePagePreview = {
    /**
     * - A short, human-readable, URL-friendly identifier of
     * a page. You can get slug value of a page from `getPages` API.
     */
    slug: string;
    body: ContentPlatformModel.PagePublishRequest;
};
/** @returns {updatePathRedirectionRules} */
declare function updatePathRedirectionRules(): updatePathRedirectionRules;
type updatePathRedirectionRules = {
    /**
     * - ID allotted to the path redirection rule.
     */
    pathId: string;
    body: ContentPlatformModel.PathMappingSchema;
};
/** @returns {updateSEOConfiguration} */
declare function updateSEOConfiguration(): updateSEOConfiguration;
type updateSEOConfiguration = {
    body: ContentPlatformModel.SeoComponent;
};
/** @returns {updateSlideshow} */
declare function updateSlideshow(): updateSlideshow;
type updateSlideshow = {
    /**
     * - ID allotted to the slideshow.
     */
    id: string;
    body: ContentPlatformModel.SlideshowRequest;
};
/** @returns {updateSupportInformation} */
declare function updateSupportInformation(): updateSupportInformation;
type updateSupportInformation = {
    body: ContentPlatformModel.Support;
};
import ContentPlatformModel = require("./ContentPlatformModel");
