export type PaymentGatewayConfigResponse = {
    created: boolean;
    aggregators?: Array<any>;
    appId: string;
    success: boolean;
    displayFields: Array<string>;
    excludedFields: Array<string>;
};
export type ErrorCodeDescription = {
    code: string;
    description: string;
    success: boolean;
};
export type PaymentGatewayConfig = {
    merchantSalt: string;
    key: string;
    isActive?: boolean;
    secret: string;
    configType: string;
};
export type PaymentGatewayConfigRequest = {
    appId: string;
    isActive?: boolean;
    aggregatorName?: PaymentGatewayConfig;
};
export type PaymentGatewayToBeReviewed = {
    success: boolean;
    aggregator: Array<string>;
};
export type ErrorCodeAndDescription = {
    description: string;
    code: string;
};
export type HttpErrorCodeAndResponse = {
    error: ErrorCodeAndDescription;
    success: boolean;
};
export type PaymentModeLogo = {
    large: string;
    small: string;
};
export type PaymentModeList = {
    cardIsin?: string;
    fyndVpa?: string;
    intentAppErrorList?: Array<string>;
    cardIssuer?: string;
    cardBrand?: string;
    cardNumber?: string;
    code?: string;
    intentFlow?: string;
    expired?: boolean;
    merchantCode?: string;
    nickname?: string;
    cardName?: string;
    aggregatorName: string;
    name?: string;
    displayPriority?: number;
    timeout?: number;
    cardToken?: string;
    cardFingerprint?: string;
    cardReference?: string;
    expMonth?: number;
    retryCount?: number;
    cardBrandImage?: string;
    cardId?: string;
    cardType?: string;
    expYear?: number;
    logoUrl?: PaymentModeLogo;
    displayName?: string;
};
export type RootPaymentMode = {
    addCardEnabled?: boolean;
    aggregatorName?: string;
    name: string;
    displayPriority: number;
    list?: Array<PaymentModeList>;
    displayName: string;
    anonymousEnable?: boolean;
};
export type PaymentOptions = {
    paymentOption: Array<RootPaymentMode>;
};
export type PaymentOptionsResponse = {
    paymentOptions: PaymentOptions;
    success: boolean;
};
export type PayoutsResponse = {
    uniqueTransferNo: any;
    payoutsAggregators: Array<any>;
    customers: any;
    isActive: boolean;
    isDefault: boolean;
    moreAttributes: any;
    transferType: string;
};
export type PayoutRequest = {
    bankDetails: any;
    uniqueExternalId: string;
    isActive: boolean;
    aggregator: string;
    users: any;
    transferType: string;
};
export type PayoutResponse = {
    uniqueTransferNo: string;
    bankDetails: any;
    created: boolean;
    isActive: boolean;
    aggregator: string;
    payouts: any;
    users: any;
    paymentStatus: string;
    success: boolean;
    transferType: string;
};
export type UpdatePayoutResponse = {
    isDefault: boolean;
    isActive: boolean;
    success: boolean;
};
export type UpdatePayoutRequest = {
    isDefault: boolean;
    uniqueExternalId: string;
    isActive: boolean;
};
export type DeletePayoutResponse = {
    success: boolean;
};
export type SubscriptionPaymentMethodResponse = {
    data: Array<any>;
    success: boolean;
};
export type DeleteSubscriptionPaymentMethodResponse = {
    success: boolean;
};
export type SubscriptionConfigResponse = {
    config: any;
    success: boolean;
    aggregator: string;
};
export type SaveSubscriptionSetupIntentRequest = {
    uniqueExternalId: string;
};
export type SaveSubscriptionSetupIntentResponse = {
    data: any;
    success: boolean;
};
export type UserSerializer = {
    contact?: string;
    username?: string;
    userId?: string;
};
export type GetAddressSerializer = {
    city?: string;
    address1?: string;
    address2?: string;
    countryCode?: string;
    addressType?: string;
    landmark?: string;
    country?: string;
    state?: string;
    longitude?: number;
    latitude?: number;
    pincode?: number;
};
export type BusinessCountryInfo = {
    country?: string;
    countryCode?: string;
};
export type Website = {
    url?: string;
};
export type BusinessDetails = {
    website?: Website;
};
export type Document = {
    verified?: boolean;
    url?: string;
    value: string;
    legalName: string;
    type: string;
};
export type PhoneNumber = {
    number: string;
    countryCode: number;
};
export type ContactDetails = {
    phone?: Array<PhoneNumber>;
    emails?: Array<string>;
};
export type GetCompanyProfileSerializerResponse = {
    modifiedBy?: UserSerializer;
    stage?: string;
    addresses?: Array<GetAddressSerializer>;
    uid: number;
    businessType: string;
    businessCountryInfo?: BusinessCountryInfo;
    createdOn?: string;
    companyType: string;
    businessDetails?: BusinessDetails;
    businessInfo?: string;
    verifiedBy?: UserSerializer;
    warnings?: any;
    franchiseEnabled?: boolean;
    name?: string;
    documents?: Array<Document>;
    contactDetails?: ContactDetails;
    modifiedOn?: string;
    verifiedOn?: string;
    createdBy?: UserSerializer;
    notificationEmails?: Array<string>;
};
export type ErrorResponse = {
    status?: number;
    code?: string;
    meta?: any;
    errors?: any;
    message?: string;
};
export type BusinessCountryInfo1 = {
    country?: string;
    countryCode?: string;
};
export type ReferralInfo = {
    referralCode?: string;
};
export type CompanyAddress = {
    city: string;
    address1: string;
    address2?: string;
    countryCode?: string;
    landmark?: string;
    country: string;
    state: string;
    longitude: number;
    latitude: number;
    pincode: number;
};
export type CompanyStoreSerializerRequest = {
    warnings?: any;
    businessCountryInfo: BusinessCountryInfo1;
    franchiseEnabled?: boolean;
    name: string;
    uid?: number;
    referralInfo?: ReferralInfo;
    document: Document;
    notificationEmails?: Array<string>;
    businessType: string;
    brands: Array<number>;
    address: CompanyAddress;
    businessInfo?: string;
};
export type SuccessResponse = {
    uid?: number;
    success?: boolean;
};
export type DocumentsObj = {
    verified?: number;
    pending?: number;
};
export type MetricsSerializer = {
    stage?: string;
    uid?: number;
    product?: DocumentsObj;
    brand?: DocumentsObj;
    companyDocuments?: DocumentsObj;
    store?: DocumentsObj;
    storeDocuments?: DocumentsObj;
};
export type UserSerializer1 = {
    contact?: string;
    username?: string;
    userId?: string;
};
export type BrandBannerSerializer = {
    portrait?: string;
    landscape?: string;
};
export type GetBrandResponseSerializer = {
    verifiedBy?: UserSerializer1;
    warnings?: any;
    verifiedOn?: string;
    name: string;
    description?: string;
    modifiedBy?: UserSerializer1;
    stage?: string;
    synonyms?: Array<string>;
    localeLanguage?: any;
    slugKey?: string;
    logo?: string;
    rejectReason?: string;
    uid?: number;
    customJson?: any;
    createdOn?: string;
    createdBy?: UserSerializer1;
    modifiedOn?: string;
    banner?: BrandBannerSerializer;
};
export type CreateUpdateBrandRequestSerializer = {
    name: string;
    description?: string;
    localeLanguage?: any;
    synonyms?: Array<string>;
    logo: string;
    customJson?: any;
    uid?: number;
    brandTier?: string;
    companyId?: number;
    banner?: BrandBannerSerializer;
};
export type CompanyBrandPostRequestSerializer = {
    uid?: number;
    brands: Array<number>;
    company: number;
};
export type CompanyBrandListSerializer = {
    items?: Array<any>;
    page?: any;
};
export type InvoiceCredSerializer = {
    password?: string;
    username?: string;
    enabled?: boolean;
};
export type InvoiceDetailsSerializer = {
    eWaybill?: InvoiceCredSerializer;
    eInvoice?: InvoiceCredSerializer;
};
export type ProductReturnConfigSerializer = {
    storeUid?: number;
    onSameStore?: boolean;
};
export type GetAddressSerializer1 = {
    city?: string;
    address1?: string;
    address2?: string;
    countryCode?: string;
    addressType?: string;
    landmark?: string;
    country?: string;
    state?: string;
    longitude?: number;
    latitude?: number;
    pincode?: number;
};
export type LocationManagerSerializer = {
    email?: string;
    mobileNo: PhoneNumber;
    name?: string;
};
export type LocationTimingSerializer = {
    hour?: number;
    minute?: number;
};
export type LocationDayWiseSerializer = {
    weekday: string;
    closing?: LocationTimingSerializer;
    open: boolean;
    opening?: LocationTimingSerializer;
};
export type LocationSerializer = {
    warnings?: any;
    name: string;
    gstCredentials?: InvoiceDetailsSerializer;
    documents?: Array<Document>;
    stage?: string;
    productReturnConfig?: ProductReturnConfigSerializer;
    customJson?: any;
    storeType?: string;
    uid?: number;
    code: string;
    address: GetAddressSerializer1;
    contactNumbers?: Array<PhoneNumber>;
    notificationEmails?: Array<string>;
    manager?: LocationManagerSerializer;
    company: number;
    timing?: Array<LocationDayWiseSerializer>;
    displayName: string;
};
export type LocationListSerializer = {
    items?: Array<any>;
    page?: any;
};
export type LocationIntegrationType = {
    inventory?: string;
    order?: string;
};
export type GetCompanySerializer = {
    verifiedBy?: UserSerializer;
    verifiedOn?: string;
    name?: string;
    modifiedBy?: UserSerializer;
    stage?: string;
    rejectReason?: string;
    addresses?: Array<GetAddressSerializer>;
    uid?: number;
    createdOn?: string;
    createdBy?: UserSerializer;
    companyType?: string;
    businessType?: string;
    modifiedOn?: string;
};
export type GetLocationSerializer = {
    integrationType?: LocationIntegrationType;
    modifiedBy?: UserSerializer1;
    stage?: string;
    uid?: number;
    code: string;
    timing?: Array<LocationDayWiseSerializer>;
    phoneNumber: string;
    displayName: string;
    productReturnConfig?: ProductReturnConfigSerializer;
    createdOn?: string;
    contactNumbers?: Array<PhoneNumber>;
    verifiedBy?: UserSerializer1;
    warnings?: any;
    name: string;
    gstCredentials?: InvoiceDetailsSerializer;
    documents?: Array<Document>;
    company?: GetCompanySerializer;
    modifiedOn?: string;
    verifiedOn?: string;
    customJson?: any;
    storeType?: string;
    createdBy?: UserSerializer1;
    notificationEmails?: Array<string>;
    manager?: LocationManagerSerializer;
    address: GetAddressSerializer;
};
export type FailedResponse = {
    message: string;
};
export type CDN = {
    url: string;
};
export type Upload = {
    expiry: number;
    url: string;
};
export type StartResponse = {
    fileName: string;
    filePath: string;
    contentType: string;
    method: string;
    namespace: string;
    operation: string;
    size: number;
    upload: Upload;
    cdn: CDN;
};
export type StartRequest = {
    fileName: string;
    contentType: string;
    size: number;
    tags?: Array<string>;
};
export type CompleteResponse = {
    id: string;
    fileName: string;
    filePath: string;
    contentType: string;
    method: string;
    namespace: string;
    operation: string;
    size: number;
    upload: Upload;
    cdn: CDN;
    success: string;
    tags?: Array<string>;
    createdOn: string;
    modifiedOn: string;
};
export type Opts = {
    attempts?: number;
    timestamp?: number;
    delay?: number;
};
export type CopyFileTask = {
    id: string;
    name: string;
    data: BulkRequest;
    opts: Opts;
    progress: number;
    delay: number;
    timestamp: number;
    attemptsMade: number;
    stacktrace?: Array<string>;
    finishedOn: number;
    processedOn: number;
};
export type BulkResponse = {
    trackingUrl: string;
    task: CopyFileTask;
};
export type ReqConfiguration = {
    concurrency?: number;
};
export type Destination = {
    namespace: string;
    rewrite: string;
    basepath?: string;
};
export type BulkRequest = {
    urls: Array<string>;
    destination: Destination;
    configuration?: ReqConfiguration;
};
export type Urls = {
    url: string;
    signedUrl: string;
    expiry: number;
};
export type SignUrlResponse = {
    urls: Array<Urls>;
};
export type SignUrlRequest = {
    expiry: number;
    urls: Array<string>;
};
export type Page = {
    current: number;
    itemTotal: number;
    hasPrevious: boolean;
    hasNext: boolean;
};
export type Item = {
    success: boolean;
    tags: Array<string>;
    id: string;
    fileName: string;
    operation?: string;
    namespace: string;
    contentType: string;
    filePath: string;
    upload: Upload;
    cdn: CDN;
    createdOn: string;
    modifiedOn: string;
};
export type BrowseResponse = {
    items: Array<Item>;
    page: Page;
};
/**
        @typedef PaymentGatewayConfigResponse
        
        
        @property { boolean } created
        
        @property { Array<Object> } [aggregators]
        
        @property { string } appId
        
        @property { boolean } success
        
        @property { Array<string> } displayFields
        
        @property { Array<string> } excludedFields
        
         
    */
