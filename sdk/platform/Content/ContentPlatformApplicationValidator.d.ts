export = ContentPlatformApplicationValidator;
/**
 * @typedef AddDataLoaderParam
 * @property {ContentPlatformModel.DataLoaderSchema} body
 */
/**
 * @typedef AddFaqParam
 * @property {string} categoryId - ID allotted to an FAQ category.
 * @property {ContentPlatformModel.CreateFaqSchema} body
 */
/**
 * @typedef AddInjectableTagParam
 * @property {ContentPlatformModel.CreateTagRequestSchema} body
 */
/**
 * @typedef AddPathRedirectionRulesParam
 * @property {ContentPlatformModel.PathMappingSchema} body
 */
/**
 * @typedef CreateAnnouncementParam
 * @property {ContentPlatformModel.AdminAnnouncementSchema} body
 */
/**
 * @typedef CreateBlogParam
 * @property {ContentPlatformModel.BlogRequest} body
 */
/**
 * @typedef CreateFaqCategoryParam
 * @property {ContentPlatformModel.CreateFaqCategoryRequestSchema} body
 */
/**
 * @typedef CreateLandingPageParam
 * @property {ContentPlatformModel.LandingPageSchema} body
 */
/**
 * @typedef CreateNavigationParam
 * @property {ContentPlatformModel.NavigationRequest} body
 */
/**
 * @typedef CreatePageParam
 * @property {ContentPlatformModel.PageRequest} body
 */
/**
 * @typedef CreatePagePreviewParam
 * @property {ContentPlatformModel.PageRequest} body
 */
/**
 * @typedef CreateSlideshowParam
 * @property {ContentPlatformModel.SlideshowRequest} body
 */
/** @typedef DeleteAllInjectableTagsParam */
/**
 * @typedef DeleteAnnouncementParam
 * @property {string} announcementId - ID allotted to the announcement.
 */
/**
 * @typedef DeleteBlogParam
 * @property {string} id - ID allotted to the blog.
 */
/**
 * @typedef DeleteDataLoaderParam
 * @property {string} dataLoaderId - ID allotted to the data loader.
 */
/**
 * @typedef DeleteFaqParam
 * @property {string} categoryId - ID allotted to an FAQ category.
 * @property {string} faqId - ID allotted to an FAQ.
 */
/**
 * @typedef DeleteFaqCategoryParam
 * @property {string} id - ID allotted to an FAQ category.
 */
/**
 * @typedef DeleteLandingPageParam
 * @property {string} id - ID allotted to a landing page.
 */
/**
 * @typedef DeleteNavigationParam
 * @property {string} id - ID allotted to the navigation.
 */
/**
 * @typedef DeletePageParam
 * @property {string} id - ID allotted to the page.
 */
/**
 * @typedef DeletePathRedirectionRulesParam
 * @property {string} pathId - ID allotted to the path redirection rule.
 */
/**
 * @typedef DeleteSlideshowParam
 * @property {string} id - ID allotted to the slideshow.
 */
/**
 * @typedef EditDataLoaderParam
 * @property {string} dataLoaderId - ID allotted to the data loader.
 * @property {ContentPlatformModel.DataLoaderSchema} body
 */
/**
 * @typedef EditInjectableTagParam
 * @property {string} tagId - ID allotted to the tag.
 * @property {ContentPlatformModel.UpdateHandpickedSchema} body
 */
/**
 * @typedef GenerateSEOTitleParam
 * @property {ContentPlatformModel.GenerationEntityType} type - String
 *   representing the type of SEO content to be generated. Possible values are:
 *   title, description
 * @property {ContentPlatformModel.GenerateSEOContent} body
 */
/**
 * @typedef GetAnnouncementByIdParam
 * @property {string} announcementId - ID allotted to the announcement.
 */
/**
 * @typedef GetAnnouncementsListParam
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 */
/**
 * @typedef GetBlogBySlugParam
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   a blog page. You can get slug value of a blog from `getBlogs` API.
 */
