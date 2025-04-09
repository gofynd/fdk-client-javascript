const Joi = require("joi");

const CatalogPublicModel = require("./CatalogPublicModel");

/**
 * @typedef GetTaxonomyByLevelParam
 * @property {number} level - The level of taxonomy hierarchy to fetch: 0: Fetch
 *   departments. 1: Fetch L1 categories. 2: Fetch L2 categories. 3: Fetch L3 categories.
 * @property {string} [l0Slug] - Level 0 (Department) slug of the taxonomy to
 *   filter results.
 * @property {string} [l1Slug] - Level 1 (L1 Category) slug of the taxonomy to
 *   filter results.
 * @property {string} [l2Slug] - Level 2 (L2 Category) slug of the taxonomy to
 *   filter results.
 * @property {string} [l3Slug] - Level 3 (L3 Category) slug of the taxonomy to
 *   filter results.
 * @property {number} [limit] - Applied limit on the number of items to be
 *   returned. Default is 5000.
 */

class CatalogPublicValidator {
  /** @returns {GetTaxonomyByLevelParam} */
  static getTaxonomyByLevel() {
    return Joi.object({
      level: Joi.number().required(),
      l0Slug: Joi.string().allow(""),
      l1Slug: Joi.string().allow(""),
      l2Slug: Joi.string().allow(""),
      l3Slug: Joi.string().allow(""),
      limit: Joi.number(),
    }).required();
  }
}

module.exports = CatalogPublicValidator;
