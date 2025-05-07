const Joi = require("joi");

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

class FileStoragePlatformModel {
  /** @returns {PdfTypeByIdDetails} */
  static PdfTypeByIdDetails() {
    return Joi.object({
      store_os: Joi.boolean(),
      country_code: Joi.string().allow(""),
      pdf_type_id: Joi.number(),
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      format: Joi.array().items(Joi.string().allow("")),
      name: Joi.string().allow(""),
      visibility: Joi.boolean(),
    });
  }

  /** @returns {PdfDefaultTemplateById} */
  static PdfDefaultTemplateById() {
    return Joi.object({
      _id: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      format: Joi.string().allow(""),
      pdf_type_id: Joi.number(),
      __v: Joi.number(),
      template: Joi.string().allow(""),
    });
  }

  /** @returns {PdfDefaultTemplateSuccess} */
  static PdfDefaultTemplateSuccess() {
    return Joi.object({
      data: Joi.array().items(FileStoragePlatformModel.Document()),
      success: Joi.boolean(),
    });
  }

  /** @returns {FailedBrowseFilesResult} */
  static FailedBrowseFilesResult() {
    return Joi.object({
      message: Joi.string().allow("").required(),
    });
  }

  /** @returns {CDN} */
  static CDN() {
    return Joi.object({
      url: Joi.string().allow("").required(),
      absolute_url: Joi.string().allow("").required(),
      relative_url: Joi.string().allow("").required(),
    });
  }

  /** @returns {Upload} */
  static Upload() {
    return Joi.object({
      expiry: Joi.number().required(),
      url: Joi.string().allow("").required(),
    });
  }

