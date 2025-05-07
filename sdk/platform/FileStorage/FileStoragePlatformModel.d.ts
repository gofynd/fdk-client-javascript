export = FileStoragePlatformModel;
/**
 * @typedef PdfTypeByIdDetails
 * @property {boolean} [store_os] - A flag indicating if the PDF type is linked
 *   to the store operating system.
 * @property {string} [country_code] - The ISO code representing the country.
 * @property {number} [pdf_type_id] - The unique identifier for the PDF type.
 * @property {number} [__v] - The version number of the document.
 * @property {string} [_id] - The unique document identifier.
 * @property {string[]} [format] - A list of formats applicable for this PDF type.
 * @property {string} [name] - The name of the PDF type.
 * @property {boolean} [visibility] - Indicates whether the PDF type is visible.
 */
/**
 * @typedef PdfDefaultTemplateById
 * @property {string} [_id] - The ID of the PDF default template
 * @property {string} [country_code] - The country code associated with the template
 * @property {string} [format] - The format of the template (e.g., "A4")
 * @property {number} [pdf_type_id] - The ID of the PDF type
 * @property {number} [__v] - Version number
 * @property {string} [template] - The HTML template content
 */
/**
 * @typedef PdfDefaultTemplateSuccess
 * @property {Document[]} [data] - A list of default PDF templates.
 * @property {boolean} [success] - Indicates if the request was successful.
 */
/**
 * @typedef FailedBrowseFilesResult
 * @property {string} message - A descriptive message explaining the failure.
 */
/**
 * @typedef CDN
 * @property {string} url - The full URL to access the file via the CDN.
 * @property {string} absolute_url - The absolute URL of the file stored in the CDN.
 * @property {string} relative_url - The relative path to the file within the CDN.
 */
/**
 * @typedef Upload
 * @property {number} expiry - The time in milliseconds before the signed URL expires.
 * @property {string} url - The signed URL for uploading a file.
 */
/**
 * @typedef FileUpload
 * @property {string} file_name - The name of the uploaded file.
 * @property {string} file_path - The storage path of the uploaded file.
 * @property {string} content_type - The MIME type of the file.
 * @property {string} [method] - The HTTP method used for uploading the file.
 * @property {string} namespace - The namespace under which the file is stored.
 * @property {string} operation - The operation type related to the file upload.
 * @property {number} size - The size of the file in bytes.
 * @property {Upload} upload
 * @property {string[]} [tags] - A list of tags associated with the file.
 */
/**
 * @typedef FileUploadStart
 * @property {string} file_name - The name of the file to be uploaded.
 * @property {string} content_type - The MIME type of the file.
 * @property {number} size - The file size in bytes.
 * @property {string[]} [tags] - Tags associated with the file.
 * @property {Object} [params] - Additional parameters for file upload.
 * @property {string} [enc_key] - The encryption key for securing the file.
 */
/**
 * @typedef CreatedBy
 * @property {string} [username] - The username of the creator.
 * @property {string} [user_id] - The unique identifier of the user.
 */
/**
 * @typedef FileUploadComplete
 * @property {string} _id - The unique identifier of the uploaded file.
 * @property {string} file_name - The name of the uploaded file.
 * @property {string} file_path - The storage path of the file.
 * @property {string} content_type - The MIME type of the file.
 * @property {string} namespace - The namespace where the file is stored.
 * @property {string} operation - The operation performed on the file.
 * @property {number} company_id - The ID of the company associated with the file.
 * @property {number} size - The file size in bytes.
 * @property {Upload} upload
 * @property {CDN} cdn
 * @property {boolean} success - Indicates if the file upload was successful.
 * @property {string[]} [tags] - Tags associated with the file.
 * @property {string} created_on - The timestamp when the file was created.
 * @property {string} modified_on - The timestamp when the file was last modified.
 * @property {CreatedBy} [created_by]
 */
/**
 * @typedef ProxyFileAccess
 * @property {Object} [data] - The data related to file access.
 * @property {Object} [support] - Additional support information.
 */
/**
 * @typedef DestinationNamespace
 * @property {string} [namespace] - The target namespace for copied files.
 */
/**
 * @typedef CopyFiles
 * @property {string[]} [urls] - List of URLs of files to be copied.
 * @property {DestinationNamespace} destination
 */
/**
 * @typedef Urls
 * @property {string} url - The public URL of the file.
 * @property {string} signed_url - The signed URL with access permissions.
 * @property {number} expiry - The expiration time (in milliseconds) for the signed URL.
 */
/**
 * @typedef SignUrlResult
 * @property {Urls[]} urls - A list of signed URLs.
 */
/**
 * @typedef EncryptionMapping
 * @property {string} [enc_url]
 * @property {string} [value]
 */
/**
 * @typedef SignUrl
 * @property {number} expiry - The expiration time (in milliseconds) for the signed URL.
 * @property {string[]} urls - List of URLs to be signed.
 * @property {EncryptionMapping[]} [enc_url_mapping]
 */
/**
 * @typedef InvoiceTypesData
 * @property {boolean} [status] - Indicates the status of the invoice type.
 * @property {string} _id - The unique identifier of the invoice type.
 * @property {number} pdf_type_id - The ID associated with the PDF type.
 * @property {string} name - The name of the invoice type.
 * @property {string[]} format - The supported document formats (e.g., A4, A6, POS).
 * @property {number} __v - Version number of the document.
 * @property {boolean} visibility - Indicates if the invoice type is visible.
 * @property {boolean} store_os - Specifies whether the invoice type is store-OS enabled.
 * @property {string} country_code - The ISO country code associated with the
 *   invoice type.
 */
/**
 * @typedef InvoiceTypes
 * @property {InvoiceTypesData[]} data - A list of invoice types.
 * @property {boolean} success - Indicates if the request was successful.
 */
/**
 * @typedef ConversionRate
 * @property {string} [base] - The base currency code.
 * @property {Object} [rates] - A key-value map of currency rates.
 * @property {number} [timestamp] - The timestamp when the rates were fetched.
 */
/**
 * @typedef DeliveryPartnerDetail
 * @property {string} [name] - The name of the delivery partner.
 * @property {string} [awb_number_barcode] - The barcode for the AWB (Airway Bill) number.
 * @property {string} [awb_number] - The AWB number for tracking.
 * @property {string} [origin] - The origin location of the shipment.
 * @property {string} [destination] - The destination location of the shipment.
 * @property {string} [eway_bill_number] - The e-way bill number, if applicable.
 */
/**
 * @typedef Image
 * @property {string} [sales_channel_logo] - URL of the sales channel logo.
 */
/**
 * @typedef PaymentData
 * @property {string} [payment_type] - Type of payment method used.
 * @property {number} [amount] - Amount of the transaction.
 * @property {string} [date] - Date of the transaction.
 * @property {string} [transaction_id] - Unique identifier for the transaction.
 * @property {string} [time] - Time of the transaction.
 * @property {string} [mode] - Mode of payment (e.g., credit card, UPI, net banking).
 * @property {string} [name] - Name associated with the payment method.
 * @property {Object} [meta] - Additional metadata related to the payment.
 */
/**
 * @typedef InvoiceDetail
 * @property {string} [invoice_id] - Unique identifier for the invoice.
 * @property {string} [invoice_date] - Date when the invoice was generated.
 * @property {string} [irn] - Invoice Reference Number (if applicable).
 * @property {string} [external_order_id] - External order ID associated with the invoice.
 * @property {string} [shipment_id] - Identifier for the shipment linked to this invoice.
 * @property {string} [signed_qrcode] - Signed QR code for the invoice.
 * @property {string} [upi_qrcode] - UPI QR code for payment processing.
 * @property {string} [device_id] - Identifier for the device used to generate
 *   the invoice.
 * @property {string} [marketplace_invoice_id] - Invoice ID assigned by the marketplace.
 * @property {string} [marketplace_shipment_id] - Shipment ID assigned by the marketplace.
 * @property {string} [channel_order_id] - Order ID assigned by the sales channel.
 */
