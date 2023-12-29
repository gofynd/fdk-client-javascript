export = FileStoragePlatformModel;
/**
 * @typedef AwbNumberLabelBarcodeGenerator
 * @property {KwargsAwbNumber} [kwargs]
 * @property {string} [method]
 */
/**
 * @typedef Brand
 * @property {string} [logo]
 * @property {string} [name]
 */
/**
 * @typedef CDN
 * @property {string} absolute_url
 * @property {string} relative_url
 * @property {string} url
 */
/**
 * @typedef Cgst
 * @property {number} [percent]
 * @property {number} [value]
 */
/**
 * @typedef CompanyDetail
 * @property {string} [address]
 * @property {string} [cin]
 * @property {string} [city]
 * @property {string} [country]
 * @property {string} [country_code]
 * @property {string} [email]
 * @property {string} [gstin]
 * @property {string} [name]
 * @property {string} [pan]
 * @property {string} [phone_no]
 * @property {string} [state]
 * @property {string} [state_code]
 * @property {string} [website_url]
 * @property {number} [zip_code]
 */
/**
 * @typedef CompleteResponse
 * @property {string} _id
 * @property {CDN} cdn
 * @property {number} company_id
 * @property {string} content_type
 * @property {CreatedBy} [created_by]
 * @property {string} created_on
 * @property {string} file_name
 * @property {string} file_path
 * @property {string} modified_on
 * @property {string} namespace
 * @property {string} operation
 * @property {number} size
 * @property {boolean} success
 * @property {string[]} [tags]
 * @property {Upload} upload
 */
/**
 * @typedef ConversionRate
 * @property {string} [base]
 * @property {Rates} [rates]
 * @property {number} [timestamp]
 */
/**
 * @typedef CopyFiles
 * @property {DestinationNamespace} destination
 * @property {string[]} [urls]
 */
/**
 * @typedef CreatedBy
 * @property {string} [username]
 */
/**
 * @typedef CustomerBillingDetail
 * @property {string} [address]
 * @property {string} [city]
 * @property {string} [country]
 * @property {string} [country_code]
 * @property {string} [gstin]
 * @property {string} [name]
 * @property {string} [phone_no]
 * @property {string} [state]
 * @property {string} [state_code]
 * @property {string} [zip_code]
 */
/**
 * @typedef CustomerShippingDetail
 * @property {string} [address]
 * @property {string} [city]
 * @property {string} [country]
 * @property {string} [country_code]
 * @property {string} [gstin]
 * @property {string} [name]
 * @property {string} [phone_no]
 * @property {string} [state]
 * @property {string} [state_code]
 * @property {string} [zip_code]
 */
/**
 * @typedef DeliveryPartnerDetail
 * @property {string} [awb_number]
 * @property {string} [awb_number_barcode]
 * @property {string} [eway_bill_number]
 * @property {string} [name]
 */
/**
 * @typedef DestinationNamespace
 * @property {string} [namespace]
 */
/**
 * @typedef DigitalsignatureGenerator
 * @property {Kwargs} [kwargs]
 * @property {string} [method]
 */
/**
 * @typedef Document
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {string} [country_code]
 * @property {string} [format]
 * @property {number} [pdf_type_id]
 * @property {string} [template]
 */
/**
 * @typedef DummyTemplateData
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {string} [country_code]
 * @property {DummyTemplateDataPayload} payload
 * @property {number} [pdf_type_id]
 */
/**
 * @typedef DummyTemplateDataItems
 * @property {DummyTemplateData[]} data
 * @property {boolean} success
 */
