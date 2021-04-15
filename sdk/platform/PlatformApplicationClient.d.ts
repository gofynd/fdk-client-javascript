export = PlatformApplicationClient;
declare class PlatformApplicationClient {
    constructor(applicationId: any, config: any);
    config: any;
    companyId: any;
    applicationId: any;
    lead: Lead;
    feedback: Feedback;
    theme: Theme;
    user: User;
    content: Content;
    communication: Communication;
    payment: Payment;
    order: Order;
    catalog: Catalog;
    fileStorage: FileStorage;
    share: Share;
    configuration: Configuration;
    cart: Cart;
    rewards: Rewards;
    analytics: Analytics;
    partner: Partner;
}
declare namespace PlatformApplicationClient {
    export { TicketList, Page, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, KeyValue, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, UserSchema, PhoneNumber, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketCategory, SubmitButton, PollForAssignment, CustomForm, TicketHistory, Ticket, Activity, ActivityDump, AddMediaListRequest, AddMediaRequest, ApproveRequest, Attribute, AttributeObject, CreatedBy, CursorGetResponse, DateMeta, DeviceMeta, Entity, EntityRequest, FeedbackAttributes, FeedbackError, FeedbackState, GetResponse, GetReviewResponse, InsertResponse, MediaMeta, MediaMetaRequest, NumberGetResponse, PageCursor, PageNumber, Rating, RatingRequest, ReportAbuseRequest, Review, ReviewFacet, ReviewRequest, SaveAttributeRequest, SortMethod, TagMeta, Template, TemplateGetResponse, TemplateRequest, TemplateRequestList, UI, UIIcon, UpdateAttributeRequest, UpdateResponse, UpdateReviewRequest, UpdateTemplateRequest, UpdateTemplateStatusRequest, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, pagesSchema, availableSectionSchema, sectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, AvailablePages, Seo, Sections, Config, Preset, GlobalSchema, ListSchema, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, BlocksProps, PageSections, PageSectionsBlocks, PageSectionsBlocksProps, Predicate, Screen, PredicateUserSchema, Route, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, SendEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, AuthSuccess, SendOtpResponse, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, Mobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, Facebook, Accountkit, Google, ApplicationLegal, ApplicationLegalFAQ, SeoComponent, SeoSchema, CustomMetaTag, Detail, StorefrontAnnouncement, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, announcementSchema, scheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, AnnouncementDataSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, APIError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, CustomBlogSchema, FeatureImage, CustomBlog, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, UnauthenticatedUser, UnauthenticatedApplication, BadRequest, ResourceNotFound, InternalServerError, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutsResponse, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, GetActivityStatus, ActivityHistory, FailedOrders, FailOrder, MarketplaceOrder, TotalDiscountsSet, PresentmentMoney, ShopMoney, TotalPriceSet, TotalPriceSetShopMoney, TotalPriceSetPresentmentMoney, TotalTaxSet, TotalTaxSetShopMoney, TotalTaxSetPresentmentMoney, SubtotalPriceSet, SubtotalPriceSetShopMoney, SubtotalPriceSetPresentmentMoney, LineItems, LineItemsArticle, Quantities, NotAvailable, Sellable, OrderCommitted, Damaged, Manufacturer, ArticlePrice, Company, FailOrderDateMeta, MarketplaceIdentifiers, TatacliqLuxury, Dimension, Weight, Store, ArticleMeta, ArticleBrand, LineItemsArticleIdentifier, PriceSet, PriceSetShopMoney, PriceSetPresentmentMoney, TaxLines, TaxLinesPriceSet, TaxLinesPriceSetShopMoney, TaxLinesPriceSetPresentmentMoney, TotalDiscountSet, TotalDiscountSetPresentmentMoney, TotalDiscountSetShopMoney, BillingAddress, TotalShippingPriceSet, TotalShippingPriceSetShopMoney, TotalShippingPriceSetPresentmentMoney, Customer, DefaultAddress, TotalLineItemsPriceSet, TotalLineItemsPriceSetShopMoney, TotalLineItemsPriceSetPresentmentMoney, ShippingAddress, OrderListing, OrderItems, PlatformOrderUserInfo, PlatformDeliveryAddress, Channel, PlatformBreakupValues, PlatformApplication, ArticleAssignment, PlatformShipment, PlatformShipmentStatus, Bags, BagFinancialBreakup, Identifiers, BagCurrStatus, BagItem, BagItemAttributes, BagArticle, ArticleIdentifiers, Set, SetSizeDistribution, Sizes, BagArticleReturnConfig, ShipmentPrices, GstDetails, BagBreakupValues, BagCurrentStatus, BagStateMapper, BagStatus, BagStatusBagStateMapper, BagPrices, ShipmentBreakupValues, DpDetails, ShipmentInvoice, RtoAddress, StoreAddressJson, PlatformFulfillingStore, FulfillingStoreMeta, AdditionalContactDetails, Documents, Gst, ProductReturnConfig, Timing, Opening, Closing, FulfillingStoreStoreAddressJson, Payments, ShipmentGst, PlatformShipmentBrand, Promise, Timestamp, ShipmentTrackingDetails, ShipmentUser, ItemsPayments, Filters, Stages, StagesFilters, Options, NextOrderStatus, BagConfirmed, DpAssigned, ReturnBagDelivered, Placed, DeliveryDone, Pending, BagPacked, PlatformOrderPage, ItemTotal, AppliedFilters, UpdateOrderReprocessResponse, PlatformOrderTrack, GetPingResponse, UpdateShipmentStatusResponse, UpdateShipmentStatusBody, PlatformShipmentTrack, Results, UpdateProcessShipmenstRequestBody, UpdateProcessShipmenstRequestResponse, GetVoiceCallbackResponse, GetClickToCallResponse, ApefaceApiError, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsData, ErrorResponse, DeleteResponse, GetSearchWordsDetailResponse, GetSearchWordsResponse, AutocompletePageAction, AutocompleteAction, Media, AutocompleteResult, CreateAutocompleteKeyword, GetAutocompleteWordsData, GetAutocompleteWordsResponse, CreateAutocompleteWordsResponse, ProductBundleItem, ProductBundleRequest, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleUpdateRequest, Price, LimitedProductData, Size, GetProducts, GetProductBundleResponse, Meta, Guide, ValidateSizeGuide, SuccessResponse, ListSizeGuide, SizeGuideResponse, GetCatalogConfigurationDetailsProduct, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingResponse, GetCatalogConfigurationMetaData, ProductSize, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProduct, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListing, AppConfiguration, AppCatalogConfiguration, GetAppCatalogConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductFiltersValue, ProductFiltersKey, ProductFilters, ProductSortOn, GetCollectionQueryOptionResponse, CollectionBadge, UserInfo, CollectionImage, CollectionBanner, Schedule, SeoDetail, CreateCollection, BannerImage, ImageUrls, CollectionCreateResponse, CollectionListingFilterType, CollectionListingFilterTag, CollectionListingFilter, ProductListingActionPage, ProductListingAction, Media1, GetCollectionDetailNest, GetCollectionListingResponse, CollectionDetailResponse, CollectionItemRequest, UpdatedResponse, Price1, ProductListingPrice, ProductListingDetail, GetCollectionItemsResponse, CatalogInsightItem, CatalogInsightBrand, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeMasterDetails, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeSchemaRange, AttributeMaster, AttributeMasterFilter, GenderDetail, ProdcutTemplateCategoriesResponse, PTErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, ProductTemplate, TemplatesResponse, Properties, GlobalValidation, TemplateValidationData, TemplateDetails, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, UserInfo1, ProductTemplateExport, ProductDownloadsResponse, ProductConfigurationDownloads, Media2, CategoryMappingValues, CategoryMapping, Hierarchy, CategoryRequestBody, CategoryCreateResponse, Category, CategoryResponse, CategoryUpdateResponse, SingleCategoryResponse, Trader, CustomOrder, OrderQuantity, TeaserTag, ProductPublish, ReturnConfig, ProductCreateUpdate, PageData, VerifiedBy, UserCommon, Attributes, Logo, Brand, ProductPublished, Product, ProductListingResponse, ValidateProduct, BulkJob, UserDetail, ProductBulkRequest, ProductBulkRequestList, BulkProductRequest, NestedTags, ProductTagsViewResponse, ProductBulkAssets, Items, BulkAssetResponse, ItemQuery, SetSize, SizeDistribution, InventorySet, GTIN, InvSize, InventoryRequest, InventoryRequest1, CommonResponse, BulkRequestGet, Size1, InventoryBulkRequest, InventoryExportRequest, InventoryExportJob, FilerList, InventoryConfig, HsnUpsert, HsnCodesObject, HsnCode, PageResponse, HsnCodesListingResponse, BulkHsnUpsert, BulkHsnResponse, Document, ReferralInfo, CompanyAddress, BusinessCountryInfo, CompanyStoreSerializerRequest, BusinessCountryInfo1, SellerPhoneNumber, ContactDetails, Website, BusinessDetails, GetAddressSerializer, GetCompanyProfileSerializerResponse, DocumentsObj, MetricsSerializer, UserSerializer1, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanyBrandPostRequestSerializer, GetCompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, LocationManagerSerializer, ProductReturnConfigSerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, GetAddressSerializer1, LocationTimingSerializer, LocationDayWiseSerializer, LocationSerializer, LocationIntegrationType, GetLocationSerializer, LocationListSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, RewardPointsConfig, Credit, Debit, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPoints, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, ListingPageFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, Instagram, Twitter, Pinterest, GooglePlus, Youtube, LinkedIn, Vimeo, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, Auth, GoogleMap, GoogleMapCredentials, Rule, Identifier, RuleDefinition, Validity, Ownership, CouponAuthor, DisplayMetaDict, DisplayMeta, Validation, CouponAction, State, PostOrder, PaymentAllowValue, PaymentModes, PaymentCodes, BulkBundleRestriction, UsesRemaining, UsesRestriction, PriceRange, Restrictions, CouponDateMeta, CouponSchedule, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, StoreMapping, AllChannels, MyntraPayload, AmazonPayload, FlipkartPayload, TatacliqPayload, AjioPayload, InventorySyncConfig, StoreMappingPayload, StatusPayload, StatusResp, SyncPayload, SyncResp, MkpResp, AppUser, E, Giveaway, GiveawayResponse, HistoryPretty, HistoryRes, Offer, Points, Referral, RewardUser, RewardsAudience, RewardsRule, ShareMessages, UserRes, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, ApiError, RemoveProxyResponse };
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
        @typedef Activity
        
        
        @property { Object } [currentState]
        
        @property { string } [documentId]
        
