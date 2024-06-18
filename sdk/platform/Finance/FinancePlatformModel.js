const Joi = require("joi");

/**
 * @typedef OrederFreezeResponse
 * @property {boolean} [success]
 * @property {boolean} [oms_freeze]
 * @property {string} [source]
 */

/**
 * @typedef GenerateReportMeta
 * @property {string} [brand]
 * @property {string} [company]
 * @property {string} [channel]
 */

/**
 * @typedef GenerateReportFilters
 * @property {string[]} [brand]
 * @property {string[]} [company]
 * @property {string[]} [channel]
 */

/**
 * @typedef GenerateReportPlatform
 * @property {string} [start_date]
 * @property {string} [end_date]
 * @property {GenerateReportMeta} [meta]
 * @property {string} [report_id]
 * @property {GenerateReportFilters} [filters]
 */

/**
 * @typedef GenerateReportReq
 * @property {GenerateReportPlatform} [data]
 */

/**
 * @typedef Page
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {number} [current]
 * @property {string} type
 * @property {number} [size]
 */

/**
 * @typedef Currency
 * @property {string} [code]
 * @property {string} [symbol]
 * @property {string} [name]
 */

/**
 * @typedef GenerateReportJson
 * @property {Object} [data]
 * @property {number} [item_count]
 * @property {Page} [page]
 * @property {string} [end_date]
 * @property {string} [start_date]
 * @property {string[][]} [items]
 * @property {string[]} [headers]
 */

/**
 * @typedef Error
 * @property {number} [status]
 * @property {string} [reason]
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {string} [code]
 * @property {string} [exception]
 * @property {string} [info]
 * @property {string} [request_id]
 * @property {string} [stack_trace]
 * @property {ErrorMeta} [meta]
 */

/**
 * @typedef ErrorMeta
 * @property {ErrorMetaItems[]} [columns_errors]
 */

/**
 * @typedef ErrorMetaItems
 * @property {number} [code]
 * @property {string} [message]
 */

/**
 * @typedef DownloadReport
 * @property {DownloadReportData} [data]
 */

/**
 * @typedef DownloadReportData
 * @property {number} [page]
 * @property {number} [page_size]
 * @property {string} [start_date]
 * @property {string} [end_date]
 */

/**
 * @typedef DownloadReportItems
 * @property {string} [start_date]
 * @property {string} [end_date]
 * @property {GenerateReportMeta} [meta]
 * @property {string} [report_id]
 * @property {GenerateReportFilters} [filters]
 * @property {string} [type_of_request]
 */

/**
 * @typedef DownloadReportList
 * @property {DownloadReportItems[]} [items]
 * @property {Page} [page]
 * @property {number} [item_count]
 */

/**
 * @typedef GetEngineFilters
 * @property {string} [config_field]
 * @property {string} [status]
 * @property {boolean} [is_active]
 * @property {string} [seller_id]
 */

/**
 * @typedef GetEngineData
 * @property {string} [status]
 * @property {GetEngineFilters} [filters]
 * @property {string[]} [project]
 * @property {string} [table_name]
 * @property {Object} [search]
 * @property {number} [page]
 * @property {number} [page_size]
 * @property {string} [order_by]
 */

/**
 * @typedef GetEngineReq
 * @property {GetEngineData} [data]
 */

/**
 * @typedef GetEngineResponse
 * @property {boolean} [success]
 * @property {Object[]} [items]
 * @property {Page} [page]
 * @property {number} [item_count]
 */

/**
 * @typedef GetReason
 * @property {string} [reason_type]
 */

/**
 * @typedef GetReasonReq
 * @property {GetReason} [data]
 */

/**
 * @typedef ReasonItem
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [display_name]
 */

/**
 * @typedef GetReasonResponse
 * @property {boolean} [success]
 * @property {ReasonItem[]} [item_list]
 * @property {number} [item_count]
 * @property {Page} [page]
 */

/**
 * @typedef GetReportListData
 * @property {string} [role_name]
 * @property {boolean} [listing_enabled]
 */

/**
 * @typedef GetReportListReq
 * @property {GetReportListData} [data]
 */

/**
 * @typedef GetAffiliate
 * @property {number} [company_id]
 */

/**
 * @typedef GetReportListResponse
 * @property {boolean} [success]
 * @property {ReportItem[]} [items]
 * @property {Page} [page]
 * @property {number} [total_count]
 */

/**
 * @typedef ReportItem
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [description]
 * @property {string[]} [allowed_filters]
 * @property {Object} [config_meta]
 * @property {string} [report_type]
 * @property {string} [display_date]
 */

/**
 * @typedef GetAffiliateResponse
 * @property {string} [reason]
 * @property {boolean} [success]
 * @property {Object[]} [docs]
 */

/**
 * @typedef DownloadCreditDebitNote
 * @property {string[]} [note_id]
 */

/**
 * @typedef DownloadCreditDebitNoteReq
 * @property {DownloadCreditDebitNote} [data]
 */

/**
 * @typedef DownloadCreditDebitNoteResponseData
 * @property {string} [id]
 * @property {string} [pdf_s3_url]
 */

/**
 * @typedef DownloadCreditDebitNoteResponse
 * @property {boolean} [success]
 * @property {DownloadCreditDebitNoteResponseData[]} [data]
 */

/**
 * @typedef PaymentProcessPayload
 * @property {string} [platform]
 * @property {number} [amount]
 * @property {string} [transaction_type]
 * @property {string} [source_reference]
 * @property {number} [total_amount]
 * @property {Object} [meta]
 * @property {string} [currency]
 * @property {string} [seller_id]
 * @property {string} [mode_of_payment]
 * @property {string} [invoice_number]
 */

/**
 * @typedef PaymentProcessReq
 * @property {PaymentProcessPayload} [data]
 */

/**
 * @typedef PaymentProcessResponse
 * @property {number} [code]
 * @property {string} [message]
 * @property {Object} [meta]
 * @property {string} [transaction_id]
 * @property {string} [redirect_url]
 */

/**
 * @typedef CreditlineDataPlatformPayload
 * @property {number} [page]
 * @property {string} [seller_id]
 * @property {string} [end_date]
 * @property {string} [start_date]
 * @property {number} [page_size]
 */

/**
 * @typedef CreditlineDataPlatformReq
 * @property {CreditlineDataPlatformPayload} [data]
 */

/**
 * @typedef CreditlineDataPlatformResponse
 * @property {Object[]} [items]
 * @property {number} [code]
 * @property {boolean} [show_mr]
 * @property {Page} [page]
 * @property {string} [message]
 * @property {string[]} [headers]
 * @property {number} [item_count]
 */

/**
 * @typedef IsCreditlinePayload
 * @property {string} [seller_id]
 */

/**
 * @typedef IsCreditlinePlatformReq
 * @property {IsCreditlinePayload} [data]
 */

