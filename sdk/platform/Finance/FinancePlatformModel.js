const Joi = require("joi");

/**
 * @typedef OrederFreezeResponse
 * @property {boolean} [success] - Indicates whether the operation was successful or not.
 * @property {boolean} [oms_freeze] - Flag indicating if the system is frozen
 *   for order management.
 * @property {string} [source] - Optional field indicating the data source of
 *   the information.
 */

/**
 * @typedef GenerateReportMeta
 * @property {string} [brand] - The brand name associated with the report meta
 *   information.
 * @property {string} [company] - The company name associated with the report
 *   meta information.
 * @property {string} [channel] - The sale channel name associated with seller.
 */

/**
 * @typedef GenerateReportFilters
 * @property {string[]} [brand] - An array of brand names to filter the report data.
 * @property {string[]} [company] - An array of company id to filter the report data.
 * @property {string[]} [channel] - An array of sale channel names associated
 *   with seller to filter the report data.
 */

/**
 * @typedef GenerateReportPlatform
 * @property {string} [start_date] - The start date to generate report specific preiod.
 * @property {string} [end_date] - The end date to generate report specific preiod.
 * @property {GenerateReportMeta} [meta]
 * @property {string} [report_id] - The unique identifier of the generate report
 *   where different report configure.
 * @property {GenerateReportFilters} [filters]
 */

/**
 * @typedef GenerateReportReq
 * @property {GenerateReportPlatform} [data]
 */

/**
 * @typedef Page
 * @property {number} [item_total] - The total number of items on the page.
 * @property {string} [next_id] - The identifier for the next page.
 * @property {boolean} [has_previous] - Indicates whether there is a previous page.
 * @property {boolean} [has_next] - Indicates whether there is a next page.
 * @property {number} [current] - The current page number.
 * @property {string} type - The type of the page, such as 'PageType'.
 * @property {number} [size] - The number of items per page.
 */

/**
 * @typedef Currency
 * @property {string} [code] - The unique currency code.
 * @property {string} [symbol] - The unique currency symbol.
 * @property {string} [name] - The unique currency name.
 */

/**
 * @typedef GenerateReportJson
 * @property {Object} [data]
 * @property {number} [item_count] - Total number of items in the report.
 * @property {Page} [page]
 * @property {string} [end_date] - The end date to generate report specific preiod.
 * @property {string} [start_date] - The start date to generate report specific preiod.
 * @property {string[][]} [items] - Nested array structure representing report
 *   items or data.
 * @property {string[]} [headers] - Headers describing each item in the report data.
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
 * @property {number} [page] - The current page number of the report.
 * @property {number} [page_size] - The number of items displayed per page.
 * @property {string} [start_date] - The start date for fetching the report
 *   history for download.
 * @property {string} [end_date] - The end date for fetching the report history
 *   for download.
 */

/**
 * @typedef DownloadReportItems
 * @property {string} [start_date] - The start date for the report item.
 * @property {string} [end_date] - The end date for the report item.
 * @property {GenerateReportMeta} [meta]
 * @property {string} [report_id] - The unique identifier of the report item.
 * @property {GenerateReportFilters} [filters]
 */

/**
 * @typedef DownloadReportList
 * @property {DownloadReportItems[]} [items] - A list of report items available
 *   for download.
 * @property {Page} [page]
 * @property {number} [item_count] - The total number of items in the report list.
 */

/**
 * @typedef GetEngineFilters
 * @property {string} [config_field] - The configuration field used for filtering.
 * @property {string} [status] - The status used for filtering.
 * @property {boolean} [is_active] - Flag indicating if the filter is active.
 * @property {string} [seller_id] - The seller ID used for filtering.
 */

/**
 * @typedef GetEngineData
 * @property {string} [status] - Status of the request.
 * @property {GetEngineFilters} [filters]
 * @property {string[]} [project] - A list of fields to get data from tables.
 * @property {string} [table_name] - The name of the table from which to retrieve data.
 * @property {Object} [search] - Search criteria for querying on given table
 *   specific fields.
 * @property {number} [page] - The current page number for pagination.
 * @property {number} [page_size] - The number of items displayed per page.
 * @property {string} [order_by] - The field by which to order the results.
 */

/**
 * @typedef GetEngineReq
 * @property {GetEngineData} [data]
 */

/**
 * @typedef GetEngineResponse
 * @property {boolean} [success] - Indicates whether the request was successful.
 * @property {Object[]} [items] - A list of items returned by the request.
 * @property {Page} [page]
 * @property {number} [item_count] - The total number of items returned by the request.
 */

/**
 * @typedef GetReason
 * @property {string} [reason_type] - The type of reason associated with the request.
 */