/**
 * @typedef GetBlogsParam
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 */
/**
 * @typedef GetComponentByIdParam
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   a blog page. You can get slug value of a blog from `getBlogs` API.
 */
/** @typedef GetDataLoadersParam */
/** @typedef GetDefaultNavigationsParam */
/**
 * @typedef GetFaqByIdOrSlugParam
 * @property {string} idOrSlug - ID or the slug allotted to an FAQ category.
 *   Slug is a short, human-readable, URL-friendly identifier of an object. You
 *   can get slug value of an FAQ category from `getFaqCategories` API.
 */
/** @typedef GetFaqCategoriesParam */
/**
 * @typedef GetFaqCategoryBySlugOrIdParam
 * @property {string} idOrSlug - ID or the slug allotted to an FAQ category.
 *   Slug is a short, human-readable, URL-friendly identifier of an object. You
 *   can get slug value of an FAQ category from `getFaqCategories` API.
 */
/**
 * @typedef GetFaqsByCategoryIdOrSlugParam
 * @property {string} idOrSlug - ID or the slug allotted to an FAQ category.
 *   Slug is a short, human-readable, URL-friendly identifier of an object. You
 *   can get slug value of an FAQ category from `getFaqCategories` API.
 */
/** @typedef GetInjectableTagsParam */
/**
 * @typedef GetLandingPagesParam
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 */
/** @typedef GetLegalInformationParam */
/**
 * @typedef GetNavigationBySlugParam
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   a navigation. You can get slug value of a navigation from `getNavigations` API.
 * @property {string} devicePlatform - Filter navigations by platform.
 *   Acceptable values are: web, android, ios, all
 */
/**
 * @typedef GetNavigationsParam
 * @property {string} devicePlatform - Filter navigations by platform.
 *   Acceptable values are: web, android, ios, all
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 */
/**
 * @typedef GetPageBySlugParam
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   a page. You can get slug value of a page from `getPages` API.
 */
/** @typedef GetPageMetaParam */
/** @typedef GetPageSpecParam */
/**
 * @typedef GetPagesParam
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 */
/**
 * @typedef GetPathRedirectionRuleParam
 * @property {string} pathId - ID allotted to the path redirection rule.
 */
/**
 * @typedef GetPathRedirectionRulesParam
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 5.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 */
/** @typedef GetSEOConfigurationParam */
/**
 * @typedef GetSlideshowBySlugParam
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   a slideshow. You can get slug value of a page from `getSlideshows` API.
 * @property {string} devicePlatform - Filter slideshows by platform. Acceptable
 *   values are: web, android, ios and all
 */
/**
 * @typedef GetSlideshowsParam
 * @property {string} devicePlatform - Filter slideshows by platform. Acceptable
 *   values are: web, android, ios and all
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 */
/** @typedef GetSupportInformationParam */
/**
 * @typedef RemoveInjectableTagParam
 * @property {ContentPlatformModel.RemoveHandpickedSchema} body
 */
/**
 * @typedef ResetDataLoaderParam
 * @property {string} service - Name of service.
 * @property {string} operationId - Name of operation id of the service.
 */
/**
 * @typedef SelectDataLoaderParam
 * @property {string} dataLoaderId - ID allotted to the data loader.
 */
/**
 * @typedef UpdateAnnouncementParam
 * @property {string} announcementId - ID allotted to the announcement.
 * @property {ContentPlatformModel.AdminAnnouncementSchema} body
 */
/**
 * @typedef UpdateAnnouncementScheduleParam
 * @property {string} announcementId - ID allotted to the announcement.
 * @property {ContentPlatformModel.ScheduleSchema} body
 */
/**
 * @typedef UpdateBlogParam
 * @property {string} id - ID allotted to the blog.
 * @property {ContentPlatformModel.BlogRequest} body
 */