/**
        @typedef ErrorCodeDescription
        
        
        @property { string } code
        
        @property { string } description
        
        @property { boolean } success
        
         
    */
/**
        @typedef PaymentGatewayConfig
        
        
        @property { string } merchantSalt
        
        @property { string } key
        
        @property { boolean } [isActive]
        
        @property { string } secret
        
        @property { string } configType
        
         
    */
/**
        @typedef PaymentGatewayConfigRequest
        
        
        @property { string } appId
        
        @property { boolean } [isActive]
        
        @property { PaymentGatewayConfig } [aggregatorName]
        
         
    */
/**
        @typedef PaymentGatewayToBeReviewed
        
        
        @property { boolean } success
        
        @property { Array<string> } aggregator
        
         
    */
/**
        @typedef ErrorCodeAndDescription
        
        
        @property { string } description
        
        @property { string } code
        
         
    */
/**
        @typedef HttpErrorCodeAndResponse
        
        
        @property { ErrorCodeAndDescription } error
        
        @property { boolean } success
        
         
    */
/**
        @typedef PaymentModeLogo
        
        
        @property { string } large
        
        @property { string } small
        
         
    */
/**
        @typedef PaymentModeList
        
        
        @property { string } [cardIsin]
        
        @property { string } [fyndVpa]
        
        @property { Array<string> } [intentAppErrorList]
        
        @property { string } [cardIssuer]
        
        @property { string } [cardBrand]
        
        @property { string } [cardNumber]
        
        @property { string } [code]
        
        @property { string } [intentFlow]
        
        @property { boolean } [expired]
        
        @property { string } [merchantCode]
        
        @property { string } [nickname]
        
        @property { string } [cardName]
        
        @property { string } aggregatorName
        
        @property { string } [name]
        
        @property { number } [displayPriority]
        
        @property { number } [timeout]
        
        @property { string } [cardToken]
        
        @property { string } [cardFingerprint]
        
        @property { string } [cardReference]
        
        @property { number } [expMonth]
        
        @property { number } [retryCount]
        
        @property { string } [cardBrandImage]
        
        @property { string } [cardId]
        
        @property { string } [cardType]
        
        @property { number } [expYear]
        
        @property { PaymentModeLogo } [logoUrl]
        
        @property { string } [displayName]
        
         
    */