/**
 * @typedef GetReasonReq
 * @property {GetReason} [data]
 */

/**
 * @typedef ReasonItem
 * @property {string} [id] - Id of the reason for reason_type.
 * @property {string} [name] - Code of the reason for reason_type.
 * @property {string} [display_name] - Display name of the reason for reason_type.
 */

/**
 * @typedef GetReasonResponse
 * @property {boolean} [success] - Indicates whether the request was successfull.
 * @property {ReasonItem[]} [item_list] - The list of items returned in the response.
 * @property {number} [item_count] - The number of items in the response.
 * @property {Page} [page]
 */

/**
 * @typedef GetReportListData
 * @property {string} [role_name] - The name of the role requesting the report list.
 * @property {boolean} [listing_enabled] - Indicates whether listing is enabled
 *   for the role.
 */

/**
 * @typedef GetReportListReq
 * @property {GetReportListData} [data]
 */

/**
 * @typedef GetReportListResponse
 * @property {boolean} [success] - Indicates whether the request was successful.
 * @property {ReportItem[]} [items] - The list of report items.
 * @property {Page} [page]
 * @property {number} [total_count] - The total number of items in the report list.
 */

/**
 * @typedef ReportItem
 * @property {string} [id] - The unique identifier for the report item.
 * @property {string} [name] - The name of the report item.
 * @property {string} [description] - A brief description of the report item.
 * @property {string[]} [allowed_filters] - The filters that can be applied to
 *   the report item.
 * @property {Object} [config_meta] - Metadata related to the report item configuration.
 * @property {string} [report_type] - The type of the report item.
 * @property {string} [display_date] - The display date of the report item, if applicable.
 */

/**
 * @typedef GetAffiliate
 * @property {number} [company_id] - The unique identifier of the company
 *   associated with the affiliate.
 */

/**
 * @typedef GetAffiliateResponse
 * @property {string} [reason] - The reason for the response, if applicable.
 * @property {boolean} [success] - Indicates whether the request was successful.
 * @property {Object[]} [docs] - List of items or data related to the affiliate.
 */

/**
 * @typedef DownloadCreditDebitNote
 * @property {string[]} [note_id] - List of unique identifiers for the
 *   credit/debit notes to be download.
 */

/**
 * @typedef DownloadCreditDebitNoteReq
 * @property {DownloadCreditDebitNote} [data]
 */

/**
 * @typedef DownloadCreditDebitNoteResponseData
 * @property {string} [id] - The unique identifier of the download credit/debit note.
 * @property {string} [pdf_s3_url] - The URL where the PDF of the credit/debit
 *   note is stored.
 */

/**
 * @typedef DownloadCreditDebitNoteResponse
 * @property {boolean} [success] - Indicates whether the request to download the
 *   credit/debit notes was successful.
 * @property {DownloadCreditDebitNoteResponseData[]} [data] - List of
 *   credit/debit notes download data.
 */

/**
 * @typedef InvoiceBillingItem
 * @property {string} [invoice_number] - The number of the invoice associated
 *   with the billing item.
 * @property {number} [amount] - The amount of the billing item.
 */

/**
 * @typedef PaymentProcessPayload
 * @property {string} [platform] - The platform through which the payment is processed.
 * @property {number} [amount] - The total amount to be processed in the payment.
 * @property {string} [transaction_type] - The type of transaction (e.g., seller_online).
 * @property {string} [source_reference] - The reference for the source of the payment.
 * @property {number} [total_amount] - The total amount to be processed in the payment.
 * @property {Object} [meta] - Additional metadata related to the payment.
 * @property {string} [currency] - The currency in which the payment is made.
 * @property {string} [seller_id] - The unique identifier for the seller
 *   receiving the payment.
 * @property {string} [mode_of_payment] - The mode of payment (e.g., online).
 * @property {InvoiceBillingItem[]} [invoice_billing_items]
 */

/**
 * @typedef PaymentProcessReq
 * @property {PaymentProcessPayload} [data]
 */

/**
 * @typedef PaymentProcessResponse
 * @property {number} [code] - Response code indicating the status of the payment process.
 * @property {string} [message] - A message providing additional information
 *   about the payment process response.
 * @property {Object} [meta] - Additional metadata related to the payment
 *   process response.
 * @property {string} [transaction_id] - The unique identifier for the payment
 *   transaction.
 * @property {string} [redirect_url] - URL to redirect the user to complete the
 *   payment process, if applicable.
 */

