const Joi = require("joi");

const ContentPlatformModel = require("./ContentPlatformModel");

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

class ContentPlatformApplicationValidator {
  /** @returns {addDataLoader} */
  static addDataLoader() {
    return Joi.object({
      body: ContentPlatformModel.DataLoaderSchema().required(),
    }).required();
  }

  /** @returns {addFaq} */
  static addFaq() {
    return Joi.object({
      categoryId: Joi.string().allow("").required(),
      body: ContentPlatformModel.CreateFaqSchema().required(),
    }).required();
  }

  /** @returns {addInjectableTag} */
  static addInjectableTag() {
    return Joi.object({
      body: ContentPlatformModel.CreateTagRequestSchema().required(),
    }).required();
  }

  /** @returns {addPathRedirectionRules} */
  static addPathRedirectionRules() {
    return Joi.object({
      body: ContentPlatformModel.PathMappingSchema().required(),
    }).required();
  }

  /** @returns {createAnnouncement} */
  static createAnnouncement() {
    return Joi.object({
      body: ContentPlatformModel.AdminAnnouncementSchema().required(),
    }).required();
  }

  /** @returns {createBlog} */
  static createBlog() {
    return Joi.object({
      body: ContentPlatformModel.BlogRequest().required(),
    }).required();
  }

  /** @returns {createFaqCategory} */
  static createFaqCategory() {
    return Joi.object({
      body: ContentPlatformModel.CreateFaqCategoryRequestSchema().required(),
    }).required();
  }

  /** @returns {createLandingPage} */
  static createLandingPage() {
    return Joi.object({
      body: ContentPlatformModel.LandingPageSchema().required(),
    }).required();
  }

  /** @returns {createNavigation} */
  static createNavigation() {
    return Joi.object({
      body: ContentPlatformModel.NavigationRequest().required(),
    }).required();
  }

  /** @returns {createPage} */
  static createPage() {
    return Joi.object({
      body: ContentPlatformModel.PageRequest().required(),
    }).required();
  }

  /** @returns {createPagePreview} */
  static createPagePreview() {
    return Joi.object({
      body: ContentPlatformModel.PageRequest().required(),
    }).required();
  }

  /** @returns {createSlideshow} */
  static createSlideshow() {
    return Joi.object({
      body: ContentPlatformModel.SlideshowRequest().required(),
    }).required();
  }

  /** @returns {deleteAllInjectableTags} */
  static deleteAllInjectableTags() {
    return Joi.object({}).required();
  }