        @property { Object } [previousState]
        
         
    */
/**
        @typedef ActivityDump
        
        
        @property { Activity } [activity]
        
        @property { CreatedBy } [createdBy]
        
        @property { DateMeta } [dateMeta]
        
        @property { string } [id]
        
        @property { string } [type]
        
         
    */
/**
        @typedef AddMediaListRequest
        
        
        @property { string } [entityId]
        
        @property { string } [entityType]
        
        @property { Array<AddMediaRequest> } [mediaList]
        
        @property { string } [refId]
        
        @property { string } [refType]
        
         
    */
/**
        @typedef AddMediaRequest
        
        
        @property { string } [cloudId]
        
        @property { string } [cloudName]
        
        @property { string } [cloudProvider]
        
        @property { string } [entityId]
        
        @property { string } [entityType]
        
        @property { string } [mediaUrl]
        
        @property { string } [refId]
        
        @property { string } [refType]
        
        @property { Array<string> } [tags]
        
        @property { string } [thumbnailUrl]
        
        @property { string } [type]
        
         
    */
/**
        @typedef ApproveRequest
        
        
        @property { boolean } [approve]
        
        @property { string } [entityType]
        
        @property { string } id
        
        @property { string } [reason]
        
         
    */
/**
        @typedef Attribute
        
        
        @property { DateMeta } [dateMeta]
        
        @property { string } [description]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { string } [slug]
        
        @property { Array<TagMeta> } [tags]
        
         
    */
/**
        @typedef AttributeObject
        
        
        @property { string } [description]
        
        @property { string } name
        
        @property { string } [slug]
        
        @property { string } [title]
        
        @property { string } type
        
        @property { number } value
        
         
    */
/**
        @typedef CreatedBy
        
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { Array<TagMeta> } [tags]
        
         
    */
/**
        @typedef CursorGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef DateMeta
        
        
        @property { string } [createdOn]
        
        @property { string } [modifiedOn]
        
         
    */
/**
        @typedef DeviceMeta
        
        
        @property { string } [appVersion]
        
        @property { string } [platform]
        
         
    */
/**
        @typedef Entity
        
        
        @property { string } [id]
        
        @property { string } [type]
        
         
    */
/**
        @typedef EntityRequest
        
        
        @property { string } [entityId]
        
        @property { string } [entityType]
        
         
    */
/**
        @typedef FeedbackAttributes
        
        
        @property { Array<Attribute> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef FeedbackError
        
        
        @property { Object } [code]
        
        @property { string } [exception]
        
        @property { string } [info]
        
        @property { string } [message]
        
        @property { Object } [meta]
        
        @property { string } [requestId]
        
        @property { string } [stackTrace]
        
        @property { number } [status]
        
         
    */
/**
        @typedef FeedbackState
        
        
        @property { boolean } [active]
        
        @property { boolean } [archive]
        
        @property { string } [media]
        
        @property { boolean } [qna]
        
        @property { boolean } [rating]
        
        @property { boolean } [review]
        
         
    */
/**
        @typedef GetResponse
        
        
        @property { Object } [data]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef GetReviewResponse
        
        
        @property { Array<ReviewFacet> } [facets]
        
        @property { Array<Object> } [items]
        
        @property { Page } [page]
        
        @property { Array<SortMethod> } [sort]
        
         
    */
/**
        @typedef InsertResponse
        
        
        @property { number } [count]
        
         
    */
/**
        @typedef MediaMeta
        
        
        @property { number } [maxCount]
        
        @property { number } [size]
        
        @property { string } [type]
        
         
    */
/**
        @typedef MediaMetaRequest
        
        
        @property { number } maxCount
        
        @property { number } size
        
         
    */
/**
        @typedef NumberGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef PageCursor
        
        
        @property { number } [current]
        
        @property { boolean } [hasNext]
        
        @property { boolean } [hasPrevious]
        
        @property { number } [itemTotal]
        
        @property { string } [nextId]
        
        @property { number } size
        
        @property { string } type
        
         
    */
/**
        @typedef PageNumber
        
        
        @property { number } [current]
        
        @property { boolean } [hasNext]
        
        @property { number } [itemTotal]
        
        @property { number } [size]
        
        @property { string } [type]
        
         
    */
/**
        @typedef Rating
        
        
        @property { Array<Attribute> } [attributes]
        
        @property { Array<string> } [attributesSlugs]
        
        @property { UI } [ui]
        
         
    */
/**
        @typedef RatingRequest
        
        
        @property { Array<string> } attributes
        
        @property { UI } [ui]
        
         
    */
/**
        @typedef ReportAbuseRequest
        
        
        @property { string } [description]
        
        @property { string } entityId
        
        @property { string } entityType
        
         
    */
/**
        @typedef Review
        
        
        @property { string } [description]
        
        @property { string } [header]
        
        @property { MediaMeta } [imageMeta]
        
        @property { string } [title]
        
        @property { MediaMeta } [videoMeta]
        
        @property { boolean } [voteAllowed]
        
         
    */
/**
        @typedef ReviewFacet
        
        
        @property { string } [display]
        
        @property { string } [name]
        
        @property { boolean } [selected]
        
        @property { string } [slug]
        
        @property { string } [type]
        
         
    */
/**
        @typedef ReviewRequest
        
        
        @property { string } description
        
        @property { string } header
        
        @property { MediaMetaRequest } imageMeta
        
        @property { boolean } isVoteAllowed
        
        @property { string } title
        
        @property { MediaMetaRequest } videoMeta
        
         
    */
/**
        @typedef SaveAttributeRequest
        
        
        @property { string } [description]
        
        @property { string } name
        
        @property { string } slug
        
         
    */
/**
        @typedef SortMethod
        
        
        @property { string } [name]
        
        @property { boolean } [selected]
        
        @property { string } [type]
        
         
    */
/**
        @typedef TagMeta
        
        
        @property { Array<MediaMeta> } [media]
        
        @property { string } [name]
        
        @property { string } [type]
        
         
    */
/**
        @typedef Template
        
        
        @property { DateMeta } [dateMeta]
        
        @property { Entity } [entity]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { Rating } [rating]
        
        @property { Review } [review]
        
        @property { FeedbackState } [state]
        
        @property { Array<TagMeta> } [tags]
        
         
    */
/**
        @typedef TemplateGetResponse
        
        
        @property { Array<Template> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef TemplateRequest
        
        
        @property { boolean } active
        
        @property { string } [enableMediaType]
        
        @property { boolean } [enableQna]
        
        @property { boolean } enableRating
        
        @property { boolean } enableReview
        
        @property { EntityRequest } entity
        
        @property { RatingRequest } rating
        
        @property { ReviewRequest } review
        
         
    */
/**
        @typedef TemplateRequestList
        
        
        @property { Array<TemplateRequest> } templateList
        
         
    */
/**
        @typedef UI
        
        
        @property { Array<string> } [feedbackQuestion]
        
        @property { UIIcon } [icon]
        
        @property { Array<string> } [text]
        
        @property { string } [type]
        
         
    */
/**
        @typedef UIIcon
        
        
        @property { string } [active]
        
        @property { string } [inactive]
        
        @property { Array<string> } [selected]
        
         
    */
/**
        @typedef UpdateAttributeRequest
        
        
        @property { string } [description]
        
        @property { string } name
        
        @property { string } [slug]
        
         
    */
/**
        @typedef UpdateResponse
        
        
        @property { number } [count]
        
         
    */
/**
        @typedef UpdateReviewRequest
        
        
        @property { boolean } [active]
        
        @property { string } [application]
        
        @property { boolean } [approve]
        
        @property { boolean } [archive]
        
        @property { Array<AttributeObject> } [attributesRating]
        
        @property { string } [description]
        
        @property { DeviceMeta } [deviceMeta]
        
        @property { string } [entityId]
        
        @property { string } [entityType]
        
        @property { Array<MediaMeta> } [mediaResource]
        
        @property { number } [rating]
        
        @property { string } [reviewId]
        
        @property { string } [templateId]
        
        @property { string } [title]
        
         
    */
/**
        @typedef UpdateTemplateRequest
        
        
        @property { boolean } active
        
        @property { string } [enableMediaType]
        
        @property { boolean } [enableQna]
        
        @property { boolean } enableRating
        
        @property { boolean } enableReview
        
        @property { EntityRequest } entity
        
        @property { RatingRequest } rating
        
        @property { ReviewRequest } review
        
         
    */
/**
        @typedef UpdateTemplateStatusRequest
        
        
        @property { boolean } [active]
        
        @property { boolean } [archive]
        
         
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
        @typedef ApplicationLegal
        
        
        @property { string } [application]
        
        @property { string } [tnc]
        
        @property { string } [policy]
        
        @property { string } [shipping]
        
        @property { Array<ApplicationLegalFAQ> } [faq]
        
        @property { string } [id]
        
        @property { string } [updatedAt]
        
        @property { string } [createdAt]
        
         
    */
/**
        @typedef ApplicationLegalFAQ
        
        
        @property { string } [question]
        
        @property { string } [answer]
        
         
    */
/**
        @typedef SeoComponent
        
        
        @property { SeoSchema } [seo]
        
         
    */
/**
        @typedef SeoSchema
        
        
        @property { string } [app]
        
        @property { string } [id]
        
        @property { string } [robotsTxt]
        
        @property { boolean } [sitemapEnabled]
        
        @property { Array<Object> } [customMetaTags]
        
        @property { Object } [details]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
         
    */
/**
        @typedef CustomMetaTag
        
        
        @property { string } [name]
        
        @property { string } [content]
        
        @property { string } [id]
        
         
    */
/**
        @typedef Detail
        
        
        @property { string } [title]
        
        @property { string } [description]
        
         
    */
/**
        @typedef StorefrontAnnouncement
        
        
        @property { AnnouncementSchema } [announcements]
        
        @property { number } [refreshRate]
        
        @property { Array<string> } [refreshPages]
        
         
    */
/**
        @typedef AnnouncementPageSchema
        
        
        @property { string } [pageSlug]
        
        @property { string } [type]
        
         
    */
/**
        @typedef EditorMeta
        
        
        @property { string } [foregroundColor]
        
        @property { string } [backgroundColor]
        
        @property { string } [contentType]
        
        @property { string } [content]
        
         
    */
/**
        @typedef AnnouncementAuthorSchema
        
        
        @property { string } [createdBy]
        
        @property { string } [modifiedBy]
        
         
    */
/**
        @typedef AdminAnnouncementSchema
        
        
        @property { string } [id]
        
        @property { Array<string> } [platforms]
        
        @property { string } [title]
        
        @property { string } [announcement]
        
        @property { Array<AnnouncementPageSchema> } [pages]
        
        @property { EditorMeta } [editorMeta]
        
        @property { AnnouncementAuthorSchema } [author]
        
        @property { string } [createdAt]
        
        @property { string } [app]
        
        @property { string } [modifiedAt]
        
        @property { ScheduleSchema } [schedule]
        
         
    */
/**
        @typedef ScheduleSchema
        
        
        @property { string } [cron]
        
        @property { string } [start]
        
        @property { string } [end]
        
        @property { number } [duration]
        
        @property { Array<Object> } [nextSchedule]
        
         
    */
/**
        @typedef NextSchedule
        
        
        @property { string } [start]
        
        @property { string } [end]
        
         
    */
/**
        @typedef AnnouncementSchema
        
        
        @property { Array<Object> } [pageSlug]
        
         
    */
/**
        @typedef announcementSchema
        
        
        @property { string } [announcement]
        
        @property { scheduleStartSchema } [schedule]
        
         
    */
/**
        @typedef scheduleStartSchema
        
        
        @property { string } [start]
        
         
    */
/**
        @typedef BlogGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef ResourceContent
        
        
        @property { string } [type]
        
        @property { string } [value]
        
         
    */
/**
        @typedef Asset
        
        
        @property { string } [aspectRatio]
        
        @property { string } [id]
        
        @property { string } [secureUrl]
        
         
    */
/**
        @typedef Author
        
        
        @property { string } [designation]
        
        @property { string } [id]
        
        @property { string } [name]
        
         
    */
/**
        @typedef BlogSchema
        
        
        @property { string } [id]
        
        @property { Object } [customJson]
        
        @property { string } [application]
        
        @property { boolean } [archived]
        
        @property { Object } [author]
        
        @property { Array<ResourceContent> } [content]
        
        @property { Object } [featureImage]
        
        @property { boolean } [published]
        
        @property { string } [readingTime]
        
        @property { string } [slug]
        
        @property { Array<string> } [tags]
        
        @property { SEO } [seo]
        
        @property { CronSchedule } [schedule]
        
        @property { string } [title]
        
        @property { DateMeta } [dateMeta]
        
         
    */
/**
        @typedef SEO
        
        
        @property { string } [description]
        
        @property { SEOImage } [image]
        
        @property { string } [title]
        
         
    */
/**
        @typedef SEOImage
        
        
        @property { string } [url]
        
         
    */
/**
        @typedef BlogRequest
        
        
        @property { string } [application]
        
        @property { Object } [customJson]
        
        @property { Object } [author]
        
        @property { Array<ResourceContent> } [content]
        
        @property { Object } [featureImage]
        
        @property { boolean } [published]
        
        @property { string } [readingTime]
        
        @property { string } [slug]
        
        @property { Array<string> } [tags]
        
        @property { string } [title]
        
        @property { SEO } [seo]
        
        @property { CronSchedule } [schedule]
        
         
    */
/**
        @typedef GetAnnouncementListSchema
        
        
        @property { Array<AdminAnnouncementSchema> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef CreateAnnouncementSchema
        
        
        @property { string } [message]
        
        @property { AdminAnnouncementSchema } [data]
        
         
    */
/**
        @typedef Navigation
        
        
        @property { string } [name]
        
        @property { string } [slug]
        
        @property { string } [orientation]
        
        @property { CreatedBySchema } [createdBy]
        
        @property { DateMeta } [dateMeta]
        
        @property { string } [id]
        
        @property { string } [position]
        
        @property { string } [application]
        
        @property { string } [platform]
        
        @property { NavigationReference } [navigation]
        
         
    */
/**
        @typedef LocaleLanguage
        
        
        @property { Language } [hi]
        
        @property { Language } [ar]
        
        @property { Language } [enUs]
        
         
    */
/**
        @typedef Language
        
        
        @property { string } [display]
        
         
    */
/**
        @typedef Action
        
        
        @property { ActionPage } [page]
        
        @property { ActionPage } [popup]
        
        @property { string } [type]
        
         
    */
/**
        @typedef ActionPage
        
        
        @property { Object } [params]
        
        @property { Object } [query]
        
        @property { string } [url]
        
        @property { string } [type]
        
         
    */
/**
        @typedef NavigationReference
        
        
        @property { Array<string> } [acl]
        
        @property { Array<string> } [tags]
        
        @property { LocaleLanguage } [localeLanguage]
        
        @property { string } [image]
        
        @property { string } [type]
        
        @property { Action } [action]
        
        @property { boolean } [active]
        
        @property { string } [display]
        
        @property { number } [sortOrder]
        
        @property { NavigationReference } [subNavigation]
        
         
    */
/**
        @typedef LandingPage
        
        
        @property { LandingPageSchema } [data]
        
        @property { boolean } [success]
        
         
    */
/**
        @typedef ConfigurationSchema
        
        
        @property { number } [sleepTime]
        
        @property { boolean } [startOnLaunch]
        
        @property { number } [duration]
        
        @property { string } [slideDirection]
        
         
    */
/**
        @typedef SlideshowMedia
        
        
        @property { string } [type]
        
        @property { string } [url]
        
        @property { string } [bgColor]
        
        @property { number } [duration]
        
        @property { boolean } [autoDecideDuration]
        
        @property { Action } [action]
        
         
    */
/**
        @typedef Slideshow
        
        
        @property { SlideshowSchema } [data]
        
        @property { boolean } [success]
        
         
    */
/**
        @typedef AnnouncementsResponseSchema
        
        
        @property { Object } [announcements]
        
        @property { number } [refreshRate]
        
        @property { Array<string> } [refreshPages]
        
         
    */
/**
        @typedef AnnouncementDataSchema
        
        
        @property { string } [pageSlug]
        
        @property { StorefrontAnnouncement } [announcement]
        
         
    */
/**
        @typedef FaqResponseSchema
        
        
        @property { Array<FAQ> } [faqs]
        
         
    */
/**
        @typedef UpdateHandpickedSchema
        
        
        @property { HandpickedTagSchema } [tag]
        
         
    */
/**
        @typedef HandpickedTagSchema
        
        
        @property { string } [position]
        
        @property { Object } [attributes]
        
        @property { string } [name]
        
        @property { string } [url]
        
        @property { string } [type]
        
        @property { string } [subType]
        
        @property { string } [content]
        
         
    */
/**
        @typedef RemoveHandpickedSchema
        
        
        @property { Array<string> } [tags]
        
         
    */
/**
        @typedef CreateTagSchema
        
        
        @property { string } [name]
        
        @property { string } [subType]
        
        @property { string } [id]
        
        @property { string } [type]
        
        @property { string } [url]
        
        @property { string } [position]
        
        @property { Object } [attributes]
        
        @property { string } [content]
        
         
    */
/**
        @typedef CreateTagRequestSchema
        
        
        @property { Array<CreateTagSchema> } [tags]
        
         
    */
/**
        @typedef APIError
        
        
        @property { string } [message]
        
        @property { number } [status]
        
        @property { string } [code]
        
        @property { string } [exception]
        
        @property { string } [info]
        
        @property { string } [requestId]
        
        @property { string } [stackTrace]
        
        @property { Object } [meta]
        
         
    */
/**
        @typedef CategorySchema
        
        
        @property { number } [index]
        
        @property { string } [id]
        
        @property { string } [slug]
        
        @property { string } [title]
        
        @property { string } [application]
        
         
    */
/**
        @typedef ChildrenSchema
        
        
        @property { string } [question]
        
        @property { string } [answer]
        
        @property { string } [slug]
        
        @property { string } [application]
        
        @property { string } [id]
        
         
    */
/**
        @typedef CategoryRequestSchema
        
        
        @property { string } [slug]
        
        @property { string } [title]
        
         
    */
/**
        @typedef FAQCategorySchema
        
        
        @property { number } [index]
        
        @property { string } [title]
        
        @property { string } [description]
        
        @property { ChildrenSchema } [children]
        
        @property { string } [id]
        
        @property { string } [slug]
        
        @property { string } [application]
        
        @property { string } [iconUrl]
        
        @property { Object } [customJson]
        
         
    */
/**
        @typedef FaqSchema
        
        
        @property { string } [slug]
        
        @property { string } [application]
        
        @property { string } [id]
        
        @property { string } [question]
        
        @property { string } [answer]
        
         
    */
/**
        @typedef FAQ
        
        
        @property { string } [slug]
        
        @property { string } [question]
        
        @property { string } [answer]
        
         
    */
/**
        @typedef CreateFaqResponseSchema
        
        
        @property { FaqSchema } [faq]
        
         
    */
/**
        @typedef CreateFaqSchema
        
        
        @property { FAQ } [faq]
        
         
    */
/**
        @typedef GetFaqSchema
        
        
        @property { Array<Object> } [faqs]
        
         
    */
/**
        @typedef UpdateFaqCategoryRequestSchema
        
        
        @property { CategorySchema } [category]
        
         
    */
/**
        @typedef CreateFaqCategoryRequestSchema
        
        
        @property { CategoryRequestSchema } [category]
        
         
    */
/**
        @typedef CreateFaqCategorySchema
        
        
        @property { CategorySchema } [category]
        
         
    */
/**
        @typedef GetFaqCategoriesSchema
        
        
        @property { Array<CategorySchema> } [categories]
        
         
    */
/**
        @typedef GetFaqCategoryBySlugSchema
        
        
        @property { FAQCategorySchema } [category]
        
         
    */
/**
        @typedef LandingPageGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef LandingPageSchema
        
        
        @property { string } [slug]
        
        @property { Action } [action]
        
        @property { Array<string> } [platform]
        
        @property { CreatedBySchema } [createdBy]
        
        @property { DateMeta } [dateMeta]
        
        @property { string } [id]
        
        @property { string } [application]
        
        @property { boolean } [archived]
        
        @property { Object } [customJson]
        
         
    */
/**
        @typedef DefaultNavigationResponse
        
        
        @property { Array<Object> } [items]
        
         
    */
/**
        @typedef NavigationGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef Orientation
        
        
        @property { Array<string> } [portrait]
        
        @property { Array<string> } [landscape]
        
         
    */
/**
        @typedef NavigationSchema
        
        
        @property { string } [id]
        
        @property { string } [application]
        
        @property { boolean } [archived]
        
        @property { string } [name]
        
        @property { string } [slug]
        
        @property { Array<string> } [platform]
        
        @property { CreatedBySchema } [createdBy]
        
        @property { DateMeta } [dateMeta]
        
        @property { Orientation } [orientation]
        
        @property { number } [version]
        
        @property { NavigationReference } [navigation]
        
         
    */
/**
        @typedef NavigationRequest
        
        
        @property { string } [name]
        
        @property { string } [slug]
        
        @property { Array<string> } [platform]
        
        @property { Orientation } [orientation]
        
        @property { NavigationReference } [navigation]
        
         
    */
/**
        @typedef CustomPageSchema
        
        
        @property { string } [id]
        
        @property { string } [platform]
        
        @property { string } [title]
        
        @property { string } [slug]
        
        @property { string } [type]
        
        @property { string } [orientation]
        
        @property { string } [application]
        
        @property { string } [description]
        
        @property { boolean } [published]
        
        @property { Array<string> } [tags]
        
        @property { Array<ContentSchema> } [content]
        
        @property { CreatedBySchema } [createdBy]
        
        @property { DateMeta } [dateMeta]
        
        @property { ScheduleSchema } [schedule]
        
         
    */
/**
        @typedef ContentSchema
        
        
        @property { string } [type]
        
        @property { string } [value]
        
         
    */
/**
        @typedef CustomPage
        
        
        @property { CustomPageSchema } [data]
        
         
    */
/**
        @typedef CustomBlogSchema
        
        
        @property { string } [id]
        
        @property { string } [title]
        
        @property { string } [slug]
        
        @property { string } [readingTime]
        
        @property { string } [application]
        
        @property { string } [description]
        
        @property { FeatureImage } [featureImage]
        
        @property { boolean } [published]
        
        @property { boolean } [archived]
        
        @property { Array<string> } [tags]
        
        @property { ContentSchema } [content]
        
        @property { Author } [author]
        
        @property { ScheduleSchema } [schedule]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { Object } [customJson]
        
         
    */
/**
        @typedef FeatureImage
        
        
        @property { string } [secureUrl]
        
         
    */
/**
        @typedef CustomBlog
        
        
        @property { CustomBlogSchema } [data]
        
         
    */
/**
        @typedef PageGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef PageSpec
        
        
        @property { Array<Object> } [specifications]
        
         
    */
/**
        @typedef PageSpecParam
        
        
        @property { string } [key]
        
        @property { boolean } [required]
        
         
    */
/**
        @typedef PageSpecItem
        
        
        @property { string } [pageType]
        
        @property { string } [displayName]
        
        @property { Array<PageSpecParam> } [params]
        
        @property { Array<PageSpecParam> } [query]
        
         
    */
/**
        @typedef PageSchema
        
        
        @property { string } [id]
        
        @property { string } [application]
        
        @property { Array<string> } [componentIds]
        
        @property { Array<PageContent> } [content]
        
        @property { Object } [createdBy]
        
        @property { Object } [dateMeta]
        
        @property { string } [description]
        
        @property { Object } [featureImage]
        
        @property { Array<PageMeta> } [pageMeta]
        
        @property { ScheduleSchema } [schedule]
        
        @property { Object } [customJson]
        
        @property { string } [orientation]
        
        @property { string } [platform]
        
        @property { boolean } [published]
        
        @property { string } [slug]
        
        @property { Array<string> } [tags]
        
        @property { string } [title]
        
        @property { string } [type]
        
        @property { SEO } [seo]
        
        @property { Object } [visibility]
        
         
    */
/**
        @typedef CreatedBySchema
        
        
        @property { string } [id]
        
         
    */
/**
        @typedef PageContent
        
        
        @property { string } [type]
        
        @property { Object } [value]
        
         
    */
/**
        @typedef PageMeta
        
        
        @property { string } [key]
        
        @property { Object } [value]
        
         
    */
/**
        @typedef PageRequest
        
        
        @property { CronSchedule } [schedule]
        
        @property { string } [application]
        
        @property { Object } [author]
        
        @property { Object } [customJson]
        
        @property { string } [orientation]
        
        @property { Array<ResourceContent> } [content]
        
        @property { Object } [featureImage]
        
        @property { boolean } [published]
        
        @property { string } [readingTime]
        
        @property { string } [slug]
        
        @property { Array<string> } [tags]
        
        @property { SEO } [seo]
        
        @property { string } [title]
        
         
    */
/**
        @typedef CronSchedule
        
        
        @property { string } [cron]
        
        @property { string } [start]
        
        @property { string } [end]
        
        @property { number } [duration]
        
         
    */
/**
        @typedef PagePublishRequest
        
        
        @property { boolean } [publish]
        
         
    */
/**
        @typedef PageMetaSchema
        
        
        @property { Array<Object> } [systemPages]
        
        @property { Array<Object> } [customPages]
        
        @property { string } [applicationId]
        
         
    */
/**
        @typedef SlideshowGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef SlideshowSchema
        
        
        @property { string } [id]
        
        @property { string } [slug]
        
        @property { DateMeta } [dateMeta]
        
        @property { string } [application]
        
        @property { string } [platform]
        
        @property { ConfigurationSchema } [configuration]
        
        @property { Array<SlideshowMedia> } [media]
        
        @property { boolean } [active]
        
        @property { boolean } [archived]
        
        @property { Object } [customJson]
        
         
    */
/**
        @typedef SlideshowRequest
        
        
        @property { string } [slug]
        
        @property { string } [platform]
        
        @property { ConfigurationSchema } [configuration]
        
        @property { SlideshowMedia } [media]
        
        @property { boolean } [active]
        
         
    */
/**
        @typedef Support
        
        
        @property { boolean } [created]
        
        @property { string } [id]
        
        @property { string } [configType]
        
        @property { string } [application]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { ContactSchema } [contact]
        
         
    */
/**
        @typedef PhoneProperties
        
        
        @property { string } [key]
        
        @property { string } [code]
        
        @property { string } [number]
        
         
    */
/**
        @typedef PhoneSchema
        
        
        @property { boolean } [active]
        
        @property { Array<PhoneProperties> } [phone]
        
         
    */
/**
        @typedef EmailProperties
        
        
        @property { string } [key]
        
        @property { string } [value]
        
         
    */
/**
        @typedef EmailSchema
        
        
        @property { boolean } [active]
        
        @property { Array<EmailProperties> } [email]
        
         
    */
/**
        @typedef ContactSchema
        
        
        @property { PhoneSchema } [phone]
        
        @property { EmailSchema } [email]
        
         
    */
/**
        @typedef TagsSchema
        
        
        @property { string } [application]
        
        @property { string } [id]
        
        @property { Array<TagSchema> } [tags]
        
         
    */
/**
        @typedef TagSchema
        
        
        @property { string } [name]
        
        @property { string } [url]
        
        @property { string } [type]
        
        @property { string } [subType]
        
        @property { string } [id]
        
        @property { string } [position]
        
        @property { Object } [attributes]
        
        @property { string } [content]
        
         
    */
/**
        @typedef UnauthenticatedUser
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef UnauthenticatedApplication
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef BadRequest
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef ResourceNotFound
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef InternalServerError
        
        
        @property { string } [message]
        
        @property { string } [code]
        
         
    */
/**
        @typedef PlanRecurring
        
        
        @property { string } [interval]
        
        @property { number } [intervalCount]
        
         
    */
/**
        @typedef Plan
        
        
        @property { PlanRecurring } [recurring]
        
        @property { boolean } [isTrialPlan]
        
        @property { string } [planGroup]
        
        @property { Array<string> } [tagLines]
        
        @property { string } [currency]
        
        @property { boolean } [isActive]
        
        @property { boolean } [isVisible]
        
        @property { number } [trialPeriod]
        
        @property { Array<string> } [addons]
        
        @property { Array<string> } [tags]
        
        @property { string } [type]
        
        @property { string } [country]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { number } [amount]
        
        @property { string } [productSuiteId]
        
        @property { string } [createdAt]
        
        @property { string } [modifiedAt]
        
         
    */
/**
        @typedef DetailedPlanComponents
        
        
        @property { string } [name]
        
        @property { string } [slug]
        
        @property { string } [description]
        
        @property { string } [group]
        
        @property { string } [icon]
        
        @property { Object } [links]
        
        @property { boolean } [enabled]
        
        @property { string } [displayText]
        
         
    */
/**
        @typedef DetailedPlan
        
        
        @property { PlanRecurring } [recurring]
        
        @property { boolean } [isTrialPlan]
        
        @property { string } [planGroup]
        
        @property { Array<string> } [tagLines]
        
        @property { string } [currency]
        
        @property { boolean } [isActive]
        
        @property { boolean } [isVisible]
        
        @property { number } [trialPeriod]
        
        @property { Array<string> } [addons]
        
        @property { Array<string> } [tags]
        
        @property { string } [type]
        
        @property { string } [country]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { number } [amount]
        
        @property { string } [productSuiteId]
        
        @property { string } [createdAt]
        
        @property { string } [modifiedAt]
        
        @property { Array<DetailedPlanComponents> } [components]
        
         
    */
/**
        @typedef InvoiceDetailsPeriod
        
        
        @property { string } [start]
        
        @property { string } [end]
        
         
    */
/**
        @typedef InvoiceDetailsClient
        
        
        @property { Array<string> } [addressLines]
        
        @property { string } [name]
        
        @property { string } [email]
        
        @property { string } [phone]
        
         
    */
/**
        @typedef InvoiceDetailsStatusTrail
        
        
        @property { string } [id]
        
        @property { string } [value]
        
        @property { string } [timestamp]
        
         
    */
/**
        @typedef InvoiceDetailsPaymentMethodsDataChecks
        
        
        @property { string } [cvcCheck]
        
        @property { string } [addressLine1Check]
        
        @property { string } [addressPostalCodeCheck]
        
         
    */
/**
        @typedef InvoiceDetailsPaymentMethodsDataNetworks
        
        
        @property { Array<string> } [available]
        
        @property { string } [preferred]
        
         
    */
/**
        @typedef InvoiceDetailsPaymentMethodsDataThreeDSecureUsage
        
        
        @property { boolean } [supported]
        
         
    */
/**
        @typedef InvoiceDetailsPaymentMethodsData
        
        
        @property { string } [brand]
        
        @property { string } [last4]
        
        @property { InvoiceDetailsPaymentMethodsDataChecks } [checks]
        
        @property { string } [wallet]
        
        @property { string } [country]
        
        @property { string } [funding]
        
        @property { number } [expYear]
        
        @property { InvoiceDetailsPaymentMethodsDataNetworks } [networks]
        
        @property { number } [expMonth]
        
        @property { string } [fingerprint]
        
        @property { string } [generatedFrom]
        
        @property { InvoiceDetailsPaymentMethodsDataThreeDSecureUsage } [threeDSecureUsage]
        
         
    */
/**
        @typedef InvoiceDetailsPaymentMethods
        
        
        @property { number } [id]
        
        @property { string } [type]
        
        @property { string } [pgPaymentMethodId]
        
        @property { InvoiceDetailsPaymentMethodsData } [data]
        
        @property { boolean } [isDefault]
        
         
    */
/**
        @typedef InvoicePaymentMethod
        
        
        @property { string } [pgPaymentMethodId]
        
         
    */
/**
        @typedef InvoiceDetails
        
        
        @property { InvoiceDetailsPeriod } [period]
        
        @property { InvoiceDetailsClient } [client]
        
        @property { boolean } [autoAdvance]
        
        @property { string } [currency]
        
        @property { boolean } [paid]
        
        @property { number } [attemp]
        
        @property { string } [id]
        
        @property { string } [collectionMethod]
        
        @property { string } [subscriberId]
        
        @property { string } [invoiceUrl]
        
        @property { string } [number]
        
        @property { Object } [pgData]
        
        @property { string } [receiptNumber]
        
        @property { string } [statementDescriptor]
        
        @property { string } [currentStatus]
        
        @property { Array<InvoiceDetailsStatusTrail> } [statusTrail]
        
        @property { number } [subtotal]
        
        @property { number } [total]
        
        @property { string } [subscription]
        
        @property { string } [nextActionTime]
        
        @property { string } [createdAt]
        
        @property { string } [modifiedAt]
        
        @property { string } [hashIdentifier]
        
        @property { InvoicePaymentMethod } [paymentMethod]
        
         
    */
/**
        @typedef InvoiceItemsPlanRecurring
        
        
        @property { string } [interval]
        
        @property { number } [intervalCount]
        
         
    */
/**
        @typedef InvoiceItemsPlan
        
        
        @property { InvoiceItemsPlanRecurring } [recurring]
        
        @property { boolean } [isTrialPlan]
        
        @property { string } [planGroup]
        
        @property { Array<string> } [tagLines]
        
        @property { string } [currency]
        
        @property { boolean } [isActive]
        
        @property { boolean } [isVisible]
        
        @property { number } [trialPeriod]
        
        @property { Array<string> } [addons]
        
        @property { Array<string> } [tags]
        
        @property { string } [type]
        
        @property { string } [country]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { number } [amount]
        
        @property { string } [productSuiteId]
        
        @property { string } [createdAt]
        
        @property { string } [modifiedAt]
        
         
    */
/**
        @typedef InvoiceItemsPeriod
        
        
        @property { string } [start]
        
        @property { string } [end]
        
         
    */
/**
        @typedef InvoiceItems
        
        
        @property { string } [id]
        
        @property { string } [currency]
        
        @property { InvoiceItemsPlan } [plan]
        
        @property { string } [name]
        
        @property { number } [quantity]
        
        @property { string } [description]
        
        @property { InvoiceItemsPeriod } [period]
        
        @property { number } [unitAmount]
        
        @property { number } [amount]
        
        @property { string } [type]
        
        @property { string } [invoiceId]
        
        @property { string } [createdAt]
        
        @property { string } [modifiedAt]
        
         
    */
/**
        @typedef Invoice
        
        
        @property { InvoiceDetails } [invoice]
        
        @property { Array<InvoiceItems> } [invoiceItems]
        
         
    */
/**
        @typedef InvoicesDataClient
        
        
        @property { string } [name]
        
        @property { string } [email]
        
        @property { string } [phone]
        
        @property { Array<string> } [addressLines]
        
         
    */
/**
        @typedef InvoicesDataPeriod
        
        
        @property { string } [start]
        
        @property { string } [end]
        
         
    */
/**
        @typedef InvoicesDataPaymentMethod
        
        
        @property { string } [pgPaymentMethodId]
        
         
    */
/**
        @typedef InvoicesData
        
        
        @property { string } [id]
        
        @property { InvoicesDataClient } [client]
        
        @property { boolean } [autoAdvance]
        
        @property { string } [currency]
        
        @property { boolean } [paid]
        
        @property { number } [attemp]
        
        @property { string } [collectionMethod]
        
        @property { string } [subscriberId]
        
        @property { string } [invoiceUrl]
        
        @property { string } [number]
        
        @property { Object } [pgData]
        
        @property { InvoicesDataPeriod } [period]
        
        @property { string } [receiptNumber]
        
        @property { string } [statementDescriptor]
        
        @property { string } [currentStatus]
        
        @property { Array<InvoiceDetailsStatusTrail> } [statusTrail]
        
        @property { number } [subtotal]
        
        @property { number } [total]
        
        @property { string } [subscription]
        
        @property { string } [nextActionTime]
        
        @property { string } [createdAt]
        
        @property { string } [modifiedAt]
        
        @property { string } [hashIdentifier]
        
        @property { InvoicesDataPaymentMethod } [paymentMethod]
        
        @property { Array<InvoiceItems> } [invoiceItems]
        
         
    */
/**
        @typedef Invoices
        
        
        @property { Array<InvoicesData> } [data]
        
        @property { number } [start]
        
        @property { number } [end]
        
        @property { number } [limit]
        
        @property { number } [page]
        
        @property { number } [total]
        
         
    */
/**
        @typedef Phone
        
        
        @property { string } [phoneNumber]
        
        @property { string } [phoneCountryCode]
        
         
    */
/**
        @typedef SubscriptionBillingAddress
        
        
        @property { string } [country]
        
        @property { string } [state]
        
        @property { string } [city]
        
        @property { string } [line1]
        
        @property { string } [line2]
        
        @property { string } [postalCode]
        
         
    */
/**
        @typedef SubscriptionCustomer
        
        
        @property { Phone } [phone]
        
        @property { SubscriptionBillingAddress } [billingAddress]
        
        @property { string } [id]
        
        @property { string } [uniqueId]
        
        @property { string } [type]
        
        @property { string } [name]
        
        @property { string } [email]
        
        @property { string } [createdAt]
        
        @property { string } [modifiedAt]
        
        @property { Object } [data]
        
         
    */
/**
        @typedef SubscriptionCustomerCreate
        
        
        @property { Phone } [phone]
        
        @property { SubscriptionBillingAddress } [billingAddress]
        
        @property { string } [uniqueId]
        
        @property { string } [type]
        
        @property { string } [name]
        
        @property { string } [email]
        
         
    */
/**
        @typedef SubscriptionCurrentPeriod
        
        
        @property { string } [start]
        
        @property { string } [end]
        
         
    */
/**
        @typedef SubscriptionPauseCollection
        
        
        @property { string } [behavior]
        
        @property { string } [resumeAt]
        
         
    */
/**
        @typedef SubscriptionTrial
        
        
        @property { string } [start]
        
        @property { string } [end]
        
         
    */
/**
        @typedef SubscriptionInvoiceSettings
        
        
        @property { boolean } [generation]
        
        @property { boolean } [charging]
        
         
    */
/**
        @typedef Subscription
        
        
        @property { SubscriptionCurrentPeriod } [currentPeriod]
        
        @property { SubscriptionPauseCollection } [pauseCollection]
        
        @property { SubscriptionTrial } [trial]
        
        @property { SubscriptionInvoiceSettings } [invoiceSettings]
        
        @property { boolean } [isActive]
        
        @property { boolean } [cancelAtPeriodEnd]
        
        @property { string } [id]
        
        @property { string } [subscriberId]
        
        @property { string } [planId]
        
        @property { string } [productSuiteId]
        
        @property { Plan } [planData]
        
        @property { string } [currentStatus]
        
        @property { string } [collectionMethod]
        
        @property { string } [createdAt]
        
        @property { string } [modifiedAt]
        
        @property { string } [latestInvoice]
        
         
    */
/**
        @typedef SubscriptionStatus
        
        
        @property { boolean } [isEnabled]
        
        @property { Subscription } [subscription]
        
         
    */
/**
        @typedef SubscriptionLimitApplication
        
        
        @property { boolean } [enabled]
        
        @property { number } [hardLimit]
        
        @property { number } [softLimit]
        
         
    */
/**
        @typedef SubscriptionLimitMarketplace
        
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef SubscriptionLimitOtherPlatform
        
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef SubscriptionLimitTeam
        
        
        @property { number } [limit]
        
         
    */
/**
        @typedef SubscriptionLimitProducts
        
        
        @property { boolean } [bulk]
        
        @property { number } [limit]
        
         
    */
/**
        @typedef SubscriptionLimitExtensions
        
        
        @property { boolean } [enabled]
        
        @property { number } [limit]
        
         
    */
/**
        @typedef SubscriptionLimitIntegrations
        
        
        @property { boolean } [enabled]
        
        @property { number } [limit]
        
         
    */
/**
        @typedef SubscriptionLimit
        
        
        @property { SubscriptionLimitApplication } [application]
        
        @property { SubscriptionLimitMarketplace } [marketplace]
        
        @property { SubscriptionLimitOtherPlatform } [otherPlatform]
        
        @property { SubscriptionLimitTeam } [team]
        
        @property { SubscriptionLimitProducts } [products]
        
        @property { SubscriptionLimitExtensions } [extensions]
        
        @property { SubscriptionLimitIntegrations } [integrations]
        
        @property { boolean } [isTrialPlan]
        
         
    */
/**
        @typedef SubscriptionActivateReq
        
        
        @property { string } [uniqueId]
        
        @property { string } [type]
        
        @property { string } [productSuite]
        
        @property { string } [planId]
        
        @property { string } [paymentMethod]
        
         
    */
/**
        @typedef SubscriptionActivateRes
        
        
        @property { boolean } [success]
        
        @property { Subscription } [data]
        
         
    */
/**
        @typedef CancelSubscriptionReq
        
        
        @property { string } [uniqueId]
        
        @property { string } [type]
        
        @property { string } [productSuite]
        
        @property { string } [subscriptionId]
        
         
    */
/**
        @typedef CancelSubscriptionRes
        
        
        @property { boolean } [success]
        
        @property { Subscription } [data]
        
         
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
        
        
        @property { Array<Object> } [aggregators]
        
        @property { boolean } success
        
        @property { string } appId
        
        @property { Array<string> } displayFields
        
        @property { Array<string> } excludedFields
        
        @property { boolean } created
        
         
    */
/**
        @typedef ErrorCodeDescription
        
        
        @property { string } description
        
        @property { string } code
        
        @property { boolean } success
        
         
    */
/**
        @typedef PaymentGatewayConfig
        
        
        @property { string } merchantSalt
        
        @property { string } configType
        
        @property { string } secret
        
        @property { string } key
        
        @property { boolean } [isActive]
        
         
    */
/**
        @typedef PaymentGatewayConfigRequest
        
        
        @property { string } appId
        
        @property { boolean } [isActive]
        
        @property { PaymentGatewayConfig } [aggregatorName]
        
         
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
        
        
        @property { string } [cardReference]
        
        @property { number } [expYear]
        
        @property { string } [displayName]
        
        @property { string } [cardBrandImage]
        
        @property { string } aggregatorName
        
        @property { string } [code]
        
        @property { string } [cardId]
        
        @property { string } [cardType]
        
        @property { string } [fyndVpa]
        
        @property { string } [merchantCode]
        
        @property { string } [cardIsin]
        
        @property { string } [intentFlow]
        
        @property { string } [cardIssuer]
        
        @property { number } [retryCount]
        
        @property { string } [cardFingerprint]
        
        @property { string } [nickname]
        
        @property { Array<string> } [intentAppErrorList]
        
        @property { boolean } [expired]
        
        @property { number } [expMonth]
        
        @property { string } [name]
        
        @property { string } [cardToken]
        
        @property { number } [displayPriority]
        
        @property { number } [timeout]
        
        @property { string } [cardBrand]
        
        @property { string } [cardName]
        
        @property { string } [cardNumber]
        
        @property { PaymentModeLogo } [logoUrl]
        
         
    */
/**
        @typedef RootPaymentMode
        
        
        @property { string } displayName
        
        @property { string } [aggregatorName]
        
        @property { string } name
        
        @property { boolean } [addCardEnabled]
        
        @property { boolean } [anonymousEnable]
        
        @property { number } displayPriority
        
        @property { Array<PaymentModeList> } [list]
        
         
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
        
        
        @property { string } transferType
        
        @property { Object } customers
        
        @property { Object } uniqueTransferNo
        
        @property { Array<Object> } payoutsAggregators
        
        @property { Object } moreAttributes
        
        @property { boolean } isDefault
        
        @property { boolean } isActive
        
         
    */
/**
        @typedef PayoutRequest
        
        
        @property { string } transferType
        
        @property { Object } users
        
        @property { Object } bankDetails
        
        @property { string } aggregator
        
        @property { string } uniqueExternalId
        
        @property { boolean } isActive
        
         
    */
/**
        @typedef PayoutResponse
        
        
        @property { string } transferType
        
        @property { string } paymentStatus
        
        @property { string } uniqueTransferNo
        
        @property { Object } users
        
        @property { boolean } success
        
        @property { Object } payouts
        
        @property { Object } bankDetails
        
        @property { boolean } created
        
        @property { string } aggregator
        
        @property { boolean } isActive
        
         
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
        
        @property { string } aggregator
        
        @property { boolean } success
        
         
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
        @typedef SearchKeywordResult
        
        
        @property { string } sortOn
        
        @property { Object } query
        
         
    */
/**
        @typedef CreateSearchKeyword
        
        
        @property { Array<string> } [words]
        
        @property { Object } [customJson]
        
        @property { boolean } [isActive]
        
        @property { string } [appId]
        
        @property { SearchKeywordResult } result
        
         
    */
/**
        @typedef GetSearchWordsData
        
        
        @property { Array<string> } [words]
        
        @property { string } [uid]
        
        @property { Object } [customJson]
        
        @property { string } [appId]
        
        @property { Object } [result]
        
         
    */
/**
        @typedef ErrorResponse
        
        
        @property { string } [code]
        
        @property { string } [message]
        
        @property { Object } [meta]
        
        @property { number } [status]
        
         
    */
/**
        @typedef DeleteResponse
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef GetSearchWordsDetailResponse
        
        
        @property { Page } [page]
        
        @property { GetSearchWordsData } [items]
        
         
    */
/**
        @typedef GetSearchWordsResponse
        
        
        @property { Page } [page]
        
        @property { Array<GetSearchWordsData> } [items]
        
         
    */
/**
        @typedef AutocompletePageAction
        
        
        @property { string } [url]
        
        @property { string } type
        
        @property { Object } query
        
        @property { Object } [params]
        
         
    */
/**
        @typedef AutocompleteAction
        
        
        @property { AutocompletePageAction } [page]
        
        @property { string } [type]
        
         
    */
/**
        @typedef Media
        
        
        @property { string } [url]
        
        @property { string } [type]
        
         
    */
/**
        @typedef AutocompleteResult
        
        
        @property { string } [display]
        
        @property { AutocompleteAction } [action]
        
        @property { Object } [customJson]
        
        @property { Media } [logo]
        
         
    */
/**
        @typedef CreateAutocompleteKeyword
        
        
        @property { Array<string> } [words]
        
        @property { Object } [customJson]
        
        @property { boolean } [isActive]
        
        @property { Array<AutocompleteResult> } [results]
        
        @property { string } [appId]
        
         
    */
/**
        @typedef GetAutocompleteWordsData
        
        
        @property { Array<string> } [words]
        
        @property { string } [uid]
        
        @property { Object } [customJson]
        
        @property { Array<Object> } [results]
        
        @property { string } [appId]
        
         
    */
/**
        @typedef GetAutocompleteWordsResponse
        
        
        @property { Page } [page]
        
        @property { Array<GetAutocompleteWordsData> } [items]
        
         
    */
/**
        @typedef CreateAutocompleteWordsResponse
        
        
        @property { string } [appId]
        
        @property { Array<Object> } [results]
        
        @property { Array<string> } [words]
        
        @property { Object } [customJson]
        
         
    */
/**
        @typedef ProductBundleItem
        
        
        @property { number } maxQuantity
        
        @property { boolean } [autoAddToCart]
        
        @property { boolean } [allowRemove]
        
        @property { boolean } [autoSelect]
        
        @property { number } minQuantity
        
        @property { number } productUid
        
         
    */
/**
        @typedef ProductBundleRequest
        
        
        @property { string } slug
        
        @property { string } choice
        
        @property { boolean } [sameStoreAssignment]
        
        @property { Object } [meta]
        
        @property { string } [logo]
        
        @property { Array<ProductBundleItem> } products
        
        @property { string } [modifiedOn]
        
        @property { string } [createdOn]
        
        @property { string } name
        
        @property { boolean } isActive
        
        @property { Object } [createdBy]
        
        @property { Array<string> } [pageVisibility]
        
        @property { Object } [modifiedBy]
        
         
    */
/**
        @typedef GetProductBundleCreateResponse
        
        
        @property { string } slug
        
        @property { string } choice
        
        @property { boolean } [sameStoreAssignment]
        
        @property { Object } [meta]
        
        @property { string } [logo]
        
        @property { Array<ProductBundleItem> } products
        
        @property { string } [modifiedOn]
        
        @property { string } [createdOn]
        
        @property { string } name
        
        @property { boolean } isActive
        
        @property { number } [companyId]
        
        @property { string } [id]
        
        @property { Object } [createdBy]
        
        @property { Array<string> } [pageVisibility]
        
        @property { Object } [modifiedBy]
        
         
    */
/**
        @typedef GetProductBundleListingResponse
        
        
        @property { Page } [page]
        
        @property { Array<GetProductBundleCreateResponse> } [items]
        
         
    */
/**
        @typedef ProductBundleUpdateRequest
        
        
        @property { string } slug
        
        @property { string } choice
        
        @property { boolean } [sameStoreAssignment]
        
        @property { Object } [meta]
        
        @property { string } [logo]
        
        @property { Array<ProductBundleItem> } products
        
        @property { string } [modifiedOn]
        
        @property { string } name
        
        @property { boolean } isActive
        
        @property { Array<string> } [pageVisibility]
        
        @property { Object } [modifiedBy]
        
         
    */
/**
        @typedef Price
        
        
        @property { number } [maxMarked]
        
        @property { number } [maxEffective]
        
        @property { number } [minEffective]
        
        @property { number } [minMarked]
        
        @property { string } [currency]
        
         
    */
/**
        @typedef LimitedProductData
        
        
        @property { string } [slug]
        
        @property { number } [uid]
        
        @property { Array<string> } [images]
        
        @property { Object } [price]
        
        @property { Object } [identifier]
        
        @property { string } [countryOfOrigin]
        
        @property { Object } [attributes]
        
        @property { string } [shortDescription]
        
        @property { string } [name]
        
        @property { string } [itemCode]
        
        @property { number } [quantity]
        
        @property { Array<string> } [sizes]
        
         
    */
/**
        @typedef Size
        
        
        @property { string } [display]
        
        @property { boolean } [isAvailable]
        
        @property { string } [value]
        
        @property { number } [quantity]
        
         
    */
/**
        @typedef GetProducts
        
        
        @property { number } [maxQuantity]
        
        @property { Price } [price]
        
        @property { boolean } [autoAddToCart]
        
        @property { boolean } [allowRemove]
        
        @property { LimitedProductData } [productDetails]
        
        @property { boolean } [autoSelect]
        
        @property { Array<Size> } [sizes]
        
        @property { number } [minQuantity]
        
        @property { number } [productUid]
        
         
    */
/**
        @typedef GetProductBundleResponse
        
        
        @property { Array<GetProducts> } [products]
        
        @property { string } [slug]
        
        @property { string } [choice]
        
        @property { Object } [meta]
        
        @property { string } [logo]
        
        @property { boolean } [sameStoreAssignment]
        
        @property { number } [companyId]
        
        @property { string } [name]
        
        @property { boolean } [isActive]
        
        @property { Array<string> } [pageVisibility]
        
         
    */
/**
        @typedef Meta
        
        
        @property { Array<Object> } [values]
        
        @property { string } [unit]
        
        @property { Object } [headers]
        
         
    */
/**
        @typedef Guide
        
        
        @property { Meta } [meta]
        
         
    */
/**
        @typedef ValidateSizeGuide
        
        
        @property { string } [description]
        
        @property { string } title
        
        @property { string } [tag]
        
        @property { boolean } [active]
        
        @property { Guide } [guide]
        
        @property { number } [brandId]
        
        @property { string } [modifiedOn]
        
        @property { number } [companyId]
        
        @property { string } name
        
        @property { string } [image]
        
        @property { string } [createdOn]
        
        @property { string } [id]
        
        @property { Object } [createdBy]
        
        @property { string } [subtitle]
        
        @property { Object } [modifiedBy]
        
         
    */
/**
        @typedef SuccessResponse
        
        
        @property { number } [uid]
        
        @property { boolean } [success]
        
         
    */
/**
        @typedef ListSizeGuide
        
        
        @property { Object } [page]
        
        @property { Array<Object> } [items]
        
         
    */
/**
        @typedef SizeGuideResponse
        
        
        @property { string } [title]
        
        @property { string } [tag]
        
        @property { boolean } [active]
        
        @property { Object } [guide]
        
        @property { string } [modifiedOn]
        
        @property { number } [brandId]
        
        @property { string } [createdOn]
        
        @property { string } [name]
        
        @property { number } [companyId]
        
        @property { string } [id]
        
        @property { Object } [createdBy]
        
        @property { Object } [modifiedBy]
        
        @property { string } [subtitle]
        
         
    */
/**
        @typedef GetCatalogConfigurationDetailsProduct
        
        
        @property { Object } [similar]
        
        @property { Object } [variant]
        
        @property { Object } [detail]
        
        @property { Object } [compare]
        
         
    */
/**
        @typedef MetaDataListingSortMetaResponse
        
        
        @property { string } [display]
        
        @property { string } [key]
        
         
    */
/**
        @typedef MetaDataListingSortResponse
        
        
        @property { Array<MetaDataListingSortMetaResponse> } [data]
        
         
    */
/**
        @typedef MetaDataListingFilterMetaResponse
        
        
        @property { string } [display]
        
        @property { string } [key]
        
        @property { Array<Object> } [units]
        
        @property { Array<string> } [filterTypes]
        
         
    */
/**
        @typedef MetaDataListingFilterResponse
        
        
        @property { Array<MetaDataListingFilterMetaResponse> } [data]
        
         
    */
/**
        @typedef MetaDataListingResponse
        
        
        @property { MetaDataListingSortResponse } sort
        
        @property { MetaDataListingFilterResponse } filter
        
         
    */
/**
        @typedef GetCatalogConfigurationMetaData
        
        
        @property { GetCatalogConfigurationDetailsProduct } [product]
        
        @property { MetaDataListingResponse } [listing]
        
         
    */
/**
        @typedef ProductSize
        
        
        @property { number } min
        
        @property { number } max
        
         
    */
/**
        @typedef ConfigurationProductConfig
        
        
        @property { string } [title]
        
        @property { string } key
        
        @property { ProductSize } [size]
        
        @property { number } priority
        
        @property { string } [logo]
        
        @property { boolean } isActive
        
        @property { string } [subtitle]
        
         
    */
/**
        @typedef ConfigurationProductSimilar
        
        
        @property { Array<ConfigurationProductConfig> } [config]
        
         
    */
/**
        @typedef ConfigurationProductVariantConfig
        
        
        @property { string } key
        
        @property { ProductSize } size
        
        @property { number } priority
        
        @property { string } [logo]
        
        @property { string } displayType
        
        @property { string } name
        
        @property { boolean } isActive
        
         
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
        @typedef ConfigurationListingSortConfig
        
        
        @property { string } key
        
        @property { number } priority
        
        @property { string } [logo]
        
        @property { string } [name]
        
        @property { boolean } isActive
        
         
    */
/**
        @typedef ConfigurationListingSort
        
        
        @property { Array<ConfigurationListingSortConfig> } [config]
        
        @property { string } defaultKey
        
         
    */
/**
        @typedef ConfigurationBucketPoints
        
        
        @property { number } [end]
        
        @property { number } [start]
        
         
    */
/**
        @typedef ConfigurationListingFilterValue
        
        
        @property { Object } [map]
        
        @property { string } [sort]
        
        @property { string } [condition]
        
        @property { string } [value]
        
        @property { Array<ConfigurationBucketPoints> } [bucketPoints]
        
         
    */
/**
        @typedef ConfigurationListingFilterConfig
        
        
        @property { string } key
        
        @property { number } priority
        
        @property { string } [logo]
        
        @property { string } [name]
        
        @property { boolean } isActive
        
        @property { string } type
        
        @property { ConfigurationListingFilterValue } [valueConfig]
        
         
    */
/**
        @typedef ConfigurationListingFilter
        
        
        @property { Array<ConfigurationListingFilterConfig> } [attributeConfig]
        
        @property { boolean } allowSingle
        
         
    */
/**
        @typedef ConfigurationListing
        
        
        @property { ConfigurationListingSort } sort
        
        @property { ConfigurationListingFilter } filter
        
         
    */
/**
        @typedef AppConfiguration
        
        
        @property { ConfigurationProduct } [product]
        
        @property { string } [configId]
        
        @property { string } configType
        
        @property { ConfigurationListing } [listing]
        
        @property { string } appId
        
         
    */
/**
        @typedef AppCatalogConfiguration
        
        
        @property { ConfigurationProduct } [product]
        
        @property { string } [configId]
        
        @property { string } [id]
        
        @property { string } configType
        
        @property { ConfigurationListing } [listing]
        
        @property { string } appId
        
         
    */
/**
        @typedef GetAppCatalogConfiguration
        
        
        @property { AppCatalogConfiguration } [data]
        
        @property { boolean } [isDefault]
        
         
    */
/**
        @typedef GetCatalogConfigurationDetailsSchemaListing
        
        
        @property { Object } [sort]
        
        @property { Object } [filter]
        
         
    */
/**
        @typedef EntityConfiguration
        
        
        @property { GetCatalogConfigurationDetailsProduct } [product]
        
        @property { string } [configId]
        
        @property { string } [id]
        
        @property { string } configType
        
        @property { GetCatalogConfigurationDetailsSchemaListing } [listing]
        
        @property { string } appId
        
         
    */
/**
        @typedef GetAppCatalogEntityConfiguration
        
        
        @property { EntityConfiguration } [data]
        
        @property { boolean } [isDefault]
        
         
    */
/**
        @typedef ProductFiltersValue
        
        
        @property { string } value
        
        @property { string } [displayFormat]
        
        @property { number } [count]
        
        @property { string } display
        
        @property { string } [currencyCode]
        
        @property { number } [selectedMin]
        
        @property { boolean } isSelected
        
        @property { string } [queryFormat]
        
        @property { number } [max]
        
        @property { number } [min]
        
        @property { string } [currencySymbol]
        
        @property { number } [selectedMax]
        
         
    */
/**
        @typedef ProductFiltersKey
        
        
        @property { string } display
        
        @property { string } [kind]
        
        @property { string } [logo]
        
        @property { string } name
        
         
    */
/**
        @typedef ProductFilters
        
        
        @property { Array<ProductFiltersValue> } values
        
        @property { ProductFiltersKey } key
        
         
    */
/**
        @typedef ProductSortOn
        
        
        @property { string } [value]
        
        @property { boolean } [isSelected]
        
        @property { string } [name]
        
         
    */
/**
        @typedef GetCollectionQueryOptionResponse
        
        
        @property { Array<ProductFilters> } [filters]
        
        @property { Array<ProductSortOn> } [sortOn]
        
         
    */
/**
        @typedef CollectionBadge
        
        
        @property { string } [text]
        
        @property { string } [color]
        
         
    */
/**
        @typedef UserInfo
        
        
        @property { string } [email]
        
        @property { string } [username]
        
        @property { string } [uid]
        
        @property { string } [userId]
        
         
    */
/**
        @typedef CollectionImage
        
        
        @property { string } url
        
        @property { string } aspectRatio
        
         
    */
/**
        @typedef CollectionBanner
        
        
        @property { CollectionImage } landscape
        
        @property { CollectionImage } portrait
        
         
    */
/**
        @typedef Schedule
        
        
        @property { string } [cron]
        
        @property { number } [duration]
        
        @property { string } [end]
        
        @property { string } [start]
        
         
    */
/**
        @typedef SeoDetail
        
        
        @property { string } [description]
        
        @property { string } [title]
        
         
    */
/**
        @typedef CreateCollection
        
        
        @property { string } [description]
        
        @property { Array<string> } [tags]
        
        @property { CollectionBadge } [badge]
        
        @property { string } name
        
        @property { boolean } [allowSort]
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { Object } [localeLanguage]
        
        @property { UserInfo } [modifiedBy]
        
        @property { string } [sortOn]
        
        @property { string } type
        
        @property { UserInfo } [createdBy]
        
        @property { boolean } [isActive]
        
        @property { Object } [query]
        
        @property { CollectionBanner } banners
        
        @property { boolean } [published]
        
        @property { Schedule } [schedule]
        
        @property { string } slug
        
        @property { Object } [customJson]
        
        @property { SeoDetail } [seo]
        
        @property { CollectionImage } logo
        
        @property { Object } [meta]
        
        @property { boolean } [allowFacets]
        
        @property { string } appId
        
         
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
        @typedef CollectionCreateResponse
        
        
        @property { string } [description]
        
        @property { string } [slug]
        
        @property { Array<string> } [tag]
        
        @property { BannerImage } [logo]
        
        @property { Object } [meta]
        
        @property { boolean } [allowFacets]
        
        @property { Object } [badge]
        
        @property { string } [name]
        
        @property { boolean } [isActive]
        
        @property { boolean } [allowSort]
        
        @property { string } [type]
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { Object } [query]
        
        @property { ImageUrls } [banners]
        
        @property { string } [appId]
        
        @property { Object } [cron]
        
        @property { Object } [schedule]
        
         
    */
/**
        @typedef CollectionListingFilterType
        
        
        @property { string } [display]
        
        @property { boolean } [isSelected]
        
        @property { string } [name]
        
         
    */
/**
        @typedef CollectionListingFilterTag
        
        
        @property { string } [display]
        
        @property { boolean } [isSelected]
        
        @property { string } [name]
        
         
    */
/**
        @typedef CollectionListingFilter
        
        
        @property { Array<CollectionListingFilterType> } [type]
        
        @property { Array<CollectionListingFilterTag> } [tags]
        
         
    */
/**
        @typedef ProductListingActionPage
        
        
        @property { string } [type]
        
        @property { Object } [query]
        
         
    */
/**
        @typedef ProductListingAction
        
        
        @property { ProductListingActionPage } [page]
        
        @property { string } [type]
        
         
    */
/**
        @typedef Media1
        
        
        @property { string } url
        
        @property { string } [type]
        
        @property { Object } [meta]
        
         
    */
/**
        @typedef GetCollectionDetailNest
        
        
        @property { string } [description]
        
        @property { string } [uid]
        
        @property { Object } [badge]
        
        @property { string } [name]
        
        @property { boolean } [allowSort]
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { Object } [cron]
        
        @property { string } [type]
        
        @property { Array<string> } [tag]
        
        @property { boolean } [isActive]
        
        @property { Object } [query]
        
        @property { ImageUrls } [banners]
        
        @property { Object } [schedule]
        
        @property { ProductListingAction } [action]
        
        @property { string } [slug]
        
        @property { Media1 } [logo]
        
        @property { Object } [meta]
        
        @property { boolean } [allowFacets]
        
        @property { string } [appId]
        
         
    */
/**
        @typedef GetCollectionListingResponse
        
        
        @property { Page } [page]
        
        @property { CollectionListingFilter } [filters]
        
        @property { Array<GetCollectionDetailNest> } [items]
        
         
    */
/**
        @typedef CollectionDetailResponse
        
        
        @property { string } [description]
        
        @property { string } [slug]
        
        @property { Array<string> } [tag]
        
        @property { Media1 } [logo]
        
        @property { Object } [meta]
        
        @property { boolean } [allowFacets]
        
        @property { Object } [badge]
        
        @property { string } [name]
        
        @property { boolean } [isActive]
        
        @property { boolean } [allowSort]
        
        @property { string } [type]
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { Object } [query]
        
        @property { ImageUrls } [banners]
        
        @property { string } [appId]
        
        @property { Object } [cron]
        
        @property { Object } [schedule]
        
         
    */
/**
        @typedef CollectionItemRequest
        
        
        @property { number } pageSize
        
        @property { number } pageNo
        
         
    */
/**
        @typedef UpdatedResponse
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef Price1
        
        
        @property { number } [min]
        
        @property { string } [currencySymbol]
        
        @property { number } [max]
        
        @property { string } [currencyCode]
        
         
    */
/**
        @typedef ProductListingPrice
        
        
        @property { Price1 } [marked]
        
        @property { Price1 } [effective]
        
         
    */
/**
        @typedef ProductListingDetail
        
        
        @property { string } [description]
        
        @property { number } [uid]
        
        @property { Object } [attributes]
        
        @property { string } [name]
        
        @property { Array<string> } [tryouts]
        
        @property { number } [rating]
        
        @property { Array<string> } [highlights]
        
        @property { boolean } [sellable]
        
        @property { string } [discount]
        
        @property { boolean } [hasVariant]
        
        @property { string } [type]
        
        @property { Object } [teaserTag]
        
        @property { string } [shortDescription]
        
        @property { string } [productOnlineDate]
        
        @property { Array<Media1> } [medias]
        
        @property { Array<string> } [similars]
        
        @property { number } [ratingCount]
        
        @property { string } slug
        
        @property { ProductListingPrice } [price]
        
        @property { Object } [promoMeta]
        
        @property { string } [imageNature]
        
        @property { string } [itemType]
        
        @property { string } [color]
        
         
    */
/**
        @typedef GetCollectionItemsResponse
        
        
        @property { Page } [page]
        
        @property { Array<ProductFilters> } [filters]
        
        @property { Array<ProductListingDetail> } [items]
        
        @property { Array<ProductSortOn> } [sortOn]
        
         
    */
/**
        @typedef CatalogInsightItem
        
        
        @property { number } [sellableCount]
        
        @property { number } [outOfStockCount]
        
        @property { number } [count]
        
         
    */
/**
        @typedef CatalogInsightBrand
        
        
        @property { number } [availableArticles]
        
        @property { string } [name]
        
        @property { number } [totalSizes]
        
        @property { number } [availableSizes]
        
        @property { number } [totalArticles]
        
        @property { number } [articleFreshness]
        
         
    */
/**
        @typedef CatalogInsightResponse
        
        
        @property { CatalogInsightItem } [item]
        
        @property { CatalogInsightBrand } [brandDistribution]
        
         
    */
/**
        @typedef CrossSellingData
        
        
        @property { number } [articles]
        
        @property { number } [products]
        
         
    */
/**
        @typedef CrossSellingResponse
        
        
        @property { CrossSellingData } [data]
        
        @property { CatalogInsightBrand } [brandDistribution]
        
         
    */
/**
        @typedef OptInPostRequest
        
        
        @property { Array<number> } [brandIds]
        
        @property { string } optLevel
        
        @property { boolean } [enabled]
        
        @property { Array<number> } [storeIds]
        
         
    */
/**
        @typedef CompanyOptIn
        
        
        @property { Array<number> } brandIds
        
        @property { boolean } enabled
        
        @property { string } optLevel
        
        @property { number } modifiedOn
        
        @property { string } platform
        
        @property { number } companyId
        
        @property { number } createdOn
        
        @property { Object } [createdBy]
        
        @property { Object } [modifiedBy]
        
        @property { Array<number> } storeIds
        
         
    */
/**
        @typedef GetOptInPlatform
        
        
        @property { Page } page
        
        @property { Array<CompanyOptIn> } items
        
         
    */
/**
        @typedef OptinCompanyDetail
        
        
        @property { string } [companyType]
        
        @property { string } [businessType]
        
        @property { number } [uid]
        
        @property { string } [name]
        
         
    */
/**
        @typedef CompanyBrandDetail
        
        
        @property { number } [brandId]
        
        @property { number } [totalArticle]
        
        @property { number } [companyId]
        
        @property { string } [brandName]
        
         
    */
/**
        @typedef OptinCompanyBrandDetailsView
        
        
        @property { Page } [page]
        
        @property { Array<CompanyBrandDetail> } [items]
        
         
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
        
        @property { number } [uid]
        
        @property { string } [storeType]
        
        @property { Array<Object> } [additionalContacts]
        
        @property { Array<Object> } [documents]
        
        @property { string } [modifiedOn]
        
        @property { string } [createdOn]
        
        @property { string } [name]
        
        @property { number } [companyId]
        
        @property { string } [displayName]
        
        @property { string } [storeCode]
        
         
    */
/**
        @typedef OptinStoreDetails
        
        
        @property { Page } [page]
        
        @property { Array<StoreDetail> } [items]
        
         
    */
/**
        @typedef AttributeMasterDetails
        
        
        @property { string } displayType
        
         
    */
/**
        @typedef AttributeMasterMandatoryDetails
        
        
        @property { Array<string> } [l3Keys]
        
         
    */
/**
        @typedef AttributeMasterMeta
        
        
        @property { boolean } [enriched]
        
        @property { AttributeMasterMandatoryDetails } mandatoryDetails
        
         
    */
/**
        @typedef AttributeSchemaRange
        
        
        @property { number } [min]
        
        @property { number } [max]
        
         
    */
/**
        @typedef AttributeMaster
        
        
        @property { boolean } [multi]
        
        @property { boolean } [mandatory]
        
        @property { string } type
        
        @property { AttributeSchemaRange } [range]
        
        @property { string } [format]
        
        @property { Array<string> } [enum]
        
         
    */
/**
        @typedef AttributeMasterFilter
        
        
        @property { boolean } indexing
        
        @property { number } [priority]
        
        @property { Array<string> } [dependsOn]
        
         
    */
/**
        @typedef GenderDetail
        
        
        @property { string } [description]
        
        @property { string } [slug]
        
        @property { boolean } [enabledForEndConsumer]
        
        @property { AttributeMasterDetails } [details]
        
        @property { AttributeMasterMeta } [meta]
        
        @property { string } [logo]
        
        @property { string } [name]
        
        @property { AttributeMaster } [schema]
        
        @property { string } [id]
        
        @property { Array<string> } [departments]
        
        @property { boolean } [isNested]
        
        @property { AttributeMasterFilter } [filters]
        
         
    */
/**
        @typedef ProdcutTemplateCategoriesResponse
        
        
        @property { Page } [page]
        
        @property { Array<Object> } [items]
        
         
    */
/**
        @typedef PTErrorResponse
        
        
        @property { Object } [meta]
        
        @property { number } [status]
        
        @property { Object } [errors]
        
        @property { string } [code]
        
        @property { string } [message]
        
         
    */
/**
        @typedef UserSerializer
        
        
        @property { string } [userId]
        
        @property { string } [username]
        
        @property { string } [contact]
        
         
    */
/**
        @typedef GetDepartment
        
        
        @property { number } [pageSize]
        
        @property { string } [slug]
        
        @property { number } [uid]
        
        @property { string } [logo]
        
        @property { Array<string> } [synonyms]
        
        @property { string } [modifiedOn]
        
        @property { number } [priorityOrder]
        
        @property { string } [createdOn]
        
        @property { string } [name]
        
        @property { boolean } [isActive]
        
        @property { number } [pageNo]
        
        @property { UserSerializer } [createdBy]
        
        @property { string } [itemType]
        
        @property { string } [search]
        
        @property { UserSerializer } [modifiedBy]
        
         
    */
/**
        @typedef DepartmentsResponse
        
        
        @property { Page } [page]
        
        @property { Array<GetDepartment> } [items]
        
         
    */
/**
        @typedef DepartmentErrorResponse
        
        
        @property { Object } [meta]
        
        @property { number } [status]
        
        @property { Object } [errors]
        
        @property { string } [code]
        
        @property { string } [message]
        
         
    */
/**
        @typedef ProductTemplate
        
        
        @property { string } [description]
        
        @property { boolean } isPhysical
        
        @property { string } slug
        
        @property { string } [tag]
        
        @property { string } [logo]
        
        @property { Array<string> } [attributes]
        
        @property { Array<string> } [categories]
        
        @property { string } [modifiedOn]
        
        @property { string } [createdOn]
        
        @property { string } [name]
        
        @property { boolean } [isActive]
        
        @property { boolean } [isArchived]
        
        @property { Array<string> } [departments]
        
        @property { Object } [createdBy]
        
        @property { Object } [modifiedBy]
        
         
    */
/**
        @typedef TemplatesResponse
        
        
        @property { Page } [page]
        
        @property { ProductTemplate } [items]
        
         
    */
/**
        @typedef Properties
        
        
        @property { Object } [description]
        
        @property { Object } [tags]
        
        @property { Object } [trader]
        
        @property { Object } [name]
        
        @property { Object } [media]
        
        @property { Object } [currency]
        
        @property { Object } [highlights]
        
        @property { Object } [countryOfOrigin]
        
        @property { Object } [customOrder]
        
        @property { Object } [hsnCode]
        
        @property { Object } [variants]
        
        @property { Object } [noOfBoxes]
        
        @property { Object } [moq]
        
        @property { Object } [sizeGuide]
        
        @property { Object } [traderType]
        
        @property { Object } [command]
        
        @property { Object } [sizes]
        
        @property { Object } [teaserTag]
        
        @property { Object } [shortDescription]
        
        @property { Object } [isActive]
        
        @property { Object } [productPublish]
        
        @property { Object } [returnConfig]
        
        @property { Object } [slug]
        
        @property { Object } [multiSize]
        
        @property { Object } [isDependent]
        
        @property { Object } [brandUid]
        
        @property { Object } [itemCode]
        
        @property { Object } [categorySlug]
        
        @property { Object } [itemType]
        
        @property { Object } [productGroupTag]
        
         
    */
/**
        @typedef GlobalValidation
        
        
        @property { string } [description]
        
        @property { string } [title]
        
        @property { Object } [definitions]
        
        @property { Properties } [properties]
        
        @property { string } [type]
        
        @property { Array<string> } [required]
        
         
    */
/**
        @typedef TemplateValidationData
        
        
        @property { GlobalValidation } [globalValidation]
        
        @property { Object } [templateValidation]
        
         
    */
/**
        @typedef TemplateDetails
        
        
        @property { string } [description]
        
        @property { boolean } isPhysical
        
        @property { string } slug
        
        @property { string } [tag]
        
        @property { string } [logo]
        
        @property { Array<string> } [attributes]
        
        @property { Array<string> } [categories]
        
        @property { string } [name]
        
        @property { boolean } [isActive]
        
        @property { boolean } [isArchived]
        
        @property { string } [id]
        
        @property { Array<string> } [departments]
        
         
    */
/**
        @typedef TemplatesValidationResponse
        
        
        @property { TemplateValidationData } [data]
        
        @property { TemplateDetails } [templateDetails]
        
         
    */
/**
        @typedef InventoryValidationResponse
        
        
        @property { Object } [data]
        
        @property { string } [message]
        
         
    */
/**
        @typedef HSNData
        
        
        @property { Array<string> } [hsnCode]
        
        @property { Array<string> } [countryOfOrigin]
        
         
    */
/**
        @typedef HSNCodesResponse
        
        
        @property { HSNData } [data]
        
        @property { string } [message]
        
         
    */
/**
        @typedef UserInfo1
        
        
        @property { string } [email]
        
        @property { string } [username]
        
        @property { string } [uid]
        
        @property { string } [userId]
        
         
    */
/**
        @typedef ProductTemplateExport
        
        
        @property { string } [status]
        
        @property { Array<string> } templateTags
        
        @property { string } taskId
        
        @property { string } [url]
        
        @property { string } triggerOn
        
        @property { number } sellerId
        
        @property { string } [completedOn]
        
        @property { UserInfo1 } [createdBy]
        
        @property { Object } [data]
        
         
    */
/**
        @typedef ProductDownloadsResponse
        
        
        @property { Page } [page]
        
        @property { Array<ProductTemplateExport> } [items]
        
         
    */
/**
        @typedef ProductConfigurationDownloads
        
        
        @property { Array<Object> } [data]
        
        @property { boolean } [multivalue]
        
         
    */
/**
        @typedef Media2
        
        
        @property { string } landscape
        
        @property { string } logo
        
        @property { string } portrait
        
         
    */
/**
        @typedef CategoryMappingValues
        
        
        @property { number } [catalogId]
        
        @property { string } name
        
         
    */
/**
        @typedef CategoryMapping
        
        
        @property { CategoryMappingValues } [ajio]
        
        @property { CategoryMappingValues } [facebook]
        
        @property { CategoryMappingValues } [google]
        
         
    */
/**
        @typedef Hierarchy
        
        
        @property { number } l1
        
        @property { number } department
        
        @property { number } l2
        
         
    */
/**
        @typedef CategoryRequestBody
        
        
        @property { string } [slug]
        
        @property { number } [priority]
        
        @property { Array<string> } [synonyms]
        
        @property { string } name
        
        @property { boolean } isActive
        
        @property { Array<string> } [tryouts]
        
        @property { Array<number> } departments
        
        @property { Media2 } [media]
        
        @property { CategoryMapping } [marketplaces]
        
        @property { number } level
        
        @property { Array<Hierarchy> } [hierarchy]
        
         
    */
/**
        @typedef CategoryCreateResponse
        
        
        @property { string } [message]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef Category
        
        
        @property { string } [slug]
        
        @property { number } [uid]
        
        @property { number } [priority]
        
        @property { string } [id]
        
        @property { Array<string> } [synonyms]
        
        @property { string } [modifiedOn]
        
        @property { string } [createdOn]
        
        @property { string } name
        
        @property { boolean } isActive
        
        @property { Array<string> } [tryouts]
        
        @property { Array<number> } departments
        
        @property { Object } [createdBy]
        
        @property { Media2 } [media]
        
        @property { Object } [modifiedBy]
        
        @property { CategoryMapping } [marketplaces]
        
        @property { number } level
        
        @property { Array<Hierarchy> } [hierarchy]
        
         
    */
/**
        @typedef CategoryResponse
        
        
        @property { Page } [page]
        
        @property { Array<Category> } [items]
        
         
    */
/**
        @typedef CategoryUpdateResponse
        
        
        @property { string } [message]
        
        @property { boolean } [success]
        
         
    */
/**
        @typedef SingleCategoryResponse
        
        
        @property { Object } [page]
        
        @property { Array<Category> } [items]
        
         
    */
/**
        @typedef Trader
        
        
        @property { string } address
        
        @property { string } name
        
         
    */
/**
        @typedef CustomOrder
        
        
        @property { number } [manufacturingTime]
        
        @property { string } [manufacturingTimeUnit]
        
        @property { boolean } [isCustomOrder]
        
         
    */
/**
        @typedef OrderQuantity
        
        
        @property { number } [minimum]
        
        @property { boolean } [isSet]
        
        @property { number } [maximum]
        
         
    */
/**
        @typedef TeaserTag
        
        
        @property { string } [url]
        
        @property { string } [tag]
        
         
    */
/**
        @typedef ProductPublish
        
        
        @property { string } [productOnlineDate]
        
        @property { boolean } [isSet]
        
         
    */
/**
        @typedef ReturnConfig
        
        
        @property { number } [time]
        
        @property { boolean } [returnable]
        
        @property { string } [unit]
        
         
    */
/**
        @typedef ProductCreateUpdate
        
        
        @property { string } [description]
        
        @property { number } [uid]
        
        @property { Array<string> } [tags]
        
        @property { Trader } [trader]
        
        @property { string } name
        
        @property { string } [requester]
        
        @property { Array<number> } departments
        
        @property { Array<Media1> } [media]
        
        @property { boolean } [isSet]
        
        @property { string } currency
        
        @property { Array<string> } [highlights]
        
        @property { string } countryOfOrigin
        
        @property { CustomOrder } [customOrder]
        
        @property { string } templateTag
        
        @property { Object } [variants]
        
        @property { string } hsnCode
        
        @property { number } [noOfBoxes]
        
        @property { OrderQuantity } [moq]
        
        @property { number } companyId
        
        @property { string } [sizeGuide]
        
        @property { string } [traderType]
        
        @property { TeaserTag } [teaserTag]
        
        @property { string } [changeRequestId]
        
        @property { string } [shortDescription]
        
        @property { boolean } [isActive]
        
        @property { ProductPublish } [productPublish]
        
        @property { ReturnConfig } [returnConfig]
        
        @property { string } slug
        
        @property { Object } [customJson]
        
        @property { boolean } [isImageLessProduct]
        
        @property { boolean } [multiSize]
        
        @property { boolean } [isDependent]
        
        @property { number } brandUid
        
        @property { string } itemCode
        
        @property { string } categorySlug
        
        @property { string } itemType
        
        @property { Array<string> } [productGroupTag]
        
         
    */
/**
        @typedef PageData
        
        
        @property { number } [size]
        
        @property { string } [current]
        
        @property { number } [itemTotal]
        
        @property { boolean } [hasPrevious]
        
        @property { boolean } [hasNext]
        
         
    */
/**
        @typedef VerifiedBy
        
        
        @property { string } [userId]
        
        @property { string } [username]
        
         
    */
/**
        @typedef UserCommon
        
        
        @property { string } [userId]
        
        @property { string } [username]
        
        @property { number } [companyId]
        
         
    */
/**
        @typedef Attributes
        
        
        @property { VerifiedBy } [verifiedBy]
        
        @property { string } [sleeveLength]
        
        @property { string } [createdOn]
        
        @property { string } [primaryColor]
        
        @property { string } [pattern]
        
        @property { UserCommon } [modifiedBy]
        
        @property { string } [modifiedOn]
        
        @property { string } [essential]
        
        @property { string } [verifiedOn]
        
        @property { Array<string> } [l3Mapping]
        
        @property { string } [metaNature]
        
        @property { UserCommon } [createdBy]
        
        @property { string } [material]
        
        @property { string } [stage]
        
        @property { string } [productFit]
        
        @property { string } [neckType]
        
        @property { string } [primaryMaterial]
        
        @property { boolean } [isImageLessProduct]
        
        @property { string } [imageNature]
        
        @property { Array<string> } [gender]
        
        @property { string } [color]
        
         
    */
/**
        @typedef Logo
        
        
        @property { string } [url]
        
        @property { string } [aspectRatio]
        
        @property { string } [secureUrl]
        
        @property { number } [aspectRatioF]
        
         
    */
/**
        @typedef Brand
        
        
        @property { number } [uid]
        
        @property { Logo } [logo]
        
        @property { string } [name]
        
         
    */
/**
        @typedef ProductPublished
        
        
        @property { number } [productOnlineDate]
        
        @property { boolean } [isSet]
        
         
    */
/**
        @typedef Product
        
        
        @property { string } [description]
        
        @property { number } [uid]
        
        @property { Array<string> } [images]
        
        @property { Attributes } [attributes]
        
        @property { string } [name]
        
        @property { string } [id]
        
        @property { Array<number> } [departments]
        
        @property { Array<string> } [media]
        
        @property { boolean } [isSet]
        
        @property { string } [currency]
        
        @property { string } [highlights]
        
        @property { string } [countryOfOrigin]
        
        @property { string } [templateTag]
        
        @property { string } [hsnCode]
        
        @property { number } [companyId]
        
        @property { string } [sizeGuide]
        
        @property { Array<Object> } [sizes]
        
        @property { Brand } [brand]
        
        @property { Array<string> } [allSizes]
        
        @property { boolean } [isActive]
        
        @property { ProductPublished } [productPublish]
        
        @property { string } [slug]
        
        @property { boolean } [multiSize]
        
        @property { boolean } [isDependent]
        
        @property { string } [itemCode]
        
        @property { string } [categorySlug]
        
        @property { string } [itemType]
        
         
    */
/**
        @typedef ProductListingResponse
        
        
        @property { PageData } [page]
        
        @property { Array<Product> } [items]
        
         
    */
/**
        @typedef ValidateProduct
        
        
        @property { boolean } [valid]
        
         
    */
/**
        @typedef BulkJob
        
        
        @property { Array<Object> } [cancelledRecords]
        
        @property { Array<Object> } [failedRecords]
        
        @property { string } [filePath]
        
        @property { string } [customTemplateTag]
        
        @property { string } [templateTag]
        
        @property { string } [modifiedOn]
        
        @property { number } [succeed]
        
        @property { string } createdOn
        
        @property { number } companyId
        
        @property { boolean } [isActive]
        
        @property { number } total
        
        @property { string } [trackingUrl]
        
        @property { number } [cancelled]
        
        @property { UserInfo1 } [createdBy]
        
        @property { UserInfo1 } [modifiedBy]
        
        @property { number } [failed]
        
        @property { string } [stage]
        
         
    */
/**
        @typedef UserDetail
        
        
        @property { string } [userId]
        
        @property { string } [username]
        
        @property { string } [fullName]
        
         
    */
/**
        @typedef ProductBulkRequest
        
        
        @property { Array<string> } [cancelledRecords]
        
        @property { Array<string> } [failedRecords]
        
        @property { ProductTemplate } [template]
        
        @property { string } [filePath]
        
        @property { string } [templateTag]
        
        @property { string } [modifiedOn]
        
        @property { number } [succeed]
        
        @property { number } [companyId]
        
        @property { string } [createdOn]
        
        @property { boolean } [isActive]
        
        @property { number } [total]
        
        @property { number } [cancelled]
        
        @property { UserDetail } [modifiedBy]
        
        @property { UserDetail } [createdBy]
        
        @property { string } [stage]
        
        @property { number } [failed]
        
         
    */
/**
        @typedef ProductBulkRequestList
        
        
        @property { PageData } [page]
        
        @property { ProductBulkRequest } [items]
        
         
    */
/**
        @typedef BulkProductRequest
        
        
        @property { Array<Object> } data
        
        @property { string } templateTag
        
        @property { string } batchId
        
        @property { number } companyId
        
         
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
        @typedef ProductBulkAssets
        
        
        @property { Object } user
        
        @property { string } url
        
        @property { number } [companyId]
        
         
    */
/**
        @typedef Items
        
        
        @property { Array<string> } [cancelledRecords]
        
        @property { Array<string> } [failedRecords]
        
        @property { number } [retry]
        
        @property { string } [filePath]
        
        @property { string } [modifiedOn]
        
        @property { number } [succeed]
        
        @property { string } [createdOn]
        
        @property { number } [companyId]
        
        @property { boolean } [isActive]
        
        @property { string } [id]
        
        @property { number } [total]
        
        @property { string } [trackingUrl]
        
        @property { number } [cancelled]
        
        @property { UserCommon } [createdBy]
        
        @property { UserCommon } [modifiedBy]
        
        @property { number } [failed]
        
        @property { string } [stage]
        
         
    */
/**
        @typedef BulkAssetResponse
        
        
        @property { PageData } [page]
        
        @property { Array<Items> } [items]
        
         
    */
/**
        @typedef ItemQuery
        
        
        @property { number } [brandUid]
        
        @property { number } [uid]
        
        @property { string } [itemCode]
        
         
    */
/**
        @typedef SetSize
        
        
        @property { string } size
        
        @property { number } pieces
        
         
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
        @typedef GTIN
        
        
        @property { boolean } [primary]
        
        @property { string } gtinValue
        
        @property { string } gtinType
        
         
    */
/**
        @typedef InvSize
        
        
        @property { number } [itemLength]
        
        @property { string } size
        
        @property { number } price
        
        @property { InventorySet } [set]
        
        @property { number } [priceTransfer]
        
        @property { number } [itemWeight]
        
        @property { number } priceEffective
        
        @property { string } [itemDimensionsUnitOfMeasure]
        
        @property { number } [itemWidth]
        
        @property { number } [itemHeight]
        
        @property { string } [itemWeightUnitOfMeasure]
        
        @property { Array<GTIN> } identifiers
        
        @property { number } quantity
        
        @property { string } storeCode
        
        @property { boolean } [isSet]
        
        @property { string } currency
        
         
    */
/**
        @typedef InventoryRequest
        
        
        @property { ItemQuery } item
        
        @property { Array<InvSize> } sizes
        
        @property { number } companyId
        
         
    */
/**
        @typedef InventoryRequest1
        
        
        @property { number } [pageSize]
        
        @property { string } [size]
        
        @property { number } [total]
        
        @property { number } [pageNo]
        
        @property { string } [search]
        
         
    */
/**
        @typedef CommonResponse
        
        
        @property { string } [success]
        
         
    */
/**
        @typedef BulkRequestGet
        
        
        @property { number } [pageSize]
        
        @property { string } [customTemplateTag]
        
        @property { string } [endDate]
        
        @property { string } [templateTag]
        
        @property { number } [total]
        
        @property { number } [pageNo]
        
        @property { string } [startDate]
        
        @property { string } [search]
        
        @property { string } [stage]
        
         
    */
/**
        @typedef Size1
        
        
        @property { number } [itemLength]
        
        @property { string } [size]
        
        @property { string } sellerIdentifier
        
        @property { number } price
        
        @property { InventorySet } [set]
        
        @property { number } [priceTransfer]
        
        @property { number } [itemWeight]
        
        @property { number } priceEffective
        
        @property { string } [itemDimensionsUnitOfMeasure]
        
        @property { number } [itemWidth]
        
        @property { number } [itemHeight]
        
        @property { string } [itemWeightUnitOfMeasure]
        
        @property { Array<Object> } [identifiers]
        
        @property { number } quantity
        
        @property { string } storeCode
        
        @property { boolean } [isSet]
        
        @property { string } currency
        
         
    */
/**
        @typedef InventoryBulkRequest
        
        
        @property { Object } [user]
        
        @property { string } batchId
        
        @property { Array<Size1> } sizes
        
        @property { number } companyId
        
         
    */
/**
        @typedef InventoryExportRequest
        
        
        @property { Array<number> } [brand]
        
        @property { string } [type]
        
        @property { Array<number> } [store]
        
         
    */
/**
        @typedef InventoryExportJob
        
        
        @property { string } [status]
        
        @property { string } taskId
        
        @property { string } [url]
        
        @property { string } [triggerOn]
        
        @property { string } [completedOn]
        
        @property { number } sellerId
        
        @property { Object } [requestParams]
        
         
    */
/**
        @typedef FilerList
        
        
        @property { string } [display]
        
        @property { string } [value]
        
         
    */
/**
        @typedef InventoryConfig
        
        
        @property { Array<FilerList> } [data]
        
        @property { boolean } [multivalues]
        
         
    */
/**
        @typedef HsnUpsert
        
        
        @property { number } tax1
        
        @property { number } [tax2]
        
        @property { number } [uid]
        
        @property { string } hs2Code
        
        @property { number } [threshold2]
        
        @property { string } hsnCode
        
        @property { boolean } taxOnMrp
        
        @property { number } companyId
        
        @property { boolean } isActive
        
        @property { boolean } [taxOnEsp]
        
        @property { number } threshold1
        
         
    */
/**
        @typedef HsnCodesObject
        
        
        @property { number } [tax1]
        
        @property { number } [tax2]
        
        @property { number } [uid]
        
        @property { string } [hs2Code]
        
        @property { number } [threshold2]
        
        @property { string } [hsnCode]
        
        @property { boolean } [taxOnMrp]
        
        @property { number } [companyId]
        
        @property { boolean } [isActive]
        
        @property { boolean } [taxOnEsp]
        
        @property { number } [threshold1]
        
         
    */
/**
        @typedef HsnCode
        
        
        @property { HsnCodesObject } [data]
        
         
    */
/**
        @typedef PageResponse
        
        
        @property { number } [size]
        
        @property { string } [current]
        
        @property { number } [itemTotal]
        
        @property { boolean } [hasPrevious]
        
        @property { boolean } [hasNext]
        
         
    */
/**
        @typedef HsnCodesListingResponse
        
        
        @property { PageResponse } [page]
        
        @property { Array<HsnCodesObject> } [items]
        
         
    */
/**
        @typedef BulkHsnUpsert
        
        
        @property { Array<HsnUpsert> } data
        
         
    */
/**
        @typedef BulkHsnResponse
        
        
        @property { boolean } [success]
        
         
    */
/**
        @typedef Document
        
        
        @property { string } type
        
        @property { boolean } [verified]
        
        @property { string } value
        
        @property { string } [url]
        
        @property { string } legalName
        
         
    */
/**
        @typedef ReferralInfo
        
        
        @property { string } [referralCode]
        
         
    */
/**
        @typedef CompanyAddress
        
        
        @property { string } [landmark]
        
        @property { string } country
        
        @property { number } longitude
        
        @property { string } city
        
        @property { string } [address2]
        
        @property { string } [countryCode]
        
        @property { number } pincode
        
        @property { string } state
        
        @property { number } latitude
        
        @property { string } address1
        
         
    */
/**
        @typedef BusinessCountryInfo
        
        
        @property { string } [countryCode]
        
        @property { string } [country]
        
         
    */
/**
        @typedef CompanyStoreSerializerRequest
        
        
        @property { Document } document
        
        @property { string } name
        
        @property { boolean } [franchiseEnabled]
        
        @property { Object } [warnings]
        
        @property { ReferralInfo } [referralInfo]
        
        @property { number } [uid]
        
        @property { string } [businessInfo]
        
        @property { string } businessType
        
        @property { CompanyAddress } address
        
        @property { BusinessCountryInfo } businessCountryInfo
        
        @property { Array<number> } brands
        
        @property { Array<string> } [notificationEmails]
        
         
    */
/**
        @typedef BusinessCountryInfo1
        
        
        @property { string } [countryCode]
        
        @property { string } [country]
        
         
    */
/**
        @typedef SellerPhoneNumber
        
        
        @property { number } countryCode
        
        @property { string } number
        
         
    */
/**
        @typedef ContactDetails
        
        
        @property { Array<SellerPhoneNumber> } [phone]
        
        @property { Array<string> } [emails]
        
         
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
        
        
        @property { string } [landmark]
        
        @property { string } [country]
        
        @property { number } [longitude]
        
        @property { string } [city]
        
        @property { string } [addressType]
        
        @property { string } [address2]
        
        @property { string } [countryCode]
        
        @property { number } [pincode]
        
        @property { string } [state]
        
        @property { number } [latitude]
        
        @property { string } [address1]
        
         
    */
/**
        @typedef GetCompanyProfileSerializerResponse
        
        
        @property { UserSerializer } [verifiedBy]
        
        @property { string } businessType
        
        @property { BusinessCountryInfo1 } [businessCountryInfo]
        
        @property { string } [name]
        
        @property { ContactDetails } [contactDetails]
        
        @property { string } [modifiedOn]
        
        @property { string } companyType
        
        @property { string } [stage]
        
        @property { Object } [warnings]
        
        @property { string } [createdOn]
        
        @property { Array<Document> } [documents]
        
        @property { number } uid
        
        @property { string } [businessInfo]
        
        @property { BusinessDetails } [businessDetails]
        
        @property { boolean } [franchiseEnabled]
        
        @property { Array<GetAddressSerializer> } [addresses]
        
        @property { UserSerializer } [createdBy]
        
        @property { UserSerializer } [modifiedBy]
        
        @property { string } [verifiedOn]
        
        @property { Array<string> } [notificationEmails]
        
         
    */
/**
        @typedef DocumentsObj
        
        
        @property { number } [verified]
        
        @property { number } [pending]
        
         
    */
/**
        @typedef MetricsSerializer
        
        
        @property { string } [stage]
        
        @property { DocumentsObj } [brand]
        
        @property { DocumentsObj } [store]
        
        @property { DocumentsObj } [storeDocuments]
        
        @property { DocumentsObj } [companyDocuments]
        
        @property { number } [uid]
        
        @property { DocumentsObj } [product]
        
         
    */
/**
        @typedef UserSerializer1
        
        
        @property { string } [userId]
        
        @property { string } [contact]
        
        @property { string } [username]
        
         
    */
/**
        @typedef BrandBannerSerializer
        
        
        @property { string } [portrait]
        
        @property { string } [landscape]
        
         
    */
/**
        @typedef GetBrandResponseSerializer
        
        
        @property { UserSerializer1 } [createdBy]
        
        @property { string } [description]
        
        @property { string } name
        
        @property { string } [logo]
        
        @property { string } [stage]
        
        @property { UserSerializer1 } [verifiedBy]
        
        @property { Object } [localeLanguage]
        
        @property { Object } [warnings]
        
        @property { string } [rejectReason]
        
        @property { string } [createdOn]
        
        @property { number } [uid]
        
        @property { UserSerializer1 } [modifiedBy]
        
        @property { string } [slugKey]
        
        @property { string } [modifiedOn]
        
        @property { BrandBannerSerializer } [banner]
        
        @property { Object } [customJson]
        
        @property { Array<string> } [synonyms]
        
        @property { string } [verifiedOn]
        
         
    */
/**
        @typedef CreateUpdateBrandRequestSerializer
        
        
        @property { string } [description]
        
        @property { string } name
        
        @property { string } logo
        
        @property { Object } [localeLanguage]
        
        @property { number } [companyId]
        
        @property { number } [uid]
        
        @property { Object } [customJson]
        
        @property { string } [brandTier]
        
        @property { BrandBannerSerializer } [banner]
        
        @property { Array<string> } [synonyms]
        
         
    */
/**
        @typedef CompanyBrandPostRequestSerializer
        
        
        @property { number } company
        
        @property { Array<number> } brands
        
        @property { number } [uid]
        
         
    */
/**
        @typedef GetCompanySerializer
        
        
        @property { UserSerializer } [createdBy]
        
        @property { string } [name]
        
        @property { string } [stage]
        
        @property { UserSerializer } [verifiedBy]
        
        @property { string } [rejectReason]
        
        @property { string } [createdOn]
        
        @property { number } [uid]
        
        @property { UserSerializer } [modifiedBy]
        
        @property { string } [businessType]
        
        @property { string } [modifiedOn]
        
        @property { string } [verifiedOn]
        
        @property { Array<GetAddressSerializer> } [addresses]
        
        @property { string } [companyType]
        
         
    */
/**
        @typedef CompanyBrandSerializer
        
        
        @property { UserSerializer1 } [createdBy]
        
        @property { string } [stage]
        
        @property { GetBrandResponseSerializer } [brand]
        
        @property { UserSerializer1 } [verifiedBy]
        
        @property { Object } [warnings]
        
        @property { string } [rejectReason]
        
        @property { string } [createdOn]
        
        @property { GetCompanySerializer } [company]
        
        @property { number } [uid]
        
        @property { UserSerializer1 } [modifiedBy]
        
        @property { string } [modifiedOn]
        
        @property { string } [verifiedOn]
        
         
    */
/**
        @typedef CompanyBrandListSerializer
        
        
        @property { Array<CompanyBrandSerializer> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef LocationManagerSerializer
        
        
        @property { string } [name]
        
        @property { SellerPhoneNumber } mobileNo
        
        @property { string } [email]
        
         
    */
/**
        @typedef ProductReturnConfigSerializer
        
        
        @property { number } [storeUid]
        
        @property { boolean } [onSameStore]
        
         
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
        @typedef GetAddressSerializer1
        
        
        @property { string } [landmark]
        
        @property { string } [country]
        
        @property { number } [longitude]
        
        @property { string } [city]
        
        @property { string } [addressType]
        
        @property { string } [address2]
        
        @property { string } [countryCode]
        
        @property { number } [pincode]
        
        @property { string } [state]
        
        @property { number } [latitude]
        
        @property { string } [address1]
        
         
    */
/**
        @typedef LocationTimingSerializer
        
        
        @property { number } [hour]
        
        @property { number } [minute]
        
         
    */
/**
        @typedef LocationDayWiseSerializer
        
        
        @property { boolean } open
        
        @property { LocationTimingSerializer } [closing]
        
        @property { LocationTimingSerializer } [opening]
        
        @property { string } weekday
        
         
    */
/**
        @typedef LocationSerializer
        
        
        @property { LocationManagerSerializer } [manager]
        
        @property { string } name
        
        @property { string } [stage]
        
        @property { Object } [warnings]
        
        @property { ProductReturnConfigSerializer } [productReturnConfig]
        
        @property { InvoiceDetailsSerializer } [gstCredentials]
        
        @property { number } company
        
        @property { Array<Document> } [documents]
        
        @property { number } [uid]
        
        @property { Object } [customJson]
        
        @property { GetAddressSerializer1 } address
        
        @property { Array<LocationDayWiseSerializer> } [timing]
        
        @property { string } displayName
        
        @property { string } [storeType]
        
        @property { Array<SellerPhoneNumber> } [contactNumbers]
        
        @property { string } code
        
        @property { Array<string> } [notificationEmails]
        
         
    */
/**
        @typedef LocationIntegrationType
        
        
        @property { string } [inventory]
        
        @property { string } [order]
        
         
    */
/**
        @typedef GetLocationSerializer
        
        
        @property { UserSerializer1 } [verifiedBy]
        
        @property { ProductReturnConfigSerializer } [productReturnConfig]
        
        @property { string } phoneNumber
        
        @property { Object } [customJson]
        
        @property { string } [storeType]
        
        @property { string } name
        
        @property { string } [modifiedOn]
        
        @property { string } [stage]
        
        @property { Object } [warnings]
        
        @property { InvoiceDetailsSerializer } [gstCredentials]
        
        @property { LocationIntegrationType } [integrationType]
        
        @property { string } [createdOn]
        
        @property { Array<Document> } [documents]
        
        @property { number } [uid]
        
        @property { string } displayName
        
        @property { Array<SellerPhoneNumber> } [contactNumbers]
        
        @property { string } code
        
        @property { UserSerializer1 } [createdBy]
        
        @property { GetCompanySerializer } [company]
        
        @property { UserSerializer1 } [modifiedBy]
        
        @property { GetAddressSerializer } address
        
        @property { Array<LocationDayWiseSerializer> } [timing]
        
        @property { LocationManagerSerializer } [manager]
        
        @property { string } [verifiedOn]
        
        @property { Array<string> } [notificationEmails]
        
         
    */
/**
        @typedef LocationListSerializer
        
        
        @property { Array<GetLocationSerializer> } [items]
        
        @property { Page } [page]
        
         
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
        @typedef CampaignShortLink
        
        
        @property { string } [source]
        
        @property { string } [medium]
        
         
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
        
        @property { CampaignShortLink } [campaign]
        
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
        
        @property { CampaignShortLink } [campaign]
        
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
        @typedef ErrorRes
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef DataTresholdDTO
        
        
        @property { number } [minPrice]
        
        @property { number } [safeStock]
        
        @property { number } [periodThreshold]
        
        @property { string } [periodThresholdType]
        
        @property { Array<GenericDTO> } [periodTypeList]
        
         
    */
/**
        @typedef GenericDTO
        
        
        @property { string } [text]
        
        @property { Object } [value]
        
         
    */
/**
        @typedef JobConfigDTO
        
        
        @property { string } integration
        
        @property { Object } [integrationData]
        
        @property { string } [companyName]
        
        @property { number } companyId
        
        @property { TaskDTO } [taskDetails]
        
        @property { DataTresholdDTO } [thresholdDetails]
        
        @property { string } [jobCode]
        
        @property { string } [alias]
        
         
    */
/**
        @typedef TaskDTO
        
        
        @property { number } [type]
        
        @property { Array<GenericDTO> } [groupList]
        
         
    */
/**
        @typedef ResponseEnvelopeString
        
        
        @property { string } [timestamp]
        
        @property { number } [status]
        
        @property { string } [error]
        
        @property { string } [exception]
        
        @property { string } [message]
        
        @property { number } [totalTimeTakenInMillis]
        
        @property { string } [httpStatus]
        
        @property { string } [items]
        
        @property { string } [payload]
        
        @property { string } [traceId]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef AWSS3config
        
        
        @property { string } [bucket]
        
        @property { string } [region]
        
        @property { string } [dir]
        
        @property { string } [accessKey]
        
        @property { string } [secretKey]
        
        @property { string } [localFilePath]
        
        @property { string } [archivePath]
        
        @property { boolean } [archive]
        
        @property { boolean } [delete]
        
        @property { boolean } [unzip]
        
        @property { string } [zipFormat]
        
        @property { string } [fileRegex]
        
        @property { ArchiveConfig } [archiveConfig]
        
         
    */
/**
        @typedef ArchiveConfig
        
        
        @property { boolean } [delete]
        
        @property { boolean } [archive]
        
        @property { string } [archiveDir]
        
         
    */
/**
        @typedef Audit
        
        
        @property { string } [createdBy]
        
        @property { string } [modifiedBy]
        
        @property { string } [createdOn]
        
        @property { string } [modifiedOn]
        
         
    */
/**
        @typedef CatalogMasterConfig
        
        
        @property { string } [sourceSlug]
        
         
    */
/**
        @typedef CompanyConfig
        
        
        @property { number } [companyId]
        
        @property { Array<number> } [excludeSteps]
        
        @property { Array<string> } [hiddenClosetKeys]
        
        @property { Object } [openTags]
        
        @property { Array<string> } [taxIdentifiers]
        
        @property { number } [deleteQuantityThreshold]
        
         
    */
/**
        @typedef DBConfig
        
        
        @property { string } [vendor]
        
        @property { string } [host]
        
        @property { number } [port]
        
        @property { string } [username]
        
        @property { string } [password]
        
        @property { string } [dbname]
        
        @property { string } [query]
        
        @property { boolean } [procedure]
        
        @property { string } [driverClass]
        
        @property { string } [jdbcUrl]
        
        @property { Object } [optionalProperties]
        
         
    */
/**
        @typedef DBConnectionProfile
        
        
        @property { string } [inventory]
        
         
    */
/**
        @typedef DBParamConfig
        
        
        @property { Object } [params]
        
         
    */
/**
        @typedef DefaultHeadersDTO
        
        
        @property { PropBeanDTO } [store]
        
        @property { PropBeanDTO } [intfArticleId]
        
        @property { PropBeanDTO } [priceEffective]
        
        @property { PropBeanDTO } [quantity]
        
         
    */
/**
        @typedef DocMappingConfig
        
        
        @property { Object } [properties]
        
        @property { number } [junkDataThresholdCount]
        
        @property { Array<PropBeanConfig> } [propBeanConfigs]
        
        @property { string } [unwindField]
        
        @property { DefaultHeadersDTO } [defaultHeaders]
        
         
    */
/**
        @typedef EmailConfig
        
        
        @property { string } [recepient]
        
        @property { string } [host]
        
        @property { string } [username]
        
        @property { string } [password]
        
        @property { boolean } [unzip]
        
        @property { boolean } [readFromContent]
        
        @property { boolean } [filterBasedOnRecepients]
        
        @property { string } [pcol]
        
        @property { string } [subjectLineRegex]
        
        @property { string } [senderAddress]
        
        @property { string } [localDir]
        
        @property { Array<string> } [folderNameHierarchies]
        
        @property { string } [attachmentRegex]
        
        @property { string } [bodyContentRegex]
        
        @property { boolean } [passwordProtected]
        
        @property { string } [zipFormat]
        
        @property { boolean } [attachmentMandate]
        
        @property { boolean } [filterFilesAfterExtraction]
        
        @property { ArchiveConfig } [archiveConfig]
        
        @property { boolean } [readAllUnreadMails]
        
        @property { string } [contentType]
        
        @property { boolean } [downloadableLink]
        
        @property { Object } [properties]
        
         
    */
/**
        @typedef FTPConfig
        
        
        @property { string } [host]
        
        @property { number } [port]
        
        @property { string } [username]
        
        @property { string } [password]
        
        @property { boolean } [unzip]
        
        @property { number } [retries]
        
        @property { number } [interval]
        
        @property { string } [localDir]
        
        @property { string } [remoteDir]
        
        @property { string } [zipFileRegex]
        
        @property { ArchiveConfig } [archiveConfig]
        
        @property { string } [fileRegex]
        
        @property { string } [zipFormat]
        
        @property { boolean } [readAllFiles]
        
         
    */
/**
        @typedef FileConfig
        
        
        @property { string } [delimiter]
        
        @property { string } [charset]
        
        @property { Object } [properties]
        
        @property { boolean } [fileHasHeader]
        
        @property { number } [headerIndex]
        
        @property { Array<string> } [headerArray]
        
        @property { number } [dataStartIndex]
        
        @property { Array<PropBeanConfig> } [propBeanConfigs]
        
        @property { number } [junkDataThresholdCount]
        
        @property { string } [fileType]
        
        @property { boolean } [lineValidityCheck]
        
        @property { Array<string> } [sheetNames]
        
        @property { boolean } [readAllSheets]
        
        @property { string } [quoteChar]
        
        @property { string } [escapeChar]
        
        @property { DefaultHeadersDTO } [defaultHeaders]
        
         
    */
/**
        @typedef GoogleSpreadSheetConfig
        
        
        @property { string } [range]
        
        @property { string } [sheetId]
        
        @property { string } [clientSecretLocation]
        
        @property { string } [credStorageDirectory]
        
        @property { string } [localDir]
        
        @property { ArchiveConfig } [archiveConfig]
        
         
    */
/**
        @typedef HttpConfig
        
        
        @property { string } [hosturl]
        
        @property { string } [username]
        
        @property { string } [password]
        
        @property { Object } [requestParams]
        
        @property { string } [httpMethod]
        
        @property { string } [requestPayload]
        
        @property { string } [localPath]
        
        @property { ArchiveConfig } [archiveConfig]
        
         
    */
/**
        @typedef JobConfig
        
        
        @property { number } [id]
        
        @property { string } [jobCode]
        
        @property { string } [taskType]
        
        @property { number } [syncDelay]
        
        @property { string } [cronExpression]
        
        @property { StoreFilter } [storeFilter]
        
        @property { ProcessConfig } [processConfig]
        
        @property { Array<StoreConfig> } [storeConfig]
        
        @property { Object } [properties]
        
        @property { boolean } [immediateFirstRun]
        
        @property { boolean } [disable]
        
        @property { Array<string> } [dependentJobCodes]
        
        @property { Array<CompanyConfig> } [companyConfig]
        
        @property { Array<number> } [companyIds]
        
        @property { Array<string> } [taxIdentifiers]
        
        @property { string } [priority]
        
        @property { number } [periodThreshold]
        
        @property { string } [periodThresholdType]
        
        @property { DBConnectionProfile } [dbConnectionProfile]
        
        @property { Object } [params]
        
        @property { Object } [openTags]
        
        @property { number } [deleteQuantityThreshold]
        
        @property { CatalogMasterConfig } [catalogMasterConfig]
        
        @property { Array<string> } [aggregatorTypes]
        
        @property { string } [integrationType]
        
        @property { number } [minPrice]
        
        @property { Audit } [audit]
        
        @property { number } [version]
        
        @property { string } [alias]
        
         
    */
/**
        @typedef JobConfigRawDTO
        
        
        @property { string } integration
        
        @property { string } companyName
        
        @property { number } companyId
        
        @property { JobConfig } [data]
        
         
    */
/**
        @typedef JsonDocConfig
        
        
        @property { Array<PropBeanConfig> } [propBeanConfigs]
        
         
    */
/**
        @typedef LocalFileConfig
        
        
        @property { number } [retries]
        
        @property { number } [interval]
        
        @property { string } [localDir]
        
        @property { string } [workingDir]
        
        @property { boolean } [unzip]
        
        @property { string } [zipFileRegex]
        
        @property { string } [fileRegex]
        
        @property { string } [zipFormat]
        
        @property { ArchiveConfig } [archiveConfig]
        
        @property { boolean } [readAllFiles]
        
         
    */
/**
        @typedef MongoDocConfig
        
        
        @property { string } [collectionName]
        
        @property { Object } [findQuery]
        
        @property { Object } [projectionQuery]
        
        @property { Array<PropBeanConfig> } [propBeanConfigs]
        
        @property { Array<Object> } [aggregatePipeline]
        
        @property { boolean } [skipSave]
        
         
    */
/**
        @typedef OAuthConfig
        
        
        @property { number } [limit]
        
        @property { number } [pages]
        
        @property { number } [interval]
        
        @property { string } [consumerKey]
        
        @property { string } [consumerSecret]
        
        @property { string } [token]
        
        @property { string } [tokenSecret]
        
        @property { string } [restUrl]
        
        @property { string } [restBaseUrl]
        
        @property { string } [functionName]
        
         
    */
/**
        @typedef ProcessConfig
        
        
        @property { DBConfig } [dbConfig]
        
        @property { DBParamConfig } [dbParamConfig]
        
        @property { SFTPConfig } [sftpConfig]
        
        @property { AWSS3config } [awsS3Config]
        
        @property { MongoDocConfig } [mongoDocConfig]
        
        @property { FTPConfig } [ftpConfig]
        
        @property { EmailConfig } [emailConfig]
        
        @property { FileConfig } [fileConfig]
        
        @property { JsonDocConfig } [jsonDocConfig]
        
        @property { DocMappingConfig } [docMappingConfig]
        
        @property { TaskStepConfig } [taskStepConfig]
        
        @property { HttpConfig } [httpConfig]
        
        @property { LocalFileConfig } [localFileConfig]
        
        @property { OAuthConfig } [oauthConfig]
        
        @property { GoogleSpreadSheetConfig } [googleSpreadsheetConfig]
        
         
    */
/**
        @typedef PropBeanConfig
        
        
        @property { boolean } [required]
        
        @property { Object } [mapping]
        
        @property { boolean } [optional]
        
        @property { Send } [send]
        
        @property { Array<Object> } [validations]
        
        @property { Array<string> } [values]
        
        @property { boolean } [include]
        
        @property { string } [sourceField]
        
        @property { Array<string> } [sourceFields]
        
        @property { string } [destinationField]
        
        @property { string } [dataType]
        
        @property { Object } [defaultValue]
        
        @property { Object } [constValue]
        
        @property { string } [concatStr]
        
        @property { string } [functionName]
        
        @property { string } [transformerName]
        
        @property { string } [allParamFunctionName]
        
        @property { string } [subSeparator]
        
        @property { string } [indexField]
        
        @property { boolean } [ignoreIfNotExists]
        
        @property { string } [identifierType]
        
        @property { Object } [projectionQuery]
        
        @property { boolean } [enrichFromMaster]
        
         
    */
/**
        @typedef PropBeanDTO
        
        
        @property { boolean } [required]
        
        @property { boolean } [optional]
        
        @property { boolean } [include]
        
        @property { string } [sourceField]
        
        @property { Array<string> } [sourceFields]
        
        @property { string } [destinationField]
        
        @property { string } [dataType]
        
        @property { Object } [defaultValue]
        
        @property { Object } [constValue]
        
        @property { string } [concatStr]
        
        @property { string } [functionName]
        
        @property { string } [transformerName]
        
        @property { string } [allParamFunctionName]
        
        @property { string } [subSeparator]
        
        @property { string } [indexField]
        
        @property { boolean } [ignoreIfNotExists]
        
        @property { string } [identifierType]
        
        @property { Object } [projectionQuery]
        
        @property { boolean } [enrichFromMaster]
        
         
    */
/**
        @typedef ResponseEnvelopeListJobConfigRawDTO
        
        
        @property { string } [timestamp]
        
        @property { number } [status]
        
        @property { string } [error]
        
        @property { string } [exception]
        
        @property { string } [message]
        
        @property { number } [totalTimeTakenInMillis]
        
        @property { string } [httpStatus]
        
        @property { Array<JobConfigRawDTO> } [items]
        
        @property { Array<JobConfigRawDTO> } [payload]
        
        @property { string } [traceId]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef SFTPConfig
        
        
        @property { string } [host]
        
        @property { number } [port]
        
        @property { string } [username]
        
        @property { string } [password]
        
        @property { boolean } [unzip]
        
        @property { number } [retries]
        
        @property { number } [interval]
        
        @property { string } [privateKeyPath]
        
        @property { boolean } [strictHostKeyChecking]
        
        @property { string } [localDir]
        
        @property { string } [remoteDir]
        
        @property { boolean } [passwordProtected]
        
        @property { string } [zipFileRegex]
        
        @property { string } [fileRegex]
        
        @property { string } [zipFormat]
        
        @property { ArchiveConfig } [archiveConfig]
        
        @property { boolean } [readAllFiles]
        
         
    */
/**
        @typedef Send
        
        
        @property { boolean } [raw]
        
        @property { boolean } [processed]
        
         
    */
/**
        @typedef StoreConfig
        
        
        @property { string } [jobCode]
        
        @property { string } [storeid]
        
        @property { string } [storeAlias]
        
        @property { string } [storeFileRegex]
        
        @property { string } [storeFileName]
        
        @property { ProcessConfig } [processConfig]
        
        @property { Object } [properties]
        
         
    */
/**
        @typedef StoreFilter
        
        
        @property { Array<string> } [includeTags]
        
        @property { Array<string> } [excludeTags]
        
        @property { Object } [query]
        
         
    */
/**
        @typedef TaskConfig
        
        
        @property { string } [name]
        
        @property { number } [taskConfigId]
        
        @property { Array<TaskParam> } [taskParams]
        
         
    */
/**
        @typedef TaskParam
        
        
        @property { string } [name]
        
        @property { Object } [value]
        
         
    */
/**
        @typedef TaskStepConfig
        
        
        @property { Array<TaskConfig> } [taskConfigs]
        
        @property { Array<number> } [taskConfigIds]
        
        @property { Array<number> } [taskConfigGroupIds]
        
         
    */
/**
        @typedef ResponseEnvelopeListJobConfigDTO
        
        
        @property { string } [timestamp]
        
        @property { number } [status]
        
        @property { string } [error]
        
        @property { string } [exception]
        
        @property { string } [message]
        
        @property { number } [totalTimeTakenInMillis]
        
        @property { string } [httpStatus]
        
        @property { Array<JobConfigDTO> } [items]
        
        @property { Array<JobConfigDTO> } [payload]
        
        @property { string } [traceId]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef ResponseEnvelopeJobConfigDTO
        
        
        @property { string } [timestamp]
        
        @property { number } [status]
        
        @property { string } [error]
        
        @property { string } [exception]
        
        @property { string } [message]
        
        @property { number } [totalTimeTakenInMillis]
        
        @property { string } [httpStatus]
        
        @property { JobConfigDTO } [items]
        
        @property { JobConfigDTO } [payload]
        
        @property { string } [traceId]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef JobConfigListDTO
        
        
        @property { string } [code]
        
        @property { string } [alias]
        
        @property { string } [modifiedBy]
        
        @property { string } [createdBy]
        
        @property { string } [modifiedOn]
        
        @property { string } [createdOn]
        
        @property { boolean } [active]
        
        @property { string } [type]
        
         
    */
/**
        @typedef ResponseEnvelopeListJobConfigListDTO
        
        
        @property { string } [timestamp]
        
        @property { number } [status]
        
        @property { string } [error]
        
        @property { string } [exception]
        
        @property { string } [message]
        
        @property { number } [totalTimeTakenInMillis]
        
        @property { string } [httpStatus]
        
        @property { Array<JobConfigListDTO> } [items]
        
        @property { Array<JobConfigListDTO> } [payload]
        
        @property { string } [traceId]
        
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
        
        @property { Object } [params]
        
        @property { Object } [query]
        
         
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
        
        
        @property { number } [discountQty]
        
        @property { number } [min]
        
        @property { number } [key]
        
        @property { number } [max]
        
        @property { number } [value]
        
         
    */
/**
        @typedef Identifier
        
        
        @property { Array<string> } [articleId]
        
        @property { Array<number> } [brandId]
        
        @property { Array<string> } [collectionId]
        
        @property { Array<number> } [storeId]
        
        @property { Array<number> } [itemId]
        
        @property { Array<number> } [companyId]
        
        @property { Array<number> } [categoryId]
        
        @property { Array<string> } [userId]
        
         
    */
/**
        @typedef RuleDefinition
        
        
        @property { string } type
        
        @property { string } valueType
        
        @property { boolean } [isExact]
        
        @property { string } [currencyCode]
        
        @property { boolean } [autoApply]
        
        @property { string } applicableOn
        
        @property { Array<string> } [scope]
        
        @property { string } calculateOn
        
         
    */
/**
        @typedef Validity
        
        
        @property { number } [priority]
        
         
    */
/**
        @typedef Ownership
        
        
        @property { string } payableBy
        
        @property { string } payableCategory
        
         
    */
/**
        @typedef CouponAuthor
        
        
        @property { string } [modifiedBy]
        
        @property { string } [createdBy]
        
         
    */
/**
        @typedef DisplayMetaDict
        
        
        @property { string } [subtitle]
        
        @property { string } [title]
        
         
    */
/**
        @typedef DisplayMeta
        
        
        @property { string } [description]
        
        @property { DisplayMetaDict } [auto]
        
        @property { DisplayMetaDict } [apply]
        
        @property { string } [title]
        
        @property { DisplayMetaDict } [remove]
        
        @property { string } [subtitle]
        
         
    */
/**
        @typedef Validation
        
        
        @property { string } [userRegisteredAfter]
        
        @property { Array<string> } [appId]
        
        @property { boolean } [anonymous]
        
         
    */
/**
        @typedef CouponAction
        
        
        @property { string } [txnMode]
        
        @property { string } [actionDate]
        
         
    */
/**
        @typedef State
        
        
        @property { boolean } [isPublic]
        
        @property { boolean } [isDisplay]
        
        @property { boolean } [isArchived]
        
         
    */
/**
        @typedef PostOrder
        
        
        @property { boolean } [cancellationAllowed]
        
        @property { boolean } [returnAllowed]
        
         
    */
/**
        @typedef PaymentAllowValue
        
        
        @property { number } [max]
        
         
    */
/**
        @typedef PaymentModes
        
        
        @property { Array<string> } [types]
        
        @property { PaymentAllowValue } [uses]
        
        @property { Array<string> } [codes]
        
        @property { Array<string> } [networks]
        
         
    */
/**
        @typedef PaymentCodes
        
        
        @property { PaymentModes } [ps]
        
        @property { PaymentModes } [upi]
        
        @property { PaymentModes } [card]
        
        @property { PaymentModes } [pl]
        
        @property { PaymentModes } [nb]
        
        @property { PaymentModes } [wl]
        
        @property { PaymentModes } [qr]
        
         
    */
/**
        @typedef BulkBundleRestriction
        
        
        @property { boolean } multiStoreAllowed
        
         
    */
/**
        @typedef UsesRemaining
        
        
        @property { number } [app]
        
        @property { number } [user]
        
        @property { number } [total]
        
         
    */
/**
        @typedef UsesRestriction
        
        
        @property { UsesRemaining } [maximum]
        
        @property { UsesRemaining } [remaining]
        
         
    */
/**
        @typedef PriceRange
        
        
        @property { number } [max]
        
        @property { number } [min]
        
         
    */
/**
        @typedef Restrictions
        
        
        @property { Array<number> } [orderingStores]
        
        @property { PostOrder } [postOrder]
        
        @property { boolean } [couponAllowed]
        
        @property { PaymentCodes } [payments]
        
        @property { BulkBundleRestriction } [bulkBundle]
        
        @property { UsesRestriction } [uses]
        
        @property { PriceRange } [priceRange]
        
        @property { Array<string> } [platforms]
        
         
    */
/**
        @typedef CouponDateMeta
        
        
        @property { string } [modifiedOn]
        
        @property { string } [createdOn]
        
         
    */
/**
        @typedef CouponSchedule
        
        
        @property { string } [start]
        
        @property { Array<Object> } [nextSchedule]
        
        @property { string } [end]
        
        @property { number } [duration]
        
        @property { string } [cron]
        
         
    */
/**
        @typedef CouponAdd
        
        
        @property { Array<Rule> } rule
        
        @property { Identifier } identifiers
        
        @property { RuleDefinition } ruleDefinition
        
        @property { Validity } validity
        
        @property { Ownership } ownership
        
        @property { CouponAuthor } [author]
        
        @property { DisplayMeta } displayMeta
        
        @property { Validation } [validation]
        
        @property { Array<string> } [tags]
        
        @property { string } code
        
        @property { CouponAction } [action]
        
        @property { string } typeSlug
        
        @property { State } [state]
        
        @property { Restrictions } [restrictions]
        
        @property { CouponDateMeta } [dateMeta]
        
        @property { CouponSchedule } [schedule]
        
         
    */
/**
        @typedef CouponsResponse
        
        
        @property { Page } [page]
        
        @property { CouponAdd } [items]
        
         
    */
/**
        @typedef SuccessMessage
        
        
        @property { string } [message]
        
        @property { boolean } [success]
        
         
    */
/**
        @typedef OperationErrorResponse
        
        
        @property { string } [message]
        
        @property { boolean } [success]
        
         
    */
/**
        @typedef CouponUpdate
        
        
        @property { Array<Rule> } rule
        
        @property { Identifier } identifiers
        
        @property { RuleDefinition } ruleDefinition
        
        @property { Validity } validity
        
        @property { Ownership } ownership
        
        @property { CouponAuthor } [author]
        
        @property { DisplayMeta } displayMeta
        
        @property { Validation } [validation]
        
        @property { Array<string> } [tags]
        
        @property { string } code
        
        @property { CouponAction } [action]
        
        @property { string } typeSlug
        
        @property { State } [state]
        
        @property { Restrictions } [restrictions]
        
        @property { CouponDateMeta } [dateMeta]
        
        @property { CouponSchedule } [schedule]
        
         
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
        @typedef AppUser
        
        
        @property { string } [id]
        
        @property { boolean } [active]
        
        @property { string } [applicationId]
        
        @property { string } [blockReason]
        
        @property { string } [updatedAt]
        
        @property { string } [updatedBy]
        
        @property { string } [userId]
        
         
    */
/**
        @typedef E
        
        
        @property { Object } [code]
        
        @property { string } [exception]
        
        @property { string } [info]
        
        @property { string } [message]
        
        @property { string } [requestId]
        
        @property { string } [stackTrace]
        
        @property { number } [status]
        
         
    */
/**
        @typedef Giveaway
        
        
        @property { string } [id]
        
        @property { Schedule } [schedule]
        
        @property { boolean } [active]
        
        @property { string } [applicationId]
        
        @property { RewardsAudience } [audience]
        
        @property { Asset } [bannerImage]
        
        @property { string } [createdAt]
        
        @property { string } [description]
        
        @property { RewardsRule } [rule]
        
        @property { string } [title]
        
        @property { string } [updatedAt]
        
         
    */
/**
        @typedef GiveawayResponse
        
        
        @property { Array<Giveaway> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef HistoryPretty
        
        
        @property { string } [id]
        
        @property { string } [applicationId]
        
        @property { boolean } [claimed]
        
        @property { string } [createdAt]
        
        @property { string } [expiresOn]
        
        @property { number } [points]
        
        @property { number } [remainingPoints]
        
        @property { string } [text1]
        
        @property { string } [text2]
        
        @property { string } [text3]
        
        @property { string } [txnName]
        
        @property { string } [updatedAt]
        
        @property { string } [userId]
        
         
    */
/**
        @typedef HistoryRes
        
        
        @property { Array<HistoryPretty> } [items]
        
        @property { Page } [page]
        
        @property { number } [points]
        
         
    */
/**
        @typedef Offer
        
        
        @property { Schedule } [schedule]
        
        @property { boolean } [active]
        
        @property { string } [applicationId]
        
        @property { Asset } [bannerImage]
        
        @property { string } [createdAt]
        
        @property { string } [name]
        
        @property { Object } [rule]
        
        @property { ShareMessages } [share]
        
        @property { string } [subText]
        
        @property { string } [text]
        
        @property { string } [type]
        
        @property { string } [updatedAt]
        
        @property { string } [updatedBy]
        
        @property { string } [url]
        
         
    */
/**
        @typedef Points
        
        
        @property { number } [available]
        
         
    */
/**
        @typedef Referral
        
        
        @property { string } [code]
        
         
    */
/**
        @typedef RewardUser
        
        
        @property { string } [id]
        
        @property { boolean } [active]
        
        @property { string } [createdAt]
        
        @property { Referral } [referral]
        
        @property { number } [uid]
        
        @property { string } [updatedAt]
        
        @property { string } [userBlockReason]
        
        @property { string } [userId]
        
         
    */
/**
        @typedef RewardsAudience
        
        
        @property { string } [headerUserId]
        
        @property { string } [id]
        
         
    */
/**
        @typedef RewardsRule
        
        
        @property { number } [amount]
        
         
    */
/**
        @typedef ShareMessages
        
        
        @property { string } [email]
        
        @property { string } [facebook]
        
        @property { string } [fallback]
        
        @property { string } [message]
        
        @property { string } [messenger]
        
        @property { string } [sms]
        
        @property { string } [text]
        
        @property { string } [twitter]
        
        @property { string } [whatsapp]
        
         
    */
/**
        @typedef UserRes
        
        
        @property { Points } [points]
        
        @property { RewardUser } [user]
        
         
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
        
        @property { string } [traceId]
        
         
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
/**
        @typedef ValidityObject
        
        
        @property { string } start
        
        @property { string } end
        
         
    */
/**
        @typedef CreateUpdateDiscount
        
        
        @property { string } name
        
        @property { number } companyId
        
        @property { boolean } isActive
        
        @property { Array<string> } appIds
        
        @property { string } jobType
        
        @property { string } discountType
        
        @property { string } discountLevel
        
        @property { number } [value]
        
        @property { string } [filePath]
        
        @property { Array<number> } [brandIds]
        
        @property { Array<number> } [storeIds]
        
        @property { ValidityObject } validity
        
         
    */
/**
        @typedef DiscountJob
        
        
        @property { string } id
        
        @property { string } name
        
        @property { number } companyId
        
        @property { boolean } isActive
        
        @property { Array<string> } [appIds]
        
        @property { string } [jobType]
        
        @property { string } [discountType]
        
        @property { string } [discountLevel]
        
        @property { number } [value]
        
        @property { string } [filePath]
        
        @property { Array<number> } [brandIds]
        
        @property { Array<number> } [storeIds]
        
        @property { ValidityObject } validity
        
        @property { string } createdOn
        
        @property { string } modifiedOn
        
        @property { UserDetails } createdBy
        
        @property { UserDetails } modifiedBy
        
        @property { Object } [meta]
        
         
    */
/**
        @typedef ListOrCalender
        
        
        @property { Array<DiscountJob> } items
        
        @property { Page } page
        
         
    */
/**
        @typedef FileJobResponse
        
        
        @property { string } stage
        
        @property { number } total
        
        @property { number } failed
        
        @property { number } companyId
        
        @property { Object } [body]
        
        @property { string } type
        
        @property { string } fileType
        
         
    */
/**
        @typedef DownloadFileJob
        
        
        @property { Array<number> } [brandIds]
        
        @property { Array<number> } [storeIds]
        
         
    */
/**
        @typedef CancelJobResponse
        
        
        @property { boolean } success
        
         
    */
/**
        @typedef UserDetails
        
        
        @property { string } username
        
        @property { string } userId
        
         
    */
/**
        @typedef BadRequestObject
        
        
        @property { string } message
        
         
    */
/**
        @typedef AddProxyReq
        
        
        @property { string } [attachedPath]
        
        @property { string } [proxyUrl]
        
         
    */
/**
        @typedef AddProxyResponse
        
        
        @property { string } [id]
        
        @property { string } [attachedPath]
        
        @property { string } [proxyUrl]
        
        @property { string } [companyId]
        
        @property { string } [applicationId]
        
        @property { string } [extensionId]
        
        @property { string } [createdAt]
        
        @property { string } [modifiedAt]
        
         
    */
/**
        @typedef ApiError
        
        
        @property { string } [code]
        
        @property { string } [message]
        
        @property { Object } [meta]
        
         
    */
/**
        @typedef RemoveProxyResponse
        
        
        @property { string } [message]
        
        @property { Object } [data]
        
         
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
declare class Feedback {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
      *
      * @summary: Get list of attribute data
      * @description: Provides a list of all attribute data.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - pagination page no
      * @param {number} [arg.pageSize] - pagination page size
      
      **/
    getAttributes({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get list of attribute data
      * @description: Provides a list of all attribute data.
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - company id
      * @param {string} arg.applicationId - application id
      * @param {number} [arg.pageSize] - pagination page size
      
      **/
    getAttributesPaginator({ companyId, applicationId, pageSize }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
    /**
      *
      * @summary: Get list of customer reviews [admin]
      * @description: The endpoint provides a list of customer reviews based on entity and provided filters
      * @param {Object} arg - arg object.
      * @param {string} [arg.id] - review id
      * @param {string} [arg.entityId] - entity id
      * @param {string} [arg.entityType] - entity type
      * @param {string} [arg.userId] - user id
      * @param {string} [arg.media] - media type e.g. image | video | video_file | video_link
      * @param {Array<number>} [arg.rating] - rating filter, 1-5
      * @param {Array<string>} [arg.attributeRating] - attribute rating filter with ma,e of attribute
      * @param {boolean} [arg.facets] - facets (true|false)
      * @param {string} [arg.sort] - sort by : default | top | recent
      * @param {string} [arg.next] - pagination next
      * @param {string} [arg.start] - pagination start
      * @param {string} [arg.limit] - pagination limit
      * @param {string} [arg.count] - pagination count
      * @param {string} [arg.pageId] - pagination page id
      * @param {number} [arg.pageSize] - pagination page size
      
      **/
    getCustomerReviews({ id, entityId, entityType, userId, media, rating, attributeRating, facets, sort, next, start, limit, count, pageId, pageSize, }?: {
        id?: string;
        entityId?: string;
        entityType?: string;
        userId?: string;
        media?: string;
        rating?: Array<number>;
        attributeRating?: Array<string>;
        facets?: boolean;
        sort?: string;
        next?: string;
        start?: string;
        limit?: string;
        count?: string;
        pageId?: string;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get list of customer reviews [admin]
      * @description: The endpoint provides a list of customer reviews based on entity and provided filters
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - company id
      * @param {string} arg.applicationId - application id
      * @param {string} [arg.id] - review id
      * @param {string} [arg.entityId] - entity id
      * @param {string} [arg.entityType] - entity type
      * @param {string} [arg.userId] - user id
      * @param {string} [arg.media] - media type e.g. image | video | video_file | video_link
      * @param {Array<number>} [arg.rating] - rating filter, 1-5
      * @param {Array<string>} [arg.attributeRating] - attribute rating filter with ma,e of attribute
      * @param {boolean} [arg.facets] - facets (true|false)
      * @param {string} [arg.sort] - sort by : default | top | recent
      * @param {string} [arg.next] - pagination next
      * @param {string} [arg.start] - pagination start
      * @param {string} [arg.limit] - pagination limit
      * @param {string} [arg.count] - pagination count
      * @param {number} [arg.pageSize] - pagination page size
      
      **/
    getCustomerReviewsPaginator({ companyId, applicationId, id, entityId, entityType, userId, media, rating, attributeRating, facets, sort, next, start, limit, count, pageSize, }?: {
        companyId: string;
        applicationId: string;
        id?: string;
        entityId?: string;
        entityType?: string;
        userId?: string;
        media?: string;
        rating?: Array<number>;
        attributeRating?: Array<string>;
        facets?: boolean;
        sort?: string;
        next?: string;
        start?: string;
        limit?: string;
        count?: string;
        pageSize?: number;
    }): Paginator;
    /**
     *
     * @summary: update approve details
     * @description: The is used to update approve details like status and description text
     * @param {Object} arg - arg object.
     * @param {string} arg.reviewId - review id
     * @param {ApproveRequest} arg.body
     **/
    updateApprove({ reviewId, body }?: {
        reviewId: string;
        body: ApproveRequest;
    }): any;
    /**
      *
      * @summary: get history details
      * @description: The is used to get the history details like status and description text
      * @param {Object} arg - arg object.
      * @param {string} arg.reviewId - review id
      
      **/
    getHistory({ reviewId }?: {
        reviewId: string;
    }): any;
    /**
      *
      * @summary: Get list of templates
      * @description: Get all templates of application
      * @param {Object} arg - arg object.
      * @param {string} [arg.pageId] - pagination page id
      * @param {number} [arg.pageSize] - pagination page size
      
      **/
    getApplicationTemplates({ pageId, pageSize }?: {
        pageId?: string;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get list of templates
      * @description: Get all templates of application
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - company id
      * @param {string} arg.applicationId - application id
      * @param {number} [arg.pageSize] - pagination page size
      
      **/
    getApplicationTemplatesPaginator({ companyId, applicationId, pageSize, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
    /**
      *
      * @summary: Create a new template
      * @description: Create a new template for review with following data:
  - Enable media, rating and review
  - Rating - active/inactive/selected rate choices, attributes, text on rate, comment for each rate, type
  - Review - header, title, description, image and video meta, enable votes
      * @param {Object} arg - arg object.
      * @param {TemplateRequestList} arg.body
      **/
    createTemplate({ body }?: {
        body: TemplateRequestList;
    }): any;
    /**
      *
      * @summary: Get a template by ID
      * @description: Get the template for product or l3 type by ID
      * @param {Object} arg - arg object.
      * @param {string} arg.id - template id
      
      **/
    getTemplateById({ id }?: {
        id: string;
    }): any;
    /**
     *
     * @summary: Update a template's status
     * @description: Update existing template status, active/archive
     * @param {Object} arg - arg object.
     * @param {string} arg.id - template id
     * @param {UpdateTemplateRequest} arg.body
     **/
    updateTemplate({ id, body }?: {
        id: string;
        body: UpdateTemplateRequest;
    }): any;
    /**
     *
     * @summary: Update a template's status
     * @description: Update existing template status, active/archive
     * @param {Object} arg - arg object.
     * @param {string} arg.id - template id
     * @param {UpdateTemplateStatusRequest} arg.body
     **/
    updateTemplateStatus({ id, body }?: {
        id: string;
        body: UpdateTemplateStatusRequest;
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
declare class Content {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
      *
      * @summary: Get annoucements list
      * @description: Get list of announcements
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - Each response will contain **page_no** param, which should be sent back to make pagination work.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
      
      **/
    getAnnouncementsList({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get annoucements list
      * @description: Get list of announcements
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Company ID
      * @param {string} arg.applicationId - Application ID
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
      
      **/
    getAnnouncementsListPaginator({ companyId, applicationId, pageSize }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
    /**
     *
     * @summary: Create an annoucement
     * @description: Create an announcement
     * @param {Object} arg - arg object.
     * @param {AdminAnnouncementSchema} arg.body
     **/
    createAnnouncement({ body }?: {
        body: AdminAnnouncementSchema;
    }): any;
    /**
      *
      * @summary: Get annoucement by id
      * @description: Get announcement by id
      * @param {Object} arg - arg object.
      * @param {string} arg.announcementId - Announcement ID
      
      **/
    getAnnouncementById({ announcementId }?: {
        announcementId: string;
    }): any;
    /**
     *
     * @summary: Update an annoucement
     * @description: Update an announcement
     * @param {Object} arg - arg object.
     * @param {string} arg.announcementId - Announcement ID
     * @param {AdminAnnouncementSchema} arg.body
     **/
    updateAnnouncement({ announcementId, body }?: {
        announcementId: string;
        body: AdminAnnouncementSchema;
    }): any;
    /**
     *
     * @summary: Update schedule or published status of an annoucement
     * @description: Update schedule or published status of an announcement
     * @param {Object} arg - arg object.
     * @param {string} arg.announcementId - Announcement ID
     * @param {ScheduleSchema} arg.body
     **/
    updateAnnouncementSchedule({ announcementId, body }?: {
        announcementId: string;
        body: ScheduleSchema;
    }): any;
    /**
      *
      * @summary: Delete annoucement by id
      * @description: Delete announcement by id
      * @param {Object} arg - arg object.
      * @param {string} arg.announcementId - Announcement ID
      
      **/
    deleteAnnouncement({ announcementId }?: {
        announcementId: string;
    }): any;
    /**
     *
     * @summary: Create blog
     * @description: Use this to create a blog.
     * @param {Object} arg - arg object.
     * @param {BlogRequest} arg.body
     **/
    createBlog({ body }?: {
        body: BlogRequest;
    }): any;
    /**
      *
      * @summary: Get blogs
      * @description: Use this to get blogs.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - Each response will contain **page_no** param, which should be sent back to make pagination work.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
      
      **/
    getBlogs({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get blogs
      * @description: Use this to get blogs.
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Company Id
      * @param {string} arg.applicationId - Application Id
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
      
      **/
    getBlogsPaginator({ companyId, applicationId, pageSize }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
    /**
     *
     * @summary: Update blog
     * @description: Use this to update blog.
     * @param {Object} arg - arg object.
     * @param {string} arg.id - Blog Id
     * @param {BlogRequest} arg.body
     **/
    updateBlog({ id, body }?: {
        id: string;
        body: BlogRequest;
    }): any;
    /**
      *
      * @summary: Delete blogs
      * @description: Use this to delete blogs.
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Blog Id
      
      **/
    deleteBlog({ id }?: {
        id: string;
    }): any;
    /**
      *
      * @summary: Get components by component Id
      * @description: The endpoint fetches the component by component Id
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - slug of page to be fetched
      
      **/
    getComponentById({ slug }?: {
        slug: string;
    }): any;
    /**
      *
      * @summary: Get FAQ categories list
      * @description: Get list of FAQ categories
      * @param {Object} arg - arg object.
      
      **/
    getFaqCategories({}?: any): any;
    /**
      *
      * @summary: Get FAQ category by slug or id
      * @description: Get FAQ category by slug or id
      * @param {Object} arg - arg object.
      * @param {string} arg.idOrSlug - Slug or Id of FAQ Category
      
      **/
    getFaqCategoryBySlugOrId({ idOrSlug }?: {
        idOrSlug: string;
    }): any;
    /**
     *
     * @summary: Creates a FAQ category
     * @description: Add Faq Category
     * @param {Object} arg - arg object.
     * @param {CreateFaqCategoryRequestSchema} arg.body
     **/
    createFaqCategory({ body }?: {
        body: CreateFaqCategoryRequestSchema;
    }): any;
    /**
     *
     * @summary: Updates a FAQ category
     * @description: Update Faq Category
     * @param {Object} arg - arg object.
     * @param {string} arg.id - Faq category ID
     * @param {UpdateFaqCategoryRequestSchema} arg.body
     **/
    updateFaqCategory({ id, body }?: {
        id: string;
        body: UpdateFaqCategoryRequestSchema;
    }): any;
    /**
      *
      * @summary: Deletes a FAQ category
      * @description: Delete Faq Category
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Faq category ID
      
      **/
    deleteFaqCategory({ id }?: {
        id: string;
    }): any;
    /**
      *
      * @summary: Get FAQs of a Faq Category id or slug
      * @description: Get FAQs of a Faq Category `id` or `slug`
      * @param {Object} arg - arg object.
      * @param {string} arg.idOrSlug - Faq category ID or slug
      
      **/
    getFaqsByCategoryIdOrSlug({ idOrSlug }?: {
        idOrSlug: string;
    }): any;
    /**
     *
     * @summary: Creates FAQs for category whose `id` is specified
     * @description: Creates FAQs for category whose `id` is specified
     * @param {Object} arg - arg object.
     * @param {string} arg.categoryId - Faq category ID
     * @param {CreateFaqSchema} arg.body
     **/
    addFaq({ categoryId, body }?: {
        categoryId: string;
        body: CreateFaqSchema;
    }): any;
    /**
     *
     * @summary: Updates FAQ
     * @description: Updates FAQ
     * @param {Object} arg - arg object.
     * @param {string} arg.categoryId - Faq category ID
     * @param {string} arg.faqId - Faq ID
     * @param {CreateFaqSchema} arg.body
     **/
    updateFaq({ categoryId, faqId, body }?: {
        categoryId: string;
        faqId: string;
        body: CreateFaqSchema;
    }): any;
    /**
      *
      * @summary: Delete FAQ
      * @description: Delete FAQ
      * @param {Object} arg - arg object.
      * @param {string} arg.categoryId - Faq category ID
      * @param {string} arg.faqId - Faq ID
      
      **/
    deleteFaq({ categoryId, faqId }?: {
        categoryId: string;
        faqId: string;
    }): any;
    /**
      *
      * @summary: Get frequently asked question
      * @description: Get frequently asked questions list. These will be helpful for users to using website.
      * @param {Object} arg - arg object.
      * @param {string} arg.idOrSlug - Slug or Id of FAQ
      
      **/
    getFaqByIdOrSlug({ idOrSlug }?: {
        idOrSlug: string;
    }): any;
    /**
      *
      * @summary: Get landing-pages
      * @description: Use this to get landing-pages.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - Each response will contain **page_no** param, which should be sent back to make pagination work.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
      
      **/
    getLandingPages({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get landing-pages
      * @description: Use this to get landing-pages.
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Company ID
      * @param {string} arg.applicationId - Application ID
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
      
      **/
    getLandingPagesPaginator({ companyId, applicationId, pageSize }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
    /**
     *
     * @summary: Create landing-page
     * @description: Use this to create landing-page.
     * @param {Object} arg - arg object.
     * @param {LandingPageSchema} arg.body
     **/
    createLandingPage({ body }?: {
        body: LandingPageSchema;
    }): any;
    /**
     *
     * @summary: Update landing-page
     * @description: Use this to update landing-page.
     * @param {Object} arg - arg object.
     * @param {string} arg.id - Landing page ID
     * @param {LandingPageSchema} arg.body
     **/
    updateLandingPage({ id, body }?: {
        id: string;
        body: LandingPageSchema;
    }): any;
    /**
      *
      * @summary: Delete landing-page
      * @description: Use this to delete landing-page.
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Landing page ID
      
      **/
    deleteLandingPage({ id }?: {
        id: string;
    }): any;
    /**
      *
      * @summary: Get legal information
      * @description: Get legal information of application, which includes policy, Terms and Conditions, and FAQ information of application.
      * @param {Object} arg - arg object.
      
      **/
    getLegalInformation({}?: any): any;
    /**
     *
     * @summary: Save legal information
     * @description: Save legal information of application, which includes Policy, Terms and Conditions, and FAQ information of application.
     * @param {Object} arg - arg object.
     * @param {ApplicationLegal} arg.body
     **/
    updateLegalInformation({ body }?: {
        body: ApplicationLegal;
    }): any;
    /**
      *
      * @summary: Get navigations
      * @description: Use this to get navigations.
      * @param {Object} arg - arg object.
      * @param {string} arg.devicePlatform - Device platform
      * @param {number} [arg.pageNo] - Each response will contain **page_no** param, which should be sent back to make pagination work.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
      
      **/
    getNavigations({ devicePlatform, pageNo, pageSize }?: {
        devicePlatform: string;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get navigations
      * @description: Use this to get navigations.
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Company ID
      * @param {string} arg.applicationId - Application ID
      * @param {string} arg.devicePlatform - Device platform
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
      
      **/
    getNavigationsPaginator({ companyId, applicationId, devicePlatform, pageSize, }?: {
        companyId: string;
        applicationId: string;
        devicePlatform: string;
        pageSize?: number;
    }): Paginator;
    /**
     *
     * @summary: Create navigation
     * @description: Use this to create navigation.
     * @param {Object} arg - arg object.
     * @param {NavigationRequest} arg.body
     **/
    createNavigation({ body }?: {
        body: NavigationRequest;
    }): any;
    /**
      *
      * @summary: Get default navigations
      * @description: Use this to get default navigations.
      * @param {Object} arg - arg object.
      
      **/
    getDefaultNavigations({}?: any): any;
    /**
      *
      * @summary: Get navigation by slug
      * @description: Use this to get navigation by slug.
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - Slug
      * @param {string} arg.devicePlatform - Device platform
      
      **/
    getNavigationBySlug({ slug, devicePlatform }?: {
        slug: string;
        devicePlatform: string;
    }): any;
    /**
     *
     * @summary: Update navigation
     * @description: Use this to update navigation.
     * @param {Object} arg - arg object.
     * @param {string} arg.id - Navigation ID
     * @param {NavigationRequest} arg.body
     **/
    updateNavigation({ id, body }?: {
        id: string;
        body: NavigationRequest;
    }): any;
    /**
      *
      * @summary: Delete navigation
      * @description: Use this to delete navigation.
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Navigation ID
      
      **/
    deleteNavigation({ id }?: {
        id: string;
    }): any;
    /**
      *
      * @summary: Get page meta
      * @description: Use this to get Page Meta.
      * @param {Object} arg - arg object.
      
      **/
    getPageMeta({}?: any): any;
    /**
      *
      * @summary: Get page spec
      * @description: Use this to get page spec.
      * @param {Object} arg - arg object.
      
      **/
    getPageSpec({}?: any): any;
    /**
     *
     * @summary: Create page
     * @description: Use this to create a page.
     * @param {Object} arg - arg object.
     * @param {PageRequest} arg.body
     **/
    createPage({ body }?: {
        body: PageRequest;
    }): any;
    /**
      *
      * @summary: Get pages
      * @description: Use this to get pages.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - Each response will contain **page_no** param, which should be sent back to make pagination work.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
      
      **/
    getPages({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get pages
      * @description: Use this to get pages.
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Company Id
      * @param {string} arg.applicationId - Application Id
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
      
      **/
    getPagesPaginator({ companyId, applicationId, pageSize }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
    /**
     *
     * @summary: Create page preview
     * @description: Use this to create a page preview.
     * @param {Object} arg - arg object.
     * @param {PageRequest} arg.body
     **/
    createPagePreview({ body }?: {
        body: PageRequest;
    }): any;
    /**
     *
     * @summary: Update page
     * @description: Use this to update page.
     * @param {Object} arg - arg object.
     * @param {string} arg.slug - Page publish slug
     * @param {PagePublishRequest} arg.body
     **/
    updatePagePreview({ slug, body }?: {
        slug: string;
        body: PagePublishRequest;
    }): any;
    /**
     *
     * @summary: Update page
     * @description: Use this to update page.
     * @param {Object} arg - arg object.
     * @param {string} arg.id - Page Id
     * @param {PageSchema} arg.body
     **/
    updatePage({ id, body }?: {
        id: string;
        body: PageSchema;
    }): any;
    /**
      *
      * @summary: Delete page
      * @description: Use this to delete page.
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Page Id
      
      **/
    deletePage({ id }?: {
        id: string;
    }): any;
    /**
      *
      * @summary: Get pages by component Id
      * @description: The endpoint fetches the component by component Id
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - Slug of page to be fetched
      
      **/
    getPageBySlug({ slug }?: {
        slug: string;
    }): any;
    /**
      *
      * @summary: Get seo of application
      * @description: Get seo of application
      * @param {Object} arg - arg object.
      
      **/
    getSEOConfiguration({}?: any): any;
    /**
     *
     * @summary: Update seo of application
     * @description: Update seo of application
     * @param {Object} arg - arg object.
     * @param {SeoComponent} arg.body
     **/
    updateSEOConfiguration({ body }?: {
        body: SeoComponent;
    }): any;
    /**
      *
      * @summary: Get slideshows
      * @description: Use this to get slideshows.
      * @param {Object} arg - arg object.
      * @param {string} arg.devicePlatform - Device platform
      * @param {number} [arg.pageNo] - Each response will contain **page_no** param, which should be sent back to make pagination work.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
      
      **/
    getSlideshows({ devicePlatform, pageNo, pageSize }?: {
        devicePlatform: string;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get slideshows
      * @description: Use this to get slideshows.
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Company ID
      * @param {string} arg.applicationId - Application ID
      * @param {string} arg.devicePlatform - Device platform
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
      
      **/
    getSlideshowsPaginator({ companyId, applicationId, devicePlatform, pageSize, }?: {
        companyId: string;
        applicationId: string;
        devicePlatform: string;
        pageSize?: number;
    }): Paginator;
    /**
     *
     * @summary: Create slideshow
     * @description: Use this to create slideshow.
     * @param {Object} arg - arg object.
     * @param {SlideshowRequest} arg.body
     **/
    createSlideshow({ body }?: {
        body: SlideshowRequest;
    }): any;
    /**
      *
      * @summary: Get slideshow by slug
      * @description: Use this to get slideshow by slug.
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - Slug
      * @param {string} arg.devicePlatform - Device platform
      
      **/
    getSlideshowBySlug({ slug, devicePlatform }?: {
        slug: string;
        devicePlatform: string;
    }): any;
    /**
     *
     * @summary: Update slideshow
     * @description: Use this to update slideshow.
     * @param {Object} arg - arg object.
     * @param {string} arg.id - Slideshow ID
     * @param {SlideshowRequest} arg.body
     **/
    updateSlideshow({ id, body }?: {
        id: string;
        body: SlideshowRequest;
    }): any;
    /**
      *
      * @summary: Delete slideshow
      * @description: Use this to delete slideshow.
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Slideshow ID
      
      **/
    deleteSlideshow({ id }?: {
        id: string;
    }): any;
    /**
      *
      * @summary: Get support information
      * @description: Get contact details for customer support. Including emails and phone numbers
      * @param {Object} arg - arg object.
      
      **/
    getSupportInformation({}?: any): any;
    /**
     *
     * @summary: Update support data of application
     * @description: Update support data of application
     * @param {Object} arg - arg object.
     * @param {Support} arg.body
     **/
    updateSupportInformation({ body }?: {
        body: Support;
    }): any;
    /**
     *
     * @summary: Creates Tag
     * @description: Create tags
     * @param {Object} arg - arg object.
     * @param {CreateTagRequestSchema} arg.body
     **/
    createInjectableTag({ body }?: {
        body: CreateTagRequestSchema;
    }): any;
    /**
     *
     * @summary: Updates a Tag
     * @description: Update tag
     * @param {Object} arg - arg object.
     * @param {CreateTagRequestSchema} arg.body
     **/
    updateInjectableTag({ body }?: {
        body: CreateTagRequestSchema;
    }): any;
    /**
      *
      * @summary: Delete tags for application
      * @description: Delete tags for application
      * @param {Object} arg - arg object.
      
      **/
    deleteAllInjectableTags({}?: any): any;
    /**
      *
      * @summary: Get tags for application
      * @description: Get tags for application
      * @param {Object} arg - arg object.
      
      **/
    getInjectableTags({}?: any): any;
    /**
     *
     * @summary: Adds a Tag
     * @description: Add tag
     * @param {Object} arg - arg object.
     * @param {CreateTagRequestSchema} arg.body
     **/
    addInjectableTag({ body }?: {
        body: CreateTagRequestSchema;
    }): any;
    /**
     *
     * @summary: Removes a Tag
     * @description: Remove a particular tag
     * @param {Object} arg - arg object.
     * @param {RemoveHandpickedSchema} arg.body
     **/
    removeInjectableTag({ body }?: {
        body: RemoveHandpickedSchema;
    }): any;
    /**
     *
     * @summary: Edits a Tag by Id
     * @description: Edits a particular tag
     * @param {Object} arg - arg object.
     * @param {string} arg.tagId - Tag ID
     * @param {UpdateHandpickedSchema} arg.body
     **/
    editInjectableTag({ tagId, body }?: {
        tagId: string;
        body: UpdateHandpickedSchema;
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
      * @param {number} [arg.pageNo] - Current page no
      * @param {number} [arg.pageSize] - Current request items count
      * @param {Object} [arg.sort] - To sort based on created_at
      
      **/
    getCampaigns({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): any;
    /**
      *
      * @summary: Get campaigns
      * @description: Get campaigns
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Company id
      * @param {string} arg.applicationId - Application id
      * @param {number} [arg.pageSize] - Current request items count
      * @param {Object} [arg.sort] - To sort based on created_at
      
      **/
    getCampaignsPaginator({ companyId, applicationId, pageSize, sort }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
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
      * @param {number} [arg.pageNo] - Current page no
      * @param {number} [arg.pageSize] - Current request items count
      * @param {Object} [arg.sort] - To sort based on created_at
      
      **/
    getAudiences({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): any;
    /**
      *
      * @summary: Get audiences
      * @description: Get audiences
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Company id
      * @param {string} arg.applicationId - Application id
      * @param {number} [arg.pageSize] - Current request items count
      * @param {Object} [arg.sort] - To sort based on created_at
      
      **/
    getAudiencesPaginator({ companyId, applicationId, pageSize, sort }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
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
      * @param {number} [arg.pageNo] - Current page no
      * @param {number} [arg.pageSize] - Current request items count
      * @param {Object} [arg.sort] - To sort based on created_at
      
      **/
    getEmailProviders({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): any;
    /**
      *
      * @summary: Get email providers
      * @description: Get email providers
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Company id
      * @param {string} arg.applicationId - Application id
      * @param {number} [arg.pageSize] - Current request items count
      * @param {Object} [arg.sort] - To sort based on created_at
      
      **/
    getEmailProvidersPaginator({ companyId, applicationId, pageSize, sort, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
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
      * @param {number} [arg.pageNo] - Current page no
      * @param {number} [arg.pageSize] - Current request items count
      * @param {Object} [arg.sort] - To sort based on created_at
      
      **/
    getEmailTemplates({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): any;
    /**
      *
      * @summary: Get email templates
      * @description: Get email templates
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Company id
      * @param {string} arg.applicationId - Application id
      * @param {number} [arg.pageSize] - Current request items count
      * @param {Object} [arg.sort] - To sort based on created_at
      
      **/
    getEmailTemplatesPaginator({ companyId, applicationId, pageSize, sort, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
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
      * @param {number} [arg.pageNo] - Current page no
      * @param {number} [arg.pageSize] - Current request items count
      * @param {Object} [arg.sort] - To sort based on created_at
      
      **/
    getSystemEmailTemplates({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): any;
    /**
      *
      * @summary: Get system email templates
      * @description: Get system email templates
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Company id
      * @param {string} arg.applicationId - Application id
      * @param {number} [arg.pageSize] - Current request items count
      * @param {Object} [arg.sort] - To sort based on created_at
      
      **/
    getSystemEmailTemplatesPaginator({ companyId, applicationId, pageSize, sort, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
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
      * @param {number} [arg.pageNo] - Current page no
      * @param {number} [arg.pageSize] - Current request items count
      * @param {string} [arg.populate] - populate fields
      
      **/
    getEventSubscriptions({ pageNo, pageSize, populate }?: {
        pageNo?: number;
        pageSize?: number;
        populate?: string;
    }): any;
    /**
      *
      * @summary: Get event subscriptions
      * @description: Get event subscriptions
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Company id
      * @param {string} arg.applicationId - Application id
      * @param {number} [arg.pageSize] - Current request items count
      * @param {string} [arg.populate] - populate fields
      
      **/
    getEventSubscriptionsPaginator({ companyId, applicationId, pageSize, populate, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        populate?: string;
    }): Paginator;
    /**
      *
      * @summary: Get jobs
      * @description: Get jobs
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - Current page no
      * @param {number} [arg.pageSize] - Current request items count
      * @param {Object} [arg.sort] - To sort based on created_at
      
      **/
    getJobs({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): any;
    /**
      *
      * @summary: Get jobs
      * @description: Get jobs
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Company id
      * @param {string} arg.applicationId - Application id
      * @param {number} [arg.pageSize] - Current request items count
      * @param {Object} [arg.sort] - To sort based on created_at
      
      **/
    getJobsPaginator({ companyId, applicationId, pageSize, sort }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
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
      * @param {number} [arg.pageNo] - Current page no
      * @param {number} [arg.pageSize] - Current request items count
      * @param {Object} [arg.sort] - To sort based on created_at
      
      **/
    getJobLogs({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): any;
    /**
      *
      * @summary: Get job logs
      * @description: Get job logs
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Company id
      * @param {string} arg.applicationId - Application id
      * @param {number} [arg.pageSize] - Current request items count
      * @param {Object} [arg.sort] - To sort based on created_at
      
      **/
    getJobLogsPaginator({ companyId, applicationId, pageSize, sort }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
    }): Paginator;
    /**
      *
      * @summary: Get communication logs
      * @description: Get communication logs
      * @param {Object} arg - arg object.
      * @param {string} [arg.pageId] - Current page no
      * @param {number} [arg.pageSize] - Current request items count
      * @param {Object} [arg.sort] - To sort based on _id
      * @param {Object} [arg.query] -
      
      **/
    getCommunicationLogs({ pageId, pageSize, sort, query }?: {
        pageId?: string;
        pageSize?: number;
        sort?: any;
        query?: any;
    }): any;
    /**
      *
      * @summary: Get communication logs
      * @description: Get communication logs
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Company id
      * @param {string} arg.applicationId - Application id
      * @param {number} [arg.pageSize] - Current request items count
      * @param {Object} [arg.sort] - To sort based on _id
      * @param {Object} [arg.query] -
      
      **/
    getCommunicationLogsPaginator({ companyId, applicationId, pageSize, sort, query, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
        query?: any;
    }): Paginator;
    /**
      *
      * @summary: Get sms providers
      * @description: Get sms providers
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - Current page no
      * @param {number} [arg.pageSize] - Current request items count
      * @param {Object} [arg.sort] - To sort based on created_at
      
      **/
    getSmsProviders({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): any;
    /**
      *
      * @summary: Get sms providers
      * @description: Get sms providers
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Company id
      * @param {string} arg.applicationId - Application id
      * @param {number} [arg.pageSize] - Current request items count
      * @param {Object} [arg.sort] - To sort based on created_at
      
      **/
    getSmsProvidersPaginator({ companyId, applicationId, pageSize, sort }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
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
      * @param {number} [arg.pageNo] - Current page no
      * @param {number} [arg.pageSize] - Current request items count
      * @param {Object} [arg.sort] - To sort based on created_at
      
      **/
    getSmsTemplates({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): any;
    /**
      *
      * @summary: Get sms templates
      * @description: Get sms templates
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Company id
      * @param {string} arg.applicationId - Application id
      * @param {number} [arg.pageSize] - Current request items count
      * @param {Object} [arg.sort] - To sort based on created_at
      
      **/
    getSmsTemplatesPaginator({ companyId, applicationId, pageSize, sort }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
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
      * @param {number} [arg.pageNo] - Current page no
      * @param {number} [arg.pageSize] - Current request items count
      * @param {Object} [arg.sort] - To sort based on created_at
      
      **/
    getSystemSystemTemplates({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): any;
    /**
      *
      * @summary: Get system sms templates
      * @description: Get system sms templates
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Company id
      * @param {string} arg.applicationId - Application id
      * @param {number} [arg.pageSize] - Current request items count
      * @param {Object} [arg.sort] - To sort based on created_at
      
      **/
    getSystemSystemTemplatesPaginator({ companyId, applicationId, pageSize, sort, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
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
      * @summary: List all Search Custom Keyword Listing
      * @description: Custom Search Keyword allows you to map conditions with keywords to give you the ultimate results
      * @param {Object} arg - arg object.
      
      **/
    getAllSearchKeyword({}?: any): any;
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
      * @summary: List all Autocomplete Keyword Listing
      * @description: Custom Autocomplete Keyword allows you to map conditions with keywords to give you the ultimate results
      * @param {Object} arg - arg object.
      
      **/
    getAutocompleteConfig({}?: any): any;
    /**
      *
      * @summary: Get configuration meta  details for catalog for admin panel
      * @description: configuration meta  details for catalog.
      * @param {Object} arg - arg object.
      
      **/
    getCatalogConfiguration({}?: any): any;
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
      
      **/
    getConfigurations({}?: any): any;
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
      * @summary: Get query filters to configure a collection
      * @description: Get query filters to configure a collection
      * @param {Object} arg - arg object.
      
      **/
    getQueryFilters({}?: any): any;
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
      * @summary: List all the collections
      * @description: A Collection allows you to organize your products into hierarchical groups. For example, a dress might be in the category _Clothing_, the individual product might also be in the collection _Summer_. On successful request, returns all the collections as specified in `CollectionListingSchema`
      * @param {Object} arg - arg object.
      
      **/
    getAllCollections({}?: any): any;
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
      * @summary: Get the items for a collection
      * @description: Get items from a collection specified by its `id`.
      * @param {Object} arg - arg object.
      * @param {string} arg.id - A `id` is a unique identifier of a collection.
      * @param {string} [arg.sortOn] - Each response will contain sort_on param, which should be sent back to make pagination work.
      * @param {string} [arg.pageId] - Each response will contain next_id param, which should be sent back to make pagination work.
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
      * @summary: Analytics data of catalog and inventory.
      * @description: Catalog Insights api returns the count of catalog related data like products, brands, departments and categories that have been made live as per configuration of the app.
      * @param {Object} arg - arg object.
      * @param {string} [arg.brand] - Brand slug
      
      **/
    getCatalogInsights({ brand }?: {
        brand?: string;
    }): any;
}
declare class FileStorage {
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
      * @param {number} [arg.pageNo] - page no
      
      **/
    appBrowse({ namespace, pageNo }?: {
        namespace: string;
        pageNo?: number;
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
      * @param {number} [arg.pageNo] - Current page number
      * @param {number} [arg.pageSize] - Current page size
      * @param {string} [arg.createdBy] - Short link creator
      * @param {string} [arg.active] - Short link active status
      * @param {string} [arg.q] - Search text for original and short url
      
      **/
    getShortLinks({ pageNo, pageSize, createdBy, active, q }?: {
        pageNo?: number;
        pageSize?: number;
        createdBy?: string;
        active?: string;
        q?: string;
    }): any;
    /**
      *
      * @summary: Get short links
      * @description: Get short links
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Company Id
      * @param {string} arg.applicationId - Application Id
      * @param {number} [arg.pageSize] - Current page size
      * @param {string} [arg.createdBy] - Short link creator
      * @param {string} [arg.active] - Short link active status
      * @param {string} [arg.q] - Search text for original and short url
      
      **/
    getShortLinksPaginator({ companyId, applicationId, pageSize, createdBy, active, q, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        createdBy?: string;
        active?: string;
        q?: string;
    }): Paginator;
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
     * @param {ShortLinkReq} arg.body
     **/
    updateShortLinkById({ id, body }?: {
        id: string;
        body: ShortLinkReq;
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
      * @param {number} [arg.pageNo] - Current page no
      * @param {number} [arg.pageSize] - Current request items count
      
      **/
    getAppCompanies({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Application inventory enabled companies
      * @description: Application inventory enabled companies.
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Current company id
      * @param {string} arg.applicationId - Current application id
      * @param {number} [arg.pageSize] - Current request items count
      
      **/
    getAppCompaniesPaginator({ companyId, applicationId, pageSize }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
    /**
      *
      * @summary: Application inventory enabled stores
      * @description: Application inventory enabled stores.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - Current page no
      * @param {number} [arg.pageSize] - Current request items count
      
      **/
    getAppStores({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Application inventory enabled stores
      * @description: Application inventory enabled stores.
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Current company id
      * @param {string} arg.applicationId - Current application id
      * @param {number} [arg.pageSize] - Current request items count
      
      **/
    getAppStoresPaginator({ companyId, applicationId, pageSize }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
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
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {FilterOrderingStoreRequest} arg.body
     **/
    getOrderingStoresByFilter({ body, pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
        body: FilterOrderingStoreRequest;
    }): any;
    /**
     *
     * @summary: Get ordering store by filter
     * @description: Get ordering store by filter
     * @param {Object} arg - arg object.
     * @param {string} arg.companyId - Current company id
     * @param {string} arg.applicationId - Current application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {FilterOrderingStoreRequest} arg.body
     **/
    getOrderingStoresByFilterPaginator({ companyId, applicationId, pageSize, body, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
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
declare class Rewards {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
      *
      * @summary: List of giveaways of the current application.
      * @description: List of giveaways of the current application.
      * @param {Object} arg - arg object.
      * @param {string} [arg.pageId] - pagination page id
      * @param {number} [arg.pageSize] - pagination page size
      
      **/
    getGiveaways({ pageId, pageSize }?: {
        pageId?: string;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: List of giveaways of the current application.
      * @description: List of giveaways of the current application.
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - company id
      * @param {string} arg.applicationId - application id
      * @param {number} [arg.pageSize] - pagination page size
      
      **/
    getGiveawaysPaginator({ companyId, applicationId, pageSize }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
    /**
     *
     * @summary: Adds a new giveaway.
     * @description: Adds a new giveaway.
     * @param {Object} arg - arg object.
     * @param {Giveaway} arg.body
     **/
    createGiveaway({ body }?: {
        body: Giveaway;
    }): any;
    /**
      *
      * @summary: Get giveaway by ID.
      * @description: Get giveaway by ID.
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Giveaway ID
      
      **/
    getGiveawayByID({ id }?: {
        id: string;
    }): any;
    /**
     *
     * @summary: Updates the giveaway by it's ID.
     * @description: Updates the giveaway by it's ID.
     * @param {Object} arg - arg object.
     * @param {string} arg.id - Giveaway ID
     * @param {Giveaway} arg.body
     **/
    updateGiveaway({ id, body }?: {
        id: string;
        body: Giveaway;
    }): any;
    /**
      *
      * @summary: List of offer of the current application.
      * @description: List of offer of the current application.
      * @param {Object} arg - arg object.
      
      **/
    getOffers({}?: any): any;
    /**
      *
      * @summary: Get offer by name.
      * @description: Get offer by name.
      * @param {Object} arg - arg object.
      * @param {string} arg.cookie - User's session cookie. This cookie is set in browser cookie when logged-in to fynd's authentication system i.e. `Grimlock` or by using grimlock-backend SDK for backend implementation.
      * @param {string} arg.name - Offer name
      
      **/
    getOfferByName({ cookie, name }?: {
        cookie: string;
        name: string;
    }): any;
    /**
     *
     * @summary: Updates the offer by name.
     * @description: Updates the offer by name.
     * @param {Object} arg - arg object.
     * @param {string} arg.name - Offer name
     * @param {Offer} arg.body
     **/
    updateOfferByName({ name, body }?: {
        name: string;
        body: Offer;
    }): any;
    /**
      *
      * @summary: User's reward details.
      * @description: User's reward details.
      * @param {Object} arg - arg object.
      * @param {string} arg.userId - user id
      
      **/
    getUserAvailablePoints({ userId }?: {
        userId: string;
    }): any;
    /**
     *
     * @summary: Update User status
     * @description: Update user status, active/archive
     * @param {Object} arg - arg object.
     * @param {string} arg.userId - user id
     * @param {AppUser} arg.body
     **/
    updateUserStatus({ userId, body }?: {
        userId: string;
        body: AppUser;
    }): any;
    /**
      *
      * @summary: Get list of points transactions.
      * @description: Get list of points transactions.
  The list of points history is paginated.
      * @param {Object} arg - arg object.
      * @param {string} arg.userId - user id
      * @param {string} [arg.pageId] - PageID is the ID of the requested page. For first request it should be kept empty.
      * @param {number} [arg.pageLimit] - PageLimit is the number of requested items in response.
      * @param {number} [arg.pageSize] - PageSize is the number of requested items in response.
      
      **/
    getUserPointsHistory({ userId, pageId, pageLimit, pageSize }?: {
        userId: string;
        pageId?: string;
        pageLimit?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get list of points transactions.
      * @description: Get list of points transactions.
  The list of points history is paginated.
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - company id
      * @param {string} arg.applicationId - application id
      * @param {string} arg.userId - user id
      * @param {number} [arg.pageSize] - PageSize is the number of requested items in response.
      
      **/
    getUserPointsHistoryPaginator({ companyId, applicationId, userId, pageSize, }?: {
        companyId: string;
        applicationId: string;
        userId: string;
        pageSize?: number;
    }): Paginator;
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
      * @param {string} arg.fromDate - From date
      * @param {string} arg.toDate - To date
      * @param {number} [arg.pageNo] - Current page number
      * @param {number} [arg.pageSize] - Current page size
      
      **/
    getAbandonCartList({ fromDate, toDate, pageNo, pageSize }?: {
        fromDate: string;
        toDate: string;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get abandon carts list
      * @description: Get abandon carts list
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Company Id
      * @param {string} arg.applicationId - Application Id
      * @param {string} arg.fromDate - From date
      * @param {string} arg.toDate - To date
      * @param {number} [arg.pageSize] - Current page size
      
      **/
    getAbandonCartListPaginator({ companyId, applicationId, fromDate, toDate, pageSize, }?: {
        companyId: string;
        applicationId: string;
        fromDate: string;
        toDate: string;
        pageSize?: number;
    }): Paginator;
    /**
      *
      * @summary: Get abandon carts csv
      * @description: Get abandon carts csv
      * @param {Object} arg - arg object.
      * @param {string} arg.fromDate - From date
      * @param {string} arg.toDate - To date
      
      **/
    getAbandonCartsCSV({ fromDate, toDate }?: {
        fromDate: string;
        toDate: string;
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
declare class Partner {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     *
     * @summary: Add proxy path for external url
     * @description: Add proxy path for external url
     * @param {Object} arg - arg object.
     * @param {string} arg.extensionId - Extension id
     * @param {AddProxyReq} arg.body
     **/
    addProxyPath({ extensionId, body }?: {
        extensionId: string;
        body: AddProxyReq;
    }): any;
    /**
      *
      * @summary: Remove proxy path for external url
      * @description: Remove proxy path for external url
      * @param {Object} arg - arg object.
      * @param {string} arg.extensionId - Extension id
      * @param {string} arg.attachedPath - Attachaed path slug
      
      **/
    removeProxyPath({ extensionId, attachedPath }?: {
        extensionId: string;
        attachedPath: string;
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
type Activity = {
    currentState?: any;
    documentId?: string;
    previousState?: any;
};
type ActivityDump = {
    activity?: Activity;
    createdBy?: CreatedBy;
    dateMeta?: DateMeta;
    id?: string;
    type?: string;
};
type AddMediaListRequest = {
    entityId?: string;
    entityType?: string;
    mediaList?: Array<AddMediaRequest>;
    refId?: string;
    refType?: string;
};
type AddMediaRequest = {
    cloudId?: string;
    cloudName?: string;
    cloudProvider?: string;
    entityId?: string;
    entityType?: string;
    mediaUrl?: string;
    refId?: string;
    refType?: string;
    tags?: Array<string>;
    thumbnailUrl?: string;
    type?: string;
};
type ApproveRequest = {
    approve?: boolean;
    entityType?: string;
    id: string;
    reason?: string;
};
type Attribute = {
    dateMeta?: DateMeta;
    description?: string;
    id?: string;
    name?: string;
    slug?: string;
    tags?: Array<TagMeta>;
};
type AttributeObject = {
    description?: string;
    name: string;
    slug?: string;
    title?: string;
    type: string;
    value: number;
};
type CreatedBy = {
    id?: string;
    name?: string;
    tags?: Array<TagMeta>;
};
type CursorGetResponse = {
    items?: Array<any>;
    page?: Page;
};
type DateMeta = {
    createdOn?: string;
    modifiedOn?: string;
};
type DeviceMeta = {
    appVersion?: string;
    platform?: string;
};
type Entity = {
    id?: string;
    type?: string;
};
type EntityRequest = {
    entityId?: string;
    entityType?: string;
};
type FeedbackAttributes = {
    items?: Array<Attribute>;
    page?: Page;
};
type FeedbackError = {
    code?: any;
    exception?: string;
    info?: string;
    message?: string;
    meta?: any;
    requestId?: string;
    stackTrace?: string;
    status?: number;
};
type FeedbackState = {
    active?: boolean;
    archive?: boolean;
    media?: string;
    qna?: boolean;
    rating?: boolean;
    review?: boolean;
};
type GetResponse = {
    data?: any;
    page?: Page;
};
type GetReviewResponse = {
    facets?: Array<ReviewFacet>;
    items?: Array<any>;
    page?: Page;
    sort?: Array<SortMethod>;
};
type InsertResponse = {
    count?: number;
};
type MediaMeta = {
    maxCount?: number;
    size?: number;
    type?: string;
};
type MediaMetaRequest = {
    maxCount: number;
    size: number;
};
type NumberGetResponse = {
    items?: Array<any>;
    page?: Page;
};
type PageCursor = {
    current?: number;
    hasNext?: boolean;
    hasPrevious?: boolean;
    itemTotal?: number;
    nextId?: string;
    size: number;
    type: string;
};
type PageNumber = {
    current?: number;
    hasNext?: boolean;
    itemTotal?: number;
    size?: number;
    type?: string;
};
type Rating = {
    attributes?: Array<Attribute>;
    attributesSlugs?: Array<string>;
    ui?: UI;
};
type RatingRequest = {
    attributes: Array<string>;
    ui?: UI;
};
type ReportAbuseRequest = {
    description?: string;
    entityId: string;
    entityType: string;
};
type Review = {
    description?: string;
    header?: string;
    imageMeta?: MediaMeta;
    title?: string;
    videoMeta?: MediaMeta;
    voteAllowed?: boolean;
};
type ReviewFacet = {
    display?: string;
    name?: string;
    selected?: boolean;
    slug?: string;
    type?: string;
};
type ReviewRequest = {
    description: string;
    header: string;
    imageMeta: MediaMetaRequest;
    isVoteAllowed: boolean;
    title: string;
    videoMeta: MediaMetaRequest;
};
type SaveAttributeRequest = {
    description?: string;
    name: string;
    slug: string;
};
type SortMethod = {
    name?: string;
    selected?: boolean;
    type?: string;
};
type TagMeta = {
    media?: Array<MediaMeta>;
    name?: string;
    type?: string;
};
type Template = {
    dateMeta?: DateMeta;
    entity?: Entity;
    id?: string;
    name?: string;
    rating?: Rating;
    review?: Review;
    state?: FeedbackState;
    tags?: Array<TagMeta>;
};
type TemplateGetResponse = {
    items?: Array<Template>;
    page?: Page;
};
type TemplateRequest = {
    active: boolean;
    enableMediaType?: string;
    enableQna?: boolean;
    enableRating: boolean;
    enableReview: boolean;
    entity: EntityRequest;
    rating: RatingRequest;
    review: ReviewRequest;
};
type TemplateRequestList = {
    templateList: Array<TemplateRequest>;
};
type UI = {
    feedbackQuestion?: Array<string>;
    icon?: UIIcon;
    text?: Array<string>;
    type?: string;
};
type UIIcon = {
    active?: string;
    inactive?: string;
    selected?: Array<string>;
};
type UpdateAttributeRequest = {
    description?: string;
    name: string;
    slug?: string;
};
type UpdateResponse = {
    count?: number;
};
type UpdateReviewRequest = {
    active?: boolean;
    application?: string;
    approve?: boolean;
    archive?: boolean;
    attributesRating?: Array<AttributeObject>;
    description?: string;
    deviceMeta?: DeviceMeta;
    entityId?: string;
    entityType?: string;
    mediaResource?: Array<MediaMeta>;
    rating?: number;
    reviewId?: string;
    templateId?: string;
    title?: string;
};
type UpdateTemplateRequest = {
    active: boolean;
    enableMediaType?: string;
    enableQna?: boolean;
    enableRating: boolean;
    enableReview: boolean;
    entity: EntityRequest;
    rating: RatingRequest;
    review: ReviewRequest;
};
type UpdateTemplateStatusRequest = {
    active?: boolean;
    archive?: boolean;
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
type ApplicationLegal = {
    application?: string;
    tnc?: string;
    policy?: string;
    shipping?: string;
    faq?: Array<ApplicationLegalFAQ>;
    id?: string;
    updatedAt?: string;
    createdAt?: string;
};
type ApplicationLegalFAQ = {
    question?: string;
    answer?: string;
};
type SeoComponent = {
    seo?: SeoSchema;
};
type SeoSchema = {
    app?: string;
    id?: string;
    robotsTxt?: string;
    sitemapEnabled?: boolean;
    customMetaTags?: Array<any>;
    details?: any;
    createdAt?: string;
    updatedAt?: string;
};
type CustomMetaTag = {
    name?: string;
    content?: string;
    id?: string;
};
type Detail = {
    title?: string;
    description?: string;
};
type StorefrontAnnouncement = {
    announcements?: AnnouncementSchema;
    refreshRate?: number;
    refreshPages?: Array<string>;
};
type AnnouncementPageSchema = {
    pageSlug?: string;
    type?: string;
};
type EditorMeta = {
    foregroundColor?: string;
    backgroundColor?: string;
    contentType?: string;
    content?: string;
};
type AnnouncementAuthorSchema = {
    createdBy?: string;
    modifiedBy?: string;
};
type AdminAnnouncementSchema = {
    id?: string;
    platforms?: Array<string>;
    title?: string;
    announcement?: string;
    pages?: Array<AnnouncementPageSchema>;
    editorMeta?: EditorMeta;
    author?: AnnouncementAuthorSchema;
    createdAt?: string;
    app?: string;
    modifiedAt?: string;
    schedule?: ScheduleSchema;
};
type ScheduleSchema = {
    cron?: string;
    start?: string;
    end?: string;
    duration?: number;
    nextSchedule?: Array<any>;
};
type NextSchedule = {
    start?: string;
    end?: string;
};
type AnnouncementSchema = {
    pageSlug?: Array<any>;
};
type announcementSchema = {
    announcement?: string;
    schedule?: scheduleStartSchema;
};
type scheduleStartSchema = {
    start?: string;
};
type BlogGetResponse = {
    items?: Array<any>;
    page?: Page;
};
type ResourceContent = {
    type?: string;
    value?: string;
};
type Asset = {
    aspectRatio?: string;
    id?: string;
    secureUrl?: string;
};
type Author = {
    designation?: string;
    id?: string;
    name?: string;
};
type BlogSchema = {
    id?: string;
    customJson?: any;
    application?: string;
    archived?: boolean;
    author?: any;
    content?: Array<ResourceContent>;
    featureImage?: any;
    published?: boolean;
    readingTime?: string;
    slug?: string;
    tags?: Array<string>;
    seo?: SEO;
    schedule?: CronSchedule;
    title?: string;
    dateMeta?: DateMeta;
};
type SEO = {
    description?: string;
    image?: SEOImage;
    title?: string;
};
type SEOImage = {
    url?: string;
};
type BlogRequest = {
    application?: string;
    customJson?: any;
    author?: any;
    content?: Array<ResourceContent>;
    featureImage?: any;
    published?: boolean;
    readingTime?: string;
    slug?: string;
    tags?: Array<string>;
    title?: string;
    seo?: SEO;
    schedule?: CronSchedule;
};
type GetAnnouncementListSchema = {
    items?: Array<AdminAnnouncementSchema>;
    page?: Page;
};
type CreateAnnouncementSchema = {
    message?: string;
    data?: AdminAnnouncementSchema;
};
type Navigation = {
    name?: string;
    slug?: string;
    orientation?: string;
    createdBy?: CreatedBySchema;
    dateMeta?: DateMeta;
    id?: string;
    position?: string;
    application?: string;
    platform?: string;
    navigation?: NavigationReference;
};
type LocaleLanguage = {
    hi?: Language;
    ar?: Language;
    enUs?: Language;
};
type Language = {
    display?: string;
};
type Action = {
    page?: ActionPage;
    popup?: ActionPage;
    type?: string;
};
type ActionPage = {
    params?: any;
    query?: any;
    url?: string;
    type?: string;
};
type NavigationReference = {
    acl?: Array<string>;
    tags?: Array<string>;
    localeLanguage?: LocaleLanguage;
    image?: string;
    type?: string;
    action?: Action;
    active?: boolean;
    display?: string;
    sortOrder?: number;
    subNavigation?: NavigationReference;
};
type LandingPage = {
    data?: LandingPageSchema;
    success?: boolean;
};
type ConfigurationSchema = {
    sleepTime?: number;
    startOnLaunch?: boolean;
    duration?: number;
    slideDirection?: string;
};
type SlideshowMedia = {
    type?: string;
    url?: string;
    bgColor?: string;
    duration?: number;
    autoDecideDuration?: boolean;
    action?: Action;
};
type Slideshow = {
    data?: SlideshowSchema;
    success?: boolean;
};
type AnnouncementsResponseSchema = {
    announcements?: any;
    refreshRate?: number;
    refreshPages?: Array<string>;
};
type AnnouncementDataSchema = {
    pageSlug?: string;
    announcement?: StorefrontAnnouncement;
};
type FaqResponseSchema = {
    faqs?: Array<FAQ>;
};
type UpdateHandpickedSchema = {
    tag?: HandpickedTagSchema;
};
type HandpickedTagSchema = {
    position?: string;
    attributes?: any;
    name?: string;
    url?: string;
    type?: string;
    subType?: string;
    content?: string;
};
type RemoveHandpickedSchema = {
    tags?: Array<string>;
};
type CreateTagSchema = {
    name?: string;
    subType?: string;
    id?: string;
    type?: string;
    url?: string;
    position?: string;
    attributes?: any;
    content?: string;
};
type CreateTagRequestSchema = {
    tags?: Array<CreateTagSchema>;
};
type APIError = {
    message?: string;
    status?: number;
    code?: string;
    exception?: string;
    info?: string;
    requestId?: string;
    stackTrace?: string;
    meta?: any;
};
type CategorySchema = {
    index?: number;
    id?: string;
    slug?: string;
    title?: string;
    application?: string;
};
type ChildrenSchema = {
    question?: string;
    answer?: string;
    slug?: string;
    application?: string;
    id?: string;
};
type CategoryRequestSchema = {
    slug?: string;
    title?: string;
};
type FAQCategorySchema = {
    index?: number;
    title?: string;
    description?: string;
    children?: ChildrenSchema;
    id?: string;
    slug?: string;
    application?: string;
    iconUrl?: string;
    customJson?: any;
};
type FaqSchema = {
    slug?: string;
    application?: string;
    id?: string;
    question?: string;
    answer?: string;
};
type FAQ = {
    slug?: string;
    question?: string;
    answer?: string;
};
type CreateFaqResponseSchema = {
    faq?: FaqSchema;
};
type CreateFaqSchema = {
    faq?: FAQ;
};
type GetFaqSchema = {
    faqs?: Array<any>;
};
type UpdateFaqCategoryRequestSchema = {
    category?: CategorySchema;
};
type CreateFaqCategoryRequestSchema = {
    category?: CategoryRequestSchema;
};
type CreateFaqCategorySchema = {
    category?: CategorySchema;
};
type GetFaqCategoriesSchema = {
    categories?: Array<CategorySchema>;
};
type GetFaqCategoryBySlugSchema = {
    category?: FAQCategorySchema;
};
type LandingPageGetResponse = {
    items?: Array<any>;
    page?: Page;
};
type LandingPageSchema = {
    slug?: string;
    action?: Action;
    platform?: Array<string>;
    createdBy?: CreatedBySchema;
    dateMeta?: DateMeta;
    id?: string;
    application?: string;
    archived?: boolean;
    customJson?: any;
};
type DefaultNavigationResponse = {
    items?: Array<any>;
};
type NavigationGetResponse = {
    items?: Array<any>;
    page?: Page;
};
type Orientation = {
    portrait?: Array<string>;
    landscape?: Array<string>;
};
type NavigationSchema = {
    id?: string;
    application?: string;
    archived?: boolean;
    name?: string;
    slug?: string;
    platform?: Array<string>;
    createdBy?: CreatedBySchema;
    dateMeta?: DateMeta;
    orientation?: Orientation;
    version?: number;
    navigation?: NavigationReference;
};
type NavigationRequest = {
    name?: string;
    slug?: string;
    platform?: Array<string>;
    orientation?: Orientation;
    navigation?: NavigationReference;
};
type CustomPageSchema = {
    id?: string;
    platform?: string;
    title?: string;
    slug?: string;
    type?: string;
    orientation?: string;
    application?: string;
    description?: string;
    published?: boolean;
    tags?: Array<string>;
    content?: Array<ContentSchema>;
    createdBy?: CreatedBySchema;
    dateMeta?: DateMeta;
    schedule?: ScheduleSchema;
};
type ContentSchema = {
    type?: string;
    value?: string;
};
type CustomPage = {
    data?: CustomPageSchema;
};
type CustomBlogSchema = {
    id?: string;
    title?: string;
    slug?: string;
    readingTime?: string;
    application?: string;
    description?: string;
    featureImage?: FeatureImage;
    published?: boolean;
    archived?: boolean;
    tags?: Array<string>;
    content?: ContentSchema;
    author?: Author;
    schedule?: ScheduleSchema;
    createdAt?: string;
    updatedAt?: string;
    customJson?: any;
};
type FeatureImage = {
    secureUrl?: string;
};
type CustomBlog = {
    data?: CustomBlogSchema;
};
type PageGetResponse = {
    items?: Array<any>;
    page?: Page;
};
type PageSpec = {
    specifications?: Array<any>;
};
type PageSpecParam = {
    key?: string;
    required?: boolean;
};
type PageSpecItem = {
    pageType?: string;
    displayName?: string;
    params?: Array<PageSpecParam>;
    query?: Array<PageSpecParam>;
};
type PageSchema = {
    id?: string;
    application?: string;
    componentIds?: Array<string>;
    content?: Array<PageContent>;
    createdBy?: any;
    dateMeta?: any;
    description?: string;
    featureImage?: any;
    pageMeta?: Array<PageMeta>;
    schedule?: ScheduleSchema;
    customJson?: any;
    orientation?: string;
    platform?: string;
    published?: boolean;
    slug?: string;
    tags?: Array<string>;
    title?: string;
    type?: string;
    seo?: SEO;
    visibility?: any;
};
type CreatedBySchema = {
    id?: string;
};
type PageContent = {
    type?: string;
    value?: any;
};
type PageMeta = {
    key?: string;
    value?: any;
};
type PageRequest = {
    schedule?: CronSchedule;
    application?: string;
    author?: any;
    customJson?: any;
    orientation?: string;
    content?: Array<ResourceContent>;
    featureImage?: any;
    published?: boolean;
    readingTime?: string;
    slug?: string;
    tags?: Array<string>;
    seo?: SEO;
    title?: string;
};
type CronSchedule = {
    cron?: string;
    start?: string;
    end?: string;
    duration?: number;
};
type PagePublishRequest = {
    publish?: boolean;
};
type PageMetaSchema = {
    systemPages?: Array<any>;
    customPages?: Array<any>;
    applicationId?: string;
};
type SlideshowGetResponse = {
    items?: Array<any>;
    page?: Page;
};
type SlideshowSchema = {
    id?: string;
    slug?: string;
    dateMeta?: DateMeta;
    application?: string;
    platform?: string;
    configuration?: ConfigurationSchema;
    media?: Array<SlideshowMedia>;
    active?: boolean;
    archived?: boolean;
    customJson?: any;
};
type SlideshowRequest = {
    slug?: string;
    platform?: string;
    configuration?: ConfigurationSchema;
    media?: SlideshowMedia;
    active?: boolean;
};
type Support = {
    created?: boolean;
    id?: string;
    configType?: string;
    application?: string;
    createdAt?: string;
    updatedAt?: string;
    contact?: ContactSchema;
};
type PhoneProperties = {
    key?: string;
    code?: string;
    number?: string;
};
type PhoneSchema = {
    active?: boolean;
    phone?: Array<PhoneProperties>;
};
type EmailProperties = {
    key?: string;
    value?: string;
};
type EmailSchema = {
    active?: boolean;
    email?: Array<EmailProperties>;
};
type ContactSchema = {
    phone?: PhoneSchema;
    email?: EmailSchema;
};
type TagsSchema = {
    application?: string;
    id?: string;
    tags?: Array<TagSchema>;
};
type TagSchema = {
    name?: string;
    url?: string;
    type?: string;
    subType?: string;
    id?: string;
    position?: string;
    attributes?: any;
    content?: string;
};
type UnauthenticatedUser = {
    message?: string;
};
type UnauthenticatedApplication = {
    message?: string;
};
type BadRequest = {
    message?: string;
};
type ResourceNotFound = {
    message?: string;
};
type InternalServerError = {
    message?: string;
    code?: string;
};
type PlanRecurring = {
    interval?: string;
    intervalCount?: number;
};
type Plan = {
    recurring?: PlanRecurring;
    isTrialPlan?: boolean;
    planGroup?: string;
    tagLines?: Array<string>;
    currency?: string;
    isActive?: boolean;
    isVisible?: boolean;
    trialPeriod?: number;
    addons?: Array<string>;
    tags?: Array<string>;
    type?: string;
    country?: string;
    id?: string;
    name?: string;
    description?: string;
    amount?: number;
    productSuiteId?: string;
    createdAt?: string;
    modifiedAt?: string;
};
type DetailedPlanComponents = {
    name?: string;
    slug?: string;
    description?: string;
    group?: string;
    icon?: string;
    links?: any;
    enabled?: boolean;
    displayText?: string;
};
type DetailedPlan = {
    recurring?: PlanRecurring;
    isTrialPlan?: boolean;
    planGroup?: string;
    tagLines?: Array<string>;
    currency?: string;
    isActive?: boolean;
    isVisible?: boolean;
    trialPeriod?: number;
    addons?: Array<string>;
    tags?: Array<string>;
    type?: string;
    country?: string;
    id?: string;
    name?: string;
    description?: string;
    amount?: number;
    productSuiteId?: string;
    createdAt?: string;
    modifiedAt?: string;
    components?: Array<DetailedPlanComponents>;
};
type InvoiceDetailsPeriod = {
    start?: string;
    end?: string;
};
type InvoiceDetailsClient = {
    addressLines?: Array<string>;
    name?: string;
    email?: string;
    phone?: string;
};
type InvoiceDetailsStatusTrail = {
    id?: string;
    value?: string;
    timestamp?: string;
};
type InvoiceDetailsPaymentMethodsDataChecks = {
    cvcCheck?: string;
    addressLine1Check?: string;
    addressPostalCodeCheck?: string;
};
type InvoiceDetailsPaymentMethodsDataNetworks = {
    available?: Array<string>;
    preferred?: string;
};
type InvoiceDetailsPaymentMethodsDataThreeDSecureUsage = {
    supported?: boolean;
};
type InvoiceDetailsPaymentMethodsData = {
    brand?: string;
    last4?: string;
    checks?: InvoiceDetailsPaymentMethodsDataChecks;
    wallet?: string;
    country?: string;
    funding?: string;
    expYear?: number;
    networks?: InvoiceDetailsPaymentMethodsDataNetworks;
    expMonth?: number;
    fingerprint?: string;
    generatedFrom?: string;
    threeDSecureUsage?: InvoiceDetailsPaymentMethodsDataThreeDSecureUsage;
};
type InvoiceDetailsPaymentMethods = {
    id?: number;
    type?: string;
    pgPaymentMethodId?: string;
    data?: InvoiceDetailsPaymentMethodsData;
    isDefault?: boolean;
};
type InvoicePaymentMethod = {
    pgPaymentMethodId?: string;
};
type InvoiceDetails = {
    period?: InvoiceDetailsPeriod;
    client?: InvoiceDetailsClient;
    autoAdvance?: boolean;
    currency?: string;
    paid?: boolean;
    attemp?: number;
    id?: string;
    collectionMethod?: string;
    subscriberId?: string;
    invoiceUrl?: string;
    number?: string;
    pgData?: any;
    receiptNumber?: string;
    statementDescriptor?: string;
    currentStatus?: string;
    statusTrail?: Array<InvoiceDetailsStatusTrail>;
    subtotal?: number;
    total?: number;
    subscription?: string;
    nextActionTime?: string;
    createdAt?: string;
    modifiedAt?: string;
    hashIdentifier?: string;
    paymentMethod?: InvoicePaymentMethod;
};
type InvoiceItemsPlanRecurring = {
    interval?: string;
    intervalCount?: number;
};
type InvoiceItemsPlan = {
    recurring?: InvoiceItemsPlanRecurring;
    isTrialPlan?: boolean;
    planGroup?: string;
    tagLines?: Array<string>;
    currency?: string;
    isActive?: boolean;
    isVisible?: boolean;
    trialPeriod?: number;
    addons?: Array<string>;
    tags?: Array<string>;
    type?: string;
    country?: string;
    id?: string;
    name?: string;
    description?: string;
    amount?: number;
    productSuiteId?: string;
    createdAt?: string;
    modifiedAt?: string;
};
type InvoiceItemsPeriod = {
    start?: string;
    end?: string;
};
type InvoiceItems = {
    id?: string;
    currency?: string;
    plan?: InvoiceItemsPlan;
    name?: string;
    quantity?: number;
    description?: string;
    period?: InvoiceItemsPeriod;
    unitAmount?: number;
    amount?: number;
    type?: string;
    invoiceId?: string;
    createdAt?: string;
    modifiedAt?: string;
};
type Invoice = {
    invoice?: InvoiceDetails;
    invoiceItems?: Array<InvoiceItems>;
};
type InvoicesDataClient = {
    name?: string;
    email?: string;
    phone?: string;
    addressLines?: Array<string>;
};
type InvoicesDataPeriod = {
    start?: string;
    end?: string;
};
type InvoicesDataPaymentMethod = {
    pgPaymentMethodId?: string;
};
type InvoicesData = {
    id?: string;
    client?: InvoicesDataClient;
    autoAdvance?: boolean;
    currency?: string;
    paid?: boolean;
    attemp?: number;
    collectionMethod?: string;
    subscriberId?: string;
    invoiceUrl?: string;
    number?: string;
    pgData?: any;
    period?: InvoicesDataPeriod;
    receiptNumber?: string;
    statementDescriptor?: string;
    currentStatus?: string;
    statusTrail?: Array<InvoiceDetailsStatusTrail>;
    subtotal?: number;
    total?: number;
    subscription?: string;
    nextActionTime?: string;
    createdAt?: string;
    modifiedAt?: string;
    hashIdentifier?: string;
    paymentMethod?: InvoicesDataPaymentMethod;
    invoiceItems?: Array<InvoiceItems>;
};
type Invoices = {
    data?: Array<InvoicesData>;
    start?: number;
    end?: number;
    limit?: number;
    page?: number;
    total?: number;
};
type Phone = {
    phoneNumber?: string;
    phoneCountryCode?: string;
};
type SubscriptionBillingAddress = {
    country?: string;
    state?: string;
    city?: string;
    line1?: string;
    line2?: string;
    postalCode?: string;
};
type SubscriptionCustomer = {
    phone?: Phone;
    billingAddress?: SubscriptionBillingAddress;
    id?: string;
    uniqueId?: string;
    type?: string;
    name?: string;
    email?: string;
    createdAt?: string;
    modifiedAt?: string;
    data?: any;
};
type SubscriptionCustomerCreate = {
    phone?: Phone;
    billingAddress?: SubscriptionBillingAddress;
    uniqueId?: string;
    type?: string;
    name?: string;
    email?: string;
};
type SubscriptionCurrentPeriod = {
    start?: string;
    end?: string;
};
type SubscriptionPauseCollection = {
    behavior?: string;
    resumeAt?: string;
};
type SubscriptionTrial = {
    start?: string;
    end?: string;
};
type SubscriptionInvoiceSettings = {
    generation?: boolean;
    charging?: boolean;
};
type Subscription = {
    currentPeriod?: SubscriptionCurrentPeriod;
    pauseCollection?: SubscriptionPauseCollection;
    trial?: SubscriptionTrial;
    invoiceSettings?: SubscriptionInvoiceSettings;
    isActive?: boolean;
    cancelAtPeriodEnd?: boolean;
    id?: string;
    subscriberId?: string;
    planId?: string;
    productSuiteId?: string;
    planData?: Plan;
    currentStatus?: string;
    collectionMethod?: string;
    createdAt?: string;
    modifiedAt?: string;
    latestInvoice?: string;
};
type SubscriptionStatus = {
    isEnabled?: boolean;
    subscription?: Subscription;
};
type SubscriptionLimitApplication = {
    enabled?: boolean;
    hardLimit?: number;
    softLimit?: number;
};
type SubscriptionLimitMarketplace = {
    enabled?: boolean;
};
type SubscriptionLimitOtherPlatform = {
    enabled?: boolean;
};
type SubscriptionLimitTeam = {
    limit?: number;
};
type SubscriptionLimitProducts = {
    bulk?: boolean;
    limit?: number;
};
type SubscriptionLimitExtensions = {
    enabled?: boolean;
    limit?: number;
};
type SubscriptionLimitIntegrations = {
    enabled?: boolean;
    limit?: number;
};
type SubscriptionLimit = {
    application?: SubscriptionLimitApplication;
    marketplace?: SubscriptionLimitMarketplace;
    otherPlatform?: SubscriptionLimitOtherPlatform;
    team?: SubscriptionLimitTeam;
    products?: SubscriptionLimitProducts;
    extensions?: SubscriptionLimitExtensions;
    integrations?: SubscriptionLimitIntegrations;
    isTrialPlan?: boolean;
};
type SubscriptionActivateReq = {
    uniqueId?: string;
    type?: string;
    productSuite?: string;
    planId?: string;
    paymentMethod?: string;
};
type SubscriptionActivateRes = {
    success?: boolean;
    data?: Subscription;
};
type CancelSubscriptionReq = {
    uniqueId?: string;
    type?: string;
    productSuite?: string;
    subscriptionId?: string;
};
type CancelSubscriptionRes = {
    success?: boolean;
    data?: Subscription;
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
    aggregators?: Array<any>;
    success: boolean;
    appId: string;
    displayFields: Array<string>;
    excludedFields: Array<string>;
    created: boolean;
};
type ErrorCodeDescription = {
    description: string;
    code: string;
    success: boolean;
};
type PaymentGatewayConfig = {
    merchantSalt: string;
    configType: string;
    secret: string;
    key: string;
    isActive?: boolean;
};
type PaymentGatewayConfigRequest = {
    appId: string;
    isActive?: boolean;
    aggregatorName?: PaymentGatewayConfig;
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
    cardReference?: string;
    expYear?: number;
    displayName?: string;
    cardBrandImage?: string;
    aggregatorName: string;
    code?: string;
    cardId?: string;
    cardType?: string;
    fyndVpa?: string;
    merchantCode?: string;
    cardIsin?: string;
    intentFlow?: string;
    cardIssuer?: string;
    retryCount?: number;
    cardFingerprint?: string;
    nickname?: string;
    intentAppErrorList?: Array<string>;
    expired?: boolean;
    expMonth?: number;
    name?: string;
    cardToken?: string;
    displayPriority?: number;
    timeout?: number;
    cardBrand?: string;
    cardName?: string;
    cardNumber?: string;
    logoUrl?: PaymentModeLogo;
};
type RootPaymentMode = {
    displayName: string;
    aggregatorName?: string;
    name: string;
    addCardEnabled?: boolean;
    anonymousEnable?: boolean;
    displayPriority: number;
    list?: Array<PaymentModeList>;
};
type PaymentOptions = {
    paymentOption: Array<RootPaymentMode>;
};
type PaymentOptionsResponse = {
    paymentOptions: PaymentOptions;
    success: boolean;
};
type PayoutsResponse = {
    transferType: string;
    customers: any;
    uniqueTransferNo: any;
    payoutsAggregators: Array<any>;
    moreAttributes: any;
    isDefault: boolean;
    isActive: boolean;
};
type PayoutRequest = {
    transferType: string;
    users: any;
    bankDetails: any;
    aggregator: string;
    uniqueExternalId: string;
    isActive: boolean;
};
type PayoutResponse = {
    transferType: string;
    paymentStatus: string;
    uniqueTransferNo: string;
    users: any;
    success: boolean;
    payouts: any;
    bankDetails: any;
    created: boolean;
    aggregator: string;
    isActive: boolean;
};
type UpdatePayoutResponse = {
    isDefault: boolean;
    isActive: boolean;
    success: boolean;
};
type UpdatePayoutRequest = {
    isDefault: boolean;
    uniqueExternalId: string;
    isActive: boolean;
};
type DeletePayoutResponse = {
    success: boolean;
};
type SubscriptionPaymentMethodResponse = {
    data: Array<any>;
    success: boolean;
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
    data: any;
    success: boolean;
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
type SearchKeywordResult = {
    sortOn: string;
    query: any;
};
type CreateSearchKeyword = {
    words?: Array<string>;
    customJson?: any;
    isActive?: boolean;
    appId?: string;
    result: SearchKeywordResult;
};
type GetSearchWordsData = {
    words?: Array<string>;
    uid?: string;
    customJson?: any;
    appId?: string;
    result?: any;
};
type ErrorResponse = {
    code?: string;
    message?: string;
    meta?: any;
    status?: number;
};
type DeleteResponse = {
    message?: string;
};
type GetSearchWordsDetailResponse = {
    page?: Page;
    items?: GetSearchWordsData;
};
type GetSearchWordsResponse = {
    page?: Page;
    items?: Array<GetSearchWordsData>;
};
type AutocompletePageAction = {
    url?: string;
    type: string;
    query: any;
    params?: any;
};
type AutocompleteAction = {
    page?: AutocompletePageAction;
    type?: string;
};
type Media = {
    url?: string;
    type?: string;
};
type AutocompleteResult = {
    display?: string;
    action?: AutocompleteAction;
    customJson?: any;
    logo?: Media;
};
type CreateAutocompleteKeyword = {
    words?: Array<string>;
    customJson?: any;
    isActive?: boolean;
    results?: Array<AutocompleteResult>;
    appId?: string;
};
type GetAutocompleteWordsData = {
    words?: Array<string>;
    uid?: string;
    customJson?: any;
    results?: Array<any>;
    appId?: string;
};
type GetAutocompleteWordsResponse = {
    page?: Page;
    items?: Array<GetAutocompleteWordsData>;
};
type CreateAutocompleteWordsResponse = {
    appId?: string;
    results?: Array<any>;
    words?: Array<string>;
    customJson?: any;
};
type ProductBundleItem = {
    maxQuantity: number;
    autoAddToCart?: boolean;
    allowRemove?: boolean;
    autoSelect?: boolean;
    minQuantity: number;
    productUid: number;
};
type ProductBundleRequest = {
    slug: string;
    choice: string;
    sameStoreAssignment?: boolean;
    meta?: any;
    logo?: string;
    products: Array<ProductBundleItem>;
    modifiedOn?: string;
    createdOn?: string;
    name: string;
    isActive: boolean;
    createdBy?: any;
    pageVisibility?: Array<string>;
    modifiedBy?: any;
};
type GetProductBundleCreateResponse = {
    slug: string;
    choice: string;
    sameStoreAssignment?: boolean;
    meta?: any;
    logo?: string;
    products: Array<ProductBundleItem>;
    modifiedOn?: string;
    createdOn?: string;
    name: string;
    isActive: boolean;
    companyId?: number;
    id?: string;
    createdBy?: any;
    pageVisibility?: Array<string>;
    modifiedBy?: any;
};
type GetProductBundleListingResponse = {
    page?: Page;
    items?: Array<GetProductBundleCreateResponse>;
};
type ProductBundleUpdateRequest = {
    slug: string;
    choice: string;
    sameStoreAssignment?: boolean;
    meta?: any;
    logo?: string;
    products: Array<ProductBundleItem>;
    modifiedOn?: string;
    name: string;
    isActive: boolean;
    pageVisibility?: Array<string>;
    modifiedBy?: any;
};
type Price = {
    maxMarked?: number;
    maxEffective?: number;
    minEffective?: number;
    minMarked?: number;
    currency?: string;
};
type LimitedProductData = {
    slug?: string;
    uid?: number;
    images?: Array<string>;
    price?: any;
    identifier?: any;
    countryOfOrigin?: string;
    attributes?: any;
    shortDescription?: string;
    name?: string;
    itemCode?: string;
    quantity?: number;
    sizes?: Array<string>;
};
type Size = {
    display?: string;
    isAvailable?: boolean;
    value?: string;
    quantity?: number;
};
type GetProducts = {
    maxQuantity?: number;
    price?: Price;
    autoAddToCart?: boolean;
    allowRemove?: boolean;
    productDetails?: LimitedProductData;
    autoSelect?: boolean;
    sizes?: Array<Size>;
    minQuantity?: number;
    productUid?: number;
};
type GetProductBundleResponse = {
    products?: Array<GetProducts>;
    slug?: string;
    choice?: string;
    meta?: any;
    logo?: string;
    sameStoreAssignment?: boolean;
    companyId?: number;
    name?: string;
    isActive?: boolean;
    pageVisibility?: Array<string>;
};
type Meta = {
    values?: Array<any>;
    unit?: string;
    headers?: any;
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    description?: string;
    title: string;
    tag?: string;
    active?: boolean;
    guide?: Guide;
    brandId?: number;
    modifiedOn?: string;
    companyId?: number;
    name: string;
    image?: string;
    createdOn?: string;
    id?: string;
    createdBy?: any;
    subtitle?: string;
    modifiedBy?: any;
};
type SuccessResponse = {
    uid?: number;
    success?: boolean;
};
type ListSizeGuide = {
    page?: any;
    items?: Array<any>;
};
type SizeGuideResponse = {
    title?: string;
    tag?: string;
    active?: boolean;
    guide?: any;
    modifiedOn?: string;
    brandId?: number;
    createdOn?: string;
    name?: string;
    companyId?: number;
    id?: string;
    createdBy?: any;
    modifiedBy?: any;
    subtitle?: string;
};
type GetCatalogConfigurationDetailsProduct = {
    similar?: any;
    variant?: any;
    detail?: any;
    compare?: any;
};
type MetaDataListingSortMetaResponse = {
    display?: string;
    key?: string;
};
type MetaDataListingSortResponse = {
    data?: Array<MetaDataListingSortMetaResponse>;
};
type MetaDataListingFilterMetaResponse = {
    display?: string;
    key?: string;
    units?: Array<any>;
    filterTypes?: Array<string>;
};
type MetaDataListingFilterResponse = {
    data?: Array<MetaDataListingFilterMetaResponse>;
};
type MetaDataListingResponse = {
    sort: MetaDataListingSortResponse;
    filter: MetaDataListingFilterResponse;
};
type GetCatalogConfigurationMetaData = {
    product?: GetCatalogConfigurationDetailsProduct;
    listing?: MetaDataListingResponse;
};
type ProductSize = {
    min: number;
    max: number;
};
type ConfigurationProductConfig = {
    title?: string;
    key: string;
    size?: ProductSize;
    priority: number;
    logo?: string;
    isActive: boolean;
    subtitle?: string;
};
type ConfigurationProductSimilar = {
    config?: Array<ConfigurationProductConfig>;
};
type ConfigurationProductVariantConfig = {
    key: string;
    size: ProductSize;
    priority: number;
    logo?: string;
    displayType: string;
    name: string;
    isActive: boolean;
};
type ConfigurationProductVariant = {
    config?: Array<ConfigurationProductVariantConfig>;
};
type ConfigurationProduct = {
    similar: ConfigurationProductSimilar;
    variant: ConfigurationProductVariant;
};
type ConfigurationListingSortConfig = {
    key: string;
    priority: number;
    logo?: string;
    name?: string;
    isActive: boolean;
};
type ConfigurationListingSort = {
    config?: Array<ConfigurationListingSortConfig>;
    defaultKey: string;
};
type ConfigurationBucketPoints = {
    end?: number;
    start?: number;
};
type ConfigurationListingFilterValue = {
    map?: any;
    sort?: string;
    condition?: string;
    value?: string;
    bucketPoints?: Array<ConfigurationBucketPoints>;
};
type ConfigurationListingFilterConfig = {
    key: string;
    priority: number;
    logo?: string;
    name?: string;
    isActive: boolean;
    type: string;
    valueConfig?: ConfigurationListingFilterValue;
};
type ConfigurationListingFilter = {
    attributeConfig?: Array<ConfigurationListingFilterConfig>;
    allowSingle: boolean;
};
type ConfigurationListing = {
    sort: ConfigurationListingSort;
    filter: ConfigurationListingFilter;
};
type AppConfiguration = {
    product?: ConfigurationProduct;
    configId?: string;
    configType: string;
    listing?: ConfigurationListing;
    appId: string;
};
type AppCatalogConfiguration = {
    product?: ConfigurationProduct;
    configId?: string;
    id?: string;
    configType: string;
    listing?: ConfigurationListing;
    appId: string;
};
type GetAppCatalogConfiguration = {
    data?: AppCatalogConfiguration;
    isDefault?: boolean;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    sort?: any;
    filter?: any;
};
type EntityConfiguration = {
    product?: GetCatalogConfigurationDetailsProduct;
    configId?: string;
    id?: string;
    configType: string;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    appId: string;
};
type GetAppCatalogEntityConfiguration = {
    data?: EntityConfiguration;
    isDefault?: boolean;
};
type ProductFiltersValue = {
    value: string;
    displayFormat?: string;
    count?: number;
    display: string;
    currencyCode?: string;
    selectedMin?: number;
    isSelected: boolean;
    queryFormat?: string;
    max?: number;
    min?: number;
    currencySymbol?: string;
    selectedMax?: number;
};
type ProductFiltersKey = {
    display: string;
    kind?: string;
    logo?: string;
    name: string;
};
type ProductFilters = {
    values: Array<ProductFiltersValue>;
    key: ProductFiltersKey;
};
type ProductSortOn = {
    value?: string;
    isSelected?: boolean;
    name?: string;
};
type GetCollectionQueryOptionResponse = {
    filters?: Array<ProductFilters>;
    sortOn?: Array<ProductSortOn>;
};
type CollectionBadge = {
    text?: string;
    color?: string;
};
type UserInfo = {
    email?: string;
    username?: string;
    uid?: string;
    userId?: string;
};
type CollectionImage = {
    url: string;
    aspectRatio: string;
};
type CollectionBanner = {
    landscape: CollectionImage;
    portrait: CollectionImage;
};
type Schedule = {
    cron?: string;
    duration?: number;
    end?: string;
    start?: string;
};
type SeoDetail = {
    description?: string;
    title?: string;
};
type CreateCollection = {
    description?: string;
    tags?: Array<string>;
    badge?: CollectionBadge;
    name: string;
    allowSort?: boolean;
    visibleFacetsKeys?: Array<string>;
    localeLanguage?: any;
    modifiedBy?: UserInfo;
    sortOn?: string;
    type: string;
    createdBy?: UserInfo;
    isActive?: boolean;
    query?: any;
    banners: CollectionBanner;
    published?: boolean;
    schedule?: Schedule;
    slug: string;
    customJson?: any;
    seo?: SeoDetail;
    logo: CollectionImage;
    meta?: any;
    allowFacets?: boolean;
    appId: string;
};
type BannerImage = {
    url?: string;
    aspectRatio?: string;
};
type ImageUrls = {
    landscape?: BannerImage;
    portrait?: BannerImage;
};
type CollectionCreateResponse = {
    description?: string;
    slug?: string;
    tag?: Array<string>;
    logo?: BannerImage;
    meta?: any;
    allowFacets?: boolean;
    badge?: any;
    name?: string;
    isActive?: boolean;
    allowSort?: boolean;
    type?: string;
    visibleFacetsKeys?: Array<string>;
    query?: any;
    banners?: ImageUrls;
    appId?: string;
    cron?: any;
    schedule?: any;
};
type CollectionListingFilterType = {
    display?: string;
    isSelected?: boolean;
    name?: string;
};
type CollectionListingFilterTag = {
    display?: string;
    isSelected?: boolean;
    name?: string;
};
type CollectionListingFilter = {
    type?: Array<CollectionListingFilterType>;
    tags?: Array<CollectionListingFilterTag>;
};
type ProductListingActionPage = {
    type?: string;
    query?: any;
};
type ProductListingAction = {
    page?: ProductListingActionPage;
    type?: string;
};
type Media1 = {
    url: string;
    type?: string;
    meta?: any;
};
type GetCollectionDetailNest = {
    description?: string;
    uid?: string;
    badge?: any;
    name?: string;
    allowSort?: boolean;
    visibleFacetsKeys?: Array<string>;
    cron?: any;
    type?: string;
    tag?: Array<string>;
    isActive?: boolean;
    query?: any;
    banners?: ImageUrls;
    schedule?: any;
    action?: ProductListingAction;
    slug?: string;
    logo?: Media1;
    meta?: any;
    allowFacets?: boolean;
    appId?: string;
};
type GetCollectionListingResponse = {
    page?: Page;
    filters?: CollectionListingFilter;
    items?: Array<GetCollectionDetailNest>;
};
type CollectionDetailResponse = {
    description?: string;
    slug?: string;
    tag?: Array<string>;
    logo?: Media1;
    meta?: any;
    allowFacets?: boolean;
    badge?: any;
    name?: string;
    isActive?: boolean;
    allowSort?: boolean;
    type?: string;
    visibleFacetsKeys?: Array<string>;
    query?: any;
    banners?: ImageUrls;
    appId?: string;
    cron?: any;
    schedule?: any;
};
type CollectionItemRequest = {
    pageSize: number;
    pageNo: number;
};
type UpdatedResponse = {
    message?: string;
};
type Price1 = {
    min?: number;
    currencySymbol?: string;
    max?: number;
    currencyCode?: string;
};
type ProductListingPrice = {
    marked?: Price1;
    effective?: Price1;
};
type ProductListingDetail = {
    description?: string;
    uid?: number;
    attributes?: any;
    name?: string;
    tryouts?: Array<string>;
    rating?: number;
    highlights?: Array<string>;
    sellable?: boolean;
    discount?: string;
    hasVariant?: boolean;
    type?: string;
    teaserTag?: any;
    shortDescription?: string;
    productOnlineDate?: string;
    medias?: Array<Media1>;
    similars?: Array<string>;
    ratingCount?: number;
    slug: string;
    price?: ProductListingPrice;
    promoMeta?: any;
    imageNature?: string;
    itemType?: string;
    color?: string;
};
type GetCollectionItemsResponse = {
    page?: Page;
    filters?: Array<ProductFilters>;
    items?: Array<ProductListingDetail>;
    sortOn?: Array<ProductSortOn>;
};
type CatalogInsightItem = {
    sellableCount?: number;
    outOfStockCount?: number;
    count?: number;
};
type CatalogInsightBrand = {
    availableArticles?: number;
    name?: string;
    totalSizes?: number;
    availableSizes?: number;
    totalArticles?: number;
    articleFreshness?: number;
};
type CatalogInsightResponse = {
    item?: CatalogInsightItem;
    brandDistribution?: CatalogInsightBrand;
};
type CrossSellingData = {
    articles?: number;
    products?: number;
};
type CrossSellingResponse = {
    data?: CrossSellingData;
    brandDistribution?: CatalogInsightBrand;
};
type OptInPostRequest = {
    brandIds?: Array<number>;
    optLevel: string;
    enabled?: boolean;
    storeIds?: Array<number>;
};
type CompanyOptIn = {
    brandIds: Array<number>;
    enabled: boolean;
    optLevel: string;
    modifiedOn: number;
    platform: string;
    companyId: number;
    createdOn: number;
    createdBy?: any;
    modifiedBy?: any;
    storeIds: Array<number>;
};
type GetOptInPlatform = {
    page: Page;
    items: Array<CompanyOptIn>;
};
type OptinCompanyDetail = {
    companyType?: string;
    businessType?: string;
    uid?: number;
    name?: string;
};
type CompanyBrandDetail = {
    brandId?: number;
    totalArticle?: number;
    companyId?: number;
    brandName?: string;
};
type OptinCompanyBrandDetailsView = {
    page?: Page;
    items?: Array<CompanyBrandDetail>;
};
type OptinCompanyMetrics = {
    brand?: number;
    company?: string;
    store?: number;
};
type StoreDetail = {
    timing?: any;
    uid?: number;
    storeType?: string;
    additionalContacts?: Array<any>;
    documents?: Array<any>;
    modifiedOn?: string;
    createdOn?: string;
    name?: string;
    companyId?: number;
    displayName?: string;
    storeCode?: string;
};
type OptinStoreDetails = {
    page?: Page;
    items?: Array<StoreDetail>;
};
type AttributeMasterDetails = {
    displayType: string;
};
type AttributeMasterMandatoryDetails = {
    l3Keys?: Array<string>;
};
type AttributeMasterMeta = {
    enriched?: boolean;
    mandatoryDetails: AttributeMasterMandatoryDetails;
};
type AttributeSchemaRange = {
    min?: number;
    max?: number;
};
type AttributeMaster = {
    multi?: boolean;
    mandatory?: boolean;
    type: string;
    range?: AttributeSchemaRange;
    format?: string;
    enum?: Array<string>;
};
type AttributeMasterFilter = {
    indexing: boolean;
    priority?: number;
    dependsOn?: Array<string>;
};
type GenderDetail = {
    description?: string;
    slug?: string;
    enabledForEndConsumer?: boolean;
    details?: AttributeMasterDetails;
    meta?: AttributeMasterMeta;
    logo?: string;
    name?: string;
    schema?: AttributeMaster;
    id?: string;
    departments?: Array<string>;
    isNested?: boolean;
    filters?: AttributeMasterFilter;
};
type ProdcutTemplateCategoriesResponse = {
    page?: Page;
    items?: Array<any>;
};
type PTErrorResponse = {
    meta?: any;
    status?: number;
    errors?: any;
    code?: string;
    message?: string;
};
type UserSerializer = {
    userId?: string;
    username?: string;
    contact?: string;
};
type GetDepartment = {
    pageSize?: number;
    slug?: string;
    uid?: number;
    logo?: string;
    synonyms?: Array<string>;
    modifiedOn?: string;
    priorityOrder?: number;
    createdOn?: string;
    name?: string;
    isActive?: boolean;
    pageNo?: number;
    createdBy?: UserSerializer;
    itemType?: string;
    search?: string;
    modifiedBy?: UserSerializer;
};
type DepartmentsResponse = {
    page?: Page;
    items?: Array<GetDepartment>;
};
type DepartmentErrorResponse = {
    meta?: any;
    status?: number;
    errors?: any;
    code?: string;
    message?: string;
};
type ProductTemplate = {
    description?: string;
    isPhysical: boolean;
    slug: string;
    tag?: string;
    logo?: string;
    attributes?: Array<string>;
    categories?: Array<string>;
    modifiedOn?: string;
    createdOn?: string;
    name?: string;
    isActive?: boolean;
    isArchived?: boolean;
    departments?: Array<string>;
    createdBy?: any;
    modifiedBy?: any;
};
type TemplatesResponse = {
    page?: Page;
    items?: ProductTemplate;
};
type Properties = {
    description?: any;
    tags?: any;
    trader?: any;
    name?: any;
    media?: any;
    currency?: any;
    highlights?: any;
    countryOfOrigin?: any;
    customOrder?: any;
    hsnCode?: any;
    variants?: any;
    noOfBoxes?: any;
    moq?: any;
    sizeGuide?: any;
    traderType?: any;
    command?: any;
    sizes?: any;
    teaserTag?: any;
    shortDescription?: any;
    isActive?: any;
    productPublish?: any;
    returnConfig?: any;
    slug?: any;
    multiSize?: any;
    isDependent?: any;
    brandUid?: any;
    itemCode?: any;
    categorySlug?: any;
    itemType?: any;
    productGroupTag?: any;
};
type GlobalValidation = {
    description?: string;
    title?: string;
    definitions?: any;
    properties?: Properties;
    type?: string;
    required?: Array<string>;
};
type TemplateValidationData = {
    globalValidation?: GlobalValidation;
    templateValidation?: any;
};
type TemplateDetails = {
    description?: string;
    isPhysical: boolean;
    slug: string;
    tag?: string;
    logo?: string;
    attributes?: Array<string>;
    categories?: Array<string>;
    name?: string;
    isActive?: boolean;
    isArchived?: boolean;
    id?: string;
    departments?: Array<string>;
};
type TemplatesValidationResponse = {
    data?: TemplateValidationData;
    templateDetails?: TemplateDetails;
};
type InventoryValidationResponse = {
    data?: any;
    message?: string;
};
type HSNData = {
    hsnCode?: Array<string>;
    countryOfOrigin?: Array<string>;
};
type HSNCodesResponse = {
    data?: HSNData;
    message?: string;
};
type UserInfo1 = {
    email?: string;
    username?: string;
    uid?: string;
    userId?: string;
};
type ProductTemplateExport = {
    status?: string;
    templateTags: Array<string>;
    taskId: string;
    url?: string;
    triggerOn: string;
    sellerId: number;
    completedOn?: string;
    createdBy?: UserInfo1;
    data?: any;
};
type ProductDownloadsResponse = {
    page?: Page;
    items?: Array<ProductTemplateExport>;
};
type ProductConfigurationDownloads = {
    data?: Array<any>;
    multivalue?: boolean;
};
type Media2 = {
    landscape: string;
    logo: string;
    portrait: string;
};
type CategoryMappingValues = {
    catalogId?: number;
    name: string;
};
type CategoryMapping = {
    ajio?: CategoryMappingValues;
    facebook?: CategoryMappingValues;
    google?: CategoryMappingValues;
};
type Hierarchy = {
    l1: number;
    department: number;
    l2: number;
};
type CategoryRequestBody = {
    slug?: string;
    priority?: number;
    synonyms?: Array<string>;
    name: string;
    isActive: boolean;
    tryouts?: Array<string>;
    departments: Array<number>;
    media?: Media2;
    marketplaces?: CategoryMapping;
    level: number;
    hierarchy?: Array<Hierarchy>;
};
type CategoryCreateResponse = {
    message?: string;
    uid?: number;
};
type Category = {
    slug?: string;
    uid?: number;
    priority?: number;
    id?: string;
    synonyms?: Array<string>;
    modifiedOn?: string;
    createdOn?: string;
    name: string;
    isActive: boolean;
    tryouts?: Array<string>;
    departments: Array<number>;
    createdBy?: any;
    media?: Media2;
    modifiedBy?: any;
    marketplaces?: CategoryMapping;
    level: number;
    hierarchy?: Array<Hierarchy>;
};
type CategoryResponse = {
    page?: Page;
    items?: Array<Category>;
};
type CategoryUpdateResponse = {
    message?: string;
    success?: boolean;
};
type SingleCategoryResponse = {
    page?: any;
    items?: Array<Category>;
};
type Trader = {
    address: string;
    name: string;
};
type CustomOrder = {
    manufacturingTime?: number;
    manufacturingTimeUnit?: string;
    isCustomOrder?: boolean;
};
type OrderQuantity = {
    minimum?: number;
    isSet?: boolean;
    maximum?: number;
};
type TeaserTag = {
    url?: string;
    tag?: string;
};
type ProductPublish = {
    productOnlineDate?: string;
    isSet?: boolean;
};
type ReturnConfig = {
    time?: number;
    returnable?: boolean;
    unit?: string;
};
type ProductCreateUpdate = {
    description?: string;
    uid?: number;
    tags?: Array<string>;
    trader?: Trader;
    name: string;
    requester?: string;
    departments: Array<number>;
    media?: Array<Media1>;
    isSet?: boolean;
    currency: string;
    highlights?: Array<string>;
    countryOfOrigin: string;
    customOrder?: CustomOrder;
    templateTag: string;
    variants?: any;
    hsnCode: string;
    noOfBoxes?: number;
    moq?: OrderQuantity;
    companyId: number;
    sizeGuide?: string;
    traderType?: string;
    teaserTag?: TeaserTag;
    changeRequestId?: string;
    shortDescription?: string;
    isActive?: boolean;
    productPublish?: ProductPublish;
    returnConfig?: ReturnConfig;
    slug: string;
    customJson?: any;
    isImageLessProduct?: boolean;
    multiSize?: boolean;
    isDependent?: boolean;
    brandUid: number;
    itemCode: string;
    categorySlug: string;
    itemType: string;
    productGroupTag?: Array<string>;
};
type PageData = {
    size?: number;
    current?: string;
    itemTotal?: number;
    hasPrevious?: boolean;
    hasNext?: boolean;
};
type VerifiedBy = {
    userId?: string;
    username?: string;
};
type UserCommon = {
    userId?: string;
    username?: string;
    companyId?: number;
};
type Attributes = {
    verifiedBy?: VerifiedBy;
    sleeveLength?: string;
    createdOn?: string;
    primaryColor?: string;
    pattern?: string;
    modifiedBy?: UserCommon;
    modifiedOn?: string;
    essential?: string;
    verifiedOn?: string;
    l3Mapping?: Array<string>;
    metaNature?: string;
    createdBy?: UserCommon;
    material?: string;
    stage?: string;
    productFit?: string;
    neckType?: string;
    primaryMaterial?: string;
    isImageLessProduct?: boolean;
    imageNature?: string;
    gender?: Array<string>;
    color?: string;
};
type Logo = {
    url?: string;
    aspectRatio?: string;
    secureUrl?: string;
    aspectRatioF?: number;
};
type Brand = {
    uid?: number;
    logo?: Logo;
    name?: string;
};
type ProductPublished = {
    productOnlineDate?: number;
    isSet?: boolean;
};
type Product = {
    description?: string;
    uid?: number;
    images?: Array<string>;
    attributes?: Attributes;
    name?: string;
    id?: string;
    departments?: Array<number>;
    media?: Array<string>;
    isSet?: boolean;
    currency?: string;
    highlights?: string;
    countryOfOrigin?: string;
    templateTag?: string;
    hsnCode?: string;
    companyId?: number;
    sizeGuide?: string;
    sizes?: Array<any>;
    brand?: Brand;
    allSizes?: Array<string>;
    isActive?: boolean;
    productPublish?: ProductPublished;
    slug?: string;
    multiSize?: boolean;
    isDependent?: boolean;
    itemCode?: string;
    categorySlug?: string;
    itemType?: string;
};
type ProductListingResponse = {
    page?: PageData;
    items?: Array<Product>;
};
type ValidateProduct = {
    valid?: boolean;
};
type BulkJob = {
    cancelledRecords?: Array<any>;
    failedRecords?: Array<any>;
    filePath?: string;
    customTemplateTag?: string;
    templateTag?: string;
    modifiedOn?: string;
    succeed?: number;
    createdOn: string;
    companyId: number;
    isActive?: boolean;
    total: number;
    trackingUrl?: string;
    cancelled?: number;
    createdBy?: UserInfo1;
    modifiedBy?: UserInfo1;
    failed?: number;
    stage?: string;
};
type UserDetail = {
    userId?: string;
    username?: string;
    fullName?: string;
};
type ProductBulkRequest = {
    cancelledRecords?: Array<string>;
    failedRecords?: Array<string>;
    template?: ProductTemplate;
    filePath?: string;
    templateTag?: string;
    modifiedOn?: string;
    succeed?: number;
    companyId?: number;
    createdOn?: string;
    isActive?: boolean;
    total?: number;
    cancelled?: number;
    modifiedBy?: UserDetail;
    createdBy?: UserDetail;
    stage?: string;
    failed?: number;
};
type ProductBulkRequestList = {
    page?: PageData;
    items?: ProductBulkRequest;
};
type BulkProductRequest = {
    data: Array<any>;
    templateTag: string;
    batchId: string;
    companyId: number;
};
type NestedTags = {
    tags?: Array<string>;
};
type ProductTagsViewResponse = {
    items?: NestedTags;
};
type ProductBulkAssets = {
    user: any;
    url: string;
    companyId?: number;
};
type Items = {
    cancelledRecords?: Array<string>;
    failedRecords?: Array<string>;
    retry?: number;
    filePath?: string;
    modifiedOn?: string;
    succeed?: number;
    createdOn?: string;
    companyId?: number;
    isActive?: boolean;
    id?: string;
    total?: number;
    trackingUrl?: string;
    cancelled?: number;
    createdBy?: UserCommon;
    modifiedBy?: UserCommon;
    failed?: number;
    stage?: string;
};
type BulkAssetResponse = {
    page?: PageData;
    items?: Array<Items>;
};
type ItemQuery = {
    brandUid?: number;
    uid?: number;
    itemCode?: string;
};
type SetSize = {
    size: string;
    pieces: number;
};
type SizeDistribution = {
    sizes: Array<SetSize>;
};
type InventorySet = {
    sizeDistribution: SizeDistribution;
    quantity?: number;
};
type GTIN = {
    primary?: boolean;
    gtinValue: string;
    gtinType: string;
};
type InvSize = {
    itemLength?: number;
    size: string;
    price: number;
    set?: InventorySet;
    priceTransfer?: number;
    itemWeight?: number;
    priceEffective: number;
    itemDimensionsUnitOfMeasure?: string;
    itemWidth?: number;
    itemHeight?: number;
    itemWeightUnitOfMeasure?: string;
    identifiers: Array<GTIN>;
    quantity: number;
    storeCode: string;
    isSet?: boolean;
    currency: string;
};
type InventoryRequest = {
    item: ItemQuery;
    sizes: Array<InvSize>;
    companyId: number;
};
type InventoryRequest1 = {
    pageSize?: number;
    size?: string;
    total?: number;
    pageNo?: number;
    search?: string;
};
type CommonResponse = {
    success?: string;
};
type BulkRequestGet = {
    pageSize?: number;
    customTemplateTag?: string;
    endDate?: string;
    templateTag?: string;
    total?: number;
    pageNo?: number;
    startDate?: string;
    search?: string;
    stage?: string;
};
type Size1 = {
    itemLength?: number;
    size?: string;
    sellerIdentifier: string;
    price: number;
    set?: InventorySet;
    priceTransfer?: number;
    itemWeight?: number;
    priceEffective: number;
    itemDimensionsUnitOfMeasure?: string;
    itemWidth?: number;
    itemHeight?: number;
    itemWeightUnitOfMeasure?: string;
    identifiers?: Array<any>;
    quantity: number;
    storeCode: string;
    isSet?: boolean;
    currency: string;
};
type InventoryBulkRequest = {
    user?: any;
    batchId: string;
    sizes: Array<Size1>;
    companyId: number;
};
type InventoryExportRequest = {
    brand?: Array<number>;
    type?: string;
    store?: Array<number>;
};
type InventoryExportJob = {
    status?: string;
    taskId: string;
    url?: string;
    triggerOn?: string;
    completedOn?: string;
    sellerId: number;
    requestParams?: any;
};
type FilerList = {
    display?: string;
    value?: string;
};
type InventoryConfig = {
    data?: Array<FilerList>;
    multivalues?: boolean;
};
type HsnUpsert = {
    tax1: number;
    tax2?: number;
    uid?: number;
    hs2Code: string;
    threshold2?: number;
    hsnCode: string;
    taxOnMrp: boolean;
    companyId: number;
    isActive: boolean;
    taxOnEsp?: boolean;
    threshold1: number;
};
type HsnCodesObject = {
    tax1?: number;
    tax2?: number;
    uid?: number;
    hs2Code?: string;
    threshold2?: number;
    hsnCode?: string;
    taxOnMrp?: boolean;
    companyId?: number;
    isActive?: boolean;
    taxOnEsp?: boolean;
    threshold1?: number;
};
type HsnCode = {
    data?: HsnCodesObject;
};
type PageResponse = {
    size?: number;
    current?: string;
    itemTotal?: number;
    hasPrevious?: boolean;
    hasNext?: boolean;
};
type HsnCodesListingResponse = {
    page?: PageResponse;
    items?: Array<HsnCodesObject>;
};
type BulkHsnUpsert = {
    data: Array<HsnUpsert>;
};
type BulkHsnResponse = {
    success?: boolean;
};
type Document = {
    type: string;
    verified?: boolean;
    value: string;
    url?: string;
    legalName: string;
};
type ReferralInfo = {
    referralCode?: string;
};
type CompanyAddress = {
    landmark?: string;
    country: string;
    longitude: number;
    city: string;
    address2?: string;
    countryCode?: string;
    pincode: number;
    state: string;
    latitude: number;
    address1: string;
};
type BusinessCountryInfo = {
    countryCode?: string;
    country?: string;
};
type CompanyStoreSerializerRequest = {
    document: Document;
    name: string;
    franchiseEnabled?: boolean;
    warnings?: any;
    referralInfo?: ReferralInfo;
    uid?: number;
    businessInfo?: string;
    businessType: string;
    address: CompanyAddress;
    businessCountryInfo: BusinessCountryInfo;
    brands: Array<number>;
    notificationEmails?: Array<string>;
};
type BusinessCountryInfo1 = {
    countryCode?: string;
    country?: string;
};
type SellerPhoneNumber = {
    countryCode: number;
    number: string;
};
type ContactDetails = {
    phone?: Array<SellerPhoneNumber>;
    emails?: Array<string>;
};
type Website = {
    url?: string;
};
type BusinessDetails = {
    website?: Website;
};
type GetAddressSerializer = {
    landmark?: string;
    country?: string;
    longitude?: number;
    city?: string;
    addressType?: string;
    address2?: string;
    countryCode?: string;
    pincode?: number;
    state?: string;
    latitude?: number;
    address1?: string;
};
type GetCompanyProfileSerializerResponse = {
    verifiedBy?: UserSerializer;
    businessType: string;
    businessCountryInfo?: BusinessCountryInfo1;
    name?: string;
    contactDetails?: ContactDetails;
    modifiedOn?: string;
    companyType: string;
    stage?: string;
    warnings?: any;
    createdOn?: string;
    documents?: Array<Document>;
    uid: number;
    businessInfo?: string;
    businessDetails?: BusinessDetails;
    franchiseEnabled?: boolean;
    addresses?: Array<GetAddressSerializer>;
    createdBy?: UserSerializer;
    modifiedBy?: UserSerializer;
    verifiedOn?: string;
    notificationEmails?: Array<string>;
};
type DocumentsObj = {
    verified?: number;
    pending?: number;
};
type MetricsSerializer = {
    stage?: string;
    brand?: DocumentsObj;
    store?: DocumentsObj;
    storeDocuments?: DocumentsObj;
    companyDocuments?: DocumentsObj;
    uid?: number;
    product?: DocumentsObj;
};
type UserSerializer1 = {
    userId?: string;
    contact?: string;
    username?: string;
};
type BrandBannerSerializer = {
    portrait?: string;
    landscape?: string;
};
type GetBrandResponseSerializer = {
    createdBy?: UserSerializer1;
    description?: string;
    name: string;
    logo?: string;
    stage?: string;
    verifiedBy?: UserSerializer1;
    localeLanguage?: any;
    warnings?: any;
    rejectReason?: string;
    createdOn?: string;
    uid?: number;
    modifiedBy?: UserSerializer1;
    slugKey?: string;
    modifiedOn?: string;
    banner?: BrandBannerSerializer;
    customJson?: any;
    synonyms?: Array<string>;
    verifiedOn?: string;
};
type CreateUpdateBrandRequestSerializer = {
    description?: string;
    name: string;
    logo: string;
    localeLanguage?: any;
    companyId?: number;
    uid?: number;
    customJson?: any;
    brandTier?: string;
    banner?: BrandBannerSerializer;
    synonyms?: Array<string>;
};
type CompanyBrandPostRequestSerializer = {
    company: number;
    brands: Array<number>;
    uid?: number;
};
type GetCompanySerializer = {
    createdBy?: UserSerializer;
    name?: string;
    stage?: string;
    verifiedBy?: UserSerializer;
    rejectReason?: string;
    createdOn?: string;
    uid?: number;
    modifiedBy?: UserSerializer;
    businessType?: string;
    modifiedOn?: string;
    verifiedOn?: string;
    addresses?: Array<GetAddressSerializer>;
    companyType?: string;
};
type CompanyBrandSerializer = {
    createdBy?: UserSerializer1;
    stage?: string;
    brand?: GetBrandResponseSerializer;
    verifiedBy?: UserSerializer1;
    warnings?: any;
    rejectReason?: string;
    createdOn?: string;
    company?: GetCompanySerializer;
    uid?: number;
    modifiedBy?: UserSerializer1;
    modifiedOn?: string;
    verifiedOn?: string;
};
type CompanyBrandListSerializer = {
    items?: Array<CompanyBrandSerializer>;
    page?: Page;
};
type LocationManagerSerializer = {
    name?: string;
    mobileNo: SellerPhoneNumber;
    email?: string;
};
type ProductReturnConfigSerializer = {
    storeUid?: number;
    onSameStore?: boolean;
};
type InvoiceCredSerializer = {
    enabled?: boolean;
    password?: string;
    username?: string;
};
type InvoiceDetailsSerializer = {
    eInvoice?: InvoiceCredSerializer;
    eWaybill?: InvoiceCredSerializer;
};
type GetAddressSerializer1 = {
    landmark?: string;
    country?: string;
    longitude?: number;
    city?: string;
    addressType?: string;
    address2?: string;
    countryCode?: string;
    pincode?: number;
    state?: string;
    latitude?: number;
    address1?: string;
};
type LocationTimingSerializer = {
    hour?: number;
    minute?: number;
};
type LocationDayWiseSerializer = {
    open: boolean;
    closing?: LocationTimingSerializer;
    opening?: LocationTimingSerializer;
    weekday: string;
};
type LocationSerializer = {
    manager?: LocationManagerSerializer;
    name: string;
    stage?: string;
    warnings?: any;
    productReturnConfig?: ProductReturnConfigSerializer;
    gstCredentials?: InvoiceDetailsSerializer;
    company: number;
    documents?: Array<Document>;
    uid?: number;
    customJson?: any;
    address: GetAddressSerializer1;
    timing?: Array<LocationDayWiseSerializer>;
    displayName: string;
    storeType?: string;
    contactNumbers?: Array<SellerPhoneNumber>;
    code: string;
    notificationEmails?: Array<string>;
};
type LocationIntegrationType = {
    inventory?: string;
    order?: string;
};
type GetLocationSerializer = {
    verifiedBy?: UserSerializer1;
    productReturnConfig?: ProductReturnConfigSerializer;
    phoneNumber: string;
    customJson?: any;
    storeType?: string;
    name: string;
    modifiedOn?: string;
    stage?: string;
    warnings?: any;
    gstCredentials?: InvoiceDetailsSerializer;
    integrationType?: LocationIntegrationType;
    createdOn?: string;
    documents?: Array<Document>;
    uid?: number;
    displayName: string;
    contactNumbers?: Array<SellerPhoneNumber>;
    code: string;
    createdBy?: UserSerializer1;
    company?: GetCompanySerializer;
    modifiedBy?: UserSerializer1;
    address: GetAddressSerializer;
    timing?: Array<LocationDayWiseSerializer>;
    manager?: LocationManagerSerializer;
    verifiedOn?: string;
    notificationEmails?: Array<string>;
};
type LocationListSerializer = {
    items?: Array<GetLocationSerializer>;
    page?: Page;
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
type CampaignShortLink = {
    source?: string;
    medium?: string;
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
    campaign?: CampaignShortLink;
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
    campaign?: CampaignShortLink;
    redirects?: Redirects;
    attribution?: Attribution;
    socialMediaTags?: SocialMediaTags;
    count?: number;
};
type ShortLinkList = {
    items?: Array<ShortLinkRes>;
    page?: Page;
};
type ErrorRes = {
    message?: string;
};
type DataTresholdDTO = {
    minPrice?: number;
    safeStock?: number;
    periodThreshold?: number;
    periodThresholdType?: string;
    periodTypeList?: Array<GenericDTO>;
};
type GenericDTO = {
    text?: string;
    value?: any;
};
type JobConfigDTO = {
    integration: string;
    integrationData?: any;
    companyName?: string;
    companyId: number;
    taskDetails?: TaskDTO;
    thresholdDetails?: DataTresholdDTO;
    jobCode?: string;
    alias?: string;
};
type TaskDTO = {
    type?: number;
    groupList?: Array<GenericDTO>;
};
type ResponseEnvelopeString = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    totalTimeTakenInMillis?: number;
    httpStatus?: string;
    items?: string;
    payload?: string;
    traceId?: string;
    page?: Page;
};
type AWSS3config = {
    bucket?: string;
    region?: string;
    dir?: string;
    accessKey?: string;
    secretKey?: string;
    localFilePath?: string;
    archivePath?: string;
    archive?: boolean;
    delete?: boolean;
    unzip?: boolean;
    zipFormat?: string;
    fileRegex?: string;
    archiveConfig?: ArchiveConfig;
};
type ArchiveConfig = {
    delete?: boolean;
    archive?: boolean;
    archiveDir?: string;
};
type Audit = {
    createdBy?: string;
    modifiedBy?: string;
    createdOn?: string;
    modifiedOn?: string;
};
type CatalogMasterConfig = {
    sourceSlug?: string;
};
type CompanyConfig = {
    companyId?: number;
    excludeSteps?: Array<number>;
    hiddenClosetKeys?: Array<string>;
    openTags?: any;
    taxIdentifiers?: Array<string>;
    deleteQuantityThreshold?: number;
};
type DBConfig = {
    vendor?: string;
    host?: string;
    port?: number;
    username?: string;
    password?: string;
    dbname?: string;
    query?: string;
    procedure?: boolean;
    driverClass?: string;
    jdbcUrl?: string;
    optionalProperties?: any;
};
type DBConnectionProfile = {
    inventory?: string;
};
type DBParamConfig = {
    params?: any;
};
type DefaultHeadersDTO = {
    store?: PropBeanDTO;
    intfArticleId?: PropBeanDTO;
    priceEffective?: PropBeanDTO;
    quantity?: PropBeanDTO;
};
type DocMappingConfig = {
    properties?: any;
    junkDataThresholdCount?: number;
    propBeanConfigs?: Array<PropBeanConfig>;
    unwindField?: string;
    defaultHeaders?: DefaultHeadersDTO;
};
type EmailConfig = {
    recepient?: string;
    host?: string;
    username?: string;
    password?: string;
    unzip?: boolean;
    readFromContent?: boolean;
    filterBasedOnRecepients?: boolean;
    pcol?: string;
    subjectLineRegex?: string;
    senderAddress?: string;
    localDir?: string;
    folderNameHierarchies?: Array<string>;
    attachmentRegex?: string;
    bodyContentRegex?: string;
    passwordProtected?: boolean;
    zipFormat?: string;
    attachmentMandate?: boolean;
    filterFilesAfterExtraction?: boolean;
    archiveConfig?: ArchiveConfig;
    readAllUnreadMails?: boolean;
    contentType?: string;
    downloadableLink?: boolean;
    properties?: any;
};
type FTPConfig = {
    host?: string;
    port?: number;
    username?: string;
    password?: string;
    unzip?: boolean;
    retries?: number;
    interval?: number;
    localDir?: string;
    remoteDir?: string;
    zipFileRegex?: string;
    archiveConfig?: ArchiveConfig;
    fileRegex?: string;
    zipFormat?: string;
    readAllFiles?: boolean;
};
type FileConfig = {
    delimiter?: string;
    charset?: string;
    properties?: any;
    fileHasHeader?: boolean;
    headerIndex?: number;
    headerArray?: Array<string>;
    dataStartIndex?: number;
    propBeanConfigs?: Array<PropBeanConfig>;
    junkDataThresholdCount?: number;
    fileType?: string;
    lineValidityCheck?: boolean;
    sheetNames?: Array<string>;
    readAllSheets?: boolean;
    quoteChar?: string;
    escapeChar?: string;
    defaultHeaders?: DefaultHeadersDTO;
};
type GoogleSpreadSheetConfig = {
    range?: string;
    sheetId?: string;
    clientSecretLocation?: string;
    credStorageDirectory?: string;
    localDir?: string;
    archiveConfig?: ArchiveConfig;
};
type HttpConfig = {
    hosturl?: string;
    username?: string;
    password?: string;
    requestParams?: any;
    httpMethod?: string;
    requestPayload?: string;
    localPath?: string;
    archiveConfig?: ArchiveConfig;
};
type JobConfig = {
    id?: number;
    jobCode?: string;
    taskType?: string;
    syncDelay?: number;
    cronExpression?: string;
    storeFilter?: StoreFilter;
    processConfig?: ProcessConfig;
    storeConfig?: Array<StoreConfig>;
    properties?: any;
    immediateFirstRun?: boolean;
    disable?: boolean;
    dependentJobCodes?: Array<string>;
    companyConfig?: Array<CompanyConfig>;
    companyIds?: Array<number>;
    taxIdentifiers?: Array<string>;
    priority?: string;
    periodThreshold?: number;
    periodThresholdType?: string;
    dbConnectionProfile?: DBConnectionProfile;
    params?: any;
    openTags?: any;
    deleteQuantityThreshold?: number;
    catalogMasterConfig?: CatalogMasterConfig;
    aggregatorTypes?: Array<string>;
    integrationType?: string;
    minPrice?: number;
    audit?: Audit;
    version?: number;
    alias?: string;
};
type JobConfigRawDTO = {
    integration: string;
    companyName: string;
    companyId: number;
    data?: JobConfig;
};
type JsonDocConfig = {
    propBeanConfigs?: Array<PropBeanConfig>;
};
type LocalFileConfig = {
    retries?: number;
    interval?: number;
    localDir?: string;
    workingDir?: string;
    unzip?: boolean;
    zipFileRegex?: string;
    fileRegex?: string;
    zipFormat?: string;
    archiveConfig?: ArchiveConfig;
    readAllFiles?: boolean;
};
type MongoDocConfig = {
    collectionName?: string;
    findQuery?: any;
    projectionQuery?: any;
    propBeanConfigs?: Array<PropBeanConfig>;
    aggregatePipeline?: Array<any>;
    skipSave?: boolean;
};
type OAuthConfig = {
    limit?: number;
    pages?: number;
    interval?: number;
    consumerKey?: string;
    consumerSecret?: string;
    token?: string;
    tokenSecret?: string;
    restUrl?: string;
    restBaseUrl?: string;
    functionName?: string;
};
type ProcessConfig = {
    dbConfig?: DBConfig;
    dbParamConfig?: DBParamConfig;
    sftpConfig?: SFTPConfig;
    awsS3Config?: AWSS3config;
    mongoDocConfig?: MongoDocConfig;
    ftpConfig?: FTPConfig;
    emailConfig?: EmailConfig;
    fileConfig?: FileConfig;
    jsonDocConfig?: JsonDocConfig;
    docMappingConfig?: DocMappingConfig;
    taskStepConfig?: TaskStepConfig;
    httpConfig?: HttpConfig;
    localFileConfig?: LocalFileConfig;
    oauthConfig?: OAuthConfig;
    googleSpreadsheetConfig?: GoogleSpreadSheetConfig;
};
type PropBeanConfig = {
    required?: boolean;
    mapping?: any;
    optional?: boolean;
    send?: Send;
    validations?: Array<any>;
    values?: Array<string>;
    include?: boolean;
    sourceField?: string;
    sourceFields?: Array<string>;
    destinationField?: string;
    dataType?: string;
    defaultValue?: any;
    constValue?: any;
    concatStr?: string;
    functionName?: string;
    transformerName?: string;
    allParamFunctionName?: string;
    subSeparator?: string;
    indexField?: string;
    ignoreIfNotExists?: boolean;
    identifierType?: string;
    projectionQuery?: any;
    enrichFromMaster?: boolean;
};
type PropBeanDTO = {
    required?: boolean;
    optional?: boolean;
    include?: boolean;
    sourceField?: string;
    sourceFields?: Array<string>;
    destinationField?: string;
    dataType?: string;
    defaultValue?: any;
    constValue?: any;
    concatStr?: string;
    functionName?: string;
    transformerName?: string;
    allParamFunctionName?: string;
    subSeparator?: string;
    indexField?: string;
    ignoreIfNotExists?: boolean;
    identifierType?: string;
    projectionQuery?: any;
    enrichFromMaster?: boolean;
};
type ResponseEnvelopeListJobConfigRawDTO = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    totalTimeTakenInMillis?: number;
    httpStatus?: string;
    items?: Array<JobConfigRawDTO>;
    payload?: Array<JobConfigRawDTO>;
    traceId?: string;
    page?: Page;
};
type SFTPConfig = {
    host?: string;
    port?: number;
    username?: string;
    password?: string;
    unzip?: boolean;
    retries?: number;
    interval?: number;
    privateKeyPath?: string;
    strictHostKeyChecking?: boolean;
    localDir?: string;
    remoteDir?: string;
    passwordProtected?: boolean;
    zipFileRegex?: string;
    fileRegex?: string;
    zipFormat?: string;
    archiveConfig?: ArchiveConfig;
    readAllFiles?: boolean;
};
type Send = {
    raw?: boolean;
    processed?: boolean;
};
type StoreConfig = {
    jobCode?: string;
    storeid?: string;
    storeAlias?: string;
    storeFileRegex?: string;
    storeFileName?: string;
    processConfig?: ProcessConfig;
    properties?: any;
};
type StoreFilter = {
    includeTags?: Array<string>;
    excludeTags?: Array<string>;
    query?: any;
};
type TaskConfig = {
    name?: string;
    taskConfigId?: number;
    taskParams?: Array<TaskParam>;
};
type TaskParam = {
    name?: string;
    value?: any;
};
type TaskStepConfig = {
    taskConfigs?: Array<TaskConfig>;
    taskConfigIds?: Array<number>;
    taskConfigGroupIds?: Array<number>;
};
type ResponseEnvelopeListJobConfigDTO = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    totalTimeTakenInMillis?: number;
    httpStatus?: string;
    items?: Array<JobConfigDTO>;
    payload?: Array<JobConfigDTO>;
    traceId?: string;
    page?: Page;
};
type ResponseEnvelopeJobConfigDTO = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    totalTimeTakenInMillis?: number;
    httpStatus?: string;
    items?: JobConfigDTO;
    payload?: JobConfigDTO;
    traceId?: string;
    page?: Page;
};
type JobConfigListDTO = {
    code?: string;
    alias?: string;
    modifiedBy?: string;
    createdBy?: string;
    modifiedOn?: string;
    createdOn?: string;
    active?: boolean;
    type?: string;
};
type ResponseEnvelopeListJobConfigListDTO = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    totalTimeTakenInMillis?: number;
    httpStatus?: string;
    items?: Array<JobConfigListDTO>;
    payload?: Array<JobConfigListDTO>;
    traceId?: string;
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
    params?: any;
    query?: any;
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
    discountQty?: number;
    min?: number;
    key?: number;
    max?: number;
    value?: number;
};
type Identifier = {
    articleId?: Array<string>;
    brandId?: Array<number>;
    collectionId?: Array<string>;
    storeId?: Array<number>;
    itemId?: Array<number>;
    companyId?: Array<number>;
    categoryId?: Array<number>;
    userId?: Array<string>;
};
type RuleDefinition = {
    type: string;
    valueType: string;
    isExact?: boolean;
    currencyCode?: string;
    autoApply?: boolean;
    applicableOn: string;
    scope?: Array<string>;
    calculateOn: string;
};
type Validity = {
    priority?: number;
};
type Ownership = {
    payableBy: string;
    payableCategory: string;
};
type CouponAuthor = {
    modifiedBy?: string;
    createdBy?: string;
};
type DisplayMetaDict = {
    subtitle?: string;
    title?: string;
};
type DisplayMeta = {
    description?: string;
    auto?: DisplayMetaDict;
    apply?: DisplayMetaDict;
    title?: string;
    remove?: DisplayMetaDict;
    subtitle?: string;
};
type Validation = {
    userRegisteredAfter?: string;
    appId?: Array<string>;
    anonymous?: boolean;
};
type CouponAction = {
    txnMode?: string;
    actionDate?: string;
};
type State = {
    isPublic?: boolean;
    isDisplay?: boolean;
    isArchived?: boolean;
};
type PostOrder = {
    cancellationAllowed?: boolean;
    returnAllowed?: boolean;
};
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    types?: Array<string>;
    uses?: PaymentAllowValue;
    codes?: Array<string>;
    networks?: Array<string>;
};
type PaymentCodes = {
    ps?: PaymentModes;
    upi?: PaymentModes;
    card?: PaymentModes;
    pl?: PaymentModes;
    nb?: PaymentModes;
    wl?: PaymentModes;
    qr?: PaymentModes;
};
type BulkBundleRestriction = {
    multiStoreAllowed: boolean;
};
type UsesRemaining = {
    app?: number;
    user?: number;
    total?: number;
};
type UsesRestriction = {
    maximum?: UsesRemaining;
    remaining?: UsesRemaining;
};
type PriceRange = {
    max?: number;
    min?: number;
};
type Restrictions = {
    orderingStores?: Array<number>;
    postOrder?: PostOrder;
    couponAllowed?: boolean;
    payments?: PaymentCodes;
    bulkBundle?: BulkBundleRestriction;
    uses?: UsesRestriction;
    priceRange?: PriceRange;
    platforms?: Array<string>;
};
type CouponDateMeta = {
    modifiedOn?: string;
    createdOn?: string;
};
type CouponSchedule = {
    start?: string;
    nextSchedule?: Array<any>;
    end?: string;
    duration?: number;
    cron?: string;
};
type CouponAdd = {
    rule: Array<Rule>;
    identifiers: Identifier;
    ruleDefinition: RuleDefinition;
    validity: Validity;
    ownership: Ownership;
    author?: CouponAuthor;
    displayMeta: DisplayMeta;
    validation?: Validation;
    tags?: Array<string>;
    code: string;
    action?: CouponAction;
    typeSlug: string;
    state?: State;
    restrictions?: Restrictions;
    dateMeta?: CouponDateMeta;
    schedule?: CouponSchedule;
};
type CouponsResponse = {
    page?: Page;
    items?: CouponAdd;
};
type SuccessMessage = {
    message?: string;
    success?: boolean;
};
type OperationErrorResponse = {
    message?: string;
    success?: boolean;
};
type CouponUpdate = {
    rule: Array<Rule>;
    identifiers: Identifier;
    ruleDefinition: RuleDefinition;
    validity: Validity;
    ownership: Ownership;
    author?: CouponAuthor;
    displayMeta: DisplayMeta;
    validation?: Validation;
    tags?: Array<string>;
    code: string;
    action?: CouponAction;
    typeSlug: string;
    state?: State;
    restrictions?: Restrictions;
    dateMeta?: CouponDateMeta;
    schedule?: CouponSchedule;
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
type AppUser = {
    id?: string;
    active?: boolean;
    applicationId?: string;
    blockReason?: string;
    updatedAt?: string;
    updatedBy?: string;
    userId?: string;
};
type E = {
    code?: any;
    exception?: string;
    info?: string;
    message?: string;
    requestId?: string;
    stackTrace?: string;
    status?: number;
};
type Giveaway = {
    id?: string;
    schedule?: Schedule;
    active?: boolean;
    applicationId?: string;
    audience?: RewardsAudience;
    bannerImage?: Asset;
    createdAt?: string;
    description?: string;
    rule?: RewardsRule;
    title?: string;
    updatedAt?: string;
};
type GiveawayResponse = {
    items?: Array<Giveaway>;
    page?: Page;
};
type HistoryPretty = {
    id?: string;
    applicationId?: string;
    claimed?: boolean;
    createdAt?: string;
    expiresOn?: string;
    points?: number;
    remainingPoints?: number;
    text1?: string;
    text2?: string;
    text3?: string;
    txnName?: string;
    updatedAt?: string;
    userId?: string;
};
type HistoryRes = {
    items?: Array<HistoryPretty>;
    page?: Page;
    points?: number;
};
type Offer = {
    schedule?: Schedule;
    active?: boolean;
    applicationId?: string;
    bannerImage?: Asset;
    createdAt?: string;
    name?: string;
    rule?: any;
    share?: ShareMessages;
    subText?: string;
    text?: string;
    type?: string;
    updatedAt?: string;
    updatedBy?: string;
    url?: string;
};
type Points = {
    available?: number;
};
type Referral = {
    code?: string;
};
type RewardUser = {
    id?: string;
    active?: boolean;
    createdAt?: string;
    referral?: Referral;
    uid?: number;
    updatedAt?: string;
    userBlockReason?: string;
    userId?: string;
};
type RewardsAudience = {
    headerUserId?: string;
    id?: string;
};
type RewardsRule = {
    amount?: number;
};
type ShareMessages = {
    email?: string;
    facebook?: string;
    fallback?: string;
    message?: string;
    messenger?: string;
    sms?: string;
    text?: string;
    twitter?: string;
    whatsapp?: string;
};
type UserRes = {
    points?: Points;
    user?: RewardUser;
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
    traceId?: string;
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
type ValidityObject = {
    start: string;
    end: string;
};
type CreateUpdateDiscount = {
    name: string;
    companyId: number;
    isActive: boolean;
    appIds: Array<string>;
    jobType: string;
    discountType: string;
    discountLevel: string;
    value?: number;
    filePath?: string;
    brandIds?: Array<number>;
    storeIds?: Array<number>;
    validity: ValidityObject;
};
type DiscountJob = {
    id: string;
    name: string;
    companyId: number;
    isActive: boolean;
    appIds?: Array<string>;
    jobType?: string;
    discountType?: string;
    discountLevel?: string;
    value?: number;
    filePath?: string;
    brandIds?: Array<number>;
    storeIds?: Array<number>;
    validity: ValidityObject;
    createdOn: string;
    modifiedOn: string;
    createdBy: UserDetails;
    modifiedBy: UserDetails;
    meta?: any;
};
type ListOrCalender = {
    items: Array<DiscountJob>;
    page: Page;
};
type FileJobResponse = {
    stage: string;
    total: number;
    failed: number;
    companyId: number;
    body?: any;
    type: string;
    fileType: string;
};
type DownloadFileJob = {
    brandIds?: Array<number>;
    storeIds?: Array<number>;
};
type CancelJobResponse = {
    success: boolean;
};
type UserDetails = {
    username: string;
    userId: string;
};
type BadRequestObject = {
    message: string;
};
type AddProxyReq = {
    attachedPath?: string;
    proxyUrl?: string;
};
type AddProxyResponse = {
    id?: string;
    attachedPath?: string;
    proxyUrl?: string;
    companyId?: string;
    applicationId?: string;
    extensionId?: string;
    createdAt?: string;
    modifiedAt?: string;
};
type ApiError = {
    code?: string;
    message?: string;
    meta?: any;
};
type RemoveProxyResponse = {
    message?: string;
    data?: any;
};
import Paginator = require("../common/Paginator");
import { OrderValidator } from "./PlatformApplicationModels";