/**
        @typedef RootPaymentMode
        
        
        @property { boolean } [addCardEnabled]
        
        @property { string } [aggregatorName]
        
        @property { string } name
        
        @property { number } displayPriority
        
        @property { Array<PaymentModeList> } [list]
        
        @property { string } displayName
        
        @property { boolean } [anonymousEnable]
        
         
    */
/**
        @typedef PaymentOptions
        
        
        @property { Array<RootPaymentMode> } paymentOption
        
         
    */
/**
        @typedef PaymentOptionsResponse
        
        
        @property { PaymentOptions } paymentOptions
        
        @property { boolean } success
        
         
    */
/**
        @typedef PayoutsResponse
        
        
        @property { Object } uniqueTransferNo
        
        @property { Array<Object> } payoutsAggregators
        
        @property { Object } customers
        
        @property { boolean } isActive
        
        @property { boolean } isDefault
        
        @property { Object } moreAttributes
        
        @property { string } transferType
        
         
    */
/**
        @typedef PayoutRequest
        
        
        @property { Object } bankDetails
        
        @property { string } uniqueExternalId
        
        @property { boolean } isActive
        
        @property { string } aggregator
        
        @property { Object } users
        
        @property { string } transferType
        
         
    */
/**
        @typedef PayoutResponse
        
        
        @property { string } uniqueTransferNo
        
        @property { Object } bankDetails
        
        @property { boolean } created
        
        @property { boolean } isActive
        
        @property { string } aggregator
        
        @property { Object } payouts
        
        @property { Object } users
        
        @property { string } paymentStatus
        
        @property { boolean } success
        
        @property { string } transferType
        
         
    */