/**
 * @typedef UpdateFaqParam
 * @property {string} categoryId - ID allotted to an FAQ category.
 * @property {string} faqId - ID allotted to an FAQ.
 * @property {ContentPlatformModel.CreateFaqSchema} body
 */
/**
 * @typedef UpdateFaqCategoryParam
 * @property {string} id - ID allotted to an FAQ category.
 * @property {ContentPlatformModel.UpdateFaqCategoryRequestSchema} body
 */
/**
 * @typedef UpdateInjectableTagParam
 * @property {ContentPlatformModel.CreateTagRequestSchema} body
 */
/**
 * @typedef UpdateLandingPageParam
 * @property {string} id - ID allotted to a landing page.
 * @property {ContentPlatformModel.LandingPageSchema} body
 */
/**
 * @typedef UpdateLegalInformationParam
 * @property {ContentPlatformModel.ApplicationLegal} body
 */
/**
 * @typedef UpdateNavigationParam
 * @property {string} id - ID allotted to the navigation.
 * @property {ContentPlatformModel.NavigationRequest} body
 */
/**
 * @typedef UpdatePageParam
 * @property {string} id - ID allotted to the page.
 * @property {ContentPlatformModel.PageSchema} body
 */
/**
 * @typedef UpdatePagePreviewParam
 * @property {string} slug - A short, human-readable, URL-friendly identifier of
 *   a page. You can get slug value of a page from `getPages` API.
 * @property {ContentPlatformModel.PagePublishRequest} body
 */
/**
 * @typedef UpdatePathRedirectionRulesParam
 * @property {string} pathId - ID allotted to the path redirection rule.
 * @property {ContentPlatformModel.PathMappingSchema} body
 */
/**
 * @typedef UpdateSEOConfigurationParam
 * @property {ContentPlatformModel.SeoComponent} body
 */
/**
 * @typedef UpdateSlideshowParam
 * @property {string} id - ID allotted to the slideshow.
 * @property {ContentPlatformModel.SlideshowRequest} body
 */
/**
 * @typedef UpdateSupportInformationParam
 * @property {ContentPlatformModel.Support} body
 */
