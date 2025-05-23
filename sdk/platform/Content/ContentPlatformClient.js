const PlatformAPIClient = require("../PlatformAPIClient");
const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const ContentPlatformValidator = require("./ContentPlatformValidator");
const ContentPlatformModel = require("./ContentPlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Content {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {ContentPlatformValidator.AddCompanyLanguageParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<Object>} - Success response
   * @name addCompanyLanguage
   * @summary: Add company language
   * @description: Add new languages to company's supported language list. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/addCompanyLanguage/).
   */
  async addCompanyLanguage(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ContentPlatformValidator.addCompanyLanguage().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformValidator.addCompanyLanguage().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > addCompanyLanguage \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/languages`,
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const { error: res_error } = Joi.any().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > addCompanyLanguage \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformValidator.CreateCompanyResourceTranslationParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.ResourceTranslation>} - Success response
   * @name createCompanyResourceTranslation
   * @summary: Add company translation
   * @description: Create new translations for company resources. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/createCompanyResourceTranslation/).
   */
  async createCompanyResourceTranslation(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformValidator.createCompanyResourceTranslation().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformValidator.createCompanyResourceTranslation().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > createCompanyResourceTranslation \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/resource/translations`,
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.ResourceTranslation().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > createCompanyResourceTranslation \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformValidator.CreateCustomFieldDefinitionParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomFieldDefinitionDetailResSchema>}
   *   - Success response
   *
   * @name createCustomFieldDefinition
   * @summary: Create custom field definition for a given resource type
   * @description: You can create custom fields definition to any resource so you can extend property of resource. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/createCustomFieldDefinition/).
   */
  async createCustomFieldDefinition(
    { resource, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformValidator.createCustomFieldDefinition().validate(
      {
        resource,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformValidator.createCustomFieldDefinition().validate(
      {
        resource,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > createCustomFieldDefinition \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v2.0/company/${this.config.companyId}/customfields/resource/${resource}/definition`,
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.CustomFieldDefinitionDetailResSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > createCustomFieldDefinition \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformValidator.CreateCustomObjectBySlugParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomObjectSchema>} - Success response
   * @name createCustomObjectBySlug
   * @summary: Create custom object entries
   * @description: Custom object entries against the custom object definition can be added using this API. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/createCustomObjectBySlug/).
   */
  async createCustomObjectBySlug(
    { definitionSlug, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformValidator.createCustomObjectBySlug().validate(
      {
        definitionSlug,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformValidator.createCustomObjectBySlug().validate(
      {
        definitionSlug,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > createCustomObjectBySlug \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v2.0/company/${this.config.companyId}/customobjects/definition/${definitionSlug}/entries`,
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.CustomObjectSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > createCustomObjectBySlug \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformValidator.CreateCustomObjectDefinitionParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomObjectDefinitionSlugSchema>}
   *   - Success response
   *
   * @name createCustomObjectDefinition
   * @summary: Create custom object definition
   * @description: Create a custom object that will have a collection of custom fields and can be used anywhere in the custom field for any resource. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/createCustomObjectDefinition/).
   */
  async createCustomObjectDefinition(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformValidator.createCustomObjectDefinition().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformValidator.createCustomObjectDefinition().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > createCustomObjectDefinition \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v2.0/company/${this.config.companyId}/customobjects/definition`,
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.CustomObjectDefinitionSlugSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > createCustomObjectDefinition \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformValidator.DeleteCompanyLanguageParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.OperationResponseSchema>} - Success response
   * @name deleteCompanyLanguage
   * @summary: Remove company language
   * @description: Remove a language from company's supported languages list. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/deleteCompanyLanguage/).
   */
  async deleteCompanyLanguage(
    { locale, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ContentPlatformValidator.deleteCompanyLanguage().validate(
      {
        locale,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformValidator.deleteCompanyLanguage().validate(
      {
        locale,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > deleteCompanyLanguage \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/languages/${locale}`,
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.OperationResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > deleteCompanyLanguage \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformValidator.DeleteCompanyResourceTranslationParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.OperationResponseSchema>} - Success response
   * @name deleteCompanyResourceTranslation
   * @summary: Remove company translation
   * @description: Remove translations for company resources. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/deleteCompanyResourceTranslation/).
   */
  async deleteCompanyResourceTranslation(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformValidator.deleteCompanyResourceTranslation().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformValidator.deleteCompanyResourceTranslation().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > deleteCompanyResourceTranslation \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/resource/translations/${id}`,
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.OperationResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > deleteCompanyResourceTranslation \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformValidator.DeleteCustomFieldDefinitionBySlugParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomDataDeleteSchema>} - Success response
   * @name deleteCustomFieldDefinitionBySlug
   * @summary: Delete custom fields definition
   * @description: Custom field definition and its assosiated custom fields value can be deleted using this api on the basis of definition id. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/deleteCustomFieldDefinitionBySlug/).
   */
  async deleteCustomFieldDefinitionBySlug(
    { slug, resource, namespace, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformValidator.deleteCustomFieldDefinitionBySlug().validate(
      {
        slug,
        resource,
        namespace,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformValidator.deleteCustomFieldDefinitionBySlug().validate(
      {
        slug,
        resource,
        namespace,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > deleteCustomFieldDefinitionBySlug \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v2.0/company/${this.config.companyId}/customfields/resource/${resource}/namespace/${namespace}/definition/${slug}`,
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.CustomDataDeleteSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > deleteCustomFieldDefinitionBySlug \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformValidator.DeleteCustomFieldsByResourceSlugParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomFieldsDeleteSchema>} -
   *   Success response
   * @name deleteCustomFieldsByResourceSlug
   * @summary: delete custom fields of given resource and resource slug
   * @description: Use this API to delete the custom fields for given resource in param. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/deleteCustomFieldsByResourceSlug/).
   */
  async deleteCustomFieldsByResourceSlug(
    { resource, resourceSlug, ids, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformValidator.deleteCustomFieldsByResourceSlug().validate(
      {
        resource,
        resourceSlug,
        ids,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformValidator.deleteCustomFieldsByResourceSlug().validate(
      {
        resource,
        resourceSlug,
        ids,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > deleteCustomFieldsByResourceSlug \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["ids"] = ids;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v2.0/company/${this.config.companyId}/customfields/resource/${resource}/${resourceSlug}`,
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.CustomFieldsDeleteSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > deleteCustomFieldsByResourceSlug \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformValidator.DeleteCustomObjectBySlugParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomDataDeleteSchema>} - Success response
   * @name deleteCustomObjectBySlug
   * @summary: Delete custom object
   * @description: Custom object entries can be deleted by providing the delete ID using this endpoint. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/deleteCustomObjectBySlug/).
   */
  async deleteCustomObjectBySlug(
    { definitionSlug, slug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformValidator.deleteCustomObjectBySlug().validate(
      {
        definitionSlug,
        slug,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformValidator.deleteCustomObjectBySlug().validate(
      {
        definitionSlug,
        slug,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > deleteCustomObjectBySlug \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v2.0/company/${this.config.companyId}/customobjects/definition/${definitionSlug}/entries/${slug}`,
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.CustomDataDeleteSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > deleteCustomObjectBySlug \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformValidator.DeleteCustomObjectDefinitionBySlugParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomObjectDefinitionDeleteResponseSchema>}
   *   - Success response
   *
   * @name deleteCustomObjectDefinitionBySlug
   * @summary: Delete custom object definition
   * @description: Custom object definitions can be deleted using this endpoint by providing the definition ID. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/deleteCustomObjectDefinitionBySlug/).
   */
  async deleteCustomObjectDefinitionBySlug(
    { slug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformValidator.deleteCustomObjectDefinitionBySlug().validate(
      {
        slug,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformValidator.deleteCustomObjectDefinitionBySlug().validate(
      {
        slug,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > deleteCustomObjectDefinitionBySlug \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v2.0/company/${this.config.companyId}/customobjects/definition/${slug}`,
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.CustomObjectDefinitionDeleteResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > deleteCustomObjectDefinitionBySlug \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformValidator.ExportCustomObjectEntriesBySlugParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomObjectBulkEntryInitiateDownload>}
   *   - Success response
   *
   * @name exportCustomObjectEntriesBySlug
   * @summary: Initiate download for bulk custom object entries
   * @description: Custom object bulk export of bulk entries can be perform using this endpoint. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/exportCustomObjectEntriesBySlug/).
   */
  async exportCustomObjectEntriesBySlug(
    { slug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformValidator.exportCustomObjectEntriesBySlug().validate(
      {
        slug,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformValidator.exportCustomObjectEntriesBySlug().validate(
      {
        slug,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > exportCustomObjectEntriesBySlug \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v2.0/company/${this.config.companyId}/customobjects/definition/${slug}/bulk/download`,
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.CustomObjectBulkEntryInitiateDownload().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > exportCustomObjectEntriesBySlug \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformValidator.GetAllResourceDefinitionsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<Object>} - Success response
   * @name getAllResourceDefinitions
   * @summary: Get all resource defination
   * @description: Retrieve translation schemas and configurations for resources. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getAllResourceDefinitions/).
   */
  async getAllResourceDefinitions(
    { translatableResourceId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformValidator.getAllResourceDefinitions().validate(
      {
        translatableResourceId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformValidator.getAllResourceDefinitions().validate(
      {
        translatableResourceId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getAllResourceDefinitions \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["translatable_resource_id"] = translatableResourceId;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/translatable/resource/definitions`,
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const { error: res_error } = Joi.any().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getAllResourceDefinitions \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformValidator.GetAllSectionsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<Object>} - Success response
   * @name getAllSections
   * @summary: List all translatable content sections
   * @description: Retrieve all translatable content sections for organization. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getAllSections/).
   */
  async getAllSections(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ContentPlatformValidator.getAllSections().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformValidator.getAllSections().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getAllSections \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/translatable/sections`,
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const { error: res_error } = Joi.any().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getAllSections \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformValidator.GetAllTranslatableResourcesParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<Object>} - Success response
   * @name getAllTranslatableResources
   * @summary: List all translatable resources
   * @description: Retrieve all translatable content resources for the company. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getAllTranslatableResources/).
   */
  async getAllTranslatableResources(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformValidator.getAllTranslatableResources().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformValidator.getAllTranslatableResources().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getAllTranslatableResources \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/translatable/resources`,
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const { error: res_error } = Joi.any().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getAllTranslatableResources \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformValidator.GetCompanyLanguagesParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<Object>} - Success response
   * @name getCompanyLanguages
   * @summary: Get company languages
   * @description: Retrieve language configurations and settings for the specified company. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getCompanyLanguages/).
   */
  async getCompanyLanguages(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ContentPlatformValidator.getCompanyLanguages().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformValidator.getCompanyLanguages().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getCompanyLanguages \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/languages`,
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const { error: res_error } = Joi.any().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getCompanyLanguages \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformValidator.GetCompanyResourceTranslationParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.ResourceTranslation>} - Success response
   * @name getCompanyResourceTranslation
   * @summary: Get company translations
   * @description: Fetch translations for company-level resources. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getCompanyResourceTranslation/).
   */
  async getCompanyResourceTranslation(
    { locale, type, resourceId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformValidator.getCompanyResourceTranslation().validate(
      {
        locale,
        type,
        resourceId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformValidator.getCompanyResourceTranslation().validate(
      {
        locale,
        type,
        resourceId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getCompanyResourceTranslation \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["locale"] = locale;
    query_params["type"] = type;
    query_params["resource_id"] = resourceId;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/resource/translations`,
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.ResourceTranslation().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getCompanyResourceTranslation \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformValidator.GetCustomFieldDefinitionByResourceParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomFieldDefinitionsSchema>} -
   *   Success response
   * @name getCustomFieldDefinitionByResource
   * @summary: Get custom fields definitions for a given resource type
   * @description: Custom field definitions enable you to include data validation for custom fields, and enable sellers to add custom fields values for resources. With the help of this seller can retrive list of custom field definitions list. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getCustomFieldDefinitionByResource/).
   */
  async getCustomFieldDefinitionByResource(
    {
      pageNo,
      pageSize,
      resource,
      types,
      search,
      slugs,
      namespaces,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformValidator.getCustomFieldDefinitionByResource().validate(
      {
        pageNo,
        pageSize,
        resource,
        types,
        search,
        slugs,
        namespaces,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformValidator.getCustomFieldDefinitionByResource().validate(
      {
        pageNo,
        pageSize,
        resource,
        types,
        search,
        slugs,
        namespaces,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getCustomFieldDefinitionByResource \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["types"] = types;
    query_params["search"] = search;
    query_params["slugs"] = slugs;
    query_params["namespaces"] = namespaces;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v2.0/company/${this.config.companyId}/customfields/resource/${resource}/definition`,
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.CustomFieldDefinitionsSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getCustomFieldDefinitionByResource \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformValidator.GetCustomFieldDefinitionBySlugParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.MetaFieldDefinitionDetailResSchema>}
   *   - Success response
   *
   * @name getCustomFieldDefinitionBySlug
   * @summary: Get custom fields definition by resource, slug and namespace
   * @description: Custom field definitions can be retrived from this using its slug, namespace and resource - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getCustomFieldDefinitionBySlug/).
   */
  async getCustomFieldDefinitionBySlug(
    { slug, resource, namespace, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformValidator.getCustomFieldDefinitionBySlug().validate(
      {
        slug,
        resource,
        namespace,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformValidator.getCustomFieldDefinitionBySlug().validate(
      {
        slug,
        resource,
        namespace,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getCustomFieldDefinitionBySlug \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v2.0/company/${this.config.companyId}/customfields/resource/${resource}/namespace/${namespace}/definition/${slug}`,
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.MetaFieldDefinitionDetailResSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getCustomFieldDefinitionBySlug \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformValidator.GetCustomFieldDefinitionsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomFieldDefinitionsSchema>} -
   *   Success response
   * @name getCustomFieldDefinitions
   * @summary: Get custom fields definitions
   * @description: Custom field definitions enable you to include data validation for custom fields, and enable sellers to add custom fields values for resources. With the help of this seller can retrive list of custom field definitions list. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getCustomFieldDefinitions/).
   */
  async getCustomFieldDefinitions(
    {
      pageNo,
      pageSize,
      resources,
      types,
      search,
      slugs,
      namespaces,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformValidator.getCustomFieldDefinitions().validate(
      {
        pageNo,
        pageSize,
        resources,
        types,
        search,
        slugs,
        namespaces,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformValidator.getCustomFieldDefinitions().validate(
      {
        pageNo,
        pageSize,
        resources,
        types,
        search,
        slugs,
        namespaces,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getCustomFieldDefinitions \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["resources"] = resources;
    query_params["types"] = types;
    query_params["search"] = search;
    query_params["slugs"] = slugs;
    query_params["namespaces"] = namespaces;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v2.0/company/${this.config.companyId}/customfields/definition`,
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.CustomFieldDefinitionsSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getCustomFieldDefinitions \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformValidator.GetCustomFieldTypesParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.MetafieldTypesSchema>} - Success response
   * @name getCustomFieldTypes
   * @summary: Get custom field types
   * @description: Each custom field and custom field definition has a type, which defines the type of information that it can store. The custom field types have built-in validation. This api will give list of supported custom fields types - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getCustomFieldTypes/).
   */
  async getCustomFieldTypes(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ContentPlatformValidator.getCustomFieldTypes().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformValidator.getCustomFieldTypes().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getCustomFieldTypes \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/metafields/types`,
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.MetafieldTypesSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getCustomFieldTypes \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformValidator.GetCustomFieldsByResourceSlugParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomFieldsResponseByResourceIdSchema>}
   *   - Success response
   *
   * @name getCustomFieldsByResourceSlug
   * @summary: Get list of custom fields of given resource and resource slug
   * @description: Retrieves a list of custom fields attached to a particular resource by using the resource and resource slug. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getCustomFieldsByResourceSlug/).
   */
  async getCustomFieldsByResourceSlug(
    { resource, resourceSlug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformValidator.getCustomFieldsByResourceSlug().validate(
      {
        resource,
        resourceSlug,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformValidator.getCustomFieldsByResourceSlug().validate(
      {
        resource,
        resourceSlug,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getCustomFieldsByResourceSlug \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v2.0/company/${this.config.companyId}/customfields/resource/${resource}/${resourceSlug}`,
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.CustomFieldsResponseByResourceIdSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getCustomFieldsByResourceSlug \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformValidator.GetCustomObjectBySlugParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomObjectBySlugSchema>} -
   *   Success response
   * @name getCustomObjectBySlug
   * @summary: Get custom object details
   * @description: Details of a custom object entry can be obtained using this endpoint. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getCustomObjectBySlug/).
   */
  async getCustomObjectBySlug(
    { definitionSlug, slug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ContentPlatformValidator.getCustomObjectBySlug().validate(
      {
        definitionSlug,
        slug,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformValidator.getCustomObjectBySlug().validate(
      {
        definitionSlug,
        slug,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getCustomObjectBySlug \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v2.0/company/${this.config.companyId}/customobjects/definition/${definitionSlug}/entries/${slug}`,
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.CustomObjectBySlugSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getCustomObjectBySlug \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformValidator.GetCustomObjectDefinitionBySlugParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomObjectDefinitionSlugSchema>}
   *   - Success response
   *
   * @name getCustomObjectDefinitionBySlug
   * @summary: Get custom object definition
   * @description: Custom object definitions can be fetched using their custom object definition slug. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getCustomObjectDefinitionBySlug/).
   */
  async getCustomObjectDefinitionBySlug(
    { slug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformValidator.getCustomObjectDefinitionBySlug().validate(
      {
        slug,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformValidator.getCustomObjectDefinitionBySlug().validate(
      {
        slug,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getCustomObjectDefinitionBySlug \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v2.0/company/${this.config.companyId}/customobjects/definition/${slug}`,
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.CustomObjectDefinitionSlugSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getCustomObjectDefinitionBySlug \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformValidator.GetCustomObjectDefinitionsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomObjectDefinitionsSchema>} -
   *   Success response
   * @name getCustomObjectDefinitions
   * @summary: Get custom object definitions
   * @description: Custom object definition lists can be obtained using this endpoint. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getCustomObjectDefinitions/).
   */
  async getCustomObjectDefinitions(
    { pageNo, pageSize, search, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformValidator.getCustomObjectDefinitions().validate(
      {
        pageNo,
        pageSize,
        search,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformValidator.getCustomObjectDefinitions().validate(
      {
        pageNo,
        pageSize,
        search,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getCustomObjectDefinitions \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["search"] = search;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v2.0/company/${this.config.companyId}/customobjects/definition`,
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.CustomObjectDefinitionsSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getCustomObjectDefinitions \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformValidator.GetCustomObjectsBySlugParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomObjectsSchema>} - Success response
   * @name getCustomObjectsBySlug
   * @summary: Get list of custom objects under a certain custom object definition
   * @description: Custom object entries can fetch using this endpoint. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getCustomObjectsBySlug/).
   */
  async getCustomObjectsBySlug(
    { pageNo, pageSize, definitionSlug, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformValidator.getCustomObjectsBySlug().validate(
      {
        pageNo,
        pageSize,
        definitionSlug,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformValidator.getCustomObjectsBySlug().validate(
      {
        pageNo,
        pageSize,
        definitionSlug,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getCustomObjectsBySlug \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v2.0/company/${this.config.companyId}/customobjects/definition/${definitionSlug}/entries`,
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.CustomObjectsSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getCustomObjectsBySlug \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformValidator.GetJobsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomObjectBulkEntry>} - Success response
   * @name getJobs
   * @summary: Get bulk import and export job list
   * @description: Custom object bulk import and export jobs status and details can be obtained using this endpoint. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getJobs/).
   */
  async getJobs(
    { page, pageSize, actionType, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ContentPlatformValidator.getJobs().validate(
      {
        page,
        pageSize,
        actionType,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = ContentPlatformValidator.getJobs().validate(
      {
        page,
        pageSize,
        actionType,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getJobs \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page"] = page;
    query_params["page_size"] = pageSize;
    query_params["action_type"] = actionType;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/metaobjects/jobs`,
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.CustomObjectBulkEntry().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getJobs \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformValidator.GetResourceDefinitionByIdParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.ResourceDefinition>} - Success response
   * @name getResourceDefinitionById
   * @summary: Get resource definitions details
   * @description: Fetch specific resource definition and its translation schema. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getResourceDefinitionById/).
   */
  async getResourceDefinitionById(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformValidator.getResourceDefinitionById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformValidator.getResourceDefinitionById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getResourceDefinitionById \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/translatable/resource/definitions/${id}`,
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.ResourceDefinition().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getResourceDefinitionById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformValidator.GetResourcesParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.ResourcesSchema>} - Success response
   * @name getResources
   * @summary: Get resources
   * @description: Use this API to retrieve the resources, such as products, collections, customers, selling locations, etc. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getResources/).
   */
  async getResources(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ContentPlatformValidator.getResources().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformValidator.getResources().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getResources \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/metafields/resources`,
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.ResourcesSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getResources \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformValidator.GetSectionByIdParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.TranslatableSection>} - Success response
   * @name getSectionById
   * @summary: Retrieve details of a specific translatable section by its ID.
   * @description: Fetch details of a specific translatable section. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getSectionById/).
   */
  async getSectionById(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ContentPlatformValidator.getSectionById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformValidator.getSectionById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getSectionById \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/translatable/section/${id}`,
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.TranslatableSection().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getSectionById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformValidator.GetTranslatableResourceByIdParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.TranslatableResource>} - Success response
   * @name getTranslatableResourceById
   * @summary: Get translatable resource details
   * @description: Fetch details of a specific translatable resource. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getTranslatableResourceById/).
   */
  async getTranslatableResourceById(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformValidator.getTranslatableResourceById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformValidator.getTranslatableResourceById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getTranslatableResourceById \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/translatable/resources/${id}`,
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.TranslatableResource().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getTranslatableResourceById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformValidator.GetTranslatableResourcesBySectionIdParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<Object>} - Success response
   * @name getTranslatableResourcesBySectionId
   * @summary: Get section resources
   * @description: Retrieve all resources within a specific section. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getTranslatableResourcesBySectionId/).
   */
  async getTranslatableResourcesBySectionId(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformValidator.getTranslatableResourcesBySectionId().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformValidator.getTranslatableResourcesBySectionId().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getTranslatableResourcesBySectionId \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/translatable/section/${id}/resources`,
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const { error: res_error } = Joi.any().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getTranslatableResourcesBySectionId \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformValidator.ImportCustomObjectEntriesBySlugParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomObjectEntryBulkUploadDetails>}
   *   - Success response
   *
   * @name importCustomObjectEntriesBySlug
   * @summary: Bulk custom object entries upload
   * @description: Custom object bulk import of bulk entries can be performed using this endpoint. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/importCustomObjectEntriesBySlug/).
   */
  async importCustomObjectEntriesBySlug(
    { slug, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformValidator.importCustomObjectEntriesBySlug().validate(
      {
        slug,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformValidator.importCustomObjectEntriesBySlug().validate(
      {
        slug,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > importCustomObjectEntriesBySlug \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v2.0/company/${this.config.companyId}/customobjects/definition/${slug}/bulk/upload`,
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.CustomObjectEntryBulkUploadDetails().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > importCustomObjectEntriesBySlug \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformValidator.SampleCustomObjectBulkEntryBySlugParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<string>} - Success response
   * @name sampleCustomObjectBulkEntryBySlug
   * @summary: Download sample for custom object bulk entry
   * @description: Sample files for custom object bulk import can be obtained from this endpoint. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/sampleCustomObjectBulkEntryBySlug/).
   */
  async sampleCustomObjectBulkEntryBySlug(
    { slug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformValidator.sampleCustomObjectBulkEntryBySlug().validate(
      {
        slug,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformValidator.sampleCustomObjectBulkEntryBySlug().validate(
      {
        slug,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > sampleCustomObjectBulkEntryBySlug \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v2.0/company/${this.config.companyId}/customobjects/definition/${slug}/bulk/sample`,
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const { error: res_error } = Joi.string()
      .allow("")
      .validate(responseData, { abortEarly: false, allowUnknown: true });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > sampleCustomObjectBulkEntryBySlug \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformValidator.UpdateCompanyLanguageDefaultParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CompanyLanguage>} - Success response
   * @name updateCompanyLanguageDefault
   * @summary: Set default language
   * @description: Update default language settings for the company. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/updateCompanyLanguageDefault/).
   */
  async updateCompanyLanguageDefault(
    { locale, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformValidator.updateCompanyLanguageDefault().validate(
      {
        locale,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformValidator.updateCompanyLanguageDefault().validate(
      {
        locale,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > updateCompanyLanguageDefault \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/languages/${locale}`,
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.CompanyLanguage().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > updateCompanyLanguageDefault \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformValidator.UpdateCompanyResourceTranslationParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.ResourceTranslation>} - Success response
   * @name updateCompanyResourceTranslation
   * @summary: Update company translation
   * @description: Update existing translations for company resources. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/updateCompanyResourceTranslation/).
   */
  async updateCompanyResourceTranslation(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformValidator.updateCompanyResourceTranslation().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformValidator.updateCompanyResourceTranslation().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > updateCompanyResourceTranslation \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/resource/translations/${id}`,
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.ResourceTranslation().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > updateCompanyResourceTranslation \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformValidator.UpdateCustomFieldByResourceSlugParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomFieldsResponseByResourceIdSchema>}
   *   - Success response
   *
   * @name updateCustomFieldByResourceSlug
   * @summary: Update custom field entries for gives resource and resource slug
   * @description: You can add a custom field using this endpoint to any resource by providing the resource slug. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/updateCustomFieldByResourceSlug/).
   */
  async updateCustomFieldByResourceSlug(
    { resource, resourceSlug, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformValidator.updateCustomFieldByResourceSlug().validate(
      {
        resource,
        resourceSlug,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformValidator.updateCustomFieldByResourceSlug().validate(
      {
        resource,
        resourceSlug,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > updateCustomFieldByResourceSlug \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v2.0/company/${this.config.companyId}/customfields/resource/${resource}/${resourceSlug}`,
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.CustomFieldsResponseByResourceIdSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > updateCustomFieldByResourceSlug \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformValidator.UpdateCustomFieldDefinitionBySlugParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomFieldDefinitionDetailResSchema>}
   *   - Success response
   *
   * @name updateCustomFieldDefinitionBySlug
   * @summary: Update custom field definition
   * @description: Custom fields definition can be update using this api, You can update custom field definition name and description. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/updateCustomFieldDefinitionBySlug/).
   */
  async updateCustomFieldDefinitionBySlug(
    { slug, resource, namespace, body, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformValidator.updateCustomFieldDefinitionBySlug().validate(
      {
        slug,
        resource,
        namespace,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformValidator.updateCustomFieldDefinitionBySlug().validate(
      {
        slug,
        resource,
        namespace,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > updateCustomFieldDefinitionBySlug \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v2.0/company/${this.config.companyId}/customfields/resource/${resource}/namespace/${namespace}/definition/${slug}`,
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.CustomFieldDefinitionDetailResSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > updateCustomFieldDefinitionBySlug \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformValidator.UpdateCustomObjectBySlugParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomObjectBySlugSchema>} -
   *   Success response
   * @name updateCustomObjectBySlug
   * @summary: Update custom object details
   * @description: Custom object entries can be updated using this endpoint. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/updateCustomObjectBySlug/).
   */
  async updateCustomObjectBySlug(
    { definitionSlug, slug, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformValidator.updateCustomObjectBySlug().validate(
      {
        definitionSlug,
        slug,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformValidator.updateCustomObjectBySlug().validate(
      {
        definitionSlug,
        slug,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > updateCustomObjectBySlug \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v2.0/company/${this.config.companyId}/customobjects/definition/${definitionSlug}/entries/${slug}`,
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.CustomObjectBySlugSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > updateCustomObjectBySlug \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformValidator.UpdateCustomObjectDefinitionBySlugParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomObjectDefinitionSlugSchema>}
   *   - Success response
   *
   * @name updateCustomObjectDefinitionBySlug
   * @summary: Update custom object definition
   * @description: Custom object definitions can be updated using this endpoint. You can update the name and description of the custom object and add more custom field definitions to the existing custom object. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/updateCustomObjectDefinitionBySlug/).
   */
  async updateCustomObjectDefinitionBySlug(
    { slug, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformValidator.updateCustomObjectDefinitionBySlug().validate(
      {
        slug,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformValidator.updateCustomObjectDefinitionBySlug().validate(
      {
        slug,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > updateCustomObjectDefinitionBySlug \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v2.0/company/${this.config.companyId}/customobjects/definition/${slug}`,
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.CustomObjectDefinitionSlugSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > updateCustomObjectDefinitionBySlug \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = Content;