/**
        @typedef UpdatePayoutResponse
        
        
        @property { boolean } isDefault
        
        @property { boolean } isActive
        
        @property { boolean } success
        
         
    */
/**
        @typedef UpdatePayoutRequest
        
        
        @property { boolean } isDefault
        
        @property { string } uniqueExternalId
        
        @property { boolean } isActive
        
         
    */
/**
        @typedef DeletePayoutResponse
        
        
        @property { boolean } success
        
         
    */
/**
        @typedef SubscriptionPaymentMethodResponse
        
        
        @property { Array<Object> } data
        
        @property { boolean } success
        
         
    */
/**
        @typedef DeleteSubscriptionPaymentMethodResponse
        
        
        @property { boolean } success
        
         
    */
/**
        @typedef SubscriptionConfigResponse
        
        
        @property { Object } config
        
        @property { boolean } success
        
        @property { string } aggregator
        
         
    */
/**
        @typedef SaveSubscriptionSetupIntentRequest
        
        
        @property { string } uniqueExternalId
        
         
    */
/**
        @typedef SaveSubscriptionSetupIntentResponse
        
        
        @property { Object } data
        
        @property { boolean } success
        
         
    */
/**
        @typedef UserSerializer
        
        
        @property { string } [contact]
        
        @property { string } [username]
        
        @property { string } [userId]
        
         
    */
/**
        @typedef GetAddressSerializer
        
        
        @property { string } [city]
        
        @property { string } [address1]
        
        @property { string } [address2]
        
        @property { string } [countryCode]
        
        @property { string } [addressType]
        
        @property { string } [landmark]
        
        @property { string } [country]
        
        @property { string } [state]
        
        @property { number } [longitude]
        
        @property { number } [latitude]
        
        @property { number } [pincode]
        
         
    */
/**
        @typedef BusinessCountryInfo
        
        
        @property { string } [country]
        
        @property { string } [countryCode]
        
         
    */
/**
        @typedef Website
        
        
        @property { string } [url]
        
         
    */
/**
        @typedef BusinessDetails
        
        
        @property { Website } [website]
        
         
    */
/**
        @typedef Document
        
        
        @property { boolean } [verified]
        
        @property { string } [url]
        
        @property { string } value
        
        @property { string } legalName
        
        @property { string } type
        
         
    */
/**
        @typedef PhoneNumber
        
        
        @property { string } number
        
        @property { number } countryCode
        
         
    */
/**
        @typedef ContactDetails
        
        
        @property { Array<PhoneNumber> } [phone]
        
        @property { Array<string> } [emails]
        
         
    */
/**
        @typedef GetCompanyProfileSerializerResponse
        
        
        @property { UserSerializer } [modifiedBy]
        
        @property { string } [stage]
        
        @property { Array<GetAddressSerializer> } [addresses]
        
        @property { number } uid
        
        @property { string } businessType
        
        @property { BusinessCountryInfo } [businessCountryInfo]
        
        @property { string } [createdOn]
        
        @property { string } companyType
        
        @property { BusinessDetails } [businessDetails]
        
        @property { string } [businessInfo]
        
        @property { UserSerializer } [verifiedBy]
        
        @property { Object } [warnings]
        
        @property { boolean } [franchiseEnabled]
        
        @property { string } [name]
        
        @property { Array<Document> } [documents]
        
        @property { ContactDetails } [contactDetails]
        
        @property { string } [modifiedOn]
        
        @property { string } [verifiedOn]
        
        @property { UserSerializer } [createdBy]
        
        @property { Array<string> } [notificationEmails]
        
         
    */