/**
 * @typedef DummyTemplateDataPayload
 * @property {number} [amount_paid]
 * @property {number} [amount_to_be_collected]
 * @property {string} [app_domain_name]
 * @property {string} [awb_number_barcode]
 * @property {string} [brand_logo]
 * @property {CompanyDetail} [company_detail]
 * @property {ConversionRate} [conversion_rate]
 * @property {string} [currency_code]
 * @property {CustomerBillingDetail} [customer_billing_detail]
 * @property {CustomerShippingDetail} [customer_shipping_detail]
 * @property {string[]} [declaration_texts]
 * @property {DeliveryPartnerDetail} [delivery_partner_detail]
 * @property {string} [digitalsignature]
 * @property {string} [disclaimer]
 * @property {Image} [image]
 * @property {InvoiceDetail} [invoice_detail]
 * @property {boolean} [is_export]
 * @property {boolean} [is_self_pickup]
 * @property {boolean} [is_self_ship]
 * @property {Meta} [meta]
 * @property {string} [mode]
 * @property {PaymentData[]} [payments]
 * @property {string} [platform_name]
 * @property {ProductTable} [product_table]
 * @property {RegisteredCompanyDetail} [registered_company_detail]
 * @property {ReturnDetail} [return_detail]
 * @property {string} [shipment_id]
 * @property {string} [shipment_id_barcode]
 * @property {string} [signed_qrcode]
 * @property {StoreDetail} [store_detail]
 * @property {TaxTable} [tax_table]
 * @property {number} [total_items]
 * @property {string} [uid]
 * @property {string} [upi_qrcode]
 * @property {Object[]} [waybills]
 */
/**
 * @typedef ExtensionSlug
 * @property {string} [extension_slug]
 */
/**
 * @typedef FailedResponse
 * @property {string} message
 */
/**
 * @typedef Igst
 * @property {number} [percent]
 * @property {number} [value]
 */
/**
 * @typedef Image
 * @property {string} [sales_channel_logo]
 */
/**
 * @typedef Inr
 * @property {string} [name]
 * @property {string} [sub_unit]
 * @property {string} [symbol]
 * @property {number} [value]
 */
/**
 * @typedef InvoiceDetail
 * @property {string} [external_order_id]
 * @property {string} [invoice_date]
 * @property {string} [invoice_id]
 * @property {string} [irn]
 * @property {string} [shipment_id]
 * @property {string} [signed_qrcode]
 * @property {string} [upi_qrcode]
 */
/**
 * @typedef InvoiceTypesDataResponse
 * @property {number} __v
 * @property {string} _id
 * @property {string} country_code
 * @property {string[]} format
 * @property {string} name
 * @property {number} pdf_type_id
 * @property {boolean} [status]
 * @property {boolean} visibility
 */
/**
 * @typedef InvoiceTypesResponse
 * @property {InvoiceTypesDataResponse[]} data
 * @property {boolean} success
 */
/**
 * @typedef ItemsProductTable
 * @property {Brand} [brand]
 * @property {number} [discount]
 * @property {string} [hsn_code]
 * @property {string} [item_code]
 * @property {number} [mrp]
 * @property {string} [name]
 * @property {string} [seller_identifier]
 * @property {string} [size]
 * @property {Tax} [tax]
 * @property {number} [taxable_amount]
 * @property {number} [total]
 * @property {number} [total_taxable_amount]
 * @property {number} [total_units]
 */
/**
 * @typedef Kwargs
 * @property {string} [value]
 */
/**
 * @typedef KwargsAwbNumber
 * @property {Object[]} [value]
 */
/**
 * @typedef KwargsUpiQrcode
 * @property {string} [qr_data]
 * @property {string} [qr_url]
 */
/**
 * @typedef Meta
 * @property {MetaProperty} [generator]
 */
/**
 * @typedef MetaProperty
 * @property {AwbNumberLabelBarcodeGenerator} [awb_number_label_barcode_generator]
 * @property {DigitalsignatureGenerator} [digitalsignature_generator]
 * @property {ShipmentIdBarcodeGenerator} [shipment_id_barcode_generator]
 * @property {SignedQrcodeGenerator} [signed_qrcode_generator]
 * @property {UpiQrcodeGenerator} [upi_qrcode_generator]
 */
/**
 * @typedef PaymentData
 * @property {number} [amount]
 * @property {string} [date]
 * @property {string} [payment_type]
 * @property {string} [transaction_id]
 */
/**
 * @typedef PaymentReceiptCustomerDetails
 * @property {string} [email_id]
 * @property {string} [first_name]
 * @property {string} [id]
 * @property {string} [last_name]
 * @property {string} [mobile_number]
 */
