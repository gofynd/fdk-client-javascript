const Joi = require("joi");

/**
 * @typedef ChannelDisplayName
 * @property {string} [platform_pos]
 */

/**
 * @typedef ChannelDisplayNameResponse
 * @property {ChannelDisplayName} [data]
 * @property {boolean} [success]
 */

/**
 * @typedef CnDetails
 * @property {string} [channel_of_issuance]
 * @property {string} [date_issued]
 * @property {string} [expiry_date]
 * @property {string} [invoice_number]
 * @property {string} [order_id]
 * @property {string} [ordering_channel]
 * @property {string} [shipment_id]
 * @property {string} [staff_id]
 * @property {string} [store_id]
 */

/**
 * @typedef CnDownloadReport
 * @property {string} [affiliate_id]
 * @property {string} [end_date]
 * @property {number} [page]
 * @property {number} [pagesize]
 * @property {string} [search]
 * @property {string} [search_type]
 * @property {string} [start_date]
 * @property {string[]} [status]
 */

/**
 * @typedef CnGenerateReport
 * @property {string} [affiliate_id]
 * @property {string} [end_date]
 * @property {CnGenerateReportFilters} [filters]
 * @property {GenerateReportFilters} [meta]
 * @property {number} [page]
 * @property {number} [pagesize]
 * @property {string} [report_id]
 * @property {string} [search]
 * @property {string} [search_type]
 * @property {string} [start_date]
 */

/**
 * @typedef CnGenerateReportFilters
 * @property {string[]} [channel_of_issuance]
 * @property {string[]} [ordering_channel]
 * @property {string[]} [staff_id]
 * @property {number[]} [store_id]
 * @property {string[]} [types_of_transaction]
 * @property {string[]} [utilisation]
 */

/**
 * @typedef CnGenerateReportItems
 * @property {string} [credit_note_number]
 * @property {string} [date_issued]
 * @property {string} [expiry_date]
 * @property {string} [invoice_number]
 * @property {string} [order_id]
 * @property {string} [shipment_id]
 * @property {string} [status]
 * @property {number} [total_amount]
 */

/**
 * @typedef CnReferenceNumber
 * @property {string} [cn_reference_number]
 */

/**
 * @typedef CreateSellerCreditNoteConfig
 * @property {string} [affiliate_id]
 * @property {string} [currency_type]
 * @property {boolean} [is_cn_as_refund_method]
 * @property {CreditNoteConfigNotificationEvents} [notification_events]
 * @property {string[]} [ordering_channel]
 * @property {string} [sales_channel_name]
 * @property {number} [seller_id]
 * @property {string[]} [slug_values]
 * @property {string[]} [source_channel]
 * @property {number} [validity]
 */

/**
 * @typedef CreateSellerCreditNoteConfigRequest
 * @property {CreateSellerCreditNoteConfig} [data]
 */

/**
 * @typedef CreateSellerCreditNoteConfigResponse
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef CreditlineDataPlatformPayload
 * @property {string} [end_end]
 * @property {number} [page]
 * @property {number} [pagesize]
 * @property {string} [seller_id]
 * @property {string} [start_end]
 */

/**
 * @typedef CreditlineDataPlatformRequest
 * @property {CreditlineDataPlatformPayload} [data]
 */

/**
 * @typedef CreditlineDataPlatformResponse
 * @property {number} [code]
 * @property {string[]} [headers]
 * @property {number} [item_count]
 * @property {Object[]} [items]
 * @property {string} [message]
 * @property {Page} [page]
 * @property {boolean} [show_mr]
 */

/**
 * @typedef CreditNoteConfigNotificationEvents
 * @property {number} [expiration_reminder_to_customer]
 */

/**
 * @typedef CreditNoteDetails
 * @property {number} [available_cn_balance]
 * @property {number} [cn_amount]
 * @property {CnDetails} [cn_details]
 * @property {string} [cn_reference_number]
 * @property {string} [cn_status]
 * @property {string} [customer_mobile_number]
 * @property {RedemptionDetails[]} [redemption_details]
 * @property {number} [remaining_cn_amount]
 */

/**
 * @typedef CreditNoteDetailsRequest
 * @property {CnReferenceNumber} [data]
 */

/**
 * @typedef CreditNoteDetailsResponse
 * @property {CreditNoteDetails} [data]
 * @property {boolean} [success]
 */

/**
 * @typedef Currency
 * @property {string} [code]
 * @property {string} [name]
 * @property {string} [symbol]
 */

/**
 * @typedef DeleteConfig
 * @property {string} [affiliate_id]
 * @property {number} [seller_id]
 * @property {string[]} [slug_values]
 */

/**
 * @typedef DeleteConfigRequest
 * @property {DeleteConfig} [data]
 */

/**
 * @typedef DeleteConfigResponse
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef DownloadCreditDebitNote
 * @property {string[]} [note_id]
 */

/**
 * @typedef DownloadCreditDebitNoteRequest
 * @property {DownloadCreditDebitNote} [data]
 */

/**
 * @typedef DownloadCreditDebitNoteResponse
 * @property {DownloadCreditDebitNoteResponseData[]} [data]
 * @property {boolean} [success]
 */

/**
 * @typedef DownloadCreditDebitNoteResponseData
 * @property {string} [id]
 * @property {string} [pdf_s3_url]
 */

/**
 * @typedef DownloadReport
 * @property {string} [end_date]
 * @property {number} [page]
 * @property {number} [pagesize]
 * @property {string} [start_date]
 */

/**
 * @typedef DownloadReportCustomerCnRequest
 * @property {CnDownloadReport} [data]
 */

/**
 * @typedef DownloadReportCustomerCnResponse
 * @property {DownloadReportResponseData[]} [data]
 */

/**
 * @typedef DownloadReportItems
 * @property {string} [end_date]
 * @property {GenerateReportFilters} [filters]
 * @property {GenerateReportMeta} [meta]
 * @property {string} [report_id]
 * @property {string} [start_date]
 * @property {string} [type_of_request]
 */

