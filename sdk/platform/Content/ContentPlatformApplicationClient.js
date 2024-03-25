const PlatformAPIClient = require("../PlatformAPIClient");
const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const ContentPlatformApplicationValidator = require("./ContentPlatformApplicationValidator");
const ContentPlatformModel = require("./ContentPlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Content {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
   * @param {ContentPlatformApplicationValidator.AddDataLoaderParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.DataLoaderResponseSchema>} -
   *   Success response
   * @name addDataLoader
   * @summary: Add data loader.
   * @description: Create and add a new data loader. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/addDataLoader/).
   */
  async addDataLoader(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.addDataLoader().validate(
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
    } = ContentPlatformApplicationValidator.addDataLoader().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > addDataLoader \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/data-loader`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.DataLoaderResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > addDataLoader \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.AddFaqParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CreateFaqResponseSchema>} - Success response
   * @name addFaq
   * @summary: Add FAQ.
   * @description: Create and add a new FAQ. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/addFaq/).
   */
  async addFaq(
    { categoryId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ContentPlatformApplicationValidator.addFaq().validate(
      {
        categoryId,
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
    } = ContentPlatformApplicationValidator.addFaq().validate(
      {
        categoryId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > addFaq \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/category/${categoryId}/faq`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.CreateFaqResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > addFaq \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.AddInjectableTagParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.TagsSchema>} - Success response
   * @name addInjectableTag
   * @summary: Create HTML tag.
   * @description: Create and add a new injectable tag. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/addInjectableTag/).
   */
  async addInjectableTag(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.addInjectableTag().validate(
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
    } = ContentPlatformApplicationValidator.addInjectableTag().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > addInjectableTag \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/tags/add`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.TagsSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > addInjectableTag \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.AddPathRedirectionRulesParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CreatePathMappingSchema>} - Success response
   * @name addPathRedirectionRules
   * @summary: Add path redirection rules.
   * @description: Create and add rules for path redirection. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/addPathRedirectionRules/).
   */
  async addPathRedirectionRules(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.addPathRedirectionRules().validate(
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
    } = ContentPlatformApplicationValidator.addPathRedirectionRules().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > addPathRedirectionRules \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/path-mappings`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.CreatePathMappingSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > addPathRedirectionRules \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.CreateAnnouncementParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CreateAnnouncementSchema>} -
   *   Success response
   * @name createAnnouncement
   * @summary: Create announcement.
   * @description: Generate and add a new announcement. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/createAnnouncement/).
   */
  async createAnnouncement(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.createAnnouncement().validate(
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
    } = ContentPlatformApplicationValidator.createAnnouncement().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > createAnnouncement \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/announcements`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.CreateAnnouncementSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > createAnnouncement \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.CreateAppCustomFieldByResourceIdParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomFieldsResponseByResourceIdSchema>}
   *   - Success response
   *
   * @name createAppCustomFieldByResourceId
   * @summary: Create custom field entries for gives resource and resource_id
   * @description: Use this API to create the custom field entry for given resource and resource_id in param. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/createAppCustomFieldByResourceId/).
   */
  async createAppCustomFieldByResourceId(
    { resource, resourceId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.createAppCustomFieldByResourceId().validate(
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
    } = ContentPlatformApplicationValidator.createAppCustomFieldByResourceId().validate(
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
        message: `Parameter Validation warrnings for platform > Content > createAppCustomFieldByResourceId \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/metafields/${resource}/${resourceId}`,
      query_params,
      body,
      requestHeaders,
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
          message: `Response Validation Warnings for platform > Content > createAppCustomFieldByResourceId \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.CreateAppCustomFieldDefinitionParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomFieldDefinitionDetailResSchema>}
   *   - Success response
   *
   * @name createAppCustomFieldDefinition
   * @summary: Create custom field definition
   * @description: Use this API to create a custom field definition for your application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/createAppCustomFieldDefinition/).
   */
  async createAppCustomFieldDefinition(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.createAppCustomFieldDefinition().validate(
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
    } = ContentPlatformApplicationValidator.createAppCustomFieldDefinition().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > createAppCustomFieldDefinition \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/metafields/definitions`,
      query_params,
      body,
      requestHeaders,
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
          message: `Response Validation Warnings for platform > Content > createAppCustomFieldDefinition \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.CreateAppCustomObjectParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomObjectSchema>} - Success response
   * @name createAppCustomObject
   * @summary: Create custom object entries
   * @description: Use this API to create the custom object entry. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/createAppCustomObject/).
   */
  async createAppCustomObject(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.createAppCustomObject().validate(
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
    } = ContentPlatformApplicationValidator.createAppCustomObject().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > createAppCustomObject \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/metaobjects`,
      query_params,
      body,
      requestHeaders,
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
          message: `Response Validation Warnings for platform > Content > createAppCustomObject \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.CreateAppCustomObjectDefinitionParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomObjectDefinitionSchema>} -
   *   Success response
   * @name createAppCustomObjectDefinition
   * @summary: Create custom object definition
   * @description: Use this API to create custom object defintion - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/createAppCustomObjectDefinition/).
   */
  async createAppCustomObjectDefinition(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.createAppCustomObjectDefinition().validate(
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
    } = ContentPlatformApplicationValidator.createAppCustomObjectDefinition().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > createAppCustomObjectDefinition \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/metaobjects/definitions`,
      query_params,
      body,
      requestHeaders,
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
          message: `Response Validation Warnings for platform > Content > createAppCustomObjectDefinition \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.CreateBlogParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.BlogSchema>} - Success response
   * @name createBlog
   * @summary: Create blog.
   * @description: Generate and add a new blog. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/createBlog/).
   */
  async createBlog(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ContentPlatformApplicationValidator.createBlog().validate(
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
    } = ContentPlatformApplicationValidator.createBlog().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > createBlog \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/blogs`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.BlogSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > createBlog \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.CreateFaqCategoryParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CreateFaqCategorySchema>} - Success response
   * @name createFaqCategory
   * @summary: Create FAQ category.
   * @description: Generate and add a new FAQ category. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/createFaqCategory/).
   */
  async createFaqCategory(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.createFaqCategory().validate(
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
    } = ContentPlatformApplicationValidator.createFaqCategory().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > createFaqCategory \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/category`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.CreateFaqCategorySchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > createFaqCategory \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.CreateInjectableTagParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.TagsSchema>} - Success response
   * @name createInjectableTag
   * @summary: Create a tag
   * @description: Use this API to create the details of an tag. This includes the tag name, tag type (css/js), url and position of the tag. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/createInjectableTag/).
   */
  async createInjectableTag(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.createInjectableTag().validate(
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
    } = ContentPlatformApplicationValidator.createInjectableTag().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > createInjectableTag \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/tags`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.TagsSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > createInjectableTag \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.CreateLandingPageParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.LandingPageSchema>} - Success response
   * @name createLandingPage
   * @summary: Create landing page.
   * @description: Generate and add a new landing page. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/createLandingPage/).
   */
  async createLandingPage(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.createLandingPage().validate(
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
    } = ContentPlatformApplicationValidator.createLandingPage().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > createLandingPage \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/landing-page`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.LandingPageSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > createLandingPage \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.CreateNavigationParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.NavigationSchema>} - Success response
   * @name createNavigation
   * @summary: Create navigation items
   * @description: Generate and add a new navigation element. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/createNavigation/).
   */
  async createNavigation(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.createNavigation().validate(
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
    } = ContentPlatformApplicationValidator.createNavigation().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > createNavigation \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/navigations`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.NavigationSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > createNavigation \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.CreatePageParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.PageSchema>} - Success response
   * @name createPage
   * @summary: Create page.
   * @description: Generate and add a new page to the platform. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/createPage/).
   */
  async createPage(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ContentPlatformApplicationValidator.createPage().validate(
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
    } = ContentPlatformApplicationValidator.createPage().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > createPage \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v2.0/company/${this.config.companyId}/application/${this.applicationId}/pages`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.PageSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > createPage \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.CreatePagePreviewParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.PageSchema>} - Success response
   * @name createPagePreview
   * @summary: Create page preview.
   * @description: Generate and add a new page preview. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/createPagePreview/).
   */
  async createPagePreview(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.createPagePreview().validate(
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
    } = ContentPlatformApplicationValidator.createPagePreview().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > createPagePreview \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pages/preview`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.PageSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > createPagePreview \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.CreatePageV1Param} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.PageSchema>} - Success response
   * @name createPageV1
   * @summary: Create page.
   * @description: Generate and add a new page to the platform. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/createPageV1/).
   */
  async createPageV1(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.createPageV1().validate(
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
    } = ContentPlatformApplicationValidator.createPageV1().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > createPageV1 \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pages`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.PageSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > createPageV1 \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.CreateSEOMarkupSchemaParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.SEOSchemaMarkupTemplate>} - Success response
   * @name createSEOMarkupSchema
   * @summary: Create a SEO Markup schema Template of a page type for an application
   * @description: Use this API to create a SEO Markup schema Template inside an application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/createSEOMarkupSchema/).
   */
  async createSEOMarkupSchema(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.createSEOMarkupSchema().validate(
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
    } = ContentPlatformApplicationValidator.createSEOMarkupSchema().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > createSEOMarkupSchema \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/seo/schema`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.SEOSchemaMarkupTemplate().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > createSEOMarkupSchema \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.DeleteAllInjectableTagsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.TagsSchema>} - Success response
   * @name deleteAllInjectableTags
   * @summary: Delete tags in application
   * @description: Use this API to delete all the existing tags at once. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteAllInjectableTags/).
   */
  async deleteAllInjectableTags(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.deleteAllInjectableTags().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.deleteAllInjectableTags().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > deleteAllInjectableTags \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/tags`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.TagsSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > deleteAllInjectableTags \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.DeleteAnnouncementParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CreateAnnouncementSchema>} -
   *   Success response
   * @name deleteAnnouncement
   * @summary: Delete announcement.
   * @description: Remove a specific announcement. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteAnnouncement/).
   */
  async deleteAnnouncement(
    { announcementId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.deleteAnnouncement().validate(
      {
        announcementId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.deleteAnnouncement().validate(
      {
        announcementId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > deleteAnnouncement \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/announcements/${announcementId}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.CreateAnnouncementSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > deleteAnnouncement \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.DeleteAppCustomFieldDefinitionParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomDataDeleteSchema>} - Success response
   * @name deleteAppCustomFieldDefinition
   * @summary: Delete custom fields definition.
   * @description: Use this API to delete the definitions of custom fields using definition_id. This will also delete related custom fields entries related to this definition. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteAppCustomFieldDefinition/).
   */
  async deleteAppCustomFieldDefinition(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.deleteAppCustomFieldDefinition().validate(
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
    } = ContentPlatformApplicationValidator.deleteAppCustomFieldDefinition().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > deleteAppCustomFieldDefinition \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/metafields/definitions/${id}`,
      query_params,
      undefined,
      requestHeaders,
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
          message: `Response Validation Warnings for platform > Content > deleteAppCustomFieldDefinition \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.DeleteAppCustomFieldsByResourceIdParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomFieldsDeleteSchema>} -
   *   Success response
   * @name deleteAppCustomFieldsByResourceId
   * @summary: delete custom fields of given resource and resource id
   * @description: Use this API to delete the custom fields for given resource in param. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteAppCustomFieldsByResourceId/).
   */
  async deleteAppCustomFieldsByResourceId(
    { resource, resourceId, ids, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.deleteAppCustomFieldsByResourceId().validate(
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
    } = ContentPlatformApplicationValidator.deleteAppCustomFieldsByResourceId().validate(
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
        message: `Parameter Validation warrnings for platform > Content > deleteAppCustomFieldsByResourceId \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["ids"] = ids;

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/metafields/${resource}/${resourceId}`,
      query_params,
      undefined,
      requestHeaders,
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
          message: `Response Validation Warnings for platform > Content > deleteAppCustomFieldsByResourceId \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.DeleteAppCustomObjectParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomDataDeleteSchema>} - Success response
   * @name deleteAppCustomObject
   * @summary: Delete custom object
   * @description: Use this API to delete the custom object entry by id. This will also delete related custom fields entries related to this custom object. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteAppCustomObject/).
   */
  async deleteAppCustomObject(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.deleteAppCustomObject().validate(
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
    } = ContentPlatformApplicationValidator.deleteAppCustomObject().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > deleteAppCustomObject \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/metaobjects/${id}`,
      query_params,
      undefined,
      requestHeaders,
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
          message: `Response Validation Warnings for platform > Content > deleteAppCustomObject \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.DeleteAppCustomObjectDefinitionParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomObjectDefinitionDeleteResponseSchema>}
   *   - Success response
   *
   * @name deleteAppCustomObjectDefinition
   * @summary: delete custom object definition by id
   * @description: Use this API to delete a custom object definition and related data for your application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteAppCustomObjectDefinition/).
   */
  async deleteAppCustomObjectDefinition(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.deleteAppCustomObjectDefinition().validate(
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
    } = ContentPlatformApplicationValidator.deleteAppCustomObjectDefinition().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > deleteAppCustomObjectDefinition \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/metaobjects/definitions/${id}`,
      query_params,
      undefined,
      requestHeaders,
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
          message: `Response Validation Warnings for platform > Content > deleteAppCustomObjectDefinition \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.DeleteBlogParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.BlogSchema>} - Success response
   * @name deleteBlog
   * @summary: Delete blog.
   * @description: Remove a specific blog. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteBlog/).
   */
  async deleteBlog(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ContentPlatformApplicationValidator.deleteBlog().validate(
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
    } = ContentPlatformApplicationValidator.deleteBlog().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > deleteBlog \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/blogs/${id}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.BlogSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > deleteBlog \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.DeleteDataLoaderParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.DataLoaderResponseSchema>} -
   *   Success response
   * @name deleteDataLoader
   * @summary: Delete data loader.
   * @description: Remove a specific data loader. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteDataLoader/).
   */
  async deleteDataLoader(
    { dataLoaderId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.deleteDataLoader().validate(
      {
        dataLoaderId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.deleteDataLoader().validate(
      {
        dataLoaderId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > deleteDataLoader \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/data-loader/${dataLoaderId}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.DataLoaderResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > deleteDataLoader \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.DeleteFaqParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CreateFaqResponseSchema>} - Success response
   * @name deleteFaq
   * @summary: Delete FAQ.
   * @description: Remove a specific FAQ. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteFaq/).
   */
  async deleteFaq(
    { categoryId, faqId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ContentPlatformApplicationValidator.deleteFaq().validate(
      {
        categoryId,
        faqId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.deleteFaq().validate(
      {
        categoryId,
        faqId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > deleteFaq \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/category/${categoryId}/faq/${faqId}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.CreateFaqResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > deleteFaq \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.DeleteFaqCategoryParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CreateFaqCategorySchema>} - Success response
   * @name deleteFaqCategory
   * @summary: Delete FAQ category.
   * @description: Remove a specific FAQ category. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteFaqCategory/).
   */
  async deleteFaqCategory(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.deleteFaqCategory().validate(
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
    } = ContentPlatformApplicationValidator.deleteFaqCategory().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > deleteFaqCategory \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/category/${id}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.CreateFaqCategorySchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > deleteFaqCategory \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.DeleteLandingPageParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.LandingPageSchema>} - Success response
   * @name deleteLandingPage
   * @summary: Delete landing page.
   * @description: Remove a specific landing page. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteLandingPage/).
   */
  async deleteLandingPage(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.deleteLandingPage().validate(
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
    } = ContentPlatformApplicationValidator.deleteLandingPage().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > deleteLandingPage \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/landing-page/${id}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.LandingPageSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > deleteLandingPage \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.DeleteNavigationParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.NavigationSchema>} - Success response
   * @name deleteNavigation
   * @summary: Delete navigation.
   * @description: Remove a specific navigation element. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteNavigation/).
   */
  async deleteNavigation(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.deleteNavigation().validate(
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
    } = ContentPlatformApplicationValidator.deleteNavigation().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > deleteNavigation \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/navigations/${id}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.NavigationSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > deleteNavigation \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.DeletePageParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.PageSchema>} - Success response
   * @name deletePage
   * @summary: Delete page.
   * @description: Remove a page from the platform. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deletePage/).
   */
  async deletePage(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ContentPlatformApplicationValidator.deletePage().validate(
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
    } = ContentPlatformApplicationValidator.deletePage().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > deletePage \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pages/${id}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.PageSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > deletePage \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.DeletePathRedirectionRulesParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.DeletPathMappingSchema>} - Success response
   * @name deletePathRedirectionRules
   * @summary: Delete path redirection rules.
   * @description: Remove specific path redirection rules. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deletePathRedirectionRules/).
   */
  async deletePathRedirectionRules(
    { pathId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.deletePathRedirectionRules().validate(
      {
        pathId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.deletePathRedirectionRules().validate(
      {
        pathId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > deletePathRedirectionRules \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/path-mappings/${pathId}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.DeletPathMappingSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > deletePathRedirectionRules \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.DeleteSEOMarkupSchemaParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.SEOSchemaMarkupTemplate>} - Success response
   * @name deleteSEOMarkupSchema
   * @summary: delete a particular SEO Markup schema of an application using its id
   * @description: Use this API to delete an existing SEO Markup schema an application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteSEOMarkupSchema/).
   */
  async deleteSEOMarkupSchema(
    { schemaId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.deleteSEOMarkupSchema().validate(
      {
        schemaId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.deleteSEOMarkupSchema().validate(
      {
        schemaId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > deleteSEOMarkupSchema \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/seo/schema/${schemaId}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.SEOSchemaMarkupTemplate().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > deleteSEOMarkupSchema \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.EditDataLoaderParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.DataLoaderResponseSchema>} -
   *   Success response
   * @name editDataLoader
   * @summary: Edit data loader.
   * @description: Modify the settings of a specific data loader. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/editDataLoader/).
   */
  async editDataLoader(
    { dataLoaderId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.editDataLoader().validate(
      {
        dataLoaderId,
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
    } = ContentPlatformApplicationValidator.editDataLoader().validate(
      {
        dataLoaderId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > editDataLoader \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/data-loader/${dataLoaderId}`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.DataLoaderResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > editDataLoader \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.EditInjectableTagParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.TagsSchema>} - Success response
   * @name editInjectableTag
   * @summary: Update HTML tag
   * @description: Modify settings for an injectable tag. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/editInjectableTag/).
   */
  async editInjectableTag(
    { tagId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.editInjectableTag().validate(
      {
        tagId,
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
    } = ContentPlatformApplicationValidator.editInjectableTag().validate(
      {
        tagId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > editInjectableTag \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/tags/edit/handpicked/${tagId}`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.TagsSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > editInjectableTag \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.EditSEOMarkupSchemaParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.SEOSchemaMarkupTemplate>} - Success response
   * @name editSEOMarkupSchema
   * @summary: Get a particular SEO Markup schema of an application using its id
   * @description: Use this API to edit an existing SEO Markup schema an application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/editSEOMarkupSchema/).
   */
  async editSEOMarkupSchema(
    { schemaId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.editSEOMarkupSchema().validate(
      {
        schemaId,
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
    } = ContentPlatformApplicationValidator.editSEOMarkupSchema().validate(
      {
        schemaId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > editSEOMarkupSchema \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/seo/schema/${schemaId}`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.SEOSchemaMarkupTemplate().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > editSEOMarkupSchema \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.ExportAppCustomObjectEntriesParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomObjectBulkEntryInitiateDownload>}
   *   - Success response
   *
   * @name exportAppCustomObjectEntries
   * @summary: Initiate download for bulk custom object entries
   * @description: Use this api to initiate download of bulk entries - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/exportAppCustomObjectEntries/).
   */
  async exportAppCustomObjectEntries(
    { definitionId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.exportAppCustomObjectEntries().validate(
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
    } = ContentPlatformApplicationValidator.exportAppCustomObjectEntries().validate(
      {
        definitionId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > exportAppCustomObjectEntries \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/metaobjects/bulk/${definitionId}/download`,
      query_params,
      undefined,
      requestHeaders,
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
          message: `Response Validation Warnings for platform > Content > exportAppCustomObjectEntries \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GenerateSEOTitleParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.GeneratedSEOContent>} - Success response
   * @name generateSEOTitle
   * @summary: Generate SEO title.
   * @description: Create an SEO-friendly title for content. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/generateSEOTitle/).
   */
  async generateSEOTitle(
    { type, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.generateSEOTitle().validate(
      {
        type,
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
    } = ContentPlatformApplicationValidator.generateSEOTitle().validate(
      {
        type,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > generateSEOTitle \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/generate-seo/${type}`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.GeneratedSEOContent().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > generateSEOTitle \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetAnnouncementByIdParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.AdminAnnouncementSchema>} - Success response
   * @name getAnnouncementById
   * @summary: Get announcement by ID.
   * @description: Retrieve detailed information about a specific announcement. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getAnnouncementById/).
   */
  async getAnnouncementById(
    { announcementId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getAnnouncementById().validate(
      {
        announcementId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.getAnnouncementById().validate(
      {
        announcementId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getAnnouncementById \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/announcements/${announcementId}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.AdminAnnouncementSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getAnnouncementById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetAnnouncementsListParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.GetAnnouncementListSchema>} -
   *   Success response
   * @name getAnnouncementsList
   * @summary: Get announcements list.
   * @description: Retrieve a list of announcements. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getAnnouncementsList/).
   */
  async getAnnouncementsList(
    { pageNo, pageSize, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getAnnouncementsList().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.getAnnouncementsList().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getAnnouncementsList \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/announcements`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.GetAnnouncementListSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getAnnouncementsList \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Numeric ID allotted to a business account
   *   on Fynd Platform
   * @param {string} arg.applicationId - Numeric ID allotted to an application
   *   created within a business account.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each
   *   page. Default value is 10.
   * @returns {Paginator<ContentPlatformModel.GetAnnouncementListSchema>}
   * @summary: Get announcements list.
   * @description: Retrieve a list of announcements.
   */
  getAnnouncementsListPaginator({ companyId, applicationId, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getAnnouncementsList({
        companyId: companyId,
        applicationId: applicationId,
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetAppCustomFieldDefinitionParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomFieldDefinitionDetailResSchema>}
   *   - Success response
   *
   * @name getAppCustomFieldDefinition
   * @summary: Get custom fields definition by id
   * @description: Use this API to retrieve the definitions of custom fields using definition_id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getAppCustomFieldDefinition/).
   */
  async getAppCustomFieldDefinition(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getAppCustomFieldDefinition().validate(
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
    } = ContentPlatformApplicationValidator.getAppCustomFieldDefinition().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getAppCustomFieldDefinition \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/metafields/definitions/${id}`,
      query_params,
      undefined,
      requestHeaders,
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
          message: `Response Validation Warnings for platform > Content > getAppCustomFieldDefinition \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetAppCustomFieldDefinitionsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.ApplicationCustomFieldDefinitionsSchema>}
   *   - Success response
   *
   * @name getAppCustomFieldDefinitions
   * @summary: Get custom fields definitions
   * @description: Use this API to retrieve the definitions of custom fields. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getAppCustomFieldDefinitions/).
   */
  async getAppCustomFieldDefinitions(
    { pageNo, pageSize, resources, types, search, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getAppCustomFieldDefinitions().validate(
      {
        pageNo,
        pageSize,
        resources,
        types,
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
    } = ContentPlatformApplicationValidator.getAppCustomFieldDefinitions().validate(
      {
        pageNo,
        pageSize,
        resources,
        types,
        search,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getAppCustomFieldDefinitions \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["resources"] = resources;
    query_params["types"] = types;
    query_params["search"] = search;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/metafields/definitions`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.ApplicationCustomFieldDefinitionsSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getAppCustomFieldDefinitions \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetAppCustomFieldJobsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomFieldBulkEntry>} - Success response
   * @name getAppCustomFieldJobs
   * @summary: Fetch bulk import and export job list.
   * @description: Use this api to get list of jobs of bulk import and exports - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getAppCustomFieldJobs/).
   */
  async getAppCustomFieldJobs(
    { page, pageSize, actionType, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getAppCustomFieldJobs().validate(
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
    } = ContentPlatformApplicationValidator.getAppCustomFieldJobs().validate(
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
        message: `Parameter Validation warrnings for platform > Content > getAppCustomFieldJobs \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page"] = page;
    query_params["page_size"] = pageSize;
    query_params["action_type"] = actionType;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/metafields/jobs`,
      query_params,
      undefined,
      requestHeaders,
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
          message: `Response Validation Warnings for platform > Content > getAppCustomFieldJobs \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetAppCustomFieldTypesParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.MetafieldTypesSchema>} - Success response
   * @name getAppCustomFieldTypes
   * @summary: Get custom field types
   * @description: Use this API to retrieve the custom field types  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getAppCustomFieldTypes/).
   */
  async getAppCustomFieldTypes(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getAppCustomFieldTypes().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.getAppCustomFieldTypes().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getAppCustomFieldTypes \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/metafields/types`,
      query_params,
      undefined,
      requestHeaders,
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
          message: `Response Validation Warnings for platform > Content > getAppCustomFieldTypes \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetAppCustomFieldsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomFieldsResponseSchema>} -
   *   Success response
   * @name getAppCustomFields
   * @summary: Get list of custom fields of gives resource
   * @description: Use this API to retrieve the custom fields for given resource in param. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getAppCustomFields/).
   */
  async getAppCustomFields(
    { resource, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getAppCustomFields().validate(
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
    } = ContentPlatformApplicationValidator.getAppCustomFields().validate(
      {
        resource,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getAppCustomFields \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/metafields/${resource}`,
      query_params,
      undefined,
      requestHeaders,
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
          message: `Response Validation Warnings for platform > Content > getAppCustomFields \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetAppCustomFieldsByResourceIdParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomFieldsResponseByResourceIdSchema>}
   *   - Success response
   *
   * @name getAppCustomFieldsByResourceId
   * @summary: Get list of custom fields of given resource and resource id
   * @description: Use this API to retrieve the custom fields for given resource in param. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getAppCustomFieldsByResourceId/).
   */
  async getAppCustomFieldsByResourceId(
    { resource, resourceId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getAppCustomFieldsByResourceId().validate(
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
    } = ContentPlatformApplicationValidator.getAppCustomFieldsByResourceId().validate(
      {
        resource,
        resourceId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getAppCustomFieldsByResourceId \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/metafields/${resource}/${resourceId}`,
      query_params,
      undefined,
      requestHeaders,
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
          message: `Response Validation Warnings for platform > Content > getAppCustomFieldsByResourceId \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetAppCustomObjectParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomObjectByIdSchema>} - Success response
   * @name getAppCustomObject
   * @summary: Get custom object details
   * @description: Use this API to retrieve the custom object details and their fields details and definitions and references. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getAppCustomObject/).
   */
  async getAppCustomObject(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getAppCustomObject().validate(
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
    } = ContentPlatformApplicationValidator.getAppCustomObject().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getAppCustomObject \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/metaobjects/${id}`,
      query_params,
      undefined,
      requestHeaders,
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
          message: `Response Validation Warnings for platform > Content > getAppCustomObject \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetAppCustomObjectDefinitionParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomObjectDefinitionSchema>} -
   *   Success response
   * @name getAppCustomObjectDefinition
   * @summary: get custom object definition by id
   * @description: Use this API to update a custom object definition for your application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getAppCustomObjectDefinition/).
   */
  async getAppCustomObjectDefinition(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getAppCustomObjectDefinition().validate(
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
    } = ContentPlatformApplicationValidator.getAppCustomObjectDefinition().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getAppCustomObjectDefinition \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/metaobjects/definitions/${id}`,
      query_params,
      undefined,
      requestHeaders,
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
          message: `Response Validation Warnings for platform > Content > getAppCustomObjectDefinition \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetAppCustomObjectDefinitionsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomObjectDefinitionsSchema>} -
   *   Success response
   * @name getAppCustomObjectDefinitions
   * @summary: Get custom object definitions
   * @description: Use this API to retrieve the custom object definitions - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getAppCustomObjectDefinitions/).
   */
  async getAppCustomObjectDefinitions(
    { pageNo, pageSize, search, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getAppCustomObjectDefinitions().validate(
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
    } = ContentPlatformApplicationValidator.getAppCustomObjectDefinitions().validate(
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
        message: `Parameter Validation warrnings for platform > Content > getAppCustomObjectDefinitions \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["search"] = search;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/metaobjects/definitions`,
      query_params,
      undefined,
      requestHeaders,
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
          message: `Response Validation Warnings for platform > Content > getAppCustomObjectDefinitions \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetAppCustomObjectsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomObjectsSchema>} - Success response
   * @name getAppCustomObjects
   * @summary: Get list of custom objects
   * @description: Use this API to retrieve the custom objects. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getAppCustomObjects/).
   */
  async getAppCustomObjects(
    { pageNo, pageSize, definitionId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getAppCustomObjects().validate(
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
    } = ContentPlatformApplicationValidator.getAppCustomObjects().validate(
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
        message: `Parameter Validation warrnings for platform > Content > getAppCustomObjects \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["definition_id"] = definitionId;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/metaobjects`,
      query_params,
      undefined,
      requestHeaders,
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
          message: `Response Validation Warnings for platform > Content > getAppCustomObjects \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetAppJobsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomObjectBulkEntry>} - Success response
   * @name getAppJobs
   * @summary: Fetch bulk import and export job list.
   * @description: Use this api to get list of jobs of bulk import and exports - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getAppJobs/).
   */
  async getAppJobs(
    { page, pageSize, actionType, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ContentPlatformApplicationValidator.getAppJobs().validate(
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
    } = ContentPlatformApplicationValidator.getAppJobs().validate(
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
        message: `Parameter Validation warrnings for platform > Content > getAppJobs \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page"] = page;
    query_params["page_size"] = pageSize;
    query_params["action_type"] = actionType;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/metaobjects/jobs`,
      query_params,
      undefined,
      requestHeaders,
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
          message: `Response Validation Warnings for platform > Content > getAppJobs \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetAppResourcesParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.ResourcesSchema>} - Success response
   * @name getAppResources
   * @summary: Get resources
   * @description: Use this API to retrieve the resources, such as products, collections, customers, selling locations, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getAppResources/).
   */
  async getAppResources(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getAppResources().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.getAppResources().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getAppResources \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/metafields/resources`,
      query_params,
      undefined,
      requestHeaders,
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
          message: `Response Validation Warnings for platform > Content > getAppResources \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetBlogBySlugParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.BlogSchema>} - Success response
   * @name getBlogBySlug
   * @summary: Get blog by slug.
   * @description: Retrieve detailed information about a specific blog using its slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getBlogBySlug/).
   */
  async getBlogBySlug(
    { slug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getBlogBySlug().validate(
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
    } = ContentPlatformApplicationValidator.getBlogBySlug().validate(
      {
        slug,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getBlogBySlug \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v2.0/company/${this.config.companyId}/application/${this.applicationId}/blogs/${slug}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.BlogSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getBlogBySlug \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetBlogsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.BlogGetResponse>} - Success response
   * @name getBlogs
   * @summary: Get blogs.
   * @description: Retrieve a list of available blogs. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getBlogs/).
   */
  async getBlogs(
    { pageNo, pageSize, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ContentPlatformApplicationValidator.getBlogs().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.getBlogs().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getBlogs \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/blogs`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.BlogGetResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getBlogs \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Numeric ID allotted to a business account
   *   on Fynd Platform
   * @param {string} arg.applicationId - Numeric ID allotted to an application
   *   created within a business account.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each
   *   page. Default value is 10.
   * @returns {Paginator<ContentPlatformModel.BlogGetResponse>}
   * @summary: Get blogs.
   * @description: Retrieve a list of available blogs.
   */
  getBlogsPaginator({ companyId, applicationId, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getBlogs({
        companyId: companyId,
        applicationId: applicationId,
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetComponentByIdParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.BlogSchema>} - Success response
   * @name getComponentById
   * @summary: Get components of a blog
   * @description: Use this API to retrieve the components of a blog, such as title, slug, feature image, content, schedule, publish status, author, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getComponentById/).
   */
  async getComponentById(
    { slug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getComponentById().validate(
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
    } = ContentPlatformApplicationValidator.getComponentById().validate(
      {
        slug,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getComponentById \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/blogs/${slug}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.BlogSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getComponentById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetDataLoaderApiSpecsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.DataLoadersApiSpecSchema>} -
   *   Success response
   * @name getDataLoaderApiSpecs
   * @summary: Get data loaders api specs.
   * @description: Retrieve a list of data loaders api specs. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getDataLoaderApiSpecs/).
   */
  async getDataLoaderApiSpecs(
    { dataLoader, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getDataLoaderApiSpecs().validate(
      {
        dataLoader,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.getDataLoaderApiSpecs().validate(
      {
        dataLoader,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getDataLoaderApiSpecs \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["data_loader"] = dataLoader;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/data-loader/api-spec`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.DataLoadersApiSpecSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getDataLoaderApiSpecs \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetDataLoadersParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.DataLoadersSchema>} - Success response
   * @name getDataLoaders
   * @summary: Get data loaders.
   * @description: Retrieve a list of data loaders. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getDataLoaders/).
   */
  async getDataLoaders(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getDataLoaders().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.getDataLoaders().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getDataLoaders \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/data-loader`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.DataLoadersSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getDataLoaders \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetDataLoadersByServiceParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.DataLoaderItemsResponseSchema>} -
   *   Success response
   * @name getDataLoadersByService
   * @summary: Get all the data loaders in an application by service name
   * @description: Use this to get all data loaders of an application by service name - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getDataLoadersByService/).
   */
  async getDataLoadersByService(
    { serviceName, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getDataLoadersByService().validate(
      {
        serviceName,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.getDataLoadersByService().validate(
      {
        serviceName,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getDataLoadersByService \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/data-loader/service/${serviceName}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.DataLoaderItemsResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getDataLoadersByService \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetDefaultNavigationsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.DefaultNavigationResponse>} -
   *   Success response
   * @name getDefaultNavigations
   * @summary: Get default navigations.
   * @description: Retrieve default navigation elements. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getDefaultNavigations/).
   */
  async getDefaultNavigations(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getDefaultNavigations().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.getDefaultNavigations().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getDefaultNavigations \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/navigations/default`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.DefaultNavigationResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getDefaultNavigations \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetDefaultSEOMarkupSchemaParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.DefaultSchemaComponent>} - Success response
   * @name getDefaultSEOMarkupSchema
   * @summary: Get Default SEO Markup schemas of an application
   * @description: Use this API to get the Default SEO Markup schema Templates setup for an application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getDefaultSEOMarkupSchema/).
   */
  async getDefaultSEOMarkupSchema(
    { pageType, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getDefaultSEOMarkupSchema().validate(
      {
        pageType,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.getDefaultSEOMarkupSchema().validate(
      {
        pageType,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getDefaultSEOMarkupSchema \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_type"] = pageType;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/seo/schema/default`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.DefaultSchemaComponent().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getDefaultSEOMarkupSchema \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetFaqByIdOrSlugParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CreateFaqResponseSchema>} - Success response
   * @name getFaqByIdOrSlug
   * @summary: Get FAQ by ID or slug.
   * @description: Retrieve detailed information about a specific FAQ. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getFaqByIdOrSlug/).
   */
  async getFaqByIdOrSlug(
    { idOrSlug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getFaqByIdOrSlug().validate(
      {
        idOrSlug,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.getFaqByIdOrSlug().validate(
      {
        idOrSlug,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getFaqByIdOrSlug \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/${idOrSlug}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.CreateFaqResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getFaqByIdOrSlug \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetFaqCategoriesParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.GetFaqCategoriesSchema>} - Success response
   * @name getFaqCategories
   * @summary: Get FAQ categories.
   * @description: Retrieve a list of FAQ categories. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getFaqCategories/).
   */
  async getFaqCategories(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getFaqCategories().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.getFaqCategories().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getFaqCategories \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/categories`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.GetFaqCategoriesSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getFaqCategories \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetFaqCategoryBySlugOrIdParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.GetFaqCategoryBySlugSchema>} -
   *   Success response
   * @name getFaqCategoryBySlugOrId
   * @summary: Get FAQ category by slug or ID.
   * @description: Retrieve detailed information about a specific FAQ category. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getFaqCategoryBySlugOrId/).
   */
  async getFaqCategoryBySlugOrId(
    { idOrSlug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getFaqCategoryBySlugOrId().validate(
      {
        idOrSlug,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.getFaqCategoryBySlugOrId().validate(
      {
        idOrSlug,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getFaqCategoryBySlugOrId \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/category/${idOrSlug}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.GetFaqCategoryBySlugSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getFaqCategoryBySlugOrId \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetFaqsByCategoryIdOrSlugParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.GetFaqSchema>} - Success response
   * @name getFaqsByCategoryIdOrSlug
   * @summary: Get FAQs by category ID or slug.
   * @description: Retrieve a list of FAQs within a specific category. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getFaqsByCategoryIdOrSlug/).
   */
  async getFaqsByCategoryIdOrSlug(
    { idOrSlug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getFaqsByCategoryIdOrSlug().validate(
      {
        idOrSlug,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.getFaqsByCategoryIdOrSlug().validate(
      {
        idOrSlug,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getFaqsByCategoryIdOrSlug \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/category/${idOrSlug}/faqs`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.GetFaqSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getFaqsByCategoryIdOrSlug \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetInjectableTagsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.TagsSchema>} - Success response
   * @name getInjectableTags
   * @summary: Get all the tags in an application
   * @description: Use this API to get all the CSS and JS injected in the application in the form of tags. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getInjectableTags/).
   */
  async getInjectableTags(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getInjectableTags().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.getInjectableTags().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getInjectableTags \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/tags`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.TagsSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getInjectableTags \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetLandingPagesParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.LandingPageGetResponse>} - Success response
   * @name getLandingPages
   * @summary: Get landing pages.
   * @description: Retrieve a list of landing pages. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getLandingPages/).
   */
  async getLandingPages(
    { pageNo, pageSize, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getLandingPages().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.getLandingPages().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getLandingPages \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/landing-page`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.LandingPageGetResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getLandingPages \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Numeric ID allotted to a business account
   *   on Fynd Platform
   * @param {string} arg.applicationId - Numeric ID allotted to an application
   *   created within a business account.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each
   *   page. Default value is 10.
   * @returns {Paginator<ContentPlatformModel.LandingPageGetResponse>}
   * @summary: Get landing pages.
   * @description: Retrieve a list of landing pages.
   */
  getLandingPagesPaginator({ companyId, applicationId, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getLandingPages({
        companyId: companyId,
        applicationId: applicationId,
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetLegalInformationParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.ApplicationLegal>} - Success response
   * @name getLegalInformation
   * @summary: Get legal related information for applicaiton
   * @description: Retrieve legal information and terms. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getLegalInformation/).
   */
  async getLegalInformation(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getLegalInformation().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.getLegalInformation().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getLegalInformation \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/legal`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.ApplicationLegal().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getLegalInformation \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetNavigationBySlugParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.NavigationSchema>} - Success response
   * @name getNavigationBySlug
   * @summary: Get navigation by slug.
   * @description: Retrieve detailed information about a specific navigation element. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getNavigationBySlug/).
   */
  async getNavigationBySlug(
    { slug, devicePlatform, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getNavigationBySlug().validate(
      {
        slug,
        devicePlatform,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.getNavigationBySlug().validate(
      {
        slug,
        devicePlatform,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getNavigationBySlug \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["device_platform"] = devicePlatform;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/navigations/${slug}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.NavigationSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getNavigationBySlug \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetNavigationsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.NavigationGetResponse>} - Success response
   * @name getNavigations
   * @summary: Get navigation items
   * @description: Retrieve a list of navigational elements. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getNavigations/).
   */
  async getNavigations(
    { devicePlatform, pageNo, pageSize, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getNavigations().validate(
      {
        devicePlatform,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.getNavigations().validate(
      {
        devicePlatform,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getNavigations \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["device_platform"] = devicePlatform;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/navigations`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.NavigationGetResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getNavigations \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Numeric ID allotted to a business account
   *   on Fynd Platform
   * @param {string} arg.applicationId - Numeric ID allotted to an application
   *   created within a business account.
   * @param {string} arg.devicePlatform - Filter navigations by platform.
   *   Acceptable values are: web, android, ios, all
   * @param {number} [arg.pageSize] - The number of items to retrieve in each
   *   page. Default value is 10.
   * @returns {Paginator<ContentPlatformModel.NavigationGetResponse>}
   * @summary: Get navigation items
   * @description: Retrieve a list of navigational elements.
   */
  getNavigationsPaginator({
    companyId,
    applicationId,
    devicePlatform,
    pageSize,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getNavigations({
        companyId: companyId,
        applicationId: applicationId,
        devicePlatform: devicePlatform,
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetPageBySlugParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.PageSchema>} - Success response
   * @name getPageBySlug
   * @summary: Get page by slug
   * @description: Use this API to retrieve the components of a page, such as its title, seo, publish status, feature image, tags, schedule, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getPageBySlug/).
   */
  async getPageBySlug(
    { slug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getPageBySlug().validate(
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
    } = ContentPlatformApplicationValidator.getPageBySlug().validate(
      {
        slug,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getPageBySlug \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v2.0/company/${this.config.companyId}/application/${this.applicationId}/pages/${slug}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.PageSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getPageBySlug \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetPageBySlugV1Param} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.PageSchema>} - Success response
   * @name getPageBySlugV1
   * @summary: Get page by slug
   * @description: Use this API to retrieve the components of a page, such as its title, seo, publish status, feature image, tags, schedule, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getPageBySlugV1/).
   */
  async getPageBySlugV1(
    { slug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getPageBySlugV1().validate(
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
    } = ContentPlatformApplicationValidator.getPageBySlugV1().validate(
      {
        slug,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getPageBySlugV1 \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pages/${slug}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.PageSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getPageBySlugV1 \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetPageMetaParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.PageMetaSchema>} - Success response
   * @name getPageMeta
   * @summary: Get page meta.
   * @description: Retrieve metadata for a specific page. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getPageMeta/).
   */
  async getPageMeta(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getPageMeta().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.getPageMeta().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getPageMeta \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pages/meta`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.PageMetaSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getPageMeta \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetPageSpecParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.PageSpec>} - Success response
   * @name getPageSpec
   * @summary: Get page specification.
   * @description: Retrieve specifications and details for a specific page. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getPageSpec/).
   */
  async getPageSpec(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getPageSpec().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.getPageSpec().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getPageSpec \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pages/spec`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.PageSpec().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getPageSpec \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetPagesParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.PageGetResponse>} - Success response
   * @name getPages
   * @summary: Get pages.
   * @description: Retrieve a list of available pages. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getPages/).
   */
  async getPages(
    { pageNo, pageSize, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ContentPlatformApplicationValidator.getPages().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.getPages().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getPages \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v2.0/company/${this.config.companyId}/application/${this.applicationId}/pages`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.PageGetResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getPages \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Numeric ID allotted to a business account
   *   on Fynd Platform
   * @param {string} arg.applicationId - Numeric ID allotted to an application
   *   created within a business account.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each
   *   page. Default value is 10.
   * @returns {Paginator<ContentPlatformModel.PageGetResponse>}
   * @summary: Get pages.
   * @description: Retrieve a list of available pages.
   */
  getPagesPaginator({ companyId, applicationId, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getPages({
        companyId: companyId,
        applicationId: applicationId,
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetPagesV1Param} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.PageGetResponse>} - Success response
   * @name getPagesV1
   * @summary: Get pages.
   * @description: Retrieve a list of available pages. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getPagesV1/).
   */
  async getPagesV1(
    { pageNo, pageSize, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ContentPlatformApplicationValidator.getPagesV1().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.getPagesV1().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getPagesV1 \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pages`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.PageGetResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getPagesV1 \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Numeric ID allotted to a business account
   *   on Fynd Platform
   * @param {string} arg.applicationId - Numeric ID allotted to an application
   *   created within a business account.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each
   *   page. Default value is 10.
   * @returns {Paginator<ContentPlatformModel.PageGetResponse>}
   * @summary: Get pages.
   * @description: Retrieve a list of available pages.
   */
  getPagesV1Paginator({ companyId, applicationId, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getPagesV1({
        companyId: companyId,
        applicationId: applicationId,
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetPathRedirectionRuleParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.DeletPathMappingSchema>} - Success response
   * @name getPathRedirectionRule
   * @summary: Get path redirection rule.
   * @description: Retrieve detailed information about a specific path redirection rule. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getPathRedirectionRule/).
   */
  async getPathRedirectionRule(
    { pathId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getPathRedirectionRule().validate(
      {
        pathId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.getPathRedirectionRule().validate(
      {
        pathId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getPathRedirectionRule \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/path-mappings/${pathId}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.DeletPathMappingSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getPathRedirectionRule \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetPathRedirectionRulesParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.GetAllPathMappingSchema>} - Success response
   * @name getPathRedirectionRules
   * @summary: Get path redirection rules.
   * @description: Retrieve a list of path redirection rules. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getPathRedirectionRules/).
   */
  async getPathRedirectionRules(
    { pageSize, pageNo, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getPathRedirectionRules().validate(
      {
        pageSize,
        pageNo,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.getPathRedirectionRules().validate(
      {
        pageSize,
        pageNo,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getPathRedirectionRules \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_size"] = pageSize;
    query_params["page_no"] = pageNo;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/path-mappings`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.GetAllPathMappingSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getPathRedirectionRules \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetSEOConfigurationParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.SeoComponent>} - Success response
   * @name getSEOConfiguration
   * @summary: Get SEO configuration for an application
   * @description: Retrieve configuration settings for SEO. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getSEOConfiguration/).
   */
  async getSEOConfiguration(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getSEOConfiguration().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.getSEOConfiguration().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getSEOConfiguration \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/seo`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.SeoComponent().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getSEOConfiguration \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetSEOMarkupSchemaParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.SEOSchemaMarkupTemplate>} - Success response
   * @name getSEOMarkupSchema
   * @summary: Get a particular SEO Markup schema of an application using its id
   * @description: Use this API to get a existing SEO Markup schema an application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getSEOMarkupSchema/).
   */
  async getSEOMarkupSchema(
    { schemaId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getSEOMarkupSchema().validate(
      {
        schemaId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.getSEOMarkupSchema().validate(
      {
        schemaId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getSEOMarkupSchema \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/seo/schema/${schemaId}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.SEOSchemaMarkupTemplate().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getSEOMarkupSchema \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetSEOMarkupSchemasParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.SeoSchemaComponent>} - Success response
   * @name getSEOMarkupSchemas
   * @summary: Get SEO Markup schemas of an application
   * @description: Use this API to get all SEO Markup schema Templates setup for an application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getSEOMarkupSchemas/).
   */
  async getSEOMarkupSchemas(
    { title, active, pageNo, pageSize, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getSEOMarkupSchemas().validate(
      {
        title,
        active,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.getSEOMarkupSchemas().validate(
      {
        title,
        active,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getSEOMarkupSchemas \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["title"] = title;
    query_params["active"] = active;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/seo/schema`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.SeoSchemaComponent().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getSEOMarkupSchemas \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetSupportInformationParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.Support>} - Success response
   * @name getSupportInformation
   * @summary: Get support information.
   * @description: Retrieve information related to customer support. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getSupportInformation/).
   */
  async getSupportInformation(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getSupportInformation().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.getSupportInformation().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getSupportInformation \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/support`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.Support().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getSupportInformation \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.ImportAppCustomObjectEntriesParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomObjectEntryBulkUploadResponse>}
   *   - Success response
   *
   * @name importAppCustomObjectEntries
   * @summary: Bulk custom object entries upload
   * @description: Use this API to upload custom object entries - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/importAppCustomObjectEntries/).
   */
  async importAppCustomObjectEntries(
    { definitionId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.importAppCustomObjectEntries().validate(
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
    } = ContentPlatformApplicationValidator.importAppCustomObjectEntries().validate(
      {
        definitionId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > importAppCustomObjectEntries \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/metaobjects/bulk/${definitionId}/upload`,
      query_params,
      body,
      requestHeaders,
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
          message: `Response Validation Warnings for platform > Content > importAppCustomObjectEntries \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.RemoveInjectableTagParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.TagDeleteSuccessResponse>} -
   *   Success response
   * @name removeInjectableTag
   * @summary: Remove HTML tag.
   * @description: Delete a specific injectable tag. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/removeInjectableTag/).
   */
  async removeInjectableTag(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.removeInjectableTag().validate(
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
    } = ContentPlatformApplicationValidator.removeInjectableTag().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > removeInjectableTag \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/tags/remove/handpicked`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.TagDeleteSuccessResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > removeInjectableTag \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.ResetDataLoaderParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.DataLoaderResetResponseSchema>} -
   *   Success response
   * @name resetDataLoader
   * @summary: Reset data loader.
   * @description: Clear and reset data loader settings. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/resetDataLoader/).
   */
  async resetDataLoader(
    { service, operationId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.resetDataLoader().validate(
      {
        service,
        operationId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.resetDataLoader().validate(
      {
        service,
        operationId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > resetDataLoader \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/data-loader/${service}/${operationId}/reset`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.DataLoaderResetResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > resetDataLoader \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.SampleAppCustomObjectBulkEntryParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<string>} - Success response
   * @name sampleAppCustomObjectBulkEntry
   * @summary: download sample for custom object bulk entry
   * @description: Use this api to get sample csv file  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/sampleAppCustomObjectBulkEntry/).
   */
  async sampleAppCustomObjectBulkEntry(
    { definitionId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.sampleAppCustomObjectBulkEntry().validate(
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
    } = ContentPlatformApplicationValidator.sampleAppCustomObjectBulkEntry().validate(
      {
        definitionId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > sampleAppCustomObjectBulkEntry \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/metaobjects/bulk/${definitionId}/sample`,
      query_params,
      undefined,
      requestHeaders,
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
          message: `Response Validation Warnings for platform > Content > sampleAppCustomObjectBulkEntry \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.SelectDataLoaderParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.DataLoaderResponseSchema>} -
   *   Success response
   * @name selectDataLoader
   * @summary: Select data loader.
   * @description: Choose and set a data loader for use. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/selectDataLoader/).
   */
  async selectDataLoader(
    { dataLoaderId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.selectDataLoader().validate(
      {
        dataLoaderId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.selectDataLoader().validate(
      {
        dataLoaderId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > selectDataLoader \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/data-loader/${dataLoaderId}/select`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.DataLoaderResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > selectDataLoader \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.UpdateAnnouncementParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CreateAnnouncementSchema>} -
   *   Success response
   * @name updateAnnouncement
   * @summary: Update announcement.
   * @description: Modify the content and settings of a specific announcement. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateAnnouncement/).
   */
  async updateAnnouncement(
    { announcementId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.updateAnnouncement().validate(
      {
        announcementId,
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
    } = ContentPlatformApplicationValidator.updateAnnouncement().validate(
      {
        announcementId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > updateAnnouncement \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/announcements/${announcementId}`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.CreateAnnouncementSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > updateAnnouncement \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.UpdateAnnouncementScheduleParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CreateAnnouncementSchema>} -
   *   Success response
   * @name updateAnnouncementSchedule
   * @summary: Update announcement schedule.
   * @description: Modify the scheduling of a specific announcement. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateAnnouncementSchedule/).
   */
  async updateAnnouncementSchedule(
    { announcementId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.updateAnnouncementSchedule().validate(
      {
        announcementId,
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
    } = ContentPlatformApplicationValidator.updateAnnouncementSchedule().validate(
      {
        announcementId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > updateAnnouncementSchedule \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/announcements/${announcementId}`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.CreateAnnouncementSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > updateAnnouncementSchedule \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.UpdateAppCustomFieldByResourceIdParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomFieldsResponseByResourceIdSchema>}
   *   - Success response
   *
   * @name updateAppCustomFieldByResourceId
   * @summary: Create custom field entries for gives resource and resource_id
   * @description: Use this API to create the custom field entry for given resource and resource_id in param. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateAppCustomFieldByResourceId/).
   */
  async updateAppCustomFieldByResourceId(
    { resource, resourceId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.updateAppCustomFieldByResourceId().validate(
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
    } = ContentPlatformApplicationValidator.updateAppCustomFieldByResourceId().validate(
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
        message: `Parameter Validation warrnings for platform > Content > updateAppCustomFieldByResourceId \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/metafields/${resource}/${resourceId}`,
      query_params,
      body,
      requestHeaders,
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
          message: `Response Validation Warnings for platform > Content > updateAppCustomFieldByResourceId \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.UpdateAppCustomFieldDefinitionParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomFieldDefinitionDetailResSchema>}
   *   - Success response
   *
   * @name updateAppCustomFieldDefinition
   * @summary: Update custom field definition
   * @description: Use this API to update a custom field definition for your application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateAppCustomFieldDefinition/).
   */
  async updateAppCustomFieldDefinition(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.updateAppCustomFieldDefinition().validate(
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
    } = ContentPlatformApplicationValidator.updateAppCustomFieldDefinition().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > updateAppCustomFieldDefinition \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/metafields/definitions/${id}`,
      query_params,
      body,
      requestHeaders,
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
          message: `Response Validation Warnings for platform > Content > updateAppCustomFieldDefinition \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.UpdateAppCustomObjectParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomObjectSchema>} - Success response
   * @name updateAppCustomObject
   * @summary: Update custom object details
   * @description: Use this API to update a custom object detail for your application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateAppCustomObject/).
   */
  async updateAppCustomObject(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.updateAppCustomObject().validate(
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
    } = ContentPlatformApplicationValidator.updateAppCustomObject().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > updateAppCustomObject \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/metaobjects/${id}`,
      query_params,
      body,
      requestHeaders,
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
          message: `Response Validation Warnings for platform > Content > updateAppCustomObject \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.UpdateAppCustomObjectDefinitionParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomObjectDefinitionSchema>} -
   *   Success response
   * @name updateAppCustomObjectDefinition
   * @summary: Update custom object definition
   * @description: Use this API to update a custom object definition for your application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateAppCustomObjectDefinition/).
   */
  async updateAppCustomObjectDefinition(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.updateAppCustomObjectDefinition().validate(
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
    } = ContentPlatformApplicationValidator.updateAppCustomObjectDefinition().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > updateAppCustomObjectDefinition \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/metaobjects/definitions/${id}`,
      query_params,
      body,
      requestHeaders,
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
          message: `Response Validation Warnings for platform > Content > updateAppCustomObjectDefinition \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.UpdateBlogParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.BlogSchema>} - Success response
   * @name updateBlog
   * @summary: Update blog.
   * @description: Modify the content and settings of a specific blog. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateBlog/).
   */
  async updateBlog(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ContentPlatformApplicationValidator.updateBlog().validate(
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
    } = ContentPlatformApplicationValidator.updateBlog().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > updateBlog \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/blogs/${id}`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.BlogSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > updateBlog \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.UpdateFaqParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CreateFaqResponseSchema>} - Success response
   * @name updateFaq
   * @summary: Update FAQ.
   * @description: Modify the content and settings of a specific FAQ. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateFaq/).
   */
  async updateFaq(
    { categoryId, faqId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ContentPlatformApplicationValidator.updateFaq().validate(
      {
        categoryId,
        faqId,
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
    } = ContentPlatformApplicationValidator.updateFaq().validate(
      {
        categoryId,
        faqId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > updateFaq \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/category/${categoryId}/faq/${faqId}`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.CreateFaqResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > updateFaq \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.UpdateFaqCategoryParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CreateFaqCategorySchema>} - Success response
   * @name updateFaqCategory
   * @summary: Update FAQ category.
   * @description: Modify the content and settings of a specific FAQ category. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateFaqCategory/).
   */
  async updateFaqCategory(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.updateFaqCategory().validate(
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
    } = ContentPlatformApplicationValidator.updateFaqCategory().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > updateFaqCategory \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/category/${id}`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.CreateFaqCategorySchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > updateFaqCategory \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.UpdateInjectableTagParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.TagsSchema>} - Success response
   * @name updateInjectableTag
   * @summary: Update a tag
   * @description: Use this API to edit the details of an existing tag. This includes the tag name, tag type (css/js), url and position of the tag. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateInjectableTag/).
   */
  async updateInjectableTag(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.updateInjectableTag().validate(
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
    } = ContentPlatformApplicationValidator.updateInjectableTag().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > updateInjectableTag \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/tags`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.TagsSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > updateInjectableTag \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.UpdateLandingPageParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.LandingPageSchema>} - Success response
   * @name updateLandingPage
   * @summary: Update landing page.
   * @description: Modify the content and settings of a specific landing page. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateLandingPage/).
   */
  async updateLandingPage(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.updateLandingPage().validate(
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
    } = ContentPlatformApplicationValidator.updateLandingPage().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > updateLandingPage \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/landing-page/${id}`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.LandingPageSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > updateLandingPage \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.UpdateLegalInformationParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.ApplicationLegal>} - Success response
   * @name updateLegalInformation
   * @summary: Update legal related information for application
   * @description: Modify legal information and terms. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateLegalInformation/).
   */
  async updateLegalInformation(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.updateLegalInformation().validate(
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
    } = ContentPlatformApplicationValidator.updateLegalInformation().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > updateLegalInformation \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/legal`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.ApplicationLegal().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > updateLegalInformation \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.UpdateNavigationParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.NavigationSchema>} - Success response
   * @name updateNavigation
   * @summary: Update navigation.
   * @description: Modify the content and settings of a specific navigation element. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateNavigation/).
   */
  async updateNavigation(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.updateNavigation().validate(
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
    } = ContentPlatformApplicationValidator.updateNavigation().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > updateNavigation \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/navigations/${id}`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.NavigationSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > updateNavigation \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.UpdatePageParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.PageSchema>} - Success response
   * @name updatePage
   * @summary: Update page.
   * @description: Modify and update the content of a page. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updatePage/).
   */
  async updatePage(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ContentPlatformApplicationValidator.updatePage().validate(
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
    } = ContentPlatformApplicationValidator.updatePage().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > updatePage \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v2.0/company/${this.config.companyId}/application/${this.applicationId}/pages/${id}`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.PageSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > updatePage \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.UpdatePagePreviewParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.PageSchema>} - Success response
   * @name updatePagePreview
   * @summary: Update page preview.
   * @description: Modify the content and settings of a specific page preview. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updatePagePreview/).
   */
  async updatePagePreview(
    { slug, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.updatePagePreview().validate(
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
    } = ContentPlatformApplicationValidator.updatePagePreview().validate(
      {
        slug,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > updatePagePreview \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pages/publish/${slug}`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.PageSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > updatePagePreview \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.UpdatePageV1Param} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.PageSchema>} - Success response
   * @name updatePageV1
   * @summary: Update page.
   * @description: Modify and update the content of a page. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updatePageV1/).
   */
  async updatePageV1(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.updatePageV1().validate(
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
    } = ContentPlatformApplicationValidator.updatePageV1().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > updatePageV1 \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pages/${id}`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.PageSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > updatePageV1 \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.UpdatePathRedirectionRulesParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CreatePathMappingSchema>} - Success response
   * @name updatePathRedirectionRules
   * @summary: Update path redirection rules.
   * @description: Modify settings for path redirection rules. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updatePathRedirectionRules/).
   */
  async updatePathRedirectionRules(
    { pathId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.updatePathRedirectionRules().validate(
      {
        pathId,
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
    } = ContentPlatformApplicationValidator.updatePathRedirectionRules().validate(
      {
        pathId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > updatePathRedirectionRules \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/path-mappings/${pathId}`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.CreatePathMappingSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > updatePathRedirectionRules \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.UpdateSEOConfigurationParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.SeoSchema>} - Success response
   * @name updateSEOConfiguration
   * @summary: Update SEO configuration for an application
   * @description: Modify configuration settings for SEO. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateSEOConfiguration/).
   */
  async updateSEOConfiguration(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.updateSEOConfiguration().validate(
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
    } = ContentPlatformApplicationValidator.updateSEOConfiguration().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > updateSEOConfiguration \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/seo`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.SeoSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > updateSEOConfiguration \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.UpdateSupportInformationParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.Support>} - Success response
   * @name updateSupportInformation
   * @summary: Update support related info for an application
   * @description: Modify information related to customer support. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateSupportInformation/).
   */
  async updateSupportInformation(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.updateSupportInformation().validate(
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
    } = ContentPlatformApplicationValidator.updateSupportInformation().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > updateSupportInformation \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/support`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ContentPlatformModel.Support().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > updateSupportInformation \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = Content;