/**
 * @typedef IsCreditlinePlatformResponse
 * @property {boolean} [is_creditline_opted]
 * @property {number} [code]
 */

/**
 * @typedef InvoiceTypePayloadData
 * @property {boolean} [is_active]
 */

/**
 * @typedef InvoiceTypeReq
 * @property {InvoiceTypePayloadData} [data]
 */

/**
 * @typedef InvoiceTypeResponseItems
 * @property {string} [text]
 * @property {string} [value]
 */

/**
 * @typedef InvoiceTypeResponse
 * @property {boolean} [success]
 * @property {InvoiceTypeResponseItems[]} [invoice_type_list]
 * @property {InvoiceTypeResponseItems[]} [payment_status_list]
 */

/**
 * @typedef InoviceListingPayloadDataFilters
 * @property {string[]} [payment_status]
 * @property {string[]} [invoice_type]
 * @property {string[]} [company_id]
 */

/**
 * @typedef InvoiceListingPayloadData
 * @property {number} [page_size]
 * @property {number} [page]
 * @property {string} [start_date]
 * @property {string} [end_date]
 * @property {string} [search]
 * @property {InoviceListingPayloadDataFilters} [filters]
 */

/**
 * @typedef InvoiceListingReq
 * @property {InvoiceListingPayloadData} [data]
 */

/**
 * @typedef UnpaidInvoiceDataItems
 * @property {number} [total_unpaid_invoice_count]
 * @property {string} [currency]
 * @property {number} [total_unpaid_amount]
 */

/**
 * @typedef InvoiceListingResponseItems
 * @property {number} [amount]
 * @property {string} [company]
 * @property {string} [status]
 * @property {string} [due_date]
 * @property {string} [invoice_date]
 * @property {string} [invoice_type]
 * @property {string} [period]
 * @property {string} [invoice_number]
 * @property {boolean} [is_downloadable]
 * @property {string} [invoice_id]
 * @property {Currency} [currency]
 */

/**
 * @typedef InvoiceListingResponse
 * @property {boolean} [success]
 * @property {string[]} [headers]
 * @property {UnpaidInvoiceDataItems} [unpaid_invoice_data]
 * @property {InvoiceListingResponseItems[]} [items]
 * @property {Page} [page]
 * @property {number} [item_count]
 */

/**
 * @typedef InvoicePdfPayloadData
 * @property {string[]} [invoice_number]
 */

/**
 * @typedef InvoicePdfReq
 * @property {InvoicePdfPayloadData} [data]
 */

/**
 * @typedef InvoicePdfResponse
 * @property {boolean} [success]
 * @property {string[]} [data]
 * @property {string[]} [error]
 */

/**
 * @typedef IsCnRefundMethodData
 * @property {string} [affiliate_id]
 * @property {boolean} [toggle_edit_required]
 * @property {number} [seller_id]
 */

/**
 * @typedef IsCnRefundMethodReq
 * @property {IsCnRefundMethodData} [data]
 */

/**
 * @typedef IsCnRefundMethodResponseData
 * @property {boolean} [is_first_time_user]
 */

/**
 * @typedef IsCnRefundMethodResponse
 * @property {boolean} [success]
 * @property {IsCnRefundMethodResponseData} [data]
 */

/**
 * @typedef CreditNoteConfigNotificationEvents
 * @property {number} [expiration_reminder_to_customer]
 */

/**
 * @typedef CreateSellerCreditNoteConfig
 * @property {boolean} [is_cn_as_refund_method]
 * @property {string} [affiliate_id]
 * @property {string[]} [source_channel]
 * @property {number} [seller_id]
 * @property {CreditNoteConfigNotificationEvents} [notification_events]
 * @property {string} [sales_channel_name]
 * @property {string[]} [ordering_channel]
 * @property {number} [validity]
 * @property {string} [currency_type]
 * @property {string[]} [slug_values]
 */

/**
 * @typedef CreateSellerCreditNoteConfigReq
 * @property {CreateSellerCreditNoteConfig} [data]
 */

/**
 * @typedef CreateSellerCreditNoteConfigResponse
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef DeleteConfig
 * @property {string} [affiliate_id]
 * @property {string[]} [slug_values]
 * @property {number} [seller_id]
 */

/**
 * @typedef DeleteConfigReq
 * @property {DeleteConfig} [data]
 */

/**
 * @typedef DeleteConfigResponse
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef ChannelDisplayNameItems
 * @property {string} [key]
 * @property {string} [value]
 */

/**
 * @typedef ChannelDisplayNameResponse
 * @property {boolean} [success]
 * @property {ChannelDisplayNameItems[]} [items]
 */

/**
 * @typedef CnReferenceNumber
 * @property {string} [cn_reference_number]
 */

/**
 * @typedef GetPdfUrlViewReq
 * @property {CnReferenceNumber} [data]
 */

/**
 * @typedef GetPdfUrlViewResponseData
 * @property {string} [s3_pdf_link]
 * @property {string} [cn_reference_number]
 */

/**
 * @typedef GetPdfUrlViewResponse
 * @property {boolean} [success]
 * @property {GetPdfUrlViewResponseData} [data]
 */

/**
 * @typedef CreditNoteDetailsReq
 * @property {CnReferenceNumber} [data]
 */

/**
 * @typedef CnDetails
 * @property {string} [staff_id]
 * @property {string} [expiry_date]
 * @property {string} [channel_of_issuance]
 * @property {string} [order_id]
 * @property {string} [date_issued]
 * @property {string} [ordering_channel]
 * @property {string} [shipment_id]
 * @property {string} [store_id]
 * @property {string} [invoice_number]
 */

/**
 * @typedef RedemptionDetails
 * @property {Object} [meta]
 * @property {string} [staff_id]
 * @property {string} [created_at]
 * @property {string} [order_id]
 * @property {string} [store_id]
 * @property {string} [shipment_id]
 * @property {string} [ordering_channel]
 * @property {number} [amount_debited]
 * @property {string} [invoice_number]
 */

/**
 * @typedef CreditNoteDetails
 * @property {string} [currency]
 * @property {number} [current_amount_used]
 * @property {string} [cn_status]
 * @property {string} [customer_mobile_number]
 * @property {string} [cn_reference_number]
 * @property {CnDetails} [cn_details]
 * @property {RedemptionDetails[]} [redemption_details]
 * @property {number} [remaining_cn_amount]
 * @property {number} [available_cn_balance]
 * @property {number} [cn_amount]
 */

/**
 * @typedef CreditNoteDetailsResponse
 * @property {boolean} [success]
 * @property {CreditNoteDetails} [data]
 */

/**
 * @typedef GetCustomerCreditBalance
 * @property {string} [affiliate_id]
 * @property {number} [seller_id]
 * @property {string} [customer_mobile_number]
 */

/**
 * @typedef GetCustomerCreditBalanceReq
 * @property {GetCustomerCreditBalance} [data]
 */

