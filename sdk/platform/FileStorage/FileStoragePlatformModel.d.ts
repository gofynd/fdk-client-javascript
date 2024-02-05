export = FileStoragePlatformModel;
/**
 * @typedef FailedResponse
 * @property {string} message
 */
/**
 * @typedef CDN
 * @property {string} url
 * @property {string} absolute_url
 * @property {string} relative_url
 */
/**
 * @typedef Upload
 * @property {number} expiry
 * @property {string} url
 */
/**
 * @typedef StartResponse
 * @property {string} file_name
 * @property {string} file_path
 * @property {string} content_type
 * @property {string} [method]
 * @property {string} namespace
 * @property {string} operation
 * @property {number} size
 * @property {Upload} upload
 * @property {CDN} cdn
 * @property {string[]} [tags]
 */
/**
 * @typedef StartRequest
 * @property {string} file_name
 * @property {string} content_type
 * @property {number} size
 * @property {string[]} [tags]
 * @property {Object} [params]
 */
/**
 * @typedef CreatedBy
 * @property {string} [username]
 */
/**
 * @typedef CompleteResponse
 * @property {string} _id
 * @property {string} file_name
 * @property {string} file_path
 * @property {string} content_type
 * @property {string} namespace
 * @property {string} operation
 * @property {number} company_id
 * @property {number} size
 * @property {Upload} upload
 * @property {CDN} cdn
 * @property {boolean} success
 * @property {string[]} [tags]
 * @property {string} created_on
 * @property {string} modified_on
 * @property {CreatedBy} [created_by]
 */
/**
 * @typedef ProxyResponse
 * @property {Object} [data]
 * @property {Object} [support]
 */
/**
 * @typedef DestinationNamespace
 * @property {string} [namespace]
 */
/**
 * @typedef CopyFiles
 * @property {string[]} [urls]
 * @property {DestinationNamespace} destination
 */
/**
 * @typedef Urls
 * @property {string} url
 * @property {string} signed_url
 * @property {number} expiry
 */
/**
 * @typedef SignUrlResponse
 * @property {Urls[]} urls
 */
/**
 * @typedef SignUrlRequest
 * @property {number} expiry
 * @property {string[]} urls
 */
/**
 * @typedef InvoiceTypesDataResponse
 * @property {boolean} [status]
 * @property {string} _id
 * @property {number} pdf_type_id
 * @property {string} name
 * @property {string[]} format
 * @property {number} __v
 * @property {boolean} visibility
 * @property {boolean} store_os
 * @property {string} country_code
 */
/**
 * @typedef InvoiceTypesResponse
 * @property {InvoiceTypesDataResponse[]} data
 * @property {boolean} success
 */
/**
 * @typedef ConversionRate
 * @property {string} [base]
 * @property {Object} [rates]
 * @property {number} [timestamp]
 */
/**
 * @typedef DeliveryPartnerDetail
 * @property {string} [name]
 * @property {string} [awb_number_barcode]
 * @property {string} [awb_number]
 * @property {string} [origin]
 * @property {string} [destination]
 * @property {string} [eway_bill_number]
 */
/**
 * @typedef Image
 * @property {string} [sales_channel_logo]
 */
/**
 * @typedef PaymentData
 * @property {string} [payment_type]
 * @property {number} [amount]
 * @property {string} [date]
 * @property {string} [transaction_id]
 * @property {string} [time]
 * @property {string} [mode]
 * @property {string} [name]
 * @property {Object} [meta]
 */
/**
 * @typedef InvoiceDetail
 * @property {string} [invoice_id]
 * @property {string} [invoice_date]
 * @property {string} [irn]
 * @property {string} [external_order_id]
 * @property {string} [shipment_id]
 * @property {string} [signed_qrcode]
 * @property {string} [upi_qrcode]
 * @property {string} [device_id]
 * @property {string} [marketplace_invoice_id]
 * @property {string} [marketplace_shipment_id]
 * @property {string} [channel_order_id]
 */
/**
 * @typedef CompanyDetail
 * @property {string} [name]
 * @property {string} [address]
 * @property {string} [city]
 * @property {string} [state]
 * @property {string} [country]
 * @property {number} [zip_code]
 * @property {string} [state_code]
 * @property {string} [country_code]
 * @property {string} [gstin]
 * @property {string} [pan]
 * @property {string} [phone_no]
 * @property {string} [cin]
 * @property {string} [website_url]
 * @property {string} [email]
 * @property {string} [display_address]
 * @property {string} [sector]
 * @property {Object} [phone]
 * @property {string} [trn]
 * @property {string} [vat]
 * @property {string} [business_country_timezone]
 * @property {Object} [business_country_currency]
 */