/**
        @typedef ErrorResponse
        
        
        @property { number } [status]
        
        @property { string } [code]
        
        @property { Object } [meta]
        
        @property { Object } [errors]
        
        @property { string } [message]
        
         
    */
/**
        @typedef BusinessCountryInfo1
        
        
        @property { string } [country]
        
        @property { string } [countryCode]
        
         
    */
/**
        @typedef ReferralInfo
        
        
        @property { string } [referralCode]
        
         
    */
/**
        @typedef CompanyAddress
        
        
        @property { string } city
        
        @property { string } address1
        
        @property { string } [address2]
        
        @property { string } [countryCode]
        
        @property { string } [landmark]
        
        @property { string } country
        
        @property { string } state
        
        @property { number } longitude
        
        @property { number } latitude
        
        @property { number } pincode
        
         
    */
/**
        @typedef CompanyStoreSerializerRequest
        
        
        @property { Object } [warnings]
        
        @property { BusinessCountryInfo1 } businessCountryInfo
        
        @property { boolean } [franchiseEnabled]
        
        @property { string } name
        
        @property { number } [uid]
        
        @property { ReferralInfo } [referralInfo]
        
        @property { Document } document
        
        @property { Array<string> } [notificationEmails]
        
        @property { string } businessType
        
        @property { Array<number> } brands
        
        @property { CompanyAddress } address
        
        @property { string } [businessInfo]
        
         
    */
/**
        @typedef SuccessResponse
        
        
        @property { number } [uid]
        
        @property { boolean } [success]
        
         
    */
/**
        @typedef DocumentsObj
        
        
        @property { number } [verified]
        
        @property { number } [pending]
        
         
    */
/**
        @typedef MetricsSerializer
        
        
        @property { string } [stage]
        
        @property { number } [uid]
        
        @property { DocumentsObj } [product]
        
        @property { DocumentsObj } [brand]
        
        @property { DocumentsObj } [companyDocuments]
        
        @property { DocumentsObj } [store]
        
        @property { DocumentsObj } [storeDocuments]
        
         
    */
/**
        @typedef UserSerializer1
        
        
        @property { string } [contact]
        
        @property { string } [username]
        
        @property { string } [userId]
        
         
    */
/**
        @typedef BrandBannerSerializer
        
        
        @property { string } [portrait]
        
        @property { string } [landscape]
        
         
    */
/**
        @typedef GetBrandResponseSerializer
        
        
        @property { UserSerializer1 } [verifiedBy]
        
        @property { Object } [warnings]
        
        @property { string } [verifiedOn]
        
        @property { string } name
        
        @property { string } [description]
        
        @property { UserSerializer1 } [modifiedBy]
        
        @property { string } [stage]
        
        @property { Array<string> } [synonyms]
        
        @property { Object } [localeLanguage]
        
        @property { string } [slugKey]
        
        @property { string } [logo]
        
        @property { string } [rejectReason]
        
        @property { number } [uid]
        
        @property { Object } [customJson]
        
        @property { string } [createdOn]
        
        @property { UserSerializer1 } [createdBy]
        
        @property { string } [modifiedOn]
        
        @property { BrandBannerSerializer } [banner]
        
         
    */
/**
        @typedef CreateUpdateBrandRequestSerializer
        
        
        @property { string } name
        
        @property { string } [description]
        
        @property { Object } [localeLanguage]
        
        @property { Array<string> } [synonyms]
        
        @property { string } logo
        
        @property { Object } [customJson]
        
        @property { number } [uid]
        
        @property { string } [brandTier]
        
        @property { number } [companyId]
        
        @property { BrandBannerSerializer } [banner]
        
         
    */
/**
        @typedef CompanyBrandPostRequestSerializer
        
        
        @property { number } [uid]
        
        @property { Array<number> } brands
        
        @property { number } company
        
         
    */
/**
        @typedef CompanyBrandListSerializer
        
        
        @property { Array<Object> } [items]
        
        @property { Object } [page]
        
         
    */
/**
        @typedef InvoiceCredSerializer
        
        
        @property { string } [password]
        
        @property { string } [username]
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef InvoiceDetailsSerializer
        
        
        @property { InvoiceCredSerializer } [eWaybill]
        
        @property { InvoiceCredSerializer } [eInvoice]
        
         
    */
/**
        @typedef ProductReturnConfigSerializer
        
        
        @property { number } [storeUid]
        
        @property { boolean } [onSameStore]
        
         
    */
/**
        @typedef GetAddressSerializer1
        
        
        @property { string } [city]
        
        @property { string } [address1]
        
        @property { string } [address2]
        
        @property { string } [countryCode]
        
        @property { string } [addressType]
        
        @property { string } [landmark]
        
        @property { string } [country]
        
        @property { string } [state]
        
        @property { number } [longitude]
        
        @property { number } [latitude]
        
        @property { number } [pincode]
        
         
    */
