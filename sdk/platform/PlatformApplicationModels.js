const APIClient = require("./PlatformAPIClient");

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

class Payment {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
    *
    * @summary: Get All Brand Payment Gateway Config Secret
    * @description: Get All Brand Payment Gateway Config Secret
    * @param {Object} arg - arg object.
    
    **/
  getBrandPaymentGatewayConfig({} = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/aggregator/request`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Save Config Secret For Brand Payment Gateway
   * @description: Save Config Secret For Brand Payment Gateway
   * @param {Object} arg - arg object.
   * @param {PaymentGatewayConfigRequest} arg.body
   **/
  saveBrandPaymentGatewayConfig({ body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/aggregator/request`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Save Config Secret For Brand Payment Gateway
   * @description: Save Config Secret For Brand Payment Gateway
   * @param {Object} arg - arg object.
   * @param {PaymentGatewayConfigRequest} arg.body
   **/
  updateBrandPaymentGatewayConfig({ body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "put",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/aggregator/request`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get All Valid Payment Options
    * @description: Use this API to get Get All Valid Payment Options for making payment
    * @param {Object} arg - arg object.
    * @param {boolean} arg.refresh - 
    * @param {string} arg.requestType - 
    
    **/
  getPaymentModeRoutes({ refresh, requestType } = {}) {
    const queryObj = {};
    queryObj["refresh"] = refresh;
    queryObj["request_type"] = requestType;

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/options`,
      queryObj,
      undefined
    );
  }
}

class Assets {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
   *
   * @summary: Copy Files
   * @description: Copy Files
   * @param {Object} arg - arg object.
   * @param {boolean} [arg.sync] - sync
   * @param {BulkRequest} arg.body
   **/
  appCopyFiles({ body, sync } = {}) {
    const queryObj = {};
    queryObj["sync"] = sync;

    return APIClient.execute(
      this.config,
      "post",
      `/service/application/assets/v1.0/uploads/company/${this.config.companyId}/application/${this.applicationId}/copy/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Browse Files
    * @description: Browse Files
    * @param {Object} arg - arg object.
    * @param {string} arg.namespace - bucket name
    
    **/
  appBrowse({ namespace } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/application/assets/v1.0/company/${this.config.companyId}/application/${this.applicationId}/namespaces/${namespace}/browse/`,
      queryObj,
      undefined
    );
  }
}

module.exports = {
  Payment,
  Assets,
};
