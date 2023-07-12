const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
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
   * @returns {Promise<CommunicationPlatformModel.Audience>} - Success response
   * @name createAudience
   * @summary: Create audience
   * @description: Create audience
   */
  async createAudience({ body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.Audience().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > createAudience \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.CreateCampaignParam} arg
   *   - Arg object
   *
   * @returns {Promise<CommunicationPlatformModel.Campaign>} - Success response
   * @name createCampaign
   * @summary: Create campaign
   * @description: Create campaign
   */
  async createCampaign({ body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.Campaign().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > createCampaign \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.CreateEmailProviderParam} arg
   *   - Arg object
   *
   * @returns {Promise<CommunicationPlatformModel.EmailProvider>} - Success response
   * @name createEmailProvider
   * @summary: Create email provider
   * @description: By using this API, a new email provider will be created based on the user's customised definitions.
   */
  async createEmailProvider({ body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.EmailProvider().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > createEmailProvider \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.CreateEmailTemplateParam} arg
   *   - Arg object
   *
   * @returns {Promise<CommunicationPlatformModel.EmailTemplate>} - Success response
   * @name createEmailTemplate
   * @summary: Create email template
   * @description: Email templates are predefined formats linked to various events for delivering messages to users. Use this API to create an email template.
   */
  async createEmailTemplate({ body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.EmailTemplate().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > createEmailTemplate \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.CreateSmsProviderParam} arg
   *   - Arg object
   *
   * @returns {Promise<CommunicationPlatformModel.SmsProvider>} - Success response
   * @name createSmsProvider
   * @summary: Create sms provider
   * @description: By using this API, a new SMS provider will be created based on the user's customised definitions.
   */
  async createSmsProvider({ body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.SmsProvider().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > createSmsProvider \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.CreateSmsTemplateParam} arg
   *   - Arg object
   *
   * @returns {Promise<CommunicationPlatformModel.SmsTemplate>} - Success response
   * @name createSmsTemplate
   * @summary: Create sms template
   * @description: SMS templates are predefined message formats linked to various events for delivering messages to users. Use this API to create an sms template.
   */
  async createSmsTemplate({ body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.SmsTemplate().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > createSmsTemplate \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.CreateVoiceProviderParam} arg
   *   - Arg object
   *
   * @returns {Promise<CommunicationPlatformModel.VoiceProvider>} - Success response
   * @name createVoiceProvider
   * @summary: Create voice provider
   * @description: Create voice provider
   */
  async createVoiceProvider({ body } = {}) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.createVoiceProvider().validate(
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
    } = CommunicationPlatformApplicationValidator.createVoiceProvider().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > createVoiceProvider \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/voice/providers`,
      query_params,
      body
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.VoiceProvider().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > createVoiceProvider \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.CreateVoiceTemplateParam} arg
   *   - Arg object
   *
   * @returns {Promise<CommunicationPlatformModel.VoiceTemplateRes>} - Success response
   * @name createVoiceTemplate
   * @summary: Create voice template
   * @description: Create voice template
   */
  async createVoiceTemplate({ body } = {}) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.createVoiceTemplate().validate(
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
    } = CommunicationPlatformApplicationValidator.createVoiceTemplate().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > createVoiceTemplate \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/voice/templates`,
      query_params,
      body
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.VoiceTemplateRes().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > createVoiceTemplate \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.DeleteEmailProviderByIdParam} arg
   *   - Arg object
   *
   * @returns {Promise<CommunicationPlatformModel.GenericSuccess>} - Success response
   * @name deleteEmailProviderById
   * @summary: delete email provider by id
   * @description: By using this api, you can delete a certain email provider based on its ID.
   */
  async deleteEmailProviderById({ id } = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.GenericSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > deleteEmailProviderById \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.DeleteEmailTemplateByIdParam} arg
   *   - Arg object
   *
   * @returns {Promise<CommunicationPlatformModel.GenericDelete>} - Success response
   * @name deleteEmailTemplateById
   * @summary: Delete email template by id
   * @description: Email templates are predefined formats linked to various events for delivering messages to users. Use this API to delete an email template by id.
   */
  async deleteEmailTemplateById({ id } = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.GenericDelete().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > deleteEmailTemplateById \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.DeleteSmsProviderByIdParam} arg
   *   - Arg object
   *
   * @returns {Promise<CommunicationPlatformModel.GenericSuccess>} - Success response
   * @name deleteSmsProviderById
   * @summary: delete sms provider by id
   * @description: By using this api, you can delete a certain SMS provider based on its ID.
   */
  async deleteSmsProviderById({ id } = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.GenericSuccess().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > deleteSmsProviderById \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.DeleteSmsTemplateByIdParam} arg
   *   - Arg object
   *
   * @returns {Promise<CommunicationPlatformModel.GenericDelete>} - Success response
   * @name deleteSmsTemplateById
   * @summary: Delete sms template by id
   * @description: SMS templates are predefined message formats linked to various events for delivering messages to users. Use this API to delete an sms template by ID.
   */
  async deleteSmsTemplateById({ id } = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.GenericDelete().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > deleteSmsTemplateById \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.DeleteVoiceTemplateByIdParam} arg
   *   - Arg object
   *
   * @returns {Promise<CommunicationPlatformModel.VoiceTemplateDeleteSuccessRes>}
   *   - Success response
   *
   * @name deleteVoiceTemplateById
   * @summary: Delete voice template by id
   * @description: Delete voice template by id
   */
  async deleteVoiceTemplateById({ id } = {}) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.deleteVoiceTemplateById().validate(
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
    } = CommunicationPlatformApplicationValidator.deleteVoiceTemplateById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > deleteVoiceTemplateById \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/voice/templates/${id}`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.VoiceTemplateDeleteSuccessRes().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > deleteVoiceTemplateById \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetAppProvidersParam} arg
   *   - Arg object
   *
   * @returns {Promise<CommunicationPlatformModel.AppProvider>} - Success response
   * @name getAppProviders
   * @summary: Get app providers
   * @description: Using this API will return a list of application providers.
   */
  async getAppProviders({} = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.AppProvider().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > getAppProviders \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetAudienceByIdParam} arg
   *   - Arg object
   *
   * @returns {Promise<CommunicationPlatformModel.Audience>} - Success response
   * @name getAudienceById
   * @summary: Get audience by id
   * @description: Get audience by id
   */
  async getAudienceById({ id } = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.Audience().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > getAudienceById \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetAudiencesParam} arg
   *   - Arg object
   *
   * @returns {Promise<CommunicationPlatformModel.Audiences>} - Success response
   * @name getAudiences
   * @summary: Get audiences
   * @description: Get audiences
   */
  async getAudiences({ pageNo, pageSize, sort } = {}) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.getAudiences().validate(
      {
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
    } = CommunicationPlatformApplicationValidator.getAudiences().validate(
      {
        pageNo,
        pageSize,
        sort,
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

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sources/datasources`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.Audiences().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > getAudiences \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetBigqueryHeadersParam} arg
   *   - Arg object
   *
   * @returns {Promise<CommunicationPlatformModel.BigqueryHeadersRes>} -
   *   Success response
   * @name getBigqueryHeaders
   * @summary: Get bigquery headers
   * @description: Get bigquery headers
   */
  async getBigqueryHeaders({ body } = {}) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.getBigqueryHeaders().validate(
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
    } = CommunicationPlatformApplicationValidator.getBigqueryHeaders().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > getBigqueryHeaders \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sources/bigquery-headers`,
      query_params,
      body
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.BigqueryHeadersRes().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > getBigqueryHeaders \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetCampaignByIdParam} arg
   *   - Arg object
   *
   * @returns {Promise<CommunicationPlatformModel.Campaign>} - Success response
   * @name getCampaignById
   * @summary: Get campaign by id
   * @description: Get campaign by id
   */
  async getCampaignById({ id } = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.Campaign().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > getCampaignById \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetCampaignsParam} arg
   *   - Arg object
   *
   * @returns {Promise<CommunicationPlatformModel.Campaigns>} - Success response
   * @name getCampaigns
   * @summary: Get campaigns
   * @description: Get campaigns
   */
  async getCampaigns({ pageNo, pageSize, sort } = {}) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.getCampaigns().validate(
      {
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
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["sort"] = sort;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/campaigns/campaigns`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.Campaigns().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > getCampaigns \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetCommunicationLogsParam} arg
   *   - Arg object
   *
   * @returns {Promise<CommunicationPlatformModel.Logs>} - Success response
   * @name getCommunicationLogs
   * @summary: Get communication logs
   * @description: Get communication logs
   */
  async getCommunicationLogs({ pageId, pageSize, sort, query } = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.Logs().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > getCommunicationLogs \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetDefaultEmailProvidersParam} arg
   *   - Arg object
   *
   * @returns {Promise<CommunicationPlatformModel.DefaultEmailProviders[]>} -
   *   Success response
   * @name getDefaultEmailProviders
   * @summary: Get default email providers
   * @description: Using this api will fetch a list of email providers provided by the system i.e the default providers.
   */
  async getDefaultEmailProviders({} = {}) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.getDefaultEmailProviders().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CommunicationPlatformApplicationValidator.getDefaultEmailProviders().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > getDefaultEmailProviders \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/default-providers`,
      query_params,
      undefined
    );

    const { error: res_error } = Joi.array()
      .items(CommunicationPlatformModel.DefaultEmailProviders())
      .validate(response, { abortEarly: false, allowUnknown: false });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > getDefaultEmailProviders \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetDefaultSmsProvidersParam} arg
   *   - Arg object
   *
   * @returns {Promise<CommunicationPlatformModel.DefaultSmsProviders[]>} -
   *   Success response
   * @name getDefaultSmsProviders
   * @summary: Get default sms providers
   * @description: Using this api will fetch a list of SMS providers provided by the system i.e the default providers.
   */
  async getDefaultSmsProviders({} = {}) {
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
      undefined
    );

    const { error: res_error } = Joi.array()
      .items(CommunicationPlatformModel.DefaultSmsProviders())
      .validate(response, { abortEarly: false, allowUnknown: false });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > getDefaultSmsProviders \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetEmailProviderByIdParam} arg
   *   - Arg object
   *
   * @returns {Promise<CommunicationPlatformModel.EmailProvider>} - Success response
   * @name getEmailProviderById
   * @summary: Get email provider by id
   * @description: By using this API, a specific email provider will be returned that was retrieved based on the provider's id.
   */
  async getEmailProviderById({ id } = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.EmailProvider().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > getEmailProviderById \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetEmailProvidersParam} arg
   *   - Arg object
   *
   * @returns {Promise<CommunicationPlatformModel.EmailProviders>} - Success response
   * @name getEmailProviders
   * @summary: Get email providers
   * @description: By using this api, you may retrieve all the email providers that the user has setup. The outcome will be in a paginated form, fetching providers according to the current page and page number parameters.
   */
  async getEmailProviders({ pageNo, pageSize, sort } = {}) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.getEmailProviders().validate(
      {
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
    } = CommunicationPlatformApplicationValidator.getEmailProviders().validate(
      {
        pageNo,
        pageSize,
        sort,
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

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/providers`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.EmailProviders().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > getEmailProviders \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetEmailTemplateByIdParam} arg
   *   - Arg object
   *
   * @returns {Promise<CommunicationPlatformModel.EmailTemplate>} - Success response
   * @name getEmailTemplateById
   * @summary: Get email template by id
   * @description: Email templates are predefined formats linked to various events for delivering messages to users. Use this API to get an email template by id.
   */
  async getEmailTemplateById({ id } = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.EmailTemplate().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > getEmailTemplateById \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetEmailTemplatesParam} arg
   *   - Arg object
   *
   * @returns {Promise<CommunicationPlatformModel.EmailTemplates>} - Success response
   * @name getEmailTemplates
   * @summary: Get email templates
   * @description: Email templates are predefined formats linked to various events for delivering messages to users. Use this API to get all email templates.
   */
  async getEmailTemplates({ pageNo, pageSize, sort } = {}) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.getEmailTemplates().validate(
      {
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
    } = CommunicationPlatformApplicationValidator.getEmailTemplates().validate(
      {
        pageNo,
        pageSize,
        sort,
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

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/templates`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.EmailTemplates().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > getEmailTemplates \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetEventSubscriptionsParam} arg
   *   - Arg object
   *
   * @returns {Promise<CommunicationPlatformModel.EventSubscriptions>} -
   *   Success response
   * @name getEventSubscriptions
   * @summary: Get event subscriptions
   * @description: Get event subscriptions
   */
  async getEventSubscriptions({ pageNo, pageSize, populate, query } = {}) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.getEventSubscriptions().validate(
      {
        pageNo,
        pageSize,
        populate,
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
    } = CommunicationPlatformApplicationValidator.getEventSubscriptions().validate(
      {
        pageNo,
        pageSize,
        populate,
        query,
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
    query_params["query"] = query;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/event/event-subscriptions`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.EventSubscriptions().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > getEventSubscriptions \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetGlobalProvidersParam} arg
   *   - Arg object
   *
   * @returns {Promise<CommunicationPlatformModel.GlobalProviders>} - Success response
   * @name getGlobalProviders
   * @summary: Get global providers
   * @description: Using this API, will retrieve a list of global providers.
   */
  async getGlobalProviders({} = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.GlobalProviders().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > getGlobalProviders \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetGlobalVariablesParam} arg
   *   - Arg object
   *
   * @returns {Promise<CommunicationPlatformModel.GlobalVariablesGetResponse>}
   *   - Success response
   *
   * @name getGlobalVariables
   * @summary: get global variables
   * @description: get global variables
   */
  async getGlobalVariables({} = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.GlobalVariablesGetResponse().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > getGlobalVariables \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetJobLogsParam} arg - Arg object
   * @returns {Promise<CommunicationPlatformModel.JobLogs>} - Success response
   * @name getJobLogs
   * @summary: Get job logs
   * @description: Get job logs
   */
  async getJobLogs({ pageNo, pageSize, sort } = {}) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.getJobLogs().validate(
      {
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
    } = CommunicationPlatformApplicationValidator.getJobLogs().validate(
      {
        pageNo,
        pageSize,
        sort,
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

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/jobs/logs`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.JobLogs().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > getJobLogs \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetJobsParam} arg - Arg object
   * @returns {Promise<CommunicationPlatformModel.Jobs>} - Success response
   * @name getJobs
   * @summary: Get jobs
   * @description: Get jobs
   */
  async getJobs({ pageNo, pageSize, sort } = {}) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.getJobs().validate(
      {
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
    } = CommunicationPlatformApplicationValidator.getJobs().validate(
      {
        pageNo,
        pageSize,
        sort,
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

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/jobs/jobs`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.Jobs().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > getJobs \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetNSampleRecordsFromCsvParam} arg
   *   - Arg object
   *
   * @returns {Promise<CommunicationPlatformModel.GetNRecordsCsvRes>} - Success response
   * @name getNSampleRecordsFromCsv
   * @summary: Get n sample records from csv
   * @description: Get n sample records from csv
   */
  async getNSampleRecordsFromCsv({ body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.GetNRecordsCsvRes().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > getNSampleRecordsFromCsv \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetSmsProviderByIdParam} arg
   *   - Arg object
   *
   * @returns {Promise<CommunicationPlatformModel.SmsProvider>} - Success response
   * @name getSmsProviderById
   * @summary: Get sms provider by id
   * @description: By using this API, a specific SMS provider will be returned that was retrieved based on the provider's id.
   */
  async getSmsProviderById({ id } = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.SmsProvider().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > getSmsProviderById \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetSmsProvidersParam} arg
   *   - Arg object
   *
   * @returns {Promise<CommunicationPlatformModel.SmsProviders>} - Success response
   * @name getSmsProviders
   * @summary: Get sms providers
   * @description: By using this api, you may retrieve all the SMS providers that the user has setup. The outcome will be in a paginated form, fetching providers according to the current page and page number parameters.
   */
  async getSmsProviders({ pageNo, pageSize, sort } = {}) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.getSmsProviders().validate(
      {
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
    } = CommunicationPlatformApplicationValidator.getSmsProviders().validate(
      {
        pageNo,
        pageSize,
        sort,
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

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/providers`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.SmsProviders().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > getSmsProviders \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetSmsTemplateByIdParam} arg
   *   - Arg object
   *
   * @returns {Promise<CommunicationPlatformModel.SmsTemplate>} - Success response
   * @name getSmsTemplateById
   * @summary: Get sms template by id
   * @description: SMS templates are predefined message formats linked to various events for delivering messages to users. Use this API to get an sms template by ID.
   */
  async getSmsTemplateById({ id } = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.SmsTemplate().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > getSmsTemplateById \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetSmsTemplatesParam} arg
   *   - Arg object
   *
   * @returns {Promise<CommunicationPlatformModel.SmsTemplates>} - Success response
   * @name getSmsTemplates
   * @summary: Get sms templates
   * @description: SMS templates are predefined message formats linked to various events for delivering messages to users. Use this API to get all sms templates.
   */
  async getSmsTemplates({ pageNo, pageSize, sort } = {}) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.getSmsTemplates().validate(
      {
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
    } = CommunicationPlatformApplicationValidator.getSmsTemplates().validate(
      {
        pageNo,
        pageSize,
        sort,
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

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/templates`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.SmsTemplates().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > getSmsTemplates \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetStatsOfCampaignByIdParam} arg
   *   - Arg object
   *
   * @returns {Promise<CommunicationPlatformModel.GetStats>} - Success response
   * @name getStatsOfCampaignById
   * @summary: Get stats of campaign by id
   * @description: Get stats of campaign by id
   */
  async getStatsOfCampaignById({ id } = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.GetStats().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > getStatsOfCampaignById \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetSubscribedEmailTemplatesParam} arg
   *   - Arg object
   *
   * @returns {Promise<CommunicationPlatformModel.EmailTemplates>} - Success response
   * @name getSubscribedEmailTemplates
   * @summary: Get subscribed email templates
   * @description: Email templates are predefined formats linked to various events for delivering messages to users. Use this API to get all subscribed email templates.
   */
  async getSubscribedEmailTemplates({ pageNo, pageSize } = {}) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.getSubscribedEmailTemplates().validate(
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
    } = CommunicationPlatformApplicationValidator.getSubscribedEmailTemplates().validate(
      {
        pageNo,
        pageSize,
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

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/subscribedTemplates`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.EmailTemplates().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > getSubscribedEmailTemplates \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetSubscribedSmsTemplatesParam} arg
   *   - Arg object
   *
   * @returns {Promise<CommunicationPlatformModel.SmsTemplates>} - Success response
   * @name getSubscribedSmsTemplates
   * @summary: Get subscribed sms templates
   * @description: SMS templates are predefined message formats linked to various events for delivering messages to users. Use this API to get all subscribed sms templates.
   */
  async getSubscribedSmsTemplates({ pageNo, pageSize } = {}) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.getSubscribedSmsTemplates().validate(
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
    } = CommunicationPlatformApplicationValidator.getSubscribedSmsTemplates().validate(
      {
        pageNo,
        pageSize,
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

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/subscribedTemplates`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.SmsTemplates().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > getSubscribedSmsTemplates \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetSystemEmailTemplatesParam} arg
   *   - Arg object
   *
   * @returns {Promise<CommunicationPlatformModel.SystemEmailTemplates>} -
   *   Success response
   * @name getSystemEmailTemplates
   * @summary: Get system email templates
   * @description: Email templates are predefined formats linked to various events for delivering messages to users. Use this API to get all system email templates.
   */
  async getSystemEmailTemplates({} = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.SystemEmailTemplates().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > getSystemEmailTemplates \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetSystemSmsTemplatesParam} arg
   *   - Arg object
   *
   * @returns {Promise<CommunicationPlatformModel.SystemSmsTemplates[]>} -
   *   Success response
   * @name getSystemSmsTemplates
   * @summary: Get system sms templates
   * @description: SMS templates are predefined message formats linked to various events for delivering messages to users. Use this API to get all system sms templates.
   */
  async getSystemSmsTemplates({} = {}) {
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
      undefined
    );

    const { error: res_error } = Joi.array()
      .items(CommunicationPlatformModel.SystemSmsTemplates())
      .validate(response, { abortEarly: false, allowUnknown: false });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > getSystemSmsTemplates \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetSystemVoiceTemplatesParam} arg
   *   - Arg object
   *
   * @returns {Promise<CommunicationPlatformModel.SystemVoiceTemplates>} -
   *   Success response
   * @name getSystemVoiceTemplates
   * @summary: Get system voice templates
   * @description: Get system voice templates
   */
  async getSystemVoiceTemplates({ pageNo, pageSize, sort } = {}) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.getSystemVoiceTemplates().validate(
      {
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
    } = CommunicationPlatformApplicationValidator.getSystemVoiceTemplates().validate(
      {
        pageNo,
        pageSize,
        sort,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > getSystemVoiceTemplates \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["sort"] = sort;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/voice/system-templates`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.SystemVoiceTemplates().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > getSystemVoiceTemplates \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetVoiceProviderByIdParam} arg
   *   - Arg object
   *
   * @returns {Promise<CommunicationPlatformModel.VoiceProvider>} - Success response
   * @name getVoiceProviderById
   * @summary: Get voice provider by id
   * @description: Get voice provider by id
   */
  async getVoiceProviderById({ id } = {}) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.getVoiceProviderById().validate(
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
    } = CommunicationPlatformApplicationValidator.getVoiceProviderById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > getVoiceProviderById \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/voice/providers/${id}`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.VoiceProvider().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > getVoiceProviderById \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetVoiceProvidersParam} arg
   *   - Arg object
   *
   * @returns {Promise<CommunicationPlatformModel.VoiceProviders>} - Success response
   * @name getVoiceProviders
   * @summary: Get voice providers
   * @description: Get voice providers
   */
  async getVoiceProviders({ pageNo, pageSize, sort } = {}) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.getVoiceProviders().validate(
      {
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
    } = CommunicationPlatformApplicationValidator.getVoiceProviders().validate(
      {
        pageNo,
        pageSize,
        sort,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > getVoiceProviders \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["sort"] = sort;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/voice/providers`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.VoiceProviders().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > getVoiceProviders \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetVoiceTemplateByIdParam} arg
   *   - Arg object
   *
   * @returns {Promise<CommunicationPlatformModel.VoiceTemplate>} - Success response
   * @name getVoiceTemplateById
   * @summary: Get voice template by id
   * @description: Get voice template by id
   */
  async getVoiceTemplateById({ id } = {}) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.getVoiceTemplateById().validate(
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
    } = CommunicationPlatformApplicationValidator.getVoiceTemplateById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > getVoiceTemplateById \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/voice/templates/${id}`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.VoiceTemplate().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > getVoiceTemplateById \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetVoiceTemplatesParam} arg
   *   - Arg object
   *
   * @returns {Promise<CommunicationPlatformModel.VoiceTemplates>} - Success response
   * @name getVoiceTemplates
   * @summary: Get voice templates
   * @description: Get voice templates
   */
  async getVoiceTemplates({ pageNo, pageSize, sort } = {}) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.getVoiceTemplates().validate(
      {
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
    } = CommunicationPlatformApplicationValidator.getVoiceTemplates().validate(
      {
        pageNo,
        pageSize,
        sort,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > getVoiceTemplates \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["sort"] = sort;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/voice/templates`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.VoiceTemplates().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > getVoiceTemplates \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.PostGlobalVariablesParam} arg
   *   - Arg object
   *
   * @returns {Promise<CommunicationPlatformModel.GlobalVariablesPostResponse>}
   *   - Success response
   *
   * @name postGlobalVariables
   * @summary: post global variables
   * @description: psot global variables
   */
  async postGlobalVariables({ body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.GlobalVariablesPostResponse().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > postGlobalVariables \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.SendCommunicationAsynchronouslyParam} arg
   *   - Arg object
   *
   * @returns {Promise<CommunicationPlatformModel.EngineResponse>} - Success response
   * @name sendCommunicationAsynchronously
   * @summary: Send email or sms asynchronously
   * @description: Send email or sms asynchronously
   */
  async sendCommunicationAsynchronously({ body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.EngineResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > sendCommunicationAsynchronously \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.SendCommunicationSynchronouslyParam} arg
   *   - Arg object
   *
   * @returns {Promise<CommunicationPlatformModel.EngineResponse>} - Success response
   * @name sendCommunicationSynchronously
   * @summary: Send email or sms synchronously
   * @description: Send email or sms synchronously
   */
  async sendCommunicationSynchronously({ body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.EngineResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > sendCommunicationSynchronously \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.SendOtpParam} arg - Arg object
   * @returns {Promise<CommunicationPlatformModel.SendOtpCommsRes>} - Success response
   * @name sendOtp
   * @summary: Send OTP using email and sms
   * @description: Send OTP Comms via email and sms
   */
  async sendOtp({ body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.SendOtpCommsRes().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > sendOtp \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.TriggerCampaignJobParam} arg
   *   - Arg object
   *
   * @returns {Promise<CommunicationPlatformModel.TriggerJobResponse>} -
   *   Success response
   * @name triggerCampaignJob
   * @summary: Trigger campaign job
   * @description: Trigger campaign job
   */
  async triggerCampaignJob({ body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.TriggerJobResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > triggerCampaignJob \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.UpdateAppProvidersParam} arg
   *   - Arg object
   *
   * @returns {Promise<CommunicationPlatformModel.AppProvider>} - Success response
   * @name updateAppProviders
   * @summary: update app providers
   * @description: Using this API will update the application providers.
   */
  async updateAppProviders({ body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.AppProvider().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > updateAppProviders \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.UpdateAudienceByIdParam} arg
   *   - Arg object
   *
   * @returns {Promise<CommunicationPlatformModel.Audience>} - Success response
   * @name updateAudienceById
   * @summary: Update audience by id
   * @description: Update audience by id
   */
  async updateAudienceById({ id, body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.Audience().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > updateAudienceById \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.UpdateCampaignByIdParam} arg
   *   - Arg object
   *
   * @returns {Promise<CommunicationPlatformModel.Campaign>} - Success response
   * @name updateCampaignById
   * @summary: Update campaign by id
   * @description: Update campaign by id
   */
  async updateCampaignById({ id, body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.Campaign().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > updateCampaignById \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.UpdateEmailProviderByIdParam} arg
   *   - Arg object
   *
   * @returns {Promise<CommunicationPlatformModel.EmailProvider>} - Success response
   * @name updateEmailProviderById
   * @summary: Update email provider by id
   * @description: By using this API, you can modify a certain email provider's definitions based on it's ID.
   */
  async updateEmailProviderById({ id, body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.EmailProvider().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > updateEmailProviderById \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.UpdateEmailTemplateByIdParam} arg
   *   - Arg object
   *
   * @returns {Promise<CommunicationPlatformModel.EmailTemplate>} - Success response
   * @name updateEmailTemplateById
   * @summary: Update email template by id
   * @description: Email templates are predefined formats linked to various events for delivering messages to users. Use this API to update an email template by id.
   */
  async updateEmailTemplateById({ id, body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.EmailTemplate().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > updateEmailTemplateById \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.UpdateSmsProviderByIdParam} arg
   *   - Arg object
   *
   * @returns {Promise<CommunicationPlatformModel.SmsProvider>} - Success response
   * @name updateSmsProviderById
   * @summary: Update sms provider by id
   * @description: By using this API, you can modify a certain SMS provider's definitions based on it's ID.
   */
  async updateSmsProviderById({ id, body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.SmsProvider().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > updateSmsProviderById \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.UpdateSmsTemplateByIdParam} arg
   *   - Arg object
   *
   * @returns {Promise<CommunicationPlatformModel.SmsTemplate>} - Success response
   * @name updateSmsTemplateById
   * @summary: Update sms template by id
   * @description: SMS templates are predefined message formats linked to various events for delivering messages to users. Use this API to update an sms template by ID.
   */
  async updateSmsTemplateById({ id, body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.SmsTemplate().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > updateSmsTemplateById \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.UpdateVoiceTemplateByIdParam} arg
   *   - Arg object
   *
   * @returns {Promise<CommunicationPlatformModel.VoiceTemplateRes>} - Success response
   * @name updateVoiceTemplateById
   * @summary: Update voice template by id
   * @description: Update voice template by id
   */
  async updateVoiceTemplateById({ id, body } = {}) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.updateVoiceTemplateById().validate(
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
    } = CommunicationPlatformApplicationValidator.updateVoiceTemplateById().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > updateVoiceTemplateById \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/voice/templates/${id}`,
      query_params,
      body
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.VoiceTemplateRes().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > updateVoiceTemplateById \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.VerfiyOtpParam} arg - Arg object
   * @returns {Promise<CommunicationPlatformModel.VerifyOtpCommsSuccessRes>}
   *   - Success response
   *
   * @name verfiyOtp
   * @summary: Verify OTP sent via email and sms
   * @description: Verify OTP sent via email and sms
   */
  async verfiyOtp({ body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = CommunicationPlatformModel.VerifyOtpCommsSuccessRes().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > verfiyOtp \n ${res_error}`,
      });
    }

    return response;
  }
}

module.exports = Communication;