/**
 * @typedef PaymentReceiptFormat
 * @property {string[]} [payment_receipt]
 */
/**
 * @typedef PaymentReceiptMeta
 * @property {string} [action]
 * @property {string[]} [application_id]
 * @property {number} [company_id]
 * @property {number} [created_timestamp]
 * @property {Object} [event]
 * @property {Object} [event_trace_info]
 * @property {PaymentReceiptFormat} [format]
 * @property {string} [job_type]
 * @property {string} [organizaton_id]
 * @property {PaymentReceiptService} [service]
 * @property {string} [trace]
 * @property {string[]} [trace_id]
 */
/**
 * @typedef PaymentReceiptOrderDetails
 * @property {number} [final_amount]
 * @property {string} [final_amount_in_words]
 * @property {string} [jiomart_order_id]
 * @property {string} [order_created_date]
 * @property {string} [order_created_time]
 * @property {string} [prm_id]
 * @property {string} [receipt_no]
 * @property {PaymentReceiptTaxes} [taxes]
 * @property {number} [total_items]
 */
/**
 * @typedef PaymentReceiptPayload
 * @property {PaymentReceiptCustomerDetails} [customer_detail]
 * @property {PaymentReceiptOrderDetails} [order_detail]
 * @property {PaymentReceiptPayments[]} [payments]
 * @property {string} [uid]
 */
/**
 * @typedef PaymentReceiptPayments
 * @property {string} [payment_desc]
 * @property {string} [txn_date]
 */
/**
 * @typedef PaymentReceiptRequestBody
 * @property {PaymentReceiptMeta} [meta]
 * @property {PaymentReceiptPayload} [payload]
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
 * @typedef PdfConfig
 * @property {string} [format] - This is invoice document format such as A4, A6, POS
 * @property {number} [pdf_type_id]
 * @property {string} [template] - This is html template string
 */
/**
 * @typedef PdfConfigSaveSuccess
 * @property {PdfConfigSaveSuccessData} [data]
 * @property {boolean} [success]
 */
/**
 * @typedef PdfConfigSaveSuccessData
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {string} [application_id]
 * @property {number} [company_id]
 * @property {string} [format]
 * @property {number} [pdf_type_id]
 * @property {string} [template]
 */
/**
 * @typedef PdfConfigSuccess
 * @property {PdfConfigSuccessData[]} [data]
 * @property {boolean} [success]
 */
/**
 * @typedef PdfConfigSuccessData
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {string} [application_id]
 * @property {number} [company_id]
 * @property {string} [country_code]
 * @property {string} [format]
 * @property {number} [pdf_type_id]
 * @property {string} [template]
 */
/**
 * @typedef PdfDefaultTemplateSuccess
 * @property {Document[]} [data]
 * @property {boolean} [success] - Indicates if the request was successful.
 */
/**
 * @typedef ProductTable
 * @property {number} [cod_charges]
 * @property {string} [delivery_charge_text]
 * @property {number} [delivery_charges]
 * @property {number} [fynd_discounts]
 * @property {number} [grand_total]
 * @property {ItemsProductTable[]} [products]
 * @property {string} [total_in_words]
 * @property {number} [total_items]
 */
/**
 * @typedef Rates
 * @property {Inr} [inr]
 * @property {Usd} [usd]
 */
/**
 * @typedef RegisteredCompanyDetail
 * @property {string} [address]
 * @property {string} [city]
 * @property {string} [country]
 * @property {string} [country_code]
 * @property {string} [state]
 * @property {string} [state_code]
 * @property {number} [zip_code]
 */
/**
 * @typedef ReturnDetail
 * @property {string} [address]
 * @property {string} [city]
 * @property {string} [country]
 * @property {string} [country_code]
 * @property {string} [gstin]
 * @property {string} [state]
 * @property {string} [state_code]
 * @property {string} [zip_code]
 */
/**
 * @typedef Sgst
 * @property {number} [percent]
 * @property {number} [value]
 */
/**
 * @typedef ShipmentIdBarcodeGenerator
 * @property {Kwargs} [kwargs]
 * @property {string} [method]
 */