/**
 * @typedef CreditlineDataPlatformPayload
 * @property {number} [page] - The page number for pagination.
 * @property {string} [seller_id] - The unique identifier for the seller.
 * @property {string} [end_date] - The end date for the query.
 * @property {string} [start_date] - The start date for the query.
 * @property {number} [page_size] - The number of items per page.
 */

/**
 * @typedef CreditlineDataPlatformReq
 * @property {CreditlineDataPlatformPayload} [data]
 */

/**
 * @typedef CreditlineDataPlatformResponse
 * @property {Object[]} [items] - The list of items in the response.
 * @property {number} [code] - The response status code.
 * @property {boolean} [show_mr] - A flag indicating whether to show MR (some
 *   specific field).
 * @property {Page} [page]
 * @property {string} [message] - The response message.
 * @property {string[]} [headers] - The list of response headers.
 * @property {number} [item_count] - The total number of items.
 */

/**
 * @typedef IsCreditlinePayload
 * @property {string} [seller_id] - The unique identifier for the seller to
 *   check for credit line eligibility.
 */

/**
 * @typedef IsCreditlinePlatformReq
 * @property {IsCreditlinePayload} [data]
 */

/**
 * @typedef IsCreditlinePlatformResponse
 * @property {boolean} [is_creditline_opted] - Indicates whether the seller has
 *   opted for a credit line.
 * @property {number} [code] - Response code indicating the status of the credit
 *   line check.
 */

/**
 * @typedef InvoiceTypePayloadData
 * @property {boolean} [is_active] - Indicates if the invoice type is active.
 */

/**
 * @typedef InvoiceTypeReq
 * @property {InvoiceTypePayloadData} [data]
 */

/**
 * @typedef InvoiceTypeResponseItems
 * @property {string} [text] - The text description of the invoice type.
 * @property {string} [value] - The value or code representing the invoice type.
 */

/**
 * @typedef InvoiceTypeResponse
 * @property {boolean} [success] - Indicates whether the request was successful.
 * @property {InvoiceTypeResponseItems[]} [invoice_type_list] - List of invoice
 *   types available.
 * @property {InvoiceTypeResponseItems[]} [payment_status_list] - List of
 *   payment statuses available.
 */

/**
 * @typedef InoviceListingPayloadDataFilters
 * @property {string[]} [payment_status] - List of payment statuses to filter by.
 * @property {string[]} [invoice_type] - List of invoice types to filter by.
 * @property {string[]} [company_id] - List of company IDs to filter by.
 */

/**
 * @typedef InvoiceListingPayloadData
 * @property {number} [page_size] - The number of items per page for pagination.
 * @property {number} [page] - The page number for pagination.
 * @property {string} [start_date] - The start date for the invoice listing filter.
 * @property {string} [end_date] - The end date for the invoice listing filter.
 * @property {string} [search] - Search term for filtering invoices.
 * @property {InoviceListingPayloadDataFilters} [filters]
 */

/**
 * @typedef InvoiceListingReq
 * @property {InvoiceListingPayloadData} [data]
 */

/**
 * @typedef UnpaidInvoiceDataItems
 * @property {number} [total_unpaid_invoice_count] - The total count of unpaid invoices.
 * @property {string} [currency] - The currency used for unpaid invoices.
 * @property {number} [total_unpaid_amount] - The total amount of unpaid invoices.
 */

/**
 * @typedef InvoiceListingResponseItems
 * @property {number} [amount] - The amount of the invoice.
 * @property {string} [company] - The name of the company associated with the invoice.
 * @property {string} [status] - The current status of the invoice (e.g.,
 *   'paid', 'unpaid').
 * @property {string} [due_date] - The due date of the invoice.
 * @property {string} [invoice_date] - The date when the invoice was issued.
 * @property {string} [invoice_type] - The type of invoice.
 * @property {string} [period] - The period covered by the invoice.
 * @property {string} [invoice_number] - The invoice number.
 * @property {boolean} [is_downloadable] - Indicates if the invoice is available
 *   for download.
 * @property {string} [invoice_id] - The unique identifier of the invoice.
 * @property {Currency} [currency]
 */

/**
 * @typedef InvoiceListingResponse
 * @property {boolean} [success] - Indicates whether the request was successful.
 * @property {string[]} [headers] - Headers related to the invoice listing response.
 * @property {UnpaidInvoiceDataItems} [unpaid_invoice_data]
 * @property {InvoiceListingResponseItems[]} [items] - List of invoice items in
 *   the response.
 * @property {Page} [page]
 * @property {number} [item_count] - The total number of invoice items in the response.
 */

/**
 * @typedef InvoicePdfPayloadData
 * @property {string[]} [invoice_number] - List of invoice numbers for which
 *   PDFs are requested.
 */