/**
 * @typedef CompanyDetail
 * @property {string} [name] - The official name of the company.
 * @property {string} [address] - The physical street address of the company.
 * @property {string} [city] - The city where the company is located.
 * @property {string} [state] - The state or province where the company is located.
 * @property {string} [country] - The country where the company is based.
 * @property {number} [zip_code] - The postal code for the company's location.
 * @property {string} [state_code] - A code representing the state, often used
 *   in official documents and forms.
 * @property {string} [country_code] - The country code.
 * @property {string} [gstin] - The Goods and Services Tax Identification
 *   Number, unique to each business in India.
 * @property {string} [pan] - The Permanent Account Number, unique to each
 *   taxpayer in India.
 * @property {string} [phone_no] - The primary contact phone number for the company.
 * @property {string} [cin] - The Corporate Identification Number, unique to
 *   each company registered in India.
 * @property {string} [website_url] - The URL to the company's official website.
 * @property {string} [email] - The company's official email address.
 * @property {string} [display_address] - The display address of the company.
 * @property {string} [sector] - The sector in which the company operates.
 * @property {Object} [phone] - The provided phone number associated with the company.
 * @property {string} [trn] - The Tax Registration Number (TRN) of the company.
 * @property {string} [vat] - The Value Added Tax (VAT) number of the company.
 * @property {string} [business_country_timezone] - The business country’s timezone.
 * @property {Object} [business_country_currency] - Represents the business
 *   country currency details.
 * @property {Object} [meta] - Additional metadata related to the company.
 */
/**
 * @typedef StoreDetail
 * @property {string} [store_name] - Name of the store
 * @property {string} [address] - Full address of the store
 * @property {string} [city] - City where the store is located
 * @property {string} [state] - State where the store is located
 * @property {string} [country] - Country where the store is located
 * @property {string} [country_code] - Country code of the store's location
 * @property {string} [zip_code] - ZIP or postal code of the store's location
 * @property {string} [state_code] - State code where the store is located
 * @property {string} [gstin] - GSTIN number for the store
 * @property {string} [display_address] - Formatted display address of the store
 * @property {string} [sector] - Sector or industry category of the store
 * @property {string} [store_id] - Unique identifier for the store
 */
/**
 * @typedef CustomerBillingDetail
 * @property {string} [name] - Name of the customer
 * @property {string} [phone_no] - Phone number of the customer
 * @property {string} [address] - Billing address of the customer
 * @property {string} [city] - City of the customer's billing address
 * @property {string} [state] - State of the customer's billing address
 * @property {string} [country] - Country of the customer's billing address
 * @property {string} [country_code] - Country code of the billing address
 * @property {string} [zip_code] - ZIP or postal code of the billing address
 * @property {string} [state_code] - State code of the billing address
 * @property {string} [gstin] - GSTIN number of the customer
 * @property {string} [display_address] - Formatted display address of the customer
 * @property {string} [sector] - Sector or industry related to the customer
 * @property {string} [email] - Email address of the customer
 */
/**
 * @typedef CustomerShippingDetail
 * @property {string} [name] - Name of the recipient
 * @property {string} [phone_no] - Phone number of the recipient
 * @property {string} [address] - Shipping address of the customer
 * @property {string} [city] - City of the shipping address
 * @property {string} [state] - State of the shipping address
 * @property {string} [country] - Country of the shipping address
 * @property {string} [country_code] - Country code of the shipping address
 * @property {string} [zip_code] - ZIP or postal code of the shipping address
 * @property {string} [state_code] - State code of the shipping address
 * @property {string} [gstin] - GSTIN number related to the shipping details
 * @property {string} [display_address] - Formatted display address of the recipient
 * @property {string} [sector] - Sector or industry related to the shipping details
 */
/**
 * @typedef ReturnDetail
 * @property {string} [address] - Return address
 * @property {string} [city] - City of the return address
 * @property {string} [state] - State of the return address
 * @property {string} [country] - Country of the return address
 * @property {string} [country_code] - Country code of the return address
 * @property {string} [zip_code] - ZIP or postal code of the return address
 * @property {string} [state_code] - State code of the return address
 * @property {string} [gstin] - GSTIN number related to the return details
 * @property {string} [display_address] - Formatted display address of the return location
 * @property {string} [sector] - Sector or industry related to the return details
 */
/**
 * @typedef Brand
 * @property {string} [logo] - URL of the brand logo
 * @property {string} [name] - Name of the brand
 */
/**
 * @typedef Cgst
 * @property {number} [value] - CGST value
 * @property {number} [percent] - CGST percentage
 */
/**
 * @typedef Sgst
 * @property {number} [value] - SGST value
 * @property {number} [percent] - SGST percentage
 */
/**
 * @typedef Igst
 * @property {number} [value] - IGST value
 * @property {number} [percent] - IGST percentage
 */
/**
 * @typedef Tax
 * @property {Cgst} [cgst]
 * @property {Sgst} [sgst]
 * @property {Igst} [igst]
 */
/**
 * @typedef ItemsProductTable
 * @property {string} [name] - The name of the product.
 * @property {string} [seller_identifier] - A unique identifier assigned to the
 *   seller for this product.
 * @property {number} [total] - The total price of the product including all
 *   applicable charges.
 * @property {Brand} [brand]
 * @property {string} [hsn_code] - The Harmonized System Nomenclature (HSN) code
 *   used for tax classification.
 * @property {string} [item_code] - The unique item code assigned to the product.
 * @property {number} [total_units] - The total number of units purchased for
 *   this product.
 * @property {string} [size] - The size variant of the product.
 * @property {number} [mrp] - The Maximum Retail Price (MRP) of the product.
 * @property {number} [discount] - The discount applied to the product.
 * @property {number} [taxable_amount] - The amount on which tax is calculated.
 * @property {number} [total_taxable_amount] - The total taxable amount
 *   including all units of the product.
 * @property {Tax} [tax]
 * @property {Object} [meta] - Additional metadata related to the product.
 * @property {string} [country_of_origin] - The country where the product was
 *   manufactured.
 */
/**
 * @typedef ProductTable
 * @property {number} [total_items] - The total number of different products in the order.
 * @property {ItemsProductTable[]} [products] - A list of products included in the order.
 * @property {number} [grand_total] - The final amount to be paid including all
 *   charges and discounts.
 * @property {number} [delivery_charges] - The charges applicable for delivery
 *   of the order.
 * @property {string} [delivery_charge_text] - A descriptive text about the
 *   delivery charges.
 * @property {number} [cod_charges] - The additional charges for Cash on
 *   Delivery (COD) payments.
 * @property {number} [fynd_discounts] - Discounts applied by Fynd.
 * @property {string} [total_in_words] - The grand total amount represented in words.
 * @property {number} [gift_price] - The price of any gift items included in the order.
 * @property {number} [total_quantity] - The total quantity of all products in the order.
 * @property {number} [sub_total] - The subtotal amount before additional charges.
 * @property {number} [discount] - The total discount applied to the order.
 * @property {number} [promotion] - The promotional discount applied to the order.
 * @property {number} [coupon] - The coupon discount applied to the order.
 * @property {number} [reward] - The reward-based discount applied to the order.
 * @property {number} [round_off] - The rounding off value added or subtracted
 *   to finalize the total amount.
 * @property {number} [total_value_of_goods] - The total value of all products
 *   before applying taxes and discounts.
 */
/**
 * @typedef Taxes
 * @property {string} [hsn_code] - The HSN code associated with the product for
 *   tax purposes.
 * @property {Tax} [tax]
 * @property {number} [total_tax_value] - The total tax value calculated for the item.
 */
/**
 * @typedef TaxTable
 * @property {Taxes[]} [taxes] - A list of tax details applied to different items.
 * @property {number} [total_tax] - The total tax amount for the entire order.
 * @property {string} [tax_in_words] - The total tax amount represented in words.
 */
/**
 * @typedef RegisteredCompanyDetail
 * @property {string} [address] - The complete address of the company.
 * @property {string} [city] - The city where the company is located.
 * @property {string} [state] - The state where the company is registered.
 * @property {string} [country] - The country where the company operates.
 * @property {string} [country_code] - The country code of the registered company.
 * @property {number} [zip_code] - The postal/zip code of the company’s location.
 * @property {string} [state_code] - The state code for taxation purposes.
 * @property {string} [display_address] - The formatted display address of the company.
 * @property {string} [sector] - The industry sector the company belongs to.
 */
/**
 * @typedef Kwargs
 * @property {string} [value] - The value associated with the keyword argument.
 */
/**
 * @typedef ShipmentIdBarcodeGenerator
 * @property {string} [method] - The method used to generate the barcode.
 * @property {Kwargs} [kwargs]
 */
/**
 * @typedef SignedQrcodeGenerator
 * @property {string} [method] - The method used to generate the QR code.
 * @property {Kwargs} [kwargs]
 */
/**
 * @typedef KwargsUpiQrcode
 * @property {string} [qr_data] - The data encoded in the QR code.
 * @property {string} [qr_url] - The URL associated with the QR code.
 */
/**
 * @typedef UpiQrcodeGenerator
 * @property {string} [method] - The method used to generate the UPI QR code.
 * @property {KwargsUpiQrcode} [kwargs]
 */