/**
 * @typedef SignedQrcodeGenerator
 * @property {Kwargs} [kwargs]
 * @property {string} [method]
 */
/**
 * @typedef SignUrlRequest
 * @property {number} expiry
 * @property {string[]} urls
 */
/**
 * @typedef SignUrlResponse
 * @property {Urls[]} urls
 */
/**
 * @typedef StartRequest
 * @property {string} content_type
 * @property {string} file_name
 * @property {Object} [params]
 * @property {number} size
 * @property {string[]} [tags]
 */
/**
 * @typedef StartResponse
 * @property {CDN} cdn
 * @property {string} content_type
 * @property {string} file_name
 * @property {string} file_path
 * @property {string} [method]
 * @property {string} namespace
 * @property {string} operation
 * @property {number} size
 * @property {string[]} [tags]
 * @property {Upload} upload
 */
/**
 * @typedef StoreDetail
 * @property {string} [address]
 * @property {string} [city]
 * @property {string} [country]
 * @property {string} [country_code]
 * @property {string} [gstin]
 * @property {string} [state]
 * @property {string} [state_code]
 * @property {string} [store_name]
 * @property {string} [zip_code]
 */
/**
 * @typedef Tax
 * @property {Cgst} [cgst]
 * @property {Igst} [igst]
 * @property {Sgst} [sgst]
 */
/**
 * @typedef Taxes
 * @property {string} [hsn_code]
 * @property {Tax} [tax]
 * @property {number} [total_tax_value]
 */
/**
 * @typedef TaxTable
 * @property {string} [tax_in_words]
 * @property {Taxes[]} [taxes]
 * @property {number} [total_tax]
 */
/**
 * @typedef UpiQrcodeGenerator
 * @property {KwargsUpiQrcode} [kwargs]
 * @property {string} [method]
 */
/**
 * @typedef Upload
 * @property {number} expiry
 * @property {string} url
 */
/**
 * @typedef Urls
 * @property {number} expiry
 * @property {string} signed_url
 * @property {string} url
 */
/**
 * @typedef Usd
 * @property {string} [name]
 * @property {string} [sub_unit]
 * @property {string} [symbol]
 * @property {number} [value]
 */
