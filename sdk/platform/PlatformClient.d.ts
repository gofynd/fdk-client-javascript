export = PlatformClient;
declare class PlatformClient {
    constructor(config: any);
    config: any;
    lead: Lead;
    billing: Billing;
    communication: Communication;
    payment: Payment;
    order: Order;
    catalog: Catalog;
    companyProfile: CompanyProfile;
    fileStorage: FileStorage;
    configuration: Configuration;
    marketplaces: Marketplaces;
    analytics: Analytics;
    discount: Discount;
    application(applicationId: any): PlatformApplicationClient;
}
declare namespace PlatformClient {
    export { TicketList, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, KeyValue, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, UserSchema, PhoneNumber, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketCategory, SubmitButton, PollForAssignment, CustomForm, TicketHistory, Ticket, Activity, ActivityDump, AddMediaListRequest, AddMediaRequest, ApproveRequest, Attribute, AttributeObject, Attributes, CreatedBy, CursorGetResponse, DateMeta, DeviceMeta, Entity, EntityRequest, ErrorResponse, GetResponse, GetReviewResponse, InsertResponse, MediaMeta, MediaMetaRequest, NumberGetResponse, PageCursor, PageNumber, Rating, RatingRequest, ReportAbuseRequest, Review, ReviewFacet, ReviewRequest, SaveAttributeRequest, SortMethod, State, TagMeta, Template, TemplateGetResponse, TemplateRequest, TemplateRequestList, UI, UIIcon, UpdateAttributeRequest, UpdateResponse, UpdateReviewRequest, UpdateTemplateRequest, UpdateTemplateStatusRequest, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, pagesSchema, availableSectionSchema, sectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, AvailablePages, Seo, Sections, Config, Preset, GlobalSchema, ListSchema, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, BlocksProps, PageSections, PageSectionsBlocks, PageSectionsBlocksProps, Predicate, Screen, PredicateUserSchema, Route, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, SendEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, AuthSuccess, SendOtpResponse, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, Mobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, Facebook, Accountkit, Google, ApplicationLegal, ApplicationLegalFAQ, SeoComponent, SeoSchema, CustomMetaTag, Detail, StorefrontAnnouncement, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, announcementSchema, scheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, AnnouncementDataSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, APIError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryByIdOrSlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, CustomBlogSchema, FeatureImage, CustomBlog, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, UnauthenticatedUser, UnauthenticatedApplication, BadRequest, ResourceNotFound, InternalServerError, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutsResponse, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, GetActivityStatus, ActivityHistory, FailedOrders, FailOrder, MarketplaceOrder, TotalDiscountsSet, PresentmentMoney, ShopMoney, TotalPriceSet, TotalPriceSetShopMoney, TotalPriceSetPresentmentMoney, TotalTaxSet, TotalTaxSetShopMoney, TotalTaxSetPresentmentMoney, SubtotalPriceSet, SubtotalPriceSetShopMoney, SubtotalPriceSetPresentmentMoney, LineItems, LineItemsArticle, Quantities, NotAvailable, Sellable, OrderCommitted, Damaged, Manufacturer, ArticlePrice, Company, FailOrderDateMeta, MarketplaceIdentifiers, TatacliqLuxury, Dimension, Weight, Store, ArticleMeta, ArticleBrand, LineItemsArticleIdentifier, PriceSet, PriceSetShopMoney, PriceSetPresentmentMoney, TaxLines, TaxLinesPriceSet, TaxLinesPriceSetShopMoney, TaxLinesPriceSetPresentmentMoney, TotalDiscountSet, TotalDiscountSetPresentmentMoney, TotalDiscountSetShopMoney, BillingAddress, TotalShippingPriceSet, TotalShippingPriceSetShopMoney, TotalShippingPriceSetPresentmentMoney, Customer, DefaultAddress, TotalLineItemsPriceSet, TotalLineItemsPriceSetShopMoney, TotalLineItemsPriceSetPresentmentMoney, ShippingAddress, OrderListing, OrderItems, PlatformOrderUserInfo, PlatformDeliveryAddress, Channel, PlatformBreakupValues, PlatformApplication, ArticleAssignment, PlatformShipment, PlatformShipmentStatus, Bags, BagFinancialBreakup, Identifiers, BagCurrStatus, BagItem, BagItemAttributes, BagArticle, ArticleIdentifiers, Set, SetSizeDistribution, Sizes, BagArticleReturnConfig, ShipmentPrices, GstDetails, BagBreakupValues, BagCurrentStatus, BagStateMapper, BagStatus, BagStatusBagStateMapper, BagPrices, ShipmentBreakupValues, DpDetails, ShipmentInvoice, RtoAddress, StoreAddressJson, PlatformFulfillingStore, FulfillingStoreMeta, AdditionalContactDetails, Documents, Gst, ProductReturnConfig, Timing, Opening, Closing, FulfillingStoreStoreAddressJson, Payments, ShipmentGst, PlatformShipmentBrand, Promise, Timestamp, ShipmentTrackingDetails, ShipmentUser, ItemsPayments, Filters, Stages, StagesFilters, Options, NextOrderStatus, BagConfirmed, DpAssigned, ReturnBagDelivered, Placed, DeliveryDone, Pending, BagPacked, PlatformOrderPage, ItemTotal, AppliedFilters, UpdateOrderReprocessResponse, PlatformOrderTrack, GetPingResponse, UpdateShipmentStatusResponse, UpdateShipmentStatusBody, PlatformShipmentTrack, Results, UpdateProcessShipmenstRequestBody, UpdateProcessShipmenstRequestResponse, GetVoiceCallbackResponse, GetClickToCallResponse, ApefaceApiError, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsData, DeleteResponse, Page, GetSearchWordsDetailResponse, GetSearchWordsResponse, Media, AutocompletePageAction, AutocompleteAction, AutocompleteResult, CreateAutocompleteKeyword, GetAutocompleteWordsData, GetAutocompleteWordsResponse, CreateAutocompleteWordsResponse, ProductBundleItem, ProductBundleRequest, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleUpdateRequest, LimitedProductData, Price, Size, GetProducts, GetProductBundleResponse, Meta, Guide, ValidateSizeGuide, SuccessResponse, ListSizeGuide, SizeGuideResponse, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingResponse, GetCatalogConfigurationDetailsProduct, GetCatalogConfigurationMetaData, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListing, ProductSize, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProduct, AppConfiguration, AppCatalogConfiguration, GetAppCatalogConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductFiltersKey, ProductFiltersValue, ProductFilters, ProductSortOn, GetCollectionQueryOptionResponse, CollectionImage, Schedule, UserInfo, CollectionBanner, SeoDetail, CollectionBadge, CreateCollection, BannerImage, ImageUrls, CollectionCreateResponse, CollectionListingFilterType, CollectionListingFilterTag, CollectionListingFilter, ProductListingActionPage, ProductListingAction, Media1, GetCollectionDetailNest, GetCollectionListingResponse, CollectionDetailResponse, CollectionItemRequest, UpdatedResponse, Price1, ProductListingPrice, ProductListingDetail, GetCollectionItemsResponse, CatalogInsightBrand, CatalogInsightItem, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, BasePage, MultipleCommon, ProdcutTemplateCategoriesResponse, PTErrorResponse, BasePage1, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, ProductTemplate, TemplatesResponse, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, ProductConfligurationDownloads, Media2, Hierarchy, CategoryMappingValues, CategoryMapping, CategoryRequestBody, CategoryCreateResponse, Category, CategoryResponse, CategoryUpdateResponse, CustomOrder, Trader, OrderQuantity, ProductPublish, ReturnConfig, TeaserTag, ProductCreateUpdate, PageData, Logo, Brand, ProductPublished, UserCommon, VerifiedBy, Product, ProductListingResponse, ValidateProduct, UserInfo1, BulkJob, UserDetail, ProductBulkRequest, ProductBulkRequestList, BulkProductRequest, NestedTags, ProductTagsViewResponse, ProductBulkAssets, Items, BulkAssetResponse, ItemQuery, GTIN, SetSize, SizeDistribution, InventorySet, InvSize, InventoryRequest, InventoryRequest1, CommonResponse, BulkRequestGet, Size1, InventoryBulkRequest, InventoryExportRequest, InventoryExportJob, FilerList, InventoryConfig, GetAddressSerializer, Document, Website, BusinessDetails, SellerPhoneNumber, ContactDetails, BusinessCountryInfo, GetCompanyProfileSerializerResponse, CompanyAddress, ReferralInfo, BusinessCountryInfo1, CompanyStoreSerializerRequest, DocumentsObj, MetricsSerializer, BrandBannerSerializer, CreateUpdateBrandRequestSerializer, UserSerializer1, GetBrandResponseSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, LocationListSerializer, ProductReturnConfigSerializer, LocationTimingSerializer, LocationDayWiseSerializer, GetAddressSerializer1, InvoiceCredSerializer, InvoiceDetailsSerializer, LocationManagerSerializer, LocationSerializer, LocationIntegrationType, GetCompanySerializer, GetLocationSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, RewardPointsConfig, Credit, Debit, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPoints, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, ListingPageFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, Instagram, Twitter, Pinterest, GooglePlus, Youtube, LinkedIn, Vimeo, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, Auth, GoogleMap, GoogleMapCredentials, RuleDefinition, CouponDateMeta, Validation, Rule, Validity, Ownership, CouponAuthor, CouponAction, DisplayMetaDict, DisplayMeta, CouponSchedule, PriceRange, BulkBundleRestriction, PostOrder, UsesRemaining, UsesRestriction, PaymentAllowValue, PaymentModes, PaymentCodes, Restrictions, Identifier, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, StoreMapping, AllChannels, MyntraPayload, AmazonPayload, FlipkartPayload, TatacliqPayload, AjioPayload, InventorySyncConfig, StoreMappingPayload, StatusPayload, StatusResp, SyncPayload, SyncResp, MkpResp, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, DiscountJob, ListOrCalender, CreateUpdateDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails };
}
/**
        @typedef TicketList
        
        
        @property { Array<Ticket> } [items]
        
        @property { Filter } [filters]
        
        @property { Page } [page]
        
         
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
        @typedef Attributes
        
        
        @property { Array<Attribute> } [items]
        
        @property { Page } [page]
        
         
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
        @typedef ErrorResponse
        
        
        @property { Object } [code]
        
        @property { string } [exception]
        
        @property { string } [info]
        
        @property { Object } [meta]
        
        @property { string } [requestId]
        
        @property { string } [stackTrace]
        
        @property { number } [status]
        
         
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
        @typedef State
        
        
        @property { boolean } [active]
        
        @property { boolean } [archive]
        
        @property { string } [media]
        
        @property { boolean } [qna]
        
        @property { boolean } [rating]
        
        @property { boolean } [review]
        
         
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
        
        @property { State } [state]
        
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
        @typedef GetFaqCategoryByIdOrSlugSchema
        
        
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
        @typedef SearchKeywordResult
        
        
        @property { Object } query
        
        @property { string } sortOn
        
         
    */
/**
        @typedef CreateSearchKeyword
        
        
        @property { string } [appId]
        
        @property { SearchKeywordResult } result
        
        @property { Array<string> } [words]
        
        @property { Object } [customJson]
        
        @property { boolean } [isActive]
        
         
    */
/**
        @typedef GetSearchWordsData
        
        
        @property { string } [appId]
        
        @property { Object } [result]
        
        @property { string } [uid]
        
        @property { Array<string> } [words]
        
        @property { Object } [customJson]
        
         
    */
/**
        @typedef DeleteResponse
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef Page
        
        
        @property { number } [itemTotal]
        
        @property { boolean } [hasNext]
        
        @property { string } [nextPageId]
        
        @property { boolean } [hasPrevious]
        
        @property { number } [current]
        
         
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
        @typedef Media
        
        
        @property { string } [type]
        
        @property { string } [url]
        
         
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
        @typedef AutocompleteResult
        
        
        @property { string } [display]
        
        @property { Media } [logo]
        
        @property { Object } [customJson]
        
        @property { AutocompleteAction } [action]
        
         
    */
/**
        @typedef CreateAutocompleteKeyword
        
        
        @property { Array<AutocompleteResult> } [results]
        
        @property { string } [appId]
        
        @property { Array<string> } [words]
        
        @property { Object } [customJson]
        
        @property { boolean } [isActive]
        
         
    */
/**
        @typedef GetAutocompleteWordsData
        
        
        @property { Array<Object> } [results]
        
        @property { string } [appId]
        
        @property { string } [uid]
        
        @property { Array<string> } [words]
        
        @property { Object } [customJson]
        
         
    */
/**
        @typedef GetAutocompleteWordsResponse
        
        
        @property { Page } [page]
        
        @property { Array<GetAutocompleteWordsData> } [items]
        
         
    */
/**
        @typedef CreateAutocompleteWordsResponse
        
        
        @property { string } [appId]
        
        @property { Object } [customJson]
        
        @property { Array<Object> } [results]
        
        @property { Array<string> } [words]
        
         
    */
/**
        @typedef ProductBundleItem
        
        
        @property { number } maxQuantity
        
        @property { boolean } [allowRemove]
        
        @property { boolean } [autoAddToCart]
        
        @property { number } minQuantity
        
        @property { boolean } [autoSelect]
        
        @property { number } productUid
        
         
    */
/**
        @typedef ProductBundleRequest
        
        
        @property { Array<string> } [pageVisibility]
        
        @property { string } [logo]
        
        @property { string } choice
        
        @property { string } slug
        
        @property { string } [modifiedOn]
        
        @property { boolean } isActive
        
        @property { Object } [modifiedBy]
        
        @property { Object } [createdBy]
        
        @property { string } name
        
        @property { string } [createdOn]
        
        @property { Object } [meta]
        
        @property { boolean } [sameStoreAssignment]
        
        @property { Array<ProductBundleItem> } products
        
         
    */
/**
        @typedef GetProductBundleCreateResponse
        
        
        @property { Array<string> } [pageVisibility]
        
        @property { string } [id]
        
        @property { string } [logo]
        
        @property { string } choice
        
        @property { string } slug
        
        @property { string } [modifiedOn]
        
        @property { boolean } isActive
        
        @property { Object } [modifiedBy]
        
        @property { number } [companyId]
        
        @property { Object } [createdBy]
        
        @property { string } name
        
        @property { string } [createdOn]
        
        @property { Object } [meta]
        
        @property { boolean } [sameStoreAssignment]
        
        @property { Array<ProductBundleItem> } products
        
         
    */
/**
        @typedef GetProductBundleListingResponse
        
        
        @property { Page } [page]
        
        @property { Array<GetProductBundleCreateResponse> } [items]
        
         
    */
/**
        @typedef ProductBundleUpdateRequest
        
        
        @property { Array<string> } [pageVisibility]
        
        @property { string } [logo]
        
        @property { string } choice
        
        @property { string } slug
        
        @property { string } [modifiedOn]
        
        @property { boolean } isActive
        
        @property { Object } [modifiedBy]
        
        @property { string } name
        
        @property { Object } [meta]
        
        @property { boolean } [sameStoreAssignment]
        
        @property { Array<ProductBundleItem> } products
        
         
    */
/**
        @typedef LimitedProductData
        
        
        @property { number } [quantity]
        
        @property { Array<string> } [images]
        
        @property { string } [slug]
        
        @property { string } [itemCode]
        
        @property { string } [countryOfOrigin]
        
        @property { number } [uid]
        
        @property { Object } [price]
        
        @property { string } [name]
        
        @property { string } [shortDescription]
        
        @property { Object } [attributes]
        
        @property { Object } [identifier]
        
        @property { Array<string> } [sizes]
        
         
    */
/**
        @typedef Price
        
        
        @property { string } [currency]
        
        @property { number } [minMarked]
        
        @property { number } [maxMarked]
        
        @property { number } [minEffective]
        
        @property { number } [maxEffective]
        
         
    */
/**
        @typedef Size
        
        
        @property { number } [quantity]
        
        @property { string } [display]
        
        @property { string } [value]
        
        @property { boolean } [isAvailable]
        
         
    */
/**
        @typedef GetProducts
        
        
        @property { LimitedProductData } [productDetails]
        
        @property { number } [maxQuantity]
        
        @property { boolean } [allowRemove]
        
        @property { boolean } [autoAddToCart]
        
        @property { number } [minQuantity]
        
        @property { Price } [price]
        
        @property { boolean } [autoSelect]
        
        @property { number } [productUid]
        
        @property { Array<Size> } [sizes]
        
         
    */
/**
        @typedef GetProductBundleResponse
        
        
        @property { Array<string> } [pageVisibility]
        
        @property { string } [logo]
        
        @property { string } [choice]
        
        @property { string } [slug]
        
        @property { boolean } [isActive]
        
        @property { number } [companyId]
        
        @property { string } [name]
        
        @property { Object } [meta]
        
        @property { boolean } [sameStoreAssignment]
        
        @property { Array<GetProducts> } [products]
        
         
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
        
        
        @property { string } [id]
        
        @property { boolean } [active]
        
        @property { string } [modifiedOn]
        
        @property { Guide } [guide]
        
        @property { string } title
        
        @property { number } [companyId]
        
        @property { Object } [modifiedBy]
        
        @property { string } name
        
        @property { number } [brandId]
        
        @property { string } [createdOn]
        
        @property { string } [subtitle]
        
        @property { string } [tag]
        
        @property { string } [description]
        
        @property { Object } [createdBy]
        
        @property { string } [image]
        
         
    */
/**
        @typedef SuccessResponse
        
        
        @property { boolean } [success]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef ListSizeGuide
        
        
        @property { Object } [page]
        
        @property { Array<Object> } [items]
        
         
    */
/**
        @typedef SizeGuideResponse
        
        
        @property { string } [id]
        
        @property { string } [modifiedOn]
        
        @property { Object } [guide]
        
        @property { Object } [modifiedBy]
        
        @property { number } [companyId]
        
        @property { string } [title]
        
        @property { string } [name]
        
        @property { number } [brandId]
        
        @property { string } [createdOn]
        
        @property { string } [tag]
        
        @property { boolean } [active]
        
        @property { string } [subtitle]
        
        @property { Object } [createdBy]
        
         
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
        
        
        @property { Array<Object> } [units]
        
        @property { string } [display]
        
        @property { Array<string> } [filterTypes]
        
        @property { string } [key]
        
         
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
        @typedef GetCatalogConfigurationDetailsProduct
        
        
        @property { Object } [compare]
        
        @property { Object } [detail]
        
        @property { Object } [variant]
        
        @property { Object } [similar]
        
         
    */
/**
        @typedef GetCatalogConfigurationMetaData
        
        
        @property { MetaDataListingResponse } [listing]
        
        @property { GetCatalogConfigurationDetailsProduct } [product]
        
         
    */
