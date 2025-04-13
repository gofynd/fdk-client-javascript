const Joi = require("joi");

const ContentPlatformModel = require("./ContentPlatformModel");

/**
 * @typedef CreateCustomFieldByResourceIdParam
 * @property {string} resource
 * @property {string} resourceId
 * @property {ContentPlatformModel.CustomFieldRequestSchema} body
 */

/**
 * @typedef CreateCustomFieldDefinitionParam
 * @property {ContentPlatformModel.CustomFieldDefinitionRequestSchema} body
 */

/**
 * @typedef CreateCustomObjectParam
 * @property {ContentPlatformModel.CustomObjectRequestSchema} body
 */

/**
 * @typedef CreateCustomObjectDefinitionParam
 * @property {ContentPlatformModel.CustomObjectDefinitionRequestSchema} body
 */

/**
 * @typedef DeleteCustomFieldDefinitionParam
 * @property {string} id
 */

/**
 * @typedef DeleteCustomFieldsByResourceIdParam
 * @property {string} resource
 * @property {string} resourceId
 * @property {string} ids
 */

/**
 * @typedef DeleteCustomObjectParam
 * @property {string} id
 */

/**
 * @typedef DeleteCustomObjectDefinitionParam
 * @property {string} id
 */

/**
 * @typedef ExportCustomObjectEntriesParam
 * @property {string} definitionId
 */

/**
 * @typedef GetCustomFieldDefinitionParam
 * @property {string} id
 */

/**
 * @typedef GetCustomFieldDefinitionsParam
 * @property {string} pageNo
 * @property {string} pageSize
 * @property {string} [resources]
 * @property {string} [types]
 * @property {string} [search]
 * @property {string} [slugs]
 */

/**
 * @typedef GetCustomFieldJobsParam
 * @property {string} page
 * @property {string} pageSize
 * @property {string} actionType
 */

/** @typedef GetCustomFieldTypesParam */

/**
 * @typedef GetCustomFieldsParam
 * @property {string} resource
 */

/**
 * @typedef GetCustomFieldsByResourceIdParam
 * @property {string} resource
 * @property {string} resourceId
 */

/**
 * @typedef GetCustomObjectParam
 * @property {string} id
 */

/**
 * @typedef GetCustomObjectDefinitionParam
 * @property {string} id
 */

/**
 * @typedef GetCustomObjectDefinitionsParam
 * @property {string} pageNo
 * @property {string} pageSize
 * @property {string} [search]
 */

/**
 * @typedef GetCustomObjectsParam
 * @property {string} [definitionId]
 * @property {string} pageNo
 * @property {string} pageSize
 */

/**
 * @typedef GetJobsParam
 * @property {string} page
 * @property {string} pageSize
 * @property {string} actionType
 */

/** @typedef GetResourcesParam */

/**
 * @typedef ImportCustomObjectEntriesParam
 * @property {string} definitionId
 * @property {ContentPlatformModel.CustomObjectBulkSchema} body
 */

/**
 * @typedef SampleCustomObjectBulkEntryParam
 * @property {string} definitionId
 */

/**
 * @typedef UpdateCustomFieldByResourceIdParam
 * @property {string} resource
 * @property {string} resourceId
 * @property {ContentPlatformModel.CustomFieldRequestSchema} body
 */

/**
 * @typedef UpdateCustomFieldDefinitionParam
 * @property {string} id
 * @property {ContentPlatformModel.CustomFieldDefinitionRequestSchema} body
 */

/**
 * @typedef UpdateCustomObjectParam
 * @property {string} id
 * @property {ContentPlatformModel.CustomObjectRequestSchema} body
 */

/**
 * @typedef UpdateCustomObjectDefinitionParam
 * @property {string} id
 * @property {ContentPlatformModel.CustomObjectDefinitionUpdateRequestSchema} body
 */

class ContentPlatformValidator {
  /** @returns {CreateCustomFieldByResourceIdParam} */
  static createCustomFieldByResourceId() {
    return Joi.object({
      resource: Joi.string().allow("").required(),
      resourceId: Joi.string().allow("").required(),
      body: ContentPlatformModel.CustomFieldRequestSchema().required(),
    }).required();
  }

