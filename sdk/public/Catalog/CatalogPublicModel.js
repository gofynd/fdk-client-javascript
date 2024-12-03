const Joi = require("joi");

/**
 * @typedef TaxonomyItemAttributeSchemaObject
 * @property {string} [type] - The data type of the attribute".
 * @property {boolean} [mandatory] - Specifies if the attribute is mandatory.
 */

/**
 * @typedef TaxonomyItemAttributesResponseSchema
 * @property {string} [id] - Unique identifier for the attribute.
 * @property {string} [name] - The name of the attribute, such as "Color" or "Size".
 * @property {string} [slug] - A URL-friendly identifier for the attribute,
 *   which is used for filtering or querying.
 * @property {TaxonomyItemAttributeSchemaObject} [schema]
 */

/**
 * @typedef TaxonomyItemResponseSchema
 * @property {number} uid - Unique identifier for the taxonomy item.
 * @property {string} name - The name of the taxonomy item. For example, it
 *   could be the name of a department or category.
 * @property {string} slug - A URL-friendly identifier for the taxonomy item.
 *   The slug differs based on the level: - At level 0, it refers to the
 *   department. - At level 1, it refers to the L1 category. - At level 2, it
 *   refers to the L2 category. - At level 3, it refers to the L3 category.
 * @property {number} level - The level level of the taxonomy item in the
 *   hierarchy: - 0: Department - 1: L1 category - 2: L2 category - 3: L3 category
 * @property {TaxonomyItemAttributesResponseSchema[]} [attributes] - A list of
 *   attributes associated with the taxonomy item, such as color or size. These
 *   attributes may differ depending on the level of the taxonomy.
 * @property {string} [product_template_slug] - A slug identifier for the
 *   template associated with this taxonomy item. It links the taxonomy to a
 *   specific product template.
 * @property {string} [product_template_name] - A Name for the template
 *   associated with this taxonomy item. It links the taxonomy to a specific
 *   product template.
 */

/**
 * @typedef TaxonomyResponseSchema
 * @property {TaxonomyItemResponseSchema[]} [items] - List of taxonomy items for
 *   the requested level level. Each item represents a taxonomy node with
 *   details about its category, attributes, and associated template.
 */

/**
 * @typedef ValidationErrors
 * @property {ValidationError[]} errors
 */

/**
 * @typedef ValidationError
 * @property {string} message - A brief description of the error encountered.
 * @property {string} field - The field in the request that caused the error.
 */

class CatalogPublicModel {
  /** @returns {TaxonomyItemAttributeSchemaObject} */
  static TaxonomyItemAttributeSchemaObject() {
    return Joi.object({
      type: Joi.string().allow(""),
      mandatory: Joi.boolean(),
    });
  }

  /** @returns {TaxonomyItemAttributesResponseSchema} */
  static TaxonomyItemAttributesResponseSchema() {
    return Joi.object({
      id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      schema: CatalogPublicModel.TaxonomyItemAttributeSchemaObject(),
    });
  }

  /** @returns {TaxonomyItemResponseSchema} */
  static TaxonomyItemResponseSchema() {
    return Joi.object({
      uid: Joi.number().required(),
      name: Joi.string().allow("").required(),
      slug: Joi.string().allow("").required(),
      level: Joi.number().required(),
      attributes: Joi.array().items(
        CatalogPublicModel.TaxonomyItemAttributesResponseSchema()
      ),
      product_template_slug: Joi.string().allow(""),
      product_template_name: Joi.string().allow(""),
    });
  }

  /** @returns {TaxonomyResponseSchema} */
  static TaxonomyResponseSchema() {
    return Joi.object({
      items: Joi.array().items(CatalogPublicModel.TaxonomyItemResponseSchema()),
    });
  }

  /** @returns {ValidationErrors} */
  static ValidationErrors() {
    return Joi.object({
      errors: Joi.array()
        .items(CatalogPublicModel.ValidationError())
        .required(),
    });
  }

  /** @returns {ValidationError} */
  static ValidationError() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      field: Joi.string().allow("").required(),
    });
  }
}
module.exports = CatalogPublicModel;