/**
        @typedef ConfigurationListingSortConfig
        
        
        @property { string } [logo]
        
        @property { string } key
        
        @property { string } [name]
        
        @property { number } priority
        
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
        
        
        @property { string } [condition]
        
        @property { Object } [map]
        
        @property { Array<ConfigurationBucketPoints> } [bucketPoints]
        
        @property { string } [sort]
        
        @property { string } [value]
        
         
    */
/**
        @typedef ConfigurationListingFilterConfig
        
        
        @property { string } type
        
        @property { string } [logo]
        
        @property { string } key
        
        @property { ConfigurationListingFilterValue } [valueConfig]
        
        @property { string } [name]
        
        @property { number } priority
        
        @property { boolean } isActive
        
         
    */
/**
        @typedef ConfigurationListingFilter
        
        
        @property { boolean } allowSingle
        
        @property { Array<ConfigurationListingFilterConfig> } [attributeConfig]
        
         
    */
/**
        @typedef ConfigurationListing
        
        
        @property { ConfigurationListingSort } sort
        
        @property { ConfigurationListingFilter } filter
        
         
    */
/**
        @typedef ProductSize
        
        
        @property { number } min
        
        @property { number } max
        
         
    */
/**
        @typedef ConfigurationProductVariantConfig
        
        
        @property { ProductSize } size
        
        @property { string } [logo]
        
        @property { string } key
        
        @property { string } name
        
        @property { number } priority
        
        @property { string } displayType
        
        @property { boolean } isActive
        
         
    */
/**
        @typedef ConfigurationProductVariant
        
        
        @property { Array<ConfigurationProductVariantConfig> } [config]
        
         
    */
/**
        @typedef ConfigurationProductConfig
        
        
        @property { ProductSize } [size]
        
        @property { string } [logo]
        
        @property { string } key
        
        @property { string } [title]
        
        @property { number } priority
        
        @property { string } [subtitle]
        
        @property { boolean } isActive
        
         
    */
/**
        @typedef ConfigurationProductSimilar
        
        
        @property { Array<ConfigurationProductConfig> } [config]
        
         
    */
/**
        @typedef ConfigurationProduct
        
        
        @property { ConfigurationProductVariant } variant
        
        @property { ConfigurationProductSimilar } similar
        
         
    */
/**
        @typedef AppConfiguration
        
        
        @property { ConfigurationListing } [listing]
        
        @property { string } configType
        
        @property { string } appId
        
        @property { string } [configId]
        
        @property { ConfigurationProduct } [product]
        
         
    */
/**
        @typedef AppCatalogConfiguration
        
        
        @property { ConfigurationListing } [listing]
        
        @property { string } configType
        
        @property { string } [id]
        
        @property { string } appId
        
        @property { string } [configId]
        
        @property { ConfigurationProduct } [product]
        
         
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
        
        
        @property { GetCatalogConfigurationDetailsSchemaListing } [listing]
        
        @property { string } configType
        
        @property { string } [id]
        
        @property { string } appId
        
        @property { string } [configId]
        
        @property { GetCatalogConfigurationDetailsProduct } [product]
        
         
    */
/**
        @typedef GetAppCatalogEntityConfiguration
        
        
        @property { EntityConfiguration } [data]
        
        @property { boolean } [isDefault]
        
         
    */
/**
        @typedef ProductFiltersKey
        
        
        @property { string } name
        
        @property { string } display
        
        @property { string } [logo]
        
        @property { string } [kind]
        
         
    */
/**
        @typedef ProductFiltersValue
        
        
        @property { string } [currencyCode]
        
        @property { string } [displayFormat]
        
        @property { boolean } isSelected
        
        @property { number } [max]
        
        @property { number } [selectedMin]
        
        @property { string } [queryFormat]
        
        @property { number } [count]
        
        @property { number } [min]
        
        @property { string } display
        
        @property { string } value
        
        @property { string } [currencySymbol]
        
        @property { number } [selectedMax]
        
         
    */
/**
        @typedef ProductFilters
        
        
        @property { ProductFiltersKey } key
        
        @property { Array<ProductFiltersValue> } values
        
         
    */
/**
        @typedef ProductSortOn
        
        
        @property { string } [name]
        
        @property { string } [value]
        
        @property { boolean } [isSelected]
        
         
    */
/**
        @typedef GetCollectionQueryOptionResponse
        
        
        @property { Array<ProductFilters> } [filters]
        
        @property { Array<ProductSortOn> } [sortOn]
        
         
    */
/**
        @typedef CollectionImage
        
        
        @property { string } url
        
        @property { string } aspectRatio
        
         
    */
/**
        @typedef Schedule
        
        
        @property { string } [end]
        
        @property { number } [duration]
        
        @property { string } [start]
        
        @property { string } [cron]
        
         
    */
/**
        @typedef UserInfo
        
        
        @property { string } [userId]
        
        @property { string } [username]
        
        @property { string } [email]
        
        @property { string } [uid]
        
         
    */
/**
        @typedef CollectionBanner
        
        
        @property { CollectionImage } portrait
        
        @property { CollectionImage } landscape
        
         
    */
/**
        @typedef SeoDetail
        
        
        @property { string } [title]
        
        @property { string } [description]
        
         
    */
/**
        @typedef CollectionBadge
        
        
        @property { string } [text]
        
        @property { string } [color]
        
         
    */
/**
        @typedef CreateCollection
        
        
        @property { string } slug
        
        @property { Object } [localeLanguage]
        
        @property { string } appId
        
        @property { boolean } [allowSort]
        
        @property { boolean } [published]
        
        @property { string } name
        
        @property { string } [sortOn]
        
        @property { Object } [meta]
        
        @property { boolean } [allowFacets]
        
        @property { CollectionImage } logo
        
        @property { Schedule } [schedule]
        
        @property { UserInfo } [modifiedBy]
        
        @property { Object } [query]
        
        @property { Array<string> } [tags]
        
        @property { CollectionBanner } banners
        
        @property { SeoDetail } [seo]
        
        @property { UserInfo } [createdBy]
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { string } type
        
        @property { CollectionBadge } [badge]
        
        @property { Object } [customJson]
        
        @property { string } [description]
        
        @property { boolean } [isActive]
        
         
    */
/**
        @typedef BannerImage
        
        
        @property { string } [url]
        
        @property { string } [aspectRatio]
        
         
    */
/**
        @typedef ImageUrls
        
        
        @property { BannerImage } [portrait]
        
        @property { BannerImage } [landscape]
        
         
    */
/**
        @typedef CollectionCreateResponse
        
        
        @property { boolean } [allowFacets]
        
        @property { string } [type]
        
        @property { BannerImage } [logo]
        
        @property { Object } [schedule]
        
        @property { string } [slug]
        
        @property { string } [appId]
        
        @property { Object } [query]
        
        @property { ImageUrls } [banners]
        
        @property { string } [name]
        
        @property { Object } [meta]
        
        @property { Object } [badge]
        
        @property { boolean } [allowSort]
        
        @property { string } [description]
        
        @property { Object } [cron]
        
        @property { Array<string> } [tag]
        
        @property { boolean } [isActive]
        
        @property { Array<string> } [visibleFacetsKeys]
        
         
    */
/**
        @typedef CollectionListingFilterType
        
        
        @property { string } [name]
        
        @property { string } [display]
        
        @property { boolean } [isSelected]
        
         
    */
/**
        @typedef CollectionListingFilterTag
        
        
        @property { string } [name]
        
        @property { string } [display]
        
        @property { boolean } [isSelected]
        
         
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
        
        
        @property { string } [type]
        
        @property { string } url
        
        @property { Object } [meta]
        
         
    */
/**
        @typedef GetCollectionDetailNest
        
        
        @property { string } [slug]
        
        @property { string } [appId]
        
        @property { boolean } [allowSort]
        
        @property { string } [uid]
        
        @property { string } [name]
        
        @property { Object } [meta]
        
        @property { Object } [cron]
        
        @property { ProductListingAction } [action]
        
        @property { boolean } [allowFacets]
        
        @property { Media1 } [logo]
        
        @property { Object } [schedule]
        
        @property { Object } [query]
        
        @property { ImageUrls } [banners]
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { string } [type]
        
        @property { Object } [badge]
        
        @property { string } [description]
        
        @property { Array<string> } [tag]
        
        @property { boolean } [isActive]
        
         
    */
/**
        @typedef GetCollectionListingResponse
        
        
        @property { Page } [page]
        
        @property { CollectionListingFilter } [filters]
        
        @property { Array<GetCollectionDetailNest> } [items]
        
         
    */
/**
        @typedef CollectionDetailResponse
        
        
        @property { boolean } [allowFacets]
        
        @property { string } [type]
        
        @property { Media1 } [logo]
        
        @property { Object } [schedule]
        
        @property { string } [slug]
        
        @property { string } [appId]
        
        @property { Object } [query]
        
        @property { ImageUrls } [banners]
        
        @property { string } [name]
        
        @property { Object } [meta]
        
        @property { Object } [badge]
        
        @property { boolean } [allowSort]
        
        @property { string } [description]
        
        @property { Object } [cron]
        
        @property { Array<string> } [tag]
        
        @property { boolean } [isActive]
        
        @property { Array<string> } [visibleFacetsKeys]
        
         
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
        
        @property { string } [currencyCode]
        
        @property { string } [currencySymbol]
        
        @property { number } [max]
        
         
    */
/**
        @typedef ProductListingPrice
        
        
        @property { Price1 } [effective]
        
        @property { Price1 } [marked]
        
         
    */
/**
        @typedef ProductListingDetail
        
        
        @property { string } slug
        
        @property { string } [productOnlineDate]
        
        @property { boolean } [hasVariant]
        
        @property { number } [ratingCount]
        
        @property { string } [color]
        
        @property { Array<string> } [highlights]
        
        @property { Array<string> } [tryouts]
        
        @property { Array<string> } [similars]
        
        @property { number } [uid]
        
        @property { string } [name]
        
        @property { Array<Media1> } [medias]
        
        @property { ProductListingPrice } [price]
        
        @property { number } [rating]
        
        @property { string } [imageNature]
        
        @property { Object } [promoMeta]
        
        @property { boolean } [sellable]
        
        @property { Object } [attributes]
        
        @property { string } [itemType]
        
        @property { string } [type]
        
        @property { string } [discount]
        
        @property { Object } [teaserTag]
        
        @property { string } [shortDescription]
        
        @property { string } [description]
        
         
    */
/**
        @typedef GetCollectionItemsResponse
        
        
        @property { Page } [page]
        
        @property { Array<ProductFilters> } [filters]
        
        @property { Array<ProductSortOn> } [sortOn]
        
        @property { Array<ProductListingDetail> } [items]
        
         
    */
/**
        @typedef CatalogInsightBrand
        
        
        @property { number } [totalArticles]
        
        @property { number } [availableArticles]
        
        @property { number } [availableSizes]
        
        @property { string } [name]
        
        @property { number } [totalSizes]
        
        @property { number } [articleFreshness]
        
         
    */
/**
        @typedef CatalogInsightItem
        
        
        @property { number } [outOfStockCount]
        
        @property { number } [sellableCount]
        
        @property { number } [count]
        
         
    */
/**
        @typedef CatalogInsightResponse
        
        
        @property { CatalogInsightBrand } [brandDistribution]
        
        @property { CatalogInsightItem } [item]
        
         
    */
/**
        @typedef CrossSellingData
        
        
        @property { number } [articles]
        
        @property { number } [products]
        
         
    */
/**
        @typedef CrossSellingResponse
        
        
        @property { CatalogInsightBrand } [brandDistribution]
        
        @property { CrossSellingData } [data]
        
         
    */
/**
        @typedef OptInPostRequest
        
        
        @property { boolean } [enabled]
        
        @property { string } optLevel
        
        @property { Array<number> } [storeIds]
        
        @property { Array<number> } [brandIds]
        
         
    */
/**
        @typedef CompanyOptIn
        
        
        @property { boolean } enabled
        
        @property { Array<number> } brandIds
        
        @property { number } modifiedOn
        
        @property { number } companyId
        
        @property { Object } [modifiedBy]
        
        @property { number } createdOn
        
        @property { string } optLevel
        
        @property { Object } [createdBy]
        
        @property { string } platform
        
        @property { Array<number> } storeIds
        
         
    */
/**
        @typedef GetOptInPlatform
        
        
        @property { Page } page
        
        @property { Array<CompanyOptIn> } items
        
         
    */
/**
        @typedef OptinCompanyDetail
        
        
        @property { string } [name]
        
        @property { string } [companyType]
        
        @property { string } [businessType]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef CompanyBrandDetail
        
        
        @property { string } [brandName]
        
        @property { number } [companyId]
        
        @property { number } [brandId]
        
        @property { number } [totalArticle]
        
         
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
        
        
        @property { string } [storeType]
        
        @property { string } [modifiedOn]
        
        @property { string } [storeCode]
        
        @property { number } [companyId]
        
        @property { number } [uid]
        
        @property { string } [name]
        
        @property { string } [displayName]
        
        @property { string } [createdOn]
        
        @property { Array<Object> } [additionalContacts]
        
        @property { Object } [timing]
        
        @property { Array<Object> } [documents]
        
         
    */
/**
        @typedef OptinStoreDetails
        
        
        @property { Page } [page]
        
        @property { Array<StoreDetail> } [items]
        
         
    */
/**
        @typedef BasePage
        
        
        @property { number } [size]
        
        @property { number } [itemTotal]
        
        @property { boolean } [hasNext]
        
        @property { boolean } [hasPrevious]
        
        @property { number } [current]
        
         
    */
/**
        @typedef MultipleCommon
        
        
        @property { string } [uid]
        
         
    */
/**
        @typedef ProdcutTemplateCategoriesResponse
        
        
        @property { BasePage } [page]
        
        @property { MultipleCommon } [items]
        
         
    */
/**
        @typedef PTErrorResponse
        
        
        @property { string } [code]
        
        @property { Object } [errors]
        
        @property { string } [message]
        
        @property { Object } [meta]
        
        @property { number } [status]
        
         
    */
/**
        @typedef BasePage1
        
        
        @property { number } [itemTotal]
        
        @property { boolean } [hasNext]
        
        @property { boolean } [hasPrevious]
        
        @property { string } [nextPageId]
        
         
    */
/**
        @typedef UserSerializer
        
        
        @property { string } [username]
        
        @property { string } [contact]
        
        @property { string } [userId]
        
         
    */
/**
        @typedef GetDepartment
        
        
        @property { string } [logo]
        
        @property { number } [priorityOrder]
        
        @property { string } [slug]
        
        @property { Array<string> } [synonyms]
        
        @property { string } [modifiedOn]
        
        @property { string } [search]
        
        @property { UserSerializer } [modifiedBy]
        
        @property { UserSerializer } [createdBy]
        
        @property { number } [uid]
        
        @property { string } [name]
        
        @property { number } [pageSize]
        
        @property { string } [createdOn]
        
        @property { string } [itemType]
        
        @property { number } [pageNo]
        
        @property { boolean } [isActive]
        
         
    */
/**
        @typedef DepartmentsResponse
        
        
        @property { BasePage1 } [page]
        
        @property { Array<GetDepartment> } [items]
        
         
    */
/**
        @typedef DepartmentErrorResponse
        
        
        @property { string } [code]
        
        @property { Object } [errors]
        
        @property { string } [message]
        
        @property { Object } [meta]
        
        @property { number } [status]
        
         
    */
/**
        @typedef ProductTemplate
        
        
        @property { Array<string> } [departments]
        
        @property { string } [logo]
        
        @property { string } slug
        
        @property { string } [modifiedOn]
        
        @property { Object } [modifiedBy]
        
        @property { boolean } [isArchived]
        
        @property { Object } [createdBy]
        
        @property { string } [name]
        
        @property { string } [createdOn]
        
        @property { Array<string> } [attributes]
        
        @property { string } [tag]
        
        @property { string } [description]
        
        @property { boolean } [isActive]
        
        @property { Array<string> } [categories]
        
        @property { boolean } isPhysical
        
         
    */
/**
        @typedef TemplatesResponse
        
        
        @property { BasePage } [page]
        
        @property { ProductTemplate } [items]
        
         
    */
/**
        @typedef TemplatesValidationResponse
        
        
        @property { MultipleCommon } [data]
        
         
    */
/**
        @typedef InventoryValidationResponse
        
        
        @property { MultipleCommon } [data]
        
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
        @typedef ProductConfligurationDownloads
        
        
        @property { Array<MultipleCommon> } [data]
        
        @property { boolean } [multivalue]
        
         
    */
/**
        @typedef Media2
        
        
        @property { string } landscape
        
        @property { string } portrait
        
        @property { string } logo
        
         
    */
/**
        @typedef Hierarchy
        
        
        @property { number } l1
        
        @property { number } l2
        
        @property { number } department
        
         
    */
/**
        @typedef CategoryMappingValues
        
        
        @property { string } name
        
        @property { number } [catalogId]
        
         
    */
/**
        @typedef CategoryMapping
        
        
        @property { CategoryMappingValues } [ajio]
        
        @property { CategoryMappingValues } [google]
        
        @property { CategoryMappingValues } [facebook]
        
         
    */
/**
        @typedef CategoryRequestBody
        
        
        @property { Media2 } [media]
        
        @property { Array<number> } departments
        
        @property { Array<Hierarchy> } [hierarchy]
        
        @property { string } [slug]
        
        @property { Array<string> } [synonyms]
        
        @property { Array<string> } [tryouts]
        
        @property { boolean } isActive
        
        @property { string } name
        
        @property { number } [priority]
        
        @property { CategoryMapping } [marketplaces]
        
        @property { number } level
        
         
    */
/**
        @typedef CategoryCreateResponse
        
        
        @property { string } [message]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef Category
        
        
        @property { Media2 } [media]
        
        @property { Array<number> } departments
        
        @property { Array<Hierarchy> } [hierarchy]
        
        @property { string } [slug]
        
        @property { Array<string> } [synonyms]
        
        @property { Array<string> } [tryouts]
        
        @property { boolean } isActive
        
        @property { Object } [modifiedBy]
        
        @property { string } [modifiedOn]
        
        @property { Object } [createdBy]
        
        @property { string } [id]
        
        @property { number } [uid]
        
        @property { string } name
        
        @property { string } [createdOn]
        
        @property { number } [priority]
        
        @property { CategoryMapping } [marketplaces]
        
        @property { number } level
        
         
    */
/**
        @typedef CategoryResponse
        
        
        @property { BasePage1 } [page]
        
        @property { Array<Category> } [items]
        
         
    */
/**
        @typedef CategoryUpdateResponse
        
        
        @property { boolean } [success]
        
        @property { string } [message]
        
         
    */
