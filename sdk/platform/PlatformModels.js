const APIClient = require("./PlatformAPIClient");

class Lead {
  constructor(config) {
    this.config = config;
  }

  /**
    *
    * @summary: Gets the list of company level tickets and/or ticket filters depending on query params
    * @description: Gets the list of company level tickets and/or ticket filters
    * @param {Object} arg - arg object.
    * @param {boolean} [arg.items] - Decides that the reponse will contain the list of tickets
    * @param {boolean} [arg.filters] - Decides that the reponse will contain the ticket filters
    
    **/
  getTickets({ items, filters } = {}) {
    const query = {};
    query["items"] = items;
    query["filters"] = filters;

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.company}/ticket`,
      query,
      {}
    );
  }

  /**
   *
   * @summary: Creates a company level ticket
   * @description: Creates a company level ticket
   * @param {Object} arg - arg object.
   * @param {AddTicketPayload} arg.body
   **/
  createTicket({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/lead/v1.0/company/${this.config.company}/ticket`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Retreives ticket details of a company level ticket with ticket ID
    * @description: Retreives ticket details of a company level ticket
    * @param {Object} arg - arg object.
    * @param {string} arg.ticketId - Tiket ID of the ticket to be fetched
    
    **/
  getTicket({ ticketId } = {}) {
    const query = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.company}/ticket/${ticketId}`,
      query,
      {}
    );
  }

  /**
   *
   * @summary: Edits ticket details of a company level ticket
   * @description: Edits ticket details of a company level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes
   * @param {Object} arg - arg object.
   * @param {string} arg.ticketId - Ticket ID of ticket to be edited
   * @param {EditTicketPayload} arg.body
   **/
  editTicket({ ticketId, body } = {}) {
    const query = {};

    return APIClient.execute(
      this.config,
      "put",
      `/service/platform/lead/v1.0/company/${this.config.company}/ticket/${ticketId}`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Create history for specific company level ticket
   * @description: Create history for specific company level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
   * @param {Object} arg - arg object.
   * @param {string} arg.ticketId - Ticket ID for which history is created
   * @param {TicketHistoryPayload} arg.body
   **/
  createHistory({ ticketId, body } = {}) {
    const query = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/lead/v1.0/company/${this.config.company}/ticket/${ticketId}/history`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Gets history list for specific company level ticket
    * @description: Gets history list for specific company level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
    * @param {Object} arg - arg object.
    * @param {string} arg.ticketId - Ticket ID for which history is to be fetched
    
