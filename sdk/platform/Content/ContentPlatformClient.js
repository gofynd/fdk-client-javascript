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
   * @param {ContentPlatformValidator.CreateCustomFieldByResourceIdParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomFieldsResponseByResourceIdSchema>}
   *   - Success response
   *
   * @name createCustomFieldByResourceId
   * @summary: Create custom field entries for gives resource and resource_id
   * @description: Use this API to create the custom field entry for given resource and resource_id in param. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/createCustomFieldByResourceId/).
   */
  async createCustomFieldByResourceId(
    { resource, resourceId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformValidator.createCustomFieldByResourceId().validate(
      {
        resource,
        resourceId,
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
    } = ContentPlatformValidator.createCustomFieldByResourceId().validate(
      {
        resource,
        resourceId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > createCustomFieldByResourceId \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/metafields/${resource}/${resourceId}`,
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
          message: `Response Validation Warnings for platform > Content > createCustomFieldByResourceId \n ${res_error}`,
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
   * @summary: Create custom field definition
   * @description: You can create custom fields definition to any resource so you can extend property of resource. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/createCustomFieldDefinition/).
   */
  async createCustomFieldDefinition(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformValidator.createCustomFieldDefinition().validate(
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
    } = ContentPlatformValidator.createCustomFieldDefinition().validate(
      {
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
      `/service/platform/content/v1.0/company/${this.config.companyId}/metafields/definitions`,
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
   * @param {ContentPlatformValidator.CreateCustomObjectParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomObjectSchema>} - Success response
   * @name createCustomObject
   * @summary: Create custom object entries
   * @description: Custom object entries against the custom object definition can be added using this API. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/createCustomObject/).
   */
  async createCustomObject(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ContentPlatformValidator.createCustomObject().validate(
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
    } = ContentPlatformValidator.createCustomObject().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > createCustomObject \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/metaobjects`,
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
          message: `Response Validation Warnings for platform > Content > createCustomObject \n ${res_error}`,
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
   * @returns {Promise<ContentPlatformModel.CustomObjectDefinitionSchema>} -
   *   Success response
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
      `/service/platform/content/v1.0/company/${this.config.companyId}/metaobjects/definitions`,
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
    } = ContentPlatformModel.CustomObjectDefinitionSchema().validate(
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
   * @param {ContentPlatformValidator.DeleteCustomFieldDefinitionParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomDataDeleteSchema>} - Success response
   * @name deleteCustomFieldDefinition
   * @summary: Delete custom fields definition
   * @description: Custom field definition and its assosiated custom fields value can be deleted using this api on the basis of definition id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteCustomFieldDefinition/).
   */
  async deleteCustomFieldDefinition(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformValidator.deleteCustomFieldDefinition().validate(
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
    } = ContentPlatformValidator.deleteCustomFieldDefinition().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > deleteCustomFieldDefinition \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/metafields/definitions/${id}`,
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
          message: `Response Validation Warnings for platform > Content > deleteCustomFieldDefinition \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformValidator.DeleteCustomFieldsByResourceIdParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomFieldsDeleteSchema>} -
   *   Success response
   * @name deleteCustomFieldsByResourceId
   * @summary: Delete custom fields of given resource and resource id
   * @description: Use this API to delete the custom fields for given resource in param. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteCustomFieldsByResourceId/).
   */
  async deleteCustomFieldsByResourceId(
    { resource, resourceId, ids, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformValidator.deleteCustomFieldsByResourceId().validate(
      {
        resource,
        resourceId,
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
    } = ContentPlatformValidator.deleteCustomFieldsByResourceId().validate(
      {
        resource,
        resourceId,
        ids,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > deleteCustomFieldsByResourceId \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["ids"] = ids;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/metafields/${resource}/${resourceId}`,
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
          message: `Response Validation Warnings for platform > Content > deleteCustomFieldsByResourceId \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformValidator.DeleteCustomObjectParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomDataDeleteSchema>} - Success response
   * @name deleteCustomObject
   * @summary: Delete custom object
   * @description: Custom object entries can be deleted by providing the delete ID using this endpoint. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteCustomObject/).
   */
  async deleteCustomObject(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ContentPlatformValidator.deleteCustomObject().validate(
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
    } = ContentPlatformValidator.deleteCustomObject().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > deleteCustomObject \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/metaobjects/${id}`,
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
          message: `Response Validation Warnings for platform > Content > deleteCustomObject \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformValidator.DeleteCustomObjectDefinitionParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomObjectDefinitionDeleteResponseSchema>}
   *   - Success response
   *
   * @name deleteCustomObjectDefinition
   * @summary: delete custom object definition
   * @description: Custom object definitions can be deleted using this endpoint by providing the definition ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteCustomObjectDefinition/).
   */
  async deleteCustomObjectDefinition(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformValidator.deleteCustomObjectDefinition().validate(
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
    } = ContentPlatformValidator.deleteCustomObjectDefinition().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > deleteCustomObjectDefinition \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/metaobjects/definitions/${id}`,
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
          message: `Response Validation Warnings for platform > Content > deleteCustomObjectDefinition \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformValidator.ExportCustomObjectEntriesParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomObjectBulkEntryInitiateDownload>}
   *   - Success response
   *
   * @name exportCustomObjectEntries
   * @summary: Initiate download for bulk custom object entries
   * @description: Custom object bulk export of bulk entries can be perform using this endpoint. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/exportCustomObjectEntries/).
   */
  async exportCustomObjectEntries(
    { definitionId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformValidator.exportCustomObjectEntries().validate(
      {
        definitionId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformValidator.exportCustomObjectEntries().validate(
      {
        definitionId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > exportCustomObjectEntries \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/metaobjects/bulk/${definitionId}/download`,
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
          message: `Response Validation Warnings for platform > Content > exportCustomObjectEntries \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformValidator.GetCustomFieldDefinitionParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomFieldDefinitionDetailResSchema>}
   *   - Success response
   *
   * @name getCustomFieldDefinition
   * @summary: Get custom fields definition
   * @description: Custom field definitions can be fetch using definition id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getCustomFieldDefinition/).
   */
  async getCustomFieldDefinition(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformValidator.getCustomFieldDefinition().validate(
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
    } = ContentPlatformValidator.getCustomFieldDefinition().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getCustomFieldDefinition \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/metafields/definitions/${id}`,
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
          message: `Response Validation Warnings for platform > Content > getCustomFieldDefinition \n ${res_error}`,
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
    { pageNo, pageSize, resources, types, search, slugs, requestHeaders } = {
      requestHeaders: {},
    },
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

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/metafields/definitions`,
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
   * @param {ContentPlatformValidator.GetCustomFieldJobsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomFieldBulkEntry>} - Success response
   * @name getCustomFieldJobs
   * @summary: Fetch bulk import and export job list.
   * @description: Use this api to get list of jobs of bulk import and exports - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getCustomFieldJobs/).
   */
  async getCustomFieldJobs(
    { page, pageSize, actionType, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ContentPlatformValidator.getCustomFieldJobs().validate(
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
    const {
      error: warrning,
    } = ContentPlatformValidator.getCustomFieldJobs().validate(
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
        message: `Parameter Validation warrnings for platform > Content > getCustomFieldJobs \n ${warrning}`,
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
      `/service/platform/content/v1.0/company/${this.config.companyId}/metafields/jobs`,
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
    } = ContentPlatformModel.CustomFieldBulkEntry().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getCustomFieldJobs \n ${res_error}`,
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
   * @param {ContentPlatformValidator.GetCustomFieldsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomFieldsResponseSchema>} -
   *   Success response
   * @name getCustomFields
   * @summary: Get list of custom fields of given resource
   * @description: Retrieves a list of custom fields attached to a particular resource by using the resource. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getCustomFields/).
   */
  async getCustomFields(
    { resource, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ContentPlatformValidator.getCustomFields().validate(
      {
        resource,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformValidator.getCustomFields().validate(
      {
        resource,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getCustomFields \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/metafields/${resource}`,
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
    } = ContentPlatformModel.CustomFieldsResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getCustomFields \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformValidator.GetCustomFieldsByResourceIdParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomFieldsResponseByResourceIdSchema>}
   *   - Success response
   *
   * @name getCustomFieldsByResourceId
   * @summary: Get list of custom fields of given resource and resource id
   * @description: Retrieves a list of custom fields attached to a particular resource by using the resource and resource id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getCustomFieldsByResourceId/).
   */
  async getCustomFieldsByResourceId(
    { resource, resourceId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformValidator.getCustomFieldsByResourceId().validate(
      {
        resource,
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
    } = ContentPlatformValidator.getCustomFieldsByResourceId().validate(
      {
        resource,
        resourceId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getCustomFieldsByResourceId \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/metafields/${resource}/${resourceId}`,
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
          message: `Response Validation Warnings for platform > Content > getCustomFieldsByResourceId \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformValidator.GetCustomObjectParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomObjectByIdSchema>} - Success response
   * @name getCustomObject
   * @summary: Get custom object details
   * @description: Details of custom objects, their field details, definitions, and references can be obtained using this endpoint. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getCustomObject/).
   */
  async getCustomObject(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ContentPlatformValidator.getCustomObject().validate(
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
    } = ContentPlatformValidator.getCustomObject().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getCustomObject \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/metaobjects/${id}`,
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
    } = ContentPlatformModel.CustomObjectByIdSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getCustomObject \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformValidator.GetCustomObjectDefinitionParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomObjectDefinitionSchema>} -
   *   Success response
   * @name getCustomObjectDefinition
   * @summary: Get custom object definition
   * @description: Custom object definitions can be fetched using their definition ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getCustomObjectDefinition/).
   */
  async getCustomObjectDefinition(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformValidator.getCustomObjectDefinition().validate(
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
    } = ContentPlatformValidator.getCustomObjectDefinition().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getCustomObjectDefinition \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/metaobjects/definitions/${id}`,
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
    } = ContentPlatformModel.CustomObjectDefinitionSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getCustomObjectDefinition \n ${res_error}`,
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
   * @description: Custom object definition lists can be obtained using this endpoint - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getCustomObjectDefinitions/).
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
      `/service/platform/content/v1.0/company/${this.config.companyId}/metaobjects/definitions`,
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
   * @param {ContentPlatformValidator.GetCustomObjectsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomObjectsSchema>} - Success response
   * @name getCustomObjects
   * @summary: Get list of custom objects
   * @description: Custom object entries can fetch using this endpoint. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getCustomObjects/).
   */
  async getCustomObjects(
    { pageNo, pageSize, definitionId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ContentPlatformValidator.getCustomObjects().validate(
      {
        pageNo,
        pageSize,
        definitionId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformValidator.getCustomObjects().validate(
      {
        pageNo,
        pageSize,
        definitionId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getCustomObjects \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["definition_id"] = definitionId;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/metaobjects`,
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
          message: `Response Validation Warnings for platform > Content > getCustomObjects \n ${res_error}`,
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
   * @param {ContentPlatformValidator.ImportCustomObjectEntriesParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomObjectEntryBulkUploadResponse>}
   *   - Success response
   *
   * @name importCustomObjectEntries
   * @summary: Bulk custom object entries upload
   * @description: Custom object bulk import of bulk entries can be performed using this endpoint. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/importCustomObjectEntries/).
   */
  async importCustomObjectEntries(
    { definitionId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformValidator.importCustomObjectEntries().validate(
      {
        definitionId,
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
    } = ContentPlatformValidator.importCustomObjectEntries().validate(
      {
        definitionId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > importCustomObjectEntries \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/metaobjects/bulk/${definitionId}/upload`,
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
    } = ContentPlatformModel.CustomObjectEntryBulkUploadResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > importCustomObjectEntries \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformValidator.SampleCustomObjectBulkEntryParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<string>} - Success response
   * @name sampleCustomObjectBulkEntry
   * @summary: Download sample for custom object bulk entry
   * @description: Sample files for custom object bulk import can be obtained from this endpoint. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/sampleCustomObjectBulkEntry/).
   */
  async sampleCustomObjectBulkEntry(
    { definitionId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformValidator.sampleCustomObjectBulkEntry().validate(
      {
        definitionId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformValidator.sampleCustomObjectBulkEntry().validate(
      {
        definitionId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > sampleCustomObjectBulkEntry \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/metaobjects/bulk/${definitionId}/sample`,
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
          message: `Response Validation Warnings for platform > Content > sampleCustomObjectBulkEntry \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformValidator.UpdateCustomFieldByResourceIdParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomFieldsResponseByResourceIdSchema>}
   *   - Success response
   *
   * @name updateCustomFieldByResourceId
   * @summary: Update custom field entries for gives resource and resource_id
   * @description: You can edit a custom field using this endpoint to any resource by providing the resource ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateCustomFieldByResourceId/).
   */
  async updateCustomFieldByResourceId(
    { resource, resourceId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformValidator.updateCustomFieldByResourceId().validate(
      {
        resource,
        resourceId,
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
    } = ContentPlatformValidator.updateCustomFieldByResourceId().validate(
      {
        resource,
        resourceId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > updateCustomFieldByResourceId \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/metafields/${resource}/${resourceId}`,
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
          message: `Response Validation Warnings for platform > Content > updateCustomFieldByResourceId \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformValidator.UpdateCustomFieldDefinitionParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomFieldDefinitionDetailResSchema>}
   *   - Success response
   *
   * @name updateCustomFieldDefinition
   * @summary: Update custom field definition
   * @description: Custom fields definition can be update using this api, You can update custom field definition name and description. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateCustomFieldDefinition/).
   */
  async updateCustomFieldDefinition(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformValidator.updateCustomFieldDefinition().validate(
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
    } = ContentPlatformValidator.updateCustomFieldDefinition().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > updateCustomFieldDefinition \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/metafields/definitions/${id}`,
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
          message: `Response Validation Warnings for platform > Content > updateCustomFieldDefinition \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformValidator.UpdateCustomObjectParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomObjectSchema>} - Success response
   * @name updateCustomObject
   * @summary: Update custom object details
   * @description: Custom object entries can be updated using this endpoint. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateCustomObject/).
   */
  async updateCustomObject(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ContentPlatformValidator.updateCustomObject().validate(
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
    } = ContentPlatformValidator.updateCustomObject().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > updateCustomObject \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/metaobjects/${id}`,
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
          message: `Response Validation Warnings for platform > Content > updateCustomObject \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformValidator.UpdateCustomObjectDefinitionParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomObjectDefinitionSchema>} -
   *   Success response
   * @name updateCustomObjectDefinition
   * @summary: Update custom object definition
   * @description: Custom object definitions can be updated using this endpoint. You can update the name and description of the custom object and add more custom field definitions to the existing custom object. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateCustomObjectDefinition/).
   */
  async updateCustomObjectDefinition(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformValidator.updateCustomObjectDefinition().validate(
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
    } = ContentPlatformValidator.updateCustomObjectDefinition().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > updateCustomObjectDefinition \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/metaobjects/definitions/${id}`,
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
    } = ContentPlatformModel.CustomObjectDefinitionSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > updateCustomObjectDefinition \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = Content;