/**
        @typedef CustomOrder
        
        
        @property { string } [manufacturingTimeUnit]
        
        @property { number } [manufacturingTime]
        
        @property { boolean } [isCustomOrder]
        
         
    */
/**
        @typedef Trader
        
        
        @property { string } name
        
        @property { string } address
        
         
    */
/**
        @typedef OrderQuantity
        
        
        @property { number } [maximum]
        
        @property { number } [minimum]
        
        @property { boolean } [isSet]
        
         
    */
/**
        @typedef ProductPublish
        
        
        @property { string } [productOnlineDate]
        
        @property { boolean } [isSet]
        
         
    */
/**
        @typedef ReturnConfig
        
        
        @property { string } [unit]
        
        @property { boolean } [returnable]
        
        @property { number } [time]
        
         
    */
/**
        @typedef TeaserTag
        
        
        @property { string } [url]
        
        @property { string } [tag]
        
         
    */
/**
        @typedef ProductCreateUpdate
        
        
        @property { Array<number> } departments
        
        @property { boolean } [multiSize]
        
        @property { CustomOrder } [customOrder]
        
        @property { string } slug
        
        @property { string } [changeRequestId]
        
        @property { Trader } [trader]
        
        @property { OrderQuantity } [moq]
        
        @property { string } [requester]
        
        @property { Array<string> } [highlights]
        
        @property { number } companyId
        
        @property { string } [sizeGuide]
        
        @property { number } [uid]
        
        @property { string } name
        
        @property { boolean } [isDependent]
        
        @property { string } hsnCode
        
        @property { string } templateTag
        
        @property { boolean } [isSet]
        
        @property { ProductPublish } [productPublish]
        
        @property { Array<string> } [tags]
        
        @property { number } brandUid
        
        @property { string } itemType
        
        @property { string } countryOfOrigin
        
        @property { string } categorySlug
        
        @property { Array<Media1> } [media]
        
        @property { string } [traderType]
        
        @property { Object } [variants]
        
        @property { string } itemCode
        
        @property { number } [noOfBoxes]
        
        @property { ReturnConfig } [returnConfig]
        
        @property { Array<string> } [productGroupTag]
        
        @property { boolean } [isImageLessProduct]
        
        @property { TeaserTag } [teaserTag]
        
        @property { string } [shortDescription]
        
        @property { Object } [customJson]
        
        @property { string } [description]
        
        @property { boolean } [isActive]
        
        @property { string } currency
        
         
    */
/**
        @typedef PageData
        
        
        @property { number } [size]
        
        @property { number } [itemTotal]
        
        @property { boolean } [hasNext]
        
        @property { boolean } [hasPrevious]
        
        @property { string } [current]
        
         
    */
/**
        @typedef Logo
        
        
        @property { number } [aspectRatioF]
        
        @property { string } [url]
        
        @property { string } [secureUrl]
        
        @property { string } [aspectRatio]
        
         
    */
/**
        @typedef Brand
        
        
        @property { string } [name]
        
        @property { Logo } [logo]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef ProductPublished
        
        
        @property { number } [productOnlineDate]
        
        @property { boolean } [isSet]
        
         
    */
/**
        @typedef UserCommon
        
        
        @property { string } [username]
        
        @property { number } [companyId]
        
        @property { string } [userId]
        
         
    */
/**
        @typedef VerifiedBy
        
        
        @property { string } [username]
        
        @property { string } [userId]
        
         
    */
/**
        @typedef Product
        
        
        @property { string } [id]
        
        @property { Array<number> } [departments]
        
        @property { boolean } [multiSize]
        
        @property { string } [slug]
        
        @property { Array<string> } [allSizes]
        
        @property { Array<string> } [images]
        
        @property { Brand } [brand]
        
        @property { string } [highlights]
        
        @property { number } [companyId]
        
        @property { string } [sizeGuide]
        
        @property { number } [uid]
        
        @property { string } [name]
        
        @property { boolean } [isDependent]
        
        @property { string } [hsnCode]
        
        @property { string } [templateTag]
        
        @property { boolean } [isSet]
        
        @property { ProductPublished } [productPublish]
        
        @property { Attributes } [attributes]
        
        @property { string } [itemType]
        
        @property { string } [countryOfOrigin]
        
        @property { string } [categorySlug]
        
        @property { Array<string> } [media]
        
        @property { string } [itemCode]
        
        @property { string } [description]
        
        @property { boolean } [isActive]
        
        @property { string } [currency]
        
        @property { Array<Object> } [sizes]
        
         
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
        @typedef UserInfo1
        
        
        @property { string } [userId]
        
        @property { string } [username]
        
        @property { string } [email]
        
        @property { string } [uid]
        
         
    */
/**
        @typedef BulkJob
        
        
        @property { Array<Object> } [cancelledRecords]
        
        @property { string } [filePath]
        
        @property { number } total
        
        @property { string } [modifiedOn]
        
        @property { number } [succeed]
        
        @property { number } [failed]
        
        @property { string } [stage]
        
        @property { UserInfo1 } [modifiedBy]
        
        @property { number } companyId
        
        @property { UserInfo1 } [createdBy]
        
        @property { string } [customTemplateTag]
        
        @property { string } [trackingUrl]
        
        @property { string } createdOn
        
        @property { number } [cancelled]
        
        @property { boolean } [isActive]
        
        @property { string } [templateTag]
        
        @property { Array<Object> } [failedRecords]
        
         
    */
/**
        @typedef UserDetail
        
        
        @property { string } [username]
        
        @property { string } [fullName]
        
        @property { string } [userId]
        
         
    */
/**
        @typedef ProductBulkRequest
        
        
        @property { Array<string> } [cancelledRecords]
        
        @property { string } [filePath]
        
        @property { number } [total]
        
        @property { string } [modifiedOn]
        
        @property { string } [stage]
        
        @property { number } [failed]
        
        @property { number } [succeed]
        
        @property { number } [companyId]
        
        @property { UserDetail } [modifiedBy]
        
        @property { UserDetail } [createdBy]
        
        @property { string } [createdOn]
        
        @property { number } [cancelled]
        
        @property { ProductTemplate } [template]
        
        @property { boolean } [isActive]
        
        @property { string } [templateTag]
        
        @property { Array<string> } [failedRecords]
        
         
    */
/**
        @typedef ProductBulkRequestList
        
        
        @property { PageData } [page]
        
        @property { ProductBulkRequest } [items]
        
         
    */
/**
        @typedef BulkProductRequest
        
        
        @property { string } templateTag
        
        @property { string } batchId
        
        @property { number } companyId
        
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
        @typedef ProductBulkAssets
        
        
        @property { number } [companyId]
        
        @property { string } url
        
        @property { Object } user
        
         
    */
/**
        @typedef Items
        
        
        @property { string } [id]
        
        @property { Array<string> } [cancelledRecords]
        
        @property { string } [filePath]
        
        @property { number } [total]
        
        @property { string } [modifiedOn]
        
        @property { number } [succeed]
        
        @property { number } [failed]
        
        @property { string } [stage]
        
        @property { UserCommon } [modifiedBy]
        
        @property { boolean } [isActive]
        
        @property { number } [retry]
        
        @property { number } [companyId]
        
        @property { string } [trackingUrl]
        
        @property { string } [createdOn]
        
        @property { number } [cancelled]
        
        @property { UserCommon } [createdBy]
        
        @property { Array<string> } [failedRecords]
        
         
    */
/**
        @typedef BulkAssetResponse
        
        
        @property { PageData } [page]
        
        @property { Array<Items> } [items]
        
         
    */
/**
        @typedef ItemQuery
        
        
        @property { string } [itemCode]
        
        @property { number } [brandUid]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef GTIN
        
        
        @property { string } gtinValue
        
        @property { string } gtinType
        
        @property { boolean } [primary]
        
         
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
        
        
        @property { number } [quantity]
        
        @property { SizeDistribution } sizeDistribution
        
         
    */
/**
        @typedef InvSize
        
        
        @property { string } size
        
        @property { number } quantity
        
        @property { string } [itemWeightUnitOfMeasure]
        
        @property { string } [itemDimensionsUnitOfMeasure]
        
        @property { number } priceEffective
        
        @property { string } storeCode
        
        @property { Array<GTIN> } identifiers
        
        @property { InventorySet } [set]
        
        @property { number } price
        
        @property { number } [priceTransfer]
        
        @property { number } [itemWeight]
        
        @property { number } [itemHeight]
        
        @property { number } [itemWidth]
        
        @property { number } [itemLength]
        
        @property { string } currency
        
        @property { boolean } [isSet]
        
         
    */
/**
        @typedef InventoryRequest
        
        
        @property { number } companyId
        
        @property { ItemQuery } item
        
        @property { Array<InvSize> } sizes
        
         
    */
/**
        @typedef InventoryRequest1
        
        
        @property { string } [size]
        
        @property { number } [total]
        
        @property { string } [search]
        
        @property { number } [pageNo]
        
        @property { number } [pageSize]
        
         
    */
/**
        @typedef CommonResponse
        
        
        @property { string } [success]
        
         
    */
/**
        @typedef BulkRequestGet
        
        
        @property { string } [templateTag]
        
        @property { number } [total]
        
        @property { string } [stage]
        
        @property { string } [endDate]
        
        @property { string } [search]
        
        @property { string } [customTemplateTag]
        
        @property { number } [pageNo]
        
        @property { number } [pageSize]
        
        @property { string } [startDate]
        
         
    */
/**
        @typedef Size1
        
        
        @property { string } [size]
        
        @property { number } quantity
        
        @property { string } sellerIdentifier
        
        @property { string } [itemWeightUnitOfMeasure]
        
        @property { string } [itemDimensionsUnitOfMeasure]
        
        @property { number } priceEffective
        
        @property { string } storeCode
        
        @property { Array<Object> } [identifiers]
        
        @property { InventorySet } [set]
        
        @property { number } price
        
        @property { number } [priceTransfer]
        
        @property { number } [itemWeight]
        
        @property { number } [itemHeight]
        
        @property { number } [itemWidth]
        
        @property { number } [itemLength]
        
        @property { string } currency
        
        @property { boolean } [isSet]
        
         
    */
/**
        @typedef InventoryBulkRequest
        
        
        @property { string } batchId
        
        @property { number } companyId
        
        @property { Object } [user]
        
        @property { Array<Size1> } sizes
        
         
    */
/**
        @typedef InventoryExportRequest
        
        
        @property { string } [type]
        
        @property { Array<number> } [brand]
        
        @property { Array<number> } [store]
        
         
    */
/**
        @typedef InventoryExportJob
        
        
        @property { string } [completedOn]
        
        @property { string } [triggerOn]
        
        @property { number } sellerId
        
        @property { string } taskId
        
        @property { Object } [requestParams]
        
        @property { string } [status]
        
        @property { string } [url]
        
         
    */
/**
        @typedef FilerList
        
        
        @property { string } [display]
        
        @property { string } [value]
        
         
    */
/**
        @typedef InventoryConfig
        
        
        @property { boolean } [multivalues]
        
        @property { Array<FilerList> } [data]
        
         
    */
/**
        @typedef GetAddressSerializer
        
        
        @property { string } [country]
        
        @property { string } [addressType]
        
        @property { number } [latitude]
        
        @property { string } [landmark]
        
        @property { string } [address1]
        
        @property { number } [pincode]
        
        @property { string } [state]
        
        @property { string } [city]
        
        @property { number } [longitude]
        
        @property { string } [countryCode]
        
        @property { string } [address2]
        
         
    */
/**
        @typedef Document
        
        
        @property { string } value
        
        @property { boolean } [verified]
        
        @property { string } [url]
        
        @property { string } type
        
        @property { string } legalName
        
         
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
        @typedef SellerPhoneNumber
        
        
        @property { string } number
        
        @property { number } countryCode
        
         
    */
/**
        @typedef ContactDetails
        
        
        @property { Array<SellerPhoneNumber> } [phone]
        
        @property { Array<string> } [emails]
        
         
    */
/**
        @typedef BusinessCountryInfo
        
        
        @property { string } [countryCode]
        
        @property { string } [country]
        
         
    */
/**
        @typedef GetCompanyProfileSerializerResponse
        
        
        @property { string } [verifiedOn]
        
        @property { UserSerializer } [modifiedBy]
        
        @property { Array<GetAddressSerializer> } [addresses]
        
        @property { Object } [warnings]
        
        @property { string } businessType
        
        @property { number } uid
        
        @property { string } [createdOn]
        
        @property { string } companyType
        
        @property { Array<Document> } [documents]
        
        @property { string } [stage]
        
        @property { BusinessDetails } [businessDetails]
        
        @property { string } [modifiedOn]
        
        @property { string } [name]
        
        @property { ContactDetails } [contactDetails]
        
        @property { boolean } [franchiseEnabled]
        
        @property { string } [businessInfo]
        
        @property { Array<string> } [notificationEmails]
        
        @property { UserSerializer } [createdBy]
        
        @property { UserSerializer } [verifiedBy]
        
        @property { BusinessCountryInfo } [businessCountryInfo]
        
         
    */
/**
        @typedef CompanyAddress
        
        
        @property { string } country
        
        @property { number } latitude
        
        @property { string } [landmark]
        
        @property { number } pincode
        
        @property { string } address1
        
        @property { string } state
        
        @property { string } city
        
        @property { number } longitude
        
        @property { string } [countryCode]
        
        @property { string } [address2]
        
         
    */
/**
        @typedef ReferralInfo
        
        
        @property { string } [referralCode]
        
         
    */
/**
        @typedef BusinessCountryInfo1
        
        
        @property { string } [countryCode]
        
        @property { string } [country]
        
         
    */
/**
        @typedef CompanyStoreSerializerRequest
        
        
        @property { number } [uid]
        
        @property { Document } document
        
        @property { CompanyAddress } address
        
        @property { string } name
        
        @property { boolean } [franchiseEnabled]
        
        @property { Object } [warnings]
        
        @property { ReferralInfo } [referralInfo]
        
        @property { string } businessType
        
        @property { Array<number> } brands
        
        @property { Array<string> } [notificationEmails]
        
        @property { string } [businessInfo]
        
        @property { BusinessCountryInfo1 } businessCountryInfo
        
         
    */
/**
        @typedef DocumentsObj
        
        
        @property { number } [pending]
        
        @property { number } [verified]
        
         
    */
/**
        @typedef MetricsSerializer
        
        
        @property { DocumentsObj } [store]
        
        @property { number } [uid]
        
        @property { DocumentsObj } [storeDocuments]
        
        @property { DocumentsObj } [brand]
        
        @property { DocumentsObj } [companyDocuments]
        
        @property { string } [stage]
        
        @property { DocumentsObj } [product]
        
         
    */
/**
        @typedef BrandBannerSerializer
        
        
        @property { string } [landscape]
        
        @property { string } [portrait]
        
         
    */
/**
        @typedef CreateUpdateBrandRequestSerializer
        
        
        @property { Array<string> } [synonyms]
        
        @property { BrandBannerSerializer } [banner]
        
        @property { Object } [customJson]
        
        @property { number } [uid]
        
        @property { Object } [localeLanguage]
        
        @property { string } name
        
        @property { string } [description]
        
        @property { string } logo
        
        @property { string } [brandTier]
        
        @property { number } [companyId]
        
         
    */
/**
        @typedef UserSerializer1
        
        
        @property { string } [username]
        
        @property { string } [contact]
        
        @property { string } [userId]
        
         
    */
/**
        @typedef GetBrandResponseSerializer
        
        
        @property { Array<string> } [synonyms]
        
        @property { BrandBannerSerializer } [banner]
        
        @property { string } [verifiedOn]
        
        @property { Object } [customJson]
        
        @property { UserSerializer1 } [modifiedBy]
        
        @property { number } [uid]
        
        @property { string } [rejectReason]
        
        @property { string } [modifiedOn]
        
        @property { string } [createdOn]
        
        @property { UserSerializer1 } [createdBy]
        
        @property { string } name
        
        @property { Object } [localeLanguage]
        
        @property { string } [description]
        
        @property { string } [logo]
        
        @property { Object } [warnings]
        
        @property { string } [stage]
        
        @property { string } [slugKey]
        
        @property { UserSerializer1 } [verifiedBy]
        
         
    */
/**
        @typedef CompanyBrandListSerializer
        
        
        @property { Object } [page]
        
        @property { Array<Object> } [items]
        
         
    */
/**
        @typedef CompanyBrandPostRequestSerializer
        
        
        @property { number } company
        
        @property { Array<number> } brands
        
        @property { number } [uid]
        
         
    */
/**
        @typedef LocationListSerializer
        
        
        @property { Object } [page]
        
        @property { Array<Object> } [items]
        
         
    */
/**
        @typedef ProductReturnConfigSerializer
        
        
        @property { number } [storeUid]
        
        @property { boolean } [onSameStore]
        
         
    */
/**
        @typedef LocationTimingSerializer
        
        
        @property { number } [minute]
        
        @property { number } [hour]
        
         
    */
/**
        @typedef LocationDayWiseSerializer
        
        
        @property { boolean } open
        
        @property { LocationTimingSerializer } [closing]
        
        @property { string } weekday
        
        @property { LocationTimingSerializer } [opening]
        
         
    */
/**
        @typedef GetAddressSerializer1
        
        
        @property { string } [country]
        
        @property { string } [addressType]
        
        @property { number } [latitude]
        
        @property { string } [landmark]
        
        @property { string } [address1]
        
        @property { number } [pincode]
        
        @property { string } [state]
        
        @property { string } [city]
        
        @property { number } [longitude]
        
        @property { string } [countryCode]
        
        @property { string } [address2]
        
         
    */
/**
        @typedef InvoiceCredSerializer
        
        
        @property { string } [password]
        
        @property { boolean } [enabled]
        
        @property { string } [username]
        
         
    */
/**
        @typedef InvoiceDetailsSerializer
        
        
        @property { InvoiceCredSerializer } [eInvoice]
        
        @property { InvoiceCredSerializer } [eWaybill]
        
         
    */
/**
        @typedef LocationManagerSerializer
        
        
        @property { string } [email]
        
        @property { SellerPhoneNumber } mobileNo
        
        @property { string } [name]
        
         
    */
/**
        @typedef LocationSerializer
        
        
        @property { Object } [customJson]
        
        @property { ProductReturnConfigSerializer } [productReturnConfig]
        
        @property { number } [uid]
        
        @property { Array<LocationDayWiseSerializer> } [timing]
        
        @property { string } name
        
        @property { GetAddressSerializer1 } address
        
        @property { string } displayName
        
        @property { Array<Document> } [documents]
        
        @property { string } [stage]
        
        @property { Array<SellerPhoneNumber> } [contactNumbers]
        
        @property { Object } [warnings]
        
        @property { InvoiceDetailsSerializer } [gstCredentials]
        
        @property { string } code
        
        @property { number } company
        
        @property { LocationManagerSerializer } [manager]
        
        @property { string } [storeType]
        
        @property { Array<string> } [notificationEmails]
        
         
    */