/**
 * @typedef GetCustomerCreditBalanceResponseData
 * @property {string} [customer_mobile_number]
 * @property {number} [total_credited_balance]
 */

/**
 * @typedef GetCustomerCreditBalanceResponse
 * @property {boolean} [success]
 * @property {GetCustomerCreditBalanceResponseData} [data]
 */

/**
 * @typedef GetCnConfigReq
 * @property {DeleteConfig} [data]
 */

/**
 * @typedef GetCnConfigResponseMeta
 * @property {string} [reason]
 * @property {string[]} [source_channel]
 */

/**
 * @typedef GetCnConfigResponseData
 * @property {boolean} [is_cn_as_refund_method]
 * @property {string} [affiliate_id]
 * @property {Object} [meta]
 * @property {number} [seller_id]
 * @property {CreditNoteConfigNotificationEvents} [notification_events]
 * @property {number} [validity]
 * @property {string[]} [redemption_ordering_channel]
 * @property {string} [currency_type]
 */

/**
 * @typedef GetCnConfigResponse
 * @property {boolean} [success]
 * @property {GetCnConfigResponseData} [data]
 */

/**
 * @typedef CnGenerateReportFilters
 * @property {string[]} [staff_id]
 * @property {string[]} [channel_of_issuance]
 * @property {string[]} [utilisation]
 * @property {string[]} [ordering_channel]
 * @property {number[]} [store_id]
 * @property {string[]} [type_of_transaction]
 * @property {string[]} [issuance_channel]
 */

/**
 * @typedef CnGenerateReport
 * @property {number} [page]
 * @property {string} [end_date]
 * @property {number} [page_size]
 * @property {CnGenerateReportFilters} [filters]
 * @property {string} [affiliate_id]
 * @property {GenerateReportFilters} [meta]
 * @property {string} [search]
 * @property {string} [report_id]
 * @property {string} [search_type]
 * @property {string} [start_date]
 */

/**
 * @typedef GenerateReportCustomerCnReq
 * @property {CnGenerateReport} [data]
 */

/**
 * @typedef CnGenerateReportItems
 * @property {string} [expiry_date]
 * @property {string} [status]
 * @property {number} [total_amount]
 * @property {string} [order_id]
 * @property {string} [date_issued]
 * @property {string} [shipment_id]
 * @property {string} [invoice_number]
 * @property {string} [credit_note_number]
 */

/**
 * @typedef GenerateReportCustomerCnResponseData
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {CnGenerateReportItems[]} [items]
 * @property {Object} [row_header_display_order]
 * @property {string} [end_date]
 * @property {Page} [page]
 * @property {string[]} [headers]
 * @property {string[]} [primary_headers]
 * @property {string[]} [allowed_filters]
 * @property {string} [start_date]
 * @property {number} [item_count]
 */

/**
 * @typedef GenerateReportCustomerCnResponse
 * @property {GenerateReportCustomerCnResponseData} [data]
 */

/**
 * @typedef CnDownloadReport
 * @property {number} [page]
 * @property {string} [start_date]
 * @property {string} [end_date]
 * @property {string} [affiliate_id]
 * @property {string} [search]
 * @property {string} [status]
 * @property {string} [search_type]
 * @property {number} [page_size]
 */

/**
 * @typedef DownloadReportCustomerCnReq
 * @property {CnDownloadReport} [data]
 */

/**
 * @typedef DownloadReportResponseData
 * @property {string} [report_config_id]
 * @property {string} [full_name]
 * @property {string} [requested_by]
 * @property {string} [start_date]
 * @property {string} [end_date]
 * @property {Object} [request_dict]
 * @property {string} [download_link]
 * @property {string} [created_at]
 * @property {Object} [meta]
 * @property {string} [msg]
 * @property {string} [report_name]
 * @property {string} [status]
 * @property {string} [display_name]
 * @property {Object} [filters]
 */

/**
 * @typedef DownloadReportCustomerCnResponse
 * @property {DownloadReportResponseData[]} [items]
 * @property {DownloadReportResponseData[]} [data]
 * @property {number} [item_count]
 * @property {Page} [page]
 */

/**
 * @typedef GetReportingFilters
 * @property {string} [text]
 * @property {string} [type]
 * @property {Object[]} [options]
 * @property {string} [value]
 */

/**
 * @typedef GetReportingNestedFilters
 * @property {string} [text]
 * @property {Object[]} [options]
 * @property {boolean} [required]
 * @property {string} [placeholder_text]
 * @property {string} [type]
 * @property {string} [value]
 */

/**
 * @typedef GetReportingFiltersReasonOptions
 * @property {string} [text]
 * @property {string} [value]
 * @property {string} [placeholder_text]
 */

/**
 * @typedef GetReportingFiltersReason
 * @property {string} [text]
 * @property {string} [type]
 * @property {string} [value]
 * @property {GetReportingFiltersReasonOptions[]} [options]
 */

/**
 * @typedef GetReportingFiltersResponse
 * @property {GetReportingFiltersReason} [reason]
 * @property {GetReportingFilters} [search]
 * @property {GetReportingNestedFilters[]} [filters]
 * @property {GetReportingFilters} [status]
 */

/**
 * @typedef InvoicePaymentOptionsPayloadData
 * @property {string} [invoice_number]
 */

/**
 * @typedef InvoicePaymentOptionsReq
 * @property {InvoicePaymentOptionsPayloadData} [data]
 */

/**
 * @typedef InvoicePaymentOptionsResponsePayableAmounts
 * @property {number} [amount]
 * @property {string} [amount_key]
 * @property {string} [header]
 */

/**
 * @typedef InvoicePaymentOptionsResponseDeductedAmounts
 * @property {number} [amount]
 * @property {string} [header]
 * @property {string} [amount_key]
 * @property {boolean} [is_payable]
 * @property {string} [symbol]
 */

/**
 * @typedef InvoicePaymentOptionsResponseData
 * @property {Currency} [currency]
 * @property {string} [invoice_type]
 * @property {InvoicePaymentOptionsResponsePayableAmounts[]} [display_amounts]
 * @property {Object} [total_amount]
 * @property {Object} [deducted_amounts]
 * @property {InvoicePaymentOptionsResponsePayableAmounts[]} [payable_amounts]
 */

/**
 * @typedef InvoicePaymentOptionsResponse
 * @property {string} [reason]
 * @property {InvoicePaymentOptionsResponseData} [data]
 * @property {boolean} [success]
 */

/**
 * @typedef PaymentDetail
 * @property {string} [display_name]
 * @property {string} [value]
 */

/**
 * @typedef PaidInvoicePaymentDetail
 * @property {PaymentDetail[]} [payment_details]
 * @property {string} [date_of_payment]
 * @property {number} [amount]
 */

