export = CatalogPublicModel;
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
declare class CatalogPublicModel {
}
declare namespace CatalogPublicModel {
    export { TaxonomyItemAttributeSchemaObject, TaxonomyItemAttributesResponseSchema, TaxonomyItemResponseSchema, TaxonomyResponseSchema, ValidationErrors, ValidationError };
}
/** @returns {TaxonomyItemAttributeSchemaObject} */
declare function TaxonomyItemAttributeSchemaObject(): TaxonomyItemAttributeSchemaObject;
type TaxonomyItemAttributeSchemaObject = {
    /**
     * - The data type of the attribute".
     */
    type?: string;
    /**
     * - Specifies if the attribute is mandatory.
     */
    mandatory?: boolean;
};
/** @returns {TaxonomyItemAttributesResponseSchema} */
declare function TaxonomyItemAttributesResponseSchema(): TaxonomyItemAttributesResponseSchema;
type TaxonomyItemAttributesResponseSchema = {
    /**
     * - Unique identifier for the attribute.
     */
    id?: string;
    /**
     * - The name of the attribute, such as "Color" or "Size".
     */
    name?: string;
    /**
     * - A URL-friendly identifier for the attribute,
     * which is used for filtering or querying.
     */
    slug?: string;
    schema?: TaxonomyItemAttributeSchemaObject;
};
/** @returns {TaxonomyItemResponseSchema} */
declare function TaxonomyItemResponseSchema(): TaxonomyItemResponseSchema;
type TaxonomyItemResponseSchema = {
    /**
     * - Unique identifier for the taxonomy item.
     */
    uid: number;
    /**
     * - The name of the taxonomy item. For example, it
     * could be the name of a department or category.
     */
    name: string;
    /**
     * - A URL-friendly identifier for the taxonomy item.
     * The slug differs based on the level: - At level 0, it refers to the
     * department. - At level 1, it refers to the L1 category. - At level 2, it
     * refers to the L2 category. - At level 3, it refers to the L3 category.
     */
    slug: string;
    /**
     * - The level level of the taxonomy item in the
     * hierarchy: - 0: Department - 1: L1 category - 2: L2 category - 3: L3 category
     */
    level: number;
    /**
     * - A list of
     * attributes associated with the taxonomy item, such as color or size. These
     * attributes may differ depending on the level of the taxonomy.
     */
    attributes?: TaxonomyItemAttributesResponseSchema[];
    /**
     * - A slug identifier for the
     * template associated with this taxonomy item. It links the taxonomy to a
     * specific product template.
     */
    product_template_slug?: string;
    /**
     * - A Name for the template
     * associated with this taxonomy item. It links the taxonomy to a specific
     * product template.
     */
    product_template_name?: string;
};
/** @returns {TaxonomyResponseSchema} */
declare function TaxonomyResponseSchema(): TaxonomyResponseSchema;
type TaxonomyResponseSchema = {
    /**
     * - List of taxonomy items for
     * the requested level level. Each item represents a taxonomy node with
     * details about its category, attributes, and associated template.
     */
    items?: TaxonomyItemResponseSchema[];
};
/** @returns {ValidationErrors} */
declare function ValidationErrors(): ValidationErrors;
type ValidationErrors = {
    errors: ValidationError[];
};
/** @returns {ValidationError} */
declare function ValidationError(): ValidationError;
type ValidationError = {
    /**
     * - A brief description of the error encountered.
     */
    message: string;
    /**
     * - The field in the request that caused the error.
     */
    field: string;
};
