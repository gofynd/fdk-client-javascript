const Joi = require("joi");

const ContentPlatformModel = require("./ContentPlatformModel");

/**
 * @typedef CreateCustomFieldDefinitionParam
 * @property {string} resource
 * @property {ContentPlatformModel.CustomFieldDefinitionRequestSchema} body
 */

/**
 * @typedef CreateCustomObjectBySlugParam
 * @property {string} definitionSlug
 * @property {ContentPlatformModel.CustomObjectRequestSchemaWithoutId} body
 */

/**
 * @typedef CreateCustomObjectDefinitionParam
 * @property {ContentPlatformModel.CustomObjectDefinitionRequestSchema} body
 */

/**
 * @typedef DeleteCustomFieldDefinitionBySlugParam
 * @property {string} slug
 * @property {string} resource
 * @property {string} namespace
 */

/**
 * @typedef DeleteCustomObjectBySlugParam
 * @property {string} definitionSlug
 * @property {string} slug
 */

/**
 * @typedef DeleteCustomObjectDefinitionBySlugParam
 * @property {string} slug
 */

/**
 * @typedef ExportCustomObjectEntriesBySlugParam
 * @property {string} slug
 */

/**
 * @typedef GetCustomFieldDefinitionByResourceParam
 * @property {string} pageNo
 * @property {string} pageSize
 * @property {string} resource
 * @property {string} [types]
 * @property {string} [search]
 * @property {string} [slugs]
 * @property {string} [namespaces]
 */

/**
 * @typedef GetCustomFieldDefinitionBySlugParam
 * @property {string} slug
 * @property {string} resource
 * @property {string} namespace
 */

/**
 * @typedef GetCustomFieldDefinitionsParam
 * @property {string} pageNo
 * @property {string} pageSize
 * @property {string} [resources]
 * @property {string} [types]
 * @property {string} [search]
 * @property {string} [slugs]
 * @property {string} [namespaces]
 */

/** @typedef GetCustomFieldTypesParam */

/**
 * @typedef GetCustomFieldsByResourceSlugParam
 * @property {string} resource
 * @property {string} resourceSlug
 */

/**
 * @typedef GetCustomObjectBySlugParam
 * @property {string} definitionSlug
 * @property {string} slug
 */

/**
 * @typedef GetCustomObjectDefinitionBySlugParam
 * @property {string} slug
 */

/**
 * @typedef GetCustomObjectDefinitionsParam
 * @property {string} pageNo
 * @property {string} pageSize
 * @property {string} [search]
 */

/**
 * @typedef GetCustomObjectsBySlugParam
 * @property {string} pageNo
 * @property {string} pageSize
 * @property {string} definitionSlug
 */

/**
 * @typedef GetJobsParam
 * @property {string} pageNo
 * @property {string} pageSize
 * @property {string} actionType
 */

/** @typedef GetResourcesParam */

/**
 * @typedef ImportCustomObjectEntriesBySlugParam
 * @property {string} slug
 * @property {ContentPlatformModel.CustomObjectBulkSchema} body
 */

/**
 * @typedef SampleCustomObjectBulkEntryBySlugParam
 * @property {string} slug
 */

/**
 * @typedef UpdateCustomFieldByResourceSlugParam
 * @property {string} resource
 * @property {string} resourceSlug
 * @property {ContentPlatformModel.CustomFieldRequestSchema} body
 */

/**
 * @typedef UpdateCustomFieldDefinitionBySlugParam
 * @property {string} slug
 * @property {string} resource
 * @property {string} namespace
 * @property {ContentPlatformModel.CustomFieldDefinitionRequestSchema} body
 */

/**
 * @typedef UpdateCustomObjectBySlugParam
 * @property {string} definitionSlug
 * @property {string} slug
 * @property {ContentPlatformModel.CustomObjectRequestSchemaWithoutId} body
 */

/**
 * @typedef UpdateCustomObjectDefinitionBySlugParam
 * @property {string} slug
 * @property {ContentPlatformModel.CustomObjectDefinitionUpdateRequestSchema} body
 */

class ContentPlatformValidator {
  /** @returns {CreateCustomFieldDefinitionParam} */
  static createCustomFieldDefinition() {
    return Joi.object({
      resource: Joi.string().allow("").required(),
      body: ContentPlatformModel.CustomFieldDefinitionRequestSchema().required(),
    }).required();
  }

  /** @returns {CreateCustomObjectBySlugParam} */
  static createCustomObjectBySlug() {
    return Joi.object({
      definitionSlug: Joi.string().allow("").required(),
      body: ContentPlatformModel.CustomObjectRequestSchemaWithoutId().required(),
    }).required();
  }