/**
        @typedef LocationManagerSerializer
        
        
        @property { string } [email]
        
        @property { PhoneNumber } mobileNo
        
        @property { string } [name]
        
         
    */
/**
        @typedef LocationTimingSerializer
        
        
        @property { number } [hour]
        
        @property { number } [minute]
        
         
    */
/**
        @typedef LocationDayWiseSerializer
        
        
        @property { string } weekday
        
        @property { LocationTimingSerializer } [closing]
        
        @property { boolean } open
        
        @property { LocationTimingSerializer } [opening]
        
         
    */
/**
        @typedef LocationSerializer
        
        
        @property { Object } [warnings]
        
        @property { string } name
        
        @property { InvoiceDetailsSerializer } [gstCredentials]
        
        @property { Array<Document> } [documents]
        
        @property { string } [stage]
        
        @property { ProductReturnConfigSerializer } [productReturnConfig]
        
        @property { Object } [customJson]
        
        @property { string } [storeType]
        
        @property { number } [uid]
        
        @property { string } code
        
        @property { GetAddressSerializer1 } address
        
        @property { Array<PhoneNumber> } [contactNumbers]
        
        @property { Array<string> } [notificationEmails]
        
        @property { LocationManagerSerializer } [manager]
        
        @property { number } company
        
        @property { Array<LocationDayWiseSerializer> } [timing]
        
        @property { string } displayName
        
         
    */
/**
        @typedef LocationListSerializer
        
        
        @property { Array<Object> } [items]
        
        @property { Object } [page]
        
         
    */
/**
        @typedef LocationIntegrationType
        
        
        @property { string } [inventory]
        
        @property { string } [order]
        
         
    */
/**
        @typedef GetCompanySerializer
        
        
        @property { UserSerializer } [verifiedBy]
        
        @property { string } [verifiedOn]
        
        @property { string } [name]
        
        @property { UserSerializer } [modifiedBy]
        
        @property { string } [stage]
        
        @property { string } [rejectReason]
        
        @property { Array<GetAddressSerializer> } [addresses]
        
        @property { number } [uid]
        
        @property { string } [createdOn]
        
        @property { UserSerializer } [createdBy]
        
        @property { string } [companyType]
        
        @property { string } [businessType]
        
        @property { string } [modifiedOn]
        
         
    */
/**
        @typedef GetLocationSerializer
        
        
        @property { LocationIntegrationType } [integrationType]
        
        @property { UserSerializer1 } [modifiedBy]
        
        @property { string } [stage]
        
        @property { number } [uid]
        
        @property { string } code
        
        @property { Array<LocationDayWiseSerializer> } [timing]
        
        @property { string } phoneNumber
        
        @property { string } displayName
        
        @property { ProductReturnConfigSerializer } [productReturnConfig]
        
        @property { string } [createdOn]
        
        @property { Array<PhoneNumber> } [contactNumbers]
        
        @property { UserSerializer1 } [verifiedBy]
        
        @property { Object } [warnings]
        
        @property { string } name
        
        @property { InvoiceDetailsSerializer } [gstCredentials]
        
        @property { Array<Document> } [documents]
        
        @property { GetCompanySerializer } [company]
        
        @property { string } [modifiedOn]
        
        @property { string } [verifiedOn]
        
        @property { Object } [customJson]
        
        @property { string } [storeType]
        
        @property { UserSerializer1 } [createdBy]
        
        @property { Array<string> } [notificationEmails]
        
        @property { LocationManagerSerializer } [manager]
        
        @property { GetAddressSerializer } address
        
         
    */
/**
        @typedef FailedResponse
        
        
        @property { string } message
        
         
    */
/**
        @typedef CDN
        
        
        @property { string } url
        
         
    */
/**
        @typedef Upload
        
        
        @property { number } expiry
        
        @property { string } url
        
         
    */
/**
        @typedef StartResponse
        
        
        @property { string } fileName
        
        @property { string } filePath
        
        @property { string } contentType
        
        @property { string } method
        
        @property { string } namespace
        
        @property { string } operation
        
        @property { number } size
        
        @property { Upload } upload
        
        @property { CDN } cdn
        
         
    */
/**
        @typedef StartRequest
        
        
        @property { string } fileName
        
        @property { string } contentType
        
        @property { number } size
        
        @property { Array<string> } [tags]
        
         
    */
/**
        @typedef CompleteResponse
        
        
        @property { string } id
        
        @property { string } fileName
        
        @property { string } filePath
        
        @property { string } contentType
        
        @property { string } method
        
        @property { string } namespace
        
        @property { string } operation
        
        @property { number } size
        
        @property { Upload } upload
        
        @property { CDN } cdn
        
        @property { string } success
        
        @property { Array<string> } [tags]
        
        @property { string } createdOn
        
        @property { string } modifiedOn
        
         
    */
/**
        @typedef Opts
        
        
        @property { number } [attempts]
        
        @property { number } [timestamp]
        
        @property { number } [delay]
        
         
    */