declare class ContentPlatformApplicationValidator {
    /** @returns {addDataLoader} */
    static addDataLoader(): addDataLoader;
    /** @returns {addFaq} */
    static addFaq(): addFaq;
    /** @returns {addInjectableTag} */
    static addInjectableTag(): addInjectableTag;
    /** @returns {addPathRedirectionRules} */
    static addPathRedirectionRules(): addPathRedirectionRules;
    /** @returns {createAnnouncement} */
    static createAnnouncement(): createAnnouncement;
    /** @returns {createBlog} */
    static createBlog(): createBlog;
    /** @returns {createFaqCategory} */
    static createFaqCategory(): createFaqCategory;
    /** @returns {createLandingPage} */
    static createLandingPage(): createLandingPage;
    /** @returns {createNavigation} */
    static createNavigation(): createNavigation;
    /** @returns {createPage} */
    static createPage(): createPage;
    /** @returns {createPagePreview} */
    static createPagePreview(): createPagePreview;
    /** @returns {createSlideshow} */
    static createSlideshow(): createSlideshow;
    /** @returns {deleteAllInjectableTags} */
    static deleteAllInjectableTags(): deleteAllInjectableTags;
    /** @returns {deleteAnnouncement} */
    static deleteAnnouncement(): deleteAnnouncement;
    /** @returns {deleteBlog} */
    static deleteBlog(): deleteBlog;
    /** @returns {deleteDataLoader} */
    static deleteDataLoader(): deleteDataLoader;
    /** @returns {deleteFaq} */
    static deleteFaq(): deleteFaq;
    /** @returns {deleteFaqCategory} */
    static deleteFaqCategory(): deleteFaqCategory;
    /** @returns {deleteLandingPage} */
    static deleteLandingPage(): deleteLandingPage;
    /** @returns {deleteNavigation} */
    static deleteNavigation(): deleteNavigation;
    /** @returns {deletePage} */
    static deletePage(): deletePage;
    /** @returns {deletePathRedirectionRules} */
    static deletePathRedirectionRules(): deletePathRedirectionRules;
    /** @returns {deleteSlideshow} */
    static deleteSlideshow(): deleteSlideshow;
    /** @returns {editDataLoader} */
    static editDataLoader(): editDataLoader;
    /** @returns {editInjectableTag} */
    static editInjectableTag(): editInjectableTag;
    /** @returns {generateSEOTitle} */
    static generateSEOTitle(): generateSEOTitle;
    /** @returns {getAnnouncementById} */
    static getAnnouncementById(): getAnnouncementById;
    /** @returns {getAnnouncementsList} */
    static getAnnouncementsList(): getAnnouncementsList;
    /** @returns {getBlogBySlug} */
    static getBlogBySlug(): getBlogBySlug;
    /** @returns {getBlogs} */
    static getBlogs(): getBlogs;
    /** @returns {getComponentById} */
    static getComponentById(): getComponentById;
    /** @returns {getDataLoaders} */
    static getDataLoaders(): getDataLoaders;
    /** @returns {getDefaultNavigations} */
    static getDefaultNavigations(): getDefaultNavigations;
    /** @returns {getFaqByIdOrSlug} */
    static getFaqByIdOrSlug(): getFaqByIdOrSlug;
    /** @returns {getFaqCategories} */
    static getFaqCategories(): getFaqCategories;
    /** @returns {getFaqCategoryBySlugOrId} */
    static getFaqCategoryBySlugOrId(): getFaqCategoryBySlugOrId;
    /** @returns {getFaqsByCategoryIdOrSlug} */
    static getFaqsByCategoryIdOrSlug(): getFaqsByCategoryIdOrSlug;
    /** @returns {getInjectableTags} */
    static getInjectableTags(): getInjectableTags;
    /** @returns {getLandingPages} */
    static getLandingPages(): getLandingPages;
    /** @returns {getLegalInformation} */
    static getLegalInformation(): getLegalInformation;
    /** @returns {getNavigationBySlug} */
    static getNavigationBySlug(): getNavigationBySlug;
    /** @returns {getNavigations} */
    static getNavigations(): getNavigations;
    /** @returns {getPageBySlug} */
    static getPageBySlug(): getPageBySlug;
    /** @returns {getPageMeta} */
    static getPageMeta(): getPageMeta;
    /** @returns {getPageSpec} */
    static getPageSpec(): getPageSpec;
    /** @returns {getPages} */
    static getPages(): getPages;
    /** @returns {getPathRedirectionRule} */
    static getPathRedirectionRule(): getPathRedirectionRule;
    /** @returns {getPathRedirectionRules} */
    static getPathRedirectionRules(): getPathRedirectionRules;
    /** @returns {getSEOConfiguration} */
    static getSEOConfiguration(): getSEOConfiguration;
    /** @returns {getSlideshowBySlug} */
    static getSlideshowBySlug(): getSlideshowBySlug;
    /** @returns {getSlideshows} */
    static getSlideshows(): getSlideshows;
    /** @returns {getSupportInformation} */
    static getSupportInformation(): getSupportInformation;
    /** @returns {removeInjectableTag} */
    static removeInjectableTag(): removeInjectableTag;
    /** @returns {resetDataLoader} */
    static resetDataLoader(): resetDataLoader;
    /** @returns {selectDataLoader} */
    static selectDataLoader(): selectDataLoader;
    /** @returns {updateAnnouncement} */
    static updateAnnouncement(): updateAnnouncement;
    /** @returns {updateAnnouncementSchedule} */
    static updateAnnouncementSchedule(): updateAnnouncementSchedule;
    /** @returns {updateBlog} */
    static updateBlog(): updateBlog;
    /** @returns {updateFaq} */
    static updateFaq(): updateFaq;
    /** @returns {updateFaqCategory} */
    static updateFaqCategory(): updateFaqCategory;
    /** @returns {updateInjectableTag} */
    static updateInjectableTag(): updateInjectableTag;
    /** @returns {updateLandingPage} */
    static updateLandingPage(): updateLandingPage;
    /** @returns {updateLegalInformation} */
    static updateLegalInformation(): updateLegalInformation;
    /** @returns {updateNavigation} */
    static updateNavigation(): updateNavigation;
    /** @returns {updatePage} */
    static updatePage(): updatePage;
    /** @returns {updatePagePreview} */
    static updatePagePreview(): updatePagePreview;
    /** @returns {updatePathRedirectionRules} */
    static updatePathRedirectionRules(): updatePathRedirectionRules;
    /** @returns {updateSEOConfiguration} */
    static updateSEOConfiguration(): updateSEOConfiguration;
    /** @returns {updateSlideshow} */
    static updateSlideshow(): updateSlideshow;
    /** @returns {updateSupportInformation} */
    static updateSupportInformation(): updateSupportInformation;
}
declare namespace ContentPlatformApplicationValidator {
    export { AddDataLoaderParam, AddFaqParam, AddInjectableTagParam, AddPathRedirectionRulesParam, CreateAnnouncementParam, CreateBlogParam, CreateFaqCategoryParam, CreateLandingPageParam, CreateNavigationParam, CreatePageParam, CreatePagePreviewParam, CreateSlideshowParam, DeleteAllInjectableTagsParam, DeleteAnnouncementParam, DeleteBlogParam, DeleteDataLoaderParam, DeleteFaqParam, DeleteFaqCategoryParam, DeleteLandingPageParam, DeleteNavigationParam, DeletePageParam, DeletePathRedirectionRulesParam, DeleteSlideshowParam, EditDataLoaderParam, EditInjectableTagParam, GenerateSEOTitleParam, GetAnnouncementByIdParam, GetAnnouncementsListParam, GetBlogBySlugParam, GetBlogsParam, GetComponentByIdParam, GetDataLoadersParam, GetDefaultNavigationsParam, GetFaqByIdOrSlugParam, GetFaqCategoriesParam, GetFaqCategoryBySlugOrIdParam, GetFaqsByCategoryIdOrSlugParam, GetInjectableTagsParam, GetLandingPagesParam, GetLegalInformationParam, GetNavigationBySlugParam, GetNavigationsParam, GetPageBySlugParam, GetPageMetaParam, GetPageSpecParam, GetPagesParam, GetPathRedirectionRuleParam, GetPathRedirectionRulesParam, GetSEOConfigurationParam, GetSlideshowBySlugParam, GetSlideshowsParam, GetSupportInformationParam, RemoveInjectableTagParam, ResetDataLoaderParam, SelectDataLoaderParam, UpdateAnnouncementParam, UpdateAnnouncementScheduleParam, UpdateBlogParam, UpdateFaqParam, UpdateFaqCategoryParam, UpdateInjectableTagParam, UpdateLandingPageParam, UpdateLegalInformationParam, UpdateNavigationParam, UpdatePageParam, UpdatePagePreviewParam, UpdatePathRedirectionRulesParam, UpdateSEOConfigurationParam, UpdateSlideshowParam, UpdateSupportInformationParam };
}
type AddDataLoaderParam = {
    body: ContentPlatformModel.DataLoaderSchema;
};
type AddFaqParam = {
    /**
     * - ID allotted to an FAQ category.
     */
    categoryId: string;
    body: ContentPlatformModel.CreateFaqSchema;
};
type AddInjectableTagParam = {
    body: ContentPlatformModel.CreateTagRequestSchema;
};
type AddPathRedirectionRulesParam = {
    body: ContentPlatformModel.PathMappingSchema;
};
type CreateAnnouncementParam = {
    body: ContentPlatformModel.AdminAnnouncementSchema;
};
type CreateBlogParam = {
    body: ContentPlatformModel.BlogRequest;
};
type CreateFaqCategoryParam = {
    body: ContentPlatformModel.CreateFaqCategoryRequestSchema;
};
type CreateLandingPageParam = {
    body: ContentPlatformModel.LandingPageSchema;
};
type CreateNavigationParam = {
    body: ContentPlatformModel.NavigationRequest;
};
type CreatePageParam = {
    body: ContentPlatformModel.PageRequest;
};
type CreatePagePreviewParam = {
    body: ContentPlatformModel.PageRequest;
};
type CreateSlideshowParam = {
    body: ContentPlatformModel.SlideshowRequest;
};
type DeleteAllInjectableTagsParam = any;
type DeleteAnnouncementParam = {
    /**
     * - ID allotted to the announcement.
     */
    announcementId: string;
};
type DeleteBlogParam = {
    /**
     * - ID allotted to the blog.
     */
    id: string;
};
type DeleteDataLoaderParam = {
    /**
     * - ID allotted to the data loader.
     */
    dataLoaderId: string;
};
type DeleteFaqParam = {
    /**
     * - ID allotted to an FAQ category.
     */
    categoryId: string;
    /**
     * - ID allotted to an FAQ.
     */
    faqId: string;
};
type DeleteFaqCategoryParam = {
    /**
     * - ID allotted to an FAQ category.
     */
    id: string;
};
type DeleteLandingPageParam = {
    /**
     * - ID allotted to a landing page.
     */
    id: string;
};
type DeleteNavigationParam = {
    /**
     * - ID allotted to the navigation.
     */
    id: string;
};
type DeletePageParam = {
    /**
     * - ID allotted to the page.
     */
    id: string;
};
type DeletePathRedirectionRulesParam = {
    /**
     * - ID allotted to the path redirection rule.
     */
    pathId: string;
};
type DeleteSlideshowParam = {
    /**
     * - ID allotted to the slideshow.
     */
    id: string;
};
type EditDataLoaderParam = {
    /**
     * - ID allotted to the data loader.
     */
    dataLoaderId: string;
    body: ContentPlatformModel.DataLoaderSchema;
};
type EditInjectableTagParam = {
    /**
     * - ID allotted to the tag.
     */
    tagId: string;
    body: ContentPlatformModel.UpdateHandpickedSchema;
};
type GenerateSEOTitleParam = {
    /**
     * - String
     * representing the type of SEO content to be generated. Possible values are:
     * title, description
     */
    type: ContentPlatformModel.GenerationEntityType;
    body: ContentPlatformModel.GenerateSEOContent;
};
type GetAnnouncementByIdParam = {
    /**
     * - ID allotted to the announcement.
     */
    announcementId: string;
};
type GetAnnouncementsListParam = {
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
type GetBlogBySlugParam = {
    /**
     * - A short, human-readable, URL-friendly identifier of
     * a blog page. You can get slug value of a blog from `getBlogs` API.
     */
    slug: string;
};
type GetBlogsParam = {
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
type GetComponentByIdParam = {
    /**
     * - A short, human-readable, URL-friendly identifier of
     * a blog page. You can get slug value of a blog from `getBlogs` API.
     */
    slug: string;
};
type GetDataLoadersParam = any;
type GetDefaultNavigationsParam = any;
type GetFaqByIdOrSlugParam = {
    /**
     * - ID or the slug allotted to an FAQ category.
     * Slug is a short, human-readable, URL-friendly identifier of an object. You
     * can get slug value of an FAQ category from `getFaqCategories` API.
     */
    idOrSlug: string;
};
type GetFaqCategoriesParam = any;
type GetFaqCategoryBySlugOrIdParam = {
    /**
     * - ID or the slug allotted to an FAQ category.
     * Slug is a short, human-readable, URL-friendly identifier of an object. You
     * can get slug value of an FAQ category from `getFaqCategories` API.
     */
    idOrSlug: string;
};
type GetFaqsByCategoryIdOrSlugParam = {
    /**
     * - ID or the slug allotted to an FAQ category.
     * Slug is a short, human-readable, URL-friendly identifier of an object. You
     * can get slug value of an FAQ category from `getFaqCategories` API.
     */
    idOrSlug: string;
};
type GetInjectableTagsParam = any;
type GetLandingPagesParam = {
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
type GetLegalInformationParam = any;
type GetNavigationBySlugParam = {
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
type GetNavigationsParam = {
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
type GetPageBySlugParam = {
    /**
     * - A short, human-readable, URL-friendly identifier of
     * a page. You can get slug value of a page from `getPages` API.
     */
    slug: string;
};
type GetPageMetaParam = any;
type GetPageSpecParam = any;
type GetPagesParam = {
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
type GetPathRedirectionRuleParam = {
    /**
     * - ID allotted to the path redirection rule.
     */
    pathId: string;
};
type GetPathRedirectionRulesParam = {
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
type GetSEOConfigurationParam = any;
type GetSlideshowBySlugParam = {
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
type GetSlideshowsParam = {
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
type GetSupportInformationParam = any;
type RemoveInjectableTagParam = {
    body: ContentPlatformModel.RemoveHandpickedSchema;
};
type ResetDataLoaderParam = {
    /**
     * - Name of service.
     */
    service: string;
    /**
     * - Name of operation id of the service.
     */
    operationId: string;
};
type SelectDataLoaderParam = {
    /**
     * - ID allotted to the data loader.
     */
    dataLoaderId: string;
};
type UpdateAnnouncementParam = {
    /**
     * - ID allotted to the announcement.
     */
    announcementId: string;
    body: ContentPlatformModel.AdminAnnouncementSchema;
};
type UpdateAnnouncementScheduleParam = {
    /**
     * - ID allotted to the announcement.
     */
    announcementId: string;
    body: ContentPlatformModel.ScheduleSchema;
};
type UpdateBlogParam = {
    /**
     * - ID allotted to the blog.
     */
    id: string;
    body: ContentPlatformModel.BlogRequest;
};
type UpdateFaqParam = {
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
type UpdateFaqCategoryParam = {
    /**
     * - ID allotted to an FAQ category.
     */
    id: string;
    body: ContentPlatformModel.UpdateFaqCategoryRequestSchema;
};
type UpdateInjectableTagParam = {
    body: ContentPlatformModel.CreateTagRequestSchema;
};
type UpdateLandingPageParam = {
    /**
     * - ID allotted to a landing page.
     */
    id: string;
    body: ContentPlatformModel.LandingPageSchema;
};
type UpdateLegalInformationParam = {
    body: ContentPlatformModel.ApplicationLegal;
};
type UpdateNavigationParam = {
    /**
     * - ID allotted to the navigation.
     */
    id: string;
    body: ContentPlatformModel.NavigationRequest;
};
type UpdatePageParam = {
    /**
     * - ID allotted to the page.
     */
    id: string;
    body: ContentPlatformModel.PageSchema;
};
type UpdatePagePreviewParam = {
    /**
     * - A short, human-readable, URL-friendly identifier of
     * a page. You can get slug value of a page from `getPages` API.
     */
    slug: string;
    body: ContentPlatformModel.PagePublishRequest;
};
type UpdatePathRedirectionRulesParam = {
    /**
     * - ID allotted to the path redirection rule.
     */
    pathId: string;
    body: ContentPlatformModel.PathMappingSchema;
};
type UpdateSEOConfigurationParam = {
    body: ContentPlatformModel.SeoComponent;
};
type UpdateSlideshowParam = {
    /**
     * - ID allotted to the slideshow.
     */
    id: string;
    body: ContentPlatformModel.SlideshowRequest;
};
type UpdateSupportInformationParam = {
    body: ContentPlatformModel.Support;
};
import ContentPlatformModel = require("./ContentPlatformModel");