/**
 * @typedef InvoicePdfReq
 * @property {InvoicePdfPayloadData} [data]
 */

/**
 * @typedef InvoicePdfResponse
 * @property {boolean} [success] - Indicates whether the PDF generation request
 *   was successful.
 * @property {string[]} [data] - List of URLs or paths to the generated PDF files.
 * @property {string[]} [error] - List of errors encountered while generating the PDFs.
 */

/**
 * @typedef IsCnRefundMethodData
 * @property {string} [affiliate_id] - The unique identifier of sale channels or
 *   application as affiliate_id associated with the seller.
 * @property {boolean} [toggle_edit_required] - Indicates whether editing the
 *   refund method is required.
 * @property {number} [seller_id] - Unique identifier for the seller.
 */

/**
 * @typedef IsCnRefundMethodReq
 * @property {IsCnRefundMethodData} [data]
 */

/**
 * @typedef IsCnRefundMethodResponseData
 * @property {boolean} [is_first_time_user] - Indicates whether the seller for
 *   specific sale channel is using the refund method for the first time.
 */

/**
 * @typedef IsCnRefundMethodResponse
 * @property {boolean} [success] - Indicates whether the request to determine
 *   the refund method was successful.
 * @property {IsCnRefundMethodResponseData} [data]
 */

/**
 * @typedef CreditNoteConfigNotificationEvents
 * @property {number} [expiration_reminder_to_customer] - Number of days before
 *   the expiration date to send a reminder notification to the customer.
 */

/**
 * @typedef CreateSellerCreditNoteConfig
 * @property {boolean} [is_cn_as_refund_method] - Indicates if the credit note
 *   is used as a refund method.
 * @property {string} [affiliate_id] - The unique identifier of sale channels or
 *   application as affiliate_id associated with the seller.
 * @property {string[]} [source_channel] - List of source channels associated
 *   with the credit note configuration.
 * @property {number} [seller_id] - Unique identifier for the seller.
 * @property {CreditNoteConfigNotificationEvents} [notification_events]
 * @property {string} [sales_channel_name] - Name of the sales channel.
 * @property {string[]} [ordering_channel] - List of ordering channels
 *   associated with the credit note configuration.
 * @property {number} [validity] - Validity period of the credit note in days.
 * @property {string} [currency_type] - Type of currency used for the credit note.
 * @property {string[]} [slug_values] - List of slug values associated with the
 *   credit note configuration.
 */

/**
 * @typedef CreateSellerCreditNoteConfigReq
 * @property {CreateSellerCreditNoteConfig} [data]
 */

/**
 * @typedef CreateSellerCreditNoteConfigResponse
 * @property {boolean} [success] - Indicates if the credit note configuration
 *   creation was successful.
 * @property {string} [message] - Additional information or message about the
 *   credit note configuration creation process.
 */

/**
 * @typedef DeleteConfig
 * @property {string} [affiliate_id] - The unique identifier of sale channels or
 *   application as affiliate_id associated with the seller.
 * @property {string[]} [slug_values] - List of slug values associated with the
 *   credit note configuration.
 * @property {number} [seller_id] - Unique identifier for the seller.
 */

/**
 * @typedef DeleteConfigReq
 * @property {DeleteConfig} [data]
 */

/**
 * @typedef DeleteConfigResponse
 * @property {boolean} [success] - Indicates if the configuration deletion was successful.
 * @property {string} [message] - Additional information or message about the
 *   configuration deletion process.
 */

/**
 * @typedef ChannelDisplayNameItems
 * @property {string} [key] - The unique key identifying the channel.
 * @property {string} [value] - The display name of the channel associated with the key.
 */

/**
 * @typedef ChannelDisplayNameResponse
 * @property {boolean} [success] - Indicates if the retrieval of channel display
 *   names was successful.
 * @property {ChannelDisplayNameItems[]} [items] - List of items containing
 *   key-value pairs for channel display names.
 */

/**
 * @typedef CnReferenceNumber
 * @property {string} [cn_reference_number] - The unique reference number of the
 *   credit note.
 */

/**
 * @typedef GetPdfUrlViewReq
 * @property {CnReferenceNumber} [data]
 */

/**
 * @typedef GetPdfUrlViewResponseData
 * @property {string} [s3_pdf_link] - The URL link where credit nore pdf stored
 *   to view and download.
 * @property {string} [cn_reference_number] - The unique reference number of the
 *   credit note.
 */

/**
 * @typedef GetPdfUrlViewResponse
 * @property {boolean} [success] - Indicates if the retrieval of the pdf URL was
 *   successful.
 * @property {GetPdfUrlViewResponseData} [data]
 */