  /** @returns {deleteAnnouncement} */
  static deleteAnnouncement() {
    return Joi.object({
      announcementId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {deleteBlog} */
  static deleteBlog() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {deleteDataLoader} */
  static deleteDataLoader() {
    return Joi.object({
      dataLoaderId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {deleteFaq} */
  static deleteFaq() {
    return Joi.object({
      categoryId: Joi.string().allow("").required(),
      faqId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {deleteFaqCategory} */
  static deleteFaqCategory() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {deleteLandingPage} */
  static deleteLandingPage() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {deleteNavigation} */
  static deleteNavigation() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {deletePage} */
  static deletePage() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {deletePathRedirectionRules} */
  static deletePathRedirectionRules() {
    return Joi.object({
      pathId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {deleteSlideshow} */
  static deleteSlideshow() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {editDataLoader} */
  static editDataLoader() {
    return Joi.object({
      dataLoaderId: Joi.string().allow("").required(),
      body: ContentPlatformModel.DataLoaderSchema().required(),
    }).required();
  }

  /** @returns {editInjectableTag} */
  static editInjectableTag() {
    return Joi.object({
      tagId: Joi.string().allow("").required(),
      body: ContentPlatformModel.UpdateHandpickedSchema().required(),
    }).required();
  }

  /** @returns {generateSEOTitle} */
  static generateSEOTitle() {
    return Joi.object({
      type: ContentPlatformModel.GenerationEntityType().required(),
      body: ContentPlatformModel.GenerateSEOContent().required(),
    }).required();
  }

  /** @returns {getAnnouncementById} */
  static getAnnouncementById() {
    return Joi.object({
      announcementId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getAnnouncementsList} */
  static getAnnouncementsList() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {getBlogBySlug} */
  static getBlogBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getBlogs} */
  static getBlogs() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {getComponentById} */
  static getComponentById() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getDataLoaders} */
  static getDataLoaders() {
    return Joi.object({}).required();
  }

  /** @returns {getDefaultNavigations} */
  static getDefaultNavigations() {
    return Joi.object({}).required();
  }

  /** @returns {getFaqByIdOrSlug} */
  static getFaqByIdOrSlug() {
    return Joi.object({
      idOrSlug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getFaqCategories} */
  static getFaqCategories() {
    return Joi.object({}).required();
  }

  /** @returns {getFaqCategoryBySlugOrId} */
  static getFaqCategoryBySlugOrId() {
    return Joi.object({
      idOrSlug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getFaqsByCategoryIdOrSlug} */
  static getFaqsByCategoryIdOrSlug() {
    return Joi.object({
      idOrSlug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getInjectableTags} */
  static getInjectableTags() {
    return Joi.object({}).required();
  }

  /** @returns {getLandingPages} */
  static getLandingPages() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {getLegalInformation} */
  static getLegalInformation() {
    return Joi.object({}).required();
  }

  /** @returns {getNavigationBySlug} */
  static getNavigationBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      devicePlatform: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getNavigations} */
  static getNavigations() {
    return Joi.object({
      devicePlatform: Joi.string().allow("").required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {getPageBySlug} */
  static getPageBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getPageMeta} */
  static getPageMeta() {
    return Joi.object({}).required();
  }

  /** @returns {getPageSpec} */
  static getPageSpec() {
    return Joi.object({}).required();
  }

  /** @returns {getPages} */
  static getPages() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {getPathRedirectionRule} */
  static getPathRedirectionRule() {
    return Joi.object({
      pathId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getPathRedirectionRules} */
  static getPathRedirectionRules() {
    return Joi.object({
      pageSize: Joi.number(),
      pageNo: Joi.number(),
    }).required();
  }

  /** @returns {getSEOConfiguration} */
  static getSEOConfiguration() {
    return Joi.object({}).required();
  }

  /** @returns {getSlideshowBySlug} */
  static getSlideshowBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      devicePlatform: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getSlideshows} */
  static getSlideshows() {
    return Joi.object({
      devicePlatform: Joi.string().allow("").required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {getSupportInformation} */
  static getSupportInformation() {
    return Joi.object({}).required();
  }

  /** @returns {removeInjectableTag} */
  static removeInjectableTag() {
    return Joi.object({
      body: ContentPlatformModel.RemoveHandpickedSchema().required(),
    }).required();
  }

  /** @returns {resetDataLoader} */
  static resetDataLoader() {
    return Joi.object({
      service: Joi.string().allow("").required(),
      operationId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {selectDataLoader} */
  static selectDataLoader() {
    return Joi.object({
      dataLoaderId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {updateAnnouncement} */
  static updateAnnouncement() {
    return Joi.object({
      announcementId: Joi.string().allow("").required(),
      body: ContentPlatformModel.AdminAnnouncementSchema().required(),
    }).required();
  }

  /** @returns {updateAnnouncementSchedule} */
  static updateAnnouncementSchedule() {
    return Joi.object({
      announcementId: Joi.string().allow("").required(),
      body: ContentPlatformModel.ScheduleSchema().required(),
    }).required();
  }

  /** @returns {updateBlog} */
  static updateBlog() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: ContentPlatformModel.BlogRequest().required(),
    }).required();
  }

  /** @returns {updateFaq} */
  static updateFaq() {
    return Joi.object({
      categoryId: Joi.string().allow("").required(),
      faqId: Joi.string().allow("").required(),
      body: ContentPlatformModel.CreateFaqSchema().required(),
    }).required();
  }

  /** @returns {updateFaqCategory} */
  static updateFaqCategory() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: ContentPlatformModel.UpdateFaqCategoryRequestSchema().required(),
    }).required();
  }

  /** @returns {updateInjectableTag} */
  static updateInjectableTag() {
    return Joi.object({
      body: ContentPlatformModel.CreateTagRequestSchema().required(),
    }).required();
  }

  /** @returns {updateLandingPage} */
  static updateLandingPage() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: ContentPlatformModel.LandingPageSchema().required(),
    }).required();
  }

  /** @returns {updateLegalInformation} */
  static updateLegalInformation() {
    return Joi.object({
      body: ContentPlatformModel.ApplicationLegal().required(),
    }).required();
  }

  /** @returns {updateNavigation} */
  static updateNavigation() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: ContentPlatformModel.NavigationRequest().required(),
    }).required();
  }

  /** @returns {updatePage} */
  static updatePage() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: ContentPlatformModel.PageSchema().required(),
    }).required();
  }

  /** @returns {updatePagePreview} */
  static updatePagePreview() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      body: ContentPlatformModel.PagePublishRequest().required(),
    }).required();
  }

  /** @returns {updatePathRedirectionRules} */
  static updatePathRedirectionRules() {
    return Joi.object({
      pathId: Joi.string().allow("").required(),
      body: ContentPlatformModel.PathMappingSchema().required(),
    }).required();
  }

  /** @returns {updateSEOConfiguration} */
  static updateSEOConfiguration() {
    return Joi.object({
      body: ContentPlatformModel.SeoComponent().required(),
    }).required();
  }

  /** @returns {updateSlideshow} */
  static updateSlideshow() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: ContentPlatformModel.SlideshowRequest().required(),
    }).required();
  }

  /** @returns {updateSupportInformation} */
  static updateSupportInformation() {
    return Joi.object({
      body: ContentPlatformModel.Support().required(),
    }).required();
  }
}

module.exports = ContentPlatformApplicationValidator;