/**
 * @typedef DownloadReportList
 * @property {number} [item_count]
 * @property {DownloadReportItems[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef DownloadReportResponseData
 * @property {string} [created_at]
 * @property {string} [display_name]
 * @property {string} [download_link]
 * @property {string} [end_date]
 * @property {Object} [filters]
 * @property {string} [full_name]
 * @property {Object} [meta]
 * @property {string} [msg]
 * @property {string} [report_config_id]
 * @property {string} [report_name]
 * @property {Object} [request_dict]
 * @property {string} [requested_by]
 * @property {string} [start_date]
 * @property {string} [status]
 */

/**
 * @typedef Error
 * @property {string} [reason]
 * @property {boolean} [success]
 */

/**
 * @typedef GenerateReportCustomerCnRequest
 * @property {CnGenerateReport} [data]
 */

/**
 * @typedef GenerateReportCustomerCnResponse
 * @property {GenerateReportCustomerCnResponseData} [data]
 */

/**
 * @typedef GenerateReportCustomerCnResponseData
 * @property {string[]} [allowed_filters]
 * @property {string} [end_date]
 * @property {string[]} [headers]
 * @property {number} [item_count]
 * @property {CnGenerateReportItems[]} [items]
 * @property {Page} [page]
 * @property {string[]} [primary_headers]
 * @property {Object} [row_header_display_order]
 * @property {string} [start_date]
 */

/**
 * @typedef GenerateReportFilters
 * @property {string[]} [brand]
 * @property {string[]} [channel]
 * @property {string[]} [company]
 */

/**
 * @typedef GenerateReportJson
 * @property {string} [end_date]
 * @property {string[]} [headers]
 * @property {number} [item_count]
 * @property {string[][]} [items]
 * @property {Page} [page]
 * @property {string} [start_date]
 */

/**
 * @typedef GenerateReportMeta
 * @property {string} [brand]
 * @property {string} [channel]
 * @property {string} [company]
 */

/**
 * @typedef GenerateReportPlatform
 * @property {string} [end_date]
 * @property {GenerateReportFilters} [filters]
 * @property {GenerateReportMeta} [meta]
 * @property {string} [report_id]
 * @property {string} [start_date]
 */

/**
 * @typedef GenerateReportRequest
 * @property {GenerateReportPlatform} [data]
 */

/**
 * @typedef GetAffiliate
 * @property {number} [company_id]
 */

/**
 * @typedef GetAffiliateResponse
 * @property {Object[]} [docs]
 * @property {boolean} [success]
 */

/**
 * @typedef GetCnConfigRequest
 * @property {DeleteConfig} [data]
 */

/**
 * @typedef GetCnConfigResponse
 * @property {GetCnConfigResponseData} [data]
 * @property {boolean} [success]
 */

/**
 * @typedef GetCnConfigResponseData
 * @property {string} [affiliate_id]
 * @property {string} [currency_type]
 * @property {boolean} [is_cn_as_refund_method]
 * @property {GetCnConfigResponseMeta} [meta]
 * @property {CreditNoteConfigNotificationEvents} [notification_events]
 * @property {string[]} [redemption_ordering_channel]
 * @property {number} [seller_id]
 * @property {number} [validity]
 */

/**
 * @typedef GetCnConfigResponseMeta
 * @property {string} [reason]
 * @property {string[]} [source_channel]
 */

/**
 * @typedef GetCustomerCreditBalance
 * @property {string} [affiliate_id]
 * @property {string} [customer_mobile_number]
 * @property {number} [seller_id]
 */

/**
 * @typedef GetCustomerCreditBalanceRequest
 * @property {GetCustomerCreditBalance} [data]
 */

/**
 * @typedef GetCustomerCreditBalanceResponse
 * @property {GetCustomerCreditBalanceResponseData} [data]
 * @property {boolean} [success]
 */

/**
 * @typedef GetCustomerCreditBalanceResponseData
 * @property {string} [customer_mobile_number]
 * @property {number} [total_credited_balance]
 */

/**
 * @typedef GetEngineData
 * @property {Object} [filters]
 * @property {string[]} [project]
 * @property {string} [table_name]
 */

/**
 * @typedef GetEngineRequest
 * @property {GetEngineData} [data]
 */

/**
 * @typedef GetEngineResponse
 * @property {number} [item_count]
 * @property {Object[]} [items]
 * @property {Page} [page]
 * @property {boolean} [success]
 */

/**
 * @typedef GetPdfUrlViewRequest
 * @property {CnReferenceNumber} [data]
 */

/**
 * @typedef GetPdfUrlViewResponse
 * @property {GetPdfUrlViewResponseData} [data]
 * @property {boolean} [success]
 */

/**
 * @typedef GetPdfUrlViewResponseData
 * @property {string} [cn_reference_number]
 * @property {string} [s3_pdf_link]
 */

/**
 * @typedef GetReason
 * @property {string} [reason_type]
 */

/**
 * @typedef GetReasonRequest
 * @property {GetReason} [data]
 */

/**
 * @typedef GetReasonResponse
 * @property {number} [item_count]
 * @property {ReasonItem[]} [item_list]
 * @property {Page} [page]
 * @property {boolean} [success]
 */

/**
 * @typedef GetReportingFilters
 * @property {Object[]} [options]
 * @property {string} [text]
 * @property {string} [type]
 * @property {string} [value]
 */

/**
 * @typedef GetReportingFiltersResponse
 * @property {GetReportingNestedFilters[]} [filters]
 * @property {GetReportingFilters} [search]
 * @property {GetReportingFilters} [status]
 */

/**
 * @typedef GetReportingNestedFilters
 * @property {Object[]} [options]
 * @property {string} [placeholder_text]
 * @property {boolean} [required]
 * @property {string} [text]
 * @property {string} [type]
 * @property {string} [value]
 */

/**
 * @typedef GetReportListData
 * @property {boolean} [listing_enabled]
 * @property {string} [role_name]
 */