/**
        @typedef CopyFileTask
        
        
        @property { string } id
        
        @property { string } name
        
        @property { BulkRequest } data
        
        @property { Opts } opts
        
        @property { number } progress
        
        @property { number } delay
        
        @property { number } timestamp
        
        @property { number } attemptsMade
        
        @property { Array<string> } [stacktrace]
        
        @property { number } finishedOn
        
        @property { number } processedOn
        
         
    */
/**
        @typedef BulkResponse
        
        
        @property { string } trackingUrl
        
        @property { CopyFileTask } task
        
         
    */
/**
        @typedef ReqConfiguration
        
        
        @property { number } [concurrency]
        
         
    */
/**
        @typedef Destination
        
        
        @property { string } namespace
        
        @property { string } rewrite
        
        @property { string } [basepath]
        
         
    */
/**
        @typedef BulkRequest
        
        
        @property { Array<string> } urls
        
        @property { Destination } destination
        
        @property { ReqConfiguration } [configuration]
        
         
    */
/**
        @typedef Urls
        
        
        @property { string } url
        
        @property { string } signedUrl
        
        @property { number } expiry
        
         
    */
/**
        @typedef SignUrlResponse
        
        
        @property { Array<Urls> } urls
        
         
    */
/**
        @typedef SignUrlRequest
        
        
        @property { number } expiry
        
        @property { Array<string> } urls
        
         
    */
/**
        @typedef Page
        
        
        @property { number } current
        
        @property { number } itemTotal
        
        @property { boolean } hasPrevious
        
        @property { boolean } hasNext
        
         
    */
/**
        @typedef Item
        
        
        @property { boolean } success
        
        @property { Array<string> } tags
        
        @property { string } id
        
        @property { string } fileName
        
        @property { string } [operation]
        
        @property { string } namespace
        
        @property { string } contentType
        
        @property { string } filePath
        
        @property { Upload } upload
        
        @property { CDN } cdn
        
        @property { string } createdOn
        
        @property { string } modifiedOn
        
         
    */
/**
        @typedef BrowseResponse
        
        
        @property { Array<Item> } items
        
        @property { Page } page
        
         
    */