/**
 * @typedef DigitalsignatureGenerator
 * @property {string} [method] - The method used to generate the digital signature.
 * @property {Kwargs} [kwargs]
 */
/**
 * @typedef KwargsAwbNumber
 * @property {Object[]} [value] - A list of objects containing AWB number details.
 */
/**
 * @typedef AwbNumberLabelBarcodeGenerator
 * @property {string} [method] - The method used to generate the AWB number label barcode.
 * @property {KwargsAwbNumber} [kwargs]
 */
/**
 * @typedef AwbNumberBarcodeGenerator
 * @property {string} [method] - The method used to generate the AWB number barcode.
 * @property {Kwargs} [kwargs]
 */
/**
 * @typedef MetaProperty
 * @property {ShipmentIdBarcodeGenerator} [shipment_id_barcode_generator]
 * @property {SignedQrcodeGenerator} [signed_qrcode_generator]
 * @property {UpiQrcodeGenerator} [upi_qrcode_generator]
 * @property {DigitalsignatureGenerator} [digitalsignature_generator]
 * @property {AwbNumberLabelBarcodeGenerator} [awb_number_label_barcode_generator]
 * @property {AwbNumberBarcodeGenerator} [awb_number_barcode_generator]
 */
/**
 * @typedef Meta
 * @property {MetaProperty} [generator]
 */
/**
 * @typedef PdfPayloadDetails
 * @property {boolean} [is_export] - Indicates if the shipment is an export.
 * @property {boolean} [is_export_shipment] - Indicates if the shipment is
 *   specifically meant for export.
 * @property {string} [app_domain_name] - The domain name associated with the
 *   app processing the invoice.
 * @property {string} [txn_id] - The unique transaction ID related to the order.
 * @property {string} [utr] - The Unique Transaction Reference (UTR) for payment
 *   processing.
 * @property {string} [po_number] - The purchase order number for the transaction.
 * @property {string} [credit_note_id] - The credit note ID associated with the
 *   order, if applicable.
 * @property {string} [current_date] - The current date when the invoice is generated.
 * @property {number} [total_value_of_goods] - The total value of goods in the order.
 * @property {Object} [b2b_buyer_details] - Contains details about the
 *   business-to-business (B2B) buyer.
 * @property {Object} [is_qwik] - Metadata related to quick (Qwik) shipments.
 * @property {string} [order_type] - The type of order, e.g., B2B, B2C.
 * @property {ConversionRate} [conversion_rate]
 * @property {string} [currency_code] - The currency code used for the transaction.
 * @property {string} [shipment_id] - The unique identifier of the shipment.
 * @property {DeliveryPartnerDetail} [delivery_partner_detail]
 * @property {Image} [image]
 * @property {PaymentData[]} [payments] - A list of payment details associated
 *   with the transaction.
 * @property {InvoiceDetail} [invoice_detail]
 * @property {CompanyDetail} [company_detail]
 * @property {StoreDetail} [store_detail]
 * @property {CustomerBillingDetail} [customer_billing_detail]
 * @property {CustomerShippingDetail} [customer_shipping_detail]
 * @property {ReturnDetail} [return_detail]
 * @property {ProductTable} [product_table]
 * @property {TaxTable} [tax_table]
 * @property {string[]} [declaration_texts] - A list of declaration statements
 *   associated with the invoice.
 * @property {RegisteredCompanyDetail} [registered_company_detail]
 * @property {string} [disclaimer] - A disclaimer statement included in the invoice.
 * @property {Meta} [meta]
 * @property {boolean} [is_self_ship] - Indicates whether the shipment is
 *   self-shipped by the seller.
 * @property {string} [mode] - The mode of shipping, e.g., air, ground, sea.
 * @property {boolean} [is_self_pickup] - Indicates whether the order is picked
 *   up by the customer.
 * @property {string} [platform_name] - The platform name where the order was placed.
 * @property {number} [amount_to_be_collected] - The total amount to be
 *   collected from the customer.
 * @property {number} [amount_paid] - The total amount paid by the customer.
 * @property {Object[]} [waybills] - A list of waybills associated with the shipment.
 * @property {number} [total_items] - The total number of items in the order.
 * @property {string} [brand_logo] - The URL of the brand logo associated with
 *   the invoice.
 * @property {string} [shipment_id_barcode] - The barcode associated with the shipment ID.
 * @property {string} [signed_qrcode] - The signed QR code used for
 *   authentication or verification.
 * @property {string} [upi_qrcode] - The UPI QR code for payment processing.
 * @property {string} [digitalsignature] - The digital signature associated with
 *   the document.
 * @property {string} [awb_number_barcode] - The barcode generated for the AWB number.
 * @property {string} [uid] - The unique identifier associated with the invoice
 *   or shipment.
 */
/**
 * @typedef DummyTemplateData
 * @property {string} [_id] - Unique identifier for the PDF payload.
 * @property {number} [pdf_type_id] - Unique identifier for the invoice.
 * @property {PdfPayloadDetails} payload
 * @property {string} [country_code] - Country code associated with the payload.
 * @property {number} [__v] - Version number of the document.
 */
/**
 * @typedef MapperDetails
 * @property {string} [_id] - Unique identifier for the mapping entry.
 * @property {number} [pdf_type_id] - Identifier for the type of PDF.
 * @property {PdfPayloadDetails} [payload]
 * @property {string} [country_code] - Country code associated with the mapping entry.
 * @property {number} [__v] - Version number of the mapping entry.
 */
/**
 * @typedef PdfDataItemsDetails
 * @property {DummyTemplateData[]} data - List of PDF payload data.
 * @property {boolean} success - Indicates whether the operation was successful.
 */
/**
 * @typedef PdfConfig
 * @property {string} [format] - Invoice document format (A4, A6, POS).
 * @property {string} [template] - HTML template string for the document.
 * @property {number} [pdf_type_id] - Identifier for the type of PDF.
 * @property {string} [country_code] - Country code associated with the configuration.
 * @property {boolean} [default_template] - Indicates whether the fetched
 *   template is the default template.
 */
/**
 * @typedef PdfConfigSuccessData
 * @property {string} [_id] - Unique identifier for the PDF configuration.
 * @property {number} [company_id] - Identifier for the company associated with
 *   the configuration.
 * @property {string} [application_id] - Identifier for the application using
 *   this configuration.
 * @property {number} [pdf_type_id] - Identifier for the type of PDF.
 * @property {string} [format] - Format of the invoice document.
 * @property {string} [template] - HTML template for the document.
 * @property {number} [__v] - Version number of the configuration document.
 * @property {string} [country_code] - Country code associated with the configuration.
 */
/**
 * @typedef PdfConfigSuccess
 * @property {PdfConfigSuccessData[]} [data] - List of successful PDF configurations.
 * @property {boolean} [success] - Indicates whether the operation was successful.
 */
/**
 * @typedef PdfConfigSaveSuccessData
 * @property {string} [_id] - Unique identifier for the saved configuration.
 * @property {number} [company_id] - Identifier for the associated company.
 * @property {string} [application_id] - Identifier for the associated application.
 * @property {number} [pdf_type_id] - Identifier for the type of PDF.
 * @property {string} [format] - Format of the PDF document.
 * @property {string} [template] - HTML template used in the saved configuration.
 * @property {number} [__v] - Version number of the saved configuration.
 */
/**
 * @typedef PdfConfigSaveSuccess
 * @property {PdfConfigSaveSuccessData} [data]
 * @property {boolean} [success] - Indicates whether the operation was successful.
 */
/**
 * @typedef Document
 * @property {string} [_id] - Unique identifier for the document.
 * @property {number} [pdf_type_id] - Identifier for the type of PDF.
 * @property {string} [format] - Format of the document.
 * @property {string} [template] - HTML template content.
 * @property {string} [country_code] - Country code associated with the document.
 * @property {number} [__v] - Version number of the document.
 */
/**
 * @typedef PaymentReceiptRequestBody
 * @property {PaymentReceiptPayload} [payload]
 * @property {PaymentReceiptMeta} [meta]
 */
/**
 * @typedef PaymentReceiptOrderDetails
 * @property {string} [jiomart_order_id] - Unique order identifier.
 * @property {number} [total_items] - Total number of items in the order.
 * @property {number} [final_amount] - Final amount for the order.
 * @property {string} [final_amount_in_words] - Final amount represented in words.
 * @property {string} [order_created_date] - Order creation date.
 * @property {string} [order_created_time] - Order creation time.
 * @property {string} [prm_id] - Unique PRM identifier.
 * @property {string} [receipt_no] - Receipt number for the transaction.
 * @property {PaymentReceiptTaxes} [taxes]
 */