/**
        @typedef LocationIntegrationType
        
        
        @property { string } [order]
        
        @property { string } [inventory]
        
         
    */
/**
        @typedef GetCompanySerializer
        
        
        @property { string } [verifiedOn]
        
        @property { UserSerializer } [modifiedBy]
        
        @property { number } [uid]
        
        @property { string } [rejectReason]
        
        @property { string } [modifiedOn]
        
        @property { string } [createdOn]
        
        @property { UserSerializer } [createdBy]
        
        @property { string } [name]
        
        @property { string } [companyType]
        
        @property { Array<GetAddressSerializer> } [addresses]
        
        @property { string } [stage]
        
        @property { string } [businessType]
        
        @property { UserSerializer } [verifiedBy]
        
         
    */
/**
        @typedef GetLocationSerializer
        
        
        @property { string } [verifiedOn]
        
        @property { Object } [customJson]
        
        @property { UserSerializer1 } [modifiedBy]
        
        @property { Array<LocationDayWiseSerializer> } [timing]
        
        @property { GetAddressSerializer } address
        
        @property { LocationIntegrationType } [integrationType]
        
        @property { Object } [warnings]
        
        @property { GetCompanySerializer } [company]
        
        @property { ProductReturnConfigSerializer } [productReturnConfig]
        
        @property { number } [uid]
        
        @property { string } [createdOn]
        
        @property { string } displayName
        
        @property { Array<Document> } [documents]
        
        @property { Array<SellerPhoneNumber> } [contactNumbers]
        
        @property { string } [stage]
        
        @property { string } [modifiedOn]
        
        @property { string } name
        
        @property { string } code
        
        @property { Array<string> } [notificationEmails]
        
        @property { UserSerializer1 } [createdBy]
        
        @property { InvoiceDetailsSerializer } [gstCredentials]
        
        @property { LocationManagerSerializer } [manager]
        
        @property { string } [storeType]
        
        @property { UserSerializer1 } [verifiedBy]
        
        @property { string } phoneNumber
        
         
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
        @typedef ErrorRes
        
        
        @property { string } [message]
        
         
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
        @typedef RuleDefinition
        
        
        @property { string } calculateOn
        
        @property { string } type
        
        @property { string } [currencyCode]
        
        @property { string } applicableOn
        
        @property { boolean } [autoApply]
        
        @property { Array<string> } [scope]
        
        @property { string } valueType
        
        @property { boolean } [isExact]
        
         
    */
/**
        @typedef CouponDateMeta
        
        
        @property { string } [createdOn]
        
        @property { string } [modifiedOn]
        
         
    */
/**
        @typedef Validation
        
        
        @property { boolean } [anonymous]
        
        @property { string } [userRegisteredAfter]
        
        @property { Array<string> } [appId]
        
         
    */
/**
        @typedef Rule
        
        
        @property { number } [discountQty]
        
        @property { number } [max]
        
        @property { number } [key]
        
        @property { number } [value]
        
        @property { number } [min]
        
         
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
        
        
        @property { string } [createdBy]
        
        @property { string } [modifiedBy]
        
         
    */
/**
        @typedef CouponAction
        
        
        @property { string } [actionDate]
        
        @property { string } [txnMode]
        
         
    */
/**
        @typedef DisplayMetaDict
        
        
        @property { string } [title]
        
        @property { string } [subtitle]
        
         
    */
/**
        @typedef DisplayMeta
        
        
        @property { string } [description]
        
        @property { DisplayMetaDict } [apply]
        
        @property { string } [subtitle]
        
        @property { DisplayMetaDict } [auto]
        
        @property { DisplayMetaDict } [remove]
        
        @property { string } [title]
        
         
    */
/**
        @typedef CouponSchedule
        
        
        @property { string } [cron]
        
        @property { Array<Object> } [nextSchedule]
        
        @property { string } [start]
        
        @property { string } [end]
        
        @property { number } [duration]
        
         
    */
/**
        @typedef PriceRange
        
        
        @property { number } [min]
        
        @property { number } [max]
        
         
    */
/**
        @typedef BulkBundleRestriction
        
        
        @property { boolean } multiStoreAllowed
        
         
    */
/**
        @typedef PostOrder
        
        
        @property { boolean } [cancellationAllowed]
        
        @property { boolean } [returnAllowed]
        
         
    */
/**
        @typedef UsesRemaining
        
        
        @property { number } [app]
        
        @property { number } [total]
        
        @property { number } [user]
        
         
    */
/**
        @typedef UsesRestriction
        
        
        @property { UsesRemaining } [remaining]
        
        @property { UsesRemaining } [maximum]
        
         
    */
/**
        @typedef PaymentAllowValue
        
        
        @property { number } [max]
        
         
    */
/**
        @typedef PaymentModes
        
        
        @property { Array<string> } [codes]
        
        @property { PaymentAllowValue } [uses]
        
        @property { Array<string> } [types]
        
        @property { Array<string> } [networks]
        
         
    */
/**
        @typedef PaymentCodes
        
        
        @property { PaymentModes } [qr]
        
        @property { PaymentModes } [nb]
        
        @property { PaymentModes } [pl]
        
        @property { PaymentModes } [upi]
        
        @property { PaymentModes } [card]
        
        @property { PaymentModes } [wl]
        
        @property { PaymentModes } [ps]
        
         
    */
/**
        @typedef Restrictions
        
        
        @property { PriceRange } [priceRange]
        
        @property { Array<number> } [orderingStores]
        
        @property { boolean } [couponAllowed]
        
        @property { BulkBundleRestriction } [bulkBundle]
        
        @property { PostOrder } [postOrder]
        
        @property { UsesRestriction } [uses]
        
        @property { Array<string> } [platforms]
        
        @property { PaymentCodes } [payments]
        
         
    */
/**
        @typedef Identifier
        
        
        @property { Array<string> } [userId]
        
        @property { Array<string> } [collectionId]
        
        @property { Array<number> } [storeId]
        
        @property { Array<number> } [brandId]
        
        @property { Array<number> } [itemId]
        
        @property { Array<number> } [companyId]
        
        @property { Array<string> } [articleId]
        
        @property { Array<number> } [categoryId]
        
         
    */
/**
        @typedef CouponAdd
        
        
        @property { RuleDefinition } ruleDefinition
        
        @property { string } typeSlug
        
        @property { CouponDateMeta } [dateMeta]
        
        @property { Validation } [validation]
        
        @property { Array<string> } [tags]
        
        @property { Array<Rule> } rule
        
        @property { State } [state]
        
        @property { Validity } validity
        
        @property { string } code
        
        @property { Ownership } ownership
        
        @property { CouponAuthor } [author]
        
        @property { CouponAction } [action]
        
        @property { DisplayMeta } displayMeta
        
        @property { CouponSchedule } [schedule]
        
        @property { Restrictions } [restrictions]
        
        @property { Identifier } identifiers
        
         
    */
