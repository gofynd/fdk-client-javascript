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
   * @param {ContentPlatformValidator.CreateCustomFieldDefinitionParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomFieldDefinitionDetailResSchema>}
   *   - Success response
   *
   * @name createCustomFieldDefinition
   * @summary: Create custom field definition for a given resource type
   * @description: You can create custom fields definition to any resource so you can extend property of resource. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/createCustomFieldDefinition/).
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
   * @description: Custom object entries against the custom object definition can be added using this API. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/createCustomObjectBySlug/).
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
   * @description: Create a custom object that will have a collection of custom fields and can be used anywhere in the custom field for any resource. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/createCustomObjectDefinition/).
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
   * @param {ContentPlatformValidator.DeleteCustomFieldDefinitionBySlugParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomDataDeleteSchema>} - Success response
   * @name deleteCustomFieldDefinitionBySlug
   * @summary: Delete custom fields definition
   * @description: Custom field definition and its assosiated custom fields value can be deleted using this api on the basis of definition id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteCustomFieldDefinitionBySlug/).
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
   * @description: Use this API to delete the custom fields for given resource in param. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteCustomFieldsByResourceSlug/).
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
   * @description: Custom object entries can be deleted by providing the delete ID using this endpoint. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteCustomObjectBySlug/).
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
   * @description: Custom object definitions can be deleted using this endpoint by providing the definition ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteCustomObjectDefinitionBySlug/).
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
   * @description: Custom object bulk export of bulk entries can be perform using this endpoint. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/exportCustomObjectEntriesBySlug/).
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
   * @param {ContentPlatformValidator.GetCustomFieldDefinitionByResourceParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomFieldDefinitionsSchema>} -
   *   Success response
   * @name getCustomFieldDefinitionByResource
   * @summary: Get custom fields definitions for a given resource type
   * @description: Custom field definitions enable you to include data validation for custom fields, and enable sellers to add custom fields values for resources. With the help of this seller can retrive list of custom field definitions list. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getCustomFieldDefinitionByResource/).
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
   * @description: Custom field definitions can be retrived from this using its slug, namespace and resource - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getCustomFieldDefinitionBySlug/).
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
   * @description: Custom field definitions enable you to include data validation for custom fields, and enable sellers to add custom fields values for resources. With the help of this seller can retrive list of custom field definitions list. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getCustomFieldDefinitions/).
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
   * @description: Each custom field and custom field definition has a type, which defines the type of information that it can store. The custom field types have built-in validation. This api will give list of supported custom fields types - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getCustomFieldTypes/).
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
   * @description: Retrieves a list of custom fields attached to a particular resource by using the resource and resource slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getCustomFieldsByResourceSlug/).
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
   * @description: Details of a custom object entry can be obtained using this endpoint. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getCustomObjectBySlug/).
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
   * @description: Custom object definitions can be fetched using their custom object definition slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getCustomObjectDefinitionBySlug/).
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
   * @description: Custom object definition lists can be obtained using this endpoint. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getCustomObjectDefinitions/).
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
   * @description: Custom object entries can fetch using this endpoint. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getCustomObjectsBySlug/).
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
   * @description: Custom object bulk import and export jobs status and details can be obtained using this endpoint. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getJobs/).
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
   * @param {ContentPlatformValidator.GetResourcesParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.ResourcesSchema>} - Success response
   * @name getResources
   * @summary: Get resources
   * @description: Use this API to retrieve the resources, such as products, collections, customers, selling locations, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getResources/).
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
   * @description: Custom object bulk import of bulk entries can be performed using this endpoint. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/importCustomObjectEntriesBySlug/).
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
   * @description: Sample files for custom object bulk import can be obtained from this endpoint. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/sampleCustomObjectBulkEntryBySlug/).
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
   * @description: You can add a custom field using this endpoint to any resource by providing the resource slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateCustomFieldByResourceSlug/).
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
   * @description: Custom fields definition can be update using this api, You can update custom field definition name and description. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateCustomFieldDefinitionBySlug/).
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
   * @description: Custom object entries can be updated using this endpoint. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateCustomObjectBySlug/).
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
   * @description: Custom object definitions can be updated using this endpoint. You can update the name and description of the custom object and add more custom field definitions to the existing custom object. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateCustomObjectDefinitionBySlug/).
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