/**
 * @typedef InvoicePaymentDetailsResponseData
 * @property {PaidInvoicePaymentDetail[]} [paid_invoice_payment_details]
 * @property {Object[]} [failed_attempts_details]
 */

/**
 * @typedef InvoicePaymentDetailsResponse
 * @property {string} [reason]
 * @property {InvoicePaymentDetailsResponseData} [data]
 * @property {boolean} [success]
 * @property {boolean} [payment_details_visible]
 */

/**
 * @typedef InvoiceActivityLogsResponseData
 * @property {string} [performed_by]
 * @property {string} [status]
 * @property {string} [reason]
 * @property {boolean} [is_resolved]
 * @property {number} [retry_attempts]
 * @property {number} [max_retry_attempts]
 */

/**
 * @typedef InvoiceActivityLogsResponse
 * @property {InvoiceActivityLogsResponseData[]} [data]
 */

/**
 * @typedef InvoiceActivityLogError
 * @property {string} [reason]
 */

/**
 * @typedef UnlockCreditNoteRequestData
 * @property {string} [seller_id]
 * @property {string[]} [locked_credit_notes]
 * @property {string} [unlock_reason]
 * @property {string} [description]
 */

/**
 * @typedef UnlockCreditNoteReq
 * @property {UnlockCreditNoteRequestData} [data]
 */

/**
 * @typedef UnlockCreditNoteResponseData
 * @property {boolean} [is_cn_unlocked]
 * @property {string} [status]
 */

/**
 * @typedef UnlockCreditNoteResponse
 * @property {boolean} [success]
 * @property {UnlockCreditNoteResponseData} [data]
 */

