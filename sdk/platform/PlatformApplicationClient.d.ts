export = PlatformApplicationClient;
declare class PlatformApplicationClient {
    constructor(applicationId: any, config: any);
    config: any;
    companyId: any;
    applicationId: any;
    lead: Lead;
    theme: Theme;
    user: User;
    communication: Communication;
    payment: Payment;
    order: Order;
    catalog: Catalog;
    assets: Assets;
    share: Share;
    configuration: Configuration;
    cart: Cart;
    analytics: Analytics;
}
declare namespace PlatformApplicationClient {
    export { TicketList, Page, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, KeyValue, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, UserSchema, PhoneNumber, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketCategory, SubmitButton, PollForAssignment, CustomForm, TicketHistory, Ticket, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, pagesSchema, availableSectionSchema, sectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, AvailablePages, Seo, Sections, Config, Preset, GlobalSchema, ListSchema, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, BlocksProps, PageSections, PageSectionsBlocks, PageSectionsBlocksProps, Predicate, Screen, PredicateUserSchema, Route, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, SendEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, AuthSuccess, SendOtpResponse, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, Mobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, Facebook, Accountkit, Google, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutsResponse, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, GetActivityStatus, ActivityHistory, FailedOrders, FailOrder, MarketplaceOrder, TotalDiscountsSet, PresentmentMoney, ShopMoney, TotalPriceSet, TotalPriceSetShopMoney, TotalPriceSetPresentmentMoney, TotalTaxSet, TotalTaxSetShopMoney, TotalTaxSetPresentmentMoney, SubtotalPriceSet, SubtotalPriceSetShopMoney, SubtotalPriceSetPresentmentMoney, LineItems, LineItemsArticle, Quantities, NotAvailable, Sellable, OrderCommitted, Damaged, Manufacturer, ArticlePrice, Company, FailOrderDateMeta, MarketplaceIdentifiers, TatacliqLuxury, Dimension, Weight, Store, ArticleMeta, ArticleBrand, LineItemsArticleIdentifier, PriceSet, PriceSetShopMoney, PriceSetPresentmentMoney, TaxLines, TaxLinesPriceSet, TaxLinesPriceSetShopMoney, TaxLinesPriceSetPresentmentMoney, TotalDiscountSet, TotalDiscountSetPresentmentMoney, TotalDiscountSetShopMoney, BillingAddress, TotalShippingPriceSet, TotalShippingPriceSetShopMoney, TotalShippingPriceSetPresentmentMoney, Customer, DefaultAddress, TotalLineItemsPriceSet, TotalLineItemsPriceSetShopMoney, TotalLineItemsPriceSetPresentmentMoney, ShippingAddress, OrderListing, OrderItems, PlatformOrderUserInfo, PlatformDeliveryAddress, Channel, PlatformBreakupValues, PlatformApplication, ArticleAssignment, PlatformShipment, PlatformShipmentStatus, Bags, BagFinancialBreakup, Identifiers, BagCurrStatus, BagItem, BagItemAttributes, BagArticle, ArticleIdentifiers, Set, SetSizeDistribution, Sizes, BagArticleReturnConfig, ShipmentPrices, GstDetails, BagBreakupValues, BagCurrentStatus, BagStateMapper, BagStatus, BagStatusBagStateMapper, BagPrices, ShipmentBreakupValues, DpDetails, ShipmentInvoice, RtoAddress, StoreAddressJson, PlatformFulfillingStore, FulfillingStoreMeta, AdditionalContactDetails, Documents, Gst, ProductReturnConfig, Timing, Opening, Closing, FulfillingStoreStoreAddressJson, Payments, ShipmentGst, PlatformShipmentBrand, Promise, Timestamp, ShipmentTrackingDetails, ShipmentUser, ItemsPayments, Filters, Stages, StagesFilters, Options, NextOrderStatus, BagConfirmed, DpAssigned, ReturnBagDelivered, Placed, DeliveryDone, Pending, BagPacked, PlatformOrderPage, ItemTotal, AppliedFilters, UpdateOrderReprocessResponse, PlatformOrderTrack, GetPingResponse, UpdateShipmentStatusResponse, UpdateShipmentStatusBody, PlatformShipmentTrack, Results, UpdateProcessShipmenstRequestBody, UpdateProcessShipmenstRequestResponse, GetVoiceCallbackResponse, GetClickToCallResponse, ApefaceApiError, GetSearchWordsData, GetSearchWordsDetailResponse, ErrorResponse, SearchKeywordResult, CreateSearchKeyword, DeleteResponse, GetSearchWordsResponse, GetAutocompleteWordsData, GetAutocompleteWordsResponse, Media, AutocompletePageAction, AutocompleteAction, AutocompleteResult, CreateAutocompleteKeyword, CreateAutocompleteWordsResponse, ProductBundleItem, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleRequest, Price, Size, LimitedProductData, GetProducts, GetProductBundleResponse, ProductBundleUpdateRequest, ListSizeGuide, Meta, Guide, ValidateSizeGuide, SuccessResponse, SizeGuideResponse, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingResponse, GetCatalogConfigurationDetailsProduct, GetCatalogConfigurationMetaData, ProductSize, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProduct, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationListing, AppCatalogConfiguration, GetAppCatalogConfiguration, AppConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductSortOn, ProductFiltersKey, ProductFiltersValue, ProductFilters, GetCollectionQueryOptionResponse, Media1, ProductListingActionPage, ProductListingAction, BannerImage, ImageUrls, GetCollectionDetailNest, CollectionListingFilterTag, CollectionListingFilterType, CollectionListingFilter, GetCollectionListingResponse, CollectionBadge, CollectionImage, SeoDetail, UserInfo, Schedule, CollectionBanner, CreateCollection, CollectionCreateResponse, CollectionDetailResponse, Price1, ProductListingPrice, ProductListingDetail, GetCollectionItemsResponse, CollectionItemRequest, UpdatedResponse, CatalogInsightItem, CatalogInsightBrand, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, MultipleCommon, BasePage, ProdcutTemplateCategoriesResponse, PTErrorResponse, UserSerializer, GetDepartment, BasePage1, DepartmentsResponse, DepartmentErrorResponse, ProductTemplate, TemplatesResponse, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, ProductConfligurationDownloads, Hierarchy, Media2, CategoryMappingValues, CategoryMapping, Category, CategoryResponse, CategoryRequestBody, CategoryCreateResponse, CategoryUpdateResponse, VerifiedBy, UserCommon, Attributes, Logo, Brand, ProductPublished, Product, PageData, ProductListingResponse, ReturnConfig, Trader, ProductPublish, OrderQuantity, TeaserTag, CustomOrder, ProductCreateUpdate, ValidateProduct, UserDetail, ProductBulkRequest, ProductBulkRequestList, UserInfo1, BulkJob, BulkProductRequest, NestedTags, ProductTagsViewResponse, Items, BulkAssetResponse, ProductBulkAssets, InventoryRequest, GTIN, SetSize, SizeDistribution, InventorySet, InvSize, ItemQuery, InventoryRequest1, BulkRequestGet, CommonResponse, Size1, InventoryBulkRequest, InventoryExportJob, InventoryExportRequest, FilerList, InventoryConfig, CompanyAddress, Document, ReferralInfo, BusinessCountryInfo, CompanyStoreSerializerRequest, Website, BusinessDetails, GetAddressSerializer, BusinessCountryInfo1, ContactDetails, GetCompanyProfileSerializerResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, CreateUpdateBrandRequestSerializer, UserSerializer1, GetBrandResponseSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, LocationListSerializer, GetAddressSerializer1, LocationManagerSerializer, LocationTimingSerializer, LocationDayWiseSerializer, ProductReturnConfigSerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, LocationSerializer, GetCompanySerializer, LocationIntegrationType, GetLocationSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, RewardPointsConfig, Credit, Debit, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPoints, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, ListingPageFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, Instagram, Twitter, Pinterest, GooglePlus, Youtube, LinkedIn, Vimeo, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, Auth, GoogleMap, GoogleMapCredentials, Rule, Ownership, CouponDateMeta, DisplayMetaDict, DisplayMeta, CouponSchedule, BulkBundleRestriction, UsesRemaining, UsesRestriction, PostOrder, PriceRange, PaymentAllowValue, PaymentModes, PaymentCodes, Restrictions, RuleDefinition, State, Validation, Identifier, Validity, CouponAction, CouponAuthor, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, StoreMapping, AllChannels, MyntraPayload, AmazonPayload, FlipkartPayload, TatacliqPayload, AjioPayload, InventorySyncConfig, StoreMappingPayload, StatusPayload, StatusResp, SyncPayload, SyncResp, MkpResp, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes };
}
/**
        @typedef TicketList
        
        
        @property { Array<Ticket> } [items]
        
        @property { Filter } [filters]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef Page
        
        
        @property { number } [itemTotal]
        
        @property { string } [nextId]
        
        @property { boolean } [hasPrevious]
        
        @property { boolean } [hasNext]
        
        @property { number } [current]
        
        @property { string } type
        
        @property { number } [size]
        
         
    */
/**
        @typedef TicketHistoryList
        
        
        @property { Array<TicketHistory> } [docs]
        
        @property { number } [limit]
        
        @property { number } [page]
        
        @property { number } [pages]
        
        @property { number } [total]
        
         
    */
/**
        @typedef CustomFormList
        
        
        @property { Array<CustomForm> } [docs]
        
        @property { number } [limit]
        
        @property { number } [page]
        
        @property { number } [pages]
        
        @property { number } [total]
        
         
    */
/**
        @typedef CreateCustomFormPayload
        
        
        @property { string } slug
        
        @property { string } title
        
        @property { Array<Object> } inputs
        
        @property { string } [description]
        
        @property { string } [headerImage]
        
        @property { boolean } [shouldNotify]
        
        @property { string } [successMessage]
        
        @property { PollForAssignment } [pollForAssignment]
        
         
    */
/**
        @typedef EditCustomFormPayload
        
        
        @property { string } title
        
        @property { Array<Object> } inputs
        
        @property { string } [description]
        
        @property { string } [headerImage]
        
        @property { boolean } [shouldNotify]
        
        @property { boolean } [loginRequired]
        
        @property { string } [successMessage]
        
        @property { PollForAssignment } [pollForAssignment]
        
         
    */
/**
        @typedef EditTicketPayload
        
        
        @property { TicketContent } [content]
        
        @property { string } [category]
        
        @property { string } [source]
        
        @property { string } [status]
        
        @property { string } [priority]
        
        @property { AgentChangePayload } [assignedTo]
        
        @property { Array<string> } [tags]
        
         
    */
/**
        @typedef AgentChangePayload
        
        
        @property { string } agentId
        
         
    */
/**
        @typedef CreateVideoRoomResponse
        
        
        @property { string } uniqueName
        
         
    */
/**
        @typedef CloseVideoRoomResponse
        
        
        @property { boolean } success
        
         
    */
/**
        @typedef CreateVideoRoomPayload
        
        
        @property { string } uniqueName
        
        @property { Array<Object> } [notify]
        
         
    */
/**
        @typedef Filter
        
        
        @property { Array<Priority> } priorities
        
        @property { Array<TicketCategory> } [categories]
        
        @property { Array<Status> } statuses
        
        @property { Array<Object> } assignees
        
         
    */
/**
        @typedef TicketHistoryPayload
        
        
        @property { Object } value
        
        @property { string } type
        
         
    */
/**
        @typedef CustomFormSubmissionPayload
        
        
        @property { Array<KeyValue> } response
        
         
    */
/**
        @typedef KeyValue
        
        
        @property { string } key
        
        @property { string } value
        
         
    */
/**
        @typedef GetTokenForVideoRoomResponse
        
        
        @property { string } accessToken
        
         
    */
/**
        @typedef GetParticipantsInsideVideoRoomResponse
        
        
        @property { Array<Participant> } participants
        
         
    */
/**
        @typedef Participant
        
        
        @property { UserSchema } [user]
        
        @property { string } [identity]
        
        @property { string } [status]
        
         
    */
/**
        @typedef UserSchema
        
        
        @property { string } [firstName]
        
        @property { string } [lastName]
        
        @property { Array<PhoneNumber> } [phoneNumbers]
        
        @property { Array<Email> } [emails]
        
        @property { string } [gender]
        
        @property { boolean } [active]
        
        @property { string } [profilePicUrl]
        
        @property { string } [username]
        
        @property { string } [accountType]
        
        @property { string } [uid]
        
        @property { Debug } [debug]
        
        @property { boolean } [hasOldPasswordHash]
        
        @property { string } [id]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
         
    */
/**
        @typedef PhoneNumber
        
        
        @property { boolean } [active]
        
        @property { boolean } [primary]
        
        @property { boolean } [verified]
        
        @property { string } [phone]
        
        @property { number } [countryCode]
        
         
    */
/**
        @typedef Email
        
        
        @property { boolean } [primary]
        
        @property { boolean } [verified]
        
        @property { string } [email]
        
        @property { boolean } [active]
        
         
    */
/**
        @typedef Debug
        
        
        @property { string } [source]
        
        @property { string } [platform]
        
         
    */
/**
        @typedef SubmitCustomFormResponse
        
        
        @property { Ticket } ticket
        
         
    */
/**
        @typedef TicketContext
        
        
        @property { string } [applicationId]
        
        @property { string } companyId
        
         
    */
/**
        @typedef CreatedOn
        
        
        @property { string } userAgent
        
         
    */
/**
        @typedef TicketAsset
        
        
        @property { string } [display]
        
        @property { string } value
        
        @property { string } type
        
         
    */
/**
        @typedef TicketContent
        
        
        @property { string } title
        
        @property { string } [description]
        
        @property { Array<TicketAsset> } [attachments]
        
         
    */
/**
        @typedef AddTicketPayload
        
        
        @property { string } status
        
        @property { string } priority
        
        @property { string } category
        
        @property { TicketContent } content
        
         
    */
/**
        @typedef Priority
        
        
        @property { string } key
        
        @property { string } display
        
        @property { string } color
        
         
    */
/**
        @typedef Status
        
        
        @property { string } key
        
        @property { string } display
        
        @property { string } color
        
         
    */
/**
        @typedef TicketCategory
        
        
        @property { string } key
        
        @property { string } display
        
        @property { CustomForm } [form]
        
         
    */
/**
        @typedef SubmitButton
        
        
        @property { string } title
        
        @property { string } titleColor
        
        @property { string } backgroundColor
        
         
    */
/**
        @typedef PollForAssignment
        
        
        @property { number } duration
        
        @property { string } message
        
        @property { string } successMessage
        
        @property { string } failureMessage
        
         
    */
/**
        @typedef CustomForm
        
        
        @property { string } applicationId
        
        @property { string } slug
        
        @property { string } [headerImage]
        
        @property { string } title
        
        @property { string } [description]
        
        @property { boolean } loginRequired
        
        @property { boolean } shouldNotify
        
        @property { string } [successMessage]
        
        @property { SubmitButton } [submitButton]
        
        @property { Array<Object> } inputs
        
        @property { CreatedOn } [createdOn]
        
        @property { Object } [createdBy]
        
        @property { PollForAssignment } [pollForAssignment]
        
        @property { string } id
        
         
    */
/**
        @typedef TicketHistory
        
        
        @property { string } type
        
        @property { Object } value
        
        @property { string } ticketId
        
        @property { CreatedOn } [createdOn]
        
        @property { Object } [createdBy]
        
        @property { string } id
        
        @property { string } [updatedAt]
        
        @property { string } [createdAt]
        
         
    */
/**
        @typedef Ticket
        
        
        @property { TicketContext } [context]
        
        @property { CreatedOn } [createdOn]
        
        @property { string } [responseId]
        
        @property { TicketContent } [content]
        
        @property { string } ticketId
        
        @property { TicketCategory } category
        
        @property { string } source
        
        @property { Status } status
        
        @property { Priority } priority
        
        @property { Object } [createdBy]
        
        @property { Object } [assignedTo]
        
        @property { Array<string> } [tags]
        
        @property { Object } [customJson]
        
        @property { string } [id]
        
        @property { string } [updatedAt]
        
        @property { string } [createdAt]
        
         
    */
/**
        @typedef PaginationSchema
        
        
        @property { number } [size]
        
        @property { number } [itemTotal]
        
        @property { boolean } [hasNext]
        
        @property { string } [type]
        
        @property { number } [current]
        
         
    */
/**
        @typedef ThemesListingResponseSchema
        
        
        @property { Array<ThemesSchema> } [items]
        
        @property { PaginationSchema } [page]
        
         
    */
/**
        @typedef AddThemeRequestSchema
        
        
        @property { string } [themeId]
        
         
    */
/**
        @typedef UpgradableThemeSchema
        
        
        @property { string } [parentTheme]
        
        @property { string } [appliedTheme]
        
        @property { boolean } [upgrade]
        
         
    */
/**
        @typedef FontsSchema
        
        
        @property { FontsSchemaItems } [items]
        
        @property { string } [kind]
        
         
    */
/**
        @typedef BlitzkriegApiErrorSchema
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef BlitzkriegNotFoundSchema
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef BlitzkriegInternalServerErrorSchema
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef FontsSchemaItems
        
        
        @property { string } [family]
        
        @property { Array<string> } [variants]
        
        @property { Array<string> } [subsets]
        
        @property { string } [version]
        
        @property { string } [lastModified]
        
        @property { FontsSchemaItemsFiles } [files]
        
        @property { string } [category]
        
        @property { string } [kind]
        
         
    */
/**
        @typedef FontsSchemaItemsFiles
        
        
        @property { string } [regular]
        
        @property { string } [italic]
        
        @property { string } [bold]
        
         
    */
/**
        @typedef ThemesSchema
        
        
        @property { string } [application]
        
        @property { boolean } [applied]
        
        @property { boolean } [customized]
        
        @property { boolean } [published]
        
        @property { boolean } [archived]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [version]
        
        @property { string } [parentThemeVersion]
        
        @property { string } [parentTheme]
        
        @property { Information } [information]
        
        @property { Array<string> } [tags]
        
        @property { Src } [src]
        
        @property { AssetsSchema } [assets]
        
        @property { AvailablePages } [availablePages]
        
        @property { Array<availableSectionSchema> } [availableSections]
        
        @property { Array<sectionSchema> } [sections]
        
        @property { Object } [constants]
        
        @property { Object } [styles]
        
        @property { Config } [config]
        
        @property { Object } [settings]
        
        @property { Font } [font]
        
        @property { string } [id]
        
        @property { number } [v]
        
        @property { Colors } [colors]
        
         
    */
/**
        @typedef pagesSchema
        
        
        @property { string } [text]
        
        @property { string } [path]
        
        @property { string } [type]
        
        @property { string } [value]
        
        @property { Sections } [sections]
        
         
    */
/**
        @typedef availableSectionSchema
        
        
        @property { Blocks } [blocks]
        
        @property { string } [name]
        
        @property { string } [label]
        
        @property { Object } [props]
        
         
    */
/**
        @typedef sectionSchema
        
        
        @property { string } [pageKey]
        
        @property { PageSections } [pageSections]
        
         
    */
/**
        @typedef Information
        
        
        @property { Images } [images]
        
        @property { Array<string> } [features]
        
        @property { string } [name]
        
        @property { string } [description]
        
         
    */
/**
        @typedef Images
        
        
        @property { Array<string> } [desktop]
        
        @property { Array<string> } [android]
        
        @property { Array<string> } [ios]
        
        @property { Array<string> } [thumbnail]
        
         
    */
/**
        @typedef Src
        
        
        @property { string } [link]
        
         
    */
/**
        @typedef AssetsSchema
        
        
        @property { UmdJs } [umdJs]
        
        @property { CommonJs } [commonJs]
        
        @property { Css } [css]
        
         
    */
/**
        @typedef UmdJs
        
        
        @property { string } [link]
        
         
    */
/**
        @typedef CommonJs
        
        
        @property { string } [link]
        
         
    */
/**
        @typedef Css
        
        
        @property { string } [link]
        
         
    */
/**
        @typedef AvailablePages
        
        
        @property { string } [path]
        
        @property { string } [type]
        
        @property { string } [text]
        
        @property { string } [value]
        
        @property { Seo } [seo]
        
        @property { Object } [props]
        
        @property { Sections } [sections]
        
         
    */
/**
        @typedef Seo
        
        
        @property { string } [title]
        
        @property { string } [description]
        
         
    */
/**
        @typedef Sections
        
        
        @property { string } [attributes]
        
         
    */
/**
        @typedef Config
        
        
        @property { Preset } [preset]
        
        @property { GlobalSchema } [globalSchema]
        
        @property { string } [current]
        
        @property { ListSchema } [list]
        
         
    */
/**
        @typedef Preset
        
        
        @property { sectionSchema } [sections]
        
         
    */
/**
        @typedef GlobalSchema
        
        
        @property { Object } [props]
        
         
    */
/**
        @typedef ListSchema
        
        
        @property { Object } [global]
        
        @property { ConfigPage } [page]
        
        @property { string } [name]
        
         
    */
/**
        @typedef Colors
        
        
        @property { string } [bgColor]
        
        @property { string } [primaryColor]
        
        @property { string } [secondaryColor]
        
        @property { string } [accentColor]
        
        @property { string } [linkColor]
        
        @property { string } [buttonSecondaryColor]
        
         
    */
/**
        @typedef Custom
        
        
        @property { Object } [props]
        
         
    */
/**
        @typedef ConfigPage
        
        
        @property { Object } [settings]
        
        @property { string } [page]
        
         
    */
/**
        @typedef Font
        
        
        @property { string } [family]
        
        @property { Variants } [variants]
        
         
    */
/**
        @typedef Variants
        
        
        @property { Medium } [medium]
        
        @property { SemiBold } [semiBold]
        
        @property { Bold } [bold]
        
        @property { Light } [light]
        
        @property { Regular } [regular]
        
         
    */
/**
        @typedef Medium
        
        
        @property { string } [name]
        
        @property { string } [file]
        
         
    */
/**
        @typedef SemiBold
        
        
        @property { string } [name]
        
        @property { string } [file]
        
         
    */
/**
        @typedef Bold
        
        
        @property { string } [name]
        
        @property { string } [file]
        
         
    */
/**
        @typedef Light
        
        
        @property { string } [name]
        
        @property { string } [file]
        
         
    */
/**
        @typedef Regular
        
        
        @property { string } [name]
        
        @property { string } [file]
        
         
    */
/**
        @typedef Blocks
        
        
        @property { string } [type]
        
        @property { string } [name]
        
        @property { BlocksProps } [props]
        
         
    */
/**
        @typedef BlocksProps
        
        
        @property { string } [id]
        
        @property { string } [label]
        
        @property { string } [type]
        
         
    */
/**
        @typedef PageSections
        
        
        @property { PageSectionsBlocks } [blocks]
        
        @property { string } [name]
        
        @property { string } [label]
        
        @property { Object } [props]
        
        @property { Object } [preset]
        
        @property { Predicate } [predicate]
        
         
    */
/**
        @typedef PageSectionsBlocks
        
        
        @property { string } [type]
        
        @property { string } [name]
        
        @property { PageSectionsBlocksProps } [props]
        
         
    */
/**
        @typedef PageSectionsBlocksProps
        
        
        @property { string } [id]
        
        @property { string } [label]
        
        @property { string } [type]
        
         
    */
/**
        @typedef Predicate
        
        
        @property { Screen } [screen]
        
        @property { PredicateUserSchema } [user]
        
        @property { Route } [route]
        
         
    */
/**
        @typedef Screen
        
        
        @property { boolean } [mobile]
        
        @property { boolean } [desktop]
        
        @property { boolean } [tablet]
        
         
    */
/**
        @typedef PredicateUserSchema
        
        
        @property { boolean } [authenticated]
        
        @property { boolean } [anonymous]
        
         
    */
/**
        @typedef Route
        
        
        @property { string } [selected]
        
        @property { string } [exactUrl]
        
        @property { Object } [query]
        
         
    */
/**
        @typedef EditEmailRequestSchema
        
        
        @property { string } [email]
        
         
    */
/**
        @typedef SendVerificationLinkMobileRequestSchema
        
        
        @property { boolean } [verified]
        
        @property { boolean } [active]
        
        @property { string } [countryCode]
        
        @property { string } [phone]
        
        @property { boolean } [primary]
        
         
    */
/**
        @typedef EditMobileRequestSchema
        
        
        @property { string } [countryCode]
        
        @property { string } [phone]
        
         
    */
/**
        @typedef EditProfileRequestSchema
        
        
        @property { string } [firstName]
        
        @property { string } [lastName]
        
        @property { string } [mobile]
        
        @property { string } [email]
        
        @property { string } [gender]
        
        @property { string } [dob]
        
        @property { string } [profilePicUrl]
        
        @property { string } [androidHash]
        
        @property { string } [sender]
        
        @property { string } [registerToken]
        
         
    */
/**
        @typedef SendEmailOtpRequestSchema
        
        
        @property { string } [email]
        
        @property { string } [action]
        
        @property { string } [token]
        
        @property { string } [registerToken]
        
         
    */
/**
        @typedef VerifyOtpRequestSchema
        
        
        @property { string } [requestId]
        
        @property { string } [registerToken]
        
        @property { string } [otp]
        
         
    */
/**
        @typedef SendMobileOtpRequestSchema
        
        
        @property { string } [mobile]
        
        @property { string } [countryCode]
        
        @property { string } [action]
        
        @property { string } [token]
        
        @property { string } [androidHash]
        
        @property { string } [force]
        
         
    */
/**
        @typedef UpdatePasswordRequestSchema
        
        
        @property { string } [oldPassword]
        
        @property { string } [newPassword]
        
         
    */
/**
        @typedef FormRegisterRequestSchema
        
        
        @property { string } [firstName]
        
        @property { string } [lastName]
        
        @property { string } [gender]
        
        @property { string } [email]
        
        @property { string } [password]
        
        @property { FormRegisterRequestSchemaPhone } [phone]
        
        @property { string } [registerToken]
        
         
    */
/**
        @typedef TokenRequestBodySchema
        
        
        @property { string } [token]
        
         
    */
/**
        @typedef ForgotPasswordRequestSchema
        
        
        @property { string } [code]
        
        @property { string } [password]
        
         
    */
/**
        @typedef CodeRequestBodySchema
        
        
        @property { string } [code]
        
         
    */
/**
        @typedef SendResetPasswordEmailRequestSchema
        
        
        @property { string } [email]
        
        @property { string } [captchaCode]
        
         
    */
/**
        @typedef PasswordLoginRequestSchema
        
        
        @property { string } [captchaCode]
        
        @property { string } [password]
        
        @property { string } [username]
        
         
    */
/**
        @typedef SendOtpRequestSchema
        
        
        @property { string } [countryCode]
        
        @property { string } [captchaCode]
        
        @property { string } [mobile]
        
         
    */
/**
        @typedef OAuthRequestSchema
        
        
        @property { boolean } [isSignedIn]
        
        @property { OAuthRequestSchemaOauth2 } [oauth2]
        
        @property { OAuthRequestSchemaProfile } [profile]
        
         
    */
/**
        @typedef AuthSuccess
        
        
        @property { string } [registerToken]
        
        @property { boolean } [userExists]
        
        @property { AuthSuccessUser } [user]
        
         
    */
/**
        @typedef SendOtpResponse
        
        
        @property { number } [resendTimer]
        
        @property { string } [resendToken]
        
        @property { boolean } [success]
        
        @property { string } [requestId]
        
        @property { string } [message]
        
        @property { string } [mobile]
        
        @property { string } [countryCode]
        
         
    */
/**
        @typedef LoginSuccess
        
        
        @property { UserSchema } [user]
        
         
    */
/**
        @typedef VerifyOtpSuccess
        
        
        @property { UserSchema } [user]
        
        @property { boolean } [userExists]
        
         
    */
/**
        @typedef ResetPasswordSuccess
        
        
        @property { string } [status]
        
         
    */
/**
        @typedef RegisterFormSuccess
        
        
        @property { number } [resendTimer]
        
        @property { string } [resendToken]
        
        @property { boolean } [success]
        
        @property { string } [requestId]
        
        @property { string } [message]
        
        @property { string } [mobile]
        
        @property { string } [countryCode]
        
         
    */
/**
        @typedef VerifyEmailSuccess
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef HasPasswordSuccess
        
        
        @property { boolean } [result]
        
         
    */
/**
        @typedef LogoutSuccess
        
        
        @property { boolean } [logout]
        
         
    */
/**
        @typedef OtpSuccess
        
        
        @property { number } [resendTimer]
        
        @property { string } [resendToken]
        
        @property { boolean } [success]
        
        @property { string } [requestId]
        
        @property { string } [message]
        
        @property { string } [mobile]
        
        @property { string } [countryCode]
        
         
    */
/**
        @typedef EmailOtpSuccess
        
        
        @property { string } [resendToken]
        
         
    */
/**
        @typedef SessionListSuccess
        
        
        @property { Array<string> } [sessions]
        
         
    */
/**
        @typedef VerifyMobileOTPSuccess
        
        
        @property { UserSchema } [user]
        
        @property { boolean } [verifyMobileLink]
        
         
    */
/**
        @typedef VerifyEmailOTPSuccess
        
        
        @property { UserSchema } [user]
        
        @property { boolean } [verifyEmailLink]
        
         
    */
/**
        @typedef SendMobileVerifyLinkSuccess
        
        
        @property { boolean } [verifyMobileLink]
        
         
    */
/**
        @typedef SendEmailVerifyLinkSuccess
        
        
        @property { boolean } [verifyEmailLink]
        
         
    */
/**
        @typedef UserSearchResponseSchema
        
        
        @property { Array<UserSchema> } [users]
        
         
    */
/**
        @typedef CustomerListResponseSchema
        
        
        @property { Array<UserSchema> } [items]
        
        @property { PaginationSchema } [page]
        
         
    */
/**
        @typedef UnauthorizedSchema
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef UnauthenticatedSchema
        
        
        @property { boolean } [authenticated]
        
         
    */
/**
        @typedef NotFoundSchema
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef AuthenticationApiErrorSchema
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef ProfileEditSuccessSchema
        
        
        @property { string } [email]
        
        @property { boolean } [verifyEmailOtp]
        
        @property { boolean } [verifyEmailLink]
        
        @property { boolean } [verifyMobileOtp]
        
        @property { string } [user]
        
        @property { string } [registerToken]
        
        @property { boolean } [userExists]
        
         
    */
/**
        @typedef FormRegisterRequestSchemaPhone
        
        
        @property { string } [countryCode]
        
        @property { string } [mobile]
        
         
    */
/**
        @typedef OAuthRequestSchemaOauth2
        
        
        @property { string } [accessToken]
        
        @property { number } [expiry]
        
        @property { string } [refreshToken]
        
         
    */
/**
        @typedef OAuthRequestSchemaProfile
        
        
        @property { string } [lastName]
        
        @property { string } [image]
        
        @property { string } [id]
        
        @property { string } [email]
        
        @property { string } [fullName]
        
        @property { string } [firstName]
        
         
    */
/**
        @typedef AuthSuccessUser
        
        
        @property { string } [firstName]
        
        @property { string } [lastName]
        
        @property { AuthSuccessUserDebug } [debug]
        
        @property { boolean } [active]
        
        @property { AuthSuccessUserEmails } [emails]
        
         
    */
/**
        @typedef AuthSuccessUserDebug
        
        
        @property { string } [platform]
        
         
    */
/**
        @typedef AuthSuccessUserEmails
        
        
        @property { string } [email]
        
        @property { boolean } [verified]
        
        @property { boolean } [primary]
        
        @property { boolean } [active]
        
         
    */
/**
        @typedef PlatformSchema
        
        
        @property { string } [display]
        
        @property { LookAndFeel } [lookAndFeel]
        
        @property { string } [updatedAt]
        
        @property { boolean } [active]
        
        @property { boolean } [forgotPassword]
        
        @property { Login } [login]
        
        @property { boolean } [skipCaptcha]
        
        @property { string } [name]
        
        @property { MetaSchema } [meta]
        
        @property { string } [id]
        
        @property { Social } [social]
        
        @property { RequiredFields } [requiredFields]
        
        @property { RegisterRequiredFields } [registerRequiredFields]
        
        @property { boolean } [skipLogin]
        
        @property { FlashCard } [flashCard]
        
        @property { string } [subtext]
        
        @property { SocialTokens } [socialTokens]
        
        @property { string } [createdAt]
        
        @property { boolean } [register]
        
         
    */
/**
        @typedef LookAndFeel
        
        
        @property { string } [cardPosition]
        
        @property { string } [backgroundColor]
        
         
    */
/**
        @typedef Login
        
        
        @property { boolean } [password]
        
        @property { boolean } [otp]
        
         
    */
/**
        @typedef MetaSchema
        
        
        @property { boolean } [fyndDefault]
        
         
    */
/**
        @typedef Social
        
        
        @property { boolean } [accountKit]
        
        @property { boolean } [facebook]
        
        @property { boolean } [google]
        
         
    */
/**
        @typedef RequiredFields
        
        
        @property { Email } [email]
        
        @property { Mobile } [mobile]
        
         
    */
/**
        @typedef Mobile
        
        
        @property { boolean } [isRequired]
        
        @property { string } [level]
        
         
    */
/**
        @typedef RegisterRequiredFields
        
        
        @property { RegisterRequiredFieldsEmail } [email]
        
        @property { RegisterRequiredFieldsMobile } [mobile]
        
         
    */
/**
        @typedef RegisterRequiredFieldsEmail
        
        
        @property { boolean } [isRequired]
        
        @property { string } [level]
        
         
    */
/**
        @typedef RegisterRequiredFieldsMobile
        
        
        @property { boolean } [isRequired]
        
        @property { string } [level]
        
         
    */
/**
        @typedef FlashCard
        
        
        @property { string } [text]
        
        @property { string } [textColor]
        
        @property { string } [backgroundColor]
        
         
    */
/**
        @typedef SocialTokens
        
        
        @property { Facebook } [facebook]
        
        @property { Accountkit } [accountKit]
        
        @property { Google } [google]
        
         
    */
/**
        @typedef Facebook
        
        
        @property { string } [appId]
        
         
    */
/**
        @typedef Accountkit
        
        
        @property { string } [appId]
        
         
    */
/**
        @typedef Google
        
        
        @property { string } [appId]
        
         
    */
/**
        @typedef StatsImported
        
        
        @property { number } [count]
        
         
    */
/**
        @typedef StatsProcessedEmail
        
        
        @property { number } [success]
        
        @property { number } [failed]
        
        @property { number } [suppressed]
        
         
    */
/**
        @typedef StatsProcessedSms
        
        
        @property { number } [success]
        
        @property { number } [failed]
        
        @property { number } [suppressed]
        
         
    */
/**
        @typedef StatsProcessed
        
        
        @property { StatsProcessedEmail } [email]
        
        @property { StatsProcessedSms } [sms]
        
         
    */
/**
        @typedef Stats
        
        
        @property { string } [id]
        
        @property { any } [imported]
        
        @property { any } [processed]
        
         
    */
/**
        @typedef GetStats
        
        
        @property { Array<Stats> } [items]
        
         
    */
/**
        @typedef CampaignReq
        
        
        @property { string } [description]
        
        @property { Array<string> } [tags]
        
        @property { Array<string> } [headers]
        
        @property { boolean } [isActive]
        
        @property { string } [name]
        
        @property { string } [fileUrl]
        
        @property { string } [type]
        
        @property { number } [recordsCount]
        
        @property { string } [application]
        
         
    */
/**
        @typedef RecipientHeaders
        
        
        @property { string } [email]
        
         
    */
/**
        @typedef CampaignEmailTemplate
        
        
        @property { string } [key]
        
        @property { string } [value]
        
         
    */
/**
        @typedef CampignEmailProvider
        
        
        @property { string } [id]
        
        @property { string } [fromName]
        
        @property { string } [fromEmail]
        
         
    */
/**
        @typedef CampaignEmail
        
        
        @property { CampaignEmailTemplate } [template]
        
        @property { CampignEmailProvider } [provider]
        
         
    */
/**
        @typedef Campaign
        
        
        @property { RecipientHeaders } [recipientHeaders]
        
        @property { CampaignEmail } [email]
        
        @property { string } [description]
        
        @property { Array<any> } [tags]
        
        @property { boolean } [isActive]
        
        @property { string } [id]
        
        @property { string } [datasource]
        
        @property { string } [type]
        
        @property { string } [name]
        
        @property { string } [application]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [slug]
        
        @property { number } [v]
        
         
    */
/**
        @typedef Campaigns
        
        
        @property { Array<Campaign> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef BigqueryHeadersReq
        
        
        @property { string } [query]
        
        @property { string } [type]
        
         
    */
/**
        @typedef BigqueryHeadersResHeaders
        
        
        @property { string } [name]
        
        @property { string } [type]
        
         
    */
/**
        @typedef BigqueryHeadersRes
        
        
        @property { Array<BigqueryHeadersResHeaders> } [headers]
        
         
    */
/**
        @typedef GetNRecordsCsvReq
        
        
        @property { string } [url]
        
        @property { boolean } [header]
        
        @property { number } [count]
        
         
    */
/**
        @typedef GetNRecordsCsvResItems
        
        
        @property { string } [phoneNumber]
        
        @property { string } [email]
        
        @property { string } [firstname]
        
        @property { string } [lastname]
        
        @property { string } [orderid]
        
         
    */
/**
        @typedef GetNRecordsCsvRes
        
        
        @property { Array<GetNRecordsCsvResItems> } [items]
        
         
    */
/**
        @typedef AudienceReq
        
        
        @property { string } [description]
        
        @property { Array<string> } [tags]
        
        @property { Array<string> } [headers]
        
        @property { boolean } [isActive]
        
        @property { string } [name]
        
        @property { string } [fileUrl]
        
        @property { string } [type]
        
        @property { number } [recordsCount]
        
        @property { string } [application]
        
         
    */
/**
        @typedef Audience
        
        
        @property { string } [description]
        
        @property { Array<string> } [tags]
        
        @property { Array<string> } [headers]
        
        @property { boolean } [isActive]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { string } [fileUrl]
        
        @property { string } [type]
        
        @property { number } [recordsCount]
        
        @property { string } [application]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [slug]
        
        @property { number } [v]
        
         
    */
/**
        @typedef Audiences
        
        
        @property { Array<Audience> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef EmailProviderReqFrom
        
        
        @property { string } [name]
        
        @property { string } [email]
        
        @property { boolean } [isDefault]
        
         
    */
/**
        @typedef EmailProviderReq
        
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } [apiKey]
        
        @property { string } [type]
        
        @property { string } [provider]
        
        @property { Array<EmailProviderReqFrom> } [from]
        
         
    */
/**
        @typedef EmailProvider
        
        
        @property { string } [type]
        
        @property { string } [provider]
        
        @property { Array<EmailProviderReqFrom> } [from]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } [apiKey]
        
        @property { string } [application]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [slug]
        
        @property { number } [v]
        
         
    */
/**
        @typedef EmailProviders
        
        
        @property { Array<EmailProvider> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef EmailTemplateDeleteSuccessRes
        
        
        @property { boolean } [success]
        
        @property { string } [message]
        
         
    */
/**
        @typedef EmailTemplateDeleteFailureRes
        
        
        @property { boolean } [success]
        
        @property { string } [message]
        
         
    */
/**
        @typedef EmailTemplateKeys
        
        
        @property { string } [to]
        
        @property { string } [cc]
        
        @property { string } [bcc]
        
         
    */
/**
        @typedef EmailTemplateHeaders
        
        
        @property { string } [key]
        
        @property { string } [value]
        
         
    */
/**
        @typedef EmailTemplateReq
        
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { EmailTemplateKeys } [keys]
        
        @property { string } [from]
        
        @property { Array<string> } [staticTo]
        
        @property { Array<string> } [staticCc]
        
        @property { Array<string> } [staticBcc]
        
        @property { string } [replyTo]
        
        @property { Array<EmailTemplateHeaders> } [headers]
        
        @property { TemplateAndType } [subject]
        
        @property { TemplateAndType } [html]
        
        @property { TemplateAndType } [text]
        
        @property { Array<any> } [attachments]
        
        @property { string } [priority]
        
         
    */
/**
        @typedef TemplateAndType
        
        
        @property { string } [templateType]
        
        @property { string } [template]
        
         
    */
/**
        @typedef EmailTemplateRes
        
        
        @property { boolean } [isSystem]
        
        @property { boolean } [isInternal]
        
        @property { string } [description]
        
        @property { Array<string> } [staticTo]
        
        @property { Array<string> } [staticCc]
        
        @property { Array<string> } [staticBcc]
        
        @property { Array<any> } [tags]
        
        @property { string } [priority]
        
        @property { boolean } [published]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { EmailTemplateKeys } [keys]
        
        @property { string } [from]
        
        @property { string } [replyTo]
        
        @property { Array<EmailTemplateHeaders> } [headers]
        
        @property { TemplateAndType } [subject]
        
        @property { TemplateAndType } [html]
        
        @property { TemplateAndType } [text]
        
        @property { Array<any> } [attachments]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [slug]
        
        @property { number } [v]
        
         
    */
/**
        @typedef EmailTemplate
        
        
        @property { boolean } [isSystem]
        
        @property { boolean } [isInternal]
        
        @property { string } [description]
        
        @property { Array<any> } [staticTo]
        
        @property { Array<any> } [staticCc]
        
        @property { Array<any> } [staticBcc]
        
        @property { Array<any> } [tags]
        
        @property { string } [priority]
        
        @property { boolean } [published]
        
        @property { string } [id]
        
        @property { string } [slug]
        
        @property { string } [name]
        
        @property { string } [from]
        
        @property { string } [fromName]
        
        @property { TemplateAndType } [subject]
        
        @property { TemplateAndType } [html]
        
        @property { TemplateAndType } [text]
        
        @property { Array<any> } [headers]
        
        @property { Array<any> } [attachments]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */
/**
        @typedef SystemEmailTemplate
        
        
        @property { boolean } [isSystem]
        
        @property { boolean } [isInternal]
        
        @property { string } [description]
        
        @property { Array<any> } [staticTo]
        
        @property { Array<any> } [staticCc]
        
        @property { Array<any> } [staticBcc]
        
        @property { Array<any> } [tags]
        
        @property { string } [priority]
        
        @property { boolean } [published]
        
        @property { string } [id]
        
        @property { string } [slug]
        
        @property { string } [name]
        
        @property { string } [from]
        
        @property { string } [fromName]
        
        @property { TemplateAndType } [subject]
        
        @property { TemplateAndType } [html]
        
        @property { TemplateAndType } [text]
        
        @property { Array<any> } [headers]
        
        @property { Array<any> } [attachments]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */
/**
        @typedef EmailTemplates
        
        
        @property { Array<EmailTemplate> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef SystemEmailTemplates
        
        
        @property { Array<SystemEmailTemplate> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef EventSubscriptionTemplateSms
        
        
        @property { boolean } [subscribed]
        
        @property { string } [template]
        
         
    */
/**
        @typedef EventSubscriptionTemplateEmail
        
        
        @property { boolean } [subscribed]
        
        @property { string } [template]
        
         
    */
/**
        @typedef EventSubscriptionTemplate
        
        
        @property { EventSubscriptionTemplateSms } [sms]
        
        @property { EventSubscriptionTemplateEmail } [email]
        
         
    */
/**
        @typedef EventSubscription
        
        
        @property { EventSubscriptionTemplate } [template]
        
        @property { boolean } [isDefault]
        
        @property { string } [id]
        
        @property { string } [application]
        
        @property { string } [event]
        
        @property { string } [slug]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */
/**
        @typedef EventSubscriptions
        
        
        @property { Array<EventSubscription> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef TriggerJobResponse
        
        
        @property { number } [status]
        
         
    */
/**
        @typedef TriggerJobRequest
        
        
        @property { string } [jobId]
        
         
    */
/**
        @typedef Job
        
        
        @property { boolean } [completed]
        
        @property { boolean } [isActive]
        
        @property { string } [id]
        
        @property { string } [campaign]
        
        @property { string } [application]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */
/**
        @typedef Jobs
        
        
        @property { Array<any> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef JobLog
        
        
        @property { any } [imported]
        
        @property { any } [processed]
        
        @property { string } [id]
        
        @property { string } [job]
        
        @property { string } [campaign]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */
/**
        @typedef JobLogs
        
        
        @property { Array<JobLog> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef LogEmail
        
        
        @property { string } [template]
        
         
    */
/**
        @typedef LogPushnotification
        
        
        @property { Array<string> } [pushtokens]
        
         
    */
/**
        @typedef LogMeta
        
        
        @property { string } [type]
        
        @property { string } [identifier]
        
        @property { string } [key]
        
        @property { string } [offset]
        
        @property { string } [partition]
        
        @property { string } [topic]
        
         
    */
/**
        @typedef Log
        
        
        @property { LogEmail } [email]
        
        @property { LogPushnotification } [pushnotification]
        
        @property { LogMeta } [meta]
        
        @property { string } [id]
        
        @property { string } [application]
        
        @property { string } [service]
        
        @property { string } [step]
        
        @property { string } [status]
        
        @property { any } [data]
        
        @property { string } [expireAt]
        
        @property { string } [createdAt]
        
         
    */
/**
        @typedef Logs
        
        
        @property { Array<Log> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef PushtokenReq
        
        
        @property { string } [action]
        
        @property { string } [bundleIdentifier]
        
        @property { string } [pushToken]
        
        @property { string } [uniqueDeviceId]
        
         
    */
/**
        @typedef PushtokenRes
        
        
        @property { string } [id]
        
        @property { string } [bundleIdentifier]
        
        @property { string } [pushToken]
        
        @property { string } [uniqueDeviceId]
        
        @property { string } [type]
        
        @property { string } [platform]
        
        @property { string } [applicationId]
        
        @property { string } [userId]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [expiredAt]
        
         
    */
/**
        @typedef SmsProviderReq
        
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } [sender]
        
        @property { string } [username]
        
        @property { string } [authkey]
        
        @property { string } [type]
        
        @property { string } [provider]
        
         
    */
/**
        @typedef SmsProvider
        
        
        @property { number } [rpt]
        
        @property { string } [type]
        
        @property { string } [provider]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } [sender]
        
        @property { string } [username]
        
        @property { string } [authkey]
        
        @property { string } [application]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [slug]
        
        @property { number } [v]
        
         
    */
/**
        @typedef SmsProviders
        
        
        @property { Array<SmsProvider> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef SmsTemplateDeleteSuccessRes
        
        
        @property { boolean } [success]
        
        @property { string } [message]
        
         
    */
/**
        @typedef SmsTemplateDeleteFailureRes
        
        
        @property { boolean } [success]
        
        @property { string } [message]
        
         
    */
/**
        @typedef SmsTemplateMessage
        
        
        @property { string } [templateType]
        
        @property { string } [template]
        
         
    */
/**
        @typedef SmsTemplateReq
        
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { SmsTemplateMessage } [message]
        
        @property { any } [templateVariables]
        
        @property { Array<any> } [attachments]
        
        @property { string } [priority]
        
         
    */
/**
        @typedef SmsTemplateRes
        
        
        @property { boolean } [isSystem]
        
        @property { boolean } [isInternal]
        
        @property { string } [description]
        
        @property { Array<any> } [tags]
        
        @property { string } [priority]
        
        @property { boolean } [published]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { SmsTemplateMessage } [message]
        
        @property { any } [templateVariables]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [slug]
        
        @property { number } [v]
        
         
    */
/**
        @typedef SmsTemplate
        
        
        @property { boolean } [isSystem]
        
        @property { boolean } [isInternal]
        
        @property { string } [description]
        
        @property { string } [priority]
        
        @property { Array<any> } [tags]
        
        @property { boolean } [published]
        
        @property { string } [id]
        
        @property { string } [slug]
        
        @property { string } [name]
        
        @property { SmsTemplateMessage } [message]
        
        @property { any } [templateVariables]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */
/**
        @typedef SystemSmsTemplate
        
        
        @property { boolean } [isSystem]
        
        @property { boolean } [isInternal]
        
        @property { string } [description]
        
        @property { Array<any> } [tags]
        
        @property { string } [priority]
        
        @property { boolean } [published]
        
        @property { string } [id]
        
        @property { string } [slug]
        
        @property { string } [name]
        
        @property { SmsTemplateMessage } [message]
        
        @property { any } [templateVariables]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */
/**
        @typedef SmsTemplates
        
        
        @property { Array<SmsTemplate> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef SystemSmsTemplates
        
        
        @property { Array<SystemSmsTemplate> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef Notification
        
        
        @property { string } [title]
        
        @property { string } [body]
        
        @property { string } [subtitle]
        
        @property { string } [icon]
        
        @property { string } [deeplink]
        
        @property { string } [clickAction]
        
         
    */
/**
        @typedef SystemNotificationUser
        
        
        @property { string } [type]
        
        @property { string } [value]
        
         
    */
/**
        @typedef SystemNotificationSettings
        
        
        @property { boolean } [sound]
        
        @property { string } [priority]
        
        @property { string } [timeToLive]
        
         
    */
/**
        @typedef SystemNotification
        
        
        @property { Notification } [notification]
        
        @property { SystemNotificationUser } [user]
        
        @property { SystemNotificationUser } [settings]
        
        @property { string } [id]
        
        @property { string } [group]
        
        @property { string } [createdAt]
        
         
    */
/**
        @typedef SystemNotificationsPage
        
        
        @property { string } [type]
        
        @property { number } [current]
        
        @property { number } [size]
        
        @property { number } [itemTotal]
        
        @property { boolean } [hasNext]
        
         
    */
/**
        @typedef SystemNotifications
        
        
        @property { Array<SystemNotification> } [items]
        
        @property { number } [lastReadAnchor]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef PaymentGatewayConfigResponse
        
        
        @property { boolean } created
        
        @property { Array<Object> } [aggregators]
        
        @property { Array<string> } excludedFields
        
        @property { boolean } success
        
        @property { Array<string> } displayFields
        
        @property { string } appId
        
         
    */
/**
        @typedef ErrorCodeDescription
        
        
        @property { string } description
        
        @property { string } code
        
        @property { boolean } success
        
         
    */
/**
        @typedef PaymentGatewayConfig
        
        
        @property { string } configType
        
        @property { string } secret
        
        @property { string } key
        
        @property { boolean } [isActive]
        
        @property { string } merchantSalt
        
         
    */
/**
        @typedef PaymentGatewayConfigRequest
        
        
        @property { PaymentGatewayConfig } [aggregatorName]
        
        @property { boolean } [isActive]
        
        @property { string } appId
        
         
    */
/**
        @typedef PaymentGatewayToBeReviewed
        
        
        @property { Array<string> } aggregator
        
        @property { boolean } success
        
         
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
        
        
        @property { number } [retryCount]
        
        @property { number } [expMonth]
        
        @property { string } [intentFlow]
        
        @property { string } [cardFingerprint]
        
        @property { string } [fyndVpa]
        
        @property { string } [cardReference]
        
        @property { string } [displayName]
        
        @property { Array<string> } [intentAppErrorList]
        
        @property { string } [nickname]
        
        @property { string } [cardNumber]
        
        @property { string } [cardBrandImage]
        
        @property { string } [cardToken]
        
        @property { number } [displayPriority]
        
        @property { string } [cardId]
        
        @property { string } [cardIsin]
        
        @property { string } [code]
        
        @property { string } aggregatorName
        
        @property { string } [cardIssuer]
        
        @property { string } [cardBrand]
        
        @property { number } [expYear]
        
        @property { string } [cardType]
        
        @property { string } [merchantCode]
        
        @property { string } [name]
        
        @property { number } [timeout]
        
        @property { PaymentModeLogo } [logoUrl]
        
        @property { boolean } [expired]
        
        @property { string } [cardName]
        
         
    */
/**
        @typedef RootPaymentMode
        
        
        @property { string } name
        
        @property { string } [aggregatorName]
        
        @property { boolean } [addCardEnabled]
        
        @property { Array<PaymentModeList> } [list]
        
        @property { string } displayName
        
        @property { number } displayPriority
        
        @property { boolean } [anonymousEnable]
        
         
    */
/**
        @typedef PaymentOptions
        
        
        @property { Array<RootPaymentMode> } paymentOption
        
         
    */
/**
        @typedef PaymentOptionsResponse
        
        
        @property { boolean } success
        
        @property { PaymentOptions } paymentOptions
        
         
    */
/**
        @typedef PayoutsResponse
        
        
        @property { Object } uniqueTransferNo
        
        @property { string } transferType
        
        @property { Object } moreAttributes
        
        @property { Object } customers
        
        @property { boolean } isDefault
        
        @property { Array<Object> } payoutsAggregators
        
        @property { boolean } isActive
        
         
    */
/**
        @typedef PayoutRequest
        
        
        @property { string } uniqueExternalId
        
        @property { string } transferType
        
        @property { string } aggregator
        
        @property { Object } users
        
        @property { Object } bankDetails
        
        @property { boolean } isActive
        
         
    */
/**
        @typedef PayoutResponse
        
        
        @property { string } uniqueTransferNo
        
        @property { boolean } created
        
        @property { string } paymentStatus
        
        @property { Object } users
        
        @property { string } aggregator
        
        @property { string } transferType
        
        @property { Object } payouts
        
        @property { Object } bankDetails
        
        @property { boolean } success
        
        @property { boolean } isActive
        
         
    */
/**
        @typedef UpdatePayoutResponse
        
        
        @property { boolean } isActive
        
        @property { boolean } success
        
        @property { boolean } isDefault
        
         
    */
/**
        @typedef UpdatePayoutRequest
        
        
        @property { boolean } isActive
        
        @property { string } uniqueExternalId
        
        @property { boolean } isDefault
        
         
    */
/**
        @typedef DeletePayoutResponse
        
        
        @property { boolean } success
        
         
    */
/**
        @typedef SubscriptionPaymentMethodResponse
        
        
        @property { boolean } success
        
        @property { Array<Object> } data
        
         
    */
/**
        @typedef DeleteSubscriptionPaymentMethodResponse
        
        
        @property { boolean } success
        
         
    */
/**
        @typedef SubscriptionConfigResponse
        
        
        @property { Object } config
        
        @property { string } aggregator
        
        @property { boolean } success
        
         
    */
/**
        @typedef SaveSubscriptionSetupIntentRequest
        
        
        @property { string } uniqueExternalId
        
         
    */
/**
        @typedef SaveSubscriptionSetupIntentResponse
        
        
        @property { boolean } success
        
        @property { Object } data
        
         
    */
/**
        @typedef GetActivityStatus
        
        
        @property { ActivityHistory } activityHistory
        
         
    */
/**
        @typedef ActivityHistory
        
        
        @property { string } [createdat]
        
        @property { string } [message]
        
        @property { string } [type]
        
        @property { string } [user]
        
         
    */
/**
        @typedef FailedOrders
        
        
        @property { FailOrder } orders
        
         
    */
/**
        @typedef FailOrder
        
        
        @property { string } [updatedAt]
        
        @property { string } [id]
        
        @property { string } [reason]
        
        @property { MarketplaceOrder } [marketplaceOrder]
        
        @property { string } [marketplaceOrderId]
        
        @property { string } [createdAt]
        
        @property { string } [appId]
        
        @property { string } [marketplace]
        
        @property { number } [companyId]
        
         
    */
/**
        @typedef MarketplaceOrder
        
        
        @property { string } [orderStatusUrl]
        
        @property { string } [adminGraphqlApiId]
        
        @property { string } [email]
        
        @property { boolean } [test]
        
        @property { string } [note]
        
        @property { string } [totalPrice]
        
        @property { number } [appId]
        
        @property { TotalDiscountsSet } [totalDiscountsSet]
        
        @property { TotalPriceSet } [totalPriceSet]
        
        @property { TotalTaxSet } [totalTaxSet]
        
        @property { string } [gateway]
        
        @property { string } [name]
        
        @property { SubtotalPriceSet } [subtotalPriceSet]
        
        @property { number } [number]
        
        @property { boolean } [buyerAcceptsMarketing]
        
        @property { string } [contactEmail]
        
        @property { string } [token]
        
        @property { string } [sourceName]
        
        @property { Array<any> } [paymentGatewayNames]
        
        @property { string } [presentmentCurrency]
        
        @property { string } [subtotalPrice]
        
        @property { string } [processedAt]
        
        @property { number } [orderNumber]
        
        @property { string } [totalTipReceived]
        
        @property { number } [id]
        
        @property { boolean } [confirmed]
        
        @property { string } [currency]
        
        @property { string } [totalLineItemsPrice]
        
        @property { LineItems } [lineItems]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [totalWeight]
        
        @property { BillingAddress } [billingAddress]
        
        @property { TotalShippingPriceSet } [totalShippingPriceSet]
        
        @property { Customer } [customer]
        
        @property { string } [totalDiscounts]
        
        @property { TotalLineItemsPriceSet } [totalLineItemsPriceSet]
        
        @property { string } [tags]
        
        @property { string } [totalPriceUsd]
        
        @property { number } [userId]
        
        @property { string } [totalTax]
        
        @property { string } [processingMethod]
        
        @property { ShippingAddress } [shippingAddress]
        
        @property { boolean } [taxesIncluded]
        
        @property { string } [financialStatus]
        
         
    */
/**
        @typedef TotalDiscountsSet
        
        
        @property { PresentmentMoney } [presentmentMoney]
        
        @property { ShopMoney } [shopMoney]
        
         
    */
/**
        @typedef PresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */
/**
        @typedef ShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */
/**
        @typedef TotalPriceSet
        
        
        @property { TotalPriceSetShopMoney } [shopMoney]
        
        @property { TotalPriceSetPresentmentMoney } [presentmentMoney]
        
         
    */
/**
        @typedef TotalPriceSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */
/**
        @typedef TotalPriceSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */
/**
        @typedef TotalTaxSet
        
        
        @property { TotalTaxSetShopMoney } [shopMoney]
        
        @property { TotalTaxSetPresentmentMoney } [presentmentMoney]
        
         
    */
/**
        @typedef TotalTaxSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */
/**
        @typedef TotalTaxSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */
/**
        @typedef SubtotalPriceSet
        
        
        @property { SubtotalPriceSetShopMoney } [shopMoney]
        
        @property { SubtotalPriceSetPresentmentMoney } [presentmentMoney]
        
         
    */
/**
        @typedef SubtotalPriceSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */
/**
        @typedef SubtotalPriceSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */
/**
        @typedef LineItems
        
        
        @property { string } [sku]
        
        @property { number } [fulfillableQuantity]
        
        @property { number } [grams]
        
        @property { string } [totalDiscount]
        
        @property { LineItemsArticle } [article]
        
        @property { string } [title]
        
        @property { string } [variantInventoryManagement]
        
        @property { number } [id]
        
        @property { number } [variantId]
        
        @property { string } [variantTitle]
        
        @property { boolean } [productExists]
        
        @property { string } [price]
        
        @property { string } [adminGraphqlApiId]
        
        @property { number } [quantity]
        
        @property { string } [vendor]
        
        @property { string } [fulfillmentService]
        
        @property { boolean } [taxable]
        
        @property { string } [name]
        
        @property { number } [productId]
        
        @property { PriceSet } [priceSet]
        
        @property { TaxLines } [taxLines]
        
        @property { boolean } [requiresShipping]
        
        @property { boolean } [giftCard]
        
        @property { TotalDiscountSet } [totalDiscountSet]
        
         
    */
/**
        @typedef LineItemsArticle
        
        
        @property { Quantities } [quantities]
        
        @property { string } [oldArticleUid]
        
        @property { number } [totalQuantity]
        
        @property { Manufacturer } [manufacturer]
        
        @property { ArticlePrice } [price]
        
        @property { boolean } [trackInventory]
        
        @property { Company } [company]
        
        @property { boolean } [isActive]
        
        @property { FailOrderDateMeta } [dateMeta]
        
        @property { boolean } [fragile]
        
        @property { MarketplaceIdentifiers } [marketplaceIdentifiers]
        
        @property { string } [size]
        
        @property { boolean } [isSet]
        
        @property { Dimension } [dimension]
        
        @property { Weight } [weight]
        
        @property { Store } [store]
        
        @property { ArticleMeta } [meta]
        
        @property { string } [uid]
        
        @property { ArticleBrand } [brand]
        
        @property { number } [itemId]
        
        @property { string } [fyndArticleCode]
        
        @property { string } [id]
        
        @property { LineItemsArticleIdentifier } [identifier]
        
        @property { string } [sellerIdentifier]
        
        @property { string } [fyndItemCode]
        
        @property { string } [countryOfOrigin]
        
         
    */
/**
        @typedef Quantities
        
        
        @property { NotAvailable } [notAvailable]
        
        @property { Sellable } [sellable]
        
        @property { OrderCommitted } [orderCommitted]
        
        @property { Damaged } [damaged]
        
         
    */
/**
        @typedef NotAvailable
        
        
        @property { number } [count]
        
        @property { string } [updatedAt]
        
         
    */
/**
        @typedef Sellable
        
        
        @property { number } [count]
        
        @property { string } [updatedAt]
        
         
    */
/**
        @typedef OrderCommitted
        
        
        @property { number } [count]
        
        @property { string } [updatedAt]
        
         
    */
/**
        @typedef Damaged
        
        
        @property { string } [updatedAt]
        
        @property { number } [count]
        
         
    */
/**
        @typedef Manufacturer
        
        
        @property { boolean } [isDefault]
        
        @property { string } [address]
        
        @property { string } [name]
        
         
    */
/**
        @typedef ArticlePrice
        
        
        @property { number } [marked]
        
        @property { string } [currency]
        
        @property { number } [effective]
        
        @property { number } [transfer]
        
         
    */
/**
        @typedef Company
        
        
        @property { number } [id]
        
        @property { string } [companyType]
        
        @property { string } [businessType]
        
        @property { string } [companyName]
        
        @property { string } [createdOn]
        
        @property { string } [panNo]
        
        @property { boolean } [returnAllowed]
        
        @property { string } [meta]
        
        @property { boolean } [exchangeAllowed]
        
        @property { string } [agreementStartDate]
        
        @property { number } [exchangeWithinDays]
        
        @property { number } [paymentProcesingCharge]
        
        @property { boolean } [fyndAFitAvailable]
        
        @property { string } [modifiedOn]
        
        @property { number } [returnWithinDays]
        
         
    */
/**
        @typedef FailOrderDateMeta
        
        
        @property { string } [addedOnStore]
        
        @property { string } [inventoryUpdatedOn]
        
        @property { string } [createdOn]
        
        @property { string } [modifiedOn]
        
         
    */
/**
        @typedef MarketplaceIdentifiers
        
        
        @property { TatacliqLuxury } [tatacliqLuxury]
        
         
    */
/**
        @typedef TatacliqLuxury
        
        
        @property { string } [sku]
        
         
    */
/**
        @typedef Dimension
        
        
        @property { number } [height]
        
        @property { number } [width]
        
        @property { string } [unit]
        
        @property { number } [length]
        
        @property { boolean } [isDefault]
        
         
    */
/**
        @typedef Weight
        
        
        @property { boolean } [isDefault]
        
        @property { string } [unit]
        
        @property { number } [shipping]
        
         
    */
/**
        @typedef Store
        
        
        @property { number } [id]
        
         
    */
/**
        @typedef ArticleMeta
        
        
        @property { string } [service]
        
         
    */
/**
        @typedef ArticleBrand
        
        
        @property { string } [name]
        
        @property { number } [id]
        
         
    */
/**
        @typedef LineItemsArticleIdentifier
        
        
        @property { string } [skuCode]
        
         
    */
/**
        @typedef PriceSet
        
        
        @property { PriceSetShopMoney } [shopMoney]
        
        @property { PriceSetPresentmentMoney } [presentmentMoney]
        
         
    */
/**
        @typedef PriceSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */
/**
        @typedef PriceSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */
/**
        @typedef TaxLines
        
        
        @property { string } [title]
        
        @property { string } [price]
        
        @property { number } [rate]
        
        @property { TaxLinesPriceSet } [priceSet]
        
         
    */
/**
        @typedef TaxLinesPriceSet
        
        
        @property { TaxLinesPriceSetShopMoney } [shopMoney]
        
        @property { TaxLinesPriceSetPresentmentMoney } [presentmentMoney]
        
         
    */
/**
        @typedef TaxLinesPriceSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */
/**
        @typedef TaxLinesPriceSetPresentmentMoney
        
        
        @property { string } [currencyCode]
        
        @property { string } [amount]
        
         
    */
/**
        @typedef TotalDiscountSet
        
        
        @property { TotalDiscountSetPresentmentMoney } [presentmentMoney]
        
        @property { TotalDiscountSetShopMoney } [shopMoney]
        
         
    */
/**
        @typedef TotalDiscountSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */
/**
        @typedef TotalDiscountSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */
/**
        @typedef BillingAddress
        
        
        @property { string } [address1]
        
        @property { string } [city]
        
        @property { string } [zip]
        
        @property { string } [lastName]
        
        @property { string } [address2]
        
        @property { number } [longitude]
        
        @property { string } [provinceCode]
        
        @property { string } [phone]
        
        @property { string } [company]
        
        @property { number } [latitude]
        
        @property { string } [name]
        
        @property { string } [country]
        
        @property { string } [countryCode]
        
        @property { string } [firstName]
        
        @property { string } [province]
        
         
    */
/**
        @typedef TotalShippingPriceSet
        
        
        @property { TotalShippingPriceSetShopMoney } [shopMoney]
        
        @property { TotalShippingPriceSetPresentmentMoney } [presentmentMoney]
        
         
    */
/**
        @typedef TotalShippingPriceSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */
/**
        @typedef TotalShippingPriceSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */
/**
        @typedef Customer
        
        
        @property { string } [createdAt]
        
        @property { number } [id]
        
        @property { string } [lastName]
        
        @property { string } [state]
        
        @property { number } [lastOrderId]
        
        @property { string } [note]
        
        @property { boolean } [verifiedEmail]
        
        @property { string } [phone]
        
        @property { boolean } [acceptsMarketing]
        
        @property { string } [firstName]
        
        @property { string } [tags]
        
        @property { string } [lastOrderName]
        
        @property { number } [ordersCount]
        
        @property { string } [totalSpent]
        
        @property { boolean } [taxExempt]
        
        @property { string } [currency]
        
        @property { string } [acceptsMarketingUpdatedAt]
        
        @property { string } [email]
        
        @property { string } [updatedAt]
        
        @property { string } [adminGraphqlApiId]
        
        @property { DefaultAddress } [defaultAddress]
        
         
    */
/**
        @typedef DefaultAddress
        
        
        @property { string } [lastName]
        
        @property { string } [name]
        
        @property { string } [provinceCode]
        
        @property { string } [countryCode]
        
        @property { boolean } [isDefault]
        
        @property { number } [id]
        
        @property { number } [customerId]
        
        @property { string } [firstName]
        
        @property { string } [address1]
        
        @property { string } [phone]
        
        @property { string } [countryName]
        
        @property { string } [company]
        
        @property { string } [address2]
        
        @property { string } [city]
        
        @property { string } [province]
        
        @property { string } [country]
        
        @property { string } [zip]
        
         
    */
/**
        @typedef TotalLineItemsPriceSet
        
        
        @property { TotalLineItemsPriceSetShopMoney } [shopMoney]
        
        @property { TotalLineItemsPriceSetPresentmentMoney } [presentmentMoney]
        
         
    */
/**
        @typedef TotalLineItemsPriceSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */
/**
        @typedef TotalLineItemsPriceSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */
/**
        @typedef ShippingAddress
        
        
        @property { string } [address1]
        
        @property { string } [zip]
        
        @property { string } [address2]
        
        @property { string } [countryCode]
        
        @property { string } [country]
        
        @property { string } [lastName]
        
        @property { number } [latitude]
        
        @property { string } [provinceCode]
        
        @property { string } [firstName]
        
        @property { string } [phone]
        
        @property { string } [province]
        
        @property { number } [longitude]
        
        @property { string } [city]
        
        @property { string } [company]
        
        @property { string } [name]
        
         
    */
/**
        @typedef OrderListing
        
        
        @property { Array<OrderItems> } items
        
        @property { Filters } filters
        
        @property { NextOrderStatus } nextOrderStatus
        
        @property { PlatformOrderPage } page
        
        @property { AppliedFilters } appliedFilters
        
         
    */
/**
        @typedef OrderItems
        
        
        @property { PlatformOrderUserInfo } [user]
        
        @property { PlatformDeliveryAddress } [deliveryAddress]
        
        @property { Channel } [channel]
        
        @property { PlatformBreakupValues } [breakupValues]
        
        @property { string } [id]
        
        @property { PlatformApplication } [application]
        
        @property { PlatformShipment } [shipments]
        
        @property { string } [createdAt]
        
        @property { number } [totalShipmentsInOrder]
        
        @property { ItemsPayments } [payments]
        
         
    */
/**
        @typedef PlatformOrderUserInfo
        
        
        @property { string } [mobile]
        
        @property { string } [firstName]
        
        @property { string } [gender]
        
        @property { string } [email]
        
        @property { string } [lastName]
        
        @property { boolean } [isAnonymousUser]
        
        @property { number } [uid]
        
        @property { string } [avisUserId]
        
         
    */
/**
        @typedef PlatformDeliveryAddress
        
        
        @property { string } [area]
        
        @property { string } [state]
        
        @property { string } [country]
        
        @property { string } [version]
        
        @property { string } [address1]
        
        @property { number } [latitude]
        
        @property { string } [updatedAt]
        
        @property { string } [city]
        
        @property { string } [landmark]
        
        @property { string } [createdAt]
        
        @property { string } [name]
        
        @property { string } [address]
        
        @property { string } [phone]
        
        @property { number } [longitude]
        
        @property { string } [addressType]
        
        @property { string } [email]
        
        @property { string } [pincode]
        
        @property { string } [address2]
        
        @property { string } [contactPerson]
        
        @property { string } [addressCategory]
        
         
    */
/**
        @typedef Channel
        
        
        @property { string } [name]
        
        @property { string } [logo]
        
         
    */
/**
        @typedef PlatformBreakupValues
        
        
        @property { string } [display]
        
        @property { number } [value]
        
        @property { string } [name]
        
         
    */
/**
        @typedef PlatformApplication
        
        
        @property { string } [name]
        
        @property { string } [owner]
        
        @property { boolean } [postOrderReassignment]
        
        @property { string } [id]
        
        @property { string } [description]
        
        @property { boolean } [dpAssignment]
        
        @property { ArticleAssignment } [articleAssignment]
        
        @property { boolean } [forceReassignment]
        
        @property { string } [token]
        
        @property { string } [secret]
        
         
    */
/**
        @typedef ArticleAssignment
        
        
        @property { string } [strategy]
        
        @property { string } [level]
        
         
    */
/**
        @typedef PlatformShipment
        
        
        @property { PlatformShipmentStatus } [status]
        
        @property { Bags } [bags]
        
        @property { ShipmentPrices } [prices]
        
        @property { ShipmentBreakupValues } [breakupValues]
        
        @property { string } [id]
        
        @property { DpDetails } [dpDetails]
        
        @property { ShipmentInvoice } [invoice]
        
        @property { PlatformFulfillingStore } [fulfillingStore]
        
        @property { Payments } [payments]
        
        @property { ShipmentGst } [gst]
        
        @property { Company } [company]
        
        @property { PlatformShipmentBrand } [brand]
        
        @property { Object } [coupon]
        
        @property { string } [orderSource]
        
        @property { boolean } [isNotFyndSource]
        
        @property { string } [comment]
        
        @property { Promise } [promise]
        
        @property { ShipmentTrackingDetails } [trackingDetails]
        
        @property { boolean } [isFyndCoupon]
        
        @property { string } [orderType]
        
        @property { ShipmentUser } [user]
        
         
    */
/**
        @typedef PlatformShipmentStatus
        
        
        @property { number } [id]
        
        @property { Array<number> } [bagList]
        
        @property { string } [createdAt]
        
        @property { string } [status]
        
        @property { string } [name]
        
        @property { number } [progress]
        
        @property { string } [shipmentId]
        
        @property { string } [currentShipmentStatus]
        
        @property { string } [colorCode]
        
         
    */
/**
        @typedef Bags
        
        
        @property { Array<BagFinancialBreakup> } [financialBreakup]
        
        @property { BagCurrStatus } [status]
        
        @property { BagItem } [item]
        
        @property { BagArticle } [article]
        
        @property { number } [id]
        
        @property { BagPrices } [prices]
        
        @property { GstDetails } [gstDetails]
        
        @property { BagBreakupValues } [breakupValues]
        
        @property { number } [updateTime]
        
        @property { BagCurrentStatus } [currentStatus]
        
        @property { BagStatus } [bagStatus]
        
         
    */
/**
        @typedef BagFinancialBreakup
        
        
        @property { number } [valueOfGood]
        
        @property { string } [hsnCode]
        
        @property { number } [priceEffective]
        
        @property { number } [codCharges]
        
        @property { string } [gstFee]
        
        @property { number } [fyndCredits]
        
        @property { number } [refundAmount]
        
        @property { number } [cashbackApplied]
        
        @property { number } [transferPrice]
        
        @property { number } [amountPaidRoundoff]
        
        @property { number } [couponValue]
        
        @property { number } [amountPaid]
        
        @property { number } [gstTaxPercentage]
        
        @property { string } [size]
        
        @property { number } [totalUnits]
        
        @property { number } [discount]
        
        @property { number } [couponEffectiveDiscount]
        
        @property { number } [cashback]
        
        @property { number } [promotionEffectiveDiscount]
        
        @property { string } [gstTag]
        
        @property { number } [deliveryCharge]
        
        @property { number } [refundCredit]
        
        @property { number } [priceMarked]
        
        @property { Identifiers } [identifiers]
        
        @property { string } [itemName]
        
        @property { boolean } [addedToFyndCash]
        
        @property { number } [brandCalculatedAmount]
        
         
    */
/**
        @typedef Identifiers
        
        
        @property { string } [ean]
        
         
    */
/**
        @typedef BagCurrStatus
        
        
        @property { boolean } [enableTracking]
        
        @property { boolean } [isCustomerReturnAllowed]
        
        @property { boolean } [isActive]
        
        @property { boolean } [isReturnable]
        
        @property { boolean } [canBeCancelled]
        
         
    */
/**
        @typedef BagItem
        
        
        @property { number } [id]
        
        @property { string } [size]
        
        @property { string } [slugKey]
        
        @property { boolean } [canReturn]
        
        @property { number } [brandId]
        
        @property { Array<string> } [l2Category]
        
        @property { string } [name]
        
        @property { string } [code]
        
        @property { boolean } [canCancel]
        
        @property { BagItemAttributes } [attributes]
        
        @property { string } [l3CategoryName]
        
        @property { number } [l3Category]
        
        @property { Array<string> } [l1Category]
        
        @property { Array<string> } [image]
        
        @property { string } [brand]
        
        @property { string } [lastUpdatedAt]
        
         
    */
/**
        @typedef BagItemAttributes
        
        
        @property { string } [itemCode]
        
        @property { string } [brandName]
        
        @property { string } [countryOfOrigin]
        
         
    */
/**
        @typedef BagArticle
        
        
        @property { ArticleIdentifiers } [identifiers]
        
        @property { boolean } [espModified]
        
        @property { boolean } [isSet]
        
        @property { string } [size]
        
        @property { string } [code]
        
        @property { Set } [set]
        
        @property { string } [sellerIdentifier]
        
        @property { BagArticleReturnConfig } [returnConfig]
        
        @property { string } [id]
        
        @property { string } [uid]
        
        @property { Object } [childDetails]
        
         
    */
/**
        @typedef ArticleIdentifiers
        
        
        @property { string } [ean]
        
         
    */
/**
        @typedef Set
        
        
        @property { number } [quantity]
        
        @property { SetSizeDistribution } [sizeDistribution]
        
         
    */
/**
        @typedef SetSizeDistribution
        
        
        @property { Sizes } [sizes]
        
         
    */
/**
        @typedef Sizes
        
        
        @property { string } [size]
        
        @property { number } [pieces]
        
         
    */
/**
        @typedef BagArticleReturnConfig
        
        
        @property { number } [time]
        
        @property { string } [unit]
        
        @property { boolean } [returnable]
        
         
    */
/**
        @typedef ShipmentPrices
        
        
        @property { number } [refundAmount]
        
        @property { number } [cashbackApplied]
        
        @property { number } [transferPrice]
        
        @property { number } [couponValue]
        
        @property { number } [amountPaid]
        
        @property { number } [deliveryCharge]
        
        @property { number } [couponEffectiveDiscount]
        
        @property { number } [codCharges]
        
        @property { number } [refundCredit]
        
        @property { boolean } [addedToFyndCash]
        
        @property { number } [gstTaxPercentage]
        
        @property { number } [priceMarked]
        
        @property { number } [priceEffective]
        
        @property { number } [discount]
        
        @property { number } [promotionEffectiveDiscount]
        
        @property { number } [amountPaidRoundoff]
        
        @property { number } [fyndCredits]
        
        @property { number } [brandCalculatedAmount]
        
        @property { number } [cashback]
        
        @property { number } [valueOfGood]
        
         
    */
/**
        @typedef GstDetails
        
        
        @property { number } [brandCalculatedAmount]
        
        @property { string } [gstFee]
        
        @property { string } [gstTag]
        
        @property { string } [hsnCode]
        
        @property { number } [valueOfGood]
        
        @property { number } [gstTaxPercentage]
        
        @property { boolean } [isDefaultHsnCode]
        
         
    */
/**
        @typedef BagBreakupValues
        
        
        @property { string } [name]
        
        @property { string } [display]
        
        @property { number } [value]
        
         
    */
/**
        @typedef BagCurrentStatus
        
        
        @property { string } [updatedAt]
        
        @property { BagStateMapper } [bagStateMapper]
        
        @property { string } [status]
        
        @property { string } [stateType]
        
         
    */
/**
        @typedef BagStateMapper
        
        
        @property { string } [appStateName]
        
        @property { boolean } [isActive]
        
        @property { string } [displayName]
        
        @property { string } [name]
        
        @property { string } [appDisplayName]
        
         
    */
/**
        @typedef BagStatus
        
        
        @property { string } [status]
        
        @property { string } [stateType]
        
        @property { string } [updatedAt]
        
        @property { BagStatusBagStateMapper } [bagStateMapper]
        
         
    */
/**
        @typedef BagStatusBagStateMapper
        
        
        @property { boolean } [isActive]
        
        @property { string } [displayName]
        
        @property { string } [name]
        
        @property { string } [appDisplayName]
        
        @property { string } [appStateName]
        
         
    */
/**
        @typedef BagPrices
        
        
        @property { number } [cashback]
        
        @property { number } [refundCredit]
        
        @property { number } [couponValue]
        
        @property { number } [deliveryCharge]
        
        @property { number } [fyndCredits]
        
        @property { number } [priceMarked]
        
        @property { number } [cashbackApplied]
        
        @property { number } [valueOfGood]
        
        @property { number } [amountPaidRoundoff]
        
        @property { number } [amountPaid]
        
        @property { number } [codCharges]
        
        @property { number } [priceEffective]
        
        @property { number } [refundAmount]
        
        @property { number } [discount]
        
         
    */
/**
        @typedef ShipmentBreakupValues
        
        
        @property { string } [name]
        
        @property { string } [display]
        
        @property { number } [value]
        
         
    */
/**
        @typedef DpDetails
        
        
        @property { string } [gstTag]
        
         
    */
/**
        @typedef ShipmentInvoice
        
        
        @property { string } [paymentType]
        
        @property { string } [updatedDate]
        
        @property { string } [invoiceUrl]
        
        @property { string } [labelUrl]
        
        @property { string } [paymentMode]
        
        @property { number } [amountToCollect]
        
        @property { RtoAddress } [rtoAddress]
        
         
    */
/**
        @typedef RtoAddress
        
        
        @property { string } [name]
        
        @property { number } [id]
        
        @property { string } [phone]
        
        @property { string } [locationType]
        
        @property { StoreAddressJson } [storeAddressJson]
        
        @property { string } [code]
        
        @property { string } [address1]
        
        @property { string } [city]
        
        @property { string } [country]
        
        @property { string } [pincode]
        
        @property { number } [companyId]
        
        @property { string } [contactPerson]
        
        @property { string } [state]
        
        @property { string } [storeEmail]
        
        @property { string } [address2]
        
         
    */
/**
        @typedef StoreAddressJson
        
        
        @property { string } [country]
        
        @property { number } [latitude]
        
        @property { string } [updatedAt]
        
        @property { string } [area]
        
        @property { string } [state]
        
        @property { string } [addressType]
        
        @property { string } [city]
        
        @property { string } [pincode]
        
        @property { string } [address1]
        
        @property { string } [address2]
        
        @property { number } [longitude]
        
        @property { string } [email]
        
        @property { string } [phone]
        
        @property { string } [createdAt]
        
        @property { string } [contactPerson]
        
        @property { string } [addressCategory]
        
        @property { string } [version]
        
        @property { string } [landmark]
        
         
    */
/**
        @typedef PlatformFulfillingStore
        
        
        @property { number } [packagingMaterialCount]
        
        @property { string } [locationType]
        
        @property { string } [code]
        
        @property { string } [city]
        
        @property { FulfillingStoreMeta } [meta]
        
        @property { string } [name]
        
        @property { boolean } [isActive]
        
        @property { string } [address1]
        
        @property { string } [storeEmail]
        
        @property { boolean } [isArchived]
        
        @property { string } [state]
        
        @property { string } [address2]
        
        @property { string } [contactPerson]
        
        @property { string } [phone]
        
        @property { boolean } [isEnabledForRecon]
        
        @property { string } [fulfillmentChannel]
        
        @property { string } [createdAt]
        
        @property { number } [id]
        
        @property { string } [pincode]
        
        @property { Array<string> } [brandStoreTags]
        
        @property { number } [companyId]
        
        @property { FulfillingStoreStoreAddressJson } [storeAddressJson]
        
        @property { string } [updatedAt]
        
        @property { string } [loginUsername]
        
        @property { string } [country]
        
         
    */
/**
        @typedef FulfillingStoreMeta
        
        
        @property { AdditionalContactDetails } [additionalContactDetails]
        
        @property { Documents } [documents]
        
        @property { string } [gstNumber]
        
        @property { string } [displayName]
        
        @property { ProductReturnConfig } [productReturnConfig]
        
        @property { boolean } [allowDpAssignmentFromFynd]
        
        @property { string } [stage]
        
        @property { Timing } [timing]
        
         
    */
/**
        @typedef AdditionalContactDetails
        
        
        @property { Array<string> } [number]
        
         
    */
/**
        @typedef Documents
        
        
        @property { Gst } [gst]
        
         
    */
/**
        @typedef Gst
        
        
        @property { string } [legalName]
        
        @property { string } [type]
        
        @property { string } [value]
        
        @property { boolean } [verified]
        
         
    */
/**
        @typedef ProductReturnConfig
        
        
        @property { boolean } [onSameStore]
        
         
    */
/**
        @typedef Timing
        
        
        @property { Opening } [opening]
        
        @property { string } [weekday]
        
        @property { boolean } [open]
        
        @property { Closing } [closing]
        
         
    */
/**
        @typedef Opening
        
        
        @property { number } [minute]
        
        @property { number } [hour]
        
         
    */
/**
        @typedef Closing
        
        
        @property { number } [hour]
        
        @property { number } [minute]
        
         
    */
/**
        @typedef FulfillingStoreStoreAddressJson
        
        
        @property { string } [address2]
        
        @property { string } [area]
        
        @property { string } [email]
        
        @property { string } [phone]
        
        @property { string } [state]
        
        @property { string } [contactPerson]
        
        @property { string } [country]
        
        @property { string } [pincode]
        
        @property { string } [version]
        
        @property { string } [createdAt]
        
        @property { string } [addressType]
        
        @property { string } [city]
        
        @property { string } [address1]
        
        @property { string } [landmark]
        
        @property { number } [latitude]
        
        @property { number } [longitude]
        
        @property { string } [updatedAt]
        
        @property { string } [addressCategory]
        
         
    */
/**
        @typedef Payments
        
        
        @property { boolean } [isActive]
        
        @property { string } [displayName]
        
        @property { string } [logo]
        
        @property { string } [source]
        
        @property { string } [sourceNickname]
        
        @property { number } [displayPriority]
        
        @property { number } [id]
        
        @property { string } [mode]
        
        @property { string } [paymentIdentifier]
        
         
    */
/**
        @typedef ShipmentGst
        
        
        @property { number } [brandCalculatedAmount]
        
        @property { number } [valueOfGood]
        
        @property { number } [gstFee]
        
         
    */
/**
        @typedef PlatformShipmentBrand
        
        
        @property { boolean } [creditNoteAllowed]
        
        @property { string } [brandName]
        
        @property { string } [modifiedOn]
        
        @property { number } [id]
        
        @property { boolean } [isVirtualInvoice]
        
        @property { string } [createdOn]
        
        @property { string } [logo]
        
         
    */
/**
        @typedef Promise
        
        
        @property { Timestamp } [timestamp]
        
         
    */
/**
        @typedef Timestamp
        
        
        @property { string } [min]
        
        @property { string } [max]
        
         
    */
/**
        @typedef ShipmentTrackingDetails
        
        
        @property { string } [status]
        
        @property { string } [time]
        
        @property { boolean } [isPassed]
        
        @property { boolean } [isCurrent]
        
         
    */
/**
        @typedef ShipmentUser
        
        
        @property { string } [email]
        
        @property { number } [id]
        
        @property { string } [firstName]
        
        @property { string } [mobile]
        
        @property { string } [gender]
        
        @property { string } [lastName]
        
        @property { boolean } [isAnonymousUser]
        
        @property { string } [mongoUserId]
        
         
    */
/**
        @typedef ItemsPayments
        
        
        @property { number } [displayPriority]
        
        @property { number } [id]
        
        @property { boolean } [isActive]
        
        @property { string } [displayName]
        
        @property { string } [logo]
        
        @property { string } [paymentIdentifier]
        
        @property { string } [sourceNickname]
        
        @property { string } [mode]
        
        @property { string } [source]
        
         
    */
/**
        @typedef Filters
        
        
        @property { Stages } [stages]
        
         
    */
/**
        @typedef Stages
        
        
        @property { string } [text]
        
        @property { string } [value]
        
        @property { boolean } [isDefault]
        
        @property { StagesFilters } [filters]
        
         
    */
/**
        @typedef StagesFilters
        
        
        @property { string } [text]
        
        @property { string } [value]
        
        @property { string } [type]
        
        @property { Options } [options]
        
         
    */
/**
        @typedef Options
        
        
        @property { string } [text]
        
        @property { string } [value]
        
         
    */
/**
        @typedef NextOrderStatus
        
        
        @property { BagConfirmed } [bagConfirmed]
        
        @property { DpAssigned } [dpAssigned]
        
        @property { ReturnBagDelivered } [returnBagDelivered]
        
        @property { Placed } [placed]
        
        @property { DeliveryDone } [deliveryDone]
        
        @property { Pending } [pending]
        
        @property { BagPacked } [bagPacked]
        
         
    */
/**
        @typedef BagConfirmed
        
        
        @property { string } [text]
        
        @property { string } [value]
        
         
    */
/**
        @typedef DpAssigned
        
        
        @property { string } [text]
        
        @property { string } [value]
        
         
    */
/**
        @typedef ReturnBagDelivered
        
        
        @property { string } [text]
        
        @property { string } [value]
        
         
    */
/**
        @typedef Placed
        
        
        @property { string } [text]
        
        @property { string } [value]
        
         
    */
/**
        @typedef DeliveryDone
        
        
        @property { string } [text]
        
        @property { string } [value]
        
         
    */
/**
        @typedef Pending
        
        
        @property { string } [text]
        
        @property { string } [value]
        
         
    */
/**
        @typedef BagPacked
        
        
        @property { string } [text]
        
        @property { string } [value]
        
         
    */
/**
        @typedef PlatformOrderPage
        
        
        @property { string } [next]
        
        @property { string } [previous]
        
        @property { string } [type]
        
        @property { number } [size]
        
        @property { number } [current]
        
        @property { boolean } [hasNext]
        
        @property { ItemTotal } [itemTotal]
        
         
    */
/**
        @typedef ItemTotal
        
        
        @property { number } [new]
        
        @property { number } [processing]
        
        @property { number } [returns]
        
        @property { number } [all]
        
         
    */
/**
        @typedef AppliedFilters
        
        
        @property { string } [stage]
        
        @property { Array<string> } [stores]
        
        @property { string } [fromDate]
        
        @property { string } [toDate]
        
         
    */
/**
        @typedef UpdateOrderReprocessResponse
        
        
        @property { string } status
        
         
    */
/**
        @typedef PlatformOrderTrack
        
        
        @property { boolean } success
        
        @property { string } requestId
        
        @property { string } message
        
        @property { string } mobile
        
        @property { string } countryCode
        
        @property { number } resendTimer
        
        @property { string } [resendToken]
        
         
    */
/**
        @typedef GetPingResponse
        
        
        @property { string } ping
        
         
    */
/**
        @typedef UpdateShipmentStatusResponse
        
        
        @property { Object } shipments
        
        @property { Array<any> } [errorShipments]
        
         
    */
/**
        @typedef UpdateShipmentStatusBody
        
        
        @property { Object } shipments
        
        @property { boolean } forceTransition
        
        @property { boolean } task
        
         
    */
/**
        @typedef PlatformShipmentTrack
        
        
        @property { Results } results
        
         
    */
/**
        @typedef Results
        
        
        @property { string } [awb]
        
        @property { string } [updatedAt]
        
        @property { string } [lastLocationRecievedAt]
        
        @property { string } [reason]
        
        @property { string } [shipmentType]
        
        @property { string } [status]
        
        @property { string } [updatedTime]
        
        @property { string } [accountName]
        
         
    */
/**
        @typedef UpdateProcessShipmenstRequestBody
        
        
        @property { Array<string> } shipmentIds
        
        @property { string } expectedStatus
        
         
    */
/**
        @typedef UpdateProcessShipmenstRequestResponse
        
        
        @property { boolean } success
        
        @property { string } message
        
         
    */
/**
        @typedef GetVoiceCallbackResponse
        
        
        @property { string } message
        
         
    */
/**
        @typedef GetClickToCallResponse
        
        
        @property { string } message
        
         
    */
/**
        @typedef ApefaceApiError
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef GetSearchWordsData
        
        
        @property { Object } [customJson]
        
        @property { Object } [result]
        
        @property { string } [appId]
        
        @property { string } [uid]
        
        @property { Array<string> } [words]
        
         
    */
/**
        @typedef GetSearchWordsDetailResponse
        
        
        @property { GetSearchWordsData } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef ErrorResponse
        
        
        @property { Object } [meta]
        
        @property { Object } [errors]
        
        @property { string } [message]
        
        @property { string } [code]
        
        @property { number } [status]
        
         
    */
/**
        @typedef SearchKeywordResult
        
        
        @property { Object } query
        
        @property { string } sortOn
        
         
    */
/**
        @typedef CreateSearchKeyword
        
        
        @property { Object } [customJson]
        
        @property { SearchKeywordResult } result
        
        @property { string } [appId]
        
        @property { boolean } [isActive]
        
        @property { Array<string> } [words]
        
         
    */
/**
        @typedef DeleteResponse
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef GetSearchWordsResponse
        
        
        @property { Array<GetSearchWordsData> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef GetAutocompleteWordsData
        
        
        @property { Object } [customJson]
        
        @property { string } [appId]
        
        @property { string } [uid]
        
        @property { Array<string> } [words]
        
        @property { Array<Object> } [results]
        
         
    */
/**
        @typedef GetAutocompleteWordsResponse
        
        
        @property { Array<GetAutocompleteWordsData> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef Media
        
        
        @property { string } [url]
        
        @property { string } [type]
        
         
    */
/**
        @typedef AutocompletePageAction
        
        
        @property { Object } query
        
        @property { Object } [params]
        
        @property { string } [url]
        
        @property { string } type
        
         
    */
/**
        @typedef AutocompleteAction
        
        
        @property { AutocompletePageAction } [page]
        
        @property { string } [type]
        
         
    */
/**
        @typedef AutocompleteResult
        
        
        @property { Media } [logo]
        
        @property { Object } [customJson]
        
        @property { string } [display]
        
        @property { AutocompleteAction } [action]
        
         
    */
/**
        @typedef CreateAutocompleteKeyword
        
        
        @property { Object } [customJson]
        
        @property { string } [appId]
        
        @property { boolean } [isActive]
        
        @property { Array<string> } [words]
        
        @property { Array<AutocompleteResult> } [results]
        
         
    */
/**
        @typedef CreateAutocompleteWordsResponse
        
        
        @property { Array<Object> } [results]
        
        @property { Object } [customJson]
        
        @property { Array<string> } [words]
        
        @property { string } [appId]
        
         
    */
/**
        @typedef ProductBundleItem
        
        
        @property { number } productUid
        
        @property { boolean } [allowRemove]
        
        @property { number } minQuantity
        
        @property { number } maxQuantity
        
        @property { boolean } [autoSelect]
        
        @property { boolean } [autoAddToCart]
        
         
    */
/**
        @typedef GetProductBundleCreateResponse
        
        
        @property { string } [logo]
        
        @property { Array<string> } [pageVisibility]
        
        @property { string } [modifiedOn]
        
        @property { Array<ProductBundleItem> } products
        
        @property { number } [companyId]
        
        @property { Object } [meta]
        
        @property { boolean } [sameStoreAssignment]
        
        @property { Object } [createdBy]
        
        @property { boolean } isActive
        
        @property { string } [createdOn]
        
        @property { string } [id]
        
        @property { string } name
        
        @property { Object } [modifiedBy]
        
        @property { string } slug
        
        @property { string } choice
        
         
    */
/**
        @typedef GetProductBundleListingResponse
        
        
        @property { Array<GetProductBundleCreateResponse> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef ProductBundleRequest
        
        
        @property { string } [logo]
        
        @property { Array<string> } [pageVisibility]
        
        @property { string } [modifiedOn]
        
        @property { Array<ProductBundleItem> } products
        
        @property { Object } [meta]
        
        @property { boolean } [sameStoreAssignment]
        
        @property { Object } [createdBy]
        
        @property { boolean } isActive
        
        @property { string } [createdOn]
        
        @property { string } name
        
        @property { Object } [modifiedBy]
        
        @property { string } slug
        
        @property { string } choice
        
         
    */
/**
        @typedef Price
        
        
        @property { number } [maxEffective]
        
        @property { number } [maxMarked]
        
        @property { number } [minMarked]
        
        @property { number } [minEffective]
        
        @property { string } [currency]
        
         
    */
/**
        @typedef Size
        
        
        @property { boolean } [isAvailable]
        
        @property { string } [value]
        
        @property { number } [quantity]
        
        @property { string } [display]
        
         
    */
/**
        @typedef LimitedProductData
        
        
        @property { Object } [identifier]
        
        @property { Object } [attributes]
        
        @property { number } [quantity]
        
        @property { Object } [price]
        
        @property { string } [shortDescription]
        
        @property { string } [countryOfOrigin]
        
        @property { number } [uid]
        
        @property { string } [itemCode]
        
        @property { string } [name]
        
        @property { string } [slug]
        
        @property { Array<string> } [images]
        
        @property { Array<string> } [sizes]
        
         
    */
/**
        @typedef GetProducts
        
        
        @property { number } [productUid]
        
        @property { Price } [price]
        
        @property { number } [minQuantity]
        
        @property { number } [maxQuantity]
        
        @property { boolean } [autoSelect]
        
        @property { Array<Size> } [sizes]
        
        @property { LimitedProductData } [productDetails]
        
        @property { boolean } [allowRemove]
        
        @property { boolean } [autoAddToCart]
        
         
    */
/**
        @typedef GetProductBundleResponse
        
        
        @property { Array<string> } [pageVisibility]
        
        @property { string } [logo]
        
        @property { number } [companyId]
        
        @property { Array<GetProducts> } [products]
        
        @property { Object } [meta]
        
        @property { boolean } [sameStoreAssignment]
        
        @property { boolean } [isActive]
        
        @property { string } [name]
        
        @property { string } [slug]
        
        @property { string } [choice]
        
         
    */
/**
        @typedef ProductBundleUpdateRequest
        
        
        @property { string } [logo]
        
        @property { Array<string> } [pageVisibility]
        
        @property { string } [modifiedOn]
        
        @property { Array<ProductBundleItem> } products
        
        @property { Object } [meta]
        
        @property { boolean } [sameStoreAssignment]
        
        @property { boolean } isActive
        
        @property { string } name
        
        @property { Object } [modifiedBy]
        
        @property { string } slug
        
        @property { string } choice
        
         
    */
/**
        @typedef ListSizeGuide
        
        
        @property { Array<Object> } [items]
        
        @property { Object } [page]
        
         
    */
/**
        @typedef Meta
        
        
        @property { string } [unit]
        
        @property { Object } [headers]
        
        @property { Array<Object> } [values]
        
         
    */
/**
        @typedef Guide
        
        
        @property { Meta } [meta]
        
         
    */
/**
        @typedef ValidateSizeGuide
        
        
        @property { number } [companyId]
        
        @property { string } [modifiedOn]
        
        @property { string } title
        
        @property { boolean } [active]
        
        @property { number } [brandId]
        
        @property { Object } [createdBy]
        
        @property { string } [subtitle]
        
        @property { string } [createdOn]
        
        @property { string } name
        
        @property { string } [description]
        
        @property { Object } [modifiedBy]
        
        @property { string } [id]
        
        @property { string } [image]
        
        @property { string } [tag]
        
        @property { Guide } [guide]
        
         
    */
/**
        @typedef SuccessResponse
        
        
        @property { boolean } [success]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef SizeGuideResponse
        
        
        @property { string } [modifiedOn]
        
        @property { number } [companyId]
        
        @property { string } [title]
        
        @property { boolean } [active]
        
        @property { number } [brandId]
        
        @property { Object } [createdBy]
        
        @property { string } [subtitle]
        
        @property { string } [createdOn]
        
        @property { string } [name]
        
        @property { Object } [modifiedBy]
        
        @property { string } [id]
        
        @property { string } [tag]
        
        @property { Object } [guide]
        
         
    */
/**
        @typedef MetaDataListingFilterMetaResponse
        
        
        @property { Array<Object> } [units]
        
        @property { string } [key]
        
        @property { string } [display]
        
        @property { Array<string> } [filterTypes]
        
         
    */
/**
        @typedef MetaDataListingFilterResponse
        
        
        @property { Array<MetaDataListingFilterMetaResponse> } [data]
        
         
    */
/**
        @typedef MetaDataListingSortMetaResponse
        
        
        @property { string } [key]
        
        @property { string } [display]
        
         
    */
/**
        @typedef MetaDataListingSortResponse
        
        
        @property { Array<MetaDataListingSortMetaResponse> } [data]
        
         
    */
/**
        @typedef MetaDataListingResponse
        
        
        @property { MetaDataListingFilterResponse } filter
        
        @property { MetaDataListingSortResponse } sort
        
         
    */
/**
        @typedef GetCatalogConfigurationDetailsProduct
        
        
        @property { Object } [similar]
        
        @property { Object } [compare]
        
        @property { Object } [detail]
        
        @property { Object } [variant]
        
         
    */
/**
        @typedef GetCatalogConfigurationMetaData
        
        
        @property { MetaDataListingResponse } [listing]
        
        @property { GetCatalogConfigurationDetailsProduct } [product]
        
         
    */
/**
        @typedef ProductSize
        
        
        @property { number } min
        
        @property { number } max
        
         
    */
/**
        @typedef ConfigurationProductConfig
        
        
        @property { string } [logo]
        
        @property { string } [title]
        
        @property { string } key
        
        @property { boolean } isActive
        
        @property { ProductSize } [size]
        
        @property { number } priority
        
        @property { string } [subtitle]
        
         
    */
/**
        @typedef ConfigurationProductSimilar
        
        
        @property { Array<ConfigurationProductConfig> } [config]
        
         
    */
/**
        @typedef ConfigurationProductVariantConfig
        
        
        @property { string } [logo]
        
        @property { string } displayType
        
        @property { string } key
        
        @property { boolean } isActive
        
        @property { ProductSize } size
        
        @property { string } name
        
        @property { number } priority
        
         
    */
/**
        @typedef ConfigurationProductVariant
        
        
        @property { Array<ConfigurationProductVariantConfig> } [config]
        
         
    */
/**
        @typedef ConfigurationProduct
        
        
        @property { ConfigurationProductSimilar } similar
        
        @property { ConfigurationProductVariant } variant
        
         
    */
/**
        @typedef ConfigurationBucketPoints
        
        
        @property { number } [end]
        
        @property { number } [start]
        
         
    */
/**
        @typedef ConfigurationListingFilterValue
        
        
        @property { Array<ConfigurationBucketPoints> } [bucketPoints]
        
        @property { string } [value]
        
        @property { string } [sort]
        
        @property { string } [condition]
        
        @property { Object } [map]
        
         
    */
/**
        @typedef ConfigurationListingFilterConfig
        
        
        @property { string } [logo]
        
        @property { string } key
        
        @property { string } type
        
        @property { boolean } isActive
        
        @property { string } [name]
        
        @property { number } priority
        
        @property { ConfigurationListingFilterValue } [valueConfig]
        
         
    */
/**
        @typedef ConfigurationListingFilter
        
        
        @property { boolean } allowSingle
        
        @property { Array<ConfigurationListingFilterConfig> } [attributeConfig]
        
         
    */
/**
        @typedef ConfigurationListingSortConfig
        
        
        @property { string } [logo]
        
        @property { string } key
        
        @property { boolean } isActive
        
        @property { string } [name]
        
        @property { number } priority
        
         
    */
/**
        @typedef ConfigurationListingSort
        
        
        @property { string } defaultKey
        
        @property { Array<ConfigurationListingSortConfig> } [config]
        
         
    */
/**
        @typedef ConfigurationListing
        
        
        @property { ConfigurationListingFilter } filter
        
        @property { ConfigurationListingSort } sort
        
         
    */
/**
        @typedef AppCatalogConfiguration
        
        
        @property { string } [configId]
        
        @property { ConfigurationProduct } [product]
        
        @property { string } appId
        
        @property { string } configType
        
        @property { ConfigurationListing } [listing]
        
        @property { string } [id]
        
         
    */
/**
        @typedef GetAppCatalogConfiguration
        
        
        @property { boolean } [isDefault]
        
        @property { AppCatalogConfiguration } [data]
        
         
    */
/**
        @typedef AppConfiguration
        
        
        @property { string } [configId]
        
        @property { ConfigurationProduct } [product]
        
        @property { string } appId
        
        @property { string } configType
        
        @property { ConfigurationListing } [listing]
        
         
    */
/**
        @typedef GetCatalogConfigurationDetailsSchemaListing
        
        
        @property { Object } [filter]
        
        @property { Object } [sort]
        
         
    */
/**
        @typedef EntityConfiguration
        
        
        @property { string } [configId]
        
        @property { GetCatalogConfigurationDetailsProduct } [product]
        
        @property { string } appId
        
        @property { string } configType
        
        @property { GetCatalogConfigurationDetailsSchemaListing } [listing]
        
        @property { string } [id]
        
         
    */
/**
        @typedef GetAppCatalogEntityConfiguration
        
        
        @property { boolean } [isDefault]
        
        @property { EntityConfiguration } [data]
        
         
    */
/**
        @typedef ProductSortOn
        
        
        @property { string } [value]
        
        @property { boolean } [isSelected]
        
        @property { string } [name]
        
         
    */
/**
        @typedef ProductFiltersKey
        
        
        @property { string } [logo]
        
        @property { string } [kind]
        
        @property { string } display
        
        @property { string } name
        
         
    */
/**
        @typedef ProductFiltersValue
        
        
        @property { string } display
        
        @property { number } [selectedMax]
        
        @property { number } [min]
        
        @property { string } [displayFormat]
        
        @property { string } [queryFormat]
        
        @property { boolean } isSelected
        
        @property { number } [count]
        
        @property { number } [selectedMin]
        
        @property { string } value
        
        @property { string } [currencyCode]
        
        @property { string } [currencySymbol]
        
        @property { number } [max]
        
         
    */
/**
        @typedef ProductFilters
        
        
        @property { ProductFiltersKey } key
        
        @property { Array<ProductFiltersValue> } values
        
         
    */
/**
        @typedef GetCollectionQueryOptionResponse
        
        
        @property { Array<ProductSortOn> } [sortOn]
        
        @property { Array<ProductFilters> } [filters]
        
         
    */
/**
        @typedef Media1
        
        
        @property { string } url
        
        @property { Object } [meta]
        
        @property { string } [type]
        
         
    */
/**
        @typedef ProductListingActionPage
        
        
        @property { Object } [query]
        
        @property { string } [type]
        
         
    */
/**
        @typedef ProductListingAction
        
        
        @property { ProductListingActionPage } [page]
        
        @property { string } [type]
        
         
    */
/**
        @typedef BannerImage
        
        
        @property { string } [url]
        
        @property { string } [aspectRatio]
        
         
    */
/**
        @typedef ImageUrls
        
        
        @property { BannerImage } [landscape]
        
        @property { BannerImage } [portrait]
        
         
    */
/**
        @typedef GetCollectionDetailNest
        
        
        @property { string } [appId]
        
        @property { Object } [badge]
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { Object } [query]
        
        @property { Media1 } [logo]
        
        @property { ProductListingAction } [action]
        
        @property { boolean } [allowSort]
        
        @property { Array<string> } [tag]
        
        @property { Object } [schedule]
        
        @property { Object } [cron]
        
        @property { ImageUrls } [banners]
        
        @property { boolean } [allowFacets]
        
        @property { Object } [meta]
        
        @property { string } [type]
        
        @property { boolean } [isActive]
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } [uid]
        
        @property { string } [slug]
        
         
    */
/**
        @typedef CollectionListingFilterTag
        
        
        @property { boolean } [isSelected]
        
        @property { string } [display]
        
        @property { string } [name]
        
         
    */
/**
        @typedef CollectionListingFilterType
        
        
        @property { boolean } [isSelected]
        
        @property { string } [display]
        
        @property { string } [name]
        
         
    */
/**
        @typedef CollectionListingFilter
        
        
        @property { Array<CollectionListingFilterTag> } [tags]
        
        @property { Array<CollectionListingFilterType> } [type]
        
         
    */
/**
        @typedef GetCollectionListingResponse
        
        
        @property { Array<GetCollectionDetailNest> } [items]
        
        @property { CollectionListingFilter } [filters]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef CollectionBadge
        
        
        @property { string } [text]
        
        @property { string } [color]
        
         
    */
/**
        @typedef CollectionImage
        
        
        @property { string } url
        
        @property { string } aspectRatio
        
         
    */
/**
        @typedef SeoDetail
        
        
        @property { string } [title]
        
        @property { string } [description]
        
         
    */
/**
        @typedef UserInfo
        
        
        @property { string } [email]
        
        @property { string } [userId]
        
        @property { string } [uid]
        
        @property { string } [username]
        
         
    */
/**
        @typedef Schedule
        
        
        @property { string } [end]
        
        @property { string } [start]
        
        @property { number } [duration]
        
        @property { string } [cron]
        
         
    */
/**
        @typedef CollectionBanner
        
        
        @property { CollectionImage } landscape
        
        @property { CollectionImage } portrait
        
         
    */
/**
        @typedef CreateCollection
        
        
        @property { string } appId
        
        @property { CollectionBadge } [badge]
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { Object } [query]
        
        @property { CollectionImage } logo
        
        @property { boolean } [published]
        
        @property { Object } [localeLanguage]
        
        @property { SeoDetail } [seo]
        
        @property { string } [sortOn]
        
        @property { Array<string> } [tags]
        
        @property { UserInfo } [modifiedBy]
        
        @property { boolean } [allowSort]
        
        @property { Schedule } [schedule]
        
        @property { Object } [customJson]
        
        @property { CollectionBanner } banners
        
        @property { boolean } [allowFacets]
        
        @property { Object } [meta]
        
        @property { UserInfo } [createdBy]
        
        @property { string } type
        
        @property { boolean } [isActive]
        
        @property { string } name
        
        @property { string } [description]
        
        @property { string } slug
        
         
    */
/**
        @typedef CollectionCreateResponse
        
        
        @property { BannerImage } [logo]
        
        @property { Object } [meta]
        
        @property { Object } [cron]
        
        @property { ImageUrls } [banners]
        
        @property { string } [appId]
        
        @property { string } [type]
        
        @property { Object } [badge]
        
        @property { boolean } [isActive]
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { Object } [query]
        
        @property { string } [slug]
        
        @property { boolean } [allowFacets]
        
        @property { boolean } [allowSort]
        
        @property { Array<string> } [tag]
        
        @property { Object } [schedule]
        
         
    */
/**
        @typedef CollectionDetailResponse
        
        
        @property { Media1 } [logo]
        
        @property { Object } [meta]
        
        @property { Object } [cron]
        
        @property { ImageUrls } [banners]
        
        @property { string } [appId]
        
        @property { string } [type]
        
        @property { Object } [badge]
        
        @property { boolean } [isActive]
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { Object } [query]
        
        @property { string } [slug]
        
        @property { boolean } [allowFacets]
        
        @property { boolean } [allowSort]
        
        @property { Array<string> } [tag]
        
        @property { Object } [schedule]
        
         
    */
/**
        @typedef Price1
        
        
        @property { string } [currencySymbol]
        
        @property { string } [currencyCode]
        
        @property { number } [min]
        
        @property { number } [max]
        
         
    */
/**
        @typedef ProductListingPrice
        
        
        @property { Price1 } [marked]
        
        @property { Price1 } [effective]
        
         
    */
/**
        @typedef ProductListingDetail
        
        
        @property { Array<string> } [highlights]
        
        @property { Object } [attributes]
        
        @property { string } [discount]
        
        @property { ProductListingPrice } [price]
        
        @property { Array<Media1> } [medias]
        
        @property { number } [ratingCount]
        
        @property { string } [imageNature]
        
        @property { Object } [promoMeta]
        
        @property { string } [itemType]
        
        @property { string } [shortDescription]
        
        @property { string } [productOnlineDate]
        
        @property { boolean } [sellable]
        
        @property { string } [description]
        
        @property { Object } [teaserTag]
        
        @property { number } [rating]
        
        @property { boolean } [hasVariant]
        
        @property { string } [color]
        
        @property { string } [type]
        
        @property { Array<string> } [similars]
        
        @property { number } [uid]
        
        @property { Array<string> } [tryouts]
        
        @property { string } [name]
        
        @property { string } slug
        
         
    */
/**
        @typedef GetCollectionItemsResponse
        
        
        @property { Array<ProductListingDetail> } [items]
        
        @property { Array<ProductFilters> } [filters]
        
        @property { Page } [page]
        
        @property { Array<ProductSortOn> } [sortOn]
        
         
    */
/**
        @typedef CollectionItemRequest
        
        
        @property { number } pageNo
        
        @property { number } pageSize
        
         
    */
/**
        @typedef UpdatedResponse
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef CatalogInsightItem
        
        
        @property { number } [outOfStockCount]
        
        @property { number } [count]
        
        @property { number } [sellableCount]
        
         
    */
/**
        @typedef CatalogInsightBrand
        
        
        @property { number } [availableArticles]
        
        @property { number } [articleFreshness]
        
        @property { number } [availableSizes]
        
        @property { number } [totalArticles]
        
        @property { string } [name]
        
        @property { number } [totalSizes]
        
         
    */
/**
        @typedef CatalogInsightResponse
        
        
        @property { CatalogInsightItem } [item]
        
        @property { CatalogInsightBrand } [brandDistribution]
        
         
    */
/**
        @typedef CrossSellingData
        
        
        @property { number } [products]
        
        @property { number } [articles]
        
         
    */
/**
        @typedef CrossSellingResponse
        
        
        @property { CatalogInsightBrand } [brandDistribution]
        
        @property { CrossSellingData } [data]
        
         
    */
/**
        @typedef OptInPostRequest
        
        
        @property { string } optLevel
        
        @property { boolean } [enabled]
        
        @property { Array<number> } [brandIds]
        
        @property { Array<number> } [storeIds]
        
         
    */
/**
        @typedef CompanyOptIn
        
        
        @property { number } companyId
        
        @property { boolean } enabled
        
        @property { number } modifiedOn
        
        @property { Array<number> } storeIds
        
        @property { string } optLevel
        
        @property { Object } [createdBy]
        
        @property { string } platform
        
        @property { number } createdOn
        
        @property { Array<number> } brandIds
        
        @property { Object } [modifiedBy]
        
         
    */
/**
        @typedef GetOptInPlatform
        
        
        @property { Array<CompanyOptIn> } items
        
        @property { Page } page
        
         
    */
/**
        @typedef OptinCompanyDetail
        
        
        @property { string } [companyType]
        
        @property { string } [name]
        
        @property { string } [businessType]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef CompanyBrandDetail
        
        
        @property { number } [brandId]
        
        @property { number } [companyId]
        
        @property { number } [totalArticle]
        
        @property { string } [brandName]
        
         
    */
/**
        @typedef OptinCompanyBrandDetailsView
        
        
        @property { Array<CompanyBrandDetail> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef OptinCompanyMetrics
        
        
        @property { number } [brand]
        
        @property { string } [company]
        
        @property { number } [store]
        
         
    */
/**
        @typedef StoreDetail
        
        
        @property { Object } [timing]
        
        @property { string } [modifiedOn]
        
        @property { number } [companyId]
        
        @property { string } [storeCode]
        
        @property { string } [storeType]
        
        @property { string } [createdOn]
        
        @property { string } [displayName]
        
        @property { Array<Object> } [additionalContacts]
        
        @property { number } [uid]
        
        @property { string } [name]
        
        @property { Array<Object> } [documents]
        
         
    */
/**
        @typedef OptinStoreDetails
        
        
        @property { Array<StoreDetail> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef MultipleCommon
        
        
        @property { string } [uid]
        
         
    */
/**
        @typedef BasePage
        
        
        @property { boolean } [hasPrevious]
        
        @property { boolean } [hasNext]
        
        @property { number } [size]
        
        @property { number } [itemTotal]
        
        @property { number } [current]
        
         
    */
/**
        @typedef ProdcutTemplateCategoriesResponse
        
        
        @property { MultipleCommon } [items]
        
        @property { BasePage } [page]
        
         
    */
/**
        @typedef PTErrorResponse
        
        
        @property { Object } [meta]
        
        @property { Object } [errors]
        
        @property { string } [message]
        
        @property { string } [code]
        
        @property { number } [status]
        
         
    */
/**
        @typedef UserSerializer
        
        
        @property { string } [contact]
        
        @property { string } [userId]
        
        @property { string } [username]
        
         
    */
/**
        @typedef GetDepartment
        
        
        @property { string } [logo]
        
        @property { string } [modifiedOn]
        
        @property { UserSerializer } [createdBy]
        
        @property { number } [priorityOrder]
        
        @property { number } [pageSize]
        
        @property { boolean } [isActive]
        
        @property { string } [search]
        
        @property { Array<string> } [synonyms]
        
        @property { string } [createdOn]
        
        @property { UserSerializer } [modifiedBy]
        
        @property { string } [name]
        
        @property { number } [uid]
        
        @property { number } [pageNo]
        
        @property { string } [slug]
        
        @property { string } [itemType]
        
         
    */
/**
        @typedef BasePage1
        
        
        @property { string } [nextPageId]
        
        @property { boolean } [hasNext]
        
        @property { boolean } [hasPrevious]
        
        @property { number } [itemTotal]
        
         
    */
/**
        @typedef DepartmentsResponse
        
        
        @property { Array<GetDepartment> } [items]
        
        @property { BasePage1 } [page]
        
         
    */
/**
        @typedef DepartmentErrorResponse
        
        
        @property { Object } [meta]
        
        @property { Object } [errors]
        
        @property { string } [message]
        
        @property { string } [code]
        
        @property { number } [status]
        
         
    */
/**
        @typedef ProductTemplate
        
        
        @property { string } [logo]
        
        @property { Array<string> } [departments]
        
        @property { string } [modifiedOn]
        
        @property { boolean } [isArchived]
        
        @property { Array<string> } [categories]
        
        @property { Array<string> } [attributes]
        
        @property { boolean } isPhysical
        
        @property { Object } [createdBy]
        
        @property { boolean } [isActive]
        
        @property { string } [createdOn]
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { Object } [modifiedBy]
        
        @property { string } slug
        
        @property { string } [tag]
        
         
    */
/**
        @typedef TemplatesResponse
        
        
        @property { ProductTemplate } [items]
        
        @property { BasePage } [page]
        
         
    */
/**
        @typedef TemplatesValidationResponse
        
        
        @property { MultipleCommon } [data]
        
         
    */
/**
        @typedef InventoryValidationResponse
        
        
        @property { string } [message]
        
        @property { MultipleCommon } [data]
        
         
    */
/**
        @typedef HSNData
        
        
        @property { Array<string> } [countryOfOrigin]
        
        @property { Array<string> } [hsnCode]
        
         
    */
/**
        @typedef HSNCodesResponse
        
        
        @property { string } [message]
        
        @property { HSNData } [data]
        
         
    */
/**
        @typedef ProductConfligurationDownloads
        
        
        @property { boolean } [multivalue]
        
        @property { Array<MultipleCommon> } [data]
        
         
    */
/**
        @typedef Hierarchy
        
        
        @property { number } department
        
        @property { number } l1
        
        @property { number } l2
        
         
    */
/**
        @typedef Media2
        
        
        @property { string } logo
        
        @property { string } landscape
        
        @property { string } portrait
        
         
    */
/**
        @typedef CategoryMappingValues
        
        
        @property { string } name
        
        @property { number } [catalogId]
        
         
    */
/**
        @typedef CategoryMapping
        
        
        @property { CategoryMappingValues } [google]
        
        @property { CategoryMappingValues } [ajio]
        
        @property { CategoryMappingValues } [facebook]
        
         
    */
/**
        @typedef Category
        
        
        @property { Array<number> } departments
        
        @property { string } [modifiedOn]
        
        @property { number } level
        
        @property { Array<Hierarchy> } [hierarchy]
        
        @property { Object } [createdBy]
        
        @property { Media2 } [media]
        
        @property { string } [id]
        
        @property { boolean } isActive
        
        @property { string } [createdOn]
        
        @property { Array<string> } [tryouts]
        
        @property { Array<string> } [synonyms]
        
        @property { string } name
        
        @property { number } [uid]
        
        @property { Object } [modifiedBy]
        
        @property { string } [slug]
        
        @property { CategoryMapping } [marketplaces]
        
        @property { number } [priority]
        
         
    */
/**
        @typedef CategoryResponse
        
        
        @property { Array<Category> } [items]
        
        @property { BasePage1 } [page]
        
         
    */
/**
        @typedef CategoryRequestBody
        
        
        @property { Array<number> } departments
        
        @property { number } level
        
        @property { Array<Hierarchy> } [hierarchy]
        
        @property { Media2 } [media]
        
        @property { boolean } isActive
        
        @property { Array<string> } [synonyms]
        
        @property { string } name
        
        @property { Array<string> } [tryouts]
        
        @property { string } [slug]
        
        @property { CategoryMapping } [marketplaces]
        
        @property { number } [priority]
        
         
    */
/**
        @typedef CategoryCreateResponse
        
        
        @property { string } [message]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef CategoryUpdateResponse
        
        
        @property { string } [message]
        
        @property { boolean } [success]
        
         
    */
/**
        @typedef VerifiedBy
        
        
        @property { string } [userId]
        
        @property { string } [username]
        
         
    */
/**
        @typedef UserCommon
        
        
        @property { number } [companyId]
        
        @property { string } [userId]
        
        @property { string } [username]
        
         
    */
/**
        @typedef Attributes
        
        
        @property { string } [primaryColor]
        
        @property { VerifiedBy } [verifiedBy]
        
        @property { string } [essential]
        
        @property { string } [verifiedOn]
        
        @property { string } [createdOn]
        
        @property { string } [sleeveLength]
        
        @property { string } [metaNature]
        
        @property { string } [imageNature]
        
        @property { Array<string> } [l3Mapping]
        
        @property { string } [neckType]
        
        @property { UserCommon } [modifiedBy]
        
        @property { string } [modifiedOn]
        
        @property { string } [productFit]
        
        @property { string } [pattern]
        
        @property { string } [stage]
        
        @property { string } [material]
        
        @property { boolean } [isImageLessProduct]
        
        @property { string } [color]
        
        @property { UserCommon } [createdBy]
        
        @property { string } [primaryMaterial]
        
        @property { Array<string> } [gender]
        
         
    */
/**
        @typedef Logo
        
        
        @property { string } [secureUrl]
        
        @property { string } [url]
        
        @property { string } [aspectRatio]
        
        @property { number } [aspectRatioF]
        
         
    */
/**
        @typedef Brand
        
        
        @property { Logo } [logo]
        
        @property { number } [uid]
        
        @property { string } [name]
        
         
    */
/**
        @typedef ProductPublished
        
        
        @property { boolean } [isSet]
        
        @property { number } [productOnlineDate]
        
         
    */
/**
        @typedef Product
        
        
        @property { string } [highlights]
        
        @property { Attributes } [attributes]
        
        @property { Array<string> } [allSizes]
        
        @property { string } [categorySlug]
        
        @property { string } [countryOfOrigin]
        
        @property { Array<string> } [images]
        
        @property { Array<Object> } [sizes]
        
        @property { number } [companyId]
        
        @property { boolean } [isDependent]
        
        @property { Brand } [brand]
        
        @property { string } [itemType]
        
        @property { string } [id]
        
        @property { string } [description]
        
        @property { string } [currency]
        
        @property { Array<string> } [media]
        
        @property { ProductPublished } [productPublish]
        
        @property { string } [sizeGuide]
        
        @property { string } [itemCode]
        
        @property { Array<number> } [departments]
        
        @property { string } [hsnCode]
        
        @property { boolean } [isSet]
        
        @property { boolean } [isActive]
        
        @property { string } [templateTag]
        
        @property { string } [name]
        
        @property { number } [uid]
        
        @property { boolean } [multiSize]
        
        @property { string } [slug]
        
         
    */
/**
        @typedef PageData
        
        
        @property { boolean } [hasPrevious]
        
        @property { boolean } [hasNext]
        
        @property { number } [size]
        
        @property { number } [itemTotal]
        
        @property { string } [current]
        
         
    */
/**
        @typedef ProductListingResponse
        
        
        @property { Array<Product> } [items]
        
        @property { PageData } [page]
        
         
    */
/**
        @typedef ReturnConfig
        
        
        @property { number } [time]
        
        @property { string } [unit]
        
        @property { boolean } [returnable]
        
         
    */
/**
        @typedef Trader
        
        
        @property { string } address
        
        @property { string } name
        
         
    */
/**
        @typedef ProductPublish
        
        
        @property { boolean } [isSet]
        
        @property { string } [productOnlineDate]
        
         
    */
/**
        @typedef OrderQuantity
        
        
        @property { number } [minimum]
        
        @property { number } [maximum]
        
        @property { boolean } [isSet]
        
         
    */
/**
        @typedef TeaserTag
        
        
        @property { string } [url]
        
        @property { string } [tag]
        
         
    */
/**
        @typedef CustomOrder
        
        
        @property { number } [manufacturingTime]
        
        @property { string } [manufacturingTimeUnit]
        
        @property { boolean } [isCustomOrder]
        
         
    */
/**
        @typedef ProductCreateUpdate
        
        
        @property { Array<string> } [highlights]
        
        @property { Array<string> } [productGroupTag]
        
        @property { ReturnConfig } [returnConfig]
        
        @property { string } categorySlug
        
        @property { string } countryOfOrigin
        
        @property { number } companyId
        
        @property { string } [changeRequestId]
        
        @property { boolean } [multiSize]
        
        @property { boolean } [isDependent]
        
        @property { Array<string> } [tags]
        
        @property { string } [shortDescription]
        
        @property { Trader } [trader]
        
        @property { string } itemType
        
        @property { number } [noOfBoxes]
        
        @property { string } currency
        
        @property { Object } [customJson]
        
        @property { Object } [variants]
        
        @property { Array<Media1> } [media]
        
        @property { number } brandUid
        
        @property { ProductPublish } [productPublish]
        
        @property { OrderQuantity } [moq]
        
        @property { string } [sizeGuide]
        
        @property { string } itemCode
        
        @property { boolean } [isImageLessProduct]
        
        @property { TeaserTag } [teaserTag]
        
        @property { Array<number> } departments
        
        @property { string } hsnCode
        
        @property { string } [traderType]
        
        @property { boolean } [isSet]
        
        @property { CustomOrder } [customOrder]
        
        @property { boolean } [isActive]
        
        @property { string } templateTag
        
        @property { string } name
        
        @property { string } [description]
        
        @property { number } [uid]
        
        @property { string } slug
        
        @property { string } [requester]
        
         
    */
/**
        @typedef ValidateProduct
        
        
        @property { boolean } [valid]
        
         
    */
/**
        @typedef UserDetail
        
        
        @property { string } [fullName]
        
        @property { string } [userId]
        
        @property { string } [username]
        
         
    */
/**
        @typedef ProductBulkRequest
        
        
        @property { number } [companyId]
        
        @property { Array<string> } [cancelledRecords]
        
        @property { string } [modifiedOn]
        
        @property { ProductTemplate } [template]
        
        @property { UserDetail } [createdBy]
        
        @property { number } [cancelled]
        
        @property { boolean } [isActive]
        
        @property { string } [createdOn]
        
        @property { number } [total]
        
        @property { string } [templateTag]
        
        @property { UserDetail } [modifiedBy]
        
        @property { number } [failed]
        
        @property { string } [stage]
        
        @property { number } [succeed]
        
        @property { Array<string> } [failedRecords]
        
        @property { string } [filePath]
        
         
    */
/**
        @typedef ProductBulkRequestList
        
        
        @property { ProductBulkRequest } [items]
        
        @property { PageData } [page]
        
         
    */
/**
        @typedef UserInfo1
        
        
        @property { string } [email]
        
        @property { string } [userId]
        
        @property { string } [uid]
        
        @property { string } [username]
        
         
    */
/**
        @typedef BulkJob
        
        
        @property { string } [modifiedOn]
        
        @property { number } companyId
        
        @property { Array<Object> } [cancelledRecords]
        
        @property { number } [succeed]
        
        @property { string } [customTemplateTag]
        
        @property { UserInfo1 } [createdBy]
        
        @property { string } [filePath]
        
        @property { boolean } [isActive]
        
        @property { string } createdOn
        
        @property { number } total
        
        @property { string } [templateTag]
        
        @property { number } [failed]
        
        @property { string } [stage]
        
        @property { UserInfo1 } [modifiedBy]
        
        @property { Array<Object> } [failedRecords]
        
        @property { number } [cancelled]
        
        @property { string } [trackingUrl]
        
         
    */
/**
        @typedef BulkProductRequest
        
        
        @property { number } companyId
        
        @property { string } templateTag
        
        @property { string } batchId
        
        @property { Array<Object> } data
        
         
    */
/**
        @typedef NestedTags
        
        
        @property { Array<string> } [tags]
        
         
    */
/**
        @typedef ProductTagsViewResponse
        
        
        @property { NestedTags } [items]
        
         
    */
/**
        @typedef Items
        
        
        @property { string } [modifiedOn]
        
        @property { Array<string> } [cancelledRecords]
        
        @property { number } [companyId]
        
        @property { number } [succeed]
        
        @property { number } [retry]
        
        @property { UserCommon } [createdBy]
        
        @property { number } [cancelled]
        
        @property { string } [createdOn]
        
        @property { boolean } [isActive]
        
        @property { number } [total]
        
        @property { number } [failed]
        
        @property { string } [stage]
        
        @property { UserCommon } [modifiedBy]
        
        @property { string } [id]
        
        @property { Array<string> } [failedRecords]
        
        @property { string } [filePath]
        
        @property { string } [trackingUrl]
        
         
    */
/**
        @typedef BulkAssetResponse
        
        
        @property { Array<Items> } [items]
        
        @property { PageData } [page]
        
         
    */
/**
        @typedef ProductBulkAssets
        
        
        @property { Object } user
        
        @property { number } [companyId]
        
        @property { string } url
        
         
    */
/**
        @typedef InventoryRequest
        
        
        @property { number } [pageSize]
        
        @property { string } [search]
        
        @property { number } [total]
        
        @property { string } [size]
        
        @property { number } [pageNo]
        
         
    */
/**
        @typedef GTIN
        
        
        @property { string } gtinValue
        
        @property { string } gtinType
        
        @property { boolean } [primary]
        
         
    */
/**
        @typedef SetSize
        
        
        @property { number } pieces
        
        @property { string } size
        
         
    */
/**
        @typedef SizeDistribution
        
        
        @property { Array<SetSize> } sizes
        
         
    */
/**
        @typedef InventorySet
        
        
        @property { SizeDistribution } sizeDistribution
        
        @property { number } [quantity]
        
         
    */
/**
        @typedef InvSize
        
        
        @property { string } [itemWeightUnitOfMeasure]
        
        @property { number } [itemLength]
        
        @property { number } priceEffective
        
        @property { number } [priceTransfer]
        
        @property { string } storeCode
        
        @property { number } quantity
        
        @property { Array<GTIN> } identifiers
        
        @property { boolean } [isSet]
        
        @property { number } price
        
        @property { InventorySet } [set]
        
        @property { string } size
        
        @property { string } [itemDimensionsUnitOfMeasure]
        
        @property { number } [itemHeight]
        
        @property { number } [itemWeight]
        
        @property { string } currency
        
        @property { number } [itemWidth]
        
         
    */
/**
        @typedef ItemQuery
        
        
        @property { number } [brandUid]
        
        @property { number } [uid]
        
        @property { string } [itemCode]
        
         
    */
/**
        @typedef InventoryRequest1
        
        
        @property { number } companyId
        
        @property { Array<InvSize> } sizes
        
        @property { ItemQuery } item
        
         
    */
/**
        @typedef BulkRequestGet
        
        
        @property { string } [startDate]
        
        @property { string } [endDate]
        
        @property { string } [customTemplateTag]
        
        @property { number } [pageSize]
        
        @property { string } [search]
        
        @property { number } [total]
        
        @property { string } [templateTag]
        
        @property { string } [stage]
        
        @property { number } [pageNo]
        
         
    */
/**
        @typedef CommonResponse
        
        
        @property { string } [success]
        
         
    */
/**
        @typedef Size1
        
        
        @property { string } [itemWeightUnitOfMeasure]
        
        @property { number } [itemLength]
        
        @property { number } priceEffective
        
        @property { number } [priceTransfer]
        
        @property { string } storeCode
        
        @property { number } quantity
        
        @property { Array<Object> } [identifiers]
        
        @property { boolean } [isSet]
        
        @property { number } price
        
        @property { InventorySet } [set]
        
        @property { string } [size]
        
        @property { string } sellerIdentifier
        
        @property { string } [itemDimensionsUnitOfMeasure]
        
        @property { number } [itemHeight]
        
        @property { number } [itemWeight]
        
        @property { string } currency
        
        @property { number } [itemWidth]
        
         
    */
/**
        @typedef InventoryBulkRequest
        
        
        @property { Object } [user]
        
        @property { number } companyId
        
        @property { Array<Size1> } sizes
        
        @property { string } batchId
        
         
    */
/**
        @typedef InventoryExportJob
        
        
        @property { string } taskId
        
        @property { string } [url]
        
        @property { string } [status]
        
        @property { string } [completedOn]
        
        @property { number } sellerId
        
        @property { string } [triggerOn]
        
        @property { Object } [requestParams]
        
         
    */
/**
        @typedef InventoryExportRequest
        
        
        @property { Array<number> } [brand]
        
        @property { Array<number> } [store]
        
        @property { string } [type]
        
         
    */
/**
        @typedef FilerList
        
        
        @property { string } [value]
        
        @property { string } [display]
        
         
    */
/**
        @typedef InventoryConfig
        
        
        @property { boolean } [multivalues]
        
        @property { Array<FilerList> } [data]
        
         
    */
/**
        @typedef CompanyAddress
        
        
        @property { string } [countryCode]
        
        @property { number } longitude
        
        @property { string } state
        
        @property { number } pincode
        
        @property { string } city
        
        @property { string } [landmark]
        
        @property { string } address1
        
        @property { string } [address2]
        
        @property { string } country
        
        @property { number } latitude
        
         
    */
/**
        @typedef Document
        
        
        @property { string } legalName
        
        @property { string } value
        
        @property { boolean } [verified]
        
        @property { string } type
        
        @property { string } [url]
        
         
    */
/**
        @typedef ReferralInfo
        
        
        @property { string } [referralCode]
        
         
    */
/**
        @typedef BusinessCountryInfo
        
        
        @property { string } [countryCode]
        
        @property { string } [country]
        
         
    */
/**
        @typedef CompanyStoreSerializerRequest
        
        
        @property { CompanyAddress } address
        
        @property { boolean } [franchiseEnabled]
        
        @property { Array<string> } [notificationEmails]
        
        @property { Object } [warnings]
        
        @property { Document } document
        
        @property { string } businessType
        
        @property { string } name
        
        @property { ReferralInfo } [referralInfo]
        
        @property { BusinessCountryInfo } businessCountryInfo
        
        @property { Array<number> } brands
        
        @property { string } [businessInfo]
        
        @property { number } [uid]
        
         
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
        @typedef GetAddressSerializer
        
        
        @property { string } [countryCode]
        
        @property { number } [longitude]
        
        @property { string } [state]
        
        @property { number } [pincode]
        
        @property { string } [city]
        
        @property { string } [landmark]
        
        @property { string } [address1]
        
        @property { string } [addressType]
        
        @property { string } [address2]
        
        @property { string } [country]
        
        @property { number } [latitude]
        
         
    */
/**
        @typedef BusinessCountryInfo1
        
        
        @property { string } [countryCode]
        
        @property { string } [country]
        
         
    */
/**
        @typedef ContactDetails
        
        
        @property { Array<PhoneNumber> } [phone]
        
        @property { Array<string> } [emails]
        
         
    */
/**
        @typedef GetCompanyProfileSerializerResponse
        
        
        @property { UserSerializer } [modifiedBy]
        
        @property { Object } [warnings]
        
        @property { string } businessType
        
        @property { BusinessDetails } [businessDetails]
        
        @property { number } uid
        
        @property { string } [verifiedOn]
        
        @property { string } companyType
        
        @property { string } [businessInfo]
        
        @property { string } [createdOn]
        
        @property { UserSerializer } [verifiedBy]
        
        @property { Array<GetAddressSerializer> } [addresses]
        
        @property { string } [stage]
        
        @property { UserSerializer } [createdBy]
        
        @property { BusinessCountryInfo1 } [businessCountryInfo]
        
        @property { ContactDetails } [contactDetails]
        
        @property { boolean } [franchiseEnabled]
        
        @property { Array<string> } [notificationEmails]
        
        @property { Array<Document> } [documents]
        
        @property { string } [modifiedOn]
        
        @property { string } [name]
        
         
    */
/**
        @typedef DocumentsObj
        
        
        @property { number } [verified]
        
        @property { number } [pending]
        
         
    */
/**
        @typedef MetricsSerializer
        
        
        @property { DocumentsObj } [product]
        
        @property { DocumentsObj } [store]
        
        @property { DocumentsObj } [storeDocuments]
        
        @property { DocumentsObj } [companyDocuments]
        
        @property { number } [uid]
        
        @property { DocumentsObj } [brand]
        
        @property { string } [stage]
        
         
    */
/**
        @typedef BrandBannerSerializer
        
        
        @property { string } [landscape]
        
        @property { string } [portrait]
        
         
    */
/**
        @typedef CreateUpdateBrandRequestSerializer
        
        
        @property { string } [description]
        
        @property { number } [companyId]
        
        @property { Array<string> } [synonyms]
        
        @property { Object } [customJson]
        
        @property { Object } [localeLanguage]
        
        @property { string } [brandTier]
        
        @property { string } logo
        
        @property { string } name
        
        @property { BrandBannerSerializer } [banner]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef UserSerializer1
        
        
        @property { string } [username]
        
        @property { string } [userId]
        
        @property { string } [contact]
        
         
    */
/**
        @typedef GetBrandResponseSerializer
        
        
        @property { string } [description]
        
        @property { UserSerializer1 } [createdBy]
        
        @property { UserSerializer1 } [modifiedBy]
        
        @property { Array<string> } [synonyms]
        
        @property { string } [rejectReason]
        
        @property { string } [slugKey]
        
        @property { Object } [customJson]
        
        @property { Object } [warnings]
        
        @property { Object } [localeLanguage]
        
        @property { BrandBannerSerializer } [banner]
        
        @property { string } [logo]
        
        @property { string } name
        
        @property { string } [createdOn]
        
        @property { UserSerializer1 } [verifiedBy]
        
        @property { string } [modifiedOn]
        
        @property { number } [uid]
        
        @property { string } [verifiedOn]
        
        @property { string } [stage]
        
         
    */
/**
        @typedef CompanyBrandListSerializer
        
        
        @property { Array<Object> } [items]
        
        @property { Object } [page]
        
         
    */
/**
        @typedef CompanyBrandPostRequestSerializer
        
        
        @property { number } company
        
        @property { number } [uid]
        
        @property { Array<number> } brands
        
         
    */
/**
        @typedef LocationListSerializer
        
        
        @property { Array<Object> } [items]
        
        @property { Object } [page]
        
         
    */
/**
        @typedef GetAddressSerializer1
        
        
        @property { string } [countryCode]
        
        @property { number } [longitude]
        
        @property { string } [state]
        
        @property { number } [pincode]
        
        @property { string } [city]
        
        @property { string } [landmark]
        
        @property { string } [address1]
        
        @property { string } [addressType]
        
        @property { string } [address2]
        
        @property { string } [country]
        
        @property { number } [latitude]
        
         
    */
/**
        @typedef LocationManagerSerializer
        
        
        @property { PhoneNumber } mobileNo
        
        @property { string } [name]
        
        @property { string } [email]
        
         
    */
/**
        @typedef LocationTimingSerializer
        
        
        @property { number } [hour]
        
        @property { number } [minute]
        
         
    */
/**
        @typedef LocationDayWiseSerializer
        
        
        @property { LocationTimingSerializer } [opening]
        
        @property { string } weekday
        
        @property { LocationTimingSerializer } [closing]
        
        @property { boolean } open
        
         
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
        
        
        @property { GetAddressSerializer1 } address
        
        @property { LocationManagerSerializer } [manager]
        
        @property { Array<string> } [notificationEmails]
        
        @property { Object } [customJson]
        
        @property { Object } [warnings]
        
        @property { string } code
        
        @property { number } company
        
        @property { Array<Document> } [documents]
        
        @property { Array<PhoneNumber> } [contactNumbers]
        
        @property { Array<LocationDayWiseSerializer> } [timing]
        
        @property { string } displayName
        
        @property { string } [stage]
        
        @property { string } name
        
        @property { ProductReturnConfigSerializer } [productReturnConfig]
        
        @property { InvoiceDetailsSerializer } [gstCredentials]
        
        @property { number } [uid]
        
        @property { string } [storeType]
        
         
    */
/**
        @typedef GetCompanySerializer
        
        
        @property { UserSerializer } [createdBy]
        
        @property { UserSerializer } [modifiedBy]
        
        @property { string } [rejectReason]
        
        @property { string } [companyType]
        
        @property { string } [businessType]
        
        @property { string } [name]
        
        @property { string } [createdOn]
        
        @property { UserSerializer } [verifiedBy]
        
        @property { string } [modifiedOn]
        
        @property { number } [uid]
        
        @property { string } [verifiedOn]
        
        @property { Array<GetAddressSerializer> } [addresses]
        
        @property { string } [stage]
        
         
    */
/**
        @typedef LocationIntegrationType
        
        
        @property { string } [inventory]
        
        @property { string } [order]
        
         
    */
/**
        @typedef GetLocationSerializer
        
        
        @property { UserSerializer1 } [modifiedBy]
        
        @property { Object } [warnings]
        
        @property { InvoiceDetailsSerializer } [gstCredentials]
        
        @property { number } [uid]
        
        @property { string } [verifiedOn]
        
        @property { GetAddressSerializer } address
        
        @property { GetCompanySerializer } [company]
        
        @property { Array<LocationDayWiseSerializer> } [timing]
        
        @property { ProductReturnConfigSerializer } [productReturnConfig]
        
        @property { string } [createdOn]
        
        @property { UserSerializer1 } [verifiedBy]
        
        @property { LocationIntegrationType } [integrationType]
        
        @property { string } [stage]
        
        @property { string } [storeType]
        
        @property { UserSerializer1 } [createdBy]
        
        @property { string } phoneNumber
        
        @property { string } displayName
        
        @property { LocationManagerSerializer } [manager]
        
        @property { Array<string> } [notificationEmails]
        
        @property { Object } [customJson]
        
        @property { string } code
        
        @property { Array<Document> } [documents]
        
        @property { Array<PhoneNumber> } [contactNumbers]
        
        @property { string } [modifiedOn]
        
        @property { string } name
        
         
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
        @typedef DbRecord
        
        
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
        
        
        @property { Array<DbRecord> } items
        
        @property { Page } page
        
         
    */
/**
        @typedef RedirectDevice
        
        
        @property { string } [link]
        
        @property { string } [type]
        
         
    */
/**
        @typedef WebRedirect
        
        
        @property { string } [link]
        
        @property { string } [type]
        
         
    */
/**
        @typedef Redirects
        
        
        @property { RedirectDevice } [ios]
        
        @property { RedirectDevice } [android]
        
        @property { WebRedirect } [web]
        
        @property { boolean } [forceWeb]
        
         
    */
/**
        @typedef Attribution
        
        
        @property { string } [campaignCookieExpiry]
        
         
    */
/**
        @typedef SocialMediaTags
        
        
        @property { string } [title]
        
        @property { string } [description]
        
        @property { string } [image]
        
         
    */
/**
        @typedef ShortLinkReq
        
        
        @property { string } title
        
        @property { string } url
        
        @property { string } [hash]
        
        @property { boolean } [active]
        
        @property { string } [expireAt]
        
        @property { boolean } [enableTracking]
        
        @property { boolean } [personalized]
        
        @property { Campaign } [campaign]
        
        @property { Redirects } [redirects]
        
        @property { Attribution } [attribution]
        
        @property { SocialMediaTags } [socialMediaTags]
        
        @property { number } [count]
        
         
    */
/**
        @typedef UrlInfo
        
        
        @property { string } [original]
        
        @property { string } [short]
        
        @property { string } [hash]
        
         
    */
/**
        @typedef ShortLinkRes
        
        
        @property { string } [title]
        
        @property { UrlInfo } [url]
        
        @property { string } [createdBy]
        
        @property { boolean } [appRedirect]
        
        @property { string } [fallback]
        
        @property { boolean } [active]
        
        @property { string } [id]
        
        @property { boolean } [enableTracking]
        
        @property { string } [expireAt]
        
        @property { string } [application]
        
        @property { string } [userId]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { boolean } [personalized]
        
        @property { Campaign } [campaign]
        
        @property { Redirects } [redirects]
        
        @property { Attribution } [attribution]
        
        @property { SocialMediaTags } [socialMediaTags]
        
        @property { number } [count]
        
         
    */
/**
        @typedef ShortLinkList
        
        
        @property { Array<ShortLinkRes> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef ApplicationInventory
        
        
        @property { AppInventoryConfig } [inventory]
        
        @property { AuthenticationConfig } [authentication]
        
        @property { ArticleAssignmentConfig } [articleAssignment]
        
        @property { RewardPointsConfig } [rewardPoints]
        
        @property { AppCartConfig } [cart]
        
        @property { AppPaymentConfig } [payment]
        
        @property { AppOrderConfig } [order]
        
        @property { AppLogisticsConfig } [logistics]
        
        @property { string } [business]
        
        @property { boolean } [commsEnabled]
        
        @property { Array<string> } [platforms]
        
        @property { string } [id]
        
        @property { LoyaltyPoints } [loyaltyPoints]
        
        @property { string } [app]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [modifiedBy]
        
         
    */
/**
        @typedef AppInventoryConfig
        
        
        @property { InventoryBrand } [brand]
        
        @property { InventoryStore } [store]
        
        @property { InventoryCategory } [category]
        
        @property { InventoryPrice } [price]
        
        @property { InventoryDiscount } [discount]
        
        @property { boolean } [outOfStock]
        
        @property { boolean } [franchiseEnabled]
        
        @property { Array<any> } [excludeCategory]
        
        @property { Array<string> } [image]
        
        @property { Array<any> } [companyStore]
        
         
    */
/**
        @typedef InventoryBrand
        
        
        @property { string } [criteria]
        
        @property { Array<any> } [brands]
        
         
    */
/**
        @typedef InventoryStore
        
        
        @property { string } [criteria]
        
        @property { Array<any> } [stores]
        
        @property { AppStoreRules } [rules]
        
         
    */
/**
        @typedef AppStoreRules
        
        
        @property { Array<number> } [companies]
        
        @property { Array<any> } [brands]
        
         
    */
/**
        @typedef InventoryCategory
        
        
        @property { string } [criteria]
        
        @property { Array<any> } [categories]
        
         
    */
/**
        @typedef InventoryPrice
        
        
        @property { number } [min]
        
        @property { number } [max]
        
         
    */
/**
        @typedef InventoryDiscount
        
        
        @property { number } [min]
        
        @property { number } [max]
        
         
    */
/**
        @typedef AuthenticationConfig
        
        
        @property { boolean } [required]
        
        @property { string } [provider]
        
         
    */
/**
        @typedef ArticleAssignmentConfig
        
        
        @property { ArticleAssignmentRules } [rules]
        
        @property { boolean } [postOrderReassignment]
        
        @property { Array<any> } [enforcedStores]
        
         
    */
/**
        @typedef ArticleAssignmentRules
        
        
        @property { StorePriority } [storePriority]
        
         
    */
/**
        @typedef StorePriority
        
        
        @property { boolean } [enabled]
        
        @property { Array<any> } [storetypeOrder]
        
         
    */
/**
        @typedef RewardPointsConfig
        
        
        @property { Credit } [credit]
        
        @property { Debit } [debit]
        
         
    */
/**
        @typedef Credit
        
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef Debit
        
        
        @property { boolean } [enabled]
        
        @property { boolean } [autoApply]
        
        @property { string } [strategyChannel]
        
         
    */
/**
        @typedef AppCartConfig
        
        
        @property { DeliveryCharges } [deliveryCharges]
        
        @property { boolean } [enabled]
        
        @property { number } [maxCartItems]
        
        @property { number } [minCartValue]
        
        @property { boolean } [bulkCoupons]
        
         
    */
/**
        @typedef DeliveryCharges
        
        
        @property { boolean } [enabled]
        
        @property { Charges } [charges]
        
         
    */
/**
        @typedef Charges
        
        
        @property { number } [threshold]
        
        @property { number } [charges]
        
         
    */
/**
        @typedef AppPaymentConfig
        
        
        @property { CallbackUrl } [callbackUrl]
        
        @property { Methods } [methods]
        
        @property { PaymentSelectionLock } [paymentSelectionLock]
        
        @property { string } [modeOfPayment]
        
        @property { string } [source]
        
        @property { boolean } [enabled]
        
        @property { number } [codAmountLimit]
        
        @property { number } [codCharges]
        
         
    */
/**
        @typedef CallbackUrl
        
        
        @property { string } [app]
        
        @property { string } [web]
        
         
    */
/**
        @typedef Methods
        
        
        @property { PaymentModeConfig } [pl]
        
        @property { PaymentModeConfig } [card]
        
        @property { PaymentModeConfig } [nb]
        
        @property { PaymentModeConfig } [wl]
        
        @property { PaymentModeConfig } [ps]
        
        @property { PaymentModeConfig } [upi]
        
        @property { PaymentModeConfig } [qr]
        
        @property { PaymentModeConfig } [cod]
        
        @property { PaymentModeConfig } [pp]
        
        @property { PaymentModeConfig } [jp]
        
        @property { PaymentModeConfig } [pac]
        
        @property { PaymentModeConfig } [fc]
        
        @property { PaymentModeConfig } [jiopp]
        
        @property { PaymentModeConfig } [stripepg]
        
        @property { PaymentModeConfig } [juspaypg]
        
        @property { PaymentModeConfig } [payubizpg]
        
        @property { PaymentModeConfig } [payumoneypg]
        
        @property { PaymentModeConfig } [rupifipg]
        
        @property { PaymentModeConfig } [simpl]
        
         
    */
/**
        @typedef PaymentModeConfig
        
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef PaymentSelectionLock
        
        
        @property { boolean } [enabled]
        
        @property { string } [defaultOptions]
        
        @property { string } [paymentIdentifier]
        
         
    */
/**
        @typedef AppOrderConfig
        
        
        @property { boolean } [enabled]
        
        @property { boolean } [forceReassignment]
        
         
    */
/**
        @typedef AppLogisticsConfig
        
        
        @property { boolean } [logisticsBySeller]
        
        @property { boolean } [serviceabilityCheck]
        
        @property { boolean } [sameDayDelivery]
        
        @property { boolean } [dpAssignment]
        
         
    */
/**
        @typedef LoyaltyPoints
        
        
        @property { boolean } [enabled]
        
        @property { boolean } [autoApply]
        
         
    */
/**
        @typedef AppInventoryPartialUpdate
        
        
        @property { RewardPointsConfig } [rewardPoints]
        
        @property { AppCartConfig } [cart]
        
        @property { AppPaymentConfig } [payment]
        
        @property { LoyaltyPoints } [loyaltyPoints]
        
        @property { boolean } [commsEnabled]
        
         
    */
/**
        @typedef BrandCompanyInfo
        
        
        @property { string } [companyName]
        
        @property { number } [companyId]
        
         
    */
/**
        @typedef CompanyByBrandsRequest
        
        
        @property { number } brands
        
        @property { string } [searchText]
        
         
    */
/**
        @typedef CompanyByBrandsResponse
        
        
        @property { Array<BrandCompanyInfo> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef StoreByBrandsRequest
        
        
        @property { number } [companyId]
        
        @property { number } brands
        
        @property { string } [searchText]
        
         
    */
/**
        @typedef StoreByBrandsResponse
        
        
        @property { Array<BrandStoreInfo> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef BrandStoreInfo
        
        
        @property { string } [storeName]
        
        @property { number } [storeId]
        
        @property { string } [storeType]
        
        @property { string } [storeCode]
        
        @property { OptedStoreAddress } [storeAddress]
        
        @property { OptedCompany } [company]
        
         
    */
/**
        @typedef CompanyBrandInfo
        
        
        @property { string } [name]
        
        @property { number } [value]
        
        @property { string } [brandLogoUrl]
        
        @property { string } [brandBannerUrl]
        
        @property { string } [brandBannerPortraitUrl]
        
         
    */
/**
        @typedef BrandsByCompanyResponse
        
        
        @property { CompanyBrandInfo } [brands]
        
         
    */
/**
        @typedef CreateApplicationRequest
        
        
        @property { App } [app]
        
        @property { AppInventory } [configuration]
        
        @property { AppDomain } [domain]
        
         
    */
/**
        @typedef CreateAppResponse
        
        
        @property { Application } [app]
        
        @property { ApplicationInventory } [configuration]
        
         
    */
/**
        @typedef ApplicationsResponse
        
        
        @property { Array<Application> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef MobileAppConfiguration
        
        
        @property { boolean } [isActive]
        
        @property { string } [id]
        
        @property { string } [appName]
        
        @property { LandingImage } [landingImage]
        
        @property { SplashImage } [splashImage]
        
        @property { string } [application]
        
        @property { string } [platformType]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
        @property { string } [packageName]
        
         
    */
/**
        @typedef LandingImage
        
        
        @property { string } [aspectRatio]
        
        @property { string } [secureUrl]
        
         
    */
/**
        @typedef SplashImage
        
        
        @property { string } [aspectRatio]
        
        @property { string } [secureUrl]
        
         
    */
/**
        @typedef MobileAppConfigRequest
        
        
        @property { string } [appName]
        
        @property { LandingImage } [landingImage]
        
        @property { SplashImage } [splashImage]
        
        @property { boolean } [isActive]
        
         
    */
/**
        @typedef BuildVersionHistory
        
        
        @property { BuildVersion } [versions]
        
        @property { string } [latestAvailableVersionName]
        
         
    */
/**
        @typedef BuildVersion
        
        
        @property { string } [id]
        
        @property { string } [application]
        
        @property { string } [platformType]
        
        @property { string } [buildStatus]
        
        @property { string } [versionName]
        
        @property { number } [versionCode]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */
/**
        @typedef AppSupportedCurrency
        
        
        @property { string } [id]
        
        @property { Array<string> } [supportedCurrency]
        
        @property { string } [application]
        
        @property { DefaultCurrency } [defaultCurrency]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
         
    */
/**
        @typedef DefaultCurrency
        
        
        @property { string } [ref]
        
        @property { string } [code]
        
         
    */
/**
        @typedef CurrencyConfig
        
        
        @property { string } [id]
        
        @property { boolean } [isActive]
        
        @property { string } [name]
        
        @property { string } [code]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [decimalDigits]
        
        @property { string } [symbol]
        
         
    */
/**
        @typedef DomainAdd
        
        
        @property { string } [name]
        
         
    */
/**
        @typedef DomainAddRequest
        
        
        @property { DomainAdd } [domain]
        
         
    */
/**
        @typedef DomainsResponse
        
        
        @property { Array<Domain> } [domains]
        
         
    */
/**
        @typedef UpdateDomain
        
        
        @property { string } [id]
        
         
    */
/**
        @typedef UpdateDomainTypeRequest
        
        
        @property { UpdateDomain } [domain]
        
        @property { string } [action]
        
         
    */
/**
        @typedef DomainStatusRequest
        
        
        @property { string } [domainUrl]
        
         
    */
/**
        @typedef DomainStatus
        
        
        @property { string } [display]
        
        @property { boolean } [status]
        
         
    */
/**
        @typedef DomainStatusResponse
        
        
        @property { boolean } [connected]
        
        @property { Array<DomainStatus> } [status]
        
         
    */
/**
        @typedef DomainSuggestionsRequest
        
        
        @property { string } [domainUrl]
        
        @property { boolean } [custom]
        
         
    */
/**
        @typedef DomainSuggestion
        
        
        @property { string } name
        
        @property { boolean } [unsupported]
        
        @property { boolean } isAvailable
        
        @property { number } [price]
        
        @property { string } [currency]
        
         
    */
/**
        @typedef DomainSuggestionsResponse
        
        
        @property { Array<DomainSuggestion> } [domains]
        
         
    */
/**
        @typedef GetIntegrationsOptInsResponse
        
        
        @property { IntegrationOptIn } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef IntegrationOptIn
        
        
        @property { Validators } [validators]
        
        @property { string } [description]
        
        @property { string } [descriptionHtml]
        
        @property { string } [constants]
        
        @property { Array<Object> } [companies]
        
        @property { Array<string> } [support]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { IntegrationMeta } [meta]
        
        @property { string } [icon]
        
        @property { string } [owner]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [token]
        
        @property { string } [secret]
        
        @property { number } [v]
        
         
    */
/**
        @typedef Validators
        
        
        @property { CompanyValidator } [company]
        
        @property { StoreValidator } [store]
        
        @property { InventoryValidator } [inventory]
        
        @property { OrderValidator } [order]
        
         
    */
/**
        @typedef CompanyValidator
        
        
        @property { JsonSchema } [jsonSchema]
        
        @property { string } [browserScript]
        
         
    */
/**
        @typedef JsonSchema
        
        
        @property { string } [display]
        
        @property { string } [key]
        
        @property { string } [type]
        
        @property { string } [tooltip]
        
         
    */
/**
        @typedef StoreValidator
        
        
        @property { Array<JsonSchema> } [jsonSchema]
        
        @property { string } [browserScript]
        
         
    */
/**
        @typedef InventoryValidator
        
        
        @property { Array<JsonSchema> } [jsonSchema]
        
        @property { string } [browserScript]
        
         
    */
/**
        @typedef OrderValidator
        
        
        @property { Array<JsonSchema> } [jsonSchema]
        
        @property { string } [browserScript]
        
         
    */
/**
        @typedef IntegrationMeta
        
        
        @property { boolean } [isPublic]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { string } [value]
        
         
    */
/**
        @typedef Integration
        
        
        @property { Validators } [validators]
        
        @property { string } [description]
        
        @property { string } [descriptionHtml]
        
        @property { Object } [constants]
        
        @property { Array<Object> } [companies]
        
        @property { Array<string> } [support]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { IntegrationMeta } [meta]
        
        @property { string } [icon]
        
        @property { string } [owner]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [token]
        
        @property { string } [secret]
        
        @property { number } [v]
        
         
    */
/**
        @typedef IntegrationConfigResponse
        
        
        @property { IntegrationLevel } [items]
        
         
    */
/**
        @typedef IntegrationLevel
        
        
        @property { boolean } [opted]
        
        @property { Array<Object> } [permissions]
        
        @property { Array<Object> } [lastPatch]
        
        @property { string } [id]
        
        @property { string } [integration]
        
        @property { string } [level]
        
        @property { number } [uid]
        
        @property { Array<any> } [meta]
        
        @property { string } [token]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
        @property { Object } [data]
        
         
    */
/**
        @typedef OptedStoreIntegration
        
        
        @property { boolean } [otherOpted]
        
        @property { IntegrationOptIn } [otherIntegration]
        
        @property { OtherEntity } [otherEntity]
        
         
    */
/**
        @typedef OtherEntity
        
        
        @property { boolean } [opted]
        
        @property { Array<string> } [permissions]
        
        @property { LastPatch } [lastPatch]
        
        @property { string } [id]
        
        @property { string } [integration]
        
        @property { string } [level]
        
        @property { number } [uid]
        
        @property { OtherEntityData } [data]
        
        @property { Array<Object> } [meta]
        
        @property { string } [token]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */
/**
        @typedef LastPatch
        
        
        @property { string } [op]
        
        @property { string } [path]
        
        @property { string } [value]
        
         
    */
/**
        @typedef OtherEntityData
        
        
        @property { string } [articleIdentifier]
        
         
    */
/**
        @typedef App
        
        
        @property { string } [companyId]
        
        @property { string } [channelType]
        
        @property { ApplicationAuth } [auth]
        
        @property { string } [name]
        
        @property { string } [desc]
        
         
    */
/**
        @typedef AppInventory
        
        
        @property { InventoryBrandRule } [brand]
        
        @property { InventoryStoreRule } [store]
        
        @property { Array<string> } [image]
        
        @property { boolean } [franchiseEnabled]
        
        @property { boolean } [outOfStock]
        
        @property { InventoryPaymentConfig } [payment]
        
        @property { InventoryArticleAssignment } [articleAssignment]
        
         
    */
/**
        @typedef AppDomain
        
        
        @property { string } [name]
        
         
    */
/**
        @typedef CompaniesResponse
        
        
        @property { AppInventoryCompanies } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef AppInventoryCompanies
        
        
        @property { number } [uid]
        
        @property { string } [name]
        
        @property { string } [companyType]
        
         
    */
/**
        @typedef StoresResponse
        
        
        @property { AppInventoryStores } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef AppInventoryStores
        
        
        @property { string } [id]
        
        @property { string } [modifiedOn]
        
        @property { number } [uid]
        
        @property { string } [name]
        
        @property { string } [displayName]
        
        @property { string } [storeType]
        
        @property { string } [storeCode]
        
        @property { number } [companyId]
        
         
    */
/**
        @typedef FilterOrderingStoreRequest
        
        
        @property { boolean } [allStores]
        
        @property { Array<number> } [deployedStores]
        
        @property { string } [q]
        
        @property { number } [pageNo]
        
        @property { number } [pageSize]
        
         
    */
/**
        @typedef DeploymentMeta
        
        
        @property { Array<number> } [deployedStores]
        
        @property { boolean } [allStores]
        
        @property { boolean } [enabled]
        
        @property { string } [type]
        
        @property { string } [id]
        
        @property { string } [app]
        
        @property { number } [v]
        
         
    */
/**
        @typedef OrderingStoreConfig
        
        
        @property { DeploymentMeta } [deploymentMeta]
        
         
    */
/**
        @typedef OtherSellerCompany
        
        
        @property { number } [uid]
        
        @property { string } [name]
        
         
    */
/**
        @typedef OtherSellerApplication
        
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } [id]
        
        @property { string } [domain]
        
        @property { OtherSellerCompany } [company]
        
        @property { string } [optType]
        
         
    */
/**
        @typedef OtherSellerApplications
        
        
        @property { Array<OtherSellerApplication> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef OptedApplicationResponse
        
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } [id]
        
        @property { string } [domain]
        
        @property { OptedCompany } [company]
        
        @property { OptedInventory } [optedInventory]
        
        @property { OptOutInventory } [optOutInventory]
        
         
    */
/**
        @typedef OptedCompany
        
        
        @property { number } [uid]
        
        @property { string } [name]
        
         
    */
/**
        @typedef OptedInventory
        
        
        @property { OptType } [optType]
        
        @property { any } [items]
        
         
    */
/**
        @typedef OptType
        
        
        @property { string } [key]
        
        @property { string } [display]
        
         
    */
/**
        @typedef OptedStore
        
        
        @property { string } [name]
        
        @property { string } [storeCode]
        
        @property { string } [id]
        
        @property { string } [modifiedOn]
        
        @property { number } [uid]
        
        @property { OptedStoreAddress } [address]
        
        @property { string } [displayName]
        
        @property { string } [storeType]
        
        @property { number } [companyId]
        
         
    */
/**
        @typedef OptOutInventory
        
        
        @property { Array<number> } store
        
        @property { Array<number> } company
        
         
    */
/**
        @typedef ProductDetailFeature
        
        
        @property { Array<string> } [similar]
        
        @property { boolean } [sellerSelection]
        
        @property { boolean } [updateProductMeta]
        
        @property { boolean } [requestProduct]
        
         
    */
/**
        @typedef LaunchPage
        
        
        @property { string } [pageType]
        
        @property { string } [params]
        
        @property { string } [query]
        
         
    */
/**
        @typedef LandingPageFeature
        
        
        @property { LaunchPage } [launchPage]
        
        @property { boolean } [continueAsGuest]
        
        @property { string } [loginBtnText]
        
        @property { boolean } [showDomainTextbox]
        
        @property { boolean } [showRegisterBtn]
        
         
    */
/**
        @typedef RegistrationPageFeature
        
        
        @property { boolean } [askStoreAddress]
        
         
    */
/**
        @typedef AppFeature
        
        
        @property { ProductDetailFeature } [productDetail]
        
        @property { LandingPageFeature } [landingPage]
        
        @property { RegistrationPageFeature } [registrationPage]
        
        @property { HomePageFeature } [homePage]
        
        @property { CommonFeature } [common]
        
        @property { CartFeature } [cart]
        
        @property { QrFeature } [qr]
        
        @property { PcrFeature } [pcr]
        
        @property { OrderFeature } [order]
        
        @property { string } [id]
        
        @property { string } [app]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */
/**
        @typedef HomePageFeature
        
        
        @property { boolean } [orderProcessing]
        
         
    */
/**
        @typedef CommonFeature
        
        
        @property { CommunicationOptinDialogFeature } [communicationOptinDialog]
        
        @property { DeploymentStoreSelectionFeature } [deploymentStoreSelection]
        
        @property { ListingPriceFeature } [listingPrice]
        
        @property { ListingPageFeature } [listingPage]
        
        @property { CurrencyFeature } [currency]
        
        @property { RevenueEngineFeature } [revenueEngine]
        
        @property { FeedbackFeature } [feedback]
        
        @property { CompareProductsFeature } [compareProducts]
        
         
    */
/**
        @typedef CommunicationOptinDialogFeature
        
        
        @property { boolean } [visibility]
        
         
    */
/**
        @typedef DeploymentStoreSelectionFeature
        
        
        @property { boolean } [enabled]
        
        @property { string } [type]
        
         
    */
/**
        @typedef ListingPriceFeature
        
        
        @property { string } [value]
        
        @property { string } [sort]
        
         
    */
/**
        @typedef ListingPageFeature
        
        
        @property { string } [sortOn]
        
         
    */
/**
        @typedef CurrencyFeature
        
        
        @property { Array<string> } [value]
        
        @property { string } [type]
        
        @property { string } [defaultCurrency]
        
         
    */
/**
        @typedef RevenueEngineFeature
        
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef FeedbackFeature
        
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef CompareProductsFeature
        
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef CartFeature
        
        
        @property { boolean } [gstInput]
        
        @property { boolean } [staffSelection]
        
        @property { boolean } [placingForCustomer]
        
        @property { boolean } [googleMap]
        
         
    */
/**
        @typedef QrFeature
        
        
        @property { boolean } [application]
        
        @property { boolean } [products]
        
        @property { boolean } [collections]
        
         
    */
/**
        @typedef PcrFeature
        
        
        @property { boolean } [staffSelection]
        
         
    */
/**
        @typedef OrderFeature
        
        
        @property { boolean } [buyAgain]
        
         
    */
/**
        @typedef AppFeatureRequest
        
        
        @property { AppFeature } [feature]
        
         
    */
/**
        @typedef AppFeatureResponse
        
        
        @property { AppFeature } [feature]
        
         
    */
/**
        @typedef Currency
        
        
        @property { string } [id]
        
        @property { boolean } [isActive]
        
        @property { string } [name]
        
        @property { string } [code]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [decimalDigits]
        
        @property { string } [symbol]
        
         
    */
/**
        @typedef Domain
        
        
        @property { boolean } [verified]
        
        @property { boolean } [isPrimary]
        
        @property { boolean } [isDefault]
        
        @property { boolean } [isShortlink]
        
        @property { string } [id]
        
        @property { string } [name]
        
         
    */
/**
        @typedef ApplicationWebsite
        
        
        @property { boolean } [enabled]
        
        @property { string } [basepath]
        
         
    */
/**
        @typedef ApplicationCors
        
        
        @property { Array<string> } [domains]
        
         
    */
/**
        @typedef ApplicationAuth
        
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef ApplicationRedirections
        
        
        @property { string } [from]
        
        @property { string } [redirectTo]
        
        @property { string } [type]
        
         
    */
/**
        @typedef ApplicationMeta
        
        
        @property { string } [name]
        
        @property { string } [value]
        
         
    */
/**
        @typedef SecureUrl
        
        
        @property { string } [secureUrl]
        
         
    */
/**
        @typedef Application
        
        
        @property { ApplicationWebsite } [website]
        
        @property { ApplicationCors } [cors]
        
        @property { ApplicationAuth } [auth]
        
        @property { string } [description]
        
        @property { string } [channelType]
        
        @property { number } [cacheTtl]
        
        @property { boolean } [isInternal]
        
        @property { boolean } [isActive]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { string } [owner]
        
        @property { number } [companyId]
        
        @property { string } [token]
        
        @property { Array<ApplicationRedirections> } [redirections]
        
        @property { Array<ApplicationMeta> } [meta]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
        @property { SecureUrl } [banner]
        
        @property { SecureUrl } [logo]
        
        @property { SecureUrl } [favicon]
        
        @property { Array<Domain> } [domains]
        
        @property { string } [appType]
        
        @property { SecureUrl } [mobileLogo]
        
        @property { Domain } [domain]
        
         
    */
/**
        @typedef NotFound
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef UnhandledError
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef InvalidPayloadRequest
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef SuccessMessageResponse
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef InventoryBrandRule
        
        
        @property { string } [criteria]
        
        @property { Array<number> } [brands]
        
         
    */
/**
        @typedef StoreCriteriaRule
        
        
        @property { Array<number> } [companies]
        
        @property { Array<number> } [brands]
        
         
    */
/**
        @typedef InventoryStoreRule
        
        
        @property { string } [criteria]
        
        @property { Array<StoreCriteriaRule> } [rules]
        
        @property { Array<number> } [stores]
        
         
    */
/**
        @typedef InventoryPaymentConfig
        
        
        @property { string } [modeOfPayment]
        
        @property { string } [source]
        
         
    */
/**
        @typedef StorePriorityRule
        
        
        @property { boolean } [enabled]
        
        @property { Array<string> } [storetypeOrder]
        
         
    */
/**
        @typedef ArticleAssignmentRule
        
        
        @property { StorePriorityRule } [storePriority]
        
         
    */
/**
        @typedef InventoryArticleAssignment
        
        
        @property { boolean } [postOrderReassignment]
        
        @property { Array<number> } [enforcedStores]
        
        @property { ArticleAssignmentRule } [rules]
        
         
    */
/**
        @typedef CompanyAboutAddress
        
        
        @property { number } [pincode]
        
        @property { string } [address1]
        
        @property { string } [address2]
        
        @property { string } [city]
        
        @property { string } [state]
        
        @property { string } [country]
        
        @property { string } [addressType]
        
         
    */
/**
        @typedef UserEmail
        
        
        @property { boolean } [active]
        
        @property { boolean } [primary]
        
        @property { boolean } [verified]
        
        @property { string } [email]
        
         
    */
/**
        @typedef UserPhoneNumber
        
        
        @property { boolean } [active]
        
        @property { boolean } [primary]
        
        @property { boolean } [verified]
        
        @property { number } [countryCode]
        
        @property { string } [phone]
        
         
    */
/**
        @typedef Page
        
        
        @property { string } type
        
        @property { number } [size]
        
        @property { number } [current]
        
        @property { boolean } [hasNext]
        
        @property { number } [itemTotal]
        
        @property { string } [nextId]
        
        @property { boolean } [hasPrevious]
        
         
    */
/**
        @typedef ApplicationInformation
        
        
        @property { InformationAddress } [address]
        
        @property { InformationSupport } [support]
        
        @property { SocialLinks } [socialLinks]
        
        @property { Links } [links]
        
        @property { string } [copyrightText]
        
        @property { string } [id]
        
        @property { BusinessHighlights } [businessHighlights]
        
        @property { string } [application]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */
/**
        @typedef InformationAddress
        
        
        @property { string } [loc]
        
        @property { Array<string> } [addressLine]
        
        @property { InformationPhone } [phone]
        
        @property { string } [city]
        
        @property { string } [country]
        
        @property { number } [pincode]
        
         
    */
/**
        @typedef InformationPhone
        
        
        @property { string } [code]
        
        @property { string } [number]
        
         
    */
/**
        @typedef InformationSupport
        
        
        @property { Array<string> } [phone]
        
        @property { Array<string> } [email]
        
        @property { string } [timing]
        
         
    */
/**
        @typedef SocialLinks
        
        
        @property { Facebook } [facebook]
        
        @property { Instagram } [instagram]
        
        @property { Twitter } [twitter]
        
        @property { Pinterest } [pinterest]
        
        @property { GooglePlus } [googlePlus]
        
        @property { Youtube } [youtube]
        
        @property { LinkedIn } [linkedIn]
        
        @property { Vimeo } [vimeo]
        
        @property { BlogLink } [blogLink]
        
         
    */
/**
        @typedef Instagram
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */
/**
        @typedef Twitter
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */
/**
        @typedef Pinterest
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */
/**
        @typedef GooglePlus
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */
/**
        @typedef Youtube
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */
/**
        @typedef LinkedIn
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */
/**
        @typedef Vimeo
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */
/**
        @typedef BlogLink
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */
/**
        @typedef Links
        
        
        @property { string } [title]
        
        @property { string } [link]
        
         
    */
/**
        @typedef BusinessHighlights
        
        
        @property { string } [id]
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [subTitle]
        
         
    */
/**
        @typedef ApplicationDetail
        
        
        @property { string } name
        
        @property { string } description
        
        @property { SecureUrl } logo
        
        @property { SecureUrl } mobileLogo
        
        @property { SecureUrl } favicon
        
        @property { SecureUrl } banner
        
        @property { Domain } [domain]
        
        @property { Array<Domain> } [domains]
        
        @property { string } [id]
        
         
    */
/**
        @typedef CurrenciesResponse
        
        
        @property { Array<Currency> } [items]
        
         
    */
/**
        @typedef StoreLatLong
        
        
        @property { string } [type]
        
        @property { Array<number> } [coordinates]
        
         
    */
/**
        @typedef OptedStoreAddress
        
        
        @property { string } [state]
        
        @property { string } [address1]
        
        @property { StoreLatLong } [latLong]
        
        @property { string } [address2]
        
        @property { number } [pincode]
        
        @property { string } [country]
        
        @property { string } [city]
        
         
    */
/**
        @typedef OrderingStore
        
        
        @property { OptedStoreAddress } [address]
        
        @property { string } [id]
        
        @property { number } [uid]
        
        @property { string } [name]
        
        @property { string } [displayName]
        
        @property { string } [storeType]
        
        @property { string } [storeCode]
        
        @property { number } [pincode]
        
        @property { string } [code]
        
         
    */
/**
        @typedef OrderingStores
        
        
        @property { Page } [page]
        
        @property { Array<OrderingStore> } [items]
        
        @property { Array<number> } [deployedStores]
        
        @property { boolean } [allStores]
        
        @property { boolean } [enabled]
        
        @property { string } [type]
        
        @property { string } [id]
        
        @property { string } [app]
        
        @property { number } [v]
        
         
    */
/**
        @typedef TokenResponse
        
        
        @property { Tokens } [tokens]
        
        @property { string } [id]
        
        @property { string } [application]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */
/**
        @typedef Tokens
        
        
        @property { Firebase } [firebase]
        
        @property { Moengage } [moengage]
        
        @property { Segment } [segment]
        
        @property { Gtm } [gtm]
        
        @property { Freshchat } [freshchat]
        
        @property { Safetynet } [safetynet]
        
        @property { FyndRewards } [fyndRewards]
        
        @property { Auth } [auth]
        
        @property { GoogleMap } [googleMap]
        
         
    */
/**
        @typedef Firebase
        
        
        @property { Credentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef Credentials
        
        
        @property { Ios } [ios]
        
        @property { Android } [android]
        
        @property { string } [projectId]
        
        @property { string } [gcmSenderId]
        
        @property { string } [applicationId]
        
        @property { string } [apiKey]
        
         
    */
/**
        @typedef Ios
        
        
        @property { string } [applicationId]
        
        @property { string } [apiKey]
        
         
    */
/**
        @typedef Android
        
        
        @property { string } [applicationId]
        
        @property { string } [apiKey]
        
         
    */
/**
        @typedef Moengage
        
        
        @property { MoengageCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef MoengageCredentials
        
        
        @property { string } [appId]
        
         
    */
/**
        @typedef Segment
        
        
        @property { SegmentCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef SegmentCredentials
        
        
        @property { string } [writeKey]
        
         
    */
/**
        @typedef Gtm
        
        
        @property { GtmCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef GtmCredentials
        
        
        @property { string } [apiKey]
        
         
    */
/**
        @typedef Freshchat
        
        
        @property { FreshchatCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef FreshchatCredentials
        
        
        @property { string } [appId]
        
        @property { string } [appKey]
        
        @property { string } [webToken]
        
         
    */
/**
        @typedef Safetynet
        
        
        @property { SafetynetCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef SafetynetCredentials
        
        
        @property { string } [apiKey]
        
         
    */
/**
        @typedef FyndRewards
        
        
        @property { FyndRewardsCredentials } [credentials]
        
         
    */
/**
        @typedef FyndRewardsCredentials
        
        
        @property { string } [publicKey]
        
         
    */
/**
        @typedef Auth
        
        
        @property { Google } [google]
        
        @property { Facebook } [facebook]
        
        @property { Accountkit } [accountkit]
        
         
    */
/**
        @typedef GoogleMap
        
        
        @property { GoogleMapCredentials } [credentials]
        
         
    */
/**
        @typedef GoogleMapCredentials
        
        
        @property { string } [apiKey]
        
         
    */
/**
        @typedef Rule
        
        
        @property { number } [min]
        
        @property { number } [value]
        
        @property { number } [discountQty]
        
        @property { number } [max]
        
        @property { number } [key]
        
         
    */
/**
        @typedef Ownership
        
        
        @property { string } payableCategory
        
        @property { string } payableBy
        
         
    */
/**
        @typedef CouponDateMeta
        
        
        @property { string } [modifiedOn]
        
        @property { string } [createdOn]
        
         
    */
/**
        @typedef DisplayMetaDict
        
        
        @property { string } [title]
        
        @property { string } [subtitle]
        
         
    */
/**
        @typedef DisplayMeta
        
        
        @property { DisplayMetaDict } [auto]
        
        @property { DisplayMetaDict } [apply]
        
        @property { DisplayMetaDict } [remove]
        
        @property { string } [title]
        
        @property { string } [description]
        
        @property { string } [subtitle]
        
         
    */
/**
        @typedef CouponSchedule
        
        
        @property { string } [end]
        
        @property { string } [cron]
        
        @property { number } [duration]
        
        @property { string } [start]
        
        @property { Array<Object> } [nextSchedule]
        
         
    */
/**
        @typedef BulkBundleRestriction
        
        
        @property { boolean } multiStoreAllowed
        
         
    */
/**
        @typedef UsesRemaining
        
        
        @property { number } [total]
        
        @property { number } [user]
        
        @property { number } [app]
        
         
    */
/**
        @typedef UsesRestriction
        
        
        @property { UsesRemaining } [remaining]
        
        @property { UsesRemaining } [maximum]
        
         
    */
/**
        @typedef PostOrder
        
        
        @property { boolean } [returnAllowed]
        
        @property { boolean } [cancellationAllowed]
        
         
    */
/**
        @typedef PriceRange
        
        
        @property { number } [min]
        
        @property { number } [max]
        
         
    */
/**
        @typedef PaymentAllowValue
        
        
        @property { number } [max]
        
         
    */
/**
        @typedef PaymentModes
        
        
        @property { Array<string> } [codes]
        
        @property { Array<string> } [types]
        
        @property { PaymentAllowValue } [uses]
        
        @property { Array<string> } [networks]
        
         
    */
/**
        @typedef PaymentCodes
        
        
        @property { PaymentModes } [upi]
        
        @property { PaymentModes } [qr]
        
        @property { PaymentModes } [pl]
        
        @property { PaymentModes } [wl]
        
        @property { PaymentModes } [ps]
        
        @property { PaymentModes } [nb]
        
        @property { PaymentModes } [card]
        
         
    */
/**
        @typedef Restrictions
        
        
        @property { boolean } [couponAllowed]
        
        @property { Array<number> } [orderingStores]
        
        @property { BulkBundleRestriction } [bulkBundle]
        
        @property { UsesRestriction } [uses]
        
        @property { Array<string> } [platforms]
        
        @property { PostOrder } [postOrder]
        
        @property { PriceRange } [priceRange]
        
        @property { PaymentCodes } [payments]
        
         
    */
/**
        @typedef RuleDefinition
        
        
        @property { Array<string> } [scope]
        
        @property { string } calculateOn
        
        @property { string } [currencyCode]
        
        @property { boolean } [isExact]
        
        @property { boolean } [autoApply]
        
        @property { string } type
        
        @property { string } applicableOn
        
        @property { string } valueType
        
         
    */
/**
        @typedef State
        
        
        @property { boolean } [isDisplay]
        
        @property { boolean } [isPublic]
        
        @property { boolean } [isArchived]
        
         
    */
/**
        @typedef Validation
        
        
        @property { boolean } [anonymous]
        
        @property { Array<string> } [appId]
        
        @property { string } [userRegisteredAfter]
        
         
    */
/**
        @typedef Identifier
        
        
        @property { Array<string> } [collectionId]
        
        @property { Array<string> } [articleId]
        
        @property { Array<number> } [itemId]
        
        @property { Array<number> } [brandId]
        
        @property { Array<number> } [companyId]
        
        @property { Array<string> } [userId]
        
        @property { Array<number> } [storeId]
        
        @property { Array<number> } [categoryId]
        
         
    */
/**
        @typedef Validity
        
        
        @property { number } [priority]
        
         
    */
/**
        @typedef CouponAction
        
        
        @property { string } [actionDate]
        
        @property { string } [txnMode]
        
         
    */
/**
        @typedef CouponAuthor
        
        
        @property { string } [modifiedBy]
        
        @property { string } [createdBy]
        
         
    */
/**
        @typedef CouponAdd
        
        
        @property { string } code
        
        @property { Array<Rule> } rule
        
        @property { string } typeSlug
        
        @property { Ownership } ownership
        
        @property { CouponDateMeta } [dateMeta]
        
        @property { Array<string> } [tags]
        
        @property { DisplayMeta } displayMeta
        
        @property { CouponSchedule } [schedule]
        
        @property { Restrictions } [restrictions]
        
        @property { RuleDefinition } ruleDefinition
        
        @property { State } [state]
        
        @property { Validation } [validation]
        
        @property { Identifier } identifiers
        
        @property { Validity } validity
        
        @property { CouponAction } [action]
        
        @property { CouponAuthor } [author]
        
         
    */
/**
        @typedef CouponsResponse
        
        
        @property { CouponAdd } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef SuccessMessage
        
        
        @property { boolean } [success]
        
        @property { string } [message]
        
         
    */
/**
        @typedef OperationErrorResponse
        
        
        @property { boolean } [success]
        
        @property { string } [message]
        
         
    */
/**
        @typedef CouponUpdate
        
        
        @property { string } code
        
        @property { Array<Rule> } rule
        
        @property { string } typeSlug
        
        @property { Ownership } ownership
        
        @property { CouponDateMeta } [dateMeta]
        
        @property { Array<string> } [tags]
        
        @property { DisplayMeta } displayMeta
        
        @property { CouponSchedule } [schedule]
        
        @property { Restrictions } [restrictions]
        
        @property { RuleDefinition } ruleDefinition
        
        @property { State } [state]
        
        @property { Validation } [validation]
        
        @property { Identifier } identifiers
        
        @property { Validity } validity
        
        @property { CouponAction } [action]
        
        @property { CouponAuthor } [author]
        
         
    */
/**
        @typedef CouponPartialUpdate
        
        
        @property { boolean } [archive]
        
        @property { CouponSchedule } [schedule]
        
         
    */
/**
        @typedef StoreMapping
        
        
        @property { string } [enabled]
        
        @property { string } [marketplaceStoreId]
        
        @property { number } [storeId]
        
        @property { Object } [meta]
        
         
    */
/**
        @typedef AllChannels
        
        
        @property { boolean } [mkpName]
        
         
    */
/**
        @typedef MyntraPayload
        
        
        @property { string } [merchantId]
        
        @property { string } [secretKey]
        
         
    */
/**
        @typedef AmazonPayload
        
        
        @property { string } [sellerId]
        
        @property { string } [mwsAuthToken]
        
         
    */
/**
        @typedef FlipkartPayload
        
        
        @property { string } [code]
        
         
    */
/**
        @typedef TatacliqPayload
        
        
        @property { string } [userName]
        
        @property { string } [password]
        
        @property { string } [merchantId]
        
         
    */
/**
        @typedef AjioPayload
        
        
        @property { string } [username]
        
        @property { string } [password]
        
        @property { string } [clientIp]
        
         
    */
/**
        @typedef InventorySyncConfig
        
        
        @property { boolean } [inventory]
        
        @property { boolean } [price]
        
         
    */
/**
        @typedef StoreMappingPayload
        
        
        @property { boolean } [storeMappingEnabled]
        
        @property { Array<StoreMapping> } [storeMapping]
        
         
    */
/**
        @typedef StatusPayload
        
        
        @property { boolean } [isActive]
        
         
    */
/**
        @typedef StatusResp
        
        
        @property { boolean } [isActive]
        
         
    */
/**
        @typedef SyncPayload
        
        
        @property { string } [modifiedSince]
        
         
    */
/**
        @typedef SyncResp
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef MkpResp
        
        
        @property { string } [marketplace]
        
        @property { number } [worker]
        
        @property { string } [workerAssigned]
        
        @property { boolean } [isActive]
        
        @property { boolean } [storeMappingEnabled]
        
        @property { number } [companyId]
        
        @property { Object } [configuration]
        
        @property { Array<StoreMapping> } [storeMapping]
        
         
    */
/**
        @typedef StatGroup
        
        
        @property { string } [key]
        
        @property { string } [url]
        
        @property { string } [title]
        
         
    */
/**
        @typedef StatsGroups
        
        
        @property { Array<StatGroup> } [groups]
        
         
    */
/**
        @typedef StatsGroupComponent
        
        
        @property { string } [key]
        
        @property { string } [url]
        
        @property { string } [title]
        
        @property { string } [type]
        
        @property { Object } [filters]
        
         
    */
/**
        @typedef StatsGroupComponents
        
        
        @property { string } [title]
        
        @property { Array<StatsGroupComponent> } [components]
        
         
    */
/**
        @typedef StatsRes
        
        
        @property { string } [key]
        
        @property { string } [title]
        
        @property { string } [type]
        
        @property { Object } [data]
        
         
    */
/**
        @typedef ReceivedAt
        
        
        @property { string } [value]
        
         
    */
/**
        @typedef AbandonCartsDetail
        
        
        @property { string } [propertiesCartId]
        
        @property { string } [contextTraitsFirstName]
        
        @property { string } [contextTraitsLastName]
        
        @property { string } [contextTraitsPhoneNumber]
        
        @property { string } [contextTraitsEmail]
        
        @property { string } [contextAppApplicationId]
        
        @property { string } [propertiesBreakupValuesRawTotal]
        
        @property { ReceivedAt } [receivedAt]
        
         
    */
/**
        @typedef AbandonCartsList
        
        
        @property { Array<AbandonCartsDetail> } [items]
        
        @property { string } [cartTotal]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef AbandonCartDetail
        
        
        @property { string } [id]
        
        @property { string } [userId]
        
        @property { string } [cartValue]
        
        @property { Array<Object> } [articles]
        
        @property { Object } [breakup]
        
        @property { Object } [address]
        
         
    */
/**
        @typedef ExportJobReq
        
        
        @property { string } [marketplaceName]
        
        @property { string } [startTime]
        
        @property { string } [endTime]
        
        @property { string } [eventType]
        
         
    */
/**
        @typedef ExportJobRes
        
        
        @property { string } [status]
        
        @property { string } [jobId]
        
         
    */
/**
        @typedef ExportJobStatusRes
        
        
        @property { string } [status]
        
        @property { string } [jobId]
        
        @property { string } [downloadUrl]
        
         
    */
/**
        @typedef GetLogsListReq
        
        
        @property { string } [marketplaceName]
        
        @property { string } [startDate]
        
        @property { string } [companyId]
        
        @property { string } [endDate]
        
         
    */
/**
        @typedef MkpLogsResp
        
        
        @property { string } [startTimeIso]
        
        @property { string } [endTimeIso]
        
        @property { string } [eventType]
        
        @property { string } [traceId]
        
        @property { string } [count]
        
        @property { string } [status]
        
         
    */
/**
        @typedef GetLogsListRes
        
        
        @property { Array<MkpLogsResp> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef SearchLogReq
        
        
        @property { string } [marketplaceName]
        
        @property { string } [startDate]
        
        @property { string } [companyId]
        
        @property { string } [endDate]
        
        @property { string } [identifier]
        
        @property { string } [identifierValue]
        
         
    */
/**
        @typedef LogInfo
        
        
        @property { string } [id]
        
        @property { string } [status]
        
        @property { string } [eventType]
        
        @property { string } [marketplaceName]
        
        @property { string } [event]
        
        @property { string } [traceId]
        
        @property { number } [companyId]
        
        @property { number } [brandId]
        
        @property { string } [storeCode]
        
        @property { number } [storeId]
        
        @property { number } [itemId]
        
        @property { string } [articleId]
        
        @property { string } [sellerIdentifier]
        
         
    */
/**
        @typedef SearchLogRes
        
        
        @property { Array<LogInfo> } [items]
        
        @property { Page } [page]
        
         
    */
declare class Lead {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
      *
      * @summary: Gets the list of Application level Tickets and/or ticket filters depending on query params
      * @description: Gets the list of Application level Tickets and/or ticket filters
      * @param {Object} arg - arg object.
      * @param {boolean} [arg.items] - Decides that the reponse will contain the list of tickets
      * @param {boolean} [arg.filters] - Decides that the reponse will contain the ticket filters
      * @param {string} [arg.q] - Search through ticket titles and description
      * @param {string} [arg.status] - Filter tickets on status
      * @param {string} [arg.priority] - Filter tickets on priority
      * @param {string} [arg.category] - Filter tickets on category
      
      **/
    getTickets({ items, filters, q, status, priority, category }?: {
        items?: boolean;
        filters?: boolean;
        q?: string;
        status?: string;
        priority?: string;
        category?: string;
    }): any;
    /**
      *
      * @summary: Retreives ticket details of a application level ticket
      * @description: Retreives ticket details of a application level ticket with ticket ID
      * @param {Object} arg - arg object.
      * @param {string} arg.ticketId - Tiket ID of the ticket to be fetched
      
      **/
    getTicket({ ticketId }?: {
        ticketId: string;
    }): any;
    /**
     *
     * @summary: Edits ticket details of a application level ticket
     * @description: Edits ticket details of a application level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes
     * @param {Object} arg - arg object.
     * @param {string} arg.ticketId - Ticket ID of ticket to be edited
     * @param {EditTicketPayload} arg.body
     **/
    editTicket({ ticketId, body }?: {
        ticketId: string;
        body: EditTicketPayload;
    }): any;
    /**
     *
     * @summary: Create history for specific application level ticket
     * @description: Create history for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
     * @param {Object} arg - arg object.
     * @param {string} arg.ticketId - Ticket ID for which history is created
     * @param {TicketHistoryPayload} arg.body
     **/
    createHistory({ ticketId, body }?: {
        ticketId: string;
        body: TicketHistoryPayload;
    }): any;
    /**
      *
      * @summary: Gets history list for specific application level ticket
      * @description: Gets history list for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
      * @param {Object} arg - arg object.
      * @param {string} arg.ticketId - Ticket ID for which history is to be fetched
      
      **/
    getTicketHistory({ ticketId }?: {
        ticketId: string;
    }): any;
    /**
      *
      * @summary: Get specific custom form using it's slug
      * @description: Get specific custom form using it's slug, this is used to view the form.
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - Slug of form whose response is getting submitted
      
      **/
    getCustomForm({ slug }?: {
        slug: string;
    }): any;
    /**
     *
     * @summary: Edit the given custom form
     * @description: Edit the given custom form field such as adding or deleting input, assignee, title, decription, notification and polling information.
     * @param {Object} arg - arg object.
     * @param {string} arg.slug - Slug of form whose response is getting submitted
     * @param {EditCustomFormPayload} arg.body
     **/
    editCustomForm({ slug, body }?: {
        slug: string;
        body: EditCustomFormPayload;
    }): any;
    /**
      *
      * @summary: Get list of custom form
      * @description: Get list of custom form for given application
      * @param {Object} arg - arg object.
      
      **/
    getCustomForms({}?: any): any;
    /**
     *
     * @summary: Creates a new custom form
     * @description: Creates a new custom form for given application
     * @param {Object} arg - arg object.
     * @param {CreateCustomFormPayload} arg.body
     **/
    createCustomForm({ body }?: {
        body: CreateCustomFormPayload;
    }): any;
    /**
      *
      * @summary: Get Token to join a specific Video Room using it's unqiue name
      * @description: Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there.
      * @param {Object} arg - arg object.
      * @param {string} arg.uniqueName - Unique name of video room
      
      **/
    getTokenForVideoRoom({ uniqueName }?: {
        uniqueName: string;
    }): any;
    /**
      *
      * @summary: Get participants of a specific Video Room using it's unique name
      * @description: Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names.
      * @param {Object} arg - arg object.
      * @param {string} arg.uniqueName - Unique name of Video Room
      
      **/
    getVideoParticipants({ uniqueName }?: {
        uniqueName: string;
    }): any;
    /**
     *
     * @summary: Open a video room.
     * @description: Open a video room.
     * @param {Object} arg - arg object.
     * @param {CreateVideoRoomPayload} arg.body
     **/
    openVideoRoom({ body }?: {
        body: CreateVideoRoomPayload;
    }): any;
    /**
      *
      * @summary: Close the video room and force all participants to leave.
      * @description: Close the video room and force all participants to leave.
      * @param {Object} arg - arg object.
      * @param {string} arg.uniqueName - Unique name of Video Room
      
      **/
    closeVideoRoom({ uniqueName }?: {
        uniqueName: string;
    }): any;
}
declare class Theme {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
      *
      * @summary: Gets list of themes in theme library
      * @description: Gets list of themes in theme library
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
      * @param {number} [arg.pageNo] - Page number. Default is 1.
      
      **/
    getThemeLibrary({ pageSize, pageNo }?: {
        pageSize?: number;
        pageNo?: number;
    }): any;
    /**
     *
     * @summary: Add theme to theme library
     * @description: Add theme to theme library
     * @param {Object} arg - arg object.
     * @param {AddThemeRequestSchema} arg.body
     **/
    addToThemeLibrary({ body }?: {
        body: AddThemeRequestSchema;
    }): any;
    /**
     *
     * @summary: Apply theme
     * @description: Apply theme
     * @param {Object} arg - arg object.
     * @param {AddThemeRequestSchema} arg.body
     **/
    applyTheme({ body }?: {
        body: AddThemeRequestSchema;
    }): any;
    /**
      *
      * @summary: Checks if theme is upgradable
      * @description: Checks if theme is upgradable
      * @param {Object} arg - arg object.
      * @param {string} arg.themeId - Theme ID
      
      **/
    isUpgradable({ themeId }?: {
        themeId: string;
    }): any;
    /**
      *
      * @summary: Upgrades theme
      * @description: Upgrades theme
      * @param {Object} arg - arg object.
      * @param {string} arg.themeId - Theme ID
      
      **/
    upgradeTheme({ themeId }?: {
        themeId: string;
    }): any;
    /**
      *
      * @summary: Gets public themes
      * @description: Gets public themes
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
      * @param {number} [arg.pageNo] - Page number. Default is 1.
      
      **/
    getPublicThemes({ pageSize, pageNo }?: {
        pageSize?: number;
        pageNo?: number;
    }): any;
    /**
     *
     * @summary: Create new theme
     * @description: Create new theme
     * @param {Object} arg - arg object.
     * @param {ThemesSchema} arg.body
     **/
    createTheme({ body }?: {
        body: ThemesSchema;
    }): any;
    /**
      *
      * @summary: Get applied theme
      * @description: Get applied theme
      * @param {Object} arg - arg object.
      
      **/
    getAppliedTheme({}?: any): any;
    /**
      *
      * @summary: Gets fonts
      * @description: Gets fonts
      * @param {Object} arg - arg object.
      
      **/
    getFonts({}?: any): any;
    /**
      *
      * @summary: Gets theme by id
      * @description: Gets theme by id
      * @param {Object} arg - arg object.
      * @param {string} arg.themeId - Theme ID
      
      **/
    getThemeById({ themeId }?: {
        themeId: string;
    }): any;
    /**
     *
     * @summary: Update theme
     * @description: Update theme
     * @param {Object} arg - arg object.
     * @param {string} arg.themeId - Theme ID
     * @param {ThemesSchema} arg.body
     **/
    updateTheme({ themeId, body }?: {
        themeId: string;
        body: ThemesSchema;
    }): any;
    /**
      *
      * @summary: Delete theme
      * @description: Delete theme
      * @param {Object} arg - arg object.
      * @param {string} arg.themeId - Theme ID
      
      **/
    deleteTheme({ themeId }?: {
        themeId: string;
    }): any;
    /**
      *
      * @summary: Gets theme for preview
      * @description: Gets theme for preview
      * @param {Object} arg - arg object.
      * @param {string} arg.themeId - Theme ID
      
      **/
    getThemeForPreview({ themeId }?: {
        themeId: string;
    }): any;
    /**
      *
      * @summary: Publish theme
      * @description: Publish theme
      * @param {Object} arg - arg object.
      * @param {string} arg.themeId - Theme ID
      
      **/
    publishTheme({ themeId }?: {
        themeId: string;
    }): any;
    /**
      *
      * @summary: Unpublish theme
      * @description: Unpublish theme
      * @param {Object} arg - arg object.
      * @param {string} arg.themeId - Theme ID
      
      **/
    unpublishTheme({ themeId }?: {
        themeId: string;
    }): any;
    /**
      *
      * @summary: Archive theme
      * @description: Archive theme
      * @param {Object} arg - arg object.
      * @param {string} arg.themeId - Theme ID
      
      **/
    archiveTheme({ themeId }?: {
        themeId: string;
    }): any;
    /**
      *
      * @summary: Unarchive theme
      * @description: Unarchive theme
      * @param {Object} arg - arg object.
      * @param {string} arg.themeId - Theme ID
      
      **/
    unarchiveTheme({ themeId }?: {
        themeId: string;
    }): any;
}
declare class User {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
      *
      * @summary: Gets list of customers
      * @description: Used to get application customers list
      * @param {Object} arg - arg object.
      * @param {string} [arg.q] - The search query. This can be a partial or complete name of a either a product, brand or category
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
      * @param {number} [arg.pageNo] - Page number. Default is 1.
      
      **/
    getCustomers({ q, pageSize, pageNo }?: {
        q?: string;
        pageSize?: number;
        pageNo?: number;
    }): any;
    /**
      *
      * @summary: Search users
      * @description: Search users
      * @param {Object} arg - arg object.
      * @param {string} [arg.q] - The search query. This can be a partial or complete name of a either a product, brand or category
      
      **/
    searchUsers({ q }?: {
        q?: string;
    }): any;
    /**
      *
      * @summary: Get platform config
      * @description: Used to get platform config
      * @param {Object} arg - arg object.
      
      **/
    getPlatformConfig({}?: any): any;
    /**
     *
     * @summary: Update platform config
     * @description: Used to update platform config
     * @param {Object} arg - arg object.
     * @param {PlatformSchema} arg.body
     **/
    updatePlatformConfig({ body }?: {
        body: PlatformSchema;
    }): any;
}
declare class Communication {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
      *
      * @summary: Get campaigns
      * @description: Get campaigns
      * @param {Object} arg - arg object.
      
      **/
    getCampaigns({}?: any): any;
    /**
      *
      * @summary: Get campaigns
      * @description: Get campaigns
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Company id
      * @param {string} arg.applicationId - Application id
      
      **/
    getCampaignsPaginator({ companyId, applicationId }?: {
        companyId: string;
        applicationId: string;
    }): Paginator;
    /**
     *
     * @summary: Create campaign
     * @description: Create campaign
     * @param {Object} arg - arg object.
     * @param {CampaignReq} arg.body
     **/
    createCampaign({ body }?: {
        body: CampaignReq;
    }): any;
    /**
      *
      * @summary: Get campaign by id
      * @description: Get campaign by id
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Campaign id
      
      **/
    getCampaignById({ id }?: {
        id: string;
    }): any;
    /**
     *
     * @summary: Update campaign by id
     * @description: Update campaign by id
     * @param {Object} arg - arg object.
     * @param {string} arg.id - Campaign id
     * @param {CampaignReq} arg.body
     **/
    updateCampaignById({ id, body }?: {
        id: string;
        body: CampaignReq;
    }): any;
    /**
      *
      * @summary: Get stats of campaign by id
      * @description: Get stats of campaign by id
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Campaign id
      
      **/
    getStatsOfCampaignById({ id }?: {
        id: string;
    }): any;
    /**
      *
      * @summary: Get audiences
      * @description: Get audiences
      * @param {Object} arg - arg object.
      
      **/
    getAudiences({}?: any): any;
    /**
      *
      * @summary: Get audiences
      * @description: Get audiences
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Company id
      * @param {string} arg.applicationId - Application id
      
      **/
    getAudiencesPaginator({ companyId, applicationId }?: {
        companyId: string;
        applicationId: string;
    }): Paginator;
    /**
     *
     * @summary: Create audience
     * @description: Create audience
     * @param {Object} arg - arg object.
     * @param {AudienceReq} arg.body
     **/
    createAudience({ body }?: {
        body: AudienceReq;
    }): any;
    /**
     *
     * @summary: Get bigquery headers
     * @description: Get bigquery headers
     * @param {Object} arg - arg object.
     * @param {BigqueryHeadersReq} arg.body
     **/
    getBigqueryHeaders({ body }?: {
        body: BigqueryHeadersReq;
    }): any;
    /**
      *
      * @summary: Get audience by id
      * @description: Get audience by id
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Audience id
      
      **/
    getAudienceById({ id }?: {
        id: string;
    }): any;
    /**
     *
     * @summary: Update audience by id
     * @description: Update audience by id
     * @param {Object} arg - arg object.
     * @param {string} arg.id - Audience id
     * @param {AudienceReq} arg.body
     **/
    updateAudienceById({ id, body }?: {
        id: string;
        body: AudienceReq;
    }): any;
    /**
     *
     * @summary: Get n sample records from csv
     * @description: Get n sample records from csv
     * @param {Object} arg - arg object.
     * @param {GetNRecordsCsvReq} arg.body
     **/
    getNSampleRecordsFromCsv({ body }?: {
        body: GetNRecordsCsvReq;
    }): any;
    /**
      *
      * @summary: Get email providers
      * @description: Get email providers
      * @param {Object} arg - arg object.
      
      **/
    getEmailProviders({}?: any): any;
    /**
      *
      * @summary: Get email providers
      * @description: Get email providers
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Company id
      * @param {string} arg.applicationId - Application id
      
      **/
    getEmailProvidersPaginator({ companyId, applicationId }?: {
        companyId: string;
        applicationId: string;
    }): Paginator;
    /**
     *
     * @summary: Create email provider
     * @description: Create email provider
     * @param {Object} arg - arg object.
     * @param {EmailProviderReq} arg.body
     **/
    createEmailProvider({ body }?: {
        body: EmailProviderReq;
    }): any;
    /**
      *
      * @summary: Get email provider by id
      * @description: Get email provider by id
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Email provider id
      
      **/
    getEmailProviderById({ id }?: {
        id: string;
    }): any;
    /**
     *
     * @summary: Update email provider by id
     * @description: Update email provider by id
     * @param {Object} arg - arg object.
     * @param {string} arg.id - Email provider id
     * @param {EmailProviderReq} arg.body
     **/
    updateEmailProviderById({ id, body }?: {
        id: string;
        body: EmailProviderReq;
    }): any;
    /**
      *
      * @summary: Get email templates
      * @description: Get email templates
      * @param {Object} arg - arg object.
      
      **/
    getEmailTemplates({}?: any): any;
    /**
      *
      * @summary: Get email templates
      * @description: Get email templates
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Company id
      * @param {string} arg.applicationId - Application id
      
      **/
    getEmailTemplatesPaginator({ companyId, applicationId }?: {
        companyId: string;
        applicationId: string;
    }): Paginator;
    /**
     *
     * @summary: Create email template
     * @description: Create email template
     * @param {Object} arg - arg object.
     * @param {EmailTemplateReq} arg.body
     **/
    createEmailTemplate({ body }?: {
        body: EmailTemplateReq;
    }): any;
    /**
      *
      * @summary: Get system email templates
      * @description: Get system email templates
      * @param {Object} arg - arg object.
      
      **/
    getSystemEmailTemplates({}?: any): any;
    /**
      *
      * @summary: Get system email templates
      * @description: Get system email templates
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Company id
      * @param {string} arg.applicationId - Application id
      
      **/
    getSystemEmailTemplatesPaginator({ companyId, applicationId }?: {
        companyId: string;
        applicationId: string;
    }): Paginator;
    /**
      *
      * @summary: Get email template by id
      * @description: Get email template by id
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Email template id
      
      **/
    getEmailTemplateById({ id }?: {
        id: string;
    }): any;
    /**
     *
     * @summary: Update email template by id
     * @description: Update email template by id
     * @param {Object} arg - arg object.
     * @param {string} arg.id - Email template id
     * @param {EmailTemplateReq} arg.body
     **/
    updateEmailTemplateById({ id, body }?: {
        id: string;
        body: EmailTemplateReq;
    }): any;
    /**
      *
      * @summary: Delete email template by id
      * @description: Delete email template by id
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Email template id
      
      **/
    deleteEmailTemplateById({ id }?: {
        id: string;
    }): any;
    /**
      *
      * @summary: Get event subscriptions
      * @description: Get event subscriptions
      * @param {Object} arg - arg object.
      
      **/
    getEventSubscriptions({}?: any): any;
    /**
      *
      * @summary: Get event subscriptions
      * @description: Get event subscriptions
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Company id
      * @param {string} arg.applicationId - Application id
      
      **/
    getEventSubscriptionsPaginator({ companyId, applicationId }?: {
        companyId: string;
        applicationId: string;
    }): Paginator;
    /**
      *
      * @summary: Get jobs
      * @description: Get jobs
      * @param {Object} arg - arg object.
      
      **/
    getJobs({}?: any): any;
    /**
      *
      * @summary: Get jobs
      * @description: Get jobs
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Company id
      * @param {string} arg.applicationId - Application id
      
      **/
    getJobsPaginator({ companyId, applicationId }?: {
        companyId: string;
        applicationId: string;
    }): Paginator;
    /**
     *
     * @summary: Trigger campaign job
     * @description: Trigger campaign job
     * @param {Object} arg - arg object.
     * @param {TriggerJobRequest} arg.body
     **/
    triggerCampaignJob({ body }?: {
        body: TriggerJobRequest;
    }): any;
    /**
      *
      * @summary: Get job logs
      * @description: Get job logs
      * @param {Object} arg - arg object.
      
      **/
    getJobLogs({}?: any): any;
    /**
      *
      * @summary: Get job logs
      * @description: Get job logs
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Company id
      * @param {string} arg.applicationId - Application id
      
      **/
    getJobLogsPaginator({ companyId, applicationId }?: {
        companyId: string;
        applicationId: string;
    }): Paginator;
    /**
      *
      * @summary: Get communication logs
      * @description: Get communication logs
      * @param {Object} arg - arg object.
      
      **/
    getCommunicationLogs({}?: any): any;
    /**
      *
      * @summary: Get communication logs
      * @description: Get communication logs
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Company id
      * @param {string} arg.applicationId - Application id
      
      **/
    getCommunicationLogsPaginator({ companyId, applicationId }?: {
        companyId: string;
        applicationId: string;
    }): Paginator;
    /**
      *
      * @summary: Get sms providers
      * @description: Get sms providers
      * @param {Object} arg - arg object.
      
      **/
    getSmsProviders({}?: any): any;
    /**
      *
      * @summary: Get sms providers
      * @description: Get sms providers
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Company id
      * @param {string} arg.applicationId - Application id
      
      **/
    getSmsProvidersPaginator({ companyId, applicationId }?: {
        companyId: string;
        applicationId: string;
    }): Paginator;
    /**
     *
     * @summary: Create sms provider
     * @description: Create sms provider
     * @param {Object} arg - arg object.
     * @param {SmsProviderReq} arg.body
     **/
    createSmsProvider({ body }?: {
        body: SmsProviderReq;
    }): any;
    /**
      *
      * @summary: Get sms provider by id
      * @description: Get sms provider by id
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Sms provider id
      
      **/
    getSmsProviderById({ id }?: {
        id: string;
    }): any;
    /**
     *
     * @summary: Update sms provider by id
     * @description: Update sms provider by id
     * @param {Object} arg - arg object.
     * @param {string} arg.id - Sms provider id
     * @param {SmsProviderReq} arg.body
     **/
    updateSmsProviderById({ id, body }?: {
        id: string;
        body: SmsProviderReq;
    }): any;
    /**
      *
      * @summary: Get sms templates
      * @description: Get sms templates
      * @param {Object} arg - arg object.
      
      **/
    getSmsTemplates({}?: any): any;
    /**
      *
      * @summary: Get sms templates
      * @description: Get sms templates
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Company id
      * @param {string} arg.applicationId - Application id
      
      **/
    getSmsTemplatesPaginator({ companyId, applicationId }?: {
        companyId: string;
        applicationId: string;
    }): Paginator;
    /**
     *
     * @summary: Create sms template
     * @description: Create sms template
     * @param {Object} arg - arg object.
     * @param {SmsTemplateReq} arg.body
     **/
    createSmsTemplate({ body }?: {
        body: SmsTemplateReq;
    }): any;
    /**
      *
      * @summary: Get sms template by id
      * @description: Get sms template by id
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Sms template id
      
      **/
    getSmsTemplateById({ id }?: {
        id: string;
    }): any;
    /**
     *
     * @summary: Update sms template by id
     * @description: Update sms template by id
     * @param {Object} arg - arg object.
     * @param {string} arg.id - Sms template id
     * @param {SmsTemplateReq} arg.body
     **/
    updateSmsTemplateById({ id, body }?: {
        id: string;
        body: SmsTemplateReq;
    }): any;
    /**
      *
      * @summary: Delete sms template by id
      * @description: Delete sms template by id
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Sms template id
      
      **/
    deleteSmsTemplateById({ id }?: {
        id: string;
    }): any;
    /**
      *
      * @summary: Get system sms templates
      * @description: Get system sms templates
      * @param {Object} arg - arg object.
      
      **/
    getSystemSystemTemplates({}?: any): any;
    /**
      *
      * @summary: Get system sms templates
      * @description: Get system sms templates
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Company id
      * @param {string} arg.applicationId - Application id
      
      **/
    getSystemSystemTemplatesPaginator({ companyId, applicationId }?: {
        companyId: string;
        applicationId: string;
    }): Paginator;
}
declare class Payment {
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
declare class Order {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
      *
      * @summary: Track Shipment by shipment id, for application based on application Id
      * @description: Shipment Track
      * @param {Object} arg - arg object.
      * @param {string} arg.shipmentId - Shipment Id
      
      **/
    trackShipmentPlatform({ shipmentId }?: {
        shipmentId: string;
    }): any;
    /**
      *
      * @summary: Track Order by order id, for application based on application Id
      * @description: Order Track
      * @param {Object} arg - arg object.
      * @param {string} arg.orderId - Order Id
      
      **/
    trackOrder({ orderId }?: {
        orderId: string;
    }): any;
    /**
      *
      * @summary: Get all failed orders application wise
      * @description: Failed Orders
      * @param {Object} arg - arg object.
      
      **/
    failedOrders({}?: any): any;
    /**
      *
      * @summary: Reprocess order by order id
      * @description: Order Reprocess
      * @param {Object} arg - arg object.
      * @param {string} arg.orderId - Order Id
      
      **/
    reprocessOrder({ orderId }?: {
        orderId: string;
    }): any;
}
declare class Catalog {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
      *
      * @summary: Get a Search Keywords Details
      * @description: Get the details of a words by its `id`. If successful, returns a Collection resource in the response body specified in `GetSearchWordsDetailResponseSchema`
      * @param {Object} arg - arg object.
      * @param {string} arg.id - A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to retrieve.
      
      **/
    getSearchKeywords({ id }?: {
        id: string;
    }): any;
    /**
     *
     * @summary: Update Search Keyword
     * @description: Update Search Keyword by its id. On successful request, returns the updated collection
     * @param {Object} arg - arg object.
     * @param {string} arg.id - A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to delete.
     * @param {CreateSearchKeyword} arg.body
     **/
    updateSearchKeywords({ id, body }?: {
        id: string;
        body: CreateSearchKeyword;
    }): any;
    /**
      *
      * @summary: Delete a Search Keywords
      * @description: Delete a keywords by it's id. Returns an object that tells whether the keywords was deleted successfully
      * @param {Object} arg - arg object.
      * @param {string} arg.id - A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to delete.
      
      **/
    deleteSearchKeywords({ id }?: {
        id: string;
    }): any;
    /**
      *
      * @summary: List all Search Custom Keyword Listing
      * @description: Custom Search Keyword allows you to map conditions with keywords to give you the ultimate results
      * @param {Object} arg - arg object.
      
      **/
    getAllSearchKeyword({}?: any): any;
    /**
     *
     * @summary: Add a Custom Search Keywords
     * @description: Create a Custom Search Keywords. See `CreateSearchKeywordSchema` for the list of attributes needed to create a mapping and /collections/query-options for the available options to create a rule. On successful request, returns a paginated list of collections specified in `CreateSearchKeywordSchema`
     * @param {Object} arg - arg object.
     * @param {CreateSearchKeyword} arg.body
     **/
    createCustomKeyword({ body }?: {
        body: CreateSearchKeyword;
    }): any;
    /**
      *
      * @summary: Get a Autocomplete Keywords Details
      * @description: Get the details of a words by its `id`. If successful, returns a keywords resource in the response body specified in `GetAutocompleteWordsResponseSchema`
      * @param {Object} arg - arg object.
      * @param {string} arg.id - A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to retrieve.
      
      **/
    getAutocompleteKeywordDetail({ id }?: {
        id: string;
    }): any;
    /**
     *
     * @summary: Create & Update Autocomplete Keyword
     * @description: Update a mapping by it's id. On successful request, returns the updated Keyword mapping
     * @param {Object} arg - arg object.
     * @param {string} arg.id - A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to delete.
     * @param {CreateAutocompleteKeyword} arg.body
     **/
    updateAutocompleteKeyword({ id, body }?: {
        id: string;
        body: CreateAutocompleteKeyword;
    }): any;
    /**
      *
      * @summary: Delete a Autocomplete Keywords
      * @description: Delete a keywords by it's id. Returns an object that tells whether the keywords was deleted successfully
      * @param {Object} arg - arg object.
      * @param {string} arg.id - A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to delete.
      
      **/
    deleteAutocompleteKeyword({ id }?: {
        id: string;
    }): any;
    /**
      *
      * @summary: List all Autocomplete Keyword Listing
      * @description: Custom Autocomplete Keyword allows you to map conditions with keywords to give you the ultimate results
      * @param {Object} arg - arg object.
      
      **/
    getAutocompleteConfig({}?: any): any;
    /**
     *
     * @summary: Add a Custom Autocomplete Keywords
     * @description: Create a Custom Autocomplete Keywords. See `CreateAutocompleteKeywordSchema` for the list of attributes needed to create a mapping and /collections/query-options for the available options to create a rule. On successful request, returns a paginated list of collections specified in `CreateAutocompleteKeywordSchema`
     * @param {Object} arg - arg object.
     * @param {CreateAutocompleteKeyword} arg.body
     **/
    createCustomAutocompleteRule({ body }?: {
        body: CreateAutocompleteKeyword;
    }): any;
    /**
      *
      * @summary: Get configuration meta  details for catalog for admin panel
      * @description: configuration meta  details for catalog.
      * @param {Object} arg - arg object.
      
      **/
    getCatalogConfiguration({}?: any): any;
    /**
      *
      * @summary: Get configured details for catalog
      * @description: configured details for catalog.
      * @param {Object} arg - arg object.
      
      **/
    getConfigurations({}?: any): any;
    /**
     *
     * @summary: Add configuration for products & listings
     * @description: Add configuration for products & listing.
     * @param {Object} arg - arg object.
     * @param {AppConfiguration} arg.body
     **/
    createConfigurationProductListing({ body }?: {
        body: AppConfiguration;
    }): any;
    /**
      *
      * @summary: Get configured details for catalog
      * @description: configured details for catalog.
      * @param {Object} arg - arg object.
      * @param {string} arg.type - type can be brands, categories etc.
      
      **/
    getConfigurationByType({ type }?: {
        type: string;
    }): any;
    /**
     *
     * @summary: Add configuration for categories and brands
     * @description: Add configuration for categories & brands.
     * @param {Object} arg - arg object.
     * @param {string} arg.type - type can be brands, categories etc.
     * @param {AppConfiguration} arg.body
     **/
    createConfigurationByType({ type, body }?: {
        type: string;
        body: AppConfiguration;
    }): any;
    /**
      *
      * @summary: Get query filters to configure a collection
      * @description: Get query filters to configure a collection
      * @param {Object} arg - arg object.
      
      **/
    getQueryFilters({}?: any): any;
    /**
      *
      * @summary: List all the collections
      * @description: A Collection allows you to organize your products into hierarchical groups. For example, a dress might be in the category _Clothing_, the individual product might also be in the collection _Summer_. On successful request, returns all the collections as specified in `CollectionListingSchema`
      * @param {Object} arg - arg object.
      
      **/
    getAllCollections({}?: any): any;
    /**
     *
     * @summary: Add a Collection
     * @description: Create a collection. See `CreateCollectionRequestSchema` for the list of attributes needed to create a collection and collections/query-options for the available options to create a collection. On successful request, returns a paginated list of collections specified in `CollectionCreateResponse`
     * @param {Object} arg - arg object.
     * @param {CreateCollection} arg.body
     **/
    createCollection({ body }?: {
        body: CreateCollection;
    }): any;
    /**
      *
      * @summary: Get a particular collection
      * @description: Get the details of a collection by its `slug`. If successful, returns a Collection resource in the response body specified in `CollectionDetailResponse`
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - A `slug` is a human readable, URL friendly unique identifier of an object. Pass the `slug` of the collection which you want to retrieve.
      
      **/
    getCollectionDetail({ slug }?: {
        slug: string;
    }): any;
    /**
      *
      * @summary: Update a collection
      * @description: Update a collection by it's id. On successful request, returns the updated collection
      * @param {Object} arg - arg object.
      * @param {string} arg.id - A `id` is a unique identifier of a collection.
      
      **/
    updateCollection({ id }?: {
        id: string;
    }): any;
    /**
      *
      * @summary: Delete a Collection
      * @description: Delete a collection by it's id. Returns an object that tells whether the collection was deleted successfully
      * @param {Object} arg - arg object.
      * @param {string} arg.id - A `id` is a unique identifier of a collection.
      
      **/
    deleteCollection({ id }?: {
        id: string;
    }): any;
    /**
      *
      * @summary: Get the items for a collection
      * @description: Get items from a collection specified by its `id`.
      * @param {Object} arg - arg object.
      * @param {string} arg.id - A `id` is a unique identifier of a collection.
      * @param {string} [arg.sortOn] - Each response will contain sort_on param, which should be sent back to make pagination work.
      * @param {string} [arg.pageId] - Each response will contain next_page_id param, which should be sent back to make pagination work.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
      
      **/
    getCollectionItems({ id, sortOn, pageId, pageSize }?: {
        id: string;
        sortOn?: string;
        pageId?: string;
        pageSize?: number;
    }): any;
    /**
     *
     * @summary: Add items to a collection
     * @description: Adds items to a collection specified by its `id`. See `CollectionItemRequest` for the list of attributes needed to add items to an collection.
     * @param {Object} arg - arg object.
     * @param {string} arg.id - A `id` is a unique identifier of a collection.
     * @param {CollectionItemRequest} arg.body
     **/
    addCollectionItems({ id, body }?: {
        id: string;
        body: CollectionItemRequest;
    }): any;
    /**
      *
      * @summary: Analytics data of catalog and inventory.
      * @description: Catalog Insights api returns the count of catalog related data like products, brands, departments and categories that have been made live as per configuration of the app.
      * @param {Object} arg - arg object.
      * @param {string} [arg.brand] - Brand slug
      
      **/
    getCatalogInsights({ brand }?: {
        brand?: string;
    }): any;
}
declare class Assets {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
      *
      * @summary: This operation initiates upload and returns storage link which is valid for 30 Minutes. You can use that storage link to make subsequent upload request with file buffer or blob.
      * @description: Uploads an arbitrarily sized buffer or blob.
  
  It has three Major Steps:
  * Start
  * Upload
  * Complete
  
  ### Start
  Initiates the assets upload using `appStartUpload`.
  It returns the storage link in response.
  
  ### Upload
  Use the storage link to upload a file (Buffer or Blob) to the File Storage.
  Make a `PUT` request on storage link received from `appStartUpload` api with file (Buffer or Blob) as a request body.
  
  ### Complete
  After successfully upload, call `appCompleteUpload` api to complete the upload process.
  This operation will return the url for the uploaded file.
  
      * @param {Object} arg - arg object.
      * @param {string} arg.namespace - bucket name
      * @param {StartRequest} arg.body
      **/
    appStartUpload({ namespace, body }?: {
        namespace: string;
        body: StartRequest;
    }): any;
    /**
      *
      * @summary: This will complete the upload process. After successfully uploading file, you can call this operation to complete the upload process.
      * @description: Uploads an arbitrarily sized buffer or blob.
  
  It has three Major Steps:
  * Start
  * Upload
  * Complete
  
  ### Start
  Initiates the assets upload using `appStartUpload`.
  It returns the storage link in response.
  
  ### Upload
  Use the storage link to upload a file (Buffer or Blob) to the File Storage.
  Make a `PUT` request on storage link received from `appStartUpload` api with file (Buffer or Blob) as a request body.
  
  ### Complete
  After successfully upload, call `appCompleteUpload` api to complete the upload process.
  This operation will return the url for the uploaded file.
  
      * @param {Object} arg - arg object.
      * @param {string} arg.namespace - bucket name
      * @param {StartResponse} arg.body
      **/
    appCompleteUpload({ namespace, body }?: {
        namespace: string;
        body: StartResponse;
    }): any;
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
    /**
      *
      * @summary: Browse Files
      * @description: Browse Files
      * @param {Object} arg - arg object.
      * @param {string} arg.namespace - bucket name
      * @param {number} arg.companyId - company_id
      * @param {number} arg.applicationId - application_id
      
      **/
    appBrowsePaginator({ namespace, companyId, applicationId }?: {
        namespace: string;
        companyId: number;
        applicationId: number;
    }): Paginator;
}
declare class Share {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     *
     * @summary: Create short link
     * @description: Create short link
     * @param {Object} arg - arg object.
     * @param {ShortLinkReq} arg.body
     **/
    createShortLink({ body }?: {
        body: ShortLinkReq;
    }): any;
    /**
      *
      * @summary: Get short links
      * @description: Get short links
      * @param {Object} arg - arg object.
      * @param {string} [arg.pageNo] - Current page number
      * @param {string} [arg.pageSize] - Current page size
      * @param {string} [arg.createdBy] - Short link creator
      * @param {string} [arg.active] - Short link active status
      * @param {string} [arg.q] - Search text for original and short url
      
      **/
    getShortLinks({ pageNo, pageSize, createdBy, active, q }?: {
        pageNo?: string;
        pageSize?: string;
        createdBy?: string;
        active?: string;
        q?: string;
    }): any;
    /**
      *
      * @summary: Get short link by hash
      * @description: Get short link by hash
      * @param {Object} arg - arg object.
      * @param {string} arg.hash - Hash of short url
      
      **/
    getShortLinkByHash({ hash }?: {
        hash: string;
    }): any;
    /**
      *
      * @summary: Update short link by id
      * @description: Update short link by id
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Short link document identifier
      
      **/
    updateShortLinkById({ id }?: {
        id: string;
    }): any;
}
declare class Configuration {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
      *
      * @summary: Get latest build config
      * @description: Get latest build config
      * @param {Object} arg - arg object.
      * @param {string} arg.platformType - Current platform name
      
      **/
    getBuildConfig({ platformType }?: {
        platformType: string;
    }): any;
    /**
     *
     * @summary: Update build config for next build
     * @description: Update build config for next build
     * @param {Object} arg - arg object.
     * @param {string} arg.platformType - Current platform name
     * @param {MobileAppConfigRequest} arg.body
     **/
    updateBuildConfig({ platformType, body }?: {
        platformType: string;
        body: MobileAppConfigRequest;
    }): any;
    /**
      *
      * @summary: Get previous versions
      * @description: Get previous versions
      * @param {Object} arg - arg object.
      * @param {string} arg.platformType - Current platform name
      
      **/
    getPreviousVersions({ platformType }?: {
        platformType: string;
    }): any;
    /**
      *
      * @summary: Get features of application
      * @description: Get features of application
      * @param {Object} arg - arg object.
      
      **/
    getAppFeatures({}?: any): any;
    /**
     *
     * @summary: Update features of application
     * @description: Update features of application
     * @param {Object} arg - arg object.
     * @param {AppFeatureRequest} arg.body
     **/
    updateAppFeatures({ body }?: {
        body: AppFeatureRequest;
    }): any;
    /**
      *
      * @summary: Get basic application details
      * @description: Get basic application details like name
      * @param {Object} arg - arg object.
      
      **/
    getAppBasicDetails({}?: any): any;
    /**
     *
     * @summary: Add or update application's basic details
     * @description: Add or update application's basic details
     * @param {Object} arg - arg object.
     * @param {ApplicationDetail} arg.body
     **/
    updateAppBasicDetails({ body }?: {
        body: ApplicationDetail;
    }): any;
    /**
      *
      * @summary: Get application information
      * @description: Get Application Current Information. This includes information about social links, address and contact information of company/seller/brand of the application.
      * @param {Object} arg - arg object.
      
      **/
    getAppContactInfo({}?: any): any;
    /**
     *
     * @summary: Get application information
     * @description: Save Application Current Information. This includes information about social links, address and contact information of an application.
     * @param {Object} arg - arg object.
     * @param {ApplicationInformation} arg.body
     **/
    updateAppContactInfo({ body }?: {
        body: ApplicationInformation;
    }): any;
    /**
      *
      * @summary: Get social tokens
      * @description: Get social tokens.
      * @param {Object} arg - arg object.
      
      **/
    getAppApiTokens({}?: any): any;
    /**
     *
     * @summary: Add social tokens
     * @description: Add social tokens.
     * @param {Object} arg - arg object.
     * @param {TokenResponse} arg.body
     **/
    updateAppApiTokens({ body }?: {
        body: TokenResponse;
    }): any;
    /**
      *
      * @summary: Application inventory enabled companies
      * @description: Application inventory enabled companies.
      * @param {Object} arg - arg object.
      
      **/
    getAppCompanies({}?: any): any;
    /**
      *
      * @summary: Application inventory enabled companies
      * @description: Application inventory enabled companies.
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Current company id
      * @param {string} arg.applicationId - Current application id
      
      **/
    getAppCompaniesPaginator({ companyId, applicationId }?: {
        companyId: string;
        applicationId: string;
    }): Paginator;
    /**
      *
      * @summary: Application inventory enabled stores
      * @description: Application inventory enabled stores.
      * @param {Object} arg - arg object.
      
      **/
    getAppStores({}?: any): any;
    /**
      *
      * @summary: Application inventory enabled stores
      * @description: Application inventory enabled stores.
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Current company id
      * @param {string} arg.applicationId - Current application id
      
      **/
    getAppStoresPaginator({ companyId, applicationId }?: {
        companyId: string;
        applicationId: string;
    }): Paginator;
    /**
      *
      * @summary: Get application configuration
      * @description: Get application configuration for various features and data
      * @param {Object} arg - arg object.
      
      **/
    getInventoryConfig({}?: any): any;
    /**
     *
     * @summary: Update application configuration
     * @description: Update application configuration for various features and data
     * @param {Object} arg - arg object.
     * @param {ApplicationInventory} arg.body
     **/
    updateInventoryConfig({ body }?: {
        body: ApplicationInventory;
    }): any;
    /**
     *
     * @summary: Partially update application configuration
     * @description: Partially update application configuration for various features and data
     * @param {Object} arg - arg object.
     * @param {AppInventoryPartialUpdate} arg.body
     **/
    partiallyUpdateInventoryConfig({ body }?: {
        body: AppInventoryPartialUpdate;
    }): any;
    /**
      *
      * @summary: Get application enabled currency list
      * @description: Get application enabled currency list
      * @param {Object} arg - arg object.
      
      **/
    getAppCurrencyConfig({}?: any): any;
    /**
     *
     * @summary: Add initial application supported currency
     * @description: Add initial application supported currency for various features and data. Default INR will be enabled.
     * @param {Object} arg - arg object.
     * @param {AppSupportedCurrency} arg.body
     **/
    updateAppCurrencyConfig({ body }?: {
        body: AppSupportedCurrency;
    }): any;
    /**
     *
     * @summary: Get ordering store by filter
     * @description: Get ordering store by filter
     * @param {Object} arg - arg object.
     * @param {FilterOrderingStoreRequest} arg.body
     **/
    getOrderingStoresByFilter({ body }?: {
        body: FilterOrderingStoreRequest;
    }): any;
    /**
     *
     * @summary: Get ordering store by filter
     * @description: Get ordering store by filter
     * @param {Object} arg - arg object.
     * @param {string} arg.companyId - Current company id
     * @param {string} arg.applicationId - Current application id
     * @param {FilterOrderingStoreRequest} arg.body
     **/
    getOrderingStoresByFilterPaginator({ companyId, applicationId, body }?: {
        companyId: string;
        applicationId: string;
        body: FilterOrderingStoreRequest;
    }): Paginator;
    /**
     *
     * @summary: Add/Update ordering store config
     * @description: Add/Update ordering store config.
     * @param {Object} arg - arg object.
     * @param {OrderingStoreConfig} arg.body
     **/
    updateOrderingStoreConfig({ body }?: {
        body: OrderingStoreConfig;
    }): any;
    /**
      *
      * @summary: Get attached domain list
      * @description: Get attached domain list.
      * @param {Object} arg - arg object.
      
      **/
    getDomains({}?: any): any;
    /**
     *
     * @summary: Add new domain to application
     * @description: Add new domain to application.
     * @param {Object} arg - arg object.
     * @param {DomainAddRequest} arg.body
     **/
    addDomain({ body }?: {
        body: DomainAddRequest;
    }): any;
    /**
      *
      * @summary: Remove attached domain
      * @description: Remove attached domain.
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Domain _id
      
      **/
    removeDomainById({ id }?: {
        id: string;
    }): any;
    /**
     *
     * @summary: Change domain type
     * @description: Change a domain to Primary or Shortlink domain
     * @param {Object} arg - arg object.
     * @param {UpdateDomainTypeRequest} arg.body
     **/
    changeDomainType({ body }?: {
        body: UpdateDomainTypeRequest;
    }): any;
    /**
     *
     * @summary: Get domain connected status.
     * @description: Get domain connected status. Check if domain is live and mapped to appropriate IP to fynd servers.
     * @param {Object} arg - arg object.
     * @param {DomainStatusRequest} arg.body
     **/
    getDomainStatus({ body }?: {
        body: DomainStatusRequest;
    }): any;
    /**
      *
      * @summary: Get application data from id
      * @description: Get application data from id
      * @param {Object} arg - arg object.
      
      **/
    getApplicationById({}?: any): any;
}
declare class Cart {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
      *
      * @summary: Get with single coupon details or coupon list
      * @description: Get coupon list with pagination
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] -
      * @param {number} [arg.pageSize] -
      * @param {boolean} [arg.isArchived] -
      * @param {string} [arg.title] -
      * @param {boolean} [arg.isPublic] -
      * @param {boolean} [arg.isDisplay] -
      * @param {string} [arg.typeSlug] -
      * @param {string} [arg.code] -
      
      **/
    getCoupons({ pageNo, pageSize, isArchived, title, isPublic, isDisplay, typeSlug, code, }?: {
        pageNo?: number;
        pageSize?: number;
        isArchived?: boolean;
        title?: string;
        isPublic?: boolean;
        isDisplay?: boolean;
        typeSlug?: string;
        code?: string;
    }): any;
    /**
      *
      * @summary: Get with single coupon details or coupon list
      * @description: Get coupon list with pagination
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Current company id
      * @param {string} arg.applicationId - Current Application _id
      * @param {number} [arg.pageSize] -
      * @param {boolean} [arg.isArchived] -
      * @param {string} [arg.title] -
      * @param {boolean} [arg.isPublic] -
      * @param {boolean} [arg.isDisplay] -
      * @param {string} [arg.typeSlug] -
      * @param {string} [arg.code] -
      
      **/
    getCouponsPaginator({ companyId, applicationId, pageSize, isArchived, title, isPublic, isDisplay, typeSlug, code, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        isArchived?: boolean;
        title?: string;
        isPublic?: boolean;
        isDisplay?: boolean;
        typeSlug?: string;
        code?: string;
    }): Paginator;
    /**
     *
     * @summary: Create new coupon
     * @description: Create new coupon
     * @param {Object} arg - arg object.
     * @param {CouponAdd} arg.body
     **/
    createCoupon({ body }?: {
        body: CouponAdd;
    }): any;
    /**
      *
      * @summary: Get with single coupon details or coupon list
      * @description: Get single coupon details with `id` in path param
      * @param {Object} arg - arg object.
      * @param {string} arg.id -
      
      **/
    getCouponById({ id }?: {
        id: string;
    }): any;
    /**
     *
     * @summary: Update existing coupon configuration
     * @description: Update coupon with id sent in `id`
     * @param {Object} arg - arg object.
     * @param {string} arg.id -
     * @param {CouponUpdate} arg.body
     **/
    updateCoupon({ id, body }?: {
        id: string;
        body: CouponUpdate;
    }): any;
    /**
     *
     * @summary: Update coupon archive state and schedule
     * @description: Update archive/unarchive and change schedule for coupon
     * @param {Object} arg - arg object.
     * @param {string} arg.id -
     * @param {CouponPartialUpdate} arg.body
     **/
    updateCouponPartially({ id, body }?: {
        id: string;
        body: CouponPartialUpdate;
    }): any;
}
declare class Analytics {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
      *
      * @summary: Get statistics groups
      * @description: Get statistics groups
      * @param {Object} arg - arg object.
      
      **/
    getStatiscticsGroups({}?: any): any;
    /**
      *
      * @summary: Get statistics group components
      * @description: Get statistics group components
      * @param {Object} arg - arg object.
      * @param {string} arg.groupName - Group name
      
      **/
    getStatiscticsGroupComponents({ groupName }?: {
        groupName: string;
    }): any;
    /**
      *
      * @summary: Get component statistics csv
      * @description: Get component statistics csv
      * @param {Object} arg - arg object.
      * @param {string} arg.componentName - Component name
      
      **/
    getComponentStatsCSV({ componentName }?: {
        componentName: string;
    }): any;
    /**
      *
      * @summary: Get component statistics pdf
      * @description: Get component statistics pdf
      * @param {Object} arg - arg object.
      * @param {string} arg.componentName - Component name
      
      **/
    getComponentStatsPDF({ componentName }?: {
        componentName: string;
    }): any;
    /**
      *
      * @summary: Get component statistics
      * @description: Get component statistics
      * @param {Object} arg - arg object.
      * @param {string} arg.componentName - Component name
      
      **/
    getComponentStats({ componentName }?: {
        componentName: string;
    }): any;
    /**
      *
      * @summary: Get abandon carts list
      * @description: Get abandon carts list
      * @param {Object} arg - arg object.
      * @param {string} arg.from - From date
      * @param {string} arg.to - To date
      * @param {string} [arg.pageNo] - Current page number
      * @param {string} [arg.pageSize] - Current page size
      
      **/
    getAbandonCartList({ from, to, pageNo, pageSize }?: {
        from: string;
        to: string;
        pageNo?: string;
        pageSize?: string;
    }): any;
    /**
      *
      * @summary: Get abandon carts csv
      * @description: Get abandon carts csv
      * @param {Object} arg - arg object.
      * @param {string} arg.from - From date
      * @param {string} arg.to - To date
      
      **/
    getAbandonCartsCSV({ from, to }?: {
        from: string;
        to: string;
    }): any;
    /**
      *
      * @summary: Get abandon carts details
      * @description: Get abandon cart details
      * @param {Object} arg - arg object.
      * @param {string} arg.cartId - Cart Id
      
      **/
    getAbandonCartDetail({ cartId }?: {
        cartId: string;
    }): any;
}
type TicketList = {
    items?: Array<Ticket>;
    filters?: Filter;
    page?: Page;
};
type Page = {
    itemTotal?: number;
    nextId?: string;
    hasPrevious?: boolean;
    hasNext?: boolean;
    current?: number;
    type: string;
    size?: number;
};
type TicketHistoryList = {
    docs?: Array<TicketHistory>;
    limit?: number;
    page?: number;
    pages?: number;
    total?: number;
};
type CustomFormList = {
    docs?: Array<CustomForm>;
    limit?: number;
    page?: number;
    pages?: number;
    total?: number;
};
type CreateCustomFormPayload = {
    slug: string;
    title: string;
    inputs: Array<any>;
    description?: string;
    headerImage?: string;
    shouldNotify?: boolean;
    successMessage?: string;
    pollForAssignment?: PollForAssignment;
};
type EditCustomFormPayload = {
    title: string;
    inputs: Array<any>;
    description?: string;
    headerImage?: string;
    shouldNotify?: boolean;
    loginRequired?: boolean;
    successMessage?: string;
    pollForAssignment?: PollForAssignment;
};
type EditTicketPayload = {
    content?: TicketContent;
    category?: string;
    source?: string;
    status?: string;
    priority?: string;
    assignedTo?: AgentChangePayload;
    tags?: Array<string>;
};
type AgentChangePayload = {
    agentId: string;
};
type CreateVideoRoomResponse = {
    uniqueName: string;
};
type CloseVideoRoomResponse = {
    success: boolean;
};
type CreateVideoRoomPayload = {
    uniqueName: string;
    notify?: Array<any>;
};
type Filter = {
    priorities: Array<Priority>;
    categories?: Array<TicketCategory>;
    statuses: Array<Status>;
    assignees: Array<any>;
};
type TicketHistoryPayload = {
    value: any;
    type: string;
};
type CustomFormSubmissionPayload = {
    response: Array<KeyValue>;
};
type KeyValue = {
    key: string;
    value: string;
};
type GetTokenForVideoRoomResponse = {
    accessToken: string;
};
type GetParticipantsInsideVideoRoomResponse = {
    participants: Array<Participant>;
};
type Participant = {
    user?: UserSchema;
    identity?: string;
    status?: string;
};
type UserSchema = {
    firstName?: string;
    lastName?: string;
    phoneNumbers?: Array<PhoneNumber>;
    emails?: Array<Email>;
    gender?: string;
    active?: boolean;
    profilePicUrl?: string;
    username?: string;
    accountType?: string;
    uid?: string;
    debug?: Debug;
    hasOldPasswordHash?: boolean;
    id?: string;
    createdAt?: string;
    updatedAt?: string;
};
type PhoneNumber = {
    active?: boolean;
    primary?: boolean;
    verified?: boolean;
    phone?: string;
    countryCode?: number;
};
type Email = {
    primary?: boolean;
    verified?: boolean;
    email?: string;
    active?: boolean;
};
type Debug = {
    source?: string;
    platform?: string;
};
type SubmitCustomFormResponse = {
    ticket: Ticket;
};
type TicketContext = {
    applicationId?: string;
    companyId: string;
};
type CreatedOn = {
    userAgent: string;
};
type TicketAsset = {
    display?: string;
    value: string;
    type: string;
};
type TicketContent = {
    title: string;
    description?: string;
    attachments?: Array<TicketAsset>;
};
type AddTicketPayload = {
    status: string;
    priority: string;
    category: string;
    content: TicketContent;
};
type Priority = {
    key: string;
    display: string;
    color: string;
};
type Status = {
    key: string;
    display: string;
    color: string;
};
type TicketCategory = {
    key: string;
    display: string;
    form?: CustomForm;
};
type SubmitButton = {
    title: string;
    titleColor: string;
    backgroundColor: string;
};
type PollForAssignment = {
    duration: number;
    message: string;
    successMessage: string;
    failureMessage: string;
};
type CustomForm = {
    applicationId: string;
    slug: string;
    headerImage?: string;
    title: string;
    description?: string;
    loginRequired: boolean;
    shouldNotify: boolean;
    successMessage?: string;
    submitButton?: SubmitButton;
    inputs: Array<any>;
    createdOn?: CreatedOn;
    createdBy?: any;
    pollForAssignment?: PollForAssignment;
    id: string;
};
type TicketHistory = {
    type: string;
    value: any;
    ticketId: string;
    createdOn?: CreatedOn;
    createdBy?: any;
    id: string;
    updatedAt?: string;
    createdAt?: string;
};
type Ticket = {
    context?: TicketContext;
    createdOn?: CreatedOn;
    responseId?: string;
    content?: TicketContent;
    ticketId: string;
    category: TicketCategory;
    source: string;
    status: Status;
    priority: Priority;
    createdBy?: any;
    assignedTo?: any;
    tags?: Array<string>;
    customJson?: any;
    id?: string;
    updatedAt?: string;
    createdAt?: string;
};
type PaginationSchema = {
    size?: number;
    itemTotal?: number;
    hasNext?: boolean;
    type?: string;
    current?: number;
};
type ThemesListingResponseSchema = {
    items?: Array<ThemesSchema>;
    page?: PaginationSchema;
};
type AddThemeRequestSchema = {
    themeId?: string;
};
type UpgradableThemeSchema = {
    parentTheme?: string;
    appliedTheme?: string;
    upgrade?: boolean;
};
type FontsSchema = {
    items?: FontsSchemaItems;
    kind?: string;
};
type BlitzkriegApiErrorSchema = {
    message?: string;
};
type BlitzkriegNotFoundSchema = {
    message?: string;
};
type BlitzkriegInternalServerErrorSchema = {
    message?: string;
};
type FontsSchemaItems = {
    family?: string;
    variants?: Array<string>;
    subsets?: Array<string>;
    version?: string;
    lastModified?: string;
    files?: FontsSchemaItemsFiles;
    category?: string;
    kind?: string;
};
type FontsSchemaItemsFiles = {
    regular?: string;
    italic?: string;
    bold?: string;
};
type ThemesSchema = {
    application?: string;
    applied?: boolean;
    customized?: boolean;
    published?: boolean;
    archived?: boolean;
    createdAt?: string;
    updatedAt?: string;
    version?: string;
    parentThemeVersion?: string;
    parentTheme?: string;
    information?: Information;
    tags?: Array<string>;
    src?: Src;
    assets?: AssetsSchema;
    availablePages?: AvailablePages;
    availableSections?: Array<availableSectionSchema>;
    sections?: Array<sectionSchema>;
    constants?: any;
    styles?: any;
    config?: Config;
    settings?: any;
    font?: Font;
    id?: string;
    v?: number;
    colors?: Colors;
};
type pagesSchema = {
    text?: string;
    path?: string;
    type?: string;
    value?: string;
    sections?: Sections;
};
type availableSectionSchema = {
    blocks?: Blocks;
    name?: string;
    label?: string;
    props?: any;
};
type sectionSchema = {
    pageKey?: string;
    pageSections?: PageSections;
};
type Information = {
    images?: Images;
    features?: Array<string>;
    name?: string;
    description?: string;
};
type Images = {
    desktop?: Array<string>;
    android?: Array<string>;
    ios?: Array<string>;
    thumbnail?: Array<string>;
};
type Src = {
    link?: string;
};
type AssetsSchema = {
    umdJs?: UmdJs;
    commonJs?: CommonJs;
    css?: Css;
};
type UmdJs = {
    link?: string;
};
type CommonJs = {
    link?: string;
};
type Css = {
    link?: string;
};
type AvailablePages = {
    path?: string;
    type?: string;
    text?: string;
    value?: string;
    seo?: Seo;
    props?: any;
    sections?: Sections;
};
type Seo = {
    title?: string;
    description?: string;
};
type Sections = {
    attributes?: string;
};
type Config = {
    preset?: Preset;
    globalSchema?: GlobalSchema;
    current?: string;
    list?: ListSchema;
};
type Preset = {
    sections?: sectionSchema;
};
type GlobalSchema = {
    props?: any;
};
type ListSchema = {
    global?: any;
    page?: ConfigPage;
    name?: string;
};
type Colors = {
    bgColor?: string;
    primaryColor?: string;
    secondaryColor?: string;
    accentColor?: string;
    linkColor?: string;
    buttonSecondaryColor?: string;
};
type Custom = {
    props?: any;
};
type ConfigPage = {
    settings?: any;
    page?: string;
};
type Font = {
    family?: string;
    variants?: Variants;
};
type Variants = {
    medium?: Medium;
    semiBold?: SemiBold;
    bold?: Bold;
    light?: Light;
    regular?: Regular;
};
type Medium = {
    name?: string;
    file?: string;
};
type SemiBold = {
    name?: string;
    file?: string;
};
type Bold = {
    name?: string;
    file?: string;
};
type Light = {
    name?: string;
    file?: string;
};
type Regular = {
    name?: string;
    file?: string;
};
type Blocks = {
    type?: string;
    name?: string;
    props?: BlocksProps;
};
type BlocksProps = {
    id?: string;
    label?: string;
    type?: string;
};
type PageSections = {
    blocks?: PageSectionsBlocks;
    name?: string;
    label?: string;
    props?: any;
    preset?: any;
    predicate?: Predicate;
};
type PageSectionsBlocks = {
    type?: string;
    name?: string;
    props?: PageSectionsBlocksProps;
};
type PageSectionsBlocksProps = {
    id?: string;
    label?: string;
    type?: string;
};
type Predicate = {
    screen?: Screen;
    user?: PredicateUserSchema;
    route?: Route;
};
type Screen = {
    mobile?: boolean;
    desktop?: boolean;
    tablet?: boolean;
};
type PredicateUserSchema = {
    authenticated?: boolean;
    anonymous?: boolean;
};
type Route = {
    selected?: string;
    exactUrl?: string;
    query?: any;
};
type EditEmailRequestSchema = {
    email?: string;
};
type SendVerificationLinkMobileRequestSchema = {
    verified?: boolean;
    active?: boolean;
    countryCode?: string;
    phone?: string;
    primary?: boolean;
};
type EditMobileRequestSchema = {
    countryCode?: string;
    phone?: string;
};
type EditProfileRequestSchema = {
    firstName?: string;
    lastName?: string;
    mobile?: string;
    email?: string;
    gender?: string;
    dob?: string;
    profilePicUrl?: string;
    androidHash?: string;
    sender?: string;
    registerToken?: string;
};
type SendEmailOtpRequestSchema = {
    email?: string;
    action?: string;
    token?: string;
    registerToken?: string;
};
type VerifyOtpRequestSchema = {
    requestId?: string;
    registerToken?: string;
    otp?: string;
};
type SendMobileOtpRequestSchema = {
    mobile?: string;
    countryCode?: string;
    action?: string;
    token?: string;
    androidHash?: string;
    force?: string;
};
type UpdatePasswordRequestSchema = {
    oldPassword?: string;
    newPassword?: string;
};
type FormRegisterRequestSchema = {
    firstName?: string;
    lastName?: string;
    gender?: string;
    email?: string;
    password?: string;
    phone?: FormRegisterRequestSchemaPhone;
    registerToken?: string;
};
type TokenRequestBodySchema = {
    token?: string;
};
type ForgotPasswordRequestSchema = {
    code?: string;
    password?: string;
};
type CodeRequestBodySchema = {
    code?: string;
};
type SendResetPasswordEmailRequestSchema = {
    email?: string;
    captchaCode?: string;
};
type PasswordLoginRequestSchema = {
    captchaCode?: string;
    password?: string;
    username?: string;
};
type SendOtpRequestSchema = {
    countryCode?: string;
    captchaCode?: string;
    mobile?: string;
};
type OAuthRequestSchema = {
    isSignedIn?: boolean;
    oauth2?: OAuthRequestSchemaOauth2;
    profile?: OAuthRequestSchemaProfile;
};
type AuthSuccess = {
    registerToken?: string;
    userExists?: boolean;
    user?: AuthSuccessUser;
};
type SendOtpResponse = {
    resendTimer?: number;
    resendToken?: string;
    success?: boolean;
    requestId?: string;
    message?: string;
    mobile?: string;
    countryCode?: string;
};
type LoginSuccess = {
    user?: UserSchema;
};
type VerifyOtpSuccess = {
    user?: UserSchema;
    userExists?: boolean;
};
type ResetPasswordSuccess = {
    status?: string;
};
type RegisterFormSuccess = {
    resendTimer?: number;
    resendToken?: string;
    success?: boolean;
    requestId?: string;
    message?: string;
    mobile?: string;
    countryCode?: string;
};
type VerifyEmailSuccess = {
    message?: string;
};
type HasPasswordSuccess = {
    result?: boolean;
};
type LogoutSuccess = {
    logout?: boolean;
};
type OtpSuccess = {
    resendTimer?: number;
    resendToken?: string;
    success?: boolean;
    requestId?: string;
    message?: string;
    mobile?: string;
    countryCode?: string;
};
type EmailOtpSuccess = {
    resendToken?: string;
};
type SessionListSuccess = {
    sessions?: Array<string>;
};
type VerifyMobileOTPSuccess = {
    user?: UserSchema;
    verifyMobileLink?: boolean;
};
type VerifyEmailOTPSuccess = {
    user?: UserSchema;
    verifyEmailLink?: boolean;
};
type SendMobileVerifyLinkSuccess = {
    verifyMobileLink?: boolean;
};
type SendEmailVerifyLinkSuccess = {
    verifyEmailLink?: boolean;
};
type UserSearchResponseSchema = {
    users?: Array<UserSchema>;
};
type CustomerListResponseSchema = {
    items?: Array<UserSchema>;
    page?: PaginationSchema;
};
type UnauthorizedSchema = {
    message?: string;
};
type UnauthenticatedSchema = {
    authenticated?: boolean;
};
type NotFoundSchema = {
    message?: string;
};
type AuthenticationApiErrorSchema = {
    message?: string;
};
type ProfileEditSuccessSchema = {
    email?: string;
    verifyEmailOtp?: boolean;
    verifyEmailLink?: boolean;
    verifyMobileOtp?: boolean;
    user?: string;
    registerToken?: string;
    userExists?: boolean;
};
type FormRegisterRequestSchemaPhone = {
    countryCode?: string;
    mobile?: string;
};
type OAuthRequestSchemaOauth2 = {
    accessToken?: string;
    expiry?: number;
    refreshToken?: string;
};
type OAuthRequestSchemaProfile = {
    lastName?: string;
    image?: string;
    id?: string;
    email?: string;
    fullName?: string;
    firstName?: string;
};
type AuthSuccessUser = {
    firstName?: string;
    lastName?: string;
    debug?: AuthSuccessUserDebug;
    active?: boolean;
    emails?: AuthSuccessUserEmails;
};
type AuthSuccessUserDebug = {
    platform?: string;
};
type AuthSuccessUserEmails = {
    email?: string;
    verified?: boolean;
    primary?: boolean;
    active?: boolean;
};
type PlatformSchema = {
    display?: string;
    lookAndFeel?: LookAndFeel;
    updatedAt?: string;
    active?: boolean;
    forgotPassword?: boolean;
    login?: Login;
    skipCaptcha?: boolean;
    name?: string;
    meta?: MetaSchema;
    id?: string;
    social?: Social;
    requiredFields?: RequiredFields;
    registerRequiredFields?: RegisterRequiredFields;
    skipLogin?: boolean;
    flashCard?: FlashCard;
    subtext?: string;
    socialTokens?: SocialTokens;
    createdAt?: string;
    register?: boolean;
};
type LookAndFeel = {
    cardPosition?: string;
    backgroundColor?: string;
};
type Login = {
    password?: boolean;
    otp?: boolean;
};
type MetaSchema = {
    fyndDefault?: boolean;
};
type Social = {
    accountKit?: boolean;
    facebook?: boolean;
    google?: boolean;
};
type RequiredFields = {
    email?: Email;
    mobile?: Mobile;
};
type Mobile = {
    isRequired?: boolean;
    level?: string;
};
type RegisterRequiredFields = {
    email?: RegisterRequiredFieldsEmail;
    mobile?: RegisterRequiredFieldsMobile;
};
type RegisterRequiredFieldsEmail = {
    isRequired?: boolean;
    level?: string;
};
type RegisterRequiredFieldsMobile = {
    isRequired?: boolean;
    level?: string;
};
type FlashCard = {
    text?: string;
    textColor?: string;
    backgroundColor?: string;
};
type SocialTokens = {
    facebook?: Facebook;
    accountKit?: Accountkit;
    google?: Google;
};
type Facebook = {
    appId?: string;
};
type Accountkit = {
    appId?: string;
};
type Google = {
    appId?: string;
};
type StatsImported = {
    count?: number;
};
type StatsProcessedEmail = {
    success?: number;
    failed?: number;
    suppressed?: number;
};
type StatsProcessedSms = {
    success?: number;
    failed?: number;
    suppressed?: number;
};
type StatsProcessed = {
    email?: StatsProcessedEmail;
    sms?: StatsProcessedSms;
};
type Stats = {
    id?: string;
    imported?: any;
    processed?: any;
};
type GetStats = {
    items?: Array<Stats>;
};
type CampaignReq = {
    description?: string;
    tags?: Array<string>;
    headers?: Array<string>;
    isActive?: boolean;
    name?: string;
    fileUrl?: string;
    type?: string;
    recordsCount?: number;
    application?: string;
};
type RecipientHeaders = {
    email?: string;
};
type CampaignEmailTemplate = {
    key?: string;
    value?: string;
};
type CampignEmailProvider = {
    id?: string;
    fromName?: string;
    fromEmail?: string;
};
type CampaignEmail = {
    template?: CampaignEmailTemplate;
    provider?: CampignEmailProvider;
};
type Campaign = {
    recipientHeaders?: RecipientHeaders;
    email?: CampaignEmail;
    description?: string;
    tags?: Array<any>;
    isActive?: boolean;
    id?: string;
    datasource?: string;
    type?: string;
    name?: string;
    application?: string;
    createdAt?: string;
    updatedAt?: string;
    slug?: string;
    v?: number;
};
type Campaigns = {
    items?: Array<Campaign>;
    page?: Page;
};
type BigqueryHeadersReq = {
    query?: string;
    type?: string;
};
type BigqueryHeadersResHeaders = {
    name?: string;
    type?: string;
};
type BigqueryHeadersRes = {
    headers?: Array<BigqueryHeadersResHeaders>;
};
type GetNRecordsCsvReq = {
    url?: string;
    header?: boolean;
    count?: number;
};
type GetNRecordsCsvResItems = {
    phoneNumber?: string;
    email?: string;
    firstname?: string;
    lastname?: string;
    orderid?: string;
};
type GetNRecordsCsvRes = {
    items?: Array<GetNRecordsCsvResItems>;
};
type AudienceReq = {
    description?: string;
    tags?: Array<string>;
    headers?: Array<string>;
    isActive?: boolean;
    name?: string;
    fileUrl?: string;
    type?: string;
    recordsCount?: number;
    application?: string;
};
type Audience = {
    description?: string;
    tags?: Array<string>;
    headers?: Array<string>;
    isActive?: boolean;
    id?: string;
    name?: string;
    fileUrl?: string;
    type?: string;
    recordsCount?: number;
    application?: string;
    createdAt?: string;
    updatedAt?: string;
    slug?: string;
    v?: number;
};
type Audiences = {
    items?: Array<Audience>;
    page?: Page;
};
type EmailProviderReqFrom = {
    name?: string;
    email?: string;
    isDefault?: boolean;
};
type EmailProviderReq = {
    name?: string;
    description?: string;
    apiKey?: string;
    type?: string;
    provider?: string;
    from?: Array<EmailProviderReqFrom>;
};
type EmailProvider = {
    type?: string;
    provider?: string;
    from?: Array<EmailProviderReqFrom>;
    id?: string;
    name?: string;
    description?: string;
    apiKey?: string;
    application?: string;
    createdAt?: string;
    updatedAt?: string;
    slug?: string;
    v?: number;
};
type EmailProviders = {
    items?: Array<EmailProvider>;
    page?: Page;
};
type EmailTemplateDeleteSuccessRes = {
    success?: boolean;
    message?: string;
};
type EmailTemplateDeleteFailureRes = {
    success?: boolean;
    message?: string;
};
type EmailTemplateKeys = {
    to?: string;
    cc?: string;
    bcc?: string;
};
type EmailTemplateHeaders = {
    key?: string;
    value?: string;
};
type EmailTemplateReq = {
    name?: string;
    description?: string;
    keys?: EmailTemplateKeys;
    from?: string;
    staticTo?: Array<string>;
    staticCc?: Array<string>;
    staticBcc?: Array<string>;
    replyTo?: string;
    headers?: Array<EmailTemplateHeaders>;
    subject?: TemplateAndType;
    html?: TemplateAndType;
    text?: TemplateAndType;
    attachments?: Array<any>;
    priority?: string;
};
type TemplateAndType = {
    templateType?: string;
    template?: string;
};
type EmailTemplateRes = {
    isSystem?: boolean;
    isInternal?: boolean;
    description?: string;
    staticTo?: Array<string>;
    staticCc?: Array<string>;
    staticBcc?: Array<string>;
    tags?: Array<any>;
    priority?: string;
    published?: boolean;
    id?: string;
    name?: string;
    keys?: EmailTemplateKeys;
    from?: string;
    replyTo?: string;
    headers?: Array<EmailTemplateHeaders>;
    subject?: TemplateAndType;
    html?: TemplateAndType;
    text?: TemplateAndType;
    attachments?: Array<any>;
    createdAt?: string;
    updatedAt?: string;
    slug?: string;
    v?: number;
};
type EmailTemplate = {
    isSystem?: boolean;
    isInternal?: boolean;
    description?: string;
    staticTo?: Array<any>;
    staticCc?: Array<any>;
    staticBcc?: Array<any>;
    tags?: Array<any>;
    priority?: string;
    published?: boolean;
    id?: string;
    slug?: string;
    name?: string;
    from?: string;
    fromName?: string;
    subject?: TemplateAndType;
    html?: TemplateAndType;
    text?: TemplateAndType;
    headers?: Array<any>;
    attachments?: Array<any>;
    createdAt?: string;
    updatedAt?: string;
    v?: number;
};
type SystemEmailTemplate = {
    isSystem?: boolean;
    isInternal?: boolean;
    description?: string;
    staticTo?: Array<any>;
    staticCc?: Array<any>;
    staticBcc?: Array<any>;
    tags?: Array<any>;
    priority?: string;
    published?: boolean;
    id?: string;
    slug?: string;
    name?: string;
    from?: string;
    fromName?: string;
    subject?: TemplateAndType;
    html?: TemplateAndType;
    text?: TemplateAndType;
    headers?: Array<any>;
    attachments?: Array<any>;
    createdAt?: string;
    updatedAt?: string;
    v?: number;
};
type EmailTemplates = {
    items?: Array<EmailTemplate>;
    page?: Page;
};
type SystemEmailTemplates = {
    items?: Array<SystemEmailTemplate>;
    page?: Page;
};
type EventSubscriptionTemplateSms = {
    subscribed?: boolean;
    template?: string;
};
type EventSubscriptionTemplateEmail = {
    subscribed?: boolean;
    template?: string;
};
type EventSubscriptionTemplate = {
    sms?: EventSubscriptionTemplateSms;
    email?: EventSubscriptionTemplateEmail;
};
type EventSubscription = {
    template?: EventSubscriptionTemplate;
    isDefault?: boolean;
    id?: string;
    application?: string;
    event?: string;
    slug?: string;
    createdAt?: string;
    updatedAt?: string;
    v?: number;
};
type EventSubscriptions = {
    items?: Array<EventSubscription>;
    page?: Page;
};
type TriggerJobResponse = {
    status?: number;
};
type TriggerJobRequest = {
    jobId?: string;
};
type Job = {
    completed?: boolean;
    isActive?: boolean;
    id?: string;
    campaign?: string;
    application?: string;
    createdAt?: string;
    updatedAt?: string;
    v?: number;
};
type Jobs = {
    items?: Array<any>;
    page?: Page;
};
type JobLog = {
    imported?: any;
    processed?: any;
    id?: string;
    job?: string;
    campaign?: string;
    createdAt?: string;
    updatedAt?: string;
    v?: number;
};
type JobLogs = {
    items?: Array<JobLog>;
    page?: Page;
};
type LogEmail = {
    template?: string;
};
type LogPushnotification = {
    pushtokens?: Array<string>;
};
type LogMeta = {
    type?: string;
    identifier?: string;
    key?: string;
    offset?: string;
    partition?: string;
    topic?: string;
};
type Log = {
    email?: LogEmail;
    pushnotification?: LogPushnotification;
    meta?: LogMeta;
    id?: string;
    application?: string;
    service?: string;
    step?: string;
    status?: string;
    data?: any;
    expireAt?: string;
    createdAt?: string;
};
type Logs = {
    items?: Array<Log>;
    page?: Page;
};
type PushtokenReq = {
    action?: string;
    bundleIdentifier?: string;
    pushToken?: string;
    uniqueDeviceId?: string;
};
type PushtokenRes = {
    id?: string;
    bundleIdentifier?: string;
    pushToken?: string;
    uniqueDeviceId?: string;
    type?: string;
    platform?: string;
    applicationId?: string;
    userId?: string;
    createdAt?: string;
    updatedAt?: string;
    expiredAt?: string;
};
type SmsProviderReq = {
    name?: string;
    description?: string;
    sender?: string;
    username?: string;
    authkey?: string;
    type?: string;
    provider?: string;
};
type SmsProvider = {
    rpt?: number;
    type?: string;
    provider?: string;
    id?: string;
    name?: string;
    description?: string;
    sender?: string;
    username?: string;
    authkey?: string;
    application?: string;
    createdAt?: string;
    updatedAt?: string;
    slug?: string;
    v?: number;
};
type SmsProviders = {
    items?: Array<SmsProvider>;
    page?: Page;
};
type SmsTemplateDeleteSuccessRes = {
    success?: boolean;
    message?: string;
};
type SmsTemplateDeleteFailureRes = {
    success?: boolean;
    message?: string;
};
type SmsTemplateMessage = {
    templateType?: string;
    template?: string;
};
type SmsTemplateReq = {
    name?: string;
    description?: string;
    message?: SmsTemplateMessage;
    templateVariables?: any;
    attachments?: Array<any>;
    priority?: string;
};
type SmsTemplateRes = {
    isSystem?: boolean;
    isInternal?: boolean;
    description?: string;
    tags?: Array<any>;
    priority?: string;
    published?: boolean;
    id?: string;
    name?: string;
    message?: SmsTemplateMessage;
    templateVariables?: any;
    createdAt?: string;
    updatedAt?: string;
    slug?: string;
    v?: number;
};
type SmsTemplate = {
    isSystem?: boolean;
    isInternal?: boolean;
    description?: string;
    priority?: string;
    tags?: Array<any>;
    published?: boolean;
    id?: string;
    slug?: string;
    name?: string;
    message?: SmsTemplateMessage;
    templateVariables?: any;
    createdAt?: string;
    updatedAt?: string;
    v?: number;
};
type SystemSmsTemplate = {
    isSystem?: boolean;
    isInternal?: boolean;
    description?: string;
    tags?: Array<any>;
    priority?: string;
    published?: boolean;
    id?: string;
    slug?: string;
    name?: string;
    message?: SmsTemplateMessage;
    templateVariables?: any;
    createdAt?: string;
    updatedAt?: string;
    v?: number;
};
type SmsTemplates = {
    items?: Array<SmsTemplate>;
    page?: Page;
};
type SystemSmsTemplates = {
    items?: Array<SystemSmsTemplate>;
    page?: Page;
};
type Notification = {
    title?: string;
    body?: string;
    subtitle?: string;
    icon?: string;
    deeplink?: string;
    clickAction?: string;
};
type SystemNotificationUser = {
    type?: string;
    value?: string;
};
type SystemNotificationSettings = {
    sound?: boolean;
    priority?: string;
    timeToLive?: string;
};
type SystemNotification = {
    notification?: Notification;
    user?: SystemNotificationUser;
    settings?: SystemNotificationUser;
    id?: string;
    group?: string;
    createdAt?: string;
};
type SystemNotificationsPage = {
    type?: string;
    current?: number;
    size?: number;
    itemTotal?: number;
    hasNext?: boolean;
};
type SystemNotifications = {
    items?: Array<SystemNotification>;
    lastReadAnchor?: number;
    page?: Page;
};
type PaymentGatewayConfigResponse = {
    created: boolean;
    aggregators?: Array<any>;
    excludedFields: Array<string>;
    success: boolean;
    displayFields: Array<string>;
    appId: string;
};
type ErrorCodeDescription = {
    description: string;
    code: string;
    success: boolean;
};
type PaymentGatewayConfig = {
    configType: string;
    secret: string;
    key: string;
    isActive?: boolean;
    merchantSalt: string;
};
type PaymentGatewayConfigRequest = {
    aggregatorName?: PaymentGatewayConfig;
    isActive?: boolean;
    appId: string;
};
type PaymentGatewayToBeReviewed = {
    aggregator: Array<string>;
    success: boolean;
};
type ErrorCodeAndDescription = {
    description: string;
    code: string;
};
type HttpErrorCodeAndResponse = {
    error: ErrorCodeAndDescription;
    success: boolean;
};
type PaymentModeLogo = {
    large: string;
    small: string;
};
type PaymentModeList = {
    retryCount?: number;
    expMonth?: number;
    intentFlow?: string;
    cardFingerprint?: string;
    fyndVpa?: string;
    cardReference?: string;
    displayName?: string;
    intentAppErrorList?: Array<string>;
    nickname?: string;
    cardNumber?: string;
    cardBrandImage?: string;
    cardToken?: string;
    displayPriority?: number;
    cardId?: string;
    cardIsin?: string;
    code?: string;
    aggregatorName: string;
    cardIssuer?: string;
    cardBrand?: string;
    expYear?: number;
    cardType?: string;
    merchantCode?: string;
    name?: string;
    timeout?: number;
    logoUrl?: PaymentModeLogo;
    expired?: boolean;
    cardName?: string;
};
type RootPaymentMode = {
    name: string;
    aggregatorName?: string;
    addCardEnabled?: boolean;
    list?: Array<PaymentModeList>;
    displayName: string;
    displayPriority: number;
    anonymousEnable?: boolean;
};
type PaymentOptions = {
    paymentOption: Array<RootPaymentMode>;
};
type PaymentOptionsResponse = {
    success: boolean;
    paymentOptions: PaymentOptions;
};
type PayoutsResponse = {
    uniqueTransferNo: any;
    transferType: string;
    moreAttributes: any;
    customers: any;
    isDefault: boolean;
    payoutsAggregators: Array<any>;
    isActive: boolean;
};
type PayoutRequest = {
    uniqueExternalId: string;
    transferType: string;
    aggregator: string;
    users: any;
    bankDetails: any;
    isActive: boolean;
};
type PayoutResponse = {
    uniqueTransferNo: string;
    created: boolean;
    paymentStatus: string;
    users: any;
    aggregator: string;
    transferType: string;
    payouts: any;
    bankDetails: any;
    success: boolean;
    isActive: boolean;
};
type UpdatePayoutResponse = {
    isActive: boolean;
    success: boolean;
    isDefault: boolean;
};
type UpdatePayoutRequest = {
    isActive: boolean;
    uniqueExternalId: string;
    isDefault: boolean;
};
type DeletePayoutResponse = {
    success: boolean;
};
type SubscriptionPaymentMethodResponse = {
    success: boolean;
    data: Array<any>;
};
type DeleteSubscriptionPaymentMethodResponse = {
    success: boolean;
};
type SubscriptionConfigResponse = {
    config: any;
    aggregator: string;
    success: boolean;
};
type SaveSubscriptionSetupIntentRequest = {
    uniqueExternalId: string;
};
type SaveSubscriptionSetupIntentResponse = {
    success: boolean;
    data: any;
};
type GetActivityStatus = {
    activityHistory: ActivityHistory;
};
type ActivityHistory = {
    createdat?: string;
    message?: string;
    type?: string;
    user?: string;
};
type FailedOrders = {
    orders: FailOrder;
};
type FailOrder = {
    updatedAt?: string;
    id?: string;
    reason?: string;
    marketplaceOrder?: MarketplaceOrder;
    marketplaceOrderId?: string;
    createdAt?: string;
    appId?: string;
    marketplace?: string;
    companyId?: number;
};
type MarketplaceOrder = {
    orderStatusUrl?: string;
    adminGraphqlApiId?: string;
    email?: string;
    test?: boolean;
    note?: string;
    totalPrice?: string;
    appId?: number;
    totalDiscountsSet?: TotalDiscountsSet;
    totalPriceSet?: TotalPriceSet;
    totalTaxSet?: TotalTaxSet;
    gateway?: string;
    name?: string;
    subtotalPriceSet?: SubtotalPriceSet;
    number?: number;
    buyerAcceptsMarketing?: boolean;
    contactEmail?: string;
    token?: string;
    sourceName?: string;
    paymentGatewayNames?: Array<any>;
    presentmentCurrency?: string;
    subtotalPrice?: string;
    processedAt?: string;
    orderNumber?: number;
    totalTipReceived?: string;
    id?: number;
    confirmed?: boolean;
    currency?: string;
    totalLineItemsPrice?: string;
    lineItems?: LineItems;
    createdAt?: string;
    updatedAt?: string;
    totalWeight?: number;
    billingAddress?: BillingAddress;
    totalShippingPriceSet?: TotalShippingPriceSet;
    customer?: Customer;
    totalDiscounts?: string;
    totalLineItemsPriceSet?: TotalLineItemsPriceSet;
    tags?: string;
    totalPriceUsd?: string;
    userId?: number;
    totalTax?: string;
    processingMethod?: string;
    shippingAddress?: ShippingAddress;
    taxesIncluded?: boolean;
    financialStatus?: string;
};
type TotalDiscountsSet = {
    presentmentMoney?: PresentmentMoney;
    shopMoney?: ShopMoney;
};
type PresentmentMoney = {
    amount?: string;
    currencyCode?: string;
};
type ShopMoney = {
    amount?: string;
    currencyCode?: string;
};
type TotalPriceSet = {
    shopMoney?: TotalPriceSetShopMoney;
    presentmentMoney?: TotalPriceSetPresentmentMoney;
};
type TotalPriceSetShopMoney = {
    amount?: string;
    currencyCode?: string;
};
type TotalPriceSetPresentmentMoney = {
    amount?: string;
    currencyCode?: string;
};
type TotalTaxSet = {
    shopMoney?: TotalTaxSetShopMoney;
    presentmentMoney?: TotalTaxSetPresentmentMoney;
};
type TotalTaxSetShopMoney = {
    amount?: string;
    currencyCode?: string;
};
type TotalTaxSetPresentmentMoney = {
    amount?: string;
    currencyCode?: string;
};
type SubtotalPriceSet = {
    shopMoney?: SubtotalPriceSetShopMoney;
    presentmentMoney?: SubtotalPriceSetPresentmentMoney;
};
type SubtotalPriceSetShopMoney = {
    amount?: string;
    currencyCode?: string;
};
type SubtotalPriceSetPresentmentMoney = {
    amount?: string;
    currencyCode?: string;
};
type LineItems = {
    sku?: string;
    fulfillableQuantity?: number;
    grams?: number;
    totalDiscount?: string;
    article?: LineItemsArticle;
    title?: string;
    variantInventoryManagement?: string;
    id?: number;
    variantId?: number;
    variantTitle?: string;
    productExists?: boolean;
    price?: string;
    adminGraphqlApiId?: string;
    quantity?: number;
    vendor?: string;
    fulfillmentService?: string;
    taxable?: boolean;
    name?: string;
    productId?: number;
    priceSet?: PriceSet;
    taxLines?: TaxLines;
    requiresShipping?: boolean;
    giftCard?: boolean;
    totalDiscountSet?: TotalDiscountSet;
};
type LineItemsArticle = {
    quantities?: Quantities;
    oldArticleUid?: string;
    totalQuantity?: number;
    manufacturer?: Manufacturer;
    price?: ArticlePrice;
    trackInventory?: boolean;
    company?: Company;
    isActive?: boolean;
    dateMeta?: FailOrderDateMeta;
    fragile?: boolean;
    marketplaceIdentifiers?: MarketplaceIdentifiers;
    size?: string;
    isSet?: boolean;
    dimension?: Dimension;
    weight?: Weight;
    store?: Store;
    meta?: ArticleMeta;
    uid?: string;
    brand?: ArticleBrand;
    itemId?: number;
    fyndArticleCode?: string;
    id?: string;
    identifier?: LineItemsArticleIdentifier;
    sellerIdentifier?: string;
    fyndItemCode?: string;
    countryOfOrigin?: string;
};
type Quantities = {
    notAvailable?: NotAvailable;
    sellable?: Sellable;
    orderCommitted?: OrderCommitted;
    damaged?: Damaged;
};
type NotAvailable = {
    count?: number;
    updatedAt?: string;
};
type Sellable = {
    count?: number;
    updatedAt?: string;
};
type OrderCommitted = {
    count?: number;
    updatedAt?: string;
};
type Damaged = {
    updatedAt?: string;
    count?: number;
};
type Manufacturer = {
    isDefault?: boolean;
    address?: string;
    name?: string;
};
type ArticlePrice = {
    marked?: number;
    currency?: string;
    effective?: number;
    transfer?: number;
};
type Company = {
    id?: number;
    companyType?: string;
    businessType?: string;
    companyName?: string;
    createdOn?: string;
    panNo?: string;
    returnAllowed?: boolean;
    meta?: string;
    exchangeAllowed?: boolean;
    agreementStartDate?: string;
    exchangeWithinDays?: number;
    paymentProcesingCharge?: number;
    fyndAFitAvailable?: boolean;
    modifiedOn?: string;
    returnWithinDays?: number;
};
type FailOrderDateMeta = {
    addedOnStore?: string;
    inventoryUpdatedOn?: string;
    createdOn?: string;
    modifiedOn?: string;
};
type MarketplaceIdentifiers = {
    tatacliqLuxury?: TatacliqLuxury;
};
type TatacliqLuxury = {
    sku?: string;
};
type Dimension = {
    height?: number;
    width?: number;
    unit?: string;
    length?: number;
    isDefault?: boolean;
};
type Weight = {
    isDefault?: boolean;
    unit?: string;
    shipping?: number;
};
type Store = {
    id?: number;
};
type ArticleMeta = {
    service?: string;
};
type ArticleBrand = {
    name?: string;
    id?: number;
};
type LineItemsArticleIdentifier = {
    skuCode?: string;
};
type PriceSet = {
    shopMoney?: PriceSetShopMoney;
    presentmentMoney?: PriceSetPresentmentMoney;
};
type PriceSetShopMoney = {
    amount?: string;
    currencyCode?: string;
};
type PriceSetPresentmentMoney = {
    amount?: string;
    currencyCode?: string;
};
type TaxLines = {
    title?: string;
    price?: string;
    rate?: number;
    priceSet?: TaxLinesPriceSet;
};
type TaxLinesPriceSet = {
    shopMoney?: TaxLinesPriceSetShopMoney;
    presentmentMoney?: TaxLinesPriceSetPresentmentMoney;
};
type TaxLinesPriceSetShopMoney = {
    amount?: string;
    currencyCode?: string;
};
type TaxLinesPriceSetPresentmentMoney = {
    currencyCode?: string;
    amount?: string;
};
type TotalDiscountSet = {
    presentmentMoney?: TotalDiscountSetPresentmentMoney;
    shopMoney?: TotalDiscountSetShopMoney;
};
type TotalDiscountSetPresentmentMoney = {
    amount?: string;
    currencyCode?: string;
};
type TotalDiscountSetShopMoney = {
    amount?: string;
    currencyCode?: string;
};
type BillingAddress = {
    address1?: string;
    city?: string;
    zip?: string;
    lastName?: string;
    address2?: string;
    longitude?: number;
    provinceCode?: string;
    phone?: string;
    company?: string;
    latitude?: number;
    name?: string;
    country?: string;
    countryCode?: string;
    firstName?: string;
    province?: string;
};
type TotalShippingPriceSet = {
    shopMoney?: TotalShippingPriceSetShopMoney;
    presentmentMoney?: TotalShippingPriceSetPresentmentMoney;
};
type TotalShippingPriceSetShopMoney = {
    amount?: string;
    currencyCode?: string;
};
type TotalShippingPriceSetPresentmentMoney = {
    amount?: string;
    currencyCode?: string;
};
type Customer = {
    createdAt?: string;
    id?: number;
    lastName?: string;
    state?: string;
    lastOrderId?: number;
    note?: string;
    verifiedEmail?: boolean;
    phone?: string;
    acceptsMarketing?: boolean;
    firstName?: string;
    tags?: string;
    lastOrderName?: string;
    ordersCount?: number;
    totalSpent?: string;
    taxExempt?: boolean;
    currency?: string;
    acceptsMarketingUpdatedAt?: string;
    email?: string;
    updatedAt?: string;
    adminGraphqlApiId?: string;
    defaultAddress?: DefaultAddress;
};
type DefaultAddress = {
    lastName?: string;
    name?: string;
    provinceCode?: string;
    countryCode?: string;
    isDefault?: boolean;
    id?: number;
    customerId?: number;
    firstName?: string;
    address1?: string;
    phone?: string;
    countryName?: string;
    company?: string;
    address2?: string;
    city?: string;
    province?: string;
    country?: string;
    zip?: string;
};
type TotalLineItemsPriceSet = {
    shopMoney?: TotalLineItemsPriceSetShopMoney;
    presentmentMoney?: TotalLineItemsPriceSetPresentmentMoney;
};
type TotalLineItemsPriceSetShopMoney = {
    amount?: string;
    currencyCode?: string;
};
type TotalLineItemsPriceSetPresentmentMoney = {
    amount?: string;
    currencyCode?: string;
};
type ShippingAddress = {
    address1?: string;
    zip?: string;
    address2?: string;
    countryCode?: string;
    country?: string;
    lastName?: string;
    latitude?: number;
    provinceCode?: string;
    firstName?: string;
    phone?: string;
    province?: string;
    longitude?: number;
    city?: string;
    company?: string;
    name?: string;
};
type OrderListing = {
    items: Array<OrderItems>;
    filters: Filters;
    nextOrderStatus: NextOrderStatus;
    page: PlatformOrderPage;
    appliedFilters: AppliedFilters;
};
type OrderItems = {
    user?: PlatformOrderUserInfo;
    deliveryAddress?: PlatformDeliveryAddress;
    channel?: Channel;
    breakupValues?: PlatformBreakupValues;
    id?: string;
    application?: PlatformApplication;
    shipments?: PlatformShipment;
    createdAt?: string;
    totalShipmentsInOrder?: number;
    payments?: ItemsPayments;
};
type PlatformOrderUserInfo = {
    mobile?: string;
    firstName?: string;
    gender?: string;
    email?: string;
    lastName?: string;
    isAnonymousUser?: boolean;
    uid?: number;
    avisUserId?: string;
};
type PlatformDeliveryAddress = {
    area?: string;
    state?: string;
    country?: string;
    version?: string;
    address1?: string;
    latitude?: number;
    updatedAt?: string;
    city?: string;
    landmark?: string;
    createdAt?: string;
    name?: string;
    address?: string;
    phone?: string;
    longitude?: number;
    addressType?: string;
    email?: string;
    pincode?: string;
    address2?: string;
    contactPerson?: string;
    addressCategory?: string;
};
type Channel = {
    name?: string;
    logo?: string;
};
type PlatformBreakupValues = {
    display?: string;
    value?: number;
    name?: string;
};
type PlatformApplication = {
    name?: string;
    owner?: string;
    postOrderReassignment?: boolean;
    id?: string;
    description?: string;
    dpAssignment?: boolean;
    articleAssignment?: ArticleAssignment;
    forceReassignment?: boolean;
    token?: string;
    secret?: string;
};
type ArticleAssignment = {
    strategy?: string;
    level?: string;
};
type PlatformShipment = {
    status?: PlatformShipmentStatus;
    bags?: Bags;
    prices?: ShipmentPrices;
    breakupValues?: ShipmentBreakupValues;
    id?: string;
    dpDetails?: DpDetails;
    invoice?: ShipmentInvoice;
    fulfillingStore?: PlatformFulfillingStore;
    payments?: Payments;
    gst?: ShipmentGst;
    company?: Company;
    brand?: PlatformShipmentBrand;
    coupon?: any;
    orderSource?: string;
    isNotFyndSource?: boolean;
    comment?: string;
    promise?: Promise;
    trackingDetails?: ShipmentTrackingDetails;
    isFyndCoupon?: boolean;
    orderType?: string;
    user?: ShipmentUser;
};
type PlatformShipmentStatus = {
    id?: number;
    bagList?: Array<number>;
    createdAt?: string;
    status?: string;
    name?: string;
    progress?: number;
    shipmentId?: string;
    currentShipmentStatus?: string;
    colorCode?: string;
};
type Bags = {
    financialBreakup?: Array<BagFinancialBreakup>;
    status?: BagCurrStatus;
    item?: BagItem;
    article?: BagArticle;
    id?: number;
    prices?: BagPrices;
    gstDetails?: GstDetails;
    breakupValues?: BagBreakupValues;
    updateTime?: number;
    currentStatus?: BagCurrentStatus;
    bagStatus?: BagStatus;
};
type BagFinancialBreakup = {
    valueOfGood?: number;
    hsnCode?: string;
    priceEffective?: number;
    codCharges?: number;
    gstFee?: string;
    fyndCredits?: number;
    refundAmount?: number;
    cashbackApplied?: number;
    transferPrice?: number;
    amountPaidRoundoff?: number;
    couponValue?: number;
    amountPaid?: number;
    gstTaxPercentage?: number;
    size?: string;
    totalUnits?: number;
    discount?: number;
    couponEffectiveDiscount?: number;
    cashback?: number;
    promotionEffectiveDiscount?: number;
    gstTag?: string;
    deliveryCharge?: number;
    refundCredit?: number;
    priceMarked?: number;
    identifiers?: Identifiers;
    itemName?: string;
    addedToFyndCash?: boolean;
    brandCalculatedAmount?: number;
};
type Identifiers = {
    ean?: string;
};
type BagCurrStatus = {
    enableTracking?: boolean;
    isCustomerReturnAllowed?: boolean;
    isActive?: boolean;
    isReturnable?: boolean;
    canBeCancelled?: boolean;
};
type BagItem = {
    id?: number;
    size?: string;
    slugKey?: string;
    canReturn?: boolean;
    brandId?: number;
    l2Category?: Array<string>;
    name?: string;
    code?: string;
    canCancel?: boolean;
    attributes?: BagItemAttributes;
    l3CategoryName?: string;
    l3Category?: number;
    l1Category?: Array<string>;
    image?: Array<string>;
    brand?: string;
    lastUpdatedAt?: string;
};
type BagItemAttributes = {
    itemCode?: string;
    brandName?: string;
    countryOfOrigin?: string;
};
type BagArticle = {
    identifiers?: ArticleIdentifiers;
    espModified?: boolean;
    isSet?: boolean;
    size?: string;
    code?: string;
    set?: Set;
    sellerIdentifier?: string;
    returnConfig?: BagArticleReturnConfig;
    id?: string;
    uid?: string;
    childDetails?: any;
};
type ArticleIdentifiers = {
    ean?: string;
};
type Set = {
    quantity?: number;
    sizeDistribution?: SetSizeDistribution;
};
type SetSizeDistribution = {
    sizes?: Sizes;
};
type Sizes = {
    size?: string;
    pieces?: number;
};
type BagArticleReturnConfig = {
    time?: number;
    unit?: string;
    returnable?: boolean;
};
type ShipmentPrices = {
    refundAmount?: number;
    cashbackApplied?: number;
    transferPrice?: number;
    couponValue?: number;
    amountPaid?: number;
    deliveryCharge?: number;
    couponEffectiveDiscount?: number;
    codCharges?: number;
    refundCredit?: number;
    addedToFyndCash?: boolean;
    gstTaxPercentage?: number;
    priceMarked?: number;
    priceEffective?: number;
    discount?: number;
    promotionEffectiveDiscount?: number;
    amountPaidRoundoff?: number;
    fyndCredits?: number;
    brandCalculatedAmount?: number;
    cashback?: number;
    valueOfGood?: number;
};
type GstDetails = {
    brandCalculatedAmount?: number;
    gstFee?: string;
    gstTag?: string;
    hsnCode?: string;
    valueOfGood?: number;
    gstTaxPercentage?: number;
    isDefaultHsnCode?: boolean;
};
type BagBreakupValues = {
    name?: string;
    display?: string;
    value?: number;
};
type BagCurrentStatus = {
    updatedAt?: string;
    bagStateMapper?: BagStateMapper;
    status?: string;
    stateType?: string;
};
type BagStateMapper = {
    appStateName?: string;
    isActive?: boolean;
    displayName?: string;
    name?: string;
    appDisplayName?: string;
};
type BagStatus = {
    status?: string;
    stateType?: string;
    updatedAt?: string;
    bagStateMapper?: BagStatusBagStateMapper;
};
type BagStatusBagStateMapper = {
    isActive?: boolean;
    displayName?: string;
    name?: string;
    appDisplayName?: string;
    appStateName?: string;
};
type BagPrices = {
    cashback?: number;
    refundCredit?: number;
    couponValue?: number;
    deliveryCharge?: number;
    fyndCredits?: number;
    priceMarked?: number;
    cashbackApplied?: number;
    valueOfGood?: number;
    amountPaidRoundoff?: number;
    amountPaid?: number;
    codCharges?: number;
    priceEffective?: number;
    refundAmount?: number;
    discount?: number;
};
type ShipmentBreakupValues = {
    name?: string;
    display?: string;
    value?: number;
};
type DpDetails = {
    gstTag?: string;
};
type ShipmentInvoice = {
    paymentType?: string;
    updatedDate?: string;
    invoiceUrl?: string;
    labelUrl?: string;
    paymentMode?: string;
    amountToCollect?: number;
    rtoAddress?: RtoAddress;
};
type RtoAddress = {
    name?: string;
    id?: number;
    phone?: string;
    locationType?: string;
    storeAddressJson?: StoreAddressJson;
    code?: string;
    address1?: string;
    city?: string;
    country?: string;
    pincode?: string;
    companyId?: number;
    contactPerson?: string;
    state?: string;
    storeEmail?: string;
    address2?: string;
};
type StoreAddressJson = {
    country?: string;
    latitude?: number;
    updatedAt?: string;
    area?: string;
    state?: string;
    addressType?: string;
    city?: string;
    pincode?: string;
    address1?: string;
    address2?: string;
    longitude?: number;
    email?: string;
    phone?: string;
    createdAt?: string;
    contactPerson?: string;
    addressCategory?: string;
    version?: string;
    landmark?: string;
};
type PlatformFulfillingStore = {
    packagingMaterialCount?: number;
    locationType?: string;
    code?: string;
    city?: string;
    meta?: FulfillingStoreMeta;
    name?: string;
    isActive?: boolean;
    address1?: string;
    storeEmail?: string;
    isArchived?: boolean;
    state?: string;
    address2?: string;
    contactPerson?: string;
    phone?: string;
    isEnabledForRecon?: boolean;
    fulfillmentChannel?: string;
    createdAt?: string;
    id?: number;
    pincode?: string;
    brandStoreTags?: Array<string>;
    companyId?: number;
    storeAddressJson?: FulfillingStoreStoreAddressJson;
    updatedAt?: string;
    loginUsername?: string;
    country?: string;
};
type FulfillingStoreMeta = {
    additionalContactDetails?: AdditionalContactDetails;
    documents?: Documents;
    gstNumber?: string;
    displayName?: string;
    productReturnConfig?: ProductReturnConfig;
    allowDpAssignmentFromFynd?: boolean;
    stage?: string;
    timing?: Timing;
};
type AdditionalContactDetails = {
    number?: Array<string>;
};
type Documents = {
    gst?: Gst;
};
type Gst = {
    legalName?: string;
    type?: string;
    value?: string;
    verified?: boolean;
};
type ProductReturnConfig = {
    onSameStore?: boolean;
};
type Timing = {
    opening?: Opening;
    weekday?: string;
    open?: boolean;
    closing?: Closing;
};
type Opening = {
    minute?: number;
    hour?: number;
};
type Closing = {
    hour?: number;
    minute?: number;
};
type FulfillingStoreStoreAddressJson = {
    address2?: string;
    area?: string;
    email?: string;
    phone?: string;
    state?: string;
    contactPerson?: string;
    country?: string;
    pincode?: string;
    version?: string;
    createdAt?: string;
    addressType?: string;
    city?: string;
    address1?: string;
    landmark?: string;
    latitude?: number;
    longitude?: number;
    updatedAt?: string;
    addressCategory?: string;
};
type Payments = {
    isActive?: boolean;
    displayName?: string;
    logo?: string;
    source?: string;
    sourceNickname?: string;
    displayPriority?: number;
    id?: number;
    mode?: string;
    paymentIdentifier?: string;
};
type ShipmentGst = {
    brandCalculatedAmount?: number;
    valueOfGood?: number;
    gstFee?: number;
};
type PlatformShipmentBrand = {
    creditNoteAllowed?: boolean;
    brandName?: string;
    modifiedOn?: string;
    id?: number;
    isVirtualInvoice?: boolean;
    createdOn?: string;
    logo?: string;
};
type Promise = {
    timestamp?: Timestamp;
};
type Timestamp = {
    min?: string;
    max?: string;
};
type ShipmentTrackingDetails = {
    status?: string;
    time?: string;
    isPassed?: boolean;
    isCurrent?: boolean;
};
type ShipmentUser = {
    email?: string;
    id?: number;
    firstName?: string;
    mobile?: string;
    gender?: string;
    lastName?: string;
    isAnonymousUser?: boolean;
    mongoUserId?: string;
};
type ItemsPayments = {
    displayPriority?: number;
    id?: number;
    isActive?: boolean;
    displayName?: string;
    logo?: string;
    paymentIdentifier?: string;
    sourceNickname?: string;
    mode?: string;
    source?: string;
};
type Filters = {
    stages?: Stages;
};
type Stages = {
    text?: string;
    value?: string;
    isDefault?: boolean;
    filters?: StagesFilters;
};
type StagesFilters = {
    text?: string;
    value?: string;
    type?: string;
    options?: Options;
};
type Options = {
    text?: string;
    value?: string;
};
type NextOrderStatus = {
    bagConfirmed?: BagConfirmed;
    dpAssigned?: DpAssigned;
    returnBagDelivered?: ReturnBagDelivered;
    placed?: Placed;
    deliveryDone?: DeliveryDone;
    pending?: Pending;
    bagPacked?: BagPacked;
};
type BagConfirmed = {
    text?: string;
    value?: string;
};
type DpAssigned = {
    text?: string;
    value?: string;
};
type ReturnBagDelivered = {
    text?: string;
    value?: string;
};
type Placed = {
    text?: string;
    value?: string;
};
type DeliveryDone = {
    text?: string;
    value?: string;
};
type Pending = {
    text?: string;
    value?: string;
};
type BagPacked = {
    text?: string;
    value?: string;
};
type PlatformOrderPage = {
    next?: string;
    previous?: string;
    type?: string;
    size?: number;
    current?: number;
    hasNext?: boolean;
    itemTotal?: ItemTotal;
};
type ItemTotal = {
    new?: number;
    processing?: number;
    returns?: number;
    all?: number;
};
type AppliedFilters = {
    stage?: string;
    stores?: Array<string>;
    fromDate?: string;
    toDate?: string;
};
type UpdateOrderReprocessResponse = {
    status: string;
};
type PlatformOrderTrack = {
    success: boolean;
    requestId: string;
    message: string;
    mobile: string;
    countryCode: string;
    resendTimer: number;
    resendToken?: string;
};
type GetPingResponse = {
    ping: string;
};
type UpdateShipmentStatusResponse = {
    shipments: any;
    errorShipments?: Array<any>;
};
type UpdateShipmentStatusBody = {
    shipments: any;
    forceTransition: boolean;
    task: boolean;
};
type PlatformShipmentTrack = {
    results: Results;
};
type Results = {
    awb?: string;
    updatedAt?: string;
    lastLocationRecievedAt?: string;
    reason?: string;
    shipmentType?: string;
    status?: string;
    updatedTime?: string;
    accountName?: string;
};
type UpdateProcessShipmenstRequestBody = {
    shipmentIds: Array<string>;
    expectedStatus: string;
};
type UpdateProcessShipmenstRequestResponse = {
    success: boolean;
    message: string;
};
type GetVoiceCallbackResponse = {
    message: string;
};
type GetClickToCallResponse = {
    message: string;
};
type ApefaceApiError = {
    message?: string;
};
type GetSearchWordsData = {
    customJson?: any;
    result?: any;
    appId?: string;
    uid?: string;
    words?: Array<string>;
};
type GetSearchWordsDetailResponse = {
    items?: GetSearchWordsData;
    page?: Page;
};
type ErrorResponse = {
    meta?: any;
    errors?: any;
    message?: string;
    code?: string;
    status?: number;
};
type SearchKeywordResult = {
    query: any;
    sortOn: string;
};
type CreateSearchKeyword = {
    customJson?: any;
    result: SearchKeywordResult;
    appId?: string;
    isActive?: boolean;
    words?: Array<string>;
};
type DeleteResponse = {
    message?: string;
};
type GetSearchWordsResponse = {
    items?: Array<GetSearchWordsData>;
    page?: Page;
};
type GetAutocompleteWordsData = {
    customJson?: any;
    appId?: string;
    uid?: string;
    words?: Array<string>;
    results?: Array<any>;
};
type GetAutocompleteWordsResponse = {
    items?: Array<GetAutocompleteWordsData>;
    page?: Page;
};
type Media = {
    url?: string;
    type?: string;
};
type AutocompletePageAction = {
    query: any;
    params?: any;
    url?: string;
    type: string;
};
type AutocompleteAction = {
    page?: AutocompletePageAction;
    type?: string;
};
type AutocompleteResult = {
    logo?: Media;
    customJson?: any;
    display?: string;
    action?: AutocompleteAction;
};
type CreateAutocompleteKeyword = {
    customJson?: any;
    appId?: string;
    isActive?: boolean;
    words?: Array<string>;
    results?: Array<AutocompleteResult>;
};
type CreateAutocompleteWordsResponse = {
    results?: Array<any>;
    customJson?: any;
    words?: Array<string>;
    appId?: string;
};
type ProductBundleItem = {
    productUid: number;
    allowRemove?: boolean;
    minQuantity: number;
    maxQuantity: number;
    autoSelect?: boolean;
    autoAddToCart?: boolean;
};
type GetProductBundleCreateResponse = {
    logo?: string;
    pageVisibility?: Array<string>;
    modifiedOn?: string;
    products: Array<ProductBundleItem>;
    companyId?: number;
    meta?: any;
    sameStoreAssignment?: boolean;
    createdBy?: any;
    isActive: boolean;
    createdOn?: string;
    id?: string;
    name: string;
    modifiedBy?: any;
    slug: string;
    choice: string;
};
type GetProductBundleListingResponse = {
    items?: Array<GetProductBundleCreateResponse>;
    page?: Page;
};
type ProductBundleRequest = {
    logo?: string;
    pageVisibility?: Array<string>;
    modifiedOn?: string;
    products: Array<ProductBundleItem>;
    meta?: any;
    sameStoreAssignment?: boolean;
    createdBy?: any;
    isActive: boolean;
    createdOn?: string;
    name: string;
    modifiedBy?: any;
    slug: string;
    choice: string;
};
type Price = {
    maxEffective?: number;
    maxMarked?: number;
    minMarked?: number;
    minEffective?: number;
    currency?: string;
};
type Size = {
    isAvailable?: boolean;
    value?: string;
    quantity?: number;
    display?: string;
};
type LimitedProductData = {
    identifier?: any;
    attributes?: any;
    quantity?: number;
    price?: any;
    shortDescription?: string;
    countryOfOrigin?: string;
    uid?: number;
    itemCode?: string;
    name?: string;
    slug?: string;
    images?: Array<string>;
    sizes?: Array<string>;
};
type GetProducts = {
    productUid?: number;
    price?: Price;
    minQuantity?: number;
    maxQuantity?: number;
    autoSelect?: boolean;
    sizes?: Array<Size>;
    productDetails?: LimitedProductData;
    allowRemove?: boolean;
    autoAddToCart?: boolean;
};
type GetProductBundleResponse = {
    pageVisibility?: Array<string>;
    logo?: string;
    companyId?: number;
    products?: Array<GetProducts>;
    meta?: any;
    sameStoreAssignment?: boolean;
    isActive?: boolean;
    name?: string;
    slug?: string;
    choice?: string;
};
type ProductBundleUpdateRequest = {
    logo?: string;
    pageVisibility?: Array<string>;
    modifiedOn?: string;
    products: Array<ProductBundleItem>;
    meta?: any;
    sameStoreAssignment?: boolean;
    isActive: boolean;
    name: string;
    modifiedBy?: any;
    slug: string;
    choice: string;
};
type ListSizeGuide = {
    items?: Array<any>;
    page?: any;
};
type Meta = {
    unit?: string;
    headers?: any;
    values?: Array<any>;
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    companyId?: number;
    modifiedOn?: string;
    title: string;
    active?: boolean;
    brandId?: number;
    createdBy?: any;
    subtitle?: string;
    createdOn?: string;
    name: string;
    description?: string;
    modifiedBy?: any;
    id?: string;
    image?: string;
    tag?: string;
    guide?: Guide;
};
type SuccessResponse = {
    success?: boolean;
    uid?: number;
};
type SizeGuideResponse = {
    modifiedOn?: string;
    companyId?: number;
    title?: string;
    active?: boolean;
    brandId?: number;
    createdBy?: any;
    subtitle?: string;
    createdOn?: string;
    name?: string;
    modifiedBy?: any;
    id?: string;
    tag?: string;
    guide?: any;
};
type MetaDataListingFilterMetaResponse = {
    units?: Array<any>;
    key?: string;
    display?: string;
    filterTypes?: Array<string>;
};
type MetaDataListingFilterResponse = {
    data?: Array<MetaDataListingFilterMetaResponse>;
};
type MetaDataListingSortMetaResponse = {
    key?: string;
    display?: string;
};
type MetaDataListingSortResponse = {
    data?: Array<MetaDataListingSortMetaResponse>;
};
type MetaDataListingResponse = {
    filter: MetaDataListingFilterResponse;
    sort: MetaDataListingSortResponse;
};
type GetCatalogConfigurationDetailsProduct = {
    similar?: any;
    compare?: any;
    detail?: any;
    variant?: any;
};
type GetCatalogConfigurationMetaData = {
    listing?: MetaDataListingResponse;
    product?: GetCatalogConfigurationDetailsProduct;
};
type ProductSize = {
    min: number;
    max: number;
};
type ConfigurationProductConfig = {
    logo?: string;
    title?: string;
    key: string;
    isActive: boolean;
    size?: ProductSize;
    priority: number;
    subtitle?: string;
};
type ConfigurationProductSimilar = {
    config?: Array<ConfigurationProductConfig>;
};
type ConfigurationProductVariantConfig = {
    logo?: string;
    displayType: string;
    key: string;
    isActive: boolean;
    size: ProductSize;
    name: string;
    priority: number;
};
type ConfigurationProductVariant = {
    config?: Array<ConfigurationProductVariantConfig>;
};
type ConfigurationProduct = {
    similar: ConfigurationProductSimilar;
    variant: ConfigurationProductVariant;
};
type ConfigurationBucketPoints = {
    end?: number;
    start?: number;
};
type ConfigurationListingFilterValue = {
    bucketPoints?: Array<ConfigurationBucketPoints>;
    value?: string;
    sort?: string;
    condition?: string;
    map?: any;
};
type ConfigurationListingFilterConfig = {
    logo?: string;
    key: string;
    type: string;
    isActive: boolean;
    name?: string;
    priority: number;
    valueConfig?: ConfigurationListingFilterValue;
};
type ConfigurationListingFilter = {
    allowSingle: boolean;
    attributeConfig?: Array<ConfigurationListingFilterConfig>;
};
type ConfigurationListingSortConfig = {
    logo?: string;
    key: string;
    isActive: boolean;
    name?: string;
    priority: number;
};
type ConfigurationListingSort = {
    defaultKey: string;
    config?: Array<ConfigurationListingSortConfig>;
};
type ConfigurationListing = {
    filter: ConfigurationListingFilter;
    sort: ConfigurationListingSort;
};
type AppCatalogConfiguration = {
    configId?: string;
    product?: ConfigurationProduct;
    appId: string;
    configType: string;
    listing?: ConfigurationListing;
    id?: string;
};
type GetAppCatalogConfiguration = {
    isDefault?: boolean;
    data?: AppCatalogConfiguration;
};
type AppConfiguration = {
    configId?: string;
    product?: ConfigurationProduct;
    appId: string;
    configType: string;
    listing?: ConfigurationListing;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    filter?: any;
    sort?: any;
};
type EntityConfiguration = {
    configId?: string;
    product?: GetCatalogConfigurationDetailsProduct;
    appId: string;
    configType: string;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    id?: string;
};
type GetAppCatalogEntityConfiguration = {
    isDefault?: boolean;
    data?: EntityConfiguration;
};
type ProductSortOn = {
    value?: string;
    isSelected?: boolean;
    name?: string;
};
type ProductFiltersKey = {
    logo?: string;
    kind?: string;
    display: string;
    name: string;
};
type ProductFiltersValue = {
    display: string;
    selectedMax?: number;
    min?: number;
    displayFormat?: string;
    queryFormat?: string;
    isSelected: boolean;
    count?: number;
    selectedMin?: number;
    value: string;
    currencyCode?: string;
    currencySymbol?: string;
    max?: number;
};
type ProductFilters = {
    key: ProductFiltersKey;
    values: Array<ProductFiltersValue>;
};
type GetCollectionQueryOptionResponse = {
    sortOn?: Array<ProductSortOn>;
    filters?: Array<ProductFilters>;
};
type Media1 = {
    url: string;
    meta?: any;
    type?: string;
};
type ProductListingActionPage = {
    query?: any;
    type?: string;
};
type ProductListingAction = {
    page?: ProductListingActionPage;
    type?: string;
};
type BannerImage = {
    url?: string;
    aspectRatio?: string;
};
type ImageUrls = {
    landscape?: BannerImage;
    portrait?: BannerImage;
};
type GetCollectionDetailNest = {
    appId?: string;
    badge?: any;
    visibleFacetsKeys?: Array<string>;
    query?: any;
    logo?: Media1;
    action?: ProductListingAction;
    allowSort?: boolean;
    tag?: Array<string>;
    schedule?: any;
    cron?: any;
    banners?: ImageUrls;
    allowFacets?: boolean;
    meta?: any;
    type?: string;
    isActive?: boolean;
    name?: string;
    description?: string;
    uid?: string;
    slug?: string;
};
type CollectionListingFilterTag = {
    isSelected?: boolean;
    display?: string;
    name?: string;
};
type CollectionListingFilterType = {
    isSelected?: boolean;
    display?: string;
    name?: string;
};
type CollectionListingFilter = {
    tags?: Array<CollectionListingFilterTag>;
    type?: Array<CollectionListingFilterType>;
};
type GetCollectionListingResponse = {
    items?: Array<GetCollectionDetailNest>;
    filters?: CollectionListingFilter;
    page?: Page;
};
type CollectionBadge = {
    text?: string;
    color?: string;
};
type CollectionImage = {
    url: string;
    aspectRatio: string;
};
type SeoDetail = {
    title?: string;
    description?: string;
};
type UserInfo = {
    email?: string;
    userId?: string;
    uid?: string;
    username?: string;
};
type Schedule = {
    end?: string;
    start?: string;
    duration?: number;
    cron?: string;
};
type CollectionBanner = {
    landscape: CollectionImage;
    portrait: CollectionImage;
};
type CreateCollection = {
    appId: string;
    badge?: CollectionBadge;
    visibleFacetsKeys?: Array<string>;
    query?: any;
    logo: CollectionImage;
    published?: boolean;
    localeLanguage?: any;
    seo?: SeoDetail;
    sortOn?: string;
    tags?: Array<string>;
    modifiedBy?: UserInfo;
    allowSort?: boolean;
    schedule?: Schedule;
    customJson?: any;
    banners: CollectionBanner;
    allowFacets?: boolean;
    meta?: any;
    createdBy?: UserInfo;
    type: string;
    isActive?: boolean;
    name: string;
    description?: string;
    slug: string;
};
type CollectionCreateResponse = {
    logo?: BannerImage;
    meta?: any;
    cron?: any;
    banners?: ImageUrls;
    appId?: string;
    type?: string;
    badge?: any;
    isActive?: boolean;
    visibleFacetsKeys?: Array<string>;
    name?: string;
    description?: string;
    query?: any;
    slug?: string;
    allowFacets?: boolean;
    allowSort?: boolean;
    tag?: Array<string>;
    schedule?: any;
};
type CollectionDetailResponse = {
    logo?: Media1;
    meta?: any;
    cron?: any;
    banners?: ImageUrls;
    appId?: string;
    type?: string;
    badge?: any;
    isActive?: boolean;
    visibleFacetsKeys?: Array<string>;
    name?: string;
    description?: string;
    query?: any;
    slug?: string;
    allowFacets?: boolean;
    allowSort?: boolean;
    tag?: Array<string>;
    schedule?: any;
};
type Price1 = {
    currencySymbol?: string;
    currencyCode?: string;
    min?: number;
    max?: number;
};
type ProductListingPrice = {
    marked?: Price1;
    effective?: Price1;
};
type ProductListingDetail = {
    highlights?: Array<string>;
    attributes?: any;
    discount?: string;
    price?: ProductListingPrice;
    medias?: Array<Media1>;
    ratingCount?: number;
    imageNature?: string;
    promoMeta?: any;
    itemType?: string;
    shortDescription?: string;
    productOnlineDate?: string;
    sellable?: boolean;
    description?: string;
    teaserTag?: any;
    rating?: number;
    hasVariant?: boolean;
    color?: string;
    type?: string;
    similars?: Array<string>;
    uid?: number;
    tryouts?: Array<string>;
    name?: string;
    slug: string;
};
type GetCollectionItemsResponse = {
    items?: Array<ProductListingDetail>;
    filters?: Array<ProductFilters>;
    page?: Page;
    sortOn?: Array<ProductSortOn>;
};
type CollectionItemRequest = {
    pageNo: number;
    pageSize: number;
};
type UpdatedResponse = {
    message?: string;
};
type CatalogInsightItem = {
    outOfStockCount?: number;
    count?: number;
    sellableCount?: number;
};
type CatalogInsightBrand = {
    availableArticles?: number;
    articleFreshness?: number;
    availableSizes?: number;
    totalArticles?: number;
    name?: string;
    totalSizes?: number;
};
type CatalogInsightResponse = {
    item?: CatalogInsightItem;
    brandDistribution?: CatalogInsightBrand;
};
type CrossSellingData = {
    products?: number;
    articles?: number;
};
type CrossSellingResponse = {
    brandDistribution?: CatalogInsightBrand;
    data?: CrossSellingData;
};
type OptInPostRequest = {
    optLevel: string;
    enabled?: boolean;
    brandIds?: Array<number>;
    storeIds?: Array<number>;
};
type CompanyOptIn = {
    companyId: number;
    enabled: boolean;
    modifiedOn: number;
    storeIds: Array<number>;
    optLevel: string;
    createdBy?: any;
    platform: string;
    createdOn: number;
    brandIds: Array<number>;
    modifiedBy?: any;
};
type GetOptInPlatform = {
    items: Array<CompanyOptIn>;
    page: Page;
};
type OptinCompanyDetail = {
    companyType?: string;
    name?: string;
    businessType?: string;
    uid?: number;
};
type CompanyBrandDetail = {
    brandId?: number;
    companyId?: number;
    totalArticle?: number;
    brandName?: string;
};
type OptinCompanyBrandDetailsView = {
    items?: Array<CompanyBrandDetail>;
    page?: Page;
};
type OptinCompanyMetrics = {
    brand?: number;
    company?: string;
    store?: number;
};
type StoreDetail = {
    timing?: any;
    modifiedOn?: string;
    companyId?: number;
    storeCode?: string;
    storeType?: string;
    createdOn?: string;
    displayName?: string;
    additionalContacts?: Array<any>;
    uid?: number;
    name?: string;
    documents?: Array<any>;
};
type OptinStoreDetails = {
    items?: Array<StoreDetail>;
    page?: Page;
};
type MultipleCommon = {
    uid?: string;
};
type BasePage = {
    hasPrevious?: boolean;
    hasNext?: boolean;
    size?: number;
    itemTotal?: number;
    current?: number;
};
type ProdcutTemplateCategoriesResponse = {
    items?: MultipleCommon;
    page?: BasePage;
};
type PTErrorResponse = {
    meta?: any;
    errors?: any;
    message?: string;
    code?: string;
    status?: number;
};
type UserSerializer = {
    contact?: string;
    userId?: string;
    username?: string;
};
type GetDepartment = {
    logo?: string;
    modifiedOn?: string;
    createdBy?: UserSerializer;
    priorityOrder?: number;
    pageSize?: number;
    isActive?: boolean;
    search?: string;
    synonyms?: Array<string>;
    createdOn?: string;
    modifiedBy?: UserSerializer;
    name?: string;
    uid?: number;
    pageNo?: number;
    slug?: string;
    itemType?: string;
};
type BasePage1 = {
    nextPageId?: string;
    hasNext?: boolean;
    hasPrevious?: boolean;
    itemTotal?: number;
};
type DepartmentsResponse = {
    items?: Array<GetDepartment>;
    page?: BasePage1;
};
type DepartmentErrorResponse = {
    meta?: any;
    errors?: any;
    message?: string;
    code?: string;
    status?: number;
};
type ProductTemplate = {
    logo?: string;
    departments?: Array<string>;
    modifiedOn?: string;
    isArchived?: boolean;
    categories?: Array<string>;
    attributes?: Array<string>;
    isPhysical: boolean;
    createdBy?: any;
    isActive?: boolean;
    createdOn?: string;
    name?: string;
    description?: string;
    modifiedBy?: any;
    slug: string;
    tag?: string;
};
type TemplatesResponse = {
    items?: ProductTemplate;
    page?: BasePage;
};
type TemplatesValidationResponse = {
    data?: MultipleCommon;
};
type InventoryValidationResponse = {
    message?: string;
    data?: MultipleCommon;
};
type HSNData = {
    countryOfOrigin?: Array<string>;
    hsnCode?: Array<string>;
};
type HSNCodesResponse = {
    message?: string;
    data?: HSNData;
};
type ProductConfligurationDownloads = {
    multivalue?: boolean;
    data?: Array<MultipleCommon>;
};
type Hierarchy = {
    department: number;
    l1: number;
    l2: number;
};
type Media2 = {
    logo: string;
    landscape: string;
    portrait: string;
};
type CategoryMappingValues = {
    name: string;
    catalogId?: number;
};
type CategoryMapping = {
    google?: CategoryMappingValues;
    ajio?: CategoryMappingValues;
    facebook?: CategoryMappingValues;
};
type Category = {
    departments: Array<number>;
    modifiedOn?: string;
    level: number;
    hierarchy?: Array<Hierarchy>;
    createdBy?: any;
    media?: Media2;
    id?: string;
    isActive: boolean;
    createdOn?: string;
    tryouts?: Array<string>;
    synonyms?: Array<string>;
    name: string;
    uid?: number;
    modifiedBy?: any;
    slug?: string;
    marketplaces?: CategoryMapping;
    priority?: number;
};
type CategoryResponse = {
    items?: Array<Category>;
    page?: BasePage1;
};
type CategoryRequestBody = {
    departments: Array<number>;
    level: number;
    hierarchy?: Array<Hierarchy>;
    media?: Media2;
    isActive: boolean;
    synonyms?: Array<string>;
    name: string;
    tryouts?: Array<string>;
    slug?: string;
    marketplaces?: CategoryMapping;
    priority?: number;
};
type CategoryCreateResponse = {
    message?: string;
    uid?: number;
};
type CategoryUpdateResponse = {
    message?: string;
    success?: boolean;
};
type VerifiedBy = {
    userId?: string;
    username?: string;
};
type UserCommon = {
    companyId?: number;
    userId?: string;
    username?: string;
};
type Attributes = {
    primaryColor?: string;
    verifiedBy?: VerifiedBy;
    essential?: string;
    verifiedOn?: string;
    createdOn?: string;
    sleeveLength?: string;
    metaNature?: string;
    imageNature?: string;
    l3Mapping?: Array<string>;
    neckType?: string;
    modifiedBy?: UserCommon;
    modifiedOn?: string;
    productFit?: string;
    pattern?: string;
    stage?: string;
    material?: string;
    isImageLessProduct?: boolean;
    color?: string;
    createdBy?: UserCommon;
    primaryMaterial?: string;
    gender?: Array<string>;
};
type Logo = {
    secureUrl?: string;
    url?: string;
    aspectRatio?: string;
    aspectRatioF?: number;
};
type Brand = {
    logo?: Logo;
    uid?: number;
    name?: string;
};
type ProductPublished = {
    isSet?: boolean;
    productOnlineDate?: number;
};
type Product = {
    highlights?: string;
    attributes?: Attributes;
    allSizes?: Array<string>;
    categorySlug?: string;
    countryOfOrigin?: string;
    images?: Array<string>;
    sizes?: Array<any>;
    companyId?: number;
    isDependent?: boolean;
    brand?: Brand;
    itemType?: string;
    id?: string;
    description?: string;
    currency?: string;
    media?: Array<string>;
    productPublish?: ProductPublished;
    sizeGuide?: string;
    itemCode?: string;
    departments?: Array<number>;
    hsnCode?: string;
    isSet?: boolean;
    isActive?: boolean;
    templateTag?: string;
    name?: string;
    uid?: number;
    multiSize?: boolean;
    slug?: string;
};
type PageData = {
    hasPrevious?: boolean;
    hasNext?: boolean;
    size?: number;
    itemTotal?: number;
    current?: string;
};
type ProductListingResponse = {
    items?: Array<Product>;
    page?: PageData;
};
type ReturnConfig = {
    time?: number;
    unit?: string;
    returnable?: boolean;
};
type Trader = {
    address: string;
    name: string;
};
type ProductPublish = {
    isSet?: boolean;
    productOnlineDate?: string;
};
type OrderQuantity = {
    minimum?: number;
    maximum?: number;
    isSet?: boolean;
};
type TeaserTag = {
    url?: string;
    tag?: string;
};
type CustomOrder = {
    manufacturingTime?: number;
    manufacturingTimeUnit?: string;
    isCustomOrder?: boolean;
};
type ProductCreateUpdate = {
    highlights?: Array<string>;
    productGroupTag?: Array<string>;
    returnConfig?: ReturnConfig;
    categorySlug: string;
    countryOfOrigin: string;
    companyId: number;
    changeRequestId?: string;
    multiSize?: boolean;
    isDependent?: boolean;
    tags?: Array<string>;
    shortDescription?: string;
    trader?: Trader;
    itemType: string;
    noOfBoxes?: number;
    currency: string;
    customJson?: any;
    variants?: any;
    media?: Array<Media1>;
    brandUid: number;
    productPublish?: ProductPublish;
    moq?: OrderQuantity;
    sizeGuide?: string;
    itemCode: string;
    isImageLessProduct?: boolean;
    teaserTag?: TeaserTag;
    departments: Array<number>;
    hsnCode: string;
    traderType?: string;
    isSet?: boolean;
    customOrder?: CustomOrder;
    isActive?: boolean;
    templateTag: string;
    name: string;
    description?: string;
    uid?: number;
    slug: string;
    requester?: string;
};
type ValidateProduct = {
    valid?: boolean;
};
type UserDetail = {
    fullName?: string;
    userId?: string;
    username?: string;
};
type ProductBulkRequest = {
    companyId?: number;
    cancelledRecords?: Array<string>;
    modifiedOn?: string;
    template?: ProductTemplate;
    createdBy?: UserDetail;
    cancelled?: number;
    isActive?: boolean;
    createdOn?: string;
    total?: number;
    templateTag?: string;
    modifiedBy?: UserDetail;
    failed?: number;
    stage?: string;
    succeed?: number;
    failedRecords?: Array<string>;
    filePath?: string;
};
type ProductBulkRequestList = {
    items?: ProductBulkRequest;
    page?: PageData;
};
type UserInfo1 = {
    email?: string;
    userId?: string;
    uid?: string;
    username?: string;
};
type BulkJob = {
    modifiedOn?: string;
    companyId: number;
    cancelledRecords?: Array<any>;
    succeed?: number;
    customTemplateTag?: string;
    createdBy?: UserInfo1;
    filePath?: string;
    isActive?: boolean;
    createdOn: string;
    total: number;
    templateTag?: string;
    failed?: number;
    stage?: string;
    modifiedBy?: UserInfo1;
    failedRecords?: Array<any>;
    cancelled?: number;
    trackingUrl?: string;
};
type BulkProductRequest = {
    companyId: number;
    templateTag: string;
    batchId: string;
    data: Array<any>;
};
type NestedTags = {
    tags?: Array<string>;
};
type ProductTagsViewResponse = {
    items?: NestedTags;
};
type Items = {
    modifiedOn?: string;
    cancelledRecords?: Array<string>;
    companyId?: number;
    succeed?: number;
    retry?: number;
    createdBy?: UserCommon;
    cancelled?: number;
    createdOn?: string;
    isActive?: boolean;
    total?: number;
    failed?: number;
    stage?: string;
    modifiedBy?: UserCommon;
    id?: string;
    failedRecords?: Array<string>;
    filePath?: string;
    trackingUrl?: string;
};
type BulkAssetResponse = {
    items?: Array<Items>;
    page?: PageData;
};
type ProductBulkAssets = {
    user: any;
    companyId?: number;
    url: string;
};
type InventoryRequest = {
    pageSize?: number;
    search?: string;
    total?: number;
    size?: string;
    pageNo?: number;
};
type GTIN = {
    gtinValue: string;
    gtinType: string;
    primary?: boolean;
};
type SetSize = {
    pieces: number;
    size: string;
};
type SizeDistribution = {
    sizes: Array<SetSize>;
};
type InventorySet = {
    sizeDistribution: SizeDistribution;
    quantity?: number;
};
type InvSize = {
    itemWeightUnitOfMeasure?: string;
    itemLength?: number;
    priceEffective: number;
    priceTransfer?: number;
    storeCode: string;
    quantity: number;
    identifiers: Array<GTIN>;
    isSet?: boolean;
    price: number;
    set?: InventorySet;
    size: string;
    itemDimensionsUnitOfMeasure?: string;
    itemHeight?: number;
    itemWeight?: number;
    currency: string;
    itemWidth?: number;
};
type ItemQuery = {
    brandUid?: number;
    uid?: number;
    itemCode?: string;
};
type InventoryRequest1 = {
    companyId: number;
    sizes: Array<InvSize>;
    item: ItemQuery;
};
type BulkRequestGet = {
    startDate?: string;
    endDate?: string;
    customTemplateTag?: string;
    pageSize?: number;
    search?: string;
    total?: number;
    templateTag?: string;
    stage?: string;
    pageNo?: number;
};
type CommonResponse = {
    success?: string;
};
type Size1 = {
    itemWeightUnitOfMeasure?: string;
    itemLength?: number;
    priceEffective: number;
    priceTransfer?: number;
    storeCode: string;
    quantity: number;
    identifiers?: Array<any>;
    isSet?: boolean;
    price: number;
    set?: InventorySet;
    size?: string;
    sellerIdentifier: string;
    itemDimensionsUnitOfMeasure?: string;
    itemHeight?: number;
    itemWeight?: number;
    currency: string;
    itemWidth?: number;
};
type InventoryBulkRequest = {
    user?: any;
    companyId: number;
    sizes: Array<Size1>;
    batchId: string;
};
type InventoryExportJob = {
    taskId: string;
    url?: string;
    status?: string;
    completedOn?: string;
    sellerId: number;
    triggerOn?: string;
    requestParams?: any;
};
type InventoryExportRequest = {
    brand?: Array<number>;
    store?: Array<number>;
    type?: string;
};
type FilerList = {
    value?: string;
    display?: string;
};
type InventoryConfig = {
    multivalues?: boolean;
    data?: Array<FilerList>;
};
type CompanyAddress = {
    countryCode?: string;
    longitude: number;
    state: string;
    pincode: number;
    city: string;
    landmark?: string;
    address1: string;
    address2?: string;
    country: string;
    latitude: number;
};
type Document = {
    legalName: string;
    value: string;
    verified?: boolean;
    type: string;
    url?: string;
};
type ReferralInfo = {
    referralCode?: string;
};
type BusinessCountryInfo = {
    countryCode?: string;
    country?: string;
};
type CompanyStoreSerializerRequest = {
    address: CompanyAddress;
    franchiseEnabled?: boolean;
    notificationEmails?: Array<string>;
    warnings?: any;
    document: Document;
    businessType: string;
    name: string;
    referralInfo?: ReferralInfo;
    businessCountryInfo: BusinessCountryInfo;
    brands: Array<number>;
    businessInfo?: string;
    uid?: number;
};
type Website = {
    url?: string;
};
type BusinessDetails = {
    website?: Website;
};
type GetAddressSerializer = {
    countryCode?: string;
    longitude?: number;
    state?: string;
    pincode?: number;
    city?: string;
    landmark?: string;
    address1?: string;
    addressType?: string;
    address2?: string;
    country?: string;
    latitude?: number;
};
type BusinessCountryInfo1 = {
    countryCode?: string;
    country?: string;
};
type ContactDetails = {
    phone?: Array<PhoneNumber>;
    emails?: Array<string>;
};
type GetCompanyProfileSerializerResponse = {
    modifiedBy?: UserSerializer;
    warnings?: any;
    businessType: string;
    businessDetails?: BusinessDetails;
    uid: number;
    verifiedOn?: string;
    companyType: string;
    businessInfo?: string;
    createdOn?: string;
    verifiedBy?: UserSerializer;
    addresses?: Array<GetAddressSerializer>;
    stage?: string;
    createdBy?: UserSerializer;
    businessCountryInfo?: BusinessCountryInfo1;
    contactDetails?: ContactDetails;
    franchiseEnabled?: boolean;
    notificationEmails?: Array<string>;
    documents?: Array<Document>;
    modifiedOn?: string;
    name?: string;
};
type DocumentsObj = {
    verified?: number;
    pending?: number;
};
type MetricsSerializer = {
    product?: DocumentsObj;
    store?: DocumentsObj;
    storeDocuments?: DocumentsObj;
    companyDocuments?: DocumentsObj;
    uid?: number;
    brand?: DocumentsObj;
    stage?: string;
};
type BrandBannerSerializer = {
    landscape?: string;
    portrait?: string;
};
type CreateUpdateBrandRequestSerializer = {
    description?: string;
    companyId?: number;
    synonyms?: Array<string>;
    customJson?: any;
    localeLanguage?: any;
    brandTier?: string;
    logo: string;
    name: string;
    banner?: BrandBannerSerializer;
    uid?: number;
};
type UserSerializer1 = {
    username?: string;
    userId?: string;
    contact?: string;
};
type GetBrandResponseSerializer = {
    description?: string;
    createdBy?: UserSerializer1;
    modifiedBy?: UserSerializer1;
    synonyms?: Array<string>;
    rejectReason?: string;
    slugKey?: string;
    customJson?: any;
    warnings?: any;
    localeLanguage?: any;
    banner?: BrandBannerSerializer;
    logo?: string;
    name: string;
    createdOn?: string;
    verifiedBy?: UserSerializer1;
    modifiedOn?: string;
    uid?: number;
    verifiedOn?: string;
    stage?: string;
};
type CompanyBrandListSerializer = {
    items?: Array<any>;
    page?: any;
};
type CompanyBrandPostRequestSerializer = {
    company: number;
    uid?: number;
    brands: Array<number>;
};
type LocationListSerializer = {
    items?: Array<any>;
    page?: any;
};
type GetAddressSerializer1 = {
    countryCode?: string;
    longitude?: number;
    state?: string;
    pincode?: number;
    city?: string;
    landmark?: string;
    address1?: string;
    addressType?: string;
    address2?: string;
    country?: string;
    latitude?: number;
};
type LocationManagerSerializer = {
    mobileNo: PhoneNumber;
    name?: string;
    email?: string;
};
type LocationTimingSerializer = {
    hour?: number;
    minute?: number;
};
type LocationDayWiseSerializer = {
    opening?: LocationTimingSerializer;
    weekday: string;
    closing?: LocationTimingSerializer;
    open: boolean;
};
type ProductReturnConfigSerializer = {
    onSameStore?: boolean;
    storeUid?: number;
};
type InvoiceCredSerializer = {
    username?: string;
    enabled?: boolean;
    password?: string;
};
type InvoiceDetailsSerializer = {
    eWaybill?: InvoiceCredSerializer;
    eInvoice?: InvoiceCredSerializer;
};
type LocationSerializer = {
    address: GetAddressSerializer1;
    manager?: LocationManagerSerializer;
    notificationEmails?: Array<string>;
    customJson?: any;
    warnings?: any;
    code: string;
    company: number;
    documents?: Array<Document>;
    contactNumbers?: Array<PhoneNumber>;
    timing?: Array<LocationDayWiseSerializer>;
    displayName: string;
    stage?: string;
    name: string;
    productReturnConfig?: ProductReturnConfigSerializer;
    gstCredentials?: InvoiceDetailsSerializer;
    uid?: number;
    storeType?: string;
};
type GetCompanySerializer = {
    createdBy?: UserSerializer;
    modifiedBy?: UserSerializer;
    rejectReason?: string;
    companyType?: string;
    businessType?: string;
    name?: string;
    createdOn?: string;
    verifiedBy?: UserSerializer;
    modifiedOn?: string;
    uid?: number;
    verifiedOn?: string;
    addresses?: Array<GetAddressSerializer>;
    stage?: string;
};
type LocationIntegrationType = {
    inventory?: string;
    order?: string;
};
type GetLocationSerializer = {
    modifiedBy?: UserSerializer1;
    warnings?: any;
    gstCredentials?: InvoiceDetailsSerializer;
    uid?: number;
    verifiedOn?: string;
    address: GetAddressSerializer;
    company?: GetCompanySerializer;
    timing?: Array<LocationDayWiseSerializer>;
    productReturnConfig?: ProductReturnConfigSerializer;
    createdOn?: string;
    verifiedBy?: UserSerializer1;
    integrationType?: LocationIntegrationType;
    stage?: string;
    storeType?: string;
    createdBy?: UserSerializer1;
    phoneNumber: string;
    displayName: string;
    manager?: LocationManagerSerializer;
    notificationEmails?: Array<string>;
    customJson?: any;
    code: string;
    documents?: Array<Document>;
    contactNumbers?: Array<PhoneNumber>;
    modifiedOn?: string;
    name: string;
};
type FailedResponse = {
    message: string;
};
type CDN = {
    url: string;
};
type Upload = {
    expiry: number;
    url: string;
};
type StartResponse = {
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
type StartRequest = {
    fileName: string;
    contentType: string;
    size: number;
    tags?: Array<string>;
};
type CompleteResponse = {
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
type Opts = {
    attempts?: number;
    timestamp?: number;
    delay?: number;
};
type CopyFileTask = {
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
type BulkResponse = {
    trackingUrl: string;
    task: CopyFileTask;
};
type ReqConfiguration = {
    concurrency?: number;
};
type Destination = {
    namespace: string;
    rewrite: string;
    basepath?: string;
};
type BulkRequest = {
    urls: Array<string>;
    destination: Destination;
    configuration?: ReqConfiguration;
};
type Urls = {
    url: string;
    signedUrl: string;
    expiry: number;
};
type SignUrlResponse = {
    urls: Array<Urls>;
};
type SignUrlRequest = {
    expiry: number;
    urls: Array<string>;
};
type DbRecord = {
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
type BrowseResponse = {
    items: Array<DbRecord>;
    page: Page;
};
type RedirectDevice = {
    link?: string;
    type?: string;
};
type WebRedirect = {
    link?: string;
    type?: string;
};
type Redirects = {
    ios?: RedirectDevice;
    android?: RedirectDevice;
    web?: WebRedirect;
    forceWeb?: boolean;
};
type Attribution = {
    campaignCookieExpiry?: string;
};
type SocialMediaTags = {
    title?: string;
    description?: string;
    image?: string;
};
type ShortLinkReq = {
    title: string;
    url: string;
    hash?: string;
    active?: boolean;
    expireAt?: string;
    enableTracking?: boolean;
    personalized?: boolean;
    campaign?: Campaign;
    redirects?: Redirects;
    attribution?: Attribution;
    socialMediaTags?: SocialMediaTags;
    count?: number;
};
type UrlInfo = {
    original?: string;
    short?: string;
    hash?: string;
};
type ShortLinkRes = {
    title?: string;
    url?: UrlInfo;
    createdBy?: string;
    appRedirect?: boolean;
    fallback?: string;
    active?: boolean;
    id?: string;
    enableTracking?: boolean;
    expireAt?: string;
    application?: string;
    userId?: string;
    createdAt?: string;
    updatedAt?: string;
    personalized?: boolean;
    campaign?: Campaign;
    redirects?: Redirects;
    attribution?: Attribution;
    socialMediaTags?: SocialMediaTags;
    count?: number;
};
type ShortLinkList = {
    items?: Array<ShortLinkRes>;
    page?: Page;
};
type ApplicationInventory = {
    inventory?: AppInventoryConfig;
    authentication?: AuthenticationConfig;
    articleAssignment?: ArticleAssignmentConfig;
    rewardPoints?: RewardPointsConfig;
    cart?: AppCartConfig;
    payment?: AppPaymentConfig;
    order?: AppOrderConfig;
    logistics?: AppLogisticsConfig;
    business?: string;
    commsEnabled?: boolean;
    platforms?: Array<string>;
    id?: string;
    loyaltyPoints?: LoyaltyPoints;
    app?: string;
    createdAt?: string;
    updatedAt?: string;
    modifiedBy?: string;
};
type AppInventoryConfig = {
    brand?: InventoryBrand;
    store?: InventoryStore;
    category?: InventoryCategory;
    price?: InventoryPrice;
    discount?: InventoryDiscount;
    outOfStock?: boolean;
    franchiseEnabled?: boolean;
    excludeCategory?: Array<any>;
    image?: Array<string>;
    companyStore?: Array<any>;
};
type InventoryBrand = {
    criteria?: string;
    brands?: Array<any>;
};
type InventoryStore = {
    criteria?: string;
    stores?: Array<any>;
    rules?: AppStoreRules;
};
type AppStoreRules = {
    companies?: Array<number>;
    brands?: Array<any>;
};
type InventoryCategory = {
    criteria?: string;
    categories?: Array<any>;
};
type InventoryPrice = {
    min?: number;
    max?: number;
};
type InventoryDiscount = {
    min?: number;
    max?: number;
};
type AuthenticationConfig = {
    required?: boolean;
    provider?: string;
};
type ArticleAssignmentConfig = {
    rules?: ArticleAssignmentRules;
    postOrderReassignment?: boolean;
    enforcedStores?: Array<any>;
};
type ArticleAssignmentRules = {
    storePriority?: StorePriority;
};
type StorePriority = {
    enabled?: boolean;
    storetypeOrder?: Array<any>;
};
type RewardPointsConfig = {
    credit?: Credit;
    debit?: Debit;
};
type Credit = {
    enabled?: boolean;
};
type Debit = {
    enabled?: boolean;
    autoApply?: boolean;
    strategyChannel?: string;
};
type AppCartConfig = {
    deliveryCharges?: DeliveryCharges;
    enabled?: boolean;
    maxCartItems?: number;
    minCartValue?: number;
    bulkCoupons?: boolean;
};
type DeliveryCharges = {
    enabled?: boolean;
    charges?: Charges;
};
type Charges = {
    threshold?: number;
    charges?: number;
};
type AppPaymentConfig = {
    callbackUrl?: CallbackUrl;
    methods?: Methods;
    paymentSelectionLock?: PaymentSelectionLock;
    modeOfPayment?: string;
    source?: string;
    enabled?: boolean;
    codAmountLimit?: number;
    codCharges?: number;
};
type CallbackUrl = {
    app?: string;
    web?: string;
};
type Methods = {
    pl?: PaymentModeConfig;
    card?: PaymentModeConfig;
    nb?: PaymentModeConfig;
    wl?: PaymentModeConfig;
    ps?: PaymentModeConfig;
    upi?: PaymentModeConfig;
    qr?: PaymentModeConfig;
    cod?: PaymentModeConfig;
    pp?: PaymentModeConfig;
    jp?: PaymentModeConfig;
    pac?: PaymentModeConfig;
    fc?: PaymentModeConfig;
    jiopp?: PaymentModeConfig;
    stripepg?: PaymentModeConfig;
    juspaypg?: PaymentModeConfig;
    payubizpg?: PaymentModeConfig;
    payumoneypg?: PaymentModeConfig;
    rupifipg?: PaymentModeConfig;
    simpl?: PaymentModeConfig;
};
type PaymentModeConfig = {
    enabled?: boolean;
};
type PaymentSelectionLock = {
    enabled?: boolean;
    defaultOptions?: string;
    paymentIdentifier?: string;
};
type AppOrderConfig = {
    enabled?: boolean;
    forceReassignment?: boolean;
};
type AppLogisticsConfig = {
    logisticsBySeller?: boolean;
    serviceabilityCheck?: boolean;
    sameDayDelivery?: boolean;
    dpAssignment?: boolean;
};
type LoyaltyPoints = {
    enabled?: boolean;
    autoApply?: boolean;
};
type AppInventoryPartialUpdate = {
    rewardPoints?: RewardPointsConfig;
    cart?: AppCartConfig;
    payment?: AppPaymentConfig;
    loyaltyPoints?: LoyaltyPoints;
    commsEnabled?: boolean;
};
type BrandCompanyInfo = {
    companyName?: string;
    companyId?: number;
};
type CompanyByBrandsRequest = {
    brands: number;
    searchText?: string;
};
type CompanyByBrandsResponse = {
    items?: Array<BrandCompanyInfo>;
    page?: Page;
};
type StoreByBrandsRequest = {
    companyId?: number;
    brands: number;
    searchText?: string;
};
type StoreByBrandsResponse = {
    items?: Array<BrandStoreInfo>;
    page?: Page;
};
type BrandStoreInfo = {
    storeName?: string;
    storeId?: number;
    storeType?: string;
    storeCode?: string;
    storeAddress?: OptedStoreAddress;
    company?: OptedCompany;
};
type CompanyBrandInfo = {
    name?: string;
    value?: number;
    brandLogoUrl?: string;
    brandBannerUrl?: string;
    brandBannerPortraitUrl?: string;
};
type BrandsByCompanyResponse = {
    brands?: CompanyBrandInfo;
};
type CreateApplicationRequest = {
    app?: App;
    configuration?: AppInventory;
    domain?: AppDomain;
};
type CreateAppResponse = {
    app?: Application;
    configuration?: ApplicationInventory;
};
type ApplicationsResponse = {
    items?: Array<Application>;
    page?: Page;
};
type MobileAppConfiguration = {
    isActive?: boolean;
    id?: string;
    appName?: string;
    landingImage?: LandingImage;
    splashImage?: SplashImage;
    application?: string;
    platformType?: string;
    createdAt?: string;
    updatedAt?: string;
    v?: number;
    packageName?: string;
};
type LandingImage = {
    aspectRatio?: string;
    secureUrl?: string;
};
type SplashImage = {
    aspectRatio?: string;
    secureUrl?: string;
};
type MobileAppConfigRequest = {
    appName?: string;
    landingImage?: LandingImage;
    splashImage?: SplashImage;
    isActive?: boolean;
};
type BuildVersionHistory = {
    versions?: BuildVersion;
    latestAvailableVersionName?: string;
};
type BuildVersion = {
    id?: string;
    application?: string;
    platformType?: string;
    buildStatus?: string;
    versionName?: string;
    versionCode?: number;
    createdAt?: string;
    updatedAt?: string;
    v?: number;
};
type AppSupportedCurrency = {
    id?: string;
    supportedCurrency?: Array<string>;
    application?: string;
    defaultCurrency?: DefaultCurrency;
    createdAt?: string;
    updatedAt?: string;
};
type DefaultCurrency = {
    ref?: string;
    code?: string;
};
type CurrencyConfig = {
    id?: string;
    isActive?: boolean;
    name?: string;
    code?: string;
    createdAt?: string;
    updatedAt?: string;
    decimalDigits?: number;
    symbol?: string;
};
type DomainAdd = {
    name?: string;
};
type DomainAddRequest = {
    domain?: DomainAdd;
};
type DomainsResponse = {
    domains?: Array<Domain>;
};
type UpdateDomain = {
    id?: string;
};
type UpdateDomainTypeRequest = {
    domain?: UpdateDomain;
    action?: string;
};
type DomainStatusRequest = {
    domainUrl?: string;
};
type DomainStatus = {
    display?: string;
    status?: boolean;
};
type DomainStatusResponse = {
    connected?: boolean;
    status?: Array<DomainStatus>;
};
type DomainSuggestionsRequest = {
    domainUrl?: string;
    custom?: boolean;
};
type DomainSuggestion = {
    name: string;
    unsupported?: boolean;
    isAvailable: boolean;
    price?: number;
    currency?: string;
};
type DomainSuggestionsResponse = {
    domains?: Array<DomainSuggestion>;
};
type GetIntegrationsOptInsResponse = {
    items?: IntegrationOptIn;
    page?: Page;
};
type IntegrationOptIn = {
    validators?: Validators;
    description?: string;
    descriptionHtml?: string;
    constants?: string;
    companies?: Array<any>;
    support?: Array<string>;
    id?: string;
    name?: string;
    meta?: IntegrationMeta;
    icon?: string;
    owner?: string;
    createdAt?: string;
    updatedAt?: string;
    token?: string;
    secret?: string;
    v?: number;
};
type Validators = {
    company?: CompanyValidator;
    store?: StoreValidator;
    inventory?: InventoryValidator;
    order?: OrderValidator;
};
type CompanyValidator = {
    jsonSchema?: JsonSchema;
    browserScript?: string;
};
type JsonSchema = {
    display?: string;
    key?: string;
    type?: string;
    tooltip?: string;
};
type StoreValidator = {
    jsonSchema?: Array<JsonSchema>;
    browserScript?: string;
};
type InventoryValidator = {
    jsonSchema?: Array<JsonSchema>;
    browserScript?: string;
};
type OrderValidator = {
    jsonSchema?: Array<JsonSchema>;
    browserScript?: string;
};
type IntegrationMeta = {
    isPublic?: boolean;
    id?: string;
    name?: string;
    value?: string;
};
type Integration = {
    validators?: Validators;
    description?: string;
    descriptionHtml?: string;
    constants?: any;
    companies?: Array<any>;
    support?: Array<string>;
    id?: string;
    name?: string;
    meta?: IntegrationMeta;
    icon?: string;
    owner?: string;
    createdAt?: string;
    updatedAt?: string;
    token?: string;
    secret?: string;
    v?: number;
};
type IntegrationConfigResponse = {
    items?: IntegrationLevel;
};
type IntegrationLevel = {
    opted?: boolean;
    permissions?: Array<any>;
    lastPatch?: Array<any>;
    id?: string;
    integration?: string;
    level?: string;
    uid?: number;
    meta?: Array<any>;
    token?: string;
    createdAt?: string;
    updatedAt?: string;
    v?: number;
    data?: any;
};
type OptedStoreIntegration = {
    otherOpted?: boolean;
    otherIntegration?: IntegrationOptIn;
    otherEntity?: OtherEntity;
};
type OtherEntity = {
    opted?: boolean;
    permissions?: Array<string>;
    lastPatch?: LastPatch;
    id?: string;
    integration?: string;
    level?: string;
    uid?: number;
    data?: OtherEntityData;
    meta?: Array<any>;
    token?: string;
    createdAt?: string;
    updatedAt?: string;
    v?: number;
};
type LastPatch = {
    op?: string;
    path?: string;
    value?: string;
};
type OtherEntityData = {
    articleIdentifier?: string;
};
type App = {
    companyId?: string;
    channelType?: string;
    auth?: ApplicationAuth;
    name?: string;
    desc?: string;
};
type AppInventory = {
    brand?: InventoryBrandRule;
    store?: InventoryStoreRule;
    image?: Array<string>;
    franchiseEnabled?: boolean;
    outOfStock?: boolean;
    payment?: InventoryPaymentConfig;
    articleAssignment?: InventoryArticleAssignment;
};
type AppDomain = {
    name?: string;
};
type CompaniesResponse = {
    items?: AppInventoryCompanies;
    page?: Page;
};
type AppInventoryCompanies = {
    uid?: number;
    name?: string;
    companyType?: string;
};
type StoresResponse = {
    items?: AppInventoryStores;
    page?: Page;
};
type AppInventoryStores = {
    id?: string;
    modifiedOn?: string;
    uid?: number;
    name?: string;
    displayName?: string;
    storeType?: string;
    storeCode?: string;
    companyId?: number;
};
type FilterOrderingStoreRequest = {
    allStores?: boolean;
    deployedStores?: Array<number>;
    q?: string;
    pageNo?: number;
    pageSize?: number;
};
type DeploymentMeta = {
    deployedStores?: Array<number>;
    allStores?: boolean;
    enabled?: boolean;
    type?: string;
    id?: string;
    app?: string;
    v?: number;
};
type OrderingStoreConfig = {
    deploymentMeta?: DeploymentMeta;
};
type OtherSellerCompany = {
    uid?: number;
    name?: string;
};
type OtherSellerApplication = {
    name?: string;
    description?: string;
    id?: string;
    domain?: string;
    company?: OtherSellerCompany;
    optType?: string;
};
type OtherSellerApplications = {
    items?: Array<OtherSellerApplication>;
    page?: Page;
};
type OptedApplicationResponse = {
    name?: string;
    description?: string;
    id?: string;
    domain?: string;
    company?: OptedCompany;
    optedInventory?: OptedInventory;
    optOutInventory?: OptOutInventory;
};
type OptedCompany = {
    uid?: number;
    name?: string;
};
type OptedInventory = {
    optType?: OptType;
    items?: any;
};
type OptType = {
    key?: string;
    display?: string;
};
type OptedStore = {
    name?: string;
    storeCode?: string;
    id?: string;
    modifiedOn?: string;
    uid?: number;
    address?: OptedStoreAddress;
    displayName?: string;
    storeType?: string;
    companyId?: number;
};
type OptOutInventory = {
    store: Array<number>;
    company: Array<number>;
};
type ProductDetailFeature = {
    similar?: Array<string>;
    sellerSelection?: boolean;
    updateProductMeta?: boolean;
    requestProduct?: boolean;
};
type LaunchPage = {
    pageType?: string;
    params?: string;
    query?: string;
};
type LandingPageFeature = {
    launchPage?: LaunchPage;
    continueAsGuest?: boolean;
    loginBtnText?: string;
    showDomainTextbox?: boolean;
    showRegisterBtn?: boolean;
};
type RegistrationPageFeature = {
    askStoreAddress?: boolean;
};
type AppFeature = {
    productDetail?: ProductDetailFeature;
    landingPage?: LandingPageFeature;
    registrationPage?: RegistrationPageFeature;
    homePage?: HomePageFeature;
    common?: CommonFeature;
    cart?: CartFeature;
    qr?: QrFeature;
    pcr?: PcrFeature;
    order?: OrderFeature;
    id?: string;
    app?: string;
    createdAt?: string;
    updatedAt?: string;
    v?: number;
};
type HomePageFeature = {
    orderProcessing?: boolean;
};
type CommonFeature = {
    communicationOptinDialog?: CommunicationOptinDialogFeature;
    deploymentStoreSelection?: DeploymentStoreSelectionFeature;
    listingPrice?: ListingPriceFeature;
    listingPage?: ListingPageFeature;
    currency?: CurrencyFeature;
    revenueEngine?: RevenueEngineFeature;
    feedback?: FeedbackFeature;
    compareProducts?: CompareProductsFeature;
};
type CommunicationOptinDialogFeature = {
    visibility?: boolean;
};
type DeploymentStoreSelectionFeature = {
    enabled?: boolean;
    type?: string;
};
type ListingPriceFeature = {
    value?: string;
    sort?: string;
};
type ListingPageFeature = {
    sortOn?: string;
};
type CurrencyFeature = {
    value?: Array<string>;
    type?: string;
    defaultCurrency?: string;
};
type RevenueEngineFeature = {
    enabled?: boolean;
};
type FeedbackFeature = {
    enabled?: boolean;
};
type CompareProductsFeature = {
    enabled?: boolean;
};
type CartFeature = {
    gstInput?: boolean;
    staffSelection?: boolean;
    placingForCustomer?: boolean;
    googleMap?: boolean;
};
type QrFeature = {
    application?: boolean;
    products?: boolean;
    collections?: boolean;
};
type PcrFeature = {
    staffSelection?: boolean;
};
type OrderFeature = {
    buyAgain?: boolean;
};
type AppFeatureRequest = {
    feature?: AppFeature;
};
type AppFeatureResponse = {
    feature?: AppFeature;
};
type Currency = {
    id?: string;
    isActive?: boolean;
    name?: string;
    code?: string;
    createdAt?: string;
    updatedAt?: string;
    decimalDigits?: number;
    symbol?: string;
};
type Domain = {
    verified?: boolean;
    isPrimary?: boolean;
    isDefault?: boolean;
    isShortlink?: boolean;
    id?: string;
    name?: string;
};
type ApplicationWebsite = {
    enabled?: boolean;
    basepath?: string;
};
type ApplicationCors = {
    domains?: Array<string>;
};
type ApplicationAuth = {
    enabled?: boolean;
};
type ApplicationRedirections = {
    from?: string;
    redirectTo?: string;
    type?: string;
};
type ApplicationMeta = {
    name?: string;
    value?: string;
};
type SecureUrl = {
    secureUrl?: string;
};
type Application = {
    website?: ApplicationWebsite;
    cors?: ApplicationCors;
    auth?: ApplicationAuth;
    description?: string;
    channelType?: string;
    cacheTtl?: number;
    isInternal?: boolean;
    isActive?: boolean;
    id?: string;
    name?: string;
    owner?: string;
    companyId?: number;
    token?: string;
    redirections?: Array<ApplicationRedirections>;
    meta?: Array<ApplicationMeta>;
    createdAt?: string;
    updatedAt?: string;
    v?: number;
    banner?: SecureUrl;
    logo?: SecureUrl;
    favicon?: SecureUrl;
    domains?: Array<Domain>;
    appType?: string;
    mobileLogo?: SecureUrl;
    domain?: Domain;
};
type NotFound = {
    message?: string;
};
type UnhandledError = {
    message?: string;
};
type InvalidPayloadRequest = {
    message?: string;
};
type SuccessMessageResponse = {
    message?: string;
};
type InventoryBrandRule = {
    criteria?: string;
    brands?: Array<number>;
};
type StoreCriteriaRule = {
    companies?: Array<number>;
    brands?: Array<number>;
};
type InventoryStoreRule = {
    criteria?: string;
    rules?: Array<StoreCriteriaRule>;
    stores?: Array<number>;
};
type InventoryPaymentConfig = {
    modeOfPayment?: string;
    source?: string;
};
type StorePriorityRule = {
    enabled?: boolean;
    storetypeOrder?: Array<string>;
};
type ArticleAssignmentRule = {
    storePriority?: StorePriorityRule;
};
type InventoryArticleAssignment = {
    postOrderReassignment?: boolean;
    enforcedStores?: Array<number>;
    rules?: ArticleAssignmentRule;
};
type CompanyAboutAddress = {
    pincode?: number;
    address1?: string;
    address2?: string;
    city?: string;
    state?: string;
    country?: string;
    addressType?: string;
};
type UserEmail = {
    active?: boolean;
    primary?: boolean;
    verified?: boolean;
    email?: string;
};
type UserPhoneNumber = {
    active?: boolean;
    primary?: boolean;
    verified?: boolean;
    countryCode?: number;
    phone?: string;
};
type ApplicationInformation = {
    address?: InformationAddress;
    support?: InformationSupport;
    socialLinks?: SocialLinks;
    links?: Links;
    copyrightText?: string;
    id?: string;
    businessHighlights?: BusinessHighlights;
    application?: string;
    createdAt?: string;
    updatedAt?: string;
    v?: number;
};
type InformationAddress = {
    loc?: string;
    addressLine?: Array<string>;
    phone?: InformationPhone;
    city?: string;
    country?: string;
    pincode?: number;
};
type InformationPhone = {
    code?: string;
    number?: string;
};
type InformationSupport = {
    phone?: Array<string>;
    email?: Array<string>;
    timing?: string;
};
type SocialLinks = {
    facebook?: Facebook;
    instagram?: Instagram;
    twitter?: Twitter;
    pinterest?: Pinterest;
    googlePlus?: GooglePlus;
    youtube?: Youtube;
    linkedIn?: LinkedIn;
    vimeo?: Vimeo;
    blogLink?: BlogLink;
};
type Instagram = {
    title?: string;
    icon?: string;
    link?: string;
};
type Twitter = {
    title?: string;
    icon?: string;
    link?: string;
};
type Pinterest = {
    title?: string;
    icon?: string;
    link?: string;
};
type GooglePlus = {
    title?: string;
    icon?: string;
    link?: string;
};
type Youtube = {
    title?: string;
    icon?: string;
    link?: string;
};
type LinkedIn = {
    title?: string;
    icon?: string;
    link?: string;
};
type Vimeo = {
    title?: string;
    icon?: string;
    link?: string;
};
type BlogLink = {
    title?: string;
    icon?: string;
    link?: string;
};
type Links = {
    title?: string;
    link?: string;
};
type BusinessHighlights = {
    id?: string;
    title?: string;
    icon?: string;
    subTitle?: string;
};
type ApplicationDetail = {
    name: string;
    description: string;
    logo: SecureUrl;
    mobileLogo: SecureUrl;
    favicon: SecureUrl;
    banner: SecureUrl;
    domain?: Domain;
    domains?: Array<Domain>;
    id?: string;
};
type CurrenciesResponse = {
    items?: Array<Currency>;
};
type StoreLatLong = {
    type?: string;
    coordinates?: Array<number>;
};
type OptedStoreAddress = {
    state?: string;
    address1?: string;
    latLong?: StoreLatLong;
    address2?: string;
    pincode?: number;
    country?: string;
    city?: string;
};
type OrderingStore = {
    address?: OptedStoreAddress;
    id?: string;
    uid?: number;
    name?: string;
    displayName?: string;
    storeType?: string;
    storeCode?: string;
    pincode?: number;
    code?: string;
};
type OrderingStores = {
    page?: Page;
    items?: Array<OrderingStore>;
    deployedStores?: Array<number>;
    allStores?: boolean;
    enabled?: boolean;
    type?: string;
    id?: string;
    app?: string;
    v?: number;
};
type TokenResponse = {
    tokens?: Tokens;
    id?: string;
    application?: string;
    createdAt?: string;
    updatedAt?: string;
    v?: number;
};
type Tokens = {
    firebase?: Firebase;
    moengage?: Moengage;
    segment?: Segment;
    gtm?: Gtm;
    freshchat?: Freshchat;
    safetynet?: Safetynet;
    fyndRewards?: FyndRewards;
    auth?: Auth;
    googleMap?: GoogleMap;
};
type Firebase = {
    credentials?: Credentials;
    enabled?: boolean;
};
type Credentials = {
    ios?: Ios;
    android?: Android;
    projectId?: string;
    gcmSenderId?: string;
    applicationId?: string;
    apiKey?: string;
};
type Ios = {
    applicationId?: string;
    apiKey?: string;
};
type Android = {
    applicationId?: string;
    apiKey?: string;
};
type Moengage = {
    credentials?: MoengageCredentials;
    enabled?: boolean;
};
type MoengageCredentials = {
    appId?: string;
};
type Segment = {
    credentials?: SegmentCredentials;
    enabled?: boolean;
};
type SegmentCredentials = {
    writeKey?: string;
};
type Gtm = {
    credentials?: GtmCredentials;
    enabled?: boolean;
};
type GtmCredentials = {
    apiKey?: string;
};
type Freshchat = {
    credentials?: FreshchatCredentials;
    enabled?: boolean;
};
type FreshchatCredentials = {
    appId?: string;
    appKey?: string;
    webToken?: string;
};
type Safetynet = {
    credentials?: SafetynetCredentials;
    enabled?: boolean;
};
type SafetynetCredentials = {
    apiKey?: string;
};
type FyndRewards = {
    credentials?: FyndRewardsCredentials;
};
type FyndRewardsCredentials = {
    publicKey?: string;
};
type Auth = {
    google?: Google;
    facebook?: Facebook;
    accountkit?: Accountkit;
};
type GoogleMap = {
    credentials?: GoogleMapCredentials;
};
type GoogleMapCredentials = {
    apiKey?: string;
};
type Rule = {
    min?: number;
    value?: number;
    discountQty?: number;
    max?: number;
    key?: number;
};
type Ownership = {
    payableCategory: string;
    payableBy: string;
};
type CouponDateMeta = {
    modifiedOn?: string;
    createdOn?: string;
};
type DisplayMetaDict = {
    title?: string;
    subtitle?: string;
};
type DisplayMeta = {
    auto?: DisplayMetaDict;
    apply?: DisplayMetaDict;
    remove?: DisplayMetaDict;
    title?: string;
    description?: string;
    subtitle?: string;
};
type CouponSchedule = {
    end?: string;
    cron?: string;
    duration?: number;
    start?: string;
    nextSchedule?: Array<any>;
};
type BulkBundleRestriction = {
    multiStoreAllowed: boolean;
};
type UsesRemaining = {
    total?: number;
    user?: number;
    app?: number;
};
type UsesRestriction = {
    remaining?: UsesRemaining;
    maximum?: UsesRemaining;
};
type PostOrder = {
    returnAllowed?: boolean;
    cancellationAllowed?: boolean;
};
type PriceRange = {
    min?: number;
    max?: number;
};
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    codes?: Array<string>;
    types?: Array<string>;
    uses?: PaymentAllowValue;
    networks?: Array<string>;
};
type PaymentCodes = {
    upi?: PaymentModes;
    qr?: PaymentModes;
    pl?: PaymentModes;
    wl?: PaymentModes;
    ps?: PaymentModes;
    nb?: PaymentModes;
    card?: PaymentModes;
};
type Restrictions = {
    couponAllowed?: boolean;
    orderingStores?: Array<number>;
    bulkBundle?: BulkBundleRestriction;
    uses?: UsesRestriction;
    platforms?: Array<string>;
    postOrder?: PostOrder;
    priceRange?: PriceRange;
    payments?: PaymentCodes;
};
type RuleDefinition = {
    scope?: Array<string>;
    calculateOn: string;
    currencyCode?: string;
    isExact?: boolean;
    autoApply?: boolean;
    type: string;
    applicableOn: string;
    valueType: string;
};
type State = {
    isDisplay?: boolean;
    isPublic?: boolean;
    isArchived?: boolean;
};
type Validation = {
    anonymous?: boolean;
    appId?: Array<string>;
    userRegisteredAfter?: string;
};
type Identifier = {
    collectionId?: Array<string>;
    articleId?: Array<string>;
    itemId?: Array<number>;
    brandId?: Array<number>;
    companyId?: Array<number>;
    userId?: Array<string>;
    storeId?: Array<number>;
    categoryId?: Array<number>;
};
type Validity = {
    priority?: number;
};
type CouponAction = {
    actionDate?: string;
    txnMode?: string;
};
type CouponAuthor = {
    modifiedBy?: string;
    createdBy?: string;
};
type CouponAdd = {
    code: string;
    rule: Array<Rule>;
    typeSlug: string;
    ownership: Ownership;
    dateMeta?: CouponDateMeta;
    tags?: Array<string>;
    displayMeta: DisplayMeta;
    schedule?: CouponSchedule;
    restrictions?: Restrictions;
    ruleDefinition: RuleDefinition;
    state?: State;
    validation?: Validation;
    identifiers: Identifier;
    validity: Validity;
    action?: CouponAction;
    author?: CouponAuthor;
};
type CouponsResponse = {
    items?: CouponAdd;
    page?: Page;
};
type SuccessMessage = {
    success?: boolean;
    message?: string;
};
type OperationErrorResponse = {
    success?: boolean;
    message?: string;
};
type CouponUpdate = {
    code: string;
    rule: Array<Rule>;
    typeSlug: string;
    ownership: Ownership;
    dateMeta?: CouponDateMeta;
    tags?: Array<string>;
    displayMeta: DisplayMeta;
    schedule?: CouponSchedule;
    restrictions?: Restrictions;
    ruleDefinition: RuleDefinition;
    state?: State;
    validation?: Validation;
    identifiers: Identifier;
    validity: Validity;
    action?: CouponAction;
    author?: CouponAuthor;
};
type CouponPartialUpdate = {
    archive?: boolean;
    schedule?: CouponSchedule;
};
type StoreMapping = {
    enabled?: string;
    marketplaceStoreId?: string;
    storeId?: number;
    meta?: any;
};
type AllChannels = {
    mkpName?: boolean;
};
type MyntraPayload = {
    merchantId?: string;
    secretKey?: string;
};
type AmazonPayload = {
    sellerId?: string;
    mwsAuthToken?: string;
};
type FlipkartPayload = {
    code?: string;
};
type TatacliqPayload = {
    userName?: string;
    password?: string;
    merchantId?: string;
};
type AjioPayload = {
    username?: string;
    password?: string;
    clientIp?: string;
};
type InventorySyncConfig = {
    inventory?: boolean;
    price?: boolean;
};
type StoreMappingPayload = {
    storeMappingEnabled?: boolean;
    storeMapping?: Array<StoreMapping>;
};
type StatusPayload = {
    isActive?: boolean;
};
type StatusResp = {
    isActive?: boolean;
};
type SyncPayload = {
    modifiedSince?: string;
};
type SyncResp = {
    message?: string;
};
type MkpResp = {
    marketplace?: string;
    worker?: number;
    workerAssigned?: string;
    isActive?: boolean;
    storeMappingEnabled?: boolean;
    companyId?: number;
    configuration?: any;
    storeMapping?: Array<StoreMapping>;
};
type StatGroup = {
    key?: string;
    url?: string;
    title?: string;
};
type StatsGroups = {
    groups?: Array<StatGroup>;
};
type StatsGroupComponent = {
    key?: string;
    url?: string;
    title?: string;
    type?: string;
    filters?: any;
};
type StatsGroupComponents = {
    title?: string;
    components?: Array<StatsGroupComponent>;
};
type StatsRes = {
    key?: string;
    title?: string;
    type?: string;
    data?: any;
};
type ReceivedAt = {
    value?: string;
};
type AbandonCartsDetail = {
    propertiesCartId?: string;
    contextTraitsFirstName?: string;
    contextTraitsLastName?: string;
    contextTraitsPhoneNumber?: string;
    contextTraitsEmail?: string;
    contextAppApplicationId?: string;
    propertiesBreakupValuesRawTotal?: string;
    receivedAt?: ReceivedAt;
};
type AbandonCartsList = {
    items?: Array<AbandonCartsDetail>;
    cartTotal?: string;
    page?: Page;
};
type AbandonCartDetail = {
    id?: string;
    userId?: string;
    cartValue?: string;
    articles?: Array<any>;
    breakup?: any;
    address?: any;
};
type ExportJobReq = {
    marketplaceName?: string;
    startTime?: string;
    endTime?: string;
    eventType?: string;
};
type ExportJobRes = {
    status?: string;
    jobId?: string;
};
type ExportJobStatusRes = {
    status?: string;
    jobId?: string;
    downloadUrl?: string;
};
type GetLogsListReq = {
    marketplaceName?: string;
    startDate?: string;
    companyId?: string;
    endDate?: string;
};
type MkpLogsResp = {
    startTimeIso?: string;
    endTimeIso?: string;
    eventType?: string;
    traceId?: string;
    count?: string;
    status?: string;
};
type GetLogsListRes = {
    items?: Array<MkpLogsResp>;
    page?: Page;
};
type SearchLogReq = {
    marketplaceName?: string;
    startDate?: string;
    companyId?: string;
    endDate?: string;
    identifier?: string;
    identifierValue?: string;
};
type LogInfo = {
    id?: string;
    status?: string;
    eventType?: string;
    marketplaceName?: string;
    event?: string;
    traceId?: string;
    companyId?: number;
    brandId?: number;
    storeCode?: string;
    storeId?: number;
    itemId?: number;
    articleId?: string;
    sellerIdentifier?: string;
};
type SearchLogRes = {
    items?: Array<LogInfo>;
    page?: Page;
};
import Paginator = require("../common/Paginator");
import { OrderValidator } from "./PlatformApplicationModels";
