const Joi = require("joi");

const ContentPlatformModel = require("./ContentPlatformModel");

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