/**
 * @typedef GetReportListRequest
 * @property {GetReportListData} [data]
 */

/**
 * @typedef GetReportListResponse
 * @property {ReportItem[]} [items]
 * @property {Page} [page]
 * @property {boolean} [success]
 * @property {number} [total_count]
 */

/**
 * @typedef InoviceListingPayloadDataFilters
 * @property {string[]} [company_id]
 * @property {string[]} [invoice_type]
 * @property {string[]} [payment_status]
 */

/**
 * @typedef InvoiceActivityLogError
 * @property {string} [reason]
 */

/**
 * @typedef InvoiceActivityLogsResponse
 * @property {InvoiceActivityLogsResponseData[]} [data]
 */

/**
 * @typedef InvoiceActivityLogsResponseData
 * @property {boolean} [is_resolved]
 * @property {number} [max_retry_attempts]
 * @property {string} [performed_by]
 * @property {string} [reason]
 * @property {number} [retry_attempts]
 * @property {string} [status]
 */

/**
 * @typedef InvoiceListingPayloadData
 * @property {string} [end_date]
 * @property {InoviceListingPayloadDataFilters} [filters]
 * @property {number} [page]
 * @property {number} [page_size]
 * @property {string} [search]
 * @property {string} [start_date]
 */

/**
 * @typedef InvoiceListingRequest
 * @property {InvoiceListingPayloadData} [data]
 */

/**
 * @typedef InvoiceListingResponse
 * @property {number} [item_count]
 * @property {InvoiceListingResponseItems[]} [items]
 * @property {Page} [page]
 * @property {UnpaidInvoiceDataItems} [unpaid_invoice_data]
 */

/**
 * @typedef InvoiceListingResponseItems
 * @property {string} [amount]
 * @property {string} [company]
 * @property {Currency} [currency]
 * @property {string} [due_date]
 * @property {string} [invoice_date]
 * @property {string} [invoice_id]
 * @property {string} [invoice_number]
 * @property {string} [invoice_type]
 * @property {boolean} [is_downloadable]
 * @property {string} [period]
 * @property {string} [status]
 */

/**
 * @typedef InvoicePaymentDetailsResponse
 * @property {InvoicePaymentDetailsResponseData} [data]
 * @property {boolean} [payment_details_visible]
 * @property {boolean} [success]
 */

/**
 * @typedef InvoicePaymentDetailsResponseData
 * @property {Object[]} [failed_attempts_details]
 * @property {PaidInvoicePaymentDetail[]} [paid_invoice_payment_details]
 */

/**
 * @typedef InvoicePdfPayloadData
 * @property {string[]} [invoice_number]
 */

/**
 * @typedef InvoicePdfRequest
 * @property {InvoicePdfPayloadData} [data]
 */

/**
 * @typedef InvoicePdfResponse
 * @property {string[]} [data]
 * @property {string[]} [error]
 * @property {boolean} [success]
 */

/**
 * @typedef InvoiceTypePayloadData
 * @property {boolean} [is_active]
 */

/**
 * @typedef InvoiceTypeRequest
 * @property {InvoiceTypePayloadData} [data]
 */

/**
 * @typedef InvoiceTypeResponse
 * @property {InvoiceTypeResponseItems[]} [invoice_type_list]
 * @property {InvoiceTypeResponseItems[]} [payment_status_list]
 * @property {boolean} [success]
 */

/**
 * @typedef InvoiceTypeResponseItems
 * @property {string} [text]
 * @property {string} [value]
 */

/**
 * @typedef IsCnRefundMethodData
 * @property {string} [affiliate_id]
 * @property {number} [seller_id]
 * @property {boolean} [toggle_edit_required]
 */

/**
 * @typedef IsCnRefundMethodRequest
 * @property {IsCnRefundMethodData} [data]
 */

/**
 * @typedef IsCnRefundMethodResponse
 * @property {IsCnRefundMethodResponseData} [data]
 * @property {boolean} [success]
 */

/**
 * @typedef IsCnRefundMethodResponseData
 * @property {boolean} [is_first_time_user]
 */

/**
 * @typedef IsCreditlinePayload
 * @property {string} [seller_id]
 */

/**
 * @typedef IsCreditlinePlatformRequest
 * @property {IsCreditlinePayload} [data]
 */

/**
 * @typedef IsCreditlinePlatformResponse
 * @property {number} [code]
 * @property {boolean} [is_creditline_opted]
 */

/**
 * @typedef Page
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {number} [size]
 * @property {string} type
 */

/**
 * @typedef PaidInvoicePaymentDetail
 * @property {number} [amount]
 * @property {string} [date_of_payment]
 * @property {PaymentDetail[]} [payment_details]
 */

/**
 * @typedef PaymentDetail
 * @property {string} [display_name]
 * @property {string} [value]
 */

/**
 * @typedef PaymentProcessPayload
 * @property {string} [amount]
 * @property {string} [currency]
 * @property {string} [invoice_number]
 * @property {Object} [meta]
 * @property {string} [mode_of_payment]
 * @property {string} [platform]
 * @property {string} [seller_id]
 * @property {string} [source_reference]
 * @property {string} [total_amount]
 * @property {string} [transaction_type]
 */

/**
 * @typedef PaymentProcessRequest
 * @property {PaymentProcessPayload} [data]
 */

/**
 * @typedef PaymentProcessResponse
 * @property {number} [code]
 * @property {string} [message]
 * @property {Object} [meta]
 * @property {string} [redirect_url]
 * @property {string} [transaction_id]
 */

/**
 * @typedef ReasonItem
 * @property {string} [display_name]
 * @property {string} [id]
 * @property {string} [name]
 */

/**
 * @typedef RedemptionDetails
 * @property {number} [amount_debited]
 * @property {string} [created_at]
 * @property {string} [invoice_number]
 * @property {string} [order_id]
 * @property {string} [ordering_channel]
 * @property {string} [shipment_id]
 * @property {string} [staff_id]
 * @property {string} [store_id]
 */

