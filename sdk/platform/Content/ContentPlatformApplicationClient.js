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
   * @param {ContentPlatformApplicationValidator.AddApplicationLanguageParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<Object>} - Success response
   * @name addApplicationLanguage
   * @summary: Add app language
   * @description: Add new languages to application's supported language list. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/addApplicationLanguage/).
   */
  async addApplicationLanguage(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.addApplicationLanguage().validate(
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
    } = ContentPlatformApplicationValidator.addApplicationLanguage().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > addApplicationLanguage \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/languages`,
      query_params,
      body,
      requestHeaders,
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
          message: `Response Validation Warnings for platform > Content > addApplicationLanguage \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.AddDataLoaderParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.DataLoaderResponseSchema>} -
   *   Success response
   * @name addDataLoader
   * @summary: Create data loader
   * @description: Create and add a new data loader. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/addDataLoader/).
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
   * @summary: Create FAQ
   * @description: Create and add a new FAQ. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/addFaq/).
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
   * @summary: Create HTML tag
   * @description: Create and add a new injectable tag. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/addInjectableTag/).
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
   * @returns {Promise<ContentPlatformModel.PathMappingSchema>} - Success response
   * @name addPathRedirectionRules
   * @summary: Create path redirection rules
   * @description: Create and add rules for path redirection. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/addPathRedirectionRules/).
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
    } = ContentPlatformModel.PathMappingSchema().validate(responseData, {
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
   * @param {ContentPlatformApplicationValidator.BulkUnPublishApplicationLanguageParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<Object>} - Success response
   * @name bulkUnPublishApplicationLanguage
   * @summary: Unpublish all languages of sales channel.
   * @description: Unpublish all application's published languages of specific sales channel. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/bulkUnPublishApplicationLanguage/).
   */
  async bulkUnPublishApplicationLanguage(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.bulkUnPublishApplicationLanguage().validate(
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
    } = ContentPlatformApplicationValidator.bulkUnPublishApplicationLanguage().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > bulkUnPublishApplicationLanguage \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/languages`,
      query_params,
      body,
      requestHeaders,
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
          message: `Response Validation Warnings for platform > Content > bulkUnPublishApplicationLanguage \n ${res_error}`,
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
   * @summary: Create announcement
   * @description: Generate and add a new announcement. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/createAnnouncement/).
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
   * @param {ContentPlatformApplicationValidator.CreateAppCustomFieldDefinitionParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomFieldDefinitionDetailResSchema>}
   *   - Success response
   *
   * @name createAppCustomFieldDefinition
   * @summary: Create custom field definition for a given resource type
   * @description: You can create custom fields definition to any resource so you can extend property of resource. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/createAppCustomFieldDefinition/).
   */
  async createAppCustomFieldDefinition(
    { resource, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.createAppCustomFieldDefinition().validate(
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
    } = ContentPlatformApplicationValidator.createAppCustomFieldDefinition().validate(
      {
        resource,
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
      `/service/platform/content/v2.0/company/${this.config.companyId}/application/${this.applicationId}/customfields/resource/${resource}/definition`,
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
   * @param {ContentPlatformApplicationValidator.CreateAppCustomObjectBySlugParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomObjectSchema>} - Success response
   * @name createAppCustomObjectBySlug
   * @summary: Create custom object entries
   * @description: Custom object entries against the custom object definition can be added using this API. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/createAppCustomObjectBySlug/).
   */
  async createAppCustomObjectBySlug(
    { definitionSlug, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.createAppCustomObjectBySlug().validate(
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
    } = ContentPlatformApplicationValidator.createAppCustomObjectBySlug().validate(
      {
        definitionSlug,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > createAppCustomObjectBySlug \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v2.0/company/${this.config.companyId}/application/${this.applicationId}/customobjects/definition/${definitionSlug}/entries`,
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
          message: `Response Validation Warnings for platform > Content > createAppCustomObjectBySlug \n ${res_error}`,
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
   * @returns {Promise<ContentPlatformModel.CustomObjectDefinitionSlugSchema>}
   *   - Success response
   *
   * @name createAppCustomObjectDefinition
   * @summary: Create custom object definition
   * @description: Create a custom object that will have a collection of custom fields and can be used anywhere in the custom field for any resource. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/createAppCustomObjectDefinition/).
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
      `/service/platform/content/v2.0/company/${this.config.companyId}/application/${this.applicationId}/customobjects/definition`,
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
          message: `Response Validation Warnings for platform > Content > createAppCustomObjectDefinition \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.CreateApplicationResourceTranslationParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.ResourceTranslation>} - Success response
   * @name createApplicationResourceTranslation
   * @summary: Add app translation
   * @description: Create new translations for application resources. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/createApplicationResourceTranslation/).
   */
  async createApplicationResourceTranslation(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.createApplicationResourceTranslation().validate(
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
    } = ContentPlatformApplicationValidator.createApplicationResourceTranslation().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > createApplicationResourceTranslation \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/resource/translations`,
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
          message: `Response Validation Warnings for platform > Content > createApplicationResourceTranslation \n ${res_error}`,
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
   * @summary: Create blog
   * @description: Generate and add a new blog. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/createBlog/).
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
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/blogs/`,
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
   * @summary: Create FAQ Category
   * @description: Generate and add a new FAQ category. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/createFaqCategory/).
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
   * @param {ContentPlatformApplicationValidator.CreateLandingPageParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.LandingPageSchema>} - Success response
   * @name createLandingPage
   * @summary: Create landing page
   * @description: Generate and add a new landing page. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/createLandingPage/).
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
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/landing-page/`,
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
   * @description: Generate and add a new navigation element. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/createNavigation/).
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
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/navigations/`,
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
   * @summary: Create page
   * @description: Generate and add a new page to the platform. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/createPage/).
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
      `/service/platform/content/v2.0/company/${this.config.companyId}/application/${this.applicationId}/pages/`,
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
   * @param {ContentPlatformApplicationValidator.CreateSEOMarkupSchemaParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.SEOSchemaMarkupTemplate>} - Success response
   * @name createSEOMarkupSchema
   * @summary: Create SEO Markup Schema
   * @description: Use this API to Create SEO Markup Schema - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/createSEOMarkupSchema/).
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
   * @param {ContentPlatformApplicationValidator.CreateTranslateUILabelsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.TranslateUiLabels>} - Success response
   * @name createTranslateUILabels
   * @summary: Add Translate Ui Labels
   * @description: Creates a new Translate Ui Labels entry with specified configuration and locale settings. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/createTranslateUILabels/).
   */
  async createTranslateUILabels(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.createTranslateUILabels().validate(
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
    } = ContentPlatformApplicationValidator.createTranslateUILabels().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > createTranslateUILabels \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/translate-ui-labels`,
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
    } = ContentPlatformModel.TranslateUiLabels().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > createTranslateUILabels \n ${res_error}`,
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
   * @summary: Delete an announcement
   * @description: Remove a specific announcement. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/deleteAnnouncement/).
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
   * @param {ContentPlatformApplicationValidator.DeleteAppCustomFieldDefinitionBySlugParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomDataDeleteSchema>} - Success response
   * @name deleteAppCustomFieldDefinitionBySlug
   * @summary: Delete custom fields definition
   * @description: Custom field definition and its assosiated custom fields value can be deleted using this api on the basis of definition id. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/deleteAppCustomFieldDefinitionBySlug/).
   */
  async deleteAppCustomFieldDefinitionBySlug(
    { slug, resource, namespace, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.deleteAppCustomFieldDefinitionBySlug().validate(
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
    } = ContentPlatformApplicationValidator.deleteAppCustomFieldDefinitionBySlug().validate(
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
        message: `Parameter Validation warrnings for platform > Content > deleteAppCustomFieldDefinitionBySlug \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v2.0/company/${this.config.companyId}/application/${this.applicationId}/customfields/resource/${resource}/namespace/${namespace}/definition/${slug}`,
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
          message: `Response Validation Warnings for platform > Content > deleteAppCustomFieldDefinitionBySlug \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.DeleteAppCustomObjectBySlugParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomDataDeleteSchema>} - Success response
   * @name deleteAppCustomObjectBySlug
   * @summary: Delete custom object
   * @description: A Custom object entry can be deleted by providing the custom object definition slug and custom object entry slug using this endpoint. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/deleteAppCustomObjectBySlug/).
   */
  async deleteAppCustomObjectBySlug(
    { definitionSlug, slug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.deleteAppCustomObjectBySlug().validate(
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
    } = ContentPlatformApplicationValidator.deleteAppCustomObjectBySlug().validate(
      {
        definitionSlug,
        slug,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > deleteAppCustomObjectBySlug \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v2.0/company/${this.config.companyId}/application/${this.applicationId}/customobjects/definition/${definitionSlug}/entries/${slug}`,
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
          message: `Response Validation Warnings for platform > Content > deleteAppCustomObjectBySlug \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.DeleteAppCustomObjectDefinitionBySlugParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomObjectDefinitionDeleteResponseSchema>}
   *   - Success response
   *
   * @name deleteAppCustomObjectDefinitionBySlug
   * @summary: Delete custom object definition
   * @description: Custom object definitions can be deleted using this endpoint by providing the definition ID. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/deleteAppCustomObjectDefinitionBySlug/).
   */
  async deleteAppCustomObjectDefinitionBySlug(
    { slug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.deleteAppCustomObjectDefinitionBySlug().validate(
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
    } = ContentPlatformApplicationValidator.deleteAppCustomObjectDefinitionBySlug().validate(
      {
        slug,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > deleteAppCustomObjectDefinitionBySlug \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v2.0/company/${this.config.companyId}/application/${this.applicationId}/customobjects/definition/${slug}`,
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
          message: `Response Validation Warnings for platform > Content > deleteAppCustomObjectDefinitionBySlug \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.DeleteApplicationLanguageParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.OperationResponseSchema>} - Success response
   * @name deleteApplicationLanguage
   * @summary: Remove app language
   * @description: Remove a language from application's supported languages. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/deleteApplicationLanguage/).
   */
  async deleteApplicationLanguage(
    { locale, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.deleteApplicationLanguage().validate(
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
    } = ContentPlatformApplicationValidator.deleteApplicationLanguage().validate(
      {
        locale,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > deleteApplicationLanguage \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/languages/${locale}`,
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
          message: `Response Validation Warnings for platform > Content > deleteApplicationLanguage \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.DeleteApplicationResourceTranslationParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.OperationResponseSchema>} - Success response
   * @name deleteApplicationResourceTranslation
   * @summary: Remove app translation
   * @description: Remove translations for application resources. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/deleteApplicationResourceTranslation/).
   */
  async deleteApplicationResourceTranslation(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.deleteApplicationResourceTranslation().validate(
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
    } = ContentPlatformApplicationValidator.deleteApplicationResourceTranslation().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > deleteApplicationResourceTranslation \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/resource/translations/${id}`,
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
          message: `Response Validation Warnings for platform > Content > deleteApplicationResourceTranslation \n ${res_error}`,
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
   * @summary: Delete a blog
   * @description: Remove a specific blog. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/deleteBlog/).
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
   * @summary: Delete a data loader
   * @description: Remove a specific data loader. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/deleteDataLoader/).
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
   * @summary: Delete FAQ
   * @description: Remove a specific FAQ. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/deleteFaq/).
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
   * @returns {Promise<ContentPlatformModel.FaqSchema>} - Success response
   * @name deleteFaqCategory
   * @summary: Delete FAQ category
   * @description: Remove a specific FAQ category. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/deleteFaqCategory/).
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
    } = ContentPlatformModel.FaqSchema().validate(responseData, {
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
   * @summary: Delete landing page
   * @description: Remove a specific landing page. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/deleteLandingPage/).
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
   * @summary: Delete navigation
   * @description: Remove a specific navigation element. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/deleteNavigation/).
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
   * @summary: Delete page
   * @description: Remove a page from the platform. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/deletePage/).
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
   * @returns {Promise<Object>} - Success response
   * @name deletePathRedirectionRules
   * @summary: Delete path redirection rule
   * @description: Remove specific path redirection rules. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/deletePathRedirectionRules/).
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
   * @summary: Delete SEO Markup Schema
   * @description: Use this API to Delete SEO Markup Schema - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/deleteSEOMarkupSchema/).
   */
  async deleteSEOMarkupSchema(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.deleteSEOMarkupSchema().validate(
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
    } = ContentPlatformApplicationValidator.deleteSEOMarkupSchema().validate(
      {
        id,
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
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/seo/schema/${id}`,
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
   * @summary: Update a data loader
   * @description: Modify the settings of a specific data loader. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/editDataLoader/).
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
   * @description: Modify settings for an injectable tag. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/editInjectableTag/).
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
   * @summary: Get SEO Markup Schema
   * @description: Use this API to Get SEO Markup Schema - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/editSEOMarkupSchema/).
   */
  async editSEOMarkupSchema(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.editSEOMarkupSchema().validate(
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
    } = ContentPlatformApplicationValidator.editSEOMarkupSchema().validate(
      {
        id,
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
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/seo/schema/${id}`,
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
   * @param {ContentPlatformApplicationValidator.ExportAppCustomObjectEntriesBySlugParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomObjectBulkEntryInitiateDownload>}
   *   - Success response
   *
   * @name exportAppCustomObjectEntriesBySlug
   * @summary: Initiate download for bulk custom object entries
   * @description: Custom object bulk export of bulk entries can be perform using this endpoint. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/exportAppCustomObjectEntriesBySlug/).
   */
  async exportAppCustomObjectEntriesBySlug(
    { slug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.exportAppCustomObjectEntriesBySlug().validate(
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
    } = ContentPlatformApplicationValidator.exportAppCustomObjectEntriesBySlug().validate(
      {
        slug,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > exportAppCustomObjectEntriesBySlug \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v2.0/company/${this.config.companyId}/application/${this.applicationId}/customobjects/definition/${slug}/bulk/download`,
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
          message: `Response Validation Warnings for platform > Content > exportAppCustomObjectEntriesBySlug \n ${res_error}`,
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
   * @summary: Generate SEO title
   * @description: Create an SEO-friendly title for content. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/generateSEOTitle/).
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
   * @summary: Get announcement
   * @description: Get detailed information about a specific announcement - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getAnnouncementById/).
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
   * @summary: List announcements
   * @description: Lists all announcements - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getAnnouncementsList/).
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
   * @param {ContentPlatformApplicationValidator.GetAppCustomFieldDefinitionByResourceParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomFieldDefinitionsSchema>} -
   *   Success response
   * @name getAppCustomFieldDefinitionByResource
   * @summary: Get custom fields definitions for a given resource type
   * @description: Custom field definitions enable you to include data validation for custom fields, and enable sellers to add custom fields values for resources. With the help of this seller can retrive list of custom field definitions list. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getAppCustomFieldDefinitionByResource/).
   */
  async getAppCustomFieldDefinitionByResource(
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
    } = ContentPlatformApplicationValidator.getAppCustomFieldDefinitionByResource().validate(
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
    } = ContentPlatformApplicationValidator.getAppCustomFieldDefinitionByResource().validate(
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
        message: `Parameter Validation warrnings for platform > Content > getAppCustomFieldDefinitionByResource \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["types"] = types;
    query_params["search"] = search;
    query_params["slugs"] = slugs;
    query_params["namespaces"] = namespaces;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v2.0/company/${this.config.companyId}/application/${this.applicationId}/customfields/resource/${resource}/definition`,
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
          message: `Response Validation Warnings for platform > Content > getAppCustomFieldDefinitionByResource \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetAppCustomFieldDefinitionBySlugParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.MetaFieldDefinitionDetailResSchema>}
   *   - Success response
   *
   * @name getAppCustomFieldDefinitionBySlug
   * @summary: Get custom fields definition by resource, slug and namespace
   * @description: Custom field definitions can be retrived from this using its slug, namespace and resource - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getAppCustomFieldDefinitionBySlug/).
   */
  async getAppCustomFieldDefinitionBySlug(
    { slug, resource, namespace, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getAppCustomFieldDefinitionBySlug().validate(
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
    } = ContentPlatformApplicationValidator.getAppCustomFieldDefinitionBySlug().validate(
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
        message: `Parameter Validation warrnings for platform > Content > getAppCustomFieldDefinitionBySlug \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v2.0/company/${this.config.companyId}/application/${this.applicationId}/customfields/resource/${resource}/namespace/${namespace}/definition/${slug}`,
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
          message: `Response Validation Warnings for platform > Content > getAppCustomFieldDefinitionBySlug \n ${res_error}`,
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
   * @returns {Promise<ContentPlatformModel.CustomFieldDefinitionsSchema>} -
   *   Success response
   * @name getAppCustomFieldDefinitions
   * @summary: Get custom fields definitions
   * @description: Custom field definitions enable you to include data validation for custom fields, and enable sellers to add custom fields values for resources. With the help of this seller can retrive list of custom field definitions list. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getAppCustomFieldDefinitions/).
   */
  async getAppCustomFieldDefinitions(
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
    } = ContentPlatformApplicationValidator.getAppCustomFieldDefinitions().validate(
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
    } = ContentPlatformApplicationValidator.getAppCustomFieldDefinitions().validate(
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
        message: `Parameter Validation warrnings for platform > Content > getAppCustomFieldDefinitions \n ${warrning}`,
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

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v2.0/company/${this.config.companyId}/application/${this.applicationId}/customfields/definition`,
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
          message: `Response Validation Warnings for platform > Content > getAppCustomFieldDefinitions \n ${res_error}`,
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
   * @description: Each custom field and custom field definition has a type, which defines the type of information that it can store. The custom field types have built-in validation. This api will give list of supported custom fields types - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getAppCustomFieldTypes/).
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
   * @param {ContentPlatformApplicationValidator.GetAppCustomFieldsByResourceSlugParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomFieldsResponseByResourceIdSchema>}
   *   - Success response
   *
   * @name getAppCustomFieldsByResourceSlug
   * @summary: Get list of custom fields of given resource and resource slug
   * @description: Retrieves a list of custom fields attached to a particular resource by using the resource and resource slug. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getAppCustomFieldsByResourceSlug/).
   */
  async getAppCustomFieldsByResourceSlug(
    { resource, resourceSlug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getAppCustomFieldsByResourceSlug().validate(
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
    } = ContentPlatformApplicationValidator.getAppCustomFieldsByResourceSlug().validate(
      {
        resource,
        resourceSlug,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getAppCustomFieldsByResourceSlug \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v2.0/company/${this.config.companyId}/application/${this.applicationId}/customfields/resource/${resource}/${resourceSlug}`,
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
          message: `Response Validation Warnings for platform > Content > getAppCustomFieldsByResourceSlug \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetAppCustomObjectBySlugParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomObjectBySlugSchema>} -
   *   Success response
   * @name getAppCustomObjectBySlug
   * @summary: Get custom object details
   * @description: Details of a custom object entry can be obtained using this endpoint. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getAppCustomObjectBySlug/).
   */
  async getAppCustomObjectBySlug(
    { definitionSlug, slug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getAppCustomObjectBySlug().validate(
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
    } = ContentPlatformApplicationValidator.getAppCustomObjectBySlug().validate(
      {
        definitionSlug,
        slug,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getAppCustomObjectBySlug \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v2.0/company/${this.config.companyId}/application/${this.applicationId}/customobjects/definition/${definitionSlug}/entries/${slug}`,
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
          message: `Response Validation Warnings for platform > Content > getAppCustomObjectBySlug \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetAppCustomObjectDefinitionBySlugParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomObjectDefinitionSlugSchema>}
   *   - Success response
   *
   * @name getAppCustomObjectDefinitionBySlug
   * @summary: Get custom object definition
   * @description: Custom object definitions can be fetched using their custom object definition slug. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getAppCustomObjectDefinitionBySlug/).
   */
  async getAppCustomObjectDefinitionBySlug(
    { slug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getAppCustomObjectDefinitionBySlug().validate(
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
    } = ContentPlatformApplicationValidator.getAppCustomObjectDefinitionBySlug().validate(
      {
        slug,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getAppCustomObjectDefinitionBySlug \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v2.0/company/${this.config.companyId}/application/${this.applicationId}/customobjects/definition/${slug}`,
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
          message: `Response Validation Warnings for platform > Content > getAppCustomObjectDefinitionBySlug \n ${res_error}`,
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
   * @description: Custom object definition lists can be obtained using this endpoint. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getAppCustomObjectDefinitions/).
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
      `/service/platform/content/v2.0/company/${this.config.companyId}/application/${this.applicationId}/customobjects/definition`,
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
   * @param {ContentPlatformApplicationValidator.GetAppCustomObjectsBySlugParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomObjectsSchema>} - Success response
   * @name getAppCustomObjectsBySlug
   * @summary: Get list of custom objects
   * @description: Custom object entries can fetch using this endpoint. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getAppCustomObjectsBySlug/).
   */
  async getAppCustomObjectsBySlug(
    { pageNo, pageSize, definitionSlug, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getAppCustomObjectsBySlug().validate(
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
    } = ContentPlatformApplicationValidator.getAppCustomObjectsBySlug().validate(
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
        message: `Parameter Validation warrnings for platform > Content > getAppCustomObjectsBySlug \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v2.0/company/${this.config.companyId}/application/${this.applicationId}/customobjects/definition/${definitionSlug}/entries`,
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
          message: `Response Validation Warnings for platform > Content > getAppCustomObjectsBySlug \n ${res_error}`,
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
   * @summary: Get bulk import and export job list
   * @description: Custom object bulk import and export jobs status and details can be obtained using this endpoint. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getAppJobs/).
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
   * @description: Each custom fields is assosiated with a resource such as product, promotion, coupon, selling location etc, This will gives list of supported resource list. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getAppResources/).
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
   * @param {ContentPlatformApplicationValidator.GetApplicationLanguagesParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<Object>} - Success response
   * @name getApplicationLanguages
   * @summary: Get app languages
   * @description: Fetch all languages configured for the specified application. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getApplicationLanguages/).
   */
  async getApplicationLanguages(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getApplicationLanguages().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.getApplicationLanguages().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getApplicationLanguages \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/languages`,
      query_params,
      undefined,
      requestHeaders,
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
          message: `Response Validation Warnings for platform > Content > getApplicationLanguages \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetApplicationResourceTranslationsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<Object>} - Success response
   * @name getApplicationResourceTranslations
   * @summary: Get app translations
   * @description: Fetch translations for application-level resources. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getApplicationResourceTranslations/).
   */
  async getApplicationResourceTranslations(
    { locale, type, resourceId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getApplicationResourceTranslations().validate(
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
    } = ContentPlatformApplicationValidator.getApplicationResourceTranslations().validate(
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
        message: `Parameter Validation warrnings for platform > Content > getApplicationResourceTranslations \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["locale"] = locale;
    query_params["type"] = type;
    query_params["resource_id"] = resourceId;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/resource/translations`,
      query_params,
      undefined,
      requestHeaders,
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
          message: `Response Validation Warnings for platform > Content > getApplicationResourceTranslations \n ${res_error}`,
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
   * @summary: Get blog by slug
   * @description: Retrieve detailed information about a specific blog using its slug. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getBlogBySlug/).
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
   * @returns {Promise<ContentPlatformModel.BlogGetDetails>} - Success response
   * @name getBlogs
   * @summary: List blogs
   * @description: List all blogs - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getBlogs/).
   */
  async getBlogs(
    { pageNo, pageSize, tags, q, slug, title, status, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ContentPlatformApplicationValidator.getBlogs().validate(
      {
        pageNo,
        pageSize,
        tags,
        q,
        slug,
        title,
        status,
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
        tags,
        q,
        slug,
        title,
        status,
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
    query_params["tags"] = tags;
    query_params["q"] = q;
    query_params["slug"] = slug;
    query_params["title"] = title;
    query_params["status"] = status;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/blogs/`,
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
    } = ContentPlatformModel.BlogGetDetails().validate(responseData, {
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
   * @param {ContentPlatformApplicationValidator.GetDataLoadersParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.DataLoadersSchema>} - Success response
   * @name getDataLoaders
   * @summary: List data loaders
   * @description: List all Dataloaders - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getDataLoaders/).
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
   * @returns {Promise<ContentPlatformModel.DataLoaderResponseSchema>} -
   *   Success response
   * @name getDataLoadersByService
   * @summary: List all data loaders
   * @description: Use this to get all data loaders of an application by service name - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getDataLoadersByService/).
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
   * @returns {Promise<ContentPlatformModel.DefaultNavigationDetails>} -
   *   Success response
   * @name getDefaultNavigations
   * @summary: Get default navigations
   * @description: Retrieve default navigation elements. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getDefaultNavigations/).
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
    } = ContentPlatformModel.DefaultNavigationDetails().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

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
   * @summary: List default SEO Markup Schemas
   * @description: Use this API to List default SEO Markup Schemas - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getDefaultSEOMarkupSchema/).
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
   * @summary: Get FAQ or slug
   * @description: Get detailed information about a specific FAQ - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getFaqByIdOrSlug/).
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
   * @summary: List FAQ Categories
   * @description: List all FAQ Categories - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getFaqCategories/).
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
   * @summary: Get FAQ category
   * @description: Get detailed information about a specific FAQ category - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getFaqCategoryBySlugOrId/).
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
   * @summary: List FAQs
   * @description: Retrieve a list of FAQs within a specific category. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getFaqsByCategoryIdOrSlug/).
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
   * @summary: Get all HTML tags
   * @description: Retrieve a list of injectable tags. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getInjectableTags/).
   */
  async getInjectableTags(
    { all, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getInjectableTags().validate(
      {
        all,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.getInjectableTags().validate(
      {
        all,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getInjectableTags \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["all"] = all;

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
   * @returns {Promise<ContentPlatformModel.LandingPageGetDetails>} - Success response
   * @name getLandingPages
   * @summary: Get landing pages
   * @description: Lists a list landing pages as per device types - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getLandingPages/).
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
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/landing-page/`,
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
    } = ContentPlatformModel.LandingPageGetDetails().validate(responseData, {
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
   * @param {ContentPlatformApplicationValidator.GetLegalInformationParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.ApplicationLegal>} - Success response
   * @name getLegalInformation
   * @summary: Get Legal Pages
   * @description: Get legal information and terms - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getLegalInformation/).
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
   * @summary: Get navigation by slug
   * @description: Retrieve detailed information about a specific navigation element. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getNavigationBySlug/).
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
   * @returns {Promise<ContentPlatformModel.NavigationGetDetails>} - Success response
   * @name getNavigations
   * @summary: Get navigation items
   * @description: Retrieve a list of navigational elements. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getNavigations/).
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
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/navigations/`,
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
    } = ContentPlatformModel.NavigationGetDetails().validate(responseData, {
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
   * @param {ContentPlatformApplicationValidator.GetPageBySlugParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.PageSchema>} - Success response
   * @name getPageBySlug
   * @summary: Get page by slug
   * @description: Get detailed information about a specific page using its slug. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getPageBySlug/).
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
   * @param {ContentPlatformApplicationValidator.GetPageMetaParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.PageMetaSchema>} - Success response
   * @name getPageMeta
   * @summary: Get page meta
   * @description: Use this API to Get metadata for a specific page. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getPageMeta/).
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
   * @summary: Get page specification
   * @description: Use this API to Get specifications and details for a specific page - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getPageSpec/).
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
   * @returns {Promise<ContentPlatformModel.PageGetDetails>} - Success response
   * @name getPages
   * @summary: Get pages
   * @description: Retrieve a list of available pages. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getPages/).
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
      `/service/platform/content/v2.0/company/${this.config.companyId}/application/${this.applicationId}/pages/`,
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
    } = ContentPlatformModel.PageGetDetails().validate(responseData, {
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
   * @param {ContentPlatformApplicationValidator.GetPathRedirectionRuleParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.PathMappingSchema>} - Success response
   * @name getPathRedirectionRule
   * @summary: Get Path Redirection Rule
   * @description: Use this API to Get detailed information about a specific path redirection rule - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getPathRedirectionRule/).
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
    } = ContentPlatformModel.PathMappingSchema().validate(responseData, {
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
   * @returns {Promise<ContentPlatformModel.PathMappingSchema>} - Success response
   * @name getPathRedirectionRules
   * @summary: List Path Redirection Rules
   * @description: Use this API to List Path Redirection Rules - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getPathRedirectionRules/).
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
    } = ContentPlatformModel.PathMappingSchema().validate(responseData, {
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
   * @summary: Get sales channel SEO
   * @description: Retrieve configuration settings for SEO. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getSEOConfiguration/).
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
   * @summary: Get SEO Markup Schema
   * @description: Use this API to Get SEO Markup Schema - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getSEOMarkupSchema/).
   */
  async getSEOMarkupSchema(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getSEOMarkupSchema().validate(
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
    } = ContentPlatformApplicationValidator.getSEOMarkupSchema().validate(
      {
        id,
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
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/seo/schema/${id}`,
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
   * @summary: List default SEO Markup Schemas
   * @description: Use this API to List default SEO Markup Schemas - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getSEOMarkupSchemas/).
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
   * @summary: Get support information
   * @description: Retrieve information related to customer support. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getSupportInformation/).
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
   * @param {ContentPlatformApplicationValidator.GetTranslateUILabelsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.TranslateUiLabelsPage>} - Success response
   * @name getTranslateUILabels
   * @summary: Get Translate Ui Labels
   * @description: Retrieves Translate Ui Labels with optional filtering by type, application, and company identifiers. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getTranslateUILabels/).
   */
  async getTranslateUILabels(
    { templateThemeId, themeId, locale, type, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getTranslateUILabels().validate(
      {
        templateThemeId,
        themeId,
        locale,
        type,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.getTranslateUILabels().validate(
      {
        templateThemeId,
        themeId,
        locale,
        type,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getTranslateUILabels \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["template_theme_id"] = templateThemeId;
    query_params["theme_id"] = themeId;
    query_params["locale"] = locale;
    query_params["type"] = type;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/translate-ui-labels`,
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
    } = ContentPlatformModel.TranslateUiLabelsPage().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getTranslateUILabels \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetTranslateUILabelsByIdParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.TranslateUiLabels>} - Success response
   * @name getTranslateUILabelsById
   * @summary: Get Resource Detail
   * @description: Fetches detailed information for a specific Translate Ui Labels using its unique identifier. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getTranslateUILabelsById/).
   */
  async getTranslateUILabelsById(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getTranslateUILabelsById().validate(
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
    } = ContentPlatformApplicationValidator.getTranslateUILabelsById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getTranslateUILabelsById \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/translate-ui-labels/${id}`,
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
    } = ContentPlatformModel.TranslateUiLabels().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getTranslateUILabelsById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.ImportAppCustomObjectEntriesBySlugParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomObjectEntryBulkUploadDetails>}
   *   - Success response
   *
   * @name importAppCustomObjectEntriesBySlug
   * @summary: Bulk custom object entries upload
   * @description: Custom object bulk import of bulk entries can be performed using this endpoint. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/importAppCustomObjectEntriesBySlug/).
   */
  async importAppCustomObjectEntriesBySlug(
    { slug, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.importAppCustomObjectEntriesBySlug().validate(
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
    } = ContentPlatformApplicationValidator.importAppCustomObjectEntriesBySlug().validate(
      {
        slug,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > importAppCustomObjectEntriesBySlug \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v2.0/company/${this.config.companyId}/application/${this.applicationId}/customobjects/definition/${slug}/bulk/upload`,
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
          message: `Response Validation Warnings for platform > Content > importAppCustomObjectEntriesBySlug \n ${res_error}`,
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
   * @returns {Promise<ContentPlatformModel.TagDeleteSuccessDetails>} - Success response
   * @name removeInjectableTag
   * @summary: Remove HTML tag
   * @description: Delete a specific injectable tag. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/removeInjectableTag/).
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
    } = ContentPlatformModel.TagDeleteSuccessDetails().validate(responseData, {
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
   * @summary: Reset a data loader
   * @description: Clear and reset data loader settings. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/resetDataLoader/).
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
   * @param {ContentPlatformApplicationValidator.SampleAppCustomObjectBulkEntryBySlugParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<string>} - Success response
   * @name sampleAppCustomObjectBulkEntryBySlug
   * @summary: Download sample for custom object bulk entry
   * @description: Sample files for custom object bulk import can be obtained from this endpoint. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/sampleAppCustomObjectBulkEntryBySlug/).
   */
  async sampleAppCustomObjectBulkEntryBySlug(
    { slug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.sampleAppCustomObjectBulkEntryBySlug().validate(
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
    } = ContentPlatformApplicationValidator.sampleAppCustomObjectBulkEntryBySlug().validate(
      {
        slug,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > sampleAppCustomObjectBulkEntryBySlug \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v2.0/company/${this.config.companyId}/application/${this.applicationId}/customobjects/definition/${slug}/bulk/sample`,
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
          message: `Response Validation Warnings for platform > Content > sampleAppCustomObjectBulkEntryBySlug \n ${res_error}`,
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
   * @summary: Select a data loader
   * @description: Choose and set a data loader for use. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/selectDataLoader/).
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
   * @summary: Update announcement
   * @description: Modify the content and settings of a specific announcement. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/updateAnnouncement/).
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
   * @summary: Update announcement schedule
   * @description: Modify the scheduling of a specific announcement. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/updateAnnouncementSchedule/).
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
   * @param {ContentPlatformApplicationValidator.UpdateAppCustomFieldByResourceSlugParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomFieldsResponseByResourceIdSchema>}
   *   - Success response
   *
   * @name updateAppCustomFieldByResourceSlug
   * @summary: Create custom field entries for gives resource and resource slug
   * @description: You can add a custom field using this endpoint to any resource by providing the resource slug. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/updateAppCustomFieldByResourceSlug/).
   */
  async updateAppCustomFieldByResourceSlug(
    { resource, resourceSlug, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.updateAppCustomFieldByResourceSlug().validate(
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
    } = ContentPlatformApplicationValidator.updateAppCustomFieldByResourceSlug().validate(
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
        message: `Parameter Validation warrnings for platform > Content > updateAppCustomFieldByResourceSlug \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v2.0/company/${this.config.companyId}/application/${this.applicationId}/customfields/resource/${resource}/${resourceSlug}`,
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
          message: `Response Validation Warnings for platform > Content > updateAppCustomFieldByResourceSlug \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.UpdateAppCustomFieldDefinitionBySlugParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomFieldDefinitionDetailResSchema>}
   *   - Success response
   *
   * @name updateAppCustomFieldDefinitionBySlug
   * @summary: Update custom field definition
   * @description: Custom fields definition can be update using this api, You can update custom field definition name and description. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/updateAppCustomFieldDefinitionBySlug/).
   */
  async updateAppCustomFieldDefinitionBySlug(
    { slug, resource, namespace, body, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.updateAppCustomFieldDefinitionBySlug().validate(
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
    } = ContentPlatformApplicationValidator.updateAppCustomFieldDefinitionBySlug().validate(
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
        message: `Parameter Validation warrnings for platform > Content > updateAppCustomFieldDefinitionBySlug \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v2.0/company/${this.config.companyId}/application/${this.applicationId}/customfields/resource/${resource}/namespace/${namespace}/definition/${slug}`,
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
          message: `Response Validation Warnings for platform > Content > updateAppCustomFieldDefinitionBySlug \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.UpdateAppCustomObjectBySlugParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomObjectBySlugSchema>} -
   *   Success response
   * @name updateAppCustomObjectBySlug
   * @summary: Update custom object details
   * @description: Custom object entries can be updated using this endpoint. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/updateAppCustomObjectBySlug/).
   */
  async updateAppCustomObjectBySlug(
    { definitionSlug, slug, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.updateAppCustomObjectBySlug().validate(
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
    } = ContentPlatformApplicationValidator.updateAppCustomObjectBySlug().validate(
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
        message: `Parameter Validation warrnings for platform > Content > updateAppCustomObjectBySlug \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v2.0/company/${this.config.companyId}/application/${this.applicationId}/customobjects/definition/${definitionSlug}/entries/${slug}`,
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
          message: `Response Validation Warnings for platform > Content > updateAppCustomObjectBySlug \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.UpdateAppCustomObjectDefinitionBySlugParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CustomObjectDefinitionSlugSchema>}
   *   - Success response
   *
   * @name updateAppCustomObjectDefinitionBySlug
   * @summary: Update custom object definition
   * @description: Custom object definitions can be updated using this endpoint. You can update the name and description of the custom object and add more custom field definitions to the existing custom object. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/updateAppCustomObjectDefinitionBySlug/).
   */
  async updateAppCustomObjectDefinitionBySlug(
    { slug, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.updateAppCustomObjectDefinitionBySlug().validate(
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
    } = ContentPlatformApplicationValidator.updateAppCustomObjectDefinitionBySlug().validate(
      {
        slug,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > updateAppCustomObjectDefinitionBySlug \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v2.0/company/${this.config.companyId}/application/${this.applicationId}/customobjects/definition/${slug}`,
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
          message: `Response Validation Warnings for platform > Content > updateAppCustomObjectDefinitionBySlug \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.UpdateApplicationLanguageStatusParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.ApplicationLanguage>} - Success response
   * @name updateApplicationLanguageStatus
   * @summary: Set app language
   * @description: Update language status and settings for the application. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/updateApplicationLanguageStatus/).
   */
  async updateApplicationLanguageStatus(
    { locale, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.updateApplicationLanguageStatus().validate(
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
    } = ContentPlatformApplicationValidator.updateApplicationLanguageStatus().validate(
      {
        locale,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > updateApplicationLanguageStatus \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/languages/${locale}`,
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
    } = ContentPlatformModel.ApplicationLanguage().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > updateApplicationLanguageStatus \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.UpdateApplicationResourceTranslationParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.ResourceTranslation>} - Success response
   * @name updateApplicationResourceTranslation
   * @summary: Update app translation
   * @description: Update existing translations for application resources. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/updateApplicationResourceTranslation/).
   */
  async updateApplicationResourceTranslation(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.updateApplicationResourceTranslation().validate(
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
    } = ContentPlatformApplicationValidator.updateApplicationResourceTranslation().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > updateApplicationResourceTranslation \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/resource/translations/${id}`,
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
          message: `Response Validation Warnings for platform > Content > updateApplicationResourceTranslation \n ${res_error}`,
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
   * @summary: Update a blog
   * @description: Modify the content and settings of a specific blog. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/updateBlog/).
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
   * @summary: Update FAQ
   * @description: Modify the content and settings of a specific FAQ. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/updateFaq/).
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
   * @summary: Update FAQ category
   * @description: Modify the content and settings of a specific FAQ category. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/updateFaqCategory/).
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
   * @summary: Update HTML tag
   * @description: Modify settings for an injectable tag. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/updateInjectableTag/).
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
   * @summary: Update landing page
   * @description: Modify the content and settings of a specific landing page. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/updateLandingPage/).
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
   * @summary: Update Legal Pages
   * @description: Modify legal information and terms. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/updateLegalInformation/).
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
   * @summary: Update navigation
   * @description: Modify the content and settings of a specific navigation element. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/updateNavigation/).
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
   * @summary: Update page
   * @description: Modify and update the content of a page. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/updatePage/).
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
   * @summary: Update page preview
   * @description: Modify the content and settings of a specific page preview. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/updatePagePreview/).
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
   * @param {ContentPlatformApplicationValidator.UpdatePathRedirectionRulesParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.PathMappingSchema>} - Success response
   * @name updatePathRedirectionRules
   * @summary: Update path redirection rule
   * @description: Modify settings for path redirection rules. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/updatePathRedirectionRules/).
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
    } = ContentPlatformModel.PathMappingSchema().validate(responseData, {
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
   * @summary: Update sales channel SEO information
   * @description: Modify configuration settings for SEO. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/updateSEOConfiguration/).
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
   * @summary: Update Customer Support Information
   * @description: Modify information related to customer support. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/updateSupportInformation/).
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

  /**
   * @param {ContentPlatformApplicationValidator.UpdateTranslateUILabelsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.TranslateUiLabels>} - Success response
   * @name updateTranslateUILabels
   * @summary: Update Resource Detail
   * @description: Modifies existing Translate Ui Labels properties including locale, type, and associated configurations. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/updateTranslateUILabels/).
   */
  async updateTranslateUILabels(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.updateTranslateUILabels().validate(
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
    } = ContentPlatformApplicationValidator.updateTranslateUILabels().validate(
      {
        id,

        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > updateTranslateUILabels \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/translate-ui-labels/${id}`,
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
    } = ContentPlatformModel.TranslateUiLabels().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > updateTranslateUILabels \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.UpsertApplicationResourceTranslationInBulkParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.ResourceTranslationBulkUpsert>} -
   *   Success response
   * @name upsertApplicationResourceTranslationInBulk
   * @summary: Bulk update translations
   * @description: Create or update multiple translations in a single request. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/upsertApplicationResourceTranslationInBulk/).
   */
  async upsertApplicationResourceTranslationInBulk(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.upsertApplicationResourceTranslationInBulk().validate(
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
    } = ContentPlatformApplicationValidator.upsertApplicationResourceTranslationInBulk().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > upsertApplicationResourceTranslationInBulk \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/resource/translations/bulk`,
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
    } = ContentPlatformModel.ResourceTranslationBulkUpsert().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > upsertApplicationResourceTranslationInBulk \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = Content;