/**
 * @typedef CreditNoteDetailsReq
 * @property {CnReferenceNumber} [data]
 */

/**
 * @typedef CnDetails
 * @property {string} [staff_id] - ID of the staff member associated with the credit note.
 * @property {string} [expiry_date] - Expiry date of the credit note.
 * @property {string} [channel_of_issuance] - Channel through which the credit
 *   note was issued.
 * @property {string} [order_id] - Order ID of order for which credit note created.
 * @property {string} [date_issued] - Date when the credit note was issued.
 * @property {string} [ordering_channel] - Ordering channel associated with the
 *   credit note.
 * @property {string} [shipment_id] - Shipment Id associated with the credit note.
 * @property {string} [store_id] - Store Id associated with the credit note.
 * @property {string} [invoice_number] - Invoice number associated with the credit note.
 */

/**
 * @typedef RedemptionDetails
 * @property {Object} [meta] - Additional metadata related to the redemption details.
 * @property {string} [staff_id] - ID of the staff member who processed the redemption.
 * @property {string} [created_at] - Date and time when the redemption was processed.
 * @property {string} [order_id] - Order Id of the order associated with the redemption.
 * @property {string} [store_id] - Store Id of the order associated with the redemption.
 * @property {string} [shipment_id] - Shipment Id of the order associated with
 *   the redemption.
 * @property {string} [ordering_channel] - Ordering channel associated with the
 *   redemption.
 * @property {number} [amount_debited] - Amount debited from the credit note
 *   during redemption.
 * @property {string} [invoice_number] - Invoice number associated with the redemption.
 */

/**
 * @typedef CreditNoteDetails
 * @property {string} [currency] - Currency in which the credit note is issued.
 * @property {number} [current_amount_used] - Current amount used from the credit note.
 * @property {string} [cn_status] - Status of the credit note.
 * @property {string} [customer_mobile_number] - Mobile number of the customer
 *   associated with the credit note.
 * @property {string} [cn_reference_number] - Unique Credit number of the credit note.
 * @property {CnDetails} [cn_details]
 * @property {RedemptionDetails[]} [redemption_details] - List of redemption
 *   details associated with the credit note.
 * @property {number} [remaining_cn_amount] - Remaining amount left in the credit note.
 * @property {number} [available_cn_balance] - Available balance in the credit note.
 * @property {number} [cn_amount] - Total amount of the credit note.
 */

/**
 * @typedef CreditNoteDetailsResponse
 * @property {boolean} [success] - Indicates if the retrieval of credit note
 *   details was successful.
 * @property {CreditNoteDetails} [data]
 */

/**
 * @typedef GetCustomerCreditBalance
 * @property {string} [affiliate_id] - The unique identifier of sale channels or
 *   application as affiliate_id associated with the seller.
 * @property {number} [seller_id] - Unique identifier for the seller.
 * @property {string} [customer_mobile_number] - Mobile number of the customer
 *   for whom the credit balance is requested.
 */

/**
 * @typedef GetCustomerCreditBalanceReq
 * @property {GetCustomerCreditBalance} [data]
 */

/**
 * @typedef GetCustomerCreditBalanceResponseData
 * @property {string} [customer_mobile_number] - Mobile number of the customer.
 * @property {number} [total_credited_balance] - Total credited balance
 *   available for the customer.
 */

/**
 * @typedef GetCustomerCreditBalanceResponse
 * @property {boolean} [success] - Indicates if the retrieval of customer credit
 *   balance was successful.
 * @property {GetCustomerCreditBalanceResponseData} [data]
 */

/**
 * @typedef GetCnConfigReq
 * @property {DeleteConfig} [data]
 */

/**
 * @typedef GetCnConfigResponseMeta
 * @property {string} [reason] - Reason associated with the configuration response.
 * @property {string[]} [source_channel] - List of source channels associated
 *   with the credit note configuration.
 */

/**
 * @typedef GetCnConfigResponseData
 * @property {boolean} [is_cn_as_refund_method] - Indicates if the credit note
 *   is configured as a refund method.
 * @property {string} [affiliate_id] - The unique identifier of sale channels or
 *   application as affiliate_id associated with the seller.
 * @property {Object} [meta]
 * @property {number} [seller_id] - Unique identifier for the seller.
 * @property {CreditNoteConfigNotificationEvents} [notification_events]
 * @property {number} [validity] - Validity period of the credit note
 *   configuration in days.
 * @property {string[]} [redemption_ordering_channel] - List of ordering
 *   channels associated with credit note redemption.
 * @property {string} [currency_type] - Type of currency used for the credit note.
 */

