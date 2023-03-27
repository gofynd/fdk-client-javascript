const Paginator = require("../../common/Paginator");
const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const CommunicationValidator = require("./CommunicationPlatformApplicationValidator");

class Communication {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - Current page no
   * @param {number} [arg.pageSize] - Current request items count
   * @param {Object} [arg.sort] - To sort based on created_at
   * @summary: Get campaigns
   * @description: Get campaigns
   */
  getCampaigns({ pageNo, pageSize, sort } = {}) {
    const { error } = CommunicationValidator.getCampaigns().validate(
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
    const { error: warrning } = CommunicationValidator.getCampaigns().validate(
      {
        pageNo,
        pageSize,
        sort,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for getCampaigns");
      console.log(warrning);
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["sort"] = sort;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/campaigns/campaigns`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Company id
   * @param {string} arg.applicationId - Application id
   * @param {number} [arg.pageSize] - Current request items count
   * @param {Object} [arg.sort] - To sort based on created_at
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
   * @param {Object} arg - Arg object.
   * @param {CampaignReq} arg.body
   * @summary: Create campaign
   * @description: Create campaign
   */
  createCampaign({ body } = {}) {
    const { error } = CommunicationValidator.createCampaign().validate(
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
    } = CommunicationValidator.createCampaign().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for createCampaign");
      console.log(warrning);
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/campaigns/campaigns`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Campaign id
   * @summary: Get campaign by id
   * @description: Get campaign by id
   */
  getCampaignById({ id } = {}) {
    const { error } = CommunicationValidator.getCampaignById().validate(
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
    } = CommunicationValidator.getCampaignById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for getCampaignById");
      console.log(warrning);
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/campaigns/campaigns/${id}`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Campaign id
   * @param {CampaignReq} arg.body
   * @summary: Update campaign by id
   * @description: Update campaign by id
   */
  updateCampaignById({ id, body } = {}) {
    const { error } = CommunicationValidator.updateCampaignById().validate(
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
    } = CommunicationValidator.updateCampaignById().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for updateCampaignById");
      console.log(warrning);
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/campaigns/campaigns/${id}`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Campaign id
   * @summary: Get stats of campaign by id
   * @description: Get stats of campaign by id
   */
  getStatsOfCampaignById({ id } = {}) {
    const { error } = CommunicationValidator.getStatsOfCampaignById().validate(
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
    } = CommunicationValidator.getStatsOfCampaignById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for getStatsOfCampaignById");
      console.log(warrning);
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/campaigns/get-stats/${id}`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - Current page no
   * @param {number} [arg.pageSize] - Current request items count
   * @param {Object} [arg.sort] - To sort based on created_at
   * @summary: Get audiences
   * @description: Get audiences
   */
  getAudiences({ pageNo, pageSize, sort } = {}) {
    const { error } = CommunicationValidator.getAudiences().validate(
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
    const { error: warrning } = CommunicationValidator.getAudiences().validate(
      {
        pageNo,
        pageSize,
        sort,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for getAudiences");
      console.log(warrning);
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["sort"] = sort;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sources/datasources`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Company id
   * @param {string} arg.applicationId - Application id
   * @param {number} [arg.pageSize] - Current request items count
   * @param {Object} [arg.sort] - To sort based on created_at
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
   * @param {Object} arg - Arg object.
   * @param {AudienceReq} arg.body
   * @summary: Create audience
   * @description: Create audience
   */
  createAudience({ body } = {}) {
    const { error } = CommunicationValidator.createAudience().validate(
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
    } = CommunicationValidator.createAudience().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for createAudience");
      console.log(warrning);
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sources/datasources`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {BigqueryHeadersReq} arg.body
   * @summary: Get bigquery headers
   * @description: Get bigquery headers
   */
  getBigqueryHeaders({ body } = {}) {
    const { error } = CommunicationValidator.getBigqueryHeaders().validate(
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
    } = CommunicationValidator.getBigqueryHeaders().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for getBigqueryHeaders");
      console.log(warrning);
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sources/bigquery-headers`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Audience id
   * @summary: Get audience by id
   * @description: Get audience by id
   */
  getAudienceById({ id } = {}) {
    const { error } = CommunicationValidator.getAudienceById().validate(
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
    } = CommunicationValidator.getAudienceById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for getAudienceById");
      console.log(warrning);
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sources/datasources/${id}`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Audience id
   * @param {AudienceReq} arg.body
   * @summary: Update audience by id
   * @description: Update audience by id
   */
  updateAudienceById({ id, body } = {}) {
    const { error } = CommunicationValidator.updateAudienceById().validate(
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
    } = CommunicationValidator.updateAudienceById().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for updateAudienceById");
      console.log(warrning);
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sources/datasources/${id}`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {GetNRecordsCsvReq} arg.body
   * @summary: Get n sample records from csv
   * @description: Get n sample records from csv
   */
  getNSampleRecordsFromCsv({ body } = {}) {
    const {
      error,
    } = CommunicationValidator.getNSampleRecordsFromCsv().validate(
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
    } = CommunicationValidator.getNSampleRecordsFromCsv().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log(
        "Parameter Validation warrnings for getNSampleRecordsFromCsv"
      );
      console.log(warrning);
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sources/get-n-records`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - Current page no
   * @param {number} [arg.pageSize] - Current request items count
   * @param {Object} [arg.sort] - To sort based on created_at
   * @summary: Get email providers
   * @description: Get email providers
   */
  getEmailProviders({ pageNo, pageSize, sort } = {}) {
    const { error } = CommunicationValidator.getEmailProviders().validate(
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
    } = CommunicationValidator.getEmailProviders().validate(
      {
        pageNo,
        pageSize,
        sort,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for getEmailProviders");
      console.log(warrning);
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["sort"] = sort;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/providers`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Company id
   * @param {string} arg.applicationId - Application id
   * @param {number} [arg.pageSize] - Current request items count
   * @param {Object} [arg.sort] - To sort based on created_at
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
   * @param {Object} arg - Arg object.
   * @param {EmailProviderReq} arg.body
   * @summary: Create email provider
   * @description: Create email provider
   */
  createEmailProvider({ body } = {}) {
    const { error } = CommunicationValidator.createEmailProvider().validate(
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
    } = CommunicationValidator.createEmailProvider().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for createEmailProvider");
      console.log(warrning);
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/providers`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Email provider id
   * @summary: Get email provider by id
   * @description: Get email provider by id
   */
  getEmailProviderById({ id } = {}) {
    const { error } = CommunicationValidator.getEmailProviderById().validate(
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
    } = CommunicationValidator.getEmailProviderById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for getEmailProviderById");
      console.log(warrning);
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/providers/${id}`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Email provider id
   * @param {EmailProviderReq} arg.body
   * @summary: Update email provider by id
   * @description: Update email provider by id
   */
  updateEmailProviderById({ id, body } = {}) {
    const { error } = CommunicationValidator.updateEmailProviderById().validate(
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
    } = CommunicationValidator.updateEmailProviderById().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for updateEmailProviderById");
      console.log(warrning);
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/providers/${id}`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - Current page no
   * @param {number} [arg.pageSize] - Current request items count
   * @param {Object} [arg.sort] - To sort based on created_at
   * @summary: Get email templates
   * @description: Get email templates
   */
  getEmailTemplates({ pageNo, pageSize, sort } = {}) {
    const { error } = CommunicationValidator.getEmailTemplates().validate(
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
    } = CommunicationValidator.getEmailTemplates().validate(
      {
        pageNo,
        pageSize,
        sort,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for getEmailTemplates");
      console.log(warrning);
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["sort"] = sort;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/templates`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Company id
   * @param {string} arg.applicationId - Application id
   * @param {number} [arg.pageSize] - Current request items count
   * @param {Object} [arg.sort] - To sort based on created_at
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
   * @param {Object} arg - Arg object.
   * @param {EmailTemplateReq} arg.body
   * @summary: Create email template
   * @description: Create email template
   */
  createEmailTemplate({ body } = {}) {
    const { error } = CommunicationValidator.createEmailTemplate().validate(
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
    } = CommunicationValidator.createEmailTemplate().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for createEmailTemplate");
      console.log(warrning);
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/templates`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - Current page no
   * @param {number} [arg.pageSize] - Current request items count
   * @param {Object} [arg.sort] - To sort based on created_at
   * @summary: Get system email templates
   * @description: Get system email templates
   */
  getSystemEmailTemplates({ pageNo, pageSize, sort } = {}) {
    const { error } = CommunicationValidator.getSystemEmailTemplates().validate(
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
    } = CommunicationValidator.getSystemEmailTemplates().validate(
      {
        pageNo,
        pageSize,
        sort,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for getSystemEmailTemplates");
      console.log(warrning);
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["sort"] = sort;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/system-templates`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Company id
   * @param {string} arg.applicationId - Application id
   * @param {number} [arg.pageSize] - Current request items count
   * @param {Object} [arg.sort] - To sort based on created_at
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
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Email template id
   * @summary: Get email template by id
   * @description: Get email template by id
   */
  getEmailTemplateById({ id } = {}) {
    const { error } = CommunicationValidator.getEmailTemplateById().validate(
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
    } = CommunicationValidator.getEmailTemplateById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for getEmailTemplateById");
      console.log(warrning);
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/templates/${id}`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Email template id
   * @param {EmailTemplateReq} arg.body
   * @summary: Update email template by id
   * @description: Update email template by id
   */
  updateEmailTemplateById({ id, body } = {}) {
    const { error } = CommunicationValidator.updateEmailTemplateById().validate(
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
    } = CommunicationValidator.updateEmailTemplateById().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for updateEmailTemplateById");
      console.log(warrning);
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/templates/${id}`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Email template id
   * @summary: Delete email template by id
   * @description: Delete email template by id
   */
  deleteEmailTemplateById({ id } = {}) {
    const { error } = CommunicationValidator.deleteEmailTemplateById().validate(
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
    } = CommunicationValidator.deleteEmailTemplateById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for deleteEmailTemplateById");
      console.log(warrning);
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/templates/${id}`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {EngineRequest} arg.body
   * @summary: Send email or sms synchronously
   * @description: Send email or sms synchronously
   */
  sendCommunicationSynchronously({ body } = {}) {
    const {
      error,
    } = CommunicationValidator.sendCommunicationSynchronously().validate(
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
    } = CommunicationValidator.sendCommunicationSynchronously().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log(
        "Parameter Validation warrnings for sendCommunicationSynchronously"
      );
      console.log(warrning);
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/engine/send-instant`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {EngineRequest} arg.body
   * @summary: Send email or sms asynchronously
   * @description: Send email or sms asynchronously
   */
  sendCommunicationAsynchronously({ body } = {}) {
    const {
      error,
    } = CommunicationValidator.sendCommunicationAsynchronously().validate(
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
    } = CommunicationValidator.sendCommunicationAsynchronously().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log(
        "Parameter Validation warrnings for sendCommunicationAsynchronously"
      );
      console.log(warrning);
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/engine/send-async`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - Current page no
   * @param {number} [arg.pageSize] - Current request items count
   * @param {string} [arg.populate] - Populate fields
   * @summary: Get event subscriptions
   * @description: Get event subscriptions
   */
  getEventSubscriptions({ pageNo, pageSize, populate } = {}) {
    const { error } = CommunicationValidator.getEventSubscriptions().validate(
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
    } = CommunicationValidator.getEventSubscriptions().validate(
      {
        pageNo,
        pageSize,
        populate,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for getEventSubscriptions");
      console.log(warrning);
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["populate"] = populate;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/event/event-subscriptions`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Company id
   * @param {string} arg.applicationId - Application id
   * @param {number} [arg.pageSize] - Current request items count
   * @param {string} [arg.populate] - Populate fields
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
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - Current page no
   * @param {number} [arg.pageSize] - Current request items count
   * @param {Object} [arg.sort] - To sort based on created_at
   * @summary: Get jobs
   * @description: Get jobs
   */
  getJobs({ pageNo, pageSize, sort } = {}) {
    const { error } = CommunicationValidator.getJobs().validate(
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
    const { error: warrning } = CommunicationValidator.getJobs().validate(
      {
        pageNo,
        pageSize,
        sort,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for getJobs");
      console.log(warrning);
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["sort"] = sort;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/jobs/jobs`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Company id
   * @param {string} arg.applicationId - Application id
   * @param {number} [arg.pageSize] - Current request items count
   * @param {Object} [arg.sort] - To sort based on created_at
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
   * @param {Object} arg - Arg object.
   * @param {TriggerJobRequest} arg.body
   * @summary: Trigger campaign job
   * @description: Trigger campaign job
   */
  triggerCampaignJob({ body } = {}) {
    const { error } = CommunicationValidator.triggerCampaignJob().validate(
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
    } = CommunicationValidator.triggerCampaignJob().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for triggerCampaignJob");
      console.log(warrning);
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/jobs/trigger-job`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - Current page no
   * @param {number} [arg.pageSize] - Current request items count
   * @param {Object} [arg.sort] - To sort based on created_at
   * @summary: Get job logs
   * @description: Get job logs
   */
  getJobLogs({ pageNo, pageSize, sort } = {}) {
    const { error } = CommunicationValidator.getJobLogs().validate(
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
    const { error: warrning } = CommunicationValidator.getJobLogs().validate(
      {
        pageNo,
        pageSize,
        sort,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for getJobLogs");
      console.log(warrning);
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["sort"] = sort;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/jobs/logs`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Company id
   * @param {string} arg.applicationId - Application id
   * @param {number} [arg.pageSize] - Current request items count
   * @param {Object} [arg.sort] - To sort based on created_at
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
   * @param {Object} arg - Arg object.
   * @param {string} [arg.pageId] - Current page no
   * @param {number} [arg.pageSize] - Current request items count
   * @param {Object} [arg.sort] - To sort based on _id
   * @param {Object} [arg.query] -
   * @summary: Get communication logs
   * @description: Get communication logs
   */
  getCommunicationLogs({ pageId, pageSize, sort, query } = {}) {
    const { error } = CommunicationValidator.getCommunicationLogs().validate(
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
    } = CommunicationValidator.getCommunicationLogs().validate(
      {
        pageId,
        pageSize,
        sort,
        query,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for getCommunicationLogs");
      console.log(warrning);
    }

    const query_params = {};
    query_params["page_id"] = pageId;
    query_params["page_size"] = pageSize;
    query_params["sort"] = sort;
    query_params["query"] = query;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/log`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Company id
   * @param {string} arg.applicationId - Application id
   * @param {number} [arg.pageSize] - Current request items count
   * @param {Object} [arg.sort] - To sort based on _id
   * @param {Object} [arg.query] -
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
   * @param {Object} arg - Arg object.
   * @param {SendOtpCommsReq} arg.body
   * @summary: Send OTP using email and sms
   * @description: Send OTP Comms via email and sms
   */
  sendOtp({ body } = {}) {
    const { error } = CommunicationValidator.sendOtp().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CommunicationValidator.sendOtp().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for sendOtp");
      console.log(warrning);
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/otp/send-otp-comms`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {VerifyOtpCommsReq} arg.body
   * @summary: Verify OTP sent via email and sms
   * @description: Verify OTP sent via email and sms
   */
  verfiyOtp({ body } = {}) {
    const { error } = CommunicationValidator.verfiyOtp().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CommunicationValidator.verfiyOtp().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for verfiyOtp");
      console.log(warrning);
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/otp/verify-otp-comms`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - Current page no
   * @param {number} [arg.pageSize] - Current request items count
   * @param {Object} [arg.sort] - To sort based on created_at
   * @summary: Get sms providers
   * @description: Get sms providers
   */
  getSmsProviders({ pageNo, pageSize, sort } = {}) {
    const { error } = CommunicationValidator.getSmsProviders().validate(
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
    } = CommunicationValidator.getSmsProviders().validate(
      {
        pageNo,
        pageSize,
        sort,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for getSmsProviders");
      console.log(warrning);
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["sort"] = sort;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/providers`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Company id
   * @param {string} arg.applicationId - Application id
   * @param {number} [arg.pageSize] - Current request items count
   * @param {Object} [arg.sort] - To sort based on created_at
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
   * @param {Object} arg - Arg object.
   * @param {SmsProviderReq} arg.body
   * @summary: Create sms provider
   * @description: Create sms provider
   */
  createSmsProvider({ body } = {}) {
    const { error } = CommunicationValidator.createSmsProvider().validate(
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
    } = CommunicationValidator.createSmsProvider().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for createSmsProvider");
      console.log(warrning);
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/providers`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Sms provider id
   * @summary: Get sms provider by id
   * @description: Get sms provider by id
   */
  getSmsProviderById({ id } = {}) {
    const { error } = CommunicationValidator.getSmsProviderById().validate(
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
    } = CommunicationValidator.getSmsProviderById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for getSmsProviderById");
      console.log(warrning);
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/providers/${id}`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Sms provider id
   * @param {SmsProviderReq} arg.body
   * @summary: Update sms provider by id
   * @description: Update sms provider by id
   */
  updateSmsProviderById({ id, body } = {}) {
    const { error } = CommunicationValidator.updateSmsProviderById().validate(
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
    } = CommunicationValidator.updateSmsProviderById().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for updateSmsProviderById");
      console.log(warrning);
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/providers/${id}`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - Current page no
   * @param {number} [arg.pageSize] - Current request items count
   * @param {Object} [arg.sort] - To sort based on created_at
   * @summary: Get sms templates
   * @description: Get sms templates
   */
  getSmsTemplates({ pageNo, pageSize, sort } = {}) {
    const { error } = CommunicationValidator.getSmsTemplates().validate(
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
    } = CommunicationValidator.getSmsTemplates().validate(
      {
        pageNo,
        pageSize,
        sort,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for getSmsTemplates");
      console.log(warrning);
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["sort"] = sort;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/templates`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Company id
   * @param {string} arg.applicationId - Application id
   * @param {number} [arg.pageSize] - Current request items count
   * @param {Object} [arg.sort] - To sort based on created_at
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
   * @param {Object} arg - Arg object.
   * @param {SmsTemplateReq} arg.body
   * @summary: Create sms template
   * @description: Create sms template
   */
  createSmsTemplate({ body } = {}) {
    const { error } = CommunicationValidator.createSmsTemplate().validate(
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
    } = CommunicationValidator.createSmsTemplate().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for createSmsTemplate");
      console.log(warrning);
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/templates`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Sms template id
   * @summary: Get sms template by id
   * @description: Get sms template by id
   */
  getSmsTemplateById({ id } = {}) {
    const { error } = CommunicationValidator.getSmsTemplateById().validate(
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
    } = CommunicationValidator.getSmsTemplateById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for getSmsTemplateById");
      console.log(warrning);
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/templates/${id}`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Sms template id
   * @param {SmsTemplateReq} arg.body
   * @summary: Update sms template by id
   * @description: Update sms template by id
   */
  updateSmsTemplateById({ id, body } = {}) {
    const { error } = CommunicationValidator.updateSmsTemplateById().validate(
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
    } = CommunicationValidator.updateSmsTemplateById().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for updateSmsTemplateById");
      console.log(warrning);
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/templates/${id}`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Sms template id
   * @summary: Delete sms template by id
   * @description: Delete sms template by id
   */
  deleteSmsTemplateById({ id } = {}) {
    const { error } = CommunicationValidator.deleteSmsTemplateById().validate(
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
    } = CommunicationValidator.deleteSmsTemplateById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for deleteSmsTemplateById");
      console.log(warrning);
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/templates/${id}`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - Current page no
   * @param {number} [arg.pageSize] - Current request items count
   * @param {Object} [arg.sort] - To sort based on created_at
   * @summary: Get system sms templates
   * @description: Get system sms templates
   */
  getSystemSystemTemplates({ pageNo, pageSize, sort } = {}) {
    const {
      error,
    } = CommunicationValidator.getSystemSystemTemplates().validate(
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
    } = CommunicationValidator.getSystemSystemTemplates().validate(
      {
        pageNo,
        pageSize,
        sort,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log(
        "Parameter Validation warrnings for getSystemSystemTemplates"
      );
      console.log(warrning);
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["sort"] = sort;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/system-templates`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Company id
   * @param {string} arg.applicationId - Application id
   * @param {number} [arg.pageSize] - Current request items count
   * @param {Object} [arg.sort] - To sort based on created_at
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
}
module.exports = Communication;
