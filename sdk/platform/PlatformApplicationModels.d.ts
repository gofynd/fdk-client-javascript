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
    username?: string;
    userId?: string;
    contact?: string;
};
export type Document = {
    url?: string;
    legalName: string;
    value: string;
    type: string;
    verified?: boolean;
};
export type PhoneNumber = {
    countryCode: number;
    number: string;
};
export type ContactDetails = {
    emails?: Array<string>;
    phone?: Array<PhoneNumber>;
};
export type GetAddressSerializer = {
    address2?: string;
    countryCode?: string;
    state?: string;
    pincode?: number;
    landmark?: string;
    addressType?: string;
    latitude?: number;
    longitude?: number;
    city?: string;
    address1?: string;
    country?: string;
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
    modifiedBy?: UserSerializer;
    stage?: string;
    businessInfo?: string;
    verifiedBy?: UserSerializer;
    companyType: string;
    uid: number;
    documents?: Array<Document>;
    verifiedOn?: string;
    contactDetails?: ContactDetails;
    createdBy?: UserSerializer;
    businessType: string;
    addresses?: Array<GetAddressSerializer>;
    createdOn?: string;
    businessCountryInfo?: BusinessCountryInfo;
    warnings?: any;
    name?: string;
    notificationEmails?: Array<string>;
    businessDetails?: BusinessDetails;
    franchiseEnabled?: boolean;
    modifiedOn?: string;
};
export type ErrorResponse = {
    code?: string;
    message?: string;
    status?: number;
    meta?: any;
    errors?: any;
};
export type CompanyAddress = {
    address2?: string;
    countryCode?: string;
    state: string;
    pincode: number;
    landmark?: string;
    latitude: number;
    longitude: number;
    city: string;
    address1: string;
    country: string;
};
export type BusinessCountryInfo1 = {
    countryCode?: string;
    country?: string;
};
export type ReferralInfo = {
    referralCode?: string;
};
export type CompanyStoreSerializerRequest = {
    businessType: string;
    warnings?: any;
    brands: Array<number>;
    document: Document;
    address: CompanyAddress;
    uid?: number;
    name: string;
    notificationEmails?: Array<string>;
    businessCountryInfo: BusinessCountryInfo1;
    referralInfo?: ReferralInfo;
    businessInfo?: string;
    franchiseEnabled?: boolean;
};
export type SuccessResponse = {
    success?: boolean;
    uid?: number;
};
export type DocumentsObj = {
    verified?: number;
    pending?: number;
};
export type MetricsSerializer = {
    store?: DocumentsObj;
    stage?: string;
    uid?: number;
    companyDocuments?: DocumentsObj;
    product?: DocumentsObj;
    storeDocuments?: DocumentsObj;
    brand?: DocumentsObj;
};
export type BrandBannerSerializer = {
    landscape?: string;
    portrait?: string;
};
export type CreateUpdateBrandRequestSerializer = {
    localeLanguage?: any;
    uid?: number;
    banner?: BrandBannerSerializer;
    description?: string;
    synonyms?: Array<string>;
    name: string;
    companyId?: number;
    logo: string;
    brandTier?: string;
    customJson?: any;
};
export type UserSerializer1 = {
    username?: string;
    userId?: string;
    contact?: string;
};
export type GetBrandResponseSerializer = {
    createdBy?: UserSerializer1;
    modifiedBy?: UserSerializer1;
    warnings?: any;
    localeLanguage?: any;
    stage?: string;
    uid?: number;
    banner?: BrandBannerSerializer;
    description?: string;
    name: string;
    rejectReason?: string;
    synonyms?: Array<string>;
    createdOn?: string;
    verifiedOn?: string;
    logo?: string;
    customJson?: any;
    verifiedBy?: UserSerializer1;
    slugKey?: string;
    modifiedOn?: string;
};
export type CompanyBrandPostRequestSerializer = {
    brands: Array<number>;
    company: number;
    uid?: number;
};
export type CompanyBrandListSerializer = {
    page?: any;
    items?: Array<any>;
};
export type LocationTimingSerializer = {
    minute?: number;
    hour?: number;
};
export type LocationDayWiseSerializer = {
    closing?: LocationTimingSerializer;
    weekday: string;
    opening?: LocationTimingSerializer;
    open: boolean;
};
export type GetAddressSerializer1 = {
    address2?: string;
    countryCode?: string;
    state?: string;
    pincode?: number;
    landmark?: string;
    addressType?: string;
    latitude?: number;
    longitude?: number;
    city?: string;
    address1?: string;
    country?: string;
};
export type LocationManagerSerializer = {
    mobileNo: PhoneNumber;
    name?: string;
    email?: string;
};
export type ProductReturnConfigSerializer = {
    onSameStore?: boolean;
    storeUid?: number;
};
export type InvoiceCredSerializer = {
    username?: string;
    enabled?: boolean;
    password?: string;
};
export type InvoiceDetailsSerializer = {
    eWaybill?: InvoiceCredSerializer;
    eInvoice?: InvoiceCredSerializer;
};
export type LocationSerializer = {
    timing?: Array<LocationDayWiseSerializer>;
    warnings?: any;
    code: string;
    company: number;
    uid?: number;
    documents?: Array<Document>;
    address: GetAddressSerializer1;
    stage?: string;
    name: string;
    manager?: LocationManagerSerializer;
    notificationEmails?: Array<string>;
    productReturnConfig?: ProductReturnConfigSerializer;
    contactNumbers?: Array<PhoneNumber>;
    gstCredentials?: InvoiceDetailsSerializer;
    displayName: string;
    storeType?: string;
    customJson?: any;
};
export type LocationListSerializer = {
    page?: any;
    items?: Array<any>;
};
export type GetCompanySerializer = {
    createdBy?: UserSerializer;
    businessType?: string;
    modifiedBy?: UserSerializer;
    addresses?: Array<GetAddressSerializer>;
    stage?: string;
    uid?: number;
    name?: string;
    rejectReason?: string;
    createdOn?: string;
    verifiedOn?: string;
    verifiedBy?: UserSerializer;
    companyType?: string;
    modifiedOn?: string;
};
export type LocationIntegrationType = {
    order?: string;
    inventory?: string;
};
export type GetLocationSerializer = {
    modifiedBy?: UserSerializer1;
    timing?: Array<LocationDayWiseSerializer>;
    company?: GetCompanySerializer;
    stage?: string;
    verifiedBy?: UserSerializer1;
    displayName: string;
    phoneNumber: string;
    customJson?: any;
    address: GetAddressSerializer;
    uid?: number;
    documents?: Array<Document>;
    productReturnConfig?: ProductReturnConfigSerializer;
    verifiedOn?: string;
    contactNumbers?: Array<PhoneNumber>;
    createdBy?: UserSerializer1;
    code: string;
    createdOn?: string;
    gstCredentials?: InvoiceDetailsSerializer;
    storeType?: string;
    warnings?: any;
    name: string;
    manager?: LocationManagerSerializer;
    notificationEmails?: Array<string>;
    integrationType?: LocationIntegrationType;
    modifiedOn?: string;
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
        
        
        @property { string } [username]
        
        @property { string } [userId]
        
        @property { string } [contact]
        
         
    */
/**
        @typedef Document
        
        
        @property { string } [url]
        
        @property { string } legalName
        
        @property { string } value
        
        @property { string } type
        
        @property { boolean } [verified]
        
         
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
        @typedef GetAddressSerializer
        
        
        @property { string } [address2]
        
        @property { string } [countryCode]
        
        @property { string } [state]
        
        @property { number } [pincode]
        
        @property { string } [landmark]
        
        @property { string } [addressType]
        
        @property { number } [latitude]
        
        @property { number } [longitude]
        
        @property { string } [city]
        
        @property { string } [address1]
        
        @property { string } [country]
        
         
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
        
        
        @property { UserSerializer } [modifiedBy]
        
        @property { string } [stage]
        
        @property { string } [businessInfo]
        
        @property { UserSerializer } [verifiedBy]
        
        @property { string } companyType
        
        @property { number } uid
        
        @property { Array<Document> } [documents]
        
        @property { string } [verifiedOn]
        
        @property { ContactDetails } [contactDetails]
        
        @property { UserSerializer } [createdBy]
        
        @property { string } businessType
        
        @property { Array<GetAddressSerializer> } [addresses]
        
        @property { string } [createdOn]
        
        @property { BusinessCountryInfo } [businessCountryInfo]
        
        @property { Object } [warnings]
        
        @property { string } [name]
        
        @property { Array<string> } [notificationEmails]
        
        @property { BusinessDetails } [businessDetails]
        
        @property { boolean } [franchiseEnabled]
        
        @property { string } [modifiedOn]
        
         
    */
/**
        @typedef ErrorResponse
        
        
        @property { string } [code]
        
        @property { string } [message]
        
        @property { number } [status]
        
        @property { Object } [meta]
        
        @property { Object } [errors]
        
         
    */
/**
        @typedef CompanyAddress
        
        
        @property { string } [address2]
        
        @property { string } [countryCode]
        
        @property { string } state
        
        @property { number } pincode
        
        @property { string } [landmark]
        
        @property { number } latitude
        
        @property { number } longitude
        
        @property { string } city
        
        @property { string } address1
        
        @property { string } country
        
         
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
        @typedef CompanyStoreSerializerRequest
        
        
        @property { string } businessType
        
        @property { Object } [warnings]
        
        @property { Array<number> } brands
        
        @property { Document } document
        
        @property { CompanyAddress } address
        
        @property { number } [uid]
        
        @property { string } name
        
        @property { Array<string> } [notificationEmails]
        
        @property { BusinessCountryInfo1 } businessCountryInfo
        
        @property { ReferralInfo } [referralInfo]
        
        @property { string } [businessInfo]
        
        @property { boolean } [franchiseEnabled]
        
         
    */
/**
        @typedef SuccessResponse
        
        
        @property { boolean } [success]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef DocumentsObj
        
        
        @property { number } [verified]
        
        @property { number } [pending]
        
         
    */
/**
        @typedef MetricsSerializer
        
        
        @property { DocumentsObj } [store]
        
        @property { string } [stage]
        
        @property { number } [uid]
        
        @property { DocumentsObj } [companyDocuments]
        
        @property { DocumentsObj } [product]
        
        @property { DocumentsObj } [storeDocuments]
        
        @property { DocumentsObj } [brand]
        
         
    */
/**
        @typedef BrandBannerSerializer
        
        
        @property { string } [landscape]
        
        @property { string } [portrait]
        
         
    */
/**
        @typedef CreateUpdateBrandRequestSerializer
        
        
        @property { Object } [localeLanguage]
        
        @property { number } [uid]
        
        @property { BrandBannerSerializer } [banner]
        
        @property { string } [description]
        
        @property { Array<string> } [synonyms]
        
        @property { string } name
        
        @property { number } [companyId]
        
        @property { string } logo
        
        @property { string } [brandTier]
        
        @property { Object } [customJson]
        
         
    */
/**
        @typedef UserSerializer1
        
        
        @property { string } [username]
        
        @property { string } [userId]
        
        @property { string } [contact]
        
         
    */
/**
        @typedef GetBrandResponseSerializer
        
        
        @property { UserSerializer1 } [createdBy]
        
        @property { UserSerializer1 } [modifiedBy]
        
        @property { Object } [warnings]
        
        @property { Object } [localeLanguage]
        
        @property { string } [stage]
        
        @property { number } [uid]
        
        @property { BrandBannerSerializer } [banner]
        
        @property { string } [description]
        
        @property { string } name
        
        @property { string } [rejectReason]
        
        @property { Array<string> } [synonyms]
        
        @property { string } [createdOn]
        
        @property { string } [verifiedOn]
        
        @property { string } [logo]
        
        @property { Object } [customJson]
        
        @property { UserSerializer1 } [verifiedBy]
        
        @property { string } [slugKey]
        
        @property { string } [modifiedOn]
        
         
    */
/**
        @typedef CompanyBrandPostRequestSerializer
        
        
        @property { Array<number> } brands
        
        @property { number } company
        
        @property { number } [uid]
        
         
    */
/**
        @typedef CompanyBrandListSerializer
        
        
        @property { Object } [page]
        
        @property { Array<Object> } [items]
        
         
    */
/**
        @typedef LocationTimingSerializer
        
        
        @property { number } [minute]
        
        @property { number } [hour]
        
         
    */
/**
        @typedef LocationDayWiseSerializer
        
        
        @property { LocationTimingSerializer } [closing]
        
        @property { string } weekday
        
        @property { LocationTimingSerializer } [opening]
        
        @property { boolean } open
        
         
    */
/**
        @typedef GetAddressSerializer1
        
        
        @property { string } [address2]
        
        @property { string } [countryCode]
        
        @property { string } [state]
        
        @property { number } [pincode]
        
        @property { string } [landmark]
        
        @property { string } [addressType]
        
        @property { number } [latitude]
        
        @property { number } [longitude]
        
        @property { string } [city]
        
        @property { string } [address1]
        
        @property { string } [country]
        
         
    */
/**
        @typedef LocationManagerSerializer
        
        
        @property { PhoneNumber } mobileNo
        
        @property { string } [name]
        
        @property { string } [email]
        
         
    */
/**
        @typedef ProductReturnConfigSerializer
        
        
        @property { boolean } [onSameStore]
        
        @property { number } [storeUid]
        
         
    */
/**
        @typedef InvoiceCredSerializer
        
        
        @property { string } [username]
        
        @property { boolean } [enabled]
        
        @property { string } [password]
        
         
    */
/**
        @typedef InvoiceDetailsSerializer
        
        
        @property { InvoiceCredSerializer } [eWaybill]
        
        @property { InvoiceCredSerializer } [eInvoice]
        
         
    */
/**
        @typedef LocationSerializer
        
        
        @property { Array<LocationDayWiseSerializer> } [timing]
        
        @property { Object } [warnings]
        
        @property { string } code
        
        @property { number } company
        
        @property { number } [uid]
        
        @property { Array<Document> } [documents]
        
        @property { GetAddressSerializer1 } address
        
        @property { string } [stage]
        
        @property { string } name
        
        @property { LocationManagerSerializer } [manager]
        
        @property { Array<string> } [notificationEmails]
        
        @property { ProductReturnConfigSerializer } [productReturnConfig]
        
        @property { Array<PhoneNumber> } [contactNumbers]
        
        @property { InvoiceDetailsSerializer } [gstCredentials]
        
        @property { string } displayName
        
        @property { string } [storeType]
        
        @property { Object } [customJson]
        
         
    */
/**
        @typedef LocationListSerializer
        
        
        @property { Object } [page]
        
        @property { Array<Object> } [items]
        
         
    */
/**
        @typedef GetCompanySerializer
        
        
        @property { UserSerializer } [createdBy]
        
        @property { string } [businessType]
        
        @property { UserSerializer } [modifiedBy]
        
        @property { Array<GetAddressSerializer> } [addresses]
        
        @property { string } [stage]
        
        @property { number } [uid]
        
        @property { string } [name]
        
        @property { string } [rejectReason]
        
        @property { string } [createdOn]
        
        @property { string } [verifiedOn]
        
        @property { UserSerializer } [verifiedBy]
        
        @property { string } [companyType]
        
        @property { string } [modifiedOn]
        
         
    */
/**
        @typedef LocationIntegrationType
        
        
        @property { string } [order]
        
        @property { string } [inventory]
        
         
    */
/**
        @typedef GetLocationSerializer
        
        
        @property { UserSerializer1 } [modifiedBy]
        
        @property { Array<LocationDayWiseSerializer> } [timing]
        
        @property { GetCompanySerializer } [company]
        
        @property { string } [stage]
        
        @property { UserSerializer1 } [verifiedBy]
        
        @property { string } displayName
        
        @property { string } phoneNumber
        
        @property { Object } [customJson]
        
        @property { GetAddressSerializer } address
        
        @property { number } [uid]
        
        @property { Array<Document> } [documents]
        
        @property { ProductReturnConfigSerializer } [productReturnConfig]
        
        @property { string } [verifiedOn]
        
        @property { Array<PhoneNumber> } [contactNumbers]
        
        @property { UserSerializer1 } [createdBy]
        
        @property { string } code
        
        @property { string } [createdOn]
        
        @property { InvoiceDetailsSerializer } [gstCredentials]
        
        @property { string } [storeType]
        
        @property { Object } [warnings]
        
        @property { string } name
        
        @property { LocationManagerSerializer } [manager]
        
        @property { Array<string> } [notificationEmails]
        
        @property { LocationIntegrationType } [integrationType]
        
        @property { string } [modifiedOn]
        
         
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
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
      *
      * @summary: Get All Brand Payment Gateway Config Secret
      * @description: Get All Brand Payment Gateway Config Secret
      * @param {Object} arg - arg object.
      
      **/
    getBrandPaymentGatewayConfig({}?: any): any;
    /**
     *
     * @summary: Save Config Secret For Brand Payment Gateway
     * @description: Save Config Secret For Brand Payment Gateway
     * @param {Object} arg - arg object.
     * @param {PaymentGatewayConfigRequest} arg.body
     **/
    saveBrandPaymentGatewayConfig({ body }?: {
        body: PaymentGatewayConfigRequest;
    }): any;
    /**
     *
     * @summary: Save Config Secret For Brand Payment Gateway
     * @description: Save Config Secret For Brand Payment Gateway
     * @param {Object} arg - arg object.
     * @param {PaymentGatewayConfigRequest} arg.body
     **/
    updateBrandPaymentGatewayConfig({ body }?: {
        body: PaymentGatewayConfigRequest;
    }): any;
    /**
      *
      * @summary: Get All Valid Payment Options
      * @description: Use this API to get Get All Valid Payment Options for making payment
      * @param {Object} arg - arg object.
      * @param {boolean} arg.refresh -
      * @param {string} arg.requestType -
      
      **/
    getPaymentModeRoutes({ refresh, requestType }?: {
        refresh: boolean;
        requestType: string;
    }): any;
}
export class Assets {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     *
     * @summary: Copy Files
     * @description: Copy Files
     * @param {Object} arg - arg object.
     * @param {boolean} [arg.sync] - sync
     * @param {BulkRequest} arg.body
     **/
    appCopyFiles({ body, sync }?: {
        sync?: boolean;
        body: BulkRequest;
    }): any;
    /**
      *
      * @summary: Browse Files
      * @description: Browse Files
      * @param {Object} arg - arg object.
      * @param {string} arg.namespace - bucket name
      
      **/
    appBrowse({ namespace }?: {
        namespace: string;
    }): any;
}