/**
 * @typedef GetCnConfigResponse
 * @property {boolean} [success] - Indicates if the retrieval of credit note
 *   configuration was successful.
 * @property {GetCnConfigResponseData} [data]
 */

/**
 * @typedef CnGenerateReportFilters
 * @property {string[]} [staff_id] - Array of staff IDs for filtering credit note reports.
 * @property {string[]} [channel_of_issuance] - Array of channels through which
 *   credit notes were issued.
 * @property {string[]} [utilisation] - Array of utilisation types for filtering
 *   credit note reports.
 * @property {string[]} [ordering_channel] - Array of ordering channels
 *   associated with credit note reports.
 * @property {number[]} [store_id] - Array of store IDs for filtering credit note reports.
 * @property {string[]} [type_of_transaction] - Array of transaction types for
 *   filtering credit note reports.
 * @property {string[]} [issuance_channel] - Array of issuance channels for
 *   filtering credit note reports.
 */

/**
 * @typedef CnGenerateReport
 * @property {number} [page] - Page number of the credit note report.
 * @property {string} [end_date] - End date for filtering credit note data.
 * @property {number} [page_size] - Number of items per page in the credit note report.
 * @property {CnGenerateReportFilters} [filters]
 * @property {string} [affiliate_id] - The unique identifier of sale channels or
 *   application as affiliate_id associated with the seller.
 * @property {GenerateReportFilters} [meta]
 * @property {string} [search] - Search query to filter credit note data by keyword.
 * @property {string} [report_id] - Unique identifier for the credit note report.
 * @property {string} [search_type] - Type of search criteria used for filtering
 *   credit note data.
 * @property {string} [start_date] - Start date for filtering credit note data.
 */

/**
 * @typedef GenerateReportCustomerCnReq
 * @property {CnGenerateReport} [data]
 */

/**
 * @typedef CnGenerateReportItems
 * @property {string} [expiry_date] - Expiry date of the credit note item.
 * @property {string} [status] - Status of the credit note item.
 * @property {number} [total_amount] - Total amount of the credit note item.
 * @property {string} [order_id] - Order ID of the order associated with the
 *   credit note item.
 * @property {string} [date_issued] - Date when the credit note item was issued.
 * @property {string} [shipment_id] - Shipment ID of the order associated with
 *   the credit note item.
 * @property {string} [invoice_number] - Invoice number associated with the
 *   credit note item.
 * @property {string} [credit_note_number] - Unique number of the credit note item.
 */

/**
 * @typedef GenerateReportCustomerCnResponseData
 * @property {boolean} [success] - Indicates if the credit note report
 *   generation was successful.
 * @property {string} [message] - Additional message or information related to
 *   the credit note report.
 * @property {CnGenerateReportItems[]} [items] - List of credit note items in the report.
 * @property {Object} [row_header_display_order] - Display order for row headers
 *   in the report.
 * @property {string} [end_date] - End date used in the credit note report.
 * @property {Page} [page]
 * @property {string[]} [headers] - Headers included in the credit note report.
 * @property {string[]} [primary_headers] - Primary headers used in the credit
 *   note report.
 * @property {string[]} [allowed_filters] - Allowed filters for the credit note report.
 * @property {string} [start_date] - Start date used in the credit note report.
 * @property {number} [item_count] - Total count of credit note items in the report.
 */

/**
 * @typedef GenerateReportCustomerCnResponse
 * @property {GenerateReportCustomerCnResponseData} [data]
 */

/**
 * @typedef CnDownloadReport
 * @property {number} [page] - Page number of the download report.
 * @property {string} [start_date] - Start date for filtering credit note data
 *   in the report.
 * @property {string} [end_date] - End date for filtering credit note data in the report.
 * @property {string} [affiliate_id] - The unique identifier of sale channels or
 *   application as affiliate_id associated with the seller.
 * @property {string} [search] - Search query to filter credit note data by keyword.
 * @property {string} [status] - Status of the credit note data in the report.
 * @property {string} [search_type] - Type of search criteria used for filtering
 *   credit note data.
 * @property {number} [page_size] - Number of items per page in the download report.
 */

/**
 * @typedef DownloadReportCustomerCnReq
 * @property {CnDownloadReport} [data]
 */

