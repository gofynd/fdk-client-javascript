const Joi = require("joi");

class FinanceModel {
  static ChannelDisplayName() {
    return Joi.object({
      platform_pos: Joi.string().allow(""),
    });
  }
  static ChannelDisplayNameResponse() {
    return Joi.object({
      data: FinanceModel.ChannelDisplayName(),
      success: Joi.boolean(),
    });
  }
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
  static CnGenerateReport() {
    return Joi.object({
      affiliate_id: Joi.string().allow(""),
      end_date: Joi.string().allow(""),
      filters: FinanceModel.CnGenerateReportFilters(),
      meta: FinanceModel.GenerateReportFilters(),
      page: Joi.number(),
      pagesize: Joi.number(),
      report_id: Joi.string().allow(""),
      search: Joi.string().allow(""),
      search_type: Joi.string().allow(""),
      start_date: Joi.string().allow(""),
    });
  }
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
  static CnReferenceNumber() {
    return Joi.object({
      cn_reference_number: Joi.string().allow(""),
    });
  }
  static CreateSellerCreditNoteConfig() {
    return Joi.object({
      affiliate_id: Joi.string().allow(""),
      currency_type: Joi.string().allow(""),
      is_cn_as_refund_method: Joi.boolean(),
      notification_events: FinanceModel.CreditNoteConfigNotificationEvents(),
      ordering_channel: Joi.array().items(Joi.string().allow("")),
      sales_channel_name: Joi.string().allow(""),
      seller_id: Joi.number(),
      slug_values: Joi.array().items(Joi.string().allow("")),
      source_channel: Joi.array().items(Joi.string().allow("")),
      validity: Joi.number(),
    });
  }
  static CreateSellerCreditNoteConfigRequest() {
    return Joi.object({
      data: FinanceModel.CreateSellerCreditNoteConfig(),
    });
  }
  static CreateSellerCreditNoteConfigResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }
  static CreditlineDataPlatformPayload() {
    return Joi.object({
      end_end: Joi.string().allow(""),
      page: Joi.number(),
      pagesize: Joi.number(),
      seller_id: Joi.string().allow(""),
      start_end: Joi.string().allow(""),
    });
  }
  static CreditlineDataPlatformRequest() {
    return Joi.object({
      data: FinanceModel.CreditlineDataPlatformPayload(),
    });
  }
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
  static CreditNoteConfigNotificationEvents() {
    return Joi.object({
      expiration_reminder_to_customer: Joi.number(),
    });
  }
  static CreditNoteDetails() {
    return Joi.object({
      available_cn_balance: Joi.number(),
      cn_amount: Joi.number(),
      cn_details: Joi.any(),
      cn_reference_number: Joi.string().allow(""),
      cn_status: Joi.string().allow(""),
      customer_mobile_number: Joi.string().allow(""),
      redemption_details: Joi.array().items(FinanceModel.RedemptionDetails()),
      remaining_cn_amount: Joi.number(),
    });
  }
  static CreditNoteDetailsRequest() {
    return Joi.object({
      data: FinanceModel.CnReferenceNumber(),
    });
  }
  static CreditNoteDetailsResponse() {
    return Joi.object({
      data: FinanceModel.CreditNoteDetails(),
      success: Joi.boolean(),
    });
  }
  static DeleteConfig() {
    return Joi.object({
      affiliate_id: Joi.string().allow(""),
      seller_id: Joi.number(),
      slug_values: Joi.array().items(Joi.string().allow("")),
    });
  }
  static DeleteConfigRequest() {
    return Joi.object({
      data: FinanceModel.DeleteConfig(),
    });
  }
  static DeleteConfigResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }
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
  static DownloadReportCustomerCnRequest() {
    return Joi.object({
      data: FinanceModel.CnDownloadReport(),
    });
  }
  static DownloadReportCustomerCnResponse() {
    return Joi.object({
      data: Joi.array().items(FinanceModel.DownloadReportResponseData()),
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
  static Error() {
    return Joi.object({
      reason: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }
  static GenerateReportCustomerCnRequest() {
    return Joi.object({
      data: FinanceModel.CnGenerateReport(),
    });
  }
  static GenerateReportCustomerCnResponse() {
    return Joi.object({
      data: FinanceModel.GenerateReportCustomerCnResponseData(),
    });
  }
  static GenerateReportCustomerCnResponseData() {
    return Joi.object({
      allowed_filters: Joi.array().items(Joi.string().allow("")),
      end_date: Joi.string().allow(""),
      headers: Joi.array().items(Joi.string().allow("")),
      item_count: Joi.number(),
      items: Joi.array().items(FinanceModel.CnGenerateReportItems()),
      page: FinanceModel.Page(),
      primary_headers: Joi.array().items(Joi.string().allow("")),
      row_header_display_order: Joi.any(),
      start_date: Joi.string().allow(""),
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
  static GetCnConfigRequest() {
    return Joi.object({
      data: FinanceModel.DeleteConfig(),
    });
  }
  static GetCnConfigResponse() {
    return Joi.object({
      data: FinanceModel.GetCnConfigResponseData(),
      success: Joi.boolean(),
    });
  }
  static GetCnConfigResponseData() {
    return Joi.object({
      affiliate_id: Joi.string().allow(""),
      currency_type: Joi.string().allow(""),
      is_cn_as_refund_method: Joi.boolean(),
      meta: FinanceModel.GetCnConfigResponseMeta(),
      notification_events: FinanceModel.CreditNoteConfigNotificationEvents(),
      redemption_ordering_channel: Joi.array().items(Joi.string().allow("")),
      seller_id: Joi.number(),
      validity: Joi.number(),
    });
  }
  static GetCnConfigResponseMeta() {
    return Joi.object({
      reason: Joi.string().allow(""),
      source_channel: Joi.array().items(Joi.string().allow("")),
    });
  }
  static GetCustomerCreditBalance() {
    return Joi.object({
      affiliate_id: Joi.string().allow(""),
      customer_mobile_number: Joi.string().allow(""),
      seller_id: Joi.number(),
    });
  }
  static GetCustomerCreditBalanceRequest() {
    return Joi.object({
      data: FinanceModel.GetCustomerCreditBalance(),
    });
  }
  static GetCustomerCreditBalanceResponse() {
    return Joi.object({
      data: FinanceModel.GetCustomerCreditBalanceResponseData(),
      success: Joi.boolean(),
    });
  }
  static GetCustomerCreditBalanceResponseData() {
    return Joi.object({
      customer_mobile_number: Joi.string().allow(""),
      total_credited_balance: Joi.number(),
    });
  }
  static GetEngineData() {
    return Joi.object({
      filters: Joi.any(),
      project: Joi.array().items(Joi.string().allow("")),
      table_name: Joi.string().allow(""),
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
  static GetPdfUrlViewRequest() {
    return Joi.object({
      data: FinanceModel.CnReferenceNumber(),
    });
  }
  static GetPdfUrlViewResponse() {
    return Joi.object({
      data: FinanceModel.GetPdfUrlViewResponseData(),
      success: Joi.boolean(),
    });
  }
  static GetPdfUrlViewResponseData() {
    return Joi.object({
      cn_reference_number: Joi.string().allow(""),
      s3_pdf_link: Joi.string().allow(""),
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
      item_count: Joi.number(),
      item_list: Joi.array().items(FinanceModel.ReasonItem()),
      page: FinanceModel.Page(),
      success: Joi.boolean(),
    });
  }
  static GetReportingFilters() {
    return Joi.object({
      options: Joi.array().items(Joi.any()),
      text: Joi.string().allow(""),
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }
  static GetReportingFiltersResponse() {
    return Joi.object({
      filters: Joi.array().items(FinanceModel.GetReportingNestedFilters()),
      search: FinanceModel.GetReportingFilters(),
      status: FinanceModel.GetReportingFilters(),
    });
  }
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
  static GetReportListResponse() {
    return Joi.object({
      items: Joi.array().items(FinanceModel.ReportItem()),
      page: FinanceModel.Page(),
      success: Joi.boolean(),
      total_count: Joi.number(),
    });
  }
  static InoviceListingPayloadDataFilters() {
    return Joi.object({
      company_id: Joi.array().items(Joi.string().allow("")),
      invoice_type: Joi.array().items(Joi.string().allow("")),
      payment_status: Joi.array().items(Joi.string().allow("")),
    });
  }
  static InvoiceListingPayloadData() {
    return Joi.object({
      end_date: Joi.string().allow(""),
      filters: FinanceModel.InoviceListingPayloadDataFilters(),
      page: Joi.number(),
      page_size: Joi.number(),
      search: Joi.string().allow(""),
      start_date: Joi.string().allow(""),
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
      items: Joi.array().items(FinanceModel.InvoiceListingResponseItems()),
      page: FinanceModel.Page(),
      unpaid_invoice_data: FinanceModel.UnpaidInvoiceDataItems(),
    });
  }
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
  static InvoiceTypePayloadData() {
    return Joi.object({
      is_active: Joi.boolean(),
    });
  }
  static InvoiceTypeRequest() {
    return Joi.object({
      data: FinanceModel.InvoiceTypePayloadData(),
    });
  }
  static InvoiceTypeResponse() {
    return Joi.object({
      invoice_type_list: Joi.array().items(
        FinanceModel.InvoiceTypeResponseItems()
      ),
      payment_status_list: Joi.array().items(
        FinanceModel.InvoiceTypeResponseItems()
      ),
      success: Joi.boolean(),
    });
  }
  static InvoiceTypeResponseItems() {
    return Joi.object({
      text: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }
  static IsCnRefundMethodData() {
    return Joi.object({
      affiliate_id: Joi.string().allow(""),
      seller_id: Joi.number(),
      toggle_edit_required: Joi.boolean(),
    });
  }
  static IsCnRefundMethodRequest() {
    return Joi.object({
      data: FinanceModel.IsCnRefundMethodData(),
    });
  }
  static IsCnRefundMethodResponse() {
    return Joi.object({
      data: FinanceModel.IsCnRefundMethodResponseData(),
      success: Joi.boolean(),
    });
  }
  static IsCnRefundMethodResponseData() {
    return Joi.object({
      is_first_time_user: Joi.boolean(),
    });
  }
  static IsCreditlinePayload() {
    return Joi.object({
      seller_id: Joi.string().allow(""),
    });
  }
  static IsCreditlinePlatformRequest() {
    return Joi.object({
      data: FinanceModel.IsCreditlinePayload(),
    });
  }
  static IsCreditlinePlatformResponse() {
    return Joi.object({
      code: Joi.number(),
      is_creditline_opted: Joi.boolean(),
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
  static ReasonItem() {
    return Joi.object({
      display_name: Joi.string().allow(""),
      id: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }
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
  static UnpaidInvoiceDataItems() {
    return Joi.object({
      currency: Joi.string().allow(""),
      total_unpaid_amount: Joi.number(),
      total_unpaid_invoice_count: Joi.number(),
    });
  }
}
module.exports = FinanceModel;