/**
 * @typedef StoreDetail
 * @property {string} [store_name]
 * @property {string} [address]
 * @property {string} [city]
 * @property {string} [state]
 * @property {string} [country]
 * @property {string} [country_code]
 * @property {string} [zip_code]
 * @property {string} [state_code]
 * @property {string} [gstin]
 * @property {string} [display_address]
 * @property {string} [sector]
 * @property {string} [store_id]
 */
/**
 * @typedef CustomerBillingDetail
 * @property {string} [name]
 * @property {string} [phone_no]
 * @property {string} [address]
 * @property {string} [city]
 * @property {string} [state]
 * @property {string} [country]
 * @property {string} [country_code]
 * @property {string} [zip_code]
 * @property {string} [state_code]
 * @property {string} [gstin]
 * @property {string} [display_address]
 * @property {string} [sector]
 * @property {string} [email]
 */
/**
 * @typedef CustomerShippingDetail
 * @property {string} [name]
 * @property {string} [phone_no]
 * @property {string} [address]
 * @property {string} [city]
 * @property {string} [state]
 * @property {string} [country]
 * @property {string} [country_code]
 * @property {string} [zip_code]
 * @property {string} [state_code]
 * @property {string} [gstin]
 * @property {string} [display_address]
 * @property {string} [sector]
 */
/**
 * @typedef ReturnDetail
 * @property {string} [address]
 * @property {string} [city]
 * @property {string} [state]
 * @property {string} [country]
 * @property {string} [country_code]
 * @property {string} [zip_code]
 * @property {string} [state_code]
 * @property {string} [gstin]
 * @property {string} [display_address]
 * @property {string} [sector]
 */
/**
 * @typedef Brand
 * @property {string} [logo]
 * @property {string} [name]
 */
/**
 * @typedef Cgst
 * @property {number} [value]
 * @property {number} [percent]
 */
/**
 * @typedef Sgst
 * @property {number} [value]
 * @property {number} [percent]
 */
/**
 * @typedef Igst
 * @property {number} [value]
 * @property {number} [percent]
 */
/**
 * @typedef Tax
 * @property {Cgst} [cgst]
 * @property {Sgst} [sgst]
 * @property {Igst} [igst]
 */
/**
 * @typedef ItemsProductTable
 * @property {string} [name]
 * @property {string} [seller_identifier]
 * @property {number} [total]
 * @property {Brand} [brand]
 * @property {string} [hsn_code]
 * @property {string} [item_code]
 * @property {number} [total_units]
 * @property {string} [size]
 * @property {number} [mrp]
 * @property {number} [discount]
 * @property {number} [taxable_amount]
 * @property {number} [total_taxable_amount]
 * @property {Tax} [tax]
 * @property {Object} [meta]
 * @property {string} [country_of_origin]
 */
/**
 * @typedef ProductTable
 * @property {number} [total_items]
 * @property {ItemsProductTable[]} [products]
 * @property {number} [grand_total]
 * @property {number} [delivery_charges]
 * @property {string} [delivery_charge_text]
 * @property {number} [cod_charges]
 * @property {number} [fynd_discounts]
 * @property {string} [total_in_words]
 * @property {number} [gift_price]
 * @property {number} [total_quantity]
 * @property {number} [sub_total]
 * @property {number} [discount]
 * @property {number} [promotion]
 * @property {number} [coupon]
 * @property {number} [reward]
 * @property {number} [round_off]
 * @property {number} [total_value_of_goods]
 */
/**
 * @typedef Taxes
 * @property {string} [hsn_code]
 * @property {Tax} [tax]
 * @property {number} [total_tax_value]
 */
/**
 * @typedef TaxTable
 * @property {Taxes[]} [taxes]
 * @property {number} [total_tax]
 * @property {string} [tax_in_words]
 */
/**
 * @typedef RegisteredCompanyDetail
 * @property {string} [address]
 * @property {string} [city]
 * @property {string} [state]
 * @property {string} [country]
 * @property {string} [country_code]
 * @property {number} [zip_code]
 * @property {string} [state_code]
 * @property {string} [display_address]
 * @property {string} [sector]
 */
