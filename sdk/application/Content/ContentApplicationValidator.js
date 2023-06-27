const Joi = require("joi");

const ContentApplicationModel = require("./ContentApplicationModel");

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

class ContentApplicationValidator {
  /** @returns {getAnnouncements} */
  static getAnnouncements() {
    return Joi.object({});
  }

  /** @returns {getBlog} */
  static getBlog() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      rootId: Joi.string().allow(""),
    }).required();
  }

  /** @returns {getBlogs} */
  static getBlogs() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    });
  }

  /** @returns {getDataLoaders} */
  static getDataLoaders() {
    return Joi.object({});
  }

  /** @returns {getFaqBySlug} */
  static getFaqBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getFaqCategories} */
  static getFaqCategories() {
    return Joi.object({});
  }

  /** @returns {getFaqCategoryBySlug} */
  static getFaqCategoryBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getFaqs} */
  static getFaqs() {
    return Joi.object({});
  }

  /** @returns {getFaqsByCategorySlug} */
  static getFaqsByCategorySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getLandingPage} */
  static getLandingPage() {
    return Joi.object({});
  }

  /** @returns {getLegalInformation} */
  static getLegalInformation() {
    return Joi.object({});
  }

  /** @returns {getNavigations} */
  static getNavigations() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    });
  }

  /** @returns {getPage} */
  static getPage() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      rootId: Joi.string().allow(""),
    }).required();
  }

  /** @returns {getPages} */
  static getPages() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    });
  }

  /** @returns {getSEOConfiguration} */
  static getSEOConfiguration() {
    return Joi.object({});
  }

  /** @returns {getSlideshow} */
  static getSlideshow() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getSlideshows} */
  static getSlideshows() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    });
  }

  /** @returns {getSupportInformation} */
  static getSupportInformation() {
    return Joi.object({});
  }

  /** @returns {getTags} */
  static getTags() {
    return Joi.object({});
  }
}

module.exports = ContentApplicationValidator;
