const PlatformAPIClient = require("../PlatformAPIClient");
const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const CommunicationPlatformApplicationValidator = require("./CommunicationPlatformApplicationValidator");
const CommunicationPlatformModel = require("./CommunicationPlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Communication {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.CreateAudienceParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.Audience>} - Success response
   * @name createAudience
   * @summary: Create an audience
   * @description: Creates a new email audience. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/createAudience/).
   */
  async createAudience(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.createAudience().validate(
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
    } = CommunicationPlatformApplicationValidator.createAudience().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > createAudience \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sources/datasources`,
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
    } = CommunicationPlatformModel.Audience().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > createAudience \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.CreateCampaignParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.Campaign>} - Success response
   * @name createCampaign
   * @summary: Create a campaign
   * @description: Creates a new communication campaign. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/createCampaign/).
   */
  async createCampaign(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.createCampaign().validate(
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
    } = CommunicationPlatformApplicationValidator.createCampaign().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > createCampaign \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/campaigns/campaigns`,
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
    } = CommunicationPlatformModel.Campaign().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > createCampaign \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.CreateEmailProviderParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.EmailProvider>} - Success response
   * @name createEmailProvider
   * @summary: Create an email provider
   * @description: Creates a new email communication provider. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/createEmailProvider/).
   */
  async createEmailProvider(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.createEmailProvider().validate(
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
    } = CommunicationPlatformApplicationValidator.createEmailProvider().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > createEmailProvider \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/providers`,
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
    } = CommunicationPlatformModel.EmailProvider().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > createEmailProvider \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.CreateEmailTemplateParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.EmailTemplate>} - Success response
   * @name createEmailTemplate
   * @summary: Creat an email template
   * @description: Creates a new email communication template. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/createEmailTemplate/).
   */
  async createEmailTemplate(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.createEmailTemplate().validate(
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
    } = CommunicationPlatformApplicationValidator.createEmailTemplate().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > createEmailTemplate \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/templates`,
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
    } = CommunicationPlatformModel.EmailTemplate().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > createEmailTemplate \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.CreateEventSubscriptionsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.EventSubscriptionsBulkUpdateResult>}
   *   - Success response
   *
   * @name createEventSubscriptions
   * @summary: Create an event subscription
   * @description: Creates a new event subscription. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/createEventSubscriptions/).
   */
  async createEventSubscriptions(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.createEventSubscriptions().validate(
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
    } = CommunicationPlatformApplicationValidator.createEventSubscriptions().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > createEventSubscriptions \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/event/event-subscriptions`,
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
    } = CommunicationPlatformModel.EventSubscriptionsBulkUpdateResult().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > createEventSubscriptions \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.CreateEventSubscriptionsByBulkParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<
   *   CommunicationPlatformModel.EventSubscriptionsBulkUpdateResult[]
   * >}
   *   - Success response
   *
   * @name createEventSubscriptionsByBulk
   * @summary: Create event subscriptions in bulk
   * @description: Creates a new event subscription in bulk. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/createEventSubscriptionsByBulk/).
   */
  async createEventSubscriptionsByBulk(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.createEventSubscriptionsByBulk().validate(
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
    } = CommunicationPlatformApplicationValidator.createEventSubscriptionsByBulk().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > createEventSubscriptionsByBulk \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/event/event-subscriptions/bulkUpdate`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const { error: res_error } = Joi.array()
      .items(CommunicationPlatformModel.EventSubscriptionsBulkUpdateResult())
      .validate(responseData, { abortEarly: false, allowUnknown: true });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > createEventSubscriptionsByBulk \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.CreateJobsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.CreateJobsRes>} - Success response
   * @name createJobs
   * @summary: Create a campaign  jobs
   * @description: Creates a new campaign  job. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/createJobs/).
   */
  async createJobs(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.createJobs().validate(
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
    } = CommunicationPlatformApplicationValidator.createJobs().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > createJobs \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/jobs/jobs`,
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
    } = CommunicationPlatformModel.CreateJobsRes().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > createJobs \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.CreateSmsProviderParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<Object>} - Success response
   * @name createSmsProvider
   * @summary: Create SMS provider
   * @description: Creates a new SMS communication provider. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/createSmsProvider/).
   */
  async createSmsProvider(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.createSmsProvider().validate(
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
    } = CommunicationPlatformApplicationValidator.createSmsProvider().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > createSmsProvider \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/providers`,
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
          message: `Response Validation Warnings for platform > Communication > createSmsProvider \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.CreateSmsTemplateParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.SmsTemplate>} - Success response
   * @name createSmsTemplate
   * @summary: Create a SMS template
   * @description: Creates a new SMS communication template. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/createSmsTemplate/).
   */
  async createSmsTemplate(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.createSmsTemplate().validate(
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
    } = CommunicationPlatformApplicationValidator.createSmsTemplate().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > createSmsTemplate \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/templates`,
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
    } = CommunicationPlatformModel.SmsTemplate().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > createSmsTemplate \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.DeleteAudienceByIdParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.Audience>} - Success response
   * @name deleteAudienceById
   * @summary: Delete an audience
   * @description: Remove a specific audience permenantly. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/deleteAudienceById/).
   */
  async deleteAudienceById(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.deleteAudienceById().validate(
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
    } = CommunicationPlatformApplicationValidator.deleteAudienceById().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > deleteAudienceById \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sources/datasources/${id}`,
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
    } = CommunicationPlatformModel.Audience().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > deleteAudienceById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.DeleteEmailProviderByIdParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.GenericDelete>} - Success response
   * @name deleteEmailProviderById
   * @summary: Delete an email provider
   * @description: Removes a specific email communication provider from the platform permenantly. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/deleteEmailProviderById/).
   */
  async deleteEmailProviderById(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.deleteEmailProviderById().validate(
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
    } = CommunicationPlatformApplicationValidator.deleteEmailProviderById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > deleteEmailProviderById \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/providers/${id}`,
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
    } = CommunicationPlatformModel.GenericDelete().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > deleteEmailProviderById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.DeleteEmailTemplateByIdParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.GenericDelete>} - Success response
   * @name deleteEmailTemplateById
   * @summary: Delete an email template
   * @description: Removes a specific email communication template from the platform permenantly. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/deleteEmailTemplateById/).
   */
  async deleteEmailTemplateById(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.deleteEmailTemplateById().validate(
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
    } = CommunicationPlatformApplicationValidator.deleteEmailTemplateById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > deleteEmailTemplateById \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/templates/${id}`,
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
    } = CommunicationPlatformModel.GenericDelete().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > deleteEmailTemplateById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.DeleteEventSubscriptionsByIdParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.GenericDelete>} - Success response
   * @name deleteEventSubscriptionsById
   * @summary: Delete an event subscriptions
   * @description: Removes a specific event subscription from the platform permenantly. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/deleteEventSubscriptionsById/).
   */
  async deleteEventSubscriptionsById(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.deleteEventSubscriptionsById().validate(
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
    } = CommunicationPlatformApplicationValidator.deleteEventSubscriptionsById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > deleteEventSubscriptionsById \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/event/event-subscriptions/${id}`,
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
    } = CommunicationPlatformModel.GenericDelete().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > deleteEventSubscriptionsById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.DeleteSmsProviderByIdParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.GenericDelete>} - Success response
   * @name deleteSmsProviderById
   * @summary: Delete an SMS provider
   * @description: Removes a specific SMS communication provider from the platform permenantly. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/deleteSmsProviderById/).
   */
  async deleteSmsProviderById(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.deleteSmsProviderById().validate(
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
    } = CommunicationPlatformApplicationValidator.deleteSmsProviderById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > deleteSmsProviderById \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/providers/${id}`,
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
    } = CommunicationPlatformModel.GenericDelete().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > deleteSmsProviderById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.DeleteSmsTemplateByIdParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.GenericDelete>} - Success response
   * @name deleteSmsTemplateById
   * @summary: Delete an SMS template
   * @description: Removes a specific SMS communication template from the platform permenantly. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/deleteSmsTemplateById/).
   */
  async deleteSmsTemplateById(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.deleteSmsTemplateById().validate(
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
    } = CommunicationPlatformApplicationValidator.deleteSmsTemplateById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > deleteSmsTemplateById \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/templates/${id}`,
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
    } = CommunicationPlatformModel.GenericDelete().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > deleteSmsTemplateById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.EditEventSubscriptionsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.EventSubscriptionsBulkUpdateResult>}
   *   - Success response
   *
   * @name editEventSubscriptions
   * @summary: Update an event subscriptions
   * @description: Modifys the configuration and settings of a specific event subscription. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/editEventSubscriptions/).
   */
  async editEventSubscriptions(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.editEventSubscriptions().validate(
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
    } = CommunicationPlatformApplicationValidator.editEventSubscriptions().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > editEventSubscriptions \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/event/event-subscriptions/${id}`,
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
    } = CommunicationPlatformModel.EventSubscriptionsBulkUpdateResult().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > editEventSubscriptions \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetAppProvidersParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.AppProvider>} - Success response
   * @name getAppProviders
   * @summary: Get application providers
   * @description: Retrieve a list of providers associated with the sales channel. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/getAppProviders/).
   */
  async getAppProviders(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.getAppProviders().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CommunicationPlatformApplicationValidator.getAppProviders().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > getAppProviders \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/app-provider/get-provider`,
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
    } = CommunicationPlatformModel.AppProvider().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > getAppProviders \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetAudienceByIdParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.Audience>} - Success response
   * @name getAudienceById
   * @summary: Get an audience
   * @description: Retrieves detailed information about an specific audience. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/getAudienceById/).
   */
  async getAudienceById(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.getAudienceById().validate(
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
    } = CommunicationPlatformApplicationValidator.getAudienceById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > getAudienceById \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sources/datasources/${id}`,
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
    } = CommunicationPlatformModel.Audience().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > getAudienceById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetAudiencesParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.Audiences>} - Success response
   * @name getAudiences
   * @summary: Get all the audiences
   * @description: Retrieves a list of all the audiences. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/getAudiences/).
   */
  async getAudiences(
    { pageNo, pageSize, sort, query, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.getAudiences().validate(
      {
        pageNo,
        pageSize,
        sort,
        query,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CommunicationPlatformApplicationValidator.getAudiences().validate(
      {
        pageNo,
        pageSize,
        sort,
        query,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > getAudiences \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["sort"] = sort;
    query_params["query"] = query;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sources/datasources`,
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
    } = CommunicationPlatformModel.Audiences().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > getAudiences \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetCampaignByIdParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.Campaign>} - Success response
   * @name getCampaignById
   * @summary: Get a campaign
   * @description: Retrieves detailed information about a specific communication campaign. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/getCampaignById/).
   */
  async getCampaignById(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.getCampaignById().validate(
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
    } = CommunicationPlatformApplicationValidator.getCampaignById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > getCampaignById \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/campaigns/campaigns/${id}`,
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
    } = CommunicationPlatformModel.Campaign().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > getCampaignById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetCampaignsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.Campaigns>} - Success response
   * @name getCampaigns
   * @summary: Get all campaigns
   * @description: Retrieves a list of communication campaigns. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/getCampaigns/).
   */
  async getCampaigns(
    { query, pageNo, pageSize, sort, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.getCampaigns().validate(
      {
        query,
        pageNo,
        pageSize,
        sort,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CommunicationPlatformApplicationValidator.getCampaigns().validate(
      {
        query,
        pageNo,
        pageSize,
        sort,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > getCampaigns \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["query"] = query;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["sort"] = sort;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/campaigns/campaigns`,
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
    } = CommunicationPlatformModel.Campaigns().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > getCampaigns \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetCommunicationLogsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.Logs>} - Success response
   * @name getCommunicationLogs
   * @summary: Get communication reports
   * @description: Retrieve a lsit of logs and records of communication activities. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/getCommunicationLogs/).
   */
  async getCommunicationLogs(
    { pageId, pageSize, sort, query, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.getCommunicationLogs().validate(
      {
        pageId,
        pageSize,
        sort,
        query,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CommunicationPlatformApplicationValidator.getCommunicationLogs().validate(
      {
        pageId,
        pageSize,
        sort,
        query,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > getCommunicationLogs \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_id"] = pageId;
    query_params["page_size"] = pageSize;
    query_params["sort"] = sort;
    query_params["query"] = query;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/log`,
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
    } = CommunicationPlatformModel.Logs().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > getCommunicationLogs \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetDefaultSmsProvidersParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.DefaultSmsProviders[]>} -
   *   Success response
   * @name getDefaultSmsProviders
   * @summary: Get all default SMS providers
   * @description: Retrieve all the default SMS communication providers. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/getDefaultSmsProviders/).
   */
  async getDefaultSmsProviders(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.getDefaultSmsProviders().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CommunicationPlatformApplicationValidator.getDefaultSmsProviders().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > getDefaultSmsProviders \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/default-providers`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const { error: res_error } = Joi.array()
      .items(CommunicationPlatformModel.DefaultSmsProviders())
      .validate(responseData, { abortEarly: false, allowUnknown: true });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > getDefaultSmsProviders \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetDummyDatasourcesParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.DummyDatasources[]>} -
   *   Success response
   * @name getDummyDatasources
   * @summary: Get dummy data sources
   * @description: Retrieve a list of dummy data sources. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/getDummyDatasources/).
   */
  async getDummyDatasources(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.getDummyDatasources().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CommunicationPlatformApplicationValidator.getDummyDatasources().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > getDummyDatasources \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sources/datasources/dummy-data-sources`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const { error: res_error } = Joi.array()
      .items(CommunicationPlatformModel.DummyDatasources())
      .validate(responseData, { abortEarly: false, allowUnknown: true });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > getDummyDatasources \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetDummyDatasourcesMetaParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.DummyDatasourcesMeta>} -
   *   Success response
   * @name getDummyDatasourcesMeta
   * @summary: Get dummy data sources metadata
   * @description: Retrieve metadata information about dummy data sources. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/getDummyDatasourcesMeta/).
   */
  async getDummyDatasourcesMeta(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.getDummyDatasourcesMeta().validate(
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
    } = CommunicationPlatformApplicationValidator.getDummyDatasourcesMeta().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > getDummyDatasourcesMeta \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sources/datasources/dummy-data-sources-meta/${id}`,
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
    } = CommunicationPlatformModel.DummyDatasourcesMeta().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > getDummyDatasourcesMeta \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetEmailProviderByIdParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.EmailProvider>} - Success response
   * @name getEmailProviderById
   * @summary: Get a email provider
   * @description: Retrieves detailed information about a specific email communication provider. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/getEmailProviderById/).
   */
  async getEmailProviderById(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.getEmailProviderById().validate(
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
    } = CommunicationPlatformApplicationValidator.getEmailProviderById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > getEmailProviderById \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/providers/${id}`,
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
    } = CommunicationPlatformModel.EmailProvider().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > getEmailProviderById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetEmailProvidersParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.EmailProviders>} - Success response
   * @name getEmailProviders
   * @summary: Get all email providers
   * @description: Retrieves a list of all email communication providers associated with the sales channel.. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/getEmailProviders/).
   */
  async getEmailProviders(
    { pageNo, pageSize, sort, query, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.getEmailProviders().validate(
      {
        pageNo,
        pageSize,
        sort,
        query,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CommunicationPlatformApplicationValidator.getEmailProviders().validate(
      {
        pageNo,
        pageSize,
        sort,
        query,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > getEmailProviders \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["sort"] = sort;
    query_params["query"] = query;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/providers`,
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
    } = CommunicationPlatformModel.EmailProviders().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > getEmailProviders \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetEmailTemplateByIdParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.EmailTemplate>} - Success response
   * @name getEmailTemplateById
   * @summary: Get an email template
   * @description: Retrieves detailed information about a specific email communication template. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/getEmailTemplateById/).
   */
  async getEmailTemplateById(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.getEmailTemplateById().validate(
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
    } = CommunicationPlatformApplicationValidator.getEmailTemplateById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > getEmailTemplateById \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/templates/${id}`,
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
    } = CommunicationPlatformModel.EmailTemplate().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > getEmailTemplateById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetEmailTemplatesParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.EmailTemplates>} - Success response
   * @name getEmailTemplates
   * @summary: Get all email templates
   * @description: Retrieves a list of available email communication templates. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/getEmailTemplates/).
   */
  async getEmailTemplates(
    { pageNo, pageSize, sort, query, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.getEmailTemplates().validate(
      {
        pageNo,
        pageSize,
        sort,
        query,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CommunicationPlatformApplicationValidator.getEmailTemplates().validate(
      {
        pageNo,
        pageSize,
        sort,
        query,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > getEmailTemplates \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["sort"] = sort;
    query_params["query"] = query;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/templates`,
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
    } = CommunicationPlatformModel.EmailTemplates().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > getEmailTemplates \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetEventSubscriptionsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.EventSubscriptions>} -
   *   Success response
   * @name getEventSubscriptions
   * @summary: Get all event subscriptions
   * @description: Retrieves a list of all event subscriptions. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/getEventSubscriptions/).
   */
  async getEventSubscriptions(
    {
      pageNo,
      pageSize,
      populate,
      group,
      subGroup,
      fulfillmentOptionSlug,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.getEventSubscriptions().validate(
      {
        pageNo,
        pageSize,
        populate,
        group,
        subGroup,
        fulfillmentOptionSlug,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CommunicationPlatformApplicationValidator.getEventSubscriptions().validate(
      {
        pageNo,
        pageSize,
        populate,
        group,
        subGroup,
        fulfillmentOptionSlug,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > getEventSubscriptions \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["populate"] = populate;
    query_params["group"] = group;
    query_params["sub_group"] = subGroup;
    query_params["fulfillment_option_slug"] = fulfillmentOptionSlug;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/event/event-subscriptions`,
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
    } = CommunicationPlatformModel.EventSubscriptions().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > getEventSubscriptions \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetEventSubscriptionsByIdParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.EventSubscription>} - Success response
   * @name getEventSubscriptionsById
   * @summary: Get an event subscription
   * @description: Retrieves detailed information about a specific event subscription. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/getEventSubscriptionsById/).
   */
  async getEventSubscriptionsById(
    { id, populate, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.getEventSubscriptionsById().validate(
      {
        id,
        populate,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CommunicationPlatformApplicationValidator.getEventSubscriptionsById().validate(
      {
        id,
        populate,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > getEventSubscriptionsById \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["populate"] = populate;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/event/event-subscriptions/${id}`,
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
    } = CommunicationPlatformModel.EventSubscription().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > getEventSubscriptionsById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetGlobalProvidersParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.GlobalProviders>} - Success response
   * @name getGlobalProviders
   * @summary: Get global providers
   * @description: Retrieve a list of global communication providers associated with the sales channel.. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/getGlobalProviders/).
   */
  async getGlobalProviders(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.getGlobalProviders().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CommunicationPlatformApplicationValidator.getGlobalProviders().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > getGlobalProviders \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/app-provider/global-providers`,
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
    } = CommunicationPlatformModel.GlobalProviders().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > getGlobalProviders \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetGlobalVariablesParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.GetGlobalVariablesResult>}
   *   - Success response
   *
   * @name getGlobalVariables
   * @summary: Get all global variables
   * @description: Retrieves a list of communication global variables. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/getGlobalVariables/).
   */
  async getGlobalVariables(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.getGlobalVariables().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CommunicationPlatformApplicationValidator.getGlobalVariables().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > getGlobalVariables \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/global-variables`,
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
    } = CommunicationPlatformModel.GetGlobalVariablesResult().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > getGlobalVariables \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetJobLogsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.JobLogs>} - Success response
   * @name getJobLogs
   * @summary: Get logs of all campaign job
   * @description: Retrieve logs and details related to campaign jobs. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/getJobLogs/).
   */
  async getJobLogs(
    { pageNo, pageSize, sort, query, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.getJobLogs().validate(
      {
        pageNo,
        pageSize,
        sort,
        query,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CommunicationPlatformApplicationValidator.getJobLogs().validate(
      {
        pageNo,
        pageSize,
        sort,
        query,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > getJobLogs \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["sort"] = sort;
    query_params["query"] = query;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/jobs/logs`,
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
    } = CommunicationPlatformModel.JobLogs().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > getJobLogs \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetJobsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.Jobs>} - Success response
   * @name getJobs
   * @summary: Get all campaign jobs
   * @description: Retrieves a list of campaign jobs. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/getJobs/).
   */
  async getJobs(
    { pageNo, pageSize, sort, query, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.getJobs().validate(
      {
        pageNo,
        pageSize,
        sort,
        query,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CommunicationPlatformApplicationValidator.getJobs().validate(
      {
        pageNo,
        pageSize,
        sort,
        query,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > getJobs \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["sort"] = sort;
    query_params["query"] = query;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/jobs/jobs`,
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
    } = CommunicationPlatformModel.Jobs().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > getJobs \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetNSampleRecordsFromCsvParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.GetNRecordsCsvRes>} - Success response
   * @name getNSampleRecordsFromCsv
   * @summary: Get N sample records of a CSV
   * @description: Retrieve a specified number of sample records from a CSV data source. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/getNSampleRecordsFromCsv/).
   */
  async getNSampleRecordsFromCsv(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.getNSampleRecordsFromCsv().validate(
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
    } = CommunicationPlatformApplicationValidator.getNSampleRecordsFromCsv().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > getNSampleRecordsFromCsv \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sources/get-n-records`,
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
    } = CommunicationPlatformModel.GetNRecordsCsvRes().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > getNSampleRecordsFromCsv \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetNSampleRecordsFromCsvByGetParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.GetNRecordsCsvRes>} - Success response
   * @name getNSampleRecordsFromCsvByGet
   * @summary: Get N sample records of a CSV
   * @description: Retrieve a specified number of sample records from a CSV data source. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/getNSampleRecordsFromCsvByGet/).
   */
  async getNSampleRecordsFromCsvByGet(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.getNSampleRecordsFromCsvByGet().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CommunicationPlatformApplicationValidator.getNSampleRecordsFromCsvByGet().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > getNSampleRecordsFromCsvByGet \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sources/get-n-records`,
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
    } = CommunicationPlatformModel.GetNRecordsCsvRes().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > getNSampleRecordsFromCsvByGet \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetOtpConfigurationParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.OtpConfiguration>} - Success response
   * @name getOtpConfiguration
   * @summary: Get configuration of otp
   * @description: Retrieves all configurations related to OTP. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/getOtpConfiguration/).
   */
  async getOtpConfiguration(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.getOtpConfiguration().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CommunicationPlatformApplicationValidator.getOtpConfiguration().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > getOtpConfiguration \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/otp/otp-configuration`,
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
    } = CommunicationPlatformModel.OtpConfiguration().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > getOtpConfiguration \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetSmsProviderByIdParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<Object>} - Success response
   * @name getSmsProviderById
   * @summary: Get a SMS provider
   * @description: Retrieve detailed information about a specific SMS communication provider. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/getSmsProviderById/).
   */
  async getSmsProviderById(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.getSmsProviderById().validate(
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
    } = CommunicationPlatformApplicationValidator.getSmsProviderById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > getSmsProviderById \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/providers/${id}`,
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
          message: `Response Validation Warnings for platform > Communication > getSmsProviderById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetSmsProvidersParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<Object>} - Success response
   * @name getSmsProviders
   * @summary: Get all SMS providers
   * @description: Retrieves a list of SMS communication providers. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/getSmsProviders/).
   */
  async getSmsProviders(
    { pageNo, pageSize, sort, query, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.getSmsProviders().validate(
      {
        pageNo,
        pageSize,
        sort,
        query,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CommunicationPlatformApplicationValidator.getSmsProviders().validate(
      {
        pageNo,
        pageSize,
        sort,
        query,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > getSmsProviders \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["sort"] = sort;
    query_params["query"] = query;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/providers`,
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
          message: `Response Validation Warnings for platform > Communication > getSmsProviders \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetSmsTemplateByIdParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.SmsTemplate>} - Success response
   * @name getSmsTemplateById
   * @summary: Get a SMS template
   * @description: Retrieves detailed information about a specific SMS communication template. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/getSmsTemplateById/).
   */
  async getSmsTemplateById(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.getSmsTemplateById().validate(
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
    } = CommunicationPlatformApplicationValidator.getSmsTemplateById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > getSmsTemplateById \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/templates/${id}`,
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
    } = CommunicationPlatformModel.SmsTemplate().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > getSmsTemplateById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetSmsTemplatesParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.SmsTemplates>} - Success response
   * @name getSmsTemplates
   * @summary: Get all SMS templates
   * @description: Retrieve a list of all SMS communication templates. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/getSmsTemplates/).
   */
  async getSmsTemplates(
    { pageNo, pageSize, sort, query, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.getSmsTemplates().validate(
      {
        pageNo,
        pageSize,
        sort,
        query,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CommunicationPlatformApplicationValidator.getSmsTemplates().validate(
      {
        pageNo,
        pageSize,
        sort,
        query,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > getSmsTemplates \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["sort"] = sort;
    query_params["query"] = query;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/templates`,
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
    } = CommunicationPlatformModel.SmsTemplates().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > getSmsTemplates \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetStatsOfCampaignByIdParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.GetStats>} - Success response
   * @name getStatsOfCampaignById
   * @summary: Get campaign statistics
   * @description: Retrieves statistical data for a specific a communication campaign. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/getStatsOfCampaignById/).
   */
  async getStatsOfCampaignById(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.getStatsOfCampaignById().validate(
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
    } = CommunicationPlatformApplicationValidator.getStatsOfCampaignById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > getStatsOfCampaignById \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/campaigns/get-stats/${id}`,
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
    } = CommunicationPlatformModel.GetStats().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > getStatsOfCampaignById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetSubscribedEmailTemplatesParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.EmailTemplates>} - Success response
   * @name getSubscribedEmailTemplates
   * @summary: Get all subscribed email templates
   * @description: Retrieves a list of email communication templates that are subscribed to an event. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/getSubscribedEmailTemplates/).
   */
  async getSubscribedEmailTemplates(
    { pageNo, pageSize, query, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.getSubscribedEmailTemplates().validate(
      {
        pageNo,
        pageSize,
        query,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CommunicationPlatformApplicationValidator.getSubscribedEmailTemplates().validate(
      {
        pageNo,
        pageSize,
        query,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > getSubscribedEmailTemplates \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["query"] = query;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/subscribedTemplates`,
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
    } = CommunicationPlatformModel.EmailTemplates().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > getSubscribedEmailTemplates \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetSubscribedSmsTemplatesParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.SmsTemplates>} - Success response
   * @name getSubscribedSmsTemplates
   * @summary: Get all subscribed SMS templates
   * @description: Retrieve a list of SMS communication templates that are subscribed to an event. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/getSubscribedSmsTemplates/).
   */
  async getSubscribedSmsTemplates(
    { pageNo, pageSize, query, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.getSubscribedSmsTemplates().validate(
      {
        pageNo,
        pageSize,
        query,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CommunicationPlatformApplicationValidator.getSubscribedSmsTemplates().validate(
      {
        pageNo,
        pageSize,
        query,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > getSubscribedSmsTemplates \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["query"] = query;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/subscribedTemplates`,
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
    } = CommunicationPlatformModel.SmsTemplates().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > getSubscribedSmsTemplates \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetSystemEmailTemplatesParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.SystemEmailTemplates>} -
   *   Success response
   * @name getSystemEmailTemplates
   * @summary: Get all system email templates
   * @description: Retrieves system-defined email communication templates. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/getSystemEmailTemplates/).
   */
  async getSystemEmailTemplates(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.getSystemEmailTemplates().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CommunicationPlatformApplicationValidator.getSystemEmailTemplates().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > getSystemEmailTemplates \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/system-templates`,
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
    } = CommunicationPlatformModel.SystemEmailTemplates().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > getSystemEmailTemplates \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetSystemSmsTemplatesParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.SystemSmsTemplates>} -
   *   Success response
   * @name getSystemSmsTemplates
   * @summary: Gets all system SMS templates
   * @description: Retrieves system-defined SMS communication templates. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/getSystemSmsTemplates/).
   */
  async getSystemSmsTemplates(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.getSystemSmsTemplates().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CommunicationPlatformApplicationValidator.getSystemSmsTemplates().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > getSystemSmsTemplates \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/system-templates`,
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
    } = CommunicationPlatformModel.SystemSmsTemplates().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > getSystemSmsTemplates \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.PostGlobalVariablesParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.CreateGlobalVariablesResult>}
   *   - Success response
   *
   * @name postGlobalVariables
   * @summary: Create global variables
   * @description: Updates and creates communication global variables. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/postGlobalVariables/).
   */
  async postGlobalVariables(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.postGlobalVariables().validate(
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
    } = CommunicationPlatformApplicationValidator.postGlobalVariables().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > postGlobalVariables \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/global-variables`,
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
    } = CommunicationPlatformModel.CreateGlobalVariablesResult().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > postGlobalVariables \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.SendCommunicationAsynchronouslyParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.EngineResult>} - Success response
   * @name sendCommunicationAsynchronously
   * @summary: Send communication asynchronously
   * @description: Sends communications to sellers with deffered delivery. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/sendCommunicationAsynchronously/).
   */
  async sendCommunicationAsynchronously(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.sendCommunicationAsynchronously().validate(
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
    } = CommunicationPlatformApplicationValidator.sendCommunicationAsynchronously().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > sendCommunicationAsynchronously \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/engine/send-async`,
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
    } = CommunicationPlatformModel.EngineResult().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > sendCommunicationAsynchronously \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.SendCommunicationSynchronouslyParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.EngineResult>} - Success response
   * @name sendCommunicationSynchronously
   * @summary: Send communication synchronously
   * @description: Sends real-time communications to sellers with immediate delivery. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/sendCommunicationSynchronously/).
   */
  async sendCommunicationSynchronously(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.sendCommunicationSynchronously().validate(
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
    } = CommunicationPlatformApplicationValidator.sendCommunicationSynchronously().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > sendCommunicationSynchronously \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/engine/send-instant`,
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
    } = CommunicationPlatformModel.EngineResult().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > sendCommunicationSynchronously \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.SendOtpParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.SendOtpCommsRes>} - Success response
   * @name sendOtp
   * @summary: Send OTP
   * @description: Sends a one-time password (OTP) for authentication or verification. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/sendOtp/).
   */
  async sendOtp(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.sendOtp().validate(
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
    } = CommunicationPlatformApplicationValidator.sendOtp().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > sendOtp \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/otp/send-otp-comms`,
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
    } = CommunicationPlatformModel.SendOtpCommsRes().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > sendOtp \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.TriggerCampaignJobParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.TriggerJobResult>} - Success response
   * @name triggerCampaignJob
   * @summary: Trigger a campaign job
   * @description: Initiates a job to execute a communication campaign. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/triggerCampaignJob/).
   */
  async triggerCampaignJob(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.triggerCampaignJob().validate(
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
    } = CommunicationPlatformApplicationValidator.triggerCampaignJob().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > triggerCampaignJob \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/jobs/trigger-job`,
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
    } = CommunicationPlatformModel.TriggerJobResult().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > triggerCampaignJob \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.UpdateAppProvidersParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.AppProvider>} - Success response
   * @name updateAppProviders
   * @summary: Update application providers
   * @description: Modify provider configuration using provider object id . - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/updateAppProviders/).
   */
  async updateAppProviders(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.updateAppProviders().validate(
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
    } = CommunicationPlatformApplicationValidator.updateAppProviders().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > updateAppProviders \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/app-provider/update-provider`,
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
    } = CommunicationPlatformModel.AppProvider().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > updateAppProviders \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.UpdateAudienceByIdParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.Audience>} - Success response
   * @name updateAudienceById
   * @summary: Update an audience
   * @description: Modify the configuration of a specific audience. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/updateAudienceById/).
   */
  async updateAudienceById(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.updateAudienceById().validate(
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
    } = CommunicationPlatformApplicationValidator.updateAudienceById().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > updateAudienceById \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sources/datasources/${id}`,
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
    } = CommunicationPlatformModel.Audience().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > updateAudienceById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.UpdateCampaignByIdParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.Campaign>} - Success response
   * @name updateCampaignById
   * @summary: Update a campaign
   * @description: Modify the configuration of a specific communication campaign. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/updateCampaignById/).
   */
  async updateCampaignById(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.updateCampaignById().validate(
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
    } = CommunicationPlatformApplicationValidator.updateCampaignById().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > updateCampaignById \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/campaigns/campaigns/${id}`,
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
    } = CommunicationPlatformModel.Campaign().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > updateCampaignById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.UpdateEmailProviderByIdParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.EmailProvider>} - Success response
   * @name updateEmailProviderById
   * @summary: Update email provider
   * @description: Modifys the configurations of a specific email communication provider. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/updateEmailProviderById/).
   */
  async updateEmailProviderById(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.updateEmailProviderById().validate(
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
    } = CommunicationPlatformApplicationValidator.updateEmailProviderById().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > updateEmailProviderById \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/providers/${id}`,
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
    } = CommunicationPlatformModel.EmailProvider().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > updateEmailProviderById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.UpdateEmailTemplateByIdParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.EmailTemplate>} - Success response
   * @name updateEmailTemplateById
   * @summary: Update an email template
   * @description: Modifys the content and settings of a specific email communication template. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/updateEmailTemplateById/).
   */
  async updateEmailTemplateById(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.updateEmailTemplateById().validate(
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
    } = CommunicationPlatformApplicationValidator.updateEmailTemplateById().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > updateEmailTemplateById \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/templates/${id}`,
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
    } = CommunicationPlatformModel.EmailTemplate().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > updateEmailTemplateById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.UpdateOtpConfigurationParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.OtpConfiguration>} - Success response
   * @name updateOtpConfiguration
   * @summary: Update configuration of otp
   * @description: Updates all configurations related to OTP. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/updateOtpConfiguration/).
   */
  async updateOtpConfiguration(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.updateOtpConfiguration().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CommunicationPlatformApplicationValidator.updateOtpConfiguration().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > updateOtpConfiguration \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/otp/otp-configuration`,
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
    } = CommunicationPlatformModel.OtpConfiguration().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > updateOtpConfiguration \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.UpdateSmsProviderByIdParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<Object>} - Success response
   * @name updateSmsProviderById
   * @summary: Update SMS provider
   * @description: Modifys the configurations of a specific SMS communication provider. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/updateSmsProviderById/).
   */
  async updateSmsProviderById(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.updateSmsProviderById().validate(
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
    } = CommunicationPlatformApplicationValidator.updateSmsProviderById().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > updateSmsProviderById \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/providers/${id}`,
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
          message: `Response Validation Warnings for platform > Communication > updateSmsProviderById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.UpdateSmsTemplateByIdParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.SmsTemplate>} - Success response
   * @name updateSmsTemplateById
   * @summary: Update a SMS template
   * @description: Modifys the content and settings of a specific SMS communication template. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/updateSmsTemplateById/).
   */
  async updateSmsTemplateById(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.updateSmsTemplateById().validate(
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
    } = CommunicationPlatformApplicationValidator.updateSmsTemplateById().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > updateSmsTemplateById \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/templates/${id}`,
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
    } = CommunicationPlatformModel.SmsTemplate().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > updateSmsTemplateById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.VerfiyOtpParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.VerifyOtpCommsSuccessRes>}
   *   - Success response
   *
   * @name verfiyOtp
   * @summary: Verify OTP
   * @description: Verifies the one-time password (OTP) for authentication or verification. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/communication/verfiyOtp/).
   */
  async verfiyOtp(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.verfiyOtp().validate(
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
    } = CommunicationPlatformApplicationValidator.verfiyOtp().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > verfiyOtp \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/otp/verify-otp-comms`,
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
    } = CommunicationPlatformModel.VerifyOtpCommsSuccessRes().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > verfiyOtp \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = Communication;