/**
 * @typedef Kwargs
 * @property {string} [value]
 */
/**
 * @typedef ShipmentIdBarcodeGenerator
 * @property {string} [method]
 * @property {Kwargs} [kwargs]
 */
/**
 * @typedef SignedQrcodeGenerator
 * @property {string} [method]
 * @property {Kwargs} [kwargs]
 */
/**
 * @typedef KwargsUpiQrcode
 * @property {string} [qr_data]
 * @property {string} [qr_url]
 */
/**
 * @typedef UpiQrcodeGenerator
 * @property {string} [method]
 * @property {KwargsUpiQrcode} [kwargs]
 */
/**
 * @typedef DigitalsignatureGenerator
 * @property {string} [method]
 * @property {Kwargs} [kwargs]
 */
/**
 * @typedef KwargsAwbNumber
 * @property {Object[]} [value]
 */
/**
 * @typedef AwbNumberLabelBarcodeGenerator
 * @property {string} [method]
 * @property {KwargsAwbNumber} [kwargs]
 */
/**
 * @typedef AwbNumberBarcodeGenerator
 * @property {string} [method]
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
 * @typedef DummyTemplateDataPayload
 * @property {boolean} [is_export]
 * @property {boolean} [is_export_shipment]
 * @property {string} [app_domain_name]
 * @property {string} [txn_id]
 * @property {string} [utr]
 * @property {string} [po_number]
 * @property {string} [credit_note_id]
 * @property {string} [current_date]
 * @property {number} [total_value_of_goods]
 * @property {Object} [b2b_buyer_details]
 * @property {Object} [is_qwik]
 * @property {string} [order_type]
 * @property {ConversionRate} [conversion_rate]
 * @property {string} [currency_code]
 * @property {string} [shipment_id]
 * @property {DeliveryPartnerDetail} [delivery_partner_detail]
 * @property {Image} [image]
 * @property {PaymentData[]} [payments]
 * @property {InvoiceDetail} [invoice_detail]
 * @property {CompanyDetail} [company_detail]
 * @property {StoreDetail} [store_detail]
 * @property {CustomerBillingDetail} [customer_billing_detail]
 * @property {CustomerShippingDetail} [customer_shipping_detail]
 * @property {ReturnDetail} [return_detail]
 * @property {ProductTable} [product_table]
 * @property {TaxTable} [tax_table]
 * @property {string[]} [declaration_texts]
 * @property {RegisteredCompanyDetail} [registered_company_detail]
 * @property {string} [disclaimer]
 * @property {Meta} [meta]
 * @property {boolean} [is_self_ship]
 * @property {string} [mode]
 * @property {boolean} [is_self_pickup]
 * @property {string} [platform_name]
 * @property {number} [amount_to_be_collected]
 * @property {number} [amount_paid]
 * @property {Object[]} [waybills]
 * @property {number} [total_items]
 * @property {string} [brand_logo]
 * @property {string} [shipment_id_barcode]
 * @property {string} [signed_qrcode]
 * @property {string} [upi_qrcode]
 * @property {string} [digitalsignature]
 * @property {string} [awb_number_barcode]
 * @property {string} [uid]
 */
/**
 * @typedef DummyTemplateData
 * @property {string} [_id]
 * @property {number} [pdf_type_id]
 * @property {DummyTemplateDataPayload} payload
 * @property {string} [country_code]
 * @property {number} [__v]
 */
/**
 * @typedef DummyTemplateDataItems
 * @property {DummyTemplateData[]} data
 * @property {boolean} success
 */
/**
 * @typedef PdfConfig
 * @property {string} [format] - This is invoice document format such as A4, A6, POS
 * @property {string} [template] - This is html template string
 * @property {number} [pdf_type_id]
 */
/**
 * @typedef PdfConfigSuccessData
 * @property {string} [_id]
 * @property {number} [company_id]
 * @property {string} [application_id]
 * @property {number} [pdf_type_id]
 * @property {string} [format]
 * @property {string} [template]
 * @property {number} [__v]
 * @property {string} [country_code]
 */
/**
 * @typedef PdfConfigSuccess
 * @property {PdfConfigSuccessData[]} [data]
 * @property {boolean} [success]
 */