declare class FileStoragePlatformModel {
}
declare namespace FileStoragePlatformModel {
    export { AwbNumberLabelBarcodeGenerator, Brand, CDN, Cgst, CompanyDetail, CompleteResponse, ConversionRate, CopyFiles, CreatedBy, CustomerBillingDetail, CustomerShippingDetail, DeliveryPartnerDetail, DestinationNamespace, DigitalsignatureGenerator, Document, DummyTemplateData, DummyTemplateDataItems, DummyTemplateDataPayload, ExtensionSlug, FailedResponse, Igst, Image, Inr, InvoiceDetail, InvoiceTypesDataResponse, InvoiceTypesResponse, ItemsProductTable, Kwargs, KwargsAwbNumber, KwargsUpiQrcode, Meta, MetaProperty, PaymentData, PaymentReceiptCustomerDetails, PaymentReceiptFormat, PaymentReceiptMeta, PaymentReceiptOrderDetails, PaymentReceiptPayload, PaymentReceiptPayments, PaymentReceiptRequestBody, PaymentReceiptService, PaymentReceiptTaxes, PdfConfig, PdfConfigSaveSuccess, PdfConfigSaveSuccessData, PdfConfigSuccess, PdfConfigSuccessData, PdfDefaultTemplateSuccess, ProductTable, Rates, RegisteredCompanyDetail, ReturnDetail, Sgst, ShipmentIdBarcodeGenerator, SignedQrcodeGenerator, SignUrlRequest, SignUrlResponse, StartRequest, StartResponse, StoreDetail, Tax, Taxes, TaxTable, UpiQrcodeGenerator, Upload, Urls, Usd };
}
/** @returns {AwbNumberLabelBarcodeGenerator} */
declare function AwbNumberLabelBarcodeGenerator(): AwbNumberLabelBarcodeGenerator;
type AwbNumberLabelBarcodeGenerator = {
    kwargs?: KwargsAwbNumber;
    method?: string;
};
/** @returns {Brand} */
declare function Brand(): Brand;
type Brand = {
    logo?: string;
    name?: string;
};
/** @returns {CDN} */
declare function CDN(): CDN;
type CDN = {
    absolute_url: string;
    relative_url: string;
    url: string;
};
/** @returns {Cgst} */
declare function Cgst(): Cgst;
type Cgst = {
    percent?: number;
    value?: number;
};
/** @returns {CompanyDetail} */
declare function CompanyDetail(): CompanyDetail;
type CompanyDetail = {
    address?: string;
    cin?: string;
    city?: string;
    country?: string;
    country_code?: string;
    email?: string;
    gstin?: string;
    name?: string;
    pan?: string;
    phone_no?: string;
    state?: string;
    state_code?: string;
    website_url?: string;
    zip_code?: number;
};
/** @returns {CompleteResponse} */
declare function CompleteResponse(): CompleteResponse;
type CompleteResponse = {
    _id: string;
    cdn: CDN;
    company_id: number;
    content_type: string;
    created_by?: CreatedBy;
    created_on: string;
    file_name: string;
    file_path: string;
    modified_on: string;
    namespace: string;
    operation: string;
    size: number;
    success: boolean;
    tags?: string[];
    upload: Upload;
};
/** @returns {ConversionRate} */
declare function ConversionRate(): ConversionRate;
type ConversionRate = {
    base?: string;
    rates?: Rates;
    timestamp?: number;
};
/** @returns {CopyFiles} */
declare function CopyFiles(): CopyFiles;
type CopyFiles = {
    destination: DestinationNamespace;
    urls?: string[];
};
/** @returns {CreatedBy} */
declare function CreatedBy(): CreatedBy;
type CreatedBy = {
    username?: string;
};
/** @returns {CustomerBillingDetail} */
declare function CustomerBillingDetail(): CustomerBillingDetail;
type CustomerBillingDetail = {
    address?: string;
    city?: string;
    country?: string;
    country_code?: string;
    gstin?: string;
    name?: string;
    phone_no?: string;
    state?: string;
    state_code?: string;
    zip_code?: string;
};
/** @returns {CustomerShippingDetail} */
declare function CustomerShippingDetail(): CustomerShippingDetail;
type CustomerShippingDetail = {
    address?: string;
    city?: string;
    country?: string;
    country_code?: string;
    gstin?: string;
    name?: string;
    phone_no?: string;
    state?: string;
    state_code?: string;
    zip_code?: string;
};
/** @returns {DeliveryPartnerDetail} */
declare function DeliveryPartnerDetail(): DeliveryPartnerDetail;
type DeliveryPartnerDetail = {
    awb_number?: string;
    awb_number_barcode?: string;
    eway_bill_number?: string;
    name?: string;
};
/** @returns {DestinationNamespace} */
declare function DestinationNamespace(): DestinationNamespace;
type DestinationNamespace = {
    namespace?: string;
};
/** @returns {DigitalsignatureGenerator} */
declare function DigitalsignatureGenerator(): DigitalsignatureGenerator;
type DigitalsignatureGenerator = {
    kwargs?: Kwargs;
    method?: string;
};
/** @returns {Document} */
declare function Document(): Document;
type Document = {
    __v?: number;
    _id?: string;
    country_code?: string;
    format?: string;
    pdf_type_id?: number;
    template?: string;
};
/** @returns {DummyTemplateData} */
declare function DummyTemplateData(): DummyTemplateData;
type DummyTemplateData = {
    __v?: number;
    _id?: string;
    country_code?: string;
    payload: DummyTemplateDataPayload;
    pdf_type_id?: number;
};
/** @returns {DummyTemplateDataItems} */
declare function DummyTemplateDataItems(): DummyTemplateDataItems;
type DummyTemplateDataItems = {
    data: DummyTemplateData[];
    success: boolean;
};
/** @returns {DummyTemplateDataPayload} */
declare function DummyTemplateDataPayload(): DummyTemplateDataPayload;
type DummyTemplateDataPayload = {
    amount_paid?: number;
    amount_to_be_collected?: number;
    app_domain_name?: string;
    awb_number_barcode?: string;
    brand_logo?: string;
    company_detail?: CompanyDetail;
    conversion_rate?: ConversionRate;
    currency_code?: string;
    customer_billing_detail?: CustomerBillingDetail;
    customer_shipping_detail?: CustomerShippingDetail;
    declaration_texts?: string[];
    delivery_partner_detail?: DeliveryPartnerDetail;
    digitalsignature?: string;
    disclaimer?: string;
    image?: Image;
    invoice_detail?: InvoiceDetail;
    is_export?: boolean;
    is_self_pickup?: boolean;
    is_self_ship?: boolean;
    meta?: Meta;
    mode?: string;
    payments?: PaymentData[];
    platform_name?: string;
    product_table?: ProductTable;
    registered_company_detail?: RegisteredCompanyDetail;
    return_detail?: ReturnDetail;
    shipment_id?: string;
    shipment_id_barcode?: string;
    signed_qrcode?: string;
    store_detail?: StoreDetail;
    tax_table?: TaxTable;
    total_items?: number;
    uid?: string;
    upi_qrcode?: string;
    waybills?: any[];
};
/** @returns {ExtensionSlug} */
declare function ExtensionSlug(): ExtensionSlug;
type ExtensionSlug = {
    extension_slug?: string;
};
/** @returns {FailedResponse} */
declare function FailedResponse(): FailedResponse;
type FailedResponse = {
    message: string;
};
/** @returns {Igst} */
declare function Igst(): Igst;
type Igst = {
    percent?: number;
    value?: number;
};
/** @returns {Image} */
declare function Image(): Image;
type Image = {
    sales_channel_logo?: string;
};
/** @returns {Inr} */
declare function Inr(): Inr;
type Inr = {
    name?: string;
    sub_unit?: string;
    symbol?: string;
    value?: number;
};
/** @returns {InvoiceDetail} */
declare function InvoiceDetail(): InvoiceDetail;
type InvoiceDetail = {
    external_order_id?: string;
    invoice_date?: string;
    invoice_id?: string;
    irn?: string;
    shipment_id?: string;
    signed_qrcode?: string;
    upi_qrcode?: string;
};
/** @returns {InvoiceTypesDataResponse} */
declare function InvoiceTypesDataResponse(): InvoiceTypesDataResponse;
type InvoiceTypesDataResponse = {
    __v: number;
    _id: string;
    country_code: string;
    format: string[];
    name: string;
    pdf_type_id: number;
    status?: boolean;
    visibility: boolean;
};
/** @returns {InvoiceTypesResponse} */
declare function InvoiceTypesResponse(): InvoiceTypesResponse;
type InvoiceTypesResponse = {
    data: InvoiceTypesDataResponse[];
    success: boolean;
};
/** @returns {ItemsProductTable} */
declare function ItemsProductTable(): ItemsProductTable;
type ItemsProductTable = {
    brand?: Brand;
    discount?: number;
    hsn_code?: string;
    item_code?: string;
    mrp?: number;
    name?: string;
    seller_identifier?: string;
    size?: string;
    tax?: Tax;
    taxable_amount?: number;
    total?: number;
    total_taxable_amount?: number;
    total_units?: number;
};
/** @returns {Kwargs} */
declare function Kwargs(): Kwargs;
type Kwargs = {
    value?: string;
};
/** @returns {KwargsAwbNumber} */
declare function KwargsAwbNumber(): KwargsAwbNumber;
type KwargsAwbNumber = {
    value?: any[];
};
/** @returns {KwargsUpiQrcode} */
declare function KwargsUpiQrcode(): KwargsUpiQrcode;
type KwargsUpiQrcode = {
    qr_data?: string;
    qr_url?: string;
};
/** @returns {Meta} */
declare function Meta(): Meta;
type Meta = {
    generator?: MetaProperty;
};
/** @returns {MetaProperty} */
declare function MetaProperty(): MetaProperty;
type MetaProperty = {
    awb_number_label_barcode_generator?: AwbNumberLabelBarcodeGenerator;
    digitalsignature_generator?: DigitalsignatureGenerator;
    shipment_id_barcode_generator?: ShipmentIdBarcodeGenerator;
    signed_qrcode_generator?: SignedQrcodeGenerator;
    upi_qrcode_generator?: UpiQrcodeGenerator;
};
/** @returns {PaymentData} */
declare function PaymentData(): PaymentData;
type PaymentData = {
    amount?: number;
    date?: string;
    payment_type?: string;
    transaction_id?: string;
};
/** @returns {PaymentReceiptCustomerDetails} */
declare function PaymentReceiptCustomerDetails(): PaymentReceiptCustomerDetails;
type PaymentReceiptCustomerDetails = {
    email_id?: string;
    first_name?: string;
    id?: string;
    last_name?: string;
    mobile_number?: string;
};
/** @returns {PaymentReceiptFormat} */
declare function PaymentReceiptFormat(): PaymentReceiptFormat;
type PaymentReceiptFormat = {
    payment_receipt?: string[];
};
/** @returns {PaymentReceiptMeta} */
declare function PaymentReceiptMeta(): PaymentReceiptMeta;
type PaymentReceiptMeta = {
    action?: string;
    application_id?: string[];
    company_id?: number;
    created_timestamp?: number;
    event?: any;
    event_trace_info?: any;
    format?: PaymentReceiptFormat;
    job_type?: string;
    organizaton_id?: string;
    service?: PaymentReceiptService;
    trace?: string;
    trace_id?: string[];
};
/** @returns {PaymentReceiptOrderDetails} */
declare function PaymentReceiptOrderDetails(): PaymentReceiptOrderDetails;
type PaymentReceiptOrderDetails = {
    final_amount?: number;
    final_amount_in_words?: string;
    jiomart_order_id?: string;
    order_created_date?: string;
    order_created_time?: string;
    prm_id?: string;
    receipt_no?: string;
    taxes?: PaymentReceiptTaxes;
    total_items?: number;
};
/** @returns {PaymentReceiptPayload} */
declare function PaymentReceiptPayload(): PaymentReceiptPayload;
type PaymentReceiptPayload = {
    customer_detail?: PaymentReceiptCustomerDetails;
    order_detail?: PaymentReceiptOrderDetails;
    payments?: PaymentReceiptPayments[];
    uid?: string;
};
/** @returns {PaymentReceiptPayments} */
declare function PaymentReceiptPayments(): PaymentReceiptPayments;
type PaymentReceiptPayments = {
    payment_desc?: string;
    txn_date?: string;
};
/** @returns {PaymentReceiptRequestBody} */
declare function PaymentReceiptRequestBody(): PaymentReceiptRequestBody;
type PaymentReceiptRequestBody = {
    meta?: PaymentReceiptMeta;
    payload?: PaymentReceiptPayload;
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
/** @returns {PdfConfig} */
declare function PdfConfig(): PdfConfig;
type PdfConfig = {
    /**
     * - This is invoice document format such as A4, A6, POS
     */
    format?: string;
    pdf_type_id?: number;
    /**
     * - This is html template string
     */
    template?: string;
};
/** @returns {PdfConfigSaveSuccess} */
declare function PdfConfigSaveSuccess(): PdfConfigSaveSuccess;
type PdfConfigSaveSuccess = {
    data?: PdfConfigSaveSuccessData;
    success?: boolean;
};
/** @returns {PdfConfigSaveSuccessData} */
declare function PdfConfigSaveSuccessData(): PdfConfigSaveSuccessData;
type PdfConfigSaveSuccessData = {
    __v?: number;
    _id?: string;
    application_id?: string;
    company_id?: number;
    format?: string;
    pdf_type_id?: number;
    template?: string;
};
/** @returns {PdfConfigSuccess} */
declare function PdfConfigSuccess(): PdfConfigSuccess;
type PdfConfigSuccess = {
    data?: PdfConfigSuccessData[];
    success?: boolean;
};
/** @returns {PdfConfigSuccessData} */
declare function PdfConfigSuccessData(): PdfConfigSuccessData;
type PdfConfigSuccessData = {
    __v?: number;
    _id?: string;
    application_id?: string;
    company_id?: number;
    country_code?: string;
    format?: string;
    pdf_type_id?: number;
    template?: string;
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
/** @returns {ProductTable} */
declare function ProductTable(): ProductTable;
type ProductTable = {
    cod_charges?: number;
    delivery_charge_text?: string;
    delivery_charges?: number;
    fynd_discounts?: number;
    grand_total?: number;
    products?: ItemsProductTable[];
    total_in_words?: string;
    total_items?: number;
};
/** @returns {Rates} */
declare function Rates(): Rates;
type Rates = {
    inr?: Inr;
    usd?: Usd;
};
/** @returns {RegisteredCompanyDetail} */
declare function RegisteredCompanyDetail(): RegisteredCompanyDetail;
type RegisteredCompanyDetail = {
    address?: string;
    city?: string;
    country?: string;
    country_code?: string;
    state?: string;
    state_code?: string;
    zip_code?: number;
};
/** @returns {ReturnDetail} */
declare function ReturnDetail(): ReturnDetail;
type ReturnDetail = {
    address?: string;
    city?: string;
    country?: string;
    country_code?: string;
    gstin?: string;
    state?: string;
    state_code?: string;
    zip_code?: string;
};
/** @returns {Sgst} */
declare function Sgst(): Sgst;
type Sgst = {
    percent?: number;
    value?: number;
};
/** @returns {ShipmentIdBarcodeGenerator} */
declare function ShipmentIdBarcodeGenerator(): ShipmentIdBarcodeGenerator;
type ShipmentIdBarcodeGenerator = {
    kwargs?: Kwargs;
    method?: string;
};
/** @returns {SignedQrcodeGenerator} */
declare function SignedQrcodeGenerator(): SignedQrcodeGenerator;
type SignedQrcodeGenerator = {
    kwargs?: Kwargs;
    method?: string;
};
/** @returns {SignUrlRequest} */
declare function SignUrlRequest(): SignUrlRequest;
type SignUrlRequest = {
    expiry: number;
    urls: string[];
};
/** @returns {SignUrlResponse} */
declare function SignUrlResponse(): SignUrlResponse;
type SignUrlResponse = {
    urls: Urls[];
};
/** @returns {StartRequest} */
declare function StartRequest(): StartRequest;
type StartRequest = {
    content_type: string;
    file_name: string;
    params?: any;
    size: number;
    tags?: string[];
};
/** @returns {StartResponse} */
declare function StartResponse(): StartResponse;
type StartResponse = {
    cdn: CDN;
    content_type: string;
    file_name: string;
    file_path: string;
    method?: string;
    namespace: string;
    operation: string;
    size: number;
    tags?: string[];
    upload: Upload;
};
/** @returns {StoreDetail} */
declare function StoreDetail(): StoreDetail;
type StoreDetail = {
    address?: string;
    city?: string;
    country?: string;
    country_code?: string;
    gstin?: string;
    state?: string;
    state_code?: string;
    store_name?: string;
    zip_code?: string;
};
/** @returns {Tax} */
declare function Tax(): Tax;
type Tax = {
    cgst?: Cgst;
    igst?: Igst;
    sgst?: Sgst;
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
    tax_in_words?: string;
    taxes?: Taxes[];
    total_tax?: number;
};
/** @returns {UpiQrcodeGenerator} */
declare function UpiQrcodeGenerator(): UpiQrcodeGenerator;
type UpiQrcodeGenerator = {
    kwargs?: KwargsUpiQrcode;
    method?: string;
};
/** @returns {Upload} */
declare function Upload(): Upload;
type Upload = {
    expiry: number;
    url: string;
};
/** @returns {Urls} */
declare function Urls(): Urls;
type Urls = {
    expiry: number;
    signed_url: string;
    url: string;
};
/** @returns {Usd} */
declare function Usd(): Usd;
type Usd = {
    name?: string;
    sub_unit?: string;
    symbol?: string;
    value?: number;
};