  /** @returns {CreateCustomObjectDefinitionParam} */
  static createCustomObjectDefinition() {
    return Joi.object({
      body: ContentPlatformModel.CustomObjectDefinitionRequestSchema().required(),
    }).required();
  }

  /** @returns {DeleteCustomFieldDefinitionBySlugParam} */
  static deleteCustomFieldDefinitionBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      resource: Joi.string().allow("").required(),
      namespace: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {DeleteCustomObjectBySlugParam} */
  static deleteCustomObjectBySlug() {
    return Joi.object({
      definitionSlug: Joi.string().allow("").required(),
      slug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {DeleteCustomObjectDefinitionBySlugParam} */
  static deleteCustomObjectDefinitionBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {ExportCustomObjectEntriesBySlugParam} */
  static exportCustomObjectEntriesBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetCustomFieldDefinitionByResourceParam} */
  static getCustomFieldDefinitionByResource() {
    return Joi.object({
      pageNo: Joi.string().allow("").required(),
      pageSize: Joi.string().allow("").required(),
      resource: Joi.string().allow("").required(),
      types: Joi.string().allow(""),
      search: Joi.string().allow(""),
      slugs: Joi.string().allow(""),
      namespaces: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetCustomFieldDefinitionBySlugParam} */
  static getCustomFieldDefinitionBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      resource: Joi.string().allow("").required(),
      namespace: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetCustomFieldDefinitionsParam} */
  static getCustomFieldDefinitions() {
    return Joi.object({
      pageNo: Joi.string().allow("").required(),
      pageSize: Joi.string().allow("").required(),
      resources: Joi.string().allow(""),
      types: Joi.string().allow(""),
      search: Joi.string().allow(""),
      slugs: Joi.string().allow(""),
      namespaces: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetCustomFieldTypesParam} */
  static getCustomFieldTypes() {
    return Joi.object({}).required();
  }

  /** @returns {GetCustomFieldsByResourceSlugParam} */
  static getCustomFieldsByResourceSlug() {
    return Joi.object({
      resource: Joi.string().allow("").required(),
      resourceSlug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetCustomObjectBySlugParam} */
  static getCustomObjectBySlug() {
    return Joi.object({
      definitionSlug: Joi.string().allow("").required(),
      slug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetCustomObjectDefinitionBySlugParam} */
  static getCustomObjectDefinitionBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetCustomObjectDefinitionsParam} */
  static getCustomObjectDefinitions() {
    return Joi.object({
      pageNo: Joi.string().allow("").required(),
      pageSize: Joi.string().allow("").required(),
      search: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetCustomObjectsBySlugParam} */
  static getCustomObjectsBySlug() {
    return Joi.object({
      pageNo: Joi.string().allow("").required(),
      pageSize: Joi.string().allow("").required(),
      definitionSlug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetJobsParam} */
  static getJobs() {
    return Joi.object({
      pageNo: Joi.string().allow("").required(),
      pageSize: Joi.string().allow("").required(),
      actionType: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetResourcesParam} */
  static getResources() {
    return Joi.object({}).required();
  }

  /** @returns {ImportCustomObjectEntriesBySlugParam} */
  static importCustomObjectEntriesBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      body: ContentPlatformModel.CustomObjectBulkSchema().required(),
    }).required();
  }

  /** @returns {SampleCustomObjectBulkEntryBySlugParam} */
  static sampleCustomObjectBulkEntryBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {UpdateCustomFieldByResourceSlugParam} */
  static updateCustomFieldByResourceSlug() {
    return Joi.object({
      resource: Joi.string().allow("").required(),
      resourceSlug: Joi.string().allow("").required(),
      body: ContentPlatformModel.CustomFieldRequestSchema().required(),
    }).required();
  }

  /** @returns {UpdateCustomFieldDefinitionBySlugParam} */
  static updateCustomFieldDefinitionBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      resource: Joi.string().allow("").required(),
      namespace: Joi.string().allow("").required(),
      body: ContentPlatformModel.CustomFieldDefinitionRequestSchema().required(),
    }).required();
  }

  /** @returns {UpdateCustomObjectBySlugParam} */
  static updateCustomObjectBySlug() {
    return Joi.object({
      definitionSlug: Joi.string().allow("").required(),
      slug: Joi.string().allow("").required(),
      body: ContentPlatformModel.CustomObjectRequestSchemaWithoutId().required(),
    }).required();
  }

  /** @returns {UpdateCustomObjectDefinitionBySlugParam} */
  static updateCustomObjectDefinitionBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      body: ContentPlatformModel.CustomObjectDefinitionUpdateRequestSchema().required(),
    }).required();
  }
}

module.exports = ContentPlatformValidator;