export class Payment {
    constructor(config: any);
    config: any;
    /**
      *
      * @summary: Get All Payouts
      * @description: Get All Payouts
      * @param {Object} arg - arg object.
      * @param {string} [arg.uniqueExternalId] - Fetch payouts using unique external id
      
      **/
    getAllPayouts({ uniqueExternalId }?: {
        uniqueExternalId?: string;
    }): any;
    /**
     *
     * @summary: Save Payout
     * @description: Save Payout
     * @param {Object} arg - arg object.
     * @param {PayoutRequest} arg.body
     **/
    savePayout({ body }?: {
        body: PayoutRequest;
    }): any;
    /**
     *
     * @summary: Update Payout
     * @description: Update Payout
     * @param {Object} arg - arg object.
     * @param {string} arg.uniqueTransferNo - Unique transfer id
     * @param {PayoutRequest} arg.body
     **/
    updatePayout({ uniqueTransferNo, body }?: {
        uniqueTransferNo: string;
        body: PayoutRequest;
    }): any;
    /**
     *
     * @summary: Partial Update Payout
     * @description: Partial Update Payout
     * @param {Object} arg - arg object.
     * @param {string} arg.uniqueTransferNo - Unique transfer id
     * @param {UpdatePayoutRequest} arg.body
     **/
    activateAndDectivatePayout({ uniqueTransferNo, body }?: {
        uniqueTransferNo: string;
        body: UpdatePayoutRequest;
    }): any;
    /**
      *
      * @summary: Delete Payout
      * @description: Delete Payout
      * @param {Object} arg - arg object.
      * @param {string} arg.uniqueTransferNo - Unique transfer id
      
      **/
    deletePayout({ uniqueTransferNo }?: {
        uniqueTransferNo: string;
    }): any;
    /**
      *
      * @summary: List Subscription Payment Method
      * @description: Get all  Subscription  Payment Method
      * @param {Object} arg - arg object.
      
      **/
    getSubscriptionPaymentMethod({}?: any): any;
    /**
      *
      * @summary: Delete Subscription Payment Method
      * @description: Uses this api to Delete Subscription Payment Method
      * @param {Object} arg - arg object.
      * @param {string} arg.uniqueExternalId -
      * @param {string} arg.paymentMethodId -
      
      **/
    deleteSubscriptionPaymentMethod({ uniqueExternalId, paymentMethodId }?: {
        uniqueExternalId: string;
        paymentMethodId: string;
    }): any;
    /**
      *
      * @summary: List Subscription Config
      * @description: Get all  Subscription Config details
      * @param {Object} arg - arg object.
      
      **/
    getSubscriptionConfig({}?: any): any;
    /**
     *
     * @summary: Save Subscription Setup Intent
     * @description: Uses this api to Save Subscription Setup Intent
     * @param {Object} arg - arg object.
     * @param {SaveSubscriptionSetupIntentRequest} arg.body
     **/
    saveSubscriptionSetupIntent({ body }?: {
        body: SaveSubscriptionSetupIntentRequest;
    }): any;
}
export class CompanyProfile {
    constructor(config: any);
    config: any;
    /**
      *
      * @summary: Get company profile
      * @description: This API allows to view the company profile of the seller account.
      * @param {Object} arg - arg object.
      
      **/
    cbsOnboardGet({}?: any): any;
    /**
     *
     * @summary: Edit company profile
     * @description: This API allows to edit the company profile of the seller account.
     * @param {Object} arg - arg object.
     * @param {CompanyStoreSerializerRequest} arg.body
     **/
    updateCompany({ body }?: {
        body: CompanyStoreSerializerRequest;
    }): any;
    /**
      *
      * @summary: Get company metrics
      * @description: This API allows to view the company metrics, i.e. the status of its brand and stores. Also its allows to view the number of products, company documents & store documents which are verified and unverified.
      * @param {Object} arg - arg object.
      
      **/
    getCompanyMetrics({}?: any): any;
    /**
      *
      * @summary: Get a single brand.
      * @description: This API helps to get data associated to a particular brand.
      * @param {Object} arg - arg object.
      * @param {string} arg.brandId - Id of the brand to be viewed.
      
      **/
    getBrand({ brandId }?: {
        brandId: string;
    }): any;
    /**
     *
     * @summary: Edit a brand.
     * @description: This API allows to edit meta of a brand.
     * @param {Object} arg - arg object.
     * @param {string} arg.brandId - Id of the brand to be viewed.
     * @param {CreateUpdateBrandRequestSerializer} arg.body
     **/
    editBrand({ brandId, body }?: {
        brandId: string;
        body: CreateUpdateBrandRequestSerializer;
    }): any;
    /**
     *
     * @summary: Create a Brand.
     * @description: This API allows to create a brand associated to a company.
     * @param {Object} arg - arg object.
     * @param {CreateUpdateBrandRequestSerializer} arg.body
     **/
    createBrand({ body }?: {
        body: CreateUpdateBrandRequestSerializer;
    }): any;
    /**
      *
      * @summary: Get brands associated to a company
      * @description: This API helps to get view brands associated to a particular company.
      * @param {Object} arg - arg object.
      
      **/
    getBrands({}?: any): any;
    /**
     *
     * @summary: Create a location asscoiated to a company.
     * @description: This API allows to create a location associated to a company.
     * @param {Object} arg - arg object.
     * @param {LocationSerializer} arg.body
     **/
    createLocation({ body }?: {
        body: LocationSerializer;
    }): any;
    /**
      *
      * @summary: Get list of locations
      * @description: This API allows to view all the locations asscoiated to a company.
      * @param {Object} arg - arg object.
      * @param {string} [arg.storeType] - Helps to sort the location list on the basis of location type.
      * @param {string} [arg.q] - Query that is to be searched.
      * @param {string} [arg.stage] - to filter companies on basis of verified or unverified companies.
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
      
      **/
    getLocations({ storeType, q, stage, pageNo, pageSize }?: {
        storeType?: string;
        q?: string;
        stage?: string;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get details of a specific location.
      * @description: This API helps to get data associated to a specific location.
      * @param {Object} arg - arg object.
      * @param {string} arg.locationId - Id of the location which you want to view.
      
      **/
    getLocationDetail({ locationId }?: {
        locationId: string;
    }): any;
    /**
     *
     * @summary: Edit a location asscoiated to a company.
     * @description: This API allows to edit a location associated to a company.
     * @param {Object} arg - arg object.
     * @param {string} arg.locationId - Id of the location which you want to edit.
     * @param {LocationSerializer} arg.body
     **/
    updateLocation({ locationId, body }?: {
        locationId: string;
        body: LocationSerializer;
    }): any;
}
export class Assets {
    constructor(config: any);
    config: any;
    /**
     *
     * @summary: Copy Files
     * @description: Copy Files
     * @param {Object} arg - arg object.
     * @param {boolean} [arg.sync] - sync
     * @param {BulkRequest} arg.body
     **/
    companyCopyFiles({ body, sync }?: {
        sync?: boolean;
        body: BulkRequest;
    }): any;
    /**
     *
     * @summary: Explain here
     * @description: Describe here
     * @param {Object} arg - arg object.
     * @param {SignUrlRequest} arg.body
     **/
    getSignUrls({ body }?: {
        body: SignUrlRequest;
    }): any;
    /**
      *
      * @summary: Browse Files
      * @description: Browse Files
      * @param {Object} arg - arg object.
      * @param {string} arg.namespace - bucket name
      
      **/
    companyBrowse({ namespace }?: {
        namespace: string;
    }): any;
    /**
      *
      * @summary: Browse Files
      * @description: Browse Files
      * @param {Object} arg - arg object.
      * @param {string} arg.namespace - bucket name
      
      **/
    companyBrowsePaginator({ namespace }?: {
        namespace: string;
    }): any;
    /**
      *
      * @summary: Proxy
      * @description: Proxy
      * @param {Object} arg - arg object.
      * @param {string} arg.url - url
      
      **/
    proxy({ url }?: {
        url: string;
    }): any;
}
