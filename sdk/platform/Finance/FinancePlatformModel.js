const Joi = require("joi");

class FinanceModel {
  static DownloadCreditDebitNote() {
    return Joi.object({
      note_id: Joi.array().items(Joi.string().allow("")),
    });
  }
  static DownloadCreditDebitNoteRequest() {
    return Joi.object({
      data: FinanceModel.DownloadCreditDebitNote(),
    });
  }
  static DownloadCreditDebitNoteResponse() {
    return Joi.object({
      data: Joi.array().items(
        FinanceModel.DownloadCreditDebitNoteResponseData()
      ),
      success: Joi.boolean(),
    });
  }
  static DownloadCreditDebitNoteResponseData() {
    return Joi.object({
      id: Joi.string().allow(""),
      pdf_s3_url: Joi.string().allow(""),
    });
  }
  static DownloadReport() {
    return Joi.object({
      end_date: Joi.string().allow(""),
      page: Joi.number(),
      pagesize: Joi.number(),
      start_date: Joi.string().allow(""),
    });
  }
  static DownloadReportItems() {
    return Joi.object({
      end_date: Joi.string().allow(""),
      filters: FinanceModel.GenerateReportFilters(),
      meta: FinanceModel.GenerateReportMeta(),
      report_id: Joi.string().allow(""),
      start_date: Joi.string().allow(""),
      type_of_request: Joi.string().allow(""),
    });
  }
  static DownloadReportList() {
    return Joi.object({
      item_count: Joi.number(),
      items: Joi.array().items(FinanceModel.DownloadReportItems()),
      page: FinanceModel.Page(),
    });
  }
  static Error() {
    return Joi.object({
      reason: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }
  static GenerateReportFilters() {
    return Joi.object({
      brand: Joi.array().items(Joi.string().allow("")),
      channel: Joi.array().items(Joi.string().allow("")),
      company: Joi.array().items(Joi.string().allow("")),
    });
  }
  static GenerateReportJson() {
    return Joi.object({
      end_date: Joi.string().allow(""),
      headers: Joi.array().items(Joi.string().allow("")),
      item_count: Joi.number(),
      items: Joi.array().items(Joi.array().items(Joi.string().allow(""))),
      page: FinanceModel.Page(),
      start_date: Joi.string().allow(""),
    });
  }
  static GenerateReportMeta() {
    return Joi.object({
      brand: Joi.string().allow(""),
      channel: Joi.string().allow(""),
      company: Joi.string().allow(""),
    });
  }
  static GenerateReportPlatform() {
    return Joi.object({
      end_date: Joi.string().allow(""),
      filters: FinanceModel.GenerateReportFilters(),
      meta: FinanceModel.GenerateReportMeta(),
      report_id: Joi.string().allow(""),
      start_date: Joi.string().allow(""),
    });
  }
  static GenerateReportRequest() {
    return Joi.object({
      data: FinanceModel.GenerateReportPlatform(),
    });
  }
  static GetAffiliate() {
    return Joi.object({
      company_id: Joi.number(),
    });
  }
  static GetAffiliateResponse() {
    return Joi.object({
      docs: Joi.array().items(Joi.any()),
      success: Joi.boolean(),
    });
  }
  static GetDocs() {
    return Joi.object({
      docs: Joi.array().items(Joi.any()),
      items: Joi.array().items(Joi.any()),
    });
  }
  static GetEngineData() {
    return Joi.object({
      filters: FinanceModel.GetEngineFilters(),
      project: Joi.array().items(Joi.string().allow("")),
      table_name: Joi.string().allow(""),
    });
  }
  static GetEngineFilters() {
    return Joi.object({
      config_field: Joi.string().allow(""),
    });
  }
  static GetEngineRequest() {
    return Joi.object({
      data: FinanceModel.GetEngineData(),
    });
  }
  static GetEngineResponse() {
    return Joi.object({
      item_count: Joi.number(),
      items: Joi.array().items(Joi.any()),
      page: FinanceModel.Page(),
      success: Joi.boolean(),
    });
  }
  static GetInvoiceListPayloadData() {
    return Joi.object({
      is_active: Joi.boolean(),
    });
  }
  static GetInvoiceListRequest() {
    return Joi.object({
      data: FinanceModel.GetInvoiceListPayloadData(),
    });
  }
  static GetInvoiceListResponse() {
    return Joi.object({
      invoice_type_list: Joi.array().items(Joi.any()),
      payment_status_list: Joi.array().items(Joi.any()),
      success: Joi.boolean(),
    });
  }
  static GetReason() {
    return Joi.object({
      reason_type: Joi.string().allow(""),
    });
  }
  static GetReasonRequest() {
    return Joi.object({
      data: FinanceModel.GetReason(),
    });
  }
  static GetReasonResponse() {
    return Joi.object({
      data: FinanceModel.GetDocs(),
      success: Joi.boolean(),
    });
  }
  static GetReportListData() {
    return Joi.object({
      listing_enabled: Joi.boolean(),
      role_name: Joi.string().allow(""),
    });
  }
  static GetReportListRequest() {
    return Joi.object({
      data: FinanceModel.GetReportListData(),
    });
  }
  static InvoiceListingPayloadData() {
    return Joi.object({
      end_end: Joi.string().allow(""),
      filters: Joi.array().items(Joi.any()),
      page: Joi.number(),
      pagesize: Joi.number(),
      search: Joi.string().allow(""),
      start_end: Joi.string().allow(""),
    });
  }
  static InvoiceListingRequest() {
    return Joi.object({
      data: FinanceModel.InvoiceListingPayloadData(),
    });
  }
  static InvoiceListingResponse() {
    return Joi.object({
      item_count: Joi.number(),
      items: Joi.array().items(Joi.any()),
      page: FinanceModel.Page(),
    });
  }
  static InvoicePdfPayloadData() {
    return Joi.object({
      invoice_number: Joi.array().items(Joi.string().allow("")),
    });
  }
  static InvoicePdfRequest() {
    return Joi.object({
      data: FinanceModel.InvoicePdfPayloadData(),
    });
  }
  static InvoicePdfResponse() {
    return Joi.object({
      data: Joi.array().items(Joi.string().allow("")),
      error: Joi.array().items(Joi.string().allow("")),
      success: Joi.boolean(),
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
  static PaymentProcessRequest() {
    return Joi.object({
      data: FinanceModel.PaymentProcessPayload(),
    });
  }
  static PaymentProcessResponse() {
    return Joi.object({
      code: Joi.number(),
      message: Joi.string().allow(""),
      meta: Joi.any(),
      redirect_url: Joi.string().allow(""),
      transaction_id: Joi.string().allow(""),
    });
  }
}
module.exports = FinanceModel;