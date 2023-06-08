const Joi = require("joi");

const ContentModel = require("./ContentPlatformModel");
class ContentValidator {
  static addDataLoader() {
    return Joi.object({
      body: ContentModel.DataLoaderSchema().required(),
    }).required();
  }

  static addFaq() {
    return Joi.object({
      categoryId: Joi.string().allow("").required(),
      body: ContentModel.CreateFaqSchema().required(),
    }).required();
  }

  static addInjectableTag() {
    return Joi.object({
      body: ContentModel.CreateTagRequestSchema().required(),
    }).required();
  }

  static addPathRedirectionRules() {
    return Joi.object({
      body: ContentModel.PathMappingSchema().required(),
    }).required();
  }

  static createAnnouncement() {
    return Joi.object({
      body: ContentModel.AdminAnnouncementSchema().required(),
    }).required();
  }

  static createBlog() {
    return Joi.object({
      body: ContentModel.BlogRequest().required(),
    }).required();
  }

  static createFaqCategory() {
    return Joi.object({
      body: ContentModel.CreateFaqCategoryRequestSchema().required(),
    }).required();
  }

  static createLandingPage() {
    return Joi.object({
      body: ContentModel.LandingPageSchema().required(),
    }).required();
  }

  static createNavigation() {
    return Joi.object({
      body: ContentModel.NavigationRequest().required(),
    }).required();
  }

  static createPage() {
    return Joi.object({
      body: ContentModel.PageRequest().required(),
    }).required();
  }

  static createPagePreview() {
    return Joi.object({
      body: ContentModel.PageRequest().required(),
    }).required();
  }

  static createSlideshow() {
    return Joi.object({
      body: ContentModel.SlideshowRequest().required(),
    }).required();
  }

  static deleteAllInjectableTags() {
    return Joi.object({}).required();
  }

  static deleteAnnouncement() {
    return Joi.object({
      announcementId: Joi.string().allow("").required(),
    }).required();
  }

  static deleteBlog() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static deleteDataLoader() {
    return Joi.object({
      dataLoaderId: Joi.string().allow("").required(),
    }).required();
  }

  static deleteFaq() {
    return Joi.object({
      categoryId: Joi.string().allow("").required(),
      faqId: Joi.string().allow("").required(),
    }).required();
  }

  static deleteFaqCategory() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static deleteLandingPage() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static deleteNavigation() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static deletePage() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static deletePathRedirectionRules() {
    return Joi.object({
      pathId: Joi.string().allow("").required(),
    }).required();
  }

  static deleteSlideshow() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static editDataLoader() {
    return Joi.object({
      dataLoaderId: Joi.string().allow("").required(),
      body: ContentModel.DataLoaderSchema().required(),
    }).required();
  }

  static editInjectableTag() {
    return Joi.object({
      tagId: Joi.string().allow("").required(),
      body: ContentModel.UpdateHandpickedSchema().required(),
    }).required();
  }

  static generateSEOTitle() {
    return Joi.object({
      type: ContentModel.GenerationEntityType().required(),
      body: ContentModel.GenerateSEOContent().required(),
    }).required();
  }

  static getAnnouncementById() {
    return Joi.object({
      announcementId: Joi.string().allow("").required(),
    }).required();
  }

  static getAnnouncementsList() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static getBlogBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  static getBlogs() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static getComponentById() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  static getDataLoaders() {
    return Joi.object({}).required();
  }

  static getDefaultNavigations() {
    return Joi.object({}).required();
  }

  static getFaqByIdOrSlug() {
    return Joi.object({
      idOrSlug: Joi.string().allow("").required(),
    }).required();
  }

  static getFaqCategories() {
    return Joi.object({}).required();
  }

  static getFaqCategoryBySlugOrId() {
    return Joi.object({
      idOrSlug: Joi.string().allow("").required(),
    }).required();
  }

  static getFaqsByCategoryIdOrSlug() {
    return Joi.object({
      idOrSlug: Joi.string().allow("").required(),
    }).required();
  }

  static getInjectableTags() {
    return Joi.object({}).required();
  }

  static getLandingPages() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static getLegalInformation() {
    return Joi.object({}).required();
  }

  static getNavigationBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      devicePlatform: Joi.string().allow("").required(),
    }).required();
  }

  static getNavigations() {
    return Joi.object({
      devicePlatform: Joi.string().allow("").required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static getPageBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  static getPageMeta() {
    return Joi.object({}).required();
  }

  static getPageSpec() {
    return Joi.object({}).required();
  }

  static getPages() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static getPathRedirectionRule() {
    return Joi.object({
      pathId: Joi.string().allow("").required(),
    }).required();
  }

  static getPathRedirectionRules() {
    return Joi.object({
      pageSize: Joi.number(),
      pageNo: Joi.number(),
    }).required();
  }

  static getSEOConfiguration() {
    return Joi.object({}).required();
  }

  static getSlideshowBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      devicePlatform: Joi.string().allow("").required(),
    }).required();
  }

  static getSlideshows() {
    return Joi.object({
      devicePlatform: Joi.string().allow("").required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static getSupportInformation() {
    return Joi.object({}).required();
  }

  static removeInjectableTag() {
    return Joi.object({
      body: ContentModel.RemoveHandpickedSchema().required(),
    }).required();
  }

  static resetDataLoader() {
    return Joi.object({
      service: Joi.string().allow("").required(),
      operationId: Joi.string().allow("").required(),
    }).required();
  }

  static selectDataLoader() {
    return Joi.object({
      dataLoaderId: Joi.string().allow("").required(),
    }).required();
  }

  static updateAnnouncement() {
    return Joi.object({
      announcementId: Joi.string().allow("").required(),
      body: ContentModel.AdminAnnouncementSchema().required(),
    }).required();
  }

  static updateAnnouncementSchedule() {
    return Joi.object({
      announcementId: Joi.string().allow("").required(),
      body: ContentModel.ScheduleSchema().required(),
    }).required();
  }

  static updateBlog() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: ContentModel.BlogRequest().required(),
    }).required();
  }

  static updateFaq() {
    return Joi.object({
      categoryId: Joi.string().allow("").required(),
      faqId: Joi.string().allow("").required(),
      body: ContentModel.CreateFaqSchema().required(),
    }).required();
  }

  static updateFaqCategory() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: ContentModel.UpdateFaqCategoryRequestSchema().required(),
    }).required();
  }

  static updateInjectableTag() {
    return Joi.object({
      body: ContentModel.CreateTagRequestSchema().required(),
    }).required();
  }

  static updateLandingPage() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: ContentModel.LandingPageSchema().required(),
    }).required();
  }

  static updateLegalInformation() {
    return Joi.object({
      body: ContentModel.ApplicationLegal().required(),
    }).required();
  }

  static updateNavigation() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: ContentModel.NavigationRequest().required(),
    }).required();
  }

  static updatePage() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: ContentModel.PageSchema().required(),
    }).required();
  }

  static updatePagePreview() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      body: ContentModel.PagePublishRequest().required(),
    }).required();
  }

  static updatePathRedirectionRules() {
    return Joi.object({
      pathId: Joi.string().allow("").required(),
      body: ContentModel.PathMappingSchema().required(),
    }).required();
  }

  static updateSEOConfiguration() {
    return Joi.object({
      body: ContentModel.SeoComponent().required(),
    }).required();
  }

  static updateSlideshow() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: ContentModel.SlideshowRequest().required(),
    }).required();
  }

  static updateSupportInformation() {
    return Joi.object({
      body: ContentModel.Support().required(),
    }).required();
  }
}

module.exports = ContentValidator;
