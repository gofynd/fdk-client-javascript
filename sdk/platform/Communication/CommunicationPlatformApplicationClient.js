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
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.Audience>} - Success response
   * @name createAudience
   * @summary: Create audience
   * @description: Create audience - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/createAudience/).
   */
  async createAudience({ body } = {}, { headers } = { headers: false }) {
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
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CommunicationPlatformModel.Audience().validate(responseData, {
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
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.Campaign>} - Success response
   * @name createCampaign
   * @summary: Create campaign
   * @description: Create campaign - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/createCampaign/).
   */
  async createCampaign({ body } = {}, { headers } = { headers: false }) {
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
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CommunicationPlatformModel.Campaign().validate(responseData, {
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
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.EmailProvider>} - Success response
   * @name createEmailProvider
   * @summary: Create email provider
   * @description: Create email provider - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/createEmailProvider/).
   */
  async createEmailProvider({ body } = {}, { headers } = { headers: false }) {
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
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CommunicationPlatformModel.EmailProvider().validate(responseData, {
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
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.EmailTemplateRes>} - Success response
   * @name createEmailTemplate
   * @summary: Create email template
   * @description: Create email template - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/createEmailTemplate/).
   */
  async createEmailTemplate({ body } = {}, { headers } = { headers: false }) {
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
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CommunicationPlatformModel.EmailTemplateRes().validate(responseData, {
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
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.SmsProvider>} - Success response
   * @name createSmsProvider
   * @summary: Create sms provider
   * @description: Create sms provider - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/createSmsProvider/).
   */
  async createSmsProvider({ body } = {}, { headers } = { headers: false }) {
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
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CommunicationPlatformModel.SmsProvider().validate(responseData, {
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
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.SmsTemplateRes>} - Success response
   * @name createSmsTemplate
   * @summary: Create sms template
   * @description: Create sms template - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/createSmsTemplate/).
   */
  async createSmsTemplate({ body } = {}, { headers } = { headers: false }) {
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
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CommunicationPlatformModel.SmsTemplateRes().validate(responseData, {
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
   * @param {CommunicationPlatformApplicationValidator.DeleteEmailTemplateByIdParam} arg
   *   - Arg object
   *
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.EmailTemplateDeleteSuccessRes>}
   *   - Success response
   *
   * @name deleteEmailTemplateById
   * @summary: Delete email template by id
   * @description: Delete email template by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/deleteEmailTemplateById/).
   */
  async deleteEmailTemplateById({ id } = {}, { headers } = { headers: false }) {
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
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CommunicationPlatformModel.EmailTemplateDeleteSuccessRes().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > deleteEmailTemplateById \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.DeleteSmsTemplateByIdParam} arg
   *   - Arg object
   *
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.SmsTemplateDeleteSuccessRes>}
   *   - Success response
   *
   * @name deleteSmsTemplateById
   * @summary: Delete sms template by id
   * @description: Delete sms template by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/deleteSmsTemplateById/).
   */
  async deleteSmsTemplateById({ id } = {}, { headers } = { headers: false }) {
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
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CommunicationPlatformModel.SmsTemplateDeleteSuccessRes().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > deleteSmsTemplateById \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformApplicationValidator.GetAudienceByIdParam} arg
   *   - Arg object
   *
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.Audience>} - Success response
   * @name getAudienceById
   * @summary: Get audience by id
   * @description: Get audience by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getAudienceById/).
   */
  async getAudienceById({ id } = {}, { headers } = { headers: false }) {
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
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CommunicationPlatformModel.Audience().validate(responseData, {
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
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.Audiences>} - Success response
   * @name getAudiences
   * @summary: Get audiences
   * @description: Get audiences - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getAudiences/).
   */
  async getAudiences(
    { pageNo, pageSize, sort } = {},
    { headers } = { headers: false }
  ) {
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
      undefined,
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CommunicationPlatformModel.Audiences().validate(responseData, {
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
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Company id
   * @param {string} arg.applicationId - Application id
   * @param {number} [arg.pageSize] - Current request items count
   * @param {Object} [arg.sort] - To sort based on created_at
   * @returns {Paginator<CommunicationPlatformModel.Audiences>}
   * @summary: Get audiences
   * @description: Get audiences
   */
  getAudiencesPaginator({ companyId, applicationId, pageSize, sort } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getAudiences({
        companyId: companyId,
        applicationId: applicationId,
        pageNo: pageNo,
        pageSize: pageSize,
        sort: sort,
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
   * @param {CommunicationPlatformApplicationValidator.GetBigqueryHeadersParam} arg
   *   - Arg object
   *
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.BigqueryHeadersRes>} -
   *   Success response
   * @name getBigqueryHeaders
   * @summary: Get bigquery headers
   * @description: Get bigquery headers - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getBigqueryHeaders/).
   */
  async getBigqueryHeaders({ body } = {}, { headers } = { headers: false }) {
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
      body,
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CommunicationPlatformModel.BigqueryHeadersRes().validate(responseData, {
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
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.Campaign>} - Success response
   * @name getCampaignById
   * @summary: Get campaign by id
   * @description: Get campaign by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getCampaignById/).
   */
  async getCampaignById({ id } = {}, { headers } = { headers: false }) {
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
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CommunicationPlatformModel.Campaign().validate(responseData, {
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
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.Campaigns>} - Success response
   * @name getCampaigns
   * @summary: Get campaigns
   * @description: Get campaigns - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getCampaigns/).
   */
  async getCampaigns(
    { pageNo, pageSize, sort } = {},
    { headers } = { headers: false }
  ) {
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
      undefined,
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CommunicationPlatformModel.Campaigns().validate(responseData, {
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
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Company id
   * @param {string} arg.applicationId - Application id
   * @param {number} [arg.pageSize] - Current request items count
   * @param {Object} [arg.sort] - To sort based on created_at
   * @returns {Paginator<CommunicationPlatformModel.Campaigns>}
   * @summary: Get campaigns
   * @description: Get campaigns
   */
  getCampaignsPaginator({ companyId, applicationId, pageSize, sort } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getCampaigns({
        companyId: companyId,
        applicationId: applicationId,
        pageNo: pageNo,
        pageSize: pageSize,
        sort: sort,
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
   * @param {CommunicationPlatformApplicationValidator.GetCommunicationLogsParam} arg
   *   - Arg object
   *
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.Logs>} - Success response
   * @name getCommunicationLogs
   * @summary: Get communication logs
   * @description: Get communication logs - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getCommunicationLogs/).
   */
  async getCommunicationLogs(
    { pageId, pageSize, sort, query } = {},
    { headers } = { headers: false }
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
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CommunicationPlatformModel.Logs().validate(responseData, {
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
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Company id
   * @param {string} arg.applicationId - Application id
   * @param {number} [arg.pageSize] - Current request items count
   * @param {Object} [arg.sort] - To sort based on _id
   * @param {Object} [arg.query] -
   * @returns {Paginator<CommunicationPlatformModel.Logs>}
   * @summary: Get communication logs
   * @description: Get communication logs
   */
  getCommunicationLogsPaginator({
    companyId,
    applicationId,
    pageSize,
    sort,
    query,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getCommunicationLogs({
        companyId: companyId,
        applicationId: applicationId,
        pageId: pageId,
        pageSize: pageSize,
        sort: sort,
        query: query,
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
   * @param {CommunicationPlatformApplicationValidator.GetEmailProviderByIdParam} arg
   *   - Arg object
   *
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.EmailProvider>} - Success response
   * @name getEmailProviderById
   * @summary: Get email provider by id
   * @description: Get email provider by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getEmailProviderById/).
   */
  async getEmailProviderById({ id } = {}, { headers } = { headers: false }) {
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
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CommunicationPlatformModel.EmailProvider().validate(responseData, {
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
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.EmailProviders>} - Success response
   * @name getEmailProviders
   * @summary: Get email providers
   * @description: Get email providers - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getEmailProviders/).
   */
  async getEmailProviders(
    { pageNo, pageSize, sort } = {},
    { headers } = { headers: false }
  ) {
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
      undefined,
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CommunicationPlatformModel.EmailProviders().validate(responseData, {
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
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Company id
   * @param {string} arg.applicationId - Application id
   * @param {number} [arg.pageSize] - Current request items count
   * @param {Object} [arg.sort] - To sort based on created_at
   * @returns {Paginator<CommunicationPlatformModel.EmailProviders>}
   * @summary: Get email providers
   * @description: Get email providers
   */
  getEmailProvidersPaginator({
    companyId,
    applicationId,
    pageSize,
    sort,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getEmailProviders({
        companyId: companyId,
        applicationId: applicationId,
        pageNo: pageNo,
        pageSize: pageSize,
        sort: sort,
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
   * @param {CommunicationPlatformApplicationValidator.GetEmailTemplateByIdParam} arg
   *   - Arg object
   *
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.EmailTemplate>} - Success response
   * @name getEmailTemplateById
   * @summary: Get email template by id
   * @description: Get email template by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getEmailTemplateById/).
   */
  async getEmailTemplateById({ id } = {}, { headers } = { headers: false }) {
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
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CommunicationPlatformModel.EmailTemplate().validate(responseData, {
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
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.EmailTemplates>} - Success response
   * @name getEmailTemplates
   * @summary: Get email templates
   * @description: Get email templates - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getEmailTemplates/).
   */
  async getEmailTemplates(
    { pageNo, pageSize, sort } = {},
    { headers } = { headers: false }
  ) {
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
      undefined,
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CommunicationPlatformModel.EmailTemplates().validate(responseData, {
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
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Company id
   * @param {string} arg.applicationId - Application id
   * @param {number} [arg.pageSize] - Current request items count
   * @param {Object} [arg.sort] - To sort based on created_at
   * @returns {Paginator<CommunicationPlatformModel.EmailTemplates>}
   * @summary: Get email templates
   * @description: Get email templates
   */
  getEmailTemplatesPaginator({
    companyId,
    applicationId,
    pageSize,
    sort,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getEmailTemplates({
        companyId: companyId,
        applicationId: applicationId,
        pageNo: pageNo,
        pageSize: pageSize,
        sort: sort,
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
   * @param {CommunicationPlatformApplicationValidator.GetEventSubscriptionsParam} arg
   *   - Arg object
   *
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.EventSubscriptions>} -
   *   Success response
   * @name getEventSubscriptions
   * @summary: Get event subscriptions
   * @description: Get event subscriptions - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getEventSubscriptions/).
   */
  async getEventSubscriptions(
    { pageNo, pageSize, populate } = {},
    { headers } = { headers: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.getEventSubscriptions().validate(
      {
        pageNo,
        pageSize,
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
    } = CommunicationPlatformApplicationValidator.getEventSubscriptions().validate(
      {
        pageNo,
        pageSize,
        populate,
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

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/event/event-subscriptions`,
      query_params,
      undefined,
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CommunicationPlatformModel.EventSubscriptions().validate(responseData, {
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
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Company id
   * @param {string} arg.applicationId - Application id
   * @param {number} [arg.pageSize] - Current request items count
   * @param {string} [arg.populate] - Populate fields
   * @returns {Paginator<CommunicationPlatformModel.EventSubscriptions>}
   * @summary: Get event subscriptions
   * @description: Get event subscriptions
   */
  getEventSubscriptionsPaginator({
    companyId,
    applicationId,
    pageSize,
    populate,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getEventSubscriptions({
        companyId: companyId,
        applicationId: applicationId,
        pageNo: pageNo,
        pageSize: pageSize,
        populate: populate,
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
   * @param {CommunicationPlatformApplicationValidator.GetJobLogsParam} arg - Arg object
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.JobLogs>} - Success response
   * @name getJobLogs
   * @summary: Get job logs
   * @description: Get job logs - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getJobLogs/).
   */
  async getJobLogs(
    { pageNo, pageSize, sort } = {},
    { headers } = { headers: false }
  ) {
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
      undefined,
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CommunicationPlatformModel.JobLogs().validate(responseData, {
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
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Company id
   * @param {string} arg.applicationId - Application id
   * @param {number} [arg.pageSize] - Current request items count
   * @param {Object} [arg.sort] - To sort based on created_at
   * @returns {Paginator<CommunicationPlatformModel.JobLogs>}
   * @summary: Get job logs
   * @description: Get job logs
   */
  getJobLogsPaginator({ companyId, applicationId, pageSize, sort } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getJobLogs({
        companyId: companyId,
        applicationId: applicationId,
        pageNo: pageNo,
        pageSize: pageSize,
        sort: sort,
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
   * @param {CommunicationPlatformApplicationValidator.GetJobsParam} arg - Arg object
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.Jobs>} - Success response
   * @name getJobs
   * @summary: Get jobs
   * @description: Get jobs - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getJobs/).
   */
  async getJobs(
    { pageNo, pageSize, sort } = {},
    { headers } = { headers: false }
  ) {
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
      undefined,
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CommunicationPlatformModel.Jobs().validate(responseData, {
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
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Company id
   * @param {string} arg.applicationId - Application id
   * @param {number} [arg.pageSize] - Current request items count
   * @param {Object} [arg.sort] - To sort based on created_at
   * @returns {Paginator<CommunicationPlatformModel.Jobs>}
   * @summary: Get jobs
   * @description: Get jobs
   */
  getJobsPaginator({ companyId, applicationId, pageSize, sort } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getJobs({
        companyId: companyId,
        applicationId: applicationId,
        pageNo: pageNo,
        pageSize: pageSize,
        sort: sort,
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
   * @param {CommunicationPlatformApplicationValidator.GetNSampleRecordsFromCsvParam} arg
   *   - Arg object
   *
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.GetNRecordsCsvRes>} - Success response
   * @name getNSampleRecordsFromCsv
   * @summary: Get n sample records from csv
   * @description: Get n sample records from csv - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getNSampleRecordsFromCsv/).
   */
  async getNSampleRecordsFromCsv(
    { body } = {},
    { headers } = { headers: false }
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
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CommunicationPlatformModel.GetNRecordsCsvRes().validate(responseData, {
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
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.SmsProvider>} - Success response
   * @name getSmsProviderById
   * @summary: Get sms provider by id
   * @description: Get sms provider by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getSmsProviderById/).
   */
  async getSmsProviderById({ id } = {}, { headers } = { headers: false }) {
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
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CommunicationPlatformModel.SmsProvider().validate(responseData, {
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
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.SmsProviders>} - Success response
   * @name getSmsProviders
   * @summary: Get sms providers
   * @description: Get sms providers - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getSmsProviders/).
   */
  async getSmsProviders(
    { pageNo, pageSize, sort } = {},
    { headers } = { headers: false }
  ) {
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
      undefined,
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CommunicationPlatformModel.SmsProviders().validate(responseData, {
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
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Company id
   * @param {string} arg.applicationId - Application id
   * @param {number} [arg.pageSize] - Current request items count
   * @param {Object} [arg.sort] - To sort based on created_at
   * @returns {Paginator<CommunicationPlatformModel.SmsProviders>}
   * @summary: Get sms providers
   * @description: Get sms providers
   */
  getSmsProvidersPaginator({ companyId, applicationId, pageSize, sort } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getSmsProviders({
        companyId: companyId,
        applicationId: applicationId,
        pageNo: pageNo,
        pageSize: pageSize,
        sort: sort,
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
   * @param {CommunicationPlatformApplicationValidator.GetSmsTemplateByIdParam} arg
   *   - Arg object
   *
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.SmsTemplate>} - Success response
   * @name getSmsTemplateById
   * @summary: Get sms template by id
   * @description: Get sms template by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getSmsTemplateById/).
   */
  async getSmsTemplateById({ id } = {}, { headers } = { headers: false }) {
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
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CommunicationPlatformModel.SmsTemplate().validate(responseData, {
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
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.SmsTemplates>} - Success response
   * @name getSmsTemplates
   * @summary: Get sms templates
   * @description: Get sms templates - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getSmsTemplates/).
   */
  async getSmsTemplates(
    { pageNo, pageSize, sort } = {},
    { headers } = { headers: false }
  ) {
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
      undefined,
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CommunicationPlatformModel.SmsTemplates().validate(responseData, {
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
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Company id
   * @param {string} arg.applicationId - Application id
   * @param {number} [arg.pageSize] - Current request items count
   * @param {Object} [arg.sort] - To sort based on created_at
   * @returns {Paginator<CommunicationPlatformModel.SmsTemplates>}
   * @summary: Get sms templates
   * @description: Get sms templates
   */
  getSmsTemplatesPaginator({ companyId, applicationId, pageSize, sort } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getSmsTemplates({
        companyId: companyId,
        applicationId: applicationId,
        pageNo: pageNo,
        pageSize: pageSize,
        sort: sort,
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
   * @param {CommunicationPlatformApplicationValidator.GetStatsOfCampaignByIdParam} arg
   *   - Arg object
   *
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.GetStats>} - Success response
   * @name getStatsOfCampaignById
   * @summary: Get stats of campaign by id
   * @description: Get stats of campaign by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getStatsOfCampaignById/).
   */
  async getStatsOfCampaignById({ id } = {}, { headers } = { headers: false }) {
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
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CommunicationPlatformModel.GetStats().validate(responseData, {
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
   * @param {CommunicationPlatformApplicationValidator.GetSystemEmailTemplatesParam} arg
   *   - Arg object
   *
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.SystemEmailTemplates>} -
   *   Success response
   * @name getSystemEmailTemplates
   * @summary: Get system email templates
   * @description: Get system email templates - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getSystemEmailTemplates/).
   */
  async getSystemEmailTemplates(
    { pageNo, pageSize, sort } = {},
    { headers } = { headers: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.getSystemEmailTemplates().validate(
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
    } = CommunicationPlatformApplicationValidator.getSystemEmailTemplates().validate(
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
        message: `Parameter Validation warrnings for platform > Communication > getSystemEmailTemplates \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["sort"] = sort;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/system-templates`,
      query_params,
      undefined,
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CommunicationPlatformModel.SystemEmailTemplates().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > getSystemEmailTemplates \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Company id
   * @param {string} arg.applicationId - Application id
   * @param {number} [arg.pageSize] - Current request items count
   * @param {Object} [arg.sort] - To sort based on created_at
   * @returns {Paginator<CommunicationPlatformModel.SystemEmailTemplates>}
   * @summary: Get system email templates
   * @description: Get system email templates
   */
  getSystemEmailTemplatesPaginator({
    companyId,
    applicationId,
    pageSize,
    sort,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getSystemEmailTemplates({
        companyId: companyId,
        applicationId: applicationId,
        pageNo: pageNo,
        pageSize: pageSize,
        sort: sort,
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
   * @param {CommunicationPlatformApplicationValidator.GetSystemSystemTemplatesParam} arg
   *   - Arg object
   *
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.SystemSmsTemplates>} -
   *   Success response
   * @name getSystemSystemTemplates
   * @summary: Get system sms templates
   * @description: Get system sms templates - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getSystemSystemTemplates/).
   */
  async getSystemSystemTemplates(
    { pageNo, pageSize, sort } = {},
    { headers } = { headers: false }
  ) {
    const {
      error,
    } = CommunicationPlatformApplicationValidator.getSystemSystemTemplates().validate(
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
    } = CommunicationPlatformApplicationValidator.getSystemSystemTemplates().validate(
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
        message: `Parameter Validation warrnings for platform > Communication > getSystemSystemTemplates \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["sort"] = sort;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/system-templates`,
      query_params,
      undefined,
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CommunicationPlatformModel.SystemSmsTemplates().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Communication > getSystemSystemTemplates \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Company id
   * @param {string} arg.applicationId - Application id
   * @param {number} [arg.pageSize] - Current request items count
   * @param {Object} [arg.sort] - To sort based on created_at
   * @returns {Paginator<CommunicationPlatformModel.SystemSmsTemplates>}
   * @summary: Get system sms templates
   * @description: Get system sms templates
   */
  getSystemSystemTemplatesPaginator({
    companyId,
    applicationId,
    pageSize,
    sort,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getSystemSystemTemplates({
        companyId: companyId,
        applicationId: applicationId,
        pageNo: pageNo,
        pageSize: pageSize,
        sort: sort,
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
   * @param {CommunicationPlatformApplicationValidator.SendCommunicationAsynchronouslyParam} arg
   *   - Arg object
   *
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.EngineResponse>} - Success response
   * @name sendCommunicationAsynchronously
   * @summary: Send email or sms asynchronously
   * @description: Send email or sms asynchronously - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/sendCommunicationAsynchronously/).
   */
  async sendCommunicationAsynchronously(
    { body } = {},
    { headers } = { headers: false }
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
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CommunicationPlatformModel.EngineResponse().validate(responseData, {
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
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.EngineResponse>} - Success response
   * @name sendCommunicationSynchronously
   * @summary: Send email or sms synchronously
   * @description: Send email or sms synchronously - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/sendCommunicationSynchronously/).
   */
  async sendCommunicationSynchronously(
    { body } = {},
    { headers } = { headers: false }
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
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CommunicationPlatformModel.EngineResponse().validate(responseData, {
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
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.SendOtpCommsRes>} - Success response
   * @name sendOtp
   * @summary: Send OTP using email and sms
   * @description: Send OTP Comms via email and sms - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/sendOtp/).
   */
  async sendOtp({ body } = {}, { headers } = { headers: false }) {
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
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CommunicationPlatformModel.SendOtpCommsRes().validate(responseData, {
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
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.TriggerJobResponse>} -
   *   Success response
   * @name triggerCampaignJob
   * @summary: Trigger campaign job
   * @description: Trigger campaign job - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/triggerCampaignJob/).
   */
  async triggerCampaignJob({ body } = {}, { headers } = { headers: false }) {
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
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CommunicationPlatformModel.TriggerJobResponse().validate(responseData, {
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
   * @param {CommunicationPlatformApplicationValidator.UpdateAudienceByIdParam} arg
   *   - Arg object
   *
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.Audience>} - Success response
   * @name updateAudienceById
   * @summary: Update audience by id
   * @description: Update audience by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/updateAudienceById/).
   */
  async updateAudienceById(
    { id, body } = {},
    { headers } = { headers: false }
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
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CommunicationPlatformModel.Audience().validate(responseData, {
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
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.Campaign>} - Success response
   * @name updateCampaignById
   * @summary: Update campaign by id
   * @description: Update campaign by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/updateCampaignById/).
   */
  async updateCampaignById(
    { id, body } = {},
    { headers } = { headers: false }
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
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CommunicationPlatformModel.Campaign().validate(responseData, {
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
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.EmailProvider>} - Success response
   * @name updateEmailProviderById
   * @summary: Update email provider by id
   * @description: Update email provider by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/updateEmailProviderById/).
   */
  async updateEmailProviderById(
    { id, body } = {},
    { headers } = { headers: false }
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
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CommunicationPlatformModel.EmailProvider().validate(responseData, {
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
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.EmailTemplateRes>} - Success response
   * @name updateEmailTemplateById
   * @summary: Update email template by id
   * @description: Update email template by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/updateEmailTemplateById/).
   */
  async updateEmailTemplateById(
    { id, body } = {},
    { headers } = { headers: false }
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
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CommunicationPlatformModel.EmailTemplateRes().validate(responseData, {
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
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.SmsProvider>} - Success response
   * @name updateSmsProviderById
   * @summary: Update sms provider by id
   * @description: Update sms provider by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/updateSmsProviderById/).
   */
  async updateSmsProviderById(
    { id, body } = {},
    { headers } = { headers: false }
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
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CommunicationPlatformModel.SmsProvider().validate(responseData, {
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
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.SmsTemplateRes>} - Success response
   * @name updateSmsTemplateById
   * @summary: Update sms template by id
   * @description: Update sms template by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/updateSmsTemplateById/).
   */
  async updateSmsTemplateById(
    { id, body } = {},
    { headers } = { headers: false }
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
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CommunicationPlatformModel.SmsTemplateRes().validate(responseData, {
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
   * @param {CommunicationPlatformApplicationValidator.VerfiyOtpParam} arg - Arg object
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.VerifyOtpCommsSuccessRes>}
   *   - Success response
   *
   * @name verfiyOtp
   * @summary: Verify OTP sent via email and sms
   * @description: Verify OTP sent via email and sms - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/verfiyOtp/).
   */
  async verfiyOtp({ body } = {}, { headers } = { headers: false }) {
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
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CommunicationPlatformModel.VerifyOtpCommsSuccessRes().validate(
      responseData,
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
