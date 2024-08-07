export = FinancePlatformModel;
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
declare class FinancePlatformModel {
}
declare namespace FinancePlatformModel {
    export { OrederFreezeResponse, GenerateReportMeta, GenerateReportFilters, GenerateReportPlatform, GenerateReportReq, Page, Currency, GenerateReportJson, Error, ErrorMeta, ErrorMetaItems, DownloadReport, DownloadReportData, DownloadReportItems, DownloadReportList, GetEngineFilters, GetEngineData, GetEngineReq, GetEngineResponse, GetReason, GetReasonReq, ReasonItem, GetReasonResponse, GetReportListData, GetReportListReq, GetReportListResponse, ReportItem, GetAffiliate, GetAffiliateResponse, DownloadCreditDebitNote, DownloadCreditDebitNoteReq, DownloadCreditDebitNoteResponseData, DownloadCreditDebitNoteResponse, InvoiceBillingItem, PaymentProcessPayload, PaymentProcessReq, PaymentProcessResponse, CreditlineDataPlatformPayload, CreditlineDataPlatformReq, CreditlineDataPlatformResponse, IsCreditlinePayload, IsCreditlinePlatformReq, IsCreditlinePlatformResponse, InvoiceTypePayloadData, InvoiceTypeReq, InvoiceTypeResponseItems, InvoiceTypeResponse, InoviceListingPayloadDataFilters, InvoiceListingPayloadData, InvoiceListingReq, UnpaidInvoiceDataItems, InvoiceListingResponseItems, InvoiceListingResponse, InvoicePdfPayloadData, InvoicePdfReq, InvoicePdfResponse, IsCnRefundMethodData, IsCnRefundMethodReq, IsCnRefundMethodResponseData, IsCnRefundMethodResponse, CreditNoteConfigNotificationEvents, CreateSellerCreditNoteConfig, CreateSellerCreditNoteConfigReq, CreateSellerCreditNoteConfigResponse, DeleteConfig, DeleteConfigReq, DeleteConfigResponse, ChannelDisplayNameItems, ChannelDisplayNameResponse, CnReferenceNumber, GetPdfUrlViewReq, GetPdfUrlViewResponseData, GetPdfUrlViewResponse, CreditNoteDetailsReq, CnDetails, RedemptionDetails, CreditNoteDetails, CreditNoteDetailsResponse, GetCustomerCreditBalance, GetCustomerCreditBalanceReq, GetCustomerCreditBalanceResponseData, GetCustomerCreditBalanceResponse, GetCnConfigReq, GetCnConfigResponseMeta, GetCnConfigResponseData, GetCnConfigResponse, CnGenerateReportFilters, CnGenerateReport, GenerateReportCustomerCnReq, CnGenerateReportItems, GenerateReportCustomerCnResponseData, GenerateReportCustomerCnResponse, CnDownloadReport, DownloadReportCustomerCnReq, DownloadReportResponseData, DownloadReportCustomerCnResponse, GetReportingFilters, GetReportingNestedFilters, GetReportingFiltersReasonOptions, GetReportingFiltersReason, GetReportingFiltersResponse, InvoicePaymentOptionsPayloadData, InvoicePaymentOptionsReq, InvoicePaymentOptionsResponsePayableAmounts, InvoicePaymentOptionsResponseDeductedAmounts, InvoicePaymentOptionsResponseData, InvoicePaymentOptionsResponse, PaymentDetail, PaidInvoicePaymentDetail, InvoicePaymentDetailsResponseData, InvoicePaymentDetailsResponse, InvoiceActivityLogsResponseData, InvoiceActivityLogsResponse, InvoiceActivityLogError, UnlockCreditNoteRequestData, UnlockCreditNoteReq, UnlockCreditNoteResponseData, UnlockCreditNoteResponse };
}
/** @returns {OrederFreezeResponse} */
declare function OrederFreezeResponse(): OrederFreezeResponse;
type OrederFreezeResponse = {
    /**
     * - Indicates whether the operation was successful or not.
     */
    success?: boolean;
    /**
     * - Flag indicating if the system is frozen
     * for order management.
     */
    oms_freeze?: boolean;
    /**
     * - Optional field indicating the data source of
     * the information.
     */
    source?: string;
};
/** @returns {GenerateReportMeta} */
declare function GenerateReportMeta(): GenerateReportMeta;
type GenerateReportMeta = {
    /**
     * - The brand name associated with the report meta
     * information.
     */
    brand?: string;
    /**
     * - The company name associated with the report
     * meta information.
     */
    company?: string;
    /**
     * - The sale channel name associated with seller.
     */
    channel?: string;
};
/** @returns {GenerateReportFilters} */
declare function GenerateReportFilters(): GenerateReportFilters;
type GenerateReportFilters = {
    /**
     * - An array of brand names to filter the report data.
     */
    brand?: string[];
    /**
     * - An array of company id to filter the report data.
     */
    company?: string[];
    /**
     * - An array of sale channel names associated
     * with seller to filter the report data.
     */
    channel?: string[];
};
/** @returns {GenerateReportPlatform} */
declare function GenerateReportPlatform(): GenerateReportPlatform;
type GenerateReportPlatform = {
    /**
     * - The start date to generate report specific preiod.
     */
    start_date?: string;
    /**
     * - The end date to generate report specific preiod.
     */
    end_date?: string;
    meta?: GenerateReportMeta;
    /**
     * - The unique identifier of the generate report
     * where different report configure.
     */
    report_id?: string;
    filters?: GenerateReportFilters;
};
/** @returns {GenerateReportReq} */
declare function GenerateReportReq(): GenerateReportReq;
type GenerateReportReq = {
    data?: GenerateReportPlatform;
};
/** @returns {Page} */
declare function Page(): Page;
type Page = {
    /**
     * - The total number of items on the page.
     */
    item_total?: number;
    /**
     * - The identifier for the next page.
     */
    next_id?: string;
    /**
     * - Indicates whether there is a previous page.
     */
    has_previous?: boolean;
    /**
     * - Indicates whether there is a next page.
     */
    has_next?: boolean;
    /**
     * - The current page number.
     */
    current?: number;
    /**
     * - The type of the page, such as 'PageType'.
     */
    type: string;
    /**
     * - The number of items per page.
     */
    size?: number;
};
/** @returns {Currency} */
declare function Currency(): Currency;
type Currency = {
    /**
     * - The unique currency code.
     */
    code?: string;
    /**
     * - The unique currency symbol.
     */
    symbol?: string;
    /**
     * - The unique currency name.
     */
    name?: string;
};
/** @returns {GenerateReportJson} */
declare function GenerateReportJson(): GenerateReportJson;
type GenerateReportJson = {
    data?: any;
    /**
     * - Total number of items in the report.
     */
    item_count?: number;
    page?: Page;
    /**
     * - The end date to generate report specific preiod.
     */
    end_date?: string;
    /**
     * - The start date to generate report specific preiod.
     */
    start_date?: string;
    /**
     * - Nested array structure representing report
     * items or data.
     */
    items?: string[][];
    /**
     * - Headers describing each item in the report data.
     */
    headers?: string[];
};
/** @returns {Error} */
declare function Error(): Error;
type Error = {
    status?: number;
    reason?: string;
    success?: boolean;
    message?: string;
    code?: string;
    exception?: string;
    info?: string;
    request_id?: string;
    stack_trace?: string;
    meta?: ErrorMeta;
};
/** @returns {ErrorMeta} */
declare function ErrorMeta(): ErrorMeta;
type ErrorMeta = {
    columns_errors?: ErrorMetaItems[];
};
/** @returns {ErrorMetaItems} */
declare function ErrorMetaItems(): ErrorMetaItems;
type ErrorMetaItems = {
    code?: number;
    message?: string;
};
/** @returns {DownloadReport} */
declare function DownloadReport(): DownloadReport;
type DownloadReport = {
    data?: DownloadReportData;
};
/** @returns {DownloadReportData} */
declare function DownloadReportData(): DownloadReportData;
type DownloadReportData = {
    /**
     * - The current page number of the report.
     */
    page?: number;
    /**
     * - The number of items displayed per page.
     */
    page_size?: number;
    /**
     * - The start date for fetching the report
     * history for download.
     */
    start_date?: string;
    /**
     * - The end date for fetching the report history
     * for download.
     */
    end_date?: string;
};
/** @returns {DownloadReportItems} */
declare function DownloadReportItems(): DownloadReportItems;
type DownloadReportItems = {
    /**
     * - The start date for the report item.
     */
    start_date?: string;
    /**
     * - The end date for the report item.
     */
    end_date?: string;
    meta?: GenerateReportMeta;
    /**
     * - The unique identifier of the report item.
     */
    report_id?: string;
    filters?: GenerateReportFilters;
};
/** @returns {DownloadReportList} */
declare function DownloadReportList(): DownloadReportList;
type DownloadReportList = {
    /**
     * - A list of report items available
     * for download.
     */
    items?: DownloadReportItems[];
    page?: Page;
    /**
     * - The total number of items in the report list.
     */
    item_count?: number;
};
/** @returns {GetEngineFilters} */
declare function GetEngineFilters(): GetEngineFilters;
type GetEngineFilters = {
    /**
     * - The configuration field used for filtering.
     */
    config_field?: string;
    /**
     * - The status used for filtering.
     */
    status?: string;
    /**
     * - Flag indicating if the filter is active.
     */
    is_active?: boolean;
    /**
     * - The seller ID used for filtering.
     */
    seller_id?: string;
};
/** @returns {GetEngineData} */
declare function GetEngineData(): GetEngineData;
type GetEngineData = {
    /**
     * - Status of the request.
     */
    status?: string;
    filters?: GetEngineFilters;
    /**
     * - A list of fields to get data from tables.
     */
    project?: string[];
    /**
     * - The name of the table from which to retrieve data.
     */
    table_name?: string;
    /**
     * - Search criteria for querying on given table
     * specific fields.
     */
    search?: any;
    /**
     * - The current page number for pagination.
     */
    page?: number;
    /**
     * - The number of items displayed per page.
     */
    page_size?: number;
    /**
     * - The field by which to order the results.
     */
    order_by?: string;
};
/** @returns {GetEngineReq} */
declare function GetEngineReq(): GetEngineReq;
type GetEngineReq = {
    data?: GetEngineData;
};
/** @returns {GetEngineResponse} */
declare function GetEngineResponse(): GetEngineResponse;
type GetEngineResponse = {
    /**
     * - Indicates whether the request was successful.
     */
    success?: boolean;
    /**
     * - A list of items returned by the request.
     */
    items?: any[];
    page?: Page;
    /**
     * - The total number of items returned by the request.
     */
    item_count?: number;
};
/** @returns {GetReason} */
declare function GetReason(): GetReason;
type GetReason = {
    /**
     * - The type of reason associated with the request.
     */
    reason_type?: string;
};
/** @returns {GetReasonReq} */
declare function GetReasonReq(): GetReasonReq;
type GetReasonReq = {
    data?: GetReason;
};
/** @returns {ReasonItem} */
declare function ReasonItem(): ReasonItem;
type ReasonItem = {
    /**
     * - Id of the reason for reason_type.
     */
    id?: string;
    /**
     * - Code of the reason for reason_type.
     */
    name?: string;
    /**
     * - Display name of the reason for reason_type.
     */
    display_name?: string;
};
/** @returns {GetReasonResponse} */
declare function GetReasonResponse(): GetReasonResponse;
type GetReasonResponse = {
    /**
     * - Indicates whether the request was successfull.
     */
    success?: boolean;
    /**
     * - The list of items returned in the response.
     */
    item_list?: ReasonItem[];
    /**
     * - The number of items in the response.
     */
    item_count?: number;
    page?: Page;
};
/** @returns {GetReportListData} */
declare function GetReportListData(): GetReportListData;
type GetReportListData = {
    /**
     * - The name of the role requesting the report list.
     */
    role_name?: string;
    /**
     * - Indicates whether listing is enabled
     * for the role.
     */
    listing_enabled?: boolean;
};
/** @returns {GetReportListReq} */
declare function GetReportListReq(): GetReportListReq;
type GetReportListReq = {
    data?: GetReportListData;
};
/** @returns {GetReportListResponse} */
declare function GetReportListResponse(): GetReportListResponse;
type GetReportListResponse = {
    /**
     * - Indicates whether the request was successful.
     */
    success?: boolean;
    /**
     * - The list of report items.
     */
    items?: ReportItem[];
    page?: Page;
    /**
     * - The total number of items in the report list.
     */
    total_count?: number;
};
/** @returns {ReportItem} */
declare function ReportItem(): ReportItem;
type ReportItem = {
    /**
     * - The unique identifier for the report item.
     */
    id?: string;
    /**
     * - The name of the report item.
     */
    name?: string;
    /**
     * - A brief description of the report item.
     */
    description?: string;
    /**
     * - The filters that can be applied to
     * the report item.
     */
    allowed_filters?: string[];
    /**
     * - Metadata related to the report item configuration.
     */
    config_meta?: any;
    /**
     * - The type of the report item.
     */
    report_type?: string;
    /**
     * - The display date of the report item, if applicable.
     */
    display_date?: string;
};
/** @returns {GetAffiliate} */
declare function GetAffiliate(): GetAffiliate;
type GetAffiliate = {
    /**
     * - The unique identifier of the company
     * associated with the affiliate.
     */
    company_id?: number;
};
/** @returns {GetAffiliateResponse} */
declare function GetAffiliateResponse(): GetAffiliateResponse;
type GetAffiliateResponse = {
    /**
     * - The reason for the response, if applicable.
     */
    reason?: string;
    /**
     * - Indicates whether the request was successful.
     */
    success?: boolean;
    /**
     * - List of items or data related to the affiliate.
     */
    docs?: any[];
};
/** @returns {DownloadCreditDebitNote} */
declare function DownloadCreditDebitNote(): DownloadCreditDebitNote;
type DownloadCreditDebitNote = {
    /**
     * - List of unique identifiers for the
     * credit/debit notes to be download.
     */
    note_id?: string[];
};
/** @returns {DownloadCreditDebitNoteReq} */
declare function DownloadCreditDebitNoteReq(): DownloadCreditDebitNoteReq;
type DownloadCreditDebitNoteReq = {
    data?: DownloadCreditDebitNote;
};
/** @returns {DownloadCreditDebitNoteResponseData} */
declare function DownloadCreditDebitNoteResponseData(): DownloadCreditDebitNoteResponseData;
type DownloadCreditDebitNoteResponseData = {
    /**
     * - The unique identifier of the download credit/debit note.
     */
    id?: string;
    /**
     * - The URL where the PDF of the credit/debit
     * note is stored.
     */
    pdf_s3_url?: string;
};
/** @returns {DownloadCreditDebitNoteResponse} */
declare function DownloadCreditDebitNoteResponse(): DownloadCreditDebitNoteResponse;
type DownloadCreditDebitNoteResponse = {
    /**
     * - Indicates whether the request to download the
     * credit/debit notes was successful.
     */
    success?: boolean;
    /**
     * - List of
     * credit/debit notes download data.
     */
    data?: DownloadCreditDebitNoteResponseData[];
};
/** @returns {InvoiceBillingItem} */
declare function InvoiceBillingItem(): InvoiceBillingItem;
type InvoiceBillingItem = {
    /**
     * - The number of the invoice associated
     * with the billing item.
     */
    invoice_number?: string;
    /**
     * - The amount of the billing item.
     */
    amount?: number;
};
/** @returns {PaymentProcessPayload} */
declare function PaymentProcessPayload(): PaymentProcessPayload;
type PaymentProcessPayload = {
    /**
     * - The platform through which the payment is processed.
     */
    platform?: string;
    /**
     * - The total amount to be processed in the payment.
     */
    amount?: number;
    /**
     * - The type of transaction (e.g., seller_online).
     */
    transaction_type?: string;
    /**
     * - The reference for the source of the payment.
     */
    source_reference?: string;
    /**
     * - The total amount to be processed in the payment.
     */
    total_amount?: number;
    /**
     * - Additional metadata related to the payment.
     */
    meta?: any;
    /**
     * - The currency in which the payment is made.
     */
    currency?: string;
    /**
     * - The unique identifier for the seller
     * receiving the payment.
     */
    seller_id?: string;
    /**
     * - The mode of payment (e.g., online).
     */
    mode_of_payment?: string;
    invoice_billing_items?: InvoiceBillingItem[];
};
/** @returns {PaymentProcessReq} */
declare function PaymentProcessReq(): PaymentProcessReq;
type PaymentProcessReq = {
    data?: PaymentProcessPayload;
};
/** @returns {PaymentProcessResponse} */
declare function PaymentProcessResponse(): PaymentProcessResponse;
type PaymentProcessResponse = {
    /**
     * - Response code indicating the status of the payment process.
     */
    code?: number;
    /**
     * - A message providing additional information
     * about the payment process response.
     */
    message?: string;
    /**
     * - Additional metadata related to the payment
     * process response.
     */
    meta?: any;
    /**
     * - The unique identifier for the payment
     * transaction.
     */
    transaction_id?: string;
    /**
     * - URL to redirect the user to complete the
     * payment process, if applicable.
     */
    redirect_url?: string;
};
/** @returns {CreditlineDataPlatformPayload} */
declare function CreditlineDataPlatformPayload(): CreditlineDataPlatformPayload;
type CreditlineDataPlatformPayload = {
    /**
     * - The page number for pagination.
     */
    page?: number;
    /**
     * - The unique identifier for the seller.
     */
    seller_id?: string;
    /**
     * - The end date for the query.
     */
    end_date?: string;
    /**
     * - The start date for the query.
     */
    start_date?: string;
    /**
     * - The number of items per page.
     */
    page_size?: number;
};
/** @returns {CreditlineDataPlatformReq} */
declare function CreditlineDataPlatformReq(): CreditlineDataPlatformReq;
type CreditlineDataPlatformReq = {
    data?: CreditlineDataPlatformPayload;
};
/** @returns {CreditlineDataPlatformResponse} */
declare function CreditlineDataPlatformResponse(): CreditlineDataPlatformResponse;
type CreditlineDataPlatformResponse = {
    /**
     * - The list of items in the response.
     */
    items?: any[];
    /**
     * - The response status code.
     */
    code?: number;
    /**
     * - A flag indicating whether to show MR (some
     * specific field).
     */
    show_mr?: boolean;
    page?: Page;
    /**
     * - The response message.
     */
    message?: string;
    /**
     * - The list of response headers.
     */
    headers?: string[];
    /**
     * - The total number of items.
     */
    item_count?: number;
};
/** @returns {IsCreditlinePayload} */
declare function IsCreditlinePayload(): IsCreditlinePayload;
type IsCreditlinePayload = {
    /**
     * - The unique identifier for the seller to
     * check for credit line eligibility.
     */
    seller_id?: string;
};
/** @returns {IsCreditlinePlatformReq} */
declare function IsCreditlinePlatformReq(): IsCreditlinePlatformReq;
type IsCreditlinePlatformReq = {
    data?: IsCreditlinePayload;
};
/** @returns {IsCreditlinePlatformResponse} */
declare function IsCreditlinePlatformResponse(): IsCreditlinePlatformResponse;
type IsCreditlinePlatformResponse = {
    /**
     * - Indicates whether the seller has
     * opted for a credit line.
     */
    is_creditline_opted?: boolean;
    /**
     * - Response code indicating the status of the credit
     * line check.
     */
    code?: number;
};
/** @returns {InvoiceTypePayloadData} */
declare function InvoiceTypePayloadData(): InvoiceTypePayloadData;
type InvoiceTypePayloadData = {
    /**
     * - Indicates if the invoice type is active.
     */
    is_active?: boolean;
};
/** @returns {InvoiceTypeReq} */
declare function InvoiceTypeReq(): InvoiceTypeReq;
type InvoiceTypeReq = {
    data?: InvoiceTypePayloadData;
};
/** @returns {InvoiceTypeResponseItems} */
declare function InvoiceTypeResponseItems(): InvoiceTypeResponseItems;
type InvoiceTypeResponseItems = {
    /**
     * - The text description of the invoice type.
     */
    text?: string;
    /**
     * - The value or code representing the invoice type.
     */
    value?: string;
};
/** @returns {InvoiceTypeResponse} */
declare function InvoiceTypeResponse(): InvoiceTypeResponse;
type InvoiceTypeResponse = {
    /**
     * - Indicates whether the request was successful.
     */
    success?: boolean;
    /**
     * - List of invoice
     * types available.
     */
    invoice_type_list?: InvoiceTypeResponseItems[];
    /**
     * - List of
     * payment statuses available.
     */
    payment_status_list?: InvoiceTypeResponseItems[];
};
/** @returns {InoviceListingPayloadDataFilters} */
declare function InoviceListingPayloadDataFilters(): InoviceListingPayloadDataFilters;
type InoviceListingPayloadDataFilters = {
    /**
     * - List of payment statuses to filter by.
     */
    payment_status?: string[];
    /**
     * - List of invoice types to filter by.
     */
    invoice_type?: string[];
    /**
     * - List of company IDs to filter by.
     */
    company_id?: string[];
};
/** @returns {InvoiceListingPayloadData} */
declare function InvoiceListingPayloadData(): InvoiceListingPayloadData;
type InvoiceListingPayloadData = {
    /**
     * - The number of items per page for pagination.
     */
    page_size?: number;
    /**
     * - The page number for pagination.
     */
    page?: number;
    /**
     * - The start date for the invoice listing filter.
     */
    start_date?: string;
    /**
     * - The end date for the invoice listing filter.
     */
    end_date?: string;
    /**
     * - Search term for filtering invoices.
     */
    search?: string;
    filters?: InoviceListingPayloadDataFilters;
};
/** @returns {InvoiceListingReq} */
declare function InvoiceListingReq(): InvoiceListingReq;
type InvoiceListingReq = {
    data?: InvoiceListingPayloadData;
};
/** @returns {UnpaidInvoiceDataItems} */
declare function UnpaidInvoiceDataItems(): UnpaidInvoiceDataItems;
type UnpaidInvoiceDataItems = {
    /**
     * - The total count of unpaid invoices.
     */
    total_unpaid_invoice_count?: number;
    /**
     * - The currency used for unpaid invoices.
     */
    currency?: string;
    /**
     * - The total amount of unpaid invoices.
     */
    total_unpaid_amount?: number;
};
/** @returns {InvoiceListingResponseItems} */
declare function InvoiceListingResponseItems(): InvoiceListingResponseItems;
type InvoiceListingResponseItems = {
    /**
     * - The amount of the invoice.
     */
    amount?: number;
    /**
     * - The name of the company associated with the invoice.
     */
    company?: string;
    /**
     * - The current status of the invoice (e.g.,
     * 'paid', 'unpaid').
     */
    status?: string;
    /**
     * - The due date of the invoice.
     */
    due_date?: string;
    /**
     * - The date when the invoice was issued.
     */
    invoice_date?: string;
    /**
     * - The type of invoice.
     */
    invoice_type?: string;
    /**
     * - The period covered by the invoice.
     */
    period?: string;
    /**
     * - The invoice number.
     */
    invoice_number?: string;
    /**
     * - Indicates if the invoice is available
     * for download.
     */
    is_downloadable?: boolean;
    /**
     * - The unique identifier of the invoice.
     */
    invoice_id?: string;
    currency?: Currency;
};
/** @returns {InvoiceListingResponse} */
declare function InvoiceListingResponse(): InvoiceListingResponse;
type InvoiceListingResponse = {
    /**
     * - Indicates whether the request was successful.
     */
    success?: boolean;
    /**
     * - Headers related to the invoice listing response.
     */
    headers?: string[];
    unpaid_invoice_data?: UnpaidInvoiceDataItems;
    /**
     * - List of invoice items in
     * the response.
     */
    items?: InvoiceListingResponseItems[];
    page?: Page;
    /**
     * - The total number of invoice items in the response.
     */
    item_count?: number;
};
/** @returns {InvoicePdfPayloadData} */
declare function InvoicePdfPayloadData(): InvoicePdfPayloadData;
type InvoicePdfPayloadData = {
    /**
     * - List of invoice numbers for which
     * PDFs are requested.
     */
    invoice_number?: string[];
};
/** @returns {InvoicePdfReq} */
declare function InvoicePdfReq(): InvoicePdfReq;
type InvoicePdfReq = {
    data?: InvoicePdfPayloadData;
};
/** @returns {InvoicePdfResponse} */
declare function InvoicePdfResponse(): InvoicePdfResponse;
type InvoicePdfResponse = {
    /**
     * - Indicates whether the PDF generation request
     * was successful.
     */
    success?: boolean;
    /**
     * - List of URLs or paths to the generated PDF files.
     */
    data?: string[];
    /**
     * - List of errors encountered while generating the PDFs.
     */
    error?: string[];
};
/** @returns {IsCnRefundMethodData} */
declare function IsCnRefundMethodData(): IsCnRefundMethodData;
type IsCnRefundMethodData = {
    /**
     * - The unique identifier of sale channels or
     * application as affiliate_id associated with the seller.
     */
    affiliate_id?: string;
    /**
     * - Indicates whether editing the
     * refund method is required.
     */
    toggle_edit_required?: boolean;
    /**
     * - Unique identifier for the seller.
     */
    seller_id?: number;
};
/** @returns {IsCnRefundMethodReq} */
declare function IsCnRefundMethodReq(): IsCnRefundMethodReq;
type IsCnRefundMethodReq = {
    data?: IsCnRefundMethodData;
};
/** @returns {IsCnRefundMethodResponseData} */
declare function IsCnRefundMethodResponseData(): IsCnRefundMethodResponseData;
type IsCnRefundMethodResponseData = {
    /**
     * - Indicates whether the seller for
     * specific sale channel is using the refund method for the first time.
     */
    is_first_time_user?: boolean;
};
/** @returns {IsCnRefundMethodResponse} */
declare function IsCnRefundMethodResponse(): IsCnRefundMethodResponse;
type IsCnRefundMethodResponse = {
    /**
     * - Indicates whether the request to determine
     * the refund method was successful.
     */
    success?: boolean;
    data?: IsCnRefundMethodResponseData;
};
/** @returns {CreditNoteConfigNotificationEvents} */
declare function CreditNoteConfigNotificationEvents(): CreditNoteConfigNotificationEvents;
type CreditNoteConfigNotificationEvents = {
    /**
     * - Number of days before
     * the expiration date to send a reminder notification to the customer.
     */
    expiration_reminder_to_customer?: number;
};
/** @returns {CreateSellerCreditNoteConfig} */
declare function CreateSellerCreditNoteConfig(): CreateSellerCreditNoteConfig;
type CreateSellerCreditNoteConfig = {
    /**
     * - Indicates if the credit note
     * is used as a refund method.
     */
    is_cn_as_refund_method?: boolean;
    /**
     * - The unique identifier of sale channels or
     * application as affiliate_id associated with the seller.
     */
    affiliate_id?: string;
    /**
     * - List of source channels associated
     * with the credit note configuration.
     */
    source_channel?: string[];
    /**
     * - Unique identifier for the seller.
     */
    seller_id?: number;
    notification_events?: CreditNoteConfigNotificationEvents;
    /**
     * - Name of the sales channel.
     */
    sales_channel_name?: string;
    /**
     * - List of ordering channels
     * associated with the credit note configuration.
     */
    ordering_channel?: string[];
    /**
     * - Validity period of the credit note in days.
     */
    validity?: number;
    /**
     * - Type of currency used for the credit note.
     */
    currency_type?: string;
    /**
     * - List of slug values associated with the
     * credit note configuration.
     */
    slug_values?: string[];
};
/** @returns {CreateSellerCreditNoteConfigReq} */
declare function CreateSellerCreditNoteConfigReq(): CreateSellerCreditNoteConfigReq;
type CreateSellerCreditNoteConfigReq = {
    data?: CreateSellerCreditNoteConfig;
};
/** @returns {CreateSellerCreditNoteConfigResponse} */
declare function CreateSellerCreditNoteConfigResponse(): CreateSellerCreditNoteConfigResponse;
type CreateSellerCreditNoteConfigResponse = {
    /**
     * - Indicates if the credit note configuration
     * creation was successful.
     */
    success?: boolean;
    /**
     * - Additional information or message about the
     * credit note configuration creation process.
     */
    message?: string;
};
/** @returns {DeleteConfig} */
declare function DeleteConfig(): DeleteConfig;
type DeleteConfig = {
    /**
     * - The unique identifier of sale channels or
     * application as affiliate_id associated with the seller.
     */
    affiliate_id?: string;
    /**
     * - List of slug values associated with the
     * credit note configuration.
     */
    slug_values?: string[];
    /**
     * - Unique identifier for the seller.
     */
    seller_id?: number;
};
/** @returns {DeleteConfigReq} */
declare function DeleteConfigReq(): DeleteConfigReq;
type DeleteConfigReq = {
    data?: DeleteConfig;
};
/** @returns {DeleteConfigResponse} */
declare function DeleteConfigResponse(): DeleteConfigResponse;
type DeleteConfigResponse = {
    /**
     * - Indicates if the configuration deletion was successful.
     */
    success?: boolean;
    /**
     * - Additional information or message about the
     * configuration deletion process.
     */
    message?: string;
};
/** @returns {ChannelDisplayNameItems} */
declare function ChannelDisplayNameItems(): ChannelDisplayNameItems;
type ChannelDisplayNameItems = {
    /**
     * - The unique key identifying the channel.
     */
    key?: string;
    /**
     * - The display name of the channel associated with the key.
     */
    value?: string;
};
/** @returns {ChannelDisplayNameResponse} */
declare function ChannelDisplayNameResponse(): ChannelDisplayNameResponse;
type ChannelDisplayNameResponse = {
    /**
     * - Indicates if the retrieval of channel display
     * names was successful.
     */
    success?: boolean;
    /**
     * - List of items containing
     * key-value pairs for channel display names.
     */
    items?: ChannelDisplayNameItems[];
};
/** @returns {CnReferenceNumber} */
declare function CnReferenceNumber(): CnReferenceNumber;
type CnReferenceNumber = {
    /**
     * - The unique reference number of the
     * credit note.
     */
    cn_reference_number?: string;
};
/** @returns {GetPdfUrlViewReq} */
declare function GetPdfUrlViewReq(): GetPdfUrlViewReq;
type GetPdfUrlViewReq = {
    data?: CnReferenceNumber;
};
/** @returns {GetPdfUrlViewResponseData} */
declare function GetPdfUrlViewResponseData(): GetPdfUrlViewResponseData;
type GetPdfUrlViewResponseData = {
    /**
     * - The URL link where credit nore pdf stored
     * to view and download.
     */
    s3_pdf_link?: string;
    /**
     * - The unique reference number of the
     * credit note.
     */
    cn_reference_number?: string;
};
/** @returns {GetPdfUrlViewResponse} */
declare function GetPdfUrlViewResponse(): GetPdfUrlViewResponse;
type GetPdfUrlViewResponse = {
    /**
     * - Indicates if the retrieval of the pdf URL was
     * successful.
     */
    success?: boolean;
    data?: GetPdfUrlViewResponseData;
};
/** @returns {CreditNoteDetailsReq} */
declare function CreditNoteDetailsReq(): CreditNoteDetailsReq;
type CreditNoteDetailsReq = {
    data?: CnReferenceNumber;
};
/** @returns {CnDetails} */
declare function CnDetails(): CnDetails;
type CnDetails = {
    /**
     * - ID of the staff member associated with the credit note.
     */
    staff_id?: string;
    /**
     * - Expiry date of the credit note.
     */
    expiry_date?: string;
    /**
     * - Channel through which the credit
     * note was issued.
     */
    channel_of_issuance?: string;
    /**
     * - Order ID of order for which credit note created.
     */
    order_id?: string;
    /**
     * - Date when the credit note was issued.
     */
    date_issued?: string;
    /**
     * - Ordering channel associated with the
     * credit note.
     */
    ordering_channel?: string;
    /**
     * - Shipment Id associated with the credit note.
     */
    shipment_id?: string;
    /**
     * - Store Id associated with the credit note.
     */
    store_id?: string;
    /**
     * - Invoice number associated with the credit note.
     */
    invoice_number?: string;
};
/** @returns {RedemptionDetails} */
declare function RedemptionDetails(): RedemptionDetails;
type RedemptionDetails = {
    /**
     * - Additional metadata related to the redemption details.
     */
    meta?: any;
    /**
     * - ID of the staff member who processed the redemption.
     */
    staff_id?: string;
    /**
     * - Date and time when the redemption was processed.
     */
    created_at?: string;
    /**
     * - Order Id of the order associated with the redemption.
     */
    order_id?: string;
    /**
     * - Store Id of the order associated with the redemption.
     */
    store_id?: string;
    /**
     * - Shipment Id of the order associated with
     * the redemption.
     */
    shipment_id?: string;
    /**
     * - Ordering channel associated with the
     * redemption.
     */
    ordering_channel?: string;
    /**
     * - Amount debited from the credit note
     * during redemption.
     */
    amount_debited?: number;
    /**
     * - Invoice number associated with the redemption.
     */
    invoice_number?: string;
};
/** @returns {CreditNoteDetails} */
declare function CreditNoteDetails(): CreditNoteDetails;
type CreditNoteDetails = {
    /**
     * - Currency in which the credit note is issued.
     */
    currency?: string;
    /**
     * - Current amount used from the credit note.
     */
    current_amount_used?: number;
    /**
     * - Status of the credit note.
     */
    cn_status?: string;
    /**
     * - Mobile number of the customer
     * associated with the credit note.
     */
    customer_mobile_number?: string;
    /**
     * - Unique Credit number of the credit note.
     */
    cn_reference_number?: string;
    cn_details?: CnDetails;
    /**
     * - List of redemption
     * details associated with the credit note.
     */
    redemption_details?: RedemptionDetails[];
    /**
     * - Remaining amount left in the credit note.
     */
    remaining_cn_amount?: number;
    /**
     * - Available balance in the credit note.
     */
    available_cn_balance?: number;
    /**
     * - Total amount of the credit note.
     */
    cn_amount?: number;
};
/** @returns {CreditNoteDetailsResponse} */
declare function CreditNoteDetailsResponse(): CreditNoteDetailsResponse;
type CreditNoteDetailsResponse = {
    /**
     * - Indicates if the retrieval of credit note
     * details was successful.
     */
    success?: boolean;
    data?: CreditNoteDetails;
};
/** @returns {GetCustomerCreditBalance} */
declare function GetCustomerCreditBalance(): GetCustomerCreditBalance;
type GetCustomerCreditBalance = {
    /**
     * - The unique identifier of sale channels or
     * application as affiliate_id associated with the seller.
     */
    affiliate_id?: string;
    /**
     * - Unique identifier for the seller.
     */
    seller_id?: number;
    /**
     * - Mobile number of the customer
     * for whom the credit balance is requested.
     */
    customer_mobile_number?: string;
};
/** @returns {GetCustomerCreditBalanceReq} */
declare function GetCustomerCreditBalanceReq(): GetCustomerCreditBalanceReq;
type GetCustomerCreditBalanceReq = {
    data?: GetCustomerCreditBalance;
};
/** @returns {GetCustomerCreditBalanceResponseData} */
declare function GetCustomerCreditBalanceResponseData(): GetCustomerCreditBalanceResponseData;
type GetCustomerCreditBalanceResponseData = {
    /**
     * - Mobile number of the customer.
     */
    customer_mobile_number?: string;
    /**
     * - Total credited balance
     * available for the customer.
     */
    total_credited_balance?: number;
};
/** @returns {GetCustomerCreditBalanceResponse} */
declare function GetCustomerCreditBalanceResponse(): GetCustomerCreditBalanceResponse;
type GetCustomerCreditBalanceResponse = {
    /**
     * - Indicates if the retrieval of customer credit
     * balance was successful.
     */
    success?: boolean;
    data?: GetCustomerCreditBalanceResponseData;
};
/** @returns {GetCnConfigReq} */
declare function GetCnConfigReq(): GetCnConfigReq;
type GetCnConfigReq = {
    data?: DeleteConfig;
};
/** @returns {GetCnConfigResponseMeta} */
declare function GetCnConfigResponseMeta(): GetCnConfigResponseMeta;
type GetCnConfigResponseMeta = {
    /**
     * - Reason associated with the configuration response.
     */
    reason?: string;
    /**
     * - List of source channels associated
     * with the credit note configuration.
     */
    source_channel?: string[];
};
/** @returns {GetCnConfigResponseData} */
declare function GetCnConfigResponseData(): GetCnConfigResponseData;
type GetCnConfigResponseData = {
    /**
     * - Indicates if the credit note
     * is configured as a refund method.
     */
    is_cn_as_refund_method?: boolean;
    /**
     * - The unique identifier of sale channels or
     * application as affiliate_id associated with the seller.
     */
    affiliate_id?: string;
    meta?: any;
    /**
     * - Unique identifier for the seller.
     */
    seller_id?: number;
    notification_events?: CreditNoteConfigNotificationEvents;
    /**
     * - Validity period of the credit note
     * configuration in days.
     */
    validity?: number;
    /**
     * - List of ordering
     * channels associated with credit note redemption.
     */
    redemption_ordering_channel?: string[];
    /**
     * - Type of currency used for the credit note.
     */
    currency_type?: string;
};
/** @returns {GetCnConfigResponse} */
declare function GetCnConfigResponse(): GetCnConfigResponse;
type GetCnConfigResponse = {
    /**
     * - Indicates if the retrieval of credit note
     * configuration was successful.
     */
    success?: boolean;
    data?: GetCnConfigResponseData;
};
/** @returns {CnGenerateReportFilters} */
declare function CnGenerateReportFilters(): CnGenerateReportFilters;
type CnGenerateReportFilters = {
    /**
     * - Array of staff IDs for filtering credit note reports.
     */
    staff_id?: string[];
    /**
     * - Array of channels through which
     * credit notes were issued.
     */
    channel_of_issuance?: string[];
    /**
     * - Array of utilisation types for filtering
     * credit note reports.
     */
    utilisation?: string[];
    /**
     * - Array of ordering channels
     * associated with credit note reports.
     */
    ordering_channel?: string[];
    /**
     * - Array of store IDs for filtering credit note reports.
     */
    store_id?: number[];
    /**
     * - Array of transaction types for
     * filtering credit note reports.
     */
    type_of_transaction?: string[];
    /**
     * - Array of issuance channels for
     * filtering credit note reports.
     */
    issuance_channel?: string[];
};
/** @returns {CnGenerateReport} */
declare function CnGenerateReport(): CnGenerateReport;
type CnGenerateReport = {
    /**
     * - Page number of the credit note report.
     */
    page?: number;
    /**
     * - End date for filtering credit note data.
     */
    end_date?: string;
    /**
     * - Number of items per page in the credit note report.
     */
    page_size?: number;
    filters?: CnGenerateReportFilters;
    /**
     * - The unique identifier of sale channels or
     * application as affiliate_id associated with the seller.
     */
    affiliate_id?: string;
    meta?: GenerateReportFilters;
    /**
     * - Search query to filter credit note data by keyword.
     */
    search?: string;
    /**
     * - Unique identifier for the credit note report.
     */
    report_id?: string;
    /**
     * - Type of search criteria used for filtering
     * credit note data.
     */
    search_type?: string;
    /**
     * - Start date for filtering credit note data.
     */
    start_date?: string;
};
/** @returns {GenerateReportCustomerCnReq} */
declare function GenerateReportCustomerCnReq(): GenerateReportCustomerCnReq;
type GenerateReportCustomerCnReq = {
    data?: CnGenerateReport;
};
/** @returns {CnGenerateReportItems} */
declare function CnGenerateReportItems(): CnGenerateReportItems;
type CnGenerateReportItems = {
    /**
     * - Expiry date of the credit note item.
     */
    expiry_date?: string;
    /**
     * - Status of the credit note item.
     */
    status?: string;
    /**
     * - Total amount of the credit note item.
     */
    total_amount?: number;
    /**
     * - Order ID of the order associated with the
     * credit note item.
     */
    order_id?: string;
    /**
     * - Date when the credit note item was issued.
     */
    date_issued?: string;
    /**
     * - Shipment ID of the order associated with
     * the credit note item.
     */
    shipment_id?: string;
    /**
     * - Invoice number associated with the
     * credit note item.
     */
    invoice_number?: string;
    /**
     * - Unique number of the credit note item.
     */
    credit_note_number?: string;
};
/** @returns {GenerateReportCustomerCnResponseData} */
declare function GenerateReportCustomerCnResponseData(): GenerateReportCustomerCnResponseData;
type GenerateReportCustomerCnResponseData = {
    /**
     * - Indicates if the credit note report
     * generation was successful.
     */
    success?: boolean;
    /**
     * - Additional message or information related to
     * the credit note report.
     */
    message?: string;
    /**
     * - List of credit note items in the report.
     */
    items?: CnGenerateReportItems[];
    /**
     * - Display order for row headers
     * in the report.
     */
    row_header_display_order?: any;
    /**
     * - End date used in the credit note report.
     */
    end_date?: string;
    page?: Page;
    /**
     * - Headers included in the credit note report.
     */
    headers?: string[];
    /**
     * - Primary headers used in the credit
     * note report.
     */
    primary_headers?: string[];
    /**
     * - Allowed filters for the credit note report.
     */
    allowed_filters?: string[];
    /**
     * - Start date used in the credit note report.
     */
    start_date?: string;
    /**
     * - Total count of credit note items in the report.
     */
    item_count?: number;
};
/** @returns {GenerateReportCustomerCnResponse} */
declare function GenerateReportCustomerCnResponse(): GenerateReportCustomerCnResponse;
type GenerateReportCustomerCnResponse = {
    data?: GenerateReportCustomerCnResponseData;
};
/** @returns {CnDownloadReport} */
declare function CnDownloadReport(): CnDownloadReport;
type CnDownloadReport = {
    /**
     * - Page number of the download report.
     */
    page?: number;
    /**
     * - Start date for filtering credit note data
     * in the report.
     */
    start_date?: string;
    /**
     * - End date for filtering credit note data in the report.
     */
    end_date?: string;
    /**
     * - The unique identifier of sale channels or
     * application as affiliate_id associated with the seller.
     */
    affiliate_id?: string;
    /**
     * - Search query to filter credit note data by keyword.
     */
    search?: string;
    /**
     * - Status of the credit note data in the report.
     */
    status?: string;
    /**
     * - Type of search criteria used for filtering
     * credit note data.
     */
    search_type?: string;
    /**
     * - Number of items per page in the download report.
     */
    page_size?: number;
};
/** @returns {DownloadReportCustomerCnReq} */
declare function DownloadReportCustomerCnReq(): DownloadReportCustomerCnReq;
type DownloadReportCustomerCnReq = {
    data?: CnDownloadReport;
};
/** @returns {DownloadReportResponseData} */
declare function DownloadReportResponseData(): DownloadReportResponseData;
type DownloadReportResponseData = {
    /**
     * - Unique identifier for the report configuration.
     */
    report_config_id?: string;
    /**
     * - Full name associated with the report request.
     */
    full_name?: string;
    /**
     * - User who requested the report.
     */
    requested_by?: string;
    /**
     * - Start date used in the report.
     */
    start_date?: string;
    /**
     * - End date used in the report.
     */
    end_date?: string;
    /**
     * - Dictionary containing request parameters
     * for the report.
     */
    request_dict?: any;
    /**
     * - Download link for accessing the generated report.
     */
    download_link?: string;
    /**
     * - Date and time when the report was created.
     */
    created_at?: string;
    /**
     * - Additional metadata associated with the report.
     */
    meta?: any;
    /**
     * - Message related to the report status or generation.
     */
    msg?: string;
    /**
     * - Name of the generated report.
     */
    report_name?: string;
    /**
     * - Status of the report.
     */
    status?: string;
    /**
     * - Display name of the report.
     */
    display_name?: string;
    /**
     * - Filters applied to generate the report.
     */
    filters?: any;
};
/** @returns {DownloadReportCustomerCnResponse} */
declare function DownloadReportCustomerCnResponse(): DownloadReportCustomerCnResponse;
type DownloadReportCustomerCnResponse = {
    /**
     * - List of download report data items.
     */
    items?: DownloadReportResponseData[];
    /**
     * - Total count of items in the download report.
     */
    item_count?: number;
    page?: Page;
};
/** @returns {GetReportingFilters} */
declare function GetReportingFilters(): GetReportingFilters;
type GetReportingFilters = {
    /**
     * - Display text for the filter.
     */
    text?: string;
    /**
     * - Type of the fields like seach, filter(e.g.,
     * single, multi select).
     */
    type?: string;
    /**
     * - Options available for the filter.
     */
    options?: any[];
    /**
     * - Value to be pass in response select from options.
     */
    value?: string;
};
/** @returns {GetReportingNestedFilters} */
declare function GetReportingNestedFilters(): GetReportingNestedFilters;
type GetReportingNestedFilters = {
    /**
     * - Display text for the nested filter.
     */
    text?: string;
    /**
     * - Options available for the nested filter.
     */
    options?: any[];
    /**
     * - Indicates if the nested filter is required.
     */
    required?: boolean;
    /**
     * - Placeholder text for the nested filter.
     */
    placeholder_text?: string;
    /**
     * - Type of the nested filter (e.g., single, multi select).
     */
    type?: string;
    /**
     * - Value to be pass in response select from options.
     */
    value?: string;
};
/** @returns {GetReportingFiltersReasonOptions} */
declare function GetReportingFiltersReasonOptions(): GetReportingFiltersReasonOptions;
type GetReportingFiltersReasonOptions = {
    /**
     * - Display text for the reason option.
     */
    text?: string;
    /**
     * - Value of the reason option.
     */
    value?: string;
    /**
     * - Placeholder text for the reason option.
     */
    placeholder_text?: string;
};
/** @returns {GetReportingFiltersReason} */
declare function GetReportingFiltersReason(): GetReportingFiltersReason;
type GetReportingFiltersReason = {
    /**
     * - Display text for the reason.
     */
    text?: string;
    /**
     * - Type of the reason.
     */
    type?: string;
    /**
     * - Value to be pass in response.
     */
    value?: string;
    /**
     * - Options available
     * for the reasons select from options.
     */
    options?: GetReportingFiltersReasonOptions[];
};
/** @returns {GetReportingFiltersResponse} */
declare function GetReportingFiltersResponse(): GetReportingFiltersResponse;
type GetReportingFiltersResponse = {
    reason?: GetReportingFiltersReason;
    search?: GetReportingFilters;
    /**
     * - Array of nested filter objects.
     */
    filters?: GetReportingNestedFilters[];
    status?: GetReportingFilters;
};
/** @returns {InvoicePaymentOptionsPayloadData} */
declare function InvoicePaymentOptionsPayloadData(): InvoicePaymentOptionsPayloadData;
type InvoicePaymentOptionsPayloadData = {
    /**
     * - List of invoice numbers for which
     * payment options are being requested.
     */
    invoice_numbers?: string[];
};
/** @returns {InvoicePaymentOptionsReq} */
declare function InvoicePaymentOptionsReq(): InvoicePaymentOptionsReq;
type InvoicePaymentOptionsReq = {
    data?: InvoicePaymentOptionsPayloadData;
};
/** @returns {InvoicePaymentOptionsResponsePayableAmounts} */
declare function InvoicePaymentOptionsResponsePayableAmounts(): InvoicePaymentOptionsResponsePayableAmounts;
type InvoicePaymentOptionsResponsePayableAmounts = {
    /**
     * - Amount that is payable for the invoice.
     */
    amount?: number;
    /**
     * - Key associated with the payable amount for
     * identification.
     */
    amount_key?: string;
    /**
     * - Header describing the payable amount.
     */
    header?: string;
};
/** @returns {InvoicePaymentOptionsResponseDeductedAmounts} */
declare function InvoicePaymentOptionsResponseDeductedAmounts(): InvoicePaymentOptionsResponseDeductedAmounts;
type InvoicePaymentOptionsResponseDeductedAmounts = {
    /**
     * - Amount deducted from the invoice.
     */
    amount?: number;
    /**
     * - Header describing the deducted amount.
     */
    header?: string;
    /**
     * - Key associated with the deducted amount for
     * identification.
     */
    amount_key?: string;
    /**
     * - Indicates whether the deducted amount is payable.
     */
    is_payable?: boolean;
    /**
     * - Currency symbol associated with the deducted amount.
     */
    symbol?: string;
};
/** @returns {InvoicePaymentOptionsResponseData} */
declare function InvoicePaymentOptionsResponseData(): InvoicePaymentOptionsResponseData;
type InvoicePaymentOptionsResponseData = {
    /**
     * - Invoice number for which payment
     * options are provided.
     */
    invoice_number?: string;
    /**
     * - Type of the invoice (e.g., 'Seller Fynd',
     * 'Platform Subscription').
     */
    invoice_type?: string;
    /**
     * - List of amounts that are payable for the invoice.
     */
    display_amounts?: InvoicePaymentOptionsResponsePayableAmounts[];
    /**
     * - Total amount for the invoice.
     */
    total_amount?: any;
    /**
     * - Amounts deducted from the total,
     * including any associated details.
     */
    deducted_amounts?: any;
    /**
     * - Amounts that are payable for the invoice.
     */
    payable_amounts?: InvoicePaymentOptionsResponsePayableAmounts[];
    currency?: Currency;
};
/** @returns {InvoicePaymentOptionsResponse} */
declare function InvoicePaymentOptionsResponse(): InvoicePaymentOptionsResponse;
type InvoicePaymentOptionsResponse = {
    /**
     * - Reason for the response or any errors encountered.
     */
    reason?: string;
    /**
     * - List of data objects
     * containing details about invoice payment options.
     */
    data?: InvoicePaymentOptionsResponseData[];
    /**
     * - Total amount payable for the invoices.
     */
    total_payable_amount?: number;
    /**
     * - Number of invoices included in the response.
     */
    invoice_count?: number;
    /**
     * - Indicates whether the request to retrieve
     * invoice payment options was successful.
     */
    success?: boolean;
};
/** @returns {PaymentDetail} */
declare function PaymentDetail(): PaymentDetail;
type PaymentDetail = {
    /**
     * - Name or label displayed for the payment detail.
     */
    display_name?: string;
    /**
     * - Value associated with the payment detail (e.g.,
     * amount, transaction ID).
     */
    value?: string;
};
/** @returns {PaidInvoicePaymentDetail} */
declare function PaidInvoicePaymentDetail(): PaidInvoicePaymentDetail;
type PaidInvoicePaymentDetail = {
    /**
     * - List of payment details for
     * the invoice.
     */
    payment_details?: PaymentDetail[];
    /**
     * - Date when the payment was made.
     */
    date_of_payment?: string;
    /**
     * - Amount paid towards the invoice.
     */
    amount?: number;
};
/** @returns {InvoicePaymentDetailsResponseData} */
declare function InvoicePaymentDetailsResponseData(): InvoicePaymentDetailsResponseData;
type InvoicePaymentDetailsResponseData = {
    /**
     * - List
     * of details for paid invoices.
     */
    paid_invoice_payment_details?: PaidInvoicePaymentDetail[];
    /**
     * - Details of any failed
     * payment attempts for the invoices.
     */
    failed_attempts_details?: any[];
};
/** @returns {InvoicePaymentDetailsResponse} */
declare function InvoicePaymentDetailsResponse(): InvoicePaymentDetailsResponse;
type InvoicePaymentDetailsResponse = {
    /**
     * - Reason for the response or any errors encountered.
     */
    reason?: string;
    data?: InvoicePaymentDetailsResponseData;
    /**
     * - Indicates whether the request to retrieve
     * invoice payment details was successful.
     */
    success?: boolean;
    /**
     * - Indicates whether payment
     * details are visible or hidden in the response.
     */
    payment_details_visible?: boolean;
};
/** @returns {InvoiceActivityLogsResponseData} */
declare function InvoiceActivityLogsResponseData(): InvoiceActivityLogsResponseData;
type InvoiceActivityLogsResponseData = {
    /**
     * - Identifier of the user or system that
     * performed the activity.
     */
    performed_by?: string;
    /**
     * - Status of the activity (e.g., 'Completed', 'Pending').
     */
    status?: string;
    /**
     * - Reason for the activity status or any related notes.
     */
    reason?: string;
    /**
     * - Indicates whether the activity issue is resolved.
     */
    is_resolved?: boolean;
    /**
     * - Number of retry attempts made for the activity.
     */
    retry_attempts?: number;
    /**
     * - Maximum number of retry attempts
     * allowed for the activity.
     */
    max_retry_attempts?: number;
};
/** @returns {InvoiceActivityLogsResponse} */
declare function InvoiceActivityLogsResponse(): InvoiceActivityLogsResponse;
type InvoiceActivityLogsResponse = {
    /**
     * - List of activity logs
     * related to invoices.
     */
    data?: InvoiceActivityLogsResponseData[];
};
/** @returns {InvoiceActivityLogError} */
declare function InvoiceActivityLogError(): InvoiceActivityLogError;
type InvoiceActivityLogError = {
    /**
     * - Reason for the error or issue encountered with
     * the invoice activity logs.
     */
    reason?: string;
};
/** @returns {UnlockCreditNoteRequestData} */
declare function UnlockCreditNoteRequestData(): UnlockCreditNoteRequestData;
type UnlockCreditNoteRequestData = {
    /**
     * - The unique identifier for the seller.
     */
    seller_id?: string;
    /**
     * - A list of credit notes that are locked.
     */
    locked_credit_notes?: string[];
    /**
     * - The reason for unlocking the credit notes.
     */
    unlock_reason?: string;
    /**
     * - Additional details or comments about the
     * unlock request.
     */
    description?: string;
};
/** @returns {UnlockCreditNoteReq} */
declare function UnlockCreditNoteReq(): UnlockCreditNoteReq;
type UnlockCreditNoteReq = {
    data?: UnlockCreditNoteRequestData;
};
/** @returns {UnlockCreditNoteResponseData} */
declare function UnlockCreditNoteResponseData(): UnlockCreditNoteResponseData;
type UnlockCreditNoteResponseData = {
    /**
     * - Indicates whether the credit note is unlocked.
     */
    is_cn_unlocked?: boolean;
    /**
     * - The current status of the each credit notes.
     */
    status?: string;
};
/** @returns {UnlockCreditNoteResponse} */
declare function UnlockCreditNoteResponse(): UnlockCreditNoteResponse;
type UnlockCreditNoteResponse = {
    /**
     * - Indicates whether the credit note unlock
     * request was successful.
     */
    success?: boolean;
    data?: UnlockCreditNoteResponseData;
};