    **/
  getTicketHistory({ ticketId } = {}) {
    const query = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.company}/ticket/${ticketId}/history`,
      query,
      {}
    );
  }
}

class Communication {
  constructor(config) {
    this.config = config;
  }

  /**
    *
    * @summary: Get campaigns
    * @description: Get campaigns
    * @param {Object} arg - arg object.
    
    **/
  getCampaigns({} = {}) {
    const query = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.company}/application/${this.applicationId}/campaigns/campaigns`,
      query,
      {}
    );
  }

  /**
   *
   * @summary: Create campaign
   * @description: Create campaign
   * @param {Object} arg - arg object.
   * @param {CampaignReq} arg.body
   **/
  createCampaign({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.company}/application/${this.applicationId}/campaigns/campaigns`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get campaign by id
    * @description: Get campaign by id
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Campaign id
    
    **/
  getCampaignById({ id } = {}) {
    const query = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.company}/application/${this.applicationId}/campaigns/campaigns/${id}`,
      query,
      {}
    );
  }

  /**
   *
   * @summary: Update campaign by id
   * @description: Update campaign by id
   * @param {Object} arg - arg object.
   * @param {string} arg.id - Campaign id
   * @param {CampaignReq} arg.body
   **/
  updateCampaignById({ id, body } = {}) {
    const query = {};

    return APIClient.execute(
      this.config,
      "put",
      `/service/platform/communication/v1.0/company/${this.config.company}/application/${this.applicationId}/campaigns/campaigns/${id}`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get stats of campaign by id
    * @description: Get stats of campaign by id
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Campaign id
    
    **/
  getStatsOfCampaignById({ id } = {}) {
    const query = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.company}/application/${this.applicationId}/campaigns/get-stats/${id}`,
      query,
      {}
    );
  }

  /**
    *
    * @summary: Get audiences
    * @description: Get audiences
    * @param {Object} arg - arg object.
    
    **/
  getAudiences({} = {}) {
    const query = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.company}/application/${this.applicationId}/sources/datasources`,
      query,
      {}
    );
  }

  /**
   *
   * @summary: Create audience
   * @description: Create audience
   * @param {Object} arg - arg object.
   * @param {AudienceReq} arg.body
   **/
  createAudience({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.company}/application/${this.applicationId}/sources/datasources`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Get bigquery headers
   * @description: Get bigquery headers
   * @param {Object} arg - arg object.
   * @param {BigqueryHeadersReq} arg.body
   **/
  getBigqueryHeaders({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.company}/application/${this.applicationId}/sources/bigquery-headers`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get audience by id
    * @description: Get audience by id
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Audience id
    
    **/
  getAudienceById({ id } = {}) {
    const query = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.company}/application/${this.applicationId}/sources/datasources/${id}`,
      query,
      {}
    );
  }

  /**
   *
   * @summary: Update audience by id
   * @description: Update audience by id
   * @param {Object} arg - arg object.
   * @param {string} arg.id - Audience id
   * @param {AudienceReq} arg.body
   **/
  updateAudienceById({ id, body } = {}) {
    const query = {};

    return APIClient.execute(
      this.config,
      "put",
      `/service/platform/communication/v1.0/company/${this.config.company}/application/${this.applicationId}/sources/datasources/${id}`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Get n sample records from csv
   * @description: Get n sample records from csv
   * @param {Object} arg - arg object.
   * @param {GetNRecordsCsvReq} arg.body
   **/
  getNSampleRecordsFromCsv({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.company}/application/${this.applicationId}/sources/get-n-records`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get email providers
    * @description: Get email providers
    * @param {Object} arg - arg object.
    * @param {string} arg.companyId - Company id
    * @param {string} arg.applicationId - Application id
    
    **/
  getEmailProviders({ applicationId } = {}) {
    const query = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.company}/application/${this.applicationId}/email/providers`,
      query,
      {}
    );
  }

  /**
   *
   * @summary: Create email provider
   * @description: Create email provider
   * @param {Object} arg - arg object.
   * @param {EmailProviderReq} arg.body
   **/
  createEmailProvider({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.company}/application/${this.applicationId}/email/providers`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get email provider by id
    * @description: Get email provider by id
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Email provider id
    
    **/
  getEmailProviderById({ id } = {}) {
    const query = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.company}/application/${this.applicationId}/email/providers/${id}`,
      query,
      {}
    );
  }

  /**
   *
   * @summary: Update email provider by id
   * @description: Update email provider by id
   * @param {Object} arg - arg object.
   * @param {string} arg.id - Email provider id
   * @param {EmailProviderReq} arg.body
   **/
  updateEmailProviderById({ id, body } = {}) {
    const query = {};

    return APIClient.execute(
      this.config,
      "put",
      `/service/platform/communication/v1.0/company/${this.config.company}/application/${this.applicationId}/email/providers/${id}`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get email templates
    * @description: Get email templates
    * @param {Object} arg - arg object.
    
    **/
  getEmailTemplates({} = {}) {
    const query = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.company}/application/${this.applicationId}/email/templates`,
      query,
      {}
    );
  }

  /**
   *
   * @summary: Create email template
   * @description: Create email template
   * @param {Object} arg - arg object.
   * @param {EmailTemplateReq} arg.body
   **/
  createEmailTemplate({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.company}/application/${this.applicationId}/email/templates`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get system email templates
    * @description: Get system email templates
    * @param {Object} arg - arg object.
    
    **/
  getSystemEmailTemplates({} = {}) {
    const query = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.company}/application/${this.applicationId}/email/system-templates`,
      query,
      {}
    );
  }

  /**
    *
    * @summary: Get email template by id
    * @description: Get email template by id
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Email template id
    
    **/
  getEmailTemplateById({ id } = {}) {
    const query = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.company}/application/${this.applicationId}/email/templates/${id}`,
      query,
      {}
    );
  }

  /**
   *
   * @summary: Update email template by id
   * @description: Update email template by id
   * @param {Object} arg - arg object.
   * @param {string} arg.id - Email template id
   * @param {EmailTemplateReq} arg.body
   **/
  updateEmailTemplateById({ id, body } = {}) {
    const query = {};

    return APIClient.execute(
      this.config,
      "put",
      `/service/platform/communication/v1.0/company/${this.config.company}/application/${this.applicationId}/email/templates/${id}`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Delete email template by id
    * @description: Delete email template by id
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Email template id
    
    **/
  deleteEmailTemplateById({ id } = {}) {
    const query = {};

    return APIClient.execute(
      this.config,
      "delete",
      `/service/platform/communication/v1.0/company/${this.config.company}/application/${this.applicationId}/email/templates/${id}`,
      query,
      {}
    );
  }

  /**
    *
    * @summary: Get event subscriptions
    * @description: Get event subscriptions
    * @param {Object} arg - arg object.
    * @param {string} arg.companyId - Company id
    * @param {string} arg.applicationId - Application id
    
    **/
  getEventSubscriptions({ applicationId } = {}) {
    const query = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.company}/application/${this.applicationId}/event/event-subscriptions`,
      query,
      {}
    );
  }

  /**
    *
    * @summary: Get jobs
    * @description: Get jobs
    * @param {Object} arg - arg object.
    * @param {string} arg.companyId - Company id
    * @param {string} arg.applicationId - Application id
    
    **/
  getJobs({ applicationId } = {}) {
    const query = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.company}/application/${this.applicationId}/jobs/jobs`,
      query,
      {}
    );
  }

  /**
   *
   * @summary: Trigger campaign job
   * @description: Trigger campaign job
   * @param {Object} arg - arg object.
   * @param {TriggerJobRequest} arg.body
   **/
  triggerCampaignJob({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.company}/application/${this.applicationId}/jobs/trigger-job`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get job logs
    * @description: Get job logs
    * @param {Object} arg - arg object.
    * @param {string} arg.companyId - Company id
    * @param {string} arg.applicationId - Application id
    
    **/
  getJobLogs({ applicationId } = {}) {
    const query = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.company}/application/${this.applicationId}/jobs/logs`,
      query,
      {}
    );
  }

  /**
    *
    * @summary: Get communication logs
    * @description: Get communication logs
    * @param {Object} arg - arg object.
    * @param {string} arg.companyId - Company id
    * @param {string} arg.applicationId - Application id
    
    **/
  getCommunicationLogs({ applicationId } = {}) {
    const query = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.company}/application/${this.applicationId}/log`,
      query,
      {}
    );
  }

  /**
    *
    * @summary: Get sms providers
    * @description: Get sms providers
    * @param {Object} arg - arg object.
    
    **/
  getSmsProviders({} = {}) {
    const query = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.company}/application/${this.applicationId}/sms/providers`,
      query,
      {}
    );
  }

  /**
   *
   * @summary: Create sms provider
   * @description: Create sms provider
   * @param {Object} arg - arg object.
   * @param {SmsProviderReq} arg.body
   **/
  createSmsProvider({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.company}/application/${this.applicationId}/sms/providers`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get sms provider by id
    * @description: Get sms provider by id
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Sms provider id
    
    **/
  getSmsProviderById({ id } = {}) {
    const query = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.company}/application/${this.applicationId}/sms/providers/${id}`,
      query,
      {}
    );
  }

  /**
   *
   * @summary: Update sms provider by id
   * @description: Update sms provider by id
   * @param {Object} arg - arg object.
   * @param {string} arg.id - Sms provider id
   * @param {SmsProviderReq} arg.body
   **/
  updateSmsProviderById({ id, body } = {}) {
    const query = {};

    return APIClient.execute(
      this.config,
      "put",
      `/service/platform/communication/v1.0/company/${this.config.company}/application/${this.applicationId}/sms/providers/${id}`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get sms templates
    * @description: Get sms templates
    * @param {Object} arg - arg object.
    
    **/
  getSmsTemplates({} = {}) {
    const query = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.company}/application/${this.applicationId}/sms/templates`,
      query,
      {}
    );
  }

  /**
   *
   * @summary: Create sms template
   * @description: Create sms template
   * @param {Object} arg - arg object.
   * @param {SmsTemplateReq} arg.body
   **/
  createSmsTemplate({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.company}/application/${this.applicationId}/sms/templates`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get sms template by id
    * @description: Get sms template by id
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Sms template id
    
    **/
  getSmsTemplateById({ id } = {}) {
    const query = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.company}/application/${this.applicationId}/sms/templates/${id}`,
      query,
      {}
    );
  }

  /**
   *
   * @summary: Update sms template by id
   * @description: Update sms template by id
   * @param {Object} arg - arg object.
   * @param {string} arg.id - Sms template id
   * @param {SmsTemplateReq} arg.body
   **/
  updateSmsTemplateById({ id, body } = {}) {
    const query = {};

    return APIClient.execute(
      this.config,
      "put",
      `/service/platform/communication/v1.0/company/${this.config.company}/application/${this.applicationId}/sms/templates/${id}`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Delete sms template by id
    * @description: Delete sms template by id
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Sms template id
    
    **/
  deleteSmsTemplateById({ id } = {}) {
    const query = {};

    return APIClient.execute(
      this.config,
      "delete",
      `/service/platform/communication/v1.0/company/${this.config.company}/application/${this.applicationId}/sms/templates/${id}`,
      query,
      {}
    );
  }

  /**
    *
    * @summary: Get system sms templates
    * @description: Get system sms templates
    * @param {Object} arg - arg object.
    
    **/
  getSystemSystemTemplates({} = {}) {
    const query = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.company}/application/${this.applicationId}/sms/system-templates`,
      query,
      {}
    );
  }
}

class Inventory {
  constructor(config) {
    this.config = config;
  }

  /**
    *
    * @summary: Get Job Configs For A Company
    * @description: REST Endpoint that returns all job configs for a company
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - Page Number
    * @param {number} [arg.pageSize] - Page Size
    
    **/
  getJobsByCompany({ pageNo, pageSize } = {}) {
    const query = {};
    query["page_no"] = pageNo;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this.config,
      "get",
      `/v1.0/company/${this.config.company}/jobs`,
      query,
      {}
    );
  }

  /**
   *
   * @summary: Updates An Existing Job Config
   * @description: REST Endpoint that updates a job config
   * @param {Object} arg - arg object.
   * @param {string} [arg.xUserData] -
   * @param {JobConfigDTO} arg.body
   **/
  updateJob({ body, xUserData } = {}) {
    const query = {};

    return APIClient.execute(
      this.config,
      "put",
      `/v1.0/company/${this.config.company}/jobs`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Creates A New Job Config
   * @description: REST Endpoint that creates a new job config
   * @param {Object} arg - arg object.
   * @param {string} [arg.xUserData] -
   * @param {JobConfigDTO} arg.body
   **/
  createJob({ body, xUserData } = {}) {
    const query = {};

    return APIClient.execute(
      this.config,
      "post",
      `/v1.0/company/${this.config.company}/jobs`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get Job Configs By Company And Integration
    * @description: REST Endpoint that returns all job configs by company And integration
    * @param {Object} arg - arg object.
    * @param {string} arg.integrationId - Integration Id
    * @param {number} [arg.pageNo] - Page Number
    * @param {number} [arg.pageSize] - Page Size
    
    **/
  getJobByCompanyAndIntegration({ integrationId, pageNo, pageSize } = {}) {
    const query = {};
    query["page_no"] = pageNo;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this.config,
      "get",
      `/v1.0/company/${this.config.company}/jobs/integration/${integrationId}`,
      query,
      {}
    );
  }

  /**
    *
    * @summary: Get Job Configs Defaults
    * @description: REST Endpoint that returns default fields job configs by company And integration
    * @param {Object} arg - arg object.
    
    **/
  getJobConfigDefaults({} = {}) {
    const query = {};

    return APIClient.execute(
      this.config,
      "get",
      `/v1.0/company/${this.config.company}/jobs/defaults`,
      query,
      {}
    );
  }

  /**
    *
    * @summary: Get Job Config By Code
    * @description: REST Endpoint that returns job config by code
    * @param {Object} arg - arg object.
    * @param {string} arg.code - Job Code
    
    **/
  getJobByCode({ code } = {}) {
    const query = {};

    return APIClient.execute(
      this.config,
      "get",
      `/v1.0/company/${this.config.company}/jobs/code/${code}`,
      query,
      {}
    );
  }

  /**
    *
    * @summary: Get Job Codes By Company And Integration
    * @description: REST Endpoint that returns all job codes by company And integration
    * @param {Object} arg - arg object.
    * @param {string} arg.integrationId - Integration Id
    * @param {number} [arg.pageNo] - Page Number
    * @param {number} [arg.pageSize] - Page Size
    
    **/
  getJobCodesByCompanyAndIntegration({ integrationId, pageNo, pageSize } = {}) {
    const query = {};
    query["page_no"] = pageNo;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this.config,
      "get",
      `/v1.0/company/${this.config.company}/jobs/code/integration/${integrationId}`,
      query,
      {}
    );
  }
}

module.exports = {
  Lead,
  Communication,
  Inventory,
};