/**
 * @typedef ReportItem
 * @property {string[]} [allowed_filters]
 * @property {Object} [config_meta]
 * @property {string} [description]
 * @property {string} [display_date]
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [report_type]
 */

/**
 * @typedef UnlockCreditNoteRequest
 * @property {UnlockCreditNoteRequestData} [data]
 */

/**
 * @typedef UnlockCreditNoteRequestData
 * @property {string} [description]
 * @property {string[]} [locked_credit_notes]
 * @property {string} [seller_id]
 * @property {string} [unlock_reason]
 */

/**
 * @typedef UnlockCreditNoteResponse
 * @property {UnlockCreditNoteResponseData} [data]
 * @property {boolean} [success]
 */

/**
 * @typedef UnlockCreditNoteResponseData
 * @property {boolean} [is_cn_unlocked]
 * @property {string} [status]
 */

/**
 * @typedef UnpaidInvoiceDataItems
 * @property {string} [currency]
 * @property {number} [total_unpaid_amount]
 * @property {number} [total_unpaid_invoice_count]
 */

class FinancePlatformModel {
  /** @returns {ChannelDisplayName} */
  static ChannelDisplayName() {
    return Joi.object({
      platform_pos: Joi.string().allow(""),
    });
  }

  /** @returns {ChannelDisplayNameResponse} */
  static ChannelDisplayNameResponse() {
    return Joi.object({
      data: FinancePlatformModel.ChannelDisplayName(),
      success: Joi.boolean(),
    });
  }

  /** @returns {CnDetails} */
  static CnDetails() {
    return Joi.object({
      channel_of_issuance: Joi.string().allow(""),
      date_issued: Joi.string().allow(""),
      expiry_date: Joi.string().allow(""),
      invoice_number: Joi.string().allow(""),
      order_id: Joi.string().allow(""),
      ordering_channel: Joi.string().allow(""),
      shipment_id: Joi.string().allow(""),
      staff_id: Joi.string().allow(""),
      store_id: Joi.string().allow(""),
    });
  }

