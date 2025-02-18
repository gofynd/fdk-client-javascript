const Joi = require("joi");

const ContentPlatformModel = require("./ContentPlatformModel");

/**
 * @typedef AddCompanyLanguageParam
 * @property {ContentPlatformModel.CompanyLanguageCreate} body
 */

/**
 * @typedef CreateCompanyResourceTranslationParam
 * @property {ContentPlatformModel.ResourceTranslationCreate} body
 */

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
 * @typedef DeleteCompanyLanguageParam
 * @property {string} locale
 */

/**
 * @typedef DeleteCompanyResourceTranslationParam
 * @property {string} id
 */

/**
 * @typedef DeleteCustomFieldDefinitionBySlugParam
 * @property {string} slug
 * @property {string} resource
 * @property {string} namespace
 */

/**
 * @typedef DeleteCustomFieldsByResourceSlugParam
 * @property {string} resource
 * @property {string} resourceSlug
 * @property {string} ids
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
 * @typedef GetAllResourceDefinitionsParam
 * @property {string} [translatableResourceId]
 */

/** @typedef GetAllSectionsParam */

/** @typedef GetAllTranslatableResourcesParam */

/** @typedef GetCompanyLanguagesParam */

/**
 * @typedef GetCompanyResourceTranslationParam
 * @property {string} locale
 * @property {string} type
 * @property {string} resourceId
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
 * @property {string} page
 * @property {string} pageSize
 * @property {string} actionType
 */

/**
 * @typedef GetResourceDefinitionByIdParam
 * @property {string} id
 */

/** @typedef GetResourcesParam */

/**
 * @typedef GetSectionByIdParam
 * @property {string} id
 */

/**
 * @typedef GetTranslatableResourceByIdParam
 * @property {string} id
 */

/**
 * @typedef GetTranslatableResourcesBySectionIdParam
 * @property {string} id
 */

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
 * @typedef UpdateCompanyLanguageDefaultParam
 * @property {ContentPlatformModel.CompanyLanguageUpdate} body
 */

/**
 * @typedef UpdateCompanyResourceTranslationParam
 * @property {string} id
 * @property {ContentPlatformModel.ResourceTranslationUpdate} body
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
  /** @returns {AddCompanyLanguageParam} */
  static addCompanyLanguage() {
    return Joi.object({
      body: ContentPlatformModel.CompanyLanguageCreate().required(),
    }).required();
  }

  /** @returns {CreateCompanyResourceTranslationParam} */
  static createCompanyResourceTranslation() {
    return Joi.object({
      body: ContentPlatformModel.ResourceTranslationCreate().required(),
    }).required();
  }

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

  /** @returns {DeleteCompanyLanguageParam} */
  static deleteCompanyLanguage() {
    return Joi.object({
      locale: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {DeleteCompanyResourceTranslationParam} */
  static deleteCompanyResourceTranslation() {
    return Joi.object({
      id: Joi.string().allow("").required(),
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

  /** @returns {DeleteCustomFieldsByResourceSlugParam} */
  static deleteCustomFieldsByResourceSlug() {
    return Joi.object({
      resource: Joi.string().allow("").required(),
      resourceSlug: Joi.string().allow("").required(),
      ids: Joi.string().allow("").required(),
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

  /** @returns {GetAllResourceDefinitionsParam} */
  static getAllResourceDefinitions() {
    return Joi.object({
      translatableResourceId: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetAllSectionsParam} */
  static getAllSections() {
    return Joi.object({}).required();
  }

  /** @returns {GetAllTranslatableResourcesParam} */
  static getAllTranslatableResources() {
    return Joi.object({}).required();
  }

  /** @returns {GetCompanyLanguagesParam} */
  static getCompanyLanguages() {
    return Joi.object({}).required();
  }

  /** @returns {GetCompanyResourceTranslationParam} */
  static getCompanyResourceTranslation() {
    return Joi.object({
      locale: Joi.string().allow("").required(),
      type: Joi.string().allow("").required(),
      resourceId: Joi.string().allow("").required(),
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
      page: Joi.string().allow("").required(),
      pageSize: Joi.string().allow("").required(),
      actionType: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetResourceDefinitionByIdParam} */
  static getResourceDefinitionById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetResourcesParam} */
  static getResources() {
    return Joi.object({}).required();
  }

  /** @returns {GetSectionByIdParam} */
  static getSectionById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetTranslatableResourceByIdParam} */
  static getTranslatableResourceById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetTranslatableResourcesBySectionIdParam} */
  static getTranslatableResourcesBySectionId() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
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

  /** @returns {UpdateCompanyLanguageDefaultParam} */
  static updateCompanyLanguageDefault() {
    return Joi.object({
      body: ContentPlatformModel.CompanyLanguageUpdate().required(),
    }).required();
  }

  /** @returns {UpdateCompanyResourceTranslationParam} */
  static updateCompanyResourceTranslation() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: ContentPlatformModel.ResourceTranslationUpdate().required(),
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