/**
 * @typedef DownloadReportResponseData
 * @property {string} [report_config_id] - Unique identifier for the report configuration.
 * @property {string} [full_name] - Full name associated with the report request.
 * @property {string} [requested_by] - User who requested the report.
 * @property {string} [start_date] - Start date used in the report.
 * @property {string} [end_date] - End date used in the report.
 * @property {Object} [request_dict] - Dictionary containing request parameters
 *   for the report.
 * @property {string} [download_link] - Download link for accessing the generated report.
 * @property {string} [created_at] - Date and time when the report was created.
 * @property {Object} [meta] - Additional metadata associated with the report.
 * @property {string} [msg] - Message related to the report status or generation.
 * @property {string} [report_name] - Name of the generated report.
 * @property {string} [status] - Status of the report.
 * @property {string} [display_name] - Display name of the report.
 * @property {Object} [filters] - Filters applied to generate the report.
 */

/**
 * @typedef DownloadReportCustomerCnResponse
 * @property {DownloadReportResponseData[]} [items] - List of download report data items.
 * @property {number} [item_count] - Total count of items in the download report.
 * @property {Page} [page]
 */

/**
 * @typedef GetReportingFilters
 * @property {string} [text] - Display text for the filter.
 * @property {string} [type] - Type of the fields like seach, filter(e.g.,
 *   single, multi select).
 * @property {Object[]} [options] - Options available for the filter.
 * @property {string} [value] - Value to be pass in response select from options.
 */

/**
 * @typedef GetReportingNestedFilters
 * @property {string} [text] - Display text for the nested filter.
 * @property {Object[]} [options] - Options available for the nested filter.
 * @property {boolean} [required] - Indicates if the nested filter is required.
 * @property {string} [placeholder_text] - Placeholder text for the nested filter.
 * @property {string} [type] - Type of the nested filter (e.g., single, multi select).
 * @property {string} [value] - Value to be pass in response select from options.
 */

/**
 * @typedef GetReportingFiltersReasonOptions
 * @property {string} [text] - Display text for the reason option.
 * @property {string} [value] - Value of the reason option.
 * @property {string} [placeholder_text] - Placeholder text for the reason option.
 */

/**
 * @typedef GetReportingFiltersReason
 * @property {string} [text] - Display text for the reason.
 * @property {string} [type] - Type of the reason.
 * @property {string} [value] - Value to be pass in response.
 * @property {GetReportingFiltersReasonOptions[]} [options] - Options available
 *   for the reasons select from options.
 */

/**
 * @typedef GetReportingFiltersResponse
 * @property {GetReportingFiltersReason} [reason]
 * @property {GetReportingFilters} [search]
 * @property {GetReportingNestedFilters[]} [filters] - Array of nested filter objects.
 * @property {GetReportingFilters} [status]
 */

/**
 * @typedef InvoicePaymentOptionsPayloadData
 * @property {string[]} [invoice_numbers] - List of invoice numbers for which
 *   payment options are being requested.
 */

/**
 * @typedef InvoicePaymentOptionsReq
 * @property {InvoicePaymentOptionsPayloadData} [data]
 */

/**
 * @typedef InvoicePaymentOptionsResponsePayableAmounts
 * @property {number} [amount] - Amount that is payable for the invoice.
 * @property {string} [amount_key] - Key associated with the payable amount for
 *   identification.
 * @property {string} [header] - Header describing the payable amount.
 */

/**
 * @typedef InvoicePaymentOptionsResponseDeductedAmounts
 * @property {number} [amount] - Amount deducted from the invoice.
 * @property {string} [header] - Header describing the deducted amount.
 * @property {string} [amount_key] - Key associated with the deducted amount for
 *   identification.
 * @property {boolean} [is_payable] - Indicates whether the deducted amount is payable.
 * @property {string} [symbol] - Currency symbol associated with the deducted amount.
 */

/**
 * @typedef InvoicePaymentOptionsResponseData
 * @property {string} [invoice_number] - Invoice number for which payment
 *   options are provided.
 * @property {string} [invoice_type] - Type of the invoice (e.g., 'Seller Fynd',
 *   'Platform Subscription').
 * @property {InvoicePaymentOptionsResponsePayableAmounts[]} [display_amounts]
 *   - List of amounts that are payable for the invoice.
 *
 * @property {Object} [total_amount] - Total amount for the invoice.
 * @property {Object} [deducted_amounts] - Amounts deducted from the total,
 *   including any associated details.
 * @property {InvoicePaymentOptionsResponsePayableAmounts[]} [payable_amounts]
 *   - Amounts that are payable for the invoice.
 *
 * @property {Currency} [currency]
 */

/**
 * @typedef InvoicePaymentOptionsResponse
 * @property {string} [reason] - Reason for the response or any errors encountered.
 * @property {InvoicePaymentOptionsResponseData[]} [data] - List of data objects
 *   containing details about invoice payment options.
 * @property {number} [total_payable_amount] - Total amount payable for the invoices.
 * @property {number} [invoice_count] - Number of invoices included in the response.
 * @property {boolean} [success] - Indicates whether the request to retrieve
 *   invoice payment options was successful.
 */