  /** @returns {CnDownloadReport} */
  static CnDownloadReport() {
    return Joi.object({
      affiliate_id: Joi.string().allow(""),
      end_date: Joi.string().allow(""),
      page: Joi.number(),
      pagesize: Joi.number(),
      search: Joi.string().allow(""),
      search_type: Joi.string().allow(""),
      start_date: Joi.string().allow(""),
      status: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {CnGenerateReport} */
  static CnGenerateReport() {
    return Joi.object({
      affiliate_id: Joi.string().allow(""),
      end_date: Joi.string().allow(""),
      filters: FinancePlatformModel.CnGenerateReportFilters(),
      meta: FinancePlatformModel.GenerateReportFilters(),
      page: Joi.number(),
      pagesize: Joi.number(),
      report_id: Joi.string().allow(""),
      search: Joi.string().allow(""),
      search_type: Joi.string().allow(""),
      start_date: Joi.string().allow(""),
    });
  }

  /** @returns {CnGenerateReportFilters} */
  static CnGenerateReportFilters() {
    return Joi.object({
      channel_of_issuance: Joi.array().items(Joi.string().allow("")),
      ordering_channel: Joi.array().items(Joi.string().allow("")),
      staff_id: Joi.array().items(Joi.string().allow("")),
      store_id: Joi.array().items(Joi.number()),
      types_of_transaction: Joi.array().items(Joi.string().allow("")),
      utilisation: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {CnGenerateReportItems} */
  static CnGenerateReportItems() {
    return Joi.object({
      credit_note_number: Joi.string().allow(""),
      date_issued: Joi.string().allow(""),
      expiry_date: Joi.string().allow(""),
      invoice_number: Joi.string().allow(""),
      order_id: Joi.string().allow(""),
      shipment_id: Joi.string().allow(""),
      status: Joi.string().allow(""),
      total_amount: Joi.number(),
    });
  }

  /** @returns {CnReferenceNumber} */
  static CnReferenceNumber() {
    return Joi.object({
      cn_reference_number: Joi.string().allow(""),
    });
  }

  /** @returns {CreateSellerCreditNoteConfig} */
  static CreateSellerCreditNoteConfig() {
    return Joi.object({
      affiliate_id: Joi.string().allow(""),
      currency_type: Joi.string().allow(""),
      is_cn_as_refund_method: Joi.boolean(),
      notification_events: FinancePlatformModel.CreditNoteConfigNotificationEvents(),
      ordering_channel: Joi.array().items(Joi.string().allow("")),
      sales_channel_name: Joi.string().allow(""),
      seller_id: Joi.number(),
      slug_values: Joi.array().items(Joi.string().allow("")),
      source_channel: Joi.array().items(Joi.string().allow("")),
      validity: Joi.number(),
    });
  }

  /** @returns {CreateSellerCreditNoteConfigRequest} */
  static CreateSellerCreditNoteConfigRequest() {
    return Joi.object({
      data: FinancePlatformModel.CreateSellerCreditNoteConfig(),
    });
  }

  /** @returns {CreateSellerCreditNoteConfigResponse} */
  static CreateSellerCreditNoteConfigResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }

  /** @returns {CreditlineDataPlatformPayload} */
  static CreditlineDataPlatformPayload() {
    return Joi.object({
      end_end: Joi.string().allow(""),
      page: Joi.number(),
      pagesize: Joi.number(),
      seller_id: Joi.string().allow(""),
      start_end: Joi.string().allow(""),
    });
  }

  /** @returns {CreditlineDataPlatformRequest} */
  static CreditlineDataPlatformRequest() {
    return Joi.object({
      data: FinancePlatformModel.CreditlineDataPlatformPayload(),
    });
  }

  /** @returns {CreditlineDataPlatformResponse} */
  static CreditlineDataPlatformResponse() {
    return Joi.object({
      code: Joi.number(),
      headers: Joi.array().items(Joi.string().allow("")),
      item_count: Joi.number(),
      items: Joi.array().items(Joi.any()),
      message: Joi.string().allow(""),
      page: FinancePlatformModel.Page(),
      show_mr: Joi.boolean(),
    });
  }

  /** @returns {CreditNoteConfigNotificationEvents} */
  static CreditNoteConfigNotificationEvents() {
    return Joi.object({
      expiration_reminder_to_customer: Joi.number(),
    });
  }

  /** @returns {CreditNoteDetails} */
  static CreditNoteDetails() {
    return Joi.object({
      available_cn_balance: Joi.number(),
      cn_amount: Joi.number(),
      cn_details: FinancePlatformModel.CnDetails(),
      cn_reference_number: Joi.string().allow(""),
      cn_status: Joi.string().allow(""),
      customer_mobile_number: Joi.string().allow(""),
      redemption_details: Joi.array().items(
        FinancePlatformModel.RedemptionDetails()
      ),
      remaining_cn_amount: Joi.number(),
    });
  }

  /** @returns {CreditNoteDetailsRequest} */
  static CreditNoteDetailsRequest() {
    return Joi.object({
      data: FinancePlatformModel.CnReferenceNumber(),
    });
  }

  /** @returns {CreditNoteDetailsResponse} */
  static CreditNoteDetailsResponse() {
    return Joi.object({
      data: FinancePlatformModel.CreditNoteDetails(),
      success: Joi.boolean(),
    });
  }

  /** @returns {Currency} */
  static Currency() {
    return Joi.object({
      code: Joi.string().allow(""),
      name: Joi.string().allow(""),
      symbol: Joi.string().allow(""),
    });
  }

  /** @returns {DeleteConfig} */
  static DeleteConfig() {
    return Joi.object({
      affiliate_id: Joi.string().allow(""),
      seller_id: Joi.number(),
      slug_values: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {DeleteConfigRequest} */
  static DeleteConfigRequest() {
    return Joi.object({
      data: FinancePlatformModel.DeleteConfig(),
    });
  }

  /** @returns {DeleteConfigResponse} */
  static DeleteConfigResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }

  /** @returns {DownloadCreditDebitNote} */
  static DownloadCreditDebitNote() {
    return Joi.object({
      note_id: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {DownloadCreditDebitNoteRequest} */
  static DownloadCreditDebitNoteRequest() {
    return Joi.object({
      data: FinancePlatformModel.DownloadCreditDebitNote(),
    });
  }

  /** @returns {DownloadCreditDebitNoteResponse} */
  static DownloadCreditDebitNoteResponse() {
    return Joi.object({
      data: Joi.array().items(
        FinancePlatformModel.DownloadCreditDebitNoteResponseData()
      ),
      success: Joi.boolean(),
    });
  }

  /** @returns {DownloadCreditDebitNoteResponseData} */
  static DownloadCreditDebitNoteResponseData() {
    return Joi.object({
      id: Joi.string().allow(""),
      pdf_s3_url: Joi.string().allow(""),
    });
  }

  /** @returns {DownloadReport} */
  static DownloadReport() {
    return Joi.object({
      end_date: Joi.string().allow(""),
      page: Joi.number(),
      pagesize: Joi.number(),
      start_date: Joi.string().allow(""),
    });
  }

  /** @returns {DownloadReportCustomerCnRequest} */
  static DownloadReportCustomerCnRequest() {
    return Joi.object({
      data: FinancePlatformModel.CnDownloadReport(),
    });
  }

  /** @returns {DownloadReportCustomerCnResponse} */
  static DownloadReportCustomerCnResponse() {
    return Joi.object({
      data: Joi.array().items(
        FinancePlatformModel.DownloadReportResponseData()
      ),
    });
  }

  /** @returns {DownloadReportItems} */
  static DownloadReportItems() {
    return Joi.object({
      end_date: Joi.string().allow(""),
      filters: FinancePlatformModel.GenerateReportFilters(),
      meta: FinancePlatformModel.GenerateReportMeta(),
      report_id: Joi.string().allow(""),
      start_date: Joi.string().allow(""),
      type_of_request: Joi.string().allow(""),
    });
  }

  /** @returns {DownloadReportList} */
  static DownloadReportList() {
    return Joi.object({
      item_count: Joi.number(),
      items: Joi.array().items(FinancePlatformModel.DownloadReportItems()),
      page: FinancePlatformModel.Page(),
    });
  }

  /** @returns {DownloadReportResponseData} */
  static DownloadReportResponseData() {
    return Joi.object({
      created_at: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      download_link: Joi.string().allow(""),
      end_date: Joi.string().allow(""),
      filters: Joi.any(),
      full_name: Joi.string().allow(""),
      meta: Joi.any(),
      msg: Joi.string().allow(""),
      report_config_id: Joi.string().allow(""),
      report_name: Joi.string().allow(""),
      request_dict: Joi.any(),
      requested_by: Joi.string().allow(""),
      start_date: Joi.string().allow(""),
      status: Joi.string().allow(""),
    });
  }

  /** @returns {Error} */
  static Error() {
    return Joi.object({
      reason: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }

  /** @returns {GenerateReportCustomerCnRequest} */
  static GenerateReportCustomerCnRequest() {
    return Joi.object({
      data: FinancePlatformModel.CnGenerateReport(),
    });
  }

  /** @returns {GenerateReportCustomerCnResponse} */
  static GenerateReportCustomerCnResponse() {
    return Joi.object({
      data: FinancePlatformModel.GenerateReportCustomerCnResponseData(),
    });
  }

  /** @returns {GenerateReportCustomerCnResponseData} */
  static GenerateReportCustomerCnResponseData() {
    return Joi.object({
      allowed_filters: Joi.array().items(Joi.string().allow("")),
      end_date: Joi.string().allow(""),
      headers: Joi.array().items(Joi.string().allow("")),
      item_count: Joi.number(),
      items: Joi.array().items(FinancePlatformModel.CnGenerateReportItems()),
      page: FinancePlatformModel.Page(),
      primary_headers: Joi.array().items(Joi.string().allow("")),
      row_header_display_order: Joi.any(),
      start_date: Joi.string().allow(""),
    });
  }

  /** @returns {GenerateReportFilters} */
  static GenerateReportFilters() {
    return Joi.object({
      brand: Joi.array().items(Joi.string().allow("")),
      channel: Joi.array().items(Joi.string().allow("")),
      company: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {GenerateReportJson} */
  static GenerateReportJson() {
    return Joi.object({
      end_date: Joi.string().allow(""),
      headers: Joi.array().items(Joi.string().allow("")),
      item_count: Joi.number(),
      items: Joi.array().items(Joi.array().items(Joi.string().allow(""))),
      page: FinancePlatformModel.Page(),
      start_date: Joi.string().allow(""),
    });
  }

  /** @returns {GenerateReportMeta} */
  static GenerateReportMeta() {
    return Joi.object({
      brand: Joi.string().allow(""),
      channel: Joi.string().allow(""),
      company: Joi.string().allow(""),
    });
  }

  /** @returns {GenerateReportPlatform} */
  static GenerateReportPlatform() {
    return Joi.object({
      end_date: Joi.string().allow(""),
      filters: FinancePlatformModel.GenerateReportFilters(),
      meta: FinancePlatformModel.GenerateReportMeta(),
      report_id: Joi.string().allow(""),
      start_date: Joi.string().allow(""),
    });
  }

  /** @returns {GenerateReportRequest} */
  static GenerateReportRequest() {
    return Joi.object({
      data: FinancePlatformModel.GenerateReportPlatform(),
    });
  }

  /** @returns {GetAffiliate} */
  static GetAffiliate() {
    return Joi.object({
      company_id: Joi.number(),
    });
  }

  /** @returns {GetAffiliateResponse} */
  static GetAffiliateResponse() {
    return Joi.object({
      docs: Joi.array().items(Joi.any()),
      success: Joi.boolean(),
    });
  }

  /** @returns {GetCnConfigRequest} */
  static GetCnConfigRequest() {
    return Joi.object({
      data: FinancePlatformModel.DeleteConfig(),
    });
  }

  /** @returns {GetCnConfigResponse} */
  static GetCnConfigResponse() {
    return Joi.object({
      data: FinancePlatformModel.GetCnConfigResponseData(),
      success: Joi.boolean(),
    });
  }

  /** @returns {GetCnConfigResponseData} */
  static GetCnConfigResponseData() {
    return Joi.object({
      affiliate_id: Joi.string().allow(""),
      currency_type: Joi.string().allow(""),
      is_cn_as_refund_method: Joi.boolean(),
      meta: FinancePlatformModel.GetCnConfigResponseMeta(),
      notification_events: FinancePlatformModel.CreditNoteConfigNotificationEvents(),
      redemption_ordering_channel: Joi.array().items(Joi.string().allow("")),
      seller_id: Joi.number(),
      validity: Joi.number(),
    });
  }

  /** @returns {GetCnConfigResponseMeta} */
  static GetCnConfigResponseMeta() {
    return Joi.object({
      reason: Joi.string().allow(""),
      source_channel: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {GetCustomerCreditBalance} */
  static GetCustomerCreditBalance() {
    return Joi.object({
      affiliate_id: Joi.string().allow(""),
      customer_mobile_number: Joi.string().allow(""),
      seller_id: Joi.number(),
    });
  }

  /** @returns {GetCustomerCreditBalanceRequest} */
  static GetCustomerCreditBalanceRequest() {
    return Joi.object({
      data: FinancePlatformModel.GetCustomerCreditBalance(),
    });
  }

  /** @returns {GetCustomerCreditBalanceResponse} */
  static GetCustomerCreditBalanceResponse() {
    return Joi.object({
      data: FinancePlatformModel.GetCustomerCreditBalanceResponseData(),
      success: Joi.boolean(),
    });
  }

  /** @returns {GetCustomerCreditBalanceResponseData} */
  static GetCustomerCreditBalanceResponseData() {
    return Joi.object({
      customer_mobile_number: Joi.string().allow(""),
      total_credited_balance: Joi.number(),
    });
  }

  /** @returns {GetEngineData} */
  static GetEngineData() {
    return Joi.object({
      filters: Joi.any(),
      project: Joi.array().items(Joi.string().allow("")),
      table_name: Joi.string().allow(""),
    });
  }

  /** @returns {GetEngineRequest} */
  static GetEngineRequest() {
    return Joi.object({
      data: FinancePlatformModel.GetEngineData(),
    });
  }

  /** @returns {GetEngineResponse} */
  static GetEngineResponse() {
    return Joi.object({
      item_count: Joi.number(),
      items: Joi.array().items(Joi.any()),
      page: FinancePlatformModel.Page(),
      success: Joi.boolean(),
    });
  }

  /** @returns {GetPdfUrlViewRequest} */
  static GetPdfUrlViewRequest() {
    return Joi.object({
      data: FinancePlatformModel.CnReferenceNumber(),
    });
  }

  /** @returns {GetPdfUrlViewResponse} */
  static GetPdfUrlViewResponse() {
    return Joi.object({
      data: FinancePlatformModel.GetPdfUrlViewResponseData(),
      success: Joi.boolean(),
    });
  }

  /** @returns {GetPdfUrlViewResponseData} */
  static GetPdfUrlViewResponseData() {
    return Joi.object({
      cn_reference_number: Joi.string().allow(""),
      s3_pdf_link: Joi.string().allow(""),
    });
  }

  /** @returns {GetReason} */
  static GetReason() {
    return Joi.object({
      reason_type: Joi.string().allow(""),
    });
  }

  /** @returns {GetReasonRequest} */
  static GetReasonRequest() {
    return Joi.object({
      data: FinancePlatformModel.GetReason(),
    });
  }

  /** @returns {GetReasonResponse} */
  static GetReasonResponse() {
    return Joi.object({
      item_count: Joi.number(),
      item_list: Joi.array().items(FinancePlatformModel.ReasonItem()),
      page: FinancePlatformModel.Page(),
      success: Joi.boolean(),
    });
  }

  /** @returns {GetReportingFilters} */
  static GetReportingFilters() {
    return Joi.object({
      options: Joi.array().items(Joi.any()),
      text: Joi.string().allow(""),
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {GetReportingFiltersResponse} */
  static GetReportingFiltersResponse() {
    return Joi.object({
      filters: Joi.array().items(
        FinancePlatformModel.GetReportingNestedFilters()
      ),
      search: FinancePlatformModel.GetReportingFilters(),
      status: FinancePlatformModel.GetReportingFilters(),
    });
  }

  /** @returns {GetReportingNestedFilters} */
  static GetReportingNestedFilters() {
    return Joi.object({
      options: Joi.array().items(Joi.any()),
      placeholder_text: Joi.string().allow(""),
      required: Joi.boolean(),
      text: Joi.string().allow(""),
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {GetReportListData} */
  static GetReportListData() {
    return Joi.object({
      listing_enabled: Joi.boolean(),
      role_name: Joi.string().allow(""),
    });
  }

  /** @returns {GetReportListRequest} */
  static GetReportListRequest() {
    return Joi.object({
      data: FinancePlatformModel.GetReportListData(),
    });
  }

  /** @returns {GetReportListResponse} */
  static GetReportListResponse() {
    return Joi.object({
      items: Joi.array().items(FinancePlatformModel.ReportItem()),
      page: FinancePlatformModel.Page(),
      success: Joi.boolean(),
      total_count: Joi.number(),
    });
  }

  /** @returns {InoviceListingPayloadDataFilters} */
  static InoviceListingPayloadDataFilters() {
    return Joi.object({
      company_id: Joi.array().items(Joi.string().allow("")),
      invoice_type: Joi.array().items(Joi.string().allow("")),
      payment_status: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {InvoiceActivityLogError} */
  static InvoiceActivityLogError() {
    return Joi.object({
      reason: Joi.string().allow(""),
    });
  }

  /** @returns {InvoiceActivityLogsResponse} */
  static InvoiceActivityLogsResponse() {
    return Joi.object({
      data: Joi.array().items(
        FinancePlatformModel.InvoiceActivityLogsResponseData()
      ),
    });
  }

  /** @returns {InvoiceActivityLogsResponseData} */
  static InvoiceActivityLogsResponseData() {
    return Joi.object({
      is_resolved: Joi.boolean(),
      max_retry_attempts: Joi.number(),
      performed_by: Joi.string().allow(""),
      reason: Joi.string().allow(""),
      retry_attempts: Joi.number(),
      status: Joi.string().allow(""),
    });
  }

  /** @returns {InvoiceListingPayloadData} */
  static InvoiceListingPayloadData() {
    return Joi.object({
      end_date: Joi.string().allow(""),
      filters: FinancePlatformModel.InoviceListingPayloadDataFilters(),
      page: Joi.number(),
      page_size: Joi.number(),
      search: Joi.string().allow(""),
      start_date: Joi.string().allow(""),
    });
  }

  /** @returns {InvoiceListingRequest} */
  static InvoiceListingRequest() {
    return Joi.object({
      data: FinancePlatformModel.InvoiceListingPayloadData(),
    });
  }

  /** @returns {InvoiceListingResponse} */
  static InvoiceListingResponse() {
    return Joi.object({
      item_count: Joi.number(),
      items: Joi.array().items(
        FinancePlatformModel.InvoiceListingResponseItems()
      ),
      page: FinancePlatformModel.Page(),
      unpaid_invoice_data: FinancePlatformModel.UnpaidInvoiceDataItems(),
    });
  }

  /** @returns {InvoiceListingResponseItems} */
  static InvoiceListingResponseItems() {
    return Joi.object({
      amount: Joi.string().allow(""),
      company: Joi.string().allow(""),
      currency: FinancePlatformModel.Currency(),
      due_date: Joi.string().allow(""),
      invoice_date: Joi.string().allow(""),
      invoice_id: Joi.string().allow(""),
      invoice_number: Joi.string().allow(""),
      invoice_type: Joi.string().allow(""),
      is_downloadable: Joi.boolean(),
      period: Joi.string().allow(""),
      status: Joi.string().allow(""),
    });
  }

  /** @returns {InvoicePaymentDetailsResponse} */
  static InvoicePaymentDetailsResponse() {
    return Joi.object({
      data: FinancePlatformModel.InvoicePaymentDetailsResponseData(),
      payment_details_visible: Joi.boolean(),
      success: Joi.boolean(),
    });
  }

  /** @returns {InvoicePaymentDetailsResponseData} */
  static InvoicePaymentDetailsResponseData() {
    return Joi.object({
      failed_attempts_details: Joi.array().items(Joi.any()),
      paid_invoice_payment_details: Joi.array().items(
        FinancePlatformModel.PaidInvoicePaymentDetail()
      ),
    });
  }

  /** @returns {InvoicePdfPayloadData} */
  static InvoicePdfPayloadData() {
    return Joi.object({
      invoice_number: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {InvoicePdfRequest} */
  static InvoicePdfRequest() {
    return Joi.object({
      data: FinancePlatformModel.InvoicePdfPayloadData(),
    });
  }

  /** @returns {InvoicePdfResponse} */
  static InvoicePdfResponse() {
    return Joi.object({
      data: Joi.array().items(Joi.string().allow("")),
      error: Joi.array().items(Joi.string().allow("")),
      success: Joi.boolean(),
    });
  }

  /** @returns {InvoiceTypePayloadData} */
  static InvoiceTypePayloadData() {
    return Joi.object({
      is_active: Joi.boolean(),
    });
  }

  /** @returns {InvoiceTypeRequest} */
  static InvoiceTypeRequest() {
    return Joi.object({
      data: FinancePlatformModel.InvoiceTypePayloadData(),
    });
  }

  /** @returns {InvoiceTypeResponse} */
  static InvoiceTypeResponse() {
    return Joi.object({
      invoice_type_list: Joi.array().items(
        FinancePlatformModel.InvoiceTypeResponseItems()
      ),
      payment_status_list: Joi.array().items(
        FinancePlatformModel.InvoiceTypeResponseItems()
      ),
      success: Joi.boolean(),
    });
  }

  /** @returns {InvoiceTypeResponseItems} */
  static InvoiceTypeResponseItems() {
    return Joi.object({
      text: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {IsCnRefundMethodData} */
  static IsCnRefundMethodData() {
    return Joi.object({
      affiliate_id: Joi.string().allow(""),
      seller_id: Joi.number(),
      toggle_edit_required: Joi.boolean(),
    });
  }

  /** @returns {IsCnRefundMethodRequest} */
  static IsCnRefundMethodRequest() {
    return Joi.object({
      data: FinancePlatformModel.IsCnRefundMethodData(),
    });
  }

  /** @returns {IsCnRefundMethodResponse} */
  static IsCnRefundMethodResponse() {
    return Joi.object({
      data: FinancePlatformModel.IsCnRefundMethodResponseData(),
      success: Joi.boolean(),
    });
  }

  /** @returns {IsCnRefundMethodResponseData} */
  static IsCnRefundMethodResponseData() {
    return Joi.object({
      is_first_time_user: Joi.boolean(),
    });
  }

  /** @returns {IsCreditlinePayload} */
  static IsCreditlinePayload() {
    return Joi.object({
      seller_id: Joi.string().allow(""),
    });
  }

  /** @returns {IsCreditlinePlatformRequest} */
  static IsCreditlinePlatformRequest() {
    return Joi.object({
      data: FinancePlatformModel.IsCreditlinePayload(),
    });
  }

  /** @returns {IsCreditlinePlatformResponse} */
  static IsCreditlinePlatformResponse() {
    return Joi.object({
      code: Joi.number(),
      is_creditline_opted: Joi.boolean(),
    });
  }

  /** @returns {Page} */
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

  /** @returns {PaidInvoicePaymentDetail} */
  static PaidInvoicePaymentDetail() {
    return Joi.object({
      amount: Joi.number(),
      date_of_payment: Joi.string().allow(""),
      payment_details: Joi.array().items(FinancePlatformModel.PaymentDetail()),
    });
  }

  /** @returns {PaymentDetail} */
  static PaymentDetail() {
    return Joi.object({
      display_name: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {PaymentProcessPayload} */
  static PaymentProcessPayload() {
    return Joi.object({
      amount: Joi.string().allow(""),
      currency: Joi.string().allow(""),
      invoice_number: Joi.string().allow(""),
      meta: Joi.any(),
      mode_of_payment: Joi.string().allow(""),
      platform: Joi.string().allow(""),
      seller_id: Joi.string().allow(""),
      source_reference: Joi.string().allow(""),
      total_amount: Joi.string().allow(""),
      transaction_type: Joi.string().allow(""),
    });
  }

  /** @returns {PaymentProcessRequest} */
  static PaymentProcessRequest() {
    return Joi.object({
      data: FinancePlatformModel.PaymentProcessPayload(),
    });
  }

  /** @returns {PaymentProcessResponse} */
  static PaymentProcessResponse() {
    return Joi.object({
      code: Joi.number(),
      message: Joi.string().allow(""),
      meta: Joi.any(),
      redirect_url: Joi.string().allow(""),
      transaction_id: Joi.string().allow(""),
    });
  }

  /** @returns {ReasonItem} */
  static ReasonItem() {
    return Joi.object({
      display_name: Joi.string().allow(""),
      id: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {RedemptionDetails} */
  static RedemptionDetails() {
    return Joi.object({
      amount_debited: Joi.number(),
      created_at: Joi.string().allow(""),
      invoice_number: Joi.string().allow(""),
      order_id: Joi.string().allow(""),
      ordering_channel: Joi.string().allow(""),
      shipment_id: Joi.string().allow(""),
      staff_id: Joi.string().allow(""),
      store_id: Joi.string().allow(""),
    });
  }

  /** @returns {ReportItem} */
  static ReportItem() {
    return Joi.object({
      allowed_filters: Joi.array().items(Joi.string().allow("")),
      config_meta: Joi.any(),
      description: Joi.string().allow(""),
      display_date: Joi.string().allow("").allow(null),
      id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      report_type: Joi.string().allow(""),
    });
  }

  /** @returns {UnlockCreditNoteRequest} */
  static UnlockCreditNoteRequest() {
    return Joi.object({
      data: FinancePlatformModel.UnlockCreditNoteRequestData(),
    });
  }

  /** @returns {UnlockCreditNoteRequestData} */
  static UnlockCreditNoteRequestData() {
    return Joi.object({
      description: Joi.string().allow(""),
      locked_credit_notes: Joi.array().items(Joi.string().allow("")),
      seller_id: Joi.string().allow(""),
      unlock_reason: Joi.string().allow(""),
    });
  }

  /** @returns {UnlockCreditNoteResponse} */
  static UnlockCreditNoteResponse() {
    return Joi.object({
      data: FinancePlatformModel.UnlockCreditNoteResponseData(),
      success: Joi.boolean(),
    });
  }

  /** @returns {UnlockCreditNoteResponseData} */
  static UnlockCreditNoteResponseData() {
    return Joi.object({
      is_cn_unlocked: Joi.boolean(),
      status: Joi.string().allow(""),
    });
  }

  /** @returns {UnpaidInvoiceDataItems} */
  static UnpaidInvoiceDataItems() {
    return Joi.object({
      currency: Joi.string().allow(""),
      total_unpaid_amount: Joi.number(),
      total_unpaid_invoice_count: Joi.number(),
    });
  }
}
module.exports = FinancePlatformModel;
