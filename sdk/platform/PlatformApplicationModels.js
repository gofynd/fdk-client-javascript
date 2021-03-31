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
