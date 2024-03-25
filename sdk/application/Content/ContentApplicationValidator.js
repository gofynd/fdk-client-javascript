const Joi = require("joi");

const ContentApplicationModel = require("./ContentApplicationModel");

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

/**
 * @typedef GetCustomFieldDefinitionParam
 * @property {string} id
 */

/** @typedef GetCustomFieldDefinitionsParam */

/**
 * @typedef GetCustomFieldsParam
 * @property {string} resource
 * @property {string} resourceIds
 */

/**
 * @typedef GetCustomObjectParam
 * @property {string} id
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
 * @typedef GetPageV1Param
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

/**
 * @typedef GetPagesV1Param
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 */

/** @typedef GetSEOConfigurationParam */

/**
 * @typedef GetSEOMarkupSchemasParam
 * @property {string} [pageType] - The type of page against which schema
 *   template was created
 * @property {boolean} [active] - Boolean value for fetching seo schema.
 */

/** @typedef GetSupportInformationParam */

/** @typedef GetTagsParam */

class ContentApplicationValidator {
  /** @returns {GetAnnouncementsParam} */
  static getAnnouncements() {
    return Joi.object({});
  }

  /** @returns {GetBlogParam} */
  static getBlog() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      rootId: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetBlogsParam} */
  static getBlogs() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    });
  }

  /** @returns {GetCustomFieldDefinitionParam} */
  static getCustomFieldDefinition() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetCustomFieldDefinitionsParam} */
  static getCustomFieldDefinitions() {
    return Joi.object({});
  }

  /** @returns {GetCustomFieldsParam} */
  static getCustomFields() {
    return Joi.object({
      resource: Joi.string().allow("").required(),
      resourceIds: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetCustomObjectParam} */
  static getCustomObject() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetDataLoadersParam} */
  static getDataLoaders() {
    return Joi.object({});
  }

  /** @returns {GetFaqBySlugParam} */
  static getFaqBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetFaqCategoriesParam} */
  static getFaqCategories() {
    return Joi.object({});
  }

  /** @returns {GetFaqCategoryBySlugParam} */
  static getFaqCategoryBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetFaqsParam} */
  static getFaqs() {
    return Joi.object({});
  }

  /** @returns {GetFaqsByCategorySlugParam} */
  static getFaqsByCategorySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetLandingPageParam} */
  static getLandingPage() {
    return Joi.object({});
  }

  /** @returns {GetLegalInformationParam} */
  static getLegalInformation() {
    return Joi.object({});
  }

  /** @returns {GetNavigationsParam} */
  static getNavigations() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    });
  }

  /** @returns {GetPageParam} */
  static getPage() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      rootId: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetPageV1Param} */
  static getPageV1() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      rootId: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetPagesParam} */
  static getPages() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    });
  }

  /** @returns {GetPagesV1Param} */
  static getPagesV1() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    });
  }

  /** @returns {GetSEOConfigurationParam} */
  static getSEOConfiguration() {
    return Joi.object({});
  }

  /** @returns {GetSEOMarkupSchemasParam} */
  static getSEOMarkupSchemas() {
    return Joi.object({
      pageType: Joi.string().allow(""),
      active: Joi.boolean(),
    });
  }

  /** @returns {GetSupportInformationParam} */
  static getSupportInformation() {
    return Joi.object({});
  }

  /** @returns {GetTagsParam} */
  static getTags() {
    return Joi.object({});
  }
}

module.exports = ContentApplicationValidator;