/**
 * @typedef PaymentDetail
 * @property {string} [display_name] - Name or label displayed for the payment detail.
 * @property {string} [value] - Value associated with the payment detail (e.g.,
 *   amount, transaction ID).
 */

/**
 * @typedef PaidInvoicePaymentDetail
 * @property {PaymentDetail[]} [payment_details] - List of payment details for
 *   the invoice.
 * @property {string} [date_of_payment] - Date when the payment was made.
 * @property {number} [amount] - Amount paid towards the invoice.
 */

/**
 * @typedef InvoicePaymentDetailsResponseData
 * @property {PaidInvoicePaymentDetail[]} [paid_invoice_payment_details] - List
 *   of details for paid invoices.
 * @property {Object[]} [failed_attempts_details] - Details of any failed
 *   payment attempts for the invoices.
 */

/**
 * @typedef InvoicePaymentDetailsResponse
 * @property {string} [reason] - Reason for the response or any errors encountered.
 * @property {InvoicePaymentDetailsResponseData} [data]
 * @property {boolean} [success] - Indicates whether the request to retrieve
 *   invoice payment details was successful.
 * @property {boolean} [payment_details_visible] - Indicates whether payment
 *   details are visible or hidden in the response.
 */

/**
 * @typedef InvoiceActivityLogsResponseData
 * @property {string} [performed_by] - Identifier of the user or system that
 *   performed the activity.
 * @property {string} [status] - Status of the activity (e.g., 'Completed', 'Pending').
 * @property {string} [reason] - Reason for the activity status or any related notes.
 * @property {boolean} [is_resolved] - Indicates whether the activity issue is resolved.
 * @property {number} [retry_attempts] - Number of retry attempts made for the activity.
 * @property {number} [max_retry_attempts] - Maximum number of retry attempts
 *   allowed for the activity.
 */

/**
 * @typedef InvoiceActivityLogsResponse
 * @property {InvoiceActivityLogsResponseData[]} [data] - List of activity logs
 *   related to invoices.
 */

/**
 * @typedef InvoiceActivityLogError
 * @property {string} [reason] - Reason for the error or issue encountered with
 *   the invoice activity logs.
 */

/**
 * @typedef UnlockCreditNoteRequestData
 * @property {string} [seller_id] - The unique identifier for the seller.
 * @property {string[]} [locked_credit_notes] - A list of credit notes that are locked.
 * @property {string} [unlock_reason] - The reason for unlocking the credit notes.
 * @property {string} [description] - Additional details or comments about the
 *   unlock request.
 */

/**
 * @typedef UnlockCreditNoteReq
 * @property {UnlockCreditNoteRequestData} [data]
 */

/**
 * @typedef UnlockCreditNoteResponseData
 * @property {boolean} [is_cn_unlocked] - Indicates whether the credit note is unlocked.
 * @property {string} [status] - The current status of the each credit notes.
 */

/**
 * @typedef UnlockCreditNoteResponse
 * @property {boolean} [success] - Indicates whether the credit note unlock
 *   request was successful.
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
    }).allow(null);
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

  /** @returns {GetAffiliate} */
  static GetAffiliate() {
    return Joi.object({
      company_id: Joi.number(),
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

  /** @returns {InvoiceBillingItem} */
  static InvoiceBillingItem() {
    return Joi.object({
      invoice_number: Joi.string().allow(""),
      amount: Joi.number(),
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
      invoice_billing_items: Joi.array().items(
        FinancePlatformModel.InvoiceBillingItem()
      ),
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
      invoice_numbers: Joi.array().items(Joi.string().allow("")),
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
      invoice_number: Joi.string().allow(""),
      invoice_type: Joi.string().allow(""),
      display_amounts: Joi.array().items(
        FinancePlatformModel.InvoicePaymentOptionsResponsePayableAmounts()
      ),
      total_amount: Joi.any(),
      deducted_amounts: Joi.any(),
      payable_amounts: Joi.array().items(
        FinancePlatformModel.InvoicePaymentOptionsResponsePayableAmounts()
      ),
      currency: FinancePlatformModel.Currency(),
    });
  }

  /** @returns {InvoicePaymentOptionsResponse} */
  static InvoicePaymentOptionsResponse() {
    return Joi.object({
      reason: Joi.string().allow(""),
      data: Joi.array().items(
        FinancePlatformModel.InvoicePaymentOptionsResponseData()
      ),
      total_payable_amount: Joi.number(),
      invoice_count: Joi.number(),
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