  /** @returns {FileUpload} */
  static FileUpload() {
    return Joi.object({
      file_name: Joi.string().allow("").required(),
      file_path: Joi.string().allow("").required(),
      content_type: Joi.string().allow("").required(),
      method: Joi.string().allow(""),
      namespace: Joi.string().allow("").required(),
      operation: Joi.string().allow("").required(),
      size: Joi.number().required(),
      upload: FileStoragePlatformModel.Upload().required(),
      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {FileUploadStart} */
  static FileUploadStart() {
    return Joi.object({
      file_name: Joi.string().allow("").required(),
      content_type: Joi.string().allow("").required(),
      size: Joi.number().required(),
      tags: Joi.array().items(Joi.string().allow("")),
      params: Joi.object().pattern(/\S/, Joi.any()),
      enc_key: Joi.string().allow(""),
    });
  }

  /** @returns {CreatedBy} */
  static CreatedBy() {
    return Joi.object({
      username: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
    });
  }

  /** @returns {FileUploadComplete} */
  static FileUploadComplete() {
    return Joi.object({
      _id: Joi.string().allow("").required(),
      file_name: Joi.string().allow("").required(),
      file_path: Joi.string().allow("").required(),
      content_type: Joi.string().allow("").required(),
      namespace: Joi.string().allow("").required(),
      operation: Joi.string().allow("").required(),
      company_id: Joi.number().required(),
      size: Joi.number().required(),
      upload: FileStoragePlatformModel.Upload().required(),
      cdn: FileStoragePlatformModel.CDN().required(),
      success: Joi.boolean().required(),
      tags: Joi.array().items(Joi.string().allow("")),
      created_on: Joi.string().allow("").required(),
      modified_on: Joi.string().allow("").required(),
      created_by: FileStoragePlatformModel.CreatedBy(),
    });
  }

  /** @returns {ProxyFileAccess} */
  static ProxyFileAccess() {
    return Joi.object({
      data: Joi.object().pattern(/\S/, Joi.any()),
      support: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {DestinationNamespace} */
  static DestinationNamespace() {
    return Joi.object({
      namespace: Joi.string().allow(""),
    });
  }

  /** @returns {CopyFiles} */
  static CopyFiles() {
    return Joi.object({
      urls: Joi.array().items(Joi.string().allow("")),
      destination: FileStoragePlatformModel.DestinationNamespace().required(),
    });
  }

  /** @returns {Urls} */
  static Urls() {
    return Joi.object({
      url: Joi.string().allow("").required(),
      signed_url: Joi.string().allow("").required(),
      expiry: Joi.number().required(),
    });
  }

  /** @returns {SignUrlResult} */
  static SignUrlResult() {
    return Joi.object({
      urls: Joi.array().items(FileStoragePlatformModel.Urls()).required(),
    });
  }

  /** @returns {EncryptionMapping} */
  static EncryptionMapping() {
    return Joi.object({
      enc_url: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {SignUrl} */
  static SignUrl() {
    return Joi.object({
      expiry: Joi.number().required(),
      urls: Joi.array().items(Joi.string().allow("")).required(),
      enc_url_mapping: Joi.array().items(
        FileStoragePlatformModel.EncryptionMapping()
      ),
    });
  }

  /** @returns {InvoiceTypesData} */
  static InvoiceTypesData() {
    return Joi.object({
      status: Joi.boolean(),
      _id: Joi.string().allow("").required(),
      pdf_type_id: Joi.number().required(),
      name: Joi.string().allow("").required(),
      format: Joi.array().items(Joi.string().allow("")).required(),
      __v: Joi.number().required(),
      visibility: Joi.boolean().required(),
      store_os: Joi.boolean().required(),
      country_code: Joi.string().allow("").required(),
    });
  }

  /** @returns {InvoiceTypes} */
  static InvoiceTypes() {
    return Joi.object({
      data: Joi.array()
        .items(FileStoragePlatformModel.InvoiceTypesData())
        .required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {ConversionRate} */
  static ConversionRate() {
    return Joi.object({
      base: Joi.string().allow(""),
      rates: Joi.object().pattern(/\S/, Joi.any()),
      timestamp: Joi.number(),
    });
  }

  /** @returns {DeliveryPartnerDetail} */
  static DeliveryPartnerDetail() {
    return Joi.object({
      name: Joi.string().allow(""),
      awb_number_barcode: Joi.string().allow(""),
      awb_number: Joi.string().allow(""),
      origin: Joi.string().allow(""),
      destination: Joi.string().allow(""),
      eway_bill_number: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {Image} */
  static Image() {
    return Joi.object({
      sales_channel_logo: Joi.string().allow(""),
    });
  }

  /** @returns {PaymentData} */
  static PaymentData() {
    return Joi.object({
      payment_type: Joi.string().allow(""),
      amount: Joi.number(),
      date: Joi.string().allow(""),
      transaction_id: Joi.string().allow(""),
      time: Joi.string().allow(""),
      mode: Joi.string().allow(""),
      name: Joi.string().allow(""),
      meta: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {InvoiceDetail} */
  static InvoiceDetail() {
    return Joi.object({
      invoice_id: Joi.string().allow(""),
      invoice_date: Joi.string().allow(""),
      irn: Joi.string().allow(""),
      external_order_id: Joi.string().allow(""),
      shipment_id: Joi.string().allow(""),
      signed_qrcode: Joi.string().allow(""),
      upi_qrcode: Joi.string().allow(""),
      device_id: Joi.string().allow(""),
      marketplace_invoice_id: Joi.string().allow(""),
      marketplace_shipment_id: Joi.string().allow(""),
      channel_order_id: Joi.string().allow(""),
    });
  }

  /** @returns {CompanyDetail} */
  static CompanyDetail() {
    return Joi.object({
      name: Joi.string().allow(""),
      address: Joi.string().allow(""),
      city: Joi.string().allow(""),
      state: Joi.string().allow(""),
      country: Joi.string().allow(""),
      zip_code: Joi.number(),
      state_code: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      gstin: Joi.string().allow("").allow(null),
      pan: Joi.string().allow("").allow(null),
      phone_no: Joi.string().allow("").allow(null),
      cin: Joi.string().allow(""),
      website_url: Joi.string().allow(""),
      email: Joi.string().allow(""),
      display_address: Joi.string().allow(""),
      sector: Joi.string().allow(""),
      phone: Joi.object().pattern(/\S/, Joi.any()),
      trn: Joi.string().allow(""),
      vat: Joi.string().allow(""),
      business_country_timezone: Joi.string().allow(""),
      business_country_currency: Joi.object().pattern(/\S/, Joi.any()),
      meta: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {StoreDetail} */
  static StoreDetail() {
    return Joi.object({
      store_name: Joi.string().allow(""),
      address: Joi.string().allow(""),
      city: Joi.string().allow(""),
      state: Joi.string().allow(""),
      country: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      zip_code: Joi.string().allow(""),
      state_code: Joi.string().allow(""),
      gstin: Joi.string().allow("").allow(null),
      display_address: Joi.string().allow(""),
      sector: Joi.string().allow(""),
      store_id: Joi.string().allow(""),
    });
  }

  /** @returns {CustomerBillingDetail} */
  static CustomerBillingDetail() {
    return Joi.object({
      name: Joi.string().allow(""),
      phone_no: Joi.string().allow(""),
      address: Joi.string().allow(""),
      city: Joi.string().allow(""),
      state: Joi.string().allow(""),
      country: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      zip_code: Joi.string().allow(""),
      state_code: Joi.string().allow(""),
      gstin: Joi.string().allow("").allow(null),
      display_address: Joi.string().allow(""),
      sector: Joi.string().allow(""),
      email: Joi.string().allow(""),
    });
  }

  /** @returns {CustomerShippingDetail} */
  static CustomerShippingDetail() {
    return Joi.object({
      name: Joi.string().allow(""),
      phone_no: Joi.string().allow(""),
      address: Joi.string().allow(""),
      city: Joi.string().allow(""),
      state: Joi.string().allow(""),
      country: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      zip_code: Joi.string().allow(""),
      state_code: Joi.string().allow(""),
      gstin: Joi.string().allow("").allow(null),
      display_address: Joi.string().allow(""),
      sector: Joi.string().allow(""),
    });
  }

  /** @returns {ReturnDetail} */
  static ReturnDetail() {
    return Joi.object({
      address: Joi.string().allow(""),
      city: Joi.string().allow(""),
      state: Joi.string().allow(""),
      country: Joi.string().allow(""),
      country_code: Joi.string().allow("").allow(null),
      zip_code: Joi.string().allow(""),
      state_code: Joi.string().allow(""),
      gstin: Joi.string().allow("").allow(null),
      display_address: Joi.string().allow(""),
      sector: Joi.string().allow(""),
    });
  }

  /** @returns {Brand} */
  static Brand() {
    return Joi.object({
      logo: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {Cgst} */
  static Cgst() {
    return Joi.object({
      value: Joi.number(),
      percent: Joi.number(),
    });
  }

  /** @returns {Sgst} */
  static Sgst() {
    return Joi.object({
      value: Joi.number(),
      percent: Joi.number(),
    });
  }

  /** @returns {Igst} */
  static Igst() {
    return Joi.object({
      value: Joi.number(),
      percent: Joi.number(),
    });
  }

  /** @returns {Tax} */
  static Tax() {
    return Joi.object({
      cgst: FileStoragePlatformModel.Cgst(),
      sgst: FileStoragePlatformModel.Sgst(),
      igst: FileStoragePlatformModel.Igst(),
    });
  }

  /** @returns {ItemsProductTable} */
  static ItemsProductTable() {
    return Joi.object({
      name: Joi.string().allow(""),
      seller_identifier: Joi.string().allow(""),
      total: Joi.number(),
      brand: FileStoragePlatformModel.Brand(),
      hsn_code: Joi.string().allow(""),
      item_code: Joi.string().allow(""),
      total_units: Joi.number(),
      size: Joi.string().allow(""),
      mrp: Joi.number(),
      discount: Joi.number(),
      taxable_amount: Joi.number(),
      total_taxable_amount: Joi.number(),
      tax: FileStoragePlatformModel.Tax(),
      meta: Joi.object().pattern(/\S/, Joi.any()),
      country_of_origin: Joi.string().allow(""),
    });
  }

  /** @returns {ProductTable} */
  static ProductTable() {
    return Joi.object({
      total_items: Joi.number(),
      products: Joi.array().items(FileStoragePlatformModel.ItemsProductTable()),
      grand_total: Joi.number(),
      delivery_charges: Joi.number(),
      delivery_charge_text: Joi.string().allow(""),
      cod_charges: Joi.number(),
      fynd_discounts: Joi.number(),
      total_in_words: Joi.string().allow(""),
      gift_price: Joi.number(),
      total_quantity: Joi.number(),
      sub_total: Joi.number(),
      discount: Joi.number(),
      promotion: Joi.number(),
      coupon: Joi.number(),
      reward: Joi.number(),
      round_off: Joi.number(),
      total_value_of_goods: Joi.number(),
    });
  }

  /** @returns {Taxes} */
  static Taxes() {
    return Joi.object({
      hsn_code: Joi.string().allow(""),
      tax: FileStoragePlatformModel.Tax(),
      total_tax_value: Joi.number(),
    });
  }

  /** @returns {TaxTable} */
  static TaxTable() {
    return Joi.object({
      taxes: Joi.array().items(FileStoragePlatformModel.Taxes()),
      total_tax: Joi.number(),
      tax_in_words: Joi.string().allow(""),
    });
  }

  /** @returns {RegisteredCompanyDetail} */
  static RegisteredCompanyDetail() {
    return Joi.object({
      address: Joi.string().allow(""),
      city: Joi.string().allow(""),
      state: Joi.string().allow(""),
      country: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      zip_code: Joi.number(),
      state_code: Joi.string().allow(""),
      display_address: Joi.string().allow(""),
      sector: Joi.string().allow(""),
    });
  }

  /** @returns {Kwargs} */
  static Kwargs() {
    return Joi.object({
      value: Joi.string().allow(""),
    });
  }

  /** @returns {ShipmentIdBarcodeGenerator} */
  static ShipmentIdBarcodeGenerator() {
    return Joi.object({
      method: Joi.string().allow(""),
      kwargs: FileStoragePlatformModel.Kwargs(),
    });
  }

  /** @returns {SignedQrcodeGenerator} */
  static SignedQrcodeGenerator() {
    return Joi.object({
      method: Joi.string().allow(""),
      kwargs: FileStoragePlatformModel.Kwargs(),
    });
  }

  /** @returns {KwargsUpiQrcode} */
  static KwargsUpiQrcode() {
    return Joi.object({
      qr_data: Joi.string().allow(""),
      qr_url: Joi.string().allow(""),
    });
  }

  /** @returns {UpiQrcodeGenerator} */
  static UpiQrcodeGenerator() {
    return Joi.object({
      method: Joi.string().allow(""),
      kwargs: FileStoragePlatformModel.KwargsUpiQrcode(),
    });
  }

  /** @returns {DigitalsignatureGenerator} */
  static DigitalsignatureGenerator() {
    return Joi.object({
      method: Joi.string().allow(""),
      kwargs: FileStoragePlatformModel.Kwargs(),
    });
  }

  /** @returns {KwargsAwbNumber} */
  static KwargsAwbNumber() {
    return Joi.object({
      value: Joi.array().items(Joi.any()),
    });
  }

  /** @returns {AwbNumberLabelBarcodeGenerator} */
  static AwbNumberLabelBarcodeGenerator() {
    return Joi.object({
      method: Joi.string().allow(""),
      kwargs: FileStoragePlatformModel.KwargsAwbNumber(),
    });
  }

  /** @returns {AwbNumberBarcodeGenerator} */
  static AwbNumberBarcodeGenerator() {
    return Joi.object({
      method: Joi.string().allow(""),
      kwargs: FileStoragePlatformModel.Kwargs(),
    });
  }

  /** @returns {MetaProperty} */
  static MetaProperty() {
    return Joi.object({
      shipment_id_barcode_generator: FileStoragePlatformModel.ShipmentIdBarcodeGenerator(),
      signed_qrcode_generator: FileStoragePlatformModel.SignedQrcodeGenerator(),
      upi_qrcode_generator: FileStoragePlatformModel.UpiQrcodeGenerator(),
      digitalsignature_generator: FileStoragePlatformModel.DigitalsignatureGenerator(),
      awb_number_label_barcode_generator: FileStoragePlatformModel.AwbNumberLabelBarcodeGenerator(),
      awb_number_barcode_generator: FileStoragePlatformModel.AwbNumberBarcodeGenerator(),
    });
  }

  /** @returns {Meta} */
  static Meta() {
    return Joi.object({
      generator: FileStoragePlatformModel.MetaProperty(),
    });
  }

  /** @returns {PdfPayloadDetails} */
  static PdfPayloadDetails() {
    return Joi.object({
      is_export: Joi.boolean(),
      is_export_shipment: Joi.boolean(),
      app_domain_name: Joi.string().allow(""),
      txn_id: Joi.string().allow(""),
      utr: Joi.string().allow(""),
      po_number: Joi.string().allow(""),
      credit_note_id: Joi.string().allow("").allow(null),
      current_date: Joi.string().allow(""),
      total_value_of_goods: Joi.number(),
      b2b_buyer_details: Joi.object().pattern(/\S/, Joi.any()),
      is_qwik: Joi.object().pattern(/\S/, Joi.any()),
      order_type: Joi.string().allow(""),
      conversion_rate: FileStoragePlatformModel.ConversionRate(),
      currency_code: Joi.string().allow(""),
      shipment_id: Joi.string().allow(""),
      delivery_partner_detail: FileStoragePlatformModel.DeliveryPartnerDetail(),
      image: FileStoragePlatformModel.Image(),
      payments: Joi.array().items(FileStoragePlatformModel.PaymentData()),
      invoice_detail: FileStoragePlatformModel.InvoiceDetail(),
      company_detail: FileStoragePlatformModel.CompanyDetail(),
      store_detail: FileStoragePlatformModel.StoreDetail(),
      customer_billing_detail: FileStoragePlatformModel.CustomerBillingDetail(),
      customer_shipping_detail: FileStoragePlatformModel.CustomerShippingDetail(),
      return_detail: FileStoragePlatformModel.ReturnDetail(),
      product_table: FileStoragePlatformModel.ProductTable(),
      tax_table: FileStoragePlatformModel.TaxTable(),
      declaration_texts: Joi.array().items(Joi.string().allow("")),
      registered_company_detail: FileStoragePlatformModel.RegisteredCompanyDetail(),
      disclaimer: Joi.string().allow(""),
      meta: FileStoragePlatformModel.Meta(),
      is_self_ship: Joi.boolean(),
      mode: Joi.string().allow(""),
      is_self_pickup: Joi.boolean(),
      platform_name: Joi.string().allow(""),
      amount_to_be_collected: Joi.number(),
      amount_paid: Joi.number(),
      waybills: Joi.array().items(Joi.any()),
      total_items: Joi.number(),
      brand_logo: Joi.string().allow(""),
      shipment_id_barcode: Joi.string().allow(""),
      signed_qrcode: Joi.string().allow(""),
      upi_qrcode: Joi.string().allow(""),
      digitalsignature: Joi.string().allow(""),
      awb_number_barcode: Joi.string().allow(""),
      uid: Joi.string().allow(""),
    });
  }

  /** @returns {DummyTemplateData} */
  static DummyTemplateData() {
    return Joi.object({
      _id: Joi.string().allow(""),
      pdf_type_id: Joi.number(),
      payload: FileStoragePlatformModel.PdfPayloadDetails().required(),
      country_code: Joi.string().allow(""),
      __v: Joi.number(),
    });
  }

  /** @returns {MapperDetails} */
  static MapperDetails() {
    return Joi.object({
      _id: Joi.string().allow(""),
      pdf_type_id: Joi.number(),
      payload: FileStoragePlatformModel.PdfPayloadDetails(),
      country_code: Joi.string().allow(""),
      __v: Joi.number(),
    });
  }

  /** @returns {PdfDataItemsDetails} */
  static PdfDataItemsDetails() {
    return Joi.object({
      data: Joi.array()
        .items(FileStoragePlatformModel.DummyTemplateData())
        .required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {PdfConfig} */
  static PdfConfig() {
    return Joi.object({
      format: Joi.string().allow(""),
      template: Joi.string().allow(""),
      pdf_type_id: Joi.number(),
      country_code: Joi.string().allow(""),
      default_template: Joi.boolean(),
    });
  }

  /** @returns {PdfConfigSuccessData} */
  static PdfConfigSuccessData() {
    return Joi.object({
      _id: Joi.string().allow(""),
      company_id: Joi.number(),
      application_id: Joi.string().allow(""),
      pdf_type_id: Joi.number(),
      format: Joi.string().allow(""),
      template: Joi.string().allow(""),
      __v: Joi.number(),
      country_code: Joi.string().allow(""),
    });
  }

  /** @returns {PdfConfigSuccess} */
  static PdfConfigSuccess() {
    return Joi.object({
      data: Joi.array().items(FileStoragePlatformModel.PdfConfigSuccessData()),
      success: Joi.boolean(),
    });
  }

  /** @returns {PdfConfigSaveSuccessData} */
  static PdfConfigSaveSuccessData() {
    return Joi.object({
      _id: Joi.string().allow(""),
      company_id: Joi.number(),
      application_id: Joi.string().allow(""),
      pdf_type_id: Joi.number(),
      format: Joi.string().allow(""),
      template: Joi.string().allow(""),
      __v: Joi.number(),
    });
  }

  /** @returns {PdfConfigSaveSuccess} */
  static PdfConfigSaveSuccess() {
    return Joi.object({
      data: FileStoragePlatformModel.PdfConfigSaveSuccessData(),
      success: Joi.boolean(),
    });
  }

  /** @returns {Document} */
  static Document() {
    return Joi.object({
      _id: Joi.string().allow(""),
      pdf_type_id: Joi.number(),
      format: Joi.string().allow(""),
      template: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      __v: Joi.number(),
    });
  }

  /** @returns {PaymentReceiptRequestBody} */
  static PaymentReceiptRequestBody() {
    return Joi.object({
      payload: FileStoragePlatformModel.PaymentReceiptPayload(),
      meta: FileStoragePlatformModel.PaymentReceiptMeta(),
    });
  }

  /** @returns {PaymentReceiptOrderDetails} */
  static PaymentReceiptOrderDetails() {
    return Joi.object({
      jiomart_order_id: Joi.string().allow(""),
      total_items: Joi.number(),
      final_amount: Joi.number(),
      final_amount_in_words: Joi.string().allow(""),
      order_created_date: Joi.string().allow(""),
      order_created_time: Joi.string().allow(""),
      prm_id: Joi.string().allow(""),
      receipt_no: Joi.string().allow(""),
      taxes: FileStoragePlatformModel.PaymentReceiptTaxes(),
    });
  }

  /** @returns {PaymentReceiptCustomerDetails} */
  static PaymentReceiptCustomerDetails() {
    return Joi.object({
      id: Joi.string().allow(""),
      email_id: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
      first_name: Joi.string().allow(""),
      mobile_number: Joi.string().allow(""),
    });
  }

  /** @returns {PaymentReceiptPayments} */
  static PaymentReceiptPayments() {
    return Joi.object({
      payment_desc: Joi.string().allow(""),
      txn_date: Joi.string().allow(""),
    });
  }

  /** @returns {PaymentReceiptFormat} */
  static PaymentReceiptFormat() {
    return Joi.object({
      payment_receipt: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {PaymentReceiptService} */
  static PaymentReceiptService() {
    return Joi.object({
      name: Joi.string().allow(""),
    });
  }

  /** @returns {PaymentReceiptTaxes} */
  static PaymentReceiptTaxes() {
    return Joi.object({
      gstin: Joi.string().allow(""),
      pancard: Joi.string().allow(""),
    });
  }

  /** @returns {PaymentReceiptPayload} */
  static PaymentReceiptPayload() {
    return Joi.object({
      uid: Joi.string().allow(""),
      order_detail: FileStoragePlatformModel.PaymentReceiptOrderDetails(),
      customer_detail: FileStoragePlatformModel.PaymentReceiptCustomerDetails(),
      payments: Joi.array().items(
        FileStoragePlatformModel.PaymentReceiptPayments()
      ),
    });
  }

  /** @returns {PaymentReceiptMeta} */
  static PaymentReceiptMeta() {
    return Joi.object({
      job_type: Joi.string().allow(""),
      action: Joi.string().allow(""),
      event: Joi.object().pattern(/\S/, Joi.any()),
      organizaton_id: Joi.string().allow(""),
      company_id: Joi.number(),
      application_id: Joi.array().items(Joi.string().allow("")),
      format: FileStoragePlatformModel.PaymentReceiptFormat(),
      trace_id: Joi.array().items(Joi.string().allow("")),
      created_timestamp: Joi.number(),
      service: FileStoragePlatformModel.PaymentReceiptService(),
      event_trace_info: Joi.object().pattern(/\S/, Joi.any()),
      trace: Joi.string().allow(""),
    });
  }

  /** @returns {ExtensionSlug} */
  static ExtensionSlug() {
    return Joi.object({
      extension_slug: Joi.string().allow(""),
    });
  }
}
module.exports = FileStoragePlatformModel;