class FinancePlatformModel {
  /** @returns {OrederFreezeResponse} */
  static OrederFreezeResponse() {
    return Joi.object({
      success: Joi.boolean(),
      oms_freeze: Joi.boolean(),
      source: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {GenerateReportMeta} */
  static GenerateReportMeta() {
    return Joi.object({
      brand: Joi.string().allow(""),
      company: Joi.string().allow(""),
      channel: Joi.string().allow(""),
    });
  }

  /** @returns {GenerateReportFilters} */
  static GenerateReportFilters() {
    return Joi.object({
      brand: Joi.array().items(Joi.string().allow("")),
      company: Joi.array().items(Joi.string().allow("")),
      channel: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {GenerateReportPlatform} */
  static GenerateReportPlatform() {
    return Joi.object({
      start_date: Joi.string().allow(""),
      end_date: Joi.string().allow(""),
      meta: FinancePlatformModel.GenerateReportMeta(),
      report_id: Joi.string().allow(""),
      filters: FinancePlatformModel.GenerateReportFilters(),
    });
  }

  /** @returns {GenerateReportReq} */
  static GenerateReportReq() {
    return Joi.object({
      data: FinancePlatformModel.GenerateReportPlatform(),
    });
  }

  /** @returns {Page} */
  static Page() {
    return Joi.object({
      item_total: Joi.number(),
      next_id: Joi.string().allow(""),
      has_previous: Joi.boolean(),
      has_next: Joi.boolean(),
      current: Joi.number(),
      type: Joi.string().allow("").required(),
      size: Joi.number(),
    });
  }

  /** @returns {Currency} */
  static Currency() {
    return Joi.object({
      code: Joi.string().allow(""),
      symbol: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {GenerateReportJson} */
  static GenerateReportJson() {
    return Joi.object({
      data: Joi.any(),
      item_count: Joi.number(),
      page: FinancePlatformModel.Page(),
      end_date: Joi.string().allow(""),
      start_date: Joi.string().allow(""),
      items: Joi.array().items(Joi.array().items(Joi.string().allow(""))),
      headers: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {Error} */
  static Error() {
    return Joi.object({
      status: Joi.number(),
      reason: Joi.string().allow(""),
      success: Joi.boolean(),
      message: Joi.string().allow(""),
      code: Joi.string().allow("").allow(null),
      exception: Joi.string().allow(""),
      info: Joi.string().allow("").allow(null),
      request_id: Joi.string().allow("").allow(null),
      stack_trace: Joi.string().allow("").allow(null),
      meta: FinancePlatformModel.ErrorMeta(),
    });
  }

  /** @returns {ErrorMeta} */
  static ErrorMeta() {
    return Joi.object({
      columns_errors: Joi.array().items(FinancePlatformModel.ErrorMetaItems()),
    });
  }

  /** @returns {ErrorMetaItems} */
  static ErrorMetaItems() {
    return Joi.object({
      code: Joi.number().allow(null),
      message: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {DownloadReport} */
  static DownloadReport() {
    return Joi.object({
      data: FinancePlatformModel.DownloadReportData(),
    });
  }

  /** @returns {DownloadReportData} */
  static DownloadReportData() {
    return Joi.object({
      page: Joi.number(),
      page_size: Joi.number(),
      start_date: Joi.string().allow(""),
      end_date: Joi.string().allow(""),
    });
  }

  /** @returns {DownloadReportItems} */
  static DownloadReportItems() {
    return Joi.object({
      start_date: Joi.string().allow(""),
      end_date: Joi.string().allow(""),
      meta: FinancePlatformModel.GenerateReportMeta(),
      report_id: Joi.string().allow(""),
      filters: FinancePlatformModel.GenerateReportFilters(),
      type_of_request: Joi.string().allow(""),
    });
  }

  /** @returns {DownloadReportList} */
  static DownloadReportList() {
    return Joi.object({
      items: Joi.array().items(FinancePlatformModel.DownloadReportItems()),
      page: FinancePlatformModel.Page(),
      item_count: Joi.number(),
    });
  }

  /** @returns {GetEngineFilters} */
  static GetEngineFilters() {
    return Joi.object({
      config_field: Joi.string().allow(""),
      status: Joi.string().allow(""),
      is_active: Joi.boolean(),
      seller_id: Joi.string().allow(""),
    });
  }

  /** @returns {GetEngineData} */
  static GetEngineData() {
    return Joi.object({
      status: Joi.string().allow(""),
      filters: FinancePlatformModel.GetEngineFilters(),
      project: Joi.array().items(Joi.string().allow("")),
      table_name: Joi.string().allow(""),
      search: Joi.any(),
      page: Joi.number(),
      page_size: Joi.number(),
      order_by: Joi.string().allow(""),
    });
  }

  /** @returns {GetEngineReq} */
  static GetEngineReq() {
    return Joi.object({
      data: FinancePlatformModel.GetEngineData(),
    });
  }

  /** @returns {GetEngineResponse} */
  static GetEngineResponse() {
    return Joi.object({
      success: Joi.boolean(),
      items: Joi.array().items(Joi.any()),
      page: FinancePlatformModel.Page(),
      item_count: Joi.number(),
    });
  }

  /** @returns {GetReason} */
  static GetReason() {
    return Joi.object({
      reason_type: Joi.string().allow(""),
    });
  }

  /** @returns {GetReasonReq} */
  static GetReasonReq() {
    return Joi.object({
      data: FinancePlatformModel.GetReason(),
    });
  }

  /** @returns {ReasonItem} */
  static ReasonItem() {
    return Joi.object({
      id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
    });
  }

  /** @returns {GetReasonResponse} */
  static GetReasonResponse() {
    return Joi.object({
      success: Joi.boolean(),
      item_list: Joi.array().items(FinancePlatformModel.ReasonItem()),
      item_count: Joi.number(),
      page: FinancePlatformModel.Page(),
    });
  }

  /** @returns {GetReportListData} */
  static GetReportListData() {
    return Joi.object({
      role_name: Joi.string().allow(""),
      listing_enabled: Joi.boolean(),
    });
  }

  /** @returns {GetReportListReq} */
  static GetReportListReq() {
    return Joi.object({
      data: FinancePlatformModel.GetReportListData(),
    });
  }

  /** @returns {GetAffiliate} */
  static GetAffiliate() {
    return Joi.object({
      company_id: Joi.number(),
    });
  }

  /** @returns {GetReportListResponse} */
  static GetReportListResponse() {
    return Joi.object({
      success: Joi.boolean(),
      items: Joi.array().items(FinancePlatformModel.ReportItem()),
      page: FinancePlatformModel.Page(),
      total_count: Joi.number(),
    });
  }

  /** @returns {ReportItem} */
  static ReportItem() {
    return Joi.object({
      id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      description: Joi.string().allow(""),
      allowed_filters: Joi.array().items(Joi.string().allow("")),
      config_meta: Joi.any(),
      report_type: Joi.string().allow(""),
      display_date: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {GetAffiliateResponse} */
  static GetAffiliateResponse() {
    return Joi.object({
      reason: Joi.string().allow(""),
      success: Joi.boolean(),
      docs: Joi.array().items(Joi.any()),
    });
  }

  /** @returns {DownloadCreditDebitNote} */
  static DownloadCreditDebitNote() {
    return Joi.object({
      note_id: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {DownloadCreditDebitNoteReq} */
  static DownloadCreditDebitNoteReq() {
    return Joi.object({
      data: FinancePlatformModel.DownloadCreditDebitNote(),
    });
  }

  /** @returns {DownloadCreditDebitNoteResponseData} */
  static DownloadCreditDebitNoteResponseData() {
    return Joi.object({
      id: Joi.string().allow(""),
      pdf_s3_url: Joi.string().allow(""),
    });
  }

  /** @returns {DownloadCreditDebitNoteResponse} */
  static DownloadCreditDebitNoteResponse() {
    return Joi.object({
      success: Joi.boolean(),
      data: Joi.array().items(
        FinancePlatformModel.DownloadCreditDebitNoteResponseData()
      ),
    });
  }

  /** @returns {PaymentProcessPayload} */
  static PaymentProcessPayload() {
    return Joi.object({
      platform: Joi.string().allow(""),
      amount: Joi.number(),
      transaction_type: Joi.string().allow(""),
      source_reference: Joi.string().allow(""),
      total_amount: Joi.number(),
      meta: Joi.any(),
      currency: Joi.string().allow(""),
      seller_id: Joi.string().allow(""),
      mode_of_payment: Joi.string().allow(""),
      invoice_number: Joi.string().allow(""),
    });
  }

  /** @returns {PaymentProcessReq} */
  static PaymentProcessReq() {
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
      transaction_id: Joi.string().allow(""),
      redirect_url: Joi.string().allow(""),
    });
  }

  /** @returns {CreditlineDataPlatformPayload} */
  static CreditlineDataPlatformPayload() {
    return Joi.object({
      page: Joi.number(),
      seller_id: Joi.string().allow(""),
      end_date: Joi.string().allow(""),
      start_date: Joi.string().allow(""),
      page_size: Joi.number(),
    });
  }

  /** @returns {CreditlineDataPlatformReq} */
  static CreditlineDataPlatformReq() {
    return Joi.object({
      data: FinancePlatformModel.CreditlineDataPlatformPayload(),
    });
  }

  /** @returns {CreditlineDataPlatformResponse} */
  static CreditlineDataPlatformResponse() {
    return Joi.object({
      items: Joi.array().items(Joi.any()),
      code: Joi.number(),
      show_mr: Joi.boolean(),
      page: FinancePlatformModel.Page(),
      message: Joi.string().allow(""),
      headers: Joi.array().items(Joi.string().allow("")),
      item_count: Joi.number(),
    });
  }

  /** @returns {IsCreditlinePayload} */
  static IsCreditlinePayload() {
    return Joi.object({
      seller_id: Joi.string().allow(""),
    });
  }

  /** @returns {IsCreditlinePlatformReq} */
  static IsCreditlinePlatformReq() {
    return Joi.object({
      data: FinancePlatformModel.IsCreditlinePayload(),
    });
  }

  /** @returns {IsCreditlinePlatformResponse} */
  static IsCreditlinePlatformResponse() {
    return Joi.object({
      is_creditline_opted: Joi.boolean(),
      code: Joi.number(),
    });
  }

  /** @returns {InvoiceTypePayloadData} */
  static InvoiceTypePayloadData() {
    return Joi.object({
      is_active: Joi.boolean(),
    });
  }

  /** @returns {InvoiceTypeReq} */
  static InvoiceTypeReq() {
    return Joi.object({
      data: FinancePlatformModel.InvoiceTypePayloadData(),
    });
  }

  /** @returns {InvoiceTypeResponseItems} */
  static InvoiceTypeResponseItems() {
    return Joi.object({
      text: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {InvoiceTypeResponse} */
  static InvoiceTypeResponse() {
    return Joi.object({
      success: Joi.boolean(),
      invoice_type_list: Joi.array().items(
        FinancePlatformModel.InvoiceTypeResponseItems()
      ),
      payment_status_list: Joi.array().items(
        FinancePlatformModel.InvoiceTypeResponseItems()
      ),
    });
  }

  /** @returns {InoviceListingPayloadDataFilters} */
  static InoviceListingPayloadDataFilters() {
    return Joi.object({
      payment_status: Joi.array().items(Joi.string().allow("")),
      invoice_type: Joi.array().items(Joi.string().allow("")),
      company_id: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {InvoiceListingPayloadData} */
  static InvoiceListingPayloadData() {
    return Joi.object({
      page_size: Joi.number(),
      page: Joi.number(),
      start_date: Joi.string().allow(""),
      end_date: Joi.string().allow(""),
      search: Joi.string().allow(""),
      filters: FinancePlatformModel.InoviceListingPayloadDataFilters(),
    });
  }

  /** @returns {InvoiceListingReq} */
  static InvoiceListingReq() {
    return Joi.object({
      data: FinancePlatformModel.InvoiceListingPayloadData(),
    });
  }

  /** @returns {UnpaidInvoiceDataItems} */
  static UnpaidInvoiceDataItems() {
    return Joi.object({
      total_unpaid_invoice_count: Joi.number(),
      currency: Joi.string().allow(""),
      total_unpaid_amount: Joi.number(),
    });
  }

  /** @returns {InvoiceListingResponseItems} */
  static InvoiceListingResponseItems() {
    return Joi.object({
      amount: Joi.number(),
      company: Joi.string().allow(""),
      status: Joi.string().allow(""),
      due_date: Joi.string().allow(""),
      invoice_date: Joi.string().allow(""),
      invoice_type: Joi.string().allow(""),
      period: Joi.string().allow(""),
      invoice_number: Joi.string().allow(""),
      is_downloadable: Joi.boolean(),
      invoice_id: Joi.string().allow(""),
      currency: FinancePlatformModel.Currency(),
    });
  }

  /** @returns {InvoiceListingResponse} */
  static InvoiceListingResponse() {
    return Joi.object({
      success: Joi.boolean(),
      headers: Joi.array().items(Joi.string().allow("")),
      unpaid_invoice_data: FinancePlatformModel.UnpaidInvoiceDataItems(),
      items: Joi.array().items(
        FinancePlatformModel.InvoiceListingResponseItems()
      ),
      page: FinancePlatformModel.Page(),
      item_count: Joi.number(),
    });
  }

  /** @returns {InvoicePdfPayloadData} */
  static InvoicePdfPayloadData() {
    return Joi.object({
      invoice_number: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {InvoicePdfReq} */
  static InvoicePdfReq() {
    return Joi.object({
      data: FinancePlatformModel.InvoicePdfPayloadData(),
    });
  }

  /** @returns {InvoicePdfResponse} */
  static InvoicePdfResponse() {
    return Joi.object({
      success: Joi.boolean(),
      data: Joi.array().items(Joi.string().allow("")),
      error: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {IsCnRefundMethodData} */
  static IsCnRefundMethodData() {
    return Joi.object({
      affiliate_id: Joi.string().allow(""),
      toggle_edit_required: Joi.boolean(),
      seller_id: Joi.number(),
    });
  }

  /** @returns {IsCnRefundMethodReq} */
  static IsCnRefundMethodReq() {
    return Joi.object({
      data: FinancePlatformModel.IsCnRefundMethodData(),
    });
  }

  /** @returns {IsCnRefundMethodResponseData} */
  static IsCnRefundMethodResponseData() {
    return Joi.object({
      is_first_time_user: Joi.boolean(),
    });
  }

  /** @returns {IsCnRefundMethodResponse} */
  static IsCnRefundMethodResponse() {
    return Joi.object({
      success: Joi.boolean(),
      data: FinancePlatformModel.IsCnRefundMethodResponseData(),
    });
  }

  /** @returns {CreditNoteConfigNotificationEvents} */
  static CreditNoteConfigNotificationEvents() {
    return Joi.object({
      expiration_reminder_to_customer: Joi.number(),
    });
  }

  /** @returns {CreateSellerCreditNoteConfig} */
  static CreateSellerCreditNoteConfig() {
    return Joi.object({
      is_cn_as_refund_method: Joi.boolean(),
      affiliate_id: Joi.string().allow(""),
      source_channel: Joi.array().items(Joi.string().allow("")),
      seller_id: Joi.number(),
      notification_events: FinancePlatformModel.CreditNoteConfigNotificationEvents(),
      sales_channel_name: Joi.string().allow(""),
      ordering_channel: Joi.array().items(Joi.string().allow("")),
      validity: Joi.number(),
      currency_type: Joi.string().allow(""),
      slug_values: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {CreateSellerCreditNoteConfigReq} */
  static CreateSellerCreditNoteConfigReq() {
    return Joi.object({
      data: FinancePlatformModel.CreateSellerCreditNoteConfig(),
    });
  }

  /** @returns {CreateSellerCreditNoteConfigResponse} */
  static CreateSellerCreditNoteConfigResponse() {
    return Joi.object({
      success: Joi.boolean(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {DeleteConfig} */
  static DeleteConfig() {
    return Joi.object({
      affiliate_id: Joi.string().allow(""),
      slug_values: Joi.array().items(Joi.string().allow("")),
      seller_id: Joi.number(),
    });
  }

  /** @returns {DeleteConfigReq} */
  static DeleteConfigReq() {
    return Joi.object({
      data: FinancePlatformModel.DeleteConfig(),
    });
  }

  /** @returns {DeleteConfigResponse} */
  static DeleteConfigResponse() {
    return Joi.object({
      success: Joi.boolean(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {ChannelDisplayNameItems} */
  static ChannelDisplayNameItems() {
    return Joi.object({
      key: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {ChannelDisplayNameResponse} */
  static ChannelDisplayNameResponse() {
    return Joi.object({
      success: Joi.boolean(),
      items: Joi.array().items(FinancePlatformModel.ChannelDisplayNameItems()),
    });
  }

  /** @returns {CnReferenceNumber} */
  static CnReferenceNumber() {
    return Joi.object({
      cn_reference_number: Joi.string().allow(""),
    });
  }

  /** @returns {GetPdfUrlViewReq} */
  static GetPdfUrlViewReq() {
    return Joi.object({
      data: FinancePlatformModel.CnReferenceNumber(),
    });
  }

  /** @returns {GetPdfUrlViewResponseData} */
  static GetPdfUrlViewResponseData() {
    return Joi.object({
      s3_pdf_link: Joi.string().allow(""),
      cn_reference_number: Joi.string().allow(""),
    });
  }

  /** @returns {GetPdfUrlViewResponse} */
  static GetPdfUrlViewResponse() {
    return Joi.object({
      success: Joi.boolean(),
      data: FinancePlatformModel.GetPdfUrlViewResponseData(),
    });
  }

  /** @returns {CreditNoteDetailsReq} */
  static CreditNoteDetailsReq() {
    return Joi.object({
      data: FinancePlatformModel.CnReferenceNumber(),
    });
  }

  /** @returns {CnDetails} */
  static CnDetails() {
    return Joi.object({
      staff_id: Joi.string().allow(""),
      expiry_date: Joi.string().allow(""),
      channel_of_issuance: Joi.string().allow(""),
      order_id: Joi.string().allow(""),
      date_issued: Joi.string().allow(""),
      ordering_channel: Joi.string().allow(""),
      shipment_id: Joi.string().allow(""),
      store_id: Joi.string().allow(""),
      invoice_number: Joi.string().allow(""),
    });
  }

  /** @returns {RedemptionDetails} */
  static RedemptionDetails() {
    return Joi.object({
      meta: Joi.any(),
      staff_id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      order_id: Joi.string().allow(""),
      store_id: Joi.string().allow(""),
      shipment_id: Joi.string().allow(""),
      ordering_channel: Joi.string().allow(""),
      amount_debited: Joi.number(),
      invoice_number: Joi.string().allow(""),
    });
  }

  /** @returns {CreditNoteDetails} */
  static CreditNoteDetails() {
    return Joi.object({
      currency: Joi.string().allow("").allow(null),
      current_amount_used: Joi.number(),
      cn_status: Joi.string().allow(""),
      customer_mobile_number: Joi.string().allow(""),
      cn_reference_number: Joi.string().allow(""),
      cn_details: FinancePlatformModel.CnDetails(),
      redemption_details: Joi.array().items(
        FinancePlatformModel.RedemptionDetails()
      ),
      remaining_cn_amount: Joi.number(),
      available_cn_balance: Joi.number(),
      cn_amount: Joi.number(),
    });
  }

  /** @returns {CreditNoteDetailsResponse} */
  static CreditNoteDetailsResponse() {
    return Joi.object({
      success: Joi.boolean(),
      data: FinancePlatformModel.CreditNoteDetails(),
    });
  }

  /** @returns {GetCustomerCreditBalance} */
  static GetCustomerCreditBalance() {
    return Joi.object({
      affiliate_id: Joi.string().allow(""),
      seller_id: Joi.number(),
      customer_mobile_number: Joi.string().allow(""),
    });
  }

  /** @returns {GetCustomerCreditBalanceReq} */
  static GetCustomerCreditBalanceReq() {
    return Joi.object({
      data: FinancePlatformModel.GetCustomerCreditBalance(),
    });
  }

  /** @returns {GetCustomerCreditBalanceResponseData} */
  static GetCustomerCreditBalanceResponseData() {
    return Joi.object({
      customer_mobile_number: Joi.string().allow(""),
      total_credited_balance: Joi.number(),
    });
  }

  /** @returns {GetCustomerCreditBalanceResponse} */
  static GetCustomerCreditBalanceResponse() {
    return Joi.object({
      success: Joi.boolean(),
      data: FinancePlatformModel.GetCustomerCreditBalanceResponseData(),
    });
  }

  /** @returns {GetCnConfigReq} */
  static GetCnConfigReq() {
    return Joi.object({
      data: FinancePlatformModel.DeleteConfig(),
    });
  }

  /** @returns {GetCnConfigResponseMeta} */
  static GetCnConfigResponseMeta() {
    return Joi.object({
      reason: Joi.string().allow("").allow(null),
      source_channel: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {GetCnConfigResponseData} */
  static GetCnConfigResponseData() {
    return Joi.object({
      is_cn_as_refund_method: Joi.boolean(),
      affiliate_id: Joi.string().allow(""),
      meta: Joi.any(),
      seller_id: Joi.number(),
      notification_events: FinancePlatformModel.CreditNoteConfigNotificationEvents(),
      validity: Joi.number(),
      redemption_ordering_channel: Joi.array().items(Joi.string().allow("")),
      currency_type: Joi.string().allow(""),
    });
  }

  /** @returns {GetCnConfigResponse} */
  static GetCnConfigResponse() {
    return Joi.object({
      success: Joi.boolean(),
      data: FinancePlatformModel.GetCnConfigResponseData(),
    });
  }

  /** @returns {CnGenerateReportFilters} */
  static CnGenerateReportFilters() {
    return Joi.object({
      staff_id: Joi.array().items(Joi.string().allow("")),
      channel_of_issuance: Joi.array().items(Joi.string().allow("")),
      utilisation: Joi.array().items(Joi.string().allow("")),
      ordering_channel: Joi.array().items(Joi.string().allow("")),
      store_id: Joi.array().items(Joi.number()),
      type_of_transaction: Joi.array().items(Joi.string().allow("")),
      issuance_channel: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {CnGenerateReport} */
  static CnGenerateReport() {
    return Joi.object({
      page: Joi.number(),
      end_date: Joi.string().allow(""),
      page_size: Joi.number(),
      filters: FinancePlatformModel.CnGenerateReportFilters(),
      affiliate_id: Joi.string().allow(""),
      meta: FinancePlatformModel.GenerateReportFilters(),
      search: Joi.string().allow(""),
      report_id: Joi.string().allow(""),
      search_type: Joi.string().allow(""),
      start_date: Joi.string().allow(""),
    });
  }

  /** @returns {GenerateReportCustomerCnReq} */
  static GenerateReportCustomerCnReq() {
    return Joi.object({
      data: FinancePlatformModel.CnGenerateReport(),
    });
  }

  /** @returns {CnGenerateReportItems} */
  static CnGenerateReportItems() {
    return Joi.object({
      expiry_date: Joi.string().allow(""),
      status: Joi.string().allow(""),
      total_amount: Joi.number(),
      order_id: Joi.string().allow(""),
      date_issued: Joi.string().allow(""),
      shipment_id: Joi.string().allow(""),
      invoice_number: Joi.string().allow(""),
      credit_note_number: Joi.string().allow(""),
    });
  }

  /** @returns {GenerateReportCustomerCnResponseData} */
  static GenerateReportCustomerCnResponseData() {
    return Joi.object({
      success: Joi.boolean(),
      message: Joi.string().allow(""),
      items: Joi.array().items(FinancePlatformModel.CnGenerateReportItems()),
      row_header_display_order: Joi.any(),
      end_date: Joi.string().allow(""),
      page: FinancePlatformModel.Page(),
      headers: Joi.array().items(Joi.string().allow("")),
      primary_headers: Joi.array().items(Joi.string().allow("")),
      allowed_filters: Joi.array().items(Joi.string().allow("")),
      start_date: Joi.string().allow(""),
      item_count: Joi.number(),
    });
  }

  /** @returns {GenerateReportCustomerCnResponse} */
  static GenerateReportCustomerCnResponse() {
    return Joi.object({
      data: FinancePlatformModel.GenerateReportCustomerCnResponseData(),
    });
  }

  /** @returns {CnDownloadReport} */
  static CnDownloadReport() {
    return Joi.object({
      page: Joi.number(),
      start_date: Joi.string().allow(""),
      end_date: Joi.string().allow(""),
      affiliate_id: Joi.string().allow(""),
      search: Joi.string().allow(""),
      status: Joi.string().allow(""),
      search_type: Joi.string().allow(""),
      page_size: Joi.number(),
    });
  }

  /** @returns {DownloadReportCustomerCnReq} */
  static DownloadReportCustomerCnReq() {
    return Joi.object({
      data: FinancePlatformModel.CnDownloadReport(),
    });
  }

  /** @returns {DownloadReportResponseData} */
  static DownloadReportResponseData() {
    return Joi.object({
      report_config_id: Joi.string().allow(""),
      full_name: Joi.string().allow(""),
      requested_by: Joi.string().allow(""),
      start_date: Joi.string().allow(""),
      end_date: Joi.string().allow(""),
      request_dict: Joi.any(),
      download_link: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      meta: Joi.any(),
      msg: Joi.string().allow(""),
      report_name: Joi.string().allow(""),
      status: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      filters: Joi.any(),
    });
  }

  /** @returns {DownloadReportCustomerCnResponse} */
  static DownloadReportCustomerCnResponse() {
    return Joi.object({
      items: Joi.array().items(
        FinancePlatformModel.DownloadReportResponseData()
      ),
      data: Joi.array().items(
        FinancePlatformModel.DownloadReportResponseData()
      ),
      item_count: Joi.number(),
      page: FinancePlatformModel.Page(),
    });
  }

  /** @returns {GetReportingFilters} */
  static GetReportingFilters() {
    return Joi.object({
      text: Joi.string().allow(""),
      type: Joi.string().allow(""),
      options: Joi.array().items(Joi.any()),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {GetReportingNestedFilters} */
  static GetReportingNestedFilters() {
    return Joi.object({
      text: Joi.string().allow(""),
      options: Joi.array().items(Joi.any()),
      required: Joi.boolean(),
      placeholder_text: Joi.string().allow(""),
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {GetReportingFiltersReasonOptions} */
  static GetReportingFiltersReasonOptions() {
    return Joi.object({
      text: Joi.string().allow(""),
      value: Joi.string().allow(""),
      placeholder_text: Joi.string().allow(""),
    });
  }

  /** @returns {GetReportingFiltersReason} */
  static GetReportingFiltersReason() {
    return Joi.object({
      text: Joi.string().allow(""),
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
      options: Joi.array().items(
        FinancePlatformModel.GetReportingFiltersReasonOptions()
      ),
    });
  }

  /** @returns {GetReportingFiltersResponse} */
  static GetReportingFiltersResponse() {
    return Joi.object({
      reason: FinancePlatformModel.GetReportingFiltersReason(),
      search: FinancePlatformModel.GetReportingFilters(),
      filters: Joi.array().items(
        FinancePlatformModel.GetReportingNestedFilters()
      ),
      status: FinancePlatformModel.GetReportingFilters(),
    });
  }

  /** @returns {InvoicePaymentOptionsPayloadData} */
  static InvoicePaymentOptionsPayloadData() {
    return Joi.object({
      invoice_number: Joi.string().allow(""),
    });
  }

  /** @returns {InvoicePaymentOptionsReq} */
  static InvoicePaymentOptionsReq() {
    return Joi.object({
      data: FinancePlatformModel.InvoicePaymentOptionsPayloadData(),
    });
  }

  /** @returns {InvoicePaymentOptionsResponsePayableAmounts} */
  static InvoicePaymentOptionsResponsePayableAmounts() {
    return Joi.object({
      amount: Joi.number(),
      amount_key: Joi.string().allow(""),
      header: Joi.string().allow(""),
    });
  }

  /** @returns {InvoicePaymentOptionsResponseDeductedAmounts} */
  static InvoicePaymentOptionsResponseDeductedAmounts() {
    return Joi.object({
      amount: Joi.number(),
      header: Joi.string().allow(""),
      amount_key: Joi.string().allow(""),
      is_payable: Joi.boolean(),
      symbol: Joi.string().allow(""),
    });
  }

  /** @returns {InvoicePaymentOptionsResponseData} */
  static InvoicePaymentOptionsResponseData() {
    return Joi.object({
      currency: FinancePlatformModel.Currency(),
      invoice_type: Joi.string().allow(""),
      display_amounts: Joi.array().items(
        FinancePlatformModel.InvoicePaymentOptionsResponsePayableAmounts()
      ),
      total_amount: Joi.any(),
      deducted_amounts: Joi.any(),
      payable_amounts: Joi.array().items(
        FinancePlatformModel.InvoicePaymentOptionsResponsePayableAmounts()
      ),
    });
  }

  /** @returns {InvoicePaymentOptionsResponse} */
  static InvoicePaymentOptionsResponse() {
    return Joi.object({
      reason: Joi.string().allow(""),
      data: FinancePlatformModel.InvoicePaymentOptionsResponseData(),
      success: Joi.boolean(),
    });
  }

  /** @returns {PaymentDetail} */
  static PaymentDetail() {
    return Joi.object({
      display_name: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {PaidInvoicePaymentDetail} */
  static PaidInvoicePaymentDetail() {
    return Joi.object({
      payment_details: Joi.array().items(FinancePlatformModel.PaymentDetail()),
      date_of_payment: Joi.string().allow(""),
      amount: Joi.number(),
    });
  }

  /** @returns {InvoicePaymentDetailsResponseData} */
  static InvoicePaymentDetailsResponseData() {
    return Joi.object({
      paid_invoice_payment_details: Joi.array().items(
        FinancePlatformModel.PaidInvoicePaymentDetail()
      ),
      failed_attempts_details: Joi.array().items(Joi.any()),
    });
  }

  /** @returns {InvoicePaymentDetailsResponse} */
  static InvoicePaymentDetailsResponse() {
    return Joi.object({
      reason: Joi.string().allow(""),
      data: FinancePlatformModel.InvoicePaymentDetailsResponseData(),
      success: Joi.boolean(),
      payment_details_visible: Joi.boolean(),
    });
  }

  /** @returns {InvoiceActivityLogsResponseData} */
  static InvoiceActivityLogsResponseData() {
    return Joi.object({
      performed_by: Joi.string().allow("").allow(null),
      status: Joi.string().allow(""),
      reason: Joi.string().allow("").allow(null),
      is_resolved: Joi.boolean(),
      retry_attempts: Joi.number(),
      max_retry_attempts: Joi.number().allow(null),
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

  /** @returns {InvoiceActivityLogError} */
  static InvoiceActivityLogError() {
    return Joi.object({
      reason: Joi.string().allow(""),
    });
  }

  /** @returns {UnlockCreditNoteRequestData} */
  static UnlockCreditNoteRequestData() {
    return Joi.object({
      seller_id: Joi.string().allow(""),
      locked_credit_notes: Joi.array().items(Joi.string().allow("")),
      unlock_reason: Joi.string().allow(""),
      description: Joi.string().allow(""),
    });
  }

  /** @returns {UnlockCreditNoteReq} */
  static UnlockCreditNoteReq() {
    return Joi.object({
      data: FinancePlatformModel.UnlockCreditNoteRequestData(),
    });
  }

  /** @returns {UnlockCreditNoteResponseData} */
  static UnlockCreditNoteResponseData() {
    return Joi.object({
      is_cn_unlocked: Joi.boolean(),
      status: Joi.string().allow(""),
    });
  }

  /** @returns {UnlockCreditNoteResponse} */
  static UnlockCreditNoteResponse() {
    return Joi.object({
      success: Joi.boolean(),
      data: FinancePlatformModel.UnlockCreditNoteResponseData(),
    });
  }
}
module.exports = FinancePlatformModel;