/**
 * @typedef PaymentReceiptCustomerDetails
 * @property {string} [id] - Unique identifier for the customer.
 * @property {string} [email_id] - Customer's email address.
 * @property {string} [last_name] - Customer's last name.
 * @property {string} [first_name] - Customer's first name.
 * @property {string} [mobile_number] - Customer's mobile number.
 */
/**
 * @typedef PaymentReceiptPayments
 * @property {string} [payment_desc] - A description of the payment transaction.
 * @property {string} [txn_date] - The date and time when the transaction was made.
 */
/**
 * @typedef PaymentReceiptFormat
 * @property {string[]} [payment_receipt] - A list of formats available for
 *   generating the payment receipt.
 */
/**
 * @typedef PaymentReceiptService
 * @property {string} [name] - The name of the service handling the payment receipt.
 */
/**
 * @typedef PaymentReceiptTaxes
 * @property {string} [gstin] - The GST Identification Number (GSTIN) associated
 *   with the company.
 * @property {string} [pancard] - The Permanent Account Number (PAN) of the
 *   company or individual.
 */
/**
 * @typedef PaymentReceiptPayload
 * @property {string} [uid] - A unique identifier for the payment receipt.
 * @property {PaymentReceiptOrderDetails} [order_detail]
 * @property {PaymentReceiptCustomerDetails} [customer_detail]
 * @property {PaymentReceiptPayments[]} [payments] - A list of payment
 *   transactions included in the receipt.
 */
/**
 * @typedef PaymentReceiptMeta
 * @property {string} [job_type] - Specifies the type of job processing the
 *   payment receipt.
 * @property {string} [action] - The action performed in relation to the payment receipt.
 * @property {Object} [event] - Additional event details associated with the
 *   receipt processing.
 * @property {string} [organizaton_id] - The unique identifier of the
 *   organization issuing the receipt.
 * @property {number} [company_id] - The numeric identifier of the company
 *   handling the payment.
 * @property {string[]} [application_id] - A list of application identifiers
 *   linked to the transaction.
 * @property {PaymentReceiptFormat} [format]
 * @property {string[]} [trace_id] - A list of trace identifiers for tracking
 *   the transaction.
 * @property {number} [created_timestamp] - The timestamp (in epoch format) when
 *   the receipt was created.
 * @property {PaymentReceiptService} [service]
 * @property {Object} [event_trace_info] - Additional trace information related
 *   to the event.
 * @property {string} [trace] - A unique trace identifier for debugging or
 *   tracking purposes.
 */
/**
 * @typedef ExtensionSlug
 * @property {string} [extension_slug] - A unique slug identifier for the extension.
 */
