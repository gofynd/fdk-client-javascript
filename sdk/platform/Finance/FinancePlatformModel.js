const Joi = require("joi");

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
 * @property {Object} [page]
 * @property {boolean} [show_mr]
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
 * @typedef Error
 * @property {string} [reason]
 * @property {boolean} [success]
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
 * @typedef GetDocs
 * @property {Object[]} [docs]
 * @property {Object[]} [items]
 */

/**
 * @typedef GetEngineData
 * @property {GetEngineFilters} [filters]
 * @property {string[]} [project]
 * @property {string} [table_name]
 */

/**
 * @typedef GetEngineFilters
 * @property {string} [config_field]
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
 * @typedef GetReason
 * @property {string} [reason_type]
 */

/**
 * @typedef GetReasonRequest
 * @property {GetReason} [data]
 */

/**
 * @typedef GetReasonResponse
 * @property {GetDocs} [data]
 * @property {boolean} [success]
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
 * @typedef InoviceListingPayloadDataFilters
 * @property {string[]} [company_id]
 * @property {string[]} [invoice_type]
 * @property {string[]} [payment_status]
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
 * @typedef UnpaidInvoiceDataItems
 * @property {string} [currency]
 * @property {number} [total_unpaid_amount]
 * @property {number} [total_unpaid_invoice_count]
 */

class FinancePlatformModel {
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
      page: Joi.any(),
      show_mr: Joi.boolean(),
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

  /** @returns {Error} */
  static Error() {
    return Joi.object({
      reason: Joi.string().allow(""),
      success: Joi.boolean(),
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

  /** @returns {GetDocs} */
  static GetDocs() {
    return Joi.object({
      docs: Joi.array().items(Joi.any()),
      items: Joi.array().items(Joi.any()),
    });
  }

  /** @returns {GetEngineData} */
  static GetEngineData() {
    return Joi.object({
      filters: FinancePlatformModel.GetEngineFilters(),
      project: Joi.array().items(Joi.string().allow("")),
      table_name: Joi.string().allow(""),
    });
  }

  /** @returns {GetEngineFilters} */
  static GetEngineFilters() {
    return Joi.object({
      config_field: Joi.string().allow(""),
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
      data: FinancePlatformModel.GetDocs(),
      success: Joi.boolean(),
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

  /** @returns {InoviceListingPayloadDataFilters} */
  static InoviceListingPayloadDataFilters() {
    return Joi.object({
      company_id: Joi.array().items(Joi.string().allow("")),
      invoice_type: Joi.array().items(Joi.string().allow("")),
      payment_status: Joi.array().items(Joi.string().allow("")),
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