  /** @returns {CreateCustomFieldDefinitionParam} */
  static createCustomFieldDefinition() {
    return Joi.object({
      body: ContentPlatformModel.CustomFieldDefinitionRequestSchema().required(),
    }).required();
  }

  /** @returns {CreateCustomObjectParam} */
  static createCustomObject() {
    return Joi.object({
      body: ContentPlatformModel.CustomObjectRequestSchema().required(),
    }).required();
  }

  /** @returns {CreateCustomObjectDefinitionParam} */
  static createCustomObjectDefinition() {
    return Joi.object({
      body: ContentPlatformModel.CustomObjectDefinitionRequestSchema().required(),
    }).required();
  }

  /** @returns {DeleteCustomFieldDefinitionParam} */
  static deleteCustomFieldDefinition() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {DeleteCustomFieldsByResourceIdParam} */
  static deleteCustomFieldsByResourceId() {
    return Joi.object({
      resource: Joi.string().allow("").required(),
      resourceId: Joi.string().allow("").required(),
      ids: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {DeleteCustomObjectParam} */
  static deleteCustomObject() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {DeleteCustomObjectDefinitionParam} */
  static deleteCustomObjectDefinition() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {ExportCustomObjectEntriesParam} */
  static exportCustomObjectEntries() {
    return Joi.object({
      definitionId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetCustomFieldDefinitionParam} */
  static getCustomFieldDefinition() {
    return Joi.object({
      id: Joi.string().allow("").required(),
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
    }).required();
  }

  /** @returns {GetCustomFieldJobsParam} */
  static getCustomFieldJobs() {
    return Joi.object({
      page: Joi.string().allow("").required(),
      pageSize: Joi.string().allow("").required(),
      actionType: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetCustomFieldTypesParam} */
  static getCustomFieldTypes() {
    return Joi.object({}).required();
  }

  /** @returns {GetCustomFieldsParam} */
  static getCustomFields() {
    return Joi.object({
      resource: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetCustomFieldsByResourceIdParam} */
  static getCustomFieldsByResourceId() {
    return Joi.object({
      resource: Joi.string().allow("").required(),
      resourceId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetCustomObjectParam} */
  static getCustomObject() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetCustomObjectDefinitionParam} */
  static getCustomObjectDefinition() {
    return Joi.object({
      id: Joi.string().allow("").required(),
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

  /** @returns {GetCustomObjectsParam} */
  static getCustomObjects() {
    return Joi.object({
      definitionId: Joi.string().allow(""),
      pageNo: Joi.string().allow("").required(),
      pageSize: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetJobsParam} */
  static getJobs() {
    return Joi.object({
      page: Joi.string().allow("").required(),
      pageSize: Joi.string().allow("").required(),
      actionType: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetResourcesParam} */
  static getResources() {
    return Joi.object({}).required();
  }

  /** @returns {ImportCustomObjectEntriesParam} */
  static importCustomObjectEntries() {
    return Joi.object({
      definitionId: Joi.string().allow("").required(),
      body: ContentPlatformModel.CustomObjectBulkSchema().required(),
    }).required();
  }

  /** @returns {SampleCustomObjectBulkEntryParam} */
  static sampleCustomObjectBulkEntry() {
    return Joi.object({
      definitionId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {UpdateCustomFieldByResourceIdParam} */
  static updateCustomFieldByResourceId() {
    return Joi.object({
      resource: Joi.string().allow("").required(),
      resourceId: Joi.string().allow("").required(),
      body: ContentPlatformModel.CustomFieldRequestSchema().required(),
    }).required();
  }

  /** @returns {UpdateCustomFieldDefinitionParam} */
  static updateCustomFieldDefinition() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: ContentPlatformModel.CustomFieldDefinitionRequestSchema().required(),
    }).required();
  }

  /** @returns {UpdateCustomObjectParam} */
  static updateCustomObject() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: ContentPlatformModel.CustomObjectRequestSchema().required(),
    }).required();
  }

  /** @returns {UpdateCustomObjectDefinitionParam} */
  static updateCustomObjectDefinition() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: ContentPlatformModel.CustomObjectDefinitionUpdateRequestSchema().required(),
    }).required();
  }
}

module.exports = ContentPlatformValidator;
