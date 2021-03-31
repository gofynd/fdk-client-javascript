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
export type Document = {
    value: string;
    verified?: boolean;
    legalName: string;
    url?: string;
    type: string;
};
export type GetAddressSerializer = {
    latitude?: number;
    address1?: string;
    addressType?: string;
    state?: string;
    longitude?: number;
    country?: string;
    landmark?: string;
    city?: string;
    countryCode?: string;
    pincode?: number;
    address2?: string;
};
export type UserSerializer = {
    userId?: string;
    username?: string;
    contact?: string;
};
export type PhoneNumber = {
    countryCode: number;
    number: string;
};
export type ContactDetails = {
    emails?: Array<string>;
    phone?: Array<PhoneNumber>;
};
export type BusinessCountryInfo = {
    countryCode?: string;
    country?: string;
};
export type Website = {
    url?: string;
};
export type BusinessDetails = {
    website?: Website;
};
export type GetCompanyProfileSerializerResponse = {
    documents?: Array<Document>;
    addresses?: Array<GetAddressSerializer>;
    modifiedBy?: UserSerializer;
    verifiedOn?: string;
    createdOn?: string;
    stage?: string;
    notificationEmails?: Array<string>;
    franchiseEnabled?: boolean;
    contactDetails?: ContactDetails;
    warnings?: any;
    businessInfo?: string;
    businessCountryInfo?: BusinessCountryInfo;
    name?: string;
    uid: number;
    businessType: string;
    businessDetails?: BusinessDetails;
    modifiedOn?: string;
    companyType: string;
    verifiedBy?: UserSerializer;
    createdBy?: UserSerializer;
};
export type ErrorResponse = {
    status?: number;
    errors?: any;
    message?: string;
    meta?: any;
    code?: string;
};
export type BusinessCountryInfo1 = {
    countryCode?: string;
    country?: string;
};
export type ReferralInfo = {
    referralCode?: string;
};
export type CompanyAddress = {
    latitude: number;
    address1: string;
    country: string;
    state: string;
    longitude: number;
    city: string;
    landmark?: string;
    countryCode?: string;
    pincode: number;
    address2?: string;
};
export type CompanyStoreSerializerRequest = {
    brands: Array<number>;
    businessCountryInfo: BusinessCountryInfo1;
    name: string;
    uid?: number;
    businessType: string;
    notificationEmails?: Array<string>;
    franchiseEnabled?: boolean;
    referralInfo?: ReferralInfo;
    document: Document;
    address: CompanyAddress;
    warnings?: any;
    businessInfo?: string;
};
export type SuccessResponse = {
    success?: boolean;
    uid?: number;
};
export type DocumentsObj = {
    pending?: number;
    verified?: number;
};
export type MetricsSerializer = {
    uid?: number;
    stage?: string;
    companyDocuments?: DocumentsObj;
    storeDocuments?: DocumentsObj;
    brand?: DocumentsObj;
    product?: DocumentsObj;
    store?: DocumentsObj;
};
export type UserSerializer1 = {
    userId?: string;
    username?: string;
    contact?: string;
};
export type BrandBannerSerializer = {
    landscape?: string;
    portrait?: string;
};
export type GetBrandResponseSerializer = {
    customJson?: any;
    synonyms?: Array<string>;
    verifiedOn?: string;
    createdBy?: UserSerializer1;
    name: string;
    uid?: number;
    stage?: string;
    rejectReason?: string;
    description?: string;
    localeLanguage?: any;
    modifiedOn?: string;
    modifiedBy?: UserSerializer1;
    logo?: string;
    banner?: BrandBannerSerializer;
    createdOn?: string;
    warnings?: any;
    verifiedBy?: UserSerializer1;
    slugKey?: string;
};
export type CreateUpdateBrandRequestSerializer = {
    customJson?: any;
    synonyms?: Array<string>;
    name: string;
    uid?: number;
    description?: string;
    localeLanguage?: any;
    brandTier?: string;
    logo: string;
    banner?: BrandBannerSerializer;
    companyId?: number;
};
export type CompanyBrandListSerializer = {
    page?: any;
    items?: Array<any>;
};
export type CompanyBrandPostRequestSerializer = {
    uid?: number;
    company: number;
    brands: Array<number>;
};
export type LocationListSerializer = {
    page?: any;
    items?: Array<any>;
};
export type LocationManagerSerializer = {
    name?: string;
    email?: string;
    mobileNo: PhoneNumber;
};
export type InvoiceCredSerializer = {
    enabled?: boolean;
    password?: string;
    username?: string;
};
export type InvoiceDetailsSerializer = {
    eInvoice?: InvoiceCredSerializer;
    eWaybill?: InvoiceCredSerializer;
};
export type LocationTimingSerializer = {
    minute?: number;
    hour?: number;
};
export type LocationDayWiseSerializer = {
    closing?: LocationTimingSerializer;
    open: boolean;
    opening?: LocationTimingSerializer;
    weekday: string;
};
export type GetAddressSerializer1 = {
    latitude?: number;
    address1?: string;
    addressType?: string;
    state?: string;
    longitude?: number;
    country?: string;
    landmark?: string;
    city?: string;
    countryCode?: string;
    pincode?: number;
    address2?: string;
};
export type ProductReturnConfigSerializer = {
    onSameStore?: boolean;
    storeUid?: number;
};
export type LocationSerializer = {
    customJson?: any;
    company: number;
    manager?: LocationManagerSerializer;
    name: string;
    storeType?: string;
    uid?: number;
    displayName: string;
    stage?: string;
    documents?: Array<Document>;
    notificationEmails?: Array<string>;
    gstCredentials?: InvoiceDetailsSerializer;
    contactNumbers?: Array<PhoneNumber>;
    timing?: Array<LocationDayWiseSerializer>;
    address: GetAddressSerializer1;
    productReturnConfig?: ProductReturnConfigSerializer;
    warnings?: any;
    code: string;
};
export type GetCompanySerializer = {
    verifiedOn?: string;
    createdBy?: UserSerializer;
    name?: string;
    uid?: number;
    businessType?: string;
    stage?: string;
    rejectReason?: string;
    addresses?: Array<GetAddressSerializer>;
    modifiedOn?: string;
    modifiedBy?: UserSerializer;
    companyType?: string;
    createdOn?: string;
    verifiedBy?: UserSerializer;
};
export type LocationIntegrationType = {
    order?: string;
    inventory?: string;
};
export type GetLocationSerializer = {
    documents?: Array<Document>;
    modifiedBy?: UserSerializer1;
    timing?: Array<LocationDayWiseSerializer>;
    verifiedOn?: string;
    createdOn?: string;
    code: string;
    company?: GetCompanySerializer;
    manager?: LocationManagerSerializer;
    storeType?: string;
    stage?: string;
    notificationEmails?: Array<string>;
    contactNumbers?: Array<PhoneNumber>;
    gstCredentials?: InvoiceDetailsSerializer;
    warnings?: any;
    phoneNumber: string;
    customJson?: any;
    name: string;
    uid?: number;
    displayName: string;
    modifiedOn?: string;
    verifiedBy?: UserSerializer1;
    integrationType?: LocationIntegrationType;
    createdBy?: UserSerializer1;
    address: GetAddressSerializer;
    productReturnConfig?: ProductReturnConfigSerializer;
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
        @typedef Document
        
        
        @property { string } value
        
        @property { boolean } [verified]
        
        @property { string } legalName
        
        @property { string } [url]
        
        @property { string } type
        
         
    */
/**
        @typedef GetAddressSerializer
        
        
        @property { number } [latitude]
        
        @property { string } [address1]
        
        @property { string } [addressType]
        
        @property { string } [state]
        
        @property { number } [longitude]
        
        @property { string } [country]
        
        @property { string } [landmark]
        
        @property { string } [city]
        
        @property { string } [countryCode]
        
        @property { number } [pincode]
        
        @property { string } [address2]
        
         
    */
/**
        @typedef UserSerializer
        
        
        @property { string } [userId]
        
        @property { string } [username]
        
        @property { string } [contact]
        
         
    */
/**
        @typedef PhoneNumber
        
        
        @property { number } countryCode
        
        @property { string } number
        
         
    */
/**
        @typedef ContactDetails
        
        
        @property { Array<string> } [emails]
        
        @property { Array<PhoneNumber> } [phone]
        
         
    */
/**
        @typedef BusinessCountryInfo
        
        
        @property { string } [countryCode]
        
        @property { string } [country]
        
         
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
        @typedef GetCompanyProfileSerializerResponse
        
        
        @property { Array<Document> } [documents]
        
        @property { Array<GetAddressSerializer> } [addresses]
        
        @property { UserSerializer } [modifiedBy]
        
        @property { string } [verifiedOn]
        
        @property { string } [createdOn]
        
        @property { string } [stage]
        
        @property { Array<string> } [notificationEmails]
        
        @property { boolean } [franchiseEnabled]
        
        @property { ContactDetails } [contactDetails]
        
        @property { Object } [warnings]
        
        @property { string } [businessInfo]
        
        @property { BusinessCountryInfo } [businessCountryInfo]
        
        @property { string } [name]
        
        @property { number } uid
        
        @property { string } businessType
        
        @property { BusinessDetails } [businessDetails]
        
        @property { string } [modifiedOn]
        
        @property { string } companyType
        
        @property { UserSerializer } [verifiedBy]
        
        @property { UserSerializer } [createdBy]
        
         
    */
/**
        @typedef ErrorResponse
        
        
        @property { number } [status]
        
        @property { Object } [errors]
        
        @property { string } [message]
        
        @property { Object } [meta]
        
        @property { string } [code]
        
         
    */
/**
        @typedef BusinessCountryInfo1
        
        
        @property { string } [countryCode]
        
        @property { string } [country]
        
         
    */
/**
        @typedef ReferralInfo
        
        
        @property { string } [referralCode]
        
         
    */
/**
        @typedef CompanyAddress
        
        
        @property { number } latitude
        
        @property { string } address1
        
        @property { string } country
        
        @property { string } state
        
        @property { number } longitude
        
        @property { string } city
        
        @property { string } [landmark]
        
        @property { string } [countryCode]
        
        @property { number } pincode
        
        @property { string } [address2]
        
         
    */
/**
        @typedef CompanyStoreSerializerRequest
        
        
        @property { Array<number> } brands
        
        @property { BusinessCountryInfo1 } businessCountryInfo
        
        @property { string } name
        
        @property { number } [uid]
        
        @property { string } businessType
        
        @property { Array<string> } [notificationEmails]
        
        @property { boolean } [franchiseEnabled]
        
        @property { ReferralInfo } [referralInfo]
        
        @property { Document } document
        
        @property { CompanyAddress } address
        
        @property { Object } [warnings]
        
        @property { string } [businessInfo]
        
         
    */
/**
        @typedef SuccessResponse
        
        
        @property { boolean } [success]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef DocumentsObj
        
        
        @property { number } [pending]
        
        @property { number } [verified]
        
         
    */
/**
        @typedef MetricsSerializer
        
        
        @property { number } [uid]
        
        @property { string } [stage]
        
        @property { DocumentsObj } [companyDocuments]
        
        @property { DocumentsObj } [storeDocuments]
        
        @property { DocumentsObj } [brand]
        
        @property { DocumentsObj } [product]
        
        @property { DocumentsObj } [store]
        
         
    */
/**
        @typedef UserSerializer1
        
        
        @property { string } [userId]
        
        @property { string } [username]
        
        @property { string } [contact]
        
         
    */
/**
        @typedef BrandBannerSerializer
        
        
        @property { string } [landscape]
        
        @property { string } [portrait]
        
         
    */
/**
        @typedef GetBrandResponseSerializer
        
        
        @property { Object } [customJson]
        
        @property { Array<string> } [synonyms]
        
        @property { string } [verifiedOn]
        
        @property { UserSerializer1 } [createdBy]
        
        @property { string } name
        
        @property { number } [uid]
        
        @property { string } [stage]
        
        @property { string } [rejectReason]
        
        @property { string } [description]
        
        @property { Object } [localeLanguage]
        
        @property { string } [modifiedOn]
        
        @property { UserSerializer1 } [modifiedBy]
        
        @property { string } [logo]
        
        @property { BrandBannerSerializer } [banner]
        
        @property { string } [createdOn]
        
        @property { Object } [warnings]
        
        @property { UserSerializer1 } [verifiedBy]
        
        @property { string } [slugKey]
        
         
    */
/**
        @typedef CreateUpdateBrandRequestSerializer
        
        
        @property { Object } [customJson]
        
        @property { Array<string> } [synonyms]
        
        @property { string } name
        
        @property { number } [uid]
        
        @property { string } [description]
        
        @property { Object } [localeLanguage]
        
        @property { string } [brandTier]
        
        @property { string } logo
        
        @property { BrandBannerSerializer } [banner]
        
        @property { number } [companyId]
        
         
    */
/**
        @typedef CompanyBrandListSerializer
        
        
        @property { Object } [page]
        
        @property { Array<Object> } [items]
        
         
    */
/**
        @typedef CompanyBrandPostRequestSerializer
        
        
        @property { number } [uid]
        
        @property { number } company
        
        @property { Array<number> } brands
        
         
    */
/**
        @typedef LocationListSerializer
        
        
        @property { Object } [page]
        
        @property { Array<Object> } [items]
        
         
    */
/**
        @typedef LocationManagerSerializer
        
        
        @property { string } [name]
        
        @property { string } [email]
        
        @property { PhoneNumber } mobileNo
        
         
    */
/**
        @typedef InvoiceCredSerializer
        
        
        @property { boolean } [enabled]
        
        @property { string } [password]
        
        @property { string } [username]
        
         
    */
/**
        @typedef InvoiceDetailsSerializer
        
        
        @property { InvoiceCredSerializer } [eInvoice]
        
        @property { InvoiceCredSerializer } [eWaybill]
        
         
    */
/**
        @typedef LocationTimingSerializer
        
        
        @property { number } [minute]
        
        @property { number } [hour]
        
         
    */
/**
        @typedef LocationDayWiseSerializer
        
        
        @property { LocationTimingSerializer } [closing]
        
        @property { boolean } open
        
        @property { LocationTimingSerializer } [opening]
        
        @property { string } weekday
        
         
    */
/**
        @typedef GetAddressSerializer1
        
        
        @property { number } [latitude]
        
        @property { string } [address1]
        
        @property { string } [addressType]
        
        @property { string } [state]
        
        @property { number } [longitude]
        
        @property { string } [country]
        
        @property { string } [landmark]
        
        @property { string } [city]
        
        @property { string } [countryCode]
        
        @property { number } [pincode]
        
        @property { string } [address2]
        
         
    */
/**
        @typedef ProductReturnConfigSerializer
        
        
        @property { boolean } [onSameStore]
        
        @property { number } [storeUid]
        
         
    */
/**
        @typedef LocationSerializer
        
        
        @property { Object } [customJson]
        
        @property { number } company
        
        @property { LocationManagerSerializer } [manager]
        
        @property { string } name
        
        @property { string } [storeType]
        
        @property { number } [uid]
        
        @property { string } displayName
        
        @property { string } [stage]
        
        @property { Array<Document> } [documents]
        
        @property { Array<string> } [notificationEmails]
        
        @property { InvoiceDetailsSerializer } [gstCredentials]
        
        @property { Array<PhoneNumber> } [contactNumbers]
        
        @property { Array<LocationDayWiseSerializer> } [timing]
        
        @property { GetAddressSerializer1 } address
        
        @property { ProductReturnConfigSerializer } [productReturnConfig]
        
        @property { Object } [warnings]
        
        @property { string } code
        
         
    */
/**
        @typedef GetCompanySerializer
        
        
        @property { string } [verifiedOn]
        
        @property { UserSerializer } [createdBy]
        
        @property { string } [name]
        
        @property { number } [uid]
        
        @property { string } [businessType]
        
        @property { string } [stage]
        
        @property { string } [rejectReason]
        
        @property { Array<GetAddressSerializer> } [addresses]
        
        @property { string } [modifiedOn]
        
        @property { UserSerializer } [modifiedBy]
        
        @property { string } [companyType]
        
        @property { string } [createdOn]
        
        @property { UserSerializer } [verifiedBy]
        
         
    */
/**
        @typedef LocationIntegrationType
        
        
        @property { string } [order]
        
        @property { string } [inventory]
        
         
    */
/**
        @typedef GetLocationSerializer
        
        
        @property { Array<Document> } [documents]
        
        @property { UserSerializer1 } [modifiedBy]
        
        @property { Array<LocationDayWiseSerializer> } [timing]
        
        @property { string } [verifiedOn]
        
        @property { string } [createdOn]
        
        @property { string } code
        
        @property { GetCompanySerializer } [company]
        
        @property { LocationManagerSerializer } [manager]
        
        @property { string } [storeType]
        
        @property { string } [stage]
        
        @property { Array<string> } [notificationEmails]
        
        @property { Array<PhoneNumber> } [contactNumbers]
        
        @property { InvoiceDetailsSerializer } [gstCredentials]
        
        @property { Object } [warnings]
        
        @property { string } phoneNumber
        
        @property { Object } [customJson]
        
        @property { string } name
        
        @property { number } [uid]
        
        @property { string } displayName
        
        @property { string } [modifiedOn]
        
        @property { UserSerializer1 } [verifiedBy]
        
        @property { LocationIntegrationType } [integrationType]
        
        @property { UserSerializer1 } [createdBy]
        
        @property { GetAddressSerializer } address
        
        @property { ProductReturnConfigSerializer } [productReturnConfig]
        
         
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
     * @summary: Create a company brand mapping.
     * @description: This API allows to create a company brand mapping, for a already existing brand in the system.
     * @param {Object} arg - arg object.
     * @param {CompanyBrandPostRequestSerializer} arg.body
     **/
    createBrand({ body }?: {
        body: CompanyBrandPostRequestSerializer;
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
