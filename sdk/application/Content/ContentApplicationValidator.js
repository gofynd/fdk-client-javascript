const Joi = require("joi");

const ContentModel = require("./ContentApplicationModel");
class ContentValidator {
  static getAnnouncements() {
    return Joi.object({});
  }

  static getBlog() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      rootId: Joi.string().allow(""),
    }).required();
  }

  static getBlogs() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    });
  }

  static getDataLoaders() {
    return Joi.object({});
  }

  static getFaqs() {
    return Joi.object({});
  }

  static getFaqCategories() {
    return Joi.object({});
  }

  static getFaqBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  static getFaqCategoryBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  static getFaqsByCategorySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  static getLandingPage() {
    return Joi.object({});
  }

  static getLegalInformation() {
    return Joi.object({});
  }

  static getNavigations() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    });
  }

  static getSEOConfiguration() {
    return Joi.object({});
  }

  static getSlideshows() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    });
  }

  static getSlideshow() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  static getSupportInformation() {
    return Joi.object({});
  }

  static getTags() {
    return Joi.object({});
  }

  static getPage() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      rootId: Joi.string().allow(""),
    }).required();
  }

  static getPages() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    });
  }
}

module.exports = ContentValidator;
