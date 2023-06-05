const Joi = require("joi");

class CommunicationModel {
  static Audience() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      description: Joi.string().allow(""),
      file_url: Joi.string().allow(""),
      headers: Joi.array().items(Joi.string().allow("")),
      is_active: Joi.boolean(),
      name: Joi.string().allow(""),
      records_count: Joi.number(),
      slug: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
    });
  }
  static AudienceReq() {
    return Joi.object({
      application: Joi.string().allow(""),
      description: Joi.string().allow(""),
      file_url: Joi.string().allow(""),
      headers: Joi.array().items(Joi.string().allow("")),
      is_active: Joi.boolean(),
      name: Joi.string().allow(""),
      records_count: Joi.number(),
      tags: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
    });
  }
  static Audiences() {
    return Joi.object({
      items: Joi.array().items(CommunicationModel.Audience()),
      page: CommunicationModel.Page(),
    });
  }
  static BadRequestSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
      status: Joi.string().allow(""),
    });
  }
  static BigqueryHeadersReq() {
    return Joi.object({
      query: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }
  static BigqueryHeadersRes() {
    return Joi.object({
      headers: Joi.array().items(
        CommunicationModel.BigqueryHeadersResHeaders()
      ),
    });
  }
  static BigqueryHeadersResHeaders() {
    return Joi.object({
      name: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }
  static Campaign() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      datasource: Joi.string().allow(""),
      description: Joi.string().allow(""),
      email: CommunicationModel.CampaignEmail(),
      is_active: Joi.boolean(),
      name: Joi.string().allow(""),
      recipient_headers: CommunicationModel.RecipientHeaders(),
      slug: Joi.string().allow(""),
      tags: Joi.array().items(Joi.any()),
      type: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
    });
  }
  static CampaignEmail() {
    return Joi.object({
      provider: CommunicationModel.CampignEmailProvider(),
      template: CommunicationModel.CampaignEmailTemplate(),
    });
  }
  static CampaignEmailTemplate() {
    return Joi.object({
      key: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }
  static CampaignReq() {
    return Joi.object({
      application: Joi.string().allow(""),
      description: Joi.string().allow(""),
      file_url: Joi.string().allow(""),
      headers: Joi.array().items(Joi.string().allow("")),
      is_active: Joi.boolean(),
      name: Joi.string().allow(""),
      records_count: Joi.number(),
      tags: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
    });
  }
  static Campaigns() {
    return Joi.object({
      items: Joi.array().items(CommunicationModel.Campaign()),
      page: CommunicationModel.Page(),
    });
  }
  static CampignEmailProvider() {
    return Joi.object({
      _id: Joi.string().allow(""),
      from_email: Joi.string().allow(""),
      from_name: Joi.string().allow(""),
    });
  }
  static EmailProvider() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      api_key: Joi.string().allow(""),
      application: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      description: Joi.string().allow(""),
      from_address: Joi.array().items(
        CommunicationModel.EmailProviderReqFrom()
      ),
      name: Joi.string().allow(""),
      provider: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      type: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
    });
  }
  static EmailProviderReq() {
    return Joi.object({
      api_key: Joi.string().allow(""),
      description: Joi.string().allow(""),
      from_address: Joi.array().items(
        CommunicationModel.EmailProviderReqFrom()
      ),
      name: Joi.string().allow(""),
      provider: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }
  static EmailProviderReqFrom() {
    return Joi.object({
      email: Joi.string().allow(""),
      is_default: Joi.boolean(),
      name: Joi.string().allow(""),
    });
  }
  static EmailProviders() {
    return Joi.object({
      items: Joi.array().items(CommunicationModel.EmailProvider()),
      page: CommunicationModel.Page(),
    });
  }
  static EmailTemplate() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      attachments: Joi.array().items(Joi.any()),
      created_at: Joi.string().allow(""),
      description: Joi.string().allow(""),
      from_name: Joi.string().allow(""),
      headers: Joi.array().items(Joi.any()),
      html: CommunicationModel.TemplateAndType(),
      is_internal: Joi.boolean(),
      is_system: Joi.boolean(),
      name: Joi.string().allow(""),
      priority: Joi.string().allow(""),
      published: Joi.boolean(),
      slug: Joi.string().allow(""),
      static_bcc: Joi.array().items(Joi.any()),
      static_cc: Joi.array().items(Joi.any()),
      static_to: Joi.array().items(Joi.any()),
      subject: CommunicationModel.TemplateAndType(),
      tags: Joi.array().items(Joi.any()),
      text: CommunicationModel.TemplateAndType(),
      updated_at: Joi.string().allow(""),
    });
  }
  static EmailTemplateDeleteFailureRes() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }
  static EmailTemplateDeleteSuccessRes() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }
  static EmailTemplateHeaders() {
    return Joi.object({
      key: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }
  static EmailTemplateKeys() {
    return Joi.object({
      bcc: Joi.string().allow(""),
      cc: Joi.string().allow(""),
      to: Joi.string().allow(""),
    });
  }
  static EmailTemplateReq() {
    return Joi.object({
      attachments: Joi.array().items(Joi.any()),
      description: Joi.string().allow(""),
      headers: Joi.array().items(CommunicationModel.EmailTemplateHeaders()),
      html: CommunicationModel.TemplateAndType(),
      keys: CommunicationModel.EmailTemplateKeys(),
      name: Joi.string().allow(""),
      priority: Joi.string().allow(""),
      reply_to: Joi.string().allow(""),
      static_bcc: Joi.array().items(Joi.string().allow("")),
      static_cc: Joi.array().items(Joi.string().allow("")),
      static_to: Joi.array().items(Joi.string().allow("")),
      subject: CommunicationModel.TemplateAndType(),
      text: CommunicationModel.TemplateAndType(),
    });
  }
  static EmailTemplateRes() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      attachments: Joi.array().items(Joi.any()),
      created_at: Joi.string().allow(""),
      description: Joi.string().allow(""),
      headers: Joi.array().items(CommunicationModel.EmailTemplateHeaders()),
      html: CommunicationModel.TemplateAndType(),
      is_internal: Joi.boolean(),
      is_system: Joi.boolean(),
      keys: CommunicationModel.EmailTemplateKeys(),
      name: Joi.string().allow(""),
      priority: Joi.string().allow(""),
      published: Joi.boolean(),
      reply_to: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      static_bcc: Joi.array().items(Joi.string().allow("")),
      static_cc: Joi.array().items(Joi.string().allow("")),
      static_to: Joi.array().items(Joi.string().allow("")),
      subject: CommunicationModel.TemplateAndType(),
      tags: Joi.array().items(Joi.any()),
      text: CommunicationModel.TemplateAndType(),
      updated_at: Joi.string().allow(""),
    });
  }
  static EmailTemplates() {
    return Joi.object({
      items: Joi.array().items(CommunicationModel.EmailTemplate()),
      page: CommunicationModel.Page(),
    });
  }
  static EngineRequest() {
    return Joi.object({
      meta: CommunicationModel.MetaStructure(),
      payload: CommunicationModel.PayloadStructure(),
    });
  }
  static EngineResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }
  static EventSubscription() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      event: Joi.string().allow(""),
      is_default: Joi.boolean(),
      slug: Joi.string().allow(""),
      template: CommunicationModel.EventSubscriptionTemplate(),
      updated_at: Joi.string().allow(""),
    });
  }
  static EventSubscriptions() {
    return Joi.object({
      items: Joi.array().items(CommunicationModel.EventSubscription()),
      page: CommunicationModel.Page(),
    });
  }
  static EventSubscriptionTemplate() {
    return Joi.object({
      email: CommunicationModel.EventSubscriptionTemplateEmail(),
      sms: CommunicationModel.EventSubscriptionTemplateSms(),
    });
  }
  static EventSubscriptionTemplateEmail() {
    return Joi.object({
      subscribed: Joi.boolean(),
      template: Joi.string().allow(""),
    });
  }
  static EventSubscriptionTemplateSms() {
    return Joi.object({
      subscribed: Joi.boolean(),
      template: Joi.string().allow(""),
    });
  }
  static GetNRecordsCsvReq() {
    return Joi.object({
      count: Joi.number(),
      header: Joi.boolean(),
      url: Joi.string().allow(""),
    });
  }
  static GetNRecordsCsvRes() {
    return Joi.object({
      items: Joi.array().items(CommunicationModel.GetNRecordsCsvResItems()),
    });
  }
  static GetNRecordsCsvResItems() {
    return Joi.object({
      email: Joi.string().allow(""),
      firstname: Joi.string().allow(""),
      lastname: Joi.string().allow(""),
      orderid: Joi.string().allow(""),
      phone_number: Joi.string().allow(""),
    });
  }
  static GetStats() {
    return Joi.object({
      items: Joi.array().items(CommunicationModel.Stats()),
    });
  }
  static Job() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      campaign: Joi.string().allow(""),
      completed: Joi.boolean(),
      created_at: Joi.string().allow(""),
      is_active: Joi.boolean(),
      updated_at: Joi.string().allow(""),
    });
  }
  static JobLog() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      campaign: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      imported: Joi.any(),
      job: Joi.string().allow(""),
      processed: Joi.any(),
      updated_at: Joi.string().allow(""),
    });
  }
  static JobLogs() {
    return Joi.object({
      items: Joi.array().items(CommunicationModel.JobLog()),
      page: CommunicationModel.Page(),
    });
  }
  static Jobs() {
    return Joi.object({
      items: Joi.array().items(CommunicationModel.Job()),
      page: CommunicationModel.Page(),
    });
  }
  static Log() {
    return Joi.object({
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      data: Joi.any(),
      email: CommunicationModel.LogEmail(),
      expire_at: Joi.string().allow(""),
      meta: CommunicationModel.LogMeta(),
      pushnotification: CommunicationModel.LogPushnotification(),
      service: Joi.string().allow(""),
      status: Joi.string().allow(""),
      step: Joi.string().allow(""),
    });
  }
  static LogEmail() {
    return Joi.object({
      template: Joi.string().allow(""),
    });
  }
  static LogMeta() {
    return Joi.object({
      identifier: Joi.string().allow(""),
      key: Joi.string().allow(""),
      offset: Joi.string().allow(""),
      partition: Joi.string().allow(""),
      topic: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }
  static LogPushnotification() {
    return Joi.object({
      pushtokens: Joi.array().items(Joi.string().allow("")),
    });
  }
  static Logs() {
    return Joi.object({
      items: Joi.array().items(CommunicationModel.Log()),
      page: CommunicationModel.Page(),
    });
  }
  static MetaStructure() {
    return Joi.object({
      action: Joi.string().allow(""),
      job_type: Joi.string().allow(""),
      timestamp: Joi.string().allow(""),
      trace: Joi.string().allow(""),
    });
  }
  static NotFound() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }
  static Notification() {
    return Joi.object({
      body: Joi.string().allow(""),
      click_action: Joi.string().allow(""),
      deeplink: Joi.string().allow(""),
      icon: Joi.string().allow(""),
      subtitle: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }
  static Page() {
    return Joi.object({
      current: Joi.number(),
      has_next: Joi.boolean(),
      has_previous: Joi.boolean(),
      item_total: Joi.number(),
      next_id: Joi.string().allow(""),
      size: Joi.number(),
      type: Joi.string().allow("").required(),
    });
  }
  static PayloadEmailProviderStructure() {
    return Joi.object({
      _id: Joi.string().allow(""),
    });
  }
  static PayloadEmailStructure() {
    return Joi.object({
      provider: CommunicationModel.PayloadEmailProviderStructure(),
      template: CommunicationModel.PayloadEmailTemplateStructure(),
    });
  }
  static PayloadEmailTemplateStructure() {
    return Joi.object({
      key: Joi.string().allow(""),
      value: Joi.any(),
    });
  }
  static PayloadSmsProviderStructure() {
    return Joi.object({
      _id: Joi.string().allow(""),
    });
  }
  static PayloadSmsStructure() {
    return Joi.object({
      provider: CommunicationModel.PayloadSmsProviderStructure(),
      template: CommunicationModel.PayloadSmsTemplateStructure(),
    });
  }
  static PayloadSmsTemplateStructure() {
    return Joi.object({
      key: Joi.string().allow(""),
      value: Joi.any(),
    });
  }
  static PayloadStructure() {
    return Joi.object({
      application: Joi.string().allow(""),
      data: Joi.array().items(Joi.any()),
      email: CommunicationModel.PayloadEmailStructure(),
      sms: CommunicationModel.PayloadSmsStructure(),
    });
  }
  static PushtokenReq() {
    return Joi.object({
      action: Joi.string().allow(""),
      bundle_identifier: Joi.string().allow(""),
      push_token: Joi.string().allow(""),
      unique_device_id: Joi.string().allow(""),
    });
  }
  static PushtokenRes() {
    return Joi.object({
      _id: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
      bundle_identifier: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      expired_at: Joi.string().allow(""),
      platform: Joi.string().allow(""),
      push_token: Joi.string().allow(""),
      type: Joi.string().allow(""),
      unique_device_id: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
    });
  }
  static RecipientHeaders() {
    return Joi.object({
      email: Joi.string().allow(""),
    });
  }
  static SendOtpCommsReq() {
    return Joi.object({
      data: CommunicationModel.SendOtpCommsReqData(),
      email: CommunicationModel.SendOtpCommsReqEmail(),
      sms: CommunicationModel.SendOtpCommsReqSms(),
    });
  }
  static SendOtpCommsReqData() {
    return Joi.object({
      country_code: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
      send_same_otp_to_channel: Joi.boolean(),
      to: Joi.string().allow(""),
    });
  }
  static SendOtpCommsReqEmail() {
    return Joi.object({
      expiry: Joi.number(),
      otp_length: Joi.number(),
      template: CommunicationModel.SendOtpEmailCommsTemplate(),
    });
  }
  static SendOtpCommsReqSms() {
    return Joi.object({
      expiry: Joi.number(),
      otp_length: Joi.number(),
      provider: CommunicationModel.SendOtpSmsCommsProvider(),
      template: CommunicationModel.SendOtpSmsCommsTemplate(),
    });
  }
  static SendOtpCommsRes() {
    return Joi.object({
      email: CommunicationModel.SendOtpCommsResEmail(),
      sms: CommunicationModel.SendOtpCommsResSms(),
    });
  }
  static SendOtpCommsResEmail() {
    return Joi.object({
      message: Joi.string().allow(""),
      request_id: Joi.string().allow(""),
      resend_timer: Joi.number(),
      success: Joi.boolean(),
      to: Joi.string().allow(""),
    });
  }
  static SendOtpCommsResSms() {
    return Joi.object({
      country_code: Joi.string().allow(""),
      message: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
      request_id: Joi.string().allow(""),
      resend_timer: Joi.number(),
      success: Joi.boolean(),
    });
  }
  static SendOtpEmailCommsTemplate() {
    return Joi.object({
      key: Joi.string().allow(""),
      value: Joi.any(),
    });
  }
  static SendOtpSmsCommsProvider() {
    return Joi.object({
      _id: Joi.string().allow(""),
      slug: Joi.string().allow(""),
    });
  }
  static SendOtpSmsCommsTemplate() {
    return Joi.object({
      key: Joi.string().allow(""),
      value: Joi.any(),
    });
  }
  static SmsProvider() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      authkey: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      description: Joi.string().allow(""),
      name: Joi.string().allow(""),
      provider: Joi.string().allow(""),
      rpt: Joi.number(),
      sender: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      type: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      username: Joi.string().allow(""),
    });
  }
  static SmsProviderReq() {
    return Joi.object({
      authkey: Joi.string().allow(""),
      description: Joi.string().allow(""),
      name: Joi.string().allow(""),
      provider: Joi.string().allow(""),
      sender: Joi.string().allow(""),
      type: Joi.string().allow(""),
      username: Joi.string().allow(""),
    });
  }
  static SmsProviders() {
    return Joi.object({
      items: Joi.array().items(CommunicationModel.SmsProvider()),
      page: CommunicationModel.Page(),
    });
  }
  static SmsTemplate() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      description: Joi.string().allow(""),
      is_internal: Joi.boolean(),
      is_system: Joi.boolean(),
      message: CommunicationModel.SmsTemplateMessage(),
      name: Joi.string().allow(""),
      priority: Joi.string().allow(""),
      published: Joi.boolean(),
      slug: Joi.string().allow(""),
      tags: Joi.array().items(Joi.any()),
      template_variables: Joi.any(),
      updated_at: Joi.string().allow(""),
    });
  }
  static SmsTemplateDeleteFailureRes() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }
  static SmsTemplateDeleteSuccessRes() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }
  static SmsTemplateMessage() {
    return Joi.object({
      template: Joi.string().allow(""),
      template_type: Joi.string().allow(""),
    });
  }
  static SmsTemplateReq() {
    return Joi.object({
      attachments: Joi.array().items(Joi.any()),
      description: Joi.string().allow(""),
      message: CommunicationModel.SmsTemplateMessage(),
      name: Joi.string().allow(""),
      priority: Joi.string().allow(""),
      template_variables: Joi.any(),
    });
  }
  static SmsTemplateRes() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      description: Joi.string().allow(""),
      is_internal: Joi.boolean(),
      is_system: Joi.boolean(),
      message: CommunicationModel.SmsTemplateMessage(),
      name: Joi.string().allow(""),
      priority: Joi.string().allow(""),
      published: Joi.boolean(),
      slug: Joi.string().allow(""),
      tags: Joi.array().items(Joi.any()),
      template_variables: Joi.any(),
      updated_at: Joi.string().allow(""),
    });
  }
  static SmsTemplates() {
    return Joi.object({
      items: Joi.array().items(CommunicationModel.SmsTemplate()),
      page: CommunicationModel.Page(),
    });
  }
  static Stats() {
    return Joi.object({
      _id: Joi.string().allow(""),
      imported: Joi.any(),
      processed: Joi.any(),
    });
  }
  static StatsImported() {
    return Joi.object({
      count: Joi.number(),
    });
  }
  static StatsProcessed() {
    return Joi.object({
      email: CommunicationModel.StatsProcessedEmail(),
      sms: CommunicationModel.StatsProcessedSms(),
    });
  }
  static StatsProcessedEmail() {
    return Joi.object({
      failed: Joi.number(),
      success: Joi.number(),
      suppressed: Joi.number(),
    });
  }
  static StatsProcessedSms() {
    return Joi.object({
      failed: Joi.number(),
      success: Joi.number(),
      suppressed: Joi.number(),
    });
  }
  static SystemEmailTemplate() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      attachments: Joi.array().items(Joi.any()),
      created_at: Joi.string().allow(""),
      description: Joi.string().allow(""),
      from_name: Joi.string().allow(""),
      headers: Joi.array().items(Joi.any()),
      html: CommunicationModel.TemplateAndType(),
      is_internal: Joi.boolean(),
      is_system: Joi.boolean(),
      name: Joi.string().allow(""),
      priority: Joi.string().allow(""),
      published: Joi.boolean(),
      slug: Joi.string().allow(""),
      static_bcc: Joi.array().items(Joi.any()),
      static_cc: Joi.array().items(Joi.any()),
      static_to: Joi.array().items(Joi.any()),
      subject: CommunicationModel.TemplateAndType(),
      tags: Joi.array().items(Joi.any()),
      text: CommunicationModel.TemplateAndType(),
      updated_at: Joi.string().allow(""),
    });
  }
  static SystemEmailTemplates() {
    return Joi.object({
      items: Joi.array().items(CommunicationModel.SystemEmailTemplate()),
      page: CommunicationModel.Page(),
    });
  }
  static SystemNotification() {
    return Joi.object({
      _id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      group: Joi.string().allow(""),
      notification: CommunicationModel.Notification(),
      settings: CommunicationModel.SystemNotificationUser(),
      user: CommunicationModel.SystemNotificationUser(),
    });
  }
  static SystemNotifications() {
    return Joi.object({
      items: Joi.array().items(CommunicationModel.SystemNotification()),
      last_read_anchor: Joi.number(),
      page: CommunicationModel.Page(),
    });
  }
  static SystemNotificationSettings() {
    return Joi.object({
      priority: Joi.string().allow(""),
      sound: Joi.boolean(),
      time_to_live: Joi.string().allow(""),
    });
  }
  static SystemNotificationsPage() {
    return Joi.object({
      current: Joi.number(),
      has_next: Joi.boolean(),
      item_total: Joi.number(),
      size: Joi.number(),
      type: Joi.string().allow(""),
    });
  }
  static SystemNotificationUser() {
    return Joi.object({
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }
  static SystemSmsTemplate() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      description: Joi.string().allow(""),
      is_internal: Joi.boolean(),
      is_system: Joi.boolean(),
      message: CommunicationModel.SmsTemplateMessage(),
      name: Joi.string().allow(""),
      priority: Joi.string().allow(""),
      published: Joi.boolean(),
      slug: Joi.string().allow(""),
      tags: Joi.array().items(Joi.any()),
      template_variables: Joi.any(),
      updated_at: Joi.string().allow(""),
    });
  }
  static SystemSmsTemplates() {
    return Joi.object({
      items: Joi.array().items(CommunicationModel.SystemSmsTemplate()),
      page: CommunicationModel.Page(),
    });
  }
  static TemplateAndType() {
    return Joi.object({
      template: Joi.string().allow(""),
      template_type: Joi.string().allow(""),
    });
  }
  static TriggerJobRequest() {
    return Joi.object({
      job_id: Joi.string().allow(""),
    });
  }
  static TriggerJobResponse() {
    return Joi.object({
      status: Joi.number(),
    });
  }
  static VerifyOtpCommsErrorRes() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }
  static VerifyOtpCommsReq() {
    return Joi.object({
      otp: Joi.string().allow(""),
      request_id: Joi.string().allow(""),
    });
  }
  static VerifyOtpCommsSuccessRes() {
    return Joi.object({
      country_code: Joi.string().allow(""),
      message: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }
}
module.exports = CommunicationModel;
