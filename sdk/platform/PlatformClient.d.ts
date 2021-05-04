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
    inventory: Inventory;
    configuration: Configuration;
    marketplaces: Marketplaces;
    analytics: Analytics;
    discount: Discount;
    webhook: Webhook;
    application(applicationId: any): PlatformApplicationClient;
}
declare namespace PlatformClient {
    export { TicketList, Page, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, KeyValue, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, PhoneNumber, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketCategory, TicketSubCategory, SubmitButton, PollForAssignment, CustomForm, TicketHistory, Ticket, Activity, ActivityDump, AddMediaListRequest, AddMediaRequest, ApproveRequest, Attribute, AttributeObject, CreatedBy, CursorGetResponse, DateMeta, DeviceMeta, Entity, EntityRequest, FeedbackAttributes, FeedbackError, FeedbackState, GetResponse, GetReviewResponse, InsertResponse, MediaMeta, MediaMetaRequest, NumberGetResponse, PageCursor, PageNumber, Rating, RatingRequest, ReportAbuseRequest, Review, ReviewFacet, ReviewRequest, SaveAttributeRequest, SortMethod, TagMeta, Template, TemplateGetResponse, TemplateRequest, TemplateRequestList, UI, UIIcon, UpdateAttributeRequest, UpdateResponse, UpdateReviewRequest, UpdateTemplateRequest, UpdateTemplateStatusRequest, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, pagesSchema, availableSectionSchema, sectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, AvailablePages, Seo, Sections, Config, Preset, GlobalSchema, ListSchema, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, BlocksProps, PageSections, PageSectionsBlocks, PageSectionsBlocksProps, Predicate, Screen, PredicateUserSchema, Route, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, Mobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, Facebook, Accountkit, Google, UserSchema, ApplicationLegal, ApplicationLegalFAQ, SeoComponent, SeoSchema, CustomMetaTag, Detail, StorefrontAnnouncement, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, announcementSchema, scheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, AnnouncementDataSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, APIError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, CustomBlogSchema, FeatureImage, CustomBlog, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, ErrorResponseSchema, Success, CreatedModifiedByObject, PickupPointResponse, PickupPointSchema, ItemProperties, AddressObject, AdditionalContactsObject, TimingObject, OpeningClosingObject, PickupResponse, PickupConfiguration, PickupResponseItems, ShippingSchema, ShippingResponse, AssignmentSchema, FulfillmentPriorityObject, StoreSchema, StoreResponse, StoreAssignmentObject, StrategyObject, StrategyItems, StoreListResponse, ZoneSchema, ZoneListResponse, RegionObject, PincodeObject, RadiusObject, ZoneDetailsObject, UnauthenticatedUser, UnauthenticatedApplication, BadRequest, ResourceNotFound, InternalServerError, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutsResponse, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, GetActivityStatus, ActivityHistory, FailedOrders, FailOrder, MarketplaceOrder, TotalDiscountsSet, PresentmentMoney, ShopMoney, TotalPriceSet, TotalPriceSetShopMoney, TotalPriceSetPresentmentMoney, TotalTaxSet, TotalTaxSetShopMoney, TotalTaxSetPresentmentMoney, SubtotalPriceSet, SubtotalPriceSetShopMoney, SubtotalPriceSetPresentmentMoney, LineItems, LineItemsArticle, Quantities, NotAvailable, Sellable, OrderCommitted, Damaged, Manufacturer, ArticlePrice, Company, FailOrderDateMeta, MarketplaceIdentifiers, TatacliqLuxury, Dimension, Weight, Store, ArticleMeta, ArticleBrand, LineItemsArticleIdentifier, PriceSet, PriceSetShopMoney, PriceSetPresentmentMoney, TaxLines, TaxLinesPriceSet, TaxLinesPriceSetShopMoney, TaxLinesPriceSetPresentmentMoney, TotalDiscountSet, TotalDiscountSetPresentmentMoney, TotalDiscountSetShopMoney, BillingAddress, TotalShippingPriceSet, TotalShippingPriceSetShopMoney, TotalShippingPriceSetPresentmentMoney, Customer, DefaultAddress, TotalLineItemsPriceSet, TotalLineItemsPriceSetShopMoney, TotalLineItemsPriceSetPresentmentMoney, ShippingAddress, OrderListing, OrderItems, PlatformOrderUserInfo, PlatformDeliveryAddress, Channel, PlatformBreakupValues, PlatformApplication, ArticleAssignment, PlatformShipment, PlatformShipmentStatus, Bags, BagFinancialBreakup, Identifiers, BagCurrStatus, BagItem, BagItemAttributes, BagArticle, ArticleIdentifiers, Set, SetSizeDistribution, Sizes, BagArticleReturnConfig, ShipmentPrices, GstDetails, BagBreakupValues, BagCurrentStatus, BagStateMapper, BagStatus, BagStatusBagStateMapper, BagPrices, ShipmentBreakupValues, DpDetails, ShipmentInvoice, RtoAddress, StoreAddressJson, PlatformFulfillingStore, FulfillingStoreMeta, AdditionalContactDetails, Documents, Gst, ProductReturnConfig, Timing, Opening, Closing, FulfillingStoreStoreAddressJson, Payments, ShipmentGst, PlatformShipmentBrand, Promise, Timestamp, ShipmentTrackingDetails, ShipmentUser, ItemsPayments, Filters, Stages, StagesFilters, Options, NextOrderStatus, BagConfirmed, DpAssigned, ReturnBagDelivered, Placed, DeliveryDone, Pending, BagPacked, PlatformOrderPage, ItemTotal, AppliedFilters, UpdateOrderReprocessResponse, PlatformOrderTrack, GetPingResponse, UpdateShipmentStatusResponse, UpdateShipmentStatusBody, PlatformShipmentTrack, Results, UpdateProcessShipmenstRequestBody, UpdateProcessShipmenstRequestResponse, GetVoiceCallbackResponse, GetClickToCallResponse, ApefaceApiError, GetSearchWordsData, GetSearchWordsDetailResponse, ErrorResponse, DeleteResponse, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsResponse, GetAutocompleteWordsData, GetAutocompleteWordsResponse, AutocompletePageAction, AutocompleteAction, Media, AutocompleteResult, CreateAutocompleteKeyword, CreateAutocompleteWordsResponse, ProductBundleItem, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleRequest, Price, LimitedProductData, Size, GetProducts, GetProductBundleResponse, ProductBundleUpdateRequest, ListSizeGuide, Meta, Guide, ValidateSizeGuide, SuccessResponse, SizeGuideResponse, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingResponse, GetCatalogConfigurationDetailsProduct, GetCatalogConfigurationMetaData, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationListing, ProductSize, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProduct, AppCatalogConfiguration, GetAppCatalogConfiguration, AppConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductFiltersValue, ProductFiltersKey, ProductFilters, ProductSortOn, GetCollectionQueryOptionResponse, BannerImage, ImageUrls, Media1, ProductListingActionPage, ProductListingAction, GetCollectionDetailNest, CollectionListingFilterTag, CollectionListingFilterType, CollectionListingFilter, GetCollectionListingResponse, UserInfo, CollectionImage, CollectionBanner, CollectionBadge, Schedule, SeoDetail, CreateCollection, CollectionCreateResponse, CollectionDetailResponse, Price1, ProductListingPrice, ProductBrand, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductListingDetail, GetCollectionItemsResponse, CollectionItemRequest, UpdatedResponse, CatalogInsightItem, CatalogInsightBrand, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeMasterFilter, AttributeSchemaRange, AttributeMaster, AttributeMasterDetails, AttributeMasterMandatoryDetails, AttributeMasterMeta, GenderDetail, ProdcutTemplateCategoriesResponse, PTErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, ProductTemplate, TemplatesResponse, MultipleCommon, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, ProductConfligurationDownloads, CategoryMappingValues, CategoryMapping, Hierarchy, Media2, Category, CategoryResponse, CategoryRequestBody, CategoryCreateResponse, CategoryUpdateResponse, PageData, ProductPublished, VerifiedBy, UserCommon, Attributes, Logo, Brand, Product, ProductListingResponse, TeaserTag, ProductPublish, OrderQuantity, ReturnConfig, Trader, CustomOrder, ProductCreateUpdate, ValidateProduct, UserDetail, ProductBulkRequest, ProductBulkRequestList, UserInfo1, BulkJob, BulkProductRequest, NestedTags, ProductTagsViewResponse, Items, BulkAssetResponse, ProductBulkAssets, InventoryRequest, GTIN, SetSize, SizeDistribution, InventorySet, InvSize, ItemQuery, InventoryRequest1, BulkRequestGet, CommonResponse, Size1, InventoryBulkRequest, InventoryExportJob, InventoryExportRequest, FilerList, InventoryConfig, PageResponse, HsnCodesObject, HsnCodesListingResponse, HsnUpsert, HsnCode, BulkHsnUpsert, BulkHsnResponse, BrandItem, BrandListingResponse, Department, DepartmentResponse, CategoryItems, DepartmentCategoryTree, DepartmentIdentifier, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, Document, CompanyAddress, ReferralInfo, BusinessCountryInfo, CompanyStoreSerializerRequest, SellerPhoneNumber, ContactDetails, GetAddressSerializer, Website, BusinessDetails, BusinessCountryInfo1, GetCompanyProfileSerializerResponse, DocumentsObj, MetricsSerializer, UserSerializer1, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanyBrandPostRequestSerializer, GetCompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, GetAddressSerializer1, ProductReturnConfigSerializer, LocationManagerSerializer, LocationTimingSerializer, LocationDayWiseSerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, LocationSerializer, LocationIntegrationType, GetLocationSerializer, LocationListSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, RewardPointsConfig, Credit, Debit, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPoints, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, ListingPageFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, Instagram, Twitter, Pinterest, GooglePlus, Youtube, LinkedIn, Vimeo, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, Auth, GoogleMap, GoogleMapCredentials, Rule, DisplayMetaDict, DisplayMeta, Identifier, RuleDefinition, Validity, CouponAction, CouponSchedule, Validation, State, PriceRange, PaymentAllowValue, PaymentModes, PaymentCodes, BulkBundleRestriction, UsesRemaining, UsesRestriction, PostOrder, Restrictions, CouponDateMeta, CouponAuthor, Ownership, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, StoreMapping, AllChannels, MyntraPayload, AmazonPayload, FlipkartPayload, TatacliqPayload, AjioPayload, InventorySyncConfig, StoreMappingPayload, StatusPayload, StatusResp, SyncPayload, SyncResp, MkpResp, AppUser, E, Giveaway, GiveawayResponse, HistoryPretty, HistoryRes, Offer, Points, Referral, RewardUser, RewardsAudience, RewardsRule, ShareMessages, UserRes, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, ApiError, RemoveProxyResponse, EventConfig, EventConfigList, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberEvent, AuthMeta };
}
/**
        @typedef TicketList
        
        
        @property { Array<Ticket> } [items]
        
        @property { Filter } [filters]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef Page
        
        
        @property { number } [item_total]
        
        @property { string } [next_id]
        
        @property { boolean } [has_previous]
        
        @property { boolean } [has_next]
        
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
        
        @property { string } [header_image]
        
        @property { boolean } [should_notify]
        
        @property { string } [success_message]
        
        @property { PollForAssignment } [poll_for_assignment]
        
         
    */
/**
        @typedef EditCustomFormPayload
        
        
        @property { string } title
        
        @property { Array<Object> } inputs
        
        @property { string } [description]
        
        @property { string } [header_image]
        
        @property { boolean } [should_notify]
        
        @property { boolean } [login_required]
        
        @property { string } [success_message]
        
        @property { PollForAssignment } [poll_for_assignment]
        
         
    */
/**
        @typedef EditTicketPayload
        
        
        @property { TicketContent } [content]
        
        @property { string } [category]
        
        @property { string } [sub_category]
        
        @property { string } [source]
        
        @property { string } [status]
        
        @property { string } [priority]
        
        @property { AgentChangePayload } [assigned_to]
        
        @property { Array<string> } [tags]
        
         
    */
/**
        @typedef AgentChangePayload
        
        
        @property { string } agent_id
        
         
    */
/**
        @typedef CreateVideoRoomResponse
        
        
        @property { string } unique_name
        
         
    */
/**
        @typedef CloseVideoRoomResponse
        
        
        @property { boolean } success
        
         
    */
/**
        @typedef CreateVideoRoomPayload
        
        
        @property { string } unique_name
        
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
        
        
        @property { string } access_token
        
         
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
        @typedef PhoneNumber
        
        
        @property { boolean } [active]
        
        @property { boolean } [primary]
        
        @property { boolean } [verified]
        
        @property { string } [phone]
        
        @property { number } [country_code]
        
         
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
        
        
        @property { string } [application_id]
        
        @property { string } company_id
        
         
    */
/**
        @typedef CreatedOn
        
        
        @property { string } user_agent
        
         
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
        
        
        @property { Object } [created_by]
        
        @property { string } [status]
        
        @property { string } [priority]
        
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
        
        @property { Array<TicketSubCategory> } [sub_categories]
        
         
    */
/**
        @typedef TicketSubCategory
        
        
        @property { string } key
        
        @property { string } display
        
         
    */
/**
        @typedef SubmitButton
        
        
        @property { string } title
        
        @property { string } title_color
        
        @property { string } background_color
        
         
    */
/**
        @typedef PollForAssignment
        
        
        @property { number } duration
        
        @property { string } message
        
        @property { string } success_message
        
        @property { string } failure_message
        
         
    */
/**
        @typedef CustomForm
        
        
        @property { string } application_id
        
        @property { string } slug
        
        @property { string } [header_image]
        
        @property { string } title
        
        @property { string } [description]
        
        @property { boolean } login_required
        
        @property { boolean } should_notify
        
        @property { string } [success_message]
        
        @property { SubmitButton } [submit_button]
        
        @property { Array<Object> } inputs
        
        @property { CreatedOn } [created_on]
        
        @property { Object } [created_by]
        
        @property { PollForAssignment } [poll_for_assignment]
        
        @property { string } _id
        
         
    */
/**
        @typedef TicketHistory
        
        
        @property { string } type
        
        @property { Object } value
        
        @property { string } ticket_id
        
        @property { CreatedOn } [created_on]
        
        @property { Object } [created_by]
        
        @property { string } _id
        
        @property { string } [updated_at]
        
        @property { string } [created_at]
        
         
    */
/**
        @typedef Ticket
        
        
        @property { TicketContext } [context]
        
        @property { CreatedOn } [created_on]
        
        @property { string } [response_id]
        
        @property { TicketContent } [content]
        
        @property { string } ticket_id
        
        @property { TicketCategory } category
        
        @property { TicketSubCategory } [sub_category]
        
        @property { string } source
        
        @property { Status } status
        
        @property { Priority } priority
        
        @property { Object } [created_by]
        
        @property { Object } [assigned_to]
        
        @property { Array<string> } [tags]
        
        @property { Object } [_custom_json]
        
        @property { string } [_id]
        
        @property { string } [updated_at]
        
        @property { string } [created_at]
        
         
    */
/**
        @typedef Activity
        
        
        @property { Object } [current_state]
        
        @property { string } [document_id]
        
        @property { Object } [previous_state]
        
         
    */
/**
        @typedef ActivityDump
        
        
        @property { Activity } [activity]
        
        @property { CreatedBy } [created_by]
        
        @property { DateMeta } [date_meta]
        
        @property { string } [id]
        
        @property { string } [type]
        
         
    */
/**
        @typedef AddMediaListRequest
        
        
        @property { string } [entity_id]
        
        @property { string } [entity_type]
        
        @property { Array<AddMediaRequest> } [media_list]
        
        @property { string } [ref_id]
        
        @property { string } [ref_type]
        
         
    */
/**
        @typedef AddMediaRequest
        
        
        @property { string } [cloud_id]
        
        @property { string } [cloud_name]
        
        @property { string } [cloud_provider]
        
        @property { string } [entity_id]
        
        @property { string } [entity_type]
        
        @property { string } [media_url]
        
        @property { string } [ref_id]
        
        @property { string } [ref_type]
        
        @property { Array<string> } [tags]
        
        @property { string } [thumbnail_url]
        
        @property { string } [type]
        
         
    */
/**
        @typedef ApproveRequest
        
        
        @property { boolean } [approve]
        
        @property { string } [entity_type]
        
        @property { string } id
        
        @property { string } [reason]
        
         
    */
/**
        @typedef Attribute
        
        
        @property { DateMeta } [date_meta]
        
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
        
        
        @property { string } [created_on]
        
        @property { string } [modified_on]
        
         
    */
/**
        @typedef DeviceMeta
        
        
        @property { string } [app_version]
        
        @property { string } [platform]
        
         
    */
/**
        @typedef Entity
        
        
        @property { string } [id]
        
        @property { string } [type]
        
         
    */
/**
        @typedef EntityRequest
        
        
        @property { string } [entity_id]
        
        @property { string } [entity_type]
        
         
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
        
        @property { string } [request_id]
        
        @property { string } [stack_trace]
        
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
        
        
        @property { number } [max_count]
        
        @property { number } [size]
        
        @property { string } [type]
        
         
    */
/**
        @typedef MediaMetaRequest
        
        
        @property { number } max_count
        
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
        
        @property { boolean } [has_next]
        
        @property { boolean } [has_previous]
        
        @property { number } [item_total]
        
        @property { string } [next_id]
        
        @property { number } size
        
        @property { string } type
        
         
    */
/**
        @typedef PageNumber
        
        
        @property { number } [current]
        
        @property { boolean } [has_next]
        
        @property { number } [item_total]
        
        @property { number } [size]
        
        @property { string } [type]
        
         
    */
/**
        @typedef Rating
        
        
        @property { Array<Attribute> } [attributes]
        
        @property { Array<string> } [attributes_slugs]
        
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
        
        @property { string } entity_id
        
        @property { string } entity_type
        
         
    */
/**
        @typedef Review
        
        
        @property { string } [description]
        
        @property { string } [header]
        
        @property { MediaMeta } [image_meta]
        
        @property { string } [title]
        
        @property { MediaMeta } [video_meta]
        
        @property { boolean } [vote_allowed]
        
         
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
        
        @property { MediaMetaRequest } image_meta
        
        @property { boolean } is_vote_allowed
        
        @property { string } title
        
        @property { MediaMetaRequest } video_meta
        
         
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
        
        
        @property { DateMeta } [date_meta]
        
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
        
        @property { string } [enable_media_type]
        
        @property { boolean } [enable_qna]
        
        @property { boolean } enable_rating
        
        @property { boolean } enable_review
        
        @property { EntityRequest } entity
        
        @property { RatingRequest } rating
        
        @property { ReviewRequest } review
        
         
    */
/**
        @typedef TemplateRequestList
        
        
        @property { Array<TemplateRequest> } template_list
        
         
    */
/**
        @typedef UI
        
        
        @property { Array<string> } [feedback_question]
        
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
        
        @property { Array<AttributeObject> } [attributes_rating]
        
        @property { string } [description]
        
        @property { DeviceMeta } [device_meta]
        
        @property { string } [entity_id]
        
        @property { string } [entity_type]
        
        @property { Array<MediaMeta> } [media_resource]
        
        @property { number } [rating]
        
        @property { string } [review_id]
        
        @property { string } [template_id]
        
        @property { string } [title]
        
         
    */
/**
        @typedef UpdateTemplateRequest
        
        
        @property { boolean } active
        
        @property { string } [enable_media_type]
        
        @property { boolean } [enable_qna]
        
        @property { boolean } enable_rating
        
        @property { boolean } enable_review
        
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
        
        @property { number } [item_total]
        
        @property { boolean } [has_next]
        
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
        
        
        @property { string } [theme_id]
        
         
    */
/**
        @typedef UpgradableThemeSchema
        
        
        @property { string } [parent_theme]
        
        @property { string } [applied_theme]
        
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
        
        @property { string } [last_modified]
        
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
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { string } [version]
        
        @property { string } [parent_theme_version]
        
        @property { string } [parent_theme]
        
        @property { Information } [information]
        
        @property { Array<string> } [tags]
        
        @property { Src } [src]
        
        @property { AssetsSchema } [assets]
        
        @property { AvailablePages } [available_pages]
        
        @property { Array<availableSectionSchema> } [available_sections]
        
        @property { Array<sectionSchema> } [sections]
        
        @property { Object } [constants]
        
        @property { Object } [styles]
        
        @property { Config } [config]
        
        @property { Object } [settings]
        
        @property { Font } [font]
        
        @property { string } [_id]
        
        @property { number } [__v]
        
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
        
        
        @property { string } [page_key]
        
        @property { PageSections } [page_sections]
        
         
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
        
        
        @property { UmdJs } [umd_js]
        
        @property { CommonJs } [common_js]
        
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
        
        @property { GlobalSchema } [global_schema]
        
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
        
        
        @property { string } [bg_color]
        
        @property { string } [primary_color]
        
        @property { string } [secondary_color]
        
        @property { string } [accent_color]
        
        @property { string } [link_color]
        
        @property { string } [button_secondary_color]
        
         
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
        
        @property { SemiBold } [semi_bold]
        
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
        
        @property { string } [exact_url]
        
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
        
        @property { string } [country_code]
        
        @property { string } [phone]
        
        @property { boolean } [primary]
        
         
    */
/**
        @typedef EditMobileRequestSchema
        
        
        @property { string } [country_code]
        
        @property { string } [phone]
        
         
    */
/**
        @typedef EditProfileRequestSchema
        
        
        @property { string } [first_name]
        
        @property { string } [last_name]
        
        @property { string } [mobile]
        
        @property { string } [email]
        
        @property { string } [gender]
        
        @property { string } [dob]
        
        @property { string } [profile_pic_url]
        
        @property { string } [android_hash]
        
        @property { string } [sender]
        
        @property { string } [register_token]
        
         
    */
/**
        @typedef SendEmailOtpRequestSchema
        
        
        @property { string } [email]
        
        @property { string } [action]
        
        @property { string } [token]
        
        @property { string } [register_token]
        
         
    */
/**
        @typedef VerifyEmailOtpRequestSchema
        
        
        @property { string } [email]
        
        @property { string } [action]
        
        @property { string } [register_token]
        
        @property { string } [otp]
        
         
    */
/**
        @typedef VerifyOtpRequestSchema
        
        
        @property { string } [request_id]
        
        @property { string } [register_token]
        
        @property { string } [otp]
        
         
    */
/**
        @typedef SendMobileOtpRequestSchema
        
        
        @property { string } [mobile]
        
        @property { string } [country_code]
        
        @property { string } [action]
        
        @property { string } [token]
        
        @property { string } [android_hash]
        
        @property { string } [force]
        
        @property { string } [captcha_code]
        
         
    */
/**
        @typedef UpdatePasswordRequestSchema
        
        
        @property { string } [old_password]
        
        @property { string } [new_password]
        
         
    */
/**
        @typedef FormRegisterRequestSchema
        
        
        @property { string } [first_name]
        
        @property { string } [last_name]
        
        @property { string } [gender]
        
        @property { string } [email]
        
        @property { string } [password]
        
        @property { FormRegisterRequestSchemaPhone } [phone]
        
        @property { string } [register_token]
        
         
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
        
        @property { string } [captcha_code]
        
         
    */
/**
        @typedef PasswordLoginRequestSchema
        
        
        @property { string } [captcha_code]
        
        @property { string } [password]
        
        @property { string } [username]
        
         
    */
/**
        @typedef SendOtpRequestSchema
        
        
        @property { string } [country_code]
        
        @property { string } [captcha_code]
        
        @property { string } [mobile]
        
         
    */
/**
        @typedef OAuthRequestSchema
        
        
        @property { boolean } [is_signed_in]
        
        @property { OAuthRequestSchemaOauth2 } [oauth2]
        
        @property { OAuthRequestSchemaProfile } [profile]
        
         
    */
/**
        @typedef UserObjectSchema
        
        
        @property { UserSchema } [user]
        
         
    */
/**
        @typedef AuthSuccess
        
        
        @property { string } [register_token]
        
        @property { boolean } [user_exists]
        
        @property { UserSchema } [user]
        
         
    */
/**
        @typedef SendOtpResponse
        
        
        @property { number } [resend_timer]
        
        @property { string } [resend_token]
        
        @property { boolean } [success]
        
        @property { string } [request_id]
        
        @property { string } [message]
        
        @property { string } [mobile]
        
        @property { string } [country_code]
        
        @property { string } [email]
        
        @property { string } [resend_email_token]
        
        @property { string } [register_token]
        
        @property { boolean } [verify_email_otp]
        
        @property { boolean } [verify_mobile_otp]
        
        @property { boolean } [user_exists]
        
         
    */
/**
        @typedef LoginSuccess
        
        
        @property { UserSchema } [user]
        
        @property { string } [request_id]
        
        @property { string } [register_token]
        
         
    */
/**
        @typedef VerifyOtpSuccess
        
        
        @property { UserSchema } [user]
        
        @property { boolean } [user_exists]
        
         
    */
/**
        @typedef ResetPasswordSuccess
        
        
        @property { string } [status]
        
         
    */
/**
        @typedef RegisterFormSuccess
        
        
        @property { string } [email]
        
        @property { number } [resend_timer]
        
        @property { string } [resend_token]
        
        @property { string } [resend_email_token]
        
        @property { string } [register_token]
        
        @property { boolean } [success]
        
        @property { string } [request_id]
        
        @property { string } [message]
        
        @property { string } [mobile]
        
        @property { string } [country_code]
        
        @property { boolean } [verify_email_otp]
        
        @property { boolean } [verify_mobile_otp]
        
        @property { boolean } [user_exists]
        
         
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
        
        
        @property { number } [resend_timer]
        
        @property { string } [resend_token]
        
        @property { string } [register_token]
        
        @property { boolean } [success]
        
        @property { string } [request_id]
        
        @property { string } [message]
        
        @property { string } [mobile]
        
        @property { string } [country_code]
        
         
    */
/**
        @typedef EmailOtpSuccess
        
        
        @property { string } [resend_token]
        
        @property { string } [register_token]
        
         
    */
/**
        @typedef SessionListSuccess
        
        
        @property { Array<string> } [sessions]
        
         
    */
/**
        @typedef VerifyMobileOTPSuccess
        
        
        @property { UserSchema } [user]
        
        @property { boolean } [verify_mobile_link]
        
         
    */
/**
        @typedef VerifyEmailOTPSuccess
        
        
        @property { UserSchema } [user]
        
        @property { boolean } [verify_email_link]
        
         
    */
/**
        @typedef SendMobileVerifyLinkSuccess
        
        
        @property { boolean } [verify_mobile_link]
        
         
    */
/**
        @typedef SendEmailVerifyLinkSuccess
        
        
        @property { boolean } [verify_email_link]
        
         
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
        
        @property { boolean } [verify_email_otp]
        
        @property { boolean } [verify_email_link]
        
        @property { boolean } [verify_mobile_otp]
        
        @property { string } [user]
        
        @property { string } [register_token]
        
        @property { boolean } [user_exists]
        
         
    */
/**
        @typedef FormRegisterRequestSchemaPhone
        
        
        @property { string } [country_code]
        
        @property { string } [mobile]
        
         
    */
/**
        @typedef OAuthRequestSchemaOauth2
        
        
        @property { string } [access_token]
        
        @property { number } [expiry]
        
        @property { string } [refresh_token]
        
         
    */
/**
        @typedef OAuthRequestSchemaProfile
        
        
        @property { string } [last_name]
        
        @property { string } [image]
        
        @property { string } [id]
        
        @property { string } [email]
        
        @property { string } [full_name]
        
        @property { string } [first_name]
        
         
    */
/**
        @typedef AuthSuccessUser
        
        
        @property { string } [first_name]
        
        @property { string } [last_name]
        
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
        
        @property { LookAndFeel } [look_and_feel]
        
        @property { string } [updated_at]
        
        @property { boolean } [active]
        
        @property { boolean } [forgot_password]
        
        @property { Login } [login]
        
        @property { boolean } [skip_captcha]
        
        @property { string } [name]
        
        @property { MetaSchema } [meta]
        
        @property { string } [_id]
        
        @property { Social } [social]
        
        @property { RequiredFields } [required_fields]
        
        @property { RegisterRequiredFields } [register_required_fields]
        
        @property { boolean } [skip_login]
        
        @property { FlashCard } [flash_card]
        
        @property { string } [subtext]
        
        @property { SocialTokens } [social_tokens]
        
        @property { string } [created_at]
        
        @property { boolean } [register]
        
        @property { string } [mobile_image]
        
        @property { string } [desktop_image]
        
         
    */
/**
        @typedef LookAndFeel
        
        
        @property { string } [card_position]
        
        @property { string } [background_color]
        
         
    */
/**
        @typedef Login
        
        
        @property { boolean } [password]
        
        @property { boolean } [otp]
        
         
    */
/**
        @typedef MetaSchema
        
        
        @property { boolean } [fynd_default]
        
         
    */
/**
        @typedef Social
        
        
        @property { boolean } [account_kit]
        
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
        
        
        @property { boolean } [is_required]
        
        @property { string } [level]
        
         
    */
/**
        @typedef RegisterRequiredFields
        
        
        @property { RegisterRequiredFieldsEmail } [email]
        
        @property { RegisterRequiredFieldsMobile } [mobile]
        
         
    */
/**
        @typedef RegisterRequiredFieldsEmail
        
        
        @property { boolean } [is_required]
        
        @property { string } [level]
        
         
    */
/**
        @typedef RegisterRequiredFieldsMobile
        
        
        @property { boolean } [is_required]
        
        @property { string } [level]
        
         
    */
/**
        @typedef FlashCard
        
        
        @property { string } [text]
        
        @property { string } [text_color]
        
        @property { string } [background_color]
        
         
    */
/**
        @typedef SocialTokens
        
        
        @property { Facebook } [facebook]
        
        @property { Accountkit } [account_kit]
        
        @property { Google } [google]
        
         
    */
/**
        @typedef Facebook
        
        
        @property { string } [app_id]
        
         
    */
/**
        @typedef Accountkit
        
        
        @property { string } [app_id]
        
         
    */
/**
        @typedef Google
        
        
        @property { string } [app_id]
        
         
    */
/**
        @typedef UserSchema
        
        
        @property { string } [first_name]
        
        @property { string } [last_name]
        
        @property { Array<PhoneNumber> } [phone_numbers]
        
        @property { Array<Email> } [emails]
        
        @property { string } [gender]
        
        @property { string } [dob]
        
        @property { boolean } [active]
        
        @property { string } [profile_pic_url]
        
        @property { string } [username]
        
        @property { string } [account_type]
        
        @property { string } [uid]
        
        @property { Debug } [debug]
        
        @property { boolean } [has_old_password_hash]
        
        @property { string } [_id]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
         
    */
/**
        @typedef ApplicationLegal
        
        
        @property { string } [application]
        
        @property { string } [tnc]
        
        @property { string } [policy]
        
        @property { string } [shipping]
        
        @property { Array<ApplicationLegalFAQ> } [faq]
        
        @property { string } [_id]
        
        @property { string } [updated_at]
        
        @property { string } [created_at]
        
         
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
        
        @property { string } [_id]
        
        @property { string } [robots_txt]
        
        @property { boolean } [sitemap_enabled]
        
        @property { Array<Object> } [custom_meta_tags]
        
        @property { Detail } [details]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
         
    */
/**
        @typedef CustomMetaTag
        
        
        @property { string } [name]
        
        @property { string } [content]
        
        @property { string } [_id]
        
         
    */
/**
        @typedef Detail
        
        
        @property { string } [title]
        
        @property { string } [description]
        
         
    */
/**
        @typedef StorefrontAnnouncement
        
        
        @property { AnnouncementSchema } [announcements]
        
        @property { number } [refresh_rate]
        
        @property { Array<string> } [refresh_pages]
        
         
    */
/**
        @typedef AnnouncementPageSchema
        
        
        @property { string } [page_slug]
        
        @property { string } [type]
        
         
    */
/**
        @typedef EditorMeta
        
        
        @property { string } [foreground_color]
        
        @property { string } [background_color]
        
        @property { string } [content_type]
        
        @property { string } [content]
        
         
    */
/**
        @typedef AnnouncementAuthorSchema
        
        
        @property { string } [created_by]
        
        @property { string } [modified_by]
        
         
    */
/**
        @typedef AdminAnnouncementSchema
        
        
        @property { string } [_id]
        
        @property { Array<string> } [platforms]
        
        @property { string } [title]
        
        @property { string } [announcement]
        
        @property { Array<AnnouncementPageSchema> } [pages]
        
        @property { EditorMeta } [editor_meta]
        
        @property { AnnouncementAuthorSchema } [author]
        
        @property { string } [created_at]
        
        @property { string } [app]
        
        @property { string } [modified_at]
        
        @property { ScheduleSchema } [_schedule]
        
         
    */
/**
        @typedef ScheduleSchema
        
        
        @property { string } [cron]
        
        @property { string } [start]
        
        @property { string } [end]
        
        @property { number } [duration]
        
        @property { Array<Object> } [next_schedule]
        
         
    */
/**
        @typedef NextSchedule
        
        
        @property { string } [start]
        
        @property { string } [end]
        
         
    */
/**
        @typedef AnnouncementSchema
        
        
        @property { Array<Object> } [page_slug]
        
         
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
        
        
        @property { string } [aspect_ratio]
        
        @property { string } [id]
        
        @property { string } [secure_url]
        
         
    */
/**
        @typedef Author
        
        
        @property { string } [designation]
        
        @property { string } [id]
        
        @property { string } [name]
        
         
    */
/**
        @typedef BlogSchema
        
        
        @property { string } [_id]
        
        @property { Object } [_custom_json]
        
        @property { string } [application]
        
        @property { boolean } [archived]
        
        @property { Author } [author]
        
        @property { Array<ResourceContent> } [content]
        
        @property { Asset } [feature_image]
        
        @property { boolean } [published]
        
        @property { string } [reading_time]
        
        @property { string } [slug]
        
        @property { Array<string> } [tags]
        
        @property { SEO } [seo]
        
        @property { CronSchedule } [_schedule]
        
        @property { string } [title]
        
        @property { DateMeta } [date_meta]
        
         
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
        
        @property { Object } [_custom_json]
        
        @property { Author } [author]
        
        @property { Array<ResourceContent> } [content]
        
        @property { Asset } [feature_image]
        
        @property { boolean } [published]
        
        @property { string } [reading_time]
        
        @property { string } [slug]
        
        @property { Array<string> } [tags]
        
        @property { string } [title]
        
        @property { SEO } [seo]
        
        @property { CronSchedule } [_schedule]
        
         
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
        
        @property { CreatedBySchema } [created_by]
        
        @property { DateMeta } [date_meta]
        
        @property { string } [_id]
        
        @property { string } [position]
        
        @property { string } [application]
        
        @property { string } [platform]
        
        @property { NavigationReference } [navigation]
        
         
    */
/**
        @typedef LocaleLanguage
        
        
        @property { Language } [hi]
        
        @property { Language } [ar]
        
        @property { Language } [en_us]
        
         
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
        
        @property { LocaleLanguage } [_locale_language]
        
        @property { string } [image]
        
        @property { string } [type]
        
        @property { Action } [action]
        
        @property { boolean } [active]
        
        @property { string } [display]
        
        @property { number } [sort_order]
        
        @property { NavigationReference } [sub_navigation]
        
         
    */
/**
        @typedef LandingPage
        
        
        @property { LandingPageSchema } [data]
        
        @property { boolean } [success]
        
         
    */
/**
        @typedef ConfigurationSchema
        
        
        @property { number } [sleep_time]
        
        @property { boolean } [start_on_launch]
        
        @property { number } [duration]
        
        @property { string } [slide_direction]
        
         
    */
/**
        @typedef SlideshowMedia
        
        
        @property { string } [type]
        
        @property { string } [url]
        
        @property { string } [bg_color]
        
        @property { number } [duration]
        
        @property { boolean } [auto_decide_duration]
        
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
        
        @property { number } [refresh_rate]
        
        @property { Array<string> } [refresh_pages]
        
         
    */
/**
        @typedef AnnouncementDataSchema
        
        
        @property { string } [page_slug]
        
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
        
        @property { string } [sub_type]
        
        @property { string } [content]
        
         
    */
/**
        @typedef RemoveHandpickedSchema
        
        
        @property { Array<string> } [tags]
        
         
    */
/**
        @typedef CreateTagSchema
        
        
        @property { string } [name]
        
        @property { string } [sub_type]
        
        @property { string } [_id]
        
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
        
        @property { string } [request_id]
        
        @property { string } [stack_trace]
        
        @property { Object } [meta]
        
         
    */
/**
        @typedef CategorySchema
        
        
        @property { number } [index]
        
        @property { string } [_id]
        
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
        
        @property { string } [_id]
        
         
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
        
        @property { string } [_id]
        
        @property { string } [slug]
        
        @property { string } [application]
        
        @property { string } [icon_url]
        
        @property { Object } [_custom_json]
        
         
    */
/**
        @typedef FaqSchema
        
        
        @property { string } [slug]
        
        @property { string } [application]
        
        @property { string } [_id]
        
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
        
        @property { CreatedBySchema } [created_by]
        
        @property { DateMeta } [date_meta]
        
        @property { string } [_id]
        
        @property { string } [application]
        
        @property { boolean } [archived]
        
        @property { Object } [_custom_json]
        
         
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
        
        
        @property { string } [_id]
        
        @property { string } [application]
        
        @property { boolean } [archived]
        
        @property { string } [name]
        
        @property { string } [slug]
        
        @property { Array<string> } [platform]
        
        @property { CreatedBySchema } [created_by]
        
        @property { DateMeta } [date_meta]
        
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
        
        
        @property { string } [_id]
        
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
        
        @property { CreatedBySchema } [created_by]
        
        @property { DateMeta } [date_meta]
        
        @property { ScheduleSchema } [_schedule]
        
         
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
        
        
        @property { string } [_id]
        
        @property { string } [title]
        
        @property { string } [slug]
        
        @property { string } [reading_time]
        
        @property { string } [application]
        
        @property { string } [description]
        
        @property { FeatureImage } [feature_image]
        
        @property { boolean } [published]
        
        @property { boolean } [archived]
        
        @property { Array<string> } [tags]
        
        @property { ContentSchema } [content]
        
        @property { Author } [author]
        
        @property { ScheduleSchema } [_schedule]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { Object } [_custom_json]
        
         
    */
/**
        @typedef FeatureImage
        
        
        @property { string } [secure_url]
        
         
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
        
        
        @property { string } [page_type]
        
        @property { string } [display_name]
        
        @property { Array<PageSpecParam> } [params]
        
        @property { Array<PageSpecParam> } [query]
        
         
    */
/**
        @typedef PageSchema
        
        
        @property { string } [_id]
        
        @property { string } [application]
        
        @property { Array<string> } [component_ids]
        
        @property { Array<PageContent> } [content]
        
        @property { CreatedBySchema } [created_by]
        
        @property { DateMeta } [date_meta]
        
        @property { string } [description]
        
        @property { Asset } [feature_image]
        
        @property { Array<PageMeta> } [page_meta]
        
        @property { ScheduleSchema } [_schedule]
        
        @property { Object } [_custom_json]
        
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
        
        
        @property { CronSchedule } [_schedule]
        
        @property { string } [application]
        
        @property { Author } [author]
        
        @property { Object } [_custom_json]
        
        @property { string } [orientation]
        
        @property { Array<ResourceContent> } [content]
        
        @property { Asset } [feature_image]
        
        @property { boolean } [published]
        
        @property { string } [reading_time]
        
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
        
        
        @property { Array<Object> } [system_pages]
        
        @property { Array<Object> } [custom_pages]
        
        @property { string } [application_id]
        
         
    */
/**
        @typedef SlideshowGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef SlideshowSchema
        
        
        @property { string } [_id]
        
        @property { string } [slug]
        
        @property { DateMeta } [date_meta]
        
        @property { string } [application]
        
        @property { string } [platform]
        
        @property { ConfigurationSchema } [configuration]
        
        @property { Array<SlideshowMedia> } [media]
        
        @property { boolean } [active]
        
        @property { boolean } [archived]
        
        @property { Object } [_custom_json]
        
         
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
        
        @property { string } [_id]
        
        @property { string } [config_type]
        
        @property { string } [application]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
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
        
        @property { string } [_id]
        
        @property { Array<TagSchema> } [tags]
        
         
    */
/**
        @typedef TagSchema
        
        
        @property { string } [name]
        
        @property { string } [url]
        
        @property { string } [type]
        
        @property { string } [sub_type]
        
        @property { string } [_id]
        
        @property { string } [position]
        
        @property { Object } [attributes]
        
        @property { string } [content]
        
         
    */
/**
        @typedef ErrorResponseSchema
        
        
        @property { string } [message]
        
        @property { number } [code]
        
         
    */
/**
        @typedef Success
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef CreatedModifiedByObject
        
        
        @property { string } [username]
        
        @property { string } [user_id]
        
         
    */
/**
        @typedef PickupPointResponse
        
        
        @property { Array<ItemProperties> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef PickupPointSchema
        
        
        @property { Array<string> } [notification_emails]
        
        @property { string } [name]
        
        @property { boolean } [is_active]
        
        @property { string } [code]
        
        @property { AddressObject } [address]
        
        @property { AdditionalContactsObject } [additional_contacts]
        
        @property { Array<AdditionalContactsObject> } [timing]
        
        @property { CreatedModifiedByObject } [created_by]
        
        @property { TimingObject } [modified_by]
        
        @property { string } [created_on]
        
        @property { string } [modified_on]
        
         
    */
/**
        @typedef ItemProperties
        
        
        @property { Array<string> } [notification_emails]
        
        @property { string } [name]
        
        @property { boolean } [is_active]
        
        @property { string } [code]
        
        @property { AddressObject } [address]
        
        @property { AdditionalContactsObject } [additional_contacts]
        
        @property { Array<AdditionalContactsObject> } [timing]
        
        @property { CreatedModifiedByObject } [created_by]
        
        @property { TimingObject } [modified_by]
        
        @property { string } [created_on]
        
        @property { string } [modified_on]
        
         
    */
/**
        @typedef AddressObject
        
        
        @property { string } [address1]
        
        @property { string } [city]
        
        @property { string } [state]
        
        @property { number } [pincode]
        
        @property { string } [country]
        
        @property { string } [country_code]
        
         
    */
/**
        @typedef AdditionalContactsObject
        
        
        @property { number } [number]
        
        @property { number } [country_code]
        
         
    */
/**
        @typedef TimingObject
        
        
        @property { OpeningClosingObject } [opening]
        
        @property { OpeningClosingObject } [closing]
        
        @property { boolean } [open]
        
        @property { string } [weekday]
        
         
    */
/**
        @typedef OpeningClosingObject
        
        
        @property { string } [hour]
        
        @property { string } [minute]
        
         
    */
/**
        @typedef PickupResponse
        
        
        @property { Array<PickupResponseItems> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef PickupConfiguration
        
        
        @property { boolean } [datetime_check]
        
        @property { string } [header]
        
        @property { string } [instruction_for_customer]
        
         
    */
/**
        @typedef PickupResponseItems
        
        
        @property { boolean } [datetime_check]
        
        @property { string } [header]
        
        @property { string } [instruction_for_customer]
        
        @property { string } [app_id]
        
         
    */
/**
        @typedef ShippingSchema
        
        
        @property { AssignmentSchema } [assignment]
        
        @property { string } [_id]
        
        @property { string } [app_id]
        
         
    */
/**
        @typedef ShippingResponse
        
        
        @property { ShippingSchema } [data]
        
        @property { string } [message]
        
         
    */
/**
        @typedef AssignmentSchema
        
        
        @property { FulfillmentPriorityObject } [fulfillment_priority]
        
        @property { string } [default_sort_strategy]
        
         
    */
/**
        @typedef FulfillmentPriorityObject
        
        
        @property { string } [priorities]
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef StoreSchema
        
        
        @property { StoreAssignmentObject } [assignment]
        
        @property { string } [_id]
        
         
    */
/**
        @typedef StoreResponse
        
        
        @property { StoreSchema } [data]
        
        @property { string } [message]
        
         
    */
/**
        @typedef StoreAssignmentObject
        
        
        @property { StrategyObject } [strategy]
        
        @property { string } [assignment_type]
        
         
    */
/**
        @typedef StrategyObject
        
        
        @property { Array<StrategyItems> } [rules]
        
         
    */
/**
        @typedef StrategyItems
        
        
        @property { Array<string> } [product_tags]
        
        @property { string } [zone]
        
         
    */
/**
        @typedef StoreListResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef ZoneSchema
        
        
        @property { ZoneDetailsObject } [zone_detail]
        
        @property { string } [_id]
        
         
    */
/**
        @typedef ZoneListResponse
        
        
        @property { Array<ZoneSchema> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef RegionObject
        
        
        @property { string } [country]
        
        @property { string } [state]
        
         
    */
/**
        @typedef PincodeObject
        
        
        @property { Array<number> } [pincode_list]
        
         
    */
/**
        @typedef RadiusObject
        
        
        @property { number } [value]
        
         
    */
/**
        @typedef ZoneDetailsObject
        
        
        @property { RadiusObject } [radius]
        
        @property { PincodeObject } [pincode]
        
        @property { RegionObject } [region]
        
         
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
        
        @property { number } [interval_count]
        
         
    */
/**
        @typedef Plan
        
        
        @property { PlanRecurring } [recurring]
        
        @property { boolean } [is_trial_plan]
        
        @property { string } [plan_group]
        
        @property { Array<string> } [tag_lines]
        
        @property { string } [currency]
        
        @property { boolean } [is_active]
        
        @property { boolean } [is_visible]
        
        @property { number } [trial_period]
        
        @property { Array<string> } [addons]
        
        @property { Array<string> } [tags]
        
        @property { string } [type]
        
        @property { string } [country]
        
        @property { string } [_id]
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { number } [amount]
        
        @property { string } [product_suite_id]
        
        @property { string } [created_at]
        
        @property { string } [modified_at]
        
         
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
        
        @property { string } [display_text]
        
         
    */
/**
        @typedef DetailedPlan
        
        
        @property { PlanRecurring } [recurring]
        
        @property { boolean } [is_trial_plan]
        
        @property { string } [plan_group]
        
        @property { Array<string> } [tag_lines]
        
        @property { string } [currency]
        
        @property { boolean } [is_active]
        
        @property { boolean } [is_visible]
        
        @property { number } [trial_period]
        
        @property { Array<string> } [addons]
        
        @property { Array<string> } [tags]
        
        @property { string } [type]
        
        @property { string } [country]
        
        @property { string } [_id]
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { number } [amount]
        
        @property { string } [product_suite_id]
        
        @property { string } [created_at]
        
        @property { string } [modified_at]
        
        @property { Array<DetailedPlanComponents> } [components]
        
         
    */
/**
        @typedef InvoiceDetailsPeriod
        
        
        @property { string } [start]
        
        @property { string } [end]
        
         
    */
/**
        @typedef InvoiceDetailsClient
        
        
        @property { Array<string> } [address_lines]
        
        @property { string } [name]
        
        @property { string } [email]
        
        @property { string } [phone]
        
         
    */
/**
        @typedef InvoiceDetailsStatusTrail
        
        
        @property { string } [_id]
        
        @property { string } [value]
        
        @property { string } [timestamp]
        
         
    */
/**
        @typedef InvoiceDetailsPaymentMethodsDataChecks
        
        
        @property { string } [cvc_check]
        
        @property { string } [address_line1_check]
        
        @property { string } [address_postal_code_check]
        
         
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
        
        @property { number } [exp_year]
        
        @property { InvoiceDetailsPaymentMethodsDataNetworks } [networks]
        
        @property { number } [exp_month]
        
        @property { string } [fingerprint]
        
        @property { string } [generated_from]
        
        @property { InvoiceDetailsPaymentMethodsDataThreeDSecureUsage } [three_d_secure_usage]
        
         
    */
/**
        @typedef InvoiceDetailsPaymentMethods
        
        
        @property { number } [id]
        
        @property { string } [type]
        
        @property { string } [pg_payment_method_id]
        
        @property { InvoiceDetailsPaymentMethodsData } [data]
        
        @property { boolean } [is_default]
        
         
    */
/**
        @typedef InvoicePaymentMethod
        
        
        @property { string } [pg_payment_method_id]
        
         
    */
/**
        @typedef InvoiceDetails
        
        
        @property { InvoiceDetailsPeriod } [period]
        
        @property { InvoiceDetailsClient } [client]
        
        @property { boolean } [auto_advance]
        
        @property { string } [currency]
        
        @property { boolean } [paid]
        
        @property { number } [attemp]
        
        @property { string } [_id]
        
        @property { string } [collection_method]
        
        @property { string } [subscriber_id]
        
        @property { string } [invoice_url]
        
        @property { string } [number]
        
        @property { Object } [pg_data]
        
        @property { string } [receipt_number]
        
        @property { string } [statement_descriptor]
        
        @property { string } [current_status]
        
        @property { Array<InvoiceDetailsStatusTrail> } [status_trail]
        
        @property { number } [subtotal]
        
        @property { number } [total]
        
        @property { string } [subscription]
        
        @property { string } [next_action_time]
        
        @property { string } [created_at]
        
        @property { string } [modified_at]
        
        @property { string } [hash_identifier]
        
        @property { InvoicePaymentMethod } [payment_method]
        
         
    */
/**
        @typedef InvoiceItemsPlanRecurring
        
        
        @property { string } [interval]
        
        @property { number } [interval_count]
        
         
    */
/**
        @typedef InvoiceItemsPlan
        
        
        @property { InvoiceItemsPlanRecurring } [recurring]
        
        @property { boolean } [is_trial_plan]
        
        @property { string } [plan_group]
        
        @property { Array<string> } [tag_lines]
        
        @property { string } [currency]
        
        @property { boolean } [is_active]
        
        @property { boolean } [is_visible]
        
        @property { number } [trial_period]
        
        @property { Array<string> } [addons]
        
        @property { Array<string> } [tags]
        
        @property { string } [type]
        
        @property { string } [country]
        
        @property { string } [_id]
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { number } [amount]
        
        @property { string } [product_suite_id]
        
        @property { string } [created_at]
        
        @property { string } [modified_at]
        
         
    */
/**
        @typedef InvoiceItemsPeriod
        
        
        @property { string } [start]
        
        @property { string } [end]
        
         
    */
/**
        @typedef InvoiceItems
        
        
        @property { string } [_id]
        
        @property { string } [currency]
        
        @property { InvoiceItemsPlan } [plan]
        
        @property { string } [name]
        
        @property { number } [quantity]
        
        @property { string } [description]
        
        @property { InvoiceItemsPeriod } [period]
        
        @property { number } [unit_amount]
        
        @property { number } [amount]
        
        @property { string } [type]
        
        @property { string } [invoice_id]
        
        @property { string } [created_at]
        
        @property { string } [modified_at]
        
         
    */
/**
        @typedef Invoice
        
        
        @property { InvoiceDetails } [invoice]
        
        @property { Array<InvoiceItems> } [invoice_items]
        
         
    */
/**
        @typedef InvoicesDataClient
        
        
        @property { string } [name]
        
        @property { string } [email]
        
        @property { string } [phone]
        
        @property { Array<string> } [address_lines]
        
         
    */
/**
        @typedef InvoicesDataPeriod
        
        
        @property { string } [start]
        
        @property { string } [end]
        
         
    */
/**
        @typedef InvoicesDataPaymentMethod
        
        
        @property { string } [pg_payment_method_id]
        
         
    */
/**
        @typedef InvoicesData
        
        
        @property { string } [_id]
        
        @property { InvoicesDataClient } [client]
        
        @property { boolean } [auto_advance]
        
        @property { string } [currency]
        
        @property { boolean } [paid]
        
        @property { number } [attemp]
        
        @property { string } [collection_method]
        
        @property { string } [subscriber_id]
        
        @property { string } [invoice_url]
        
        @property { string } [number]
        
        @property { Object } [pg_data]
        
        @property { InvoicesDataPeriod } [period]
        
        @property { string } [receipt_number]
        
        @property { string } [statement_descriptor]
        
        @property { string } [current_status]
        
        @property { Array<InvoiceDetailsStatusTrail> } [status_trail]
        
        @property { number } [subtotal]
        
        @property { number } [total]
        
        @property { string } [subscription]
        
        @property { string } [next_action_time]
        
        @property { string } [created_at]
        
        @property { string } [modified_at]
        
        @property { string } [hash_identifier]
        
        @property { InvoicesDataPaymentMethod } [payment_method]
        
        @property { Array<InvoiceItems> } [invoice_items]
        
         
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
        
        
        @property { string } [phone_number]
        
        @property { string } [phone_country_code]
        
         
    */
/**
        @typedef SubscriptionBillingAddress
        
        
        @property { string } [country]
        
        @property { string } [state]
        
        @property { string } [city]
        
        @property { string } [line1]
        
        @property { string } [line2]
        
        @property { string } [postal_code]
        
         
    */
/**
        @typedef SubscriptionCustomer
        
        
        @property { Phone } [phone]
        
        @property { SubscriptionBillingAddress } [billing_address]
        
        @property { string } [_id]
        
        @property { string } [unique_id]
        
        @property { string } [type]
        
        @property { string } [name]
        
        @property { string } [email]
        
        @property { string } [created_at]
        
        @property { string } [modified_at]
        
        @property { Object } [data]
        
         
    */
/**
        @typedef SubscriptionCustomerCreate
        
        
        @property { Phone } [phone]
        
        @property { SubscriptionBillingAddress } [billing_address]
        
        @property { string } [unique_id]
        
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
        
        @property { string } [resume_at]
        
         
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
        
        
        @property { SubscriptionCurrentPeriod } [current_period]
        
        @property { SubscriptionPauseCollection } [pause_collection]
        
        @property { SubscriptionTrial } [trial]
        
        @property { SubscriptionInvoiceSettings } [invoice_settings]
        
        @property { boolean } [is_active]
        
        @property { boolean } [cancel_at_period_end]
        
        @property { string } [_id]
        
        @property { string } [subscriber_id]
        
        @property { string } [plan_id]
        
        @property { string } [product_suite_id]
        
        @property { Plan } [plan_data]
        
        @property { string } [current_status]
        
        @property { string } [collection_method]
        
        @property { string } [created_at]
        
        @property { string } [modified_at]
        
        @property { string } [latest_invoice]
        
         
    */
/**
        @typedef SubscriptionStatus
        
        
        @property { boolean } [is_enabled]
        
        @property { Subscription } [subscription]
        
         
    */
/**
        @typedef SubscriptionLimitApplication
        
        
        @property { boolean } [enabled]
        
        @property { number } [hard_limit]
        
        @property { number } [soft_limit]
        
         
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
        
        @property { SubscriptionLimitOtherPlatform } [other_platform]
        
        @property { SubscriptionLimitTeam } [team]
        
        @property { SubscriptionLimitProducts } [products]
        
        @property { SubscriptionLimitExtensions } [extensions]
        
        @property { SubscriptionLimitIntegrations } [integrations]
        
        @property { boolean } [is_trial_plan]
        
         
    */
/**
        @typedef SubscriptionActivateReq
        
        
        @property { string } [unique_id]
        
        @property { string } [type]
        
        @property { string } [product_suite]
        
        @property { string } [plan_id]
        
        @property { string } [payment_method]
        
         
    */
/**
        @typedef SubscriptionActivateRes
        
        
        @property { boolean } [success]
        
        @property { Subscription } [data]
        
         
    */
/**
        @typedef CancelSubscriptionReq
        
        
        @property { string } [unique_id]
        
        @property { string } [type]
        
        @property { string } [product_suite]
        
        @property { string } [subscription_id]
        
         
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
        
        
        @property { string } [_id]
        
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
        
        @property { boolean } [is_active]
        
        @property { string } [name]
        
        @property { string } [file_url]
        
        @property { string } [type]
        
        @property { number } [records_count]
        
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
        
        
        @property { string } [_id]
        
        @property { string } [from_name]
        
        @property { string } [from_email]
        
         
    */
/**
        @typedef CampaignEmail
        
        
        @property { CampaignEmailTemplate } [template]
        
        @property { CampignEmailProvider } [provider]
        
         
    */
/**
        @typedef Campaign
        
        
        @property { RecipientHeaders } [recipient_headers]
        
        @property { CampaignEmail } [email]
        
        @property { string } [description]
        
        @property { Array<any> } [tags]
        
        @property { boolean } [is_active]
        
        @property { string } [_id]
        
        @property { string } [datasource]
        
        @property { string } [type]
        
        @property { string } [name]
        
        @property { string } [application]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { string } [slug]
        
        @property { number } [__v]
        
         
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
        
        
        @property { string } [phone_number]
        
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
        
        @property { boolean } [is_active]
        
        @property { string } [name]
        
        @property { string } [file_url]
        
        @property { string } [type]
        
        @property { number } [records_count]
        
        @property { string } [application]
        
         
    */
/**
        @typedef Audience
        
        
        @property { string } [description]
        
        @property { Array<string> } [tags]
        
        @property { Array<string> } [headers]
        
        @property { boolean } [is_active]
        
        @property { string } [_id]
        
        @property { string } [name]
        
        @property { string } [file_url]
        
        @property { string } [type]
        
        @property { number } [records_count]
        
        @property { string } [application]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { string } [slug]
        
        @property { number } [__v]
        
         
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
        
        @property { boolean } [is_default]
        
         
    */
/**
        @typedef EmailProviderReq
        
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } [api_key]
        
        @property { string } [type]
        
        @property { string } [provider]
        
        @property { Array<EmailProviderReqFrom> } [from]
        
         
    */
/**
        @typedef EmailProvider
        
        
        @property { string } [type]
        
        @property { string } [provider]
        
        @property { Array<EmailProviderReqFrom> } [from]
        
        @property { string } [_id]
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } [api_key]
        
        @property { string } [application]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { string } [slug]
        
        @property { number } [__v]
        
         
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
        
        @property { Array<string> } [static_to]
        
        @property { Array<string> } [static_cc]
        
        @property { Array<string> } [static_bcc]
        
        @property { string } [reply_to]
        
        @property { Array<EmailTemplateHeaders> } [headers]
        
        @property { TemplateAndType } [subject]
        
        @property { TemplateAndType } [html]
        
        @property { TemplateAndType } [text]
        
        @property { Array<any> } [attachments]
        
        @property { string } [priority]
        
         
    */
/**
        @typedef TemplateAndType
        
        
        @property { string } [template_type]
        
        @property { string } [template]
        
         
    */
/**
        @typedef EmailTemplateRes
        
        
        @property { boolean } [is_system]
        
        @property { boolean } [is_internal]
        
        @property { string } [description]
        
        @property { Array<string> } [static_to]
        
        @property { Array<string> } [static_cc]
        
        @property { Array<string> } [static_bcc]
        
        @property { Array<any> } [tags]
        
        @property { string } [priority]
        
        @property { boolean } [published]
        
        @property { string } [_id]
        
        @property { string } [name]
        
        @property { EmailTemplateKeys } [keys]
        
        @property { string } [from]
        
        @property { string } [reply_to]
        
        @property { Array<EmailTemplateHeaders> } [headers]
        
        @property { TemplateAndType } [subject]
        
        @property { TemplateAndType } [html]
        
        @property { TemplateAndType } [text]
        
        @property { Array<any> } [attachments]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { string } [slug]
        
        @property { number } [__v]
        
         
    */
/**
        @typedef EmailTemplate
        
        
        @property { boolean } [is_system]
        
        @property { boolean } [is_internal]
        
        @property { string } [description]
        
        @property { Array<any> } [static_to]
        
        @property { Array<any> } [static_cc]
        
        @property { Array<any> } [static_bcc]
        
        @property { Array<any> } [tags]
        
        @property { string } [priority]
        
        @property { boolean } [published]
        
        @property { string } [_id]
        
        @property { string } [slug]
        
        @property { string } [name]
        
        @property { string } [from]
        
        @property { string } [from_name]
        
        @property { TemplateAndType } [subject]
        
        @property { TemplateAndType } [html]
        
        @property { TemplateAndType } [text]
        
        @property { Array<any> } [headers]
        
        @property { Array<any> } [attachments]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
    */
/**
        @typedef SystemEmailTemplate
        
        
        @property { boolean } [is_system]
        
        @property { boolean } [is_internal]
        
        @property { string } [description]
        
        @property { Array<any> } [static_to]
        
        @property { Array<any> } [static_cc]
        
        @property { Array<any> } [static_bcc]
        
        @property { Array<any> } [tags]
        
        @property { string } [priority]
        
        @property { boolean } [published]
        
        @property { string } [_id]
        
        @property { string } [slug]
        
        @property { string } [name]
        
        @property { string } [from]
        
        @property { string } [from_name]
        
        @property { TemplateAndType } [subject]
        
        @property { TemplateAndType } [html]
        
        @property { TemplateAndType } [text]
        
        @property { Array<any> } [headers]
        
        @property { Array<any> } [attachments]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
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
        
        @property { boolean } [is_default]
        
        @property { string } [_id]
        
        @property { string } [application]
        
        @property { string } [event]
        
        @property { string } [slug]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
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
        
        
        @property { string } [job_id]
        
         
    */
/**
        @typedef Job
        
        
        @property { boolean } [completed]
        
        @property { boolean } [is_active]
        
        @property { string } [_id]
        
        @property { string } [campaign]
        
        @property { string } [application]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
    */
/**
        @typedef Jobs
        
        
        @property { Array<Job> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef JobLog
        
        
        @property { any } [imported]
        
        @property { any } [processed]
        
        @property { string } [_id]
        
        @property { string } [job]
        
        @property { string } [campaign]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
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
        
        @property { string } [_id]
        
        @property { string } [application]
        
        @property { string } [service]
        
        @property { string } [step]
        
        @property { string } [status]
        
        @property { any } [data]
        
        @property { string } [expire_at]
        
        @property { string } [created_at]
        
         
    */
/**
        @typedef Logs
        
        
        @property { Array<Log> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef PushtokenReq
        
        
        @property { string } [action]
        
        @property { string } [bundle_identifier]
        
        @property { string } [push_token]
        
        @property { string } [unique_device_id]
        
         
    */
/**
        @typedef PushtokenRes
        
        
        @property { string } [_id]
        
        @property { string } [bundle_identifier]
        
        @property { string } [push_token]
        
        @property { string } [unique_device_id]
        
        @property { string } [type]
        
        @property { string } [platform]
        
        @property { string } [application_id]
        
        @property { string } [user_id]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { string } [expired_at]
        
         
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
        
        @property { string } [_id]
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } [sender]
        
        @property { string } [username]
        
        @property { string } [authkey]
        
        @property { string } [application]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { string } [slug]
        
        @property { number } [__v]
        
         
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
        
        
        @property { string } [template_type]
        
        @property { string } [template]
        
         
    */
/**
        @typedef SmsTemplateReq
        
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { SmsTemplateMessage } [message]
        
        @property { any } [template_variables]
        
        @property { Array<any> } [attachments]
        
        @property { string } [priority]
        
         
    */
/**
        @typedef SmsTemplateRes
        
        
        @property { boolean } [is_system]
        
        @property { boolean } [is_internal]
        
        @property { string } [description]
        
        @property { Array<any> } [tags]
        
        @property { string } [priority]
        
        @property { boolean } [published]
        
        @property { string } [_id]
        
        @property { string } [name]
        
        @property { SmsTemplateMessage } [message]
        
        @property { any } [template_variables]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { string } [slug]
        
        @property { number } [__v]
        
         
    */
/**
        @typedef SmsTemplate
        
        
        @property { boolean } [is_system]
        
        @property { boolean } [is_internal]
        
        @property { string } [description]
        
        @property { string } [priority]
        
        @property { Array<any> } [tags]
        
        @property { boolean } [published]
        
        @property { string } [_id]
        
        @property { string } [slug]
        
        @property { string } [name]
        
        @property { SmsTemplateMessage } [message]
        
        @property { any } [template_variables]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
    */
/**
        @typedef SystemSmsTemplate
        
        
        @property { boolean } [is_system]
        
        @property { boolean } [is_internal]
        
        @property { string } [description]
        
        @property { Array<any> } [tags]
        
        @property { string } [priority]
        
        @property { boolean } [published]
        
        @property { string } [_id]
        
        @property { string } [slug]
        
        @property { string } [name]
        
        @property { SmsTemplateMessage } [message]
        
        @property { any } [template_variables]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
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
        
        @property { string } [click_action]
        
         
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
        
        @property { string } [time_to_live]
        
         
    */
/**
        @typedef SystemNotification
        
        
        @property { Notification } [notification]
        
        @property { SystemNotificationUser } [user]
        
        @property { SystemNotificationUser } [settings]
        
        @property { string } [_id]
        
        @property { string } [group]
        
        @property { string } [created_at]
        
         
    */
/**
        @typedef SystemNotificationsPage
        
        
        @property { string } [type]
        
        @property { number } [current]
        
        @property { number } [size]
        
        @property { number } [item_total]
        
        @property { boolean } [has_next]
        
         
    */
/**
        @typedef SystemNotifications
        
        
        @property { Array<SystemNotification> } [items]
        
        @property { number } [last_read_anchor]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef PaymentGatewayConfigResponse
        
        
        @property { Array<string> } display_fields
        
        @property { Array<Object> } [aggregators]
        
        @property { string } app_id
        
        @property { boolean } success
        
        @property { Array<string> } excluded_fields
        
        @property { boolean } created
        
         
    */
/**
        @typedef ErrorCodeDescription
        
        
        @property { boolean } success
        
        @property { string } description
        
        @property { string } code
        
         
    */
/**
        @typedef PaymentGatewayConfig
        
        
        @property { string } key
        
        @property { string } merchant_salt
        
        @property { string } secret
        
        @property { string } config_type
        
        @property { boolean } [is_active]
        
         
    */
/**
        @typedef PaymentGatewayConfigRequest
        
        
        @property { PaymentGatewayConfig } [aggregator_name]
        
        @property { boolean } [is_active]
        
        @property { string } app_id
        
         
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
        
        
        @property { string } small
        
        @property { string } large
        
         
    */
/**
        @typedef PaymentModeList
        
        
        @property { string } [card_name]
        
        @property { string } [card_token]
        
        @property { string } [card_brand_image]
        
        @property { number } [display_priority]
        
        @property { string } [code]
        
        @property { string } [display_name]
        
        @property { string } aggregator_name
        
        @property { string } [intent_flow]
        
        @property { string } [card_brand]
        
        @property { number } [exp_month]
        
        @property { number } [exp_year]
        
        @property { number } [retry_count]
        
        @property { string } [card_issuer]
        
        @property { string } [card_id]
        
        @property { boolean } [expired]
        
        @property { number } [timeout]
        
        @property { string } [card_fingerprint]
        
        @property { string } [card_isin]
        
        @property { string } [card_type]
        
        @property { string } [card_number]
        
        @property { string } [card_reference]
        
        @property { Array<string> } [intent_app_error_list]
        
        @property { string } [merchant_code]
        
        @property { string } [nickname]
        
        @property { string } [fynd_vpa]
        
        @property { string } [name]
        
        @property { PaymentModeLogo } [logo_url]
        
         
    */
/**
        @typedef RootPaymentMode
        
        
        @property { string } name
        
        @property { boolean } [anonymous_enable]
        
        @property { boolean } [add_card_enabled]
        
        @property { Array<PaymentModeList> } [list]
        
        @property { number } display_priority
        
        @property { string } display_name
        
        @property { string } [aggregator_name]
        
         
    */
/**
        @typedef PaymentOptions
        
        
        @property { Array<RootPaymentMode> } payment_option
        
         
    */
/**
        @typedef PaymentOptionsResponse
        
        
        @property { boolean } success
        
        @property { PaymentOptions } payment_options
        
         
    */
/**
        @typedef PayoutsResponse
        
        
        @property { boolean } is_active
        
        @property { Object } unique_transfer_no
        
        @property { boolean } is_default
        
        @property { Array<Object> } payouts_aggregators
        
        @property { Object } more_attributes
        
        @property { Object } customers
        
        @property { string } transfer_type
        
         
    */
/**
        @typedef PayoutRequest
        
        
        @property { string } unique_external_id
        
        @property { Object } users
        
        @property { boolean } is_active
        
        @property { Object } bank_details
        
        @property { string } transfer_type
        
        @property { string } aggregator
        
         
    */
/**
        @typedef PayoutResponse
        
        
        @property { Object } payouts
        
        @property { Object } users
        
        @property { string } unique_transfer_no
        
        @property { string } payment_status
        
        @property { boolean } success
        
        @property { string } transfer_type
        
        @property { Object } bank_details
        
        @property { boolean } created
        
        @property { boolean } is_active
        
        @property { string } aggregator
        
         
    */
/**
        @typedef UpdatePayoutResponse
        
        
        @property { boolean } success
        
        @property { boolean } is_default
        
        @property { boolean } is_active
        
         
    */
/**
        @typedef UpdatePayoutRequest
        
        
        @property { string } unique_external_id
        
        @property { boolean } is_default
        
        @property { boolean } is_active
        
         
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
        
        
        @property { string } unique_external_id
        
         
    */
/**
        @typedef SaveSubscriptionSetupIntentResponse
        
        
        @property { Object } data
        
        @property { boolean } success
        
         
    */
/**
        @typedef GetActivityStatus
        
        
        @property { ActivityHistory } activity_history
        
         
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
        
        
        @property { string } [updated_at]
        
        @property { string } [_id]
        
        @property { string } [reason]
        
        @property { MarketplaceOrder } [marketplace_order]
        
        @property { string } [marketplace_order_id]
        
        @property { string } [created_at]
        
        @property { string } [app_id]
        
        @property { string } [marketplace]
        
        @property { number } [company_id]
        
         
    */
/**
        @typedef MarketplaceOrder
        
        
        @property { string } [order_status_url]
        
        @property { string } [admin_graphql_api_id]
        
        @property { string } [email]
        
        @property { boolean } [test]
        
        @property { string } [note]
        
        @property { string } [total_price]
        
        @property { number } [app_id]
        
        @property { TotalDiscountsSet } [total_discounts_set]
        
        @property { TotalPriceSet } [total_price_set]
        
        @property { TotalTaxSet } [total_tax_set]
        
        @property { string } [gateway]
        
        @property { string } [name]
        
        @property { SubtotalPriceSet } [subtotal_price_set]
        
        @property { number } [number]
        
        @property { boolean } [buyer_accepts_marketing]
        
        @property { string } [contact_email]
        
        @property { string } [token]
        
        @property { string } [source_name]
        
        @property { Array<any> } [payment_gateway_names]
        
        @property { string } [presentment_currency]
        
        @property { string } [subtotal_price]
        
        @property { string } [processed_at]
        
        @property { number } [order_number]
        
        @property { string } [total_tip_received]
        
        @property { number } [id]
        
        @property { boolean } [confirmed]
        
        @property { string } [currency]
        
        @property { string } [total_line_items_price]
        
        @property { LineItems } [line_items]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [total_weight]
        
        @property { BillingAddress } [billing_address]
        
        @property { TotalShippingPriceSet } [total_shipping_price_set]
        
        @property { Customer } [customer]
        
        @property { string } [total_discounts]
        
        @property { TotalLineItemsPriceSet } [total_line_items_price_set]
        
        @property { string } [tags]
        
        @property { string } [total_price_usd]
        
        @property { number } [user_id]
        
        @property { string } [total_tax]
        
        @property { string } [processing_method]
        
        @property { ShippingAddress } [shipping_address]
        
        @property { boolean } [taxes_included]
        
        @property { string } [financial_status]
        
         
    */
/**
        @typedef TotalDiscountsSet
        
        
        @property { PresentmentMoney } [presentment_money]
        
        @property { ShopMoney } [shop_money]
        
         
    */
/**
        @typedef PresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */
/**
        @typedef ShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */
/**
        @typedef TotalPriceSet
        
        
        @property { TotalPriceSetShopMoney } [shop_money]
        
        @property { TotalPriceSetPresentmentMoney } [presentment_money]
        
         
    */
/**
        @typedef TotalPriceSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */
/**
        @typedef TotalPriceSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */
/**
        @typedef TotalTaxSet
        
        
        @property { TotalTaxSetShopMoney } [shop_money]
        
        @property { TotalTaxSetPresentmentMoney } [presentment_money]
        
         
    */
/**
        @typedef TotalTaxSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */
/**
        @typedef TotalTaxSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */
/**
        @typedef SubtotalPriceSet
        
        
        @property { SubtotalPriceSetShopMoney } [shop_money]
        
        @property { SubtotalPriceSetPresentmentMoney } [presentment_money]
        
         
    */
/**
        @typedef SubtotalPriceSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */
/**
        @typedef SubtotalPriceSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */
/**
        @typedef LineItems
        
        
        @property { string } [sku]
        
        @property { number } [fulfillable_quantity]
        
        @property { number } [grams]
        
        @property { string } [total_discount]
        
        @property { LineItemsArticle } [article]
        
        @property { string } [title]
        
        @property { string } [variant_inventory_management]
        
        @property { number } [id]
        
        @property { number } [variant_id]
        
        @property { string } [variant_title]
        
        @property { boolean } [product_exists]
        
        @property { string } [price]
        
        @property { string } [admin_graphql_api_id]
        
        @property { number } [quantity]
        
        @property { string } [vendor]
        
        @property { string } [fulfillment_service]
        
        @property { boolean } [taxable]
        
        @property { string } [name]
        
        @property { number } [product_id]
        
        @property { PriceSet } [price_set]
        
        @property { TaxLines } [tax_lines]
        
        @property { boolean } [requires_shipping]
        
        @property { boolean } [gift_card]
        
        @property { TotalDiscountSet } [total_discount_set]
        
         
    */
/**
        @typedef LineItemsArticle
        
        
        @property { Quantities } [quantities]
        
        @property { string } [old_article_uid]
        
        @property { number } [total_quantity]
        
        @property { Manufacturer } [manufacturer]
        
        @property { ArticlePrice } [price]
        
        @property { boolean } [track_inventory]
        
        @property { Company } [company]
        
        @property { boolean } [is_active]
        
        @property { FailOrderDateMeta } [date_meta]
        
        @property { boolean } [fragile]
        
        @property { MarketplaceIdentifiers } [marketplace_identifiers]
        
        @property { string } [size]
        
        @property { boolean } [is_set]
        
        @property { Dimension } [dimension]
        
        @property { Weight } [weight]
        
        @property { Store } [store]
        
        @property { ArticleMeta } [meta]
        
        @property { string } [uid]
        
        @property { ArticleBrand } [brand]
        
        @property { number } [item_id]
        
        @property { string } [fynd_article_code]
        
        @property { string } [_id]
        
        @property { LineItemsArticleIdentifier } [identifier]
        
        @property { string } [seller_identifier]
        
        @property { string } [fynd_item_code]
        
        @property { string } [country_of_origin]
        
         
    */
/**
        @typedef Quantities
        
        
        @property { NotAvailable } [not_available]
        
        @property { Sellable } [sellable]
        
        @property { OrderCommitted } [order_committed]
        
        @property { Damaged } [damaged]
        
         
    */
/**
        @typedef NotAvailable
        
        
        @property { number } [count]
        
        @property { string } [updated_at]
        
         
    */
/**
        @typedef Sellable
        
        
        @property { number } [count]
        
        @property { string } [updated_at]
        
         
    */
/**
        @typedef OrderCommitted
        
        
        @property { number } [count]
        
        @property { string } [updated_at]
        
         
    */
/**
        @typedef Damaged
        
        
        @property { string } [updated_at]
        
        @property { number } [count]
        
         
    */
/**
        @typedef Manufacturer
        
        
        @property { boolean } [is_default]
        
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
        
        @property { string } [company_type]
        
        @property { string } [business_type]
        
        @property { string } [company_name]
        
        @property { string } [created_on]
        
        @property { string } [pan_no]
        
        @property { boolean } [return_allowed]
        
        @property { string } [meta]
        
        @property { boolean } [exchange_allowed]
        
        @property { string } [agreement_start_date]
        
        @property { number } [exchange_within_days]
        
        @property { number } [payment_procesing_charge]
        
        @property { boolean } [fynd_a_fit_available]
        
        @property { string } [modified_on]
        
        @property { number } [return_within_days]
        
         
    */
/**
        @typedef FailOrderDateMeta
        
        
        @property { string } [added_on_store]
        
        @property { string } [inventory_updated_on]
        
        @property { string } [created_on]
        
        @property { string } [modified_on]
        
         
    */
/**
        @typedef MarketplaceIdentifiers
        
        
        @property { TatacliqLuxury } [tatacliq_luxury]
        
         
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
        
        @property { boolean } [is_default]
        
         
    */
/**
        @typedef Weight
        
        
        @property { boolean } [is_default]
        
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
        
        
        @property { string } [sku_code]
        
         
    */
/**
        @typedef PriceSet
        
        
        @property { PriceSetShopMoney } [shop_money]
        
        @property { PriceSetPresentmentMoney } [presentment_money]
        
         
    */
/**
        @typedef PriceSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */
/**
        @typedef PriceSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */
/**
        @typedef TaxLines
        
        
        @property { string } [title]
        
        @property { string } [price]
        
        @property { number } [rate]
        
        @property { TaxLinesPriceSet } [price_set]
        
         
    */
/**
        @typedef TaxLinesPriceSet
        
        
        @property { TaxLinesPriceSetShopMoney } [shop_money]
        
        @property { TaxLinesPriceSetPresentmentMoney } [presentment_money]
        
         
    */
/**
        @typedef TaxLinesPriceSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */
/**
        @typedef TaxLinesPriceSetPresentmentMoney
        
        
        @property { string } [currency_code]
        
        @property { string } [amount]
        
         
    */
/**
        @typedef TotalDiscountSet
        
        
        @property { TotalDiscountSetPresentmentMoney } [presentment_money]
        
        @property { TotalDiscountSetShopMoney } [shop_money]
        
         
    */
/**
        @typedef TotalDiscountSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */
/**
        @typedef TotalDiscountSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */
/**
        @typedef BillingAddress
        
        
        @property { string } [address1]
        
        @property { string } [city]
        
        @property { string } [zip]
        
        @property { string } [last_name]
        
        @property { string } [address2]
        
        @property { number } [longitude]
        
        @property { string } [province_code]
        
        @property { string } [phone]
        
        @property { string } [company]
        
        @property { number } [latitude]
        
        @property { string } [name]
        
        @property { string } [country]
        
        @property { string } [country_code]
        
        @property { string } [first_name]
        
        @property { string } [province]
        
         
    */
/**
        @typedef TotalShippingPriceSet
        
        
        @property { TotalShippingPriceSetShopMoney } [shop_money]
        
        @property { TotalShippingPriceSetPresentmentMoney } [presentment_money]
        
         
    */
/**
        @typedef TotalShippingPriceSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */
/**
        @typedef TotalShippingPriceSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */
/**
        @typedef Customer
        
        
        @property { string } [created_at]
        
        @property { number } [id]
        
        @property { string } [last_name]
        
        @property { string } [state]
        
        @property { number } [last_order_id]
        
        @property { string } [note]
        
        @property { boolean } [verified_email]
        
        @property { string } [phone]
        
        @property { boolean } [accepts_marketing]
        
        @property { string } [first_name]
        
        @property { string } [tags]
        
        @property { string } [last_order_name]
        
        @property { number } [orders_count]
        
        @property { string } [total_spent]
        
        @property { boolean } [tax_exempt]
        
        @property { string } [currency]
        
        @property { string } [accepts_marketing_updated_at]
        
        @property { string } [email]
        
        @property { string } [updated_at]
        
        @property { string } [admin_graphql_api_id]
        
        @property { DefaultAddress } [default_address]
        
         
    */
/**
        @typedef DefaultAddress
        
        
        @property { string } [last_name]
        
        @property { string } [name]
        
        @property { string } [province_code]
        
        @property { string } [country_code]
        
        @property { boolean } [is_default]
        
        @property { number } [id]
        
        @property { number } [customer_id]
        
        @property { string } [first_name]
        
        @property { string } [address1]
        
        @property { string } [phone]
        
        @property { string } [country_name]
        
        @property { string } [company]
        
        @property { string } [address2]
        
        @property { string } [city]
        
        @property { string } [province]
        
        @property { string } [country]
        
        @property { string } [zip]
        
         
    */
/**
        @typedef TotalLineItemsPriceSet
        
        
        @property { TotalLineItemsPriceSetShopMoney } [shop_money]
        
        @property { TotalLineItemsPriceSetPresentmentMoney } [presentment_money]
        
         
    */
/**
        @typedef TotalLineItemsPriceSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */
/**
        @typedef TotalLineItemsPriceSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */
/**
        @typedef ShippingAddress
        
        
        @property { string } [address1]
        
        @property { string } [zip]
        
        @property { string } [address2]
        
        @property { string } [country_code]
        
        @property { string } [country]
        
        @property { string } [last_name]
        
        @property { number } [latitude]
        
        @property { string } [province_code]
        
        @property { string } [first_name]
        
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
        
        @property { NextOrderStatus } next_order_status
        
        @property { PlatformOrderPage } page
        
        @property { AppliedFilters } applied_filters
        
         
    */
/**
        @typedef OrderItems
        
        
        @property { PlatformOrderUserInfo } [user]
        
        @property { PlatformDeliveryAddress } [delivery_address]
        
        @property { Channel } [channel]
        
        @property { PlatformBreakupValues } [breakup_values]
        
        @property { string } [id]
        
        @property { PlatformApplication } [application]
        
        @property { PlatformShipment } [shipments]
        
        @property { string } [created_at]
        
        @property { number } [total_shipments_in_order]
        
        @property { ItemsPayments } [payments]
        
         
    */
/**
        @typedef PlatformOrderUserInfo
        
        
        @property { string } [mobile]
        
        @property { string } [first_name]
        
        @property { string } [gender]
        
        @property { string } [email]
        
        @property { string } [last_name]
        
        @property { boolean } [is_anonymous_user]
        
        @property { number } [uid]
        
        @property { string } [avis_user_id]
        
         
    */
/**
        @typedef PlatformDeliveryAddress
        
        
        @property { string } [area]
        
        @property { string } [state]
        
        @property { string } [country]
        
        @property { string } [version]
        
        @property { string } [address1]
        
        @property { number } [latitude]
        
        @property { string } [updated_at]
        
        @property { string } [city]
        
        @property { string } [landmark]
        
        @property { string } [created_at]
        
        @property { string } [name]
        
        @property { string } [address]
        
        @property { string } [phone]
        
        @property { number } [longitude]
        
        @property { string } [address_type]
        
        @property { string } [email]
        
        @property { string } [pincode]
        
        @property { string } [address2]
        
        @property { string } [contact_person]
        
        @property { string } [address_category]
        
         
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
        
        @property { boolean } [post_order_reassignment]
        
        @property { string } [id]
        
        @property { string } [description]
        
        @property { boolean } [dp_assignment]
        
        @property { ArticleAssignment } [article_assignment]
        
        @property { boolean } [force_reassignment]
        
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
        
        @property { ShipmentBreakupValues } [breakup_values]
        
        @property { string } [id]
        
        @property { DpDetails } [dp_details]
        
        @property { ShipmentInvoice } [invoice]
        
        @property { PlatformFulfillingStore } [fulfilling_store]
        
        @property { Payments } [payments]
        
        @property { ShipmentGst } [gst]
        
        @property { Company } [company]
        
        @property { PlatformShipmentBrand } [brand]
        
        @property { Object } [coupon]
        
        @property { string } [order_source]
        
        @property { boolean } [is_not_fynd_source]
        
        @property { string } [comment]
        
        @property { Promise } [promise]
        
        @property { ShipmentTrackingDetails } [tracking_details]
        
        @property { boolean } [is_fynd_coupon]
        
        @property { string } [order_type]
        
        @property { ShipmentUser } [user]
        
         
    */
/**
        @typedef PlatformShipmentStatus
        
        
        @property { number } [id]
        
        @property { Array<number> } [bag_list]
        
        @property { string } [created_at]
        
        @property { string } [status]
        
        @property { string } [name]
        
        @property { number } [progress]
        
        @property { string } [shipment_id]
        
        @property { string } [current_shipment_status]
        
        @property { string } [color_code]
        
         
    */
/**
        @typedef Bags
        
        
        @property { Array<BagFinancialBreakup> } [financial_breakup]
        
        @property { BagCurrStatus } [status]
        
        @property { BagItem } [item]
        
        @property { BagArticle } [article]
        
        @property { number } [id]
        
        @property { BagPrices } [prices]
        
        @property { GstDetails } [gst_details]
        
        @property { BagBreakupValues } [breakup_values]
        
        @property { number } [update_time]
        
        @property { BagCurrentStatus } [current_status]
        
        @property { BagStatus } [bag_status]
        
         
    */
/**
        @typedef BagFinancialBreakup
        
        
        @property { number } [value_of_good]
        
        @property { string } [hsn_code]
        
        @property { number } [price_effective]
        
        @property { number } [cod_charges]
        
        @property { string } [gst_fee]
        
        @property { number } [fynd_credits]
        
        @property { number } [refund_amount]
        
        @property { number } [cashback_applied]
        
        @property { number } [transfer_price]
        
        @property { number } [amount_paid_roundoff]
        
        @property { number } [coupon_value]
        
        @property { number } [amount_paid]
        
        @property { number } [gst_tax_percentage]
        
        @property { string } [size]
        
        @property { number } [total_units]
        
        @property { number } [discount]
        
        @property { number } [coupon_effective_discount]
        
        @property { number } [cashback]
        
        @property { number } [promotion_effective_discount]
        
        @property { string } [gst_tag]
        
        @property { number } [delivery_charge]
        
        @property { number } [refund_credit]
        
        @property { number } [price_marked]
        
        @property { Identifiers } [identifiers]
        
        @property { string } [item_name]
        
        @property { boolean } [added_to_fynd_cash]
        
        @property { number } [brand_calculated_amount]
        
         
    */
/**
        @typedef Identifiers
        
        
        @property { string } [ean]
        
         
    */
/**
        @typedef BagCurrStatus
        
        
        @property { boolean } [enable_tracking]
        
        @property { boolean } [is_customer_return_allowed]
        
        @property { boolean } [is_active]
        
        @property { boolean } [is_returnable]
        
        @property { boolean } [can_be_cancelled]
        
         
    */
/**
        @typedef BagItem
        
        
        @property { number } [id]
        
        @property { string } [size]
        
        @property { string } [slug_key]
        
        @property { boolean } [can_return]
        
        @property { number } [brand_id]
        
        @property { Array<string> } [l2_category]
        
        @property { string } [name]
        
        @property { string } [code]
        
        @property { boolean } [can_cancel]
        
        @property { BagItemAttributes } [attributes]
        
        @property { string } [l3_category_name]
        
        @property { number } [l3_category]
        
        @property { Array<string> } [l1_category]
        
        @property { Array<string> } [image]
        
        @property { string } [brand]
        
        @property { string } [last_updated_at]
        
         
    */
/**
        @typedef BagItemAttributes
        
        
        @property { string } [item_code]
        
        @property { string } [brand_name]
        
        @property { string } [country_of_origin]
        
         
    */
/**
        @typedef BagArticle
        
        
        @property { ArticleIdentifiers } [identifiers]
        
        @property { boolean } [esp_modified]
        
        @property { boolean } [is_set]
        
        @property { string } [size]
        
        @property { string } [code]
        
        @property { Set } [set]
        
        @property { string } [seller_identifier]
        
        @property { BagArticleReturnConfig } [return_config]
        
        @property { string } [_id]
        
        @property { string } [uid]
        
        @property { Object } [child_details]
        
         
    */
/**
        @typedef ArticleIdentifiers
        
        
        @property { string } [ean]
        
         
    */
/**
        @typedef Set
        
        
        @property { number } [quantity]
        
        @property { SetSizeDistribution } [size_distribution]
        
         
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
        
        
        @property { number } [refund_amount]
        
        @property { number } [cashback_applied]
        
        @property { number } [transfer_price]
        
        @property { number } [coupon_value]
        
        @property { number } [amount_paid]
        
        @property { number } [delivery_charge]
        
        @property { number } [coupon_effective_discount]
        
        @property { number } [cod_charges]
        
        @property { number } [refund_credit]
        
        @property { boolean } [added_to_fynd_cash]
        
        @property { number } [gst_tax_percentage]
        
        @property { number } [price_marked]
        
        @property { number } [price_effective]
        
        @property { number } [discount]
        
        @property { number } [promotion_effective_discount]
        
        @property { number } [amount_paid_roundoff]
        
        @property { number } [fynd_credits]
        
        @property { number } [brand_calculated_amount]
        
        @property { number } [cashback]
        
        @property { number } [value_of_good]
        
         
    */
/**
        @typedef GstDetails
        
        
        @property { number } [brand_calculated_amount]
        
        @property { string } [gst_fee]
        
        @property { string } [gst_tag]
        
        @property { string } [hsn_code]
        
        @property { number } [value_of_good]
        
        @property { number } [gst_tax_percentage]
        
        @property { boolean } [is_default_hsn_code]
        
         
    */
/**
        @typedef BagBreakupValues
        
        
        @property { string } [name]
        
        @property { string } [display]
        
        @property { number } [value]
        
         
    */
/**
        @typedef BagCurrentStatus
        
        
        @property { string } [updated_at]
        
        @property { BagStateMapper } [bag_state_mapper]
        
        @property { string } [status]
        
        @property { string } [state_type]
        
         
    */
/**
        @typedef BagStateMapper
        
        
        @property { string } [app_state_name]
        
        @property { boolean } [is_active]
        
        @property { string } [display_name]
        
        @property { string } [name]
        
        @property { string } [app_display_name]
        
         
    */
/**
        @typedef BagStatus
        
        
        @property { string } [status]
        
        @property { string } [state_type]
        
        @property { string } [updated_at]
        
        @property { BagStatusBagStateMapper } [bag_state_mapper]
        
         
    */
/**
        @typedef BagStatusBagStateMapper
        
        
        @property { boolean } [is_active]
        
        @property { string } [display_name]
        
        @property { string } [name]
        
        @property { string } [app_display_name]
        
        @property { string } [app_state_name]
        
         
    */
/**
        @typedef BagPrices
        
        
        @property { number } [cashback]
        
        @property { number } [refund_credit]
        
        @property { number } [coupon_value]
        
        @property { number } [delivery_charge]
        
        @property { number } [fynd_credits]
        
        @property { number } [price_marked]
        
        @property { number } [cashback_applied]
        
        @property { number } [value_of_good]
        
        @property { number } [amount_paid_roundoff]
        
        @property { number } [amount_paid]
        
        @property { number } [cod_charges]
        
        @property { number } [price_effective]
        
        @property { number } [refund_amount]
        
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
        
        
        @property { string } [gst_tag]
        
         
    */
/**
        @typedef ShipmentInvoice
        
        
        @property { string } [payment_type]
        
        @property { string } [updated_date]
        
        @property { string } [invoice_url]
        
        @property { string } [label_url]
        
        @property { string } [payment_mode]
        
        @property { number } [amount_to_collect]
        
        @property { RtoAddress } [rto_address]
        
         
    */
/**
        @typedef RtoAddress
        
        
        @property { string } [name]
        
        @property { number } [id]
        
        @property { string } [phone]
        
        @property { string } [location_type]
        
        @property { StoreAddressJson } [store_address_json]
        
        @property { string } [code]
        
        @property { string } [address1]
        
        @property { string } [city]
        
        @property { string } [country]
        
        @property { string } [pincode]
        
        @property { number } [company_id]
        
        @property { string } [contact_person]
        
        @property { string } [state]
        
        @property { string } [store_email]
        
        @property { string } [address2]
        
         
    */
/**
        @typedef StoreAddressJson
        
        
        @property { string } [country]
        
        @property { number } [latitude]
        
        @property { string } [updated_at]
        
        @property { string } [area]
        
        @property { string } [state]
        
        @property { string } [address_type]
        
        @property { string } [city]
        
        @property { string } [pincode]
        
        @property { string } [address1]
        
        @property { string } [address2]
        
        @property { number } [longitude]
        
        @property { string } [email]
        
        @property { string } [phone]
        
        @property { string } [created_at]
        
        @property { string } [contact_person]
        
        @property { string } [address_category]
        
        @property { string } [version]
        
        @property { string } [landmark]
        
         
    */
/**
        @typedef PlatformFulfillingStore
        
        
        @property { number } [packaging_material_count]
        
        @property { string } [location_type]
        
        @property { string } [code]
        
        @property { string } [city]
        
        @property { FulfillingStoreMeta } [meta]
        
        @property { string } [name]
        
        @property { boolean } [is_active]
        
        @property { string } [address1]
        
        @property { string } [store_email]
        
        @property { boolean } [is_archived]
        
        @property { string } [state]
        
        @property { string } [address2]
        
        @property { string } [contact_person]
        
        @property { string } [phone]
        
        @property { boolean } [is_enabled_for_recon]
        
        @property { string } [fulfillment_channel]
        
        @property { string } [created_at]
        
        @property { number } [id]
        
        @property { string } [pincode]
        
        @property { Array<string> } [brand_store_tags]
        
        @property { number } [company_id]
        
        @property { FulfillingStoreStoreAddressJson } [store_address_json]
        
        @property { string } [updated_at]
        
        @property { string } [login_username]
        
        @property { string } [country]
        
         
    */
/**
        @typedef FulfillingStoreMeta
        
        
        @property { AdditionalContactDetails } [additional_contact_details]
        
        @property { Documents } [documents]
        
        @property { string } [gst_number]
        
        @property { string } [display_name]
        
        @property { ProductReturnConfig } [product_return_config]
        
        @property { boolean } [allow_dp_assignment_from_fynd]
        
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
        
        
        @property { string } [legal_name]
        
        @property { string } [type]
        
        @property { string } [value]
        
        @property { boolean } [verified]
        
         
    */
/**
        @typedef ProductReturnConfig
        
        
        @property { boolean } [on_same_store]
        
         
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
        
        @property { string } [contact_person]
        
        @property { string } [country]
        
        @property { string } [pincode]
        
        @property { string } [version]
        
        @property { string } [created_at]
        
        @property { string } [address_type]
        
        @property { string } [city]
        
        @property { string } [address1]
        
        @property { string } [landmark]
        
        @property { number } [latitude]
        
        @property { number } [longitude]
        
        @property { string } [updated_at]
        
        @property { string } [address_category]
        
         
    */
/**
        @typedef Payments
        
        
        @property { boolean } [is_active]
        
        @property { string } [display_name]
        
        @property { string } [logo]
        
        @property { string } [source]
        
        @property { string } [source_nickname]
        
        @property { number } [display_priority]
        
        @property { number } [id]
        
        @property { string } [mode]
        
        @property { string } [payment_identifier]
        
         
    */
/**
        @typedef ShipmentGst
        
        
        @property { number } [brand_calculated_amount]
        
        @property { number } [value_of_good]
        
        @property { number } [gst_fee]
        
         
    */
/**
        @typedef PlatformShipmentBrand
        
        
        @property { boolean } [credit_note_allowed]
        
        @property { string } [brand_name]
        
        @property { string } [modified_on]
        
        @property { number } [id]
        
        @property { boolean } [is_virtual_invoice]
        
        @property { string } [created_on]
        
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
        
        @property { boolean } [is_passed]
        
        @property { boolean } [is_current]
        
         
    */
/**
        @typedef ShipmentUser
        
        
        @property { string } [email]
        
        @property { number } [id]
        
        @property { string } [first_name]
        
        @property { string } [mobile]
        
        @property { string } [gender]
        
        @property { string } [last_name]
        
        @property { boolean } [is_anonymous_user]
        
        @property { string } [mongo_user_id]
        
         
    */
/**
        @typedef ItemsPayments
        
        
        @property { number } [display_priority]
        
        @property { number } [id]
        
        @property { boolean } [is_active]
        
        @property { string } [display_name]
        
        @property { string } [logo]
        
        @property { string } [payment_identifier]
        
        @property { string } [source_nickname]
        
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
        
        @property { boolean } [is_default]
        
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
        
        
        @property { BagConfirmed } [bag_confirmed]
        
        @property { DpAssigned } [dp_assigned]
        
        @property { ReturnBagDelivered } [return_bag_delivered]
        
        @property { Placed } [placed]
        
        @property { DeliveryDone } [delivery_done]
        
        @property { Pending } [pending]
        
        @property { BagPacked } [bag_packed]
        
         
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
        
        @property { boolean } [has_next]
        
        @property { ItemTotal } [item_total]
        
         
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
        
        @property { string } [from_date]
        
        @property { string } [to_date]
        
         
    */
/**
        @typedef UpdateOrderReprocessResponse
        
        
        @property { string } status
        
         
    */
/**
        @typedef PlatformOrderTrack
        
        
        @property { boolean } success
        
        @property { string } request_id
        
        @property { string } message
        
        @property { string } mobile
        
        @property { string } country_code
        
        @property { number } resend_timer
        
        @property { string } [resend_token]
        
         
    */
/**
        @typedef GetPingResponse
        
        
        @property { string } ping
        
         
    */
/**
        @typedef UpdateShipmentStatusResponse
        
        
        @property { Object } shipments
        
        @property { Array<any> } [error_shipments]
        
         
    */
/**
        @typedef UpdateShipmentStatusBody
        
        
        @property { Object } shipments
        
        @property { boolean } force_transition
        
        @property { boolean } task
        
         
    */
/**
        @typedef PlatformShipmentTrack
        
        
        @property { Results } results
        
         
    */
/**
        @typedef Results
        
        
        @property { string } [awb]
        
        @property { string } [updated_at]
        
        @property { string } [last_location_recieved_at]
        
        @property { string } [reason]
        
        @property { string } [shipment_type]
        
        @property { string } [status]
        
        @property { string } [updated_time]
        
        @property { string } [account_name]
        
         
    */
/**
        @typedef UpdateProcessShipmenstRequestBody
        
        
        @property { Array<string> } shipment_ids
        
        @property { string } expected_status
        
         
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
        
        
        @property { Object } [_custom_json]
        
        @property { Object } [result]
        
        @property { string } [app_id]
        
        @property { Array<string> } [words]
        
        @property { string } [uid]
        
         
    */
/**
        @typedef GetSearchWordsDetailResponse
        
        
        @property { Page } [page]
        
        @property { GetSearchWordsData } [items]
        
         
    */
/**
        @typedef ErrorResponse
        
        
        @property { Object } [meta]
        
        @property { string } [message]
        
        @property { number } [status]
        
        @property { string } [code]
        
         
    */
/**
        @typedef DeleteResponse
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef SearchKeywordResult
        
        
        @property { string } sort_on
        
        @property { Object } query
        
         
    */
/**
        @typedef CreateSearchKeyword
        
        
        @property { Object } [_custom_json]
        
        @property { SearchKeywordResult } result
        
        @property { string } [app_id]
        
        @property { boolean } [is_active]
        
        @property { Array<string> } [words]
        
         
    */
/**
        @typedef GetSearchWordsResponse
        
        
        @property { Page } [page]
        
        @property { Array<GetSearchWordsData> } [items]
        
         
    */
/**
        @typedef GetAutocompleteWordsData
        
        
        @property { Object } [_custom_json]
        
        @property { string } [app_id]
        
        @property { Array<Object> } [results]
        
        @property { Array<string> } [words]
        
        @property { string } [uid]
        
         
    */
/**
        @typedef GetAutocompleteWordsResponse
        
        
        @property { Page } [page]
        
        @property { Array<GetAutocompleteWordsData> } [items]
        
         
    */
/**
        @typedef AutocompletePageAction
        
        
        @property { string } type
        
        @property { Object } [params]
        
        @property { Object } query
        
        @property { string } [url]
        
         
    */
/**
        @typedef AutocompleteAction
        
        
        @property { AutocompletePageAction } [page]
        
        @property { string } [type]
        
         
    */
/**
        @typedef Media
        
        
        @property { string } [type]
        
        @property { string } [url]
        
         
    */
/**
        @typedef AutocompleteResult
        
        
        @property { string } [display]
        
        @property { Object } [_custom_json]
        
        @property { AutocompleteAction } [action]
        
        @property { Media } [logo]
        
         
    */
/**
        @typedef CreateAutocompleteKeyword
        
        
        @property { Object } [_custom_json]
        
        @property { string } [app_id]
        
        @property { Array<AutocompleteResult> } [results]
        
        @property { boolean } [is_active]
        
        @property { Array<string> } [words]
        
         
    */
/**
        @typedef CreateAutocompleteWordsResponse
        
        
        @property { Array<string> } [words]
        
        @property { string } [app_id]
        
        @property { Object } [_custom_json]
        
        @property { Array<Object> } [results]
        
         
    */
/**
        @typedef ProductBundleItem
        
        
        @property { boolean } [allow_remove]
        
        @property { boolean } [auto_select]
        
        @property { number } min_quantity
        
        @property { number } product_uid
        
        @property { number } max_quantity
        
        @property { boolean } [auto_add_to_cart]
        
         
    */
/**
        @typedef GetProductBundleCreateResponse
        
        
        @property { string } choice
        
        @property { string } slug
        
        @property { string } name
        
        @property { Object } [created_by]
        
        @property { Array<ProductBundleItem> } products
        
        @property { number } [company_id]
        
        @property { Array<string> } [page_visibility]
        
        @property { string } [id]
        
        @property { string } [logo]
        
        @property { string } [modified_on]
        
        @property { boolean } [same_store_assignment]
        
        @property { boolean } is_active
        
        @property { Object } [meta]
        
        @property { Object } [modified_by]
        
        @property { string } [created_on]
        
         
    */
/**
        @typedef GetProductBundleListingResponse
        
        
        @property { Page } [page]
        
        @property { Array<GetProductBundleCreateResponse> } [items]
        
         
    */
/**
        @typedef ProductBundleRequest
        
        
        @property { string } choice
        
        @property { string } slug
        
        @property { string } name
        
        @property { Object } [created_by]
        
        @property { Array<ProductBundleItem> } products
        
        @property { Array<string> } [page_visibility]
        
        @property { string } [logo]
        
        @property { string } [modified_on]
        
        @property { boolean } [same_store_assignment]
        
        @property { boolean } is_active
        
        @property { Object } [meta]
        
        @property { Object } [modified_by]
        
        @property { string } [created_on]
        
         
    */
/**
        @typedef Price
        
        
        @property { number } [max_marked]
        
        @property { number } [max_effective]
        
        @property { number } [min_effective]
        
        @property { number } [min_marked]
        
        @property { string } [currency]
        
         
    */
/**
        @typedef LimitedProductData
        
        
        @property { string } [slug]
        
        @property { string } [name]
        
        @property { string } [item_code]
        
        @property { Object } [attributes]
        
        @property { Array<string> } [sizes]
        
        @property { string } [country_of_origin]
        
        @property { Object } [identifier]
        
        @property { Array<string> } [images]
        
        @property { string } [short_description]
        
        @property { number } [quantity]
        
        @property { Object } [price]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef Size
        
        
        @property { string } [display]
        
        @property { string } [value]
        
        @property { number } [quantity]
        
        @property { boolean } [is_available]
        
         
    */
/**
        @typedef GetProducts
        
        
        @property { boolean } [allow_remove]
        
        @property { Price } [price]
        
        @property { number } [min_quantity]
        
        @property { boolean } [auto_select]
        
        @property { LimitedProductData } [product_details]
        
        @property { Array<Size> } [sizes]
        
        @property { number } [product_uid]
        
        @property { number } [max_quantity]
        
        @property { boolean } [auto_add_to_cart]
        
         
    */
/**
        @typedef GetProductBundleResponse
        
        
        @property { string } [choice]
        
        @property { string } [slug]
        
        @property { string } [name]
        
        @property { Array<GetProducts> } [products]
        
        @property { number } [company_id]
        
        @property { Array<string> } [page_visibility]
        
        @property { string } [logo]
        
        @property { boolean } [same_store_assignment]
        
        @property { boolean } [is_active]
        
        @property { Object } [meta]
        
         
    */
/**
        @typedef ProductBundleUpdateRequest
        
        
        @property { string } choice
        
        @property { string } slug
        
        @property { string } name
        
        @property { Array<ProductBundleItem> } products
        
        @property { Array<string> } [page_visibility]
        
        @property { string } [logo]
        
        @property { string } [modified_on]
        
        @property { boolean } [same_store_assignment]
        
        @property { boolean } is_active
        
        @property { Object } [meta]
        
        @property { Object } [modified_by]
        
         
    */
/**
        @typedef ListSizeGuide
        
        
        @property { Object } [page]
        
        @property { Array<Object> } [items]
        
         
    */
/**
        @typedef Meta
        
        
        @property { Array<Object> } [values]
        
        @property { Object } [headers]
        
        @property { string } [unit]
        
         
    */
/**
        @typedef Guide
        
        
        @property { Meta } [meta]
        
         
    */
/**
        @typedef ValidateSizeGuide
        
        
        @property { string } name
        
        @property { Guide } [guide]
        
        @property { Object } [created_by]
        
        @property { string } title
        
        @property { number } [brand_id]
        
        @property { number } [company_id]
        
        @property { string } [subtitle]
        
        @property { string } [id]
        
        @property { string } [tag]
        
        @property { boolean } [active]
        
        @property { string } [modified_on]
        
        @property { string } [image]
        
        @property { Object } [modified_by]
        
        @property { string } [created_on]
        
        @property { string } [description]
        
         
    */
/**
        @typedef SuccessResponse
        
        
        @property { boolean } [success]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef SizeGuideResponse
        
        
        @property { string } [name]
        
        @property { Object } [created_by]
        
        @property { Object } [guide]
        
        @property { string } [title]
        
        @property { number } [brand_id]
        
        @property { number } [company_id]
        
        @property { string } [subtitle]
        
        @property { string } [id]
        
        @property { string } [tag]
        
        @property { string } [modified_on]
        
        @property { boolean } [active]
        
        @property { Object } [modified_by]
        
        @property { string } [created_on]
        
         
    */
/**
        @typedef MetaDataListingFilterMetaResponse
        
        
        @property { string } [display]
        
        @property { string } [key]
        
        @property { Array<Object> } [units]
        
        @property { Array<string> } [filter_types]
        
         
    */
/**
        @typedef MetaDataListingFilterResponse
        
        
        @property { Array<MetaDataListingFilterMetaResponse> } [data]
        
         
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
        @typedef MetaDataListingResponse
        
        
        @property { MetaDataListingFilterResponse } filter
        
        @property { MetaDataListingSortResponse } sort
        
         
    */
/**
        @typedef GetCatalogConfigurationDetailsProduct
        
        
        @property { Object } [detail]
        
        @property { Object } [similar]
        
        @property { Object } [compare]
        
        @property { Object } [variant]
        
         
    */
/**
        @typedef GetCatalogConfigurationMetaData
        
        
        @property { MetaDataListingResponse } [listing]
        
        @property { GetCatalogConfigurationDetailsProduct } [product]
        
         
    */
/**
        @typedef ConfigurationBucketPoints
        
        
        @property { number } [start]
        
        @property { number } [end]
        
         
    */
/**
        @typedef ConfigurationListingFilterValue
        
        
        @property { Array<ConfigurationBucketPoints> } [bucket_points]
        
        @property { Object } [map]
        
        @property { string } [value]
        
        @property { string } [sort]
        
        @property { string } [condition]
        
         
    */
/**
        @typedef ConfigurationListingFilterConfig
        
        
        @property { string } [name]
        
        @property { string } type
        
        @property { number } priority
        
        @property { string } [logo]
        
        @property { ConfigurationListingFilterValue } [value_config]
        
        @property { boolean } is_active
        
        @property { string } key
        
         
    */
/**
        @typedef ConfigurationListingFilter
        
        
        @property { boolean } allow_single
        
        @property { Array<ConfigurationListingFilterConfig> } [attribute_config]
        
         
    */
/**
        @typedef ConfigurationListingSortConfig
        
        
        @property { string } [name]
        
        @property { number } priority
        
        @property { string } [logo]
        
        @property { boolean } is_active
        
        @property { string } key
        
         
    */
/**
        @typedef ConfigurationListingSort
        
        
        @property { Array<ConfigurationListingSortConfig> } [config]
        
        @property { string } default_key
        
         
    */
/**
        @typedef ConfigurationListing
        
        
        @property { ConfigurationListingFilter } filter
        
        @property { ConfigurationListingSort } sort
        
         
    */
/**
        @typedef ProductSize
        
        
        @property { number } min
        
        @property { number } max
        
         
    */
/**
        @typedef ConfigurationProductConfig
        
        
        @property { string } [title]
        
        @property { string } [subtitle]
        
        @property { number } priority
        
        @property { string } [logo]
        
        @property { boolean } is_active
        
        @property { string } key
        
        @property { ProductSize } [size]
        
         
    */
/**
        @typedef ConfigurationProductSimilar
        
        
        @property { Array<ConfigurationProductConfig> } [config]
        
         
    */
/**
        @typedef ConfigurationProductVariantConfig
        
        
        @property { string } name
        
        @property { string } display_type
        
        @property { number } priority
        
        @property { string } [logo]
        
        @property { boolean } is_active
        
        @property { string } key
        
        @property { ProductSize } size
        
         
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
        @typedef AppCatalogConfiguration
        
        
        @property { ConfigurationListing } [listing]
        
        @property { string } [config_id]
        
        @property { ConfigurationProduct } [product]
        
        @property { string } [id]
        
        @property { string } app_id
        
        @property { string } config_type
        
         
    */
/**
        @typedef GetAppCatalogConfiguration
        
        
        @property { boolean } [is_default]
        
        @property { AppCatalogConfiguration } [data]
        
         
    */
/**
        @typedef AppConfiguration
        
        
        @property { ConfigurationListing } [listing]
        
        @property { string } [config_id]
        
        @property { ConfigurationProduct } [product]
        
        @property { string } app_id
        
        @property { string } config_type
        
         
    */
/**
        @typedef GetCatalogConfigurationDetailsSchemaListing
        
        
        @property { Object } [filter]
        
        @property { Object } [sort]
        
         
    */
/**
        @typedef EntityConfiguration
        
        
        @property { GetCatalogConfigurationDetailsSchemaListing } [listing]
        
        @property { string } [config_id]
        
        @property { GetCatalogConfigurationDetailsProduct } [product]
        
        @property { string } [id]
        
        @property { string } app_id
        
        @property { string } config_type
        
         
    */
/**
        @typedef GetAppCatalogEntityConfiguration
        
        
        @property { boolean } [is_default]
        
        @property { EntityConfiguration } [data]
        
         
    */
/**
        @typedef ProductFiltersValue
        
        
        @property { string } [query_format]
        
        @property { number } [count]
        
        @property { string } [currency_symbol]
        
        @property { string } [currency_code]
        
        @property { string } [display_format]
        
        @property { number } [max]
        
        @property { string } display
        
        @property { number } [selected_max]
        
        @property { boolean } is_selected
        
        @property { string } value
        
        @property { number } [min]
        
        @property { number } [selected_min]
        
         
    */
/**
        @typedef ProductFiltersKey
        
        
        @property { string } display
        
        @property { string } name
        
        @property { string } [logo]
        
        @property { string } [kind]
        
         
    */
/**
        @typedef ProductFilters
        
        
        @property { Array<ProductFiltersValue> } values
        
        @property { ProductFiltersKey } key
        
         
    */
/**
        @typedef ProductSortOn
        
        
        @property { string } [value]
        
        @property { string } [name]
        
        @property { boolean } [is_selected]
        
         
    */
/**
        @typedef GetCollectionQueryOptionResponse
        
        
        @property { Array<ProductFilters> } [filters]
        
        @property { Array<ProductSortOn> } [sort_on]
        
         
    */
/**
        @typedef BannerImage
        
        
        @property { string } [url]
        
        @property { string } [aspect_ratio]
        
         
    */
/**
        @typedef ImageUrls
        
        
        @property { BannerImage } [portrait]
        
        @property { BannerImage } [landscape]
        
         
    */
/**
        @typedef Media1
        
        
        @property { Object } [meta]
        
        @property { string } [type]
        
        @property { string } url
        
         
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
        @typedef GetCollectionDetailNest
        
        
        @property { boolean } [allow_sort]
        
        @property { string } [slug]
        
        @property { string } [type]
        
        @property { ImageUrls } [banners]
        
        @property { Object } [cron]
        
        @property { Media1 } [logo]
        
        @property { Object } [query]
        
        @property { boolean } [allow_facets]
        
        @property { Object } [meta]
        
        @property { Object } [badge]
        
        @property { boolean } [is_active]
        
        @property { string } [name]
        
        @property { Object } [_schedule]
        
        @property { string } [app_id]
        
        @property { Array<string> } [tag]
        
        @property { string } [description]
        
        @property { Array<string> } [visible_facets_keys]
        
        @property { ProductListingAction } [action]
        
        @property { string } [uid]
        
         
    */
/**
        @typedef CollectionListingFilterTag
        
        
        @property { string } [display]
        
        @property { string } [name]
        
        @property { boolean } [is_selected]
        
         
    */
/**
        @typedef CollectionListingFilterType
        
        
        @property { string } [display]
        
        @property { string } [name]
        
        @property { boolean } [is_selected]
        
         
    */
/**
        @typedef CollectionListingFilter
        
        
        @property { Array<CollectionListingFilterTag> } [tags]
        
        @property { Array<CollectionListingFilterType> } [type]
        
         
    */
/**
        @typedef GetCollectionListingResponse
        
        
        @property { Page } [page]
        
        @property { Array<GetCollectionDetailNest> } [items]
        
        @property { CollectionListingFilter } [filters]
        
         
    */
/**
        @typedef UserInfo
        
        
        @property { string } [email]
        
        @property { string } [username]
        
        @property { string } [user_id]
        
        @property { string } [uid]
        
         
    */
/**
        @typedef CollectionImage
        
        
        @property { string } aspect_ratio
        
        @property { string } url
        
         
    */
/**
        @typedef CollectionBanner
        
        
        @property { CollectionImage } portrait
        
        @property { CollectionImage } landscape
        
         
    */
/**
        @typedef CollectionBadge
        
        
        @property { string } [color]
        
        @property { string } [text]
        
         
    */
/**
        @typedef Schedule
        
        
        @property { number } [duration]
        
        @property { string } [cron]
        
        @property { string } [start]
        
        @property { string } [end]
        
         
    */
/**
        @typedef SeoDetail
        
        
        @property { string } [description]
        
        @property { string } [title]
        
         
    */
/**
        @typedef CreateCollection
        
        
        @property { boolean } [allow_sort]
        
        @property { string } slug
        
        @property { UserInfo } [created_by]
        
        @property { string } type
        
        @property { CollectionBanner } banners
        
        @property { CollectionImage } logo
        
        @property { Object } [query]
        
        @property { boolean } [allow_facets]
        
        @property { Object } [meta]
        
        @property { CollectionBadge } [badge]
        
        @property { Object } [_locale_language]
        
        @property { string } [sort_on]
        
        @property { Array<string> } [tags]
        
        @property { boolean } [is_active]
        
        @property { UserInfo } [modified_by]
        
        @property { Object } [_custom_json]
        
        @property { string } name
        
        @property { Schedule } [_schedule]
        
        @property { string } app_id
        
        @property { SeoDetail } [seo]
        
        @property { string } [description]
        
        @property { Array<string> } [visible_facets_keys]
        
        @property { boolean } [published]
        
         
    */
/**
        @typedef CollectionCreateResponse
        
        
        @property { boolean } [allow_sort]
        
        @property { string } [slug]
        
        @property { string } [name]
        
        @property { Array<string> } [visible_facets_keys]
        
        @property { string } [type]
        
        @property { Object } [_schedule]
        
        @property { ImageUrls } [banners]
        
        @property { Object } [cron]
        
        @property { string } [app_id]
        
        @property { Array<string> } [tag]
        
        @property { BannerImage } [logo]
        
        @property { Object } [query]
        
        @property { boolean } [allow_facets]
        
        @property { boolean } [is_active]
        
        @property { Object } [meta]
        
        @property { Object } [badge]
        
        @property { string } [description]
        
         
    */
/**
        @typedef CollectionDetailResponse
        
        
        @property { boolean } [allow_sort]
        
        @property { string } [slug]
        
        @property { string } [name]
        
        @property { Array<string> } [visible_facets_keys]
        
        @property { string } [type]
        
        @property { Object } [_schedule]
        
        @property { ImageUrls } [banners]
        
        @property { Object } [cron]
        
        @property { string } [app_id]
        
        @property { Array<string> } [tag]
        
        @property { Media1 } [logo]
        
        @property { Object } [query]
        
        @property { boolean } [allow_facets]
        
        @property { boolean } [is_active]
        
        @property { Object } [meta]
        
        @property { Object } [badge]
        
        @property { string } [description]
        
         
    */
/**
        @typedef Price1
        
        
        @property { string } [currency_symbol]
        
        @property { string } [currency_code]
        
        @property { number } [min]
        
        @property { number } [max]
        
         
    */
/**
        @typedef ProductListingPrice
        
        
        @property { Price1 } [effective]
        
        @property { Price1 } [marked]
        
         
    */
/**
        @typedef ProductBrand
        
        
        @property { ProductListingAction } [action]
        
        @property { string } [name]
        
        @property { Media1 } [logo]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef ProductDetailAttribute
        
        
        @property { string } [key]
        
        @property { string } [value]
        
        @property { string } [type]
        
         
    */
/**
        @typedef ProductDetailGroupedAttribute
        
        
        @property { Array<ProductDetailAttribute> } [details]
        
        @property { string } [title]
        
         
    */
/**
        @typedef ProductListingDetail
        
        
        @property { string } slug
        
        @property { string } [type]
        
        @property { Object } [teaser_tag]
        
        @property { string } [item_code]
        
        @property { string } [short_description]
        
        @property { boolean } [sellable]
        
        @property { Object } [promo_meta]
        
        @property { ProductListingPrice } [price]
        
        @property { Array<string> } [similars]
        
        @property { string } [item_type]
        
        @property { Array<Media1> } [medias]
        
        @property { string } [discount]
        
        @property { string } [name]
        
        @property { Array<string> } [tryouts]
        
        @property { string } [color]
        
        @property { Object } [attributes]
        
        @property { number } [rating_count]
        
        @property { Array<string> } [highlights]
        
        @property { number } [rating]
        
        @property { string } [product_online_date]
        
        @property { ProductBrand } [brand]
        
        @property { string } [description]
        
        @property { boolean } [has_variant]
        
        @property { number } [uid]
        
        @property { string } [image_nature]
        
        @property { Array<ProductDetailGroupedAttribute> } [grouped_attributes]
        
         
    */
/**
        @typedef GetCollectionItemsResponse
        
        
        @property { Page } [page]
        
        @property { Array<ProductListingDetail> } [items]
        
        @property { Array<ProductFilters> } [filters]
        
        @property { Array<ProductSortOn> } [sort_on]
        
         
    */
/**
        @typedef CollectionItemRequest
        
        
        @property { number } page_size
        
        @property { number } page_no
        
         
    */
/**
        @typedef UpdatedResponse
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef CatalogInsightItem
        
        
        @property { number } [out_of_stock_count]
        
        @property { number } [sellable_count]
        
        @property { number } [count]
        
         
    */
/**
        @typedef CatalogInsightBrand
        
        
        @property { number } [available_articles]
        
        @property { string } [name]
        
        @property { number } [total_articles]
        
        @property { number } [available_sizes]
        
        @property { number } [article_freshness]
        
        @property { number } [total_sizes]
        
         
    */
/**
        @typedef CatalogInsightResponse
        
        
        @property { CatalogInsightItem } [item]
        
        @property { CatalogInsightBrand } [brand_distribution]
        
         
    */
/**
        @typedef CrossSellingData
        
        
        @property { number } [products]
        
        @property { number } [articles]
        
         
    */
/**
        @typedef CrossSellingResponse
        
        
        @property { CrossSellingData } [data]
        
        @property { CatalogInsightBrand } [brand_distribution]
        
         
    */
/**
        @typedef OptInPostRequest
        
        
        @property { Array<number> } [store_ids]
        
        @property { string } opt_level
        
        @property { boolean } [enabled]
        
        @property { Array<number> } [brand_ids]
        
         
    */
/**
        @typedef CompanyOptIn
        
        
        @property { string } platform
        
        @property { Object } [created_by]
        
        @property { number } company_id
        
        @property { Array<number> } brand_ids
        
        @property { boolean } enabled
        
        @property { Array<number> } store_ids
        
        @property { number } modified_on
        
        @property { string } opt_level
        
        @property { Object } [modified_by]
        
        @property { number } created_on
        
         
    */
/**
        @typedef GetOptInPlatform
        
        
        @property { Page } page
        
        @property { Array<CompanyOptIn> } items
        
         
    */
/**
        @typedef OptinCompanyDetail
        
        
        @property { string } [company_type]
        
        @property { string } [name]
        
        @property { string } [business_type]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef CompanyBrandDetail
        
        
        @property { number } [brand_id]
        
        @property { number } [company_id]
        
        @property { string } [brand_name]
        
        @property { number } [total_article]
        
         
    */
/**
        @typedef OptinCompanyBrandDetailsView
        
        
        @property { Page } [page]
        
        @property { Array<CompanyBrandDetail> } [items]
        
         
    */
/**
        @typedef OptinCompanyMetrics
        
        
        @property { string } [company]
        
        @property { number } [store]
        
        @property { number } [brand]
        
         
    */
/**
        @typedef StoreDetail
        
        
        @property { Object } [timing]
        
        @property { string } [store_code]
        
        @property { string } [name]
        
        @property { number } [company_id]
        
        @property { string } [store_type]
        
        @property { string } [modified_on]
        
        @property { string } [display_name]
        
        @property { Array<Object> } [additional_contacts]
        
        @property { string } [created_on]
        
        @property { Array<Object> } [documents]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef OptinStoreDetails
        
        
        @property { Page } [page]
        
        @property { Array<StoreDetail> } [items]
        
         
    */
/**
        @typedef AttributeMasterFilter
        
        
        @property { boolean } indexing
        
        @property { Array<string> } [depends_on]
        
        @property { number } [priority]
        
         
    */
/**
        @typedef AttributeSchemaRange
        
        
        @property { number } [min]
        
        @property { number } [max]
        
         
    */
/**
        @typedef AttributeMaster
        
        
        @property { string } [format]
        
        @property { string } type
        
        @property { Array<string> } [allowed_values]
        
        @property { boolean } [mandatory]
        
        @property { AttributeSchemaRange } [range]
        
        @property { boolean } [multi]
        
         
    */
/**
        @typedef AttributeMasterDetails
        
        
        @property { string } display_type
        
         
    */
/**
        @typedef AttributeMasterMandatoryDetails
        
        
        @property { Array<string> } [l3_keys]
        
         
    */
/**
        @typedef AttributeMasterMeta
        
        
        @property { boolean } [enriched]
        
        @property { AttributeMasterMandatoryDetails } mandatory_details
        
         
    */
/**
        @typedef GenderDetail
        
        
        @property { string } [slug]
        
        @property { string } [name]
        
        @property { AttributeMasterFilter } [filters]
        
        @property { boolean } [enabled_for_end_consumer]
        
        @property { AttributeMaster } [schema]
        
        @property { boolean } [is_nested]
        
        @property { string } [id]
        
        @property { AttributeMasterDetails } [details]
        
        @property { string } [logo]
        
        @property { AttributeMasterMeta } [meta]
        
        @property { string } [description]
        
        @property { Array<string> } [departments]
        
         
    */
/**
        @typedef ProdcutTemplateCategoriesResponse
        
        
        @property { Page } [page]
        
        @property { Array<Object> } [items]
        
         
    */
/**
        @typedef PTErrorResponse
        
        
        @property { string } [code]
        
        @property { string } [message]
        
        @property { number } [status]
        
        @property { Object } [meta]
        
        @property { Object } [errors]
        
         
    */
/**
        @typedef UserSerializer
        
        
        @property { string } [user_id]
        
        @property { string } [contact]
        
        @property { string } [username]
        
         
    */
/**
        @typedef GetDepartment
        
        
        @property { Array<string> } [synonyms]
        
        @property { string } [slug]
        
        @property { string } [name]
        
        @property { UserSerializer } [created_by]
        
        @property { number } [priority_order]
        
        @property { number } [page_size]
        
        @property { string } [item_type]
        
        @property { number } [page_no]
        
        @property { string } [logo]
        
        @property { string } [search]
        
        @property { string } [modified_on]
        
        @property { boolean } [is_active]
        
        @property { UserSerializer } [modified_by]
        
        @property { string } [created_on]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef DepartmentsResponse
        
        
        @property { Page } [page]
        
        @property { Array<GetDepartment> } [items]
        
         
    */
/**
        @typedef DepartmentErrorResponse
        
        
        @property { string } [code]
        
        @property { string } [message]
        
        @property { number } [status]
        
        @property { Object } [meta]
        
        @property { Object } [errors]
        
         
    */
/**
        @typedef ProductTemplate
        
        
        @property { string } slug
        
        @property { string } [name]
        
        @property { Object } [created_by]
        
        @property { string } [created_on]
        
        @property { Array<string> } [attributes]
        
        @property { string } [tag]
        
        @property { string } [logo]
        
        @property { string } [modified_on]
        
        @property { boolean } is_physical
        
        @property { boolean } [is_active]
        
        @property { Object } [modified_by]
        
        @property { Array<string> } [categories]
        
        @property { boolean } [is_archived]
        
        @property { string } [description]
        
        @property { Array<string> } [departments]
        
         
    */
/**
        @typedef TemplatesResponse
        
        
        @property { Page } [page]
        
        @property { ProductTemplate } [items]
        
         
    */
/**
        @typedef MultipleCommon
        
        
        @property { string } [uid]
        
         
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
        
        
        @property { Array<string> } [country_of_origin]
        
        @property { Array<string> } [hsn_code]
        
         
    */
/**
        @typedef HSNCodesResponse
        
        
        @property { string } [message]
        
        @property { HSNData } [data]
        
         
    */
/**
        @typedef ProductConfligurationDownloads
        
        
        @property { Array<MultipleCommon> } [data]
        
        @property { boolean } [multivalue]
        
         
    */
/**
        @typedef CategoryMappingValues
        
        
        @property { string } name
        
        @property { number } [catalog_id]
        
         
    */
/**
        @typedef CategoryMapping
        
        
        @property { CategoryMappingValues } [facebook]
        
        @property { CategoryMappingValues } [google]
        
        @property { CategoryMappingValues } [ajio]
        
         
    */
/**
        @typedef Hierarchy
        
        
        @property { number } department
        
        @property { number } l1
        
        @property { number } l2
        
         
    */
/**
        @typedef Media2
        
        
        @property { string } portrait
        
        @property { string } landscape
        
        @property { string } logo
        
         
    */
/**
        @typedef Category
        
        
        @property { Array<string> } [synonyms]
        
        @property { string } [slug]
        
        @property { string } name
        
        @property { Array<string> } [tryouts]
        
        @property { Object } [created_by]
        
        @property { CategoryMapping } [marketplaces]
        
        @property { Array<Hierarchy> } [hierarchy]
        
        @property { number } [priority]
        
        @property { string } [_id]
        
        @property { Media2 } [media]
        
        @property { string } [modified_on]
        
        @property { boolean } is_active
        
        @property { Object } [modified_by]
        
        @property { string } [created_on]
        
        @property { number } level
        
        @property { Array<number> } departments
        
        @property { number } [uid]
        
         
    */
/**
        @typedef CategoryResponse
        
        
        @property { Page } [page]
        
        @property { Array<Category> } [items]
        
         
    */
/**
        @typedef CategoryRequestBody
        
        
        @property { Array<string> } [synonyms]
        
        @property { string } [slug]
        
        @property { string } name
        
        @property { Array<string> } [tryouts]
        
        @property { CategoryMapping } [marketplaces]
        
        @property { Array<Hierarchy> } [hierarchy]
        
        @property { number } [priority]
        
        @property { boolean } is_active
        
        @property { Array<number> } departments
        
        @property { number } level
        
        @property { Media2 } [media]
        
         
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
        @typedef PageData
        
        
        @property { number } [item_total]
        
        @property { string } [current]
        
        @property { boolean } [has_next]
        
        @property { number } [size]
        
        @property { boolean } [has_previous]
        
         
    */
/**
        @typedef ProductPublished
        
        
        @property { number } [product_online_date]
        
        @property { boolean } [is_set]
        
         
    */
/**
        @typedef VerifiedBy
        
        
        @property { string } [user_id]
        
        @property { string } [username]
        
         
    */
/**
        @typedef UserCommon
        
        
        @property { string } [user_id]
        
        @property { number } [company_id]
        
        @property { string } [username]
        
         
    */
/**
        @typedef Attributes
        
        
        @property { VerifiedBy } [verified_by]
        
        @property { UserCommon } [created_by]
        
        @property { string } [modified_on]
        
        @property { string } [essential]
        
        @property { string } [material]
        
        @property { string } [sleeve_length]
        
        @property { UserCommon } [modified_by]
        
        @property { string } [created_on]
        
        @property { string } [primary_color]
        
        @property { string } [primary_material]
        
        @property { string } [color]
        
        @property { string } [neck_type]
        
        @property { string } [verified_on]
        
        @property { string } [pattern]
        
        @property { string } [stage]
        
        @property { string } [product_fit]
        
        @property { boolean } [is_image_less_product]
        
        @property { string } [meta_nature]
        
        @property { string } [image_nature]
        
        @property { Array<string> } [l3_mapping]
        
        @property { Array<string> } [gender]
        
         
    */
/**
        @typedef Logo
        
        
        @property { string } [url]
        
        @property { number } [aspect_ratio_f]
        
        @property { string } [secure_url]
        
        @property { string } [aspect_ratio]
        
         
    */
/**
        @typedef Brand
        
        
        @property { string } [name]
        
        @property { Logo } [logo]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef Product
        
        
        @property { string } [slug]
        
        @property { Array<string> } [all_sizes]
        
        @property { string } [item_code]
        
        @property { boolean } [multi_size]
        
        @property { string } [hsn_code]
        
        @property { string } [id]
        
        @property { string } [currency]
        
        @property { string } [item_type]
        
        @property { string } [category_slug]
        
        @property { ProductPublished } [product_publish]
        
        @property { boolean } [is_set]
        
        @property { boolean } [is_active]
        
        @property { string } [name]
        
        @property { boolean } [is_dependent]
        
        @property { Attributes } [attributes]
        
        @property { string } [country_of_origin]
        
        @property { string } [highlights]
        
        @property { string } [size_guide]
        
        @property { string } [description]
        
        @property { Brand } [brand]
        
        @property { Array<Object> } [sizes]
        
        @property { number } [company_id]
        
        @property { Array<string> } [images]
        
        @property { string } [template_tag]
        
        @property { Array<number> } [departments]
        
        @property { Array<string> } [media]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef ProductListingResponse
        
        
        @property { PageData } [page]
        
        @property { Array<Product> } [items]
        
         
    */
/**
        @typedef TeaserTag
        
        
        @property { string } [tag]
        
        @property { string } [url]
        
         
    */
/**
        @typedef ProductPublish
        
        
        @property { string } [product_online_date]
        
        @property { boolean } [is_set]
        
         
    */
/**
        @typedef OrderQuantity
        
        
        @property { number } [minimum]
        
        @property { number } [maximum]
        
        @property { boolean } [is_set]
        
         
    */
/**
        @typedef ReturnConfig
        
        
        @property { string } [unit]
        
        @property { boolean } [returnable]
        
        @property { number } [time]
        
         
    */
/**
        @typedef Trader
        
        
        @property { string } address
        
        @property { string } name
        
         
    */
/**
        @typedef CustomOrder
        
        
        @property { boolean } [is_custom_order]
        
        @property { number } [manufacturing_time]
        
        @property { string } [manufacturing_time_unit]
        
         
    */
/**
        @typedef ProductCreateUpdate
        
        
        @property { string } slug
        
        @property { TeaserTag } [teaser_tag]
        
        @property { string } item_code
        
        @property { boolean } [multi_size]
        
        @property { string } hsn_code
        
        @property { string } currency
        
        @property { string } [short_description]
        
        @property { string } item_type
        
        @property { string } category_slug
        
        @property { Array<string> } [product_group_tag]
        
        @property { ProductPublish } [product_publish]
        
        @property { OrderQuantity } [moq]
        
        @property { string } [change_request_id]
        
        @property { Array<string> } [tags]
        
        @property { boolean } [is_set]
        
        @property { ReturnConfig } [return_config]
        
        @property { boolean } [is_active]
        
        @property { Object } [_custom_json]
        
        @property { string } name
        
        @property { boolean } [is_dependent]
        
        @property { string } country_of_origin
        
        @property { Object } [variants]
        
        @property { Array<string> } [highlights]
        
        @property { string } [size_guide]
        
        @property { string } [description]
        
        @property { number } [no_of_boxes]
        
        @property { Trader } [trader]
        
        @property { boolean } [is_image_less_product]
        
        @property { number } brand_uid
        
        @property { number } company_id
        
        @property { CustomOrder } [custom_order]
        
        @property { string } template_tag
        
        @property { Array<number> } departments
        
        @property { string } [trader_type]
        
        @property { string } [requester]
        
        @property { Array<Media1> } [media]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef ValidateProduct
        
        
        @property { boolean } [valid]
        
         
    */
/**
        @typedef UserDetail
        
        
        @property { string } [user_id]
        
        @property { string } [full_name]
        
        @property { string } [username]
        
         
    */
/**
        @typedef ProductBulkRequest
        
        
        @property { ProductTemplate } [template]
        
        @property { number } [failed]
        
        @property { string } [file_path]
        
        @property { UserDetail } [created_by]
        
        @property { number } [cancelled]
        
        @property { number } [succeed]
        
        @property { number } [company_id]
        
        @property { number } [total]
        
        @property { UserDetail } [modified_by]
        
        @property { string } [template_tag]
        
        @property { string } [stage]
        
        @property { string } [modified_on]
        
        @property { boolean } [is_active]
        
        @property { Array<string> } [cancelled_records]
        
        @property { Array<string> } [failed_records]
        
        @property { string } [created_on]
        
         
    */
/**
        @typedef ProductBulkRequestList
        
        
        @property { PageData } [page]
        
        @property { ProductBulkRequest } [items]
        
         
    */
/**
        @typedef UserInfo1
        
        
        @property { string } [email]
        
        @property { string } [username]
        
        @property { string } [user_id]
        
        @property { string } [uid]
        
         
    */
/**
        @typedef BulkJob
        
        
        @property { number } [failed]
        
        @property { string } [file_path]
        
        @property { UserInfo1 } [created_by]
        
        @property { number } [cancelled]
        
        @property { number } [succeed]
        
        @property { string } [tracking_url]
        
        @property { number } company_id
        
        @property { number } total
        
        @property { Array<Object> } [failed_records]
        
        @property { string } [template_tag]
        
        @property { string } [modified_on]
        
        @property { string } [stage]
        
        @property { boolean } [is_active]
        
        @property { Array<Object> } [cancelled_records]
        
        @property { UserInfo1 } [modified_by]
        
        @property { string } created_on
        
        @property { string } [custom_template_tag]
        
         
    */
/**
        @typedef BulkProductRequest
        
        
        @property { string } batch_id
        
        @property { number } company_id
        
        @property { Array<Object> } data
        
        @property { string } template_tag
        
         
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
        
        
        @property { number } [failed]
        
        @property { UserCommon } [created_by]
        
        @property { number } [cancelled]
        
        @property { number } [succeed]
        
        @property { string } [tracking_url]
        
        @property { number } [company_id]
        
        @property { number } [total]
        
        @property { string } [id]
        
        @property { Array<string> } [failed_records]
        
        @property { number } [retry]
        
        @property { string } [modified_on]
        
        @property { string } [stage]
        
        @property { string } [file_path]
        
        @property { Array<string> } [cancelled_records]
        
        @property { UserCommon } [modified_by]
        
        @property { string } [created_on]
        
        @property { boolean } [is_active]
        
         
    */
/**
        @typedef BulkAssetResponse
        
        
        @property { PageData } [page]
        
        @property { Array<Items> } [items]
        
         
    */
/**
        @typedef ProductBulkAssets
        
        
        @property { number } [company_id]
        
        @property { Object } user
        
        @property { string } url
        
         
    */
/**
        @typedef InventoryRequest
        
        
        @property { number } [page_size]
        
        @property { number } [total]
        
        @property { number } [page_no]
        
        @property { string } [search]
        
        @property { string } [size]
        
         
    */
/**
        @typedef GTIN
        
        
        @property { string } gtin_value
        
        @property { boolean } [primary]
        
        @property { string } gtin_type
        
         
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
        
        @property { SizeDistribution } size_distribution
        
         
    */
/**
        @typedef InvSize
        
        
        @property { number } [price_transfer]
        
        @property { string } [item_dimensions_unit_of_measure]
        
        @property { string } store_code
        
        @property { Array<GTIN> } identifiers
        
        @property { number } price_effective
        
        @property { InventorySet } [set]
        
        @property { number } [item_length]
        
        @property { number } [item_weight]
        
        @property { string } currency
        
        @property { boolean } [is_set]
        
        @property { number } [item_height]
        
        @property { string } [item_weight_unit_of_measure]
        
        @property { number } [item_width]
        
        @property { string } size
        
        @property { number } quantity
        
        @property { number } price
        
         
    */
/**
        @typedef ItemQuery
        
        
        @property { string } [item_code]
        
        @property { number } [brand_uid]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef InventoryRequest1
        
        
        @property { Array<InvSize> } sizes
        
        @property { number } company_id
        
        @property { ItemQuery } item
        
         
    */
/**
        @typedef BulkRequestGet
        
        
        @property { string } [end_date]
        
        @property { number } [page_size]
        
        @property { number } [total]
        
        @property { number } [page_no]
        
        @property { string } [start_date]
        
        @property { string } [stage]
        
        @property { string } [search]
        
        @property { string } [template_tag]
        
        @property { string } [custom_template_tag]
        
         
    */
/**
        @typedef CommonResponse
        
        
        @property { string } [success]
        
         
    */
/**
        @typedef Size1
        
        
        @property { number } [price_transfer]
        
        @property { string } [item_dimensions_unit_of_measure]
        
        @property { string } store_code
        
        @property { Array<Object> } [identifiers]
        
        @property { string } seller_identifier
        
        @property { number } price_effective
        
        @property { InventorySet } [set]
        
        @property { number } [item_length]
        
        @property { number } [item_weight]
        
        @property { string } currency
        
        @property { boolean } [is_set]
        
        @property { number } [item_height]
        
        @property { string } [item_weight_unit_of_measure]
        
        @property { number } [item_width]
        
        @property { string } [size]
        
        @property { number } quantity
        
        @property { number } price
        
         
    */
/**
        @typedef InventoryBulkRequest
        
        
        @property { Array<Size1> } sizes
        
        @property { number } company_id
        
        @property { Object } [user]
        
        @property { string } batch_id
        
         
    */
/**
        @typedef InventoryExportJob
        
        
        @property { string } task_id
        
        @property { string } [status]
        
        @property { Object } [request_params]
        
        @property { string } [trigger_on]
        
        @property { string } [completed_on]
        
        @property { number } seller_id
        
        @property { string } [url]
        
         
    */
/**
        @typedef InventoryExportRequest
        
        
        @property { Array<number> } [brand]
        
        @property { Array<number> } [store]
        
        @property { string } [type]
        
         
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
        @typedef PageResponse
        
        
        @property { number } [item_total]
        
        @property { string } [current]
        
        @property { boolean } [has_next]
        
        @property { number } [size]
        
        @property { boolean } [has_previous]
        
         
    */
/**
        @typedef HsnCodesObject
        
        
        @property { number } [threshold2]
        
        @property { boolean } [tax_on_mrp]
        
        @property { string } [hs2_code]
        
        @property { number } [tax1]
        
        @property { number } [tax2]
        
        @property { number } [company_id]
        
        @property { string } [hsn_code]
        
        @property { string } [id]
        
        @property { number } [threshold1]
        
        @property { string } [modified_on]
        
        @property { boolean } [tax_on_esp]
        
         
    */
/**
        @typedef HsnCodesListingResponse
        
        
        @property { PageResponse } [page]
        
        @property { Array<HsnCodesObject> } [items]
        
         
    */
/**
        @typedef HsnUpsert
        
        
        @property { number } [threshold2]
        
        @property { boolean } tax_on_mrp
        
        @property { string } hs2_code
        
        @property { number } tax1
        
        @property { number } [tax2]
        
        @property { number } company_id
        
        @property { string } hsn_code
        
        @property { number } threshold1
        
        @property { boolean } [tax_on_esp]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef HsnCode
        
        
        @property { HsnCodesObject } [data]
        
         
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
        @typedef BrandItem
        
        
        @property { string } [slug]
        
        @property { string } [name]
        
        @property { ImageUrls } [banners]
        
        @property { Media } [logo]
        
        @property { string } [discount]
        
        @property { ProductListingAction } [action]
        
        @property { Array<string> } [departments]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef BrandListingResponse
        
        
        @property { Page } page
        
        @property { Array<BrandItem> } [items]
        
         
    */
/**
        @typedef Department
        
        
        @property { string } [slug]
        
        @property { string } [name]
        
        @property { number } [priority_order]
        
        @property { Media } [logo]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef DepartmentResponse
        
        
        @property { Array<Department> } [items]
        
         
    */
/**
        @typedef CategoryItems
        
        
        @property { string } [slug]
        
        @property { string } [name]
        
        @property { ImageUrls } [banners]
        
        @property { Array<Object> } [childs]
        
        @property { ProductListingAction } [action]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef DepartmentCategoryTree
        
        
        @property { string } [department]
        
        @property { Array<CategoryItems> } [items]
        
         
    */
/**
        @typedef DepartmentIdentifier
        
        
        @property { string } [slug]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef CategoryListingResponse
        
        
        @property { Array<DepartmentCategoryTree> } [data]
        
        @property { Array<DepartmentIdentifier> } [departments]
        
         
    */
/**
        @typedef ApplicationProductListingResponse
        
        
        @property { Page } page
        
        @property { Array<ProductListingDetail> } [items]
        
        @property { Array<ProductFilters> } [filters]
        
        @property { Array<ProductSortOn> } [sort_on]
        
         
    */
/**
        @typedef ProductDetail
        
        
        @property { string } slug
        
        @property { string } [type]
        
        @property { Object } [teaser_tag]
        
        @property { string } [item_code]
        
        @property { string } [short_description]
        
        @property { Object } [promo_meta]
        
        @property { Array<string> } [similars]
        
        @property { string } [item_type]
        
        @property { Array<Media1> } [medias]
        
        @property { string } [name]
        
        @property { Array<string> } [tryouts]
        
        @property { string } [color]
        
        @property { Object } [attributes]
        
        @property { number } [rating_count]
        
        @property { Array<string> } [highlights]
        
        @property { number } [rating]
        
        @property { string } [product_online_date]
        
        @property { ProductBrand } [brand]
        
        @property { string } [description]
        
        @property { boolean } [has_variant]
        
        @property { number } [uid]
        
        @property { string } [image_nature]
        
        @property { Array<ProductDetailGroupedAttribute> } [grouped_attributes]
        
         
    */
/**
        @typedef Document
        
        
        @property { boolean } [verified]
        
        @property { string } value
        
        @property { string } type
        
        @property { string } legal_name
        
        @property { string } [url]
        
         
    */
/**
        @typedef CompanyAddress
        
        
        @property { string } state
        
        @property { string } city
        
        @property { string } [landmark]
        
        @property { string } address1
        
        @property { string } country
        
        @property { string } [country_code]
        
        @property { number } pincode
        
        @property { number } latitude
        
        @property { number } longitude
        
        @property { string } [address2]
        
         
    */
/**
        @typedef ReferralInfo
        
        
        @property { string } [referral_code]
        
         
    */
/**
        @typedef BusinessCountryInfo
        
        
        @property { string } [country]
        
        @property { string } [country_code]
        
         
    */
/**
        @typedef CompanyStoreSerializerRequest
        
        
        @property { number } [uid]
        
        @property { Document } document
        
        @property { string } name
        
        @property { Array<string> } [notification_emails]
        
        @property { CompanyAddress } address
        
        @property { Object } [warnings]
        
        @property { boolean } [franchise_enabled]
        
        @property { ReferralInfo } [referral_info]
        
        @property { string } [business_info]
        
        @property { Array<number> } brands
        
        @property { BusinessCountryInfo } business_country_info
        
        @property { string } business_type
        
         
    */
/**
        @typedef SellerPhoneNumber
        
        
        @property { number } country_code
        
        @property { string } number
        
         
    */
/**
        @typedef ContactDetails
        
        
        @property { Array<SellerPhoneNumber> } [phone]
        
        @property { Array<string> } [emails]
        
         
    */
/**
        @typedef GetAddressSerializer
        
        
        @property { string } [state]
        
        @property { string } [city]
        
        @property { string } [landmark]
        
        @property { string } [address1]
        
        @property { string } [country]
        
        @property { string } [country_code]
        
        @property { number } [pincode]
        
        @property { number } [latitude]
        
        @property { number } [longitude]
        
        @property { string } [address_type]
        
        @property { string } [address2]
        
         
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
        @typedef BusinessCountryInfo1
        
        
        @property { string } [country]
        
        @property { string } [country_code]
        
         
    */
/**
        @typedef GetCompanyProfileSerializerResponse
        
        
        @property { ContactDetails } [contact_details]
        
        @property { Array<Document> } [documents]
        
        @property { Object } [warnings]
        
        @property { string } company_type
        
        @property { string } [business_info]
        
        @property { UserSerializer } [modified_by]
        
        @property { string } [created_on]
        
        @property { Array<GetAddressSerializer> } [addresses]
        
        @property { string } [stage]
        
        @property { string } [verified_on]
        
        @property { number } uid
        
        @property { string } [name]
        
        @property { Array<string> } [notification_emails]
        
        @property { UserSerializer } [verified_by]
        
        @property { UserSerializer } [created_by]
        
        @property { boolean } [franchise_enabled]
        
        @property { string } [modified_on]
        
        @property { BusinessDetails } [business_details]
        
        @property { BusinessCountryInfo1 } [business_country_info]
        
        @property { string } business_type
        
         
    */
/**
        @typedef DocumentsObj
        
        
        @property { number } [verified]
        
        @property { number } [pending]
        
         
    */
/**
        @typedef MetricsSerializer
        
        
        @property { number } [uid]
        
        @property { DocumentsObj } [store]
        
        @property { DocumentsObj } [product]
        
        @property { DocumentsObj } [store_documents]
        
        @property { DocumentsObj } [company_documents]
        
        @property { DocumentsObj } [brand]
        
        @property { string } [stage]
        
         
    */
/**
        @typedef UserSerializer1
        
        
        @property { string } [contact]
        
        @property { string } [username]
        
        @property { string } [user_id]
        
         
    */
/**
        @typedef BrandBannerSerializer
        
        
        @property { string } [portrait]
        
        @property { string } [landscape]
        
         
    */
/**
        @typedef GetBrandResponseSerializer
        
        
        @property { number } [uid]
        
        @property { UserSerializer1 } [modified_by]
        
        @property { string } name
        
        @property { string } [created_on]
        
        @property { string } [logo]
        
        @property { BrandBannerSerializer } [banner]
        
        @property { Object } [warnings]
        
        @property { UserSerializer1 } [verified_by]
        
        @property { string } [slug_key]
        
        @property { string } [description]
        
        @property { UserSerializer1 } [created_by]
        
        @property { Object } [_custom_json]
        
        @property { Array<string> } [synonyms]
        
        @property { string } [stage]
        
        @property { Object } [_locale_language]
        
        @property { string } [verified_on]
        
        @property { string } [reject_reason]
        
        @property { string } [modified_on]
        
         
    */
/**
        @typedef CreateUpdateBrandRequestSerializer
        
        
        @property { number } [uid]
        
        @property { string } name
        
        @property { string } logo
        
        @property { string } [brand_tier]
        
        @property { BrandBannerSerializer } [banner]
        
        @property { number } [company_id]
        
        @property { string } [description]
        
        @property { Object } [_custom_json]
        
        @property { Array<string> } [synonyms]
        
        @property { Object } [_locale_language]
        
         
    */
/**
        @typedef CompanyBrandPostRequestSerializer
        
        
        @property { number } [uid]
        
        @property { Array<number> } brands
        
        @property { number } company
        
         
    */
/**
        @typedef GetCompanySerializer
        
        
        @property { number } [uid]
        
        @property { UserSerializer } [modified_by]
        
        @property { string } [name]
        
        @property { string } [created_on]
        
        @property { Array<GetAddressSerializer> } [addresses]
        
        @property { string } [company_type]
        
        @property { UserSerializer } [verified_by]
        
        @property { UserSerializer } [created_by]
        
        @property { string } [stage]
        
        @property { string } [verified_on]
        
        @property { string } [reject_reason]
        
        @property { string } [business_type]
        
        @property { string } [modified_on]
        
         
    */
/**
        @typedef CompanyBrandSerializer
        
        
        @property { number } [uid]
        
        @property { UserSerializer1 } [modified_by]
        
        @property { string } [created_on]
        
        @property { Object } [warnings]
        
        @property { UserSerializer1 } [verified_by]
        
        @property { UserSerializer1 } [created_by]
        
        @property { GetBrandResponseSerializer } [brand]
        
        @property { GetCompanySerializer } [company]
        
        @property { string } [stage]
        
        @property { string } [verified_on]
        
        @property { string } [reject_reason]
        
        @property { string } [modified_on]
        
         
    */
/**
        @typedef CompanyBrandListSerializer
        
        
        @property { Array<CompanyBrandSerializer> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef GetAddressSerializer1
        
        
        @property { string } [state]
        
        @property { string } [city]
        
        @property { string } [landmark]
        
        @property { string } [address1]
        
        @property { string } [country]
        
        @property { string } [country_code]
        
        @property { number } [pincode]
        
        @property { number } [latitude]
        
        @property { number } [longitude]
        
        @property { string } [address_type]
        
        @property { string } [address2]
        
         
    */
/**
        @typedef ProductReturnConfigSerializer
        
        
        @property { number } [store_uid]
        
        @property { boolean } [on_same_store]
        
         
    */
/**
        @typedef LocationManagerSerializer
        
        
        @property { SellerPhoneNumber } mobile_no
        
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
        
        
        @property { LocationTimingSerializer } [closing]
        
        @property { boolean } open
        
        @property { LocationTimingSerializer } [opening]
        
        @property { string } weekday
        
         
    */
/**
        @typedef InvoiceCredSerializer
        
        
        @property { string } [password]
        
        @property { string } [username]
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef InvoiceDetailsSerializer
        
        
        @property { InvoiceCredSerializer } [e_waybill]
        
        @property { InvoiceCredSerializer } [e_invoice]
        
         
    */
/**
        @typedef LocationSerializer
        
        
        @property { number } [uid]
        
        @property { string } [store_type]
        
        @property { string } name
        
        @property { Array<string> } [notification_emails]
        
        @property { Array<Document> } [documents]
        
        @property { GetAddressSerializer1 } address
        
        @property { Object } [warnings]
        
        @property { ProductReturnConfigSerializer } [product_return_config]
        
        @property { string } display_name
        
        @property { string } code
        
        @property { LocationManagerSerializer } [manager]
        
        @property { Object } [_custom_json]
        
        @property { number } company
        
        @property { Array<LocationDayWiseSerializer> } [timing]
        
        @property { string } [stage]
        
        @property { Array<SellerPhoneNumber> } [contact_numbers]
        
        @property { InvoiceDetailsSerializer } [gst_credentials]
        
         
    */
/**
        @typedef LocationIntegrationType
        
        
        @property { string } [inventory]
        
        @property { string } [order]
        
         
    */
/**
        @typedef GetLocationSerializer
        
        
        @property { LocationIntegrationType } [integration_type]
        
        @property { Array<Document> } [documents]
        
        @property { Object } [warnings]
        
        @property { Object } [_custom_json]
        
        @property { GetCompanySerializer } [company]
        
        @property { Array<SellerPhoneNumber> } [contact_numbers]
        
        @property { UserSerializer1 } [modified_by]
        
        @property { string } [created_on]
        
        @property { ProductReturnConfigSerializer } [product_return_config]
        
        @property { string } code
        
        @property { string } [stage]
        
        @property { string } [verified_on]
        
        @property { number } [uid]
        
        @property { string } name
        
        @property { Array<string> } [notification_emails]
        
        @property { UserSerializer1 } [verified_by]
        
        @property { LocationManagerSerializer } [manager]
        
        @property { UserSerializer1 } [created_by]
        
        @property { InvoiceDetailsSerializer } [gst_credentials]
        
        @property { string } [modified_on]
        
        @property { string } [store_type]
        
        @property { GetAddressSerializer } address
        
        @property { string } display_name
        
        @property { string } phone_number
        
        @property { Array<LocationDayWiseSerializer> } [timing]
        
         
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
        
        
        @property { string } file_name
        
        @property { string } file_path
        
        @property { string } content_type
        
        @property { string } method
        
        @property { string } namespace
        
        @property { string } operation
        
        @property { number } size
        
        @property { Upload } upload
        
        @property { CDN } cdn
        
         
    */
/**
        @typedef StartRequest
        
        
        @property { string } file_name
        
        @property { string } content_type
        
        @property { number } size
        
        @property { Array<string> } [tags]
        
         
    */
/**
        @typedef CompleteResponse
        
        
        @property { string } _id
        
        @property { string } file_name
        
        @property { string } file_path
        
        @property { string } content_type
        
        @property { string } method
        
        @property { string } namespace
        
        @property { string } operation
        
        @property { number } size
        
        @property { Upload } upload
        
        @property { CDN } cdn
        
        @property { string } success
        
        @property { Array<string> } [tags]
        
        @property { string } created_on
        
        @property { string } modified_on
        
         
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
        
        @property { number } attempts_made
        
        @property { Array<string> } [stacktrace]
        
        @property { number } finished_on
        
        @property { number } processed_on
        
         
    */
/**
        @typedef BulkResponse
        
        
        @property { string } tracking_url
        
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
        
        @property { string } signed_url
        
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
        
        @property { string } _id
        
        @property { string } file_name
        
        @property { string } [operation]
        
        @property { string } namespace
        
        @property { string } content_type
        
        @property { string } file_path
        
        @property { Upload } upload
        
        @property { CDN } cdn
        
        @property { string } created_on
        
        @property { string } modified_on
        
         
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
        
        @property { boolean } [force_web]
        
         
    */
/**
        @typedef CampaignShortLink
        
        
        @property { string } [source]
        
        @property { string } [medium]
        
         
    */
/**
        @typedef Attribution
        
        
        @property { string } [campaign_cookie_expiry]
        
         
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
        
        @property { string } [expire_at]
        
        @property { boolean } [enable_tracking]
        
        @property { boolean } [personalized]
        
        @property { CampaignShortLink } [campaign]
        
        @property { Redirects } [redirects]
        
        @property { Attribution } [attribution]
        
        @property { SocialMediaTags } [social_media_tags]
        
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
        
        @property { string } [created_by]
        
        @property { boolean } [app_redirect]
        
        @property { string } [fallback]
        
        @property { boolean } [active]
        
        @property { string } [_id]
        
        @property { boolean } [enable_tracking]
        
        @property { string } [expire_at]
        
        @property { string } [application]
        
        @property { string } [user_id]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { boolean } [personalized]
        
        @property { CampaignShortLink } [campaign]
        
        @property { Redirects } [redirects]
        
        @property { Attribution } [attribution]
        
        @property { SocialMediaTags } [social_media_tags]
        
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
        
        
        @property { number } [min_price]
        
        @property { number } [safe_stock]
        
        @property { number } [period_threshold]
        
        @property { string } [period_threshold_type]
        
        @property { Array<GenericDTO> } [period_type_list]
        
         
    */
/**
        @typedef GenericDTO
        
        
        @property { string } [text]
        
        @property { Object } [value]
        
         
    */
/**
        @typedef JobConfigDTO
        
        
        @property { string } integration
        
        @property { Object } [integration_data]
        
        @property { string } [company_name]
        
        @property { number } company_id
        
        @property { TaskDTO } [task_details]
        
        @property { DataTresholdDTO } [threshold_details]
        
        @property { string } [job_code]
        
        @property { string } [alias]
        
         
    */
/**
        @typedef TaskDTO
        
        
        @property { number } [type]
        
        @property { Array<GenericDTO> } [group_list]
        
         
    */
/**
        @typedef ResponseEnvelopeString
        
        
        @property { string } [timestamp]
        
        @property { number } [status]
        
        @property { string } [error]
        
        @property { string } [exception]
        
        @property { string } [message]
        
        @property { number } [total_time_taken_in_millis]
        
        @property { string } [http_status]
        
        @property { string } [items]
        
        @property { string } [payload]
        
        @property { string } [trace_id]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef AWSS3config
        
        
        @property { string } [bucket]
        
        @property { string } [region]
        
        @property { string } [dir]
        
        @property { string } [access_key]
        
        @property { string } [secret_key]
        
        @property { string } [local_file_path]
        
        @property { string } [archive_path]
        
        @property { boolean } [archive]
        
        @property { boolean } [delete]
        
        @property { boolean } [unzip]
        
        @property { string } [zip_format]
        
        @property { string } [file_regex]
        
        @property { ArchiveConfig } [archive_config]
        
         
    */
/**
        @typedef ArchiveConfig
        
        
        @property { boolean } [delete]
        
        @property { boolean } [archive]
        
        @property { string } [archive_dir]
        
         
    */
/**
        @typedef Audit
        
        
        @property { string } [created_by]
        
        @property { string } [modified_by]
        
        @property { string } [created_on]
        
        @property { string } [modified_on]
        
         
    */
/**
        @typedef CatalogMasterConfig
        
        
        @property { string } [source_slug]
        
         
    */
/**
        @typedef CompanyConfig
        
        
        @property { number } [company_id]
        
        @property { Array<number> } [exclude_steps]
        
        @property { Array<string> } [hidden_closet_keys]
        
        @property { Object } [open_tags]
        
        @property { Array<string> } [tax_identifiers]
        
        @property { number } [delete_quantity_threshold]
        
         
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
        
        @property { string } [driver_class]
        
        @property { string } [jdbc_url]
        
        @property { Object } [optional_properties]
        
         
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
        
        @property { PropBeanDTO } [intf_article_id]
        
        @property { PropBeanDTO } [price_effective]
        
        @property { PropBeanDTO } [quantity]
        
         
    */
/**
        @typedef DocMappingConfig
        
        
        @property { Object } [properties]
        
        @property { number } [junk_data_threshold_count]
        
        @property { Array<PropBeanConfig> } [prop_bean_configs]
        
        @property { string } [unwind_field]
        
        @property { DefaultHeadersDTO } [default_headers]
        
         
    */
/**
        @typedef EmailConfig
        
        
        @property { string } [recepient]
        
        @property { string } [host]
        
        @property { string } [username]
        
        @property { string } [password]
        
        @property { boolean } [unzip]
        
        @property { boolean } [read_from_content]
        
        @property { boolean } [filter_based_on_recepients]
        
        @property { string } [pcol]
        
        @property { string } [subject_line_regex]
        
        @property { string } [sender_address]
        
        @property { string } [local_dir]
        
        @property { Array<string> } [folder_name_hierarchies]
        
        @property { string } [attachment_regex]
        
        @property { string } [body_content_regex]
        
        @property { boolean } [password_protected]
        
        @property { string } [zip_format]
        
        @property { boolean } [attachment_mandate]
        
        @property { boolean } [filter_files_after_extraction]
        
        @property { ArchiveConfig } [archive_config]
        
        @property { boolean } [read_all_unread_mails]
        
        @property { string } [content_type]
        
        @property { boolean } [downloadable_link]
        
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
        
        @property { string } [local_dir]
        
        @property { string } [remote_dir]
        
        @property { string } [zip_file_regex]
        
        @property { ArchiveConfig } [archive_config]
        
        @property { string } [file_regex]
        
        @property { string } [zip_format]
        
        @property { boolean } [read_all_files]
        
         
    */
/**
        @typedef FileConfig
        
        
        @property { string } [delimiter]
        
        @property { string } [charset]
        
        @property { Object } [properties]
        
        @property { boolean } [file_has_header]
        
        @property { number } [header_index]
        
        @property { Array<string> } [header_array]
        
        @property { number } [data_start_index]
        
        @property { Array<PropBeanConfig> } [prop_bean_configs]
        
        @property { number } [junk_data_threshold_count]
        
        @property { string } [file_type]
        
        @property { boolean } [line_validity_check]
        
        @property { Array<string> } [sheet_names]
        
        @property { boolean } [read_all_sheets]
        
        @property { string } [quote_char]
        
        @property { string } [escape_char]
        
        @property { DefaultHeadersDTO } [default_headers]
        
         
    */
/**
        @typedef GoogleSpreadSheetConfig
        
        
        @property { string } [range]
        
        @property { string } [sheet_id]
        
        @property { string } [client_secret_location]
        
        @property { string } [cred_storage_directory]
        
        @property { string } [local_dir]
        
        @property { ArchiveConfig } [archive_config]
        
         
    */
/**
        @typedef HttpConfig
        
        
        @property { string } [hosturl]
        
        @property { string } [username]
        
        @property { string } [password]
        
        @property { Object } [request_params]
        
        @property { string } [http_method]
        
        @property { string } [request_payload]
        
        @property { string } [local_path]
        
        @property { ArchiveConfig } [archive_config]
        
         
    */
/**
        @typedef JobConfig
        
        
        @property { number } [_id]
        
        @property { string } [job_code]
        
        @property { string } [task_type]
        
        @property { number } [sync_delay]
        
        @property { string } [cron_expression]
        
        @property { StoreFilter } [store_filter]
        
        @property { ProcessConfig } [process_config]
        
        @property { Array<StoreConfig> } [store_config]
        
        @property { Object } [properties]
        
        @property { boolean } [immediate_first_run]
        
        @property { boolean } [disable]
        
        @property { Array<string> } [dependent_job_codes]
        
        @property { Array<CompanyConfig> } [company_config]
        
        @property { Array<number> } [company_ids]
        
        @property { Array<string> } [tax_identifiers]
        
        @property { string } [priority]
        
        @property { number } [period_threshold]
        
        @property { string } [period_threshold_type]
        
        @property { DBConnectionProfile } [db_connection_profile]
        
        @property { Object } [params]
        
        @property { Object } [open_tags]
        
        @property { number } [delete_quantity_threshold]
        
        @property { CatalogMasterConfig } [catalog_master_config]
        
        @property { Array<string> } [aggregator_types]
        
        @property { string } [integration_type]
        
        @property { number } [min_price]
        
        @property { Audit } [audit]
        
        @property { number } [version]
        
        @property { string } [alias]
        
         
    */
/**
        @typedef JobConfigRawDTO
        
        
        @property { string } integration
        
        @property { string } company_name
        
        @property { number } company_id
        
        @property { JobConfig } [data]
        
         
    */
/**
        @typedef JsonDocConfig
        
        
        @property { Array<PropBeanConfig> } [prop_bean_configs]
        
         
    */
/**
        @typedef LocalFileConfig
        
        
        @property { number } [retries]
        
        @property { number } [interval]
        
        @property { string } [local_dir]
        
        @property { string } [working_dir]
        
        @property { boolean } [unzip]
        
        @property { string } [zip_file_regex]
        
        @property { string } [file_regex]
        
        @property { string } [zip_format]
        
        @property { ArchiveConfig } [archive_config]
        
        @property { boolean } [read_all_files]
        
         
    */
/**
        @typedef MongoDocConfig
        
        
        @property { string } [collection_name]
        
        @property { Object } [find_query]
        
        @property { Object } [projection_query]
        
        @property { Array<PropBeanConfig> } [prop_bean_configs]
        
        @property { Array<Object> } [aggregate_pipeline]
        
        @property { boolean } [skip_save]
        
         
    */
/**
        @typedef OAuthConfig
        
        
        @property { number } [limit]
        
        @property { number } [pages]
        
        @property { number } [interval]
        
        @property { string } [consumer_key]
        
        @property { string } [consumer_secret]
        
        @property { string } [token]
        
        @property { string } [token_secret]
        
        @property { string } [rest_url]
        
        @property { string } [rest_base_url]
        
        @property { string } [function_name]
        
         
    */
/**
        @typedef ProcessConfig
        
        
        @property { DBConfig } [db_config]
        
        @property { DBParamConfig } [db_param_config]
        
        @property { SFTPConfig } [sftp_config]
        
        @property { AWSS3config } [aws_s3_config]
        
        @property { MongoDocConfig } [mongo_doc_config]
        
        @property { FTPConfig } [ftp_config]
        
        @property { EmailConfig } [email_config]
        
        @property { FileConfig } [file_config]
        
        @property { JsonDocConfig } [json_doc_config]
        
        @property { DocMappingConfig } [doc_mapping_config]
        
        @property { TaskStepConfig } [task_step_config]
        
        @property { HttpConfig } [http_config]
        
        @property { LocalFileConfig } [local_file_config]
        
        @property { OAuthConfig } [oauth_config]
        
        @property { GoogleSpreadSheetConfig } [google_spreadsheet_config]
        
         
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
        
        @property { string } [source_field]
        
        @property { Array<string> } [source_fields]
        
        @property { string } [destination_field]
        
        @property { string } [data_type]
        
        @property { Object } [default_value]
        
        @property { Object } [const_value]
        
        @property { string } [concat_str]
        
        @property { string } [function_name]
        
        @property { string } [transformer_name]
        
        @property { string } [all_param_function_name]
        
        @property { string } [sub_separator]
        
        @property { string } [index_field]
        
        @property { boolean } [ignore_if_not_exists]
        
        @property { string } [identifier_type]
        
        @property { Object } [projection_query]
        
        @property { boolean } [enrich_from_master]
        
         
    */
/**
        @typedef PropBeanDTO
        
        
        @property { boolean } [required]
        
        @property { boolean } [optional]
        
        @property { boolean } [include]
        
        @property { string } [source_field]
        
        @property { Array<string> } [source_fields]
        
        @property { string } [destination_field]
        
        @property { string } [data_type]
        
        @property { Object } [default_value]
        
        @property { Object } [const_value]
        
        @property { string } [concat_str]
        
        @property { string } [function_name]
        
        @property { string } [transformer_name]
        
        @property { string } [all_param_function_name]
        
        @property { string } [sub_separator]
        
        @property { string } [index_field]
        
        @property { boolean } [ignore_if_not_exists]
        
        @property { string } [identifier_type]
        
        @property { Object } [projection_query]
        
        @property { boolean } [enrich_from_master]
        
         
    */
/**
        @typedef ResponseEnvelopeListJobConfigRawDTO
        
        
        @property { string } [timestamp]
        
        @property { number } [status]
        
        @property { string } [error]
        
        @property { string } [exception]
        
        @property { string } [message]
        
        @property { number } [total_time_taken_in_millis]
        
        @property { string } [http_status]
        
        @property { Array<JobConfigRawDTO> } [items]
        
        @property { Array<JobConfigRawDTO> } [payload]
        
        @property { string } [trace_id]
        
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
        
        @property { string } [private_key_path]
        
        @property { boolean } [strict_host_key_checking]
        
        @property { string } [local_dir]
        
        @property { string } [remote_dir]
        
        @property { boolean } [password_protected]
        
        @property { string } [zip_file_regex]
        
        @property { string } [file_regex]
        
        @property { string } [zip_format]
        
        @property { ArchiveConfig } [archive_config]
        
        @property { boolean } [read_all_files]
        
         
    */
/**
        @typedef Send
        
        
        @property { boolean } [raw]
        
        @property { boolean } [processed]
        
         
    */
/**
        @typedef StoreConfig
        
        
        @property { string } [job_code]
        
        @property { string } [storeid]
        
        @property { string } [store_alias]
        
        @property { string } [store_file_regex]
        
        @property { string } [store_file_name]
        
        @property { ProcessConfig } [process_config]
        
        @property { Object } [properties]
        
         
    */
/**
        @typedef StoreFilter
        
        
        @property { Array<string> } [include_tags]
        
        @property { Array<string> } [exclude_tags]
        
        @property { Object } [query]
        
         
    */
/**
        @typedef TaskConfig
        
        
        @property { string } [name]
        
        @property { number } [task_config_id]
        
        @property { Array<TaskParam> } [task_params]
        
         
    */
/**
        @typedef TaskParam
        
        
        @property { string } [name]
        
        @property { Object } [value]
        
         
    */
/**
        @typedef TaskStepConfig
        
        
        @property { Array<TaskConfig> } [task_configs]
        
        @property { Array<number> } [task_config_ids]
        
        @property { Array<number> } [task_config_group_ids]
        
         
    */
/**
        @typedef ResponseEnvelopeListJobConfigDTO
        
        
        @property { string } [timestamp]
        
        @property { number } [status]
        
        @property { string } [error]
        
        @property { string } [exception]
        
        @property { string } [message]
        
        @property { number } [total_time_taken_in_millis]
        
        @property { string } [http_status]
        
        @property { Array<JobConfigDTO> } [items]
        
        @property { Array<JobConfigDTO> } [payload]
        
        @property { string } [trace_id]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef ResponseEnvelopeJobConfigDTO
        
        
        @property { string } [timestamp]
        
        @property { number } [status]
        
        @property { string } [error]
        
        @property { string } [exception]
        
        @property { string } [message]
        
        @property { number } [total_time_taken_in_millis]
        
        @property { string } [http_status]
        
        @property { JobConfigDTO } [items]
        
        @property { JobConfigDTO } [payload]
        
        @property { string } [trace_id]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef JobConfigListDTO
        
        
        @property { string } [code]
        
        @property { string } [alias]
        
        @property { string } [modified_by]
        
        @property { string } [created_by]
        
        @property { string } [modified_on]
        
        @property { string } [created_on]
        
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
        
        @property { number } [total_time_taken_in_millis]
        
        @property { string } [http_status]
        
        @property { Array<JobConfigListDTO> } [items]
        
        @property { Array<JobConfigListDTO> } [payload]
        
        @property { string } [trace_id]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef ApplicationInventory
        
        
        @property { AppInventoryConfig } [inventory]
        
        @property { AuthenticationConfig } [authentication]
        
        @property { ArticleAssignmentConfig } [article_assignment]
        
        @property { RewardPointsConfig } [reward_points]
        
        @property { AppCartConfig } [cart]
        
        @property { AppPaymentConfig } [payment]
        
        @property { AppOrderConfig } [order]
        
        @property { AppLogisticsConfig } [logistics]
        
        @property { string } [business]
        
        @property { boolean } [comms_enabled]
        
        @property { Array<string> } [platforms]
        
        @property { string } [_id]
        
        @property { LoyaltyPoints } [loyalty_points]
        
        @property { string } [app]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { string } [modified_by]
        
         
    */
/**
        @typedef AppInventoryConfig
        
        
        @property { InventoryBrand } [brand]
        
        @property { InventoryStore } [store]
        
        @property { InventoryCategory } [category]
        
        @property { InventoryPrice } [price]
        
        @property { InventoryDiscount } [discount]
        
        @property { boolean } [out_of_stock]
        
        @property { boolean } [franchise_enabled]
        
        @property { Array<any> } [exclude_category]
        
        @property { Array<string> } [image]
        
        @property { Array<any> } [company_store]
        
         
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
        
        @property { boolean } [post_order_reassignment]
        
        @property { Array<any> } [enforced_stores]
        
         
    */
/**
        @typedef ArticleAssignmentRules
        
        
        @property { StorePriority } [store_priority]
        
         
    */
/**
        @typedef StorePriority
        
        
        @property { boolean } [enabled]
        
        @property { Array<any> } [storetype_order]
        
         
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
        
        @property { boolean } [auto_apply]
        
        @property { string } [strategy_channel]
        
         
    */
/**
        @typedef AppCartConfig
        
        
        @property { DeliveryCharges } [delivery_charges]
        
        @property { boolean } [enabled]
        
        @property { number } [max_cart_items]
        
        @property { number } [min_cart_value]
        
        @property { boolean } [bulk_coupons]
        
         
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
        
        
        @property { CallbackUrl } [callback_url]
        
        @property { Methods } [methods]
        
        @property { PaymentSelectionLock } [payment_selection_lock]
        
        @property { string } [mode_of_payment]
        
        @property { string } [source]
        
        @property { boolean } [enabled]
        
        @property { number } [cod_amount_limit]
        
        @property { number } [cod_charges]
        
         
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
        
        @property { string } [default_options]
        
        @property { string } [payment_identifier]
        
         
    */
/**
        @typedef AppOrderConfig
        
        
        @property { boolean } [enabled]
        
        @property { boolean } [force_reassignment]
        
         
    */
/**
        @typedef AppLogisticsConfig
        
        
        @property { boolean } [logistics_by_seller]
        
        @property { boolean } [serviceability_check]
        
        @property { boolean } [same_day_delivery]
        
        @property { boolean } [dp_assignment]
        
         
    */
/**
        @typedef LoyaltyPoints
        
        
        @property { boolean } [enabled]
        
        @property { boolean } [auto_apply]
        
         
    */
/**
        @typedef AppInventoryPartialUpdate
        
        
        @property { RewardPointsConfig } [reward_points]
        
        @property { AppCartConfig } [cart]
        
        @property { AppPaymentConfig } [payment]
        
        @property { LoyaltyPoints } [loyalty_points]
        
        @property { boolean } [comms_enabled]
        
         
    */
/**
        @typedef BrandCompanyInfo
        
        
        @property { string } [company_name]
        
        @property { number } [company_id]
        
         
    */
/**
        @typedef CompanyByBrandsRequest
        
        
        @property { number } brands
        
        @property { string } [search_text]
        
         
    */
/**
        @typedef CompanyByBrandsResponse
        
        
        @property { Array<BrandCompanyInfo> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef StoreByBrandsRequest
        
        
        @property { number } [company_id]
        
        @property { number } brands
        
        @property { string } [search_text]
        
         
    */
/**
        @typedef StoreByBrandsResponse
        
        
        @property { Array<BrandStoreInfo> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef BrandStoreInfo
        
        
        @property { string } [store_name]
        
        @property { number } [store_id]
        
        @property { string } [store_type]
        
        @property { string } [store_code]
        
        @property { OptedStoreAddress } [store_address]
        
        @property { OptedCompany } [company]
        
         
    */
/**
        @typedef CompanyBrandInfo
        
        
        @property { string } [name]
        
        @property { number } [value]
        
        @property { string } [brand_logo_url]
        
        @property { string } [brand_banner_url]
        
        @property { string } [brand_banner_portrait_url]
        
         
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
        
        
        @property { boolean } [is_active]
        
        @property { string } [_id]
        
        @property { string } [app_name]
        
        @property { LandingImage } [landing_image]
        
        @property { SplashImage } [splash_image]
        
        @property { string } [application]
        
        @property { string } [platform_type]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
        @property { string } [package_name]
        
         
    */
/**
        @typedef LandingImage
        
        
        @property { string } [aspect_ratio]
        
        @property { string } [secure_url]
        
         
    */
/**
        @typedef SplashImage
        
        
        @property { string } [aspect_ratio]
        
        @property { string } [secure_url]
        
         
    */
/**
        @typedef MobileAppConfigRequest
        
        
        @property { string } [app_name]
        
        @property { LandingImage } [landing_image]
        
        @property { SplashImage } [splash_image]
        
        @property { boolean } [is_active]
        
         
    */
/**
        @typedef BuildVersionHistory
        
        
        @property { BuildVersion } [versions]
        
        @property { string } [latest_available_version_name]
        
         
    */
/**
        @typedef BuildVersion
        
        
        @property { string } [_id]
        
        @property { string } [application]
        
        @property { string } [platform_type]
        
        @property { string } [build_status]
        
        @property { string } [version_name]
        
        @property { number } [version_code]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
    */
/**
        @typedef AppSupportedCurrency
        
        
        @property { string } [_id]
        
        @property { Array<string> } [supported_currency]
        
        @property { string } [application]
        
        @property { DefaultCurrency } [default_currency]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
         
    */
/**
        @typedef DefaultCurrency
        
        
        @property { string } [ref]
        
        @property { string } [code]
        
         
    */
/**
        @typedef CurrencyConfig
        
        
        @property { string } [_id]
        
        @property { boolean } [is_active]
        
        @property { string } [name]
        
        @property { string } [code]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [decimal_digits]
        
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
        
        
        @property { string } [_id]
        
         
    */
/**
        @typedef UpdateDomainTypeRequest
        
        
        @property { UpdateDomain } [domain]
        
        @property { string } [action]
        
         
    */
/**
        @typedef DomainStatusRequest
        
        
        @property { string } [domain_url]
        
         
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
        
        
        @property { string } [domain_url]
        
        @property { boolean } [custom]
        
         
    */
/**
        @typedef DomainSuggestion
        
        
        @property { string } name
        
        @property { boolean } [unsupported]
        
        @property { boolean } is_available
        
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
        
        @property { string } [description_html]
        
        @property { string } [constants]
        
        @property { Array<Object> } [companies]
        
        @property { Array<string> } [support]
        
        @property { string } [_id]
        
        @property { string } [name]
        
        @property { IntegrationMeta } [meta]
        
        @property { string } [icon]
        
        @property { string } [owner]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { string } [token]
        
        @property { string } [secret]
        
        @property { number } [__v]
        
         
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
        
        
        @property { JsonSchema } [json_schema]
        
        @property { string } [browser_script]
        
         
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
        
        
        @property { Array<JsonSchema> } [json_schema]
        
        @property { string } [browser_script]
        
         
    */
/**
        @typedef InventoryValidator
        
        
        @property { Array<JsonSchema> } [json_schema]
        
        @property { string } [browser_script]
        
         
    */
/**
        @typedef OrderValidator
        
        
        @property { Array<JsonSchema> } [json_schema]
        
        @property { string } [browser_script]
        
         
    */
/**
        @typedef IntegrationMeta
        
        
        @property { boolean } [is_public]
        
        @property { string } [_id]
        
        @property { string } [name]
        
        @property { string } [value]
        
         
    */
/**
        @typedef Integration
        
        
        @property { Validators } [validators]
        
        @property { string } [description]
        
        @property { string } [description_html]
        
        @property { Object } [constants]
        
        @property { Array<Object> } [companies]
        
        @property { Array<string> } [support]
        
        @property { string } [_id]
        
        @property { string } [name]
        
        @property { IntegrationMeta } [meta]
        
        @property { string } [icon]
        
        @property { string } [owner]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { string } [token]
        
        @property { string } [secret]
        
        @property { number } [__v]
        
         
    */
/**
        @typedef IntegrationConfigResponse
        
        
        @property { IntegrationLevel } [items]
        
         
    */
/**
        @typedef IntegrationLevel
        
        
        @property { boolean } [opted]
        
        @property { Array<Object> } [permissions]
        
        @property { Array<Object> } [last_patch]
        
        @property { string } [_id]
        
        @property { string } [integration]
        
        @property { string } [level]
        
        @property { number } [uid]
        
        @property { Array<any> } [meta]
        
        @property { string } [token]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
        @property { Object } [data]
        
         
    */
/**
        @typedef OptedStoreIntegration
        
        
        @property { boolean } [other_opted]
        
        @property { IntegrationOptIn } [other_integration]
        
        @property { OtherEntity } [other_entity]
        
         
    */
/**
        @typedef OtherEntity
        
        
        @property { boolean } [opted]
        
        @property { Array<string> } [permissions]
        
        @property { LastPatch } [last_patch]
        
        @property { string } [_id]
        
        @property { string } [integration]
        
        @property { string } [level]
        
        @property { number } [uid]
        
        @property { OtherEntityData } [data]
        
        @property { Array<Object> } [meta]
        
        @property { string } [token]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
    */
/**
        @typedef LastPatch
        
        
        @property { string } [op]
        
        @property { string } [path]
        
        @property { string } [value]
        
         
    */
/**
        @typedef OtherEntityData
        
        
        @property { string } [article_identifier]
        
         
    */
/**
        @typedef App
        
        
        @property { string } [company_id]
        
        @property { string } [channel_type]
        
        @property { ApplicationAuth } [auth]
        
        @property { string } [name]
        
        @property { string } [desc]
        
         
    */
/**
        @typedef AppInventory
        
        
        @property { InventoryBrandRule } [brand]
        
        @property { InventoryStoreRule } [store]
        
        @property { Array<string> } [image]
        
        @property { boolean } [franchise_enabled]
        
        @property { boolean } [out_of_stock]
        
        @property { InventoryPaymentConfig } [payment]
        
        @property { InventoryArticleAssignment } [article_assignment]
        
         
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
        
        @property { string } [company_type]
        
         
    */
/**
        @typedef StoresResponse
        
        
        @property { AppInventoryStores } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef AppInventoryStores
        
        
        @property { string } [_id]
        
        @property { string } [modified_on]
        
        @property { number } [uid]
        
        @property { string } [name]
        
        @property { string } [display_name]
        
        @property { string } [store_type]
        
        @property { string } [store_code]
        
        @property { number } [company_id]
        
         
    */
/**
        @typedef FilterOrderingStoreRequest
        
        
        @property { boolean } [all_stores]
        
        @property { Array<number> } [deployed_stores]
        
        @property { string } [q]
        
         
    */
/**
        @typedef DeploymentMeta
        
        
        @property { Array<number> } [deployed_stores]
        
        @property { boolean } [all_stores]
        
        @property { boolean } [enabled]
        
        @property { string } [type]
        
        @property { string } [_id]
        
        @property { string } [app]
        
        @property { number } [__v]
        
         
    */
/**
        @typedef OrderingStoreConfig
        
        
        @property { DeploymentMeta } [deployment_meta]
        
         
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
        
        @property { string } [_id]
        
        @property { string } [domain]
        
        @property { OtherSellerCompany } [company]
        
        @property { string } [opt_type]
        
         
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
        
        @property { string } [_id]
        
        @property { string } [domain]
        
        @property { OptedCompany } [company]
        
        @property { OptedInventory } [opted_inventory]
        
        @property { OptOutInventory } [opt_out_inventory]
        
         
    */
/**
        @typedef OptedCompany
        
        
        @property { number } [uid]
        
        @property { string } [name]
        
         
    */
/**
        @typedef OptedInventory
        
        
        @property { OptType } [opt_type]
        
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
        
        @property { string } [store_code]
        
        @property { string } [_id]
        
        @property { string } [modified_on]
        
        @property { number } [uid]
        
        @property { OptedStoreAddress } [address]
        
        @property { string } [display_name]
        
        @property { string } [store_type]
        
        @property { number } [company_id]
        
         
    */
/**
        @typedef OptOutInventory
        
        
        @property { Array<number> } store
        
        @property { Array<number> } company
        
         
    */
/**
        @typedef ProductDetailFeature
        
        
        @property { Array<string> } [similar]
        
        @property { boolean } [seller_selection]
        
        @property { boolean } [update_product_meta]
        
        @property { boolean } [request_product]
        
         
    */
/**
        @typedef LaunchPage
        
        
        @property { string } [page_type]
        
        @property { Object } [params]
        
        @property { Object } [query]
        
         
    */
/**
        @typedef LandingPageFeature
        
        
        @property { LaunchPage } [launch_page]
        
        @property { boolean } [continue_as_guest]
        
        @property { string } [login_btn_text]
        
        @property { boolean } [show_domain_textbox]
        
        @property { boolean } [show_register_btn]
        
         
    */
/**
        @typedef RegistrationPageFeature
        
        
        @property { boolean } [ask_store_address]
        
         
    */
/**
        @typedef AppFeature
        
        
        @property { ProductDetailFeature } [product_detail]
        
        @property { LandingPageFeature } [landing_page]
        
        @property { RegistrationPageFeature } [registration_page]
        
        @property { HomePageFeature } [home_page]
        
        @property { CommonFeature } [common]
        
        @property { CartFeature } [cart]
        
        @property { QrFeature } [qr]
        
        @property { PcrFeature } [pcr]
        
        @property { OrderFeature } [order]
        
        @property { string } [_id]
        
        @property { string } [app]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
    */
/**
        @typedef HomePageFeature
        
        
        @property { boolean } [order_processing]
        
         
    */
/**
        @typedef CommonFeature
        
        
        @property { CommunicationOptinDialogFeature } [communication_optin_dialog]
        
        @property { DeploymentStoreSelectionFeature } [deployment_store_selection]
        
        @property { ListingPriceFeature } [listing_price]
        
        @property { ListingPageFeature } [listing_page]
        
        @property { CurrencyFeature } [currency]
        
        @property { RevenueEngineFeature } [revenue_engine]
        
        @property { FeedbackFeature } [feedback]
        
        @property { CompareProductsFeature } [compare_products]
        
         
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
        
        
        @property { string } [sort_on]
        
         
    */
/**
        @typedef CurrencyFeature
        
        
        @property { Array<string> } [value]
        
        @property { string } [type]
        
        @property { string } [default_currency]
        
         
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
        
        
        @property { boolean } [gst_input]
        
        @property { boolean } [staff_selection]
        
        @property { boolean } [placing_for_customer]
        
        @property { boolean } [google_map]
        
         
    */
/**
        @typedef QrFeature
        
        
        @property { boolean } [application]
        
        @property { boolean } [products]
        
        @property { boolean } [collections]
        
         
    */
/**
        @typedef PcrFeature
        
        
        @property { boolean } [staff_selection]
        
         
    */
/**
        @typedef OrderFeature
        
        
        @property { boolean } [buy_again]
        
         
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
        
        
        @property { string } [_id]
        
        @property { boolean } [is_active]
        
        @property { string } [name]
        
        @property { string } [code]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [decimal_digits]
        
        @property { string } [symbol]
        
         
    */
/**
        @typedef Domain
        
        
        @property { boolean } [verified]
        
        @property { boolean } [is_primary]
        
        @property { boolean } [is_default]
        
        @property { boolean } [is_shortlink]
        
        @property { string } [_id]
        
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
        
        @property { string } [redirect_to]
        
        @property { string } [type]
        
         
    */
/**
        @typedef ApplicationMeta
        
        
        @property { string } [name]
        
        @property { string } [value]
        
         
    */
/**
        @typedef SecureUrl
        
        
        @property { string } [secure_url]
        
         
    */
/**
        @typedef Application
        
        
        @property { ApplicationWebsite } [website]
        
        @property { ApplicationCors } [cors]
        
        @property { ApplicationAuth } [auth]
        
        @property { string } [description]
        
        @property { string } [channel_type]
        
        @property { number } [cache_ttl]
        
        @property { boolean } [is_internal]
        
        @property { boolean } [is_active]
        
        @property { string } [_id]
        
        @property { string } [name]
        
        @property { string } [owner]
        
        @property { number } [company_id]
        
        @property { string } [token]
        
        @property { Array<ApplicationRedirections> } [redirections]
        
        @property { Array<ApplicationMeta> } [meta]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
        @property { SecureUrl } [banner]
        
        @property { SecureUrl } [logo]
        
        @property { SecureUrl } [favicon]
        
        @property { Array<Domain> } [domains]
        
        @property { string } [app_type]
        
        @property { SecureUrl } [mobile_logo]
        
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
        
        
        @property { string } [mode_of_payment]
        
        @property { string } [source]
        
         
    */
/**
        @typedef StorePriorityRule
        
        
        @property { boolean } [enabled]
        
        @property { Array<string> } [storetype_order]
        
         
    */
/**
        @typedef ArticleAssignmentRule
        
        
        @property { StorePriorityRule } [store_priority]
        
         
    */
/**
        @typedef InventoryArticleAssignment
        
        
        @property { boolean } [post_order_reassignment]
        
        @property { Array<number> } [enforced_stores]
        
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
        
        @property { string } [address_type]
        
         
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
        
        @property { number } [country_code]
        
        @property { string } [phone]
        
         
    */
/**
        @typedef ApplicationInformation
        
        
        @property { InformationAddress } [address]
        
        @property { InformationSupport } [support]
        
        @property { SocialLinks } [social_links]
        
        @property { Links } [links]
        
        @property { string } [copyright_text]
        
        @property { string } [_id]
        
        @property { BusinessHighlights } [business_highlights]
        
        @property { string } [application]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
    */
/**
        @typedef InformationAddress
        
        
        @property { string } [loc]
        
        @property { Array<string> } [address_line]
        
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
        
        @property { GooglePlus } [google_plus]
        
        @property { Youtube } [youtube]
        
        @property { LinkedIn } [linked_in]
        
        @property { Vimeo } [vimeo]
        
        @property { BlogLink } [blog_link]
        
         
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
        
        
        @property { string } [_id]
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [sub_title]
        
         
    */
/**
        @typedef ApplicationDetail
        
        
        @property { string } name
        
        @property { string } description
        
        @property { SecureUrl } logo
        
        @property { SecureUrl } mobile_logo
        
        @property { SecureUrl } favicon
        
        @property { SecureUrl } banner
        
        @property { Domain } [domain]
        
        @property { Array<Domain> } [domains]
        
        @property { string } [_id]
        
         
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
        
        @property { StoreLatLong } [lat_long]
        
        @property { string } [address2]
        
        @property { number } [pincode]
        
        @property { string } [country]
        
        @property { string } [city]
        
         
    */
/**
        @typedef OrderingStore
        
        
        @property { OptedStoreAddress } [address]
        
        @property { string } [_id]
        
        @property { number } [uid]
        
        @property { string } [name]
        
        @property { string } [display_name]
        
        @property { string } [store_type]
        
        @property { string } [store_code]
        
        @property { number } [pincode]
        
        @property { string } [code]
        
         
    */
/**
        @typedef OrderingStores
        
        
        @property { Page } [page]
        
        @property { Array<OrderingStore> } [items]
        
        @property { Array<number> } [deployed_stores]
        
        @property { boolean } [all_stores]
        
        @property { boolean } [enabled]
        
        @property { string } [type]
        
        @property { string } [_id]
        
        @property { string } [app]
        
        @property { number } [__v]
        
         
    */
/**
        @typedef TokenResponse
        
        
        @property { Tokens } [tokens]
        
        @property { string } [_id]
        
        @property { string } [application]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
    */
/**
        @typedef Tokens
        
        
        @property { Firebase } [firebase]
        
        @property { Moengage } [moengage]
        
        @property { Segment } [segment]
        
        @property { Gtm } [gtm]
        
        @property { Freshchat } [freshchat]
        
        @property { Safetynet } [safetynet]
        
        @property { FyndRewards } [fynd_rewards]
        
        @property { Auth } [auth]
        
        @property { GoogleMap } [google_map]
        
         
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
        
        @property { string } [project_id]
        
        @property { string } [gcm_sender_id]
        
        @property { string } [application_id]
        
        @property { string } [api_key]
        
         
    */
/**
        @typedef Ios
        
        
        @property { string } [application_id]
        
        @property { string } [api_key]
        
         
    */
/**
        @typedef Android
        
        
        @property { string } [application_id]
        
        @property { string } [api_key]
        
         
    */
/**
        @typedef Moengage
        
        
        @property { MoengageCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef MoengageCredentials
        
        
        @property { string } [app_id]
        
         
    */
/**
        @typedef Segment
        
        
        @property { SegmentCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef SegmentCredentials
        
        
        @property { string } [write_key]
        
         
    */
/**
        @typedef Gtm
        
        
        @property { GtmCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef GtmCredentials
        
        
        @property { string } [api_key]
        
         
    */
/**
        @typedef Freshchat
        
        
        @property { FreshchatCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef FreshchatCredentials
        
        
        @property { string } [app_id]
        
        @property { string } [app_key]
        
        @property { string } [web_token]
        
         
    */
/**
        @typedef Safetynet
        
        
        @property { SafetynetCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef SafetynetCredentials
        
        
        @property { string } [api_key]
        
         
    */
/**
        @typedef FyndRewards
        
        
        @property { FyndRewardsCredentials } [credentials]
        
         
    */
/**
        @typedef FyndRewardsCredentials
        
        
        @property { string } [public_key]
        
         
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
        
        
        @property { string } [api_key]
        
         
    */
/**
        @typedef Rule
        
        
        @property { number } [max]
        
        @property { number } [value]
        
        @property { number } [key]
        
        @property { number } [min]
        
        @property { number } [discount_qty]
        
         
    */
/**
        @typedef DisplayMetaDict
        
        
        @property { string } [subtitle]
        
        @property { string } [title]
        
         
    */
/**
        @typedef DisplayMeta
        
        
        @property { string } [subtitle]
        
        @property { DisplayMetaDict } [apply]
        
        @property { DisplayMetaDict } [auto]
        
        @property { string } [description]
        
        @property { DisplayMetaDict } [remove]
        
        @property { string } [title]
        
         
    */
/**
        @typedef Identifier
        
        
        @property { Array<number> } [item_id]
        
        @property { Array<number> } [brand_id]
        
        @property { Array<number> } [category_id]
        
        @property { Array<string> } [article_id]
        
        @property { Array<string> } [collection_id]
        
        @property { Array<number> } [store_id]
        
        @property { Array<string> } [user_id]
        
        @property { Array<number> } [company_id]
        
         
    */
/**
        @typedef RuleDefinition
        
        
        @property { string } type
        
        @property { string } value_type
        
        @property { string } calculate_on
        
        @property { boolean } [auto_apply]
        
        @property { string } [currency_code]
        
        @property { boolean } [is_exact]
        
        @property { Array<string> } [scope]
        
        @property { string } applicable_on
        
         
    */
/**
        @typedef Validity
        
        
        @property { number } [priority]
        
         
    */
/**
        @typedef CouponAction
        
        
        @property { string } [txn_mode]
        
        @property { string } [action_date]
        
         
    */
/**
        @typedef CouponSchedule
        
        
        @property { string } [start]
        
        @property { number } [duration]
        
        @property { Array<Object> } [next_schedule]
        
        @property { string } [cron]
        
        @property { string } [end]
        
         
    */
/**
        @typedef Validation
        
        
        @property { string } [user_registered_after]
        
        @property { boolean } [anonymous]
        
        @property { Array<string> } [app_id]
        
         
    */
/**
        @typedef State
        
        
        @property { boolean } [is_display]
        
        @property { boolean } [is_public]
        
        @property { boolean } [is_archived]
        
         
    */
/**
        @typedef PriceRange
        
        
        @property { number } [max]
        
        @property { number } [min]
        
         
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
        
        
        @property { PaymentModes } [wl]
        
        @property { PaymentModes } [nb]
        
        @property { PaymentModes } [upi]
        
        @property { PaymentModes } [qr]
        
        @property { PaymentModes } [ps]
        
        @property { PaymentModes } [pl]
        
        @property { PaymentModes } [card]
        
         
    */
/**
        @typedef BulkBundleRestriction
        
        
        @property { boolean } multi_store_allowed
        
         
    */
/**
        @typedef UsesRemaining
        
        
        @property { number } [user]
        
        @property { number } [total]
        
        @property { number } [app]
        
         
    */
/**
        @typedef UsesRestriction
        
        
        @property { UsesRemaining } [remaining]
        
        @property { UsesRemaining } [maximum]
        
         
    */
/**
        @typedef PostOrder
        
        
        @property { boolean } [cancellation_allowed]
        
        @property { boolean } [return_allowed]
        
         
    */
/**
        @typedef Restrictions
        
        
        @property { PriceRange } [price_range]
        
        @property { PaymentCodes } [payments]
        
        @property { Array<number> } [ordering_stores]
        
        @property { BulkBundleRestriction } [bulk_bundle]
        
        @property { UsesRestriction } [uses]
        
        @property { Array<string> } [platforms]
        
        @property { PostOrder } [post_order]
        
        @property { boolean } [coupon_allowed]
        
         
    */
/**
        @typedef CouponDateMeta
        
        
        @property { string } [modified_on]
        
        @property { string } [created_on]
        
         
    */
/**
        @typedef CouponAuthor
        
        
        @property { string } [modified_by]
        
        @property { string } [created_by]
        
         
    */
/**
        @typedef Ownership
        
        
        @property { string } payable_by
        
        @property { string } payable_category
        
         
    */
/**
        @typedef CouponAdd
        
        
        @property { Array<Rule> } rule
        
        @property { DisplayMeta } display_meta
        
        @property { Identifier } identifiers
        
        @property { RuleDefinition } rule_definition
        
        @property { Validity } validity
        
        @property { CouponAction } [action]
        
        @property { CouponSchedule } [_schedule]
        
        @property { Validation } [validation]
        
        @property { State } [state]
        
        @property { Array<string> } [tags]
        
        @property { string } code
        
        @property { string } type_slug
        
        @property { Restrictions } [restrictions]
        
        @property { CouponDateMeta } [date_meta]
        
        @property { CouponAuthor } [author]
        
        @property { Ownership } ownership
        
         
    */
/**
        @typedef CouponsResponse
        
        
        @property { Page } [page]
        
        @property { CouponAdd } [items]
        
         
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
        
        
        @property { Array<Rule> } rule
        
        @property { DisplayMeta } display_meta
        
        @property { Identifier } identifiers
        
        @property { RuleDefinition } rule_definition
        
        @property { Validity } validity
        
        @property { CouponAction } [action]
        
        @property { CouponSchedule } [_schedule]
        
        @property { Validation } [validation]
        
        @property { State } [state]
        
        @property { Array<string> } [tags]
        
        @property { string } code
        
        @property { string } type_slug
        
        @property { Restrictions } [restrictions]
        
        @property { CouponDateMeta } [date_meta]
        
        @property { CouponAuthor } [author]
        
        @property { Ownership } ownership
        
         
    */
/**
        @typedef CouponPartialUpdate
        
        
        @property { boolean } [archive]
        
        @property { CouponSchedule } [schedule]
        
         
    */
/**
        @typedef StoreMapping
        
        
        @property { string } [enabled]
        
        @property { string } [marketplace_store_id]
        
        @property { number } [store_id]
        
        @property { Object } [meta]
        
         
    */
/**
        @typedef AllChannels
        
        
        @property { boolean } [mkp_name]
        
         
    */
/**
        @typedef MyntraPayload
        
        
        @property { string } [merchant_id]
        
        @property { string } [secret_key]
        
         
    */
/**
        @typedef AmazonPayload
        
        
        @property { string } [seller_id]
        
        @property { string } [mws_auth_token]
        
         
    */
/**
        @typedef FlipkartPayload
        
        
        @property { string } [code]
        
         
    */
/**
        @typedef TatacliqPayload
        
        
        @property { string } [user_name]
        
        @property { string } [password]
        
        @property { string } [merchant_id]
        
         
    */
/**
        @typedef AjioPayload
        
        
        @property { string } [username]
        
        @property { string } [password]
        
        @property { string } [client_ip]
        
         
    */
/**
        @typedef InventorySyncConfig
        
        
        @property { boolean } [inventory]
        
        @property { boolean } [price]
        
         
    */
/**
        @typedef StoreMappingPayload
        
        
        @property { boolean } [store_mapping_enabled]
        
        @property { Array<StoreMapping> } [store_mapping]
        
         
    */
/**
        @typedef StatusPayload
        
        
        @property { boolean } [is_active]
        
         
    */
/**
        @typedef StatusResp
        
        
        @property { boolean } [is_active]
        
         
    */
/**
        @typedef SyncPayload
        
        
        @property { string } [modified_since]
        
         
    */
/**
        @typedef SyncResp
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef MkpResp
        
        
        @property { string } [marketplace]
        
        @property { number } [worker]
        
        @property { string } [worker_assigned]
        
        @property { boolean } [is_active]
        
        @property { boolean } [store_mapping_enabled]
        
        @property { number } [company_id]
        
        @property { Object } [configuration]
        
        @property { Array<StoreMapping> } [store_mapping]
        
         
    */
/**
        @typedef AppUser
        
        
        @property { string } [_id]
        
        @property { boolean } [active]
        
        @property { string } [application_id]
        
        @property { string } [block_reason]
        
        @property { string } [updated_at]
        
        @property { string } [updated_by]
        
        @property { string } [user_id]
        
         
    */
/**
        @typedef E
        
        
        @property { Object } [code]
        
        @property { string } [exception]
        
        @property { string } [info]
        
        @property { string } [message]
        
        @property { string } [request_id]
        
        @property { string } [stack_trace]
        
        @property { number } [status]
        
         
    */
/**
        @typedef Giveaway
        
        
        @property { string } [_id]
        
        @property { Schedule } [_schedule]
        
        @property { boolean } [active]
        
        @property { string } [application_id]
        
        @property { RewardsAudience } [audience]
        
        @property { Asset } [banner_image]
        
        @property { string } [created_at]
        
        @property { string } [description]
        
        @property { RewardsRule } [rule]
        
        @property { string } [title]
        
        @property { string } [updated_at]
        
         
    */
/**
        @typedef GiveawayResponse
        
        
        @property { Array<Giveaway> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef HistoryPretty
        
        
        @property { string } [_id]
        
        @property { string } [application_id]
        
        @property { boolean } [claimed]
        
        @property { string } [created_at]
        
        @property { string } [expires_on]
        
        @property { number } [points]
        
        @property { number } [remaining_points]
        
        @property { string } [text_1]
        
        @property { string } [text_2]
        
        @property { string } [text_3]
        
        @property { string } [txn_name]
        
        @property { string } [updated_at]
        
        @property { string } [user_id]
        
         
    */
/**
        @typedef HistoryRes
        
        
        @property { Array<HistoryPretty> } [items]
        
        @property { Page } [page]
        
        @property { number } [points]
        
         
    */
/**
        @typedef Offer
        
        
        @property { Schedule } [_schedule]
        
        @property { boolean } [active]
        
        @property { string } [application_id]
        
        @property { Asset } [banner_image]
        
        @property { string } [created_at]
        
        @property { string } [name]
        
        @property { Object } [rule]
        
        @property { ShareMessages } [share]
        
        @property { string } [sub_text]
        
        @property { string } [text]
        
        @property { string } [type]
        
        @property { string } [updated_at]
        
        @property { string } [updated_by]
        
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
        
        
        @property { string } [_id]
        
        @property { boolean } [active]
        
        @property { string } [created_at]
        
        @property { Referral } [referral]
        
        @property { number } [uid]
        
        @property { string } [updated_at]
        
        @property { string } [user_block_reason]
        
        @property { string } [user_id]
        
         
    */
/**
        @typedef RewardsAudience
        
        
        @property { string } [header_user_id]
        
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
        
        
        @property { string } [properties_cart_id]
        
        @property { string } [context_traits_first_name]
        
        @property { string } [context_traits_last_name]
        
        @property { string } [context_traits_phone_number]
        
        @property { string } [context_traits_email]
        
        @property { string } [context_app_application_id]
        
        @property { string } [properties_breakup_values_raw_total]
        
        @property { ReceivedAt } [received_at]
        
         
    */
/**
        @typedef AbandonCartsList
        
        
        @property { Array<AbandonCartsDetail> } [items]
        
        @property { string } [cart_total]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef AbandonCartDetail
        
        
        @property { string } [_id]
        
        @property { string } [user_id]
        
        @property { string } [cart_value]
        
        @property { Array<Object> } [articles]
        
        @property { Object } [breakup]
        
        @property { Object } [address]
        
         
    */
/**
        @typedef ExportJobReq
        
        
        @property { string } [marketplace_name]
        
        @property { string } [start_time]
        
        @property { string } [end_time]
        
        @property { string } [event_type]
        
        @property { string } [trace_id]
        
         
    */
/**
        @typedef ExportJobRes
        
        
        @property { string } [status]
        
        @property { string } [job_id]
        
         
    */
/**
        @typedef ExportJobStatusRes
        
        
        @property { string } [status]
        
        @property { string } [job_id]
        
        @property { string } [download_url]
        
         
    */
/**
        @typedef GetLogsListReq
        
        
        @property { string } [marketplace_name]
        
        @property { string } [start_date]
        
        @property { string } [company_id]
        
        @property { string } [end_date]
        
         
    */
/**
        @typedef MkpLogsResp
        
        
        @property { string } [start_time_iso]
        
        @property { string } [end_time_iso]
        
        @property { string } [event_type]
        
        @property { string } [trace_id]
        
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
        
        
        @property { string } [marketplace_name]
        
        @property { string } [start_date]
        
        @property { string } [company_id]
        
        @property { string } [end_date]
        
        @property { string } [identifier]
        
        @property { string } [identifier_value]
        
         
    */
/**
        @typedef LogInfo
        
        
        @property { string } [_id]
        
        @property { string } [status]
        
        @property { string } [event_type]
        
        @property { string } [marketplace_name]
        
        @property { string } [event]
        
        @property { string } [trace_id]
        
        @property { number } [company_id]
        
        @property { number } [brand_id]
        
        @property { string } [store_code]
        
        @property { number } [store_id]
        
        @property { number } [item_id]
        
        @property { string } [article_id]
        
        @property { string } [seller_identifier]
        
         
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
        
        @property { number } company_id
        
        @property { boolean } is_active
        
        @property { Array<string> } app_ids
        
        @property { string } job_type
        
        @property { string } discount_type
        
        @property { string } discount_level
        
        @property { number } [value]
        
        @property { string } [file_path]
        
        @property { Array<number> } [brand_ids]
        
        @property { Array<number> } [store_ids]
        
        @property { ValidityObject } validity
        
         
    */
/**
        @typedef DiscountJob
        
        
        @property { string } _id
        
        @property { string } name
        
        @property { number } company_id
        
        @property { boolean } is_active
        
        @property { Array<string> } [app_ids]
        
        @property { string } [job_type]
        
        @property { string } [discount_type]
        
        @property { string } [discount_level]
        
        @property { number } [value]
        
        @property { string } [file_path]
        
        @property { Array<number> } [brand_ids]
        
        @property { Array<number> } [store_ids]
        
        @property { ValidityObject } validity
        
        @property { string } created_on
        
        @property { string } modified_on
        
        @property { UserDetails } created_by
        
        @property { UserDetails } modified_by
        
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
        
        @property { number } company_id
        
        @property { Object } [body]
        
        @property { string } type
        
        @property { string } file_type
        
         
    */
/**
        @typedef DownloadFileJob
        
        
        @property { Array<number> } [brand_ids]
        
        @property { Array<number> } [store_ids]
        
         
    */
/**
        @typedef CancelJobResponse
        
        
        @property { boolean } success
        
         
    */
/**
        @typedef UserDetails
        
        
        @property { string } username
        
        @property { string } user_id
        
         
    */
/**
        @typedef BadRequestObject
        
        
        @property { string } message
        
         
    */
/**
        @typedef AddProxyReq
        
        
        @property { string } [attached_path]
        
        @property { string } [proxy_url]
        
         
    */
/**
        @typedef AddProxyResponse
        
        
        @property { string } [_id]
        
        @property { string } [attached_path]
        
        @property { string } [proxy_url]
        
        @property { string } [company_id]
        
        @property { string } [application_id]
        
        @property { string } [extension_id]
        
        @property { string } [created_at]
        
        @property { string } [modified_at]
        
         
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
/**
        @typedef EventConfig
        
        
        @property { number } [id]
        
        @property { string } [event_name]
        
        @property { string } [event_type]
        
        @property { string } [version]
        
        @property { string } [display_name]
        
        @property { string } [description]
        
        @property { string } [created_on]
        
         
    */
/**
        @typedef EventConfigList
        
        
        @property { Array<EventConfig> } [items]
        
         
    */
/**
        @typedef SubscriberConfigList
        
        
        @property { Array<SubscriberConfig> } [subscribers]
        
         
    */
/**
        @typedef EventProcessedStatus
        
        
        @property { number } [id]
        
        @property { string } [subscriber_id]
        
        @property { number } [attempt]
        
        @property { string } [response_code]
        
        @property { string } [response_message]
        
        @property { string } [created_on]
        
        @property { string } [processed_on]
        
        @property { boolean } [status]
        
         
    */
/**
        @typedef EventPayload
        
        
        @property { number } [id]
        
        @property { string } [event_trace_id]
        
        @property { number } [event_company_id]
        
        @property { string } [event_application_id]
        
        @property { string } [event_extension_id]
        
        @property { string } [event_name]
        
        @property { boolean } [status]
        
         
    */
/**
        @typedef SubscriberConfig
        
        
        @property { number } [id]
        
        @property { string } [webhook_url]
        
        @property { number } [company_id]
        
        @property { string } [application_id]
        
        @property { string } [extension_id]
        
        @property { string } [status]
        
        @property { Object } [auth_meta]
        
        @property { string } [created_on]
        
        @property { string } [updated_on]
        
        @property { Object } [subscriber_event_mapping]
        
         
    */
/**
        @typedef SubscriberEvent
        
        
        @property { number } [id]
        
        @property { number } [subscriber_id]
        
        @property { number } [event_id]
        
        @property { string } [created_date]
        
         
    */
/**
        @typedef AuthMeta
        
        
        @property { string } [type]
        
        @property { string } [username]
        
        @property { string } [password]
        
         
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
      * @param {number} [arg.pageNo] -
      * @param {number} [arg.pageSize] -
      
      **/
    getSystemNotifications({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get system notifications
      * @description: Get system notifications
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageSize] -
      
      **/
    getSystemNotificationsPaginator({ pageSize }?: {
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
      * @summary: Get gender attribute details
      * @description: This API allows to view the gender attribute details.
      * @param {Object} arg - arg object.
      * @param {string} arg.attributeSlug - slug of the attribute for which you want to view the genders
      
      **/
    getGenderAttribute({ attributeSlug }?: {
        attributeSlug: string;
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
     * @summary: Add Inventory for particular size and store.
     * @description: This API allows add Inventory for particular size and store.
     * @param {Object} arg - arg object.
     * @param {number} arg.itemId - Item of the company associated to product that is to be viewed.
     * @param {string} arg.size - Size in which inventory is to be added.
     * @param {InventoryRequest1} arg.body
     **/
    addInventory({ itemId, size, body }?: {
        itemId: number;
        size: string;
        body: InventoryRequest1;
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
      * @summary: Get Inventory export history.
      * @description: This API helps to get Inventory export history.
      * @param {Object} arg - arg object.
      
      **/
    getInventoryExport({}?: any): any;
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
      * @summary: Get List of different filters for inventory export
      * @description: This API allows get List of different filters like brand, store, and type for inventory export.
      * @param {Object} arg - arg object.
      * @param {string} [arg.filterType] - filter type from any one of ['brand', 'store', 'type']
      
      **/
    exportInventoryConfig({ filterType }?: {
        filterType?: string;
    }): any;
    /**
      *
      * @summary: Hsn Code List.
      * @description: Hsn Code List.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - page no
      * @param {number} [arg.pageSize] - page size
      * @param {string} [arg.q] - search using hsn code.
      
      **/
    getAllHsnCodes({ pageNo, pageSize, q }?: {
        pageNo?: number;
        pageSize?: number;
        q?: string;
    }): any;
    /**
     *
     * @summary: Create Hsn Code.
     * @description: Create Hsn Code.
     * @param {Object} arg - arg object.
     * @param {HsnUpsert} arg.body
     **/
    createHsnCode({ body }?: {
        body: HsnUpsert;
    }): any;
    /**
      *
      * @summary: Fetch Hsn Code.
      * @description: Fetch Hsn Code.
      * @param {Object} arg - arg object.
      * @param {string} arg.id - id
      
      **/
    getHsnCode({ id }?: {
        id: string;
    }): any;
    /**
     *
     * @summary: Update Hsn Code.
     * @description: Update Hsn Code.
     * @param {Object} arg - arg object.
     * @param {string} arg.id - id
     * @param {HsnUpsert} arg.body
     **/
    updateHsnCode({ id, body }?: {
        id: string;
        body: HsnUpsert;
    }): any;
    /**
     *
     * @summary: Bulk Create or Update Hsn Code.
     * @description: Bulk Create or Update Hsn Code.
     * @param {Object} arg - arg object.
     * @param {BulkHsnUpsert} arg.body
     **/
    bulkHsnCode({ body }?: {
        body: BulkHsnUpsert;
    }): any;
}
declare class CompanyProfile {
    constructor(config: any);
    config: any;
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
      * @summary: Get company profile
      * @description: This API allows to view the company profile of the seller account.
      * @param {Object} arg - arg object.
      
      **/
    cbsOnboardGet({}?: any): any;
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
    createCompanyBrandMapping({ body }?: {
        body: CompanyBrandPostRequestSerializer;
    }): any;
    /**
      *
      * @summary: Get brands associated to a company
      * @description: This API helps to get view brands associated to a particular company.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
      
      **/
    getBrands({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get brands associated to a company
      * @description: This API helps to get view brands associated to a particular company.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
      
      **/
    getBrandsPaginator({ pageSize }?: {
        pageSize?: number;
    }): Paginator;
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
      * @summary: Get list of locations
      * @description: This API allows to view all the locations asscoiated to a company.
      * @param {Object} arg - arg object.
      * @param {string} [arg.storeType] - Helps to sort the location list on the basis of location type.
      * @param {string} [arg.q] - Query that is to be searched.
      * @param {string} [arg.stage] - to filter companies on basis of verified or unverified companies.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
      
      **/
    getLocationsPaginator({ storeType, q, stage, pageSize }?: {
        storeType?: string;
        q?: string;
        stage?: string;
        pageSize?: number;
    }): Paginator;
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
      * @param {number} [arg.pageNo] - page no
      
      **/
    browse({ namespace, pageNo }?: {
        namespace: string;
        pageNo?: number;
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
declare class Inventory {
    constructor(config: any);
    config: any;
    /**
      *
      * @summary: Get Job Configs For A Company
      * @description: REST Endpoint that returns all job configs for a company
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - Page Number
      * @param {number} [arg.pageSize] - Page Size
      
      **/
    getJobsByCompany({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
     *
     * @summary: Updates An Existing Job Config
     * @description: REST Endpoint that updates a job config
     * @param {Object} arg - arg object.
     * @param {string} [arg.xUserData] -
     * @param {JobConfigDTO} arg.body
     **/
    updateJob({ body, xUserData }?: {
        xUserData?: string;
        body: JobConfigDTO;
    }): any;
    /**
     *
     * @summary: Creates A New Job Config
     * @description: REST Endpoint that creates a new job config
     * @param {Object} arg - arg object.
     * @param {string} [arg.xUserData] -
     * @param {JobConfigDTO} arg.body
     **/
    createJob({ body, xUserData }?: {
        xUserData?: string;
        body: JobConfigDTO;
    }): any;
    /**
      *
      * @summary: Get Job Configs By Company And Integration
      * @description: REST Endpoint that returns all job configs by company And integration
      * @param {Object} arg - arg object.
      * @param {string} arg.integrationId - Integration Id
      * @param {number} [arg.pageNo] - Page Number
      * @param {number} [arg.pageSize] - Page Size
      
      **/
    getJobByCompanyAndIntegration({ integrationId, pageNo, pageSize }?: {
        integrationId: string;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get Job Configs Defaults
      * @description: REST Endpoint that returns default fields job configs by company And integration
      * @param {Object} arg - arg object.
      
      **/
    getJobConfigDefaults({}?: any): any;
    /**
      *
      * @summary: Get Job Config By Code
      * @description: REST Endpoint that returns job config by code
      * @param {Object} arg - arg object.
      * @param {string} arg.code - Job Code
      
      **/
    getJobByCode({ code }?: {
        code: string;
    }): any;
    /**
      *
      * @summary: Get Job Codes By Company And Integration
      * @description: REST Endpoint that returns all job codes by company And integration
      * @param {Object} arg - arg object.
      * @param {string} arg.integrationId - Integration Id
      * @param {number} [arg.pageNo] - Page Number
      * @param {number} [arg.pageSize] - Page Size
      
      **/
    getJobCodesByCompanyAndIntegration({ integrationId, pageNo, pageSize }?: {
        integrationId: string;
        pageNo?: number;
        pageSize?: number;
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
      * @param {boolean} [arg.opted] - Filter on opted stores
      * @param {boolean} [arg.checkPermission] - Filter on if permissions are present
      
      **/
    getIntegrationLevelConfig({ id, level, opted, checkPermission }?: {
        id: string;
        level: string;
        opted?: boolean;
        checkPermission?: boolean;
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
      * @param {number} [arg.pageNo] - Current page no
      * @param {number} [arg.pageSize] - Current request items count
      
      **/
    getOtherSellerApplications({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get other seller applications
      * @description: Get other seller applications who has opted current company as inventory
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageSize] - Current request items count
      
      **/
    getOtherSellerApplicationsPaginator({ pageSize }?: {
        pageSize?: number;
    }): Paginator;
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
      * @summary: Get registered marketplace channel credential configuration for a seller
      * @description: Get registered marketplace channel credentials configuration for a seller
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
     * @param {number} [arg.pageNo] - Current page number
     * @param {number} [arg.pageSize] - Current page size
     * @param {GetLogsListReq} arg.body
     **/
    getLogsList({ logType, body, pageNo, pageSize }?: {
        logType: string;
        pageNo?: number;
        pageSize?: number;
        body: GetLogsListReq;
    }): any;
    /**
     *
     * @summary: Get logs list
     * @description: Get logs list
     * @param {Object} arg - arg object.
     * @param {string} arg.logType - Log type
     * @param {number} [arg.pageSize] - Current page size
     * @param {GetLogsListReq} arg.body
     **/
    getLogsListPaginator({ logType, pageSize, body }?: {
        logType: string;
        pageSize?: number;
        body: GetLogsListReq;
    }): Paginator;
    /**
     *
     * @summary: Search logs
     * @description: Search logs
     * @param {Object} arg - arg object.
     * @param {number} [arg.pageNo] - Current page number
     * @param {number} [arg.pageSize] - Current page size
     * @param {string} arg.logType - Log type
     * @param {SearchLogReq} arg.body
     **/
    searchLogs({ logType, body, pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
        logType: string;
        body: SearchLogReq;
    }): any;
    /**
     *
     * @summary: Search logs
     * @description: Search logs
     * @param {Object} arg - arg object.
     * @param {number} [arg.pageSize] - Current page size
     * @param {string} arg.logType - Log type
     * @param {SearchLogReq} arg.body
     **/
    searchLogsPaginator({ pageSize, logType, body }?: {
        pageSize?: number;
        logType: string;
        body: SearchLogReq;
    }): Paginator;
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
declare class Webhook {
    constructor(config: any);
    config: any;
    /**
      *
      * @summary: Get Subscribers By Company And Event
      * @description: Get Subscribers By Company And Event
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - Page Number
      * @param {number} [arg.pageSize] - Page Size
      * @param {number} arg.eventId - Event Id of the application
      
      **/
    getSubscribersByCompanyAndEventId({ eventId, pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
        eventId: number;
    }): any;
    /**
     *
     * @summary: Register Subscriber
     * @description: Register Subscriber
     * @param {Object} arg - arg object.
     * @param {SubscriberConfig} arg.body
     **/
    registerSubscriberToEvent({ body }?: {
        body: SubscriberConfig;
    }): any;
    /**
     *
     * @summary: Update Subscriber
     * @description: Update Subscriber
     * @param {Object} arg - arg object.
     * @param {SubscriberConfig} arg.body
     **/
    updateSubscriberConfig({ body }?: {
        body: SubscriberConfig;
    }): any;
}
import PlatformApplicationClient = require("./PlatformApplicationClient");
type TicketList = {
    items?: Array<Ticket>;
    filters?: Filter;
    page?: Page;
};
type Page = {
    item_total?: number;
    next_id?: string;
    has_previous?: boolean;
    has_next?: boolean;
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
    header_image?: string;
    should_notify?: boolean;
    success_message?: string;
    poll_for_assignment?: PollForAssignment;
};
type EditCustomFormPayload = {
    title: string;
    inputs: Array<any>;
    description?: string;
    header_image?: string;
    should_notify?: boolean;
    login_required?: boolean;
    success_message?: string;
    poll_for_assignment?: PollForAssignment;
};
type EditTicketPayload = {
    content?: TicketContent;
    category?: string;
    sub_category?: string;
    source?: string;
    status?: string;
    priority?: string;
    assigned_to?: AgentChangePayload;
    tags?: Array<string>;
};
type AgentChangePayload = {
    agent_id: string;
};
type CreateVideoRoomResponse = {
    unique_name: string;
};
type CloseVideoRoomResponse = {
    success: boolean;
};
type CreateVideoRoomPayload = {
    unique_name: string;
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
    access_token: string;
};
type GetParticipantsInsideVideoRoomResponse = {
    participants: Array<Participant>;
};
type Participant = {
    user?: UserSchema;
    identity?: string;
    status?: string;
};
type PhoneNumber = {
    active?: boolean;
    primary?: boolean;
    verified?: boolean;
    phone?: string;
    country_code?: number;
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
    application_id?: string;
    company_id: string;
};
type CreatedOn = {
    user_agent: string;
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
    created_by?: any;
    status?: string;
    priority?: string;
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
    sub_categories?: Array<TicketSubCategory>;
};
type TicketSubCategory = {
    key: string;
    display: string;
};
type SubmitButton = {
    title: string;
    title_color: string;
    background_color: string;
};
type PollForAssignment = {
    duration: number;
    message: string;
    success_message: string;
    failure_message: string;
};
type CustomForm = {
    application_id: string;
    slug: string;
    header_image?: string;
    title: string;
    description?: string;
    login_required: boolean;
    should_notify: boolean;
    success_message?: string;
    submit_button?: SubmitButton;
    inputs: Array<any>;
    created_on?: CreatedOn;
    created_by?: any;
    poll_for_assignment?: PollForAssignment;
    _id: string;
};
type TicketHistory = {
    type: string;
    value: any;
    ticket_id: string;
    created_on?: CreatedOn;
    created_by?: any;
    _id: string;
    updated_at?: string;
    created_at?: string;
};
type Ticket = {
    context?: TicketContext;
    created_on?: CreatedOn;
    response_id?: string;
    content?: TicketContent;
    ticket_id: string;
    category: TicketCategory;
    sub_category?: TicketSubCategory;
    source: string;
    status: Status;
    priority: Priority;
    created_by?: any;
    assigned_to?: any;
    tags?: Array<string>;
    _custom_json?: any;
    _id?: string;
    updated_at?: string;
    created_at?: string;
};
type Activity = {
    current_state?: any;
    document_id?: string;
    previous_state?: any;
};
type ActivityDump = {
    activity?: Activity;
    created_by?: CreatedBy;
    date_meta?: DateMeta;
    id?: string;
    type?: string;
};
type AddMediaListRequest = {
    entity_id?: string;
    entity_type?: string;
    media_list?: Array<AddMediaRequest>;
    ref_id?: string;
    ref_type?: string;
};
type AddMediaRequest = {
    cloud_id?: string;
    cloud_name?: string;
    cloud_provider?: string;
    entity_id?: string;
    entity_type?: string;
    media_url?: string;
    ref_id?: string;
    ref_type?: string;
    tags?: Array<string>;
    thumbnail_url?: string;
    type?: string;
};
type ApproveRequest = {
    approve?: boolean;
    entity_type?: string;
    id: string;
    reason?: string;
};
type Attribute = {
    date_meta?: DateMeta;
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
    created_on?: string;
    modified_on?: string;
};
type DeviceMeta = {
    app_version?: string;
    platform?: string;
};
type Entity = {
    id?: string;
    type?: string;
};
type EntityRequest = {
    entity_id?: string;
    entity_type?: string;
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
    request_id?: string;
    stack_trace?: string;
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
    max_count?: number;
    size?: number;
    type?: string;
};
type MediaMetaRequest = {
    max_count: number;
    size: number;
};
type NumberGetResponse = {
    items?: Array<any>;
    page?: Page;
};
type PageCursor = {
    current?: number;
    has_next?: boolean;
    has_previous?: boolean;
    item_total?: number;
    next_id?: string;
    size: number;
    type: string;
};
type PageNumber = {
    current?: number;
    has_next?: boolean;
    item_total?: number;
    size?: number;
    type?: string;
};
type Rating = {
    attributes?: Array<Attribute>;
    attributes_slugs?: Array<string>;
    ui?: UI;
};
type RatingRequest = {
    attributes: Array<string>;
    ui?: UI;
};
type ReportAbuseRequest = {
    description?: string;
    entity_id: string;
    entity_type: string;
};
type Review = {
    description?: string;
    header?: string;
    image_meta?: MediaMeta;
    title?: string;
    video_meta?: MediaMeta;
    vote_allowed?: boolean;
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
    image_meta: MediaMetaRequest;
    is_vote_allowed: boolean;
    title: string;
    video_meta: MediaMetaRequest;
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
    date_meta?: DateMeta;
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
    enable_media_type?: string;
    enable_qna?: boolean;
    enable_rating: boolean;
    enable_review: boolean;
    entity: EntityRequest;
    rating: RatingRequest;
    review: ReviewRequest;
};
type TemplateRequestList = {
    template_list: Array<TemplateRequest>;
};
type UI = {
    feedback_question?: Array<string>;
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
    attributes_rating?: Array<AttributeObject>;
    description?: string;
    device_meta?: DeviceMeta;
    entity_id?: string;
    entity_type?: string;
    media_resource?: Array<MediaMeta>;
    rating?: number;
    review_id?: string;
    template_id?: string;
    title?: string;
};
type UpdateTemplateRequest = {
    active: boolean;
    enable_media_type?: string;
    enable_qna?: boolean;
    enable_rating: boolean;
    enable_review: boolean;
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
    item_total?: number;
    has_next?: boolean;
    type?: string;
    current?: number;
};
type ThemesListingResponseSchema = {
    items?: Array<ThemesSchema>;
    page?: PaginationSchema;
};
type AddThemeRequestSchema = {
    theme_id?: string;
};
type UpgradableThemeSchema = {
    parent_theme?: string;
    applied_theme?: string;
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
    last_modified?: string;
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
    created_at?: string;
    updated_at?: string;
    version?: string;
    parent_theme_version?: string;
    parent_theme?: string;
    information?: Information;
    tags?: Array<string>;
    src?: Src;
    assets?: AssetsSchema;
    available_pages?: AvailablePages;
    available_sections?: Array<availableSectionSchema>;
    sections?: Array<sectionSchema>;
    constants?: any;
    styles?: any;
    config?: Config;
    settings?: any;
    font?: Font;
    _id?: string;
    __v?: number;
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
    page_key?: string;
    page_sections?: PageSections;
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
    umd_js?: UmdJs;
    common_js?: CommonJs;
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
    global_schema?: GlobalSchema;
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
    bg_color?: string;
    primary_color?: string;
    secondary_color?: string;
    accent_color?: string;
    link_color?: string;
    button_secondary_color?: string;
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
    semi_bold?: SemiBold;
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
    exact_url?: string;
    query?: any;
};
type EditEmailRequestSchema = {
    email?: string;
};
type SendVerificationLinkMobileRequestSchema = {
    verified?: boolean;
    active?: boolean;
    country_code?: string;
    phone?: string;
    primary?: boolean;
};
type EditMobileRequestSchema = {
    country_code?: string;
    phone?: string;
};
type EditProfileRequestSchema = {
    first_name?: string;
    last_name?: string;
    mobile?: string;
    email?: string;
    gender?: string;
    dob?: string;
    profile_pic_url?: string;
    android_hash?: string;
    sender?: string;
    register_token?: string;
};
type SendEmailOtpRequestSchema = {
    email?: string;
    action?: string;
    token?: string;
    register_token?: string;
};
type VerifyEmailOtpRequestSchema = {
    email?: string;
    action?: string;
    register_token?: string;
    otp?: string;
};
type VerifyOtpRequestSchema = {
    request_id?: string;
    register_token?: string;
    otp?: string;
};
type SendMobileOtpRequestSchema = {
    mobile?: string;
    country_code?: string;
    action?: string;
    token?: string;
    android_hash?: string;
    force?: string;
    captcha_code?: string;
};
type UpdatePasswordRequestSchema = {
    old_password?: string;
    new_password?: string;
};
type FormRegisterRequestSchema = {
    first_name?: string;
    last_name?: string;
    gender?: string;
    email?: string;
    password?: string;
    phone?: FormRegisterRequestSchemaPhone;
    register_token?: string;
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
    captcha_code?: string;
};
type PasswordLoginRequestSchema = {
    captcha_code?: string;
    password?: string;
    username?: string;
};
type SendOtpRequestSchema = {
    country_code?: string;
    captcha_code?: string;
    mobile?: string;
};
type OAuthRequestSchema = {
    is_signed_in?: boolean;
    oauth2?: OAuthRequestSchemaOauth2;
    profile?: OAuthRequestSchemaProfile;
};
type UserObjectSchema = {
    user?: UserSchema;
};
type AuthSuccess = {
    register_token?: string;
    user_exists?: boolean;
    user?: UserSchema;
};
type SendOtpResponse = {
    resend_timer?: number;
    resend_token?: string;
    success?: boolean;
    request_id?: string;
    message?: string;
    mobile?: string;
    country_code?: string;
    email?: string;
    resend_email_token?: string;
    register_token?: string;
    verify_email_otp?: boolean;
    verify_mobile_otp?: boolean;
    user_exists?: boolean;
};
type LoginSuccess = {
    user?: UserSchema;
    request_id?: string;
    register_token?: string;
};
type VerifyOtpSuccess = {
    user?: UserSchema;
    user_exists?: boolean;
};
type ResetPasswordSuccess = {
    status?: string;
};
type RegisterFormSuccess = {
    email?: string;
    resend_timer?: number;
    resend_token?: string;
    resend_email_token?: string;
    register_token?: string;
    success?: boolean;
    request_id?: string;
    message?: string;
    mobile?: string;
    country_code?: string;
    verify_email_otp?: boolean;
    verify_mobile_otp?: boolean;
    user_exists?: boolean;
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
    resend_timer?: number;
    resend_token?: string;
    register_token?: string;
    success?: boolean;
    request_id?: string;
    message?: string;
    mobile?: string;
    country_code?: string;
};
type EmailOtpSuccess = {
    resend_token?: string;
    register_token?: string;
};
type SessionListSuccess = {
    sessions?: Array<string>;
};
type VerifyMobileOTPSuccess = {
    user?: UserSchema;
    verify_mobile_link?: boolean;
};
type VerifyEmailOTPSuccess = {
    user?: UserSchema;
    verify_email_link?: boolean;
};
type SendMobileVerifyLinkSuccess = {
    verify_mobile_link?: boolean;
};
type SendEmailVerifyLinkSuccess = {
    verify_email_link?: boolean;
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
    verify_email_otp?: boolean;
    verify_email_link?: boolean;
    verify_mobile_otp?: boolean;
    user?: string;
    register_token?: string;
    user_exists?: boolean;
};
type FormRegisterRequestSchemaPhone = {
    country_code?: string;
    mobile?: string;
};
type OAuthRequestSchemaOauth2 = {
    access_token?: string;
    expiry?: number;
    refresh_token?: string;
};
type OAuthRequestSchemaProfile = {
    last_name?: string;
    image?: string;
    id?: string;
    email?: string;
    full_name?: string;
    first_name?: string;
};
type AuthSuccessUser = {
    first_name?: string;
    last_name?: string;
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
    look_and_feel?: LookAndFeel;
    updated_at?: string;
    active?: boolean;
    forgot_password?: boolean;
    login?: Login;
    skip_captcha?: boolean;
    name?: string;
    meta?: MetaSchema;
    _id?: string;
    social?: Social;
    required_fields?: RequiredFields;
    register_required_fields?: RegisterRequiredFields;
    skip_login?: boolean;
    flash_card?: FlashCard;
    subtext?: string;
    social_tokens?: SocialTokens;
    created_at?: string;
    register?: boolean;
    mobile_image?: string;
    desktop_image?: string;
};
type LookAndFeel = {
    card_position?: string;
    background_color?: string;
};
type Login = {
    password?: boolean;
    otp?: boolean;
};
type MetaSchema = {
    fynd_default?: boolean;
};
type Social = {
    account_kit?: boolean;
    facebook?: boolean;
    google?: boolean;
};
type RequiredFields = {
    email?: Email;
    mobile?: Mobile;
};
type Mobile = {
    is_required?: boolean;
    level?: string;
};
type RegisterRequiredFields = {
    email?: RegisterRequiredFieldsEmail;
    mobile?: RegisterRequiredFieldsMobile;
};
type RegisterRequiredFieldsEmail = {
    is_required?: boolean;
    level?: string;
};
type RegisterRequiredFieldsMobile = {
    is_required?: boolean;
    level?: string;
};
type FlashCard = {
    text?: string;
    text_color?: string;
    background_color?: string;
};
type SocialTokens = {
    facebook?: Facebook;
    account_kit?: Accountkit;
    google?: Google;
};
type Facebook = {
    app_id?: string;
};
type Accountkit = {
    app_id?: string;
};
type Google = {
    app_id?: string;
};
type UserSchema = {
    first_name?: string;
    last_name?: string;
    phone_numbers?: Array<PhoneNumber>;
    emails?: Array<Email>;
    gender?: string;
    dob?: string;
    active?: boolean;
    profile_pic_url?: string;
    username?: string;
    account_type?: string;
    uid?: string;
    debug?: Debug;
    has_old_password_hash?: boolean;
    _id?: string;
    created_at?: string;
    updated_at?: string;
};
type ApplicationLegal = {
    application?: string;
    tnc?: string;
    policy?: string;
    shipping?: string;
    faq?: Array<ApplicationLegalFAQ>;
    _id?: string;
    updated_at?: string;
    created_at?: string;
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
    _id?: string;
    robots_txt?: string;
    sitemap_enabled?: boolean;
    custom_meta_tags?: Array<any>;
    details?: Detail;
    created_at?: string;
    updated_at?: string;
};
type CustomMetaTag = {
    name?: string;
    content?: string;
    _id?: string;
};
type Detail = {
    title?: string;
    description?: string;
};
type StorefrontAnnouncement = {
    announcements?: AnnouncementSchema;
    refresh_rate?: number;
    refresh_pages?: Array<string>;
};
type AnnouncementPageSchema = {
    page_slug?: string;
    type?: string;
};
type EditorMeta = {
    foreground_color?: string;
    background_color?: string;
    content_type?: string;
    content?: string;
};
type AnnouncementAuthorSchema = {
    created_by?: string;
    modified_by?: string;
};
type AdminAnnouncementSchema = {
    _id?: string;
    platforms?: Array<string>;
    title?: string;
    announcement?: string;
    pages?: Array<AnnouncementPageSchema>;
    editor_meta?: EditorMeta;
    author?: AnnouncementAuthorSchema;
    created_at?: string;
    app?: string;
    modified_at?: string;
    _schedule?: ScheduleSchema;
};
type ScheduleSchema = {
    cron?: string;
    start?: string;
    end?: string;
    duration?: number;
    next_schedule?: Array<any>;
};
type NextSchedule = {
    start?: string;
    end?: string;
};
type AnnouncementSchema = {
    page_slug?: Array<any>;
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
    aspect_ratio?: string;
    id?: string;
    secure_url?: string;
};
type Author = {
    designation?: string;
    id?: string;
    name?: string;
};
type BlogSchema = {
    _id?: string;
    _custom_json?: any;
    application?: string;
    archived?: boolean;
    author?: Author;
    content?: Array<ResourceContent>;
    feature_image?: Asset;
    published?: boolean;
    reading_time?: string;
    slug?: string;
    tags?: Array<string>;
    seo?: SEO;
    _schedule?: CronSchedule;
    title?: string;
    date_meta?: DateMeta;
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
    _custom_json?: any;
    author?: Author;
    content?: Array<ResourceContent>;
    feature_image?: Asset;
    published?: boolean;
    reading_time?: string;
    slug?: string;
    tags?: Array<string>;
    title?: string;
    seo?: SEO;
    _schedule?: CronSchedule;
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
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    _id?: string;
    position?: string;
    application?: string;
    platform?: string;
    navigation?: NavigationReference;
};
type LocaleLanguage = {
    hi?: Language;
    ar?: Language;
    en_us?: Language;
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
    _locale_language?: LocaleLanguage;
    image?: string;
    type?: string;
    action?: Action;
    active?: boolean;
    display?: string;
    sort_order?: number;
    sub_navigation?: NavigationReference;
};
type LandingPage = {
    data?: LandingPageSchema;
    success?: boolean;
};
type ConfigurationSchema = {
    sleep_time?: number;
    start_on_launch?: boolean;
    duration?: number;
    slide_direction?: string;
};
type SlideshowMedia = {
    type?: string;
    url?: string;
    bg_color?: string;
    duration?: number;
    auto_decide_duration?: boolean;
    action?: Action;
};
type Slideshow = {
    data?: SlideshowSchema;
    success?: boolean;
};
type AnnouncementsResponseSchema = {
    announcements?: any;
    refresh_rate?: number;
    refresh_pages?: Array<string>;
};
type AnnouncementDataSchema = {
    page_slug?: string;
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
    sub_type?: string;
    content?: string;
};
type RemoveHandpickedSchema = {
    tags?: Array<string>;
};
type CreateTagSchema = {
    name?: string;
    sub_type?: string;
    _id?: string;
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
    request_id?: string;
    stack_trace?: string;
    meta?: any;
};
type CategorySchema = {
    index?: number;
    _id?: string;
    slug?: string;
    title?: string;
    application?: string;
};
type ChildrenSchema = {
    question?: string;
    answer?: string;
    slug?: string;
    application?: string;
    _id?: string;
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
    _id?: string;
    slug?: string;
    application?: string;
    icon_url?: string;
    _custom_json?: any;
};
type FaqSchema = {
    slug?: string;
    application?: string;
    _id?: string;
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
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    _id?: string;
    application?: string;
    archived?: boolean;
    _custom_json?: any;
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
    _id?: string;
    application?: string;
    archived?: boolean;
    name?: string;
    slug?: string;
    platform?: Array<string>;
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
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
    _id?: string;
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
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    _schedule?: ScheduleSchema;
};
type ContentSchema = {
    type?: string;
    value?: string;
};
type CustomPage = {
    data?: CustomPageSchema;
};
type CustomBlogSchema = {
    _id?: string;
    title?: string;
    slug?: string;
    reading_time?: string;
    application?: string;
    description?: string;
    feature_image?: FeatureImage;
    published?: boolean;
    archived?: boolean;
    tags?: Array<string>;
    content?: ContentSchema;
    author?: Author;
    _schedule?: ScheduleSchema;
    created_at?: string;
    updated_at?: string;
    _custom_json?: any;
};
type FeatureImage = {
    secure_url?: string;
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
    page_type?: string;
    display_name?: string;
    params?: Array<PageSpecParam>;
    query?: Array<PageSpecParam>;
};
type PageSchema = {
    _id?: string;
    application?: string;
    component_ids?: Array<string>;
    content?: Array<PageContent>;
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    description?: string;
    feature_image?: Asset;
    page_meta?: Array<PageMeta>;
    _schedule?: ScheduleSchema;
    _custom_json?: any;
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
    _schedule?: CronSchedule;
    application?: string;
    author?: Author;
    _custom_json?: any;
    orientation?: string;
    content?: Array<ResourceContent>;
    feature_image?: Asset;
    published?: boolean;
    reading_time?: string;
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
    system_pages?: Array<any>;
    custom_pages?: Array<any>;
    application_id?: string;
};
type SlideshowGetResponse = {
    items?: Array<any>;
    page?: Page;
};
type SlideshowSchema = {
    _id?: string;
    slug?: string;
    date_meta?: DateMeta;
    application?: string;
    platform?: string;
    configuration?: ConfigurationSchema;
    media?: Array<SlideshowMedia>;
    active?: boolean;
    archived?: boolean;
    _custom_json?: any;
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
    _id?: string;
    config_type?: string;
    application?: string;
    created_at?: string;
    updated_at?: string;
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
    _id?: string;
    tags?: Array<TagSchema>;
};
type TagSchema = {
    name?: string;
    url?: string;
    type?: string;
    sub_type?: string;
    _id?: string;
    position?: string;
    attributes?: any;
    content?: string;
};
type ErrorResponseSchema = {
    message?: string;
    code?: number;
};
type Success = {
    message?: string;
};
type CreatedModifiedByObject = {
    username?: string;
    user_id?: string;
};
type PickupPointResponse = {
    items?: Array<ItemProperties>;
    page?: Page;
};
type PickupPointSchema = {
    notification_emails?: Array<string>;
    name?: string;
    is_active?: boolean;
    code?: string;
    address?: AddressObject;
    additional_contacts?: AdditionalContactsObject;
    timing?: Array<AdditionalContactsObject>;
    created_by?: CreatedModifiedByObject;
    modified_by?: TimingObject;
    created_on?: string;
    modified_on?: string;
};
type ItemProperties = {
    notification_emails?: Array<string>;
    name?: string;
    is_active?: boolean;
    code?: string;
    address?: AddressObject;
    additional_contacts?: AdditionalContactsObject;
    timing?: Array<AdditionalContactsObject>;
    created_by?: CreatedModifiedByObject;
    modified_by?: TimingObject;
    created_on?: string;
    modified_on?: string;
};
type AddressObject = {
    address1?: string;
    city?: string;
    state?: string;
    pincode?: number;
    country?: string;
    country_code?: string;
};
type AdditionalContactsObject = {
    number?: number;
    country_code?: number;
};
type TimingObject = {
    opening?: OpeningClosingObject;
    closing?: OpeningClosingObject;
    open?: boolean;
    weekday?: string;
};
type OpeningClosingObject = {
    hour?: string;
    minute?: string;
};
type PickupResponse = {
    items?: Array<PickupResponseItems>;
    page?: Page;
};
type PickupConfiguration = {
    datetime_check?: boolean;
    header?: string;
    instruction_for_customer?: string;
};
type PickupResponseItems = {
    datetime_check?: boolean;
    header?: string;
    instruction_for_customer?: string;
    app_id?: string;
};
type ShippingSchema = {
    assignment?: AssignmentSchema;
    _id?: string;
    app_id?: string;
};
type ShippingResponse = {
    data?: ShippingSchema;
    message?: string;
};
type AssignmentSchema = {
    fulfillment_priority?: FulfillmentPriorityObject;
    default_sort_strategy?: string;
};
type FulfillmentPriorityObject = {
    priorities?: string;
    enabled?: boolean;
};
type StoreSchema = {
    assignment?: StoreAssignmentObject;
    _id?: string;
};
type StoreResponse = {
    data?: StoreSchema;
    message?: string;
};
type StoreAssignmentObject = {
    strategy?: StrategyObject;
    assignment_type?: string;
};
type StrategyObject = {
    rules?: Array<StrategyItems>;
};
type StrategyItems = {
    product_tags?: Array<string>;
    zone?: string;
};
type StoreListResponse = {
    items?: Array<any>;
    page?: Page;
};
type ZoneSchema = {
    zone_detail?: ZoneDetailsObject;
    _id?: string;
};
type ZoneListResponse = {
    items?: Array<ZoneSchema>;
    page?: Page;
};
type RegionObject = {
    country?: string;
    state?: string;
};
type PincodeObject = {
    pincode_list?: Array<number>;
};
type RadiusObject = {
    value?: number;
};
type ZoneDetailsObject = {
    radius?: RadiusObject;
    pincode?: PincodeObject;
    region?: RegionObject;
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
    interval_count?: number;
};
type Plan = {
    recurring?: PlanRecurring;
    is_trial_plan?: boolean;
    plan_group?: string;
    tag_lines?: Array<string>;
    currency?: string;
    is_active?: boolean;
    is_visible?: boolean;
    trial_period?: number;
    addons?: Array<string>;
    tags?: Array<string>;
    type?: string;
    country?: string;
    _id?: string;
    name?: string;
    description?: string;
    amount?: number;
    product_suite_id?: string;
    created_at?: string;
    modified_at?: string;
};
type DetailedPlanComponents = {
    name?: string;
    slug?: string;
    description?: string;
    group?: string;
    icon?: string;
    links?: any;
    enabled?: boolean;
    display_text?: string;
};
type DetailedPlan = {
    recurring?: PlanRecurring;
    is_trial_plan?: boolean;
    plan_group?: string;
    tag_lines?: Array<string>;
    currency?: string;
    is_active?: boolean;
    is_visible?: boolean;
    trial_period?: number;
    addons?: Array<string>;
    tags?: Array<string>;
    type?: string;
    country?: string;
    _id?: string;
    name?: string;
    description?: string;
    amount?: number;
    product_suite_id?: string;
    created_at?: string;
    modified_at?: string;
    components?: Array<DetailedPlanComponents>;
};
type InvoiceDetailsPeriod = {
    start?: string;
    end?: string;
};
type InvoiceDetailsClient = {
    address_lines?: Array<string>;
    name?: string;
    email?: string;
    phone?: string;
};
type InvoiceDetailsStatusTrail = {
    _id?: string;
    value?: string;
    timestamp?: string;
};
type InvoiceDetailsPaymentMethodsDataChecks = {
    cvc_check?: string;
    address_line1_check?: string;
    address_postal_code_check?: string;
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
    exp_year?: number;
    networks?: InvoiceDetailsPaymentMethodsDataNetworks;
    exp_month?: number;
    fingerprint?: string;
    generated_from?: string;
    three_d_secure_usage?: InvoiceDetailsPaymentMethodsDataThreeDSecureUsage;
};
type InvoiceDetailsPaymentMethods = {
    id?: number;
    type?: string;
    pg_payment_method_id?: string;
    data?: InvoiceDetailsPaymentMethodsData;
    is_default?: boolean;
};
type InvoicePaymentMethod = {
    pg_payment_method_id?: string;
};
type InvoiceDetails = {
    period?: InvoiceDetailsPeriod;
    client?: InvoiceDetailsClient;
    auto_advance?: boolean;
    currency?: string;
    paid?: boolean;
    attemp?: number;
    _id?: string;
    collection_method?: string;
    subscriber_id?: string;
    invoice_url?: string;
    number?: string;
    pg_data?: any;
    receipt_number?: string;
    statement_descriptor?: string;
    current_status?: string;
    status_trail?: Array<InvoiceDetailsStatusTrail>;
    subtotal?: number;
    total?: number;
    subscription?: string;
    next_action_time?: string;
    created_at?: string;
    modified_at?: string;
    hash_identifier?: string;
    payment_method?: InvoicePaymentMethod;
};
type InvoiceItemsPlanRecurring = {
    interval?: string;
    interval_count?: number;
};
type InvoiceItemsPlan = {
    recurring?: InvoiceItemsPlanRecurring;
    is_trial_plan?: boolean;
    plan_group?: string;
    tag_lines?: Array<string>;
    currency?: string;
    is_active?: boolean;
    is_visible?: boolean;
    trial_period?: number;
    addons?: Array<string>;
    tags?: Array<string>;
    type?: string;
    country?: string;
    _id?: string;
    name?: string;
    description?: string;
    amount?: number;
    product_suite_id?: string;
    created_at?: string;
    modified_at?: string;
};
type InvoiceItemsPeriod = {
    start?: string;
    end?: string;
};
type InvoiceItems = {
    _id?: string;
    currency?: string;
    plan?: InvoiceItemsPlan;
    name?: string;
    quantity?: number;
    description?: string;
    period?: InvoiceItemsPeriod;
    unit_amount?: number;
    amount?: number;
    type?: string;
    invoice_id?: string;
    created_at?: string;
    modified_at?: string;
};
type Invoice = {
    invoice?: InvoiceDetails;
    invoice_items?: Array<InvoiceItems>;
};
type InvoicesDataClient = {
    name?: string;
    email?: string;
    phone?: string;
    address_lines?: Array<string>;
};
type InvoicesDataPeriod = {
    start?: string;
    end?: string;
};
type InvoicesDataPaymentMethod = {
    pg_payment_method_id?: string;
};
type InvoicesData = {
    _id?: string;
    client?: InvoicesDataClient;
    auto_advance?: boolean;
    currency?: string;
    paid?: boolean;
    attemp?: number;
    collection_method?: string;
    subscriber_id?: string;
    invoice_url?: string;
    number?: string;
    pg_data?: any;
    period?: InvoicesDataPeriod;
    receipt_number?: string;
    statement_descriptor?: string;
    current_status?: string;
    status_trail?: Array<InvoiceDetailsStatusTrail>;
    subtotal?: number;
    total?: number;
    subscription?: string;
    next_action_time?: string;
    created_at?: string;
    modified_at?: string;
    hash_identifier?: string;
    payment_method?: InvoicesDataPaymentMethod;
    invoice_items?: Array<InvoiceItems>;
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
    phone_number?: string;
    phone_country_code?: string;
};
type SubscriptionBillingAddress = {
    country?: string;
    state?: string;
    city?: string;
    line1?: string;
    line2?: string;
    postal_code?: string;
};
type SubscriptionCustomer = {
    phone?: Phone;
    billing_address?: SubscriptionBillingAddress;
    _id?: string;
    unique_id?: string;
    type?: string;
    name?: string;
    email?: string;
    created_at?: string;
    modified_at?: string;
    data?: any;
};
type SubscriptionCustomerCreate = {
    phone?: Phone;
    billing_address?: SubscriptionBillingAddress;
    unique_id?: string;
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
    resume_at?: string;
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
    current_period?: SubscriptionCurrentPeriod;
    pause_collection?: SubscriptionPauseCollection;
    trial?: SubscriptionTrial;
    invoice_settings?: SubscriptionInvoiceSettings;
    is_active?: boolean;
    cancel_at_period_end?: boolean;
    _id?: string;
    subscriber_id?: string;
    plan_id?: string;
    product_suite_id?: string;
    plan_data?: Plan;
    current_status?: string;
    collection_method?: string;
    created_at?: string;
    modified_at?: string;
    latest_invoice?: string;
};
type SubscriptionStatus = {
    is_enabled?: boolean;
    subscription?: Subscription;
};
type SubscriptionLimitApplication = {
    enabled?: boolean;
    hard_limit?: number;
    soft_limit?: number;
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
    other_platform?: SubscriptionLimitOtherPlatform;
    team?: SubscriptionLimitTeam;
    products?: SubscriptionLimitProducts;
    extensions?: SubscriptionLimitExtensions;
    integrations?: SubscriptionLimitIntegrations;
    is_trial_plan?: boolean;
};
type SubscriptionActivateReq = {
    unique_id?: string;
    type?: string;
    product_suite?: string;
    plan_id?: string;
    payment_method?: string;
};
type SubscriptionActivateRes = {
    success?: boolean;
    data?: Subscription;
};
type CancelSubscriptionReq = {
    unique_id?: string;
    type?: string;
    product_suite?: string;
    subscription_id?: string;
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
    _id?: string;
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
    is_active?: boolean;
    name?: string;
    file_url?: string;
    type?: string;
    records_count?: number;
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
    _id?: string;
    from_name?: string;
    from_email?: string;
};
type CampaignEmail = {
    template?: CampaignEmailTemplate;
    provider?: CampignEmailProvider;
};
type Campaign = {
    recipient_headers?: RecipientHeaders;
    email?: CampaignEmail;
    description?: string;
    tags?: Array<any>;
    is_active?: boolean;
    _id?: string;
    datasource?: string;
    type?: string;
    name?: string;
    application?: string;
    created_at?: string;
    updated_at?: string;
    slug?: string;
    __v?: number;
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
    phone_number?: string;
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
    is_active?: boolean;
    name?: string;
    file_url?: string;
    type?: string;
    records_count?: number;
    application?: string;
};
type Audience = {
    description?: string;
    tags?: Array<string>;
    headers?: Array<string>;
    is_active?: boolean;
    _id?: string;
    name?: string;
    file_url?: string;
    type?: string;
    records_count?: number;
    application?: string;
    created_at?: string;
    updated_at?: string;
    slug?: string;
    __v?: number;
};
type Audiences = {
    items?: Array<Audience>;
    page?: Page;
};
type EmailProviderReqFrom = {
    name?: string;
    email?: string;
    is_default?: boolean;
};
type EmailProviderReq = {
    name?: string;
    description?: string;
    api_key?: string;
    type?: string;
    provider?: string;
    from?: Array<EmailProviderReqFrom>;
};
type EmailProvider = {
    type?: string;
    provider?: string;
    from?: Array<EmailProviderReqFrom>;
    _id?: string;
    name?: string;
    description?: string;
    api_key?: string;
    application?: string;
    created_at?: string;
    updated_at?: string;
    slug?: string;
    __v?: number;
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
    static_to?: Array<string>;
    static_cc?: Array<string>;
    static_bcc?: Array<string>;
    reply_to?: string;
    headers?: Array<EmailTemplateHeaders>;
    subject?: TemplateAndType;
    html?: TemplateAndType;
    text?: TemplateAndType;
    attachments?: Array<any>;
    priority?: string;
};
type TemplateAndType = {
    template_type?: string;
    template?: string;
};
type EmailTemplateRes = {
    is_system?: boolean;
    is_internal?: boolean;
    description?: string;
    static_to?: Array<string>;
    static_cc?: Array<string>;
    static_bcc?: Array<string>;
    tags?: Array<any>;
    priority?: string;
    published?: boolean;
    _id?: string;
    name?: string;
    keys?: EmailTemplateKeys;
    from?: string;
    reply_to?: string;
    headers?: Array<EmailTemplateHeaders>;
    subject?: TemplateAndType;
    html?: TemplateAndType;
    text?: TemplateAndType;
    attachments?: Array<any>;
    created_at?: string;
    updated_at?: string;
    slug?: string;
    __v?: number;
};
type EmailTemplate = {
    is_system?: boolean;
    is_internal?: boolean;
    description?: string;
    static_to?: Array<any>;
    static_cc?: Array<any>;
    static_bcc?: Array<any>;
    tags?: Array<any>;
    priority?: string;
    published?: boolean;
    _id?: string;
    slug?: string;
    name?: string;
    from?: string;
    from_name?: string;
    subject?: TemplateAndType;
    html?: TemplateAndType;
    text?: TemplateAndType;
    headers?: Array<any>;
    attachments?: Array<any>;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type SystemEmailTemplate = {
    is_system?: boolean;
    is_internal?: boolean;
    description?: string;
    static_to?: Array<any>;
    static_cc?: Array<any>;
    static_bcc?: Array<any>;
    tags?: Array<any>;
    priority?: string;
    published?: boolean;
    _id?: string;
    slug?: string;
    name?: string;
    from?: string;
    from_name?: string;
    subject?: TemplateAndType;
    html?: TemplateAndType;
    text?: TemplateAndType;
    headers?: Array<any>;
    attachments?: Array<any>;
    created_at?: string;
    updated_at?: string;
    __v?: number;
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
    is_default?: boolean;
    _id?: string;
    application?: string;
    event?: string;
    slug?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type EventSubscriptions = {
    items?: Array<EventSubscription>;
    page?: Page;
};
type TriggerJobResponse = {
    status?: number;
};
type TriggerJobRequest = {
    job_id?: string;
};
type Job = {
    completed?: boolean;
    is_active?: boolean;
    _id?: string;
    campaign?: string;
    application?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type Jobs = {
    items?: Array<Job>;
    page?: Page;
};
type JobLog = {
    imported?: any;
    processed?: any;
    _id?: string;
    job?: string;
    campaign?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
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
    _id?: string;
    application?: string;
    service?: string;
    step?: string;
    status?: string;
    data?: any;
    expire_at?: string;
    created_at?: string;
};
type Logs = {
    items?: Array<Log>;
    page?: Page;
};
type PushtokenReq = {
    action?: string;
    bundle_identifier?: string;
    push_token?: string;
    unique_device_id?: string;
};
type PushtokenRes = {
    _id?: string;
    bundle_identifier?: string;
    push_token?: string;
    unique_device_id?: string;
    type?: string;
    platform?: string;
    application_id?: string;
    user_id?: string;
    created_at?: string;
    updated_at?: string;
    expired_at?: string;
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
    _id?: string;
    name?: string;
    description?: string;
    sender?: string;
    username?: string;
    authkey?: string;
    application?: string;
    created_at?: string;
    updated_at?: string;
    slug?: string;
    __v?: number;
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
    template_type?: string;
    template?: string;
};
type SmsTemplateReq = {
    name?: string;
    description?: string;
    message?: SmsTemplateMessage;
    template_variables?: any;
    attachments?: Array<any>;
    priority?: string;
};
type SmsTemplateRes = {
    is_system?: boolean;
    is_internal?: boolean;
    description?: string;
    tags?: Array<any>;
    priority?: string;
    published?: boolean;
    _id?: string;
    name?: string;
    message?: SmsTemplateMessage;
    template_variables?: any;
    created_at?: string;
    updated_at?: string;
    slug?: string;
    __v?: number;
};
type SmsTemplate = {
    is_system?: boolean;
    is_internal?: boolean;
    description?: string;
    priority?: string;
    tags?: Array<any>;
    published?: boolean;
    _id?: string;
    slug?: string;
    name?: string;
    message?: SmsTemplateMessage;
    template_variables?: any;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type SystemSmsTemplate = {
    is_system?: boolean;
    is_internal?: boolean;
    description?: string;
    tags?: Array<any>;
    priority?: string;
    published?: boolean;
    _id?: string;
    slug?: string;
    name?: string;
    message?: SmsTemplateMessage;
    template_variables?: any;
    created_at?: string;
    updated_at?: string;
    __v?: number;
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
    click_action?: string;
};
type SystemNotificationUser = {
    type?: string;
    value?: string;
};
type SystemNotificationSettings = {
    sound?: boolean;
    priority?: string;
    time_to_live?: string;
};
type SystemNotification = {
    notification?: Notification;
    user?: SystemNotificationUser;
    settings?: SystemNotificationUser;
    _id?: string;
    group?: string;
    created_at?: string;
};
type SystemNotificationsPage = {
    type?: string;
    current?: number;
    size?: number;
    item_total?: number;
    has_next?: boolean;
};
type SystemNotifications = {
    items?: Array<SystemNotification>;
    last_read_anchor?: number;
    page?: Page;
};
type PaymentGatewayConfigResponse = {
    display_fields: Array<string>;
    aggregators?: Array<any>;
    app_id: string;
    success: boolean;
    excluded_fields: Array<string>;
    created: boolean;
};
type ErrorCodeDescription = {
    success: boolean;
    description: string;
    code: string;
};
type PaymentGatewayConfig = {
    key: string;
    merchant_salt: string;
    secret: string;
    config_type: string;
    is_active?: boolean;
};
type PaymentGatewayConfigRequest = {
    aggregator_name?: PaymentGatewayConfig;
    is_active?: boolean;
    app_id: string;
};
type PaymentGatewayToBeReviewed = {
    success: boolean;
    aggregator: Array<string>;
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
    small: string;
    large: string;
};
type PaymentModeList = {
    card_name?: string;
    card_token?: string;
    card_brand_image?: string;
    display_priority?: number;
    code?: string;
    display_name?: string;
    aggregator_name: string;
    intent_flow?: string;
    card_brand?: string;
    exp_month?: number;
    exp_year?: number;
    retry_count?: number;
    card_issuer?: string;
    card_id?: string;
    expired?: boolean;
    timeout?: number;
    card_fingerprint?: string;
    card_isin?: string;
    card_type?: string;
    card_number?: string;
    card_reference?: string;
    intent_app_error_list?: Array<string>;
    merchant_code?: string;
    nickname?: string;
    fynd_vpa?: string;
    name?: string;
    logo_url?: PaymentModeLogo;
};
type RootPaymentMode = {
    name: string;
    anonymous_enable?: boolean;
    add_card_enabled?: boolean;
    list?: Array<PaymentModeList>;
    display_priority: number;
    display_name: string;
    aggregator_name?: string;
};
type PaymentOptions = {
    payment_option: Array<RootPaymentMode>;
};
type PaymentOptionsResponse = {
    success: boolean;
    payment_options: PaymentOptions;
};
type PayoutsResponse = {
    is_active: boolean;
    unique_transfer_no: any;
    is_default: boolean;
    payouts_aggregators: Array<any>;
    more_attributes: any;
    customers: any;
    transfer_type: string;
};
type PayoutRequest = {
    unique_external_id: string;
    users: any;
    is_active: boolean;
    bank_details: any;
    transfer_type: string;
    aggregator: string;
};
type PayoutResponse = {
    payouts: any;
    users: any;
    unique_transfer_no: string;
    payment_status: string;
    success: boolean;
    transfer_type: string;
    bank_details: any;
    created: boolean;
    is_active: boolean;
    aggregator: string;
};
type UpdatePayoutResponse = {
    success: boolean;
    is_default: boolean;
    is_active: boolean;
};
type UpdatePayoutRequest = {
    unique_external_id: string;
    is_default: boolean;
    is_active: boolean;
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
    success: boolean;
    aggregator: string;
};
type SaveSubscriptionSetupIntentRequest = {
    unique_external_id: string;
};
type SaveSubscriptionSetupIntentResponse = {
    data: any;
    success: boolean;
};
type GetActivityStatus = {
    activity_history: ActivityHistory;
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
    updated_at?: string;
    _id?: string;
    reason?: string;
    marketplace_order?: MarketplaceOrder;
    marketplace_order_id?: string;
    created_at?: string;
    app_id?: string;
    marketplace?: string;
    company_id?: number;
};
type MarketplaceOrder = {
    order_status_url?: string;
    admin_graphql_api_id?: string;
    email?: string;
    test?: boolean;
    note?: string;
    total_price?: string;
    app_id?: number;
    total_discounts_set?: TotalDiscountsSet;
    total_price_set?: TotalPriceSet;
    total_tax_set?: TotalTaxSet;
    gateway?: string;
    name?: string;
    subtotal_price_set?: SubtotalPriceSet;
    number?: number;
    buyer_accepts_marketing?: boolean;
    contact_email?: string;
    token?: string;
    source_name?: string;
    payment_gateway_names?: Array<any>;
    presentment_currency?: string;
    subtotal_price?: string;
    processed_at?: string;
    order_number?: number;
    total_tip_received?: string;
    id?: number;
    confirmed?: boolean;
    currency?: string;
    total_line_items_price?: string;
    line_items?: LineItems;
    created_at?: string;
    updated_at?: string;
    total_weight?: number;
    billing_address?: BillingAddress;
    total_shipping_price_set?: TotalShippingPriceSet;
    customer?: Customer;
    total_discounts?: string;
    total_line_items_price_set?: TotalLineItemsPriceSet;
    tags?: string;
    total_price_usd?: string;
    user_id?: number;
    total_tax?: string;
    processing_method?: string;
    shipping_address?: ShippingAddress;
    taxes_included?: boolean;
    financial_status?: string;
};
type TotalDiscountsSet = {
    presentment_money?: PresentmentMoney;
    shop_money?: ShopMoney;
};
type PresentmentMoney = {
    amount?: string;
    currency_code?: string;
};
type ShopMoney = {
    amount?: string;
    currency_code?: string;
};
type TotalPriceSet = {
    shop_money?: TotalPriceSetShopMoney;
    presentment_money?: TotalPriceSetPresentmentMoney;
};
type TotalPriceSetShopMoney = {
    amount?: string;
    currency_code?: string;
};
type TotalPriceSetPresentmentMoney = {
    amount?: string;
    currency_code?: string;
};
type TotalTaxSet = {
    shop_money?: TotalTaxSetShopMoney;
    presentment_money?: TotalTaxSetPresentmentMoney;
};
type TotalTaxSetShopMoney = {
    amount?: string;
    currency_code?: string;
};
type TotalTaxSetPresentmentMoney = {
    amount?: string;
    currency_code?: string;
};
type SubtotalPriceSet = {
    shop_money?: SubtotalPriceSetShopMoney;
    presentment_money?: SubtotalPriceSetPresentmentMoney;
};
type SubtotalPriceSetShopMoney = {
    amount?: string;
    currency_code?: string;
};
type SubtotalPriceSetPresentmentMoney = {
    amount?: string;
    currency_code?: string;
};
type LineItems = {
    sku?: string;
    fulfillable_quantity?: number;
    grams?: number;
    total_discount?: string;
    article?: LineItemsArticle;
    title?: string;
    variant_inventory_management?: string;
    id?: number;
    variant_id?: number;
    variant_title?: string;
    product_exists?: boolean;
    price?: string;
    admin_graphql_api_id?: string;
    quantity?: number;
    vendor?: string;
    fulfillment_service?: string;
    taxable?: boolean;
    name?: string;
    product_id?: number;
    price_set?: PriceSet;
    tax_lines?: TaxLines;
    requires_shipping?: boolean;
    gift_card?: boolean;
    total_discount_set?: TotalDiscountSet;
};
type LineItemsArticle = {
    quantities?: Quantities;
    old_article_uid?: string;
    total_quantity?: number;
    manufacturer?: Manufacturer;
    price?: ArticlePrice;
    track_inventory?: boolean;
    company?: Company;
    is_active?: boolean;
    date_meta?: FailOrderDateMeta;
    fragile?: boolean;
    marketplace_identifiers?: MarketplaceIdentifiers;
    size?: string;
    is_set?: boolean;
    dimension?: Dimension;
    weight?: Weight;
    store?: Store;
    meta?: ArticleMeta;
    uid?: string;
    brand?: ArticleBrand;
    item_id?: number;
    fynd_article_code?: string;
    _id?: string;
    identifier?: LineItemsArticleIdentifier;
    seller_identifier?: string;
    fynd_item_code?: string;
    country_of_origin?: string;
};
type Quantities = {
    not_available?: NotAvailable;
    sellable?: Sellable;
    order_committed?: OrderCommitted;
    damaged?: Damaged;
};
type NotAvailable = {
    count?: number;
    updated_at?: string;
};
type Sellable = {
    count?: number;
    updated_at?: string;
};
type OrderCommitted = {
    count?: number;
    updated_at?: string;
};
type Damaged = {
    updated_at?: string;
    count?: number;
};
type Manufacturer = {
    is_default?: boolean;
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
    company_type?: string;
    business_type?: string;
    company_name?: string;
    created_on?: string;
    pan_no?: string;
    return_allowed?: boolean;
    meta?: string;
    exchange_allowed?: boolean;
    agreement_start_date?: string;
    exchange_within_days?: number;
    payment_procesing_charge?: number;
    fynd_a_fit_available?: boolean;
    modified_on?: string;
    return_within_days?: number;
};
type FailOrderDateMeta = {
    added_on_store?: string;
    inventory_updated_on?: string;
    created_on?: string;
    modified_on?: string;
};
type MarketplaceIdentifiers = {
    tatacliq_luxury?: TatacliqLuxury;
};
type TatacliqLuxury = {
    sku?: string;
};
type Dimension = {
    height?: number;
    width?: number;
    unit?: string;
    length?: number;
    is_default?: boolean;
};
type Weight = {
    is_default?: boolean;
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
    sku_code?: string;
};
type PriceSet = {
    shop_money?: PriceSetShopMoney;
    presentment_money?: PriceSetPresentmentMoney;
};
type PriceSetShopMoney = {
    amount?: string;
    currency_code?: string;
};
type PriceSetPresentmentMoney = {
    amount?: string;
    currency_code?: string;
};
type TaxLines = {
    title?: string;
    price?: string;
    rate?: number;
    price_set?: TaxLinesPriceSet;
};
type TaxLinesPriceSet = {
    shop_money?: TaxLinesPriceSetShopMoney;
    presentment_money?: TaxLinesPriceSetPresentmentMoney;
};
type TaxLinesPriceSetShopMoney = {
    amount?: string;
    currency_code?: string;
};
type TaxLinesPriceSetPresentmentMoney = {
    currency_code?: string;
    amount?: string;
};
type TotalDiscountSet = {
    presentment_money?: TotalDiscountSetPresentmentMoney;
    shop_money?: TotalDiscountSetShopMoney;
};
type TotalDiscountSetPresentmentMoney = {
    amount?: string;
    currency_code?: string;
};
type TotalDiscountSetShopMoney = {
    amount?: string;
    currency_code?: string;
};
type BillingAddress = {
    address1?: string;
    city?: string;
    zip?: string;
    last_name?: string;
    address2?: string;
    longitude?: number;
    province_code?: string;
    phone?: string;
    company?: string;
    latitude?: number;
    name?: string;
    country?: string;
    country_code?: string;
    first_name?: string;
    province?: string;
};
type TotalShippingPriceSet = {
    shop_money?: TotalShippingPriceSetShopMoney;
    presentment_money?: TotalShippingPriceSetPresentmentMoney;
};
type TotalShippingPriceSetShopMoney = {
    amount?: string;
    currency_code?: string;
};
type TotalShippingPriceSetPresentmentMoney = {
    amount?: string;
    currency_code?: string;
};
type Customer = {
    created_at?: string;
    id?: number;
    last_name?: string;
    state?: string;
    last_order_id?: number;
    note?: string;
    verified_email?: boolean;
    phone?: string;
    accepts_marketing?: boolean;
    first_name?: string;
    tags?: string;
    last_order_name?: string;
    orders_count?: number;
    total_spent?: string;
    tax_exempt?: boolean;
    currency?: string;
    accepts_marketing_updated_at?: string;
    email?: string;
    updated_at?: string;
    admin_graphql_api_id?: string;
    default_address?: DefaultAddress;
};
type DefaultAddress = {
    last_name?: string;
    name?: string;
    province_code?: string;
    country_code?: string;
    is_default?: boolean;
    id?: number;
    customer_id?: number;
    first_name?: string;
    address1?: string;
    phone?: string;
    country_name?: string;
    company?: string;
    address2?: string;
    city?: string;
    province?: string;
    country?: string;
    zip?: string;
};
type TotalLineItemsPriceSet = {
    shop_money?: TotalLineItemsPriceSetShopMoney;
    presentment_money?: TotalLineItemsPriceSetPresentmentMoney;
};
type TotalLineItemsPriceSetShopMoney = {
    amount?: string;
    currency_code?: string;
};
type TotalLineItemsPriceSetPresentmentMoney = {
    amount?: string;
    currency_code?: string;
};
type ShippingAddress = {
    address1?: string;
    zip?: string;
    address2?: string;
    country_code?: string;
    country?: string;
    last_name?: string;
    latitude?: number;
    province_code?: string;
    first_name?: string;
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
    next_order_status: NextOrderStatus;
    page: PlatformOrderPage;
    applied_filters: AppliedFilters;
};
type OrderItems = {
    user?: PlatformOrderUserInfo;
    delivery_address?: PlatformDeliveryAddress;
    channel?: Channel;
    breakup_values?: PlatformBreakupValues;
    id?: string;
    application?: PlatformApplication;
    shipments?: PlatformShipment;
    created_at?: string;
    total_shipments_in_order?: number;
    payments?: ItemsPayments;
};
type PlatformOrderUserInfo = {
    mobile?: string;
    first_name?: string;
    gender?: string;
    email?: string;
    last_name?: string;
    is_anonymous_user?: boolean;
    uid?: number;
    avis_user_id?: string;
};
type PlatformDeliveryAddress = {
    area?: string;
    state?: string;
    country?: string;
    version?: string;
    address1?: string;
    latitude?: number;
    updated_at?: string;
    city?: string;
    landmark?: string;
    created_at?: string;
    name?: string;
    address?: string;
    phone?: string;
    longitude?: number;
    address_type?: string;
    email?: string;
    pincode?: string;
    address2?: string;
    contact_person?: string;
    address_category?: string;
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
    post_order_reassignment?: boolean;
    id?: string;
    description?: string;
    dp_assignment?: boolean;
    article_assignment?: ArticleAssignment;
    force_reassignment?: boolean;
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
    breakup_values?: ShipmentBreakupValues;
    id?: string;
    dp_details?: DpDetails;
    invoice?: ShipmentInvoice;
    fulfilling_store?: PlatformFulfillingStore;
    payments?: Payments;
    gst?: ShipmentGst;
    company?: Company;
    brand?: PlatformShipmentBrand;
    coupon?: any;
    order_source?: string;
    is_not_fynd_source?: boolean;
    comment?: string;
    promise?: Promise;
    tracking_details?: ShipmentTrackingDetails;
    is_fynd_coupon?: boolean;
    order_type?: string;
    user?: ShipmentUser;
};
type PlatformShipmentStatus = {
    id?: number;
    bag_list?: Array<number>;
    created_at?: string;
    status?: string;
    name?: string;
    progress?: number;
    shipment_id?: string;
    current_shipment_status?: string;
    color_code?: string;
};
type Bags = {
    financial_breakup?: Array<BagFinancialBreakup>;
    status?: BagCurrStatus;
    item?: BagItem;
    article?: BagArticle;
    id?: number;
    prices?: BagPrices;
    gst_details?: GstDetails;
    breakup_values?: BagBreakupValues;
    update_time?: number;
    current_status?: BagCurrentStatus;
    bag_status?: BagStatus;
};
type BagFinancialBreakup = {
    value_of_good?: number;
    hsn_code?: string;
    price_effective?: number;
    cod_charges?: number;
    gst_fee?: string;
    fynd_credits?: number;
    refund_amount?: number;
    cashback_applied?: number;
    transfer_price?: number;
    amount_paid_roundoff?: number;
    coupon_value?: number;
    amount_paid?: number;
    gst_tax_percentage?: number;
    size?: string;
    total_units?: number;
    discount?: number;
    coupon_effective_discount?: number;
    cashback?: number;
    promotion_effective_discount?: number;
    gst_tag?: string;
    delivery_charge?: number;
    refund_credit?: number;
    price_marked?: number;
    identifiers?: Identifiers;
    item_name?: string;
    added_to_fynd_cash?: boolean;
    brand_calculated_amount?: number;
};
type Identifiers = {
    ean?: string;
};
type BagCurrStatus = {
    enable_tracking?: boolean;
    is_customer_return_allowed?: boolean;
    is_active?: boolean;
    is_returnable?: boolean;
    can_be_cancelled?: boolean;
};
type BagItem = {
    id?: number;
    size?: string;
    slug_key?: string;
    can_return?: boolean;
    brand_id?: number;
    l2_category?: Array<string>;
    name?: string;
    code?: string;
    can_cancel?: boolean;
    attributes?: BagItemAttributes;
    l3_category_name?: string;
    l3_category?: number;
    l1_category?: Array<string>;
    image?: Array<string>;
    brand?: string;
    last_updated_at?: string;
};
type BagItemAttributes = {
    item_code?: string;
    brand_name?: string;
    country_of_origin?: string;
};
type BagArticle = {
    identifiers?: ArticleIdentifiers;
    esp_modified?: boolean;
    is_set?: boolean;
    size?: string;
    code?: string;
    set?: Set;
    seller_identifier?: string;
    return_config?: BagArticleReturnConfig;
    _id?: string;
    uid?: string;
    child_details?: any;
};
type ArticleIdentifiers = {
    ean?: string;
};
type Set = {
    quantity?: number;
    size_distribution?: SetSizeDistribution;
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
    refund_amount?: number;
    cashback_applied?: number;
    transfer_price?: number;
    coupon_value?: number;
    amount_paid?: number;
    delivery_charge?: number;
    coupon_effective_discount?: number;
    cod_charges?: number;
    refund_credit?: number;
    added_to_fynd_cash?: boolean;
    gst_tax_percentage?: number;
    price_marked?: number;
    price_effective?: number;
    discount?: number;
    promotion_effective_discount?: number;
    amount_paid_roundoff?: number;
    fynd_credits?: number;
    brand_calculated_amount?: number;
    cashback?: number;
    value_of_good?: number;
};
type GstDetails = {
    brand_calculated_amount?: number;
    gst_fee?: string;
    gst_tag?: string;
    hsn_code?: string;
    value_of_good?: number;
    gst_tax_percentage?: number;
    is_default_hsn_code?: boolean;
};
type BagBreakupValues = {
    name?: string;
    display?: string;
    value?: number;
};
type BagCurrentStatus = {
    updated_at?: string;
    bag_state_mapper?: BagStateMapper;
    status?: string;
    state_type?: string;
};
type BagStateMapper = {
    app_state_name?: string;
    is_active?: boolean;
    display_name?: string;
    name?: string;
    app_display_name?: string;
};
type BagStatus = {
    status?: string;
    state_type?: string;
    updated_at?: string;
    bag_state_mapper?: BagStatusBagStateMapper;
};
type BagStatusBagStateMapper = {
    is_active?: boolean;
    display_name?: string;
    name?: string;
    app_display_name?: string;
    app_state_name?: string;
};
type BagPrices = {
    cashback?: number;
    refund_credit?: number;
    coupon_value?: number;
    delivery_charge?: number;
    fynd_credits?: number;
    price_marked?: number;
    cashback_applied?: number;
    value_of_good?: number;
    amount_paid_roundoff?: number;
    amount_paid?: number;
    cod_charges?: number;
    price_effective?: number;
    refund_amount?: number;
    discount?: number;
};
type ShipmentBreakupValues = {
    name?: string;
    display?: string;
    value?: number;
};
type DpDetails = {
    gst_tag?: string;
};
type ShipmentInvoice = {
    payment_type?: string;
    updated_date?: string;
    invoice_url?: string;
    label_url?: string;
    payment_mode?: string;
    amount_to_collect?: number;
    rto_address?: RtoAddress;
};
type RtoAddress = {
    name?: string;
    id?: number;
    phone?: string;
    location_type?: string;
    store_address_json?: StoreAddressJson;
    code?: string;
    address1?: string;
    city?: string;
    country?: string;
    pincode?: string;
    company_id?: number;
    contact_person?: string;
    state?: string;
    store_email?: string;
    address2?: string;
};
type StoreAddressJson = {
    country?: string;
    latitude?: number;
    updated_at?: string;
    area?: string;
    state?: string;
    address_type?: string;
    city?: string;
    pincode?: string;
    address1?: string;
    address2?: string;
    longitude?: number;
    email?: string;
    phone?: string;
    created_at?: string;
    contact_person?: string;
    address_category?: string;
    version?: string;
    landmark?: string;
};
type PlatformFulfillingStore = {
    packaging_material_count?: number;
    location_type?: string;
    code?: string;
    city?: string;
    meta?: FulfillingStoreMeta;
    name?: string;
    is_active?: boolean;
    address1?: string;
    store_email?: string;
    is_archived?: boolean;
    state?: string;
    address2?: string;
    contact_person?: string;
    phone?: string;
    is_enabled_for_recon?: boolean;
    fulfillment_channel?: string;
    created_at?: string;
    id?: number;
    pincode?: string;
    brand_store_tags?: Array<string>;
    company_id?: number;
    store_address_json?: FulfillingStoreStoreAddressJson;
    updated_at?: string;
    login_username?: string;
    country?: string;
};
type FulfillingStoreMeta = {
    additional_contact_details?: AdditionalContactDetails;
    documents?: Documents;
    gst_number?: string;
    display_name?: string;
    product_return_config?: ProductReturnConfig;
    allow_dp_assignment_from_fynd?: boolean;
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
    legal_name?: string;
    type?: string;
    value?: string;
    verified?: boolean;
};
type ProductReturnConfig = {
    on_same_store?: boolean;
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
    contact_person?: string;
    country?: string;
    pincode?: string;
    version?: string;
    created_at?: string;
    address_type?: string;
    city?: string;
    address1?: string;
    landmark?: string;
    latitude?: number;
    longitude?: number;
    updated_at?: string;
    address_category?: string;
};
type Payments = {
    is_active?: boolean;
    display_name?: string;
    logo?: string;
    source?: string;
    source_nickname?: string;
    display_priority?: number;
    id?: number;
    mode?: string;
    payment_identifier?: string;
};
type ShipmentGst = {
    brand_calculated_amount?: number;
    value_of_good?: number;
    gst_fee?: number;
};
type PlatformShipmentBrand = {
    credit_note_allowed?: boolean;
    brand_name?: string;
    modified_on?: string;
    id?: number;
    is_virtual_invoice?: boolean;
    created_on?: string;
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
    is_passed?: boolean;
    is_current?: boolean;
};
type ShipmentUser = {
    email?: string;
    id?: number;
    first_name?: string;
    mobile?: string;
    gender?: string;
    last_name?: string;
    is_anonymous_user?: boolean;
    mongo_user_id?: string;
};
type ItemsPayments = {
    display_priority?: number;
    id?: number;
    is_active?: boolean;
    display_name?: string;
    logo?: string;
    payment_identifier?: string;
    source_nickname?: string;
    mode?: string;
    source?: string;
};
type Filters = {
    stages?: Stages;
};
type Stages = {
    text?: string;
    value?: string;
    is_default?: boolean;
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
    bag_confirmed?: BagConfirmed;
    dp_assigned?: DpAssigned;
    return_bag_delivered?: ReturnBagDelivered;
    placed?: Placed;
    delivery_done?: DeliveryDone;
    pending?: Pending;
    bag_packed?: BagPacked;
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
    has_next?: boolean;
    item_total?: ItemTotal;
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
    from_date?: string;
    to_date?: string;
};
type UpdateOrderReprocessResponse = {
    status: string;
};
type PlatformOrderTrack = {
    success: boolean;
    request_id: string;
    message: string;
    mobile: string;
    country_code: string;
    resend_timer: number;
    resend_token?: string;
};
type GetPingResponse = {
    ping: string;
};
type UpdateShipmentStatusResponse = {
    shipments: any;
    error_shipments?: Array<any>;
};
type UpdateShipmentStatusBody = {
    shipments: any;
    force_transition: boolean;
    task: boolean;
};
type PlatformShipmentTrack = {
    results: Results;
};
type Results = {
    awb?: string;
    updated_at?: string;
    last_location_recieved_at?: string;
    reason?: string;
    shipment_type?: string;
    status?: string;
    updated_time?: string;
    account_name?: string;
};
type UpdateProcessShipmenstRequestBody = {
    shipment_ids: Array<string>;
    expected_status: string;
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
    _custom_json?: any;
    result?: any;
    app_id?: string;
    words?: Array<string>;
    uid?: string;
};
type GetSearchWordsDetailResponse = {
    page?: Page;
    items?: GetSearchWordsData;
};
type ErrorResponse = {
    meta?: any;
    message?: string;
    status?: number;
    code?: string;
};
type DeleteResponse = {
    message?: string;
};
type SearchKeywordResult = {
    sort_on: string;
    query: any;
};
type CreateSearchKeyword = {
    _custom_json?: any;
    result: SearchKeywordResult;
    app_id?: string;
    is_active?: boolean;
    words?: Array<string>;
};
type GetSearchWordsResponse = {
    page?: Page;
    items?: Array<GetSearchWordsData>;
};
type GetAutocompleteWordsData = {
    _custom_json?: any;
    app_id?: string;
    results?: Array<any>;
    words?: Array<string>;
    uid?: string;
};
type GetAutocompleteWordsResponse = {
    page?: Page;
    items?: Array<GetAutocompleteWordsData>;
};
type AutocompletePageAction = {
    type: string;
    params?: any;
    query: any;
    url?: string;
};
type AutocompleteAction = {
    page?: AutocompletePageAction;
    type?: string;
};
type Media = {
    type?: string;
    url?: string;
};
type AutocompleteResult = {
    display?: string;
    _custom_json?: any;
    action?: AutocompleteAction;
    logo?: Media;
};
type CreateAutocompleteKeyword = {
    _custom_json?: any;
    app_id?: string;
    results?: Array<AutocompleteResult>;
    is_active?: boolean;
    words?: Array<string>;
};
type CreateAutocompleteWordsResponse = {
    words?: Array<string>;
    app_id?: string;
    _custom_json?: any;
    results?: Array<any>;
};
type ProductBundleItem = {
    allow_remove?: boolean;
    auto_select?: boolean;
    min_quantity: number;
    product_uid: number;
    max_quantity: number;
    auto_add_to_cart?: boolean;
};
type GetProductBundleCreateResponse = {
    choice: string;
    slug: string;
    name: string;
    created_by?: any;
    products: Array<ProductBundleItem>;
    company_id?: number;
    page_visibility?: Array<string>;
    id?: string;
    logo?: string;
    modified_on?: string;
    same_store_assignment?: boolean;
    is_active: boolean;
    meta?: any;
    modified_by?: any;
    created_on?: string;
};
type GetProductBundleListingResponse = {
    page?: Page;
    items?: Array<GetProductBundleCreateResponse>;
};
type ProductBundleRequest = {
    choice: string;
    slug: string;
    name: string;
    created_by?: any;
    products: Array<ProductBundleItem>;
    page_visibility?: Array<string>;
    logo?: string;
    modified_on?: string;
    same_store_assignment?: boolean;
    is_active: boolean;
    meta?: any;
    modified_by?: any;
    created_on?: string;
};
type Price = {
    max_marked?: number;
    max_effective?: number;
    min_effective?: number;
    min_marked?: number;
    currency?: string;
};
type LimitedProductData = {
    slug?: string;
    name?: string;
    item_code?: string;
    attributes?: any;
    sizes?: Array<string>;
    country_of_origin?: string;
    identifier?: any;
    images?: Array<string>;
    short_description?: string;
    quantity?: number;
    price?: any;
    uid?: number;
};
type Size = {
    display?: string;
    value?: string;
    quantity?: number;
    is_available?: boolean;
};
type GetProducts = {
    allow_remove?: boolean;
    price?: Price;
    min_quantity?: number;
    auto_select?: boolean;
    product_details?: LimitedProductData;
    sizes?: Array<Size>;
    product_uid?: number;
    max_quantity?: number;
    auto_add_to_cart?: boolean;
};
type GetProductBundleResponse = {
    choice?: string;
    slug?: string;
    name?: string;
    products?: Array<GetProducts>;
    company_id?: number;
    page_visibility?: Array<string>;
    logo?: string;
    same_store_assignment?: boolean;
    is_active?: boolean;
    meta?: any;
};
type ProductBundleUpdateRequest = {
    choice: string;
    slug: string;
    name: string;
    products: Array<ProductBundleItem>;
    page_visibility?: Array<string>;
    logo?: string;
    modified_on?: string;
    same_store_assignment?: boolean;
    is_active: boolean;
    meta?: any;
    modified_by?: any;
};
type ListSizeGuide = {
    page?: any;
    items?: Array<any>;
};
type Meta = {
    values?: Array<any>;
    headers?: any;
    unit?: string;
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    name: string;
    guide?: Guide;
    created_by?: any;
    title: string;
    brand_id?: number;
    company_id?: number;
    subtitle?: string;
    id?: string;
    tag?: string;
    active?: boolean;
    modified_on?: string;
    image?: string;
    modified_by?: any;
    created_on?: string;
    description?: string;
};
type SuccessResponse = {
    success?: boolean;
    uid?: number;
};
type SizeGuideResponse = {
    name?: string;
    created_by?: any;
    guide?: any;
    title?: string;
    brand_id?: number;
    company_id?: number;
    subtitle?: string;
    id?: string;
    tag?: string;
    modified_on?: string;
    active?: boolean;
    modified_by?: any;
    created_on?: string;
};
type MetaDataListingFilterMetaResponse = {
    display?: string;
    key?: string;
    units?: Array<any>;
    filter_types?: Array<string>;
};
type MetaDataListingFilterResponse = {
    data?: Array<MetaDataListingFilterMetaResponse>;
};
type MetaDataListingSortMetaResponse = {
    display?: string;
    key?: string;
};
type MetaDataListingSortResponse = {
    data?: Array<MetaDataListingSortMetaResponse>;
};
type MetaDataListingResponse = {
    filter: MetaDataListingFilterResponse;
    sort: MetaDataListingSortResponse;
};
type GetCatalogConfigurationDetailsProduct = {
    detail?: any;
    similar?: any;
    compare?: any;
    variant?: any;
};
type GetCatalogConfigurationMetaData = {
    listing?: MetaDataListingResponse;
    product?: GetCatalogConfigurationDetailsProduct;
};
type ConfigurationBucketPoints = {
    start?: number;
    end?: number;
};
type ConfigurationListingFilterValue = {
    bucket_points?: Array<ConfigurationBucketPoints>;
    map?: any;
    value?: string;
    sort?: string;
    condition?: string;
};
type ConfigurationListingFilterConfig = {
    name?: string;
    type: string;
    priority: number;
    logo?: string;
    value_config?: ConfigurationListingFilterValue;
    is_active: boolean;
    key: string;
};
type ConfigurationListingFilter = {
    allow_single: boolean;
    attribute_config?: Array<ConfigurationListingFilterConfig>;
};
type ConfigurationListingSortConfig = {
    name?: string;
    priority: number;
    logo?: string;
    is_active: boolean;
    key: string;
};
type ConfigurationListingSort = {
    config?: Array<ConfigurationListingSortConfig>;
    default_key: string;
};
type ConfigurationListing = {
    filter: ConfigurationListingFilter;
    sort: ConfigurationListingSort;
};
type ProductSize = {
    min: number;
    max: number;
};
type ConfigurationProductConfig = {
    title?: string;
    subtitle?: string;
    priority: number;
    logo?: string;
    is_active: boolean;
    key: string;
    size?: ProductSize;
};
type ConfigurationProductSimilar = {
    config?: Array<ConfigurationProductConfig>;
};
type ConfigurationProductVariantConfig = {
    name: string;
    display_type: string;
    priority: number;
    logo?: string;
    is_active: boolean;
    key: string;
    size: ProductSize;
};
type ConfigurationProductVariant = {
    config?: Array<ConfigurationProductVariantConfig>;
};
type ConfigurationProduct = {
    similar: ConfigurationProductSimilar;
    variant: ConfigurationProductVariant;
};
type AppCatalogConfiguration = {
    listing?: ConfigurationListing;
    config_id?: string;
    product?: ConfigurationProduct;
    id?: string;
    app_id: string;
    config_type: string;
};
type GetAppCatalogConfiguration = {
    is_default?: boolean;
    data?: AppCatalogConfiguration;
};
type AppConfiguration = {
    listing?: ConfigurationListing;
    config_id?: string;
    product?: ConfigurationProduct;
    app_id: string;
    config_type: string;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    filter?: any;
    sort?: any;
};
type EntityConfiguration = {
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    config_id?: string;
    product?: GetCatalogConfigurationDetailsProduct;
    id?: string;
    app_id: string;
    config_type: string;
};
type GetAppCatalogEntityConfiguration = {
    is_default?: boolean;
    data?: EntityConfiguration;
};
type ProductFiltersValue = {
    query_format?: string;
    count?: number;
    currency_symbol?: string;
    currency_code?: string;
    display_format?: string;
    max?: number;
    display: string;
    selected_max?: number;
    is_selected: boolean;
    value: string;
    min?: number;
    selected_min?: number;
};
type ProductFiltersKey = {
    display: string;
    name: string;
    logo?: string;
    kind?: string;
};
type ProductFilters = {
    values: Array<ProductFiltersValue>;
    key: ProductFiltersKey;
};
type ProductSortOn = {
    value?: string;
    name?: string;
    is_selected?: boolean;
};
type GetCollectionQueryOptionResponse = {
    filters?: Array<ProductFilters>;
    sort_on?: Array<ProductSortOn>;
};
type BannerImage = {
    url?: string;
    aspect_ratio?: string;
};
type ImageUrls = {
    portrait?: BannerImage;
    landscape?: BannerImage;
};
type Media1 = {
    meta?: any;
    type?: string;
    url: string;
};
type ProductListingActionPage = {
    type?: string;
    query?: any;
};
type ProductListingAction = {
    page?: ProductListingActionPage;
    type?: string;
};
type GetCollectionDetailNest = {
    allow_sort?: boolean;
    slug?: string;
    type?: string;
    banners?: ImageUrls;
    cron?: any;
    logo?: Media1;
    query?: any;
    allow_facets?: boolean;
    meta?: any;
    badge?: any;
    is_active?: boolean;
    name?: string;
    _schedule?: any;
    app_id?: string;
    tag?: Array<string>;
    description?: string;
    visible_facets_keys?: Array<string>;
    action?: ProductListingAction;
    uid?: string;
};
type CollectionListingFilterTag = {
    display?: string;
    name?: string;
    is_selected?: boolean;
};
type CollectionListingFilterType = {
    display?: string;
    name?: string;
    is_selected?: boolean;
};
type CollectionListingFilter = {
    tags?: Array<CollectionListingFilterTag>;
    type?: Array<CollectionListingFilterType>;
};
type GetCollectionListingResponse = {
    page?: Page;
    items?: Array<GetCollectionDetailNest>;
    filters?: CollectionListingFilter;
};
type UserInfo = {
    email?: string;
    username?: string;
    user_id?: string;
    uid?: string;
};
type CollectionImage = {
    aspect_ratio: string;
    url: string;
};
type CollectionBanner = {
    portrait: CollectionImage;
    landscape: CollectionImage;
};
type CollectionBadge = {
    color?: string;
    text?: string;
};
type Schedule = {
    duration?: number;
    cron?: string;
    start?: string;
    end?: string;
};
type SeoDetail = {
    description?: string;
    title?: string;
};
type CreateCollection = {
    allow_sort?: boolean;
    slug: string;
    created_by?: UserInfo;
    type: string;
    banners: CollectionBanner;
    logo: CollectionImage;
    query?: any;
    allow_facets?: boolean;
    meta?: any;
    badge?: CollectionBadge;
    _locale_language?: any;
    sort_on?: string;
    tags?: Array<string>;
    is_active?: boolean;
    modified_by?: UserInfo;
    _custom_json?: any;
    name: string;
    _schedule?: Schedule;
    app_id: string;
    seo?: SeoDetail;
    description?: string;
    visible_facets_keys?: Array<string>;
    published?: boolean;
};
type CollectionCreateResponse = {
    allow_sort?: boolean;
    slug?: string;
    name?: string;
    visible_facets_keys?: Array<string>;
    type?: string;
    _schedule?: any;
    banners?: ImageUrls;
    cron?: any;
    app_id?: string;
    tag?: Array<string>;
    logo?: BannerImage;
    query?: any;
    allow_facets?: boolean;
    is_active?: boolean;
    meta?: any;
    badge?: any;
    description?: string;
};
type CollectionDetailResponse = {
    allow_sort?: boolean;
    slug?: string;
    name?: string;
    visible_facets_keys?: Array<string>;
    type?: string;
    _schedule?: any;
    banners?: ImageUrls;
    cron?: any;
    app_id?: string;
    tag?: Array<string>;
    logo?: Media1;
    query?: any;
    allow_facets?: boolean;
    is_active?: boolean;
    meta?: any;
    badge?: any;
    description?: string;
};
type Price1 = {
    currency_symbol?: string;
    currency_code?: string;
    min?: number;
    max?: number;
};
type ProductListingPrice = {
    effective?: Price1;
    marked?: Price1;
};
type ProductBrand = {
    action?: ProductListingAction;
    name?: string;
    logo?: Media1;
    uid?: number;
};
type ProductDetailAttribute = {
    key?: string;
    value?: string;
    type?: string;
};
type ProductDetailGroupedAttribute = {
    details?: Array<ProductDetailAttribute>;
    title?: string;
};
type ProductListingDetail = {
    slug: string;
    type?: string;
    teaser_tag?: any;
    item_code?: string;
    short_description?: string;
    sellable?: boolean;
    promo_meta?: any;
    price?: ProductListingPrice;
    similars?: Array<string>;
    item_type?: string;
    medias?: Array<Media1>;
    discount?: string;
    name?: string;
    tryouts?: Array<string>;
    color?: string;
    attributes?: any;
    rating_count?: number;
    highlights?: Array<string>;
    rating?: number;
    product_online_date?: string;
    brand?: ProductBrand;
    description?: string;
    has_variant?: boolean;
    uid?: number;
    image_nature?: string;
    grouped_attributes?: Array<ProductDetailGroupedAttribute>;
};
type GetCollectionItemsResponse = {
    page?: Page;
    items?: Array<ProductListingDetail>;
    filters?: Array<ProductFilters>;
    sort_on?: Array<ProductSortOn>;
};
type CollectionItemRequest = {
    page_size: number;
    page_no: number;
};
type UpdatedResponse = {
    message?: string;
};
type CatalogInsightItem = {
    out_of_stock_count?: number;
    sellable_count?: number;
    count?: number;
};
type CatalogInsightBrand = {
    available_articles?: number;
    name?: string;
    total_articles?: number;
    available_sizes?: number;
    article_freshness?: number;
    total_sizes?: number;
};
type CatalogInsightResponse = {
    item?: CatalogInsightItem;
    brand_distribution?: CatalogInsightBrand;
};
type CrossSellingData = {
    products?: number;
    articles?: number;
};
type CrossSellingResponse = {
    data?: CrossSellingData;
    brand_distribution?: CatalogInsightBrand;
};
type OptInPostRequest = {
    store_ids?: Array<number>;
    opt_level: string;
    enabled?: boolean;
    brand_ids?: Array<number>;
};
type CompanyOptIn = {
    platform: string;
    created_by?: any;
    company_id: number;
    brand_ids: Array<number>;
    enabled: boolean;
    store_ids: Array<number>;
    modified_on: number;
    opt_level: string;
    modified_by?: any;
    created_on: number;
};
type GetOptInPlatform = {
    page: Page;
    items: Array<CompanyOptIn>;
};
type OptinCompanyDetail = {
    company_type?: string;
    name?: string;
    business_type?: string;
    uid?: number;
};
type CompanyBrandDetail = {
    brand_id?: number;
    company_id?: number;
    brand_name?: string;
    total_article?: number;
};
type OptinCompanyBrandDetailsView = {
    page?: Page;
    items?: Array<CompanyBrandDetail>;
};
type OptinCompanyMetrics = {
    company?: string;
    store?: number;
    brand?: number;
};
type StoreDetail = {
    timing?: any;
    store_code?: string;
    name?: string;
    company_id?: number;
    store_type?: string;
    modified_on?: string;
    display_name?: string;
    additional_contacts?: Array<any>;
    created_on?: string;
    documents?: Array<any>;
    uid?: number;
};
type OptinStoreDetails = {
    page?: Page;
    items?: Array<StoreDetail>;
};
type AttributeMasterFilter = {
    indexing: boolean;
    depends_on?: Array<string>;
    priority?: number;
};
type AttributeSchemaRange = {
    min?: number;
    max?: number;
};
type AttributeMaster = {
    format?: string;
    type: string;
    allowed_values?: Array<string>;
    mandatory?: boolean;
    range?: AttributeSchemaRange;
    multi?: boolean;
};
type AttributeMasterDetails = {
    display_type: string;
};
type AttributeMasterMandatoryDetails = {
    l3_keys?: Array<string>;
};
type AttributeMasterMeta = {
    enriched?: boolean;
    mandatory_details: AttributeMasterMandatoryDetails;
};
type GenderDetail = {
    slug?: string;
    name?: string;
    filters?: AttributeMasterFilter;
    enabled_for_end_consumer?: boolean;
    schema?: AttributeMaster;
    is_nested?: boolean;
    id?: string;
    details?: AttributeMasterDetails;
    logo?: string;
    meta?: AttributeMasterMeta;
    description?: string;
    departments?: Array<string>;
};
type ProdcutTemplateCategoriesResponse = {
    page?: Page;
    items?: Array<any>;
};
type PTErrorResponse = {
    code?: string;
    message?: string;
    status?: number;
    meta?: any;
    errors?: any;
};
type UserSerializer = {
    user_id?: string;
    contact?: string;
    username?: string;
};
type GetDepartment = {
    synonyms?: Array<string>;
    slug?: string;
    name?: string;
    created_by?: UserSerializer;
    priority_order?: number;
    page_size?: number;
    item_type?: string;
    page_no?: number;
    logo?: string;
    search?: string;
    modified_on?: string;
    is_active?: boolean;
    modified_by?: UserSerializer;
    created_on?: string;
    uid?: number;
};
type DepartmentsResponse = {
    page?: Page;
    items?: Array<GetDepartment>;
};
type DepartmentErrorResponse = {
    code?: string;
    message?: string;
    status?: number;
    meta?: any;
    errors?: any;
};
type ProductTemplate = {
    slug: string;
    name?: string;
    created_by?: any;
    created_on?: string;
    attributes?: Array<string>;
    tag?: string;
    logo?: string;
    modified_on?: string;
    is_physical: boolean;
    is_active?: boolean;
    modified_by?: any;
    categories?: Array<string>;
    is_archived?: boolean;
    description?: string;
    departments?: Array<string>;
};
type TemplatesResponse = {
    page?: Page;
    items?: ProductTemplate;
};
type MultipleCommon = {
    uid?: string;
};
type TemplatesValidationResponse = {
    data?: MultipleCommon;
};
type InventoryValidationResponse = {
    message?: string;
    data?: MultipleCommon;
};
type HSNData = {
    country_of_origin?: Array<string>;
    hsn_code?: Array<string>;
};
type HSNCodesResponse = {
    message?: string;
    data?: HSNData;
};
type ProductConfligurationDownloads = {
    data?: Array<MultipleCommon>;
    multivalue?: boolean;
};
type CategoryMappingValues = {
    name: string;
    catalog_id?: number;
};
type CategoryMapping = {
    facebook?: CategoryMappingValues;
    google?: CategoryMappingValues;
    ajio?: CategoryMappingValues;
};
type Hierarchy = {
    department: number;
    l1: number;
    l2: number;
};
type Media2 = {
    portrait: string;
    landscape: string;
    logo: string;
};
type Category = {
    synonyms?: Array<string>;
    slug?: string;
    name: string;
    tryouts?: Array<string>;
    created_by?: any;
    marketplaces?: CategoryMapping;
    hierarchy?: Array<Hierarchy>;
    priority?: number;
    _id?: string;
    media?: Media2;
    modified_on?: string;
    is_active: boolean;
    modified_by?: any;
    created_on?: string;
    level: number;
    departments: Array<number>;
    uid?: number;
};
type CategoryResponse = {
    page?: Page;
    items?: Array<Category>;
};
type CategoryRequestBody = {
    synonyms?: Array<string>;
    slug?: string;
    name: string;
    tryouts?: Array<string>;
    marketplaces?: CategoryMapping;
    hierarchy?: Array<Hierarchy>;
    priority?: number;
    is_active: boolean;
    departments: Array<number>;
    level: number;
    media?: Media2;
};
type CategoryCreateResponse = {
    message?: string;
    uid?: number;
};
type CategoryUpdateResponse = {
    message?: string;
    success?: boolean;
};
type PageData = {
    item_total?: number;
    current?: string;
    has_next?: boolean;
    size?: number;
    has_previous?: boolean;
};
type ProductPublished = {
    product_online_date?: number;
    is_set?: boolean;
};
type VerifiedBy = {
    user_id?: string;
    username?: string;
};
type UserCommon = {
    user_id?: string;
    company_id?: number;
    username?: string;
};
type Attributes = {
    verified_by?: VerifiedBy;
    created_by?: UserCommon;
    modified_on?: string;
    essential?: string;
    material?: string;
    sleeve_length?: string;
    modified_by?: UserCommon;
    created_on?: string;
    primary_color?: string;
    primary_material?: string;
    color?: string;
    neck_type?: string;
    verified_on?: string;
    pattern?: string;
    stage?: string;
    product_fit?: string;
    is_image_less_product?: boolean;
    meta_nature?: string;
    image_nature?: string;
    l3_mapping?: Array<string>;
    gender?: Array<string>;
};
type Logo = {
    url?: string;
    aspect_ratio_f?: number;
    secure_url?: string;
    aspect_ratio?: string;
};
type Brand = {
    name?: string;
    logo?: Logo;
    uid?: number;
};
type Product = {
    slug?: string;
    all_sizes?: Array<string>;
    item_code?: string;
    multi_size?: boolean;
    hsn_code?: string;
    id?: string;
    currency?: string;
    item_type?: string;
    category_slug?: string;
    product_publish?: ProductPublished;
    is_set?: boolean;
    is_active?: boolean;
    name?: string;
    is_dependent?: boolean;
    attributes?: Attributes;
    country_of_origin?: string;
    highlights?: string;
    size_guide?: string;
    description?: string;
    brand?: Brand;
    sizes?: Array<any>;
    company_id?: number;
    images?: Array<string>;
    template_tag?: string;
    departments?: Array<number>;
    media?: Array<string>;
    uid?: number;
};
type ProductListingResponse = {
    page?: PageData;
    items?: Array<Product>;
};
type TeaserTag = {
    tag?: string;
    url?: string;
};
type ProductPublish = {
    product_online_date?: string;
    is_set?: boolean;
};
type OrderQuantity = {
    minimum?: number;
    maximum?: number;
    is_set?: boolean;
};
type ReturnConfig = {
    unit?: string;
    returnable?: boolean;
    time?: number;
};
type Trader = {
    address: string;
    name: string;
};
type CustomOrder = {
    is_custom_order?: boolean;
    manufacturing_time?: number;
    manufacturing_time_unit?: string;
};
type ProductCreateUpdate = {
    slug: string;
    teaser_tag?: TeaserTag;
    item_code: string;
    multi_size?: boolean;
    hsn_code: string;
    currency: string;
    short_description?: string;
    item_type: string;
    category_slug: string;
    product_group_tag?: Array<string>;
    product_publish?: ProductPublish;
    moq?: OrderQuantity;
    change_request_id?: string;
    tags?: Array<string>;
    is_set?: boolean;
    return_config?: ReturnConfig;
    is_active?: boolean;
    _custom_json?: any;
    name: string;
    is_dependent?: boolean;
    country_of_origin: string;
    variants?: any;
    highlights?: Array<string>;
    size_guide?: string;
    description?: string;
    no_of_boxes?: number;
    trader?: Trader;
    is_image_less_product?: boolean;
    brand_uid: number;
    company_id: number;
    custom_order?: CustomOrder;
    template_tag: string;
    departments: Array<number>;
    trader_type?: string;
    requester?: string;
    media?: Array<Media1>;
    uid?: number;
};
type ValidateProduct = {
    valid?: boolean;
};
type UserDetail = {
    user_id?: string;
    full_name?: string;
    username?: string;
};
type ProductBulkRequest = {
    template?: ProductTemplate;
    failed?: number;
    file_path?: string;
    created_by?: UserDetail;
    cancelled?: number;
    succeed?: number;
    company_id?: number;
    total?: number;
    modified_by?: UserDetail;
    template_tag?: string;
    stage?: string;
    modified_on?: string;
    is_active?: boolean;
    cancelled_records?: Array<string>;
    failed_records?: Array<string>;
    created_on?: string;
};
type ProductBulkRequestList = {
    page?: PageData;
    items?: ProductBulkRequest;
};
type UserInfo1 = {
    email?: string;
    username?: string;
    user_id?: string;
    uid?: string;
};
type BulkJob = {
    failed?: number;
    file_path?: string;
    created_by?: UserInfo1;
    cancelled?: number;
    succeed?: number;
    tracking_url?: string;
    company_id: number;
    total: number;
    failed_records?: Array<any>;
    template_tag?: string;
    modified_on?: string;
    stage?: string;
    is_active?: boolean;
    cancelled_records?: Array<any>;
    modified_by?: UserInfo1;
    created_on: string;
    custom_template_tag?: string;
};
type BulkProductRequest = {
    batch_id: string;
    company_id: number;
    data: Array<any>;
    template_tag: string;
};
type NestedTags = {
    tags?: Array<string>;
};
type ProductTagsViewResponse = {
    items?: NestedTags;
};
type Items = {
    failed?: number;
    created_by?: UserCommon;
    cancelled?: number;
    succeed?: number;
    tracking_url?: string;
    company_id?: number;
    total?: number;
    id?: string;
    failed_records?: Array<string>;
    retry?: number;
    modified_on?: string;
    stage?: string;
    file_path?: string;
    cancelled_records?: Array<string>;
    modified_by?: UserCommon;
    created_on?: string;
    is_active?: boolean;
};
type BulkAssetResponse = {
    page?: PageData;
    items?: Array<Items>;
};
type ProductBulkAssets = {
    company_id?: number;
    user: any;
    url: string;
};
type InventoryRequest = {
    page_size?: number;
    total?: number;
    page_no?: number;
    search?: string;
    size?: string;
};
type GTIN = {
    gtin_value: string;
    primary?: boolean;
    gtin_type: string;
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
    size_distribution: SizeDistribution;
};
type InvSize = {
    price_transfer?: number;
    item_dimensions_unit_of_measure?: string;
    store_code: string;
    identifiers: Array<GTIN>;
    price_effective: number;
    set?: InventorySet;
    item_length?: number;
    item_weight?: number;
    currency: string;
    is_set?: boolean;
    item_height?: number;
    item_weight_unit_of_measure?: string;
    item_width?: number;
    size: string;
    quantity: number;
    price: number;
};
type ItemQuery = {
    item_code?: string;
    brand_uid?: number;
    uid?: number;
};
type InventoryRequest1 = {
    sizes: Array<InvSize>;
    company_id: number;
    item: ItemQuery;
};
type BulkRequestGet = {
    end_date?: string;
    page_size?: number;
    total?: number;
    page_no?: number;
    start_date?: string;
    stage?: string;
    search?: string;
    template_tag?: string;
    custom_template_tag?: string;
};
type CommonResponse = {
    success?: string;
};
type Size1 = {
    price_transfer?: number;
    item_dimensions_unit_of_measure?: string;
    store_code: string;
    identifiers?: Array<any>;
    seller_identifier: string;
    price_effective: number;
    set?: InventorySet;
    item_length?: number;
    item_weight?: number;
    currency: string;
    is_set?: boolean;
    item_height?: number;
    item_weight_unit_of_measure?: string;
    item_width?: number;
    size?: string;
    quantity: number;
    price: number;
};
type InventoryBulkRequest = {
    sizes: Array<Size1>;
    company_id: number;
    user?: any;
    batch_id: string;
};
type InventoryExportJob = {
    task_id: string;
    status?: string;
    request_params?: any;
    trigger_on?: string;
    completed_on?: string;
    seller_id: number;
    url?: string;
};
type InventoryExportRequest = {
    brand?: Array<number>;
    store?: Array<number>;
    type?: string;
};
type FilerList = {
    display?: string;
    value?: string;
};
type InventoryConfig = {
    multivalues?: boolean;
    data?: Array<FilerList>;
};
type PageResponse = {
    item_total?: number;
    current?: string;
    has_next?: boolean;
    size?: number;
    has_previous?: boolean;
};
type HsnCodesObject = {
    threshold2?: number;
    tax_on_mrp?: boolean;
    hs2_code?: string;
    tax1?: number;
    tax2?: number;
    company_id?: number;
    hsn_code?: string;
    id?: string;
    threshold1?: number;
    modified_on?: string;
    tax_on_esp?: boolean;
};
type HsnCodesListingResponse = {
    page?: PageResponse;
    items?: Array<HsnCodesObject>;
};
type HsnUpsert = {
    threshold2?: number;
    tax_on_mrp: boolean;
    hs2_code: string;
    tax1: number;
    tax2?: number;
    company_id: number;
    hsn_code: string;
    threshold1: number;
    tax_on_esp?: boolean;
    uid?: number;
};
type HsnCode = {
    data?: HsnCodesObject;
};
type BulkHsnUpsert = {
    data: Array<HsnUpsert>;
};
type BulkHsnResponse = {
    success?: boolean;
};
type BrandItem = {
    slug?: string;
    name?: string;
    banners?: ImageUrls;
    logo?: Media;
    discount?: string;
    action?: ProductListingAction;
    departments?: Array<string>;
    uid?: number;
};
type BrandListingResponse = {
    page: Page;
    items?: Array<BrandItem>;
};
type Department = {
    slug?: string;
    name?: string;
    priority_order?: number;
    logo?: Media;
    uid?: number;
};
type DepartmentResponse = {
    items?: Array<Department>;
};
type CategoryItems = {
    slug?: string;
    name?: string;
    banners?: ImageUrls;
    childs?: Array<any>;
    action?: ProductListingAction;
    uid?: number;
};
type DepartmentCategoryTree = {
    department?: string;
    items?: Array<CategoryItems>;
};
type DepartmentIdentifier = {
    slug?: string;
    uid?: number;
};
type CategoryListingResponse = {
    data?: Array<DepartmentCategoryTree>;
    departments?: Array<DepartmentIdentifier>;
};
type ApplicationProductListingResponse = {
    page: Page;
    items?: Array<ProductListingDetail>;
    filters?: Array<ProductFilters>;
    sort_on?: Array<ProductSortOn>;
};
type ProductDetail = {
    slug: string;
    type?: string;
    teaser_tag?: any;
    item_code?: string;
    short_description?: string;
    promo_meta?: any;
    similars?: Array<string>;
    item_type?: string;
    medias?: Array<Media1>;
    name?: string;
    tryouts?: Array<string>;
    color?: string;
    attributes?: any;
    rating_count?: number;
    highlights?: Array<string>;
    rating?: number;
    product_online_date?: string;
    brand?: ProductBrand;
    description?: string;
    has_variant?: boolean;
    uid?: number;
    image_nature?: string;
    grouped_attributes?: Array<ProductDetailGroupedAttribute>;
};
type Document = {
    verified?: boolean;
    value: string;
    type: string;
    legal_name: string;
    url?: string;
};
type CompanyAddress = {
    state: string;
    city: string;
    landmark?: string;
    address1: string;
    country: string;
    country_code?: string;
    pincode: number;
    latitude: number;
    longitude: number;
    address2?: string;
};
type ReferralInfo = {
    referral_code?: string;
};
type BusinessCountryInfo = {
    country?: string;
    country_code?: string;
};
type CompanyStoreSerializerRequest = {
    uid?: number;
    document: Document;
    name: string;
    notification_emails?: Array<string>;
    address: CompanyAddress;
    warnings?: any;
    franchise_enabled?: boolean;
    referral_info?: ReferralInfo;
    business_info?: string;
    brands: Array<number>;
    business_country_info: BusinessCountryInfo;
    business_type: string;
};
type SellerPhoneNumber = {
    country_code: number;
    number: string;
};
type ContactDetails = {
    phone?: Array<SellerPhoneNumber>;
    emails?: Array<string>;
};
type GetAddressSerializer = {
    state?: string;
    city?: string;
    landmark?: string;
    address1?: string;
    country?: string;
    country_code?: string;
    pincode?: number;
    latitude?: number;
    longitude?: number;
    address_type?: string;
    address2?: string;
};
type Website = {
    url?: string;
};
type BusinessDetails = {
    website?: Website;
};
type BusinessCountryInfo1 = {
    country?: string;
    country_code?: string;
};
type GetCompanyProfileSerializerResponse = {
    contact_details?: ContactDetails;
    documents?: Array<Document>;
    warnings?: any;
    company_type: string;
    business_info?: string;
    modified_by?: UserSerializer;
    created_on?: string;
    addresses?: Array<GetAddressSerializer>;
    stage?: string;
    verified_on?: string;
    uid: number;
    name?: string;
    notification_emails?: Array<string>;
    verified_by?: UserSerializer;
    created_by?: UserSerializer;
    franchise_enabled?: boolean;
    modified_on?: string;
    business_details?: BusinessDetails;
    business_country_info?: BusinessCountryInfo1;
    business_type: string;
};
type DocumentsObj = {
    verified?: number;
    pending?: number;
};
type MetricsSerializer = {
    uid?: number;
    store?: DocumentsObj;
    product?: DocumentsObj;
    store_documents?: DocumentsObj;
    company_documents?: DocumentsObj;
    brand?: DocumentsObj;
    stage?: string;
};
type UserSerializer1 = {
    contact?: string;
    username?: string;
    user_id?: string;
};
type BrandBannerSerializer = {
    portrait?: string;
    landscape?: string;
};
type GetBrandResponseSerializer = {
    uid?: number;
    modified_by?: UserSerializer1;
    name: string;
    created_on?: string;
    logo?: string;
    banner?: BrandBannerSerializer;
    warnings?: any;
    verified_by?: UserSerializer1;
    slug_key?: string;
    description?: string;
    created_by?: UserSerializer1;
    _custom_json?: any;
    synonyms?: Array<string>;
    stage?: string;
    _locale_language?: any;
    verified_on?: string;
    reject_reason?: string;
    modified_on?: string;
};
type CreateUpdateBrandRequestSerializer = {
    uid?: number;
    name: string;
    logo: string;
    brand_tier?: string;
    banner?: BrandBannerSerializer;
    company_id?: number;
    description?: string;
    _custom_json?: any;
    synonyms?: Array<string>;
    _locale_language?: any;
};
type CompanyBrandPostRequestSerializer = {
    uid?: number;
    brands: Array<number>;
    company: number;
};
type GetCompanySerializer = {
    uid?: number;
    modified_by?: UserSerializer;
    name?: string;
    created_on?: string;
    addresses?: Array<GetAddressSerializer>;
    company_type?: string;
    verified_by?: UserSerializer;
    created_by?: UserSerializer;
    stage?: string;
    verified_on?: string;
    reject_reason?: string;
    business_type?: string;
    modified_on?: string;
};
type CompanyBrandSerializer = {
    uid?: number;
    modified_by?: UserSerializer1;
    created_on?: string;
    warnings?: any;
    verified_by?: UserSerializer1;
    created_by?: UserSerializer1;
    brand?: GetBrandResponseSerializer;
    company?: GetCompanySerializer;
    stage?: string;
    verified_on?: string;
    reject_reason?: string;
    modified_on?: string;
};
type CompanyBrandListSerializer = {
    items?: Array<CompanyBrandSerializer>;
    page?: Page;
};
type GetAddressSerializer1 = {
    state?: string;
    city?: string;
    landmark?: string;
    address1?: string;
    country?: string;
    country_code?: string;
    pincode?: number;
    latitude?: number;
    longitude?: number;
    address_type?: string;
    address2?: string;
};
type ProductReturnConfigSerializer = {
    store_uid?: number;
    on_same_store?: boolean;
};
type LocationManagerSerializer = {
    mobile_no: SellerPhoneNumber;
    name?: string;
    email?: string;
};
type LocationTimingSerializer = {
    hour?: number;
    minute?: number;
};
type LocationDayWiseSerializer = {
    closing?: LocationTimingSerializer;
    open: boolean;
    opening?: LocationTimingSerializer;
    weekday: string;
};
type InvoiceCredSerializer = {
    password?: string;
    username?: string;
    enabled?: boolean;
};
type InvoiceDetailsSerializer = {
    e_waybill?: InvoiceCredSerializer;
    e_invoice?: InvoiceCredSerializer;
};
type LocationSerializer = {
    uid?: number;
    store_type?: string;
    name: string;
    notification_emails?: Array<string>;
    documents?: Array<Document>;
    address: GetAddressSerializer1;
    warnings?: any;
    product_return_config?: ProductReturnConfigSerializer;
    display_name: string;
    code: string;
    manager?: LocationManagerSerializer;
    _custom_json?: any;
    company: number;
    timing?: Array<LocationDayWiseSerializer>;
    stage?: string;
    contact_numbers?: Array<SellerPhoneNumber>;
    gst_credentials?: InvoiceDetailsSerializer;
};
type LocationIntegrationType = {
    inventory?: string;
    order?: string;
};
type GetLocationSerializer = {
    integration_type?: LocationIntegrationType;
    documents?: Array<Document>;
    warnings?: any;
    _custom_json?: any;
    company?: GetCompanySerializer;
    contact_numbers?: Array<SellerPhoneNumber>;
    modified_by?: UserSerializer1;
    created_on?: string;
    product_return_config?: ProductReturnConfigSerializer;
    code: string;
    stage?: string;
    verified_on?: string;
    uid?: number;
    name: string;
    notification_emails?: Array<string>;
    verified_by?: UserSerializer1;
    manager?: LocationManagerSerializer;
    created_by?: UserSerializer1;
    gst_credentials?: InvoiceDetailsSerializer;
    modified_on?: string;
    store_type?: string;
    address: GetAddressSerializer;
    display_name: string;
    phone_number: string;
    timing?: Array<LocationDayWiseSerializer>;
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
    file_name: string;
    file_path: string;
    content_type: string;
    method: string;
    namespace: string;
    operation: string;
    size: number;
    upload: Upload;
    cdn: CDN;
};
type StartRequest = {
    file_name: string;
    content_type: string;
    size: number;
    tags?: Array<string>;
};
type CompleteResponse = {
    _id: string;
    file_name: string;
    file_path: string;
    content_type: string;
    method: string;
    namespace: string;
    operation: string;
    size: number;
    upload: Upload;
    cdn: CDN;
    success: string;
    tags?: Array<string>;
    created_on: string;
    modified_on: string;
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
    attempts_made: number;
    stacktrace?: Array<string>;
    finished_on: number;
    processed_on: number;
};
type BulkResponse = {
    tracking_url: string;
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
    signed_url: string;
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
    _id: string;
    file_name: string;
    operation?: string;
    namespace: string;
    content_type: string;
    file_path: string;
    upload: Upload;
    cdn: CDN;
    created_on: string;
    modified_on: string;
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
    force_web?: boolean;
};
type CampaignShortLink = {
    source?: string;
    medium?: string;
};
type Attribution = {
    campaign_cookie_expiry?: string;
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
    expire_at?: string;
    enable_tracking?: boolean;
    personalized?: boolean;
    campaign?: CampaignShortLink;
    redirects?: Redirects;
    attribution?: Attribution;
    social_media_tags?: SocialMediaTags;
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
    created_by?: string;
    app_redirect?: boolean;
    fallback?: string;
    active?: boolean;
    _id?: string;
    enable_tracking?: boolean;
    expire_at?: string;
    application?: string;
    user_id?: string;
    created_at?: string;
    updated_at?: string;
    personalized?: boolean;
    campaign?: CampaignShortLink;
    redirects?: Redirects;
    attribution?: Attribution;
    social_media_tags?: SocialMediaTags;
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
    min_price?: number;
    safe_stock?: number;
    period_threshold?: number;
    period_threshold_type?: string;
    period_type_list?: Array<GenericDTO>;
};
type GenericDTO = {
    text?: string;
    value?: any;
};
type JobConfigDTO = {
    integration: string;
    integration_data?: any;
    company_name?: string;
    company_id: number;
    task_details?: TaskDTO;
    threshold_details?: DataTresholdDTO;
    job_code?: string;
    alias?: string;
};
type TaskDTO = {
    type?: number;
    group_list?: Array<GenericDTO>;
};
type ResponseEnvelopeString = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    total_time_taken_in_millis?: number;
    http_status?: string;
    items?: string;
    payload?: string;
    trace_id?: string;
    page?: Page;
};
type AWSS3config = {
    bucket?: string;
    region?: string;
    dir?: string;
    access_key?: string;
    secret_key?: string;
    local_file_path?: string;
    archive_path?: string;
    archive?: boolean;
    delete?: boolean;
    unzip?: boolean;
    zip_format?: string;
    file_regex?: string;
    archive_config?: ArchiveConfig;
};
type ArchiveConfig = {
    delete?: boolean;
    archive?: boolean;
    archive_dir?: string;
};
type Audit = {
    created_by?: string;
    modified_by?: string;
    created_on?: string;
    modified_on?: string;
};
type CatalogMasterConfig = {
    source_slug?: string;
};
type CompanyConfig = {
    company_id?: number;
    exclude_steps?: Array<number>;
    hidden_closet_keys?: Array<string>;
    open_tags?: any;
    tax_identifiers?: Array<string>;
    delete_quantity_threshold?: number;
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
    driver_class?: string;
    jdbc_url?: string;
    optional_properties?: any;
};
type DBConnectionProfile = {
    inventory?: string;
};
type DBParamConfig = {
    params?: any;
};
type DefaultHeadersDTO = {
    store?: PropBeanDTO;
    intf_article_id?: PropBeanDTO;
    price_effective?: PropBeanDTO;
    quantity?: PropBeanDTO;
};
type DocMappingConfig = {
    properties?: any;
    junk_data_threshold_count?: number;
    prop_bean_configs?: Array<PropBeanConfig>;
    unwind_field?: string;
    default_headers?: DefaultHeadersDTO;
};
type EmailConfig = {
    recepient?: string;
    host?: string;
    username?: string;
    password?: string;
    unzip?: boolean;
    read_from_content?: boolean;
    filter_based_on_recepients?: boolean;
    pcol?: string;
    subject_line_regex?: string;
    sender_address?: string;
    local_dir?: string;
    folder_name_hierarchies?: Array<string>;
    attachment_regex?: string;
    body_content_regex?: string;
    password_protected?: boolean;
    zip_format?: string;
    attachment_mandate?: boolean;
    filter_files_after_extraction?: boolean;
    archive_config?: ArchiveConfig;
    read_all_unread_mails?: boolean;
    content_type?: string;
    downloadable_link?: boolean;
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
    local_dir?: string;
    remote_dir?: string;
    zip_file_regex?: string;
    archive_config?: ArchiveConfig;
    file_regex?: string;
    zip_format?: string;
    read_all_files?: boolean;
};
type FileConfig = {
    delimiter?: string;
    charset?: string;
    properties?: any;
    file_has_header?: boolean;
    header_index?: number;
    header_array?: Array<string>;
    data_start_index?: number;
    prop_bean_configs?: Array<PropBeanConfig>;
    junk_data_threshold_count?: number;
    file_type?: string;
    line_validity_check?: boolean;
    sheet_names?: Array<string>;
    read_all_sheets?: boolean;
    quote_char?: string;
    escape_char?: string;
    default_headers?: DefaultHeadersDTO;
};
type GoogleSpreadSheetConfig = {
    range?: string;
    sheet_id?: string;
    client_secret_location?: string;
    cred_storage_directory?: string;
    local_dir?: string;
    archive_config?: ArchiveConfig;
};
type HttpConfig = {
    hosturl?: string;
    username?: string;
    password?: string;
    request_params?: any;
    http_method?: string;
    request_payload?: string;
    local_path?: string;
    archive_config?: ArchiveConfig;
};
type JobConfig = {
    _id?: number;
    job_code?: string;
    task_type?: string;
    sync_delay?: number;
    cron_expression?: string;
    store_filter?: StoreFilter;
    process_config?: ProcessConfig;
    store_config?: Array<StoreConfig>;
    properties?: any;
    immediate_first_run?: boolean;
    disable?: boolean;
    dependent_job_codes?: Array<string>;
    company_config?: Array<CompanyConfig>;
    company_ids?: Array<number>;
    tax_identifiers?: Array<string>;
    priority?: string;
    period_threshold?: number;
    period_threshold_type?: string;
    db_connection_profile?: DBConnectionProfile;
    params?: any;
    open_tags?: any;
    delete_quantity_threshold?: number;
    catalog_master_config?: CatalogMasterConfig;
    aggregator_types?: Array<string>;
    integration_type?: string;
    min_price?: number;
    audit?: Audit;
    version?: number;
    alias?: string;
};
type JobConfigRawDTO = {
    integration: string;
    company_name: string;
    company_id: number;
    data?: JobConfig;
};
type JsonDocConfig = {
    prop_bean_configs?: Array<PropBeanConfig>;
};
type LocalFileConfig = {
    retries?: number;
    interval?: number;
    local_dir?: string;
    working_dir?: string;
    unzip?: boolean;
    zip_file_regex?: string;
    file_regex?: string;
    zip_format?: string;
    archive_config?: ArchiveConfig;
    read_all_files?: boolean;
};
type MongoDocConfig = {
    collection_name?: string;
    find_query?: any;
    projection_query?: any;
    prop_bean_configs?: Array<PropBeanConfig>;
    aggregate_pipeline?: Array<any>;
    skip_save?: boolean;
};
type OAuthConfig = {
    limit?: number;
    pages?: number;
    interval?: number;
    consumer_key?: string;
    consumer_secret?: string;
    token?: string;
    token_secret?: string;
    rest_url?: string;
    rest_base_url?: string;
    function_name?: string;
};
type ProcessConfig = {
    db_config?: DBConfig;
    db_param_config?: DBParamConfig;
    sftp_config?: SFTPConfig;
    aws_s3_config?: AWSS3config;
    mongo_doc_config?: MongoDocConfig;
    ftp_config?: FTPConfig;
    email_config?: EmailConfig;
    file_config?: FileConfig;
    json_doc_config?: JsonDocConfig;
    doc_mapping_config?: DocMappingConfig;
    task_step_config?: TaskStepConfig;
    http_config?: HttpConfig;
    local_file_config?: LocalFileConfig;
    oauth_config?: OAuthConfig;
    google_spreadsheet_config?: GoogleSpreadSheetConfig;
};
type PropBeanConfig = {
    required?: boolean;
    mapping?: any;
    optional?: boolean;
    send?: Send;
    validations?: Array<any>;
    values?: Array<string>;
    include?: boolean;
    source_field?: string;
    source_fields?: Array<string>;
    destination_field?: string;
    data_type?: string;
    default_value?: any;
    const_value?: any;
    concat_str?: string;
    function_name?: string;
    transformer_name?: string;
    all_param_function_name?: string;
    sub_separator?: string;
    index_field?: string;
    ignore_if_not_exists?: boolean;
    identifier_type?: string;
    projection_query?: any;
    enrich_from_master?: boolean;
};
type PropBeanDTO = {
    required?: boolean;
    optional?: boolean;
    include?: boolean;
    source_field?: string;
    source_fields?: Array<string>;
    destination_field?: string;
    data_type?: string;
    default_value?: any;
    const_value?: any;
    concat_str?: string;
    function_name?: string;
    transformer_name?: string;
    all_param_function_name?: string;
    sub_separator?: string;
    index_field?: string;
    ignore_if_not_exists?: boolean;
    identifier_type?: string;
    projection_query?: any;
    enrich_from_master?: boolean;
};
type ResponseEnvelopeListJobConfigRawDTO = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    total_time_taken_in_millis?: number;
    http_status?: string;
    items?: Array<JobConfigRawDTO>;
    payload?: Array<JobConfigRawDTO>;
    trace_id?: string;
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
    private_key_path?: string;
    strict_host_key_checking?: boolean;
    local_dir?: string;
    remote_dir?: string;
    password_protected?: boolean;
    zip_file_regex?: string;
    file_regex?: string;
    zip_format?: string;
    archive_config?: ArchiveConfig;
    read_all_files?: boolean;
};
type Send = {
    raw?: boolean;
    processed?: boolean;
};
type StoreConfig = {
    job_code?: string;
    storeid?: string;
    store_alias?: string;
    store_file_regex?: string;
    store_file_name?: string;
    process_config?: ProcessConfig;
    properties?: any;
};
type StoreFilter = {
    include_tags?: Array<string>;
    exclude_tags?: Array<string>;
    query?: any;
};
type TaskConfig = {
    name?: string;
    task_config_id?: number;
    task_params?: Array<TaskParam>;
};
type TaskParam = {
    name?: string;
    value?: any;
};
type TaskStepConfig = {
    task_configs?: Array<TaskConfig>;
    task_config_ids?: Array<number>;
    task_config_group_ids?: Array<number>;
};
type ResponseEnvelopeListJobConfigDTO = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    total_time_taken_in_millis?: number;
    http_status?: string;
    items?: Array<JobConfigDTO>;
    payload?: Array<JobConfigDTO>;
    trace_id?: string;
    page?: Page;
};
type ResponseEnvelopeJobConfigDTO = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    total_time_taken_in_millis?: number;
    http_status?: string;
    items?: JobConfigDTO;
    payload?: JobConfigDTO;
    trace_id?: string;
    page?: Page;
};
type JobConfigListDTO = {
    code?: string;
    alias?: string;
    modified_by?: string;
    created_by?: string;
    modified_on?: string;
    created_on?: string;
    active?: boolean;
    type?: string;
};
type ResponseEnvelopeListJobConfigListDTO = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    total_time_taken_in_millis?: number;
    http_status?: string;
    items?: Array<JobConfigListDTO>;
    payload?: Array<JobConfigListDTO>;
    trace_id?: string;
    page?: Page;
};
type ApplicationInventory = {
    inventory?: AppInventoryConfig;
    authentication?: AuthenticationConfig;
    article_assignment?: ArticleAssignmentConfig;
    reward_points?: RewardPointsConfig;
    cart?: AppCartConfig;
    payment?: AppPaymentConfig;
    order?: AppOrderConfig;
    logistics?: AppLogisticsConfig;
    business?: string;
    comms_enabled?: boolean;
    platforms?: Array<string>;
    _id?: string;
    loyalty_points?: LoyaltyPoints;
    app?: string;
    created_at?: string;
    updated_at?: string;
    modified_by?: string;
};
type AppInventoryConfig = {
    brand?: InventoryBrand;
    store?: InventoryStore;
    category?: InventoryCategory;
    price?: InventoryPrice;
    discount?: InventoryDiscount;
    out_of_stock?: boolean;
    franchise_enabled?: boolean;
    exclude_category?: Array<any>;
    image?: Array<string>;
    company_store?: Array<any>;
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
    post_order_reassignment?: boolean;
    enforced_stores?: Array<any>;
};
type ArticleAssignmentRules = {
    store_priority?: StorePriority;
};
type StorePriority = {
    enabled?: boolean;
    storetype_order?: Array<any>;
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
    auto_apply?: boolean;
    strategy_channel?: string;
};
type AppCartConfig = {
    delivery_charges?: DeliveryCharges;
    enabled?: boolean;
    max_cart_items?: number;
    min_cart_value?: number;
    bulk_coupons?: boolean;
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
    callback_url?: CallbackUrl;
    methods?: Methods;
    payment_selection_lock?: PaymentSelectionLock;
    mode_of_payment?: string;
    source?: string;
    enabled?: boolean;
    cod_amount_limit?: number;
    cod_charges?: number;
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
    default_options?: string;
    payment_identifier?: string;
};
type AppOrderConfig = {
    enabled?: boolean;
    force_reassignment?: boolean;
};
type AppLogisticsConfig = {
    logistics_by_seller?: boolean;
    serviceability_check?: boolean;
    same_day_delivery?: boolean;
    dp_assignment?: boolean;
};
type LoyaltyPoints = {
    enabled?: boolean;
    auto_apply?: boolean;
};
type AppInventoryPartialUpdate = {
    reward_points?: RewardPointsConfig;
    cart?: AppCartConfig;
    payment?: AppPaymentConfig;
    loyalty_points?: LoyaltyPoints;
    comms_enabled?: boolean;
};
type BrandCompanyInfo = {
    company_name?: string;
    company_id?: number;
};
type CompanyByBrandsRequest = {
    brands: number;
    search_text?: string;
};
type CompanyByBrandsResponse = {
    items?: Array<BrandCompanyInfo>;
    page?: Page;
};
type StoreByBrandsRequest = {
    company_id?: number;
    brands: number;
    search_text?: string;
};
type StoreByBrandsResponse = {
    items?: Array<BrandStoreInfo>;
    page?: Page;
};
type BrandStoreInfo = {
    store_name?: string;
    store_id?: number;
    store_type?: string;
    store_code?: string;
    store_address?: OptedStoreAddress;
    company?: OptedCompany;
};
type CompanyBrandInfo = {
    name?: string;
    value?: number;
    brand_logo_url?: string;
    brand_banner_url?: string;
    brand_banner_portrait_url?: string;
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
    is_active?: boolean;
    _id?: string;
    app_name?: string;
    landing_image?: LandingImage;
    splash_image?: SplashImage;
    application?: string;
    platform_type?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
    package_name?: string;
};
type LandingImage = {
    aspect_ratio?: string;
    secure_url?: string;
};
type SplashImage = {
    aspect_ratio?: string;
    secure_url?: string;
};
type MobileAppConfigRequest = {
    app_name?: string;
    landing_image?: LandingImage;
    splash_image?: SplashImage;
    is_active?: boolean;
};
type BuildVersionHistory = {
    versions?: BuildVersion;
    latest_available_version_name?: string;
};
type BuildVersion = {
    _id?: string;
    application?: string;
    platform_type?: string;
    build_status?: string;
    version_name?: string;
    version_code?: number;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type AppSupportedCurrency = {
    _id?: string;
    supported_currency?: Array<string>;
    application?: string;
    default_currency?: DefaultCurrency;
    created_at?: string;
    updated_at?: string;
};
type DefaultCurrency = {
    ref?: string;
    code?: string;
};
type CurrencyConfig = {
    _id?: string;
    is_active?: boolean;
    name?: string;
    code?: string;
    created_at?: string;
    updated_at?: string;
    decimal_digits?: number;
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
    _id?: string;
};
type UpdateDomainTypeRequest = {
    domain?: UpdateDomain;
    action?: string;
};
type DomainStatusRequest = {
    domain_url?: string;
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
    domain_url?: string;
    custom?: boolean;
};
type DomainSuggestion = {
    name: string;
    unsupported?: boolean;
    is_available: boolean;
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
    description_html?: string;
    constants?: string;
    companies?: Array<any>;
    support?: Array<string>;
    _id?: string;
    name?: string;
    meta?: IntegrationMeta;
    icon?: string;
    owner?: string;
    created_at?: string;
    updated_at?: string;
    token?: string;
    secret?: string;
    __v?: number;
};
type Validators = {
    company?: CompanyValidator;
    store?: StoreValidator;
    inventory?: InventoryValidator;
    order?: OrderValidator;
};
type CompanyValidator = {
    json_schema?: JsonSchema;
    browser_script?: string;
};
type JsonSchema = {
    display?: string;
    key?: string;
    type?: string;
    tooltip?: string;
};
type StoreValidator = {
    json_schema?: Array<JsonSchema>;
    browser_script?: string;
};
type InventoryValidator = {
    json_schema?: Array<JsonSchema>;
    browser_script?: string;
};
type OrderValidator = {
    json_schema?: Array<JsonSchema>;
    browser_script?: string;
};
type IntegrationMeta = {
    is_public?: boolean;
    _id?: string;
    name?: string;
    value?: string;
};
type Integration = {
    validators?: Validators;
    description?: string;
    description_html?: string;
    constants?: any;
    companies?: Array<any>;
    support?: Array<string>;
    _id?: string;
    name?: string;
    meta?: IntegrationMeta;
    icon?: string;
    owner?: string;
    created_at?: string;
    updated_at?: string;
    token?: string;
    secret?: string;
    __v?: number;
};
type IntegrationConfigResponse = {
    items?: IntegrationLevel;
};
type IntegrationLevel = {
    opted?: boolean;
    permissions?: Array<any>;
    last_patch?: Array<any>;
    _id?: string;
    integration?: string;
    level?: string;
    uid?: number;
    meta?: Array<any>;
    token?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
    data?: any;
};
type OptedStoreIntegration = {
    other_opted?: boolean;
    other_integration?: IntegrationOptIn;
    other_entity?: OtherEntity;
};
type OtherEntity = {
    opted?: boolean;
    permissions?: Array<string>;
    last_patch?: LastPatch;
    _id?: string;
    integration?: string;
    level?: string;
    uid?: number;
    data?: OtherEntityData;
    meta?: Array<any>;
    token?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type LastPatch = {
    op?: string;
    path?: string;
    value?: string;
};
type OtherEntityData = {
    article_identifier?: string;
};
type App = {
    company_id?: string;
    channel_type?: string;
    auth?: ApplicationAuth;
    name?: string;
    desc?: string;
};
type AppInventory = {
    brand?: InventoryBrandRule;
    store?: InventoryStoreRule;
    image?: Array<string>;
    franchise_enabled?: boolean;
    out_of_stock?: boolean;
    payment?: InventoryPaymentConfig;
    article_assignment?: InventoryArticleAssignment;
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
    company_type?: string;
};
type StoresResponse = {
    items?: AppInventoryStores;
    page?: Page;
};
type AppInventoryStores = {
    _id?: string;
    modified_on?: string;
    uid?: number;
    name?: string;
    display_name?: string;
    store_type?: string;
    store_code?: string;
    company_id?: number;
};
type FilterOrderingStoreRequest = {
    all_stores?: boolean;
    deployed_stores?: Array<number>;
    q?: string;
};
type DeploymentMeta = {
    deployed_stores?: Array<number>;
    all_stores?: boolean;
    enabled?: boolean;
    type?: string;
    _id?: string;
    app?: string;
    __v?: number;
};
type OrderingStoreConfig = {
    deployment_meta?: DeploymentMeta;
};
type OtherSellerCompany = {
    uid?: number;
    name?: string;
};
type OtherSellerApplication = {
    name?: string;
    description?: string;
    _id?: string;
    domain?: string;
    company?: OtherSellerCompany;
    opt_type?: string;
};
type OtherSellerApplications = {
    items?: Array<OtherSellerApplication>;
    page?: Page;
};
type OptedApplicationResponse = {
    name?: string;
    description?: string;
    _id?: string;
    domain?: string;
    company?: OptedCompany;
    opted_inventory?: OptedInventory;
    opt_out_inventory?: OptOutInventory;
};
type OptedCompany = {
    uid?: number;
    name?: string;
};
type OptedInventory = {
    opt_type?: OptType;
    items?: any;
};
type OptType = {
    key?: string;
    display?: string;
};
type OptedStore = {
    name?: string;
    store_code?: string;
    _id?: string;
    modified_on?: string;
    uid?: number;
    address?: OptedStoreAddress;
    display_name?: string;
    store_type?: string;
    company_id?: number;
};
type OptOutInventory = {
    store: Array<number>;
    company: Array<number>;
};
type ProductDetailFeature = {
    similar?: Array<string>;
    seller_selection?: boolean;
    update_product_meta?: boolean;
    request_product?: boolean;
};
type LaunchPage = {
    page_type?: string;
    params?: any;
    query?: any;
};
type LandingPageFeature = {
    launch_page?: LaunchPage;
    continue_as_guest?: boolean;
    login_btn_text?: string;
    show_domain_textbox?: boolean;
    show_register_btn?: boolean;
};
type RegistrationPageFeature = {
    ask_store_address?: boolean;
};
type AppFeature = {
    product_detail?: ProductDetailFeature;
    landing_page?: LandingPageFeature;
    registration_page?: RegistrationPageFeature;
    home_page?: HomePageFeature;
    common?: CommonFeature;
    cart?: CartFeature;
    qr?: QrFeature;
    pcr?: PcrFeature;
    order?: OrderFeature;
    _id?: string;
    app?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type HomePageFeature = {
    order_processing?: boolean;
};
type CommonFeature = {
    communication_optin_dialog?: CommunicationOptinDialogFeature;
    deployment_store_selection?: DeploymentStoreSelectionFeature;
    listing_price?: ListingPriceFeature;
    listing_page?: ListingPageFeature;
    currency?: CurrencyFeature;
    revenue_engine?: RevenueEngineFeature;
    feedback?: FeedbackFeature;
    compare_products?: CompareProductsFeature;
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
    sort_on?: string;
};
type CurrencyFeature = {
    value?: Array<string>;
    type?: string;
    default_currency?: string;
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
    gst_input?: boolean;
    staff_selection?: boolean;
    placing_for_customer?: boolean;
    google_map?: boolean;
};
type QrFeature = {
    application?: boolean;
    products?: boolean;
    collections?: boolean;
};
type PcrFeature = {
    staff_selection?: boolean;
};
type OrderFeature = {
    buy_again?: boolean;
};
type AppFeatureRequest = {
    feature?: AppFeature;
};
type AppFeatureResponse = {
    feature?: AppFeature;
};
type Currency = {
    _id?: string;
    is_active?: boolean;
    name?: string;
    code?: string;
    created_at?: string;
    updated_at?: string;
    decimal_digits?: number;
    symbol?: string;
};
type Domain = {
    verified?: boolean;
    is_primary?: boolean;
    is_default?: boolean;
    is_shortlink?: boolean;
    _id?: string;
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
    redirect_to?: string;
    type?: string;
};
type ApplicationMeta = {
    name?: string;
    value?: string;
};
type SecureUrl = {
    secure_url?: string;
};
type Application = {
    website?: ApplicationWebsite;
    cors?: ApplicationCors;
    auth?: ApplicationAuth;
    description?: string;
    channel_type?: string;
    cache_ttl?: number;
    is_internal?: boolean;
    is_active?: boolean;
    _id?: string;
    name?: string;
    owner?: string;
    company_id?: number;
    token?: string;
    redirections?: Array<ApplicationRedirections>;
    meta?: Array<ApplicationMeta>;
    created_at?: string;
    updated_at?: string;
    __v?: number;
    banner?: SecureUrl;
    logo?: SecureUrl;
    favicon?: SecureUrl;
    domains?: Array<Domain>;
    app_type?: string;
    mobile_logo?: SecureUrl;
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
    mode_of_payment?: string;
    source?: string;
};
type StorePriorityRule = {
    enabled?: boolean;
    storetype_order?: Array<string>;
};
type ArticleAssignmentRule = {
    store_priority?: StorePriorityRule;
};
type InventoryArticleAssignment = {
    post_order_reassignment?: boolean;
    enforced_stores?: Array<number>;
    rules?: ArticleAssignmentRule;
};
type CompanyAboutAddress = {
    pincode?: number;
    address1?: string;
    address2?: string;
    city?: string;
    state?: string;
    country?: string;
    address_type?: string;
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
    country_code?: number;
    phone?: string;
};
type ApplicationInformation = {
    address?: InformationAddress;
    support?: InformationSupport;
    social_links?: SocialLinks;
    links?: Links;
    copyright_text?: string;
    _id?: string;
    business_highlights?: BusinessHighlights;
    application?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type InformationAddress = {
    loc?: string;
    address_line?: Array<string>;
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
    google_plus?: GooglePlus;
    youtube?: Youtube;
    linked_in?: LinkedIn;
    vimeo?: Vimeo;
    blog_link?: BlogLink;
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
    _id?: string;
    title?: string;
    icon?: string;
    sub_title?: string;
};
type ApplicationDetail = {
    name: string;
    description: string;
    logo: SecureUrl;
    mobile_logo: SecureUrl;
    favicon: SecureUrl;
    banner: SecureUrl;
    domain?: Domain;
    domains?: Array<Domain>;
    _id?: string;
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
    lat_long?: StoreLatLong;
    address2?: string;
    pincode?: number;
    country?: string;
    city?: string;
};
type OrderingStore = {
    address?: OptedStoreAddress;
    _id?: string;
    uid?: number;
    name?: string;
    display_name?: string;
    store_type?: string;
    store_code?: string;
    pincode?: number;
    code?: string;
};
type OrderingStores = {
    page?: Page;
    items?: Array<OrderingStore>;
    deployed_stores?: Array<number>;
    all_stores?: boolean;
    enabled?: boolean;
    type?: string;
    _id?: string;
    app?: string;
    __v?: number;
};
type TokenResponse = {
    tokens?: Tokens;
    _id?: string;
    application?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type Tokens = {
    firebase?: Firebase;
    moengage?: Moengage;
    segment?: Segment;
    gtm?: Gtm;
    freshchat?: Freshchat;
    safetynet?: Safetynet;
    fynd_rewards?: FyndRewards;
    auth?: Auth;
    google_map?: GoogleMap;
};
type Firebase = {
    credentials?: Credentials;
    enabled?: boolean;
};
type Credentials = {
    ios?: Ios;
    android?: Android;
    project_id?: string;
    gcm_sender_id?: string;
    application_id?: string;
    api_key?: string;
};
type Ios = {
    application_id?: string;
    api_key?: string;
};
type Android = {
    application_id?: string;
    api_key?: string;
};
type Moengage = {
    credentials?: MoengageCredentials;
    enabled?: boolean;
};
type MoengageCredentials = {
    app_id?: string;
};
type Segment = {
    credentials?: SegmentCredentials;
    enabled?: boolean;
};
type SegmentCredentials = {
    write_key?: string;
};
type Gtm = {
    credentials?: GtmCredentials;
    enabled?: boolean;
};
type GtmCredentials = {
    api_key?: string;
};
type Freshchat = {
    credentials?: FreshchatCredentials;
    enabled?: boolean;
};
type FreshchatCredentials = {
    app_id?: string;
    app_key?: string;
    web_token?: string;
};
type Safetynet = {
    credentials?: SafetynetCredentials;
    enabled?: boolean;
};
type SafetynetCredentials = {
    api_key?: string;
};
type FyndRewards = {
    credentials?: FyndRewardsCredentials;
};
type FyndRewardsCredentials = {
    public_key?: string;
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
    api_key?: string;
};
type Rule = {
    max?: number;
    value?: number;
    key?: number;
    min?: number;
    discount_qty?: number;
};
type DisplayMetaDict = {
    subtitle?: string;
    title?: string;
};
type DisplayMeta = {
    subtitle?: string;
    apply?: DisplayMetaDict;
    auto?: DisplayMetaDict;
    description?: string;
    remove?: DisplayMetaDict;
    title?: string;
};
type Identifier = {
    item_id?: Array<number>;
    brand_id?: Array<number>;
    category_id?: Array<number>;
    article_id?: Array<string>;
    collection_id?: Array<string>;
    store_id?: Array<number>;
    user_id?: Array<string>;
    company_id?: Array<number>;
};
type RuleDefinition = {
    type: string;
    value_type: string;
    calculate_on: string;
    auto_apply?: boolean;
    currency_code?: string;
    is_exact?: boolean;
    scope?: Array<string>;
    applicable_on: string;
};
type Validity = {
    priority?: number;
};
type CouponAction = {
    txn_mode?: string;
    action_date?: string;
};
type CouponSchedule = {
    start?: string;
    duration?: number;
    next_schedule?: Array<any>;
    cron?: string;
    end?: string;
};
type Validation = {
    user_registered_after?: string;
    anonymous?: boolean;
    app_id?: Array<string>;
};
type State = {
    is_display?: boolean;
    is_public?: boolean;
    is_archived?: boolean;
};
type PriceRange = {
    max?: number;
    min?: number;
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
    wl?: PaymentModes;
    nb?: PaymentModes;
    upi?: PaymentModes;
    qr?: PaymentModes;
    ps?: PaymentModes;
    pl?: PaymentModes;
    card?: PaymentModes;
};
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
};
type UsesRemaining = {
    user?: number;
    total?: number;
    app?: number;
};
type UsesRestriction = {
    remaining?: UsesRemaining;
    maximum?: UsesRemaining;
};
type PostOrder = {
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
};
type Restrictions = {
    price_range?: PriceRange;
    payments?: PaymentCodes;
    ordering_stores?: Array<number>;
    bulk_bundle?: BulkBundleRestriction;
    uses?: UsesRestriction;
    platforms?: Array<string>;
    post_order?: PostOrder;
    coupon_allowed?: boolean;
};
type CouponDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type CouponAuthor = {
    modified_by?: string;
    created_by?: string;
};
type Ownership = {
    payable_by: string;
    payable_category: string;
};
type CouponAdd = {
    rule: Array<Rule>;
    display_meta: DisplayMeta;
    identifiers: Identifier;
    rule_definition: RuleDefinition;
    validity: Validity;
    action?: CouponAction;
    _schedule?: CouponSchedule;
    validation?: Validation;
    state?: State;
    tags?: Array<string>;
    code: string;
    type_slug: string;
    restrictions?: Restrictions;
    date_meta?: CouponDateMeta;
    author?: CouponAuthor;
    ownership: Ownership;
};
type CouponsResponse = {
    page?: Page;
    items?: CouponAdd;
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
    rule: Array<Rule>;
    display_meta: DisplayMeta;
    identifiers: Identifier;
    rule_definition: RuleDefinition;
    validity: Validity;
    action?: CouponAction;
    _schedule?: CouponSchedule;
    validation?: Validation;
    state?: State;
    tags?: Array<string>;
    code: string;
    type_slug: string;
    restrictions?: Restrictions;
    date_meta?: CouponDateMeta;
    author?: CouponAuthor;
    ownership: Ownership;
};
type CouponPartialUpdate = {
    archive?: boolean;
    schedule?: CouponSchedule;
};
type StoreMapping = {
    enabled?: string;
    marketplace_store_id?: string;
    store_id?: number;
    meta?: any;
};
type AllChannels = {
    mkp_name?: boolean;
};
type MyntraPayload = {
    merchant_id?: string;
    secret_key?: string;
};
type AmazonPayload = {
    seller_id?: string;
    mws_auth_token?: string;
};
type FlipkartPayload = {
    code?: string;
};
type TatacliqPayload = {
    user_name?: string;
    password?: string;
    merchant_id?: string;
};
type AjioPayload = {
    username?: string;
    password?: string;
    client_ip?: string;
};
type InventorySyncConfig = {
    inventory?: boolean;
    price?: boolean;
};
type StoreMappingPayload = {
    store_mapping_enabled?: boolean;
    store_mapping?: Array<StoreMapping>;
};
type StatusPayload = {
    is_active?: boolean;
};
type StatusResp = {
    is_active?: boolean;
};
type SyncPayload = {
    modified_since?: string;
};
type SyncResp = {
    message?: string;
};
type MkpResp = {
    marketplace?: string;
    worker?: number;
    worker_assigned?: string;
    is_active?: boolean;
    store_mapping_enabled?: boolean;
    company_id?: number;
    configuration?: any;
    store_mapping?: Array<StoreMapping>;
};
type AppUser = {
    _id?: string;
    active?: boolean;
    application_id?: string;
    block_reason?: string;
    updated_at?: string;
    updated_by?: string;
    user_id?: string;
};
type E = {
    code?: any;
    exception?: string;
    info?: string;
    message?: string;
    request_id?: string;
    stack_trace?: string;
    status?: number;
};
type Giveaway = {
    _id?: string;
    _schedule?: Schedule;
    active?: boolean;
    application_id?: string;
    audience?: RewardsAudience;
    banner_image?: Asset;
    created_at?: string;
    description?: string;
    rule?: RewardsRule;
    title?: string;
    updated_at?: string;
};
type GiveawayResponse = {
    items?: Array<Giveaway>;
    page?: Page;
};
type HistoryPretty = {
    _id?: string;
    application_id?: string;
    claimed?: boolean;
    created_at?: string;
    expires_on?: string;
    points?: number;
    remaining_points?: number;
    text_1?: string;
    text_2?: string;
    text_3?: string;
    txn_name?: string;
    updated_at?: string;
    user_id?: string;
};
type HistoryRes = {
    items?: Array<HistoryPretty>;
    page?: Page;
    points?: number;
};
type Offer = {
    _schedule?: Schedule;
    active?: boolean;
    application_id?: string;
    banner_image?: Asset;
    created_at?: string;
    name?: string;
    rule?: any;
    share?: ShareMessages;
    sub_text?: string;
    text?: string;
    type?: string;
    updated_at?: string;
    updated_by?: string;
    url?: string;
};
type Points = {
    available?: number;
};
type Referral = {
    code?: string;
};
type RewardUser = {
    _id?: string;
    active?: boolean;
    created_at?: string;
    referral?: Referral;
    uid?: number;
    updated_at?: string;
    user_block_reason?: string;
    user_id?: string;
};
type RewardsAudience = {
    header_user_id?: string;
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
    properties_cart_id?: string;
    context_traits_first_name?: string;
    context_traits_last_name?: string;
    context_traits_phone_number?: string;
    context_traits_email?: string;
    context_app_application_id?: string;
    properties_breakup_values_raw_total?: string;
    received_at?: ReceivedAt;
};
type AbandonCartsList = {
    items?: Array<AbandonCartsDetail>;
    cart_total?: string;
    page?: Page;
};
type AbandonCartDetail = {
    _id?: string;
    user_id?: string;
    cart_value?: string;
    articles?: Array<any>;
    breakup?: any;
    address?: any;
};
type ExportJobReq = {
    marketplace_name?: string;
    start_time?: string;
    end_time?: string;
    event_type?: string;
    trace_id?: string;
};
type ExportJobRes = {
    status?: string;
    job_id?: string;
};
type ExportJobStatusRes = {
    status?: string;
    job_id?: string;
    download_url?: string;
};
type GetLogsListReq = {
    marketplace_name?: string;
    start_date?: string;
    company_id?: string;
    end_date?: string;
};
type MkpLogsResp = {
    start_time_iso?: string;
    end_time_iso?: string;
    event_type?: string;
    trace_id?: string;
    count?: string;
    status?: string;
};
type GetLogsListRes = {
    items?: Array<MkpLogsResp>;
    page?: Page;
};
type SearchLogReq = {
    marketplace_name?: string;
    start_date?: string;
    company_id?: string;
    end_date?: string;
    identifier?: string;
    identifier_value?: string;
};
type LogInfo = {
    _id?: string;
    status?: string;
    event_type?: string;
    marketplace_name?: string;
    event?: string;
    trace_id?: string;
    company_id?: number;
    brand_id?: number;
    store_code?: string;
    store_id?: number;
    item_id?: number;
    article_id?: string;
    seller_identifier?: string;
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
    company_id: number;
    is_active: boolean;
    app_ids: Array<string>;
    job_type: string;
    discount_type: string;
    discount_level: string;
    value?: number;
    file_path?: string;
    brand_ids?: Array<number>;
    store_ids?: Array<number>;
    validity: ValidityObject;
};
type DiscountJob = {
    _id: string;
    name: string;
    company_id: number;
    is_active: boolean;
    app_ids?: Array<string>;
    job_type?: string;
    discount_type?: string;
    discount_level?: string;
    value?: number;
    file_path?: string;
    brand_ids?: Array<number>;
    store_ids?: Array<number>;
    validity: ValidityObject;
    created_on: string;
    modified_on: string;
    created_by: UserDetails;
    modified_by: UserDetails;
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
    company_id: number;
    body?: any;
    type: string;
    file_type: string;
};
type DownloadFileJob = {
    brand_ids?: Array<number>;
    store_ids?: Array<number>;
};
type CancelJobResponse = {
    success: boolean;
};
type UserDetails = {
    username: string;
    user_id: string;
};
type BadRequestObject = {
    message: string;
};
type AddProxyReq = {
    attached_path?: string;
    proxy_url?: string;
};
type AddProxyResponse = {
    _id?: string;
    attached_path?: string;
    proxy_url?: string;
    company_id?: string;
    application_id?: string;
    extension_id?: string;
    created_at?: string;
    modified_at?: string;
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
type EventConfig = {
    id?: number;
    event_name?: string;
    event_type?: string;
    version?: string;
    display_name?: string;
    description?: string;
    created_on?: string;
};
type EventConfigList = {
    items?: Array<EventConfig>;
};
type SubscriberConfigList = {
    subscribers?: Array<SubscriberConfig>;
};
type EventProcessedStatus = {
    id?: number;
    subscriber_id?: string;
    attempt?: number;
    response_code?: string;
    response_message?: string;
    created_on?: string;
    processed_on?: string;
    status?: boolean;
};
type EventPayload = {
    id?: number;
    event_trace_id?: string;
    event_company_id?: number;
    event_application_id?: string;
    event_extension_id?: string;
    event_name?: string;
    status?: boolean;
};
type SubscriberConfig = {
    id?: number;
    webhook_url?: string;
    company_id?: number;
    application_id?: string;
    extension_id?: string;
    status?: string;
    auth_meta?: any;
    created_on?: string;
    updated_on?: string;
    subscriber_event_mapping?: any;
};
type SubscriberEvent = {
    id?: number;
    subscriber_id?: number;
    event_id?: number;
    created_date?: string;
};
type AuthMeta = {
    type?: string;
    username?: string;
    password?: string;
};
import Paginator = require("../common/Paginator");
import { InventoryValidator } from "./PlatformModels";
import { OrderValidator } from "./PlatformModels";