/**
 * @typedef PdfConfigSaveSuccessData
 * @property {string} [_id]
 * @property {number} [company_id]
 * @property {string} [application_id]
 * @property {number} [pdf_type_id]
 * @property {string} [format]
 * @property {string} [template]
 * @property {number} [__v]
 */
/**
 * @typedef PdfConfigSaveSuccess
 * @property {PdfConfigSaveSuccessData} [data]
 * @property {boolean} [success]
 */
/**
 * @typedef PdfDefaultTemplateSuccess
 * @property {Document[]} [data]
 * @property {boolean} [success] - Indicates if the request was successful.
 */
/**
 * @typedef Document
 * @property {string} [_id]
 * @property {number} [pdf_type_id]
 * @property {string} [format]
 * @property {string} [template]
 * @property {string} [country_code]
 * @property {number} [__v]
 */
/**
 * @typedef PaymentReceiptRequestBody
 * @property {PaymentReceiptPayload} [payload]
 * @property {PaymentReceiptMeta} [meta]
 */
/**
 * @typedef PaymentReceiptOrderDetails
 * @property {string} [jiomart_order_id]
 * @property {number} [total_items]
 * @property {number} [final_amount]
 * @property {string} [final_amount_in_words]
 * @property {string} [order_created_date]
 * @property {string} [order_created_time]
 * @property {string} [prm_id]
 * @property {string} [receipt_no]
 * @property {PaymentReceiptTaxes} [taxes]
 */
/**
 * @typedef PaymentReceiptCustomerDetails
 * @property {string} [id]
 * @property {string} [email_id]
 * @property {string} [last_name]
 * @property {string} [first_name]
 * @property {string} [mobile_number]
 */
/**
 * @typedef PaymentReceiptPayments
 * @property {string} [payment_desc]
 * @property {string} [txn_date]
 */
/**
 * @typedef PaymentReceiptFormat
 * @property {string[]} [payment_receipt]
 */
/**
 * @typedef PaymentReceiptService
 * @property {string} [name]
 */
/**
 * @typedef PaymentReceiptTaxes
 * @property {string} [gstin]
 * @property {string} [pancard]
 */
/**
 * @typedef PaymentReceiptPayload
 * @property {string} [uid]
 * @property {PaymentReceiptOrderDetails} [order_detail]
 * @property {PaymentReceiptCustomerDetails} [customer_detail]
 * @property {PaymentReceiptPayments[]} [payments]
 */
/**
 * @typedef PaymentReceiptMeta
 * @property {string} [job_type]
 * @property {string} [action]
 * @property {Object} [event]
 * @property {string} [organizaton_id]
 * @property {number} [company_id]
 * @property {string[]} [application_id]
 * @property {PaymentReceiptFormat} [format]
 * @property {string[]} [trace_id]
 * @property {number} [created_timestamp]
 * @property {PaymentReceiptService} [service]
 * @property {Object} [event_trace_info]
 * @property {string} [trace]
 */
/**
 * @typedef ExtensionSlug
 * @property {string} [extension_slug]
 */