/**
        @typedef CouponsResponse
        
        
        @property { CouponAdd } [items]
        
        @property { Page } [page]
        
         
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
        
        
        @property { RuleDefinition } ruleDefinition
        
        @property { string } typeSlug
        
        @property { CouponDateMeta } [dateMeta]
        
        @property { Validation } [validation]
        
        @property { Array<string> } [tags]
        
        @property { Array<Rule> } rule
        
        @property { State } [state]
        
        @property { Validity } validity
        
        @property { string } code
        
        @property { Ownership } ownership
        
        @property { CouponAuthor } [author]
        
        @property { CouponAction } [action]
        
        @property { DisplayMeta } displayMeta
        
        @property { CouponSchedule } [schedule]
        
        @property { Restrictions } [restrictions]
        
        @property { Identifier } identifiers
        
         
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
        
        @property { Validity } validity
        
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
        
        @property { Validity } validity
        
         
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
declare class Lead {
    constructor(config: any);
    config: any;
    /**
      *
      * @summary: Gets the list of company level tickets and/or ticket filters depending on query params
      * @description: Gets the list of company level tickets and/or ticket filters
      * @param {Object} arg - arg object.
      * @param {boolean} [arg.items] - Decides that the reponse will contain the list of tickets
      * @param {boolean} [arg.filters] - Decides that the reponse will contain the ticket filters
      * @param {string} [arg.q] - Search through ticket titles and description
      * @param {string} [arg.status] - Filter tickets on status
      * @param {string} [arg.priority] - Filter tickets on priority
      * @param {string} [arg.category] - Filter tickets on category
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
      
      **/
    getTickets({ items, filters, q, status, priority, category, pageNo, pageSize, }?: {
        items?: boolean;
        filters?: boolean;
        q?: string;
        status?: string;
        priority?: string;
        category?: string;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Gets the list of company level tickets and/or ticket filters depending on query params
      * @description: Gets the list of company level tickets and/or ticket filters
      * @param {Object} arg - arg object.
      * @param {boolean} [arg.items] - Decides that the reponse will contain the list of tickets
      * @param {boolean} [arg.filters] - Decides that the reponse will contain the ticket filters
      * @param {string} [arg.q] - Search through ticket titles and description
      * @param {string} [arg.status] - Filter tickets on status
      * @param {string} [arg.priority] - Filter tickets on priority
      * @param {string} [arg.category] - Filter tickets on category
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
      
      **/
    getTicketsPaginator({ items, filters, q, status, priority, category, pageSize, }?: {
        items?: boolean;
        filters?: boolean;
        q?: string;
        status?: string;
        priority?: string;
        category?: string;
        pageSize?: number;
    }): Paginator;
    /**
     *
     * @summary: Creates a company level ticket
     * @description: Creates a company level ticket
     * @param {Object} arg - arg object.
     * @param {AddTicketPayload} arg.body
     **/
    createTicket({ body }?: {
        body: AddTicketPayload;
    }): any;
    /**
      *
      * @summary: Retreives ticket details of a company level ticket with ticket ID
      * @description: Retreives ticket details of a company level ticket
      * @param {Object} arg - arg object.
      * @param {string} arg.ticketId - Tiket ID of the ticket to be fetched
      
      **/
    getTicket({ ticketId }?: {
        ticketId: string;
    }): any;
    /**
     *
     * @summary: Edits ticket details of a company level ticket
     * @description: Edits ticket details of a company level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes
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
     * @summary: Create history for specific company level ticket
     * @description: Create history for specific company level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
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
      * @summary: Gets history list for specific company level ticket
      * @description: Gets history list for specific company level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
      * @param {Object} arg - arg object.
      * @param {string} arg.ticketId - Ticket ID for which history is to be fetched
      
      **/
    getTicketHistory({ ticketId }?: {
        ticketId: string;
    }): any;
}
declare class Billing {
    constructor(config: any);
    config: any;
    /**
      *
      * @summary: Get invoices
      * @description: Get invoices.
      * @param {Object} arg - arg object.
      
      **/
    getInvoices({}?: any): any;
    /**
      *
      * @summary: Get invoice by id
      * @description: Get invoice by id.
      * @param {Object} arg - arg object.
      * @param {string} arg.invoiceId - Invoice id
      
      **/
    getInvoiceById({ invoiceId }?: {
        invoiceId: string;
    }): any;
    /**
      *
      * @summary: Get subscription customer detail
      * @description: Get subscription customer detail.
      * @param {Object} arg - arg object.
      
      **/
    getCustomerDetail({}?: any): any;
    /**
     *
     * @summary: Upsert subscription customer detail
     * @description: Upsert subscription customer detail.
     * @param {Object} arg - arg object.
     * @param {SubscriptionCustomerCreate} arg.body
     **/
    upsertCustomerDetail({ body }?: {
        body: SubscriptionCustomerCreate;
    }): any;
    /**
      *
      * @summary: Get current subscription detail
      * @description: If subscription is active then it will return is_enabled true and return subscription object. If subscription is not active then is_enabled false and message.
  
      * @param {Object} arg - arg object.
      
      **/
    getSubscription({}?: any): any;
    /**
      *
      * @summary: Get subscription subscription limits
      * @description: Get subscription subscription limits.
      * @param {Object} arg - arg object.
      
      **/
    getFeatureLimitConfig({}?: any): any;
    /**
     *
     * @summary: Activate subscription
     * @description: It will activate subscription plan for customer
     * @param {Object} arg - arg object.
     * @param {SubscriptionActivateReq} arg.body
     **/
    activateSubscriptionPlan({ body }?: {
        body: SubscriptionActivateReq;
    }): any;
    /**
     *
     * @summary: Cancel subscription
     * @description: It will cancel current active subscription.
     * @param {Object} arg - arg object.
     * @param {CancelSubscriptionReq} arg.body
     **/
    cancelSubscriptionPlan({ body }?: {
        body: CancelSubscriptionReq;
    }): any;
}
declare class Communication {
    constructor(config: any);
    config: any;
    /**
      *
      * @summary: Get system notifications
      * @description: Get system notifications
      * @param {Object} arg - arg object.
      * @param {Object} [arg.query] -
      * @param {number} [arg.pageNo] -
      * @param {number} [arg.pageSize] -
      
      **/
    getSystemNotifications({ query, pageNo, pageSize }?: {
        query?: any;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get system notifications
      * @description: Get system notifications
      * @param {Object} arg - arg object.
      * @param {Object} [arg.query] -
      * @param {number} [arg.pageSize] -
      
      **/
    getSystemNotificationsPaginator({ query, pageSize }?: {
        query?: any;
        pageSize?: number;
    }): Paginator;
}
declare class Payment {
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
declare class Order {
    constructor(config: any);
    config: any;
    /**
     *
     * @summary: Update status of Shipment
     * @description: Update Shipment Status
     * @param {Object} arg - arg object.
     * @param {UpdateShipmentStatusBody} arg.body
     **/
    shipmentStatusUpdate({ body }?: {
        body: UpdateShipmentStatusBody;
    }): any;
    /**
      *
      * @summary: Get Activity Status
      * @description: Get Activity Status
      * @param {Object} arg - arg object.
      * @param {string} arg.bagId - Bag Id
      
      **/
    activityStatus({ bagId }?: {
        bagId: string;
    }): any;
    /**
     *
     * @summary: Update Store Process-Shipment
     * @description: Update Store Process-Shipment
     * @param {Object} arg - arg object.
     * @param {UpdateProcessShipmenstRequestBody} arg.body
     **/
    storeProcessShipmentUpdate({ body }?: {
        body: UpdateProcessShipmenstRequestBody;
    }): any;
    /**
      *
      * @summary: Get Orders for company based on Company Id
      * @description: Get Orders
      * @param {Object} arg - arg object.
      * @param {string} [arg.pageNo] - Current page number
      * @param {string} [arg.pageSize] - Page limit
      * @param {string} [arg.fromDate] - From Date
      * @param {string} [arg.toDate] - To Date
      * @param {string} [arg.q] - Keyword for Search
      * @param {string} [arg.stage] - Specefic Order Stage
      * @param {string} [arg.salesChannels] - Selected Sales Channel
      * @param {string} [arg.orderId] - Order Id
      * @param {string} [arg.stores] - Selected Stores
      * @param {string} [arg.status] - Status of order
      * @param {boolean} [arg.shortenUrls] - Shorten URL option
      * @param {string} [arg.filterType] - Filters
      
      **/
    getOrdersByCompanyId({ pageNo, pageSize, fromDate, toDate, q, stage, salesChannels, orderId, stores, status, shortenUrls, filterType, }?: {
        pageNo?: string;
        pageSize?: string;
        fromDate?: string;
        toDate?: string;
        q?: string;
        stage?: string;
        salesChannels?: string;
        orderId?: string;
        stores?: string;
        status?: string;
        shortenUrls?: boolean;
        filterType?: string;
    }): any;
    /**
      *
      * @summary: Get Ping
      * @description: Get Ping
      * @param {Object} arg - arg object.
      
      **/
    getPing({}?: any): any;
    /**
      *
      * @summary: Get Voice Callback
      * @description: Voice Callback
      * @param {Object} arg - arg object.
      
      **/
    voiceCallback({}?: any): any;
    /**
      *
      * @summary: Get Voice Click to Call
      * @description: Voice Click to Call
      * @param {Object} arg - arg object.
      * @param {string} arg.caller - Caller contact number
      * @param {string} arg.receiver - Receiver contact number
      
      **/
    voiceClickToCall({ caller, receiver }?: {
        caller: string;
        receiver: string;
    }): any;
}
declare class Catalog {
    constructor(config: any);
    config: any;
    /**
     *
     * @summary: Create Product Bundle
     * @description: Create Product Bundle. See `ProductBundleRequest` for the request body parameter need to create a product bundle. On successful request, returns in `ProductBundleRequest` with id
     * @param {Object} arg - arg object.
     * @param {ProductBundleRequest} arg.body
     **/
    createProductBundle({ body }?: {
        body: ProductBundleRequest;
    }): any;
    /**
      *
      * @summary: List all Product Bundles
      * @description: Get all product bundles for a particular company
      * @param {Object} arg - arg object.
      * @param {string} [arg.q] - A search string that is searched with product bundle name.
      
      **/
    getProductBundle({ q }?: {
        q?: string;
    }): any;
    /**
     *
     * @summary: Update a Product Bundle
     * @description: Update a Product Bundle by its id. On successful request, returns the updated product bundle
     * @param {Object} arg - arg object.
     * @param {string} arg.id - A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to delete.
     * @param {ProductBundleUpdateRequest} arg.body
     **/
    updateProductBundle({ id, body }?: {
        id: string;
        body: ProductBundleUpdateRequest;
    }): any;
    /**
      *
      * @summary: Get a particular Product Bundle details
      * @description: Get a particular Bundle details by its `id`. If successful, returns a Product bundle resource in the response body specified in `GetProductBundleResponse`
      * @param {Object} arg - arg object.
      * @param {string} arg.id - A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to retrieve.
      
      **/
    getProductBundleDetail({ id }?: {
        id: string;
    }): any;
    /**
     *
     * @summary: Create a size guide.
     * @description: This API allows to create a size guide associated to a brand.
     * @param {Object} arg - arg object.
     * @param {ValidateSizeGuide} arg.body
     **/
    createSizeGuide({ body }?: {
        body: ValidateSizeGuide;
    }): any;
    /**
      *
      * @summary: Get list of size guides
      * @description: This API allows to view all the size guides associated to the seller.
      * @param {Object} arg - arg object.
      * @param {boolean} [arg.active] - filter size guide on basis of active, in-active
      * @param {string} [arg.q] - Query that is to be searched.
      * @param {string} [arg.tag] - to filter size guide on basis of tag.
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
      
      **/
    getSizeGuides({ active, q, tag, pageNo, pageSize }?: {
        active?: boolean;
        q?: string;
        tag?: string;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
     *
     * @summary: Edit a size guide.
     * @description: This API allows to edit a size guide.
     * @param {Object} arg - arg object.
     * @param {string} arg.id - Mongo id of the size guide to be edited
     * @param {ValidateSizeGuide} arg.body
     **/
    updateSizeGuide({ id, body }?: {
        id: string;
        body: ValidateSizeGuide;
    }): any;
    /**
      *
      * @summary: Get a single size guide.
      * @description: This API helps to get data associated to a size guide.
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Id of the size guide to be viewed.
      
      **/
    getSizeGuide({ id }?: {
        id: string;
    }): any;
    /**
      *
      * @summary: Analytics data of catalog and inventory that are being cross-selled.
      * @description: Analytics data of catalog and inventory that are being cross-selled.
      * @param {Object} arg - arg object.
      * @param {string} arg.sellerAppId - Id of the seller application which is serving the invetory/catalog of the company
      
      **/
    getSellerInsights({ sellerAppId }?: {
        sellerAppId: string;
    }): any;
    /**
     *
     * @summary: Create/Update opt-in infomation.
     * @description: Use this API to create/update opt-in information for given platform. If successful, returns data in the response body as specified in `OptInPostResponseSchema`
     * @param {Object} arg - arg object.
     * @param {string} arg.marketplace - The marketplace for which the detail needs to be retrieved.
     * @param {OptInPostRequest} arg.body
     **/
    createMarketplaceOptin({ marketplace, body }?: {
        marketplace: string;
        body: OptInPostRequest;
    }): any;
    /**
      *
      * @summary: Get opt-in infomation.
      * @description: Use this API to fetch opt-in information for all the platforms. If successful, returns a logs in the response body as specified in `GetOptInPlatformSchema`
      * @param {Object} arg - arg object.
      
      **/
    getMarketplaceOptinDetail({}?: any): any;
    /**
      *
      * @summary: Get the Company details.
      * @description: Get the details of the company associated with the given company_id passed.
      * @param {Object} arg - arg object.
      
      **/
    getCompanyDetail({}?: any): any;
    /**
      *
      * @summary: Get the Company Brand details of Optin.
      * @description: Get the details of the Brands associated with the given company_id passed.
      * @param {Object} arg - arg object.
      * @param {boolean} [arg.isActive] - The is_active status for the optin id.
      * @param {boolean} [arg.q] - The search value to filter the list.
      * @param {number} [arg.pageNo] - The number of page for the company id.
      * @param {number} [arg.pageSize] - Number of records that can be seen on the page for the company id.
      * @param {string} [arg.marketplace] - The marketplace platform associated with the company id.
      
      **/
    getCompanyBrandDetail({ isActive, q, pageNo, pageSize, marketplace }?: {
        isActive?: boolean;
        q?: boolean;
        pageNo?: number;
        pageSize?: number;
        marketplace?: string;
    }): any;
    /**
      *
      * @summary: Get the Company metrics
      * @description: Get the Company metrics associated with the company ID passed.
      * @param {Object} arg - arg object.
      
      **/
    getCompanyMetrics({}?: any): any;
    /**
      *
      * @summary: Get the Store details.
      * @description: Get the details of the store associated with the company ID passed.
      * @param {Object} arg - arg object.
      * @param {string} [arg.q] - The search related the store for the company id.
      * @param {number} [arg.pageNo] - The number of page for the company id.
      * @param {number} [arg.pageSize] - Number of records that can be seen on the page for the company id.
      
      **/
    getStoreDetail({ q, pageNo, pageSize }?: {
        q?: string;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: List Department specifiec product categories
      * @description: Allows you to list all product categories values for the departments specified
      * @param {Object} arg - arg object.
      * @param {string} arg.departments - A `department` is name of a departments whose category needs to be listed. Can specify multiple departments.
      * @param {string} arg.itemType - An `item_type` is the type of item, it can be `set`, `standard`, `digital`, etc.
      
      **/
    listProductTemplateCategories({ departments, itemType }?: {
        departments: string;
        itemType: string;
    }): any;
    /**
      *
      * @summary: List all Departments
      * @description: Allows you to list all departments, also can search using name and filter active and incative departments, and item type
      * @param {Object} arg - arg object.
      
      **/
    listDepartmentsData({}?: any): any;
    /**
      *
      * @summary: Get specific departments details by passing in unique id of the department
      * @description: Allows you to get department data, by uid
      * @param {Object} arg - arg object.
      * @param {string} arg.uid - A `uid` is a unique identifier of a department.
      
      **/
    getDepartmentData({ uid }?: {
        uid: string;
    }): any;
    /**
      *
      * @summary: List all Templates
      * @description: Allows you to list all product templates, also can filter by department
      * @param {Object} arg - arg object.
      * @param {string} arg.departments - A `departments` is the name of a particular department.
      
      **/
    listProductTemplate({ departments }?: {
        departments: string;
    }): any;
    /**
      *
      * @summary: Validate Product Template Schema
      * @description: Allows you to list all product templates validation values for all the fields present in the database
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - A `slug` is a unique identifier for a particular template.
      
      **/
    validateProductTemplate({ slug }?: {
        slug: string;
    }): any;
    /**
      *
      * @summary: Download Product Template View
      * @description: Allows you to download product template data
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - A `slug` is a unique identifier for a particular template.
      
      **/
    downloadProductTemplateViews({ slug }?: {
        slug: string;
    }): any;
    /**
      *
      * @summary: Download Product Template View
      * @description: Allows you to download product template data
      * @param {Object} arg - arg object.
      * @param {string} arg.itemType - An `item_type` defines the type of item.
      
      **/
    downloadProductTemplateView({ itemType }?: {
        itemType: string;
    }): any;
    /**
      *
      * @summary: Validate Product Template Schema
      * @description: Allows you to list all product templates validation values for all the fields present in the database
      * @param {Object} arg - arg object.
      * @param {string} arg.itemType - An `item_type` defines the type of item. The default value is standard.
      
      **/
    validateProductTemplateSchema({ itemType }?: {
        itemType: string;
    }): any;
    /**
      *
      * @summary: List HSN Codes
      * @description: Allows you to list all hsn Codes
      * @param {Object} arg - arg object.
      
      **/
    listHSNCodes({}?: any): any;
    /**
      *
      * @summary: Allows you to list all product templates export list details
      * @description: Can vies details including trigger data, task id , etc.
      * @param {Object} arg - arg object.
      
      **/
    listProductTemplateExportDetails({}?: any): any;
    /**
      *
      * @summary: Allows you to list all values for Templates, Brands or Type
      * @description: The filter type query parameter defines what type of data to return. The type of query returns the valid values for the same
      * @param {Object} arg - arg object.
      * @param {string} arg.filter - A `filter` is the unique identifier of the type of value required.
      
      **/
    listTemplateBrandTypeValues({ filter }?: {
        filter: string;
    }): any;
    /**
     *
     * @summary: Create product categories
     * @description: This API lets user create product categories
     * @param {Object} arg - arg object.
     * @param {CategoryRequestBody} arg.body
     **/
    createCategories({ body }?: {
        body: CategoryRequestBody;
    }): any;
    /**
      *
      * @summary: Get product categories list
      * @description: This API gets meta associated to product categories.
      * @param {Object} arg - arg object.
      * @param {string} [arg.level] - Get category for multiple levels
      * @param {string} [arg.q] - Get multiple categories filtered by search string
      
      **/
    listCategories({ level, q }?: {
        level?: string;
        q?: string;
    }): any;
    /**
     *
     * @summary: Update product categories
     * @description: Update a product category using this apu
     * @param {Object} arg - arg object.
     * @param {string} arg.uid - Category unique id
     * @param {CategoryRequestBody} arg.body
     **/
    updateCategory({ uid, body }?: {
        uid: string;
        body: CategoryRequestBody;
    }): any;
    /**
      *
      * @summary: Get product category by uid
      * @description: This API gets meta associated to product categories.
      * @param {Object} arg - arg object.
      * @param {string} arg.uid - Category unique id
      
      **/
    getCategoryData({ uid }?: {
        uid: string;
    }): any;
    /**
     *
     * @summary: Create a product.
     * @description: This API allows to create product.
     * @param {Object} arg - arg object.
     * @param {ProductCreateUpdate} arg.body
     **/
    createProduct({ body }?: {
        body: ProductCreateUpdate;
    }): any;
    /**
      *
      * @summary: Get product list
      * @description: This API gets meta associated to products.
      * @param {Object} arg - arg object.
      * @param {number} [arg.brandIds] - Get multiple products filtered by brand Ids
      * @param {number} [arg.categoryIds] - Get multiple products filtered by category Ids
      * @param {string} [arg.search] - Get multiple products filtered by search string
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
      
      **/
    getProducts({ brandIds, categoryIds, search, pageNo, pageSize }?: {
        brandIds?: number;
        categoryIds?: number;
        search?: string;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
     *
     * @summary: Edit a product.
     * @description: This API allows to edit product.
     * @param {Object} arg - arg object.
     * @param {number} arg.itemId - Id of the product to be updated.
     * @param {ProductCreateUpdate} arg.body
     **/
    editProduct({ itemId, body }?: {
        itemId: number;
        body: ProductCreateUpdate;
    }): any;
    /**
      *
      * @summary: Delete a product.
      * @description: This API allows to delete product.
      * @param {Object} arg - arg object.
      * @param {number} arg.itemId - Id of the product to be updated.
      
      **/
    deleteProduct({ itemId }?: {
        itemId: number;
    }): any;
    /**
      *
      * @summary: Get a single product.
      * @description: This API helps to get data associated to a particular product.
      * @param {Object} arg - arg object.
      * @param {string} [arg.itemCode] - Item code of the product.
      * @param {number} arg.itemId - Item Id of the product.
      * @param {number} [arg.brandUid] - Brand Id of the product.
      * @param {number} [arg.uid] - Id of the product.
      
      **/
    getProduct({ itemId, itemCode, brandUid, uid }?: {
        itemCode?: string;
        itemId: number;
        brandUid?: number;
        uid?: number;
    }): any;
    /**
      *
      * @summary: Validate product/size data
      * @description: This API validates product data.
      * @param {Object} arg - arg object.
      
      **/
    getProductValidation({}?: any): any;
    /**
      *
      * @summary: Get a single product size.
      * @description: This API helps to get data associated to a particular product size.
      * @param {Object} arg - arg object.
      * @param {string} [arg.itemCode] - Item code of the product size.
      * @param {number} arg.itemId - Item Id of the product size.
      * @param {number} [arg.brandUid] - Brand Id of the product size.
      * @param {number} [arg.uid] - Id of the product size.
      
      **/
    getProductSize({ itemId, itemCode, brandUid, uid }?: {
        itemCode?: string;
        itemId: number;
        brandUid?: number;
        uid?: number;
    }): any;
    /**
     *
     * @summary: Create a Bulk asset upload Job.
     * @description: This API helps to create a bulk asset upload job.
     * @param {Object} arg - arg object.
     * @param {BulkJob} arg.body
     **/
    updateProductAssetsInBulk({ body }?: {
        body: BulkJob;
    }): any;
    /**
      *
      * @summary: Get a list of all bulk product upload jobs.
      * @description: This API helps to get bulk product upload jobs data.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
      
      **/
    getProductBulkUploadHistory({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Delete Bulk product job.
      * @description: This API allows to delete bulk product job associated with company.
      * @param {Object} arg - arg object.
      * @param {number} arg.batchId - Batch Id of the bulk product job to be deleted.
      
      **/
    deleteProductBulkJob({ batchId }?: {
        batchId: number;
    }): any;
    /**
     *
     * @summary: Create products in bulk associated with given batch Id.
     * @description: This API helps to create products in bulk push to kafka for approval/creation.
     * @param {Object} arg - arg object.
     * @param {string} arg.batchId - Batch Id in which assets to be uploaded.
     * @param {BulkProductRequest} arg.body
     **/
    createProductsInBulk({ batchId, body }?: {
        batchId: string;
        body: BulkProductRequest;
    }): any;
    /**
      *
      * @summary: Get a list of all tags associated with company.
      * @description: This API helps to get tags data associated to a particular copmpany.
      * @param {Object} arg - arg object.
      
      **/
    getCompanyTags({}?: any): any;
    /**
     *
     * @summary: Create a Bulk asset upload Job.
     * @description: This API helps to create a bulk asset upload job.
     * @param {Object} arg - arg object.
     * @param {ProductBulkAssets} arg.body
     **/
    createProductAssetsInBulk({ body }?: {
        body: ProductBulkAssets;
    }): any;
    /**
      *
      * @summary: Get a list of all bulk asset jobs.
      * @description: This API helps to get bulk asset jobs data associated to a particular company.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
      
      **/
    getProductAssetsInBulk({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Delete a Size associated with product.
      * @description: This API allows to delete size associated with product.
      * @param {Object} arg - arg object.
      * @param {number} arg.itemId - Item Id of the product associated with size to be deleted.
      * @param {number} arg.size - size to be deleted.
      
      **/
    deleteSize({ itemId, size }?: {
        itemId: number;
        size: number;
    }): any;
    /**
     *
     * @summary: Add Inventory for particular size and store.
     * @description: This API allows add Inventory for particular size and store.
     * @param {Object} arg - arg object.
     * @param {number} arg.itemId - Item of the company associated to product that is to be viewed.
     * @param {string} arg.size - Size in which inventory is to be added.
     * @param {InventoryRequest} arg.body
     **/
    addInventory({ itemId, size, body }?: {
        itemId: number;
        size: string;
        body: InventoryRequest;
    }): any;
    /**
      *
      * @summary: Get Inventory for company
      * @description: This API allows get Inventory data for particular company grouped by size and store.
      * @param {Object} arg - arg object.
      * @param {string} arg.itemId - Item code of the product of which size is to be get.
      * @param {string} arg.size - Size of which inventory is to get.
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
      
      **/
    getInventory({ itemId, size, pageNo, pageSize }?: {
        itemId: string;
        size: string;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Delete a Inventory.
      * @description: This API allows to delete inventory of a particular product for particular company.
      * @param {Object} arg - arg object.
      * @param {number} arg.itemId - Id of the product associated with Inventory to be deleted.
      * @param {number} arg.locationId - Location ID of store of which inventory is to be deleted.
      
      **/
    deleteInventory({ itemId, locationId }?: {
        itemId: number;
        locationId: number;
    }): any;
    /**
     *
     * @summary: Create a Bulk Inventory upload Job.
     * @description: This API helps to create a bulk Inventory upload job.
     * @param {Object} arg - arg object.
     * @param {BulkJob} arg.body
     **/
    createBulkInventoryJob({ body }?: {
        body: BulkJob;
    }): any;
    /**
      *
      * @summary: Get a list of all bulk Inventory upload jobs.
      * @description: This API helps to get bulk Inventory upload jobs data.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
      
      **/
    getInventoryBulkUploadHistory({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Delete Bulk Inventory job.
      * @description: This API allows to delete bulk Inventory job associated with company.
      * @param {Object} arg - arg object.
      
      **/
    deleteBulkInventoryJob({}?: any): any;
    /**
     *
     * @summary: Create products in bulk associated with given batch Id.
     * @description: This API helps to create products in bulk push to kafka for approval/creation.
     * @param {Object} arg - arg object.
     * @param {InventoryBulkRequest} arg.body
     **/
    createBulkInventory({ body }?: {
        body: InventoryBulkRequest;
    }): any;
    /**
     *
     * @summary: Create a Inventory export Job.
     * @description: This API helps to create a Inventory export job.
     * @param {Object} arg - arg object.
     * @param {InventoryExportRequest} arg.body
     **/
    createInventoryExportJob({ body }?: {
        body: InventoryExportRequest;
    }): any;
    /**
      *
      * @summary: Get Inventory export history.
      * @description: This API helps to get Inventory export history.
      * @param {Object} arg - arg object.
      
      **/
    getInventoryExport({}?: any): any;
    /**
      *
      * @summary: Get List of different filters for inventory export
      * @description: This API allows get List of different filters like brand, store, and type for inventory export.
      * @param {Object} arg - arg object.
      * @param {string} [arg.filterType] - filter type from any one of ['brand', 'store', 'type']
      
      **/
    exportInventoryConfig({ filterType }?: {
        filterType?: string;
    }): any;
}
declare class CompanyProfile {
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
}
declare class FileStorage {
    constructor(config: any);
    config: any;
    /**
      *
      * @summary: This operation initiates upload and returns storage link which is valid for 30 Minutes. You can use that storage link to make subsequent upload request with file buffer or blob.
      * @description: Uploads an arbitrarily sized buffer or blob.
  
  It has three Major Steps:
  * Start
  * Upload
  * Complete
  
  ### Start
  Initiates the assets upload using `startUpload`.
  It returns the storage link in response.
  
  ### Upload
  Use the storage link to upload a file (Buffer or Blob) to the File Storage.
  Make a `PUT` request on storage link received from `startUpload` api with file (Buffer or Blob) as a request body.
  
  ### Complete
  After successfully upload, call `completeUpload` api to complete the upload process.
  This operation will return the url for the uploaded file.
  
      * @param {Object} arg - arg object.
      * @param {string} arg.namespace - bucket name
      * @param {StartRequest} arg.body
      **/
    startUpload({ namespace, body }?: {
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
  Initiates the assets upload using `startUpload`.
  It returns the storage link in response.
  
  ### Upload
  Use the storage link to upload a file (Buffer or Blob) to the File Storage.
  Make a `PUT` request on storage link received from `startUpload` api with file (Buffer or Blob) as a request body.
  
  ### Complete
  After successfully upload, call `completeUpload` api to complete the upload process.
  This operation will return the url for the uploaded file.
  
      * @param {Object} arg - arg object.
      * @param {string} arg.namespace - bucket name
      * @param {StartResponse} arg.body
      **/
    completeUpload({ namespace, body }?: {
        namespace: string;
        body: StartResponse;
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
     * @summary: Copy Files
     * @description: Copy Files
     * @param {Object} arg - arg object.
     * @param {boolean} [arg.sync] - sync
     * @param {BulkRequest} arg.body
     **/
    copyFiles({ body, sync }?: {
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
    browse({ namespace }?: {
        namespace: string;
    }): any;
    /**
      *
      * @summary: Browse Files
      * @description: Browse Files
      * @param {Object} arg - arg object.
      * @param {string} arg.namespace - bucket name
      
      **/
    browsePaginator({ namespace }?: {
        namespace: string;
    }): Paginator;
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
declare class Configuration {
    constructor(config: any);
    config: any;
    /**
     *
     * @summary: Create application
     * @description: Create new application
     * @param {Object} arg - arg object.
     * @param {CreateApplicationRequest} arg.body
     **/
    createApplication({ body }?: {
        body: CreateApplicationRequest;
    }): any;
    /**
      *
      * @summary: Get list of application under company
      * @description: Get list of application under company
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] -
      * @param {number} [arg.pageSize] -
      * @param {string} [arg.q] - Url encoded object used as mongodb query
      
      **/
    getApplications({ pageNo, pageSize, q }?: {
        pageNo?: number;
        pageSize?: number;
        q?: string;
    }): any;
    /**
      *
      * @summary: Get list of application under company
      * @description: Get list of application under company
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageSize] -
      * @param {string} [arg.q] - Url encoded object used as mongodb query
      
      **/
    getApplicationsPaginator({ pageSize, q }?: {
        pageSize?: number;
        q?: string;
    }): Paginator;
    /**
      *
      * @summary: Get all currencies
      * @description: Get all currencies
      * @param {Object} arg - arg object.
      
      **/
    getCurrencies({}?: any): any;
    /**
     *
     * @summary: Check domain availibility before linking to application
     * @description: Check domain availibility before linking to application. Also sends domain suggestions with similar to queried domain. \ Custom domain search is currently powered by GoDaddy provider.
     * @param {Object} arg - arg object.
     * @param {DomainSuggestionsRequest} arg.body
     **/
    getDomainAvailibility({ body }?: {
        body: DomainSuggestionsRequest;
    }): any;
    /**
      *
      * @summary: Get integration data
      * @description: Get integration data
      * @param {Object} arg - arg object.
      * @param {number} arg.id - Integration id
      
      **/
    getIntegrationById({ id }?: {
        id: number;
    }): any;
    /**
      *
      * @summary: Get all available integration opt-ins
      * @description: Get all available integration opt-ins
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - Current page no
      * @param {number} [arg.pageSize] - Current request items count
      
      **/
    getAvailableOptIns({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get all available integration opt-ins
      * @description: Get all available integration opt-ins
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageSize] - Current request items count
      
      **/
    getAvailableOptInsPaginator({ pageSize }?: {
        pageSize?: number;
    }): Paginator;
    /**
      *
      * @summary: Get company/store level integration opt-ins
      * @description: Get company/store level integration opt-ins
      * @param {Object} arg - arg object.
      * @param {string} arg.level - Integration level
      * @param {number} arg.uid - Integration level uid
      * @param {number} [arg.pageNo] - Current page no
      * @param {number} [arg.pageSize] - Current request items count
      
      **/
    getSelectedOptIns({ level, uid, pageNo, pageSize }?: {
        level: string;
        uid: number;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get company/store level integration opt-ins
      * @description: Get company/store level integration opt-ins
      * @param {Object} arg - arg object.
      * @param {string} arg.level - Integration level
      * @param {number} arg.uid - Integration level uid
      * @param {number} [arg.pageSize] - Current request items count
      
      **/
    getSelectedOptInsPaginator({ level, uid, pageSize }?: {
        level: string;
        uid: number;
        pageSize?: number;
    }): Paginator;
    /**
      *
      * @summary: Get integration level config
      * @description: Get integration level config
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Integration id
      * @param {string} arg.level - Integration level
      
      **/
    getIntegrationLevelConfig({ id, level }?: {
        id: string;
        level: string;
    }): any;
    /**
      *
      * @summary: Get level data for integration
      * @description: Get level data for integration
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Integration id
      * @param {string} arg.level - Integration level
      * @param {number} arg.uid - Integration level uid
      
      **/
    getIntegrationByLevelId({ id, level, uid }?: {
        id: string;
        level: string;
        uid: number;
    }): any;
    /**
      *
      * @summary: Check store has active integration
      * @description: API checks if a store is already opted in any other integrations
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Integration id
      * @param {string} arg.level - Integration level
      * @param {number} arg.uid - Integration level uid
      
      **/
    getLevelActiveIntegrations({ id, level, uid }?: {
        id: string;
        level: string;
        uid: number;
    }): any;
    /**
      *
      * @summary: Get brands by company
      * @description: Get brands by company
      * @param {Object} arg - arg object.
      * @param {string} [arg.q] - Search text for brand name
      
      **/
    getBrandsByCompany({ q }?: {
        q?: string;
    }): any;
    /**
     *
     * @summary: Get company by brand uids
     * @description: Get company by brand uids
     * @param {Object} arg - arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {CompanyByBrandsRequest} arg.body
     **/
    getCompanyByBrands({ body, pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
        body: CompanyByBrandsRequest;
    }): any;
    /**
     *
     * @summary: Get company by brand uids
     * @description: Get company by brand uids
     * @param {Object} arg - arg object.
     * @param {number} [arg.pageSize] - Current request items count
     * @param {CompanyByBrandsRequest} arg.body
     **/
    getCompanyByBrandsPaginator({ pageSize, body }?: {
        pageSize?: number;
        body: CompanyByBrandsRequest;
    }): Paginator;
    /**
     *
     * @summary: Get stores by brand uids
     * @description: Get stores by brand uids
     * @param {Object} arg - arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {StoreByBrandsRequest} arg.body
     **/
    getStoreByBrands({ body, pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
        body: StoreByBrandsRequest;
    }): any;
    /**
     *
     * @summary: Get stores by brand uids
     * @description: Get stores by brand uids
     * @param {Object} arg - arg object.
     * @param {number} [arg.pageSize] - Current request items count
     * @param {StoreByBrandsRequest} arg.body
     **/
    getStoreByBrandsPaginator({ pageSize, body }?: {
        pageSize?: number;
        body: StoreByBrandsRequest;
    }): Paginator;
    /**
      *
      * @summary: Get other seller applications
      * @description: Get other seller applications who has opted current company as inventory
      * @param {Object} arg - arg object.
      
      **/
    getOtherSellerApplications({}?: any): any;
    /**
      *
      * @summary: Get other seller applications
      * @description: Get other seller applications who has opted current company as inventory
      * @param {Object} arg - arg object.
      
      **/
    getOtherSellerApplicationsPaginator({}?: any): Paginator;
    /**
      *
      * @summary: Get other seller applications
      * @description: Get other seller application
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Application Id
      
      **/
    getOtherSellerApplicationById({ id }?: {
        id: string;
    }): any;
    /**
     *
     * @summary: Opt out company or store from other seller application
     * @description: Opt out company or store from other seller application
     * @param {Object} arg - arg object.
     * @param {string} arg.id - Application Id
     * @param {OptOutInventory} arg.body
     **/
    optOutFromApplication({ id, body }?: {
        id: string;
        body: OptOutInventory;
    }): any;
}
declare class Marketplaces {
    constructor(config: any);
    config: any;
    /**
      *
      * @summary: Get available marketplace channels
      * @description: Get available marketplace channels
      * @param {Object} arg - arg object.
      
      **/
    getAvailableChannels({}?: any): any;
    /**
      *
      * @summary: Get all registered marketplace channels for a seller
      * @description: Get all registered marketplace channels for a seller
      * @param {Object} arg - arg object.
      
      **/
    getChannels({}?: any): any;
    /**
      *
      * @summary: Get registered marketplace channel for a seller
      * @description: Get registered marketplace channel for a seller
      * @param {Object} arg - arg object.
      * @param {string} arg.channel - Name of marketplace channel
      
      **/
    getChannel({ channel }?: {
        channel: string;
    }): any;
    /**
     *
     * @summary: Create Myntra marketplace channel for a seller
     * @description: Create Myntra marketplace channel for a seller
     * @param {Object} arg - arg object.
     * @param {MyntraPayload} arg.body
     **/
    registerMyntraChannel({ body }?: {
        body: MyntraPayload;
    }): any;
    /**
     *
     * @summary: Update Myntra marketplace channel credentials for a seller
     * @description: Update Myntra marketplace channel credentials for a seller
     * @param {Object} arg - arg object.
     * @param {MyntraPayload} arg.body
     **/
    updateMyntraChannelCredentials({ body }?: {
        body: MyntraPayload;
    }): any;
    /**
     *
     * @summary: Create Amazon marketplace channel for a seller
     * @description: Create Amazon marketplace channel for a seller
     * @param {Object} arg - arg object.
     * @param {AmazonPayload} arg.body
     **/
    registerAmazonChannel({ body }?: {
        body: AmazonPayload;
    }): any;
    /**
     *
     * @summary: Update Amazon marketplace channel credentials for a seller
     * @description: Update Amazon marketplace channel credentials for a seller
     * @param {Object} arg - arg object.
     * @param {AmazonPayload} arg.body
     **/
    updateAmazonChannelCredentials({ body }?: {
        body: AmazonPayload;
    }): any;
    /**
     *
     * @summary: Create Flipkart / Flipkart Assured marketplace channel for a seller
     * @description: Create Flipkart / Flipkart Assured marketplace channel for a seller
     * @param {Object} arg - arg object.
     * @param {string} arg.flipkartChannel - Name of marketplace channel
     * @param {FlipkartPayload} arg.body
     **/
    registerFlipkartChannel({ flipkartChannel, body }?: {
        flipkartChannel: string;
        body: FlipkartPayload;
    }): any;
    /**
     *
     * @summary: Update Flipkart / Flipkart Assured marketplace channel credentials for a seller
     * @description: Update Flipkart / Flipkart Assured marketplace channel credentials for a seller
     * @param {Object} arg - arg object.
     * @param {string} arg.flipkartChannel - Name of marketplace channel
     * @param {FlipkartPayload} arg.body
     **/
    updateFlipkartChannelCredentials({ flipkartChannel, body }?: {
        flipkartChannel: string;
        body: FlipkartPayload;
    }): any;
    /**
     *
     * @summary: Create Tatacliq / Tatacliq Luxury marketplace channel for a seller
     * @description: Create Tatacliq / Tatacliq Luxury marketplace channel for a seller
     * @param {Object} arg - arg object.
     * @param {string} arg.tatacliqChannel - Name of marketplace channel
     * @param {TatacliqPayload} arg.body
     **/
    registerTatacliqChannel({ tatacliqChannel, body }?: {
        tatacliqChannel: string;
        body: TatacliqPayload;
    }): any;
    /**
     *
     * @summary: Update Tatacliq / Tatacliq Luxury Assured marketplace channel credentials for a seller
     * @description: Update Tatacliq / Tatacliq Luxury marketplace channel credentials for a seller
     * @param {Object} arg - arg object.
     * @param {string} arg.tatacliqChannel - Name of marketplace channel
     * @param {TatacliqPayload} arg.body
     **/
    updateTatacliqChannelCredentials({ tatacliqChannel, body }?: {
        tatacliqChannel: string;
        body: TatacliqPayload;
    }): any;
    /**
     *
     * @summary: Create Ajio marketplace channel for a seller
     * @description: Create Ajio marketplace channel for a seller
     * @param {Object} arg - arg object.
     * @param {AjioPayload} arg.body
     **/
    registerAjioChannel({ body }?: {
        body: AjioPayload;
    }): any;
    /**
     *
     * @summary: Update Ajio marketplace channel credentials for a seller
     * @description: Update Ajio marketplace channel credentials for a seller
     * @param {Object} arg - arg object.
     * @param {AjioPayload} arg.body
     **/
    updateAjioChannelCredentials({ body }?: {
        body: AjioPayload;
    }): any;
    /**
     *
     * @summary: Update inventory sync configuration of marketplace channel for a seller
     * @description: Update inventory sync configuration of marketplace channel for a seller
     * @param {Object} arg - arg object.
     * @param {string} arg.channel - Name of marketplace channel
     * @param {string} [arg.validateCred] - Validate marketplace cred while saving inventory config
     * @param {InventorySyncConfig} arg.body
     **/
    updateChannelInventorySyncConfig({ channel, body, validateCred }?: {
        channel: string;
        validateCred?: string;
        body: InventorySyncConfig;
    }): any;
    /**
      *
      * @summary: Get marketplace channel location config for a seller
      * @description: Get marketplace channel location config for a seller
      * @param {Object} arg - arg object.
      * @param {string} arg.channel - Name of marketplace channel
      
      **/
    getChannelLocationConfig({ channel }?: {
        channel: string;
    }): any;
    /**
     *
     * @summary: update marketplace channel location config for a seller
     * @description: update marketplace channel location config for a seller
     * @param {Object} arg - arg object.
     * @param {string} arg.channel - Name of marketplace channel
     * @param {StoreMappingPayload} arg.body
     **/
    updateChannelLocationConfig({ channel, body }?: {
        channel: string;
        body: StoreMappingPayload;
    }): any;
    /**
      *
      * @summary: Get marketplace channel active status for a seller
      * @description: Get marketplace channel active status for a seller
      * @param {Object} arg - arg object.
      * @param {string} arg.channel - Name of marketplace channel
      
      **/
    getChannelStatus({ channel }?: {
        channel: string;
    }): any;
    /**
     *
     * @summary: Update marketplace channel active status for a seller
     * @description: Update marketplace channel active status for a seller
     * @param {Object} arg - arg object.
     * @param {string} arg.channel - Name of marketplace channel
     * @param {StatusPayload} arg.body
     **/
    updateChannelStatus({ channel, body }?: {
        channel: string;
        body: StatusPayload;
    }): any;
    /**
     *
     * @summary: Trigger marketplace channel inventory updates for a seller
     * @description: Trigger marketplace channel inventory updates for a seller
     * @param {Object} arg - arg object.
     * @param {string} arg.channel - Name of marketplace channel
     * @param {string} arg.updateType - Inventory update type
     * @param {SyncPayload} arg.body
     **/
    triggerChannelInventoryUpdates({ channel, updateType, body }?: {
        channel: string;
        updateType: string;
        body: SyncPayload;
    }): any;
}
declare class Analytics {
    constructor(config: any);
    config: any;
    /**
     *
     * @summary: Create data export job in required format
     * @description: Create data export job in required format
     * @param {Object} arg - arg object.
     * @param {string} arg.exportType - Export type / format
     * @param {ExportJobReq} arg.body
     **/
    createExportJob({ exportType, body }?: {
        exportType: string;
        body: ExportJobReq;
    }): any;
    /**
      *
      * @summary: Get data export job status
      * @description: Get data export job status
      * @param {Object} arg - arg object.
      * @param {string} arg.exportType - Export type / format
      * @param {string} arg.jobId - Export job id
      
      **/
    getExportJobStatus({ exportType, jobId }?: {
        exportType: string;
        jobId: string;
    }): any;
    /**
     *
     * @summary: Get logs list
     * @description: Get logs list
     * @param {Object} arg - arg object.
     * @param {string} arg.logType - Log type
     * @param {string} [arg.pageNo] - Current page number
     * @param {string} [arg.pageSize] - Current page size
     * @param {GetLogsListReq} arg.body
     **/
    getLogsList({ logType, body, pageNo, pageSize }?: {
        logType: string;
        pageNo?: string;
        pageSize?: string;
        body: GetLogsListReq;
    }): any;
    /**
     *
     * @summary: Search logs
     * @description: Search logs
     * @param {Object} arg - arg object.
     * @param {string} [arg.pageNo] - Current page number
     * @param {string} [arg.pageSize] - Current page size
     * @param {string} arg.logType - Log type
     * @param {SearchLogReq} arg.body
     **/
    searchLogs({ logType, body, pageNo, pageSize }?: {
        pageNo?: string;
        pageSize?: string;
        logType: string;
        body: SearchLogReq;
    }): any;
}
declare class Discount {
    constructor(config: any);
    config: any;
    /**
      *
      * @summary: Fetch discount list.
      * @description: Fetch discount list.
      * @param {Object} arg - arg object.
      * @param {string} [arg.view] - listing or calender.  Default is listing.
      * @param {string} [arg.q] - The search query. This can be a partial or complete name of a discount.
      * @param {number} [arg.pageNo] - page number. Default is 1.
      * @param {number} [arg.pageSize] - page size. Default is 12.
      * @param {boolean} [arg.archived] - archived. Default is false.
      * @param {number} [arg.month] - month. Default is current month.
      * @param {number} [arg.year] - year. Default is current year.
      * @param {string} [arg.type] - basic or custom.
      * @param {Array<string>} [arg.appIds] - application ids.
      
      **/
    getDiscounts({ view, q, pageNo, pageSize, archived, month, year, type, appIds, }?: {
        view?: string;
        q?: string;
        pageNo?: number;
        pageSize?: number;
        archived?: boolean;
        month?: number;
        year?: number;
        type?: string;
        appIds?: Array<string>;
    }): any;
    /**
     *
     * @summary: Create Discount.
     * @description: Create Discount.
     * @param {Object} arg - arg object.
     * @param {CreateUpdateDiscount} arg.body
     **/
    createDiscount({ body }?: {
        body: CreateUpdateDiscount;
    }): any;
    /**
      *
      * @summary: Fetch discount.
      * @description: Fetch discount.
      * @param {Object} arg - arg object.
      * @param {string} arg.id - unique id.
      
      **/
    getDiscount({ id }?: {
        id: string;
    }): any;
    /**
     *
     * @summary: Create Discount.
     * @description: Create Discount.
     * @param {Object} arg - arg object.
     * @param {string} arg.id - id
     * @param {CreateUpdateDiscount} arg.body
     **/
    updateDiscount({ id, body }?: {
        id: string;
        body: CreateUpdateDiscount;
    }): any;
    /**
     *
     * @summary: Validate File.
     * @description: Validate File.
     * @param {Object} arg - arg object.
     * @param {string} [arg.discount] - discount
     * @param {DiscountJob} arg.body
     **/
    validateDiscountFile({ body, discount }?: {
        discount?: string;
        body: DiscountJob;
    }): any;
    /**
     *
     * @summary: Validate File.
     * @description: Validate File.
     * @param {Object} arg - arg object.
     * @param {string} arg.type - type
     * @param {DownloadFileJob} arg.body
     **/
    downloadDiscountFile({ type, body }?: {
        type: string;
        body: DownloadFileJob;
    }): any;
    /**
      *
      * @summary: Validate File Job.
      * @description: Validate File Job.
      * @param {Object} arg - arg object.
      * @param {string} arg.id - id
      
      **/
    getValidationJob({ id }?: {
        id: string;
    }): any;
    /**
      *
      * @summary: Cancel Validation Job.
      * @description: Cancel Validation Job.
      * @param {Object} arg - arg object.
      * @param {string} arg.id - id
      
      **/
    cancelValidationJob({ id }?: {
        id: string;
    }): any;
    /**
      *
      * @summary: Download File Job.
      * @description: Download File Job.
      * @param {Object} arg - arg object.
      * @param {string} arg.id - id
      
      **/
    getDownloadJob({ id }?: {
        id: string;
    }): any;
    /**
      *
      * @summary: Cancel Download Job.
      * @description: Cancel Download Job.
      * @param {Object} arg - arg object.
      * @param {string} arg.id - id
      
      **/
    cancelDownloadJob({ id }?: {
        id: string;
    }): any;
}
import PlatformApplicationClient = require("./PlatformApplicationClient");
type TicketList = {
    items?: Array<Ticket>;
    filters?: Filter;
    page?: Page;
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
type Attributes = {
    items?: Array<Attribute>;
    page?: Page;
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
type ErrorResponse = {
    code?: any;
    exception?: string;
    info?: string;
    meta?: any;
    requestId?: string;
    stackTrace?: string;
    status?: number;
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
type State = {
    active?: boolean;
    archive?: boolean;
    media?: string;
    qna?: boolean;
    rating?: boolean;
    review?: boolean;
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
    state?: State;
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
type GetFaqCategoryByIdOrSlugSchema = {
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
type SearchKeywordResult = {
    query: any;
    sortOn: string;
};
type CreateSearchKeyword = {
    appId?: string;
    result: SearchKeywordResult;
    words?: Array<string>;
    customJson?: any;
    isActive?: boolean;
};
type GetSearchWordsData = {
    appId?: string;
    result?: any;
    uid?: string;
    words?: Array<string>;
    customJson?: any;
};
type DeleteResponse = {
    message?: string;
};
type Page = {
    itemTotal?: number;
    hasNext?: boolean;
    nextPageId?: string;
    hasPrevious?: boolean;
    current?: number;
};
type GetSearchWordsDetailResponse = {
    page?: Page;
    items?: GetSearchWordsData;
};
type GetSearchWordsResponse = {
    page?: Page;
    items?: Array<GetSearchWordsData>;
};
type Media = {
    type?: string;
    url?: string;
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
type AutocompleteResult = {
    display?: string;
    logo?: Media;
    customJson?: any;
    action?: AutocompleteAction;
};
type CreateAutocompleteKeyword = {
    results?: Array<AutocompleteResult>;
    appId?: string;
    words?: Array<string>;
    customJson?: any;
    isActive?: boolean;
};
type GetAutocompleteWordsData = {
    results?: Array<any>;
    appId?: string;
    uid?: string;
    words?: Array<string>;
    customJson?: any;
};
type GetAutocompleteWordsResponse = {
    page?: Page;
    items?: Array<GetAutocompleteWordsData>;
};
type CreateAutocompleteWordsResponse = {
    appId?: string;
    customJson?: any;
    results?: Array<any>;
    words?: Array<string>;
};
type ProductBundleItem = {
    maxQuantity: number;
    allowRemove?: boolean;
    autoAddToCart?: boolean;
    minQuantity: number;
    autoSelect?: boolean;
    productUid: number;
};
type ProductBundleRequest = {
    pageVisibility?: Array<string>;
    logo?: string;
    choice: string;
    slug: string;
    modifiedOn?: string;
    isActive: boolean;
    modifiedBy?: any;
    createdBy?: any;
    name: string;
    createdOn?: string;
    meta?: any;
    sameStoreAssignment?: boolean;
    products: Array<ProductBundleItem>;
};
type GetProductBundleCreateResponse = {
    pageVisibility?: Array<string>;
    id?: string;
    logo?: string;
    choice: string;
    slug: string;
    modifiedOn?: string;
    isActive: boolean;
    modifiedBy?: any;
    companyId?: number;
    createdBy?: any;
    name: string;
    createdOn?: string;
    meta?: any;
    sameStoreAssignment?: boolean;
    products: Array<ProductBundleItem>;
};
type GetProductBundleListingResponse = {
    page?: Page;
    items?: Array<GetProductBundleCreateResponse>;
};
type ProductBundleUpdateRequest = {
    pageVisibility?: Array<string>;
    logo?: string;
    choice: string;
    slug: string;
    modifiedOn?: string;
    isActive: boolean;
    modifiedBy?: any;
    name: string;
    meta?: any;
    sameStoreAssignment?: boolean;
    products: Array<ProductBundleItem>;
};
type LimitedProductData = {
    quantity?: number;
    images?: Array<string>;
    slug?: string;
    itemCode?: string;
    countryOfOrigin?: string;
    uid?: number;
    price?: any;
    name?: string;
    shortDescription?: string;
    attributes?: any;
    identifier?: any;
    sizes?: Array<string>;
};
type Price = {
    currency?: string;
    minMarked?: number;
    maxMarked?: number;
    minEffective?: number;
    maxEffective?: number;
};
type Size = {
    quantity?: number;
    display?: string;
    value?: string;
    isAvailable?: boolean;
};
type GetProducts = {
    productDetails?: LimitedProductData;
    maxQuantity?: number;
    allowRemove?: boolean;
    autoAddToCart?: boolean;
    minQuantity?: number;
    price?: Price;
    autoSelect?: boolean;
    productUid?: number;
    sizes?: Array<Size>;
};
type GetProductBundleResponse = {
    pageVisibility?: Array<string>;
    logo?: string;
    choice?: string;
    slug?: string;
    isActive?: boolean;
    companyId?: number;
    name?: string;
    meta?: any;
    sameStoreAssignment?: boolean;
    products?: Array<GetProducts>;
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
    id?: string;
    active?: boolean;
    modifiedOn?: string;
    guide?: Guide;
    title: string;
    companyId?: number;
    modifiedBy?: any;
    name: string;
    brandId?: number;
    createdOn?: string;
    subtitle?: string;
    tag?: string;
    description?: string;
    createdBy?: any;
    image?: string;
};
type SuccessResponse = {
    success?: boolean;
    uid?: number;
};
type ListSizeGuide = {
    page?: any;
    items?: Array<any>;
};
type SizeGuideResponse = {
    id?: string;
    modifiedOn?: string;
    guide?: any;
    modifiedBy?: any;
    companyId?: number;
    title?: string;
    name?: string;
    brandId?: number;
    createdOn?: string;
    tag?: string;
    active?: boolean;
    subtitle?: string;
    createdBy?: any;
};
type MetaDataListingSortMetaResponse = {
    display?: string;
    key?: string;
};
type MetaDataListingSortResponse = {
    data?: Array<MetaDataListingSortMetaResponse>;
};
type MetaDataListingFilterMetaResponse = {
    units?: Array<any>;
    display?: string;
    filterTypes?: Array<string>;
    key?: string;
};
type MetaDataListingFilterResponse = {
    data?: Array<MetaDataListingFilterMetaResponse>;
};
type MetaDataListingResponse = {
    sort: MetaDataListingSortResponse;
    filter: MetaDataListingFilterResponse;
};
type GetCatalogConfigurationDetailsProduct = {
    compare?: any;
    detail?: any;
    variant?: any;
    similar?: any;
};
type GetCatalogConfigurationMetaData = {
    listing?: MetaDataListingResponse;
    product?: GetCatalogConfigurationDetailsProduct;
};
type ConfigurationListingSortConfig = {
    logo?: string;
    key: string;
    name?: string;
    priority: number;
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
    condition?: string;
    map?: any;
    bucketPoints?: Array<ConfigurationBucketPoints>;
    sort?: string;
    value?: string;
};
type ConfigurationListingFilterConfig = {
    type: string;
    logo?: string;
    key: string;
    valueConfig?: ConfigurationListingFilterValue;
    name?: string;
    priority: number;
    isActive: boolean;
};
type ConfigurationListingFilter = {
    allowSingle: boolean;
    attributeConfig?: Array<ConfigurationListingFilterConfig>;
};
type ConfigurationListing = {
    sort: ConfigurationListingSort;
    filter: ConfigurationListingFilter;
};
type ProductSize = {
    min: number;
    max: number;
};
type ConfigurationProductVariantConfig = {
    size: ProductSize;
    logo?: string;
    key: string;
    name: string;
    priority: number;
    displayType: string;
    isActive: boolean;
};
type ConfigurationProductVariant = {
    config?: Array<ConfigurationProductVariantConfig>;
};
type ConfigurationProductConfig = {
    size?: ProductSize;
    logo?: string;
    key: string;
    title?: string;
    priority: number;
    subtitle?: string;
    isActive: boolean;
};
type ConfigurationProductSimilar = {
    config?: Array<ConfigurationProductConfig>;
};
type ConfigurationProduct = {
    variant: ConfigurationProductVariant;
    similar: ConfigurationProductSimilar;
};
type AppConfiguration = {
    listing?: ConfigurationListing;
    configType: string;
    appId: string;
    configId?: string;
    product?: ConfigurationProduct;
};
type AppCatalogConfiguration = {
    listing?: ConfigurationListing;
    configType: string;
    id?: string;
    appId: string;
    configId?: string;
    product?: ConfigurationProduct;
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
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    configType: string;
    id?: string;
    appId: string;
    configId?: string;
    product?: GetCatalogConfigurationDetailsProduct;
};
type GetAppCatalogEntityConfiguration = {
    data?: EntityConfiguration;
    isDefault?: boolean;
};
type ProductFiltersKey = {
    name: string;
    display: string;
    logo?: string;
    kind?: string;
};
type ProductFiltersValue = {
    currencyCode?: string;
    displayFormat?: string;
    isSelected: boolean;
    max?: number;
    selectedMin?: number;
    queryFormat?: string;
    count?: number;
    min?: number;
    display: string;
    value: string;
    currencySymbol?: string;
    selectedMax?: number;
};
type ProductFilters = {
    key: ProductFiltersKey;
    values: Array<ProductFiltersValue>;
};
type ProductSortOn = {
    name?: string;
    value?: string;
    isSelected?: boolean;
};
type GetCollectionQueryOptionResponse = {
    filters?: Array<ProductFilters>;
    sortOn?: Array<ProductSortOn>;
};
type CollectionImage = {
    url: string;
    aspectRatio: string;
};
type Schedule = {
    end?: string;
    duration?: number;
    start?: string;
    cron?: string;
};
type UserInfo = {
    userId?: string;
    username?: string;
    email?: string;
    uid?: string;
};
type CollectionBanner = {
    portrait: CollectionImage;
    landscape: CollectionImage;
};
type SeoDetail = {
    title?: string;
    description?: string;
};
type CollectionBadge = {
    text?: string;
    color?: string;
};
type CreateCollection = {
    slug: string;
    localeLanguage?: any;
    appId: string;
    allowSort?: boolean;
    published?: boolean;
    name: string;
    sortOn?: string;
    meta?: any;
    allowFacets?: boolean;
    logo: CollectionImage;
    schedule?: Schedule;
    modifiedBy?: UserInfo;
    query?: any;
    tags?: Array<string>;
    banners: CollectionBanner;
    seo?: SeoDetail;
    createdBy?: UserInfo;
    visibleFacetsKeys?: Array<string>;
    type: string;
    badge?: CollectionBadge;
    customJson?: any;
    description?: string;
    isActive?: boolean;
};
type BannerImage = {
    url?: string;
    aspectRatio?: string;
};
type ImageUrls = {
    portrait?: BannerImage;
    landscape?: BannerImage;
};
type CollectionCreateResponse = {
    allowFacets?: boolean;
    type?: string;
    logo?: BannerImage;
    schedule?: any;
    slug?: string;
    appId?: string;
    query?: any;
    banners?: ImageUrls;
    name?: string;
    meta?: any;
    badge?: any;
    allowSort?: boolean;
    description?: string;
    cron?: any;
    tag?: Array<string>;
    isActive?: boolean;
    visibleFacetsKeys?: Array<string>;
};
type CollectionListingFilterType = {
    name?: string;
    display?: string;
    isSelected?: boolean;
};
type CollectionListingFilterTag = {
    name?: string;
    display?: string;
    isSelected?: boolean;
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
    type?: string;
    url: string;
    meta?: any;
};
type GetCollectionDetailNest = {
    slug?: string;
    appId?: string;
    allowSort?: boolean;
    uid?: string;
    name?: string;
    meta?: any;
    cron?: any;
    action?: ProductListingAction;
    allowFacets?: boolean;
    logo?: Media1;
    schedule?: any;
    query?: any;
    banners?: ImageUrls;
    visibleFacetsKeys?: Array<string>;
    type?: string;
    badge?: any;
    description?: string;
    tag?: Array<string>;
    isActive?: boolean;
};
type GetCollectionListingResponse = {
    page?: Page;
    filters?: CollectionListingFilter;
    items?: Array<GetCollectionDetailNest>;
};
type CollectionDetailResponse = {
    allowFacets?: boolean;
    type?: string;
    logo?: Media1;
    schedule?: any;
    slug?: string;
    appId?: string;
    query?: any;
    banners?: ImageUrls;
    name?: string;
    meta?: any;
    badge?: any;
    allowSort?: boolean;
    description?: string;
    cron?: any;
    tag?: Array<string>;
    isActive?: boolean;
    visibleFacetsKeys?: Array<string>;
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
    currencyCode?: string;
    currencySymbol?: string;
    max?: number;
};
type ProductListingPrice = {
    effective?: Price1;
    marked?: Price1;
};
type ProductListingDetail = {
    slug: string;
    productOnlineDate?: string;
    hasVariant?: boolean;
    ratingCount?: number;
    color?: string;
    highlights?: Array<string>;
    tryouts?: Array<string>;
    similars?: Array<string>;
    uid?: number;
    name?: string;
    medias?: Array<Media1>;
    price?: ProductListingPrice;
    rating?: number;
    imageNature?: string;
    promoMeta?: any;
    sellable?: boolean;
    attributes?: any;
    itemType?: string;
    type?: string;
    discount?: string;
    teaserTag?: any;
    shortDescription?: string;
    description?: string;
};
type GetCollectionItemsResponse = {
    page?: Page;
    filters?: Array<ProductFilters>;
    sortOn?: Array<ProductSortOn>;
    items?: Array<ProductListingDetail>;
};
type CatalogInsightBrand = {
    totalArticles?: number;
    availableArticles?: number;
    availableSizes?: number;
    name?: string;
    totalSizes?: number;
    articleFreshness?: number;
};
type CatalogInsightItem = {
    outOfStockCount?: number;
    sellableCount?: number;
    count?: number;
};
type CatalogInsightResponse = {
    brandDistribution?: CatalogInsightBrand;
    item?: CatalogInsightItem;
};
type CrossSellingData = {
    articles?: number;
    products?: number;
};
type CrossSellingResponse = {
    brandDistribution?: CatalogInsightBrand;
    data?: CrossSellingData;
};
type OptInPostRequest = {
    enabled?: boolean;
    optLevel: string;
    storeIds?: Array<number>;
    brandIds?: Array<number>;
};
type CompanyOptIn = {
    enabled: boolean;
    brandIds: Array<number>;
    modifiedOn: number;
    companyId: number;
    modifiedBy?: any;
    createdOn: number;
    optLevel: string;
    createdBy?: any;
    platform: string;
    storeIds: Array<number>;
};
type GetOptInPlatform = {
    page: Page;
    items: Array<CompanyOptIn>;
};
type OptinCompanyDetail = {
    name?: string;
    companyType?: string;
    businessType?: string;
    uid?: number;
};
type CompanyBrandDetail = {
    brandName?: string;
    companyId?: number;
    brandId?: number;
    totalArticle?: number;
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
    storeType?: string;
    modifiedOn?: string;
    storeCode?: string;
    companyId?: number;
    uid?: number;
    name?: string;
    displayName?: string;
    createdOn?: string;
    additionalContacts?: Array<any>;
    timing?: any;
    documents?: Array<any>;
};
type OptinStoreDetails = {
    page?: Page;
    items?: Array<StoreDetail>;
};
type BasePage = {
    size?: number;
    itemTotal?: number;
    hasNext?: boolean;
    hasPrevious?: boolean;
    current?: number;
};
type MultipleCommon = {
    uid?: string;
};
type ProdcutTemplateCategoriesResponse = {
    page?: BasePage;
    items?: MultipleCommon;
};
type PTErrorResponse = {
    code?: string;
    errors?: any;
    message?: string;
    meta?: any;
    status?: number;
};
type BasePage1 = {
    itemTotal?: number;
    hasNext?: boolean;
    hasPrevious?: boolean;
    nextPageId?: string;
};
type UserSerializer = {
    username?: string;
    contact?: string;
    userId?: string;
};
type GetDepartment = {
    logo?: string;
    priorityOrder?: number;
    slug?: string;
    synonyms?: Array<string>;
    modifiedOn?: string;
    search?: string;
    modifiedBy?: UserSerializer;
    createdBy?: UserSerializer;
    uid?: number;
    name?: string;
    pageSize?: number;
    createdOn?: string;
    itemType?: string;
    pageNo?: number;
    isActive?: boolean;
};
type DepartmentsResponse = {
    page?: BasePage1;
    items?: Array<GetDepartment>;
};
type DepartmentErrorResponse = {
    code?: string;
    errors?: any;
    message?: string;
    meta?: any;
    status?: number;
};
type ProductTemplate = {
    departments?: Array<string>;
    logo?: string;
    slug: string;
    modifiedOn?: string;
    modifiedBy?: any;
    isArchived?: boolean;
    createdBy?: any;
    name?: string;
    createdOn?: string;
    attributes?: Array<string>;
    tag?: string;
    description?: string;
    isActive?: boolean;
    categories?: Array<string>;
    isPhysical: boolean;
};
type TemplatesResponse = {
    page?: BasePage;
    items?: ProductTemplate;
};
type TemplatesValidationResponse = {
    data?: MultipleCommon;
};
type InventoryValidationResponse = {
    data?: MultipleCommon;
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
type ProductConfligurationDownloads = {
    data?: Array<MultipleCommon>;
    multivalue?: boolean;
};
type Media2 = {
    landscape: string;
    portrait: string;
    logo: string;
};
type Hierarchy = {
    l1: number;
    l2: number;
    department: number;
};
type CategoryMappingValues = {
    name: string;
    catalogId?: number;
};
type CategoryMapping = {
    ajio?: CategoryMappingValues;
    google?: CategoryMappingValues;
    facebook?: CategoryMappingValues;
};
type CategoryRequestBody = {
    media?: Media2;
    departments: Array<number>;
    hierarchy?: Array<Hierarchy>;
    slug?: string;
    synonyms?: Array<string>;
    tryouts?: Array<string>;
    isActive: boolean;
    name: string;
    priority?: number;
    marketplaces?: CategoryMapping;
    level: number;
};
type CategoryCreateResponse = {
    message?: string;
    uid?: number;
};
type Category = {
    media?: Media2;
    departments: Array<number>;
    hierarchy?: Array<Hierarchy>;
    slug?: string;
    synonyms?: Array<string>;
    tryouts?: Array<string>;
    isActive: boolean;
    modifiedBy?: any;
    modifiedOn?: string;
    createdBy?: any;
    id?: string;
    uid?: number;
    name: string;
    createdOn?: string;
    priority?: number;
    marketplaces?: CategoryMapping;
    level: number;
};
type CategoryResponse = {
    page?: BasePage1;
    items?: Array<Category>;
};
type CategoryUpdateResponse = {
    success?: boolean;
    message?: string;
};
type CustomOrder = {
    manufacturingTimeUnit?: string;
    manufacturingTime?: number;
    isCustomOrder?: boolean;
};
type Trader = {
    name: string;
    address: string;
};
type OrderQuantity = {
    maximum?: number;
    minimum?: number;
    isSet?: boolean;
};
type ProductPublish = {
    productOnlineDate?: string;
    isSet?: boolean;
};
type ReturnConfig = {
    unit?: string;
    returnable?: boolean;
    time?: number;
};
type TeaserTag = {
    url?: string;
    tag?: string;
};
type ProductCreateUpdate = {
    departments: Array<number>;
    multiSize?: boolean;
    customOrder?: CustomOrder;
    slug: string;
    changeRequestId?: string;
    trader?: Trader;
    moq?: OrderQuantity;
    requester?: string;
    highlights?: Array<string>;
    companyId: number;
    sizeGuide?: string;
    uid?: number;
    name: string;
    isDependent?: boolean;
    hsnCode: string;
    templateTag: string;
    isSet?: boolean;
    productPublish?: ProductPublish;
    tags?: Array<string>;
    brandUid: number;
    itemType: string;
    countryOfOrigin: string;
    categorySlug: string;
    media?: Array<Media1>;
    traderType?: string;
    variants?: any;
    itemCode: string;
    noOfBoxes?: number;
    returnConfig?: ReturnConfig;
    productGroupTag?: Array<string>;
    isImageLessProduct?: boolean;
    teaserTag?: TeaserTag;
    shortDescription?: string;
    customJson?: any;
    description?: string;
    isActive?: boolean;
    currency: string;
};
type PageData = {
    size?: number;
    itemTotal?: number;
    hasNext?: boolean;
    hasPrevious?: boolean;
    current?: string;
};
type Logo = {
    aspectRatioF?: number;
    url?: string;
    secureUrl?: string;
    aspectRatio?: string;
};
type Brand = {
    name?: string;
    logo?: Logo;
    uid?: number;
};
type ProductPublished = {
    productOnlineDate?: number;
    isSet?: boolean;
};
type UserCommon = {
    username?: string;
    companyId?: number;
    userId?: string;
};
type VerifiedBy = {
    username?: string;
    userId?: string;
};
type Product = {
    id?: string;
    departments?: Array<number>;
    multiSize?: boolean;
    slug?: string;
    allSizes?: Array<string>;
    images?: Array<string>;
    brand?: Brand;
    highlights?: string;
    companyId?: number;
    sizeGuide?: string;
    uid?: number;
    name?: string;
    isDependent?: boolean;
    hsnCode?: string;
    templateTag?: string;
    isSet?: boolean;
    productPublish?: ProductPublished;
    attributes?: Attributes;
    itemType?: string;
    countryOfOrigin?: string;
    categorySlug?: string;
    media?: Array<string>;
    itemCode?: string;
    description?: string;
    isActive?: boolean;
    currency?: string;
    sizes?: Array<any>;
};
type ProductListingResponse = {
    page?: PageData;
    items?: Array<Product>;
};
type ValidateProduct = {
    valid?: boolean;
};
type UserInfo1 = {
    userId?: string;
    username?: string;
    email?: string;
    uid?: string;
};
type BulkJob = {
    cancelledRecords?: Array<any>;
    filePath?: string;
    total: number;
    modifiedOn?: string;
    succeed?: number;
    failed?: number;
    stage?: string;
    modifiedBy?: UserInfo1;
    companyId: number;
    createdBy?: UserInfo1;
    customTemplateTag?: string;
    trackingUrl?: string;
    createdOn: string;
    cancelled?: number;
    isActive?: boolean;
    templateTag?: string;
    failedRecords?: Array<any>;
};
type UserDetail = {
    username?: string;
    fullName?: string;
    userId?: string;
};
type ProductBulkRequest = {
    cancelledRecords?: Array<string>;
    filePath?: string;
    total?: number;
    modifiedOn?: string;
    stage?: string;
    failed?: number;
    succeed?: number;
    companyId?: number;
    modifiedBy?: UserDetail;
    createdBy?: UserDetail;
    createdOn?: string;
    cancelled?: number;
    template?: ProductTemplate;
    isActive?: boolean;
    templateTag?: string;
    failedRecords?: Array<string>;
};
type ProductBulkRequestList = {
    page?: PageData;
    items?: ProductBulkRequest;
};
type BulkProductRequest = {
    templateTag: string;
    batchId: string;
    companyId: number;
    data: Array<any>;
};
type NestedTags = {
    tags?: Array<string>;
};
type ProductTagsViewResponse = {
    items?: NestedTags;
};
type ProductBulkAssets = {
    companyId?: number;
    url: string;
    user: any;
};
type Items = {
    id?: string;
    cancelledRecords?: Array<string>;
    filePath?: string;
    total?: number;
    modifiedOn?: string;
    succeed?: number;
    failed?: number;
    stage?: string;
    modifiedBy?: UserCommon;
    isActive?: boolean;
    retry?: number;
    companyId?: number;
    trackingUrl?: string;
    createdOn?: string;
    cancelled?: number;
    createdBy?: UserCommon;
    failedRecords?: Array<string>;
};
type BulkAssetResponse = {
    page?: PageData;
    items?: Array<Items>;
};
type ItemQuery = {
    itemCode?: string;
    brandUid?: number;
    uid?: number;
};
type GTIN = {
    gtinValue: string;
    gtinType: string;
    primary?: boolean;
};
type SetSize = {
    size: string;
    pieces: number;
};
type SizeDistribution = {
    sizes: Array<SetSize>;
};
type InventorySet = {
    quantity?: number;
    sizeDistribution: SizeDistribution;
};
type InvSize = {
    size: string;
    quantity: number;
    itemWeightUnitOfMeasure?: string;
    itemDimensionsUnitOfMeasure?: string;
    priceEffective: number;
    storeCode: string;
    identifiers: Array<GTIN>;
    set?: InventorySet;
    price: number;
    priceTransfer?: number;
    itemWeight?: number;
    itemHeight?: number;
    itemWidth?: number;
    itemLength?: number;
    currency: string;
    isSet?: boolean;
};
type InventoryRequest = {
    companyId: number;
    item: ItemQuery;
    sizes: Array<InvSize>;
};
type InventoryRequest1 = {
    size?: string;
    total?: number;
    search?: string;
    pageNo?: number;
    pageSize?: number;
};
type CommonResponse = {
    success?: string;
};
type BulkRequestGet = {
    templateTag?: string;
    total?: number;
    stage?: string;
    endDate?: string;
    search?: string;
    customTemplateTag?: string;
    pageNo?: number;
    pageSize?: number;
    startDate?: string;
};
type Size1 = {
    size?: string;
    quantity: number;
    sellerIdentifier: string;
    itemWeightUnitOfMeasure?: string;
    itemDimensionsUnitOfMeasure?: string;
    priceEffective: number;
    storeCode: string;
    identifiers?: Array<any>;
    set?: InventorySet;
    price: number;
    priceTransfer?: number;
    itemWeight?: number;
    itemHeight?: number;
    itemWidth?: number;
    itemLength?: number;
    currency: string;
    isSet?: boolean;
};
type InventoryBulkRequest = {
    batchId: string;
    companyId: number;
    user?: any;
    sizes: Array<Size1>;
};
type InventoryExportRequest = {
    type?: string;
    brand?: Array<number>;
    store?: Array<number>;
};
type InventoryExportJob = {
    completedOn?: string;
    triggerOn?: string;
    sellerId: number;
    taskId: string;
    requestParams?: any;
    status?: string;
    url?: string;
};
type FilerList = {
    display?: string;
    value?: string;
};
type InventoryConfig = {
    multivalues?: boolean;
    data?: Array<FilerList>;
};
type GetAddressSerializer = {
    country?: string;
    addressType?: string;
    latitude?: number;
    landmark?: string;
    address1?: string;
    pincode?: number;
    state?: string;
    city?: string;
    longitude?: number;
    countryCode?: string;
    address2?: string;
};
type Document = {
    value: string;
    verified?: boolean;
    url?: string;
    type: string;
    legalName: string;
};
type Website = {
    url?: string;
};
type BusinessDetails = {
    website?: Website;
};
type SellerPhoneNumber = {
    number: string;
    countryCode: number;
};
type ContactDetails = {
    phone?: Array<SellerPhoneNumber>;
    emails?: Array<string>;
};
type BusinessCountryInfo = {
    countryCode?: string;
    country?: string;
};
type GetCompanyProfileSerializerResponse = {
    verifiedOn?: string;
    modifiedBy?: UserSerializer;
    addresses?: Array<GetAddressSerializer>;
    warnings?: any;
    businessType: string;
    uid: number;
    createdOn?: string;
    companyType: string;
    documents?: Array<Document>;
    stage?: string;
    businessDetails?: BusinessDetails;
    modifiedOn?: string;
    name?: string;
    contactDetails?: ContactDetails;
    franchiseEnabled?: boolean;
    businessInfo?: string;
    notificationEmails?: Array<string>;
    createdBy?: UserSerializer;
    verifiedBy?: UserSerializer;
    businessCountryInfo?: BusinessCountryInfo;
};
type CompanyAddress = {
    country: string;
    latitude: number;
    landmark?: string;
    pincode: number;
    address1: string;
    state: string;
    city: string;
    longitude: number;
    countryCode?: string;
    address2?: string;
};
type ReferralInfo = {
    referralCode?: string;
};
type BusinessCountryInfo1 = {
    countryCode?: string;
    country?: string;
};
type CompanyStoreSerializerRequest = {
    uid?: number;
    document: Document;
    address: CompanyAddress;
    name: string;
    franchiseEnabled?: boolean;
    warnings?: any;
    referralInfo?: ReferralInfo;
    businessType: string;
    brands: Array<number>;
    notificationEmails?: Array<string>;
    businessInfo?: string;
    businessCountryInfo: BusinessCountryInfo1;
};
type DocumentsObj = {
    pending?: number;
    verified?: number;
};
type MetricsSerializer = {
    store?: DocumentsObj;
    uid?: number;
    storeDocuments?: DocumentsObj;
    brand?: DocumentsObj;
    companyDocuments?: DocumentsObj;
    stage?: string;
    product?: DocumentsObj;
};
type BrandBannerSerializer = {
    landscape?: string;
    portrait?: string;
};
type CreateUpdateBrandRequestSerializer = {
    synonyms?: Array<string>;
    banner?: BrandBannerSerializer;
    customJson?: any;
    uid?: number;
    localeLanguage?: any;
    name: string;
    description?: string;
    logo: string;
    brandTier?: string;
    companyId?: number;
};
type UserSerializer1 = {
    username?: string;
    contact?: string;
    userId?: string;
};
type GetBrandResponseSerializer = {
    synonyms?: Array<string>;
    banner?: BrandBannerSerializer;
    verifiedOn?: string;
    customJson?: any;
    modifiedBy?: UserSerializer1;
    uid?: number;
    rejectReason?: string;
    modifiedOn?: string;
    createdOn?: string;
    createdBy?: UserSerializer1;
    name: string;
    localeLanguage?: any;
    description?: string;
    logo?: string;
    warnings?: any;
    stage?: string;
    slugKey?: string;
    verifiedBy?: UserSerializer1;
};
type CompanyBrandListSerializer = {
    page?: any;
    items?: Array<any>;
};
type CompanyBrandPostRequestSerializer = {
    company: number;
    brands: Array<number>;
    uid?: number;
};
type LocationListSerializer = {
    page?: any;
    items?: Array<any>;
};
type ProductReturnConfigSerializer = {
    storeUid?: number;
    onSameStore?: boolean;
};
type LocationTimingSerializer = {
    minute?: number;
    hour?: number;
};
type LocationDayWiseSerializer = {
    open: boolean;
    closing?: LocationTimingSerializer;
    weekday: string;
    opening?: LocationTimingSerializer;
};
type GetAddressSerializer1 = {
    country?: string;
    addressType?: string;
    latitude?: number;
    landmark?: string;
    address1?: string;
    pincode?: number;
    state?: string;
    city?: string;
    longitude?: number;
    countryCode?: string;
    address2?: string;
};
type InvoiceCredSerializer = {
    password?: string;
    enabled?: boolean;
    username?: string;
};
type InvoiceDetailsSerializer = {
    eInvoice?: InvoiceCredSerializer;
    eWaybill?: InvoiceCredSerializer;
};
type LocationManagerSerializer = {
    email?: string;
    mobileNo: SellerPhoneNumber;
    name?: string;
};
type LocationSerializer = {
    customJson?: any;
    productReturnConfig?: ProductReturnConfigSerializer;
    uid?: number;
    timing?: Array<LocationDayWiseSerializer>;
    name: string;
    address: GetAddressSerializer1;
    displayName: string;
    documents?: Array<Document>;
    stage?: string;
    contactNumbers?: Array<SellerPhoneNumber>;
    warnings?: any;
    gstCredentials?: InvoiceDetailsSerializer;
    code: string;
    company: number;
    manager?: LocationManagerSerializer;
    storeType?: string;
    notificationEmails?: Array<string>;
};
type LocationIntegrationType = {
    order?: string;
    inventory?: string;
};
type GetCompanySerializer = {
    verifiedOn?: string;
    modifiedBy?: UserSerializer;
    uid?: number;
    rejectReason?: string;
    modifiedOn?: string;
    createdOn?: string;
    createdBy?: UserSerializer;
    name?: string;
    companyType?: string;
    addresses?: Array<GetAddressSerializer>;
    stage?: string;
    businessType?: string;
    verifiedBy?: UserSerializer;
};
type GetLocationSerializer = {
    verifiedOn?: string;
    customJson?: any;
    modifiedBy?: UserSerializer1;
    timing?: Array<LocationDayWiseSerializer>;
    address: GetAddressSerializer;
    integrationType?: LocationIntegrationType;
    warnings?: any;
    company?: GetCompanySerializer;
    productReturnConfig?: ProductReturnConfigSerializer;
    uid?: number;
    createdOn?: string;
    displayName: string;
    documents?: Array<Document>;
    contactNumbers?: Array<SellerPhoneNumber>;
    stage?: string;
    modifiedOn?: string;
    name: string;
    code: string;
    notificationEmails?: Array<string>;
    createdBy?: UserSerializer1;
    gstCredentials?: InvoiceDetailsSerializer;
    manager?: LocationManagerSerializer;
    storeType?: string;
    verifiedBy?: UserSerializer1;
    phoneNumber: string;
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
type ErrorRes = {
    message?: string;
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
type RuleDefinition = {
    calculateOn: string;
    type: string;
    currencyCode?: string;
    applicableOn: string;
    autoApply?: boolean;
    scope?: Array<string>;
    valueType: string;
    isExact?: boolean;
};
type CouponDateMeta = {
    createdOn?: string;
    modifiedOn?: string;
};
type Validation = {
    anonymous?: boolean;
    userRegisteredAfter?: string;
    appId?: Array<string>;
};
type Rule = {
    discountQty?: number;
    max?: number;
    key?: number;
    value?: number;
    min?: number;
};
type Validity = {
    priority?: number;
};
type Ownership = {
    payableBy: string;
    payableCategory: string;
};
type CouponAuthor = {
    createdBy?: string;
    modifiedBy?: string;
};
type CouponAction = {
    actionDate?: string;
    txnMode?: string;
};
type DisplayMetaDict = {
    title?: string;
    subtitle?: string;
};
type DisplayMeta = {
    description?: string;
    apply?: DisplayMetaDict;
    subtitle?: string;
    auto?: DisplayMetaDict;
    remove?: DisplayMetaDict;
    title?: string;
};
type CouponSchedule = {
    cron?: string;
    nextSchedule?: Array<any>;
    start?: string;
    end?: string;
    duration?: number;
};
type PriceRange = {
    min?: number;
    max?: number;
};
type BulkBundleRestriction = {
    multiStoreAllowed: boolean;
};
type PostOrder = {
    cancellationAllowed?: boolean;
    returnAllowed?: boolean;
};
type UsesRemaining = {
    app?: number;
    total?: number;
    user?: number;
};
type UsesRestriction = {
    remaining?: UsesRemaining;
    maximum?: UsesRemaining;
};
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    codes?: Array<string>;
    uses?: PaymentAllowValue;
    types?: Array<string>;
    networks?: Array<string>;
};
type PaymentCodes = {
    qr?: PaymentModes;
    nb?: PaymentModes;
    pl?: PaymentModes;
    upi?: PaymentModes;
    card?: PaymentModes;
    wl?: PaymentModes;
    ps?: PaymentModes;
};
type Restrictions = {
    priceRange?: PriceRange;
    orderingStores?: Array<number>;
    couponAllowed?: boolean;
    bulkBundle?: BulkBundleRestriction;
    postOrder?: PostOrder;
    uses?: UsesRestriction;
    platforms?: Array<string>;
    payments?: PaymentCodes;
};
type Identifier = {
    userId?: Array<string>;
    collectionId?: Array<string>;
    storeId?: Array<number>;
    brandId?: Array<number>;
    itemId?: Array<number>;
    companyId?: Array<number>;
    articleId?: Array<string>;
    categoryId?: Array<number>;
};
type CouponAdd = {
    ruleDefinition: RuleDefinition;
    typeSlug: string;
    dateMeta?: CouponDateMeta;
    validation?: Validation;
    tags?: Array<string>;
    rule: Array<Rule>;
    state?: State;
    validity: Validity;
    code: string;
    ownership: Ownership;
    author?: CouponAuthor;
    action?: CouponAction;
    displayMeta: DisplayMeta;
    schedule?: CouponSchedule;
    restrictions?: Restrictions;
    identifiers: Identifier;
};
type CouponsResponse = {
    items?: CouponAdd;
    page?: Page;
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
    ruleDefinition: RuleDefinition;
    typeSlug: string;
    dateMeta?: CouponDateMeta;
    validation?: Validation;
    tags?: Array<string>;
    rule: Array<Rule>;
    state?: State;
    validity: Validity;
    code: string;
    ownership: Ownership;
    author?: CouponAuthor;
    action?: CouponAction;
    displayMeta: DisplayMeta;
    schedule?: CouponSchedule;
    restrictions?: Restrictions;
    identifiers: Identifier;
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
    validity: Validity;
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
    validity: Validity;
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
import Paginator = require("../common/Paginator");
import { OrderValidator } from "./PlatformModels";