declare class FileStoragePlatformModel {
}
declare namespace FileStoragePlatformModel {
    export { PdfTypeByIdDetails, PdfDefaultTemplateById, PdfDefaultTemplateSuccess, FailedBrowseFilesResult, CDN, Upload, FileUpload, FileUploadStart, CreatedBy, FileUploadComplete, ProxyFileAccess, DestinationNamespace, CopyFiles, Urls, SignUrlResult, EncryptionMapping, SignUrl, InvoiceTypesData, InvoiceTypes, ConversionRate, DeliveryPartnerDetail, Image, PaymentData, InvoiceDetail, CompanyDetail, StoreDetail, CustomerBillingDetail, CustomerShippingDetail, ReturnDetail, Brand, Cgst, Sgst, Igst, Tax, ItemsProductTable, ProductTable, Taxes, TaxTable, RegisteredCompanyDetail, Kwargs, ShipmentIdBarcodeGenerator, SignedQrcodeGenerator, KwargsUpiQrcode, UpiQrcodeGenerator, DigitalsignatureGenerator, KwargsAwbNumber, AwbNumberLabelBarcodeGenerator, AwbNumberBarcodeGenerator, MetaProperty, Meta, PdfPayloadDetails, DummyTemplateData, MapperDetails, PdfDataItemsDetails, PdfConfig, PdfConfigSuccessData, PdfConfigSuccess, PdfConfigSaveSuccessData, PdfConfigSaveSuccess, Document, PaymentReceiptRequestBody, PaymentReceiptOrderDetails, PaymentReceiptCustomerDetails, PaymentReceiptPayments, PaymentReceiptFormat, PaymentReceiptService, PaymentReceiptTaxes, PaymentReceiptPayload, PaymentReceiptMeta, ExtensionSlug };
}
/** @returns {PdfTypeByIdDetails} */
declare function PdfTypeByIdDetails(): PdfTypeByIdDetails;
type PdfTypeByIdDetails = {
    /**
     * - A flag indicating if the PDF type is linked
     * to the store operating system.
     */
    store_os?: boolean;
    /**
     * - The ISO code representing the country.
     */
    country_code?: string;
    /**
     * - The unique identifier for the PDF type.
     */
    pdf_type_id?: number;
    /**
     * - The version number of the document.
     */
    __v?: number;
    /**
     * - The unique document identifier.
     */
    _id?: string;
    /**
     * - A list of formats applicable for this PDF type.
     */
    format?: string[];
    /**
     * - The name of the PDF type.
     */
    name?: string;
    /**
     * - Indicates whether the PDF type is visible.
     */
    visibility?: boolean;
};
/** @returns {PdfDefaultTemplateById} */
declare function PdfDefaultTemplateById(): PdfDefaultTemplateById;
type PdfDefaultTemplateById = {
    /**
     * - The ID of the PDF default template
     */
    _id?: string;
    /**
     * - The country code associated with the template
     */
    country_code?: string;
    /**
     * - The format of the template (e.g., "A4")
     */
    format?: string;
    /**
     * - The ID of the PDF type
     */
    pdf_type_id?: number;
    /**
     * - Version number
     */
    __v?: number;
    /**
     * - The HTML template content
     */
    template?: string;
};
/** @returns {PdfDefaultTemplateSuccess} */
declare function PdfDefaultTemplateSuccess(): PdfDefaultTemplateSuccess;
type PdfDefaultTemplateSuccess = {
    /**
     * - A list of default PDF templates.
     */
    data?: Document[];
    /**
     * - Indicates if the request was successful.
     */
    success?: boolean;
};
/** @returns {FailedBrowseFilesResult} */
declare function FailedBrowseFilesResult(): FailedBrowseFilesResult;
type FailedBrowseFilesResult = {
    /**
     * - A descriptive message explaining the failure.
     */
    message: string;
};
/** @returns {CDN} */
declare function CDN(): CDN;
type CDN = {
    /**
     * - The full URL to access the file via the CDN.
     */
    url: string;
    /**
     * - The absolute URL of the file stored in the CDN.
     */
    absolute_url: string;
    /**
     * - The relative path to the file within the CDN.
     */
    relative_url: string;
};
/** @returns {Upload} */
declare function Upload(): Upload;
type Upload = {
    /**
     * - The time in milliseconds before the signed URL expires.
     */
    expiry: number;
    /**
     * - The signed URL for uploading a file.
     */
    url: string;
};
/** @returns {FileUpload} */
declare function FileUpload(): FileUpload;
type FileUpload = {
    /**
     * - The name of the uploaded file.
     */
    file_name: string;
    /**
     * - The storage path of the uploaded file.
     */
    file_path: string;
    /**
     * - The MIME type of the file.
     */
    content_type: string;
    /**
     * - The HTTP method used for uploading the file.
     */
    method?: string;
    /**
     * - The namespace under which the file is stored.
     */
    namespace: string;
    /**
     * - The operation type related to the file upload.
     */
    operation: string;
    /**
     * - The size of the file in bytes.
     */
    size: number;
    upload: Upload;
    /**
     * - A list of tags associated with the file.
     */
    tags?: string[];
};
/** @returns {FileUploadStart} */
declare function FileUploadStart(): FileUploadStart;
type FileUploadStart = {
    /**
     * - The name of the file to be uploaded.
     */
    file_name: string;
    /**
     * - The MIME type of the file.
     */
    content_type: string;
    /**
     * - The file size in bytes.
     */
    size: number;
    /**
     * - Tags associated with the file.
     */
    tags?: string[];
    /**
     * - Additional parameters for file upload.
     */
    params?: any;
    /**
     * - The encryption key for securing the file.
     */
    enc_key?: string;
};
/** @returns {CreatedBy} */
declare function CreatedBy(): CreatedBy;
type CreatedBy = {
    /**
     * - The username of the creator.
     */
    username?: string;
    /**
     * - The unique identifier of the user.
     */
    user_id?: string;
};
/** @returns {FileUploadComplete} */
declare function FileUploadComplete(): FileUploadComplete;
type FileUploadComplete = {
    /**
     * - The unique identifier of the uploaded file.
     */
    _id: string;
    /**
     * - The name of the uploaded file.
     */
    file_name: string;
    /**
     * - The storage path of the file.
     */
    file_path: string;
    /**
     * - The MIME type of the file.
     */
    content_type: string;
    /**
     * - The namespace where the file is stored.
     */
    namespace: string;
    /**
     * - The operation performed on the file.
     */
    operation: string;
    /**
     * - The ID of the company associated with the file.
     */
    company_id: number;
    /**
     * - The file size in bytes.
     */
    size: number;
    upload: Upload;
    cdn: CDN;
    /**
     * - Indicates if the file upload was successful.
     */
    success: boolean;
    /**
     * - Tags associated with the file.
     */
    tags?: string[];
    /**
     * - The timestamp when the file was created.
     */
    created_on: string;
    /**
     * - The timestamp when the file was last modified.
     */
    modified_on: string;
    created_by?: CreatedBy;
};
/** @returns {ProxyFileAccess} */
declare function ProxyFileAccess(): ProxyFileAccess;
type ProxyFileAccess = {
    /**
     * - The data related to file access.
     */
    data?: any;
    /**
     * - Additional support information.
     */
    support?: any;
};
/** @returns {DestinationNamespace} */
declare function DestinationNamespace(): DestinationNamespace;
type DestinationNamespace = {
    /**
     * - The target namespace for copied files.
     */
    namespace?: string;
};
/** @returns {CopyFiles} */
declare function CopyFiles(): CopyFiles;
type CopyFiles = {
    /**
     * - List of URLs of files to be copied.
     */
    urls?: string[];
    destination: DestinationNamespace;
};
/** @returns {Urls} */
declare function Urls(): Urls;
type Urls = {
    /**
     * - The public URL of the file.
     */
    url: string;
    /**
     * - The signed URL with access permissions.
     */
    signed_url: string;
    /**
     * - The expiration time (in milliseconds) for the signed URL.
     */
    expiry: number;
};
/** @returns {SignUrlResult} */
declare function SignUrlResult(): SignUrlResult;
type SignUrlResult = {
    /**
     * - A list of signed URLs.
     */
    urls: Urls[];
};
/** @returns {EncryptionMapping} */
declare function EncryptionMapping(): EncryptionMapping;
type EncryptionMapping = {
    enc_url?: string;
    value?: string;
};
/** @returns {SignUrl} */
declare function SignUrl(): SignUrl;
type SignUrl = {
    /**
     * - The expiration time (in milliseconds) for the signed URL.
     */
    expiry: number;
    /**
     * - List of URLs to be signed.
     */
    urls: string[];
    enc_url_mapping?: EncryptionMapping[];
};
/** @returns {InvoiceTypesData} */
declare function InvoiceTypesData(): InvoiceTypesData;
type InvoiceTypesData = {
    /**
     * - Indicates the status of the invoice type.
     */
    status?: boolean;
    /**
     * - The unique identifier of the invoice type.
     */
    _id: string;
    /**
     * - The ID associated with the PDF type.
     */
    pdf_type_id: number;
    /**
     * - The name of the invoice type.
     */
    name: string;
    /**
     * - The supported document formats (e.g., A4, A6, POS).
     */
    format: string[];
    /**
     * - Version number of the document.
     */
    __v: number;
    /**
     * - Indicates if the invoice type is visible.
     */
    visibility: boolean;
    /**
     * - Specifies whether the invoice type is store-OS enabled.
     */
    store_os: boolean;
    /**
     * - The ISO country code associated with the
     * invoice type.
     */
    country_code: string;
};
/** @returns {InvoiceTypes} */
declare function InvoiceTypes(): InvoiceTypes;
type InvoiceTypes = {
    /**
     * - A list of invoice types.
     */
    data: InvoiceTypesData[];
    /**
     * - Indicates if the request was successful.
     */
    success: boolean;
};
/** @returns {ConversionRate} */
declare function ConversionRate(): ConversionRate;
type ConversionRate = {
    /**
     * - The base currency code.
     */
    base?: string;
    /**
     * - A key-value map of currency rates.
     */
    rates?: any;
    /**
     * - The timestamp when the rates were fetched.
     */
    timestamp?: number;
};
/** @returns {DeliveryPartnerDetail} */
declare function DeliveryPartnerDetail(): DeliveryPartnerDetail;
type DeliveryPartnerDetail = {
    /**
     * - The name of the delivery partner.
     */
    name?: string;
    /**
     * - The barcode for the AWB (Airway Bill) number.
     */
    awb_number_barcode?: string;
    /**
     * - The AWB number for tracking.
     */
    awb_number?: string;
    /**
     * - The origin location of the shipment.
     */
    origin?: string;
    /**
     * - The destination location of the shipment.
     */
    destination?: string;
    /**
     * - The e-way bill number, if applicable.
     */
    eway_bill_number?: string;
};
/** @returns {Image} */
declare function Image(): Image;
type Image = {
    /**
     * - URL of the sales channel logo.
     */
    sales_channel_logo?: string;
};
/** @returns {PaymentData} */
declare function PaymentData(): PaymentData;
type PaymentData = {
    /**
     * - Type of payment method used.
     */
    payment_type?: string;
    /**
     * - Amount of the transaction.
     */
    amount?: number;
    /**
     * - Date of the transaction.
     */
    date?: string;
    /**
     * - Unique identifier for the transaction.
     */
    transaction_id?: string;
    /**
     * - Time of the transaction.
     */
    time?: string;
    /**
     * - Mode of payment (e.g., credit card, UPI, net banking).
     */
    mode?: string;
    /**
     * - Name associated with the payment method.
     */
    name?: string;
    /**
     * - Additional metadata related to the payment.
     */
    meta?: any;
};
/** @returns {InvoiceDetail} */
declare function InvoiceDetail(): InvoiceDetail;
type InvoiceDetail = {
    /**
     * - Unique identifier for the invoice.
     */
    invoice_id?: string;
    /**
     * - Date when the invoice was generated.
     */
    invoice_date?: string;
    /**
     * - Invoice Reference Number (if applicable).
     */
    irn?: string;
    /**
     * - External order ID associated with the invoice.
     */
    external_order_id?: string;
    /**
     * - Identifier for the shipment linked to this invoice.
     */
    shipment_id?: string;
    /**
     * - Signed QR code for the invoice.
     */
    signed_qrcode?: string;
    /**
     * - UPI QR code for payment processing.
     */
    upi_qrcode?: string;
    /**
     * - Identifier for the device used to generate
     * the invoice.
     */
    device_id?: string;
    /**
     * - Invoice ID assigned by the marketplace.
     */
    marketplace_invoice_id?: string;
    /**
     * - Shipment ID assigned by the marketplace.
     */
    marketplace_shipment_id?: string;
    /**
     * - Order ID assigned by the sales channel.
     */
    channel_order_id?: string;
};
/** @returns {CompanyDetail} */
declare function CompanyDetail(): CompanyDetail;
type CompanyDetail = {
    /**
     * - The official name of the company.
     */
    name?: string;
    /**
     * - The physical street address of the company.
     */
    address?: string;
    /**
     * - The city where the company is located.
     */
    city?: string;
    /**
     * - The state or province where the company is located.
     */
    state?: string;
    /**
     * - The country where the company is based.
     */
    country?: string;
    /**
     * - The postal code for the company's location.
     */
    zip_code?: number;
    /**
     * - A code representing the state, often used
     * in official documents and forms.
     */
    state_code?: string;
    /**
     * - The country code.
     */
    country_code?: string;
    /**
     * - The Goods and Services Tax Identification
     * Number, unique to each business in India.
     */
    gstin?: string;
    /**
     * - The Permanent Account Number, unique to each
     * taxpayer in India.
     */
    pan?: string;
    /**
     * - The primary contact phone number for the company.
     */
    phone_no?: string;
    /**
     * - The Corporate Identification Number, unique to
     * each company registered in India.
     */
    cin?: string;
    /**
     * - The URL to the company's official website.
     */
    website_url?: string;
    /**
     * - The company's official email address.
     */
    email?: string;
    /**
     * - The display address of the company.
     */
    display_address?: string;
    /**
     * - The sector in which the company operates.
     */
    sector?: string;
    /**
     * - The provided phone number associated with the company.
     */
    phone?: any;
    /**
     * - The Tax Registration Number (TRN) of the company.
     */
    trn?: string;
    /**
     * - The Value Added Tax (VAT) number of the company.
     */
    vat?: string;
    /**
     * - The business country’s timezone.
     */
    business_country_timezone?: string;
    /**
     * - Represents the business
     * country currency details.
     */
    business_country_currency?: any;
    /**
     * - Additional metadata related to the company.
     */
    meta?: any;
};
/** @returns {StoreDetail} */
declare function StoreDetail(): StoreDetail;
type StoreDetail = {
    /**
     * - Name of the store
     */
    store_name?: string;
    /**
     * - Full address of the store
     */
    address?: string;
    /**
     * - City where the store is located
     */
    city?: string;
    /**
     * - State where the store is located
     */
    state?: string;
    /**
     * - Country where the store is located
     */
    country?: string;
    /**
     * - Country code of the store's location
     */
    country_code?: string;
    /**
     * - ZIP or postal code of the store's location
     */
    zip_code?: string;
    /**
     * - State code where the store is located
     */
    state_code?: string;
    /**
     * - GSTIN number for the store
     */
    gstin?: string;
    /**
     * - Formatted display address of the store
     */
    display_address?: string;
    /**
     * - Sector or industry category of the store
     */
    sector?: string;
    /**
     * - Unique identifier for the store
     */
    store_id?: string;
};
/** @returns {CustomerBillingDetail} */
declare function CustomerBillingDetail(): CustomerBillingDetail;
type CustomerBillingDetail = {
    /**
     * - Name of the customer
     */
    name?: string;
    /**
     * - Phone number of the customer
     */
    phone_no?: string;
    /**
     * - Billing address of the customer
     */
    address?: string;
    /**
     * - City of the customer's billing address
     */
    city?: string;
    /**
     * - State of the customer's billing address
     */
    state?: string;
    /**
     * - Country of the customer's billing address
     */
    country?: string;
    /**
     * - Country code of the billing address
     */
    country_code?: string;
    /**
     * - ZIP or postal code of the billing address
     */
    zip_code?: string;
    /**
     * - State code of the billing address
     */
    state_code?: string;
    /**
     * - GSTIN number of the customer
     */
    gstin?: string;
    /**
     * - Formatted display address of the customer
     */
    display_address?: string;
    /**
     * - Sector or industry related to the customer
     */
    sector?: string;
    /**
     * - Email address of the customer
     */
    email?: string;
};
/** @returns {CustomerShippingDetail} */
declare function CustomerShippingDetail(): CustomerShippingDetail;
type CustomerShippingDetail = {
    /**
     * - Name of the recipient
     */
    name?: string;
    /**
     * - Phone number of the recipient
     */
    phone_no?: string;
    /**
     * - Shipping address of the customer
     */
    address?: string;
    /**
     * - City of the shipping address
     */
    city?: string;
    /**
     * - State of the shipping address
     */
    state?: string;
    /**
     * - Country of the shipping address
     */
    country?: string;
    /**
     * - Country code of the shipping address
     */
    country_code?: string;
    /**
     * - ZIP or postal code of the shipping address
     */
    zip_code?: string;
    /**
     * - State code of the shipping address
     */
    state_code?: string;
    /**
     * - GSTIN number related to the shipping details
     */
    gstin?: string;
    /**
     * - Formatted display address of the recipient
     */
    display_address?: string;
    /**
     * - Sector or industry related to the shipping details
     */
    sector?: string;
};
/** @returns {ReturnDetail} */
declare function ReturnDetail(): ReturnDetail;
type ReturnDetail = {
    /**
     * - Return address
     */
    address?: string;
    /**
     * - City of the return address
     */
    city?: string;
    /**
     * - State of the return address
     */
    state?: string;
    /**
     * - Country of the return address
     */
    country?: string;
    /**
     * - Country code of the return address
     */
    country_code?: string;
    /**
     * - ZIP or postal code of the return address
     */
    zip_code?: string;
    /**
     * - State code of the return address
     */
    state_code?: string;
    /**
     * - GSTIN number related to the return details
     */
    gstin?: string;
    /**
     * - Formatted display address of the return location
     */
    display_address?: string;
    /**
     * - Sector or industry related to the return details
     */
    sector?: string;
};
/** @returns {Brand} */
declare function Brand(): Brand;
type Brand = {
    /**
     * - URL of the brand logo
     */
    logo?: string;
    /**
     * - Name of the brand
     */
    name?: string;
};
/** @returns {Cgst} */
declare function Cgst(): Cgst;
type Cgst = {
    /**
     * - CGST value
     */
    value?: number;
    /**
     * - CGST percentage
     */
    percent?: number;
};
/** @returns {Sgst} */
declare function Sgst(): Sgst;
type Sgst = {
    /**
     * - SGST value
     */
    value?: number;
    /**
     * - SGST percentage
     */
    percent?: number;
};
/** @returns {Igst} */
declare function Igst(): Igst;
type Igst = {
    /**
     * - IGST value
     */
    value?: number;
    /**
     * - IGST percentage
     */
    percent?: number;
};
/** @returns {Tax} */
declare function Tax(): Tax;
type Tax = {
    cgst?: Cgst;
    sgst?: Sgst;
    igst?: Igst;
};
/** @returns {ItemsProductTable} */
declare function ItemsProductTable(): ItemsProductTable;
type ItemsProductTable = {
    /**
     * - The name of the product.
     */
    name?: string;
    /**
     * - A unique identifier assigned to the
     * seller for this product.
     */
    seller_identifier?: string;
    /**
     * - The total price of the product including all
     * applicable charges.
     */
    total?: number;
    brand?: Brand;
    /**
     * - The Harmonized System Nomenclature (HSN) code
     * used for tax classification.
     */
    hsn_code?: string;
    /**
     * - The unique item code assigned to the product.
     */
    item_code?: string;
    /**
     * - The total number of units purchased for
     * this product.
     */
    total_units?: number;
    /**
     * - The size variant of the product.
     */
    size?: string;
    /**
     * - The Maximum Retail Price (MRP) of the product.
     */
    mrp?: number;
    /**
     * - The discount applied to the product.
     */
    discount?: number;
    /**
     * - The amount on which tax is calculated.
     */
    taxable_amount?: number;
    /**
     * - The total taxable amount
     * including all units of the product.
     */
    total_taxable_amount?: number;
    tax?: Tax;
    /**
     * - Additional metadata related to the product.
     */
    meta?: any;
    /**
     * - The country where the product was
     * manufactured.
     */
    country_of_origin?: string;
};
/** @returns {ProductTable} */
declare function ProductTable(): ProductTable;
type ProductTable = {
    /**
     * - The total number of different products in the order.
     */
    total_items?: number;
    /**
     * - A list of products included in the order.
     */
    products?: ItemsProductTable[];
    /**
     * - The final amount to be paid including all
     * charges and discounts.
     */
    grand_total?: number;
    /**
     * - The charges applicable for delivery
     * of the order.
     */
    delivery_charges?: number;
    /**
     * - A descriptive text about the
     * delivery charges.
     */
    delivery_charge_text?: string;
    /**
     * - The additional charges for Cash on
     * Delivery (COD) payments.
     */
    cod_charges?: number;
    /**
     * - Discounts applied by Fynd.
     */
    fynd_discounts?: number;
    /**
     * - The grand total amount represented in words.
     */
    total_in_words?: string;
    /**
     * - The price of any gift items included in the order.
     */
    gift_price?: number;
    /**
     * - The total quantity of all products in the order.
     */
    total_quantity?: number;
    /**
     * - The subtotal amount before additional charges.
     */
    sub_total?: number;
    /**
     * - The total discount applied to the order.
     */
    discount?: number;
    /**
     * - The promotional discount applied to the order.
     */
    promotion?: number;
    /**
     * - The coupon discount applied to the order.
     */
    coupon?: number;
    /**
     * - The reward-based discount applied to the order.
     */
    reward?: number;
    /**
     * - The rounding off value added or subtracted
     * to finalize the total amount.
     */
    round_off?: number;
    /**
     * - The total value of all products
     * before applying taxes and discounts.
     */
    total_value_of_goods?: number;
};
/** @returns {Taxes} */
declare function Taxes(): Taxes;
type Taxes = {
    /**
     * - The HSN code associated with the product for
     * tax purposes.
     */
    hsn_code?: string;
    tax?: Tax;
    /**
     * - The total tax value calculated for the item.
     */
    total_tax_value?: number;
};
/** @returns {TaxTable} */
declare function TaxTable(): TaxTable;
type TaxTable = {
    /**
     * - A list of tax details applied to different items.
     */
    taxes?: Taxes[];
    /**
     * - The total tax amount for the entire order.
     */
    total_tax?: number;
    /**
     * - The total tax amount represented in words.
     */
    tax_in_words?: string;
};
/** @returns {RegisteredCompanyDetail} */
declare function RegisteredCompanyDetail(): RegisteredCompanyDetail;
type RegisteredCompanyDetail = {
    /**
     * - The complete address of the company.
     */
    address?: string;
    /**
     * - The city where the company is located.
     */
    city?: string;
    /**
     * - The state where the company is registered.
     */
    state?: string;
    /**
     * - The country where the company operates.
     */
    country?: string;
    /**
     * - The country code of the registered company.
     */
    country_code?: string;
    /**
     * - The postal/zip code of the company’s location.
     */
    zip_code?: number;
    /**
     * - The state code for taxation purposes.
     */
    state_code?: string;
    /**
     * - The formatted display address of the company.
     */
    display_address?: string;
    /**
     * - The industry sector the company belongs to.
     */
    sector?: string;
};
/** @returns {Kwargs} */
declare function Kwargs(): Kwargs;
type Kwargs = {
    /**
     * - The value associated with the keyword argument.
     */
    value?: string;
};
/** @returns {ShipmentIdBarcodeGenerator} */
declare function ShipmentIdBarcodeGenerator(): ShipmentIdBarcodeGenerator;
type ShipmentIdBarcodeGenerator = {
    /**
     * - The method used to generate the barcode.
     */
    method?: string;
    kwargs?: Kwargs;
};
/** @returns {SignedQrcodeGenerator} */
declare function SignedQrcodeGenerator(): SignedQrcodeGenerator;
type SignedQrcodeGenerator = {
    /**
     * - The method used to generate the QR code.
     */
    method?: string;
    kwargs?: Kwargs;
};
/** @returns {KwargsUpiQrcode} */
declare function KwargsUpiQrcode(): KwargsUpiQrcode;
type KwargsUpiQrcode = {
    /**
     * - The data encoded in the QR code.
     */
    qr_data?: string;
    /**
     * - The URL associated with the QR code.
     */
    qr_url?: string;
};
/** @returns {UpiQrcodeGenerator} */
declare function UpiQrcodeGenerator(): UpiQrcodeGenerator;
type UpiQrcodeGenerator = {
    /**
     * - The method used to generate the UPI QR code.
     */
    method?: string;
    kwargs?: KwargsUpiQrcode;
};
/** @returns {DigitalsignatureGenerator} */
declare function DigitalsignatureGenerator(): DigitalsignatureGenerator;
type DigitalsignatureGenerator = {
    /**
     * - The method used to generate the digital signature.
     */
    method?: string;
    kwargs?: Kwargs;
};
/** @returns {KwargsAwbNumber} */
declare function KwargsAwbNumber(): KwargsAwbNumber;
type KwargsAwbNumber = {
    /**
     * - A list of objects containing AWB number details.
     */
    value?: any[];
};
/** @returns {AwbNumberLabelBarcodeGenerator} */
declare function AwbNumberLabelBarcodeGenerator(): AwbNumberLabelBarcodeGenerator;
type AwbNumberLabelBarcodeGenerator = {
    /**
     * - The method used to generate the AWB number label barcode.
     */
    method?: string;
    kwargs?: KwargsAwbNumber;
};
/** @returns {AwbNumberBarcodeGenerator} */
declare function AwbNumberBarcodeGenerator(): AwbNumberBarcodeGenerator;
type AwbNumberBarcodeGenerator = {
    /**
     * - The method used to generate the AWB number barcode.
     */
    method?: string;
    kwargs?: Kwargs;
};
/** @returns {MetaProperty} */
declare function MetaProperty(): MetaProperty;
type MetaProperty = {
    shipment_id_barcode_generator?: ShipmentIdBarcodeGenerator;
    signed_qrcode_generator?: SignedQrcodeGenerator;
    upi_qrcode_generator?: UpiQrcodeGenerator;
    digitalsignature_generator?: DigitalsignatureGenerator;
    awb_number_label_barcode_generator?: AwbNumberLabelBarcodeGenerator;
    awb_number_barcode_generator?: AwbNumberBarcodeGenerator;
};
/** @returns {Meta} */
declare function Meta(): Meta;
type Meta = {
    generator?: MetaProperty;
};
/** @returns {PdfPayloadDetails} */
declare function PdfPayloadDetails(): PdfPayloadDetails;
type PdfPayloadDetails = {
    /**
     * - Indicates if the shipment is an export.
     */
    is_export?: boolean;
    /**
     * - Indicates if the shipment is
     * specifically meant for export.
     */
    is_export_shipment?: boolean;
    /**
     * - The domain name associated with the
     * app processing the invoice.
     */
    app_domain_name?: string;
    /**
     * - The unique transaction ID related to the order.
     */
    txn_id?: string;
    /**
     * - The Unique Transaction Reference (UTR) for payment
     * processing.
     */
    utr?: string;
    /**
     * - The purchase order number for the transaction.
     */
    po_number?: string;
    /**
     * - The credit note ID associated with the
     * order, if applicable.
     */
    credit_note_id?: string;
    /**
     * - The current date when the invoice is generated.
     */
    current_date?: string;
    /**
     * - The total value of goods in the order.
     */
    total_value_of_goods?: number;
    /**
     * - Contains details about the
     * business-to-business (B2B) buyer.
     */
    b2b_buyer_details?: any;
    /**
     * - Metadata related to quick (Qwik) shipments.
     */
    is_qwik?: any;
    /**
     * - The type of order, e.g., B2B, B2C.
     */
    order_type?: string;
    conversion_rate?: ConversionRate;
    /**
     * - The currency code used for the transaction.
     */
    currency_code?: string;
    /**
     * - The unique identifier of the shipment.
     */
    shipment_id?: string;
    delivery_partner_detail?: DeliveryPartnerDetail;
    image?: Image;
    /**
     * - A list of payment details associated
     * with the transaction.
     */
    payments?: PaymentData[];
    invoice_detail?: InvoiceDetail;
    company_detail?: CompanyDetail;
    store_detail?: StoreDetail;
    customer_billing_detail?: CustomerBillingDetail;
    customer_shipping_detail?: CustomerShippingDetail;
    return_detail?: ReturnDetail;
    product_table?: ProductTable;
    tax_table?: TaxTable;
    /**
     * - A list of declaration statements
     * associated with the invoice.
     */
    declaration_texts?: string[];
    registered_company_detail?: RegisteredCompanyDetail;
    /**
     * - A disclaimer statement included in the invoice.
     */
    disclaimer?: string;
    meta?: Meta;
    /**
     * - Indicates whether the shipment is
     * self-shipped by the seller.
     */
    is_self_ship?: boolean;
    /**
     * - The mode of shipping, e.g., air, ground, sea.
     */
    mode?: string;
    /**
     * - Indicates whether the order is picked
     * up by the customer.
     */
    is_self_pickup?: boolean;
    /**
     * - The platform name where the order was placed.
     */
    platform_name?: string;
    /**
     * - The total amount to be
     * collected from the customer.
     */
    amount_to_be_collected?: number;
    /**
     * - The total amount paid by the customer.
     */
    amount_paid?: number;
    /**
     * - A list of waybills associated with the shipment.
     */
    waybills?: any[];
    /**
     * - The total number of items in the order.
     */
    total_items?: number;
    /**
     * - The URL of the brand logo associated with
     * the invoice.
     */
    brand_logo?: string;
    /**
     * - The barcode associated with the shipment ID.
     */
    shipment_id_barcode?: string;
    /**
     * - The signed QR code used for
     * authentication or verification.
     */
    signed_qrcode?: string;
    /**
     * - The UPI QR code for payment processing.
     */
    upi_qrcode?: string;
    /**
     * - The digital signature associated with
     * the document.
     */
    digitalsignature?: string;
    /**
     * - The barcode generated for the AWB number.
     */
    awb_number_barcode?: string;
    /**
     * - The unique identifier associated with the invoice
     * or shipment.
     */
    uid?: string;
};
/** @returns {DummyTemplateData} */
declare function DummyTemplateData(): DummyTemplateData;
type DummyTemplateData = {
    /**
     * - Unique identifier for the PDF payload.
     */
    _id?: string;
    /**
     * - Unique identifier for the invoice.
     */
    pdf_type_id?: number;
    payload: PdfPayloadDetails;
    /**
     * - Country code associated with the payload.
     */
    country_code?: string;
    /**
     * - Version number of the document.
     */
    __v?: number;
};
/** @returns {MapperDetails} */
declare function MapperDetails(): MapperDetails;
type MapperDetails = {
    /**
     * - Unique identifier for the mapping entry.
     */
    _id?: string;
    /**
     * - Identifier for the type of PDF.
     */
    pdf_type_id?: number;
    payload?: PdfPayloadDetails;
    /**
     * - Country code associated with the mapping entry.
     */
    country_code?: string;
    /**
     * - Version number of the mapping entry.
     */
    __v?: number;
};
/** @returns {PdfDataItemsDetails} */
declare function PdfDataItemsDetails(): PdfDataItemsDetails;
type PdfDataItemsDetails = {
    /**
     * - List of PDF payload data.
     */
    data: DummyTemplateData[];
    /**
     * - Indicates whether the operation was successful.
     */
    success: boolean;
};
/** @returns {PdfConfig} */
declare function PdfConfig(): PdfConfig;
type PdfConfig = {
    /**
     * - Invoice document format (A4, A6, POS).
     */
    format?: string;
    /**
     * - HTML template string for the document.
     */
    template?: string;
    /**
     * - Identifier for the type of PDF.
     */
    pdf_type_id?: number;
    /**
     * - Country code associated with the configuration.
     */
    country_code?: string;
    /**
     * - Indicates whether the fetched
     * template is the default template.
     */
    default_template?: boolean;
};
/** @returns {PdfConfigSuccessData} */
declare function PdfConfigSuccessData(): PdfConfigSuccessData;
type PdfConfigSuccessData = {
    /**
     * - Unique identifier for the PDF configuration.
     */
    _id?: string;
    /**
     * - Identifier for the company associated with
     * the configuration.
     */
    company_id?: number;
    /**
     * - Identifier for the application using
     * this configuration.
     */
    application_id?: string;
    /**
     * - Identifier for the type of PDF.
     */
    pdf_type_id?: number;
    /**
     * - Format of the invoice document.
     */
    format?: string;
    /**
     * - HTML template for the document.
     */
    template?: string;
    /**
     * - Version number of the configuration document.
     */
    __v?: number;
    /**
     * - Country code associated with the configuration.
     */
    country_code?: string;
};
/** @returns {PdfConfigSuccess} */
declare function PdfConfigSuccess(): PdfConfigSuccess;
type PdfConfigSuccess = {
    /**
     * - List of successful PDF configurations.
     */
    data?: PdfConfigSuccessData[];
    /**
     * - Indicates whether the operation was successful.
     */
    success?: boolean;
};
/** @returns {PdfConfigSaveSuccessData} */
declare function PdfConfigSaveSuccessData(): PdfConfigSaveSuccessData;
type PdfConfigSaveSuccessData = {
    /**
     * - Unique identifier for the saved configuration.
     */
    _id?: string;
    /**
     * - Identifier for the associated company.
     */
    company_id?: number;
    /**
     * - Identifier for the associated application.
     */
    application_id?: string;
    /**
     * - Identifier for the type of PDF.
     */
    pdf_type_id?: number;
    /**
     * - Format of the PDF document.
     */
    format?: string;
    /**
     * - HTML template used in the saved configuration.
     */
    template?: string;
    /**
     * - Version number of the saved configuration.
     */
    __v?: number;
};
/** @returns {PdfConfigSaveSuccess} */
declare function PdfConfigSaveSuccess(): PdfConfigSaveSuccess;
type PdfConfigSaveSuccess = {
    data?: PdfConfigSaveSuccessData;
    /**
     * - Indicates whether the operation was successful.
     */
    success?: boolean;
};
/** @returns {Document} */
declare function Document(): Document;
type Document = {
    /**
     * - Unique identifier for the document.
     */
    _id?: string;
    /**
     * - Identifier for the type of PDF.
     */
    pdf_type_id?: number;
    /**
     * - Format of the document.
     */
    format?: string;
    /**
     * - HTML template content.
     */
    template?: string;
    /**
     * - Country code associated with the document.
     */
    country_code?: string;
    /**
     * - Version number of the document.
     */
    __v?: number;
};
/** @returns {PaymentReceiptRequestBody} */
declare function PaymentReceiptRequestBody(): PaymentReceiptRequestBody;
type PaymentReceiptRequestBody = {
    payload?: PaymentReceiptPayload;
    meta?: PaymentReceiptMeta;
};
/** @returns {PaymentReceiptOrderDetails} */
declare function PaymentReceiptOrderDetails(): PaymentReceiptOrderDetails;
type PaymentReceiptOrderDetails = {
    /**
     * - Unique order identifier.
     */
    jiomart_order_id?: string;
    /**
     * - Total number of items in the order.
     */
    total_items?: number;
    /**
     * - Final amount for the order.
     */
    final_amount?: number;
    /**
     * - Final amount represented in words.
     */
    final_amount_in_words?: string;
    /**
     * - Order creation date.
     */
    order_created_date?: string;
    /**
     * - Order creation time.
     */
    order_created_time?: string;
    /**
     * - Unique PRM identifier.
     */
    prm_id?: string;
    /**
     * - Receipt number for the transaction.
     */
    receipt_no?: string;
    taxes?: PaymentReceiptTaxes;
};
/** @returns {PaymentReceiptCustomerDetails} */
declare function PaymentReceiptCustomerDetails(): PaymentReceiptCustomerDetails;
type PaymentReceiptCustomerDetails = {
    /**
     * - Unique identifier for the customer.
     */
    id?: string;
    /**
     * - Customer's email address.
     */
    email_id?: string;
    /**
     * - Customer's last name.
     */
    last_name?: string;
    /**
     * - Customer's first name.
     */
    first_name?: string;
    /**
     * - Customer's mobile number.
     */
    mobile_number?: string;
};
/** @returns {PaymentReceiptPayments} */
declare function PaymentReceiptPayments(): PaymentReceiptPayments;
type PaymentReceiptPayments = {
    /**
     * - A description of the payment transaction.
     */
    payment_desc?: string;
    /**
     * - The date and time when the transaction was made.
     */
    txn_date?: string;
};
/** @returns {PaymentReceiptFormat} */
declare function PaymentReceiptFormat(): PaymentReceiptFormat;
type PaymentReceiptFormat = {
    /**
     * - A list of formats available for
     * generating the payment receipt.
     */
    payment_receipt?: string[];
};
/** @returns {PaymentReceiptService} */
declare function PaymentReceiptService(): PaymentReceiptService;
type PaymentReceiptService = {
    /**
     * - The name of the service handling the payment receipt.
     */
    name?: string;
};
/** @returns {PaymentReceiptTaxes} */
declare function PaymentReceiptTaxes(): PaymentReceiptTaxes;
type PaymentReceiptTaxes = {
    /**
     * - The GST Identification Number (GSTIN) associated
     * with the company.
     */
    gstin?: string;
    /**
     * - The Permanent Account Number (PAN) of the
     * company or individual.
     */
    pancard?: string;
};
/** @returns {PaymentReceiptPayload} */
declare function PaymentReceiptPayload(): PaymentReceiptPayload;
type PaymentReceiptPayload = {
    /**
     * - A unique identifier for the payment receipt.
     */
    uid?: string;
    order_detail?: PaymentReceiptOrderDetails;
    customer_detail?: PaymentReceiptCustomerDetails;
    /**
     * - A list of payment
     * transactions included in the receipt.
     */
    payments?: PaymentReceiptPayments[];
};
/** @returns {PaymentReceiptMeta} */
declare function PaymentReceiptMeta(): PaymentReceiptMeta;
type PaymentReceiptMeta = {
    /**
     * - Specifies the type of job processing the
     * payment receipt.
     */
    job_type?: string;
    /**
     * - The action performed in relation to the payment receipt.
     */
    action?: string;
    /**
     * - Additional event details associated with the
     * receipt processing.
     */
    event?: any;
    /**
     * - The unique identifier of the
     * organization issuing the receipt.
     */
    organizaton_id?: string;
    /**
     * - The numeric identifier of the company
     * handling the payment.
     */
    company_id?: number;
    /**
     * - A list of application identifiers
     * linked to the transaction.
     */
    application_id?: string[];
    format?: PaymentReceiptFormat;
    /**
     * - A list of trace identifiers for tracking
     * the transaction.
     */
    trace_id?: string[];
    /**
     * - The timestamp (in epoch format) when
     * the receipt was created.
     */
    created_timestamp?: number;
    service?: PaymentReceiptService;
    /**
     * - Additional trace information related
     * to the event.
     */
    event_trace_info?: any;
    /**
     * - A unique trace identifier for debugging or
     * tracking purposes.
     */
    trace?: string;
};
/** @returns {ExtensionSlug} */
declare function ExtensionSlug(): ExtensionSlug;
type ExtensionSlug = {
    /**
     * - A unique slug identifier for the extension.
     */
    extension_slug?: string;
};