declare class FileStoragePlatformModel {
}
declare namespace FileStoragePlatformModel {
    export { FailedResponse, CDN, Upload, StartResponse, StartRequest, CreatedBy, CompleteResponse, ProxyResponse, DestinationNamespace, CopyFiles, Urls, SignUrlResponse, SignUrlRequest, InvoiceTypesDataResponse, InvoiceTypesResponse, ConversionRate, DeliveryPartnerDetail, Image, PaymentData, InvoiceDetail, CompanyDetail, StoreDetail, CustomerBillingDetail, CustomerShippingDetail, ReturnDetail, Brand, Cgst, Sgst, Igst, Tax, ItemsProductTable, ProductTable, Taxes, TaxTable, RegisteredCompanyDetail, Kwargs, ShipmentIdBarcodeGenerator, SignedQrcodeGenerator, KwargsUpiQrcode, UpiQrcodeGenerator, DigitalsignatureGenerator, KwargsAwbNumber, AwbNumberLabelBarcodeGenerator, AwbNumberBarcodeGenerator, MetaProperty, Meta, DummyTemplateDataPayload, DummyTemplateData, DummyTemplateDataItems, PdfConfig, PdfConfigSuccessData, PdfConfigSuccess, PdfConfigSaveSuccessData, PdfConfigSaveSuccess, PdfDefaultTemplateSuccess, Document, PaymentReceiptRequestBody, PaymentReceiptOrderDetails, PaymentReceiptCustomerDetails, PaymentReceiptPayments, PaymentReceiptFormat, PaymentReceiptService, PaymentReceiptTaxes, PaymentReceiptPayload, PaymentReceiptMeta, ExtensionSlug };
}
/** @returns {FailedResponse} */
declare function FailedResponse(): FailedResponse;
type FailedResponse = {
    message: string;
};
/** @returns {CDN} */
declare function CDN(): CDN;
type CDN = {
    url: string;
    absolute_url: string;
    relative_url: string;
};
/** @returns {Upload} */
declare function Upload(): Upload;
type Upload = {
    expiry: number;
    url: string;
};
/** @returns {StartResponse} */
declare function StartResponse(): StartResponse;
type StartResponse = {
    file_name: string;
    file_path: string;
    content_type: string;
    method?: string;
    namespace: string;
    operation: string;
    size: number;
    upload: Upload;
    cdn: CDN;
    tags?: string[];
};
/** @returns {StartRequest} */
declare function StartRequest(): StartRequest;
type StartRequest = {
    file_name: string;
    content_type: string;
    size: number;
    tags?: string[];
    params?: any;
};
/** @returns {CreatedBy} */
declare function CreatedBy(): CreatedBy;
type CreatedBy = {
    username?: string;
};
/** @returns {CompleteResponse} */
declare function CompleteResponse(): CompleteResponse;
type CompleteResponse = {
    _id: string;
    file_name: string;
    file_path: string;
    content_type: string;
    namespace: string;
    operation: string;
    company_id: number;
    size: number;
    upload: Upload;
    cdn: CDN;
    success: boolean;
    tags?: string[];
    created_on: string;
    modified_on: string;
    created_by?: CreatedBy;
};
/** @returns {ProxyResponse} */
declare function ProxyResponse(): ProxyResponse;
type ProxyResponse = {
    data?: any;
    support?: any;
};
/** @returns {DestinationNamespace} */
declare function DestinationNamespace(): DestinationNamespace;
type DestinationNamespace = {
    namespace?: string;
};
/** @returns {CopyFiles} */
declare function CopyFiles(): CopyFiles;
type CopyFiles = {
    urls?: string[];
    destination: DestinationNamespace;
};
/** @returns {Urls} */
declare function Urls(): Urls;
type Urls = {
    url: string;
    signed_url: string;
    expiry: number;
};
/** @returns {SignUrlResponse} */
declare function SignUrlResponse(): SignUrlResponse;
type SignUrlResponse = {
    urls: Urls[];
};
/** @returns {SignUrlRequest} */
declare function SignUrlRequest(): SignUrlRequest;
type SignUrlRequest = {
    expiry: number;
    urls: string[];
};
/** @returns {InvoiceTypesDataResponse} */
declare function InvoiceTypesDataResponse(): InvoiceTypesDataResponse;
type InvoiceTypesDataResponse = {
    status?: boolean;
    _id: string;
    pdf_type_id: number;
    name: string;
    format: string[];
    __v: number;
    visibility: boolean;
    store_os: boolean;
    country_code: string;
};
/** @returns {InvoiceTypesResponse} */
declare function InvoiceTypesResponse(): InvoiceTypesResponse;
type InvoiceTypesResponse = {
    data: InvoiceTypesDataResponse[];
    success: boolean;
};
/** @returns {ConversionRate} */
declare function ConversionRate(): ConversionRate;
type ConversionRate = {
    base?: string;
    rates?: any;
    timestamp?: number;
};
/** @returns {DeliveryPartnerDetail} */
declare function DeliveryPartnerDetail(): DeliveryPartnerDetail;
type DeliveryPartnerDetail = {
    name?: string;
    awb_number_barcode?: string;
    awb_number?: string;
    origin?: string;
    destination?: string;
    eway_bill_number?: string;
};
/** @returns {Image} */
declare function Image(): Image;
type Image = {
    sales_channel_logo?: string;
};
/** @returns {PaymentData} */
declare function PaymentData(): PaymentData;
type PaymentData = {
    payment_type?: string;
    amount?: number;
    date?: string;
    transaction_id?: string;
    time?: string;
    mode?: string;
    name?: string;
    meta?: any;
};
/** @returns {InvoiceDetail} */
declare function InvoiceDetail(): InvoiceDetail;
type InvoiceDetail = {
    invoice_id?: string;
    invoice_date?: string;
    irn?: string;
    external_order_id?: string;
    shipment_id?: string;
    signed_qrcode?: string;
    upi_qrcode?: string;
    device_id?: string;
    marketplace_invoice_id?: string;
    marketplace_shipment_id?: string;
    channel_order_id?: string;
};
/** @returns {CompanyDetail} */
declare function CompanyDetail(): CompanyDetail;
type CompanyDetail = {
    name?: string;
    address?: string;
    city?: string;
    state?: string;
    country?: string;
    zip_code?: number;
    state_code?: string;
    country_code?: string;
    gstin?: string;
    pan?: string;
    phone_no?: string;
    cin?: string;
    website_url?: string;
    email?: string;
    display_address?: string;
    sector?: string;
    phone?: any;
    trn?: string;
    vat?: string;
    business_country_timezone?: string;
    business_country_currency?: any;
};
/** @returns {StoreDetail} */
declare function StoreDetail(): StoreDetail;
type StoreDetail = {
    store_name?: string;
    address?: string;
    city?: string;
    state?: string;
    country?: string;
    country_code?: string;
    zip_code?: string;
    state_code?: string;
    gstin?: string;
    display_address?: string;
    sector?: string;
    store_id?: string;
};
/** @returns {CustomerBillingDetail} */
declare function CustomerBillingDetail(): CustomerBillingDetail;
type CustomerBillingDetail = {
    name?: string;
    phone_no?: string;
    address?: string;
    city?: string;
    state?: string;
    country?: string;
    country_code?: string;
    zip_code?: string;
    state_code?: string;
    gstin?: string;
    display_address?: string;
    sector?: string;
    email?: string;
};
/** @returns {CustomerShippingDetail} */
declare function CustomerShippingDetail(): CustomerShippingDetail;
type CustomerShippingDetail = {
    name?: string;
    phone_no?: string;
    address?: string;
    city?: string;
    state?: string;
    country?: string;
    country_code?: string;
    zip_code?: string;
    state_code?: string;
    gstin?: string;
    display_address?: string;
    sector?: string;
};
/** @returns {ReturnDetail} */
declare function ReturnDetail(): ReturnDetail;
type ReturnDetail = {
    address?: string;
    city?: string;
    state?: string;
    country?: string;
    country_code?: string;
    zip_code?: string;
    state_code?: string;
    gstin?: string;
    display_address?: string;
    sector?: string;
};
/** @returns {Brand} */
declare function Brand(): Brand;
type Brand = {
    logo?: string;
    name?: string;
};
/** @returns {Cgst} */
declare function Cgst(): Cgst;
type Cgst = {
    value?: number;
    percent?: number;
};
/** @returns {Sgst} */
declare function Sgst(): Sgst;
type Sgst = {
    value?: number;
    percent?: number;
};
/** @returns {Igst} */
declare function Igst(): Igst;
type Igst = {
    value?: number;
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
    name?: string;
    seller_identifier?: string;
    total?: number;
    brand?: Brand;
    hsn_code?: string;
    item_code?: string;
    total_units?: number;
    size?: string;
    mrp?: number;
    discount?: number;
    taxable_amount?: number;
    total_taxable_amount?: number;
    tax?: Tax;
    meta?: any;
    country_of_origin?: string;
};
/** @returns {ProductTable} */
declare function ProductTable(): ProductTable;
type ProductTable = {
    total_items?: number;
    products?: ItemsProductTable[];
    grand_total?: number;
    delivery_charges?: number;
    delivery_charge_text?: string;
    cod_charges?: number;
    fynd_discounts?: number;
    total_in_words?: string;
    gift_price?: number;
    total_quantity?: number;
    sub_total?: number;
    discount?: number;
    promotion?: number;
    coupon?: number;
    reward?: number;
    round_off?: number;
    total_value_of_goods?: number;
};
/** @returns {Taxes} */
declare function Taxes(): Taxes;
type Taxes = {
    hsn_code?: string;
    tax?: Tax;
    total_tax_value?: number;
};
/** @returns {TaxTable} */
declare function TaxTable(): TaxTable;
type TaxTable = {
    taxes?: Taxes[];
    total_tax?: number;
    tax_in_words?: string;
};
/** @returns {RegisteredCompanyDetail} */
declare function RegisteredCompanyDetail(): RegisteredCompanyDetail;
type RegisteredCompanyDetail = {
    address?: string;
    city?: string;
    state?: string;
    country?: string;
    country_code?: string;
    zip_code?: number;
    state_code?: string;
    display_address?: string;
    sector?: string;
};
/** @returns {Kwargs} */
declare function Kwargs(): Kwargs;
type Kwargs = {
    value?: string;
};
/** @returns {ShipmentIdBarcodeGenerator} */
declare function ShipmentIdBarcodeGenerator(): ShipmentIdBarcodeGenerator;
type ShipmentIdBarcodeGenerator = {
    method?: string;
    kwargs?: Kwargs;
};
/** @returns {SignedQrcodeGenerator} */
declare function SignedQrcodeGenerator(): SignedQrcodeGenerator;
type SignedQrcodeGenerator = {
    method?: string;
    kwargs?: Kwargs;
};
/** @returns {KwargsUpiQrcode} */
declare function KwargsUpiQrcode(): KwargsUpiQrcode;
type KwargsUpiQrcode = {
    qr_data?: string;
    qr_url?: string;
};
/** @returns {UpiQrcodeGenerator} */
declare function UpiQrcodeGenerator(): UpiQrcodeGenerator;
type UpiQrcodeGenerator = {
    method?: string;
    kwargs?: KwargsUpiQrcode;
};
/** @returns {DigitalsignatureGenerator} */
declare function DigitalsignatureGenerator(): DigitalsignatureGenerator;
type DigitalsignatureGenerator = {
    method?: string;
    kwargs?: Kwargs;
};
/** @returns {KwargsAwbNumber} */
declare function KwargsAwbNumber(): KwargsAwbNumber;
type KwargsAwbNumber = {
    value?: any[];
};
/** @returns {AwbNumberLabelBarcodeGenerator} */
declare function AwbNumberLabelBarcodeGenerator(): AwbNumberLabelBarcodeGenerator;
type AwbNumberLabelBarcodeGenerator = {
    method?: string;
    kwargs?: KwargsAwbNumber;
};
/** @returns {AwbNumberBarcodeGenerator} */
declare function AwbNumberBarcodeGenerator(): AwbNumberBarcodeGenerator;
type AwbNumberBarcodeGenerator = {
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
/** @returns {DummyTemplateDataPayload} */
declare function DummyTemplateDataPayload(): DummyTemplateDataPayload;
type DummyTemplateDataPayload = {
    is_export?: boolean;
    is_export_shipment?: boolean;
    app_domain_name?: string;
    txn_id?: string;
    utr?: string;
    po_number?: string;
    credit_note_id?: string;
    current_date?: string;
    total_value_of_goods?: number;
    b2b_buyer_details?: any;
    is_qwik?: any;
    order_type?: string;
    conversion_rate?: ConversionRate;
    currency_code?: string;
    shipment_id?: string;
    delivery_partner_detail?: DeliveryPartnerDetail;
    image?: Image;
    payments?: PaymentData[];
    invoice_detail?: InvoiceDetail;
    company_detail?: CompanyDetail;
    store_detail?: StoreDetail;
    customer_billing_detail?: CustomerBillingDetail;
    customer_shipping_detail?: CustomerShippingDetail;
    return_detail?: ReturnDetail;
    product_table?: ProductTable;
    tax_table?: TaxTable;
    declaration_texts?: string[];
    registered_company_detail?: RegisteredCompanyDetail;
    disclaimer?: string;
    meta?: Meta;
    is_self_ship?: boolean;
    mode?: string;
    is_self_pickup?: boolean;
    platform_name?: string;
    amount_to_be_collected?: number;
    amount_paid?: number;
    waybills?: any[];
    total_items?: number;
    brand_logo?: string;
    shipment_id_barcode?: string;
    signed_qrcode?: string;
    upi_qrcode?: string;
    digitalsignature?: string;
    awb_number_barcode?: string;
    uid?: string;
};
/** @returns {DummyTemplateData} */
declare function DummyTemplateData(): DummyTemplateData;
type DummyTemplateData = {
    _id?: string;
    pdf_type_id?: number;
    payload: DummyTemplateDataPayload;
    country_code?: string;
    __v?: number;
};
/** @returns {DummyTemplateDataItems} */
declare function DummyTemplateDataItems(): DummyTemplateDataItems;
type DummyTemplateDataItems = {
    data: DummyTemplateData[];
    success: boolean;
};
/** @returns {PdfConfig} */
declare function PdfConfig(): PdfConfig;
type PdfConfig = {
    /**
     * - This is invoice document format such as A4, A6, POS
     */
    format?: string;
    /**
     * - This is html template string
     */
    template?: string;
    pdf_type_id?: number;
};
/** @returns {PdfConfigSuccessData} */
declare function PdfConfigSuccessData(): PdfConfigSuccessData;
type PdfConfigSuccessData = {
    _id?: string;
    company_id?: number;
    application_id?: string;
    pdf_type_id?: number;
    format?: string;
    template?: string;
    __v?: number;
    country_code?: string;
};
/** @returns {PdfConfigSuccess} */
declare function PdfConfigSuccess(): PdfConfigSuccess;
type PdfConfigSuccess = {
    data?: PdfConfigSuccessData[];
    success?: boolean;
};
/** @returns {PdfConfigSaveSuccessData} */
declare function PdfConfigSaveSuccessData(): PdfConfigSaveSuccessData;
type PdfConfigSaveSuccessData = {
    _id?: string;
    company_id?: number;
    application_id?: string;
    pdf_type_id?: number;
    format?: string;
    template?: string;
    __v?: number;
};
/** @returns {PdfConfigSaveSuccess} */
declare function PdfConfigSaveSuccess(): PdfConfigSaveSuccess;
type PdfConfigSaveSuccess = {
    data?: PdfConfigSaveSuccessData;
    success?: boolean;
};
/** @returns {PdfDefaultTemplateSuccess} */
declare function PdfDefaultTemplateSuccess(): PdfDefaultTemplateSuccess;
type PdfDefaultTemplateSuccess = {
    data?: Document[];
    /**
     * - Indicates if the request was successful.
     */
    success?: boolean;
};
/** @returns {Document} */
declare function Document(): Document;
type Document = {
    _id?: string;
    pdf_type_id?: number;
    format?: string;
    template?: string;
    country_code?: string;
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
    jiomart_order_id?: string;
    total_items?: number;
    final_amount?: number;
    final_amount_in_words?: string;
    order_created_date?: string;
    order_created_time?: string;
    prm_id?: string;
    receipt_no?: string;
    taxes?: PaymentReceiptTaxes;
};
/** @returns {PaymentReceiptCustomerDetails} */
declare function PaymentReceiptCustomerDetails(): PaymentReceiptCustomerDetails;
type PaymentReceiptCustomerDetails = {
    id?: string;
    email_id?: string;
    last_name?: string;
    first_name?: string;
    mobile_number?: string;
};
/** @returns {PaymentReceiptPayments} */
declare function PaymentReceiptPayments(): PaymentReceiptPayments;
type PaymentReceiptPayments = {
    payment_desc?: string;
    txn_date?: string;
};
/** @returns {PaymentReceiptFormat} */
declare function PaymentReceiptFormat(): PaymentReceiptFormat;
type PaymentReceiptFormat = {
    payment_receipt?: string[];
};
/** @returns {PaymentReceiptService} */
declare function PaymentReceiptService(): PaymentReceiptService;
type PaymentReceiptService = {
    name?: string;
};
/** @returns {PaymentReceiptTaxes} */
declare function PaymentReceiptTaxes(): PaymentReceiptTaxes;
type PaymentReceiptTaxes = {
    gstin?: string;
    pancard?: string;
};
/** @returns {PaymentReceiptPayload} */
declare function PaymentReceiptPayload(): PaymentReceiptPayload;
type PaymentReceiptPayload = {
    uid?: string;
    order_detail?: PaymentReceiptOrderDetails;
    customer_detail?: PaymentReceiptCustomerDetails;
    payments?: PaymentReceiptPayments[];
};
/** @returns {PaymentReceiptMeta} */
declare function PaymentReceiptMeta(): PaymentReceiptMeta;
type PaymentReceiptMeta = {
    job_type?: string;
    action?: string;
    event?: any;
    organizaton_id?: string;
    company_id?: number;
    application_id?: string[];
    format?: PaymentReceiptFormat;
    trace_id?: string[];
    created_timestamp?: number;
    service?: PaymentReceiptService;
    event_trace_info?: any;
    trace?: string;
};
/** @returns {ExtensionSlug} */
declare function ExtensionSlug(): ExtensionSlug;
type ExtensionSlug = {
    extension_slug?: string;
};
